"""Content data for geography chapter 7 (ICSE Class 8 Voyage)."""

from __future__ import annotations


def M(q, opts, correct, ans, exam="", teacher=""):
    return {"q": q, "opts": opts, "correct": correct, "ans": ans, "exam": exam, "teacher": teacher}


def T(q, correct, just):
    return {"q": q, "correct": correct, "just": just}


def F(q, blank, ans):
    return {"q": q, "blank": blank, "ans": ans}


def Ma(q, pairs, ans):
    return {"q": q, "pairs": pairs, "ans": ans}


def S(q, ans):
    return {"q": q, "ans": ans}


def WC(term, definition):
    return {"term": term, "definition": definition}


# ═══════════════════════════════════════════════════════════════════════════════
# CHAPTER 7 — India — Physical Features & Climate
# ═══════════════════════════════════════════════════════════════════════════════

CH7_TOPICS = [
    {
        "title": "Location & Extent of India",
        "summary": "India stretches from 8°4'N to 37°6'N and 68°7'E to 97°25'E, centrally placed in the Indian Ocean.",
        "bullets": [
            "Latitudinal extent: 8°4'N (Kanyakumari) to 37°6'N (Kashmir)",
            "Longitudinal extent: 68°7'E (Gujarat) to 97°25'E (Arunachal Pradesh)",
            "Tropic of Cancer (23°30'N) bisects India into tropical and sub-tropical halves",
            "Standard Meridian: 82°30'E, basis of IST (UTC+5:30)",
            "Central location gives India sea routes to West Asia, Africa and Europe",
        ],
        "body": "India is located in the Northern and Eastern hemispheres. Its peninsular shape projects into the Indian Ocean, giving it a strategic position on ancient and modern sea routes. The Tropic of Cancer passes through the middle of the country, creating contrasts in climate and day length between north and south. Longitudinally, India spans almost 30 degrees; hence a standard meridian (82°30'E) was chosen to maintain a single time zone (IST).",
        "explanation": "ICSE frequently tests latitude-longitude facts, the role of the Tropic of Cancer, and the IST calculation. Link location to monsoon influence and maritime trade.",
        "teacherTip": "Ask students to locate Kanyakumari, Indira Point and the Standard Meridian on an outline map.",
        "examTip": "Write lat/long ranges exactly as 8°4'N–37°6'N and 68°7'E–97°25'E.",
    },
    {
        "title": "The Himalayas",
        "summary": "The Himalayas are young fold mountains formed by Indo-Eurasian plate collision and divided into Himadri, Himachal and Shivalik.",
        "bullets": [
            "Himadri (Greater Himalaya): highest, snow-bound, source of glaciers",
            "Himachal (Lesser Himalaya): ranges like Pir Panjal and Dhauladhar",
            "Shivalik (Outer Himalaya): low foothills with unconsolidated sediments",
            "Purvanchal hills extend eastwards (Patkai, Naga, Lushai)",
            "Act as a climatic barrier and source of perennial rivers",
        ],
        "body": "The Himalayas were formed by the collision of the Indian and Eurasian plates and are among the youngest fold mountains. They consist of three parallel ranges: Himadri (highest and snow-covered), Himachal (middle ranges with valleys and hill stations) and the Shivaliks (outer foothills). Eastwards they bend into the Purvanchal hills. The Himalayas block cold continental winds and force monsoon winds to rise, causing heavy rainfall on the southern slopes.",
        "explanation": "Explain the threefold division and the climatic role. UPSC-style MCQs often test the names and characteristics of Himalayan ranges.",
        "teacherTip": "Use a cross-sectional diagram to show the three parallel ranges and their relative heights.",
        "examTip": "Mention that the Himalayas are young fold mountains and the source of perennial rivers.",
    },
    {
        "title": "Northern Plains",
        "summary": "The Northern Plains are formed by alluvium from the Indus, Ganga and Brahmaputra systems, creating India's most fertile belt.",
        "bullets": [
            "Extends from Punjab to Assam; broad, flat and densely populated",
            "Formed by alluvial deposits brought by Himalayan rivers",
            "Regional divisions: Punjab Plains, Ganga Plains, Brahmaputra Plains",
            "Bhabar (pebbly belt) and Terai (marshy belt) along the foothills",
            "Khadar (new alluvium) and Bhangar (old alluvium)",
        ],
        "body": "The Northern Plains lie south of the Himalayas and stretch from Punjab in the west to Assam in the east. They are created by thick deposits of alluvium laid by the Indus, Ganga and Brahmaputra river systems. The plains are agriculturally productive and densely populated. Along the foothills are distinct belts: the porous Bhabar, the marshy Terai, and further south the fertile alluvial plains with Khadar and Bhangar soils.",
        "explanation": "Key terms like Bhabar, Terai, Khadar and Bhangar are high-yield. Link fertility to intensive agriculture and dense population.",
        "teacherTip": "Use a profile diagram from Shivalik foothills to the alluvial plains to show Bhabar and Terai.",
        "examTip": "Define Khadar vs Bhangar using 'new' vs 'old' alluvium.",
    },
    {
        "title": "Peninsular Plateau",
        "summary": "The Peninsular Plateau is an ancient, stable block of igneous and metamorphic rocks, divided into Central Highlands and Deccan Plateau.",
        "bullets": [
            "Oldest landmass of India; part of Gondwana",
            "Central Highlands include Malwa, Bundelkhand, Chota Nagpur",
            "Deccan Plateau south of Narmada; basaltic lava flows",
            "Western Ghats are higher and continuous; Eastern Ghats are lower and discontinuous",
            "Nilgiri hills form the meeting point of both Ghats",
        ],
        "body": "The Peninsular Plateau is one of the oldest landmasses, formed from hard crystalline rocks. It is relatively stable, with broad plateaus and residual hills. The plateau is divided into the Central Highlands in the north and the Deccan Plateau in the south. The Western Ghats form a steep escarpment along the western coast, while the Eastern Ghats are lower and broken, merging into the plateau. The Nilgiri hills link the two.",
        "explanation": "Students should contrast the Western and Eastern Ghats and connect the plateau to mineral resources and black soil.",
        "teacherTip": "Mark the plateau divisions and Ghats on an outline map for map practice.",
        "examTip": "State that the plateau is composed of hard igneous and metamorphic rocks.",
    },
    {
        "title": "Coastal Plains & Islands",
        "summary": "India has narrow western and broader eastern coastal plains, along with the Andaman & Nicobar and Lakshadweep Islands.",
        "bullets": [
            "Western Coastal Plains: narrow, Konkan–Kannad–Malabar sections",
            "Eastern Coastal Plains: wider, includes the Northern Circars and Coromandel",
            "Eastern coast has large deltas (Mahanadi, Godavari, Krishna, Kaveri)",
            "Andaman & Nicobar Islands in Bay of Bengal; volcanic origin",
            "Lakshadweep Islands in Arabian Sea; coral origin",
        ],
        "body": "The Western Coastal Plains are narrow due to the proximity of the Western Ghats, while the Eastern Coastal Plains are wider and more depositional, with large river deltas. The Andaman & Nicobar Islands are a chain of volcanic islands in the Bay of Bengal, while Lakshadweep comprises coral islands in the Arabian Sea. India’s coastal plains support ports, fisheries and major urban centres.",
        "explanation": "Differentiate between western and eastern coasts in terms of width, rivers and deltas. Islands are often asked separately.",
        "teacherTip": "Show the 10° Channel separating Andaman and Nicobar and the Gulf of Mannar coral area.",
        "examTip": "Remember: Lakshadweep = coral; Andaman & Nicobar = volcanic.",
    },
    {
        "title": "Rivers of India",
        "summary": "India’s rivers are broadly Himalayan (perennial) and Peninsular (seasonal), shaping plains, deltas and agriculture.",
        "bullets": [
            "Himalayan rivers: Indus, Ganga, Brahmaputra; snow-fed and perennial",
            "Peninsular rivers: Godavari, Krishna, Mahanadi (east-flowing) and Narmada, Tapti (west-flowing)",
            "Himalayan rivers form extensive flood plains and deltaic regions",
            "Peninsular rivers have shorter courses and seasonal flow",
            "Rivers are vital for irrigation, hydropower and transport",
        ],
        "body": "Himalayan rivers are long, snow-fed and carry heavy loads of silt, forming broad flood plains and deltas. The Indus system includes Jhelum, Chenab, Ravi, Beas and Sutlej; the Ganga system includes Yamuna, Ghaghara, Gandak and Kosi. The Brahmaputra flows as Tsangpo in Tibet and Jamuna in Bangladesh. Peninsular rivers are rain-fed and flow over hard rock beds, forming waterfalls and narrow valleys.",
        "explanation": "Emphasise perennial vs seasonal and east-flowing vs west-flowing differences; map questions are common.",
        "teacherTip": "Ask students to label the five tributaries of Indus on a map.",
        "examTip": "Mention that Narmada and Tapti flow west through rift valleys.",
    },
    {
        "title": "Climate & Monsoon",
        "summary": "India has a monsoon-type climate with seasonal reversal of winds and four main seasons.",
        "bullets": [
            "Seasons: cold weather, hot weather, south-west monsoon, retreating monsoon",
            "Monsoon winds reverse direction seasonally due to land-sea temperature contrast",
            "Arabian Sea and Bay of Bengal branches bring rain from June to September",
            "Orographic rainfall on windward slopes; rain-shadow on leeward side",
            "Retreating monsoon causes rain in Tamil Nadu (Oct-Nov)",
        ],
        "body": "India’s climate is dominated by the monsoon, defined by seasonal reversal of winds. During summer, low pressure over the north attracts moist winds from the oceans, bringing heavy rainfall. The Arabian Sea branch strikes the Western Ghats first, while the Bay of Bengal branch moves towards the northeast and then westwards along the Himalayas. In winter, dry winds blow from land to sea. The retreating monsoon causes rainfall on the Coromandel Coast.",
        "explanation": "Connect monsoon with relief, rainfall distribution and agriculture. UPSC-style questions often test causes of rainfall variability.",
        "teacherTip": "Use a monsoon wind diagram and highlight onset dates and branches.",
        "examTip": "Write 'seasonal reversal of winds' when defining monsoon.",
    },
    {
        "title": "Natural Vegetation & Wildlife",
        "summary": "India’s vegetation ranges from tropical evergreen to alpine forests, influenced by rainfall, altitude and soil.",
        "bullets": [
            "Tropical evergreen: heavy rainfall areas of Western Ghats and NE India",
            "Tropical deciduous: most widespread, found in central and northern India",
            "Thorn and scrub: arid and semi-arid regions of Rajasthan and Gujarat",
            "Mangroves: tidal deltas like Sundarbans",
            "Wildlife protection through national parks, sanctuaries and Project Tiger",
        ],
        "body": "Natural vegetation varies with climate and relief. Dense evergreen forests occur in high rainfall areas; deciduous forests dominate the peninsular and northern plains; thorn forests cover arid regions. Mangroves thrive in deltaic and tidal environments. India protects its biodiversity through national parks, sanctuaries and biosphere reserves. Project Tiger (1973) and other conservation efforts focus on protecting endangered species.",
        "explanation": "Link vegetation to rainfall and altitude. Conservation programmes are a key exam focus.",
        "teacherTip": "Compare deciduous vs evergreen with a quick rainfall chart.",
        "examTip": "Mention Sundarbans as the largest mangrove forest in India.",
    },
]

