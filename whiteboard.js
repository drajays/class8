// ============================================================
// StudyHub — Whiteboard: a resizable side panel for rough notes and sketches.
// Sketches are stored as vectors (tiny, so they sync), per chapter, and go into the
// chapter's "My Clippings" .md as PNG images. Vanilla canvas — works offline, Apple Pencil friendly.
// studyBoards[id] = { id, topicId, name, made, at, items: [...], del? }
//   items: {k:'p'|'l', c, w, p:[x,y,x,y…]}  pen / line   |   {k:'t', c, z, x, y, s}  text
// ============================================================
const WB_W = 1000, WB_H = 700; // logical drawing space; the canvas scales to the panel
const WB_COLORS = ['#111111', '#d92d2d', '#1c64f2', '#0e9f6e', '#e08a00'];
const WB_PEN = [2, 4, 8], WB_TEXT = [22, 32, 48];
let studyBoards = {};
try { studyBoards = JSON.parse(localStorage.getItem('studyhub_boards') || '{}') || {}; } catch (e) { studyBoards = {}; }
const wb = { open: false, id: null, topic: null, tool: 'pen', c: WB_COLORS[0], size: 1, hist: [], cur: null, pen: false };

const _wbNow = () => new Date().toISOString();
const wbTopicId = () => (typeof selectedTopic !== 'undefined' && selectedTopic) || '_';
const wbLive = topic => Object.values(studyBoards).filter(b => !b.del && b.topicId === topic).sort((a, b) => a.made.localeCompare(b.made));
const wbTopics = () => [...new Set(Object.values(studyBoards).filter(b => !b.del && b.items.length).map(b => b.topicId))];
const wbBoard = () => studyBoards[wb.id];

function wbPersist() {
  try { localStorage.setItem('studyhub_boards', JSON.stringify(studyBoards)); } catch (e) {}
}
function wbSave() {
  const b = wbBoard();
  if (b) b.at = _wbNow();
  wbPersist();
  if (typeof markSyncDirty === 'function') markSyncDirty();
}

/** Newest copy of each sketch wins; a later delete (del) beats an older copy. */
function wbMerge(remote) {
  Object.entries(remote || {}).forEach(([id, r]) => {
    const m = studyBoards[id];
    if (!m || (r.at || '') > (m.at || '')) studyBoards[id] = r;
  });
  wbPersist();
  if (wb.open) wbRefresh();
}
function wbReplace(all) { studyBoards = all || {}; wbPersist(); if (wb.open) wbRefresh(); }

