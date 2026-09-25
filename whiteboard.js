// ============================================================
// StudyHub — Whiteboard: a resizable side panel for rough notes and sketches (Notability-style).
// Sketches are stored as vectors (tiny, so they sync), per chapter, and go into the chapter's
// "My Clippings" .md as PNG images. Vanilla canvas — works offline, Apple Pencil friendly.
// studyBoards[id] = { id, topicId, name, made, at, bg, items: [...], del? }
//   items: {k:'p', c, w, a?, p:[x,y,…]} pen / highlighter (a = alpha)
//          {k:'l'|'a'|'r'|'o', c, w, p:[x1,y1,x2,y2]} line / arrow / box / oval
//          {k:'t', c, z, x, y, s} text (s may hold \n)
// ============================================================
const WB_W = 1000, WB_H = 700; // logical page; the canvas scales to the panel
const WB_COLORS = ['#111111', '#d92d2d', '#1c64f2', '#0e9f6e', '#e08a00'];
const WB_PEN = [2, 4, 8], WB_TEXT = [22, 32, 48];
const WB_FONT = 'system-ui, -apple-system, "Segoe UI", sans-serif';
const WB_SHAPES = { line: 'l', arrow: 'a', rect: 'r', oval: 'o' };
let studyBoards = {};
try { studyBoards = JSON.parse(localStorage.getItem('studyhub_boards') || '{}') || {}; } catch (e) { studyBoards = {}; }
const wb = { open: false, id: null, topic: null, tool: 'pen', c: WB_COLORS[0], size: 1, hist: [], redo: [], cur: null, pen: false,
  sel: [], drag: null, ptrs: new Map(), z: 1, vx: 0, vy: 0 };

const _wbNow = () => new Date().toISOString();
const wbTopicId = () => (typeof selectedTopic !== 'undefined' && selectedTopic) || '_';
const wbLive = topic => Object.values(studyBoards).filter(b => !b.del && b.topicId === topic).sort((a, b) => a.made.localeCompare(b.made));
const wbTopics = () => [...new Set(Object.values(studyBoards).filter(b => !b.del && b.items.length).map(b => b.topicId))];
const wbBoard = () => studyBoards[wb.id];
const _cv = () => document.getElementById('wb-cv');

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
  if (wb.open) { wb.sel = []; wbRefresh(); }
}
function wbReplace(all) { studyBoards = all || {}; wbPersist(); if (wb.open) { wb.sel = []; wbRefresh(); } }

