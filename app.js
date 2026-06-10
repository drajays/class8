// ============================================================
// StudyHub — APPLICATION LOGIC
// Depends on: data-core.js, chapters3to8.js, biology.js,
// chemistry.js, geography.js, history-civics.js
// ============================================================

// ============================================================
// THEME (light / dark) — persisted
// ============================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('btn-theme');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('studyhub_theme', theme); } catch (e) {}
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}
(function initTheme() {
  let saved = 'light';
  try { saved = localStorage.getItem('studyhub_theme') || 'light'; } catch (e) {}
  applyTheme(saved);
})();

// Tint the whole UI with the current subject's accent colour
function applyAccent() {
  let subId = selectedSubject;
  if (!subId && selectedTopic) {
    const t = appData.topics.find(t => t.id === selectedTopic);
    if (t) subId = t.subjectId;
  }
  if (subId) document.body.setAttribute('data-subject', subId);
  else document.body.removeAttribute('data-subject');
}

// ============================================================
// STATE
// ============================================================
let appData;
let currentView = 'home'; // home, subjects, topics, content
let selectedClass = null;
let selectedSubject = null;
let selectedTopic = null;
let contentTab = 'notes'; // notes, questions
let questionFilter = 'all'; // all, true_false, fill_blank, mcq, match, short_answer
let userAnswers = {};

const DATA_VERSION = 26;

function isNwDesktop() {
  try {
    return typeof nw !== 'undefined' ||
      (typeof process !== 'undefined' && process.versions && process.versions.nw);
  } catch (e) { return false; }
}

function isUserCreatedContentId(id) {
  return /^c-\d+$/.test(id);
}

function _mergeNewById(target, defaults) {
  const ids = new Set(target.map(x => x.id));
  defaults.forEach(d => {
    if (!ids.has(d.id)) {
      target.push(JSON.parse(JSON.stringify(d)));
      ids.add(d.id);
    }
  });
}

function _readSavedJson() {
  if (isNwDesktop()) {
    try {
      const fs = require('fs');
      const path = require('path');
      const dbFile = path.join(process.cwd(), 'data', 'studyhub_db.json');
      if (fs.existsSync(dbFile)) return fs.readFileSync(dbFile, 'utf-8');
    } catch (err) {
      console.warn('[StudyHub] Could not read DB file:', err.message);
    }
  }
  let raw = localStorage.getItem('studyhub_data');
  if (!raw) {
    const legacy = localStorage.getItem('studyhub_db');
    if (legacy) raw = legacy;
  }
  return raw;
}

function _mergeDefaultsIntoAppData() {
  if (!appData.deletedContentIds) appData.deletedContentIds = [];
  const deleted = new Set(appData.deletedContentIds);
  _mergeNewById(appData.classes, DEFAULT_DATA.classes);
  _mergeNewById(appData.subjects, DEFAULT_DATA.subjects);
  _mergeNewById(appData.topics, DEFAULT_DATA.topics);
  const contentIds = new Set(appData.content.map(c => c.id));
  DEFAULT_DATA.content.forEach(item => {
    if (!contentIds.has(item.id) && !deleted.has(item.id)) {
      appData.content.push(JSON.parse(JSON.stringify(item)));
      contentIds.add(item.id);
    }
  });
}

// Reconcile a returning user's saved taxonomy with the canonical DEFAULT_DATA:
//  1. refresh subject/topic names + icons (e.g. an old "History & Civics"),
//  2. drop bundled subjects/topics that no longer exist in DEFAULT_DATA
//     (e.g. a phantom "Mathematics" subject or the folded-away NEET chapters
//      bio-ch10..ch16) — but only when they hold no user-created (c-…) content,
//     so manual work is never lost.
function _reconcileTaxonomy() {
  const defSub = new Map(DEFAULT_DATA.subjects.map(s => [s.id, s]));
  const defTop = new Map(DEFAULT_DATA.topics.map(t => [t.id, t]));
  // 1. canonicalise labels for anything still bundled
  appData.subjects.forEach(s => { const d = defSub.get(s.id); if (d) Object.assign(s, { name: d.name, icon: d.icon, color: d.color, classId: d.classId }); });
  appData.topics.forEach(t => { const d = defTop.get(t.id); if (d) Object.assign(t, { name: d.name, icon: d.icon, subjectId: d.subjectId, classId: d.classId }); });

  const hasUserContent = id => appData.content.some(c => c.topicId === id && isUserCreatedContentId(c.id));
  // 2a. prune retired topics (+ their leftover bundled content)
  appData.topics = appData.topics.filter(t => {
    if (defTop.has(t.id) || hasUserContent(t.id)) return true;
    appData.content = appData.content.filter(c => c.topicId !== t.id);
    return false;
  });
  // 2b. prune retired subjects that no longer have any topics
  const liveSubjects = new Set(appData.topics.map(t => t.subjectId));
  appData.subjects = appData.subjects.filter(s => defSub.has(s.id) || liveSubjects.has(s.id));
}

function _mergeModuleArraysIntoDefault() {
  const modules = [
    typeof CHAPTERS_3_TO_8 !== 'undefined' ? CHAPTERS_3_TO_8 : null,
    typeof BIOLOGY_DATA !== 'undefined' ? BIOLOGY_DATA : null,
    typeof BIOLOGY_NEET_DATA !== 'undefined' ? BIOLOGY_NEET_DATA : null,
    typeof CHEMISTRY_DATA !== 'undefined' ? CHEMISTRY_DATA : null,
    typeof HISTORY_CIVICS_DATA !== 'undefined' ? HISTORY_CIVICS_DATA : null,
    typeof GEOGRAPHY_DATA !== 'undefined' ? GEOGRAPHY_DATA : null,
    typeof PHYSICS_QBANK !== 'undefined' ? PHYSICS_QBANK : null
  ];
  const existingIds = new Set(DEFAULT_DATA.content.map(c => c.id));
  modules.forEach(arr => {
    if (!arr) return;
    arr.forEach(item => {
      if (!existingIds.has(item.id)) {
        DEFAULT_DATA.content.push(item);
        existingIds.add(item.id);
      }
    });
  });
}

function _upsertBundledContent() {
  const deleted = new Set(appData.deletedContentIds || []);
  const indexById = new Map(appData.content.map((c, i) => [c.id, i]));
  DEFAULT_DATA.content.forEach(item => {
    if (isUserCreatedContentId(item.id)) return;
    const copy = JSON.parse(JSON.stringify(item));
    const idx = indexById.get(item.id);
    if (idx !== undefined) {
      appData.content[idx] = copy;
    } else if (!deleted.has(item.id)) {
      appData.content.push(copy);
      indexById.set(item.id, appData.content.length - 1);
    }
  });
}

let _defaultDataModulesMerged = false;

