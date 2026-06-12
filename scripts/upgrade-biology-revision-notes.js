#!/usr/bin/env node
/**
 * Upgrade biology revision notes to uniform physics-style format.
 * Preserves all existing facts; adds executive summary, charts, Cornell cues, MCQ facts.
 *
 * Run: node scripts/upgrade-biology-revision-notes.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'data', 'biology-revision-notes');

const COMPARE_CHARTS = {
  'bio-rev-ch1-01': {
    title: 'Diffusion vs Osmosis vs Active transport',
    headers: ['Process', 'What moves', 'Energy', 'Direction'],
    rows: [
      ['Diffusion', 'Any molecules', 'None (passive)', 'Down concentration gradient'],
      ['Osmosis', 'Water only', 'None (passive)', 'Through semi-permeable membrane'],
      ['Active transport', 'Mineral ions', 'ATP required', 'Against concentration gradient']
    ]
  },
  'bio-rev-ch1-04': {
    title: 'Xylem vs Phloem',
    headers: ['Feature', 'Xylem', 'Phloem'],
    rows: [
      ['Transport', 'Water + mineral salts', 'Organic food (sucrose)'],
      ['Direction', 'Upward (root → leaf)', 'Bidirectional (source → sink)'],
      ['Main cells', 'Tracheids + vessels (dead)', 'Sieve tubes + companion cells (living)'],
      ['Experiment proof', 'Eosin/safranin red stain', 'Girdling — swelling above ring']
    ]
  },
  'bio-rev-ch1-06': {
    title: 'Evaporation vs Transpiration vs Guttation',
    headers: ['Process', 'Where', 'Form lost', 'Driver'],
    rows: [
      ['Evaporation', 'Any liquid surface', 'Water vapour', 'Temperature, humidity, wind'],
      ['Transpiration', 'Leaf stomata (mainly)', 'Water vapour', 'Transpiration pull in xylem'],
      ['Guttation', 'Hydathodes at leaf margins', 'Liquid droplets', 'Root pressure (humid nights)']
    ]
  },
  'bio-rev-ch2-01': {
    title: 'Self-pollination vs Cross-pollination',
    headers: ['Feature', 'Self-pollination', 'Cross-pollination'],
    rows: [
      ['Pollen transfer', 'Same flower / same plant', 'Different plant of same species'],
      ['Variation', 'Less genetic variation', 'More genetic variation'],
      ['Agents', 'Not needed (anthers touch stigma)', 'Wind, water, insects, birds'],
      ['Examples', 'Pea, wheat (often)', 'Maize, papaya, mustard']
    ]
  },
  'bio-rev-ch2-09': {
    title: 'Sexual vs Asexual reproduction in plants',
    headers: ['Feature', 'Sexual', 'Asexual'],
    rows: [
      ['Gametes', 'Two fuse (fertilisation)', 'Not involved'],
      ['Genetic variation', 'Yes — new combinations', 'No — clone of parent'],
      ['Speed', 'Slower (flower → seed)', 'Faster (runner, bud, graft)'],
      ['Examples', 'Maize, pea, mango', 'Potato, Bryophyllum, yeast']
    ]
  },
  'bio-rev-ch3-04': {
    title: 'Arteries vs Veins vs Capillaries',
    headers: ['Vessel', 'Wall', 'Valves', 'Blood direction'],
    rows: [
      ['Artery', 'Thick, elastic', 'No (except near heart)', 'Away from heart'],
      ['Vein', 'Thinner', 'Yes — prevent backflow', 'Towards heart'],
      ['Capillary', 'One cell thick', 'No', 'Exchange in tissues']
    ]
  },
  'bio-rev-ch4-04': {
    title: 'Food chain vs Food web',
    headers: ['Feature', 'Food chain', 'Food web'],
    rows: [
      ['Structure', 'Single linear path', 'Many interconnected chains'],
      ['Stability', 'Fragile — one link breaks', 'More stable — alternate pathways'],
      ['Realism', 'Simplified model', 'Closer to nature']
    ]
  },
  'bio-rev-ch5-01': {
    title: 'Endocrine vs Exocrine glands',
    headers: ['Feature', 'Endocrine', 'Exocrine'],
    rows: [
      ['Duct', 'No duct — ductless', 'Has duct'],
      ['Secretion', 'Hormones into blood', 'Enzymes/mucus through duct'],
      ['Examples', 'Pituitary, thyroid, islets of Langerhans', 'Salivary, sweat, gastric']
    ]
  },
  'bio-rev-ch6-03': {
    title: 'Artery vs Vein vs Capillary',
    headers: ['Vessel', 'Wall', 'Valves', 'Blood direction'],
    rows: [
      ['Artery', 'Thick, elastic', 'No (except aorta/pulmonary base)', 'Away from heart'],
      ['Vein', 'Thinner', 'Yes — prevent backflow', 'Towards heart'],
      ['Capillary', 'One cell thick', 'No', 'Exchange in tissues']
    ]
  },
  'bio-rev-ch7-07': {
    title: 'Voluntary vs Involuntary actions',
    headers: ['Feature', 'Voluntary', 'Involuntary'],
    rows: [
      ['Control', 'Conscious (cerebrum)', 'Automatic (medulla/cerebellum/spinal cord)'],
      ['Examples', 'Writing, speaking, walking', 'Heartbeat, digestion, reflexes'],
      ['Can you stop it?', 'Yes', 'No (normally)']
    ]
  },
  'bio-rev-ch8-01': {
    title: 'Communicable vs Non-communicable diseases',
    headers: ['Feature', 'Communicable', 'Non-communicable'],
    rows: [
      ['Spread', 'Yes — person to person', 'No — not contagious'],
      ['Cause', 'Pathogens (bacteria, virus, etc.)', 'Lifestyle, genetics, diet'],
      ['Examples', 'TB, malaria, common cold', 'Diabetes, cancer, hypertension']
    ]
  },
  'bio-rev-ch8-05': {
    title: 'Active vs Passive immunity',
    headers: ['Feature', 'Active', 'Passive'],
    rows: [
      ['Antibody source', 'Own body produces them', 'Borrowed (mother / antiserum)'],
      ['Onset', 'Slow (days to weeks)', 'Immediate'],
      ['Duration', 'Long-lasting / memory', 'Temporary'],
      ['Examples', 'Vaccination, after infection', 'Placental antibodies, antivenom']
    ]
  },
  'bio-rev-ch9-02': {
    title: 'Manure vs Fertilizer',
    headers: ['Feature', 'Manure', 'Fertilizer'],
    rows: [
      ['Source', 'Organic waste (cow dung, compost)', 'Chemical factories (NPK)'],
      ['Nutrients', 'Less concentrated, slow release', 'High concentration, fast action'],
      ['Soil health', 'Improves texture & microbes', 'No humus; excess harms soil']
    ]
  }
};

function readJson(p) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
}

function stripBold(s) {
  return String(s).replace(/\*\*/g, '').trim();
}

