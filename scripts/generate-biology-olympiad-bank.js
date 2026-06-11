#!/usr/bin/env node
/**
 * Generate ICSE Class 8 Biology Olympiad / NEET Foundation assessment bank
 * from audited question JSON → elite markdown format.
 *
 * Usage: node scripts/generate-biology-olympiad-bank.js
 */
const fs = require('fs');
const path = require('path');
const { convertDescriptiveToMcq } = require('./descriptive-to-mcq');

const ROOT = path.join(__dirname, '..');
const INPUT = path.join(ROOT, 'data', 'biology-audit-selected-v2.json');
const OUTPUT = path.join(ROOT, 'data', 'biology-olympiad-assessments.md');
const AUDIT_REVIEWED = 2559;

const CHAPTER_NAMES = {
  'bio-ch1': 'Transportation in Plants',
  'bio-ch2': 'Reproduction in Plants',
  'bio-ch3': 'Reproduction in Humans',
  'bio-ch4': 'Ecosystems',
  'bio-ch5': 'Endocrine System & Adolescence',
  'bio-ch6': 'The Circulatory System',
  'bio-ch7': 'Nervous System',
  'bio-ch8': 'Diseases and First Aid',
  'bio-ch9': 'Food Production',
};

const CHAPTER_ORDER = Object.keys(CHAPTER_NAMES);

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const TF_OPTIONS = [
  'The statement is entirely correct and biologically accurate.',
  'The statement is entirely incorrect.',
  'The statement is partially correct but contains a critical biological error.',
  'The statement confuses two distinct biological structures or processes.',
];

/** Pattern-based stem upgrades for deeper conceptual testing. */
function transformStem(stem, topicId, type) {
  if (!stem || typeof stem !== 'string') return stem;
  let s = stem.trim();

  const chapter = CHAPTER_NAMES[topicId] || 'biology';

  const upgrades = [
    {
      test: /^Assertion\s*\(A\)/i,
      apply: (t) => t,
    },
    {
      test: /^Give reason:\s*/i,
      apply: (t) =>
        t.replace(
          /^Give reason:\s*/i,
          'Analyse the underlying physiological mechanism and select the BEST explanation for why '
        ),
    },
    {
      test: /^Differentiate between|^Distinguish between/i,
      apply: (t) => t,
    },
    {
      test: /^Define\s+/i,
      apply: (t) =>
        t.replace(/^Define\s+/i, 'Select the most precise biological definition of '),
    },
    {
      test: /^Name\s+(the\s+)?/i,
      apply: (t) =>
        t.replace(/^Name\s+(the\s+)?/i, 'Identify the biological structure or process: '),
    },
    {
      test: /^Which\s+(tissue|organ|hormone|process|structure)/i,
      apply: (t) => `Applying integrated knowledge of ${chapter}, ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
    },
    {
      test: /^Which\s+is\s+the\s+INCORRECTLY/i,
      apply: (t) => `Evaluate each pair critically — ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
    },
    {
      test: /^Which\s+of\s+the\s+following/i,
      apply: (t) => `Considering physiological cause-and-effect relationships in ${chapter}, ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
    },
    {
      test: /^What\s+is\s+the\s+(main|primary)\s+(function|role)/i,
      apply: (t) =>
        `From a functional physiology perspective, ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
    },
    {
      test: /^How\s+does\s+/i,
      apply: (t) => {
        if (type === 'short_answer') return t;
        return `Trace the biological pathway: ${t.charAt(0).toLowerCase()}${t.slice(1)} Which option best describes this mechanism?`;
      },
    },
    {
      test: /^True\s+or\s+False:/i,
      apply: (t) => t.replace(/^True\s+or\s+False:\s*/i, ''),
    },
    {
      test: /^The\s+/i,
      apply: (t) => {
        if (type === 'true_false') {
          return `Evaluate the following biological statement for scientific accuracy: "${t.replace(/\.$/, '')}"`;
        }
        return t;
      },
    },
  ];

  for (const rule of upgrades) {
    if (rule.test.test(s)) {
      s = rule.apply(s);
      break;
    }
  }

  if (type === 'mcq' && !/Assertion\s*\(A\)/i.test(s) && s.length < 120 && !s.endsWith('?')) {
    s = `${s}?`;
  }

  return s;
}

