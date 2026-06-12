"""Chapter 3 content definitions: Migration."""
from geography8.chapter_data._qhelpers import M, combo2, combo3

TITLE = "Migration"

TOPICS = [
    {
        "title": "What Is Migration?",
        "summary": "Migration is the movement of people from one place to another to settle temporarily or permanently.",
        "bullets": [
            "Differs from daily commuting or short visits",
            "Can be internal (within country) or international (across borders)",
            "May be voluntary or forced",
            "Temporary migrants include seasonal workers and refugees in camps",
            "Permanent migrants change long-term residence",
        ],
        "body": """**Migration** means crossing a defined boundary to live elsewhere. It is a major component of **population change** along with births and deaths.

**Internal migration** moves people within the same country (e.g. village to city).
**International migration** crosses national borders (e.g. India to UAE for work).

Migration reshapes population distribution, culture, economy, and cities.""",
        "explanation": "Migration = change of usual residence across a boundary, not a day trip.",
        "teacherTip": "Ask students if they know families who migrated—link concept to lived experience.",
        "examTip": "Define migration and distinguish from circulation/commuting.",
    },
    {
        "title": "Types of Migration",
        "summary": "Migration is classified by distance, direction, duration, and cause.",
        "bullets": [
            "Rural to urban (most common in developing countries)",
            "Urban to rural (counter-urbanisation in some developed areas)",
            "International labour migration and student migration",
            "Forced migration: refugees fleeing war or persecution",
            "Seasonal migration for harvest or tourism work",
        ],
        "body": """| Type | Example |
|------|---------|
| Internal | Bihar to Delhi for work |
| International | Nurse from Kerala to UK |
| Voluntary | Job or education |
| Forced | Refugees from conflict |
| Seasonal | Farm labour during harvest |

**Emigration** = leaving a country; **Immigration** = entering a country.""",
        "explanation": "Classify migration by where, why, and how long.",
        "teacherTip": "Sort newspaper headlines into migration types.",
        "examTip": "Give one example for each type in long answers.",
    },
    {
        "title": "Push and Pull Factors",
        "summary": "People leave places due to push factors and are attracted by pull factors.",
        "bullets": [
            "Push: unemployment, poverty, war, famine, natural disaster",
            "Pull: jobs, higher wages, education, safety, better services",
            "Push and pull work together in migration decisions",
            "Family links and chain migration reinforce movement",
            "Government policy can push or pull (restrictions or incentives)",
        ],
        "body": """**Push factors** drive people **away** from origin (lack of jobs, drought, conflict).

**Pull factors** attract people **toward** destination (factories, universities, peace).

Example: A farmer migrates from drought-hit village (**push**) to city for construction work (**pull**).""",
        "explanation": "Every migration story has reasons to leave and reasons to arrive.",
        "teacherTip": "Two-column chart: push on left, pull on right with local examples.",
        "examTip": "Never list only pulls—ICSE expects both sides.",
    },
    {
        "title": "Rural-Urban Migration",
        "summary": "Movement from villages to towns and cities is the dominant migration stream in India and much of the developing world.",
        "bullets": [
            "Causes: lack of rural jobs, low farm income, drought, better city services",
            "Young adults migrate most frequently",
            "Results in urbanisation and growth of slums if housing lags",
            "Remittances sent home support rural families",
            "Cities gain labour but face congestion and pressure on water",
        ],
        "body": """**Rural-urban migration** fuels **urbanisation**. Migrants seek **manufacturing**, **services**, and **education**.

**Positive:** labour supply, remittances, cultural exchange.
**Negative:** overcrowding, inadequate housing, strain on transport and sanitation.

Planning **affordable housing** and **rural development** can balance flows.""",
        "explanation": "Rural-urban shift is the main migration story in Class 8 Indian geography.",
        "teacherTip": "Discuss remittance economy in Kerala or UP-Bihar-Delhi corridor.",
        "examTip": "List causes (push/pull) and effects on both village and city.",
    },
    {
        "title": "International Migration",
        "summary": "People cross borders for work, study, family reunion, or asylum.",
        "bullets": [
            "Gulf countries attract construction and service workers from South Asia",
            "Developed countries attract skilled professionals and students",
            "Remittances are major income for countries like India and Philippines",
            "Border controls, visas, and passports regulate movement",
            "Diaspora communities maintain cultural ties abroad",
        ],
        "body": """**International migrants** face **passport/visa** rules. **Labour migration** to the **Gulf** and **West** is significant for India.

**Remittances** = money sent home by migrants—supports families and national foreign exchange.

**Brain drain** (next topic) is a special form of skilled international emigration.""",
        "explanation": "International migration links countries economically and culturally.",
        "teacherTip": "Map major migration corridors on a world map.",
        "examTip": "Mention remittances when writing on international migration from India.",
    },
    {
        "title": "Brain Drain",
        "summary": "Brain drain is the emigration of highly educated and skilled workers from their home country.",
        "bullets": [
            "Doctors, engineers, IT professionals, and scientists often move abroad",
            "Causes: better pay, research facilities, quality of life, political stability",
            "Origin country loses skilled human capital",
            "Destination country gains expertise cheaply",
            "Brain gain possible when migrants return with skills (brain circulation)",
        ],
        "body": """**Brain drain** hurts developing nations that invest in education but lose graduates to richer countries.

**India** sees IT professionals and nurses migrate to the USA, UK, Canada, and Gulf.

**Solutions:** better jobs at home, research funding, return incentives, and diaspora engagement.""",
        "explanation": "Brain drain = loss of 'best minds'; not all migration is brain drain—only skilled outflow.",
        "teacherTip": "Debate: brain drain vs opportunity for individuals.",
        "examTip": "Define brain drain and give Indian examples (IT, medicine).",
    },
    {
        "title": "Impacts of Migration on Origin",
        "summary": "Sending areas experience population loss, remittances, and social change.",
        "bullets": [
            "Population decreases, especially working-age adults and males",
            "Remittances reduce poverty and fund education",
            "Left-behind elderly and children face care challenges",
            "Skilled emigration slows development (brain drain)",
            "Some villages become 'empty' of youth",
        ],
        "body": """**Origin areas** lose workers but may gain **money** and **ideas**.

**Positive:** remittances, new skills when migrants return, reduced local unemployment pressure.
**Negative:** labour shortage in farms, separated families, loss of educated youth.""",
        "explanation": "Effects on origin are mixed—economic gain vs social and demographic loss.",
        "teacherTip": "Case study: remittance houses in Kerala or Punjab villages.",
        "examTip": "Balance positive and negative impacts on source region.",
    },
    {
        "title": "Impacts of Migration on Destination",
        "summary": "Receiving areas gain labour and diversity but may face integration and infrastructure challenges.",
        "bullets": [
            "Labour supply for industry, construction, and services",
            "Cultural diversity and new cuisines, festivals, ideas",
            "Pressure on housing, schools, and hospitals if rapid",
            "Sometimes social tension or competition for jobs",
            "Migrants fill jobs locals may not want (3D jobs: dirty, dangerous, difficult)",
        ],
        "body": """**Destination regions** grow faster with migrant labour. **Cities** like Mumbai, London, and Dubai depend on migrants.

**Challenges:** slums, discrimination, language barriers, illegal migration issues.

**Policy:** registration, work permits, and inclusive urban planning help manage impacts.""",
        "explanation": "Destinations need migrants for growth but must plan for housing and services.",
        "teacherTip": "Discuss how migrants contribute to city economies.",
        "examTip": "Separate economic benefits from social challenges in answers.",
    },
]

