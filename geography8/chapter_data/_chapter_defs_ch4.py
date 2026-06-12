"""Chapter 4 content definitions: Urbanization."""
from geography8.chapter_data._qhelpers import M, combo2, combo3

TITLE = "Urbanization"

TOPICS = [
    {
        "title": "What Is Urbanization?",
        "summary": "Urbanization is the growth in the proportion of people living in towns and cities, driven by rural-urban migration and natural increase in urban areas.",
        "bullets": [
            "Urban population share rises as villages shrink relatively",
            "Linked closely to industrialisation and economic development",
            "UN defines urban areas by population size, density, and governance",
            "India's urban population is over 35% and rising",
            "Megacities like Mumbai and Delhi exceed 10 million people",
        ],
        "body": """**Urbanization** means more people living in **urban** (city/town) areas compared with **rural** (village) areas.

It happens when:
1. **Rural-urban migration** brings workers to cities.
2. **Natural increase** (births minus deaths) is higher in cities.
3. **Redefinition** of settlements as towns when they grow.

Urban life offers jobs, education, and services—but also congestion, pollution, and housing pressure.""",
        "explanation": "Urbanization is a ratio change—cities grow faster than countryside, not always because villages empty completely.",
        "teacherTip": "Compare urban % in 1951 vs today using census data for a clear trend line.",
        "examTip": "Define urbanization as increase in urban population proportion, not just city size.",
    },
    {
        "title": "Causes of Urbanization",
        "summary": "Push factors in villages and pull factors in cities together explain why people move and why urban areas expand.",
        "bullets": [
            "Industrialisation creates factory and service jobs in cities",
            "Better schools, hospitals, and transport attract migrants",
            "Rural poverty, land fragmentation, and drought push people out",
            "Trade, ports, and government offices concentrate in urban centres",
            "Mechanisation in farming reduces rural labour demand",
        ],
        "body": """### Push factors (rural)
- Limited jobs beyond farming
- Drought, floods, or small landholdings
- Poor schools and health facilities

### Pull factors (urban)
- Higher wages and diverse employment
- Universities, entertainment, and urban lifestyle
- Hope for upward social mobility

### Other drivers
**Colonial and modern planning** placed railways, mills, and capitals in cities. **Globalisation** expanded IT, finance, and logistics hubs.""",
        "explanation": "Urbanization is rarely caused by one factor—push and pull work together.",
        "teacherTip": "Use a T-chart: push (village problems) vs pull (city opportunities).",
        "examTip": "ICSE long answers need at least two push and two pull factors with examples.",
    },
    {
        "title": "Rural-Urban Migration and Urban Growth",
        "summary": "Migration from countryside to city is the main engine of urbanization in developing countries like India.",
        "bullets": [
            "Young adults migrate most for work and education",
            "Step migration may pass through small towns first",
            "Circular migration: workers visit city seasonally then return home",
            "Women increasingly migrate for domestic and garment work",
            "Inter-state migration feeds metros like Mumbai and Bengaluru",
        ],
        "body": """**Rural-urban migration** shifts labour to construction, transport, domestic service, and factories.

**Effects on villages:** remittances help families, but labour shortage and left-behind children are social costs.

**Effects on cities:** workforce expands, but if housing and water lag, **slums** and overcrowding appear.

Urban planners track migration streams to forecast demand for schools, buses, and hospitals.""",
        "explanation": "Cities grow because people choose (or are forced) to move—migration data explains which cities boom.",
        "teacherTip": "Map major Indian migration corridors: UP/Bihar → Delhi; rural → Mumbai.",
        "examTip": "Link rural-urban migration explicitly to urbanization in every essay.",
    },
    {
        "title": "Impacts of Urbanization — Positive",
        "summary": "Cities drive economic growth, innovation, and better access to services when managed well.",
        "bullets": [
            "Economies of scale in industry and services",
            "Skilled jobs in IT, finance, health, and education",
            "Better hospitals, universities, and transport networks",
            "Cultural exchange, museums, and media hubs",
            "Higher productivity and tax revenue for development",
        ],
        "body": """### Economic benefits
Urban areas contribute a **large share of GDP** with factories, offices, and ports. Specialised workers and infrastructure raise **productivity**.

### Social benefits
Access to **schools, colleges, specialist doctors**, and emergency services is usually better than in remote villages.

### Innovation
Cities concentrate talent—research labs, startups, and creative industries flourish through **agglomeration** (clustering).""",
        "explanation": "Well-planned cities are engines of opportunity—urbanization is not automatically bad.",
        "teacherTip": "Contrast GDP share of urban India with rural share to show economic importance.",
        "examTip": "Balance answers: list positive impacts before problems for full marks.",
    },
    {
        "title": "Impacts of Urbanization — Negative",
        "summary": "Rapid unplanned urbanization brings slums, pollution, traffic, crime, and strain on water and sanitation.",
        "bullets": [
            "Slums lack secure tenure, clean water, and drainage",
            "Air and noise pollution from vehicles and industry",
            "Traffic jams and long commutes waste time and fuel",
            "Solid waste and sewage overwhelm municipal systems",
            "Social inequality between gated communities and poor settlements",
        ],
        "body": """### Environmental stress
More vehicles and factories → **smog**, greenhouse gases, and heat islands.

### Housing crisis
When migrants arrive faster than affordable homes are built, **squatter settlements** spread on marginal land.

### Infrastructure gap
Pipes, power lines, and buses may serve planned colonies but not informal areas.

**Urban sprawl** eats farmland around city edges without proper planning.""",
        "explanation": "Problems arise when population grows faster than planning and investment—not because cities exist.",
        "teacherTip": "Show photos of slum vs planned township—discuss why the gap exists.",
        "examTip": "Use terms: slum, congestion, pollution, infrastructure—examiners expect precise vocabulary.",
    },
    {
        "title": "Slums and Urban Housing",
        "summary": "Slums are densely populated informal settlements lacking adequate services; they grow when low-income migrants cannot afford formal housing.",
        "bullets": [
            "Dharavi (Mumbai) is one of Asia's largest slum areas",
            "Kutcha houses, narrow lanes, shared taps and toilets",
            "Informal sector jobs sustain many slum households",
            "Eviction and redevelopment remain sensitive policy issues",
            "Affordable housing schemes aim to reduce homelessness",
        ],
        "body": """A **slum** typically has overcrowding, poor sanitation, and insecure land rights—but also vibrant **informal economies**.

**Causes:** rural migration + high land prices + weak rental laws.

**Government responses:**
- **Slum rehabilitation** (new flats for residents)
- **PMAY** (Pradhan Mantri Awas Yojana) for affordable homes
- **Regularisation** of services where relocation is impossible

Sustainable cities must upgrade slums **in situ** where possible rather than only demolishing them.""",
        "explanation": "Slums are a symptom of housing shortage, not laziness—policy must address supply and rights.",
        "teacherTip": "Discuss dignity and livelihoods—slum dwellers are workers, not 'problems'.",
        "examTip": "Name a case study (Dharavi) and list three slum characteristics.",
    },
    {
        "title": "Smart Cities and Urban Planning",
        "summary": "Smart cities use technology, efficient transport, and citizen services to make urban life sustainable; master plans guide land use and infrastructure.",
        "bullets": [
            "India's Smart Cities Mission (2015) targets 100 cities",
            "ICT for traffic control, e-governance, and utility monitoring",
            "Mixed land use, metro rail, and bus rapid transit (BRT)",
            "Master plans zone residential, commercial, and green areas",
            "Disaster-ready drainage and earthquake-resistant buildings",
        ],
        "body": """### Smart city ingredients
- **Digital infrastructure** (broadband, sensors)
- **Efficient mobility** (metros, cycling lanes, pedestrian zones)
- **Clean energy and waste management**
- **Participatory governance** (citizen feedback apps)

### Urban planning tools
**Master plans**, **zoning laws**, and **building bye-laws** control height, density, and open spaces.

Without planning, cities grow **haphazardly**—smart planning prevents future crises.""",
        "explanation": "Smart does not mean fancy gadgets only—it means efficient, inclusive, resilient cities.",
        "teacherTip": "Invite students to audit one local service (water, waste) and suggest a 'smart' fix.",
        "examTip": "List Smart City features: technology + transport + sustainability + governance.",
    },
    {
        "title": "Sustainable Urban Development",
        "summary": "Sustainable cities balance growth with clean environment, social equity, and resources for future generations.",
        "bullets": [
            "SDG 11: make cities inclusive, safe, resilient, and sustainable",
            "Green buildings, solar power, and rainwater harvesting",
            "Public transport reduces fuel use and air pollution",
            "Urban green spaces and parks improve health and climate",
            "Decentralised jobs in tier-2 cities reduce megacity pressure",
        ],
        "body": """### Sustainability pillars
| Pillar | Urban action |
|--------|----------------|
| Economic | Green jobs, local enterprises |
| Social | Affordable housing, safe streets for all |
| Environmental | Waste recycling, clean rivers, low-carbon transport |

### Strategies
- **Compact cities** instead of endless sprawl
- **Transit-oriented development** near metro stations
- **Wetland and forest protection** within city regions
- **Regional planning** linking towns in clusters

Urbanization will continue—**sustainability** decides whether it becomes opportunity or crisis.""",
        "explanation": "Future cities must work for people and the planet—Class 8 students will live in these cities.",
        "teacherTip": "Link SDG 11 poster to local issues: waste, traffic, or flooding.",
        "examTip": "Suggest practical solutions: metro, trees, recycling—examiners reward applied answers.",
    },
]