// ---------- geometry ----------
const _mctx = document.createElement('canvas').getContext('2d');
function _wbTextSize(it) {
  _mctx.font = `${it.z}px ${WB_FONT}`;
  const ls = it.s.split('\n');
  return { w: Math.max(...ls.map(l => _mctx.measureText(l).width)), h: ls.length * it.z * 1.2 };
}
function _wbBox(it) {
  if (it.k === 't') { const m = _wbTextSize(it); return [it.x, it.y, it.x + m.w, it.y + m.h]; }
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  for (let i = 0; i < it.p.length; i += 2) {
    x0 = Math.min(x0, it.p[i]); y0 = Math.min(y0, it.p[i + 1]); x1 = Math.max(x1, it.p[i]); y1 = Math.max(y1, it.p[i + 1]);
  }
  const h = (it.w || 2) / 2 + (it.k === 'a' ? 14 : 0);
  return [x0 - h, y0 - h, x1 + h, y1 + h];
}
function _wbUnion(items) {
  const bs = items.map(_wbBox);
  return [Math.min(...bs.map(b => b[0])), Math.min(...bs.map(b => b[1])), Math.max(...bs.map(b => b[2])), Math.max(...bs.map(b => b[3]))];
}
function _wbDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1, l = dx * dx + dy * dy;
  const t = l ? Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / l)) : 0;
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}
function _wbHit(it, x, y, r) {
  if (it.k === 't') { const b = _wbBox(it); return x >= b[0] - r && x <= b[2] + r && y >= b[1] - r && y <= b[3] + r; }
  const p = it.p, hw = (it.w || 2) / 2;
  if (it.k === 'o') {
    const cx = (p[0] + p[2]) / 2, cy = (p[1] + p[3]) / 2, rx = Math.abs(p[2] - p[0]) / 2 || 1, ry = Math.abs(p[3] - p[1]) / 2 || 1;
    return Math.abs(Math.hypot((x - cx) / rx, (y - cy) / ry) - 1) * Math.min(rx, ry) < r + hw;
  }
  if (it.k === 'r') {
    const [a, b, c, d] = [Math.min(p[0], p[2]), Math.min(p[1], p[3]), Math.max(p[0], p[2]), Math.max(p[1], p[3])];
    return [[a, b, c, b], [c, b, c, d], [c, d, a, d], [a, d, a, b]].some(s => _wbDist(x, y, s[0], s[1], s[2], s[3]) < r + hw);
  }
  if (p.length === 2) return Math.hypot(x - p[0], y - p[1]) < r + hw;
  for (let i = 0; i < p.length - 2; i += 2) if (_wbDist(x, y, p[i], p[i + 1], p[i + 2], p[i + 3]) < r + hw) return true;
  return false;
}
function _wbSamples(it) {
  const b = _wbBox(it);
  if (it.k === 'p') { const st = Math.max(2, Math.floor(it.p.length / 40) * 2), o = []; for (let i = 0; i < it.p.length; i += st) o.push([it.p[i], it.p[i + 1]]); return o; }
  if (it.k === 'l' || it.k === 'a') return [[it.p[0], it.p[1]], [it.p[2], it.p[3]], [(it.p[0] + it.p[2]) / 2, (it.p[1] + it.p[3]) / 2]];
  return [[b[0], b[1]], [b[2], b[1]], [b[0], b[3]], [b[2], b[3]], [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]];
}
function _wbInPoly(x, y, poly) {
  let in_ = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) in_ = !in_;
  }
  return in_;
}
/** A copy of `it` scaled by f about (ax,ay), then moved by (dx,dy). */
function _wbXform(it, ax, ay, f, dx, dy) {
  const o = JSON.parse(JSON.stringify(it)), r = v => Math.round(v * 10) / 10;
  if (o.k === 't') { o.x = r(ax + (o.x - ax) * f + dx); o.y = r(ay + (o.y - ay) * f + dy); o.z = Math.max(8, Math.round(o.z * f)); return o; }
  o.p = o.p.map((v, i) => r(i % 2 ? ay + (v - ay) * f + dy : ax + (v - ax) * f + dx));
  if (f !== 1) o.w = Math.max(1, r(o.w * f));
  return o;
}

// ---------- drawing ----------
function wbPaper(ctx, bg, x0, y0, x1, y1) {
  if (!bg || bg === 'plain') return;
  const g = 50, sx = Math.floor(x0 / g) * g, sy = Math.floor(y0 / g) * g;
  ctx.save();
  ctx.strokeStyle = ctx.fillStyle = '#d5dbe3'; ctx.lineWidth = 1.2;
  ctx.beginPath();
  for (let y = sy; y <= y1; y += g) {
    if (bg === 'dots') { for (let x = sx; x <= x1; x += g) { ctx.moveTo(x + 1.6, y); ctx.arc(x, y, 1.6, 0, 6.29); } }
    else { ctx.moveTo(x0, y); ctx.lineTo(x1, y); }
  }
  if (bg === 'grid') for (let x = sx; x <= x1; x += g) { ctx.moveTo(x, y0); ctx.lineTo(x, y1); }
  bg === 'dots' ? ctx.fill() : ctx.stroke();
  ctx.restore();
}

