"""Chapter 2–4 content definitions for make_chapters.py."""
from geography8.chapter_data._gen_chapters import _mcq, _upsc_combo


def combo(stmts, correct, ans, exam="", teacher=""):
    d = _upsc_combo("", stmts, correct, ans)
    d["exam"] = exam
    d["teacher"] = teacher
    return d


# ══════════════════════════════════════════════════════════════════════════════
# CHAPTER 2: Population
# ══════════════════════════════════════════════════════════════════════════════

CH2_TOPICS = [
    {
        "title": "Understanding Population",
        "summary": "Population is the total number of people living in a defined area at a given time; it changes through births, deaths and migration.",
        "bullets": ["Population is dynamic, not fixed.", "Census counts population every 10 years in India.", "Demography studies population size, structure and change.", "World population crossed 8 billion in the 2020s."],
        "body": "### Population defined\n**Population** = all persons living in a country, state, city or region at a specific time.\n\n### Why it matters\n- Planning schools, hospitals, housing and jobs.\n- Understanding pressure on land, water and forests.\n- Shaping government welfare and economic policy.\n\nIndia is the **most populous country** in the world, with over 1.4 billion people (2023 census estimates).",
        "explanation": "Population is like a living balance sheet — it grows when births and immigrants exceed deaths and emigrants.",
        "teacherTip": "Link population to resources: people need food, water, jobs and shelter.",
        "examTip": "Define population precisely and mention the three components of change: births, deaths, migration.",
    },
    {
        "title": "Population Distribution",
        "summary": "People are unevenly spread — dense in fertile plains and industrial zones, sparse in deserts, mountains and polar regions.",
        "bullets": ["90% of world population lives north of the equator.", "Coastal lowlands attract more people than high mountains.", "Fertile river valleys are densely populated.", "Extreme climates limit settlement."],
        "body": "### Factors attracting population\n| Physical | Human |\n|----------|-------|\n| Flat land, fertile soil | Jobs, industries |\n| Moderate climate, water | Transport, trade |\n| Mineral resources | Education, healthcare |\n\n### Sparse regions\n- **Sahara**, **Gobi**, **Antarctica** — harsh climate.\n- **Himalayas**, **Andes** — steep, cold terrain.\n- **Amazon rainforest** — dense forest, difficult access.",
        "explanation": "People cluster where living and earning is easier — plains beat peaks, temperate beats extreme.",
        "teacherTip": "Contrast Indo-Gangetic plain (dense) with Ladakh (sparse) on a map.",
        "examTip": "Give physical AND human reasons for distribution — examiners expect both.",
    },
    {
        "title": "Population Density",
        "summary": "Density = number of persons per unit area (persons/km²); it shows how crowded a region is.",
        "bullets": ["Formula: Density = Total Population ÷ Area (km²).", "Monaco and Singapore are among the densest.", "Australia and Canada have low density.", "Bihar and West Bengal are dense Indian states."],
        "body": "### Calculating density\n$$\\text{Density} = \\frac{\\text{Population}}{\\text{Area in km}^2}$$\n\nExample: 50,00,000 people in 10,000 km² → density = **500 persons/km²**.\n\n### High vs low density\n- **High:** limited land, fertile soil, urbanisation (e.g. Netherlands, Kolkata).\n- **Low:** large area, harsh climate, few resources (e.g. Mongolia, Rajasthan desert parts).",
        "explanation": "Density tells crowding — 500/km² means on average 500 people share each square kilometre.",
        "teacherTip": "Always show formula + substitution in numericals.",
        "examTip": "State units: persons per square kilometre (persons/km²).",
    },
    {
        "title": "Birth Rate and Death Rate",
        "summary": "Birth rate = live births per 1000 per year; death rate = deaths per 1000 per year — together they shape population growth.",
        "bullets": ["Birth Rate (CBR) = (Live births ÷ Total population) × 1000.", "Death Rate (CDR) = (Deaths ÷ Total population) × 1000.", "High birth rate common in developing countries.", "Low death rate follows better healthcare."],
        "body": "### Vital rates\n| Rate | Meaning | India trend |\n|------|---------|-------------|\n| Birth rate | Babies born per 1000/year | Declining |\n| Death rate | Deaths per 1000/year | Declined sharply post-1950 |\n\n**Infant Mortality Rate (IMR):** deaths of infants under 1 per 1000 live births — key health indicator.\n\nBetter hospitals, vaccines and sanitation **lower death rate**; education and family planning **lower birth rate**.",
        "explanation": "When fewer people die but many are born, population shoots up — India's story after Independence.",
        "teacherTip": "Use per-1000 basis — students confuse with percentages.",
        "examTip": "Distinguish birth rate from growth rate; they are related but not identical.",
    },
    {
        "title": "Natural Growth Rate",
        "summary": "Natural growth = birth rate minus death rate (per 1000); positive means population grows without counting migration.",
        "bullets": ["Natural Growth Rate = Birth Rate − Death Rate.", "Positive growth → population increasing naturally.", "Zero growth → births equal deaths.", "Negative growth → deaths exceed births (e.g. Japan, Italy)."],
        "body": "### Natural increase\nIf CBR = 20 and CDR = 8 per 1000:\n**Natural growth = 20 − 8 = 12 per 1000** (or 1.2%).\n\n### Stages\n1. **High growth:** high birth, falling death (India 1950s–80s).\n2. **Moderate growth:** falling birth, low death (India today).\n3. **Low/negative growth:** very low birth, low death (many European nations).\n\nMigration adds or subtracts from **actual** population change.",
        "explanation": "Natural growth ignores people moving in or out — it's the 'home-grown' change only.",
        "teacherTip": "Plot CBR and CDR on same graph — gap shows natural increase.",
        "examTip": "Show subtraction clearly: Growth = CBR − CDR with units per 1000.",
    },
    {
        "title": "Age-Sex Pyramid",
        "summary": "A population pyramid shows males and females in age groups — its shape reveals growth, stability or decline.",
        "bullets": ["Left side = males, right = females (convention).", "Broad base = high birth rate, young population.", "Narrow base = low birth rate, ageing society.", "India has a broad-based youthful pyramid."],
        "body": "### Pyramid shapes\n| Shape | Meaning | Example region |\n|-------|---------|----------------|\n| Expanding (broad base) | High birth, young pop | Niger, India (historically) |\n| Stable | Balanced age groups | Slow growth countries |\n| Contracting (narrow base) | Low birth, ageing | Japan, Germany |\n\n### Uses\n- Plan schools (wide base) vs pensions (wide top).\n- Identify **dependency ratio** — young + old dependants vs working age (15–64).",
        "explanation": "The pyramid is a snapshot of a country's age and gender structure — like a demographic fingerprint.",
        "teacherTip": "Sketch three pyramid types side by side for revision.",
        "examTip": "Describe shape + what it implies — don't just label 'expanding'.",
    },
    {
        "title": "Overpopulation and Underpopulation",
        "summary": "Overpopulation means too many people for available resources; underpopulation means too few to exploit resources fully.",
        "bullets": ["Overpopulation → unemployment, pollution, strain on food/water.", "Optimum population balances people and resources.", "Underpopulation → labour shortage, idle resources.", "Carrying capacity is the maximum sustainable population."],
        "body": "### Overpopulation\nResources (food, water, land, jobs) cannot support the population adequately.\n**Signs:** poverty, slums, traffic, deforestation, water scarcity.\n\n### Underpopulation\nLarge resources but **too few workers/consumers** to develop efficiently.\nExample: parts of **Canada** or **Australia** with vast land, small population.\n\n### Optimum population\nThe size that gives **maximum per capita welfare** with existing technology.",
        "explanation": "It's not just numbers — overpopulation is about people exceeding what the environment and economy can support.",
        "teacherTip": "Contrast Singapore (dense but developed) vs overpopulated poor regions — resources + management matter.",
        "examTip": "Define both terms with resource link, not only headcount.",
    },
    {
        "title": "Population Control and Policy",
        "summary": "Family planning, education, healthcare and government policies help stabilise population growth.",
        "bullets": ["India's family planning programme promotes small families.", "Education, especially for girls, lowers birth rates.", "Contraception enables planned parenthood.", "SDG targets include sustainable population growth."],
        "body": "### Measures to control growth\n1. **Family planning** — spacing and limiting children.\n2. **Education** — awareness of health and economics of small families.\n3. **Women's empowerment** — education, employment, rights.\n4. **Incentives/disincentives** — government schemes (varied over time).\n\n### Success factors\n- Kerala: high literacy → lower fertility.\n- China once used strict one-child policy; India uses voluntary family welfare.\n\n**Demographic Dividend:** large working-age population can boost economy if skilled jobs exist.",
        "explanation": "Population policy works best when health, education and choice go together — not coercion alone.",
        "teacherTip": "Mention demographic dividend as a positive opportunity, not only 'control'.",
        "examTip": "List measures with brief explanation — 4 points = 4 marks typical ICSE pattern.",
    },
]