HIGH_YIELD = [
    "Migration is movement across a boundary to settle temporarily or permanently.",
    "Internal migration stays within one country; international crosses borders.",
    "Emigration = leaving a country; Immigration = entering a country.",
    "Push factors drive people away from origin.",
    "Pull factors attract people to destination.",
    "Rural-urban migration is the main stream in developing countries.",
    "Remittances are money sent home by migrants.",
    "Brain drain = emigration of highly skilled workers.",
    "Refugees migrate due to war, persecution, or disaster—forced migration.",
    "Seasonal migration follows harvest or tourism seasons.",
    "Net migration = immigrants − emigrants.",
    "Chain migration occurs when earlier migrants sponsor relatives.",
    "Gulf countries attract many South Asian labour migrants.",
    "India is a major remittance-receiving country.",
    "Urbanisation is accelerated by rural-urban migration.",
    "Young adults migrate more than elderly.",
    "Counter-urbanisation = movement from city to countryside (developed nations).",
    "Illegal migration lacks official documents or visas.",
    "Diaspora = community living outside homeland.",
    "Brain circulation = skilled return migration with new expertise.",
    "Migration affects age and sex structure of both regions.",
    "Slums often grow when urban migration outpaces housing.",
    "Government visas regulate international migration.",
    "IDPs are displaced within their own country.",
    "Economic migration seeks better jobs and wages.",
    "Social migration joins family or community abroad.",
    "Environmental migration follows drought, flood, or sea-level rise.",
    "Mumbai and Delhi grew partly through in-migration.",
    "Kerala has high emigration and remittance inflows.",
    "Balanced regional development can reduce excessive migration pressure.",
]

