/**
 * राजस्थान शिक्षक व कर्मचारी DA एरियर व बोनस कैलकुलेटर
 * JavaScript Engine • 100% सटीक गणित व ऑफ़लाइन कार्यप्रणाली
 */

// 1. राजस्थान 7th Pay Commission Pay Matrix (Levels L-5, L-8, L-10, L-11, L-12, L-14, L-16)
const PAY_MATRIX = {
  "L-1": [
    17700,
    18200,
    18700,
    19300,
    19900,
    20500,
    21100,
    21700,
    22400,
    23100,
    23800,
    24500,
    25200,
    26000,
    26800,
    27600,
    28400,
    29300,
    30200,
    31100,
    32000,
    33000,
    34000,
    35000,
    36000,
    37100,
    38200,
    39300,
    40500,
    41700,
    43000,
    44300,
    45600,
    47000,
    48400,
    49900,
    51400,
    52900,
    54500,
    56100
  ],
  "L-2": [
    17900,
    18400,
    19000,
    19600,
    20200,
    20800,
    21400,
    22000,
    22700,
    23400,
    24100,
    24800,
    25500,
    26300,
    27100,
    27900,
    28700,
    29600,
    30500,
    31400,
    32300,
    33300,
    34300,
    35300,
    36400,
    37500,
    38600,
    39800,
    41000,
    42200,
    43500,
    44800,
    46100,
    47500,
    48900,
    50400,
    51900,
    53500,
    55100,
    56800
  ],
  "L-3": [
    18200,
    18700,
    19300,
    19900,
    20500,
    21100,
    21700,
    22400,
    23100,
    23800,
    24500,
    25200,
    26000,
    26800,
    27600,
    28400,
    29300,
    30200,
    31100,
    32000,
    33000,
    34000,
    35000,
    36000,
    37100,
    38200,
    39300,
    40500,
    41700,
    43000,
    44300,
    45600,
    47000,
    48400,
    49900,
    51400,
    52900,
    54500,
    56100,
    57800
  ],
  "L-4": [
    19200,
    19800,
    20400,
    21000,
    21600,
    22200,
    22900,
    23600,
    24300,
    25000,
    25800,
    26600,
    27400,
    28200,
    29000,
    29900,
    30800,
    31700,
    32700,
    33700,
    34700,
    35700,
    36800,
    37900,
    39000,
    40200,
    41400,
    42600,
    43900,
    45200,
    46600,
    48000,
    49400,
    50900,
    52400,
    54000,
    55600,
    57300,
    59000,
    60800
  ],
  "L-5": [
    20800,
    21400,
    22000,
    22700,
    23400,
    24100,
    24800,
    25500,
    26300,
    27100,
    27900,
    28700,
    29600,
    30500,
    31400,
    32300,
    33300,
    34300,
    35300,
    36400,
    37500,
    38600,
    39800,
    41000,
    42200,
    43500,
    44800,
    46100,
    47500,
    48900,
    50400,
    51900,
    53500,
    55100,
    56800,
    58500,
    60300,
    62100,
    64000,
    65900
  ],
  "L-6": [
    21500,
    22100,
    22800,
    23500,
    24200,
    24900,
    25600,
    26400,
    27200,
    28000,
    28800,
    29700,
    30600,
    31500,
    32400,
    33400,
    34400,
    35400,
    36500,
    37600,
    38700,
    39900,
    41100,
    42300,
    43600,
    44900,
    46200,
    47600,
    49000,
    50500,
    52000,
    53600,
    55200,
    56900,
    58600,
    60400,
    62200,
    64100,
    66000,
    68000
  ],
  "L-7": [
    22400,
    23100,
    23800,
    24500,
    25200,
    26000,
    26800,
    27600,
    28400,
    29300,
    30200,
    31100,
    32000,
    33000,
    34000,
    35000,
    36000,
    37100,
    38200,
    39300,
    40500,
    41700,
    43000,
    44300,
    45600,
    47000,
    48400,
    49900,
    51400,
    52900,
    54500,
    56100,
    57800,
    59500,
    61300,
    63100,
    65000,
    67000,
    69000,
    71100
  ],
  "L-8": [
    26300,
    27100,
    27900,
    28700,
    29600,
    30500,
    31400,
    32300,
    33300,
    34300,
    35300,
    36400,
    37500,
    38600,
    39800,
    41000,
    42200,
    43500,
    44800,
    46100,
    47500,
    48900,
    50400,
    51900,
    53500,
    55100,
    56800,
    58500,
    60300,
    62100,
    64000,
    65900,
    67900,
    69900,
    72000,
    74200,
    76400,
    78700,
    81100,
    83500
  ],
  "L-9": [
    28700,
    29600,
    30500,
    31400,
    32300,
    33300,
    34300,
    35300,
    36400,
    37500,
    38600,
    39800,
    41000,
    42200,
    43500,
    44800,
    46100,
    47500,
    48900,
    50400,
    51900,
    53500,
    55100,
    56800,
    58500,
    60300,
    62100,
    64000,
    65900,
    67900,
    69900,
    72000,
    74200,
    76400,
    78700,
    81100,
    83500,
    86000,
    88600,
    91300
  ],
  "L-10": [
    33800,
    34800,
    35800,
    36900,
    38000,
    39100,
    40300,
    41500,
    42700,
    44000,
    45300,
    46700,
    48100,
    49500,
    51000,
    52500,
    54100,
    55700,
    57400,
    59100,
    60900,
    62700,
    64600,
    66500,
    68500,
    70600,
    72700,
    74900,
    77100,
    79400,
    81800,
    84300,
    86800,
    89400,
    92100,
    94900,
    97700,
    100600,
    103600,
    106700
  ],
  "L-11": [
    37800,
    38900,
    40100,
    41300,
    42500,
    43800,
    45100,
    46500,
    47900,
    49300,
    50800,
    52300,
    53900,
    55500,
    57200,
    58900,
    60700,
    62500,
    64400,
    66300,
    68300,
    70300,
    72400,
    74600,
    76800,
    79100,
    81500,
    83900,
    86400,
    89000,
    91700,
    94500,
    97300,
    100200,
    103200,
    106300,
    109500,
    112800,
    116200,
    119700
  ],
  "L-12": [
    44300,
    45600,
    47000,
    48400,
    49900,
    51400,
    52900,
    54500,
    56100,
    57800,
    59500,
    61300,
    63100,
    65000,
    67000,
    69000,
    71100,
    73200,
    75400,
    77700,
    80000,
    82400,
    84900,
    87400,
    90000,
    92700,
    95500,
    98400,
    101400,
    104400,
    107500,
    110700,
    114000,
    117400,
    120900,
    124500,
    128200,
    132000,
    136000,
    140100
  ],
  "L-13": [
    49900,
    51400,
    52900,
    54500,
    56100,
    57800,
    59500,
    61300,
    63100,
    65000,
    67000,
    69000,
    71100,
    73200,
    75400,
    77700,
    80000,
    82400,
    84900,
    87400,
    90000,
    92700,
    95500,
    98400,
    101400,
    104400,
    107500,
    110700,
    114000,
    117400,
    120900,
    124500,
    128200,
    132000,
    136000,
    140100,
    144300,
    148600,
    153100,
    157700
  ],
  "L-14": [
    56100,
    57800,
    59500,
    61300,
    63100,
    65000,
    67000,
    69000,
    71100,
    73200,
    75400,
    77700,
    80000,
    82400,
    84900,
    87400,
    90000,
    92700,
    95500,
    98400,
    101400,
    104400,
    107500,
    110700,
    114000,
    117400,
    120900,
    124500,
    128200,
    132000,
    136000,
    140100,
    144300,
    148600,
    153100,
    157700,
    162400,
    167300,
    172300,
    177500
  ],
  "L-15": [
    60700,
    62500,
    64400,
    66300,
    68300,
    70300,
    72400,
    74600,
    76800,
    79100,
    81500,
    83900,
    86400,
    89000,
    91700,
    94500,
    97300,
    100200,
    103200,
    106300,
    109500,
    112800,
    116200,
    119700,
    123300,
    127000,
    130800,
    134700,
    138700,
    142900,
    147200,
    151600,
    156100,
    160800,
    165600,
    170600,
    175700,
    181000,
    186400,
    192000
  ],
  "L-16": [
    67300,
    69300,
    71400,
    73500,
    75700,
    78000,
    80300,
    82700,
    85200,
    87800,
    90400,
    93100,
    95900,
    98800,
    101800,
    104900,
    108000,
    111200,
    114500,
    117900,
    121400,
    125000,
    128800,
    132700,
    136700,
    140800,
    145000,
    149400,
    153900,
    158500,
    163300,
    168200,
    173200,
    178400,
    183800,
    189300,
    195000,
    200800,
    206800,
    213000
  ]
};

const MONTH_NAMES = [
  "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
  "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
];

function formatDateHindi(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const y = parts[0];
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    const dStr = d < 10 ? "0" + d : d.toString();
    const mName = MONTH_NAMES[m - 1] || parts[1];
    return `${dStr} ${mName} ${y}`;
  }
  return dateStr;
}