CH2_HIGH_YIELD = [
    "Population = total people in an area at a given time.",
    "Population changes through births, deaths and migration.",
    "Census in India is conducted every 10 years.",
    "Demography studies population characteristics and change.",
    "Population distribution is uneven globally.",
    "Fertile plains and river valleys attract dense settlement.",
    "Deserts, mountains and polar regions are sparsely populated.",
    "Density = Population ÷ Area (persons per km²).",
    "High density ≠ overpopulation if resources are sufficient.",
    "Birth rate = live births per 1000 population per year.",
    "Death rate = deaths per 1000 population per year.",
    "Natural growth rate = Birth rate − Death rate.",
    "Positive natural growth means more births than deaths.",
    "Infant Mortality Rate measures deaths under age 1 per 1000 births.",
    "Better healthcare lowers death rate.",
    "Education and family planning lower birth rate.",
    "Age-sex pyramid shows population by age and gender.",
    "Broad base pyramid indicates high birth rate and young population.",
    "Narrow base pyramid indicates low birth rate and ageing population.",
    "Expanding pyramid shape → rapid population growth.",
    "Contracting pyramid → declining population.",
    "Dependency ratio compares dependants to working-age group.",
    "Overpopulation: people exceed resource support capacity.",
    "Underpopulation: too few people to use resources fully.",
    "Optimum population gives maximum per capita welfare.",
    "Carrying capacity is maximum sustainable population.",
    "India is the world's most populous country.",
    "Family planning promotes responsible parenthood.",
    "Demographic dividend: economic benefit from large working-age population.",
    "Migration affects actual population change beyond natural growth.",
    "Kerala's literacy helped reduce fertility rates.",
    "IMR is a key indicator of healthcare quality.",
]