MCQS = [
    M("Migration is best defined as:", ["Daily travel to school", "Movement across a boundary to settle", "Only international travel", "Tourism for one week"], 1, "Migration involves changing place of residence across a defined boundary.", exam="Distinguish from commuting."),
    M("Internal migration occurs:", ["Between two countries", "Within the same country", "Only from city to village", "Only for refugees"], 1, "Internal migration does not cross international borders.", exam="Internal vs international."),
    M("Emigration means:", ["Entering a country", "Leaving a country to live elsewhere", "Daily commuting", "Birth in a country"], 1, "Emigrant = one who exits their country.", exam="Emigrate vs immigrate."),
    M("A pull factor for migration is:", ["Unemployment in home area", "Better wages in destination", "War in home region", "Famine"], 1, "Pull factors attract migrants toward a new place.", exam="Pull = attraction."),
    M("A push factor for migration is:", ["Higher salary abroad", "Good universities elsewhere", "Drought destroying crops", "Job offer in city"], 2, "Drought pushes people away from rural homes.", exam="Push = repulsion."),
    combo2("All migration is permanent.", "Seasonal migration is temporary.", 1, "Statement 1 false; seasonal workers return after harvest—temporary migration.", exam="Duration types combo."),
    M("Rural-urban migration mainly leads to:", ["Urbanisation", "Desertification", "Glaciation", "Deforestation only"], 0, "People moving to towns increases urban population share.", exam="Link migration to urbanisation."),
    M("Remittances are:", ["Taxes paid to government", "Money sent home by migrants", "Import duties", "Map measurements"], 1, "Remittances support families and national economy.", exam="Major for India."),
    M("Brain drain refers to:", ["Loss of skilled workers through emigration", "Drainage of rivers", "Urban sewage problem", "Migration of unskilled only"], 0, "Educated professionals leaving = brain drain.", exam="Define with examples."),
    M("Refugees migrate primarily due to:", ["Higher exam marks", "War, persecution, or disaster", "Tourism", "Shopping"], 1, "Forced migration from fear or violence.", exam="Forced vs voluntary."),
    M("Immigration means:", ["Leaving country", "Entering a country to live", "Moving within state only", "Seasonal farming"], 1, "Immigrant arrives in destination country.", exam="Opposite of emigration."),
    M("Chain migration happens when:", ["Migrants follow relatives or community members", "People move in winter only", "Only governments migrate", "Maps are chained"], 0, "Existing migrants help others relocate.", exam="Social network effect."),
    M("Which is international migration?", ["Village to Delhi", "Kerala nurse to UK hospital", "Home to school", "Floor to floor in building"], 1, "Crosses national border.", exam="Apply definition."),
    M("Gulf countries attract many migrants for:", ["Polar research only", "Construction and service jobs", "Farming in ice", "No employment"], 1, "Oil economies need labour from South Asia.", exam="India-Gulf corridor."),
    M("Counter-urbanisation is:", ["City to rural movement", "Rural to city only", "International only", "No migration"], 0, "Some move from crowded cities to quieter countryside.", exam="Developed country trend."),
    combo3("Push factors include poverty.", "Pull factors include better jobs.", "Pull factors include earthquakes at home.", 3, "Statements 1 and 2 correct; earthquakes are push factors.", exam="Three-statement combo."),
    M("Net migration is calculated as:", ["Births minus deaths", "Immigrants minus emigrants", "Emigrants minus immigrants", "Population divided by area"], 1, "Positive net migration increases population.", exam="Formula."),
    M("Seasonal migration is common among:", ["Agricultural labourers", "Permanent embassy staff only", "Mountain rocks", "Contour lines"], 0, "Harvest seasons create temporary labour demand.", exam="Rural example."),
    M("Brain circulation means:", ["Skilled returnees bring new knowledge home", "Water flow in brain", "Only permanent drain", "No return ever"], 0, "Return migration can benefit origin country.", exam="Positive flip of brain drain."),
    M("IDP (Internally Displaced Person) is:", ["Displaced within own country", "Always international migrant", "Tourist", "Emigrant to Mars"], 0, "Internal displacement without crossing border.", exam="Forced migration type."),
    M("Major effect of rural-urban migration on cities:", ["Labour supply and possible overcrowding", "No change", "Only decrease in population", "Elimination of slums"], 0, "Cities gain workers but may face housing pressure.", exam="Destination impact."),
    M("Origin area may benefit from migration through:", ["Remittances and reduced unemployment pressure", "Loss of all money", "No communication", "Automatic brain gain always"], 0, "Money sent home is a key benefit.", exam="Origin positive."),
    M("Voluntary migration is driven by:", ["Free choice for better opportunities", "Only government force", "Only natural disasters", "Mandatory military only"], 0, "Migrants choose to move for jobs, education, etc.", exam="Voluntary vs forced."),
    M("Which Indian state is known for high emigration and remittances?", ["Kerala", "Ladakh only", "No state", "Only desert states"], 0, "Kerala has large Gulf diaspora and remittance inflow.", exam="Indian case study."),
    M("Illegal migration lacks:", ["Proper visas or documents", "Any movement", "People", "Destinations"], 0, "Unauthorized border crossing or overstaying visas.", exam="Policy issue."),
    M("Diaspora refers to:", ["People living outside their homeland", "Only rivers", "Mountain peaks", "Contour lines"], 0, "Scattered community abroad maintaining ties.", exam="Cultural geography."),
    M("Environmental migration may follow:", ["Drought, floods, or rising sea level", "Only exam dates", "Map colours", "Contour VI"], 0, "Climate hazards displace populations.", exam="Emerging category."),
    combo2("Migration changes population of both origin and destination.", "Migration has no demographic effect.", 0, "Statement 1 true; migration alters numbers and age structure in both places.", exam="Demographic impact combo."),
    M("Young adults migrate more because:", ["They seek jobs and education", "They cannot walk", "Laws forbid old people", "Only children migrate"], 0, "Working-age mobility is highest.", exam="Age selectivity."),
    M("Destination country gains from skilled immigrants through:", ["Expertise and tax contributions", "Automatic unemployment", "Loss of all industry", "No benefit ever"], 0, "Skilled migrants fill labour gaps.", exam="Brain gain for destination."),
    M("Left-behind children in origin villages may face:", ["Care and education challenges", "No effect ever", "Automatic wealth", "Only urban schooling at home"], 0, "Family separation has social costs.", exam="Social impact on origin."),
    M("Mumbai's growth was significantly aided by:", ["In-migration from other states", "Only emigration abroad", "No migration", "Polar settlement"], 0, "Megacity attracts rural and interstate migrants.", exam="Indian urban example."),
    M("Economic migration is mainly for:", ["Better wages and employment", "Religious festivals only", "Contour reading", "Map scale"], 0, "Livelihood is primary driver.", exam="Migration motive."),
    M("Social migration includes:", ["Joining family abroad", "Only war flight", "Only seasonal harvest", "Only brain drain"], 0, "Family reunion is a social pull factor.", exam="Type of migration."),
    M("Government can reduce excessive rural-urban drift by:", ["Rural job schemes and better village services", "Closing all cities", "Banning all travel", "Removing schools"], 0, "Balanced development reduces push pressure.", exam="Policy solution."),
    M("3D jobs migrants often fill means:", ["Dirty, dangerous, difficult work", "Desk jobs only", "Director level posts", "No jobs"], 0, "Migrants take hard jobs locals may avoid.", exam="Labour market term."),
    M("Passport and visa rules mainly affect:", ["International migration", "Sleeping at home", "Local playground", "Contour spacing"], 0, "Legal control of cross-border movement.", exam="Regulation."),
    combo3("Emigrants leave their country.", "Immigrants enter a new country.", "Emigrant and immigrant mean the same.", 3, "Statements 1 and 2 correct; they are opposite directions.", exam="Terminology combo."),
    M("Forced migration includes:", ["Refugees fleeing conflict", "Optional holiday", "Daily commute", "Shopping trip"], 0, "No real choice—safety threatened.", exam="Forced category."),
    M("Remittances help origin country by:", ["Improving foreign exchange and family income", "Reducing all development", "Stopping education", "Eliminating farms"], 0, "Major economic inflow for India.", exam="National impact."),
    M("Urban slum growth is often linked to:", ["Rapid migration without affordable housing", "Underpopulation", "No in-migration", "Only emigration"], 0, "Housing supply lags behind migrant influx.", exam="Urban challenge."),
    M("Student migration is an example of:", ["Voluntary migration for education", "Forced refugee flow", "Seasonal harvest work", "Illegal only"], 0, "Students choose universities abroad.", exam="Migration type."),
    M("Skilled migration to USA from India often involves:", ["IT professionals and doctors", "Only unskilled only always", "No Indians", "Contour surveyors only"], 0, "Brain drain sectors include IT and health.", exam="Brain drain examples."),
    M("Migration affects sex ratio in origin when:", ["Mostly men migrate for work", "Only women migrate always", "No one migrates", "Maps change sex ratio"], 0, "Male-dominated labour migration skews ratios.", exam="Demographic effect."),
    M("Inter-state migration in India is:", ["Internal migration", "International", "Not migration", "Only tourism"], 0, "Within same country across state borders.", exam="India internal example."),
    M("Pull factor in cities includes:", ["Hospitals, schools, and entertainment", "Crop failure", "Village drought", "Lack of jobs at home"], 0, "Urban services attract migrants.", exam="Urban pull list."),
    M("Return migration can bring:", ["Skills, savings, and entrepreneurship", "Nothing useful", "Only maps", "Contour lines"], 0, "Returnees may invest in hometown businesses.", exam="Brain circulation."),
    M("War in a country creates:", ["Refugees and forced emigration", "No movement", "Only immigration to that country", "Seasonal farming only"], 0, "Conflict is a major push factor.", exam="Current affairs link."),
    combo2("Brain drain always benefits the origin country.", "Brain drain can slow development in origin country.", 1, "Statement 1 false; losing skilled workers hurts origin unless they return.", exam="Brain drain evaluation."),
    M("Temporary international workers may:", ["Return home after contract ends", "Never move", "Only migrate permanently always", "Only live in oceans"], 0, "Gulf contracts are often time-limited.", exam="Temporary migration."),
    M("Migration stream from Bihar to Delhi is:", ["Rural-urban internal migration", "International migration", "Not migration", "Counter-urbanisation"], 0, "Classic internal labour movement.", exam="Indian corridor."),
    M("Destination culture becomes diverse through:", ["Immigrant traditions and food", "Closing all borders", "Stopping languages", "Removing festivals"], 0, "Cultural exchange enriches cities.", exam="Social benefit."),
    M("Excessive emigration of doctors from a poor country is:", ["Brain drain", "Brain gain for origin", "Not migration", "Urbanisation only"], 0, "Health sector loses trained staff.", exam="Sector example."),
    M("Migration policy may include:", ["Work permits and quotas", "Contour intervals", "Map colours", "VI only"], 0, "Governments regulate who enters legally.", exam="Policy tools."),
    M("Famine acts as a:", ["Push factor", "Pull factor", "Map scale", "Grid reference"], 0, "Food shortage forces people to leave.", exam="Push example."),
    M("Better education abroad acts as:", ["Pull factor", "Push factor", "Death rate", "Birth rate"], 0, "Quality universities attract students.", exam="Pull example."),
    M("Labour shortage in origin after migration shows:", ["Negative demographic/economic effect", "No effect", "Automatic doubling of workers", "Only urban effect"], 0, "Too many workers leave farms or clinics.", exam="Origin negative."),
    combo3("Remittances support rural families.", "All migration is forced.", "Migration can worsen urban overcrowding.", 3, "Statements 1 and 3 correct; much migration is voluntary.", exam="Mixed impacts combo."),
    M("Dubai's economy relies heavily on:", ["Immigrant labour force", "No workers", "Only local population always", "Contour farming"], 0, "Majority population may be foreign-born workers.", exam="Gulf case study."),
    M("Migration is one component of population change along with:", ["Births and deaths", "Only map reading", "Only rainfall", "Only soil types"], 0, "Total change = natural increase + net migration.", exam="Demographic equation."),
    M("Step migration often moves through:", ["Intermediate towns before big city", "Directly to moon", "Only one village", "No stages"], 0, "Migrants may stop at smaller urban centres first.", exam="Migration pattern."),
    M("Political persecution pushes people to seek:", ["Asylum in safer countries", "Contour maps", "Higher VI", "Only rural life"], 0, "Human rights refugees flee persecution.", exam="Forced migration."),
    M("Migrants sending money home is called:", ["Remittance flow", "Brain drain", "Urbanisation", "Census"], 0, "Financial lifeline for many families.", exam="Economic term."),
    M("Urban employers often depend on migrant labour for:", ["Construction, transport, and domestic work", "No roles", "Only government jobs", "Polar research"], 0, "Informal sector relies on migrants.", exam="Economic role."),
    M("Reducing brain drain requires:", ["Better careers and research at home", "Banning all education", "Closing universities", "Forcing emigration"], 0, "Retain talent with opportunity.", exam="Policy response."),
    M("Migration statistics help planners to:", ["Forecast housing, schools, and transport needs", "Draw brown contours", "Measure VI", "Find magnetic north"], 0, "Urban planning uses migration data.", exam="Applied planning."),
    M("Guest workers in Gulf states are mostly:", ["International temporary labour migrants", "Permanent citizens only", "Not migrants", "Contour surveyors"], 0, "Contracts for fixed-term employment abroad.", exam="Gulf migration model."),
    M("Migration from village to nearby small town first is:", ["Step migration", "Brain drain", "Counter-urbanisation", "Emigration abroad only"], 0, "Gradual move through intermediate settlements.", exam="Migration pattern."),
    combo2("Pull factors include better job opportunities.", "Push factors include natural disasters at home.", 3, "Both statements are correct—classic push-pull framework.", exam="UPSC-style combo."),
    M("Origin village sex ratio may skew when:", ["Most working-age men migrate", "Only elderly migrate", "No one migrates", "Maps are redrawn"], 0, "Male labour migration leaves more women and elderly at home.", exam="Demographic consequence."),
]