HIGH_YIELD = [
    "Urbanization = rising share of population living in urban areas.",
    "Rural-urban migration is the main driver in developing countries.",
    "Push factors: poverty, drought, few rural jobs.",
    "Pull factors: jobs, education, healthcare, city lifestyle.",
    "Industrialisation concentrates factories and workers in cities.",
    "Megacity = over 10 million urban inhabitants.",
    "Mumbai, Delhi, Kolkata are Indian megacities.",
    "Slums = overcrowded informal settlements with poor services.",
    "Dharavi in Mumbai is a famous large slum area.",
    "Urban areas contribute a major share of national GDP.",
    "Congestion and traffic jams waste time and fuel.",
    "Air pollution from vehicles and industry harms health.",
    "Solid waste and sewage need proper municipal management.",
    "Urban sprawl consumes farmland around city edges.",
    "Informal sector employs many migrant workers.",
    "Smart Cities Mission targets technology-enabled efficient cities.",
    "Master plans guide zoning of residential and commercial land.",
    "Metro rail and BRT reduce private car dependence.",
    "Affordable housing schemes address shelter shortages.",
    "PMAY supports housing for economically weaker sections.",
    "SDG 11 promotes sustainable cities and communities.",
    "Green buildings use less energy and water.",
    "Public parks reduce heat and improve mental health.",
    "Circular migration: temporary city work with rural return.",
    "Step migration moves through intermediate towns.",
    "Urbanization increases demand for water and electricity.",
    "Gated communities highlight urban inequality.",
    "Slum rehabilitation provides alternative housing.",
    "Tier-2 cities can reduce pressure on megacities.",
    "Sustainable urbanization balances growth and environment.",
    "Census defines urban areas by population and administration.",
    "Natural increase in cities also adds to urban growth.",
]

