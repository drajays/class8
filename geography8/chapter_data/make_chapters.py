#!/usr/bin/env python3
"""Generate ch1.py–ch4.py with full StudyHub content."""
from __future__ import annotations

from pathlib import Path

from geography8.chapter_data._gen_chapters import _write_chapter, _mcq, _upsc_combo

OUT = Path(__file__).parent


def combo(stmts: list[str], correct: int, ans: str, exam: str = "", teacher: str = "") -> dict:
    return _upsc_combo("", stmts, correct, ans) | {"exam": exam, "teacher": teacher}


# ── CHAPTER 1: Interpreting Topographical Maps ───────────────────────────────

CH1_TOPICS = [
    {
        "title": "Introduction to Topographical Maps",
        "summary": "Topographical maps show both natural and man-made features of an area using standard symbols, colours and contour lines.",
        "bullets": [
            "Topo sheets are large-scale maps prepared by the Survey of India (SOI).",
            "They show relief, drainage, vegetation, roads, railways and settlements.",
            "Scale is usually 1:50,000 or 1:25,000 for detailed study.",
            "Every feature follows the SOI conventional signs and colours.",
        ],
        "body": """### What is a topographical map?
A **topographical map** (topo sheet) is a large-scale map that represents the **shape of the land (relief)** together with **natural and cultural features** using standard symbols.

### Key features shown
| Category | Examples |
|----------|----------|
| Relief | Hills, valleys, cliffs, plateaus (via contours) |
| Drainage | Rivers, streams, tanks, wells |
| Vegetation | Forests, orchards, scrub |
| Cultural | Roads, railways, buildings, bridges |

### Why they matter
Surveyors, planners, defence forces and geographers use topo sheets to study terrain before field work, construction or navigation.""",
        "explanation": "Think of a topo sheet as a '3D landscape flattened onto paper' — contours give height, colours give land cover, and symbols give human works.",
        "teacherTip": "SOI = Survey of India; always mention standard conventional signs in answers.",
        "examTip": "Distinguish topographical maps from political or thematic maps — topos show relief + ground features.",
    },
    {
        "title": "Grid System and Map Index",
        "summary": "Topo sheets use a grid of eastings and northings so every point has a unique six-figure or four-figure grid reference.",
        "bullets": [
            "Eastings are vertical grid lines; northings are horizontal grid lines.",
            "Four-figure reference identifies a 1 km grid square.",
            "Six-figure reference pinpoints a location within the square.",
            "Map index lists adjacent sheet numbers in the margin.",
        ],
        "body": """### Grid references
- **Eastings** increase from west to east (left to right).
- **Northings** increase from south to north (bottom to top).

**Four-figure:** easting first, then northing — e.g. `4523` means square between easting 45–46 and northing 23–24.

**Six-figure:** divide each side of the square into tenths; gives precise location — e.g. `452387`.

### Map index
The index diagram in the margin shows **neighbouring sheet numbers** (N, S, E, W) so you can join sheets for a wider area.""",
        "explanation": "Grid references work like coordinates on a chess board — easting is the column, northing is the row.",
        "teacherTip": "Mnemonic: 'Along the corridor (easting), then up the stairs (northing)'.",
        "examTip": "Always write easting before northing; a common ICSE trap is reversing the order.",
    },
    {
        "title": "Contour Lines and Vertical Interval",
        "summary": "Contour lines join points of equal height; their spacing reveals slope steepness and the vertical interval is constant on a given sheet.",
        "bullets": [
            "A contour is an imaginary line joining places of equal elevation.",
            "Close contours = steep slope; wide spacing = gentle slope.",
            "Vertical Interval (V.I.) is the height difference between successive contours.",
            "Index contours are thicker and labelled with height.",
        ],
        "body": """### Reading contours
- **Contour**: line of equal height above mean sea level.
- **V.I. (Vertical Interval)**: constant difference in metres between consecutive contours on one sheet.
- **Index contour**: every fifth contour drawn thicker and numbered.

### Slope from contours
| Pattern | Meaning |
|---------|---------|
| Lines very close | Steep slope / cliff |
| Lines far apart | Gentle slope / plain |
| Closed concentric circles | Hill or depression (note hachures) |
| V-shaped pointing uphill | Valley (river flows in V) |""",
        "explanation": "If you walk along a contour line you neither climb nor descend — like following a level path around a hill.",
        "teacherTip": "V.I. is fixed per map; do not confuse with horizontal distance between contours.",
        "examTip": "State V.I. definition and explain slope using spacing — examiners love this 3-mark combo.",
    },
    {
        "title": "Interpreting Contour Patterns",
        "summary": "Characteristic contour shapes reveal hills, valleys, ridges, spurs, cols and escarpments without visiting the field.",
        "bullets": [
            "Hills show as concentric closed contours with height increasing inward.",
            "Valleys show V-shaped contours pointing upstream.",
            "Ridges have U-shaped contours pointing downhill.",
            "A col (saddle) is a low pass between two peaks.",
        ],
        "body": """### Landform signatures on contours

**Hill / peak:** concentric circles; inner contours have higher values.

**Depression:** concentric circles with **hachure marks** (tick marks) pointing inward.

**Valley:** V or U pointing **towards higher ground**; river occupies the valley floor.

**Ridge / spur:** contours bend with the high ground; V points **downhill**.

**Escarpment:** contours very close, almost overlapping — indicates a steep face or cliff.

**Plateau:** inner contours at similar height, outer slopes shown by widening spacing.""",
        "explanation": "The 'V rule': contour V always points to higher elevation in a valley and to lower elevation on a spur.",
        "teacherTip": "Draw quick sketches of V-valley vs spur — visual memory beats rote learning.",
        "examTip": "For 'identify landform from contour diagram' questions, trace one contour loop and note height labels first.",
    },
    {
        "title": "Recognizing Landforms on Maps",
        "summary": "Combining contours with colour tints and symbols helps identify plateaus, flood plains, deltas and coastal features.",
        "bullets": [
            "Brown contours show relief; blue shows water features.",
            "Yellow/buff often indicates cultivated or open land.",
            "Green patches mark forests or orchards.",
            "Spot heights (•452) give exact elevation at a point.",
        ],
        "body": """### Relief + colour + symbols

**Flood plain:** wide, flat area along a river with very widely spaced contours.

**Delta:** triangular mouth of river with distributaries; low relief near coast.

**Coastal cliff:** contours meet the coastline abruptly with tight spacing.

**Plateau:** elevated flat top — contours at similar height over a broad area, then steep edge.

**Meander:** river bends shown in blue; neck may be narrow on large-scale maps.

Use **spot heights** and **trigonometrical stations** (△) for precise elevation checks.""",
        "explanation": "Landform interpretation is detective work — contours tell shape, blue lines tell water, symbols tell human use.",
        "teacherTip": "Match textbook diagrams of contour patterns to SOI sample sheets if available.",
        "examTip": "Name the landform AND cite one contour clue (e.g. 'V pointing upstream → valley').",
    },
    {
        "title": "Water Features on Toposheets",
        "summary": "Rivers, streams, lakes, wells and tanks appear in blue with flow direction inferred from contour V-shapes and tributary junctions.",
        "bullets": [
            "Perennial rivers shown with solid blue lines; seasonal with dashed lines.",
            "Tributaries join the main river at acute angles pointing downstream.",
            "Wells (circle with dot) and tanks (blue oval) indicate water sources.",
            "Marshy ground shown with blue reed symbols.",
        ],
        "body": """### Drainage interpretation
1. Trace the main river — usually the thickest blue line in the drainage net.
2. Check contour Vs — they point upstream; river flows opposite to the V tip.
3. **Dendritic pattern:** tree-like tributaries on uniform rock.
4. **Radial pattern:** streams flow outward from a central high point (e.g. volcano).

**Tank / lake:** enclosed blue area; may have bund shown along one side.

**Well:** important in semi-arid settlement questions — links to irrigation and domestic use.""",
        "explanation": "Water always flows downhill — if contours and river disagree on your tracing, re-check eastings/northings.",
        "teacherTip": "Arrow the river direction lightly on the map during practice — avoids reversal errors.",
        "examTip": "When asked drainage pattern, name the pattern AND describe how tributaries join the main stream.",
    },
    {
        "title": "Settlement Patterns on Maps",
        "summary": "Settlements appear as black/red blocks; their shape (linear, nucleated, dispersed) reflects relief, water and transport.",
        "bullets": [
            "Nucleated: houses clustered around a focal point (crossing, temple, market).",
            "Linear: stretched along a road, river or coast.",
            "Dispersed: isolated farmsteads scattered in farmland.",
            "Dense settlement often on gentle slopes near water and routes.",
        ],
        "body": """### Settlement types on toposheets

| Type | Map appearance | Typical cause |
|------|----------------|---------------|
| Nucleated | Tight cluster of building symbols | Water, defence, market |
| Linear | Row along transport line | Road, river valley, coast |
| Dispersed | Few buildings spread out | Large farms, hilly terrain |

**Interpretation steps:**
1. Note building density and layout.
2. Relate to relief (steep = fewer buildings), water and roads/rail.
3. Distinguish **rural** (scattered huts, fields) from **urban** (dense grid, many streets).""",
        "explanation": "People settle where living is easier — flat land, water, and connectivity show up as settlement shape.",
        "teacherTip": "Overlay a sketch of road/river on the settlement — pattern becomes obvious.",
        "examTip": "Give settlement type + two reasons from the map (relief, water, transport).",
    },
    {
        "title": "Practical Map Reading Skills",
        "summary": "Cross-sections, gradient calculation, bearing and direction use contours, scale and the compass rose on the topo sheet.",
        "bullets": [
            "Cross-section: plot heights along a transect line A–B using contours crossed.",
            "Gradient = Vertical Interval / Horizontal Equivalent × 100 (as %).",
            "Bearings measured clockwise from North (0°–360°).",
            "North arrow and magnetic declination noted in map margin.",
        ],
        "body": """### Cross-section
Draw a line between two points; mark each contour crossed; plot height on graph paper — reveals ridge, valley or uniform slope.

### Gradient
$$\\text{Gradient} = \\frac{\\text{Vertical Interval}}{\\text{Horizontal Equivalent}} \\times 100$$

Example: rise of 100 m over 500 m horizontal → gradient = 20%.

### Bearings & direction
- **True North** on map from north arrow.
- **Bearing** of B from A: angle at A measured clockwise from North to line AB.

### Field skills checklist
1. Identify sheet number and scale.
2. Orient map using north arrow.
3. Give six-figure references for key features.
4. Describe relief, drainage, settlement and transport in sequence.""",
        "explanation": "Practical skills turn a flat map into a mental landscape — practise cross-sections until they feel automatic.",
        "teacherTip": "Use graph paper for cross-sections; same horizontal scale as map distance.",
        "examTip": "Show formula and substitution for gradient questions — units matter for full marks.",
    },
]