CH7_HIGH_YIELD = [
    "India lies in the Northern and Eastern hemispheres.",
    "Latitudinal extent: 8°4'N to 37°6'N; longitudinal extent: 68°7'E to 97°25'E.",
    "Tropic of Cancer (23°30'N) divides India into tropical and sub-tropical parts.",
    "Standard Meridian is 82°30'E, giving IST (UTC+5:30).",
    "India’s peninsular location gives it a central position in the Indian Ocean.",
    "The Himalayas are young fold mountains formed by Indo-Eurasian plate collision.",
    "Himadri is the highest Himalayan range with permanent snow and glaciers.",
    "Shivaliks are the outermost foothills made of unconsolidated sediments.",
    "Purvanchal hills include Patkai, Naga and Lushai.",
    "Northern Plains are formed by alluvium from Indus, Ganga and Brahmaputra rivers.",
    "Bhabar is a porous pebble belt; Terai is marshy with tall grasses.",
    "Khadar is new alluvium; Bhangar is old alluvium.",
    "Peninsular Plateau is the oldest landmass of India, part of Gondwana.",
    "Central Highlands include Malwa, Bundelkhand and Chota Nagpur plateau.",
    "Deccan Plateau is basaltic and formed by lava flows.",
    "Western Ghats are higher and continuous; Eastern Ghats are lower and broken.",
    "Nilgiri hills are the meeting point of Eastern and Western Ghats.",
    "Western Coastal Plains are narrow; Eastern Coastal Plains are wider with deltas.",
    "Andaman & Nicobar Islands are volcanic; Lakshadweep Islands are coral.",
    "Himalayan rivers are perennial and form extensive flood plains and deltas.",
    "Peninsular rivers are seasonal and mostly rain-fed.",
    "Narmada and Tapti flow west through rift valleys to the Arabian Sea.",
    "Godavari is the largest peninsular river.",
    "India has a monsoon-type climate with seasonal reversal of winds.",
    "South-west monsoon arrives in Kerala around 1 June.",
    "Retreating monsoon brings rain to Tamil Nadu in October-November.",
    "Orographic rainfall occurs on windward slopes; leeward sides are rain-shadow.",
    "Mawsynram/Cherrapunji receive some of the highest rainfall globally.",
    "Vegetation depends on rainfall, temperature, soil and altitude.",
    "Tropical deciduous forests are the most widespread type in India.",
]

