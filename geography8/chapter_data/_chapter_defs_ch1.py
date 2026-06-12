"""Chapter 1 content definitions: Interpreting Topographical Maps."""
from geography8.chapter_data._qhelpers import M, combo2, combo3

TITLE = "Interpreting Topographical Maps"

TOPICS = [
    {
        "title": "What Are Topographical Maps?",
        "summary": "Topographical maps show both natural relief and human features of an area using conventional signs, contours, and a grid system.",
        "bullets": [
            "Prepared by Survey of India (SOI) at scales like 1:50,000 and 1:25,000",
            "Show hills, valleys, rivers, roads, settlements, and vegetation",
            "Essential for planning, defence, trekking, and land-use studies",
            "Brown = relief (contours); blue = water; black = cultural features; green = vegetation",
        ],
        "body": """Topographical maps are large-scale maps that represent the **shape of the land (relief)** together with **cultural features** such as villages, roads, and railways.

Unlike small-scale atlas maps, toposheets allow you to measure distances, read heights, and identify landforms accurately. Survey of India publishes them with a standard legend so that users anywhere in the country can interpret them uniformly.

**Key skills:** reading scale, finding grid references, tracing contour patterns, and linking symbols to real-world features.""",
        "explanation": "Think of a toposheet as a '3D landscape flattened onto paper'—contours give height, colours give feature type, and the grid lets you locate any point precisely.",
        "teacherTip": "Keep a real SOI toposheet in class; students remember contour shapes better when they trace them with fingers.",
        "examTip": "ICSE often asks you to identify landforms from contour patterns—practice V-shaped valleys and concentric circles for hills.",
    },
    {
        "title": "Map Scale and Measuring Distance",
        "summary": "Scale expresses the ratio between map distance and ground distance; RF scale allows direct conversion using the map's stated unit.",
        "bullets": [
            "Representative Fraction (RF): 1:50,000 means 1 cm on map = 50,000 cm (500 m) on ground",
            "Statement scale: '2 cm to 1 km' is easy for quick mental conversion",
            "Measure curved routes along roads or rivers with thread/string, then scale off",
            "Larger denominator = smaller scale map (less detail per cm)",
        ],
        "body": """**RF scale** is written as 1:n where both sides use the same unit. For 1:50,000, multiply map cm by 50,000 to get ground cm (÷100,000 for km).

**Worked example:** 3.2 cm on a 1:25,000 map → 3.2 × 25,000 = 80,000 cm = 800 m.

Always check whether the question gives km, m, or cm—unit errors are the commonest mistake in map-scale sums.""",
        "explanation": "Scale is the bridge between the map and the real world; every contour height and grid distance calculation depends on it.",
        "teacherTip": "Have students convert 1:50,000 and 1:25,000 for the same line— they see why larger-scale maps show more detail.",
        "examTip": "Show all working: map distance × denominator → convert cm to m/km in one clear step.",
    },
    {
        "title": "Grid References and Eastings/Northings",
        "summary": "The grid on SOI maps uses eastings (vertical lines, read first) and northings (horizontal lines) to give four-figure and six-figure references.",
        "bullets": [
            "Four-figure grid reference locates a 1 km square (e.g. 4523)",
            "Read easting first (45), then northing (23)—'along the corridor, up the stairs'",
            "Six-figure reference pinpoints 100 m within the square (e.g. 458237)",
            "Grid north may differ slightly from true/magnetic north—check map margin",
        ],
        "body": """To find a **four-figure reference** for a feature:
1. Identify the grid square it lies in.
2. Read the **easting** of the left grid line (first two digits).
3. Read the **northing** of the bottom grid line (last two digits).

For **six-figure** references, estimate tenths within the square: divide the square mentally into 10 parts along easting and northing.""",
        "explanation": "Grid references are like addresses on the map—eastings increase eastward, northings increase northward.",
        "teacherTip": "Mnemonic: 'Easting before Northing' — same order as (x, y) in mathematics.",
        "examTip": "Four-figure = square; six-figure = precise point. State which type the question demands.",
    },
    {
        "title": "Contour Lines and Vertical Interval",
        "summary": "Contours are imaginary lines joining points of equal height; their spacing reveals slope steepness and landform type.",
        "bullets": [
            "Vertical Interval (VI): height difference between successive contours (given in map margin)",
            "Index contours are thicker and labelled with height",
            "Close contours = steep slope; wide spacing = gentle slope",
            "Contours never cross each other (except overhanging cliff—rare at this level)",
        ],
        "body": """Each brown contour line is a slice through the landscape at a fixed height. If VI = 20 m, adjacent contours differ by 20 m in elevation.

**Reading slope:** Measure horizontal distance between contours using scale—fewer metres between contours means steeper gradient.

**Hilltop:** Outermost closed loop is lowest; inner loops rise to the summit where contours may form small circles.""",
        "explanation": "Contours turn 3D relief into 2D patterns—learn the 'shapes' (circles, V's, U's) and you can 'see' the terrain.",
        "teacherTip": "Stack cardboard cut-outs at 20 m intervals to build a physical contour model.",
        "examTip": "Always note the VI from the map key before calculating relative height between two points.",
    },
    {
        "title": "Landforms from Contour Patterns",
        "summary": "Hills, valleys, ridges, spurs, cols, and plateaus each produce distinctive contour arrangements.",
        "bullets": [
            "Concentric closed contours → hill or mound",
            "V-shaped contours pointing uphill → valley (river in the V)",
            "U-shaped wide spacing → broad valley or plateau edge",
            "Saddle/col: hourglass shape between two peaks",
            "Uniform spacing on a line → ridge or escarpment",
        ],
        "body": """| Pattern | Landform |
|---------|----------|
| Closed concentric loops | Hill / Dome |
| V contours upstream | Valley |
| V pointing downhill | Spur |
| Elongated parallel contours | Ridge |
| Very wide flat contours | Plateau / Plain |

Rivers cut valleys so contours bend **upstream** into the valley. Spurs are ridges between valleys; their V points **downhill**.""",
        "explanation": "Contour vocabulary is the heart of topo interpretation—link each pattern to water flow direction.",
        "teacherTip": "Draw a river line and ask students to sketch expected contour bends before revealing the map.",
        "examTip": "When identifying valleys, confirm with blue water symbols or drainage arrows if shown.",
    },
    {
        "title": "Settlements and Land Use on Maps",
        "summary": "Settlement patterns (nucleated, dispersed, linear) appear through building symbols and their relation to relief and transport.",
        "bullets": [
            "Nucleated: cluster of building symbols at crossroads or near water",
            "Dispersed: isolated huts scattered in agricultural areas",
            "Linear: buildings strung along a road, canal, or valley floor",
            "Dense black blocks may indicate urban areas or large villages",
        ],
        "body": """Settlements choose sites for **water, defence, transport, and fertile land**. On toposheets you infer:

- **Valley-floor villages** near perennial streams (perennial = solid blue line).
- **Linear settlements** along highways or railways (black/red lines).
- **Hill-top forts** or temples on concentric contours with track access.

Land use: yellow wash often shows cultivated land; green shading = forest or orchard (check legend).""",
        "explanation": "Human geography on toposheets is about reading symbols in their physical context—not memorising symbols in isolation.",
        "teacherTip": "Compare two settlement types on the same sheet and list three map clues for each.",
        "examTip": "Justify settlement type with at least two map evidences: contour, water, transport, or symbol density.",
    },
    {
        "title": "Water Features and Drainage",
        "summary": "Rivers, streams, tanks, and wells use blue symbols; drainage pattern reflects underlying geology and slope.",
        "bullets": [
            "Perennial rivers: solid blue lines; seasonal: dashed blue",
            "Tributaries join main rivers; contour V's point upstream",
            "Tanks/reservoirs shown with embankment symbol and water fill",
            "Dendritic, trellis, radial patterns indicate terrain structure",
        ],
        "body": """**Perennial** water flows year-round (important for settlement). **Seasonal** streams appear only in monsoon—dashed lines warn of dry beds.

Watershed divides separate drainage basins—often along ridges where contours form elongated highs. River gradient can be inferred from how quickly contours cross the blue line.""",
        "explanation": "Water and contours together tell the drainage story; always trace a river from source to mouth when analysing a sheet.",
        "teacherTip": "Colour perennial vs seasonal streams on a tracing—students grasp seasonality quickly.",
        "examTip": "Mention perennial vs seasonal when explaining water supply for a mapped settlement.",
    },
    {
        "title": "Conventional Signs and Map Marginal Information",
        "summary": "SOI conventional signs standardise symbols for cultural and physical features; marginal information gives map metadata.",
        "bullets": [
            "Black: cultural (roads, buildings, names)",
            "Brown: relief contours",
            "Blue: hydrography",
            "Green: vegetation",
            "Red: major roads, grid numbers, sheet edges",
            "Margin shows scale, VI, magnetic declination, edition date",
        ],
        "body": """The **legend (conventional signs)** is your dictionary. Common exam symbols: cart track, metalled road, railway, post office, temple, bridge, embankment, sand area, marsh.

**Marginal information** includes:
- Sheet number and name
- RF scale and contour interval
- Magnetic north and grid north
- Co-ordinates of corners

Always read the margin before interpreting the body of the map.""",
        "explanation": "Conventional signs + margin data = full map literacy; exams often test symbol identification from the SOI key.",
        "teacherTip": "Run a 'symbol speed quiz' using the SOI legend page.",
        "examTip": "If unsure of a symbol, describe its shape and context—partial credit often follows logical reasoning.",
    },
]