MCQS = [
    M("Urbanization refers to:", ["Increase in rural population only", "Growth in proportion of people living in urban areas", "Decline of all cities", "Only construction of buildings"], 1, "Urbanization is the rising percentage of population in towns and cities.", exam="Define as proportion, not absolute count only."),
    M("The main cause of urbanization in India is:", ["Glaciation", "Rural-urban migration and industrial jobs", "Desert expansion", "Contour mapping"], 1, "People move to cities for work; industry concentrates in urban centres.", exam="Link migration + industrialisation."),
    M("A pull factor for urban migration is:", ["Drought in village", "Better wages in city", "Crop failure", "Small landholding"], 1, "Pull factors attract migrants toward urban opportunities.", exam="Pull = attraction."),
    M("A push factor from rural areas is:", ["Metro rail in city", "Universities in town", "Unemployment in village", "Shopping malls"], 2, "Lack of rural jobs pushes people toward cities.", exam="Push = repulsion."),
    combo2("Urbanization always improves living standards for everyone.", "Cities can have slums alongside skyscrapers.", 1, "Statement 1 is false; inequality persists. Statement 2 is true—dual urban reality.", exam="UPSC-style nuance."),
    M("A megacity has population:", ["Over 10 million", "Under 1000", "Exactly 1 lakh", "Only rural migrants"], 0, "Megacities exceed 10 million inhabitants.", exam="Know threshold."),
    M("Dharavi is associated with:", ["Large slum area in Mumbai", "Desert in Rajasthan", "Polar research", "Contour interval"], 0, "Dharavi is a major informal settlement in Mumbai.", exam="Indian case study."),
    M("Smart Cities Mission in India aims to:", ["Remove all villages", "Use technology for efficient sustainable urban services", "Stop migration", "Ban public transport"], 1, "Smart cities integrate ICT, mobility, and better governance.", exam="2015 mission—100 cities."),
    M("Urban sprawl means:", ["Compact high-rise core", "Unplanned spread of city into surrounding rural land", "Underground city only", "No growth"], 1, "Sprawl consumes farmland at city edges without compact planning.", exam="Environmental consequence."),
    M("Slums typically lack:", ["Adequate water, sanitation, and secure housing", "People", "Any employment", "Urban location"], 0, "Slums are defined by poor services and overcrowding.", exam="Three deficits: water, sewer, tenure."),
    M("Industrialisation contributes to urbanization by:", ["Creating urban factory jobs", "Eliminating all cities", "Increasing farm labour only", "Stopping transport"], 0, "Factories and services cluster in towns.", exam="Economic cause."),
    M("SDG 11 focuses on:", ["Sustainable cities and communities", "Ocean fishing only", "Mountain contours", "Polar ice"], 0, "UN Sustainable Development Goal 11 targets inclusive safe cities.", exam="Link sustainability to SDGs."),
    combo3("Public transport reduces air pollution.", "Urbanization increases demand for housing.", "Urbanization means zero rural population.", 3, "Statements 1 and 2 correct; rural population can still grow in absolute terms while urban share rises.", exam="Three-statement combo."),
    M("Informal sector in cities includes:", ["Street vending and daily-wage construction", "Only government offices", "Contour survey only", "Polar stations"], 0, "Informal jobs lack full regulation but sustain millions.", exam="Urban employment reality."),
    M("Master plan in urban planning is:", ["Long-term land-use and infrastructure blueprint", "School timetable", "River contour map", "Census form"], 0, "Master plans zone residential, commercial, and green areas.", exam="Planning tool."),
    M("Air pollution in cities mainly comes from:", ["Vehicles and industry", "Contour lines", "Grid references", "Census"], 0, "Fossil fuel combustion and dust cause smog.", exam="Environmental impact."),
    M("Affordable housing programmes address:", ["Shelter shortage for low-income groups", "Only luxury villas", "Rural census only", "Magnetic declination"], 0, "PMAY and similar schemes target EWS/LIG housing.", exam="Policy response."),
    M("Urban GDP share in India is:", ["Very small", "Large compared to rural contribution", "Zero", "Only from agriculture"], 1, "Cities generate a major portion of economic output.", exam="Positive economic impact."),
    M("Circular migration means:", ["Workers move to city temporarily then return", "Never leaving village", "Only permanent settlement", "Migration to moon"], 0, "Seasonal or contract workers may circulate between rural home and city.", exam="Migration pattern."),
    M("Traffic congestion increases:", ["Travel time and fuel consumption", "Clean air", "Farm output only", "Contour VI"], 0, "Jams waste resources and worsen pollution.", exam="Urban transport problem."),
    combo2("Green spaces in cities improve health and climate.", "Urbanization never causes environmental problems.", 0, "Statement 1 true; statement 2 false—pollution and waste are real challenges.", exam="Balance positive/negative."),
    M("Tier-2 cities can help by:", ["Absorbing migrants away from overcrowded metros", "Stopping all development", "Banning schools", "Removing water supply"], 0, "Regional urban network reduces megacity pressure.", exam="Planning strategy."),
    M("Zoning laws control:", ["Land use types in different city areas", "Birth rate only", "River colour on maps", "Magnetic north"], 0, "Zoning separates industrial, residential, and commercial zones.", exam="Urban regulation."),
    M("Urban heat island effect is:", ["City warmer than surrounding countryside", "Ice in city centre", "Only rural phenomenon", "Contour pattern"], 0, "Concrete and traffic trap heat in cities.", exam="Climate term."),
    M("Slum rehabilitation aims to:", ["Provide better housing to slum residents", "Remove all urban jobs", "Stop migration forever", "End all industry"], 0, "In-situ or relocation projects upgrade living conditions.", exam="Policy tool."),
    M("Metro rail benefits cities by:", ["Mass public transport reducing road congestion", "Increasing private car use only", "Eliminating all buses always", "Stopping urban growth"], 0, "Metros move many people efficiently on fixed routes.", exam="Smart mobility."),
    M("Urban inequality shows when:", ["Luxury housing exists beside poor settlements", "Everyone has identical income", "No migrants arrive", "Only farms exist"], 0, "Spatial segregation reflects income gaps.", exam="Social impact."),
    M("Mechanisation in agriculture can:", ["Reduce rural jobs and push migration to cities", "Stop urbanization", "Eliminate all cities", "Increase farm labour demand always"], 0, "Fewer farm jobs encourage rural out-migration.", exam="Rural push factor."),
    combo3("BRT can improve bus speed and reliability.", "All slums should be ignored.", "Rainwater harvesting saves urban water.", 3, "Statements 1 and 3 correct; slums need upgrading, not ignoring.", exam="Sustainable solutions combo."),
    M("Natural increase adds to urbanization when:", ["Births exceed deaths in cities", "Only elderly live in cities", "Death rate is zero everywhere", "No children born"], 0, "Urban natural growth supplements migration.", exam="Second component of urban growth."),
    M("Urbanization in developed countries historically followed:", ["Industrial Revolution and factory growth", "Only contour surveys", "Desertification", "No migration"], 0, "Europe and North America urbanized during industrialisation.", exam="Historical pattern."),
    M("Waste management crisis in cities leads to:", ["Landfills, pollution, and health risks", "Cleaner rivers always", "No problems", "More contour lines"], 0, "Poor collection and recycling overload cities.", exam="Environmental challenge."),
    M("Mixed land use in planning allows:", ["Homes, shops, and offices in same area reducing travel", "Only factories in residential streets", "No roads", "Ban on services"], 0, "Mixed use creates compact walkable neighbourhoods.", exam="Smart planning."),
    M("Port cities urbanize fast because of:", ["Trade, shipping, and related jobs", "No water access", "Only farming", "Contour intervals"], 0, "Coastal trade hubs attract population and industry.", exam="Geographic factor."),
    M("Urban flooding worsens when:", ["Drainage is blocked and wetlands built over", "Rain never falls", "Only rural areas flood", "Maps change scale"], 0, "Concrete surfaces and poor drains increase flood risk.", exam="Chennai/Mumbai flood link."),
    M("Gated communities illustrate:", ["Privatized security and services for wealthy residents", "Housing for all equally", "Rural settlement type", "Contour depression"], 0, "Gates highlight spatial inequality in cities.", exam="Social geography."),
    M("Transit-oriented development builds housing near:", ["Metro or rail stations", "Remote deserts", "Mountain peaks only", "Ocean trenches"], 0, "TOD reduces car dependence.", exam="Sustainable urban form."),
    combo2("Urbanization is linked to rural-urban migration.", "Urbanization means cities grow while rural areas may still exist.", 3, "Both statements are correct—urban share rises; villages remain.", exam="Concept clarity combo."),
    M("Informal settlements often grow on:", ["Marginal land near drains or railway lines", "Only government parks", "Protected forests always legally", "Ocean midpoints"], 0, "Poor migrants settle where land is unused or cheap.", exam="Slum geography."),
    M("Census helps urban planners by:", ["Providing population and housing data", "Drawing contour lines", "Measuring VI", "Setting magnetic declination"], 0, "Accurate counts guide infrastructure investment.", exam="Data for planning."),
    M("Decentralisation of industry to smaller towns can:", ["Reduce overcrowding in megacities", "Increase slums only", "Stop all urban growth", "Eliminate migration"], 0, "Regional balance spreads urban growth.", exam="Policy solution."),
    M("Urban green building features include:", ["Solar panels and efficient insulation", "More coal burning", "No windows", "Open sewage"], 0, "Green design cuts energy and water use.", exam="Sustainability."),
    M("Long commutes from suburbs indicate:", ["Urban sprawl and inadequate local jobs", "Perfect planning", "No transport need", "Rural life"], 0, "Workers travel far when housing is cheaper at fringe.", exam="Sprawl symptom."),
    M("Street vendors are part of:", ["Urban informal economy", "Contour survey", "Polar climate", "Census only"], 0, "Vending provides livelihood though often unregulated.", exam="Economic geography."),
    M("Smart city e-governance means:", ["Online services for permits and complaints", "No government", "Only paper forms", "Ban on internet"], 0, "Digital portals improve transparency and speed.", exam="ICT application."),
    combo3("Urban parks reduce heat island effect.", "All urbanization is unsustainable.", "Recycling reduces landfill pressure.", 3, "Statements 1 and 3 correct; planned urbanization can be sustainable.", exam="Evaluate sustainability."),
    M("Population of a city rising from 2 to 3 million shows:", ["Absolute urban growth", "De-urbanization", "Zero migration", "Only rural growth"], 0, "Absolute numbers increase though urbanization is also a ratio measure.", exam="Absolute vs proportion."),
    M("Kolkata grew historically as:", ["Colonial port and commercial hub", "Desert outpost", "Polar station", "Contour laboratory"], 0, "British-era trade and administration spurred growth.", exam="Historical urbanisation."),
    M("Bengaluru's growth is linked to:", ["IT and service sector employment", "Only coal mining", "Fishing in desert", "No jobs"], 0, "Tech parks pulled skilled and unskilled migrants.", exam="Modern Indian example."),
    M("Urban water crisis caused by:", ["Rising demand and leaky supply networks", "Too many contours", "Magnetic north shift", "Low birth rate"], 0, "Pipes, tanks, and conservation must match population.", exam="Infrastructure gap."),
    M("Night lights satellite images show:", ["Extent of urban built-up areas", "Contour intervals", "Birth rates", "Ocean salinity only"], 0, "Bright patches correlate with cities at night.", exam="Remote sensing link."),
    M("Haphazard urban growth lacks:", ["Proper zoning and infrastructure planning", "Any people", "Buildings", "Economic activity"], 0, "Unplanned expansion strains services.", exam="Planning failure."),
    M("Social sustainability in cities requires:", ["Safe inclusive neighbourhoods for all income groups", "Exclusion of migrants", "No public transport", "Only luxury housing"], 0, "Cities must work for poor and rich alike.", exam="SDG social pillar."),
    M("Urban renewal projects may:", ["Upgrade old city areas with new infrastructure", "Remove all residents without plan", "Stop education", "Ban hospitals"], 0, "Renewal can revitalise decaying cores if inclusive.", exam="Redevelopment term."),
    combo2("Public participation improves urban planning.", "Citizens should never give feedback on city projects.", 0, "Statement 1 true; participatory planning is a smart city principle.", exam="Governance combo."),
    M("Land prices rise in growing cities because:", ["Demand for central locations increases", "Land becomes unlimited", "No one wants city land", "Contour VI rises"], 0, "Scarcity near jobs and services raises rents.", exam="Economic pressure."),
    M("Squatter settlement means:", ["Informal housing without legal land title", "Official planned colony", "Rural village only", "Contour hill"], 0, "Squatters build without formal permission.", exam="Synonym for informal housing."),
    M("Urbanization rate is fastest today in:", ["Many African and Asian developing countries", "Only Antarctica", "Uninhabited deserts", "Deep ocean"], 0, "Africa and Asia are urbanizing rapidly from lower bases.", exam="Global pattern."),
    M("Delhi NCR illustrates:", ["Mega urban region spreading across state borders", "Single village", "Uninhabited area", "Only port trade"], 0, "National Capital Region links multiple cities.", exam="Indian mega-region."),
    M("Cycling lanes support:", ["Clean low-cost urban mobility", "More car traffic only", "Contour reading", "Census delay"], 0, "Non-motorised transport cuts pollution.", exam="Sustainable transport."),
    M("Urban crime pressure may rise when:", ["Rapid growth outpaces policing and youth jobs", "Planning is perfect", "No migration occurs", "Only elderly arrive"], 0, "Fast unplanned growth can strain social order.", exam="Social challenge."),
    combo3("Rain gardens absorb stormwater.", "Slums have no economic activity.", "Mixed-use zoning reduces travel.", 3, "Statements 1 and 3 correct; slums have active informal economies.", exam="Urban environment combo."),
    M("Primate city dominates a country when:", ["One city is vastly larger than others", "All cities equal size", "No urban areas exist", "Only villages exist"], 0, "Mumbai/Delhi dwarf many other Indian cities—primate pattern.", exam="Urban hierarchy."),
    M("Urban sustainability needs:", ["Economic, social, and environmental balance", "Only skyscrapers", "Ignoring poor", "Unlimited pollution"], 0, "Three pillars must be integrated.", exam="Triple bottom line."),
    M("Rural-urban fringe is:", ["Transition zone between city and countryside", "Ocean centre", "Mountain peak", "Contour saddle"], 0, "Fringe land faces development pressure.", exam="Urban geography term."),
    M("Smart water meters help by:", ["Detecting leaks and managing supply", "Increasing waste", "Stopping all water", "Drawing contours"], 0, "ICT improves utility efficiency.", exam="Smart utility."),
    M("Urbanization affects climate through:", ["Higher energy use and heat islands", "Cooling planet instantly", "No emissions", "Only rural changes"], 0, "Cities concentrate carbon-intensive activity.", exam="Global warming link."),
    M("Inclusive cities provide:", ["Services and rights to migrants and poor residents", "Benefits only to wealthy", "No public schools", "Ban on informal work without alternatives"], 0, "Inclusion prevents marginalization and unrest.", exam="Social policy."),
    combo2("Better rural jobs can slow excessive migration.", "Urbanization can never be managed.", 0, "Statement 1 true; balanced regional development is a management tool. Statement 2 false.", exam="Policy evaluation."),
    M("Bus Rapid Transit (BRT) features include:", ["Dedicated bus lanes and stations", "Only private cars", "Contour hachures", "Magnetic declination"], 0, "BRT mimics rail efficiency at lower cost.", exam="Transport solution."),
    M("Urban open markets support:", ["Local food supply and livelihoods", "Only export mining", "Contour surveys", "Polar research"], 0, "Markets are economic and social hubs.", exam="Urban function."),
    M("Future sustainable cities should prioritise:", ["Clean transport, affordable homes, and green spaces", "Uncontrolled sprawl", "Pollution", "Ignoring migrants"], 0, "Holistic planning for growing urban world.", exam="Forward-looking conclusion."),
]