function wbDraw(ctx, items) {
  ctx.lineCap = ctx.lineJoin = 'round';
  items.forEach(it => {
    ctx.save();
    ctx.strokeStyle = ctx.fillStyle = it.c;
    if (it.a) { ctx.globalAlpha = it.a; ctx.globalCompositeOperation = 'multiply'; ctx.lineCap = 'butt'; }
    if (it.k === 't') {
      ctx.font = `${it.z}px ${WB_FONT}`;
      ctx.textBaseline = 'top';
      it.s.split('\n').forEach((l, i) => ctx.fillText(l, it.x, it.y + i * it.z * 1.2));
    } else {
      const p = it.p;
      ctx.lineWidth = it.w;
      ctx.beginPath();
      if (it.k === 'o') ctx.ellipse((p[0] + p[2]) / 2, (p[1] + p[3]) / 2, Math.max(Math.abs(p[2] - p[0]) / 2, 0.1), Math.max(Math.abs(p[3] - p[1]) / 2, 0.1), 0, 0, 6.2832);
      else if (it.k === 'r') ctx.rect(Math.min(p[0], p[2]), Math.min(p[1], p[3]), Math.abs(p[2] - p[0]), Math.abs(p[3] - p[1]));
      else {
        ctx.moveTo(p[0], p[1]);
        if (p.length === 2) ctx.lineTo(p[0] + 0.01, p[1]);
        for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1]);
        if (it.k === 'a') {
          const a = Math.atan2(p[3] - p[1], p[2] - p[0]), L = 12 + it.w * 3;
          [-0.5, 0.5].forEach(d => { ctx.moveTo(p[2], p[3]); ctx.lineTo(p[2] - L * Math.cos(a + d), p[3] - L * Math.sin(a + d)); });
        }
      }
      ctx.stroke();
    }
    ctx.restore();
  });
}

function _wbOverlay(ctx, s) {
  ctx.save();
  ctx.strokeStyle = '#1c64f2'; ctx.fillStyle = '#fff';
  if (wb.sel.length) {
    ctx.lineWidth = 1.5 / s; ctx.setLineDash([6 / s, 4 / s]);
    wb.sel.forEach(it => { const b = _wbBox(it); ctx.strokeRect(b[0], b[1], b[2] - b[0], b[3] - b[1]); });
    const [x0, y0, x1, y1] = _wbUnion(wb.sel), h = 8 / s;
    ctx.setLineDash([]); ctx.lineWidth = 2 / s;
    ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
    [[x0, y0], [x1, y0], [x0, y1], [x1, y1]].forEach(c => { ctx.fillRect(c[0] - h, c[1] - h, 2 * h, 2 * h); ctx.strokeRect(c[0] - h, c[1] - h, 2 * h, 2 * h); });
  }
  if (wb.drag && wb.drag.mode === 'lasso') {
    ctx.lineWidth = 1.5 / s; ctx.setLineDash([5 / s, 4 / s]);
    ctx.beginPath();
    wb.drag.pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])));
    ctx.closePath(); ctx.stroke();
  }
  ctx.restore();
}

function _wbClamp() {
  wb.z = Math.min(4, Math.max(1, wb.z));
  wb.vx = Math.max(0, Math.min(wb.vx, WB_W - WB_W / wb.z));
  wb.vy = Math.max(0, Math.min(wb.vy, WB_H - WB_H / wb.z));
}
const _wbV = () => _cv().getBoundingClientRect().width / WB_W * wb.z; // css px per logical unit

function wbRedraw() {
  const cv = _cv();
  if (!cv) return;
  _wbClamp();
  const r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  const w = Math.round(r.width * dpr), h = Math.round(r.width * WB_H / WB_W * dpr);
  if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
  const ctx = cv.getContext('2d'), s = w / WB_W * wb.z;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.setTransform(s, 0, 0, s, -wb.vx * s, -wb.vy * s);
  const b = wbBoard();
  wbPaper(ctx, b && b.bg, wb.vx, wb.vy, wb.vx + WB_W / wb.z, wb.vy + WB_H / wb.z);
  wbDraw(ctx, (b ? b.items : []).concat(wb.cur ? [wb.cur] : []));
  _wbOverlay(ctx, s);
  const zl = document.getElementById('wb-zl');
  if (zl) zl.textContent = Math.round(wb.z * 100) + '%';
}

/** PNG data URL of a sketch, cropped to its content (null if empty). */
function wbPng(b) {
  if (!b || !b.items.length) return null;
  const q = _wbUnion(b.items), pad = 24;
  const x = Math.max(0, q[0] - pad), y = Math.max(0, q[1] - pad);
  const w = Math.min(WB_W, q[2] + pad) - x, h = Math.min(WB_H, q[3] + pad) - y;
  const cv = document.createElement('canvas');
  cv.width = Math.max(40, Math.ceil(w)); cv.height = Math.max(40, Math.ceil(h));
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.translate(-x, -y);
  wbPaper(ctx, b.bg, x, y, x + w, y + h);
  wbDraw(ctx, b.items);
  return cv.toDataURL('image/png');
}

