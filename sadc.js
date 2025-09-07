function generateObservationPoints(lat0, lon0, radius_m, step_m) {
    const points = [];
    const R = 6371000;
    const toRad = deg => deg * Math.PI / 180;
    const toDeg = rad => rad * 180 / Math.PI;

    for (let dx = -radius_m; dx <= radius_m; dx += step_m) {
        for (let dy = -radius_m; dy <= radius_m; dy += step_m) {
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist <= radius_m) {
                // 方位角
                const bearing = Math.atan2(dy, dx); // rad, 東=0
                const brgDeg = (toDeg(bearing) + 360) % 360;

                // 移動先座標（簡易的にVincentyでも可）
                const lat = lat0 + (dy / R) * (180/Math.PI);
                const lon = lon0 + (dx / (R * Math.cos(toRad(lat0)))) * (180/Math.PI);

                points.push({ lat, lon });
            }
        }
    }
    return points;
}

function calcConcentrationStability(x, y, z, Q, U, lambda, H, stability) {
    // 安定度ごとの θ1
    const theta1Table = {
        "A": 50,
        "B": 40,
        "C": 30,
        "D": 20,
        "E": 15,
        "F": 10
    };
    const K = 6.7775e-4;

    // σz のパラメータテーブル
    const sigmaParams = {
        ">=0.2": {
            "A": { sigma0: 768.1, P0: 3.9077, P1: 3.898,   P2: 1.7330 },
            "B": { sigma0: 122.0, P0: 1.4132, P1: 0.49523, P2: 0.12772 },
            "C": { sigma0: 58.1,  P0: 0.8916, P1: -0.001649, P2: 0.0 },
            "D": { sigma0: 31.7,  P0: 0.7626, P1: -0.095108, P2: 0.0 },
            "E": { sigma0: 22.2,  P0: 0.7117, P1: -0.12697,  P2: 0.0 },
            "F": { sigma0: 13.8,  P0: 0.6582, P1: -0.1227,   P2: 0.0 }
        },
        "<0.2": {
            "A": { sigma0: 165,  P0: 1.07,  P1: 0.0, P2: 0.0 },
            "B": { sigma0: 83.7, P0: 0.894, P1: 0.0, P2: 0.0 },
            "C": { sigma0: 58.0, P0: 0.891, P1: 0.0, P2: 0.0 },
            "D": { sigma0: 33.0, P0: 0.854, P1: 0.0, P2: 0.0 },
            "E": { sigma0: 24.4, P0: 0.854, P1: 0.0, P2: 0.0 },
            "F": { sigma0: 15.5, P0: 0.822, P1: 0.0, P2: 0.0 }
        }
    };

    // xをkm単位に変換して log10 をとる
    const x_km = x / 1000;
    const logx = Math.log10(x_km);

    // σy の計算
    const theta1 = theta1Table[stability];
    const sigmaY = K * theta1 * (5 - Math.log10(x)) * x; // m単位に戻す

    // σz の計算（修正版：べき乗）
    const regime = (x_km >= 0.2) ? ">=0.2" : "<0.2";
    const { sigma0, P0, P1, P2 } = sigmaParams[regime][stability];
    const exponent = P0 + P1 * logx + P2 * logx * logx;
    const sigmaZ = sigma0 * Math.pow(x_km, exponent);

    // 濃度計算
    const term1 = Q / (2 * Math.PI * sigmaY * sigmaZ * U);
    const term2 = Math.exp(-lambda * x / U);
    const term3 = Math.exp(-(y * y) / (2 * sigmaY * sigmaY));
    const term4 = Math.exp(-((z - H) * (z - H)) / (2 * sigmaZ * sigmaZ));
    const term5 = Math.exp(-((z + H) * (z + H)) / (2 * sigmaZ * sigmaZ));

    return term1 * term2 * term3 * (term4 + term5);
}

function projectToWind(lat1, lon1, windDir, lat2, lon2) {
    const R = 6371000; // 地球半径 [m]

    const toRad = deg => deg * Math.PI / 180;
    const toDeg = rad => rad * 180 / Math.PI;

    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);

    // haversine距離
    const a = Math.sin(Δφ / 2) ** 2 +
              Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    // 方位角 (点1→点2)
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) -
              Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const bearing12 = (toDeg(Math.atan2(y, x)) + 360) % 360;

    // 基準方向 = 風下方向 (風向 + 180°)
    const downwindBearing = (windDir + 180) % 360;

    // 差分
    const Δ = toRad(bearing12 - downwindBearing);

    // 成分分解
    const x_comp = d * Math.cos(Δ); // downwind成分
    const y_comp = d * Math.sin(Δ); // crosswind成分

    return { x: x_comp, y: y_comp, d: d };
}

function computeConcentrationField(lat0, lon0, H, windDir, Q, U, lambda, stability, radius_m=4000, step_m=100,z) {
    const obsPoints = generateObservationPoints(lat0, lon0, radius_m, step_m);
    const results = [];

    for (const p of obsPoints) {
        const { x, y, d } = projectToWind(lat0, lon0, windDir, p.lat, p.lon);
        if (x >= 0) { // downwind側のみ計算
            const conc = calcConcentrationStability(x, y, z, Q, U, lambda, H, stability);
            results.push({ lat: p.lat, lon: p.lon, x, y, conc });
        }
    }
    console.log(results)
    return results;
}