function showStaffToast(msg) {
  const toast = document.getElementById("staffToast");
  if (!toast) return;
  toast.innerText = msg;
  toast.style.display = "flex";
  if (window.staffToastTimeout) clearTimeout(window.staffToastTimeout);
  window.staffToastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, 3500);
}

// Global State
let singleMonthBasics = {}; // Map of "YYYY-MM" to Basic Pay
let singleMonthDays = {};   // Map of "YYYY-MM" to Custom Days (e.g. 0.5, 15.5, 31)
let staffList = [{ name: "", post: "", id: "", level: "L-10", basic: 33800 }];
let bonusStaffList = [{ name: "", post: "", id: "", level: "L-10", days: 30, ceiling: 7000 }];

// 1. Initialization
document.addEventListener("DOMContentLoaded", () => {
  initMatrixCellSelect();
  renderPayMatrixReference();
  loadSavedData();
  syncOfficeNameEverywhere();
  onConfigChange();
  calculateBonus();
});


// Global Office / School Name Functions
function onGlobalOfficeNameChange() {
  const val = document.getElementById("topOfficeName") ? document.getElementById("topOfficeName").value : "";
  syncOfficeNameEverywhere(val);
  saveDataLocal();
}

function resetDefaultOfficeName() {
  const defaultName = "कार्यालय प्राचार्य, राजकीय उच्च माध्यमिक विद्यालय, जयपुर";
  if (document.getElementById("topOfficeName")) {
    document.getElementById("topOfficeName").value = defaultName;
  }
  onGlobalOfficeNameChange();
}

function onEmpSchoolChange() {
  const val = document.getElementById("empSchool") ? document.getElementById("empSchool").value : "";
  const pSchoolEl = document.getElementById("pSchool");
  if (pSchoolEl) pSchoolEl.innerText = val;
  saveDataLocal();
}

function syncOfficeNameEverywhere(customName) {
  const topInput = document.getElementById("topOfficeName");
  const name = (customName !== undefined ? customName : (topInput ? topInput.value : "")).trim() || "कार्यालय / विद्यालय का नाम";

  const printDisplayIds = [
    "pTopOfficeNameDisplay",
    "stTopOfficeNameDisplay",
    "bTopOfficeNameDisplay",
    "mxTopOfficeNameDisplay",
    "gdTopOfficeNameDisplay"
  ];

  printDisplayIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = name;
  });

  const empSchoolEl = document.getElementById("empSchool");
  if (empSchoolEl && !empSchoolEl.value) {
    empSchoolEl.value = name;
  }

  const pSchoolEl = document.getElementById("pSchool");
  if (pSchoolEl) pSchoolEl.innerText = name;
}

// 2. Tab Navigation
function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

  const map = {
    "single": ["tabBtnSingle", "tabSingle"],
    "staff": ["tabBtnStaff", "tabStaff"],
    "bonus": ["tabBtnBonus", "tabBonus"],
    "matrix": ["tabBtnMatrix", "tabMatrix"],
    "guide": ["tabBtnGuide", "tabGuide"]
  };

  if (map[tabId]) {
    document.getElementById(map[tabId][0]).classList.add("active");
    document.getElementById(map[tabId][1]).classList.add("active");
    if (tabId === "staff") renderStaffTable();
    if (tabId === "bonus") calculateBonus();
  }
}

// 3. Preset Handlers
function applyPreset(oldDa, newDa, startDateStr, endDateStr) {
  document.querySelectorAll(".btn-preset").forEach(b => b.classList.remove("active"));
  if (window.event && window.event.target) window.event.target.classList.add("active");

  document.getElementById("inputOldDa").value = oldDa;
  document.getElementById("inputNewDa").value = newDa;
  document.getElementById("inputStartDate").value = startDateStr;
  document.getElementById("inputEndDate").value = endDateStr;

  onConfigChange();
}

function enableCustomDA() {
  document.querySelectorAll(".btn-preset").forEach(b => b.classList.remove("active"));
  if (window.event && window.event.target) window.event.target.classList.add("active");
  document.getElementById("inputNewDa").focus();
}


// Half Day & FN/AN Handlers
function applyOnlyHalfDay() {
  const sInput = document.getElementById("inputStartDate");
  const eInput = document.getElementById("inputEndDate");
  const baseDate = sInput.value || "2024-07-01";
  sInput.value = baseDate;
  eInput.value = baseDate;

  if (document.getElementById("checkStartAn")) document.getElementById("checkStartAn").checked = false;
  if (document.getElementById("checkEndFn")) document.getElementById("checkEndFn").checked = false;

  const parts = baseDate.split("-");
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const key = `${y}-${m < 10 ? "0" + m : m}`;

  singleMonthDays = {};
  singleMonthDays[key] = 0.5;

  onConfigChange();
  saveDataLocal();

  const btn = document.getElementById("btnHalfDayQuick");
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = "✅ 0.5 दिन सेट हुआ!";
    btn.style.borderColor = "#16a34a";
    btn.style.color = "#16a34a";
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 1500);
  }
}

function onMonthDaysChange(key, val) {
  const d = parseFloat(val);
  if (isNaN(d) || d < 0) {
    delete singleMonthDays[key];
  } else {
    singleMonthDays[key] = d;
  }
  renderSingleTable();
  saveDataLocal();
}

function setHalfDayForMonth(key) {
  singleMonthDays[key] = 0.5;
  renderSingleTable();
  saveDataLocal();
}

function setFullMonthForMonth(key, fullDays) {
  delete singleMonthDays[key];
  renderSingleTable();
  saveDataLocal();
}

function onFnAnChange() {
  singleMonthDays = {};
  onConfigChange();
}

// 4. Config & Date Change Handler

function updateStaffBanner() {
  const sStr = document.getElementById("inputStartDate") ? document.getElementById("inputStartDate").value : "";
  const eStr = document.getElementById("inputEndDate") ? document.getElementById("inputEndDate").value : "";
  const oldDa = document.getElementById("inputOldDa") ? document.getElementById("inputOldDa").value : "50";
  const newDa = document.getElementById("inputNewDa") ? document.getElementById("inputNewDa").value : "53";
  const diff = (parseFloat(newDa) - parseFloat(oldDa)).toFixed(1);
  const payMode = document.getElementById("selectPayMode") ? document.getElementById("selectPayMode").value : "cash_100";

  const bDates = document.getElementById("stBannerDates");
  if (bDates && sStr && eStr) bDates.innerText = `${formatDateHindi(sStr)} से ${formatDateHindi(eStr)}`;

  const bDur = document.getElementById("stBannerDuration");
  if (bDur && sStr && eStr) {
    const delta = calcDateDelta(sStr, eStr);
    bDur.innerText = delta.text;
  }

  const bDa = document.getElementById("stBannerDa");
  if (bDa) bDa.innerText = `${oldDa}% ➔ ${newDa}% (+${diff}%)`;

  const payModeMap = {
    "cash_100": "100% नकद भुगतान",
    "gpf_100": "100% GPF जमा",
    "split_50": "50% नकद + 50% GPF",
    "custom": "कस्टम अनुपात"
  };
  const bPay = document.getElementById("stBannerPayMode");
  if (bPay) bPay.innerText = payModeMap[payMode] || payMode;
}

function onConfigChange() {
  const oldDa = parseFloat(document.getElementById("inputOldDa").value) || 0;
  const newDa = parseFloat(document.getElementById("inputNewDa").value) || 0;
  const diff = (newDa - oldDa).toFixed(1);

  document.getElementById("displayDaDiff").innerText = `${diff >= 0 ? "+" : ""}${diff}%`;

  const sDateStr = document.getElementById("inputStartDate").value;
  const eDateStr = document.getElementById("inputEndDate").value;

  if (sDateStr && eDateStr) {
    const delta = calcDateDelta(sDateStr, eDateStr);
    document.getElementById("durTextDisplay").innerText = delta.text;
    document.getElementById("durDaysDisplay").innerText = `(कुल ${delta.totalDays} दिन)`;
  }

  const payMode = document.getElementById("selectPayMode").value;
  const splitRow = document.getElementById("customSplitRow");
  if (payMode === "custom") {
    splitRow.classList.remove("hidden");
  } else {
    splitRow.classList.add("hidden");
  }

  updateSingleArrear();
  updateStaffBanner();
  saveDataLocal();
}

function syncSplitPct(source) {
  const cashInput = document.getElementById("customCashPct");
  const gpfInput = document.getElementById("customGpfPct");
  if (source === "cash") {
    let c = parseInt(cashInput.value) || 0;
    if (c < 0) c = 0; if (c > 100) c = 100;
    cashInput.value = c;
    gpfInput.value = 100 - c;
  } else {
    let g = parseInt(gpfInput.value) || 0;
    if (g < 0) g = 0; if (g > 100) g = 100;
    gpfInput.value = g;
    cashInput.value = 100 - g;
  }
  updateSingleArrear();
}