// ---------- drawing ----------
function wbDraw(ctx, items, s) {
  ctx.lineCap = ctx.lineJoin = 'round';
  items.forEach(it => {
    ctx.strokeStyle = ctx.fillStyle = it.c;
    if (it.k === 't') {
      ctx.font = `${it.z * s}px system-ui, -apple-system, "Segoe UI", sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(it.s, it.x * s, it.y * s);
      return;
    }
    const p = it.p;
    ctx.lineWidth = it.w * s;
    ctx.beginPath();
    ctx.moveTo(p[0] * s, p[1] * s);
    if (p.length === 2) ctx.lineTo(p[0] * s + 0.01, p[1] * s);
    for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i] * s, p[i + 1] * s);
    ctx.stroke();
  });
}

function wbRedraw() {
  const cv = document.getElementById('wb-cv');
  if (!cv) return;
  const r = cv.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  if (cv.width !== Math.round(r.width * dpr)) { cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.width * WB_H / WB_W * dpr); }
  const ctx = cv.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, cv.width, cv.height);
  const b = wbBoard();
  const items = b ? b.items.concat(wb.cur ? [wb.cur] : []) : (wb.cur ? [wb.cur] : []);
  wbDraw(ctx, items, cv.width / WB_W);
}

function _wbBounds(items) {
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  items.forEach(it => {
    if (it.k === 't') { x0 = Math.min(x0, it.x); y0 = Math.min(y0, it.y); x1 = Math.max(x1, it.x + it.s.length * it.z * 0.6); y1 = Math.max(y1, it.y + it.z * 1.2); return; }
    for (let i = 0; i < it.p.length; i += 2) {
      x0 = Math.min(x0, it.p[i] - it.w); y0 = Math.min(y0, it.p[i + 1] - it.w);
      x1 = Math.max(x1, it.p[i] + it.w); y1 = Math.max(y1, it.p[i + 1] + it.w);
    }
  });
  return { x0, y0, x1, y1 };
}

/** PNG data URL of a sketch, cropped to its content (null if empty). */
function wbPng(b) {
  if (!b || !b.items.length) return null;
  const q = _wbBounds(b.items), pad = 24;
  const x = Math.max(0, q.x0 - pad), y = Math.max(0, q.y0 - pad);
  const w = Math.min(WB_W, q.x1 + pad) - x, h = Math.min(WB_H, q.y1 + pad) - y;
  const cv = document.createElement('canvas');
  cv.width = Math.max(40, Math.ceil(w)); cv.height = Math.max(40, Math.ceil(h));
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.translate(-x, -y);
  wbDraw(ctx, b.items, 1);
  return cv.toDataURL('image/png');
}

/** Markdown for one chapter's sketches (image + the text written on it, so it stays searchable). */
function wbMarkdown(topicId) {
  const out = [];
  wbLive(topicId).filter(b => b.items.length).forEach(b => {
    const png = wbPng(b);
    if (!png) return;
    const words = b.items.filter(i => i.k === 't').map(i => i.s);
    out.push(`## ✏️ Sketch: ${b.name}`, '', `![${b.name}](${png})`, '');
    if (words.length) out.push(`_On the sketch: ${words.join(' · ')}_`, '');
  });
  return out;
}

// ---------- editing ----------
function wbEnsure() {
  if (wb.id && studyBoards[wb.id] && !studyBoards[wb.id].del) return wbBoard();
  const n = wbLive(wb.topic).length + 1;
  const id = 'b' + Date.now().toString(36);
  studyBoards[id] = { id, topicId: wb.topic, name: 'Sketch ' + n, made: _wbNow(), at: _wbNow(), items: [] };
  wb.id = id;
  return studyBoards[id];
}
function wbSnap() { const b = wbBoard(); wb.hist.push(JSON.stringify(b ? b.items : [])); if (wb.hist.length > 50) wb.hist.shift(); }
function wbUndo() {
  const b = wbBoard();
  if (!b || !wb.hist.length) return;
  b.items = JSON.parse(wb.hist.pop());
  wbSave(); wbRedraw();
}
function wbClear() {
  const b = wbBoard();
  if (!b || !b.items.length) return;
  wbSnap(); b.items = []; wbSave(); wbRedraw();
}
function wbQuadrant() {
  const b = wbEnsure(); wbSnap();
  b.items.push({ k: 'l', c: '#111111', w: 3, p: [500, 120, 500, 620] }, { k: 'l', c: '#111111', w: 3, p: [180, 370, 820, 370] });
  wbSave(); wbRedraw(); wbRefresh(true);
}
function wbDeleteBoard() {
  const b = wbBoard();
  if (!b || !confirm('Delete sketch "' + b.name + '"?')) return;
  b.del = true; b.items = []; wbSave();
  wb.id = null; wb.hist = [];
  wbRefresh();
}
function wbNewBoard() { wb.id = null; wb.hist = []; wbEnsure(); wbSave(); wbRefresh(); }
function wbRename(v) { const b = wbBoard(); if (b) { b.name = v || 'Sketch'; wbSave(); } }

function wbDownloadPng() {
  const b = wbBoard(), png = wbPng(b);
  if (!png) return showToast('info', 'Draw something first');
  const a = document.createElement('a');
  a.href = png; a.download = b.name.replace(/[^\w]+/g, '-') + '.png';
  document.body.appendChild(a); a.click(); a.remove();
}

function _wbDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1, l = dx * dx + dy * dy;
  const t = l ? Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / l)) : 0;
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}
function _wbHit(it, x, y) {
  const r = 14;
  if (it.k === 't') return x >= it.x - r && x <= it.x + it.s.length * it.z * 0.6 + r && y >= it.y - r && y <= it.y + it.z * 1.2 + r;
  const p = it.p;
  if (p.length === 2) return Math.hypot(x - p[0], y - p[1]) < r;
  for (let i = 0; i < p.length - 2; i += 2) if (_wbDist(x, y, p[i], p[i + 1], p[i + 2], p[i + 3]) < r + it.w / 2) return true;
  return false;
}

function _wbPt(e) {
  const r = document.getElementById('wb-cv').getBoundingClientRect();
  return [Math.round((e.clientX - r.left) / r.width * WB_W), Math.round((e.clientY - r.top) / r.height * WB_H)];
}

