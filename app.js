/* Month data with marquee statements */
const months = [
  {
    key: "january",
    label: "January",
    theme: "Brand & vision",
    subtitle: "Brand authority, vision and systems",
    cardImage: "images/Jan.PNG",
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
    cardImage: "images/Feb.PNG",
    marqueeAr: "نحن نهيئ القلوب والعقول لشهر رمضان، ونحتفل بروح المجتمع والصحة والتفوق الرياضي. مطابخنا جاهزة لتغذية الأجساد والروح خلال هذا الشهر الكريم",
    marquee: "Artisan District: Preparing hearts and minds for Ramadan, we celebrate the spirit of community, wellness, and athletic excellence. Our kitchens stand ready to nourish bodies and souls during this sacred month.",
    spots: [
      { name: "Baladna Park", note: "Baladna Park is a family-friendly destination in Qatar, offering a blend of farm life experiences, outdoor activities, and natural beauty." },
      { name: "Baladna Farm", note: "This unique and spectacular park offers a combination of fun activities, beautiful green spaces, and the opportunity to learn about farm life." },
      { name: "Baladna Park", note: "The park offers a variety of attractions that cater to different interests, from animal encounters to wonderful adventure activities." }
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
    cardImage: "images/Mar.PNG",
    marqueeAr: "منطقة الحرفيين: خلال شهر رمضان، نرتقي بتقليد إفطار الصائم من خلال قوائم منتقاة بعناية تكرم التراث وتحتفل بالمجتمع. كل وجبة تحكي قصة من العناية والتواصل",
    marquee: "Artisan District: Artisan District: During Ramadan, we elevate the tradition of breaking fast with thoughtfully curated menus that honor heritage while celebrating community. Every meal tells a story of care and connection.",
    spots: [
      { name: "Souq Waqif", note: "Community heart of Doha, ideal for night‑time Ramadan stories." },
      { name: "Katara Cultural Village", note: "Blends culture, faith and gathering spaces in one frame." },
      { name: "Imam Muhammad ibn Abd al-Wahhab Mosque", note: "Spiritual anchor for devotional storytelling." }
    ],
    images: [
      "images/mar-souq-waqif.jpg",
      "images/mar-katara.jpg",
      "images/mar-Fanar.jpg",
      "images/mar-market.jpg",
      "images/mar-Aspire-Zone-Foundation.jpg"
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
      "images/apr-alhazm.jpg",
      "images/apr-pearldome.jpg",
      "images/apr-Imam-Abdul-Wahhab-mosque.jpg"
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
      { name: "Local bakeries", note: "Close‑up artisan workbenches and ovens in Doha neighbourhoods." },
      { name: "Gold Souq area", note: "Textures and detail for grain, spice and ingredient narratives." }
    ],
    images: [
      "images/may-msheireb.jpg",
      "images/may-Qanat-Quartier.jpg",
      "images/may-bakery2.jpg",
      "images/may-bread1.jpg",
      "images/may-bread2.jpg"
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
      { name: "Doha Corniche", note: "Long‑form visual metaphor for scale and flow." },
      { name: "Hamad International Airport (food hubs)", note: "Subtle nod to travel catering and logistics." },
      { name: "Lusail Stadium", note: "Signals mega‑event readiness and high‑volume service." }
    ],
    images: [
      "images/jun-corniche.jpg",
      "images/jun-hia.jpg",
      "images/jun-lusail.jpg",
      "images/jun-catering1.jpg",
      "images/jun-catering2.jpg"
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
    marqueeAr: "المقصف أكثر من كونه كافيتيريا—إنه مركز للصحة والاتصال والتغذية. مساحاتنا الحديثة وقوائم الطعام المدروسة تمنح الطاقة لكل يوم عمل",
    marquee: "Artisan District: A canteen is more than a cafeteria—it's a hub of wellness, connection, and nourishment. Our modern spaces and thoughtful menus energize every workday.",
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
      "images/jul-line2.jpg"
    ],
    holidays: []
  },
  {
    key: "august",
    label: "August",
    theme: "Sustainability",
    subtitle: "Sustainability & mindful sourcing",
    cardImage: "images/Aug.PNG",
    marqueeAr: "الاستدامة ليست موضة—إنها مسؤوليتنا. من التوريد المحلي إلى ممارسات عدم إهدار الموارد، كل اختيار يعكس التزامنا بالكوكب والأجيال القادمة",
    marquee: "Artisan District: Sustainability isn't a trend—it's our responsibility. From local sourcing to zero-waste practices, every choice reflects our commitment to the planet and future generations.",
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
      "images/aug-Heenat-Salma-Farm.jpg"
    ],
    holidays: []
  },
  {
    key: "september",
    label: "September",
    theme: "Innovation",
    subtitle: "Culinary innovation and R&D",
    cardImage: "images/Sept.PNG",
    marqueeAr: "منطقة الحرفيين: الابتكار يغذي مطبخنا. التجارب الجريئة، والتقنيات المتطورة، والإبداع بلا خوف تدفع حدود الطهي وتعيد تعريف الممكن على كل طبق",
    marquee: "Artisan District: Innovation fuels our kitchen. Bold experiments, cutting-edge techniques, and fearless creativity push culinary boundaries and redefine what's possible on every plate.",
    spots: [
      { name: "Katara Art Center", note: "Creative hub to stage experimental plating and concepts." },
      { name: "Qatar National Library", note: "Futuristic architecture for knowledge‑driven food R&D." },
      { name: "Education City (Innovation hubs)", note: "Connects your lab work with Qatar's innovation story." }
    ],
    images: [
      "images/sep-katara-art.jpg",
      "images/sep-qnl.jpg",
      "images/sep-education-city.jpg",
      "images/sep-educity2.jpg",
      "images/sep-CeremonialCourt.jpg"
    ],
    holidays: []
  },
  {
    key: "october",
    label: "October",
    theme: "Our team",
    subtitle: "Celebrating the people behind the brand",
    cardImage: "images/Oct.PNG",
    marqueeAr: "فريقنا هو نبض حياتنا. الطهاة الموهوبون، والموظفون المتفانون، والأفراد المتحمسون يجلبون التميز إلى الحياة كل يوم، ويخلقون طعامًا يغذي ويلهم.",
    marquee: "Artisan District: Our team is our heartbeat. Talented chefs, dedicated staff, and passionate individuals bring excellence to life every single day, creating food that nourishes and inspires.",
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
      "images/oct-team2.jpg"
    ],
    holidays: []
  },
  {
    key: "november",
    label: "November",
    theme: "Compliance",
    subtitle: "Food safety, governance and trust",
    cardImage: "images/Nov.PNG",
    marqueeAr: "منطقة الحرفيين: يُكتسب الثقة من خلال الالتزام الدائم بالسلامة والنظافة والامتثال. كل معيار، كل تدقيق، كل شهادة هي وعدنا برفاهيتك",
    marquee: "Artisan District: Trust is earned through unwavering commitment to safety, hygiene, and compliance. Every standard, every audit, every certification is our promise to your wellbeing.",
    spots: [
      { name: "Qatar National Convention Centre", note: "Signals formal standards, conferences and governance." },
      { name: "Government district facades", note: "Visual shorthand for regulation and oversight." },
      { name: "Qatar University", note: "Association with research, standards and rigour." }
    ],
    images: [
      "images/nov-qncc.jpg",
      "images/nov-govt.jpg",
      "images/nov-qu.jpg",
      "images/nov-iconiclandmark.jpg",
      "images/nov-dohadistrict.jpg"
    ],
    holidays: []
  },
  {
    key: "december",
    label: "December",
    theme: "Year in review",
    subtitle: "Highlights, testimonials & 2027 vision",
    cardImage: "images/Dec.PNG",
    marqueeAr: "بينما نحتفل بعام 2026، نتأمل في الإنجازات التي تحققت والصلات التي تم بناؤها. معًا، غذّينا الآلاف ووضعنا الأساس لعام 2027 الجريء",
    marquee: "Artisan District: As we celebrate 2026, we reflect on milestones achieved and connections forged. Together, we've nourished thousands and set the foundation for a bold 2027.",
    spots: [
      { name: "Doha Corniche fireworks", note: "Celebratory skyline for wrap‑ups and milestones." },
      { name: "Lusail Marina", note: "Modern waterfront to frame future‑facing announcements." },
      { name: "West Bay skyline", note: "Night‑time cityscape for year‑end recap and next‑year vision." }
    ],
    images: [
      "images/dec-aquapark.jpg",
      "images/dec-lusail-marina.jpg",
      "images/dec-westbay.jpg",
      "images/dec-Retaj-Salwa-Resort-Spa.jpg",
      "images/dec-banana-island.jpg"
    ],
    holidays: []
  }
];

/* Build landing grid with marquee */
const gridEl = document.getElementById('monthsGrid');

gridEl.innerHTML = months.map(m => {
  const thumbs = (m.images || []).slice(0, 5);
  return `
    <article class="month-card"
             data-month="${m.key}"
             data-theme="${m.theme}"
             tabindex="0"
             aria-label="${m.label}">
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
    }, 5000);  /* Changed from 3000 to 5000 */
  });
}

startThumbLoop();