HIGH_YIELD = [
    "Topographical maps show relief and cultural features at large scale (e.g. 1:50,000).",
    "Survey of India (SOI) is India's national mapping agency.",
    "RF 1:50,000 means 1 cm on the map represents 50,000 cm (500 m) on the ground.",
    "Easting is read before northing in a grid reference.",
    "Four-figure grid references identify a 1 km square.",
    "Six-figure grid references locate a point within 100 m.",
    "Contour lines join points of equal height above mean sea level.",
    "Vertical Interval (VI) is the height difference between adjacent contours.",
    "Close contour lines indicate a steep slope.",
    "Widely spaced contours indicate a gentle slope.",
    "Concentric closed contours indicate a hill or mound.",
    "V-shaped contours pointing upstream indicate a valley.",
    "Contours bend upstream along valleys and downstream along spurs.",
    "A saddle or col appears as an hourglass-shaped contour between peaks.",
    "Index contours are thicker and labelled with elevation.",
    "Perennial rivers are shown with continuous blue lines.",
    "Seasonal streams are shown with dashed blue lines.",
    "Black symbols represent man-made (cultural) features.",
    "Brown lines represent relief (contours).",
    "Green shading commonly represents forest or vegetation.",
    "Nucleated settlements appear as dense clusters of building symbols.",
    "Linear settlements develop along roads, rivers, or coasts.",
    "Dispersed settlements show isolated buildings in farmland.",
    "Metalled roads are shown in red or black depending on importance.",
    "Magnetic declination is the angle between true north and magnetic north.",
    "Grid north is the direction of grid lines on the map.",
    "Representative Fraction has no units—the ratio is dimensionless.",
    "Larger-scale maps (smaller RF denominator) show more detail.",
    "Plateaus show widely spaced, nearly straight contours over large areas.",
    "Ridges show elongated contours bulging toward lower ground.",
]

