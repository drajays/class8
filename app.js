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
let contentTab = 'notes'; // notes, mindmap, cheatsheet, oneword, questions, diagrams
let mindMapIndex = 0;
let activeWordId = null;
let wordCardOrder = [];
let questionFilter = 'all'; // all, true_false, fill_blank, mcq, match, short_answer
let userAnswers = {};

const DATA_VERSION = 44;
const DAILY_MCQ_GOAL = 15;
const SRS_DAYS = [1, 3, 7, 14];

const PHYSICS_TOPIC_IDS = new Set([
  'ch1-matter', 'ch2-measurement', 'ch3-force', 'ch4-energy',
  'ch5-light', 'ch6-heat', 'ch7-sound', 'ch8-electricity'
]);

function isPhysicsTopic(topicId) {
  return PHYSICS_TOPIC_IDS.has(topicId);
}

function isPhysicsPipelineItem(c) {
  return !!(c && c.id && String(c.id).startsWith('phy-s'));
}

/** Notes for a chapter — physics uses Srijan pipeline (phy-s*) only. */
function topicNotes(topicId) {
  const all = appData.content.filter(c =>
    (!topicId || c.topicId === topicId) && c.type === 'note'
  );
  if (!topicId) {
    return all.filter(c => !isPhysicsTopic(c.topicId) || isPhysicsPipelineItem(c));
  }
  if (!isPhysicsTopic(topicId)) return all;
  const pipeline = all.filter(isPhysicsPipelineItem);
  return pipeline.length ? pipeline : all;
}

/** Text questions for a chapter — physics uses pipeline bank only. */
function topicTextQuestions(topicId) {
  const all = appData.content.filter(c =>
    (!topicId || c.topicId === topicId) && c.type !== 'note' && !isDiagramMcq(c)
  );
  if (!topicId) {
    return all.filter(c => !isPhysicsTopic(c.topicId) || isPhysicsPipelineItem(c));
  }
  if (!isPhysicsTopic(topicId)) return all;
  const pipeline = all.filter(isPhysicsPipelineItem);
  return pipeline.length ? pipeline : all;
}

function physicsContentStats(topicId) {
  const qs = topicTextQuestions(topicId);
  return {
    notes: topicNotes(topicId).length,
    total: qs.length,
    mcq: qs.filter(q => q.type === 'mcq').length,
    true_false: qs.filter(q => q.type === 'true_false').length,
    fill_blank: qs.filter(q => q.type === 'fill_blank').length,
    match: qs.filter(q => q.type === 'match').length,
    short_answer: qs.filter(q => q.type === 'short_answer').length
  };
}

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
    typeof CHEMISTRY_NEET_DATA !== 'undefined' ? CHEMISTRY_NEET_DATA : null,
    typeof HISTORY_CIVICS_DATA !== 'undefined' ? HISTORY_CIVICS_DATA : null,
    typeof GEOGRAPHY_DATA !== 'undefined' ? GEOGRAPHY_DATA : null,
    typeof PHYSICS_QBANK !== 'undefined' ? PHYSICS_QBANK : null,
    typeof PHYSICS_NEET_DATA !== 'undefined' ? PHYSICS_NEET_DATA : null
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
        saveData({ skipSync: true });
      }
      return;
    }
  }
  appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  appData.deletedContentIds = [];
  localStorage.setItem('studyhub_version', String(DATA_VERSION));
  saveData({ skipSync: true });
}

function markSyncDirty() {
  if (window._suppressSyncDirty) return;
  if (typeof updateSyncStatusUI === 'function') updateSyncStatusUI();
  try {
    const meta = JSON.parse(localStorage.getItem('studyhub_sync_meta') || '{}');
    meta.dirty = true;
    meta.lastLocalSave = new Date().toISOString();
    localStorage.setItem('studyhub_sync_meta', JSON.stringify(meta));
  } catch (e) { /* non-fatal */ }
}

function clearSyncDirty(remoteMeta) {
  try {
    const meta = JSON.parse(localStorage.getItem('studyhub_sync_meta') || '{}');
    meta.dirty = false;
    if (remoteMeta) {
      if (remoteMeta.sha) meta.remoteSha = remoteMeta.sha;
      if (remoteMeta.exportedAt) meta.lastRemoteAt = remoteMeta.exportedAt;
    }
    localStorage.setItem('studyhub_sync_meta', JSON.stringify(meta));
  } catch (e) { /* non-fatal */ }
  if (typeof updateSyncStatusUI === 'function') updateSyncStatusUI();
}