CH7_MCQS = [
    M("India's latitudinal extent is approximately:", ["6°N to 35°N", "8°4'N to 37°6'N", "10°N to 40°N", "12°N to 42°N"], 1, "India stretches from about 8°4'N to 37°6'N, from Kanyakumari to Kashmir.", "Exact latitude range is a high-yield fact.", ""),
    M("India's longitudinal extent is:", ["60°E to 90°E", "68°7'E to 97°25'E", "70°E to 100°E", "72°E to 95°E"], 1, "The east-west extent is roughly 68°7'E to 97°25'E.", "This explains the large time lag between east and west.", ""),
    M("The Tropic of Cancer passes through India at:", ["22°30'N", "23°30'N", "24°N", "25°N"], 1, "The Tropic of Cancer is at 23°30'N and divides India into tropical and sub-tropical parts.", "", ""),
    M("How many Indian states does the Tropic of Cancer pass through?", ["6", "7", "8", "9"], 2, "The Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.", "ICSE often asks the number of states.", ""),
    M("The Standard Meridian of India is:", ["75°E", "82°30'E", "90°E", "97°25'E"], 1, "India uses 82°30'E as its Standard Meridian to keep a single time zone.", "IST = UTC+5:30 based on 82°30'E.", ""),
    M("Indian Standard Time is ahead of GMT by:", ["4 hours", "5 hours", "5 hours 30 minutes", "6 hours"], 2, "IST is GMT + 5 hours 30 minutes because 82°30'E is 5.5 hours ahead of 0°.", "", ""),
    M("The Andaman & Nicobar Islands lie in the:", ["Arabian Sea", "Bay of Bengal", "Persian Gulf", "Red Sea"], 1, "Andaman & Nicobar Islands are in the Bay of Bengal.", "", ""),
    M("Lakshadweep Islands are of:", ["Volcanic origin", "Coral origin", "Glacial origin", "Sedimentary origin"], 1, "Lakshadweep consists of coral islands in the Arabian Sea.", "Coral vs volcanic is a standard comparison.", ""),
    M("The Himalayas were formed due to:", ["Volcanic eruptions", "Indo-Eurasian plate collision", "River deposition", "Wind erosion"], 1, "The Himalayas are young fold mountains formed by collision of Indian and Eurasian plates.", "", ""),
    M("The highest and northernmost Himalayan range is:", ["Himachal", "Himadri", "Shivalik", "Purvanchal"], 1, "Himadri (Greater Himalaya) is the highest range with permanent snow.", "", ""),
    M("The Shivalik range is characterized by:", ["Old crystalline rocks", "Unconsolidated sediments and low hills", "Perennial snow", "Volcanic cones"], 1, "Shivaliks are the outermost foothills made of loose, unconsolidated sediments.", "", ""),
    M("Which hills form the eastern extension of the Himalayas?", ["Aravalli", "Purvanchal hills", "Vindhyas", "Satpuras"], 1, "The Himalayas curve eastwards into the Purvanchal hills (Patkai, Naga, Lushai).", "", ""),
    M("The Northern Plains were formed by:", ["Wind deposition", "Alluvium of Indus-Ganga-Brahmaputra", "Volcanic lava", "Glacial moraine"], 1, "These plains are built by alluvial deposits of three major river systems.", "", ""),
    M("The porous pebble belt along the foothills is called:", ["Terai", "Bhabar", "Khadar", "Bhangar"], 1, "Bhabar is the pebbly, porous belt along the Shivalik foothills.", "", ""),
    M("The marshy, forested belt south of Bhabar is:", ["Khadar", "Terai", "Bhangar", "Doab"], 1, "Terai is marshy, with tall grasses and dense forests.", "", ""),
    M("Old alluvium in the Northern Plains is known as:", ["Khadar", "Bhangar", "Terai", "Bhabar"], 1, "Bhangar is the older alluvium, often with kankar nodules.", "", ""),
    M("The Peninsular Plateau is mainly composed of:", ["Young fold mountains", "Old igneous and metamorphic rocks", "Recent alluvium", "Limestone caves"], 1, "The plateau is a stable block of ancient crystalline rocks.", "", ""),
    M("The Central Highlands include:", ["Malwa and Bundelkhand", "Coromandel and Konkan", "Kachchh and Kathiawar", "Doab regions"], 0, "Central Highlands include Malwa, Bundelkhand and Chota Nagpur regions.", "", ""),
    M("The Deccan Plateau lies to the south of the:", ["Vindhyas", "Narmada", "Ganga", "Sutlej"], 1, "The Deccan Plateau lies south of the Narmada river.", "", ""),
    M("The Western Ghats are:", ["Lower and discontinuous", "Higher and more continuous", "Completely absent", "Formed by river deposition"], 1, "Western Ghats are higher and more continuous than Eastern Ghats.", "", ""),
    M("The highest peak in the Western Ghats is:", ["Mahendragiri", "Anai Mudi", "Guru Shikhar", "Kanchenjunga"], 1, "Anai Mudi is the highest peak of the Western Ghats.", "", ""),
    M("The Eastern Ghats are best described as:", ["Continuous wall-like range", "Discontinuous and broken hills", "Permanent snow range", "Volcanic chain"], 1, "Eastern Ghats are broken and discontinuous due to river erosion.", "", ""),
    M("The Nilgiri Hills are important because they:", ["Contain the largest delta", "Join the Eastern and Western Ghats", "Form the highest Himalayan peak", "Are coral islands"], 1, "Nilgiri Hills are the meeting point of the Eastern and Western Ghats.", "", ""),
    M("Which coastal plain is wider and has large deltas?", ["Western coastal plain", "Eastern coastal plain", "Both equal", "Neither has deltas"], 1, "The Eastern Coastal Plains are broader and have large deltas of east-flowing rivers.", "", ""),
    M("The Coromandel Coast lies on the:", ["West coast of India", "East coast of India", "North coast of India", "Southwest coast only"], 1, "Coromandel Coast is the southeastern part of the Eastern Coastal Plains.", "", ""),
    M("The largest mangrove forest in India is:", ["Pichavaram", "Sundarbans", "Bhitar Kanika", "Coringa"], 1, "The Sundarbans, in the Ganga-Brahmaputra delta, are the largest mangroves in India.", "", ""),
    M("Which statement about Andaman & Nicobar Islands is correct?", ["They are coral islands", "They are volcanic islands", "They lie in Arabian Sea", "They are part of the Deccan Plateau"], 1, "Andaman & Nicobar Islands are volcanic in origin and located in the Bay of Bengal.", "", ""),
    M("The 10° Channel separates:", ["Lakshadweep and Maldives", "Andaman and Nicobar Islands", "Sri Lanka and India", "Kerala and Karnataka"], 1, "The 10° Channel separates Andaman and Nicobar Islands.", "", ""),
    M("Himalayan rivers are termed perennial because they:", ["Flow only in summer", "Are fed by glaciers and rainfall", "Have small basins", "Do not form deltas"], 1, "Himalayan rivers receive snowmelt and rainfall, so they flow year-round.", "", ""),
    M("Which of these is NOT a tributary of the Indus?", ["Jhelum", "Chenab", "Gandak", "Sutlej"], 2, "Gandak is a tributary of the Ganga, not of the Indus.", "", ""),
    M("The Brahmaputra is known as the Tsangpo in:", ["India", "Tibet", "Bangladesh", "Myanmar"], 1, "In Tibet, the Brahmaputra is called Tsangpo.", "", ""),
    M("Which two peninsular rivers flow westwards to the Arabian Sea?", ["Godavari and Krishna", "Mahanadi and Kaveri", "Narmada and Tapti", "Ganga and Yamuna"], 2, "Narmada and Tapti flow west through rift valleys to the Arabian Sea.", "", ""),
    M("The largest peninsular river is:", ["Mahanadi", "Godavari", "Krishna", "Kaveri"], 1, "Godavari is the largest peninsular river, often called the Dakshin Ganga.", "", ""),
    M("Which river forms a large delta in Odisha?", ["Mahanadi", "Narmada", "Tapti", "Luni"], 0, "The Mahanadi forms a prominent delta along the Odisha coast.", "", ""),
    M("India has a monsoon-type climate because of:", ["Constant westerlies", "Seasonal reversal of winds", "Lack of oceans", "High latitude location"], 1, "Monsoon climate is defined by seasonal reversal of winds driven by land-sea contrast.", "", ""),
    M("The south-west monsoon generally arrives in Kerala around:", ["15 May", "1 June", "15 July", "1 August"], 1, "The onset date is around 1 June in Kerala.", "", ""),
    M("The monsoon branch that brings rain to the Western Ghats first is:", ["Bay of Bengal branch", "Arabian Sea branch", "Polar winds", "Retreating monsoon"], 1, "The Arabian Sea branch hits the Western Ghats first, causing orographic rainfall.", "", ""),
    M("Retreating monsoon rains are important for:", ["Punjab", "Rajasthan", "Tamil Nadu", "Himachal Pradesh"], 2, "Tamil Nadu receives significant rainfall from the retreating monsoon in Oct-Nov.", "", ""),
    M("Orographic rainfall occurs when:", ["Winds descend a slope", "Moist winds are forced to rise over mountains", "Air is calm", "Winds blow from land to sea"], 1, "Mountains force moist winds to rise, cool and condense, causing heavy rain on windward slopes.", "", ""),
    M("The rain-shadow region of the Western Ghats lies largely in:", ["Konkan Coast", "Deccan Plateau", "Sundarbans", "Brahmaputra Valley"], 1, "Leeward side of Western Ghats (Deccan Plateau) receives less rainfall.", "", ""),
    M("The highest rainfall in India is recorded at:", ["Leh", "Mawsynram/Cherrapunji", "Jaisalmer", "Pune"], 1, "Mawsynram and Cherrapunji in Meghalaya receive some of the highest rainfall in the world.", "", ""),
    M("The Thar Desert receives low rainfall mainly because:", ["It is near the sea", "Aravalli range runs parallel to monsoon winds", "It is at high altitude", "It is a river delta"], 1, "The Aravallis run parallel to SW monsoon winds, offering little orographic lift.", "", ""),
    M("Tropical evergreen forests are found in:", ["Rajasthan and Gujarat", "Western Ghats and North-East India", "Punjab plains", "Deccan rain-shadow"], 1, "Evergreen forests grow in high rainfall areas like Western Ghats and NE India.", "", ""),
    M("The most widespread natural vegetation in India is:", ["Tropical evergreen", "Tropical deciduous", "Thorn", "Mangrove"], 1, "Tropical deciduous forests are the most widespread type in India.", "", ""),
    M("Thorn forests are typical of:", ["High rainfall areas", "Arid and semi-arid regions", "Deltaic regions", "Mountain slopes"], 1, "Thorn forests occur in arid and semi-arid areas like Rajasthan and Gujarat.", "", ""),
    M("Mangroves are best developed in:", ["Upper Ganga plain", "Ganga-Brahmaputra delta", "Malwa plateau", "Ladakh"], 1, "Mangroves thrive in tidal deltas; the Sundarbans is the largest.", "", ""),
    M("Montane forests are associated with:", ["Sea coasts", "High altitudes in the Himalayas", "Deserts", "Deltaic plains"], 1, "Montane forests occur with altitude in the Himalayas and other highlands.", "", ""),
    M("Project Tiger in India began in:", ["1960", "1973", "1985", "2001"], 1, "Project Tiger was launched in 1973 to protect tigers and habitats.", "", ""),
    M("India's peninsular location gives it:", ["No access to sea routes", "Access to major sea routes of the Indian Ocean", "Only land trade", "Polar climate"], 1, "India’s central position in the Indian Ocean facilitates maritime trade routes.", "", ""),
    M("The Northern Plains are densely populated mainly because:", ["They are mountainous", "They are fertile and flat", "They have severe cold", "They are desert regions"], 1, "Fertile alluvial soils and flat land support agriculture and dense settlement.", "", ""),
    M("A doab refers to:", ["A mountain pass", "Land between two rivers", "A desert dune", "A coastal lagoon"], 1, "Doab is the land between two rivers, common in the Ganga-Yamuna region.", "", ""),
    M("Which of the following is a west-flowing river?", ["Godavari", "Krishna", "Narmada", "Mahanadi"], 2, "Narmada flows westward into the Arabian Sea through a rift valley.", "", ""),
    M("The western coastal plain is divided into:", ["Northern Circars and Coromandel", "Konkan, Kannad and Malabar", "Punjab, Ganga, Brahmaputra", "Bhabar and Terai"], 1, "Konkan, Kannad and Malabar are divisions of the western coast.", "", ""),
    M("The eastern coastal plain includes:", ["Konkan", "Coromandel", "Malabar", "Kathiawar"], 1, "The Coromandel Coast is part of the eastern coastal plains.", "", ""),
    M("Black soil is associated mainly with:", ["Himalayan region", "Deccan lava plateau", "Coastal plains", "Desert sand dunes"], 1, "Black soil (regur) is formed from basaltic lava of the Deccan Plateau.", "", ""),
    M("India's climate is described as monsoon because:", ["It is uniformly hot", "It has a marked seasonal reversal of winds", "It has no rainfall", "It is a polar climate"], 1, "Seasonal reversal of winds and distinct seasons define monsoon climate.", "", ""),
    M("Which season is characterized by hot, dry winds called loo?", ["Cold weather season", "Hot weather season", "Retreating monsoon", "Winter monsoon"], 1, "Loo winds blow in the hot weather season (April-June) in the northern plains.", "", ""),
    M("Pre-monsoon showers in Kerala and Karnataka are called:", ["Kalbaisakhi", "Mango showers", "Nor'westers", "Burst of monsoon"], 1, "Mango showers are pre-monsoon showers that help ripen mangoes.", "", ""),
    M("Cyclones in the Bay of Bengal are common during:", ["Only summer", "Retreating monsoon (Oct-Nov)", "Only winter", "Only spring"], 1, "Bay of Bengal cyclones are frequent during Oct-Nov in the retreating monsoon season.", "", ""),
    M("Vegetation distribution in India depends mainly on:", ["Only latitude", "Rainfall, temperature, soil and altitude", "Longitude only", "Distance from equator only"], 1, "Climate, soil and relief control vegetation types.", "", ""),
    M("Which is the highest peak in India (within Indian territory)?", ["K2", "Kanchenjunga", "Nanda Devi", "Anai Mudi"], 1, "Kanchenjunga (8,586 m) is the highest peak within Indian territory.", "", ""),
    M("The Brahmaputra enters India as:", ["Jamuna", "Dihang", "Padma", "Meghna"], 1, "It enters Arunachal Pradesh as the Dihang before becoming Brahmaputra.", "", ""),
    M("The Ganga-Yamuna Doab lies between:", ["Ganga and Brahmaputra", "Yamuna and Ganga", "Indus and Jhelum", "Godavari and Krishna"], 1, "The Ganga-Yamuna Doab is the land between the Yamuna and Ganga rivers.", "", ""),
    M("Which river is known as the 'Dakshin Ganga'?", ["Narmada", "Godavari", "Mahanadi", "Kaveri"], 1, "Godavari is called the Dakshin Ganga because of its length and basin size.", "", ""),
    M("The Brahmaputra in Bangladesh is called:", ["Tsangpo", "Jamuna", "Padma", "Meghna"], 1, "In Bangladesh, the Brahmaputra is called the Jamuna.", "", ""),
    M("The Malabar Coast lies along which state group?", ["Gujarat and Maharashtra", "Kerala and Karnataka", "Odisha and Andhra Pradesh", "West Bengal and Odisha"], 1, "The Malabar Coast is along Kerala and Karnataka.", "", ""),
    M("The Northern Plains are also called:", ["Gondwana plains", "Indo-Gangetic-Brahmaputra plains", "Deccan plains", "Peninsular plains"], 1, "They are formed by Indus, Ganga and Brahmaputra river systems.", "", ""),
    M("Which of the following is a correct pair?", ["Khadar-Old alluvium", "Bhangar-New alluvium", "Bhabar-Porous pebble belt", "Terai-Dry sandy belt"], 2, "Bhabar is the porous pebble belt; Khadar is new alluvium; Bhangar is old.", "", ""),
    M("Which pair of rivers is most associated with rift valleys?", ["Ganga and Yamuna", "Godavari and Krishna", "Narmada and Tapti", "Mahanadi and Subarnarekha"], 2, "Narmada and Tapti flow through rift valleys between Vindhya and Satpura ranges.", "", ""),
    M("Which of the following is an example of a rain-shadow region?", ["Konkan Coast", "Shillong Plateau", "Deccan Plateau", "Sundarbans"], 2, "Deccan Plateau lies on the leeward side of the Western Ghats and is a rain-shadow region.", "", ""),
]

