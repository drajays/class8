/**
 * Expert conversion of descriptive / analytical short-answer items
 * into Olympiad / NEET Foundation MCQs.
 *
 * Used by generate-biology-olympiad-bank.js — outputs companion MCQ
 * alongside retained descriptive format.
 */
'use strict';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

/** Hand-crafted elite MCQ overrides for complex experiment / diagram items. */
const OVERRIDES = {
  'b1kb-la1': {
    stem: 'In an experiment, test tubes A and B contain water with an oil layer on top. Tube A holds a plant with roots in water; tube B has no plant. After several hours, the water level falls in A but not in B. Which explanation is scientifically correct?',
    options: [
      'Evaporation from the water surface causes the level to drop in A; the oil layer is ineffective',
      'The plant absorbs water through its roots (and loses some via transpiration); oil prevents direct evaporation, so the drop is due to plant uptake',
      'Oil reacts chemically with root exudates in A, reducing water volume',
      'Photosynthesis in tube B consumes water, keeping its level unchanged',
    ],
    correctOption: 1,
    whyCorrect:
      'The oil layer blocks evaporation from the surface in both tubes. In A, water is taken up by roots and lost through transpiration; B is the control with no plant uptake.',
  },
  'b1kb-la2': {
    stem: 'A plant shoot is placed in eosin (or safranin) dye. Stem sections show red colour in vascular bundles. What is the main objective of this experiment, and which tissue is responsible?',
    options: [
      'To demonstrate food translocation through phloem',
      'To demonstrate upward conduction of water through xylem',
      'To show osmosis across the root epidermis only',
      'To prove that dye is absorbed by stomata for photosynthesis',
    ],
    correctOption: 1,
    whyCorrect:
      'Coloured water travels with the transpiration stream through xylem vessels, staining the water-conducting pathway from base to leaf.',
  },
  'b1kb-la3': {
    stem: 'A potted plant is enclosed in a polythene bag (soil uncovered) and kept in sunlight for one hour. Water droplets appear on the inner surface of the bag. Which process is demonstrated?',
    options: [
      'Guttation through hydathodes at leaf margins',
      'Transpiration — loss of water vapour from aerial parts, mainly through stomata',
      'Respiration releasing liquid water as a by-product',
      'Root pressure forcing liquid water out of stomata',
    ],
    correctOption: 1,
    whyCorrect:
      'Water vapour released from leaves (transpiration) condenses on the cooler inner surface of the polythene bag. Uncovered soil ensures droplets are not from soil evaporation alone.',
  },
  'b1kb-la5': {
    stem: 'In a magnified root hair cell, which structure is semi-permeable and controls osmotic entry of water?',
    options: [
      'Cell wall — fully permeable to all substances',
      'Cell membrane (plasma membrane) — allows selective passage of water by osmosis',
      'Vacuole membrane — impermeable to all ions',
      'Middle lamella — conducts minerals by active transport',
    ],
    correctOption: 1,
    whyCorrect:
      'The cell wall is freely permeable; the plasma membrane beneath it is semi-permeable and regulates osmotic water entry into the root hair.',
  },
  'b1x-sa5': {
    stem: 'Water enters a root hair from soil. Why is the cell wall fully permeable but the plasma membrane semi-permeable?',
    options: [
      'The cell wall actively pumps minerals inward; the membrane blocks water',
      'The cell wall allows free passage of water and solutes; the semi-permeable membrane selectively controls osmosis, enabling water uptake against the concentration gradient of solutes',
      'Both layers are equally permeable; osmosis occurs in the vacuole only',
      'The cell wall is semi-permeable; the membrane is fully impermeable',
    ],
    correctOption: 1,
    whyCorrect:
      'Soil water enters because cell sap is hypertonic. The freely permeable wall offers no resistance; the semi-permeable membrane controls osmotic water movement.',
  },
  'b3kb-sa9': {
    stem: 'Why are the testes located outside the abdominal cavity in the scrotum in human males?',
    options: [
      'To allow greater space for sperm storage only',
      'To maintain a temperature 2–3 °C below body temperature, which is necessary for viable sperm production',
      'To protect testes from physical injury during locomotion',
      'Because testosterone is produced only at ambient air temperature',
    ],
    correctOption: 1,
    whyCorrect:
      'Spermatogenesis requires a temperature slightly below core body temperature; the scrotum provides this cooler environment.',
  },
  'b7sa1': {
    stem: 'Which sequence correctly describes a spinal reflex arc when you withdraw your hand from a hot object?',
    options: [
      'Receptor → motor neuron → brain → sensory neuron → effector',
      'Receptor → sensory neuron → interneuron in spinal cord → motor neuron → effector',
      'Effector → sensory neuron → cerebrum → motor neuron → receptor',
      'Receptor → sensory neuron → cerebellum → motor neuron → effector (voluntary pathway)',
    ],
    correctOption: 1,
    whyCorrect:
      'A reflex arc processes the stimulus at the spinal cord via an interneuron, producing rapid motor response before conscious perception in the brain.',
  },
  'b6sa1': {
    stem: 'What is double circulation in humans, and why is it advantageous?',
    options: [
      'Blood passes through the heart once per complete body circuit',
      'Blood passes through the heart twice for one complete circuit — pulmonary and systemic loops — ensuring fully oxygenated blood reaches tissues at high pressure',
      'Two hearts pump blood simultaneously in parallel circuits',
      'Blood circulates only between lungs and heart, not to body tissues',
    ],
    correctOption: 1,
    whyCorrect:
      'Double circulation separates pulmonary (lung) and systemic (body) circuits, allowing efficient oxygenation and high-pressure delivery to tissues.',
  },
  'b2sa1': {
    stem: 'A typical complete flower of an angiosperm consists of four whorls arranged from outer to inner. Which sequence is correct?',
    options: [
      'Calyx (sepals) → Corolla (petals) → Androecium (stamens) → Gynoecium (pistil)',
      'Corolla → Calyx → Gynoecium → Androecium',
      'Androecium → Gynoecium → Calyx → Corolla',
      'Gynoecium → Androecium → Corolla → Calyx',
    ],
    correctOption: 0,
    whyCorrect:
      'From outside to inside: sepals (calyx) protect the bud, petals (corolla) attract pollinators, stamens (androecium) are male, and pistil (gynoecium) is female.',
  },
  'b3kb-sa14': {
    stem: 'In the human male reproductive system, which structure stores and matures sperms before they enter the urethra?',
    options: [
      'Seminal vesicle — produces fructose-rich fluid only',
      'Epididymis — coiled tubule on top of each testis where sperms mature and are stored',
      'Prostate gland — produces the ovum for fertilization',
      'Scrotum — site of sperm production by meiosis',
    ],
    correctOption: 1,
    whyCorrect:
      'Sperms produced in seminiferous tubules of testes pass to the epididymis where they mature and are stored before ejaculation via vas deferens and urethra.',
  },
  'b3kb-sa9': {
    stem: 'Why are the testes located outside the abdominal cavity in the scrotum in human males?',
    options: [
      'To allow greater space for sperm storage only',
      'To maintain a temperature 2–3 °C below body temperature, which is necessary for viable sperm production',
      'To protect testes from physical injury during locomotion',
      'Because testosterone is produced only at ambient air temperature',
    ],
    correctOption: 1,
    whyCorrect:
      'Spermatogenesis requires a temperature slightly below core body temperature; the scrotum provides this cooler environment.',
  },
  'b1ocr-sa7': {
    stem: 'How does transpiration create a chain of events that increases water uptake from soil?',
    options: [
      'Transpiration closes stomata, trapping water inside leaves and forcing roots to absorb more',
      'Transpiration removes water from leaves, creating transpiration pull that draws water upward through xylem, which in turn pulls water into roots from soil by osmosis',
      'Transpiration directly pushes water into roots by root pressure alone',
      'Transpiration converts soil minerals into water at the root surface',
    ],
    correctOption: 1,
    whyCorrect:
      'Transpiration pull creates continuous tension in the xylem column, drawing water from roots; this lowers water potential at roots, pulling in more soil water by osmosis.',
  },
  'b7kb-sa14': {
    stem: 'Which sequence correctly represents the pathway of a spinal reflex arc?',
    options: [
      'Receptor → sensory neuron → interneuron in spinal cord → motor neuron → effector',
      'Receptor → motor neuron → brain → sensory neuron → effector',
      'Effector → sensory neuron → cerebrum → motor neuron → receptor',
      'Receptor → sensory neuron → cerebellum → motor neuron → effector',
    ],
    correctOption: 0,
    whyCorrect:
      'A reflex arc: stimulus detected by receptor → sensory neuron → interneuron (spinal cord) → motor neuron → effector (muscle/gland) responds.',
  },
  'b8kb-sa16': {
    stem: 'Which set of measures is MOST effective for controlling disease spread by mosquitoes and houseflies?',
    options: [
      'Antibiotic treatment of all exposed individuals only',
      'Eliminating stagnant water (mosquito breeding), covering garbage bins, proper sewage disposal, and using mosquito nets/repellents',
      'Vaccination against all bacterial infections only',
      'Increasing indoor humidity to kill flying insects',
    ],
    correctOption: 1,
    whyCorrect:
      'Mosquitoes breed in stagnant water; houseflies breed in uncovered garbage and sewage. Source reduction plus barriers (nets, repellents) breaks the transmission cycle.',
  },
  'b9kb-sa12': {
    stem: 'What is organic farming and what is its primary aim?',
    options: [
      'Using synthetic chemical fertilisers for maximum yield — aim: profit maximisation',
      'Cultivation without synthetic chemicals, using compost, manure and bio-pesticides — aim: sustainable agriculture with minimal environmental harm',
      'Growing crops only in greenhouses with artificial light',
      'Replacing all crops with genetically modified high-yield varieties only',
    ],
    correctOption: 1,
    whyCorrect:
      'Organic farming avoids synthetic fertilisers and pesticides, relying on natural inputs to maintain soil fertility and ecological balance sustainably.',
  },
};

