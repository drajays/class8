// ============================================================
// StudyHub — periodic table data (all 118 elements) for the Chemical Index.
// Z is the position in the list. Book-specific text lives in chemistry-index.js.
// ============================================================
const CHEM_ELEMENTS = `H Hydrogen 1.008|He Helium 4.003|Li Lithium 6.94|Be Beryllium 9.012|B Boron 10.81|C Carbon 12.011|N Nitrogen 14.007|O Oxygen 15.999|F Fluorine 18.998|Ne Neon 20.18|Na Sodium 22.99|Mg Magnesium 24.305|Al Aluminium 26.982|Si Silicon 28.085|P Phosphorus 30.974|S Sulphur 32.06|Cl Chlorine 35.45|Ar Argon 39.948|K Potassium 39.098|Ca Calcium 40.078|Sc Scandium 44.956|Ti Titanium 47.867|V Vanadium 50.942|Cr Chromium 51.996|Mn Manganese 54.938|Fe Iron 55.845|Co Cobalt 58.933|Ni Nickel 58.693|Cu Copper 63.546|Zn Zinc 65.38|Ga Gallium 69.723|Ge Germanium 72.63|As Arsenic 74.922|Se Selenium 78.971|Br Bromine 79.904|Kr Krypton 83.798|Rb Rubidium 85.468|Sr Strontium 87.62|Y Yttrium 88.906|Zr Zirconium 91.224|Nb Niobium 92.906|Mo Molybdenum 95.95|Tc Technetium 98|Ru Ruthenium 101.07|Rh Rhodium 102.906|Pd Palladium 106.42|Ag Silver 107.868|Cd Cadmium 112.414|In Indium 114.818|Sn Tin 118.71|Sb Antimony 121.76|Te Tellurium 127.6|I Iodine 126.904|Xe Xenon 131.293|Cs Caesium 132.905|Ba Barium 137.327|La Lanthanum 138.905|Ce Cerium 140.116|Pr Praseodymium 140.908|Nd Neodymium 144.242|Pm Promethium 145|Sm Samarium 150.36|Eu Europium 151.964|Gd Gadolinium 157.25|Tb Terbium 158.925|Dy Dysprosium 162.5|Ho Holmium 164.93|Er Erbium 167.259|Tm Thulium 168.934|Yb Ytterbium 173.045|Lu Lutetium 174.967|Hf Hafnium 178.49|Ta Tantalum 180.948|W Tungsten 183.84|Re Rhenium 186.207|Os Osmium 190.23|Ir Iridium 192.217|Pt Platinum 195.084|Au Gold 196.967|Hg Mercury 200.592|Tl Thallium 204.38|Pb Lead 207.2|Bi Bismuth 208.98|Po Polonium 209|At Astatine 210|Rn Radon 222|Fr Francium 223|Ra Radium 226|Ac Actinium 227|Th Thorium 232.038|Pa Protactinium 231.036|U Uranium 238.029|Np Neptunium 237|Pu Plutonium 244|Am Americium 243|Cm Curium 247|Bk Berkelium 247|Cf Californium 251|Es Einsteinium 252|Fm Fermium 257|Md Mendelevium 258|No Nobelium 259|Lr Lawrencium 266|Rf Rutherfordium 267|Db Dubnium 268|Sg Seaborgium 269|Bh Bohrium 270|Hs Hassium 277|Mt Meitnerium 278|Ds Darmstadtium 281|Rg Roentgenium 282|Cn Copernicium 285|Nh Nihonium 286|Fl Flerovium 289|Mc Moscovium 290|Lv Livermorium 293|Ts Tennessine 294|Og Oganesson 294`
  .split('|').map((s, i) => {
    const [sym, name, mass] = s.split(' ');
    const z = i + 1;
    const among = list => list.includes(z);
    const cat = among([3, 11, 19, 37, 55, 87]) ? 'alkali'
      : among([4, 12, 20, 38, 56, 88]) ? 'alkaline'
      : among([9, 17, 35, 53, 85, 117]) ? 'halogen'
      : among([2, 10, 18, 36, 54, 86, 118]) ? 'noble'
      : among([5, 14, 32, 33, 51, 52]) ? 'metalloid'
      : among([1, 6, 7, 8, 15, 16, 34]) ? 'nonmetal'
      : z >= 57 && z <= 71 ? 'lanthanide'
      : z >= 89 && z <= 103 ? 'actinide'
      : among([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116]) ? 'post'
      : 'transition';
    // grid position (row, column) in the usual 18-column layout; f-block sits in two rows underneath
    let row, col;
    if (z <= 2) { row = 1; col = z === 1 ? 1 : 18; }
    else if (z <= 18) { row = z <= 10 ? 2 : 3; const k = z - (z <= 10 ? 2 : 10); col = k <= 2 ? k : k + 10; }
    else if (z <= 36) { row = 4; col = z - 18; }
    else if (z <= 54) { row = 5; col = z - 36; }
    else if (z <= 56) { row = 6; col = z - 54; }
    else if (z <= 71) { row = 9; col = z - 54; }
    else if (z <= 86) { row = 6; col = z - 68; }
    else if (z <= 88) { row = 7; col = z - 86; }
    else if (z <= 103) { row = 10; col = z - 86; }
    else { row = 7; col = z - 100; }
    const state = among([80, 35]) ? 'Liquid' : among([1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86, 118]) ? 'Gas' : 'Solid';
    return { z, sym, name, mass, cat, row, col, state };
  });