def _ch2_mcqs():
    qs = [
        _mcq("Population of a country refers to:", ["Total land area", "Total number of inhabitants at a given time", "Number of cities only", "Annual birth count"], 1, "Population is the total number of people living in a defined area at a specific time."),
        _mcq("Population density is calculated as:", ["Area ÷ Population", "Population ÷ Area", "Births ÷ Deaths", "Immigrants ÷ Emigrants"], 1, "Density = Total population divided by area, usually expressed as persons per km²."),
        _mcq("Natural growth rate equals:", ["Birth rate + Death rate", "Birth rate − Death rate", "Death rate − Birth rate", "Immigration − Emigration"], 1, "Natural growth = CBR − CDR per 1000 population, excluding migration."),
        combo(["India conducts census every 10 years.", "Demography is the study of population.", "Death rate is measured per 100 people."], 2, "Statements 1 and 2 are correct. Vital rates use per **1000**, not per 100."),
        _mcq("A broad-based age pyramid indicates:", ["Ageing population", "High birth rate and young population", "Negative growth", "Equal males and females only"], 1, "Wide base means many children — characteristic of high birth rates."),
        _mcq("Overpopulation occurs when:", ["Area is very large", "People exceed available resources", "Death rate is zero", "No migration happens"], 1, "Overpopulation is resource-based: too many people for food, water, jobs and land."),
        _mcq("Which region is typically densely populated?", ["Sahara Desert", "Indo-Gangetic Plain", "Antarctica", "Himalayan peaks"], 1, "Fertile plains with water and agriculture support dense populations."),
        _mcq("Infant Mortality Rate measures:", ["Deaths of infants under 1 per 1000 live births", "Births per 1000 women", "Migration of infants", "School enrolment of infants"], 0, "IMR = infant deaths (under 1 year) per 1000 live births in a year."),
        _mcq("Underpopulation means:", ["Too many people for resources", "Too few people to fully utilise resources", "Zero population", "Only urban population"], 1, "Underpopulation: insufficient people to develop available resources efficiently."),
        _mcq("Demographic dividend refers to:", ["High death rate advantage", "Economic potential from large working-age population", "Desert expansion", "Rising infant mortality"], 1, "Many people aged 15–64 can boost productivity if educated and employed."),
        combo(["Education of girls helps reduce birth rate.", "Better hospitals increase death rate.", "Migration does not affect population."], 0, "Only statement 1 is correct. Healthcare lowers death rate; migration affects population change."),
        _mcq("Contracting population pyramid has:", ["Very broad base", "Narrow base and wider top", "Only children", "No elderly"], 1, "Low fertility narrows the base; ageing widens older age groups."),
        _mcq("Birth rate is expressed per:", ["100 population", "1000 population per year", "10,000 area", "1 million migrants"], 1, "Crude birth rate = live births per 1000 population per year."),
        _mcq("Optimum population is when:", ["Population is maximum possible", "Per capita welfare is highest", "Birth rate is zero", "Area is smallest"], 1, "Optimum population balances people and resources for best living standards."),
        _mcq("Sparse population is found in:", ["River deltas", "Mountainous and desert regions", "Coastal megacities", "Industrial corridors"], 1, "Harsh terrain and climate limit settlement in mountains and deserts."),
        _mcq("Carrying capacity is:", ["Maximum population environment can sustain", "Number of hospitals", "Area of capital city", "Birth rate only"], 0, "Carrying capacity = largest population an environment can support long-term."),
        _mcq("If CBR=22 and CDR=7, natural growth is:", ["29 per 1000", "15 per 1000", "7 per 1000", "22 per 1000"], 1, "22 − 7 = 15 per 1000 natural increase."),
        _mcq("Family planning aims to:", ["Increase birth rate always", "Enable responsible parenthood and spacing of children", "Stop all births", "Encourage migration"], 1, "Family planning helps couples choose number and spacing of children."),
        _mcq("Which country trend shows negative natural growth?", ["High birth, high death", "Very low birth, low death, deaths > births", "High migration only", "High infant mortality only"], 1, "When births fall below deaths (e.g. ageing Japan/Italy), natural growth turns negative."),
        _mcq("Dependency ratio relates:", ["Dependants to working-age population", "Area to rainfall", "Imports to exports", "Births to hospitals"], 0, "Dependants (0–14 and 65+) compared to working-age (15–64) shows economic burden."),
        combo(["Kerala reduced fertility through education.", "High density always means overpopulation.", "Census provides population data."], 3, "Statements 1 and 3 correct; high density alone does not prove overpopulation — resources matter. Answer: 1 and 3 → use '1 and 3 only' if 3 options else Both 1 and 3."),
    ]
    # Fix combo last - use correct index for "1 and 3 only" with 3 statements
    for q in qs:
        if "Kerala reduced fertility" in q["q"]:
            q["opts"] = ["1 and 2 only", "2 and 3 only", "1 and 3 only", "All of the above"]
            q["correct"] = 2
            q["ans"] = "Statements 1 and 3 are correct. High density alone does not mean overpopulation if resources can support the people."
    extra = [
        _mcq("Crude Death Rate measures deaths per:", ["100", "1000 population per year", "10000 births", "1 square km"], 1, "CDR is deaths per 1000 population per year."),
        _mcq("Population distribution is influenced by:", ["Climate and relief only", "Both physical and human factors", "Only government policy", "Only migration"], 1, "Physical (land, water, climate) and human (jobs, transport) factors both matter."),
        _mcq("Expanding pyramid indicates:", ["Declining population", "Rapid population growth", "No children", "Equal death and birth"], 1, "Large young cohorts at base signal future growth."),
        _mcq("IMR decline generally indicates:", ["Worse healthcare", "Improved maternal and child healthcare", "Higher birth rate only", "More migration"], 1, "Lower infant deaths reflect better nutrition, vaccines and medical care."),
        _mcq("World population is concentrated:", ["Mainly in Southern Hemisphere deserts", "Mainly north of equator in temperate/fertile zones", "Only on islands", "In polar regions"], 1, "Most people live north of equator in Asia, Europe and North America."),
        _mcq("Population of 2 million in 5000 km² gives density:", ["250/km²", "400/km²", "500/km²", "1000/km²"], 1, "2,000,000 ÷ 5000 = 400 persons/km²."),
        _mcq("Age-sex pyramid left side usually shows:", ["Females", "Males", "Children only", "Elderly only"], 1, "Convention: males on left, females on right."),
        _mcq("Voluntary family welfare in India emphasises:", ["Coercion only", "Choice, spacing and small healthy families", "No healthcare", "Only urban population"], 1, "India's programme promotes informed choice and reproductive health."),
        _mcq("Negative growth country may face:", ["Labour shortage and ageing", "Too many schools for children", "Extremely broad pyramid base", "Very high IMR only"], 0, "Low births and ageing create worker shortages and pension pressure."),
        _mcq("Physical factor for dense population:", ["Steep mountains", "Fertile alluvial soil", "Extreme aridity", "Permafrost"], 1, "Fertile soil supports agriculture and dense rural/urban settlement."),
        _mcq("Human factor for dense population:", ["Lack of minerals", "Industrialisation and employment", "No transport", "Isolation"], 1, "Jobs in industry and services attract migrants and dense urban growth."),
        _mcq("Zero population growth means:", ["No people", "Births plus immigration equal deaths plus emigration", "No census", "Only natural increase"], 1, "ZPG: total inflows equal total outflows — population stable."),
        _mcq("Demography includes study of:", ["Only birth rate", "Size, distribution, structure and change", "Only migration", "Only urbanisation"], 1, "Demography covers all population characteristics and dynamics."),
        _mcq("Bihar and West Bengal in India have:", ["Very low density", "Relatively high population density", "Zero urban population", "No agriculture"], 1, "Fertile plains and long settlement history make these states densely populated."),
        _mcq("Singapore is dense but developed because:", ["No people live there", "Efficient economy manages high density", "It is a desert", "Birth rate is zero"], 1, "High density with strong economy ≠ same as resource-strained overpopulation."),
        _mcq("Literacy especially among women tends to:", ["Raise birth rate sharply", "Lower birth rate through awareness and opportunity", "Have no effect", "Stop all migration"], 1, "Educated women often prefer smaller, healthier families and later marriage."),
        _mcq("Population policy may include:", ["Family planning and healthcare", "Only building roads", "Ignoring education", "Banning census"], 0, "Health, education and family welfare are core policy tools."),
        _mcq("Actual population change includes:", ["Natural increase plus net migration", "Only births", "Only area", "Only density"], 0, "Total change = (births − deaths) + (immigrants − emigrants)."),
        _mcq("Stable pyramid shape suggests:", ["Very high fertility", "Balanced age structure with slow growth", "Sudden war only", "No elderly"], 1, "Similar cohort sizes across ages indicate low growth stability."),
        _mcq("Overpopulation consequences include:", ["Unemployment and environmental degradation", "Unlimited resources", "Empty cities", "Zero pollution"], 0, "Resource strain leads to poverty, pollution and unemployment."),
        _mcq("Census data helps government to:", ["Plan schools, hospitals and welfare", "Ignore population", "Measure only rainfall", "Set contour intervals"], 0, "Accurate counts guide infrastructure and policy planning."),
        _mcq("Crude rates are called 'crude' because:", ["They use total population without age breakdown", "They are inaccurate", "They measure only cities", "They exclude births"], 0, "CBR/CDR use whole population — not age-specific rates."),
        _mcq("Age group 15–64 is considered:", ["Working-age population", "Only infants", "Only retirees", "Non-productive only"], 0, "Working-age cohort supports dependants and drives economy."),
        _mcq("Rural-urban migration affects:", ["Only death rate", "Distribution and urban density", "Earth's rotation", "Contour patterns"], 1, "Migration shifts people from villages to cities, densifying urban areas."),
        _mcq("Death rate fell in India after 1950 mainly due to:", ["Wars", "Better healthcare and disease control", "Loss of hospitals", "Higher pollution"], 1, "Antibiotics, vaccines and public health cut deaths sharply."),
        _mcq("High birth rate in developing countries linked to:", ["Children as economic support and low contraception use", "Too many universities", "Low IMR only", "Negative migration"], 0, "Social and economic factors traditionally favoured larger families."),
        _mcq("Population structure refers to:", ["Age and sex composition", "Only landforms", "Only climate", "Map scale"], 0, "Structure = how population is divided by age groups and gender."),
        _mcq("Antarctica has negligible population because:", ["Extreme cold and inhospitable environment", "Too fertile", "Overpopulation laws", "High birth rate"], 0, "Harsh polar climate prevents permanent settlement."),
        _mcq("Net migration is:", ["Immigrants minus emigrants", "Births minus deaths", "Area minus population", "Deaths minus births"], 0, "Net migration = in-migrants − out-migrants for a region."),
        _mcq("Demographic transition includes shift from:", ["High birth and death to low birth and death", "Low to high death only", "No change", "Only migration"], 0, "Countries move from high BR/DR to low BR/DR as they develop."),
        _mcq("Population explosion refers to:", ["Rapid multiplication after death rate falls before birth rate", "Sudden earthquake", "Zero growth", "Only urbanisation"], 0, "Death rate dropped while birth rate stayed high → rapid growth."),
        _mcq("Per capita means:", ["Per person", "Per city", "Per continent", "Per year only"], 0, "Per capita welfare = welfare per individual."),
        _mcq("Resource-based view of overpopulation considers:", ["Food, water, land and employment", "Only map reading", "Only pyramids", "Only migration types"], 0, "Overpopulation is about pressure on life-supporting resources."),
        _mcq("India's population growth rate has:", ["Increased sharply since 2000", "Declined compared to 1980s peak", "Become zero", "Stopped census"], 1, "Fertility decline has slowed growth though total size still rises."),
        _mcq("Ageing population has rising proportion of:", ["Children under 5", "People 65 and older", "Only migrants", "Only infants"], 1, "Low birth and longer life raise elderly share."),
        _mcq("Population planning is essential for:", ["Sustainable development", "Ignoring education", "Increasing slums only", "Stopping all healthcare"], 0, "Balanced growth supports resources, jobs and environment."),
        _mcq("If density is 800/km² in 250 km² area, population is:", ["200,000", "2,000", "20,000", "2,000,000"], 0, "Population = density × area = 800 × 250 = 200,000."),
        _mcq("Sex ratio in demography compares:", ["Number of females to males (often per 1000 males)", "Birth to death only", "Area to population", "Urban to rural only"], 0, "Sex ratio = females per 1000 males (India uses this convention)."),
        _mcq("Child dependency relates to age group:", ["0–14 years", "15–64 only", "65+ only", "Only 20–30"], 0, "Young dependants are typically under 15, not in workforce."),
        _mcq("Population clock estimates:", ["Real-time approximate world population", "Only historical census", "Map contours", "River flow"], 0, "Population clocks model continuous growth between censuses."),
        _mcq("Sustainable population growth aligns with:", ["SDGs and resource conservation", "Unlimited pollution", "Resource depletion", "No education"], 0, "UN SDGs promote growth compatible with environment and welfare."),
        _mcq("Falling birth rate contribution comes from:", ["Later marriage and contraception", "Higher IMR", "Less education", "Ban on healthcare"], 0, "Family planning and social change reduce fertility."),
        _mcq("Population density of a city can exceed rural areas because:", ["Urban economic opportunities concentrate people", "Cities have larger area always", "No jobs in cities", "Rural areas have more factories"], 0, "Cities attract migrants — high rise and compact area raise urban density."),
        _mcq("Comparison of India and Japan pyramids shows:", ["India younger, Japan more aged", "Both identical", "Japan broader base", "India has no children"], 0, "India's pyramid is younger; Japan's is top-heavy with ageing."),
        _mcq("Population data unreliability may occur if:", ["Census not conducted properly", "Healthcare improves", "Education rises", "Family planning exists"], 0, "Undercounting or exclusion reduces census accuracy."),
        _mcq("Economic development often correlates with:", ["Declining birth rates over time", "Rising death rates", "No migration", "Zero urbanisation"], 0, "Development and education typically lower fertility."),
        _mcq("Population pressure on forests leads to:", ["Deforestation and habitat loss", "More trees always", "Zero agriculture", "Lower density"], 0, "More people need fuel, land and timber — forests cleared."),
        _mcq("Healthcare access reduces:", ["Death rate and IMR", "Only birth rate to zero", "Population always to zero", "Only migration"], 0, "Medical care saves lives, lowering mortality."),
        _mcq("Population geography studies:", ["Spatial distribution and variation of population", "Only volcanoes", "Only weather maps", "Only soil types"], 0, "Population geography links people to places and regions."),
    ]
    return (qs + extra)[:70]

