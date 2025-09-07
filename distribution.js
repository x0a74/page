//Yokoyama

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const width = 960;
const height = 540;
canvas.width = width;
canvas.height = height;

const areaXMin = 0;
const areaXMax = 4200;
const areaYmin = -1400;
const areaYmax = 1400;
const dispMin = Math.log10(1e-17);
const dispMax = Math.log10(1e+1);
const colorBar = [
    [255, 255, 255],//white
    [0, 0, 255],//blue
    [0, 255, 0],//green
    [255, 255, 0]];//yellow

const resolutions = [10, 5, 2];
let resolution = 0;

let numCols = 0;
let numRows = 0;
let xCenter = 0;
let xResolution = 0;
let yResolution = 0;

let values = [];
let maxValue = [];

let K = 0.67775;//K constant
let Q = 1.0e+3;//Initial Release Rate (Bq/h)
let U = 0.5;//Initial Wind Speed (m/s)
let Height = 80.0;//Initial Effective Height (m)
let Stability = 3;//Initial Atmospheric stability A to F -> 0 to 5
let CalcHeight = 0.0;//Initial Calculation Height

const airStabilityConstant = [
    [50, 768.1, 3.9077, 3.898, 1.7330, 165, 1.07],
    [40, 122.0, 1.4132, 0.49523, 0.12772, 83.7, 0.894],
    [30, 58.1, 0.8916, -0.001649, 0.0, 58.0, 0.891],
    [20, 31.7, 0.7626, -0.095108, 0.0, 33.0, 0.854],
    [15, 22.2, 0.7117, -0.12697, 0.0, 24.4, 0.854],
    [10, 13.8, 0.6582, -0.1227, 0.0, 15.5, 0.822]]

// 初回描画
dispInit();
generateValues()
drawCanvas();

// セルにカーソルをホバーした際のイベントハンドラ
canvas.addEventListener("mousemove", handleMouseMove);
function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(
        ((event.clientX - rect.left) / (rect.right - rect.left)) * numCols
    );
    const y = Math.floor(
        ((event.clientY - rect.top) / (rect.bottom - rect.top)) * numRows
    );
    if (x >= 0 & y >= 0) {
        const value = values[y][x];
        let xpos = (x - xCenter) * xResolution;
        let ypos = (Math.floor(numRows / 2) - y) * yResolution;
        canvas.title = `x: ${xpos.toFixed(1)}m, y: ${ypos.toFixed(1)}m\n${value.toExponential(2)} Bq/m3`;
    }
}


function dispInit() {
    numCols = Math.ceil(canvas.width / resolutions[resolution]);
    numRows = Math.ceil(canvas.height / resolutions[resolution]);
    if (!(numRows % 2)) { numRows++; }
    xCenter = Math.round(numCols * (-areaXMin / (-areaXMin + areaXMax)));
    xResolution = (-areaXMin + areaXMax) / numCols;
    yResolution = (-areaYmin + areaYmax) / numRows;
}

