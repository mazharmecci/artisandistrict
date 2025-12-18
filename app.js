/* Month data with marquee statements */
const months = [
  {
    key: "january",
    label: "January",
    theme: "Brand & vision",
    subtitle: "Brand authority, vision and systems",
    cardImage: "images/artisan-district.png",
    marqueeAr: "في حي الحرفيين، رحلتنا متجذرة في اعتقاد بسيط لكنه قوي: الطعام الجيد يجمع الناس معًا. من مخبزنا الحرفي الذي يوقظ الصباحات برائحة المخبوزات الطازجة إلى عمليات المطبخ الشاملة لدينا التي تقدم خدمات التموين الصناعي وكافيتريات الموظفين، نحن ملتزمون بالتميز في كل تفصيل",
    marquee: "Artisan District: At Artisan District, our journey is rooted in a simple yet powerful belief: good food brings people together. From our artisan bakery that awakens mornings with the aroma of freshly baked goods to our full-scale kitchen operations serving industrial catering and staff canteens, we are committed to excellence in every detail.",
    spots: [
      { name: "Museum of Islamic Art", note: "Architectural icon that mirrors precision and timeless design." },
      { name: "Doha Skyline", note: "Panoramic city view that suggests ambition and forward vision." },
      { name: "National Museum of Qatar", note: "Desert‑rose design for heritage‑meets‑modernity narratives." }
    ],
    images: [
      "images/jan-mia.jpg",
      "images/jan-skyline.jpg",
      "images/jan-nmoq.jpg",
      "images/jan-nmoq2.jpg",
      "images/jan-nmoq3.jpg"
    ],
    holidays: [
      { dateISO: "2026-01-01", label: "New Year's Day" }
    ]
  },
  {
    key: "february",
    label: "February",
    theme: "Ramadan prep & sports",
    subtitle: "Early Ramadan planning & National Sports Day",
    cardImage: "images/Ramadan.png",
    marqueeAr: "نحن نهيئ القلوب والعقول لشهر رمضان، ونحتفل بروح المجتمع والصحة والتفوق الرياضي. مطابخنا جاهزة لتغذية الأجساد والروح خلال هذا الشهر الكريم",
    marquee: "Artisan District: Preparing hearts and minds for Ramadan, we celebrate the spirit of community, wellness, and athletic excellence. Our kitchens stand ready to nourish bodies and souls during this sacred month.",
    spots: [
      { name: "Baladna Park", note: "Baladna Park is a family-friendly & natural destination in Qatar." },      
      { name: "Baladna Park", note: "The park offers a variety of attractions." },     
      { name: "Aspire Park", note: "The Aspire park is popular spot for joggers - 1.6km track." }
    ],
    images: [
      "images/feb-Baladna-Farm-Park.jpg",
      "images/feb-Baladna-Farm-Park2.jpeg",
      "images/feb-Baladna-Farm-Park3.jpg",
      "images/feb-Sheikh-Abdulla-Bin-Zaid-AlMahmoud.jpg",
      "images/feb-aspire-park.jpg"
    ],
    holidays: [
      { dateISO: "2026-02-10", label: "National Sports Day (Qatar)" }
    ]
  },
  {
    key: "march",
    label: "March",
    theme: "Ramadan activation",
    subtitle: "Ramadan activation and community focus",
    cardImage: "images/cutlery.png",
    marqueeAr: "منطقة الحرفيين: خلال شهر رمضان، نرتقي بتقليد إفطار الصائم من خلال قوائم منتقاة بعناية تكرم التراث وتحتفل بالمجتمع. كل وجبة تحكي قصة من العناية والتواصل",
    marquee: "Artisan District: Artisan District: During Ramadan, we elevate the tradition of breaking fast with thoughtfully curated menus that honor heritage while celebrating community. Every meal tells a story of care and connection.",
    spots: [
      { name: "Souq Waqif", note: "Community heart of Doha, ideal for night‑time Ramadan stories." },
      { name: "Katara Cultural Village", note: "Blends culture, faith and gathering spaces in one frame." },
      { name: "Fanar Mosque", note: "Blends culture, faith and gathering spaces in one frame." }      
    ],
    images: [
      "images/mar-souq-waqif.jpg",
      "images/mar-katara.jpg",
      "images/mar-Fanar.jpg",
      "images/mar-Abn-al-wahhab-mosque.jpg",
      "images/mar-Abn-al-wahhab-mosque-II.jpg"
    ],
    holidays: [
      { dateISO: "2026-03-17", label: "Ramadan (start) — tentative" }
    ]
  },
  {
    key: "april",
    label: "April",
    theme: "Eid luxury",
    subtitle: "Eid luxury experiences and gifting",
    cardImage: "images/Apr.PNG",
    marqueeAr: "حي الحرفيين: الاحتفال بالعيد يجسد الفرح والكرم والتواصل الاجتماعي. مجموعاتنا الطهوية الفاخرة تحول التجمعات إلى لحظات لا تُنسى من الفخامة والدفء",
    marquee: "Artisan District: Eid celebrates joy, generosity, and togetherness. Our premium culinary collections transform gatherings into unforgettable moments of luxury and warmth.",
    spots: [
      { name: "The Pearl-Qatar", note: "Upscale waterfront living, perfect for premium Eid hospitality." },
      { name: "Villaggio Mall", note: "Venetian‑inspired interiors for gifting and retail experiences." },
      { name: "Al Hazm", note: "Luxury complex that mirrors high‑touch culinary service." }
    ],
    images: [
      "images/apr-pearl.jpg",
      "images/apr-villaggio.jpg",
      "images/apr-Al-Hazm-Mall.jpg",
      "images/apr-pearl-II.jpg",
      "images/apr-Al-Hazm-Mall-II.jpg"
    ],
    holidays: [
      { dateISO: "2026-04-13", label: "Eid al-Fitr — tentative" }
    ]
  },
  {
    key: "may",
    label: "May",
    theme: "Artisan bakery",
    subtitle: "Artisan bread stories & pastry craft",
    cardImage: "images/May.PNG",
    marqueeAr: "يلتقي الحرفية بالشغف في مخبزنا. التخمير البطيء، الوصفات التراثية، وأفضل المكونات تخلق خبزًا ومعجنات تتجاوز اللحظات العادية",
    marquee: "Artisan District: Craftsmanship meets passion in our bakery. Slow fermentation, heritage recipes, and the finest ingredients create breads and pastries that transcend ordinary moments.",
    spots: [
      { name: "Msheireb Downtown Doha", note: "Modern streetscapes that suit cafe and bakery shots." },
      { name: "Msheireb Downtown Doha", note: "Modern streetscapes that suit cafe and bakery shots." },
      { name: "Gold Souq area", note: "Textures and detail for grain, spice and ingredient narratives." }
    ],
    images: [
      "images/may-msheireb.jpg",
      "images/may-msheireb-II.jpg",
      "images/may-gold-souq-area.jpg",
      "images/may-gold-souq-area-II.jpg",
      "images/may-gold-souq-area-III.jpg"
    ],
    holidays: []
  },
  {
    key: "june",
    label: "June",
    theme: "Industrial catering",
    subtitle: "Scale, safety and nutrition at volume",
    cardImage: "images/Jun.PNG",
    marqueeAr: "على نطاق واسع، نحن لا نساوم أبدًا. عمليات التموين الصناعي لدينا تجمع بين الدقة والسلامة والتغذية لتغذية المئات بنفس الرعاية التي نقدمها لشخص واحد",
    marquee: "Artisan District: At scale, we never compromise. Our industrial catering operations blend precision, safety, and nutrition to feed hundreds with the same care we'd give to one.",
    spots: [
      { name: "Doha Corniche", note: "The Doha Corniche long waterfront promenade that curves around Doha Bay." },
      { name: "Lusail", note: "Lusail is Qatar's modern masterpiece, blending innovation, leisure, and sustainability." },
      { name: "Lusail", note: "It is a sought-after featuring world-class attractions." }
    ],
    images: [
      "images/jun-corniche.jpg",
      "images/jun-lusail.jpeg",
      "images/jun-lusail-II.jpg",
      "images/jun-corniche-II.jpg",
      "images/jun-corniche-III.jpg"
    ],
    holidays: [
      { dateISO: "2026-06-26", label: "Eid al-Adha — tentative" }
    ]
  }
];

