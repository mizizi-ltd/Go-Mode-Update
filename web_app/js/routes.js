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
      title: "Kitamu Coffee",
      image: "assets/kitamucafe(Medium).JPG",
      detailImages: ["assets/kitamu-coffee.jpg"],
      lat: -3.370817762441645,
      lng: 36.69371861086912,
      localTip: "Order their local French press coffee paired with their legendary carrot cake.",
      swahiliPhrase: "Kahawa tamu na keki (Sweet coffee and cake)",
      shortDesc: "Get a coffee and some breakfast in the morning. Kickstart your adventure at Kitamu Coffee, located on Goliondoi Street right in the heart of the central Clock Tower area. It is a wonderfully expressive downtown staple blending a cozy urban café scene with a rustic, nature-filled garden restaurant.",
      fullDesc: "Located on Goliondoi Street right in the heart of the central Clock Tower area, Kitamu Coffee (often expanding its identity into \"Kitamu House\") is a wonderfully expressive downtown staple. While it serves as an ultra-convenient jump-off landmark for city day-tours, a step past its entrance reveals a surprisingly expansive, multi-layered venue. Far from just a tiny, modern grab-and-go espresso bar, Kitamu blends a cozy urban café scene with a rustic, nature-filled garden restaurant that features gorgeous beaded chandeliers, wooden bridges, and clear, unobstructed views of Mount Meru.",
      safetyTips: "Pre-load your offline maps now. The Wi-Fi is strong here: do not rely on cellular signal inside dense transit alleys later in the day.",
      swahiliLesson: "Basic Swahili Practice: How to sound less like a tourist\n\n“Naomba”: ~nah-woh-mbah~ loosely means “I Humbly request...”. This is the most important lesson of your Swahili today. In Tanzania, this is the only polite and respectful way to ask for any service or any request from someone. Kenyan Swahili lets you say “I want...” (“Nataka”), but Tanzanians view “Nataka” as a direct order or a demand, and they consider it rude, bossy, and impolite. Use “Naomba” liberally, and you will immediately gain more rapport and trust in your day. Tourists say \"Nataka\"; seasoned residents and locals say “Naomba”.\n\nHakuna Matata:\nTourists say “Hakuna Matata”; people will say that to sell you something. Seasoned residents and locals say “Hamna Shida!” or “Hakuna shida” which means “It is not a concern” or “Not an issue”. Save Hakuna Matata for the clueless tourists.\n\nSawa:\nMeans “OK”. You will hear \"sawa\" everywhere, and you should sprinkle it in everywhere you would normally say “OK”. Tourists do not use sawa; seasoned residents will find themselves saying Sawa when they go back home abroad. It becomes ingrained in your daily lexicon.\n\nMambo Vipi / Poa:\nIn a nutshell, it is equivalent to saying “Yo! What’s up!”. Response is \"Poa\" (Cool).\n\nBwana:\nThe secret to disarming any man you may be negotiating with or trying to convince. Bwana is a street Swahili term meaning “Boss!” or “Sir”.\n\nGreeting: Mambo/Vipi\nResponse: Poa\n\"Pole, sielewi Kiswahili\" (Sorry, I do not understand Swahili).\n\nOrdering Food Dialogues:\n- 'Habari za asubuhi!' (Good morning!)\n- 'Naomba Coca-cola na kahawa, tafadhali.' (I kindly request a Coca-cola and coffee, please.)\n- 'Bei gani?' (How much is it?)\n- 'Asante sana!' (Thank you very much!)",
      audioGuide: "arusha_fifi_narration.mp3"
    },
    {
      index: 1,
      time: "08:30",
      category: "Heritage Stop",
      title: "The Tanzanite Experience",
      image: "assets/tanzanitexp2.jpg",
      detailImages: ["assets/tanzanitexp2.jpg"],
      lat: -3.3712749,
      lng: 36.6945194,
      localTip: "Always check for the official grading certification inside the museum showroom.",
      swahiliPhrase: "Madini ya Tanzanite (Tanzanite gemstones)",
      shortDesc: "Walk 2 minutes from Kitamu Coffee to the Blue Plaza building. Scale up to the museum floor to discover the geology, mining history, and grading checklists of the rare Tanzanite gem, unique to Northern Tanzania.",
      fullDesc: "Located on the 3rd floor of the Blue Plaza building, just a 2-minute walk from Kitamu Coffee, The Tanzanite Experience offers a spectacular and secure deep dive into Tanzania's blue-violet crown jewel. You'll browse visual dioramas of the deep mines beneath Mt. Kilimanjaro and review the official Tanzanite grading system. Vetting gem quality (Color, Cut, Clarity, Carat) before browsing commercial showrooms protects you from street scams and ensures total bargaining power.",
      safetyTips: "Always head directly to the 3rd floor museum office. Avoid unauthorised street brokers outside the plaza offering 'cheap raw gemstones': these are fake glass traps.",
      swahiliLesson: "Gem Trade & Quality Dialogues:\n- 'Hii ni Tanzanite halisi?' (Is this genuine Tanzanite?)\n- 'Naomba cheti cha ubora.' (Please show me the quality certificate.)\n- 'Nafanya mazungumzo tu.' (I am only browsing/discussing.)\n- 'Ni nzuri sana.' (It is very beautiful.)",
      audioGuide: "arusha_tanzanite_narration.mp3"
    },
    {
      index: 2,
      time: "09:30",
      category: "Historic Landmark",
      title: "Arusha Clock Tower",
      image: "assets/clocktowersidebar.JPG",
      detailImages: ["assets/clocktowerMedium.jpeg"],
      lat: -3.3723398,
      lng: 36.6944861,
      localTip: "Stand at the exact geographic midpoint between Cairo and Cape Town for a once-in-a-lifetime photo.",
      swahiliPhrase: "Mnara wa Saa (Clock Tower monument)",
      shortDesc: "Walk 2 minutes from Blue Plaza to the iconic Arusha Clock Tower: the geographic midpoint between Cairo and Cape Town. This historic roundabout landmark is the symbolic heart of Arusha and the perfect orientation checkpoint.",
      fullDesc: "The Arusha Clock Tower is the most iconic landmark in the city, standing at the exact midpoint between Cairo and Cape Town on the legendary Cape-to-Cairo highway. This charming roundabout monument serves as the geographic and cultural heart of Arusha. Originally built during the British colonial era, it has become a symbol of Arusha's central role in East African diplomacy and tourism. It's the perfect spot for an iconic photo and to orient yourself before diving into the Bajaj street safari network.",
      safetyTips: "When taking pictures of the tower, stay on the sidewalk: the roundabout is very busy. Beware of people selling and dragging dogs around the Clock Tower: they are illegal breeders. It is best to avoid getting involved with them or trying to rescue the dogs, which inadvertently supports the dog breeding industry in Arusha. Each dog purchased helps to keep these breeding operations alive.",
      swahiliLesson: "Landmark & Direction Dialogues:\n- 'Mnara wa Saa uko wapi?' (Where is the Clock Tower?)\n- 'Hapa ndipo katikati ya Afrika!' (This is the centre of Africa!)\n- 'Tafadhali nipige picha.' (Please take my photo.)\n- 'Asante, picha nzuri!' (Thank you, nice photo!)",
      audioGuide: "arusha_clock_tower.mp3"
    },
    {
      index: 3,
      time: "10:30",
      category: "Cultural Shopping",
      title: "Maasai Market",
      image: "assets/maasaimarket1.jpg",
      detailImages: ["assets/maasaimarketbargaining.jpg", "assets/maasaimarketlookingartwork1.jpg"],
      lat: -3.3758457,
      lng: 36.6923590,
      localTip: "Always bargain respectfully—aim for 50-60% of the initial vendor offer.",
      swahiliPhrase: "Soko la Wamasai (Maasai open-air market)",
      shortDesc: "The Vibe: Vibrant, High-Energy, & Culturally Rich. Best Time to Visit: Mid-morning or early afternoon when the market is fully active but before the peak evening rush. Perfect For: Souvenir hunters, art lovers, and travellers wanting to experience a classic, bustling East African marketplace.",
      fullDesc: "Located just off Fire Road in the heart of Arusha, the Maasai Market Curios and Crafts is a legendary open-air bazaar. It brings together hundreds of local artisans selling vibrant, handmade products. You'll find spectacular hand-beaded necklaces, authentic red-and-black checkered shúkà blankets, wood-carved wildlife sculptures, and gorgeous custom paintings. Bargaining is a respected art form here: always start your negotiation at roughly 50-60% of the vendor's initial offer and enjoy the friendly, lively banter.",
      safetyTips: "Vendors here tend to be very experienced selling to tourists and will typically respect your space. Accept zero pressure to buy anything forced upon you, and do not tolerate undue harassment. If you are not interested in an item, look the vendor in the eye, smile, and say firmly but politely: 'Hapana, lakini asante!' (No, but thank you!). Repeat it as a polite mantra and keep walking: they will quickly respect your boundary and move on.",
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
      image: "assets/Cultural-Heritage-1.jpg",
      detailImages: ["assets/Cultural-Heritage-1.jpg"],
      lat: -3.3769058,
      lng: 36.6581811,
      localTip: "Climb to the top-floor mask gallery showroom for the best art collection.",
      swahiliPhrase: "Sanaa ya Kiafrika (African art masterpieces)",
      shortDesc: "Explore a massive, architectural masterpiece shaped like a traditional African shield. It houses the largest collection of pristine African art, wood carvings, historic weapons, and mask galleries on the continent.",
      fullDesc: "The Cultural Heritage Centre, founded in 1994, has expanded from humble family beginnings into a sprawling compound that serves as a museum, high-end art gallery, vault for precious stones, and a stage for international diplomacy. Its complex design is a conscious break from colonial aesthetics, unlike the European-style urbanisation that characterises much of central Arusha, which grew up around the German-built Boma. The complex is architecturally divided into buildings that are patterned after the three most powerful icons of traditional African life: the Drum, the Spear, and the Shield.",
      safetyTips: "Do not wander aimlessly down the lower wings: climb straight up the central ramp to the top floor mask gallery showroom where the absolute best art collections are housed.",
      swahiliLesson: "Art & Museum Dialogues:\n- 'Naomba kupiga picha hapa?' (Am I allowed to take photos here?)\n- 'Sanaa hii imetengenezwa kwa nini?' (What material is this artwork made of?)\n- 'Mti wa Mpingo.' (Ebony wood.)\n- 'Ni kazi nzuri sana!' (This is excellent work!)",
      audioGuide: "arusha_gallery_narration.mp3"
    },
    {
      index: 6,
      time: "13:15",
      category: "Culinary Stop",
      title: "Arusha Coffee Lodge",
      image: "assets/ArushaCoffeeRestaurant.jpg",
      detailImages: ["assets/ArushaCoffeeRestaurant.jpg", "assets/ArushaCoffeegarden.jpg", "assets/Lunchbreak.jpg"],
      lat: -3.3745016,
      lng: 36.6439397,
      localTip: "Ask for a seat in the outdoor garden pavilion for a tranquil dining atmosphere.",
      swahiliPhrase: "Shamba la kahawa (Coffee farm plantation)",
      shortDesc: "The Vibe: Luxurious, Historic, & Purpose-Driven. Best Time to Visit: Mid-morning for a tour and lunch, or late afternoon for a relaxed coffee. Perfect For: Travellers seeking high-end hospitality, fine dining, and unique, ethically made local crafts.",
      fullDesc: "Set within one of Tanzania's largest coffee plantations on the edge of the city, this beautiful estate seamlessly blends old-world charm with modern luxury. The property serves a dual purpose, acting as both an exclusive retreat for discerning travellers and the home of a heartwarming, globally recognised social enterprise. It is the perfect respite for those looking to experience premier hospitality in a lush, secure, and tranquil environment.",
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
      image: "assets/canvasclaysidebar.jpg",
      detailImages: ["assets/canvasclay.jpg", "assets/canvas_clay-pots.jpg"],
      lat: -3.3980875,
      lng: 36.7047969,
      localTip: "Paint traditional clay mugs and sip local sweet banana wine under a covered canopy garden.",
      swahiliPhrase: "Ufinyanzi na mvinyo (Pottery and banana wine)",
      shortDesc: "The Vibe: Artistic, Meditative, & Community-Focused. Best Time to Visit: Mid-day or late afternoon to escape the heat. Perfect For: Creative souls, couples looking for a unique date activity, and families travelling with children.",
      fullDesc: "Tucked away as a hidden gem in Arusha, Canvas & Clay is a wonderfully inviting, interactive art studio that offers a completely different pace from standard city sightseeing. It is an independent, locally celebrated creative space designed for people of all skill levels to slow down, disconnect from screens, and build something beautiful with their hands. Far more than a traditional gallery where you simply look at art, Canvas & Clay invites you to become the artist, making it an excellent tactile experience for travellers seeking deep connection and personal keepsakes.",
      safetyTips: "This creative seminar operates strictly by appointment. Ensure your reservation window was validated 24 hours prior using our direct link shortcut.",
      swahiliLesson: "Artistic & Creative Dialogues:\n- 'Naomba rangi zaidi, tafadhali.' (I would like more paint colors, please.)\n- 'Mvinyo hii ni tamu sana!' (This wine is very delicious!)\n- 'Nimetengeneza hii mwenyewe.' (I made this pottery myself.)\n- 'Kazi safi!' (Clean work / Excellent job!)",
      audioGuide: "arusha_clay_canvas.mp3"
    },
    {
      index: 9,
      time: "17:30",
      category: "Sundowner",
      title: "Rooftop Lounge at Gran Melia",
      image: "assets/granmeliarooftop.avif",
      detailImages: ["assets/gran-melia-arushapool.jpg", "assets/sundowners.jpg"],
      lat: -3.3706290,
      lng: 36.7066330,
      localTip: "Arrive by 17:45 sharp to watch the sky turn brilliant orange and purple directly over Mount Meru.",
      swahiliPhrase: "Machweo ya Jua (Mt. Meru Sunset View)",
      shortDesc: "The Vibe: Sleek, Panoramic, & Sophisticated. Best Time to Visit: 4:30 PM to 7:00 PM to catch the artisan workshop before moving upstairs for a spectacular sunset. Perfect For: Cocktail connoisseurs and luxury seekers looking for the premier sundowner vantage point.",
      fullDesc: "The Gran Meliá Arusha is a gorgeous luxury resort set on 18 acres of working organic coffee and tea farm in the heart of the city. It is a solid destination for day visitors in the evening thanks to its bars, restaurants and vast estate trails, even though it provides an ultra-high-end sanctuary for overnight guests. The property stands on the historic grounds of the former state-run Hotel 77, host of the famous 1979 G-77 global summit: locals still affectionately call the location just '77'.",
      safetyTips: "Walk past the central lobby to the elevator core and select the rooftop terrace layout. Smart casual dress is required—no open sandals or singlets.",
      swahiliLesson: "Sunset & Scenic Dialogues:\n- 'Mlima Meru unapendeza sana machweoni!' (Mount Meru looks beautiful at sunset!)\n- 'Kinywaji kiko wapi?' (Where is the drink?)\n- 'Kiti cha nje, tafadhali.' (A seat outside, please.)\n- 'Hapa ni pazuri mno.' (This place is absolutely wonderful.)",
      audioGuide: "arusha_gran_melia.mp3"
    },
    {
      index: 10,
      time: "19:00",
      category: "Dinner Anchor",
      title: "Amber Restaurant",
      image: "assets/ambersidebar.JPG",
      detailImages: ["assets/amberribs.jpg"],
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
      title: "Eagle's Nest Cafe",
      image: "assets/hero.png",
      lat: -3.3705549244875126,
      lng: 36.69384013091561,
      swahiliPhrase: "Kiota cha tai (Eagle's nest)",
      shortDesc: "The Vibe: Ultra-Focused, Cozy, & Digital Nomad Sanctuary. Best Time to Visit: Morning to early afternoon for remote work or study. Perfect For: Freelancers, digital nomads, students, and caffeine purists who need reliable workspaces, internet, and specialty coffee.",
      hasDetailedGuide: true,
      vibe: "Ultra-Focused, Cozy, & Digital Nomad Sanctuary",
      bestTime: "Morning to early afternoon for an uninterrupted, high-productivity remote work block or a quiet study session.",
      perfectFor: "Freelancers, digital nomads, students, and caffeine purists who prioritize a reliable workspace, excellent internet, and stellar coffee.",
      overview: "Eagle’s Nest Café is rapidly becoming known as one of Arusha’s absolute best-kept secrets for remote workers and digital nomads. Hidden away from the louder commercial strips, this specialized café was intentionally built to cater to those who need to lock in, open up a laptop, and get things done. Renowned for its focus on providing a seamless, stress-free work environment, it strips away the typical distractions of multi-layered tourist venues to focus on three critical pillars: blazing-fast internet, constant electricity, and premium specialty coffee.",
      whatToDo: [
        { title: "The Ultimate Workspace", text: "Settle into a quiet corner with abundant, reliable power outlets and a stable internet connection. It is the type of café where you can comfortably stick around for hours without feeling rushed by the staff." },
        { title: "The Pul pulled Coffee Experience", text: "As a specialty coffee destination, they take their brewing seriously. Expect expertly crafted espresso drinks, smooth pour-overs, and a rich caffeine profile sourced from top-tier local beans that will keep your energy levels high all morning." },
        { title: "Light Bites & Fuel", text: "Pair your workday with a rotating selection of fresh pastries, quick sandwiches, and simple, high-quality cafe fare designed to keep you focused without putting you into a food coma." }
      ],
      theScene: "The atmosphere at Eagle’s Nest is uniquely peaceful and focused. Unlike the bustling, high-volume tourist cafés near the Clock Tower or the festive garden environments across town, this space maintains a respectful, library-adjacent quietness. It’s highly social in a professional sense—you will find an inspiring community of local creatives, expat tech workers, and independent travelers quietly co-working side-by-side.",
      insiderTip: "If you have an intense afternoon of video calls or deadlines, this is your fallback sanctuary. The staff is incredibly friendly and welcoming to long-stayers, making it feel more like a premium shared office with a world-class barista than a traditional high-turnover restaurant.",
      goIfYou: [
        "Need a guaranteed gold-standard remote work environment with strong Wi-Fi, silence, and plenty of power outlets.",
        "Appreciate specialized, expertly extracted coffee over a giant, commercial food menu.",
        "Want to escape the high-turnover tourist crowds to mix with Arusha's local digital professional community."
      ],
      avoidIf: [
        "You are looking for a loud, high-energy party atmosphere or a family-friendly playground venue.",
        "You want a sprawling, full-course, fine-dining dinner experience."
      ]
    },
    {
      altId: '1b',
      parentIndex: 0,
      title: "Coffee Culture",
      image: "assets/hero.png",
      lat: -3.3719259221558495,
      lng: 36.694397155849444,
      swahiliPhrase: "Utamaduni wa kahawa (Coffee culture)",
      shortDesc: "The Vibe: Modern, Chic, & Relaxed. Best Time to Visit: Morning (8:00 AM – 10:00 AM) for a premium breakfast, or as a cozy workspace mid-day. Perfect For: Coffee purists, digital nomads, and travellers looking for a highly polished, comfortable urban sanctuary.",
      hasDetailedGuide: true,
      vibe: "Modern, Chic, & Relaxed",
      bestTime: "Morning (8:00 AM – 10:00 AM) for a premium breakfast, or as a cozy workspace mid-day.",
      perfectFor: "Coffee purists, digital nomads, and travellers looking for a highly polished, comfortable urban sanctuary.",
      overview: "Situated directly at the iconic Clock Tower roundabout, Coffee Culture is a stylish, boutique gem that brings a sleek and contemporary aesthetic to Arusha’s central hub. Known for its meticulously curated, beautiful interiors and welcoming air-conditioned space, it feels world-class from the moment you step inside. The cafe balances an upbeat city-centre energy with an interior atmosphere designed for slow, relaxed enjoyment, making it a favourite for those who appreciate fine details and warm hospitality.",
      whatToDo: [
        { title: "The Signature Brews", text: "This is the place to indulge in specialty coffees. Their rich, smooth Moccachinos are a major highlight, perfectly balancing premium Tanzanian coffee with decadent chocolate notes." },
        { title: "A Hearty Menu", text: "While they serve classic breakfasts, they are locally famous for their indulgent waffles (pro-tip: ask for a drizzle of local honey) and an exceptionally good Alfredo Pasta that rivals fine-dining establishments. They also feature fresh, healthy options like Buddha bowls." },
        { title: "Work & Play", text: "Equipped with reliable high-speed Wi-Fi, it’s a brilliant remote working spot. Alternatively, if you are killing time before your guide arrives, they keep a collection of board games available for guests." }
      ],
      theScene: "Stepping out of the lively chaos of the central roundabout and into Coffee Culture feels like discovering a peaceful oasis. Accompanied by a great musical backdrop (often spinning relaxed global sounds like Cesaria Evora), the atmosphere is cozy and deeply inviting. The owner frequently walks the floor to personally greet guests, instilling a genuine warmth that sets it apart. Furthermore, the café prides itself on its spotlessly clean facilities, even featuring a rare baby-changing station: a thoughtful touch for travelling families.",
      insiderTip: "While the staff is incredibly friendly and professional, the kitchen values precision over speed. This isn't a 'grab-and-go in five minutes' spot: it’s a place to settle in, enjoy the music, play a game, and let your guide pick you up right from the heart of the city.",
      goIfYou: [
        "Want premium, expertly crafted specialty coffee drinks and standout brunch options like waffles or pasta.",
        "Appreciate beautiful, highly clean, and well-maintained modern spaces with great music and air conditioning.",
        "Need a reliable central spot to open a laptop, use strong Wi-Fi, or comfortably wait for a tour to start."
      ],
      avoidIf: [
        "You are in an extreme rush: the friendly service runs at a leisurely, relaxed pace to ensure quality.",
        "You want a sprawling outdoor garden setting: this is a premium, cozy urban cafe."
      ]
    },
    // --- Maasai Market alternatives ---
    {
      altId: '4a',
      parentIndex: 3,
      title: "Bounce Warehouse",
      image: "assets/bouncepage.jpg",
      detailImages: ["assets/bouncesidebarjpg.jpg"],
      lat: -3.383785,
      lng: 36.683923,
      swahiliPhrase: "Kuruka na kucheza (Jump and play)",
      shortDesc: "First Premium Indoor Sports Arena of Arusha. Popular for Padel, Pickleball, Badminton, Football etc. This is a great place to hangout & meet residents & locals in a natural way.",
      hasDetailedGuide: true,
      vibe: "Energetic, Active, & Social",
      bestTime: "Late afternoon & evenings on weekdays: mornings on weekends.",
      perfectFor: "Active travellers, sports enthusiasts, and anyone looking to meet Arusha residents, expats, and locals in a natural social setting.",
      overview: "Bounce Warehouse is Arusha's premier indoor sports arena, offering facilities for Padel, Pickleball, Badminton, and Football. It sits slightly off the main tourist trail, making it a hub where middle-class locals, residents, and expats gather to play, exercise, and socialise.",
      whatToDo: [
        { title: "Indoor Sports", text: "Rent a court for a game of Padel, Pickleball, or Badminton with friends or join local pickup matches." },
        { title: "Social Gatherings", text: "Attend themed community events like karaoke nights, tournaments, and women's social game leagues." },
        { title: "Hangout Deck", text: "Relax on the social deck after a game, order local juices or drinks, and mingle with Arushans unwinding after work." }
      ],
      theScene: "Bounce is high-energy and very community-centric. It offers a authentic glimpse into Arusha's urban social life. If you want to experience the city from a resident's perspective, this venue comes alive on weekday evenings with a warm, inclusive crowd.",
      insiderTip: "During weekdays, it is best to book court times for the evening: on weekends, mornings are highly popular and offer a great family-friendly sports vibe.",
      goIfYou: [
        "Want to play indoor racket sports or football in a modern facility.",
        "Are keen to interact with local expats, business professionals, and resident Arushans.",
        "Enjoy active recreation and community-driven social events."
      ],
      avoidIf: [
        "You prefer a quiet, historic museum or sightseeing tour.",
        "You are looking for traditional outdoor wildlife viewing or safaris."
      ]
    },
    // --- Coffee Lodge alternatives ---
    {
      altId: '6a',
      parentIndex: 6,
      title: "Sable Square",
      image: "assets/sablesquarefront.jpg",
      detailImages: ["assets/butter&scotchcafe.jpg", "assets/smileys.jpg"],
      lat: -3.360309,
      lng: 36.609154,
      swahiliPhrase: "Soko la kisasa (Modern marketplace)",
      shortDesc: "A commercial plaza with a wildlife corridor. Features boutique shopping, Butter & Scotch deck, Msumbi Coffees, and views of Arusha Airport's runway.",
      hasDetailedGuide: true,
      vibe: "Convenient, Surprising, & Nature-Infused",
      bestTime: "Late morning for coffee, or afternoon to watch gazelles in the wildlife corridor.",
      perfectFor: "Travellers seeking convenience, great coffee, and a quiet spot to wait for airport transfers or read in silence.",
      overview: "Sable Square sits on a quietly remarkable piece of land in northern Arusha. Adjacent to Arusha Airport, this commercial plaza features boutique shops, specialty cafes, and a functioning wildlife corridor running right along its boundary.",
      whatToDo: [
        { title: "Butter & Scotch Deck", text: "Order a coffee or their signature chilli gin on the deck while listening to relaxed French jazz." },
        { title: "Msumbi Coffees Sanctuary", text: "Visit this quiet, music-free cafe: a local haven for researchers, writers, and long-term residents seeking silent workspace." },
        { title: "Spot the Wildlife", text: "Look out over the fenced wetland corridor to see habituated Grant's gazelles grazing, or catch a glimpse of the rare, prehistoric-looking local birds." }
      ],
      theScene: "On the surface, Sable Square is a modern shopping plaza. Underneath, it sits on a historic colonial sorghum farm established by Colonel Grey in the 1950s, complete with a private airstrip that evolved into Arusha Airport. It is also famous among locals as the runway where an Ethiopian Airlines Boeing 767 made a mistake landing in 2013, successfully taking off again after being completely stripped of seats and fuel.",
      insiderTip: "If you need a quiet place to read or work, choose Msumbi Coffees: if you want a lively vibe and outdoor seating next to the gazelle corridor, head to Butter & Scotch.",
      goIfYou: [
        "Need a convenient stop near Arusha Airport with great food and coffee options.",
        "Appreciate quiet workspace environments or want to observe gazelles in a city setting.",
        "Want to stock up on travel supplies or safari gear."
      ],
      avoidIf: [
        "You are seeking an old, traditional African street market.",
        "You want a rustic wilderness safari: this is a modern commercial complex."
      ]
    },
    {
      altId: '6b',
      parentIndex: 6,
      title: "Endurance Estate",
      image: "assets/hero.png",
      lat: -3.354186,
      lng: 36.615962,
      swahiliPhrase: "Kambi ya msingi (Base camp)",
      shortDesc: "Basecamp is a dynamic community hub designed by expats and locals. Offers padel, pickleball, climbing walls, bouldering, and a popular social pub.",
      hasDetailedGuide: true,
      vibe: "Energetic, Social, & Active",
      bestTime: "Weekdays after 5:00 PM: weekends for social match play.",
      perfectFor: "Active travellers, climbing enthusiasts, and solo adventurers looking to connect with expats and young local professionals.",
      overview: "Born from a collaboration between long-term expats and Tanzanian locals, Basecamp is one of Arusha’s newest and most dynamic community hubs. It was explicitly designed to break the mould of traditional nightlife by offering a healthy, high-energy environment centred around sports, recreation, and casual socialisation.",
      whatToDo: [
        { title: "Climbing & Bouldering", text: "Test your grip on the dedicated climbing and bouldering wall: perfect for both beginners and seasoned climbers." },
        { title: "Racket Sports", text: "Smash a game of Padel or Pickleball on their top-tier courts, which are driving the fast-growing racket sports trend in Arusha." },
        { title: "Unwind & Socialise", text: "Play a friendly game of cornhole outdoors, or grab a drink and a bite to eat at the social hub after a session." }
      ],
      theScene: "Basecamp truly comes alive in the evenings. Starting around 5:00 PM, the energy shifts as a diverse, friendly crowd of residents, young professionals, expats, and locals gather after work. If you are looking to integrate into Arusha's active community, this is one of the best and safest spaces to do so: the atmosphere is inclusive and warm, making it easy to strike up a conversation between games.",
      insiderTip: "Head here around sunset on weeknights to catch the post-work rush, or check their schedule for community tournament days to experience the absolute best of Basecamp's vibrant social scene.",
      goIfYou: [
        "Enjoy active bouldering, climbing, padel, or pickleball.",
        "Want to meet a friendly expat and local crowd in a casual, sports-focused setting.",
        "Appreciate outdoor spaces with good food, cold drinks, and a high-energy vibe."
      ],
      avoidIf: [
        "You want a quiet, intimate, candle-lit fine-dining experience.",
        "You prefer a slow-paced museum tour or cultural site."
      ]
    },
    {
      altId: '6c',
      parentIndex: 6,
      title: "Blue Heron (Schwari)",
      image: "assets/blueheronsidebar.JPG",
      detailImages: ["assets/blueheron.jpg", "assets/blueheronview.jpg"],
      lat: -3.386010,
      lng: 36.613022,
      swahiliPhrase: "Ndege wa maji (Water bird)",
      shortDesc: "A beloved Arusha staple bridging the gap between a peaceful garden sanctuary and an active social hub. Features wood-fired pizzas, Schwari padel courts, and local crafts shopping.",
      hasDetailedGuide: true,
      vibe: "Relaxed, Garden Oasis, & Multi-Generational",
      bestTime: "Weekend lunches for families, or late afternoons for wood-fired pizza and sunset drinks.",
      perfectFor: "Families, groups of friends, foodies, and padel players looking for a scenic game and casual dining.",
      overview: "The Blue Heron is a beloved Arusha staple that masterfully bridges the gap between a peaceful garden sanctuary and an active social hub. Nestled on a beautiful property featuring expansive, regenerating green lawns, it is designed for long, lazy afternoons that easily stretch into cozy evenings.",
      whatToDo: [
        { title: "Schwari Padel Centre", text: "Play Padel on the top-tier courts (operated in partnership with Padel Centre TZ) set within the gorgeous gardens." },
        { title: "Wood-Fired Dining", text: "Order from their menu, famous locally for wood-fired pizzas, fresh farm-to-table salads, and large shareable comfort food portions." },
        { title: "Artisan Shopping", text: "Browse the on-site boutique featuring ethical local crafts (including hand-woven products from WomenCraft) and custom handmade clothing." }
      ],
      theScene: "The Blue Heron has an unpretentious atmosphere that feels both vibrant and deeply relaxing. By day, you will find families enjoying weekend brunches and friends gathering under the mature trees. As the sun sets, the mood shifts into a cozy lounge vibe: perfect for a girls' night out, post-padel drinks, or a romantic dinner. It draws a pleasant blend of travellers, expats, and longtime Arusha residents.",
      insiderTip: "If you want to play a game on the new padel courts, it is highly recommended to book your slot in advance through the Padel Centre Tanzania platform, as peak evening and weekend times fill up fast!",
      goIfYou: [
        "Want an excellent meal (especially wood-fired pizza) in a beautiful, open-air garden setting.",
        "Are travelling with family or a group and need a space that accommodates all ages.",
        "Want to pair a high-energy sport like Padel with a relaxed post-game drink and boutique shopping."
      ],
      avoidIf: [
        "You want a fast, grab-and-go dining experience: service here follows a relaxed, leisurely pace.",
        "You are strictly on a tight backpacker budget (the portions are large, but prices are slightly higher than typical local eateries)."
      ]
    },
    {
      altId: '6d',
      parentIndex: 6,
      title: "Tumbili Lodge Restaurant",
      image: "assets/tumbili.avif",
      detailImages: ["assets/tumbiligarden.jpg"],
      lat: -3.392684,
      lng: 36.627238,
      swahiliPhrase: "Nyumba ya tumbili (House of monkeys)",
      shortDesc: "A hidden culinary sanctuary in the quiet suburbs of Olasiti. Features manicured garden pathways, a central fish pond, cozy fireplace terrace, and local/sushi menus.",
      hasDetailedGuide: true,
      vibe: "Peaceful, Botanical Oasis, & Intimate",
      bestTime: "Late afternoon (around 4:00 PM) for garden walks and sundowners, leading into dinner.",
      perfectFor: "Foodies looking for a hidden gem, couples seeking a romantic setting, and travellers wanting a quiet, nature-filled escape.",
      overview: "Tumbili Lodge is a beautiful boutique estate located in the quiet outskirts of Arusha (near Olasiti), but you don't need to check in to experience its best features. For day visitors, the property opens up as a stunning, hidden culinary sanctuary. Surrounded by mature acacia trees, vibrant tropical plants, and a beautiful central pond, the estate feels like a secret botanical garden.",
      whatToDo: [
        { title: "Intimate Dining", text: "Dine at the restaurant, which boasts a highly praised menu that creatively spins local ingredients into international delicacies, alongside a specialized Friday sushi menu." },
        { title: "Sundowners by the Pond", text: "Grab a cocktail or a glass of wine from the bar and sit on the terrace next to the fish pond as golden hour fades." },
        { title: "Garden Wandering", text: "Walk the manicured pathways before your meal: true to its name ('Tumbili' means monkey in Swahili), you are highly likely to spot playful monkeys leaping through the canopy." }
      ],
      theScene: "The atmosphere at Tumbili is defined by absolute tranquillity. Because it functions primarily as a boutique lodge, the restaurant never feels overcrowded, offering a level of privacy that is hard to find in central Arusha. Tables are spaced generously across outside terraces, garden nooks, and around the pond, shifting into a romantic, candle-lit ambiance as night falls.",
      insiderTip: "If your schedule allows, aim for a Friday visit to experience their specialized sushi menu alongside their standard à la carte options, and make sure to request a table right by the pond for the best sunset views.",
      goIfYou: [
        "Want an exceptional, peaceful dining experience away from the noise of the city centre.",
        "Are looking for a scenic, nature-rich spot for afternoon drinks or sunset cocktails.",
        "Appreciate fresh, farm-to-table menus with great options for both meat-eaters and vegetarians."
      ],
      avoidIf: [
        "You want a quick stopover: the venue is located a bit further out in the suburbs and deserves a leisurely, unhurried afternoon.",
        "You are looking for a high-energy social scene or a bustling nightlife crowd."
      ]
    },
    // --- Canvas & Clay alternatives ---
    {
      altId: '7a',
      parentIndex: 8,
      title: "Village Supermarket",
      image: "assets/villagecafenjirosidebar.JPG",
      detailImages: ["assets/villagecake.jpg"],
      lat: -3.392783,
      lng: 36.704375,
      swahiliPhrase: "Duka kuu la kijiji (Village supermarket)",
      shortDesc: "A modern, high-end family-run grocery chain. Perfect for digital nomads, international restocks, or a quick coffee/gelato at the attached cafe.",
      hasDetailedGuide: true,
      vibe: "Familiar, Westernised, & Convenient",
      bestTime: "Mid-morning for grocery restocks and coffee, or a quick lunch stop between itinerary segments.",
      perfectFor: "Expats, safari travellers needing a serious snack haul, and digital nomads seeking a clean, air-conditioned workspace.",
      overview: "With its primary branch in the residential Njiro area (and another at AIM Mall on Dodoma Road), Village Supermarket is a high-end, family-run grocery chain that serves as a comforting slice of home for international travellers. It offers a clean, air-conditioned urban escape featuring premium imports and an attached cafe.",
      whatToDo: [
        { title: "The Supermarket Haul", text: "Browse spotlessly clean aisles stocked with premium global imports, organic/gluten-free specialty items, an international wine market, an in-house bakery, and a fresh butcher shop." },
        { title: "The In-Store Café", text: "Enjoy a latte, fresh in-house gelato, or a multi-cuisine menu (ranging from toasted sandwiches to Indian biryani) at the attached Village Cafe." },
        { title: "Work in Comfort", text: "Open a laptop in the cafe: a quiet sanctuary for digital nomads with fast Wi-Fi, abundant power outlets, and a safe, unbothered environment." }
      ],
      theScene: "The atmosphere at Village Supermarket and its café is a stark contrast to Arusha’s chaotic open-air street markets. It is exceptionally clean, organised, and modern, acting as a convenient restock station before setting out on safaris.",
      insiderTip: "If you are staying on the southern side of the city near Njiro, the Njiro Complex branch is widely considered the cleanest, most reliably managed commercial spot in the neighbourhood. Make sure to try their fresh gelato after you wrap up your grocery shopping.",
      goIfYou: [
        "Need specialized dietary products (gluten-free, organic) or specific international brands you forgot to pack.",
        "Want a secure, clean environment to open a laptop, use fast Wi-Fi, and enjoy a quality coffee.",
        "Are setting out on a multi-day safari and need a comprehensive snack and supply restock."
      ],
      avoidIf: [
        "You are looking for an immersive, deeply traditional Tanzanian market experience (head to the Maasai Market instead).",
        "You expect fast-paced, high-speed kitchen service at the café: the staff is exceptionally warm, but the kitchen operates at a typical, relaxed local pace."
      ]
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
      image: "assets/georgestavernsidebar.JPG",
      detailImages: ["assets/georgestavern.webp"],
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
      image: "assets/peacerestaurantsidebar.JPG",
      detailImages: ["assets/peacefood.jpg", "assets/peacesoup.jpg"],
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
      image: "assets/kabilasidebar.JPG",
      detailImages: ["assets/kabila1.jpg", "assets/kabila2.jpg"],
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

    // Auto-collapse the 2nd column (details panel) so it doesn't obscure the overlay
    const detailsCol = document.getElementById('sidebar-details-column');
    const overlayClick = document.getElementById('map-click-overlay');
    const toggleArrow = document.getElementById('details-toggle-arrow');
    if (detailsCol) detailsCol.classList.add('collapsed');
    if (overlayClick) overlayClick.classList.remove('active');
    if (toggleArrow) toggleArrow.style.transform = 'rotate(180deg)';

    // Auto-collapse the main sidebar (Column 1) so it doesn't cover overlay contents
    closeMainSidebar();

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
        const overlay = document.getElementById('detail-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Collapse the 2nd column (details panel) so it moves out of the way
    const detailsCol = document.getElementById('sidebar-details-column');
    const overlayClick = document.getElementById('map-click-overlay');
    const toggleArrow = document.getElementById('details-toggle-arrow');
    if (detailsCol) detailsCol.classList.add('collapsed');
    if (overlayClick) overlayClick.classList.remove('active');
    if (toggleArrow) toggleArrow.style.transform = 'rotate(180deg)';

    activeStopIndex = null;
    activeAltId = null;
    refreshMarkerStates();
  };

  // Helper to programmatically close the main sidebar (Column 1)
  const closeMainSidebar = () => {
    const sb = document.getElementById('sidebar');
    const hb = document.getElementById('hamburger-btn');
    const io = document.getElementById('hamburger-icon-open');
    const ic = document.getElementById('hamburger-icon-close');
    if (sb && sb.classList.contains('active')) {
      sb.classList.remove('active');
      if (hb) hb.classList.remove('active');
      if (io) io.classList.remove('hidden');
      if (ic) ic.classList.add('hidden');
      const overlay = document.getElementById('map-click-overlay');
      if (overlay) overlay.classList.remove('active');
    }
  };

  // ── Editorial Image Helpers ──────────────────────────────────────────────
  // Builds a float-wrapped <figure> for in-body editorial image placement.
  // alignment: 'left' | 'right' | 'full'
  const buildEditorialFigure = (src, caption, alignment) => {
    const fig = document.createElement('figure');
    fig.className = `editorial-figure editorial-figure--${alignment}`;
    const img = document.createElement('img');
    img.src = src;
    img.alt = caption || '';
    img.className = 'editorial-figure__img';
    fig.appendChild(img);
    if (caption) {
      const cap = document.createElement('figcaption');
      cap.className = 'editorial-figure__caption';
      cap.textContent = caption;
      fig.appendChild(cap);
    }
    return fig;
  };

  // Clearfix so floats never bleed into following sections.
  const buildClearfix = () => {
    const cf = document.createElement('div');
    cf.className = 'editorial-clearfix';
    return cf;
  };

  // Overflow photo gallery grid for 3rd image onward.
  const buildOverflowGallery = (images, captions) => {
    const section = document.createElement('div');
    section.className = 'editorial-overflow-gallery';
    const heading = document.createElement('p');
    heading.className = 'editorial-overflow-gallery__heading';
    heading.textContent = 'Photo Gallery';
    section.appendChild(heading);
    const grid = document.createElement('div');
    grid.className = 'editorial-overflow-gallery__grid';
    images.forEach((src, idx) => {
      const fig = document.createElement('figure');
      fig.className = 'editorial-overflow-gallery__item';
      const img = document.createElement('img');
      img.src = src;
      img.alt = captions[idx] || '';
      img.className = 'editorial-overflow-gallery__img';
      fig.appendChild(img);
      if (captions[idx]) {
        const cap = document.createElement('figcaption');
        cap.className = 'editorial-figure__caption';
        cap.textContent = captions[idx];
        fig.appendChild(cap);
      }
      grid.appendChild(fig);
    });
    section.appendChild(grid);
    return section;
  };

  // Injects body images naturally into a container using alternating float alignment.
  // bodyImages: [{ src, caption }]
  // Image 1 → float-left after 2nd body element; Image 2 → float-right after 4th body element; 3+ → overflow gallery.
  const injectEditorialImages = (container, bodyImages) => {
    if (!bodyImages || bodyImages.length === 0) return;
    const alignments = ['left', 'right'];
    const inlineCount = Math.min(2, bodyImages.length);
    // Gather eligible insertion targets (excluding hero figure = first child)
    const children = Array.from(container.children);
    const targets = children.filter((el, i) =>
      i > 0 && (el.tagName === 'P' || el.tagName === 'H4' || el.tagName === 'UL' || el.tagName === 'PRE' || el.tagName === 'DIV')
    );
    // Insert after target indices [1] and [3]
    const insertAfterIdx = [1, 3].slice(0, inlineCount);
    insertAfterIdx.forEach((tIdx, i) => {
      const target = targets[tIdx];
      if (!target) return;
      const fig = buildEditorialFigure(bodyImages[i].src, bodyImages[i].caption, alignments[i]);
      const cf = buildClearfix();
      if (target.nextSibling) {
        container.insertBefore(fig, target.nextSibling);
        container.insertBefore(cf, fig.nextSibling);
      } else {
        container.appendChild(fig);
        container.appendChild(cf);
      }
    });
    // Remaining images → overflow gallery
    if (bodyImages.length > 2) {
      const ov = buildOverflowGallery(
        bodyImages.slice(2).map(b => b.src),
        bodyImages.slice(2).map(b => b.caption)
      );
      container.appendChild(ov);
    }
  };

  // Helper to wrap tables for mobile responsiveness
  const wrapTable = (tbl) => {
    const wrap = document.createElement('div');
    wrap.className = 'editorial-table-wrapper';
    wrap.appendChild(tbl);
    return wrap;
  };

  // Dynamic full guide compiler for main stops
  const compileDetailedGuide = (node, container) => {
    // 1. Hero / Primary image — always full-width, never floated
    const mainImgSrc = (node.detailImages && node.detailImages.length > 0) ? node.detailImages[0] : node.image;
    const heroFig = document.createElement('figure');
    heroFig.className = 'editorial-hero';
    const heroImg = document.createElement('img');
    heroImg.src = mainImgSrc;
    heroImg.alt = node.title;
    heroImg.className = 'editorial-hero__img';
    heroFig.appendChild(heroImg);
    container.appendChild(heroFig);

    // Prepare body images (everything after hero) for later editorial injection
    const bodyImgDefs = [];
    if (node.detailImages && node.detailImages.length > 1) {
      const captions = node.editorialCaptions || [];
      node.detailImages.slice(1).forEach((src, idx) => {
        bodyImgDefs.push({ src, caption: captions[idx] || '' });
      });
    }

    // 2. Category Badge
    const catBadge = document.createElement('span');
    catBadge.className = 'badge-jungle text-xs mb-3 inline-block';
    catBadge.textContent = `${node.time} | ${node.category}`;
    container.appendChild(catBadge);

    // 3. Heading
    const titleEl = document.createElement('h3');
    titleEl.className = 'text-2xl font-black text-slate-800 tracking-tight mb-4';
    titleEl.textContent = node.title;
    container.appendChild(titleEl);

    // 4. Custom compilations for specific stops
    if (node.index === 0) { // Kitamu Coffee
      // Welcoming message
      const welcomePara = document.createElement('p');
      welcomePara.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      welcomePara.textContent = "Karibuni Arusha! Mizizi Bajaj Adventures is a locally designed tour experience made to enjoy at your pace using the most local mode of travel: the Tanzanian Bajaj (or \"tuk-tuk\", as the more travelled of you might know it).";
      container.appendChild(welcomePara);

      const routeOverview = document.createElement('p');
      routeOverview.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      routeOverview.textContent = "This Central Route is a 9-hour adrenaline high loop through Arusha. You'll explore the historic clock tower, view raw tanzanite gemstone checklists, African art, coffee plantations, sunset views, authentic culinary foods, and maybe... just maybe you'll get to experience and see Arushan life beyond the usual tourist experience.";
      container.appendChild(routeOverview);

      // Intro
      const introPara = document.createElement('p');
      introPara.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-semibold';
      introPara.textContent = "Located on Goliondoi Street right in the heart of the central Clock Tower area, Kitamu Coffee (often expanding its identity into \"Kitamu House\") is a wonderfully expressive downtown staple. While it serves as an ultra-convenient jump-off landmark for city day-tours, a step past its entrance reveals a surprisingly expansive, multi-layered venue. Far from just a tiny, modern grab-and-go espresso bar, Kitamu blends a cozy urban café scene with a rustic, nature-filled garden restaurant that features gorgeous beaded chandeliers, wooden bridges, and clear, unobstructed views of Mount Meru.";
      container.appendChild(introPara);

      // What to Do
      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "📋 What to Do";
      container.appendChild(sub1);

      const doPara = document.createElement('p');
      doPara.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      doPara.textContent = "Kitamu shines because it transitions effortlessly from an early morning fueling station into an afternoon lounge space:";
      container.appendChild(doPara);

      const doList = document.createElement('ul');
      doList.className = 'list-disc pl-5 space-y-2 mb-6 text-sm text-stone-600 font-medium';
      doList.innerHTML = `
        <li><strong>The Coffee & Bakery:</strong> Sourcing straight from local volcanic northern Tanzanian farms, their rich, robust coffee is best enjoyed via French press. Pair it with their legendary carrot cake—frequently rated by long-time residents as the absolute best carrot cake in Arusha.</li>
        <li><strong>Local & Global Eats:</strong> The extensive menu features excellent local Tanzanian staples like bhajia (savory fried dough balls), chapatis, and fresh tropical juices, alongside comforting Western plates like burgers, wood-fired pizzas, and widely praised pork ribs.</li>
        <li><strong>The Souvenir Shop:</strong> If you want to bypass the high-pressure bargaining of the main street markets, the café hosts a small, low-stress, fixed-price local souvenir corner right on the property.</li>
      `;
      container.appendChild(doList);

      // The Scene
      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "🌟 The Scene";
      container.appendChild(sub2);

      const scenePara = document.createElement('p');
      scenePara.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      scenePara.textContent = "Inside, Kitamu is a vibrant mix of colorful African fabrics, warm wood textures, and lively global background music. Because of its prime central location, the crowd changes constantly—ranging from early-rising safari tourists checking their maps to local professionals conducting casual afternoon meetings. The back garden area offers a peaceful, scenic bubble that feels completely disconnected from the busy street traffic out front.";
      container.appendChild(scenePara);

      // Insider Tip Warning Box
      const tipBox = document.createElement('div');
      tipBox.className = 'bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-900';
      tipBox.innerHTML = `
        <p class="font-extrabold uppercase text-[10px] tracking-widest text-amber-700 mb-1.5">💡 Insider Tip: Slow Food Alert</p>
        <p class="font-semibold leading-relaxed">
          While the waitstaff is incredibly warm and polite, the kitchen prioritizes cooking things fresh from scratch rather than relying on microwaves. Food orders can easily take 40 minutes to arrive. Treat this as a leisurely European-style dining experience—grab a fresh juice or a cocktail, enjoy the garden atmosphere, and don't come if you are in a high-speed rush.
        </p>
      `;
      container.appendChild(tipBox);

      // Go If You / Avoid If comparison
      const checkGrid = document.createElement('div');
      checkGrid.className = 'grid grid-cols-2 gap-4 mt-6';
      
      const goCol = document.createElement('div');
      goCol.className = 'space-y-2';
      goCol.innerHTML = `
        <p class="font-extrabold text-[10px] uppercase tracking-widest text-emerald-700 flex items-center gap-1">🟢 Go If You</p>
        <ul class="space-y-1.5 text-xs text-stone-600 font-semibold list-none pl-0">
          <li class="flex items-start gap-1">✔ Want high-quality Tanzanian coffee and the city's absolute best carrot cake.</li>
          <li class="flex items-start gap-1">✔ Are looking for a secure garden oasis to decompress after the Maasai Market.</li>
          <li class="flex items-start gap-1">✔ Want a flexible menu satisfying local flavors and Western comfort.</li>
        </ul>
      `;
      
      const avoidCol = document.createElement('div');
      avoidCol.className = 'space-y-2';
      avoidCol.innerHTML = `
        <p class="font-extrabold text-[10px] uppercase tracking-widest text-red-600 flex items-center gap-1">🔴 Avoid If</p>
        <ul class="space-y-1.5 text-xs text-stone-600 font-semibold list-none pl-0">
          <li class="flex items-start gap-1">✖ You are on a tight timeline; service follows a relaxed, slow-food pace.</li>
          <li class="flex items-start gap-1">✖ You want a quiet library study scene; it is a bustling community hub.</li>
        </ul>
      `;
      
      checkGrid.appendChild(goCol);
      checkGrid.appendChild(avoidCol);
      container.appendChild(checkGrid);
    } 
    else if (node.index === 2) { // Clock Tower
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc1.textContent = "The Arusha Clock Tower: midpoint between Cairo and Cape Town... or is it actually? The true depth of the history of the clock tower lies less in the story of its construction and more in the rich colonial history of the area where it stands.";
      container.appendChild(desc1);

      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "Pre-War Era";
      container.appendChild(sub1);

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc2.textContent = "This tour properly begins at the Arusha Clock Tower, a significant symbol of Arusha's colonial history. This area was once inhabited by the agro-pastoralist Arusha Maasai, attracted by its cooler climate, fertile volcanic soil, and plentiful water sources for livestock and agriculture. Colonial ambitions of the German Empire (the first colonial power to claim Arusha), led by Captain Kurt Johannes, involved military force to dominate the local population and establish a lasting presence. The Arusha Clock Tower now stands on the site of the former German Fortress Boma, the headquarters of this colonial expansion.";
      container.appendChild(desc2);

      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "British Colonisation";
      container.appendChild(sub2);

      const desc3 = document.createElement('p');
      desc3.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc3.textContent = "Arusha transitioned from a military garrison to a commercial town during World War I in 1916 when the British took control, leading to the emergence of a notable Greek community. The Arusha Clock Tower, a gift from Christos Galanos, a Greek millionaire, symbolises the 'rags-to-riches' story of the early 20th-century East African diaspora. Galanos arrived in East Africa around 1908 as a railway subcontractor and, coming from humble beginnings, built a fortune through sisal and coffee farming, owning large estates in Tanga, Nairobi, Morogoro, and Lindi. He donated the clock tower to commemorate the end of World War II, with the plaque that reads: 'Presented by Christos Galanos, Esquire, to commemorate the glorious victory of the Allied Nations, 1945.'";
      container.appendChild(desc3);

      const sub3 = document.createElement('h4');
      sub3.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub3.textContent = "The Midpoint Myth: Cape to Cairo and the Colonial Fantasy";
      container.appendChild(sub3);

      const desc4 = document.createElement('p');
      desc4.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc4.textContent = "The Arusha Clock Tower is often claimed to be the halfway point between Cairo, Egypt, and Cape Town, South Africa, a notion stemming from the 'Cape to Cairo' vision of British colonialist Cecil Rhodes for a continuous line of British territories and a transcontinental railway across Africa. Although this claim is scientifically inaccurate, the myth endures, as the tower symbolises the heart of the former British Empire in Africa and serves as a landmark for overland travellers exploring the continent by car or motorcycle.";
      container.appendChild(desc4);

      const sub4 = document.createElement('h4');
      sub4.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub4.textContent = "The Arusha Clock Tower on Screen";
      container.appendChild(sub4);

      const desc5 = document.createElement('p');
      desc5.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc5.textContent = "The clock tower features prominently in the John Wayne film, Hatari!, offering a glimpse into Tanzania's pre-conservation history. A memorable scene shows a baby elephant chasing the character 'Dallas' into the nearby 'Clock Tower Supermarket', which is still operational today, with the exit used by the character still recognisable.";
      container.appendChild(desc5);

      // Timeline Table
      const tblTitle = document.createElement('h4');
      tblTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      tblTitle.textContent = "⌛ Historical Milestones Timeline";
      container.appendChild(tblTitle);

      const timelineData = [
        { y: "1830s", m: "Arusha Maasai settle the Meru slopes." },
        { y: "1896", m: "German military occupation begins." },
        { y: "1900", m: "The Old Boma is constructed using forced labour." },
        { y: "1916", m: "British forces take control during WWI." },
        { y: "1930", m: "Railway expansion from Moshi to Arusha opens." },
        { y: "1945", m: "The Clock Tower is built by Christos Galanos to mark the WWII victory." },
        { y: "1953", m: "A crown was placed on the tower for Queen Elizabeth II's coronation." },
        { y: "1960", m: "Filming of Hatari! begins in Arusha." },
        { y: "1961", m: "Documents for Tanganyika independence signed in Arusha." },
        { y: "1967", m: "The Arusha Declaration was proclaimed by Julius Nyerere." },
        { y: "2000", m: "Bill Clinton labels Arusha the 'Geneva of Africa'." },
        { y: "2006", m: "Arusha was officially declared a city." }
      ];

      const table = document.createElement('table');
      table.className = 'w-full text-xs text-left border-collapse border border-stone-200';
      
      const thead = document.createElement('thead');
      thead.className = 'bg-stone-50 border-b border-stone-200';
      thead.innerHTML = `<tr>
        <th class="p-2.5 font-extrabold text-slate-800 w-20">Year</th>
        <th class="p-2.5 font-extrabold text-slate-800">Historical Milestone</th>
      </tr>`;
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      timelineData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-stone-100 hover:bg-stone-50';
        tr.innerHTML = `<td class="p-2.5 font-bold text-amber-600">${row.y}</td>
          <td class="p-2.5 text-stone-600 font-medium">${row.m}</td>`;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.appendChild(wrapTable(table));
    } 
    else if (node.index === 1) { // Tanzanite Experience
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc1.textContent = node.fullDesc;
      container.appendChild(desc1);

      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "The History of Discovery";
      container.appendChild(sub1);

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc2.textContent = "Tanzanite is one of the most important mineralogical discoveries of the 20th century. The gem was first discovered by Jumanne Mhero Ngoma in January 1967, but it was the efforts of Manuel de Souza, a Goan tailor and part-time prospector, with the find in July 1967 that set the course of the gem's global recognition and scientific identification.";
      container.appendChild(desc2);

      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "Maasai Fire Legend";
      container.appendChild(sub2);

      const desc3 = document.createElement('p');
      desc3.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc3.textContent = "A lesser-known Maasai legend speaks of a bush fire near Mount Kilimanjaro that heated brown zoisite crystals, transforming them into stunning blue gems. The Maasai found these radiant stones among the ashes and shared them with prospectors like de Souza. This cultural connection persists, as the Maasai associate the colour blue with spirituality and purity. The tanzanite industry has a complex relationship with the Maasai. They possess a profound spiritual bond with the land and regard tanzanite as a representation of the sky and purity. However, the industry's expansion has displaced them from their ancestral territories. The discovery and mining of tanzanite have also generated significant wealth and opportunities for certain Maasai families and tribes.";
      container.appendChild(desc3);

      const sub3 = document.createElement('h4');
      sub3.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub3.textContent = "Tiffany & Co.'s Role: Branding and Market Hegemony";
      container.appendChild(sub3);

      const desc4 = document.createElement('p');
      desc4.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc4.textContent = "Tiffany & Co. played an essential role in transforming tanzanite from a local curiosity into a global luxury gem. Recognising its potential shortly after its 1968 discovery, Henry B. Platt, great-grandson of Louis Comfort Tiffany, and the marketing team opted for the name 'TANZANITE' over 'blue zoisite' to honour its origin, making it the only gemstone named after a country. Tiffany secured exclusive selling rights for several years and launched a strong advertising campaign. Today, tanzanite is mined in only two locations, including Tanzania. By 2001, it became the second most popular coloured gemstone in the American market, after sapphire. Tiffany & Co.’s branding exemplifies effective gemstone marketing, turning a mineral similar to smoky quartz into a valuable competitor to diamonds, rubies, and emeralds. Unlike diamonds, tanzanite is a limited resource found only in one area. Geologists predict that the Mererani deposits may be depleted in 10 to 30 years, earning tanzanite the title of the 'one-generation gemstone', which poses significant implications for its value.";
      container.appendChild(desc4);
    } 
    else if (node.index === 3) { // Maasai Market
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc1.textContent = node.fullDesc;
      container.appendChild(desc1);

      // Embedded authentic photos grid for rich visual experience
      const imageGrid = document.createElement('div');
      imageGrid.className = 'grid grid-cols-2 gap-3 mb-6';
      imageGrid.innerHTML = `
        <img src="assets/maasaiwoman.jpg" class="w-full h-36 object-cover rounded-xl border border-stone-200" alt="Maasai Woman Artisan">
        <img src="assets/maasaimarketgirl.jpg" class="w-full h-36 object-cover rounded-xl border border-stone-200" alt="Maasai Market Bead Seller">
      `;
      container.appendChild(imageGrid);

      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "Maasai Market Curios & Craft";
      container.appendChild(sub1);

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc2.textContent = "The Maasai market encompasses more than just Maasai artwork and artisans. For the Maasai, Chagga, Pare, and Meru peoples of northern Tanzania, craftsmanship represents a 'living museum' of heritage, evolving from rural traditions to urban micro-enterprises.";
      container.appendChild(desc2);

      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "Bead & Artisan Artworks";
      container.appendChild(sub2);

      const desc3 = document.createElement('p');
      desc3.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc3.textContent = "Maasai bead and leather adornments vividly reflect their rich cultural heritage. The intricate patterns, jewellery shapes, and colours act as historical records passed down through generations, communicating status and rites of passage long before literacy. For instance, the wedding necklace (Enkarewa) employs specific colours to signify fertility and family harmony. Although materials have shifted from 19th-century Venetian and Bohemian glass beads to modern recycled items like plastic and thread, the essence and cultural significance of the beadwork remain intact. The beads, bracelets, and colours in Maasai attire illustrate the community’s connection to the land, each other, and the phase of life they are in. Individual colour choices are rarely based on personal preference: instead, they are strictly determined by age set, gender, and social status.";
      container.appendChild(desc3);

      const sub3 = document.createElement('h4');
      sub3.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub3.textContent = "The Market as a Living Archive";
      container.appendChild(sub3);

      const bulletList = document.createElement('ul');
      bulletList.className = 'list-disc pl-5 space-y-2.5 text-xs text-stone-600 font-medium mb-6 leading-relaxed';
      bulletList.innerHTML = `
        <li><strong>Preservation of Craft:</strong> By providing a consistent monetary incentive, the market protects ancient woodcarving, leathercrafting, and textile practices from disappearing. It serves as a canvas of stories where every carving and bead carries the imprint of family history and cultural memory.</li>
        <li><strong>Female Empowerment:</strong> Traditionally confined to the domestic sphere, Maasai women (YeYo or 'Mamas') now operate independent micro-enterprises within the market.</li>
        <li><strong>Economic Impact:</strong> The income generated from these sales is often used to fund community health, medical expenses, and education (schooling for children) back in their native villages.</li>
      `;
      container.appendChild(bulletList);

      // Colors Table
      const colTitle = document.createElement('h4');
      colTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      colTitle.textContent = "🎨 Maasai Color Symbolism Chart";
      container.appendChild(colTitle);

      const colorsData = [
        { c: "Red", bg: "bg-red-600 text-white", m: "Blood, cattle, & bravery", msg: "Strength, bravery, and unity.", n: "A dominant colour worn post-circumcision by the young warrior class/generation of the Maasai (the Moran phase)." },
        { c: "White", bg: "bg-white text-stone-700 border border-stone-200", m: "Cow's milk", msg: "Peace, purity, & good health.", n: "A staple in Maasai jewellery and beadwork: white is frequently worn during major life transitions like weddings and age-grade ceremonies." },
        { c: "Blue", bg: "bg-blue-600 text-white", m: "Sky and rain", msg: "Energy, wisdom, spirituality, & marital bonds.", n: "Blue becomes prominent as Maasai men and women marry and leave the warrior phase, adopting dark blues and blacks. For older adults and elders, blue signifies maturity, responsibility, and the sanctity of marriage." },
        { c: "Green", bg: "bg-green-600 text-white", m: "Grass & pastures", msg: "Good health, growth, & connection to the land.", n: "Rather than being worn as a solid-coloured cloak, green is integrated into traditional practices through beadwork, ceremonies, and plant rituals." },
        { c: "Black", bg: "bg-stone-900 text-white", m: "Wisdom, People & Struggle", msg: "Endurance, community solidarity, & the divine.", n: "Unlike in many other cultures where black represents mourning, the Maasai view black as a positive colour of divine protection, identity, and resilience. Young boys wear solid-black cloaks for 4 to 8 months immediately following their circumcision during warrior training." },
        { c: "Yellow/Orange", bg: "bg-amber-400 text-stone-800", m: "Sun, warmth, & animal skins", msg: "Hospitality, friendship, fertility, & continuation of life.", n: "Women are the primary wearers of heavy yellow beadwork, usually in large, flat circular collars, earrings, and necklaces to broadcast homestead hospitality." }
      ];

      const cTable = document.createElement('table');
      cTable.className = 'w-full text-[11px] text-left border-collapse border border-stone-200 mb-6';
      
      const cThead = document.createElement('thead');
      cThead.className = 'bg-stone-50 border-b border-stone-200';
      cThead.innerHTML = `<tr>
        <th class="p-2 font-extrabold text-slate-800 w-24">Color Code</th>
        <th class="p-2 font-extrabold text-slate-800 w-24">Natural Meaning</th>
        <th class="p-2 font-extrabold text-slate-800 w-32">Symbolism</th>
        <th class="p-2 font-extrabold text-slate-800">Guide Notes</th>
      </tr>`;
      cTable.appendChild(cThead);

      const cTbody = document.createElement('tbody');
      colorsData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-stone-100 hover:bg-stone-50';
        tr.innerHTML = `
          <td class="p-2 font-black"><span class="px-2 py-1 rounded ${row.bg} text-[10px] font-black uppercase tracking-wider block text-center">${row.c}</span></td>
          <td class="p-2 font-bold text-stone-700">${row.m}</td>
          <td class="p-2 font-semibold text-amber-700">${row.msg}</td>
          <td class="p-2 text-stone-500 font-medium leading-normal">${row.n}</td>
        `;
        cTbody.appendChild(tr);
      });
      cTable.appendChild(cTbody);
      container.appendChild(wrapTable(cTable));

      // Insider Negotiation Tactics
      const sub4 = document.createElement('h4');
      sub4.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub4.textContent = "Insider Negotiation Tactics";
      container.appendChild(sub4);

      const desc4 = document.createElement('p');
      desc4.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc4.innerHTML = `
        <strong>Clarify the Currency:</strong> Seasoned vendors here, when negotiating with tourists, will often quote a flat number, like 'Twenty'. Never assume: always ask for immediate clarification: 'Twenty US Dollars, or twenty-thousand Tanzanian Shillings?'<br><br>
        <strong>The Baseline Rule:</strong> As a benchmark, 1,000 Tanzanian Shillings (TZS) holds a similar psychological value to locals as $1 USD or £1 GBP does back home. Before bidding, ask yourself what you would realistically pay for the item in a boutique shop in your home country. If it feels like a $20 item, starting your bid around 20,000 to 25,000 TZS is a solid, fair jumping-off point.
      `;
      container.appendChild(desc4);
    } 
    else if (node.index === 5) { // Cultural Heritage Centre
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc1.textContent = node.fullDesc;
      container.appendChild(desc1);

      // Arch Element Table
      const tblTitle1 = document.createElement('h4');
      tblTitle1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      tblTitle1.textContent = "🛡️ Symbolic Architecture Breakdown";
      container.appendChild(tblTitle1);

      const archData = [
        { e: "The Drum", m: "Unity, Communication, Celebration", r: "Main gathering space and entry points for communal exhibits." },
        { e: "The Spear", m: "Defence and Valour", r: "Facade integration and entry totems signalling a secure space for culture." },
        { e: "The Shield", m: "Protection and Resilience", r: "Structural motifs that house the most precious artifacts." }
      ];

      const table1 = document.createElement('table');
      table1.className = 'w-full text-xs text-left border-collapse border border-stone-200 mb-6';
      table1.innerHTML = `
        <thead class="bg-stone-50 border-b border-stone-200">
          <tr>
            <th class="p-2.5 font-extrabold text-slate-800 w-28">Architectural Icon</th>
            <th class="p-2.5 font-extrabold text-slate-800 w-36">Symbolic Meaning</th>
            <th class="p-2.5 font-extrabold text-slate-800">Functional Role within the Centre</th>
          </tr>
        </thead>
      `;
      const tbody1 = document.createElement('tbody');
      archData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-stone-100 hover:bg-stone-50';
        tr.innerHTML = `<td class="p-2.5 font-bold text-amber-700">${row.e}</td>
          <td class="p-2.5 font-semibold text-stone-700">${row.m}</td>
          <td class="p-2.5 text-stone-500 font-medium">${row.r}</td>`;
        tbody1.appendChild(tr);
      });
      table1.appendChild(tbody1);
      container.appendChild(wrapTable(table1));

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc2.textContent = "The centre's most significant role is as a sanctuary for 'dying' arts: as the old artisans who hold the secrets of traditional carving and mask-making pass away, and the younger generation moves to cities, the Centre preserves these masteries. Since Tanzania contains over 120 distinct ethnic groups living in relative harmony, the Centre acts as a single compound where the past and present of all these tribes can be viewed.";
      container.appendChild(desc2);

      // Diplomatic Table
      const tblTitle2 = document.createElement('h4');
      tblTitle2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      tblTitle2.textContent = "🤝 Royal and Diplomatic Guest Register";
      container.appendChild(tblTitle2);

      const guestData = [
        { g: "Bill Clinton", r: "Former US President", d: "Visited in 2000 (signed Burundi peace accord), planned 15-minute shopping but stayed 1 hour 15 minutes, bought $1,400 of art, and returned twice since as a civilian enthusiast." },
        { g: "King Harald V", r: "King of Norway", d: "Accompanied by Queen Sonja and Princess Märtha Louise." },
        { g: "Thabo Mbeki", r: "President of South Africa", d: "Visited with his wife Zanele Mbeki, emphasizing pan-African solidarity." },
        { g: "James Baker", r: "Former US Secretary of State", d: "A repeat visitor who stopped by the centre twice while on private hunting safaris." },
        { g: "Warren Christopher", r: "Former US Secretary of State", d: "Visited in 1996 for regional meetings with African leaders including Julius Nyerere." }
      ];

      const table2 = document.createElement('table');
      table2.className = 'w-full text-xs text-left border-collapse border border-stone-200 mb-6';
      table2.innerHTML = `
        <thead class="bg-stone-50 border-b border-stone-200">
          <tr>
            <th class="p-2.5 font-extrabold text-slate-800 w-28">Guest Name</th>
            <th class="p-2.5 font-extrabold text-slate-800 w-36">Title/Role</th>
            <th class="p-2.5 font-extrabold text-slate-800">Notable Detail of Visit</th>
          </tr>
        </thead>
      `;
      const tbody2 = document.createElement('tbody');
      guestData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-stone-100 hover:bg-stone-50';
        tr.innerHTML = `<td class="p-2.5 font-bold text-amber-700">${row.g}</td>
          <td class="p-2.5 font-semibold text-stone-700">${row.r}</td>
          <td class="p-2.5 text-stone-500 font-medium leading-normal">${row.d}</td>`;
        tbody2.appendChild(tr);
      });
      table2.appendChild(tbody2);
      container.appendChild(wrapTable(table2));

      // Tribal Exhibits
      const tblTitle3 = document.createElement('h4');
      tblTitle3.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      tblTitle3.textContent = "🛖 Tribal Exhibits & Key Artifacts";
      container.appendChild(tblTitle3);

      const tribalData = [
        { t: "Maasai", a: "Beadwork, Shukas, Spears", s: "Colors in beadwork represent values like bravery (red) and purity (white)." },
        { t: "Makonde", a: "Ebony 'Family Trees', Masks", s: "Famous for abstract and symbolic representations of the human spirit." },
        { t: "Chaga", a: "Traditional tools, Musical instruments", s: "Reflects the history of the coffee-growing people of Mount Kilimanjaro." },
        { t: "Sukuma", a: "Ceremonial drums, Pottery", s: "Representation of the largest ethnic group in Tanzania and their social structures." },
        { t: "Hadzabe", a: "Traditional bows and arrows", s: "Showcases the lifestyle of one of the world's last remaining hunter-gatherer tribes." }
      ];

      const table3 = document.createElement('table');
      table3.className = 'w-full text-xs text-left border-collapse border border-stone-200 mb-6';
      table3.innerHTML = `
        <thead class="bg-stone-50 border-b border-stone-200">
          <tr>
            <th class="p-2.5 font-extrabold text-slate-800 w-28">Tribe</th>
            <th class="p-2.5 font-extrabold text-slate-800 w-36">Iconic Artifacts on Display</th>
            <th class="p-2.5 font-extrabold text-slate-800">Cultural Significance</th>
          </tr>
        </thead>
      `;
      const tbody3 = document.createElement('tbody');
      tribalData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-stone-100 hover:bg-stone-50';
        tr.innerHTML = `<td class="p-2.5 font-bold text-amber-700">${row.t}</td>
          <td class="p-2.5 font-semibold text-stone-700">${row.a}</td>
          <td class="p-2.5 text-stone-500 font-medium leading-normal">${row.s}</td>`;
        tbody3.appendChild(tr);
      });
      table3.appendChild(tbody3);
      container.appendChild(wrapTable(table3));
    } 
    else if (node.index === 6) { // Coffee Lodge
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc1.textContent = node.fullDesc;
      container.appendChild(desc1);

      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "Arusha Coffee Lodge: More Than a Place to Sleep";
      container.appendChild(sub1);

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc2.textContent = "Before we even walk through those gates, stop and breathe. That smell: that's not the restaurant, that's not a candle. That's actual coffee, growing all around you, right now. You are standing inside a working farm. This is the Elewana Arusha Coffee Lodge, and it sits inside the Burka Coffee Estate, one of the oldest coffee plantations in Tanzania. The first seeds went into this volcanic soil in 1899. German settlers planted them, then the British took over after World War One. Then Swiss investors bought it, and then Tanzania became independent and everything changed again. This land has seen a lot.";
      container.appendChild(desc2);

      const desc3 = document.createElement('p');
      desc3.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc3.textContent = "All of this, the coffee, the forest, the springs you can hear, it all comes from one source: Mount Meru. That mountain is a dormant volcano, and for thousands of years it has been pushing minerals up through the soil (potassium, phosphorus, all the things that make Arabica coffee taste the way it does). The water in those springs? It filters through layers of volcanic rock deep inside the mountain before it comes out here, clean and cold. The Waarusha people, who have lived on these slopes for centuries, believe the mountain is sacred. Every year, elders climb to specific spots in the forest and make a sacrifice to call for rain: a tradition still alive today. This 118-hectare forest alongside the estate is one of the last native forests left inside Arusha town, hosting colobus monkeys in the canopy, bushbuck moving through at dusk, and over 120 bird species.";
      container.appendChild(desc3);

      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "Shanga Ethical Workshop";
      container.appendChild(sub2);

      const desc4 = document.createElement('p');
      desc4.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc4.textContent = "In 2007, a woman named Saskia Rechsteiner started making fabric necklaces in her backyard to help a local deaf woman earn some money. The necklaces sold out at a holiday fair, so she built a workshop. Today, that workshop employs over 70 people with physical and mental disabilities. Deaf, mute, and physically challenged artisans work full time collecting old wine and spirit bottles from safari lodges, crushing the glass, melting it at 1,500 degrees, and blowing it by hand into carafes and beads. Shanga runs the only glass-blowing operation in Tanzania. You may have seen photos of Amal Clooney wearing a beaded necklace made here, or read about the Duchess of Edinburgh's visit in October 2024, where the team spent three days weaving her a custom scarf by hand.";
      container.appendChild(desc4);

      const sub3 = document.createElement('h4');
      sub3.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub3.textContent = "A Legacy of Hospitality: Denise Sulle";
      container.appendChild(sub3);

      const desc5 = document.createElement('p');
      desc5.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc5.textContent = "Denise Sulle turned 80 this year. He was born in Karatu in 1944 and started working in hospitality in 1967 as a bar cleaner. Within two weeks, he was promoted to waiter. He spent the next decades serving guests, including President Julius Nyerere, Tanzania's founding father. He retired at 65, then joined this lodge, going through full training to welcome guests on the SkySafari route: a job he still does today. Two of his children now work in Tanzanian hospitality.";
      container.appendChild(desc5);
    } 
    else if (node.index === 9) { // Gran Melia
      const desc1 = document.createElement('p');
      desc1.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      desc1.textContent = node.fullDesc;
      container.appendChild(desc1);

      const sub1 = document.createElement('h4');
      sub1.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub1.textContent = "The Story Behind '77'";
      container.appendChild(sub1);

      const desc2 = document.createElement('p');
      desc2.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      desc2.textContent = "Locals still call this place '77'. Not because of an address, but because of a hotel the whole city remembers. In 1979, Tanzania's founding president Julius Nyerere had an ambitious goal: prove that an African city could host a global diplomatic summit at the highest level. Arusha was chosen as the venue for the Conference of the Group of 77, a bloc of developing nations pushing for a fairer world economy. To receive these world leaders, the Tanzanian government built a landmark state hotel right here on this ground and named it Hotel 77, featuring over 300 rooms and 23 presidential suites. Through the 1980s, it was the social heart of Arusha, hosting diplomats making deals at the bar and travellers dancing all night at Mawingu, the most famous discotheque in the region.";
      container.appendChild(desc2);

      // Gran Melia Timeline Table
      const tblTitle = document.createElement('h4');
      tblTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-3 border-b pb-1';
      tblTitle.textContent = "⌛ Timeline of the Land";
      container.appendChild(tblTitle);

      const hotelTimeline = [
        { y: "1979", m: "Hotel 77 opens", d: "Built by the Tanzanian government to host the G-77 summit. President Nyerere signals to the world that Arusha is a serious diplomatic city." },
        { y: "1980s", m: "The golden era", d: "The hotel becomes the social and political centre of Arusha. Diplomats, travellers, and locals fill its bars, restaurants, and the legendary Mawingu disco." },
        { y: "Late 1990s", m: "A slow decline", d: "The technology ages, the carpets wear thin, and the magic fades. The government decides to privatise the property." },
        { y: "Early 2000s", m: "Years of uncertainty", d: "A local developer wins the contract but political changes cancel the deal. Dubai-based Albwardy Investments takes over, triggering a long legal battle. Hyatt and Kempinski plans fall through." },
        { y: "2019", m: "Gran Meliá Arusha opens", d: "A boutique luxury resort of 171 rooms rises from the same ground, bringing Spanish design and Tanzanian culture together." }
      ];

      const hTable = document.createElement('table');
      hTable.className = 'w-full text-xs text-left border-collapse border border-stone-200 mb-6';
      hTable.innerHTML = `
        <thead class="bg-stone-50 border-b border-stone-200">
          <tr>
            <th class="p-2.5 font-extrabold text-slate-800 w-20">Year</th>
            <th class="p-2.5 font-extrabold text-slate-800 w-36">Milestone</th>
            <th class="p-2.5 font-extrabold text-slate-800">History & Context</th>
          </tr>
        </thead>
      `;
      const hTbody = document.createElement('tbody');
      hotelTimeline.forEach(row => {
        hTbody.innerHTML += `<tr class="border-b border-stone-100 hover:bg-stone-50">
          <td class="p-2.5 font-bold text-amber-600">${row.y}</td>
          <td class="p-2.5 font-semibold text-stone-700">${row.m}</td>
          <td class="p-2.5 text-stone-500 font-medium leading-normal">${row.d}</td>
        </tr>`;
      });
      hTable.appendChild(hTbody);
      container.appendChild(wrapTable(hTable));

      const sub2 = document.createElement('h4');
      sub2.className = 'text-sm font-black text-jungle uppercase tracking-widest mt-6 mb-2 border-b pb-1';
      sub2.textContent = "What Makes This Place Different";
      container.appendChild(sub2);

      const bulletList = document.createElement('ul');
      bulletList.className = 'list-disc pl-5 space-y-2.5 text-xs text-stone-600 font-medium mb-6 leading-relaxed';
      bulletList.innerHTML = `
        <li><strong>The Sanaa Workshop:</strong> A social enterprise employing Tanzanian artists living with disabilities. Glassblowers melt down the hotel's empty wine bottles to create handmade vases. Every purchase goes directly to the artists.</li>
        <li><strong>A World-Class Kitchen:</strong> Celebrity chef Sanjeev Kapoor leads Yellow Chilli, bringing authentic Indian flavours rooted in the Mughal Empire.</li>
        <li><strong>The Roof:</strong> Arusha's finest sundowner spot. Unobstructed views of Mount Meru, Peruvian-Spanish tapas, and cocktails made with organic ingredients from the hotel's own gardens.</li>
        <li><strong>The Infinity Pool:</strong> Green tiles that mirror the surrounding forest, with lounge beds half-submerged in shallow water.</li>
      `;
      container.appendChild(bulletList);
    } 
    else {
      // Fallback description for other locations (Index 4, 7, 8, 10)
      const descEl = document.createElement('p');
      descEl.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
      descEl.textContent = node.fullDesc;
      container.appendChild(descEl);
    }

    // 5. Editorial body image injection (natural float-wrap throughout body text)
    injectEditorialImages(container, bodyImgDefs);

    // 5b. Transit/Safety Warn Card (universal if safetyTips exists)
    if (node.safetyTips) {
      const warnCard = document.createElement('div');
      warnCard.className = 'bg-stone-50 border border-stone-200 rounded-xl p-4 flex gap-3 items-start mb-6 text-xs text-stone-600';
      warnCard.innerHTML = `<span class="text-lg">⚠️</span>
        <div>
          <p class="font-extrabold uppercase text-[10px] tracking-widest text-slate-500 mb-0.5">Logistics & Safety Warning</p>
          <p class="font-medium">${node.safetyTips}</p>
        </div>`;
      container.appendChild(warnCard);
    }

    // 6. Swahili Lesson Title & dialogues (universal if swahiliLesson exists)
    if (node.swahiliLesson) {
      const lessonTitle = document.createElement('h4');
      lessonTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-2';
      lessonTitle.textContent = "🗣️ Local Swahili Lesson";
      container.appendChild(lessonTitle);

      const swahiliEl = document.createElement('pre');
      swahiliEl.className = 'bg-stone-50 rounded-xl p-4 text-xs font-semibold text-stone-700 leading-relaxed whitespace-pre-wrap font-sans';
      swahiliEl.textContent = node.swahiliLesson;
      container.appendChild(swahiliEl);
    }

    // 7. Audio Guide — Load to Global Player
    if (node.audioGuide) {
      const audioTitle = document.createElement('h4');
      audioTitle.className = 'text-xs font-black text-jungle uppercase tracking-widest mt-4 mb-2 border-b pb-1.5';
      audioTitle.textContent = "🎧 Audio Guide";
      container.appendChild(audioTitle);

      const audioTrigger = document.createElement('div');
      audioTrigger.className = 'bg-emerald-950 text-white rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-sm cursor-pointer hover:bg-emerald-900 transition-colors border border-emerald-800';

      const audioInfo = document.createElement('div');
      audioInfo.className = 'min-w-0 flex-1 overflow-hidden space-y-0.5';

      const audioTrackName = document.createElement('p');
      audioTrackName.className = 'text-[10px] sm:text-xs font-black tracking-wider text-ochre uppercase truncate leading-tight';
      audioTrackName.textContent = node.title + ' — Narration';

      const audioHint = document.createElement('p');
      audioHint.className = 'text-[9px] sm:text-[10px] text-emerald-300 font-semibold';
      audioHint.textContent = 'Tap to play narration ▸';

      audioInfo.appendChild(audioTrackName);
      audioInfo.appendChild(audioHint);

      const playBtn = document.createElement('button');
      playBtn.className = 'w-9 h-9 sm:w-10 sm:h-10 bg-ochre hover:bg-white text-jungle rounded-full font-black shadow-md flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 border-2 border-amber-300';
      playBtn.innerHTML = `<svg class="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

      const triggerPlay = () => {
        GlobalAudioPlayer.load(`${node.title} — ${node.category}`, `assets/${node.audioGuide}`);
      };
      audioTrigger.addEventListener('click', triggerPlay);
      playBtn.addEventListener('click', (e) => { e.stopPropagation(); triggerPlay(); });

      audioTrigger.appendChild(audioInfo);
      audioTrigger.appendChild(playBtn);
      container.appendChild(audioTrigger);
    }
  };

  // Dynamic full guide compiler for detour stops
  const compileDetailedAltGuide = (alt, container) => {
    // 1. Hero / Primary image — full-width, never floated
    const mainImgSrc = (alt.detailImages && alt.detailImages.length > 0) ? alt.detailImages[0] : alt.image;
    const heroFig = document.createElement('figure');
    heroFig.className = 'editorial-hero';
    const heroImg = document.createElement('img');
    heroImg.src = mainImgSrc;
    heroImg.alt = alt.title;
    heroImg.className = 'editorial-hero__img';
    heroFig.appendChild(heroImg);
    container.appendChild(heroFig);

    // Prepare body images for editorial injection after content is rendered
    const altBodyImgDefs = [];
    if (alt.detailImages && alt.detailImages.length > 1) {
      const captions = alt.editorialCaptions || [];
      alt.detailImages.slice(1).forEach((src, idx) => {
        altBodyImgDefs.push({ src, caption: captions[idx] || '' });
      });
    }

    // 2. Detour Badge
    const badge = document.createElement('span');
    badge.className = 'badge-gold text-xs mb-3 inline-block';
    badge.textContent = `Detour Option | Alternative Stop`;
    container.appendChild(badge);

    // 3. Heading
    const titleEl = document.createElement('h3');
    titleEl.className = 'text-2xl font-black text-slate-800 tracking-tight mb-4';
    titleEl.textContent = alt.title;
    container.appendChild(titleEl);

    // 4. Quick Info Box (Vibe, Best Time, Perfect For)
    const infoBox = document.createElement('div');
    infoBox.className = 'bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2 mb-6 text-xs text-stone-600';
    infoBox.innerHTML = `
      <div><span class="font-extrabold uppercase text-[9px] tracking-widest text-slate-400 block">The Vibe</span><span class="font-bold text-slate-700">${alt.vibe}</span></div>
      <div class="border-t border-stone-100 pt-2"><span class="font-extrabold uppercase text-[9px] tracking-widest text-slate-400 block">Best Time to Visit</span><span class="font-bold text-slate-700">${alt.bestTime}</span></div>
      <div class="border-t border-stone-100 pt-2"><span class="font-extrabold uppercase text-[9px] tracking-widest text-slate-400 block">Perfect For</span><span class="font-bold text-slate-700">${alt.perfectFor}</span></div>
    `;
    container.appendChild(infoBox);

    // 5. Overview Paragraph
    const overviewTitle = document.createElement('h4');
    overviewTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-2 border-b pb-1';
    overviewTitle.textContent = "Overview";
    container.appendChild(overviewTitle);

    const overviewEl = document.createElement('p');
    overviewEl.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium';
    overviewEl.textContent = alt.overview;
    container.appendChild(overviewEl);

    // 6. What to Do
    if (alt.whatToDo && alt.whatToDo.length > 0) {
      const whatTitle = document.createElement('h4');
      whatTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-3 border-b pb-1';
      whatTitle.textContent = "🏃 What to Do";
      container.appendChild(whatTitle);

      const whatList = document.createElement('div');
      whatList.className = 'space-y-4 mb-6';
      alt.whatToDo.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'flex gap-3 items-start text-xs';
        div.innerHTML = `
          <span class="w-5 h-5 rounded-full bg-amber-400 text-jungle flex items-center justify-center font-black flex-shrink-0">${index + 1}</span>
          <div>
            <p class="font-extrabold text-slate-800 mb-0.5">${item.title}</p>
            <p class="text-stone-600 font-medium leading-normal">${item.text}</p>
          </div>
        `;
        whatList.appendChild(div);
      });
      container.appendChild(whatList);
    }

    // 7. The Scene
    const sceneTitle = document.createElement('h4');
    sceneTitle.className = 'text-sm font-black text-jungle uppercase tracking-widest mb-2 border-b pb-1';
    sceneTitle.textContent = "🎭 The Scene";
    container.appendChild(sceneTitle);

    const sceneEl = document.createElement('p');
    sceneEl.className = 'text-sm text-stone-600 leading-relaxed mb-6 font-medium bg-stone-50 rounded-xl p-4 border-l-4 border-amber-400';
    sceneEl.textContent = alt.theScene;
    container.appendChild(sceneEl);

    // 8. Insider Tip
    const tipCard = document.createElement('div');
    tipCard.className = 'bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start mb-6 text-xs text-amber-800';
    tipCard.innerHTML = `
      <span class="text-lg">💡</span>
      <div>
        <p class="font-extrabold uppercase text-[10px] tracking-widest text-amber-600 mb-0.5">Insider Tip</p>
        <p class="font-medium leading-normal">${alt.insiderTip}</p>
      </div>
    `;
    container.appendChild(tipCard);

    // 9. Go If You vs Avoid If Split Grid
    const splitGrid = document.createElement('div');
    splitGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6';

    const goCard = document.createElement('div');
    goCard.className = 'bg-emerald-50 border border-emerald-100 rounded-xl p-4 space-y-2 text-xs';
    goCard.innerHTML = `<p class="font-extrabold text-emerald-800 uppercase text-[10px] tracking-widest mb-2">✔️ Go If You</p>`;
    alt.goIfYou.forEach(point => {
      const row = document.createElement('div');
      row.className = 'flex gap-2 items-start text-emerald-700 font-medium';
      row.innerHTML = `<span class="flex-shrink-0">✦</span><span>${point}</span>`;
      goCard.appendChild(row);
    });

    const avoidCard = document.createElement('div');
    avoidCard.className = 'bg-rose-50 border border-rose-100 rounded-xl p-4 space-y-2 text-xs';
    avoidCard.innerHTML = `<p class="font-extrabold text-rose-800 uppercase text-[10px] tracking-widest mb-2">❌ Avoid If</p>`;
    alt.avoidIf.forEach(point => {
      const row = document.createElement('div');
      row.className = 'flex gap-2 items-start text-rose-700 font-medium';
      row.innerHTML = `<span class="flex-shrink-0">✦</span><span>${point}</span>`;
      avoidCard.appendChild(row);
    });

    splitGrid.appendChild(goCard);
    splitGrid.appendChild(avoidCard);
    container.appendChild(splitGrid);

    // 9b. Editorial body image injection
    injectEditorialImages(container, altBodyImgDefs);

    // 10. Directions Button
    const dirBtn = document.createElement('a');
    dirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${alt.lat},${alt.lng}`;
    dirBtn.target = '_blank';
    dirBtn.className = 'w-full py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white font-extrabold rounded-xl text-xs uppercase tracking-widest text-center block shadow-md';
    dirBtn.textContent = 'Get Directions 🚗';
    container.appendChild(dirBtn);
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

    // 3.5. Atmospheric Audio Guide Play Trigger
    if (node.audioGuide) {
      const audioTrigger = document.createElement('div');
      audioTrigger.className = 'bg-emerald-950 text-white rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm cursor-pointer hover:bg-emerald-900 transition-colors mt-2';
      
      const audioInfo = document.createElement('div');
      audioInfo.className = 'min-w-0 flex-1 overflow-hidden space-y-0.5';
      
      const audioTrackName = document.createElement('p');
      audioTrackName.className = 'text-[9px] sm:text-[10px] font-black tracking-wider text-ochre uppercase truncate leading-tight';
      audioTrackName.textContent = `🎧 ${node.title} Narration`;
      
      const audioHint = document.createElement('p');
      audioHint.className = 'text-[8px] text-emerald-300 font-semibold';
      audioHint.textContent = 'Tap to play audio guide ▸';
      
      audioInfo.appendChild(audioTrackName);
      audioInfo.appendChild(audioHint);
      
      const playIcon = document.createElement('div');
      playIcon.className = 'w-6 h-6 bg-ochre text-jungle rounded-full flex items-center justify-center text-xs font-black';
      playIcon.innerHTML = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      
      audioTrigger.appendChild(audioInfo);
      audioTrigger.appendChild(playIcon);
      
      audioTrigger.addEventListener('click', () => {
        GlobalAudioPlayer.load(`${node.title} — ${node.category}`, `assets/${node.audioGuide}`);
      });
      
      detailsBody.appendChild(audioTrigger);
    }

    // 4. Gold "Read More" button
    const btn = document.createElement('button');
    btn.className = 'w-full py-3 btn-gold text-xs uppercase tracking-widest font-black shadow-md mt-auto';
    btn.textContent = "Read More";
    btn.addEventListener('click', () => {
      // Trigger dynamic detail overlay compilation
      openOverlay(`${node.title} - Detailed Guide`, (container) => {
        compileDetailedGuide(node, container);
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
    lingoBadge.innerHTML = `🗣️ <span class="truncate">${alt.swahiliPhrase}</span>`;
    detailsBody.appendChild(lingoBadge);

    // 3. Short description
    const desc = document.createElement('p');
    desc.className = 'text-xs text-stone-600 font-semibold leading-relaxed';
    desc.textContent = alt.shortDesc;
    detailsBody.appendChild(desc);

    // 4. Local Tip card
    if (alt.localTip) {
      const tipCard = document.createElement('div');
      tipCard.className = 'bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2 items-start';
      tipCard.innerHTML = `<span>💡</span><div><p class="font-extrabold uppercase text-[10px] tracking-widest text-amber-600 mb-0.5">Local Tip</p><p class="font-medium">${alt.localTip}</p></div>`;
      detailsBody.appendChild(tipCard);
    }

    // 5. Read More button (if detour guide exists)
    if (alt.hasDetailedGuide) {
      const readMoreBtn = document.createElement('button');
      readMoreBtn.className = 'w-full py-3 btn-gold text-xs uppercase tracking-widest font-black shadow-md mt-2';
      readMoreBtn.textContent = 'Read Full Detour Guide';
      readMoreBtn.addEventListener('click', () => {
        openOverlay(`${alt.title} - Detailed Guide`, (container) => {
          compileDetailedAltGuide(alt, container);
        });
      });
      detailsBody.appendChild(readMoreBtn);
    }

    // 6. Get Directions link
    const dirLink = document.createElement('a');
    dirLink.href = `https://www.google.com/maps/dir/?api=1&destination=${alt.lat},${alt.lng}`;
    dirLink.target = '_blank';
    dirLink.className = 'w-full py-3 btn-jungle text-xs uppercase tracking-widest font-black shadow-md mt-auto text-center block text-white';
    dirLink.textContent = 'Get Directions 🚗';
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
    img.src = 'assets/coffeebreakmorning.JPG';
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
      intro.className = 'text-sm text-stone-600 leading-relaxed mb-4 font-medium';
      intro.textContent = "Kiswahili is the beautiful national language of Tanzania. While many tourism workers speak English, local Bajaj (Tuk-Tuk) drivers and street artists appreciate when you show respect by speaking Swahili. It breaks down walls immediately, brings big smiles, and ensures you get authentic local rates!";
      container.appendChild(intro);

      // "Naomba" vs "Nataka" custom card
      const politeCard = document.createElement('div');
      politeCard.className = 'bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-900';
      politeCard.innerHTML = `
        <p class="font-extrabold uppercase text-[10px] tracking-widest text-amber-700 mb-1.5">💡 Tanzanian Politeness Protocol</p>
        <p class="font-semibold leading-relaxed">
          Always use <strong>"Naomba..."</strong> (~nah-woh-mbah~, meaning "I Humbly Request...") to ask for anything in Tanzania. While Kenyan Swahili commonly uses "Nataka" ("I want"), Tanzanians view "Nataka" as a direct command or demand, which they consider rude, bossy, and impolite.
        </p>
      `;
      container.appendChild(politeCard);

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

  // Dynamic OSRM Street Routing Helper for custom waypoints / directions
  const fetchOSRMRoute = async (startLat, startLng, endLat, endLng) => {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data.routes && data.routes[0] && data.routes[0].geometry) {
          // Map OSRM GeoJSON [lng, lat] array to Leaflet [lat, lng] format
          return data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
        }
      }
    } catch (err) {
      console.warn('[ROUTER] OSRM live routing fetch failed, falling back to straight line:', err.message);
    }
    return [[startLat, startLng], [endLat, endLng]];
  };

  const initLeafletMap = () => {
    // Prevent double initialization errors on single-page sessions
    if (map) return;

    // 1. Center on Arusha Clock Tower Coordinates at optimized street zoom 14
    map = L.map('map', {
      zoomControl: false, // Deactivate default zoom to prevent overlapping the top-left hamburger button!
      doubleClickZoom: true // Enable double-click-to-zoom
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

          <button id="map-read-more-btn-${node.index}" class="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black rounded-lg text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95 cursor-pointer mt-1">
            Read More 📖
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      // Listen for popup opening to bind the audio trigger and read more button
      marker.on('popupopen', () => {
        const trigger = document.getElementById(`map-audio-trigger-${node.index}`);
        if (trigger) {
          trigger.addEventListener('click', () => {
            GlobalAudioPlayer.load(`${node.title} — ${node.category}`, `assets/${node.audioGuide}`);
          });
        }

        const readMoreBtn = document.getElementById(`map-read-more-btn-${node.index}`);
        if (readMoreBtn) {
          readMoreBtn.addEventListener('click', () => {
            marker.closePopup();
            openOverlay(`${node.title} - Detailed Guide`, (container) => {
              compileDetailedGuide(node, container);
            });
          });
        }
      });

      // Audio now persists in global player — no popupclose kill needed
    });

    const ARUSHA_ROUTER_ROAD_CACHE = [[[-3.37086, 36.693796], [-3.371347, 36.693533], [-3.371753, 36.693315], [-3.371879, 36.693544], [-3.37194, 36.693663], [-3.372118, 36.693988], [-3.371624, 36.694247], [-3.371241, 36.694455]], [[-3.371241, 36.694455], [-3.371624, 36.694247], [-3.372118, 36.693988], [-3.37222, 36.694167], [-3.372268, 36.694252], [-3.372242, 36.694328], [-3.372226, 36.694401], [-3.37222, 36.69447], [-3.372233, 36.694529], [-3.37226, 36.694567], [-3.37231, 36.694589], [-3.372329, 36.694591]], [[-3.372329, 36.694591], [-3.372374, 36.694596], [-3.372422, 36.694575], [-3.372453, 36.694527], [-3.372483, 36.694452], [-3.372501, 36.694359], [-3.372587, 36.694356], [-3.372634, 36.694354], [-3.372716, 36.694333], [-3.373676, 36.693754], [-3.373709, 36.693738], [-3.374225, 36.693487], [-3.374623, 36.693256], [-3.375307, 36.692885], [-3.375863, 36.692581], [-3.375824, 36.692501]], [[-3.375824, 36.692501], [-3.375863, 36.692581], [-3.375307, 36.692885], [-3.374623, 36.693256], [-3.374225, 36.693487], [-3.373709, 36.693738], [-3.373239, 36.693061], [-3.37318, 36.692938], [-3.373131, 36.692861], [-3.373161, 36.692764], [-3.373189, 36.692655], [-3.373224, 36.692484], [-3.373283, 36.692229], [-3.373336, 36.691927], [-3.373356, 36.691785], [-3.373441, 36.691219], [-3.373487, 36.690918], [-3.373514, 36.690738], [-3.373524, 36.690664], [-3.373582, 36.690175], [-3.373603, 36.690004], [-3.373658, 36.689563], [-3.373683, 36.689322], [-3.373714, 36.689046], [-3.37377, 36.688554], [-3.373877, 36.687814], [-3.373926, 36.687441], [-3.373971, 36.687074], [-3.374043, 36.686434], [-3.374053, 36.686347], [-3.374144, 36.685587], [-3.374145, 36.685578], [-3.374225, 36.684857], [-3.374316, 36.684115], [-3.374351, 36.683837], [-3.374402, 36.683338], [-3.374446, 36.682855], [-3.374479, 36.68263], [-3.374551, 36.682027], [-3.374628, 36.681418], [-3.374705, 36.68076], [-3.374764, 36.680349], [-3.374779, 36.680231], [-3.374788, 36.680163], [-3.374814, 36.679962], [-3.374883, 36.679424], [-3.374917, 36.679267], [-3.375016, 36.678593], [-3.375041, 36.678414], [-3.375066, 36.678231], [-3.37517, 36.677537], [-3.375219, 36.677032], [-3.37538, 36.67491], [-3.375392, 36.674737], [-3.37541, 36.674497], [-3.375417, 36.674405], [-3.375441, 36.674072], [-3.375518, 36.67286], [-3.375534, 36.672652], [-3.375555, 36.672269], [-3.375638, 36.671146], [-3.375669, 36.670739], [-3.37567, 36.670686], [-3.37571, 36.67014], [-3.375764, 36.66946], [-3.375775, 36.669311], [-3.375778, 36.669277], [-3.375786, 36.66917], [-3.375804, 36.668878], [-3.375838, 36.668414], [-3.375923, 36.667222], [-3.375934, 36.667126], [-3.375989, 36.666407], [-3.376022, 36.666002], [-3.376063, 36.665381], [-3.376086, 36.665042], [-3.376092, 36.664696], [-3.376094, 36.664581], [-3.376093, 36.664425], [-3.376099, 36.663568], [-3.376115, 36.662773], [-3.376122, 36.662012], [-3.376136, 36.661357], [-3.37614, 36.6612], [-3.376143, 36.660903], [-3.376145, 36.660727], [-3.376148, 36.660553], [-3.376162, 36.660268], [-3.376189, 36.659697], [-3.376191, 36.659675], [-3.37627, 36.658534], [-3.376366, 36.658532], [-3.376419, 36.658527], [-3.376435, 36.658519], [-3.376447, 36.658509], [-3.376454, 36.658484], [-3.376457, 36.658457], [-3.376485, 36.658201], [-3.376534, 36.657634], [-3.376631, 36.657661], [-3.376649, 36.657672], [-3.376657, 36.657689], [-3.376659, 36.65771], [-3.376649, 36.657821], [-3.376637, 36.657904], [-3.376622, 36.657988], [-3.37662, 36.65803], [-3.376632, 36.658126], [-3.376674, 36.658266], [-3.376713, 36.658251], [-3.376755, 36.65825], [-3.376795, 36.658263], [-3.376828, 36.658289], [-3.376828, 36.658289]], [[-3.376828, 36.658289], [-3.376828, 36.658289], [-3.376795, 36.658263], [-3.376755, 36.65825], [-3.376713, 36.658251], [-3.376674, 36.658266], [-3.376632, 36.658126], [-3.37662, 36.65803], [-3.376622, 36.657988], [-3.376637, 36.657904], [-3.376649, 36.657821], [-3.376659, 36.65771], [-3.376657, 36.657689], [-3.376649, 36.657672], [-3.376631, 36.657661], [-3.376534, 36.657634], [-3.376558, 36.657126], [-3.376367, 36.657115], [-3.376353, 36.65678], [-3.376346, 36.656643], [-3.376344, 36.65659], [-3.37634, 36.656517], [-3.376307, 36.656027], [-3.376273, 36.655515], [-3.376258, 36.655047], [-3.376257, 36.654924], [-3.376277, 36.654533], [-3.376311, 36.654171], [-3.376328, 36.654028], [-3.376352, 36.65382], [-3.376527, 36.652628], [-3.376571, 36.652152], [-3.376566, 36.651755], [-3.376503, 36.651269], [-3.376374, 36.650741], [-3.376068, 36.649508], [-3.375865, 36.648803], [-3.375754, 36.648435], [-3.375482, 36.647609], [-3.375349, 36.647234], [-3.375311, 36.647125], [-3.375146, 36.646702], [-3.375002, 36.646402], [-3.374836, 36.64603], [-3.37469, 36.645742], [-3.374491, 36.645396], [-3.374398, 36.645224], [-3.374097, 36.644721], [-3.373785, 36.64421], [-3.373606, 36.643902], [-3.373864, 36.643735], [-3.373908, 36.643716], [-3.37396, 36.643761], [-3.374006, 36.643782], [-3.37405, 36.643857], [-3.374065, 36.643874], [-3.374094, 36.643883], [-3.37414, 36.64387], [-3.374428, 36.643751], [-3.374437, 36.643748]], [[-3.374437, 36.643748], [-3.374428, 36.643751], [-3.37414, 36.64387], [-3.374094, 36.643883], [-3.374065, 36.643874], [-3.37405, 36.643857], [-3.374006, 36.643782], [-3.37396, 36.643761], [-3.373908, 36.643716], [-3.373864, 36.643735], [-3.373606, 36.643902], [-3.37339, 36.643563], [-3.373357, 36.643527], [-3.373331, 36.643489], [-3.373116, 36.64329], [-3.372974, 36.643157], [-3.372838, 36.643037], [-3.372317, 36.642643], [-3.371588, 36.642094], [-3.371431, 36.641982], [-3.370992, 36.64167], [-3.370858, 36.64156], [-3.370559, 36.641315], [-3.370252, 36.64103], [-3.370209, 36.64099], [-3.369934, 36.640658], [-3.369707, 36.640291], [-3.369317, 36.639684], [-3.369246, 36.639574], [-3.369294, 36.639548], [-3.369709, 36.639323], [-3.370659, 36.638819], [-3.37184, 36.638206], [-3.3724, 36.637915], [-3.372945, 36.637632], [-3.373151, 36.637542], [-3.373307, 36.637479], [-3.37355, 36.637391], [-3.373926, 36.63727], [-3.373963, 36.637256], [-3.374059, 36.637221], [-3.374506, 36.637082], [-3.375354, 36.636786], [-3.375784, 36.636637], [-3.376367, 36.63644], [-3.376876, 36.636271], [-3.377186, 36.636174], [-3.377675, 36.63603], [-3.378148, 36.635877], [-3.378378, 36.635789], [-3.378558, 36.635716], [-3.378799, 36.635609], [-3.379106, 36.635454], [-3.379349, 36.635332], [-3.379603, 36.635191], [-3.379936, 36.635016], [-3.380185, 36.634877], [-3.380442, 36.634743], [-3.3807, 36.634616], [-3.380906, 36.634496], [-3.38107, 36.634416], [-3.38127, 36.634319], [-3.381562, 36.634193], [-3.381702, 36.634129], [-3.381856, 36.634062], [-3.382024, 36.633985], [-3.382202, 36.633883], [-3.382323, 36.63379], [-3.382367, 36.633744], [-3.382415, 36.633693], [-3.38248, 36.633592], [-3.382536, 36.63346], [-3.382577, 36.633289], [-3.382603, 36.63312], [-3.382617, 36.632965], [-3.382625, 36.632745], [-3.382631, 36.632493], [-3.382635, 36.632289], [-3.382646, 36.63205], [-3.382655, 36.631783], [-3.38267, 36.631581], [-3.382685, 36.631408], [-3.382705, 36.631208], [-3.382734, 36.630981], [-3.382769, 36.630749], [-3.382807, 36.630548], [-3.382852, 36.630343], [-3.382938, 36.630022], [-3.382998, 36.629808], [-3.383053, 36.629614], [-3.383118, 36.629401], [-3.383182, 36.629204], [-3.383247, 36.62906], [-3.383322, 36.628967], [-3.383415, 36.628887], [-3.383548, 36.628807], [-3.383644, 36.628772], [-3.383837, 36.628708], [-3.383997, 36.628656], [-3.384111, 36.628622], [-3.384224, 36.628599], [-3.384274, 36.628594], [-3.384473, 36.628578], [-3.384754, 36.628572], [-3.385045, 36.628594], [-3.385395, 36.628655], [-3.385581, 36.628713], [-3.385771, 36.628783], [-3.386053, 36.628959], [-3.386344, 36.629142], [-3.386558, 36.629266], [-3.386836, 36.629436], [-3.387136, 36.629609], [-3.387328, 36.629721], [-3.38744, 36.629775], [-3.387569, 36.629799], [-3.387673, 36.629783], [-3.387804, 36.629744], [-3.388246, 36.629604], [-3.388472, 36.629523], [-3.38872, 36.629427], [-3.388854, 36.629362], [-3.389011, 36.62929], [-3.389317, 36.629104], [-3.389612, 36.628935], [-3.389982, 36.628689], [-3.390156, 36.628555], [-3.390238, 36.628475], [-3.3903, 36.628398], [-3.390359, 36.628307], [-3.390395, 36.628236], [-3.390416, 36.628178], [-3.390429, 36.628093], [-3.390443, 36.62792], [-3.390436, 36.627695], [-3.390428, 36.627522], [-3.390427, 36.627401], [-3.390448, 36.627326], [-3.390511, 36.627267], [-3.390583, 36.627232], [-3.390856, 36.627216], [-3.391144, 36.627207], [-3.391871, 36.627175], [-3.39204, 36.627166], [-3.392451, 36.627144], [-3.392586, 36.627129], [-3.392649, 36.627112], [-3.392705, 36.627096], [-3.392784, 36.627027], [-3.39294, 36.626553], [-3.393025, 36.626582], [-3.393494, 36.62681], [-3.394081, 36.627047], [-3.394654, 36.62731], [-3.394782, 36.627361], [-3.395084, 36.627487], [-3.396059, 36.627924], [-3.396309, 36.628028], [-3.396597, 36.628147], [-3.397413, 36.628514], [-3.398158, 36.628782], [-3.398847, 36.628977], [-3.399219, 36.629064], [-3.399499, 36.62912], [-3.40018, 36.629203], [-3.4006, 36.629214], [-3.400894, 36.629212], [-3.401544, 36.629207], [-3.402656, 36.629054], [-3.402726, 36.629041], [-3.403829, 36.628825], [-3.405011, 36.628576], [-3.405941, 36.628404], [-3.406298, 36.628362], [-3.406436, 36.628353], [-3.406956, 36.628367], [-3.407312, 36.628384], [-3.407617, 36.628439], [-3.407795, 36.628485], [-3.408309, 36.62862], [-3.40872, 36.628782], [-3.408846, 36.628839], [-3.409201, 36.629022], [-3.409927, 36.629449], [-3.410341, 36.629752], [-3.410624, 36.630027], [-3.41086, 36.630268], [-3.411003, 36.630452], [-3.411159, 36.630681], [-3.411414, 36.631097], [-3.411544, 36.631336], [-3.411693, 36.631708], [-3.411833, 36.632132], [-3.412158, 36.63302], [-3.412348, 36.633508], [-3.412779, 36.634359], [-3.412831, 36.634445], [-3.412862, 36.634497], [-3.413063, 36.63476], [-3.413482, 36.63537], [-3.413858, 36.635922], [-3.41448, 36.636614], [-3.414956, 36.63706], [-3.415287, 36.637339], [-3.415513, 36.637533], [-3.416423, 36.63819], [-3.416935, 36.638495], [-3.417585, 36.638835], [-3.417647, 36.638867], [-3.418229, 36.639125], [-3.418426, 36.639213], [-3.418601, 36.639278], [-3.419588, 36.639642], [-3.419947, 36.639774], [-3.421222, 36.640245], [-3.422172, 36.640585], [-3.423034, 36.640927], [-3.42386, 36.64124], [-3.423996, 36.641289], [-3.424889, 36.641575], [-3.425948, 36.641877], [-3.427908, 36.642223], [-3.428745, 36.642373], [-3.42927, 36.642445], [-3.429753, 36.64254], [-3.430048, 36.6426], [-3.430208, 36.642627], [-3.430341, 36.642651], [-3.430502, 36.642677], [-3.4306, 36.642704], [-3.431021, 36.642762], [-3.431441, 36.642831], [-3.431602, 36.642864], [-3.43173, 36.642887], [-3.431844, 36.642908], [-3.431985, 36.642937], [-3.432073, 36.642954], [-3.432229, 36.64298], [-3.432666, 36.643047], [-3.432704, 36.643053], [-3.433145, 36.643122], [-3.433745, 36.643204], [-3.433799, 36.643211], [-3.433867, 36.643223], [-3.434171, 36.64328], [-3.434754, 36.643383], [-3.434945, 36.643401], [-3.43513, 36.643442], [-3.435278, 36.643456], [-3.43561, 36.643549], [-3.435959, 36.643634], [-3.43603, 36.643683], [-3.436053, 36.643707], [-3.436091, 36.64376], [-3.436127, 36.643829], [-3.436183, 36.643881], [-3.436254, 36.643913], [-3.436331, 36.643919], [-3.436405, 36.6439], [-3.436438, 36.643879], [-3.436508, 36.643865], [-3.436567, 36.643855], [-3.436641, 36.643843], [-3.43676, 36.643833], [-3.436811, 36.643842], [-3.436937, 36.643877], [-3.437103, 36.643935], [-3.437506, 36.644067], [-3.437954, 36.644224], [-3.439388, 36.644692], [-3.439727, 36.644796], [-3.439949, 36.644869], [-3.440064, 36.644906], [-3.440822, 36.645135], [-3.441015, 36.64519], [-3.441098, 36.645218], [-3.442138, 36.645568], [-3.443059, 36.645869], [-3.443888, 36.64612], [-3.444087, 36.64619], [-3.444396, 36.646284], [-3.444899, 36.646461], [-3.44505, 36.646522], [-3.445381, 36.646678], [-3.445665, 36.6468], [-3.445753, 36.646845], [-3.446173, 36.647042], [-3.446612, 36.647279], [-3.447448, 36.64776], [-3.447555, 36.647824], [-3.448122, 36.648215], [-3.448632, 36.648597], [-3.449128, 36.649019], [-3.449635, 36.64951], [-3.449769, 36.649658], [-3.45001, 36.649916], [-3.45024, 36.65017], [-3.450292, 36.650223], [-3.450322, 36.650258], [-3.450495, 36.650459], [-3.450691, 36.6507], [-3.450941, 36.651017], [-3.451012, 36.651109], [-3.451105, 36.651236], [-3.451398, 36.651656], [-3.451967, 36.652661], [-3.452128, 36.652968], [-3.452348, 36.653411], [-3.452439, 36.653585], [-3.452538, 36.653779], [-3.45268, 36.654189], [-3.452754, 36.654445], [-3.45295, 36.654898], [-3.453142, 36.655503], [-3.453214, 36.655799], [-3.453373, 36.656535], [-3.453502, 36.657284], [-3.45354, 36.657606], [-3.453566, 36.657978], [-3.453631, 36.658986], [-3.453617, 36.659454], [-3.453606, 36.659752], [-3.453582, 36.659964], [-3.453447, 36.661704], [-3.453149, 36.665196], [-3.453004, 36.666867], [-3.452953, 36.667456], [-3.452794, 36.669301], [-3.452758, 36.669711], [-3.452497, 36.672882], [-3.452491, 36.672955], [-3.452289, 36.675377], [-3.452151, 36.677016], [-3.452098, 36.677636], [-3.452071, 36.677963], [-3.452042, 36.678301], [-3.452005, 36.678737], [-3.451889, 36.680113], [-3.451854, 36.680603], [-3.451773, 36.681755], [-3.451702, 36.682749], [-3.451574, 36.683735], [-3.451504, 36.684149], [-3.451392, 36.684709], [-3.451358, 36.684828], [-3.451255, 36.685224], [-3.451183, 36.685469], [-3.451083, 36.685774], [-3.450806, 36.686555], [-3.450451, 36.687386], [-3.450054, 36.688135], [-3.449894, 36.688472], [-3.449278, 36.689502], [-3.449251, 36.689545], [-3.448223, 36.691176], [-3.447447, 36.692662], [-3.44704, 36.693751], [-3.44688, 36.694286], [-3.446718, 36.694872], [-3.446453, 36.695932], [-3.446295, 36.696648], [-3.446246, 36.696867], [-3.445852, 36.698695], [-3.445844, 36.698721], [-3.445144, 36.701558], [-3.445002, 36.702196], [-3.444938, 36.702486], [-3.444817, 36.703023], [-3.444769, 36.703234], [-3.444603, 36.703722], [-3.444558, 36.703829], [-3.444437, 36.70409], [-3.444324, 36.70433], [-3.444238, 36.704491], [-3.444019, 36.704841], [-3.443738, 36.70521], [-3.443491, 36.705506], [-3.443263, 36.705856], [-3.443154, 36.706084], [-3.443058, 36.706427], [-3.442998, 36.706636], [-3.442916, 36.706871], [-3.442885, 36.70689], [-3.442857, 36.706915], [-3.442825, 36.706967], [-3.44281, 36.707027], [-3.442816, 36.707088], [-3.442838, 36.707138], [-3.442873, 36.707179], [-3.442919, 36.70721], [-3.442971, 36.707225], [-3.443026, 36.707225], [-3.443079, 36.707208], [-3.44311, 36.707189], [-3.443137, 36.707164], [-3.443164, 36.707124], [-3.44318, 36.707077], [-3.443184, 36.707029], [-3.443174, 36.706981], [-3.443153, 36.706937], [-3.443122, 36.7069], [-3.443017, 36.706677], [-3.442998, 36.706636], [-3.442916, 36.706871], [-3.442885, 36.70689], [-3.442857, 36.706915], [-3.442525, 36.706896], [-3.442356, 36.70684], [-3.441955, 36.706722], [-3.441337, 36.706558], [-3.440104, 36.706225], [-3.439365, 36.706058], [-3.438919, 36.705941], [-3.438609, 36.705842], [-3.437489, 36.705543], [-3.436661, 36.705341], [-3.436125, 36.705191], [-3.435843, 36.705083], [-3.435511, 36.704984], [-3.435171, 36.704901], [-3.435072, 36.704864], [-3.434965, 36.704801], [-3.434727, 36.704648], [-3.434609, 36.70456], [-3.434137, 36.704214], [-3.434036, 36.704148], [-3.433915, 36.704072], [-3.433701, 36.703958], [-3.433495, 36.703885], [-3.433358, 36.703854], [-3.432992, 36.703784], [-3.432732, 36.703761], [-3.432433, 36.703757], [-3.432226, 36.703761], [-3.432179, 36.70376], [-3.431522, 36.703812], [-3.430718, 36.703888], [-3.430085, 36.70396], [-3.429842, 36.70398], [-3.42941, 36.704003], [-3.429147, 36.703986], [-3.428975, 36.703964], [-3.428855, 36.703942], [-3.42863, 36.703937], [-3.428356, 36.703947], [-3.428076, 36.703966], [-3.427798, 36.704011], [-3.42773, 36.704022], [-3.427425, 36.704071], [-3.427109, 36.704121], [-3.426608, 36.704211], [-3.426238, 36.704277], [-3.425875, 36.704363], [-3.425562, 36.704418], [-3.425024, 36.704528], [-3.424076, 36.704732], [-3.423091, 36.70491], [-3.421945, 36.705057], [-3.421437, 36.70513], [-3.420728, 36.705252], [-3.42029, 36.705328], [-3.420144, 36.705351], [-3.41919, 36.7055], [-3.418377, 36.705628], [-3.417677, 36.705733], [-3.417335, 36.705784], [-3.417115, 36.70582], [-3.416916, 36.705857], [-3.416513, 36.70593], [-3.416413, 36.705954], [-3.414845, 36.70636], [-3.414827, 36.706364], [-3.413076, 36.706736], [-3.412911, 36.70677], [-3.41259, 36.706854], [-3.411887, 36.70702], [-3.411849, 36.707026], [-3.411814, 36.707034], [-3.41139, 36.70713], [-3.411097, 36.707224], [-3.410843, 36.707303], [-3.410572, 36.707379], [-3.410271, 36.707417], [-3.41009, 36.70742], [-3.409916, 36.707413], [-3.409667, 36.707393], [-3.409544, 36.70738], [-3.409366, 36.707347], [-3.409237, 36.707327], [-3.409113, 36.707297], [-3.409054, 36.707282], [-3.408963, 36.707255], [-3.408916, 36.70724], [-3.408854, 36.707213], [-3.408763, 36.707184], [-3.408677, 36.707146], [-3.408513, 36.707051], [-3.408392, 36.706972], [-3.408259, 36.706871], [-3.408161, 36.706792], [-3.407987, 36.706663], [-3.407695, 36.706445], [-3.407501, 36.706307], [-3.407324, 36.706179], [-3.407217, 36.706106], [-3.40714, 36.706053], [-3.407057, 36.706004], [-3.407004, 36.705978], [-3.406959, 36.705962], [-3.406883, 36.705936], [-3.406802, 36.705921], [-3.406674, 36.705906], [-3.406434, 36.705889], [-3.406304, 36.705869], [-3.406109, 36.70584], [-3.40606, 36.705837], [-3.405886, 36.705825], [-3.405062, 36.705738], [-3.404216, 36.705645], [-3.404107, 36.705634], [-3.402408, 36.70546], [-3.402052, 36.705419], [-3.402036, 36.705417], [-3.400333, 36.70523], [-3.399226, 36.705121], [-3.398979, 36.705093], [-3.398672, 36.705062], [-3.398585, 36.705052], [-3.398462, 36.705035], [-3.398069, 36.704997]], [[-3.398069, 36.704997], [-3.397038, 36.704897], [-3.39575, 36.704758], [-3.394277, 36.704623], [-3.394216, 36.704613], [-3.394081, 36.704604], [-3.393829, 36.704591], [-3.393392, 36.70457], [-3.393289, 36.704571], [-3.393225, 36.704577], [-3.393105, 36.704589], [-3.392839, 36.704663], [-3.392599, 36.70478], [-3.391988, 36.705077], [-3.391787, 36.705151], [-3.391608, 36.705195], [-3.391496, 36.705201], [-3.391087, 36.705181], [-3.390855, 36.705124], [-3.390551, 36.70501], [-3.390033, 36.704782], [-3.389634, 36.704622], [-3.389393, 36.704557], [-3.38905, 36.7045], [-3.388598, 36.704397], [-3.38831, 36.704286], [-3.388094, 36.704169], [-3.387762, 36.703926], [-3.387461, 36.703582], [-3.386719, 36.702744], [-3.386488, 36.702528], [-3.386381, 36.702444], [-3.386243, 36.702377], [-3.385956, 36.702298], [-3.385769, 36.702265], [-3.385608, 36.702272], [-3.385374, 36.7023], [-3.385073, 36.70236], [-3.384921, 36.702396], [-3.384734, 36.702435], [-3.384602, 36.702467], [-3.384434, 36.7025], [-3.384197, 36.702534], [-3.383889, 36.702514], [-3.383694, 36.70245], [-3.383634, 36.702421], [-3.38349, 36.702336], [-3.383162, 36.702084], [-3.382988, 36.701979], [-3.38278, 36.701898], [-3.382525, 36.701853], [-3.382296, 36.701853], [-3.381245, 36.701903], [-3.380629, 36.701932], [-3.37988, 36.701962], [-3.378955, 36.702014], [-3.37863, 36.702038], [-3.378419, 36.702119], [-3.378302, 36.702203], [-3.378215, 36.702269], [-3.377986, 36.702476], [-3.377742, 36.702728], [-3.377657, 36.702782], [-3.377565, 36.702813], [-3.377478, 36.702837], [-3.377434, 36.702827], [-3.377389, 36.702824], [-3.377302, 36.702843], [-3.377226, 36.702892], [-3.377172, 36.702964], [-3.377153, 36.703016], [-3.377038, 36.703107], [-3.376958, 36.703176], [-3.376829, 36.70326], [-3.37666, 36.703333], [-3.375951, 36.703606], [-3.375691, 36.703707], [-3.374874, 36.704023], [-3.374823, 36.704044], [-3.374095, 36.704281], [-3.373601, 36.704466], [-3.373468, 36.704518], [-3.371889, 36.705137], [-3.371233, 36.705394], [-3.371304, 36.705589], [-3.371329, 36.70565], [-3.371356, 36.705693], [-3.371396, 36.705735], [-3.371437, 36.705797], [-3.371461, 36.705862], [-3.371466, 36.705921], [-3.371463, 36.705962], [-3.37145, 36.705998], [-3.371419, 36.706059], [-3.371415, 36.706059], [-3.37137, 36.706091], [-3.371354, 36.706113], [-3.371331, 36.706083], [-3.371304, 36.706056], [-3.371281, 36.706016], [-3.371246, 36.705951], [-3.371193, 36.705887], [-3.371142, 36.705847], [-3.371078, 36.705839], [-3.371016, 36.705839], [-3.370957, 36.705858], [-3.370497, 36.706021], [-3.370411, 36.706045], [-3.370325, 36.706048], [-3.370269, 36.706053], [-3.370202, 36.706064], [-3.370143, 36.706088], [-3.370108, 36.70612], [-3.370079, 36.706153], [-3.370039, 36.706177], [-3.369782, 36.70626], [-3.369786, 36.706279], [-3.369783, 36.706298], [-3.369774, 36.706314], [-3.36976, 36.706327], [-3.369752, 36.70633], [-3.369736, 36.706406], [-3.369745, 36.706466], [-3.369763, 36.706518], [-3.369799, 36.706568], [-3.369849, 36.706602], [-3.369907, 36.706631], [-3.369982, 36.706636], [-3.37004, 36.706627], [-3.370071, 36.706616], [-3.370103, 36.706604], [-3.37014, 36.706582], [-3.37018, 36.706536], [-3.370209, 36.706505], [-3.370258, 36.706462], [-3.370308, 36.706439], [-3.370353, 36.70643], [-3.370373, 36.706421], [-3.370403, 36.706426], [-3.370423, 36.706444], [-3.370502, 36.706676]], [[-3.370502, 36.706676], [-3.370423, 36.706444], [-3.370403, 36.706426], [-3.370373, 36.706421], [-3.370353, 36.70643], [-3.370308, 36.706439], [-3.370258, 36.706462], [-3.370209, 36.706505], [-3.37018, 36.706536], [-3.37014, 36.706582], [-3.370103, 36.706604], [-3.370071, 36.706616], [-3.37004, 36.706627], [-3.369982, 36.706636], [-3.369907, 36.706631], [-3.369849, 36.706602], [-3.369799, 36.706568], [-3.369763, 36.706518], [-3.369745, 36.706466], [-3.369736, 36.706406], [-3.369752, 36.70633], [-3.36976, 36.706327], [-3.369774, 36.706314], [-3.369783, 36.706298], [-3.369786, 36.706279], [-3.369782, 36.70626], [-3.370039, 36.706177], [-3.370079, 36.706153], [-3.370108, 36.70612], [-3.370143, 36.706088], [-3.370202, 36.706064], [-3.370269, 36.706053], [-3.370325, 36.706048], [-3.370411, 36.706045], [-3.370497, 36.706021], [-3.370957, 36.705858], [-3.371016, 36.705839], [-3.371078, 36.705839], [-3.371142, 36.705847], [-3.371193, 36.705887], [-3.371246, 36.705951], [-3.371281, 36.706016], [-3.371304, 36.706056], [-3.371331, 36.706083], [-3.371354, 36.706113], [-3.37137, 36.706091], [-3.371415, 36.706059], [-3.371419, 36.706059], [-3.37145, 36.705998], [-3.371463, 36.705962], [-3.371466, 36.705921], [-3.371461, 36.705862], [-3.371437, 36.705797], [-3.371396, 36.705735], [-3.371356, 36.705693], [-3.371329, 36.70565], [-3.371304, 36.705589], [-3.371233, 36.705394], [-3.371889, 36.705137], [-3.373468, 36.704518], [-3.373601, 36.704466], [-3.374095, 36.704281], [-3.374823, 36.704044], [-3.374874, 36.704023], [-3.375691, 36.703707], [-3.375951, 36.703606], [-3.376552, 36.703375]], [[-3.376552, 36.703375], [-3.37666, 36.703333], [-3.376829, 36.70326], [-3.376942, 36.703246], [-3.377048, 36.703241], [-3.377235, 36.703267], [-3.377293, 36.703304], [-3.377358, 36.703323], [-3.377422, 36.703325], [-3.377484, 36.703311], [-3.37754, 36.703282], [-3.377587, 36.703239], [-3.377627, 36.703175], [-3.377646, 36.703103], [-3.377643, 36.703028], [-3.377612, 36.702946], [-3.377555, 36.70288], [-3.377478, 36.702837], [-3.377434, 36.702827], [-3.377389, 36.702824], [-3.377253, 36.702732], [-3.3772, 36.702685], [-3.377149, 36.702628], [-3.377088, 36.702534], [-3.376877, 36.702136], [-3.376752, 36.701902], [-3.376546, 36.701481], [-3.375967, 36.700468], [-3.375884, 36.700316], [-3.375216, 36.69914], [-3.375182, 36.699083], [-3.374835, 36.698514], [-3.374469, 36.697862], [-3.374151, 36.697293], [-3.374036, 36.697055], [-3.373915, 36.696801], [-3.373788, 36.696576], [-3.373515, 36.696151], [-3.373357, 36.695926], [-3.373175, 36.695672], [-3.372697, 36.695021], [-3.372662, 36.694965], [-3.372566, 36.694836], [-3.37248, 36.694669], [-3.372422, 36.694575], [-3.372453, 36.694527], [-3.372483, 36.694452], [-3.372501, 36.694359], [-3.372492, 36.6943], [-3.372468, 36.694249], [-3.372425, 36.694211], [-3.372361, 36.694194], [-3.372314, 36.69421], [-3.372268, 36.694252], [-3.37222, 36.694167], [-3.372118, 36.693988], [-3.37194, 36.693663], [-3.371879, 36.693544], [-3.371753, 36.693315], [-3.371347, 36.693533], [-3.37086, 36.693796]]];

    // 5. Adventure Trail — Polyline Route Connector Lines (Snapped to Arusha Street Networks)
    const segmentColors = [
      '#ffb3ba', // Kitamu → Clock Tower (Blush Pink)
      '#ffdfba', // Clock Tower → Tanzanite (Peach Cream)
      '#ffffba', // Tanzanite → Maasai Market (Lemon Chiffon)
      '#baffc9', // Maasai Market → Cultural Heritage (Mint Green)
      '#bae1ff', // Cultural Heritage → Coffee Lodge (Baby Blue)
      '#a8e6cf', // Coffee Lodge → Canvas & Clay (Seafoam)
      '#dcedc1', // Canvas & Clay → Gran Melia (Pistachio)
      '#ffd3b6', // Gran Melia → Amber (Apricot)
      '#ffaaa5', // Amber → Kitamu return (Salmon)
      '#ff8b94'  // Reserve segment (Rose)
    ];

    // Flat array of all 746 road waypoints for background shadow line
    const allRoadCoords = ARUSHA_ROUTER_ROAD_CACHE.flat();

    // Google Maps Style Casing (Dark Blue Outer Border)
    const shadowLine = L.polyline(allRoadCoords, {
      color: '#1558D6', // Google Dark Blue Border
      weight: 9,
      opacity: 0.9,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Google Maps Signature Blue Polyline (#1A73E8)
    const segmentLayers = [];
    for (let i = 0; i < ARUSHA_ROUTER_ROAD_CACHE.length; i++) {
      const segment = L.polyline(
        ARUSHA_ROUTER_ROAD_CACHE[i],
        {
          color: '#1A73E8', // Google Blue
          weight: 6,
          opacity: 1.0,
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

    const handlePinDropTrigger = (e) => {
      const modal = document.getElementById('custom-pin-modal');
      const input = document.getElementById('custom-pin-note');
      
      if (!modal || !input) return;

      activeClickCoords = e.latlng;
      input.value = '';
      modal.classList.add('active');
    };

    // Long-press detection variables for mobile touch screens
    let longPressTimer = null;
    const LONG_PRESS_DURATION = 600; // milliseconds to qualify as a long-press

    const handleMapTouchStart = (e) => {
      // Clear any existing timer
      if (longPressTimer) clearTimeout(longPressTimer);
      
      // Ignore right-clicks as they are handled by 'contextmenu'
      if (e.originalEvent && e.originalEvent.button !== 0 && e.originalEvent.button !== undefined) {
        return;
      }

      longPressTimer = setTimeout(() => {
        handlePinDropTrigger(e);
      }, LONG_PRESS_DURATION);
    };

    const handleMapTouchEnd = () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    };

    // Listen to mousedown (covers PC left clicks and mobile touches)
    map.on('mousedown', handleMapTouchStart);
    
    // Cancel the long-press timer if the user moves, drags, zooms, or releases
    map.on('mouseup dragstart zoomstart movestart click touchend touchmove', handleMapTouchEnd);

    // Support standard right-click context menu on PC
    map.on('contextmenu', handlePinDropTrigger);

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
            <strong>💡 Tip:</strong> ${alt.localTip}
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${alt.lat},${alt.lng}" target="_blank" class="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-lg text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-1 shadow-sm transition-colors">
            Get Directions 🚗
          </a>
          <button id="map-alt-read-more-btn-${alt.altId}" class="w-full py-2 bg-stone-900 hover:bg-black text-amber-400 font-black rounded-lg text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95 cursor-pointer mt-1">
            Read More 📖
          </button>
        </div>
      `);

      marker.on('popupopen', () => {
        const readMoreBtn = document.getElementById(`map-alt-read-more-btn-${alt.altId}`);
        if (readMoreBtn) {
          readMoreBtn.addEventListener('click', () => {
            marker.closePopup();
            if (alt.hasDetailedGuide) {
              openOverlay(`${alt.title} - Detailed Guide`, (container) => {
                compileDetailedAltGuide(alt, container);
              });
            } else {
              showAlternativeDetails(alt.altId);
            }
          });
        }
      });
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

        // Collapse the main sidebar (Column 1) so the full map backdrop is revealed
        closeMainSidebar();

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

        // Verify user has paid access to the selected city route
        const sessionStr = localStorage.getItem('mizizi_sim_session');
        let selectedCity = 'arusha';
        if (sessionStr) {
          try {
            const parsedSess = JSON.parse(sessionStr);
            if (parsedSess.selectedCity) selectedCity = parsedSess.selectedCity.toLowerCase();
          } catch (e) {}
        }

        if (!FirebaseSim.hasAccessToCity(user, selectedCity)) {
          console.warn(`Paid route lock: user unauthorized for ${selectedCity}. Redirecting to dashboard...`);
          window.location.replace('dashboard.html');
          return;
        }

        // Access authorized! Clean up lock blocker if it exists
        const lockBlocker = document.getElementById('premium-lock-blocker');
        if (lockBlocker) lockBlocker.remove();

        console.log(`Access authorized for ${user.email} in ${selectedCity}. Restructuring navigation hooks...`);
        
        // Display active logged-in user badge details
        const emailBadge = document.getElementById('user-email-badge');
        if (emailBadge) {
          emailBadge.textContent = user.isMaster ? `${user.email} (Master Pass)` : user.email;
        }

        // Render subscription expiration countdown for active city
        const expiryContainer = document.getElementById('subscription-expiry-container');
        const expiryBadge = document.getElementById('subscription-expiry-badge');
        if (expiryContainer && expiryBadge) {
          if (user.isMaster) {
            expiryBadge.textContent = 'Permanent Master Pass';
            expiryContainer.classList.remove('hidden');
          } else {
            let activeExpDate = user.expiryDate;
            if (user.unlockedCities && user.unlockedCities[selectedCity] && user.unlockedCities[selectedCity].expiryDate) {
              activeExpDate = user.unlockedCities[selectedCity].expiryDate;
            }

            if (activeExpDate) {
              const expiryTime = new Date(activeExpDate).getTime();
              const now = Date.now();
              const diffMs = expiryTime - now;
              const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
              
              if (diffDays > 0) {
                expiryBadge.textContent = `${diffDays} day${diffDays === 1 ? '' : 's'} remaining`;
                expiryContainer.classList.remove('hidden');
              } else {
                expiryBadge.textContent = 'Expired';
                expiryContainer.classList.remove('hidden');
              }
            } else {
              expiryContainer.classList.add('hidden');
            }
          }
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

        // ===== Touch Swipe Gesture Support (Mobile) =====
        (() => {
          let touchStartX = 0;
          let touchStartY = 0;
          let touchStartTime = 0;
          const SWIPE_THRESHOLD = 60;  // Minimum horizontal distance
          const SWIPE_MAX_Y = 80;      // Maximum vertical drift
          const EDGE_ZONE = 40;        // Left-edge trigger zone in px

          const openSidebar = () => {
            const sb = document.getElementById('sidebar');
            const hb = document.getElementById('hamburger-btn');
            const io = document.getElementById('hamburger-icon-open');
            const ic = document.getElementById('hamburger-icon-close');
            if (sb && !sb.classList.contains('active')) {
              sb.classList.add('active');
              if (hb) hb.classList.add('active');
              if (io) io.classList.add('hidden');
              if (ic) ic.classList.remove('hidden');
            }
          };

          const closeSidebar = () => {
            const sb = document.getElementById('sidebar');
            const hb = document.getElementById('hamburger-btn');
            const io = document.getElementById('hamburger-icon-open');
            const ic = document.getElementById('hamburger-icon-close');
            if (sb && sb.classList.contains('active')) {
              sb.classList.remove('active');
              if (hb) hb.classList.remove('active');
              if (io) io.classList.remove('hidden');
              if (ic) ic.classList.add('hidden');
              const overlay = document.getElementById('map-click-overlay');
              if (overlay) overlay.classList.remove('active');
            }
          };

          document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
          }, { passive: true });

          document.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
            const elapsed = Date.now() - touchStartTime;

            // Only process quick, intentional horizontal swipes
            if (dy > SWIPE_MAX_Y || elapsed > 400) return;

            const sb = document.getElementById('sidebar');
            const isSidebarOpen = sb && sb.classList.contains('active');

            // Swipe right from left edge to open
            if (dx > SWIPE_THRESHOLD && touchStartX < EDGE_ZONE && !isSidebarOpen) {
              openSidebar();
            }
            // Swipe left anywhere on sidebar to close
            if (dx < -SWIPE_THRESHOLD && isSidebarOpen) {
              closeSidebar();
            }
          }, { passive: true });
        })();

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