function saveData(opts) {
  if (!appData) return false;
  const skipSync = opts && opts.skipSync;
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
    if (!skipSync) markSyncDirty();
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
// PROGRESS & LEARNING JOURNEY — persisted locally
//   studyProgress[qId] = { attempts, correct, lastResult, lastAt,
//     guessed, streak, srsNextAt, srsLevel }
//   studyBookmarks = Set of qIds
//   studyActivity = { 'YYYY-MM-DD': { mcqs } }
// ============================================================
let studyProgress = {};
let studyBookmarks = new Set();
let studyActivity = {};
let revisionTab = 'mistakes'; // mistakes | bookmarks | due
let quizSession = null;

function loadProgress() {
  window._suppressSyncDirty = true;
  try {
    const raw = localStorage.getItem('studyhub_progress');
    studyProgress = raw ? JSON.parse(raw) : {};
  } catch (e) { studyProgress = {}; }
  if (!studyProgress || typeof studyProgress !== 'object') studyProgress = {};
  try {
    const bm = localStorage.getItem('studyhub_bookmarks');
    studyBookmarks = new Set(bm ? JSON.parse(bm) : []);
  } catch (e) { studyBookmarks = new Set(); }
  try {
    const act = localStorage.getItem('studyhub_activity');
    studyActivity = act ? JSON.parse(act) : {};
  } catch (e) { studyActivity = {}; }
  window._suppressSyncDirty = false;
}

function saveProgress() {
  try { localStorage.setItem('studyhub_progress', JSON.stringify(studyProgress)); }
  catch (e) { /* storage full — non-fatal */ }
  markSyncDirty();
}

function saveBookmarks() {
  try { localStorage.setItem('studyhub_bookmarks', JSON.stringify([...studyBookmarks])); }
  catch (e) { /* non-fatal */ }
  markSyncDirty();
}

function saveActivity() {
  try { localStorage.setItem('studyhub_activity', JSON.stringify(studyActivity)); }
  catch (e) { /* non-fatal */ }
  markSyncDirty();
}

function _progressDefaults() {
  return { attempts: 0, correct: 0, lastResult: null, lastAt: null, guessed: false, streak: 0, srsNextAt: null, srsLevel: 0 };
}

function _scheduleSrs(p, wasWrong) {
  if (wasWrong) {
    p.streak = 0;
    p.srsLevel = 0;
    p.srsNextAt = _daysFromNow(SRS_DAYS[0]);
  } else if (p.streak >= 2) {
    p.srsNextAt = null;
  } else {
    const lvl = Math.min(p.srsLevel + 1, SRS_DAYS.length - 1);
    p.srsLevel = lvl;
    p.srsNextAt = _daysFromNow(SRS_DAYS[lvl]);
  }
}

function _daysFromNow(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

function recordDailyMcq() {
  const key = new Date().toISOString().slice(0, 10);
  if (!studyActivity[key]) studyActivity[key] = { mcqs: 0 };
  studyActivity[key].mcqs += 1;
  saveActivity();
}

function getDailyMcqCount() {
  const key = new Date().toISOString().slice(0, 10);
  return (studyActivity[key] && studyActivity[key].mcqs) || 0;
}

function getStreak() {
  let streak = 0;
  const d = new Date();
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (studyActivity[key] && studyActivity[key].mcqs > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  return streak;
}

function gradableQuestions(topicId) {
  const qs = topicTextQuestions(topicId);
  return qs.filter(c => c.type !== 'short_answer' && c.type !== 'match');
}

function isQuizType(q) {
  return q.type === 'mcq' || q.type === 'true_false' || q.type === 'fill_blank';
}

function isMistake(qId) {
  const p = studyProgress[qId];
  if (!p || !p.attempts) return false;
  if (p.lastResult === 'wrong') return true;
  if (p.guessed && p.lastResult === 'correct') return true;
  return false;
}

function isMastered(qId) {
  const p = studyProgress[qId];
  return !!(p && p.streak >= 2 && p.lastResult === 'correct');
}

function getMistakeQuestions(topicId) {
  return gradableQuestions(topicId).filter(q => isMistake(q.id));
}

function getDueForReview(topicId) {
  const now = Date.now();
  return gradableQuestions(topicId).filter(q => {
    const p = studyProgress[q.id];
    if (!p || !p.srsNextAt || isMastered(q.id)) return false;
    return new Date(p.srsNextAt).getTime() <= now;
  });
}

function getBookmarkedQuestions() {
  return [...studyBookmarks].map(id => appData.content.find(c => c.id === id)).filter(Boolean);
}

function toggleBookmark(qId) {
  if (studyBookmarks.has(qId)) studyBookmarks.delete(qId);
  else studyBookmarks.add(qId);
  saveBookmarks();
}

function isBookmarked(qId) {
  return studyBookmarks.has(qId);
}

// Record an answer attempt. isCorrect may be true/false, or null for
// "seen only" items. meta: { guessed, timeMs, inQuiz }
function recordAttempt(qId, isCorrect, meta) {
  meta = meta || {};
  const p = Object.assign(_progressDefaults(), studyProgress[qId] || {});
  p.attempts += 1;
  if (isCorrect === true) {
    p.correct += 1;
    p.streak = (p.lastResult === 'correct' ? p.streak : 0) + 1;
  } else if (isCorrect === false) {
    p.streak = 0;
  }
  p.lastResult = isCorrect === true ? 'correct' : (isCorrect === false ? 'wrong' : 'seen');
  p.lastAt = new Date().toISOString();
  if (meta.guessed !== undefined) p.guessed = !!meta.guessed;
  if (isCorrect === false || (meta.guessed && isCorrect === true)) {
    _scheduleSrs(p, true);
  } else if (isCorrect === true && p.srsNextAt) {
    _scheduleSrs(p, false);
  }
  studyProgress[qId] = p;
  saveProgress();
  if (meta.inQuiz && isCorrect !== null) recordDailyMcq();
  updateMasteryBadge();
}

// Mastery summary for a chapter (topicId): attempted vs total gradable
// questions, and accuracy across attempted ones.
function chapterMastery(topicId) {
  const gradable = isPhysicsTopic(topicId)
    ? gradableQuestions(topicId)
    : appData.content.filter(c => c.topicId === topicId && c.type !== 'note' && c.type !== 'short_answer');
  let attempted = 0, correct = 0;
  gradable.forEach(q => {
    const p = studyProgress[q.id];
    if (p && p.attempts > 0) { attempted++; if (p.lastResult === 'correct') correct++; }
  });
  const total = gradable.length || 1;
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  return {
    attempted,
    total: gradable.length,
    correct,
    pct: accuracy,
    coverage: Math.round((attempted / total) * 100),
    accuracy
  };
}

// Aggregate mastery across every gradable question in a subject.
function subjectMastery(subjectId) {
  const topics = appData.topics.filter(t => t.subjectId === subjectId);
  const topicIds = new Set(topics.map(t => t.id));
  const gradable = subjectId === 'physics'
    ? topics.flatMap(t => gradableQuestions(t.id))
    : appData.content.filter(c => topicIds.has(c.topicId) && c.type !== 'note' && c.type !== 'short_answer');
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
  const covEl = document.getElementById('coverage-num');
  const barEl = document.getElementById('mastery-bar');
  const covBarEl = document.getElementById('coverage-bar');
  if (numEl) numEl.textContent = m.attempted ? m.accuracy + '%' : '—';
  if (covEl) covEl.textContent = m.coverage + '%';
  if (barEl) barEl.style.width = Math.max(m.attempted ? m.accuracy : 0, 2) + '%';
  if (covBarEl) covBarEl.style.width = Math.max(m.coverage, 2) + '%';
}

function sectionHeatmap(topicId) {
  const notes = topicNotes(topicId);
  return notes.map(n => {
    const qs = appData.content.filter(c => c.linksTo === n.id && isQuizType(c));
    if (!qs.length) return null;
    let attempted = 0, correct = 0;
    qs.forEach(q => {
      const p = studyProgress[q.id];
      if (p && p.attempts > 0) {
        attempted++;
        if (p.lastResult === 'correct') correct++;
      }
    });
    return {
      id: n.id,
      name: n.subtopic,
      attempted,
      total: qs.length,
      accuracy: attempted ? Math.round((correct / attempted) * 100) : null
    };
  }).filter(Boolean);
}

function _shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuizPool(source, topicId) {
  let pool = [];
  if (source === 'mistakes') pool = getMistakeQuestions(topicId || null);
  else if (source === 'due') pool = getDueForReview(topicId || null);
  else if (source === 'bookmarks') pool = getBookmarkedQuestions().filter(isQuizType);
  else if (source === 'linked' && topicId) {
    const noteIds = new Set(topicNotes(topicId).map(n => n.id));
    pool = appData.content.filter(c => c.linksTo && noteIds.has(c.linksTo) && isQuizType(c) && !isDiagramMcq(c));
  } else if (source === 'diagrams') {
    pool = topicId
      ? diagramQuestions(topicId)
      : appData.content.filter(c => c.type !== 'note' && isDiagramMcq(c));
  } else {
    pool = gradableQuestions(topicId).filter(q => isQuizType(q) && !isDiagramMcq(q));
  }
  return pool;
}

function startQuizSession(source, topicId, count) {
  const pool = pickQuizPool(source, topicId);
  if (!pool.length) {
    showToast('error', 'No questions available for this quiz.');
    return;
  }
  const ids = _shuffle(pool).slice(0, Math.min(count, pool.length)).map(q => q.id);
  quizSession = {
    source, topicId: topicId || null,
    ids, index: 0,
    answers: {},
    guessed: {},
    startedAt: Date.now(),
    qStartedAt: Date.now(),
    finished: false
  };
  currentView = 'quiz';
  render();
}

function quitQuizSession() {
  if (quizSession && !quizSession.finished && !confirm('Leave this quiz? Your answers so far are saved.')) return;
  quizSession = null;
  currentView = selectedTopic ? 'content' : 'home';
  render();
}

function currentQuizQuestion() {
  if (!quizSession || quizSession.finished) return null;
  const id = quizSession.ids[quizSession.index];
  return appData.content.find(c => c.id === id);
}

function quizMarkGuessed() {
  if (!quizSession) return;
  const q = currentQuizQuestion();
  if (!q || quizSession.answers[q.id] !== undefined) return;
  quizSession.guessed[q.id] = true;
  renderMain();
}

function quizToggleBookmark() {
  const q = currentQuizQuestion();
  if (!q) return;
  toggleBookmark(q.id);
  renderMain();
}

function quizSubmitAnswer(value) {
  const q = currentQuizQuestion();
  if (!q || quizSession.answers[q.id] !== undefined) return;
  const timeMs = Date.now() - quizSession.qStartedAt;
  let isCorrect = false;
  if (q.type === 'mcq') isCorrect = value === q.correctOption;
  else if (q.type === 'true_false') isCorrect = value === q.correctAnswer;
  else if (q.type === 'fill_blank') isCorrect = String(value).toLowerCase().trim() === String(q.blankAnswer || '').toLowerCase().trim();
  quizSession.answers[q.id] = { value, isCorrect, timeMs, guessed: !!quizSession.guessed[q.id] };
  recordAttempt(q.id, isCorrect, { guessed: !!quizSession.guessed[q.id], timeMs, inQuiz: true });
  renderMain();
}

function quizNext() {
  if (!quizSession) return;
  if (quizSession.index < quizSession.ids.length - 1) {
    quizSession.index++;
    quizSession.qStartedAt = Date.now();
    renderMain();
  } else {
    quizSession.finished = true;
    renderMain();
  }
}

function openQuizBuilder(prefill) {
  prefill = prefill || {};
  populateQuizBuilder(prefill);
  openModal('modal-quiz');
}

function populateQuizBuilder(prefill) {
  const topicSel = document.getElementById('quiz-topic');
  const sourceSel = document.getElementById('quiz-source');
  const countSel = document.getElementById('quiz-count');
  if (!topicSel) return;
  topicSel.innerHTML = '<option value="">All chapters</option>' +
    appData.topics.map(t => {
      const sub = appData.subjects.find(s => s.id === t.subjectId);
      return `<option value="${t.id}">${sub ? sub.icon + ' ' : ''}${escHtml(t.name)}</option>`;
    }).join('');
  if (prefill.topicId) topicSel.value = prefill.topicId;
  if (prefill.source) sourceSel.value = prefill.source;
  if (prefill.count) countSel.value = String(prefill.count);
  updateQuizBuilderHint();
}

function updateQuizBuilderHint() {
  const hint = document.getElementById('quiz-pool-hint');
  if (!hint) return;
  const source = document.getElementById('quiz-source').value;
  const topicId = document.getElementById('quiz-topic').value || null;
  const pool = pickQuizPool(source, topicId);
  hint.textContent = pool.length
    ? `${pool.length} question${pool.length > 1 ? 's' : ''} available in this pool`
    : 'No questions in this pool — try another source or chapter';
}

function retrySingleQuestion(qId) {
  const q = appData.content.find(c => c.id === qId);
  if (!q) return;
  selectedTopic = q.topicId;
  const t = appData.topics.find(x => x.id === q.topicId);
  if (t) { selectedSubject = t.subjectId; selectedClass = t.classId; }
  quizSession = {
    source: 'single', topicId: q.topicId,
    ids: [qId], index: 0, answers: {}, guessed: {},
    startedAt: Date.now(), qStartedAt: Date.now(), finished: false
  };
  currentView = 'quiz';
  render();
}

function launchQuizFromBuilder() {
  const source = document.getElementById('quiz-source').value;
  const topicId = document.getElementById('quiz-topic').value || null;
  const count = parseInt(document.getElementById('quiz-count').value, 10) || 10;
  closeModal('modal-quiz');
  if (topicId) {
    const t = appData.topics.find(x => x.id === topicId);
    if (t) {
      selectedClass = t.classId;
      selectedSubject = t.subjectId;
      selectedTopic = topicId;
    }
  }
  startQuizSession(source, topicId, count);
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
  topicTextQuestions(selectedTopic).forEach(q => { delete studyProgress[q.id]; });
  saveProgress();
  showToast('success', '↺ Chapter progress reset.');
  renderContent(document.getElementById('main-content'));
}

// ============================================================
// TEXT FORMATTING — escape HTML, then render **bold** markdown.
// Used for notes/answers so key terms render in bold safely.
// ============================================================
function cleanMathMarkup(str) {
  if (!str) return '';
  let s = String(str);
  // Block then inline math
  s = s.replace(/\$\$([^$]+)\$\$/g, (_, m) => cleanMathMarkup(m));
  s = s.replace(/\$([^$]+)\$/g, (_, m) => cleanMathMarkup(m));
  s = s.replace(/\\uwave\{([^}]*)\}/g, '**$1**');
  s = s.replace(/\\underline\{\\text\{([^}]*)\}\}/g, '**$1**');
  s = s.replace(/\\underline\{([^}]*)\}/g, '**$1**');
  s = s.replace(/\\text\{([^}]*)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^}]*)\}/g, '$1');
  s = s.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2');
  s = s.replace(/\\times/g, '×').replace(/\\,/g, ' ').replace(/\\;/g, ' ');
  s = s.replace(/\^\{([^}]*)\}/g, '^$1').replace(/_\{([^}]*)\}/g, '_$1');
  s = s.replace(/[{}\\]/g, '');
  s = s.replace(/uwave([a-z][a-z]*)/gi, '**$1**');
  s = s.replace(/underlinehspace\d+cm/gi, '____');
  // OCR spaced letters: "k i l o w a t t" → "kilowatt"
  s = s.replace(/(?:\b[a-zA-Z]\s+){2,}[a-zA-Z]\b/g, m => m.replace(/\s+/g, ''));
  return s.replace(/\s+/g, ' ').trim();
}