TFS = [
    {"q": "Urbanization means an increase in the proportion of people living in urban areas.", "correct": "true", "just": "True. Urbanization is measured by rising urban population share."},
    {"q": "Better job opportunities in cities are a pull factor for migration.", "correct": "true", "just": "True. Higher wages and diverse jobs attract migrants to cities."},
    {"q": "Slums are formal housing estates with all modern amenities.", "correct": "false", "just": "False. Slums are informal overcrowded settlements lacking adequate services."},
    {"q": "Smart Cities Mission uses technology to improve urban services.", "correct": "true", "just": "True. ICT, mobility, and governance upgrades are core goals."},
    {"q": "Urbanization has no environmental impacts.", "correct": "false", "just": "False. Cities face pollution, waste, heat islands, and sprawl."},
    {"q": "Rural-urban migration contributes to urban growth.", "correct": "true", "just": "True. Migrants add to city population and labour force."},
    {"q": "A megacity has a population of over 10 million.", "correct": "true", "just": "True. Mumbai and Delhi qualify as megacities."},
    {"q": "Urban sprawl is compact planned growth at city centre.", "correct": "false", "just": "False. Sprawl is unplanned spread into surrounding rural fringe."},
    {"q": "SDG 11 promotes sustainable cities and communities.", "correct": "true", "just": "True. UN SDG 11 targets inclusive, safe, resilient cities."},
    {"q": "Public transport can help reduce urban air pollution.", "correct": "true", "just": "True. Buses, metros, and BRT cut private vehicle emissions."},
]