CH2_MCQS = _ch2_mcqs()

CH2_TFS = [
    {"q": "Population density is calculated as Population divided by Area.", "correct": "true", "just": "True. Density = population ÷ area, in persons per km²."},
    {"q": "Natural growth rate includes migration.", "correct": "false", "just": "False. Natural growth = birth rate − death rate only; migration is separate."},
    {"q": "A broad base on an age pyramid indicates high birth rate.", "correct": "true", "just": "True. Many children at the base signal high fertility."},
    {"q": "Sahara Desert is densely populated.", "correct": "false", "just": "False. Extreme aridity makes deserts sparsely populated."},
    {"q": "Overpopulation means exceeding resource support capacity.", "correct": "true", "just": "True. It is defined relative to resources, not just large numbers."},
    {"q": "Birth and death rates are expressed per 100 population.", "correct": "false", "just": "False. Vital rates use per 1000 population per year."},
    {"q": "Demographic dividend can boost economy with skilled jobs.", "correct": "true", "just": "True. Large working-age population helps if employed productively."},
    {"q": "Underpopulation means too many people for resources.", "correct": "false", "just": "False. Underpopulation = too few people to use resources fully."},
    {"q": "India conducts census every 5 years.", "correct": "false", "just": "False. Indian census is decennial — every 10 years."},
    {"q": "Education of women generally lowers fertility.", "correct": "true", "just": "True. Education empowers smaller, planned families."},
]