MCQS = [
    M("Which organisation publishes standard topographical maps of India?", ["Geological Survey of India", "Survey of India", "ISRO", "Meteorological Department"], 1, "Survey of India (SOI) prepares and publishes official topographical maps used in schools and field studies.", exam="SOI toposheets are the ICSE standard.", teacher="Contrast SOI with GSI—rocks vs maps."),
    M("On an SOI map, brown colour generally represents:", ["Water bodies", "Relief/contours", "Vegetation", "Built-up areas"], 1, "Brown depicts relief through contour lines and occasional rocky outcrop symbols.", exam="Colour code: brown=relief, blue=water, green=vegetation, black=cultural."),
    M("RF scale 1:25,000 means 1 cm on the map equals:", ["25 m on ground", "250 m on ground", "2.5 km on ground", "25 km on ground"], 1, "1 cm × 25,000 = 25,000 cm = 250 m on the ground.", exam="Divide cm by 100,000 to get km quickly."),
    M("Which grid reference is more precise?", ["4521 (four-figure)", "452163 (six-figure)", "Both equally precise", "Depends on scale only"], 1, "Six-figure references narrow location to about 100 m within the 1 km square.", exam="More digits = finer precision."),
    M("In a four-figure grid reference, which is stated first?", ["Northing", "Easting", "Latitude", "Magnetic bearing"], 1, "Read easting (horizontal) first, then northing—'along the corridor, up the stairs'.", exam="Easting before northing always."),
    combo2("Contour lines never cross one another on a standard hillside.", "The vertical interval is constant for a given map.", 3, "Both statements are correct—contours meet only in impossible overhangs (not expected at Class 8), and VI is fixed for each sheet.", exam="UPSC-style: both facts are standard topo rules."),
    M("Closely spaced contour lines indicate:", ["Gentle slope", "Steep slope", "Flat plateau", "Waterlogged land"], 1, "Height changes rapidly over short horizontal distance → steep slope.", teacher="Walk students through spacing vs slope."),
    M("Widely spaced contour lines most likely indicate:", ["Cliff", "Gentle slope or plain", "Deep gorge", "Steep escarpment"], 1, "Little height change over distance → gentle terrain.", exam="Pair spacing with landform MCQs."),
    M("Concentric closed contour lines typically represent:", ["River valley", "Hill or mound", "Coastal cliff", "Marshland"], 1, "Closed loops rising inward (or descending outward) mark isolated high ground.", exam="Classic hill signature."),
    M("V-shaped contours pointing uphill indicate:", ["Spur", "Valley", "Plateau edge", "Sand dune"], 1, "Valleys cut into slopes; contours bend upstream forming a V toward higher ground.", exam="River lies in the V of the valley."),
    M("A spur is identified when contour V-shapes point:", ["Uphill", "Downhill", "East", "Toward the river mouth"], 1, "Spurs are ridge extensions between valleys; Vs point downhill on spurs.", exam="Valley Vs uphill; spur Vs downhill."),
    M("Vertical Interval (VI) is:", ["Horizontal distance between contours", "Height difference between successive contours", "Map scale fraction", "Magnetic variation"], 1, "VI measures elevation change between adjacent contour lines (e.g. 20 m).", exam="Read VI from map margin."),
    M("Index contours are:", ["Always dashed", "Thicker labelled contours at intervals", "Blue water lines", "Red grid lines"], 1, "Index contours help read elevation quickly—they are bold and numbered.", exam="Use index contours to count height."),
    combo3("Perennial rivers have solid blue lines on SOI maps.", "Seasonal streams use dashed blue lines.", "Contours cross rivers at right angles always.", 3, "Statements 1 and 2 are correct; contours bend along valleys rather than crossing rivers at right angles.", exam="Three-statement combo—check each independently."),
    M("Nucleated settlements appear on maps as:", ["Isolated single huts only", "Dense cluster of building symbols", "Symbols only along railways", "Random dots in deserts"], 1, "Nucleated pattern = many buildings grouped at one site.", exam="Link pattern name to map appearance."),
    M("Linear settlements commonly develop along:", ["Mountain peaks", "Roads or rivers", "Glaciers", "Contour lines"], 1, "Transport and water access produce elongated settlement strings.", exam="Name the line feature in answers."),
    M("Dispersed rural settlements are characterised by:", ["High-rise blocks", "Scattered isolated buildings", "Only port facilities", "Underground dwellings"], 1, "Farmsteads spread across fields typify dispersed pattern.", exam="Common in fertile plains with farming."),
    M("Which feature is shown in blue on topo maps?", ["Contours", "Rivers", "Roads", "Railways"], 1, "Hydrographic features use blue.", exam="Colour mnemonic saves time."),
    M("Black symbols on SOI maps generally denote:", ["Forests", "Cultural/man-made features", "Contour lines", "Administrative boundaries only"], 1, "Buildings, tracks, and many labels appear in black.", exam="Black = human/cultural."),
    M("Green shading on toposheets usually indicates:", ["Desert", "Vegetation/forest", "Snow", "Urban built-up"], 1, "Green represents wooded or vegetated areas per SOI convention.", exam="Check legend for exact meaning."),
    M("To measure distance along a curved road, the best method is:", ["Direct ruler only", "Thread along curve then scale", "Protractor", "Compass bearing"], 1, "Lay string along the curve, mark length, straighten against scale.", exam="Curved route = thread method."),
    M("1:50,000 is _____ scale than 1:25,000.", ["Larger (more detailed)", "Smaller (less detailed)", "Same", "Cannot compare"], 1, "Higher denominator → smaller scale → less ground detail per cm.", exam="1:25,000 is larger scale."),
    M("Magnetic declination on a map margin shows:", ["Difference between true and magnetic north", "Contour interval", "Grid square size", "Population density"], 0, "Declination corrects compass bearings to map (true/grid) north.", exam="Important for field compass work."),
    M("A saddle (col) between two hills shows contours shaped like:", ["Parallel straight lines", "Hourglass", "Random dots", "Single circle only"], 1, "Saddles narrow between two summits—hourglass contour pattern.", exam="High-altitude pass geography."),
    M("Plateau areas typically show:", ["Very close contours everywhere", "Wide-spaced, nearly flat contours", "No contours", "Only blue lines"], 1, "Elevated flat surfaces have contours far apart over large areas.", exam="Contrast plateau with hill peak."),
    M("Ridges appear on maps as contours that:", ["Form closed circles only", "Bulge toward lower ground", "Cross rivers at 90°", "Are always dashed"], 1, "Ridge lines are elongated highs—contours bend around them.", exam="Ridge = drainage divide often."),
    M("The direction of increasing easting values is:", ["West", "East", "North", "South"], 1, "Eastings increase eastward—toward the right on standard grid maps.", exam="Foundation for grid refs."),
    M("Six-figure grid reference 438276: digits 82 indicate:", ["Easting within the square", "Northing within the square", "Map sheet number", "Contour height"], 0, "In 438276, 43/27 are the square; 8 is easting tenth, 2 is northing tenth within square (read order carefully per question).", exam="Practice splitting six-figure refs."),
    combo2("Grid north aligns with vertical grid lines.", "True north points toward the geographic North Pole.", 3, "Both statements are correct—they differ slightly; maps show convergence/declination data.", exam="North types are separate concepts."),
    M("Seasonal streams are important because they:", ["Flow year-round always", "May dry up in summer affecting water supply", "Are shown in red", "Have no contour relation"], 1, "Dashed blue lines warn that water may be unavailable in dry season.", exam="Settlement water planning."),
    M("Embankments near tanks are shown to indicate:", ["Railway cuttings", "Raised bunds holding water", "Contour interval", "Magnetic variation"], 1, "Tank bunds impound water; common in peninsular plateau mapping.", exam="Link symbol to water harvesting."),
    M("A cart track differs from a metalled road on maps by:", ["Symbol width/line style in legend", "Always blue colour", "Always absent", "Being a contour"], 0, "Road hierarchy uses different line styles—consult conventional signs.", exam="Symbol identification from legend."),
    M("When contours form a 'U' shape wide open downstream, the feature is often:", ["Narrow gorge", "Broad valley", "Isolated hill", "Mine shaft"], 1, "Wide U contours suggest a broad valley floor.", exam="Compare narrow V vs broad U."),
    M("Spot heights are shown by:", ["X with elevation figure", "Blue triangle only", "Red square only", "Dashed green line"], 0, "Spot heights give precise summit or point elevations.", exam="Use spot height when contours unclear."),
    M("Settlement near confluence of rivers suggests access to:", ["Water and fertile silt", "Only minerals", "Permanent snow", "No transport"], 0, "River junctions offer water, transport, and fertile alluvium.", exam="Site factor reasoning."),
    M("Tracing a river upstream on a map, contours should:", ["Point downstream", "Bend upstream toward the source", "Disappear", "Turn black"], 1, "Valley contours V toward higher ground upstream.", exam="Direction of V is critical."),
    M("Which instrument helps find bearings in the field?", ["Barometer", "Compass", "Thermometer", "Hygrometer"], 1, "Compass measures direction; adjust for declination on map.", exam="Fieldwork equipment."),
    M("1 cm on 1:50,000 map equals ground distance:", ["50 m", "500 m", "5 km", "50 km"], 1, "50,000 cm = 500 m.", exam="Standard SOI scale calculation."),
    combo3("Representative Fraction is unitless.", "Statement scale may use different units.", "Graphic scale cannot be used on topo maps.", 3, "Statements 1 and 2 are correct; graphic (linear) scales ARE used on SOI sheets.", exam="All three scale types can appear."),
    M("Dendritic drainage pattern resembles:", ["Tree branches", "Parallel trellis", "Radiating spokes", "Rectangular grid"], 0, "Random branching on uniform rock → dendritic (tree-like).", exam="Drainage pattern names."),
    M("Trellis drainage indicates:", ["Alternate hard and soft rock bands", "Volcano centre", "Desert wind", "Glacier melt only"], 0, "Tributaries join main river at right angles on folded strata.", exam="Geology controls pattern."),
    M("Radial drainage flows:", ["Parallel to coast only", "Outward from a central high point", "Underground only", "Only northward"], 1, "Volcanic cones or domes produce radial streams.", exam="Pattern-centre identification."),
    M("Marsh or swamp may be shown by:", ["Reed/marsh symbols in legend", "Red contour lines", "Railway symbols", "Index contour numbers"], 0, "Poorly drained areas have specific wetland symbols.", exam="Read legend for wetlands."),
    M("Bridges are important map features because they show:", ["River crossing points", "Only political boundaries", "Contour interval", "Magnetic north"], 0, "Bridges link settlements and roads across drainage.", exam="Infrastructure interpretation."),
    M("A temple symbol near clustered buildings suggests:", ["Cultural/religious centre of settlement", "Mining area", "Permanent snow", "International border"], 0, "Religious sites often anchor nucleated villages.", exam="Cultural geography on maps."),
    M("Contour lines on a cliff may:", ["Overlap vertically in representation", "Appear touching/overlapping in steep cliffs", "Be absent for all cliffs", "Be green"], 1, "Very steep cliffs show contours nearly on top of each other.", exam="Extreme relief exception."),
    M("Yellow wash on SOI maps often indicates:", ["Cultivated land", "Ocean", "Glacier", "Built-up only"], 0, "Agricultural land commonly appears with yellow tint (verify legend).", exam="Land-use interpretation."),
    M("Railway lines on toposheets are typically shown in:", ["Black with cross ticks or red per edition", "Blue dashed", "Brown contour", "Green dotted"], 0, "Railways use distinctive line styles with ticks—check sheet legend.", exam="Transport symbol ID."),
    M("Height of a point between two contours can be estimated by:", ["Interpolation assuming even slope", "Guessing randomly", "Using magnetic declination", "Counting settlements"], 0, "If point lies midway between 100 m and 120 m contours, estimate ~110 m.", exam="Interpolation skills."),
    M("Watershed is best described as:", ["River mouth", "Dividing line between drainage basins", "Village centre", "Railway junction"], 1, "Ridges often form watersheds separating river systems.", exam="Drainage basin concept."),
    M("Fort or defensive site on hills is suggested by:", ["Building symbols on concentric contours with steep approaches", "Marsh symbols only", "Open sea", "Flat wide contours only"], 0, "Height + steep slopes favoured historic defence.", exam="Historical geography inference."),
    M("Open scrub may be shown with:", ["Green dots or specific scrub symbol", "Blue lines", "Red grid", "Contour labels"], 0, "Vegetation types have varied symbols—consult key.", exam="Don't assume one green style."),
    M("Map edition date in the margin indicates:", ["When the map was surveyed/printed", "Population census year only", "Student exam date", "River flood level"], 0, "Currency of features depends on survey/revision date.", exam="Outdated maps may lack new roads."),
    combo2("Easting values increase eastward.", "Northing values increase northward.", 3, "Both standard grid conventions are correct.", exam="Foundation for all grid questions."),
    M("To find area of a regular-shaped field on a map, you need:", ["Scale to convert map area to ground area", "Only compass bearing", "Only spot height", "Magnetic variation only"], 0, "Area scales with the square of the linear scale factor.", exam="Map area = (map measure × scale)²."),
    M("Gorge feature shows contours:", ["Very close together in narrow cut", "Widely spaced on flat plain", "Absent", "In blue only"], 0, "Deep narrow valleys have tightly packed contours.", exam="Gorge vs broad valley."),
    M("Intervisibility between two points depends on:", ["Whether relief blocks the line of sight", "Only map colour", "Grid reference only", "Seasonal streams only"], 0, "A hill between points blocks view—use contour heights.", exam="Cross-section profile questions."),
    M("Bench mark (BM) on survey maps indicates:", ["Known elevation survey reference point", "Bus stop", "Border post", "Mine entrance only"], 0, "BM provides accurate height control for mapping.", exam="Survey terminology."),
    M("Levee along a river may appear as:", ["Embankment-like feature near river bank", "Contour circle", "Magnetic line", "Grid number"], 0, "Natural levees from silt deposition along floodplains.", exam="River landform symbols."),
    M("Sand dunes in desert areas may show:", ["Special sand dune symbols or stipple", "Blue contours", "Railway ticks", "Green forest"], 0, "Arid region symbols differ—use legend.", exam="Regional map variation."),
    M("Canals appear as:", ["Man-made linear water features (often blue)", "Brown contours only", "Index contours", "Red eastings"], 0, "Irrigation canals are cultural hydrographic features.", exam="Distinguish canal from natural stream."),
    M("Quarry or mine symbols indicate:", ["Extraction of minerals", "Religious site", "Perennial snow", "Marsh only"], 0, "Economic activity shown in cultural symbols.", exam="Resource geography."),
    M("Contour numbering increases toward:", ["Higher ground inland (generally uphill)", "Always south", "Sea level only", "Random direction"], 0, "Numbers rise toward summits—verify with adjacent heights.", exam="Check arrow of increasing height."),
    M("A break in slope (knickpoint) may show as:", ["Sudden change in contour spacing", "Change in map colour to green only", "Disappearance of grid", "New magnetic north"], 0, "Tighter spacing after wide spacing marks steeper section.", exam="Slope change identification."),
    combo3("Spot heights supplement contours on steep peaks.", "Bench marks provide survey control.", "Grid references use latitude and longitude.", 3, "Statements 1 and 2 correct; grid refs use eastings/northings not lat/long on SOI topo sheets.", exam="Distinguish grid from geographic coordinates."),
    M("The main purpose of topographical maps in planning is to:", ["Show accurate relief and land use for development decisions", "Replace census data", "Show only political boundaries", "Display weather forecasts"], 0, "Planners use relief, drainage, and settlements for roads, dams, and services.", exam="Applied geography."),
    M("Identifying a water divide helps to:", ["Separate drainage basins", "Find railway fares", "Measure temperature", "Calculate population density"], 0, "Divides determine which river system receives runoff.", exam="Watershed management."),
    M("Steep slope farming risk is inferred when:", ["Contours are very close on hillside fields", "Map is green only", "No settlements appear", "Scale is small"], 0, "Close contours on slopes → erosion and landslide risk.", exam="Human-environment link."),
    M("Conventional signs are important because they:", ["Standardise map reading nationally", "Change randomly each sheet", "Eliminate need for scale", "Hide relief"], 0, "Uniform legend enables anyone trained to read any SOI sheet.", exam="National mapping standard."),
    M("When drawing a cross-section between two points:", ["Plot heights from contour crossings in order", "Ignore VI", "Use only blue features", "Skip scale"], 0, "Mark where section line crosses contours; plot height vs distance.", exam="Cross-section is common ICSE skill."),
    M("Best evidence of perennial water supply for a village:", ["Solid blue stream through settlement", "Dashed track only", "Sand dune symbol", "Contour label only"], 0, "Solid blue = year-round flow.", exam="Water supply map evidence."),
    M("Topo maps differ from atlas political maps mainly in:", ["Greater detail of relief and ground features", "Smaller scale only", "No symbols", "No scale"], 0, "Toposheets are large-scale field maps.", exam="Map type comparison."),
]

