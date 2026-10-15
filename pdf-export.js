// ============================================================
// PDF export — one print-ready, full-colour book per subject (or one chapter).
// Builds a standalone HTML document from the app's own data and opens the browser's
// print dialog (Save as PDF). Each fact appears once: notes carry the full text, the left
// panel only holds what the notes don't already say. Answers sit inline under each question.
// ============================================================
const PDF_COLORS = { physics: '#2563eb', biology: '#0d9488', chemistry: '#16a34a', geography: '#ea580c', history: '#b45309', civics: '#7c3aed', math: '#be185d' };
const PDF_OPTS_KEY = 'studyhub_pdf_opts';

function _pdfNorm(s) { return String(s || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/\*\*/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }

function pdfOpen(scope, id) {
  let o = { aside: true, qs: true, mine: true };
  try { o = { ...o, ...JSON.parse(localStorage.getItem(PDF_OPTS_KEY) || '{}') }; } catch (e) {}
  const name = scope === 'subject' ? (appData.subjects.find(s => s.id === id) || {}).name : (appData.topics.find(t => t.id === id) || {}).name;
  const m = document.createElement('div');
  m.id = 'pdf-modal';
  m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  m.innerHTML = `<div style="background:var(--card,#fff);color:var(--text,#111);border-radius:14px;padding:20px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.3)">
    <h3 style="margin:0 0 4px">📄 Export PDF</h3>
    <p style="margin:0 0 12px;opacity:.75">${escHtml(name || '')} — ${scope === 'subject' ? 'whole subject' : 'this chapter'}</p>
    ${scope === 'subject' ? `<details style="margin:0 0 8px"><summary style="cursor:pointer;font-weight:600">📚 Chapters (<span id="pdf-nch"></span>)</summary>
      <div style="margin:6px 0"><a href="#" onclick="document.querySelectorAll('.pdf-ch').forEach(c=>c.checked=true);pdfCount();return false">all</a> · <a href="#" onclick="document.querySelectorAll('.pdf-ch').forEach(c=>c.checked=false);pdfCount();return false">none</a></div>
      <div style="max-height:150px;overflow:auto">${appData.topics.filter(t => t.subjectId === id).map(t => `<label style="display:block;margin:3px 0"><input type="checkbox" class="pdf-ch" value="${t.id}" checked onchange="pdfCount()"> ${escHtml(t.name)}</label>`).join('')}</div></details>` : ''}
    <label style="display:block;margin:6px 0"><input type="checkbox" checked disabled> 📝 Notes (always included)</label>
    <label style="display:block;margin:6px 0"><input type="checkbox" id="pdf-o-aside" ${o.aside ? 'checked' : ''}> 🧭 Left panel: cheat sheet, mind map, timeline, word cards</label>
    <label style="display:block;margin:6px 0"><input type="checkbox" id="pdf-o-qs" ${o.qs ? 'checked' : ''}> ❓ Questions with answers in line</label>
    <label style="display:block;margin:6px 0"><input type="checkbox" id="pdf-o-mine" ${o.mine ? 'checked' : ''}> 🖍 My highlights, notes &amp; sketches</label>
    <div style="display:flex;gap:8px;margin-top:14px;justify-content:flex-end">
      <button class="btn btn-outline" onclick="document.getElementById('pdf-modal').remove()">Cancel</button>
      <button class="btn btn-primary" onclick="pdfGo('${scope}','${id}')">Create PDF</button>
    </div></div>`;
  document.body.appendChild(m);
  pdfCount();
}

function pdfCount() {
  const all = document.querySelectorAll('.pdf-ch'), el = document.getElementById('pdf-nch');
  if (el) el.textContent = [...all].filter(c => c.checked).length + ' of ' + all.length + ' selected';
}

function pdfGo(scope, id) {
  const g = k => !!document.getElementById('pdf-o-' + k).checked;
  const o = { aside: g('aside'), qs: g('qs'), mine: g('mine') };
  try { localStorage.setItem(PDF_OPTS_KEY, JSON.stringify(o)); } catch (e) {}
  const picked = [...document.querySelectorAll('.pdf-ch')];
  if (picked.length) {
    o.chapters = picked.filter(c => c.checked).map(c => c.value);
    if (!o.chapters.length) return showToast('error', 'Pick at least one chapter');
  }
  document.getElementById('pdf-modal').remove();
  const w = window.open('', '_blank'); // must open inside the tap, before the slow build
  if (!w) return showToast('error', 'Allow pop-ups to create the PDF');
  w.document.write('<p style="font:16px system-ui;padding:24px">Building your PDF…</p>');
  setTimeout(() => {
    try {
      const { html, stats } = pdfBuild(scope, id, o);
      w.document.open(); w.document.write(html); w.document.close();
      showToast('success', `📄 ${stats.notes}/${stats.notesAll} notes · ${stats.qs} questions · ${stats.chapters} chapter(s)`);
    } catch (err) {
      console.error('[pdf]', err);
      w.document.body.innerHTML = '<p style="font:16px system-ui;padding:24px">Could not build the PDF: ' + escHtml(String(err.message || err)) + '</p>';
    }
  }, 30);
}

/** Wrap saved highlight text in <mark> inside a detached element (matched ignoring whitespace/case, like applyHighlights). */
function _pdfMark(div, hls) {
  if (!hls || !hls.length) return;
  const tw = document.createTreeWalker(div, NodeFilter.SHOW_TEXT);
  const map = []; let flat = '';
  for (let n; (n = tw.nextNode());) {
    for (let i = 0; i < n.data.length; i++) if (!/\s/.test(n.data[i])) { map.push([n, i]); flat += n.data[i].toLowerCase(); }
  }
  const segs = new Map();
  hls.forEach(h => {
    const key = String(h.t || '').replace(/\s+/g, '').toLowerCase();
    const at = key ? flat.indexOf(key) : -1;
    if (at < 0) return;
    let cur = null;
    for (let i = at; i < at + key.length; i++) {
      const [node, off] = map[i];
      if (cur && cur.node === node) cur.e = off + 1;
      else { cur = { node, s: off, e: off + 1, c: h.c }; (segs.get(node) || segs.set(node, []).get(node)).push(cur); }
    }
  });
  segs.forEach((list, node) => {
    list.sort((a, b) => b.s - a.s);
    let limit = Infinity;
    list.forEach(sg => {
      if (sg.e > limit) return; // overlapping highlight — keep the later one only
      limit = sg.s;
      const mid = node.splitText(sg.s);
      mid.splitText(sg.e - sg.s);
      const mk = document.createElement('mark');
      mk.className = 'hl-' + (sg.c || 'y');
      mid.parentNode.replaceChild(mk, mid);
      mk.appendChild(mid);
    });
  });
}

function _pdfNote(n, num, o) {
  const a = o.mine ? _annot(n.id) : { hl: [], my: '', pn: {} };
  const body = document.createElement('div');
  body.innerHTML = `${fiveWHtml(n.fiveW)}
    <div class="rich">${renderNoteHtml(n.content)}</div>
    ${n.explanation ? `<div class="rich">${renderNoteHtml(n.explanation)}</div>` : ''}
    ${n.teacherTip ? `<div class="tip"><b>💡 Teacher's tip</b> ${fmtText(n.teacherTip)}</div>` : ''}
    ${n.examTip ? `<div class="tip exam"><b>🎯 Exam tip</b> ${fmtText(n.examTip)}</div>` : ''}
    ${n.advanceReading && String(n.advanceReading).trim() ? `<div class="tip adv"><b>📚 Advance reading</b> ${fmtText(n.advanceReading)}</div>` : ''}`;
  _pdfMark(body, a.hl);
  const mine = [];
  Object.values(a.pn || {}).forEach(x => mine.push(`<i>“${escHtml(x.q)}…”</i> ${escHtml(x.t)}`));
  if ((a.my || '').trim()) mine.push(escHtml(a.my.trim()));
  const pg = notePage(n);
  return `<section class="note" id="n-${escHtml(n.id)}">
    <h3><span class="num">${num}</span>${escHtml(n.subtopic || 'Note')}${pg ? `<span class="pg">📖 ${escHtml(pg)}</span>` : ''}</h3>
    ${body.innerHTML}
    ${mine.length ? `<div class="mine"><b>✍️ My note</b>${mine.map(m => `<p>${m}</p>`).join('')}</div>` : ''}
  </section>`;
}

/** Left panel. `noteText` is the normalised notes text, used so nothing the notes already say is repeated. */
function _pdfAside(topicId, noteText) {
  const seen = new Set();
  const fresh = t => {
    const k = _pdfNorm(t);
    if (k.length < 8 || seen.has(k)) return false;
    seen.add(k);
    return !(k.length >= 25 && noteText.includes(k));
  };
  const out = [];
  const cs = chapterCheatsheet(topicId);
  if (cs && cs.topTen && cs.topTen.length) {
    cs.topTen.forEach(t => seen.add(_pdfNorm(t)));
    out.push(`<div class="box top"><h4>⭐ Top ${cs.topTen.length} to remember</h4><ol>${cs.topTen.map(t => `<li>${fmtTextPlain(t)}</li>`).join('')}</ol></div>`);
  }
  const tl = historyTimelineFor(topicId);
  if (tl && tl.length) {
    out.push(`<div class="box tl"><h4>🕰️ Timeline</h4>${[...tl].sort((a, b) => a.sort - b.sort).map(e => `<p><b>${escHtml(e.year)}</b> ${escHtml(e.event)}</p>`).join('')}</div>`);
  }
  if (cs && cs.wordCards && cs.wordCards.length) {
    out.push(`<div class="box wc"><h4>🔤 One word</h4>${cs.wordCards.map(c => `<p><b>${escHtml(c.word)}</b> — ${escHtml(c.meaning)}</p>`).join('')}</div>`);
  }
  if (cs && cs.groups) {
    cs.groups.forEach(g => {
      const items = g.items.filter(it => fresh(it.text));
      if (items.length) out.push(`<div class="box cs"><h4>${escHtml(g.title || '')}</h4><ul>${items.map(it => `<li>${it.term ? `<b>${escHtml(it.term)}</b> ` : ''}${fmtTextPlain(it.text)}</li>`).join('')}</ul></div>`);
    });
  }
  const mm = chapterMindmap(topicId);
  if (mm && mm.maps) {
    mm.maps.forEach(m => {
      const br = (m.branches || []).map(b => {
        const cs2 = (b.concepts || []).filter(c => fresh(c));
        return `<li><b>${escHtml(b.label)}</b>${cs2.length ? `<ul>${cs2.map(c => `<li>${fmtTextPlain(c)}</li>`).join('')}</ul>` : ''}</li>`;
      });
      if (br.length) out.push(`<div class="box mm"><h4>🧠 Mind map${m.title ? ' — ' + escHtml(m.title) : ''}</h4><ul class="tree">${br.join('')}</ul></div>`);
    });
  }
  return out.join('');
}

function _pdfAnswer(q) {
  const L = ['A', 'B', 'C', 'D', 'E', 'F'];
  if (q.type === 'mcq') {
    const opt = (q.options || [])[q.correctOption];
    const ea = _pdfNorm(q.answer), eo = _pdfNorm(opt);
    const echo = !ea || ea.includes(eo) && ea.length <= eo.length + 40 || eo.includes(ea); // explanation just restates the option
    return `<b>✅ ${L[q.correctOption] || ''}.</b> ${renderContentHtml(opt || '')}${echo ? '' : `<div class="expl">${fmtText(q.answer)}</div>`}`;
  }
  if (q.type === 'true_false') return `<b>✅ ${escHtml(tfAnswerDisplay(q))}</b>${q.answer && !/^(true|false)\b/i.test(q.answer) ? `<div class="expl">${fmtText(q.answer)}</div>` : ''}`;
  if (q.type === 'fill_blank') return `<b>✅ ${escHtml(q.blankAnswer || '')}</b>${q.answer && _pdfNorm(q.answer) !== _pdfNorm(q.blankAnswer) ? `<div class="expl">${fmtText(q.answer)}</div>` : ''}`;
  if (q.type === 'match') return `<b>✅</b> ${(q.pairs || []).map(p => `${escHtml(p.left)} → ${escHtml(p.right)}`).join(' · ')}`;
  try { return renderShortAnswerAnswerContent(q); } catch (e) { return `<b>✅</b> ${fmtText(q.answer || '')}`; }
}

function _pdfQuestions(topicId) {
  const seen = new Set();
  const all = [...topicTextQuestions(topicId), ...diagramQuestions(topicId)].filter(q => {
    const k = q.id;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const stems = new Set();
  const list = all.filter(q => { // same stem + same image once only
    const k = _pdfNorm(q.question) + '|' + (q.image || '');
    if (_pdfNorm(q.question).length < 25) return true;
    if (stems.has(k)) return false;
    stems.add(k);
    return true;
  });
  const sections = [['mcq', '🔘 Multiple choice'], ['true_false', '✅ True / False'], ['fill_blank', '✍️ Fill in the blanks'], ['match', '🔗 Match the following'], ['short_answer', '📋 Short & long answers']];
  return { list, sections: sections.map(([t, label]) => [label, list.filter(q => q.type === t)]).filter(([, l]) => l.length) };
}

function _pdfQHtml(q, i) {
  const L = ['A', 'B', 'C', 'D', 'E', 'F'];
  const opts = q.type === 'mcq' && q.options ? `<div class="opts">${q.options.map((op, oi) => `<span><b>${L[oi]}</b> ${renderContentHtml(op)}</span>`).join('')}</div>` : '';
  const match = q.type === 'match' && q.pairs ? `<div class="opts">${q.pairs.map((p, pi) => `<span><b>${String.fromCharCode(97 + pi)})</b> ${escHtml(p.left)}</span>`).join('')}</div>` : '';
  const tips = q.type !== 'short_answer' || !isRichShortAnswer(q)
    ? `${q.teacherTip ? `<div class="expl">💡 ${fmtText(q.teacherTip)}</div>` : ''}${q.examTip ? `<div class="expl">🎯 ${fmtText(q.examTip)}</div>` : ''}` : '';
  return `<div class="q"><div class="qt"><span class="qn">${i}</span>${renderContentHtml(q.question).replace(/^\s*\d+[.)]\s*/, '')}</div>
    ${q.image ? `<img src="${escHtml(q.image)}" alt="">` : ''}${opts}${match}
    <div class="ans">${_pdfAnswer(q)}${tips}</div></div>`;
}

function pdfBuild(scope, id, o) {
  const subject = scope === 'subject'
    ? appData.subjects.find(s => s.id === id)
    : appData.subjects.find(s => s.id === (appData.topics.find(t => t.id === id) || {}).subjectId);
  const topics = scope === 'subject' ? appData.topics.filter(t => t.subjectId === id && (!o.chapters || o.chapters.includes(t.id))) : [appData.topics.find(t => t.id === id)];
  const color = PDF_COLORS[subject.id] || '#4f46e5';
  const stats = { notes: 0, notesAll: 0, qs: 0, chapters: topics.length };
  const chapters = topics.map((t, ci) => {
    const notes = sortedTopicNotes(t.id);
    stats.notesAll += notes.length; stats.notes += notes.length;
    const noteText = notes.map(n => _pdfNorm((n.content || '') + ' ' + (n.explanation || ''))).join(' ');
    const aside = o.aside ? _pdfAside(t.id, noteText) : '';
    const main = notes.map((n, i) => _pdfNote(n, i + 1, o)).join('') || '<p class="muted">No notes in this chapter.</p>';
    let qhtml = '';
    if (o.qs) {
      const { list, sections } = _pdfQuestions(t.id);
      stats.qs += list.length;
      let k = 0;
      qhtml = sections.map(([label, l]) => `<h3 class="qh">${label} <span>${l.length}</span></h3><div class="qgrid">${l.map(q => _pdfQHtml(q, ++k)).join('')}</div>`).join('');
      if (qhtml) qhtml = `<h2 class="qsec">❓ Practice — questions &amp; answers</h2>${qhtml}`;
    }
    let sk = '';
    if (o.mine && typeof wbLive === 'function') {
      sk = wbLive(t.id).map(b => { const png = wbPng(b); return png ? `<figure><img src="${png}" alt=""><figcaption>✏️ ${escHtml(b.name)}</figcaption></figure>` : ''; }).join('');
      if (sk) sk = `<h2 class="qsec">✏️ My sketches</h2>${sk}`;
    }
    return `<article class="chap" id="c-${escHtml(t.id)}">
      <header class="chead"><span class="cno">${ci + 1}</span><div><small>${escHtml(subject.name)} · Class 8</small><h1>${t.icon || ''} ${escHtml(t.name)}</h1></div></header>
      <div class="cols${aside ? '' : ' one'}">${aside ? `<aside>${aside}</aside>` : ''}<main>${main}</main></div>
      ${qhtml}${sk}</article>`;
  });
  let back = '';
  if (scope === 'subject' && subject.id === 'chemistry' && typeof CHEM_BOOK_COMPOUNDS !== 'undefined') {
    const els = Object.entries(CHEM_BOOK_ELEMENTS).map(([s, v]) => `<tr><td><b>${escHtml(s)}</b></td><td>${escHtml(v[0])}</td><td>${escHtml(v[1])}</td></tr>`).join('');
    const cps = CHEM_BOOK_COMPOUNDS.map(c => `<tr><td><b>${escHtml(c[0])}</b></td><td>${escHtml(c[1])}</td><td>${escHtml(c[3])}</td></tr>`).join('');
    back = `<article class="chap"><header class="chead"><span class="cno">★</span><div><small>Chemistry · Class 8</small><h1>🧪 Chemical Index</h1></div></header>
      <h2 class="qsec">Elements (symbol · valency · what the book says)</h2><table class="idx">${els}</table>
      <h2 class="qsec">Compounds</h2><table class="idx">${cps}</table></article>`;
  }
  const toc = topics.map((t, i) => `<li><a href="#c-${escHtml(t.id)}"><span>${i + 1}</span>${t.icon || ''} ${escHtml(t.name)}</a></li>`).join('');
  const cover = scope === 'subject' ? `<section class="cover"><div class="band"><div class="big">${subject.icon || ''}</div><h1>${escHtml(subject.name)}</h1><p>Class 8 · Complete study book</p></div>
    <p class="meta">${stats.chapters} chapters · ${stats.notes} notes · ${stats.qs} questions with answers · ${new Date().toLocaleDateString()}</p>
    <h2>Contents</h2><ol class="toc">${toc}</ol>
    <p class="how">How to read: the <b>left panel</b> gives each chapter at a glance (top points, timeline, words, mind map) — things the notes don't already say. The <b>right column</b> is the full notes. Practice questions come at the chapter end with the answer in line.</p></section>` : '';
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${escHtml(scope === 'subject' ? subject.name : topics[0].name)} — StudyHub</title>
    <base href="${new URL('.', location.href).href}"><link rel="stylesheet" href="vendor/katex/katex.min.css"><style>${_pdfCss(color)}</style></head><body>
    <div class="bar noprint"><button onclick="window.print()">🖨 Save as PDF / Print</button><span>Choose “Save as PDF”, paper A4, and turn on “Background graphics” if it is not already on.</span></div>
    ${cover}${chapters.join('')}${back}
    <script>window.addEventListener('load',function(){setTimeout(function(){window.print()},600)})<\/script></body></html>`;
  return { html, stats };
}

function _pdfCss(c) {
  return `
  @page{size:A4;margin:13mm 11mm 15mm;@bottom-center{content:counter(page);font:8pt system-ui;color:#888}}
  *{box-sizing:border-box}
  html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  :root{--c:${c};--soft:color-mix(in srgb,${c} 9%,#fff);--mid:color-mix(in srgb,${c} 22%,#fff)}
  body{font:10pt/1.45 system-ui,-apple-system,"Segoe UI",sans-serif;color:#1f2933;margin:0}
  .bar{position:sticky;top:0;background:#111;color:#fff;padding:8px 14px;display:flex;gap:12px;align-items:center;font-size:12px;z-index:5}
  .bar button{padding:7px 14px;border:0;border-radius:8px;background:var(--c);color:#fff;font-weight:600;cursor:pointer}
  @media print{.noprint{display:none}}
  .cover{break-after:page}
  .cover .band{background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 55%,#000));color:#fff;padding:34mm 14mm 20mm;border-radius:0 0 10mm 10mm}
  .cover .big{font-size:46pt}.cover h1{font-size:34pt;margin:4mm 0 2mm}.cover .band p{font-size:13pt;opacity:.9;margin:0}
  .cover .meta{color:#555;margin:6mm 0}.cover h2{color:var(--c);border-bottom:2px solid var(--mid);padding-bottom:2mm}
  .toc{columns:2;gap:10mm;padding:0;list-style:none}.toc li{margin:0 0 2.2mm;break-inside:avoid}.toc a{color:#1f2933;text-decoration:none}
  .toc span{display:inline-block;width:6mm;height:6mm;line-height:6mm;text-align:center;border-radius:50%;background:var(--c);color:#fff;font-size:8pt;margin-right:2mm}
  .how{background:var(--soft);border-left:3px solid var(--c);padding:3mm 4mm;border-radius:2mm;margin-top:8mm}
  .chap{break-before:page}
  .chead{display:flex;gap:4mm;align-items:center;background:var(--c);color:#fff;padding:5mm 6mm;border-radius:3mm;margin-bottom:4mm}
  .chead h1{margin:0;font-size:18pt}.chead small{opacity:.85;text-transform:uppercase;letter-spacing:.06em;font-size:7.5pt}
  .cno{width:11mm;height:11mm;border-radius:50%;background:#fff;color:var(--c);font-weight:800;font-size:14pt;display:flex;align-items:center;justify-content:center;flex:none}
  .cols{display:grid;grid-template-columns:60mm 1fr;gap:5mm;align-items:start}.cols.one{grid-template-columns:1fr}
  aside{background:var(--soft);border-radius:3mm;padding:3mm;font-size:8.4pt;line-height:1.38}
  aside .box{margin-bottom:3.5mm;break-inside:avoid-page}aside .box h4{margin:0 0 1.5mm;color:var(--c);font-size:9pt;border-bottom:1.5px solid var(--mid);padding-bottom:1mm}
  aside ol,aside ul{margin:0;padding-left:4mm}aside li{margin-bottom:1mm}aside p{margin:0 0 1mm}
  aside .top{background:#fff;border:1.5px solid var(--c);border-radius:2mm;padding:2.5mm}
  aside .tl p b{color:var(--c)}aside .tree>li>b{color:#111}
  main .note{margin-bottom:4mm}
  main h3{margin:0 0 1.5mm;font-size:11.5pt;color:var(--c);border-bottom:1.5px solid var(--mid);padding-bottom:1mm;break-after:avoid}
  .num{display:inline-block;min-width:5.5mm;height:5.5mm;line-height:5.5mm;text-align:center;border-radius:1.5mm;background:var(--c);color:#fff;font-size:8pt;margin-right:2mm;vertical-align:1px}
  .pg{float:right;font:600 7.5pt system-ui;background:var(--soft);color:var(--c);padding:.6mm 2mm;border-radius:2mm}
  .rich p{margin:0 0 1.6mm}.rich strong,.rich b{color:#111}.rich ul,.rich ol{margin:0 0 2mm;padding-left:5mm}
  table{border-collapse:collapse;width:100%;margin:1.5mm 0 2.5mm;font-size:9pt;break-inside:avoid}
  th{background:var(--c);color:#fff;text-align:left}th,td{border:1px solid var(--mid);padding:1.2mm 2mm;vertical-align:top}tr:nth-child(even) td{background:var(--soft)}
  .five-w{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5mm;margin-bottom:2mm}.five-w div{background:var(--soft);border-radius:2mm;padding:1.5mm 2mm;font-size:8.5pt}.five-w b{display:block;color:var(--c);font-size:7.5pt}
  .tip{background:#ecfdf3;border:1px solid #a7e3c0;border-left:3px solid #16a34a;border-radius:2mm;padding:1.8mm 2.5mm;margin:1.5mm 0;font-size:9pt;break-inside:avoid}
  .tip.exam{background:#fff7ed;border-color:#fdc98f;border-left-color:#ea580c}.tip.adv{background:#eff6ff;border-color:#b6d0f7;border-left-color:#2563eb}
  .tip b{margin-right:1.5mm}
  .mine{background:#fffbe6;border:1px dashed #d4a72c;border-radius:2mm;padding:1.8mm 2.5mm;margin:1.5mm 0;font-size:9pt;break-inside:avoid}.mine p{margin:1mm 0 0}
  mark{border-radius:1mm;padding:0 .5mm}.hl-y{background:#fde68a}.hl-g{background:#a7f3d0}.hl-r{background:#fecaca}
  .qsec{margin:7mm 0 3mm;font-size:14pt;color:#fff;background:var(--c);padding:2mm 4mm;border-radius:2.5mm;break-after:avoid}
  .qh{font-size:11pt;color:var(--c);margin:4mm 0 2mm;border-bottom:1.5px solid var(--mid);break-after:avoid}.qh span{font:600 8pt system-ui;background:var(--soft);padding:.5mm 2mm;border-radius:2mm}
  .qgrid{columns:2;column-gap:5mm}
  .q{break-inside:avoid;border:1px solid var(--mid);border-radius:2.5mm;padding:2mm 2.5mm;margin:0 0 2.5mm;font-size:9pt}
  .qt{font-weight:600}.qn{display:inline-block;min-width:5mm;margin-right:1.5mm;color:var(--c);font-weight:800}
  .opts{display:grid;grid-template-columns:1fr 1fr;gap:.8mm 3mm;margin:1.2mm 0;font-size:8.8pt}.opts b{color:var(--c)}
  .q img{max-width:100%;max-height:55mm;display:block;margin:1.5mm auto;break-inside:avoid}
  .ans{background:#ecfdf3;border-left:3px solid #16a34a;border-radius:1.5mm;padding:1.4mm 2.2mm;margin-top:1.5mm;font-size:8.8pt}
  .ans .expl{margin-top:1mm;color:#374151}
  .qa-answer-label{font:700 7.5pt system-ui;text-transform:uppercase;color:#15803d}.qa-answer-box p{margin:0 0 1mm}
  .qa-topper-note{background:#fff7ed;border-left:3px solid #ea580c;padding:1.2mm 2mm;margin-top:1.2mm;border-radius:1.5mm}
  .qa-hl-kw{background:#fde68a;border-radius:1mm;padding:0 .5mm}
  figure{margin:0 0 4mm;break-inside:avoid}figure img{max-width:100%;border:1px solid var(--mid);border-radius:2mm}figcaption{font-size:8.5pt;color:#555}
  .idx td{font-size:8.6pt}.idx td:first-child{width:18mm}.muted{color:#888}
  .note-fig{margin:2mm 0;text-align:center;break-inside:avoid}.note-fig img,.q-fig{max-width:62%;max-height:60mm;border:1px solid var(--mid);border-radius:2mm;padding:1mm;display:block;margin:1.5mm auto}
  img{max-width:100%}`;
}