CH2_FILLS = [
    {"q": "The study of population is called ______.", "blank": "demography", "ans": "Demography examines size, structure, distribution and change of population."},
    {"q": "Natural growth rate equals birth rate minus ______ rate.", "blank": "death", "ans": "Natural growth = CBR − CDR per 1000 population."},
    {"q": "Population per unit area is called population ______.", "blank": "density", "ans": "Density = population ÷ area (persons/km²)."},
    {"q": "Too many people for available resources is ______.", "blank": "overpopulation", "ans": "Overpopulation occurs when resources cannot support the population."},
    {"q": "Deaths of infants under one year per 1000 live births is ______.", "blank": "infant mortality rate", "ans": "IMR is a key health indicator for newborns."},
]

CH2_MATCHES = [
    {"q": "Match terms:", "pairs": [{"left": "CBR", "right": "Births per 1000/year"}, {"left": "CDR", "right": "Deaths per 1000/year"}, {"left": "IMR", "right": "Infant deaths indicator"}, {"left": "Density", "right": "Persons per km²"}], "ans": "CBR=births; CDR=deaths; IMR=infants; density=per km²."},
    {"q": "Match pyramid shapes:", "pairs": [{"left": "Expanding", "right": "Broad base"}, {"left": "Contracting", "right": "Narrow base"}, {"left": "Stable", "right": "Even cohorts"}, {"left": "Ageing", "right": "Wide top"}], "ans": "Expanding=broad base; contracting=narrow; stable=even; ageing=wide top."},
    {"q": "Match concepts:", "pairs": [{"left": "Overpopulation", "right": "Resource strain"}, {"left": "Underpopulation", "right": "Too few workers"}, {"left": "Optimum", "right": "Best per capita welfare"}, {"left": "Carrying capacity", "right": "Environmental limit"}], "ans": "Over=strain; under=few workers; optimum=best welfare; carrying=limit."},
    {"q": "Match regions:", "pairs": [{"left": "Indo-Gangetic Plain", "right": "High density"}, {"left": "Sahara", "right": "Sparse"}, {"left": "Singapore", "right": "Dense city-state"}, {"left": "Antarctica", "right": "Almost uninhabited"}], "ans": "Plain=dense; Sahara=sparse; Singapore=dense; Antarctica=empty."},
    {"q": "Match policies:", "pairs": [{"left": "Family planning", "right": "Spacing children"}, {"left": "Census", "right": "Population count"}, {"left": "Literacy", "right": "Lowers fertility"}, {"left": "Healthcare", "right": "Lowers death rate"}], "ans": "FP=spacing; census=count; literacy=fertility down; health=death down."},
    {"q": "Match formulas:", "pairs": [{"left": "Density", "right": "Pop ÷ Area"}, {"left": "Natural growth", "right": "CBR − CDR"}, {"left": "Actual change", "right": "Natural + net migration"}, {"left": "IMR", "right": "Infant deaths per 1000 births"}], "ans": "Standard demographic formulas."},
    {"q": "Match age groups:", "pairs": [{"left": "0–14", "right": "Young dependants"}, {"left": "15–64", "right": "Working age"}, {"left": "65+", "right": "Old dependants"}, {"left": "Dependency ratio", "right": "Dependants vs workers"}], "ans": "Age group economic roles."},
    {"q": "Match factors:", "pairs": [{"left": "Fertile soil", "right": "Attracts settlement"}, {"left": "Harsh climate", "right": "Repels settlement"}, {"left": "Industries", "right": "Urban growth"}, {"left": "Mountains", "right": "Low density"}], "ans": "Physical/human distribution factors."},
    {"q": "Match indicators:", "pairs": [{"left": "Broad pyramid", "right": "Young population"}, {"left": "High IMR", "right": "Poor child health"}, {"left": "Low CBR", "right": "Fertility decline"}, {"left": "Demographic dividend", "right": "Many workers"}], "ans": "Indicator meanings."},
    {"q": "Match definitions:", "pairs": [{"left": "Demography", "right": "Population science"}, {"left": "Census", "right": "Official count"}, {"left": "Fertility", "right": "Birth-giving capacity"}, {"left": "Mortality", "right": "Death occurrence"}], "ans": "Core demographic vocabulary."},
]

