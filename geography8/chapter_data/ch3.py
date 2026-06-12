"""Chapter 3: Migration."""
from geography8.chapter_data.qgen import mcq, tf, fill, match, short, build_question_set


def _questions(ch):
    topic_id = ch["topicId"]
    mcqs = [
        mcq("", topic_id, 'Migration is best defined as:', [
        'Daily travel to school',
        'Movement across a boundary to settle',
        'Only international travel',
        'Tourism for one week',
    ], 1, 'Migration involves changing place of residence across a defined boundary.', exam_tip='Distinguish from commuting.', teacher_tip=''),
        mcq("", topic_id, 'Internal migration occurs:', [
        'Between two countries',
        'Within the same country',
        'Only from city to village',
        'Only for refugees',
    ], 1, 'Internal migration does not cross international borders.', exam_tip='Internal vs international.', teacher_tip=''),
        mcq("", topic_id, 'Emigration means:', [
        'Entering a country',
        'Leaving a country to live elsewhere',
        'Daily commuting',
        'Birth in a country',
    ], 1, 'Emigrant = one who exits their country.', exam_tip='Emigrate vs immigrate.', teacher_tip=''),
        mcq("", topic_id, 'A pull factor for migration is:', [
        'Unemployment in home area',
        'Better wages in destination',
        'War in home region',
        'Famine',
    ], 1, 'Pull factors attract migrants toward a new place.', exam_tip='Pull = attraction.', teacher_tip=''),
        mcq("", topic_id, 'A push factor for migration is:', [
        'Higher salary abroad',
        'Good universities elsewhere',
        'Drought destroying crops',
        'Job offer in city',
    ], 2, 'Drought pushes people away from rural homes.', exam_tip='Push = repulsion.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. All migration is permanent.\n2. Seasonal migration is temporary.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 1, 'Statement 1 false; seasonal workers return after harvest—temporary migration.', exam_tip='Duration types combo.', teacher_tip=''),
        mcq("", topic_id, 'Rural-urban migration mainly leads to:', [
        'Urbanisation',
        'Desertification',
        'Glaciation',
        'Deforestation only',
    ], 0, 'People moving to towns increases urban population share.', exam_tip='Link migration to urbanisation.', teacher_tip=''),
        mcq("", topic_id, 'Remittances are:', [
        'Taxes paid to government',
        'Money sent home by migrants',
        'Import duties',
        'Map measurements',
    ], 1, 'Remittances support families and national economy.', exam_tip='Major for India.', teacher_tip=''),
        mcq("", topic_id, 'Brain drain refers to:', [
        'Loss of skilled workers through emigration',
        'Drainage of rivers',
        'Urban sewage problem',
        'Migration of unskilled only',
    ], 0, 'Educated professionals leaving = brain drain.', exam_tip='Define with examples.', teacher_tip=''),
        mcq("", topic_id, 'Refugees migrate primarily due to:', [
        'Higher exam marks',
        'War, persecution, or disaster',
        'Tourism',
        'Shopping',
    ], 1, 'Forced migration from fear or violence.', exam_tip='Forced vs voluntary.', teacher_tip=''),
        mcq("", topic_id, 'Immigration means:', [
        'Leaving country',
        'Entering a country to live',
        'Moving within state only',
        'Seasonal farming',
    ], 1, 'Immigrant arrives in destination country.', exam_tip='Opposite of emigration.', teacher_tip=''),
        mcq("", topic_id, 'Chain migration happens when:', [
        'Migrants follow relatives or community members',
        'People move in winter only',
        'Only governments migrate',
        'Maps are chained',
    ], 0, 'Existing migrants help others relocate.', exam_tip='Social network effect.', teacher_tip=''),
        mcq("", topic_id, 'Which is international migration?', [
        'Village to Delhi',
        'Kerala nurse to UK hospital',
        'Home to school',
        'Floor to floor in building',
    ], 1, 'Crosses national border.', exam_tip='Apply definition.', teacher_tip=''),
        mcq("", topic_id, 'Gulf countries attract many migrants for:', [
        'Polar research only',
        'Construction and service jobs',
        'Farming in ice',
        'No employment',
    ], 1, 'Oil economies need labour from South Asia.', exam_tip='India-Gulf corridor.', teacher_tip=''),
        mcq("", topic_id, 'Counter-urbanisation is:', [
        'City to rural movement',
        'Rural to city only',
        'International only',
        'No migration',
    ], 0, 'Some move from crowded cities to quieter countryside.', exam_tip='Developed country trend.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Push factors include poverty.\n2. Pull factors include better jobs.\n3. Pull factors include earthquakes at home.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 2 correct; earthquakes are push factors.', exam_tip='Three-statement combo.', teacher_tip=''),
        mcq("", topic_id, 'Net migration is calculated as:', [
        'Births minus deaths',
        'Immigrants minus emigrants',
        'Emigrants minus immigrants',
        'Population divided by area',
    ], 1, 'Positive net migration increases population.', exam_tip='Formula.', teacher_tip=''),
        mcq("", topic_id, 'Seasonal migration is common among:', [
        'Agricultural labourers',
        'Permanent embassy staff only',
        'Mountain rocks',
        'Contour lines',
    ], 0, 'Harvest seasons create temporary labour demand.', exam_tip='Rural example.', teacher_tip=''),
        mcq("", topic_id, 'Brain circulation means:', [
        'Skilled returnees bring new knowledge home',
        'Water flow in brain',
        'Only permanent drain',
        'No return ever',
    ], 0, 'Return migration can benefit origin country.', exam_tip='Positive flip of brain drain.', teacher_tip=''),
        mcq("", topic_id, 'IDP (Internally Displaced Person) is:', [
        'Displaced within own country',
        'Always international migrant',
        'Tourist',
        'Emigrant to Mars',
    ], 0, 'Internal displacement without crossing border.', exam_tip='Forced migration type.', teacher_tip=''),
        mcq("", topic_id, 'Major effect of rural-urban migration on cities:', [
        'Labour supply and possible overcrowding',
        'No change',
        'Only decrease in population',
        'Elimination of slums',
    ], 0, 'Cities gain workers but may face housing pressure.', exam_tip='Destination impact.', teacher_tip=''),
        mcq("", topic_id, 'Origin area may benefit from migration through:', [
        'Remittances and reduced unemployment pressure',
        'Loss of all money',
        'No communication',
        'Automatic brain gain always',
    ], 0, 'Money sent home is a key benefit.', exam_tip='Origin positive.', teacher_tip=''),
        mcq("", topic_id, 'Voluntary migration is driven by:', [
        'Free choice for better opportunities',
        'Only government force',
        'Only natural disasters',
        'Mandatory military only',
    ], 0, 'Migrants choose to move for jobs, education, etc.', exam_tip='Voluntary vs forced.', teacher_tip=''),
        mcq("", topic_id, 'Which Indian state is known for high emigration and remittances?', [
        'Kerala',
        'Ladakh only',
        'No state',
        'Only desert states',
    ], 0, 'Kerala has large Gulf diaspora and remittance inflow.', exam_tip='Indian case study.', teacher_tip=''),
        mcq("", topic_id, 'Illegal migration lacks:', [
        'Proper visas or documents',
        'Any movement',
        'People',
        'Destinations',
    ], 0, 'Unauthorized border crossing or overstaying visas.', exam_tip='Policy issue.', teacher_tip=''),
        mcq("", topic_id, 'Diaspora refers to:', [
        'People living outside their homeland',
        'Only rivers',
        'Mountain peaks',
        'Contour lines',
    ], 0, 'Scattered community abroad maintaining ties.', exam_tip='Cultural geography.', teacher_tip=''),
        mcq("", topic_id, 'Environmental migration may follow:', [
        'Drought, floods, or rising sea level',
        'Only exam dates',
        'Map colours',
        'Contour VI',
    ], 0, 'Climate hazards displace populations.', exam_tip='Emerging category.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Migration changes population of both origin and destination.\n2. Migration has no demographic effect.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 0, 'Statement 1 true; migration alters numbers and age structure in both places.', exam_tip='Demographic impact combo.', teacher_tip=''),
        mcq("", topic_id, 'Young adults migrate more because:', [
        'They seek jobs and education',
        'They cannot walk',
        'Laws forbid old people',
        'Only children migrate',
    ], 0, 'Working-age mobility is highest.', exam_tip='Age selectivity.', teacher_tip=''),
        mcq("", topic_id, 'Destination country gains from skilled immigrants through:', [
        'Expertise and tax contributions',
        'Automatic unemployment',
        'Loss of all industry',
        'No benefit ever',
    ], 0, 'Skilled migrants fill labour gaps.', exam_tip='Brain gain for destination.', teacher_tip=''),
        mcq("", topic_id, 'Left-behind children in origin villages may face:', [
        'Care and education challenges',
        'No effect ever',
        'Automatic wealth',
        'Only urban schooling at home',
    ], 0, 'Family separation has social costs.', exam_tip='Social impact on origin.', teacher_tip=''),
        mcq("", topic_id, "Mumbai's growth was significantly aided by:", [
        'In-migration from other states',
        'Only emigration abroad',
        'No migration',
        'Polar settlement',
    ], 0, 'Megacity attracts rural and interstate migrants.', exam_tip='Indian urban example.', teacher_tip=''),
        mcq("", topic_id, 'Economic migration is mainly for:', [
        'Better wages and employment',
        'Religious festivals only',
        'Contour reading',
        'Map scale',
    ], 0, 'Livelihood is primary driver.', exam_tip='Migration motive.', teacher_tip=''),
        mcq("", topic_id, 'Social migration includes:', [
        'Joining family abroad',
        'Only war flight',
        'Only seasonal harvest',
        'Only brain drain',
    ], 0, 'Family reunion is a social pull factor.', exam_tip='Type of migration.', teacher_tip=''),
        mcq("", topic_id, 'Government can reduce excessive rural-urban drift by:', [
        'Rural job schemes and better village services',
        'Closing all cities',
        'Banning all travel',
        'Removing schools',
    ], 0, 'Balanced development reduces push pressure.', exam_tip='Policy solution.', teacher_tip=''),
        mcq("", topic_id, '3D jobs migrants often fill means:', [
        'Dirty, dangerous, difficult work',
        'Desk jobs only',
        'Director level posts',
        'No jobs',
    ], 0, 'Migrants take hard jobs locals may avoid.', exam_tip='Labour market term.', teacher_tip=''),
        mcq("", topic_id, 'Passport and visa rules mainly affect:', [
        'International migration',
        'Sleeping at home',
        'Local playground',
        'Contour spacing',
    ], 0, 'Legal control of cross-border movement.', exam_tip='Regulation.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Emigrants leave their country.\n2. Immigrants enter a new country.\n3. Emigrant and immigrant mean the same.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 2 correct; they are opposite directions.', exam_tip='Terminology combo.', teacher_tip=''),
        mcq("", topic_id, 'Forced migration includes:', [
        'Refugees fleeing conflict',
        'Optional holiday',
        'Daily commute',
        'Shopping trip',
    ], 0, 'No real choice—safety threatened.', exam_tip='Forced category.', teacher_tip=''),
        mcq("", topic_id, 'Remittances help origin country by:', [
        'Improving foreign exchange and family income',
        'Reducing all development',
        'Stopping education',
        'Eliminating farms',
    ], 0, 'Major economic inflow for India.', exam_tip='National impact.', teacher_tip=''),
        mcq("", topic_id, 'Urban slum growth is often linked to:', [
        'Rapid migration without affordable housing',
        'Underpopulation',
        'No in-migration',
        'Only emigration',
    ], 0, 'Housing supply lags behind migrant influx.', exam_tip='Urban challenge.', teacher_tip=''),
        mcq("", topic_id, 'Student migration is an example of:', [
        'Voluntary migration for education',
        'Forced refugee flow',
        'Seasonal harvest work',
        'Illegal only',
    ], 0, 'Students choose universities abroad.', exam_tip='Migration type.', teacher_tip=''),
        mcq("", topic_id, 'Skilled migration to USA from India often involves:', [
        'IT professionals and doctors',
        'Only unskilled only always',
        'No Indians',
        'Contour surveyors only',
    ], 0, 'Brain drain sectors include IT and health.', exam_tip='Brain drain examples.', teacher_tip=''),
        mcq("", topic_id, 'Migration affects sex ratio in origin when:', [
        'Mostly men migrate for work',
        'Only women migrate always',
        'No one migrates',
        'Maps change sex ratio',
    ], 0, 'Male-dominated labour migration skews ratios.', exam_tip='Demographic effect.', teacher_tip=''),
        mcq("", topic_id, 'Inter-state migration in India is:', [
        'Internal migration',
        'International',
        'Not migration',
        'Only tourism',
    ], 0, 'Within same country across state borders.', exam_tip='India internal example.', teacher_tip=''),
        mcq("", topic_id, 'Pull factor in cities includes:', [
        'Hospitals, schools, and entertainment',
        'Crop failure',
        'Village drought',
        'Lack of jobs at home',
    ], 0, 'Urban services attract migrants.', exam_tip='Urban pull list.', teacher_tip=''),
        mcq("", topic_id, 'Return migration can bring:', [
        'Skills, savings, and entrepreneurship',
        'Nothing useful',
        'Only maps',
        'Contour lines',
    ], 0, 'Returnees may invest in hometown businesses.', exam_tip='Brain circulation.', teacher_tip=''),
        mcq("", topic_id, 'War in a country creates:', [
        'Refugees and forced emigration',
        'No movement',
        'Only immigration to that country',
        'Seasonal farming only',
    ], 0, 'Conflict is a major push factor.', exam_tip='Current affairs link.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Brain drain always benefits the origin country.\n2. Brain drain can slow development in origin country.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 1, 'Statement 1 false; losing skilled workers hurts origin unless they return.', exam_tip='Brain drain evaluation.', teacher_tip=''),
        mcq("", topic_id, 'Temporary international workers may:', [
        'Return home after contract ends',
        'Never move',
        'Only migrate permanently always',
        'Only live in oceans',
    ], 0, 'Gulf contracts are often time-limited.', exam_tip='Temporary migration.', teacher_tip=''),
        mcq("", topic_id, 'Migration stream from Bihar to Delhi is:', [
        'Rural-urban internal migration',
        'International migration',
        'Not migration',
        'Counter-urbanisation',
    ], 0, 'Classic internal labour movement.', exam_tip='Indian corridor.', teacher_tip=''),
        mcq("", topic_id, 'Destination culture becomes diverse through:', [
        'Immigrant traditions and food',
        'Closing all borders',
        'Stopping languages',
        'Removing festivals',
    ], 0, 'Cultural exchange enriches cities.', exam_tip='Social benefit.', teacher_tip=''),
        mcq("", topic_id, 'Excessive emigration of doctors from a poor country is:', [
        'Brain drain',
        'Brain gain for origin',
        'Not migration',
        'Urbanisation only',
    ], 0, 'Health sector loses trained staff.', exam_tip='Sector example.', teacher_tip=''),
        mcq("", topic_id, 'Migration policy may include:', [
        'Work permits and quotas',
        'Contour intervals',
        'Map colours',
        'VI only',
    ], 0, 'Governments regulate who enters legally.', exam_tip='Policy tools.', teacher_tip=''),
        mcq("", topic_id, 'Famine acts as a:', [
        'Push factor',
        'Pull factor',
        'Map scale',
        'Grid reference',
    ], 0, 'Food shortage forces people to leave.', exam_tip='Push example.', teacher_tip=''),
        mcq("", topic_id, 'Better education abroad acts as:', [
        'Pull factor',
        'Push factor',
        'Death rate',
        'Birth rate',
    ], 0, 'Quality universities attract students.', exam_tip='Pull example.', teacher_tip=''),
        mcq("", topic_id, 'Labour shortage in origin after migration shows:', [
        'Negative demographic/economic effect',
        'No effect',
        'Automatic doubling of workers',
        'Only urban effect',
    ], 0, 'Too many workers leave farms or clinics.', exam_tip='Origin negative.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Remittances support rural families.\n2. All migration is forced.\n3. Migration can worsen urban overcrowding.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 3 correct; much migration is voluntary.', exam_tip='Mixed impacts combo.', teacher_tip=''),
        mcq("", topic_id, "Dubai's economy relies heavily on:", [
        'Immigrant labour force',
        'No workers',
        'Only local population always',
        'Contour farming',
    ], 0, 'Majority population may be foreign-born workers.', exam_tip='Gulf case study.', teacher_tip=''),
        mcq("", topic_id, 'Migration is one component of population change along with:', [
        'Births and deaths',
        'Only map reading',
        'Only rainfall',
        'Only soil types',
    ], 0, 'Total change = natural increase + net migration.', exam_tip='Demographic equation.', teacher_tip=''),
        mcq("", topic_id, 'Step migration often moves through:', [
        'Intermediate towns before big city',
        'Directly to moon',
        'Only one village',
        'No stages',
    ], 0, 'Migrants may stop at smaller urban centres first.', exam_tip='Migration pattern.', teacher_tip=''),
        mcq("", topic_id, 'Political persecution pushes people to seek:', [
        'Asylum in safer countries',
        'Contour maps',
        'Higher VI',
        'Only rural life',
    ], 0, 'Human rights refugees flee persecution.', exam_tip='Forced migration.', teacher_tip=''),
        mcq("", topic_id, 'Migrants sending money home is called:', [
        'Remittance flow',
        'Brain drain',
        'Urbanisation',
        'Census',
    ], 0, 'Financial lifeline for many families.', exam_tip='Economic term.', teacher_tip=''),
        mcq("", topic_id, 'Urban employers often depend on migrant labour for:', [
        'Construction, transport, and domestic work',
        'No roles',
        'Only government jobs',
        'Polar research',
    ], 0, 'Informal sector relies on migrants.', exam_tip='Economic role.', teacher_tip=''),
        mcq("", topic_id, 'Reducing brain drain requires:', [
        'Better careers and research at home',
        'Banning all education',
        'Closing universities',
        'Forcing emigration',
    ], 0, 'Retain talent with opportunity.', exam_tip='Policy response.', teacher_tip=''),
        mcq("", topic_id, 'Migration statistics help planners to:', [
        'Forecast housing, schools, and transport needs',
        'Draw brown contours',
        'Measure VI',
        'Find magnetic north',
    ], 0, 'Urban planning uses migration data.', exam_tip='Applied planning.', teacher_tip=''),
        mcq("", topic_id, 'Guest workers in Gulf states are mostly:', [
        'International temporary labour migrants',
        'Permanent citizens only',
        'Not migrants',
        'Contour surveyors',
    ], 0, 'Contracts for fixed-term employment abroad.', exam_tip='Gulf migration model.', teacher_tip=''),
        mcq("", topic_id, 'Migration from village to nearby small town first is:', [
        'Step migration',
        'Brain drain',
        'Counter-urbanisation',
        'Emigration abroad only',
    ], 0, 'Gradual move through intermediate settlements.', exam_tip='Migration pattern.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Pull factors include better job opportunities.\n2. Push factors include natural disasters at home.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 3, 'Both statements are correct—classic push-pull framework.', exam_tip='UPSC-style combo.', teacher_tip=''),
        mcq("", topic_id, 'Origin village sex ratio may skew when:', [
        'Most working-age men migrate',
        'Only elderly migrate',
        'No one migrates',
        'Maps are redrawn',
    ], 0, 'Male labour migration leaves more women and elderly at home.', exam_tip='Demographic consequence.', teacher_tip=''),
    ]
    tfs = [
        tf("", topic_id, 'Immigration means entering a country to live.', 'true', 'True. Immigrants arrive in the destination country.'),
        tf("", topic_id, 'Push factors attract people to a new destination.', 'false', 'False. Push factors drive people away from origin; pull factors attract.'),
        tf("", topic_id, 'Brain drain is the emigration of highly skilled workers.', 'true', 'True. Doctors, engineers, and scientists leaving constitute brain drain.'),
        tf("", topic_id, 'All migration is permanent.', 'false', 'False. Seasonal and temporary contract migration are common.'),
        tf("", topic_id, 'Remittances are money sent home by migrants.', 'true', 'True. They support families and boost foreign exchange.'),
        tf("", topic_id, 'Rural-urban migration increases urbanisation.', 'true', 'True. People moving to cities raises the urban population share.'),
        tf("", topic_id, 'Refugees are voluntary economic migrants.', 'false', 'False. Refugees flee war or persecution—forced migration.'),
        tf("", topic_id, 'Internal migration stays within the same country.', 'true', 'True. No international border is crossed.'),
        tf("", topic_id, 'Net migration equals immigrants minus emigrants.', 'true', 'True. Positive net migration adds to population.'),
        tf("", topic_id, 'Migration has no effect on origin or destination areas.', 'false', 'False. Both regions experience economic and social changes.'),
    ]
    fills = [
        fill("", topic_id, 'People who leave their country are called ______.', 'emigrants', 'Emigrants emigrate from origin country.'),
        fill("", topic_id, 'People who enter a country to settle are called ______.', 'immigrants', 'Immigrants immigrate into destination.'),
        fill("", topic_id, 'Factors that drive people away from home are ______ factors.', 'push', 'Push factors include poverty, war, and drought.'),
        fill("", topic_id, 'Money sent home by migrants is called ______.', 'remittances', 'Remittances support families and national economy.'),
        fill("", topic_id, 'Emigration of skilled professionals is called brain ______.', 'drain', 'Brain drain.'),
    ]
    matches = [
        match("", topic_id, 'Match migration terms:', [{"left": 'Emigration', "right": 'Leaving country'}, {"left": 'Immigration', "right": 'Entering country'}, {"left": 'Remittance', "right": 'Money sent home'}, {"left": 'Diaspora', "right": 'Community abroad'}], 'Basic migration vocabulary.'),
        match("", topic_id, 'Match factor types:', [{"left": 'Unemployment', "right": 'Push'}, {"left": 'Better wages', "right": 'Pull'}, {"left": 'War', "right": 'Push'}, {"left": 'Universities', "right": 'Pull'}], 'Push repels; pull attracts.'),
        match("", topic_id, 'Match migration types:', [{"left": 'Village to Mumbai', "right": 'Rural-urban'}, {"left": 'India to UAE', "right": 'International'}, {"left": 'Harvest labour', "right": 'Seasonal'}, {"left": 'Refugee flight', "right": 'Forced'}], 'Classify by route and cause.'),
        match("", topic_id, 'Match impacts on origin:', [{"left": 'Remittances', "right": 'Positive'}, {"left": 'Labour shortage', "right": 'Negative'}, {"left": 'Separated families', "right": 'Social cost'}, {"left": 'Brain drain', "right": 'Skill loss'}], 'Mixed origin effects.'),
        match("", topic_id, 'Match impacts on destination:', [{"left": 'Labour supply', "right": 'Economic gain'}, {"left": 'Cultural diversity', "right": 'Social gain'}, {"left": 'Slum growth', "right": 'Challenge'}, {"left": 'Job competition', "right": 'Tension'}], 'Destination gains and problems.'),
        match("", topic_id, 'Match examples:', [{"left": 'Kerala', "right": 'High remittances'}, {"left": 'Gulf', "right": 'Labour destination'}, {"left": 'Bihar-Delhi', "right": 'Internal stream'}, {"left": 'UK hospitals', "right": 'Nurse migration'}], 'Indian migration corridors.'),
        match("", topic_id, 'Match duration:', [{"left": 'Permanent', "right": 'Long-term settlement'}, {"left": 'Seasonal', "right": 'Temporary harvest'}, {"left": 'Contract', "right": 'Fixed-term abroad'}, {"left": 'Daily commute', "right": 'Not migration'}], 'Duration classification.'),
        match("", topic_id, 'Match brain drain sectors:', [{"left": 'IT', "right": 'Software engineers'}, {"left": 'Health', "right": 'Doctors/nurses'}, {"left": 'Research', "right": 'Scientists'}, {"left": 'Returnees', "right": 'Brain circulation'}], 'Skilled migration fields.'),
        match("", topic_id, 'Match regulation:', [{"left": 'Passport', "right": 'Identity for travel'}, {"left": 'Visa', "right": 'Entry permission'}, {"left": 'Work permit', "right": 'Legal employment'}, {"left": 'Illegal entry', "right": 'No documents'}], 'Legal migration tools.'),
        match("", topic_id, 'Match concepts:', [{"left": 'IDP', "right": 'Displaced internally'}, {"left": 'Refugee', "right": 'Cross-border forced'}, {"left": 'Counter-urbanisation', "right": 'City to rural'}, {"left": 'Chain migration', "right": 'Follow relatives'}], 'Advanced migration terms.'),
    ]
    shorts = [
        short("", topic_id, 'Distinguish between emigration and immigration.', "Emigration means leaving one's country to live elsewhere (emigrant exits). Immigration means entering another country to settle (immigrant arrives). They describe the same move from opposite viewpoints."),
        short("", topic_id, 'Explain push and pull factors with one example each.', 'Push factors drive people away from origin, e.g. drought destroying crops. Pull factors attract to destination, e.g. better paid jobs in a city. Migration usually results from both.'),
        short("", topic_id, 'What is brain drain and how does it affect India?', 'Brain drain is emigration of highly educated/skilled workers. India loses doctors, engineers, and IT professionals to countries offering higher pay and research facilities, reducing skilled workforce at home though remittances and returnees partly offset losses.'),
        short("", topic_id, 'Give three effects of rural-urban migration on cities.', 'Cities gain labour for construction and services; face overcrowding, slums, and traffic congestion; and experience pressure on water, schools, and hospitals if planning lags behind migrant influx.'),
        short("", topic_id, 'How do remittances benefit the origin region?', 'Remittances raise family income, fund education and housing, reduce poverty, and add to national foreign exchange. They can improve living standards in villages even when workers are abroad.'),
    ]
    return build_question_set(3, topic_id, mcqs, tfs, fills, matches, shorts)


CHAPTER = {
    "topics": [
    {
        "title": 'What Is Migration?',
        "summary": 'Migration is the movement of people from one place to another to settle temporarily or permanently.',
        "bullets": [
        'Differs from daily commuting or short visits',
        'Can be internal (within country) or international (across borders)',
        'May be voluntary or forced',
        'Temporary migrants include seasonal workers and refugees in camps',
        'Permanent migrants change long-term residence',
    ],
        "body": """**Migration** means crossing a defined boundary to live elsewhere. It is a major component of **population change** along with births and deaths.

**Internal migration** moves people within the same country (e.g. village to city).
**International migration** crosses national borders (e.g. India to UAE for work).

Migration reshapes population distribution, culture, economy, and cities.""",
        "explanation": 'Migration = change of usual residence across a boundary, not a day trip.',
        "teacherTip": 'Ask students if they know families who migrated—link concept to lived experience.',
        "examTip": 'Define migration and distinguish from circulation/commuting.',
    },
    {
        "title": 'Types of Migration',
        "summary": 'Migration is classified by distance, direction, duration, and cause.',
        "bullets": [
        'Rural to urban (most common in developing countries)',
        'Urban to rural (counter-urbanisation in some developed areas)',
        'International labour migration and student migration',
        'Forced migration: refugees fleeing war or persecution',
        'Seasonal migration for harvest or tourism work',
    ],
        "body": """| Type | Example |
|------|---------|
| Internal | Bihar to Delhi for work |
| International | Nurse from Kerala to UK |
| Voluntary | Job or education |
| Forced | Refugees from conflict |
| Seasonal | Farm labour during harvest |

**Emigration** = leaving a country; **Immigration** = entering a country.""",
        "explanation": 'Classify migration by where, why, and how long.',
        "teacherTip": 'Sort newspaper headlines into migration types.',
        "examTip": 'Give one example for each type in long answers.',
    },
    {
        "title": 'Push and Pull Factors',
        "summary": 'People leave places due to push factors and are attracted by pull factors.',
        "bullets": [
        'Push: unemployment, poverty, war, famine, natural disaster',
        'Pull: jobs, higher wages, education, safety, better services',
        'Push and pull work together in migration decisions',
        'Family links and chain migration reinforce movement',
        'Government policy can push or pull (restrictions or incentives)',
    ],
        "body": """**Push factors** drive people **away** from origin (lack of jobs, drought, conflict).

**Pull factors** attract people **toward** destination (factories, universities, peace).

Example: A farmer migrates from drought-hit village (**push**) to city for construction work (**pull**).""",
        "explanation": 'Every migration story has reasons to leave and reasons to arrive.',
        "teacherTip": 'Two-column chart: push on left, pull on right with local examples.',
        "examTip": 'Never list only pulls—ICSE expects both sides.',
    },
    {
        "title": 'Rural-Urban Migration',
        "summary": 'Movement from villages to towns and cities is the dominant migration stream in India and much of the developing world.',
        "bullets": [
        'Causes: lack of rural jobs, low farm income, drought, better city services',
        'Young adults migrate most frequently',
        'Results in urbanisation and growth of slums if housing lags',
        'Remittances sent home support rural families',
        'Cities gain labour but face congestion and pressure on water',
    ],
        "body": """**Rural-urban migration** fuels **urbanisation**. Migrants seek **manufacturing**, **services**, and **education**.

**Positive:** labour supply, remittances, cultural exchange.
**Negative:** overcrowding, inadequate housing, strain on transport and sanitation.

Planning **affordable housing** and **rural development** can balance flows.""",
        "explanation": 'Rural-urban shift is the main migration story in Class 8 Indian geography.',
        "teacherTip": 'Discuss remittance economy in Kerala or UP-Bihar-Delhi corridor.',
        "examTip": 'List causes (push/pull) and effects on both village and city.',
    },
    {
        "title": 'International Migration',
        "summary": 'People cross borders for work, study, family reunion, or asylum.',
        "bullets": [
        'Gulf countries attract construction and service workers from South Asia',
        'Developed countries attract skilled professionals and students',
        'Remittances are major income for countries like India and Philippines',
        'Border controls, visas, and passports regulate movement',
        'Diaspora communities maintain cultural ties abroad',
    ],
        "body": """**International migrants** face **passport/visa** rules. **Labour migration** to the **Gulf** and **West** is significant for India.

**Remittances** = money sent home by migrants—supports families and national foreign exchange.

**Brain drain** (next topic) is a special form of skilled international emigration.""",
        "explanation": 'International migration links countries economically and culturally.',
        "teacherTip": 'Map major migration corridors on a world map.',
        "examTip": 'Mention remittances when writing on international migration from India.',
    },
    {
        "title": 'Brain Drain',
        "summary": 'Brain drain is the emigration of highly educated and skilled workers from their home country.',
        "bullets": [
        'Doctors, engineers, IT professionals, and scientists often move abroad',
        'Causes: better pay, research facilities, quality of life, political stability',
        'Origin country loses skilled human capital',
        'Destination country gains expertise cheaply',
        'Brain gain possible when migrants return with skills (brain circulation)',
    ],
        "body": """**Brain drain** hurts developing nations that invest in education but lose graduates to richer countries.

**India** sees IT professionals and nurses migrate to the USA, UK, Canada, and Gulf.

**Solutions:** better jobs at home, research funding, return incentives, and diaspora engagement.""",
        "explanation": "Brain drain = loss of 'best minds'; not all migration is brain drain—only skilled outflow.",
        "teacherTip": 'Debate: brain drain vs opportunity for individuals.',
        "examTip": 'Define brain drain and give Indian examples (IT, medicine).',
    },
    {
        "title": 'Impacts of Migration on Origin',
        "summary": 'Sending areas experience population loss, remittances, and social change.',
        "bullets": [
        'Population decreases, especially working-age adults and males',
        'Remittances reduce poverty and fund education',
        'Left-behind elderly and children face care challenges',
        'Skilled emigration slows development (brain drain)',
        "Some villages become 'empty' of youth",
    ],
        "body": """**Origin areas** lose workers but may gain **money** and **ideas**.

**Positive:** remittances, new skills when migrants return, reduced local unemployment pressure.
**Negative:** labour shortage in farms, separated families, loss of educated youth.""",
        "explanation": 'Effects on origin are mixed—economic gain vs social and demographic loss.',
        "teacherTip": 'Case study: remittance houses in Kerala or Punjab villages.',
        "examTip": 'Balance positive and negative impacts on source region.',
    },
    {
        "title": 'Impacts of Migration on Destination',
        "summary": 'Receiving areas gain labour and diversity but may face integration and infrastructure challenges.',
        "bullets": [
        'Labour supply for industry, construction, and services',
        'Cultural diversity and new cuisines, festivals, ideas',
        'Pressure on housing, schools, and hospitals if rapid',
        'Sometimes social tension or competition for jobs',
        'Migrants fill jobs locals may not want (3D jobs: dirty, dangerous, difficult)',
    ],
        "body": """**Destination regions** grow faster with migrant labour. **Cities** like Mumbai, London, and Dubai depend on migrants.

**Challenges:** slums, discrimination, language barriers, illegal migration issues.

**Policy:** registration, work permits, and inclusive urban planning help manage impacts.""",
        "explanation": 'Destinations need migrants for growth but must plan for housing and services.',
        "teacherTip": 'Discuss how migrants contribute to city economies.',
        "examTip": 'Separate economic benefits from social challenges in answers.',
    },
],
    "highYieldFacts": [
    'Migration is movement across a boundary to settle temporarily or permanently.',
    'Internal migration stays within one country; international crosses borders.',
    'Emigration = leaving a country; Immigration = entering a country.',
    'Push factors drive people away from origin.',
    'Pull factors attract people to destination.',
    'Rural-urban migration is the main stream in developing countries.',
    'Remittances are money sent home by migrants.',
    'Brain drain = emigration of highly skilled workers.',
    'Refugees migrate due to war, persecution, or disaster—forced migration.',
    'Seasonal migration follows harvest or tourism seasons.',
    'Net migration = immigrants − emigrants.',
    'Chain migration occurs when earlier migrants sponsor relatives.',
    'Gulf countries attract many South Asian labour migrants.',
    'India is a major remittance-receiving country.',
    'Urbanisation is accelerated by rural-urban migration.',
    'Young adults migrate more than elderly.',
    'Counter-urbanisation = movement from city to countryside (developed nations).',
    'Illegal migration lacks official documents or visas.',
    'Diaspora = community living outside homeland.',
    'Brain circulation = skilled return migration with new expertise.',
    'Migration affects age and sex structure of both regions.',
    'Slums often grow when urban migration outpaces housing.',
    'Government visas regulate international migration.',
    'IDPs are displaced within their own country.',
    'Economic migration seeks better jobs and wages.',
    'Social migration joins family or community abroad.',
    'Environmental migration follows drought, flood, or sea-level rise.',
    'Mumbai and Delhi grew partly through in-migration.',
    'Kerala has high emigration and remittance inflows.',
    'Balanced regional development can reduce excessive migration pressure.',
],
    "questions": _questions,
    "mindmap": """flowchart TB
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
  DEST --> SLUM[Overcrowding]""",
    "cheatsheet": [
    'Migration = move across boundary to settle.',
    'Internal = within country; international = across borders.',
    'Emigrant leaves; immigrant arrives.',
    'Push = leave (poverty, war, drought).',
    'Pull = attract (jobs, education, safety).',
    'Rural-urban = main stream in India.',
    'Remittances = money sent home.',
    'Brain drain = skilled emigration.',
    'Refugees = forced migration.',
    'Seasonal = temporary harvest work.',
    'Net migration = immigrants − emigrants.',
    'Kerala = high remittances.',
    'Gulf = major labour destination.',
    'Chain migration follows relatives.',
    'IDP = displaced inside country.',
    'Counter-urbanisation = city to rural.',
    'Voluntary vs forced migration.',
    'Diaspora = community abroad.',
    'Brain circulation = skilled return.',
    'Slums linked to rapid urban in-migration.',
    'Passport/visa regulate international moves.',
    '3D jobs = dirty, dangerous, difficult.',
    'Origin gains remittances, loses labour.',
    'Destination gains workers, may overcrowd.',
    'Balance rural development to reduce drift.',
],
    "wordCards": [
    {
        "term": 'Migration',
        "definition": 'Movement of people across a boundary to settle temporarily or permanently.',
    },
    {
        "term": 'Emigration',
        "definition": "Leaving one's country to live in another.",
    },
    {
        "term": 'Immigration',
        "definition": 'Entering a foreign country to settle.',
    },
    {
        "term": 'Internal migration',
        "definition": 'Movement within the same country.',
    },
    {
        "term": 'International migration',
        "definition": 'Movement across national borders.',
    },
    {
        "term": 'Push factor',
        "definition": 'Condition that drives people away from an area.',
    },
    {
        "term": 'Pull factor',
        "definition": 'Condition that attracts people to an area.',
    },
    {
        "term": 'Rural-urban migration',
        "definition": 'Movement from countryside to towns and cities.',
    },
    {
        "term": 'Remittance',
        "definition": 'Money earned by migrants and sent to family at home.',
    },
    {
        "term": 'Brain drain',
        "definition": 'Emigration of highly educated and skilled workers.',
    },
    {
        "term": 'Brain circulation',
        "definition": 'Return of skilled migrants bringing new knowledge home.',
    },
    {
        "term": 'Refugee',
        "definition": 'Person forced to flee country due to war or persecution.',
    },
    {
        "term": 'Forced migration',
        "definition": 'Movement compelled by danger or disaster, not free choice.',
    },
    {
        "term": 'Voluntary migration',
        "definition": 'Movement chosen freely for better opportunities.',
    },
    {
        "term": 'Seasonal migration',
        "definition": 'Temporary move linked to seasons, e.g. harvest labour.',
    },
    {
        "term": 'Net migration',
        "definition": 'Immigrants minus emigrants in a period.',
    },
    {
        "term": 'Diaspora',
        "definition": 'Community of people living outside their homeland.',
    },
    {
        "term": 'Chain migration',
        "definition": 'Migration encouraged by relatives already at destination.',
    },
    {
        "term": 'Counter-urbanisation',
        "definition": 'Movement from cities to rural or small-town areas.',
    },
    {
        "term": 'IDP',
        "definition": 'Internally Displaced Person—forced to move within own country.',
    },
    {
        "term": 'Asylum',
        "definition": 'Protection granted to refugees by another country.',
    },
    {
        "term": 'Visa',
        "definition": 'Official permission to enter or stay in a country.',
    },
    {
        "term": 'Work permit',
        "definition": 'Legal authorisation for a foreigner to work in a country.',
    },
    {
        "term": 'Illegal migration',
        "definition": 'Crossing borders or working without proper documents.',
    },
    {
        "term": 'Step migration',
        "definition": 'Movement to destination in stages through intermediate places.',
    },
    {
        "term": 'Labour migration',
        "definition": 'Movement primarily to find employment.',
    },
    {
        "term": 'Environmental migration',
        "definition": 'Movement caused by natural disasters or climate hazards.',
    },
    {
        "term": 'Emigrant',
        "definition": 'Person who leaves their country of origin.',
    },
    {
        "term": 'Immigrant',
        "definition": 'Person who arrives to live in a new country.',
    },
    {
        "term": '3D jobs',
        "definition": 'Dirty, dangerous, and difficult jobs often filled by migrants.',
    },
],
}