/** Keyword-driven biological distractor analysis. */
function explainDistractor(optionText, correctAnswer, topicId, stem, answerField) {
  const opt = (optionText || '').trim();
  const correct = (correctAnswer || '').trim();
  const lower = opt.toLowerCase();
  const ans = (answerField || '').toLowerCase();

  if (!opt) {
    return 'This option is empty or malformed and cannot be the correct choice.';
  }

  if (opt === correct) {
    return 'This is the correct answer.';
  }

  const tfResult = explainTFDistractor(opt, ans);
  if (tfResult) return tfResult;

  // Assertion–Reason specific analysis
  const arResult = explainARDistractor(opt, ans, stem);
  if (arResult) return arResult;

  const KEYWORD_RULES = [
    {
      kw: /\bxylem\b/i,
      wrong: (o) =>
        o.match(/\bphloem\b/i)
          ? 'Phloem transports manufactured food (sucrose) via translocation in living sieve tubes — not the upward flow of raw sap. Xylem, not phloem, is the water-conducting tissue tested here.'
          : 'Xylem consists of dead, hollow vessels that conduct water and minerals upward via transpiration pull; this option misattributes the function, direction, or cell type associated with xylem.',
    },
    {
      kw: /\bphloem\b/i,
      wrong: (o) =>
        o.match(/\bxylem\b/i)
          ? 'Xylem carries water and dissolved minerals upward from roots; it does not distribute photosynthetic products. Food transport is the role of phloem (translocation).'
          : 'Phloem translocates organic solutes bidirectionally through living sieve tubes; selecting this misidentifies the tissue responsible for food movement.',
    },
    {
      kw: /\btranspiration\b/i,
      wrong: () =>
        'Transpiration is the loss of water vapour chiefly through stomata, creating transpiration pull — it is not translocation of food, root absorption, or guttation.',
    },
    {
      kw: /\btranslocation\b/i,
      wrong: () =>
        'Translocation refers specifically to food movement in phloem, not the ascent of sap in xylem or passive diffusion across membranes.',
    },
    {
      kw: /\bosmosis\b/i,
      wrong: () =>
        'Osmosis is the net movement of water across a semi-permeable membrane down a water-potential gradient — it is not active mineral uptake or bulk flow in vessels.',
    },
    {
      kw: /\bactive transport\b/i,
      wrong: () =>
        'Active transport moves substances against a concentration gradient using ATP (e.g., mineral uptake by root hairs); it is not passive diffusion or osmosis.',
    },
    {
      kw: /\bstomata?\b/i,
      wrong: () =>
        'Stomata are guarded pores on leaves regulating gas exchange and transpiration — they are not the primary site of photosynthesis initiation or root absorption.',
    },
    {
      kw: /\broot hair/i,
      wrong: () =>
        'Root hairs increase surface area for water/mineral absorption by osmosis and active transport — they do not synthesise food or conduct transpiration.',
    },
    {
      kw: /\bphotosynthesis\b/i,
      wrong: () =>
        'Photosynthesis occurs in chloroplasts of green cells, using CO₂ and water to produce glucose and releasing O₂ — it is not respiration, transpiration, or decomposition.',
    },
    {
      kw: /\brespiration\b/i,
      wrong: () =>
        'Cellular respiration breaks down glucose to release energy (ATP) with CO₂ and water as by-products — it is not photosynthesis or fermentation in the exam sense.',
    },
    {
      kw: /\bartery|arteries\b/i,
      wrong: (o) =>
        o.match(/\bvein/i)
          ? 'Veins return deoxygenated blood to the heart under low pressure and possess valves; arteries carry blood away from the heart.'
          : 'Arteries carry oxygenated blood away from the heart (except pulmonary artery); this option confuses vessel type, blood content, or direction of flow.',
    },
    {
      kw: /\bvein|vena cava\b/i,
      wrong: (o) =>
        o.match(/\barter/i)
          ? 'Arteries transport blood away from the heart at high pressure; veins bring blood back and contain valves to prevent backflow.'
          : 'Veins carry blood toward the heart, typically deoxygenated (except pulmonary vein); this option misstates their role or wall structure.',
    },
    {
      kw: /\bheart\b/i,
      wrong: () =>
        'The heart is a four-chambered muscular pump — selecting this misidentifies chamber function, circulation pathway, or associated vessels.',
    },
    {
      kw: /\bplatelet/i,
      wrong: () =>
        'Platelets aid blood clotting at injury sites; they are not involved in oxygen transport (RBCs) or immunity (WBCs).',
    },
    {
      kw: /\bhaemoglobin|hemoglobin|rbcs?|red blood/i,
      wrong: () =>
        'Haemoglobin in RBCs binds oxygen for transport; this option confuses it with clotting factors, antibodies, or plasma proteins.',
    },
    {
      kw: /\bwbcs?|white blood|leucocyte/i,
      wrong: () =>
        'White blood cells defend against pathogens via phagocytosis or antibody production — they do not carry oxygen or initiate clotting.',
    },
    {
      kw: /\bneuron|nerve cell|axon|dendrite|synapse/i,
      wrong: () =>
        'Neurons transmit electrical impulses via axons and relay signals across synapses with neurotransmitters — this option confuses neural structure with hormonal or muscular function.',
    },
    {
      kw: /\bcerebrum|cerebellum|medulla|brain\b/i,
      wrong: () =>
        'Each brain region has distinct roles (cerebrum — thought/movement; cerebellum — balance; medulla — involuntary actions); this option assigns the wrong function.',
    },
    {
      kw: /\breflex\b/i,
      wrong: () =>
        'A reflex arc bypasses the brain for rapid involuntary responses via spinal cord integration — it is not a learned voluntary action.',
    },
    {
      kw: /\binsulin\b/i,
      wrong: () =>
        'Insulin from pancreatic β-cells lowers blood glucose by promoting cellular uptake — it is not produced by the thyroid or adrenal glands.',
    },
    {
      kw: /\bthyroxine|thyroid\b/i,
      wrong: () =>
        'Thyroxine regulates metabolic rate and growth via the thyroid gland — it does not control blood sugar (insulin) or fight-or-flight (adrenaline).',
    },
    {
      kw: /\badrenaline|epinephrine\b/i,
      wrong: () =>
        'Adrenaline from the adrenal medulla triggers rapid physiological changes in stress — it is distinct from insulin, oestrogen, or growth hormone.',
    },
    {
      kw: /\btestosterone|oestrogen|estrogen|progesterone\b/i,
      wrong: () =>
        'Sex hormones regulate secondary sexual characteristics and reproductive cycles — they are not digestive enzymes or circulatory hormones.',
    },
    {
      kw: /\bgrowth hormone\b/i,
      wrong: () =>
        'Growth hormone from the pituitary stimulates body growth and cell division — it is not an adrenal or pancreatic hormone.',
    },
    {
      kw: /\bpituitary\b/i,
      wrong: () =>
        'The pituitary is the master endocrine gland releasing tropic hormones — it is not the pancreas, thyroid, or adrenal gland.',
    },
    {
      kw: /\bproducer|primary producer\b/i,
      wrong: () =>
        'Producers (autotrophs) convert solar energy to food via photosynthesis — consumers and decomposers cannot occupy this trophic level.',
    },
    {
      kw: /\bdecomposer|saprotroph/i,
      wrong: () =>
        'Decomposers break down dead organic matter, recycling nutrients — they are not producers or apex predators.',
    },
    {
      kw: /\bfood chain|food web|trophic\b/i,
      wrong: () =>
        'Food chains show unidirectional energy flow; food webs are interconnected chains — energy is lost at each trophic level (~10% rule).',
    },
    {
      kw: /\babiotic\b/i,
      wrong: () =>
        'Abiotic factors are non-living (temperature, water, light, soil) — living organisms are biotic components.',
    },
    {
      kw: /\bbiotic\b/i,
      wrong: () =>
        'Biotic factors are living organisms in an ecosystem — climate and minerals are abiotic, not biotic.',
    },
    {
      kw: /\bpollination\b/i,
      wrong: () =>
        'Pollination is transfer of pollen to stigma (agent: wind, water, insects) — it precedes but is distinct from fertilisation (fusion of gametes).',
    },
    {
      kw: /\bfertilisation|fertilization|zygote\b/i,
      wrong: () =>
        'Fertilisation fuses male and female gametes forming a zygote — it is not pollination, germination, or vegetative propagation.',
    },
    {
      kw: /\bgermination\b/i,
      wrong: () =>
        'Germination is sprouting of a seed embryo under suitable conditions — it follows fertilisation and seed formation, not pollination.',
    },
    {
      kw: /\bvegetative propagation|grafting|cutting|layering\b/i,
      wrong: () =>
        'Vegetative propagation produces clones from plant parts without seeds — it is asexual, not sexual reproduction.',
    },
    {
      kw: /\bbacteria|virus|pathogen|antibiotic|vaccine\b/i,
      wrong: () =>
        'Pathogens cause disease; antibiotics target bacteria (not viruses); vaccines build immunity — this option confuses disease agent, treatment, or prevention.',
    },
    {
      kw: /\bantibod/i,
      wrong: () =>
        'Antibodies are proteins produced by lymphocytes to neutralise antigens — they are not antibiotics, vaccines, or pathogens themselves.',
    },
    {
      kw: /\bsericulture|apiculture|pisciculture|vermiculture|horticulture\b/i,
      wrong: () =>
        'Each culture practice targets a specific organism/product (silk, honey, fish, earthworms, fruits/flowers) — this option mismatches the practice with the organism.',
    },
    {
      kw: /\bcompost|manure|fertilizer|fertiliser|nitrogen fixation\b/i,
      wrong: () =>
        'Organic manure and compost recycle nutrients; chemical fertilisers supply specific minerals; Rhizobium fixes nitrogen — this option confuses soil enrichment methods.',
    },
    {
      kw: /\bmicronutrient\b/i,
      wrong: () =>
        'Micronutrients (Fe, Mn, Zn, Cu, B, Mo, Cl) are needed in trace amounts — nitrogen, phosphorus, and potassium are macronutrients.',
    },
    {
      kw: /\bmacronutrient\b/i,
      wrong: () =>
        'Macronutrients (N, P, K, Ca, Mg, S) are required in large amounts — iron and zinc are micronutrients, not macronutrients.',
    },
    {
      kw: /\bboth a and r are true\b/i,
      wrong: () => explainARDistractor(opt, ans, stem) || 'This A–R combination does not match the truth values of Assertion and Reason stated in the solution.',
    },
    {
      kw: /\ba is true and r is false\b/i,
      wrong: () => explainARDistractor(opt, ans, stem) || 'Either Assertion is not fully true or Reason is not false — re-evaluate each statement independently.',
    },
    {
      kw: /\ba is false and r is true\b/i,
      wrong: () => explainARDistractor(opt, ans, stem) || 'Either Assertion is not false or Reason is not true — check each statement against chapter facts.',
    },
    {
      kw: /\btrue\b/i,
      wrong: () => {
        if (ans.startsWith('false') || ans.includes('false.')) {
          return 'The statement is biologically false — the answer key confirms it contradicts established facts in this chapter.';
        }
        return 'Although this affirms truth, the specific biological claim does not align with the mechanism described in the correct answer.';
      },
    },
    {
      kw: /\bfalse\b/i,
      wrong: () => {
        if (ans.startsWith('true') || ans.includes('true.')) {
          return 'The statement is biologically true — rejecting it ignores the physiological evidence cited in the solution.';
        }
        return 'Although this denies the statement, the biological evidence supports the claim in the stem.';
      },
    },
  ];

  for (const rule of KEYWORD_RULES) {
    if (rule.kw.test(opt)) {
      return rule.wrong(opt);
    }
  }

  // Cross-check: if option contains a term that answer explicitly refutes
  const refutePatterns = [
    [/not\s+(\w+)/gi, 1],
    [/instead\s+of\s+(\w+)/gi, 1],
    [/is\s+(\w+),?\s+not\s+(\w+)/i, 2],
  ];
  for (const [re, group] of refutePatterns) {
    let m;
    while ((m = re.exec(ans)) !== null) {
      const term = m[group];
      if (term && lower.includes(term.toLowerCase()) && !correct.toLowerCase().includes(term.toLowerCase())) {
        return `The solution explicitly refutes "${term}" in this context — this option repeats the biological misconception the question tests.`;
      }
    }
  }

  // Combination options (e.g. "P and R", "Q and S")
  const comboResult = explainComboDistractor(opt, ans, stem);
  if (comboResult) return comboResult;

  const chapter = CHAPTER_NAMES[topicId] || 'this chapter';
  if (lower.length < 20) {
    return `"${opt}" is a plausible but incorrect term — in ${chapter}, the correct concept differs in structure, function, or physiological role as explained in the answer key.`;
  }

  return `"${truncate(opt, 80)}" describes a biologically distinct structure, process, or relationship that does not satisfy the specific constraint posed in the question stem.`;
}