function loadData() {
  if (!_defaultDataModulesMerged) {
    _mergeModuleArraysIntoDefault();
    _defaultDataModulesMerged = true;
  }
  const savedRaw = _readSavedJson();
  const savedVersion = parseInt(localStorage.getItem('studyhub_version') || '0');
  if (savedRaw) {
    const parsed = JSON.parse(savedRaw);
    const payload = parsed._studyhub ? parsed : parsed;
    if (payload.classes && payload.content) {
      appData = {
        classes: Array.isArray(payload.classes) ? payload.classes.slice() : [],
        subjects: Array.isArray(payload.subjects) ? payload.subjects.slice() : [],
        topics: Array.isArray(payload.topics) ? payload.topics.slice() : [],
        content: Array.isArray(payload.content) ? payload.content.slice() : [],
        deletedContentIds: Array.isArray(payload.deletedContentIds) ? payload.deletedContentIds.slice() : []
      };
      _mergeDefaultsIntoAppData();
      if (savedVersion < DATA_VERSION) {
        _upsertBundledContent();
        _reconcileTaxonomy();
        localStorage.setItem('studyhub_version', String(DATA_VERSION));
        saveData();
      }
      return;
    }
  }
  appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  appData.deletedContentIds = [];
  localStorage.setItem('studyhub_version', String(DATA_VERSION));
  saveData();
}

function saveData() {
  if (!appData) return false;
  const json = JSON.stringify(appData);
  if (isNwDesktop()) {
    try {
      const fs = require('fs');
      const path = require('path');
      const dbDir = path.join(process.cwd(), 'data');
      const dbFile = path.join(dbDir, 'studyhub_db.json');
      if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
      const payload = {
        _studyhub: true,
        _version: DATA_VERSION,
        _savedAt: new Date().toISOString(),
        classes: appData.classes,
        subjects: appData.subjects,
        topics: appData.topics,
        content: appData.content,
        deletedContentIds: appData.deletedContentIds || []
      };
      fs.writeFileSync(dbFile, JSON.stringify(payload, null, 2), 'utf-8');
    } catch (err) {
      console.error('[StudyHub] Could not write DB file:', err.message);
    }
  }
  try {
    localStorage.setItem('studyhub_data', json);
    localStorage.setItem('studyhub_version', String(DATA_VERSION));
    return true;
  } catch (err) {
    console.error('[StudyHub] Could not save to localStorage:', err.message);
    showToast('error', '❌ Storage full — export a backup and free space.');
    return false;
  }
}

function setupPersistenceGuards() {
  window.addEventListener('beforeunload', function () {
    if (appData) saveData();
  });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && appData) saveData();
  });
}

// ============================================================
// PROGRESS TRACKING (student journey) — persisted per question
//   studyProgress[qId] = { attempts, correct, lastResult, lastAt }
//   Stored in localStorage 'studyhub_progress' and included in backups.
// ============================================================
let studyProgress = {};

function loadProgress() {
  try {
    const raw = localStorage.getItem('studyhub_progress');
    studyProgress = raw ? JSON.parse(raw) : {};
  } catch (e) { studyProgress = {}; }
  if (!studyProgress || typeof studyProgress !== 'object') studyProgress = {};
}

function saveProgress() {
  try { localStorage.setItem('studyhub_progress', JSON.stringify(studyProgress)); }
  catch (e) { /* storage full — non-fatal */ }
}

// Record an answer attempt. isCorrect may be true/false, or null for
// "seen only" items (e.g. short/long answers that are self-checked).
function recordAttempt(qId, isCorrect) {
  const p = studyProgress[qId] || { attempts: 0, correct: 0, lastResult: null, lastAt: null };
  p.attempts += 1;
  if (isCorrect === true) p.correct += 1;
  p.lastResult = isCorrect === true ? 'correct' : (isCorrect === false ? 'wrong' : 'seen');
  p.lastAt = new Date().toISOString();
  studyProgress[qId] = p;
  saveProgress();
  updateMasteryBadge();
}

// Mastery summary for a chapter (topicId): attempted vs total gradable
// questions, and accuracy across attempted ones.
function chapterMastery(topicId) {
  const qs = appData.content.filter(c => c.topicId === topicId && c.type !== 'note');
  const gradable = qs.filter(q => q.type !== 'short_answer');
  let attempted = 0, correct = 0;
  gradable.forEach(q => {
    const p = studyProgress[q.id];
    if (p && p.attempts > 0) { attempted++; if (p.lastResult === 'correct') correct++; }
  });
  const total = gradable.length || 1;
  return {
    attempted,
    total: gradable.length,
    correct,
    pct: Math.round((correct / total) * 100),
    coverage: Math.round((attempted / total) * 100),
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
  };
}

// Aggregate mastery across every gradable question in a subject.
function subjectMastery(subjectId) {
  const topicIds = new Set(appData.topics.filter(t => t.subjectId === subjectId).map(t => t.id));
  const gradable = appData.content.filter(c => topicIds.has(c.topicId) && c.type !== 'note' && c.type !== 'short_answer');
  let attempted = 0, correct = 0;
  gradable.forEach(q => { const p = studyProgress[q.id]; if (p && p.attempts > 0) { attempted++; if (p.lastResult === 'correct') correct++; } });
  const total = gradable.length || 1;
  return {
    total: gradable.length, attempted, correct,
    coverage: Math.round((attempted / total) * 100),
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
  };
}

// App-wide progress snapshot for the home dashboard.
function overallProgress() {
  const gradable = appData.content.filter(c => c.type !== 'note' && c.type !== 'short_answer');
  let attempted = 0, correct = 0;
  gradable.forEach(q => { const p = studyProgress[q.id]; if (p && p.attempts > 0) { attempted++; if (p.lastResult === 'correct') correct++; } });
  const total = gradable.length || 1;
  return {
    total: gradable.length, attempted, correct,
    coverage: Math.round((attempted / total) * 100),
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
  };
}

// Colour band for an accuracy %: drives the pill/ring colour in cards.
function _accClass(acc, attempted) {
  if (!attempted) return 'none';
  if (acc >= 75) return 'good';
  if (acc >= 50) return 'mid';
  return 'low';
}

function updateMasteryBadge() {
  if (!selectedTopic) return;
  const m = chapterMastery(selectedTopic);
  const numEl = document.getElementById('mastery-num');
  const barEl = document.getElementById('mastery-bar');
  if (numEl) numEl.textContent = m.pct + '%';
  if (barEl) barEl.style.width = Math.max(m.pct, 2) + '%';
}

function resetAllProgress() {
  if (!confirm('Reset ALL progress across every subject? This clears every recorded attempt and score. This cannot be undone.')) return;
  studyProgress = {};
  saveProgress();
  showToast('success', '↺ All progress reset.');
  render();
}

function resetChapterProgress() {
  if (!selectedTopic) return;
  if (!confirm('Reset your progress for this chapter? This clears recorded attempts and scores for these questions.')) return;
  appData.content.filter(c => c.topicId === selectedTopic && c.type !== 'note')
    .forEach(q => { delete studyProgress[q.id]; });
  saveProgress();
  showToast('success', '↺ Chapter progress reset.');
  renderContent(document.getElementById('main-content'));
}

