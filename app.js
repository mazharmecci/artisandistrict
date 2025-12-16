/* Data schema:
  - months: label, theme, subtitle, spots, images, holidays
  - Images: map to your real assets in /images
*/

const months = [
  {
    key: "january",
    label: "January",
    theme: "Brand & strategy",
    subtitle: "Brand authority, vision and systems",
    spots: [
      { name: "The Pearl Monument", note: "Use as an icon of ambition when talking future pipeline." }
    ],
    images: [
      "images/jan1.jpg","images/jan2.jpg","images/jan3.jpg",
      "images/jan4.jpg","images/jan5.jpg","images/jan6.jpg"
    ],
    holidays: [
      { dateISO: "2026-01-01", label: "New Year’s Day" }
    ]
  },
  {
    key: "february",
    label: "February",
    theme: "Ramadan & community",
    subtitle: "Early Ramadan planning & National Sports Day",
    spots: [
      { name: "Flag Plaza", note: "Patriotic, perfect for National Sports Day storytelling." }
    ],
    images: [
      "images/feb1.jpg","images/feb2.jpg","images/feb3.jpg",
      "images/feb4.jpg","images/feb5.jpg","images/feb6.jpg"
    ],
    holidays: [
      { dateISO: "2026-02-10", label: "National Sports Day (Qatar) — confirm date" }
    ]
  },
  {
    key: "march",
    label: "March",
    theme: "Ramadan & community",
    subtitle: "Ramadan activation and community focus",
    spots: [
      { name: "Al Zubara Fort", note: "Historic frame for heritage and community roots." }
    ],
    images: [
      "images/mar1.jpg","images/mar2.jpg","images/mar3.jpg",
      "images/mar4.jpg","images/mar5.jpg","images/mar6.jpg"
    ],
    holidays: [
      { dateISO: "2026-03-17", label: "Ramadan (start) — tentative" }
    ]
  },
  {
    key: "april",
    label: "April",
    theme: "Luxury events",
    subtitle: "Eid luxury experiences and gifting",
    spots: [
      { name: "The Pearl Monument", note: "Pairs beautifully with luxury Eid gifting visuals." }
    ],
    images: [
      "images/apr1.jpg","images/apr2.jpg","images/apr3.jpg",
      "images/apr4.jpg","images/apr5.jpg","images/apr6.jpg"
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
    spots: [
      { name: "The City Gallery", note: "Artistic backdrop for bakery artistry shots." }
    ],
    images: [
      "images/may1.jpg","images/may2.jpg","images/may3.jpg",
      "images/may4.jpg","images/may5.jpg","images/may6.jpg"
    ],
    holidays: []
  },
  {
    key: "june",
    label: "June",
    theme: "Industrial catering",
    subtitle: "Scale, safety and nutrition at volume",
    spots: [
      { name: "Al Zubara Fort", note: "Use in long‑form pieces about heritage and endurance." }
    ],
    images: [
      "images/jun1.jpg","images/jun2.jpg","images/jun3.jpg",
      "images/jun4.jpg","images/jun5.jpg","images/jun6.jpg"
    ],
    holidays: [
      { dateISO: "2026-06-26", label: "Eid al-Adha — tentative" }
    ]
  },
  {
    key: "july",
    label: "July",
    theme: "Canteen management",
    subtitle: "Modern canteen experiences & flows",
    spots: [
      { name: "BoxPark", note: "Vibrant, container‑inspired aesthetic that mirrors canteen energy." }
    ],
    images: [
      "images/jul1.jpg","images/jul2.jpg","images/jul3.jpg",
      "images/jul4.jpg","images/jul5.jpg","images/jul6.jpg"
    ],
    holidays: []
  },
  {
    key: "august",
    label: "August",
    theme: "Sustainability",
    subtitle: "Sustainability & mindful sourcing",
    spots: [
      { name: "MIA Park", note: "Serene green space for sustainability and wellness stories." }
    ],
    images: [
      "images/aug1.jpg","images/aug2.jpg","images/aug3.jpg",
      "images/aug4.jpg","images/aug5.jpg","images/aug6.jpg"
    ],
    holidays: []
  },
  {
    key: "september",
    label: "September",
    theme: "Innovation",
    subtitle: "Culinary innovation and R&D",
    spots: [
      { name: "The Golden Thumb Statue", note: "Quirky visual hook for innovation and bold ideas." }
    ],
    images: [
      "images/sep1.jpg","images/sep2.jpg","images/sep3.jpg",
      "images/sep4.jpg","images/sep5.jpg","images/sep6.jpg"
    ],
    holidays: []
  },
  {
    key: "october",
    label: "October",
    theme: "Our team",
    subtitle: "Celebrating the people behind the brand",
    spots: [
      { name: "Museum of Islamic Art", note: "Cultural gravitas for chef profiles and leadership features." },
      { name: "The City Gallery", note: "Artistic lens for talent, training, and creativity." }
    ],
    images: [
      "images/oct1.jpg","images/oct2.jpg","images/oct3.jpg",
      "images/oct4.jpg","images/oct5.jpg","images/oct6.jpg"
    ],
    holidays: []
  },
  {
    key: "november",
    label: "November",
    theme: "Compliance",
    subtitle: "Food safety, governance and trust",
    spots: [
      { name: "Al Zubara Fort", note: "Symbolise resilience and strong foundations in compliance stories." }
    ],
    images: [
      "images/nov1.jpg","images/nov2.jpg","images/nov3.jpg",
      "images/nov4.jpg","images/nov5.jpg","images/nov6.jpg"
    ],
    holidays: []
  },
  {
    key: "december",
    label: "December",
    theme: "Year in review",
    subtitle: "Highlights, testimonials & 2027 vision",
    spots: [
      { name: "Museum of Islamic Art", note: "End‑of‑year reflections with Doha’s skyline as a backdrop." }
    ],
    images: [
      "images/dec1.jpg","images/dec2.jpg","images/dec3.jpg",
      "images/dec4.jpg","images/dec5.jpg","images/dec6.jpg"
    ],
    holidays: []
  }
];

/* Build months grid */
const gridEl = document.getElementById('monthsGrid');
gridEl.innerHTML = months.map(m => `
  <article class="month-card" data-month="${m.key}" tabindex="0" aria-label="${m.label}">
    <div class="month-inner">
      <header class="month-header">
        <div class="month-left">
          <span class="month-flag" aria-hidden="true"></span>
          <span class="month-name">${m.label}</span>
        </div>
        <span class="month-theme-tag">${m.theme}</span>
      </header>
      <div class="month-subtitle">${m.subtitle}</div>
      <button class="month-cta" data-open="${m.key}" aria-label="Open ${m.label} details">
        <span class="icon">⟶</span>
        <span>Open month playbook</span>
      </button>
    </div>
  </article>
`).join('');

/* Modal elements */
const modalEl = document.getElementById('monthModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalSubtitleEl = document.getElementById('modalSubtitle');
const holidayBadgesEl = document.getElementById('holidayBadges');
const spotsListEl = document.getElementById('spotsList');
const carouselEl = document.getElementById('carousel');
const dotsEl = document.getElementById('carouselDots');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function openModal(monthKey) {
  const month = months.find(m => m.key === monthKey);
  if (!month) return;

  modalTitleEl.textContent = month.label;
  modalSubtitleEl.textContent = month.subtitle;

  // Holidays
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

  // Tourist spots
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

  // Carousel items (up to 6)
  const items = (month.images || []).slice(0, 6);
  carouselEl.innerHTML = items.map((src, i) => `
    <figure class="carousel-item" data-index="${i}">
      <img src="${src}" alt="${month.label} highlight ${i+1}">
      <figcaption class="caption">${month.label} — visual highlight ${i+1}</figcaption>
    </figure>
  `).join('');

  // Dots
  dotsEl.innerHTML = items.map((_, i) =>
    `<button class="dot${i===0?' active':''}" data-dot="${i}" aria-label="Go to slide ${i+1}"></button>`
  ).join('');

  // Reset scroll to first item
  requestAnimationFrame(() => {
    carouselEl.scrollTo({ left: 0, behavior: 'instant' });
  });

  modalEl.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalEl.setAttribute('aria-hidden', 'true');
}

/* Date formatting helper */
function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString(undefined, opts);
}

/* Event delegation for opening/closing modal */
document.addEventListener('click', (e) => {
  const openKey = e.target.closest('[data-open]')?.getAttribute('data-open');
  if (openKey) openModal(openKey);

  if (e.target.closest('[data-close]') || e.target.dataset.close === 'true') {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  // Enter/Space on month-card opens
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.month-card')) {
    const mk = e.target.closest('.month-card').getAttribute('data-month');
    e.preventDefault();
    openModal(mk);
  }
  // ESC closes
  if (e.key === 'Escape') closeModal();
});

/* Carousel controls */
prevBtn.addEventListener('click', () => snapTo('prev'));
nextBtn.addEventListener('click', () => snapTo('next'));

dotsEl.addEventListener('click', (e) => {
  const dot = e.target.closest('[data-dot]');
  if (!dot) return;
  const index = parseInt(dot.getAttribute('data-dot'), 10);
  const targetItem = carouselEl.querySelector(`.carousel-item[data-index="${index}"]`);
  if (targetItem) targetItem.scrollIntoView({ behavior: 'smooth', inline: 'start' });
});

/* Sync active dot on scroll */
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

/* Simple focus guard inside modal */
document.addEventListener('focusin', (e) => {
  if (modalEl.getAttribute('aria-hidden') === 'true') return;
  if (!modalEl.contains(e.target)) {
    const focusable = modalEl.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusable || modalEl).focus();
  }
});