CH1_HIGH_YIELD = [
    "Topographical maps show relief and ground features using standard SOI conventional signs.",
    "Scale 1:50,000 means 1 cm on map = 50,000 cm (500 m) on ground.",
    "Eastings are vertical grid lines; northings are horizontal grid lines.",
    "In a grid reference, easting is always written before northing.",
    "Four-figure reference locates a 1 km square; six-figure pinpoints within it.",
    "A contour joins points of equal height above mean sea level.",
    "Vertical Interval (V.I.) is the constant height between successive contours.",
    "Closely spaced contours indicate a steep slope.",
    "Widely spaced contours indicate a gentle slope or flat land.",
    "Index contours are thicker and labelled every fifth contour.",
    "Concentric closed contours with rising values inward indicate a hill.",
    "Depressions show hachure marks on contour loops pointing inward.",
    "Valley contours form a V-shape pointing towards higher ground.",
    "Rivers flow in the direction opposite to the V tip of valley contours.",
    "A ridge or spur shows V-shaped contours pointing downhill.",
    "A col is a saddle-like low pass between two higher areas.",
    "Spot heights give exact elevation at a specific point (e.g. •452).",
    "Brown colour on SOI maps generally represents contour lines.",
    "Blue colour represents water features — rivers, lakes, tanks.",
    "Green indicates forested or vegetated areas.",
    "Yellow or buff often shows cultivated or open land.",
    "Nucleated settlements appear as dense clusters of building symbols.",
    "Linear settlements stretch along roads, rivers or coastlines.",
    "Dispersed settlements show isolated buildings in farmland.",
    "Gradient = (Vertical Interval ÷ Horizontal Equivalent) × 100.",
    "Cross-sections profile relief along a line between two map points.",
    "Bearings are measured clockwise from North (0° to 360°).",
    "Perennial rivers are solid blue; seasonal streams may be dashed.",
    "Trigonometrical stations (△) mark surveyed height points.",
    "Map index in the margin shows numbers of adjacent topo sheets.",
]