TFS = [
    {"q": "Topographical maps show only political boundaries.", "correct": "false", "just": "False. They emphasise relief (contours), drainage, vegetation, transport, and settlements—not just boundaries."},
    {"q": "On SOI maps, easting is read before northing in a grid reference.", "correct": "true", "just": "True. Standard order: easting first (horizontal), northing second (vertical)."},
    {"q": "Closely spaced contours always indicate a gentle slope.", "correct": "false", "just": "False. Close spacing means rapid height change → steep slope."},
    {"q": "Perennial rivers are shown with dashed blue lines.", "correct": "false", "just": "False. Perennial rivers use continuous blue lines; dashed lines usually mean seasonal streams."},
    {"q": "Representative Fraction 1:50,000 means 1 unit on the map equals 50,000 of the same unit on the ground.", "correct": "true", "just": "True. RF is a ratio without units—1 cm : 50,000 cm."},
    {"q": "V-shaped contours pointing uphill indicate a spur.", "correct": "false", "just": "False. Vs pointing uphill indicate valleys; spurs show Vs pointing downhill."},
    {"q": "Six-figure grid references are more precise than four-figure references.", "correct": "true", "just": "True. Six figures locate a point within about 100 m inside the grid square."},
    {"q": "Green colour on SOI toposheets commonly represents vegetation.", "correct": "true", "just": "True. Green shading/symbols mark forest or vegetated areas per the legend."},
    {"q": "Contours can cross each other on a normal hillside.", "correct": "false", "just": "False. Contours of different heights do not cross except in rare overhanging cliff representations."},
    {"q": "Linear settlements often develop along transport routes such as roads or railways.", "correct": "true", "just": "True. Elongated building patterns follow linear infrastructure or valley floors."},
]