CH7_TFS = [
    T("The Tropic of Cancer divides India into tropical and sub-tropical regions.", "True", "It runs at 23°30'N across the middle of India."),
    T("Himadri is the lowest Himalayan range.", "False", "Himadri is the highest range; Shivalik is the lowest."),
    T("The Northern Plains are formed by the alluvium of the Indus, Ganga and Brahmaputra.", "True", "These river systems deposit thick alluvium."),
    T("The Western Ghats are lower and more discontinuous than the Eastern Ghats.", "False", "Western Ghats are higher and more continuous."),
    T("Lakshadweep Islands are of coral origin.", "True", "Lakshadweep is made of coral reefs in the Arabian Sea."),
    T("Himalayan rivers are seasonal and dry up in summer.", "False", "They are perennial due to snowmelt and rainfall."),
    T("Narmada and Tapti flow eastwards into the Bay of Bengal.", "False", "They flow westwards into the Arabian Sea."),
    T("India experiences a monsoon climate with seasonal reversal of winds.", "True", "This is the defining feature of monsoon climate."),
    T("Tropical deciduous forests are the most widespread in India.", "True", "They cover large parts of the peninsular and northern plains."),
    T("Mangroves grow in arid regions with very low rainfall.", "False", "Mangroves grow in tidal, saline delta regions."),
]

