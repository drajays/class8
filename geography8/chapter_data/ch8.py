"""Chapter 8: Human Resources in India."""
from geography8.chapter_data.qgen import mcq, tf, fill, match, short, build_question_set


def _questions(ch):
    topic_id = ch["topicId"]
    mcqs = [
        mcq("", topic_id, 'Human resources refer to:', [
        'Only the number of people',
        'People with knowledge, skills and health',
        'Natural resources only',
        'Machines and tools',
    ], 1, 'Human resources are people with their knowledge, skills, health and abilities that contribute to development.', exam_tip='Definition-based MCQ is common.', teacher_tip='Use full definition for accuracy.'),
        mcq("", topic_id, 'A large population becomes an asset when it is:', [
        'Only urban',
        'Educated, healthy and skilled',
        'Rural and traditional',
        'Dependent on agriculture',
    ], 1, 'Population turns into human resources only when people are educated, healthy and skilled.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Human capital is created through investment in:', [
        'Only buildings',
        'Education, health and training',
        'Imports and exports',
        'Mineral extraction alone',
    ], 1, 'Human capital is built by investing in education, health care, nutrition and skills.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Skilled labour is best described as workers who:', [
        'Need no training',
        'Have specialized education or training',
        'Only do farm work',
        'Work without wages',
    ], 1, 'Skilled workers possess training or education that enables specialized tasks.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which of the following is an example of unskilled labour?', [
        'Doctor',
        'Electrician',
        'Manual loader',
        'Engineer',
    ], 2, 'Unskilled labour involves tasks requiring minimal training, such as manual loading.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Semi-skilled workers generally:', [
        'Need no tools',
        'Have some training but not advanced qualifications',
        'Only work in offices',
        'Are always unemployed',
    ], 1, 'Semi-skilled workers require some training, like drivers or machine operators.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Health is a component of human resources because it:', [
        'Reduces productivity',
        'Increases efficiency and work capacity',
        'Has no link with economy',
        'Only affects children',
    ], 1, 'Healthy people are more productive and can work efficiently, supporting growth.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is NOT a health indicator?', [
        'Life expectancy',
        'Infant mortality rate',
        'Maternal health',
        'Latitude',
    ], 3, 'Latitude is a physical factor; health indicators include life expectancy and IMR.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Education improves human resources by:', [
        'Reducing knowledge',
        'Raising productivity and innovation',
        'Only increasing population size',
        'Replacing health care',
    ], 1, 'Education builds skills and productivity, enabling better jobs and innovation.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Literacy in India is calculated for population aged:', [
        '0-6 years',
        '7 years and above',
        '10 years and above',
        '18 years and above',
    ], 1, 'Literacy is measured for population aged 7 and above who can read and write.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, "As per Census 2011, India's literacy rate is about:", [
        '54%',
        '74%',
        '84%',
        '94%',
    ], 1, 'Census 2011 reported a literacy rate of about 74%.', exam_tip='Use approximate value in MCQs.', teacher_tip=''),
        mcq("", topic_id, 'The state with the highest literacy rate in India is:', [
        'Bihar',
        'Kerala',
        'Rajasthan',
        'Odisha',
    ], 1, 'Kerala has the highest literacy rate among Indian states.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Sex ratio is defined as the number of:', [
        'Males per 1000 females',
        'Females per 1000 males',
        'Children per 1000 adults',
        'Workers per 1000 population',
    ], 1, 'Sex ratio measures females per 1000 males.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, "Census 2011 recorded India's sex ratio as:", [
        '933',
        '943',
        '953',
        '963',
    ], 1, 'The 2011 Census recorded a sex ratio of 943 females per 1000 males.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The Census of India is conducted every:', [
        '5 years',
        '10 years',
        '12 years',
        '20 years',
    ], 1, 'Census is a decennial exercise conducted every 10 years.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The 2011 Census of India was the:', [
        '10th',
        '12th',
        '15th',
        '18th',
    ], 2, 'The 2011 Census was the 15th census in India.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Population density means:', [
        'Population growth per year',
        'Population per square kilometre',
        'Total population only',
        'Birth rate per 1000',
    ], 1, 'Population density is the number of people per unit area.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which state has the highest population density?', [
        'Madhya Pradesh',
        'Bihar',
        'Himachal Pradesh',
        'Rajasthan',
    ], 1, 'Bihar has the highest population density among Indian states.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The Northern Plains are densely populated mainly because:', [
        'They are arid deserts',
        'They have fertile soil and water',
        'They are extremely cold',
        'They lack transport',
    ], 1, 'Fertile soil, flat land and abundant water make the plains densely populated.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which region is sparsely populated due to harsh climate and rugged relief?', [
        'Ganga Plains',
        'Himalayas',
        'Coastal Kerala',
        'Punjab Plains',
    ], 1, 'The Himalayas have rugged relief and cold climate, leading to low density.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The Thar Desert is sparsely populated mainly due to:', [
        'Heavy rainfall',
        'Arid climate and scarce water',
        'High industrialisation',
        'Dense forests',
    ], 1, 'The Thar has low rainfall and scarce water, limiting settlement.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is a physical factor affecting population distribution?', [
        'Industries',
        'Trade',
        'Relief and climate',
        'Market size',
    ], 2, 'Relief and climate are physical factors shaping settlement.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is an economic factor affecting population distribution?', [
        'Soil fertility',
        'Availability of water',
        'Industrial development',
        'Latitude',
    ], 2, 'Industries and jobs attract population to certain regions.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Political stability affects population distribution because it:', [
        'Discourages settlement',
        'Encourages safe settlement and investment',
        'Has no impact',
        'Only changes climate',
    ], 1, 'Stable governance and security attract people and businesses.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Occupational structure refers to the distribution of workers among:', [
        'Cities and villages',
        'Primary, secondary and tertiary sectors',
        'States and districts',
        'Age groups',
    ], 1, 'Occupational structure shows how workers are spread across economic sectors.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Primary sector activities include:', [
        'Banking and insurance',
        'Manufacturing and construction',
        'Agriculture and fishing',
        'Software services',
    ], 2, 'Primary sector involves extraction of natural resources like agriculture and fishing.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Secondary sector includes:', [
        'Mining, farming',
        'Manufacturing and construction',
        'Transport and trade',
        'Education and health',
    ], 1, 'Secondary activities process raw materials in factories or construction.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Tertiary sector includes:', [
        'Farming',
        'Manufacturing',
        'Services like trade and transport',
        'Mining',
    ], 2, 'Tertiary activities provide services such as transport, trade and education.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'India still has the largest share of workers in the:', [
        'Primary sector',
        'Secondary sector',
        'Tertiary sector',
        'Quaternary sector',
    ], 0, "A large share of India's workforce is still in agriculture (primary sector).", exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'As economies develop, the share of employment in the tertiary sector:', [
        'Declines',
        'Increases',
        'Disappears',
        'Has no change',
    ], 1, 'Development usually shifts workers toward services.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Migration from rural to urban areas is often driven by:', [
        'Push factors like unemployment',
        'Only climate change',
        'Absence of services in cities',
        'High rural wages',
    ], 0, 'Lack of jobs and poverty push people out of rural areas.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is a pull factor for migration?', [
        'Lack of schools',
        'Better wages and services',
        'Drought',
        'Crop failure',
    ], 1, 'Cities attract migrants with jobs, wages and services.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Disguised unemployment is commonly found in:', [
        'High-tech industries',
        'Agriculture with excess workers',
        'Air transport',
        'Banking',
    ], 1, 'Many people work on farms though fewer could do the same work.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Underemployment means:', [
        'No work at all',
        "Working below one's capacity or skill level",
        'Having two full-time jobs',
        'Only seasonal work',
    ], 1, 'Underemployment is when workers are not fully utilized.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which age group is generally considered working-age in India?', [
        '0-14 years',
        '15-59 years',
        '60+ years',
        '0-6 years',
    ], 1, 'Working-age population is usually 15-59 years.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Dependency ratio refers to:', [
        'Workers per sq km',
        'Dependents relative to working-age population',
        'Population growth rate',
        'Urban population share',
    ], 1, 'Dependency ratio compares dependents to the working population.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Demographic dividend is possible when:', [
        'Population is aging rapidly',
        'Working-age population is large and skilled',
        'Birth rate is zero',
        'Only services exist',
    ], 1, 'A large, skilled working-age share can boost growth.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Human resource development aims to:', [
        'Reduce education spending',
        'Improve health, education and skills',
        'Increase desert area',
        'Stop migration permanently',
    ], 1, 'HRD improves the quality of people through education, health and skills.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Skill India programme was launched in:', [
        '2005',
        '2010',
        '2015',
        '2020',
    ], 2, 'Skill India was launched in 2015 to improve employability.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Sarva Shiksha Abhiyan focuses on:', [
        'Higher education only',
        'Universal elementary education',
        'Industrial training',
        'Only sports education',
    ], 1, 'SSA aims at universal elementary education.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The mid-day meal scheme mainly aims to:', [
        'Build highways',
        'Improve nutrition and attendance',
        'Reduce rainfall',
        'Promote mining',
    ], 1, 'Mid-day meals improve nutrition and school attendance.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Female education affects human resources by:', [
        'Lowering health indicators',
        'Improving family health and child care',
        'Reducing literacy',
        'Preventing skill development',
    ], 1, 'Educated women enhance family health and social development.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Urbanisation in India as per Census 2011 is about:', [
        '15%',
        '31%',
        '51%',
        '71%',
    ], 1, "Around 31% of India's population was urban in 2011.", exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Areas with rich minerals often become populous because they:', [
        'Have no jobs',
        'Attract mining and industry',
        'Are always deserts',
        'Lack transport',
    ], 1, 'Resource-rich areas attract industries and workers.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which of the following is a service activity?', [
        'Farming',
        'Textile manufacturing',
        'Banking',
        'Iron ore mining',
    ], 2, 'Banking is a tertiary sector service.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which sector uses raw materials to make finished goods?', [
        'Primary',
        'Secondary',
        'Tertiary',
        'Quaternary',
    ], 1, 'Secondary sector includes manufacturing and processing.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Population distribution in India is called uneven because:', [
        'People live only in cities',
        'Some regions are densely populated and others sparse',
        'Climate is uniform everywhere',
        'Only one state is populated',
    ], 1, 'India has dense plains and sparse mountains and deserts.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Climate affects population distribution because:', [
        'Moderate climate supports agriculture and settlement',
        'All climates are equally attractive',
        'Rainfall reduces settlement',
        'Only temperature matters',
    ], 0, 'Moderate climate and adequate rainfall attract settlement.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Transport networks affect population distribution by:', [
        'Reducing all settlements',
        'Providing access and jobs',
        'Removing services',
        'Blocking trade',
    ], 1, 'Better transport attracts industries and people.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which of the following regions is densely populated?', [
        'Western Himalayas',
        'Ganga-Brahmaputra plains',
        'Thar Desert',
        'Kutch salt desert',
    ], 1, 'The Ganga-Brahmaputra plains are fertile and densely populated.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is a correct statement?', [
        'Population density is higher in deserts',
        'Coastal plains attract settlement due to trade and ports',
        'Mountains always have high density',
        'Water availability is irrelevant',
    ], 1, 'Coastal plains attract population due to ports, trade and fishing.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The tertiary sector includes:', [
        'Education and health services',
        'Crop cultivation',
        'Mining',
        'Forestry',
    ], 0, 'Education and health are service sector activities.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Brain drain refers to:', [
        'Migration of unskilled workers',
        'Migration of skilled professionals to other regions/countries',
        'Seasonal migration only',
        'Return migration',
    ], 1, 'Brain drain is the out-migration of skilled human resources.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Balanced regional development helps by:', [
        'Increasing migration pressure',
        'Reducing regional inequalities and forced migration',
        'Making deserts larger',
        'Stopping education',
    ], 1, 'Balanced development spreads opportunities and reduces distress migration.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which statement is correct about occupational structure?', [
        'It is fixed forever',
        'It changes with economic development',
        'It depends only on climate',
        'It ignores services',
    ], 1, 'Occupational structure shifts as economies develop.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The largest employer in India remains:', [
        'Agriculture',
        'Finance',
        'Software industry',
        'Space research',
    ], 0, 'Agriculture still employs the largest share of workers.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which of the following best shows improvement in human resources?', [
        'Higher dropout rates',
        'Better health, literacy and skills',
        'Lower school access',
        'Increased malnutrition',
    ], 1, 'Improved health, literacy and skills indicate better human resources.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Population becomes a liability when:', [
        'It is educated and skilled',
        'It is uneducated and unhealthy',
        'It is economically productive',
        'It is balanced in age structure',
    ], 1, 'Uneducated and unhealthy population increases dependency.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'A demographic dividend is possible if:', [
        'Youth lack skills',
        'Jobs and skills match the young population',
        'Birth rate is zero',
        'Education is ignored',
    ], 1, 'The dividend requires skilled youth and adequate employment.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which of the following is NOT a push factor for migration?', [
        'Poverty',
        'Unemployment',
        'Drought',
        'Better wages in cities',
    ], 3, 'Better wages are a pull factor, not a push factor.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which scheme focuses on skill development of youth?', [
        'Skill India',
        'Operation Flood',
        'Green Revolution',
        'Blue Revolution',
    ], 0, 'Skill India focuses on training youth for employability.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'A high literacy gap between males and females suggests:', [
        'Gender equality',
        'Human resource inequality',
        'Balanced development',
        'Higher productivity',
    ], 1, 'Literacy gap signals unequal human resource development.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Improved sanitation contributes to human resources by:', [
        'Increasing disease',
        'Reducing illness and improving productivity',
        'Lowering school attendance',
        'Reducing life expectancy',
    ], 1, 'Sanitation reduces disease and boosts productivity.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The main role of vocational training is to:', [
        'Increase theoretical knowledge only',
        'Provide job-oriented skills',
        'Replace schooling',
        'Reduce employment',
    ], 1, 'Vocational training prepares people for specific jobs.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which pair is correctly matched?', [
        'Primary sector - banking',
        'Secondary sector - manufacturing',
        'Tertiary sector - farming',
        'Primary sector - insurance',
    ], 1, 'Manufacturing is a secondary sector activity.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Census data helps in human resource planning by providing information on:', [
        'Occupation, literacy and migration',
        'Only rainfall',
        'Only minerals',
        'Only temperature',
    ], 0, 'Census provides essential socio-economic data for planning.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which statement about urbanisation is correct?', [
        'Urbanisation reduces service sector jobs',
        'Urbanisation increases demand for services',
        'Urbanisation stops migration',
        'Urbanisation is unrelated to occupation',
    ], 1, 'Urban growth expands service sector needs and employment.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, "India's human resources improve when:", [
        'Health and education spending increases',
        'Schools close',
        'Sanitation declines',
        'Skill training reduces',
    ], 0, 'Investment in health and education improves human capital.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which activity belongs to the primary sector?', [
        'Teaching',
        'Mining',
        'Banking',
        'Software services',
    ], 1, 'Mining is a primary activity involving extraction.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Human resources are considered dynamic because they:', [
        'Cannot be changed',
        'Can be improved through training and education',
        'Only depend on climate',
        'Are fixed by birth',
    ], 1, 'Human resources can be developed with education and health care.', exam_tip='', teacher_tip=''),
    ]
    tfs = [
        tf("", topic_id, 'Human resources are only the total number of people in a country.', 'False', 'Human resources refer to people with knowledge, skills and health.'),
        tf("", topic_id, 'Skilled labour generally earns higher wages than unskilled labour.', 'True', 'Skill and training improve productivity and earnings.'),
        tf("", topic_id, 'Health is unrelated to productivity.', 'False', 'Health directly affects work capacity and efficiency.'),
        tf("", topic_id, 'Literacy is calculated for population aged 7 years and above.', 'True', 'Census literacy uses age 7+ as the base.'),
        tf("", topic_id, 'Population distribution in India is uniform across all regions.', 'False', 'India has dense plains and sparse mountains/deserts.'),
        tf("", topic_id, 'Relief and climate are physical factors affecting distribution.', 'True', 'They influence settlement and agriculture.'),
        tf("", topic_id, 'Primary sector includes manufacturing and construction.', 'False', 'Manufacturing and construction belong to the secondary sector.'),
        tf("", topic_id, 'Tertiary sector includes services like trade, transport and education.', 'True', 'Services are part of the tertiary sector.'),
        tf("", topic_id, 'Disguised unemployment is common in agriculture.', 'True', 'Excess workers share limited farm output.'),
        tf("", topic_id, 'Skill development is a key part of human resource development.', 'True', 'Training improves employability and productivity.'),
    ]
    fills = [
        fill("", topic_id, 'Human resources become an asset when people are healthy, educated and _____.', 'skilled', 'Skills convert population into productive human resources.'),
        fill("", topic_id, 'Population density is the number of people per square _____.', 'kilometre', 'Density is measured per square kilometre.'),
        fill("", topic_id, 'The Census of India is conducted every _____ years.', '10', 'Census is a decennial exercise.'),
        fill("", topic_id, 'The sector that includes manufacturing and construction is the _____ sector.', 'secondary', 'Secondary sector processes raw materials.'),
        fill("", topic_id, 'The state with the highest population density is _____.', 'Bihar', 'Bihar records the highest density among states.'),
    ]
    matches = [
        match("", topic_id, 'Match sector with example:', [{"left": 'Primary', "right": 'Fishing'}, {"left": 'Secondary', "right": 'Steel manufacturing'}, {"left": 'Tertiary', "right": 'Banking'}, {"left": 'Quaternary', "right": 'Research'}], 'Primary-fishing; Secondary-steel; Tertiary-banking; Quaternary-research'),
        match("", topic_id, 'Match factor with type:', [{"left": 'Relief', "right": 'Physical'}, {"left": 'Climate', "right": 'Physical'}, {"left": 'Industry', "right": 'Economic'}, {"left": 'Political stability', "right": 'Social-political'}], 'Relief-physical; Climate-physical; Industry-economic; Stability-social'),
        match("", topic_id, 'Match region with density:', [{"left": 'Ganga Plains', "right": 'High density'}, {"left": 'Himalayas', "right": 'Low density'}, {"left": 'Thar Desert', "right": 'Low density'}, {"left": 'Coastal Plains', "right": 'High density'}], 'Ganga-high; Himalayas-low; Thar-low; Coastal-high'),
        match("", topic_id, 'Match term with definition:', [{"left": 'Human capital', "right": 'Skills and knowledge of people'}, {"left": 'Literacy', "right": 'Ability to read and write'}, {"left": 'Migration', "right": 'Movement of people'}, {"left": 'Occupational structure', "right": 'Distribution of workers by sector'}], 'Human capital-skills; Literacy-read/write; Migration-movement; Occupational structure-sector distribution'),
        match("", topic_id, 'Match unemployment type:', [{"left": 'Disguised', "right": 'Excess workers on farms'}, {"left": 'Seasonal', "right": 'Work only in certain months'}, {"left": 'Frictional', "right": 'Between jobs'}, {"left": 'Structural', "right": 'Skill mismatch'}], 'Disguised-excess; Seasonal-months; Frictional-between jobs; Structural-skill mismatch'),
        match("", topic_id, 'Match scheme with purpose:', [{"left": 'Skill India', "right": 'Skill training'}, {"left": 'SSA', "right": 'Elementary education'}, {"left": 'Mid-day meal', "right": 'Nutrition and attendance'}, {"left": 'NSDC', "right": 'Skill ecosystem'}], 'Skill India-training; SSA-elementary; Mid-day meal-nutrition; NSDC-skill'),
        match("", topic_id, 'Match indicator with aspect:', [{"left": 'IMR', "right": 'Infant deaths per 1000 births'}, {"left": 'Life expectancy', "right": 'Average years of life'}, {"left": 'Sex ratio', "right": 'Females per 1000 males'}, {"left": 'Literacy rate', "right": 'Population able to read/write'}], 'IMR-infant deaths; Life expectancy-years; Sex ratio-females; Literacy-read/write'),
        match("", topic_id, 'Match sector with activity:', [{"left": 'Primary', "right": 'Mining'}, {"left": 'Secondary', "right": 'Construction'}, {"left": 'Tertiary', "right": 'Transport'}, {"left": 'Quaternary', "right": 'IT services'}], 'Primary-mining; Secondary-construction; Tertiary-transport; Quaternary-IT'),
        match("", topic_id, 'Match factor with example:', [{"left": 'Water availability', "right": 'River valleys'}, {"left": 'Climate', "right": 'Moderate temperature'}, {"left": 'Industry', "right": 'Industrial corridors'}, {"left": 'Transport', "right": 'Port cities'}], 'Water-river valleys; Climate-moderate; Industry-corridors; Transport-ports'),
        match("", topic_id, 'Match term with description:', [{"left": 'Demographic dividend', "right": 'Benefit of large skilled workforce'}, {"left": 'Brain drain', "right": 'Out-migration of skilled people'}, {"left": 'Underemployment', "right": 'Working below capacity'}, {"left": 'Urbanisation', "right": 'Growth of city population'}], 'Dividend-skilled workforce; Brain drain-skilled outflow; Underemployment-below capacity; Urbanisation-city growth'),
    ]
    shorts = [
        short("", topic_id, 'Define human resources. How do they differ from population?', 'Human resources are people with knowledge, skills, health and abilities that contribute to development. Population refers only to the number of people. Population becomes human resources when it is educated, healthy and skilled.'),
        short("", topic_id, 'Differentiate between skilled and unskilled labour with examples.', 'Skilled labour requires education or training and performs specialized tasks (doctor, electrician). Unskilled labour needs minimal training and relies on physical effort (manual loader, basic farm worker). Skilled workers are usually more productive and better paid.'),
        short("", topic_id, 'Explain why health is a key component of human resources.', 'Health increases work capacity, reduces absenteeism and improves learning ability. Good nutrition, sanitation and health care raise productivity. Poor health raises dependency and reduces economic output, so health investment builds human capital.'),
        short("", topic_id, 'State the main physical and economic factors affecting population distribution in India.', 'Physical factors: relief, climate, soil fertility and water availability. Economic factors: industries, transport networks, markets and urban services. These factors make plains and coasts dense while mountains and deserts remain sparse.'),
        short("", topic_id, 'What is occupational structure? Briefly describe the three sectors.', 'Occupational structure shows how workers are distributed among primary, secondary and tertiary activities. Primary includes agriculture, fishing and mining; secondary includes manufacturing and construction; tertiary includes services like trade, transport, education and health.'),
    ]
    return build_question_set(8, topic_id, mcqs, tfs, fills, matches, shorts)