CH1_MCQS = [
    _mcq("What is the primary purpose of a topographical map?", ["Show political boundaries only", "Represent relief and natural/cultural features", "Display weather data", "Show population density"], 1, "Topographical maps show relief (shape of land) together with natural features like rivers and cultural features like roads and settlements.", exam="ICSE often contrasts topo vs political maps.", teacher="SOI conventional signs are the ICSE standard."),
    _mcq("On a topographical map, eastings are:", ["Horizontal grid lines increasing northward", "Vertical grid lines increasing eastward", "Contour lines of equal height", "Lines joining trigonometrical stations"], 1, "Eastings are vertical grid lines that increase in value from west to east.", teacher="Along the corridor = easting first."),
    combo(["Contour lines join places of equal temperature.", "The Vertical Interval is constant on a given topo sheet."], 1, "Only statement 2 is correct. Contours join equal **height**, not temperature.", exam="UPSC-style statement traps test precise definitions."),
    _mcq("Closely spaced contour lines indicate:", ["Gentle slope", "Steep slope", "Flat plateau top", "River mouth"], 1, "When contours are close together, elevation changes rapidly over a short horizontal distance — a steep slope."),
    _mcq("In a six-figure grid reference 452387, the figures 23 indicate:", ["The 1 km square column", "The tenths within the easting square", "The northing of the square only", "The map sheet number"], 1, "In six-figure references, the third and sixth digits give the tenths position within the 1 km square."),
    _mcq("Valley contours characteristically form:", ["Circles with hachures", "A V pointing towards higher ground", "Parallel straight lines only", "A V pointing towards lower ground"], 1, "Valley contours bend upstream, forming a V that points to higher elevation; the river flows away from the tip."),
    combo(["Widely spaced contours always mean a hilltop.", "Index contours are drawn thicker and numbered.", "Brown colour on SOI maps shows water bodies."], 1, "Only statement 2 is correct. Wide spacing means gentle slope (not always hilltop); blue, not brown, shows water."),
    _mcq("A depression on a contour map is shown by:", ["Concentric circles without labels", "Closed contours with hachure marks inward", "Crossed contour lines", "Spot height with triangle"], 1, "Depressions use closed contours with short hachure ticks pointing inward to show land below the surrounding level."),
    _mcq("The map index helps a reader to:", ["Calculate gradient", "Find adjacent topo sheet numbers", "Measure magnetic declination", "Draw cross-sections"], 1, "The index diagram lists neighbouring sheet numbers so larger areas can be studied by joining sheets."),
    _mcq("Gradient between two contours 400 m and 500 m separated by 2 km horizontally is:", ["5%", "10%", "20%", "50%"], 2, "VI = 100 m, HE = 2000 m → Gradient = 100/2000 × 100 = 5%. Wait — 100/2000 = 0.05 = 5%. Correct index is 0 for 5%... Recalculate: 100/2000*100 = 5%. None match if 2 is 10%... 100/1000=10%. For 2km=2000m: 5%. Fix correct to 0.", teacher="Always write formula first."),
    _mcq("Which settlement pattern appears stretched along a transport route?", ["Nucleated", "Linear", "Dispersed", "Scattered rural"], 1, "Linear settlements grow along a road, railway, river valley or coastline."),
    _mcq("Spot heights on a topo sheet indicate:", ["Annual rainfall", "Exact elevation at a point", "Population of a town", "Soil type"], 1, "A spot height (dot with number) gives the precise elevation in metres at that location."),
    combo(["Rivers flow in the direction the contour V points.", "Tributaries join the main river at acute angles.", "Seasonal streams are always shown with solid blue lines."], 1, "Statements 2 only? Flow is OPPOSITE to V tip. Statement 2 correct. Statement 3 wrong (seasonal often dashed). Answer: 1 only if we label stmt1 wrong, stmt2 right → '1 only' wrong. Correct: 2 only.", exam="Trace river direction carefully."),
    _mcq("A col on a topographical map is:", ["The highest point of a hill", "A low saddle between two peaks", "A delta at river mouth", "A permanent lake"], 1, "A col (saddle) is a pass between two higher areas, shown where contour loops almost touch."),
    _mcq("Four-figure grid reference identifies:", ["Exact building location", "A 1 km grid square", "Magnetic bearing", "Contour interval"], 1, "Four-figure references locate a 1 km square on the grid; six-figure gives finer position."),
    _mcq("Trigonometrical stations on SOI maps are marked by:", ["Blue circle", "Triangle symbol △", "Red star only", "Double contour line"], 1, "Surveyed trig stations appear as triangles and provide accurate height control."),
    _mcq("Which colour typically represents forests on SOI topo sheets?", ["Blue", "Green", "Brown", "Black"], 1, "Green patches indicate forest, orchard or significant vegetation cover."),
    _mcq("Cross-section of a map shows:", ["Population change over time", "Profile of relief along a line", "Annual temperature range", "Political boundaries"], 1, "A cross-section plots height along a transect, visualising hills, valleys and slopes."),
    combo(["Nucleated settlements cluster around a focal point.", "Dispersed settlements show isolated farmsteads.", "Linear settlements occur only on hilltops."], 3, "Statements 1 and 2 are correct; linear settlements follow routes/valleys, not only hilltops. Answer: Both 1 and 2 → index 2 for 'Both 1 and 2'." if False else "", exam="Settlement questions need map evidence."),
    _mcq("Bearing of a point is measured:", ["From East anticlockwise", "From North clockwise", "From South clockwise", "Along the equator only"], 1, "Bearings are angles measured clockwise from North (0°–360°)."),
    _mcq("An escarpment appears on a map as:", ["Widely spaced contours over a plain", "Very closely spaced or touching contours", "A blue triangular area", "Random spot heights"], 1, "Escarpments/cliffs show rapid height change — contours pack tightly or form a edge."),
    _mcq("Perennial rivers on topo maps are usually shown as:", ["Dashed blue lines", "Solid blue lines", "Brown contours", "Green patches"], 1, "Perennial (year-round) rivers use continuous blue lines; intermittent streams may be dashed."),
    _mcq("Horizontal Equivalent in gradient refers to:", ["Height difference between contours", "Ground distance between two points", "Map distance without scale", "Magnetic variation"], 1, "Horizontal Equivalent is the actual ground distance corresponding to a map distance between points."),
    _mcq("Which landform shows concentric contours with highest value at the centre?", ["River delta", "Hill or peak", "Flood plain", "Coastal marsh"], 1, "Hills appear as concentric closed loops with elevation increasing toward the centre."),
    combo(["Contour interval changes randomly on one sheet.", "A flood plain has very widely spaced contours.", "Hachures on contours indicate a hilltop."], 1, "Only statement 2 is correct. V.I. is constant; hachures mark depressions, not hilltops."),
    _mcq("Map scale 1:50,000 means:", ["1 cm = 50 m", "1 cm = 500 m", "1 cm = 5 km", "1 cm = 50 km"], 1, "1:50,000 → 1 cm = 50,000 cm = 500 m on the ground."),
    _mcq("Dendritic drainage pattern resembles:", ["Parallel lines", "A tree with branches", "Concentric circles", "A grid of canals"], 1, "Dendritic (tree-like) tributaries join the main stream at acute angles on uniform terrain."),
    _mcq("When drawing a cross-section, height at each point comes from:", ["Settlement symbols", "Contours crossed by the transect", "Map title", "Sheet margin colour"], 1, "Heights are read from each contour the transect line crosses."),
    _mcq("A ridge is best identified when contour V-shapes point:", ["Towards higher ground", "Towards lower ground", "To the equator", "Parallel to rivers only"], 1, "On a spur/ridge, contour Vs point downhill, opposite to valleys."),
]

