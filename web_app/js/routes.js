/**
 * V2 Route Matrix, Split-Pane Controller & Secure Overlay Compiler
 * Optimized for the Wanderlog Split-Pane split design, zero XSS, and local high-fidelity simulation.
 */

const RouteEngine = (() => {
  // Core Arusha Inner-City Loop Database Matrix
  const ARUSHA_LOOP_PAYLOAD = [
    {
      index: 0,
      time: "08:00",
      category: "Morning Anchor",
      title: "Fifi's Café",
      image: "assets/clock-tower.jpg",
      swahiliPhrase: "Kahawa ya kienyeji (Traditional coffee)",
      shortDesc: "Kickstart your adventure at Fifi's Café, centered directly beside the historic mid-point landmark (Arusha Clock Tower). It's a bustling local favorite with wonderful breakfast items, reliable Wi-Fi, and single-origin Tanzanian espresso.",
      fullDesc: "Centered directly beside the historic midpoint landmark (Clock Tower), Fifi's Café is the ultimate morning anchor in Arusha. It's a highly vibrant, premium coffee shop that balances standard western amenities with incredible local flavor. The setting is bright, lively, and highly comfortable—perfect for orienting yourself before dive-bombing into local Bajaj transits. Spend this morning stop checking your map layers and pre-loading routing coordinates using their high-speed, stable Wi-Fi connection.",
      safetyTips: "Pre-load your offline maps now. The Wi-Fi is strong here—do not rely on cellular signal inside dense transit alleys later in the day.",
      swahiliLesson: "Ordering Food Dialogues:\n- 'Habari za asubuhi!' (Good morning!)\n- 'Nataka panini ya kuku na kahawa, tafadhali.' (I want a chicken panini and a coffee, please.)\n- 'Bei gani?' (How much is it?)\n- 'Asante sana!' (Thank you very much!)",
      audioGuide: "arusha_fifi_narration.mp3"
    },
    {
      index: 1,
      time: "09:30",
      category: "Heritage Stop",
      title: "The Tanzanite Experience",
      image: "assets/tanzanite.jpg",
      swahiliPhrase: "Madini ya Tanzanite (Tanzanite gemstones)",
      shortDesc: "Take a short 2-minute walking transfer to the Blue Plaza building. Scale up to the museum floor to discover the mesmerizing geology, mining history, and grading checklists of the rare Tanzanite gem, unique to Northern Tanzania.",
      fullDesc: "Located on the 3rd floor of the Blue Plaza building, just a 2-minute walk from the Clock Tower, The Tanzanite Experience offers a spectacular and secure deep dive into Tanzania's blue-violet crown jewel. You'll browse visual dioramas of the deep mines beneath Mt. Kilimanjaro and review the official Tanzanite grading system. Vetting gem quality (Color, Cut, Clarity, Carat) before browsing commercial showrooms protects you from street scams and ensures total bargaining power.",
      safetyTips: "Always head directly to the 3rd floor museum office. Avoid unauthorized street brokers outside the plaza offering 'cheap raw gemstones'—these are fake glass traps.",
      swahiliLesson: "Gem Trade & Quality Dialogues:\n- 'Hii ni Tanzanite halisi?' (Is this genuine Tanzanite?)\n- 'Naomba cheti cha ubora.' (Please show me the quality certificate.)\n- 'Nafanya mazungumzo tu.' (I am only browsing/discussing.)\n- 'Ni nzuri sana.' (It is very beautiful.)",
      audioGuide: "arusha_tanzanite_narration.mp3"
    },
    {
      index: 2,
      time: "11:00",
      category: "Transit Core",
      title: "Bajaj to Cultural Heritage Centre",
      image: "assets/hero.png",
      swahiliPhrase: "Safari ya Bajaj (Bajaj street safari)",
      shortDesc: "Spot a passing blue and yellow Bajaj (Tuk-Tuk) and negotiate the transfer down Dodoma Road to the Cultural Heritage Centre. Hold onto your hats—this is your first high-adrenaline local street safari!",
      fullDesc: "Cruising down Dodoma Road inside an open-cabin Bajaj is the true local transport texture of Arusha. You'll zip past local street vendors, palm trees, and vibrating municipal lanes. Negotiating a fair rate beforehand is key: target base pricing is 3,000 to 5,000 Tanzanian Shillings (TZS). Keep your bags placed securely on the floor panel between your feet, never dangling loosely over your shoulder near the open cabin frame where passersby could grab them.",
      safetyTips: "Secure your bags on the floor board. Do not hold your phone outside the cabin frame while taking photos—motorcycle riders sometimes grab exposed devices.",
      swahiliLesson: "Driver Bargaining Dialogues:\n- 'Naenda Cultural Heritage Centre. Bei ni 3,000 - 5,000 TZS. Asante.' (Show this huge text directly to the driver! It translates to: I am going to Cultural Heritage Centre. Price is 3,000 - 5,000 TZS. Thank you.)\n- 'Tafadhali endesha polepole.' (Please drive slowly.)\n- 'Hapa hapa, asante.' (Stop right here, thank you.)",
      audioGuide: "arusha_transit_narration.mp3"
    },
    {
      index: 3,
      time: "11:30",
      category: "Cultural Core",
      title: "Cultural Heritage Centre Gallery",
      image: "assets/cultural-heritage.jpg",
      swahiliPhrase: "Sanaa ya Kiafrika (African art masterpieces)",
      shortDesc: "Explore a massive, architectural masterpiece shaped like a traditional African shield. It houses the largest collection of pristine African art, wood carvings, historic weapons, and mask galleries on the continent.",
      fullDesc: "The Arusha Cultural Heritage Centre is an architectural marvel. Shaped like a massive traditional warrior shield, it stands as a global monument to African history and creative arts. The interior is a spiral ramp that leads you past towering ebony wood carvings, custom-painted canvases, and historic mask gallery rooms. The best unobstructed viewpoint for gorgeous panoramic photos is located beside the shield monument structures out in the main garden area.",
      safetyTips: "Do not wander aimlessly down the lower wings; climb straight up the central ramp to the top floor mask gallery showroom where the absolute best art collections are housed.",
      swahiliLesson: "Art & Museum Dialogues:\n- 'Naomba kupiga picha hapa?' (Am I allowed to take photos here?)\n- 'Sanaa hii imetengenezwa kwa nini?' (What material is this artwork made of?)\n- 'Mti wa Mpingo.' (Ebony wood.)\n- 'Ni kazi nzuri sana!' (This is excellent work!)",
      audioGuide: "arusha_gallery_narration.mp3"
    },
    {
      index: 4,
      time: "13:00",
      category: "Culinary Stop",
      title: "Arusha Coffee Lodge",
      image: "assets/coffee-lodge.webp",
      swahiliPhrase: "Shamba la kahawa (Coffee farm plantation)",
      shortDesc: "Zip down Dodoma Road in a secondary quick Bajaj hop to enter the leafy, peaceful acres of one of Tanzania's oldest coffee plantations. Sit in the garden lounge and order premium local roasts.",
      fullDesc: "Situated along the green slopes of Mount Meru, the Arusha Coffee Lodge is a tranquil culinary oasis. You'll escape the town's dust and step into a lush, leafy garden lounge. Ask to be seated in the outdoor garden pavilion, order their famous single-origin Tanzanian coffee, and enjoy a premium lunch while listening to the wind rustling through coffee leaves. This stop is perfect for unwinding and preparing for the logistics crossing to Njiro.",
      safetyTips: "Relax in the garden lounge. Vetted local private taxi drivers can be summoned from the lodge lobby desk if you need immediate assistance.",
      swahiliLesson: "Dining & Coffee Dialogues:\n- 'Naomba meza ya bustanini.' (I would like a table in the garden.)\n- 'Kahawa hii inatoka wapi?' (Where is this coffee sourced from?)\n- 'Inatoka Mlima Meru.' (It comes from Mount Meru.)\n- 'Lete bili, tafadhali.' (Please bring the bill.)",
      audioGuide: "arusha_coffee_narration.mp3"
    },
    {
      index: 5,
      time: "14:30",
      category: "Logistics Pivot",
      title: "Bypass Transfer to Njiro",
      image: "assets/hero.png",
      swahiliPhrase: "Usalama barabarani (Road safety coordinates)",
      shortDesc: "CRITICAL SAFETY LEG: Avoid Bajaj transits here! This leg crosses town limits on high-speed bypasses with heavy dust and traffic. Tap below to connect with a vetted saloon driver via WhatsApp for 20,000-30,000 TZS.",
      fullDesc: "Important logistical pivot crossing the town limits from Dodoma Road to Njiro. This leg crosses major national highway bypasses characterized by heavy logistics trucks, high-speed saloon traffic, and massive dust waves. A Bajaj is highly unsafe and uncomfortable for this leg. We require all Mizizi riders to utilize our direct WhatsApp shortcut below to engage a vetted, private saloon vehicle driver. Target base pricing is 20,000 to 30,000 TZS maximum.",
      safetyTips: "CRITICAL: Do not use a Bajaj here! Highway dust is severe and high-speed cross-town traffic makes open cabins dangerous. Use a private saloon car.",
      swahiliLesson: "Driver WhatsApp Booking Dialogues:\n- 'Nahitaji dereva wa saloon kutoka Coffee Lodge kwenda Njiro.' (I need a saloon car driver from Coffee Lodge to Njiro.)\n- 'Bei ni 20,000 - 30,000 TZS?' (Is the price 20,000 - 30,000 TZS?)\n- 'Asante, nakuja sasa hivi.' (Thank you, I am coming right now.)",
      audioGuide: "arusha_emergency_saloon.mp3"
    },
    {
      index: 6,
      time: "15:00",
      category: "Creative Stop",
      title: "Clay & Canvas (Njiro)",
      image: "assets/hero.png",
      swahiliPhrase: "Ufinyanzi na mvinyo (Pottery and banana wine)",
      shortDesc: "Unwind in Njiro's cozy creative compound. Paint gorgeous local pottery while tasting rich Tanzanian banana wine. Note: operations are strictly by appointment only—verify your reservation card.",
      fullDesc: "Clay & Canvas is Arusha's hidden creative sanctuary. Tucked away in the quiet green suburbs of Njiro, this cozy arts compound offers structured pottery painting and wine tasting seminars. You'll relax, paint traditional clay mugs, and sip local sweet banana wines under a covered canopy garden. It is an exceptional way to interact with local Tanzanian artists and purchase customized souvenirs.",
      safetyTips: "This creative seminar operates strictly by appointment. Ensure your reservation window was validated 24 hours prior using our direct link shortcut.",
      swahiliLesson: "Artistic & Creative Dialogues:\n- 'Naomba rangi zaidi, tafadhali.' (I would like more paint colors, please.)\n- 'Mvinyo hii ni tamu sana!' (This wine is very delicious!)\n- 'Nimetengeneza hii mwenyewe.' (I made this pottery myself.)\n- 'Kazi safi!' (Clean work / Excellent job!)",
      audioGuide: "arusha_clay_canvas.mp3"
    },
    {
      index: 7,
      time: "17:30",
      category: "Sundowner",
      title: "Rooftop Lounge at Gran Melia",
      image: "assets/gran-melia.jpg",
      swahiliPhrase: "Machweo ya Jua (Mt. Meru Sunset View)",
      shortDesc: "A five-star rooftop terrace offering breathtaking, unobstructed views of Mount Meru. Arrive by 17:45 sharp to watch the sky turn brilliant orange and purple directly over the volcanic peak.",
      fullDesc: "The Rooftop Lounge at the Gran Melia Arusha is the premier sundowner venue in Northern Tanzania. Situated on a luxury five-star terrace, it features a glass-railed observation platform pointing directly at the majestic, sharp volcanic peak of Mount Meru. Arriving by 17:45 is highly recommended, as the sunset colors paint the mountain in dramatic hues of orange, gold, and deep violet. Close out your day safari with premium cocktails and local appetizers.",
      safetyTips: "Walk past the central lobby to the elevator core and select the rooftop terrace layout. Smart casual dress is required—no open sandals or singlets.",
      swahiliLesson: "Sunset & Scenic Dialogues:\n- 'Mlima Meru unapendeza sana machweoni!' (Mount Meru looks beautiful at sunset!)\n- 'Kinywaji kiko wapi?' (Where is the drink?)\n- 'Kiti cha nje, tafadhali.' (A seat outside, please.)\n- 'Hapa ni pazuri mno.' (This place is absolutely wonderful.)",
      audioGuide: "arusha_gran_melia.mp3"
    },
    {
      index: 8,
      time: "19:00",
      category: "Dinner Anchor",
      title: "Amber Restaurant",
      image: "assets/hero.png",
      swahiliPhrase: "Swahili-Indian Fusion (Swahili dinner anchor)",
      shortDesc: "Close out your incredible 9-hour Arusha street safari by dining at Amber, a stunning restaurant celebrated for its fresh Swahili-Indian dishes, clay-oven naans, and Chicken Makhanwala.",
      fullDesc: "Amber Restaurant is the crown jewel of Arusha's Swahili-Indian culinary fusion scene. Meticulously blending rich Indian tandoori spices with traditional Swahili coconut milk bases, Amber offers an explosion of flavors in a cozy, premium-lit interior layout. Request their signature Chicken Makhanwala paired with hot, clay-oven garlic naan bread to close out your incredible 9-hour Arusha city loop.",
      safetyTips: "Make a dinner table reservation via the app before arriving. Security is tight here—private secure parking is provided for your salon driver.",
      swahiliLesson: "Dining & Gratitude Dialogues:\n- 'Chakula kilikuwa kitamu sana, asante sana!' (The dinner was very delicious, thank you very much!)\n- 'Tafadhali leta bili.' (Please bring the bill.)\n- 'Tutaonana tena badaye.' (We will see you again later.)\n- 'Mungu akubariki!' (God bless you!)",
      audioGuide: "arusha_dinner_narration.mp3"
    }
  ];

  // Helper to securely clear and update DOM node text safely to protect against XSS
  const safeText = (elementId, text) => {
    const el = document.getElementById(elementId);
    if (el) el.textContent = text;
  };

  // Snappy Content slide-in animation helper (Requirement 2)
  const triggerSlideInAnimation = () => {
    const body = document.getElementById('details-pane-body');
    if (body) {
      body.classList.remove('animate-slide-in-right');
      void body.offsetWidth; // Force reflow to re-trigger CSS keyframes
      body.classList.add('animate-slide-in-right');
    }
  };

  // Expand Details Pane helper (Requirement 1 & 3)
  const expandDetailsPane = () => {
    const detailsCol = document.getElementById('sidebar-details-column');
    const overlayClick = document.getElementById('map-click-overlay');
    const toggleArrow = document.getElementById('details-toggle-arrow');
    
    if (detailsCol) {
      detailsCol.classList.remove('collapsed');
    }
    if (overlayClick) {
      overlayClick.classList.add('active');
    }
    if (toggleArrow) {
      toggleArrow.style.transform = 'rotate(0deg)'; // Points left (default open state)
    }
  };

  // Helper to open full detailing overlay screen securely
  const openOverlay = (title, compileContentFn) => {
    const overlay = document.getElementById('detail-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayContent = document.getElementById('overlay-content');

    if (!overlay || !overlayTitle || !overlayContent) return;

    // Securely set Title
    overlayTitle.textContent = title;

    // Clear contents first
    overlayContent.innerHTML = '';

    // Invoke compiler function that creates sanitized DOM elements
    compileContentFn(overlayContent);

    // Slide up active class
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Render locations sub-menu detail card in Column 2
  const showLocationDetails = (index) => {
    expandDetailsPane();
    triggerSlideInAnimation();

    const node = ARUSHA_LOOP_PAYLOAD[index];
    if (!node) return;

    const detailsTitle = document.getElementById('details-pane-title');
    const detailsSubtitle = document.getElementById('details-pane-subtitle');
    const detailsBody = document.getElementById('details-pane-body');

    if (!detailsTitle || !detailsSubtitle || !detailsBody) return;

    // Set Pane Headers
    detailsTitle.textContent = node.title;
    detailsSubtitle.textContent = `Time: ${node.time} | ${node.category}`;

    // Populate Details Body
    detailsBody.innerHTML = '';

    // 1. Banner Image
    const img = document.createElement('img');
    img.src = node.image;
    img.className = 'w-full h-32 object-cover rounded-xl border border-stone-200';
    img.alt = node.title;
    detailsBody.appendChild(img);

    // 2. Swahili Quick Phrase badge
    const lingoBadge = document.createElement('div');
    lingoBadge.className = 'badge-gold text-[10px] py-1.5 px-3 rounded-lg flex items-center gap-1.5 font-bold tracking-wider';
    lingoBadge.innerHTML = `🗣️ <span class="truncate">${node.swahiliPhrase}</span>`;
    detailsBody.appendChild(lingoBadge);

    // 3. 50-word quick description (Sanitized via textContent)
    const desc = document.createElement('p');
    desc.className = 'text-xs text-stone-600 font-semibold leading-relaxed';
    desc.textContent = node.shortDesc;
    detailsBody.appendChild(desc);

    // 4. Gold "Read More" button
    const btn = document.createElement('button');
    btn.className = 'w-full py-3 btn-gold text-xs uppercase tracking-widest font-black shadow-md mt-auto';
    btn.textContent = "Read More";
    btn.addEventListener('click', () => {
      // Trigger dynamic detail overlay compilation
      openOverlay(`${node.title} - Detailed Guide`, (container) => {
        // Build sanitized overlay details
        
        // Image
        const fullImg = document.createElement('img');
        fullImg.src = node.image;
        fullImg.className = 'w-full h-56 object-cover rounded-2xl border border-stone-200 mb-6';
        container.appendChild(fullImg);

        // Category Badge
        const catBadge = document.createElement('span');
        catBadge.className = 'badge-jungle text-xs mb-3 inline-block';
        catBadge.textContent = `${node.time} | ${node.category}`;
        container.appendChild(catBadge);

        // Heading
        const titleEl = document.createElement('h3');
        titleEl.className = 'text-2xl font-black text-slate-800 tracking-tight mb-4';
        titleEl.textContent = node.title;
        container.appendChild(titleEl);

        // Core Description
        const descEl = document.createElement('p');
        descEl.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
        descEl.textContent = node.fullDesc;
        container.appendChild(descEl);

        // Transit/Safety Warn Card
        const warnCard = document.createElement('div');
        warnCard.className = 'bg-stone-50 border border-stone-200 rounded-xl p-4 flex gap-3 items-start mb-6 text-xs text-stone-600';
        warnCard.innerHTML = `<span class="text-lg">⚠️</span>
          <div>
            <p class="font-extrabold uppercase text-[10px] tracking-widest text-slate-500 mb-0.5">Logistics & Safety Warning</p>
            <p class="font-medium">${node.safetyTips}</p>
          </div>`;
        container.appendChild(warnCard);

        // Swahili Lesson Title
        const lessonTitle = document.createElement('h4');
        lessonTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-2';
        lessonTitle.textContent = "🗣️ Local Swahili Lesson";
        container.appendChild(lessonTitle);

        // Swahili Dialogues
        const swahiliEl = document.createElement('pre');
        swahiliEl.className = 'bg-stone-50 rounded-xl p-4 text-xs font-semibold text-stone-700 leading-relaxed whitespace-pre-wrap font-sans';
        swahiliEl.textContent = node.swahiliLesson;
        container.appendChild(swahiliEl);

        // Cinematic Simulated Audio Guide Section
        const audioTitle = document.createElement('h4');
        audioTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-2';
        audioTitle.textContent = "🎧 Atmospheric Audio Guide";
        container.appendChild(audioTitle);

        // Simulated HTML5 Audio lingo player controls
        const audioSim = document.createElement('div');
        audioSim.className = 'bg-emerald-950 text-white rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm';
        
        const audioInfo = document.createElement('div');
        audioInfo.className = 'space-y-0.5';
        
        const audioTrackName = document.createElement('p');
        audioTrackName.className = 'text-xs font-black tracking-wider text-ochre uppercase';
        audioTrackName.textContent = "Arusha Local Narration Track";
        
        const audioStatus = document.createElement('p');
        audioStatus.className = 'text-[10px] text-emerald-300 font-semibold';
        audioStatus.id = `sim-audio-status-${node.index}`;
        audioStatus.textContent = "Status: Connected (Ready to Play)";

        audioInfo.appendChild(audioTrackName);
        audioInfo.appendChild(audioStatus);

        const playBtn = document.createElement('button');
        playBtn.className = 'p-3 bg-ochre text-jungle rounded-full font-black text-xs hover:bg-white transition-colors flex items-center justify-center';
        playBtn.innerHTML = `
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" id="sim-audio-icon-${node.index}">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `;

        let isPlaying = false;
        playBtn.addEventListener('click', () => {
          isPlaying = !isPlaying;
          const statusText = document.getElementById(`sim-audio-status-${node.index}`);
          const playIcon = document.getElementById(`sim-audio-icon-${node.index}`);
          
          if (isPlaying) {
            statusText.textContent = "Status: Streaming Narrator Audio... 🎧";
            statusText.style.color = '#34D399'; // Lighter green
            playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`; // Pause symbol
          } else {
            statusText.textContent = "Status: Paused";
            statusText.style.color = '#AEF3D6';
            playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`; // Play symbol
          }
        });

        audioSim.appendChild(audioInfo);
        audioSim.appendChild(playBtn);
        container.appendChild(audioSim);
      });
    });

    detailsBody.appendChild(btn);
  };

  // Helper to compile full Route 1 Overview contents (Requirement 3)
  const compileOverviewContents = (container) => {
    // Image
    const fullImg = document.createElement('img');
    fullImg.src = 'assets/hero.png';
    fullImg.className = 'w-full h-56 object-cover border border-stone-200 mb-6';
    container.appendChild(fullImg);

    // Heading
    const titleEl = document.createElement('h3');
    titleEl.className = 'text-2xl font-black text-slate-800 tracking-tight mb-4';
    titleEl.textContent = "Arusha Bajaj Safari: Morning Brief & Overview";
    container.appendChild(titleEl);

    // Core descriptor
    const descEl = document.createElement('p');
    descEl.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
    descEl.textContent = "Welcome to Mizizi Bajaj Adventures! This itinerary has been planned and sourced by locals in Arusha to give you a highly immersive, authentic, and perfectly vetted street safari. You will bypass the boring tourist shuttle routes and ride directly inside our curated network of Bajaj drivers, tasting the authentic dust, local coffee roasts, and artistic galleries of this volcanic highland hub. Read these safety warning protocols and timings thoroughly before your departure.";
    container.appendChild(descEl);

    // Timeline Schedule Table
    const listTitle = document.createElement('h4');
    listTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-2';
    listTitle.textContent = "📅 Arusha Inner-City Loop Schedule";
    container.appendChild(listTitle);

    const scheduleList = document.createElement('div');
    scheduleList.className = 'space-y-2 mb-6';
    
    ARUSHA_LOOP_PAYLOAD.forEach((node) => {
      const row = document.createElement('div');
      row.className = 'flex justify-between items-center py-2 border-b border-stone-100 text-xs';
      
      const timeLabel = document.createElement('span');
      timeLabel.className = 'font-bold text-amber-600 w-12';
      timeLabel.textContent = node.time;
      
      const titleLabel = document.createElement('span');
      titleLabel.className = 'font-extrabold text-slate-800 flex-grow';
      titleLabel.textContent = node.title;

      const badge = document.createElement('span');
      badge.className = 'text-[9px] font-bold px-2 py-0.5 rounded bg-stone-100 border text-stone-500';
      badge.textContent = node.category;

      row.appendChild(timeLabel);
      row.appendChild(titleLabel);
      row.appendChild(badge);
      scheduleList.appendChild(row);
    });

    container.appendChild(scheduleList);

    // Security Warn card
    const safetyDiv = document.createElement('div');
    safetyDiv.className = 'bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-xs text-amber-800';
    safetyDiv.innerHTML = `<span>💡</span>
      <div>
        <p class="font-extrabold mb-0.5 uppercase tracking-wider text-[10px]">Essential Bajaj Packing list</p>
        <p>Ensure your smartphone is charged 100%. Pack a light dust-scarf or mask for high-glare road transits, keep small-denominated banknotes (1,000 to 5,000 TZS) handy for drivers, and load your maps offline now!</p>
      </div>`;
    container.appendChild(safetyDiv);
  };

  // Compile Route 1 Overview Dynamic Detailing Sheet
  const showOverviewPanel = () => {
    expandDetailsPane();
    triggerSlideInAnimation();

    const detailsTitle = document.getElementById('details-pane-title');
    const detailsSubtitle = document.getElementById('details-pane-subtitle');
    const detailsBody = document.getElementById('details-pane-body');

    if (!detailsTitle || !detailsSubtitle || !detailsBody) return;

    detailsTitle.textContent = "Morning Brief";
    detailsSubtitle.textContent = "Route 1 Overview";

    detailsBody.innerHTML = '';

    // Banner
    const img = document.createElement('img');
    img.src = 'assets/hero.png';
    img.className = 'w-full h-32 object-cover border border-stone-200';
    detailsBody.appendChild(img);

    // Context summary
    const summary = document.createElement('p');
    summary.className = 'text-xs text-stone-600 font-semibold leading-relaxed';
    summary.textContent = "A 9-hour, high-adrenaline loop across Arusha. You'll cover the historic clock tower, raw tanzanite gemstone checklists, art galleries, coffee plantations, sunset lookouts, and closing Indian culinary fusion hubs.";
    detailsBody.appendChild(summary);

    // Read More Page button
    const btn = document.createElement('button');
    btn.className = 'w-full py-3 btn-jungle text-xs uppercase tracking-widest font-black shadow-md mt-auto';
    btn.textContent = "Read Full Route Overview";
    btn.addEventListener('click', () => {
      openOverlay("Route 1 Overview - Morning Brief", compileOverviewContents);
    });

    detailsBody.appendChild(btn);
  };

  // Compile Emergency Protocol pane in Column 2
  const showEmergencyPanel = () => {
    expandDetailsPane();
    triggerSlideInAnimation();

    const detailsTitle = document.getElementById('details-pane-title');
    const detailsSubtitle = document.getElementById('details-pane-subtitle');
    const detailsBody = document.getElementById('details-pane-body');

    if (!detailsTitle || !detailsSubtitle || !detailsBody) return;

    detailsTitle.textContent = "SOS Hotline";
    detailsSubtitle.textContent = "Emergency Protocol";

    detailsBody.innerHTML = '';

    // Subtitle warn
    const warn = document.createElement('div');
    warn.className = 'bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs font-bold leading-normal';
    warn.textContent = "Mizizi is centered on safety. Keep this panel loaded offline. If you face any security or transit issues inside Arusha town, reach out immediately!";
    detailsBody.appendChild(warn);

    // List of quick emergency contacts
    const contacts = [
      { name: "Vetted Saloon Driver (VIP)", info: "+255 700 000 000" },
      { name: "Arusha General Hospital Clinic", info: "+255 27 254 4242" },
      { name: "Tanzanian Tourist Police", info: "112 (or 999)" },
      { name: "Mizizi Emergency Support Desk", info: "+255 800 MIZIZI" }
    ];

    const contactDiv = document.createElement('div');
    contactDiv.className = 'space-y-3';

    contacts.forEach((con) => {
      const card = document.createElement('div');
      card.className = 'bg-white border border-stone-200 p-3 rounded-xl text-xs shadow-sm flex flex-col gap-1';
      
      const title = document.createElement('p');
      title.className = 'font-bold text-slate-500 uppercase tracking-widest text-[9px]';
      title.textContent = con.name;

      const num = document.createElement('a');
      num.href = `tel:${con.info.replace(/\s+/g, '')}`;
      num.className = 'font-black text-slate-800 text-sm hover:text-red-600 transition-colors';
      num.textContent = con.info;

      card.appendChild(title);
      card.appendChild(num);
      contactDiv.appendChild(card);
    });

    detailsBody.appendChild(contactDiv);
  };

  // Compile Swahili Survival full lingo overlay page
  const openSwahiliSurvivalOverlay = () => {
    openOverlay("Swahili Survival & Bajaj Lingo Guide", (container) => {
      // Intro
      const header = document.createElement('h3');
      header.className = 'text-2xl font-black text-slate-800 tracking-tight mb-3';
      header.textContent = "Swahili Survival: Master the Arusha Streets";
      container.appendChild(header);

      const intro = document.createElement('p');
      intro.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      intro.textContent = "Kiswahili is the beautiful national language of Tanzania. While many tourism workers speak English, local Bajaj (Tuk-Tuk) drivers and street artists appreciate when you show respect by speaking Swahili. It breaks down walls immediately, brings big smiles, and ensures you get authentic local rates!";
      container.appendChild(intro);

      // Waveform Audio Guide Simulator
      const soundTitle = document.createElement('h4');
      soundTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-2';
      soundTitle.textContent = "🎧 Swahili Audio Pronunciation Simulator";
      container.appendChild(soundTitle);

      const audioSim = document.createElement('div');
      audioSim.className = 'bg-emerald-950 text-white rounded-2xl p-4 mb-6 space-y-4 shadow-md';
      
      const audioHead = document.createElement('div');
      audioHead.className = 'flex justify-between items-center';
      
      const audioLabel = document.createElement('span');
      audioLabel.className = 'text-xs font-black tracking-widest text-ochre uppercase';
      audioLabel.textContent = "Kiswahili Street Lingo Guide";

      const playingStatus = document.createElement('span');
      playingStatus.className = 'text-[9px] text-emerald-300 font-bold uppercase tracking-wider';
      playingStatus.id = "survival-audio-status";
      playingStatus.textContent = "Ready to Play";

      audioHead.appendChild(audioLabel);
      audioHead.appendChild(playingStatus);
      audioSim.appendChild(audioHead);

      // Mock audio tracks
      const tracks = [
        { title: "Essential Greetings Lesson", length: "1:45" },
        { title: "Bargaining with Bajaj Drivers", length: "2:30" },
        { title: "Ordering Dinner in Swahili", length: "1:20" }
      ];

      const trackList = document.createElement('div');
      trackList.className = 'space-y-2';

      tracks.forEach((track, tIndex) => {
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center py-2 px-3 bg-emerald-900 bg-opacity-40 rounded-xl text-xs hover:bg-emerald-900 transition-colors cursor-pointer';
        
        const info = document.createElement('span');
        info.className = 'font-bold';
        info.textContent = `▶️ ${track.title}`;
        
        const len = document.createElement('span');
        len.className = 'text-[10px] text-emerald-300 font-bold';
        len.textContent = track.length;

        item.addEventListener('click', () => {
          const status = document.getElementById("survival-audio-status");
          status.textContent = `Streaming: ${track.title} 🎧`;
          status.style.color = '#34D399';
        });

        item.appendChild(info);
        item.appendChild(len);
        trackList.appendChild(item);
      });

      audioSim.appendChild(trackList);
      container.appendChild(audioSim);

      // Dictionary Categories
      const categories = [
        {
          title: "1. Core Greetings (Ukaribisho)",
          items: [
            { swahili: "Mambo vipi?", english: "How are things? (Slang)" },
            { swahili: "Poa sana!", english: "Very cool! (Slang response)" },
            { swahili: "Habari?", english: "How are you? (Standard)" },
            { swahili: "Nzuri", english: "Good (Response)" },
            { swahili: "Shikamoo", english: "Respectful greeting for elders" },
            { swahili: "Marahaba", english: "Elders' response to Shikamoo" }
          ]
        },
        {
          title: "2. Bajaj Transit negotiations (Kusafiri)",
          items: [
            { swahili: "Naenda...", english: "I am going to..." },
            { swahili: "Bei gani hadi...?", english: "What is the price to...?" },
            { swahili: "Punguza bei kidogo, rafiki.", english: "Reduce the price a bit, friend." },
            { swahili: "Simama hapa, tafadhali.", english: "Stop here, please." },
            { swahili: "Subiri kidogo.", english: "Wait a moment." },
            { swahili: "Asante kwa safari!", english: "Thanks for the ride!" }
          ]
        },
        {
          title: "3. Dining & Ordering (Kula Chakula)",
          items: [
            { swahili: "Chakula kitamu!", english: "Delicious food!" },
            { swahili: "Naomba maji ya baridi.", english: "Please bring cold water." },
            { swahili: "Lete bili, tafadhali.", english: "Please bring the bill." },
            { swahili: "Nimeshiba, asante.", english: "I am full, thank you." }
          ]
        }
      ];

      categories.forEach((cat) => {
        const catHeader = document.createElement('h4');
        catHeader.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-2';
        catHeader.textContent = cat.title;
        container.appendChild(catHeader);

        const card = document.createElement('div');
        card.className = 'space-y-3';

        cat.items.forEach((item) => {
          const badge = document.createElement('div');
          badge.className = 'lingo-badge';
          
          const swEl = document.createElement('span');
          swEl.className = 'text-sm font-black text-emerald-900';
          swEl.textContent = item.swahili;
          
          const enEl = document.createElement('span');
          enEl.className = 'text-[11px] font-bold text-stone-500';
          enEl.textContent = item.english;

          badge.appendChild(swEl);
          badge.appendChild(enEl);
          card.appendChild(badge);
        });

        container.appendChild(card);
      });
    });
  };

  // Bind all interactive menu layout anchors
  const bindEvents = () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    
    const iconOpen = document.getElementById('hamburger-icon-open');
    const iconClose = document.getElementById('hamburger-icon-close');

    // Sidebar Toggles
    if (hamburgerBtn && sidebar) {
      hamburgerBtn.addEventListener('click', () => {
        const isActive = sidebar.classList.toggle('active');
        hamburgerBtn.classList.toggle('active', isActive);
        
        // Swap hamburger icons
        if (isActive) {
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        } else {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    }

    // Toggle Collapsible Locations Submenu
    const locationsToggle = document.getElementById('nav-locations-toggle');
    const locationsSub = document.getElementById('locations-sub-menu');
    const locationsArrow = document.getElementById('locations-arrow');

    if (locationsToggle && locationsSub) {
      // Set initial closed state pointing inwards (to the right)
      locationsArrow.style.transform = 'rotate(-90deg)';
      
      locationsToggle.addEventListener('click', () => {
        const isOpen = locationsSub.classList.toggle('open');
        
        if (isOpen) {
          locationsArrow.style.transform = 'rotate(0deg)'; // Points down when open
        } else {
          locationsArrow.style.transform = 'rotate(-90deg)'; // Points inwards (right) when closed
        }
      });
    }

    // Remove active class styling from navigation buttons
    const clearActiveNav = () => {
      document.querySelectorAll('.sidebar-link').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.sidebar-sub-link').forEach(btn => btn.classList.remove('active'));
      
      // Auto-hide any active full detail overlays to transition seamlessly between tabs
      const overlay = document.getElementById('detail-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    // HOME Navigation: Load Morning Brief / Overview
    const navHomeBtn = document.getElementById('nav-home-btn');
    if (navHomeBtn) {
      navHomeBtn.addEventListener('click', () => {
        if (navHomeBtn.classList.contains('active')) {
          // Toggle Column 2 Details Panel collapse state (Requirement 1)
          if (sidebarDetailsCol) {
            const isCollapsed = sidebarDetailsCol.classList.toggle('collapsed');
            if (detailsToggleArrow) {
              detailsToggleArrow.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
            }
            if (mapClickOverlay) {
              if (isCollapsed) mapClickOverlay.classList.remove('active');
              else mapClickOverlay.classList.add('active');
            }
          }
          return;
        }

        clearActiveNav();
        navHomeBtn.classList.add('active');
        showOverviewPanel();
      });
    }

    // Route Overview button clicked (Directly launches full overlay page - Requirement 3)
    const navOverviewBtn = document.getElementById('nav-overview-btn');
    if (navOverviewBtn) {
      navOverviewBtn.addEventListener('click', () => {
        if (navOverviewBtn.classList.contains('active')) {
          // Toggle detail overlay page state (Requirement 1)
          const overlay = document.getElementById('detail-overlay');
          if (overlay) {
            const isOpen = overlay.classList.toggle('active');
            document.body.style.overflow = isOpen ? 'hidden' : '';
          }
          return;
        }
        
        clearActiveNav();
        navOverviewBtn.classList.add('active');
        
        // Collapse Column 2 details panel completely (Requirement 3)
        if (sidebarDetailsCol) {
          sidebarDetailsCol.classList.add('collapsed');
        }
        if (detailsToggleArrow) {
          detailsToggleArrow.style.transform = 'rotate(180deg)'; // Points right
        }
        if (mapClickOverlay) {
          mapClickOverlay.classList.remove('active');
        }

        // Instantly compile and open the full-screen Overview overlay page
        openOverlay("Route 1 Overview - Morning Brief", compileOverviewContents);
      });
    }

    // Route Map button: Hides all details & overlays to show the full map backdrop beside Column 1
    const navMapBtn = document.getElementById('nav-map-btn');
    if (navMapBtn) {
      navMapBtn.addEventListener('click', () => {
        clearActiveNav();
        navMapBtn.classList.add('active');

        // Collapse Column 2 details panel completely
        if (sidebarDetailsCol) {
          sidebarDetailsCol.classList.add('collapsed');
        }
        if (detailsToggleArrow) {
          detailsToggleArrow.style.transform = 'rotate(180deg)'; // Points right
        }
        
        // Hide the transparent click overlay (allowing direct interaction with background maps)
        if (mapClickOverlay) {
          mapClickOverlay.classList.remove('active');
        }
      });
    }

    // Location sub-menu links clicked
    document.querySelectorAll('.sidebar-sub-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const index = parseInt(link.getAttribute('data-index'), 10);
        
        if (link.classList.contains('active')) {
          // Toggle details panel Column 2 collapse state (Requirement 1)
          if (sidebarDetailsCol) {
            const isCollapsed = sidebarDetailsCol.classList.toggle('collapsed');
            if (detailsToggleArrow) {
              detailsToggleArrow.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
            }
            if (mapClickOverlay) {
              if (isCollapsed) mapClickOverlay.classList.remove('active');
              else mapClickOverlay.classList.add('active');
            }
          }
          return;
        }

        clearActiveNav();
        
        // Mark active
        locationsToggle.classList.add('active');
        link.classList.add('active');

        showLocationDetails(index);
      });
    });

    // Swahili Survival navigation item clicked
    const navSurvivalBtn = document.getElementById('nav-survival-btn');
    if (navSurvivalBtn) {
      navSurvivalBtn.addEventListener('click', () => {
        if (navSurvivalBtn.classList.contains('active')) {
          // Toggle Swahili overlay page state (Requirement 1)
          const overlay = document.getElementById('detail-overlay');
          if (overlay) {
            const isOpen = overlay.classList.toggle('active');
            document.body.style.overflow = isOpen ? 'hidden' : '';
          }
          return;
        }

        clearActiveNav();
        navSurvivalBtn.classList.add('active');
        
        // Collapse Column 2 details panel completely
        if (sidebarDetailsCol) {
          sidebarDetailsCol.classList.add('collapsed');
        }
        if (detailsToggleArrow) {
          detailsToggleArrow.style.transform = 'rotate(180deg)'; // Points right
        }
        if (mapClickOverlay) {
          mapClickOverlay.classList.remove('active');
        }

        openSwahiliSurvivalOverlay();
      });
    }

    // Emergency Protocol clicked
    const navEmergencyBtn = document.getElementById('nav-emergency-btn');
    if (navEmergencyBtn) {
      navEmergencyBtn.addEventListener('click', () => {
        if (navEmergencyBtn.classList.contains('active')) {
          // Toggle details Column 2 (Requirement 1)
          if (sidebarDetailsCol) {
            const isCollapsed = sidebarDetailsCol.classList.toggle('collapsed');
            if (detailsToggleArrow) {
              detailsToggleArrow.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
            }
            if (mapClickOverlay) {
              if (isCollapsed) mapClickOverlay.classList.remove('active');
              else mapClickOverlay.classList.add('active');
            }
          }
          return;
        }

        clearActiveNav();
        navEmergencyBtn.classList.add('active');
        showEmergencyPanel();
      });
    }

    // Connect Close button on dynamic detailing overlay
    const overlayCloseBtn = document.getElementById('overlay-close-btn');
    const overlay = document.getElementById('detail-overlay');
    
    if (overlayCloseBtn && overlay) {
      overlayCloseBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Column 2 Details Panel sliding toggle handler (Requirement 1)
    const detailsToggleBtn = document.getElementById('details-pane-toggle-btn');
    const sidebarDetailsCol = document.getElementById('sidebar-details-column');
    const detailsToggleArrow = document.getElementById('details-toggle-arrow');
    const mapClickOverlay = document.getElementById('map-click-overlay');

    if (detailsToggleBtn && sidebarDetailsCol) {
      // Set initial arrow state to pointing left (open)
      detailsToggleArrow.style.transform = 'rotate(0deg)';

      detailsToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent map backdrop click overlay from instantly closing it
        const isCollapsed = sidebarDetailsCol.classList.toggle('collapsed');

        if (isCollapsed) {
          detailsToggleArrow.style.transform = 'rotate(180deg)'; // Points right (outwards) when collapsed
          if (mapClickOverlay) mapClickOverlay.classList.remove('active');
        } else {
          detailsToggleArrow.style.transform = 'rotate(0deg)'; // Points left (inwards) when open
          if (mapClickOverlay) mapClickOverlay.classList.add('active');
        }
      });
    }

    // Transparent Map Click Backdrop Overlay (Requirement 3)
    if (mapClickOverlay) {
      mapClickOverlay.addEventListener('click', () => {
        // Automatically hide/collapse details Column 2 when map backdrop is clicked
        if (sidebarDetailsCol) {
          sidebarDetailsCol.classList.add('collapsed');
        }
        if (detailsToggleArrow) {
          detailsToggleArrow.style.transform = 'rotate(180deg)'; // Points right
        }
        // Automatically hide any active overlays
        const openDetailOverlay = document.getElementById('detail-overlay');
        if (openDetailOverlay) {
          openDetailOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }
        // Deactivate map click overlay
        mapClickOverlay.classList.remove('active');
      });
    }
  };

  return {
    // Gatekeeper verification sequence
    init: () => {
      // Check auth observer
      FirebaseSim.onAuthStateChanged(async (user) => {
        if (!user) {
          // Redirect handled securely by auth.js
          return;
        }

        // Paid status authorization gating check
        if (user.hasPaid !== true) {
          console.warn('Paid timeline authorization lock detected. Gating interface...');
          // Enforce Paywall Checkout Launch
          StripeSim.open();

          // Render locked landing-teaser overlays in app interface to prevent viewing
          const blockDiv = document.createElement('div');
          blockDiv.id = 'premium-lock-blocker';
          blockDiv.className = 'fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-70 backdrop-blur-md p-6';
          blockDiv.innerHTML = `
            <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop-elastic">
              <span class="text-5xl block mb-4 animate-bounce-bajaj">🔒</span>
              <h2 class="font-extrabold text-2xl text-slate-800 mb-2">Street Safari Locked</h2>
              <p class="text-slate-500 text-sm leading-relaxed mb-6">Complete your payment of £6 to instantly unlock your complete 9-hour Arusha inner-city travel timeline!</p>
              <button id="gatekeeper-pay-btn" class="w-full py-4 btn-gold text-lg shadow-lg animate-pulse-gold">Unlock Experience Now</button>
            </div>
          `;
          document.body.appendChild(blockDiv);

          document.getElementById('gatekeeper-pay-btn').addEventListener('click', () => {
            StripeSim.open();
          });

          // Also set HOME link to route unpaid user to index.html
          const navHomeBtn = document.getElementById('nav-home-btn');
          if (navHomeBtn) {
            navHomeBtn.addEventListener('click', () => {
              window.location.replace('index.html');
            });
          }

          return;
        }

        // Access authorized! Clean up lock blocker if it exists
        const lockBlocker = document.getElementById('premium-lock-blocker');
        if (lockBlocker) lockBlocker.remove();

        console.log(`Access authorized for ${user.email}. Restructuring navigation hooks...`);
        
        // Display active logged-in user badge details
        const emailBadge = document.getElementById('user-email-badge');
        if (emailBadge) {
          emailBadge.textContent = user.email;
        }

        // Configure home button redirect back to app.html home overview state
        const navHomeBtn = document.getElementById('nav-home-btn');
        if (navHomeBtn) {
          navHomeBtn.addEventListener('click', () => {
            // Brings paid user back to app.html overview page state
            showOverviewPanel();
          });
        }

        // Initialize active sidebar slide-in overlay automatically
        const sidebar = document.getElementById('sidebar');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const iconOpen = document.getElementById('hamburger-icon-open');
        const iconClose = document.getElementById('hamburger-icon-close');
        
        if (sidebar) {
          sidebar.classList.add('active');
          if (hamburgerBtn) hamburgerBtn.classList.add('active');
          if (iconOpen && iconClose) {
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
          }
        }

        // Render initial dynamic pane content (Route Overview / Morning Brief)
        showOverviewPanel();

        // Bind navigation hooks
        bindEvents();
      });
    }
  };
})();

// Initialize Premium timeline layers
if (window.location.pathname.endsWith('app.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    RouteEngine.init();
  });
}