CH7_FILLS = [
    F("India's Standard Meridian is _____ longitude.", "82°30'E", "82°30'E determines IST for the whole country."),
    F("The highest Himalayan range is called the _____.", "Himadri", "Himadri is the Greater Himalaya."),
    F("The marshy belt south of Bhabar is called the _____.", "Terai", "Terai is swampy and densely forested."),
    F("The largest peninsular river is the _____.", "Godavari", "Godavari is called the Dakshin Ganga."),
    F("The largest mangrove forest in India is the _____.", "Sundarbans", "Sundarbans lies in the Ganga-Brahmaputra delta."),
]

CH7_MATCHES = [
    Ma("Match range with feature:", [{"left": "Himadri", "right": "Highest, snow-bound range"}, {"left": "Himachal", "right": "Middle range with valleys"}, {"left": "Shivalik", "right": "Foothills of loose sediments"}, {"left": "Purvanchal", "right": "Eastern extension of Himalayas"}], "Himadri-highest; Himachal-middle; Shivalik-foothills; Purvanchal-east"),
    Ma("Match plain term with description:", [{"left": "Bhabar", "right": "Pebbly porous belt"}, {"left": "Terai", "right": "Marshy belt with tall grass"}, {"left": "Khadar", "right": "New alluvium"}, {"left": "Bhangar", "right": "Old alluvium"}], "Bhabar-pebbly; Terai-marshy; Khadar-new; Bhangar-old"),
    Ma("Match coastal section with coast:", [{"left": "Konkan", "right": "Western coast"}, {"left": "Malabar", "right": "Western coast"}, {"left": "Coromandel", "right": "Eastern coast"}, {"left": "Northern Circars", "right": "Eastern coast"}], "Konkan-west; Malabar-west; Coromandel-east; Circars-east"),
    Ma("Match island group with origin:", [{"left": "Andaman & Nicobar", "right": "Volcanic origin"}, {"left": "Lakshadweep", "right": "Coral origin"}, {"left": "Sundarbans", "right": "Mangrove delta"}, {"left": "Gulf of Mannar", "right": "Coral reefs"}], "A&N-volcanic; Lakshadweep-coral; Sundarbans-mangrove; Mannar-coral"),
    Ma("Match river with feature:", [{"left": "Narmada", "right": "West-flowing rift valley river"}, {"left": "Godavari", "right": "Largest peninsular river"}, {"left": "Brahmaputra", "right": "Called Tsangpo in Tibet"}, {"left": "Kaveri", "right": "Forms delta in Tamil Nadu"}], "Narmada-west; Godavari-largest; Brahmaputra-Tsangpo; Kaveri-delta"),
    Ma("Match monsoon term with meaning:", [{"left": "Monsoon", "right": "Seasonal reversal of winds"}, {"left": "Orographic rain", "right": "Rain on windward slopes"}, {"left": "Rain shadow", "right": "Leeward dry region"}, {"left": "Retreating monsoon", "right": "Oct-Nov rainfall in Tamil Nadu"}], "Monsoon-reversal; Orographic-windward; Rain-shadow-leeward; Retreating-TN"),
    Ma("Match vegetation with region:", [{"left": "Evergreen", "right": "Western Ghats/NE India"}, {"left": "Deciduous", "right": "Central India"}, {"left": "Thorn", "right": "Rajasthan"}, {"left": "Mangrove", "right": "Sundarbans"}], "Evergreen-Ghats/NE; Deciduous-central; Thorn-Rajasthan; Mangrove-Sundarbans"),
    Ma("Match feature with statement:", [{"left": "Western Ghats", "right": "Higher, continuous"}, {"left": "Eastern Ghats", "right": "Lower, discontinuous"}, {"left": "Nilgiri Hills", "right": "Meeting point of Ghats"}, {"left": "Deccan Plateau", "right": "Basaltic lava region"}], "W Ghats-higher; E Ghats-lower; Nilgiri-meeting; Deccan-basaltic"),
    Ma("Match state with Tropic of Cancer:", [{"left": "Gujarat", "right": "Tropic passes"}, {"left": "Rajasthan", "right": "Tropic passes"}, {"left": "Tripura", "right": "Tropic passes"}, {"left": "Kerala", "right": "Does not pass"}], "Gujarat-yes; Rajasthan-yes; Tripura-yes; Kerala-no"),
    Ma("Match seasonal wind with effect:", [{"left": "SW monsoon", "right": "June-Sept rainfall"}, {"left": "NE monsoon", "right": "Oct-Nov rain in TN"}, {"left": "Hot weather winds", "right": "Loo in north plains"}, {"left": "Winter winds", "right": "Dry, cool conditions"}], "SW-Jun-Sept; NE-Oct-Nov; Loo-hot; Winter-dry"),
]