function fmtText(str) {
  return escHtml(cleanMathMarkup(str)).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function tfBtnClass(q, val, answered) {
  if (answered === undefined) return '';
  const correct = q.correctAnswer;
  if (val === correct) return 'selected-true';
  if (val === answered) return 'selected-false';
  return 'tf-muted';
}

function renderTfOptions(q, answered, onClick) {
  const disabled = answered !== undefined ? 'disabled' : '';
  const trueClick = answered === undefined ? onClick('true') : '';
  const falseClick = answered === undefined ? onClick('false') : '';
  let html = `<div class="tf-options" role="group" aria-label="True or False">`;
  html += `<button type="button" class="tf-btn ${tfBtnClass(q, 'true', answered)}" ${disabled} ${trueClick}>✅ True</button>`;
  html += `<button type="button" class="tf-btn ${tfBtnClass(q, 'false', answered)}" ${disabled} ${falseClick}>❌ False</button>`;
  html += `</div>`;
  if (answered !== undefined) {
    const ok = answered === q.correctAnswer;
    const correctLabel = q.correctAnswer === 'true' ? 'True' : 'False';
    html += `<div class="tf-verdict ${ok ? 'tf-verdict-ok' : 'tf-verdict-bad'}" role="status">`;
    html += ok
      ? '✅ <strong>Correct!</strong> Well done.'
      : `❌ <strong>Incorrect.</strong> The correct answer is <strong>${correctLabel}</strong>.`;
    html += `</div>`;
  }
  return html;
}

function tfAnswerDisplay(q) {
  let ans = (q.answer || '').trim();
  const prefix = q.correctAnswer === 'true' ? 'True' : 'False';
  if (!/^(true|false)\b/i.test(ans)) ans = `${prefix}. ${ans}`;
  else if (!/^true\.|^false\./i.test(ans)) {
    ans = ans.replace(/^(true|false)\b/i, m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase() + '.');
  }
  return ans;
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
  const q = appData.content.find(c => c.id === qId);
  contentTab = isDiagramMcq(q) ? 'diagrams' : 'questions';
  questionFilter = 'all';
  userAnswers = {};
  renderContent(document.getElementById('main-content'));
  setTimeout(() => _flashEl(document.getElementById('qcard-' + qId)), 60);
}

function practiceLinkedMcqs(noteId) {
  const linked = appData.content.filter(c => c.linksTo === noteId && isQuizType(c));
  if (!linked.length) return;
  const note = appData.content.find(c => c.id === noteId);
  if (note) selectedTopic = note.topicId;
  quizSession = {
    source: 'linked', topicId: selectedTopic,
    ids: _shuffle(linked).map(q => q.id),
    index: 0, answers: {}, guessed: {},
    startedAt: Date.now(), qStartedAt: Date.now(), finished: false
  };
  currentView = 'quiz';
  render();
}

function sourceChipHtml(source) {
  if (source === 'icse' || source === 'neet') {
    return ' <span class="src-chip" title="ICSE textbook section — linked to practice MCQs">ICSE</span>';
  }
  return '';
}

function chapterMindmap(topicId) {
  if (!topicId) return null;
  if (typeof PHYSICS_MINDMAP_DATA !== 'undefined' && PHYSICS_MINDMAP_DATA[topicId]) {
    return PHYSICS_MINDMAP_DATA[topicId];
  }
  if (typeof CHEMISTRY_MINDMAP_DATA !== 'undefined' && CHEMISTRY_MINDMAP_DATA[topicId]) {
    return CHEMISTRY_MINDMAP_DATA[topicId];
  }
  if (typeof BIOLOGY_MINDMAP_DATA !== 'undefined') {
    return BIOLOGY_MINDMAP_DATA[topicId] || null;
  }
  return null;
}

function chapterCheatsheet(topicId) {
  if (!topicId) return null;
  if (typeof PHYSICS_CHEATSHEET_DATA !== 'undefined' && PHYSICS_CHEATSHEET_DATA[topicId]) {
    return PHYSICS_CHEATSHEET_DATA[topicId];
  }
  if (typeof CHEMISTRY_CHEATSHEET_DATA !== 'undefined' && CHEMISTRY_CHEATSHEET_DATA[topicId]) {
    return CHEMISTRY_CHEATSHEET_DATA[topicId];
  }
  if (typeof BIOLOGY_CHEATSHEET_DATA !== 'undefined') {
    return BIOLOGY_CHEATSHEET_DATA[topicId] || null;
  }
  return null;
}

function isDiagramMcq(q) {
  return !!(q && q.image);
}

function diagramQuestions(topicId) {
  return appData.content.filter(c =>
    c.topicId === topicId && c.type !== 'note' && isDiagramMcq(c)
  );
}

function textQuestions(topicId) {
  return topicTextQuestions(topicId);
}

function mcqImageHtml(q) {
  if (!q.image) return '';
  const cap = q.caption ? `<div class="mcq-img-caption">${escHtml(q.caption)}</div>` : '';
  return `<div class="mcq-image-wrap"><img class="mcq-image" src="${escHtml(q.image)}" alt="Textbook diagram" loading="lazy">${cap}</div>`;
}

function noteSortKey(n) {
  const textbook = n.source === 'icse' || n.source === 'neet';
  const m = /^(\d+)\./.exec(n.subtopic || '');
  const num = m ? parseInt(m[1], 10) : 999;
  return [textbook ? 0 : 1, num, n.subtopic || ''];
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
  const notes = topicNotes(selectedTopic);
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
  if (currentView === 'quiz' && quizSession && !quizSession.finished) {
    if (!confirm('Leave this quiz? Your answers so far are saved.')) return;
    quizSession = null;
  }
  currentView = view;
  userAnswers = {};
  if (view === 'home') { selectedClass = null; selectedSubject = null; selectedTopic = null; }
  if (view === 'subjects') { selectedClass = id; selectedSubject = null; selectedTopic = null; }
  if (view === 'topics') { selectedSubject = id; selectedTopic = null; }
  if (view === 'content') {
    selectedTopic = id; contentTab = 'notes'; questionFilter = 'all'; mindMapIndex = 0; activeWordId = null; wordCardOrder = [];
    try { localStorage.setItem('studyhub_last_topic', id); } catch (e) {}
  }
  if (view === 'revision') revisionTab = id || revisionTab || 'mistakes';
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
  if (selectedTopic && currentView !== 'revision' && currentView !== 'quiz') {
    const t = appData.topics.find(t=>t.id===selectedTopic);
    html += `<span class="sep">›</span><span class="active">${t?.icon||''} ${t?.name||selectedTopic}</span>`;
  }
  if (currentView === 'revision') {
    html += `<span class="sep">›</span><span class="active">📕 Revision</span>`;
  }
  if (currentView === 'quiz') {
    html += `<span class="sep">›</span><span class="active">▶ Practice Quiz</span>`;
  }
  bc.innerHTML = html;
}

function renderSidebar() {
  const mistakeN = getMistakeQuestions().length;
  const revisionNav = document.querySelector('.sidebar-revision');
  if (revisionNav) {
    revisionNav.innerHTML = `
      <div class="nav-item ${currentView === 'revision' ? 'active' : ''}" onclick="navigateTo('revision','mistakes')">
        <span class="icon">📕</span> Revision
        ${mistakeN ? `<span class="badge">${mistakeN}</span>` : ''}
      </div>`;
  }
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
  else if (currentView === 'revision') renderRevisionHub(main);
  else if (currentView === 'quiz') renderQuizView(main);
}

// ===== REVISION HUB =====
function renderRevisionHub(el) {
  const mistakes = getMistakeQuestions();
  const due = getDueForReview();
  const bookmarks = getBookmarkedQuestions();
  const tabs = [
    { key: 'mistakes', label: 'Mistakes', icon: '📕', count: mistakes.length },
    { key: 'due', label: 'Due Today', icon: '🔁', count: due.length },
    { key: 'bookmarks', label: 'Saved', icon: '🔖', count: bookmarks.length }
  ];
  let list = mistakes;
  if (revisionTab === 'due') list = due;
  if (revisionTab === 'bookmarks') list = bookmarks;
  const tabHtml = tabs.map(t =>
    `<div class="content-tab ${revisionTab === t.key ? 'active' : ''}" onclick="revisionTab='${t.key}';renderMain()">${t.icon} ${t.label} (${t.count})</div>`
  ).join('');
  let bodyHtml = '';
  if (!list.length) {
    const empty = {
      mistakes: ['No mistakes logged yet', 'Answer questions in Practice Quiz — wrong answers and lucky guesses land here automatically.'],
      due: ['Nothing due today', 'Complete the Mistake Book and questions will return on a spaced schedule.'],
      bookmarks: ['No saved questions', 'Tap 🔖 while practicing to save tricky questions for last-minute revision.']
    }[revisionTab];
    bodyHtml = `<div class="empty-state"><div class="empty-icon">${tabs.find(t => t.key === revisionTab).icon}</div><h3>${empty[0]}</h3><p>${empty[1]}</p></div>`;
  } else {
    bodyHtml = `<div class="revision-actions">
      <button class="btn btn-primary" onclick="startQuizSession('${revisionTab === 'bookmarks' ? 'bookmarks' : revisionTab}', null, ${Math.min(20, list.length)})">▶ Practice ${Math.min(20, list.length)} now</button>
      <button class="btn btn-outline" onclick="openQuizBuilder({source:'${revisionTab === 'bookmarks' ? 'bookmarks' : revisionTab}'})">⚙️ Custom quiz</button>
    </div>
    <div class="revision-list">${list.map(q => renderRevisionItem(q)).join('')}</div>`;
  }
  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header"><h1>📕 Revision Hub</h1></div>
      <p class="lead">Revisit mistakes, scheduled reviews, and saved questions — with instant explanations and links back to notes.</p>
      <div class="content-tabs">${tabHtml}</div>
      ${bodyHtml}
    </div>`;
}

function renderRevisionItem(q) {
  const topic = appData.topics.find(t => t.id === q.topicId);
  const p = studyProgress[q.id] || {};
  const linkedNote = q.linksTo ? appData.content.find(c => c.id === q.linksTo && c.type === 'note') : null;
  const badge = p.guessed && p.lastResult === 'correct' ? '<span class="rev-badge guessed">Guessed</span>'
    : p.lastResult === 'wrong' ? '<span class="rev-badge wrong">Wrong</span>'
    : '<span class="rev-badge due">Review</span>';
  return `<div class="revision-item">
    <div class="rev-meta">${topic ? topic.icon + ' ' + escHtml(topic.name) : ''} ${badge}</div>
    <div class="rev-q">${escHtml((q.question || '').slice(0, 160))}${(q.question || '').length > 160 ? '…' : ''}</div>
    <div class="rev-actions">
      ${linkedNote ? `<button class="xref-btn xref-back" onclick="selectedTopic='${q.topicId}';jumpToNote('${linkedNote.id}')">↩ ${escHtml(linkedNote.subtopic)}</button>` : ''}
      <button class="btn btn-sm btn-outline" onclick="retrySingleQuestion('${q.id}')">Retry</button>
      ${revisionTab === 'bookmarks' ? `<button class="btn btn-sm btn-danger" onclick="toggleBookmark('${q.id}');renderMain()">Remove</button>` : ''}
    </div>
  </div>`;
}

// ===== QUIZ SESSION =====
function renderQuizView(el) {
  if (!quizSession) { currentView = 'home'; renderHome(el); return; }
  if (quizSession.finished) {
    const results = quizSession.ids.map(id => {
      const a = quizSession.answers[id];
      return { id, ...(a || { isCorrect: false }) };
    });
    const correct = results.filter(r => r.isCorrect).length;
    const total = quizSession.ids.length;
    el.innerHTML = `
      <div class="fade-in quiz-results">
        <div class="section-header"><h1>✅ Quiz Complete</h1></div>
        <div class="quiz-score-ring acc-${_accClass(Math.round(correct / total * 100), total)}">
          <div class="ring-num">${correct}/${total}</div>
          <div class="ring-lbl">Correct</div>
        </div>
        <p class="lead">${correct === total ? 'Perfect! Keep this streak going.' : correct >= total * 0.7 ? 'Good work — review mistakes below.' : 'Focus on the explanations, then retry from the Mistake Book.'}</p>
        <div class="quiz-result-actions">
          <button class="btn btn-primary" onclick="startQuizSession('mistakes', quizSession.topicId, ${Math.min(15, getMistakeQuestions(quizSession.topicId).length)})">📕 Revise mistakes</button>
          <button class="btn btn-outline" onclick="quizSession=null;navigateTo('revision','mistakes')">Open Revision Hub</button>
          <button class="btn btn-outline" onclick="quizSession=null;currentView='${quizSession.topicId ? 'content' : 'home'}';render()">${quizSession.topicId ? 'Back to chapter' : 'Home'}</button>
        </div>
      </div>`;
    return;
  }
  const q = currentQuizQuestion();
  if (!q) { quizSession.finished = true; renderQuizView(el); return; }
  const idx = quizSession.index;
  const total = quizSession.ids.length;
  const answered = quizSession.answers[q.id];
  const linkedNote = q.linksTo ? appData.content.find(c => c.id === q.linksTo && c.type === 'note') : null;
  const typeLabels = { mcq: 'MCQ', true_false: 'True / False', fill_blank: 'Fill in the Blank' };
  let body = '';
  if (q.type === 'mcq' && q.options) {
    const letters = ['A', 'B', 'C', 'D'];
    body = `<div class="q-options quiz-options">${q.options.map((opt, oi) => {
      let cls = '';
      if (answered) {
        if (oi === q.correctOption) cls = 'correct';
        else if (answered.value === oi) cls = 'wrong';
      }
      const click = answered ? '' : `onclick="quizSubmitAnswer(${oi})"`;
      return `<div class="q-option ${cls}" ${click}><span class="opt-letter">${letters[oi]}</span> ${escHtml(opt)}</div>`;
    }).join('')}</div>`;
  } else if (q.type === 'true_false') {
    const tfAns = answered ? answered.value : undefined;
    body = renderTfOptions(q, tfAns, v => `onclick="quizSubmitAnswer('${v}')"`);
  } else if (q.type === 'fill_blank') {
    body = `<div class="quiz-blank">
      <input class="blank-input" id="quiz-blank-input" placeholder="Type your answer…" ${answered ? 'disabled' : ''} value="${answered ? escHtml(String(answered.value)) : ''}">
      ${answered ? '' : `<button class="btn btn-primary" onclick="quizSubmitAnswer(document.getElementById('quiz-blank-input').value)">Check</button>`}
    </div>`;
  }
  let feedback = '';
  if (answered) {
    const ok = answered.isCorrect;
    feedback = `<div class="quiz-feedback ${ok ? 'ok' : 'bad'}">
      <strong>${ok ? '✅ Correct!' : '❌ Not quite'}</strong>
      <p>${fmtText(q.type === 'true_false' ? tfAnswerDisplay(q) : (q.answer || ''))}</p>
      ${q.teacherTip ? `<div class="tip-box"><strong>💡 Teacher's Tip:</strong> ${fmtText(q.teacherTip)}</div>` : ''}
      ${q.examTip ? `<div class="tip-box exam"><strong>🎯 Exam Tip:</strong> ${fmtText(q.examTip)}</div>` : ''}
      ${linkedNote ? `<button class="xref-btn xref-back" onclick="quizSession=null;selectedTopic='${q.topicId}';jumpToNote('${linkedNote.id}')">↩ Revise: ${escHtml(linkedNote.subtopic)}</button>` : ''}
    </div>`;
  }
  el.innerHTML = `
    <div class="fade-in quiz-session">
      <div class="quiz-top">
        <button class="btn btn-sm btn-outline" onclick="quitQuizSession()">✕ Exit</button>
        <div class="quiz-progress-text">Question ${idx + 1} of ${total}</div>
        <div class="quiz-tools">
          <button class="btn btn-sm ${quizSession.guessed[q.id] ? 'btn-primary' : 'btn-outline'}" ${answered ? 'disabled' : ''} onclick="quizMarkGuessed()" title="Mark if you're guessing">🎲 Guessed</button>
          <button class="btn btn-sm ${isBookmarked(q.id) ? 'btn-primary' : 'btn-outline'}" onclick="quizToggleBookmark()">${isBookmarked(q.id) ? '🔖 Saved' : '🔖 Save'}</button>
        </div>
      </div>
      <div class="progress-bar quiz-bar"><div class="progress-fill" style="width:${((idx + (answered ? 1 : 0)) / total) * 100}%"></div></div>
      <div class="question-card quiz-card">
        <div class="q-label">${typeLabels[q.type] || q.type}${sourceChipHtml(q.source)}</div>
        ${mcqImageHtml(q)}
        <div class="q-text">${escHtml(q.question)}</div>
        ${body}
        ${feedback}
        ${answered ? `<div class="quiz-nav"><button class="btn btn-primary" onclick="quizNext()">${idx < total - 1 ? 'Next →' : 'See results'}</button></div>` : ''}
      </div>
    </div>`;
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
  const mistakes = getMistakeQuestions();
  const due = getDueForReview();
  const bookmarks = getBookmarkedQuestions();
  const daily = getDailyMcqCount();
  const streak = getStreak();
  const goalPct = Math.min(100, Math.round((daily / DAILY_MCQ_GOAL) * 100));
  const journeyHtml = `
    <div class="journey-row">
      <div class="journey-card" onclick="navigateTo('revision','mistakes')">
        <div class="jc-icon">📕</div>
        <div class="jc-body"><div class="jc-title">Mistake Book</div><div class="jc-sub">${mistakes.length} to revise</div></div>
      </div>
      <div class="journey-card ${due.length ? 'journey-highlight' : ''}" onclick="${due.length ? `startQuizSession('due', null, ${Math.min(20, due.length)})` : `navigateTo('revision','due')`}">
        <div class="jc-icon">🔁</div>
        <div class="jc-body"><div class="jc-title">Due Today</div><div class="jc-sub">${due.length ? due.length + ' scheduled' : 'All caught up'}</div></div>
      </div>
      <div class="journey-card" onclick="openQuizBuilder({})">
        <div class="jc-icon">▶</div>
        <div class="jc-body"><div class="jc-title">Start Quiz</div><div class="jc-sub">Custom practice</div></div>
      </div>
      <div class="journey-card" onclick="navigateTo('revision','bookmarks')">
        <div class="jc-icon">🔖</div>
        <div class="jc-body"><div class="jc-title">Saved</div><div class="jc-sub">${bookmarks.length} bookmarked</div></div>
      </div>
    </div>
    <div class="goal-strip">
      <div class="goal-top"><span>🎯 Today: ${daily}/${DAILY_MCQ_GOAL} MCQs</span><span>${streak ? '🔥 ' + streak + ' day streak' : 'Start your streak'}</span></div>
      <div class="progress-bar"><div class="progress-fill cov-good" style="width:${Math.max(goalPct, 2)}%"></div></div>
    </div>`;
  const dashHtml = `
    ${continueHtml}
    ${journeyHtml}
    <div class="dash">
      <div class="dash-head"><h2>📊 Your Progress</h2>${op.attempted ? `<button class="btn btn-sm btn-outline" onclick="resetAllProgress()">↺ Reset all</button>` : ''}</div>
      <div class="dash-grid">
        <div class="dash-ring acc-${opCls}" style="background:conic-gradient(var(--accent) ${op.attempted ? op.accuracy : 0}%, var(--line) 0)">
          <div class="ring-inner"><div class="ring-num">${op.attempted ? op.accuracy + '%' : '—'}</div><div class="ring-lbl">Accuracy</div></div>
        </div>
        <div class="dash-stat"><div class="ds-num">${op.coverage}%</div><div class="ds-lbl">Syllabus covered</div></div>
        <div class="dash-stat"><div class="ds-num">${op.attempted}</div><div class="ds-lbl">Questions tried</div></div>
        <div class="dash-stat"><div class="ds-num">${op.correct}</div><div class="ds-lbl">Correct</div></div>
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
          let metaLine;
          if (s.id === 'physics') {
            let notes = 0, qs = 0;
            tops.forEach(t => {
              const st = physicsContentStats(t.id);
              notes += st.notes;
              qs += st.total;
            });
            metaLine = `${tops.length} chapters · ${notes} notes · ${qs} questions`;
          } else {
            const contentCount = appData.content.filter(c=>tops.some(t=>t.id===c.topicId)).length;
            metaLine = `${tops.length} chapters · ${contentCount} items`;
          }
          const m = subjectMastery(s.id);
          const cls = _accClass(m.accuracy, m.attempted);
          return `
            <div class="card" onclick="navigateTo('topics','${s.id}')">
              <div class="card-icon">${s.icon}</div>
              <h3>${s.name}</h3>
              <p>${metaLine}</p>
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
          let notes, mcqs, qs, diagrams, cardMeta;
          if (selectedSubject === 'physics' && isPhysicsTopic(t.id)) {
            const st = physicsContentStats(t.id);
            notes = st.notes;
            mcqs = st.mcq;
            qs = st.total;
            diagrams = 0;
            cardMeta = `<span>📝 ${st.notes} notes</span><span>❓ ${st.total} questions</span><span>🔘 ${st.mcq} MCQ</span><span>✅ ${st.true_false} T/F</span><span>✍️ ${st.fill_blank} Fill</span><span>🔗 ${st.match} Match</span><span>📋 ${st.short_answer} Q&A</span>`;
          } else {
            const contents = appData.content.filter(c=>c.topicId===t.id);
            notes = contents.filter(c=>c.type==='note').length;
            mcqs = contents.filter(c=>c.type==='mcq' && !isDiagramMcq(c)).length;
            diagrams = diagramQuestions(t.id).length;
            qs = contents.filter(c=>c.type!=='note' && !isDiagramMcq(c)).length;
            cardMeta = `<span>📝 ${notes} notes</span><span>🔘 ${mcqs} MCQs</span>${diagrams ? `<span>🖼️ ${diagrams} diagram</span>` : ''}<span>❓ ${qs} questions</span>`;
          }
          const m = chapterMastery(t.id);
          const cls = _accClass(m.accuracy, m.attempted);
          return `
            <div class="card" onclick="navigateTo('content','${t.id}')">
              <div class="card-icon">${t.icon}</div>
              <h3>${t.name}</h3>
              <div class="card-meta">${cardMeta}</div>
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
  const notes = topicNotes(selectedTopic);
  const questions = topicTextQuestions(selectedTopic);
  const qStats = isPhysicsTopic(selectedTopic) ? physicsContentStats(selectedTopic) : null;
  const diagrams = diagramQuestions(selectedTopic);
  const diagramFigCount = new Set(diagrams.map(q => q.image)).size;
  const mmData = chapterMindmap(selectedTopic);
  const csData = chapterCheatsheet(selectedTopic);

  const cm = chapterMastery(selectedTopic);
  const heat = sectionHeatmap(selectedTopic);
  const heatHtml = heat.length ? `
    <div class="section-heatmap">
      <h3>Section strength</h3>
      <div class="heat-row">${heat.map(s => {
        const cls = s.accuracy === null ? 'heat-none' : s.accuracy >= 80 ? 'heat-good' : s.accuracy >= 50 ? 'heat-mid' : 'heat-low';
        const lbl = s.accuracy === null ? '—' : s.accuracy + '%';
        const short = (s.name || '').replace(/^\d+\.\s*/, '').slice(0, 28);
        return `<div class="heat-pill ${cls}" title="${escHtml(s.name)} — ${s.attempted}/${s.total} tried"><span class="heat-lbl">${escHtml(short)}${short.length < (s.name||'').length ? '…' : ''}</span><span class="heat-acc">${lbl}</span></div>`;
      }).join('')}</div>
    </div>` : '';
  el.innerHTML = `
    <div class="fade-in">
      <div class="section-header">
        <h1>${topic?.icon} ${topic?.name}</h1>
        <button class="btn btn-primary" onclick="openQuizBuilder({topicId:'${selectedTopic}',source:'chapter',count:20})">▶ Practice Quiz</button>
      </div>
      <div class="content-tabs chapter-tabs" role="tablist" aria-label="Chapter study modes">
        <div class="content-tab ${contentTab==='notes'?'active':''}" onclick="switchContentTab('notes')">📝 Notes</div>
        ${mmData ? `<div class="content-tab ${contentTab==='mindmap'?'active':''}" onclick="switchContentTab('mindmap')">🧠 Mind Map</div>` : ''}
        ${csData ? `<div class="content-tab ${contentTab==='cheatsheet'?'active':''}" onclick="switchContentTab('cheatsheet')">⚡ Cheat Sheet</div>` : ''}
        ${csData && csData.wordCards && csData.wordCards.length ? `<div class="content-tab ${contentTab==='oneword'?'active':''}" onclick="switchContentTab('oneword')">🔤 One Word</div>` : ''}
        <div class="content-tab ${contentTab==='questions'?'active':''}" onclick="switchContentTab('questions')">❓ Practice</div>
        <div class="content-tab ${contentTab==='diagrams'?'active':''}" onclick="switchContentTab('diagrams')">🖼️ Diagrams</div>
      </div>
      ${qStats ? `<p class="chapter-tabs-hint physics-bank-banner">📚 ICSE Physics bank — <strong>${qStats.notes} linked notes</strong> · <strong>${qStats.total} questions</strong> (${qStats.mcq} MCQ · ${qStats.true_false} T/F · ${qStats.fill_blank} Fill · ${qStats.match} Match · ${qStats.short_answer} Q&A)</p>` : ''}
      ${(csData || mmData) && !qStats ? `<p class="chapter-tabs-hint">Revision tools: ${csData ? '⚡ Cheat Sheet' : ''}${csData && mmData ? ' · ' : ''}${mmData ? '🧠 Mind Map' : ''}${csData && csData.wordCards && csData.wordCards.length ? ' · 🔤 One Word (30)' : ''} — tap a tab above</p>` : ''}
      ${(csData || mmData) && qStats ? `<p class="chapter-tabs-hint">Revision: ${csData ? '⚡ Cheat Sheet' : ''}${csData && mmData ? ' · ' : ''}${mmData ? '🧠 Mind Map' : ''}${csData && csData.wordCards && csData.wordCards.length ? ' · 🔤 One Word (30)' : ''}</p>` : ''}
      <div class="stats-row">
        <div class="stat-card"><div class="stat-num">${notes.length}</div><div class="stat-label">Notes</div></div>
        <div class="stat-card"><div class="stat-num">${questions.length}</div><div class="stat-label">${qStats ? 'Questions' : 'Text Qs'}</div></div>
        ${qStats ? `<div class="stat-card" title="MCQ · T/F · Fill · Match · Q&A breakdown"><div class="stat-num">${qStats.mcq}</div><div class="stat-label">MCQs</div></div>` : `<div class="stat-card"><div class="stat-num">${questions.filter(q=>q.type==='mcq').length}</div><div class="stat-label">Text MCQs</div></div>`}
        <div class="stat-card" onclick="switchContentTab('diagrams')" style="cursor:pointer" title="Open diagram-based NEET MCQs">
          <div class="stat-num">${diagrams.length}</div>
          <div class="stat-label">Diagram MCQs</div>
        </div>
        ${csData ? `<div class="stat-card stat-revision" onclick="switchContentTab('cheatsheet')" style="cursor:pointer" title="High-yield last-minute revision">
          <div class="stat-num">${csData.topTen ? csData.topTen.length : '—'}</div>
          <div class="stat-label">⚡ Cheat Sheet</div>
        </div>` : ''}
        ${csData && csData.wordCards && csData.wordCards.length ? `<div class="stat-card stat-revision" onclick="switchContentTab('oneword')" style="cursor:pointer" title="Tap words to reveal definitions">
          <div class="stat-num">${csData.wordCards.length}</div>
          <div class="stat-label">🔤 One Word</div>
        </div>` : ''}
        <div class="stat-card stat-coverage" title="Share of questions you've tried">
          <div class="stat-num" id="coverage-num">${cm.coverage}%</div>
          <div class="stat-label">Coverage</div>
          <div class="progress-bar" style="margin-top:6px"><div class="progress-fill cov-mid" id="coverage-bar" style="width:${Math.max(cm.coverage,2)}%"></div></div>
        </div>
        <div class="stat-card stat-mastery" title="Accuracy on questions you've tried. Click to reset chapter progress." onclick="resetChapterProgress()">
          <div class="stat-num" id="mastery-num">${cm.attempted ? cm.accuracy + '%' : '—'}</div>
          <div class="stat-label">Accuracy ↺</div>
          <div class="progress-bar" style="margin-top:6px"><div class="progress-fill" id="mastery-bar" style="width:${Math.max(cm.attempted ? cm.accuracy : 0,2)}%"></div></div>
        </div>
        <div class="stat-card" onclick="openQuizBuilder({topicId:'${selectedTopic}',source:'mistakes'})" style="cursor:pointer" title="Quiz from your mistakes in this chapter">
          <div class="stat-num">${getMistakeQuestions(selectedTopic).length}</div>
          <div class="stat-label">Mistakes</div>
        </div>
      </div>
      ${heatHtml}
      <div id="content-body"></div>
    </div>
  `;

  if (contentTab === 'notes') renderNotes(notes);
  else if (contentTab === 'mindmap') renderMindMap(mmData);
  else if (contentTab === 'cheatsheet') renderCheatSheet(csData);
  else if (contentTab === 'oneword') renderOneWordCards(csData);
  else if (contentTab === 'diagrams') renderDiagramQuestions(diagrams);
  else renderQuestions(questions);
}

function switchContentTab(tab) {
  contentTab = tab;
  userAnswers = {};
  if (tab === 'mindmap') mindMapIndex = 0;
  if (tab === 'oneword') { activeWordId = null; wordCardOrder = []; }
  renderContent(document.getElementById('main-content'));
}

function switchMindMapPart(idx) {
  mindMapIndex = idx;
  renderMindMap(chapterMindmap(selectedTopic));
}

function jumpToNoteFromMindmap(noteId) {
  if (!noteId) return;
  jumpToNote(noteId);
}

function mindmapNoteLabel(noteId) {
  const note = appData.content.find(c => c.id === noteId && c.type === 'note');
  if (!note) return 'Notes';
  const t = (note.subtopic || '').replace(/^\d+\.\s*/, '').trim();
  return t.length > 32 ? t.slice(0, 30) + '…' : t || 'Notes';
}

function renderMindMap(mmData) {
  const body = document.getElementById('content-body');
  if (!mmData || !mmData.maps || !mmData.maps.length) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">🧠</div><h3>No mind map for this chapter</h3></div>';
    return;
  }
  const maps = mmData.maps;
  const map = maps[Math.min(mindMapIndex, maps.length - 1)];
  const mapTabs = maps.length > 1
    ? `<div class="mindmap-part-tabs">${maps.map((m, i) =>
        `<div class="q-tab ${mindMapIndex === i ? 'active' : ''}" onclick="switchMindMapPart(${i})">${escHtml(m.title)}</div>`
      ).join('')}</div>`
    : '';
  const flowHtml = (map.flow && map.flow.length > 1)
    ? `<div class="mm-flow" aria-label="How ideas connect in sequence">
        <span class="mm-flow-label">Idea flow</span>
        <div class="mm-flow-track">${map.flow.map((f, i) => {
          const hasBranch = map.branches.some(b => b.id === f.id);
          const step = hasBranch
            ? `<button type="button" class="mm-flow-step" onclick="highlightMindBranch('${f.id}')">${escHtml(f.label)}</button>`
            : `<span class="mm-flow-step mm-flow-muted">${escHtml(f.label)}</span>`;
          return (i ? '<span class="mm-flow-arrow" aria-hidden="true">→</span>' : '') + step;
        }).join('')}</div>
      </div>`
    : '';
  const branchHtml = map.branches.map((b, bi) => {
    const concepts = (b.concepts || []).slice(0, 5).map(c =>
      `<li>${escHtml(c)}</li>`
    ).join('');
    const linkChips = (b.links || []).map(link => {
      const lid = typeof link === 'string' ? link : link.id;
      const rel = (typeof link === 'object' && link.rel) ? link.rel : 'links to';
      const linked = map.branches.find(x => x.id === lid);
      if (!linked) return '';
      return `<button type="button" class="mm-link-chip" onclick="event.stopPropagation();highlightMindBranch('${lid}')" title="How this idea connects">
        <span class="mm-rel">${escHtml(rel)}</span><span class="mm-rel-target">${escHtml(linked.label)}</span>
      </button>`;
    }).join('');
    const noteIds = b.noteIds || (b.noteId ? [b.noteId] : []);
    const noteChips = noteIds.slice(0, 4).map(nid =>
      `<button type="button" class="mm-note-chip" onclick="event.stopPropagation();jumpToNoteFromMindmap('${nid}')" title="Supporting section notes">📄 ${escHtml(mindmapNoteLabel(nid))}</button>`
    ).join('');
    const moreNotes = noteIds.length > 4 ? `<span class="mm-more-notes">+${noteIds.length - 4} more</span>` : '';
    return `<article class="mm-branch ${b.color}" id="mm-branch-${b.id}" onclick="highlightMindBranch('${b.id}')" title="Idea hub — see how concepts connect">
      <div class="mm-branch-num">${bi + 1}</div>
      <h4 class="mm-branch-title">${escHtml(b.label)}</h4>
      <ul class="mm-concepts">${concepts}</ul>
      ${linkChips ? `<div class="mm-links">${linkChips}</div>` : ''}
      ${noteChips ? `<div class="mm-note-links">${noteChips}${moreNotes}</div>` : ''}
    </article>`;
  }).join('');
  body.innerHTML = `
    <div class="mindmap-wrap fade-in">
      <p class="lead mm-lead">How ideas connect in <strong>${escHtml(mmData.chapterTitle)}</strong> — not just section titles. Follow the flow, then tap labeled links between idea hubs. Open section notes when you want detail.</p>
      ${mapTabs}
      ${flowHtml}
      <div class="mindmap-hub">
        <div class="mm-center-node">
          <span class="mm-center-icon">🧠</span>
          <span class="mm-center-text">${escHtml(map.center)}</span>
        </div>
        <div class="mm-spoke-line" aria-hidden="true"></div>
      </div>
      <div class="mm-branch-grid">${branchHtml}</div>
      <p class="mm-hint">💡 Arrows show the story order. Chips show how one idea leads to another. Section notes are supporting evidence — tap 📄 when you need the full text.</p>
    </div>`;
}