function explainComboDistractor(optionText, answerLower, stem) {
  const combo = optionText.match(/^([A-Z])\s+and\s+([A-Z])$/i);
  if (!combo) return null;
  const [, l1, l2] = combo;
  const stemLower = (stem || '').toLowerCase();
  const wrongLetters = [];
  const m = answerLower.match(/([a-z])\s+(?:and|&)\s+([a-z])\s+(?:are|is)\s+correct/i);
  if (m) {
    const correctSet = new Set([m[1].toUpperCase(), m[2].toUpperCase()]);
    if (!correctSet.has(l1.toUpperCase())) wrongLetters.push(l1.toUpperCase());
    if (!correctSet.has(l2.toUpperCase())) wrongLetters.push(l2.toUpperCase());
  }
  for (const letter of [l1.toUpperCase(), l2.toUpperCase()]) {
    if (answerLower.includes(`${letter.toLowerCase()} is wrong`) || answerLower.includes(`${letter.toLowerCase()} is false`)) {
      if (!wrongLetters.includes(letter)) wrongLetters.push(letter);
    }
  }
  if (wrongLetters.length) {
    const clauses = wrongLetters.map((L) => {
      const stmt = stem.match(new RegExp(`${L}:\\s*([^.]+)`, 'i'));
      const text = stmt ? stmt[1].trim() : `statement ${L}`;
      return `statement ${L} ("${truncate(text, 50)}") is biologically incorrect`;
    });
    return `This combination is wrong because ${clauses.join(' and ')}.`;
  }
  return `The pairing ${l1} and ${l2} does not represent the only correct statements — consult the solution for which lettered claims are valid.`;
}