function normKey(s) {
  return stripBold(s).toLowerCase().replace(/\s+/g, ' ').slice(0, 72);
}

function firstSentence(text) {
  if (!text) return '';
  const clean = String(text).replace(/\n+/g, ' ').trim();
  const m = clean.match(/^[^.!?]+[.!?]/);
  return m ? m[0].trim() : clean.slice(0, 160);
}

function parseContent(content) {
  const lines = String(content || '').split('\n');
  const intro = [];
  const mustKnow = [];
  const body = [];
  let mode = 'intro';

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^\*\*Must know\*\*$/i.test(line)) {
      mode = 'mustKnow';
      continue;
    }
    if (/^[•\-]\s/.test(line)) {
      const bullet = line.replace(/^[•\-]\s+/, '');
      if (mode === 'mustKnow') mustKnow.push(bullet);
      else body.push({ type: 'bullet', text: bullet });
      continue;
    }
    if (mode === 'mustKnow') {
      mustKnow.push(line);
      continue;
    }
    const inline = line.match(/^\*\*([^*]+)\*\*\s*[—–-]\s*(.+)/);
    if (inline) {
      body.push({ type: 'heading', title: inline[1].trim(), text: inline[2].trim() });
      continue;
    }
    const heading = line.match(/^\*\*([^*]+)\*\*\s*$/);
    if (heading && line.length < 90) {
      body.push({ type: 'section', title: heading[1].trim() });
      continue;
    }
    if (mode === 'intro' && !line.startsWith('**')) {
      intro.push(line);
    } else if (mode === 'intro' && line.startsWith('**') && line.endsWith('**')) {
      body.push({ type: 'section', title: stripBold(line) });
    } else {
      body.push({ type: 'para', text: line });
    }
  }

  return { intro, mustKnow, body };
}