FILLS = [
    {"q": "Growth in the proportion of people living in cities is called ______.", "blank": "urbanization", "ans": "Urbanization is the rising urban share of total population."},
    {"q": "Overcrowded informal settlements with poor services are called ______.", "blank": "slums", "ans": "Slums lack adequate water, sanitation, and secure housing."},
    {"q": "India's programme for technology-enabled cities is the Smart ______ Mission.", "blank": "Cities", "ans": "Smart Cities Mission (2015) targets 100 Indian cities."},
    {"q": "Unplanned spread of urban areas into rural fringe is urban ______.", "blank": "sprawl", "ans": "Sprawl consumes farmland and lengthens commutes."},
    {"q": "UN Sustainable Development Goal ______ focuses on sustainable cities.", "blank": "11", "ans": "SDG 11: Sustainable Cities and Communities."},
]

MATCHES = [
    {"q": "Match urban terms:", "pairs": [{"left": "Urbanization", "right": "Rising urban population share"}, {"left": "Megacity", "right": "Over 10 million people"}, {"left": "Sprawl", "right": "City spreads outward"}, {"left": "Slum", "right": "Informal poor settlement"}], "ans": "Core urban vocabulary."},
    {"q": "Match causes:", "pairs": [{"left": "Industrial jobs", "right": "Pull factor"}, {"left": "Rural poverty", "right": "Push factor"}, {"left": "Better hospitals", "right": "Pull factor"}, {"left": "Drought", "right": "Push factor"}], "ans": "Push leaves rural; pull attracts urban."},
    {"q": "Match impacts:", "pairs": [{"left": "GDP growth", "right": "Positive"}, {"left": "Air pollution", "right": "Negative"}, {"left": "Universities", "right": "Positive"}, {"left": "Traffic jams", "right": "Negative"}], "ans": "Balance economic gains and problems."},
    {"q": "Match planning tools:", "pairs": [{"left": "Master plan", "right": "Long-term land use"}, {"left": "Zoning", "right": "Area use rules"}, {"left": "Metro rail", "right": "Mass transport"}, {"left": "BRT", "right": "Bus priority system"}], "ans": "Urban planning and mobility."},
    {"q": "Match Indian examples:", "pairs": [{"left": "Dharavi", "right": "Mumbai slum"}, {"left": "Bengaluru", "right": "IT hub"}, {"left": "Delhi NCR", "right": "Mega region"}, {"left": "Kolkata", "right": "Historic port city"}], "ans": "Indian urban case studies."},
    {"q": "Match sustainability:", "pairs": [{"left": "SDG 11", "right": "Sustainable cities"}, {"left": "Green building", "right": "Energy efficient"}, {"left": "Rainwater harvesting", "right": "Water saving"}, {"left": "Urban parks", "right": "Green space"}], "ans": "Environmental urban solutions."},
    {"q": "Match housing policy:", "pairs": [{"left": "PMAY", "right": "Affordable housing"}, {"left": "Slum rehab", "right": "Upgrade shelters"}, {"left": "Squatter", "right": "No legal title"}, {"left": "Gated community", "right": "Private enclave"}], "ans": "Housing types and programmes."},
    {"q": "Match migration links:", "pairs": [{"left": "Rural-urban", "right": "Village to city"}, {"left": "Circular", "right": "Temporary return"}, {"left": "Step", "right": "Through small towns"}, {"left": "Informal sector", "right": "Unregulated jobs"}], "ans": "Migration and urban labour."},
    {"q": "Match problems:", "pairs": [{"left": "Heat island", "right": "City warmer"}, {"left": "Flooding", "right": "Poor drainage"}, {"left": "Waste dump", "right": "Landfill pressure"}, {"left": "Inequality", "right": "Rich vs poor areas"}], "ans": "Urban environmental and social issues."},
    {"q": "Match smart city features:", "pairs": [{"left": "E-governance", "right": "Online services"}, {"left": "Smart meter", "right": "Utility monitoring"}, {"left": "TOD", "right": "Homes near transit"}, {"left": "Mixed land use", "right": "Live-work nearby"}], "ans": "Smart and compact city ideas."},
]