function highlightMindBranch(branchId) {
  const el = document.getElementById('mm-branch-' + branchId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.remove('mm-flash');
  void el.offsetWidth;
  el.classList.add('mm-flash');
  setTimeout(() => el.classList.remove('mm-flash'), 1800);
}

function cheatSheetPlainText(csData) {
  if (!csData) return '';
  const lines = [csData.chapterTitle, '—'.repeat(40)];
  if (csData.topTen && csData.topTen.length) {
    lines.push('', 'TOP 12 — LAST MINUTE');
    csData.topTen.forEach((t, i) => lines.push(`${i + 1}. ${t}`));
  }
  (csData.groups || []).forEach(g => {
    lines.push('', g.title);
    (g.items || []).forEach(item => {
      lines.push(item.term ? `• ${item.term} → ${item.text}` : `• ${item.text}`);
    });
  });
  return lines.join('\n');
}

function copyCheatSheet() {
  const cs = chapterCheatsheet(selectedTopic);
  if (!cs) return;
  const text = cheatSheetPlainText(cs);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('success', 'Cheat sheet copied')).catch(() => showToast('error', 'Copy failed'));
  } else {
    showToast('error', 'Copy not supported');
  }
}

function printCheatSheet() {
  const el = document.getElementById('cheatsheet-print');
  if (!el) return;
  const w = window.open('', '_blank');
  if (!w) { showToast('error', 'Allow pop-ups to print'); return; }
  w.document.write(`<!DOCTYPE html><html><head><title>Cheat Sheet</title>
    <style>body{font-family:system-ui,sans-serif;padding:24px;max-width:800px;margin:0 auto;font-size:12px;line-height:1.45}
    h1{font-size:18px;margin:0 0 8px}h2{font-size:13px;margin:20px 0 8px;border-bottom:1px solid #ccc}
    ol,ul{margin:0;padding-left:20px}li{margin-bottom:4px}strong{color:#111}
    .top{background:#fff8e6;border:1px solid #e8c96a;padding:12px;border-radius:8px;margin-bottom:16px}</style></head><body>`);
  w.document.write(el.innerHTML);
  w.document.write('</body></html>');
  w.document.close();
  w.focus();
  setTimeout(() => { w.print(); w.close(); }, 300);
}

