// ============================================================
// ICSE CLASS 8 PHYSICS — FORMULA REFERENCE (cheat sheet add-on)
// Merged into chapter cheat sheets via chapterCheatsheet() in app.js
// Variable: PHYSICS_FORMULA_GROUPS
// ============================================================
const PHYSICS_FORMULA_GROUPS = {
  "ch1-matter": {
    id: "all-formulas",
    title: "📐 All formulas — Matter",
    items: [
      { term: "Density (intro)", text: "ρ = m/V — mass per unit volume (used fully in Ch 2)" },
      { term: "Volume of liquid", text: "1 litre (L) = 1000 cm³ = 1000 mL" },
      { term: "SI base units", text: "Mass → kg · Length → m · Time → s · Temperature → K" }
    ]
  },
  "ch2-measurement": {
    id: "all-formulas",
    title: "📐 All formulas — Measurement, Density & Motion",
    items: [
      { term: "Density", text: "ρ = m/V  |  Units: g/cm³ or kg/m³" },
      { term: "Mass from density", text: "m = ρ × V" },
      { term: "Volume from density", text: "V = m/ρ" },
      { term: "Unit conversion", text: "1 g/cm³ = 1000 kg/m³  |  1 g/cm³ = 1 kg/L" },
      { term: "Relative density", text: "RD = ρ_substance / ρ_water  (no unit)" },
      { term: "Density from RD", text: "ρ_substance = RD × 1000 kg/m³" },
      { term: "Displacement volume", text: "V_solid = V_final − V_initial  (1 mL = 1 cm³)" },
      { term: "Apparent loss of mass", text: "Volume = mass in air − mass in water (for water)" },
      { term: "Law of floatation", text: "Fraction submerged = ρ_object / ρ_fluid" },
      { term: "Speed conversion", text: "v (m/s) = v (km/h) × 5/18  |  v (km/h) = v (m/s) × 18/5" },
      { term: "Average speed", text: "v_avg = total distance / total time" },
      { term: "Uniform motion", text: "v = d/t" },
      { term: "Relative speed (approach)", text: "v_rel = v₁ + v₂  (towards each other)" },
      { term: "Displacement", text: "For ⊥ paths: displacement = √(d₁² + d₂²)" },
      { term: "Train passing pole", text: "Distance = length of train" },
      { term: "Train passing platform", text: "Distance = L_train + L_platform" }
    ]
  },
  "ch3-force": {
    id: "all-formulas",
    title: "📐 All formulas — Force, Pressure & Motion",
    items: [
      { term: "Pressure", text: "P = F/A  |  Unit: Pa (N/m²)" },
      { term: "Force from pressure", text: "F = P × A" },
      { term: "Hydrostatic pressure", text: "P = h × ρ × g  (liquid at depth h)" },
      { term: "Force on base", text: "F = P × A" },
      { term: "Max/min pressure (block)", text: "P_max = F/A_min  |  P_min = F/A_max" },
      { term: "Weight", text: "W = m × g  |  Unit: N" },
      { term: "Newton's 2nd law", text: "F = m × a  |  a = F/m" },
      { term: "Momentum", text: "p = m × v  |  Unit: kg·m/s" },
      { term: "Force (rate of Δp)", text: "F = m(v − u)/t" },
      { term: "Equations of motion", text: "v = u + at  |  s = ut + ½at²  |  v² = u² + 2as" },
      { term: "Braking force", text: "a = (v − u)/t  then  F = m × a" },
      { term: "Upthrust / buoyancy", text: "Loss of weight = V × ρ_liquid × g" },
      { term: "Moment of force", text: "Moment = F × d  (perpendicular distance)" },
      { term: "Inclined plane", text: "F_parallel = mg sin θ  |  F_perp = mg cos θ" },
      { term: "Centripetal force", text: "F_c = mv²/r" },
      { term: "Tension (two blocks)", text: "a = F_total/m_total  |  T = m_trailing × a" }
    ]
  },
  "ch4-energy": {
    id: "all-formulas",
    title: "📐 All formulas — Work, Energy & Power",
    items: [
      { term: "Work (force ∥ displacement)", text: "W = F × d  |  Unit: J (joule)" },
      { term: "Work (at angle θ)", text: "W = F × d × cos θ" },
      { term: "Work against gravity", text: "W = m × g × h" },
      { term: "Power", text: "P = W/t  |  Unit: W (watt = J/s)" },
      { term: "Power (lifting)", text: "P = mgh/t" },
      { term: "Kinetic energy", text: "KE = ½mv²" },
      { term: "Potential energy", text: "PE = mgh" },
      { term: "Conservation of energy", text: "KE + PE = constant  |  ½mv² = mgh" },
      { term: "Change in KE", text: "ΔKE = ½m(v_f² − v_i²)" },
      { term: "Work-energy theorem", text: "W_net = ΔKE" },
      { term: "Electrical energy", text: "E = P × t  |  1 kWh = 3.6 × 10⁶ J" },
      { term: "Mechanical advantage", text: "MA = Load / Effort" },
      { term: "Velocity ratio", text: "VR = d_effort / d_load" },
      { term: "Efficiency", text: "η = (MA/VR) × 100% = W_out/W_in × 100%" },
      { term: "Input work", text: "W_in = W_out / η" },
      { term: "Power (machine)", text: "P_out = useful work/t  |  P_in = P_out/η" },
      { term: "Electricity cost", text: "Cost = energy (kWh) × rate (₹/kWh)" }
    ]
  },
  "ch5-light": {
    id: "all-formulas",
    title: "📐 All formulas — Light (Reflection & Refraction)",
    items: [
      { term: "Plane mirror", text: "Image distance = object distance (behind mirror)" },
      { term: "Man–image distance", text: "Total distance = 2 × distance from mirror" },
      { term: "Angle of incidence", text: "i = 90° − (angle to surface);  law: i = r" },
      { term: "Multiple images", text: "n = (360°/θ) − 1  (θ = angle between mirrors)" },
      { term: "Refractive index", text: "n = c/v  |  v = c/n" },
      { term: "Snell's law", text: "n₁ sin i = n₂ sin r" },
      { term: "Critical angle", text: "sin c = 1/n  (denser → rarer medium)" },
      { term: "Mirror formula", text: "1/f = 1/v + 1/u  |  m = −v/u" },
      { term: "Lens formula", text: "1/f = 1/v − 1/u  |  m = v/u" },
      { term: "Sign convention (mirror)", text: "Concave: f negative, u negative; real image v negative" },
      { term: "Sign convention (lens)", text: "Convex: f positive; object u negative" },
      { term: "Image size", text: "h_image = |m| × h_object" },
      { term: "Real vs virtual", text: "Real image: inverted (m negative for mirror/lens rules)" }
    ]
  },
  "ch6-heat": {
    id: "all-formulas",
    title: "📐 All formulas — Heat & Temperature",
    items: [
      { term: "Celsius → Fahrenheit", text: "F = (C × 9/5) + 32" },
      { term: "Fahrenheit → Celsius", text: "C = (F − 32) × 5/9" },
      { term: "Celsius ↔ Kelvin", text: "K = C + 273  |  C = K − 273" },
      { term: "Same scale point", text: "−40°C = −40°F" },
      { term: "Specific heat", text: "Q = mcΔT  |  c in J/kg°C" },
      { term: "Find specific heat", text: "c = Q / (mΔT)" },
      { term: "Latent heat", text: "Q = mL  (L_f fusion, L_v vaporisation)" },
      { term: "Calorimetry", text: "Heat lost = heat gained (no heat loss to surroundings)" },
      { term: "Mixing (two bodies)", text: "m_hot c_hot (T_hot − T) = m_cold c_cold (T − T_cold)" },
      { term: "Linear expansion", text: "ΔL = L₀ × α × ΔT  |  L_new = L₀ + ΔL" },
      { term: "Heating coil time", text: "Q = mcΔT  then  t = Q/P" },
      { term: "Ice to steam (total Q)", text: "Q = mc_iceΔT₁ + mL_f + mc_waterΔT₂ + mL_v" },
      { term: "Conservation (falling)", text: "PE_top = KE_bottom = mgh" }
    ]
  },
  "ch7-sound": {
    id: "all-formulas",
    title: "📐 All formulas — Sound & Waves",
    items: [
      { term: "Wave equation", text: "v = f × λ" },
      { term: "Frequency", text: "f = v/λ" },
      { term: "Wavelength", text: "λ = v/f" },
      { term: "Distance (sound travel)", text: "d = v × t" },
      { term: "Echo / sonar (one way)", text: "d = v × t / 2" },
      { term: "Echo speed", text: "v = 2d/t  (d = distance to obstacle)" },
      { term: "Echo delay (observer)", text: "t_diff = 2d/v  (d = observer to reflector)" },
      { term: "Audible range", text: "20 Hz to 20 000 Hz (human ear)" },
      { term: "Frequency unchanged", text: "Same f in different media; v and λ change" },
      { term: "Ultrasound", text: "f > 20 000 Hz — inaudible to humans" },
      { term: "Wavelength ratio", text: "λ₁/λ₂ = f₂/f₁  (same medium, constant v)" }
    ]
  },
  "ch8-electricity": {
    id: "all-formulas",
    title: "📐 All formulas — Electricity & Magnetism",
    items: [
      { term: "Electric current", text: "I = Q/t  |  Unit: A (ampere)" },
      { term: "Charge", text: "Q = I × t  |  Unit: C (coulomb)" },
      { term: "Ohm's law", text: "V = I × R  |  I = V/R  |  R = V/I" },
      { term: "Resistance (rated)", text: "R = V²/P" },
      { term: "Electrical power", text: "P = V × I = I²R = V²/R  |  Unit: W" },
      { term: "Current from power", text: "I = P/V" },
      { term: "Energy consumed", text: "E = P × t  |  kWh = kW × hours" },
      { term: "Series resistance", text: "R_eq = R₁ + R₂ + R₃ + …" },
      { term: "Parallel resistance", text: "1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + …" },
      { term: "Identical parallel", text: "R_eq = R/n  (n resistors of value R)" },
      { term: "Series bulbs", text: "Higher R → brighter (P = I²R, same I)" },
      { term: "Parallel bulbs", text: "Higher P rating → more current (same V)" },
      { term: "Wire stretched", text: "Double length → R × 4 (volume constant)" },
      { term: "Electricity bill", text: "Cost = energy (kWh) × ₹/kWh" },
      { term: "Magnetic moment", text: "M = pole strength × length  |  Unit: A·m²" },
      { term: "Magnetomotive force", text: "MMF = N × I  (ampere-turns)" },
      { term: "Field (long wire)", text: "B = μ₀I / (2πr)" },
      { term: "Field (solenoid)", text: "B = μ₀nI  (n = N/L turns per metre)" },
      { term: "Field (coil centre)", text: "B = μ₀nI / (2r)" },
      { term: "μ₀", text: "4π × 10⁻⁷ T·m/A" }
    ]
  }
};