function buildExecutiveSummary(note, intro, mustKnow, body) {
  const introText = intro.join(' ').replace(/\*\*/g, '').trim();
  if (introText.length > 40) {
    const sentences = introText.match(/[^.!?]+[.!?]+/g) || [introText];
    return { text: sentences.slice(0, 2).join(' ').trim(), usedIntro: true };
  }
  const headingDef = body.find(b => b.type === 'heading' && b.text.length > 40);
  if (headingDef) {
    const t = `${headingDef.title}: ${stripBold(headingDef.text).slice(0, 160)}`.replace(/\.\.+$/, '.');
    return { text: t.endsWith('.') ? t : t + '.', usedIntro: false };
  }
  if (mustKnow.length >= 2) {
    return {
      text: `${stripBold(mustKnow[0]).slice(0, 120)}. ${stripBold(mustKnow[1]).slice(0, 100)}.`.replace(/\.\./g, '.'),
      usedIntro: false
    };
  }
  const title = stripBold(note.subtopic.replace(/^\d+\.\s*/, ''));
  return { text: `Revision focus: ${title} — key facts, definitions and exam traps for ICSE Class 8 Biology.`, usedIntro: false };
}

function renderBody(body, mustKnowKeys) {
  let out = '';
  for (const item of body) {
    if (item.type === 'section') {
      if (/^must know$/i.test(item.title)) continue;
      out += `\n\n**${item.title}**`;
      continue;
    }
    if (item.type === 'heading') {
      if (mustKnowKeys.has(normKey(item.text))) continue;
      out += `\n\n**${item.title}**\n• ${item.text}`;
      continue;
    }
    if (item.type === 'bullet') {
      if (mustKnowKeys.has(normKey(item.text))) continue;
      out += `\n• ${item.text}`;
      continue;
    }
    if (item.type === 'para') {
      if (mustKnowKeys.has(normKey(item.text))) continue;
      out += `\n\n${item.text}`;
    }
  }
  return out.trim();
}

function parseExplanation(explanation) {
  const defs = [];
  const traps = [];
  if (!explanation) return { defs, traps };

  const blocks = explanation.split(/\n\n+/);
  for (const block of blocks) {
    const head = block.match(/^\*\*([^*]+)\*\*/);
    if (!head) continue;
    const label = head[1].toLowerCase();
    const rest = block.replace(/^\*\*[^*]+\*\*\s*/, '');
    const lines = rest.split('\n').map(l => l.trim()).filter(l => l.startsWith('•') || l.startsWith('-'));
    const items = lines.map(l => l.replace(/^[•\-]\s+/, ''));
    if (label.includes('definition')) defs.push(...items);
    else if (label.includes('trap') || label.includes('compare')) traps.push(...items);
  }
  return { defs, traps };
}

function renderChart(chart) {
  let md = `**📊 Chart — ${chart.title}**\n`;
  md += `| ${chart.headers.join(' | ')} |\n`;
  md += `| ${chart.headers.map(() => '---').join(' | ')} |\n`;
  for (const row of chart.rows) {
    md += `| ${row.join(' | ')} |\n`;
  }
  return md;
}

