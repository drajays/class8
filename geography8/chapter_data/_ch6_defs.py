"""Content data for geography chapter 6 (ICSE Class 8 Voyage)."""

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
# CHAPTER 6 — Asia — Physical Features & Climate
# ═══════════════════════════════════════════════════════════════════════════════

CH6_TOPICS = [
    {
        "title": "Location & Extent of Asia",
        "summary": "Asia is the largest continent, stretching from the Arctic Ocean in the north to the Indian Ocean in the south and from the Mediterranean in the west to the Pacific in the east.",
        "bullets": [
            "Largest continent: about one-third of Earth's land area",
            "Northern boundary: Arctic Ocean; southern boundary: Indian Ocean",
            "Western boundary: Ural Mountains, Ural River, Caspian Sea, Caucasus, Black Sea",
            "Eastern boundary: Pacific Ocean; north-east separated from North America by Bering Strait",
            "Extremes: Cape Chelyuskin (north), Cape Piai (south), Cape Baba (west), Cape Dezhnev (east)",
        ],
        "body": "Asia occupies the eastern and northern parts of the land hemisphere. It extends from the Arctic Ocean in the north to the Indian Ocean in the south, and from the Mediterranean Sea and Ural Mountains in the west to the Pacific Ocean in the east. Asia is separated from Europe by the Ural Mountains, Ural River, the Caspian Sea, the Caucasus Mountains and the Black Sea. The Bering Strait separates Asia from North America. Its extreme points include Cape Chelyuskin in the north, Cape Piai in the south, Cape Baba in the west and Cape Dezhnev in the east. This vast latitudinal span explains Asia's enormous climatic variety.",
        "explanation": "Remember boundary features in a west-to-east chain. ICSE often asks for the Europe–Asia boundary and the oceans that surround Asia.",
        "teacherTip": "Ask students to trace Asia on a world map and mark the four extreme capes for spatial memory.",
        "examTip": "Always mention the Ural–Caspian–Caucasus–Black Sea line when asked about Europe–Asia boundary.",
    },
    {
        "title": "Physical Divisions of Asia",
        "summary": "Asia has three broad physical divisions: Northern Lowlands, Central Highlands and Southern Plateaus/Plains.",
        "bullets": [
            "Northern Lowlands: West Siberian Plain and Turan Lowland",
            "Central Highlands: mountains and plateaus—Pamir, Tien Shan, Kunlun, Himalayas",
            "Southern Plateaus: Arabian and Deccan plateaus; Indo-Gangetic and Chinese plains",
            "Central Highlands act as a climate barrier",
            "Plains are densely populated and agriculturally rich",
        ],
        "body": "Asia can be broadly divided into three physical divisions. The Northern Lowlands include the West Siberian Plain and Turan Lowland, drained by rivers like Ob, Yenisei and Lena. The Central Highlands comprise the world's highest mountains and plateaus—Pamir (the 'Roof of the World'), Tien Shan, Kunlun, Karakoram and the Himalayas. These highlands influence river systems and block moist winds. The Southern Plateaus and Plains include the Arabian and Deccan plateaus, and vast alluvial plains such as the Indo-Gangetic and North China plains. These plains support dense populations and intensive agriculture.",
        "explanation": "Use the division scheme as: North = lowlands, Centre = mountains/plateaus, South = plateaus/plains. Connect landforms to climate and population.",
        "teacherTip": "Use a physical map to show how highlands create rain shadow and river sources.",
        "examTip": "Mention at least one example in each division for full marks.",
    },
    {
        "title": "Mountain Systems",
        "summary": "Asia's mountain systems include the Himalayas, Karakoram, Hindu Kush, Tien Shan, Kunlun, Altai, Zagros and Arakan Yoma ranges.",
        "bullets": [
            "Himalayas: world's highest mountain system, young fold mountains",
            "Karakoram and Hindu Kush meet near the Pamir knot",
            "Tien Shan and Kunlun form inner Asian ranges",
            "Altai separates Siberia from Central Asia",
            "Zagros in West Asia; Arakan Yoma in Myanmar",
        ],
        "body": "Asia is dominated by massive mountain systems. The Himalayas, the world's highest young fold mountains, extend over 2,400 km and influence climate by blocking cold winds from Central Asia. The Karakoram and Hindu Kush ranges meet the Himalayas near the Pamir knot. Inner Asian ranges include the Tien Shan and Kunlun. In the north-west, the Altai range separates Siberia from Central Asia. West Asia is marked by the Zagros mountains, while the Arakan Yoma runs along Myanmar's western border. These mountains are sources of major rivers and create natural barriers affecting climate and human settlement.",
        "explanation": "Mountains are not just relief features; they are climatic barriers and river sources. The Pamir knot is a key junction where ranges meet.",
        "teacherTip": "Use a 'spokes from Pamir' diagram to show how ranges radiate from Central Asia.",
        "examTip": "State why Himalayas are vital: they block cold winds and help create monsoon rainfall.",
    },
    {
        "title": "Plateaus & Plains",
        "summary": "Asia has major plateaus like Tibet, Iranian and Deccan and plains like the Indo-Gangetic, North China and West Siberian plains.",
        "bullets": [
            "Tibetan Plateau: highest and largest plateau, source of major rivers",
            "Iranian and Anatolian plateaus dominate West Asia",
            "Deccan Plateau forms peninsular India",
            "Indo-Gangetic Plain: one of the world's most fertile plains",
            "North China and Manchurian plains support dense populations",
        ],
        "body": "Asia's plateaus are extensive. The Tibetan Plateau, the highest and largest, feeds rivers such as the Yangtze, Yellow and Mekong. The Iranian and Anatolian plateaus shape West Asia's arid climate. The Deccan Plateau forms peninsular India, flanked by the Western and Eastern Ghats. Asia's plains include the Indo-Gangetic Plain, formed by the Indus-Ganga-Brahmaputra system; the North China Plain formed by the Huang He and Yangtze; and the West Siberian Plain, one of the world's largest lowlands. These plains are fertile due to alluvium and support dense populations and agriculture.",
        "explanation": "Plateaus often create rain shadows, while plains are fertile and densely populated—link landforms to settlement patterns.",
        "teacherTip": "Compare Tibetan Plateau (source) with Indo-Gangetic Plain (deposition) to show river work.",
        "examTip": "Use the phrase 'alluvial plains' when describing Indo-Gangetic and North China plains.",
    },
    {
        "title": "Rivers & Lakes",
        "summary": "Asia's rivers drain into the Arctic, Pacific and Indian oceans, while lakes like the Caspian, Baikal and Aral are key inland water bodies.",
        "bullets": [
            "Major Arctic-draining rivers: Ob, Yenisei, Lena",
            "Pacific-draining rivers: Yangtze, Huang He, Mekong, Amur",
            "Indian Ocean system: Indus, Ganga, Brahmaputra, Tigris-Euphrates",
            "Caspian Sea: world's largest inland lake",
            "Lake Baikal: world's deepest freshwater lake",
        ],
        "body": "Asia's rivers are among the longest in the world. The Ob, Yenisei and Lena flow north into the Arctic Ocean. The Yangtze, Huang He, Mekong and Amur flow east into the Pacific. The Indus, Ganga and Brahmaputra flow south into the Indian Ocean, while the Tigris and Euphrates drain into the Persian Gulf. Asia also has important lakes: the Caspian Sea is the world's largest inland lake; Lake Baikal is the deepest freshwater lake; and the Aral Sea has shrunk drastically due to river diversion. These rivers and lakes sustain agriculture, transport and hydropower.",
        "explanation": "Classify rivers by drainage basin—Arctic, Pacific, Indian. Lakes are often asked for superlatives (largest, deepest).",
        "teacherTip": "Ask students to match rivers with the ocean they drain into to strengthen map skills.",
        "examTip": "Remember: Caspian = largest, Baikal = deepest; Aral Sea shrinkage is a noted human-impact case.",
    },
    {
        "title": "Climate Factors & Zones",
        "summary": "Asia's climate varies due to latitude, altitude, distance from sea, winds and ocean currents, creating zones from tundra to equatorial rainforest.",
        "bullets": [
            "Latitude controls temperature from Arctic to equatorial belt",
            "Altitude and relief: high mountains are colder and act as barriers",
            "Continentality: interiors have extreme temperature ranges",
            "Pressure belts and wind systems shape rainfall patterns",
            "Zones include tundra, taiga, temperate, steppe, desert, Mediterranean, tropical monsoon and equatorial",
        ],
        "body": "Asia's vast size and varied relief create multiple climate zones. Latitude determines basic temperature, from polar north to tropical south. Altitude reduces temperature in the Himalayas and Tibetan Plateau. Distance from sea increases continentality, causing hot summers and cold winters in the interior. Pressure belts, prevailing winds and ocean currents influence rainfall patterns. As a result, Asia has tundra and taiga in Siberia, temperate climates in East Asia, steppe and desert climates in Central and West Asia, Mediterranean climate around the Levant and Turkey, tropical monsoon climate in South and Southeast Asia, and equatorial climate in parts of Indonesia and Malaysia.",
        "explanation": "Always connect factor → effect. For example, continentality leads to extreme seasonal temperature ranges.",
        "teacherTip": "Use a climate zone map and link each zone to vegetation types for integrated learning.",
        "examTip": "List 3–4 climate factors before describing climate zones in any answer.",
    },
    {
        "title": "Monsoon & Regional Climates",
        "summary": "The monsoon is a seasonal reversal of winds; it brings heavy summer rain to South Asia and shapes regional climates across Asia.",
        "bullets": [
            "South-west monsoon: summer winds from sea to land bring rain",
            "North-east monsoon: winter winds from land to sea are dry",
            "Typhoons affect East and Southeast Asia",
            "Western disturbances bring winter rain to north-west India and Pakistan",
            "Orographic rainfall on windward slopes creates rain shadow on leeward side",
        ],
        "body": "Monsoon winds are seasonal reversals caused by differential heating of land and sea. In summer, the south-west monsoon blows from the Indian Ocean to the land, bringing heavy rainfall to South and Southeast Asia. In winter, the north-east monsoon blows from land to sea, bringing dry conditions, though Tamil Nadu receives winter rain from the Bay of Bengal branch. East Asia experiences typhoons—tropical cyclones over the Pacific. Western disturbances from the Mediterranean bring winter rain and snowfall to north-west India and Pakistan. Mountains like the Himalayas enhance orographic rainfall on windward slopes and create rain shadow areas.",
        "explanation": "Monsoon is a wind system, not just rain. ICSE expects seasonal wind direction and its consequences.",
        "teacherTip": "Draw a simple summer vs winter wind diagram to show reversal clearly.",
        "examTip": "Mention western disturbances for winter rainfall in Punjab and Kashmir—often asked.",
    },
    {
        "title": "Natural Vegetation of Asia",
        "summary": "Asia's vegetation ranges from tundra mosses in the Arctic to equatorial rainforests and mangroves in the tropics.",
        "bullets": [
            "Tundra: mosses, lichens, dwarf shrubs in the far north",
            "Taiga: coniferous forests (pine, spruce) in Siberia",
            "Temperate deciduous forests in China, Japan and Korea",
            "Steppe grasslands and desert vegetation in Central and West Asia",
            "Tropical monsoon forests, rainforests and mangroves in South and Southeast Asia",
        ],
        "body": "Vegetation in Asia reflects climate. The Arctic north has tundra with mosses and lichens. South of it lies the taiga or coniferous forest belt across Siberia. Temperate deciduous forests occur in China, Korea and Japan. The interiors of Central Asia have steppe grasslands and deserts with xerophytic shrubs. In South and Southeast Asia, tropical monsoon forests grow where summer rainfall is high, and equatorial rainforests flourish in Malaysia and Indonesia. Mangroves occur in delta regions such as the Sundarbans, adapted to saline conditions.",
        "explanation": "Link each vegetation type to its climate: cold → tundra/taiga, dry → steppe/desert, wet tropics → rainforests.",
        "teacherTip": "Use a climate–vegetation pairing chart for quick revision.",
        "examTip": "Write the term 'xerophytic' for desert plants and 'mangroves' for delta coasts.",
    },
]