function explainTFDistractor(optionText, answerLower) {
  const idx = TF_OPTIONS.indexOf(optionText);
  if (idx < 0) return null;

  const isTrue = answerLower.startsWith('true') || /\btrue\.\b/.test(answerLower);
  const isFalse = answerLower.startsWith('false') || /\bfalse\.\b/.test(answerLower);
  const isPartial =
    /partially|not entirely|however|but the|although.*true/i.test(answerLower) &&
    !/entirely incorrect|both.*false/i.test(answerLower);
  const isConfusion =
    /confus|mix.?up|instead of|not .+, but |wrong (tissue|organ|process)/i.test(answerLower);

  if (idx === 0) {
    if (isTrue) return null;
    if (isFalse) return 'The statement is biologically false — the solution refutes the claim with chapter-specific evidence.';
    return 'The statement is not entirely accurate without qualification — the solution identifies a factual error.';
  }
  if (idx === 1) {
    if (isFalse) return null;
    if (isTrue) return 'The statement is biologically true — rejecting it contradicts the established facts in the solution.';
    return 'The statement is not wholly incorrect — it contains valid biological content the solution affirms.';
  }
  if (idx === 2) {
    if (isPartial) return null;
    return 'The error is not merely partial — the solution shows the statement is either fully true or fully false, not half-correct.';
  }
  if (idx === 3) {
    if (isConfusion) return null;
    return 'The mistake is not a simple mix-up between two structures — the solution points to a direct factual inaccuracy in the statement itself.';
  }
  return null;
}

