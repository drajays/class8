"""Chapter 5: Disasters & Disaster Management."""
from geography8.chapter_data.qgen import mcq, tf, fill, match, short, build_question_set


def _questions(ch):
    topic_id = ch["topicId"]
    mcqs = [
        mcq("", topic_id, 'What is the primary definition of a disaster?', [
        'A planned event',
        'An unexpected event causing significant damage to life, property or environment',
        'A seasonal weather change',
        'A government emergency drill',
    ], 1, 'A disaster is an unexpected event causing significant physical damage or destruction to life and property, or drastic environmental change.', exam_tip='ICSE often begins with definition-based MCQs.', teacher_tip='Use textbook wording for full marks.'),
        mcq("", topic_id, 'Which of the following is a slow-onset disaster?', [
        'Earthquake',
        'Cyclone',
        'Drought',
        'Flash flood',
    ], 2, 'Droughts develop slowly over a prolonged period of insufficient rainfall, unlike sudden earthquakes or cyclones.', exam_tip='Slow vs sudden onset is a favourite distinction.', teacher_tip='Contrast drought timeline with flash floods.'),
        mcq("", topic_id, "Approximately what percentage of India's land area is vulnerable to earthquakes?", [
        '25%',
        '45%',
        '65%',
        '85%',
    ], 2, "About 65% of India's land area is vulnerable to earthquakes, making it one of the most seismically active countries.", exam_tip='Memorise the 65-12-8-70 vulnerability quartet.', teacher_tip='Link to diverse plate boundaries and Himalayan belt.'),
        mcq("", topic_id, 'The study of earthquakes is called:', [
        'Volcanology',
        'Seismology',
        'Meteorology',
        'Geomorphology',
    ], 1, 'Seismology is the scientific study of earthquakes; seismologists use seismographs to record shocks.', exam_tip="Don't confuse with volcanology (volcanoes).", teacher_tip=''),
        mcq("", topic_id, 'Earthquake magnitude is measured on the:', [
        'Beaufort Scale',
        'Richter Scale',
        'Mercalli Scale only',
        'Kelvin Scale',
    ], 1, 'The Richter Scale measures earthquake magnitude. Mercalli measures intensity at surface.', exam_tip='Richter = magnitude; Mercalli = felt intensity.', teacher_tip=''),
        mcq("", topic_id, "The point on Earth's surface where earthquake effects are strongest is the:", [
        'Focus',
        'Epicentre',
        'Mantle',
        'Fault line',
    ], 1, 'The epicentre is the point on the surface directly above the focus where maximum damage occurs.', exam_tip='Focus/hypocentre is underground; epicentre is on surface.', teacher_tip=''),
        mcq("", topic_id, 'Which seismic zone includes the entire Himalayan belt?', [
        'Zone II',
        'Zone III',
        'Zone IV',
        'Zone V',
    ], 3, 'The Himalayan belt lies in Seismic Zone V—the very high risk zone—due to Indo-Eurasian plate collision.', exam_tip='Zone V = highest risk; Himalayas = classic example.', teacher_tip=''),
        mcq("", topic_id, 'Kachchh in Gujarat falls in which seismic zone?', [
        'Zone II',
        'Zone III',
        'Zone IV',
        'Zone V',
    ], 2, 'Kachchh and the Ganga-Brahmaputra basin are in Seismic Zone IV (high risk).', exam_tip='Bhuj 2001 earthquake centred in Kachchh.', teacher_tip=''),
        mcq("", topic_id, 'Riverine floods in India are mainly caused by:', [
        'Desertification',
        'South-west monsoon rainfall overflowing rivers',
        'Earthquakes only',
        'Industrial pollution',
    ], 1, 'South-west monsoon brings heavy rainfall causing rivers like Ganga and Brahmaputra to overflow their banks.', exam_tip='Monsoon + flood plains = riverine floods.', teacher_tip=''),
        mcq("", topic_id, 'Which river system causes major floods in Assam?', [
        'Narmada',
        'Brahmaputra',
        'Godavari',
        'Krishna',
    ], 1, 'The Brahmaputra River causes severe flooding in Assam, especially during monsoon and when water levels rise rapidly.', exam_tip='Brahmaputra = Assam floods; link to 2020 disaster.', teacher_tip=''),
        mcq("", topic_id, 'Flash floods are:', [
        'Always caused by dam construction',
        'Sudden floods from cloudbursts, dam breaches or rapid snow melt',
        'Only coastal phenomena',
        'Predictable months in advance',
    ], 1, 'Flash floods occur suddenly from intense rain, dam failure, or rapid snow melt, leaving little evacuation time.', exam_tip='Flash = sudden; riverine = gradual monsoon swell.', teacher_tip=''),
        mcq("", topic_id, 'Cyclones are characterised by:', [
        'High pressure and calm winds',
        'Low pressure, heavy rain and powerful winds up to 300 km/h',
        'Only desert conditions',
        'Underground crustal movement',
    ], 1, 'Cyclones are intense low-pressure systems over warm oceans with violent winds, heavy rain and storm surges.', exam_tip='Low pressure = air rushes inward and upward.', teacher_tip=''),
        mcq("", topic_id, "India's coastline length is approximately:", [
        '5,000 km',
        '7,516.6 km',
        '10,000 km',
        '3,200 km',
    ], 1, 'India has a coastline of about 7,516.6 km, exposed to cyclones from the Bay of Bengal and Arabian Sea.', exam_tip='Standard ICSE figure—memorise precisely.', teacher_tip=''),
        mcq("", topic_id, 'Which state is NOT among the most cyclone-vulnerable?', [
        'Odisha',
        'West Bengal',
        'Rajasthan',
        'Tamil Nadu',
    ], 2, 'Rajasthan is landlocked and not cyclone-prone; Odisha, West Bengal, Andhra Pradesh and Tamil Nadu face cyclones.', exam_tip='Coastal vs inland states—map-based reasoning.', teacher_tip=''),
        mcq("", topic_id, 'About what percentage of India is drought-prone?', [
        '10%',
        '20%',
        '30%',
        '50%',
    ], 2, "Approximately 30% of India's land area is drought-prone, especially in semi-arid regions.", exam_tip='Pair with Rajasthan, Gujarat, MP list.', teacher_tip=''),
        mcq("", topic_id, 'The Bhopal gas tragedy (1984) involved leakage of:', [
        'Chlorine gas',
        'Methyl isocyanate',
        'Carbon monoxide',
        'Sulphur dioxide',
    ], 1, 'Methyl isocyanate leaked from the Union Carbide factory in Bhopal, killing about 2,500 people.', exam_tip='Bhopal = MIC; most cited man-made disaster in India.', teacher_tip=''),
        mcq("", topic_id, 'Chernobyl nuclear disaster occurred in:', [
        '1984',
        '1986',
        '1991',
        '2001',
    ], 1, 'The Chernobyl nuclear plant accident occurred in 1986 in Ukraine (former USSR), spreading radiation widely.', exam_tip="Chernobyl 1986; Bhopal 1984—don't swap years.", teacher_tip=''),
        mcq("", topic_id, 'The Disaster Management Act in India was enacted in:', [
        '2001',
        '2004',
        '2005',
        '2010',
    ], 2, 'The Disaster Management Act was passed in 2005, leading to creation of NDMA and State DMAs.', exam_tip='2005 = NDMA birth year.', teacher_tip=''),
        mcq("", topic_id, 'NDMA stands for:', [
        'National Development and Management Authority',
        'National Disaster Management Authority',
        'National Defence Management Agency',
        'National Data Management Authority',
    ], 1, 'NDMA is the National Disaster Management Authority—the apex body for disaster policy in India.', exam_tip='NDMA sets policy; NDRF executes rescue.', teacher_tip=''),
        mcq("", topic_id, 'During an earthquake indoors, the recommended technique is:', [
        'Run outside immediately',
        'Drop, Cover and Hold',
        'Stand in a doorway only',
        'Use the elevator',
    ], 1, 'Drop to the ground, take cover under sturdy furniture, and hold on until shaking stops.', exam_tip="Exact phrase 'Drop, Cover, Hold' is textbook language.", teacher_tip=''),
        mcq("", topic_id, 'Consider the following statements about floods:\n1. Floods remove fertile topsoil.\n2. Embankments help prevent floods.\nWhich is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 2, 'Both are correct: floods erode fertile topsoil, and well-maintained embankments along rivers reduce flood risk.', exam_tip='Statement-type MCQs mirror UPSC pattern.', teacher_tip=''),
        mcq("", topic_id, 'Consider the following:\n1. Cyclones form over warm ocean waters.\n2. Droughts result from prolonged rainfall deficit.\nWhich is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 2, 'Both statements are correct—cyclones need warm ocean heat; droughts arise from extended dry periods.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Man-made disasters differ from natural disasters mainly because they:', [
        'Never cause loss of life',
        'Result from human action, error or intent',
        'Always give long advance warning',
        'Only occur in cities',
    ], 1, 'Man-made disasters arise from human acts—accidental (gas leak) or intentional (terrorism, nuclear weapons).', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The Uphaar cinema tragedy (1997) is an example of:', [
        'Flood disaster',
        'Fire disaster',
        'Cyclone disaster',
        'Drought disaster',
    ], 1, 'The Uphaar cinema fire in Delhi (1997) showed how crowded venues with few exits increase fire casualties.', exam_tip='Case-study MCQs test real-world awareness.', teacher_tip=''),
        mcq("", topic_id, 'Hybrid disasters involve:', [
        'Only natural causes',
        'Only human causes',
        'Both human actions and natural forces',
        'Neither natural nor human causes',
    ], 2, 'Hybrid disasters combine human factors (e.g., deforestation) with natural triggers (heavy rain causing landslides).', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which organisation assists in disaster relief alongside the government?', [
        'IMF only',
        'Red Cross Society',
        'WTO',
        'FIFA',
    ], 1, 'The Red Cross Society, NGOs, UN agencies, Army and police assist government relief efforts.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Retrofitting of buildings refers to:', [
        'Demolishing old buildings',
        'Strengthening structures to withstand earthquakes',
        'Painting buildings',
        'Building new dams',
    ], 1, 'Retrofitting strengthens existing buildings to better resist seismic shocks—a key mitigation measure.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'During floods, electrical mains should be:', [
        'Left on for lighting',
        'Switched off to prevent short-circuits',
        'Connected to generators only',
        'Ignored',
    ], 1, 'Switching off electrical mains prevents electrocution and short-circuits during floodwaters.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Storm surges during cyclones cause maximum damage during:', [
        'Low tide',
        'High tide (storm tides)',
        'Full moon only',
        'Winter season',
    ], 1, 'Storm tides—storm surges coinciding with high tide—cause the greatest coastal devastation.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which gas was nicknamed in Hiroshima and Nagasaki bombings?', [
        'Little Boy and Fat Man were bomb names, not gases',
        'Methyl isocyanate',
        'Chlorine',
        'Methane',
    ], 0, "'Little Boy' and 'Fat Man' were the nicknames of the atomic bombs dropped on Hiroshima and Nagasaki in 1945.", exam_tip='Trick question—bombs not gases.', teacher_tip=''),
        mcq("", topic_id, 'NDRF is primarily responsible for:', [
        'Setting disaster policy',
        'Search, rescue and disaster response operations',
        'Weather forecasting',
        'Building schools',
    ], 1, 'NDRF (National Disaster Response Force) conducts specialised rescue and response on the ground.', exam_tip='NDMA = policy; NDRF = operations.', teacher_tip=''),
        mcq("", topic_id, 'Deforestation can worsen disasters by:', [
        'Reducing landslide risk',
        'Increasing soil erosion and landslide susceptibility',
        'Preventing floods',
        'Stopping earthquakes',
    ], 1, 'Removing forest cover increases erosion; heavy rain then triggers landslides—a hybrid disaster pathway.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Kerala experienced catastrophic floods in:', [
        '2015',
        '2018',
        '2020',
        '2022',
    ], 1, 'Kerala faced its worst floods in a century in August 2018 due to intense monsoon rains and dam releases.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is a natural disaster?', [
        'Bhopal gas leak',
        'Train accident',
        'Earthquake',
        'Industrial fire',
    ], 2, 'Earthquakes are natural disasters caused by tectonic forces without direct human causation.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The focus of an earthquake is located:', [
        "On the Earth's surface",
        'Beneath the surface at the origin of seismic waves',
        'In the atmosphere',
        'At the epicentre only',
    ], 1, 'The focus (hypocentre) is the underground point where the earthquake originates; epicentre is above it on the surface.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Flood shelters are important because they:', [
        'Store agricultural produce',
        'Provide safe evacuation points for people and livestock',
        'Generate electricity',
        'Measure rainfall',
    ], 1, 'Flood shelters in vulnerable areas enable quick evacuation and relief for people and animals.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Developing countries suffer more from disasters mainly due to:', [
        'Lower population',
        'Weaker disaster management and preparedness systems',
        'Better infrastructure',
        'Fewer natural hazards',
    ], 1, 'Limited resources, poor infrastructure and inadequate preparedness amplify disaster impacts in developing nations.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'School disaster management aims to:', [
        'Cancel all classes permanently',
        'Protect students, ensure education continuity and build safety culture',
        'Eliminate all natural hazards',
        'Replace NDMA',
    ], 1, 'School DM systems protect students and staff, minimise disruption and develop a culture of safety through drills.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which rivers cause floods in the Punjab region?', [
        'Indus tributaries during monsoon',
        'Amazon tributaries',
        'Nile distributaries',
        'Danube branches',
    ], 0, "Indus tributaries and monsoon rains cause flooding in Punjab's river plains.", exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Gas leakage at home should be handled by:', [
        'Lighting a match to check',
        'Opening windows, switching off stoves and leaving the area',
        'Sealing all windows tightly',
        'Using electrical switches freely',
    ], 1, 'Ventilate, avoid sparks/flames, switch off gas sources and evacuate—never use electrical switches that may spark.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The Ganga-Brahmaputra basin is in seismic zone:', [
        'II',
        'III',
        'IV',
        'V',
    ], 2, 'The Ganga-Brahmaputra basin is in Seismic Zone IV along with Kachchh.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Drought can be worsened by:', [
        'Afforestation',
        'Deforestation and groundwater overuse',
        'Heavy monsoon',
        'Cyclones',
    ], 1, 'Deforestation, unscientific farming and groundwater depletion intensify drought impacts.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Assam floods 2020 affected which national park?', [
        'Kaziranga National Park',
        'Jim Corbett',
        'Ranthambore',
        'Gir',
    ], 0, '2020 Assam floods submerged large parts of Kaziranga, killing many wild animals.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Consider:\n1. NDMA was created under the Disaster Management Act 2005.\n2. NDMA only handles man-made disasters.\nWhich is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 0, 'Statement 1 is correct. Statement 2 is wrong—NDMA handles both natural and man-made disasters.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'During an earthquake outdoors, one should:', [
        'Stand under a tree',
        'Move to an open area away from buildings and power lines',
        'Climb a building',
        'Stand on a bridge',
    ], 1, 'Open ground away from structures, trees and power lines minimises risk from falling debris.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'First-aid knowledge is important in disasters because:', [
        'It replaces hospitals permanently',
        'Immediate care before professional help arrives saves lives',
        'It prevents earthquakes',
        'It is only for doctors',
    ], 1, 'First aid bridges the gap between injury and medical care, reducing preventable deaths.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Community preparedness includes stockpiling:', [
        'Luxury goods only',
        'Food, medicines and shelter materials',
        'Fireworks',
        'Non-essential electronics',
    ], 1, 'Emergency kits with food, water, medicine and shelter supplies are essential for disaster-prone communities.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which is NOT an effect of disasters?', [
        'Loss of livelihood',
        'Infrastructure damage',
        'Guaranteed economic growth',
        'Disease outbreaks',
    ], 2, 'Disasters destroy livelihoods and infrastructure and can cause epidemics—they do not guarantee growth.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The south-west monsoon contributes to floods in:', [
        'Sahara Desert',
        'Indo-Gangetic and Brahmaputra flood plains',
        'Arctic tundra',
        'Andes Mountains',
    ], 1, 'Heavy SW monsoon rains swell Himalayan-fed rivers, flooding densely populated northern plains.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Nuclear radiation exposure can cause:', [
        'Improved eyesight',
        'Cancer and genetic damage',
        'Instant immunity',
        'No health effects',
    ], 1, 'Ionising radiation damages cells, causing cancers and long-term genetic effects across generations.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Mumbai floods (2017) disrupted:', [
        'Air traffic only',
        'Suburban trains and normal city life',
        'International borders',
        'Space programmes',
    ], 1, "Heavy rains halted Mumbai's suburban train network—the city's lifeline—causing widespread disruption.", exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'State Disaster Management Authorities are created under:', [
        'Indian Penal Code',
        'Disaster Management Act 2005',
        'Forest Act',
        'Motor Vehicles Act',
    ], 1, 'The 2005 Act established both NDMA at the centre and SDMAs in states.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Blocking toilets with sandbags during floods prevents:', [
        'Rain entry',
        'Sewage backflow',
        'Wind damage',
        'Earthquake shocks',
    ], 1, 'Sandbags block sewage from backing up into homes when floodwater overwhelms drainage.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Plate tectonics explains earthquakes because:', [
        'Plates are stationary',
        'Colliding floating plates release vibrations through the crust',
        'Only volcanic areas have plates',
        'Mantle is solid rock with no movement',
    ], 1, 'Plates float on semi-liquid mantle; collisions along boundaries generate seismic waves.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Which disaster is associated with storm tides?', [
        'Drought',
        'Cyclone',
        'Earthquake',
        'Landslide in desert',
    ], 1, 'Cyclonic storm surges combined with high tide create destructive storm tides along coasts.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Public awareness programmes on disasters are run to:', [
        'Increase fear',
        'Prepare communities with knowledge and preventive measures',
        'Eliminate monsoons',
        'Stop tectonic activity',
    ], 1, 'Awareness and drills reduce panic and improve survival rates when disasters strike.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Snake bites are common during floods because:', [
        'Snakes migrate to dry ground where people also gather',
        'Snakes cannot swim',
        'Floods eliminate snakes',
        'Snakes only live in oceans',
    ], 0, 'Floodwaters displace snakes to higher ground, increasing human-snake encounters.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The poorest populations suffer most in disasters because:', [
        'They live in safer areas',
        'They often lack resources, safe housing and early warnings',
        'They cause disasters',
        'They receive excess government aid',
    ], 1, 'Poverty, informal housing in hazard zones and limited access to relief amplify vulnerability.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'IMD warnings help in:', [
        'Cyclone and flood preparedness',
        'Preventing plate movement',
        'Stopping chemical leaks',
        'Retrofitting buildings automatically',
    ], 0, 'India Meteorological Department issues weather and cyclone warnings enabling timely evacuation.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'A long stick helps during floods to:', [
        'Catch fish only',
        'Test depth and stability while wading through water',
        'Signal aircraft only',
        'Measure earthquakes',
    ], 1, 'A stick probes unknown depths and hidden obstacles in murky floodwater.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Consider:\n1. Earthquakes can trigger tsunamis.\n2. Earthquakes can trigger landslides.\nWhich is/are correct?', [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2',
    ], 2, 'Undersea earthquakes displace water causing tsunamis; ground shaking triggers slopes to fail as landslides.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Industrial accidents are classified as:', [
        'Natural disasters',
        'Man-made disasters',
        'Meteorological events',
        'Astronomical events',
    ], 1, 'Industrial and chemical accidents result from human activity and are man-made disasters.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Aftershocks following an earthquake mean:', [
        'The earthquake is completely over with no further risk',
        'Smaller tremors may follow the main shock; caution is still needed',
        'A cyclone is approaching',
        'Floods are impossible',
    ], 1, 'Aftershocks are smaller quakes after the main event; damaged buildings may collapse further.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Disaster management includes activities:', [
        'Only after a disaster',
        'Before, during and after a disaster',
        'Only during festivals',
        'Only in schools',
    ], 1, 'DM spans mitigation, preparedness, response and recovery across all phases.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Himachal Pradesh floods (2023) saw deployment of:', [
        'NDRF and ITBP rescue teams',
        'Only local police',
        'Foreign armies only',
        'No government response',
    ], 0, 'Over 20 NDRF teams, ITBP and helicopters were deployed for Himachal flood rescue in 2023.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Water contamination after disasters can lead to:', [
        'Improved health',
        'Epidemics like cholera and typhoid',
        'Permanent immunity',
        'No health impact',
    ], 1, 'Contaminated water spreads water-borne diseases—common post-flood secondary disaster.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'The primary purpose of NDMA is to:', [
        'Conduct elections',
        'Coordinate disaster mitigation and formulate national DM policies',
        'Manage railways',
        'Regulate schools only',
    ], 1, 'NDMA coordinates national efforts and sets policies for timely, effective disaster response.', exam_tip='', teacher_tip=''),
        mcq("", topic_id, 'Landslides are often triggered by:', [
        'Earthquakes and heavy rainfall on unstable slopes',
        'Low humidity only',
        'Ocean tides alone',
        'Solar eclipses',
    ], 0, 'Ground shaking and saturated soil on steep slopes commonly trigger landslides, especially where deforestation has reduced root binding.', exam_tip='Link landslides to hybrid disaster pathway.', teacher_tip=''),
        mcq("", topic_id, 'A tsunami is best described as:', [
        'A slow river flood',
        'A series of giant sea waves caused by underwater earthquakes or volcanic eruptions',
        'A desert dust storm',
        'A chemical cloud',
    ], 1, 'Tsunamis are seismic sea waves generated when ocean-floor displacement suddenly moves vast volumes of water.', exam_tip='2004 Indian Ocean tsunami is the classic case study.', teacher_tip=''),
        mcq("", topic_id, 'The Mercalli Scale measures:', [
        'Earthquake magnitude at the focus',
        'Felt intensity and damage at the surface',
        'Wind speed in cyclones',
        'River discharge in floods',
    ], 1, 'Mercalli measures observed effects and damage; Richter measures energy released at the source.', exam_tip='Richter = magnitude; Mercalli = intensity—do not swap.', teacher_tip=''),
    ]
    tfs = [
        tf("", topic_id, 'All disasters occur suddenly without any warning.', 'False', 'Droughts develop slowly; some man-made disasters may give warning signals.'),
        tf("", topic_id, "About 65% of India's land area is vulnerable to earthquakes.", 'True', "This is a standard textbook statistic highlighting India's seismic vulnerability."),
        tf("", topic_id, "The epicentre is located beneath the Earth's surface at the origin of the earthquake.", 'False', 'The focus is underground; the epicentre is on the surface above the focus.'),
        tf("", topic_id, 'Cyclones are high-pressure systems with calm weather.', 'False', 'Cyclones are low-pressure systems with violent winds and heavy rain.'),
        tf("", topic_id, 'Bhopal gas tragedy was caused by methyl isocyanate leakage.', 'True', 'The 1984 Union Carbide leak released toxic methyl isocyanate gas.'),
        tf("", topic_id, 'NDMA was established before the Disaster Management Act 2005.', 'False', 'NDMA was created by the Act passed in 2005.'),
        tf("", topic_id, 'Drop, Cover and Hold is the recommended indoor earthquake safety technique.', 'True', 'This three-step method protects against falling debris during shaking.'),
        tf("", topic_id, 'Floods can never have any positive effects on soil.', 'False', 'Floods deposit alluvium that can renew soil fertility over time, though short-term damage is severe.'),
        tf("", topic_id, 'Rajasthan is highly vulnerable to tropical cyclones.', 'False', 'Rajasthan is landlocked; cyclones affect coastal states like Odisha and Tamil Nadu.'),
        tf("", topic_id, 'Developing countries often suffer more from disasters due to weaker preparedness systems.', 'True', 'Limited infrastructure and disaster management capacity increase suffering.'),
    ]
    fills = [
        fill("", topic_id, 'The study of earthquakes is called _____.', 'Seismology', 'Seismology—seismographs record seismic waves.'),
        fill("", topic_id, 'Earthquake magnitude is measured on the _____ Scale.', 'Richter', 'Richter Scale measures magnitude; Mercalli measures felt intensity.'),
        fill("", topic_id, 'The Disaster Management Act in India was passed in _____.', '2005', '2005 Act created NDMA and State DMAs.'),
        fill("", topic_id, 'The toxic gas leaked in the Bhopal tragedy was _____.', 'methyl isocyanate', 'MIC leak from Union Carbide factory, 1984.'),
        fill("", topic_id, 'During an earthquake indoors, follow Drop, _____ and Hold.', 'Cover', 'Drop, Cover, Hold—standard safety protocol.'),
    ]
    matches = [
        match("", topic_id, 'Match disaster type with example:', [{"left": 'Earthquake', "right": 'Bhuj 2001'}, {"left": 'Chemical disaster', "right": 'Bhopal 1984'}, {"left": 'Flood', "right": 'Kerala 2018'}, {"left": 'Nuclear accident', "right": 'Chernobyl 1986'}], 'Earthquake-Bhuj; Chemical-Bhopal; Flood-Kerala; Nuclear-Chernobyl'),
        match("", topic_id, 'Match term with definition:', [{"left": 'Epicentre', "right": 'Surface point of strongest shaking'}, {"left": 'Seismograph', "right": 'Records earthquake waves'}, {"left": 'Storm surge', "right": 'Rise in sea level during cyclone'}, {"left": 'Retrofitting', "right": 'Strengthening old buildings'}], 'Epicentre-surface; Seismograph-records; Storm surge-sea rise; Retrofitting-strengthening'),
        match("", topic_id, 'Match seismic zone with region:', [{"left": 'Zone V', "right": 'Himalayan belt'}, {"left": 'Zone IV', "right": 'Kachchh'}, {"left": 'Coastal cyclone risk', "right": 'Odisha'}, {"left": 'Drought-prone', "right": 'Rajasthan'}], 'Zone V-Himalayas; Zone IV-Kachchh; Cyclone-Odisha; Drought-Rajasthan'),
        match("", topic_id, 'Match safety measure with disaster:', [{"left": 'Embankments', "right": 'Floods'}, {"left": 'Cyclone shelters', "right": 'Cyclones'}, {"left": 'Gas leak protocol', "right": 'Fire/man-made'}, {"left": 'Drop-Cover-Hold', "right": 'Earthquake'}], 'Embankments-floods; Shelters-cyclones; Gas-fire; DCH-earthquake'),
        match("", topic_id, 'Match organisation with role:', [{"left": 'NDMA', "right": 'National policy body'}, {"left": 'NDRF', "right": 'Rescue operations'}, {"left": 'IMD', "right": 'Weather warnings'}, {"left": 'Red Cross', "right": 'Relief assistance'}], 'NDMA-policy; NDRF-rescue; IMD-weather; Red Cross-relief'),
        match("", topic_id, 'Match river with flood region:', [{"left": 'Brahmaputra', "right": 'Assam'}, {"left": 'Ganga', "right": 'UP and Bihar plains'}, {"left": 'Mahanadi', "right": 'Odisha'}, {"left": 'Yamuna', "right": 'Delhi-NCR lowlands'}], 'Brahmaputra-Assam; Ganga-UP/Bihar; Mahanadi-Odisha; Yamuna-Delhi'),
        match("", topic_id, 'Match disaster category:', [{"left": 'Tsunami', "right": 'Natural'}, {"left": 'Train accident', "right": 'Man-made'}, {"left": 'Drought', "right": 'Natural'}, {"left": 'Terrorism', "right": 'Man-made'}], 'Tsunami/ Drought-natural; Train/Terrorism-man-made'),
        match("", topic_id, 'Match vulnerability statistic:', [{"left": '65%', "right": 'Earthquake-prone area'}, {"left": '12%', "right": 'Flood-prone area'}, {"left": '8%', "right": 'Cyclone-prone area'}, {"left": '70%', "right": 'Drought-prone area'}], '65-eq; 12-flood; 8-cyclone; 70-drought'),
        match("", topic_id, 'Match man-made disaster with cause:', [{"left": 'Uphaar tragedy', "right": 'Fire in cinema'}, {"left": 'Bhopal', "right": 'Gas leak'}, {"left": 'Hiroshima', "right": 'Nuclear weapon'}, {"left": 'Chernobyl', "right": 'Reactor accident'}], 'Uphaar-fire; Bhopal-gas; Hiroshima-weapon; Chernobyl-reactor'),
        match("", topic_id, 'Match preparedness item with purpose:', [{"left": 'First-aid kit', "right": 'Immediate injury care'}, {"left": 'Sandbags', "right": 'Block sewage backflow'}, {"left": 'Early warning', "right": 'Timely evacuation'}, {"left": 'Flood shelter', "right": 'Safe refuge'}], 'First-aid-injury; Sandbags-sewage; Warning-evacuation; Shelter-refuge'),
    ]
    shorts = [
        short("", topic_id, 'Differentiate between natural and man-made disasters with two examples each.', 'Natural disasters arise from natural forces (e.g., earthquakes, floods) without direct human causation. Man-made disasters result from human error or intent (e.g., Bhopal gas leak, industrial fires). Natural disasters often cause large-scale devastation; man-made ones may be more localized but equally severe.'),
        short("", topic_id, 'Explain why India is highly vulnerable to disasters.', "India's diverse physiography exposes it to multiple hazards: Himalayan plate boundary (earthquakes, landslides), long coastline (cyclones), monsoon rivers (floods) and semi-arid interiors (droughts). About 65% land is earthquake-prone, 12% flood-prone, 8% cyclone-prone and 70% drought-prone. Dense population and developing infrastructure increase human and economic losses."),
        short("", topic_id, 'Describe safety measures during an earthquake.', 'Indoors: Drop, Cover and Hold under sturdy furniture until shaking stops. Outdoors: move to open ground away from buildings, trees and power lines. Avoid bridges and flyovers. After shaking: check for injuries, administer first aid, inspect building damage, avoid snapped wires and gas leaks, and stay calm for aftershocks. Retrofitting old buildings reduces risk.'),
        short("", topic_id, 'What is disaster management? Why is it important?', 'Disaster management is comprehensive preparedness and efficient handling of affected people and regions before, during and after disasters. It includes mitigation, early warning, rescue, relief and rehabilitation. It is vital because disasters strike without warning; proper planning limits deaths, disease outbreaks and economic damage, especially protecting the poor who suffer most.'),
        short("", topic_id, 'List measures to prevent and manage floods.', 'Prevention: maintain embankments and dykes, manage dams responsibly, preserve watershed forests. Preparedness: flood shelters, rescue boats, IMD monitoring, community evacuation plans. During floods: switch off electrical mains, store food and medicines, use sticks to wade, block toilets with sandbags, heed warnings. After: prevent epidemics with clean water and medical camps.'),
    ]
    return build_question_set(5, topic_id, mcqs, tfs, fills, matches, shorts)