// ============================================================
// TEXT FORMATTING — escape HTML, then render **bold** markdown.
// Used for notes/answers so key terms render in bold safely.
// ============================================================
function fmtText(str) {
  return escHtml(str).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

// ============================================================
// BIDIRECTIONAL JUMP LINKS (notes <-> questions)
// ============================================================
function _flashEl(el) {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.remove('jump-flash');
  // force reflow so the animation can replay
  void el.offsetWidth;
  el.classList.add('jump-flash');
  setTimeout(() => el.classList.remove('jump-flash'), 1600);
}

function jumpToNote(noteId) {
  contentTab = 'notes';
  userAnswers = {};
  delete notesCollapsed[noteId]; // ensure the target note is expanded on arrival
  renderContent(document.getElementById('main-content'));
  setTimeout(() => _flashEl(document.getElementById('note-' + noteId)), 60);
}

function jumpToQuestion(qId) {
  contentTab = 'questions';
  questionFilter = 'all'; // show all so the target is never filtered out
  userAnswers = {};
  renderContent(document.getElementById('main-content'));
  setTimeout(() => _flashEl(document.getElementById('qcard-' + qId)), 60);
}

const Q_TYPE_SHORT = { mcq:'MCQ', true_false:'T/F', fill_blank:'Fill', short_answer:'Q&A', match:'Match' };

// ============================================================
// NOTE FOLDING (collapse / expand concept cards)
// ============================================================
let notesCollapsed = {}; // noteId -> true when folded

function toggleNote(id) {
  const el = document.getElementById('note-' + id);
  if (!el) return;
  const collapsed = el.classList.toggle('collapsed'); // CSS-only fold, no re-render
  if (collapsed) notesCollapsed[id] = true; else delete notesCollapsed[id];
}

function toggleAllNotes() {
  const notes = appData.content.filter(c => c.topicId === selectedTopic && c.type === 'note');
  const allFolded = notes.every(n => notesCollapsed[n.id]);
  if (allFolded) notesCollapsed = {};
  else notes.forEach(n => { notesCollapsed[n.id] = true; });
  renderNotes(notes);
}

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(view, id) {
  closeSidebar();
  currentView = view;
  userAnswers = {};
  if (view === 'home') { selectedClass = null; selectedSubject = null; selectedTopic = null; }
  if (view === 'subjects') { selectedClass = id; selectedSubject = null; selectedTopic = null; }
  if (view === 'topics') { selectedSubject = id; selectedTopic = null; }
  if (view === 'content') {
    selectedTopic = id; contentTab = 'notes'; questionFilter = 'all';
    try { localStorage.setItem('studyhub_last_topic', id); } catch (e) {}
  }
  render();
}

function render() {
  applyAccent();
  renderBreadcrumb();
  renderSidebar();
  renderMain();
}

function renderBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  let html = `<span onclick="navigateTo('home')">🏠 Home</span>`;
  if (selectedClass) {
    const cls = appData.classes.find(c=>c.id===selectedClass);
    html += `<span class="sep">›</span><span onclick="navigateTo('subjects','${selectedClass}')">${cls?.name||selectedClass}</span>`;
  }
  if (selectedSubject) {
    const sub = appData.subjects.find(s=>s.id===selectedSubject);
    html += `<span class="sep">›</span><span onclick="navigateTo('topics','${selectedSubject}')">${sub?.icon||''} ${sub?.name||selectedSubject}</span>`;
  }
  if (selectedTopic) {
    const t = appData.topics.find(t=>t.id===selectedTopic);
    html += `<span class="sep">›</span><span class="active">${t?.icon||''} ${t?.name||selectedTopic}</span>`;
  }
  bc.innerHTML = html;
}

function renderSidebar() {
  // Classes
  const classNav = document.getElementById('class-nav');
  classNav.innerHTML = appData.classes.map(c => `
    <div class="nav-item ${selectedClass===c.id?'active':''}" onclick="navigateTo('subjects','${c.id}')">
      <span class="icon">${c.icon}</span> ${c.name}
    </div>
  `).join('');

  // Subjects
  const subSection = document.getElementById('subject-nav-section');
  const subNav = document.getElementById('subject-nav');
  if (selectedClass) {
    subSection.style.display = 'block';
    const subs = appData.subjects.filter(s=>s.classId===selectedClass);
    subNav.innerHTML = subs.map(s => `
      <div class="nav-item ${selectedSubject===s.id?'active':''}" onclick="navigateTo('topics','${s.id}')">
        <span class="icon">${s.icon}</span> ${s.name}
        <span class="badge">${appData.topics.filter(t=>t.subjectId===s.id).length}</span>
      </div>
    `).join('');
  } else { subSection.style.display='none'; }

  // Topics
  const topSection = document.getElementById('topic-nav-section');
  const topNav = document.getElementById('topic-nav');
  if (selectedSubject) {
    topSection.style.display = 'block';
    const tops = appData.topics.filter(t=>t.subjectId===selectedSubject);
    topNav.innerHTML = tops.map(t => `
      <div class="nav-item ${selectedTopic===t.id?'active':''}" onclick="navigateTo('content','${t.id}')">
        <span class="icon">${t.icon}</span> ${t.name}
        <span class="badge">${appData.content.filter(c=>c.topicId===t.id).length}</span>
      </div>
    `).join('');
  } else { topSection.style.display='none'; }
}

function renderMain() {
  const main = document.getElementById('main-content');
  if (currentView === 'home') renderHome(main);
  else if (currentView === 'subjects') renderSubjects(main);
  else if (currentView === 'topics') renderTopics(main);
  else if (currentView === 'content') renderContent(main);
}