SHORTS = [
    {"q": "Define urbanization and give two causes.", "ans": "Urbanization is the **increase in the proportion of people living in urban areas**. Causes include **rural-urban migration** (push: few jobs; pull: city wages) and **industrialisation** concentrating factories and services in towns."},
    {"q": "Explain three problems caused by rapid urbanization.", "ans": "1. **Slums** and housing shortage. 2. **Air pollution** and traffic congestion from vehicles. 3. **Pressure on water, sewage, and waste** systems when infrastructure lags behind population growth."},
    {"q": "What is a smart city? List three features.", "ans": "A **smart city** uses technology and efficient planning for sustainable urban life. Features: **digital e-governance**, **efficient public transport** (metro/BRT), and **smart utilities** (water, waste, energy monitoring)."},
    {"q": "Distinguish between push and pull factors in urban migration.", "ans": "**Push factors** drive people from villages (poverty, drought, unemployment). **Pull factors** attract them to cities (jobs, education, healthcare, better amenities). Migration usually results from both."},
    {"q": "Suggest three measures for sustainable urban development.", "ans": "1. Expand **public transport** and green buildings. 2. Provide **affordable housing** and upgrade slums. 3. Protect **green spaces**, manage waste, and plan **compact cities** to limit sprawl (SDG 11)."},
]