FILLS = [
    {"q": "Contour lines join points of equal ______.", "blank": "height", "ans": "Height (elevation above mean sea level). Adjacent contours differ by the Vertical Interval."},
    {"q": "The height difference between successive contour lines is called the Vertical ______.", "blank": "Interval", "ans": "Vertical Interval (VI)—stated in the map margin (e.g. 20 m)."},
    {"q": "In grid references, ______ is read before northing.", "blank": "easting", "ans": "Easting (the horizontal coordinate) is always stated first."},
    {"q": "A RF of 1:50,000 means 1 cm on the map represents ______ cm on the ground.", "blank": "50000", "ans": "50,000 cm, which equals 500 m or 0.5 km."},
    {"q": "Man-made features on SOI maps are generally shown in ______ colour.", "blank": "black", "ans": "Black is used for most cultural features such as buildings, tracks, and labels."},
]

MATCHES = [
    {"q": "Match contour patterns with landforms:", "pairs": [{"left": "Concentric closed loops", "right": "Hill"}, {"left": "V pointing uphill", "right": "Valley"}, {"left": "Wide flat contours", "right": "Plateau"}, {"left": "Hourglass shape", "right": "Saddle/Col"}], "ans": "Concentric→Hill; V uphill→Valley; wide flat→Plateau; hourglass→Saddle."},
    {"q": "Match colours with features:", "pairs": [{"left": "Brown", "right": "Relief/contours"}, {"left": "Blue", "right": "Water"}, {"left": "Green", "right": "Vegetation"}, {"left": "Black", "right": "Cultural features"}], "ans": "Brown→relief; Blue→water; Green→vegetation; Black→cultural."},
    {"q": "Match settlement types with descriptions:", "pairs": [{"left": "Nucleated", "right": "Clustered buildings"}, {"left": "Dispersed", "right": "Scattered farmsteads"}, {"left": "Linear", "right": "Along a road/river"}, {"left": "Urban dense", "right": "Compact built-up block"}], "ans": "Nucleated→cluster; Dispersed→scattered; Linear→along line; Urban→dense block."},
    {"q": "Match scale with ground distance (1 cm):", "pairs": [{"left": "1:25,000", "right": "250 m"}, {"left": "1:50,000", "right": "500 m"}, {"left": "1:100,000", "right": "1 km"}, {"left": "1:10,000", "right": "100 m"}], "ans": "Multiply cm by denominator; convert to m/km."},
    {"q": "Match drainage patterns:", "pairs": [{"left": "Dendritic", "right": "Tree-like branching"}, {"left": "Trellis", "right": "Right-angle tributaries"}, {"left": "Radial", "right": "Outward from centre"}, {"left": "Parallel", "right": "Subparallel streams"}], "ans": "Dendritic→tree; Trellis→right angles; Radial→centre; Parallel→subparallel."},
    {"q": "Match grid reference types:", "pairs": [{"left": "4523", "right": "Four-figure (1 km square)"}, {"left": "452387", "right": "Six-figure (precise point)"}, {"left": "Easting 45", "right": "First two digits in 4523"}, {"left": "Northing 23", "right": "Last two digits in 4523"}], "ans": "4523→square; 452387→point; 45→easting; 23→northing."},
    {"q": "Match water line types:", "pairs": [{"left": "Solid blue line", "right": "Perennial river"}, {"left": "Dashed blue line", "right": "Seasonal stream"}, {"left": "Tank with bund", "right": "Stored water"}, {"left": "Well symbol", "right": "Groundwater source"}], "ans": "Solid→perennial; dashed→seasonal; tank→stored; well→groundwater."},
    {"q": "Match slope with contour spacing:", "pairs": [{"left": "Steep slope", "right": "Close contours"}, {"left": "Gentle slope", "right": "Wide spacing"}, {"left": "Cliff", "right": "Nearly touching contours"}, {"left": "Flat plain", "right": "Very wide spacing"}], "ans": "Steep→close; gentle→wide; cliff→touching; flat→very wide."},
    {"q": "Match map tools/methods:", "pairs": [{"left": "Thread", "right": "Curved distance"}, {"left": "Compass", "right": "Bearing"}, {"left": "RF scale", "right": "Distance conversion"}, {"left": "Cross-section", "right": "Relief profile"}], "ans": "Thread→curve; compass→bearing; RF→distance; section→profile."},
    {"q": "Match marginal info:", "pairs": [{"left": "VI", "right": "Contour height gap"}, {"left": "Declination", "right": "Magnetic-true north angle"}, {"left": "Sheet number", "right": "Map identifier"}, {"left": "Edition year", "right": "Survey currency"}], "ans": "VI→height gap; declination→north angle; sheet→ID; edition→currency."},
]

