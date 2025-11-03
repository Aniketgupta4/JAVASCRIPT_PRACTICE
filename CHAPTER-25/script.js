/* =========================
   AstroSpark - main JS
   ========================= */

/* ----- Zodiac data: ranges and small readings ----- */
/* Each sign has: name, symbol, start (month,day), end (month,day), short description */
const zodiacData = [
  { name: "Aries", symbol: "♈", start: [3,21], end: [4,19], desc: "Bold, energetic and pioneering. You act first and think later — a natural leader." },
  { name: "Taurus", symbol: "♉", start: [4,20], end: [5,20], desc: "Steady, reliable and sensual. You value comfort and build slow, lasting success." },
  { name: "Gemini", symbol: "♊", start: [5,21], end: [6,20], desc: "Curious, adaptable and chatty. Your mind is your playground — you love variety." },
  { name: "Cancer", symbol: "♋", start: [6,21], end: [7,22], desc: "Caring, intuitive and protective. Home and emotions matter deeply to you." },
  { name: "Leo", symbol: "♌", start: [7,23], end: [8,22], desc: "Warm, dramatic and generous. You shine bright and inspire people around you." },
  { name: "Virgo", symbol: "♍", start: [8,23], end: [9,22], desc: "Practical, meticulous and helpful. You find solutions and appreciate order." },
  { name: "Libra", symbol: "♎", start: [9,23], end: [10,22], desc: "Social, diplomatic and beauty-loving. Harmony and partnership are your strengths." },
  { name: "Scorpio", symbol: "♏", start: [10,23], end: [11,21], desc: "Intense, secretive and powerful. Emotions run deep and transform you." },
  { name: "Sagittarius", symbol: "♐", start: [11,22], end: [12,21], desc: "Adventurous, honest and big-picture. You seek truth and freedom." },
  { name: "Capricorn", symbol: "♑", start: [12,22], end: [1,19], desc: "Ambitious, disciplined and patient. You build legacy through steady effort." },
  { name: "Aquarius", symbol: "♒", start: [1,20], end: [2,18], desc: "Innovative, independent and humanitarian. You think for the future." },
  { name: "Pisces", symbol: "♓", start: [2,19], end: [3,20], desc: "Imaginative, empathetic and dreamy. Art and feelings are your language." }
];

/* ----- Utility: check if a date (month,day) falls within a sign range ----- */
/* Note: some ranges cross year boundary (Capricorn). We'll handle wrap-around. */
function isBetween(month, day, startMonth, startDay, endMonth, endDay) {
  // convert to a simple comparable number: month*100 + day
  const val = month * 100 + day;
  const startVal = startMonth * 100 + startDay;
  const endVal = endMonth * 100 + endDay;
  if (startVal <= endVal) {
    // normal same-year range
    return val >= startVal && val <= endVal;
  } else {
    // wraps across year (e.g., Dec 22 - Jan 19)
    return val >= startVal || val <= endVal;
  }
}

/* ----- Determine zodiac sign from month/day ----- */
function getZodiac(month, day) {
  for (const sign of zodiacData) {
    if (isBetween(month, day, sign.start[0], sign.start[1], sign.end[0], sign.end[1])) {
      return sign;
    }
  }
  return null;
}

/* ----- DOM elements ----- */
const form = document.getElementById('astroForm');
const resultSection = document.getElementById('result');
const displayName = document.getElementById('displayName');
const displayDOB = document.getElementById('displayDOB');
const zodiacBadge = document.getElementById('zodiacBadge');
const zodiacName = document.getElementById('zodiacName');
const zodiacRange = document.getElementById('zodiacRange');
const zodiacDesc = document.getElementById('zodiacDesc');
const out = document.getElementById('out');
const themeToggle = document.getElementById('themeToggle');
const clearBtn = document.getElementById('clearBtn');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');

/* ----- Theme toggle logic ----- */
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light', themeToggle.checked);
});