TFS = [
    {"q": "Immigration means entering a country to live.", "correct": "true", "just": "True. Immigrants arrive in the destination country."},
    {"q": "Push factors attract people to a new destination.", "correct": "false", "just": "False. Push factors drive people away from origin; pull factors attract."},
    {"q": "Brain drain is the emigration of highly skilled workers.", "correct": "true", "just": "True. Doctors, engineers, and scientists leaving constitute brain drain."},
    {"q": "All migration is permanent.", "correct": "false", "just": "False. Seasonal and temporary contract migration are common."},
    {"q": "Remittances are money sent home by migrants.", "correct": "true", "just": "True. They support families and boost foreign exchange."},
    {"q": "Rural-urban migration increases urbanisation.", "correct": "true", "just": "True. People moving to cities raises the urban population share."},
    {"q": "Refugees are voluntary economic migrants.", "correct": "false", "just": "False. Refugees flee war or persecution—forced migration."},
    {"q": "Internal migration stays within the same country.", "correct": "true", "just": "True. No international border is crossed."},
    {"q": "Net migration equals immigrants minus emigrants.", "correct": "true", "just": "True. Positive net migration adds to population."},
    {"q": "Migration has no effect on origin or destination areas.", "correct": "false", "just": "False. Both regions experience economic and social changes."},
]