SHORTS = [
    {"q": "Explain how contour lines show a valley on a topographical map.", "ans": "Valleys appear as V-shaped contour bends pointing upstream (toward higher ground). A stream often occupies the valley floor shown in blue. The V points uphill because the land rises on both sides of the watercourse."},
    {"q": "Distinguish between four-figure and six-figure grid references.", "ans": "Four-figure references (e.g. 4523) identify a 1 km grid square. Six-figure references (e.g. 452387) subdivide the square into tenths, locating a point within about 100 m. Both read easting before northing."},
    {"q": "Give three map evidences for a nucleated settlement.", "ans": "Dense cluster of building symbols at one site; proximity to water (solid blue line) or road junction; possible temple/post office symbols indicating a service centre."},
    {"q": "How do you calculate ground distance using RF 1:50,000?", "ans": "Measure map distance in cm, multiply by 50,000 to get ground cm, then convert: divide by 100 for metres or by 100,000 for kilometres. Example: 4 cm × 50,000 = 200,000 cm = 2 km."},
    {"q": "Why are conventional signs important on topographical maps?", "ans": "They standardise symbols nationwide so users can interpret any SOI sheet consistently. Without them, relief, water, vegetation, and cultural features could not be read accurately for navigation and planning."},
]

MINDMAP = """flowchart TB
  ROOT[Topographical Maps]
  ROOT --> SCALE[Scale and Distance]
  ROOT --> GRID[Grid References]
  ROOT --> CONTOUR[Contours and VI]
  ROOT --> LAND[Landforms]
  ROOT --> SETTLE[Settlements]
  ROOT --> WATER[Drainage]
  ROOT --> SIGNS[Conventional Signs]
  SCALE --> RF[RF 1:50000]
  SCALE --> THREAD[Thread Method]
  GRID --> E4[Four-figure]
  GRID --> E6[Six-figure]
  CONTOUR --> STEEP[Close = Steep]
  CONTOUR --> GENTLE[Wide = Gentle]
  LAND --> HILL[Hill - concentric]
  LAND --> VALLEY[Valley - V uphill]
  LAND --> SPUR[Spur - V downhill]
  SETTLE --> NUCL[Nucleated]
  SETTLE --> LINEAR[Linear]
  WATER --> PEREN[Perennial solid blue]
  WATER --> SEASON[Seasonal dashed]
  SIGNS --> COLOUR[Brown Blue Green Black]"""