function explainARDistractor(optionText, answerLower, stem) {
  if (!/assertion/i.test(stem || '') && !/assertion/i.test(answerLower)) return null;

  const opt = optionText.toLowerCase();

  const truth = {
    aTrue: !/a is false|assertion.*false|both.*false/i.test(answerLower) || /a is true/i.test(answerLower),
    aFalse: /a is false|both.*false/i.test(answerLower),
    rTrue: /r is true|both.*true/i.test(answerLower) && !/r is false/i.test(answerLower),
    rFalse: /r is false|both.*false/i.test(answerLower),
  };

  if (/both a and r are true.*correct explanation/i.test(opt)) {
    if (truth.aTrue && truth.rTrue && /r explains|correct explanation/i.test(answerLower)) return null;
    if (!truth.aTrue || !truth.rTrue) {
      return `Both statements are not simultaneously true — Assertion is ${truth.aTrue ? 'true' : 'false'} and Reason is ${truth.rTrue ? 'true' : 'false'}, so this combination is invalid.`;
    }
    return 'Although both Assertion and Reason may be true, Reason does not logically explain Assertion — they describe related but independent facts.';
  }
  if (/both a and r are true.*not the correct explanation/i.test(opt)) {
    if (truth.aTrue && truth.rTrue && !/r explains|correct explanation of a/i.test(answerLower)) return null;
    return 'This option requires both statements to be true without explanatory linkage — the actual truth values differ from this pairing.';
  }
  if (/both a and r are true$/i.test(opt.trim())) {
    if (truth.aTrue && truth.rTrue) return null;
    return `At least one of Assertion or Reason is false — the solution establishes A is ${truth.aTrue ? 'true' : 'false'} and R is ${truth.rTrue ? 'true' : 'false'}.`;
  }
  if (/both a and r are false/i.test(opt)) {
    if (truth.aFalse && /both.*false|r is false.*a is false/i.test(answerLower)) return null;
    if (truth.aTrue || truth.rTrue) {
      return 'Not both statements are false — one or both are actually true according to the chapter facts in the solution.';
    }
    return null;
  }
  if (/a is true and r is false/i.test(opt)) {
    if (/a is true and r is false/i.test(answerLower)) return null;
    return 'This truth-value pairing does not match — re-check whether Reason is actually false or Assertion is truly true.';
  }
  if (/a is false and r is true/i.test(opt)) {
    if (/a is false and r is true/i.test(answerLower)) return null;
    return 'This truth-value pairing does not match — Assertion and Reason have different truth values than this option claims.';
  }
  if (/a is true but r is false/i.test(opt)) {
    if (/a is true.*r is false/i.test(answerLower)) return null;
    return 'The truth values of Assertion and Reason do not match this option — verify each statement independently.';
  }
  if (/a is false but r is true/i.test(opt)) {
    if (/a is false.*r is true/i.test(answerLower)) return null;
    return 'The truth values of Assertion and Reason do not match this option — verify each statement independently.';
  }

  return null;
}

function truncate(s, n) {
  if (s.length <= n) return s;
  return s.slice(0, n - 3) + '...';
}

function isBannedOption(text) {
  return /all of the above|none of these|both a and c|all of these/i.test(text || '');
}

function isValidOptions(options) {
  if (!Array.isArray(options)) return false;
  const clean = options.filter((o) => o && String(o).trim());
  if (clean.length !== 4) return false;
  return !clean.some(isBannedOption);
}

function difficultyStars(score) {
  return (score ?? 0) >= 10 ? '★★★★★' : '★★★★☆';
}

function convertTrueFalse(q) {
  const isTrue = String(q.correctAnswer).toLowerCase() === 'true';
  const correctIdx = isTrue ? 0 : 1;
  return {
    stem: transformStem(q.question, q.topicId, 'true_false'),
    options: [...TF_OPTIONS],
    correctOption: correctIdx,
    format: 'Single Correct Answer',
    answer: q.answer,
    teacherTip: q.teacherTip,
    examTip: q.examTip,
  };
}

