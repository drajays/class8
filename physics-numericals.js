// ============================================================
// ICSE CLASS 8 PHYSICS — NUMERICAL / MATHEMATICAL PROBLEMS
// Step-by-step solutions with concepts and formulas
// Variable: PHYSICS_NUMERICALS  (merged in app.js)
// ============================================================
const PHYSICS_NUMERICALS = [
  // ── CHAPTER 2: Physical Quantities & Measurement (Q1–Q18) ──
  {
    id: "phy-num-q01", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the density of a substance of mass 200 g occupying a volume of 50 cm³. Express the answer in g/cm³ and kg/m³.",
    answer: "Concept: Density (ρ) is mass per unit volume.\nFormula: ρ = m/V\n\nSolution:\n1. ρ = 200/50 = 4 g/cm³\n2. Convert to SI: 4 × 1000 = 4000 kg/m³\n\nAnswer: 4 g/cm³ and 4000 kg/m³",
    teacherTip: "Multiply g/cm³ by 1000 to convert to kg/m³.", examTip: "Show both CGS and SI units when asked."
  },
  {
    id: "phy-num-q02", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A block of iron has dimensions 10 cm × 5 cm × 2 cm. If the density of iron is 7.8 g/cm³, find the mass of the block.",
    answer: "Concept: Volume of a rectangular block = l × b × h; mass = density × volume.\nFormulas: V = l × b × h;  m = ρ × V\n\nSolution:\n1. V = 10 × 5 × 2 = 100 cm³\n2. m = 7.8 × 100 = 780 g\n\nAnswer: 780 g",
    teacherTip: "Always calculate volume before finding mass.", examTip: "Include units (g) in your final answer."
  },
  {
    id: "phy-num-q03", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The mass of a cork piece is 24 g and its density is 0.24 g/cm³. Find its volume.",
    answer: "Concept: Rearrange the density formula to find volume.\nFormula: V = m/ρ\n\nSolution:\n1. V = 24/0.24 = 100 cm³\n\nAnswer: 100 cm³",
    teacherTip: "When density < 1 g/cm³, the object will float on water.", examTip: "Write the formula before substituting values."
  },
  {
    id: "phy-num-q04", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A body has a volume of 0.02 m³ and a density of 2500 kg/m³. Find its mass.",
    answer: "Concept: Mass = density × volume (both in SI units).\nFormula: m = ρ × V\n\nSolution:\n1. m = 2500 × 0.02 = 50 kg\n\nAnswer: 50 kg",
    teacherTip: "Ensure both ρ and V are in compatible SI units.", examTip: "State the formula m = ρV clearly."
  },
  {
    id: "phy-num-q05", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A solid weighs 80 g in air and 60 g when fully immersed in water. Find (a) the volume of the body, (b) its density.",
    answer: "Concept: Apparent loss of mass in water = mass of displaced water = volume (since water density = 1 g/cm³).\nFormulas: Volume = Mass in air − Mass in water;  ρ = m/V\n\nSolution:\n1. Apparent loss = 80 − 60 = 20 g\n2. (a) Volume = 20 cm³\n3. (b) ρ = 80/20 = 4 g/cm³\n\nAnswer: (a) 20 cm³  (b) 4 g/cm³",
    teacherTip: "1 g of displaced water = 1 cm³ of volume.", examTip: "Label parts (a) and (b) separately."
  },
  {
    id: "phy-num-q06", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The relative density of gold is 19.3. If the density of water is 1000 kg/m³, find the density of gold in SI units. What volume will 100 g of gold occupy?",
    answer: "Concept: Relative density = ρ_substance / ρ_water.\nFormula: ρ_substance = RD × ρ_water;  V = m/ρ\n\nSolution:\n1. ρ of gold = 19.3 × 1000 = 19300 kg/m³ (= 19.3 g/cm³)\n2. V = 100/19.3 ≈ 5.18 cm³\n\nAnswer: 19300 kg/m³; volume ≈ 5.18 cm³",
    teacherTip: "RD has no units — it is a pure ratio.", examTip: "Show conversion from RD to both CGS and SI."
  },
  {
    id: "phy-num-q07", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A measuring cylinder contains 100 mL of water. When a piece of metal is dropped into it, the water level rises to 145 mL. If the mass of the metal is 390 g, find its density.",
    answer: "Concept: Displacement method — volume of object = rise in water level.\nFormulas: V = V_final − V_initial;  ρ = m/V  (1 mL = 1 cm³)\n\nSolution:\n1. V = 145 − 100 = 45 mL = 45 cm³\n2. ρ = 390/45 ≈ 8.67 g/cm³\n\nAnswer: ≈ 8.67 g/cm³",
    teacherTip: "1 mL = 1 cm³ — use this to avoid unit errors.", examTip: "State the displacement volume calculation first."
  },
  {
    id: "phy-num-q08", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "An object floats in water (density 1000 kg/m³) with ¼ of its volume above the surface. Find the density of the object.",
    answer: "Concept: Law of Floatation — fraction submerged = ρ_object / ρ_fluid.\nFormula: V_submerged / V_total = ρ_object / ρ_fluid\n\nSolution:\n1. Fraction submerged = 1 − 1/4 = 3/4\n2. 3/4 = ρ_object / 1000\n3. ρ_object = 1000 × 0.75 = 750 kg/m³\n\nAnswer: 750 kg/m³",
    teacherTip: "Fraction above + fraction submerged = 1.", examTip: "Draw a quick diagram showing submerged portion."
  },
  {
    id: "phy-num-q09", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A solid of density 3000 kg/m³ weighs 0.3 N less in a liquid than in air. If it weighs 1.8 N in air, find the density of the liquid. (g = 10 m/s²)",
    answer: "Concept: Loss of weight in fluid = upthrust = V × ρ_liquid × g.\nFormulas: m = W/g;  V = m/ρ_solid;  Upthrust = V × ρ_liquid × g\n\nSolution:\n1. m = 1.8/10 = 0.18 kg\n2. V = 0.18/3000 = 0.00006 m³\n3. Upthrust = 0.3 N\n4. 0.3 = 0.00006 × ρ_liquid × 10\n5. ρ_liquid = 0.3/0.0006 = 500 kg/m³\n\nAnswer: 500 kg/m³",
    teacherTip: "Find volume of solid first using its own density.", examTip: "Write each step — mass, volume, then upthrust equation."
  },
  {
    id: "phy-num-q10", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A body floats with 60% of its volume submerged in water. What fraction of its volume will be submerged in a liquid of density 0.8 g/cm³?",
    answer: "Concept: Apply Law of Floatation twice — first find object density, then fraction in new liquid.\nFormula: Fraction submerged = ρ_object / ρ_liquid\n\nSolution:\n1. ρ_object = 0.6 × 1.0 g/cm³ = 0.6 g/cm³\n2. Fraction submerged = 0.6/0.8 = 0.75\n\nAnswer: 75% (or 3/4) of volume submerged",
    teacherTip: "Object density = fraction submerged × water density.", examTip: "Express final answer as fraction or percentage."
  },
  {
    id: "phy-num-q11", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Convert a speed of 72 km/h into m/s.",
    answer: "Concept: km/h to m/s conversion factor is 5/18.\nFormula: v (m/s) = v (km/h) × 5/18\n\nSolution:\n72 × 5/18 = 20 m/s\n\nAnswer: 20 m/s",
    teacherTip: "Memorise: multiply km/h by 5/18 to get m/s.", examTip: "Show the conversion factor in your working."
  },
  {
    id: "phy-num-q12", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Convert a speed of 15 m/s into km/h.",
    answer: "Concept: m/s to km/h conversion factor is 18/5.\nFormula: v (km/h) = v (m/s) × 18/5\n\nSolution:\n15 × 18/5 = 54 km/h\n\nAnswer: 54 km/h",
    teacherTip: "To go from m/s to km/h, multiply by 18/5.", examTip: "Reverse of km/h → m/s conversion."
  },
  {
    id: "phy-num-q13", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A car travels 120 km in 2 hours. Find its average speed in m/s.",
    answer: "Concept: Average speed = total distance / total time, then convert units.\nFormula: v_avg = d/t\n\nSolution:\n1. Speed = 120/2 = 60 km/h\n2. Convert: 60 × 5/18 ≈ 16.67 m/s\n\nAnswer: ≈ 16.67 m/s",
    teacherTip: "Find speed in km/h first, then convert.", examTip: "State both intermediate and final units."
  },
  {
    id: "phy-num-q14", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A train 200 m long passes a pole in 10 s. Find its speed in km/h.",
    answer: "Concept: Passing a point object — distance travelled = own length.\nFormula: v = d/t\n\nSolution:\n1. v = 200/10 = 20 m/s\n2. Convert: 20 × 18/5 = 72 km/h\n\nAnswer: 72 km/h",
    teacherTip: "Pole has zero length — train covers its own length.", examTip: "Convert m/s to km/h as the final step."
  },
  {
    id: "phy-num-q15", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A train 150 m long passes a platform of 250 m in 20 s. Find the speed of the train in km/h.",
    answer: "Concept: Passing an extended object — total distance = train length + platform length.\nFormula: d = L_train + L_platform;  v = d/t\n\nSolution:\n1. d = 150 + 250 = 400 m\n2. v = 400/20 = 20 m/s\n3. Convert: 20 × 18/5 = 72 km/h\n\nAnswer: 72 km/h",
    teacherTip: "Add both lengths for total distance covered.", examTip: "Distinguish pole vs platform problems clearly."
  },
  {
    id: "phy-num-q16", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "Two cars move towards each other from towns 180 km apart at 60 km/h and 40 km/h respectively. After how much time will they meet, and how far from the first town?",
    answer: "Concept: Relative speed for objects moving towards each other = sum of speeds.\nFormulas: v_relative = v₁ + v₂;  t = d/v_relative\n\nSolution:\n1. Relative speed = 60 + 40 = 100 km/h\n2. t = 180/100 = 1.8 hours\n3. Distance from first town = 60 × 1.8 = 108 km\n\nAnswer: 1.8 hours; 108 km from first town",
    teacherTip: "Add speeds when moving towards each other.", examTip: "Answer both parts — time AND distance."
  },
  {
    id: "phy-num-q17", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A body covers 100 m in the first 10 s and the next 100 m in 5 s. Is the motion uniform or non-uniform? Calculate the average speed for the entire journey.",
    answer: "Concept: Uniform motion = equal distances in equal times. Average speed = total distance / total time.\nFormula: v_avg = (d₁ + d₂)/(t₁ + t₂)\n\nSolution:\n1. Speeds: 100/10 = 10 m/s and 100/5 = 20 m/s — different, so non-uniform.\n2. v_avg = (100 + 100)/(10 + 5) = 200/15 ≈ 13.33 m/s\n\nAnswer: Non-uniform motion; average speed ≈ 13.33 m/s",
    teacherTip: "Compare speeds in each interval to judge uniformity.", examTip: "State uniform/non-uniform before calculating average speed."
  },
  {
    id: "phy-num-q18", topicId: "ch2-measurement", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A man walks 3 km due East, then 4 km due North. Find the distance travelled and the displacement.",
    answer: "Concept: Distance = total path length; displacement = shortest straight-line distance (Pythagoras for perpendicular paths).\nFormulas: Distance = d₁ + d₂;  Displacement = √(d₁² + d₂²)\n\nSolution:\n1. Distance = 3 + 4 = 7 km\n2. Displacement = √(3² + 4²) = √25 = 5 km\n\nAnswer: Distance = 7 km; Displacement = 5 km",
    teacherTip: "Displacement is always ≤ distance travelled.", examTip: "Draw a right-angled triangle to justify Pythagoras."
  },

  // ── CHAPTER 3: Force and Pressure (Q19–Q30) ──
  {
    id: "phy-num-q19", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A force of 20 N acts on an area of 5 m². Calculate the pressure exerted.",
    answer: "Concept: Pressure = force per unit area.\nFormula: P = F/A\n\nSolution:\nP = 20/5 = 4 Pa\n\nAnswer: 4 Pa",
    teacherTip: "Pressure is always perpendicular force divided by area.", examTip: "Include unit Pa (Pascal) in the answer."
  },
  {
    id: "phy-num-q20", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the pressure exerted by a force of 500 N on an area of 0.5 m².",
    answer: "Concept: Direct application of pressure formula.\nFormula: P = F/A\n\nSolution:\nP = 500/0.5 = 1000 Pa\n\nAnswer: 1000 Pa",
    teacherTip: "Watch decimal places when dividing.", examTip: "Write P = F/A before substituting."
  },
  {
    id: "phy-num-q21", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "What force will produce a pressure of 500 Pa over an area of 4 m²?",
    answer: "Concept: Rearrange pressure formula to find force.\nFormula: F = P × A\n\nSolution:\nF = 500 × 4 = 2000 N\n\nAnswer: 2000 N",
    teacherTip: "F = PA is the rearranged form of P = F/A.", examTip: "State the rearranged formula first."
  },
  {
    id: "phy-num-q22", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A rectangular block of dimensions 10 cm × 5 cm × 4 cm and mass 4 kg rests on a table. What is the maximum and minimum pressure it can exert? (g = 10 m/s²)",
    answer: "Concept: Max pressure on smallest face; min pressure on largest face. Force = weight = mg.\nFormulas: P_max = F/A_min;  P_min = F/A_max\n\nSolution:\n1. F = 4 × 10 = 40 N\n2. A_min = 5 × 4 = 20 cm² = 0.002 m²\n3. A_max = 10 × 5 = 50 cm² = 0.005 m²\n4. P_max = 40/0.002 = 20000 Pa\n5. P_min = 40/0.005 = 8000 Pa\n\nAnswer: Maximum = 20000 Pa; Minimum = 8000 Pa",
    teacherTip: "Convert cm² to m² before calculating pressure in Pa.", examTip: "Identify smallest and largest faces first."
  },
  {
    id: "phy-num-q23", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A force of 50 N is applied on an area of (a) 0.01 m², (b) 0.5 m². Find the pressure in each case and comment on which area experiences greater pressure.",
    answer: "Concept: Pressure is inversely proportional to area for the same force.\nFormula: P = F/A\n\nSolution:\n1. (a) P = 50/0.01 = 5000 Pa\n2. (b) P = 50/0.5 = 100 Pa\n3. Smaller area (0.01 m²) experiences significantly greater pressure.\n\nAnswer: (a) 5000 Pa  (b) 100 Pa — smaller area has greater pressure",
    teacherTip: "Halving the area doubles the pressure.", examTip: "Always comment when asked to compare."
  },
  {
    id: "phy-num-q24", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A box weighs 300 N. It is placed on the ground on its face of area 2 m². Find the pressure exerted.",
    answer: "Concept: Weight acts as the force; P = Weight/Area.\nFormula: P = W/A\n\nSolution:\nP = 300/2 = 150 Pa\n\nAnswer: 150 Pa",
    teacherTip: "Weight is a force — use it directly in P = F/A.", examTip: "Label weight as the force in your working."
  },
  {
    id: "phy-num-q25", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The base of a container has an area 0.02 m². It holds water to a height of 0.5 m. Calculate the pressure and force on the base. (Density of water = 1000 kg/m³, g = 10 m/s²)",
    answer: "Concept: Hydrostatic pressure at depth h; force = pressure × area.\nFormulas: P = h × ρ × g;  F = P × A\n\nSolution:\n1. P = 0.5 × 1000 × 10 = 5000 Pa\n2. F = 5000 × 0.02 = 100 N\n\nAnswer: Pressure = 5000 Pa; Force = 100 N",
    teacherTip: "Liquid pressure depends only on depth, not container shape.", examTip: "Calculate pressure first, then force."
  },
  {
    id: "phy-num-q26", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A block of wood of density 0.6 g/cm³ and volume 500 cm³ floats in water. Find the volume of the block above water and the upthrust acting on it. (g = 10 m/s²)",
    answer: "Concept: When floating, upthrust = weight. Fraction submerged = ρ_object/ρ_water.\nFormulas: m = ρ × V;  F_up = mg;  V_submerged = fraction × V_total\n\nSolution:\n1. m = 0.6 × 500 = 300 g = 0.3 kg\n2. F_up = 0.3 × 10 = 3 N\n3. Fraction submerged = 0.6/1.0 = 0.6\n4. V_submerged = 0.6 × 500 = 300 cm³\n5. V_above = 500 − 300 = 200 cm³\n\nAnswer: Volume above water = 200 cm³; Upthrust = 3 N",
    teacherTip: "Upthrust equals weight when the object floats.", examTip: "Answer both parts — volume above AND upthrust."
  },
  {
    id: "phy-num-q27", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the pressure at a depth of 10 m below the surface of a lake. (Density of water = 1000 kg/m³, g = 9.8 m/s²)",
    answer: "Concept: Hydrostatic pressure increases linearly with depth.\nFormula: P = h × ρ × g\n\nSolution:\nP = 10 × 1000 × 9.8 = 98000 Pa\n\nAnswer: 98000 Pa",
    teacherTip: "Use the given value of g — do not assume 10 unless stated.", examTip: "Include depth, density and g in the formula."
  },
  {
    id: "phy-num-q28", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The pressure due to a column of mercury of height 76 cm equals the atmospheric pressure. Calculate the atmospheric pressure in Pa. (Density of mercury = 13600 kg/m³, g = 10 m/s²)",
    answer: "Concept: Standard atmospheric pressure from barometric height.\nFormula: P = h × ρ × g  (convert cm to m first)\n\nSolution:\n1. h = 76 cm = 0.76 m\n2. P = 0.76 × 13600 × 10 = 103360 Pa\n\nAnswer: 103360 Pa (≈ 1.01 × 10⁵ Pa)",
    teacherTip: "76 cm Hg is the standard barometric height.", examTip: "Convert cm to m before substituting."
  },
  {
    id: "phy-num-q29", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A force of 50 N acts on a body of mass 10 kg. Find the acceleration produced. (Use F = ma)",
    answer: "Concept: Newton's Second Law — force causes acceleration.\nFormula: a = F/m\n\nSolution:\na = 50/10 = 5 m/s²\n\nAnswer: 5 m/s²",
    teacherTip: "Rearrange F = ma to a = F/m.", examTip: "State F = ma before rearranging."
  },
  {
    id: "phy-num-q30", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A body of mass 5 kg accelerates at 4 m/s². Find the force acting on it.",
    answer: "Concept: Newton's Second Law of Motion.\nFormula: F = m × a\n\nSolution:\nF = 5 × 4 = 20 N\n\nAnswer: 20 N",
    teacherTip: "Force and acceleration are directly proportional.", examTip: "Include unit N in the final answer."
  },

  // ── CHAPTER 3: Force and Pressure — continued (Q31–Q42) ──
  {
    id: "phy-num-q31", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A force of 30 N acts on a body of mass 5 kg initially at rest. Find the velocity acquired in 4 s.",
    answer: "Concept: Use F = ma to find acceleration, then v = u + at for final velocity.\nFormulas: a = F/m;  v = u + at\n\nSolution:\n1. a = 30/5 = 6 m/s²\n2. u = 0 (starts from rest)\n3. v = 0 + 6 × 4 = 24 m/s\n\nAnswer: 24 m/s",
    teacherTip: "Rest means initial velocity u = 0.", examTip: "Write both kinematic steps clearly."
  },
  {
    id: "phy-num-q32", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A car of mass 1000 kg moving at 20 m/s is brought to rest in 5 s. Calculate the braking force.",
    answer: "Concept: Braking force is retarding — find negative acceleration first.\nFormulas: a = (v − u)/t;  F = m × a\n\nSolution:\n1. a = (0 − 20)/5 = −4 m/s²\n2. F = 1000 × (−4) = −4000 N\n\nAnswer: −4000 N (magnitude 4000 N retarding force)",
    teacherTip: "Negative sign indicates direction opposite to motion.", examTip: "State that braking force acts opposite to motion."
  },
  {
    id: "phy-num-q33", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A body of mass 2 kg moving with a velocity of 10 m/s is stopped by a force in 4 s. Calculate the force and the distance covered before stopping.",
    answer: "Concept: Find retardation for force; use s = ut + ½at² for stopping distance.\nFormulas: a = (v − u)/t;  F = ma;  s = ut + ½at²\n\nSolution:\n1. a = (0 − 10)/4 = −2.5 m/s²\n2. F = 2 × (−2.5) = −5 N\n3. s = (10 × 4) + 0.5 × (−2.5) × 16 = 40 − 20 = 20 m\n\nAnswer: Force = −5 N; Distance = 20 m",
    teacherTip: "Use the same acceleration for both force and distance.", examTip: "Answer both parts — force AND distance."
  },
  {
    id: "phy-num-q34", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A truck of mass 3000 kg moving at 15 m/s accelerates uniformly to 25 m/s in 10 s. Find (a) the acceleration, (b) the force applied, (c) the momentum at 25 m/s.",
    answer: "Concept: Kinematics + Newton's second law + momentum.\nFormulas: a = (v − u)/t;  F = ma;  p = mv\n\nSolution:\n1. (a) a = (25 − 15)/10 = 1 m/s²\n2. (b) F = 3000 × 1 = 3000 N\n3. (c) p = 3000 × 25 = 75000 kg·m/s\n\nAnswer: (a) 1 m/s²  (b) 3000 N  (c) 75000 kg·m/s",
    teacherTip: "Momentum uses final velocity at 25 m/s.", examTip: "Label all three parts (a), (b), (c)."
  },
  {
    id: "phy-num-q35", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A bullet of mass 20 g moving at 300 m/s strikes a wooden block and comes to rest in 0.05 s. Calculate the force exerted by the block on the bullet.",
    answer: "Concept: Convert mass to kg; rapid retardation gives large force.\nFormulas: a = (v − u)/t;  F = ma\n\nSolution:\n1. m = 20 g = 0.02 kg\n2. a = (0 − 300)/0.05 = −6000 m/s²\n3. F = 0.02 × (−6000) = −120 N\n\nAnswer: −120 N (magnitude 120 N)",
    teacherTip: "Always convert grams to kilograms first.", examTip: "Show mass conversion step explicitly."
  },
  {
    id: "phy-num-q36", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Find the momentum of a body of mass 2.5 kg moving at 6 m/s.",
    answer: "Concept: Momentum = mass × velocity.\nFormula: p = m × v\n\nSolution:\np = 2.5 × 6 = 15 kg·m/s\n\nAnswer: 15 kg·m/s",
    teacherTip: "Momentum is a vector — include direction if given.", examTip: "Unit is kg·m/s (not N·s here)."
  },
  {
    id: "phy-num-q37", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the weight of a body of mass 5 kg. (g = 9.8 m/s²)",
    answer: "Concept: Weight is gravitational force on a body.\nFormula: W = m × g\n\nSolution:\nW = 5 × 9.8 = 49 N\n\nAnswer: 49 N",
    teacherTip: "Use the given g — do not assume 10 m/s².", examTip: "Weight is in newtons, not kg."
  },
  {
    id: "phy-num-q38", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A man weighs 600 N on Earth. What will be his mass and weight on the Moon, where g_moon = 1.6 m/s²? (g_earth = 10 m/s²)",
    answer: "Concept: Mass is constant everywhere; weight depends on local g.\nFormulas: m = W_earth/g_earth;  W_moon = m × g_moon\n\nSolution:\n1. m = 600/10 = 60 kg (same on Moon)\n2. W_moon = 60 × 1.6 = 96 N\n\nAnswer: Mass = 60 kg; Weight on Moon = 96 N",
    teacherTip: "Mass never changes — only weight does.", examTip: "State that mass stays 60 kg on the Moon."
  },
  {
    id: "phy-num-q39", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A constant force acts on a body of mass 4 kg and changes its velocity from 2 m/s to 8 m/s in 3 s. Find the magnitude of the force.",
    answer: "Concept: Force equals rate of change of momentum.\nFormula: F = m(v − u)/t\n\nSolution:\nF = 4 × (8 − 2)/3 = 4 × 2 = 8 N\n\nAnswer: 8 N",
    teacherTip: "F = ma and F = mΔv/t give the same result.", examTip: "Show velocity change (8 − 2 = 6) clearly."
  },
  {
    id: "phy-num-q40", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two blocks of mass 2 kg and 3 kg are tied by a string. A force of 25 N pulls them on a frictionless surface. Find (a) the acceleration of the system, (b) the tension in the string connecting them.",
    answer: "Concept: Treat both blocks as one system for acceleration; tension accelerates the trailing block only.\nFormulas: a = F_total/m_total;  T = m_trailing × a\n\nSolution:\n1. Total mass = 2 + 3 = 5 kg\n2. (a) a = 25/5 = 5 m/s²\n3. (b) T = 2 × 5 = 10 N\n\nAnswer: (a) 5 m/s²  (b) 10 N",
    teacherTip: "Tension on the trailing 2 kg block = 2 × a.", examTip: "Draw a free-body diagram for each block."
  },
  {
    id: "phy-num-q41", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A ball of mass 0.2 kg is thrown vertically up at 20 m/s. Find (a) the maximum height reached, (b) the time to reach the highest point. (g = 10 m/s²)",
    answer: "Concept: At max height, v = 0. Take a = −g (upward positive).\nFormulas: v² = u² − 2gh;  v = u − gt\n\nSolution:\n1. (a) 0 = 20² − 2 × 10 × h → 400 = 20h → h = 20 m\n2. (b) 0 = 20 − 10t → t = 2 s\n\nAnswer: (a) 20 m  (b) 2 s",
    teacherTip: "At the top, velocity momentarily becomes zero.", examTip: "Use v = 0 at maximum height."
  },
  {
    id: "phy-num-q42", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A 1000 kg car rounds a curve of radius 50 m at 20 m/s. Find the centripetal force required. (F = mv²/r)",
    answer: "Concept: Centripetal force keeps an object in circular motion.\nFormula: F_c = mv²/r\n\nSolution:\nF_c = (1000 × 20²)/50 = (1000 × 400)/50 = 8000 N\n\nAnswer: 8000 N",
    teacherTip: "Centripetal force always points toward the centre.", examTip: "Square the velocity before multiplying by mass."
  },

  // ── CHAPTER 4: Work, Energy and Power (Q43–Q60) ──
  {
    id: "phy-num-q43", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the work done by a force of 20 N in moving a body through a distance of 5 m in the direction of the force.",
    answer: "Concept: Work = force × displacement when both are in the same direction.\nFormula: W = F × d\n\nSolution:\nW = 20 × 5 = 100 J\n\nAnswer: 100 J",
    teacherTip: "1 N × 1 m = 1 J.", examTip: "Include unit J (joule) in the answer."
  },
  {
    id: "phy-num-q44", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A force of 50 N displaces a body by 10 m. Find the work done if the displacement is in the direction of the force.",
    answer: "Concept: Direct application of work formula.\nFormula: W = F × d\n\nSolution:\nW = 50 × 10 = 500 J\n\nAnswer: 500 J",
    teacherTip: "Force and displacement must be parallel for W = Fd.", examTip: "State the formula before substituting."
  },
  {
    id: "phy-num-q45", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A man pushes a wall but fails to move it. How much work is done by him?",
    answer: "Concept: Work requires displacement. If d = 0, work = 0.\nFormula: W = F × d\n\nSolution:\nDisplacement = 0 → Work done = 0 J\n\nAnswer: 0 J",
    teacherTip: "Effort alone does not mean work in physics.", examTip: "Explain why W = 0 (no displacement)."
  },
  {
    id: "phy-num-q46", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A force of 30 N acts on a body at an angle of 30° to the displacement of 10 m. Calculate the work done. (cos 30° = 0.866)",
    answer: "Concept: Only the component of force along displacement does work.\nFormula: W = F × d × cos θ\n\nSolution:\nW = 30 × 10 × 0.866 = 259.8 J\n\nAnswer: 259.8 J",
    teacherTip: "θ is the angle between force and displacement.", examTip: "Use cos θ for the parallel component."
  },
  {
    id: "phy-num-q47", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the work done in lifting a mass of 20 kg through a height of 5 m. (g = 10 m/s²)",
    answer: "Concept: Work against gravity = gain in gravitational potential energy.\nFormula: W = m × g × h\n\nSolution:\nW = 20 × 10 × 5 = 1000 J\n\nAnswer: 1000 J",
    teacherTip: "Lifting work equals mgh.", examTip: "This is also the PE gained."
  },
  {
    id: "phy-num-q48", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A boy of mass 40 kg climbs a staircase of 20 steps each of height 15 cm. Find the work done. (g = 10 m/s²)",
    answer: "Concept: Find total vertical height first, then W = mgh.\nFormulas: h = steps × height per step;  W = mgh\n\nSolution:\n1. h = 20 × 0.15 = 3 m\n2. W = 40 × 10 × 3 = 1200 J\n\nAnswer: 1200 J",
    teacherTip: "Convert 15 cm to 0.15 m before multiplying.", examTip: "Show height conversion step."
  },
  {
    id: "phy-num-q49", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A pump lifts 500 kg of water to a height of 10 m in 1 minute. Calculate the power of the pump in watts and horsepower. (g = 10 m/s², 1 hp = 746 W)",
    answer: "Concept: Power = work done per unit time.\nFormula: P = mgh/t\n\nSolution:\n1. t = 60 s\n2. P = (500 × 10 × 10)/60 = 50000/60 ≈ 833.3 W\n3. In hp: 833.3/746 ≈ 1.12 hp\n\nAnswer: ≈ 833.3 W; ≈ 1.12 hp",
    teacherTip: "Convert minutes to seconds for SI power.", examTip: "Answer in both W and hp when asked."
  },
  {
    id: "phy-num-q50", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A man does 3000 J of work in 15 s. Find his power.",
    answer: "Concept: Power is rate of doing work.\nFormula: P = W/t\n\nSolution:\nP = 3000/15 = 200 W\n\nAnswer: 200 W",
    teacherTip: "Power = work ÷ time.", examTip: "Unit is watt (W = J/s)."
  },
  {
    id: "phy-num-q51", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "An electric bulb is rated 60 W. How much energy does it consume in 5 hours? Give the answer in joules and kWh.",
    answer: "Concept: Energy = power × time (use consistent units).\nFormula: E = P × t\n\nSolution:\n1. In joules: t = 5 h = 18000 s; E = 60 × 18000 = 1,080,000 J (1.08 × 10⁶ J)\n2. In kWh: P = 0.06 kW; E = 0.06 × 5 = 0.3 kWh\n\nAnswer: 1.08 × 10⁶ J; 0.3 kWh",
    teacherTip: "kWh uses kW and hours — not watts and seconds.", examTip: "Show both unit conversions separately."
  },
  {
    id: "phy-num-q52", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the kinetic energy of a body of mass 5 kg moving with a velocity of 10 m/s.",
    answer: "Concept: Kinetic energy is energy of motion.\nFormula: KE = ½mv²\n\nSolution:\nKE = 0.5 × 5 × 10² = 0.5 × 5 × 100 = 250 J\n\nAnswer: 250 J",
    teacherTip: "Square the velocity before multiplying.", examTip: "Write ½ explicitly in your working."
  },
  {
    id: "phy-num-q53", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Find the potential energy of a body of mass 10 kg at a height of 8 m. (g = 10 m/s²)",
    answer: "Concept: Gravitational potential energy depends on height.\nFormula: PE = mgh\n\nSolution:\nPE = 10 × 10 × 8 = 800 J\n\nAnswer: 800 J",
    teacherTip: "PE = 0 at ground level (reference).", examTip: "Include g value used in working."
  },
  {
    id: "phy-num-q54", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A body of mass 2 kg is thrown vertically up with a velocity of 20 m/s. Using conservation of energy, find the maximum height reached. (g = 10 m/s²)",
    answer: "Concept: At max height, all KE converts to PE.\nFormula: ½mv² = mgh  →  ½v² = gh\n\nSolution:\n1. 0.5 × 20² = 10 × h\n2. 0.5 × 400 = 10h → 200 = 10h\n3. h = 20 m\n\nAnswer: 20 m",
    teacherTip: "Mass cancels — height depends only on v and g.", examTip: "State conservation of energy principle."
  },
  {
    id: "phy-num-q55", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A stone of mass 1 kg falls freely from a height of 20 m. Find its kinetic energy just before hitting the ground. (g = 10 m/s²)",
    answer: "Concept: PE at top fully converts to KE at bottom (conservation of energy).\nFormula: KE_bottom = PE_top = mgh\n\nSolution:\nKE = 1 × 10 × 20 = 200 J\n\nAnswer: 200 J",
    teacherTip: "No need to find velocity — use energy conservation.", examTip: "State that PE lost = KE gained."
  },
  {
    id: "phy-num-q56", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A body of mass 4 kg moving at 5 m/s collides and its speed reduces to 2 m/s. Calculate the change in kinetic energy.",
    answer: "Concept: ΔKE = final KE − initial KE.\nFormula: ΔKE = ½m(v_f² − v_i²)\n\nSolution:\nΔKE = 0.5 × 4 × (2² − 5²) = 2 × (4 − 25) = 2 × (−21) = −42 J\n\nAnswer: −42 J (42 J of kinetic energy lost)",
    teacherTip: "Negative ΔKE means energy was lost (e.g. to heat/sound).", examTip: "Square both velocities before subtracting."
  },
  {
    id: "phy-num-q57", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A car of mass 1000 kg is moving at 36 km/h. Calculate its kinetic energy and momentum.",
    answer: "Concept: Convert km/h to m/s first, then apply KE and p formulas.\nFormulas: v = km/h × 5/18;  KE = ½mv²;  p = mv\n\nSolution:\n1. v = 36 × 5/18 = 10 m/s\n2. KE = 0.5 × 1000 × 100 = 50000 J\n3. p = 1000 × 10 = 10000 kg·m/s\n\nAnswer: KE = 50000 J; Momentum = 10000 kg·m/s",
    teacherTip: "Always convert km/h to m/s for SI calculations.", examTip: "Show unit conversion as first step."
  },
  {
    id: "phy-num-q58", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the power of an engine that does 45000 J of work in 1 minute.",
    answer: "Concept: Power = work / time (time in seconds).\nFormula: P = W/t\n\nSolution:\n1. t = 60 s\n2. P = 45000/60 = 750 W\n\nAnswer: 750 W",
    teacherTip: "Convert 1 minute to 60 seconds.", examTip: "State time conversion before dividing."
  },
  {
    id: "phy-num-q59", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A machine raises a load of 200 N through a height of 5 m in 10 s. If the efficiency is 80%, find the input power.",
    answer: "Concept: Output power = useful work/time; efficiency = P_out/P_in.\nFormulas: P_out = Load × h / t;  Efficiency = P_out/P_in\n\nSolution:\n1. P_out = (200 × 5)/10 = 100 W\n2. 0.80 = 100/P_in → P_in = 100/0.80 = 125 W\n\nAnswer: 125 W",
    teacherTip: "Efficiency is always less than 100% for real machines.", examTip: "Find output power first, then input."
  },
  {
    id: "phy-num-q60", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The efficiency of a machine is 60%. If it gives an output of 240 J, find the input work and the energy wasted.",
    answer: "Concept: Efficiency = W_out/W_in; wasted energy = W_in − W_out.\nFormulas: W_in = W_out/efficiency;  W_wasted = W_in − W_out\n\nSolution:\n1. W_in = 240/0.60 = 400 J\n2. W_wasted = 400 − 240 = 160 J\n\nAnswer: Input work = 400 J; Energy wasted = 160 J",
    teacherTip: "Input is always greater than output in real machines.", examTip: "Answer both input work AND wasted energy."
  },

  // ── CHAPTER 4: Work, Energy and Power — continued (Q61–Q66) ──
  {
    id: "phy-num-q61", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A boy weighing 400 N runs up a flight of stairs of total height 6 m in 8 s. Find his power.",
    answer: "Concept: Power = work done per unit time; work = weight × height.\nFormulas: W = W_weight × h;  P = W/t\n\nSolution:\n1. Work = 400 × 6 = 2400 J\n2. P = 2400/8 = 300 W\n\nAnswer: 300 W",
    teacherTip: "Weight in N can be used directly as force against gravity.", examTip: "Show work calculation before finding power."
  },
  {
    id: "phy-num-q62", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A 60 W lamp is used for 10 hours a day for 30 days. If energy costs ₹5 per kWh, find the total bill.",
    answer: "Concept: Commercial energy is billed in kWh.\nFormula: E = P_kW × t_hours;  Cost = E × rate\n\nSolution:\n1. P = 60/1000 = 0.06 kW\n2. Total time = 10 × 30 = 300 hours\n3. E = 0.06 × 300 = 18 kWh\n4. Cost = 18 × 5 = ₹90\n\nAnswer: ₹90",
    teacherTip: "Convert watts to kilowatts before multiplying by hours.", examTip: "Show kWh calculation before cost."
  },
  {
    id: "phy-num-q63", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A body of mass 2 kg is dropped from a height of 45 m. Find its kinetic and potential energies at half the height. (g = 10 m/s²)",
    answer: "Concept: Total mechanical energy is conserved; at half height, PE = KE.\nFormula: E_total = mgh;  PE + KE = E_total\n\nSolution:\n1. E_total = 2 × 10 × 45 = 900 J\n2. At h = 22.5 m: PE = 2 × 10 × 22.5 = 450 J\n3. KE = 900 − 450 = 450 J\n\nAnswer: PE = 450 J; KE = 450 J",
    teacherTip: "At exactly half the height, KE = PE (each half of total).", examTip: "State conservation of energy principle."
  },
  {
    id: "phy-num-q64", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "In a machine, an effort of 50 N raises a load of 200 N. If the effort moves through 2 m while the load moves through 0.4 m, calculate the mechanical advantage (MA) and the velocity ratio (VR).",
    answer: "Concept: MA compares forces; VR compares distances moved.\nFormulas: MA = Load/Effort;  VR = d_effort/d_load\n\nSolution:\n1. MA = 200/50 = 4\n2. VR = 2/0.4 = 5\n\nAnswer: MA = 4; VR = 5",
    teacherTip: "MA has no units — it is a ratio.", examTip: "Label MA and VR separately."
  },
  {
    id: "phy-num-q65", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A machine has MA = 4 and VR = 5. Find its efficiency. If the load is 600 N, find the effort required.",
    answer: "Concept: Efficiency = MA/VR; effort from mechanical advantage.\nFormulas: η = (MA/VR) × 100%;  Effort = Load/MA\n\nSolution:\n1. η = 4/5 = 0.8 = 80%\n2. Effort = 600/4 = 150 N\n\nAnswer: Efficiency = 80%; Effort = 150 N",
    teacherTip: "Ideal machine has η = 100% (MA = VR).", examTip: "Answer both efficiency AND effort."
  },
  {
    id: "phy-num-q66", topicId: "ch4-energy", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A ball of mass 0.5 kg moving at 10 m/s is hit back in the opposite direction at 8 m/s. Calculate the work done by the force on the ball (change in kinetic energy).",
    answer: "Concept: Work-Energy Theorem — net work = change in KE.\nFormula: W = ΔKE = ½m(v_f² − v_i²)\n\nSolution:\nW = 0.5 × 0.5 × (8² − 10²) = 0.25 × (64 − 100) = 0.25 × (−36) = −9 J\n\nAnswer: −9 J (magnitude 9 J of work done by retarding force)",
    teacherTip: "Use v² — direction is handled by sign of velocities in ΔKE.", examTip: "State the Work-Energy Theorem."
  },

  // ── CHAPTER 5: Light Energy — Reflection & Refraction (Q67–Q88) ──
  {
    id: "phy-num-q67", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "An object is placed at a distance of 20 cm in front of a plane mirror. How far is the image from the object?",
    answer: "Concept: Plane mirror — image distance behind mirror = object distance in front.\nFormula: Total distance = d_object + d_image\n\nSolution:\nTotal distance = 20 + 20 = 40 cm\n\nAnswer: 40 cm",
    teacherTip: "Image is as far behind the mirror as object is in front.", examTip: "Add object distance and image distance."
  },
  {
    id: "phy-num-q68", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A man stands 5 m in front of a plane mirror. How far must he walk so that the distance between him and his image becomes 6 m?",
    answer: "Concept: Total distance man-to-image = 2 × distance from mirror.\n\nSolution:\n1. Target distance from mirror = 6/2 = 3 m\n2. Walk towards mirror: 5 − 3 = 2 m\n\nAnswer: 2 m towards the mirror",
    teacherTip: "Man-to-image distance is twice his distance from mirror.", examTip: "Halve the target total distance first."
  },
  {
    id: "phy-num-q69", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A ray of light is incident on a plane mirror at an angle of 30° to the mirror surface. Find the angle of reflection and the angle between the incident ray and the reflected ray.",
    answer: "Concept: Angle of incidence is measured from the normal, not the surface.\nFormulas: i = 90° − surface angle;  i = r;  angle between rays = i + r\n\nSolution:\n1. i = 90° − 30° = 60°\n2. r = 60° (law of reflection)\n3. Angle between rays = 60° + 60° = 120°\n\nAnswer: Angle of reflection = 60°; Angle between rays = 120°",
    teacherTip: "Always measure i and r from the normal.", examTip: "Draw the normal perpendicular to the mirror."
  },
  {
    id: "phy-num-q70", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two plane mirrors are placed at an angle of 60° between them. How many images are formed?",
    answer: "Concept: Multiple images in inclined mirrors.\nFormula: n = (360°/θ) − 1\n\nSolution:\nn = (360/60) − 1 = 6 − 1 = 5\n\nAnswer: 5 images",
    teacherTip: "θ is the angle between the mirrors.", examTip: "Subtract 1 from 360/θ."
  },
  {
    id: "phy-num-q71", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "Two plane mirrors are inclined at 90°. An object is placed between them. How many images are formed? If the angle were 72°, how many images would form?",
    answer: "Concept: Multiple image formula for inclined mirrors.\nFormula: n = (360°/θ) − 1\n\nSolution:\n1. For 90°: n = (360/90) − 1 = 4 − 1 = 3 images\n2. For 72°: n = (360/72) − 1 = 5 − 1 = 4 images\n\nAnswer: 3 images at 90°; 4 images at 72°",
    teacherTip: "Smaller angle between mirrors → more images.", examTip: "Answer both angles separately."
  },
  {
    id: "phy-num-q72", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The refractive index of glass is 1.5. If the speed of light in vacuum is 3 × 10⁸ m/s, find the speed of light in glass.",
    answer: "Concept: Refractive index n = c/v.\nFormula: n = c/v  →  v = c/n\n\nSolution:\nv = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s\n\nAnswer: 2 × 10⁸ m/s",
    teacherTip: "Light slows down in denser media.", examTip: "Use scientific notation for c."
  },
  {
    id: "phy-num-q73", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The speed of light in water is 2.25 × 10⁸ m/s. Find the refractive index of water. (Speed of light in vacuum = 3 × 10⁸ m/s)",
    answer: "Concept: n = ratio of vacuum speed to medium speed.\nFormula: n = c/v\n\nSolution:\nn = (3 × 10⁸)/(2.25 × 10⁸) = 3/2.25 = 1.33\n\nAnswer: 1.33",
    teacherTip: "Water has n ≈ 1.33 — light travels slower in water.", examTip: "Cancel powers of 10 before dividing."
  },
  {
    id: "phy-num-q74", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A ray of light travelling in air enters water (refractive index 1.33) at an angle of incidence of 40°. Find the angle of refraction. (sin 40° = 0.643)",
    answer: "Concept: Snell's Law relates angles across two media.\nFormula: n₁ sin i = n₂ sin r\n\nSolution:\n1. 1.0 × 0.643 = 1.33 × sin r\n2. sin r = 0.643/1.33 ≈ 0.483\n3. r = arcsin(0.483) ≈ 28.9°\n\nAnswer: ≈ 28.9°",
    teacherTip: "Light bends towards the normal entering a denser medium.", examTip: "Take n_air = 1.0."
  },
  {
    id: "phy-num-q75", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Light travels from glass (n = 1.5) to air. If the angle of incidence is 30°, find the angle of refraction. (sin 30° = 0.5)",
    answer: "Concept: Light going from denser to rarer medium bends away from normal.\nFormula: n₁ sin i = n₂ sin r\n\nSolution:\n1. 1.5 × 0.5 = 1.0 × sin r\n2. sin r = 0.75\n3. r = arcsin(0.75) ≈ 48.6°\n\nAnswer: ≈ 48.6°",
    teacherTip: "Refraction angle is larger than incidence when entering rarer medium.", examTip: "Show Snell's Law setup clearly."
  },
  {
    id: "phy-num-q76", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The refractive index of diamond is 2.42. Find the speed of light in diamond and the critical angle for diamond–air interface. (sin c = 1/n)",
    answer: "Concept: Critical angle exists only for light going from denser to rarer medium.\nFormulas: v = c/n;  sin c = 1/n\n\nSolution:\n1. v = (3 × 10⁸)/2.42 ≈ 1.24 × 10⁸ m/s\n2. sin c = 1/2.42 ≈ 0.413 → c ≈ 24.4°\n\nAnswer: v ≈ 1.24 × 10⁸ m/s; critical angle ≈ 24.4°",
    teacherTip: "Diamond has a small critical angle — total internal reflection is easy.", examTip: "Answer both speed AND critical angle."
  },
  {
    id: "phy-num-q77", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A ray of light passes from water (n = 1.33) into glass (n = 1.5). If the angle of incidence is 35°, find the angle of refraction. (sin 35° ≈ 0.574)",
    answer: "Concept: Snell's Law between two non-air media.\nFormula: n_water sin i = n_glass sin r\n\nSolution:\n1. 1.33 × 0.574 = 1.5 × sin r\n2. sin r = 0.76342/1.5 ≈ 0.509\n3. r = arcsin(0.509) ≈ 30.6°\n\nAnswer: ≈ 30.6°",
    teacherTip: "Glass is denser than water — ray bends towards normal.", examTip: "Use given sin 35° value."
  },
  {
    id: "phy-num-q78", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A concave mirror has a focal length of 15 cm. An object is placed at 20 cm. Find the position and nature of the image using the mirror formula.",
    answer: "Concept: Mirror formula with Cartesian sign convention (f and u negative for concave).\nFormula: 1/f = 1/v + 1/u\n\nSolution:\n1. f = −15 cm, u = −20 cm\n2. 1/(−15) = 1/v + 1/(−20)\n3. 1/v = 1/20 − 1/15 = (3−4)/60 = −1/60\n4. v = −60 cm\n\nAnswer: 60 cm in front of mirror; Real and inverted",
    teacherTip: "Negative v for mirror means image is in front (real).", examTip: "State nature of image (real/virtual, erect/inverted)."
  },
  {
    id: "phy-num-q79", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An object is placed 10 cm from a concave mirror of focal length 15 cm. Find the image position, magnification, and state the nature of the image.",
    answer: "Concept: Object within focal length → virtual, erect, magnified image.\nFormulas: 1/f = 1/v + 1/u;  m = −v/u\n\nSolution:\n1. f = −15 cm, u = −10 cm\n2. 1/(−15) = 1/v + 1/(−10) → 1/v = 1/10 − 1/15 = 1/30\n3. v = +30 cm\n4. m = −30/(−10) = +3\n\nAnswer: v = +30 cm (behind mirror); m = +3; Virtual, erect, magnified",
    teacherTip: "Positive v for concave mirror means virtual image behind mirror.", examTip: "u < f always gives virtual image for concave mirror."
  },
  {
    id: "phy-num-q80", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An object 4 cm tall is placed 30 cm in front of a concave mirror of focal length 15 cm. Find the position, size, and nature of the image.",
    answer: "Concept: Object at C (u = 2f) forms real, inverted image of same size at C.\nFormulas: 1/f = 1/v + 1/u;  m = −v/u;  h_i = m × h_o\n\nSolution:\n1. f = −15 cm, u = −30 cm, h_o = 4 cm\n2. 1/v = 1/(−30) − 1/(−15) = −1/30\n3. v = −30 cm, m = −(−30)/(−30) = −1\n4. h_i = −1 × 4 = −4 cm\n\nAnswer: v = −30 cm; size = 4 cm; Real, inverted, same size",
    teacherTip: "At C, image coincides with object position.", examTip: "Negative image height means inverted."
  },
  {
    id: "phy-num-q81", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "An object is placed 20 cm in front of a convex mirror of focal length 20 cm. Find the image position and magnification.",
    answer: "Concept: Convex mirror always forms virtual, erect, diminished image.\nFormulas: 1/f = 1/v + 1/u;  m = −v/u\n\nSolution:\n1. f = +20 cm, u = −20 cm\n2. 1/20 = 1/v + 1/(−20) → 1/v = 1/10\n3. v = +10 cm\n4. m = −10/(−20) = +0.5\n\nAnswer: v = +10 cm (behind mirror); m = +0.5 (diminished)",
    teacherTip: "Convex mirror f is positive; image always virtual.", examTip: "m < 1 means diminished image."
  },
  {
    id: "phy-num-q82", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A concave mirror produces an image twice the size of the object (real) when the object is at 30 cm. Find the focal length of the mirror.",
    answer: "Concept: Real image → m is negative; use mirror formula.\nFormulas: m = −v/u;  1/f = 1/v + 1/u\n\nSolution:\n1. m = −2, u = −30 cm\n2. −2 = −v/(−30) → v = −60 cm\n3. 1/f = 1/(−60) + 1/(−30) = −3/60 = −1/20\n4. f = −20 cm\n\nAnswer: f = −20 cm (focal length 20 cm, concave)",
    teacherTip: "Real image: v is negative for concave mirror.", examTip: "Use m = −2 (not +2) for real image."
  },
  {
    id: "phy-num-q83", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A convex lens of focal length 20 cm forms an image of an object placed 30 cm from it. Find the image distance and magnification.",
    answer: "Concept: Lens formula — note sign convention differs from mirror formula.\nFormulas: 1/f = 1/v − 1/u;  m = v/u\n\nSolution:\n1. f = +20 cm, u = −30 cm\n2. 1/20 = 1/v − 1/(−30) → 1/v = 1/20 − 1/30 = 1/60\n3. v = +60 cm\n4. m = 60/(−30) = −2\n\nAnswer: v = +60 cm; m = −2 (real, inverted, magnified)",
    teacherTip: "Lens formula uses 1/v − 1/u, not 1/v + 1/u.", examTip: "Negative m for lens = inverted real image."
  },
  {
    id: "phy-num-q84", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An object is placed 10 cm in front of a convex lens of focal length 15 cm. Find the image position, magnification, and nature of the image.",
    answer: "Concept: Object within focal length of convex lens → virtual magnifying glass image.\nFormulas: 1/f = 1/v − 1/u;  m = v/u\n\nSolution:\n1. f = +15 cm, u = −10 cm\n2. 1/15 = 1/v + 1/10 → 1/v = 1/15 − 1/10 = −1/30\n3. v = −30 cm\n4. m = (−30)/(−10) = +3\n\nAnswer: v = −30 cm; m = +3; Virtual, erect, magnified",
    teacherTip: "Negative v for lens = virtual image on same side as object.", examTip: "This is how a magnifying glass works."
  },
  {
    id: "phy-num-q85", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A concave lens of focal length 30 cm forms an image 10 cm from the lens when an object is placed at 15 cm. Verify using the lens formula and find the magnification.",
    answer: "Concept: Concave lens f is negative; always forms virtual, erect, diminished image.\nFormulas: 1/f = 1/v − 1/u;  m = v/u\n\nSolution:\n1. f = −30 cm, u = −15 cm\n2. 1/v = 1/(−30) + 1/(−15) = −3/30 = −1/10\n3. v = −10 cm ✓ (verified)\n4. m = (−10)/(−15) ≈ +0.67\n\nAnswer: v = −10 cm (verified); m ≈ +0.67",
    teacherTip: "Concave lens: |m| is always less than 1.", examTip: "Show verification step explicitly."
  },
  {
    id: "phy-num-q86", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A convex lens produces a real image three times the size of the object at 60 cm from the lens. Find the object distance and the focal length.",
    answer: "Concept: Real image → v positive, m negative for convex lens.\nFormulas: m = v/u;  1/f = 1/v − 1/u\n\nSolution:\n1. m = −3, v = +60 cm\n2. −3 = 60/u → u = −20 cm\n3. 1/f = 1/60 − 1/(−20) = 1/60 + 3/60 = 4/60 = 1/15\n4. f = 15 cm\n\nAnswer: u = −20 cm; f = 15 cm",
    teacherTip: "Use m = −3 for real inverted image.", examTip: "Find u from magnification first."
  },
  {
    id: "phy-num-q87", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "The magnification produced by a lens is −2. The image is formed at 40 cm. Find the object distance and focal length.",
    answer: "Concept: Negative m → real inverted image from convex lens.\nFormulas: m = v/u;  1/f = 1/v − 1/u\n\nSolution:\n1. m = −2, v = +40 cm\n2. −2 = 40/u → u = −20 cm\n3. 1/f = 1/40 − 1/(−20) = 1/40 + 2/40 = 3/40\n4. f = 40/3 ≈ 13.33 cm\n\nAnswer: u = −20 cm; f ≈ 13.33 cm",
    teacherTip: "Always check sign of m to identify image type.", examTip: "Show lens formula substitution."
  },
  {
    id: "phy-num-q88", topicId: "ch5-light", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "An object 5 cm high is placed at 25 cm from a convex lens of focal length 10 cm. Find the position, size, and nature of the image.",
    answer: "Concept: Apply lens formula then magnification for image size.\nFormulas: 1/f = 1/v − 1/u;  m = v/u;  h_i = m × h_o\n\nSolution:\n1. f = +10 cm, u = −25 cm, h_o = 5 cm\n2. 1/v = 1/10 − 1/(−25) = 3/50 → v = 50/3 ≈ 16.67 cm\n3. m = 16.67/(−25) ≈ −0.667\n4. h_i ≈ −0.667 × 5 ≈ −3.33 cm\n\nAnswer: v ≈ +16.67 cm; size ≈ 3.33 cm; Real, inverted, diminished",
    teacherTip: "Ray diagram: one ray parallel to axis through F; one through optical centre.", examTip: "Answer position, size, AND nature."
  },

  // ── CHAPTER 6: Heat (Q89–Q90) ──
  {
    id: "phy-num-q89", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Convert 50°C into the Fahrenheit scale.",
    answer: "Concept: Celsius to Fahrenheit conversion.\nFormula: F = (C × 9/5) + 32\n\nSolution:\nF = (50 × 9/5) + 32 = 90 + 32 = 122°F\n\nAnswer: 122°F",
    teacherTip: "Multiply by 9/5 first, then add 32.", examTip: "Do not add 32 before multiplying."
  },
  {
    id: "phy-num-q90", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Convert 77°F into Celsius.",
    answer: "Concept: Fahrenheit to Celsius conversion.\nFormula: C = (F − 32) × 5/9\n\nSolution:\nC = (77 − 32) × 5/9 = 45 × 5/9 = 25°C\n\nAnswer: 25°C",
    teacherTip: "Subtract 32 first, then multiply by 5/9.", examTip: "Reverse order of C → F conversion."
  },

  // ── CHAPTER 6: Heat — continued (Q91–Q106) ──
  {
    id: "phy-num-q91", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Convert −40°C into Fahrenheit. What do you observe?",
    answer: "Concept: Standard Celsius to Fahrenheit conversion.\nFormula: F = (C × 9/5) + 32\n\nSolution:\n1. F = (−40 × 9/5) + 32 = −72 + 32 = −40°F\n2. Observation: Celsius and Fahrenheit read the same value at −40°.\n\nAnswer: −40°F; both scales coincide at −40",
    teacherTip: "−40 is the only point where °C = °F numerically.", examTip: "State the observation when asked."
  },
  {
    id: "phy-num-q92", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The temperature of a body is 300 K. Find its temperature on the Celsius scale.",
    answer: "Concept: Kelvin to Celsius conversion.\nFormula: C = K − 273\n\nSolution:\nC = 300 − 273 = 27°C\n\nAnswer: 27°C",
    teacherTip: "0 K = absolute zero; 273 K = 0°C.", examTip: "Subtract 273, not add."
  },
  {
    id: "phy-num-q93", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Convert 25°C to Kelvin.",
    answer: "Concept: Celsius to Kelvin conversion.\nFormula: K = C + 273\n\nSolution:\nK = 25 + 273 = 298 K\n\nAnswer: 298 K",
    teacherTip: "Kelvin scale has no degree symbol — write 298 K.", examTip: "Add 273 to Celsius value."
  },
  {
    id: "phy-num-q94", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "At what temperature will the Celsius and Fahrenheit scales read the same value?",
    answer: "Concept: Set C = F = x in the conversion formula and solve.\nFormula: x = (x × 9/5) + 32\n\nSolution:\n1. x − (9/5)x = 32 → −(4/5)x = 32\n2. x = 32 × (−5/4) = −40°\n\nAnswer: −40°C = −40°F",
    teacherTip: "Algebraic method confirms Q91 observation.", examTip: "Show algebraic steps, not just the answer."
  },
  {
    id: "phy-num-q95", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the amount of heat required to raise the temperature of 2 kg of water from 20°C to 80°C. (Specific heat capacity of water = 4200 J/kg°C)",
    answer: "Concept: Heat needed depends on mass, specific heat, and temperature rise.\nFormula: Q = mcΔT\n\nSolution:\n1. ΔT = 80 − 20 = 60°C\n2. Q = 2 × 4200 × 60 = 504000 J\n\nAnswer: 504000 J (504 kJ)",
    teacherTip: "Always find ΔT before substituting.", examTip: "Include units J in the final answer."
  },
  {
    id: "phy-num-q96", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "How much heat is needed to raise the temperature of 500 g of iron from 30°C to 130°C? (Specific heat of iron = 460 J/kg°C)",
    answer: "Concept: Convert mass to kg before using Q = mcΔT.\nFormula: Q = mcΔT\n\nSolution:\n1. m = 0.5 kg\n2. ΔT = 130 − 30 = 100°C\n3. Q = 0.5 × 460 × 100 = 23000 J\n\nAnswer: 23000 J",
    teacherTip: "500 g = 0.5 kg — convert before calculating.", examTip: "Show mass conversion step."
  },
  {
    id: "phy-num-q97", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "0.5 kg of a substance at 100°C loses 21000 J of heat as it cools to 30°C. Find the specific heat capacity of the substance.",
    answer: "Concept: Rearrange Q = mcΔT to find c.\nFormula: c = Q/(mΔT)\n\nSolution:\n1. ΔT = 100 − 30 = 70°C\n2. c = 21000/(0.5 × 70) = 21000/35 = 600 J/kg°C\n\nAnswer: 600 J/kg°C",
    teacherTip: "Heat lost Q is positive in magnitude here.", examTip: "Rearrange formula before substituting."
  },
  {
    id: "phy-num-q98", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "0.2 kg of copper (c = 390 J/kg°C) at 200°C is dropped into 1 kg of water at 20°C. Find the final temperature of the mixture assuming no heat loss.",
    answer: "Concept: Calorimetry — heat lost by hot body = heat gained by cold body.\nFormula: m_hot c_hot (T_hot − T) = m_cold c_cold (T − T_cold)\n\nSolution:\n1. 0.2 × 390 × (200 − T) = 1 × 4200 × (T − 20)\n2. 15600 − 78T = 4200T − 84000\n3. 4278T = 99600 → T ≈ 23.28°C\n\nAnswer: ≈ 23.28°C",
    teacherTip: "Final T must lie between 20°C and 200°C.", examTip: "Set up heat lost = heat gained equation clearly."
  },
  {
    id: "phy-num-q99", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "How much heat is required to convert 1 kg of ice at 0°C into water at 0°C? (Latent heat of fusion of ice = 336000 J/kg)",
    answer: "Concept: During melting, temperature stays at 0°C — use latent heat.\nFormula: Q = mL_f\n\nSolution:\nQ = 1 × 336000 = 336000 J\n\nAnswer: 336000 J",
    teacherTip: "No temperature change during phase change.", examTip: "Use L_f, not mcΔT, for melting."
  },
  {
    id: "phy-num-q100", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "How much heat is required to completely convert 2 kg of ice at −10°C to steam at 100°C? (c_ice = 2100, c_water = 4200, L_f = 336000, L_v = 2260000, all in J/kg)",
    answer: "Concept: Four stages — warm ice, melt, warm water, vaporise.\nFormula: Q_total = mc_iceΔT₁ + mL_f + mc_waterΔT₂ + mL_v\n\nSolution:\n1. Warm ice (−10 to 0): 2 × 2100 × 10 = 42000 J\n2. Melting: 2 × 336000 = 672000 J\n3. Warm water (0 to 100): 2 × 4200 × 100 = 840000 J\n4. Boiling: 2 × 2260000 = 4520000 J\n5. Q_total = 42000 + 672000 + 840000 + 4520000 = 6074000 J\n\nAnswer: 6074000 J (≈ 6.07 × 10⁶ J)",
    teacherTip: "List all four stages before adding.", examTip: "Show each stage separately."
  },
  {
    id: "phy-num-q101", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the heat needed to convert 500 g of water at 50°C to steam at 100°C. (L_v = 2260000 J/kg)",
    answer: "Concept: Two steps — warm to 100°C, then vaporise.\nFormula: Q_total = mcΔT + mL_v  (m = 0.5 kg)\n\nSolution:\n1. Warm water: 0.5 × 4200 × 50 = 105000 J\n2. Boil: 0.5 × 2260000 = 1130000 J\n3. Q_total = 105000 + 1130000 = 1235000 J\n\nAnswer: 1235000 J (≈ 1.24 × 10⁶ J)",
    teacherTip: "Convert 500 g to 0.5 kg first.", examTip: "Water must reach 100°C before boiling."
  },
  {
    id: "phy-num-q102", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An iron rod of length 5 m expands by 3 mm when heated. If the coefficient of linear expansion is 12 × 10⁻⁶/°C, find the rise in temperature.",
    answer: "Concept: Linear expansion formula.\nFormula: ΔL = L₀ × α × ΔT\n\nSolution:\n1. ΔL = 3 mm = 0.003 m\n2. 0.003 = 5 × (12 × 10⁻⁶) × ΔT\n3. ΔT = 0.003/0.00006 = 50°C\n\nAnswer: 50°C",
    teacherTip: "Convert mm to m before substituting.", examTip: "α has unit per °C — ΔT is in °C."
  },
  {
    id: "phy-num-q103", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A steel rod is 10 m long at 20°C. What will be its length at 120°C? (α_steel = 12 × 10⁻⁶/°C)",
    answer: "Concept: Find expansion ΔL, then add to original length.\nFormulas: ΔL = L₀αΔT;  L_new = L₀ + ΔL\n\nSolution:\n1. ΔT = 120 − 20 = 100°C\n2. ΔL = 10 × (12 × 10⁻⁶) × 100 = 0.012 m\n3. L_new = 10 + 0.012 = 10.012 m\n\nAnswer: 10.012 m",
    teacherTip: "Expansion is usually very small — keep enough decimal places.", examTip: "Add ΔL to L₀ for final length."
  },
  {
    id: "phy-num-q104", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "0.4 kg of a hot solid at 150°C is placed in 0.6 kg of water at 20°C contained in a copper calorimeter of mass 0.1 kg at 20°C. The final temperature is 30°C. Find the specific heat capacity of the solid. (c_water = 4200, c_copper = 390 J/kg°C)",
    answer: "Concept: Heat lost by solid = heat gained by water + calorimeter.\nFormula: m_s c_s ΔT_s = m_w c_w ΔT_w + m_c c_c ΔT_c\n\nSolution:\n1. Heat lost: 0.4 × c × (150 − 30) = 48c\n2. Heat gained (water): 0.6 × 4200 × 10 = 25200 J\n3. Heat gained (copper): 0.1 × 390 × 10 = 390 J\n4. 48c = 25590 → c ≈ 533.1 J/kg°C\n\nAnswer: ≈ 533 J/kg°C",
    teacherTip: "Never forget the calorimeter's heat capacity.", examTip: "Include all bodies gaining heat."
  },
  {
    id: "phy-num-q105", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A metal piece of mass 200 g at 100°C is dropped into 400 g of water at 25°C. The final temperature is 30°C. Find the specific heat of the metal.",
    answer: "Concept: Calorimetry — heat lost = heat gained.\nFormula: m₁c₁ΔT₁ = m₂c₂ΔT₂\n\nSolution:\n1. Heat lost (metal): 0.2 × c × (100 − 30) = 14c\n2. Heat gained (water): 0.4 × 4200 × (30 − 25) = 8400 J\n3. 14c = 8400 → c = 600 J/kg°C\n\nAnswer: 600 J/kg°C",
    teacherTip: "Convert both masses to kg.", examTip: "Use final temperature 30°C for both ΔT values."
  },
  {
    id: "phy-num-q106", topicId: "ch6-heat", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A heating coil of power 500 W is used to heat 1 kg of water at 20°C. Assuming no losses, find the time to bring it to boiling. (c = 4200 J/kg°C)",
    answer: "Concept: Electrical energy = heat required; P = Q/t.\nFormulas: Q = mcΔT;  t = Q/P\n\nSolution:\n1. ΔT = 100 − 20 = 80°C\n2. Q = 1 × 4200 × 80 = 336000 J\n3. t = 336000/500 = 672 s (≈ 11.2 min)\n\nAnswer: 672 s (≈ 11.2 minutes)",
    teacherTip: "Boiling point of water = 100°C at standard pressure.", examTip: "Convert to minutes if asked."
  },

  // ── CHAPTER 7: Sound (Q107–Q120) ──
  {
    id: "phy-num-q107", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A sound wave has a frequency of 500 Hz and a wavelength of 0.68 m. Find the speed of sound.",
    answer: "Concept: Wave equation relates speed, frequency, and wavelength.\nFormula: v = f × λ\n\nSolution:\nv = 500 × 0.68 = 340 m/s\n\nAnswer: 340 m/s",
    teacherTip: "v = fλ works for all waves.", examTip: "Include unit m/s."
  },
  {
    id: "phy-num-q108", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The speed of sound in air is 340 m/s. If the frequency is 680 Hz, find the wavelength.",
    answer: "Concept: Rearrange wave equation for wavelength.\nFormula: λ = v/f\n\nSolution:\nλ = 340/680 = 0.5 m\n\nAnswer: 0.5 m",
    teacherTip: "Higher frequency → shorter wavelength.", examTip: "Show rearrangement λ = v/f."
  },
  {
    id: "phy-num-q109", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Find the frequency of a wave whose wavelength is 2 m and which travels at a speed of 1500 m/s (in water).",
    answer: "Concept: Sound travels faster in water than in air.\nFormula: f = v/λ\n\nSolution:\nf = 1500/2 = 750 Hz\n\nAnswer: 750 Hz",
    teacherTip: "Use the speed given for the medium.", examTip: "Unit of frequency is hertz (Hz)."
  },
  {
    id: "phy-num-q110", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A person hears thunder 3 s after seeing the lightning. If the speed of sound is 340 m/s, how far is the lightning?",
    answer: "Concept: Light is instant; delay is sound travel time.\nFormula: d = v × t\n\nSolution:\nd = 340 × 3 = 1020 m\n\nAnswer: 1020 m",
    teacherTip: "Ignore light travel time for this calculation.", examTip: "Multiply speed by time delay."
  },
  {
    id: "phy-num-q111", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A boy stands 680 m from a cliff. He claps and hears the echo after 4 s. Find the speed of sound.",
    answer: "Concept: Echo — sound travels to cliff and back (2d).\nFormula: v = 2d/t\n\nSolution:\n1. Total distance = 2 × 680 = 1360 m\n2. v = 1360/4 = 340 m/s\n\nAnswer: 340 m/s",
    teacherTip: "Echo distance is always twice the one-way distance.", examTip: "Double the distance before dividing by time."
  },
  {
    id: "phy-num-q112", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A ship sends a sonar pulse that returns from the ocean floor after 4 s. If the speed of sound in water is 1500 m/s, find the depth of the ocean.",
    answer: "Concept: Sonar pulse makes a round trip — depth is half the total distance.\nFormula: d = vt/2\n\nSolution:\nd = (1500 × 4)/2 = 6000/2 = 3000 m\n\nAnswer: 3000 m",
    teacherTip: "Sonar is the same principle as echo.", examTip: "Divide by 2 for one-way depth."
  },
  {
    id: "phy-num-q113", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A person fires a gun at a distance. An observer between the person and a hill hears two reports 2 s apart. If the speed of sound is 340 m/s, find the distance of the observer from the hill.",
    answer: "Concept: Second report is echo — extra distance = 2d (to hill and back).\nFormula: t_diff = 2d/v\n\nSolution:\n1. 2 = 2d/340\n2. d = 340 m\n\nAnswer: 340 m",
    teacherTip: "Echo delay = time for sound to go to hill and return.", examTip: "Use t = 2d/v for echo delay."
  },
  {
    id: "phy-num-q114", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The human audible range is 20 Hz to 20000 Hz. If the speed of sound in air is 340 m/s, find the range of wavelengths audible to humans.",
    answer: "Concept: λ = v/f; low f → long λ, high f → short λ.\nFormula: λ = v/f\n\nSolution:\n1. λ_max = 340/20 = 17 m (lowest frequency)\n2. λ_min = 340/20000 = 0.017 m (highest frequency)\n\nAnswer: 17 m to 0.017 m",
    teacherTip: "Audible range: 20 Hz–20 kHz.", examTip: "Give both upper and lower wavelength bounds."
  },
  {
    id: "phy-num-q115", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "The wavelength of a note in air is 1.36 m and in water is 5.9 m. If the speed of sound in air is 340 m/s, find the speed of sound in water.",
    answer: "Concept: Frequency stays same when sound enters a new medium.\nFormulas: f = v_air/λ_air;  v_water = f × λ_water\n\nSolution:\n1. f = 340/1.36 = 250 Hz\n2. v_water = 250 × 5.9 = 1475 m/s\n\nAnswer: 1475 m/s",
    teacherTip: "Find f in air first, then use it for water.", examTip: "State that frequency is unchanged."
  },
  {
    id: "phy-num-q116", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A bat emits a sound of frequency 50000 Hz. If the speed of sound in air is 340 m/s, find the wavelength. Why can humans not hear this sound?",
    answer: "Concept: Ultrasonic — frequency above 20000 Hz.\nFormula: λ = v/f\n\nSolution:\n1. λ = 340/50000 = 0.0068 m (6.8 × 10⁻³ m)\n2. Reason: 50000 Hz > 20000 Hz — ultrasonic, inaudible to humans.\n\nAnswer: λ = 0.0068 m; ultrasonic (above human hearing limit)",
    teacherTip: "Bats use ultrasound for echolocation.", examTip: "Answer both wavelength AND reason."
  },
  {
    id: "phy-num-q117", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two sound waves have frequencies 256 Hz and 512 Hz. If both travel in air at 340 m/s, find their wavelengths and the ratio of their wavelengths.",
    answer: "Concept: λ inversely proportional to f at constant v.\nFormula: λ = v/f\n\nSolution:\n1. λ₁ = 340/256 ≈ 1.33 m\n2. λ₂ = 340/512 ≈ 0.66 m\n3. Ratio λ₁/λ₂ ≈ 2/1\n\nAnswer: λ₁ ≈ 1.33 m; λ₂ ≈ 0.66 m; ratio 2:1",
    teacherTip: "Double the frequency → half the wavelength.", examTip: "512 Hz is double 256 Hz — ratio is 2:1."
  },
  {
    id: "phy-num-q118", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A man stands between two parallel cliffs. He fires a shot and hears the first echo after 2 s and the second after 4 s. If the speed of sound is 340 m/s, find the distance between the cliffs.",
    answer: "Concept: Each echo gives distance to one cliff; total = sum of both.\nFormulas: d = vt/2 (for each cliff)\n\nSolution:\n1. d₁ = (340 × 2)/2 = 340 m (closer cliff)\n2. d₂ = (340 × 4)/2 = 680 m (farther cliff)\n3. Total = 340 + 680 = 1020 m\n\nAnswer: 1020 m",
    teacherTip: "Shorter echo time → closer cliff.", examTip: "Add distances to both cliffs."
  },
  {
    id: "phy-num-q119", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A sound wave travels through steel at 5000 m/s with a frequency of 250 Hz. Find its wavelength. Compare this to the wavelength in air (v = 340 m/s).",
    answer: "Concept: Same frequency in both media; different speeds → different λ.\nFormula: λ = v/f\n\nSolution:\n1. λ_steel = 5000/250 = 20 m\n2. λ_air = 340/250 = 1.36 m\n3. Ratio ≈ 20/1.36 ≈ 14.7:1\n\nAnswer: λ_steel = 20 m; λ_air = 1.36 m; steel wavelength ≈ 14.7× longer",
    teacherTip: "Sound travels faster in solids → longer wavelength at same f.", examTip: "Compare both wavelengths and give ratio."
  },
  {
    id: "phy-num-q120", topicId: "ch7-sound", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A submarine sends an ultrasonic signal that reflects off a target and returns in 0.8 s. If the speed of sound in sea water is 1530 m/s, find the distance of the target from the submarine.",
    answer: "Concept: Sonar round trip — target distance = half total path.\nFormula: d = vt/2\n\nSolution:\nd = (1530 × 0.8)/2 = 1530 × 0.4 = 612 m\n\nAnswer: 612 m",
    teacherTip: "Same as echo/sonar — divide total distance by 2.", examTip: "Show vt/2 formula explicitly."
  },

  // ── CHAPTER 8: Electricity (Q121–Q140) ──
  {
    id: "phy-num-q121", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Calculate the current when a charge of 15 C flows through a conductor in 3 s.",
    answer: "Concept: Current is rate of flow of charge.\nFormula: I = Q/t\n\nSolution:\nI = 15/3 = 5 A\n\nAnswer: 5 A",
    teacherTip: "1 A = 1 C/s.", examTip: "Include unit A in the answer."
  },
  {
    id: "phy-num-q122", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "Find the amount of charge that passes through a conductor in 10 s carrying a current of 2 A.",
    answer: "Concept: Rearrange I = Q/t for charge.\nFormula: Q = I × t\n\nSolution:\nQ = 2 × 10 = 20 C\n\nAnswer: 20 C",
    teacherTip: "Charge is current × time.", examTip: "Unit of charge is coulomb (C)."
  },
  {
    id: "phy-num-q123", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A current of 0.5 A flows through a resistor of 20 Ω. Find the potential difference across it. (V = IR)",
    answer: "Concept: Ohm's Law relates V, I, and R.\nFormula: V = I × R\n\nSolution:\nV = 0.5 × 20 = 10 V\n\nAnswer: 10 V",
    teacherTip: "V = IR is the most used form of Ohm's Law.", examTip: "State Ohm's Law before substituting."
  },
  {
    id: "phy-num-q124", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "The potential difference across a 10 Ω resistor is 20 V. Find the current.",
    answer: "Concept: Rearrange Ohm's Law for current.\nFormula: I = V/R\n\nSolution:\nI = 20/10 = 2 A\n\nAnswer: 2 A",
    teacherTip: "Higher voltage → more current through same resistor.", examTip: "Show I = V/R rearrangement."
  },
  {
    id: "phy-num-q125", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Find the resistance of a bulb that draws 0.3 A current when connected across a 240 V supply.",
    answer: "Concept: Rearrange Ohm's Law for resistance.\nFormula: R = V/I\n\nSolution:\nR = 240/0.3 = 800 Ω\n\nAnswer: 800 Ω",
    teacherTip: "Household supply in India is 220–240 V.", examTip: "Include unit Ω."
  },
  {
    id: "phy-num-q126", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the current through a lamp of resistance 400 Ω connected to a 200 V mains supply. What is its power?",
    answer: "Concept: Ohm's Law for current, then power formula.\nFormulas: I = V/R;  P = V × I\n\nSolution:\n1. I = 200/400 = 0.5 A\n2. P = 200 × 0.5 = 100 W\n\nAnswer: I = 0.5 A; P = 100 W",
    teacherTip: "P = VI = I²R = V²/R — all equivalent.", examTip: "Answer both current AND power."
  },
  {
    id: "phy-num-q127", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two resistors of 6 Ω and 3 Ω are connected in series across a 9 V battery. Find the total resistance, the current in the circuit, and the voltage across each resistor.",
    answer: "Concept: Series — resistances add; same current; voltages divide.\nFormulas: R_series = R₁ + R₂;  I = V/R;  V = IR\n\nSolution:\n1. R_eq = 6 + 3 = 9 Ω\n2. I = 9/9 = 1 A\n3. V₁ = 1 × 6 = 6 V; V₂ = 1 × 3 = 3 V\n\nAnswer: R = 9 Ω; I = 1 A; V_6Ω = 6 V; V_3Ω = 3 V",
    teacherTip: "V₁ + V₂ should equal battery voltage (6 + 3 = 9 V).", examTip: "Label voltage across each resistor."
  },
  {
    id: "phy-num-q128", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two resistors of 4 Ω and 6 Ω are connected in parallel. Find the equivalent resistance.",
    answer: "Concept: Parallel — reciprocals add.\nFormula: 1/R_eq = 1/R₁ + 1/R₂\n\nSolution:\n1/R_eq = 1/4 + 1/6 = 3/12 + 2/12 = 5/12\nR_eq = 12/5 = 2.4 Ω\n\nAnswer: 2.4 Ω",
    teacherTip: "Parallel R_eq is always less than smallest resistor.", examTip: "Find common denominator for fractions."
  },
  {
    id: "phy-num-q129", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Find the equivalent resistance.",
    answer: "Concept: Extend parallel formula to three resistors.\nFormula: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃\n\nSolution:\n1/R_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1\nR_eq = 1 Ω\n\nAnswer: 1 Ω",
    teacherTip: "Notice 2, 3, 6 have LCM 6 — easy to combine.", examTip: "Show all three reciprocals before inverting."
  },
  {
    id: "phy-num-q130", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An electric iron draws a current of 2.5 A at 220 V. Find the resistance and the power consumed.",
    answer: "Concept: Ohm's Law and electrical power.\nFormulas: R = V/I;  P = V × I\n\nSolution:\n1. R = 220/2.5 = 88 Ω\n2. P = 220 × 2.5 = 550 W\n\nAnswer: R = 88 Ω; P = 550 W",
    teacherTip: "High-power appliances draw large current.", examTip: "Answer both R and P."
  },
  {
    id: "phy-num-q131", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "An electric heater is rated 1500 W, 220 V. Find the current drawn and the resistance of the heater.",
    answer: "Concept: From power rating find I and R.\nFormulas: I = P/V;  R = V²/P\n\nSolution:\n1. I = 1500/220 ≈ 6.82 A\n2. R = 220²/1500 = 48400/1500 ≈ 32.27 Ω\n\nAnswer: I ≈ 6.82 A; R ≈ 32.3 Ω",
    teacherTip: "R = V²/P avoids finding I first.", examTip: "Show both calculations."
  },
  {
    id: "phy-num-q132", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the energy consumed by a 100 W bulb used for 10 hours. Give the answer in joules and kWh.",
    answer: "Concept: Energy = power × time (consistent units).\nFormula: E = P × t\n\nSolution:\n1. In joules: E = 100 × (10 × 3600) = 3,600,000 J (3.6 × 10⁶ J)\n2. In kWh: E = 0.1 kW × 10 h = 1 kWh\n\nAnswer: 3.6 × 10⁶ J; 1 kWh",
    teacherTip: "kWh uses kW and hours — not W and seconds.", examTip: "Answer in both units when asked."
  },
  {
    id: "phy-num-q133", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "An electric kettle rated 2 kW operates for 30 minutes a day for 30 days. If electricity costs ₹6 per kWh, calculate the monthly cost.",
    answer: "Concept: Find total kWh, then multiply by rate.\nFormula: E = P_kW × t_hours;  Cost = E × rate\n\nSolution:\n1. Daily time = 0.5 h; Total = 0.5 × 30 = 15 h\n2. E = 2 × 15 = 30 kWh\n3. Cost = 30 × 6 = ₹180\n\nAnswer: ₹180",
    teacherTip: "Convert 30 minutes to 0.5 hours.", examTip: "Show kWh before cost calculation."
  },
  {
    id: "phy-num-q134", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A 60 W lamp and a 100 W lamp are connected in parallel across a 220 V line. Which draws more current? Calculate the current through each.",
    answer: "Concept: Parallel — same voltage; higher P → higher I.\nFormula: I = P/V\n\nSolution:\n1. 100 W lamp draws more current.\n2. I_60W = 60/220 ≈ 0.273 A\n3. I_100W = 100/220 ≈ 0.455 A\n\nAnswer: 100 W lamp draws more; I_60W ≈ 0.27 A; I_100W ≈ 0.46 A",
    teacherTip: "In parallel, V is same for both branches.", examTip: "State which draws more AND calculate both."
  },
  {
    id: "phy-num-q135", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two bulbs of 60 W and 100 W, both rated 220 V, are connected in series across a 220 V supply. Which bulb glows brighter? Justify with resistance calculations.",
    answer: "Concept: Series — same I; brightness ∝ I²R; higher R → more power dissipated.\nFormula: R = V_rated²/P_rated\n\nSolution:\n1. R_60 = 220²/60 ≈ 806.67 Ω\n2. R_100 = 220²/100 = 484 Ω\n3. R_60 > R_100 → P_60 = I²R_60 > P_100\n4. The 60 W bulb glows brighter in series.\n\nAnswer: 60 W bulb glows brighter (higher resistance dissipates more power in series)",
    teacherTip: "Opposite to parallel — lower wattage bulb wins in series!", examTip: "Calculate R for both before comparing."
  },
  {
    id: "phy-num-q136", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A wire of resistance 10 Ω is stretched to double its length. Find the new resistance.",
    answer: "Concept: Volume constant — double L means half area; R ∝ L/A.\nFormula: R_new = 4 × R_old (when length doubles)\n\nSolution:\nR_new = 4 × 10 = 40 Ω\n\nAnswer: 40 Ω",
    teacherTip: "Stretching doubles L and halves A → R × 4.", examTip: "Explain why R quadruples."
  },
  {
    id: "phy-num-q137", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Two resistors of 3 Ω and 6 Ω are connected in parallel across a 12 V battery. Find the current through each resistor and the total current drawn from the battery.",
    answer: "Concept: Parallel — each branch gets full battery voltage.\nFormula: I = V/R\n\nSolution:\n1. I₁ = 12/3 = 4 A\n2. I₂ = 12/6 = 2 A\n3. I_total = 4 + 2 = 6 A\n\nAnswer: I_3Ω = 4 A; I_6Ω = 2 A; I_total = 6 A",
    teacherTip: "Branch currents add to total current.", examTip: "Answer all three current values."
  },
  {
    id: "phy-num-q138", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A battery of emf 12 V is connected to three resistors 2 Ω, 4 Ω, and 6 Ω in series. Find the current in the circuit and the voltage drop across the 4 Ω resistor.",
    answer: "Concept: Series circuit — add R, find I, then V = IR for one resistor.\nFormulas: R_eq = R₁ + R₂ + R₃;  I = V/R;  V = IR\n\nSolution:\n1. R_eq = 2 + 4 + 6 = 12 Ω\n2. I = 12/12 = 1 A\n3. V_4Ω = 1 × 4 = 4 V\n\nAnswer: I = 1 A; V across 4 Ω = 4 V",
    teacherTip: "Same current through all series resistors.", examTip: "Find total R before current."
  },
  {
    id: "phy-num-q139", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "Calculate the cost of running a refrigerator of power 400 W for 5 hours daily for a month (30 days) at the rate of ₹7 per kWh.",
    answer: "Concept: Energy in kWh × cost per kWh.\nFormula: E = P_kW × t_hours;  Cost = E × rate\n\nSolution:\n1. Total time = 5 × 30 = 150 h\n2. P = 0.4 kW\n3. E = 0.4 × 150 = 60 kWh\n4. Cost = 60 × 7 = ₹420\n\nAnswer: ₹420",
    teacherTip: "Convert W to kW before multiplying by hours.", examTip: "Show energy in kWh before cost."
  },
  {
    id: "phy-num-q140", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "Five resistors each of 10 Ω are connected as: three in parallel, this combination in series with the remaining two in parallel. Find the total equivalent resistance.",
    answer: "Concept: Find each parallel cluster, then add in series.\nFormula: R_parallel (n identical) = R/n\n\nSolution:\n1. Cluster 1 (3 in parallel): R_p1 = 10/3 ≈ 3.33 Ω\n2. Cluster 2 (2 in parallel): R_p2 = 10/2 = 5 Ω\n3. R_total = 10/3 + 5 = 25/3 ≈ 8.33 Ω\n\nAnswer: 25/3 Ω ≈ 8.33 Ω",
    teacherTip: "Draw the circuit diagram before calculating.", examTip: "Handle each parallel group separately."
  },

  // ── CHAPTER 8: Magnetism & Electromagnetism (Q141–Q148) ──
  {
    id: "phy-num-q141", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "A bar magnet is broken into two equal pieces. How many poles does each piece have? Explain with a diagram.",
    answer: "Concept: Magnetic monopoles do not exist — each piece is a complete magnet.\n\nSolution:\nEach piece has 2 poles (North and South).\nOriginal: [N ——— S] → Broken: [N—S] + [N—S]\n\nAnswer: 2 poles each (one N and one S per piece)",
    teacherTip: "You cannot isolate a single magnetic pole.", examTip: "Sketch the before/after diagram."
  },
  {
    id: "phy-num-q142", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A bar magnet of length 10 cm has poles of strength 2 A·m. State the unit and find the magnetic moment. (Magnetic moment = pole strength × magnetic length)",
    answer: "Concept: Magnetic moment M = m × 2l (or m × length for bar magnet).\nFormula: M = m × L  (L in metres)\n\nSolution:\n1. Unit of magnetic moment: A·m²\n2. L = 0.1 m\n3. M = 2 × 0.1 = 0.2 A·m²\n\nAnswer: Unit = A·m²; M = 0.2 A·m²",
    teacherTip: "Convert cm to m before calculating.", examTip: "State the SI unit explicitly."
  },
  {
    id: "phy-num-q143", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "An electromagnet is made by winding 500 turns of wire around a soft iron core. If the current is 2 A, find the magnetomotive force (MMF = N × I).",
    answer: "Concept: MMF measures magnetic strength of a coil.\nFormula: MMF = N × I\n\nSolution:\nMMF = 500 × 2 = 1000 Ampere-turns\n\nAnswer: 1000 A·turns",
    teacherTip: "More turns or more current → stronger electromagnet.", examTip: "Unit is ampere-turns."
  },
  {
    id: "phy-num-q144", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "The magnetic field at a point due to a current element is given by a relation (Biot–Savart concept). If the current is doubled and the distance is halved, by what factor does the field change?",
    answer: "Concept: For a long straight wire, B ∝ I/r.\n\nSolution:\n1. Doubling I → field × 2\n2. Halving r → field × 2\n3. Overall factor = 2 × 2 = ×4\n\n(Note: For a point element with B ∝ I/r², factor would be 2/(0.5)² = 8.)\n\nAnswer: Field increases by a factor of 4 (for long straight wire)",
    teacherTip: "Identify whether B ∝ I/r or I/r² before solving.", examTip: "State the proportionality used."
  },
  {
    id: "phy-num-q145", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Easy",
    question: "State whether like poles attract or repel. A freely suspended magnet comes to rest pointing in which direction?",
    answer: "Concept: Fundamental properties of magnetism.\n\nSolution:\n1. Like poles repel each other; unlike poles attract.\n2. A freely suspended magnet rests pointing North–South.\n\nAnswer: Like poles repel; magnet points North–South",
    teacherTip: "Earth itself acts like a giant magnet.", examTip: "Mention both repulsion and orientation."
  },
  {
    id: "phy-num-q146", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A circular coil of radius 5 cm and 100 turns carries a current of 0.5 A. Calculate the magnetic field at its centre using B = μ₀nI / 2r (μ₀ = 4π × 10⁻⁷ T·m/A).",
    answer: "Concept: Magnetic field at centre of circular coil.\nFormula: B = μ₀nI/(2r)  (r in metres)\n\nSolution:\n1. r = 0.05 m\n2. B = (4π × 10⁻⁷ × 100 × 0.5)/(2 × 0.05)\n3. B = (2π × 10⁻⁵)/0.1 = 2π × 10⁻⁴ ≈ 6.28 × 10⁻⁴ T\n\nAnswer: ≈ 6.28 × 10⁻⁴ T",
    teacherTip: "n = number of turns; convert cm to m.", examTip: "Show μ₀ substitution step."
  },
  {
    id: "phy-num-q147", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Hard",
    question: "A straight wire carries a current of 10 A. Find the magnetic field at a perpendicular distance of 2 cm from it. (B = μ₀I / 2πr, μ₀ = 4π × 10⁻⁷ T·m/A)",
    answer: "Concept: Field around a long straight current-carrying wire.\nFormula: B = μ₀I/(2πr)\n\nSolution:\n1. r = 0.02 m\n2. B = (4π × 10⁻⁷ × 10)/(2π × 0.02) = (2 × 10⁻⁶)/0.02 = 10⁻⁴ T\n\nAnswer: 1 × 10⁻⁴ T",
    teacherTip: "π cancels in numerator and denominator.", examTip: "Convert cm to m for r."
  },
  {
    id: "phy-num-q148", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical",
    source: "phy_numerical", difficulty: "Medium",
    question: "A solenoid of 1000 turns carries a current of 2 A and has a length of 0.5 m. Find the magnetic field inside it. (B = μ₀nI, where n = turns per unit length, μ₀ = 4π × 10⁻⁷ T·m/A)",
    answer: "Concept: Field inside solenoid depends on turn density.\nFormulas: n = N/L;  B = μ₀nI\n\nSolution:\n1. n = 1000/0.5 = 2000 turns/m\n2. B = (4π × 10⁻⁷) × 2000 × 2 = 16π × 10⁻⁴ ≈ 5.03 × 10⁻³ T\n\nAnswer: ≈ 5.03 × 10⁻³ T",
    teacherTip: "n = total turns ÷ length in metres.", examTip: "Calculate n before finding B."
  },

  // ── MIXED OLYMPIAD & NEET CHALLENGE (Q149–Q150) ──
  {
    id: "phy-num-q149", topicId: "ch3-force", type: "short_answer", subtopic: "Numerical — Mixed Challenge",
    source: "phy_numerical", difficulty: "Hard",
    question: "A body of mass 5 kg is at rest on a smooth inclined plane of inclination 30°. (g = 10 m/s²) Find: (a) the weight and its components parallel and perpendicular to the plane, (b) the acceleration down the plane, (c) the time to slide 10 m down the plane, (d) the kinetic energy after sliding 10 m.",
    answer: "Concept: Resolve weight, apply F = ma, kinematics, and work-energy theorem.\nFormulas: W = mg;  F_parallel = mg sin θ;  a = F/m;  s = ½at²;  KE = F × d\n\nSolution:\n(a) W = 5 × 10 = 50 N\n    Parallel = 50 × sin 30° = 25 N\n    Perpendicular = 50 × cos 30° ≈ 43.3 N\n(b) a = 25/5 = 5 m/s²\n(c) 10 = 0 + 0.5 × 5 × t² → t² = 4 → t = 2 s\n(d) KE = 25 × 10 = 250 J\n\nAnswer: (a) 50 N; 25 N parallel; 43.3 N perpendicular  (b) 5 m/s²  (c) 2 s  (d) 250 J",
    teacherTip: "Smooth plane — no friction; only mg sin θ drives motion.", examTip: "Label all four parts clearly."
  },
  {
    id: "phy-num-q150", topicId: "ch8-electricity", type: "short_answer", subtopic: "Numerical — Mixed Challenge",
    source: "phy_numerical", difficulty: "Medium",
    question: "A physics project links heat and electricity. (a) Find the heat needed to raise 0.01 kg of water from 25°C to 75°C (c = 4200 J/kg°C). If heat is supplied at 2100 J/s, find the time. (b) A 220 V, 50 Ω resistor is connected to mains — find current and power. (c) How long would the heater in (b) take to supply the heat from (a)?",
    answer: "Concept: Links Q = mcΔT, Ohm's Law, and P = E/t.\nFormulas: Q = mcΔT;  I = V/R;  P = VI;  t = E/P\n\nSolution:\n(a) Q = 0.01 × 4200 × 50 = 2100 J\n    At 2100 J/s: t = 2100/2100 = 1 s\n(b) I = 220/50 = 4.4 A; P = 220 × 4.4 = 968 W\n(c) t = 2100/968 ≈ 2.17 s\n\nAnswer: (a) Q = 2100 J; t = 1 s  (b) I = 4.4 A; P = 968 W  (c) ≈ 2.17 s",
    teacherTip: "Real heaters are less than 100% efficient — this assumes ideal conversion.", examTip: "Show heat calculation before time comparisons."
  }
];