# Pad CH1 MCQs to 70 with additional quality questions
_CH1_EXTRA = [
    _mcq("Magnetic declination on a topo sheet shows:", ["Difference between True North and Magnetic North", "Slope angle", "Population density", "Contour interval"], 0, "Declination is the angle between true (geographic) north and magnetic north at that location."),
    _mcq("Intermittent streams are often shown by:", ["Solid red lines", "Dashed blue lines", "Green shading", "Black dots"], 1, "Seasonal or intermittent watercourses typically use dashed blue symbols."),
    _mcq("The north arrow on a topo map points to:", ["Magnetic south", "Grid north only", "True/geographic north (as per map note)", "Eastings direction"], 2, "Maps include a north arrow; some also note grid north and magnetic north separately."),
    _mcq("Which reference locates a church precisely within a village square?", ["Two-figure reference", "Four-figure reference", "Six-figure reference", "Sheet index number"], 2, "Six-figure references give position within a 1 km square to ~100 m accuracy."),
    _mcq("Radial drainage pattern suggests:", ["Uniform sedimentary plain", "Central elevated feature like a volcano", "Glaciated valley", "Delta mouth"], 1, "Streams flowing outward from a centre create a radial pattern on a dome or volcanic cone."),
    _mcq("Cultural features on topo maps include:", ["Contours and cliffs only", "Roads, railways and buildings", "Ocean currents", "Air pressure cells"], 1, "Cultural (man-made) features include settlements, roads, railways, bridges and canals."),
    _mcq("A flood plain is characterised by:", ["Tight contour loops on a peak", "Wide area of very gentle slope beside a river", "Blue hachured circles", "Dense contour hachures on a cliff"], 1, "Flood plains are flat, low-relief areas adjacent to rivers with widely spaced contours."),
    _mcq("Representative Fraction 1:25,000 compared to 1:50,000 is:", ["Smaller scale, less detail", "Larger scale, more detail", "Same scale", "Not a valid RF"], 1, "1:25,000 is a larger-scale map showing a smaller area with greater detail."),
    _mcq("Joining adjacent topo sheets uses information from:", ["Compass rose only", "Map index in margin", "Spot height table", "Cheatsheet legend of colours"], 1, "The index diagram gives neighbouring sheet numbers for seamless coverage."),
    _mcq("Contour lines never:", ["Cross each other (except overhang/cliff representation)", "Show equal height", "Indicate slope", "Form closed loops on hills"], 0, "Contours ordinarily do not cross; crossing suggests a vertical cliff or overhang on specialised diagrams."),
    _mcq("Nucleated rural settlement often develops near:", ["Inaccessible cliffs", "Water source and crossroads", "Permanent snowline", "Deep ocean coast only"], 1, "Clustered villages form near water, fertile land and route intersections."),
    _mcq("Measuring bearing requires:", ["Protractor aligned with North on the map", "Rain gauge data", "Population table", "Bar graph of rainfall"], 0, "Place protractor centre at starting point, align 0° with north arrow, read clockwise."),
    _mcq("Plateau on a map shows:", ["Broad area with similar high contour values and steep edges", "Only blue symbols", "No contours", "Random spot heights without pattern"], 0, "Plateaus have flat elevated tops (similar contour values) often with steeper marginal slopes."),
    _mcq("Marshy land may be shown with:", ["Reed/marsh symbols in blue", "Red political boundary", "Triangle trig point", "Black building blocks only"], 0, "Marsh or swamp often uses special blue reed symbols on topographical maps."),
    _mcq("Vertical Interval differs from horizontal spacing because:", ["V.I. is height difference; spacing is ground distance between contours", "They are identical terms", "V.I. measures population", "Spacing measures temperature"], 0, "V.I. is in metres of height; contour spacing on the map reflects slope steepness horizontally."),
    _mcq("A meander is associated with:", ["Straight glacier", "Winding river course in a valley", "Volcanic crater only", "Desert dune"], 1, "Meanders are sinuous river bends, visible as curved blue lines on large-scale maps."),
    _mcq("Dispersed settlement is common in:", ["Steep inaccessible mountains with large farms", "Dense city CBD grid", "Only coastal ports", "Polar ice caps"], 0, "Scattered farmsteads appear where land is farmed in large plots, often in rolling or hilly countryside."),
    _mcq("SOI conventional signs ensure:", ["Every map uses different symbols", "Standardised representation across India", "Only political boundaries are shown", "Maps have no scale"], 1, "Survey of India conventional signs standardise symbols and colours nationwide."),
    _mcq("If contour values decrease toward a river centre, the river flows:", ["Uphill", "In the direction of decreasing contour values along the valley", "East only", "Without relation to relief"], 1, "Rivers descend along valleys; tracing decreasing contours downstream gives flow direction."),
    _mcq("Sheet number and name appear in:", ["Map margin/title area", "Only on reverse of paper", "Ocean areas", "Contour labels"], 0, "Sheet identification (number, place name, edition) is printed in the map margin."),
    _mcq("Black symbols on topo maps often represent:", ["Water", "Man-made features like roads and buildings", "Forest only", "Snow line"], 1, "Black (and red for major roads) commonly depicts cultural features and annotations."),
    _mcq("Gentle slope suitable for agriculture often shows:", ["Contours far apart on lower slopes", "Contours merged into one line", "No drainage", "Only marsh symbols"], 0, "Gentle slopes have widely spaced contours — easier for farming and settlement."),
    _mcq("Delta formation appears near:", ["Mountain peak centre", "River mouth at coast with distributaries", "Desert interior", "Continental ice sheet"], 1, "Deltas form where a river deposits sediment at its mouth, often showing multiple distributary channels."),
    _mcq("To find grid easting of a point, read:", ["Vertical grid line to the left of the point", "Horizontal line above", "River name", "Contour value only"], 0, "Read the easting value on the vertical grid line immediately left of the location."),
    _mcq("A spur projecting from high ground shows contours that:", ["Bulge toward lower ground with V pointing downhill", "Form perfect squares", "Disappear entirely", "Cross rivers at right angles always"], 0, "Spurs are ridges extending from high ground; contour Vs point down the slope."),
    _mcq("Practical topo study sequence should begin with:", ["Random sketch", "Orientation, scale, sheet ID and north arrow", "Population census", "Weather forecast"], 1, "Always orient the map, note scale and sheet number before interpreting features."),
    _mcq("Contour label '600' means:", ["600 km from equator", "600 m above mean sea level along that line", "600 people per km²", "600 mm rainfall"], 1, "Contour labels give elevation in metres (or feet per map note) above datum."),
    _mcq("Linear settlement along a river suggests:", ["Houses clustered away from water", "Buildings strung along the valley transport/water route", "No access to water", "Only industrial zones"], 1, "Linear patterns follow usable routes — river valleys offer water and transport."),
    _mcq("Steep cliff and coast may show contours:", ["Terminating abruptly at coastline", "Absent over oceans only", "As green patches", "As political boundaries"], 0, "Cliffs show contours ending sharply where land meets sea on steep shores."),
    _mcq("Grid north and true north may differ slightly because:", ["Grid lines on map projections converge slightly from true meridians", "Rivers change north", "Contours shift yearly", "Scale is missing"], 0, "On some projections grid north (parallel grid lines) differs slightly from true north — noted in margin."),
    _mcq("Identifying transport network on a topo helps explain:", ["Settlement and economic activity patterns", "Ocean salinity only", "Earth's core composition", "Lunar phases"], 0, "Roads and railways influence where settlements grow and how areas develop."),
    _mcq("A trigonometrical survey point primarily provides:", ["Reliable horizontal and vertical control for mapping", "Weather records", "Soil pH", "Voting data"], 0, "Trig points are accurately surveyed fixes for map geometry and height."),
    _mcq("When contours form elongated loops along a range, the feature is likely:", ["A mountain range or ridge system", "A single well", "A delta", "An urban park only"], 0, "Elongated contour loops along a high axis indicate ridge or range terrain."),
    _mcq("Seasonal tank (irrigation pond) appears as:", ["Blue enclosed shape, often rectangular/oval", "Brown concentric circles", "Red dashed line", "Green triangle"], 0, "Tanks/reservoirs show as blue enclosed areas, important in semi-arid regions."),
    _mcq("Using RF 1:50,000, 4 cm on map equals ground distance:", ["200 m", "2 km", "20 km", "200 km"], 1, "4 cm × 50,000 = 200,000 cm = 2,000 m = 2 km."),
    _mcq("Contour hachures pointing inward indicate:", ["Rising hilltop", "Depression below surrounding level", "River source", "Railway station"], 1, "Inward hachure ticks mark a depression or crater below adjacent ground."),
    _mcq("Best evidence of a valley floor on a map is:", ["Highest spot height", "River line with V-contours pointing upstream", "Desert symbols", "Sheet edge"], 1, "Valley floors carry streams with characteristic V-shaped contour bends."),
    _mcq("Urban area on large-scale topo differs from rural by:", ["Denser building symbols and street pattern", "Absence of any contours", "Only blue colour", "No roads shown"], 0, "Towns show dense red/black building blocks and connected street networks."),
    _mcq("Map reading 'gradient' answer must include:", ["Formula, substitution and % or ratio", "Only a sketch", "Population figure", "Latitude only"], 0, "ICSE marking awards steps: VI, HE, formula and calculated gradient."),
    _mcq("Adjacent contour values on a hill increase:", ["Toward the centre of the loop", "Toward the ocean always", "Randomly", "Only downhill"], 0, "For a hill, inner closed contours carry higher elevation values."),
    _mcq("A break in contour lines may indicate:", ["Cliff or vertical face (represented with tick marks)", "Flat ocean", "City boundary only", "Magnetic pole"], 0, "Cliffs sometimes shown with contours ending and rock/cliff symbols between."),
    _mcq("Interpreting relief 'general slope' of an area means:", ["Overall direction land descends (e.g. NE to SW)", "Population growth rate", "Wind direction only", "River name"], 0, "General slope describes which direction elevation decreases across the sheet."),
]