/** Topic-specific plausible misconceptions for distractor generation. */
const MISCONCEPTIONS = {
  'bio-ch1': [
    'Phloem conducts water upward from roots to leaves',
    'Transpiration occurs primarily through root hairs',
    'Osmosis requires energy in the form of ATP for water movement',
    'Root pressure alone explains water rise in tall trees',
    'The cell wall is semi-permeable and controls osmosis',
    'Guttation and transpiration are identical processes',
  ],
  'bio-ch2': [
    'The anther develops into fruit after fertilization',
    'Cross-pollination occurs within the same flower',
    'Ovule develops into the fruit wall (pericarp)',
    'Wind-pollinated flowers are large, colourful and scented',
    'Vegetative propagation produces genetically varied offspring',
  ],
  'bio-ch3': [
    'Placenta is produced by the embryo for its nutrition',
    'Fertilization occurs in the uterus',
    'Sperm and ovum are multicellular structures',
    'Budding in Hydra is a form of sexual reproduction',
    'Testes produce ova and estrogen in males',
  ],
  'bio-ch4': [
    'Energy is created de novo at each trophic level',
    'Decomposers are primary producers in a food chain',
    'A food chain is more stable than a food web',
    'Abiotic components include living decomposers',
    'Secondary consumers feed directly on producers',
  ],
  'bio-ch5': [
    'Insulin is secreted by the thyroid gland',
    'Adrenaline lowers blood glucose during stress',
    'Pituitary gland is located in the kidney',
    'Exocrine glands release hormones directly into blood',
    'Thyroxine is produced by the pancreas',
  ],
  'bio-ch6': [
    'Veins carry blood away from the heart to organs',
    'Arteries always carry oxygenated blood without exception',
    'Lymph contains red blood cells like blood plasma',
    'Pulmonary vein carries deoxygenated blood to lungs',
    'Platelets are responsible for oxygen transport',
  ],
  'bio-ch7': [
    'Cerebellum controls breathing and heartbeat',
    'Medulla oblongata is the seat of intelligence and memory',
    'Sensory neurons carry impulses from brain to receptors',
    'Reflex actions always involve the cerebrum first',
    'Synapse occurs only in the spinal cord',
  ],
  'bio-ch8': [
    'Antibiotics are effective against viral infections like common cold',
    'Vaccines cure a person already suffering from the disease',
    'Malaria is caused by a bacterium, not a protozoan',
    'Aedes aegypti is the pathogen of dengue fever',
    'BCG vaccine protects against viral polio',
  ],
  'bio-ch9': [
    'Sericulture is rearing of honeybees for honey production',
    'Kharif crops are sown in winter and harvested in summer',
    'Green Revolution refers to increased milk production',
    'Vermiculture uses earthworms to produce chemical fertilisers',
    'Broilers are egg-laying poultry; layers are meat birds',
  ],
};