MINDMAP = """flowchart TB
  ROOT[Urbanization]
  ROOT --> DEF[Definition]
  ROOT --> CAUSE[Causes]
  ROOT --> MIGRATE[Migration Link]
  ROOT --> POS[Positive Impacts]
  ROOT --> NEG[Negative Impacts]
  ROOT --> SLUM[Slums Housing]
  ROOT --> SMART[Smart Cities]
  ROOT --> SUST[Sustainability]
  DEF --> SHARE[Rising urban share]
  CAUSE --> PUSH[Push from rural]
  CAUSE --> PULL[Pull to city]
  CAUSE --> IND[Industrialisation]
  MIGRATE --> RU[Rural-urban stream]
  MIGRATE --> CIRC[Circular migration]
  POS --> GDP[Economic growth]
  POS --> SERV[Better services]
  NEG --> POLL[Pollution congestion]
  NEG --> SPRAWL[Urban sprawl]
  SLUM --> DAR[Dharavi example]
  SLUM --> PMAY[Affordable housing]
  SMART --> ICT[Digital governance]
  SMART --> METRO[Metro BRT]
  SUST --> SDG[SDG 11]
  SUST --> GREEN[Parks green buildings]"""

CHEATSHEET = [
    "Urbanization = rising urban population proportion.",
    "Main driver: rural-urban migration + city jobs.",
    "Push: poverty, drought, few rural jobs.",
    "Pull: wages, schools, hospitals, lifestyle.",
    "Megacity = 10+ million people.",
    "Mumbai, Delhi = Indian megacities.",
    "Slums = informal, overcrowded, poor services.",
    "Dharavi = major Mumbai slum case study.",
    "Urban sprawl = city spreads into farmland.",
    "Air pollution from traffic and industry.",
    "Congestion wastes time and fuel.",
    "Cities contribute large share of GDP.",
    "Informal sector = unregulated urban jobs.",
    "Smart Cities Mission: tech + efficient services.",
    "Master plan = long-term land-use blueprint.",
    "Zoning separates residential/commercial/industrial.",
    "Metro and BRT improve public transport.",
    "PMAY = affordable housing scheme.",
    "Slum rehabilitation upgrades shelters.",
    "SDG 11 = sustainable cities goal.",
    "Green buildings save energy and water.",
    "Urban parks reduce heat island effect.",
    "Tier-2 cities reduce metro pressure.",
    "Transit-oriented development near stations.",
    "Sustainable cities balance economy, society, environment.",
]