function shuffleWordCards() {
  const cs = chapterCheatsheet(selectedTopic);
  if (!cs || !cs.wordCards) return;
  wordCardOrder = _shuffle(cs.wordCards.map(c => c.id));
  activeWordId = null;
  renderOneWordCards(cs);
}

function toggleWordCard(cardId) {
  activeWordId = activeWordId === cardId ? null : cardId;
  const cs = chapterCheatsheet(selectedTopic);
  if (cs) renderOneWordCards(cs);
}

function revealAllWordCards() {
  const panel = document.getElementById('ow-meaning-panel');
  if (!panel) return;
  const cs = chapterCheatsheet(selectedTopic);
  if (!cs || !cs.wordCards) return;
  panel.innerHTML = `<div class="ow-all-revealed">
    <h3>All ${cs.wordCards.length} definitions</h3>
    <dl class="ow-all-list">${cs.wordCards.map(c =>
      `<div class="ow-all-row"><dt>${escHtml(c.word)}</dt><dd>${escHtml(c.meaning)}</dd></div>`
    ).join('')}</dl>
  </div>`;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderOneWordCards(csData) {
  const body = document.getElementById('content-body');
  const cards = csData && csData.wordCards ? csData.wordCards : [];
  if (!cards.length) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">🔤</div><h3>No one-word cards for this chapter</h3></div>';
    return;
  }
  if (!wordCardOrder.length) wordCardOrder = cards.map(c => c.id);
  const byId = Object.fromEntries(cards.map(c => [c.id, c]));
  const ordered = wordCardOrder.map(id => byId[id]).filter(Boolean);
  const active = activeWordId ? byId[activeWordId] : null;
  const activeHtml = active ? `
    <div class="ow-reveal-box fade-in" id="ow-meaning-panel">
      <div class="ow-reveal-head">
        <span class="ow-reveal-word">${escHtml(active.word)}</span>
        ${active.noteId ? `<button type="button" class="btn btn-sm btn-outline" onclick="jumpToNoteFromMindmap('${active.noteId}')">📄 Full notes</button>` : ''}
      </div>
      <p class="ow-reveal-meaning">${escHtml(active.meaning)}</p>
    </div>` : `<div class="ow-reveal-box ow-reveal-empty" id="ow-meaning-panel">
      <p>Tap any word below to reveal its definition</p>
    </div>`;
  const gridHtml = ordered.map(c => {
    const isActive = c.id === activeWordId;
    return `<button type="button" class="ow-card ${isActive ? 'active' : ''}" onclick="toggleWordCard('${c.id}')" aria-pressed="${isActive}">
      <span class="ow-card-word">${escHtml(c.word)}</span>
      ${isActive ? '<span class="ow-card-hint">tap to hide</span>' : '<span class="ow-card-hint">tap for meaning</span>'}
    </button>`;
  }).join('');
  const revealed = activeWordId ? 1 : 0;
  body.innerHTML = `
    <div class="oneword-wrap fade-in">
      <div class="ow-toolbar">
        <p class="lead ow-lead"><strong>${cards.length} one-word questions</strong> for ${escHtml(csData.chapterTitle)} — tap a word to generate its definition. Great for last-minute vocab drill.</p>
        <div class="ow-actions">
          <button type="button" class="btn btn-sm btn-outline" onclick="shuffleWordCards()">🔀 Shuffle</button>
          <button type="button" class="btn btn-sm btn-outline" onclick="revealAllWordCards()">📋 Show all</button>
        </div>
      </div>
      ${activeHtml}
      <div class="ow-grid">${gridHtml}</div>
      <p class="ow-hint">💡 ${revealed ? 'Definition shown above' : 'Pick any term'} — use Shuffle to test yourself in random order.</p>
    </div>`;
}