function wbTextAt(x, y) {
  const stage = document.getElementById('wb-stage'), cv = document.getElementById('wb-cv');
  const k = cv.getBoundingClientRect().width / WB_W, z = WB_TEXT[wb.size];
  const inp = document.createElement('input');
  inp.className = 'wb-text-in';
  inp.style.cssText = `left:${x * k}px;top:${y * k}px;font-size:${z * k}px;color:${wb.c}`;
  let done = false;
  const commit = () => {
    if (done) return; done = true;
    const s = inp.value.trim(); inp.remove();
    if (!s) return;
    const b = wbEnsure(); wbSnap();
    b.items.push({ k: 't', c: wb.c, z, x, y, s });
    wbSave(); wbRedraw(); wbRefresh(true);
  };
  inp.onkeydown = e => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') { inp.value = ''; commit(); } };
  inp.onblur = commit;
  stage.appendChild(inp);
  inp.focus();
}

function _wbDown(e) {
  // Once an Apple Pencil / stylus has been used, ignore fingers so a resting palm doesn't draw.
  if (e.pointerType === 'pen') wb.pen = true; else if (wb.pen && e.pointerType === 'touch') return;
  if (e.button > 0) return;
  e.preventDefault();
  const [x, y] = _wbPt(e);
  if (wb.tool === 'text') { wbTextAt(x, y); return; }
  e.currentTarget.setPointerCapture(e.pointerId);
  wbEnsure(); wbSnap();
  if (wb.tool === 'erase') { wb.cur = { erase: true }; _wbErase(x, y); return; }
  wb.cur = { k: wb.tool === 'line' ? 'l' : 'p', c: wb.c, w: WB_PEN[wb.size], p: [x, y] };
  if (wb.tool === 'line') wb.cur.p.push(x, y);
  wbRedraw();
}
function _wbErase(x, y) {
  const b = wbBoard(), n = b.items.length;
  b.items = b.items.filter(it => !_wbHit(it, x, y));
  if (b.items.length !== n) { wb.cur.hit = true; wbRedraw(); }
}
function _wbMove(e) {
  if (!wb.cur) return;
  const [x, y] = _wbPt(e);
  if (wb.cur.erase) return _wbErase(x, y);
  const p = wb.cur.p;
  if (wb.cur.k === 'l') { p[2] = x; p[3] = y; }
  else if (Math.hypot(x - p[p.length - 2], y - p[p.length - 1]) >= 2) p.push(x, y);
  wbRedraw();
}
function _wbUp() {
  const c = wb.cur; wb.cur = null;
  if (!c) return;
  const b = wbBoard();
  if (c.erase) { if (!c.hit) wb.hist.pop(); }
  else b.items.push(c);
  wbSave(); wbRedraw(); wbRefresh(true);
}

// ---------- panel ----------
function wbSetTool(t) { wb.tool = t; wbRefresh(true); }
function wbSetColor(c) { wb.c = c; if (wb.tool === 'erase') wb.tool = 'pen'; wbRefresh(true); }
function wbSetSize(i) { wb.size = i; wbRefresh(true); }
function wbSelect(id) { wb.id = id; wb.hist = []; wbRefresh(); }

function _wbBuild() {
  if (document.getElementById('wb-panel')) return;
  const p = document.createElement('aside');
  p.id = 'wb-panel';
  p.innerHTML = `<div class="wb-grip" id="wb-grip" title="Drag to resize"></div>
    <div class="wb-head"><strong>✏️ Whiteboard</strong><span id="wb-topic"></span><button class="wb-x" onclick="wbToggle(false)" title="Close">✕</button></div>
    <div class="wb-row"><select id="wb-sel" onchange="wbSelect(this.value)"></select>
      <button onclick="wbNewBoard()" title="New sketch for this chapter">＋ New</button>
      <input id="wb-name" placeholder="Sketch name" oninput="wbRename(this.value)"></div>
    <div class="wb-tools" id="wb-tools"></div>
    <div class="wb-stage" id="wb-stage"><canvas id="wb-cv"></canvas></div>
    <div class="wb-row wb-foot">
      <button onclick="wbDownloadPng()">⬇ PNG</button>
      <button onclick="downloadClippings(wbTopicId()==='_'?undefined:wbTopicId())" title="Chapter notes + sketches as one .md file">📄 Add to chapter .md</button>
      <button onclick="wbDeleteBoard()" title="Delete this sketch">🗑</button></div>`;
  document.body.appendChild(p);
  const fab = document.createElement('button');
  fab.id = 'wb-fab'; fab.title = 'Open whiteboard'; fab.textContent = '✏️';
  fab.onclick = () => wbToggle(true);
  document.body.appendChild(fab);

  const cv = document.getElementById('wb-cv');
  cv.addEventListener('pointerdown', _wbDown);
  cv.addEventListener('pointermove', _wbMove);
  cv.addEventListener('pointerup', _wbUp);
  cv.addEventListener('pointercancel', _wbUp);
  new ResizeObserver(wbRedraw).observe(cv);

  // drag the left edge to resize (pointer events, so it works with touch too)
  const grip = document.getElementById('wb-grip');
  grip.addEventListener('pointerdown', e => { grip.setPointerCapture(e.pointerId); grip.dataset.on = 1; });
  grip.addEventListener('pointermove', e => { if (grip.dataset.on) wbSetWidth(window.innerWidth - e.clientX); });
  grip.addEventListener('pointerup', () => { delete grip.dataset.on; });
}