CHAPTER = {
    "topics": [
    {
        "title": 'What Are Disasters?',
        "summary": 'Disasters are sudden or slowly developing events causing massive damage to life, property, infrastructure and the environment.',
        "bullets": [
        'Unexpected events causing physical damage or drastic environmental change',
        'Can be sudden (earthquake, cyclone) or slow-onset (drought)',
        'Long-term impact on society, environment and economy',
        'Broadly natural or man-made; hybrid disasters combine both',
        'Loss of life, injury, infrastructure damage, livelihood loss, disease outbreaks',
    ],
        "body": 'Disasters are unexpected events that cause significant physical damage or destruction to life and property, or result in a drastic change in the environment. While earthquakes, volcanic eruptions, wildfires and hurricanes happen suddenly, droughts may develop slowly and intensify over time. Disasters have long-term impacts on society, the environment and the economy of affected regions. They may have geological, geographical or human causes. Natural disasters include floods, cyclones, earthquakes and droughts; man-made disasters include industrial accidents, transport crashes, terrorism and nuclear incidents. Hybrid disasters arise when human actions amplify natural hazards—for example, deforestation leading to landslides during heavy rain.',
        "explanation": "Think of disasters as shocks that exceed a community's coping capacity. ICSE expects you to distinguish cause, immediate effect and long-term consequence. India's vulnerability is high because of diverse physiography, dense population and uneven development of disaster-preparedness systems.",
        "teacherTip": 'Use recent newspaper clippings (Kerala floods, Uttarakhand cloudbursts) to show how the same hazard produces different impacts in different regions.',
        "examTip": 'Always define disaster first, then classify (natural/man-made/hybrid) before describing a specific type.',
    },
    {
        "title": 'Natural vs Man-made Disasters',
        "summary": 'Natural disasters arise from natural forces; man-made disasters result from human action, error or negligence.',
        "bullets": [
        'Natural: caused by natural factors; often large-scale devastation',
        'Man-made: caused by human error, carelessness or intent',
        'Natural examples: earthquakes, floods, cyclones, droughts, tsunamis',
        'Man-made examples: fires, chemical leaks, nuclear accidents, terrorism',
        'Developing countries suffer more due to weaker disaster-management systems',
    ],
        "body": 'Natural disasters are events caused by natural forces with major effects on population, infrastructure and biodiversity. Man-made disasters result from human acts—intentionally or unintentionally. Unintentional examples include gas leaks from factories and electrical fires; intentional examples include nuclear warfare. Natural disasters often occur suddenly with little warning, while some man-made crises may give signals. India is highly disaster-prone: about 65% of land area is vulnerable to earthquakes, 12% to floods, 8% to cyclones and 70% to drought. Underdeveloped countries face greater suffering because preparedness and relief systems are weaker.',
        "explanation": "The comparison table in your textbook contrasts cause, scale, duration and warning signals. UPSC-style questions often test whether a disaster is truly 'natural' when human land-use worsened the outcome.",
        "teacherTip": 'Draw a two-column table and ask students to classify Bhopal gas tragedy, 2004 tsunami and Kerala 2018 floods.',
        "examTip": "Mention India's vulnerability percentages—they are high-yield ICSE facts.",
    },
    {
        "title": 'Earthquakes — Causes, Zones and Measurement',
        "summary": 'Earthquakes are sudden crustal movements measured on the Richter scale; India has five seismic zones with the Himalayas in Zone V.',
        "bullets": [
        "Sudden violent movement of Earth's crust due to plate collision",
        'Studied through seismology; recorded by seismographs',
        'Intensity measured on Richter Scale; epicentre faces maximum damage',
        'Himalayan belt = Seismic Zone V (very high risk)',
        'Kachchh and Ganga-Brahmaputra basin = Zone IV',
    ],
        "body": "An earthquake is a sudden, violent movement of a portion of the Earth's crust caused by disturbance beneath the surface. The study of earthquakes is seismology; seismographs record shocks. The Richter Scale measures magnitude. The epicentre is the point on the surface where effects are strongest. Earth's crust consists of interlocking tectonic plates floating on the mantle; collisions produce vibrations. Poorly constructed buildings collapse first. The entire Himalayan belt lies on the boundary of the Eurasian and Indian plates (Seismic Zone V). Kachchh (Gujarat) and the Ganga-Brahmaputra basin are in Zone IV. Major recent earthquakes include Bhuj (2001), Sikkim (2011), Nepal (2015) and Assam (2021).",
        "explanation": 'Focus: cause (plate tectonics) → measurement (Richter) → Indian zonation map → safety. Do not confuse epicentre (surface) with focus/hypocentre (underground origin).',
        "teacherTip": "Overlay India's seismic zone map with Himalayan geology to show why Zone V aligns with plate boundary.",
        "examTip": 'Name Seismic Zones IV and V with examples; link Himalayas to Indo-Eurasian plate collision.',
    },
    {
        "title": 'Floods — Causes, Effects and Prevention',
        "summary": 'Floods occur when excess water submerges land; in India, monsoon riverine floods dominate the Indo-Gangetic and Brahmaputra plains.',
        "bullets": [
        'Sudden influx of water submerges land and threatens life and property',
        'Riverine floods from monsoon overflow of Brahmaputra, Ganga, Yamuna, Mahanadi',
        'Also caused by dam breach, cyclonic storm surges, flash floods',
        'Removes fertile topsoil; spreads water-borne diseases',
        'Prevention: embankments, flood shelters, early warning, evacuation plans',
    ],
        "body": 'A flood occurs when a sudden influx of water submerges land. Riverine floods during the south-west monsoon affect low-lying river basins most severely. The Brahmaputra, Ganga, Yamuna, Mahanadi and Punjab rivers cause major floods. Flash floods result from dam breaches, cloudbursts or sudden snow melt. Floods wash away fertile topsoil, damage crops and property, and force migration. Kerala (2018) and Assam (2020) saw catastrophic flooding affecting millions. Prevention includes maintaining dykes and embankments, establishing flood shelters, stockpiling dry food and medicines, and heeding IMD warnings. Residents should switch off electrical mains, store valuables at height and avoid wading without a stick.',
        "explanation": "Distinguish riverine (gradual monsoon swell) from flash floods (sudden). Link flood plains' fertility with flood risk—why population clusters in vulnerable zones.",
        "teacherTip": 'Discuss why Mumbai floods despite drainage investments—urbanisation + high rainfall + low-lying areas.',
        "examTip": 'List causes AND preventive measures; examiners reward balanced answers.',
    },
    {
        "title": 'Cyclones and Droughts',
        "summary": 'Cyclones are intense low-pressure systems over warm seas; droughts are prolonged rainfall deficits affecting agriculture and livelihoods.',
        "bullets": [
        'Cyclones: low-pressure systems with winds up to 300 km/h over warm oceans',
        "India's 7,516.6 km coastline vulnerable in Bay of Bengal and Arabian Sea",
        'Worst-affected states: West Bengal, Odisha, Andhra Pradesh, Tamil Nadu',
        'Drought: prolonged insufficient rainfall; 30% of India is drought-prone',
        'Rajasthan, Gujarat, MP, Maharashtra, Karnataka, Odisha face water scarcity',
    ],
        "body": "Cyclones form over warm ocean waters as swirling low-pressure systems with heavy rain, huge waves and violent winds (up to 300 km/h). Storm surges during high tide cause enormous coastal damage. India's long coastline faces severe cyclones from both the Bay of Bengal and Arabian Sea. Droughts result from prolonged rainfall shortage, leading to falling water tables, crop failure, fodder scarcity and migration. Deforestation, groundwater misuse and unscientific farming worsen droughts. About 30% of India's land is drought-prone. Floods and droughts often occur in the same year in different regions, bringing epidemics and human suffering.",
        "explanation": 'Cyclones = excess water + wind; droughts = water deficit. Both are climate-related but opposite in mechanism. IMD naming and NDMA cyclone guidelines are bonus facts.',
        "teacherTip": 'Track IMD cyclone names for the season to make the topic current.',
        "examTip": 'Memorise vulnerable coastal states and drought-prone states as separate lists.',
    },
    {
        "title": 'Man-made Disasters — Fires, Chemical and Nuclear',
        "summary": 'Fires, chemical leaks and nuclear accidents cause localized but intense devastation, often preventable through regulation and safety drills.',
        "bullets": [
        'Fires: poor wiring, gas leaks, carelessly discarded matches; Uphaar tragedy (1997)',
        'Chemical disasters: toxic gas release—Bhopal methyl isocyanate leak (1984)',
        'Nuclear disasters: weapons (Hiroshima, Nagasaki) or reactor accidents (Chernobyl 1986)',
        'Radiation causes long-term cancers and genetic damage',
        'Prevention: building codes, industrial safety audits, emergency drills',
    ],
        "body": "Man-made disasters include fires, chemical leaks, biological hazards, transport and industrial accidents. Fires often result from faulty electrical wiring, gas leaks or carelessness—the Uphaar cinema fire (Delhi, 1997) showed how crowded spaces with few exits multiply casualties. The Bhopal gas tragedy (1984) from methyl isocyanate leakage killed about 2,500 people with effects spanning generations. Nuclear disasters may be intentional (Hiroshima, Nagasaki—'Little Boy' and 'Fat Man') or accidental (Chernobyl, 1986). Radioactivity causes nausea, cancer and long-term genetic harm. During nuclear emergencies, people should stay indoors with doors and windows closed until official evacuation.",
        "explanation": 'Case studies (Bhopal, Chernobyl, Uphaar) are exam favourites. Emphasise prevention vs response for man-made disasters—many are avoidable.',
        "teacherTip": "Invite a fire-safety demo from local fire brigade; students remember 'stop, drop, roll' and gas-leak protocols.",
        "examTip": 'Name the gas in Bhopal tragedy and the year; link to industrial safety regulations.',
    },
    {
        "title": 'Disaster Management — Framework and Importance',
        "summary": 'Disaster management covers preparedness, response and recovery before, during and after disasters to minimise suffering and damage.',
        "bullets": [
        'Overall preparedness to handle and manage affected regions and people',
        'Phases: mitigation, preparedness, response, recovery',
        'Government, NGOs, Red Cross, UN agencies, Army and police coordinate relief',
        'School disaster management: protect students, ensure education continuity, safety culture',
        'Community-level stockpiles of food, medicine and shelter material essential',
    ],
        "body": 'Disaster management is the overall preparedness to handle disasters and efficiently manage affected regions and people. It involves plans before, during and after disasters to reduce suffering and damage. In developing countries like India, the poor suffer most, making prior planning critical. The government sets up dedicated departments, allocates relief funds, installs early-warning systems and runs awareness programmes. NGOs, the Red Cross, UN agencies, police and Army assist in rescue and rehabilitation. Schools should conduct earthquake and fire drills, teach first aid, and maintain evacuation plans. Region-specific communities must keep emergency kits ready.',
        "explanation": 'Disaster management is a cycle, not a one-time event. ICSE may ask you to list pre-disaster vs post-disaster measures separately.',
        "teacherTip": 'Conduct a mock earthquake drill using Drop-Cover-Hold; debrief what went wrong.',
        "examTip": 'Use headings: Before / During / After disaster for structured long answers.',
    },
    {
        "title": 'NDMA, Safety Measures and Preparedness',
        "summary": 'The Disaster Management Act 2005 created NDMA; safety measures include Drop-Cover-Hold, flood kits, cyclone shelters and retrofitting.',
        "bullets": [
        'Disaster Management Act 2005 → NDMA and State DMAs',
        'NDMA: highest policy body for disaster plans and coordinated response',
        'Earthquake indoors: Drop, Cover, Hold under sturdy furniture',
        'Flood safety: heed warnings, switch off mains, store essentials, avoid snake bites',
        'NDRF teams deployed for rescue (e.g., Himachal floods 2023)',
    ],
        "body": 'The Government of India enacted the Disaster Management Act in 2005, creating the National Disaster Management Authority (NDMA) and State Disaster Management Authorities. NDMA coordinates mitigation and response and formulates national policies and guidelines. During earthquakes, indoors: drop, cover and hold; outdoors: move to open ground away from buildings and power lines. Old buildings should be retrofitted. Flood-prone residents should maintain food, water and medicines, block toilets with sandbags, and follow IMD alerts. NDRF (National Disaster Response Force) teams assist in rescue operations. Fire safety requires checking wiring, gas pipelines and having fire extinguishers. Preparedness saves more lives than post-disaster relief alone.',
        "explanation": 'NDMA vs NDRF: NDMA sets policy; NDRF executes rescue on ground. Both acronyms appear frequently in exams.',
        "teacherTip": 'Show NDMA website hazard maps for your state to localise the chapter.',
        "examTip": "Write 'Drop, Cover, Hold' in exactly that order for earthquake safety marks.",
    },
],
    "highYieldFacts": [
    'Disasters cause loss of life, injury, infrastructure damage, livelihood loss, psychological trauma and disease outbreaks.',
    'Natural disasters arise from natural forces; man-made disasters from human error or intent.',
    'Hybrid disasters combine human action with natural forces—e.g., deforestation causing landslides.',
    "About 65% of India's land area is vulnerable to earthquakes.",
    'About 12% of India is flood-prone; 8% cyclone-prone; 70% drought-prone.',
    'Earthquakes are studied through seismology and recorded by seismographs.',
    'Earthquake intensity is measured on the Richter Scale.',
    'The epicentre is where surface effects are strongest.',
    'Himalayan belt = Seismic Zone V (very high risk).',
    'Kachchh and Ganga-Brahmaputra basin = Seismic Zone IV.',
    'Earthquakes result from tectonic plate collisions along faults.',
    'Riverine floods mainly occur during south-west monsoon overflow.',
    'Major flood-prone rivers: Brahmaputra, Ganga, Yamuna, Mahanadi.',
    'Flash floods can follow dam breaches, cloudbursts or sudden snow melt.',
    'Cyclones are low-pressure systems over warm oceans with winds up to 300 km/h.',
    "India's coastline is about 7,516.6 km—vulnerable to Bay of Bengal and Arabian Sea cyclones.",
    'Cyclone-vulnerable states: West Bengal, Odisha, Andhra Pradesh, Tamil Nadu.',
    'Drought = prolonged rainfall deficit; about 30% of India is drought-prone.',
    'Drought-prone states include Rajasthan, Gujarat, MP, Maharashtra, Karnataka, Odisha.',
    'Bhopal gas tragedy (1984): methyl isocyanate leak from Union Carbide factory.',
    'Chernobyl nuclear accident occurred in 1986 in Ukraine (former USSR).',
    'Disaster Management Act passed in 2005; established NDMA.',
    'NDMA is the apex body for disaster policy and coordination in India.',
    'Earthquake safety indoors: Drop, Cover, Hold.',
    'Flood prevention includes embankments, flood shelters and early warning systems.',
    'Retrofitting strengthens old buildings against seismic shocks.',
    'NDRF teams assist in rescue and relief operations nationwide.',
    'School disaster management protects students and maintains education continuity.',
    'Developing countries suffer more from disasters due to weaker preparedness systems.',
    'Kerala floods (2018) and Assam floods (2020) affected over 5 million people each.',
],
    "questions": _questions,
    "mindmap": """mindmap
  root((Disasters & DM))
    Types
      Natural
        Earthquake
        Flood
        Cyclone
        Drought
      Man-made
        Fire
        Chemical
        Nuclear
    India Risk
      65% seismic
      12% flood
      8% cyclone
      70% drought
    Earthquakes
      Richter Scale
      Epicentre
      Zone V Himalayas
    Floods
      Monsoon rivers
      Flash floods
      Embankments
    Management
      NDMA 2005
      NDRF rescue
      Drop Cover Hold
    Safety
      Flood kits
      Cyclone shelters
      First aid""",
    "cheatsheet": [
    'Disaster = unexpected event causing major damage to life, property or environment.',
    'Natural: earthquakes, floods, cyclones, droughts, tsunamis, landslides.',
    'Man-made: fires, chemical leaks, nuclear accidents, transport crashes, terrorism.',
    'Hybrid: human action + natural trigger (deforestation → landslide).',
    'India: 65% earthquake, 12% flood, 8% cyclone, 70% drought vulnerable.',
    'Seismology + seismographs; Richter Scale = magnitude; epicentre = surface max damage.',
    'Zone V = Himalayas; Zone IV = Kachchh, Ganga-Brahmaputra basin.',
    'Riverine floods = SW monsoon; rivers: Brahmaputra, Ganga, Yamuna, Mahanadi.',
    'Cyclones = low pressure, winds to 300 km/h; coast 7,516.6 km.',
    'Cyclone states: WB, Odisha, AP, Tamil Nadu.',
    'Drought = rainfall deficit; 30% India drought-prone; Rajasthan, Gujarat key states.',
    'Bhopal 1984 = methyl isocyanate; Chernobyl 1986 = nuclear accident.',
    'DM Act 2005 → NDMA + SDMAs; NDRF = rescue force.',
    'Earthquake: Drop, Cover, Hold indoors; open ground outdoors.',
    'Flood: switch off mains, sandbags, stock food/water/medicine, heed IMD.',
    'Retrofitting = strengthen buildings; embankments prevent river floods.',
    'NDMA = apex policy body; Red Cross/NGOs assist relief.',
    'Effects: death, injury, infrastructure loss, livelihood loss, disease, trauma.',
    'School DM: drills, first aid, evacuation plans, safety culture.',
    'Poor suffer most—weak housing, hazard-zone settlements, limited relief access.',
    'Storm tide = storm surge + high tide = maximum coastal damage.',
    'Aftershocks follow main earthquake—damaged buildings still dangerous.',
    'Kerala 2018, Assam 2020, Himachal 2023 = recent Indian flood case studies.',
],
    "wordCards": [
    {
        "term": 'Disaster',
        "definition": 'Unexpected event causing major damage to life, property or environment',
    },
    {
        "term": 'Natural disaster',
        "definition": 'Caused by natural forces like earthquakes or floods',
    },
    {
        "term": 'Man-made disaster',
        "definition": 'Caused by human error, negligence or intent',
    },
    {
        "term": 'Hybrid disaster',
        "definition": 'Combines human actions with natural hazards',
    },
    {
        "term": 'Seismology',
        "definition": 'Scientific study of earthquakes',
    },
    {
        "term": 'Seismograph',
        "definition": 'Instrument recording earthquake waves',
    },
    {
        "term": 'Richter Scale',
        "definition": 'Measures earthquake magnitude',
    },
    {
        "term": 'Epicentre',
        "definition": 'Surface point above focus with strongest shaking',
    },
    {
        "term": 'Focus',
        "definition": 'Underground origin of an earthquake',
    },
    {
        "term": 'Seismic Zone V',
        "definition": 'Very high earthquake risk zone including Himalayas',
    },
    {
        "term": 'Seismic Zone IV',
        "definition": 'High risk zone including Kachchh and Ganga basin',
    },
    {
        "term": 'Riverine flood',
        "definition": 'Flood from river overflow especially in monsoon',
    },
    {
        "term": 'Flash flood',
        "definition": 'Sudden flood from intense rain or dam breach',
    },
    {
        "term": 'Cyclone',
        "definition": 'Low-pressure tropical storm over warm oceans',
    },
    {
        "term": 'Storm surge',
        "definition": 'Rise in sea level during a cyclone',
    },
    {
        "term": 'Storm tide',
        "definition": 'Storm surge coinciding with high tide',
    },
    {
        "term": 'Drought',
        "definition": 'Prolonged period of insufficient rainfall',
    },
    {
        "term": 'NDMA',
        "definition": 'National Disaster Management Authority—apex policy body',
    },
    {
        "term": 'NDRF',
        "definition": 'National Disaster Response Force for rescue operations',
    },
    {
        "term": 'Disaster Management Act',
        "definition": '2005 legislation creating NDMA and SDMAs',
    },
    {
        "term": 'Retrofitting',
        "definition": 'Strengthening buildings against earthquakes',
    },
    {
        "term": 'Drop Cover Hold',
        "definition": 'Indoor earthquake safety technique',
    },
    {
        "term": 'Methyl isocyanate',
        "definition": 'Toxic gas leaked in Bhopal tragedy 1984',
    },
    {
        "term": 'Embankment',
        "definition": 'Raised bank along river to contain floodwater',
    },
    {
        "term": 'Flood shelter',
        "definition": 'Safe building for evacuation during floods',
    },
    {
        "term": 'Epicentre damage',
        "definition": 'Maximum surface destruction near epicentre',
    },
    {
        "term": 'Plate tectonics',
        "definition": 'Theory explaining crustal movement and earthquakes',
    },
    {
        "term": 'Aftershock',
        "definition": 'Smaller earthquake following the main shock',
    },
    {
        "term": 'Mitigation',
        "definition": 'Steps to reduce disaster impact before it occurs',
    },
    {
        "term": 'Preparedness',
        "definition": 'Planning and resources ready before disaster strikes',
    },
],
}
