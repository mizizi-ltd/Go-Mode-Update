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
      lat: -3.3733340,
      lng: 36.6930866,
      localTip: "Order their Tanzanian cappuccino & request a table near the balcony.",
      swahiliPhrase: "Kahawa ya kienyeji (Traditional coffee)",
      shortDesc: "Kickstart your adventure at Fifi's Café, centered directly beside the historic mid-point landmark (Arusha Clock Tower). It's a bustling local favorite with wonderful breakfast items, reliable Wi-Fi, and single-origin Tanzanian espresso.",
      fullDesc: "Centered directly beside the historic midpoint landmark (Clock Tower), Fifi's Café is the ultimate morning anchor in Arusha. It's a highly vibrant, premium coffee shop that balances standard western amenities with incredible local flavor. The setting is bright, lively, and highly comfortable—perfect for orienting yourself before dive-bombing into local Bajaj transits. Spend this morning stop checking your map layers and pre-loading routing coordinates using their high-speed, stable Wi-Fi connection.",
      safetyTips: "Pre-load your offline maps now. The Wi-Fi is strong here—do not rely on cellular signal inside dense transit alleys later in the day.",
      swahiliLesson: "Ordering Food Dialogues:\n- 'Habari za asubuhi!' (Good morning!)\n- 'Nataka panini ya kuku na kahawa, tafadhali.' (I want a chicken panini and a coffee, please.)\n- 'Bei gani?' (How much is it?)\n- 'Asante sana!' (Thank you very much!)",
      audioGuide: "arusha_fifi_narration.mp3"
    },
    {
      index: 1,
      time: "08:30",
      category: "Historic Landmark",
      title: "Arusha Clock Tower",
      image: "assets/clock-tower.jpg",
      lat: -3.3723398,
      lng: 36.6944861,
      localTip: "Stand at the exact geographic midpoint between Cairo and Cape Town for a once-in-a-lifetime photo.",
      swahiliPhrase: "Mnara wa Saa (Clock Tower monument)",
      shortDesc: "Walk 2 minutes from Fifi's to the iconic Arusha Clock Tower — the geographic midpoint between Cairo and Cape Town. This historic roundabout landmark is the symbolic heart of Arusha and the perfect orientation checkpoint.",
      fullDesc: "The Arusha Clock Tower is the most iconic landmark in the city, standing at the exact midpoint between Cairo and Cape Town on the legendary Cape-to-Cairo highway. This charming roundabout monument serves as the geographic and cultural heart of Arusha. Originally built during the British colonial era, it has become a symbol of Arusha's central role in East African diplomacy and tourism. It's the perfect spot for an iconic photo and to orient yourself before diving into the Bajaj street safari network.",
      safetyTips: "Stay on the sidewalk when photographing the tower — the roundabout has active traffic. Watch your belongings in the busy intersection area.",
      swahiliLesson: "Landmark & Direction Dialogues:\n- 'Mnara wa Saa uko wapi?' (Where is the Clock Tower?)\n- 'Hapa ndipo katikati ya Afrika!' (This is the center of Africa!)\n- 'Tafadhali nipige picha.' (Please take my photo.)\n- 'Asante, picha nzuri!' (Thank you, nice photo!)",
      audioGuide: "arusha_clock_tower.mp3"
    },
    {
      index: 2,
      time: "09:30",
      category: "Heritage Stop",
      title: "The Tanzanite Experience",
      image: "assets/tanzanite.jpg",
      lat: -3.3712749,
      lng: 36.6945194,
      localTip: "Always check for the official grading certification inside the museum showroom.",
      swahiliPhrase: "Madini ya Tanzanite (Tanzanite gemstones)",
      shortDesc: "Take a short 2-minute walking transfer to the Blue Plaza building. Scale up to the museum floor to discover the mesmerizing geology, mining history, and grading checklists of the rare Tanzanite gem, unique to Northern Tanzania.",
      fullDesc: "Located on the 3rd floor of the Blue Plaza building, just a 2-minute walk from the Clock Tower, The Tanzanite Experience offers a spectacular and secure deep dive into Tanzania's blue-violet crown jewel. You'll browse visual dioramas of the deep mines beneath Mt. Kilimanjaro and review the official Tanzanite grading system. Vetting gem quality (Color, Cut, Clarity, Carat) before browsing commercial showrooms protects you from street scams and ensures total bargaining power.",
      safetyTips: "Always head directly to the 3rd floor museum office. Avoid unauthorized street brokers outside the plaza offering 'cheap raw gemstones'—these are fake glass traps.",
      swahiliLesson: "Gem Trade & Quality Dialogues:\n- 'Hii ni Tanzanite halisi?' (Is this genuine Tanzanite?)\n- 'Naomba cheti cha ubora.' (Please show me the quality certificate.)\n- 'Nafanya mazungumzo tu.' (I am only browsing/discussing.)\n- 'Ni nzuri sana.' (It is very beautiful.)",
      audioGuide: "arusha_tanzanite_narration.mp3"
    },
    {
      index: 3,
      time: "10:30",
      category: "Cultural Shopping",
      title: "Maasai Market",
      image: "assets/hero.png",
      lat: -3.3758457,
      lng: 36.6923590,
      localTip: "Always bargain respectfully—aim for 50-60% of the initial vendor offer.",
      swahiliPhrase: "Soko la Wamasai (Maasai open-air market)",
      shortDesc: "Hop into a Bajaj back to the town center near the Clock Tower. Step into the vibrant, color-packed Maasai Market to browse thousands of local beadwork pieces, hand-carved ebony sculptures, and colorful blankets.",
      fullDesc: "Located just off Fire Road in the heart of Arusha, the Maasai Market Curios and Crafts is a legendary open-air bazaar. It brings together hundreds of local artisans selling vibrant, handmade products. You'll find spectacular hand-beaded necklaces, authentic red-and-black checkered shúkà blankets, wood-carved wildlife sculptures, and gorgeous custom paintings. Bargaining is a respected art form here—always start your negotiation at roughly 50-60% of the vendor's initial offer and enjoy the friendly, lively banter.",
      safetyTips: "Stick to the main central walkways. Keep your wallet and phone inside a secured front pocket or cross-body bag. Vendors are highly enthusiastic—feel free to say 'Hapana, asante' (No, thank you) politely if you are not interested.",
      swahiliLesson: "Market Bargaining Dialogues:\n- 'Hii ni shilingi ngapi?' (How many shillings is this?)\n- 'Punguza bei kidogo, rafiki.' (Reduce the price a bit, friend.)\n- 'Nitaongeza elfu mbili.' (I will add two thousand.)\n- 'Sawa, nitachukua.' (Okay, I will take it.)",
      audioGuide: "arusha_maasai_market.mp3"
    },
    {
      index: 4,
      time: "11:15",
      category: "Transit Core",
      title: "Bajaj to Cultural Heritage Centre",
      image: "assets/hero.png",
      lat: -3.3723398,
      lng: 36.6944861,
      localTip: "Secure your bags on the floor. Do not hold your phone outside the cabin frame.",
      swahiliPhrase: "Safari ya Bajaj (Bajaj street safari)",
      shortDesc: "Spot a passing blue and yellow Bajaj (Tuk-Tuk) and negotiate the transfer down Dodoma Road to the Cultural Heritage Centre. Hold onto your hats—this is your first high-adrenaline local street safari!",
      fullDesc: "Cruising down Dodoma Road inside an open-cabin Bajaj is the true local transport texture of Arusha. You'll zip past local street vendors, palm trees, and vibrating municipal lanes. Negotiating a fair rate beforehand is key: target base pricing is 3,000 to 5,000 Tanzanian Shillings (TZS). Keep your bags placed securely on the floor panel between your feet, never dangling loosely over your shoulder near the open cabin frame where passersby could grab them.",
      safetyTips: "Secure your bags on the floor board. Do not hold your phone outside the cabin frame while taking photos—motorcycle riders sometimes grab exposed devices.",
      swahiliLesson: "Driver Bargaining Dialogues:\n- 'Naenda Cultural Heritage Centre. Bei ni 3,000 - 5,000 TZS. Asante.' (Show this huge text directly to the driver! It translates to: I am going to Cultural Heritage Centre. Price is 3,000 - 5,000 TZS. Thank you.)\n- 'Tafadhali endesha polepole.' (Please drive slowly.)\n- 'Hapa hapa, asante.' (Stop right here, thank you.)",
      audioGuide: "arusha_transit_narration.mp3"
    },
    {
      index: 5,
      time: "11:45",
      category: "Cultural Core",
      title: "Cultural Heritage Centre Gallery",
      image: "assets/cultural-heritage.jpg",
      lat: -3.3769058,
      lng: 36.6581811,
      localTip: "Climb to the top-floor mask gallery showroom for the best art collection.",
      swahiliPhrase: "Sanaa ya Kiafrika (African art masterpieces)",
      shortDesc: "Explore a massive, architectural masterpiece shaped like a traditional African shield. It houses the largest collection of pristine African art, wood carvings, historic weapons, and mask galleries on the continent.",
      fullDesc: "The Arusha Cultural Heritage Centre is an architectural marvel. Shaped like a massive traditional warrior shield, it stands as a global monument to African history and creative arts. The interior is a spiral ramp that leads you past towering ebony wood carvings, custom-painted canvases, and historic mask gallery rooms. The best unobstructed viewpoint for gorgeous panoramic photos is located beside the shield monument structures out in the main garden area.",
      safetyTips: "Do not wander aimlessly down the lower wings; climb straight up the central ramp to the top floor mask gallery showroom where the absolute best art collections are housed.",
      swahiliLesson: "Art & Museum Dialogues:\n- 'Naomba kupiga picha hapa?' (Am I allowed to take photos here?)\n- 'Sanaa hii imetengenezwa kwa nini?' (What material is this artwork made of?)\n- 'Mti wa Mpingo.' (Ebony wood.)\n- 'Ni kazi nzuri sana!' (This is excellent work!)",
      audioGuide: "arusha_gallery_narration.mp3"
    },
    {
      index: 6,
      time: "13:15",
      category: "Culinary Stop",
      title: "Arusha Coffee Lodge",
      image: "assets/coffee-lodge.webp",
      lat: -3.3745016,
      lng: 36.6439397,
      localTip: "Ask for a seat in the outdoor garden pavilion for a tranquil dining atmosphere.",
      swahiliPhrase: "Shamba la kahawa (Coffee farm plantation)",
      shortDesc: "Zip down Dodoma Road in a secondary quick Bajaj hop to enter the leafy, peaceful acres of one of Tanzania's oldest coffee plantations. Sit in the garden lounge and order premium local roasts.",
      fullDesc: "Situated along the green slopes of Mount Meru, the Arusha Coffee Lodge is a tranquil culinary oasis. You'll escape the town's dust and step into a lush, leafy garden lounge. Ask to be seated in the outdoor garden pavilion, order their famous single-origin Tanzanian coffee, and enjoy a premium lunch while listening to the wind rustling through coffee leaves. This stop is perfect for unwinding and preparing for the logistics crossing to Njiro.",
      safetyTips: "Relax in the garden lounge. Vetted local private taxi drivers can be summoned from the lodge lobby desk if you need immediate assistance.",
      swahiliLesson: "Dining & Coffee Dialogues:\n- 'Naomba meza ya bustanini.' (I would like a table in the garden.)\n- 'Kahawa hii inatoka wapi?' (Where is this coffee sourced from?)\n- 'Inatoka Mlima Meru.' (It comes from Mount Meru.)\n- 'Lete bili, tafadhali.' (Please bring the bill.)",
      audioGuide: "arusha_coffee_narration.mp3"
    },
    {
      index: 7,
      time: "14:45",
      category: "Logistics Pivot",
      title: "Bypass Transfer to Njiro",
      image: "assets/hero.png",
      lat: -3.3750000,
      lng: 36.6800000,
      localTip: "Highway dust is severe and high-speed saloon traffic makes open cabins dangerous. Use a private saloon car.",
      swahiliPhrase: "Usalama barabarani (Road safety coordinates)",
      shortDesc: "CRITICAL SAFETY LEG: Avoid Bajaj transits here! This leg crosses town limits on high-speed bypasses with heavy dust and traffic. Tap below to connect with a vetted saloon driver via WhatsApp for 20,000-30,000 TZS.",
      fullDesc: "Important logistical pivot crossing the town limits from Dodoma Road to Njiro. This leg crosses major national highway bypasses characterized by heavy logistics trucks, high-speed saloon traffic, and massive dust waves. A Bajaj is highly unsafe and uncomfortable for this leg. We require all Mizizi riders to utilize our direct WhatsApp shortcut below to engage a vetted, private saloon vehicle driver. Target base pricing is 20,000 to 30,000 TZS maximum.",
      safetyTips: "CRITICAL: Do not use a Bajaj here! Highway dust is severe and high-speed cross-town traffic makes open cabins dangerous. Use a private saloon car.",
      swahiliLesson: "Driver WhatsApp Booking Dialogues:\n- 'Nahitaji dereva wa saloon kutoka Coffee Lodge kwenda Njiro.' (I need a saloon car driver from Coffee Lodge to Njiro.)\n- 'Bei ni 20,000 - 30,000 TZS?' (Is the price 20,000 - 30,000 TZS?)\n- 'Asante, nakuja sasa hivi.' (Thank you, I am coming right now.)",
      audioGuide: "arusha_emergency_saloon.mp3"
    },
    {
      index: 8,
      time: "15:15",
      category: "Creative Stop",
      title: "Clay & Canvas (Njiro)",
      image: "assets/hero.png",
      lat: -3.3980875,
      lng: 36.7047969,
      localTip: "Paint traditional clay mugs and sip local sweet banana wine under a covered canopy garden.",
      swahiliPhrase: "Ufinyanzi na mvinyo (Pottery and banana wine)",
      shortDesc: "Unwind in Njiro's cozy creative compound. Paint gorgeous local pottery while tasting rich Tanzanian banana wine. Note: operations are strictly by appointment only—verify your reservation card.",
      fullDesc: "Clay & Canvas is Arusha's hidden creative sanctuary. Tucked away in the quiet green suburbs of Njiro, this cozy arts compound offers structured pottery painting and wine tasting seminars. You'll relax, paint traditional clay mugs, and sip local sweet banana wines under a covered canopy garden. It is an exceptional way to interact with local Tanzanian artists and purchase customized souvenirs.",
      safetyTips: "This creative seminar operates strictly by appointment. Ensure your reservation window was validated 24 hours prior using our direct link shortcut.",
      swahiliLesson: "Artistic & Creative Dialogues:\n- 'Naomba rangi zaidi, tafadhali.' (I would like more paint colors, please.)\n- 'Mvinyo hii ni tamu sana!' (This wine is very delicious!)\n- 'Nimetengeneza hii mwenyewe.' (I made this pottery myself.)\n- 'Kazi safi!' (Clean work / Excellent job!)",
      audioGuide: "arusha_clay_canvas.mp3"
    },
    {
      index: 9,
      time: "17:30",
      category: "Sundowner",
      title: "Rooftop Lounge at Gran Melia",
      image: "assets/gran-melia.jpg",
      lat: -3.3706290,
      lng: 36.7066330,
      localTip: "Arrive by 17:45 sharp to watch the sky turn brilliant orange and purple directly over Mount Meru.",
      swahiliPhrase: "Machweo ya Jua (Mt. Meru Sunset View)",
      shortDesc: "A five-star rooftop terrace offering breathtaking, unobstructed views of Mount Meru. Arrive by 17:45 sharp to watch the sky turn brilliant orange and purple directly over the volcanic peak.",
      fullDesc: "The Rooftop Lounge at the Gran Melia Arusha is the premier sundowner venue in Northern Tanzania. Situated on a luxury five-star terrace, it features a glass-railed observation platform pointing directly at the majestic, sharp volcanic peak of Mount Meru. Arriving by 17:45 is highly recommended, as the sunset colors paint the mountain in dramatic hues of orange, gold, and deep violet. Close out your day safari with premium cocktails and local appetizers.",
      safetyTips: "Walk past the central lobby to the elevator core and select the rooftop terrace layout. Smart casual dress is required—no open sandals or singlets.",
      swahiliLesson: "Sunset & Scenic Dialogues:\n- 'Mlima Meru unapendeza sana machweoni!' (Mount Meru looks beautiful at sunset!)\n- 'Kinywaji kiko wapi?' (Where is the drink?)\n- 'Kiti cha nje, tafadhali.' (A seat outside, please.)\n- 'Hapa ni pazuri mno.' (This place is absolutely wonderful.)",
      audioGuide: "arusha_gran_melia.mp3"
    },
    {
      index: 10,
      time: "19:00",
      category: "Dinner Anchor",
      title: "Amber Restaurant",
      image: "assets/hero.png",
      lat: -3.3764860,
      lng: 36.7032019,
      localTip: "Request their Chicken Makhanwala paired with hot clay-oven garlic naan bread.",
      swahiliPhrase: "Swahili-Indian Fusion (Swahili dinner anchor)",
      shortDesc: "Close out your incredible 9-hour Arusha street safari by dining at Amber, a stunning restaurant celebrated for its fresh Swahili-Indian dishes, clay-oven naans, and Chicken Makhanwala.",
      fullDesc: "Amber Restaurant is the crown jewel of Arusha's Swahili-Indian culinary fusion scene. Meticulously blending rich Indian tandoori spices with traditional Swahili coconut milk bases, Amber offers an explosion of flavors in a cozy, premium-lit interior layout. Request their signature Chicken Makhanwala paired with hot, clay-oven garlic naan bread to close out your incredible 9-hour Arusha city loop.",
      safetyTips: "Make a dinner table reservation via the app before arriving. Security is tight here—private secure parking is provided for your salon driver.",
      swahiliLesson: "Dining & Gratitude Dialogues:\n- 'Chakula kilikuwa kitamu sana, asante sana!' (The dinner was very delicious, thank you very much!)\n- 'Tafadhali leta bili.' (Please bring the bill.)\n- 'Tutaonana tena badaye.' (We will see you again later.)\n- 'Mungu akubariki!' (God bless you!)",
      audioGuide: "arusha_dinner_narration.mp3"
    }
  ];

  // Alternative / Detour Locations Database (Column 2 only — no full overlay pages)
  const ALTERNATIVE_LOCATIONS = [
    // --- Fifi's Café alternatives ---
    {
      altId: '1a',
      parentIndex: 0,
      title: "Kitamu Coffee",
      image: "assets/hero.png",
      lat: -3.370835,
      lng: 36.693797,
      localTip: "Try their signature spiced chai latte — it's brewed with fresh Tanzanian ginger and cardamom.",
      swahiliPhrase: "Kahawa tamu (Sweet coffee)",
      shortDesc: "A cozy specialty coffee house tucked behind the Clock Tower roundabout. Kitamu sources single-origin beans from smallholder farms on Mount Meru and roasts them in-house daily. Perfect for a quieter morning alternative to the bustling Fifi's."
    },
    {
      altId: '1b',
      parentIndex: 0,
      title: "Coffee Culture",
      image: "assets/hero.png",
      lat: -3.3719259221558495,
      lng: 36.694397155849444,
      localTip: "Grab a window seat overlooking the street for excellent people-watching and photography.",
      swahiliPhrase: "Utamaduni wa kahawa (Coffee culture)",
      shortDesc: "A modern, Instagram-friendly café with industrial-chic interiors and excellent cold-brew options. Coffee Culture caters to digital nomads with fast Wi-Fi, global power outlets, and a quiet upstairs loft workspace."
    },
    // --- Maasai Market alternatives ---
    {
      altId: '4a',
      parentIndex: 3,
      title: "Bounce Warehouse",
      image: "assets/hero.png",
      lat: -3.383785,
      lng: 36.683923,
      localTip: "Book the 1-hour freestyle session — it includes access to the foam pit and climbing wall.",
      swahiliPhrase: "Kuruka na kucheza (Jump and play)",
      shortDesc: "Arusha's only indoor trampoline and adventure park. Bounce Warehouse offers high-energy fun with wall-to-wall trampolines, ninja obstacle courses, and a dedicated toddler zone. A brilliant detour for families or anyone craving an adrenaline break."
    },
    // --- Coffee Lodge alternatives ---
    {
      altId: '6a',
      parentIndex: 6,
      title: "Sable Square",
      image: "assets/hero.png",
      lat: -3.360309,
      lng: 36.609154,
      localTip: "Visit the rooftop terrace for panoramic views of the Arusha-Dodoma highway corridor.",
      swahiliPhrase: "Soko la kisasa (Modern marketplace)",
      shortDesc: "A sleek modern commercial plaza on the western bypass featuring artisan food stalls, boutique shops, and a landscaped courtyard with shaded seating. Ideal for a relaxed lunch stop with contemporary Tanzanian cuisine."
    },
    {
      altId: '6b',
      parentIndex: 6,
      title: "Endurance Estate",
      image: "assets/hero.png",
      lat: -3.354186,
      lng: 36.615962,
      localTip: "Ask about their guided nature walk through the adjacent acacia woodland — it's complimentary for diners.",
      swahiliPhrase: "Kambi ya msingi (Base camp)",
      shortDesc: "An adventure-themed restaurant and lodge set within the Endurance Estate on the outskirts of Arusha. Surrounded by indigenous gardens and acacia trees, Basecamp serves hearty safari-style meals and craft beers in a rustic outdoor setting."
    },
    {
      altId: '6c',
      parentIndex: 6,
      title: "Blue Heron (Schwari)",
      image: "assets/hero.png",
      lat: -3.386010,
      lng: 36.613022,
      localTip: "Order the Swahili fish curry — it's the chef's signature dish made with fresh Lake Victoria tilapia.",
      swahiliPhrase: "Ndege wa maji (Water bird)",
      shortDesc: "A tranquil waterside restaurant in the Schwari neighbourhood known for its fresh seafood, lush garden seating, and live weekend jazz performances. Blue Heron blends Swahili coastal flavors with a modern fine-dining presentation."
    },
    {
      altId: '6d',
      parentIndex: 6,
      title: "Tumbili Lodge Restaurant",
      image: "assets/hero.png",
      lat: -3.392684,
      lng: 36.627238,
      localTip: "Dine under the giant fig tree canopy — the monkeys (tumbili) often swing by during lunch!",
      swahiliPhrase: "Nyumba ya tumbili (House of monkeys)",
      shortDesc: "Nestled within a private wildlife conservancy, Tumbili Lodge offers an immersive bush dining experience. Watch colobus monkeys play in the canopy overhead while enjoying wood-fired pizzas and fresh tropical juice blends."
    },
    // --- Canvas & Clay alternatives ---
    {
      altId: '7a',
      parentIndex: 8,
      title: "Village Supermarket",
      image: "assets/hero.png",
      lat: -3.392783,
      lng: 36.704375,
      localTip: "Stock up on Tanzanian chocolate bars (Kokoa Kamili) — they make excellent souvenirs.",
      swahiliPhrase: "Duka kuu la kijiji (Village supermarket)",
      shortDesc: "Njiro's largest modern grocery store, stocked with imported goods, local organic produce, and a well-curated deli counter. Perfect for picking up snacks, bottled water, and local treats before continuing your safari."
    },
    {
      altId: '7b',
      parentIndex: 8,
      title: "Beer Garden",
      image: "assets/hero.png",
      lat: -3.3872896,
      lng: 36.7015253,
      localTip: "Try a cold Safari Lager or Kilimanjaro Premium — both are brewed locally in Arusha.",
      swahiliPhrase: "Bustani ya bia (Beer garden)",
      shortDesc: "A relaxed open-air pub in the heart of Njiro with cold local brews on tap, a charcoal nyama choma grill, and big-screen sports. The Beer Garden is where locals unwind after work — a great spot to mix with Arusha residents."
    },
    // --- Amber Restaurant alternatives ---
    {
      altId: '9a',
      parentIndex: 10,
      title: "Georges Tavern & Pub",
      image: "assets/hero.png",
      lat: -3.3717635,
      lng: 36.7025014,
      localTip: "Arrive before 19:00 to grab one of the outdoor terrace tables with fairy-light canopy views.",
      swahiliPhrase: "Tavern ya George (George's tavern)",
      shortDesc: "A lively neighbourhood pub near Njiro with a strong cocktail menu, wood-fired bar snacks, and a covered terrace. Georges is known for its vibrant Friday evening atmosphere and live acoustic music sessions."
    },
    {
      altId: '9b',
      parentIndex: 10,
      title: "Peace Chinese Restaurant",
      image: "assets/hero.png",
      lat: -3.366377,
      lng: 36.702023,
      localTip: "The Szechuan mapo tofu and hand-pulled noodles are outstanding — request extra chili oil.",
      swahiliPhrase: "Chakula cha Kichina (Chinese cuisine)",
      shortDesc: "Arusha's top-rated Chinese restaurant offering authentic Szechuan and Cantonese dishes. Peace Chinese is a local favourite for its generous portions, fresh handmade noodles, and cozy red-lantern interior ambiance."
    },
    {
      altId: '9c',
      parentIndex: 10,
      title: "Kibila Restaurant",
      image: "assets/hero.png",
      lat: -3.376795,
      lng: 36.700784,
      localTip: "Try the Kibila Special Platter — a shared feast of grilled meats, pilau rice, and kachumbari salad.",
      swahiliPhrase: "Chakula cha jadi (Traditional cuisine)",
      shortDesc: "An authentic Tanzanian grill house specializing in slow-roasted nyama choma, fragrant pilau rice, and fresh kachumbari. Kibila is a no-frills local gem with massive portions and incredibly warm hospitality."
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

  // ============================================================
  //  GlobalAudioPlayer — Persistent bottom-bar audio controller
  // ============================================================
  const GlobalAudioPlayer = (() => {
    let audio = null;             // Single shared Audio object
    let animFrame = null;         // requestAnimationFrame handle
    let currentTrackSrc = null;   // Currently loaded source path
    let speedIndex = 0;           // Index into SPEEDS array
    const SPEEDS = [1, 1.5, 2];

    // DOM references (lazy-cached on first use)
    let els = null;
    const getEls = () => {
      if (els) return els;
      els = {
        bar:      document.getElementById('global-audio-player'),
        title:    document.getElementById('audio-player-title'),
        time:     document.getElementById('audio-player-time'),
        duration: document.getElementById('audio-player-duration'),
        status:   document.getElementById('audio-player-status'),
        playBtn:  document.getElementById('audio-play-btn'),
        playIcon: document.getElementById('audio-play-icon'),
        stopBtn:  document.getElementById('audio-stop-btn'),
        speedBtn: document.getElementById('audio-speed-btn'),
        track:    document.getElementById('audio-progress-track'),
        fill:     document.getElementById('audio-progress-fill'),
      };
      return els;
    };

    const fmtTime = (s) => {
      if (!s || !isFinite(s)) return '0:00';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return `${m}:${sec < 10 ? '0' : ''}${sec}`;
    };

    const tick = () => {
      const e = getEls();
      if (audio && !audio.paused) {
        e.time.textContent = fmtTime(audio.currentTime);
        e.duration.textContent = fmtTime(audio.duration);
        const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        e.fill.style.width = pct + '%';
        animFrame = requestAnimationFrame(tick);
      }
    };

    const setPlayIcon = () => {
      getEls().playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    };
    const setPauseIcon = () => {
      getEls().playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    };

    const show = () => {
      const e = getEls();
      e.bar.classList.remove('hiding');
      e.bar.classList.add('visible');
    };

    const hide = () => {
      const e = getEls();
      e.bar.classList.remove('visible');
      e.bar.classList.add('hiding');
      setTimeout(() => e.bar.classList.remove('hiding'), 350);
    };

    // Public API
    const load = (title, audioSrc) => {
      const e = getEls();

      // If same track, just toggle play/pause
      if (currentTrackSrc === audioSrc && audio) {
        if (audio.paused) { play(); } else { pause(); }
        return;
      }

      // Stop previous if any
      if (audio) {
        audio.pause();
        audio.removeAttribute('src');
        cancelAnimationFrame(animFrame);
      }

      currentTrackSrc = audioSrc;
      audio = new Audio(audioSrc);
      audio.preload = 'auto';
      audio.playbackRate = SPEEDS[speedIndex];

      // Update UI
      e.title.textContent = title;
      e.status.textContent = 'Loading...';
      e.fill.style.width = '0%';
      e.time.textContent = '0:00';
      e.duration.textContent = '0:00';
      show();

      // Events
      audio.addEventListener('canplay', () => {
        e.duration.textContent = fmtTime(audio.duration);
        play();
      }, { once: true });

      audio.addEventListener('ended', () => {
        setPlayIcon();
        e.status.textContent = 'Finished';
        cancelAnimationFrame(animFrame);
      });

      audio.addEventListener('error', () => {
        e.status.textContent = 'Audio unavailable';
        setPlayIcon();
      });

      audio.load();
    };

    const play = () => {
      if (!audio) return;
      audio.play().catch(() => {
        getEls().status.textContent = 'Tap to play';
      });
      setPauseIcon();
      getEls().status.textContent = 'Playing 🎧';
      tick();
    };

    const pause = () => {
      if (!audio) return;
      audio.pause();
      setPlayIcon();
      getEls().status.textContent = 'Paused';
      cancelAnimationFrame(animFrame);
    };

    const stop = () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.removeAttribute('src');
      }
      currentTrackSrc = null;
      cancelAnimationFrame(animFrame);
      const e = getEls();
      e.fill.style.width = '0%';
      e.time.textContent = '0:00';
      e.duration.textContent = '0:00';
      e.status.textContent = 'Ready';
      setPlayIcon();
      hide();
    };

    const cycleSpeed = () => {
      speedIndex = (speedIndex + 1) % SPEEDS.length;
      const rate = SPEEDS[speedIndex];
      if (audio) audio.playbackRate = rate;
      getEls().speedBtn.textContent = rate + 'x';
    };

    const seek = (e) => {
      if (!audio || !audio.duration) return;
      const rect = getEls().track.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * audio.duration;
      getEls().fill.style.width = (ratio * 100) + '%';
    };

    // Bind controls once DOM is ready
    const init = () => {
      const e = getEls();
      if (!e.bar) return; // guard
      e.playBtn.addEventListener('click', () => {
        if (!audio) return;
        audio.paused ? play() : pause();
      });
      e.stopBtn.addEventListener('click', stop);
      e.speedBtn.addEventListener('click', cycleSpeed);
      e.track.addEventListener('click', seek);
    };

    return { load, play, pause, stop, init };
  })();

  let activeStopIndex = null;
  let activeAltId = null;
  let currentUserEmail = null;

  // Helper to clear continuous pulsing animations from all markers
  const clearAllMarkerPulses = () => {
    ARUSHA_LOOP_PAYLOAD.forEach(node => {
      if (node.marker) {
        const el = node.marker.getElement();
        if (el) el.classList.remove('pulse-active');
      }
    });
    ALTERNATIVE_LOCATIONS.forEach(alt => {
      if (alt.marker) {
        const el = alt.marker.getElement();
        if (el) el.classList.remove('pulse-active');
      }
    });
  };

  // Re-apply pulse-active class to the active marker DOM element (maintains state across Leaflet view redraws)
  const refreshMarkerStates = () => {
    const runRefresh = () => {
      clearAllMarkerPulses();

      if (activeStopIndex !== null) {
        const node = ARUSHA_LOOP_PAYLOAD.find(n => n.index === activeStopIndex);
        if (node && node.marker) {
          const el = node.marker.getElement();
          if (el) el.classList.add('pulse-active');
        }
      } else if (activeAltId !== null) {
        const alt = ALTERNATIVE_LOCATIONS.find(a => a.altId === activeAltId);
        if (alt && alt.marker) {
          const el = alt.marker.getElement();
          if (el) el.classList.add('pulse-active');
        }
      }
    };

    runRefresh();
    // Safety fallback timeouts to handle Leaflet's asynchronous DOM rendering and transitions
    setTimeout(runRefresh, 50);
    setTimeout(runRefresh, 150);
    setTimeout(runRefresh, 300);
    setTimeout(runRefresh, 600);
  };

  // Helper to clear active styles from all navigation elements and stop all marker pulses
  const clearActiveNav = () => {
    document.querySelectorAll('.sidebar-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sidebar-sub-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sidebar-alt-link').forEach(btn => btn.classList.remove('active'));
    
    // Auto-hide any active full detail overlays to transition seamlessly between tabs
    const overlay = document.getElementById('detail-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    activeStopIndex = null;
    activeAltId = null;
    refreshMarkerStates();
  };

  // Render locations sub-menu detail card in Column 2
  const showLocationDetails = (index) => {
    expandDetailsPane();
    triggerSlideInAnimation();

    const node = ARUSHA_LOOP_PAYLOAD[index];
    if (!node) return;

    // Smoothly pan and zoom Leaflet map to selected location (Dynamic Design Vibe)
    if (map && node.lat && node.lng) {
      map.setView([node.lat, node.lng], 15);
    }

    // Set active pulsing animation
    activeStopIndex = node.index;
    activeAltId = null;
    refreshMarkerStates();

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

        // Audio Guide — Load to Global Player
        const audioTitle = document.createElement('h4');
        audioTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-2';
        audioTitle.textContent = "🎧 Atmospheric Audio Guide";
        container.appendChild(audioTitle);

        const audioTrigger = document.createElement('div');
        audioTrigger.className = 'bg-emerald-950 text-white rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm cursor-pointer hover:bg-emerald-900 transition-colors';

        const audioInfo = document.createElement('div');
        audioInfo.className = 'space-y-0.5';

        const audioTrackName = document.createElement('p');
        audioTrackName.className = 'text-xs font-black tracking-wider text-ochre uppercase';
        audioTrackName.textContent = node.title + ' — Narration';

        const audioHint = document.createElement('p');
        audioHint.className = 'text-[10px] text-emerald-300 font-semibold';
        audioHint.textContent = 'Tap to play in audio player ▸';

        audioInfo.appendChild(audioTrackName);
        audioInfo.appendChild(audioHint);

        const playBtn = document.createElement('button');
        playBtn.className = 'p-3 bg-ochre text-jungle rounded-full font-black text-xs hover:bg-white transition-colors flex items-center justify-center flex-shrink-0';
        playBtn.innerHTML = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

        const triggerPlay = () => {
          GlobalAudioPlayer.load(`${node.title} — ${node.category}`, `assets/${node.audioGuide}`);
        };
        audioTrigger.addEventListener('click', triggerPlay);
        playBtn.addEventListener('click', (e) => { e.stopPropagation(); triggerPlay(); });

        audioTrigger.appendChild(audioInfo);
        audioTrigger.appendChild(playBtn);
        container.appendChild(audioTrigger);
      });
    });

    detailsBody.appendChild(btn);
  };

  // Render alternative location details in Column 2 (no Read More button)
  const showAlternativeDetails = (altId) => {
    const alt = ALTERNATIVE_LOCATIONS.find(a => a.altId === altId);
    if (!alt) return;

    expandDetailsPane();
    triggerSlideInAnimation();

    // Pan map to the alternative location
    if (map && alt.lat && alt.lng) {
      map.setView([alt.lat, alt.lng], 16);
    }

    // Set active pulsing animation
    activeStopIndex = null;
    activeAltId = alt.altId;
    refreshMarkerStates();

    const detailsTitle = document.getElementById('details-pane-title');
    const detailsSubtitle = document.getElementById('details-pane-subtitle');
    const detailsBody = document.getElementById('details-pane-body');

    if (!detailsTitle || !detailsSubtitle || !detailsBody) return;

    detailsTitle.textContent = alt.title;
    detailsSubtitle.textContent = `Detour Option | Alternative Stop`;

    detailsBody.innerHTML = '';

    // 1. Banner Image
    const img = document.createElement('img');
    img.src = alt.image;
    img.className = 'w-full h-32 object-cover rounded-xl border border-stone-200';
    img.alt = alt.title;
    detailsBody.appendChild(img);

    // 2. Swahili Phrase badge
    const lingoBadge = document.createElement('div');
    lingoBadge.className = 'badge-gold text-[10px] py-1.5 px-3 rounded-lg flex items-center gap-1.5 font-bold tracking-wider';
    lingoBadge.innerHTML = `\uD83D\uDDE3\uFE0F <span class="truncate">${alt.swahiliPhrase}</span>`;
    detailsBody.appendChild(lingoBadge);

    // 3. Short description
    const desc = document.createElement('p');
    desc.className = 'text-xs text-stone-600 font-semibold leading-relaxed';
    desc.textContent = alt.shortDesc;
    detailsBody.appendChild(desc);

    // 4. Local Tip card
    const tipCard = document.createElement('div');
    tipCard.className = 'bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2 items-start';
    tipCard.innerHTML = `<span>\uD83D\uDCA1</span><div><p class="font-extrabold uppercase text-[10px] tracking-widest text-amber-600 mb-0.5">Local Tip</p><p class="font-medium">${alt.localTip}</p></div>`;
    detailsBody.appendChild(tipCard);

    // 5. Get Directions link (no Read More button)
    const dirLink = document.createElement('a');
    dirLink.href = `https://www.google.com/maps/dir/?api=1&destination=${alt.lat},${alt.lng}`;
    dirLink.target = '_blank';
    dirLink.className = 'w-full py-3 btn-jungle text-xs uppercase tracking-widest font-black shadow-md mt-auto text-center block';
    dirLink.textContent = 'Get Directions \uD83D\uDE97';
    detailsBody.appendChild(dirLink);
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

      // Swahili Audio Tracks — Load to Global Player
      const soundTitle = document.createElement('h4');
      soundTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-2';
      soundTitle.textContent = "🎧 Swahili Audio Pronunciation Guide";
      container.appendChild(soundTitle);

      const audioSim = document.createElement('div');
      audioSim.className = 'bg-emerald-950 text-white rounded-2xl p-4 mb-6 space-y-3 shadow-md';

      const audioHead = document.createElement('div');
      audioHead.className = 'flex justify-between items-center mb-1';

      const audioLabel = document.createElement('span');
      audioLabel.className = 'text-xs font-black tracking-widest text-ochre uppercase';
      audioLabel.textContent = "Kiswahili Street Lingo";

      const audioHint = document.createElement('span');
      audioHint.className = 'text-[9px] text-emerald-300 font-bold uppercase tracking-wider';
      audioHint.textContent = 'Tap track to play ▸';

      audioHead.appendChild(audioLabel);
      audioHead.appendChild(audioHint);
      audioSim.appendChild(audioHead);

      // Audio lesson tracks
      const tracks = [
        { title: "Essential Greetings Lesson", file: "swahili_greetings.mp3", length: "1:45" },
        { title: "Bargaining with Bajaj Drivers", file: "swahili_bargaining.mp3", length: "2:30" },
        { title: "Ordering Dinner in Swahili", file: "swahili_dinner.mp3", length: "1:20" }
      ];

      const trackList = document.createElement('div');
      trackList.className = 'space-y-2';

      tracks.forEach((track) => {
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center py-2 px-3 bg-emerald-900 bg-opacity-40 rounded-xl text-xs hover:bg-emerald-900 transition-colors cursor-pointer';

        const info = document.createElement('span');
        info.className = 'font-bold';
        info.textContent = `▶️ ${track.title}`;

        const len = document.createElement('span');
        len.className = 'text-[10px] text-emerald-300 font-bold';
        len.textContent = track.length;

        item.addEventListener('click', () => {
          GlobalAudioPlayer.load(`Swahili — ${track.title}`, `assets/audio/${track.file}`);
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

  // Leaflet Map instance variables
  let map = null;
  const premiumMarkersList = [];
  let routePolylineGroup = null;

  const initLeafletMap = () => {
    // Prevent double initialization errors on single-page sessions
    if (map) return;

    // 1. Center on Arusha Clock Tower Coordinates at optimized street zoom 14
    map = L.map('map', {
      zoomControl: false // Deactivate default zoom to prevent overlapping the top-left hamburger button!
    }).setView([-3.3719, 36.6944], 14);

    // Add zoom controls to the bottom right for professional UI balance (Requirement 2 & 6)
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // 2. OpenStreetMap lightweight tiles configured to save mobile footprints
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
      updateWhenIdle: true, // Prevents background data pre-fetching inside active transits!
      updateWhenZooming: false
    }).addTo(map);

    // 3. Define user-generated pin icon
    const userIcon = L.divIcon({
      html: `
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 border-2 border-emerald-950 shadow-lg text-white font-bold text-xs">
          ⭐
        </div>
      `,
      className: 'custom-leaflet-icon-user',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // 4. Plot premium loop itineraries (skipping pure transit connections)
    let stopCounter = 0; // Tracks chronological step number for visible stops
    ARUSHA_LOOP_PAYLOAD.forEach((node) => {
      if (node.category === "Transit Core" || node.category === "Logistics Pivot") {
        return; // Exclude highway transits from pin droplets
      }

      if (!node.lat || !node.lng) return;

      stopCounter++;

      // Build a dynamic numbered badge icon per stop (Increased size to 120x65, anchor center of 36px circle)
      const stopIcon = L.divIcon({
        html: `
          <div class="mizizi-marker-inner">
            <div class="mizizi-marker-number">${stopCounter}</div>
            <div class="mizizi-marker-label">${node.title}</div>
          </div>
        `,
        className: 'mizizi-marker-badge',
        iconSize: [120, 65],
        iconAnchor: [60, 18],
        popupAnchor: [0, -18]
      });

      const marker = L.marker([node.lat, node.lng], { icon: stopIcon }).addTo(map);
      premiumMarkersList.push(marker);
      node.marker = marker; // Reference for pulsing behavior

      marker.on('click', () => {
        // Clear active styling from all nav elements, then highlight this stop in sidebar
        clearActiveNav();
        
        // Find corresponding sidebar link and mark it active
        const link = document.querySelector(`.sidebar-sub-link[data-index="${node.index}"]`);
        if (link) {
          link.classList.add('active');
        }
        const locationsToggle = document.getElementById('nav-locations-toggle');
        if (locationsToggle) locationsToggle.classList.add('active');

        // Show details in Column 2 (which handles panning and pulsing!)
        showLocationDetails(node.index);
      });

      const popupHtml = `
        <div class="space-y-2.5 max-w-[250px]">
          <h3 class="font-black text-emerald-900 text-sm tracking-tight leading-tight">${node.title}</h3>
          <span class="inline-block text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-stone-100 border text-stone-500 uppercase tracking-wider">${node.category}</span>
          
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-[10px] text-amber-800 leading-normal">
            <strong>💡 Quick Tip:</strong> ${node.localTip || node.shortDesc}
          </div>

          <!-- Audio Guide — Load to Global Player -->
          <div id="map-audio-trigger-${node.index}" class="bg-emerald-950 text-white rounded-xl p-2.5 flex items-center justify-between gap-3 shadow-sm cursor-pointer hover:bg-emerald-900 transition-colors">
            <div class="space-y-0.5 min-w-0 flex-grow">
              <p class="text-[9px] font-black tracking-widest text-amber-400 uppercase truncate">Audio Guide</p>
              <p class="text-[8px] text-emerald-300 font-semibold uppercase truncate">Tap to play ▸</p>
            </div>
            <button class="p-2 bg-amber-400 text-emerald-950 rounded-full font-black text-xs hover:bg-white transition-all flex-shrink-0 flex items-center justify-center shadow">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          <a href="https://www.google.com/maps/dir/?api=1&destination=${node.lat},${node.lng}" target="_blank" class="w-full py-2 bg-emerald-900 hover:bg-emerald-950 text-white font-extrabold rounded-lg text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-1 shadow-sm transition-colors">
            Get Directions 🚗
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);

      // Listen for popup opening to bind the audio trigger to the global player
      marker.on('popupopen', () => {
        const trigger = document.getElementById(`map-audio-trigger-${node.index}`);
        if (!trigger) return;

        trigger.addEventListener('click', () => {
          GlobalAudioPlayer.load(`${node.title} — ${node.category}`, `assets/${node.audioGuide}`);
        });
      });

      // Audio now persists in global player — no popupclose kill needed
    });

    // 5. Adventure Trail — Polyline Route Connector Lines
    // Sequential coordinates following the day's circular itinerary
    const routeCoords = [
      [-3.3733340, 36.6930866], // Fifi's Café (Start)
      [-3.3723398, 36.6944861], // Clock Tower
      [-3.3712749, 36.6945194], // Tanzanite Experience
      [-3.3758457, 36.6923590], // Maasai Market
      [-3.3769058, 36.6581811], // Cultural Heritage Centre
      [-3.3745016, 36.6439397], // Arusha Coffee Lodge
      [-3.3980875, 36.7047969], // Canvas & Clay (Njiro)
      [-3.3706290, 36.7066330], // Gran Melia
      [-3.3764860, 36.7032019], // Amber Restaurant
      [-3.3733340, 36.6930866]  // ← Close loop back to Fifi's Café
    ];

    // Baby pastel palette — one distinct color per route segment (all 10 colors used)
    const segmentColors = [
      '#ffb3ba', // Fifi's → Clock Tower (Blush Pink)
      '#ffdfba', // Clock Tower → Tanzanite (Peach Cream)
      '#ffffba', // Tanzanite → Maasai Market (Lemon Chiffon)
      '#baffc9', // Maasai Market → Cultural Heritage (Mint Green)
      '#bae1ff', // Cultural Heritage → Coffee Lodge (Baby Blue)
      '#a8e6cf', // Coffee Lodge → Canvas & Clay (Seafoam)
      '#dcedc1', // Canvas & Clay → Gran Melia (Pistachio)
      '#ffd3b6', // Gran Melia → Amber (Apricot)
      '#ffaaa5', // Amber → Fifi's return (Salmon)
      '#ff8b94'  // Reserve segment (Rose)
    ];

    // Soft shadow line underneath for subtle depth on the pastel trails
    const shadowLine = L.polyline(routeCoords, {
      color: '#c0b8a8',
      weight: 10,
      opacity: 0.35,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Draw individual gradient-colored dashed segments — boosted weight & opacity for visibility
    const segmentLayers = [];
    for (let i = 0; i < routeCoords.length - 1; i++) {
      const segment = L.polyline(
        [routeCoords[i], routeCoords[i + 1]],
        {
          color: segmentColors[i],
          weight: 5,
          opacity: 1.0,
          dashArray: '12, 8',
          lineCap: 'round',
          lineJoin: 'round'
        }
      ).addTo(map);
      segmentLayers.push(segment);
    }

    // Bundle all trail layers and auto-zoom to fit the complete loop
    routePolylineGroup = L.featureGroup([shadowLine, ...segmentLayers]);
    map.fitBounds(routePolylineGroup.getBounds().pad(0.06));

    // 7. User-Generated Pin Dropping Mechanism
    let activeClickCoords = null;

    map.on('click', (e) => {
      const modal = document.getElementById('custom-pin-modal');
      const input = document.getElementById('custom-pin-note');
      
      if (!modal || !input) return;

      activeClickCoords = e.latlng;
      input.value = '';
      modal.classList.add('active');
    });

    // Bind custom pin dialog modal anchors
    const cancelBtn = document.getElementById('custom-pin-cancel-btn');
    const saveBtn = document.getElementById('custom-pin-save-btn');
    const modal = document.getElementById('custom-pin-modal');
    const input = document.getElementById('custom-pin-note');

    if (cancelBtn && modal) {
      cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        activeClickCoords = null;
      });
    }

    if (saveBtn && modal && input) {
      saveBtn.addEventListener('click', () => {
        const note = input.value.trim();
        if (!note || !activeClickCoords) {
          alert("Please enter a short note before saving your pin!");
          return;
        }

        // Plot custom traveler pin on the map viewport
        plotCustomUserPin(activeClickCoords.lat, activeClickCoords.lng, note);

        // Serialize and store note within browser session persistence layers
        saveUserPinToStorage(activeClickCoords.lat, activeClickCoords.lng, note);

        // Terminate active modal view state
        modal.classList.remove('active');
        activeClickCoords = null;
      });
    }

    // Helper to draw user pins
    const plotCustomUserPin = (lat, lng, note) => {
      const pin = L.marker([lat, lng], { icon: userIcon }).addTo(map);

      // Create popup container DOM element to attach direct event listeners
      const container = document.getElementById('details-pane-body') ? document.createElement('div') : null;
      const el = container || document.createElement('div');
      el.className = 'space-y-1.5 max-w-[220px]';

      // Header
      const header = document.createElement('h3');
      header.className = 'font-extrabold text-amber-600 text-xs uppercase tracking-wider';
      header.textContent = '⭐ Traveler Finding';
      el.appendChild(header);

      // Note text
      const noteEl = document.createElement('p');
      noteEl.className = 'text-xs font-semibold text-slate-800 leading-relaxed';
      noteEl.textContent = note;
      el.appendChild(noteEl);

      // Coordinates
      const coords = document.createElement('p');
      coords.className = 'text-[8px] text-stone-400 font-medium italic mt-1';
      coords.textContent = `Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      el.appendChild(coords);

      // Get Directions Button
      const dirLink = document.createElement('a');
      dirLink.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      dirLink.target = '_blank';
      dirLink.className = 'w-full py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-lg text-[9px] uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-sm mt-2 transition-colors block';
      dirLink.textContent = 'Get Directions 🚗';
      el.appendChild(dirLink);

      // Delete Button
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'w-full py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-[9px] uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-sm mt-1 transition-colors';
      deleteBtn.textContent = 'Delete Finding 🗑️';
      deleteBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to delete this Traveler Finding?")) {
          pin.closePopup();
          map.removeLayer(pin);
          const key = currentUserEmail ? `mizizi_user_pins_${currentUserEmail}` : 'mizizi_user_pins';
          const saved = JSON.parse(localStorage.getItem(key) || '[]');
          const updated = saved.filter(p => !(Math.abs(p.lat - lat) < 1e-9 && Math.abs(p.lng - lng) < 1e-9));
          localStorage.setItem(key, JSON.stringify(updated));
        }
      });
      el.appendChild(deleteBtn);

      pin.bindPopup(el);
      return pin;
    };

    // Helper to serialize & push custom pins into localStorage
    const saveUserPinToStorage = (lat, lng, note) => {
      const key = currentUserEmail ? `mizizi_user_pins_${currentUserEmail}` : 'mizizi_user_pins';
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved.push({ lat, lng, note });
      localStorage.setItem(key, JSON.stringify(saved));
    };

    // Boot function scanning localStorage to redraw saved pins
    const loadStoredUserPins = () => {
      const key = currentUserEmail ? `mizizi_user_pins_${currentUserEmail}` : 'mizizi_user_pins';
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved.forEach(pin => {
        plotCustomUserPin(pin.lat, pin.lng, pin.note);
      });
    };

    loadStoredUserPins();

    // 7. Plot Alternative / Detour Location Markers (distinct Ochre icons, no polylines)
    ALTERNATIVE_LOCATIONS.forEach((alt) => {
      if (!alt.lat || !alt.lng) return;

      const altIcon = L.divIcon({
        html: `
          <div class="mizizi-alt-marker-inner">
            <div class="mizizi-alt-marker-number">${alt.altId}</div>
            <div class="mizizi-alt-marker-label">${alt.title}</div>
          </div>
        `,
        className: 'mizizi-alt-marker-badge',
        iconSize: [100, 50],
        iconAnchor: [50, 13],
        popupAnchor: [0, -13]
      });

      const marker = L.marker([alt.lat, alt.lng], { icon: altIcon }).addTo(map);
      alt.marker = marker; // Reference for pulsing behavior

      marker.on('click', () => {
        // Clear active styling from all nav elements
        clearActiveNav();
        document.querySelectorAll('.sidebar-alt-link').forEach(l => l.classList.remove('active'));

        // Highlight in sidebar
        const link = document.querySelector(`.sidebar-alt-link[data-alt-id="${alt.altId}"]`);
        if (link) {
          link.classList.add('active');
          // Make sure parent collapsible menu is open!
          const altMenu = link.closest('.sidebar-alt-menu');
          if (altMenu) {
            // Exclusivity: close all other collapsible menus and chevrons
            document.querySelectorAll('.sidebar-alt-menu').forEach(menu => {
              if (menu !== altMenu) menu.classList.remove('open');
            });
            document.querySelectorAll('.sub-link-chevron').forEach(chev => {
              const toggleId = chev.getAttribute('data-alt-toggle');
              if (toggleId !== altMenu.id) chev.classList.remove('open');
            });

            altMenu.classList.add('open');
            const chevron = document.querySelector(`.sub-link-chevron[data-alt-toggle="${altMenu.id}"]`);
            if (chevron) chevron.classList.add('open');
          }
        }
        const locationsToggle = document.getElementById('nav-locations-toggle');
        if (locationsToggle) locationsToggle.classList.add('active');

        // Show details in Column 2 (which handles panning and pulsing!)
        showAlternativeDetails(alt.altId);
      });

      marker.bindPopup(`
        <div class="space-y-2 max-w-[230px]">
          <h3 class="font-black text-amber-700 text-sm tracking-tight leading-tight">${alt.title}</h3>
          <span class="inline-block text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-600 uppercase tracking-wider">Detour Option</span>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-2 text-[10px] text-stone-600 leading-normal">
            <strong>\uD83D\uDCA1 Tip:</strong> ${alt.localTip}
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${alt.lat},${alt.lng}" target="_blank" class="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-lg text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-1 shadow-sm transition-colors">
            Get Directions \uD83D\uDE97
          </a>
        </div>
      `);
    });

    // Re-apply pulsing classes whenever Leaflet completes drawing or panning the map view
    map.on('zoomend viewreset moveend popupopen', () => {
      refreshMarkerStates();
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

          // Deactivate map click overlay when sidebar closes so the map becomes interactive
          const overlay = document.getElementById('map-click-overlay');
          if (overlay) overlay.classList.remove('active');
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

    // clearActiveNav now defined at module level to share with map clicks

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

        // Smooth autozoom to fit the entire adventure trail loop into the viewport
        if (map && routePolylineGroup) {
          map.fitBounds(routePolylineGroup.getBounds().pad(0.06));
        } else if (map) {
          map.setView([-3.3719, 36.6944], 14);
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

    // Alternative Locations — Chevron toggle + alt-link click handlers
    document.querySelectorAll('.sub-link-chevron').forEach((chevron) => {
      chevron.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = chevron.getAttribute('data-alt-toggle');
        const altMenu = document.getElementById(targetId);
        if (altMenu) {
          const wasOpen = altMenu.classList.contains('open');

          // Exclusivity: Close all other collapsible alt menus and chevrons
          document.querySelectorAll('.sidebar-alt-menu').forEach(menu => {
            if (menu.id !== targetId) menu.classList.remove('open');
          });
          document.querySelectorAll('.sub-link-chevron').forEach(chev => {
            if (chev !== chevron) chev.classList.remove('open');
          });

          // Toggle the current menu
          if (wasOpen) {
            altMenu.classList.remove('open');
            chevron.classList.remove('open');
          } else {
            altMenu.classList.add('open');
            chevron.classList.add('open');
          }
        }
      });
    });

    document.querySelectorAll('.sidebar-alt-link').forEach((link) => {
      link.addEventListener('click', () => {
        // Clear active styling from all nav elements
        clearActiveNav();
        document.querySelectorAll('.sidebar-alt-link').forEach(l => l.classList.remove('active'));
        
        // Mark this alt link and its parent Locations toggle active
        link.classList.add('active');
        locationsToggle.classList.add('active');

        const altId = link.getAttribute('data-alt-id');
        // Show details in Column 2 (which handles panning and pulsing!)
        showAlternativeDetails(altId);
      });
    });

    // Map Theme Toggle (Minimal Map Filter)
    const themeBtn = document.getElementById('map-theme-toggle');
    const mapEl = document.getElementById('map');
    
    if (themeBtn && mapEl) {
      // Check localStorage for saved map theme preference
      const isMinimal = localStorage.getItem('mizizi_minimal_map') === 'true';
      if (isMinimal) {
        mapEl.classList.add('minimal-map');
        themeBtn.classList.add('active');
      }

      themeBtn.addEventListener('click', () => {
        const active = mapEl.classList.toggle('minimal-map');
        themeBtn.classList.toggle('active', active);
        localStorage.setItem('mizizi_minimal_map', active);
      });
    }
  };

  return {
    // Gatekeeper verification sequence
    init: () => {
      // Check auth observer
      FirebaseSim.onAuthStateChanged(async (user) => {
        if (!user) {
          currentUserEmail = null;
          // Redirect handled securely by auth.js
          return;
        }

        currentUserEmail = user.email;

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

        // Initialize live Leaflet.js interactive maps
        initLeafletMap();

        // Initialize global audio player listeners
        GlobalAudioPlayer.init();
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