function renderCheatSheet(csData) {
  const body = document.getElementById('content-body');
  if (!csData || !csData.groups || !csData.groups.length) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">⚡</div><h3>No cheat sheet for this chapter</h3></div>';
    return;
  }
  const topHtml = (csData.topTen && csData.topTen.length)
    ? `<div class="cs-top-box" id="cheatsheet-print-top">
        <h3>🔥 Top ${csData.topTen.length} — cram these first</h3>
        <ol class="cs-top-list">${csData.topTen.map(t => `<li>${escHtml(t)}</li>`).join('')}</ol>
      </div>`
    : '';
  const groupsHtml = csData.groups.map(g => {
    const items = (g.items || []).map(item => {
      const line = item.term
        ? `<strong>${escHtml(item.term)}</strong> <span class="cs-arrow">→</span> ${escHtml(item.text)}`
        : escHtml(item.text);
      if (item.noteId) {
        return `<li class="cs-item cs-clickable" onclick="jumpToNoteFromMindmap('${item.noteId}')" title="Open full notes">${line}</li>`;
      }
      return `<li class="cs-item">${line}</li>`;
    }).join('');
    return `<section class="cs-group cs-${g.id}">
      <h3>${escHtml(g.title)}</h3>
      <ul class="cs-list">${items}</ul>
    </section>`;
  }).join('');
  body.innerHTML = `
    <div class="cheatsheet-wrap fade-in" id="cheatsheet-print">
      <div class="cs-toolbar">
        <p class="lead cs-lead">High-yield points for <strong>${escHtml(csData.chapterTitle)}</strong> — definitions, comparisons &amp; exam traps. Tap any linked line to open notes.</p>
        <div class="cs-actions">
          <button type="button" class="btn btn-sm btn-outline" onclick="copyCheatSheet()">📋 Copy all</button>
          <button type="button" class="btn btn-sm btn-outline" onclick="printCheatSheet()">🖨️ Print</button>
          <button type="button" class="btn btn-sm btn-primary" onclick="openQuizBuilder({topicId:'${selectedTopic}',source:'chapter',count:15})">▶ Quick quiz</button>
        </div>
      </div>
      ${topHtml}
      <div class="cs-grid">${groupsHtml}</div>
    </div>`;
}