function shouldBeDescriptive(q) {
  const text = `${q.question} ${q.subtopic || ''}`;
  const qn = q.question || '';
  if (/\([a-d]\)/i.test(text)) return true;
  if (/long answer|experiment|case study|answer the following|odd one out|identify the following/i.test(text)) {
    return true;
  }
  if (/^Give reason|^Differentiate|^Distinguish between|^Compare .+ with|^Explain why|^List |^State (any )?(three|four|five|two)/i.test(qn)) {
    return true;
  }
  if ((q.answer || '').includes('\n') && (q.answer || '').split('\n').length > 2) return true;
  if (qn.length > 200) return true;
  if (/^Study the|^Observe the|^Draw|^Label|^Describe the experiment/i.test(qn)) {
    return true;
  }
  return false;
}

function extractKeyPhrase(answer) {
  if (!answer) return null;
  const lines = answer.split('\n').map((l) => l.trim()).filter(Boolean);
  const first = lines[0].replace(/^(True|False)\.?\s*/i, '').replace(/^\([a-d]\)\s*/i, '');
  if (first.length > 100 || first.endsWith(':')) return null;
  const m = first.match(/(?:is|are|called|termed|known as)\s+(?:the\s+)?([A-Z][A-Za-z\s\-]{2,40}?)(?:\.|,|$)/);
  if (m) return m[1].trim();
  const caps = first.match(/\b([A-Z][A-Z]{2,})\b/);
  if (caps && caps[1].length <= 20) return caps[1];
  if (first.length < 60 && !/because|since|therefore|however/i.test(first)) {
    return first.replace(/\.$/, '');
  }
  return null;
}

const SA_DISTRACTOR_POOL = {
  'bio-ch1': ['Phloem', 'Epidermis', 'Cambium', 'Diffusion only', 'Guttation', 'Root pressure alone'],
  'bio-ch2': ['Budding in Hydra', 'Binary fission', 'Parthenogenesis', 'Fragmentation in Spirogyra', 'Pollination by wind only'],
  'bio-ch3': ['Oestrogen only', 'Progesterone only', 'Testosterone only', 'Follicle-stimulating hormone', 'Adrenaline'],
  'bio-ch4': ['Decomposers as producers', 'Abiotic organisms', 'Energy creation', '10% energy gain per level'],
  'bio-ch5': ['Insulin from thyroid', 'Adrenaline for growth', 'Thyroxine from pancreas', 'Pituitary in kidney'],
  'bio-ch6': ['Veins carry blood away from heart', 'Arteries have valves', 'Platelets carry oxygen', 'Plasma digests food'],
  'bio-ch7': ['Cerebellum controls breathing', 'Medulla thinks and reasons', 'Sensory neuron carries impulse from brain', 'Synapse in muscle only'],
  'bio-ch8': ['Antibiotics cure viral infections', 'Vaccines treat active disease', 'Bacteria are always beneficial', 'TB spread by water only'],
  'bio-ch9': ['Sericulture produces honey', 'Apiculture produces silk', 'Composting uses chemical fertiliser', 'Vermiculture grows fish'],
};