CH2_SHORTS = [
    {"q": "Define population density and calculate it for 8,00,000 people in 2000 km².", "ans": "Population density is the number of persons per unit area. Density = 8,00,000 ÷ 2000 = **400 persons/km²**."},
    {"q": "Explain two causes of overpopulation.", "ans": "1. **High birth rate** with falling death rate → rapid natural increase. 2. **Limited resources** (land, water, jobs) cannot keep pace with population growth, causing strain."},
    {"q": "What does a broad-based age pyramid indicate?", "ans": "A **broad base** shows a large proportion of **children and young people**, indicating **high birth rate** and **expanding population** with high future growth potential."},
    {"q": "Distinguish birth rate and death rate.", "ans": "**Birth rate:** live births per 1000 population per year. **Death rate:** deaths per 1000 population per year. Together their difference gives natural growth rate."},
    {"q": "Suggest three measures to control population growth.", "ans": "1. **Family planning** and contraception. 2. **Education**, especially for girls. 3. **Healthcare** and awareness of small healthy families. Incentives for responsible parenthood also help."},
]

CH2_MINDMAP = """mindmap
  root((Population))
    Basics
      Definition
      Census demography
    Distribution
      Physical factors
      Human factors
    Density
      Formula persons per km2
      High vs low
    Vital Rates
      Birth rate CBR
      Death rate CDR
      Natural growth
    Pyramid
      Expanding stable contracting
      Dependency ratio
    Problems
      Overpopulation
      Underpopulation
    Policy
      Family planning
      Demographic dividend"""

