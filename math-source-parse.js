// Turns one chapter of the raw OCR markdown (maths.pdf_by_PaddleOCR) into an ordered list of study sections:
// theory sections, "Example n" + solution pairs, exercises. Figures are replaced by their local crops.
const fs = require('fs');

function tableToMd(html) {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(r =>
    [...r[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c => c[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim()));
  if (!rows.length) return '';
  const w = Math.max(...rows.map(r => r.length));
  const pad = r => r.concat(Array(w - r.length).fill(''));
  const lines = rows.map(r => '| ' + pad(r).join(' | ') + ' |');
  lines.splice(1, 0, '|' + ' --- |'.repeat(w));
  return '\n\n' + lines.join('\n') + '\n\n';
}

const FOOTER = /^\s*(\d+\s*)?([A-Za-z]{0,6}\s*)?(Understanding\s+)?(ICSE\s+)?Mathematics\s*[-–—]?\s*(VIII|VII|VI|IX|X)?\s*\d*\s*$/i;

/** OCR sometimes degenerates into 51, 52, 53, … for hundreds of numbers; keep the real list, drop the counting run. */
function trimCountingRuns(s) {
  return s.replace(/(?:\d{1,4}\s*,\s*){25,}\d{1,4}/g, m => {
    const n = m.split(/\s*,\s*/);
    for (let i = 0; i + 8 < n.length; i++) {
      let ok = true;
      for (let j = 0; j < 8 && ok; j++) ok = +n[i + j + 1] === +n[i + j] + 1;
      if (ok) return n.slice(0, i + 1).join(', ');
    }
    return m;
  });
}

function parseChapter(file, figByKey) {
  let s = trimCountingRuns(fs.readFileSync(file, 'utf8'));
  s = s.replace(/<table[\s\S]*?<\/table>/gi, tableToMd);
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*>/gi, (m, u) => {
    const f = figByKey[u.split('?')[0]];
    return f ? `\n\n![Figure](${f})\n\n` : '';
  });
  s = s.replace(/<\/?(div|a|span|br)[^>]*>/gi, '\n');
  const blocks = s.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
    .filter(b => !/^# Chapter \d+ Source/.test(b) && !FOOTER.test(b) && !/^\d{1,3}$/.test(b) && !/^(INTRO|sus)$/i.test(b));

  const secs = [];
  let cur = null;
  const open = (kind, title) => { cur = { kind, title, blocks: [] }; secs.push(cur); };
  const seen = new Set();
  const norm = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '');
  open('theory', 'Introduction');
  for (let b of blocks) {
    const h = b.match(/^(#{1,6})\s+(.*)$/s);
    let text = h ? h[2].trim() : b;
    // exact OCR repeats of a longish block
    const k = norm(text);
    if (k.length > 45 && seen.has(k)) continue;
    if (k.length > 45) seen.add(k);
    if (/^Example\s*\d*\s*[.:]/i.test(text)) { open('example', text.replace(/^Example\s*(\d*)\s*[.:]\s*/i, m => '').slice(0, 70)); cur.num = (text.match(/^Example\s*(\d+)/i) || [])[1]; cur.blocks.push('**Example' + (cur.num ? ' ' + cur.num : '') + '.** ' + text.replace(/^Example\s*\d*\s*[.:]\s*/i, '')); continue; }
    if (/^Exercise\s*[\d.]*\s*$/i.test(text) || /^Exercise\s+\d+(\.\d+)?\b/i.test(text) && text.length < 40) { open('exercise', text.replace(/^\w/, c => c.toUpperCase())); continue; }
    const minor = /^(remarks?|notes?|steps?|result|materials required|caution|hint|observation|thus|property|properties|definition)$/i.test(text.replace(/[:.]$/, ''));
    const level = h ? h[1].length : (/^[A-Z][A-Z .,'’&-]{3,48}$/.test(text) && !/[$\\]/.test(text) && text.split(' ').length <= 6 ? 3 : 9);
    if (level <= 6 && !minor && !/^[\d(]/.test(text) && text.length < 90 && text.length >= 4 && !/^Solution/i.test(text) && !/^[a-z]/.test(text)) {
      const exLike = /^(MCQ|STATEMENT|OBJECTIVE|MENTAL|MULTIPLE CHOICE|CHAPTER TEST|Chapter Test|REVISION|Check Your Progress|ASSERTION)/i.test(text);
      open(exLike ? 'practice' : (/^SUMMARY/i.test(text) ? 'summary' : 'theory'), text);
      continue;
    }
    cur.blocks.push(h ? '**' + text.replace(/\*+/g, '') + '**' : text);
  }
  const size = x => x.blocks.join('').replace(/[\s$\\]/g, '').length;
  const merged = [];
  secs.forEach(x => {
    const prev = merged[merged.length - 1];
    if (prev && x.kind === 'theory' && prev.kind === 'theory' && size(x) < 140) { prev.blocks.push('**' + x.title.replace(/\*+/g, '') + '**', ...x.blocks); return; }
    merged.push(x);
  });
  return merged.filter(x => size(x) > 8);
}
module.exports = { parseChapter };