CH7_SHORTS = [
    S("Explain why India’s location is considered strategic.", "India’s peninsular location in the Indian Ocean places it on major sea routes linking West Asia, Africa and Europe with Southeast Asia. It also allows maritime trade, access to resources and influence over the Indian Ocean region."),
    S("Differentiate between Himadri, Himachal and Shivalik ranges.", "Himadri is the highest range with permanent snow and glaciers. Himachal (Lesser Himalaya) has lower ranges with valleys and hill stations. Shivalik is the outermost foothill range of unconsolidated sediments."),
    S("What is the difference between Bhangar and Khadar?", "Bhangar is the older alluvium with kankar nodules and slightly elevated terraces. Khadar is newer, finer alluvium deposited annually by floods, making it more fertile."),
    S("Why is the western coastal plain narrow while the eastern coastal plain is wide?", "The Western Ghats lie close to the coast, leaving a narrow coastal strip. On the east, rivers flow longer distances and deposit extensive deltas, creating a wider plain."),
    S("State any four factors influencing natural vegetation in India.", "Rainfall, temperature, soil type and altitude are the main factors; human activity also alters natural vegetation."),
]

CH7_MINDMAP = """mindmap
  root((India: Physical Features & Climate))
    Location
      8°4'N–37°6'N
      68°7'E–97°25'E
      Tropic of Cancer
      Standard Meridian 82°30'E
    Himalayas
      Himadri
      Himachal
      Shivalik
      Purvanchal
    Northern Plains
      Indus-Ganga-Brahmaputra
      Bhabar
      Terai
      Khadar/Bhangar
    Peninsular Plateau
      Central Highlands
      Deccan Plateau
      Western Ghats
      Eastern Ghats
    Coastal Plains
      Western: Konkan-Kannad-Malabar
      Eastern: Circars-Coromandel
      Deltas
    Rivers
      Himalayan (perennial)
      Peninsular (seasonal)
      Narmada/Tapti west-flowing
    Climate
      Monsoon reversal
      SW monsoon
      Retreating monsoon
      Rain shadow
    Vegetation
      Evergreen
      Deciduous
      Thorn
      Mangrove"""