function generateValues() {
    //気象指針の式にしたがって各セルの濃度計算を実行する関数
    //Function to perform concentration calculations for each cell according to the formula in the meteorological guidelines
    values = [];
    maxValue = [Number.MIN_VALUE, 0];
    let s01 = airStabilityConstant[Stability][0];
    let s1f = airStabilityConstant[Stability][1];
    let a1f = airStabilityConstant[Stability][2];
    let a2f = airStabilityConstant[Stability][3];
    let a3f = airStabilityConstant[Stability][4];
    let s1n = airStabilityConstant[Stability][5];
    let a1n = airStabilityConstant[Stability][6];
    const startTime = performance.now();
    for (let i = 0; i < numRows; i++) {
        values[i] = [];
        for (let j = 0; j < numCols; j++) {
            let xpos = (j - xCenter) * (xResolution / 1000);//km
            if (xpos == 0) { xpos = 0.00001; }
            let ypos = (Math.floor(numRows / 2) - i) * (yResolution / 1000);//km
            let zpos = CalcHeight;
            let mlogx = Math.log10(xpos);
            let sy = K * s01 * (5 - mlogx) * xpos;
            let sz = 0;
            if (xpos <= 0.2) {
                sz = s1n * Math.pow(xpos, a1n);
            } else {
                sz = s1f * Math.pow(xpos, (a1f + a2f * mlogx + a3f * (mlogx * mlogx)));
            }
            if (sz > 1000) { sz = 1000; }
            values[i][j] = (((Q / 3600) / (2 * Math.PI * sy * sz * U))) * Math.exp(-((ypos * 1000) ** 2) / (2 * (sy * sy))) * (Math.exp(-((zpos - Height) ** 2) / (2 * (sz * sz))) + Math.exp(-((zpos + Height) ** 2) / (2 * (sz * sz))));
            if (maxValue[0] <= values[i][j]) {
                maxValue = [values[i][j], (j - xCenter) * xResolution]
            }
        }
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    let calccond = document.getElementById("calc-condition");
    let message = `
    Release rate: ${Q.toExponential(1)} Bq/h<br>
    Wind Speed: ${U} m/s<br>
    Effective Height: ${Height} m<br>
    Atmospheric stability: ${String.fromCharCode(Stability + 65)}<br>
    Calculation Height: ${CalcHeight} m<br>`;
    calccond.innerHTML = message;

    let resultmessage = document.getElementById("result-message");
    message = `
    Maximum Concentration Site: ${maxValue[1].toFixed(1)} m from the release point,
     ${maxValue[0].toExponential(2)} Bq/m<sup>3</sup>.<br><br>
    Calculation Time: ${executionTime.toFixed(1)}m sec.`;
    if (maxValue[1] >= (numCols * xResolution - 100)) {
        message += '<p class="red">The Maximum Concentration Site may be outside the calculation range.</p>'
    }
    resultmessage.innerHTML = message;
    return;
}
// キャンバスの描画
function drawCanvas() {
    const cellWidth = canvas.width / numCols;
    const cellHeight = canvas.height / numRows;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let value = Math.log10(values[i][j]);
            if (value <= dispMin) { value = dispMin }
            else if (value >= dispMax) { value = dispMax }
            let colorValue = (value - dispMin) / (dispMax - dispMin);

            ctx.fillStyle = getColorScale(colorValue);
            ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
    }

    ctx.fillStyle = "gray";
    let numXScale = Math.floor(numCols * xResolution / 100);
    for (let i = 0; i < numXScale; i++) {
        let xp = (i * 100 / (numCols * xResolution)) * canvas.width;
        let sclarge = i % 5 ? 5 : 10;
        ctx.fillRect(xp, (canvas.height / 2) - sclarge / 2 + 1, 1, sclarge);
    }
    ctx.fillRect(0, canvas.height / 2, canvas.width, 1);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(0, canvas.height / 2, 5, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
}

function getColorScale(value) {
    var index = Math.floor(value * (colorBar.length - 1));

    if (index >= colorBar.length - 1) {
        return 'rgb(' + colorBar[colorBar.length - 1].join(',') + ')';
    }

    var startColor = colorBar[index];
    var endColor = colorBar[index + 1];
    var ratio = value * (colorBar.length - 1) - index;

    var red = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    var green = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    var blue = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

const releaseRateInput = document.querySelector("#releaserate");
releaseRateInput.addEventListener("input", () => {
    Q = Number(releaseRateInput.value);
    generateValues();
    drawCanvas();
})

const windspeedInput = document.querySelector("#windspeed");
windspeedInput.addEventListener("input", () => {
    U = Number(windspeedInput.value);
    generateValues();
    drawCanvas();
})

const heightInput = document.querySelector("#effectiveheight");
heightInput.addEventListener("input", () => {
    Height = Number(heightInput.value);
    generateValues();
    drawCanvas();
})

const calHeightInput = document.querySelector("#calculationheight");
calHeightInput.addEventListener("input", () => {
    CalcHeight = Number(calHeightInput.value);
    if (CalcHeight > 2000) {
        calHeightInput.value = 2000;
        CalcHeight = 2000;
    }
    calcHeightBar.value = CalcHeight / 20;
    generateValues();
    drawCanvas();
})

const asButtons = document.querySelectorAll('input[name="as"]');
for (let target of asButtons) {
    target.addEventListener("input", () => {
        Stability = Number(target.value);
        generateValues();
        drawCanvas();
    })
}

const resSelect = document.getElementById("resolution-select");
resSelect.addEventListener("change", () => {
    resolution = Number(resSelect.value)
    dispInit();
    generateValues();
    drawCanvas();
})

const resheightcalc = document.getElementById("resolution");
const divcanvas2 = document.getElementById("canvas2");
const canvas2 = document.getElementById("myCanvas2");
const ctx2 = canvas2.getContext("2d");

const width2 = 60;
canvas2.width = width2;
canvas2.height = height;
divcanvas2.style.paddingTop = window.getComputedStyle(resheightcalc).getPropertyValue("height");
ctx2.fillStyle = "black";
ctx2.fillRect(4, 9, (width2 / 3) + 2, height - 18);
for (let i = 0; i < height - 20; i++) {
    ctx2.fillStyle = getColorScale(1 - (i / (height - 20)));
    ctx2.fillRect(5, i + 10, width2 / 3, 1);
}
ctx2.fillStyle = "black";
ctx2.font = "8px sans-serif";
for (let i = 0; i <= dispMax - dispMin; i++) {
    let sign = Math.sign(dispMax - i) >= 0 ? '+' : '';
    ctx2.fillText(`1e${sign}${dispMax - i}`, 7 + width2 / 3, 10 + i * (height - 20) / (dispMax - dispMin));
}

const calcHeightBar = document.getElementById("calcheight");
calcHeightBar.style.marginTop = window.getComputedStyle(resheightcalc).getPropertyValue("height");
calcHeightBar.addEventListener("input", () => {
    CalcHeight = Number(calcHeightBar.value) * 20;
    calHeightInput.value = Number(calcHeightBar.value) * 20;
    generateValues();
    drawCanvas();
})

const btn = document.getElementById('exp_right');
const expbox = document.getElementById('explanation');
btn.addEventListener('click', () => {
    if (expbox.style.display == 'block') {
        expbox.style.display = 'none';
    } else {
        expbox.style.display = 'block';
    }
}, false);