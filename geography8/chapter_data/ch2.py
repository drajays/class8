"""Chapter 2: Population."""
from geography8.chapter_data.qgen import mcq, tf, fill, match, short, build_question_set


def _questions(ch):
    topic_id = ch["topicId"]
    mcqs = [
        mcq("", topic_id, 'Population density is calculated as:', [
        'Area ÷ Population',
        'Population ÷ Area',
        'Birth rate − Death rate',
        'Immigrants − Emigrants',
    ], 1, 'Density = total population divided by land area, expressed as persons per sq km.', exam_tip='Show formula before calculating.', teacher_tip='Use state examples.'),
        mcq("", topic_id, 'Crude Birth Rate measures:', [
        'Deaths per 1,000 per year',
        'Live births per 1,000 per year',
        'People per sq km',
        'Average age of population',
    ], 1, 'CBR counts live births per 1,000 population each year.', exam_tip='Per 1,000—not percentage.', teacher_tip=''),
        mcq("", topic_id, 'Natural increase equals:', [
        'Immigration minus emigration',
        'Birth rate minus death rate',
        'Death rate minus birth rate',
        'Population divided by area',
    ], 1, 'Natural increase = CBR − CDR before migration is counted.', exam_tip='Distinguish from total growth.', teacher_tip=''),
        mcq("", topic_id, 'Which continent has the largest population?', [
        'Europe',
        'Africa',
        'Asia',
        'South America',
    ], 2, "Asia contains more than half of the world's people (China, India, etc.).", exam_tip='Continent-level distribution.', teacher_tip=''),
        mcq("", topic_id, 'A wide-based population pyramid indicates:', [
        'Ageing population',
        'High birth rate and young population',
        'Equal birth and death rates',
        'Mass emigration only',
    ], 1, 'Broad base means many children—expansive pyramid.', exam_tip='Link shape to birth rate.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Overpopulation depends only on high population density.\n2. Overpopulation means people exceed available resources.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 1, 'Statement 1 is false; statement 2 is correct—overpopulation is resource-relative.', exam_tip='UPSC-style combo on concepts.', teacher_tip=''),
        mcq("", topic_id, 'Sparse population is commonly found in:', [
        'River deltas',
        'Deserts and polar regions',
        'Industrial cities',
        'Coastal plains',
    ], 1, 'Harsh climate and lack of water limit settlement in deserts and tundra.', exam_tip='Physical geography link.', teacher_tip=''),
        mcq("", topic_id, 'Crude Death Rate is expressed per:', [
        '100 people',
        '1,000 people',
        '10,000 people',
        '1 lakh people',
    ], 1, 'Vital rates use per 1,000 population per year.', exam_tip='Standard demographic unit.', teacher_tip=''),
        mcq("", topic_id, 'Net migration equals:', [
        'Births minus deaths',
        'Immigrants minus emigrants',
        'Emigrants minus immigrants',
        'Population divided by area',
    ], 1, 'Positive net migration means more people arriving than leaving.', exam_tip='Migration component of growth.', teacher_tip=''),
        mcq("", topic_id, 'An ageing population typically shows a pyramid with:', [
        'Very wide base',
        'Narrow base and wider top',
        'No female side',
        'Only children under 5',
    ], 1, 'Few young people and many elderly—contractive pyramid.', exam_tip='Japan/Germany examples.', teacher_tip=''),
        mcq("", topic_id, 'Which factor most attracts dense rural settlement?', [
        'Permanent ice',
        'Fertile soil and water supply',
        'Steep barren mountains',
        'Deep desert',
    ], 1, 'Agriculture needs fertile land and reliable water.', exam_tip='Distribution factors.', teacher_tip=''),
        mcq("", topic_id, 'Demography is the study of:', [
        'Rocks and minerals',
        'Population statistics and trends',
        'Weather patterns',
        'Ocean currents',
    ], 1, 'Demographers analyse size, structure, and change of population.', exam_tip='Define demography.', teacher_tip=''),
        mcq("", topic_id, 'Life expectancy measures:', [
        'Births per year',
        'Average years a person is expected to live',
        'People per sq km',
        'Number of immigrants',
    ], 1, 'Higher life expectancy reflects better health care and living conditions.', exam_tip='Health indicator.', teacher_tip=''),
        mcq("", topic_id, 'India conducts a national population Census every:', [
        '5 years',
        '10 years',
        '25 years',
        '50 years',
    ], 1, 'Census of India is held every ten years.', exam_tip='Know Census interval.', teacher_tip=''),
        mcq("", topic_id, 'Underpopulation may lead to:', [
        'Labour shortage',
        'Extreme traffic congestion',
        'Overcrowded classrooms only',
        'Loss of all farmland',
    ], 0, 'Too few workers can slow economic use of resources.', exam_tip='Contrast with overpopulation.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. CBR is live births per 1,000 per year.\n2. CDR is deaths per 1,000 per year.\n3. Density is births minus deaths.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 2 are correct; density is population ÷ area.', exam_tip='Three-statement combo.', teacher_tip=''),
        mcq("", topic_id, 'Bangladesh is known for:', [
        'Very low population density',
        'Very high population density',
        'Zero population growth',
        'No agricultural population',
    ], 1, 'Small area with large population → very high density.', exam_tip='World examples.', teacher_tip=''),
        mcq("", topic_id, 'Family planning aims to:', [
        'Increase birth rate always',
        'Help couples plan number and spacing of children',
        'Stop all migration',
        'Reduce land area',
    ], 1, 'Voluntary planning stabilises growth and improves health.', exam_tip='Social policy.', teacher_tip=''),
        mcq("", topic_id, 'Infant mortality rate indicates:', [
        'Deaths of infants under one year per 1,000 live births',
        'Total deaths per 1,000',
        'Migration of infants',
        'School dropout rate',
    ], 0, 'Lower infant mortality shows better maternal and child health care.', exam_tip='Health development indicator.', teacher_tip=''),
        mcq("", topic_id, 'A population with CBR 30 and CDR 8 has natural increase of:', [
        '38 per 1,000',
        '22 per 1,000',
        '8 per 1,000',
        '30 per 1,000',
    ], 1, '30 − 8 = 22 per 1,000 per year.', exam_tip='Simple subtraction.', teacher_tip=''),
        mcq("", topic_id, 'Which region of India is generally most densely populated?', [
        'Thar Desert',
        'Gangetic plain',
        'Ladakh',
        'Western Ghats forest only',
    ], 1, 'Fertile alluvial soil and water support dense farming settlements.', exam_tip='India map knowledge.', teacher_tip=''),
        mcq("", topic_id, 'Expansive population pyramid is typical of:', [
        'Japan',
        'Many African countries',
        'Countries with only elderly',
        'Uninhabited areas',
    ], 1, 'High birth rates produce a broad young base.', exam_tip='Pyramid-country link.', teacher_tip=''),
        mcq("", topic_id, 'Total population change includes:', [
        'Only births',
        'Only deaths',
        'Natural increase and net migration',
        'Only density',
    ], 2, 'Growth = (B−D) + net migration.', exam_tip='Full growth equation.', teacher_tip=''),
        mcq("", topic_id, 'Arithmetic population density uses:', [
        'Only arable land area',
        'Total land area of region',
        'Urban area only',
        'Coastal length',
    ], 1, 'Standard density = total population ÷ total area.', exam_tip='Definition.', teacher_tip=''),
        mcq("", topic_id, 'Education of girls often leads to:', [
        'Higher birth rates',
        'Lower birth rates',
        'No change in population',
        'Higher death rates',
    ], 1, 'Education delays marriage and improves family planning.', exam_tip='Social factor.', teacher_tip=''),
        mcq("", topic_id, 'Siberia has sparse population mainly due to:', [
        'Too many jobs',
        'Extreme cold and difficult living conditions',
        'Excess rainfall',
        'Tropical climate',
    ], 1, 'Harsh climate limits comfortable settlement.', exam_tip='Physical barrier.', teacher_tip=''),
        mcq("", topic_id, 'Overcrowded slums are often linked to:', [
        'Rapid urban growth without adequate housing',
        'Underpopulation',
        'Sparse rural settlement only',
        'Polar climate',
    ], 0, 'Rural-urban migration can outpace infrastructure.', exam_tip='Urban population pressure.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Australia has a large land area.\n2. Australia is densely populated throughout.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 0, 'Statement 1 is true; statement 2 is false—much of Australia is arid and sparsely settled.', exam_tip='Area vs density combo.', teacher_tip=''),
        mcq("", topic_id, 'Contractive pyramid suggests need for:', [
        'More primary schools only',
        'Elderly care and pension planning',
        'Only maternity wards',
        'Desert reclamation',
    ], 1, 'Few young people and many old—ageing society.', exam_tip='Planning from pyramids.', teacher_tip=''),
        mcq("", topic_id, 'Which is NOT a push factor for migration?', [
        'Unemployment',
        'War',
        'Better job prospects elsewhere',
        'Natural disaster',
    ], 2, 'Better jobs elsewhere is a pull factor, not a push.', exam_tip='Push vs pull preview.', teacher_tip=''),
        mcq("", topic_id, 'World population growth was fastest after:', [
        'Stone Age only',
        'Industrial Revolution and medical advances',
        'Complete halt of agriculture',
        'Ice Age',
    ], 1, 'Falling death rates with initially high birth rates spurred growth.', exam_tip='Historical trend.', teacher_tip=''),
        mcq("", topic_id, 'High population density in Netherlands is partly due to:', [
        'Sahara-like climate',
        'Long habitable history, trade, and fertile reclaimed land',
        'No agriculture',
        'Permanent snow',
    ], 1, 'Fertile lowlands and economic development support dense settlement.', exam_tip='Human + physical factors.', teacher_tip=''),
        mcq("", topic_id, 'Negative natural increase means:', [
        'More births than deaths',
        'More deaths than births',
        'No migration',
        'Zero population',
    ], 1, 'Deaths exceed births—population shrinks without immigration.', exam_tip='Sign of rate difference.', teacher_tip=''),
        mcq("", topic_id, 'Population distribution refers to:', [
        'How people are spread across an area',
        'Only birth rate',
        'Only death rate',
        'Height of mountains',
    ], 0, 'Distribution describes spatial pattern of where people live.', exam_tip='Define distribution.', teacher_tip=''),
        mcq("", topic_id, 'Carrying capacity relates to:', [
        'Maximum population an environment can sustain',
        'Map scale',
        'Contour interval',
        'Railway gauge',
    ], 0, 'Overpopulation exceeds carrying capacity of resources.', exam_tip='Environmental limit concept.', teacher_tip=''),
        mcq("", topic_id, 'Census data helps government to:', [
        'Plan schools, hospitals, and services',
        'Measure mountain height',
        'Predict earthquakes only',
        'Draw contour lines',
    ], 0, 'Accurate counts guide resource allocation.', exam_tip='Applied demography.', teacher_tip=''),
        mcq("", topic_id, 'Youth bulge in a pyramid means:', [
        'Many people in young age groups',
        'Only elderly population',
        'No children',
        'Equal deaths and births only',
    ], 0, 'Large young cohort needs jobs and education.', exam_tip='Social challenge.', teacher_tip=''),
        mcq("", topic_id, 'Which pair has the correct formula?', [
        'Density = Area ÷ Population',
        'Natural increase = CBR − CDR',
        'CBR = Deaths ÷ Population',
        'Net migration = Births − Deaths',
    ], 1, 'Only natural increase formula is correctly stated.', exam_tip='Formula identification.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Fertile plains attract dense settlement.\n2. Deserts usually have sparse population.\n3. Mountains always have highest density.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 2 correct; mountains generally have lower density except some valleys.', exam_tip='Physical factors combo.', teacher_tip=''),
        mcq("", topic_id, "India's population growth rate in recent decades has:", [
        'Increased sharply to highest ever',
        'Slowed compared to mid-20th century',
        'Become exactly zero',
        'Stopped completely',
    ], 1, 'Family planning and development slowed growth though numbers still rise.', exam_tip='India demographic trend.', teacher_tip=''),
        mcq("", topic_id, 'Primary reason for high density in river valleys:', [
        'Lack of water',
        'Fertile alluvial soil and water for farming',
        'No transport',
        'Permanent ice',
    ], 1, 'Agriculture supported early civilisations along rivers.', exam_tip='Historical geography.', teacher_tip=''),
        mcq("", topic_id, 'Overpopulation can cause:', [
        'Deforestation and pollution',
        'Unlimited free resources',
        'Automatic rise in jobs',
        'No pressure on water',
    ], 0, 'Resource stress harms environment and living standards.', exam_tip='Effects list.', teacher_tip=''),
        mcq("", topic_id, 'A country with CBR 12 and CDR 10 has:', [
        'Natural increase of 2 per 1,000',
        'Natural increase of 22 per 1,000',
        'Natural decrease of 2 per 1,000',
        'Density of 12',
    ], 0, '12 − 10 = +2 per 1,000.', exam_tip='Rate arithmetic.', teacher_tip=''),
        mcq("", topic_id, 'Population pyramid horizontal bars show:', [
        'Height of buildings',
        'Number of males and females in each age group',
        'Rainfall amounts',
        'Road length',
    ], 1, 'Each bar represents an age cohort by sex.', exam_tip='How to read pyramids.', teacher_tip=''),
        mcq("", topic_id, 'Sparse population in Amazon interior is due to:', [
        'Dense industry',
        'Dense forest, difficult access, and disease history',
        'Polar climate',
        'No rainfall',
    ], 1, 'Tropical rainforest limits large-scale settlement.', exam_tip='Latin America example.', teacher_tip=''),
        mcq("", topic_id, 'Demographic transition generally involves:', [
        'Shift from high birth/death rates to lower rates',
        'Permanent high death rate only',
        'No change ever',
        'Only migration-based change',
    ], 0, 'Development lowers both rates over time.', exam_tip='Advanced concept intro.', teacher_tip=''),
        mcq("", topic_id, 'Which is a social effect of overpopulation?', [
        'Overcrowded schools and hospitals',
        'More contour lines',
        'Higher map scale',
        'Magnetic declination',
    ], 0, 'Services strain when population exceeds provision.', exam_tip='Social vs environmental.', teacher_tip=''),
        mcq("", topic_id, 'Underpopulated countries may encourage:', [
        'Emigration only',
        'Immigration or incentives to settle',
        'Closing all hospitals',
        'Stopping agriculture',
    ], 1, 'More workers needed to develop resources.', exam_tip='Policy response.', teacher_tip=''),
        mcq("", topic_id, 'Population of a city compared to its area gives:', [
        'Birth rate',
        'Urban population density',
        'Death rate only',
        'Magnetic north',
    ], 1, 'Same density formula applied to urban area.', exam_tip='Urban application.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. CBR and CDR are measured per 1,000 people per year.\n2. Population density is measured per 1,000 people.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 0, 'Statement 1 true; density is per sq km, not per 1,000.', exam_tip='Units combo.', teacher_tip=''),
        mcq("", topic_id, 'Age-sex pyramid with equal narrow columns suggests:', [
        'Rapid growth',
        'Relatively stable population',
        'Only immigration',
        'No females',
    ], 1, 'Similar cohort sizes indicate stability.', exam_tip='Pyramid interpretation.', teacher_tip=''),
        mcq("", topic_id, 'Gangetic plain density is high mainly because of:', [
        'Desert climate',
        'Alluvial soil and river water',
        'No farming',
        'Lack of transport',
    ], 1, 'Agricultural heartland of India.', exam_tip='Regional geography.', teacher_tip=''),
        mcq("", topic_id, 'Excess population pressure on farmland may cause:', [
        'Soil erosion and smaller farm plots',
        'Automatic soil enrichment',
        'No change in farming',
        'Unlimited water',
    ], 0, 'Subdivision and overuse degrade land.', exam_tip='Rural overpopulation.', teacher_tip=''),
        mcq("", topic_id, 'Which vital rate reflects medical advancement most directly?', [
        'Declining infant mortality',
        'Map scale',
        'Grid reference',
        'Contour VI',
    ], 0, 'Better hospitals and vaccines reduce infant deaths.', exam_tip='Development link.', teacher_tip=''),
        mcq("", topic_id, 'Population census provides data on:', [
        'Age, sex, occupation, and literacy',
        'Only mountain heights',
        'Only river length',
        'Magnetic variation',
    ], 0, 'Census is comprehensive demographic survey.', exam_tip='Census content.', teacher_tip=''),
        mcq("", topic_id, 'High death rate in a developing country may be due to:', [
        'Excellent health care everywhere',
        'Disease, poor sanitation, and malnutrition',
        'Too many hospitals',
        'Low birth rate only',
    ], 1, 'Poor health infrastructure raises CDR.', exam_tip='Cause-effect.', teacher_tip=''),
        mcq("", topic_id, 'Population pyramid is also called:', [
        'Age-sex pyramid',
        'Contour map',
        'Toposheet',
        'Barometer chart',
    ], 0, 'Shows age and sex structure graphically.', exam_tip='Terminology.', teacher_tip=''),
        mcq("", topic_id, 'Overpopulation in cities may worsen:', [
        'Traffic congestion and air pollution',
        'Available open space per person',
        'Both congestion/pollution and reduce open space',
        'Neither',
    ], 2, 'Urban crowding affects transport, air quality, and living space.', exam_tip='Urban effects.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Net migration affects total population.\n2. Natural increase ignores migration.\n3. Density equals CBR minus CDR.\nWhich of the above is/are correct?', [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        'All of the above',
    ], 3, 'Statements 1 and 2 correct; density is population ÷ area.', exam_tip='Concept check combo.', teacher_tip=''),
        mcq("", topic_id, 'A region with 2 million people and 4,000 sq km has density:', [
        '2 persons/sq km',
        '500 persons/sq km',
        '8,000 persons/sq km',
        '0.002 persons/sq km',
    ], 1, '2,000,000 ÷ 4,000 = 500 persons/sq km.', exam_tip='Calculation question.', teacher_tip=''),
        mcq("", topic_id, 'Pull factor for rural to urban migration includes:', [
        'Job opportunities in city',
        'Floods destroying farm',
        'Lack of schools in village only as push',
        'Drought as only factor',
    ], 0, 'Better employment draws people to towns.', exam_tip='Migration link to population.', teacher_tip=''),
        mcq("", topic_id, 'Stationary population pyramid has:', [
        'Broadening base every year',
        'Roughly equal cohorts through ages',
        'Only one age group',
        'No males',
    ], 1, 'Low growth produces near-rectangular shape.', exam_tip='Pyramid types.', teacher_tip=''),
        mcq("", topic_id, "World's population is unevenly distributed mainly because of:", [
        'Uniform climate everywhere',
        'Varied physical and economic conditions',
        'Same soil globally',
        'Identical relief',
    ], 1, 'People cluster where life and livelihood are easier.', exam_tip='Distribution summary.', teacher_tip=''),
        mcq("", topic_id, 'Family welfare programmes in India promote:', [
        'Forced migration',
        'Reproductive health and planned families',
        'Stopping all births illegally',
        'Closing cities',
    ], 1, 'Voluntary planning improves mother and child health.', exam_tip='Indian policy.', teacher_tip=''),
        mcq("", topic_id, 'Low population density in Rajasthan desert is due to:', [
        'Excess rainfall',
        'Aridity and limited water',
        'Dense forest only',
        'Polar winds',
    ], 1, 'Thar Desert conditions limit agriculture and settlement.', exam_tip='Indian example.', teacher_tip=''),
        mcq("", topic_id, 'Population explosion refers to:', [
        'Rapid increase in population over short period',
        'Sudden decrease in population',
        'Stable numbers for centuries',
        'Only urban growth',
    ], 0, 'Post-1950 rapid growth in many developing nations.', exam_tip='Historical term.', teacher_tip=''),
        mcq("", topic_id, 'Which indicator suggests a youthful nation?', [
        'Median age is low',
        'Median age above 50 only',
        'No children under 15',
        'CBR near zero only',
    ], 0, 'Many young people lower median age.', exam_tip='Age structure.', teacher_tip=''),
        mcq("", topic_id, 'Overpopulation differs from high density because it considers:', [
        'Resource availability and quality of life',
        'Only map colour',
        'Only longitude',
        'Contour spacing',
    ], 0, 'Resource pressure defines overpopulation.', exam_tip='Key distinction.', teacher_tip=''),
        mcq("", topic_id, "Canada's overall low density is explained by:", [
        'Small land area',
        'Large area with much inhospitable northern land',
        'No minerals',
        'No cities',
    ], 1, 'Most people live near US border; north is sparse.', exam_tip='North America example.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements:\n1. Population pyramids help plan future school needs.\n2. Population pyramids show contour heights.\nWhich of the above is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 0, 'Statement 1 true; pyramids show age-sex structure, not relief.', exam_tip='Purpose of pyramids.', teacher_tip=''),
    ]
    tfs = [
        tf("", topic_id, 'Population density is calculated as Population ÷ Area.', 'true', 'True. Density expresses how many people live per unit area, usually per sq km.'),
        tf("", topic_id, 'Crude Birth Rate measures deaths per 1,000 people per year.', 'false', 'False. CBR measures live births per 1,000 per year; CDR measures deaths.'),
        tf("", topic_id, 'A wide-based population pyramid indicates a young, fast-growing population.', 'true', 'True. Many children at the base mean high birth rates—expansive pyramid.'),
        tf("", topic_id, 'Overpopulation depends only on the number of people, not on resources.', 'false', 'False. Overpopulation is defined relative to available resources and services.'),
        tf("", topic_id, 'Natural increase equals Birth rate minus Death rate.', 'true', 'True. It shows growth from births and deaths before migration.'),
        tf("", topic_id, 'Deserts typically have sparse population.', 'true', 'True. Lack of water and extreme climate limit settlement.'),
        tf("", topic_id, 'Asia is the most populous continent.', 'true', 'True. China, India, and other Asian nations hold the majority of world population.'),
        tf("", topic_id, 'Underpopulation can mean too few workers to use resources efficiently.', 'true', 'True. Labour shortage may leave farmland or minerals underused.'),
        tf("", topic_id, 'Net migration equals Immigrants minus Emigrants.', 'true', 'True. Positive net migration adds to population; negative subtracts.'),
        tf("", topic_id, 'A contractive pyramid has a very broad base and narrow top.', 'false', 'False. Contractive pyramids have a narrow base (few children) and wider top (many elderly).'),
    ]
    fills = [
        fill("", topic_id, 'Population density = Total population ÷ ______.', 'Area', 'Area (in sq km). Result is persons per sq km.'),
        fill("", topic_id, 'Crude Birth Rate is the number of live births per ______ people per year.', '1000', '1,000 (per thousand population).'),
        fill("", topic_id, 'Natural increase ≈ Birth rate − ______ rate.', 'Death', 'Death rate (CBR − CDR per 1,000).'),
        fill("", topic_id, 'A graph showing age and sex structure is called a population ______.', 'pyramid', 'Population pyramid (age-sex pyramid).'),
        fill("", topic_id, 'The statistical study of population is called ______.', 'Demography', 'Demography.'),
    ]
    matches = [
        match("", topic_id, 'Match terms with definitions:', [{"left": 'CBR', "right": 'Live births per 1,000/year'}, {"left": 'CDR', "right": 'Deaths per 1,000/year'}, {"left": 'Density', "right": 'People per sq km'}, {"left": 'Natural increase', "right": 'CBR − CDR'}], 'CBR→births; CDR→deaths; Density→per area; Natural increase→difference.'),
        match("", topic_id, 'Match pyramid types:', [{"left": 'Expansive', "right": 'Wide base'}, {"left": 'Contractive', "right": 'Narrow base'}, {"left": 'Stationary', "right": 'Even cohorts'}, {"left": 'Youth bulge', "right": 'Many young adults'}], 'Expansive→wide base; Contractive→narrow base; Stationary→even; Youth bulge→young adults.'),
        match("", topic_id, 'Match regions with density pattern:', [{"left": 'Gangetic plain', "right": 'High density'}, {"left": 'Sahara', "right": 'Sparse'}, {"left": 'Bangladesh', "right": 'Very high density'}, {"left": 'Siberia', "right": 'Very sparse'}], 'Ganga→high; Sahara→sparse; Bangladesh→very high; Siberia→sparse.'),
        match("", topic_id, 'Match concepts:', [{"left": 'Overpopulation', "right": 'Exceeds resources'}, {"left": 'Underpopulation', "right": 'Too few for resources'}, {"left": 'Census', "right": 'Official population count'}, {"left": 'Demography', "right": 'Population science'}], 'Over→resource strain; Under→labour shortage; Census→count; Demography→study.'),
        match("", topic_id, 'Match indicators:', [{"left": 'Life expectancy', "right": 'Average lifespan'}, {"left": 'Infant mortality', "right": 'Deaths under age 1'}, {"left": 'Net migration', "right": 'In − Out'}, {"left": 'Growth rate', "right": '% change per year'}], 'Life expectancy→lifespan; Infant mortality→under-1 deaths; Net migration→in minus out.'),
        match("", topic_id, 'Match factors with dense settlement:', [{"left": 'Fertile soil', "right": 'Agriculture'}, {"left": 'River water', "right": 'Drinking/irrigation'}, {"left": 'Flat land', "right": 'Easy building'}, {"left": 'Port/trade', "right": 'Jobs'}], 'Soil→farming; Water→supply; Flat→construction; Port→employment.'),
        match("", topic_id, 'Match sparse areas with cause:', [{"left": 'Thar Desert', "right": 'Aridity'}, {"left": 'Himalayas', "right": 'Steep relief/cold'}, {"left": 'Amazon interior', "right": 'Dense forest'}, {"left": 'Antarctica', "right": 'Extreme cold'}], 'Thar→dry; Himalayas→relief; Amazon→forest; Antarctica→cold.'),
        match("", topic_id, 'Match formulas:', [{"left": 'Density', "right": 'P ÷ A'}, {"left": 'Natural increase', "right": 'B − D'}, {"left": 'Net migration', "right": 'I − E'}, {"left": 'Total change', "right": '(B−D)+(I−E)'}], 'Standard demographic equations.'),
        match("", topic_id, 'Match effects of overpopulation:', [{"left": 'Economic', "right": 'Unemployment'}, {"left": 'Social', "right": 'Crowded schools'}, {"left": 'Environmental', "right": 'Pollution'}, {"left": 'Urban', "right": 'Slums'}], 'Multi-dimensional effects.'),
        match("", topic_id, 'Match continents:', [{"left": 'Asia', "right": 'Most populous'}, {"left": 'Antarctica', "right": 'No permanent residents'}, {"left": 'Europe', "right": 'Ageing in many countries'}, {"left": 'Africa', "right": 'Fast youth growth'}], 'Continental population patterns.'),
    ]
    shorts = [
        short("", topic_id, 'Define population density and give the formula.', 'Population density is the number of people per unit area. Formula: Density = Total Population ÷ Area (sq km). Result is expressed as persons per sq km.'),
        short("", topic_id, 'Distinguish between overpopulation and high population density.', 'High density means many people per sq km. Overpopulation means people exceed available resources and services, lowering quality of life. A densely populated area with strong economy may not be overpopulated.'),
        short("", topic_id, 'Explain what an expansive population pyramid indicates.', 'An expansive pyramid has a broad base showing many children and young people, indicating high birth rate and rapid population growth. It implies future need for schools, jobs, and health services.'),
        short("", topic_id, 'Give three factors that lead to sparse population.', 'Extreme climate (desert cold or heat), difficult relief (high mountains), and lack of water or fertile soil limit settlement. Remoteness and poor transport also discourage dense population.'),
        short("", topic_id, 'How is natural increase calculated and what does it show?', 'Natural increase = Crude Birth Rate − Crude Death Rate (per 1,000 per year). It shows population change from births and deaths alone, excluding migration. Positive value means population grows naturally.'),
    ]
    return build_question_set(2, topic_id, mcqs, tfs, fills, matches, shorts)


CHAPTER = {
    "topics": [
    {
        "title": 'World Population Growth',
        "summary": 'Human numbers have grown rapidly since industrialisation; most people live in Asia and Africa today.',
        "bullets": [
        'World population exceeded 8 billion in the 2020s',
        'Asia has the largest share of global population',
        'Growth rate is slowing in many countries but absolute numbers still rise',
        'Medical advances and better food supply reduced death rates',
        'Distribution is uneven—dense belts vs sparsely settled regions',
    ],
        "body": """**Population** is the total number of people living in a country or region at a given time.

For centuries growth was slow. After the **Industrial Revolution**, improved **health care**, **sanitation**, and **agriculture** lowered death rates while birth rates stayed high—causing rapid increase.

Today patterns differ: Japan and parts of Europe grow slowly; many African nations still grow quickly. **India** and **China** are among the world's most populous countries.""",
        "explanation": 'Population growth varies by region and time period—always state where and when.',
        "teacherTip": 'Use a world population clock to show real-time growth.',
        "examTip": 'ICSE often asks which continent is most populous and why growth rates differ.',
    },
    {
        "title": 'Population Density',
        "summary": 'Population density compares how many people live per unit area, usually per square kilometre.',
        "bullets": [
        'Formula: Density = Total Population ÷ Area (sq km)',
        'High density: Bangladesh, Netherlands, Gangetic plain of India',
        'Low density: Sahara, Amazon interior, Siberia, interior Australia',
        'High density does not always mean overpopulation',
        'Arithmetic density is the standard school-level measure',
    ],
        "body": """**Population density** = Population ÷ Area.

**Example:** 50 million people in 100,000 sq km → 50,000,000 ÷ 100,000 = **500 persons/sq km**.

Factors raising density: fertile soil, water, flat land, jobs, good transport.
Factors lowering density: deserts, mountains, extreme cold or heat, lack of water.""",
        "explanation": 'Density is a ratio—show both population and area in calculations.',
        "teacherTip": 'Compare density of Kerala, Rajasthan, and Bihar using atlas data.',
        "examTip": 'Show working: Population ÷ Area = persons per sq km.',
    },
    {
        "title": 'Birth Rate and Death Rate',
        "summary": 'Birth rate and death rate measure live births and deaths per 1,000 people per year.',
        "bullets": [
        'Crude Birth Rate (CBR): live births per 1,000 population per year',
        'Crude Death Rate (CDR): deaths per 1,000 population per year',
        'Rates are per 1,000, not percentages at this level',
        'Developing countries often have higher CBR than developed countries',
        'Better health care lowers CDR and raises life expectancy',
    ],
        "body": """**Crude Birth Rate** counts live births yearly per 1,000 people.
**Crude Death Rate** counts deaths yearly per 1,000 people.

Related measures: **infant mortality rate** (deaths under age one per 1,000 live births) and **life expectancy** (average years a person is expected to live).""",
        "explanation": 'Per-1,000 rates let countries of different sizes be compared fairly.',
        "teacherTip": 'Classroom analogy: 1,000 students, 25 births, 8 deaths → net +17.',
        "examTip": 'Define CBR and CDR with the per-1,000 formula.',
    },
    {
        "title": 'Natural Increase and Growth Rate',
        "summary": 'Natural increase equals birth rate minus death rate and drives population change before migration.',
        "bullets": [
        'Natural Increase ≈ Birth Rate − Death Rate (per 1,000)',
        'Positive natural increase means population grows without migration',
        'Negative natural increase means deaths exceed births',
        'Total change = natural increase + net migration',
        'Net migration = immigrants minus emigrants',
    ],
        "body": """**Natural increase** = CBR − CDR.

Example: CBR 22, CDR 7 → natural increase = **15 per 1,000** (about 1.5% per year).

**Total population change** = Natural increase + Net migration.""",
        "explanation": 'Separate natural increase (births/deaths) from total growth (includes migration).',
        "teacherTip": 'Board equation: Population change = (B−D) + (I−E).',
        "examTip": 'State units: per 1,000 per year unless percentage is asked.',
    },
    {
        "title": 'Population Pyramids',
        "summary": 'Age-sex pyramids show how a population is distributed across age groups and gender.',
        "bullets": [
        'Males usually on left, females on right, by age cohorts',
        'Broad base → high birth rate, young population (expansive)',
        'Narrow base → low birth rate, ageing population (contractive)',
        'Bulge in middle may reflect past baby boom or migration',
        'Used to plan schools, jobs, health care, and pensions',
    ],
        "body": """| Pyramid shape | Meaning |
|---------------|---------|
| Wide base, narrow top | Young, fast-growing population |
| Even columns | Stable growth |
| Narrow base, wide top | Ageing, slow or declining growth |

**Expansive** pyramids need more schools; **contractive** pyramids need elderly care.""",
        "explanation": 'Read pyramids from base (children) to top (elderly).',
        "teacherTip": 'Sketch three pyramid types with country examples.',
        "examTip": 'Describe shape and link to birth rate and future workforce.',
    },
    {
        "title": 'Overpopulation and Its Effects',
        "summary": 'Overpopulation occurs when people exceed the carrying capacity of an area, straining resources.',
        "bullets": [
        'Depends on resources, not numbers alone',
        'Pressure on food, water, housing, jobs, and sanitation',
        'Environmental stress: pollution, deforestation, waste',
        'Urban slums and congestion in megacities',
        'Solutions include education, family planning, and sustainable development',
    ],
        "body": """**Overpopulation** = too many people relative to **available resources**.

**Effects:** unemployment, overcrowded schools/hospitals, pollution, loss of green cover, water stress.

**Solutions:** family planning, girls' education, better farming, planned cities, conservation.""",
        "explanation": 'Overpopulation is relative to resources—a wealthy dense city may cope better than a poor crowded region.',
        "teacherTip": 'Contrast high density with adequate vs inadequate resources.',
        "examTip": 'List economic, social, and environmental effects separately.',
    },
    {
        "title": 'Underpopulation and Sparse Population',
        "summary": 'Underpopulation means too few people to use resources efficiently; sparse areas have very low density.',
        "bullets": [
        'Underpopulation: labour shortage, underused farmland or minerals',
        'Sparse population: few people over vast area (deserts, tundra)',
        'Causes: harsh climate, poor soil, remoteness, lack of water',
        'Australia and Canada are large but relatively underpopulated',
        'Governments may encourage settlement in resource-rich sparse areas',
    ],
        "body": """**Sparse population** = low density due to difficult physical conditions.

**Underpopulation** = population smaller than the area's **resource potential**.

Examples: **Sahara**, **Amazon interior**, **Ladakh**, **Siberia**.""",
        "explanation": 'Sparse = geography limits people; underpopulated = could support more productively.',
        "teacherTip": "Map world's sparse vs dense population belts.",
        "examTip": 'Give physical reasons for sparse settlement.',
    },
    {
        "title": 'Population Distribution and Factors',
        "summary": 'People are unevenly spread; physical and human factors explain clustering and empty lands.',
        "bullets": [
        'Dense on fertile plains, river valleys, and coasts',
        'Sparse in mountains, deserts, and polar regions',
        'Industry and trade pull people to urban centres',
        'Transport, history, and government policy also matter',
        "India's density is highest in the northern plains",
    ],
        "body": """**Physical factors:** climate, relief, soil, water, vegetation.

**Human factors:** farming, industry, trade, policy, migration.

**India:** dense along Ganga-Brahmaputra and coastal plains; lower in arid Rajasthan and high Himalayas.""",
        "explanation": 'Distribution shows where people live; density shows how many per sq km.',
        "teacherTip": 'Overlay rainfall and population maps of India.',
        "examTip": 'Name at least two physical and two economic factors.',
    },
],
    "highYieldFacts": [
    'Population is the total number of people in an area at a given time.',
    'Population density = Total population ÷ Area (persons per sq km).',
    'Crude Birth Rate (CBR) = live births per 1,000 people per year.',
    'Crude Death Rate (CDR) = deaths per 1,000 people per year.',
    'Natural increase ≈ Birth rate − Death rate (per 1,000).',
    'Total population change = natural increase + net migration.',
    'Asia is the most populous continent.',
    'A population pyramid shows age and sex structure.',
    'Expansive pyramid: wide base, young population, high birth rate.',
    'Contractive pyramid: narrow base, ageing population, low birth rate.',
    'Overpopulation strains resources—not merely high numbers.',
    'Underpopulation means fewer people than resources can support efficiently.',
    'Sparse population occurs in deserts, mountains, and polar regions.',
    'Fertile river valleys attract dense settlement.',
    'Industrial and urban areas raise local density.',
    'Life expectancy has risen due to better health care.',
    'Infant mortality reflects quality of medical care.',
    'Family planning helps stabilise population growth.',
    'Education for women tends to lower birth rates.',
    'Net migration = immigrants − emigrants.',
    'Arithmetic density is the standard measure at school level.',
    "Bangladesh is among the world's most densely populated countries.",
    'Australia is large but sparsely populated overall.',
    "India's population concentrates in the northern plains.",
    'High density can exist without overpopulation if resources are adequate.',
    'Overpopulation may cause pollution and deforestation.',
    'Census counts population periodically in India.',
    'Demography is the statistical study of population.',
    'Ageing populations need more elderly care.',
    'Youthful populations need more schools and future jobs.',
],
    "questions": _questions,
    "mindmap": """flowchart TB
  ROOT[Population]
  ROOT --> GROWTH[Growth and Size]
  ROOT --> DENSITY[Density]
  ROOT --> RATES[Birth and Death Rates]
  ROOT --> PYRAMID[Population Pyramids]
  ROOT --> OVER[Overpopulation]
  ROOT --> UNDER[Sparse and Underpop]
  ROOT --> DIST[Distribution]
  GROWTH --> WORLD[World 8 billion+]
  GROWTH --> ASIA[Asia most populous]
  DENSITY --> FORMULA[P divided by Area]
  DENSITY --> HIGH[Gangetic plain]
  RATES --> CBR[CBR per 1000]
  RATES --> CDR[CDR per 1000]
  RATES --> NI[Natural Increase]
  PYRAMID --> EXP[Expansive wide base]
  PYRAMID --> CON[Contractive narrow base]
  OVER --> RES[Resource strain]
  UNDER --> DESERT[Deserts sparse]
  DIST --> PHYS[Physical factors]
  DIST --> ECON[Economic factors]""",
    "cheatsheet": [
    'Density = Population ÷ Area (persons/sq km).',
    'CBR = live births per 1,000/year.',
    'CDR = deaths per 1,000/year.',
    'Natural increase = CBR − CDR.',
    'Total change = natural increase + net migration.',
    'Asia = most populous continent.',
    'Expansive pyramid = wide base, young population.',
    'Contractive pyramid = narrow base, ageing.',
    'Overpopulation = exceeds resources.',
    'Sparse = deserts, mountains, polar lands.',
    'Fertile river valleys = dense settlement.',
    'Census in India every 10 years.',
    'Demography = study of population.',
    'Family planning stabilises growth.',
    "Girls' education lowers birth rates.",
    'Infant mortality reflects health care.',
    'Life expectancy = average years lived.',
    'Bangladesh = very high density.',
    'Australia/Canada = large but sparse.',
    "Gangetic plain = India's dense core.",
    'Youth bulge needs jobs and schools.',
    'Ageing society needs elderly care.',
    'Net migration = immigrants − emigrants.',
    'Carrying capacity = sustainable limit.',
    'Population explosion = rapid post-1950 growth.',
],
    "wordCards": [
    {
        "term": 'Population',
        "definition": 'Total number of people living in a defined area at a given time.',
    },
    {
        "term": 'Population density',
        "definition": 'Number of people per unit area, usually per square kilometre.',
    },
    {
        "term": 'Crude Birth Rate',
        "definition": 'Live births per 1,000 population in one year.',
    },
    {
        "term": 'Crude Death Rate',
        "definition": 'Deaths per 1,000 population in one year.',
    },
    {
        "term": 'Natural increase',
        "definition": 'Excess of births over deaths; CBR minus CDR per 1,000.',
    },
    {
        "term": 'Population pyramid',
        "definition": 'Graph showing population by age group and sex.',
    },
    {
        "term": 'Expansive pyramid',
        "definition": 'Wide base pyramid of a young, fast-growing population.',
    },
    {
        "term": 'Contractive pyramid',
        "definition": 'Narrow base pyramid of an ageing, slow-growing population.',
    },
    {
        "term": 'Overpopulation',
        "definition": 'Too many people relative to available resources and services.',
    },
    {
        "term": 'Underpopulation',
        "definition": 'Too few people to use available resources efficiently.',
    },
    {
        "term": 'Sparse population',
        "definition": 'Very few people spread over a large area.',
    },
    {
        "term": 'Demography',
        "definition": 'Statistical study of human population.',
    },
    {
        "term": 'Census',
        "definition": 'Official periodic count of population and its characteristics.',
    },
    {
        "term": 'Life expectancy',
        "definition": 'Average number of years a person is expected to live.',
    },
    {
        "term": 'Infant mortality rate',
        "definition": 'Deaths of infants under one year per 1,000 live births.',
    },
    {
        "term": 'Net migration',
        "definition": 'Number of immigrants minus number of emigrants.',
    },
    {
        "term": 'Growth rate',
        "definition": 'Percentage change in population over a period, usually a year.',
    },
    {
        "term": 'Carrying capacity',
        "definition": 'Maximum population an environment can sustain adequately.',
    },
    {
        "term": 'Population distribution',
        "definition": 'Pattern of where people live across a region.',
    },
    {
        "term": 'Arithmetic density',
        "definition": 'Total population divided by total land area.',
    },
    {
        "term": 'Age cohort',
        "definition": 'Group of people born in the same time period.',
    },
    {
        "term": 'Youth bulge',
        "definition": 'Unusually large proportion of young people in a population.',
    },
    {
        "term": 'Ageing population',
        "definition": 'Rising share of elderly people in total population.',
    },
    {
        "term": 'Family planning',
        "definition": 'Voluntary regulation of number and spacing of children.',
    },
    {
        "term": 'Population explosion',
        "definition": 'Very rapid increase in world population after mid-20th century.',
    },
    {
        "term": 'Stationary pyramid',
        "definition": 'Pyramid with roughly equal cohorts indicating stable population.',
    },
    {
        "term": 'Vital rates',
        "definition": 'Birth and death rates measuring natural population change.',
    },
    {
        "term": 'Emigrant',
        "definition": 'Person who leaves their country to live elsewhere.',
    },
    {
        "term": 'Immigrant',
        "definition": 'Person who enters a country to live permanently or long-term.',
    },
    {
        "term": 'Gangetic plain',
        "definition": 'Fertile, densely populated region of northern India.',
    },
],
}