CHEATSHEET = [
    "SOI publishes India's standard topographical maps.",
    "RF 1:50,000 → 1 cm = 500 m on ground.",
    "Easting before northing in grid references.",
    "Four-figure = 1 km square; six-figure ≈ 100 m precision.",
    "VI = height between adjacent contours (read margin).",
    "Close contours = steep; wide = gentle.",
    "Concentric contours = hill; V uphill = valley.",
    "V downhill = spur; hourglass = saddle/col.",
    "Brown = relief; blue = water; green = vegetation; black = cultural.",
    "Perennial river = solid blue; seasonal = dashed blue.",
    "Nucleated = cluster; linear = along road/river; dispersed = scattered.",
    "Thread method for curved distances.",
    "Index contours are thick and numbered.",
    "Spot heights mark precise elevations.",
    "Larger scale (1:25,000) shows more detail than 1:50,000.",
    "Watershed divides drainage basins along ridges.",
    "Cross-section plots height along a transect line.",
    "Magnetic declination corrects compass to map north.",
    "Interpolation estimates height between contours.",
    "Conventional signs = national standard legend.",
    "Trellis drainage → folded rock; radial → central uplift.",
    "Tank bunds store water in drier regions.",
    "Bridges show river crossings and connectivity.",
    "Map edition date shows how current features are.",
    "Bench marks are survey elevation control points.",
]