/* Calendar helpers */
function buildMonthMatrix(year, monthIndex) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // 1..n[web:36]
  const firstDay = new Date(year, monthIndex, 1).getDay(); // 0=Sun..6=Sat[web:36]
  const weeks = [];
  let currentWeek = new Array(7).fill(null);

  for (let i = 0; i < firstDay; i += 1) {
    currentWeek[i] = null;
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, monthIndex, day);
    const dow = date.getDay();
    currentWeek[dow] = { day, date };
    if (dow === 6 || day === daysInMonth) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  }

  return weeks;
}

function renderCalendarForMonth(month, year) {
  const monthIndex = new Date(`${year}-${month.key}-01`).getMonth();
  const matrix = buildMonthMatrix(year, monthIndex);
  const holidaySet = new Set((month.holidays || []).map(h => h.dateISO));
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const headerRow = `
    <div class="calendar-header-row">
      ${weekdayLabels.map(label => `
        <div class="calendar-weekday${label === "Fri" ? " weekday-friday" : ""}">
          ${label}
        </div>
      `).join("")}
    </div>
  `;

  const bodyRows = matrix.map((week, wi) =>
    week.map((cell, di) => {
      if (!cell) {
        return `<div class="calendar-cell empty" data-pos="${wi}-${di}"></div>`;
      }
      const d = cell.date;
      const isFriday = d.getDay() === 5; // Friday[web:35]
      const dateISO = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(cell.day).padStart(2, "0")}`;
      const isHoliday = holidaySet.has(dateISO);

      const classes = [
        "calendar-cell",
        isFriday ? "is-friday" : "",
        isHoliday ? "is-holiday" : ""
      ].filter(Boolean).join(" ");

      return `
        <button type="button" class="${classes}" data-pos="${wi}-${di}">
          <span class="day-number">${cell.day}</span>
        </button>
      `;
    }).join("")
  ).join("");

  return `
    <div class="month-calendar">
      ${headerRow}
      <div class="calendar-grid">
        ${bodyRows}
      </div>
    </div>
  `;
}

/* Build landing grid with marquee + hover calendar */
const gridEl = document.getElementById('monthsGrid');

gridEl.innerHTML = months.map(m => {
  const thumbs = (m.images || []).slice(0, 5);
  const calendarHTML = renderCalendarForMonth(m, 2026);

  return `
    <article class="month-card"
             data-month="${m.key}"
             data-theme="${m.theme}"
             tabindex="0"
             aria-label="${m.label}">
      <div class="month-visual">
        <div class="month-image" style="background-image:url('${m.cardImage}')"></div>
        ${calendarHTML}
      </div>

      <div class="month-inner">
        <header class="month-header">
          <div class="month-left">
            <span class="month-flag" aria-hidden="true"></span>
            <span class="month-name">${m.label}</span>
          </div>
          <span class="month-theme-tag">${m.theme}</span>
        </header>
        <div class="month-subtitle">${m.subtitle}</div>
        <button class="month-cta"
                type="button"
                data-open="${m.key}"
                aria-label="Open ${m.label} playbook">
          <span class="icon">⟶</span>
          <span>Open month playbook</span>
        </button>
      </div>

      <div class="month-thumbs">
        ${thumbs.map((src, i) => `
          <div class="month-thumb" data-thumb-index="${i}">
            <img src="${src}" alt="${m.label} preview ${i + 1}">
          </div>
        `).join('')}
      </div>

      <div class="month-divider"></div>

      <div class="month-marquee">
        ${m.marqueeAr ? `<div class="marquee-text marquee-ar">${m.marqueeAr}</div>` : ''}
        <div class="marquee-text marquee-en">${m.marquee}</div>
      </div>
    </article>
  `;
}).join('');

/* Theme filter */
const themeFilter = document.getElementById('themeFilter');
if (themeFilter) {
  themeFilter.addEventListener('change', () => {
    const value = themeFilter.value;
    const cards = document.querySelectorAll('.month-card');
    cards.forEach(card => {
      const theme = card.getAttribute('data-theme');
      card.style.display = (value === 'all' || theme === value) ? '' : 'none';
    });
  });
}

/* Modal + carousel elements */
const modalEl = document.getElementById('monthModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalSubtitleEl = document.getElementById('modalSubtitle');
const holidayBadgesEl = document.getElementById('holidayBadges');
const spotsListEl = document.getElementById('spotsList');
const carouselEl = document.getElementById('carousel');
const dotsEl = document.getElementById('carouselDots');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

/* Open modal */
function openModal(monthKey) {
  const month = months.find(m => m.key === monthKey);
  if (!month) return;

  modalTitleEl.textContent = month.label;
  modalSubtitleEl.textContent = month.subtitle;

  if (month.holidays && month.holidays.length) {
    holidayBadgesEl.innerHTML = month.holidays.map(h => `
      <span class="holiday-badge">
        <span class="holiday-date">${formatDate(h.dateISO)}</span>
        <span class="holiday-label">${h.label}</span>
      </span>
    `).join('');
  } else {
    holidayBadgesEl.innerHTML =
      `<span class="holiday-badge"><span class="holiday-label">No highlighted days added yet</span></span>`;
  }

  if (month.spots && month.spots.length) {
    spotsListEl.innerHTML = month.spots.map(s => `
      <div class="spot-pill">
        <div class="spot-icon">📍</div>
        <div>
          <div class="spot-name">${s.name}</div>
          <div class="spot-note">${s.note}</div>
        </div>
      </div>
    `).join('');
  } else {
    spotsListEl.innerHTML =
      `<div class="spot-pill"><div class="spot-icon">📍</div><div class="spot-name">Add Doha highlights here</div></div>`;
  }

  const imgs = (month.images || []).slice(0, 6);
  const captions = imgs.map((_, idx) => {
    const spot = month.spots && month.spots[idx] ? month.spots[idx].name : null;
    return spot ? `${spot} — ${month.theme.toLowerCase()}` : `${month.label} — visual highlight ${idx + 1}`;
  });

  carouselEl.innerHTML = imgs.map((src, i) => `
    <figure class="carousel-item" data-index="${i}">
      <img src="${src}" alt="${captions[i]}">
      <figcaption class="caption">${captions[i]}</figcaption>
    </figure>
  `).join('');

  dotsEl.innerHTML = imgs.map((_, i) =>
    `<button class="dot${i===0?' active':''}" data-dot="${i}" aria-label="Go to slide ${i+1}"></button>`
  ).join('');

  requestAnimationFrame(() => {
    carouselEl.scrollTo({ left: 0, behavior: 'instant' });
  });

  modalEl.setAttribute('aria-hidden', 'false');
}

/* Close modal */
function closeModal() {
  modalEl.setAttribute('aria-hidden', 'true');
}

/* Date helper */
function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString(undefined, opts);
}

/* Open / close click handling */
document.addEventListener('click', (e) => {
  const openKey = e.target.closest('[data-open]')?.getAttribute('data-open');
  if (openKey) {
    openModal(openKey);
    return;
  }

  if (e.target.closest('[data-close]') || e.target.dataset.close === 'true') {
    closeModal();
  }
});

/* Keyboard */
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.month-card')) {
    const mk = e.target.closest('.month-card').getAttribute('data-month');
    e.preventDefault();
    openModal(mk);
  }
  if (e.key === 'Escape') closeModal();
});

/* Carousel controls */
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => snapTo('prev'));
  nextBtn.addEventListener('click', () => snapTo('next'));
}

/* Dots navigation */
dotsEl.addEventListener('click', (e) => {
  const dot = e.target.closest('[data-dot]');
  if (!dot) return;
  const index = parseInt(dot.getAttribute('data-dot'), 10);
  const targetItem = carouselEl.querySelector(`.carousel-item[data-index="${index}"]`);
  if (targetItem) targetItem.scrollIntoView({ behavior: 'smooth', inline: 'start' });
});

/* Sync dots with scroll */
let dotSyncRaf = null;
carouselEl.addEventListener('scroll', () => {
  if (dotSyncRaf) return;
  dotSyncRaf = requestAnimationFrame(() => {
    const items = [...carouselEl.querySelectorAll('.carousel-item')];
    const parentRect = carouselEl.getBoundingClientRect();
    let bestIndex = 0;
    let bestCoverage = -Infinity;

    items.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();
      const leftVisible = Math.max(rect.left, parentRect.left);
      const rightVisible = Math.min(rect.right, parentRect.right);
      const coverage = Math.max(0, rightVisible - leftVisible);
      if (coverage > bestCoverage) {
        bestCoverage = coverage;
        bestIndex = idx;
      }
    });

    [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === bestIndex));
    dotSyncRaf = null;
  });
});

/* Snap navigation */
function snapTo(direction) {
  const items = [...carouselEl.querySelectorAll('.carousel-item')];
  if (!items.length) return;
  const parentRect = carouselEl.getBoundingClientRect();

  let currIndex = 0;
  let bestCoverage = -Infinity;
  items.forEach((item, idx) => {
    const rect = item.getBoundingClientRect();
    const leftVisible = Math.max(rect.left, parentRect.left);
    const rightVisible = Math.min(rect.right, parentRect.right);
    const coverage = Math.max(0, rightVisible - leftVisible);
    if (coverage > bestCoverage) {
      bestCoverage = coverage;
      currIndex = idx;
    }
  });

  const targetIndex = Math.max(
    0,
    Math.min(items.length - 1, direction === 'next' ? currIndex + 1 : currIndex - 1)
  );
  items[targetIndex].scrollIntoView({ behavior: 'smooth', inline: 'start' });
}

/* Focus guard */
document.addEventListener('focusin', (e) => {
  if (modalEl.getAttribute('aria-hidden') === 'true') return;
  if (!modalEl.contains(e.target)) {
    const focusable = modalEl.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusable || modalEl).focus();
  }
});

/* Auto-loop thumbnail previews */
function startThumbLoop() {
  const cards = document.querySelectorAll('.month-card');

  cards.forEach(card => {
    const key = card.getAttribute('data-month');
    const month = months.find(m => m.key === key);
    if (!month || !month.images || month.images.length <= 3) return;

    let offset = 0;
    const thumbs = card.querySelectorAll('.month-thumb img');
    if (!thumbs.length) return;

    setInterval(() => {
      offset = (offset + 1) % month.images.length;

      thumbs.forEach((imgEl, idx) => {
        const index = (offset + idx) % month.images.length;
        imgEl.src = month.images[index];
        imgEl.alt = `${month.label} preview ${index + 1}`;
      });
    }, 5000);
  });
}

startThumbLoop();