FILLS = [
    {"q": "People who leave their country are called ______.", "blank": "emigrants", "ans": "Emigrants emigrate from origin country."},
    {"q": "People who enter a country to settle are called ______.", "blank": "immigrants", "ans": "Immigrants immigrate into destination."},
    {"q": "Factors that drive people away from home are ______ factors.", "blank": "push", "ans": "Push factors include poverty, war, and drought."},
    {"q": "Money sent home by migrants is called ______.", "blank": "remittances", "ans": "Remittances support families and national economy."},
    {"q": "Emigration of skilled professionals is called brain ______.", "blank": "drain", "ans": "Brain drain."},
]

MATCHES = [
    {"q": "Match migration terms:", "pairs": [{"left": "Emigration", "right": "Leaving country"}, {"left": "Immigration", "right": "Entering country"}, {"left": "Remittance", "right": "Money sent home"}, {"left": "Diaspora", "right": "Community abroad"}], "ans": "Basic migration vocabulary."},
    {"q": "Match factor types:", "pairs": [{"left": "Unemployment", "right": "Push"}, {"left": "Better wages", "right": "Pull"}, {"left": "War", "right": "Push"}, {"left": "Universities", "right": "Pull"}], "ans": "Push repels; pull attracts."},
    {"q": "Match migration types:", "pairs": [{"left": "Village to Mumbai", "right": "Rural-urban"}, {"left": "India to UAE", "right": "International"}, {"left": "Harvest labour", "right": "Seasonal"}, {"left": "Refugee flight", "right": "Forced"}], "ans": "Classify by route and cause."},
    {"q": "Match impacts on origin:", "pairs": [{"left": "Remittances", "right": "Positive"}, {"left": "Labour shortage", "right": "Negative"}, {"left": "Separated families", "right": "Social cost"}, {"left": "Brain drain", "right": "Skill loss"}], "ans": "Mixed origin effects."},
    {"q": "Match impacts on destination:", "pairs": [{"left": "Labour supply", "right": "Economic gain"}, {"left": "Cultural diversity", "right": "Social gain"}, {"left": "Slum growth", "right": "Challenge"}, {"left": "Job competition", "right": "Tension"}], "ans": "Destination gains and problems."},
    {"q": "Match examples:", "pairs": [{"left": "Kerala", "right": "High remittances"}, {"left": "Gulf", "right": "Labour destination"}, {"left": "Bihar-Delhi", "right": "Internal stream"}, {"left": "UK hospitals", "right": "Nurse migration"}], "ans": "Indian migration corridors."},
    {"q": "Match duration:", "pairs": [{"left": "Permanent", "right": "Long-term settlement"}, {"left": "Seasonal", "right": "Temporary harvest"}, {"left": "Contract", "right": "Fixed-term abroad"}, {"left": "Daily commute", "right": "Not migration"}], "ans": "Duration classification."},
    {"q": "Match brain drain sectors:", "pairs": [{"left": "IT", "right": "Software engineers"}, {"left": "Health", "right": "Doctors/nurses"}, {"left": "Research", "right": "Scientists"}, {"left": "Returnees", "right": "Brain circulation"}], "ans": "Skilled migration fields."},
    {"q": "Match regulation:", "pairs": [{"left": "Passport", "right": "Identity for travel"}, {"left": "Visa", "right": "Entry permission"}, {"left": "Work permit", "right": "Legal employment"}, {"left": "Illegal entry", "right": "No documents"}], "ans": "Legal migration tools."},
    {"q": "Match concepts:", "pairs": [{"left": "IDP", "right": "Displaced internally"}, {"left": "Refugee", "right": "Cross-border forced"}, {"left": "Counter-urbanisation", "right": "City to rural"}, {"left": "Chain migration", "right": "Follow relatives"}], "ans": "Advanced migration terms."},
]