/* ----- Form submit handler ----- */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Read inputs
  const firstName = document.getElementById('firstName').value.trim();
  const surName = document.getElementById('surName').value.trim();
  const day = parseInt(document.getElementById('day').value, 10);
  const month = parseInt(document.getElementById('month').value, 10);
  const year = parseInt(document.getElementById('year').value, 10);

  // Basic validation
  if (!firstName || !surName) {
    alert("Please enter your first name and surname.");
    return;
  }
  if (!Number.isInteger(day) || day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    return;
  }
  if (!Number.isInteger(year) || year < 1900 || year > 2100) {
    alert("Please enter a reasonable birth year.");
    return;
  }

  // Additional check for month/day validity (simple)
  const maxDaysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31,30,31,30,31,31,30,31,30,31];
  if (day > maxDaysInMonth[month - 1]) {
    alert(`Invalid date: ${month}/${day}/${year} does not exist.`);
    return;
  }

  // Determine zodiac
  const sign = getZodiac(month, day);
  if (!sign) {
    alert("Could not determine zodiac. Please check date and month.");
    return;
  }

  // Build nice outputs
  const fullname = `${capitalize(firstName)} ${capitalize(surName)}`;
  displayName.textContent = fullname;
  displayDOB.textContent = `DOB: ${pad(day)}/${pad(month)}/${year}`;

  zodiacBadge.textContent = sign.symbol;
  zodiacName.textContent = sign.name;
  zodiacRange.textContent = `${formatMonthDay(sign.start)} — ${formatMonthDay(sign.end)}`;
  zodiacDesc.textContent = sign.desc;

  // Optionally add a small personalized line
  zodiacDesc.textContent += ` ${generatePersonalHint(sign.name)}`;

  // Show result
  resultSection.hidden = false;
  // Smooth scroll to result (mobile-friendly)
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

/* ----- Utility helpers ----- */
function pad(v){ return String(v).padStart(2, '0'); }
function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); }
function formatMonthDay([m,d]) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[m-1]} ${d}`;
}
function isLeapYear(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }

/* A tiny function to add a more personal flavour */
function generatePersonalHint(signName){
  const hints = {
    Aries: "Take one bold step this week — it could lead somewhere exciting.",
    Taurus: "A small comfort upgrade (sleep, food or space) will boost your energy.",
    Gemini: "Conversations open doors — say yes to a chat with someone new.",
    Cancer: "A quiet night at home will recharge you more than you expect.",
    Leo: "Your creativity shines — share something you made with pride.",
    Virgo: "Tidy your workspace — clarity follows order and new ideas appear.",
    Libra: "A fair but honest conversation will improve an important relationship.",
    Scorpio: "Channel your intensity into a project — transformation is likely.",
    Sagittarius: "Plan a short trip or explore a new idea — curiosity rewards you.",
    Capricorn: "Focus on one long-term goal — consistent small actions win.",
    Aquarius: "Share your idea in public — someone will resonate and help.",
    Pisces: "Let your imagination play — a small artistic hobby will soothe you."
  };
  return hints[signName] ? `Tip: ${hints[signName]}` : "";
}

/* ----- clear and restart buttons ----- */
clearBtn.addEventListener('click', () => {
  form.reset();
  resultSection.hidden = true;
  out.textContent = "";
});

restartBtn.addEventListener('click', () => {
  form.reset();
  resultSection.hidden = true;
  out.textContent = "";
  document.getElementById('firstName').focus();
});

/* ----- copy/share reading ----- */
shareBtn.addEventListener('click', () => {
  const text = `${displayName.textContent} — ${zodiacName.textContent} (${zodiacRange.textContent})\n${zodiacDesc.textContent}`;
  navigator.clipboard?.writeText(text).then(() => {
    out.textContent = 'Reading copied to clipboard!';
    setTimeout(()=> out.textContent = '', 2500);
  }).catch(() => {
    out.textContent = 'Could not copy. Try manually selecting the text.';
    setTimeout(()=> out.textContent = '', 2500);
  });
});