CH7_CHEATSHEET = [
    "India lies between 8°4'N–37°6'N and 68°7'E–97°25'E.",
    "Tropic of Cancer (23°30'N) divides India into tropical and sub-tropical parts.",
    "Standard Meridian 82°30'E gives IST = UTC+5:30.",
    "Himalayas are young fold mountains from Indo-Eurasian collision.",
    "Three Himalayan ranges: Himadri, Himachal, Shivalik.",
    "Purvanchal hills include Patkai, Naga, Lushai.",
    "Northern Plains formed by Indus, Ganga, Brahmaputra alluvium.",
    "Bhabar = porous pebble belt; Terai = marshy belt.",
    "Khadar = new alluvium; Bhangar = old alluvium.",
    "Peninsular Plateau is ancient, stable, crystalline rock mass.",
    "Central Highlands: Malwa, Bundelkhand, Chota Nagpur.",
    "Deccan Plateau is basaltic; black soil is common.",
    "Western Ghats higher/continuous; Eastern Ghats lower/discontinuous.",
    "Nilgiri Hills connect Eastern and Western Ghats.",
    "Western Coastal Plains: Konkan-Kannad-Malabar, narrow with estuaries.",
    "Eastern Coastal Plains: Circars-Coromandel, wider with large deltas.",
    "Andaman & Nicobar = volcanic; Lakshadweep = coral.",
    "Himalayan rivers are perennial; peninsular rivers are seasonal.",
    "Narmada and Tapti are west-flowing rift-valley rivers.",
    "Godavari is the largest peninsular river.",
    "Monsoon climate = seasonal reversal of winds.",
    "SW monsoon arrives around 1 June in Kerala.",
    "Retreating monsoon brings Oct-Nov rain to Tamil Nadu.",
    "Evergreen forests in Western Ghats and NE India; deciduous most widespread.",
    "Thorn forests in arid Rajasthan; mangroves in Sundarbans.",
]