CH2_CHEATSHEET = [
    "Population = people in area at given time.",
    "Density = Population ÷ Area (persons/km²).",
    "CBR and CDR per 1000 per year.",
    "Natural growth = CBR − CDR.",
    "Actual change includes net migration.",
    "Broad pyramid base = high birth rate.",
    "Narrow base = low fertility, ageing.",
    "Overpopulation = resource strain.",
    "Underpopulation = too few for resources.",
    "Optimum = max per capita welfare.",
    "IMR = infant deaths per 1000 births.",
    "Census every 10 years in India.",
    "Fertile plains → dense population.",
    "Deserts/mountains → sparse.",
    "Healthcare lowers death rate.",
    "Education lowers birth rate.",
    "Family planning = spacing + choice.",
    "Demographic dividend = many workers.",
    "Dependency ratio = dependants ÷ workers.",
    "Carrying capacity = environmental limit.",
    "India = most populous country.",
    "Sex ratio: females per 1000 males.",
    "Working age: 15–64 years.",
    "Demographic transition: high→low BR/DR.",
]

CH2_WORD_CARDS = [{"term": t, "definition": d} for t, d in [
    ("Population", "Total inhabitants of an area at a given time."),
    ("Demography", "Scientific study of population characteristics."),
    ("Census", "Official periodic count of population."),
    ("Population density", "Persons per unit area, usually per km²."),
    ("Birth rate", "Live births per 1000 population per year."),
    ("Death rate", "Deaths per 1000 population per year."),
    ("Natural growth rate", "Birth rate minus death rate."),
    ("Infant Mortality Rate", "Deaths under age 1 per 1000 live births."),
    ("Age-sex pyramid", "Graph of population by age and gender."),
    ("Expanding pyramid", "Broad base indicating rapid growth."),
    ("Contracting pyramid", "Narrow base indicating decline."),
    ("Overpopulation", "People exceed resource support capacity."),
    ("Underpopulation", "Too few people to use resources fully."),
    ("Optimum population", "Size giving maximum per capita welfare."),
    ("Carrying capacity", "Maximum sustainable population."),
    ("Demographic dividend", "Economic gain from large working-age group."),
    ("Dependency ratio", "Ratio of dependants to working-age people."),
    ("Fertility", "Actual reproductive performance of population."),
    ("Mortality", "Frequency of deaths in population."),
    ("Family planning", "Regulating number and spacing of children."),
    ("Migration", "Movement changing usual place of residence."),
    ("Urbanisation", "Growth of urban population share."),
    ("Literacy", "Education level affecting fertility choices."),
    ("Sex ratio", "Females per 1000 males in population."),
    ("Working-age population", "People typically aged 15–64."),
    ("Ageing population", "Rising share of elderly people."),
    ("Population distribution", "Spatial spread of people."),
    ("Population structure", "Composition by age and sex."),
    ("Demographic transition", "Shift from high to low vital rates."),
    ("Sustainable growth", "Growth compatible with resources and environment."),
]]

# Continue CH3 and CH4 in same file - truncated for space, will add below