SHORTS = [
    {"q": "Distinguish between emigration and immigration.", "ans": "Emigration means leaving one's country to live elsewhere (emigrant exits). Immigration means entering another country to settle (immigrant arrives). They describe the same move from opposite viewpoints."},
    {"q": "Explain push and pull factors with one example each.", "ans": "Push factors drive people away from origin, e.g. drought destroying crops. Pull factors attract to destination, e.g. better paid jobs in a city. Migration usually results from both."},
    {"q": "What is brain drain and how does it affect India?", "ans": "Brain drain is emigration of highly educated/skilled workers. India loses doctors, engineers, and IT professionals to countries offering higher pay and research facilities, reducing skilled workforce at home though remittances and returnees partly offset losses."},
    {"q": "Give three effects of rural-urban migration on cities.", "ans": "Cities gain labour for construction and services; face overcrowding, slums, and traffic congestion; and experience pressure on water, schools, and hospitals if planning lags behind migrant influx."},
    {"q": "How do remittances benefit the origin region?", "ans": "Remittances raise family income, fund education and housing, reduce poverty, and add to national foreign exchange. They can improve living standards in villages even when workers are abroad."},
]

MINDMAP = """flowchart TB
  ROOT[Migration]
  ROOT --> TYPES[Types]
  ROOT --> FACTORS[Push and Pull]
  ROOT --> RURAL[Rural-Urban]
  ROOT --> INTL[International]
  ROOT --> BRAIN[Brain Drain]
  ROOT --> ORIGIN[Origin Effects]
  ROOT --> DEST[Destination Effects]
  TYPES --> INT[Internal]
  TYPES --> CROSS[International]
  TYPES --> FORCED[Forced]
  TYPES --> SEASON[Seasonal]
  FACTORS --> PUSH[Push away]
  FACTORS --> PULL[Pull toward]
  RURAL --> URB[Urbanisation]
  INTL --> GULF[Gulf labour]
  INTL --> REMIT[Remittances]
  BRAIN --> SKILL[Skilled loss]
  BRAIN --> CIRC[Brain circulation]
  ORIGIN --> MONEY[Remittances +]
  ORIGIN --> LABOUR[Labour shortage -]
  DEST --> WORK[Labour supply]
  DEST --> SLUM[Overcrowding]"""