CH7_WORDCARDS = [WC(t, d) for t, d in [
    ("Tropic of Cancer", "Latitude 23°30'N dividing India into two climatic halves"),
    ("Standard Meridian", "Longitude 82°30'E used for Indian Standard Time"),
    ("IST", "Indian Standard Time, UTC+5:30"),
    ("Himadri", "Highest Himalayan range with permanent snow"),
    ("Himachal", "Middle Himalayan range with valleys and hill stations"),
    ("Shivalik", "Outer Himalayan foothills of unconsolidated sediments"),
    ("Purvanchal", "Eastern extension of the Himalayas"),
    ("Northern Plains", "Alluvial plains formed by Indus, Ganga and Brahmaputra"),
    ("Bhabar", "Pebbly porous belt at Himalayan foothills"),
    ("Terai", "Marshy belt with tall grasses south of Bhabar"),
    ("Khadar", "New fertile alluvium deposited by rivers"),
    ("Bhangar", "Old alluvium with kankar nodules"),
    ("Peninsular Plateau", "Ancient crystalline rock region of India"),
    ("Central Highlands", "Northern part of Peninsular Plateau"),
    ("Deccan Plateau", "Southern plateau formed by basaltic lava"),
    ("Western Ghats", "High, continuous mountains along west coast"),
    ("Eastern Ghats", "Lower, discontinuous hills along east coast"),
    ("Nilgiri Hills", "Meeting point of Eastern and Western Ghats"),
    ("Konkan", "Northern section of western coastal plains"),
    ("Malabar", "Southern section of western coastal plains"),
    ("Coromandel", "Southern section of eastern coastal plains"),
    ("Andaman & Nicobar", "Volcanic island group in Bay of Bengal"),
    ("Lakshadweep", "Coral islands in Arabian Sea"),
    ("Perennial rivers", "Rivers flowing year-round, snow-fed"),
    ("Rift valley", "Tectonic depression through which Narmada flows"),
    ("Monsoon", "Seasonal reversal of winds causing rainfall"),
    ("Orographic rainfall", "Rainfall caused by mountains forcing air to rise"),
    ("Rain shadow", "Dry leeward area with low rainfall"),
    ("Mangrove", "Salt-tolerant tidal forest in deltas"),
    ("Project Tiger", "1973 conservation programme for tigers"),
]]

CH7 = {
    "title": "India — Physical Features & Climate",
    "topics": CH7_TOPICS,
    "high_yield": CH7_HIGH_YIELD,
    "mcqs": CH7_MCQS,
    "tfs": CH7_TFS,
    "fills": CH7_FILLS,
    "matches": CH7_MATCHES,
    "shorts": CH7_SHORTS,
    "mindmap": CH7_MINDMAP,
    "cheatsheet": CH7_CHEATSHEET,
    "word_cards": CH7_WORDCARDS,
}

assert len(CH7_MCQS) == 70
assert len(CH7_TFS) == 10
assert len(CH7_FILLS) == 5
assert len(CH7_MATCHES) == 10
assert len(CH7_SHORTS) == 5
assert len(CH7_WORDCARDS) == 30
