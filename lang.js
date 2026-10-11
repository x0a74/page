const translations = {
  "en": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "This is a simplified calculation model for understanding the basics of dispersion calculations. It cannot be used for any purpose other than training.",
    "conditionsBtn": "Calculation conditions",
    "close": "Close",
    "assumptionTitle": "Calculation conditions and assumptions",
    "assumptionIntro": "This simulator uses a Gaussian plume model created based on Japan's \"Meteorological Guide for Safety Analysis of Nuclear Power Reactor Facilities.\" It is a simplified calculation based on the following assumptions, and cannot be used for actual dose assessment, evacuation decisions, or any purpose other than training.",
    "colNo": "No.",
    "colAssumption": "Assumption",
    "colActual": "Representation / limitation",
    "preset": "Preset",
    "tokyo": "Reset to Tokyo Tower",
    "recenter": "Center on source",
    "release": "Release conditions",
    "met": "Meteorology",
    "display": "Display conditions",
    "stabilityLabel": "Atmospheric stability",
    "dirHelp": "Downwind direction. The plume extends toward the selected bearing.",
    "auto": "Auto recalculation. Circular area. Default grid 50 m.",
    "hintTitle": "Reading hint",
    "hint": "Click a colored cell to show concentration in a popup and below.",
    "legend": "Concentration scale",
    "legendNote": "Fixed logarithmic gradient: transparent → blue → green → yellow. Values ≥ 1e+1 stay yellow.",
    "tabs": [
      "Conditions",
      "Selected cell",
      "Formula"
    ],
    "none": "Click a colored cell on the map.",
    "coords": "Coordinates",
    "source": "Source",
    "downwind": "Downwind direction",
    "horizontal": "Horizontal distance from source",
    "popupC": "Concentration",
    "result": "Result",
    "ge": "≥",
    "prefactor": "Prefactor",
    "decayTerm": "Decay term",
    "lateralTerm": "Lateral term",
    "verticalTerm": "Vertical term",
    "labels": {
      "Q": "Release rate Q",
      "lam": "Decay coefficient λ",
      "H": "Release height H",
      "U": "Wind speed U",
      "z": "Display height z",
      "range": "Calculation radius",
      "cell": "Grid interval",
      "stability": "Atmospheric stability",
      "sigmaY": "Lateral dispersion width σy",
      "sigmaZ": "Vertical dispersion width σz",
      "x": "Downwind distance x",
      "y": "Crosswind distance y",
      "C": "Concentration C"
    }
  },
  "ja": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "拡散計算の基礎を理解するための簡易計算モデルです。研修用途以外には使用できません",
    "conditionsBtn": "計算条件",
    "close": "閉じる",
    "assumptionTitle": "計算条件と仮定",
    "assumptionIntro": "本シミュレーションは、日本の「発電用原子炉施設の安全解析に関する気象指針」をもとに作成した、ガウシアンプルームモデルを採用しています。以下の仮定に基づく簡易計算であり、実際の線量評価、避難判断など、研修以外の用途には使用できません。",
    "colNo": "番号",
    "colAssumption": "仮定",
    "colActual": "実際 / 限界",
    "preset": "プリセット",
    "tokyo": "東京タワーに戻す",
    "recenter": "放出点へ移動",
    "release": "放出条件",
    "met": "気象条件",
    "display": "表示条件",
    "stabilityLabel": "大気安定度",
    "dirHelp": "風下方向です。プルームが伸びる向きを選びます。",
    "auto": "条件変更ごとに自動再計算。計算領域は円形、格子初期値は50 mです。",
    "hintTitle": "読み取りヒント",
    "hint": "色付きセルをクリックすると、濃度をポップアップと下部パネルで確認できます。",
    "legend": "濃度スケール",
    "legendNote": "固定対数グラデーション：透明 → 青 → 緑 → 黄色。1e+1以上は黄色です。",
    "tabs": [
      "条件",
      "選択セル",
      "計算式"
    ],
    "none": "地図上の色付きセルをクリックしてください。",
    "coords": "座標",
    "source": "放出点",
    "downwind": "風下方向",
    "horizontal": "発生源からの水平距離",
    "popupC": "濃度",
    "result": "計算結果",
    "ge": "以上",
    "prefactor": "前係数",
    "decayTerm": "減衰項",
    "lateralTerm": "横方向項",
    "verticalTerm": "鉛直方向項",
    "labels": {
      "Q": "放出量 Q",
      "lam": "減衰係数 λ",
      "H": "放出高さ H",
      "U": "風速 U",
      "z": "表示高さ z",
      "range": "計算半径",
      "cell": "格子間隔",
      "stability": "大気安定度",
      "sigmaY": "横方向拡散幅 σy",
      "sigmaZ": "鉛直方向拡散幅 σz",
      "x": "風下距離 x",
      "y": "横方向距離 y",
      "C": "濃度 C"
    }
  },
  "bn": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "এটি বিচ্ছুরণ গণনার মৌলিক বিষয়গুলি বোঝার জন্য একটি সরলীকৃত মডেল। এটি প্রশিক্ষণ উদ্দেশ্য ছাড়া অন্য কোনো কাজে ব্যবহার করা যাবে না।",
    "conditionsBtn": "গণনার শর্ত (Calculation conditions)",
    "close": "বন্ধ করুন (Close)",
    "assumptionTitle": "গণনার শর্ত এবং অনুমান (Calculation conditions and assumptions)",
    "assumptionIntro": "এই সিমুলেটরটি জাপানের \"পারমাণবিক শক্তি চুল্লি সুবিধাগুলির নিরাপত্তা বিশ্লেষণের জন্য আবহাওয়া নির্দেশিকা\"-এর উপর ভিত্তি করে তৈরি একটি গাউসিয়ান প্লুম মডেল ব্যবহার করে। এটি নিম্নলিখিত অনুমানগুলির উপর ভিত্তি করে একটি সরলীকৃত গণনা, এবং প্রকৃত মাত্রা মূল্যায়ন, উচ্ছেদ সিদ্ধান্ত, বা প্রশিক্ষণ ছাড়া অন্য কোনো উদ্দেশ্যে ব্যবহার করা যাবে না।",
    "colNo": "নং (No.)",
    "colAssumption": "অনুমান (Assumption)",
    "colActual": "প্রকৃত / সীমাবদ্ধতা (Representation / limitation)",
    "preset": "প্রিসেট (Preset)",
    "tokyo": "টোকিও টাওয়ারে রিসেট করুন (Reset to Tokyo Tower)",
    "recenter": "উৎস কেন্দ্রে আনুন (Center on source)",
    "release": "নির্গমনের শর্ত (Release conditions)",
    "met": "আবহাওয়া (Meteorology)",
    "display": "প্রদর্শনের শর্ত (Display conditions)",
    "stabilityLabel": "বায়ুমণ্ডলীয় স্থিতিশীলতা (Atmospheric stability)",
    "dirHelp": "বাতাসের অনুকূল দিক (Downwind direction)। প্লুমটি (Plume) নির্বাচিত দিকে প্রসারিত হয়।",
    "auto": "স্বয়ংক্রিয় পুনঃগণনা (Auto recalculation)। বৃত্তাকার এলাকা। ডিফল্ট গ্রিড ৫০ মি।",
    "hintTitle": "পড়ার ইঙ্গিত (Reading hint)",
    "hint": "পপআপ এবং নিচে ঘনত্ব (Concentration) দেখতে একটি রঙিন কোষে ক্লিক করুন।",
    "legend": "ঘনত্বের স্কেল (Concentration scale)",
    "legendNote": "স্থির লগারিদমিক গ্রেডিয়েন্ট (Logarithmic gradient): স্বচ্ছ → নীল → সবুজ → হলুদ। মান ≥ 1e+1 হলুদ থাকে।",
    "tabs": [
      "শর্ত (Conditions)",
      "নির্বাচিত কোষ (Selected cell)",
      "সূত্র (Formula)"
    ],
    "none": "মানচিত্রে একটি রঙিন কোষে ক্লিক করুন।",
    "coords": "স্থানাঙ্ক (Coordinates)",
    "source": "উৎস (Source)",
    "downwind": "বাতাসের অনুকূল দিক (Downwind direction)",
    "horizontal": "উৎস থেকে অনুভূমিক দূরত্ব (Horizontal distance from source)",
    "popupC": "ঘনত্ব (Concentration)",
    "result": "ফলাফল (Result)",
    "ge": "≥",
    "prefactor": "প্রি-ফ্যাক্টর (Prefactor)",
    "decayTerm": "ডেকে টার্ম (Decay term)",
    "lateralTerm": "ল্যাটারাল টার্ম (Lateral term)",
    "verticalTerm": "ভার্টিক্যাল টার্ম (Vertical term)",
    "labels": {
      "Q": "নির্গমনের হার (Release rate) Q",
      "lam": "ডেকে কো-এফিসিয়েন্ট (Decay coefficient) λ",
      "H": "নির্গমনের উচ্চতা (Release height) H",
      "U": "বাতাসের গতি (Wind speed) U",
      "z": "প্রদর্শনের উচ্চতা (Display height) z",
      "range": "গণনার ব্যাসার্ধ (Calculation radius)",
      "cell": "গ্রিড ইন্টারভাল (Grid interval)",
      "stability": "বায়ুমণ্ডলীয় স্থিতিশীলতা (Atmospheric stability)",
      "sigmaY": "ল্যাটারাল ডিসপারসন উইডথ (Lateral dispersion width) σy",
      "sigmaZ": "ভার্টিক্যাল ডিসপারসন উইডথ (Vertical dispersion width) σz",
      "x": "ডাউনউইন্ড দূরত্ব (Downwind distance) x",
      "y": "ক্রসউইন্ড দূরত্ব (Crosswind distance) y",
      "C": "ঘনত্ব (Concentration) C"
    }
  },
  "id": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Ini adalah model perhitungan yang disederhanakan untuk memahami dasar-dasar perhitungan dispersi. Ini tidak dapat digunakan untuk tujuan apa pun selain pelatihan.",
    "conditionsBtn": "Kondisi perhitungan (Calculation conditions)",
    "close": "Tutup (Close)",
    "assumptionTitle": "Kondisi dan asumsi perhitungan (Calculation conditions and assumptions)",
    "assumptionIntro": "Simulator ini menggunakan model Gaussian plume yang dibuat berdasarkan \"Panduan Meteorologi untuk Analisis Keselamatan Fasilitas Reaktor Daya Nuklir\" Jepang. Ini adalah perhitungan sederhana berdasarkan asumsi berikut, dan tidak dapat digunakan untuk penilaian dosis aktual, keputusan evakuasi, atau tujuan apa pun selain pelatihan.",
    "colNo": "No.",
    "colAssumption": "Asumsi (Assumption)",
    "colActual": "Representasi / batasan (Representation / limitation)",
    "preset": "Prasetel (Preset)",
    "tokyo": "Kembali ke Tokyo Tower (Reset to Tokyo Tower)",
    "recenter": "Pusatkan ke sumber (Center on source)",
    "release": "Kondisi pelepasan (Release conditions)",
    "met": "Meteorologi (Meteorology)",
    "display": "Kondisi tampilan (Display conditions)",
    "stabilityLabel": "Stabilitas atmosfer (Atmospheric stability)",
    "dirHelp": "Arah bawah angin (Downwind direction). Plume memanjang ke arah yang dipilih.",
    "auto": "Hitung ulang otomatis. Area lingkaran. Grid awal 50 m.",
    "hintTitle": "Petunjuk baca (Reading hint)",
    "hint": "Klik sel berwarna untuk menampilkan konsentrasi (Concentration) pada popup dan panel bawah.",
    "legend": "Skala konsentrasi (Concentration scale)",
    "legendNote": "Gradien logaritmik tetap (Logarithmic gradient): transparan → biru → hijau → kuning. Nilai ≥ 1e+1 tetap kuning.",
    "tabs": [
      "Kondisi (Conditions)",
      "Sel terpilih (Selected cell)",
      "Rumus (Formula)"
    ],
    "none": "Klik sel berwarna pada peta.",
    "coords": "Koordinat (Coordinates)",
    "source": "Sumber (Source)",
    "downwind": "Arah bawah angin (Downwind direction)",
    "horizontal": "Jarak horizontal dari sumber",
    "popupC": "Konsentrasi (Concentration)",
    "result": "Hasil (Result)",
    "ge": "≥",
    "prefactor": "Faktor awal (Prefactor)",
    "decayTerm": "Suku peluruhan (Decay term)",
    "lateralTerm": "Suku lateral (Lateral term)",
    "verticalTerm": "Suku vertikal (Vertical term)",
    "labels": {
      "Q": "Laju pelepasan (Release rate) Q",
      "lam": "Koefisien peluruhan (Decay coefficient) λ",
      "H": "Tinggi pelepasan (Release height) H",
      "U": "Kecepatan angin (Wind speed) U",
      "z": "Tinggi tampilan (Display height) z",
      "range": "Radius perhitungan (Calculation radius)",
      "cell": "Interval grid (Grid interval)",
      "stability": "Stabilitas atmosfer (Atmospheric stability)",
      "sigmaY": "Lebar dispersi lateral (Lateral dispersion width) σy",
      "sigmaZ": "Lebar dispersi vertikal (Vertical dispersion width) σz",
      "x": "Jarak bawah angin (Downwind distance) x",
      "y": "Jarak melintang (Crosswind distance) y",
      "C": "Konsentrasi (Concentration) C"
    }
  },
  "kk": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Бұл дисперсияны есептеу негіздерін түсінуге арналған жеңілдетілген есептеу моделі. Оны оқытудан басқа ешбір мақсатта пайдалануға болмайды.",
    "conditionsBtn": "Есептеу шарттары (Calculation conditions)",
    "close": "Жабу (Close)",
    "assumptionTitle": "Есептеу шарттары мен жорамалдар (Calculation conditions and assumptions)",
    "assumptionIntro": "Бұл симулятор Жапонияның \"Атомдық энергетикалық реактор қондырғыларының қауіпсіздігін талдауға арналған метеорологиялық нұсқаулығы\" негізінде жасалған Гаусс шлейф моделін пайдаланады. Бұл төмендегі жорамалдарға негізделген жеңілдетілген есептеу және нақты дозаны бағалау, эвакуация туралы шешім қабылдау немесе оқытудан басқа кез келген мақсат үшін пайдаланылмайды.",
    "colNo": "№ (No.)",
    "colAssumption": "Жорамал (Assumption)",
    "colActual": "Көрінісі / шектеуі (Representation / limitation)",
    "preset": "Алдын ала орнату (Preset)",
    "tokyo": "Токио мұнарасына қайтару (Reset to Tokyo Tower)",
    "recenter": "Көзге орталықтандыру (Center on source)",
    "release": "Шығару шарттары (Release conditions)",
    "met": "Метеорология (Meteorology)",
    "display": "Көрсету шарттары (Display conditions)",
    "stabilityLabel": "Атмосфералық тұрақтылық (Atmospheric stability)",
    "dirHelp": "Жел бағытымен (Downwind direction). Плюм (Plume) таңдалған бағытқа созылады.",
    "auto": "Автоматты қайта есептеу. Дөңгелек аймақ. Бастапқы тор 50 м.",
    "hintTitle": "Оқу бойынша кеңес (Reading hint)",
    "hint": "Концентрацияны (Concentration) қалқымалы терезеде және төменде көру үшін түрлі-түсті ұяшықты басыңыз.",
    "legend": "Концентрация шкаласы (Concentration scale)",
    "legendNote": "Бекітілген логарифмдік градиент: мөлдір → көк → жасыл → сары. Мәндер ≥ 1e+1 сары болып қалады.",
    "tabs": [
      "Шарттар (Conditions)",
      "Таңдалған ұяшық (Selected cell)",
      "Формула (Formula)"
    ],
    "none": "Картадағы түрлі-түсті ұяшықты басыңыз.",
    "coords": "Координаттар (Coordinates)",
    "source": "Көз (Source)",
    "downwind": "Жел бағытымен (Downwind direction)",
    "horizontal": "Көзден көлденең қашықтық (Horizontal distance)",
    "popupC": "Концентрация (Concentration)",
    "result": "Нәтиже (Result)",
    "ge": "≥",
    "prefactor": "Префактор (Prefactor)",
    "decayTerm": "Ыдырау мүшесі (Decay term)",
    "lateralTerm": "Бүйірлік мүше (Lateral term)",
    "verticalTerm": "Тік мүше (Vertical term)",
    "labels": {
      "Q": "Шығару жылдамдығы (Release rate) Q",
      "lam": "Ыдырау коэффициенті (Decay coefficient) λ",
      "H": "Шығару биіктігі (Release height) H",
      "U": "Жел жылдамдығы (Wind speed) U",
      "z": "Көрсету биіктігі (Display height) z",
      "range": "Есептеу радиусы (Calculation radius)",
      "cell": "Тор аралығы (Grid interval)",
      "stability": "Атмосфералық тұрақтылық (Atmospheric stability)",
      "sigmaY": "Көлденең дисперсия ені (Lateral dispersion width) σy",
      "sigmaZ": "Тік дисперсия ені (Vertical dispersion width) σz",
      "x": "Жел бағытындағы қашықтық (Downwind distance) x",
      "y": "Көлденең жел қашықтығы (Crosswind distance) y",
      "C": "Концентрация (Concentration) C"
    }
  },
  "mn": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Энэ нь тархалтын тооцооллын үндсийг ойлгоход зориулагдсан хялбаршуулсан тооцооллын загвар юм. Үүнийг сургалтаас өөр ямар ч зорилгоор ашиглах боломжгүй.",
    "conditionsBtn": "Тооцооны нөхцөл (Calculation conditions)",
    "close": "Хаах (Close)",
    "assumptionTitle": "Тооцооны нөхцөл ба таамаглал (Calculation conditions and assumptions)",
    "assumptionIntro": "Энэхүү симулятор нь Японы \"Цөмийн эрчим хүчний реакторын байгууламжийн аюулгүй байдлын шинжилгээний цаг уурын удирдамж\"-д үндэслэн гаргасан Гауссын плюм загварыг ашигладаг. Энэ нь дараах таамаглал дээр үндэслэсэн хялбаршуулсан тооцоолол бөгөөд бодит тунгийн үнэлгээ, нүүлгэн шилжүүлэх шийдвэр, эсвэл сургалтаас өөр ямар ч зорилгоор ашиглах боломжгүй.",
    "colNo": "Д/д (No.)",
    "colAssumption": "Таамаглал (Assumption)",
    "colActual": "Төлөөлөл / хязгаарлалт (Representation / limitation)",
    "preset": "Урьдчилсан тохиргоо (Preset)",
    "tokyo": "Токио цамхаг руу буцаах (Reset to Tokyo Tower)",
    "recenter": "Эх үүсвэрт голлуулах (Center on source)",
    "release": "Ялгаруулах нөхцөл (Release conditions)",
    "met": "Цаг уур (Meteorology)",
    "display": "Дэлгэцийн нөхцөл (Display conditions)",
    "stabilityLabel": "Агаар мандлын тогтвортой байдал (Atmospheric stability)",
    "dirHelp": "Салхины чиглэл (Downwind direction). Плюм (Plume) сонгосон чиглэл рүү сунана.",
    "auto": "Автомат дахин тооцоолол. Дугуй талбай. Анхны тор 50 м.",
    "hintTitle": "Унших зөвлөмж (Reading hint)",
    "hint": "Өнгөт нүдэн дээр дарж концентрацийг (Concentration) харах.",
    "legend": "Концентрацийн хуваарь (Concentration scale)",
    "legendNote": "Тогтмол логарифм градиент: тунгалаг → цэнхэр → ногоон → шар. ≥ 1e+1 утгууд шар хэвээр байна.",
    "tabs": [
      "Нөхцөл (Conditions)",
      "Сонгосон нүд (Selected cell)",
      "Томьёо (Formula)"
    ],
    "none": "Газрын зураг дээрх өнгөт нүдийг дарна уу.",
    "coords": "Координат (Coordinates)",
    "source": "Эх үүсвэр (Source)",
    "downwind": "Салхины чиглэл (Downwind direction)",
    "horizontal": "Эх үүсвэрээс хэвтээ зай (Horizontal distance)",
    "popupC": "Концентраци (Concentration)",
    "result": "Үр дүн (Result)",
    "ge": "≥",
    "prefactor": "Урьдчилсан хүчин зүйл (Prefactor)",
    "decayTerm": "Задралын гишүүн (Decay term)",
    "lateralTerm": "Хажуугийн гишүүн (Lateral term)",
    "verticalTerm": "Босоо гишүүн (Vertical term)",
    "labels": {
      "Q": "Ялгаруулах хурд (Release rate) Q",
      "lam": "Задралын коэффициент (Decay coefficient) λ",
      "H": "Ялгаруулах өндөр (Release height) H",
      "U": "Салхины хурд (Wind speed) U",
      "z": "Дэлгэцийн өндөр (Display height) z",
      "range": "Тооцооллын радиус (Calculation radius)",
      "cell": "Торын завсар (Grid interval)",
      "stability": "Агаар мандлын тогтвортой байдал (Atmospheric stability)",
      "sigmaY": "Хажуугийн дисперсийн өргөн (Lateral dispersion width) σy",
      "sigmaZ": "Босоо дисперсийн өргөн (Vertical dispersion width) σz",
      "x": "Салхины дагуух зай (Downwind distance) x",
      "y": "Хөндлөн салхины зай (Crosswind distance) y",
      "C": "Концентраци (Concentration) C"
    }
  },
  "ms": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Ini ialah model pengiraan yang dipermudahkan untuk memahami asas pengiraan serakan. Ia tidak boleh digunakan untuk sebarang tujuan selain daripada latihan.",
    "conditionsBtn": "Syarat pengiraan (Calculation conditions)",
    "close": "Tutup (Close)",
    "assumptionTitle": "Syarat dan andaian pengiraan (Calculation conditions and assumptions)",
    "assumptionIntro": "Simulator ini menggunakan model Gaussian plume yang dibuat berdasarkan \"Panduan Meteorologi untuk Analisis Keselamatan Kemudahan Reaktor Kuasa Nuklear\" Jepun. Ia adalah pengiraan ringkas berdasarkan andaian berikut, dan tidak boleh digunakan untuk penilaian dos sebenar, keputusan pemindahan, atau sebarang tujuan selain daripada latihan.",
    "colNo": "No.",
    "colAssumption": "Andaian (Assumption)",
    "colActual": "Perwakilan / batasan (Representation / limitation)",
    "preset": "Pratetap (Preset)",
    "tokyo": "Kembali ke Menara Tokyo (Reset to Tokyo Tower)",
    "recenter": "Pusatkan pada sumber (Center on source)",
    "release": "Syarat pelepasan (Release conditions)",
    "met": "Meteorologi (Meteorology)",
    "display": "Syarat paparan (Display conditions)",
    "stabilityLabel": "Kestabilan atmosfera (Atmospheric stability)",
    "dirHelp": "Arah bawah angin (Downwind direction). Plume memanjang ke arah yang dipilih.",
    "auto": "Kira semula automatik. Kawasan bulat. Grid lalai 50 m.",
    "hintTitle": "Petua membaca (Reading hint)",
    "hint": "Klik sel berwarna untuk melihat kepekatan (Concentration) pada tetingkap timbul dan di bawah.",
    "legend": "Skala kepekatan (Concentration scale)",
    "legendNote": "Kecerunan logaritma tetap: telus → biru → hijau → kuning. Nilai ≥ 1e+1 kekal kuning.",
    "tabs": [
      "Syarat (Conditions)",
      "Sel dipilih (Selected cell)",
      "Formula (Formula)"
    ],
    "none": "Klik sel berwarna pada peta.",
    "coords": "Koordinat (Coordinates)",
    "source": "Sumber (Source)",
    "downwind": "Arah bawah angin (Downwind direction)",
    "horizontal": "Jarak mendatar dari sumber (Horizontal distance)",
    "popupC": "Kepekatan (Concentration)",
    "result": "Keputusan (Result)",
    "ge": "≥",
    "prefactor": "Prafaktor (Prefactor)",
    "decayTerm": "Sebutan reputan (Decay term)",
    "lateralTerm": "Sebutan sisi (Lateral term)",
    "verticalTerm": "Sebutan menegak (Vertical term)",
    "labels": {
      "Q": "Kadar pelepasan (Release rate) Q",
      "lam": "Pekali reputan (Decay coefficient) λ",
      "H": "Ketinggian pelepasan (Release height) H",
      "U": "Kelajuan angin (Wind speed) U",
      "z": "Ketinggian paparan (Display height) z",
      "range": "Jejari pengiraan (Calculation radius)",
      "cell": "Selang grid (Grid interval)",
      "stability": "Kestabilan atmosfera (Atmospheric stability)",
      "sigmaY": "Lebar serakan sisi (Lateral dispersion width) σy",
      "sigmaZ": "Lebar serakan menegak (Vertical dispersion width) σz",
      "x": "Jarak bawah angin (Downwind distance) x",
      "y": "Jarak rentas angin (Crosswind distance) y",
      "C": "Kepekatan (Concentration) C"
    }
  },
  "ru": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Это упрощенная расчетная модель для понимания основ расчетов дисперсии. Ее нельзя использовать ни для каких целей, кроме обучения.",
    "conditionsBtn": "Условия расчёта (Calculation conditions)",
    "close": "Закрыть (Close)",
    "assumptionTitle": "Условия расчёта и допущения (Calculation conditions and assumptions)",
    "assumptionIntro": "В этом симуляторе используется модель гауссова факела, созданная на основе японского «Метеорологического руководства по анализу безопасности объектов энергетических ядерных реакторов». Это упрощенный расчет, основанный на следующих допущениях, и его нельзя использовать для фактической оценки дозы, решений об эвакуации или для каких-либо иных целей, кроме обучения.",
    "colNo": "№",
    "colAssumption": "Допущение (Assumption)",
    "colActual": "Представление / ограничение (Representation / limitation)",
    "preset": "Пресет (Preset)",
    "tokyo": "Сброс на Токийскую башню (Reset to Tokyo Tower)",
    "recenter": "Центрировать на источнике (Center on source)",
    "release": "Условия выброса (Release conditions)",
    "met": "Метеорология (Meteorology)",
    "display": "Условия отображения (Display conditions)",
    "stabilityLabel": "Устойчивость атмосферы (Atmospheric stability)",
    "dirHelp": "Направление по ветру (Downwind direction). Плюм (Plume) вытягивается в выбранном направлении.",
    "auto": "Автопересчет. Круглая область. Сетка по умолчанию 50 м.",
    "hintTitle": "Подсказка (Reading hint)",
    "hint": "Нажмите на цветную ячейку, чтобы увидеть концентрацию (Concentration).",
    "legend": "Шкала концентрации (Concentration scale)",
    "legendNote": "Фиксированный логарифмический градиент: прозрачный → синий → зеленый → желтый. ≥ 1e+1 остается желтым.",
    "tabs": [
      "Условия (Conditions)",
      "Выбранная ячейка (Selected cell)",
      "Формула (Formula)"
    ],
    "none": "Нажмите на цветную ячейку на карте.",
    "coords": "Координаты (Coordinates)",
    "source": "Источник (Source)",
    "downwind": "Направление по ветру (Downwind direction)",
    "horizontal": "Горизонтальное расстояние от источника (Horizontal distance)",
    "popupC": "Концентрация (Concentration)",
    "result": "Результат (Result)",
    "ge": "≥",
    "prefactor": "Префактор (Prefactor)",
    "decayTerm": "Член распада (Decay term)",
    "lateralTerm": "Поперечный член (Lateral term)",
    "verticalTerm": "Вертикальный член (Vertical term)",
    "labels": {
      "Q": "Интенсивность выброса (Release rate) Q",
      "lam": "Коэффициент распада (Decay coefficient) λ",
      "H": "Высота выброса (Release height) H",
      "U": "Скорость ветра (Wind speed) U",
      "z": "Высота отображения (Display height) z",
      "range": "Радиус расчета (Calculation radius)",
      "cell": "Шаг сетки (Grid interval)",
      "stability": "Устойчивость атмосферы (Atmospheric stability)",
      "sigmaY": "Ширина поперечного рассеяния (Lateral dispersion width) σy",
      "sigmaZ": "Ширина вертикального рассеяния (Vertical dispersion width) σz",
      "x": "Расстояние по ветру (Downwind distance) x",
      "y": "Поперечное расстояние (Crosswind distance) y",
      "C": "Концентрация (Concentration) C"
    }
  },
  "th": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "นี่คือแบบจำลองการคำนวณแบบง่ายเพื่อทำความเข้าใจพื้นฐานของการคำนวณการกระจายตัว ไม่สามารถนำไปใช้เพื่อวัตถุประสงค์อื่นนอกเหนือจากการฝึกอบรมได้",
    "conditionsBtn": "เงื่อนไขการคำนวณ (Calculation conditions)",
    "close": "ปิด (Close)",
    "assumptionTitle": "เงื่อนไขและสมมติฐานการคำนวณ (Calculation conditions and assumptions)",
    "assumptionIntro": "เครื่องจำลองนี้ใช้แบบจำลองเกาส์เซียนพลูมที่สร้างขึ้นตาม \"คู่มืออุตุนิยมวิทยาสำหรับการวิเคราะห์ความปลอดภัยของโรงไฟฟ้านิวเคลียร์\" ของญี่ปุ่น เป็นการคำนวณแบบง่ายตามสมมติฐานต่อไปนี้ และไม่สามารถใช้สำหรับการประเมินปริมาณรังสีจริง การตัดสินใจอพยพ หรือวัตถุประสงค์อื่นใดนอกเหนือจากการฝึกอบรม",
    "colNo": "ลำดับ (No.)",
    "colAssumption": "สมมติฐาน (Assumption)",
    "colActual": "การแสดงผล / ข้อจำกัด (Representation / limitation)",
    "preset": "ค่าที่ตั้งไว้ (Preset)",
    "tokyo": "รีเซ็ตเป็นโตเกียวทาวเวอร์ (Reset to Tokyo Tower)",
    "recenter": "กึ่งกลางที่แหล่งกำเนิด (Center on source)",
    "release": "เงื่อนไขการปล่อย (Release conditions)",
    "met": "อุตุนิยมวิทยา (Meteorology)",
    "display": "เงื่อนไขการแสดงผล (Display conditions)",
    "stabilityLabel": "เสถียรภาพของชั้นบรรยากาศ (Atmospheric stability)",
    "dirHelp": "ทิศทางใต้ลม (Downwind direction) พลูม (Plume) จะขยายไปในทิศทางที่เลือก",
    "auto": "คำนวณใหม่อัตโนมัติ พื้นที่วงกลม กริดเริ่มต้น 50 ม.",
    "hintTitle": "คำแนะนำการอ่าน (Reading hint)",
    "hint": "คลิกเซลล์สีเพื่อดูความเข้มข้น (Concentration) ในป๊อปอัปและด้านล่าง",
    "legend": "สเกลความเข้มข้น (Concentration scale)",
    "legendNote": "การไล่ระดับสีลอการิทึม (Logarithmic gradient): โปร่งใส → น้ำเงิน → เขียว → เหลือง ค่า ≥ 1e+1 จะยังคงเป็นสีเหลือง",
    "tabs": [
      "เงื่อนไข (Conditions)",
      "เซลล์ที่เลือก (Selected cell)",
      "สูตร (Formula)"
    ],
    "none": "คลิกเซลล์สีบนแผนที่",
    "coords": "พิกัด (Coordinates)",
    "source": "แหล่งกำเนิด (Source)",
    "downwind": "ทิศทางใต้ลม (Downwind direction)",
    "horizontal": "ระยะทางแนวนอนจากแหล่งกำเนิด (Horizontal distance)",
    "popupC": "ความเข้มข้น (Concentration)",
    "result": "ผลลัพธ์ (Result)",
    "ge": "≥",
    "prefactor": "แฟกเตอร์นำหน้า (Prefactor)",
    "decayTerm": "เทอมการสลายตัว (Decay term)",
    "lateralTerm": "เทอมด้านข้าง (Lateral term)",
    "verticalTerm": "เทอมแนวตั้ง (Vertical term)",
    "labels": {
      "Q": "อัตราการปล่อย (Release rate) Q",
      "lam": "ค่าสัมประสิทธิ์การสลายตัว (Decay coefficient) λ",
      "H": "ความสูงการปล่อย (Release height) H",
      "U": "ความเร็วลม (Wind speed) U",
      "z": "ความสูงการแสดงผล (Display height) z",
      "range": "รัศมีการคำนวณ (Calculation radius)",
      "cell": "ระยะห่างกริด (Grid interval)",
      "stability": "เสถียรภาพบรรยากาศ (Atmospheric stability)",
      "sigmaY": "ความกว้างการกระจายด้านข้าง (Lateral dispersion width) σy",
      "sigmaZ": "ความกว้างการกระจายแนวตั้ง (Vertical dispersion width) σz",
      "x": "ระยะทางใต้ลม (Downwind distance) x",
      "y": "ระยะทางลมขวาง (Crosswind distance) y",
      "C": "ความเข้มข้น (Concentration) C"
    }
  },
  "tl": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Ito ay isang pinasimpleng modelo ng kalkulasyon para sa pag-unawa sa mga pangunahing kaalaman ng mga kalkulasyon ng dispersion. Hindi ito magagamit para sa anumang layunin maliban sa pagsasanay.",
    "conditionsBtn": "Mga kondisyon ng kalkulasyon (Calculation conditions)",
    "close": "Isara (Close)",
    "assumptionTitle": "Mga kondisyon at pagpapalagay ng kalkulasyon (Calculation conditions and assumptions)",
    "assumptionIntro": "Ang simulator na ito ay gumagamit ng Gaussian plume model na ginawa batay sa \"Meteorological Guide for Safety Analysis ng Nuclear Power Reactor Facilities\" ng Japan. Ito ay isang pinasimpleng pagkalkula batay sa mga sumusunod na pagpapalagay, at hindi maaaring gamitin para sa aktwal na pagtatasa ng dosis, mga desisyon sa paglikas, o anumang layunin maliban sa pagsasanay.",
    "colNo": "Blg.",
    "colAssumption": "Pagpapalagay (Assumption)",
    "colActual": "Representasyon / limitasyon (Representation / limitation)",
    "preset": "I-preset",
    "tokyo": "I-reset sa Tokyo Tower (Reset to Tokyo Tower)",
    "recenter": "Igitna sa pinagmulan (Center on source)",
    "release": "Mga kondisyon sa paglabas (Release conditions)",
    "met": "Meteorolohiya (Meteorology)",
    "display": "Mga kondisyon sa pagpapakita (Display conditions)",
    "stabilityLabel": "Katatagan ng atmospera (Atmospheric stability)",
    "dirHelp": "Direksyon ng hangin (Downwind direction). Ang plume ay umaabot patungo sa napiling direksyon.",
    "auto": "Awtomatikong muling kalkulasyon. Pabilog na lugar. Default na grid 50 m.",
    "hintTitle": "Pahiwatig sa pagbasa (Reading hint)",
    "hint": "I-click ang isang kulay na cell upang ipakita ang konsentrasyon (Concentration) sa isang popup at sa ibaba.",
    "legend": "Iskala ng konsentrasyon (Concentration scale)",
    "legendNote": "Nakatakdang logarithmic gradient: transparent → asul → berde → dilaw. Ang mga halagang ≥ 1e+1 ay mananatiling dilaw.",
    "tabs": [
      "Mga Kondisyon (Conditions)",
      "Napiling cell (Selected cell)",
      "Pormula (Formula)"
    ],
    "none": "I-click ang isang may kulay na cell sa mapa.",
    "coords": "Mga coordinate (Coordinates)",
    "source": "Pinagmulan (Source)",
    "downwind": "Direksyon ng hangin (Downwind direction)",
    "horizontal": "Pahalang na distansya mula sa pinagmulan (Horizontal distance)",
    "popupC": "Konsentrasyon (Concentration)",
    "result": "Resulta (Result)",
    "ge": "≥",
    "prefactor": "Prefactor",
    "decayTerm": "Termino ng Pagkabulok",
    "lateralTerm": "Lateral na Termino",
    "verticalTerm": "Patayong Termino",
    "labels": {
      "Q": "Bilis ng paglabas (Release rate) Q",
      "lam": "Decay coefficient λ",
      "H": "Taas ng paglabas (Release height) H",
      "U": "Bilis ng hangin (Wind speed) U",
      "z": "Taas ng pagpapakita (Display height) z",
      "range": "Radius ng kalkulasyon (Calculation radius)",
      "cell": "Grid interval",
      "stability": "Katatagan ng atmospera (Atmospheric stability)",
      "sigmaY": "Lateral dispersion width σy",
      "sigmaZ": "Vertical dispersion width σz",
      "x": "Downwind distance x",
      "y": "Crosswind distance y",
      "C": "Konsentrasyon (Concentration) C"
    }
  },
  "tr": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Bu, dağılım hesaplamalarının temellerini anlamak için basitleştirilmiş bir hesaplama modelidir. Eğitim dışında hiçbir amaçla kullanılamaz.",
    "conditionsBtn": "Hesaplama koşulları (Calculation conditions)",
    "close": "Kapat (Close)",
    "assumptionTitle": "Hesaplama koşulları ve varsayımlar (Calculation conditions and assumptions)",
    "assumptionIntro": "Bu simülatör, Japonya'nın \"Nükleer Güç Reaktörü Tesislerinin Güvenlik Analizi için Meteorolojik Kılavuzu\" temel alınarak oluşturulmuş bir Gaussian plume modeli kullanır. Aşağıdaki varsayımlara dayanan basitleştirilmiş bir hesaplamadır ve gerçek doz değerlendirmesi, tahliye kararları veya eğitim dışındaki herhangi bir amaç için kullanılamaz.",
    "colNo": "No.",
    "colAssumption": "Varsayım (Assumption)",
    "colActual": "Temsil / sınırlama (Representation / limitation)",
    "preset": "Ön ayar (Preset)",
    "tokyo": "Tokyo Kulesi'ne sıfırla (Reset to Tokyo Tower)",
    "recenter": "Kaynağa ortala (Center on source)",
    "release": "Salım koşulları (Release conditions)",
    "met": "Meteoroloji (Meteorology)",
    "display": "Görüntüleme koşulları (Display conditions)",
    "stabilityLabel": "Atmosferik kararlılık (Atmospheric stability)",
    "dirHelp": "Rüzgar altı yönü (Downwind direction). Plume seçilen yöne uzanır.",
    "auto": "Otomatik yeniden hesaplama. Dairesel alan. Varsayılan ızgara 50 m.",
    "hintTitle": "Okuma ipucu (Reading hint)",
    "hint": "Konsantrasyonu (Concentration) görmek için renkli bir hücreye tıklayın.",
    "legend": "Konsantrasyon ölçeği (Concentration scale)",
    "legendNote": "Sabit logaritmik gradyan: şeffaf → mavi → yeşil → sarı. ≥ 1e+1 değerleri sarı kalır.",
    "tabs": [
      "Koşullar (Conditions)",
      "Seçilen hücre (Selected cell)",
      "Formül (Formula)"
    ],
    "none": "Haritada renkli bir hücreye tıklayın.",
    "coords": "Koordinatlar (Coordinates)",
    "source": "Kaynak (Source)",
    "downwind": "Rüzgar altı yönü (Downwind direction)",
    "horizontal": "Kaynaktan yatay mesafe (Horizontal distance)",
    "popupC": "Konsantrasyon (Concentration)",
    "result": "Sonuç (Result)",
    "ge": "≥",
    "prefactor": "Ön faktör (Prefactor)",
    "decayTerm": "Bozunma terimi (Decay term)",
    "lateralTerm": "Yanal terim (Lateral term)",
    "verticalTerm": "Dikey terim (Vertical term)",
    "labels": {
      "Q": "Salım hızı (Release rate) Q",
      "lam": "Bozunma katsayısı (Decay coefficient) λ",
      "H": "Salım yüksekliği (Release height) H",
      "U": "Rüzgar hızı (Wind speed) U",
      "z": "Görüntü yüksekliği (Display height) z",
      "range": "Hesaplama yarıçapı (Calculation radius)",
      "cell": "Izgara aralığı (Grid interval)",
      "stability": "Atmosferik kararlılık (Atmospheric stability)",
      "sigmaY": "Yanal dağılım genişliği (Lateral dispersion width) σy",
      "sigmaZ": "Dikey dağılım genişliği (Vertical dispersion width) σz",
      "x": "Rüzgar altı mesafesi (Downwind distance) x",
      "y": "Yan rüzgar mesafesi (Crosswind distance) y",
      "C": "Konsantrasyon (Concentration) C"
    }
  },
  "vi": {
    "title": "Simple Atmospheric Dispersion Simulator for ITP, ISCN, JAEA",
    "warning": "Đây là một mô hình tính toán đơn giản hóa để hiểu những điều cơ bản về tính toán phân tán. Nó không thể được sử dụng cho bất kỳ mục đích nào khác ngoài đào tạo.",
    "conditionsBtn": "Điều kiện tính toán (Calculation conditions)",
    "close": "Đóng (Close)",
    "assumptionTitle": "Điều kiện và giả định tính toán (Calculation conditions and assumptions)",
    "assumptionIntro": "Trình mô phỏng này sử dụng mô hình Gaussian plume được tạo ra dựa trên \"Hướng dẫn khí tượng về phân tích an toàn cho các cơ sở lò phản ứng điện hạt nhân\" của Nhật Bản. Đây là một phép tính đơn giản hóa dựa trên các giả định sau và không thể được sử dụng để đánh giá liều lượng thực tế, quyết định sơ tán hoặc bất kỳ mục đích nào khác ngoài đào tạo.",
    "colNo": "STT (No.)",
    "colAssumption": "Giả định (Assumption)",
    "colActual": "Biểu diễn / Hạn chế (Representation / limitation)",
    "preset": "Cài đặt sẵn (Preset)",
    "tokyo": "Đặt lại thành Tháp Tokyo (Reset to Tokyo Tower)",
    "recenter": "Căn giữa vào nguồn (Center on source)",
    "release": "Điều kiện phát thải (Release conditions)",
    "met": "Khí tượng (Meteorology)",
    "display": "Điều kiện hiển thị (Display conditions)",
    "stabilityLabel": "Độ ổn định khí quyển (Atmospheric stability)",
    "dirHelp": "Hướng xuôi gió (Downwind direction). Plume mở rộng về hướng đã chọn.",
    "auto": "Tự động tính toán lại. Khu vực hình tròn. Lưới mặc định 50 m.",
    "hintTitle": "Gợi ý đọc (Reading hint)",
    "hint": "Nhấp vào ô màu để hiển thị nồng độ (Concentration) trong cửa sổ bật lên.",
    "legend": "Thang nồng độ (Concentration scale)",
    "legendNote": "Độ dốc logarit cố định: trong suốt → xanh lam → xanh lục → vàng. Giá trị ≥ 1e+1 giữ màu vàng.",
    "tabs": [
      "Điều kiện (Conditions)",
      "Ô đã chọn (Selected cell)",
      "Công thức (Formula)"
    ],
    "none": "Nhấp vào một ô có màu trên bản đồ.",
    "coords": "Tọa độ (Coordinates)",
    "source": "Nguồn (Source)",
    "downwind": "Hướng xuôi gió (Downwind direction)",
    "horizontal": "Khoảng cách ngang từ nguồn (Horizontal distance)",
    "popupC": "Nồng độ (Concentration)",
    "result": "Kết quả (Result)",
    "ge": "≥",
    "prefactor": "Hệ số tiền (Prefactor)",
    "decayTerm": "Hạng tử phân rã (Decay term)",
    "lateralTerm": "Hạng tử ngang (Lateral term)",
    "verticalTerm": "Hạng tử dọc (Vertical term)",
    "labels": {
      "Q": "Tốc độ phát thải (Release rate) Q",
      "lam": "Hệ số phân rã (Decay coefficient) λ",
      "H": "Chiều cao phát thải (Release height) H",
      "U": "Tốc độ gió (Wind speed) U",
      "z": "Chiều cao hiển thị (Display height) z",
      "range": "Bán kính tính toán (Calculation radius)",
      "cell": "Khoảng cách lưới (Grid interval)",
      "stability": "Độ ổn định khí quyển (Atmospheric stability)",
      "sigmaY": "Độ rộng phân tán ngang (Lateral dispersion width) σy",
      "sigmaZ": "Độ rộng phân tán dọc (Vertical dispersion width) σz",
      "x": "Khoảng cách xuôi gió (Downwind distance) x",
      "y": "Khoảng cách gió ngang (Crosswind distance) y",
      "C": "Nồng độ (Concentration) C"
    }
  }
};
const assumptions = {
  "ja": [
    {
      "n": "1",
      "assumption": "地表は平坦である",
      "actual": "山、谷、斜面、台地、崖、堤防、河川敷などによる風の変形や濃度分布の偏りは考慮されていない。"
    },
    {
      "n": "2",
      "assumption": "地表面の性質は一様である",
      "actual": "海面、田畑、市街地、森林、工場地帯などによる地表粗度の違いは考慮されていない。"
    },
    {
      "n": "3",
      "assumption": "地表面での沈着・吸着・捕捉は考慮せず、地表は完全反射境界として扱う",
      "actual": "実際には物質は地表、草、道路、建物、水面などに沈着・吸着・捕捉され得るが、モデルでは鏡像プルームにより反射するように扱われる。"
    },
    {
      "n": "4",
      "assumption": "建物・壁・橋梁・防潮堤などの人工構造物は存在しない",
      "actual": "建物によるビル風、後流、巻き込み、ダウンウォッシュ、街路キャニオン効果、遮蔽、迂回は考慮されていない。"
    },
    {
      "n": "5",
      "assumption": "木・森林などの植生は存在しない",
      "actual": "樹木による風速低下、乱流増加、粒子捕捉、沈着促進は考慮されていない。"
    },
    {
      "n": "6",
      "assumption": "放出源周辺の構造物影響はない",
      "actual": "煙突や建物近傍での複雑な流れ、剥離、再循環域、建物ダウンウォッシュは考慮されていない。"
    },
    {
      "n": "7",
      "assumption": "風向は一定で、プルーム中心線は直線である",
      "actual": "実際には風向は時間的・空間的に揺らぎ、プルームは蛇行・湾曲・方向変化することがある。"
    },
    {
      "n": "8",
      "assumption": "風速は一定である",
      "actual": "実際には風速は時間、場所、高度によって変化するが、このモデルでは単一の風速で扱う。"
    },
    {
      "n": "9",
      "assumption": "風は水平一方向に吹く",
      "actual": "上昇流、下降流、斜面流、海陸風、山谷風などの三次元的な流れは考慮されていない。"
    },
    {
      "n": "10",
      "assumption": "大気安定度は一定である",
      "actual": "実際には日射、雲量、地表状態、時刻、前線通過などで安定度は変化するが、このモデルではA～Fの一つで固定する。"
    },
    {
      "n": "11",
      "assumption": "乱流拡散は経験式で代表できる",
      "actual": "実際の乱流構造や渦を直接解かず、横方向拡散幅と鉛直方向拡散幅の経験式で平均的な広がりを表す。"
    },
    {
      "n": "12",
      "assumption": "降雨・降雪はない",
      "actual": "雨や雪による洗い落とし、湿性沈着、降水強度による濃度低下は考慮されていない。"
    },
    {
      "n": "13",
      "assumption": "気温・湿度・気圧の影響はない",
      "actual": "浮力、密度差、霧、凝縮、吸湿成長などは考慮されていない。"
    },
    {
      "n": "14",
      "assumption": "境界層高さや逆転層を明示的に扱わない",
      "actual": "混合層上端、接地逆転、上空の安定層による鉛直拡散の制限は直接扱われていない。"
    },
    {
      "n": "15",
      "assumption": "放出は連続定常である",
      "actual": "瞬間放出ではなく、一定条件で連続的に放出される平均的なプルームを想定している。放出開始直後の時間発展は計算しない。"
    },
    {
      "n": "16",
      "assumption": "放出条件は計算中に変わらない",
      "actual": "放出量の増減、停止、再開、ピーク放出などは考慮されていない。"
    },
    {
      "n": "17",
      "assumption": "放出源は固定された点源である",
      "actual": "面源、線源、複数放出源、移動源、建物全体からの漏えいは考慮されていない。"
    },
    {
      "n": "18",
      "assumption": "放出高さは一定である",
      "actual": "放出高さは固定値として扱われ、場所や時間による変化はない。"
    },
    {
      "n": "19",
      "assumption": "有効放出高さは入力値そのものである",
      "actual": "排ガス温度、排出速度、煙突径、浮力、運動量による煙上昇は計算されていない。"
    },
    {
      "n": "20",
      "assumption": "初期プルーム幅は無視できる",
      "actual": "排出口の直径、開口部サイズ、初期噴流幅は考慮されず、広がりは風下距離から決まる。"
    },
    {
      "n": "21",
      "assumption": "物質は受動的に風で運ばれる",
      "actual": "物質自体が風場を変えたり、浮力で上昇・下降したりする効果は基本的に考慮されていない。"
    },
    {
      "n": "22",
      "assumption": "重力沈降はない",
      "actual": "粒径や密度による落下速度、粒子の沈降は考慮されていない。"
    },
    {
      "n": "23",
      "assumption": "化学反応はない",
      "actual": "酸化、還元、凝縮、ガス粒子変換、他物質との反応は考慮されていない。"
    },
    {
      "n": "24",
      "assumption": "単一物質として扱う",
      "actual": "実際の放出では複数核種、複数化学種、粒径ごとの挙動差があるが、モデルでは一つの放出量と濃度で代表する。"
    },
    {
      "n": "25",
      "assumption": "再浮遊はない",
      "actual": "一度地表に沈着した物質が風で再び舞い上がる効果は考慮されていない。"
    },
    {
      "n": "26",
      "assumption": "放射性崩壊は単純化される",
      "actual": "減衰係数を用いる場合は指数減衰として単純化される。娘核種生成や複数核種の連鎖崩壊は扱わない。"
    },
    {
      "n": "27",
      "assumption": "横方向濃度分布はガウス分布である",
      "actual": "実際の瞬間濃度は不規則に揺らぐが、平均濃度は中心線から左右に正規分布状に減少すると仮定している。"
    },
    {
      "n": "28",
      "assumption": "鉛直方向濃度分布もガウス分布である",
      "actual": "実際には地表面、逆転層、建物、乱流構造で鉛直分布は歪むが、モデルではガウス分布と鏡像項で表す。"
    },
    {
      "n": "29",
      "assumption": "拡散幅は風下距離と大気安定度で決まる",
      "actual": "実際には乱流強度、地表粗度、境界層高さ、風速鉛直分布などにも依存する。"
    },
    {
      "n": "30",
      "assumption": "濃度場は滑らかで連続的である",
      "actual": "実際には濃度の濃淡は乱流で不規則に変動し、塊状・筋状の分布になることがある。"
    },
    {
      "n": "31",
      "assumption": "風上側濃度はゼロである",
      "actual": "風下距離がゼロ以下の場合に濃度をゼロとする。実際には風向変動や乱流で風上側に回り込むこともある。"
    },
    {
      "n": "32",
      "assumption": "無風・逆風条件は扱わない",
      "actual": "風速がゼロ以下の場合に濃度をゼロとする。実際の弱風・静穏時には別モデルが必要になる。"
    },
    {
      "n": "33",
      "assumption": "計算範囲外は評価しない",
      "actual": "最大濃度地点や影響範囲が計算範囲外にある場合でも、その外側は分からない。"
    },
    {
      "n": "34",
      "assumption": "セル中心値をセル代表値とする",
      "actual": "セル平均ではなく、セル中心の濃度値を使う。"
    },
    {
      "n": "35",
      "assumption": "地球表面は局所平面として扱える",
      "actual": "緯度経度を近距離近似で局所座標に変換する。広域では地球曲率や投影法の影響が増える。"
    },
    {
      "n": "36",
      "assumption": "緯度経度から距離への変換は近似で十分である",
      "actual": "広域や高緯度では誤差が大きくなる。"
    },
    {
      "n": "37",
      "assumption": "風下座標への変換は2次元回転でよい",
      "actual": "局所座標を風下方向に回転して風下距離と横方向距離を得る。鉛直方向を含む三次元風は扱わない。"
    },
    {
      "n": "38",
      "assumption": "鉛直方向拡散幅は0.2 kmを境に式を切り替える",
      "actual": "実際の大気が200 mで物理的に急変するという意味ではなく、経験式上の分岐である。"
    },
    {
      "n": "39",
      "assumption": "鉛直方向拡散幅に上限がある",
      "actual": "遠距離や不安定条件で鉛直拡散が頭打ちになる。"
    }
  ],
  "en": [
    {
      "n": "1",
      "assumption": "Flat terrain",
      "actual": "Terrain effects such as mountains, valleys, slopes, plateaus, cliffs, embankments, and riverbeds are not considered."
    },
    {
      "n": "2",
      "assumption": "Uniform ground-surface properties",
      "actual": "Roughness differences among sea, farmland, urban areas, forests, and industrial zones are not considered."
    },
    {
      "n": "3",
      "assumption": "Perfect ground reflection; no deposition or capture",
      "actual": "Actual material may deposit, adsorb, or be captured by ground, vegetation, roads, and water surfaces."
    },
    {
      "n": "4",
      "assumption": "No buildings or artificial structures",
      "actual": "Building wakes, street canyons, obstacles, ventilation, and corridors are not considered."
    },
    {
      "n": "5",
      "assumption": "No vegetation effects",
      "actual": "Wind reduction, turbulence, capture, and re-emission by trees and forests are not considered."
    },
    {
      "n": "6",
      "assumption": "No local source-structure effects",
      "actual": "Complex flow and downwash around the release point are not considered."
    },
    {
      "n": "7",
      "assumption": "Constant wind direction",
      "actual": "Actual wind direction changes in time and space; plumes may meander."
    },
    {
      "n": "8",
      "assumption": "Constant wind speed",
      "actual": "Actual wind speed changes with time, location, and height."
    },
    {
      "n": "9",
      "assumption": "Horizontally uniform wind",
      "actual": "Updrafts, downdrafts, slope winds, sea breezes, and valley winds are not considered."
    },
    {
      "n": "10",
      "assumption": "Constant atmospheric stability",
      "actual": "Actual stability changes with solar radiation, clouds, surface state, time, and weather."
    },
    {
      "n": "11",
      "assumption": "Empirical dispersion width",
      "actual": "Real turbulence is approximated by empirical distance functions."
    },
    {
      "n": "12",
      "assumption": "No rain or snow removal",
      "actual": "Washout by rain, snow, fog, and humidity is not considered."
    },
    {
      "n": "13",
      "assumption": "No temperature, humidity, or pressure effects",
      "actual": "These atmospheric effects are not represented."
    },
    {
      "n": "14",
      "assumption": "No explicit boundary-layer or inversion layer effects",
      "actual": "Capping and vertical suppression are not directly calculated."
    },
    {
      "n": "15",
      "assumption": "Continuous release",
      "actual": "Instantaneous release and time evolution after release start are not calculated."
    },
    {
      "n": "16",
      "assumption": "Constant release rate",
      "actual": "Increase, decrease, restart, and pulsed releases are not considered."
    },
    {
      "n": "17",
      "assumption": "Fixed release point",
      "actual": "Moving sources and area sources are not considered."
    },
    {
      "n": "18",
      "assumption": "Constant release height",
      "actual": "Release height does not vary with place or time."
    },
    {
      "n": "19",
      "assumption": "No plume rise",
      "actual": "Buoyant and momentum plume rise are not calculated."
    },
    {
      "n": "20",
      "assumption": "No initial plume width",
      "actual": "Outlet diameter, source size, and initial turbulence are ignored."
    },
    {
      "n": "21",
      "assumption": "Passive transport by wind",
      "actual": "Active lifting or settling from the source itself is not represented."
    },
    {
      "n": "22",
      "assumption": "No gravitational settling",
      "actual": "Particle settling due to size or density is ignored."
    },
    {
      "n": "23",
      "assumption": "No chemical reactions",
      "actual": "Chemical transformations are ignored except simple decay if specified."
    },
    {
      "n": "24",
      "assumption": "Single-substance representation",
      "actual": "Mixtures and interactions are simplified into one concentration."
    },
    {
      "n": "25",
      "assumption": "No resuspension",
      "actual": "Re-lifting of deposited material is not considered."
    },
    {
      "n": "26",
      "assumption": "Simple decay coefficient",
      "actual": "Decay chains and daughter products are not considered."
    },
    {
      "n": "27",
      "assumption": "Gaussian horizontal distribution",
      "actual": "Actual instantaneous concentration may be irregular."
    },
    {
      "n": "28",
      "assumption": "Gaussian vertical distribution",
      "actual": "Complex vertical structures are simplified."
    },
    {
      "n": "29",
      "assumption": "Dispersion depends on distance and stability",
      "actual": "Detailed turbulence and roughness dependence is simplified."
    },
    {
      "n": "30",
      "assumption": "Smooth concentration field",
      "actual": "Actual concentration may be intermittent and patchy."
    },
    {
      "n": "31",
      "assumption": "Zero upwind concentration",
      "actual": "Cells with downwind distance ≤ 0 are set to zero."
    },
    {
      "n": "32",
      "assumption": "Calm conditions not represented",
      "actual": "Separate calm-wind models would be required."
    },
    {
      "n": "33",
      "assumption": "Outside calculation area not evaluated",
      "actual": "Areas outside the selected radius are not shown."
    },
    {
      "n": "34",
      "assumption": "Cell-center values",
      "actual": "Displayed values are cell-center concentrations, not cell averages."
    },
    {
      "n": "35",
      "assumption": "Local coordinate approximation",
      "actual": "Earth curvature and projection effects are simplified."
    },
    {
      "n": "36",
      "assumption": "Approximation for short distances",
      "actual": "Errors increase for wide areas or high latitudes."
    },
    {
      "n": "37",
      "assumption": "Two-dimensional wind rotation",
      "actual": "Three-dimensional wind components are not considered."
    },
    {
      "n": "38",
      "assumption": "Vertical formula switch at 0.2 km",
      "actual": "The switch is an empirical formula boundary, not a physical discontinuity."
    },
    {
      "n": "39",
      "assumption": "Simplified horizontal dispersion",
      "actual": "Horizontal spread may differ near the source or in complex turbulence."
    }
  ],
  "bn": [
    {
      "n": "1",
      "assumption": "পৃথিবী পৃষ্ঠ সমতল (Flat terrain)",
      "actual": "পাহাড়, উপত্যকা, ঢাল, মালভূমি, খাড়া পাহাড়, বাঁধ, প্লাবনভূমি ইত্যাদির কারণে বায়ুপ্রবাহের বিকৃতি এবং ঘনত্বের বিস্তারের বিচ্যুতি বিবেচনা করা হয় না।"
    },
    {
      "n": "2",
      "assumption": "ভূমির বৈশিষ্ট্য অভিন্ন",
      "actual": "সমুদ্রপৃষ্ঠ, কৃষিজমি, শহরাঞ্চল, বন, শিল্প এলাকা ইত্যাদির কারণে ভূপৃষ্ঠের অমসৃণতার পার্থক্য বিবেচনা করা হয় না।"
    },
    {
      "n": "3",
      "assumption": "ভূপৃষ্ঠে জমা হওয়া, শোষিত হওয়া এবং আটকে পড়া বিবেচনা করা হয় না এবং ভূপৃষ্ঠকে নিখুঁত প্রতিফলিত সীমানা হিসেবে গণ্য করা হয়",
      "actual": "বাস্তবে, পদার্থগুলি মাটি, ঘাস, রাস্তা, বিল্ডিং, জলের উপরিভাগ ইত্যাদিতে জমা হতে পারে, শোষিত হতে পারে এবং আটকে থাকতে পারে, তবে মডেলটিতে এগুলিকে মিরর ইমেজ প্লুম (Mirror image plume) দ্বারা প্রতিফলিত হওয়ার মতো করে বিবেচনা করা হয়।"
    },
    {
      "n": "4",
      "assumption": "দালানকোঠা, প্রাচীর, সেতু এবং ব্রেকওয়াটারের মতো কোনো কৃত্রিম কাঠামো নেই",
      "actual": "ভবনের চারপাশের প্রবল বাতাস, ওয়েক ফ্লো (Wake), ঘূর্ণি, ডাউনওয়াশ (Downwash), রাস্তার ক্যানিয়ন প্রভাব (Street canyon effect), আড়াল হওয়া এবং ঘুরে যাওয়া বিবেচনা করা হয় না।"
    },
    {
      "n": "5",
      "assumption": "গাছপালা এবং বনের মতো কোনও উদ্ভিদ নেই",
      "actual": "গাছের দ্বারা বাতাসের বেগ হ্রাস, টার্বুলেন্স বৃদ্ধি, কণা আটকে পড়া এবং ডিপোজিশন ত্বরান্বিত হওয়া বিবেচনা করা হয় না।"
    },
    {
      "n": "6",
      "assumption": "নির্গমন উৎসের চারপাশে কোনো কাঠামোগত প্রভাব নেই",
      "actual": "চিমনি এবং বিল্ডিংয়ের কাছাকাছি জটিল প্রবাহ, বিচ্ছিন্ন হওয়া, পুনর্ব্যবহার অঞ্চল এবং ভবনের ডাউনওয়াশ বিবেচনা করা হয় না।"
    },
    {
      "n": "7",
      "assumption": "বাতাসের দিক স্থির এবং প্লুমের কেন্দ্র রেখা সরলরেখায় থাকে",
      "actual": "বাস্তবে, বাতাসের দিক স্থানিক এবং অস্থায়ীভাবে ওঠানামা করে এবং প্লুম (Plume) আঁকাবাঁকা, বাঁকানো এবং দিক পরিবর্তন করতে পারে।"
    },
    {
      "n": "8",
      "assumption": "বাতাসের গতি স্থির",
      "actual": "বাস্তবে, বাতাসের গতি সময়, স্থান এবং উচ্চতা অনুসারে পরিবর্তিত হয়, তবে এই মডেলটি একটি নির্দিষ্ট বাতাসের গতি ব্যবহার করে।"
    },
    {
      "n": "9",
      "assumption": "বাতাস একটি অনুভূমিক দিকে প্রবাহিত হয়",
      "actual": "ত্রি-মাত্রিক প্রবাহ যেমন আপড্রাফ্ট (Updraft), ডাউনড্রাফ্ট (Downdraft), ঢালের বাতাস, স্থল/সমুদ্র বায়ু এবং পর্বত/উপত্যকা বায়ু বিবেচনা করা হয় না।"
    },
    {
      "n": "10",
      "assumption": "বায়ুমণ্ডলীয় স্থিতিশীলতা (Atmospheric stability) স্থির থাকে",
      "actual": "বাস্তবে, সৌর বিকিরণ, মেঘের আচ্ছাদন, মাটির পৃষ্ঠের অবস্থা, সময় এবং সামনের সীমানা অতিক্রম করার কারণে স্থিতিশীলতা পরিবর্তিত হয়, তবে এই মডেলটি একে A থেকে F-এর মধ্যে একটিতে নির্ধারণ করে।"
    },
    {
      "n": "11",
      "assumption": "টার্বুলেন্ট বিচ্ছুরণকে পরীক্ষামূলক সূত্র (Empirical formula) দ্বারা প্রকাশ করা যেতে পারে",
      "actual": "প্রকৃত টার্বুলেন্স কাঠামো এবং ঘূর্ণিগুলি সরাসরি সমাধান করার পরিবর্তে, এটি পার্শ্বীয় এবং উল্লম্ব বিচ্ছুরণের প্রস্থের পরীক্ষামূলক সূত্র ব্যবহার করে গড় বিস্তার প্রকাশ করে।"
    },
    {
      "n": "12",
      "assumption": "কোনো বৃষ্টি বা তুষারপাত নেই",
      "actual": "বৃষ্টি বা তুষার দ্বারা ধুয়ে যাওয়া (Washout), আর্দ্র জমা (Wet deposition) এবং বৃষ্টিপাতের তীব্রতার কারণে ঘনত্বের হ্রাস বিবেচনা করা হয় না।"
    },
    {
      "n": "13",
      "assumption": "বায়ুর তাপমাত্রা, আর্দ্রতা এবং বায়ুচাপের কোনো প্রভাব নেই",
      "actual": "প্লবতা, ঘনত্বের পার্থক্য, কুয়াশা, ঘনীভবন এবং আর্দ্রতাজনিত বৃদ্ধি বিবেচনা করা হয় না।"
    },
    {
      "n": "14",
      "assumption": "সীমানা স্তরের (Boundary layer) বা ইনভার্সন স্তরের (Inversion layer) উচ্চতা স্পষ্টভাবে পরিচালনা করা হয় না",
      "actual": "মিশ্র স্তরের শীর্ষ প্রান্ত, পৃষ্ঠের ইনভার্সন এবং উপরের স্থিতিশীল স্তরের দ্বারা উল্লম্ব বিচ্ছুরণের সীমাবদ্ধতা সরাসরি পরিচালনা করা হয় না।"
    },
    {
      "n": "15",
      "assumption": "নির্গমন অবিচ্ছিন্ন এবং স্থিতিশীল",
      "actual": "এটি একটি তাৎক্ষণিক নির্গমন নয়, তবে স্থির অবস্থার অধীনে অবিরত নির্গত একটি গড় প্লুম বলে ধরে নেওয়া হয়। নির্গমন শুরু হওয়ার পরপরই সময়ের বিবর্তন হিসাব করা হয় না।"
    },
    {
      "n": "16",
      "assumption": "গণনার সময় নির্গমন অবস্থা পরিবর্তিত হয় না",
      "actual": "নির্গমনের পরিমাণের বৃদ্ধি/হ্রাস, থামা, পুনরায় শুরু হওয়া এবং সর্বোচ্চ মাত্রা বিবেচনা করা হয় না।"
    },
    {
      "n": "17",
      "assumption": "নির্গমন উৎস একটি নির্দিষ্ট বিন্দু উৎস",
      "actual": "এলাকার উৎস, লাইন উৎস, একাধিক নির্গমন উৎস, চলমান উৎস এবং সম্পূর্ণ ভবন থেকে ফুটো হওয়া বিবেচনা করা হয় না।"
    },
    {
      "n": "18",
      "assumption": "নির্গমনের উচ্চতা স্থির থাকে",
      "actual": "নির্গমন উচ্চতাকে একটি স্থির মান হিসাবে গণ্য করা হয় এবং এটি স্থান বা সময়ের সাথে পরিবর্তিত হয় না।"
    },
    {
      "n": "19",
      "assumption": "কার্যকর নির্গমন উচ্চতা হলো ইনপুট মান নিজেই",
      "actual": "নিষ্কাশন গ্যাসের তাপমাত্রা, নিষ্কাশনের গতি, চিমনির ব্যাস, প্লবতা এবং ভরবেগের কারণে ধোঁয়া ওঠার (Plume rise) মাত্রা গণনা করা হয় না।"
    },
    {
      "n": "20",
      "assumption": "প্রারম্ভিক প্লুম প্রস্থ উপেক্ষা করা যেতে পারে",
      "actual": "নির্গমন ছিদ্রের ব্যাস, খোলার আকার এবং প্রাথমিক জেটের প্রস্থ বিবেচনা করা হয় না; ডাউনউইন্ড দূরত্ব (Downwind distance) দ্বারা বিস্তার নির্ধারিত হয়।"
    },
    {
      "n": "21",
      "assumption": "পদার্থগুলি বাতাস দ্বারা নিষ্ক্রিয়ভাবে পরিবাহিত হয়",
      "actual": "পদার্থটি নিজেই বাতাসের ক্ষেত্র পরিবর্তন করে বা প্লবতার কারণে উপরে/নিচে চলে যাওয়ার মতো প্রভাবগুলি মূলত বিবেচনা করা হয় না।"
    },
    {
      "n": "22",
      "assumption": "কোনো মহাকর্ষীয় থিতিয়ে পড়া (Gravitational settling) নেই",
      "actual": "কণার আকার এবং ঘনত্বের কারণে পতনের বেগ এবং কণার থিতিয়ে পড়া বিবেচনা করা হয় না।"
    },
    {
      "n": "23",
      "assumption": "কোনো রাসায়নিক বিক্রিয়া নেই",
      "actual": "জারণ, বিজারণ, ঘনীভবন, গ্যাস-থেকে-কণা রূপান্তর এবং অন্যান্য পদার্থের সাথে প্রতিক্রিয়া বিবেচনা করা হয় না।"
    },
    {
      "n": "24",
      "assumption": "একটি একক পদার্থ হিসাবে বিবেচনা করা হয়",
      "actual": "প্রকৃত নির্গমনে একাধিক নিউক্লাইড, রাসায়নিক প্রজাতি এবং কণার আকারের আচরণের পার্থক্য থাকে, তবে মডেলটি সেগুলিকে একটি নির্গমন পরিমাণ এবং ঘনত্ব দ্বারা উপস্থাপন করে।"
    },
    {
      "n": "25",
      "assumption": "পুনরায় বাতাসে ওড়া (Resuspension) নেই",
      "actual": "একবার ভূপৃষ্ঠে থিতিয়ে পড়া পদার্থগুলি বাতাসের দ্বারা আবার উড়ে যাওয়ার প্রভাব বিবেচনা করা হয় না।"
    },
    {
      "n": "26",
      "assumption": "তেজস্ক্রিয় ক্ষয় (Radioactive decay) সরলীকরণ করা হয়",
      "actual": "ক্ষয় সহগ ব্যবহার করার সময়, এটিকে সূচকীয় ক্ষয় হিসাবে সরল করা হয়। ডটার নিউক্লাইড সৃষ্টি এবং একাধিক নিউক্লাইডের শৃঙ্খল ক্ষয় পরিচালনা করা হয় না।"
    },
    {
      "n": "27",
      "assumption": "পার্শ্বীয় ঘনত্বের বন্টন একটি গাউসিয়ান বন্টন",
      "actual": "প্রকৃত তাৎক্ষণিক ঘনত্ব অনিয়মিতভাবে ওঠানামা করে, তবে গড় ঘনত্ব কেন্দ্র রেখা থেকে বাম এবং ডানদিকে স্বাভাবিক বন্টন আকারে হ্রাস পায় বলে অনুমান করা হয়।"
    },
    {
      "n": "28",
      "assumption": "উল্লম্ব ঘনত্বের বন্টনও একটি গাউসিয়ান বন্টন",
      "actual": "বাস্তবে, ভূপৃষ্ঠ, ইনভার্সন স্তর, ভবন এবং টার্বুলেন্স কাঠামোর দ্বারা উল্লম্ব বন্টন বিকৃত হয়, তবে মডেলটি একটি গাউসিয়ান বন্টন এবং মিরর ইমেজ পদ (Mirror image term) ব্যবহার করে এর প্রতিনিধিত্ব করে।"
    },
    {
      "n": "29",
      "assumption": "ডাউনউইন্ড (Downwind) দূরত্ব এবং বায়ুমণ্ডলীয় স্থিতিশীলতার দ্বারা বিচ্ছুরণের প্রস্থ নির্ধারিত হয়",
      "actual": "বাস্তবে, এটি টার্বুলেন্সের তীব্রতা, পৃষ্ঠের অমসৃণতা, সীমানা স্তরের উচ্চতা এবং উল্লম্ব বাতাসের গতি বন্টনের উপরও নির্ভর করে।"
    },
    {
      "n": "30",
      "assumption": "ঘনত্ব ক্ষেত্রটি মসৃণ এবং অবিচ্ছিন্ন",
      "actual": "বাস্তবে, টার্বুলেন্সের কারণে ঘনত্বের পুরুত্ব অনিয়মিতভাবে ওঠানামা করে এবং পিণ্ডযুক্ত বা দাগযুক্ত বন্টন তৈরি করতে পারে।"
    },
    {
      "n": "31",
      "assumption": "আপউইন্ড (Upwind) দিকের ঘনত্ব শূন্য",
      "actual": "ডাউনউইন্ড দূরত্ব শূন্য বা তার কম হলে ঘনত্ব শূন্য ধরা হয়। বাস্তবে, বাতাসের দিক পরিবর্তন বা টার্বুলেন্সের কারণে এটি আপউইন্ড দিকে ফিরে যেতে পারে।"
    },
    {
      "n": "32",
      "assumption": "বায়ুহীন বা বিপরীত বাতাসের অবস্থা পরিচালনা করা হয় না",
      "actual": "বাতাসের গতি শূন্য বা তার কম হলে ঘনত্ব শূন্য ধরা হয়। প্রকৃত দুর্বল বাতাস বা শান্ত সময়ের জন্য একটি ভিন্ন মডেল প্রয়োজন।"
    },
    {
      "n": "33",
      "assumption": "গণনার সীমার বাইরে মূল্যায়ন করা হয় না",
      "actual": "এমনকি যদি সর্বোচ্চ ঘনত্বের বিন্দু বা প্রভাবের পরিসীমা গণনার সীমার বাইরে থাকে, তবে বাইরের দিকটি অজানা থেকে যায়।"
    },
    {
      "n": "34",
      "assumption": "সেল কেন্দ্রের মানটি সেলের প্রতিনিধিত্বমূলক মান হিসাবে কাজ করে",
      "actual": "সেল গড়ের পরিবর্তে সেল কেন্দ্রে (Cell-center) ঘনত্বের মান ব্যবহার করা হয়।"
    },
    {
      "n": "35",
      "assumption": "পৃথিবীপৃষ্ঠকে একটি স্থানীয় সমতল হিসাবে বিবেচনা করা যেতে পারে",
      "actual": "অক্ষাংশ এবং দ্রাঘিমাংশ স্বল্প দূরত্বের আনুমানিক মান ব্যবহার করে স্থানীয় স্থানাঙ্কে রূপান্তরিত হয়। পৃথিবীর বক্রতা এবং অভিক্ষেপ পদ্ধতির প্রভাব বড় এলাকাগুলির জন্য বৃদ্ধি পায়।"
    },
    {
      "n": "36",
      "assumption": "অক্ষাংশ/দ্রাঘিমাংশ থেকে দূরত্বের রূপান্তরের অনুমান যথেষ্ট",
      "actual": "বড় এলাকা বা উচ্চ অক্ষাংশে ত্রুটি বড় হয়।"
    },
    {
      "n": "37",
      "assumption": "ডাউনউইন্ড (Downwind) স্থানাঙ্কে রূপান্তরের জন্য 2D ঘূর্ণন যথেষ্ট",
      "actual": "ডাউনউইন্ড দূরত্ব এবং ক্রসউইন্ড (Crosswind) দূরত্ব পেতে স্থানীয় স্থানাঙ্কগুলিকে ডাউনউইন্ড দিকে ঘোরানো হয়। উল্লম্ব উপাদান অন্তর্ভুক্ত 3D বাতাস পরিচালনা করা হয় না।"
    },
    {
      "n": "38",
      "assumption": "0.2 কিমি সীমানায় উল্লম্ব বিচ্ছুরণের প্রস্থের সূত্র পরিবর্তিত হয়",
      "actual": "এর অর্থ এই নয় যে প্রকৃত বায়ুমণ্ডল হঠাৎ করে 200 মিটারে পরিবর্তিত হয়, বরং এটি পরীক্ষামূলক সূত্রের একটি সীমানা।"
    },
    {
      "n": "39",
      "assumption": "উল্লম্ব বিচ্ছুরণের প্রস্থের একটি উচ্চ সীমা রয়েছে",
      "actual": "দূরবর্তী দূরত্বে বা অস্থির পরিস্থিতিতে উল্লম্ব বিচ্ছুরণ সম্পৃক্ত (সিলিং) পর্যায়ে পৌঁছায়।"
    }
  ],
  "id": [
    {
      "n": "1",
      "assumption": "Permukaan bumi datar (Flat terrain)",
      "actual": "Aktual / Keterbatasan: Deformasi angin dan penyimpangan distribusi konsentrasi akibat gunung, lembah, lereng, dataran tinggi, tebing, tanggul, dataran banjir, dll. tidak dipertimbangkan."
    },
    {
      "n": "2",
      "assumption": "Sifat permukaan tanah seragam",
      "actual": "Aktual / Keterbatasan: Perbedaan kekasaran permukaan tanah akibat permukaan laut, ladang, daerah perkotaan, hutan, kawasan industri, dll. tidak dipertimbangkan."
    },
    {
      "n": "3",
      "assumption": "Deposisi, adsorpsi, dan penangkapan di permukaan tanah tidak dipertimbangkan, dan permukaan tanah diperlakukan sebagai batas pemantulan sempurna",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, zat dapat diendapkan, diserap, dan ditangkap di tanah, rumput, jalan, bangunan, permukaan air, dll., tetapi dalam model, hal itu diperlakukan seolah-olah dipantulkan oleh plume cermin (Mirror image plume)."
    },
    {
      "n": "4",
      "assumption": "Tidak ada struktur buatan manusia seperti bangunan, dinding, jembatan, dan pemecah gelombang",
      "actual": "Aktual / Keterbatasan: Angin kencang di sekitar bangunan, aliran bangun (Wake), pusaran, downwash, efek ngarai jalan (Street canyon effect), perisai, dan 우회 tidak dipertimbangkan."
    },
    {
      "n": "5",
      "assumption": "Vegetasi seperti pohon dan hutan tidak ada",
      "actual": "Aktual / Keterbatasan: Penurunan kecepatan angin, peningkatan turbulensi, penangkapan partikel, dan promosi deposisi oleh pohon tidak dipertimbangkan."
    },
    {
      "n": "6",
      "assumption": "Tidak ada efek struktural di sekitar sumber pelepasan",
      "actual": "Aktual / Keterbatasan: Aliran kompleks, pemisahan aliran, zona resirkulasi, dan downwash bangunan di sekitar cerobong asap dan bangunan tidak dipertimbangkan."
    },
    {
      "n": "7",
      "assumption": "Arah angin konstan dan garis tengah plume lurus",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, arah angin berfluktuasi secara spasial dan temporal, dan plume dapat berkelok-kelok, melengkung, dan berubah arah."
    },
    {
      "n": "8",
      "assumption": "Kecepatan angin konstan",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, kecepatan angin bervariasi berdasarkan waktu, lokasi, dan ketinggian, tetapi model ini menggunakan satu kecepatan angin."
    },
    {
      "n": "9",
      "assumption": "Angin bertiup dalam satu arah horizontal",
      "actual": "Aktual / Keterbatasan: Aliran tiga dimensi seperti arus naik (Updraft), arus turun (Downdraft), aliran lereng, angin darat/laut, dan angin gunung/lembah tidak dipertimbangkan."
    },
    {
      "n": "10",
      "assumption": "Stabilitas atmosfer (Atmospheric stability) konstan",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, stabilitas bervariasi karena radiasi matahari, tutupan awan, kondisi permukaan tanah, waktu, dan lewatnya bagian depan, tetapi model ini memperbaikinya pada salah satu dari A hingga F."
    },
    {
      "n": "11",
      "assumption": "Difusi turbulen dapat diwakili oleh rumus empiris",
      "actual": "Aktual / Keterbatasan: Alih-alih memecahkan struktur turbulensi dan pusaran yang sebenarnya secara langsung, ia mengekspresikan penyebaran rata-rata menggunakan rumus empiris untuk lebar difusi lateral dan lebar difusi vertikal."
    },
    {
      "n": "12",
      "assumption": "Tidak ada hujan atau salju",
      "actual": "Aktual / Keterbatasan: Pencucian (Washout) oleh hujan atau salju, deposisi basah, dan penurunan konsentrasi karena intensitas curah hujan tidak dipertimbangkan."
    },
    {
      "n": "13",
      "assumption": "Tidak ada efek suhu udara, kelembaban, dan tekanan atmosfer",
      "actual": "Aktual / Keterbatasan: Daya apung, perbedaan kerapatan, kabut, kondensasi, dan pertumbuhan higroskopis tidak dipertimbangkan."
    },
    {
      "n": "14",
      "assumption": "Tinggi lapisan batas (Boundary layer) dan lapisan inversi (Inversion layer) tidak ditangani secara eksplisit",
      "actual": "Aktual / Keterbatasan: Pembatasan difusi vertikal oleh tepi atas lapisan campuran, inversi permukaan, dan lapisan stabil di atas tidak secara langsung ditangani."
    },
    {
      "n": "15",
      "assumption": "Pelepasan berlangsung kontinu dan tunak",
      "actual": "Aktual / Keterbatasan: Ini bukan pelepasan sesaat, melainkan mengasumsikan rata-rata plume yang dilepaskan terus menerus dalam kondisi konstan. Perkembangan waktu segera setelah pelepasan dimulai tidak dihitung."
    },
    {
      "n": "16",
      "assumption": "Kondisi pelepasan tidak berubah selama perhitungan",
      "actual": "Aktual / Keterbatasan: Peningkatan atau penurunan, penghentian, dimulainya kembali, dan puncak dari jumlah pelepasan tidak dipertimbangkan."
    },
    {
      "n": "17",
      "assumption": "Sumber pelepasan adalah sumber titik tetap",
      "actual": "Aktual / Keterbatasan: Sumber area, sumber garis, beberapa sumber pelepasan, sumber bergerak, dan kebocoran dari seluruh bangunan tidak dipertimbangkan."
    },
    {
      "n": "18",
      "assumption": "Tinggi pelepasan konstan",
      "actual": "Aktual / Keterbatasan: Ketinggian pelepasan diperlakukan sebagai nilai tetap dan tidak berubah seiring lokasi atau waktu."
    },
    {
      "n": "19",
      "assumption": "Tinggi pelepasan efektif sama dengan nilai input",
      "actual": "Aktual / Keterbatasan: Kenaikan asap (Plume rise) akibat suhu gas buang, kecepatan buang, diameter cerobong asap, daya apung, dan momentum tidak dihitung."
    },
    {
      "n": "20",
      "assumption": "Lebar awal plume dapat diabaikan",
      "actual": "Aktual / Keterbatasan: Diameter lubang pembuangan, ukuran bukaan, dan lebar jet awal tidak dipertimbangkan; penyebaran ditentukan oleh jarak bawah angin (Downwind distance)."
    },
    {
      "n": "21",
      "assumption": "Zat secara pasif terbawa oleh angin",
      "actual": "Aktual / Keterbatasan: Efek di mana zat itu sendiri mengubah medan angin atau naik/turun karena daya apung pada dasarnya tidak dipertimbangkan."
    },
    {
      "n": "22",
      "assumption": "Tidak ada pengendapan gravitasi (Gravitational settling)",
      "actual": "Aktual / Keterbatasan: Kecepatan jatuh dan pengendapan partikel berdasarkan ukuran partikel dan kerapatan tidak dipertimbangkan."
    },
    {
      "n": "23",
      "assumption": "Tidak ada reaksi kimia",
      "actual": "Aktual / Keterbatasan: Oksidasi, reduksi, kondensasi, konversi gas-ke-partikel, dan reaksi dengan zat lain tidak dipertimbangkan."
    },
    {
      "n": "24",
      "assumption": "Diperlakukan sebagai satu zat",
      "actual": "Aktual / Keterbatasan: Pada pelepasan aktual, ada perbedaan perilaku untuk berbagai nuklida, spesies kimia, dan ukuran partikel, tetapi model mewakilinya dengan satu jumlah pelepasan dan konsentrasi."
    },
    {
      "n": "25",
      "assumption": "Tidak ada resuspensi (Resuspension)",
      "actual": "Aktual / Keterbatasan: Efek di mana zat yang pernah mengendap di permukaan tanah diangkat kembali oleh angin tidak dipertimbangkan."
    },
    {
      "n": "26",
      "assumption": "Peluruhan radioaktif (Radioactive decay) disederhanakan",
      "actual": "Aktual / Keterbatasan: Saat menggunakan koefisien peluruhan, peluruhan ini disederhanakan sebagai peluruhan eksponensial. Penciptaan nuklida turunan dan peluruhan berantai dari banyak nuklida tidak ditangani."
    },
    {
      "n": "27",
      "assumption": "Distribusi konsentrasi lateral adalah distribusi Gaussian",
      "actual": "Aktual / Keterbatasan: Konsentrasi sesaat aktual berfluktuasi secara tidak teratur, tetapi konsentrasi rata-rata diasumsikan menurun ke kiri dan ke kanan dari garis tengah dalam bentuk distribusi normal."
    },
    {
      "n": "28",
      "assumption": "Distribusi konsentrasi vertikal juga merupakan distribusi Gaussian",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, distribusi vertikal terdistorsi oleh permukaan tanah, lapisan inversi, bangunan, dan struktur turbulensi, tetapi model merepresentasikannya menggunakan distribusi Gaussian dan suku bayangan cermin (Mirror image term)."
    },
    {
      "n": "29",
      "assumption": "Lebar difusi ditentukan oleh jarak bawah angin (Downwind) dan stabilitas atmosfer",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, hal itu juga bergantung pada intensitas turbulensi, kekasaran permukaan tanah, ketinggian lapisan batas, dan distribusi kecepatan angin vertikal."
    },
    {
      "n": "30",
      "assumption": "Medan konsentrasi halus dan kontinu",
      "actual": "Aktual / Keterbatasan: Pada kenyataannya, ketebalan konsentrasi berfluktuasi tidak teratur akibat turbulensi dan dapat membentuk distribusi gumpalan atau bergaris."
    },
    {
      "n": "31",
      "assumption": "Konsentrasi di arah angin datang (Upwind) adalah nol",
      "actual": "Aktual / Keterbatasan: Konsentrasi diatur ke nol jika jarak bawah angin (Downwind) nol atau kurang. Pada kenyataannya, ia dapat berbalik ke sisi upwind karena fluktuasi arah angin atau turbulensi."
    },
    {
      "n": "32",
      "assumption": "Kondisi tanpa angin atau angin berlawanan tidak ditangani",
      "actual": "Aktual / Keterbatasan: Konsentrasi diatur ke nol jika kecepatan angin nol atau kurang. Model yang berbeda diperlukan untuk periode angin lemah atau tenang aktual."
    },
    {
      "n": "33",
      "assumption": "Di luar rentang perhitungan tidak dievaluasi",
      "actual": "Aktual / Keterbatasan: Bahkan jika titik konsentrasi maksimum atau jangkauan pengaruh berada di luar rentang perhitungan, bagian luar tidak diketahui."
    },
    {
      "n": "34",
      "assumption": "Nilai pusat sel digunakan sebagai nilai perwakilan sel",
      "actual": "Aktual / Keterbatasan: Menggunakan nilai konsentrasi di pusat sel, bukan nilai rata-rata sel."
    },
    {
      "n": "35",
      "assumption": "Permukaan bumi dapat diperlakukan sebagai bidang datar lokal",
      "actual": "Aktual / Keterbatasan: Garis lintang dan garis bujur diubah menjadi koordinat lokal menggunakan perkiraan jarak dekat. Efek kelengkungan bumi dan metode proyeksi meningkat untuk area yang luas."
    },
    {
      "n": "36",
      "assumption": "Perkiraan konversi dari lintang/bujur ke jarak cukup",
      "actual": "Aktual / Keterbatasan: Kesalahan menjadi besar di area yang luas atau lintang tinggi."
    },
    {
      "n": "37",
      "assumption": "Transformasi ke koordinat bawah angin (Downwind) cukup menggunakan rotasi 2D",
      "actual": "Aktual / Keterbatasan: Koordinat lokal dirotasi ke arah bawah angin untuk mendapatkan jarak bawah angin dan jarak melintang (Crosswind). Angin 3D, termasuk komponen vertikal, tidak ditangani."
    },
    {
      "n": "38",
      "assumption": "Rumus lebar difusi vertikal beralih pada batas 0,2 km",
      "actual": "Aktual / Keterbatasan: Ini bukan berarti bahwa atmosfer aktual berubah tiba-tiba pada 200 m, melainkan ini adalah batas pada rumus empiris."
    },
    {
      "n": "39",
      "assumption": "Ada batas atas untuk lebar difusi vertikal",
      "actual": "Aktual / Keterbatasan: Difusi vertikal mencapai titik jenuh (Plafon) pada jarak jauh atau dalam kondisi tidak stabil."
    }
  ],
  "kk": [
    {
      "n": "1",
      "assumption": "Жер беті тегіс (Flat terrain)",
      "actual": "Таулар, аңғарлар, беткейлер, үстірттер, жартастар, бөгеттер, жайылмалар және т.б. салдарынан желдің деформациясы мен концентрацияның таралуының ауытқуы ескерілмейді."
    },
    {
      "n": "2",
      "assumption": "Жер бетінің қасиеттері біркелкі",
      "actual": "Теңіз бетіне, егістіктерге, қалалық аумақтарға, ормандарға, өнеркәсіптік аймақтарға және т.б. байланысты жер бетінің кедір-бұдырлығындағы айырмашылықтар ескерілмейді."
    },
    {
      "n": "3",
      "assumption": "Жер бетінде тұну, адсорбция және тұтылу ескерілмейді, ал жер беті тамаша шағылыстыратын шекара ретінде қарастырылады",
      "actual": "Шын мәнінде, заттар жерге, шөпке, жолға, ғимараттарға, су бетіне және т.б. тұнуы, адсорбциялануы және ұсталуы мүмкін, бірақ модельде олар айналық шлейф (Mirror image plume) арқылы шағылысқан сияқты қарастырылады."
    },
    {
      "n": "4",
      "assumption": "Ғимараттар, қабырғалар, көпірлер мен толқын таратқыштар сияқты жасанды құрылымдар жоқ",
      "actual": "Ғимараттардың айналасындағы қатты жел, ілеспе ағын (Wake), құйын, төмендейтін ағын (Downwash), көше каньонының әсері (Street canyon effect), экрандау және айналып өту ескерілмейді."
    },
    {
      "n": "5",
      "assumption": "Ағаштар мен ормандар сияқты өсімдіктер жоқ",
      "actual": "Ағаштар арқылы жел жылдамдығының төмендеуі, турбуленттіліктің артуы, бөлшектерді ұстау және тұнуды ынталандыру ескерілмейді."
    },
    {
      "n": "6",
      "assumption": "Шығару көзінің айналасында құрылымдық әсер жоқ",
      "actual": "Күрделі ағындар, бөліну, рециркуляция аймақтары және мұржалар мен ғимараттардың маңындағы төмендейтін ағындар (downwash) ескерілмейді."
    },
    {
      "n": "7",
      "assumption": "Желдің бағыты тұрақты, ал шлейфтің орталық сызығы түзу",
      "actual": "Шын мәнінде, желдің бағыты кеңістікте және уақыт бойынша ауытқиды, ал шлейф (Plume) ирелеңдеуі, қисаюы және бағытын өзгертуі мүмкін."
    },
    {
      "n": "8",
      "assumption": "Желдің жылдамдығы тұрақты",
      "actual": "Шын мәнінде, жел жылдамдығы уақытқа, орынға және биіктікке байланысты өзгереді, бірақ бұл модель бір жел жылдамдығын пайдаланады."
    },
    {
      "n": "9",
      "assumption": "Жел бір көлденең бағытта соғады",
      "actual": "Жоғары бағытталған ағын (Updraft), төмен бағытталған ағын (Downdraft), беткейлік желдер, құрлық/теңіз бриздері және тау/аңғар желдері сияқты үш өлшемді ағындар ескерілмейді."
    },
    {
      "n": "10",
      "assumption": "Атмосфералық тұрақтылық (Atmospheric stability) тұрақты",
      "actual": "Шын мәнінде, тұрақтылық күн радиациясының, бұлттылықтың, жер беті жағдайының, уақыттың және шептердің өтуінің әсерінен өзгереді, бірақ бұл модель оны А-дан F-ке дейінгілердің біріне бекітеді."
    },
    {
      "n": "11",
      "assumption": "Турбулентті дисперсияны эмпирикалық формуламен көрсетуге болады",
      "actual": "Нақты турбуленттік құрылымды және құйындарды тікелей шешудің орнына, көлденең дисперсия ені мен тік дисперсия ені үшін эмпирикалық формулаларды қолдана отырып, орташа таралуды білдіреді."
    },
    {
      "n": "12",
      "assumption": "Жаңбыр немесе қар жоқ",
      "actual": "Жаңбыр немесе қармен шайылу (Washout), ылғалды тұну және жауын-шашын қарқындылығына байланысты концентрацияның төмендеуі ескерілмейді."
    },
    {
      "n": "13",
      "assumption": "Ауа температурасының, ылғалдылығының және атмосфералық қысымының әсері жоқ",
      "actual": "Көтеру күші, тығыздық айырмашылығы, тұман, конденсация және гигроскопиялық өсу ескерілмейді."
    },
    {
      "n": "14",
      "assumption": "Шекаралық қабат (Boundary layer) немесе инверсиялық қабаттың (Inversion layer) биіктігі айқын қарастырылмайды",
      "actual": "Аралас қабаттың жоғарғы жиегімен тік дисперсияны шектеу, беттік инверсия және жоғарғы тұрақты қабат тікелей ескерілмейді."
    },
    {
      "n": "15",
      "assumption": "Шығарындылар үздіксіз және тұрақты",
      "actual": "Бұл лездік шығару емес, тұрақты жағдайларда үздіксіз шығарылатын орташа шлейфті болжайды. Шығару басталғаннан кейінгі уақыттық даму есептелмейді."
    },
    {
      "n": "16",
      "assumption": "Шығару жағдайлары есептеу кезінде өзгермейді",
      "actual": "Шығарындылар көлемінің көбеюі/азаюы, тоқтауы, қайта басталуы және ең жоғары мәндері ескерілмейді."
    },
    {
      "n": "17",
      "assumption": "Шығару көзі тұрақты нүктелік көз болып табылады",
      "actual": "Аумақтық көздер, сызықтық көздер, бірнеше шығару көздері, қозғалмалы көздер және тұтас ғимараттардан ағып кетулер ескерілмейді."
    },
    {
      "n": "18",
      "assumption": "Шығару биіктігі тұрақты",
      "actual": "Шығару биіктігі тұрақты мән ретінде қарастырылады және орынға немесе уақытқа байланысты өзгермейді."
    },
    {
      "n": "19",
      "assumption": "Тиімді шығару биіктігі енгізілген мәннің өзі болып табылады",
      "actual": "Пайдаланылған газ температурасына, шығару жылдамдығына, мұржаның диаметріне, көтеру күшіне және импульске байланысты түтіннің көтерілуі (Plume rise) есептелмейді."
    },
    {
      "n": "20",
      "assumption": "Шлейфтің бастапқы енін елемеуге болады",
      "actual": "Шығару саңылауының диаметрі, саңылау өлшемі және бастапқы ағынның ені ескерілмейді; таралу жел бағытындағы қашықтықпен (Downwind distance) анықталады."
    },
    {
      "n": "21",
      "assumption": "Заттарды жел пассивті түрде тасымалдайды",
      "actual": "Заттың жел өрісін өзгертуі немесе көтеру күшіне байланысты жоғары/төмен қозғалуы сияқты әсерлер негізінен ескерілмейді."
    },
    {
      "n": "22",
      "assumption": "Гравитациялық тұну (Gravitational settling) жоқ",
      "actual": "Бөлшектердің өлшемі мен тығыздығына байланысты түсу жылдамдығы, сондай-ақ бөлшектердің тұнуы ескерілмейді."
    },
    {
      "n": "23",
      "assumption": "Химиялық реакциялар жоқ",
      "actual": "Тотығу, тотықсыздану, конденсация, газдың бөлшекке айналуы және басқа заттармен реакциялары ескерілмейді."
    },
    {
      "n": "24",
      "assumption": "Бір зат ретінде қарастырылады",
      "actual": "Нақты шығарындыларда бірнеше нуклидтердің, химиялық түрлердің және бөлшектердің өлшемдерінің әрекетінде айырмашылықтар бар, бірақ модель оларды бір шығару көлемімен және концентрациясымен көрсетеді."
    },
    {
      "n": "25",
      "assumption": "Қайта көтерілу (Resuspension) жоқ",
      "actual": "Жер бетіне бір рет түскен заттардың желмен қайтадан көтерілу әсері ескерілмейді."
    },
    {
      "n": "26",
      "assumption": "Радиоактивті ыдырау (Radioactive decay) жеңілдетіледі",
      "actual": "Ыдырау коэффициентін қолданған кезде ол экспоненциалды ыдырау ретінде жеңілдетіледі. Туынды нуклидтердің пайда болуы және көптеген нуклидтердің тізбекті ыдырауы қарастырылмайды."
    },
    {
      "n": "27",
      "assumption": "Көлденең концентрацияның таралуы Гаусс үлестірімі болып табылады",
      "actual": "Нақты лездік концентрациялар ретсіз ауытқиды, бірақ орташа концентрация қалыпты үлестірім түрінде орталық сызықтан солға және оңға қарай төмендейді деп болжанады."
    },
    {
      "n": "28",
      "assumption": "Тік концентрацияның таралуы да Гаусс үлестірімі болып табылады",
      "actual": "Шын мәнінде, тік таралу жер бетімен, инверсиялық қабаттармен, ғимараттармен және турбулентті құрылымдармен бұрмаланады, бірақ модель оны Гаусс үлестірімі мен айналық шағылу мүшесін (Mirror image term) пайдалана отырып білдіреді."
    },
    {
      "n": "29",
      "assumption": "Дисперсия ені жел бағытындағы қашықтыққа (Downwind) және атмосфералық тұрақтылыққа байланысты анықталады",
      "actual": "Шын мәнінде, ол турбуленттік қарқындылығына, беттің кедір-бұдырлығына, шекаралық қабаттың биіктігіне және жел жылдамдығының тік үлестіріміне де байланысты."
    },
    {
      "n": "30",
      "assumption": "Концентрация өрісі тегіс және үздіксіз",
      "actual": "Шын мәнінде, концентрацияның тығыздығы турбуленттілікке байланысты ретсіз ауытқиды және кесекті немесе жолақты үлестірімдерді құрауы мүмкін."
    },
    {
      "n": "31",
      "assumption": "Желге қарсы (Upwind) бағыттағы концентрация нөлге тең",
      "actual": "Жел бағытындағы қашықтық нөл немесе одан аз болса, концентрация нөлге теңестіріледі. Шын мәнінде, жел бағытының ауытқуы немесе турбуленттілікке байланысты зат желге қарсы бағытта таралуы мүмкін."
    },
    {
      "n": "32",
      "assumption": "Желсіз немесе қарсы жел жағдайлары қарастырылмайды",
      "actual": "Жел жылдамдығы нөл немесе одан аз болса, концентрация нөлге теңестіріледі. Нақты әлсіз жел немесе тынық ауа-райы кезеңдері үшін басқа модель қажет."
    },
    {
      "n": "33",
      "assumption": "Есептеу ауқымынан тыс аймақ бағаланбайды",
      "actual": "Максималды концентрация нүктесі немесе әсер ету ауқымы есептеу ауқымынан тыс болса да, оның сырты белгісіз."
    },
    {
      "n": "34",
      "assumption": "Ұяшықтың орталық мәні ұяшықтың өкілдік мәні ретінде пайдаланылады",
      "actual": "Ұяшықтың орташа мәні емес, ұяшықтың ортасындағы (Cell-center) концентрация мәні қолданылады."
    },
    {
      "n": "35",
      "assumption": "Жер бетін жергілікті жазықтық ретінде қарастыруға болады",
      "actual": "Ендік пен бойлық қысқа қашықтықты жуықтау арқылы жергілікті координаттарға түрлендіріледі. Үлкен аумақтарда Жердің қисаюы мен проекция әдісінің әсері артады."
    },
    {
      "n": "36",
      "assumption": "Ендік/бойлықтан қашықтыққа түрлендірудің жуықтамасы жеткілікті",
      "actual": "Кең аумақтарда немесе жоғары ендіктерде қате үлкен болады."
    },
    {
      "n": "37",
      "assumption": "Жел бағытындағы (Downwind) координаттарға түрлендіру үшін 2D айналдыру жеткілікті",
      "actual": "Жел бағытындағы қашықтықты және көлденең жел (Crosswind) қашықтығын алу үшін жергілікті координаттар жел бағытына бұрылады. Тік компонентті қамтитын 3D желі есепке алынбайды."
    },
    {
      "n": "38",
      "assumption": "Тік дисперсия енінің формуласы 0,2 км шекарасында өзгереді",
      "actual": "Бұл нақты атмосфераның 200 м биіктікте кенеттен өзгеретінін білдірмейді, бұл эмпирикалық формуладағы шекара."
    },
    {
      "n": "39",
      "assumption": "Тік дисперсия енінің жоғарғы шегі бар",
      "actual": "Тік дисперсия алыс қашықтықта немесе тұрақсыз жағдайларда қанықтыққа (төбеге) жетеді."
    }
  ],
  "mn": [
    {
      "n": "1",
      "assumption": "Дэлхийн гадаргуу нь тэгш (Flat terrain)",
      "actual": "Уул, хөндий, налуу, тэгш өндөрлөг, хавцал, далан, үерийн татам зэргээс шалтгаалсан салхины гажилт, концентрацийн тархалтын өөрчлөлтийг тооцдоггүй."
    },
    {
      "n": "2",
      "assumption": "Газрын гадаргуугийн шинж чанар жигд байна",
      "actual": "Далайн мандал, тариалангийн талбай, хот суурин газар, ой мод, үйлдвэрийн бүс зэргээс шалтгаалсан гадаргуугийн барзгар байдлын ялгааг тооцдоггүй."
    },
    {
      "n": "3",
      "assumption": "Газрын гадаргуу дээрх тунадасжилт, шингээлт, барьж авах явдлыг тооцохгүй бөгөөд газрын гадаргууг төгс ойлтын хил хязгаар гэж үзнэ",
      "actual": "Бодит байдал дээр бодисууд нь газар, өвс, зам, барилга байгууламж, усны гадаргуу дээр тунадасжиж, шингээгдэж, баригдах боломжтой боловч загварт тэдгээрийг толин тусгал плюм (Mirror image plume)-ээр ойсон мэтээр авч үздэг."
    },
    {
      "n": "4",
      "assumption": "Барилга байгууламж, хана, гүүр, долгион хагалагч зэрэг хүний гараар бүтээгдсэн байгууламж байхгүй",
      "actual": "Барилгын эргэн тойрон дахь хүчтэй салхи, хуйлрал (Wake), эргүүлэг, доош чиглэсэн урсгал (Downwash), гудамжны хавцлын нөлөө (Street canyon effect), халхлах, тойрч гарах урсгалыг тооцдоггүй."
    },
    {
      "n": "5",
      "assumption": "Мод, ой зэрэг ургамал байхгүй",
      "actual": "Модны нөлөөгөөр салхины хурд буурах, турбулент байдал нэмэгдэх, бөөмсийг барьж авах, тунадасжилтыг дэмжих зэргийг тооцдоггүй."
    },
    {
      "n": "6",
      "assumption": "Ялгаруулах эх үүсвэрийн эргэн тойронд бүтцийн нөлөө байхгүй",
      "actual": "Яндан болон барилгын ойролцоох нарийн төвөгтэй урсгал, салах үзэгдэл, дахин эргэлтийн бүс, барилгын доош чиглэсэн урсгалыг (downwash) тооцдоггүй."
    },
    {
      "n": "7",
      "assumption": "Салхины чиглэл тогтмол бөгөөд плюмийн төв шугам шулуун байна",
      "actual": "Бодит байдал дээр салхины чиглэл орон зай, цаг хугацааны хувьд хэлбэлздэг бөгөөд плюм (Plume) нь мушгирах, муруйх, чиглэлээ өөрчлөх боломжтой."
    },
    {
      "n": "8",
      "assumption": "Салхины хурд тогтмол байна",
      "actual": "Бодит байдал дээр салхины хурд нь цаг хугацаа, байршил, өндрөөс хамаарч өөр өөр байдаг боловч энэ загварт зөвхөн нэг салхины хурдыг ашигладаг."
    },
    {
      "n": "9",
      "assumption": "Салхи нэг хэвтээ чиглэлд үлээдэг",
      "actual": "Дээш чиглэсэн урсгал (Updraft), доош чиглэсэн урсгал (Downdraft), налуугийн салхи, газар/далайн салхи, уул/хөндийн салхи зэрэг гурван хэмжээст урсгалыг тооцдоггүй."
    },
    {
      "n": "10",
      "assumption": "Агаар мандлын тогтвортой байдал (Atmospheric stability) тогтмол байна",
      "actual": "Бодит байдал дээр тогтвортой байдал нь нарны цацраг, үүлний хэмжээ, газрын гадаргуугийн нөхцөл, цаг хугацаа, фронт дайран өнгөрөх зэргээс шалтгаалан өөрчлөгддөг боловч энэхүү загварт үүнийг А-аас F хүртэлх нэг төлөвт тогтоодог."
    },
    {
      "n": "11",
      "assumption": "Турбулент тархалтыг эмпирик томьёогоор төлөөлүүлж болно",
      "actual": "Бодит турбулент бүтэц болон эргүүлгийг шууд бодохын оронд хөндлөн тархалтын өргөн болон босоо тархалтын өргөнд зориулсан эмпирик томьёог ашиглан дундаж тархалтыг илэрхийлдэг."
    },
    {
      "n": "12",
      "assumption": "Бороо эсвэл цас орохгүй",
      "actual": "Бороо эсвэл цасны угаалт (Washout), нойтон тунадасжилт, хур тунадасны эрчмээс шалтгаалсан концентрацийн бууралтыг тооцдоггүй."
    },
    {
      "n": "13",
      "assumption": "Агаарын температур, чийгшил, барометрийн даралтын нөлөө байхгүй",
      "actual": "Хөвөх хүч, нягтын ялгаа, манан, конденсаци, гигроскопик өсөлтийг тооцдоггүй."
    },
    {
      "n": "14",
      "assumption": "Хилийн давхарга (Boundary layer) болон инверсийн давхаргын (Inversion layer) өндрийг шууд тооцохгүй",
      "actual": "Холимог давхаргын дээд хил, гадаргуугийн инверси, дээд талын тогтвортой давхаргаас шалтгаалсан босоо тархалтын хязгаарлалтыг шууд тооцдоггүй."
    },
    {
      "n": "15",
      "assumption": "Ялгаралт тасралтгүй бөгөөд тогтвортой байна",
      "actual": "Энэ нь агшин зуурын ялгаралт биш бөгөөд тогтмол нөхцөлд тасралтгүй ялгарч буй дундаж плюмийг авч үздэг. Ялгаралт эхэлсний дараах шууд цаг хугацааны хөгжлийг тооцдоггүй."
    },
    {
      "n": "16",
      "assumption": "Тооцооллын явцад ялгаруулах нөхцөл өөрчлөгдөхгүй",
      "actual": "Ялгаруулах хэмжээ ихсэх/багасах, зогсох, дахин эхлэх болон хамгийн их ялгаралтыг тооцдоггүй."
    },
    {
      "n": "17",
      "assumption": "Ялгаруулах эх үүсвэр нь тогтмол цэгэн эх үүсвэр байна",
      "actual": "Талбайн эх үүсвэр, шугаман эх үүсвэр, олон ялгаруулах эх үүсвэр, хөдөлдөг эх үүсвэр болон барилгаас бүхэлдээ алдагдах тохиолдлыг тооцдоггүй."
    },
    {
      "n": "18",
      "assumption": "Ялгаруулах өндөр тогтмол байна",
      "actual": "Ялгаруулах өндрийг тогтмол утга гэж үздэг бөгөөд байршил эсвэл цаг хугацаанаас хамаарч өөрчлөгдөхгүй."
    },
    {
      "n": "19",
      "assumption": "Үр ашигтай ялгаруулах өндөр нь оруулсан утгаараа байна",
      "actual": "Яндангийн хийн температур, гарах хурд, яндангийн диаметр, хөвөх хүч, импульсээс шалтгаалсан утааны өсөлтийг (Plume rise) тооцдоггүй."
    },
    {
      "n": "20",
      "assumption": "Плюмийн анхны өргөнгүй гэж үзэж болно",
      "actual": "Яндангийн нүхний диаметр, нээлхийн хэмжээ, анхны урсгалын өргөнг тооцдоггүй бөгөөд тархалтыг салхины дагуух зайгаар (Downwind distance) тодорхойлдог."
    },
    {
      "n": "21",
      "assumption": "Бодисууд салхиар идэвхгүй зөөвөрлөгдөнө",
      "actual": "Бодис өөрөө салхины талбайг өөрчлөх эсвэл хөвөх хүчний нөлөөгөөр дээш/доош хөдлөх нөлөөг үндсэндээ тооцдоггүй."
    },
    {
      "n": "22",
      "assumption": "Таталцлын тунадасжилт (Gravitational settling) байхгүй",
      "actual": "Бөөмсийн хэмжээ болон нягтаас хамаарсан унах хурд, бөөмсийн тунадасжилтыг тооцдоггүй."
    },
    {
      "n": "23",
      "assumption": "Химийн урвал байхгүй",
      "actual": "Исэлдэлт, ангижралт, конденсаци, хий-бөөмсийн хувирал болон бусад бодистой урвалд орохыг тооцдоггүй."
    },
    {
      "n": "24",
      "assumption": "Нэг бодис гэж үзнэ",
      "actual": "Бодит ялгаралтанд олон нуклид, химийн төрөл, бөөмсийн хэмжээнээс хамаарсан зан төлөвийн ялгаа байдаг боловч загвар нь тэдгээрийг нэг ялгаруулалтын хэмжээ, концентрациар төлөөлүүлдэг."
    },
    {
      "n": "25",
      "assumption": "Дахин дэгдэлт (Resuspension) байхгүй",
      "actual": "Газрын гадаргуу дээр нэг удаа буусан бодисыг салхи дахин хийсгэх нөлөөг тооцдоггүй."
    },
    {
      "n": "26",
      "assumption": "Цацраг идэвхт задралыг (Radioactive decay) хялбаршуулдаг",
      "actual": "Задралын коэффициентийг ашиглах үед экспоненциал задрал болгон хялбарчилдаг. Охин нуклид үүсэх болон олон нуклидын гинжин задралыг тооцдоггүй."
    },
    {
      "n": "27",
      "assumption": "Хөндлөн концентрацийн тархалт нь Гауссын тархалт юм",
      "actual": "Бодит агшин зуурын концентраци жигд бус хэлбэлздэг боловч дундаж концентраци нь гол шугамаас зүүн болон баруун тийш хэвийн тархалтын хэлбэрээр буурдаг гэж үздэг."
    },
    {
      "n": "28",
      "assumption": "Босоо концентрацийн тархалт мөн Гауссын тархалт юм",
      "actual": "Бодит байдал дээр босоо тархалт нь газрын гадаргуу, инверсийн давхарга, барилга байгууламж, турбулент бүтцийн нөлөөгөөр гажилтанд ордог боловч загвар үүнийг Гауссын тархалт болон толин тусгал (Mirror image term) ашиглан илэрхийлдэг."
    },
    {
      "n": "29",
      "assumption": "Тархалтын өргөн нь салхины дагуух зай (Downwind) болон агаар мандлын тогтвортой байдлаар тодорхойлогдоно",
      "actual": "Бодит байдал дээр энэ нь турбулентийн эрчим, гадаргуугийн барзгар байдал, хилийн давхаргын өндөр, босоо салхины хурдны тархалт зэргээс мөн хамаардаг."
    },
    {
      "n": "30",
      "assumption": "Концентрацийн талбай гөлгөр бөгөөд тасралтгүй байна",
      "actual": "Бодит байдал дээр концентрацийн нягтрал нь турбулентийн нөлөөгөөр жигд бус хэлбэлзэж, бөөгнөрсөн эсвэл зураастай тархалтыг үүсгэж болно."
    },
    {
      "n": "31",
      "assumption": "Салхины эсрэг (Upwind) чиглэл дэх концентраци тэг байна",
      "actual": "Салхины дагуух зай тэг буюу түүнээс бага байвал концентрацийг тэг гэж тогтооно. Бодит байдал дээр салхины чиглэлийн хэлбэлзэл эсвэл турбулентийн улмаас салхины эсрэг тал руу эргэж тархах боломжтой."
    },
    {
      "n": "32",
      "assumption": "Салхигүй эсвэл сөрөг салхины нөхцөлийг тооцдоггүй",
      "actual": "Салхины хурд тэг буюу түүнээс бага байвал концентрацийг тэг гэж тогтооно. Бодит сул салхи эсвэл тогтуун үеийн хувьд өөр загвар шаардлагатай."
    },
    {
      "n": "33",
      "assumption": "Тооцооллын хүрээнээс гадна үнэлгээ хийхгүй",
      "actual": "Хамгийн их концентрацитай цэг эсвэл нөлөөллийн хүрээ нь тооцооллын хүрээнээс гадуур байсан ч гаднах хэсэг нь мэдэгдэхгүй."
    },
    {
      "n": "34",
      "assumption": "Нүдний төв утгыг нүдийг төлөөлөх утга болгон ашиглана",
      "actual": "Нүдний дундаж утгыг биш харин нүдний төв (Cell-center) дэх концентрацийн утгыг ашигладаг."
    },
    {
      "n": "35",
      "assumption": "Дэлхийн гадаргууг орон нутгийн хавтгай гэж үзэж болно",
      "actual": "Өргөрөг болон уртрагийг богино зайн ойролцооллоор орон нутгийн координат руу шилжүүлдэг. Өргөн уудам нутагт дэлхийн муруйлт болон проекцийн аргын нөлөөлөл нэмэгддэг."
    },
    {
      "n": "36",
      "assumption": "Өргөрөг/уртрагаас зай руу шилжүүлэх ойролцоолол хангалттай",
      "actual": "Өргөн уудам газар нутаг эсвэл өндөр өргөрөгт алдаа нь их болдог."
    },
    {
      "n": "37",
      "assumption": "Салхины дагуух (Downwind) координат руу хөрвүүлэхэд 2D эргүүлэлт хангалттай",
      "actual": "Салхины дагуух зай болон хөндлөн салхины (Crosswind) зайг гаргаж авахын тулд орон нутгийн координатыг салхины дагуу эргүүлнэ. Босоо бүрэлдэхүүн хэсгийг багтаасан 3D салхийг тооцдоггүй."
    },
    {
      "n": "38",
      "assumption": "Босоо тархалтын өргөн томьёо 0.2 км-ийн хязгаарт өөрчлөгдөнө",
      "actual": "Энэ нь бодит агаар мандал 200 метрийн өндөрт огцом өөрчлөгдөнө гэсэн үг биш бөгөөд энэ нь эмпирик томьёоны хязгаар юм."
    },
    {
      "n": "39",
      "assumption": "Босоо тархалтын өргөнд дээд хязгаар байдаг",
      "actual": "Холын зайд эсвэл тогтворгүй нөхцөлд босоо тархалт нь ханаж (таазандаа хүрдэг)."
    }
  ],
  "ms": [
    {
      "n": "1",
      "assumption": "Permukaan bumi adalah rata (Flat terrain)",
      "actual": "Ubah bentuk angin dan pesongan taburan kepekatan akibat gunung, lembah, cerun, dataran tinggi, tebing, benteng, dataran banjir, dsb. tidak dipertimbangkan."
    },
    {
      "n": "2",
      "assumption": "Sifat permukaan tanah adalah seragam",
      "actual": "Perbezaan kekasaran permukaan tanah akibat permukaan laut, ladang, kawasan bandar, hutan, kawasan perindustrian, dsb. tidak dipertimbangkan."
    },
    {
      "n": "3",
      "assumption": "Pemendapan, jerapan dan tangkapan di permukaan tanah tidak dipertimbangkan, dan permukaan tanah dianggap sebagai sempadan pemantulan sempurna",
      "actual": "Pada hakikatnya, bahan boleh termendap, terjerap dan terperangkap di atas tanah, rumput, jalan, bangunan, permukaan air, dsb., tetapi dalam model, ia dikendalikan seolah-olah dipantulkan oleh kepulan imej cermin (Mirror image plume)."
    },
    {
      "n": "4",
      "assumption": "Tiada struktur buatan manusia seperti bangunan, dinding, jambatan dan pemecah ombak",
      "actual": "Angin kencang di sekitar bangunan, aliran olakan (Wake), pusaran, junaman (Downwash), kesan ngarai jalan (Street canyon effect), perisai dan lencongan tidak dipertimbangkan."
    },
    {
      "n": "5",
      "assumption": "Tumbuh-tumbuhan seperti pokok dan hutan tidak wujud",
      "actual": "Penurunan kelajuan angin, peningkatan pergolakan, penangkapan zarah dan penggalakan pemendapan oleh pokok tidak dipertimbangkan."
    },
    {
      "n": "6",
      "assumption": "Tiada kesan struktur di sekeliling sumber pelepasan",
      "actual": "Aliran kompleks, pemisahan, zon peredaran semula dan kesan downwash bangunan berdekatan serombong dan bangunan tidak dipertimbangkan."
    },
    {
      "n": "7",
      "assumption": "Arah angin adalah malar dan garis pusat kepulan adalah lurus",
      "actual": "Pada hakikatnya, arah angin berubah-ubah mengikut ruang dan masa, dan kepulan (Plume) boleh berliku-liku, melengkung dan berubah arah."
    },
    {
      "n": "8",
      "assumption": "Kelajuan angin adalah malar",
      "actual": "Pada hakikatnya, kelajuan angin berbeza mengikut masa, lokasi dan ketinggian, tetapi model ini menggunakan satu kelajuan angin."
    },
    {
      "n": "9",
      "assumption": "Angin bertiup dalam satu arah mendatar",
      "actual": "Aliran tiga dimensi seperti arus menaik (Updraft), arus menurun (Downdraft), aliran cerun, angin darat/laut dan angin gunung/lembah tidak dipertimbangkan."
    },
    {
      "n": "10",
      "assumption": "Kestabilan atmosfera (Atmospheric stability) adalah malar",
      "actual": "Pada hakikatnya, kestabilan berbeza-beza disebabkan oleh sinaran suria, litupan awan, keadaan permukaan tanah, masa dan laluan rintangan, tetapi model ini menetapkannya pada salah satu daripada A hingga F."
    },
    {
      "n": "11",
      "assumption": "Resapan bergelora boleh diwakili oleh formula empirik",
      "actual": "Daripada menyelesaikan struktur dan pusaran gelora sebenar secara langsung, ia menyatakan purata penyebaran menggunakan formula empirikal untuk lebar resapan sisi dan lebar resapan menegak."
    },
    {
      "n": "12",
      "assumption": "Tiada hujan atau salji",
      "actual": "Pembersihan (Washout) oleh hujan atau salji, pemendapan basah dan pengurangan kepekatan akibat keamatan kerpasan tidak dipertimbangkan."
    },
    {
      "n": "13",
      "assumption": "Tiada kesan suhu udara, kelembapan dan tekanan atmosfera",
      "actual": "Daya apungan, perbezaan ketumpatan, kabus, pemeluwapan dan pertumbuhan higroskopik tidak dipertimbangkan."
    },
    {
      "n": "14",
      "assumption": "Ketinggian lapisan sempadan (Boundary layer) atau lapisan songsangan (Inversion layer) tidak dikendalikan secara eksplisit",
      "actual": "Had resapan menegak oleh bahagian atas lapisan campuran, songsangan permukaan dan lapisan stabil atas tidak dikendalikan secara langsung."
    },
    {
      "n": "15",
      "assumption": "Pelepasan berterusan dan stabil",
      "actual": "Ini bukan pelepasan sesaat, tetapi mengandaikan kepulan purata yang dilepaskan secara berterusan di bawah keadaan malar. Evolusi masa sejurus selepas permulaan pelepasan tidak dikira."
    },
    {
      "n": "16",
      "assumption": "Keadaan pelepasan tidak berubah semasa pengiraan",
      "actual": "Peningkatan/penurunan, perhentian, permulaan semula dan puncak jumlah pelepasan tidak dipertimbangkan."
    },
    {
      "n": "17",
      "assumption": "Sumber pelepasan ialah sumber titik tetap",
      "actual": "Sumber kawasan, sumber garis, pelbagai sumber pelepasan, sumber bergerak dan kebocoran daripada keseluruhan bangunan tidak dipertimbangkan."
    },
    {
      "n": "18",
      "assumption": "Ketinggian pelepasan adalah malar",
      "actual": "Ketinggian pelepasan dianggap sebagai nilai tetap dan tidak berubah dengan lokasi atau masa."
    },
    {
      "n": "19",
      "assumption": "Ketinggian pelepasan berkesan ialah nilai input itu sendiri",
      "actual": "Kenaikan asap (Plume rise) akibat suhu gas ekzos, kelajuan ekzos, diameter cerobong, daya apungan dan momentum tidak dikira."
    },
    {
      "n": "20",
      "assumption": "Lebar kepulan awal boleh diabaikan",
      "actual": "Diameter ekzos, saiz bukaan dan lebar jet awal tidak dipertimbangkan; penyebaran ditentukan oleh jarak bawah angin (Downwind distance)."
    },
    {
      "n": "21",
      "assumption": "Bahan diangkut secara pasif oleh angin",
      "actual": "Kesan di mana bahan itu sendiri mengubah medan angin atau bergerak naik/turun disebabkan oleh daya apungan pada dasarnya tidak dipertimbangkan."
    },
    {
      "n": "22",
      "assumption": "Tiada pemendapan graviti (Gravitational settling)",
      "actual": "Kelajuan jatuh akibat saiz dan ketumpatan zarah, serta pemendapan zarah tidak dipertimbangkan."
    },
    {
      "n": "23",
      "assumption": "Tiada tindak balas kimia",
      "actual": "Pengoksidaan, penurunan, pemeluwapan, penukaran gas-kepada-zarah dan tindak balas dengan bahan lain tidak dipertimbangkan."
    },
    {
      "n": "24",
      "assumption": "Dianggap sebagai bahan tunggal",
      "actual": "Dalam pelepasan sebenar, terdapat perbezaan tingkah laku berbilang nuklid, spesies kimia dan saiz zarah, tetapi model ini mewakilinya dengan satu jumlah pelepasan dan kepekatan."
    },
    {
      "n": "25",
      "assumption": "Tiada penggantungan semula (Resuspension)",
      "actual": "Kesan di mana bahan yang pernah termendap di atas tanah ditiup semula oleh angin tidak dipertimbangkan."
    },
    {
      "n": "26",
      "assumption": "Reputan radioaktif (Radioactive decay) dipermudahkan",
      "actual": "Apabila pekali reputan digunakan, ia dipermudahkan sebagai reputan eksponen. Penciptaan nuklid anak dan reputan rantai berbilang nuklid tidak dikendalikan."
    },
    {
      "n": "27",
      "assumption": "Taburan kepekatan sisi ialah taburan Gaussian",
      "actual": "Kepekatan seketika sebenar berubah secara tidak teratur, tetapi kepekatan purata diandaikan berkurangan ke kiri dan kanan dari garis tengah dalam bentuk taburan normal."
    },
    {
      "n": "28",
      "assumption": "Taburan kepekatan menegak juga merupakan taburan Gaussian",
      "actual": "Pada hakikatnya, taburan menegak diherotkan oleh permukaan tanah, lapisan songsang, bangunan dan struktur gelora, tetapi model ini mewakilinya menggunakan taburan Gaussian dan sebutan imej cermin (Mirror image term)."
    },
    {
      "n": "29",
      "assumption": "Lebar resapan ditentukan oleh jarak bawah angin (Downwind) dan kestabilan atmosfera",
      "actual": "Pada hakikatnya, ia juga bergantung pada keamatan pergolakan, kekasaran permukaan, ketinggian lapisan sempadan dan taburan kelajuan angin menegak."
    },
    {
      "n": "30",
      "assumption": "Medan kepekatan adalah licin dan berterusan",
      "actual": "Pada hakikatnya, ketebalan kepekatan berubah-ubah secara tidak teratur disebabkan oleh pergolakan dan boleh membentuk taburan berketul atau berjalur."
    },
    {
      "n": "31",
      "assumption": "Kepekatan di arah atas angin (Upwind) ialah sifar",
      "actual": "Kepekatan ditetapkan kepada sifar jika jarak bawah angin adalah sifar atau kurang. Pada hakikatnya, ia boleh beredar kembali ke arah atas angin kerana turun naik arah angin atau pergolakan."
    },
    {
      "n": "32",
      "assumption": "Keadaan tanpa angin atau angin bertentangan tidak diuruskan",
      "actual": "Kepekatan ditetapkan kepada sifar jika kelajuan angin sifar atau kurang. Model yang berbeza diperlukan untuk tempoh angin lemah atau tenang sebenar."
    },
    {
      "n": "33",
      "assumption": "Luar julat pengiraan tidak dinilai",
      "actual": "Walaupun titik kepekatan maksimum atau julat kesan berada di luar julat pengiraan, kawasan luaran tidak diketahui."
    },
    {
      "n": "34",
      "assumption": "Nilai pusat sel bertindak sebagai nilai wakil sel",
      "actual": "Menggunakan nilai kepekatan di pusat sel (Cell-center) dan bukannya nilai purata sel."
    },
    {
      "n": "35",
      "assumption": "Permukaan bumi boleh dianggap sebagai satah tempatan",
      "actual": "Latitud dan longitud ditukar kepada koordinat tempatan menggunakan anggaran jarak dekat. Kesan kelengkungan bumi dan kaedah unjuran meningkat untuk kawasan yang luas."
    },
    {
      "n": "36",
      "assumption": "Penganggaran penukaran latitud/longitud kepada jarak adalah memadai",
      "actual": "Ralat menjadi besar di kawasan yang luas atau latitud tinggi."
    },
    {
      "n": "37",
      "assumption": "Penukaran kepada koordinat bawah angin (Downwind) cukup dengan putaran 2D",
      "actual": "Koordinat tempatan diputarkan ke arah bawah angin untuk mendapatkan jarak bawah angin dan jarak angin silang (Crosswind). Angin 3D yang merangkumi komponen menegak tidak dikendalikan."
    },
    {
      "n": "38",
      "assumption": "Formula lebar resapan menegak berubah pada sempadan 0.2 km",
      "actual": "Ini tidak bermakna atmosfera sebenar berubah secara tiba-tiba pada 200 m, sebaliknya ia adalah sempadan pada formula empirikal."
    },
    {
      "n": "39",
      "assumption": "Lebar resapan menegak mempunyai had atas",
      "actual": "Penyebaran menegak tepu (siling) pada jarak yang jauh atau dalam keadaan tidak stabil."
    }
  ],
  "ru": [
    {
      "n": "1",
      "assumption": "Поверхность земли плоская (Flat terrain)",
      "actual": "Деформация ветра и отклонения в распределении концентрации из-за гор, долин, склонов, плато, обрывов, дамб, пойм и т.д. не учитываются."
    },
    {
      "n": "2",
      "assumption": "Свойства земной поверхности однородны",
      "actual": "Различия в шероховатости поверхности из-за моря, полей, городских территорий, лесов, промышленных зон и т.д. не учитываются."
    },
    {
      "n": "3",
      "assumption": "Осаждение, адсорбция и захват на поверхности земли не учитываются, и поверхность земли рассматривается как граница идеального отражения",
      "actual": "В реальности вещества могут осаждаться, адсорбироваться и задерживаться на земле, траве, дорогах, зданиях, поверхности воды и т.д., но в модели это рассматривается как отражение зеркальным шлейфом (Mirror image plume)."
    },
    {
      "n": "4",
      "assumption": "Отсутствуют искусственные сооружения, такие как здания, стены, мосты и волноломы",
      "actual": "Ветры вокруг зданий, спутные струи (Wake), вихри, нисходящие потоки (Downwash), эффект уличного каньона (Street canyon effect), экранирование и обтекание не учитываются."
    },
    {
      "n": "5",
      "assumption": "Отсутствует растительность, такая как деревья и леса",
      "actual": "Снижение скорости ветра, усиление турбулентности, захват частиц и стимулирование осаждения деревьями не учитываются."
    },
    {
      "n": "6",
      "assumption": "Отсутствует влияние конструкций вокруг источника выброса",
      "actual": "Сложные потоки, отрыв, зоны рециркуляции и нисходящие потоки (downwash) от зданий вблизи дымовых труб и сооружений не учитываются."
    },
    {
      "n": "7",
      "assumption": "Направление ветра постоянно, а центральная линия шлейфа прямая",
      "actual": "В реальности направление ветра колеблется в пространстве и времени, и шлейф (Plume) может извиваться, изгибаться и изменять направление."
    },
    {
      "n": "8",
      "assumption": "Скорость ветра постоянна",
      "actual": "В реальности скорость ветра меняется в зависимости от времени, места и высоты, но в данной модели используется единственное значение скорости ветра."
    },
    {
      "n": "9",
      "assumption": "Ветер дует в одном горизонтальном направлении",
      "actual": "Трехмерные потоки, такие как восходящие потоки (Updraft), нисходящие потоки (Downdraft), склоновые ветры, бризы суша/море и горно-долинные ветры, не учитываются."
    },
    {
      "n": "10",
      "assumption": "Атмосферная устойчивость (Atmospheric stability) постоянна",
      "actual": "В реальности устойчивость меняется из-за солнечной радиации, облачности, состояния поверхности земли, времени суток и прохождения фронтов, но эта модель фиксирует ее на одном уровне от A до F."
    },
    {
      "n": "11",
      "assumption": "Турбулентную диффузию можно представить эмпирической формулой",
      "actual": "Вместо непосредственного расчета реальной структуры турбулентности и вихрей, выражается среднее рассеяние с использованием эмпирических формул для поперечной и вертикальной ширины диффузии."
    },
    {
      "n": "12",
      "assumption": "Дождь и снег отсутствуют",
      "actual": "Вымывание (Washout) дождем или снегом, влажное осаждение и снижение концентрации из-за интенсивности осадков не учитываются."
    },
    {
      "n": "13",
      "assumption": "Отсутствует влияние температуры воздуха, влажности и атмосферного давления",
      "actual": "Выталкивающая сила (плавучесть), разница в плотности, туман, конденсация и гигроскопический рост не учитываются."
    },
    {
      "n": "14",
      "assumption": "Высота пограничного слоя (Boundary layer) и инверсионный слой (Inversion layer) явно не обрабатываются",
      "actual": "Ограничение вертикальной диффузии верхней границей слоя перемешивания, приземной инверсией и верхним устойчивым слоем напрямую не учитывается."
    },
    {
      "n": "15",
      "assumption": "Выбросы непрерывны и стабильны",
      "actual": "Это не мгновенный выброс, а предполагается средний шлейф, который непрерывно выбрасывается при постоянных условиях. Временное развитие сразу после начала выброса не рассчитывается."
    },
    {
      "n": "16",
      "assumption": "Условия выброса не меняются в ходе расчета",
      "actual": "Увеличение/уменьшение, остановка, возобновление и пики объема выбросов не учитываются."
    },
    {
      "n": "17",
      "assumption": "Источник выброса является фиксированным точечным источником",
      "actual": "Площадные источники, линейные источники, множественные источники выбросов, движущиеся источники и утечки из целых зданий не учитываются."
    },
    {
      "n": "18",
      "assumption": "Высота выброса постоянна",
      "actual": "Высота выброса рассматривается как фиксированная величина и не меняется в зависимости от места или времени."
    },
    {
      "n": "19",
      "assumption": "Эффективная высота выброса равна введенному значению",
      "actual": "Подъем дыма (Plume rise) из-за температуры выхлопных газов, скорости выхлопа, диаметра дымовой трубы, плавучести и импульса не рассчитывается."
    },
    {
      "n": "20",
      "assumption": "Начальной шириной шлейфа можно пренебречь",
      "actual": "Диаметр выпускного отверстия, размер проема и начальная ширина струи не учитываются; рассеивание определяется расстоянием по ветру (Downwind distance)."
    },
    {
      "n": "21",
      "assumption": "Вещества пассивно переносятся ветром",
      "actual": "Эффекты, при которых само вещество изменяет поле ветра или перемещается вверх/вниз из-за плавучести, в принципе не учитываются."
    },
    {
      "n": "22",
      "assumption": "Отсутствует гравитационное осаждение (Gravitational settling)",
      "actual": "Скорость падения, зависящая от размера частиц и плотности, а также осаждение частиц не учитываются."
    },
    {
      "n": "23",
      "assumption": "Отсутствуют химические реакции",
      "actual": "Окисление, восстановление, конденсация, преобразование газ-частица и реакции с другими веществами не учитываются."
    },
    {
      "n": "24",
      "assumption": "Рассматривается как одно вещество",
      "actual": "При реальных выбросах существуют различия в поведении множества нуклидов, химических видов и размеров частиц, но модель представляет их одним количеством выброса и концентрацией."
    },
    {
      "n": "25",
      "assumption": "Отсутствует вторичный подъем (Resuspension)",
      "actual": "Эффект, при котором вещества, однажды осевшие на поверхность земли, снова поднимаются ветром, не учитывается."
    },
    {
      "n": "26",
      "assumption": "Радиоактивный распад (Radioactive decay) упрощен",
      "actual": "При использовании коэффициента распада он упрощается до экспоненциального распада. Образование дочерних нуклидов и цепной распад множественных нуклидов не обрабатываются."
    },
    {
      "n": "27",
      "assumption": "Поперечное распределение концентрации представляет собой распределение Гаусса",
      "actual": "Фактические мгновенные концентрации неравномерно колеблются, но предполагается, что средняя концентрация уменьшается влево и вправо от центральной линии в виде нормального распределения."
    },
    {
      "n": "28",
      "assumption": "Вертикальное распределение концентрации также является распределением Гаусса",
      "actual": "В реальности вертикальное распределение искажается поверхностью земли, инверсионными слоями, зданиями и структурами турбулентности, но модель представляет его с использованием распределения Гаусса и члена зеркального отражения (Mirror image term)."
    },
    {
      "n": "29",
      "assumption": "Ширина диффузии определяется расстоянием по ветру (Downwind) и атмосферной устойчивостью",
      "actual": "В реальности она также зависит от интенсивности турбулентности, шероховатости поверхности, высоты пограничного слоя и вертикального распределения скорости ветра."
    },
    {
      "n": "30",
      "assumption": "Поле концентрации гладкое и непрерывное",
      "actual": "В реальности плотность концентрации неравномерно колеблется из-за турбулентности и может образовывать комковатые или полосатые распределения."
    },
    {
      "n": "31",
      "assumption": "Концентрация с наветренной стороны (Upwind) равна нулю",
      "actual": "Концентрация устанавливается равной нулю, если расстояние по ветру равно нулю или меньше. В реальности вещество может распространяться против ветра из-за колебаний направления ветра или турбулентности."
    },
    {
      "n": "32",
      "assumption": "Штиль или встречный ветер не учитываются",
      "actual": "Концентрация устанавливается равной нулю, если скорость ветра равна нулю или меньше. Для периодов слабого ветра или штиля требуется другая модель."
    },
    {
      "n": "33",
      "assumption": "Область за пределами расчетного диапазона не оценивается",
      "actual": "Даже если точка максимальной концентрации или зона влияния находится вне диапазона расчета, то, что снаружи, неизвестно."
    },
    {
      "n": "34",
      "assumption": "В качестве репрезентативного значения ячейки используется значение в центре ячейки",
      "actual": "Используется значение концентрации в центре ячейки (Cell-center), а не среднее по ячейке значение."
    },
    {
      "n": "35",
      "assumption": "Поверхность Земли можно рассматривать как локальную плоскость",
      "actual": "Широта и долгота преобразуются в локальные координаты с использованием приближения для малых расстояний. На больших территориях возрастает влияние кривизны Земли и метода проекции."
    },
    {
      "n": "36",
      "assumption": "Приближения преобразования широты/долготы в расстояние достаточно",
      "actual": "Погрешность становится большой на обширных территориях или в высоких широтах."
    },
    {
      "n": "37",
      "assumption": "Для преобразования в координаты по ветру (Downwind) достаточно двумерного вращения",
      "actual": "Локальные координаты поворачиваются в направлении по ветру для получения расстояния по ветру и поперечного расстояния (Crosswind). Трехмерный ветер, включая вертикальную составляющую, не обрабатывается."
    },
    {
      "n": "38",
      "assumption": "Формула ширины вертикальной диффузии переключается на границе 0,2 км",
      "actual": "Это не означает, что реальная атмосфера резко меняется на высоте 200 м, скорее это граница в эмпирической формуле."
    },
    {
      "n": "39",
      "assumption": "Для ширины вертикальной диффузии существует верхний предел",
      "actual": "Вертикальная диффузия насыщается (достигает потолка) на больших расстояниях или в нестабильных условиях."
    }
  ],
  "th": [
    {
      "n": "1",
      "assumption": "พื้นผิวโลกราบเรียบ (Flat terrain)",
      "actual": "ไม่พิจารณาการเสียรูปของลมและความเบี่ยงเบนของการกระจายความเข้มข้นที่เกิดจากภูเขา หุบเขา ความลาดชัน ที่ราบสูง หน้าผา เขื่อนกั้นน้ำ ที่ราบลุ่มแม่น้ำ ฯลฯ"
    },
    {
      "n": "2",
      "assumption": "คุณสมบัติของพื้นผิวโลกมีความสม่ำเสมอ",
      "actual": "ไม่พิจารณาความแตกต่างของความขรุขระของพื้นผิวเนื่องจากผิวน้ำทะเล ทุ่งนา เขตเมือง ป่าไม้ เขตอุตสาหกรรม ฯลฯ"
    },
    {
      "n": "3",
      "assumption": "ไม่พิจารณาการทับถม การดูดซับ และการกักเก็บไว้ที่พื้นผิวโลก และถือว่าพื้นผิวโลกเป็นขอบเขตการสะท้อนที่สมบูรณ์",
      "actual": "ในความเป็นจริง สารอาจตกตะกอน ถูกดูดซับ และติดอยู่บนพื้นดิน หญ้า ถนน อาคาร ผิวน้ำ ฯลฯ แต่ในแบบจำลองนี้ ถือว่าพวกมันถูกสะท้อนโดยพลูมภาพกระจกเงา (Mirror image plume)"
    },
    {
      "n": "4",
      "assumption": "ไม่มีโครงสร้างที่มนุษย์สร้างขึ้น เช่น อาคาร กำแพง สะพาน และเขื่อนกันคลื่น",
      "actual": "ไม่พิจารณาลมกระโชกแรงรอบอาคาร กระแสน้ำวน (Wake) การไหลวน การพัดลงสู่พื้น (Downwash) ปรากฏการณ์ช่องเขาในเมือง (Street canyon effect) การกำบัง และการเลี่ยงผ่าน"
    },
    {
      "n": "5",
      "assumption": "ไม่มีพืชพรรณ เช่น ต้นไม้และป่าไม้",
      "actual": "ไม่พิจารณาถึงการลดความเร็วลม การเพิ่มความปั่นป่วน การดักจับอนุภาค และการส่งเสริมการตกตะกอนโดยต้นไม้"
    },
    {
      "n": "6",
      "assumption": "ไม่มีผลกระทบทางโครงสร้างรอบแหล่งกำเนิดการปล่อยมลพิษ",
      "actual": "ไม่พิจารณาการไหลที่ซับซ้อน การแยกตัว บริเวณหมุนเวียน และการพัดลงสู่พื้นโดยอาคาร (Downwash) ในบริเวณใกล้กับปล่องควันและอาคาร"
    },
    {
      "n": "7",
      "assumption": "ทิศทางลมคงที่และเส้นกึ่งกลางของพลูมเป็นเส้นตรง",
      "actual": "ในความเป็นจริง ทิศทางลมมีการเปลี่ยนแปลงตามพื้นที่และเวลา และพลูม (Plume) สามารถคดเคี้ยว โค้ง และเปลี่ยนทิศทางได้"
    },
    {
      "n": "8",
      "assumption": "ความเร็วลมคงที่",
      "actual": "ในความเป็นจริง ความเร็วลมจะแตกต่างกันไปตามเวลา สถานที่ และระดับความสูง แต่แบบจำลองนี้ใช้ความเร็วลมเพียงค่าเดียว"
    },
    {
      "n": "9",
      "assumption": "ลมพัดไปในทิศทางแนวนอนทิศทางเดียว",
      "actual": "ไม่พิจารณาการไหลแบบสามมิติ เช่น กระแสลมพัดขึ้น (Updraft) กระแสลมพัดลง (Downdraft) ลมลาดเขา ลมบก/ลมทะเล และลมภูเขา/ลมหุบเขา"
    },
    {
      "n": "10",
      "assumption": "เสถียรภาพบรรยากาศ (Atmospheric stability) คงที่",
      "actual": "ในความเป็นจริง เสถียรภาพจะเปลี่ยนแปลงไปเนื่องจากการแผ่รังสีของดวงอาทิตย์ ปริมาณเมฆ สภาพพื้นผิวโลก เวลา และการเคลื่อนผ่านของแนวปะทะอากาศ แต่แบบจำลองนี้กำหนดให้อยู่ในระดับ A ถึง F ระดับใดระดับหนึ่ง"
    },
    {
      "n": "11",
      "assumption": "การแพร่กระจายแบบปั่นป่วนสามารถแทนด้วยสูตรเชิงประจักษ์ได้",
      "actual": "แทนที่จะแก้ปัญหาโครงสร้างความปั่นป่วนและกระแสน้ำวนที่แท้จริงโดยตรง แบบจำลองนี้แสดงค่าการกระจายตัวเฉลี่ยโดยใช้สูตรเชิงประจักษ์สำหรับความกว้างของการกระจายตัวในแนวขวางและความกว้างของการกระจายตัวในแนวดิ่ง"
    },
    {
      "n": "12",
      "assumption": "ไม่มีฝนหรือหิมะ",
      "actual": "ไม่พิจารณาการชะล้าง (Washout) ด้วยฝนหรือหิมะ การทับถมแบบเปียก และการลดลงของความเข้มข้นเนื่องจากความรุนแรงของหยาดน้ำฟ้า"
    },
    {
      "n": "13",
      "assumption": "ไม่มีผลกระทบจากอุณหภูมิอากาศ ความชื้น และความกดอากาศ",
      "actual": "ไม่พิจารณาแรงลอยตัว ความแตกต่างของความหนาแน่น หมอก การควบแน่น และการเติบโตแบบดูดความชื้น"
    },
    {
      "n": "14",
      "assumption": "ไม่ได้จัดการความสูงของชั้นขอบเขต (Boundary layer) หรือชั้นผกผัน (Inversion layer) อย่างชัดเจน",
      "actual": "การจำกัดการแพร่กระจายในแนวดิ่งโดยขอบบนของชั้นผสม การผกผันของพื้นผิว และชั้นที่มีเสถียรภาพด้านบน ไม่ได้รับการจัดการโดยตรง"
    },
    {
      "n": "15",
      "assumption": "การปล่อยมลพิษเป็นไปอย่างต่อเนื่องและคงที่",
      "actual": "นี่ไม่ใช่การปล่อยชั่วขณะ แต่ถือว่าเป็นพลูมเฉลี่ยที่ถูกปล่อยออกมาอย่างต่อเนื่องภายใต้เงื่อนไขคงที่ ไม่ได้คำนวณการเปลี่ยนแปลงตามเวลาในทันทีหลังจากเริ่มการปล่อยมลพิษ"
    },
    {
      "n": "16",
      "assumption": "เงื่อนไขการปล่อยมลพิษไม่เปลี่ยนแปลงระหว่างการคำนวณ",
      "actual": "ไม่พิจารณาถึงการเพิ่มหรือลด การหยุด การเริ่มใหม่ และจุดสูงสุดของปริมาณการปล่อยมลพิษ"
    },
    {
      "n": "17",
      "assumption": "แหล่งกำเนิดการปล่อยมลพิษเป็นแหล่งกำเนิดแบบจุดคงที่",
      "actual": "ไม่พิจารณาแหล่งกำเนิดแบบพื้นที่ แหล่งกำเนิดแบบเส้น แหล่งกำเนิดการปล่อยหลายจุด แหล่งกำเนิดที่เคลื่อนที่ได้ และการรั่วไหลจากอาคารทั้งหมด"
    },
    {
      "n": "18",
      "assumption": "ความสูงของการปล่อยมลพิษคงที่",
      "actual": "ความสูงของการปล่อยมลพิษถือเป็นค่าคงที่และไม่เปลี่ยนแปลงตามสถานที่หรือเวลา"
    },
    {
      "n": "19",
      "assumption": "ความสูงในการปล่อยมลพิษที่มีประสิทธิภาพคือค่าที่ป้อนเข้ามา",
      "actual": "ไม่ได้คำนวณการลอยตัวของควัน (Plume rise) อันเนื่องมาจากอุณหภูมิของก๊าซไอเสีย ความเร็วไอเสีย เส้นผ่านศูนย์กลางปล่องไฟ แรงลอยตัว และโมเมนตัม"
    },
    {
      "n": "20",
      "assumption": "ความกว้างของพลูมเริ่มต้นสามารถละเว้นได้",
      "actual": "ไม่พิจารณาเส้นผ่านศูนย์กลางของรูระบาย ขนาดช่องเปิด และความกว้างของเจ็ทเริ่มต้น การกระจายจะถูกกำหนดโดยระยะทางใต้ลม (Downwind distance)"
    },
    {
      "n": "21",
      "assumption": "สารต่างๆ ถูกพัดพาไปตามลมอย่างเฉื่อยชา",
      "actual": "ผลกระทบที่สารนั้นเปลี่ยนสนามลมเองหรือเคลื่อนที่ขึ้น/ลงเนื่องจากแรงลอยตัวโดยพื้นฐานแล้วจะไม่ได้รับการพิจารณา"
    },
    {
      "n": "22",
      "assumption": "ไม่มีการตกตะกอนตามแรงโน้มถ่วง (Gravitational settling)",
      "actual": "ไม่พิจารณาความเร็วในการร่วงหล่นตามขนาดและความหนาแน่นของอนุภาค รวมถึงการตกตะกอนของอนุภาค"
    },
    {
      "n": "23",
      "assumption": "ไม่มีปฏิกิริยาเคมี",
      "actual": "ไม่พิจารณาการเกิดออกซิเดชัน การรีดักชัน การควบแน่น การแปลงก๊าซเป็นอนุภาค และปฏิกิริยากับสารอื่นๆ"
    },
    {
      "n": "24",
      "assumption": "ถือว่าเป็นสารชนิดเดียว",
      "actual": "ในการปล่อยมลพิษที่แท้จริง จะมีความแตกต่างในพฤติกรรมของนิวไคลด์ ชนิดทางเคมี และขนาดของอนุภาคหลายชนิด แต่แบบจำลองจะแสดงด้วยปริมาณการปล่อยและความเข้มข้นเพียงค่าเดียว"
    },
    {
      "n": "25",
      "assumption": "ไม่มีการฟุ้งกระจายซ้ำ (Resuspension)",
      "actual": "ไม่พิจารณาผลกระทบที่สารซึ่งเคยตกลงบนพื้นผิวโลกถูกลมพัดปลิวขึ้นมาอีกครั้ง"
    },
    {
      "n": "26",
      "assumption": "การสลายตัวกัมมันตรังสี (Radioactive decay) ทำให้ง่ายขึ้น",
      "actual": "เมื่อใช้สัมประสิทธิ์การสลายตัว การสลายตัวแบบเอกซ์โพเนนเชียลจะถูกทำให้เรียบง่ายลง ไม่ครอบคลุมการสร้างนิวไคลด์ลูกและการสลายตัวแบบลูกโซ่ของนิวไคลด์หลายชนิด"
    },
    {
      "n": "27",
      "assumption": "การกระจายความเข้มข้นในแนวขวางคือการกระจายแบบเกาส์",
      "actual": "ความเข้มข้นที่เกิดขึ้นจริงผันผวนอย่างผิดปกติ แต่สันนิษฐานว่าความเข้มข้นเฉลี่ยจะลดลงทางซ้ายและขวาจากเส้นกึ่งกลางในรูปแบบของการแจกแจงปกติ"
    },
    {
      "n": "28",
      "assumption": "การกระจายความเข้มข้นในแนวดิ่งก็เป็นการกระจายแบบเกาส์เช่นกัน",
      "actual": "ในความเป็นจริง การกระจายตัวในแนวดิ่งจะบิดเบี้ยวตามพื้นผิวโลก ชั้นผกผัน อาคาร และโครงสร้างความปั่นป่วน แต่แบบจำลองแสดงด้วยการแจกแจงแบบเกาส์และพจน์ภาพกระจกเงา (Mirror image term)"
    },
    {
      "n": "29",
      "assumption": "ความกว้างของการกระจายถูกกำหนดโดยระยะทางใต้ลม (Downwind) และเสถียรภาพบรรยากาศ",
      "actual": "ในความเป็นจริง มันยังขึ้นอยู่กับความรุนแรงของความปั่นป่วน ความขรุขระของพื้นผิว ความสูงของชั้นขอบเขต และการกระจายตัวของความเร็วลมในแนวดิ่ง"
    },
    {
      "n": "30",
      "assumption": "สนามความเข้มข้นมีความราบเรียบและต่อเนื่อง",
      "actual": "ในความเป็นจริง ความหนาแน่นของความเข้มข้นผันผวนอย่างผิดปกติเนื่องจากความปั่นป่วน และสามารถสร้างการกระจายตัวแบบเป็นก้อนหรือเป็นริ้วได้"
    },
    {
      "n": "31",
      "assumption": "ความเข้มข้นในทิศทางทวนลม (Upwind) มีค่าเป็นศูนย์",
      "actual": "ความเข้มข้นจะถูกตั้งเป็นศูนย์หากระยะทางใต้ลมมีค่าน้อยกว่าหรือเท่ากับศูนย์ ในความเป็นจริง มันสามารถย้อนกลับไปทางด้านทวนลมได้เนื่องจากความผันผวนของทิศทางลมหรือความปั่นป่วน"
    },
    {
      "n": "32",
      "assumption": "ไม่ครอบคลุมสภาวะที่ไม่มีลมหรือลมพัดสวนทาง",
      "actual": "ความเข้มข้นจะถูกตั้งเป็นศูนย์หากความเร็วลมมีค่าน้อยกว่าหรือเท่ากับศูนย์ จำเป็นต้องมีแบบจำลองที่แตกต่างออกไปสำหรับช่วงที่ลมพัดอ่อนหรือสงบตามความเป็นจริง"
    },
    {
      "n": "33",
      "assumption": "ไม่มีการประเมินนอกช่วงการคำนวณ",
      "actual": "แม้ว่าจุดที่มีความเข้มข้นสูงสุดหรือขอบเขตของผลกระทบจะอยู่นอกช่วงการคำนวณ แต่ส่วนที่อยู่ภายนอกก็จะไม่เป็นที่ทราบ"
    },
    {
      "n": "34",
      "assumption": "ค่าศูนย์กลางของเซลล์ถือเป็นค่าตัวแทนของเซลล์",
      "actual": "ใช้ค่าความเข้มข้นที่จุดศูนย์กลางของเซลล์ (Cell-center) ไม่ใช่ค่าเฉลี่ยของเซลล์"
    },
    {
      "n": "35",
      "assumption": "พื้นผิวโลกสามารถถือเป็นระนาบในท้องถิ่นได้",
      "actual": "ละติจูดและลองจิจูดจะถูกแปลงเป็นพิกัดในท้องถิ่นโดยใช้การประมาณระยะใกล้ ผลกระทบจากความโค้งของโลกและวิธีการฉายภาพจะเพิ่มขึ้นในพื้นที่ขนาดใหญ่"
    },
    {
      "n": "36",
      "assumption": "การประมาณเพื่อแปลงละติจูด/ลองจิจูดเป็นระยะทางถือว่าเพียงพอแล้ว",
      "actual": "ข้อผิดพลาดจะเพิ่มขึ้นในพื้นที่กว้างหรือละติจูดสูง"
    },
    {
      "n": "37",
      "assumption": "การแปลงเป็นพิกัดใต้ลม (Downwind) ทำได้โดยการหมุนแบบ 2 มิติ",
      "actual": "พิกัดท้องถิ่นจะถูกหมุนไปในทิศทางใต้ลมเพื่อให้ได้ระยะทางใต้ลมและระยะทางลมขวาง (Crosswind) ไม่ครอบคลุมลมสามมิติที่รวมถึงองค์ประกอบในแนวดิ่งด้วย"
    },
    {
      "n": "38",
      "assumption": "สูตรความกว้างของการกระจายในแนวดิ่งจะเปลี่ยนที่ขอบเขต 0.2 กม.",
      "actual": "นี่ไม่ได้หมายความว่าบรรยากาศจริงจะเปลี่ยนแปลงอย่างกะทันหันที่ 200 ม. แต่เป็นเพียงขอบเขตในสูตรเชิงประจักษ์"
    },
    {
      "n": "39",
      "assumption": "มีขีดจำกัดบนสำหรับความกว้างของการกระจายในแนวดิ่ง",
      "actual": "การแพร่กระจายในแนวดิ่งจะไปถึงจุดอิ่มตัว (เพดาน) ในระยะทางไกลหรือในสภาวะที่ไม่เสถียร"
    }
  ],
  "tl": [
    {
      "n": "1",
      "assumption": "Patag ang ibabaw ng mundo (Flat terrain)",
      "actual": "Hindi isinasaalang-alang ang pagpapapangit ng hangin at paglihis ng distribusyon ng konsentrasyon dahil sa mga bundok, lambak, dalisdis, talampas, bangin, pilapil, kapatagan ng baha, atbp."
    },
    {
      "n": "2",
      "assumption": "Pantay ang mga katangian ng ibabaw ng mundo",
      "actual": "Hindi isinasaalang-alang ang mga pagkakaiba sa kagaspangan ng ibabaw dahil sa ibabaw ng dagat, bukid, kalunsuran, kagubatan, pang-industriyang lugar, atbp."
    },
    {
      "n": "3",
      "assumption": "Hindi isinasaalang-alang ang pagtitiwalag, pag-adsorb, at paghuli sa ibabaw ng lupa, at ang ibabaw ng lupa ay itinuturing bilang isang perpektong hangganan ng pagmuni-muni",
      "actual": "Sa katotohanan, ang mga sangkap ay maaaring maideposito, ma-adsorb, at mahuli sa lupa, damo, kalsada, gusali, ibabaw ng tubig, atbp., ngunit sa modelo, ito ay tinatrato na parang pinaliliwanag ng isang salamin na plume (Mirror image plume)."
    },
    {
      "n": "4",
      "assumption": "Walang mga artipisyal na istraktura gaya ng mga gusali, pader, tulay, at mga breakwater",
      "actual": "Ang malakas na hangin sa paligid ng mga gusali, wake flow, ipo-ipo, downwash, epekto ng canyon sa kalye (Street canyon effect), panangga, at pag-iwas ay hindi isinasaalang-alang."
    },
    {
      "n": "5",
      "assumption": "Walang mga halaman tulad ng mga puno at kagubatan",
      "actual": "Ang pagbaba ng bilis ng hangin, pagtaas ng turbulence, paghuli ng butil, at pag-promote ng deposition ng mga puno ay hindi isinasaalang-alang."
    },
    {
      "n": "6",
      "assumption": "Walang istrukturang impluwensya sa paligid ng pinagmumulan ng pagpapalabas",
      "actual": "Ang kumplikadong daloy, paghihiwalay, recirculation zones, at downwash ng gusali malapit sa mga tsimenea at gusali ay hindi isinasaalang-alang."
    },
    {
      "n": "7",
      "assumption": "Ang direksyon ng hangin ay pare-pareho at ang linya sa gitna ng plume ay tuwid",
      "actual": "Sa katotohanan, ang direksyon ng hangin ay pabagu-bago sa kalawakan at oras, at ang plume (Plume) ay maaaring magpalipat-lipat, kurbada, at magbago ng direksyon."
    },
    {
      "n": "8",
      "assumption": "Ang bilis ng hangin ay pare-pareho",
      "actual": "Sa katotohanan, ang bilis ng hangin ay nag-iiba ayon sa oras, lokasyon, at altitude, ngunit ang modelong ito ay gumagamit ng iisang bilis ng hangin."
    },
    {
      "n": "9",
      "assumption": "Umiihip ang hangin sa isang pahalang na direksyon",
      "actual": "Ang tatlong-dimensional na daloy tulad ng mga updraft (Updraft), downdraft (Downdraft), slope wind, land/sea breeze, at mountain/valley wind ay hindi isinasaalang-alang."
    },
    {
      "n": "10",
      "assumption": "Ang atmospheric stability (Atmospheric stability) ay pare-pareho",
      "actual": "Sa katotohanan, ang katatagan ay nag-iiba dahil sa solar radiation, ulap, kondisyon sa ibabaw ng lupa, oras, at pagpasa ng front, ngunit inaayos ito ng modelo sa isa sa A hanggang F."
    },
    {
      "n": "11",
      "assumption": "Ang magulong pagsasabog ay maaaring ilarawan sa pamamagitan ng mga empirical formula",
      "actual": "Sa halip na direktang lutasin ang tunay na istraktura ng turbulence at mga eddies, ipinapahayag nito ang karaniwang pagkalat gamit ang mga empirical na formula para sa lapad ng lateral dispersion at lapad ng vertical dispersion."
    },
    {
      "n": "12",
      "assumption": "Walang ulan o niyebe",
      "actual": "Ang paghuhugas (Washout) dahil sa ulan o niyebe, wet deposition, at pagbaba ng konsentrasyon dahil sa tindi ng ulan ay hindi isinasaalang-alang."
    },
    {
      "n": "13",
      "assumption": "Walang epekto ang temperatura ng hangin, halumigmig, at presyon ng barometric",
      "actual": "Ang buoyancy, mga pagkakaiba sa density, hamog, condensation, at hygroscopic na paglago ay hindi isinasaalang-alang."
    },
    {
      "n": "14",
      "assumption": "Hindi tahasang pinangangasiwaan ang taas ng boundary layer (Boundary layer) at inversion layer (Inversion layer)",
      "actual": "Ang paghihigpit ng vertical diffusion sa itaas na gilid ng mixed layer, surface inversion, at upper stable layer ay hindi direktang isinasaalang-alang."
    },
    {
      "n": "15",
      "assumption": "Ang mga paglabas ay patuloy at matatag",
      "actual": "Ito ay hindi isang panandaliang paglabas, ngunit ipinapalagay ang isang average na plume na patuloy na inilalabas sa ilalim ng pare-pareho ang mga kondisyon. Hindi kinakalkula ang pag-unlad ng oras kaagad pagkatapos magsimula ang paglabas."
    },
    {
      "n": "16",
      "assumption": "Hindi nagbabago ang mga kondisyon ng pagpapalabas habang nagkalkula",
      "actual": "Hindi isinasaalang-alang ang mga pagtaas at pagbaba, paghinto, pag-restart, at mga peak release."
    },
    {
      "n": "17",
      "assumption": "Ang pinagmumulan ng paglabas ay isang nakapirming mapagkukunan ng punto",
      "actual": "Hindi isinasaalang-alang ang mga area source, line source, maraming mapagkukunan, gumagalaw na mapagkukunan, at pagtulo mula sa buong gusali."
    },
    {
      "n": "18",
      "assumption": "Ang taas ng paglabas ay pare-pareho",
      "actual": "Ang taas ng paglabas ay itinuturing bilang isang nakapirming halaga at hindi nagbabago sa lugar o oras."
    },
    {
      "n": "19",
      "assumption": "Ang epektibong taas ng paglabas ay mismong ang inilagay na halaga",
      "actual": "Hindi kinakalkula ang plume rise dahil sa temperatura ng maubos na gas, bilis ng pag-ubos, diameter ng tsimenea, buoyancy, at momentum."
    },
    {
      "n": "20",
      "assumption": "Ang inisyal na lapad ng plume ay maaaring balewalain",
      "actual": "Hindi isinasaalang-alang ang diameter ng butas ng paglabas, laki ng pagbubukas, at inisyal na lapad ng jet; ang pagkalat ay tinutukoy ng downwind distance."
    },
    {
      "n": "21",
      "assumption": "Ang mga sangkap ay tahimik na dinadala ng hangin",
      "actual": "Karaniwang hindi isinasaalang-alang ang mga epekto kung saan ang mismong sangkap ay nagbabago ng wind field o umakyat/bumaba dahil sa buoyancy."
    },
    {
      "n": "22",
      "assumption": "Walang gravitational settling (Gravitational settling)",
      "actual": "Hindi isinasaalang-alang ang bilis ng pagbagsak dahil sa laki at density ng particle, at pag-aayos ng mga particle."
    },
    {
      "n": "23",
      "assumption": "Walang kemikal na reaksyon",
      "actual": "Ang oksihenasyon, pagbabawas, paghalay, pagbabalik-loob sa gas-sa-particle, at mga reaksyon sa iba pang mga sangkap ay hindi isinasaalang-alang."
    },
    {
      "n": "24",
      "assumption": "Ginagamot bilang isang substance",
      "actual": "Sa mga aktwal na pagpapalabas, may mga pagkakaiba sa pag-uugali ng maraming nuclide, kemikal na species, at laki ng butil, ngunit kinakatawan sila ng modelo bilang isang solong dami ng paglabas at konsentrasyon."
    },
    {
      "n": "25",
      "assumption": "Walang resuspension (Resuspension)",
      "actual": "Hindi isinasaalang-alang ang epekto ng mga sangkap na dating nanirahan sa lupa at muling hinipan ng hangin."
    },
    {
      "n": "26",
      "assumption": "Pinapasimple ang radioactive decay (Radioactive decay)",
      "actual": "Kapag ginamit ang decay coefficient, pinapasimple ito bilang exponential decay. Hindi pinangangasiwaan ang paggawa ng mga daughter nuclide at chain decay ng maraming nuclide."
    },
    {
      "n": "27",
      "assumption": "Ang pagbabahagi ng lateral concentration ay isang Gaussian distribution",
      "actual": "Karaniwang nag-iiba-iba nang iregular ang aktwal na agarang konsentrasyon, subalit ang average na konsentrasyon ay ipinapalagay na bumababa sa kaliwa at kanan mula sa centerline sa pamamagitan ng isang normal distribution."
    },
    {
      "n": "28",
      "assumption": "Ang pamamahagi ng vertical concentration ay isa ring Gaussian distribution",
      "actual": "Sa katotohanan, ang vertical distribution ay napapangit ng ibabaw ng mundo, mga inversion layer, mga gusali, at magulong istruktura, ngunit kinakatawan ito ng modelo gamit ang isang Gaussian distribution at isang mirror image term (Mirror image term)."
    },
    {
      "n": "29",
      "assumption": "Natutukoy ang lapad ng diffusion sa pamamagitan ng downwind distance at atmospheric stability",
      "actual": "Sa katotohanan, nakadepende rin ito sa tindi ng turbulence, kagaspangan ng ibabaw, taas ng boundary layer, at vertical wind speed distribution."
    },
    {
      "n": "30",
      "assumption": "Ang concentration field ay makinis at tuluy-tuloy",
      "actual": "Sa katotohanan, ang kapal ng konsentrasyon ay nagbabago nang hindi regular dahil sa turbulence at maaaring bumuo ng lumpy o streaky na pamamahagi."
    },
    {
      "n": "31",
      "assumption": "Ang konsentrasyon sa upwind (Upwind) ay zero",
      "actual": "Itatakda ang konsentrasyon sa zero kung ang downwind distance ay zero o mas mababa. Sa katotohanan, maaari itong bumalik sa direksyong upwind dahil sa mga pagbabago sa direksyon ng hangin o turbulence."
    },
    {
      "n": "32",
      "assumption": "Hindi kinakatawan ang mga kundisyon ng kalmado at masamang hangin",
      "actual": "Ang konsentrasyon ay nakatakda sa zero kung ang bilis ng hangin ay zero o mas kaunti. Kinakailangan ang iba't ibang modelo para sa aktwal na mahinang hangin o kalmadong panahon."
    },
    {
      "n": "33",
      "assumption": "Hindi sinusuri sa labas ng computational range",
      "actual": "Kahit na ang point of maximum concentration o range of influence ay nasa labas ng computation range, ang labas ay hindi alam."
    },
    {
      "n": "34",
      "assumption": "Ginagamit ang cell center value bilang kinatawan ng halaga ng cell",
      "actual": "Ginagamit ang halaga ng konsentrasyon sa gitna ng cell (Cell-center), hindi ang average na halaga ng cell."
    },
    {
      "n": "35",
      "assumption": "Maaaring ituring ang ibabaw ng mundo bilang isang lokal na eroplano",
      "actual": "Ang latitude at longitude ay binago sa mga lokal na coordinate gamit ang short-range approximation. Ang impluwensya ng kurbada at projection ng mundo ay lumalaki sa malalawak na lugar."
    },
    {
      "n": "36",
      "assumption": "Sapat na ang conversion ng latitude/longitude patungo sa approximation ng distansya",
      "actual": "Malaki ang mga error sa malalaking lugar o mataas na latitude."
    },
    {
      "n": "37",
      "assumption": "Sapat na ang isang 2D na pag-ikot para i-convert sa downwind coordinates",
      "actual": "Iikot ang mga lokal na coordinate sa downwind na direksyon upang makuha ang downwind distance at crosswind (Crosswind) distance. Hindi pinangangasiwaan ang 3D wind kabilang ang mga patayong bahagi."
    },
    {
      "n": "38",
      "assumption": "Nagbabago ang formula ng vertical diffusion width sa hangganan ng 0.2 km",
      "actual": "Hindi ito nangangahulugan na ang aktwal na kapaligiran ay biglang nagbabago sa 200 m, ngunit ito ay isang hangganan sa empirical na formula."
    },
    {
      "n": "39",
      "assumption": "Mayroong pinakamataas na limitasyon para sa lapad ng patayong pagsasabog",
      "actual": "Ang vertical diffusion ay puspos (sa ceiling) sa malalayong distansya o sa hindi matatag na mga kondisyon."
    }
  ],
  "tr": [
    {
      "n": "1",
      "assumption": "Zemin yüzeyi düzdür (Flat terrain)",
      "actual": "Dağlar, vadiler, yamaçlar, platolar, uçurumlar, setler, taşkın yatakları vb. nedenlerle rüzgarın deformasyonu ve konsantrasyon dağılımının sapması dikkate alınmaz."
    },
    {
      "n": "2",
      "assumption": "Zemin yüzeyi özellikleri tek tiptir",
      "actual": "Deniz yüzeyi, tarlalar, kentsel alanlar, ormanlar, sanayi bölgeleri vb. nedenlerle oluşan yüzey pürüzlülüğü farklılıkları dikkate alınmaz."
    },
    {
      "n": "3",
      "assumption": "Zemin yüzeyinde birikme, adsorpsiyon ve tutulma dikkate alınmaz, zemin mükemmel yansıtıcı bir sınır olarak kabul edilir",
      "actual": "Gerçekte maddeler yer, çimen, yol, bina, su yüzeyi vb. yerlerde birikebilir, adsorbe edilebilir ve tutulabilir ancak modelde ayna görüntüsü (Mirror image plume) tarafından yansıtılıyormuş gibi işlenir."
    },
    {
      "n": "4",
      "assumption": "Bina, duvar, köprü ve dalgakıran gibi yapay yapılar yoktur",
      "actual": "Binalar etrafındaki rüzgar, dümen suyu akışı (Wake), girdap, aşağı çekim (Downwash), sokak kanyonu etkisi (Street canyon effect), perdeleme ve etrafından dolaşma dikkate alınmaz."
    },
    {
      "n": "5",
      "assumption": "Ağaçlar ve ormanlar gibi bitki örtüsü yoktur",
      "actual": "Ağaçların rüzgar hızını düşürmesi, türbülansı artırması, partikül tutması ve birikmeyi hızlandırması dikkate alınmaz."
    },
    {
      "n": "6",
      "assumption": "Salım kaynağı çevresinde yapısal bir etki yoktur",
      "actual": "Bacaların ve binaların yakınındaki karmaşık akış, ayrılma, yeniden sirkülasyon bölgeleri ve bina downwash etkileri dikkate alınmaz."
    },
    {
      "n": "7",
      "assumption": "Rüzgar yönü sabittir ve plum merkez çizgisi düzdür",
      "actual": "Gerçekte rüzgar yönü zamansal ve uzamsal olarak dalgalanır ve plum (Plume) kıvrılabilir, bükülebilir ve yön değiştirebilir."
    },
    {
      "n": "8",
      "assumption": "Rüzgar hızı sabittir",
      "actual": "Gerçekte rüzgar hızı zamana, yere ve yüksekliğe göre değişir, ancak bu model tek bir rüzgar hızı kullanır."
    },
    {
      "n": "9",
      "assumption": "Rüzgar yatay olarak tek bir yönde eser",
      "actual": "Yukarı yönlü akım (Updraft), aşağı yönlü akım (Downdraft), yamaç akışları, kara/deniz meltemleri ve dağ/vadi meltemleri gibi üç boyutlu akışlar dikkate alınmaz."
    },
    {
      "n": "10",
      "assumption": "Atmosferik kararlılık (Atmospheric stability) sabittir",
      "actual": "Gerçekte kararlılık güneş radyasyonu, bulutluluk, zemin yüzeyi durumu, zaman ve cephe geçişleri ile değişir, ancak bu model onu A'dan F'ye kadar olanlardan birinde sabitler."
    },
    {
      "n": "11",
      "assumption": "Türbülanslı difüzyon ampirik formüllerle temsil edilebilir",
      "actual": "Gerçek türbülans yapısını ve girdapları doğrudan çözmek yerine, yanal ve dikey difüzyon genişlikleri için ampirik formüller kullanarak ortalama yayılımı ifade eder."
    },
    {
      "n": "12",
      "assumption": "Yağmur veya kar yoktur",
      "actual": "Yağmur veya kar nedeniyle yıkanma (Washout), ıslak birikme ve yağış şiddeti nedeniyle konsantrasyondaki azalma dikkate alınmaz."
    },
    {
      "n": "13",
      "assumption": "Hava sıcaklığı, nem ve hava basıncının etkisi yoktur",
      "actual": "Kaldırma kuvveti, yoğunluk farkı, sis, yoğunlaşma ve higroskopik büyüme dikkate alınmaz."
    },
    {
      "n": "14",
      "assumption": "Sınır tabakası (Boundary layer) yüksekliği veya inversiyon tabakası (Inversion layer) açıkça ele alınmaz",
      "actual": "Karışım tabakasının üst sınırı, yüzey inversiyonu ve üstteki kararlı tabaka tarafından dikey difüzyonun kısıtlanması doğrudan ele alınmaz."
    },
    {
      "n": "15",
      "assumption": "Salım sürekli ve kararlıdır",
      "actual": "Bu anlık bir salım değildir, sabit koşullar altında sürekli salınan ortalama bir plum varsayar. Salım başladıktan hemen sonraki zaman gelişimi hesaplanmaz."
    },
    {
      "n": "16",
      "assumption": "Salım koşulları hesaplama sırasında değişmez",
      "actual": "Salım miktarındaki artış/azalış, durma, yeniden başlama ve tepe salımlar dikkate alınmaz."
    },
    {
      "n": "17",
      "assumption": "Salım kaynağı sabit bir nokta kaynağıdır",
      "actual": "Alan kaynakları, çizgi kaynakları, çoklu salım kaynakları, hareketli kaynaklar ve tüm binalardan sızıntılar dikkate alınmaz."
    },
    {
      "n": "18",
      "assumption": "Salım yüksekliği sabittir",
      "actual": "Salım yüksekliği sabit bir değer olarak ele alınır ve yere veya zamana göre değişmez."
    },
    {
      "n": "19",
      "assumption": "Etkin salım yüksekliği tam olarak girdi değeridir",
      "actual": "Egzoz gazı sıcaklığı, çıkış hızı, baca çapı, kaldırma kuvveti ve momentum nedeniyle oluşan duman yükselmesi (Plume rise) hesaplanmaz."
    },
    {
      "n": "20",
      "assumption": "Başlangıç plum genişliği göz ardı edilebilir",
      "actual": "Tahliye deliği çapı, açıklık boyutu ve ilk jet genişliği dikkate alınmaz; yayılım rüzgar altı mesafesi (Downwind distance) ile belirlenir."
    },
    {
      "n": "21",
      "assumption": "Maddeler rüzgar tarafından pasif olarak taşınır",
      "actual": "Maddenin kendisinin rüzgar alanını değiştirmesi veya kaldırma kuvveti ile yükselmesi/alçalması gibi etkiler temel olarak dikkate alınmaz."
    },
    {
      "n": "22",
      "assumption": "Yerçekimsel çökelme (Gravitational settling) yoktur",
      "actual": "Parçacık boyutuna ve yoğunluğuna göre düşme hızı ve parçacıkların çökmesi dikkate alınmaz."
    },
    {
      "n": "23",
      "assumption": "Kimyasal reaksiyon yoktur",
      "actual": "Oksidasyon, redüksiyon, yoğunlaşma, gaz-partikül dönüşümü ve diğer maddelerle olan reaksiyonlar dikkate alınmaz."
    },
    {
      "n": "24",
      "assumption": "Tek bir madde olarak ele alınır",
      "actual": "Gerçek salımlarda birden fazla nüklit, kimyasal tür ve partikül boyutunun davranışında farklılıklar vardır, ancak model bunları tek bir salım miktarı ve konsantrasyonuyla temsil eder."
    },
    {
      "n": "25",
      "assumption": "Yeniden havaya karışma (Resuspension) yoktur",
      "actual": "Zemin yüzeyine bir kez çökelmiş olan maddelerin rüzgarla tekrar havaya savrulması etkisi dikkate alınmaz."
    },
    {
      "n": "26",
      "assumption": "Radyoaktif bozunma (Radioactive decay) basitleştirilir",
      "actual": "Bozunma katsayısı kullanıldığında üstel bozunma olarak basitleştirilir. Kız nüklitlerin oluşumu ve çoklu nüklitlerin zincirleme bozunması ele alınmaz."
    },
    {
      "n": "27",
      "assumption": "Yanal konsantrasyon dağılımı Gauss dağılımıdır",
      "actual": "Gerçek anlık konsantrasyonlar düzensiz olarak dalgalanır, ancak ortalama konsantrasyonun merkez çizgisinden sağa ve sola normal dağılım şeklinde azaldığı varsayılır."
    },
    {
      "n": "28",
      "assumption": "Dikey konsantrasyon dağılımı da Gauss dağılımıdır",
      "actual": "Gerçekte dikey dağılım yer yüzeyi, inversiyon tabakaları, binalar ve türbülans yapıları tarafından bozulur, ancak model bunu Gauss dağılımı ve ayna görüntüsü terimi (Mirror image term) ile temsil eder."
    },
    {
      "n": "29",
      "assumption": "Difüzyon genişliği rüzgar altı (Downwind) mesafesine ve atmosferik kararlılığa bağlıdır",
      "actual": "Gerçekte türbülans yoğunluğuna, yüzey pürüzlülüğüne, sınır tabakası yüksekliğine ve dikey rüzgar hızı dağılımına da bağlıdır."
    },
    {
      "n": "30",
      "assumption": "Konsantrasyon alanı pürüzsüz ve süreklidir",
      "actual": "Gerçekte konsantrasyonun yoğunluğu türbülans nedeniyle düzensiz olarak dalgalanır ve topak veya çizgi şeklinde dağılımlar oluşturabilir."
    },
    {
      "n": "31",
      "assumption": "Rüzgar üstü (Upwind) yönündeki konsantrasyon sıfırdır",
      "actual": "Rüzgar altı mesafesi sıfır veya daha az ise konsantrasyon sıfır olarak ayarlanır. Gerçekte rüzgar yönü dalgalanmaları veya türbülans nedeniyle rüzgar üstü tarafına da dolaşabilir."
    },
    {
      "n": "32",
      "assumption": "Rüzgarsız veya ters rüzgar koşulları ele alınmaz",
      "actual": "Rüzgar hızı sıfır veya daha az ise konsantrasyon sıfır olarak ayarlanır. Gerçek zayıf rüzgar veya durgun hava dönemleri için farklı bir model gereklidir."
    },
    {
      "n": "33",
      "assumption": "Hesaplama aralığının dışı değerlendirilmez",
      "actual": "Maksimum konsantrasyon noktası veya etki alanı hesaplama aralığının dışında olsa bile dış kısımlar bilinmemektedir."
    },
    {
      "n": "34",
      "assumption": "Hücre merkez değeri hücreyi temsil eden değerdir",
      "actual": "Hücre ortalaması yerine hücrenin merkezindeki (Cell-center) konsantrasyon değeri kullanılır."
    },
    {
      "n": "35",
      "assumption": "Dünya yüzeyi yerel bir düzlem olarak kabul edilebilir",
      "actual": "Enlem ve boylam, kısa mesafe yaklaşımıyla yerel koordinatlara dönüştürülür. Geniş alanlarda Dünya'nın eğriliği ve projeksiyon yönteminin etkileri artar."
    },
    {
      "n": "36",
      "assumption": "Enlem/boylamdan mesafeye dönüşüm yaklaşımı yeterlidir",
      "actual": "Geniş alanlarda veya yüksek enlemlerde hatalar büyür."
    },
    {
      "n": "37",
      "assumption": "Rüzgar altı (Downwind) koordinatlarına dönüştürme için 2 boyutlu dönüş yeterlidir",
      "actual": "Rüzgar altı mesafesi ve yan rüzgar (Crosswind) mesafesini elde etmek için yerel koordinatlar rüzgar altı yönünde döndürülür. Dikey bileşeni içeren 3B rüzgar ele alınmaz."
    },
    {
      "n": "38",
      "assumption": "Dikey difüzyon genişliği formülü 0,2 km sınırında değişir",
      "actual": "Bu, gerçek atmosferin 200 m'de aniden değiştiği anlamına gelmez, bu ampirik formüldeki bir sınırdır."
    },
    {
      "n": "39",
      "assumption": "Dikey difüzyon genişliği için bir üst sınır vardır",
      "actual": "Uzak mesafelerde veya kararsız koşullarda dikey difüzyon doygunluğa (Tavana) ulaşır."
    }
  ],
  "vi": [
    {
      "n": "1",
      "assumption": "Bề mặt trái đất bằng phẳng (Flat terrain)",
      "actual": "Không xem xét sự biến dạng của gió hoặc sự sai lệch của phân bố nồng độ do núi, thung lũng, sườn dốc, cao nguyên, vách đá, đê, bãi bồi, v.v."
    },
    {
      "n": "2",
      "assumption": "Tính chất bề mặt đất đồng nhất",
      "actual": "Sự khác biệt về độ nhám bề mặt do mặt biển, cánh đồng, khu đô thị, rừng, khu công nghiệp, v.v. không được xem xét."
    },
    {
      "n": "3",
      "assumption": "Không xem xét sự lắng đọng, hấp phụ và bám giữ trên bề mặt đất, và coi bề mặt đất là ranh giới phản xạ hoàn toàn",
      "actual": "Thực tế, các chất có thể bị lắng đọng, hấp phụ và bám giữ trên mặt đất, cỏ, đường, tòa nhà, mặt nước, v.v., nhưng trong mô hình, chúng được xử lý như thể phản xạ qua chùm ảnh ảo (Mirror image plume)."
    },
    {
      "n": "4",
      "assumption": "Không có các cấu trúc nhân tạo như tòa nhà, tường, cầu, đê chắn sóng",
      "actual": "Các luồng gió quanh tòa nhà, dòng khí theo sau (Wake), sự cuốn vào, hiện tượng luồng khí đi xuống (Downwash), hiệu ứng hẻm núi đô thị (Street canyon effect), sự che chắn và sự đi vòng không được xem xét."
    },
    {
      "n": "5",
      "assumption": "Không có thảm thực vật như cây cối và rừng",
      "actual": "Sự giảm tốc độ gió, tăng cường nhiễu loạn, bám giữ hạt và thúc đẩy lắng đọng do cây cối không được xem xét."
    },
    {
      "n": "6",
      "assumption": "Không có ảnh hưởng từ các cấu trúc xung quanh nguồn phát",
      "actual": "Dòng chảy phức tạp, sự tách rời, vùng tuần hoàn và hiện tượng downwash của tòa nhà ở gần ống khói và công trình không được xem xét."
    },
    {
      "n": "7",
      "assumption": "Hướng gió không đổi và đường trung tâm chùm tia là một đường thẳng",
      "actual": "Thực tế, hướng gió thay đổi theo không gian và thời gian, và chùm tia (Plume) có thể uốn khúc, cong và đổi hướng."
    },
    {
      "n": "8",
      "assumption": "Tốc độ gió không đổi",
      "actual": "Thực tế, tốc độ gió thay đổi theo thời gian, địa điểm và độ cao, nhưng mô hình này chỉ sử dụng một tốc độ gió đơn lẻ."
    },
    {
      "n": "9",
      "assumption": "Gió thổi theo một hướng nằm ngang",
      "actual": "Các dòng chảy ba chiều như luồng khí thăng (Updraft), luồng khí giáng (Downdraft), gió sườn đồi, gió đất/biển và gió núi/thung lũng không được xem xét."
    },
    {
      "n": "10",
      "assumption": "Độ ổn định khí quyển (Atmospheric stability) không đổi",
      "actual": "Thực tế, độ ổn định thay đổi do bức xạ mặt trời, lượng mây che phủ, điều kiện mặt đất, thời gian và sự đi qua của frông, nhưng mô hình này cố định nó ở một trong các mức từ A đến F."
    },
    {
      "n": "11",
      "assumption": "Khuếch tán nhiễu loạn có thể được đại diện bằng công thức kinh nghiệm",
      "actual": "Thay vì giải trực tiếp cấu trúc nhiễu loạn và dòng xoáy thực tế, nó biểu thị sự lan rộng trung bình bằng các công thức kinh nghiệm cho chiều rộng khuếch tán ngang và chiều rộng khuếch tán dọc."
    },
    {
      "n": "12",
      "assumption": "Không có mưa hoặc tuyết",
      "actual": "Sự rửa trôi (Washout) do mưa hoặc tuyết, lắng đọng ướt và sự suy giảm nồng độ do cường độ mưa không được xem xét."
    },
    {
      "n": "13",
      "assumption": "Không bị ảnh hưởng bởi nhiệt độ, độ ẩm và áp suất không khí",
      "actual": "Lực nổi, chênh lệch mật độ, sương mù, sự ngưng tụ và sự tăng trưởng hút ẩm không được xem xét."
    },
    {
      "n": "14",
      "assumption": "Không xử lý trực tiếp chiều cao lớp biên (Boundary layer) hoặc lớp nghịch nhiệt (Inversion layer)",
      "actual": "Việc giới hạn khuếch tán dọc bởi đỉnh lớp hỗn hợp, nghịch nhiệt bề mặt và lớp ổn định trên cao không được xử lý trực tiếp."
    },
    {
      "n": "15",
      "assumption": "Quá trình phát thải là liên tục và ổn định",
      "actual": "Đây không phải là phát thải tức thời, mà giả định một chùm tia trung bình được phát ra liên tục trong các điều kiện không đổi. Sự tiến triển thời gian ngay sau khi bắt đầu phát thải không được tính toán."
    },
    {
      "n": "16",
      "assumption": "Điều kiện phát thải không thay đổi trong suốt quá trình tính toán",
      "actual": "Sự tăng giảm, dừng, khởi động lại và mức đỉnh của lượng phát thải không được xem xét."
    },
    {
      "n": "17",
      "assumption": "Nguồn phát thải là một nguồn điểm cố định",
      "actual": "Nguồn diện rộng, nguồn tuyến tính, nhiều nguồn phát, nguồn di động và rò rỉ từ toàn bộ tòa nhà không được xem xét."
    },
    {
      "n": "18",
      "assumption": "Chiều cao phát thải không đổi",
      "actual": "Chiều cao phát thải được coi là một giá trị cố định và không thay đổi theo địa điểm hoặc thời gian."
    },
    {
      "n": "19",
      "assumption": "Chiều cao phát thải hiệu quả chính là giá trị đầu vào",
      "actual": "Sự bốc lên của khói (Plume rise) do nhiệt độ khí thải, tốc độ thải, đường kính ống khói, lực nổi và động lượng không được tính toán."
    },
    {
      "n": "20",
      "assumption": "Chiều rộng chùm tia ban đầu có thể được bỏ qua",
      "actual": "Đường kính miệng xả, kích thước cửa mở và chiều rộng tia phun ban đầu không được xem xét; sự mở rộng được xác định bởi khoảng cách xuôi gió (Downwind distance)."
    },
    {
      "n": "21",
      "assumption": "Vật chất được vận chuyển một cách thụ động bởi gió",
      "actual": "Những hiệu ứng mà chính vật chất đó làm thay đổi trường gió hoặc di chuyển lên/xuống do lực nổi về cơ bản không được xem xét."
    },
    {
      "n": "22",
      "assumption": "Không có sự lắng đọng do trọng lực (Gravitational settling)",
      "actual": "Tốc độ rơi theo kích thước hạt và mật độ, cũng như sự lắng đọng của các hạt không được xem xét."
    },
    {
      "n": "23",
      "assumption": "Không có phản ứng hóa học",
      "actual": "Quá trình oxy hóa, khử, ngưng tụ, chuyển đổi từ khí sang hạt và các phản ứng với các chất khác không được xem xét."
    },
    {
      "n": "24",
      "assumption": "Xử lý như một chất đơn lẻ",
      "actual": "Trong các đợt phát thải thực tế, có sự khác biệt về đặc tính hoạt động của nhiều đồng vị, loài hóa học và kích thước hạt, nhưng mô hình đại diện bằng một lượng phát thải và nồng độ duy nhất."
    },
    {
      "n": "25",
      "assumption": "Không có sự tái lơ lửng (Resuspension)",
      "actual": "Hiện tượng vật chất đã lắng đọng trên mặt đất bị gió thổi bốc lên lại không được xem xét."
    },
    {
      "n": "26",
      "assumption": "Phân rã phóng xạ (Radioactive decay) được đơn giản hóa",
      "actual": "Khi sử dụng hệ số suy giảm, nó được đơn giản hóa thành phân rã theo số mũ. Sự sinh ra các đồng vị con và chuỗi phân rã của nhiều đồng vị không được xử lý."
    },
    {
      "n": "27",
      "assumption": "Phân bố nồng độ theo chiều ngang là phân bố Gaussian",
      "actual": "Nồng độ tức thời thực tế dao động bất thường, nhưng nồng độ trung bình được giả định là giảm đều đặn từ đường trung tâm sang hai bên dưới dạng phân bố chuẩn."
    },
    {
      "n": "28",
      "assumption": "Phân bố nồng độ theo chiều dọc cũng là phân bố Gaussian",
      "actual": "Thực tế, sự phân bố dọc bị bóp méo bởi bề mặt đất, lớp nghịch nhiệt, các tòa nhà và cấu trúc nhiễu loạn, nhưng mô hình biểu diễn nó bằng phân bố Gaussian và số hạng ảnh ảo (Mirror image term)."
    },
    {
      "n": "29",
      "assumption": "Chiều rộng khuếch tán được xác định bởi khoảng cách xuôi gió (Downwind) và độ ổn định khí quyển",
      "actual": "Thực tế, nó cũng phụ thuộc vào cường độ nhiễu loạn, độ nhám bề mặt, chiều cao lớp biên và phân bố tốc độ gió theo chiều dọc."
    },
    {
      "n": "30",
      "assumption": "Trường nồng độ mịn màng và liên tục",
      "actual": "Thực tế, độ dày của nồng độ dao động bất thường do nhiễu loạn và có thể tạo thành sự phân bố dạng đám hoặc sọc."
    },
    {
      "n": "31",
      "assumption": "Nồng độ ở phía ngược gió (Upwind) bằng không",
      "actual": "Nồng độ được đặt thành không khi khoảng cách xuôi gió từ bằng không trở xuống. Thực tế, chất có thể bị cuốn ngược lại phía ngược gió do biến động hướng gió hoặc nhiễu loạn."
    },
    {
      "n": "32",
      "assumption": "Điều kiện không có gió hoặc gió ngược không được xử lý",
      "actual": "Nồng độ được đặt thành không khi tốc độ gió từ bằng không trở xuống. Một mô hình khác cần thiết cho điều kiện gió yếu hoặc tĩnh lặng thực tế."
    },
    {
      "n": "33",
      "assumption": "Khu vực nằm ngoài phạm vi tính toán không được đánh giá",
      "actual": "Ngay cả khi điểm nồng độ tối đa hoặc phạm vi ảnh hưởng nằm ngoài phạm vi tính toán, phần bên ngoài sẽ không được biết đến."
    },
    {
      "n": "34",
      "assumption": "Giá trị trung tâm của ô lưới được dùng làm giá trị đại diện cho ô đó",
      "actual": "Sử dụng nồng độ tại điểm trung tâm của ô (Cell-center), không phải giá trị trung bình của ô."
    },
    {
      "n": "35",
      "assumption": "Bề mặt trái đất có thể được coi là một mặt phẳng cục bộ",
      "actual": "Vĩ độ và kinh độ được chuyển đổi thành tọa độ cục bộ bằng phép xấp xỉ khoảng cách gần. Ảnh hưởng của độ cong Trái đất và phương pháp chiếu sẽ tăng lên đối với khu vực rộng lớn."
    },
    {
      "n": "36",
      "assumption": "Phép xấp xỉ chuyển đổi từ vĩ độ/kinh độ sang khoảng cách là đủ",
      "actual": "Sai số sẽ trở nên lớn ở các khu vực rộng lớn hoặc vĩ độ cao."
    },
    {
      "n": "37",
      "assumption": "Chuyển đổi sang tọa độ xuôi gió (Downwind) chỉ cần xoay 2D",
      "actual": "Tọa độ cục bộ được xoay về hướng xuôi gió để lấy khoảng cách xuôi gió và khoảng cách gió ngang (Crosswind). Gió 3D, bao gồm cả thành phần chiều dọc, không được xử lý."
    },
    {
      "n": "38",
      "assumption": "Công thức chiều rộng khuếch tán dọc được chuyển đổi ở ranh giới 0.2 km",
      "actual": "Điều này không có nghĩa là khí quyển thực tế thay đổi đột ngột ở độ cao 200m, mà đây là một ranh giới trên công thức kinh nghiệm."
    },
    {
      "n": "39",
      "assumption": "Chiều rộng khuếch tán dọc có giới hạn trên",
      "actual": "Sự khuếch tán dọc bị bão hòa (chạm trần) ở khoảng cách xa hoặc trong các điều kiện không ổn định."
    }
  ]
};
