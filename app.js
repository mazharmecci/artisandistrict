/* Month data:
   - cardImage: hero on landing grid (Jan.PNG etc.)
   - images: actual carousel assets (you map these to the suggested spots)
   - spots: tourist spots + how they tie to the theme
   - holidays: key dates and observances
*/

const months = [
  {
    key: "january",
    label: "January",
    theme: "Brand & vision",
    subtitle: "Brand authority, vision and systems",
    cardImage: "images/Jan.PNG",
    spots: [
      { name: "Museum of Islamic Art", note: "Architectural icon that mirrors precision and timeless design." },
      { name: "Doha Skyline", note: "Panoramic city view that suggests ambition and forward vision." },
      { name: "National Museum of Qatar", note: "Desert‑rose design for heritage‑meets‑modernity narratives." }
    ],
    images: [
      "images/jan-mia.jpg",          // Museum of Islamic Art
      "images/jan-skyline.jpg",      // Doha skyline
      "images/jan-nmoq.jpg",         // National Museum of Qatar
      "images/jan-brand1.jpg",
      "images/jan-brand2.jpg",
      "images/jan-brand3.jpg"
    ],
    holidays: [
      { dateISO: "2026-01-01", label: "New Year’s Day" }
    ]
  },
  {
    key: "february",
    label: "February",
    theme: "Ramadan prep & sports",
    subtitle: "Early Ramadan planning & National Sports Day",
    cardImage: "images/Feb.PNG",
    spots: [
      { name: "Aspire Park", note: "Green, active setting for movement, wellness and pre‑Ramadan resets." },
      { name: "Khalifa Stadium", note: "Sports landmark aligned with performance and national energy." },
      { name: "Flag Plaza", note: "Patriotic backdrop for community‑driven sports and gatherings." }
    ],
    images: [
      "images/feb-Baladna-Farm-Park.jpg",
      "images/feb-khalifa.jpg",
      "images/feb-Sheikh-Abdulla-Bin-Zaid-AlMahmoud.jpg",
      "images/feb-aspire-park.jpg",
      "images/feb-prep2.jpg",
      "images/feb-prep3.jpg"
    ],
    holidays: [
      { dateISO: "2026-02-10", label: "National Sports Day (Qatar) — confirm date" }
    ]
  },
  {
    key: "march",
    label: "March",
    theme: "Ramadan activation",
    subtitle: "Ramadan activation and community focus",
    cardImage: "images/Mar.PNG",
    spots: [
      { name: "Souq Waqif", note: "Community heart of Doha, ideal for night‑time Ramadan stories." },
      { name: "Katara Cultural Village", note: "Blends culture, faith and gathering spaces in one frame." },
      { name: "Imam Muhammad ibn Abd al-Wahhab Mosque", note: "Spiritual anchor for devotional storytelling." }
    ],
    images: [
      "images/mar-souq-waqif.jpg",
      "images/mar-katara.jpg",
      "images/mar-Fanar.jpg",
      "images/mar-inlandsea.jpg",
      "images/mar-Aspire-Zone-Foundation.jpg",
      "images/mar-Al-Shahaniya-camel-racetrack.jpg"
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
    spots: [
      { name: "The Pearl-Qatar", note: "Upscale waterfront living, perfect for premium Eid hospitality." },
      { name: "Villaggio Mall", note: "Venetian‑inspired interiors for gifting and retail experiences." },
      { name: "Al Hazm", note: "Luxury complex that mirrors high‑touch culinary service." }
    ],
    images: [
      "images/apr-pearl.jpg",
      "images/apr-villaggio.jpg",
      "images/apr-alhazm.jpg",
      "images/apr-pearldome.jpg",
      "images/apr-Imam-Abdul-Wahhab-mosque.jpg",
      "images/apr-zubarah.jpg"
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
    spots: [
      { name: "Msheireb Downtown Doha", note: "Modern streetscapes that suit cafe and bakery shots." },
      { name: "Local bakeries", note: "Close‑up artisan workbenches and ovens in Doha neighbourhoods." },
      { name: "Gold Souq area", note: "Textures and detail for grain, spice and ingredient narratives." }
    ],
    images: [
      "images/may-msheireb.jpg",
      "images/Qanat-Quartier.jpg",
      "images/may-bakery2.jpg",
      "images/may-bread1.jpg",
      "images/may-bread2.jpg",
      "images/may-pastry1.jpg"
    ],
    holidays: []
  },
  {
    key: "june",
    label: "June",
    theme: "Industrial catering",
    subtitle: "Scale, safety and nutrition at volume",
    cardImage: "images/Jun.PNG",
    spots: [
      { name: "Doha Corniche", note: "Long‑form visual metaphor for scale and flow." },
      { name: "Hamad International Airport (food hubs)", note: "Subtle nod to travel catering and logistics." },
      { name: "Lusail Stadium", note: "Signals mega‑event readiness and high‑volume service." }
    ],
    images: [
      "images/jun-corniche.jpg",
      "images/jun-hia.jpg",
      "images/jun-lusail.jpg",
      "images/jun-catering1.jpg",
      "images/jun-catering2.jpg",
      "images/jun-catering3.jpg"
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
    cardImage: "images/Jul.PNG",
    spots: [
      { name: "BoxPark", note: "Container‑inspired modernity, perfect for canteen design analogies." },
      { name: "City Center Mall", note: "Everyday flow and volume for service rhythm stories." },
      { name: "Al Bidda Park", note: "Relaxed outdoor scenes that echo break‑time moments." }
    ],
    images: [
      "images/jul-boxpark.jpg",
      "images/jul-citycenter.jpg",
      "images/jul-albidda.jpg",
      "images/jul-line1.jpg",
      "images/jul-line2.jpg",
      "images/jul-line3.jpg"
    ],
    holidays: []
  },
  {
    key: "august",
    label: "August",
    theme: "Sustainability",
    subtitle: "Sustainability & mindful sourcing",
    cardImage: "images/Aug.PNG",
    spots: [
      { name: "MIA Park", note: "Greenspace that holds both skyline and sustainability in one view." },
      { name: "Al Thakira Mangroves", note: "Natural ecosystem for sourcing, biodiversity and balance." },
      { name: "Desert eco‑camps", note: "Low‑impact experiences that align with responsible hospitality." }
    ],
    images: [
      "images/aug-mia-park.jpg",
      "images/aug-mangroves.jpg",
      "images/aug-eco-camp.jpg",
      "images/aug-Khor-Al-Adaid-Beach.jpg",
      "images/aug-Heenat-Salma-Farm.jpg",
      "images/aug-Explore-North-Sedra-Farm.jpg"
    ],
    holidays: []
  },
  {
    key: "september",
    label: "September",
    theme: "Innovation",
    subtitle: "Culinary innovation and R&D",
    cardImage: "images/Sept.PNG",
    spots: [
      { name: "Katara Art Center", note: "Creative hub to stage experimental plating and concepts." },
      { name: "Qatar National Library", note: "Futuristic architecture for knowledge‑driven food R&D." },
      { name: "Education City (Innovation hubs)", note: "Connects your lab work with Qatar’s innovation story." }
    ],
    images: [
      "images/sep-katara-art.jpg",
      "images/sep-qnl.jpg",
      "images/sep-education-city.jpg",
      "images/sep-educity2.jpg",
      "images/sep-CeremonialCourt.jpg",
      "images/sep-Dahl-Al-Misfir.jpg"
    ],
    holidays: []
  },
  {
    key: "october",
    label: "October",
    theme: "Our team",
    subtitle: "Celebrating the people behind the brand",
    cardImage: "images/Oct.PNG",
    spots: [
      { name: "Museum of Islamic Art", note: "Hero background for chef portraits and leadership features." },
      { name: "Katara Amphitheatre", note: "Grand stage metaphor for recognising your people." },
      { name: "Qatar Foundation / Education City", note: "Learning‑rich environment to pair with training stories." }
    ],
    images: [
      "images/oct-mia-team.jpg",
      "images/oct-katara-amphi.jpg",
      "images/oct-qf.jpg",
      "images/oct-team1.jpg",
      "images/oct-team2.jpg",
      "images/oct-team3.jpg"
    ],
    holidays: []
  },
  {
    key: "november",
    label: "November",
    theme: "Compliance",
    subtitle: "Food safety, governance and trust",
    cardImage: "images/Nov.PNG",
    spots: [
      { name: "Qatar National Convention Centre", note: "Signals formal standards, conferences and governance." },
      { name: "Government district facades", note: "Visual shorthand for regulation and oversight." },
      { name: "Qatar University", note: "Association with research, standards and rigour." }
    ],
    images: [
      "images/nov-qncc.jpg",
      "images/nov-govt.jpg",
      "images/nov-qu.jpg",
      "images/nov-compliance1.jpg",
      "images/nov-compliance2.jpg",
      "images/nov-compliance3.jpg"
    ],
    holidays: []
  },
  {
    key: "december",
    label: "December",
    theme: "Year in review",
    subtitle: "Highlights, testimonials & 2027 vision",
    cardImage: "images/Dec.PNG",
    spots: [
      { name: "Doha Corniche fireworks", note: "Celebratory skyline for wrap‑ups and milestones." },
      { name: "Lusail Marina", note: "Modern waterfront to frame future‑facing announcements." },
      { name: "West Bay skyline", note: "Night‑time cityscape for year‑end recap and next‑year vision." }
    ],
    images: [
      "images/dec-fireworks.jpg",
      "images/dec-lusail-marina.jpg",
      "images/dec-westbay.jpg",
      "images/dec-review1.jpg",
      "images/dec-review2.jpg",
      "images/dec-review3.jpg"
    ],
    holidays: []
  }
];

/* Build landing grid with top image + gradient band + CTA (as in previous file) */
const gridEl = document.getElementById('monthsGrid');
gridEl.innerHTML = months.map(m => `
  <article class="month-card" data-month="${m.key}" tabindex="0" aria-label="${m.label}">
    <div class="month-image" style="background-image:url('${m.cardImage}')"></div>
    <div class="month-inner">
      <header class="month-header">
        <div class="month-left">
          <span class="month-flag" aria-hidden="true"></span>
          <span class="month-name">${m.label}</span>
        </div>
        <span class="month-theme-tag">${m.theme}</span>
      </header>
      <div class="month-subtitle">${m.subtitle}</div>
      <button class="month-cta" type="button" data-open="${m.key}" aria-label="Open ${m.label} playbook">
        <span class="icon">⟶</span>
        <span>Open month playbook</span>
      </button>
    </div>
  </article>
`).join('');

/* Modal + carousel logic: reuse your existing implementation, with captions tied to spots where possible */

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

  // Tourist spots list
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

  // Carousel items; map first N images to spot names if available
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

  // Dots
  dotsEl.innerHTML = imgs.map((_, i) =>
    `<button class="dot${i===0?' active':''}" data-dot="${i}" aria-label="Go to slide ${i+1}"></button>`
  ).join('');

  requestAnimationFrame(() => {
    carouselEl.scrollTo({ left: 0, behavior: 'instant' });
  });

  modalEl.setAttribute('aria-hidden', 'false');
}

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

/* Open / close events */
document.addEventListener('click', (e) => {
  const openKey = e.target.closest('[data-open]')?.getAttribute('data-open');
  if (openKey) openModal(openKey);

  if (e.target.closest('[data-close]') || e.target.dataset.close === 'true') {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.month-card')) {
    const mk = e.target.closest('.month-card').getAttribute('data-month');
    e.preventDefault();
    openModal(mk);
  }
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

/* Sync dots */
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

/* Snap nav */
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