// ===== HOME =====
function renderHome(el) {
  const op = overallProgress();
  const opCls = _accClass(op.accuracy, op.attempted);
  let lastId = null; try { lastId = localStorage.getItem('studyhub_last_topic'); } catch (e) {}
  const lastTopic = lastId ? appData.topics.find(t=>t.id===lastId) : null;
  const lastSub = lastTopic ? appData.subjects.find(s=>s.id===lastTopic.subjectId) : null;
  const continueHtml = (lastTopic && lastSub) ? `
    <div class="continue-card" onclick="selectedClass='${lastSub.classId}';selectedSubject='${lastTopic.subjectId}';navigateTo('content','${lastTopic.id}')">
      <div class="cc-icon">${lastTopic.icon}</div>
      <div class="cc-body"><div class="cc-label">Continue where you left off</div><div class="cc-title">${lastTopic.name}</div></div>
      <div class="cc-go">Resume →</div>
    </div>` : '';
  const subjectBars = appData.subjects.map(s => {
    const sm = subjectMastery(s.id);
    const c = _accClass(sm.accuracy, sm.attempted);
    return `
      <div class="dsub" onclick="selectedClass='${s.classId}';navigateTo('topics','${s.id}')">
        <div class="dsub-top"><span>${s.icon} ${s.name}</span><span class="acc-pill ${c}">${sm.attempted ? sm.accuracy + '%' : '—'}</span></div>
        <div class="progress-bar"><div class="progress-fill cov-${c}" style="width:${Math.max(sm.coverage,2)}%"></div></div>
        <div class="dsub-sub">${sm.attempted}/${sm.total} practiced</div>
      </div>`;
  }).join('');
  const dashHtml = `
    ${continueHtml}
    <div class="dash">
      <div class="dash-head"><h2>📊 Your Progress</h2>${op.attempted ? `<button class="btn btn-sm btn-outline" onclick="resetAllProgress()">↺ Reset all</button>` : ''}</div>
      <div class="dash-grid">
        <div class="dash-ring acc-${opCls}" style="background:conic-gradient(var(--accent) ${op.attempted ? op.accuracy : 0}%, var(--line) 0)">
          <div class="ring-inner"><div class="ring-num">${op.attempted ? op.accuracy + '%' : '—'}</div><div class="ring-lbl">Accuracy</div></div>
        </div>
        <div class="dash-stat"><div class="ds-num">${op.attempted}</div><div class="ds-lbl">Questions practiced</div></div>
        <div class="dash-stat"><div class="ds-num">${op.coverage}%</div><div class="ds-lbl">of ${op.total} covered</div></div>
        <div class="dash-stat"><div class="ds-num">${op.correct}</div><div class="ds-lbl">Correct answers</div></div>
      </div>
      <div class="dash-subjects">${subjectBars}</div>
    </div>`;
  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header">
        <h1>Welcome to StudyHub</h1>
      </div>
      <p class="lead">Your complete companion for ICSE Class 8 — clear notes, teacher's tips and exam-style practice across Physics, Chemistry, Biology, Geography, History and Civics.</p>
      ${dashHtml}
      <h2 style="margin-bottom:18px">🎓 Select Your Class</h2>
      <div class="card-grid">
        ${appData.classes.map(c => `
          <div class="card" onclick="navigateTo('subjects','${c.id}')">
            <div class="card-icon">${c.icon}</div>
            <h3>${c.name}</h3>
            <p>${appData.subjects.filter(s=>s.classId===c.id).length} subjects available</p>
            <div class="card-meta">
              <span>📖 ${appData.topics.filter(t=>appData.subjects.find(s=>s.id===t.subjectId&&s.classId===c.id)).length} chapters</span>
              <span>📝 ${appData.content.filter(ct=>appData.topics.find(t=>t.id===ct.topicId&&appData.subjects.find(s=>s.id===t.subjectId&&s.classId===c.id))).length} items</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== SUBJECTS =====
function renderSubjects(el) {
  const cls = appData.classes.find(c=>c.id===selectedClass);
  const subs = appData.subjects.filter(s=>s.classId===selectedClass);
  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header">
        <h1>${cls?.icon} ${cls?.name} - Subjects</h1>
      </div>
      <div class="card-grid">
        ${subs.map(s => {
          const tops = appData.topics.filter(t=>t.subjectId===s.id);
          const contentCount = appData.content.filter(c=>tops.some(t=>t.id===c.topicId)).length;
          const m = subjectMastery(s.id);
          const cls = _accClass(m.accuracy, m.attempted);
          return `
            <div class="card" onclick="navigateTo('topics','${s.id}')">
              <div class="card-icon">${s.icon}</div>
              <h3>${s.name}</h3>
              <p>${tops.length} chapters · ${contentCount} items</p>
              <div class="card-progress">
                <div class="cp-row"><span>Practiced</span><span><strong>${m.attempted}</strong>/${m.total}</span></div>
                <div class="progress-bar"><div class="progress-fill cov-${cls}" style="width:${Math.max(m.coverage,2)}%"></div></div>
                <div class="cp-row"><span>Accuracy</span><span class="acc-pill ${cls}">${m.attempted ? m.accuracy + '%' : 'not started'}</span></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ${subs.length===0?'<div class="empty-state"><div class="empty-icon">📭</div><h3>No subjects yet</h3><p>Click "Add New" to add subjects</p></div>':''}
    </div>
  `;
}

// ===== TOPICS =====
function renderTopics(el) {
  const sub = appData.subjects.find(s=>s.id===selectedSubject);
  const tops = appData.topics.filter(t=>t.subjectId===selectedSubject);
  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header">
        <h1>${sub?.icon} ${sub?.name} - Chapters</h1>
      </div>
      <div class="card-grid">
        ${tops.map(t => {
          const contents = appData.content.filter(c=>c.topicId===t.id);
          const notes = contents.filter(c=>c.type==='note').length;
          const mcqs = contents.filter(c=>c.type==='mcq').length;
          const qs = contents.length - notes;
          const m = chapterMastery(t.id);
          const cls = _accClass(m.accuracy, m.attempted);
          return `
            <div class="card" onclick="navigateTo('content','${t.id}')">
              <div class="card-icon">${t.icon}</div>
              <h3>${t.name}</h3>
              <div class="card-meta">
                <span>📝 ${notes} notes</span>
                <span>🔘 ${mcqs} MCQs</span>
                <span>❓ ${qs} questions</span>
              </div>
              <div class="card-progress">
                <div class="cp-row"><span>Practiced</span><span><strong>${m.attempted}</strong>/${m.total}</span></div>
                <div class="progress-bar"><div class="progress-fill cov-${cls}" style="width:${Math.max(m.coverage,2)}%"></div></div>
                <div class="cp-row"><span>Accuracy</span><span class="acc-pill ${cls}">${m.attempted ? m.accuracy + '%' : 'not started'}</span></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ${tops.length===0?'<div class="empty-state"><div class="empty-icon">📭</div><h3>No chapters yet</h3><p>Click "Add New" to add chapters and content</p></div>':''}
    </div>
  `;
}

// ===== CONTENT =====
function renderContent(el) {
  const topic = appData.topics.find(t=>t.id===selectedTopic);
  const contents = appData.content.filter(c=>c.topicId===selectedTopic);
  const notes = contents.filter(c=>c.type==='note');
  const questions = contents.filter(c=>c.type!=='note');

  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header">
        <h1>${topic?.icon} ${topic?.name}</h1>
      </div>
      <div class="stats-row">
        <div class="stat-card"><div class="stat-num">${notes.length}</div><div class="stat-label">Notes</div></div>
        <div class="stat-card"><div class="stat-num">${questions.filter(q=>q.type==='mcq').length}</div><div class="stat-label">MCQs</div></div>
        <div class="stat-card"><div class="stat-num">${questions.filter(q=>q.type==='true_false').length}</div><div class="stat-label">True/False</div></div>
        <div class="stat-card"><div class="stat-num">${questions.filter(q=>q.type==='fill_blank').length}</div><div class="stat-label">Fill Blanks</div></div>
        <div class="stat-card"><div class="stat-num">${questions.filter(q=>q.type==='short_answer').length}</div><div class="stat-label">Short/Long</div></div>
        <div class="stat-card stat-mastery" title="Your accuracy on auto-checked questions in this chapter. Click to reset." onclick="resetChapterProgress()">
          <div class="stat-num" id="mastery-num">${chapterMastery(selectedTopic).pct}%</div>
          <div class="stat-label">Mastery ↺</div>
          <div class="progress-bar" style="margin-top:6px"><div class="progress-fill" id="mastery-bar" style="width:${Math.max(chapterMastery(selectedTopic).pct,2)}%"></div></div>
        </div>
      </div>
      <div class="content-tabs">
        <div class="content-tab ${contentTab==='notes'?'active':''}" onclick="switchContentTab('notes')">📝 Notes & Concepts</div>
        <div class="content-tab ${contentTab==='questions'?'active':''}" onclick="switchContentTab('questions')">❓ Practice Questions</div>
      </div>
      <div id="content-body"></div>
    </div>
  `;

  if (contentTab === 'notes') renderNotes(notes);
  else renderQuestions(questions);
}

function switchContentTab(tab) {
  contentTab = tab;
  userAnswers = {};
  renderContent(document.getElementById('main-content'));
}

function renderNotes(notes) {
  const body = document.getElementById('content-body');
  if (notes.length === 0) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><h3>No notes yet</h3><p>Click "Add New" to create notes</p></div>';
    return;
  }
  const allQuestions = appData.content.filter(c => c.topicId === selectedTopic && c.type !== 'note');
  // Pool of questions by type so every note can offer a compact "Test yourself"
  // row — one jump per type (→ MCQ, → T/F, → Fill, → Q&A) — even when no
  // question explicitly links back to it.
  const XREF_TYPES = [['mcq','MCQ'], ['true_false','T/F'], ['fill_blank','Fill'], ['short_answer','Q&A']];
  const qByType = {};
  XREF_TYPES.forEach(([type]) => { qByType[type] = allQuestions.filter(q => q.type === type); });
  const cards = notes.map((n, i) => {
    const linked = allQuestions.filter(q => q.linksTo === n.id);
    const xrefBtns = XREF_TYPES.map(([type, label]) => {
      // Prefer a question of this type that links to this note; otherwise pick a
      // representative one, spread across notes so different notes lead elsewhere.
      const pool = qByType[type];
      if (!pool.length) return '';
      const q = linked.find(l => l.type === type) || pool[i % pool.length];
      return `<button class="xref-btn" onclick="jumpToQuestion('${q.id}')" title="${escHtml(q.question)}">→ ${label}</button>`;
    }).filter(Boolean).join('');
    const linkBar = xrefBtns ? `<div class="xref-bar"><span class="xref-label">Test yourself:</span>${xrefBtns}</div>` : '';
    const collapsed = notesCollapsed[n.id] ? ' collapsed' : '';
    return `
    <div class="note-block fade-in${collapsed}" id="note-${n.id}" style="animation-delay:${Math.min(i,10)*0.03}s">
      <div class="note-head" onclick="toggleNote('${n.id}')">
        <div class="note-number">${i+1}</div>
        <h3>${escHtml(n.subtopic)}${n.source === 'neet' ? ' <span class="src-chip" title="From the NEET exam-practice bank">NEET</span>' : ''}</h3>
        <span class="note-chevron" aria-hidden="true">▾</span>
      </div>
      <div class="note-body">
        <p style="font-weight:600;margin-bottom:8px">${fmtText(n.content)}</p>
        <p>${fmtText(n.explanation||'')}</p>
        ${n.teacherTip?`<div class="tip-box"><strong>💡 Teacher's Tip:</strong>${fmtText(n.teacherTip)}</div>`:''}
        ${n.examTip?`<div class="tip-box exam"><strong>🎯 Exam Tip:</strong>${fmtText(n.examTip)}</div>`:''}
        ${linkBar}
        <div style="margin-top:10px;display:flex;gap:6px">
          <button class="btn btn-sm btn-outline" onclick="editContent('${n.id}')">✏️ Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteContent('${n.id}')">🗑️</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const allFolded = notes.every(n => notesCollapsed[n.id]);
  body.innerHTML =
    `<div class="notes-toolbar"><button class="btn btn-sm btn-outline" onclick="toggleAllNotes()">${allFolded ? '⊞ Expand all' : '⊟ Collapse all'}</button></div>` +
    `<div class="notes-grid">${cards}</div>`;
}

function renderQuestions(questions) {
  const body = document.getElementById('content-body');

  const types = [
    {key:'all',label:'All',icon:'📋'},
    {key:'true_false',label:'True/False',icon:'✅'},
    {key:'fill_blank',label:'Fill Blanks',icon:'✍️'},
    {key:'mcq',label:'MCQ',icon:'🔘'},
    {key:'match',label:'Match',icon:'🔗'},
    {key:'short_answer',label:'Short/Long Answer',icon:'📋'}
  ];

  const filtered = questionFilter === 'all' ? questions : questions.filter(q=>q.type===questionFilter);

  let tabsHtml = `<div class="question-type-tabs">${types.map(t =>
    `<div class="q-tab ${questionFilter===t.key?'active':''}" onclick="setQuestionFilter('${t.key}')">${t.icon} ${t.label} (${t.key==='all'?questions.length:questions.filter(q=>q.type===t.key).length})</div>`
  ).join('')}</div>`;

  let qHtml = '';
  if (filtered.length === 0) {
    qHtml = '<div class="empty-state"><div class="empty-icon">❓</div><h3>No questions of this type</h3></div>';
  } else {
    qHtml = '<div class="questions-grid">' +
      filtered.map((q, i) => renderSingleQuestion(q, i)).join('') +
      '</div>';
  }

  body.innerHTML = tabsHtml + qHtml;
}

function setQuestionFilter(f) {
  questionFilter = f;
  userAnswers = {};
  const contents = appData.content.filter(c=>c.topicId===selectedTopic);
  renderQuestions(contents.filter(c=>c.type!=='note'));
}

function renderSingleQuestion(q, idx, targeted) {
  const answered = userAnswers[q.id];
  // Cap the stagger so long lists never wait seconds to appear; a targeted
  // single-card re-render skips the fade entirely (updates in place).
  const delay = Math.min(idx, 10) * 0.025;
  let html = `<div class="question-card${targeted ? '' : ' fade-in'}" id="qcard-${q.id}" data-idx="${idx}" style="${targeted ? '' : `animation-delay:${delay}s`}">`;
  const typeLabels = {true_false:'TRUE / FALSE',fill_blank:'FILL IN THE BLANK',mcq:'MULTIPLE CHOICE',match:'MATCH THE FOLLOWING',short_answer:'SHORT / LONG ANSWER'};
  const linkedNote = q.linksTo ? appData.content.find(c => c.id === q.linksTo && c.type === 'note') : null;
  html += `<div class="q-label">${typeLabels[q.type]||q.type}${
    q.source === 'neet' ? `<span class="src-chip" title="From the NEET exam-practice bank">NEET</span>` : ''
  }${
    linkedNote ? `<button class="xref-btn xref-back" onclick="jumpToNote('${linkedNote.id}')" title="${escHtml(linkedNote.subtopic)}">↩ Back to Notes</button>` : ''
  }</div>`;
  html += `<div class="q-text">Q${idx+1}. ${escHtml(q.question)}</div>`;

  if (q.type === 'true_false') {
    html += `<div class="tf-options">
      <button class="tf-btn ${answered==='true'?(q.correctAnswer==='true'?'selected-true':'selected-false'):''}" onclick="answerTF('${q.id}','true')">✅ True</button>
      <button class="tf-btn ${answered==='false'?(q.correctAnswer==='false'?'selected-true':'selected-false'):''}" onclick="answerTF('${q.id}','false')">❌ False</button>
    </div>`;
  }

  if (q.type === 'mcq' && q.options) {
    html += `<div class="q-options">`;
    const letters = ['A','B','C','D'];
    q.options.forEach((opt, oi) => {
      let cls = '';
      if (answered !== undefined) {
        if (oi === q.correctOption) cls = 'correct';
        else if (answered === oi) cls = 'wrong';
      }
      html += `<div class="q-option ${cls} ${answered===oi&&oi!==q.correctOption?'selected':''}" onclick="answerMCQ('${q.id}',${oi})">
        <span class="opt-letter">${letters[oi]}</span> ${escHtml(opt)}
      </div>`;
    });
    html += `</div>`;
  }

  if (q.type === 'fill_blank') {
    const isCorrect = answered && answered.toLowerCase().trim() === q.blankAnswer.toLowerCase().trim();
    html += `<div style="margin:10px 0">
      <input class="blank-input ${answered?(isCorrect?'correct':'wrong'):''}" placeholder="Type your answer..." value="${answered||''}" oninput="userAnswers['${q.id}']=this.value" id="blank-${q.id}">
      <button class="btn btn-sm btn-primary" style="margin-left:8px" onclick="checkBlank('${q.id}')">Check</button>
    </div>`;
  }

  if (q.type === 'match' && q.pairs) {
    html += `<div class="match-grid"><div><h4>Column A</h4>`;
    q.pairs.forEach((p,pi) => html += `<div class="match-item">${String.fromCharCode(97+pi)}) ${escHtml(p.left)}</div>`);
    html += `</div><div><h4>Column B</h4>`;
    const shuffled = [...q.pairs].sort(()=>Math.random()-0.5);
    shuffled.forEach((p,pi) => html += `<div class="match-item">${String.fromCharCode(105+pi)}) ${escHtml(p.right)}</div>`);
    html += `</div></div>`;
  }

  // Toggle answer
  html += `<div class="toggle-answer" onclick="toggleAnswer('ans-${q.id}')">👁️ Show Answer & Explanation</div>`;
  html += `<div class="answer-reveal ${answered!==undefined?'show':''}" id="ans-${q.id}">
    <p><strong>✅ Answer:</strong> ${fmtText(q.answer||'')}</p>
    ${q.teacherTip?`<div class="tip-box" style="margin-top:8px"><strong>💡 Teacher's Tip:</strong> ${fmtText(q.teacherTip)}</div>`:''}
    ${q.examTip?`<div class="tip-box exam" style="margin-top:6px"><strong>🎯 Exam Tip:</strong> ${fmtText(q.examTip)}</div>`:''}
    ${linkedNote?`<div style="margin-top:8px"><button class="xref-btn xref-back" onclick="jumpToNote('${linkedNote.id}')">↩ Revise: ${escHtml(linkedNote.subtopic)}</button></div>`:''}
  </div>`;

  html += `<div style="margin-top:10px;display:flex;gap:6px">
    <button class="btn btn-sm btn-outline" onclick="editContent('${q.id}')">✏️ Edit</button>
    <button class="btn btn-sm btn-danger" onclick="deleteContent('${q.id}')">🗑️</button>
  </div>`;
  html += `</div>`;
  return html;
}

// Re-render ONLY the affected question card instead of the whole list.
// This keeps answering instant even on chapters with 130+ questions.
function updateQuestionCard(id) {
  const card = document.getElementById('qcard-' + id);
  const q = appData.content.find(c => c.id === id);
  if (!card || !q) return;
  const idx = parseInt(card.getAttribute('data-idx'), 10) || 0;
  card.outerHTML = renderSingleQuestion(q, idx, true);
}

function answerTF(id, val) {
  userAnswers[id] = val;
  const q = appData.content.find(c => c.id === id);
  if (q) recordAttempt(id, val === q.correctAnswer);
  updateQuestionCard(id);
}

function answerMCQ(id, val) {
  userAnswers[id] = val;
  const q = appData.content.find(c => c.id === id);
  if (q) recordAttempt(id, val === q.correctOption);
  updateQuestionCard(id);
}

function checkBlank(id) {
  const input = document.getElementById('blank-'+id);
  userAnswers[id] = input.value;
  const q = appData.content.find(c => c.id === id);
  if (q) recordAttempt(id, input.value.toLowerCase().trim() === (q.blankAnswer||'').toLowerCase().trim());
  updateQuestionCard(id);
}

function toggleAnswer(elId) {
  const box = document.getElementById(elId);
  box.classList.toggle('show');
  // Revealing a self-checked answer (short/long, match) counts as "seen".
  if (box.classList.contains('show')) {
    const qId = elId.replace(/^ans-/, '');
    const q = appData.content.find(c => c.id === qId);
    if (q && (q.type === 'short_answer' || q.type === 'match') && !studyProgress[qId]) {
      recordAttempt(qId, null);
    }
  }
}

// ============================================================
// ADD / EDIT CONTENT
// ============================================================
function openAddContent() {
  document.getElementById('f-edit-id').value = '';
  document.getElementById('modal-title').textContent = 'Add New Content';
  document.getElementById('content-form').reset();
  populateFormSelects();
  // Pre-fill current selection
  if (selectedClass) document.getElementById('f-class').value = selectedClass;
  onFormClassChange();
  if (selectedSubject) document.getElementById('f-subject').value = selectedSubject;
  onFormSubjectChange();
  if (selectedTopic) document.getElementById('f-topic').value = selectedTopic;
  toggleQuestionFields();
  openModal('modal-add');
}

function populateFormSelects() {
  const fClass = document.getElementById('f-class');
  fClass.innerHTML = '<option value="">Select Class</option>' + appData.classes.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
}

function onFormClassChange() {
  const cls = document.getElementById('f-class').value;
  const fSub = document.getElementById('f-subject');
  const subs = appData.subjects.filter(s=>s.classId===cls);
  fSub.innerHTML = '<option value="">Select Subject</option>' + subs.map(s=>`<option value="${s.id}">${s.icon} ${s.name}</option>`).join('');
  onFormSubjectChange();
}

function onFormSubjectChange() {
  const sub = document.getElementById('f-subject').value;
  const fTopic = document.getElementById('f-topic');
  const tops = appData.topics.filter(t=>t.subjectId===sub);
  fTopic.innerHTML = '<option value="">Select existing topic</option>' + tops.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
}

function toggleQuestionFields() {
  const type = document.getElementById('f-type').value;
  const noteFields = document.getElementById('note-fields');
  const qFields = document.getElementById('question-fields');
  const mcqOpts = document.getElementById('mcq-options');
  const tfAns = document.getElementById('tf-answer');
  const blankAns = document.getElementById('blank-answer');
  const matchF = document.getElementById('match-fields');

  if (type === 'note') {
    noteFields.style.display = 'block'; qFields.style.display = 'none';
  } else {
    noteFields.style.display = 'none'; qFields.style.display = 'block';
    mcqOpts.style.display = type==='mcq'?'block':'none';
    tfAns.style.display = type==='true_false'?'block':'none';
    blankAns.style.display = type==='fill_blank'?'block':'none';
    matchF.style.display = type==='match'?'block':'none';
  }
}

function saveContent(e) {
  e.preventDefault();
  const editId = document.getElementById('f-edit-id').value;
  const classId = document.getElementById('f-class').value;
  const subjectId = document.getElementById('f-subject').value;
  let topicId = document.getElementById('f-topic').value;
  const newTopic = document.getElementById('f-new-topic').value.trim();
  const subtopic = document.getElementById('f-subtopic').value.trim();
  const type = document.getElementById('f-type').value;

  if (!classId || !subjectId) { alert('Please select class and subject'); return; }
  if (!topicId && !newTopic) { alert('Please select or create a topic'); return; }

  // Create new topic if needed
  if (newTopic && !topicId) {
    topicId = 'topic-' + Date.now();
    appData.topics.push({ id: topicId, subjectId, classId, name: newTopic, icon: '📖' });
  }

  let item = { id: editId || ('c-' + Date.now()), topicId, type, subtopic };

  if (type === 'note') {
    item.content = document.getElementById('f-note-content').value;
    item.explanation = document.getElementById('f-note-explanation').value;
    item.teacherTip = document.getElementById('f-teacher-tip').value;
    item.examTip = document.getElementById('f-exam-tip').value;
  } else {
    item.question = document.getElementById('f-q-text').value;
    item.answer = document.getElementById('f-q-answer').value;
    item.teacherTip = document.getElementById('f-q-teacher-tip').value;
    item.examTip = document.getElementById('f-q-exam-tip').value;

    if (type === 'mcq') {
      item.options = [
        document.getElementById('f-opt-a').value,
        document.getElementById('f-opt-b').value,
        document.getElementById('f-opt-c').value,
        document.getElementById('f-opt-d').value
      ];
      item.correctOption = ['a','b','c','d'].indexOf(document.getElementById('f-correct-opt').value.toLowerCase());
    }
    if (type === 'true_false') {
      item.correctAnswer = document.getElementById('f-tf-answer').value;
    }
    if (type === 'fill_blank') {
      item.blankAnswer = document.getElementById('f-blank-answer').value;
    }
    if (type === 'match') {
      const pairsStr = document.getElementById('f-match-pairs').value;
      item.pairs = pairsStr.split(',').map(p => {
        const [l,r] = p.split('=');
        return { left: (l||'').trim(), right: (r||'').trim() };
      }).filter(p=>p.left&&p.right);
    }
  }

  if (editId) {
    const idx = appData.content.findIndex(c=>c.id===editId);
    if (idx>=0) appData.content[idx] = item;
  } else {
    appData.content.push(item);
  }

  saveData();
  closeModal('modal-add');
  render();
}

function editContent(id) {
  const item = appData.content.find(c=>c.id===id);
  if (!item) return;
  const topic = appData.topics.find(t=>t.id===item.topicId);
  const subject = topic ? appData.subjects.find(s=>s.id===topic.subjectId) : null;

  document.getElementById('f-edit-id').value = id;
  document.getElementById('modal-title').textContent = 'Edit Content';
  populateFormSelects();

  if (subject) {
    document.getElementById('f-class').value = subject.classId;
    onFormClassChange();
    document.getElementById('f-subject').value = subject.id;
    onFormSubjectChange();
  }
  if (topic) document.getElementById('f-topic').value = topic.id;
  document.getElementById('f-subtopic').value = item.subtopic || '';
  document.getElementById('f-type').value = item.type;
  toggleQuestionFields();

  if (item.type === 'note') {
    document.getElementById('f-note-content').value = item.content || '';
    document.getElementById('f-note-explanation').value = item.explanation || '';
    document.getElementById('f-teacher-tip').value = item.teacherTip || '';
    document.getElementById('f-exam-tip').value = item.examTip || '';
  } else {
    document.getElementById('f-q-text').value = item.question || '';
    document.getElementById('f-q-answer').value = item.answer || '';
    document.getElementById('f-q-teacher-tip').value = item.teacherTip || '';
    document.getElementById('f-q-exam-tip').value = item.examTip || '';
    if (item.type === 'mcq' && item.options) {
      document.getElementById('f-opt-a').value = item.options[0]||'';
      document.getElementById('f-opt-b').value = item.options[1]||'';
      document.getElementById('f-opt-c').value = item.options[2]||'';
      document.getElementById('f-opt-d').value = item.options[3]||'';
      document.getElementById('f-correct-opt').value = ['a','b','c','d'][item.correctOption]||'';
    }
    if (item.type === 'true_false') document.getElementById('f-tf-answer').value = item.correctAnswer||'true';
    if (item.type === 'fill_blank') document.getElementById('f-blank-answer').value = item.blankAnswer||'';
    if (item.type === 'match' && item.pairs) {
      document.getElementById('f-match-pairs').value = item.pairs.map(p=>`${p.left}=${p.right}`).join(', ');
    }
  }
  openModal('modal-add');
}

function deleteContent(id) {
  if (!confirm('Are you sure you want to delete this item?')) return;
  appData.content = appData.content.filter(c => c.id !== id);
  if (!isUserCreatedContentId(id)) {
    if (!appData.deletedContentIds) appData.deletedContentIds = [];
    if (!appData.deletedContentIds.includes(id)) appData.deletedContentIds.push(id);
  }
  if (!saveData()) return;
  showToast('success', '🗑️ Item deleted.');
  render();
}

// ============================================================
// CONTENT MANAGER
// ============================================================
function openContentManager() {
  const mgrClass = document.getElementById('mgr-class');
  mgrClass.innerHTML = appData.classes.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
  const mgrSub = document.getElementById('mgr-subject');
  mgrSub.innerHTML = '<option value="">All Subjects</option>' + appData.subjects.map(s=>`<option value="${s.id}">${s.icon} ${s.name}</option>`).join('');
  filterManager();
  openModal('modal-manage');
}

function filterManager() {
  const cls = document.getElementById('mgr-class').value;
  const sub = document.getElementById('mgr-subject').value;
  const type = document.getElementById('mgr-type').value;

  let items = appData.content;
  if (sub) items = items.filter(c => { const t = appData.topics.find(t=>t.id===c.topicId); return t && t.subjectId === sub; });
  if (type) items = items.filter(c=>c.type===type);

  const list = document.getElementById('manager-list');
  if (items.length === 0) {
    list.innerHTML = '<div class="empty-state"><h3>No items found</h3></div>';
    return;
  }

  const typeIcons = {note:'📝',true_false:'✅',fill_blank:'✍️',mcq:'🔘',match:'🔗',short_answer:'📋'};
  list.innerHTML = items.map(item => {
    const topic = appData.topics.find(t=>t.id===item.topicId);
    return `<div class="mgr-row">
      <div style="flex:1;min-width:0">
        <span class="mgr-meta">${typeIcons[item.type]||''} ${item.type} • ${topic?.name||'Unknown'}</span>
        <div class="mgr-title">${escHtml(item.subtopic||item.question||'').substring(0,90)}</div>
      </div>
      <div style="display:flex;gap:7px;margin-left:12px;flex-shrink:0">
        <button class="btn btn-sm btn-outline" onclick="closeModal('modal-manage');editContent('${item.id}')">✏️</button>
        <button class="btn btn-sm btn-danger" onclick="deleteContent('${item.id}');filterManager()">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

// ============================================================
// SEARCH
// ============================================================
let _searchTimer = null;
// Debounced entry point bound to the input's oninput — avoids scanning all
// records on every keystroke.
function searchTopics(query) {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => _runSearch(query), 160);
}

function _runSearch(query) {
  if (!query.trim()) { render(); return; }
  const q = query.toLowerCase();
  const results = appData.content.filter(c =>
    (c.subtopic||'').toLowerCase().includes(q) ||
    (c.content||'').toLowerCase().includes(q) ||
    (c.question||'').toLowerCase().includes(q) ||
    (c.answer||'').toLowerCase().includes(q)
  );

  const main = document.getElementById('main-content');
  if (results.length === 0) {
    main.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No results found</h3><p>Try a different search term</p></div>';
    return;
  }

  main.innerHTML = `<div class="section-header"><h1>🔍 Search Results (${results.length})</h1></div>` +
    results.map((item, i) => {
      const topic = appData.topics.find(t=>t.id===item.topicId);
      if (item.type === 'note') {
        return `<div class="note-block fade-in"><h3>${escHtml(item.subtopic)}</h3><p style="font-size:0.8rem;color:var(--ink-3);margin-bottom:6px">${topic?.name||''}</p><p>${escHtml(item.content||'')}</p></div>`;
      } else {
        return renderSingleQuestion(item, i);
      }
    }).join('');
}

// ============================================================
// UTILS
// ============================================================
function escHtml(str) { if(!str) return ''; return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/\n/g,'<br>'); }
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('show');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) bd.classList.remove('show');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const open = sidebar.classList.toggle('show');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) bd.classList.toggle('show', open);
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
function exportData() {
  const exportObj = {
    _studyhub: true,
    _version: DATA_VERSION,
    _exportedAt: new Date().toISOString(),
    _stats: {
      classes: appData.classes.length,
      subjects: appData.subjects.length,
      topics: appData.topics.length,
      content: appData.content.length
    },
    classes: appData.classes,
    subjects: appData.subjects,
    topics: appData.topics,
    content: appData.content,
    deletedContentIds: appData.deletedContentIds || [],
    progress: studyProgress
  };
  const json = JSON.stringify(exportObj, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const date = new Date().toISOString().slice(0,10);
  a.download = `studyhub-backup-${date}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('success', '📥 Backup downloaded! (' + appData.content.length + ' items)');
}

let pendingImport = null;

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  event.target.value = ''; // reset so same file can be re-selected
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      // Validate structure
      if (!data.content || !Array.isArray(data.content)) {
        showToast('error', '❌ Invalid file — missing "content" array.');
        return;
      }
      if (!data.topics || !data.subjects || !data.classes) {
        showToast('error', '❌ Invalid file — missing classes/subjects/topics.');
        return;
      }
      pendingImport = data;
      showImportPreview(file.name, data);
      openModal('modal-import');
    } catch (err) {
      showToast('error', '❌ Could not parse file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function showImportPreview(filename, data) {
  document.getElementById('import-filename').textContent = '📄 File: ' + filename;
  const cur = appData;
  const imp = data;

  // Count types in imported
  const impTypes = {};
  imp.content.forEach(c => impTypes[c.type] = (impTypes[c.type]||0)+1);
  const curTypes = {};
  cur.content.forEach(c => curTypes[c.type] = (curTypes[c.type]||0)+1);

  document.getElementById('import-preview').innerHTML = `
    <div class="import-col">
      <h4>📊 Current Data</h4>
      <div class="ip-row"><span>Classes</span><span>${cur.classes.length}</span></div>
      <div class="ip-row"><span>Subjects</span><span>${cur.subjects.length}</span></div>
      <div class="ip-row"><span>Topics</span><span>${cur.topics.length}</span></div>
      <div class="ip-row"><span>Total Items</span><span>${cur.content.length}</span></div>
      <div class="ip-row"><span>📝 Notes</span><span>${curTypes.note||0}</span></div>
      <div class="ip-row"><span>❓ Questions</span><span>${cur.content.length-(curTypes.note||0)}</span></div>
    </div>
    <div class="import-col">
      <h4>📦 Imported File</h4>
      <div class="ip-row"><span>Classes</span><span>${imp.classes.length}</span></div>
      <div class="ip-row"><span>Subjects</span><span>${imp.subjects.length}</span></div>
      <div class="ip-row"><span>Topics</span><span>${imp.topics.length}</span></div>
      <div class="ip-row"><span>Total Items</span><span>${imp.content.length}</span></div>
      <div class="ip-row"><span>📝 Notes</span><span>${impTypes.note||0}</span></div>
      <div class="ip-row"><span>❓ Questions</span><span>${imp.content.length-(impTypes.note||0)}</span></div>
    </div>
  `;
}

function confirmImport() {
  if (!pendingImport) return;
  const mode = document.querySelector('input[name="import-mode"]:checked').value;
  const imp = pendingImport;

  if (mode === 'replace') {
    appData.classes = imp.classes;
    appData.subjects = imp.subjects;
    appData.topics = imp.topics;
    appData.content = imp.content;
    appData.deletedContentIds = imp.deletedContentIds || [];
    if (imp.progress && typeof imp.progress === 'object') { studyProgress = imp.progress; saveProgress(); }
    saveData();
    showToast('success', '🔄 Data replaced! ' + appData.content.length + ' items loaded.');
  } else {
    // Merge mode
    const existingClassIds = new Set(appData.classes.map(c=>c.id));
    imp.classes.forEach(c => { if (!existingClassIds.has(c.id)) appData.classes.push(c); });

    const existingSubIds = new Set(appData.subjects.map(s=>s.id));
    imp.subjects.forEach(s => { if (!existingSubIds.has(s.id)) appData.subjects.push(s); });

    const existingTopicIds = new Set(appData.topics.map(t=>t.id));
    imp.topics.forEach(t => { if (!existingTopicIds.has(t.id)) appData.topics.push(t); });

    const existingContentIds = new Set(appData.content.map(c=>c.id));
    let added = 0;
    imp.content.forEach(c => {
      if (!existingContentIds.has(c.id)) {
        appData.content.push(c);
        existingContentIds.add(c.id);
        added++;
      }
    });
    const del = new Set(appData.deletedContentIds || []);
    (imp.deletedContentIds || []).forEach(function (id) { del.add(id); });
    appData.deletedContentIds = Array.from(del);
    if (imp.progress && typeof imp.progress === 'object') {
      // keep local progress, fill in any questions only the imported file has
      studyProgress = Object.assign({}, imp.progress, studyProgress);
      saveProgress();
    }
    saveData();
    showToast('success', '🔀 Merged! ' + added + ' new items added. Total: ' + appData.content.length);
  }

  pendingImport = null;
  closeModal('modal-import');
  render();
}

// ============================================================
// TOAST
// ============================================================
function showToast(type, message) {
  const t = document.getElementById('toast');
  t.className = 'toast toast-' + type + ' show';
  t.textContent = message;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.classList.remove('show'); }, 3500);
}

// ============================================================
// PWA (offline on iPad / served over http)
// ============================================================
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol === 'file:') return;
  navigator.serviceWorker.register('sw.js').catch(function (err) {
    console.warn('[StudyHub] Service worker registration failed:', err);
  });
}

// ============================================================
// INIT
// ============================================================
function initApp() {
  // The canonical dataset lives in the bundled JS modules (data-core.js +
  // the per-subject arrays), merged into DEFAULT_DATA by loadData(). We do
  // NOT seed from data/studyhub_db.json on the web any more: that file is a
  // local/desktop save artifact and a stale copy used to pin the version and
  // inject phantom subjects. Building straight from DEFAULT_DATA is correct
  // and always current.
  loadData();
  loadProgress();
  render();
  setupPersistenceGuards();
  registerServiceWorker();
}

initApp();