/** Markdown for one chapter's sketches (image + the text written on it, so it stays searchable). */
function wbMarkdown(topicId) {
  const out = [];
  wbLive(topicId).filter(b => b.items.length).forEach(b => {
    const png = wbPng(b);
    if (!png) return;
    const words = b.items.filter(i => i.k === 't').map(i => i.s.replace(/\s*\n\s*/g, ' '));
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
function wbSnap() { const b = wbBoard(); wb.hist.push(JSON.stringify(b ? b.items : [])); wb.redo = []; if (wb.hist.length > 60) wb.hist.shift(); }
/** After an edit: forget the snapshot if nothing actually changed. */
function _wbEnd() { const b = wbBoard(); if (b && JSON.stringify(b.items) === wb.hist[wb.hist.length - 1]) wb.hist.pop(); wbSave(); wbRedraw(); wbRefresh(true); }
function _wbRestore(from, to) {
  const b = wbBoard();
  if (!b || !from.length) return;
  to.push(JSON.stringify(b.items));
  b.items = JSON.parse(from.pop());
  wb.sel = []; wbSave(); wbRedraw(); wbRefresh(true);
}
const wbUndo = () => _wbRestore(wb.hist, wb.redo);
const wbRedo = () => _wbRestore(wb.redo, wb.hist);
function wbClear() {
  const b = wbBoard();
  if (!b || !b.items.length) return;
  wbSnap(); b.items = []; wb.sel = []; _wbEnd();
}
function wbQuadrant() {
  const b = wbEnsure(); wbSnap();
  b.items.push({ k: 'l', c: '#111111', w: 3, p: [500, 120, 500, 620] }, { k: 'l', c: '#111111', w: 3, p: [180, 370, 820, 370] });
  _wbEnd();
}
function wbDeleteBoard() {
  const b = wbBoard();
  if (!b || !confirm('Delete sketch "' + b.name + '"?')) return;
  b.del = true; b.items = []; wbSave();
  wb.id = null; wb.hist = []; wb.redo = []; wb.sel = [];
  wbRefresh();
}
function wbNewBoard() { wb.id = null; wb.hist = []; wb.redo = []; wb.sel = []; wbEnsure(); wbSave(); _wbFit(); wbRefresh(); }
function wbRename(v) { const b = wbBoard(); if (b) { b.name = v || 'Sketch'; wbSave(); } }
function wbSetBg(v) { const b = wbEnsure(); b.bg = v; wbSave(); wbRedraw(); wbRefresh(true); }

function wbDelSel() {
  const b = wbBoard();
  if (!b || !wb.sel.length) return;
  wbSnap(); b.items = b.items.filter(i => !wb.sel.includes(i)); wb.sel = []; _wbEnd();
}
function wbDupSel() {
  const b = wbBoard();
  if (!b || !wb.sel.length) return;
  wbSnap();
  const copies = wb.sel.map(i => _wbXform(i, 0, 0, 1, 30, 30));
  b.items.push(...copies); wb.sel = copies; _wbEnd();
}
function wbEditSel() { if (wb.sel.length === 1 && wb.sel[0].k === 't') wbTextEdit(wb.sel[0].x, wb.sel[0].y, wb.sel[0]); }

function wbDownloadPng() {
  const b = wbBoard(), png = wbPng(b);
  if (!png) return showToast('info', 'Draw something first');
  const a = document.createElement('a');
  a.href = png; a.download = b.name.replace(/[^\w]+/g, '-') + '.png';
  document.body.appendChild(a); a.click(); a.remove();
}

// ---------- zoom / pan ----------
function _wbFit() { wb.z = 1; wb.vx = wb.vy = 0; }
function _wbZoomAt(cx, cy, z) {
  const r = _cv().getBoundingClientRect(), k = r.width / WB_W;
  const lx = (cx - r.left) / (k * wb.z) + wb.vx, ly = (cy - r.top) / (k * wb.z) + wb.vy;
  wb.z = Math.min(4, Math.max(1, z));
  wb.vx = lx - (cx - r.left) / (k * wb.z); wb.vy = ly - (cy - r.top) / (k * wb.z);
  wbRedraw();
}
function wbZoom(f) { const r = _cv().getBoundingClientRect(); f ? _wbZoomAt(r.left + r.width / 2, r.top + r.height / 2, wb.z * f) : (_wbFit(), wbRedraw()); }

// ---------- pointer input ----------
function _wbPt(e) {
  const r = _cv().getBoundingClientRect(), V = _wbV();
  return [Math.round((e.clientX - r.left) / V + wb.vx), Math.round((e.clientY - r.top) / V + wb.vy)];
}
function _wbTopHit(x, y, pred) {
  const b = wbBoard(), r = 14 / _wbV();
  return b ? b.items.slice().reverse().find(it => (!pred || pred(it)) && _wbHit(it, x, y, r)) : null;
}

function wbTextEdit(x, y, item) {
  const stage = document.getElementById('wb-stage'), V = _wbV();
  const z = item ? item.z : WB_TEXT[wb.size];
  const b = wbBoard();
  if (item) { wbSnap(); b.items = b.items.filter(i => i !== item); wb.sel = []; wbRedraw(); }
  const ta = document.createElement('textarea');
  ta.className = 'wb-text-in';
  ta.wrap = 'off'; ta.rows = 1; ta.value = item ? item.s : '';
  ta.placeholder = 'Type…';
  ta.style.cssText = `left:${(x - wb.vx) * V}px;top:${(y - wb.vy) * V}px;font-size:${z * V}px;color:${item ? item.c : wb.c}`;
  const grow = () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
  ta.oninput = grow;
  let done = false;
  const finish = keep => {
    if (done) return; done = true;
    const s = ta.value.replace(/\s+$/, ''); ta.remove();
    if (keep && s) {
      const bb = wbEnsure();
      if (!item) wbSnap();
      const t = { k: 't', c: item ? item.c : wb.c, z, x, y, s };
      bb.items.push(t); wb.sel = item ? [t] : [];
    } else if (item && !keep) { b.items.push(item); wb.sel = [item]; }
    if (wbBoard()) _wbEnd();
  };
  ta.onkeydown = e => { if (e.key === 'Escape') { ta.value = ''; finish(false); } };
  ta.onblur = () => finish(true);
  stage.appendChild(ta);
  ta.focus(); grow();
}

function _wbAbort() {
  // a second finger landed: undo whatever the first one was doing
  const d = wb.drag;
  if (d && d.snap) { const b = wbBoard(); if (b) b.items = JSON.parse(wb.hist.pop()); wb.sel = []; }
  wb.cur = null;
}

function _wbDown(e) {
  if (e.button > 0) return;
  e.preventDefault();
  wb.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (e.pointerType === 'pen') wb.pen = true;
  try { _cv().setPointerCapture(e.pointerId); } catch (err) {}
  if (wb.ptrs.size === 2) { // pinch-zoom + two-finger pan
    _wbAbort();
    const [a, b] = [...wb.ptrs.values()], r = _cv().getBoundingClientRect(), k = r.width / WB_W;
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    wb.drag = { mode: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: wb.z, lx: (mx - r.left) / (k * wb.z) + wb.vx, ly: (my - r.top) / (k * wb.z) + wb.vy };
    return;
  }
  if (wb.ptrs.size > 2) return;
  // fingers move the page once the Pencil has been used; otherwise they draw
  if (wb.tool === 'pan' || (e.pointerType === 'touch' && wb.pen)) { wb.drag = { mode: 'pan', x: e.clientX, y: e.clientY }; return; }

  const [x, y] = _wbPt(e), V = _wbV(), t = wb.tool;
  if (t === 'text') {
    const hit = _wbTopHit(x, y, i => i.k === 't');
    wbTextEdit(hit ? hit.x : x, hit ? hit.y : y, hit);
    wb.drag = { mode: 'none' };
    return;
  }
  if (t === 'sel') {
    if (wb.sel.length) {
      const [x0, y0, x1, y1] = _wbUnion(wb.sel), cs = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]];
      const ci = cs.findIndex(c => Math.hypot(c[0] - x, c[1] - y) * V < 22);
      if (ci >= 0) { wbSnap(); const an = cs[3 - ci]; wb.drag = { mode: 'scale', snap: true, an, d0: Math.hypot(x - an[0], y - an[1]) || 1, base: wb.sel.map(i => JSON.parse(JSON.stringify(i))) }; return; }
    }
    const hit = _wbTopHit(x, y);
    const inSel = wb.sel.some(i => _wbHit(i, x, y, 14 / V)) || (wb.sel.length && (() => { const u = _wbUnion(wb.sel); return x >= u[0] && x <= u[2] && y >= u[1] && y <= u[3]; })());
    if (hit && !inSel) wb.sel = [hit];
    if (hit || inSel) { wbSnap(); wb.drag = { mode: 'move', snap: true, x0: x, y0: y, base: wb.sel.map(i => JSON.parse(JSON.stringify(i))) }; wbRedraw(); wbRefresh(true); return; }
    wb.sel = []; wb.drag = { mode: 'lasso', pts: [[x, y]] }; wbRedraw(); wbRefresh(true);
    return;
  }
  wbEnsure(); wbSnap();
  if (t === 'erase') { wb.drag = { mode: 'erase', snap: true }; _wbErase(x, y); return; }
  if (WB_SHAPES[t]) {
    wb.cur = { k: WB_SHAPES[t], c: wb.c, w: WB_PEN[wb.size], p: [x, y, x, y] };
    wb.drag = { mode: 'shape', snap: true };
  } else {
    const hl = t === 'hl';
    wb.cur = { k: 'p', c: wb.c, w: hl ? 26 : WB_PEN[wb.size], p: [x, y] };
    if (hl) wb.cur.a = 0.35;
    wb.drag = { mode: 'draw', snap: true, hx: x, hy: y };
  }
  wb.sel = [];
  wbRedraw();
}

function _wbErase(x, y) {
  const b = wbBoard(), n = b.items.length, r = 14 / _wbV();
  b.items = b.items.filter(it => !_wbHit(it, x, y, r));
  if (b.items.length !== n) wbRedraw();
}

function _wbMove(e) {
  if (wb.ptrs.has(e.pointerId)) wb.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  const d = wb.drag;
  if (!d || d.mode === 'none') return;
  if (d.mode === 'pinch') {
    if (wb.ptrs.size < 2) return;
    const [a, b] = [...wb.ptrs.values()], r = _cv().getBoundingClientRect(), k = r.width / WB_W;
    wb.z = Math.min(4, Math.max(1, d.z0 * Math.hypot(a.x - b.x, a.y - b.y) / d.d0));
    wb.vx = d.lx - ((a.x + b.x) / 2 - r.left) / (k * wb.z); wb.vy = d.ly - ((a.y + b.y) / 2 - r.top) / (k * wb.z);
    return wbRedraw();
  }
  if (d.mode === 'pan') {
    const V = _wbV();
    wb.vx -= (e.clientX - d.x) / V; wb.vy -= (e.clientY - d.y) / V; d.x = e.clientX; d.y = e.clientY;
    return wbRedraw();
  }
  const [x, y] = _wbPt(e);
  if (d.mode === 'erase') return _wbErase(x, y);
  if (d.mode === 'lasso') { d.pts.push([x, y]); return wbRedraw(); }
  if (d.mode === 'move') {
    wb.sel.forEach((it, i) => Object.assign(it, _wbXform(d.base[i], 0, 0, 1, x - d.x0, y - d.y0)));
    return wbRedraw();
  }
  if (d.mode === 'scale') {
    const f = Math.max(0.15, Math.min(8, Math.hypot(x - d.an[0], y - d.an[1]) / d.d0));
    wb.sel.forEach((it, i) => Object.assign(it, _wbXform(d.base[i], d.an[0], d.an[1], f, 0, 0)));
    return wbRedraw();
  }
  const p = wb.cur.p;
  if (d.mode === 'shape') { p[2] = x; p[3] = y; }
  else if (Math.hypot(x - p[p.length - 2], y - p[p.length - 1]) >= 2) p.push(x, y);
  // pen held still ~0.6s → snap the stroke to a straight line (like Notability)
  if (d.mode === 'draw' && !wb.cur.a && Math.hypot(x - d.hx, y - d.hy) > 6) {
    d.hx = x; d.hy = y;
    clearTimeout(wb.hold);
    wb.hold = setTimeout(() => {
      if (wb.drag !== d || p.length < 6) return;
      wb.cur = { k: 'l', c: wb.cur.c, w: wb.cur.w, p: [p[0], p[1], d.hx, d.hy] };
      d.mode = 'shape'; wbRedraw();
    }, 600);
  }
  wbRedraw();
}

function _wbUp(e) {
  wb.ptrs.delete(e.pointerId);
  const d = wb.drag;
  if (!d) return;
  if (d.mode === 'pinch') { wb.drag = wb.ptrs.size ? { mode: 'none' } : null; return; }
  if (wb.ptrs.size) return;
  clearTimeout(wb.hold);
  wb.drag = null;
  const c = wb.cur; wb.cur = null;
  if (d.mode === 'pan' || d.mode === 'none') return;
  if (d.mode === 'lasso') {
    const b = wbBoard();
    wb.sel = !b || d.pts.length < 4 ? [] : b.items.filter(it => {
      const s = _wbSamples(it);
      return s.filter(q => _wbInPoly(q[0], q[1], d.pts)).length * 2 > s.length;
    });
    wbRedraw(); wbRefresh(true);
    return;
  }
  if (c && (d.mode === 'draw' || d.mode === 'shape')) {
    const p = c.p;
    if (c.k !== 'p' && Math.hypot(p[2] - p[0], p[3] - p[1]) < 4) { wb.hist.pop(); wbRedraw(); return; }
    wbBoard().items.push(c);
  }
  _wbEnd();
}

function _wbWheel(e) {
  if (!e.ctrlKey && wb.z === 1) return; // let the panel scroll normally
  e.preventDefault();
  if (e.ctrlKey) return _wbZoomAt(e.clientX, e.clientY, wb.z * Math.exp(-e.deltaY * 0.01));
  const V = _wbV();
  wb.vx += e.deltaX / V; wb.vy += e.deltaY / V; wbRedraw();
}

function _wbKey(e) {
  if (!wb.open || /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName)) return;
  if ((e.key === 'Backspace' || e.key === 'Delete') && wb.sel.length) { e.preventDefault(); wbDelSel(); }
  else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? wbRedo() : wbUndo(); }
}