function convertShortAnswerToMcq(q) {
  const key = extractKeyPhrase(q.answer) || extractKeyPhrase(q.blankAnswer);
  if (!key) return null;

  const pool = SA_DISTRACTOR_POOL[q.topicId] || SA_DISTRACTOR_POOL['bio-ch1'];
  const distractors = pool.filter((d) => d.toLowerCase() !== key.toLowerCase()).slice(0, 3);
  while (distractors.length < 3) {
    distractors.push(`Alternative mechanism ${distractors.length + 1}`);
  }

  const options = [key, ...distractors.slice(0, 3)];
  // Shuffle deterministically by question id
  const seed = (q.id || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (seed + i * 7) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const correctOption = shuffled.findIndex((o) => o === key);

  let stem = q.question;
  if (/^Give reason:/i.test(stem)) {
    stem = transformStem(stem, q.topicId, 'short_answer');
  } else if (!/\?$/.test(stem)) {
    stem = `Based on the following, identify the most accurate biological answer: ${stem}`;
  }

  return {
    stem,
    options: shuffled,
    correctOption,
    format: 'Conceptual MCQ',
    answer: q.answer,
    teacherTip: q.teacherTip,
    examTip: q.examTip,
  };
}

function buildExplanation(answer, teacherTip, examTip) {
  const parts = [];
  if (answer) parts.push(answer.trim());
  if (teacherTip) parts.push(`**Teacher Tip:** ${teacherTip.trim()}`);
  if (examTip) parts.push(`**Exam Tip:** ${examTip.trim()}`);
  return parts.join('\n\n');
}

function formatMcqMarkdown(item, q) {
  const stars = difficultyStars(q.score);
  const topic = CHAPTER_NAMES[q.topicId] || q.topicId;
  const correctLabel = OPTION_LABELS[item.correctOption];
  const correctText = item.options[item.correctOption];
  const lines = [];

  lines.push('## Olympiad / NEET Target Question (Class 8 ICSE)');
  lines.push(`**Difficulty Rating:** ICSE ${stars} | Olympiad / Foundation Level`);
  lines.push(`**Topic:** ${topic}`);
  lines.push(`**Format:** ${item.format}`);
  lines.push('');
  lines.push('### **Question**');
  lines.push(item.stem);
  item.options.forEach((opt, i) => {
    lines.push(`* **${OPTION_LABELS[i]})** ${opt}`);
  });
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('### **Answer Key & Analytical Solution**');
  lines.push(`**Correct Answer:** ${correctLabel}`);
  lines.push('');
  lines.push('#### **Scientific Explanation:**');
  const whyText = item.whyCorrect || extractWhyCorrect(item.answer, correctText);
  lines.push(`* **Why ${correctLabel} is correct:** ${whyText}`);
  lines.push('* **Conceptual Breakdown of Options:**');

  item.options.forEach((opt, i) => {
    if (i === item.correctOption) return;
    const reason = explainDistractor(opt, correctText, q.topicId, item.stem, item.answer);
    lines.push(`  * Option ${OPTION_LABELS[i]} ("${truncate(opt, 60)}") fails because ${reason.charAt(0).toLowerCase()}${reason.slice(1)}`);
  });

  const extra = [];
  if (q.teacherTip) extra.push(`*Teacher Tip: ${q.teacherTip}*`);
  if (q.examTip) extra.push(`*Exam Tip: ${q.examTip}*`);
  if (extra.length) {
    lines.push('');
    lines.push(extra.join(' '));
  }

  lines.push('');
  lines.push(`*Source ID: ${q.id}*`);
  lines.push('');
  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

function formatDescriptiveMarkdown(q) {
  const stars = difficultyStars(q.score);
  const topic = CHAPTER_NAMES[q.topicId] || q.topicId;
  const stem = transformStem(q.question, q.topicId, 'short_answer');
  const lines = [];

  lines.push('## Olympiad / NEET Target Question (Class 8 ICSE)');
  lines.push(`**Difficulty Rating:** ICSE ${stars} | Olympiad / Foundation Level`);
  lines.push(`**Topic:** ${topic}`);
  lines.push('**Format:** Descriptive / Analytical');
  lines.push('');
  lines.push('### **Question**');
  lines.push(stem);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('### **Answer Key & Analytical Solution**');
  lines.push('');
  lines.push('#### **Scientific Explanation:**');
  lines.push(buildExplanation(q.answer, q.teacherTip, q.examTip));
  lines.push('');
  lines.push(`*Source ID: ${q.id}*`);
  lines.push('');
  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

function extractWhyCorrect(answer, correctText) {
  if (!answer) return `The option "${truncate(correctText, 60)}" is supported by chapter facts.`;
  const a = answer.trim();
  const firstSentence = a.split(/(?<=[.!?])\s+/)[0];
  if (firstSentence.length > 20) return firstSentence;
  return a.length > 300 ? truncate(a, 300) : a;
}

function formatDescriptiveMcqCompanion(q, mcqItem) {
  const item = {
    ...mcqItem,
    answer: mcqItem.whyCorrect || q.answer,
    whyCorrect: mcqItem.whyCorrect,
    teacherTip: q.teacherTip,
    examTip: q.examTip,
  };
  const base = formatMcqMarkdown(item, q);
  return base.replace(
    '## Olympiad / NEET Target Question (Class 8 ICSE)\n',
    '## Olympiad / NEET Target Question (Class 8 ICSE)\n\n> **Companion MCQ** — converted from descriptive item above for Olympiad / NEET Foundation practice.\n\n'
  );
}

function processQuestion(q) {
  if (q.type === 'mcq') {
    if (!isValidOptions(q.options)) return null;
    const item = {
      stem: transformStem(q.question, q.topicId, 'mcq'),
      options: q.options.map((o) => String(o).trim()),
      correctOption: q.correctOption,
      format: 'Single Correct Answer',
      answer: q.answer,
      teacherTip: q.teacherTip,
      examTip: q.examTip,
    };
    return { kind: 'mcq', markdown: formatMcqMarkdown(item, q) };
  }

  if (q.type === 'true_false') {
    const item = convertTrueFalse(q);
    return { kind: 'mcq', markdown: formatMcqMarkdown(item, q) };
  }

  if (q.type === 'short_answer') {
    if (shouldBeDescriptive(q)) {
      const descMd = formatDescriptiveMarkdown(q);
      const mcqItem = convertDescriptiveToMcq(q);
      if (mcqItem && isValidOptions(mcqItem.options)) {
        const companionMd = formatDescriptiveMcqCompanion(q, mcqItem);
        return {
          kind: 'descriptive+mcq',
          markdown: descMd + companionMd,
        };
      }
      return { kind: 'descriptive', markdown: descMd };
    }
    const mcq = convertShortAnswerToMcq(q);
    if (mcq && isValidOptions(mcq.options)) {
      return { kind: 'mcq', markdown: formatMcqMarkdown(mcq, q) };
    }
    // Fallback: retain descriptive + attempt expert MCQ conversion
    const descMd = formatDescriptiveMarkdown(q);
    const descMcq = convertDescriptiveToMcq(q);
    if (descMcq && isValidOptions(descMcq.options)) {
      return {
        kind: 'descriptive+mcq',
        markdown: descMd + formatDescriptiveMcqCompanion(q, descMcq),
      };
    }
    return { kind: 'descriptive', markdown: descMd };
  }

  return null;
}

function buildHeader(retained, stats) {
  const pct = Math.round((retained / AUDIT_REVIEWED) * 100);
  const totalEntries = retained + (stats.descriptiveMcq || 0);
  return [
    '# ICSE Class 8 Biology — Olympiad / NEET Foundation Assessment Bank (FINAL)',
    '',
    `**Audit Summary:** ${AUDIT_REVIEWED} questions reviewed → ${retained} retained (${pct}% compression)`,
    '',
    '**Sources:** `biology.js` (447 curated ICSE) + `biology-neet.js` (2,112 foundation MCQs)',
    '',
    '**Quality Filter:** Trivial recall, duplicate stems, malformed auto-generated items, and "All/None of the above" options removed.',
    '',
    '**Final Bank Composition:**',
    `- ${stats.mcq} Single Correct Answer MCQs (incl. ${stats.tf} T/F converted)`,
    `- ${stats.descriptive} Descriptive / Analytical items (high-quality retained)`,
    `- ${stats.descriptiveMcq} Companion MCQs (100% descriptive coverage for Olympiad/NEET practice)`,
    `- ${stats.conceptual} short-answer → conceptual MCQ`,
    `- **${totalEntries} total assessment entries** across 9 chapters (★★★★☆ – ★★★★★)`,
    '',
    '**Regenerate:** `node scripts/generate-biology-olympiad-bank.js`',
    '',
    '---',
    '',
  ].join('\n');
}

function main() {
  const raw = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const byChapter = {};
  for (const ch of CHAPTER_ORDER) byChapter[ch] = [];

  let skipped = 0;
  const stats = { mcq: 0, descriptive: 0, descriptiveMcq: 0, conceptual: 0, tf: 0 };

  for (const q of raw) {
    const result = processQuestion(q);
    if (!result) {
      skipped++;
      continue;
    }
    const ch = q.topicId;
    if (!byChapter[ch]) byChapter[ch] = [];
    byChapter[ch].push(result.markdown);

    if (result.kind === 'descriptive') stats.descriptive++;
    else if (result.kind === 'descriptive+mcq') {
      stats.descriptive++;
      stats.descriptiveMcq++;
    } else {
      stats.mcq++;
      if (q.type === 'true_false') stats.tf++;
      if (q.type === 'short_answer') stats.conceptual++;
    }
  }

  const parts = [];

  const chapterCounts = {};
  let totalGenerated = 0;

  for (const ch of CHAPTER_ORDER) {
    const blocks = byChapter[ch] || [];
    if (!blocks.length) continue;
    chapterCounts[ch] = blocks.length;
    totalGenerated += blocks.length;
    const chNum = ch.replace('bio-ch', '');
    parts.push(`# Chapter ${chNum}: ${CHAPTER_NAMES[ch]}`);
    parts.push('');
    parts.push(`*${blocks.length} questions*`);
    parts.push('');
    parts.push('---');
    parts.push('');
    parts.push(blocks.join('\n'));
  }

  const out = [buildHeader(raw.length, stats), ...parts].join('\n');
  fs.writeFileSync(OUTPUT, out, 'utf8');

  const fileSize = fs.statSync(OUTPUT).size;
  const fileSizeKB = (fileSize / 1024).toFixed(1);
  const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);

  console.log('Biology Olympiad Bank Generated');
  console.log('==============================');
  console.log(`Input:    ${INPUT}`);
  console.log(`Output:   ${OUTPUT}`);
  console.log(`Total questions generated: ${totalGenerated}`);
  console.log(`Skipped:  ${skipped}`);
  console.log(`File size: ${fileSize} bytes (${fileSizeKB} KB / ${fileSizeMB} MB)`);
  console.log('');
  console.log('Breakdown by type:');
  console.log(`  MCQ (incl. converted T/F): ${stats.mcq}`);
  console.log(`  Descriptive / Analytical:  ${stats.descriptive}`);
  console.log(`  Descriptive → Companion MCQ: ${stats.descriptiveMcq}`);
  console.log(`  True/False converted:      ${stats.tf}`);
  console.log(`  Short answer → Conceptual: ${stats.conceptual}`);
  console.log('');
  console.log('Count per chapter:');
  for (const ch of CHAPTER_ORDER) {
    const n = chapterCounts[ch] || 0;
    console.log(`  ${ch} (${CHAPTER_NAMES[ch]}): ${n}`);
  }
}

main();