function shuffleDeterministic(arr, seed) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed + i * 7) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function extractNumberedPoints(answer) {
  if (!answer) return [];
  return answer
    .split('\n')
    .map((l) => l.replace(/^\d+\.\s*/, '').replace(/^[•\-]\s*/, '').trim())
    .filter((l) => l.length > 15 && !/^[A-Z]+:$/.test(l));
}

function parseDistinguishAnswer(answer) {
  const parts = {};
  const lines = (answer || '').split('\n');
  let current = null;
  for (const line of lines) {
    const m = line.match(/^([A-Z][A-Z\s\-\/]+):\s*(.+)/);
    if (m) {
      current = m[1].trim();
      parts[current] = m[2].trim();
    } else if (current && line.trim()) {
      parts[current] += ' ' + line.trim();
    }
  }
  return parts;
}

function buildGiveReasonMcq(q) {
  const qn = q.question.replace(/^Give reasons?:?\s*/i, '').trim();
  const points = extractNumberedPoints(q.answer).filter(
    (p) => !p.endsWith(':') && p.length > 20
  );

  let correct;
  if (points.length >= 2) {
    correct = `${points[0]} Additionally, ${points[1].charAt(0).toLowerCase()}${points[1].slice(1)}`;
  } else if (points.length === 1) {
    correct = points[0];
  } else {
    const sentences = (q.answer || '')
      .replace(/^\d+\.\s*/gm, '')
      .split(/(?<=[.!?])\s+/)
      .filter((s) => s.length > 25 && !s.endsWith(':'));
    correct = sentences.slice(0, 2).join(' ') || q.answer.split('\n')[0];
  }

  // Build topic-specific plausible wrong explanations
  const pool = MISCONCEPTIONS[q.topicId] || MISCONCEPTIONS['bio-ch1'];
  const stem = `Which of the following is the MOST scientifically accurate explanation for why ${qn.replace(/\.$/, '')}?`;

  const wrongExplanations = [
    pool[0] || 'The process has no functional significance and is purely wasteful for the organism',
    pool[1] || 'The phenomenon occurs only in aquatic organisms, not in terrestrial plants',
    pool[2] || 'The process requires direct energy input from ATP for every molecule moved',
  ].filter((d) => d.toLowerCase() !== correct.toLowerCase().substring(0, 30));

  const options = shuffleDeterministic(
    [correct, ...wrongExplanations.slice(0, 3)],
    hashSeed(q.id)
  );
  const correctOption = options.indexOf(correct);

  return {
    stem,
    options,
    correctOption,
    whyCorrect: points.length > 0 ? points.join(' ') : correct,
    format: 'Single Correct Answer (Converted from Descriptive)',
  };
}