WORD_CARDS = [
    {"term": "Urbanization", "definition": "Increase in the proportion of population living in urban areas."},
    {"term": "Urban area", "definition": "Town or city with dense population and non-agricultural economy."},
    {"term": "Rural area", "definition": "Countryside with villages and mainly agricultural livelihoods."},
    {"term": "Megacity", "definition": "Metropolitan area with more than 10 million inhabitants."},
    {"term": "Metropolis", "definition": "Large principal city serving as a regional economic and cultural hub."},
    {"term": "Rural-urban migration", "definition": "Movement of people from villages to towns and cities."},
    {"term": "Push factor", "definition": "Condition in origin that drives people toward cities."},
    {"term": "Pull factor", "definition": "Urban advantage that attracts migrants."},
    {"term": "Slum", "definition": "Overcrowded informal settlement lacking adequate basic services."},
    {"term": "Squatter settlement", "definition": "Housing built without legal land ownership or planning permission."},
    {"term": "Informal sector", "definition": "Urban economic activity outside full government regulation."},
    {"term": "Urban sprawl", "definition": "Unplanned low-density expansion of city into surrounding areas."},
    {"term": "Suburb", "definition": "Residential area on the outskirts of a central city."},
    {"term": "Commute", "definition": "Regular travel between home and workplace, often causing congestion."},
    {"term": "Congestion", "definition": "Overcrowding of roads with slow traffic movement."},
    {"term": "Air pollution", "definition": "Harmful substances in urban air from vehicles and industry."},
    {"term": "Heat island", "definition": "Urban area significantly warmer than nearby rural land."},
    {"term": "Master plan", "definition": "Official long-term blueprint for city land use and infrastructure."},
    {"term": "Zoning", "definition": "Legal division of city into residential, commercial, and industrial zones."},
    {"term": "Smart city", "definition": "City using technology and data for efficient sustainable services."},
    {"term": "Smart Cities Mission", "definition": "Indian programme to develop 100 technology-enabled urban centres."},
    {"term": "E-governance", "definition": "Delivery of government services through digital platforms."},
    {"term": "BRT", "definition": "Bus Rapid Transit system with dedicated lanes and fast stations."},
    {"term": "Metro rail", "definition": "Urban electric railway for high-capacity mass transport."},
    {"term": "Transit-oriented development", "definition": "Compact mixed-use growth centred on public transport hubs."},
    {"term": "PMAY", "definition": "Pradhan Mantri Awas Yojana—affordable housing scheme for poor families."},
    {"term": "Slum rehabilitation", "definition": "Project replacing or upgrading informal settlements with better housing."},
    {"term": "SDG 11", "definition": "UN goal to make cities inclusive, safe, resilient, and sustainable."},
    {"term": "Sustainable urbanization", "definition": "City growth managed to protect environment and social equity."},
    {"term": "Primate city", "definition": "Dominant city much larger than the next biggest in a country."},
]

CH4 = {
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
