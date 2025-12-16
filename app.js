/* Month data:
   - cardImage: hero on landing grid (Jan.PNG etc.)
   - images: actual carousel assets (mapped to the suggested spots)
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
      "images/may-Qanat-Quartier.jpg",
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

/* Build landing grid with top image + gradient band + CTA */
const gridEl = document.getElementById('monthsGrid');
gridEl.innerHTML = months.map(m => `
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
      <button class="month-cta" type="button" data-open="${m.key}" aria-label="Open ${m.label} playbook">
        <span class="icon">⟶</span>
        <span>Open month playbook</span>
      </button>
    </div>
  </article>
`).join('');