function renderNotes(notes) {
  const body = document.getElementById('content-body');
  if (notes.length === 0) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><h3>No notes yet</h3><p>Click "Add New" to create notes</p></div>';
    return;
  }
  notes = [...notes].sort((a, b) => {
    const ka = noteSortKey(a), kb = noteSortKey(b);
    return ka[0] - kb[0] || ka[1] - kb[1] || ka[2].localeCompare(kb[2]);
  });
  const allQuestions = topicTextQuestions(selectedTopic);
  // Pool of questions by type so every note can offer a compact "Test yourself"
  // row — one jump per type (→ MCQ, → T/F, → Fill, → Q&A) — even when no
  // question explicitly links back to it.
  const XREF_TYPES = [['mcq','MCQ'], ['true_false','T/F'], ['fill_blank','Fill'], ['short_answer','Q&A']];
  const qByType = {};
  XREF_TYPES.forEach(([type]) => { qByType[type] = allQuestions.filter(q => q.type === type); });
  const cards = notes.map((n, i) => {
    const linked = allQuestions.filter(q => q.linksTo === n.id);
    const linkedGradable = linked.filter(q => isQuizType(q));
    const practiceBtn = linkedGradable.length
      ? `<button class="xref-btn xref-practice" onclick="practiceLinkedMcqs('${n.id}')" title="Jump to linked questions for this section">▶ Practice ${linkedGradable.length} linked Q${linkedGradable.length > 1 ? 's' : ''}</button>`
      : '';
    const xrefBtns = XREF_TYPES.map(([type, label]) => {
      // Prefer a question of this type that links to this note; otherwise pick a
      // representative one, spread across notes so different notes lead elsewhere.
      const pool = qByType[type];
      if (!pool.length) return '';
      const q = linked.find(l => l.type === type) || pool[i % pool.length];
      return `<button class="xref-btn" onclick="jumpToQuestion('${q.id}')" title="${escHtml(q.question)}">→ ${label}</button>`;
    }).filter(Boolean).join('');
    const linkBar = (practiceBtn || xrefBtns)
      ? `<div class="xref-bar">${practiceBtn}${xrefBtns ? `<span class="xref-label">More practice:</span>${xrefBtns}` : ''}</div>`
      : '';
    const collapsed = notesCollapsed[n.id] ? ' collapsed' : '';
    return `
    <div class="note-block fade-in${collapsed}" id="note-${n.id}" style="animation-delay:${Math.min(i,10)*0.03}s">
      <div class="note-head" onclick="toggleNote('${n.id}')">
        <div class="note-number">${i+1}</div>
        <h3>${escHtml(n.subtopic)}${sourceChipHtml(n.source)}${n.linkedMcqCount ? ` <span class="link-count" title="Questions linked to this section">${n.linkedMcqCount} linked Qs</span>` : ''}</h3>
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

  const filtered = questionFilter === 'all' ? questions : questions.filter(q => q.type === questionFilter);

  let tabsHtml = `<div class="question-type-tabs">${types.map(t => {
    const n = t.key === 'all' ? questions.length : questions.filter(q => q.type === t.key).length;
    return `<div class="q-tab ${questionFilter===t.key?'active':''}" onclick="setQuestionFilter('${t.key}')">${t.icon} ${t.label} (${n})</div>`;
  }).join('')}</div>`;

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
  renderQuestions(textQuestions(selectedTopic));
}

function renderDiagramQuestions(diagrams) {
  const body = document.getElementById('content-body');
  if (!diagrams.length) {
    body.innerHTML = '<div class="empty-state"><div class="empty-icon">🖼️</div><h3>No diagram MCQs in this chapter</h3><p>Diagram-based NEET questions appear here when available for this topic.</p></div>';
    return;
  }
  const byImage = new Map();
  diagrams.forEach(q => {
    if (!byImage.has(q.image)) byImage.set(q.image, { caption: q.caption || '', items: [] });
    byImage.get(q.image).items.push(q);
  });
  let idx = 0;
  const sections = [...byImage.entries()].map(([img, group], si) => {
    const cap = group.caption || `Figure ${si + 1}`;
    const cards = group.items.map(q => renderSingleQuestion(q, idx++, false, true)).join('');
    return `<section class="diagram-section fade-in" style="animation-delay:${Math.min(si, 8) * 0.04}s">
      <div class="diagram-section-head">
        <h3>${escHtml(cap)}</h3>
        <button class="btn btn-sm btn-primary" onclick="startDiagramQuiz('${img.replace(/'/g, "\\'")}')">▶ Quiz this figure (${group.items.length})</button>
      </div>
      <div class="mcq-image-wrap diagram-hero"><img class="mcq-image" src="${escHtml(img)}" alt="${escHtml(cap)}" loading="lazy"></div>
      <div class="questions-grid diagram-q-grid">${cards}</div>
    </section>`;
  }).join('');
  body.innerHTML = `
    <div class="diagram-toolbar">
      <p class="lead" style="margin:0">NEET-style questions based on textbook figures — 3 MCQs per diagram.</p>
      <button class="btn btn-outline" onclick="openQuizBuilder({topicId:'${selectedTopic}',source:'diagrams',count:15})">▶ Mixed diagram quiz</button>
    </div>
    ${sections}`;
}

function startDiagramQuiz(imagePath) {
  const ids = diagramQuestions(selectedTopic).filter(q => q.image === imagePath).map(q => q.id);
  if (!ids.length) return;
  quizSession = {
    source: 'diagrams', topicId: selectedTopic,
    ids: _shuffle(ids), index: 0, answers: {}, guessed: {},
    startedAt: Date.now(), qStartedAt: Date.now(), finished: false
  };
  currentView = 'quiz';
  render();
}

function renderSingleQuestion(q, idx, targeted, hideImage) {
  const answered = userAnswers[q.id];
  // Cap the stagger so long lists never wait seconds to appear; a targeted
  // single-card re-render skips the fade entirely (updates in place).
  const delay = Math.min(idx, 10) * 0.025;
  let html = `<div class="question-card${targeted ? '' : ' fade-in'}${q.type === 'true_false' && answered !== undefined ? (answered === q.correctAnswer ? ' tf-card-ok' : ' tf-card-bad') : ''}" id="qcard-${q.id}" data-idx="${idx}" style="${targeted ? '' : `animation-delay:${delay}s`}">`;
  const typeLabels = {true_false:'TRUE / FALSE',fill_blank:'FILL IN THE BLANK',mcq:'MULTIPLE CHOICE',match:'MATCH THE FOLLOWING',short_answer:'SHORT / LONG ANSWER'};
  const linkedNote = q.linksTo ? appData.content.find(c => c.id === q.linksTo && c.type === 'note') : null;
  const diagramBadge = isDiagramMcq(q) ? ' <span class="src-chip" title="Diagram-based NEET MCQ">🖼️ Diagram</span>' : '';
  html += `<div class="q-label">${q.subtopic || typeLabels[q.type] || q.type}${
    sourceChipHtml(q.source)
  }${diagramBadge}${
    linkedNote ? `<button class="xref-btn xref-back" onclick="jumpToNote('${linkedNote.id}')" title="${escHtml(linkedNote.subtopic)}">↩ Back to Notes</button>` : ''
  }</div>`;
  if (!hideImage) html += mcqImageHtml(q);
  html += `<div class="q-text">Q${idx+1}. ${escHtml(q.question).replace(/\n/g, '<br>')}</div>`;

  if (q.type === 'true_false') {
    html += renderTfOptions(q, answered, v => `onclick="answerTF('${q.id}','${v}')"`);
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
  html += `<div class="toggle-answer" onclick="toggleAnswer('ans-${q.id}')">${answered !== undefined ? '👁️ Answer & Explanation' : '👁️ Show Answer & Explanation'}</div>`;
  html += `<div class="answer-reveal ${answered !== undefined ? 'show' : ''}" id="ans-${q.id}">
    <p><strong>✅ Answer:</strong> ${fmtText(q.type === 'true_false' ? tfAnswerDisplay(q) : (q.answer || ''))}</p>
    ${q.teacherTip?`<div class="tip-box" style="margin-top:8px"><strong>💡 Teacher's Tip:</strong> ${fmtText(q.teacherTip)}</div>`:''}
    ${q.examTip?`<div class="tip-box exam" style="margin-top:6px"><strong>🎯 Exam Tip:</strong> ${fmtText(q.examTip)}</div>`:''}
    ${linkedNote?`<div style="margin-top:8px"><button class="xref-btn xref-back" onclick="jumpToNote('${linkedNote.id}')">↩ Revise: ${escHtml(linkedNote.subtopic)}</button></div>`:''}
  </div>`;

  const bm = isBookmarked(q.id);
  html += `<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
    <button class="btn btn-sm ${bm ? 'btn-primary' : 'btn-outline'}" onclick="toggleBookmark('${q.id}');updateQuestionCard('${q.id}')">${bm ? '🔖 Saved' : '🔖 Save'}</button>
    <button class="btn btn-sm btn-outline" onclick="retrySingleQuestion('${q.id}')">▶ Practice</button>
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
  if (q) { recordAttempt(id, val === q.correctAnswer); recordDailyMcq(); }
  updateQuestionCard(id);
}