# Fix gradient MCQ correct answer
for q in CH1_MCQS:
    if "Gradient between two contours 400 m" in q["q"]:
        q["correct"] = 0
        q["opts"] = ["5%", "10%", "20%", "50%"]
        q["ans"] = "VI = 500 − 400 = 100 m; HE = 2 km = 2000 m; Gradient = 100/2000 × 100 = 5%."

# Fix combo question with broken answer
for q in CH1_MCQS:
    if "Rivers flow in the direction the contour V points" in q["q"]:
        q["correct"] = 1
        q["ans"] = "Only statement 2 is correct. Rivers flow opposite to the V tip; tributaries join at acute angles; seasonal streams are often dashed, not solid."

for q in CH1_MCQS:
    if "Linear settlements occur only on hilltops" in q["q"]:
        q["correct"] = 2
        q["opts"] = ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"]
        q["ans"] = "Statements 1 and 2 are correct. Linear settlements follow valleys/routes, not only hilltops."

CH1_MCQS = (CH1_MCQS + _CH1_EXTRA)[:70]

CH1_TFS = [
    {"q": "Eastings are horizontal grid lines on a topographical map.", "correct": "false", "just": "False. Eastings are vertical grid lines increasing eastward; northings are horizontal."},
    {"q": "Contour lines join places of equal height above mean sea level.", "correct": "true", "just": "True. A contour is an imaginary line connecting points of equal elevation."},
    {"q": "Widely spaced contours always indicate a mountain peak.", "correct": "false", "just": "False. Wide spacing indicates gentle slope or flat land; peaks show closed concentric contours."},
    {"q": "A six-figure grid reference is more precise than a four-figure reference.", "correct": "true", "just": "True. Six-figure references locate a point within a grid square using tenths."},
    {"q": "Rivers in valleys flow in the direction the contour V points.", "correct": "false", "just": "False. The V points upstream; the river flows in the opposite direction."},
    {"q": "Vertical Interval may vary randomly on a single topo sheet.", "correct": "false", "just": "False. V.I. is constant for a given topographical map sheet."},
    {"q": "Green colour on SOI maps commonly represents forest or vegetation.", "correct": "true", "just": "True. Green tints/symbols mark wooded or vegetated areas."},
    {"q": "A nucleated settlement appears as scattered isolated buildings.", "correct": "false", "just": "False. Nucleated settlements are clustered; dispersed settlements are scattered."},
    {"q": "Cross-sections help visualise the profile of relief along a transect.", "correct": "true", "just": "True. Heights plotted along A–B show hills, valleys and slopes in profile."},
    {"q": "Bearings are measured anticlockwise from East.", "correct": "false", "just": "False. Bearings are measured clockwise from North."},
]

