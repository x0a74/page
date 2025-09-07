function valueToColor(v, vMin, vMax) {
  const min = 1e-17, max = 1e+1;
  v = Math.min(Math.max(v, min), max);
  const t = (Math.log10(v) - Math.log10(min)) / (Math.log10(max) - Math.log10(min));

  const palette = [
    [0, 0, 0],     // black
    [0, 0, 255],   // blue
    [0, 255, 0],   // green
    [255, 255, 0]  // yellow
  ];

  const seg = palette.length - 1;
  const idx = Math.min(Math.floor(t * seg), seg - 1);
  const localT = t * seg - idx;

  const lerp = (a, b, u) => Math.round(a + (b - a) * u);
  const c0 = palette[idx], c1 = palette[idx + 1];
  return `rgb(${lerp(c0[0], c1[0], localT)},${lerp(c0[1], c1[1], localT)},${lerp(c0[2], c1[2], localT)})`;
}

/* DOM */
const planCanvas = document.getElementById('planCanvas');
const sideCanvas = document.getElementById('sideCanvas');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const planStatus = document.getElementById('planStatus');
const sideStatus = document.getElementById('sideStatus');
const planLegend = document.getElementById('planLegend');
const sideLegend = document.getElementById('sideLegend');

/* 入力取得 */
function readInputs() {
    return {
        lat0: parseFloat(document.getElementById('lat0').value),
        lon0: parseFloat(document.getElementById('lon0').value),
        Q: parseFloat(document.getElementById('Q').value),
        U: parseFloat(document.getElementById('U').value),
        windDir: parseFloat(document.getElementById('windDir').value),
        lambda: parseFloat(document.getElementById('lambda').value),
        H: parseFloat(document.getElementById('H').value),
        stability: document.getElementById('stability').value,
        radius_m: parseFloat(document.getElementById('radius_m').value),
        step_m: parseFloat(document.getElementById('step_m').value)
    };
}

/* クリア */
function clearCanvases() {
    planCanvas.getContext('2d').clearRect(0, 0, planCanvas.width, planCanvas.height);
    sideCanvas.getContext('2d').clearRect(0, 0, sideCanvas.width, sideCanvas.height);
    planStatus.textContent = 'クリア';
    sideStatus.textContent = 'クリア';
    planLegend.innerHTML = '';
    sideLegend.innerHTML = '';
}


/* main: 平面図描画 */
async function drawPlanView(params, results) {
    const ctx = planCanvas.getContext('2d');
    const W = planCanvas.width, H = planCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // x,y 範囲は ±radius_m
    const R = params.radius_m;
    const scaleX = W / (2 * R);
    const scaleY = H / (2 * R);
    const scale = Math.min(scaleX, scaleY);

    const toPixel = (x, y) => {
    // 位置は縦横別々のスケールで座標変換（範囲は維持）
    const px = (x + R) * scaleX;
    const py = (R - y) * scaleY;
    return [px, py];
    };

    // find min/max concentration for coloring
    const concs = results.map(r => r.conc).filter(v => v > 0 && isFinite(v));
    if (concs.length === 0) {
        planStatus.textContent = '計算結果なし';
        return;
    }
    const vMin = Math.max(Math.min(...concs), 1e-12);
    const vMax = Math.max(...concs);

    const step_px = params.step_m * scale; // セルの一辺（px単位）
    const rotatesin = Math.sin((-90-params.windDir) * Math.PI / 180);
    const rotatecos = Math.cos((-90-params.windDir) * Math.PI / 180);
    for (const r of results) {
        const [px, py] = toPixel(r.x*rotatecos-r.y*rotatesin, r.x*rotatesin+r.y*rotatecos);
        if (px < 0 || px >= W || py < 0 || py >= H) continue;

        if (!r.conc || !isFinite(r.conc) || r.conc <= 0) continue;

        const col = valueToColor(r.conc, vMin, vMax);
        ctx.fillStyle = col;

        // セル中央 (px, py) を基準に正方形を描画
        ctx.fillRect(px - step_px / 2, py - step_px / 2, step_px, step_px);
    }

    // draw axes and source marker
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); // center horizontal
    ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); // center vertical
    ctx.stroke();

    // source at center
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText('Source', W / 2 + 8, H / 2 - 8);
    ctx.fillText('N', W / 2 + 8, 8);
    ctx.fillText('S', W / 2 + 8, H - 8);
    ctx.fillText('E', W - 8, H / 2 - 8);
    ctx.fillText('W', 8, H / 2 - 8);

    planStatus.textContent = `点数: ${results.length}, log10 range: ${Math.log10(vMin).toFixed(2)} … ${Math.log10(vMax).toFixed(2)}`;
    planLegend.innerHTML = `log10(min)=${Math.log10(vMin).toFixed(2)} ～ log10(max)=${Math.log10(vMax).toFixed(2)}`;
}