function answerMCQ(id, val) {
  userAnswers[id] = val;
  const q = appData.content.find(c => c.id === id);
  if (q) { recordAttempt(id, val === q.correctOption); recordDailyMcq(); }
  updateQuestionCard(id);
}

function checkBlank(id) {
  const input = document.getElementById('blank-'+id);
  userAnswers[id] = input.value;
  const q = appData.content.find(c => c.id === id);
  if (q) {
    recordAttempt(id, input.value.toLowerCase().trim() === (q.blankAnswer || '').toLowerCase().trim());
    recordDailyMcq();
  }
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
function buildSyncPayload() {
  let deviceId = '';
  try { deviceId = localStorage.getItem('studyhub_device_id') || ''; } catch (e) {}
  if (!deviceId) {
    deviceId = 'dev-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    try { localStorage.setItem('studyhub_device_id', deviceId); } catch (e) {}
  }
  return {
    _studyhub: true,
    _version: DATA_VERSION,
    _exportedAt: new Date().toISOString(),
    _deviceId: deviceId,
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
    progress: studyProgress,
    bookmarks: [...studyBookmarks],
    activity: studyActivity
  };
}

function exportData() {
  const exportObj = buildSyncPayload();
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

function applyImportedData(imp, mode, options) {
  options = options || {};
  window._suppressSyncDirty = true;
  let result;
  if (mode === 'replace') {
    appData.classes = imp.classes;
    appData.subjects = imp.subjects;
    appData.topics = imp.topics;
    appData.content = imp.content;
    appData.deletedContentIds = imp.deletedContentIds || [];
    if (imp.progress && typeof imp.progress === 'object') { studyProgress = imp.progress; saveProgress(); }
    if (Array.isArray(imp.bookmarks)) { studyBookmarks = new Set(imp.bookmarks); saveBookmarks(); }
    if (imp.activity && typeof imp.activity === 'object') { studyActivity = imp.activity; saveActivity(); }
    saveData({ skipSync: true });
    if (!options.silent) showToast('success', '🔄 Data replaced! ' + appData.content.length + ' items loaded.');
    result = { added: imp.content.length, mode: 'replace' };
  } else {
  const existingClassIds = new Set(appData.classes.map(c => c.id));
  imp.classes.forEach(c => { if (!existingClassIds.has(c.id)) appData.classes.push(c); });

  const existingSubIds = new Set(appData.subjects.map(s => s.id));
  imp.subjects.forEach(s => { if (!existingSubIds.has(s.id)) appData.subjects.push(s); });

  const existingTopicIds = new Set(appData.topics.map(t => t.id));
  imp.topics.forEach(t => { if (!existingTopicIds.has(t.id)) appData.topics.push(t); });

  const existingContentIds = new Set(appData.content.map(c => c.id));
  let added = 0;
  let updated = 0;
  imp.content.forEach(c => {
    if (!existingContentIds.has(c.id)) {
      appData.content.push(c);
      existingContentIds.add(c.id);
      added++;
      return;
    }
    if (options.mergeUpdates) {
      const idx = appData.content.findIndex(x => x.id === c.id);
      if (idx >= 0) {
        appData.content[idx] = JSON.parse(JSON.stringify(c));
        updated++;
      }
    }
  });
  const del = new Set(appData.deletedContentIds || []);
  (imp.deletedContentIds || []).forEach(function (id) { del.add(id); });
  appData.deletedContentIds = Array.from(del);
  if (imp.progress && typeof imp.progress === 'object') {
    studyProgress = Object.assign({}, imp.progress, studyProgress);
    saveProgress();
  }
  if (Array.isArray(imp.bookmarks)) {
    imp.bookmarks.forEach(id => studyBookmarks.add(id));
    saveBookmarks();
  }
  if (imp.activity && typeof imp.activity === 'object') {
    studyActivity = Object.assign({}, imp.activity, studyActivity);
    saveActivity();
  }
  saveData({ skipSync: true });
  if (!options.silent) {
    const msg = updated
      ? '🔀 Merged! ' + added + ' new, ' + updated + ' updated. Total: ' + appData.content.length
      : '🔀 Merged! ' + added + ' new items added. Total: ' + appData.content.length;
    showToast('success', msg);
  }
  result = { added, updated, mode: 'merge' };
  }
  window._suppressSyncDirty = false;
  return result;
}

function confirmImport() {
  if (!pendingImport) return;
  const mode = document.querySelector('input[name="import-mode"]:checked').value;
  applyImportedData(pendingImport, mode);
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
  if (typeof setupGithubSync === 'function') setupGithubSync();
}