CH1_FILLS = [
    {"q": "Lines joining points of equal height on a map are called ______.", "blank": "contour lines", "ans": "Contour lines join points of equal elevation above mean sea level."},
    {"q": "The constant height difference between successive contours is the Vertical ______.", "blank": "interval", "ans": "Vertical Interval (V.I.) is the elevation difference between consecutive contour lines."},
    {"q": "Grid lines that increase in value eastward are called ______.", "blank": "eastings", "ans": "Eastings are vertical grid lines read before northings in a grid reference."},
    {"q": "A settlement stretched along a road or river is called ______ settlement.", "blank": "linear", "ans": "Linear settlements form along transport routes or valley floors."},
    {"q": "The organisation preparing standard topographical maps of India is the Survey of ______.", "blank": "India", "ans": "The Survey of India (SOI) publishes topographical maps with conventional signs."},
]

CH1_MATCHES = [
    {"q": "Match contour patterns with landforms:", "pairs": [{"left": "V pointing uphill", "right": "Valley"}, {"left": "Closed loops, higher inward", "right": "Hill"}, {"left": "Hachures inward", "right": "Depression"}, {"left": "Very close lines", "right": "Steep slope"}], "ans": "V uphill→valley; closed higher inward→hill; hachures→depression; close lines→steep slope."},
    {"q": "Match colours on SOI maps:", "pairs": [{"left": "Blue", "right": "Water"}, {"left": "Brown", "right": "Contours"}, {"left": "Green", "right": "Forest"}, {"left": "Black/Red", "right": "Cultural features"}], "ans": "Blue=water; brown=contours; green=forest; black/red=cultural features."},
    {"q": "Match settlement types:", "pairs": [{"left": "Nucleated", "right": "Clustered around focal point"}, {"left": "Linear", "right": "Along road or river"}, {"left": "Dispersed", "right": "Scattered farmsteads"}, {"left": "Urban dense", "right": "Many buildings, street grid"}], "ans": "Nucleated=cluster; linear=along route; dispersed=scattered; urban=dense grid."},
    {"q": "Match grid terms:", "pairs": [{"left": "Easting", "right": "Vertical grid line"}, {"left": "Northing", "right": "Horizontal grid line"}, {"left": "Four-figure", "right": "1 km square"}, {"left": "Six-figure", "right": "Precise point"}], "ans": "Easting=vertical; northing=horizontal; four-figure=square; six-figure=precise point."},
    {"q": "Match drainage terms:", "pairs": [{"left": "Tributary", "right": "Joins main river"}, {"left": "Distributary", "right": "Branches at delta"}, {"left": "Perennial river", "right": "Flows year-round"}, {"left": "Dendritic pattern", "right": "Tree-like network"}], "ans": "Tributary joins main stream; distributary at delta; perennial=year-round; dendritic=tree-like."},
    {"q": "Match symbols:", "pairs": [{"left": "△", "right": "Trig station"}, {"left": "•452", "right": "Spot height"}, {"left": "Dashed blue line", "right": "Seasonal stream"}, {"left": "Solid blue line", "right": "Perennial river"}], "ans": "Triangle=trig; dot number=spot height; dashed blue=seasonal; solid blue=perennial."},
    {"q": "Match slope description:", "pairs": [{"left": "Close contours", "right": "Steep"}, {"left": "Wide contours", "right": "Gentle"}, {"left": "Col", "right": "Saddle pass"}, {"left": "Escarpment", "right": "Steep face"}], "ans": "Close=steep; wide=gentle; col=pass; escarpment=steep face."},
    {"q": "Match practical skills:", "pairs": [{"left": "Cross-section", "right": "Relief profile"}, {"left": "Gradient", "right": "Slope steepness %"}, {"left": "Bearing", "right": "Direction from North"}, {"left": "Map index", "right": "Adjacent sheets"}], "ans": "Cross-section=profile; gradient=slope%; bearing=direction; index=neighbouring sheets."},
    {"q": "Match landforms:", "pairs": [{"left": "Plateau", "right": "Flat elevated top"}, {"left": "Flood plain", "right": "Wide river flatland"}, {"left": "Delta", "right": "River mouth deposits"}, {"left": "Meander", "right": "River bend"}], "ans": "Plateau=flat top; flood plain=river flat; delta=mouth; meander=bend."},
    {"q": "Match definitions:", "pairs": [{"left": "V.I.", "right": "Height between contours"}, {"left": "H.E.", "right": "Ground distance"}, {"left": "RF", "right": "Ratio scale without units"}, {"left": "Conventional signs", "right": "Standard map symbols"}], "ans": "V.I.=height step; H.E.=horizontal distance; RF=ratio scale; conventional signs=standard symbols."},
]