CH6_HIGH_YIELD = [
    "Asia is the largest continent, occupying about one-third of Earth's land area.",
    "Asia extends from the Arctic Ocean in the north to the Indian Ocean in the south.",
    "The Pacific Ocean forms Asia's eastern boundary; the Mediterranean and Ural chain form the west.",
    "Europe–Asia boundary: Ural Mountains, Ural River, Caspian Sea, Caucasus, Black Sea.",
    "Bering Strait separates Asia from North America.",
    "Extremes: Cape Chelyuskin (north), Cape Piai (south), Cape Baba (west), Cape Dezhnev (east).",
    "Asia's physical divisions: Northern Lowlands, Central Highlands, Southern Plateaus/Plains.",
    "Pamir knot is a junction where major Asian ranges meet.",
    "Himalayas are young fold mountains and act as a climatic barrier.",
    "Tibetan Plateau is the highest and largest plateau in the world.",
    "Indo-Gangetic Plain is one of the most fertile alluvial plains.",
    "West Siberian Plain is one of the largest lowlands on Earth.",
    "Major Arctic rivers: Ob, Yenisei, Lena.",
    "Major Pacific rivers: Yangtze, Huang He, Mekong, Amur.",
    "Major Indian Ocean rivers: Indus, Ganga, Brahmaputra.",
    "Tigris and Euphrates drain into the Persian Gulf.",
    "Caspian Sea is the world's largest inland lake.",
    "Lake Baikal is the world's deepest freshwater lake.",
    "Aral Sea has shrunk due to diversion of its feeder rivers.",
    "Asia has climate zones from tundra to equatorial rainforest.",
    "Continentality causes extreme temperature ranges in Central Asia.",
    "Altitude lowers temperature; high mountains block moist winds.",
    "Monsoon is a seasonal reversal of winds, not just rainfall.",
    "South-west monsoon brings summer rain to South Asia.",
    "North-east monsoon is dry; Tamil Nadu gets winter rain from it.",
    "Western disturbances bring winter rain to north-west India and Pakistan.",
    "Typhoons are tropical cyclones over the western Pacific.",
    "Tundra vegetation includes mosses and lichens; taiga has conifers.",
    "Steppe grasslands dominate semi-arid interiors of Central Asia.",
    "Mangroves thrive in delta regions like the Sundarbans.",
]