function buildCornellCues(note, mustKnow, traps) {
  const cues = [];
  const title = stripBold(note.subtopic.replace(/^\d+\.\s*/, ''));
  cues.push(`What is the main idea of "${title}"?`);
  for (const b of mustKnow.slice(0, 3)) {
    const plain = stripBold(b);
    if (plain.includes('=') || plain.includes('—')) {
      cues.push(`Explain: ${plain.split(/[=—]/)[0].trim()}?`);
    } else if (plain.length > 15) {
      cues.push(`State: ${plain.slice(0, 75)}?`);
    }
  }
  for (const t of traps.slice(0, 2)) {
    if (/false|≠|not /i.test(t)) {
      cues.push(`True or false trap: ${stripBold(t).slice(0, 85)}?`);
    }
  }
  if (note.examTip) cues.push(`Exam focus: ${stripBold(note.examTip).slice(0, 90)}?`);
  return [...new Set(cues)].slice(0, 6);
}

function isUsefulMcqFact(fact) {
  if (!fact) return false;
  const plain = stripBold(fact).toLowerCase();
  const junk = [
    'statement(s) are correct',
    'correct combination',
    'both a and r',
    'a is false and r',
    'a is true and r',
    'per chapter',
    'according to the chapter',
    'evaluated strictly',
    'match based on relationships',
    'mapping based on',
    'correct: **p and r**',
    'correct: **both a and r**',
    'mcq key: **a is false',
    'mcq key: **a is true',
    'mcq key: **both',
    'incorrect:'
  ];
  if (junk.some(j => plain.includes(j))) return false;
  if (/^•\s*(1\.|2\.|3\.|\d+\.)$/.test(fact.trim())) return false;
  if (plain.replace(/^•\s*/, '').length < 28) return false;
  return true;
}

function extractMcqFact(q) {
  const ans = q.answer || '';
  if (q.type === 'mcq' && Array.isArray(q.options) && q.correctOption >= 0) {
    const why = firstSentence(ans);
    if (why.length > 30 && !/statement\(s\)/i.test(why)) return `• ${why}`;
    const opt = q.options[q.correctOption];
    if (opt && opt.length > 8) return `• MCQ key: **${opt}** — ${why || 'see explanation'}`;
    return null;
  }
  if (q.type === 'true_false') {
    const qShort = firstSentence(q.question).slice(0, 90);
    const ansShort = firstSentence(ans);
    if (ansShort.length < 15) return null;
    return `• T/F: "${qShort}" → **${q.correctAnswer}** — ${ansShort}`;
  }
  if (q.type === 'fill_blank') {
    if (!q.blankAnswer || String(q.blankAnswer).length < 2) return null;
    return `• Fill: **${q.blankAnswer}** — ${firstSentence(ans)}`;
  }
  if (q.type === 'short_answer' || q.type === 'match') {
    const s = firstSentence(ans);
    if (s.length < 25 || /statement\(s\)/i.test(s)) return null;
    return `• ${s}`;
  }
  return null;
}

function noteKeywords(note) {
  const base = stripBold(note.subtopic + ' ' + note.content + ' ' + (note.explanation || ''))
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ');
  const words = base.split(/\s+/).filter(w => w.length > 4);
  const extra = {
    'bio-rev-ch1-07': ['transpiration', 'stomata', 'humidity', 'wilting'],
    'bio-rev-ch1-10': ['eosin', 'girdling', 'polythene', 'experiment'],
    'bio-rev-ch2-05': ['pollination', 'self', 'cross', 'wind', 'insect'],
    'bio-rev-ch4-06': ['trophic', 'pyramid', 'energy', 'ten'],
    'bio-rev-ch8-04': ['anopheles', 'mosquito', 'malaria', 'vector'],
    'bio-rev-ch9-07': ['kurien', 'swaminathan', 'revolution', 'milk']
  };
  return [...new Set([...words, ...(extra[note.id] || [])])];
}

function scoreQuestion(q, keywords) {
  const text = `${q.question} ${q.answer || ''} ${q.subtopic || ''}`.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (text.includes(kw)) score += kw.length > 6 ? 3 : 2;
  }
  if (q.qualityLevel === 'Olympiad') score += 1;
  if (q.type === 'mcq' || q.type === 'true_false') score += 1;
  return score;
}