CH1_SHORTS = [
    {"q": "Explain how contour lines show a steep slope and a gentle slope.", "ans": "On a topographical map, **closely spaced** contour lines indicate a **steep slope** because elevation changes rapidly over a short horizontal distance. **Widely spaced** contours indicate a **gentle slope** or nearly flat land because height changes slowly across the ground."},
    {"q": "Describe how to find the six-figure grid reference of a church shown on a map.", "ans": "1. Read the **four-figure** square (easting of line left of church, northing of line below). 2. Estimate **tenths** within the square — third digit of easting (how far across) and sixth digit of northing (how far up). 3. Write all six digits: easting three figures, then northing three figures."},
    {"q": "Distinguish between nucleated and dispersed rural settlements with map clues.", "ans": "**Nucleated:** buildings **clustered** around a centre (water, crossroads, temple). **Dispersed:** **isolated** farmsteads scattered in fields. On maps, nucleated shows dense blocks; dispersed shows few separated building symbols."},
    {"q": "How do you determine the direction of river flow using contours?", "ans": "Valley contours form a **V-shape pointing upstream** (toward higher ground). The river flows **away from the tip** of the V, downhill along the valley floor. Tributaries join the main stream at acute angles pointing downstream."},
    {"q": "What is gradient? Calculate gradient if VI = 50 m and horizontal equivalent = 250 m.", "ans": "Gradient is the **steepness of slope**. Formula: Gradient = (VI ÷ HE) × 100. Here: 50/250 × 100 = **20%**. The land rises 20 m vertically for every 100 m horizontally."},
]

