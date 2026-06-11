// StudyHub — ICSE Class 8 Physics (notes and questions hand-authored)
// Regenerate: node scripts/build-physics-neet-authored.js
// Question sources: data/physics-authored/ch1..ch8.json + diagrams.json
const PHYSICS_NEET_DATA = [
{
 "id": "phy-s1-sec_01",
 "topicId": "ch1-matter",
 "type": "note",
 "subtopic": "1. Matter, Molecules, Cohesion and Adhesion",
 "content": "**Matter** is anything that has mass and occupies space — iron, water, air, wood, oil, steam.\n\n• An **element** is a substance that cannot be broken into simpler substances; its smallest unit is an **atom**.\n• A **molecule** is the smallest unit of matter that can exist independently and shows all the properties of that matter. A molecule may consist of one or more atoms (a common-salt molecule has one sodium and one chlorine atom).\n\n**Must know — properties of molecules**\n• Molecules of a given substance are **identical** in shape, size and mass.\n• Molecules are in a state of **continuous random motion** and therefore possess kinetic energy.\n• Molecules attract one another with **intermolecular forces**:\n  – **Cohesion**: attraction between molecules of the **same** substance (water–water; it pulls two touching water drops into one).\n  – **Adhesion**: attraction between molecules of **different** substances (glue–paper, water–glass, ink–paper).\n• These forces weaken rapidly as the distance between molecules increases.",
 "explanation": "Everyday evidence:\n• Two water drops merge on touching — cohesion.\n• Glue sticks two sheets of paper — adhesion.\n• Chalk powders easily, brick is harder to break, iron is hardest — cohesion is weakest in chalk, stronger in brick, very strong in iron.",
 "source": "icse",
 "examTip": "Cohesion = same substance, adhesion = different substances — examiners love swapping the two in true/false questions.",
 "linkedMcqCount": 9
},
{
 "id": "phy-s1-sec_02",
 "topicId": "ch1-matter",
 "type": "note",
 "subtopic": "2. The Three States of Matter",
 "content": "Matter exists as **solid, liquid and gas**. The differences come from intermolecular **forces** and **spaces**.\n\n**Solids**\n• Molecules closely packed; intermolecular spaces negligible; forces strongest.\n• Molecules only **vibrate about fixed positions** → definite shape AND definite volume; practically incompressible.\n\n**Liquids**\n• Spaces slightly larger than solids; forces weaker — molecules **slide past one another**.\n• Definite volume but **no definite shape** (takes the container's shape); has a **definite free surface**; only slightly compressible.\n\n**Gases**\n• Spaces very large; forces negligible — each molecule moves **independently at high speed**.\n• Neither definite shape nor definite volume; fills the whole vessel; **no free surface**; highly compressible; can only be stored in a closed vessel.\n\n**Order to remember**\n• Intermolecular force: solid > liquid > gas.\n• Intermolecular space: gas > liquid > solid.\n• Compressibility: gas > liquid > solid.",
 "explanation": "Why compression works: squeezing reduces the EMPTY space between molecules. Gases have huge spaces, so they compress easily; in solids the molecules already touch, so there is almost nothing to squeeze.",
 "source": "icse",
 "examTip": "Write the three 'order chains' (force, space, compressibility) at the top of your answer sheet — half the MCQs on this chapter test them.",
 "linkedMcqCount": 12
},
{
 "id": "phy-s1-sec_03",
 "topicId": "ch1-matter",
 "type": "note",
 "subtopic": "3. Kinetic Theory of Matter",
 "content": "**Main assumptions of the kinetic theory**\n• Matter is made of tiny particles (molecules); molecules of one substance are identical.\n• Molecules are in **continuous random motion** that never stops — so they possess kinetic energy.\n• The **average kinetic energy of molecules increases with temperature** (temperature is a measure of molecular kinetic energy).\n• Molecules attract each other (cohesion/adhesion); the attraction weakens with distance.\n• Between molecules there are empty **intermolecular spaces**.\n\n**The theory explains**\n• **Solids keep their shape** — molecules vibrate but cannot leave fixed positions.\n• **Diffusion** — perfume spreads across a room because vapour molecules wander randomly through the spaces between air molecules.\n• **Gas pressure** — billions of molecular collisions per second on every wall of the container push outward equally in all directions.\n• **Energy order of states**: molecules of a gas have the most energy, of a solid the least (for the same substance, steam > water > ice).",
 "explanation": "Common misconception: 'molecules stop moving in a solid'. They never stop — they vibrate in place. Motion stops for nothing; even in ice the molecules vibrate about fixed positions.",
 "source": "icse",
 "examTip": "Any 'explain using kinetic theory' answer should mention BOTH intermolecular force and intermolecular space — one alone loses marks.",
 "linkedMcqCount": 9
},
{
 "id": "phy-s1-sec_04",
 "topicId": "ch1-matter",
 "type": "note",
 "subtopic": "4. Change of State, Evaporation and Boiling",
 "content": "A **change of state** is a physical change — molecules never change, only their spacing, forces and energy.\n\n• **Melting (fusion)**: solid → liquid at a fixed **melting point** (pure ice: 0 °C).\n• **Vaporisation**: liquid → gas, by evaporation or boiling.\n• **Condensation**: gas → liquid; **releases** latent heat (dew, droplets on a cold glass).\n• **Freezing**: liquid → solid (reverse of melting).\n• **Sublimation**: solid → vapour directly (camphor, iodine, naphthalene balls).\n\n**Latent heat**: during melting or boiling the temperature stays CONSTANT — the heat supplied is used to overcome intermolecular forces, not to speed up molecules.\n\n**Evaporation vs boiling**\n• Evaporation: at ALL temperatures, only from the **surface**, slow, causes **cooling**.\n• Boiling: at ONE fixed temperature (boiling point, water 100 °C), throughout the **bulk**, rapid.\n\n**Evaporation increases with**: larger surface area, higher temperature, wind, lower humidity. (Depth/quantity of liquid does NOT matter.)\n\n**Evaporation cools** because the most energetic molecules escape, lowering the average kinetic energy of those left behind — sweating, earthen pots, sprinkled water, sanitizer on skin.",
 "explanation": "Why steam burns worse than boiling water: both are at 100 °C, but steam additionally carries the latent heat of vaporisation, which it releases on condensing on the skin.\n\nWhy ice cools a drink better than ice-cold water: melting ice absorbs latent heat of fusion in addition to warming up.",
 "source": "icse",
 "examTip": "For 'give reason' questions on cooling (matka, sweating, sanitizer), always name BOTH evaporation AND the latent heat drawn from the body/liquid.",
 "linkedMcqCount": 27
},
{
 "id": "phy-c1-m01",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A fixed mass of gas can be compressed into a much smaller volume by applying pressure, but the same cannot be done with a solid. The best explanation is:",
 "options": [
  "Gas molecules are smaller than solid molecules",
  "Gases have large intermolecular spaces which reduce on compression; solids have negligible spaces",
  "Gas molecules are lighter, so they get pushed closer easily",
  "Solids repel the piston with a frictional force"
 ],
 "correctOption": 1,
 "answer": "Compression works by reducing the empty space between molecules. In gases the intermolecular spaces are very large, so molecules can be pushed closer. In solids the molecules are already closely packed, leaving almost no space to reduce. Molecular size or mass is not the deciding factor.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m02",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A camphor tablet kept in a cupboard becomes smaller over days and finally disappears without leaving any liquid behind. The change of state involved is:",
 "options": [
  "Evaporation",
  "Melting followed by evaporation",
  "Sublimation",
  "Condensation"
 ],
 "correctOption": 2,
 "answer": "Camphor changes directly from solid to vapour without passing through the liquid state — this is sublimation. Evaporation applies to liquids, and no liquid was ever formed here.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m03",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "While ice is melting, a thermometer placed in the ice–water mixture keeps reading 0 °C even though heat is continuously supplied. This is because the heat supplied is used to:",
 "options": [
  "Increase the speed of the water molecules",
  "Overcome the intermolecular forces holding the molecules in fixed positions",
  "Warm the thermometer bulb",
  "Expand the volume of ice"
 ],
 "correctOption": 1,
 "answer": "During a change of state, the heat supplied (latent heat) does not raise the temperature. It is used to weaken/overcome intermolecular forces so that molecules can leave their fixed positions in the solid and move past one another as a liquid. Temperature, which measures average kinetic energy, stays constant.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m04",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Wet clothes dry fastest on a:",
 "options": [
  "Cold, humid, still day",
  "Hot, humid, still day",
  "Hot, dry, windy day",
  "Cold, dry, still day"
 ],
 "correctOption": 2,
 "answer": "Evaporation increases with higher temperature (molecules gain kinetic energy), lower humidity (air can hold more vapour) and wind (moving air carries vapour molecules away from the surface). A hot, dry, windy day combines all three favourable factors.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m05",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Ice, water and steam are three states of the same substance. Which statement about their molecules is correct?",
 "options": [
  "The molecules in the three states are identical; only their arrangement, spacing and energy differ",
  "Steam molecules are lighter than ice molecules",
  "Water molecules change their chemical nature in each state",
  "Ice molecules are larger than steam molecules"
 ],
 "correctOption": 0,
 "answer": "All three are made of identical H₂O molecules. A change of state is a physical change: only the intermolecular spacing, the strength of intermolecular forces felt, and the energy of the molecules change — never the molecules themselves.",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m06",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A liquid takes the shape of its container but still has a definite volume. This is because in a liquid the intermolecular forces are:",
 "options": [
  "Strong enough to hold molecules together, but weak enough to let them slide past one another",
  "Zero, so molecules move completely freely",
  "Stronger than in solids, fixing the volume",
  "Strong only at the surface of the liquid"
 ],
 "correctOption": 0,
 "answer": "Liquid molecules remain bound to each other (hence definite volume) but the forces are weaker than in solids, so molecules can slide over one another — letting the liquid flow and take the container's shape.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m07",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A perfume bottle is opened in one corner of a closed room and the smell soon reaches the opposite corner. The kinetic theory explains this by saying that:",
 "options": [
  "Perfume vapour is lighter than air and floats across",
  "Perfume molecules are in continuous random motion and mix into the spaces between air molecules",
  "Air pushes the perfume in one fixed direction",
  "The perfume molecules expand to fill the room"
 ],
 "correctOption": 1,
 "answer": "Gas molecules move randomly at high speed. Perfume vapour molecules wander through the large intermolecular spaces of air and spread (diffuse) throughout the room. Individual molecules do not expand, and the motion is random, not one-directional.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m08",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Water stored in an earthen pot (matka) stays cooler than water in a steel vessel because:",
 "options": [
  "Clay is naturally cold",
  "Water seeps through the pores and evaporates, absorbing latent heat from the remaining water",
  "The earthen pot reflects sunlight better",
  "Steel generates heat"
 ],
 "correctOption": 1,
 "answer": "An earthen pot has tiny pores through which water continuously seeps out and evaporates from the outer surface. The latent heat needed for this evaporation is drawn from the water inside, lowering its temperature. A steel vessel has no pores, so no such evaporative cooling occurs.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m09",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Steam at 100 °C causes a much more severe burn than the same mass of boiling water at 100 °C. This is because steam:",
 "options": [
  "Is at a higher temperature than boiling water",
  "Has extra stored energy (latent heat of vaporisation) which it releases on condensing on the skin",
  "Moves faster and hits the skin harder",
  "Contains more molecules than water"
 ],
 "correctOption": 1,
 "answer": "Both are at 100 °C, so the average kinetic energy of molecules is the same. But steam molecules additionally carry the latent heat absorbed during vaporisation. When steam condenses on skin, it first releases this large latent heat and then cools like hot water — delivering far more total heat.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m10",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When a solid melts into a liquid, which pair of changes occurs at the molecular level?",
 "options": [
  "Intermolecular spaces decrease; forces become stronger",
  "Intermolecular spaces increase; forces become weaker",
  "Intermolecular spaces increase; forces become stronger",
  "Molecules break into atoms; forces vanish"
 ],
 "correctOption": 1,
 "answer": "On melting, molecules gain energy, vibrate more violently and break away from fixed positions. The spacing between them increases slightly and the effective intermolecular force weakens — enough for molecules to slide past one another. The molecules themselves remain intact (physical change).",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m11",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Which of the following changes will NOT increase the rate of evaporation of water kept in a dish?",
 "options": [
  "Spreading the same water into a wider tray",
  "Blowing air over the dish",
  "Pouring more water into the dish to make it deeper",
  "Placing the dish in sunlight"
 ],
 "correctOption": 2,
 "answer": "Evaporation is a surface phenomenon — it depends on the exposed surface area, temperature, wind and humidity, not on the depth or total amount of liquid. Making the water deeper without changing the surface area does not increase the evaporation rate.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m12",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Tiny droplets of water appear on the outer surface of a glass containing ice-cold water. The droplets are formed by:",
 "options": [
  "Water seeping out through the glass",
  "Condensation of water vapour from the air on the cold surface",
  "Evaporation of water from inside the glass",
  "Melting of the glass surface"
 ],
 "correctOption": 1,
 "answer": "Water vapour present in air loses energy on touching the cold outer surface of the glass; its molecules slow down, come closer, and the vapour condenses into liquid droplets. Glass is non-porous, so nothing seeps through it.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m13",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Solids have a definite shape because their molecules:",
 "options": [
  "Do not move at all",
  "Only vibrate about fixed mean positions due to strong intermolecular forces",
  "Are too heavy to move",
  "Are arranged in straight lines"
 ],
 "correctOption": 1,
 "answer": "Solid molecules are never completely at rest — they constantly vibrate, but strong intermolecular forces keep each molecule oscillating about a fixed position. Since positions are fixed, the solid keeps a definite shape. Option (a) is a common misconception: molecular motion never stops.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m14",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Arrange the three states of matter in increasing order of intermolecular force of attraction:",
 "options": [
  "Solid < Liquid < Gas",
  "Gas < Liquid < Solid",
  "Liquid < Gas < Solid",
  "Gas < Solid < Liquid"
 ],
 "correctOption": 1,
 "answer": "Intermolecular forces are almost negligible in gases, moderate in liquids and strongest in solids. (Note: intermolecular spaces follow exactly the reverse order — largest in gases, smallest in solids.)",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m15",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A few drops of hand sanitizer rubbed on your palm make it feel cold. The cooling happens because the sanitizer:",
 "options": [
  "Is stored at a low temperature",
  "Evaporates rapidly, taking the latent heat it needs from your skin",
  "Reacts chemically with the skin to absorb heat",
  "Blocks heat coming from the surroundings"
 ],
 "correctOption": 1,
 "answer": "Sanitizer (alcohol) is a volatile liquid that evaporates quickly. The energy needed for its molecules to escape as vapour is taken from the skin, lowering the skin's temperature. The same principle explains why sweating cools the body.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m16",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Which of the following is true for boiling but NOT for evaporation?",
 "options": [
  "It changes a liquid into vapour",
  "It takes place at one fixed temperature and throughout the bulk of the liquid",
  "It can occur at any temperature",
  "It occurs only at the surface"
 ],
 "correctOption": 1,
 "answer": "Both processes convert liquid to vapour, but boiling occurs at a fixed temperature (the boiling point) and bubbles of vapour form throughout the liquid. Evaporation occurs at all temperatures and only from the surface.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m17",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "According to the kinetic theory, raising the temperature of a substance always increases:",
 "options": [
  "The size of its molecules",
  "The number of its molecules",
  "The average kinetic energy of its molecules",
  "The intermolecular force between its molecules"
 ],
 "correctOption": 2,
 "answer": "Temperature is a measure of the average kinetic energy of molecules. Heating makes molecules move/vibrate faster. The molecules do not grow, multiply, or attract each other more strongly — in fact effective attraction decreases as they move apart.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m18",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A gas exerts pressure on the walls of its container because its molecules:",
 "options": [
  "Are attracted by the walls",
  "Continuously collide with the walls and rebound",
  "Settle down on the walls due to gravity",
  "Expand on touching the walls"
 ],
 "correctOption": 1,
 "answer": "Gas molecules move randomly at high speeds and keep striking the container walls. Each collision pushes on the wall; billions of collisions per second produce a steady outward pressure on every wall, in all directions.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m19",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Application",
 "question": "Two small water drops on a glass plate merge into a single bigger drop the moment they touch. The force responsible is:",
 "options": [
  "Force of adhesion between water and glass",
  "Force of cohesion between water molecules",
  "Gravitational pull between the drops",
  "Atmospheric pressure pushing them together"
 ],
 "correctOption": 1,
 "answer": "Cohesion is the attraction between molecules of the same substance. When the drops touch, water molecules of one drop attract those of the other strongly enough to pull them into a single drop. Adhesion (water–glass attraction) is what makes the drop stick to and wet the plate.",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m20",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Application",
 "question": "Glue can stick two sheets of paper together. The property of glue mainly responsible is:",
 "options": [
  "Strong force of adhesion between glue and paper",
  "Strong force of cohesion within the glue",
  "Low density of glue",
  "High evaporation rate of glue"
 ],
 "correctOption": 0,
 "answer": "Adhesion is the force of attraction between molecules of different substances. Glue molecules attract paper molecules strongly on both sheets, binding them together. (Good cohesion within the dried glue also helps, but sticking to paper is adhesion.)",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m21",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Application",
 "question": "In deserts, people often sprinkle water on the ground in front of their homes on hot evenings. This cools the surroundings because:",
 "options": [
  "Water is colder than the ground",
  "The sprinkled water evaporates, absorbing a large amount of heat from the ground and air",
  "Water stops the wind",
  "Wet ground reflects heat back to the sky"
 ],
 "correctOption": 1,
 "answer": "The sprinkled water evaporates quickly from the hot ground. Evaporation needs latent heat, which is drawn from the ground and surrounding air, so their temperature falls. This is evaporative cooling in action.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m22",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Evaporation of a liquid causes cooling of the remaining liquid.\nReason (R): The most energetic molecules escape from the surface, lowering the average kinetic energy of the molecules left behind.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Only molecules with higher-than-average kinetic energy can break free from the liquid surface. Their departure lowers the average kinetic energy — and hence the temperature — of the liquid that remains. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m23",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A gas completely fills any closed vessel in which it is kept.\nReason (R): Intermolecular forces in a gas are negligible, so the molecules move freely in all directions.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "With almost no attractive forces to hold them together, gas molecules fly about freely at high speeds and spread to every part of the vessel. R is the correct explanation of A.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m24",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Ice at 0 °C cools a drink more effectively than an equal mass of water at 0 °C.\nReason (R): Ice absorbs latent heat of fusion from the drink while melting, in addition to the heat absorbed while warming up.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Both ice at 0 °C and water at 0 °C warm up by absorbing heat from the drink, but ice first absorbs a large latent heat of fusion just to melt (with no temperature change). This extra heat extracted from the drink makes ice the better cooler. R explains A.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m25",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Solids cannot be compressed easily.\nReason (R): The molecules of a solid strongly repel any molecule that comes near them, at all distances.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true — solids are nearly incompressible. But R is false: solid molecules attract one another (cohesion); incompressibility arises because the molecules are already closely packed with negligible intermolecular space, not because of repulsion at all distances.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m26",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The temperature of water remains constant at 100 °C while it boils.\nReason (R): The heat supplied during boiling goes into increasing the speed of the water molecules.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true. R is false: if the heat increased molecular speed, the temperature would rise. During boiling the heat supplied (latent heat of vaporisation) is used to pull molecules apart against intermolecular forces, converting liquid to vapour at constant temperature.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m27",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Sublimation is the change of a solid directly into vapour without becoming liquid.\nReason (R): Camphor, iodine and naphthalene are common substances that sublime.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 1,
 "answer": "Both statements are true, but R merely gives examples of subliming substances — it does not explain why or what sublimation is. So R is not the correct explanation of A.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m28",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. All molecules of a given pure substance are identical in shape, size and mass.\nII. The force of cohesion acts between molecules of different substances.\nIII. Intermolecular spaces are largest in gases.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I is correct — molecules of the same substance are identical. III is correct — gas molecules are farthest apart. II is wrong: cohesion acts between like molecules; attraction between unlike molecules is adhesion.",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-m29",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about evaporation:\nI. It can take place at any temperature below the boiling point.\nII. It takes place only from the surface of the liquid.\nIII. It raises the temperature of the liquid left behind.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct: evaporation is a surface phenomenon occurring at all temperatures. III is wrong — evaporation cools the remaining liquid because the most energetic molecules escape.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m30",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about change of state:\nI. Pure ice melts at a fixed temperature of 0 °C.\nII. During boiling, the temperature of the liquid rises steadily.\nIII. Condensation releases heat to the surroundings.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I is correct (melting point of pure ice is 0 °C). III is correct — condensation is the reverse of vaporisation, so the latent heat absorbed during vaporisation is given back. II is wrong: temperature stays constant during boiling.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-t01",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The force of adhesion acts between the molecules of the same substance.",
 "correctAnswer": "false",
 "answer": "False. The force of attraction between molecules of the SAME substance is cohesion. Adhesion is the attraction between molecules of DIFFERENT substances (e.g., water and glass).",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t02",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The molecules of a solid are completely at rest.",
 "correctAnswer": "false",
 "answer": "False. Molecules are never at rest. In a solid they continuously vibrate about fixed mean positions; they cannot leave those positions because of strong intermolecular forces.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-t03",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Evaporation takes place only at the boiling point of a liquid.",
 "correctAnswer": "false",
 "answer": "False. Evaporation occurs at ALL temperatures below the boiling point. It is boiling that occurs only at one fixed temperature — the boiling point.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t04",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "During condensation, a substance changes from the gaseous state to the liquid state and releases heat.",
 "correctAnswer": "true",
 "answer": "True. Condensation is the reverse of vaporisation: vapour molecules lose energy, come closer, and form a liquid, giving out the latent heat that was absorbed during vaporisation.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t05",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Intermolecular spaces in a liquid are smaller than those in a solid.",
 "correctAnswer": "false",
 "answer": "False. Intermolecular spaces in a liquid are LARGER than in a solid but much smaller than in a gas. The order is: solid < liquid << gas.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t06",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "On heating a substance, the average kinetic energy of its molecules increases.",
 "correctAnswer": "true",
 "answer": "True. Temperature is a measure of the average kinetic energy of molecules; heating raises the temperature and makes the molecules move or vibrate faster.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t07",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A liquid has a definite shape as well as a definite volume.",
 "correctAnswer": "false",
 "answer": "False. A liquid has a definite VOLUME but no definite shape — it takes the shape of its container because its molecules can slide past one another.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-t08",
 "topicId": "ch1-matter",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A gas has a free surface of its own.",
 "correctAnswer": "false",
 "answer": "False. A gas has NO free surface — it expands to fill the entire vessel. Only a liquid has a definite free surface (its top surface).",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-f01",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The force of attraction between molecules of the same substance is called the force of _______.",
 "blankAnswer": "cohesion",
 "answer": "Cohesion — e.g., water molecules attracting each other. (Attraction between unlike molecules is adhesion.)",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-f02",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The change of a liquid into vapour from its surface, at any temperature below the boiling point, is called _______.",
 "blankAnswer": "evaporation",
 "answer": "Evaporation — a surface phenomenon that occurs at all temperatures and causes cooling.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-f03",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The smallest unit of matter that can exist independently and shows all the properties of that matter is called a _______.",
 "blankAnswer": "molecule",
 "answer": "Molecule — it may consist of one or more atoms (e.g., a common salt molecule has one sodium and one chlorine atom).",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-f04",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The fixed temperature at which a solid changes into a liquid is called its _______ point.",
 "blankAnswer": "melting",
 "answer": "Melting point — for pure ice it is 0 °C. The temperature stays constant during melting.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-f05",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The change of a solid directly into vapour, without passing through the liquid state, is called _______.",
 "blankAnswer": "sublimation",
 "answer": "Sublimation — shown by camphor, iodine and naphthalene balls.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-f06",
 "topicId": "ch1-matter",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Solids are almost incompressible because the intermolecular _______ between their molecules are negligible.",
 "blankAnswer": "spaces",
 "answer": "Spaces. Compression only squeezes out empty intermolecular space; in solids the molecules are already closely packed.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-x01",
 "topicId": "ch1-matter",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each change of state with its correct description:",
 "pairs": [
  {
   "left": "Melting (fusion)",
   "right": "Solid changes into liquid at a fixed temperature"
  },
  {
   "left": "Evaporation",
   "right": "Liquid changes into vapour from its surface at any temperature"
  },
  {
   "left": "Condensation",
   "right": "Vapour changes into liquid, releasing heat"
  },
  {
   "left": "Sublimation",
   "right": "Solid changes directly into vapour"
  },
  {
   "left": "Freezing",
   "right": "Liquid changes into solid on cooling"
  }
 ],
 "answer": "Melting: solid→liquid at the melting point. Evaporation: surface change of liquid→vapour at any temperature. Condensation: vapour→liquid with release of latent heat. Sublimation: solid→vapour directly. Freezing: liquid→solid (reverse of melting).",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-x02",
 "topicId": "ch1-matter",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each state of matter with the behaviour of its molecules:",
 "pairs": [
  {
   "left": "Solid",
   "right": "Molecules vibrate about fixed positions"
  },
  {
   "left": "Liquid",
   "right": "Molecules slide past one another but stay together"
  },
  {
   "left": "Gas",
   "right": "Molecules move freely at high speed in all directions"
  },
  {
   "left": "Strongest cohesion",
   "right": "Found between molecules of a solid"
  },
  {
   "left": "Largest intermolecular space",
   "right": "Found between molecules of a gas"
  }
 ],
 "answer": "Solid — vibration about fixed positions (definite shape and volume). Liquid — molecules slide over each other (definite volume, no fixed shape). Gas — free, random, high-speed motion (no fixed shape or volume). Cohesion is strongest in solids; intermolecular space is largest in gases.",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-x03",
 "topicId": "ch1-matter",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each everyday observation with the process behind it:",
 "pairs": [
  {
   "left": "Wet clothes dry on a clothesline",
   "right": "Evaporation"
  },
  {
   "left": "Dew forms on grass on a cold morning",
   "right": "Condensation"
  },
  {
   "left": "Naphthalene balls shrink in a cupboard",
   "right": "Sublimation"
  },
  {
   "left": "Candle wax turns liquid near the flame",
   "right": "Melting"
  },
  {
   "left": "Water in an ice tray turns solid",
   "right": "Freezing"
  }
 ],
 "answer": "Drying clothes — evaporation of water. Dew — water vapour in air condenses on cold grass. Naphthalene — sublimes directly to vapour. Wax near flame — melts (fusion). Ice tray — water freezes (solidification).",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-s01",
 "topicId": "ch1-matter",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A sealed bottle of cold drink taken out of the refrigerator soon becomes wet on the outside. Explain where this water comes from.",
 "answer": "The water does not come from inside the bottle (it is sealed). Air always contains water vapour. When the vapour molecules touch the cold outer surface of the bottle, they lose kinetic energy, slow down and come closer together, condensing into tiny liquid droplets. This is condensation of atmospheric water vapour on a cold surface.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c1-s02",
 "topicId": "ch1-matter",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Using the kinetic theory, explain why a gas has neither a definite shape nor a definite volume.",
 "answer": "In a gas the intermolecular forces are negligible and the intermolecular spaces are very large. Each molecule therefore moves independently, at high speed, in random directions. With nothing holding the molecules together, they spread out until they occupy the whole vessel — so the gas takes both the shape and the volume of its container.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-s03",
 "topicId": "ch1-matter",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Evaporation cools the remaining liquid, but boiling does not lower the temperature of the boiling liquid. Explain both observations.",
 "answer": "In evaporation, only the most energetic surface molecules escape as vapour. Their departure lowers the average kinetic energy of the molecules left behind, so the liquid cools. In boiling, heat is continuously supplied by an external source; this heat provides the latent heat of vaporisation for molecules to escape, so the liquid stays at a constant boiling temperature — the energy of escaping molecules is replaced by the heater, not taken from the liquid.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-s04",
 "topicId": "ch1-matter",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why are cotton clothes preferred in hot summer months? Explain using the idea of evaporation.",
 "answer": "Cotton is a good absorber of water. It soaks up the sweat from our body and spreads it over a large surface area of the fabric, exposing it to air. The sweat then evaporates faster, and the latent heat needed for this evaporation is taken from the body, cooling it. Synthetic fabrics absorb little sweat, so this cooling is much less.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-s05",
 "topicId": "ch1-matter",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "State the main assumptions of the kinetic theory of matter.",
 "answer": "1. Matter is made of tiny particles (molecules); molecules of a given substance are identical in shape, size and mass. 2. Molecules are in a state of continuous random motion and therefore possess kinetic energy; this motion never stops. 3. The kinetic energy of molecules increases with temperature. 4. Molecules attract each other with intermolecular forces (cohesion between like molecules, adhesion between unlike molecules); these forces weaken as the separation between molecules increases. 5. There are empty spaces between molecules, called intermolecular spaces — smallest in solids and largest in gases.",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-m31",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Olympiad — Kinetic Theory & Diffusion",
 "question": "A gas jar filled with dense, reddish-brown bromine vapor (which is significantly heavier than air) is placed below an inverted gas jar containing clear air. After some time, the reddish-brown color spreads upward, resulting in a completely uniform mixture across both jars. Which statement provides the most accurate scientific explanation based on the Kinetic Theory of Matter?",
 "options": [
  "The upward movement occurs because intermolecular forces between air and bromine molecules are highly attractive, actively pulling the heavier vapor upward",
  "The gas particles possess high kinetic energy and are in constant, random motion, causing them to mix uniformly against the pull of gravity through continuous molecular collisions",
  "Once the reddish-brown color becomes perfectly uniform throughout both jars, a state of static equilibrium is reached, and all molecular movement stops",
  "If the temperature of both jars is significantly decreased, the rate of intermixing will increase because the denser gas will expand faster"
 ],
 "correctOption": 1,
 "answer": "According to the Kinetic Theory, gas particles possess high kinetic energy and move randomly. Even though bromine is denser than air, thermal kinetic energy drives bromine and air molecules to collide and intermix (diffuse) until uniformly distributed — overcoming gravity macroscopically. Intermolecular forces in gases are negligible (A). Uniform color means dynamic equilibrium, not stopped motion (C). Lower temperature decreases kinetic energy and slows diffusion (D).",
 "source": "icse",
 "linksTo": "phy-s1-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m32",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Olympiad — Matter & Molecules",
 "question": "Which one of the following statements is scientifically accurate regarding matter and its particles?",
 "options": [
  "Liquid wax melts at 55 °C and is converted into its liquid form",
  "Matter is anything that has mass and occupies some space",
  "A liquid can be compressed slightly but a gas cannot be compressed",
  "All molecules of different substances are identical in size and mass"
 ],
 "correctOption": 1,
 "answer": "Matter is defined as anything that has mass and occupies space — the fundamental ICSE definition. Option A is wrong: solid wax melts at ~55 °C to become liquid (not 'liquid wax melts'). Option C reverses the truth: gases compress easily due to large intermolecular spaces; liquids compress only slightly. Option D is false: molecules of different substances differ in size and mass. Note: 'A molecule may consist of one or more atoms' is also true but defines a molecule, not matter itself.",
 "source": "icse",
 "linksTo": "phy-s1-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-m33",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Olympiad — Kinetic Theory & Change of State",
 "question": "During the sublimation of a pure solid substance at its constant transition temperature, which statement is scientifically accurate regarding the kinetic energy (KE) and potential energy (PE) of its molecules?",
 "options": [
  "Both the kinetic energy and the potential energy of the molecules increase simultaneously",
  "The kinetic energy of the molecules increases, while their potential energy remains constant",
  "The kinetic energy of the molecules remains constant, while their potential energy increases",
  "The kinetic energy decreases, while the intermolecular forces of attraction become stronger"
 ],
 "correctOption": 2,
 "answer": "During sublimation at constant temperature, average kinetic energy (which depends on temperature) remains unchanged. The latent heat absorbed is used to overcome intermolecular forces, increasing the separation between molecules — hence potential energy increases sharply. KE does not increase (B) because temperature is constant. KE does not decrease (D) — that would imply cooling. Both increasing (A) would require temperature rise.",
 "source": "icse",
 "linksTo": "phy-s1-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c1-d01",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_01_matter/fig_013.jpg",
 "caption": "Molecular arrangement in a solid",
 "question": "The diagram shows molecules closely packed in a regular arrangement, each touching its neighbours. Which state of matter is represented, and which property follows directly from this arrangement?",
 "options": [
  "Gas — it can be compressed easily",
  "Solid — it has a definite shape because molecules only vibrate about fixed positions",
  "Liquid — it flows because molecules slide over each other",
  "Gas — it fills the whole container"
 ],
 "correctOption": 1,
 "answer": "Closely packed molecules with negligible intermolecular spaces and fixed positions characterise a SOLID. Strong intermolecular forces let molecules only vibrate in place, giving the solid a definite shape and volume and making it incompressible.",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c1-d02",
 "topicId": "ch1-matter",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_01_matter/fig_005.jpg",
 "caption": "Water flowing from a tap",
 "question": "The photograph shows water flowing freely from a tap. Which molecular property of liquids makes this flow possible?",
 "options": [
  "Liquid molecules are at fixed positions",
  "Intermolecular forces in a liquid are weak enough for molecules to slide past one another",
  "Liquid molecules repel each other strongly",
  "Liquids have no intermolecular forces at all"
 ],
 "correctOption": 1,
 "answer": "In a liquid the intermolecular forces are weaker than in a solid — strong enough to hold the molecules together (definite volume) but weak enough to let them slide over one another. This sliding is what we observe as flow. (Zero force would make it a gas.)",
 "source": "icse",
 "linksTo": "phy-s1-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-s2-sec_01",
 "topicId": "ch2-measurement",
 "type": "note",
 "subtopic": "1. Density and Relative Density",
 "content": "**Density** = mass ÷ volume — the mass packed into unit volume of a substance.\n\n• SI unit: **kg/m³**; CGS unit: **g/cm³**; conversion: **1 g/cm³ = 1000 kg/m³**.\n• Density of water = 1 g/cm³ = 1000 kg/m³ (at 4 °C).\n• Density is a **characteristic property**: a small piece and a large piece of the same pure substance have the SAME density — so density helps identify a substance.\n• On heating, a substance expands: same mass, larger volume → **density decreases**.\n\n**Relative density (R.D.)** = density of substance ÷ density of water.\n• It is a pure **ratio — no unit**.\n• R.D. of iron ≈ 7.8 means iron is 7.8 times as dense as water.\n\n**Useful approximate relative densities**: cork 0.25, wood 0.6–0.8, kerosene 0.8, ice 0.9, water 1.0, milk 1.03, sea water 1.025, aluminium 2.7, iron/steel 7.8, mercury 13.6.",
 "explanation": "Equal volumes of iron and wood: iron is heavier (more mass per cm³). Equal masses of iron and cotton: cotton occupies far more volume. Both statements are just density read in two directions.",
 "source": "icse",
 "examTip": "In conversions, multiply g/cm³ by 1000 to get kg/m³ — and remember relative density NEVER carries a unit.",
 "linkedMcqCount": 17
},
{
 "id": "phy-s2-sec_02",
 "topicId": "ch2-measurement",
 "type": "note",
 "subtopic": "2. Measuring Density in the Laboratory",
 "content": "Density needs two measurements: **mass** (beam balance) and **volume**.\n\n**Regular solid** (cube, cuboid, cylinder)\n• Volume from dimensions: V = l × b × h, measured with a metre scale.\n\n**Irregular solid that sinks** (stone, metal piece)\n• Use the **displacement method**: a fully submerged solid displaces water equal to its own volume.\n• With a measuring cylinder: volume = final reading − initial reading.\n• With a **eureka (displacement) can**: fill to the spout, lower the solid by a thread, collect and measure the overflow.\n\n**Irregular solid lighter than water** (cork, wax)\n• It floats, so tie it to a **sinker** (a heavy metal piece).\n• Measure volume with sinker alone submerged (V₁), then sinker + solid submerged (V₂).\n• Volume of the solid = V₂ − V₁.\n\nThen **density = mass ÷ volume**.",
 "explanation": "Precautions: the solid must be fully submerged; lower it gently (no splashing); read the measuring cylinder at the lower meniscus at eye level; the thread's volume is negligible. Never push a floating solid down with a finger — the finger's volume adds to the reading.",
 "source": "icse",
 "examTip": "For 'describe an experiment' answers, write the steps in order — mass first, volume by displacement, then the formula. The sinker idea is the favourite twist.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s2-sec_03",
 "topicId": "ch2-measurement",
 "type": "note",
 "subtopic": "3. Floatation and Its Applications",
 "content": "**Law of floatation**: a body floats in a liquid if its density is **less than or equal to** the density of the liquid; it sinks if its density is greater. A floating body displaces liquid whose **weight equals its own weight**.\n\n**Applications and examples**\n• **Ice/iceberg** floats with about **9/10 of its volume submerged** (R.D. of ice ≈ 0.9) — why icebergs endanger ships.\n• **Steel ship floats** though steel sinks: the hollow hull encloses air, so the AVERAGE density of (steel + air) is less than water.\n• **Submarine**: floods ballast tanks with sea water to increase average density and dive; blows the water out with compressed air to rise.\n• **Egg in brine**: an egg sinks in fresh water but floats when salt raises the water's density.\n• **Sea vs river**: swimming is easier in denser sea water (greater upthrust).\n• **Oil/kerosene** floats on water — lower density and immiscible.\n\n**Hydrometer**: a weighted, sealed float with a graduated stem that measures liquid density directly — based on floatation. It **sinks deeper in a less dense liquid**. A **lactometer** is a hydrometer for milk: added water lowers the milk's density, so the lactometer sinks deeper.",
 "explanation": "Why a hydrometer's bulb is heavy and stem thin: the weighted bulb keeps it floating upright; the thin stem makes a small density change give a large, readable change in depth (sensitivity). Scale readings increase DOWNWARD on the stem — denser liquid, higher float.",
 "source": "icse",
 "examTip": "'Floats in A, sinks in B' ⇒ density of A ≥ body > density of B. Practise this one-line logic — it appears in every Olympiad paper.",
 "linkedMcqCount": 28
},
{
 "id": "phy-s2-sec_09",
 "topicId": "ch2-measurement",
 "type": "note",
 "subtopic": "4. Solving Density Numericals",
 "content": "**The three forms of one formula**\n• density = mass ÷ volume\n• mass = density × volume\n• volume = mass ÷ density\n\n**Worked patterns**\n• Displacement: metal of mass 540 g raises a cylinder reading from 60 to 260 cm³ → V = 200 cm³ → density = 540/200 = **2.7 g/cm³** (aluminium).\n• Mass from density: V = 25 cm³, density 8 g/cm³ → mass = 8 × 25 = **200 g**.\n• From relative density: R.D. 0.8 → density = 0.8 × 1000 = **800 kg/m³**.\n• Float or sink: mass 200 g, volume 250 cm³ → density 0.8 g/cm³ < 1 → **floats**.\n\n**Checklist**\n• Keep units consistent: g with cm³, kg with m³.\n• 1 g/cm³ = 1000 kg/m³; 1 mL = 1 cm³.\n• Always compare densities (never masses) to decide floating/sinking.",
 "explanation": "Most errors come from mixing unit systems mid-calculation. Convert FIRST, then substitute. State the unit in every line of working — ICSE awards method marks.",
 "source": "icse",
 "examTip": "Show formula → substitution → answer with unit, in three separate lines; missing units lose a mark even with the right number.",
 "linkedMcqCount": 4
},
{
 "id": "phy-c2-m01",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The density of aluminium is 2.7 g/cm³. Its value in SI units is:",
 "options": [
  "2.7 kg/m³",
  "27 kg/m³",
  "270 kg/m³",
  "2700 kg/m³"
 ],
 "correctOption": 3,
 "answer": "To convert g/cm³ to kg/m³, multiply by 1000 (because 1 g = 10⁻³ kg and 1 cm³ = 10⁻⁶ m³, so 1 g/cm³ = 1000 kg/m³). Hence 2.7 g/cm³ = 2700 kg/m³.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m02",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A eureka (displacement) can is used in the laboratory to find the:",
 "options": [
  "Mass of an irregular solid",
  "Volume of an irregular solid",
  "Weight of a liquid",
  "Density of a liquid directly"
 ],
 "correctOption": 1,
 "answer": "When a solid is lowered into a eureka can filled up to its spout, it displaces water equal to its own VOLUME, which is collected and read in a measuring cylinder. Mass is found separately with a beam balance; then density = mass/volume.",
 "source": "icse",
 "linksTo": "phy-s2-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m03",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Ice floats on water because:",
 "options": [
  "Ice is colder than water",
  "The density of ice is less than the density of water",
  "Ice contains trapped salt",
  "Water pushes ice up with a magnetic force"
 ],
 "correctOption": 1,
 "answer": "A body floats on a liquid if its density is less than that of the liquid. Ice (density ≈ 0.92 g/cm³) is less dense than water (1 g/cm³) because water expands on freezing — so ice floats, with about nine-tenths of it submerged.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m04",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A ship made of steel floats on water, although a solid steel ball sinks. This is because:",
 "options": [
  "The paint on the ship makes it waterproof",
  "The ship's hollow shape makes its average density (steel + enclosed air) less than that of water",
  "Sea water is denser than steel",
  "Moving ships cannot sink"
 ],
 "correctOption": 1,
 "answer": "Floating depends on AVERAGE density, not the density of the material alone. The ship's hull encloses a huge volume of air, so its total mass divided by its total volume is less than the density of water. A solid steel ball has the full density of steel (≈7.8 g/cm³), so it sinks.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m05",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Relative density of a substance has no unit because it is:",
 "options": [
  "A very small quantity",
  "The ratio of the density of the substance to the density of water — units cancel out",
  "Measured only in the CGS system",
  "Always equal to one"
 ],
 "correctOption": 1,
 "answer": "Relative density = density of substance ÷ density of water. Since both quantities have the same unit, the units cancel and the result is a pure number. E.g., relative density of iron ≈ 7.8 means iron is 7.8 times as dense as water.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m06",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A solid floats in liquid A but sinks in liquid B. Which conclusion is correct?",
 "options": [
  "Liquid A is denser than liquid B",
  "Liquid B is denser than liquid A",
  "Both liquids have the same density",
  "The solid is denser than both liquids"
 ],
 "correctOption": 0,
 "answer": "Floating in A means density of solid ≤ density of A. Sinking in B means density of solid > density of B. Combining: density of A ≥ density of solid > density of B, so liquid A is denser than liquid B.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-m07",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A hydrometer sinks deeper in liquid X than in liquid Y. Which statement is correct?",
 "options": [
  "X is denser than Y",
  "X is less dense than Y",
  "Both liquids have equal density",
  "The hydrometer is faulty"
 ],
 "correctOption": 1,
 "answer": "A floating hydrometer sinks until it displaces liquid whose weight equals its own weight. In a LESS dense liquid it must displace a larger volume, so it sinks deeper. Since it sinks deeper in X, X is less dense than Y.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-m08",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A cork held at the bottom of a bucket of water is released. It rises to the surface because:",
 "options": [
  "Water currents push it sideways",
  "The density of cork is less than that of water, so the upthrust exceeds its weight",
  "Cork absorbs water and becomes lighter",
  "Air dissolved in water lifts it"
 ],
 "correctOption": 1,
 "answer": "Cork is much less dense than water. The upward force (upthrust) exerted by water on the submerged cork is greater than the cork's weight, so the net force pushes it up until it floats partly submerged at the surface.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m09",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A block has a mass of 200 g and a volume of 250 cm³. When placed in water it will:",
 "options": [
  "Sink, because its density is 1.25 g/cm³",
  "Float, because its density is 0.8 g/cm³",
  "Sink, because it is heavier than 100 g",
  "Float, because all blocks float"
 ],
 "correctOption": 1,
 "answer": "Density = mass/volume = 200 g ÷ 250 cm³ = 0.8 g/cm³. Since 0.8 g/cm³ is less than the density of water (1 g/cm³), the block floats. Whether a body floats depends on density, not on mass alone.",
 "source": "icse",
 "linksTo": "phy-s2-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m10",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When a liquid is heated, its density usually decreases because:",
 "options": [
  "Its mass decreases on heating",
  "Its volume increases on heating while the mass stays the same",
  "Its molecules become lighter",
  "Some liquid evaporates immediately"
 ],
 "correctOption": 1,
 "answer": "Heating makes the liquid expand: the same mass now occupies a larger volume, so density (mass ÷ volume) decreases. The mass of liquid and of each molecule remains unchanged.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m11",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A submarine dives below the surface when its ballast tanks are:",
 "options": [
  "Emptied of water and filled with air",
  "Filled with sea water, increasing its average density above that of sea water",
  "Sealed completely",
  "Heated to expand"
 ],
 "correctOption": 1,
 "answer": "Letting sea water into the ballast tanks increases the submarine's mass without changing its volume, so its average density rises above that of sea water and it sinks. To surface, compressed air pushes the water out, lowering the average density again.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m12",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A lactometer dipped in a milk sample sinks deeper than it does in pure milk. What does this indicate?",
 "options": [
  "The milk is extra creamy",
  "Water has been added, lowering the milk's density",
  "Sugar has been added",
  "The milk is frozen"
 ],
 "correctOption": 1,
 "answer": "Pure milk is denser than water (relative density ≈ 1.03). Adding water lowers the density of the sample, so the floating lactometer must displace more liquid and sinks deeper. A lactometer thus detects adulteration of milk with water.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m13",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Only about one-tenth of an iceberg is visible above the sea surface. This is because:",
 "options": [
  "Sea waves cover the rest of it",
  "The relative density of ice (≈0.9) means nine-tenths of its volume must stay submerged to displace water equal to its weight",
  "Ice is transparent under water",
  "The iceberg is anchored to the sea bed"
 ],
 "correctOption": 1,
 "answer": "A floating body displaces liquid equal to its own weight. Since ice is about 0.9 times as dense as water, an iceberg must submerge about 9/10 of its volume for the displaced water to balance its weight — leaving only ~1/10 visible. This makes icebergs dangerous to ships.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-m14",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Equal volumes of iron and wood are weighed. The iron is found to be much heavier. The correct conclusion is:",
 "options": [
  "Iron has a greater density than wood",
  "Iron has a greater volume than wood",
  "Wood contains no matter",
  "Equal volumes always have equal masses"
 ],
 "correctOption": 0,
 "answer": "For equal volumes, the body with more mass packed into that volume has the higher density. Density is the characteristic 'mass per unit volume' of a material — iron ≈ 7.8 g/cm³ versus wood ≈ 0.6–0.8 g/cm³.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m15",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "To find the volume of a cork (which floats on water) by the displacement method, we should:",
 "options": [
  "Push it down with a finger and read the level",
  "Tie it to a heavy sinker, note the volume with the sinker alone and with both, and subtract",
  "Crush the cork into small pieces first",
  "Use hot water so the cork sinks"
 ],
 "correctOption": 1,
 "answer": "A solid lighter than water will not submerge on its own. We attach a sinker: first measure the volume reading with the sinker alone submerged, then with sinker + cork fully submerged. The difference between the two readings gives the volume of the cork alone. A finger adds its own unknown volume.",
 "source": "icse",
 "linksTo": "phy-s2-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m16",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "To determine the density of a rectangular wooden block, the correct pair of measurements is:",
 "options": [
  "Weight by spring balance and depth in water",
  "Mass by beam balance and volume from length × breadth × height",
  "Mass by beam balance and volume by eureka can only",
  "Volume by measuring cylinder and colour of the wood"
 ],
 "correctOption": 1,
 "answer": "For a regular solid, the volume is best calculated from its dimensions (l × b × h measured with a scale), and the mass from a beam balance; then density = mass/volume. The eureka can is needed only for irregular solids.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m17",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Kerosene poured gently over water floats on it as a separate layer. The reason is that kerosene:",
 "options": [
  "Is hotter than water",
  "Is less dense than water and does not mix with it",
  "Repels water magnetically",
  "Evaporates and lifts itself"
 ],
 "correctOption": 1,
 "answer": "Kerosene (relative density ≈ 0.8) is less dense than water and is immiscible with it, so it spreads out and floats as a distinct layer on top. This is also why burning oil cannot be extinguished with water — the oil keeps floating and burning.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m18",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "It is easier to swim in sea water than in river water because sea water:",
 "options": [
  "Is warmer",
  "Has a higher density due to dissolved salts, providing greater upthrust",
  "Has smaller waves",
  "Contains more oxygen"
 ],
 "correctOption": 1,
 "answer": "Dissolved salts make sea water denser (≈1.025 g/cm³) than fresh river water. A denser liquid exerts a greater upthrust for the same submerged volume, so a swimmer's body floats more easily — less of the body needs to be submerged to balance its weight.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m19",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A metal piece of mass 540 g lowered into a measuring cylinder raises the water level from 60 cm³ to 260 cm³. The density of the metal is:",
 "options": [
  "0.37 g/cm³",
  "2.07 g/cm³",
  "2.7 g/cm³",
  "5.4 g/cm³"
 ],
 "correctOption": 2,
 "answer": "Volume of metal = rise in water level = 260 − 60 = 200 cm³. Density = mass/volume = 540 g ÷ 200 cm³ = 2.7 g/cm³ (this is the density of aluminium).",
 "source": "icse",
 "linksTo": "phy-s2-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m20",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "The density of a metal is 8 g/cm³. The mass of a piece of this metal of volume 25 cm³ is:",
 "options": [
  "0.32 g",
  "3.125 g",
  "200 g",
  "2000 g"
 ],
 "correctOption": 2,
 "answer": "Mass = density × volume = 8 g/cm³ × 25 cm³ = 200 g.",
 "source": "icse",
 "linksTo": "phy-s2-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m21",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "The relative density of a liquid is 0.8. Taking the density of water as 1000 kg/m³, the density of the liquid in SI units is:",
 "options": [
  "0.8 kg/m³",
  "8 kg/m³",
  "80 kg/m³",
  "800 kg/m³"
 ],
 "correctOption": 3,
 "answer": "Density of liquid = relative density × density of water = 0.8 × 1000 kg/m³ = 800 kg/m³.",
 "source": "icse",
 "linksTo": "phy-s2-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m22",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A hydrometer sinks deeper in alcohol than in water.\nReason (R): A floating body must displace a weight of liquid equal to its own weight, so in a less dense liquid it displaces a larger volume.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Alcohol (relative density ≈ 0.8) is less dense than water. To displace its own weight of liquid, the hydrometer must push aside a larger volume of alcohol, so it sinks deeper. R is the principle of floatation and correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-m23",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The relative density of mercury is 13.6.\nReason (R): Mercury is 13.6 times as dense as water.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Relative density is, by definition, the number of times a substance is denser than water. Mercury's density (13.6 g/cm³) divided by water's (1 g/cm³) gives 13.6. R restates exactly what A means, so it is the correct explanation.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m24",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): An egg sinks in fresh water but floats when enough salt is dissolved in the water.\nReason (R): Dissolving salt increases the density of the water above that of the egg.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "An egg is slightly denser than fresh water, so it sinks. Salt raises the water's density; once the solution becomes denser than the egg, the egg floats. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m25",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A ship made of steel floats on water.\nReason (R): Steel is less dense than water.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true — ships do float. But R is false: steel (≈7.8 g/cm³) is much denser than water. The ship floats because its hollow shape encloses air, making its AVERAGE density less than that of water.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m26",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Density is a characteristic property of a pure substance.\nReason (R): The density of a pure substance at a given temperature is the same whether we take a small piece or a large piece.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Doubling the piece doubles both mass and volume, so their ratio (density) is unchanged. Because each pure substance has its own fixed density, density can identify the substance — which is what makes it a characteristic property. R explains A.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m27",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. The SI unit of density is kg/m³.\nII. Relative density is measured in g/cm³.\nIII. 1 g/cm³ equals 1000 kg/m³.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I and III are correct. II is wrong — relative density is a ratio of two densities and therefore has NO unit at all.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-m28",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about a body floating in a liquid:\nI. Its density is less than or equal to the density of the liquid.\nII. The weight of liquid it displaces equals its own weight.\nIII. The whole body must stay above the liquid surface.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are the conditions and principle of floatation. III is wrong — a floating body is usually partly submerged (e.g., nine-tenths of an iceberg is below water); only the balance of weight and upthrust matters.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-m29",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about a hydrometer:\nI. It works on the principle of floatation.\nII. It must be weighed on a balance before each use.\nIII. Its scale readings increase downwards (denser liquids give higher readings nearer the bottom of the stem).\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I is correct — a hydrometer floats and sinks to different depths in liquids of different densities. III is correct — in a denser liquid it floats higher, so the larger density markings are lower on the stem. II is wrong: it is read directly at the liquid surface, no weighing needed.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-m30",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Application",
 "question": "A balloon filled with helium rises in air, but the same balloon filled with exhaled breath sinks slowly. The best explanation is:",
 "options": [
  "Helium is hotter than breath",
  "The average density of the helium balloon is less than that of air, while the breath-filled balloon is slightly denser than air",
  "Breath contains water which is heavy",
  "Helium pushes air away magnetically"
 ],
 "correctOption": 1,
 "answer": "Floating and sinking apply to gases too. Helium is much less dense than air, so the balloon's average density (gas + rubber) is below that of air and the upthrust of air lifts it. Exhaled breath is about as dense as air, so with the rubber's weight added the balloon is slightly denser than air and sinks.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-t01",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Density is defined as the mass per unit volume of a substance.",
 "correctAnswer": "true",
 "answer": "True. Density = mass ÷ volume. Its SI unit is kg/m³ and CGS unit is g/cm³.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t02",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Relative density is measured in kg/m³.",
 "correctAnswer": "false",
 "answer": "False. Relative density is a pure ratio (density of substance ÷ density of water) and has NO unit.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t03",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A body will float in a liquid if its density is greater than the density of the liquid.",
 "correctAnswer": "false",
 "answer": "False. A body floats only if its density is LESS than (or equal to) the density of the liquid; if its density is greater, it sinks.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t04",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The density of water in CGS units is 1 g/cm³.",
 "correctAnswer": "true",
 "answer": "True. Water has a density of 1 g/cm³ (= 1000 kg/m³) at 4 °C, which is why it is used as the reference substance for relative density.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t05",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A hydrometer measures the density of solids.",
 "correctAnswer": "false",
 "answer": "False. A hydrometer measures the density (or relative density) of LIQUIDS. It floats in the liquid and the reading is taken at the liquid surface on its stem.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t06",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "When a stone is fully submerged in a measuring cylinder, the rise in water level equals the volume of the stone.",
 "correctAnswer": "true",
 "answer": "True. A fully submerged solid displaces water equal to its own volume — this displacement method gives the volume of irregular solids.",
 "source": "icse",
 "linksTo": "phy-s2-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-t07",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Heating a given mass of liquid increases its density.",
 "correctAnswer": "false",
 "answer": "False. Heating expands the liquid: the same mass occupies MORE volume, so the density DECREASES.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-t08",
 "topicId": "ch2-measurement",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A floating iceberg has most of its volume below the water surface.",
 "correctAnswer": "true",
 "answer": "True. Ice has a relative density of about 0.9, so roughly nine-tenths of an iceberg stays submerged; only about one-tenth shows above water.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-f01",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The SI unit of density is kg/_______ (write the unit of volume).",
 "blankAnswer": "m³",
 "answer": "kg/m³ — kilogram per cubic metre. In CGS the unit is g/cm³; 1 g/cm³ = 1000 kg/m³.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-f02",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The ratio of the density of a substance to the density of water is called its _______ density.",
 "blankAnswer": "relative",
 "answer": "Relative density — a pure number with no unit, also called specific gravity.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-f03",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "An instrument that measures the density of a liquid directly by floating in it is called a _______.",
 "blankAnswer": "hydrometer",
 "answer": "Hydrometer — based on the principle of floatation; it sinks deeper in less dense liquids.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-f04",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The special hydrometer used to test the purity of milk is called a _______.",
 "blankAnswer": "lactometer",
 "answer": "Lactometer — pure milk is denser than water, so added water makes the lactometer sink deeper.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-f05",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "A body sinks in a liquid when its density is _______ than the density of the liquid.",
 "blankAnswer": "greater",
 "answer": "Greater. Sinking: density of body > density of liquid; floating: density of body < density of liquid.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-f06",
 "topicId": "ch2-measurement",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "1 g/cm³ is equal to _______ kg/m³.",
 "blankAnswer": "1000",
 "answer": "1000. To convert g/cm³ to kg/m³, multiply by 1000.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-x01",
 "topicId": "ch2-measurement",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each instrument or method with what it measures:",
 "pairs": [
  {
   "left": "Beam balance",
   "right": "Mass of a body"
  },
  {
   "left": "Eureka can with measuring cylinder",
   "right": "Volume of an irregular solid"
  },
  {
   "left": "Hydrometer",
   "right": "Density of a liquid"
  },
  {
   "left": "Lactometer",
   "right": "Purity (density) of milk"
  },
  {
   "left": "Measuring cylinder",
   "right": "Volume of a liquid"
  }
 ],
 "answer": "Beam balance — mass. Eureka can — volume of irregular solids by displacement. Hydrometer — liquid density by floatation. Lactometer — detects water added to milk. Measuring cylinder — liquid volume in cm³/mL.",
 "source": "icse",
 "linksTo": "phy-s2-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-x02",
 "topicId": "ch2-measurement",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each substance with its approximate relative density:",
 "pairs": [
  {
   "left": "Water",
   "right": "1.0"
  },
  {
   "left": "Ice",
   "right": "0.9"
  },
  {
   "left": "Iron/steel",
   "right": "7.8"
  },
  {
   "left": "Mercury",
   "right": "13.6"
  },
  {
   "left": "Kerosene",
   "right": "0.8"
  }
 ],
 "answer": "Water is the reference (1.0). Ice (0.9) floats on water. Iron (7.8) sinks. Mercury (13.6) is so dense that even iron floats on it. Kerosene (0.8) floats on water as a separate layer.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-x03",
 "topicId": "ch2-measurement",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each floating/sinking situation with its explanation:",
 "pairs": [
  {
   "left": "Steel ship floats",
   "right": "Hollow shape lowers average density below water"
  },
  {
   "left": "Submarine dives",
   "right": "Ballast tanks filled with water raise average density"
  },
  {
   "left": "Iceberg floats with little visible",
   "right": "Ice density ≈ 0.9 of water, so ~9/10 submerged"
  },
  {
   "left": "Egg floats in brine",
   "right": "Salt raises the liquid's density above the egg's"
  },
  {
   "left": "Cork pops up from under water",
   "right": "Upthrust on cork exceeds its weight"
  }
 ],
 "answer": "Each case is decided by comparing average density of the body with the density of the liquid: lower → floats, higher → sinks; for floating bodies, the displaced liquid's weight equals the body's weight.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-s01",
 "topicId": "ch2-measurement",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Describe, step by step, how you would find the density of a small irregular stone in the laboratory.",
 "answer": "1. Find the mass m of the stone using a beam balance. 2. Fill a eureka can with water up to its spout and place a measuring cylinder under the spout (or partly fill a measuring cylinder and note the initial reading V₁). 3. Gently lower the stone, tied to a thread, until fully submerged. 4. Measure the volume of water collected in the cylinder (or note the new reading V₂); the volume of the stone V = water displaced = V₂ − V₁. 5. Density = m/V. The stone must be fully submerged and no water should splash out.",
 "source": "icse",
 "linksTo": "phy-s2-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-s02",
 "topicId": "ch2-measurement",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why does a hydrometer have a heavy bulb at the bottom and a thin graduated stem at the top?",
 "answer": "The heavy bulb (weighted with lead shots or mercury) keeps the hydrometer floating UPRIGHT and stable in the liquid. The stem is made thin so that even a small change in the liquid's density produces a large, easily readable change in how deep the stem sinks — making the instrument sensitive. The reading is taken on the stem at the liquid surface.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-s03",
 "topicId": "ch2-measurement",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A piece of wax floats in water but sinks in alcohol. What can you conclude about the densities of wax, water and alcohol?",
 "answer": "Wax floats in water, so density of wax < density of water (1 g/cm³). Wax sinks in alcohol, so density of wax > density of alcohol (≈0.8 g/cm³). Therefore: density of alcohol < density of wax < density of water — the wax's density lies between about 0.8 and 1 g/cm³ (it is ≈0.95 g/cm³).",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c2-s04",
 "topicId": "ch2-measurement",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain how a submarine is able to dive into the sea and also return to the surface.",
 "answer": "A submarine has ballast tanks that can hold water or air. To dive, the tanks are flooded with sea water: the submarine's weight (and average density) increases beyond that of sea water, so it sinks. To rise, compressed air is forced into the tanks, pushing the water out: the average density falls below that of sea water and the upthrust brings the submarine up. It works entirely on the relationship between average density and floatation.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-s05",
 "topicId": "ch2-measurement",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Two identical bottles are filled completely — one with honey and one with water. The honey bottle feels distinctly heavier. Explain why, and state which liquid has the higher relative density.",
 "answer": "Both bottles hold the same VOLUME of liquid. The honey bottle has more mass in the same volume, so honey has a higher density (mass per unit volume) than water. Since relative density = density of liquid ÷ density of water, honey's relative density is greater than 1 (about 1.4), while water's is exactly 1.",
 "source": "icse",
 "linksTo": "phy-s2-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c2-d01",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_02_physical_quantities_and_measurement/fig_029.jpg",
 "caption": "Iron block sinks; wooden and cork blocks float",
 "question": "In the figure, the iron block lies at the bottom of the beaker while the wooden and cork blocks float on the water. The correct conclusion is:",
 "options": [
  "Iron is heavier than wood, so weight decides floating",
  "The density of iron is greater than that of water, while wood and cork are less dense than water",
  "Water pushes only on wooden objects",
  "Cork floats because it is the smallest block"
 ],
 "correctOption": 1,
 "answer": "Floating or sinking is decided by DENSITY relative to the liquid, not by weight or size alone. Iron (≈7.8 g/cm³) is denser than water (1 g/cm³) and sinks; wood (≈0.7) and cork (≈0.25) are less dense and float — cork floating higher because its density is lowest.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c2-d02",
 "topicId": "ch2-measurement",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_02_physical_quantities_and_measurement/fig_033.jpg",
 "caption": "A hydrometer (lactometer)",
 "question": "The instrument shown — a weighted glass bulb with a long graduated stem — floats upright in a liquid to measure its density. On which principle does it work?",
 "options": [
  "Pascal's law of pressure",
  "The principle of floatation — it sinks until the displaced liquid's weight equals its own weight",
  "Archimedes' screw",
  "The principle of moments"
 ],
 "correctOption": 1,
 "answer": "A hydrometer works on the principle of floatation: it sinks deeper in a less dense liquid (more volume must be displaced to balance its weight) and floats higher in a denser one. The heavy bulb keeps it upright; the reading is taken on the stem at the liquid surface.",
 "source": "icse",
 "linksTo": "phy-s2-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-s3-sec_01",
 "topicId": "ch3-force",
 "type": "note",
 "subtopic": "1. Force: A Push or a Pull",
 "content": "A **force** is a push or a pull that can change a body's state of rest or motion, its speed, its direction, or its shape and size.\n\n• SI unit: **newton (N)**.\n• **Contact forces** act only on touching: muscular force, friction, normal reaction.\n• **Non-contact forces** act at a distance: gravitational, magnetic, electrostatic.\n\nA force can produce two kinds of effect on a rigid body:\n• **Translational motion** — moving the body bodily from one place to another.\n• **Rotational (turning) motion** — turning it about an axis or pivot (a door about its hinges, a wheel about its axle). The turning effect is studied as the **moment of force**.",
 "explanation": "This chapter builds on the idea of force from earlier classes and then concentrates on two new quantities: moment of force (turning) and pressure (force spread over area).",
 "source": "icse",
 "examTip": "Classify forces in two boxes — contact and non-contact — with two examples each; a one-mark classification appears almost every year."
},
{
 "id": "phy-s3-sec_02",
 "topicId": "ch3-force",
 "type": "note",
 "subtopic": "2. Turning Effect of Force: Moment and Couple",
 "content": "**Moment of force** (turning effect) about an axis:\n\n• **Moment = force × perpendicular distance** of the force's line of action from the axis.\n• SI unit: **newton metre (N m)** — written N m, never joule, because moment is not work.\n• It can be **clockwise** or **anticlockwise**.\n• A force passing THROUGH the axis has zero perpendicular distance → **zero turning effect**.\n\n**To get a large turning effect with a small force, apply it far from the axis:**\n• Door handle fixed at the edge farthest from the hinges.\n• A long spanner loosens a tight nut easily.\n• A long steering wheel radius, bicycle handlebars, see-saw seats at the ends.\n\n**Couple**: two equal, parallel, OPPOSITE forces acting at different points — net force is zero, but both moments act in the SAME rotational direction, so the body rotates.\n• Examples: turning a steering wheel, winding a key, opening a tap, turning a screwdriver.",
 "explanation": "Why both moments of a couple add: if both forces turn the wheel clockwise, their turning effects reinforce even though the forces themselves cancel as pushes.",
 "source": "icse",
 "examTip": "Always convert the distance to metres before computing a moment (40 cm = 0.4 m) — the classic numerical trap.",
 "linkedMcqCount": 13
},
{
 "id": "phy-s3-sec_03",
 "topicId": "ch3-force",
 "type": "note",
 "subtopic": "3. Thrust and Pressure — Solids, Liquids, Atmosphere",
 "content": "**Thrust** = force acting normally (perpendicular) on a surface, in newtons.\n**Pressure** = thrust ÷ area; SI unit **pascal (Pa)** = 1 N/m².\n\n**Same force, smaller area → larger pressure**\n• Cutting/piercing tools are sharpened: knife edge, nail tip, needle.\n**Same force, larger area → smaller pressure**\n• Broad school-bag straps, camel's broad feet on sand, skis on snow, wide building foundations, tank caterpillar tracks, porter's head pad, broad sleepers under rails.\n\n**Liquid pressure: P = h ρ g** (depth × density × gravity)\n• Increases with **depth** — dams are thicker at the base; the lowest hole in a tank spurts farthest; deep-sea divers need strengthened suits.\n• Increases with **density** — sea water presses more than fresh water at the same depth.\n• Does **NOT** depend on the shape, width or volume of the vessel.\n• At a point inside a liquid, pressure acts **equally in all directions**.\n\n**Atmospheric pressure** — the weight of the air column above us (~10⁵ Pa at sea level; measured with a **barometer**).\n• Acts equally in all directions; decreases with altitude (mountaineers' nose-bleeds).\n• Explains: drinking straw, syringe, dropper, rubber sucker — 'suction' is really the atmosphere PUSHING liquid toward a low-pressure region.\n• We are not crushed because the pressure of air and fluids inside our body balances it.",
 "explanation": "Three formulas to keep apart:\n• Pressure on a surface: P = F/A.\n• Pressure at depth h in a liquid: P = hρg.\n• Every 10 m of water adds about one atmosphere (10 m × 1000 kg/m³ × 10 m/s² = 10⁵ Pa).",
 "source": "icse",
 "examTip": "'Liquid pressure depends on the vessel's shape' is FALSE — the most repeated assertion-reason trick in this chapter.",
 "linkedMcqCount": 35
},
{
 "id": "phy-s3-sec_04",
 "topicId": "ch3-force",
 "type": "note",
 "subtopic": "4. A Liquid Seeks Its Own Level",
 "content": "In interconnected vessels — whatever their shapes or widths — a liquid at rest stands at the **same horizontal level** in all of them.\n\n**Why:** at the connected base, points at the same depth must have the same pressure. If one column stood higher, the pressure under it would be greater and liquid would flow until the levels equalised. Since liquid pressure depends only on depth (not vessel shape), equal pressure forces equal heights.\n\n**Everyday examples**\n• Tea stands at the same level in a teapot and its spout.\n• A water-level tube (transparent hose) used by masons to mark equal heights across a room.\n• Water tanks and supply pipes — water rises in house pipes to the level of the overhead reservoir.",
 "explanation": "This is a direct consequence of P = hρg: same liquid, same depth ⇒ same pressure; any difference in level creates a pressure difference that drives flow until it disappears.",
 "source": "icse",
 "examTip": "Draw the classic vases-of-different-shapes diagram with one dotted horizontal line through all the surfaces — the line IS the answer.",
 "linkedMcqCount": 3
},
{
 "id": "phy-s3-sec_14",
 "topicId": "ch3-force",
 "type": "note",
 "subtopic": "5. Solving Numericals: Moment and Pressure",
 "content": "**Formulas**\n• Moment = F × d (N m); d is the PERPENDICULAR distance in metres.\n• Pressure = F ÷ A (Pa); A in m².\n• Liquid pressure = h ρ g (Pa); h in m, ρ in kg/m³, g ≈ 10 m/s².\n\n**Worked patterns**\n• Moment: 2.5 N at 40 cm from the nut → 2.5 × 0.4 = **1 N m**.\n• Pressure: 400 N on 0.5 m² → 400 ÷ 0.5 = **800 Pa** (dividing by a fraction makes the answer bigger).\n• Liquid: depth 10 m of water → 10 × 1000 × 10 = **100,000 Pa** = 10⁵ Pa ≈ 1 atmosphere.\n\n**Checklist**\n• cm → m before substituting.\n• Use the perpendicular distance, not just any distance.\n• For liquid pressure, the depth is measured from the FREE SURFACE down to the point.",
 "explanation": "If an answer looks absurdly large or small, check the unit conversion first — cm² to m² (divide by 10,000) is the most-missed step in pressure problems.",
 "source": "icse",
 "examTip": "Memorise '10 m of water ≈ 1 atm ≈ 10⁵ Pa' — it lets you sanity-check every hρg answer instantly.",
 "linkedMcqCount": 3
},
{
 "id": "phy-c3-m01",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The handle of a door is fixed as far from the hinges as possible because:",
 "options": [
  "It looks better there",
  "A larger perpendicular distance from the axis gives a larger turning moment for the same force",
  "The door is heavier near the hinges",
  "The hinges would break otherwise"
 ],
 "correctOption": 1,
 "answer": "Moment of force = force × perpendicular distance from the axis of rotation. Placing the handle far from the hinges maximises this distance, so even a small force produces a large turning effect and the door opens easily.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m02",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The SI unit of moment of force is:",
 "options": [
  "newton (N)",
  "newton metre (N m)",
  "newton per metre (N/m)",
  "joule per second (J/s)"
 ],
 "correctOption": 1,
 "answer": "Moment of force = force (N) × perpendicular distance (m), so its unit is newton metre (N m). Note: although N m looks like the joule, moment is a turning effect, not work, so it is always written as N m.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m03",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A mechanic cannot loosen a tight nut with a short spanner. He should:",
 "options": [
  "Use a longer spanner, increasing the perpendicular distance of his force from the nut",
  "Apply the same force closer to the nut",
  "Hit the nut with the spanner",
  "Heat the spanner first"
 ],
 "correctOption": 0,
 "answer": "To increase the turning moment without increasing the force, increase the perpendicular distance from the axis: a longer spanner (or a pipe slipped over the handle) multiplies the turning effect of the same applied force.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m04",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Pressure is defined as:",
 "options": [
  "The total force acting on a body",
  "The thrust acting per unit area of a surface",
  "The force acting along a surface",
  "The weight of a body"
 ],
 "correctOption": 1,
 "answer": "Pressure = thrust ÷ area, where thrust is the force acting normally (perpendicular) on a surface. Its SI unit is the pascal (Pa), equal to 1 N/m².",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m05",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A sharp knife cuts vegetables easily while a blunt knife does not, even with the same force, because the sharp edge:",
 "options": [
  "Is made of harder steel",
  "Has a much smaller area of contact, producing a much larger pressure",
  "Weighs less",
  "Is smoother"
 ],
 "correctOption": 1,
 "answer": "For the same thrust, pressure = thrust/area increases as the contact area decreases. A sharp edge concentrates the force on a very small area, producing enough pressure to cut through.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m06",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A camel walks easily on sand while a horse, of similar weight, finds it difficult. This is because the camel's broad feet:",
 "options": [
  "Grip the sand better",
  "Spread its weight over a larger area, reducing the pressure on the sand",
  "Are lighter than hooves",
  "Repel sand particles"
 ],
 "correctOption": 1,
 "answer": "The camel's large flat feet increase the area of contact, so the pressure (weight ÷ area) on the soft sand is small and the feet do not sink deep. A horse's small hooves exert large pressure and sink into the sand.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m07",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "School bags are given broad shoulder straps so that:",
 "options": [
  "They look stylish",
  "The weight is spread over a larger area of the shoulder, reducing pressure and discomfort",
  "More books fit inside",
  "The straps last longer"
 ],
 "correctOption": 1,
 "answer": "A broad strap increases the area over which the bag's weight acts on the shoulder. Larger area means smaller pressure (P = F/A), so the strap does not cut painfully into the shoulder.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m08",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Liquid pressure at a point inside a liquid does NOT depend on:",
 "options": [
  "The depth of the point below the surface",
  "The density of the liquid",
  "The acceleration due to gravity",
  "The shape and width of the container"
 ],
 "correctOption": 3,
 "answer": "Liquid pressure P = h × ρ × g depends on depth (h), density (ρ) and gravity (g) — but NOT on the shape, width or total volume of the vessel. This is why a liquid stands at the same level in all arms of a vessel of any shape.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m09",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The wall of a dam is made much thicker at the bottom than at the top because:",
 "options": [
  "More concrete makes it look stronger",
  "Liquid pressure increases with depth, so the base must withstand the greatest pressure",
  "The top carries the weight of the water",
  "Bottom layers of water are colder"
 ],
 "correctOption": 1,
 "answer": "Pressure in a liquid increases with depth (P = hρg). The water near the bottom of the reservoir pushes on the dam with far greater pressure than water near the top, so the dam is built thickest at its base.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m10",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Water is poured into the vertical arms of a U-shaped tube. At rest, the water stands:",
 "options": [
  "Higher in the wider arm",
  "Higher in the narrower arm",
  "At the same level in both arms",
  "At a level that depends on the tube's colour"
 ],
 "correctOption": 2,
 "answer": "A liquid seeks its own level: at the same depth the pressure must be equal, so the free surfaces in both arms settle at the same horizontal level regardless of the width or shape of the arms.",
 "source": "icse",
 "linksTo": "phy-s3-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m11",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A deep-sea diver wears a specially strengthened suit because:",
 "options": [
  "Sea water is very cold",
  "The pressure deep in the sea is enormous due to the great depth of water above",
  "Sharks may attack",
  "Sunlight cannot reach there"
 ],
 "correctOption": 1,
 "answer": "Pressure increases with depth as P = hρg. Hundreds of metres below the surface, the water above exerts a crushing pressure from all directions; the suit protects the diver's body from this pressure.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m12",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Holes are made near the BOTTOM of the side wall of a water tank rather than near the top for emptying it, because water flows out fastest there. The physics reason is:",
 "options": [
  "Water is heavier at the bottom",
  "Liquid pressure is greatest at the greatest depth, pushing water out with the greatest speed",
  "The bottom hole is bigger",
  "Air pressure is lower at the bottom"
 ],
 "correctOption": 1,
 "answer": "At greater depth the liquid pressure hρg is larger. A hole near the bottom therefore has the largest pressure behind it and water spurts out fastest and farthest from it — a direct demonstration that liquid pressure increases with depth.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m13",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Atmospheric pressure acts:",
 "options": [
  "Only downwards",
  "Only upwards",
  "Equally in all directions at a given point",
  "Only on horizontal surfaces"
 ],
 "correctOption": 2,
 "answer": "Air is a fluid, and fluid pressure at a point acts equally in ALL directions. This is why we are not crushed: the air inside our body and the blood pressure balance the external atmospheric pressure from every direction.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m14",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When you suck through a straw, the drink rises into your mouth because:",
 "options": [
  "Your mouth attracts the liquid",
  "Sucking lowers the air pressure inside the straw, and the higher atmospheric pressure on the drink's surface pushes the liquid up",
  "The straw pumps the liquid",
  "The liquid becomes lighter inside the straw"
 ],
 "correctOption": 1,
 "answer": "Sucking removes air from the straw, reducing the pressure inside it. The atmosphere, still pressing on the drink's surface in the glass, pushes the liquid up the straw towards the lower pressure region. It is atmospheric pressure — not 'suction' — that lifts the drink.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m15",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A rubber sucker pressed flat against a smooth wall sticks to it because:",
 "options": [
  "Rubber is naturally sticky",
  "Pressing squeezes out the air, and the atmospheric pressure outside holds the sucker against the wall",
  "The wall is magnetic",
  "Friction alone holds it"
 ],
 "correctOption": 1,
 "answer": "Pressing the sucker expels the air between it and the wall, creating a region of very low pressure inside. The much larger atmospheric pressure outside pushes the sucker firmly onto the wall. It works poorly on rough walls because air leaks back in.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m16",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Nails and pins are given sharp pointed tips so that:",
 "options": [
  "They can be seen easily",
  "The applied force acts on a very small area, creating a huge pressure that drives them in",
  "They weigh less",
  "They do not rust"
 ],
 "correctOption": 1,
 "answer": "A pointed tip has an extremely small area. The hammer's force concentrated on this tiny area produces an enormous pressure, enough to pierce wood or a wall. The same force on a blunt tip would produce far less pressure.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m17",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Two taps X and Y are fitted on a tall water tank — X near the top and Y near the bottom. When both are opened, the correct observation is:",
 "options": [
  "Water flows with equal speed from both",
  "Water flows faster from X",
  "Water flows faster from Y",
  "No water flows from Y"
 ],
 "correctOption": 2,
 "answer": "Tap Y is at a greater depth below the free water surface, so the pressure behind it (hρg) is greater, and water emerges faster and travels farther. Pressure — and hence speed of efflux — increases with depth.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m18",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "While turning a steering wheel, a driver applies two equal and opposite forces on opposite sides of the rim (a couple). The wheel turns because:",
 "options": [
  "The two forces cancel and nothing happens",
  "Both forces produce moments in the SAME rotational direction about the centre",
  "Only one of the forces acts at a time",
  "The wheel is frictionless"
 ],
 "correctOption": 1,
 "answer": "Equal, opposite, parallel forces acting at different points form a couple. Although their net force is zero, both produce turning moments in the same sense (e.g., both clockwise) about the centre, so their turning effects ADD and the wheel rotates.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c3-m19",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A force of 2.5 N is applied on a spanner at a perpendicular distance of 40 cm from the centre of a nut. The moment of force about the nut is:",
 "options": [
  "100 N m",
  "10 N m",
  "1 N m",
  "0.1 N m"
 ],
 "correctOption": 2,
 "answer": "Convert distance to metres: 40 cm = 0.4 m. Moment = force × perpendicular distance = 2.5 N × 0.4 m = 1 N m.",
 "source": "icse",
 "linksTo": "phy-s3-sec_14",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m20",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A box weighing 400 N rests on a surface with its base of area 0.5 m². The pressure exerted on the surface is:",
 "options": [
  "200 Pa",
  "400 Pa",
  "800 Pa",
  "2000 Pa"
 ],
 "correctOption": 2,
 "answer": "Pressure = thrust ÷ area = 400 N ÷ 0.5 m² = 800 Pa. (Note: dividing by a number smaller than 1 gives a larger result — smaller base, larger pressure.)",
 "source": "icse",
 "linksTo": "phy-s3-sec_14",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m21",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "The pressure due to water (density 1000 kg/m³) at a depth of 10 m, taking g = 10 m/s², is:",
 "options": [
  "1000 Pa",
  "10,000 Pa",
  "100,000 Pa",
  "1,000,000 Pa"
 ],
 "correctOption": 2,
 "answer": "P = hρg = 10 m × 1000 kg/m³ × 10 m/s² = 100,000 Pa (= 10⁵ Pa, about equal to one atmosphere). Every 10 m of water depth adds roughly one atmosphere of pressure.",
 "source": "icse",
 "linksTo": "phy-s3-sec_14",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m22",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): It is easier to push open a swing door near its free edge than near its hinges.\nReason (R): For the same force, a larger perpendicular distance from the axis of rotation produces a larger moment of force.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Moment = force × perpendicular distance. Pushing near the free edge maximises the distance from the hinge axis, so the same force produces a larger turning effect. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m23",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A dam is built thicker at its base than at its top.\nReason (R): The pressure exerted by a liquid increases with depth.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Both are true and R is exactly why dams are thickest at the bottom — the deepest water exerts the greatest pressure (P = hρg) on the dam wall.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m24",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The pressure of a liquid at a given depth depends on the shape of the vessel.\nReason (R): Liquid pressure at a point depends on the depth of the point and the density of the liquid.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 3,
 "answer": "A is FALSE — liquid pressure is independent of the vessel's shape or width. R is TRUE: P = hρg depends only on depth, density and g. So the correct choice is 'A is false but R is true'.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m25",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Railway tracks are laid on broad wooden or concrete sleepers.\nReason (R): A larger area of contact reduces the pressure exerted by the train on the ground.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "The enormous weight of a train, spread by the sleepers over a large area of ground, produces a small enough pressure that the rails do not sink into the earth. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m26",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A liquid filled in interconnected vessels of different shapes stands at the same height in all of them.\nReason (R): At points at the same depth in a connected liquid at rest, the pressure must be the same.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "If the levels differed, the pressure at the connected base would differ between arms and liquid would flow until the levels equalised. Equal pressure at equal depth forces equal surface levels — 'a liquid seeks its own level'. R explains A.",
 "source": "icse",
 "linksTo": "phy-s3-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c3-m27",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A fountain pen sometimes leaks ink in an aircraft flying at high altitude.\nReason (R): Atmospheric pressure decreases with altitude, so the higher-pressure air trapped inside the pen pushes the ink out.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "At high altitude the cabin pressure is lower than at the ground. Air sealed inside the pen at ground pressure is now at higher pressure than the surroundings, so it expands and forces ink out of the nib. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c3-m28",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. The turning effect of a force is called the moment of force.\nII. Moment of force = force × perpendicular distance of the force from the axis of rotation.\nIII. A force passing through the axis of rotation produces the maximum turning effect.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct definitions. III is wrong — a force whose line of action passes THROUGH the axis has zero perpendicular distance, hence ZERO moment; it cannot turn the body at all.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-m29",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about pressure:\nI. Pressure increases when the same force acts on a smaller area.\nII. The SI unit of pressure is the pascal (1 Pa = 1 N/m²).\nIII. Skis and snowboards work by increasing the pressure on snow.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — skis have a LARGE area precisely to REDUCE the pressure on soft snow so the skier does not sink in.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-m30",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about atmospheric pressure:\nI. It is caused by the weight of the column of air above us.\nII. It decreases as we go up a mountain.\nIII. It acts only in the downward direction.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct: the atmosphere's weight causes the pressure, and the air column above us shortens (and thins) with altitude. III is wrong — being a fluid, air exerts pressure equally in ALL directions.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-t01",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The moment of a force depends only on the magnitude of the force.",
 "correctAnswer": "false",
 "answer": "False. Moment of force depends on BOTH the magnitude of the force AND its perpendicular distance from the axis of rotation (moment = F × d).",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-t02",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "For a given thrust, decreasing the area of contact increases the pressure.",
 "correctAnswer": "true",
 "answer": "True. Pressure = thrust/area, so halving the area doubles the pressure. This is why knives are sharpened and nails are pointed.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-t03",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The pressure at a point inside a liquid is the same in all directions.",
 "correctAnswer": "true",
 "answer": "True. At any point in a liquid at rest, pressure acts equally in all directions — upwards, downwards and sideways.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-t04",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Liquid pressure depends on the shape of the containing vessel.",
 "correctAnswer": "false",
 "answer": "False. Liquid pressure depends only on depth, density of the liquid and g (P = hρg) — NOT on the shape, width or volume of the vessel.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-t05",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Atmospheric pressure decreases as we go to higher altitudes.",
 "correctAnswer": "true",
 "answer": "True. With altitude, the column of air above becomes shorter and the air becomes less dense, so atmospheric pressure decreases. This is why mountaineers can suffer nose-bleeding at great heights.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-t06",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A force can produce a turning effect even if its line of action passes through the axis of rotation.",
 "correctAnswer": "false",
 "answer": "False. If the line of action passes through the axis, the perpendicular distance is zero, so the moment (F × 0) is zero — no turning effect is produced.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-t07",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "High-heeled shoes exert more pressure on the ground than flat shoes worn by the same person.",
 "correctAnswer": "true",
 "answer": "True. The same weight acts on the tiny area of the heel, so the pressure is very large — which is why thin heels sink into soft ground while flat soles do not.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-t08",
 "topicId": "ch3-force",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A liquid kept in interconnected vessels of different shapes stands at different heights in each vessel.",
 "correctAnswer": "false",
 "answer": "False. A liquid seeks its own level — it stands at the SAME height in all interconnected vessels, whatever their shapes, because pressure at the connected base must be equal.",
 "source": "icse",
 "linksTo": "phy-s3-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f01",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The turning effect of a force about an axis is called the _______ of force.",
 "blankAnswer": "moment",
 "answer": "Moment of force = force × perpendicular distance from the axis; SI unit N m.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f02",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The SI unit of pressure is the _______.",
 "blankAnswer": "pascal",
 "answer": "Pascal (Pa); 1 Pa = 1 N/m² — the pressure when a force of 1 newton acts normally on 1 square metre.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f03",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The force acting normally (perpendicular) on a surface is called _______.",
 "blankAnswer": "thrust",
 "answer": "Thrust — measured in newtons; pressure = thrust ÷ area.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f04",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The pressure inside a liquid _______ with increase in depth.",
 "blankAnswer": "increases",
 "answer": "Increases — P = hρg, so doubling the depth doubles the liquid pressure. Hence dams are thicker at the base.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f05",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The instrument used to measure atmospheric pressure is the _______.",
 "blankAnswer": "barometer",
 "answer": "Barometer — the mercury barometer balances a column of about 76 cm of mercury against the atmosphere at sea level.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-f06",
 "topicId": "ch3-force",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Two equal, parallel and opposite forces acting at different points on a body form a _______.",
 "blankAnswer": "couple",
 "answer": "Couple — its net force is zero but it produces pure rotation (e.g., turning a steering wheel, winding a key, opening a tap).",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-x01",
 "topicId": "ch3-force",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each everyday practice with the physics principle it uses:",
 "pairs": [
  {
   "left": "Sharp blade on a knife",
   "right": "Small area → large pressure"
  },
  {
   "left": "Wide foundation of a building",
   "right": "Large area → small pressure on soil"
  },
  {
   "left": "Long handle on a spanner",
   "right": "Large distance → large moment of force"
  },
  {
   "left": "Dam thicker at the base",
   "right": "Liquid pressure increases with depth"
  },
  {
   "left": "Drinking with a straw",
   "right": "Atmospheric pressure pushes liquid up"
  }
 ],
 "answer": "Cutting tools concentrate force (P = F/A); foundations and straps spread it. Long handles increase the moment (F × d). Dams answer to P = hρg. A straw works because the atmosphere pushes liquid toward the low-pressure region created by sucking.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-x02",
 "topicId": "ch3-force",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each physical quantity with its SI unit:",
 "pairs": [
  {
   "left": "Force (thrust)",
   "right": "newton (N)"
  },
  {
   "left": "Moment of force",
   "right": "newton metre (N m)"
  },
  {
   "left": "Pressure",
   "right": "pascal (Pa)"
  },
  {
   "left": "Area",
   "right": "square metre (m²)"
  },
  {
   "left": "Density",
   "right": "kilogram per cubic metre (kg/m³)"
  }
 ],
 "answer": "Force/thrust — newton; moment of force — newton metre; pressure — pascal (N/m²); area — m²; density — kg/m³.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-x03",
 "topicId": "ch3-force",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each observation with the property of liquid/atmospheric pressure responsible:",
 "pairs": [
  {
   "left": "Water spurts farthest from the lowest hole in a bottle",
   "right": "Liquid pressure increases with depth"
  },
  {
   "left": "Tea level is equal in a teapot and its spout",
   "right": "A liquid seeks its own level"
  },
  {
   "left": "Sea water exerts more pressure than fresh water at the same depth",
   "right": "Liquid pressure increases with density"
  },
  {
   "left": "Rubber sucker grips a smooth tile",
   "right": "Atmospheric pressure pushes from outside"
  },
  {
   "left": "Mountaineers may get nose-bleeds at great heights",
   "right": "Atmospheric pressure decreases with altitude"
  }
 ],
 "answer": "P = hρg explains the first three (depth and density dependence; equal levels in connected vessels). The last two are effects of atmospheric pressure and its decrease with altitude.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-s01",
 "topicId": "ch3-force",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "State two factors on which the moment of a force depends. How can a small force be made to produce a large turning effect?",
 "answer": "Moment of force depends on (1) the magnitude of the applied force and (2) the perpendicular distance of the force's line of action from the axis of rotation. A small force can produce a large turning effect by applying it at a large perpendicular distance from the axis — e.g., using a long spanner, or pushing a door at its outer edge.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-s02",
 "topicId": "ch3-force",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why does a porter place a thick round cloth pad on his head before carrying a heavy load?",
 "answer": "The pad increases the area of contact between the load and his head. Since pressure = force ÷ area, spreading the load's weight over a larger area reduces the pressure on any one spot of his head, making the load far less painful to carry. The soft pad also cushions the irregular shape of the load.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c3-s03",
 "topicId": "ch3-force",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A tall vessel is filled with water and three identical holes are punched in its side at different heights. Describe and explain what is observed when water flows out.",
 "answer": "Water spurts out of all three holes, but the jet from the LOWEST hole travels fastest and lands farthest, while the jet from the highest hole is weakest. Explanation: liquid pressure increases with depth (P = hρg). The lowest hole has the tallest column of water above it, hence the greatest pressure pushing water out. This experiment directly demonstrates the depth-dependence of liquid pressure.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-s04",
 "topicId": "ch3-force",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why are we not crushed by the enormous atmospheric pressure acting on our bodies?",
 "answer": "Atmospheric pressure (~10⁵ Pa) indeed acts on every part of our body, but it is balanced from inside: the air filling our lungs and body cavities, and the pressure of our blood and body fluids, push outwards with nearly the same pressure. Because the inside and outside pressures balance, there is no net crushing force. We notice pressure changes only when this balance is disturbed — e.g., ears 'popping' during a rapid altitude change.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c3-s05",
 "topicId": "ch3-force",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain how a syringe draws medicine into its barrel when the piston is pulled up.",
 "answer": "When the piston is pulled up, the volume inside the barrel increases and the air pressure inside falls well below atmospheric pressure. The atmosphere pressing on the surface of the medicine in the bottle then pushes the liquid up through the nozzle into the low-pressure barrel. The medicine is pushed in by atmospheric pressure — not 'pulled' by the syringe.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-d01",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_03_force_and_pressure/fig_008.jpg",
 "caption": "Hands turning a steering wheel",
 "question": "The driver in the photograph applies two equal and opposite forces on opposite sides of the steering wheel to turn it. This pair of forces is called:",
 "options": [
  "A thrust",
  "A couple — both moments act in the same rotational direction",
  "Friction",
  "Pressure"
 ],
 "correctOption": 1,
 "answer": "Two equal, opposite, parallel forces acting at different points form a COUPLE. Their net force is zero, but their turning moments about the centre add up in the same direction, rotating the wheel. The same principle turns a tap or winds a key.",
 "source": "icse",
 "linksTo": "phy-s3-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c3-d02",
 "topicId": "ch3-force",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_03_force_and_pressure/fig_036.jpg",
 "caption": "A girl carrying a school bag with broad straps",
 "question": "The school bag in the photograph has broad shoulder straps. The physics behind this design is that broad straps:",
 "options": [
  "Increase the pressure on the shoulders",
  "Spread the bag's weight over a larger area, reducing the pressure on the shoulders",
  "Make the bag lighter",
  "Increase friction with the shirt"
 ],
 "correctOption": 1,
 "answer": "Pressure = force ÷ area. The bag's weight (force) is fixed, but a broader strap spreads it over a larger area of the shoulder, so the pressure on any spot is smaller and the strap does not dig in painfully. Thin straps would concentrate the same weight on a small area.",
 "source": "icse",
 "linksTo": "phy-s3-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-s4-sec_01",
 "topicId": "ch4-energy",
 "type": "note",
 "subtopic": "1. Work and Energy",
 "content": "**Work** is done when a force moves a body: **W = force × displacement in the direction of the force**.\n\n• SI unit: **joule (J)**; 1 J = 1 N × 1 m.\n• TWO conditions: a force must act AND the body must be displaced along (a component of) the force.\n• **Zero-work cases**:\n  – Pushing a rigid wall (no displacement).\n  – A coolie standing still with a load (no displacement).\n  – Carrying a bag while walking on level ground — the supporting force is vertical, displacement horizontal: perpendicular ⇒ zero work by that force.\n• Work and energy are **scalar** quantities (magnitude only).\n\n**Energy** is the capacity to do work; also measured in **joules**. A body that can do work possesses energy: a moving hammer (kinetic), stored water (potential), a stretched bow (elastic potential), fuel (chemical).",
 "explanation": "'Feeling tired' is not the physics definition of work — your muscles consume energy holding a load, but if nothing moves, no work is done ON the load. This distinction is the single most-tested idea of the chapter.",
 "source": "icse",
 "examTip": "Before answering 'how much work?', ask two questions: Is there a force? Did its point of application move along the force? If either answer is no, W = 0.",
 "linkedMcqCount": 15
},
{
 "id": "phy-s4-sec_03",
 "topicId": "ch4-energy",
 "type": "note",
 "subtopic": "2. Kinetic and Potential Energy; Conservation",
 "content": "**Kinetic energy** — energy of motion: **KE = ½ m v²**.\n• Doubling the speed makes KE **four times** (v is squared) — why braking distances grow so fast.\n• Examples: moving car, flowing water, wind, a struck hammer.\n\n**Potential energy** — energy of position or shape:\n• **Gravitational PE = m g h** (proportional to height): water in a dam or overhead tank, a raised hammer, a brick on a shelf.\n• **Elastic PE** (changed shape): stretched bow or rubber band, compressed spring, wound clock spring.\n\n**Interconversion (conservation of mechanical energy)**\n• Falling body: PE → KE; at half the height, KE = PE = half the initial PE; just before the ground, all KE.\n• Ball thrown up: KE → PE; at the top KE = 0, PE maximum.\n• **Pendulum**: extremes — all PE; lowest (mean) point — all KE; total PE + KE constant. It finally stops only because friction and air resistance convert the energy to heat — energy is never destroyed.\n\n**Law of conservation of energy**: energy can neither be created nor destroyed, only changed from one form to another.\n\n**Energy chains**: torch (chemical → electrical → light + heat); hydroelectric station (PE of water → KE → turbine rotation → electrical); microphone (sound → electrical); loudspeaker (electrical → sound); solar cell (light → electrical).",
 "explanation": "KE depends on v²; PE depends on h (linearly). So double speed → 4× KE, but double height → only 2× PE. Keep the two scalings separate — mixing them is the classic MCQ error.",
 "source": "icse",
 "examTip": "For any 'trace the energy changes' question, write the chain with arrows and name every intermediate form — each named form carries a mark.",
 "linkedMcqCount": 24
},
{
 "id": "phy-s4-sec_04",
 "topicId": "ch4-energy",
 "type": "note",
 "subtopic": "3. Power",
 "content": "**Power** is the RATE of doing work (or of converting energy):\n\n• **Power = work ÷ time**.\n• SI unit: **watt (W)**; 1 W = 1 J/s. Bigger units: 1 kW = 1000 W; 1 MW = 10⁶ W.\n\n**Energy vs power — keep them apart**\n• Energy answers 'HOW MUCH work can be done?' (joule).\n• Power answers 'HOW FAST is it done?' (watt).\n• Two boys doing the same climb do EQUAL work; the faster one develops MORE power.\n• A powerful machine need not do more total work — a weaker machine running longer can do more.\n\n**Quick patterns**\n• 600 J in 20 s → P = 30 W.\n• A 40 kg girl climbing 5 m in 10 s: work = mgh = 2000 J; power = 200 W.",
 "explanation": "The horse-power (hp ≈ 746 W) survives in motor ratings, but ICSE answers should be in watts. For electrical appliances, the power rating in watts is this same physics quantity — the link to the electricity chapter.",
 "source": "icse",
 "examTip": "If a question gives a TIME, it is a power question; if it does not, it is a work/energy question — sort first, then pick the formula.",
 "linkedMcqCount": 10
},
{
 "id": "phy-s4-sec_13",
 "topicId": "ch4-energy",
 "type": "note",
 "subtopic": "4. Solving Numericals: Work, Energy, Power",
 "content": "**Formulas**\n• W = F × d (J)\n• PE = m g h (take g = 10 m/s² unless told otherwise)\n• KE = ½ m v² — square the speed FIRST\n• P = W ÷ t (W)\n\n**Worked patterns**\n• 50 N moves a box 4 m → W = 200 J.\n• 2 kg book to a 1.5 m shelf → PE = 2 × 10 × 1.5 = 30 J.\n• 0.5 kg ball at 4 m/s → KE = ½ × 0.5 × 16 = 4 J.\n• 600 J in 20 s → P = 30 W.\n• Staircase: work uses the VERTICAL height only, never the slant length of the stairs.\n\n**Checklist**\n• Units: mass kg, distance m, time s, speed m/s.\n• Work against gravity = mgh, independent of the path taken.\n• Energy and work share the joule; power alone is the watt.",
 "explanation": "Two classic traps: forgetting to square v in KE, and using the staircase length instead of vertical height for mgh. Check both before writing the final answer.",
 "source": "icse",
 "examTip": "Write the formula line first even in MCQ rough work — substituting into a written formula almost eliminates careless errors.",
 "linkedMcqCount": 5
},
{
 "id": "phy-c4-m01",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A coolie stands still holding a heavy suitcase on his head. In the scientific sense, the work done by him on the suitcase is:",
 "options": [
  "Very large, because the suitcase is heavy",
  "Zero, because there is no displacement of the suitcase",
  "Small, because he is resting",
  "Equal to the weight of the suitcase"
 ],
 "correctOption": 1,
 "answer": "Work = force × displacement in the direction of the force. The coolie applies an upward force, but the suitcase does not move, so displacement is zero and work done is zero — however tired he may feel. Feeling tired is a physiological effect, not physical work on the load.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m02",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The SI unit of work and energy is the:",
 "options": [
  "watt",
  "newton",
  "joule",
  "pascal"
 ],
 "correctOption": 2,
 "answer": "Work and energy are both measured in joules (J). 1 joule is the work done when a force of 1 newton displaces a body by 1 metre along the force's direction. The watt is the unit of POWER (rate of doing work).",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m03",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A man carries a bag horizontally across a level road at constant speed. The work done BY the force he applies to hold the bag (acting vertically upward) is:",
 "options": [
  "Positive and large",
  "Zero, because the displacement is perpendicular to the upward force",
  "Negative",
  "Equal to the bag's weight times the distance walked"
 ],
 "correctOption": 1,
 "answer": "Work is done only by the component of force ALONG the displacement. The supporting force is vertical while the displacement is horizontal — perpendicular to it — so this force does zero work. This classic question separates 'effort felt' from 'work done'.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c4-m04",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Kinetic energy is the energy possessed by a body by virtue of its:",
 "options": [
  "Position above the ground",
  "Motion",
  "Temperature",
  "Shape"
 ],
 "correctOption": 1,
 "answer": "Kinetic energy is the energy of motion: KE = ½mv². Energy due to position or height is potential energy; energy due to a stretched/compressed shape is elastic potential energy.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m05",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "If the speed of a car is doubled, its kinetic energy becomes:",
 "options": [
  "Double",
  "Half",
  "Four times",
  "Unchanged"
 ],
 "correctOption": 2,
 "answer": "KE = ½mv² depends on the SQUARE of the speed. Doubling v makes v² four times larger, so the kinetic energy becomes 4×. (This is why braking distances grow so quickly with speed.)",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m06",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Water stored high in a dam possesses:",
 "options": [
  "Kinetic energy",
  "Gravitational potential energy",
  "Elastic potential energy",
  "Chemical energy"
 ],
 "correctOption": 1,
 "answer": "Stored water at a height has gravitational potential energy (PE = mgh). When released, this converts to kinetic energy of falling water, which turns turbines to generate electricity in a hydroelectric power station.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m07",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A stretched bow possesses energy by virtue of its changed shape. This energy is:",
 "options": [
  "Gravitational potential energy",
  "Elastic potential energy",
  "Kinetic energy",
  "Heat energy"
 ],
 "correctOption": 1,
 "answer": "Energy stored in a body due to a change in its shape or configuration (stretching, compressing, bending, winding) is elastic potential energy. On releasing the bowstring, it converts into the kinetic energy of the arrow.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m08",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A mango falls from a tree. Just before it touches the ground, its energy is:",
 "options": [
  "Entirely potential",
  "Entirely kinetic (taking the ground as reference and ignoring air resistance)",
  "Half potential, half kinetic",
  "Zero"
 ],
 "correctOption": 1,
 "answer": "As the mango falls, its PE (mgh) steadily converts into KE. At the ground (h = 0), all the initial potential energy has become kinetic energy — the mango is moving fastest just before impact. Total mechanical energy stays constant throughout (conservation of energy).",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m09",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A ball is dropped from a height. At the instant it has fallen exactly half the height (ignoring air resistance), which statement is correct?",
 "options": [
  "KE = 0 and PE is maximum",
  "KE equals PE, each being half the initial PE",
  "KE is maximum and PE = 0",
  "KE is double the PE"
 ],
 "correctOption": 1,
 "answer": "At half the height, the ball has lost half its potential energy (PE ∝ h). By conservation of energy, the lost PE has become KE. So KE = PE = half of the original potential energy at that instant.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c4-m10",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In an oscillating simple pendulum, the kinetic energy is maximum:",
 "options": [
  "At the extreme positions",
  "At the lowest (mean) position",
  "Halfway between mean and extreme",
  "At all points equally"
 ],
 "correctOption": 1,
 "answer": "At the extremes the bob momentarily stops (KE = 0, PE maximum). As it swings down, PE converts to KE, which peaks at the lowest point where the bob moves fastest and the height is least. The total PE + KE remains constant.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m11",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The law of conservation of energy states that energy:",
 "options": [
  "Can be created but not destroyed",
  "Can be destroyed but not created",
  "Can neither be created nor destroyed, only changed from one form to another",
  "Always decreases with time"
 ],
 "correctOption": 2,
 "answer": "Energy can only be transformed between forms (e.g., electrical → light + heat in a bulb); the total energy of an isolated system remains constant. Even 'lost' energy (friction) appears as heat — it is never destroyed.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m12",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In a torch, the sequence of energy conversion is:",
 "options": [
  "Electrical → chemical → light",
  "Chemical → electrical → light (and some heat)",
  "Light → electrical → chemical",
  "Heat → light → electrical"
 ],
 "correctOption": 1,
 "answer": "The cell stores chemical energy, which becomes electrical energy when the circuit is closed; the bulb/LED converts electrical energy into light (with some heat). Tracing energy chains is the standard way to apply conservation of energy.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m13",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Power is defined as:",
 "options": [
  "The total energy stored in a body",
  "The rate of doing work",
  "The force applied per unit area",
  "The work done in moving 1 metre"
 ],
 "correctOption": 1,
 "answer": "Power = work done ÷ time taken; SI unit watt (1 W = 1 J/s). Two machines may do the SAME work, but the one that does it faster has more power.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m14",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Two boys A and B, of equal weight, climb the same staircase. A takes 20 s and B takes 40 s. Which statement is correct?",
 "options": [
  "A does more work than B",
  "B does more work than A",
  "Both do equal work, but A develops more power",
  "Both develop equal power, but A does more work"
 ],
 "correctOption": 2,
 "answer": "Work done = weight × height gained, which is the same for both. But power = work/time: A does the same work in half the time, so A's power is double B's. Work depends on what is done; power on how fast.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m15",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A moving hammer drives a nail into wood. The hammer can do this work because it possesses:",
 "options": [
  "Potential energy",
  "Kinetic energy, which is transferred to the nail on impact",
  "Elastic energy",
  "Magnetic energy"
 ],
 "correctOption": 1,
 "answer": "The raised, swinging hammer has kinetic energy. On striking, this energy does work on the nail — pushing it into the wood against resistance. A body that can do work possesses energy; here the energy is kinetic.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m16",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Two identical bricks are kept on shelves at heights 1 m and 2 m. Compared to the first brick, the second has:",
 "options": [
  "The same potential energy",
  "Half the potential energy",
  "Twice the potential energy",
  "Four times the potential energy"
 ],
 "correctOption": 2,
 "answer": "Gravitational PE = mgh is directly proportional to height. Equal masses at double the height store double the potential energy. (PE is proportional to h, unlike KE which goes as the square of v.)",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m17",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A wound-up spring of a toy car makes the car move when released. The energy transformation is:",
 "options": [
  "Kinetic → elastic potential",
  "Elastic potential → kinetic",
  "Gravitational potential → elastic",
  "Chemical → kinetic"
 ],
 "correctOption": 1,
 "answer": "Winding the key stores elastic potential energy in the coiled spring (work done by your hand). On release, the spring unwinds and this stored energy converts into the kinetic energy of the moving car.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m18",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "No work is done in the scientific sense in which of the following situations?",
 "options": [
  "A girl climbs up a staircase",
  "A bullock pulls a loaded cart along a road",
  "A boy pushes hard against a rigid wall which does not move",
  "A crane lifts a car upward"
 ],
 "correctOption": 2,
 "answer": "Work requires both force AND displacement. The wall does not move, so despite the large force and effort, the displacement — and hence the work done on the wall — is zero. In the other three cases the applied force moves the object.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m19",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A force of 50 N moves a box 4 m along the direction of the force. The work done is:",
 "options": [
  "12.5 J",
  "54 J",
  "200 J",
  "450 J"
 ],
 "correctOption": 2,
 "answer": "W = F × d = 50 N × 4 m = 200 J.",
 "source": "icse",
 "linksTo": "phy-s4-sec_13",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m20",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A 2 kg book is lifted onto a shelf 1.5 m high (g = 10 m/s²). The potential energy gained by the book is:",
 "options": [
  "3 J",
  "15 J",
  "30 J",
  "300 J"
 ],
 "correctOption": 2,
 "answer": "PE = mgh = 2 kg × 10 m/s² × 1.5 m = 30 J. This equals the work done against gravity in lifting it.",
 "source": "icse",
 "linksTo": "phy-s4-sec_13",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m21",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A machine does 600 J of work in 20 s. Its power is:",
 "options": [
  "30 W",
  "12,000 W",
  "620 W",
  "580 W"
 ],
 "correctOption": 0,
 "answer": "Power = work ÷ time = 600 J ÷ 20 s = 30 W (30 joules of work every second).",
 "source": "icse",
 "linksTo": "phy-s4-sec_13",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m22",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A ball of mass 0.5 kg moves at 4 m/s. Its kinetic energy is:",
 "options": [
  "1 J",
  "2 J",
  "4 J",
  "8 J"
 ],
 "correctOption": 2,
 "answer": "KE = ½mv² = ½ × 0.5 × 4² = ½ × 0.5 × 16 = 4 J. Remember to square the speed before multiplying.",
 "source": "icse",
 "linksTo": "phy-s4-sec_13",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m23",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A person pushing hard against a stationary wall does no work on the wall.\nReason (R): Work is done only when the point of application of a force moves through some distance.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Work = force × displacement; with zero displacement the work is zero no matter how large the force. R states exactly this condition and explains A.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-m24",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The total mechanical energy of a freely falling body remains constant (ignoring air resistance).\nReason (R): The potential energy lost by the body is continuously converted into an equal amount of kinetic energy.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "At every instant of free fall, the decrease in mgh equals the increase in ½mv², keeping PE + KE constant. R is precisely the mechanism behind A — the law of conservation of mechanical energy.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m25",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A powerful machine necessarily does more total work than a less powerful one.\nReason (R): Power is the rate of doing work, not the total amount of work.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 3,
 "answer": "A is FALSE: a powerful machine works FASTER, but a weaker machine running longer can do more total work. R is TRUE and is the very reason A is false — power measures rate, not amount.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c4-m26",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): When a pendulum finally stops swinging, its mechanical energy seems to disappear, violating conservation of energy.\nReason (R): The pendulum's mechanical energy is gradually converted into heat by air resistance and friction at the support.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 3,
 "answer": "A is FALSE — no violation occurs. R is TRUE: friction and air resistance convert the mechanical energy into heat (and a little sound), so total energy is fully accounted for. Conservation of energy always holds.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c4-m27",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The unit N m can represent both work and moment of force, but the joule is reserved for work and energy alone.\nReason (R): Work involves displacement along the force, while moment involves a perpendicular distance from an axis — they are different physical quantities.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Both have the dimensional form force × distance, but the distances play different roles (along the force vs perpendicular to it). Hence moment is written 'N m' and never 'joule'. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c4-m28",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. Work done = force × displacement in the direction of the force.\nII. If displacement is zero, work done is zero.\nIII. Work is a vector quantity with a direction.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — work (and energy) are SCALAR quantities; they have magnitude but no direction, even though force and displacement are vectors.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m29",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about kinetic energy:\nI. KE depends on both the mass and the speed of the body.\nII. KE is doubled when the speed is doubled.\nIII. A body at rest has zero kinetic energy.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I and III are correct (KE = ½mv²; v = 0 gives KE = 0). II is wrong — KE goes as the SQUARE of speed, so doubling the speed makes KE four times, not double.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-m30",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about power:\nI. The SI unit of power is the watt (1 W = 1 J/s).\nII. 1 kilowatt = 1000 watts.\nIII. Power and energy are the same physical quantity.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — energy is the capacity to do work (joules), while power is how FAST work is done or energy is converted (joules per second). They are related but distinct.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t01",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Work is done whenever a force is applied, even if the body does not move.",
 "correctAnswer": "false",
 "answer": "False. Work requires BOTH force and displacement. If the body does not move, the work done is zero (e.g., pushing a rigid wall).",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t02",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The kinetic energy of a body is proportional to the square of its speed.",
 "correctAnswer": "true",
 "answer": "True. KE = ½mv², so tripling the speed makes the kinetic energy nine times as large.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t03",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Energy can be created in a power station.",
 "correctAnswer": "false",
 "answer": "False. A power station does not CREATE energy; it CONVERTS one form into another (e.g., potential energy of stored water, or chemical energy of coal, into electrical energy). Energy can neither be created nor destroyed.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-t04",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "At the highest point of its swing, a pendulum bob has maximum potential energy and zero kinetic energy.",
 "correctAnswer": "true",
 "answer": "True. At the extreme position the bob is momentarily at rest (KE = 0) at its greatest height (PE maximum). The two interconvert continuously during the swing.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t05",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The watt is the SI unit of energy.",
 "correctAnswer": "false",
 "answer": "False. The watt (W) is the SI unit of POWER (1 W = 1 J/s). The SI unit of energy is the joule (J).",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t06",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Work and energy are scalar quantities.",
 "correctAnswer": "true",
 "answer": "True. Both have magnitude only and no direction, although work is computed from two vectors (force and displacement).",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-t07",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A compressed spring possesses kinetic energy.",
 "correctAnswer": "false",
 "answer": "False. A compressed (or stretched) spring stores ELASTIC POTENTIAL energy due to its changed shape. It becomes kinetic energy only when the spring is released and starts moving something.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-t08",
 "topicId": "ch4-energy",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Two machines doing the same work in different times have different powers.",
 "correctAnswer": "true",
 "answer": "True. Power = work/time, so for equal work the machine taking LESS time has GREATER power.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f01",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The SI unit of work and energy is the _______.",
 "blankAnswer": "joule",
 "answer": "Joule (J) — 1 J = 1 N × 1 m, the work done when a 1 N force moves a body 1 m along its direction.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f02",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The energy possessed by a body due to its motion is called _______ energy.",
 "blankAnswer": "kinetic",
 "answer": "Kinetic energy, KE = ½mv² — e.g., a moving car, flowing water, a flying bird.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f03",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The energy possessed by a body due to its position or height above the ground is called gravitational _______ energy.",
 "blankAnswer": "potential",
 "answer": "Gravitational potential energy, PE = mgh — e.g., water in an overhead tank, a raised hammer.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f04",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The rate of doing work is called _______.",
 "blankAnswer": "power",
 "answer": "Power = work ÷ time; SI unit watt (W).",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f05",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "1 kilowatt = _______ watts.",
 "blankAnswer": "1000",
 "answer": "1 kW = 1000 W. Larger unit: 1 megawatt (MW) = 10⁶ W, used for power stations.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-f06",
 "topicId": "ch4-energy",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "In a hydroelectric power station, the _______ energy of stored water is finally converted into electrical energy.",
 "blankAnswer": "potential",
 "answer": "Potential energy of the high water → kinetic energy of falling water → rotational energy of the turbine → electrical energy from the generator.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-x01",
 "topicId": "ch4-energy",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each body with the main form of mechanical energy it possesses:",
 "pairs": [
  {
   "left": "Water stored in an overhead tank",
   "right": "Gravitational potential energy"
  },
  {
   "left": "A speeding cricket ball",
   "right": "Kinetic energy"
  },
  {
   "left": "A stretched rubber band",
   "right": "Elastic potential energy"
  },
  {
   "left": "A swinging pendulum at mid-swing",
   "right": "Both kinetic and potential energy"
  },
  {
   "left": "A wound spring of a clock",
   "right": "Elastic potential energy"
  }
 ],
 "answer": "Height above ground → gravitational PE; motion → KE; stretched/compressed/wound shape → elastic PE; a pendulum between mean and extreme positions carries a mixture of KE and PE.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-x02",
 "topicId": "ch4-energy",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each device with its energy conversion:",
 "pairs": [
  {
   "left": "Electric fan",
   "right": "Electrical → kinetic (mechanical)"
  },
  {
   "left": "Solar cell",
   "right": "Light → electrical"
  },
  {
   "left": "Microphone",
   "right": "Sound → electrical"
  },
  {
   "left": "Loudspeaker",
   "right": "Electrical → sound"
  },
  {
   "left": "Electric heater",
   "right": "Electrical → heat"
  }
 ],
 "answer": "Fan: electrical to mechanical rotation. Solar cell: light to electricity. Microphone and loudspeaker are opposites (sound↔electrical). Heater: electrical to heat. Every device merely converts energy — none creates it.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-x03",
 "topicId": "ch4-energy",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each quantity with its correct formula or unit:",
 "pairs": [
  {
   "left": "Work",
   "right": "Force × displacement (joule)"
  },
  {
   "left": "Kinetic energy",
   "right": "½ × mass × speed²"
  },
  {
   "left": "Gravitational potential energy",
   "right": "mass × g × height"
  },
  {
   "left": "Power",
   "right": "Work ÷ time (watt)"
  },
  {
   "left": "1 joule",
   "right": "1 newton × 1 metre"
  }
 ],
 "answer": "W = F·d in joules; KE = ½mv²; PE = mgh; P = W/t in watts; and 1 J is the work of a 1 N force acting through 1 m.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-s01",
 "topicId": "ch4-energy",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "State the two conditions that must be satisfied for work to be done in the scientific sense, and give one example where a large effort produces zero work.",
 "answer": "Conditions: (1) a force must act on the body, and (2) the body must be displaced — with some component of displacement along the direction of the force. Example of zero work: pushing hard against a rigid wall, or a coolie standing still with a load on his head — in both cases there is force but no displacement, so work done is zero.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-s02",
 "topicId": "ch4-energy",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Describe the energy changes that take place when a ball is thrown vertically upwards until it returns to the thrower's hand.",
 "answer": "At the moment of release the ball has maximum kinetic energy. As it rises, KE is progressively converted into gravitational potential energy; at the highest point KE is zero (the ball is momentarily at rest) and PE is maximum. As it falls, PE converts back into KE, and the ball returns with (ideally) the same KE it started with. Throughout, the total mechanical energy KE + PE remains constant, apart from a small loss to air resistance as heat.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-s03",
 "topicId": "ch4-energy",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Distinguish between energy and power, giving the SI unit of each.",
 "answer": "Energy is the CAPACITY to do work — the total amount of work a body or system can perform; SI unit joule (J). Power is the RATE at which work is done or energy is converted; SI unit watt (W = J/s). Two students doing identical work have spent equal energy, but the one who finishes faster has developed more power. Energy depends on 'how much'; power on 'how fast'.",
 "source": "icse",
 "linksTo": "phy-s4-sec_04",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-s04",
 "topicId": "ch4-energy",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain how electricity is generated at a hydroelectric power station, naming each energy conversion.",
 "answer": "Water stored behind a tall dam possesses gravitational potential energy. When released through pipes (penstocks), this PE converts into kinetic energy of fast-flowing water. The moving water strikes the blades of a turbine, transferring its KE into rotational mechanical energy of the turbine. The turbine spins a generator, which converts the mechanical energy into electrical energy. Chain: PE of stored water → KE of falling water → mechanical energy of turbine → electrical energy.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-s05",
 "topicId": "ch4-energy",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A 40 kg girl climbs a flight of stairs 5 m high in 10 s (g = 10 m/s²). Calculate (a) the work done against gravity and (b) her power.",
 "answer": "(a) Work done = gain in PE = mgh = 40 × 10 × 5 = 2000 J. (b) Power = work ÷ time = 2000 J ÷ 10 s = 200 W. Note that only the vertical height matters for work against gravity, not the length of the staircase.",
 "source": "icse",
 "linksTo": "phy-s4-sec_13",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c4-d01",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_04_energy/fig_016.jpg",
 "caption": "A wind farm — turbines turned by moving air",
 "question": "The photograph shows wind turbines spinning in moving air. The energy conversion taking place in each turbine is:",
 "options": [
  "Potential energy of air → sound energy",
  "Kinetic energy of moving air → mechanical rotation → electrical energy",
  "Chemical energy of air → light energy",
  "Heat energy of air → kinetic energy"
 ],
 "correctOption": 1,
 "answer": "Moving air (wind) possesses kinetic energy. It does work on the turbine blades, setting them rotating (mechanical energy), and the attached generator converts this rotation into electrical energy. Wind power is a clean, renewable application of kinetic energy.",
 "source": "icse",
 "linksTo": "phy-s4-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c4-d02",
 "topicId": "ch4-energy",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_04_energy/fig_022.jpg",
 "caption": "A raised hammer about to strike a nail",
 "question": "In the photograph, the hammer is raised above the nail, ready to strike. Trace the energy changes from this moment until the nail is driven into the wood:",
 "options": [
  "Kinetic → potential → sound",
  "Potential energy of the raised hammer → kinetic energy of the falling hammer → work done on the nail (plus some heat and sound)",
  "Chemical → electrical → kinetic",
  "Elastic → potential → chemical"
 ],
 "correctOption": 1,
 "answer": "The raised hammer stores gravitational potential energy. As it swings down, this becomes kinetic energy. On impact, the kinetic energy does WORK on the nail — driving it into the wood against resistance — with small amounts lost as heat and sound. Energy is converted, never destroyed.",
 "source": "icse",
 "linksTo": "phy-s4-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-s5-sec_01",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "1. Light: An Introduction",
 "content": "**Light** is a form of energy that produces the sensation of vision.\n\n• Light travels in straight lines (rectilinear propagation) at about **3 × 10⁸ m/s in air/vacuum** — the fastest speed in nature.\n• Light needs **no medium**: it crosses the vacuum of space from the sun to us.\n• When light meets a surface or a new medium it may be **reflected** (bounced back), **refracted** (bent while passing through), or **absorbed**.\n\nThis chapter covers two big ideas:\n• **Refraction** — bending of light between media (and its everyday effects).\n• **Spherical mirrors** — concave and convex mirrors, the images they form, and their uses; then the **prism**, dispersion and the rainbow.",
 "explanation": "Contrast with sound: light is not a mechanical wave — it travels through vacuum, while sound cannot. This contrast is a favourite one-mark question.",
 "source": "icse",
 "examTip": "Keep reflection and refraction definitions ready in one line each — 'bounces back' vs 'bends while passing through'."
},
{
 "id": "phy-s5-sec_02",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "2. Refraction of Light and Its Effects",
 "content": "**Refraction** is the bending of light when it passes **obliquely** from one transparent medium to another.\n\n**Cause**: the **speed of light changes** between media — fastest in air, slower in water, slower still in glass.\n\n**Rules of bending**\n• Rarer → denser medium (air → water/glass): bends **TOWARDS the normal**; angle of refraction < angle of incidence.\n• Denser → rarer (glass/water → air): bends **AWAY from the normal**.\n• Along the normal (perpendicular incidence): **no bending** — the ray only slows down or speeds up.\n\n**Everyday effects of refraction**\n• A pencil/stick partly dipped in water appears **bent at the surface**.\n• A pool or tank appears **shallower** than it is (apparent depth < real depth) — dangerous for divers.\n• A coin at the bottom of a vessel appears **raised**; an invisible coin becomes visible when water is poured in.\n• A fish appears closer to the surface than it really is — spear BELOW the image to hit it.",
 "explanation": "All four effects have one explanation: rays from the under-water object bend AWAY from the normal on leaving the water; the eye traces them straight back to a point higher than the object's true position.",
 "source": "icse",
 "examTip": "In every refraction diagram, measure angles from the NORMAL, never from the surface — mislabelled angles lose the mark even with correct bending.",
 "linkedMcqCount": 15
},
{
 "id": "phy-s5-sec_03",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "3. Terms Used in Refraction",
 "content": "For a ray crossing the boundary XY between two media at point O:\n\n• **Incident ray** — the ray approaching the boundary (AO).\n• **Point of incidence** — O, where the ray meets the boundary.\n• **Normal** — the line N₁N₂ perpendicular to the boundary at O.\n• **Refracted ray** — the bent ray in the second medium (OB).\n• **Angle of incidence (i)** — between the incident ray and the normal.\n• **Angle of refraction (r)** — between the refracted ray and the normal.\n\n**Optically denser / rarer**\n• An **optically denser** medium slows light more (glass is denser than water; water denser than air).\n• Optical density is about the SPEED of light, not mass density — though for common substances the two go together.\n\nQuick check: air → water gives r < i (towards normal); water → air gives r > i (away from normal).",
 "explanation": "The incident ray, the normal and the refracted ray all lie in the same plane — state this when asked for the 'laws of refraction' at this level.",
 "source": "icse",
 "examTip": "Draw the normal as a DOTTED line and mark i and r with arcs touching it; examiners check the arc positions before anything else.",
 "linkedMcqCount": 1
},
{
 "id": "phy-s5-sec_05",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "4. Spherical Mirrors: Key Terms",
 "content": "A **spherical mirror** is a part of a hollow sphere with one polished, reflecting surface.\n\n• **Concave mirror** — reflecting surface curved INWARD (like the inside of a spoon); converges light.\n• **Convex mirror** — reflecting surface bulging OUTWARD; diverges light.\n\n**Terms**\n• **Pole (P)** — midpoint of the mirror's reflecting surface.\n• **Centre of curvature (C)** — centre of the sphere of which the mirror is a part.\n• **Radius of curvature (R)** — distance PC.\n• **Principal axis** — straight line through P and C.\n• **Principal focus (F)** — where rays parallel to the principal axis meet (concave: REAL, in front) or appear to come from (convex: VIRTUAL, behind) after reflection.\n• **Focal length (f)** — distance PF; **f = R/2** (F is midway between P and C).\n• **Aperture** — the width of the reflecting surface.",
 "explanation": "Find f of a concave mirror with the sun: focus sunlight to the smallest brightest spot on paper; the mirror-to-spot distance is f (the sun's rays arrive parallel). The hot spot may char the paper — energy concentrates at the focus.",
 "source": "icse",
 "examTip": "If R is given, halve it for f before doing anything else (R = 30 cm ⇒ f = 15 cm) — and label both C and F on every ray diagram.",
 "linkedMcqCount": 7
},
{
 "id": "phy-s5-sec_06",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "5. Images by Concave and Convex Mirrors; Uses",
 "content": "**Convex mirror** — for ANY object position the image is **virtual, erect, diminished**, behind the mirror.\n• Use: **rear-view/side mirrors** in vehicles — small images allow a wide field of view. (Caution: vehicles look farther than they are.)\n• Also: security mirrors at shop corners and parking exits.\n\n**Concave mirror** — image depends on the object's position:\n• Object far away/beyond C → image **real, inverted, diminished**.\n• Object within the focal length (between P and F) → image **virtual, erect, MAGNIFIED**.\n\n**Uses of concave mirrors**\n• **Shaving/make-up mirror** and **dentist's mirror** — face/tooth inside F gives an erect magnified image.\n• **Torch, car headlight, searchlight** — bulb at the FOCUS sends out a parallel beam (mirror used in reverse).\n• **Solar furnace/cooker reflector** — converges sunlight onto the vessel at its focus.\n• Doctors' head mirrors (ENT) — converge light onto the throat/ear.",
 "explanation": "One-line logic: convex always diverges (so always small, erect, virtual); concave converges, so it can do everything — real or virtual, magnified or diminished — depending on where the object stands.",
 "source": "icse",
 "examTip": "Match-the-columns on mirror uses is near-certain: convex ↔ rear-view; concave ↔ shaving, dentist, headlight, solar cooker.",
 "linkedMcqCount": 8
},
{
 "id": "phy-s5-sec_07",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "6. Real Image vs Virtual Image",
 "content": "**Real image**\n• Formed by the **actual meeting** of reflected (or refracted) rays.\n• **Can be obtained on a screen**.\n• Always **inverted**.\n• Example: image of a distant building formed by a concave mirror; cinema screen image.\n\n**Virtual image**\n• Formed where rays only **appear to meet** when traced backwards.\n• **Cannot** be caught on a screen — no light actually passes through it.\n• Always **erect**.\n• Examples: your image in a plane mirror; convex-mirror images; the magnified face in a shaving mirror.\n\n**Three differences to quote**: actual vs apparent meeting of rays; screen vs no screen; inverted vs erect.",
 "explanation": "Why no screen can catch a virtual image: a screen works by scattering light that falls on it — at a virtual image position there is no light arriving at all.",
 "source": "icse",
 "examTip": "'Real ⇒ inverted, virtual ⇒ erect' holds for ALL mirror images at this level — a free consistency check for every answer.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s5-sec_08",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "7. Concave Mirror: Image Positions",
 "content": "How the image changes as an object approaches a concave mirror:\n\n• Object at **infinity** → image AT F: real, inverted, highly diminished (point-like).\n• Object **beyond C** → image between C and F: real, inverted, diminished.\n• Object **at C** → image at C: real, inverted, **same size**.\n• Object **between C and F** → image beyond C: real, inverted, **magnified**.\n• Object **at F** → reflected rays emerge **parallel**; image 'at infinity' (this is the torch/headlight arrangement run in reverse).\n• Object **between P and F** → image behind the mirror: **virtual, erect, magnified** (shaving-mirror position).\n\n**Pattern to remember**: as the object walks in from infinity, the real image walks OUT from F (growing all the time); the moment the object crosses inside F, the image flips behind the mirror and becomes virtual, erect and magnified.",
 "explanation": "Two rays are enough for any diagram: (1) a ray parallel to the axis reflects through F; (2) a ray through C returns along itself. Their intersection is the image point.",
 "source": "icse",
 "examTip": "Learn the table as a story (object walks in, image walks out), not as six separate rows — you can then reconstruct any row in the exam.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s5-sec_09",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "8. The Prism: Dispersion and the Rainbow",
 "content": "A **prism** is a transparent medium bounded by two plane refracting surfaces inclined at an angle.\n\n**Dispersion**: white light passing through a prism splits into its **seven constituent colours** — **VIBGYOR** (Violet, Indigo, Blue, Green, Yellow, Orange, Red). The coloured band is called the **spectrum**.\n\n**Why dispersion happens**\n• Different colours travel at slightly **different speeds in glass**.\n• Violet is slowed most → **deviates most**; red is slowed least → **deviates least**.\n• The prism only **separates** the colours already present — it does not create or add colour.\n\n**Why a glass slab shows no spectrum**: its two surfaces are PARALLEL, so the colours separated at the first surface are bent back parallel at the second and overlap into white again. The prism's INCLINED surfaces increase the separation instead.\n\n**Rainbow**: millions of raindrops act as tiny prisms — sunlight is refracted, dispersed, internally reflected at the back of each drop and refracted again on leaving. Seen when the **sun is behind the observer** and rain in front.",
 "explanation": "Order of deviation (least → most): red, orange, yellow, green, blue, indigo, violet — exactly the reverse of VIBGYOR read out loud. The deviation is always towards the BASE of the prism.",
 "source": "icse",
 "examTip": "Two giveaway facts examiners test: red deviates least/violet most, and 'the prism does not create colours'.",
 "linkedMcqCount": 11
},
{
 "id": "phy-s5-sec_10",
 "topicId": "ch5-light",
 "type": "note",
 "subtopic": "9. Recombining the Seven Colours",
 "content": "Two classic demonstrations prove that **white light is a mixture of seven colours**:\n\n**1. The second (inverted) prism — Newton's experiment**\n• A first prism disperses white light into VIBGYOR.\n• An identical prism placed **upside-down** after it bends each colour by an equal and opposite amount.\n• The colours **recombine** and emerge as white light.\n• Conclusion: the prism separates colours; it does not manufacture them.\n\n**2. Newton's colour disc**\n• A disc painted with the seven rainbow colours in sectors.\n• When rotated rapidly, it appears **nearly white**.\n• The eye retains each colour impression for a fraction of a second (**persistence of vision**), so the rapidly succeeding colours blend into white — the reverse of dispersion, done inside the eye.",
 "explanation": "The disc never looks pure white because paints are impure pigments — 'whitish grey' is the honest observation, and stating that wins credit in practical-based questions.",
 "source": "icse",
 "examTip": "Pair the two experiments in your answer: prism-2 recombines IN GLASS, Newton's disc recombines IN THE EYE.",
 "linkedMcqCount": 2
},
{
 "id": "phy-c5-m01",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Refraction of light is the:",
 "options": [
  "Bouncing back of light from a polished surface",
  "Bending of light as it passes obliquely from one transparent medium into another",
  "Splitting of white light into colours",
  "Scattering of light by dust particles"
 ],
 "correctOption": 1,
 "answer": "Refraction is the change in direction (bending) of light when it passes obliquely from one transparent medium to another, caused by the change in the speed of light between the media. Bouncing back is reflection; splitting into colours is dispersion.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m02",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A ray of light travelling from air into glass bends:",
 "options": [
  "Away from the normal",
  "Towards the normal",
  "Along the surface",
  "It does not bend at all"
 ],
 "correctOption": 1,
 "answer": "Glass is optically denser than air; light slows down on entering it and bends TOWARDS the normal. Going from a denser to a rarer medium (glass to air), it speeds up and bends AWAY from the normal.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m03",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A ray of light falling perpendicularly (along the normal) on a glass surface:",
 "options": [
  "Bends towards the normal",
  "Bends away from the normal",
  "Passes straight through without bending",
  "Is completely reflected"
 ],
 "correctOption": 2,
 "answer": "At normal incidence the angle of incidence is 0°. The ray slows down inside the glass but does NOT change direction — refraction (bending) occurs only for oblique incidence.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m04",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A pencil partly dipped in a glass of water appears bent at the water surface. This happens because:",
 "options": [
  "The pencil actually bends in water",
  "Light rays from the submerged part bend away from the normal on leaving the water, so the part appears raised",
  "Water magnifies the pencil",
  "The glass distorts the image"
 ],
 "correctOption": 1,
 "answer": "Rays from the under-water part of the pencil refract (bend away from the normal) as they pass from water to air. The eye traces them back along straight lines, seeing the submerged part displaced upward — so the pencil appears bent at the surface.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m05",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A swimming pool appears shallower than it really is because of:",
 "options": [
  "Reflection of light",
  "Refraction of light at the water surface",
  "Dispersion of light",
  "Absorption of light by water"
 ],
 "correctOption": 1,
 "answer": "Light from the pool floor bends away from the normal as it leaves the water. The floor's image is formed above its true position (apparent depth < real depth), making the pool look shallower — a potentially dangerous illusion for divers.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m06",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In a spherical mirror, the relationship between the focal length (f) and the radius of curvature (R) is:",
 "options": [
  "f = R",
  "f = R/2",
  "f = 2R",
  "f = R²"
 ],
 "correctOption": 1,
 "answer": "The principal focus lies exactly midway between the pole and the centre of curvature, so focal length = half the radius of curvature (f = R/2). E.g., if R = 30 cm, then f = 15 cm.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m07",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Rays of light parallel to the principal axis, after reflection from a CONCAVE mirror:",
 "options": [
  "Diverge as if coming from the focus",
  "Actually converge and pass through the principal focus",
  "Return along their own paths",
  "Pass through the centre of curvature"
 ],
 "correctOption": 1,
 "answer": "A concave mirror is a converging mirror: parallel rays meet at the principal focus in front of the mirror — a REAL focus. (In a convex mirror they diverge and only APPEAR to come from a virtual focus behind the mirror.)",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m08",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A convex mirror always forms an image that is:",
 "options": [
  "Real, inverted and magnified",
  "Virtual, erect and diminished",
  "Real, erect and the same size",
  "Virtual, inverted and magnified"
 ],
 "correctOption": 1,
 "answer": "Whatever the object's position, a convex mirror forms a virtual, erect, diminished image behind the mirror. This small image lets the mirror show a wide field of view — the reason it is used as a vehicle rear-view mirror.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m09",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A dentist uses a small mirror held close to a tooth to see its enlarged image. The mirror and the tooth's position are:",
 "options": [
  "Convex mirror, tooth beyond the centre of curvature",
  "Concave mirror, tooth between the pole and the focus",
  "Plane mirror, tooth anywhere",
  "Concave mirror, tooth at the centre of curvature"
 ],
 "correctOption": 1,
 "answer": "When an object lies between the pole and focus of a concave mirror, the image is virtual, erect and MAGNIFIED — ideal for examining teeth. The same arrangement is used in shaving/make-up mirrors.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m10",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "To obtain a real image of the SAME SIZE as the object using a concave mirror, the object must be placed:",
 "options": [
  "At the principal focus",
  "At the centre of curvature",
  "Between pole and focus",
  "At infinity"
 ],
 "correctOption": 1,
 "answer": "With the object at the centre of curvature (C), the concave mirror forms a real, inverted image of equal size, also at C. Beyond C the image is diminished; between C and F it is magnified.",
 "source": "icse",
 "linksTo": "phy-s5-sec_08",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m11",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "An object is placed at the principal focus of a concave mirror. The reflected rays:",
 "options": [
  "Meet at the centre of curvature",
  "Emerge parallel, forming an image at infinity",
  "Form a virtual image behind the mirror",
  "Return through the focus"
 ],
 "correctOption": 1,
 "answer": "Rays from the focus, after reflection, travel parallel to the principal axis — the image is said to form at infinity. This is exactly how searchlights and torches produce parallel beams: the bulb is placed at the focus of a concave reflector.",
 "source": "icse",
 "linksTo": "phy-s5-sec_08",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m12",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Which property distinguishes a REAL image from a VIRTUAL image?",
 "options": [
  "A real image is always erect",
  "A real image can be obtained on a screen; a virtual image cannot",
  "A virtual image is always smaller",
  "A real image is always brighter"
 ],
 "correctOption": 1,
 "answer": "A real image is formed by the ACTUAL meeting of reflected rays, so it can be caught on a screen and is always inverted. A virtual image is formed where rays only APPEAR to meet — it cannot be projected on a screen and is always erect.",
 "source": "icse",
 "linksTo": "phy-s5-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m13",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The splitting of white light into its seven constituent colours on passing through a glass prism is called:",
 "options": [
  "Reflection",
  "Refraction",
  "Dispersion",
  "Diffusion"
 ],
 "correctOption": 2,
 "answer": "Dispersion is the separation of white light into its colours (VIBGYOR). It happens because different colours travel at slightly different speeds in glass and so are refracted through different angles.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m14",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In the spectrum formed by a prism, the colour that bends (deviates) the LEAST is:",
 "options": [
  "Violet",
  "Green",
  "Red",
  "Blue"
 ],
 "correctOption": 2,
 "answer": "Red light travels fastest in glass among the visible colours and deviates the least; violet travels slowest and deviates the most. Hence red appears at the top edge and violet at the bottom of the spectrum from a prism.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m15",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A rainbow is formed in the sky because tiny raindrops:",
 "options": [
  "Reflect sunlight like plane mirrors",
  "Disperse sunlight into its colours by refraction and internal reflection",
  "Absorb all colours except seven",
  "Magnify the sun's image"
 ],
 "correctOption": 1,
 "answer": "Each raindrop acts like a tiny prism: sunlight refracts on entering the drop, is internally reflected at its back surface, and refracts again on leaving — getting dispersed into VIBGYOR. Millions of drops together produce the rainbow, seen when the sun is behind the observer.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m16",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When Newton's disc, painted with the seven rainbow colours, is rotated rapidly, it appears nearly white. This shows that:",
 "options": [
  "The colours evaporate at high speed",
  "White light is a mixture of the seven colours, which the eye blends when they arrive in quick succession",
  "The disc reflects only white light when moving",
  "Rotation generates new light"
 ],
 "correctOption": 1,
 "answer": "The spinning disc presents each colour to the eye so quickly that the impressions merge (persistence of vision), recombining the colours into the sensation of white. It is the reverse of dispersion and proves white light is a mixture of seven colours.",
 "source": "icse",
 "linksTo": "phy-s5-sec_10",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m17",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A second identical prism, placed inverted after the first prism, makes the dispersed colours:",
 "options": [
  "Spread out even more",
  "Recombine into white light",
  "Disappear completely",
  "Turn into only red light"
 ],
 "correctOption": 1,
 "answer": "The inverted second prism bends the separated colours by equal and opposite amounts, bringing them back together to emerge as white light. This was Newton's classic demonstration that the prism does not 'create' colours — it only separates what white light already contains.",
 "source": "icse",
 "linksTo": "phy-s5-sec_10",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m18",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Convex mirrors are preferred as rear-view mirrors in vehicles because they:",
 "options": [
  "Form magnified images of vehicles behind",
  "Always form erect, diminished images and give a much wider field of view",
  "Form real images that are easy to see",
  "Reflect more light than other mirrors"
 ],
 "correctOption": 1,
 "answer": "A convex mirror diverges light, forming small erect images of everything behind the vehicle, so a large region fits into a small mirror (wide field of view). The trade-off: objects appear smaller — and hence farther — than they really are.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m19",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The reflecting surface of the mirror used in a car headlight (behind the bulb) is:",
 "options": [
  "Plane",
  "Convex",
  "Concave, with the bulb at its focus",
  "Concave, with the bulb at its centre of curvature"
 ],
 "correctOption": 2,
 "answer": "With the bulb at the FOCUS of a concave reflector, rays after reflection emerge PARALLEL, throwing an intense straight beam far down the road. At the centre of curvature the rays would simply converge back, not form a beam.",
 "source": "icse",
 "linksTo": "phy-s5-sec_08",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-m20",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A coin lying at the bottom of an empty opaque cup is just hidden from view. When water is gently poured into the cup (without disturbing the coin), the coin becomes visible because:",
 "options": [
  "Water magnifies the coin",
  "Light from the coin bends away from the normal at the water surface and reaches the eye",
  "The coin floats up",
  "Water reflects light onto the coin"
 ],
 "correctOption": 1,
 "answer": "Rays from the coin, on passing from water to air, bend away from the normal. Some of these bent rays now enter the observer's eye over the rim of the cup. The eye traces them straight back and sees the coin raised above its actual position.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-m21",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The angle of refraction is the angle between:",
 "options": [
  "The refracted ray and the surface",
  "The refracted ray and the normal at the point of incidence",
  "The incident ray and the refracted ray",
  "The incident ray and the surface"
 ],
 "correctOption": 1,
 "answer": "Both the angle of incidence and the angle of refraction are always measured from the NORMAL (the perpendicular to the surface at the point of incidence), not from the surface itself.",
 "source": "icse",
 "linksTo": "phy-s5-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m22",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A ray of light bends when it passes obliquely from air into water.\nReason (R): The speed of light changes as it moves from one transparent medium to another.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Refraction is fundamentally caused by the change in the speed of light between media (light is slower in water than air). The change in speed at oblique incidence changes the ray's direction. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m23",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A virtual image cannot be caught on a screen.\nReason (R): A virtual image is formed at a point from which reflected rays only appear to diverge — no light actually meets there.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Since no actual light rays pass through the position of a virtual image, a screen placed there receives no light and shows nothing. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s5-sec_07",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m24",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A convex mirror is used as a vehicle's side mirror.\nReason (R): A convex mirror forms magnified images of vehicles behind.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true, but R is false — a convex mirror always forms DIMINISHED (smaller) images, never magnified. It is chosen for its wide field of view, which the small erect images make possible.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m25",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A glass prism produces a spectrum from white light, but a rectangular glass slab does not produce a visible spectrum.\nReason (R): In a slab the two refracting surfaces are parallel, so the colours separated at the first surface are bent back parallel and recombine on emerging.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "In a prism the refracting surfaces are inclined, so the separation of colours increases at the second surface. In a slab the parallel surfaces undo the separation: emergent colours travel parallel and overlap, appearing white. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-m26",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): In the prism spectrum, violet light deviates more than red light.\nReason (R): Violet light travels more slowly in glass than red light.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "The slower a colour travels in glass, the more it bends. Violet is slowed the most, so it deviates the most; red is slowed the least and deviates the least. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-m27",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): To a fisherman standing on a river bank, a fish appears closer to the surface than it actually is.\nReason (R): Light from the fish bends away from the normal as it passes from water into air.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Rays from the fish refract away from the normal at the surface; traced back, they appear to come from a point above the fish's real position (apparent depth < real depth). This is why one must aim BELOW the apparent position to spear a fish. R explains A.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-m28",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about a concave mirror:\nI. It can form both real and virtual images.\nII. Its principal focus is a real point in front of the mirror.\nIII. It always forms diminished images.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct: a concave mirror forms real images for objects beyond F and a virtual magnified image for objects within F; parallel rays really converge at its focus. III is wrong — image size ranges from diminished (object beyond C) to magnified (object between C and F, or within F).",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-m29",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about refraction:\nI. Light bends towards the normal when entering an optically denser medium.\nII. Light bends away from the normal when entering an optically rarer medium.\nIII. The speed of light remains the same in all media.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are the standard rules of refraction. III is wrong — the SPEED of light is different in different media (fastest in vacuum/air, slower in water and glass); this speed change is the very cause of refraction.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-m30",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about the visible spectrum:\nI. The order of colours is given by VIBGYOR.\nII. The prism adds colours to white light.\nIII. Red light has the least deviation and violet the most.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I and III are correct. II is wrong — the prism does not add or create colours; it only separates the colours already present in white light (proved by recombining them with a second inverted prism).",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t01",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Light travels at the same speed in air and in glass.",
 "correctAnswer": "false",
 "answer": "False. Light travels slower in glass (an optically denser medium) than in air. This change of speed is what causes refraction.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t02",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The focal length of a spherical mirror is half its radius of curvature.",
 "correctAnswer": "true",
 "answer": "True. f = R/2 — the principal focus lies midway between the pole and the centre of curvature.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t03",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A real image is always inverted with respect to the object.",
 "correctAnswer": "true",
 "answer": "True. Real images, formed by the actual intersection of rays, are always inverted; virtual images are always erect.",
 "source": "icse",
 "linksTo": "phy-s5-sec_07",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-t04",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A convex mirror can form a real image of a normal object placed in front of it.",
 "correctAnswer": "false",
 "answer": "False. A convex mirror always forms a virtual, erect, diminished image behind the mirror, no matter where the object is placed.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t05",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "In dispersion through a prism, violet light deviates the most.",
 "correctAnswer": "true",
 "answer": "True. Violet travels slowest in glass and so bends the most; red travels fastest and bends the least.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t06",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A tank of water appears deeper than it actually is.",
 "correctAnswer": "false",
 "answer": "False. Due to refraction, the tank appears SHALLOWER than it really is — the apparent depth is less than the real depth.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t07",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The centre of the reflecting surface of a spherical mirror is called its pole.",
 "correctAnswer": "true",
 "answer": "True. The pole (P) is the midpoint of the mirror's reflecting surface; the line joining the pole to the centre of curvature is the principal axis.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-t08",
 "topicId": "ch5-light",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A concave mirror used as a shaving mirror forms a magnified, erect image when the face is held between the pole and the focus.",
 "correctAnswer": "true",
 "answer": "True. For an object within the focal length, a concave mirror gives a virtual, erect, magnified image — the principle of shaving, make-up and dentist's mirrors.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-f01",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The bending of light as it passes obliquely from one transparent medium to another is called _______.",
 "blankAnswer": "refraction",
 "answer": "Refraction — caused by the change in the speed of light between the two media.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-f02",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The splitting of white light into its seven constituent colours is called _______.",
 "blankAnswer": "dispersion",
 "answer": "Dispersion — seen when white light passes through a prism, or through raindrops forming a rainbow.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-f03",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The point on the principal axis where rays parallel to the axis meet (or appear to meet) after reflection is called the principal _______.",
 "blankAnswer": "focus",
 "answer": "Principal focus (F) — real for a concave mirror, virtual for a convex mirror; f = R/2.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-f04",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The band of seven colours obtained when white light passes through a prism is called a _______.",
 "blankAnswer": "spectrum",
 "answer": "Spectrum — with colours in the order violet, indigo, blue, green, yellow, orange, red (VIBGYOR).",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-f05",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "An image that can be obtained on a screen is called a _______ image.",
 "blankAnswer": "real",
 "answer": "Real image — formed by the actual meeting of light rays; it is always inverted.",
 "source": "icse",
 "linksTo": "phy-s5-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-f06",
 "topicId": "ch5-light",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "A ray of light passing from glass into air bends _______ from the normal.",
 "blankAnswer": "away",
 "answer": "Away — light speeds up on entering the rarer medium (air) and bends away from the normal.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-x01",
 "topicId": "ch5-light",
 "type": "match",
 "subtopic": "Match",
 "question": "Match the position of an object in front of a concave mirror with the image formed:",
 "pairs": [
  {
   "left": "Object at infinity",
   "right": "Image at focus — real, inverted, highly diminished"
  },
  {
   "left": "Object beyond C",
   "right": "Image between C and F — real, inverted, diminished"
  },
  {
   "left": "Object at C",
   "right": "Image at C — real, inverted, same size"
  },
  {
   "left": "Object between C and F",
   "right": "Image beyond C — real, inverted, magnified"
  },
  {
   "left": "Object between P and F",
   "right": "Image behind mirror — virtual, erect, magnified"
  }
 ],
 "answer": "As the object moves from infinity towards the mirror, the real image moves from F outward past C, growing from highly diminished to magnified; once the object crosses inside F, the image jumps behind the mirror and becomes virtual, erect and magnified.",
 "source": "icse",
 "linksTo": "phy-s5-sec_08",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-x02",
 "topicId": "ch5-light",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each mirror application with the mirror used and why:",
 "pairs": [
  {
   "left": "Vehicle rear-view mirror",
   "right": "Convex — erect diminished images, wide field of view"
  },
  {
   "left": "Shaving / make-up mirror",
   "right": "Concave — magnified erect image within focus"
  },
  {
   "left": "Torch and headlight reflector",
   "right": "Concave — bulb at focus gives parallel beam"
  },
  {
   "left": "Dentist's mirror",
   "right": "Concave — small magnified view of teeth"
  },
  {
   "left": "Solar furnace / solar cooker reflector",
   "right": "Concave — converges sunlight to its focus"
  }
 ],
 "answer": "Convex mirrors give wide-angle diminished views. Concave mirrors either magnify (object inside F) or, run in reverse, turn a focal source into a parallel beam — and converge sunlight to a hot focus.",
 "source": "icse",
 "linksTo": "phy-s5-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-x03",
 "topicId": "ch5-light",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each term with its definition for a spherical mirror:",
 "pairs": [
  {
   "left": "Pole (P)",
   "right": "Midpoint of the reflecting surface"
  },
  {
   "left": "Centre of curvature (C)",
   "right": "Centre of the sphere of which the mirror is a part"
  },
  {
   "left": "Radius of curvature (R)",
   "right": "Distance between pole and centre of curvature"
  },
  {
   "left": "Principal axis",
   "right": "Straight line through pole and centre of curvature"
  },
  {
   "left": "Aperture",
   "right": "The width of the mirror's reflecting surface"
  }
 ],
 "answer": "These five terms describe any spherical mirror; in addition, the principal focus F lies midway between P and C, so f = R/2.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-s01",
 "topicId": "ch5-light",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why does a coin lying at the bottom of a bucket of water appear raised? Explain with the path of light rays.",
 "answer": "Rays of light from the coin travel up through the water and refract at the water–air surface, bending AWAY from the normal (water is denser than air). The observer's eye traces these bent rays backwards in straight lines, so they appear to come from a point ABOVE the coin's actual position. The coin therefore appears raised, and the water appears shallower than it really is (apparent depth < real depth).",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-s02",
 "topicId": "ch5-light",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Give three differences between a real image and a virtual image.",
 "answer": "1. A real image is formed by the ACTUAL meeting of rays after reflection/refraction; a virtual image is formed where rays only APPEAR to meet when traced backwards. 2. A real image can be obtained on a screen; a virtual image cannot. 3. A real image is always inverted; a virtual image is always erect. (Example: a concave mirror forms a real image of a distant building, while a plane mirror always forms a virtual image of your face.)",
 "source": "icse",
 "linksTo": "phy-s5-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c5-s03",
 "topicId": "ch5-light",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "How would you use a concave mirror and a sheet of paper to find its approximate focal length on a sunny day?",
 "answer": "Hold the concave mirror facing the sun, and move a small sheet of paper in front of it until the sunlight reflected by the mirror converges to the smallest, brightest spot on the paper. Since the sun is effectively at infinity, its rays are parallel and converge at the principal focus. The distance from the mirror to this sharp bright spot, measured with a scale, equals the focal length. (Caution: the spot is hot — the paper may char, which itself shows the energy concentration at the focus.)",
 "source": "icse",
 "linksTo": "phy-s5-sec_08",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c5-s04",
 "topicId": "ch5-light",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain how a rainbow is formed. Why is it seen only when the sun is behind the observer?",
 "answer": "After rain, millions of tiny water droplets remain suspended in air. Sunlight entering each drop is refracted (and dispersed into seven colours), reflected internally from the back surface of the drop, and refracted again on leaving. Each drop thus acts like a tiny prism-and-mirror, sending the dispersed colours back at a particular angle (~40–42°) towards the side of the sun. The observer therefore sees the colourful arc only when facing AWAY from the sun, with sunlight coming from behind and striking the raindrops in front.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-s05",
 "topicId": "ch5-light",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "State what happens to the speed, the direction, and the colour-composition of a beam of white light as it passes through a triangular glass prism.",
 "answer": "Speed: the light slows down inside the glass and regains its original speed on leaving. Direction: at each inclined surface the light bends (towards the normal on entering, away on leaving); overall the beam is deviated towards the base of the prism. Colour-composition: the different colours slow by different amounts, so they bend by different angles — white light is dispersed into the seven VIBGYOR colours, violet deviating most and red least. The prism separates but does not create the colours.",
 "source": "icse",
 "linksTo": "phy-s5-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-d01",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_05_light_energy/fig_008.jpg",
 "caption": "Refraction of light from air into water",
 "question": "In the diagram, ray AO travels through air and bends at O to follow OB in water, with angle i marked in air and angle r in water. Which statement is correct?",
 "options": [
  "Angle r is greater than angle i because water is denser",
  "Angle r is smaller than angle i — the ray bends towards the normal N₁N₂ on entering the optically denser water",
  "The ray does not bend at O",
  "Angles i and r are always equal"
 ],
 "correctOption": 1,
 "answer": "Going from a rarer medium (air) into a denser one (water), light slows down and bends TOWARDS the normal, so the angle of refraction r is smaller than the angle of incidence i. Both angles are measured from the normal N₁N₂, not from the surface XY.",
 "source": "icse",
 "linksTo": "phy-s5-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c5-d02",
 "topicId": "ch5-light",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_05_light_energy/fig_023.jpg",
 "caption": "Parallel rays reflected by a concave mirror",
 "question": "In the ray diagram, rays parallel to the principal axis strike the concave mirror MM′ and after reflection pass through point F, which lies between C and the pole P. Point F is called the:",
 "options": [
  "Centre of curvature — and CF equals the focal length",
  "Principal focus — and PF (the focal length) equals half of PC (the radius of curvature)",
  "Pole of the mirror",
  "Virtual focus, located behind the mirror"
 ],
 "correctOption": 1,
 "answer": "The point where rays parallel to the principal axis actually meet after reflection from a concave mirror is the PRINCIPAL FOCUS (F). It is real (in front of the mirror) and lies midway between the pole P and the centre of curvature C, so f = R/2. For a convex mirror the focus would be virtual, behind the mirror.",
 "source": "icse",
 "linksTo": "phy-s5-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-s6-sec_01",
 "topicId": "ch6-heat",
 "type": "note",
 "subtopic": "1. Thermal Expansion in Solids and Its Applications",
 "content": "On heating, a solid expands; on cooling it contracts. Molecules vibrate more vigorously and push slightly farther apart — the molecules themselves do not grow.\n\n**Three kinds of expansion**\n• **Linear** (length), **superficial** (area), **cubical** (volume).\n• If α, β, γ are their coefficients: **β = 2α, γ = 3α** (α : β : γ = 1 : 2 : 3).\n• Different solids expand DIFFERENTLY (brass more than iron); **INVAR** (Fe–Ni alloy) hardly expands — used for precision tapes and clock pendulums.\n\n**Allowing for expansion**\n• **Gaps between rails**; expansion joints in bridges and concrete roads; **bridge girders on rollers**.\n• Electric/telephone wires strung **sagging** in summer so winter contraction cannot snap them.\n• Small gaps at the ends of steel girders and around glass window panes.\n\n**Using expansion deliberately**\n• **Iron rim** heated, slipped on a cart wheel, cooled to grip (shrink fitting).\n• **Red-hot rivets** hammered in; contraction clamps the plates.\n• Hot water loosens a tight metal lid (metal expands more than glass).\n• **Bimetallic strip** (two metals joined): bends on heating because they expand unequally — the working part of thermostats, electric irons, fire alarms.\n\n**Problems caused by expansion**\n• Thick glass cracks with boiling water (inner layer expands first, outer stays cool).\n• A pendulum clock **loses time in summer** (longer rod → slower swing) and gains in winter.",
 "explanation": "Almost every application is one of three moves: leave room for expansion (gaps, rollers, sag), exploit contraction (rims, rivets, lids), or exploit UNEQUAL expansion (bimetallic strip, cracking glass).",
 "source": "icse",
 "examTip": "For any 'give reason' on rails/wires/rivets, name the season and the direction of change (expands in summer / contracts in winter) — vague answers lose the mark.",
 "linkedMcqCount": 28
},
{
 "id": "phy-s6-sec_05",
 "topicId": "ch6-heat",
 "type": "note",
 "subtopic": "2. Expansion of Liquids; the Water Anomaly",
 "content": "A liquid has no shape of its own, so only **cubical (volume) expansion** is meaningful for it.\n\n• Liquids generally expand MORE than solids for the same temperature rise.\n• **Different liquids expand differently** (alcohol expands more than water).\n• **Thermometer principle**: mercury expands regularly up a fine capillary as temperature rises.\n• Flask-and-tube experiment: plunged into hot water, the liquid level first **dips** (the glass flask expands first, enlarging its capacity), then **rises steadily** as the liquid's larger expansion takes over.\n\n**Anomalous expansion of water**\n• From 0 °C to 4 °C water **CONTRACTS** on heating; above 4 °C it expands normally.\n• So water has **maximum density at 4 °C** (1 g/cm³); ice is LESS dense (R.D. ≈ 0.9) because water **expands on freezing** (~1/11 of its volume).\n\n**Consequences**\n• **Ice floats** on water.\n• **Ponds freeze only at the top**: 4 °C water sinks to the bottom; colder, lighter water rises and freezes at the surface; the ice sheet insulates the water below — **fish survive** the winter.\n• **Water pipes burst** in severe winters; a sealed full bottle cracks in a freezer — freezing water expands with enormous force.",
 "explanation": "Anomalous = 'opposite to normal'. Keep the two ranges separate: 0→4 °C contracts (density rising), above 4 °C expands (density falling). The 4 °C point is the answer to almost every question on this topic.",
 "source": "icse",
 "examTip": "The pond diagram — ice on top, 4 °C water at the bottom, fish swimming — is worth drawing even when not asked; it makes the explanation self-evident.",
 "linkedMcqCount": 16
},
{
 "id": "phy-s6-sec_07",
 "topicId": "ch6-heat",
 "type": "note",
 "subtopic": "3. Expansion in Gases",
 "content": "Gases expand the **most** of the three states — their molecules are nearly free, so heating speeds them up and they push outward strongly.\n\n• For the same temperature rise, **all gases expand nearly equally** (unlike solids and liquids, which are substance-specific) — because intermolecular forces are negligible in every gas.\n• Expansion order for equal heating: **solid < liquid << gas**.\n\n**Demonstration**: balloon stretched over an 'empty' (air-filled) flask standing in hot water — the balloon inflates as the trapped air expands; in cold water it collapses again.\n\n**Everyday examples**\n• A **hot-air balloon** rises: heated air expands, becomes less dense than the surrounding cold air, and floats upward.\n• Car/bicycle **tyres can burst on hot days or long drives**: the enclosed air cannot expand freely, so its pressure climbs.\n• Never throw 'empty' aerosol cans or sealed containers into fire — the trapped gas expands dangerously.",
 "explanation": "If the gas is FREE to expand, its volume grows (balloon); if it is CONFINED, its pressure grows instead (tyre). Spotting which case a question describes gives the answer immediately.",
 "source": "icse",
 "examTip": "'All gases expand equally, but liquids/solids each in their own way' — a favourite true/false; the reason is the negligible intermolecular force in gases.",
 "linkedMcqCount": 10
},
{
 "id": "phy-c6-m01",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A small gap is deliberately left between two successive rails of a railway track because:",
 "options": [
  "It saves steel",
  "Rails expand in summer heat and need room to expand without bending the track",
  "It helps trains grip the track",
  "Gaps reduce the noise of the train"
 ],
 "correctOption": 1,
 "answer": "Solids expand on heating. On hot days the rails lengthen; without expansion gaps, the rails would push against each other and buckle sideways, derailing trains. The gaps give the rails room to expand safely.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m02",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Telephone and electric wires strung between poles are kept slightly loose (sagging) in summer installations because:",
 "options": [
  "Tight wires carry less current",
  "The wires will contract in winter, and a taut wire would snap",
  "Loose wires look better",
  "Birds prefer loose wires"
 ],
 "correctOption": 1,
 "answer": "Wires contract on cooling. If installed taut in summer, the winter contraction would create huge tension and snap the wires. The sag allows for contraction. (Conversely, wires installed in winter hang with extra sag in summer.)",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m03",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "An iron rim, slightly smaller than a wooden cart wheel, is fitted onto the wheel by:",
 "options": [
  "Hammering it on while cold",
  "Heating the rim so it expands, slipping it on, then cooling it so it contracts and grips tightly",
  "Cutting the wheel smaller",
  "Using strong glue"
 ],
 "correctOption": 1,
 "answer": "Heating expands the rim enough to slip over the wheel. On cooling, the rim contracts and grips the wheel with tremendous force. This 'shrink fitting' uses thermal expansion and contraction of solids.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m04",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In the ball-and-ring experiment, a metal ball that just passes through a ring fails to pass after being strongly heated. This demonstrates that:",
 "options": [
  "Metals become sticky when hot",
  "Solids expand in volume on heating",
  "The ring contracts when the ball is heated",
  "Hot metals become magnetic"
 ],
 "correctOption": 1,
 "answer": "Heating increases the ball's volume (cubical expansion), so it can no longer pass through the ring. After cooling, it contracts back and passes through again — a classic demonstration of thermal expansion of solids.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m05",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "For the same rise in temperature, the order of expansion (least to greatest) is generally:",
 "options": [
  "Gases < liquids < solids",
  "Solids < liquids < gases",
  "Liquids < solids < gases",
  "Gases < solids < liquids"
 ],
 "correctOption": 1,
 "answer": "Solids expand least (molecules tightly bound), liquids expand more, and gases expand the most (negligible intermolecular forces). For equal temperature rise: solids < liquids << gases.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m06",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A tight metal lid on a glass jar opens easily after hot water is poured over the lid because:",
 "options": [
  "Hot water acts as a lubricant",
  "The metal lid expands more than the glass neck, loosening its grip",
  "The glass contracts in hot water",
  "Steam pushes the lid up"
 ],
 "correctOption": 1,
 "answer": "Metals expand more than glass for the same temperature rise. Hot water heats the lid quickly; it expands more than the glass mouth of the jar, so the lid loosens and unscrews easily.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m07",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Thick glass tumblers often crack when boiling water is poured into them because:",
 "options": [
  "Boiling water is too heavy",
  "The inner surface expands suddenly while the outer surface stays cool and unexpanded, setting up strain",
  "Glass melts at 100 °C",
  "Steam pressure breaks the glass"
 ],
 "correctOption": 1,
 "answer": "Glass is a poor conductor of heat. The inner layer of a thick tumbler heats and expands immediately, but the heat takes time to reach the outer layer, which remains cool. The unequal expansion of the two layers strains the glass and cracks it. Thin glass or borosilicate (low-expansion) glass survives.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-m08",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A bimetallic strip made of brass and iron bends when heated because:",
 "options": [
  "Brass melts before iron",
  "Brass and iron expand by different amounts for the same temperature rise",
  "Iron is magnetic",
  "The strip becomes lighter"
 ],
 "correctOption": 1,
 "answer": "Different metals have different expansivities. Brass expands more than iron, so the heated strip curves with brass on the outer (longer) side. Bimetallic strips work as automatic switches in thermostats, electric irons and fire alarms.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m09",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Liquids have no definite shape of their own. Hence, for liquids, only one type of thermal expansion is meaningful — the expansion of:",
 "options": [
  "Length (linear)",
  "Area (superficial)",
  "Volume (cubical)",
  "Mass"
 ],
 "correctOption": 2,
 "answer": "Linear and superficial expansion require a definite shape (length, surface). A liquid only has a definite volume, so we speak only of its cubical (volume) expansion. Mass never changes on heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m10",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A mercury thermometer works on the principle that:",
 "options": [
  "Mercury is a metal",
  "Liquids expand on heating, and mercury's expansion is regular and visible in a fine tube",
  "Mercury evaporates when warm",
  "Glass conducts heat to the scale"
 ],
 "correctOption": 1,
 "answer": "The mercury in the bulb expands up the fine capillary as temperature rises (and contracts on cooling). Because mercury expands uniformly, is opaque and does not wet glass, its thread position measures temperature accurately.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m11",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When a flask of coloured water fitted with a narrow tube is plunged into hot water, the liquid level in the tube first DIPS slightly and then rises steadily. The initial dip occurs because:",
 "options": [
  "Some water evaporates immediately",
  "The glass flask receives the heat first and expands before the water inside starts expanding",
  "Air pressure pushes the liquid down",
  "The dye settles to the bottom"
 ],
 "correctOption": 1,
 "answer": "Heat reaches the glass first: the flask expands, increasing its capacity, so the liquid level drops momentarily. Once the heat reaches the water, the water expands much more than glass and the level rises well above the start. A subtle but classic observation on real vs apparent expansion.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-m12",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Equal volumes of different liquids (e.g., water, alcohol, oil) heated through the same temperature rise expand:",
 "options": [
  "By exactly equal amounts",
  "By different amounts — each liquid has its own expansivity",
  "Not at all",
  "Only if they are coloured"
 ],
 "correctOption": 1,
 "answer": "Different liquids expand differently: e.g., alcohol expands much more than water for the same heating. (In contrast, all GASES expand nearly equally for the same temperature rise.)",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m13",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A balloon placed over the mouth of an empty bottle inflates by itself when the bottle is placed in hot water. This shows that:",
 "options": [
  "The balloon absorbs water",
  "The air inside the bottle expands considerably on heating",
  "The bottle shrinks",
  "Hot water releases gas into the bottle"
 ],
 "correctOption": 1,
 "answer": "The 'empty' bottle is full of air. On heating, the trapped air expands greatly (gases expand the most) and pushes into the balloon, inflating it. Cooling the bottle makes the balloon collapse again.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m14",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The anomalous expansion of water refers to the fact that water:",
 "options": [
  "Never expands on heating",
  "Contracts when heated from 0 °C to 4 °C and expands only above 4 °C",
  "Expands twice as much as other liquids",
  "Boils at different temperatures"
 ],
 "correctOption": 1,
 "answer": "Unlike normal liquids, water CONTRACTS as it warms from 0 °C to 4 °C, reaching maximum density (minimum volume) at 4 °C; beyond 4 °C it expands normally. This anomalous behaviour is vital for aquatic life in cold climates.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m15",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Water has its maximum density at:",
 "options": [
  "0 °C",
  "4 °C",
  "100 °C",
  "−4 °C"
 ],
 "correctOption": 1,
 "answer": "At 4 °C water occupies its minimum volume and hence has maximum density (1 g/cm³). Both below and above 4 °C its density is slightly less.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m16",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Fish survive in a pond even when its surface is frozen because:",
 "options": [
  "Fish can breathe ice",
  "Water at 4 °C, being densest, sinks to the bottom and stays liquid below the floating ice layer",
  "The ice heats the water below",
  "Fish hibernate inside the ice"
 ],
 "correctOption": 1,
 "answer": "As a pond cools, water at 4 °C (maximum density) sinks to the bottom. Colder, lighter water rises and freezes at the top. Ice, being a poor conductor, then insulates the water below, which remains around 4 °C — letting fish and aquatic life survive. A direct consequence of anomalous expansion.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-m17",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Water pipes in very cold countries sometimes burst in winter because:",
 "options": [
  "The pipes contract and crack",
  "Water expands on freezing into ice, and the expanding ice splits the pipe",
  "Ice is heavier than water",
  "Cold metal becomes soft"
 ],
 "correctOption": 1,
 "answer": "Water is anomalous: on freezing it EXPANDS by about one-eleventh of its volume. Ice forming inside a closed pipe pushes outwards with enormous force and bursts the pipe. (For the same reason a sealed glass bottle full of water cracks in a freezer.)",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m18",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A pendulum clock with a metal pendulum tends to run SLOW in summer because:",
 "options": [
  "The air is thicker in summer",
  "The pendulum rod expands, making it longer, so each swing takes slightly more time",
  "The clock's spring melts",
  "Summer days are longer"
 ],
 "correctOption": 1,
 "answer": "The period of a pendulum increases with its length. In summer the metal rod expands and lengthens, each oscillation takes longer, and the clock loses time. In winter the rod contracts and the clock gains time. Precision clocks use INVAR, an alloy with negligible expansion.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-m19",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Steel measuring tapes of high quality are made of INVAR because INVAR:",
 "options": [
  "Is very cheap",
  "Has negligible thermal expansion, so measurements stay accurate in all seasons",
  "Is very flexible",
  "Cannot rust"
 ],
 "correctOption": 1,
 "answer": "An ordinary metal tape expands in summer and contracts in winter, introducing errors. INVAR (an iron–nickel alloy) has an extremely small expansivity, so an INVAR tape reads accurately at any temperature.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m20",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Steel girders of bridges are mounted on rollers at one end rather than being fixed at both ends, so that:",
 "options": [
  "The bridge can be dismantled easily",
  "The girders can expand and contract freely with seasonal temperature changes without straining the structure",
  "The bridge can swing in the wind",
  "Vehicles move more smoothly"
 ],
 "correctOption": 1,
 "answer": "A long steel girder changes length noticeably between winter and summer. Rollers at one end let it slide as it expands or contracts; if both ends were fixed, the huge forces of expansion would crack the supports or buckle the girder.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m21",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "For most solids, if α is the coefficient of linear expansion, β of superficial expansion, and γ of cubical expansion, the relation is:",
 "options": [
  "β = 2α and γ = 3α",
  "β = 3α and γ = 2α",
  "α = 2β = 3γ",
  "α = β = γ"
 ],
 "correctOption": 0,
 "answer": "Area involves two dimensions and volume three, so superficial expansivity is about twice the linear (β = 2α) and cubical about three times (γ = 3α). Equivalently γ = 3α, β = 2α, i.e., α : β : γ = 1 : 2 : 3.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m22",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Gaps are left between concrete slabs of long cement roads and bridges.\nReason (R): Concrete expands in summer heat, and the gaps prevent the slabs from pressing against each other and cracking.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Expansion joints in roads and bridges serve exactly this purpose — they absorb thermal expansion of the slabs. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m23",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A bimetallic strip can switch an electric circuit on or off automatically as temperature changes.\nReason (R): The two metals of the strip expand equally when heated.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true — thermostats use bimetallic strips. But R is false: the strip works precisely because the two metals expand UNEQUALLY, making the strip bend towards the lesser-expanding metal and make/break the contact.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m24",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): In winter, the top of a pond freezes while the water near the bottom remains at about 4 °C.\nReason (R): Water at 4 °C has maximum density and therefore stays at the bottom.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Anomalous expansion gives water maximum density at 4 °C; this densest water sinks while colder (lighter) water rises and freezes at the surface. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m25",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): All gases expand nearly equally for the same rise in temperature.\nReason (R): The intermolecular forces in gases are negligible, so the nature of the gas hardly matters in its expansion.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "In solids and liquids, expansion depends on intermolecular forces specific to the substance. Gas molecules are essentially free, so all gases behave alike and expand almost equally for the same temperature rise. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-m26",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A rivet is inserted red-hot while joining two steel plates.\nReason (R): On cooling, the rivet contracts and pulls the plates tightly together.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "The hot rivet is hammered to fill the hole; as it cools it contracts strongly along its length, clamping the plates with great force. Thermal contraction is the working principle of hot riveting. R explains A.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m27",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. Solids show linear, superficial and cubical expansion.\nII. Liquids show only cubical (volume) expansion.\nIII. Gases expand the least among the three states.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — gases expand the MOST on heating; solids expand the least.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-m28",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about water between 0 °C and 4 °C:\nI. It contracts on heating.\nII. Its density increases as the temperature rises towards 4 °C.\nIII. It behaves exactly like all other liquids.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II describe anomalous expansion: from 0 °C to 4 °C water shrinks in volume, so its density rises, peaking at 4 °C. III is wrong — this behaviour is unusual; ordinary liquids expand steadily on heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m29",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following applications:\nI. Gaps between rails — allowance for expansion of solids.\nII. Mercury thermometer — expansion of a liquid.\nIII. Hot-air balloon rising — expansion of a gas making it less dense.\nWhich statements correctly pair the application with its principle?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 3,
 "answer": "All three are correctly paired. Rails: solid expansion. Thermometer: liquid (mercury) expansion. Hot-air balloon: heated air expands, becomes less dense than the cold air outside, and the balloon floats upward.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-m30",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Application",
 "question": "On a hot afternoon, car tyres are sometimes slightly under-inflated before a long highway drive. The physics reason is that:",
 "options": [
  "Soft tyres grip better",
  "Friction heats the air in the tyre; the heated air expands and its pressure rises, which could over-pressurise a fully inflated tyre",
  "Petrol is saved with soft tyres",
  "Hot roads repair rubber"
 ],
 "correctOption": 1,
 "answer": "Long, fast driving heats the tyres. The trapped air expands on heating — but confined in the tyre, its pressure climbs. Starting slightly under-inflated leaves margin for this pressure rise and avoids a burst. An application of gas expansion on heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-t01",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "On heating, a solid expands in length, area and volume.",
 "correctAnswer": "true",
 "answer": "True. A heated solid undergoes linear (length), superficial (area) and cubical (volume) expansion, with β ≈ 2α and γ ≈ 3α.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-t02",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "All metals expand by the same amount for the same rise in temperature.",
 "correctAnswer": "false",
 "answer": "False. Different metals have different expansivities (e.g., brass expands more than iron). This very difference makes a bimetallic strip bend on heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-t03",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Gases expand much more than solids for the same rise in temperature.",
 "correctAnswer": "true",
 "answer": "True. With negligible intermolecular forces, gases expand far more than liquids, and liquids more than solids, for the same heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-t04",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Water expands continuously as it is heated from 0 °C to 100 °C.",
 "correctAnswer": "false",
 "answer": "False. From 0 °C to 4 °C water CONTRACTS (anomalous expansion), reaching maximum density at 4 °C; only above 4 °C does it expand on further heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-t05",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Ice occupies more volume than the water from which it is formed.",
 "correctAnswer": "true",
 "answer": "True. Water expands on freezing (by about 1/11 of its volume), which is why ice is less dense than water and floats — and why water pipes burst in severe winters.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-t06",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A pendulum clock gains time in summer.",
 "correctAnswer": "false",
 "answer": "False. In summer the pendulum rod EXPANDS and lengthens, the swings become slower, and the clock LOSES time. It gains time in winter when the rod contracts.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-t07",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "For liquids, only cubical expansion is meaningful.",
 "correctAnswer": "true",
 "answer": "True. A liquid has no shape of its own — no fixed length or surface — so only its volume (cubical) expansion can be defined.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-t08",
 "topicId": "ch6-heat",
 "type": "true_false",
 "subtopic": "True False",
 "question": "INVAR is used in precision instruments because it expands greatly on heating.",
 "correctAnswer": "false",
 "answer": "False. INVAR is chosen for precisely the opposite reason — its thermal expansion is NEGLIGIBLE, so pendulums and measuring tapes made of it keep accurate dimensions in all seasons.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f01",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The expansion of a solid in length on heating is called _______ expansion.",
 "blankAnswer": "linear",
 "answer": "Linear expansion — increase in length; superficial is the increase in area, cubical the increase in volume.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f02",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Water has its maximum density at _______ °C.",
 "blankAnswer": "4",
 "answer": "4 °C — due to anomalous expansion, water contracts from 0 to 4 °C and expands above 4 °C.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f03",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "A strip made of two different metals joined together, which bends on heating, is called a _______ strip.",
 "blankAnswer": "bimetallic",
 "answer": "Bimetallic strip — bends because the two metals expand unequally; used in thermostats and fire alarms.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f04",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The alloy of iron and nickel with negligible thermal expansion, used in measuring tapes and clock pendulums, is called _______.",
 "blankAnswer": "invar",
 "answer": "INVAR — its name comes from 'invariable' because its dimensions hardly change with temperature.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f05",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "For the same rise in temperature, _______ expand the most among solids, liquids and gases.",
 "blankAnswer": "gases",
 "answer": "Gases — their molecules are nearly free, so all gases expand greatly and almost equally on heating.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-f06",
 "topicId": "ch6-heat",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The coefficient of cubical expansion γ of a solid is approximately _______ times its coefficient of linear expansion α.",
 "blankAnswer": "3",
 "answer": "Three: γ = 3α (and β = 2α), since volume involves three dimensions.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-x01",
 "topicId": "ch6-heat",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each engineering practice with the thermal effect it manages:",
 "pairs": [
  {
   "left": "Gaps between railway rails",
   "right": "Expansion of solids in summer"
  },
  {
   "left": "Sagging electric wires",
   "right": "Contraction of solids in winter"
  },
  {
   "left": "Bridge girder on rollers",
   "right": "Free expansion/contraction with seasons"
  },
  {
   "left": "Red-hot rivets in steel plates",
   "right": "Contraction on cooling grips the plates"
  },
  {
   "left": "Expansion joints in concrete roads",
   "right": "Expansion of slabs without cracking"
  }
 ],
 "answer": "Every structure that experiences seasonal temperature swings must allow solids to expand and contract: gaps and rollers give room, sagging gives slack, and rivet/rim fitting harnesses contraction deliberately.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-x02",
 "topicId": "ch6-heat",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each type of expansion with its description:",
 "pairs": [
  {
   "left": "Linear expansion",
   "right": "Increase in length of a solid"
  },
  {
   "left": "Superficial expansion",
   "right": "Increase in surface area of a solid"
  },
  {
   "left": "Cubical expansion",
   "right": "Increase in volume on heating"
  },
  {
   "left": "Anomalous expansion",
   "right": "Water contracting from 0 °C to 4 °C"
  },
  {
   "left": "Unequal expansion of two metals",
   "right": "Bending of a bimetallic strip"
  }
 ],
 "answer": "Linear → length, superficial → area, cubical → volume; water's contraction between 0–4 °C is the famous anomaly; differing expansivities of joined metals bend a bimetallic strip.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-x03",
 "topicId": "ch6-heat",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each observation with its explanation:",
 "pairs": [
  {
   "left": "Tight metal lid loosens under hot water",
   "right": "Metal expands more than glass"
  },
  {
   "left": "Thick tumbler cracks with boiling water",
   "right": "Unequal expansion of inner and outer glass layers"
  },
  {
   "left": "Hot-air balloon rises",
   "right": "Heated air expands and becomes less dense"
  },
  {
   "left": "Pond freezes only at the top",
   "right": "Densest water (4 °C) sinks to the bottom"
  },
  {
   "left": "Sealed water bottle cracks in a freezer",
   "right": "Water expands on freezing"
  }
 ],
 "answer": "Each is a thermal-expansion effect: differential expansion (lid, tumbler), gas expansion lowering density (balloon), anomalous expansion (pond), and expansion of water on freezing (bottle, burst pipes).",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-s01",
 "topicId": "ch6-heat",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain, using the kinetic theory, why a solid expands on heating.",
 "answer": "Heating increases the kinetic energy of the molecules, which vibrate more vigorously about their mean positions. The amplitude of vibration grows, so on average each molecule pushes slightly farther from its neighbours, increasing the average intermolecular separation. Since this happens throughout the solid, its length, area and volume all increase slightly — thermal expansion. The molecules themselves do not grow in size.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-s02",
 "topicId": "ch6-heat",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Describe how a bimetallic strip in an electric iron keeps the iron at a steady temperature.",
 "answer": "The strip is made of two metals with different expansivities (e.g., brass and iron) riveted together, and forms part of the heating circuit. As the iron heats up, the strip warms and bends towards the metal that expands less, because the other metal becomes longer. At the set temperature the bending breaks the electrical contact and the heating stops. As the iron cools, the strip straightens, contact is restored, and heating resumes. This automatic make-and-break cycle (a thermostat) holds the temperature nearly constant.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-s03",
 "topicId": "ch6-heat",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "What is the anomalous expansion of water? Explain its importance for aquatic life in cold countries.",
 "answer": "Most liquids expand steadily on heating, but water behaves abnormally between 0 °C and 4 °C: it CONTRACTS as it warms from 0 to 4 °C and reaches maximum density at 4 °C. Importance: as a pond cools in winter, surface water at 4 °C sinks (densest) and colder, lighter water stays on top, where it freezes first. The ice layer floats and, being a poor conductor, insulates the water beneath, which remains liquid at about 4 °C. Fish and other aquatic organisms survive in this unfrozen water all winter.",
 "source": "icse",
 "linksTo": "phy-s6-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-s04",
 "topicId": "ch6-heat",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Why does a thick glass tumbler crack when boiling water is suddenly poured into it, while a thin glass tumbler usually does not?",
 "answer": "Glass is a poor conductor of heat. In a thick tumbler, the inner surface heats up and expands at once, but the heat takes a long time to reach the outer surface, which stays cool and unexpanded. The two layers strain against each other and the glass cracks. In a thin tumbler the heat passes through quickly, both surfaces warm and expand almost together, and little strain develops. (Laboratory glassware uses borosilicate glass, whose expansion is very small.)",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c6-s05",
 "topicId": "ch6-heat",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Describe a simple experiment to show that air expands on heating.",
 "answer": "Fit a balloon (or a bent tube dipping into coloured water) over the mouth of an empty round-bottom flask. Place the flask in a trough of hot water. The balloon slowly inflates (or air bubbles escape through the water), showing that the air inside has expanded and needs more room. On placing the flask in cold water, the balloon shrivels (or water rises into the tube), showing the air contracts on cooling. Conclusion: gases expand on heating and contract on cooling, far more than solids or liquids.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c6-d01",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_06_heat_transfer/fig_024.jpg",
 "caption": "Gap left between two successive rails",
 "question": "The photograph shows a deliberate gap where two rails meet on a railway track. On a very hot afternoon, this gap will:",
 "options": [
  "Widen, because rails contract in heat",
  "Narrow, because the rails expand lengthwise into the gap",
  "Stay exactly the same",
  "Fill up with melted steel"
 ],
 "correctOption": 1,
 "answer": "Solids expand on heating. In summer heat each rail lengthens, and the expansion is accommodated by the gap, which becomes narrower. Without the gap the expanding rails would press on each other and buckle the track. In winter, contraction widens the gap again.",
 "source": "icse",
 "linksTo": "phy-s6-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c6-d02",
 "topicId": "ch6-heat",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_06_heat_transfer/fig_023.jpg",
 "caption": "Balloon on a flask placed in a water bath",
 "question": "In the experiment shown, a balloon is fitted over the mouth of a flask of air, and the flask stands in a water bath. If hot water is poured into the bath, the balloon inflates. This demonstrates that:",
 "options": [
  "Hot water enters the flask",
  "The air in the flask expands on heating and needs more volume",
  "The balloon becomes lighter when warm",
  "Glass expands and squeezes the air out"
 ],
 "correctOption": 1,
 "answer": "Heat from the water warms the trapped air, whose molecules move faster and push outward — the air expands greatly (gases expand the most of the three states) and inflates the balloon. Cooling the flask deflates it again, showing gases also contract on cooling.",
 "source": "icse",
 "linksTo": "phy-s6-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-s7-sec_01",
 "topicId": "ch7-sound",
 "type": "note",
 "subtopic": "1. How Sound Is Produced and How It Travels",
 "content": "**Sound is produced by vibrating bodies** — a drum skin, a plucked string, a tuning fork, our vocal cords. Stop the vibration (touch the bell) and the sound stops.\n\n**Sound needs a material medium** (solid, liquid or gas); it CANNOT travel through vacuum.\n• **Bell-jar experiment**: as air is pumped out, the ringing fades and disappears although the hammer is still seen striking; readmitting air restores it. (We still SEE the hammer — light needs no medium.)\n• Astronauts on the Moon must use radio — there is no air to carry their voices.\n\n**Speed of sound**: fastest in solids, slower in liquids, slowest in gases.\n• Steel ≈ 5000 m/s, water ≈ 1500 m/s, air ≈ **340 m/s**.\n• Closely packed molecules pass vibrations on quickly — hence an ear pressed to a rail hears a distant train earlier and louder than through air.\n\n**Lightning before thunder**: light arrives almost instantly (3 × 10⁸ m/s) while sound crawls at 340 m/s — every 3 s of delay ≈ 1 km of distance.",
 "explanation": "Sound travels as compressions and rarefactions of the medium's particles — the particles vibrate about their positions and hand the disturbance on; they do not travel with the wave.",
 "source": "icse",
 "examTip": "Bell-jar question = two marks: one for 'sound fades as air is removed', one for 'hammer still visible ⇒ light needs no medium'.",
 "linkedMcqCount": 10
},
{
 "id": "phy-s7-sec_02",
 "topicId": "ch7-sound",
 "type": "note",
 "subtopic": "2. Frequency, Pitch and the Audible Range",
 "content": "**Describing a vibration**\n• **Amplitude** — maximum displacement from the mean position.\n• **Frequency (f)** — number of vibrations per second; SI unit **hertz (Hz)**.\n• **Time period (T)** — time for one vibration; **T = 1/f** (reciprocals).\n\n**Pitch (shrillness) depends on FREQUENCY**\n• Higher frequency → shriller note; lower frequency → deeper note.\n• A mosquito's whine is high-pitched (fast wing-beats); a lion's roar is deep but loud.\n• **Strings**: shorter, tighter or thinner strings vibrate faster → higher pitch (guitar frets, tuning keys).\n• **Air columns**: shorter column → higher pitch (flute holes, whistles).\n• Women's and children's vocal cords are shorter and thinner → higher-pitched voices.\n\n**Audible range of the human ear: 20 Hz to 20,000 Hz**\n• Below 20 Hz: **infrasonic** (elephants, earthquake waves).\n• Above 20 kHz: **ultrasonic** — heard by bats, dogs, dolphins; used in sonar and medical ultrasound. Bats navigate in darkness by **echolocation** with ultrasonic squeaks.\n• A sound of a single fixed frequency is a **monotone** (tuning fork).",
 "explanation": "Pitch and loudness are independent: tightening a string raises pitch (frequency); plucking it harder raises loudness (amplitude) at the SAME pitch.",
 "source": "icse",
 "examTip": "Memorise the trio: pitch↔frequency, loudness↔amplitude, T = 1/f — they decide nearly every MCQ in this chapter.",
 "linkedMcqCount": 25
},
{
 "id": "phy-s7-sec_03",
 "topicId": "ch7-sound",
 "type": "note",
 "subtopic": "3. Wave Speed, Frequency and Wavelength",
 "content": "**Wavelength (λ)** — the length of one complete wave: the distance between two consecutive compressions (or rarefactions).\n\n**The wave equation**: **speed = frequency × wavelength**, v = f λ.\n\n**Worked patterns**\n• f = 500 Hz, λ = 0.68 m → v = 500 × 0.68 = **340 m/s** (speed of sound in air).\n• 20 oscillations in 4 s → f = 5 Hz, T = 1/5 = 0.2 s.\n• Thunder 6 s after the flash → distance = 340 × 6 = **2040 m ≈ 2 km**.\n\n**Checklist**\n• f in Hz, λ in m, v in m/s.\n• Frequency is set by the SOURCE; it does not change as sound travels or with distance.\n• In a new medium the SPEED and WAVELENGTH change, but the frequency stays the same.",
 "explanation": "Distance from a storm: count seconds between flash and thunder, multiply by ~340 m (≈ 1 km per 3 s) — the light's travel time is negligible.",
 "source": "icse",
 "examTip": "Rearrange v = fλ before substituting (f = v/λ, λ = v/f); rearranging with numbers already inside is where slips happen.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s7-sec_05",
 "topicId": "ch7-sound",
 "type": "note",
 "subtopic": "4. Loudness and Its Factors",
 "content": "**Loudness depends mainly on AMPLITUDE** — in fact loudness ∝ (amplitude)². Strike a drum harder: larger amplitude, louder sound, SAME pitch.\n\n**Other factors affecting the loudness heard**\n• **Distance from the source** — the sound energy spreads over a growing area, so loudness falls with distance (frequency does not change).\n• **Surface area of the vibrating body** — a tuning fork alone is faint; pressed on a table it sounds loud because the table-top sets far more air vibrating. Sounding boards of guitars, violins and pianos use this.\n• **Density of the medium** — denser air (or wind blowing toward the listener) carries sound better.\n• **Sensitivity of the listener's ear**.\n\n**Measuring loudness**: the **decibel (dB)**.\n• Whisper ≈ 30 dB, conversation ≈ 60 dB, heavy traffic ≈ 80–90 dB.\n• Prolonged exposure above ~80 dB is **noise pollution** and can damage hearing.\n• **Noise** is an unpleasant, irregular mixture of frequencies; a musical note is regular and pleasant.",
 "explanation": "Loudness ∝ amplitude² means doubling the amplitude makes the sound FOUR times as intense — the same square-law pattern as kinetic energy with speed.",
 "source": "icse",
 "examTip": "List question 'factors affecting loudness' wants four: amplitude, distance, vibrating area, medium density — amplitude alone gets partial credit.",
 "linkedMcqCount": 14
},
{
 "id": "phy-c7-m01",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Sound is always produced by a body that is:",
 "options": [
  "Hot",
  "Vibrating",
  "Electrically charged",
  "Moving in a straight line"
 ],
 "correctOption": 1,
 "answer": "Every sound source — a drum skin, a guitar string, our vocal cords, a tuning fork — is in vibration. When the vibration stops, the sound stops. Touching a ringing bell silences it because the touch stops the vibration.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m02",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "An electric bell rings inside a sealed bell jar. As air is gradually pumped out of the jar, the sound becomes fainter and finally inaudible, although the hammer is still seen striking. This proves that:",
 "options": [
  "The bell stops working in vacuum",
  "Sound needs a material medium to travel; it cannot travel through vacuum",
  "Glass absorbs all sound",
  "Light travels faster than sound"
 ],
 "correctOption": 1,
 "answer": "The hammer visibly keeps vibrating, so sound is still being produced — but with the air removed there is no medium to carry the vibrations to our ears. Light, however, still passes through the vacuum (we can see the hammer). Sound requires a medium; light does not.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m03",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The speed of sound is greatest in:",
 "options": [
  "Vacuum",
  "Air",
  "Water",
  "Steel"
 ],
 "correctOption": 3,
 "answer": "Sound travels fastest in solids (steel ≈ 5000 m/s), slower in liquids (water ≈ 1500 m/s), and slowest in gases (air ≈ 340 m/s) — because molecules are most closely coupled in solids. In vacuum sound does not travel at all.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m04",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The number of vibrations completed by a vibrating body in one second is called its:",
 "options": [
  "Amplitude",
  "Frequency",
  "Wavelength",
  "Time period"
 ],
 "correctOption": 1,
 "answer": "Frequency is the number of complete vibrations (oscillations) per second; its SI unit is the hertz (Hz). Time period T is the time for ONE vibration, and T = 1/frequency.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m05",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The pitch (shrillness) of a sound depends mainly on its:",
 "options": [
  "Amplitude",
  "Frequency",
  "Speed",
  "Loudness"
 ],
 "correctOption": 1,
 "answer": "Higher frequency → higher pitch (shriller sound); lower frequency → deeper/graver sound. Amplitude controls loudness, not pitch. A mosquito's wings vibrate at high frequency (shrill whine); a lion's roar has low frequency but large amplitude.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m06",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The loudness of a sound depends mainly on the vibrating body's:",
 "options": [
  "Frequency",
  "Amplitude",
  "Material",
  "Colour"
 ],
 "correctOption": 1,
 "answer": "Larger amplitude of vibration → louder sound (loudness is proportional to the SQUARE of the amplitude). Striking a drum harder increases the amplitude of the skin's vibration, not its frequency — the sound gets louder but the pitch stays the same.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m07",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A guitar player presses a string against a fret, shortening its vibrating length, and plucks it. Compared with the open string, the note produced is:",
 "options": [
  "Lower in pitch",
  "Higher in pitch, because a shorter string vibrates at a higher frequency",
  "Louder but at the same pitch",
  "Identical"
 ],
 "correctOption": 1,
 "answer": "For a stretched string, frequency increases as the vibrating length decreases (also as tension increases or thickness decreases). Shortening the string raises its frequency, producing a higher-pitched (shriller) note.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m08",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The audible range of frequencies for a normal human ear is:",
 "options": [
  "2 Hz to 2000 Hz",
  "20 Hz to 20,000 Hz",
  "200 Hz to 2,00,000 Hz",
  "Any frequency"
 ],
 "correctOption": 1,
 "answer": "Humans hear roughly 20 Hz to 20,000 Hz (20 kHz). Below 20 Hz is infrasonic (elephants, earthquake waves); above 20 kHz is ultrasonic (bats, dogs, dolphins can hear these; we cannot).",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m09",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Sounds of frequency higher than 20,000 Hz are called:",
 "options": [
  "Infrasonic",
  "Ultrasonic",
  "Supersonic",
  "Monotone"
 ],
 "correctOption": 1,
 "answer": "Ultrasonic sounds lie above 20 kHz — inaudible to humans but heard by bats, dogs and dolphins, and used in medical (ultrasound) scans. Infrasonic is below 20 Hz. ('Supersonic' describes speeds faster than sound, not frequencies.)",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m10",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A sound consisting of a single frequency is called a:",
 "options": [
  "Noise",
  "Monotone",
  "Echo",
  "Beat"
 ],
 "correctOption": 1,
 "answer": "A monotone is a sound of one fixed frequency, e.g., the steady note of a tuning fork. Musical sounds usually mix several frequencies; noise is an unpleasant, irregular mixture.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m11",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "As we walk away from a ringing temple bell, its sound grows fainter because:",
 "options": [
  "The bell's frequency decreases with distance",
  "The sound energy spreads over a larger and larger area, so less energy enters the ear",
  "Air absorbs all high-pitched sounds",
  "Our ears close gradually"
 ],
 "correctOption": 1,
 "answer": "Loudness decreases with distance from the source: the same sound energy spreads out over an ever-larger area as the wave travels outward, so the energy reaching the ear per second falls. The frequency (pitch) does not change with distance.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m12",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A tuning fork held in the hand sounds faint, but pressing its stem on a table top makes the sound much louder. This is because:",
 "options": [
  "The table vibrates along with the fork, setting a much larger surface area of air in vibration",
  "The wood amplifies electricity",
  "The fork vibrates faster on wood",
  "The table echoes the sound"
 ],
 "correctOption": 0,
 "answer": "Loudness increases with the area of the vibrating surface. The fork alone moves little air; through its stem it forces the large table surface to vibrate, which pushes far more air — so the same vibration sounds much louder. The soundboards of guitars, violins and pianos work on this principle.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c7-m13",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Women's and children's voices are generally shriller than men's because their vocal cords:",
 "options": [
  "Are longer and thicker, vibrating slowly",
  "Are shorter and thinner, vibrating at higher frequencies",
  "Produce larger amplitudes",
  "Produce no vibrations"
 ],
 "correctOption": 1,
 "answer": "Shorter, thinner vocal cords vibrate at higher frequencies, giving a higher-pitched (shriller) voice. Men's longer, thicker cords vibrate more slowly, producing deeper voices. Pitch ∝ frequency.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m14",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In a flute, covering more holes effectively lengthens the vibrating air column. The note produced then has:",
 "options": [
  "Higher pitch",
  "Lower pitch, because a longer air column vibrates at a lower frequency",
  "Greater speed",
  "No change"
 ],
 "correctOption": 1,
 "answer": "The frequency of a vibrating air column decreases as its length increases. Covering holes lengthens the column, lowering the frequency and hence the pitch; opening holes shortens it and raises the pitch.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m15",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "During a thunderstorm we see the lightning flash first and hear the thunder a few seconds later because:",
 "options": [
  "Thunder occurs after lightning",
  "Light travels almost instantaneously while sound travels at only about 340 m/s in air",
  "Sound is produced high in the clouds",
  "Our ears react slower than our eyes"
 ],
 "correctOption": 1,
 "answer": "Light (3 × 10⁸ m/s) reaches us practically instantly; sound crawls at ~340 m/s. The delay equals distance ÷ speed of sound — every 3 seconds of gap means the lightning struck about 1 km away.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m16",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The distance between two consecutive compressions (or two consecutive rarefactions) of a sound wave is called its:",
 "options": [
  "Amplitude",
  "Frequency",
  "Wavelength",
  "Time period"
 ],
 "correctOption": 2,
 "answer": "Wavelength (λ) is the length of one complete wave — e.g., from one compression to the next. It is related to speed and frequency by v = f × λ.",
 "source": "icse",
 "linksTo": "phy-s7-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m17",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "American Indians (and railway workers) used to press an ear against the ground or rails to detect distant hoof-beats or trains. This works because:",
 "options": [
  "The ground blocks other noises",
  "Sound travels faster and with less weakening through solids than through air",
  "Sound cannot travel through air",
  "Rails magnify sound electrically"
 ],
 "correctOption": 1,
 "answer": "In solids the closely packed molecules transmit vibrations quickly and efficiently, so sound travels faster (and farther with less loss) through ground or steel rails than through air. The distant sound arrives earlier and stronger through the solid.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m18",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Astronauts on the Moon's surface cannot talk to each other directly (without radio) even when standing close together, because:",
 "options": [
  "It is too cold on the Moon",
  "The Moon has no atmosphere — no medium to carry sound",
  "Spacesuits block all vibrations",
  "Gravity is too weak for sound"
 ],
 "correctOption": 1,
 "answer": "Sound needs a material medium. The Moon has virtually no atmosphere, so vibrations of one astronaut's voice cannot travel to the other. They communicate by radio waves, which (like light) need no medium.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m19",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A sound wave of frequency 500 Hz has a wavelength of 0.68 m in air. The speed of sound in air is:",
 "options": [
  "735 m/s",
  "500 m/s",
  "340 m/s",
  "0.00136 m/s"
 ],
 "correctOption": 2,
 "answer": "v = f × λ = 500 Hz × 0.68 m = 340 m/s — the typical speed of sound in air at ordinary temperature.",
 "source": "icse",
 "linksTo": "phy-s7-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m20",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A pendulum completes 20 oscillations in 4 seconds. Its frequency and time period are:",
 "options": [
  "5 Hz and 0.2 s",
  "5 Hz and 5 s",
  "0.2 Hz and 5 s",
  "80 Hz and 0.0125 s"
 ],
 "correctOption": 0,
 "answer": "Frequency = oscillations ÷ time = 20 ÷ 4 = 5 Hz. Time period T = 1/f = 1/5 = 0.2 s. Frequency and time period are reciprocals of each other.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m21",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "Thunder is heard 6 seconds after a lightning flash. Taking the speed of sound as 340 m/s, the lightning struck at a distance of about:",
 "options": [
  "340 m",
  "1020 m",
  "2040 m",
  "3400 m"
 ],
 "correctOption": 2,
 "answer": "Distance = speed × time = 340 m/s × 6 s = 2040 m ≈ 2 km. (Light's travel time over 2 km is negligible.)",
 "source": "icse",
 "linksTo": "phy-s7-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m22",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Sound cannot travel through vacuum.\nReason (R): Sound propagates by the vibration of the particles of a material medium, and a vacuum has no particles.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Sound is a mechanical wave: it travels as successive compressions and rarefactions of the particles of a medium. With no particles in vacuum, there is nothing to vibrate, so no sound passes. R correctly explains A — verified by the bell-jar experiment.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m23",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Striking a drum harder makes the sound louder but does not make it shriller.\nReason (R): Striking harder increases the amplitude of vibration of the drum skin but not its frequency.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Loudness is governed by amplitude; pitch by frequency. A harder blow gives the skin a bigger swing (more amplitude → louder) while the skin's natural frequency, fixed by its size and tension, stays the same (pitch unchanged). R explains A perfectly.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m24",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A dog sometimes becomes alert when 'nothing' is audible to its owner.\nReason (R): Dogs can hear ultrasonic frequencies well above the human limit of about 20,000 Hz.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Dogs hear up to roughly 40–50 kHz, far beyond the human range. Sounds in this ultrasonic band reach the dog but not the owner. R correctly explains A — the basis of 'silent' dog whistles.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m25",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The pitch of a note from a stretched string rises when the string is tightened.\nReason (R): Increasing the tension increases the frequency of vibration of the string.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Musicians tune instruments exactly this way: tightening a string raises its vibration frequency, and pitch follows frequency. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m26",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The loudness of a sound decreases as the listener moves away from the source.\nReason (R): The frequency of the sound decreases with distance from the source.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true, but R is false: frequency does NOT change with distance — the pitch you hear far away is the same. Loudness falls because the wave's energy spreads over a larger area, reducing the amplitude reaching the ear.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m27",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. Speed of sound: solids > liquids > gases.\nII. Frequency is measured in hertz.\nIII. Time period = frequency × 2.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — time period is the RECIPROCAL of frequency: T = 1/f. For f = 5 Hz, T = 0.2 s.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-m28",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about loudness:\nI. It increases with the amplitude of vibration.\nII. It increases with the surface area of the vibrating body.\nIII. It is measured in decibels.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 3,
 "answer": "All three are correct. Loudness grows with amplitude (∝ amplitude²) and with vibrating area (drum vs tuning fork), and the decibel (dB) is its unit of measurement. Sounds above ~80 dB become noise pollution.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m29",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements:\nI. Bats detect obstacles by emitting ultrasonic sounds and hearing their echoes.\nII. Infrasonic sounds have frequencies above 20,000 Hz.\nIII. The hum of a mosquito is higher-pitched than a lion's roar.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "I and III only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 1,
 "answer": "I is correct (echolocation). III is correct — the mosquito's wing-beat frequency is far higher than the roar's frequency, even though the roar is much louder. II is wrong: infrasonic means BELOW 20 Hz; above 20,000 Hz is ultrasonic.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-m30",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Application",
 "question": "To approximately judge how far away a thunderstorm is, you can count the seconds between the flash and the thunder and then:",
 "options": [
  "Multiply by the speed of light",
  "Multiply by about 340 m (the distance sound travels per second in air)",
  "Divide by 340",
  "Multiply by 1000"
 ],
 "correctOption": 1,
 "answer": "Each second of delay means the sound has travelled ~340 m. So delay (s) × 340 m gives the distance; e.g., a 3 s delay ≈ 1 km. The light's travel time is negligible in comparison.",
 "source": "icse",
 "linksTo": "phy-s7-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t01",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Sound can travel through solids, liquids and gases, but not through vacuum.",
 "correctAnswer": "true",
 "answer": "True. Sound is a mechanical wave needing a material medium; it travels fastest in solids and not at all in vacuum (bell-jar experiment).",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t02",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The pitch of a sound increases when its amplitude increases.",
 "correctAnswer": "false",
 "answer": "False. Pitch depends on FREQUENCY, not amplitude. Increasing amplitude makes the sound LOUDER at the same pitch.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t03",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The SI unit of frequency is the hertz (Hz).",
 "correctAnswer": "true",
 "answer": "True. 1 Hz means one complete vibration per second; 1 kilohertz (kHz) = 1000 Hz.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t04",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Sound travels faster in air than in steel.",
 "correctAnswer": "false",
 "answer": "False. Sound travels about 15 times FASTER in steel (~5000 m/s) than in air (~340 m/s); molecules in solids are closely coupled and pass on vibrations rapidly.",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t05",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Sounds of frequency below 20 Hz are called infrasonic and cannot be heard by humans.",
 "correctAnswer": "true",
 "answer": "True. Infrasonic sounds (below 20 Hz) are inaudible to us; some animals (elephants, whales) can produce and detect them.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t06",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A shorter air column in a wind instrument produces a higher-pitched note.",
 "correctAnswer": "true",
 "answer": "True. The frequency of vibration of an air column increases as its length decreases — that is how flutes and whistles change notes.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-t07",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The loudness of sound is measured in decibels.",
 "correctAnswer": "true",
 "answer": "True. The decibel (dB) is the unit of loudness level; ordinary conversation is ~60 dB, and prolonged exposure above ~80 dB can damage hearing.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-t08",
 "topicId": "ch7-sound",
 "type": "true_false",
 "subtopic": "True False",
 "question": "If the time period of a vibrating body decreases, its frequency increases.",
 "correctAnswer": "true",
 "answer": "True. Frequency = 1 / time period; they are reciprocals, so a shorter time per vibration means more vibrations per second.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-f01",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The maximum displacement of a vibrating body from its mean position is called its _______.",
 "blankAnswer": "amplitude",
 "answer": "Amplitude — the quantity that determines the LOUDNESS of the sound produced.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-f02",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The SI unit of frequency is the _______.",
 "blankAnswer": "hertz",
 "answer": "Hertz (Hz) — one vibration per second, named after Heinrich Hertz.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-f03",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Wave speed = frequency × _______.",
 "blankAnswer": "wavelength",
 "answer": "v = f × λ — the fundamental wave equation connecting speed, frequency and wavelength.",
 "source": "icse",
 "linksTo": "phy-s7-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-f04",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Sounds of frequency higher than 20,000 Hz are called _______ sounds.",
 "blankAnswer": "ultrasonic",
 "answer": "Ultrasonic — heard by bats, dogs and dolphins; used in sonar and medical ultrasound imaging.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-f05",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The shrillness of a sound is called its _______, and it depends on frequency.",
 "blankAnswer": "pitch",
 "answer": "Pitch — high frequency gives a shrill (high-pitched) note, low frequency a deep (grave) note.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-f06",
 "topicId": "ch7-sound",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The unit used to measure the loudness of sound is the _______.",
 "blankAnswer": "decibel",
 "answer": "Decibel (dB) — sounds above about 80 dB, heard for long, count as noise pollution and can damage hearing.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-x01",
 "topicId": "ch7-sound",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each term with its correct description:",
 "pairs": [
  {
   "left": "Amplitude",
   "right": "Maximum displacement from the mean position"
  },
  {
   "left": "Frequency",
   "right": "Number of vibrations per second"
  },
  {
   "left": "Time period",
   "right": "Time taken for one complete vibration"
  },
  {
   "left": "Wavelength",
   "right": "Distance between two consecutive compressions"
  },
  {
   "left": "Pitch",
   "right": "Shrillness — determined by frequency"
  }
 ],
 "answer": "Amplitude sets loudness; frequency (Hz) sets pitch; T = 1/f; wavelength is one full wave; and pitch is the perceptual name for frequency.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-x02",
 "topicId": "ch7-sound",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each sound phenomenon with the property responsible:",
 "pairs": [
  {
   "left": "Drum struck harder sounds louder",
   "right": "Increased amplitude"
  },
  {
   "left": "Tightened guitar string sounds shriller",
   "right": "Increased frequency"
  },
  {
   "left": "Bell inaudible in evacuated jar",
   "right": "No medium for sound"
  },
  {
   "left": "Ear on rail hears distant train",
   "right": "Sound travels faster/better in solids"
  },
  {
   "left": "Dog responds to 'silent' whistle",
   "right": "Hearing range beyond 20 kHz"
  }
 ],
 "answer": "Loudness ↔ amplitude; pitch ↔ frequency; propagation needs a medium; solids conduct sound best; and animals differ in audible range.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-x03",
 "topicId": "ch7-sound",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each frequency band with its name or example:",
 "pairs": [
  {
   "left": "Below 20 Hz",
   "right": "Infrasonic — produced by elephants, earthquakes"
  },
  {
   "left": "20 Hz to 20,000 Hz",
   "right": "Audible range of the human ear"
  },
  {
   "left": "Above 20,000 Hz",
   "right": "Ultrasonic — used by bats and in sonar"
  },
  {
   "left": "Single fixed frequency",
   "right": "Monotone — e.g., a tuning fork"
  },
  {
   "left": "Mixture of irregular frequencies",
   "right": "Noise"
  }
 ],
 "answer": "The human window is 20 Hz–20 kHz; below it infrasonic, above it ultrasonic. A pure single frequency is a monotone; an unpleasant irregular mix is noise.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-s01",
 "topicId": "ch7-sound",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Describe the bell-jar experiment and state what it proves about the propagation of sound.",
 "answer": "An electric bell is suspended inside an airtight glass bell jar connected to a vacuum pump. With air inside, the bell is heard clearly when switched on. As the pump gradually removes the air, the sound grows fainter, and when the jar is almost evacuated the bell becomes inaudible — although the hammer is still SEEN striking the gong. Re-admitting air restores the sound. Conclusion: sound needs a material medium (here air) for propagation; it cannot travel through vacuum. (Light evidently can, since the bell remains visible.)",
 "source": "icse",
 "linksTo": "phy-s7-sec_01",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-s02",
 "topicId": "ch7-sound",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Distinguish between the pitch and the loudness of a sound, stating the factor on which each depends.",
 "answer": "Pitch is the shrillness or graveness of a sound; it depends on the FREQUENCY of vibration — higher frequency means higher pitch (mosquito's whine vs lion's roar). Loudness is the strength or intensity of the sound sensation; it depends mainly on the AMPLITUDE of vibration (loudness ∝ amplitude²) and is measured in decibels. The two are independent: a sound can be shrill yet faint, or deep yet very loud.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c7-s03",
 "topicId": "ch7-sound",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "State three factors, other than amplitude, on which the loudness of sound heard by a listener depends.",
 "answer": "1. Distance from the source — loudness decreases as the sound energy spreads over a larger area. 2. Surface area of the vibrating body — a larger vibrating surface (drum, sounding board) sets more air vibrating and sounds louder. 3. Density of the medium — denser air (or wind blowing towards the listener) carries sound better, increasing loudness. (Also: the sensitivity of the listener's ear affects how loud the sound seems.)",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-s04",
 "topicId": "ch7-sound",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "How does a bat fly safely in complete darkness without colliding with obstacles?",
 "answer": "A bat emits short bursts of ULTRASONIC sound (frequency far above 20,000 Hz) as it flies. These waves strike obstacles or prey and are reflected back as echoes. From the direction and the time delay of each returning echo, the bat's brain works out the position, distance and even size of the object — a natural sonar called echolocation. Since it relies on sound rather than light, darkness makes no difference.",
 "source": "icse",
 "linksTo": "phy-s7-sec_02",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-s05",
 "topicId": "ch7-sound",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A stretched rubber band is plucked gently and then strongly. State and explain two differences you would hear (or not hear) between the two sounds.",
 "answer": "1. Loudness: the strongly plucked band sounds LOUDER, because plucking harder increases the amplitude of vibration, and loudness increases with amplitude. 2. Pitch: the pitch stays essentially the SAME in both cases, because the band's frequency is fixed by its length, thickness and tension — not by how hard it is plucked. So we hear the same note, first faint, then loud.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c7-d01",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_07_sound/fig_031.jpg",
 "caption": "Wave graph: small amplitude — soft sound",
 "question": "The graph shows a sound wave with small amplitude, labelled 'soft sound'. If the same source produced a wave with the SAME frequency but LARGER amplitude, the sound would be:",
 "options": [
  "Shriller but equally loud",
  "Louder but with the same pitch",
  "Both shriller and louder",
  "Quieter and deeper"
 ],
 "correctOption": 1,
 "answer": "Amplitude determines LOUDNESS — a taller wave means a louder sound. Since the frequency (number of waves per second) is unchanged, the PITCH stays the same. Pitch and loudness are independent characteristics of sound.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c7-d02",
 "topicId": "ch7-sound",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_07_sound/fig_032.jpg",
 "caption": "Wave graph: large amplitude — loud sound",
 "question": "Comparing this large-amplitude wave (loud sound) with the small-amplitude wave of the previous figure, which quantity is responsible for the difference in loudness, and how is loudness related to it?",
 "options": [
  "Frequency; loudness doubles when frequency doubles",
  "Amplitude; loudness is proportional to the square of the amplitude",
  "Wavelength; longer waves are always louder",
  "Speed; faster waves are louder"
 ],
 "correctOption": 1,
 "answer": "The only difference between the two graphs is the amplitude (height) of the wave. Loudness increases with amplitude — in fact it is proportional to the SQUARE of the amplitude, so doubling the amplitude makes the sound four times more intense. Frequency, and hence pitch, is the same in both figures.",
 "source": "icse",
 "linksTo": "phy-s7-sec_05",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-s8-sec_02",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "1. Common Electrical Terms",
 "content": "• **Electric current** — the flow of electric charge through a conductor; measured in **amperes (A)** with an ammeter.\n• **Potential difference (voltage)** — the 'electrical pressure' that drives current between two points; measured in **volts (V)** with a voltmeter. Indian mains supply ≈ **220 V**.\n• **Resistance** — a conductor's opposition to the flow of current; measured in **ohms (Ω)**. Longer and thinner wires have more resistance; heating elements use high-resistance alloy (nichrome).\n• **Conductors** allow current to pass easily: all metals (copper, aluminium), graphite, impure water, the human body.\n• **Insulators** do not conduct: rubber, glass, dry wood, plastics, porcelain, dry air — used for wire coverings, plug tops, switchboards.\n\n**Circuit basics**: a complete (closed) conducting path is needed for current to flow; a switch simply opens or closes this path.",
 "explanation": "Quantity–unit–instrument triplets to memorise: current–ampere–ammeter; potential difference–volt–voltmeter; resistance–ohm–(no instrument at this level); power–watt; energy–kWh.",
 "source": "icse",
 "examTip": "Match-the-columns on quantity↔unit is almost guaranteed; write the five pairs once before the exam.",
 "linkedMcqCount": 4
},
{
 "id": "phy-s8-sec_03",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "2. Power Rating and the Electricity Bill",
 "content": "**Power rating**: every appliance is marked with its working voltage and power, e.g. **'220 V, 100 W'** — it consumes 100 joules per second when run on 220 V.\n\n• Typical powers: LED bulb 5–10 W, CFL 15–20 W, filament bulb 60–100 W, fan ≈ 75 W, TV ≈ 100 W, iron ≈ 750 W, geyser/heater ≈ 1000–2000 W.\n• Heating appliances (iron, geyser, heater) are the power-hungry ones.\n\n**Electrical energy and the 'unit'**\n• **Energy = power × time**.\n• Commercial unit: **kilowatt-hour (kWh)** — 1 kW running for 1 hour. **1 kWh = 1 unit** on the meter = 3.6 × 10⁶ J.\n• Cost = units consumed × rate per unit.\n\n**Saving energy**\n• Replace filament bulbs with **LEDs** — same light for about a tenth of the power (a filament bulb wastes most energy as heat).\n• Switch off unused appliances; use ISI-marked, well-maintained equipment.",
 "explanation": "kW vs kWh: kilowatt is POWER (how fast energy is used); kilowatt-hour is ENERGY (how much was used). The bill charges for energy, never for power.",
 "source": "icse",
 "examTip": "For cost numericals: convert W → kW, hours stay hours, multiply, then multiply by the rate — three steps, three marks.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s8-sec_05",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "3. How Electricity Reaches Your Home",
 "content": "Electricity generated at power stations reaches homes through a supply network. The house connection has **three wires**:\n\n• **Live wire** — carries current at high potential (**≈220 V**). Colour: **red** (old convention) / **brown** (new IEC convention). All switches and fuses go in THIS wire.\n• **Neutral wire** — completes the circuit; at nearly **zero potential**. Colour: **black** / **blue**.\n• **Earth wire** — connected to the metal body of appliances and to a **metal plate buried deep in moist soil**. Colour: **green** / **green-yellow**. It normally carries **NO current**; it conducts only when a fault leaks current to the body.\n\n**At the meter board**: company fuse → **electricity meter** (records energy in kWh/'units') → main switch → distribution to room circuits.\n\nIn a **three-pin plug**, the thick top pin is the earth, and it is longer so the earth connects FIRST before live and neutral.",
 "explanation": "Why the earth pin is the longest and thickest: it must make contact before the live pin and offer the least resistance to any fault current — both pure safety design.",
 "source": "icse",
 "examTip": "Quote BOTH colour conventions (red/black/green and brown/blue/green-yellow) — books differ, and naming both is always safe.",
 "linkedMcqCount": 4
},
{
 "id": "phy-s8-sec_06",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "4. The Household Circuit: Fuse, MCB and Short Circuit",
 "content": "**Electric fuse** — a deliberately weak point that protects the circuit.\n• A **thin wire of low-melting-point alloy** (tin–lead) in a porcelain holder.\n• Excess current heats the wire; it **melts and breaks the circuit** before the wiring overheats.\n• Always placed in the **LIVE wire**, so a blown fuse disconnects the appliance from the high potential.\n• Never replace a fuse with a thick copper wire — it will not melt, and the protection is lost.\n\n**MCB (Miniature Circuit Breaker)** — the modern fuse: an automatic switch that **trips** on excess current and can simply be reset (no wire to replace).\n\n**Faults the fuse guards against**\n• **Short circuit**: live and neutral touch directly (damaged insulation) — resistance becomes almost zero, current becomes enormous, wires heat within seconds → fire risk.\n• **Overloading**: too many high-power appliances on one circuit draw more current than the wiring's safe rating.",
 "explanation": "Fuse rating logic: it must be slightly ABOVE the normal working current (so it doesn't blow in normal use) and well below the current the wiring can safely carry.",
 "source": "icse",
 "examTip": "Three fuse facts earn full marks every time: thin wire, LOW melting point, connected in the LIVE wire.",
 "linkedMcqCount": 6
},
{
 "id": "phy-s8-sec_07",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "5. Rules for the Safe Use of Electricity",
 "content": "**At home**\n• Never touch switches, sockets or appliances with **wet hands** (impure water conducts; wet skin has low resistance).\n• Put switches in the **LIVE wire** — switched OFF must mean fully disconnected from 220 V.\n• **Earth** all metal-bodied appliances (iron, geyser, fridge); use three-pin plugs.\n• Never replace a fuse with thick wire; switch off the **mains** before any repair.\n• Don't overload one socket with many high-power appliances; replace frayed/damaged wires; keep appliances away from water.\n• Pull the **plug**, not the cord; never poke anything into a socket.\n\n**During a thunderstorm (lightning safety)**\n• Stay **indoors** or in a **closed car**; avoid open fields, terraces and swimming.\n• NEVER shelter under a **tall isolated tree** — lightning prefers tall, isolated, conducting objects.\n• Indoors, avoid wired phones and unplugging during the strike; tall buildings need a **lightning conductor**.\n\n**If someone gets a shock**: do NOT touch them directly — switch off the mains or separate them with a dry wooden stick (insulator), then call for help.",
 "explanation": "Every rule is one physics fact in disguise: water/skin conduction, live-wire potential, the earth path, the fuse's melting point, or lightning's preference for tall conductors. Explain the physics and the rule explains itself.",
 "source": "icse",
 "examTip": "'Give two safety rules WITH reasons' — the reason carries the second mark; a rule alone gets half.",
 "linkedMcqCount": 9
},
{
 "id": "phy-s8-sec_09",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "6. Static Electricity: Charging by Friction",
 "content": "**Static (frictional) electricity** — charges produced by rubbing two suitable bodies together.\n\n**The mechanism: electron transfer**\n• Only **electrons** move during charging; protons stay locked in the nucleus.\n• The body that **loses electrons becomes positively charged**; the one that **gains electrons becomes negatively charged**.\n• The two bodies always end up with **equal and opposite** charges — charge is transferred, never created or destroyed (**conservation of charge**).\n\n**Standard pairs**\n• Glass rod rubbed with silk → glass **positive**, silk negative.\n• Ebonite/plastic rubbed with wool/fur → rod **negative**, wool positive.\n\n**Everyday static**\n• Crackling sparks while removing a synthetic sweater in the dark on a dry day.\n• A comb run through dry hair picks up tiny paper bits.\n• Dust clinging to a TV screen; a balloon sticking to a wall after rubbing on hair.\n• Static builds best in **dry** weather; humid air leaks charge away.",
 "explanation": "Why two RUBBED bodies attract each other afterwards: they carry opposite charges (one lost the electrons the other gained). Why a charged body attracts an UNCHARGED one is a different mechanism — induction (see the next sections).",
 "source": "icse",
 "examTip": "Always answer in terms of ELECTRON transfer — 'positive charge moved' is marked wrong at every level.",
 "linkedMcqCount": 4
},
{
 "id": "phy-s8-sec_10",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "7. Attraction, Repulsion and Lightning",
 "content": "**The two laws of electrostatics**\n• **Like charges repel**; **unlike charges attract**.\n\n**The sure test of charge is REPULSION, not attraction**\n• A charged body attracts an UNCHARGED body too — it induces an opposite charge on the body's near side (the far side gets like charge, but it is farther away, so attraction wins). This is why a charged comb lifts neutral paper bits.\n• Repulsion can only happen between two bodies with the SAME kind of charge — so only repulsion proves a body is charged.\n\n**Lightning**\n• Friction inside storm clouds builds enormous charges; when the air's insulation breaks down, a giant discharge — **lightning** — leaps between clouds or from cloud to earth. Thunder is the shock wave of the suddenly heated air.\n• **Lightning conductor** (Benjamin Franklin): pointed copper spikes above the roof, joined by a thick copper strip to a **plate buried in the soil** — the discharge follows this easy path to the ground, sparing the building.\n• Franklin's kite experiment showed lightning is electrical in nature.",
 "explanation": "Keep the two ideas linked: induction explains why attraction proves nothing, and that is exactly why repulsion is the conclusive test — one mechanism, two exam answers.",
 "source": "icse",
 "examTip": "'Why is repulsion the sure test?' — answer must mention induction-based attraction of uncharged bodies; that clause carries the mark.",
 "linkedMcqCount": 11
},
{
 "id": "phy-s8-sec_12",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "8. Charging by Conduction vs Induction",
 "content": "**Charging by conduction (contact)**\n• The charged body **touches** the uncharged body.\n• Charge flows across; the body acquires the **SAME kind** of charge.\n• The charging body **loses** some of its charge.\n\n**Charging by induction (no contact)**\n• The charged body is only brought **NEAR**.\n• Charges in the neutral body redistribute: the **near side acquires the OPPOSITE charge**, the far side the like charge.\n• The charging body loses **no** charge.\n• To charge permanently by induction: with the rod held near, **earth** the far side (touch it) to let the like charge escape, remove the finger, THEN remove the rod — the body is left with charge opposite to the rod's.\n\n**Summary table**\n• Contact: yes / no.\n• Charge acquired: same kind / opposite kind (near side).\n• Charging body's charge: decreases / unchanged.",
 "explanation": "Memory hook: CONduction = CONtact = same Charge; INduction = no contact = INverted (opposite) charge.",
 "source": "icse",
 "examTip": "The three-row difference table (contact, kind of charge, loss of charge) is the standard 3-mark answer — learn it as a table.",
 "linkedMcqCount": 3
},
{
 "id": "phy-s8-sec_15",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "9. The Gold-Leaf Electroscope",
 "content": "A **gold-leaf electroscope** detects and tests small electric charges.\n\n**Construction**: a brass rod with a metal **cap** on top passes through an insulating stopper into a glass case; at the bottom hang two thin **gold leaves**.\n\n**Detecting charge**\n• Touch (or bring near) a charged body to the cap: charge reaches both leaves, they carry LIKE charge, **repel, and diverge**.\n• **Greater charge → wider divergence** — so it also compares amounts of charge roughly.\n\n**Identifying the NATURE of an unknown charge**\n• First charge the electroscope with a KNOWN charge (say positive) — leaves diverge.\n• Bring the unknown charged rod NEAR the cap (no touching):\n  – Divergence **INCREASES** → the rod has the **SAME** charge (positive).\n  – Divergence decreases → the rod is probably opposite (negative) — confirm by repeating with the electroscope charged negatively, because a decrease alone is not conclusive.\n• Rule: only an **increase in divergence** is conclusive evidence.",
 "explanation": "Why the increase is conclusive: a like-charged rod pushes more like charge into the leaves (more divergence) — nothing else can cause that. A decrease could also be caused by an uncharged conductor or even a hand approaching.",
 "source": "icse",
 "examTip": "State the conclusive rule ('increase in divergence is the sure indication') — it upgrades a description answer into a full-marks answer.",
 "linkedMcqCount": 5
},
{
 "id": "phy-s8-sec_23",
 "topicId": "ch8-electricity",
 "type": "note",
 "subtopic": "10. Solving Numericals: Electrical Energy and Cost",
 "content": "**Formulas**\n• Energy (kWh) = power (kW) × time (h)\n• 1 kWh = 1 unit; 1 kWh = 3.6 × 10⁶ J\n• Cost = units × rate per unit\n\n**Worked patterns**\n• 2 kW heater × 3 h = **6 units**/day; at ₹6/unit → ₹36.\n• 100 W bulb × 10 h = 0.1 kW × 10 h = **1 unit**.\n• 2000 W geyser × 30 min = 2 × 0.5 = **1 unit**; at ₹8/unit → ₹8.\n\n**Checklist**\n• Watts → kilowatts: divide by 1000.\n• Minutes → hours: divide by 60.\n• 'Units' on a bill ALWAYS means kWh.\n• Monthly cost: multiply the daily units by the number of days first.",
 "explanation": "All errors here are unit errors: 100 W is 0.1 kW (not 100), and 30 minutes is 0.5 h (not 30). Convert both BEFORE multiplying.",
 "source": "icse",
 "examTip": "Lay out: kW × h = kWh = units, then × rate = ₹ — one line per step; ICSE gives a mark for each correct line.",
 "linkedMcqCount": 3
},
{
 "id": "phy-c8-m01",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The SI unit of electric current is the:",
 "options": [
  "volt",
  "ampere",
  "ohm",
  "watt"
 ],
 "correctOption": 1,
 "answer": "Current is measured in amperes (A) with an ammeter. The volt measures potential difference, the ohm measures resistance, and the watt measures electrical power.",
 "source": "icse",
 "linksTo": "phy-s8-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m02",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A bulb is rated '220 V, 100 W'. This means the bulb:",
 "options": [
  "Always consumes 220 J per second",
  "Consumes 100 J of electrical energy per second when connected to a 220 V supply",
  "Can work on any voltage up to 100 V",
  "Produces 220 W of light"
 ],
 "correctOption": 1,
 "answer": "The rating gives the working voltage (220 V) and the power (100 W = 100 joules per second) consumed AT that voltage. On a lower voltage it would glow dimmer and consume less power.",
 "source": "icse",
 "linksTo": "phy-s8-sec_03",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m03",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The commercial unit of electrical energy, for which we pay the electricity bill, is the:",
 "options": [
  "watt",
  "kilowatt",
  "kilowatt-hour (kWh)",
  "ampere"
 ],
 "correctOption": 2,
 "answer": "1 kilowatt-hour (1 'unit') is the energy consumed by a 1 kW appliance running for 1 hour. The meter at home records kWh; watt and kilowatt measure power, not energy.",
 "source": "icse",
 "linksTo": "phy-s8-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m04",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In a household electric circuit, the fuse (or MCB) must always be connected in the:",
 "options": [
  "Neutral wire",
  "Earth wire",
  "Live wire",
  "Any wire at random"
 ],
 "correctOption": 2,
 "answer": "The live wire carries the high potential (220 V). A fuse in the live wire disconnects the appliance from the dangerous high-potential line the moment excess current flows. A fuse in the neutral would blow but leave the appliance still connected to the live — and lethal.",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m05",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A fuse wire works because it is made of a material with:",
 "options": [
  "High melting point and high resistance",
  "Low melting point, so it melts and breaks the circuit when excess current heats it",
  "Very high strength",
  "Zero resistance"
 ],
 "correctOption": 1,
 "answer": "A fuse is a thin wire of low-melting-point alloy (tin–lead). Excess current (overload or short circuit) heats it above its melting point; it melts and breaks the circuit, protecting the wiring and appliances from damage and fire.",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m06",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The earth (ground) wire connected to the metal body of appliances like geysers and irons protects the user by:",
 "options": [
  "Increasing the appliance's power",
  "Providing a low-resistance path that carries any leaked current to the ground, preventing electric shock",
  "Storing extra charge",
  "Cooling the appliance"
 ],
 "correctOption": 1,
 "answer": "If the live wire accidentally touches the metal body, the earth wire conducts the leakage current safely into the ground (usually also blowing the fuse). Without earthing, a person touching the body would provide the path — and get a severe shock.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m07",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A switch must be connected in the live wire and not in the neutral wire because:",
 "options": [
  "The neutral wire is too thin",
  "With the switch OFF in the live wire, the appliance is completely cut off from the high potential, making it safe to touch",
  "Switches work only on live wires",
  "The neutral wire carries no current"
 ],
 "correctOption": 1,
 "answer": "If the switch were in the neutral, turning it OFF would stop the current but the appliance would remain connected to the 220 V live wire — touching it could still give a shock. A switch in the live wire isolates the appliance from the high potential entirely.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-m08",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Overloading of a household circuit means:",
 "options": [
  "Using appliances at night",
  "Drawing more current than the circuit is designed for, by running too many high-power appliances together",
  "Using long wires",
  "Having too many switches"
 ],
 "correctOption": 1,
 "answer": "Each circuit is rated for a maximum safe current. Plugging several high-power appliances (heater, iron, geyser) into one circuit makes the total current exceed this limit, overheating the wires — a fire hazard. The fuse/MCB is designed to trip in exactly this situation.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m09",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "When a glass rod is rubbed with silk, the glass rod becomes positively charged. The reason is that:",
 "options": [
  "Protons move from silk to glass",
  "Electrons are transferred from the glass to the silk",
  "Positive charge is created in the glass",
  "The silk adds protons to the glass"
 ],
 "correctOption": 1,
 "answer": "Charging by friction transfers ELECTRONS only — protons stay fixed in the nucleus. Glass loses electrons to silk, leaving the glass with a deficit of electrons (net positive) and the silk with an excess (net negative). Charge is transferred, never created.",
 "source": "icse",
 "linksTo": "phy-s8-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m10",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Two inflated balloons rubbed on dry hair and brought near each other:",
 "options": [
  "Attract each other",
  "Repel each other, because both carry the same kind of charge",
  "Stick together immediately",
  "Show no effect"
 ],
 "correctOption": 1,
 "answer": "Both balloons acquire the SAME kind of charge from the hair, and like charges repel. (Each balloon would, however, ATTRACT the hair, which has the opposite charge.)",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m11",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "The ONLY sure test that a body is electrically charged is:",
 "options": [
  "Attraction of small paper bits",
  "Repulsion by another charged body",
  "Attraction by a charged rod",
  "A clicking sound"
 ],
 "correctOption": 1,
 "answer": "Attraction is inconclusive: a charged body also attracts UNCHARGED objects (by inducing opposite charge on their near side). But repulsion occurs only between two bodies carrying the SAME kind of charge — so repulsion is the sure test of charge.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-m12",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A charged comb attracts tiny bits of paper even though the paper is uncharged. This happens because:",
 "options": [
  "Paper is always positively charged",
  "The comb induces an opposite charge on the near side of each paper bit, and attraction wins over the weaker repulsion of the far side",
  "Air pushes the paper towards the comb",
  "Paper is magnetic"
 ],
 "correctOption": 1,
 "answer": "The charged comb rearranges charges in the paper (induction): the side nearer the comb acquires the opposite charge (attracted strongly, being closer) while the far side acquires like charge (repelled weakly, being farther). Net result — attraction.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-m13",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "In charging by CONDUCTION, the uncharged body:",
 "options": [
  "Acquires a charge opposite to that of the charging body",
  "Acquires the SAME kind of charge as the charging body, by direct contact",
  "Remains uncharged",
  "Loses all its protons"
 ],
 "correctOption": 1,
 "answer": "Conduction means physical contact: some of the charging body's excess charge flows onto the other body, so both end up with the SAME kind of charge. In induction (no contact), the near end of the body acquires the OPPOSITE charge.",
 "source": "icse",
 "linksTo": "phy-s8-sec_12",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m14",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A gold-leaf electroscope detects charge because, when a charged body touches its cap:",
 "options": [
  "The leaves become magnetic",
  "Both leaves receive the same kind of charge and repel each other, diverging apart",
  "One leaf becomes positive and the other negative",
  "The leaves melt slightly"
 ],
 "correctOption": 1,
 "answer": "Charge travels from the cap down the metal rod to both gold leaves. Carrying like charges, the leaves repel and diverge. The greater the charge, the wider the divergence — so the electroscope both detects charge and roughly compares its amount.",
 "source": "icse",
 "linksTo": "phy-s8-sec_15",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m15",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A positively charged electroscope's leaves diverge FURTHER when a rod is brought near its cap (without touching). The rod is:",
 "options": [
  "Negatively charged",
  "Positively charged",
  "Uncharged",
  "Made of plastic only"
 ],
 "correctOption": 1,
 "answer": "A positive rod near the cap repels positive charge down into the leaves, increasing their positive charge and divergence. (A negative rod would attract positive charge up to the cap, REDUCING the leaf divergence.) This is how an electroscope identifies the NATURE of a charge.",
 "source": "icse",
 "linksTo": "phy-s8-sec_15",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-m16",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Lightning is caused by:",
 "options": [
  "Collision of clouds producing sparks of fire",
  "A giant electric discharge between charged clouds, or between a charged cloud and the earth",
  "Sunlight reflecting off clouds",
  "Meteor showers"
 ],
 "correctOption": 1,
 "answer": "Friction within storm clouds builds enormous charges. When the charge becomes large enough, the air's insulation breaks down and a massive discharge — lightning — leaps between clouds or from cloud to earth, heating the air (thunder is the resulting shock wave).",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m17",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "A lightning conductor protects a tall building because it:",
 "options": [
  "Pushes the clouds away",
  "Provides an easy, low-resistance metallic path for the lightning discharge to flow harmlessly into the ground",
  "Absorbs the lightning's light",
  "Stops rain from falling on the building"
 ],
 "correctOption": 1,
 "answer": "The pointed copper conductor runs from above the rooftop to a metal plate buried in the earth. A lightning strike follows this easy conducting path to the ground instead of passing destructively through the building's structure.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m18",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "During a thunderstorm, the SAFEST of the following actions is to:",
 "options": [
  "Stand under the tallest tree for shelter",
  "Stay inside a house or a closed car, away from tall isolated objects and open fields",
  "Swim in the pool to stay low",
  "Stand on the terrace holding an umbrella"
 ],
 "correctOption": 1,
 "answer": "Lightning tends to strike tall, isolated, conducting objects — trees, poles, a person in an open field, water bodies. A house or closed metal car conducts the discharge around its occupants. Never shelter under isolated trees or stay in water during lightning.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m19",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "An LED bulb is preferred over a filament bulb of similar brightness mainly because the LED:",
 "options": [
  "Is heavier",
  "Consumes far less electrical power for the same light output",
  "Glows in all colours at once",
  "Needs no electricity"
 ],
 "correctOption": 1,
 "answer": "A filament bulb wastes most of its energy as heat; an LED converts a much larger fraction of electrical energy into light. For the same brightness an LED may use a tenth of the power, cutting energy bills and conserving electricity.",
 "source": "icse",
 "linksTo": "phy-s8-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m20",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Single Correct",
 "question": "Sparks or a crackling sound are sometimes noticed when taking off a synthetic sweater in the dark on a dry day. This is due to:",
 "options": [
  "The sweater tearing slightly",
  "Electric discharge of charges built up by friction between the sweater and the shirt/body",
  "Tiny fireflies in the cloth",
  "Static magnetism"
 ],
 "correctOption": 1,
 "answer": "Rubbing between the synthetic sweater and inner clothing transfers electrons, building opposite static charges. As the sweater is pulled off, the charges leap across small air gaps as tiny sparks with a crackle — miniature lightning. Dry air (winter) preserves the charge; humid air leaks it away.",
 "source": "icse",
 "linksTo": "phy-s8-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m21",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "An electric heater rated 2 kW runs for 3 hours daily. The energy it consumes per day is:",
 "options": [
  "2 units",
  "3 units",
  "6 units",
  "600 units"
 ],
 "correctOption": 2,
 "answer": "Energy (kWh) = power (kW) × time (h) = 2 kW × 3 h = 6 kWh = 6 units. At ₹6 per unit, that costs ₹36 per day.",
 "source": "icse",
 "linksTo": "phy-s8-sec_23",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m22",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Numerical",
 "question": "A 100 W bulb glows for 10 hours. The electrical energy consumed is:",
 "options": [
  "0.1 kWh",
  "1 kWh",
  "10 kWh",
  "1000 kWh"
 ],
 "correctOption": 1,
 "answer": "100 W = 0.1 kW. Energy = 0.1 kW × 10 h = 1 kWh = 1 unit of electricity.",
 "source": "icse",
 "linksTo": "phy-s8-sec_23",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m23",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): A fuse must be connected in the live wire of a circuit.\nReason (R): When the fuse in the live wire blows, the appliance is disconnected from the high-potential line, making it safe.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "A blown fuse in the live wire isolates the appliance from the 220 V supply. If the fuse were in the neutral, the circuit would break but the appliance would remain at high potential — still dangerous to touch. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m24",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): Repulsion, not attraction, is the sure test of electrification.\nReason (R): A charged body can attract an uncharged body by induction, but it can repel only a body carrying the same kind of charge.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Attraction can occur with an uncharged body (induced opposite charge on its near side), so attraction proves nothing. Repulsion requires like charge on BOTH bodies, so it confirms charge. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-m25",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): During charging by friction, both bodies become charged with equal and opposite charges.\nReason (R): Friction creates new electrons in one body and destroys them in the other.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true: the electrons one body loses, the other gains — equal and opposite charges. R is false: charge (and electrons) can never be created or destroyed; friction only TRANSFERS electrons from one body to the other.",
 "source": "icse",
 "linksTo": "phy-s8-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m26",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): The metal body of an electric iron is connected to the earth wire.\nReason (R): Earthing increases the heating power of the iron.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 2,
 "answer": "A is true — all metal-bodied appliances are earthed. But R is false: earthing has nothing to do with heating power; it is a SAFETY measure that carries leakage current to the ground and saves the user from shock.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m27",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Assertion-Reason",
 "question": "Assertion (A): One should never touch a switch or electrical appliance with wet hands.\nReason (R): Impure water conducts electricity, and a wet skin offers a much easier path for current to flow through the body.",
 "options": [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
 ],
 "correctOption": 0,
 "answer": "Tap water (with dissolved salts) is a conductor, and wet skin has far lower resistance than dry skin, so even a small leakage can drive a dangerous current through the body. R correctly explains A.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-m28",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about a household supply:\nI. The live wire is at a high potential of about 220 V.\nII. The neutral wire completes the circuit and is at nearly zero potential.\nIII. The earth wire normally carries the full working current of the appliance.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — the earth wire carries current ONLY when there is a fault (leakage to the metal body); in normal operation it carries no current at all.",
 "source": "icse",
 "linksTo": "phy-s8-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m29",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following statements about static charges:\nI. Like charges repel and unlike charges attract.\nII. In charging by friction, only electrons are transferred.\nIII. A charged body always repels an uncharged body.\nWhich statements are correct?",
 "options": [
  "I and II only",
  "II and III only",
  "I and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and II are correct. III is wrong — a charged body ATTRACTS an uncharged body (by induction); it never repels it. Repulsion needs like charge on both bodies.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-m30",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Statement-Based",
 "question": "Consider the following electrical safety rules:\nI. Use dry hands and stand on an insulating surface while operating switches.\nII. Replace a blown fuse with a thick copper wire so it never blows again.\nIII. Switch off the mains before repairing any connection.\nWhich are CORRECT safety practices?",
 "options": [
  "I and III only",
  "I and II only",
  "II and III only",
  "I, II and III"
 ],
 "correctOption": 0,
 "answer": "I and III are proper precautions. II is dangerously WRONG: a thick copper wire will not melt on overload, defeating the fuse's purpose and inviting overheating and fire. Always use a fuse wire of the correct rating.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-t01",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The earth wire normally carries the working current of an appliance.",
 "correctAnswer": "false",
 "answer": "False. The earth wire carries current only when a FAULT makes the live wire touch the metal body; it then conducts the leakage safely to the ground. Normally it carries no current.",
 "source": "icse",
 "linksTo": "phy-s8-sec_05",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-t02",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "A fuse wire has a low melting point and melts when excessive current flows through it.",
 "correctAnswer": "true",
 "answer": "True. The thin tin–lead alloy wire heats up and melts on overload or short circuit, breaking the circuit and protecting the installation.",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-t03",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "In charging by friction, protons move from one body to the other.",
 "correctAnswer": "false",
 "answer": "False. Only ELECTRONS are transferred; protons are bound inside the nucleus and never move during charging. The body losing electrons becomes positive, the one gaining becomes negative.",
 "source": "icse",
 "linksTo": "phy-s8-sec_09",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-t04",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "Attraction between two bodies is a sure test that both are charged.",
 "correctAnswer": "false",
 "answer": "False. A charged body also attracts UNCHARGED bodies by induction. Only REPULSION is the sure test of charge, since it requires like charges on both bodies.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-t05",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "1 kWh is the energy consumed by a 1000 W appliance working for one hour.",
 "correctAnswer": "true",
 "answer": "True. 1 kWh ('one unit') = 1 kW × 1 h = 1000 W for 1 hour = 3.6 × 10⁶ J.",
 "source": "icse",
 "linksTo": "phy-s8-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-t06",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "The switch of an appliance should be connected in the neutral wire.",
 "correctAnswer": "false",
 "answer": "False. The switch must be in the LIVE wire, so that switching off disconnects the appliance from the high potential completely, making it safe to touch.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-t07",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "It is safe to shelter under a tall isolated tree during a thunderstorm.",
 "correctAnswer": "false",
 "answer": "False. Lightning preferentially strikes tall isolated objects; sheltering under such a tree is extremely dangerous. Stay inside a building or a closed car instead.",
 "source": "icse",
 "linksTo": "phy-s8-sec_07",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-t08",
 "topicId": "ch8-electricity",
 "type": "true_false",
 "subtopic": "True False",
 "question": "In a gold-leaf electroscope, the divergence of the leaves increases with the amount of charge given to it.",
 "correctAnswer": "true",
 "answer": "True. More charge on the leaves means a stronger mutual repulsion, so they diverge more — letting the electroscope compare amounts of charge roughly.",
 "source": "icse",
 "linksTo": "phy-s8-sec_15",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-f01",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The SI unit of potential difference is the _______.",
 "blankAnswer": "volt",
 "answer": "Volt (V) — measured with a voltmeter; household mains supply in India is about 220 V.",
 "source": "icse",
 "linksTo": "phy-s8-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-f02",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The property of a conductor to oppose the flow of current through it is called its _______.",
 "blankAnswer": "resistance",
 "answer": "Resistance — measured in ohms (Ω); thin and long wires have more resistance.",
 "source": "icse",
 "linksTo": "phy-s8-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-f03",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The safety device containing a thin wire of low melting point, connected in the live wire, is called a _______.",
 "blankAnswer": "fuse",
 "answer": "Fuse — melts and breaks the circuit when the current exceeds the safe limit (modern homes use MCBs for the same job).",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-f04",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "Charging a body without touching it, by bringing a charged body near it, is called charging by _______.",
 "blankAnswer": "induction",
 "answer": "Induction — the near side acquires the opposite charge. Charging by contact is called conduction.",
 "source": "icse",
 "linksTo": "phy-s8-sec_12",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-f05",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "The instrument with two thin gold leaves used to detect and test electric charge is called an _______.",
 "blankAnswer": "electroscope",
 "answer": "Electroscope (gold-leaf electroscope) — like charges on the two leaves make them repel and diverge.",
 "source": "icse",
 "linksTo": "phy-s8-sec_15",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-f06",
 "topicId": "ch8-electricity",
 "type": "fill_blank",
 "subtopic": "Fill Blank",
 "question": "1 kilowatt-hour of electrical energy is commonly called one _______ of electricity.",
 "blankAnswer": "unit",
 "answer": "Unit — what the electricity meter records and the bill charges for; 1 unit = 1 kWh.",
 "source": "icse",
 "linksTo": "phy-s8-sec_03",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-x01",
 "topicId": "ch8-electricity",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each electrical quantity with its SI unit:",
 "pairs": [
  {
   "left": "Electric current",
   "right": "ampere (A)"
  },
  {
   "left": "Potential difference",
   "right": "volt (V)"
  },
  {
   "left": "Resistance",
   "right": "ohm (Ω)"
  },
  {
   "left": "Electrical power",
   "right": "watt (W)"
  },
  {
   "left": "Electrical energy (commercial)",
   "right": "kilowatt-hour (kWh)"
  }
 ],
 "answer": "Current — ampere; potential difference — volt; resistance — ohm; power — watt; and the commercial energy unit billed at home is the kilowatt-hour.",
 "source": "icse",
 "linksTo": "phy-s8-sec_02",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-x02",
 "topicId": "ch8-electricity",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each wire or device in a household circuit with its role:",
 "pairs": [
  {
   "left": "Live wire",
   "right": "Carries current at high potential (≈220 V)"
  },
  {
   "left": "Neutral wire",
   "right": "Completes the circuit at nearly zero potential"
  },
  {
   "left": "Earth wire",
   "right": "Carries leakage current from the metal body to the ground"
  },
  {
   "left": "Fuse / MCB",
   "right": "Breaks the circuit when current exceeds the safe limit"
  },
  {
   "left": "Electricity meter",
   "right": "Records energy consumed in kWh"
  }
 ],
 "answer": "Live brings power in, neutral returns it, earth is the emergency safety path, the fuse/MCB is the watchdog against overload, and the meter records the units consumed.",
 "source": "icse",
 "linksTo": "phy-s8-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-x03",
 "topicId": "ch8-electricity",
 "type": "match",
 "subtopic": "Match",
 "question": "Match each electrostatic situation with its outcome:",
 "pairs": [
  {
   "left": "Glass rod rubbed with silk",
   "right": "Rod becomes positive, silk negative"
  },
  {
   "left": "Two like-charged balloons",
   "right": "Repel each other"
  },
  {
   "left": "Charged comb near paper bits",
   "right": "Attracts them by induction"
  },
  {
   "left": "Charged cloud and tall building",
   "right": "Lightning discharge — conductor needed"
  },
  {
   "left": "Charged rod touching electroscope cap",
   "right": "Leaves diverge with like charge"
  }
 ],
 "answer": "Friction separates charge; like charges repel; induction lets charged bodies attract neutral ones; giant-scale discharge is lightning, tamed by the lightning conductor; and an electroscope's diverging leaves reveal charge.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-s01",
 "topicId": "ch8-electricity",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Name the three wires in a household electric connection, state the standard insulation colour convention for each, and give the function of each wire.",
 "answer": "1. LIVE wire (red, or brown in the new convention) — carries the current at high potential (~220 V) from the mains; switches and fuses are fitted in this wire. 2. NEUTRAL wire (black, or blue) — completes the circuit, returning current at nearly zero potential. 3. EARTH wire (green, or green-yellow) — connected to the metal body of appliances and to a plate buried in the ground; it carries any leakage current safely to the earth, protecting the user from shock.",
 "source": "icse",
 "linksTo": "phy-s8-sec_05",
 "qualityStars": 3,
 "qualityLevel": "ICSE Class 8"
},
{
 "id": "phy-c8-s02",
 "topicId": "ch8-electricity",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "What is a short circuit? Why is it dangerous, and which device protects the house against it?",
 "answer": "A short circuit occurs when the live wire touches the neutral wire directly (e.g., when insulation is damaged), letting current bypass the appliance through a path of almost zero resistance. The current then becomes enormously large, heating the wires rapidly — which can melt insulation and start a fire. The FUSE (or MCB) protects against it: the huge current melts the fuse wire (or trips the MCB) instantly, breaking the circuit before damage occurs.",
 "source": "icse",
 "linksTo": "phy-s8-sec_06",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-s03",
 "topicId": "ch8-electricity",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Explain, step by step, how you would use a gold-leaf electroscope to find whether the charge on a rod is positive or negative.",
 "answer": "1. First charge the electroscope with a KNOWN charge (say positive, by conduction from a glass rod rubbed with silk); the leaves diverge. 2. Slowly bring the unknown charged rod near the cap WITHOUT touching it. 3. Observe the leaves: if the divergence INCREASES, the rod carries the SAME charge as the electroscope (positive); if the divergence DECREASES, the rod carries the OPPOSITE charge (negative). Note: an increase in divergence is the conclusive observation; a decrease should be confirmed by repeating with the electroscope charged negatively.",
 "source": "icse",
 "linksTo": "phy-s8-sec_15",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-s04",
 "topicId": "ch8-electricity",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "Distinguish between charging by conduction and charging by induction.",
 "answer": "Conduction: the charged body TOUCHES the uncharged body; some charge flows across, so the body acquires the SAME kind of charge as the charging body, and the charging body loses some of its charge. Induction: the charged body is brought NEAR (no contact); charges within the body redistribute, the NEAR side acquiring the OPPOSITE charge and the far side the like charge. In induction the charging body loses no charge, and the induced charging can be made permanent by earthing the far side before removing the rod.",
 "source": "icse",
 "linksTo": "phy-s8-sec_12",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-s05",
 "topicId": "ch8-electricity",
 "type": "short_answer",
 "subtopic": "Short Answer",
 "question": "A geyser is rated 2000 W, 220 V. (a) How much energy does it consume in 30 minutes? (b) How many 'units' is this, and what does it cost at ₹8 per unit?",
 "answer": "(a) Power = 2000 W = 2 kW; time = 30 min = 0.5 h. Energy = power × time = 2 kW × 0.5 h = 1 kWh = 3.6 × 10⁶ J. (b) 1 kWh is exactly 1 unit of electricity, so the cost = 1 × ₹8 = ₹8 for each half-hour use.",
 "source": "icse",
 "linksTo": "phy-s8-sec_23",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
},
{
 "id": "phy-c8-d01",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_08_electricity/fig_047.jpg",
 "caption": "Charged rod near a suspended charged ball: attraction and repulsion",
 "question": "In the figure, the same charged rod ATTRACTS the suspended ball in one case and REPELS it in the other. Which observation is the conclusive proof that the ball is charged?",
 "options": [
  "The attraction — because charged bodies attract everything",
  "The repulsion — because only a body carrying the same kind of charge can be repelled",
  "Both observations equally",
  "Neither observation"
 ],
 "correctOption": 1,
 "answer": "Attraction is not conclusive: a charged rod also attracts an UNCHARGED ball by inducing opposite charge on its near side. Repulsion, however, can only occur between two bodies with the SAME kind of charge — so repulsion is the sure test of electrification.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 5,
 "qualityLevel": "Olympiad"
},
{
 "id": "phy-c8-d02",
 "topicId": "ch8-electricity",
 "type": "mcq",
 "subtopic": "Diagram — Single Correct",
 "image": "images/physics/chapter_08_electricity/fig_060.jpg",
 "caption": "Lightning conductor on a building",
 "question": "The diagram shows pointed copper spikes on a building connected by a thick copper strip to a plate buried in the soil. During a thunderstorm this arrangement protects the building by:",
 "options": [
  "Preventing clouds from forming above the building",
  "Conducting the lightning discharge through the copper strip safely into the ground instead of through the building",
  "Absorbing the thunder sound",
  "Repelling rain drops"
 ],
 "correctOption": 1,
 "answer": "The charged cloud induces opposite charge on the spikes. If lightning strikes, the discharge follows the easy, low-resistance copper path — spikes → strip → buried plate → earth — bypassing the building's structure entirely. This is the lightning conductor devised by Benjamin Franklin.",
 "source": "icse",
 "linksTo": "phy-s8-sec_10",
 "qualityStars": 4,
 "qualityLevel": "NEET UG"
}
];