// 5. Accurate Date Delta Calculation (Years, Months, Days & Total Days)
function calcDateDelta(startStr, endStr) {
  const d1 = new Date(startStr);
  const d2 = new Date(endStr);

  if (isNaN(d1) || isNaN(d2) || d1 > d2) {
    return { years: 0, months: 0, days: 0, totalDays: 0, text: "अमान्य दिनांक सीमा" };
  }

  // Total calendar days inclusive
  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((d2 - d1) / oneDay) + 1;

  let y1 = d1.getFullYear(), m1 = d1.getMonth() + 1, day1 = d1.getDate();
  let y2 = d2.getFullYear(), m2 = d2.getMonth() + 1, day2 = d2.getDate();

  let years = y2 - y1;
  let months = m2 - m1;
  let days = day2 - day1 + 1;

  if (days < 0) {
    months -= 1;
    // Days in previous month of d2
    const prevMonthDays = new Date(y2, m2 - 1, 0).getDate();
    days += prevMonthDays;
  }

  const curMonthDays = new Date(y2, m2, 0).getDate();
  if (days === curMonthDays && day1 === 1) {
    months += 1;
    days = 0;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  parts.push(`${years} वर्ष`);
  parts.push(`${months} माह`);
  parts.push(`${days} दिन`);

  return {
    years,
    months,
    days,
    totalDays,
    text: parts.join(", ")
  };
}

// 6. Generate Month Breakdown Segments from Date Range (With 0.5 Day & Pro-Rata Math)
function getMonthSegments() {
  const sStr = document.getElementById("inputStartDate").value;
  const eStr = document.getElementById("inputEndDate").value;
  const d1 = new Date(sStr);
  const d2 = new Date(eStr);

  if (isNaN(d1) || isNaN(d2) || d1 > d2) return [];

  const startY = d1.getFullYear(), startM = d1.getMonth() + 1, startDay = d1.getDate();
  const endY = d2.getFullYear(), endM = d2.getMonth() + 1, endDay = d2.getDate();

  const startIdx = startY * 12 + (startM - 1);
  const endIdx = endY * 12 + (endM - 1);

  const startAn = document.getElementById("checkStartAn") ? document.getElementById("checkStartAn").checked : false;
  const endFn = document.getElementById("checkEndFn") ? document.getElementById("checkEndFn").checked : false;

  const segments = [];

  for (let idx = startIdx; idx <= endIdx; idx++) {
    const y = Math.floor(idx / 12);
    const m = (idx % 12) + 1;
    const daysInMonth = new Date(y, m, 0).getDate();

    const curStartDay = (idx === startIdx) ? startDay : 1;
    const curEndDay = (idx === endIdx) ? endDay : daysInMonth;
    let workedDays = curEndDay - curStartDay + 1;

    if (idx === startIdx && startAn) {
      workedDays -= 0.5;
    }
    if (idx === endIdx && endFn) {
      workedDays -= 0.5;
    }
    if (workedDays < 0) workedDays = 0;

    const key = `${y}-${m < 10 ? "0" + m : m}`;

    // Custom override for this month's days if explicitly set
    if (singleMonthDays[key] !== undefined && singleMonthDays[key] !== null) {
      workedDays = parseFloat(singleMonthDays[key]);
      if (isNaN(workedDays) || workedDays < 0) workedDays = 0;
    }

    const isFull = (workedDays === daysInMonth);

    segments.push({
      year: y,
      month: m,
      monthName: MONTH_NAMES[m - 1],
      key: key,
      daysInMonth: daysInMonth,
      startDay: curStartDay,
      endDay: curEndDay,
      workedDays: workedDays,
      isFullMonth: isFull,
      fraction: daysInMonth > 0 ? (workedDays / daysInMonth) : 0
    });
  }

  return segments;
}

// 7. Pay Matrix Helpers (Level 1 to Level 16)
function initMatrixCellSelect() {
  const cellSel = document.getElementById("quickCell");
  cellSel.innerHTML = "";
  for (let c = 1; c <= 40; c++) {
    cellSel.innerHTML += `<option value="${c}" ${c === 6 ? "selected" : ""}>Cell ${c}</option>`;
  }
}

function onQuickLevelChange() { updateBasicFromMatrix(); }
function onQuickCellChange() { updateBasicFromMatrix(); }

function updateBasicFromMatrix() {
  const lvl = document.getElementById("quickLevel").value;
  const cell = parseInt(document.getElementById("quickCell").value) || 1;
  const arr = PAY_MATRIX[lvl];
  if (arr && arr[cell - 1]) {
    const val = arr[cell - 1];
    document.getElementById("initialBasic").value = val;
    autoFillBasicToAll();
  }
}

function onManualBasicChange() {
  autoFillBasicToAll();
}

function autoFillBasicToAll() {
  const base = parseInt(document.getElementById("initialBasic").value) || 0;
  const segments = getMonthSegments();
  segments.forEach(seg => {
    singleMonthBasics[seg.key] = base;
  });
  renderSingleTable();
  saveDataLocal();

  const btn = document.getElementById("btnAutoFillBasic");
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = "✅ सभी महीनों में लागू हुआ!";
    btn.style.background = "#059669";
    btn.style.color = "#ffffff";
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = "";
      btn.style.color = "";
    }, 1500);
  }
}

// 8. Single Employee Calculation Engine
function updateSingleArrear() {
  const segments = getMonthSegments();
  const defaultBasic = parseInt(document.getElementById("initialBasic").value) || 43800;

  segments.forEach(seg => {
    if (singleMonthBasics[seg.key] === undefined) {
      singleMonthBasics[seg.key] = defaultBasic;
    }
  });

  renderSingleTable();
}