/* main: 側面図描画
    - 横軸: x from 0..radius_m
    - 縦軸: z from 0..zMax (set as H + radius_m/4 or H+1000)
    - 解法: 各 x 刻みに z をサンプリングし calcConcentrationStability を呼んで色を決定
*/
async function drawSideView(params) {
    const ctx = sideCanvas.getContext('2d');
    const W = sideCanvas.width, H = sideCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // simple checks: require calcConcentrationStability
    if (typeof calcConcentrationStability !== 'function') {
        sideStatus.textContent = 'Error: calcConcentrationStability が未定義です（外部で定義してください）';
        return;
    }

    const R = params.radius_m;
    const xSamples = Math.min(200, Math.floor(R / Math.max(1, params.step_m))); // 在庫制限
    const zMax = Math.max(params.H + 1000, R * 0.5);
    const zSamples = 200;

    // compute concentrations on grid
    const grid = new Float64Array(xSamples * zSamples);
    let vMin = Infinity, vMax = -Infinity;
    for (let ix = 0; ix < xSamples; ix++) {
        const x = (ix / (xSamples - 1)) * R; // from 0..R
        for (let iz = 0; iz < zSamples; iz++) {
            const z = (iz / (zSamples - 1)) * zMax;
            // crosswind y set to 0 (center line)
            const c = calcConcentrationStability(x, 0, z, params.Q, params.U, params.lambda, params.H, params.stability);
            const idx = ix * zSamples + iz;
            grid[idx] = (isFinite(c) && c > 0) ? c : 0;
            if (grid[idx] > 0) {
                vMin = Math.min(vMin, grid[idx]);
                vMax = Math.max(vMax, grid[idx]);
            }
        }
    }
    if (!isFinite(vMin)) {
        sideStatus.textContent = '側面図: 有効な濃度が得られませんでした';
        return;
    }

    // render as image
    const img = ctx.createImageData(W, H);
    for (let j = 0; j < H; j++) {
        for (let i = 0; i < W; i++) {
            // map pixel to grid coords
            const fx = i / (W - 1);
            const fz = 1 - (j / (H - 1)); // top = zMax
            const gx = Math.floor(fx * (xSamples - 1));
            const gz = Math.floor(fz * (zSamples - 1));
            const idx = gx * zSamples + gz;
            const v = grid[idx];
            const outIdx = (j * W + i) * 4;
            if (!v || v <= 0) {
                img.data[outIdx + 0] = 0; img.data[outIdx + 1] = 0; img.data[outIdx + 2] = 0; img.data[outIdx + 3] = 0;
            } else {
                const col = valueToColor(v, vMin, vMax);
                const m = col.match(/(\d+),\s*(\d+),\s*(\d+)/);
                img.data[outIdx + 0] = parseInt(m[1]);
                img.data[outIdx + 1] = parseInt(m[2]);
                img.data[outIdx + 2] = parseInt(m[3]);
                img.data[outIdx + 3] = 220;
            }
        }
    }
    ctx.putImageData(img, 0, 0);

    // axes
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, H - H*params.H/zMax); ctx.lineTo(W - 1, H - H*params.H/zMax); // x axis bottom
    ctx.moveTo(2, 0); ctx.lineTo(2, H - 1); // z axis left
    ctx.stroke();

    // labels
    ctx.fillStyle = 'white';
    ctx.font = '12px sans-serif';
    ctx.fillText('x (m)', W - 40, H - H*params.H/zMax - 6);
    ctx.fillText('z (m)', 6, 14);

    sideStatus.textContent = `側面: xSamples=${xSamples}, zMax=${Math.round(zMax)} m, log10 range: ${Math.log10(vMin).toFixed(2)} … ${Math.log10(vMax).toFixed(2)}`;
    sideLegend.innerHTML = `log10(min)=${Math.log10(vMin).toFixed(2)} ～ log10(max)=${Math.log10(vMax).toFixed(2)}`;
}

/* compute + draw */
async function runSimulation() {
    const params = readInputs();
    try {
        const results = computeConcentrationField(params.lat0, params.lon0, params.H, params.windDir, params.Q, params.U, params.lambda, params.stability, params.radius_m, params.step_m, 0);
        // computeConcentrationField may be synchronous; treat result as array
        if (!Array.isArray(results)) {
            planStatus.textContent = 'computeConcentrationField の戻り値が配列ではありません';
            return;
        }
        await drawPlanView(params, results);
        await drawSideView(params);
    } catch (e) {
        console.error(e);
        planStatus.textContent = '計算エラー: ' + (e && e.message ? e.message : e);
        sideStatus.textContent = '計算エラー';
        alert('計算中に例外が発生しました。コンソールを確認してください。');
    }
}

/* イベント */
runBtn.addEventListener('click', runSimulation);
clearBtn.addEventListener('click', clearCanvases);

/* 初期クリア */
clearCanvases();
runSimulation()