WORD_CARDS = [
    {"term": "Topographical map", "definition": "Large-scale map showing relief and ground features using contours and conventional signs."},
    {"term": "Survey of India", "definition": "National agency responsible for mapping and publishing SOI toposheets."},
    {"term": "Representative Fraction", "definition": "Scale written as 1:n comparing map distance to ground distance in the same unit."},
    {"term": "Easting", "definition": "East-west grid coordinate; read first in a grid reference."},
    {"term": "Northing", "definition": "North-south grid coordinate; read second in a grid reference."},
    {"term": "Contour line", "definition": "Line joining points of equal height above mean sea level."},
    {"term": "Vertical Interval", "definition": "Height difference between successive contour lines on a map."},
    {"term": "Index contour", "definition": "Thicker contour line labelled with elevation at regular intervals."},
    {"term": "Spot height", "definition": "Precisely surveyed elevation marked at a specific point."},
    {"term": "Bench mark", "definition": "Permanent survey reference point with known elevation."},
    {"term": "Steep slope", "definition": "Terrain where contours are closely spaced."},
    {"term": "Gentle slope", "definition": "Terrain where contours are widely spaced."},
    {"term": "Valley", "definition": "Low ground between hills; contours form V shapes pointing upstream."},
    {"term": "Spur", "definition": "Ridge extension between valleys; contour V points downhill."},
    {"term": "Ridge", "definition": "Elongated high ground separating valleys or basins."},
    {"term": "Saddle (Col)", "definition": "Low pass between two peaks; hourglass contour pattern."},
    {"term": "Plateau", "definition": "Elevated flat area with widely spaced, nearly straight contours."},
    {"term": "Watershed", "definition": "Divide separating one drainage basin from another."},
    {"term": "Perennial river", "definition": "Stream flowing throughout the year; solid blue line on SOI maps."},
    {"term": "Seasonal stream", "definition": "Watercourse flowing mainly in wet season; dashed blue line."},
    {"term": "Nucleated settlement", "definition": "Buildings clustered at a central site such as a crossroads."},
    {"term": "Dispersed settlement", "definition": "Isolated buildings spread across farmland."},
    {"term": "Linear settlement", "definition": "Buildings arranged along a line such as a road or river."},
    {"term": "Conventional signs", "definition": "Standard symbols and colours used on SOI maps."},
    {"term": "Magnetic declination", "definition": "Angle between true north and magnetic north at a location."},
    {"term": "Grid north", "definition": "Direction parallel to vertical grid lines on the map."},
    {"term": "Cross-section", "definition": "Profile showing relief along a line between two map points."},
    {"term": "Dendritic drainage", "definition": "Tree-like branching pattern on uniform slopes."},
    {"term": "Trellis drainage", "definition": "Tributaries join main river at right angles on folded rock."},
    {"term": "Radial drainage", "definition": "Streams flowing outward from a central high point."},
]

CH1 = {
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