function uniqueFacts(facts, limit = 8) {
  const seen = new Set();
  const out = [];
  for (const f of facts) {
    const key = normKey(f);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= limit) break;
  }
  return out;
}

function relatedNotes(note, allInChapter) {
  const idx = allInChapter.findIndex(n => n.id === note.id);
  const links = [];
  if (idx > 0) links.push(`${allInChapter[idx - 1].id} — previous topic`);
  if (idx >= 0 && idx < allInChapter.length - 1) links.push(`${allInChapter[idx + 1].id} — next topic`);
  return links.slice(0, 2);
}

function upgradeNote(note, questions, allInChapter) {
  const { intro, mustKnow, body } = parseContent(note.content);
  const { defs, traps } = parseExplanation(note.explanation);
  const mustKnowKeys = new Set(mustKnow.map(normKey));

  const { text: executive, usedIntro } = buildExecutiveSummary(note, intro, mustKnow, body);
  let content = `**Executive summary:** ${executive}\n\n**Must know**`;
  for (const b of mustKnow) {
    content += `\n• ${b}`;
  }
  const bodyText = renderBody(body, mustKnowKeys);
  if (bodyText) content += `\n${bodyText}`;

  if (intro.length && !usedIntro) {
    const introBlock = intro.join('\n\n');
    if (!content.includes(introBlock.slice(0, 40))) {
      content = content.replace(`**Must know**`, `${introBlock}\n\n**Must know**`);
    }
  }

  const chart = COMPARE_CHARTS[note.id];
  const cues = buildCornellCues(note, mustKnow, traps);

  let explanation = '';
  if (chart) explanation += renderChart(chart) + '\n\n';

  explanation += `**Cornell cues (self-test):**\n${cues.map(c => `• ${c}`).join('\n')}\n\n`;

  explanation += `**Definitions / Exam traps:**\n`;
  const trapLines = [...defs, ...traps];
  if (trapLines.length) {
    explanation += trapLines.map(t => `• ${t}`).join('\n');
  } else {
    explanation += mustKnow.slice(0, 4).map(b => `• ${stripBold(b)}`).join('\n');
  }

  const keywords = noteKeywords(note);
  const matched = questions
    .filter(q => q.topicId === note.topicId)
    .map(q => ({ q, score: scoreQuestion(q, keywords) }))
    .filter(x => x.score >= 5)
    .sort((a, b) => b.score - a.score)
    .slice(0, 14);

  const linkedQuestionIds = matched.map(x => x.q.id);
  const mcqFacts = uniqueFacts(
    matched.map(x => extractMcqFact(x.q)).filter(isUsefulMcqFact),
    8
  );

  if (mcqFacts.length) {
    explanation += `\n\n**From linked questions (${linkedQuestionIds.length} Qs):**\n${mcqFacts.join('\n')}`;
  }

  const rel = relatedNotes(note, allInChapter);
  if (rel.length) {
    explanation += `\n\n**🔗 Links:** ${rel.join('; ')}`;
  }

  return {
    ...note,
    content: content.trim(),
    explanation: explanation.trim(),
    source: 'revision',
    linkedQuestionIds,
    teacherTip: note.teacherTip || '',
    examTip: note.examTip || ''
  };
}

function main() {
  const allQuestions = readJson('data/biology-audit-selected-v2.json');
  let total = 0;

  for (let ch = 1; ch <= 9; ch++) {
    const file = path.join(INPUT_DIR, `ch${ch}.json`);
    const notes = JSON.parse(fs.readFileSync(file, 'utf8'));
    const upgraded = notes.map(n => upgradeNote(n, allQuestions, notes));
    fs.writeFileSync(file, JSON.stringify(upgraded, null, 2) + '\n', 'utf8');
    total += upgraded.length;
    const withMcq = upgraded.filter(n => n.linkedQuestionIds.length).length;
    const withFacts = upgraded.filter(n => /From linked questions/.test(n.explanation)).length;
    console.log(`ch${ch}.json: ${upgraded.length} notes, ${withMcq} with MCQs, ${withFacts} with MCQ facts`);
  }
  console.log(`Upgraded ${total} biology revision notes`);
}

main();