function buildDistinguishMcq(q) {
  const match = q.question.match(/(?:Distinguish|Differentiate) between (.+?) and (.+?)(?:\s*\(|$)/i);
  const termA = match ? match[1].trim() : 'Term A';
  const termB = match ? match[2].trim() : 'Term B';
  const parts = parseDistinguishAnswer(q.answer);
  const keys = Object.keys(parts);

  let correctText;
  if (keys.length >= 2) {
    correctText = `${keys[0]}: ${parts[keys[0]]}; ${keys[1]}: ${parts[keys[1]]}`;
  } else {
    correctText = (q.answer || '').replace(/\n/g, ' ').substring(0, 180);
  }

  const swapped =
    keys.length >= 2
      ? `${keys[1]}: ${parts[keys[0]]}; ${keys[0]}: ${parts[keys[1]]}`
      : `Both ${termA} and ${termB} perform identical functions in all contexts`;

  const pool = MISCONCEPTIONS[q.topicId] || [];
  const partial = `${termA} and ${termB} differ only in size, not in function or location`;
  const unrelated = pool[0] || `${termA} is an abiotic factor; ${termB} is a biotic factor`;

  const stem = `Which pair of statements CORRECTLY distinguishes between ${termA} and ${termB}?`;
  const options = shuffleDeterministic([correctText, swapped, partial, unrelated], hashSeed(q.id));
  const correctOption = options.indexOf(correctText);

  return {
    stem,
    options,
    correctOption,
    whyCorrect: correctText,
    format: 'Single Correct Answer (Converted from Descriptive)',
  };
}

function buildExperimentMcq(q) {
  const qn = q.question;
  const ans = q.answer || '';

  // Multi-part: extract (a) answer
  const partA = ans.match(/\(a\)\s*([^\n(]+)/i);
  const partB = ans.match(/\(b\)\s*([^\n(]+)/i);

  if (/why\?/i.test(qn) || /^In an experiment/i.test(qn)) {
    const correct = ans.split(/(?<=[.!?])\s+/)[0];
    const pool = MISCONCEPTIONS[q.topicId] || [];
    const stem = qn.endsWith('?') ? qn : `${qn} Which explanation is correct?`;
    const options = shuffleDeterministic(
      [correct, ...pool.slice(0, 3)],
      hashSeed(q.id)
    );
    return {
      stem,
      options,
      correctOption: options.indexOf(correct),
      whyCorrect: correct,
      format: 'Single Correct Answer (Converted from Descriptive)',
    };
  }

  if (partA) {
    const correct = partA[1].trim();
    const pool = MISCONCEPTIONS[q.topicId] || [];
    const stem = `Based on the experimental context described, ${qn.split('(')[0].trim()} — select the MOST accurate answer for part (a):`;
    const options = shuffleDeterministic(
      [correct, ...pool.slice(0, 3)],
      hashSeed(q.id)
    );
    return {
      stem,
      options,
      correctOption: options.indexOf(correct),
      whyCorrect: correct,
      format: 'Single Correct Answer (Converted from Descriptive)',
    };
  }

  if (partB) {
    const correct = partB[1].trim();
    const pool = MISCONCEPTIONS[q.topicId] || [];
    const stem = `In the experimental set-up described, which tissue or structure is primarily responsible for the observed process?`;
    const options = shuffleDeterministic(
      [correct, ...pool.slice(0, 3)],
      hashSeed(q.id)
    );
    return {
      stem,
      options,
      correctOption: options.indexOf(correct),
      whyCorrect: correct,
      format: 'Single Correct Answer (Converted from Descriptive)',
    };
  }

  return null;
}

function buildExplainMcq(q) {
  const qn = q.question;
  const points = extractNumberedPoints(q.answer);
  const correct =
    points.length > 0
      ? points.slice(0, 2).join('; ')
      : (q.answer || '').split('\n')[0];

  const pool = MISCONCEPTIONS[q.topicId] || [];
  const stem = qn.endsWith('?')
    ? qn
    : `Which of the following BEST answers: ${qn}?`;

  const options = shuffleDeterministic([correct, ...pool.slice(0, 3)], hashSeed(q.id));
  return {
    stem,
    options,
    correctOption: options.indexOf(correct),
    whyCorrect: correct,
    format: 'Single Correct Answer (Converted from Descriptive)',
  };
}

function buildListStateMcq(q) {
  const points = extractNumberedPoints(q.answer).filter((p) => !p.endsWith(':'));
  if (points.length < 2) return buildExplainMcq(q);

  const correct = points.slice(0, 3).join('; ');
  const pool = MISCONCEPTIONS[q.topicId] || [];
  const wrong1 = `${points[0]} only — the other listed roles are incorrect`;
  const wrong2 = pool[0] || 'None of the listed functions apply to this structure';
  const wrong3 = [...points].reverse().slice(0, 2).join('; ') + ' (roles reversed)';

  const qn = q.question.replace(/^State |^List |^Give /i, '').trim();
  const stem = `Which option CORRECTLY addresses: "${qn.substring(0, 120)}"?`;

  const options = shuffleDeterministic([correct, wrong1, wrong2, wrong3], hashSeed(q.id));
  return {
    stem,
    options,
    correctOption: options.indexOf(correct),
    whyCorrect: points.slice(0, 3).map((p) => `• ${p}`).join('\n'),
    format: 'Single Correct Answer (Converted from Descriptive)',
  };
}

function hashSeed(id) {
  return (id || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
}

function detectType(q) {
  const qn = q.question || '';
  if (/^Give reason/i.test(qn)) return 'give_reason';
  if (/^Distinguish between|^Differentiate between|^Differentiate among/i.test(qn))
    return 'distinguish';
  if (/experiment|test tube|polythene bag|Study the|magnified view|diagram|label/i.test(qn))
    return 'experiment';
  if (/^Explain |^What is .+\?|^Define /i.test(qn)) return 'explain';
  if (/^State |^List |^Give two|^Give three|^Write two|^Name the four/i.test(qn))
    return 'list_state';
  if (/^Arrange |^Rewrite |sequence/i.test(qn)) return 'sequence';
  if (/^Draw |diagram/i.test(qn)) return 'diagram';
  return 'explain';
}

function buildSequenceMcq(q) {
  const ans = q.answer || '';
  const correct = ans.replace(/\n/g, ' → ').substring(0, 160);
  const pool = MISCONCEPTIONS[q.topicId] || [];
  const reversed = ans.split(/→|→|,|\n/).reverse().join(' → ');
  const stem = `Which sequence is biologically CORRECT for: ${q.question.substring(0, 100)}?`;
  const options = shuffleDeterministic(
    [correct, reversed.substring(0, 160), ...pool.slice(0, 2)],
    hashSeed(q.id)
  );
  return {
    stem,
    options,
    correctOption: options.indexOf(correct),
    whyCorrect: correct,
    format: 'Single Correct Answer (Converted from Descriptive)',
  };
}

/**
 * Convert a descriptive short-answer item to an elite MCQ.
 * Returns null if conversion is not possible.
 */
function convertDescriptiveToMcq(q) {
  if (OVERRIDES[q.id]) {
    const o = OVERRIDES[q.id];
    return {
      stem: o.stem,
      options: o.options,
      correctOption: o.correctOption,
      whyCorrect: o.whyCorrect,
      format: 'Single Correct Answer (Converted from Descriptive)',
    };
  }

  const type = detectType(q);
  switch (type) {
    case 'give_reason':
      return buildGiveReasonMcq(q);
    case 'distinguish':
      return buildDistinguishMcq(q);
    case 'experiment':
      return buildExperimentMcq(q);
    case 'list_state':
      return buildListStateMcq(q);
    case 'sequence':
      return buildSequenceMcq(q);
    case 'explain':
    default:
      return buildExplainMcq(q);
  }
}

module.exports = {
  convertDescriptiveToMcq,
  OVERRIDES,
  OPTION_LABELS,
};