function renderSingleTable() {
  const segments = getMonthSegments();
  const oldDa = parseFloat(document.getElementById("inputOldDa").value) || 0;
  const newDa = parseFloat(document.getElementById("inputNewDa").value) || 0;
  const payMode = document.getElementById("selectPayMode").value;

  let cashPct = 100;
  let gpfPct = 0;
  if (payMode === "gpf_100") {
    cashPct = 0; gpfPct = 100;
  } else if (payMode === "split_50") {
    cashPct = 50; gpfPct = 50;
  } else if (payMode === "custom") {
    cashPct = parseInt(document.getElementById("customCashPct").value) || 50;
    gpfPct = 100 - cashPct;
  }

  const screenTbody = document.getElementById("singleTableBody");
  screenTbody.innerHTML = "";

  let printTableHtml = `
    <table class="official-print-grid">
      <thead>
        <tr>
          <th style="width: 35px;">क्र.</th>
          <th>माह व वर्ष (अवधि)</th>
          <th style="width: 75px;">दिन</th>
          <th>मूल वेतन (Basic ₹)</th>
          <th>देय DA %</th>
          <th>देय DA (₹)</th>
          <th>आहरित DA %</th>
          <th>आहरित DA (₹)</th>
          <th>DA अंतर (₹)</th>
          <th>GPF जमा (₹)</th>
          <th>नकद देय (₹)</th>
        </tr>
      </thead>
      <tbody>
  `;

  let grandBasic = 0, grandDueDa = 0, grandDrawnDa = 0, grandArrear = 0, grandGpf = 0, grandCash = 0;
  let totalCalculatedDays = 0;

  segments.forEach((seg, idx) => {
    const fullBasic = parseInt(singleMonthBasics[seg.key]) || 0;
    const workedDays = seg.workedDays;
    totalCalculatedDays += workedDays;
    
    // Pro-rata basic and amounts
    const basicForMonth = seg.isFullMonth ? fullBasic : Math.round(fullBasic * seg.fraction);
    const dueDaAmount = Math.round((fullBasic * (newDa / 100)) * seg.fraction);
    const drawnDaAmount = Math.round((fullBasic * (oldDa / 100)) * seg.fraction);
    const diffAmount = dueDaAmount - drawnDaAmount;

    let cashAmount = 0, gpfAmount = 0;
    if (gpfPct === 100) {
      gpfAmount = diffAmount; cashAmount = 0;
    } else if (cashPct === 100) {
      cashAmount = diffAmount; gpfAmount = 0;
    } else {
      cashAmount = Math.round(diffAmount * (cashPct / 100));
      gpfAmount = diffAmount - cashAmount;
    }

    grandBasic += basicForMonth;
    grandDueDa += dueDaAmount;
    grandDrawnDa += drawnDaAmount;
    grandArrear += diffAmount;
    grandGpf += gpfAmount;
    grandCash += cashAmount;

    let printDaysLabel = "";
    if (workedDays === 0.5) {
      printDaysLabel = "0.5 दिन (आधा दिन)";
    } else if (seg.isFullMonth) {
      printDaysLabel = `पूर्ण माह (${seg.daysInMonth} दिन)`;
    } else {
      printDaysLabel = `${workedDays}/${seg.daysInMonth} दिन`;
    }

    const periodLabel = `${seg.monthName} ${seg.year}${seg.isFullMonth ? '' : ` (${workedDays} दिन)`}`;

    // Screen Table Row
    screenTbody.innerHTML += `
      <tr>
        <td>${idx + 1}</td>
        <td style="text-align: left; font-weight: 600;">
          ${seg.monthName} ${seg.year}
          ${workedDays === 0.5 ? '<span class="pro-rata-badge" style="background:#fee2e2;color:#991b1b;">½ दिन (0.5 Day)</span>' : (seg.isFullMonth ? '' : `<span class="pro-rata-badge">${workedDays} दिन</span>`)}
        </td>
        <td>
          <div class="days-cell-wrap">
            <input type="number" step="0.5" min="0" max="${seg.daysInMonth}" 
                   class="input-days-inline" value="${workedDays}" 
                   onchange="onMonthDaysChange('${seg.key}', this.value)"
                   title="माह के कार्य दिवस (0.5 दिन / आधा दिन अनुमत)">
            <div class="days-quick-btns">
              <button type="button" class="btn-micro" onclick="setHalfDayForMonth('${seg.key}')" title="आधा दिन (0.5 दिन) सेट करें">½ दिन</button>
              <button type="button" class="btn-micro" onclick="setFullMonthForMonth('${seg.key}', ${seg.daysInMonth})" title="पूरा महीना (${seg.daysInMonth} दिन) सेट करें">पूर्ण</button>
            </div>
          </div>
        </td>
        <td>
          <input type="number" class="input-basic-inline" value="${fullBasic}" 
                 onchange="onMonthBasicChange('${seg.key}', this.value)">
          ${seg.isFullMonth ? '' : `<div class="text-muted" style="font-size: 11px;">आनुपातिक: ₹${basicForMonth.toLocaleString('en-IN')}</div>`}
        </td>
        <td>${newDa}%</td>
        <td>₹${dueDaAmount.toLocaleString("en-IN")}</td>
        <td>${oldDa}%</td>
        <td>₹${drawnDaAmount.toLocaleString("en-IN")}</td>
        <td style="font-weight: 700; color: #1e3a8a;">₹${diffAmount.toLocaleString("en-IN")}</td>
        <td style="color: #ca8a04;">₹${gpfAmount.toLocaleString("en-IN")}</td>
        <td style="font-weight: 700; color: #16a34a;">₹${cashAmount.toLocaleString("en-IN")}</td>
      </tr>
    `;

    // Print Table Row (Clean, official government bill format)
    printTableHtml += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td style="text-align: left;">${periodLabel}</td>
        <td style="text-align: center;">${printDaysLabel}</td>
        <td style="text-align: right;">₹${fullBasic.toLocaleString("en-IN")}${seg.isFullMonth ? '' : ` (अनु. ₹${basicForMonth.toLocaleString('en-IN')})`}</td>
        <td style="text-align: center;">${newDa}%</td>
        <td style="text-align: right;">₹${dueDaAmount.toLocaleString("en-IN")}</td>
        <td style="text-align: center;">${oldDa}%</td>
        <td style="text-align: right;">₹${drawnDaAmount.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: bold;">₹${diffAmount.toLocaleString("en-IN")}</td>
        <td style="text-align: right;">₹${gpfAmount.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: bold;">₹${cashAmount.toLocaleString("en-IN")}</td>
      </tr>
    `;
  });

  printTableHtml += `
      </tbody>
      <tfoot>
        <tr class="print-total-row">
          <td colspan="3" style="text-align: center;"><strong>कुल योग (GRAND TOTAL):</strong></td>
          <td style="text-align: right;">₹${grandBasic.toLocaleString("en-IN")}</td>
          <td>-</td>
          <td style="text-align: right;">₹${grandDueDa.toLocaleString("en-IN")}</td>
          <td>-</td>
          <td style="text-align: right;">₹${grandDrawnDa.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-weight: bold; font-size: 10pt;">₹${grandArrear.toLocaleString("en-IN")}</td>
          <td style="text-align: right;">₹${grandGpf.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-weight: bold; font-size: 10pt;">₹${grandCash.toLocaleString("en-IN")}</td>
        </tr>
      </tfoot>
    </table>
  `;

  document.getElementById("printTableWrap").innerHTML = printTableHtml;

  // Update Screen Table Footers
  document.getElementById("totBasicDisplay").innerText = `₹${grandBasic.toLocaleString("en-IN")}`;
  document.getElementById("totDueDaDisplay").innerText = `₹${grandDueDa.toLocaleString("en-IN")}`;
  document.getElementById("totDrawnDaDisplay").innerText = `₹${grandDrawnDa.toLocaleString("en-IN")}`;
  document.getElementById("totArrearDisplay").innerText = `₹${grandArrear.toLocaleString("en-IN")}`;
  document.getElementById("totGpfDisplay").innerText = `₹${grandGpf.toLocaleString("en-IN")}`;
  document.getElementById("totCashDisplay").innerText = `₹${grandCash.toLocaleString("en-IN")}`;

  // Update Summary Metric Cards
  document.getElementById("cardGrossArrear").innerText = `₹${grandArrear.toLocaleString("en-IN")}`;
  document.getElementById("cardGpfDeposit").innerText = `₹${grandGpf.toLocaleString("en-IN")}`;
  document.getElementById("cardNetCash").innerText = `₹${grandCash.toLocaleString("en-IN")}`;

  // Update Print Meta
  document.getElementById("pName").innerText = document.getElementById("empName").value || "-";
  document.getElementById("pDesig").innerText = document.getElementById("empDesignation").value || "-";
  document.getElementById("pId").innerText = document.getElementById("empId").value || "-";
  document.getElementById("pSchool").innerText = document.getElementById("empSchool").value || "-";

  const sStr = document.getElementById("inputStartDate").value;
  const eStr = document.getElementById("inputEndDate").value;
  document.getElementById("pStartDate").innerText = formatDateHindi(sStr);
  document.getElementById("pEndDate").innerText = formatDateHindi(eStr);
  
  if (totalCalculatedDays === 0.5) {
    document.getElementById("pDuration").innerText = "0 वर्ष, 0 माह, 0.5 दिन (आधा दिन)";
    document.getElementById("pTotalDays").innerText = "0.5";
    document.getElementById("durTextDisplay").innerText = "0 वर्ष, 0 माह, 0.5 दिन (आधा दिन)";
    document.getElementById("durDaysDisplay").innerText = "(कुल 0.5 दिन)";
  } else {
    const delta = calcDateDelta(sStr, eStr);
    document.getElementById("pDuration").innerText = `${delta.years} वर्ष, ${delta.months} माह, ${totalCalculatedDays % 1 !== 0 ? totalCalculatedDays : delta.days} दिन`;
    document.getElementById("pTotalDays").innerText = totalCalculatedDays;
    document.getElementById("durDaysDisplay").innerText = `(कुल ${totalCalculatedDays} दिन)`;
  }

  document.getElementById("pOldDa").innerText = oldDa;
  document.getElementById("pNewDa").innerText = newDa;
  document.getElementById("pDiffDa").innerText = (newDa - oldDa).toFixed(1);

  const payModeMap = {
    "cash_100": "100% नकद बैंक खाते में",
    "gpf_100": "100% GPF / GPF-2004 खाते में",
    "split_50": "50% नकद + 50% GPF में समायोजन",
    "custom": `${cashPct}% नकद + ${gpfPct}% GPF`
  };
  document.getElementById("pPayMode").innerText = payModeMap[payMode] || payMode;

  // Update Bonus combined view
  calculateBonus();
}

function onMonthBasicChange(key, val) {
  singleMonthBasics[key] = parseInt(val) || 0;
  renderSingleTable();
  saveDataLocal();
}

// 9. Pure Professional Print/PDF Engine
function setPageOrientation(orientation) {
  let styleEl = document.getElementById("dynamicPageStyle");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamicPageStyle";
    document.head.appendChild(styleEl);
  }
  if (orientation === "landscape") {
    styleEl.innerHTML = "@page { size: A4 landscape !important; margin: 8mm 8mm 8mm 8mm !important; }";
    document.body.classList.add("print-landscape");
    document.body.classList.remove("print-portrait");
  } else {
    styleEl.innerHTML = "@page { size: A4 portrait !important; margin: 10mm 10mm 10mm 10mm !important; }";
    document.body.classList.add("print-portrait");
    document.body.classList.remove("print-landscape");
  }
}

function printTab(tabId, orientation) {
  if (tabId) {
    switchTab(tabId);
  } else {
    const activeTab = document.querySelector(".tab-content.active");
    tabId = activeTab ? activeTab.id.replace("tab", "").toLowerCase() : "single";
  }

  const defaultOrientation = (tabId === "staff" || tabId === "matrix" || tabId === "bonus") ? "landscape" : "portrait";
  const finalOrientation = orientation || defaultOrientation;
  setPageOrientation(finalOrientation);

  syncOfficeNameEverywhere();

  if (tabId === "single") {
    updateSingleArrear();
  } else if (tabId === "staff") {
    renderStaffTable();
  } else if (tabId === "bonus") {
    calculateBonus();
  }

  setTimeout(() => {
    window.print();
  }, 100);
}

function printOfficialPdf(orientation) {
  const activeTab = document.querySelector(".tab-content.active");
  const tabId = activeTab ? activeTab.id.replace("tab", "").toLowerCase() : "single";
  printTab(tabId, orientation);
}

window.addEventListener("beforeprint", () => {
  const activeTab = document.querySelector(".tab-content.active");
  const tabId = activeTab ? activeTab.id.replace("tab", "").toLowerCase() : "single";
  const orientation = (tabId === "staff" || tabId === "matrix" || tabId === "bonus") ? "landscape" : "portrait";
  setPageOrientation(orientation);
  syncOfficeNameEverywhere();
  if (tabId === "bonus") calculateBonus();
});

function exportSingleToCsv() {
  const segments = getMonthSegments();
  const oldDa = parseFloat(document.getElementById("inputOldDa").value) || 0;
  const newDa = parseFloat(document.getElementById("inputNewDa").value) || 0;
  const emp = document.getElementById("empName").value || "Employee";

  let csv = "क्र.,माह व वर्ष,दिन विवरण,मूल वेतन (Basic ₹),देय DA %,देय DA (₹),आहरित DA %,आहरित DA (₹),DA अंतर (₹),GPF जमा (₹),नकद देय (₹)\n";
  let grandArrear = 0, grandCash = 0, grandGpf = 0;

  segments.forEach((seg, idx) => {
    const fullBasic = parseInt(singleMonthBasics[seg.key]) || 0;
    const basicForMonth = seg.isFullMonth ? fullBasic : Math.round(fullBasic * seg.fraction);
    const due = Math.round((fullBasic * (newDa / 100)) * seg.fraction);
    const drawn = Math.round((fullBasic * (oldDa / 100)) * seg.fraction);
    const diff = due - drawn;
    
    const payMode = document.getElementById("selectPayMode").value;
    let cash = diff, gpf = 0;
    if (payMode === "gpf_100") { cash = 0; gpf = diff; }
    else if (payMode === "split_50") { cash = Math.round(diff * 0.5); gpf = diff - cash; }

    grandArrear += diff; grandCash += cash; grandGpf += gpf;
    const daysLabel = seg.isFullMonth ? 'पूर्ण माह' : `${seg.workedDays}/${seg.daysInMonth} दिन`;
    csv += `${idx + 1},${seg.monthName} ${seg.year},${daysLabel},${basicForMonth},${newDa}%,${due},${oldDa}%,${drawn},${diff},${gpf},${cash}\n`;
  });

  csv += `कुल योग,,,${grandArrear},${grandGpf},${grandCash}\n`;

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `DA_Arrear_${emp.replace(/\s+/g, "_")}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// 10. Multi-Staff DDO Schedule Engine (Level 1 to 16)

function loadSampleStaff() {
  staffList = [
    { name: "कन्हैया लाल", post: "चतुर्थ श्रेणी कर्मचारी L-1", id: "RJAL202322006", level: "L-1", basic: 17700 },
    { name: "राकेश सैनी", post: "कनिष्ठ सहायक L-5", id: "RJAL202120005", level: "L-5", basic: 20800 },
    { name: "दिनेश कुमार वर्मा", post: "अध्यापक लेवल-2 L-10", id: "RJAL201918004", level: "L-10", basic: 39100 },
    { name: "सुनीता देवी", post: "वरिष्ठ अध्यापक L-11", id: "RJAL201416003", level: "L-11", basic: 45100 },
    { name: "सुरेश चंद मीना", post: "प्राध्यापक (हिन्दी) L-12", id: "RJAL200814002", level: "L-12", basic: 54500 },
    { name: "रमेश कुमार शर्मा", post: "प्रधानाचार्य L-16", id: "RJAL199812001", level: "L-16", basic: 73500 }
  ];
  renderStaffTable();
  saveDataLocal();
  showStaffToast("✅ 6 नमूना विद्यालय कार्मिक (Level L-1 से L-16) लोड किए गए!");
}

function addStaffRow() {
  staffList.push({
    name: "",
    post: "अध्यापक L-10",
    id: "",
    level: "L-10",
    basic: 33800
  });
  renderStaffTable();
  saveDataLocal();
  showStaffToast("➕ नया कार्मिक पंक्ति जोड़ी गई!");
}

function removeStaffRow(idx) {
  if (staffList.length <= 1) {
    alert("कम से कम एक कार्मिक पंक्ति आवश्यक है!");
    return;
  }
  const removedName = staffList[idx].name || `पंक्ति ${idx + 1}`;
  staffList.splice(idx, 1);
  renderStaffTable();
  saveDataLocal();
  showStaffToast(`🗑️ ${removedName} को हटाया गया`);
}

function updateStaffField(idx, field, val) {
  if (!staffList[idx]) return;
  staffList[idx][field] = field === "basic" ? (parseInt(val) || 0) : val;
  renderStaffTable();
  saveDataLocal();
}

function renderStaffTable() {
  updateStaffBanner();
  const tbody = document.getElementById("staffTableBody");
  if (!tbody) return;

  const sInput = document.getElementById("inputStartDate");
  const eInput = document.getElementById("inputEndDate");
  const sStr = sInput ? sInput.value : "2024-07-01";
  const eStr = eInput ? eInput.value : "2024-10-31";
  const delta = calcDateDelta(sStr, eStr);

  const oldDaEl = document.getElementById("inputOldDa");
  const newDaEl = document.getElementById("inputNewDa");
  const oldDa = oldDaEl ? parseFloat(oldDaEl.value) || 0 : 50;
  const newDa = newDaEl ? parseFloat(newDaEl.value) || 0 : 53;
  const payModeEl = document.getElementById("selectPayMode");
  const payMode = payModeEl ? payModeEl.value : "cash_100";

  const allLevels = ["L-1", "L-2", "L-3", "L-4", "L-5", "L-6", "L-7", "L-8", "L-9", "L-10", "L-11", "L-12", "L-13", "L-14", "L-15", "L-16"];

  const segments = getMonthSegments();

  let grandBasic = 0, grandArrear = 0, grandGpf = 0, grandCash = 0;
  let tbodyHtml = "";

  let printStaffHtml = `
    <table class="official-print-grid">
      <thead>
        <tr>
          <th style="width: 35px;">क्र.</th>
          <th>कर्मचारी का नाम</th>
          <th>पद</th>
          <th>SIPF ID</th>
          <th>लेवल</th>
          <th>मूल वेतन (Basic ₹)</th>
          <th>अवधि</th>
          <th>सकल एरियर (₹)</th>
          <th>GPF जमा (₹)</th>
          <th>नकद देय (₹)</th>
        </tr>
      </thead>
      <tbody>
  `;

  staffList.forEach((s, idx) => {
    const basic = parseInt(s.basic) || 0;
    
    // Sum across all segments (handles partial months & 0.5 day properly)
    let empArrear = 0;
    segments.forEach(seg => {
      const due = Math.round((basic * (newDa / 100)) * seg.fraction);
      const drawn = Math.round((basic * (oldDa / 100)) * seg.fraction);
      empArrear += (due - drawn);
    });

    let cash = empArrear, gpf = 0;
    if (payMode === "gpf_100") {
      cash = 0; gpf = empArrear;
    } else if (payMode === "split_50") {
      cash = Math.round(empArrear * 0.5); gpf = empArrear - cash;
    } else if (payMode === "custom") {
      const cPctEl = document.getElementById("customCashPct");
      const cPct = cPctEl ? parseInt(cPctEl.value) || 50 : 50;
      cash = Math.round(empArrear * (cPct / 100)); gpf = empArrear - cash;
    }

    grandBasic += basic;
    grandArrear += empArrear;
    grandGpf += gpf;
    grandCash += cash;

    const opts = allLevels.map(lvl => `<option value="${lvl}" ${s.level === lvl ? 'selected' : ''}>${lvl}</option>`).join('');

    tbodyHtml += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td><input type="text" value="${s.name || ''}" placeholder="कर्मचारी नाम" onchange="updateStaffField(${idx}, 'name', this.value)" style="width: 140px;"></td>
        <td><input type="text" value="${s.post || ''}" placeholder="पद" onchange="updateStaffField(${idx}, 'post', this.value)" style="width: 130px;"></td>
        <td><input type="text" value="${s.id || ''}" placeholder="SIPF ID" onchange="updateStaffField(${idx}, 'id', this.value)" style="width: 105px;"></td>
        <td>
          <select onchange="updateStaffField(${idx}, 'level', this.value)" style="width: 75px;">
            ${opts}
          </select>
        </td>
        <td><input type="number" class="input-basic-inline" value="${basic}" onchange="updateStaffField(${idx}, 'basic', this.value)" style="width: 95px; text-align: right;"></td>
        <td style="text-align: center;">${delta.text}</td>
        <td style="text-align: right; font-weight: 700; color: #1e3a8a;">₹${empArrear.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #ca8a04;">₹${gpf.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #16a34a;">₹${cash.toLocaleString("en-IN")}</td>
        <td class="no-print" style="text-align: center;">
          <button type="button" class="btn-danger-sm" onclick="removeStaffRow(${idx})" title="हटाएं">✕</button>
        </td>
      </tr>
    `;

    printStaffHtml += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td>${s.name || '-'}</td>
        <td>${s.post || '-'}</td>
        <td style="text-align: center;">${s.id || '-'}</td>
        <td style="text-align: center;">${s.level || 'L-10'}</td>
        <td style="text-align: right;">₹${basic.toLocaleString("en-IN")}</td>
        <td style="text-align: center;">${delta.text}</td>
        <td style="text-align: right; font-weight: 700;">₹${empArrear.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #b45309;">₹${gpf.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #15803d;">₹${cash.toLocaleString("en-IN")}</td>
      </tr>
    `;
  });

  printStaffHtml += `
      </tbody>
      <tfoot>
        <tr class="print-total-row">
          <td colspan="5" style="text-align: center;"><strong>कुल योग (GRAND TOTAL):</strong></td>
          <td style="text-align: right; font-weight: 700;">₹${grandBasic.toLocaleString("en-IN")}</td>
          <td style="text-align: center;">${delta.text}</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800;">₹${grandArrear.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800; color: #b45309;">₹${grandGpf.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800; color: #15803d;">₹${grandCash.toLocaleString("en-IN")}</td>
        </tr>
      </tfoot>
    </table>
  `;

  tbody.innerHTML = tbodyHtml;

  const printWrap = document.getElementById("staffPrintTableWrap");
  if (printWrap) printWrap.innerHTML = printStaffHtml;

  const stDateRange = document.getElementById("stDateRange");
  if (stDateRange) stDateRange.innerText = `${formatDateHindi(sStr)} से ${formatDateHindi(eStr)}`;

  const totBasicEl = document.getElementById("staffTotBasic");
  if (totBasicEl) totBasicEl.innerText = `₹${grandBasic.toLocaleString("en-IN")}`;

  const totDurEl = document.getElementById("staffTotDuration");
  if (totDurEl) totDurEl.innerText = delta.text;

  const totArrearEl = document.getElementById("staffTotArrear");
  if (totArrearEl) totArrearEl.innerText = `₹${grandArrear.toLocaleString("en-IN")}`;

  const totGpfEl = document.getElementById("staffTotGpf");
  if (totGpfEl) totGpfEl.innerText = `₹${grandGpf.toLocaleString("en-IN")}`;

  const totCashEl = document.getElementById("staffTotCash");
  if (totCashEl) totCashEl.innerText = `₹${grandCash.toLocaleString("en-IN")}`;
}

function exportStaffToCsv() {
  let csv = "क्र.,कर्मचारी नाम,पद,SIPF ID,लेवल,मासिक बेसिक (₹),अवधि,सकल एरियर (₹),GPF जमा (₹),नकद देय (₹)\n";
  const segments = getMonthSegments();
  const sStr = document.getElementById("inputStartDate") ? document.getElementById("inputStartDate").value : "2024-07-01";
  const eStr = document.getElementById("inputEndDate") ? document.getElementById("inputEndDate").value : "2024-10-31";
  const delta = calcDateDelta(sStr, eStr);

  const oldDa = parseFloat(document.getElementById("inputOldDa") ? document.getElementById("inputOldDa").value : 50) || 0;
  const newDa = parseFloat(document.getElementById("inputNewDa") ? document.getElementById("inputNewDa").value : 53) || 0;
  const payMode = document.getElementById("selectPayMode") ? document.getElementById("selectPayMode").value : "cash_100";

  let totalBasic = 0, totalArrear = 0, totalGpf = 0, totalCash = 0;

  staffList.forEach((s, idx) => {
    const basic = parseInt(s.basic) || 0;
    let empArrear = 0;
    segments.forEach(seg => {
      const due = Math.round((basic * (newDa / 100)) * seg.fraction);
      const drawn = Math.round((basic * (oldDa / 100)) * seg.fraction);
      empArrear += (due - drawn);
    });

    let cash = empArrear, gpf = 0;
    if (payMode === "gpf_100") {
      cash = 0; gpf = empArrear;
    } else if (payMode === "split_50") {
      cash = Math.round(empArrear * 0.5); gpf = empArrear - cash;
    } else if (payMode === "custom") {
      const cPct = parseInt(document.getElementById("customCashPct") ? document.getElementById("customCashPct").value : 50) || 50;
      cash = Math.round(empArrear * (cPct / 100)); gpf = empArrear - cash;
    }

    totalBasic += basic;
    totalArrear += empArrear;
    totalGpf += gpf;
    totalCash += cash;

    csv += `${idx + 1},"${s.name || ''}","${s.post || ''}","${s.id || ''}",${s.level || 'L-10'},${basic},"${delta.text}",${empArrear},${gpf},${cash}\n`;
  });

  csv += `कुल योग (${staffList.length} कार्मिक),,,,${totalBasic},"${delta.text}",${totalArrear},${totalGpf},${totalCash}\n`;

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Staff_DA_Arrear_DDO_Bill.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);

  showStaffToast("📥 विद्यालय स्टाफ DDO शेड्यूल Excel/CSV फाइल सफलतापूर्वक डाउनलोड हुई!");
}

// 11. Bonus Module Engine (Multi-Employee DDO Schedule & Individual Calculation)

function loadSampleBonusStaff() {
  bonusStaffList = [
    { name: "कन्हैया लाल", post: "चतुर्थ श्रेणी कर्मचारी L-1", id: "RJAL202322006", level: "L-1", days: 30, ceiling: 7000 },
    { name: "राकेश सैनी", post: "कनिष्ठ सहायक L-5", id: "RJAL202120005", level: "L-5", days: 30, ceiling: 7000 },
    { name: "श्रीमती सुनीता शर्मा", post: "वरिष्ठ सहायक L-8", id: "RJJP201819004", level: "L-8", days: 30, ceiling: 7000 },
    { name: "विक्रम सिंह", post: "अध्यापक Level-1 (L-10)", id: "RJCR201918003", level: "L-10", days: 30, ceiling: 7000 },
    { name: "श्रीमती सीमा गुप्ता", post: "अध्यापक Level-2 (L-10)", id: "RJBM201615002", level: "L-10", days: 30, ceiling: 7000 },
    { name: "अमित कुमार वर्मा", post: "वरिष्ठ अध्यापक L-11", id: "RJAL201412001", level: "L-11", days: 30, ceiling: 7000 }
  ];
  calculateBonus();
  saveDataLocal();
  showBonusToast("✅ 6 नमूना पात्र कार्मिक (Level L-1 से L-11) लोड किए गए!");
}

function addBonusStaffRow() {
  const masterCeiling = parseFloat(document.getElementById("bonusCeiling") ? document.getElementById("bonusCeiling").value : 7000) || 7000;
  const masterDays = parseInt(document.getElementById("bonusDays") ? document.getElementById("bonusDays").value : 30) || 30;
  bonusStaffList.push({
    name: "",
    post: "",
    id: "",
    level: "L-10",
    days: masterDays,
    ceiling: masterCeiling
  });
  renderBonusTable();
  saveDataLocal();
  showBonusToast("➕ नया कार्मिक पंक्ति जोड़ी गई!");
}

function removeBonusStaffRow(idx) {
  if (bonusStaffList.length <= 1) {
    alert("कम से कम एक कार्मिक पंक्ति आवश्यक है!");
    return;
  }
  const removedName = bonusStaffList[idx].name || `पंक्ति ${idx + 1}`;
  bonusStaffList.splice(idx, 1);
  renderBonusTable();
  saveDataLocal();
  showBonusToast(`🗑️ ${removedName} को हटाया गया`);
}

function updateBonusStaffField(idx, field, val) {
  if (!bonusStaffList[idx]) return;
  if (field === "days") {
    bonusStaffList[idx].days = parseInt(val) || 0;
  } else if (field === "ceiling") {
    bonusStaffList[idx].ceiling = parseFloat(val) || 0;
  } else {
    bonusStaffList[idx][field] = val;
  }
  renderBonusTable();
  saveDataLocal();
}

function onBonusMasterChange() {
  calculateBonus();
}

function importStaffToBonus() {
  if (!staffList || staffList.length === 0) {
    showBonusToast("⚠️ DA स्टाफ तालिका में कोई कार्मिक उपलब्ध नहीं है! कृपया पहले टैब 2 में स्टाफ जोड़ें।");
    return;
  }

  const eligibleLevels = ["L-1", "L-2", "L-3", "L-4", "L-5", "L-6", "L-7", "L-8", "L-9", "L-10", "L-11", "L-12"];
  const masterCeiling = parseFloat(document.getElementById("bonusCeiling") ? document.getElementById("bonusCeiling").value : 7000) || 7000;
  const masterDays = parseInt(document.getElementById("bonusDays") ? document.getElementById("bonusDays").value : 30) || 30;

  let addedCount = 0;
  const existingIds = new Set(bonusStaffList.map(b => (b.id || "").trim()).filter(Boolean));

  staffList.forEach(s => {
    // Only non-gazetted employees L-1 to L-12 are eligible for Diwali Bonus
    if (eligibleLevels.includes(s.level)) {
      if (!s.id || !existingIds.has(s.id.trim())) {
        bonusStaffList.push({
          name: s.name,
          post: s.post,
          id: s.id,
          level: s.level,
          days: masterDays,
          ceiling: masterCeiling
        });
        addedCount++;
        if (s.id) existingIds.add(s.id.trim());
      }
    }
  });

  renderBonusTable();
  saveDataLocal();

  if (addedCount > 0) {
    showBonusToast(`✅ DA स्टाफ से ${addedCount} पात्र कार्मिक (Level L-1 से L-12) सफलतापूर्वक आयात किए गए!`);
  } else {
    showBonusToast(`ℹ️ DA स्टाफ के सभी पात्र कार्मिक पहले से ही बोनस सूची में शामिल हैं।`);
  }
}

function showBonusToast(msg) {
  const toast = document.getElementById("bonusToast");
  if (!toast) return;
  toast.innerText = msg;
  toast.style.display = "flex";
  if (window.bonusToastTimeout) clearTimeout(window.bonusToastTimeout);
  window.bonusToastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, 3500);
}

function calculateBonus() {
  renderBonusTable();
}

function renderBonusTable() {
  const tbody = document.getElementById("bonusStaffTableBody");
  const ceilingInput = document.getElementById("bonusCeiling");
  const masterCeiling = ceilingInput ? parseFloat(ceilingInput.value) || 7000 : 7000;
  const daysSelect = document.getElementById("bonusDays");
  const masterDays = daysSelect ? parseInt(daysSelect.value) || 30 : 30;
  const ruleSelect = document.getElementById("bonusRuleSplit");
  const rule = ruleSelect ? ruleSelect.value : "75_25";

  if (!bonusStaffList || bonusStaffList.length === 0) {
    loadSampleBonusStaff();
    return;
  }

  const bonusLevels = ["L-1", "L-2", "L-3", "L-4", "L-5", "L-6", "L-7", "L-8", "L-9", "L-10", "L-11", "L-12"];

  let totalGross = 0;
  let totalCash = 0;
  let totalGpf = 0;
  let totalDaysCount = 0;

  let tableHtml = "";
  let printHtml = `
    <table class="official-print-grid">
      <thead>
        <tr>
          <th style="width: 35px;">क्र.</th>
          <th>कर्मचारी का नाम</th>
          <th>पद</th>
          <th>SIPF ID</th>
          <th>लेवल</th>
          <th>गणना दिवस</th>
          <th>अधिकतम सीमा (₹)</th>
          <th>सकल बोनस (₹)</th>
          <th>GPF जमा 25% (₹)</th>
          <th>नकद देय 75% (₹)</th>
        </tr>
      </thead>
      <tbody>
  `;

  bonusStaffList.forEach((s, idx) => {
    const days = parseInt(s.days) !== undefined && !isNaN(parseInt(s.days)) ? parseInt(s.days) : masterDays;
    const ceiling = parseFloat(s.ceiling) !== undefined && !isNaN(parseFloat(s.ceiling)) ? parseFloat(s.ceiling) : masterCeiling;
    
    // Standard Formula: Floor((Ceiling * Days) / 31)
    const gross = Math.floor((ceiling * days) / 31);
    let cash = gross, gpf = 0;

    if (rule === "75_25") {
      cash = Math.round(gross * 0.75);
      gpf = gross - cash;
    } else if (rule === "100_gpf") {
      cash = 0;
      gpf = gross;
    }

    totalGross += gross;
    totalCash += cash;
    totalGpf += gpf;
    totalDaysCount += days;

    const levelOptions = bonusLevels.map(lvl => 
      `<option value="${lvl}" ${s.level === lvl ? 'selected' : ''}>${lvl}</option>`
    ).join('');

    tableHtml += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td><input type="text" value="${s.name || ''}" placeholder="कर्मचारी नाम" onchange="updateBonusStaffField(${idx}, 'name', this.value)" style="width: 140px;"></td>
        <td><input type="text" value="${s.post || ''}" placeholder="पद" onchange="updateBonusStaffField(${idx}, 'post', this.value)" style="width: 130px;"></td>
        <td><input type="text" value="${s.id || ''}" placeholder="SIPF ID" onchange="updateBonusStaffField(${idx}, 'id', this.value)" style="width: 105px;"></td>
        <td>
          <select onchange="updateBonusStaffField(${idx}, 'level', this.value)" style="width: 75px;">
            ${levelOptions}
          </select>
        </td>
        <td><input type="number" min="1" max="31" value="${days}" onchange="updateBonusStaffField(${idx}, 'days', this.value)" style="width: 65px; text-align: center;"></td>
        <td><input type="number" step="500" value="${ceiling}" onchange="updateBonusStaffField(${idx}, 'ceiling', this.value)" style="width: 85px; text-align: right;"></td>
        <td style="text-align: right; font-weight: 700; color: #1e3a8a;">₹${gross.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #16a34a;">₹${cash.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #ca8a04;">₹${gpf.toLocaleString("en-IN")}</td>
        <td class="no-print" style="text-align: center;">
          <button type="button" class="btn-danger-sm" onclick="removeBonusStaffRow(${idx})" title="हटाएं">✕</button>
        </td>
      </tr>
    `;

    printHtml += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td>${s.name || '-'}</td>
        <td>${s.post || '-'}</td>
        <td style="text-align: center;">${s.id || '-'}</td>
        <td style="text-align: center;">${s.level || 'L-10'}</td>
        <td style="text-align: center;">${days} दिन</td>
        <td style="text-align: right;">₹${ceiling.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700;">₹${gross.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #b45309;">₹${gpf.toLocaleString("en-IN")}</td>
        <td style="text-align: right; font-weight: 700; color: #15803d;">₹${cash.toLocaleString("en-IN")}</td>
      </tr>
    `;
  });

  printHtml += `
      </tbody>
      <tfoot>
        <tr class="print-total-row">
          <td colspan="5" style="text-align: center;"><strong>कुल योग (GRAND TOTAL):</strong></td>
          <td style="text-align: center; font-weight: 700;">${bonusStaffList.length} कार्मिक</td>
          <td style="text-align: right;">-</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800;">₹${totalGross.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800; color: #b45309;">₹${totalGpf.toLocaleString("en-IN")}</td>
          <td style="text-align: right; font-size: 10.5pt; font-weight: 800; color: #15803d;">₹${totalCash.toLocaleString("en-IN")}</td>
        </tr>
      </tfoot>
    </table>
  `;

  if (tbody) tbody.innerHTML = tableHtml;

  // Update Summary Figures
  const staffCountEl = document.getElementById("bTotalStaffCount");
  if (staffCountEl) staffCountEl.innerText = bonusStaffList.length.toString();

  const totalGrossEl = document.getElementById("bTotalGrossBonus");
  if (totalGrossEl) totalGrossEl.innerText = `₹${totalGross.toLocaleString("en-IN")}`;

  const totalCashEl = document.getElementById("bTotalCashPayable");
  if (totalCashEl) totalCashEl.innerText = `₹${totalCash.toLocaleString("en-IN")}`;

  const totalGpfEl = document.getElementById("bTotalGpfDeposit");
  if (totalGpfEl) totalGpfEl.innerText = `₹${totalGpf.toLocaleString("en-IN")}`;

  // Update Table Footer
  const bonusTotDays = document.getElementById("bonusTotDays");
  if (bonusTotDays) bonusTotDays.innerText = `${bonusStaffList.length} कार्मिक`;

  const bonusTotGross = document.getElementById("bonusTotGross");
  if (bonusTotGross) bonusTotGross.innerText = `₹${totalGross.toLocaleString("en-IN")}`;

  const bonusTotCash = document.getElementById("bonusTotCash");
  if (bonusTotCash) bonusTotCash.innerText = `₹${totalCash.toLocaleString("en-IN")}`;

  const bonusTotGpf = document.getElementById("bonusTotGpf");
  if (bonusTotGpf) bonusTotGpf.innerText = `₹${totalGpf.toLocaleString("en-IN")}`;

  // Update Standard Single Employee Formula & Cards
  const singleGross = Math.floor((masterCeiling * masterDays) / 31);
  let singleCash = singleGross, singleGpf = 0;
  if (rule === "75_25") {
    singleCash = Math.round(singleGross * 0.75);
    singleGpf = singleGross - singleCash;
  } else if (rule === "100_gpf") {
    singleCash = 0;
    singleGpf = singleGross;
  }

  const fCeil = document.getElementById("formulaCeiling");
  if (fCeil) fCeil.innerText = masterCeiling.toLocaleString("en-IN");
  const fDays = document.getElementById("formulaDays");
  if (fDays) fDays.innerText = masterDays.toString();
  const fGross = document.getElementById("formulaGross");
  if (fGross) fGross.innerText = singleGross.toLocaleString("en-IN");

  const bTotal = document.getElementById("bTotal");
  if (bTotal) bTotal.innerText = `₹${singleGross.toLocaleString("en-IN")}`;
  const bCash = document.getElementById("bCash");
  if (bCash) bCash.innerText = `₹${singleCash.toLocaleString("en-IN")}`;
  const bGpf = document.getElementById("bGpf");
  if (bGpf) bGpf.innerText = `₹${singleGpf.toLocaleString("en-IN")}`;

  // Update Combined Package
  const cardGross = parseInt((document.getElementById("cardGrossArrear") ? document.getElementById("cardGrossArrear").innerText : "0").replace(/[^0-9]/g, "")) || 0;
  const cardGpf = parseInt((document.getElementById("cardGpfDeposit") ? document.getElementById("cardGpfDeposit").innerText : "0").replace(/[^0-9]/g, "")) || 0;
  const cardCash = parseInt((document.getElementById("cardNetCash") ? document.getElementById("cardNetCash").innerText : "0").replace(/[^0-9]/g, "")) || 0;
  updateCombinedPackage(cardGross, cardGpf, cardCash);

  // Update Bonus Print Template Metadata & Table
  const pbCeilingDisplay = document.getElementById("pbCeilingDisplay");
  if (pbCeilingDisplay) pbCeilingDisplay.innerText = `₹${masterCeiling.toLocaleString("en-IN")}`;

  const pbDaysDisplay = document.getElementById("pbDaysDisplay");
  if (pbDaysDisplay) pbDaysDisplay.innerText = `${masterDays} दिन (माह: 31 दिन)`;

  const pbRuleDisplay = document.getElementById("pbRuleDisplay");
  if (pbRuleDisplay) {
    if (rule === "75_25") pbRuleDisplay.innerText = "75% नकद + 25% GPF जमा";
    else if (rule === "100_gpf") pbRuleDisplay.innerText = "100% GPF खाते में जमा";
    else pbRuleDisplay.innerText = "100% नकद भुगतान";
  }

  const bonusPrintWrap = document.getElementById("bonusPrintTableWrap");
  if (bonusPrintWrap) bonusPrintWrap.innerHTML = printHtml;
}

function exportBonusToCsv() {
  const masterCeiling = parseFloat(document.getElementById("bonusCeiling") ? document.getElementById("bonusCeiling").value : 7000) || 7000;
  const masterDays = parseInt(document.getElementById("bonusDays") ? document.getElementById("bonusDays").value : 30) || 30;
  const rule = document.getElementById("bonusRuleSplit") ? document.getElementById("bonusRuleSplit").value : "75_25";

  let csv = "क्र.,कर्मचारी का नाम,पद,SIPF ID,पे लेवल,गणना दिवस,गणना सीमा (₹),सकल बोनस (₹),नकद देय 75% (₹),GPF जमा 25% (₹)\n";
  let totalGross = 0, totalCash = 0, totalGpf = 0;

  bonusStaffList.forEach((s, idx) => {
    const days = parseInt(s.days) || masterDays;
    const ceiling = parseFloat(s.ceiling) || masterCeiling;
    const gross = Math.floor((ceiling * days) / 31);
    let cash = gross, gpf = 0;
    if (rule === "75_25") {
      cash = Math.round(gross * 0.75);
      gpf = gross - cash;
    } else if (rule === "100_gpf") {
      cash = 0;
      gpf = gross;
    }

    totalGross += gross;
    totalCash += cash;
    totalGpf += gpf;
    csv += `${idx + 1},"${s.name || ''}","${s.post || ''}","${s.id || ''}",${s.level || 'L-10'},${days},${ceiling},${gross},${cash},${gpf}\n`;
  });

  csv += `कुल योग (${bonusStaffList.length} कार्मिक),,,,,,${totalGross},${totalCash},${totalGpf}\n`;

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Staff_Diwali_Bonus_Schedule_DDO.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);

  showBonusToast("📥 बोनस DDO शेड्यूल Excel/CSV फाइल सफलतापूर्वक डाउनलोड हुई!");
}

function updateCombinedPackage(daGross, daGpf, daCash) {
  const bTotal = parseInt(document.getElementById("bTotal") ? document.getElementById("bTotal").innerText.replace(/[^0-9]/g, "") : "0") || 0;
  const bCash = parseInt(document.getElementById("bCash") ? document.getElementById("bCash").innerText.replace(/[^0-9]/g, "") : "0") || 0;
  const bGpf = parseInt(document.getElementById("bGpf") ? document.getElementById("bGpf").innerText.replace(/[^0-9]/g, "") : "0") || 0;

  const combGross = document.getElementById("combGross");
  if (combGross) combGross.innerText = `₹${(daGross + bTotal).toLocaleString("en-IN")}`;
  const combGpf = document.getElementById("combGpf");
  if (combGpf) combGpf.innerText = `₹${(daGpf + bGpf).toLocaleString("en-IN")}`;
  const combCash = document.getElementById("combCash");
  if (combCash) combCash.innerText = `₹${(daCash + bCash).toLocaleString("en-IN")}`;
}

// 12. Pay Matrix Reference Renderer
function renderPayMatrixReference() {
  const table = document.getElementById("matrixDisplayTable");
  if (!table) return;

  const levels = ["L-1", "L-2", "L-3", "L-4", "L-5", "L-6", "L-7", "L-8", "L-9", "L-10", "L-11", "L-12", "L-13", "L-14", "L-15", "L-16"];
  let html = `<thead><tr><th>सेल (Cell)</th>`;
  levels.forEach(lvl => {
    html += `<th>${lvl}</th>`;
  });
  html += `</tr></thead><tbody>`;

  for (let c = 1; c <= 40; c++) {
    html += `<tr><td><strong>Cell ${c}</strong></td>`;
    levels.forEach(lvl => {
      const val = PAY_MATRIX[lvl] && PAY_MATRIX[lvl][c - 1] ? `₹${PAY_MATRIX[lvl][c - 1].toLocaleString("en-IN")}` : "-";
      html += `<td>${val}</td>`;
    });
    html += `</tr>`;
  }
  html += `</tbody>`;
  table.innerHTML = html;
}

// 13. Data Persistence
function saveDataLocal() {
  try {
    const data = {
      officeName: document.getElementById("topOfficeName") ? document.getElementById("topOfficeName").value : "",
      empName: document.getElementById("empName").value,
      empDesignation: document.getElementById("empDesignation").value,
      empId: document.getElementById("empId").value,
      empSchool: document.getElementById("empSchool").value,
      initialBasic: document.getElementById("initialBasic").value,
      startDate: document.getElementById("inputStartDate").value,
      endDate: document.getElementById("inputEndDate").value,
      singleMonthBasics: singleMonthBasics,
      singleMonthDays: singleMonthDays,
      checkStartAn: document.getElementById("checkStartAn") ? document.getElementById("checkStartAn").checked : false,
      checkEndFn: document.getElementById("checkEndFn") ? document.getElementById("checkEndFn").checked : false,
      staffList: staffList,
      bonusStaffList: bonusStaffList,
      bonusCeiling: document.getElementById("bonusCeiling") ? document.getElementById("bonusCeiling").value : "7000",
      bonusDays: document.getElementById("bonusDays") ? document.getElementById("bonusDays").value : "30",
      bonusRuleSplit: document.getElementById("bonusRuleSplit") ? document.getElementById("bonusRuleSplit").value : "75_25"
    };
    localStorage.setItem("da_arrear_calc_data", JSON.stringify(data));
  } catch (e) {}
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem("da_arrear_calc_data");
    if (saved) {
      const data = JSON.parse(saved);
      if (data.officeName && document.getElementById("topOfficeName")) {
        document.getElementById("topOfficeName").value = data.officeName;
      }
      if (data.empName) document.getElementById("empName").value = data.empName;
      if (data.empDesignation) document.getElementById("empDesignation").value = data.empDesignation;
      if (data.empId) document.getElementById("empId").value = data.empId;
      if (data.empSchool) document.getElementById("empSchool").value = data.empSchool;
      if (data.initialBasic) document.getElementById("initialBasic").value = data.initialBasic;
      if (data.startDate) document.getElementById("inputStartDate").value = data.startDate;
      if (data.endDate) document.getElementById("inputEndDate").value = data.endDate;
      if (data.singleMonthBasics) singleMonthBasics = data.singleMonthBasics;
      if (data.singleMonthDays) singleMonthDays = data.singleMonthDays;
      if (data.checkStartAn && document.getElementById("checkStartAn")) document.getElementById("checkStartAn").checked = data.checkStartAn;
      if (data.checkEndFn && document.getElementById("checkEndFn")) document.getElementById("checkEndFn").checked = data.checkEndFn;
      if (data.staffList && data.staffList.length) staffList = data.staffList;
      else staffList = [{ name: "", post: "", id: "", level: "L-10", basic: 33800 }];
      if (data.bonusCeiling && document.getElementById("bonusCeiling")) document.getElementById("bonusCeiling").value = data.bonusCeiling;
      if (data.bonusDays && document.getElementById("bonusDays")) document.getElementById("bonusDays").value = data.bonusDays;
      if (data.bonusRuleSplit && document.getElementById("bonusRuleSplit")) document.getElementById("bonusRuleSplit").value = data.bonusRuleSplit;
      if (data.bonusStaffList && data.bonusStaffList.length) bonusStaffList = data.bonusStaffList;
      else bonusStaffList = [{ name: "", post: "", id: "", level: "L-10", days: 30, ceiling: 7000 }];
    } else {
      staffList = [{ name: "", post: "", id: "", level: "L-10", basic: 33800 }];
      bonusStaffList = [{ name: "", post: "", id: "", level: "L-10", days: 30, ceiling: 7000 }];
    }
  } catch (e) {
    staffList = [{ name: "", post: "", id: "", level: "L-10", basic: 33800 }];
    bonusStaffList = [{ name: "", post: "", id: "", level: "L-10", days: 30, ceiling: 7000 }];
  }
  syncOfficeNameEverywhere();
}