CH6_MCQS = [
    M("Asia is located mainly in the:", ["Northern and Eastern Hemispheres", "Southern and Western Hemispheres", "Only Southern Hemisphere", "Only Western Hemisphere"], 0, "Asia lies largely in the Northern and Eastern Hemispheres, though some islands extend into the Southern Hemisphere.", "Hemisphere-based questions are frequent.", "Recall Asia's vast northern extent."),
    M("Which ocean lies to the north of Asia?", ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"], 1, "The Arctic Ocean forms the northern boundary of Asia.", "Boundary oceans are basic map questions.", ""),
    M("The Europe–Asia boundary does NOT include the:", ["Ural Mountains", "Caucasus Mountains", "Rocky Mountains", "Caspian Sea"], 2, "The Rockies are in North America; the Europe–Asia boundary uses Urals, Caspian and Caucasus.", "Exclude non-Asian ranges.", ""),
    M("Asia is separated from North America by the:", ["Bering Strait", "Strait of Gibraltar", "Suez Canal", "Malacca Strait"], 0, "The narrow Bering Strait separates Asia from North America (Russia–Alaska).", "Key strait identity is high-yield.", ""),
    M("Which is the southernmost point of mainland Asia?", ["Cape Baba", "Cape Piai", "Cape Dezhnev", "Cape Chelyuskin"], 1, "Cape Piai (Tanjung Piai) in Malaysia is Asia's southernmost point.", "Remember four extreme capes.", ""),
    M("The westernmost point of Asia is:", ["Cape Baba", "Cape Piai", "Cape Dezhnev", "Cape Chelyuskin"], 0, "Cape Baba in Turkey marks Asia's westernmost point.", "West = Cape Baba.", ""),
    M("The easternmost point of Asia is:", ["Cape Dezhnev", "Cape Piai", "Cape Baba", "Cape Chelyuskin"], 0, "Cape Dezhnev in Russia is Asia's easternmost point.", "East = Cape Dezhnev.", ""),
    M("The Pamir knot is important because it:", ["Is Asia's deepest lake", "Is a junction of major mountain ranges", "Is a desert oasis", "Is a river delta"], 1, "The Pamir knot is where major Asian mountain ranges such as the Himalayas, Karakoram and Tien Shan meet.", "Pamir knot = mountain junction.", ""),
    M("Which of the following is NOT part of Asia's Central Highlands?", ["Tien Shan", "Kunlun", "Himalayas", "Appalachians"], 3, "The Appalachians are in North America; Tien Shan, Kunlun and Himalayas are in Asia.", "Eliminate non-Asian ranges.", ""),
    M("The Northern Lowlands of Asia include the:", ["Deccan Plateau", "West Siberian Plain", "Tibetan Plateau", "Arabian Plateau"], 1, "The West Siberian Plain is a major part of Asia's Northern Lowlands.", "Northern lowlands = Siberia and Turan.", ""),
    M("The highest and largest plateau of the world is:", ["Deccan Plateau", "Iranian Plateau", "Tibetan Plateau", "Mongolian Plateau"], 2, "The Tibetan Plateau is the highest and largest plateau on Earth.", "Tibet = 'Roof of the World'.", ""),
    M("The Indo-Gangetic Plain is formed by the rivers:", ["Yangtze and Huang He", "Indus, Ganga and Brahmaputra", "Tigris and Euphrates", "Ob and Yenisei"], 1, "The Indo-Gangetic Plain is formed by alluvium from Indus, Ganga and Brahmaputra rivers.", "Name all three rivers.", ""),
    M("Which mountain range forms the southern edge of the Tibetan Plateau?", ["Himalayas", "Zagros", "Altai", "Arakan Yoma"], 0, "The Himalayas form the southern edge of the Tibetan Plateau.", "Himalayas = Tibet's southern rim.", ""),
    M("The Karakoram range is best known for containing:", ["Mount Everest", "K2 (Godwin Austen)", "Mont Blanc", "Aconcagua"], 1, "K2, the second-highest peak, lies in the Karakoram range.", "Everest is in the Himalayas.", ""),
    M("The Arakan Yoma range is located in:", ["Myanmar", "Iran", "Turkey", "Siberia"], 0, "The Arakan Yoma runs along western Myanmar (Burma).", "Arakan Yoma = Myanmar.", ""),
    M("The Zagros Mountains are located in:", ["Japan", "Iran and Iraq", "China", "India"], 1, "The Zagros mountains lie mainly in Iran and extend into Iraq.", "West Asia location.", ""),
    M("Which river drains into the Arctic Ocean?", ["Yangtze", "Lena", "Ganga", "Mekong"], 1, "The Lena River flows north into the Arctic Ocean.", "Ob, Yenisei, Lena are Arctic rivers.", ""),
    M("Which river flows into the Pacific Ocean?", ["Indus", "Yangtze", "Tigris", "Ob"], 1, "The Yangtze River flows east into the Pacific Ocean.", "Pacific basin = Yangtze, Huang He, Mekong, Amur.", ""),
    M("Which river drains into the Persian Gulf?", ["Euphrates", "Yenisei", "Huang He", "Lena"], 0, "The Euphrates (with Tigris) drains into the Persian Gulf.", "Persian Gulf = Tigris-Euphrates.", ""),
    M("The largest inland lake in the world is:", ["Lake Baikal", "Caspian Sea", "Aral Sea", "Dead Sea"], 1, "The Caspian Sea is the world's largest inland lake by area.", "Caspian = largest.", ""),
    M("The deepest freshwater lake in the world is:", ["Lake Baikal", "Caspian Sea", "Lake Tanganyika", "Aral Sea"], 0, "Lake Baikal in Siberia is the world's deepest freshwater lake.", "Baikal = deepest.", ""),
    M("Which lake has shrunk significantly due to diversion of rivers?", ["Caspian Sea", "Aral Sea", "Lake Baikal", "Tonle Sap"], 1, "The Aral Sea shrank drastically after its feeder rivers were diverted for irrigation.", "Human impact case study.", ""),
    M("Which is a correct pair of river and drainage basin?", ["Indus—Pacific", "Yangtze—Indian Ocean", "Ob—Arctic", "Huang He—Atlantic"], 2, "The Ob River drains into the Arctic Ocean.", "Match river to basin.", ""),
    M("Which of the following is a young fold mountain system in Asia?", ["Himalayas", "Aravalis", "Vindhyas", "Appalachians"], 0, "The Himalayas are young fold mountains formed by the Indo-Eurasian collision.", "Young fold = Himalayas.", ""),
    M("The 'Roof of the World' refers to:", ["Pamir Plateau", "Deccan Plateau", "Arabian Plateau", "Siberian Plain"], 0, "The Pamir Plateau is called the 'Roof of the World' due to its great height.", "Pamir knot region.", ""),
    M("The West Siberian Plain is significant because it is:", ["A major volcanic belt", "One of the largest lowlands", "A high plateau", "A coastal mountain range"], 1, "The West Siberian Plain is one of the largest lowlands on Earth.", "Lowland fact.", ""),
    M("Which physical division contains most of Asia's high mountains?", ["Northern Lowlands", "Central Highlands", "Southern Plains", "Coastal Lowlands"], 1, "The Central Highlands contain the major mountain systems and plateaus.", "Central Highlands = mountains.", ""),
    M("Which factor best explains extreme temperature ranges in Central Asia?", ["Proximity to sea", "High humidity", "Continentality", "Ocean currents"], 2, "Distance from the sea causes continentality, producing hot summers and cold winters.", "Continentality = extremes.", ""),
    M("Altitude affects climate by:", ["Increasing temperature", "Reducing temperature with height", "Eliminating rainfall", "Stopping winds"], 1, "Temperature decreases with height, so high plateaus and mountains are colder.", "Altitude effect.", ""),
    M("Which climate zone is typical of northern Siberia?", ["Equatorial", "Tundra", "Mediterranean", "Tropical monsoon"], 1, "Northern Siberia has tundra climate with permafrost and short summers.", "Tundra = far north.", ""),
    M("The taiga region is characterized by:", ["Grasslands only", "Coniferous forests", "Desert shrubs", "Mangroves"], 1, "Taiga is a belt of coniferous forests (pine, spruce, fir) south of tundra.", "Taiga = conifers.", ""),
    M("Which climate is associated with the Mediterranean coast of West Asia?", ["Mediterranean climate", "Equatorial climate", "Polar climate", "Tundra climate"], 0, "The Levant and Turkey have a Mediterranean climate with winter rain and dry summer.", "Mediterranean = west Asia coast.", ""),
    M("Which wind brings summer rainfall to South Asia?", ["North-east monsoon", "South-west monsoon", "Westerlies", "Polar easterlies"], 1, "The south-west monsoon blows from sea to land in summer, bringing heavy rains.", "Summer = SW monsoon.", ""),
    M("The north-east monsoon is generally:", ["Moist and rainy everywhere", "Dry, blowing from land to sea", "A cyclonic storm", "A western disturbance"], 1, "The north-east monsoon blows from land to sea and is mostly dry, except along Tamil Nadu coast.", "Winter = NE monsoon.", ""),
    M("Western disturbances mainly bring:", ["Summer rain to Indonesia", "Winter rain and snowfall to NW India", "Cyclones to Japan", "Dust storms to Arabia only"], 1, "Western disturbances bring winter rain and snow to north-west India and Pakistan.", "Winter rainfall source.", ""),
    M("Typhoons are tropical cyclones over the:", ["Atlantic Ocean", "Western Pacific Ocean", "Arctic Ocean", "Indian Ocean only"], 1, "Typhoons occur over the western Pacific, affecting East and Southeast Asia.", "Typhoon = Pacific.", ""),
    M("Orographic rainfall occurs when:", ["Air descends a mountain slope", "Moist air is forced to rise over mountains", "Cold air replaces warm air at sea", "Air moves from land to sea in winter"], 1, "Moist air rises over mountains, cools and condenses, producing orographic rainfall.", "Windward slope rainfall.", ""),
    M("The rain shadow effect is best seen:", ["On windward slopes", "On leeward slopes behind mountains", "Over oceans", "In polar regions only"], 1, "Leeward slopes receive little rainfall because air descends and warms, creating rain shadow.", "Leeward = dry.", ""),
    M("Which plain is formed by the Huang He and Yangtze rivers?", ["Indo-Gangetic Plain", "North China Plain", "West Siberian Plain", "Mesopotamian Plain"], 1, "The North China Plain is formed by the Huang He (Yellow) and Yangtze rivers.", "China plains.", ""),
    M("The Mesopotamian Plain is located between the rivers:", ["Indus and Ganga", "Tigris and Euphrates", "Ob and Yenisei", "Amur and Lena"], 1, "Mesopotamia lies between the Tigris and Euphrates rivers.", "Mesopotamia = two rivers.", ""),
    M("Which of the following is NOT a plateau of Asia?", ["Iranian Plateau", "Anatolian Plateau", "Tibetan Plateau", "Brazilian Plateau"], 3, "The Brazilian Plateau is in South America, not Asia.", "Eliminate non-Asian features.", ""),
    M("The Deccan Plateau is located in:", ["Central Asia", "South Asia", "West Asia", "East Asia"], 1, "The Deccan Plateau is in peninsular India, part of South Asia.", "Deccan = South Asia.", ""),
    M("Which river is known as the 'Sorrow of China'?", ["Yangtze", "Huang He", "Mekong", "Amur"], 1, "The Huang He (Yellow River) is called the 'Sorrow of China' due to its floods.", "Nickname fact.", ""),
    M("Which is the correct order from north to south in Asia?", ["Tundra → Taiga → Steppe → Desert → Tropical", "Desert → Taiga → Tundra → Tropical → Steppe", "Tropical → Desert → Taiga → Tundra → Steppe", "Taiga → Tundra → Desert → Steppe → Tropical"], 0, "From Arctic southwards: tundra, taiga, steppe/desert, then tropical zones.", "Latitudinal sequence.", ""),
    M("Which climatic factor best explains heavy rainfall on the windward side of the Western Ghats?", ["Ocean currents", "Orographic lift", "Latitude only", "Continentality"], 1, "Moist monsoon winds rise over the Western Ghats, causing orographic rainfall.", "Orographic = windward rain.", ""),
    M("Which vegetation type is common in Central Asia's semi-arid regions?", ["Equatorial rainforest", "Steppe grassland", "Mangroves", "Tundra"], 1, "Semi-arid interiors support steppe grasslands.", "Steppe = grassland.", ""),
    M("Mangroves are best found in:", ["High mountains", "Deltaic coastal regions", "Desert basins", "Tundra zones"], 1, "Mangroves grow in saline, tidal delta regions such as the Sundarbans.", "Mangrove = delta coast.", ""),
    M("Which of the following is a Pacific-draining river of Asia?", ["Ganga", "Indus", "Mekong", "Volga"], 2, "The Mekong drains into the South China Sea (Pacific).", "Mekong = Pacific basin.", ""),
    M("Which pair correctly matches mountain range with region?", ["Altai—Central Asia/Siberia boundary", "Zagros—Japan", "Arakan Yoma—Turkey", "Himalayas—Australia"], 0, "The Altai range separates Siberia from Central Asia.", "Match range to region.", ""),
    M("The Central Highlands influence climate by:", ["Allowing moist winds to pass freely", "Blocking winds and creating rain shadow zones", "Eliminating river systems", "Stopping monsoon formation"], 1, "High mountains block winds, create rain shadows and affect rainfall distribution.", "Barrier effect.", ""),
    M("Which sea is part of the Europe–Asia boundary?", ["Red Sea", "Caspian Sea", "Caribbean Sea", "South China Sea"], 1, "The Caspian Sea is part of the Europe–Asia boundary chain.", "Boundary sea.", ""),
    M("Which river is the longest in Asia?", ["Yangtze", "Ganga", "Mekong", "Indus"], 0, "The Yangtze (Chang Jiang) is Asia's longest river.", "Yangtze length fact.", ""),
    M("Which lake is below sea level and highly saline?", ["Dead Sea", "Caspian Sea", "Lake Baikal", "Lake Van"], 0, "The Dead Sea is below sea level and extremely saline.", "Dead Sea = lowest point.", ""),
    M("Which climate is typical of West Asia's deserts?", ["Tropical rainforest", "Arid desert climate", "Tundra climate", "Equatorial climate"], 1, "West Asia is dominated by arid desert climate due to continentality and subtropical highs.", "Desert = West Asia.", ""),
    M("Which statement about monsoon is correct?", ["It is a permanent wind system with no seasonal change", "It is a seasonal reversal of winds", "It only occurs in Europe", "It is caused by ocean currents alone"], 1, "Monsoon winds reverse direction seasonally due to differential heating of land and sea.", "Definition of monsoon.", ""),
    M("Which is a correct river–plain match?", ["Indus—North China Plain", "Huang He—Indo-Gangetic Plain", "Ganga—Indo-Gangetic Plain", "Ob—Mesopotamian Plain"], 2, "The Indo-Gangetic Plain is formed by the Ganga system (with Indus and Brahmaputra).", "Plain association.", ""),
    M("The Himalayas help South Asia by:", ["Allowing cold winds from Central Asia", "Blocking cold winds and enhancing monsoon rainfall", "Preventing rivers from flowing", "Creating deserts in all areas"], 1, "The Himalayas block cold continental winds and force moist monsoon winds to rise, causing rainfall.", "Barrier + rainfall role.", ""),
    M("Which river is known for its delta forming the Sundarbans?", ["Ganga-Brahmaputra", "Yangtze", "Mekong", "Ob"], 0, "The Ganga-Brahmaputra delta forms the Sundarbans mangrove region.", "Delta example.", ""),
    M("The climate of Japan is mainly:", ["Equatorial", "Temperate with maritime influence", "Arid desert", "Tundra"], 1, "Japan has a temperate climate moderated by the sea and affected by monsoon winds.", "Japan = temperate maritime.", ""),
    M("Which vegetation type is typical of Siberia?", ["Taiga coniferous forest", "Savanna", "Mediterranean scrub", "Mangroves"], 0, "Siberia is dominated by taiga—coniferous forests.", "Taiga belt.", ""),
    M("The West Siberian rivers flow mainly:", ["Westward into the Atlantic", "Northward into the Arctic", "Southward into the Indian Ocean", "Eastward into the Pacific"], 1, "Ob, Yenisei and Lena flow north to the Arctic Ocean.", "Direction to Arctic.", ""),
    M("Which region experiences Mediterranean climate in Asia?", ["Arabian Desert interior", "Coastal Turkey and Levant", "Central Siberia", "Indo-Gangetic Plain"], 1, "The Mediterranean climate occurs along the Mediterranean coast of Turkey, Syria and Lebanon.", "West Asia coast.", ""),
    M("Which statement about the Tibetan Plateau is correct?", ["It is a lowland plain", "It is the highest plateau and source of major rivers", "It lies in West Asia", "It has an equatorial climate"], 1, "The Tibetan Plateau is the highest plateau and source of major Asian rivers.", "Tibet = river source.", ""),
    M("Which wind system affects East Asia's summer rainfall besides monsoon?", ["Polar easterlies", "Pacific trade winds", "Typhoon tracks and monsoon winds", "Westerlies only"], 2, "East Asia receives summer rain from monsoon winds and typhoon systems from the Pacific.", "Typhoons + monsoon.", ""),
    M("Which of the following is a Central Asian desert?", ["Gobi", "Sahara", "Kalahari", "Patagonian"], 0, "The Gobi Desert lies in Mongolia and northern China.", "Gobi = Asia.", ""),
    M("The cold current affecting East Asia is:", ["Kuroshio", "Oyashio", "Gulf Stream", "Brazil Current"], 1, "The Oyashio is a cold current off Japan, while Kuroshio is warm.", "Ocean currents fact.", ""),
    M("Which of the following is a correct sequence from west to east within Asia?", ["Mediterranean coast → Ural Mountains → Pacific Ocean", "Pacific Ocean → Ural Mountains → Mediterranean coast", "Ural Mountains → Pacific Ocean → Mediterranean coast", "Arctic Ocean → Ural Mountains → Indian Ocean"], 0, "From west to east: Mediterranean region and Ural boundary toward the Pacific coast.", "Direction sequencing.", ""),
    M("Which area has equatorial climate in Asia?", ["Siberia", "Indonesia and Malaysia", "Iranian Plateau", "Mongolian steppe"], 1, "Equatorial climate occurs near the equator in Indonesia and Malaysia.", "Equatorial belt in SE Asia.", ""),
    M("The Indo-Gangetic Plain is MOST densely populated because:", ["It is a cold desert", "It has fertile alluvium and abundant water", "It is mountainous", "It receives no rainfall"], 1, "Fertile alluvium, gentle relief and ample water support dense agriculture and settlements.", "Relief + soil = population.", ""),
    M("Which of the following is a correct vegetation–climate pair?", ["Tundra—equatorial climate", "Taiga—subarctic climate", "Mangroves—desert climate", "Steppe—polar climate"], 1, "Taiga corresponds to subarctic climate with long cold winters.", "Match vegetation to climate.", ""),
]

CH6_TFS = [
    T("Asia is separated from Europe by the Ural Mountains, Ural River, Caspian Sea, Caucasus and Black Sea.", "True", "These physical features form the conventional Europe–Asia boundary."),
    T("The Tibetan Plateau is the lowest plateau in the world.", "False", "It is the highest and largest plateau on Earth."),
    T("The Ob, Yenisei and Lena drain into the Arctic Ocean.", "True", "These Siberian rivers flow northward to the Arctic."),
    T("The north-east monsoon brings heavy rain to most of India in summer.", "False", "The south-west monsoon brings summer rain; the north-east monsoon is mostly dry."),
    T("The Caspian Sea is the world's largest inland lake.", "True", "It is the largest by area."),
    T("Steppe grasslands are found in the equatorial regions of Asia.", "False", "Steppes occur in semi-arid interiors of Central Asia."),
    T("Typhoons are tropical cyclones of the western Pacific.", "True", "They affect East and Southeast Asia."),
    T("The Himalayas block cold winds from Central Asia.", "True", "They act as a climatic barrier."),
    T("Lake Baikal is the deepest freshwater lake in the world.", "True", "It holds the record for depth among freshwater lakes."),
    T("Continentality reduces the seasonal temperature range of Central Asia.", "False", "Continentality increases seasonal temperature extremes."),
]

CH6_FILLS = [
    F("The narrow water body separating Asia from North America is the _____.", "Bering Strait", "Bering Strait separates Siberia from Alaska."),
    F("The world's largest inland lake is the _____.", "Caspian Sea", "Caspian Sea is largest by area."),
    F("The highest and largest plateau of the world is the _____.", "Tibetan Plateau", "Tibet is the highest and largest plateau."),
    F("The warm current off Japan is the _____.", "Kuroshio", "Kuroshio is the warm current; Oyashio is cold."),
    F("The south-west monsoon brings _____ rainfall to South Asia.", "summer", "SW monsoon is the summer rainy season."),
]

CH6_MATCHES = [
    Ma("Match mountain range with location:", [{"left": "Himalayas", "right": "South Asia"}, {"left": "Zagros", "right": "Iran"}, {"left": "Arakan Yoma", "right": "Myanmar"}, {"left": "Altai", "right": "Central Asia/Siberia"}], "Himalayas-South Asia; Zagros-Iran; Arakan-Myanmar; Altai-Central Asia/Siberia"),
    Ma("Match river with ocean basin:", [{"left": "Lena", "right": "Arctic Ocean"}, {"left": "Yangtze", "right": "Pacific Ocean"}, {"left": "Ganga", "right": "Indian Ocean"}, {"left": "Tigris", "right": "Persian Gulf"}], "Lena-Arctic; Yangtze-Pacific; Ganga-Indian; Tigris-Persian Gulf"),
    Ma("Match lake with feature:", [{"left": "Caspian Sea", "right": "Largest inland lake"}, {"left": "Lake Baikal", "right": "Deepest freshwater lake"}, {"left": "Aral Sea", "right": "Shrinking lake"}, {"left": "Dead Sea", "right": "Below sea level"}], "Caspian-largest; Baikal-deepest; Aral-shrinking; Dead Sea-below sea level"),
    Ma("Match physical division with example:", [{"left": "Northern Lowlands", "right": "West Siberian Plain"}, {"left": "Central Highlands", "right": "Himalayas"}, {"left": "Southern Plateaus", "right": "Deccan Plateau"}, {"left": "Southern Plains", "right": "Indo-Gangetic Plain"}], "North-West Siberian; Central-Himalayas; South plateau-Deccan; South plains-Indo-Gangetic"),
    Ma("Match climate factor with effect:", [{"left": "Latitude", "right": "Temperature variation north to south"}, {"left": "Altitude", "right": "Lower temperature with height"}, {"left": "Continentality", "right": "Extreme seasonal range"}, {"left": "Relief barrier", "right": "Rain shadow areas"}], "Latitude-temp; Altitude-cooler; Continentality-extremes; Relief-rain shadow"),
    Ma("Match climate zone with region:", [{"left": "Tundra", "right": "Northern Siberia"}, {"left": "Taiga", "right": "Central Siberia"}, {"left": "Mediterranean", "right": "Turkey/Levant"}, {"left": "Equatorial", "right": "Indonesia"}], "Tundra-north Siberia; Taiga-central Siberia; Med-Turkey; Equatorial-Indonesia"),
    Ma("Match vegetation type with climate:", [{"left": "Coniferous forest", "right": "Subarctic"}, {"left": "Steppe grassland", "right": "Semi-arid"}, {"left": "Mangroves", "right": "Deltaic tropical coast"}, {"left": "Tundra mosses", "right": "Polar"}], "Coniferous-subarctic; Steppe-semi-arid; Mangroves-delta; Tundra-polar"),
    Ma("Match plain with river system:", [{"left": "North China Plain", "right": "Huang He-Yangtze"}, {"left": "Indo-Gangetic Plain", "right": "Indus-Ganga-Brahmaputra"}, {"left": "Mesopotamian Plain", "right": "Tigris-Euphrates"}, {"left": "West Siberian Plain", "right": "Ob-Yenisei"}], "North China-Huang He/Yangtze; Indo-Gangetic-Indus/Ganga/Brahmaputra; Mesopotamian-Tigris/Euphrates; West Siberian-Ob/Yenisei"),
    Ma("Match monsoon term with description:", [{"left": "South-west monsoon", "right": "Summer sea-to-land winds"}, {"left": "North-east monsoon", "right": "Winter land-to-sea winds"}, {"left": "Western disturbances", "right": "Winter rain in NW India"}, {"left": "Typhoon", "right": "Pacific cyclone"}], "SW monsoon-summer; NE monsoon-winter; Western disturbances-winter rain; Typhoon-Pacific cyclone"),
    Ma("Match desert with location:", [{"left": "Arabian Desert", "right": "West Asia"}, {"left": "Gobi", "right": "Mongolia/China"}, {"left": "Taklamakan", "right": "Xinjiang, China"}, {"left": "Thar", "right": "India-Pakistan"}], "Arabian-West Asia; Gobi-Mongolia/China; Taklamakan-Xinjiang; Thar-India/Pakistan"),
]

CH6_SHORTS = [
    S("State the boundaries of Asia and name the feature separating it from North America.", "Asia is bounded by the Arctic Ocean to the north, the Indian Ocean to the south, the Pacific Ocean to the east and the Mediterranean–Ural chain to the west (Ural Mountains, Ural River, Caspian Sea, Caucasus and Black Sea). The Bering Strait separates Asia from North America."),
    S("Describe Asia's three major physical divisions with one example each.", "Asia has Northern Lowlands (e.g., West Siberian Plain), Central Highlands (e.g., Himalayas or Tibetan Plateau) and Southern Plateaus/Plains (e.g., Deccan Plateau and Indo-Gangetic Plain). These divisions influence climate, rivers and settlement."),
    S("Explain the role of the Himalayas in South Asia's climate.", "The Himalayas block cold winds from Central Asia, keeping northern India warmer in winter. They also force moist south-west monsoon winds to rise, producing heavy orographic rainfall on the windward slopes and sustaining major rivers."),
    S("Differentiate between south-west and north-east monsoons.", "The south-west monsoon blows from sea to land in summer, bringing heavy rainfall to South and Southeast Asia. The north-east monsoon blows from land to sea in winter and is generally dry, except along the Tamil Nadu coast where it picks up moisture from the Bay of Bengal."),
    S("Name two important rivers and two important lakes of Asia with one feature each.", "Rivers: Yangtze (Asia's longest, drains into Pacific) and Ganga (forms fertile Indo-Gangetic Plain). Lakes: Caspian Sea (largest inland lake) and Lake Baikal (deepest freshwater lake)."),
]

CH6_MINDMAP = """mindmap
  root((Asia — Physical Features & Climate))
    Location
      Arctic to Indian Ocean
      Ural-Caspian-Caucasus boundary
      Bering Strait
    Divisions
      Northern Lowlands
      Central Highlands
      Southern Plateaus & Plains
    Mountains
      Himalayas
      Karakoram
      Hindu Kush
      Tien Shan
      Zagros
    Plateaus & Plains
      Tibetan Plateau
      Iranian Plateau
      Deccan Plateau
      Indo-Gangetic Plain
      North China Plain
    Rivers & Lakes
      Ob-Yenisei-Lena
      Yangtze-Huang He
      Indus-Ganga-Brahmaputra
      Caspian
      Baikal
    Climate
      Latitude
      Altitude
      Continentality
      Monsoon
    Vegetation
      Tundra
      Taiga
      Steppe
      Monsoon forests
      Mangroves"""

CH6_CHEATSHEET = [
    "Asia is the largest continent, about one-third of Earth's land area.",
    "Boundaries: Arctic north, Indian south, Pacific east, Mediterranean/Ural west.",
    "Europe–Asia boundary: Ural Mountains/River, Caspian, Caucasus, Black Sea.",
    "Bering Strait separates Asia from North America.",
    "Extremes: Cape Chelyuskin (N), Cape Piai (S), Cape Baba (W), Cape Dezhnev (E).",
    "Three divisions: Northern Lowlands, Central Highlands, Southern Plateaus/Plains.",
    "Pamir knot is the mountain junction in Central Asia.",
    "Himalayas are young fold mountains and climatic barrier.",
    "Tibetan Plateau = highest and largest plateau.",
    "Indo-Gangetic Plain = fertile alluvial plain with dense population.",
    "Major Arctic rivers: Ob, Yenisei, Lena.",
    "Major Pacific rivers: Yangtze, Huang He, Mekong, Amur.",
    "Major Indian Ocean rivers: Indus, Ganga, Brahmaputra.",
    "Caspian Sea = largest inland lake; Baikal = deepest freshwater lake.",
    "Aral Sea has shrunk due to diversion of feeder rivers.",
    "Climate factors: latitude, altitude, continentality, winds, ocean currents.",
    "Continentality causes hot summers and very cold winters in interiors.",
    "Monsoon = seasonal reversal of winds; SW monsoon brings summer rain.",
    "NE monsoon is dry; Tamil Nadu gets winter rain from it.",
    "Western disturbances bring winter rain/snow to NW India.",
    "Typhoons are Pacific tropical cyclones.",
    "Vegetation belts: tundra, taiga, temperate, steppe, desert, monsoon, equatorial.",
    "Mangroves occur in deltaic coasts like the Sundarbans.",
]

CH6_WORDCARDS = [WC(t, d) for t, d in [
    ("Bering Strait", "Narrow water body separating Asia from North America"),
    ("Ural Mountains", "Traditional boundary between Europe and Asia"),
    ("Caucasus", "Mountain range forming part of Europe–Asia boundary"),
    ("Pamir Knot", "Mountain junction where several ranges meet"),
    ("Himalayas", "Young fold mountains and climatic barrier of South Asia"),
    ("Karakoram", "High mountain range containing K2"),
    ("Hindu Kush", "Mountain range in Afghanistan-Pakistan region"),
    ("Tien Shan", "Central Asian mountain range"),
    ("Tibetan Plateau", "Highest and largest plateau of the world"),
    ("Indo-Gangetic Plain", "Fertile alluvial plain formed by Indus-Ganga-Brahmaputra"),
    ("North China Plain", "Plain formed by Huang He and Yangtze systems"),
    ("West Siberian Plain", "One of the largest lowlands in the world"),
    ("Ob River", "Major river draining into Arctic Ocean"),
    ("Yangtze River", "Longest river in Asia, drains into the Pacific"),
    ("Huang He", "Yellow River, called the Sorrow of China"),
    ("Mekong", "Major Southeast Asian river flowing to South China Sea"),
    ("Tigris-Euphrates", "River system of Mesopotamia draining into Persian Gulf"),
    ("Caspian Sea", "Largest inland lake in the world"),
    ("Lake Baikal", "Deepest freshwater lake in the world"),
    ("Aral Sea", "Shrinking inland lake in Central Asia"),
    ("Continentality", "Climatic effect of distance from sea causing extremes"),
    ("Orographic rainfall", "Rainfall caused by air rising over mountains"),
    ("Rain shadow", "Dry area on leeward side of mountains"),
    ("South-west monsoon", "Summer wind system bringing rain to South Asia"),
    ("North-east monsoon", "Winter wind system, generally dry"),
    ("Western disturbances", "Winter storms bringing rain to NW India"),
    ("Typhoon", "Tropical cyclone over the western Pacific"),
    ("Tundra", "Cold climate vegetation of mosses and lichens"),
    ("Taiga", "Coniferous forest belt of subarctic Asia"),
    ("Steppe", "Semi-arid grassland of Central Asia"),
]]

CH6 = {
    "title": "Asia — Physical Features & Climate",
    "topics": CH6_TOPICS,
    "high_yield": CH6_HIGH_YIELD,
    "mcqs": CH6_MCQS,
    "tfs": CH6_TFS,
    "fills": CH6_FILLS,
    "matches": CH6_MATCHES,
    "shorts": CH6_SHORTS,
    "mindmap": CH6_MINDMAP,
    "cheatsheet": CH6_CHEATSHEET,
    "word_cards": CH6_WORDCARDS,
}

assert len(CH6_MCQS) == 70
assert len(CH6_TFS) == 10
assert len(CH6_FILLS) == 5
assert len(CH6_MATCHES) == 10
assert len(CH6_SHORTS) == 5
assert len(CH6_WORDCARDS) == 30