function wbSetWidth(w) {
  w = Math.max(280, Math.min(w, window.innerWidth - 120));
  document.documentElement.style.setProperty('--wb-w', w + 'px');
  try { localStorage.setItem('studyhub_wb_w', String(Math.round(w))); } catch (e) {}
}

function wbToggle(on) {
  _wbBuild();
  wb.open = on === undefined ? !wb.open : on;
  document.body.classList.toggle('wb-open', wb.open);
  clearInterval(wb.timer);
  if (wb.open) {
    let w = 0; try { w = parseInt(localStorage.getItem('studyhub_wb_w'), 10); } catch (e) {}
    wbSetWidth(w || Math.min(520, Math.round(window.innerWidth * 0.4)));
    wb.topic = null; wbRefresh();
    // ponytail: poll the chapter id while open; hook navigation instead if this ever costs anything
    wb.timer = setInterval(() => { if (wb.topic !== wbTopicId()) wbRefresh(); }, 700);
  }
}

/** Rebuild the panel; keepBoard=true only repaints the toolbar (no board switch). */
function wbRefresh(keepBoard) {
  if (!document.getElementById('wb-panel')) return;
  const topic = wbTopicId();
  if (!keepBoard && wb.topic !== topic) { wb.topic = topic; wb.id = null; wb.hist = []; }
  const boards = wbLive(topic);
  if (!wb.id || !studyBoards[wb.id] || studyBoards[wb.id].del) wb.id = boards.length ? boards[boards.length - 1].id : null;
  const t = typeof appData !== 'undefined' && appData.topics.find(x => x.id === topic);
  document.getElementById('wb-topic').textContent = t ? ' · ' + t.name : ' · General';
  document.getElementById('wb-sel').innerHTML = boards.length
    ? boards.map(b => `<option value="${b.id}"${b.id === wb.id ? ' selected' : ''}>${b.name.replace(/</g, '&lt;')}</option>`).join('')
    : '<option>(new sketch)</option>';
  const nm = document.getElementById('wb-name');
  if (document.activeElement !== nm) nm.value = wbBoard() ? wbBoard().name : '';
  const tool = (k, label, title) => `<button class="${wb.tool === k ? 'on' : ''}" onclick="wbSetTool('${k}')" title="${title}">${label}</button>`;
  document.getElementById('wb-tools').innerHTML =
    tool('pen', '✏️', 'Pen') + tool('line', '╱', 'Straight line') + tool('text', 'T', 'Text: tap where it should go') + tool('erase', '🧽', 'Eraser: touch a stroke to remove it') +
    '<span class="wb-sep"></span>' +
    WB_COLORS.map(c => `<button class="wb-dot ${wb.c === c ? 'on' : ''}" style="background:${c}" onclick="wbSetColor('${c}')" title="Colour"></button>`).join('') +
    '<span class="wb-sep"></span>' +
    [0, 1, 2].map(i => `<button class="${wb.size === i ? 'on' : ''}" onclick="wbSetSize(${i})" title="Size">${['S', 'M', 'L'][i]}</button>`).join('') +
    '<span class="wb-sep"></span>' +
    '<button onclick="wbUndo()" title="Undo">↶</button><button onclick="wbClear()" title="Clear this sketch">🧹</button><button onclick="wbQuadrant()" title="Add cross axes (4-quadrant chart)">⊞</button>';
  wbRedraw();
}