CH1_MINDMAP = """mindmap
  root((Topographical Maps))
    Basics
      SOI conventional signs
      Large scale 1:50000
      Relief + cultural features
    Grid
      Eastings vertical
      Northings horizontal
      4-figure vs 6-figure
    Contours
      Equal height lines
      Vertical Interval
      Index contours
    Landforms
      Hill depression
      Valley vs spur
      Plateau escarpment
    Water
      Perennial vs seasonal
      Drainage patterns
      Tanks wells
    Settlements
      Nucleated linear dispersed
      Roads railways
    Skills
      Cross-section
      Gradient bearing
      Map index"""

CH1_CHEATSHEET = [
    "Topo map = relief + natural + man-made features (SOI signs).",
    "Easting before northing; eastings vertical, northings horizontal.",
    "4-figure = 1 km square; 6-figure = precise point within square.",
    "Contour = equal height; V.I. constant on one sheet.",
    "Close contours = steep; wide = gentle.",
    "Hill: closed loops, higher inward; depression: hachures inward.",
    "Valley V points upstream; river flows opposite.",
    "Spur/ridge: V points downhill.",
    "Blue = water; brown = contours; green = forest.",
    "Spot height •number = exact elevation.",
    "Gradient = (VI ÷ HE) × 100.",
    "Cross-section plots heights along transect A–B.",
    "Bearing: clockwise from North 0°–360°.",
    "Nucleated = cluster; linear = along route; dispersed = scattered.",
    "Perennial river = solid blue; seasonal = dashed blue.",
    "Trig station △ = surveyed control point.",
    "Map index shows adjacent sheet numbers.",
    "RF 1:50000 → 1 cm = 500 m.",
    "Col = saddle between peaks.",
    "Dendritic drainage = tree-like tributaries.",
    "Larger scale (1:25000) shows more detail than 1:50000.",
    "Escarpment/cliff = very tight contours.",
    "Flood plain = flat, wide, low contours beside river.",
    "Orient map with north arrow before interpreting.",
]

CH1_WORD_CARDS = [
    {"term": "Topographical map", "definition": "Large-scale map showing relief and ground features with standard symbols."},
    {"term": "Contour", "definition": "Line joining points of equal height above mean sea level."},
    {"term": "Vertical Interval", "definition": "Constant height difference between successive contour lines."},
    {"term": "Easting", "definition": "Vertical grid line whose value increases eastward."},
    {"term": "Northing", "definition": "Horizontal grid line whose value increases northward."},
    {"term": "Grid reference", "definition": "Numeric location using easting and northing coordinates."},
    {"term": "Index contour", "definition": "Thicker labelled contour, usually every fifth line."},
    {"term": "Spot height", "definition": "Precise elevation marked at a specific point on the map."},
    {"term": "Hachure", "definition": "Short ticks on contours indicating a depression."},
    {"term": "Col", "definition": "Low saddle pass between two higher areas."},
    {"term": "Escarpment", "definition": "Steep slope or cliff shown by very close contours."},
    {"term": "Gradient", "definition": "Measure of slope steepness: VI/HE × 100."},
    {"term": "Horizontal Equivalent", "definition": "Actual ground distance between two mapped points."},
    {"term": "Cross-section", "definition": "Profile graph of relief along a line on the map."},
    {"term": "Bearing", "definition": "Direction measured clockwise from North."},
    {"term": "Conventional signs", "definition": "Standard SOI symbols for map features."},
    {"term": "Nucleated settlement", "definition": "Buildings clustered around a central focal point."},
    {"term": "Linear settlement", "definition": "Settlement stretched along a route or valley."},
    {"term": "Dispersed settlement", "definition": "Isolated buildings scattered over farmland."},
    {"term": "Perennial river", "definition": "Stream that flows throughout the year."},
    {"term": "Dendritic drainage", "definition": "Tree-like pattern of tributaries on uniform terrain."},
    {"term": "Radial drainage", "definition": "Streams flowing outward from a central high point."},
    {"term": "Representative Fraction", "definition": "Scale as a ratio without units, e.g. 1:50000."},
    {"term": "Trig station", "definition": "Surveyed point marked △ for map control."},
    {"term": "Meander", "definition": "Winding bend in a river course."},
    {"term": "Flood plain", "definition": "Flat lowland beside a river prone to flooding."},
    {"term": "Delta", "definition": "Triangular deposit at a river mouth with distributaries."},
    {"term": "Plateau", "definition": "Elevated area with relatively flat top."},
    {"term": "Map index", "definition": "Diagram showing numbers of adjoining topo sheets."},
    {"term": "Magnetic declination", "definition": "Angle between true north and magnetic north."},
]

# Due to length, CH2-CH4 defined in separate module
from geography8.chapter_data._ch2_ch4_defs import CH2_DATA, CH3_DATA, CH4_DATA  # noqa: E402


def main() -> None:
    chapters = [
        (1, "Interpreting Topographical Maps", CH1_TOPICS, CH1_HIGH_YIELD, CH1_MCQS, CH1_TFS, CH1_FILLS, CH1_MATCHES, CH1_SHORTS, CH1_MINDMAP, CH1_CHEATSHEET, CH1_WORD_CARDS),
        (2, "Population", *CH2_DATA),
        (3, "Migration", *CH3_DATA),
        (4, "Urbanization", *CH4_DATA),
    ]
    for num, title, topics, hy, mcqs, tfs, fills, matches, shorts, mindmap, cs, wc in chapters:
        assert len(mcqs) == 70, f"ch{num} has {len(mcqs)} MCQs"
        assert len(topics) == 8, f"ch{num} topics"
        assert len(wc) == 30, f"ch{num} word cards"
        assert len(hy) >= 25, f"ch{num} high yield"
        assert len(cs) >= 20, f"ch{num} cheatsheet"
        _write_chapter(num, title, topics, hy, mcqs, tfs, fills, matches, shorts, mindmap, cs, wc)
        print(f"Wrote ch{num}.py ({len(mcqs)} MCQs)")


if __name__ == "__main__":
    main()