// ---------- panel ----------
function wbSetTool(t) { wb.tool = t; if (t !== 'sel') wb.sel = []; wbRedraw(); wbRefresh(true); }
function wbSetColor(c) {
  wb.c = c;
  if (wb.sel.length) { wbSnap(); wb.sel.forEach(i => (i.c = c)); return _wbEnd(); }
  if (wb.tool === 'erase' || wb.tool === 'pan' || wb.tool === 'sel') wb.tool = 'pen';
  wbRefresh(true);
}
function wbSetSize(i) {
  wb.size = i;
  if (wb.sel.length) { wbSnap(); wb.sel.forEach(it => (it.k === 't' ? (it.z = WB_TEXT[i]) : (it.w = it.a ? it.w : WB_PEN[i]))); return _wbEnd(); }
  wbRefresh(true);
}
function wbSelect(id) { wb.id = id; wb.hist = []; wb.redo = []; wb.sel = []; _wbFit(); wbRefresh(); }

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
    <div class="wb-tools" id="wb-selbar"></div>
    <div class="wb-stage" id="wb-stage"><canvas id="wb-cv"></canvas></div>
    <div class="wb-row wb-foot">
      <select id="wb-bg" onchange="wbSetBg(this.value)" title="Paper"><option value="plain">▢ Plain</option><option value="grid">▦ Grid</option><option value="lined">☰ Lined</option><option value="dots">⁝ Dots</option></select>
      <button onclick="wbDownloadPng()">⬇ PNG</button>
      <button onclick="downloadClippings(wbTopicId()==='_'?undefined:wbTopicId())" title="Chapter notes + sketches as one .md file">📄 Add to chapter .md</button>
      <button onclick="wbDeleteBoard()" title="Delete this sketch">🗑</button></div>`;
  document.body.appendChild(p);
  const fab = document.createElement('button');
  fab.id = 'wb-fab'; fab.title = 'Open whiteboard'; fab.textContent = '✏️';
  fab.onclick = () => wbToggle(true);
  document.body.appendChild(fab);

  const cv = _cv();
  ['down', 'move', 'up', 'cancel'].forEach(n => cv.addEventListener('pointer' + n, { down: _wbDown, move: _wbMove, up: _wbUp, cancel: _wbUp }[n]));
  cv.addEventListener('wheel', _wbWheel, { passive: false });
  document.addEventListener('keydown', _wbKey);
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

/** Rebuild the panel; keepBoard=true only refreshes the toolbars (no board switch). */
function wbRefresh(keepBoard) {
  if (!document.getElementById('wb-panel')) return;
  const topic = wbTopicId();
  if (!keepBoard && wb.topic !== topic) { wb.topic = topic; wb.id = null; wb.hist = []; wb.redo = []; wb.sel = []; _wbFit(); }
  const boards = wbLive(topic);
  if (!wb.id || !studyBoards[wb.id] || studyBoards[wb.id].del) wb.id = boards.length ? boards[boards.length - 1].id : null;
  const t = typeof appData !== 'undefined' && appData.topics.find(x => x.id === topic);
  document.getElementById('wb-topic').textContent = t ? ' · ' + t.name : ' · General';
  document.getElementById('wb-sel').innerHTML = boards.length
    ? boards.map(b => `<option value="${b.id}"${b.id === wb.id ? ' selected' : ''}>${b.name.replace(/</g, '&lt;')}</option>`).join('')
    : '<option>(new sketch)</option>';
  const nm = document.getElementById('wb-name');
  if (document.activeElement !== nm) nm.value = wbBoard() ? wbBoard().name : '';
  document.getElementById('wb-bg').value = (wbBoard() && wbBoard().bg) || 'plain';
  const tool = (k, label, title) => `<button class="${wb.tool === k ? 'on' : ''}" onclick="wbSetTool('${k}')" title="${title}">${label}</button>`;
  document.getElementById('wb-tools').innerHTML =
    tool('sel', '⬚', 'Select: draw a loop round things, then move or resize them') + tool('pan', '🖐', 'Move the page (two fingers also pan / zoom)') +
    tool('pen', '✏️', 'Pen — hold still at the end to make a straight line') + tool('hl', '🖍', 'Highlighter') + tool('erase', '🧽', 'Eraser: touch a stroke to remove it') +
    tool('text', 'T', 'Text: tap to type, tap text again to edit') +
    tool('line', '╱', 'Line') + tool('arrow', '➚', 'Arrow') + tool('rect', '▭', 'Box') + tool('oval', '◯', 'Oval') +
    '<span class="wb-sep"></span>' +
    WB_COLORS.map(c => `<button class="wb-dot ${wb.c === c ? 'on' : ''}" style="background:${c}" onclick="wbSetColor('${c}')" title="Colour"></button>`).join('') +
    `<input type="color" class="wb-color" value="${wb.c}" onchange="wbSetColor(this.value)" title="Any colour">` +
    '<span class="wb-sep"></span>' +
    [0, 1, 2].map(i => `<button class="${wb.size === i ? 'on' : ''}" onclick="wbSetSize(${i})" title="Size">${['S', 'M', 'L'][i]}</button>`).join('') +
    '<span class="wb-sep"></span>' +
    '<button onclick="wbUndo()" title="Undo">↶</button><button onclick="wbRedo()" title="Redo">↷</button>' +
    '<button onclick="wbZoom(1/1.25)" title="Zoom out">−</button><button id="wb-zl" onclick="wbZoom(0)" title="Fit page">' + Math.round(wb.z * 100) + '%</button><button onclick="wbZoom(1.25)" title="Zoom in">＋</button>' +
    '<button onclick="wbQuadrant()" title="Add cross axes (4-quadrant chart)">⊞</button><button onclick="wbClear()" title="Clear this sketch">🧹</button>';
  document.getElementById('wb-selbar').innerHTML = wb.sel.length
    ? `<span class="wb-selinfo">${wb.sel.length} selected — drag to move, corner to resize:</span><button onclick="wbDelSel()">🗑 Delete</button><button onclick="wbDupSel()">⧉ Duplicate</button>` +
      (wb.sel.length === 1 && wb.sel[0].k === 't' ? '<button onclick="wbEditSel()">✎ Edit text</button>' : '') : '';
  wbRedraw();
}