CHAPTER = {
    "topics": [
    {
        "title": 'What are Human Resources?',
        "summary": 'Human resources are the people of a country with their knowledge, skills, health and abilities that drive economic and social development.',
        "bullets": [
        'Population becomes a resource when it is educated, healthy and productive',
        'Human resources are dynamic and can be improved through training',
        'People are both producers and consumers in the economy',
        'Human capital is built by investment in health, education and skills',
        'Quality of human resources matters more than mere numbers',
    ],
        "body": 'Human resources are the people of a nation who possess knowledge, skills, health and abilities that enable them to work and contribute to development. A large population is not automatically an asset; it becomes a resource when it is educated, healthy and skilled. Human resources are dynamic because education, training and experience can improve productivity. In geography, we study how people interact with their environment and how their abilities shape economic growth. Human capital is created when society invests in education, health care, nutrition and skill development.',
        "explanation": 'ICSE questions often contrast population (numbers) with human resources (quality). Always mention knowledge, skills and health together to show you understand the full concept.',
        "teacherTip": 'Ask students to list people around them whose skills add value: doctors, farmers, teachers, mechanics.',
        "examTip": 'Define human resources and add one line on human capital investment for full marks.',
    },
    {
        "title": 'Skilled vs Unskilled Labour',
        "summary": 'Skilled labour requires training or education; unskilled labour needs minimal training and relies mainly on physical effort.',
        "bullets": [
        'Skilled workers: trained, qualified, higher productivity and wages',
        'Unskilled workers: little training, lower wages, higher vulnerability',
        'Semi-skilled workers need some training (drivers, machine operators)',
        'Skill development reduces unemployment and underemployment',
        'India has a large informal workforce needing upskilling',
    ],
        "body": 'Skilled labour refers to workers who have received education or training to perform specialized tasks, such as electricians, nurses, programmers or machinists. Unskilled labour involves tasks that require little training and depend mostly on physical effort, such as manual loading or basic farm work. Semi-skilled workers need some training but not extensive qualifications. A country with more skilled workers has higher productivity and innovation. Therefore, skill development and vocational training are essential to convert a large workforce into a productive human resource base.',
        "explanation": 'Use the contrast of training, wages and productivity. In exams, provide examples of each category.',
        "teacherTip": 'Use a quick chart with three columns: unskilled, semi-skilled, skilled with examples.',
        "examTip": 'Mention vocational training as a bridge from unskilled to skilled labour.',
    },
    {
        "title": 'Health as Human Resource',
        "summary": 'Health is a basic component of human resource quality because a healthy population works efficiently and learns better.',
        "bullets": [
        'Good health reduces absenteeism and increases productivity',
        'Nutrition, sanitation and safe drinking water sustain health',
        'Public health infrastructure includes hospitals, PHCs and immunisation',
        'Health indicators: life expectancy, IMR and maternal health',
        'Health spending is an investment in human capital',
    ],
        "body": 'Health is a crucial part of human resource quality. Healthy people can work longer hours, learn new skills and contribute effectively to the economy. Malnutrition, disease and poor sanitation reduce productivity and raise dependency. Access to safe drinking water, immunisation and public health facilities like Primary Health Centres (PHCs) are essential. Health indicators such as life expectancy, infant mortality rate and maternal health show the quality of health services. Therefore, investment in health is as important as investment in education.',
        "explanation": 'Always connect health to productivity and human capital. ICSE short answers expect the link between health and efficiency.',
        "teacherTip": 'Show how a minor illness can lead to loss of school days and work hours.',
        "examTip": 'Write one health indicator (IMR or life expectancy) in long answers.',
    },
    {
        "title": 'Education as Human Resource',
        "summary": 'Education improves knowledge, skills and values, raising productivity, innovation and employability.',
        "bullets": [
        'Literacy enables participation in modern economic life',
        'Education raises productivity and occupational mobility',
        'Female education improves family health and child care',
        'Formal and vocational education together build employable skills',
        'Government schemes expand access to schooling',
    ],
        "body": 'Education transforms people into productive human resources by improving knowledge, skills and values. Literacy empowers citizens to access information, use technology and participate in economic activities. Education also increases occupational mobility, allowing people to move from low-paid work to skilled jobs. Female education has multiple benefits: improved family health, lower infant mortality and better child education. Along with formal schooling, vocational training provides job-oriented skills. Initiatives such as Sarva Shiksha Abhiyan and the mid-day meal scheme aim to expand access and reduce dropouts.',
        "explanation": "For ICSE, highlight education's role in productivity and social development. Mention at least one government scheme.",
        "teacherTip": 'Link education to better decision-making, not just earning power.',
        "examTip": 'State that literacy is for population aged 7 and above.',
    },
    {
        "title": 'Population Distribution in India',
        "summary": "India's population is unevenly distributed, with dense concentration in plains and sparse settlements in mountains and deserts.",
        "bullets": [
        'Northern Plains and coastal regions are densely populated',
        'Himalayas, Thar Desert and interior plateaus are sparsely populated',
        'Population distribution depends on physical and economic factors',
        'Population density = population per unit area',
        'Bihar and West Bengal show very high densities',
    ],
        "body": "Population distribution refers to how people are spread across the country's land area. In India, distribution is highly uneven. The Northern Plains, coastal belts and major urban-industrial regions have very high densities due to fertile soil, flat land, water availability and jobs. In contrast, the Himalayas, Thar Desert, and parts of the Deccan Plateau have low densities because of rugged terrain, aridity or poor soils. Population density is measured as the number of people per square kilometre. Bihar has the highest population density among Indian states.",
        "explanation": 'Use map-based reasoning: plains and coasts are crowded; mountains and deserts are sparse.',
        "teacherTip": 'Ask students to compare their state with Bihar and Rajasthan in terms of density.',
        "examTip": 'Define population density before explaining distribution.',
    },
    {
        "title": 'Factors Affecting Distribution',
        "summary": 'Relief, climate, soil, water, minerals, transport and economic opportunities shape population distribution.',
        "bullets": [
        'Physical: relief, climate, soil fertility, water availability',
        'Economic: industries, trade, transport and urban markets',
        'Social-political: peace, security and stable governance',
        'Historical factors: old trade routes and colonial port cities',
        'Resource-rich areas attract migration and settlement',
    ],
        "body": 'Population distribution is influenced by several factors. Physical factors such as relief, climate, soil fertility and water availability are primary determinants. Plains with fertile soil and adequate water attract dense settlement, while mountains and deserts do not. Economic factors such as industrial development, transport networks and urban markets attract people by offering jobs and services. Social and political stability makes regions safer and more attractive. Historical trade routes and port cities also grew into large population centres. Thus, distribution reflects both natural and human factors.',
        "explanation": 'ICSE expects you to classify factors into physical, economic and social-political.',
        "teacherTip": 'Use a three-column chart to categorize factors with examples.',
        "examTip": 'Mention transport as a key economic factor in long answers.',
    },
    {
        "title": 'Occupational Structure',
        "summary": 'Occupational structure shows the distribution of workers among primary, secondary and tertiary activities.',
        "bullets": [
        'Primary: agriculture, fishing, forestry, mining',
        'Secondary: manufacturing, construction, processing',
        'Tertiary: services like trade, education, health, transport',
        'India still has a large share in primary sector',
        'With development, tertiary share increases',
    ],
        "body": 'Occupational structure refers to the proportion of people engaged in different types of economic activities. Primary activities involve extracting natural resources, such as farming, fishing and mining. Secondary activities include manufacturing and construction, where raw materials are processed. Tertiary activities provide services such as trade, education, health care, transport and banking. India still employs a large share of its workforce in the primary sector, though the tertiary sector has been growing rapidly. In developed economies, the tertiary sector dominates.',
        "explanation": 'Always define the three sectors before comparing their shares.',
        "teacherTip": 'Ask students to list the jobs of their family members by sector.',
        "examTip": 'State that tertiary services expand with urbanisation and technology.',
    },
    {
        "title": 'Developing Human Resources',
        "summary": 'Human resource development focuses on education, health, skills and employment to improve productivity and quality of life.',
        "bullets": [
        'Investment in education and health builds human capital',
        'Skill India and vocational training improve employability',
        'Balanced regional development reduces migration pressures',
        'Population becomes a demographic dividend when skilled',
        'Gender equality improves overall human resource quality',
    ],
        "body": 'Developing human resources means improving the quality of people through education, health care, skill development and employment opportunities. Government programmes such as Skill India and National Skill Development Mission aim to train youth for modern jobs. Balanced regional development reduces excessive migration and spreads opportunities. A young working-age population can become a demographic dividend only if it is healthy and skilled. Gender equality, especially in education and employment, strengthens the human resource base and improves social indicators.',
        "explanation": 'End long answers with the idea of demographic dividend and the need for skills.',
        "teacherTip": 'Connect local vocational centres or ITIs to this topic.',
        "examTip": "Use the phrase 'human capital' when explaining development measures.",
    },
],
    "highYieldFacts": [
    'Human resources are people with knowledge, skills, health and abilities that support development.',
    'Population becomes an asset only when it is educated, healthy and skilled.',
    'Human capital is created through investment in education, health, nutrition and training.',
    'Skilled labour requires education or training; unskilled labour needs minimal training.',
    'Semi-skilled workers have partial training and operate machines or vehicles.',
    'Good health reduces absenteeism and increases productivity.',
    'Health indicators include life expectancy, IMR and maternal health.',
    'Education raises productivity and occupational mobility.',
    'Female education improves family health and child care.',
    'Literacy is measured for population aged 7 years and above.',
    'Census in India is conducted every 10 years.',
    'The 2011 Census was the 15th census of India.',
    'Population density is population per square kilometre.',
    "India's population distribution is highly uneven.",
    'Northern Plains and coastal regions are densely populated.',
    'Himalayas, Thar Desert and interior plateaus are sparsely populated.',
    'Bihar has the highest population density among Indian states.',
    'Relief, climate, soil and water are key physical factors of distribution.',
    'Industries, transport and urban markets attract population.',
    'Political stability and security encourage settlement.',
    'Occupational structure divides work into primary, secondary and tertiary.',
    'Primary sector still employs the largest share in India.',
    'Tertiary sector is expanding with urbanisation and services.',
    'Migration has push factors (poverty, joblessness) and pull factors (jobs, services).',
    'Disguised unemployment is common in agriculture.',
    'A young working-age population can yield a demographic dividend.',
    'Skill India and vocational training improve employability.',
    'Balanced regional development reduces excessive rural-urban migration.',
    'Human resource development improves productivity and quality of life.',
    'Gender equality strengthens the human resource base.',
],
    "questions": _questions,
    "mindmap": """mindmap
  root((Human Resources in India))
    Meaning
      People + skills + health
      Human capital
    Skills
      Skilled
      Unskilled
      Semi-skilled
    Health
      Nutrition
      Sanitation
      PHCs
      IMR
    Education
      Literacy 7+
      SSA
      Mid-day meal
      Vocational
    Distribution
      Density formula
      Plains dense
      Hills sparse
      Desert sparse
    Factors
      Relief
      Climate
      Soil
      Water
      Industry
      Transport
      Stability
    Occupation
      Primary
      Secondary
      Tertiary
    Development
      Skill India
      Gender equity
      Demographic dividend""",
    "cheatsheet": [
    'Human resources = people with knowledge, skills, health and abilities.',
    'Population becomes an asset when educated, healthy and skilled.',
    'Human capital is built through education, health and training.',
    'Skilled labour needs training; unskilled labour needs minimal training.',
    'Health improves productivity and reduces absenteeism.',
    'Health indicators: life expectancy, IMR, maternal health.',
    'Education raises productivity and occupational mobility.',
    'Literacy is counted for population aged 7+ years.',
    'Census is conducted every 10 years in India.',
    'Population density = people per square kilometre.',
    'Northern Plains and coasts are densely populated.',
    'Himalayas, Thar Desert and interior plateaus are sparse.',
    'Bihar has the highest population density among states.',
    'Physical factors: relief, climate, soil, water.',
    'Economic factors: industry, transport, markets.',
    'Political stability and security attract settlement.',
    'Primary sector: agriculture, fishing, mining.',
    'Secondary sector: manufacturing and construction.',
    'Tertiary sector: services like trade, transport, education and health.',
    'India still has a large share in the primary sector.',
    'Tertiary sector share rises with development.',
    'Migration has push (poverty) and pull (jobs) factors.',
    'Disguised unemployment is common in agriculture.',
    'Skill India and vocational training boost employability.',
    'Demographic dividend requires skills and jobs.',
],
    "wordCards": [
    {
        "term": 'Human resources',
        "definition": 'People with knowledge, skills and health who contribute to development',
    },
    {
        "term": 'Human capital',
        "definition": "Value of people's skills, education and health",
    },
    {
        "term": 'Skilled labour',
        "definition": 'Workforce with specialized education or training',
    },
    {
        "term": 'Unskilled labour',
        "definition": 'Workforce needing minimal training and doing manual tasks',
    },
    {
        "term": 'Semi-skilled labour',
        "definition": 'Workers with partial training for specific tasks',
    },
    {
        "term": 'Health',
        "definition": 'Physical and mental well-being that supports productivity',
    },
    {
        "term": 'Literacy',
        "definition": 'Ability to read and write with understanding',
    },
    {
        "term": 'Literacy rate',
        "definition": 'Percentage of literate people aged 7+ years',
    },
    {
        "term": 'Population density',
        "definition": 'People per square kilometre of area',
    },
    {
        "term": 'Population distribution',
        "definition": 'Pattern of population spread across a region',
    },
    {
        "term": 'Census',
        "definition": 'Official population count conducted every 10 years',
    },
    {
        "term": 'Sex ratio',
        "definition": 'Number of females per 1000 males',
    },
    {
        "term": 'IMR',
        "definition": 'Infant mortality rate: infant deaths per 1000 births',
    },
    {
        "term": 'Life expectancy',
        "definition": 'Average years a person is expected to live',
    },
    {
        "term": 'Occupational structure',
        "definition": 'Distribution of workers by economic sector',
    },
    {
        "term": 'Primary sector',
        "definition": 'Activities that extract natural resources',
    },
    {
        "term": 'Secondary sector',
        "definition": 'Activities that process raw materials',
    },
    {
        "term": 'Tertiary sector',
        "definition": 'Service activities like trade and transport',
    },
    {
        "term": 'Migration',
        "definition": 'Movement of people from one place to another',
    },
    {
        "term": 'Push factors',
        "definition": 'Conditions that force people to leave a place',
    },
    {
        "term": 'Pull factors',
        "definition": 'Conditions that attract people to a place',
    },
    {
        "term": 'Disguised unemployment',
        "definition": 'More workers than needed in a job',
    },
    {
        "term": 'Underemployment',
        "definition": "Working below one's capacity or skills",
    },
    {
        "term": 'Urbanisation',
        "definition": 'Growth of urban population and cities',
    },
    {
        "term": 'Demographic dividend',
        "definition": 'Economic benefit of a large skilled workforce',
    },
    {
        "term": 'Vocational training',
        "definition": 'Job-oriented skill training',
    },
    {
        "term": 'Skill India',
        "definition": 'Government programme for skill development',
    },
    {
        "term": 'SSA',
        "definition": 'Sarva Shiksha Abhiyan for universal elementary education',
    },
    {
        "term": 'Mid-day meal',
        "definition": 'School meal scheme to improve nutrition',
    },
    {
        "term": 'Balanced development',
        "definition": 'Reducing regional inequalities in growth',
    },
],
}