CHEATSHEET = [
    "Migration = move across boundary to settle.",
    "Internal = within country; international = across borders.",
    "Emigrant leaves; immigrant arrives.",
    "Push = leave (poverty, war, drought).",
    "Pull = attract (jobs, education, safety).",
    "Rural-urban = main stream in India.",
    "Remittances = money sent home.",
    "Brain drain = skilled emigration.",
    "Refugees = forced migration.",
    "Seasonal = temporary harvest work.",
    "Net migration = immigrants − emigrants.",
    "Kerala = high remittances.",
    "Gulf = major labour destination.",
    "Chain migration follows relatives.",
    "IDP = displaced inside country.",
    "Counter-urbanisation = city to rural.",
    "Voluntary vs forced migration.",
    "Diaspora = community abroad.",
    "Brain circulation = skilled return.",
    "Slums linked to rapid urban in-migration.",
    "Passport/visa regulate international moves.",
    "3D jobs = dirty, dangerous, difficult.",
    "Origin gains remittances, loses labour.",
    "Destination gains workers, may overcrowd.",
    "Balance rural development to reduce drift.",
]

WORD_CARDS = [
    {"term": "Migration", "definition": "Movement of people across a boundary to settle temporarily or permanently."},
    {"term": "Emigration", "definition": "Leaving one's country to live in another."},
    {"term": "Immigration", "definition": "Entering a foreign country to settle."},
    {"term": "Internal migration", "definition": "Movement within the same country."},
    {"term": "International migration", "definition": "Movement across national borders."},
    {"term": "Push factor", "definition": "Condition that drives people away from an area."},
    {"term": "Pull factor", "definition": "Condition that attracts people to an area."},
    {"term": "Rural-urban migration", "definition": "Movement from countryside to towns and cities."},
    {"term": "Remittance", "definition": "Money earned by migrants and sent to family at home."},
    {"term": "Brain drain", "definition": "Emigration of highly educated and skilled workers."},
    {"term": "Brain circulation", "definition": "Return of skilled migrants bringing new knowledge home."},
    {"term": "Refugee", "definition": "Person forced to flee country due to war or persecution."},
    {"term": "Forced migration", "definition": "Movement compelled by danger or disaster, not free choice."},
    {"term": "Voluntary migration", "definition": "Movement chosen freely for better opportunities."},
    {"term": "Seasonal migration", "definition": "Temporary move linked to seasons, e.g. harvest labour."},
    {"term": "Net migration", "definition": "Immigrants minus emigrants in a period."},
    {"term": "Diaspora", "definition": "Community of people living outside their homeland."},
    {"term": "Chain migration", "definition": "Migration encouraged by relatives already at destination."},
    {"term": "Counter-urbanisation", "definition": "Movement from cities to rural or small-town areas."},
    {"term": "IDP", "definition": "Internally Displaced Person—forced to move within own country."},
    {"term": "Asylum", "definition": "Protection granted to refugees by another country."},
    {"term": "Visa", "definition": "Official permission to enter or stay in a country."},
    {"term": "Work permit", "definition": "Legal authorisation for a foreigner to work in a country."},
    {"term": "Illegal migration", "definition": "Crossing borders or working without proper documents."},
    {"term": "Step migration", "definition": "Movement to destination in stages through intermediate places."},
    {"term": "Labour migration", "definition": "Movement primarily to find employment."},
    {"term": "Environmental migration", "definition": "Movement caused by natural disasters or climate hazards."},
    {"term": "Emigrant", "definition": "Person who leaves their country of origin."},
    {"term": "Immigrant", "definition": "Person who arrives to live in a new country."},
    {"term": "3D jobs", "definition": "Dirty, dangerous, and difficult jobs often filled by migrants."},
]

CH3 = {
    "title": TITLE,
    "topics": TOPICS,
    "high_yield": HIGH_YIELD,
    "mcqs": MCQS,
    "tfs": TFS,
    "fills": FILLS,
    "matches": MATCHES,
    "shorts": SHORTS,
    "mindmap": MINDMAP,
    "cheatsheet": CHEATSHEET,
    "word_cards": WORD_CARDS,
}
