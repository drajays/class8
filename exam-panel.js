// ============================================================
// StudyHub — NTA-style Mock Test / CBT Exam Panel
// Depends on: app.js (appData, gradableQuestions, isQuizType, etc.)
// ============================================================

let examSession = null;
let examTimerInterval = null;

const EXAM_DEFAULT_DURATION = 180; // minutes (NEET-style)

function defaultExamConfig() {
  return {
    subjectId: selectedSubject || '',
    topicId: selectedTopic || '',
    subtopic: '',
    source: 'chapter',
    count: 20,
    durationMin: EXAM_DEFAULT_DURATION
  };
}

function openExamPanel(prefill) {
  prefill = prefill || {};
  examSession = {
    phase: 'setup',
    config: Object.assign(defaultExamConfig(), prefill),
    ids: [],
    index: 0,
    responses: {},
    marked: {},
    visited: {},
    draft: {},
    startedAt: null,
    endsAt: null,
    paletteHidden: false,
    instructionsAccepted: false
  };
  currentView = 'exam';
  updateExamModeClass();
  render();
}

function quitExamPanel(force) {
  if (!force && examSession && examSession.phase === 'active') {
    if (!confirm('Leave the mock test? Your progress in this session will be lost.')) return;
  }
  stopExamTimer();
  examSession = null;
  currentView = 'home';
  updateExamModeClass();
  render();
}

function updateExamModeClass() {
  const on = currentView === 'exam' && examSession &&
    (examSession.phase === 'instructions' || examSession.phase === 'active');
  document.body.classList.toggle('exam-mode', on);
}

// ---------- Pool building ----------

function getAllExamQuestions() {
  const seen = new Set();
  const out = [];
  appData.topics.forEach(t => {
    gradableQuestions(t.id).filter(isQuizType).forEach(q => {
      if (!seen.has(q.id)) { seen.add(q.id); out.push(q); }
    });
  });
  return out;
}

function getAllMistakeQuestionsGlobal() {
  const seen = new Set();
  const out = [];
  appData.topics.forEach(t => {
    getMistakeQuestions(t.id).forEach(q => {
      if (!seen.has(q.id)) { seen.add(q.id); out.push(q); }
    });
  });
  return out;
}

function examMatchesSubtopic(q, subtopic) {
  if (!subtopic) return true;
  const st = subtopic.toLowerCase();
  if ((q.subtopic || '').toLowerCase() === st) return true;
  if (q.linksTo) {
    const note = appData.content.find(c => c.id === q.linksTo);
    if (note && (note.subtopic || '').toLowerCase() === st) return true;
  }
  return false;
}

function getExamSubtopics(subjectId, topicId) {
  const topics = topicId
    ? appData.topics.filter(t => t.id === topicId)
    : subjectId
      ? appData.topics.filter(t => t.subjectId === subjectId)
      : appData.topics;
  const set = new Set();
  topics.forEach(t => {
    topicNotes(t.id).forEach(n => { if (n.subtopic) set.add(n.subtopic); });
    topicTextQuestions(t.id).forEach(q => { if (q.subtopic) set.add(q.subtopic); });
  });
  return [...set].sort((a, b) => a.localeCompare(b));
}

function pickExamPool(config) {
  const { subjectId, topicId, subtopic, source } = config;
  let pool = [];

  if (source === 'mistakes') {
    pool = getAllMistakeQuestionsGlobal();
  } else if (source === 'random') {
    pool = getAllExamQuestions();
  } else if (topicId) {
    pool = gradableQuestions(topicId).filter(isQuizType);
  } else if (subjectId) {
    pool = appData.topics
      .filter(t => t.subjectId === subjectId)
      .flatMap(t => gradableQuestions(t.id).filter(isQuizType));
  } else {
    pool = getAllExamQuestions();
  }

  const seen = new Set();
  pool = pool.filter(q => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });

  if (subjectId) {
    const tids = new Set(appData.topics.filter(t => t.subjectId === subjectId).map(t => t.id));
    pool = pool.filter(q => tids.has(q.topicId));
  }
  if (topicId) pool = pool.filter(q => q.topicId === topicId);
  if (subtopic) pool = pool.filter(q => examMatchesSubtopic(q, subtopic));

  return pool;
}

function examSubjectName(id) {
  const s = appData.subjects.find(x => x.id === id);
  return s ? s.name.toUpperCase() : 'ALL SUBJECTS';
}

function examTopicName(id) {
  const t = appData.topics.find(x => x.id === id);
  return t ? t.name : 'All Chapters';
}

// ---------- Question status (NTA palette) ----------

function examQuestionStatus(qId, idx) {
  const es = examSession;
  if (!es) return 'not-visited';
  const visited = es.visited[qId];
  const saved = es.responses[qId];
  const marked = es.marked[qId];
  const hasAnswer = saved && saved.value !== undefined && saved.value !== null && saved.value !== '';

  if (marked && hasAnswer) return 'answered-marked';
  if (marked && !hasAnswer) return 'marked-review';
  if (hasAnswer) return 'answered';
  if (visited || idx === es.index) return 'not-answered';
  return 'not-visited';
}

function examStatusCounts() {
  const counts = { 'not-visited': 0, 'not-answered': 0, answered: 0, 'marked-review': 0, 'answered-marked': 0 };
  if (!examSession) return counts;
  examSession.ids.forEach((id, i) => { counts[examQuestionStatus(id, i)]++; });
  return counts;
}

function currentExamQuestion() {
  if (!examSession || !examSession.ids.length) return null;
  const id = examSession.ids[examSession.index];
  return appData.content.find(c => c.id === id);
}

// ---------- Timer ----------

function startExamTimer() {
  stopExamTimer();
  if (!examSession || !examSession.endsAt) return;
  examTimerInterval = setInterval(() => {
    if (!examSession || examSession.phase !== 'active') { stopExamTimer(); return; }
    const el = document.getElementById('nta-timer');
    if (el) el.textContent = formatExamTime(examSession.endsAt - Date.now());
    if (Date.now() >= examSession.endsAt) finishExamAutoSubmit();
  }, 1000);
}

function stopExamTimer() {
  if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
}

function formatExamTime(ms) {
  if (ms <= 0) return '00:00:00';
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return [h, m, sec].map(n => String(n).padStart(2, '0')).join(':');
}

function finishExamAutoSubmit() {
  stopExamTimer();
  if (!examSession) return;
  examSession.phase = 'complete';
  examSession.autoSubmitted = true;
  gradeExamSession();
  updateExamModeClass();
  renderMain();
}

// ---------- Setup UI handlers ----------

function onExamSubjectChange() {
  if (!examSession) return;
  const sub = document.getElementById('exam-subject');
  const top = document.getElementById('exam-topic');
  const st = document.getElementById('exam-subtopic');
  if (!sub || !top || !st) return;
  examSession.config.subjectId = sub.value;
  examSession.config.topicId = '';
  examSession.config.subtopic = '';
  const topics = sub.value
    ? appData.topics.filter(t => t.subjectId === sub.value)
    : appData.topics;
  top.innerHTML = '<option value="">— All chapters —</option>' +
    topics.map(t => `<option value="${t.id}">${escHtml(t.icon + ' ' + t.name)}</option>`).join('');
  st.innerHTML = '<option value="">— All subtopics —</option>' +
    getExamSubtopics(sub.value, '').map(s => `<option value="${escHtml(s)}">${escHtml(s)}</option>`).join('');
  updateExamPoolHint();
}

function onExamTopicChange() {
  if (!examSession) return;
  const sub = document.getElementById('exam-subject');
  const top = document.getElementById('exam-topic');
  const st = document.getElementById('exam-subtopic');
  if (!top || !st) return;
  examSession.config.topicId = top.value;
  examSession.config.subtopic = '';
  st.innerHTML = '<option value="">— All subtopics —</option>' +
    getExamSubtopics(sub ? sub.value : '', top.value)
      .map(s => `<option value="${escHtml(s)}">${escHtml(s)}</option>`).join('');
  updateExamPoolHint();
}

function onExamSubtopicChange() {
  if (!examSession) return;
  const st = document.getElementById('exam-subtopic');
  if (st) examSession.config.subtopic = st.value;
  updateExamPoolHint();
}

function onExamSourceChange() {
  if (!examSession) return;
  const src = document.getElementById('exam-source');
  if (src) examSession.config.source = src.value;
  updateExamPoolHint();
}

function onExamCountChange() {
  if (!examSession) return;
  const c = document.getElementById('exam-count');
  if (c) examSession.config.count = Math.max(1, parseInt(c.value, 10) || 20);
  updateExamPoolHint();
}

function onExamDurationChange() {
  if (!examSession) return;
  const d = document.getElementById('exam-duration');
  if (d) examSession.config.durationMin = Math.max(0, parseInt(d.value, 10) || 0);
}

function updateExamPoolHint() {
  const hint = document.getElementById('exam-pool-hint');
  const btn = document.getElementById('exam-proceed-btn');
  if (!hint || !examSession) return;
  const pool = pickExamPool(examSession.config);
  const count = examSession.config.count;
  hint.textContent = pool.length
    ? `${pool.length} question${pool.length > 1 ? 's' : ''} available · mock test will use ${Math.min(count, pool.length)}`
    : 'No questions match this selection — change subject, chapter, or question source';
  if (btn) btn.disabled = pool.length === 0;
}

function examGoToInstructions() {
  if (!examSession) return;
  const sub = document.getElementById('exam-subject');
  const top = document.getElementById('exam-topic');
  const st = document.getElementById('exam-subtopic');
  const src = document.getElementById('exam-source');
  const cnt = document.getElementById('exam-count');
  const dur = document.getElementById('exam-duration');
  if (sub) examSession.config.subjectId = sub.value;
  if (top) examSession.config.topicId = top.value;
  if (st) examSession.config.subtopic = st.value;
  if (src) examSession.config.source = src.value;
  if (cnt) examSession.config.count = Math.max(1, parseInt(cnt.value, 10) || 20);
  if (dur) examSession.config.durationMin = Math.max(0, parseInt(dur.value, 10) || 0);
  const pool = pickExamPool(examSession.config);
  if (!pool.length) { showToast('error', 'No questions available for this selection.'); return; }
  examSession.phase = 'instructions';
  examSession.instructionsAccepted = false;
  updateExamModeClass();
  renderMain();
}

function examToggleInstructions() {
  if (!examSession) return;
  const cb = document.getElementById('exam-instr-check');
  examSession.instructionsAccepted = !!(cb && cb.checked);
  const btn = document.getElementById('exam-start-btn');
  if (btn) btn.disabled = !examSession.instructionsAccepted;
}

function startExamTest() {
  if (!examSession || !examSession.instructionsAccepted) return;
  const pool = pickExamPool(examSession.config);
  if (!pool.length) { showToast('error', 'No questions available.'); return; }
  const count = Math.min(examSession.config.count, pool.length);
  examSession.ids = _shuffle(pool).slice(0, count).map(q => q.id);
  examSession.index = 0;
  examSession.responses = {};
  examSession.marked = {};
  examSession.visited = {};
  examSession.draft = {};
  examSession.startedAt = Date.now();
  if (examSession.config.durationMin > 0) {
    examSession.endsAt = examSession.startedAt + examSession.config.durationMin * 60 * 1000;
  } else {
    examSession.endsAt = null;
  }
  const firstId = examSession.ids[0];
  if (firstId) examSession.visited[firstId] = true;
  examSession.phase = 'active';
  updateExamModeClass();
  renderMain();
  startExamTimer();
}

// ---------- CBT actions ----------

function examGetDraft(qId) {
  if (!examSession) return undefined;
  if (examSession.draft[qId] !== undefined) return examSession.draft[qId];
  const saved = examSession.responses[qId];
  return saved ? saved.value : undefined;
}

function examSelectDraft(value) {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  examSession.draft[q.id] = value;
  if (q.type !== 'fill_blank') {
    renderExamActive(document.getElementById('main-content'));
  }
}

function examToggleMcqDraft(optIdx) {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  const cur = examGetDraft(q.id);
  examSession.draft[q.id] = cur === optIdx ? undefined : optIdx;
  renderExamActive(document.getElementById('main-content'));
}

function examClearResponse() {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  delete examSession.draft[q.id];
  delete examSession.responses[q.id];
  renderExamActive(document.getElementById('main-content'));
}

function examSaveCurrent() {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  const draft = examGetDraft(q.id);
  if (draft !== undefined && draft !== null && draft !== '') {
    examSession.responses[q.id] = { value: draft, savedAt: Date.now() };
  }
}

function examSaveAndNext() {
  if (!examSession) return;
  examSaveCurrent();
  examGoToIndex(examSession.index + 1, true);
}

function examSaveAndMarkReview() {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  examSaveCurrent();
  examSession.marked[q.id] = true;
  renderExamActive(document.getElementById('main-content'));
}

function examMarkReviewAndNext() {
  const q = currentExamQuestion();
  if (!q || !examSession) return;
  examSession.marked[q.id] = true;
  examGoToIndex(examSession.index + 1, true);
}

function examBack() {
  if (!examSession || examSession.index <= 0) return;
  examGoToIndex(examSession.index - 1, false);
}

function examNextNav() {
  if (!examSession) return;
  if (examSession.index >= examSession.ids.length - 1) return;
  examGoToIndex(examSession.index + 1, false);
}

function examGoToIndex(idx, autoSave) {
  if (!examSession) return;
  if (autoSave) examSaveCurrent();
  if (idx < 0 || idx >= examSession.ids.length) {
    if (idx >= examSession.ids.length) submitExamConfirm();
    return;
  }
  examSession.index = idx;
  const id = examSession.ids[idx];
  examSession.visited[id] = true;
  renderExamActive(document.getElementById('main-content'));
}

function examPaletteClick(idx) {
  if (!examSession) return;
  examGoToIndex(idx, false);
}

function toggleExamPalette() {
  if (!examSession) return;
  examSession.paletteHidden = !examSession.paletteHidden;
  const root = document.querySelector('.nta-exam');
  if (root) root.classList.toggle('nta-palette-hidden', examSession.paletteHidden);
  const tab = document.getElementById('nta-palette-tab');
  if (tab) tab.textContent = examSession.paletteHidden ? '<' : '>';
}

function examScrollTop() {
  const el = document.getElementById('nta-q-scroll');
  if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
}

function examScrollBottom() {
  const el = document.getElementById('nta-q-scroll');
  if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
}

function submitExamConfirm() {
  if (!examSession) return;
  const counts = examStatusCounts();
  const unanswered = counts['not-answered'] + counts['not-visited'];
  let msg = 'Submit mock test?';
  if (unanswered > 0) msg += `\n\n${unanswered} question(s) not answered.`;
  if (!confirm(msg)) return;
  submitExam();
}

function submitExam() {
  if (!examSession) return;
  examSaveCurrent();
  stopExamTimer();
  examSession.phase = 'complete';
  gradeExamSession();
  updateExamModeClass();
  renderMain();
}

function gradeExamSession() {
  if (!examSession) return;
  let correct = 0;
  let attempted = 0;
  examSession.ids.forEach(id => {
    const q = appData.content.find(c => c.id === id);
    const resp = examSession.responses[id];
    if (!q || !resp || resp.value === undefined || resp.value === null || resp.value === '') return;
    attempted++;
    let ok = false;
    if (q.type === 'mcq') ok = resp.value === q.correctOption;
    else if (q.type === 'true_false') ok = resp.value === q.correctAnswer;
    else if (q.type === 'fill_blank') {
      ok = String(resp.value).toLowerCase().trim() === String(q.blankAnswer || '').toLowerCase().trim();
    }
    if (ok) correct++;
    recordAttempt(id, ok, { inQuiz: true });
  });
  examSession.results = {
    correct,
    attempted,
    total: examSession.ids.length,
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
  };
}

// ---------- Render ----------

function renderExamView(el) {
  if (!examSession) {
    openExamPanel();
    return;
  }
  if (examSession.phase === 'setup') renderExamSetup(el);
  else if (examSession.phase === 'instructions') renderExamInstructions(el);
  else if (examSession.phase === 'active') renderExamActive(el);
  else renderExamResults(el);
}

function renderExamSetup(el) {
  const cfg = examSession.config;
  const subjects = appData.subjects;
  const topics = cfg.subjectId
    ? appData.topics.filter(t => t.subjectId === cfg.subjectId)
    : appData.topics;
  const subtopics = getExamSubtopics(cfg.subjectId, cfg.topicId);

  el.innerHTML = `
    <div class="nta-setup-wrap fade-in">
      <div class="nta-brand-bar">
        <div class="nta-brand-left">
          <div class="nta-brand-logo">NTA<br>Mock</div>
          <div>
            <div class="nta-brand-title">National Testing Agency — Test Practice Centre</div>
            <div class="nta-brand-sub">Computer Based Test (CBT) Mock Examination · StudyHub Class 8</div>
          </div>
        </div>
        <button type="button" class="nta-btn-back" onclick="quitExamPanel(true)">← Back to StudyHub</button>
      </div>
      <div class="nta-setup-card">
        <h1>Mock Test Configuration</h1>
        <p class="nta-welcome">Welcome to <strong>StudyHub Mock Test Centre</strong>. This mock test familiarizes you with the Computer Based Test (CBT) interface used in NEET, JEE and other NTA examinations. Select your paper below and click <strong>Proceed to Instructions</strong>.</p>
        <div class="nta-form-grid">
          <div class="nta-field">
            <label>Select Subject</label>
            <select id="exam-subject" onchange="onExamSubjectChange()">
              <option value="">— All subjects —</option>
              ${subjects.map(s => `<option value="${s.id}" ${cfg.subjectId === s.id ? 'selected' : ''}>${s.icon} ${escHtml(s.name)}</option>`).join('')}
            </select>
          </div>
          <div class="nta-field">
            <label>Chapter / Topic</label>
            <select id="exam-topic" onchange="onExamTopicChange()">
              <option value="">— All chapters —</option>
              ${topics.map(t => `<option value="${t.id}" ${cfg.topicId === t.id ? 'selected' : ''}>${escHtml(t.name)}</option>`).join('')}
            </select>
          </div>
          <div class="nta-field">
            <label>Subtopic (Section)</label>
            <select id="exam-subtopic" onchange="onExamSubtopicChange()">
              <option value="">— All subtopics —</option>
              ${subtopics.map(s => `<option value="${escHtml(s)}" ${cfg.subtopic === s ? 'selected' : ''}>${escHtml(s)}</option>`).join('')}
            </select>
          </div>
          <div class="nta-field">
            <label>Question Source</label>
            <select id="exam-source" onchange="onExamSourceChange()">
              <option value="chapter" ${cfg.source === 'chapter' ? 'selected' : ''}>Chapter / Selection — MCQ, T/F, Fill blank</option>
              <option value="random" ${cfg.source === 'random' ? 'selected' : ''}>Random — from entire syllabus</option>
              <option value="mistakes" ${cfg.source === 'mistakes' ? 'selected' : ''}>Mistake Book — wrong &amp; guessed answers</option>
            </select>
          </div>
          <div class="nta-field">
            <label>Number of Questions</label>
            <input type="number" id="exam-count" min="1" max="200" value="${cfg.count}" onchange="onExamCountChange()" oninput="onExamCountChange()">
          </div>
          <div class="nta-field">
            <label>Duration (minutes, 0 = no timer)</label>
            <input type="number" id="exam-duration" min="0" max="300" value="${cfg.durationMin}" onchange="onExamDurationChange()">
          </div>
        </div>
        <p id="exam-pool-hint" class="nta-pool-hint">Loading pool…</p>
        <div class="nta-start-row">
          <button type="button" id="exam-proceed-btn" class="nta-btn-start" onclick="examGoToInstructions()">Proceed to Instructions</button>
        </div>
      </div>
    </div>`;
  updateExamPoolHint();
}

function renderExamInstructions(el) {
  const cfg = examSession.config;
  const subName = cfg.subjectId ? examSubjectName(cfg.subjectId) : 'ALL SUBJECTS';
  const dur = cfg.durationMin || EXAM_DEFAULT_DURATION;
  const counts = examStatusCounts();

  el.innerHTML = `
    <div class="nta-instr-wrap fade-in">
      <div class="nta-instr-head">
        <h1>General Instructions</h1>
        <p>Mock Test · ${escHtml(subName)} · ${examSession.config.count} questions · ${dur} min</p>
      </div>
      <div class="nta-instr-body">
        <h2>Please read the instructions carefully</h2>
        <p><strong>Total duration</strong> of this mock test is <strong>${dur} min</strong>.</p>
        <p>The countdown timer in the top right corner of the screen will display the remaining time. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</p>

        <h2>Question Palette</h2>
        <p>The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</p>
        <div class="nta-instr-legend">
          <div class="nta-legend-item"><span class="nta-shape not-visited"></span> You have not visited the question yet.</div>
          <div class="nta-legend-item"><span class="nta-shape not-answered"></span> You have not answered the question.</div>
          <div class="nta-legend-item"><span class="nta-shape answered"></span> You have answered the question.</div>
          <div class="nta-legend-item"><span class="nta-shape marked-review"></span> You have NOT answered the question, but have marked the question for review.</div>
          <div class="nta-legend-item"><span class="nta-shape answered-marked"></span> Answered and Marked for Review (will be considered for evaluation).</div>
        </div>
        <p>You can click on the <strong>&gt;</strong> arrow to collapse the question palette. Click <strong>&lt;</strong> to expand it again.</p>

        <h2>Navigating to a Question</h2>
        <ul>
          <li>Click on the question number in the Question Palette to go to that question directly. <em>Note: this does NOT save your answer to the current question.</em></li>
          <li>Click <strong>Save &amp; Next</strong> to save your answer and go to the next question.</li>
          <li>Click <strong>Mark for Review &amp; Next</strong> to mark for review without saving, then go to next.</li>
        </ul>

        <h2>Answering a Question (Multiple Choice)</h2>
        <ul>
          <li>To select your answer, click on the button of one of the options.</li>
          <li>To deselect, click the chosen option again or click <strong>Clear Response</strong>.</li>
          <li>To change your answer, click another option.</li>
          <li>To save your answer, you MUST click <strong>Save &amp; Next</strong>.</li>
          <li>To mark for review with answer saved, click <strong>Save &amp; Mark for Review</strong>.</li>
        </ul>

        <div class="nta-instr-check">
          <input type="checkbox" id="exam-instr-check" onchange="examToggleInstructions()">
          <label for="exam-instr-check">I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. / any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action.</label>
        </div>
      </div>
      <div class="nta-instr-foot">
        <button type="button" class="nta-btn-back" onclick="examSession.phase='setup';updateExamModeClass();renderMain()">← Back</button>
        <button type="button" id="exam-start-btn" class="nta-btn-proceed" disabled onclick="startExamTest()">Start Mock Test</button>
      </div>
    </div>`;
}

function renderExamActive(el) {
  const q = currentExamQuestion();
  if (!q) { submitExam(); return; }

  const idx = examSession.index;
  const total = examSession.ids.length;
  const cfg = examSession.config;
  const subName = cfg.subjectId ? examSubjectName(cfg.subjectId) : 'ALL SUBJECTS';
  const draft = examGetDraft(q.id);
  const counts = examStatusCounts();
  const remaining = examSession.endsAt ? formatExamTime(examSession.endsAt - Date.now()) : '--:--:--';

  let optionsHtml = '';
  if (q.type === 'mcq' && q.options) {
    optionsHtml = `<div class="nta-options">${q.options.map((opt, oi) => {
      const sel = draft === oi ? ' selected' : '';
      const checked = draft === oi ? 'checked' : '';
      return `<label class="nta-opt${sel}" onclick="examToggleMcqDraft(${oi})">
        <input type="radio" name="nta-opt" ${checked} tabindex="-1">
        <span>(${String.fromCharCode(65 + oi)}) ${escHtml(opt)}</span>
      </label>`;
    }).join('')}</div>`;
  } else if (q.type === 'true_false') {
    optionsHtml = `<div class="nta-tf-row">
      <button type="button" class="nta-tf-btn ${draft === 'true' ? 'selected' : ''}" onclick="examSelectDraft('true')">True</button>
      <button type="button" class="nta-tf-btn ${draft === 'false' ? 'selected' : ''}" onclick="examSelectDraft('false')">False</button>
    </div>`;
  } else if (q.type === 'fill_blank') {
    optionsHtml = `<input type="text" class="nta-fill-input" id="nta-fill-input" placeholder="Type your answer…" value="${draft !== undefined ? escHtml(String(draft)) : ''}" oninput="examSelectDraft(this.value)">`;
  }

  const imgHtml = q.image
    ? `<div class="nta-q-image"><img src="${escHtml(q.image)}" alt="Figure" loading="lazy">${q.caption ? `<div style="font-size:.78rem;margin-top:6px;color:#555">${escHtml(q.caption)}</div>` : ''}</div>`
    : '';

  const paletteBtns = examSession.ids.map((id, i) => {
    const st = examQuestionStatus(id, i);
    const cur = i === idx ? ' current' : '';
    return `<button type="button" class="nta-palette-btn ${st}${cur}" onclick="examPaletteClick(${i})">${String(i + 1).padStart(2, '0')}</button>`;
  }).join('');

  el.innerHTML = `
    <div class="nta-exam ${examSession.paletteHidden ? 'nta-palette-hidden' : ''}">
      <header class="nta-exam-header">
        <div class="nta-exam-logos">
          <div class="nta-mini-logo">NTA</div>
          <div class="nta-mini-logo" style="background:#c62828;font-size:.5rem">MoE</div>
        </div>
        <div class="nta-candidate-box">
          <div class="nta-candidate-photo">👤</div>
          <dl class="nta-candidate-info">
            <dt>Candidate Name</dt><dd>StudyHub Student</dd>
            <dt>Exam Name</dt><dd>MOCK TEST</dd>
            <dt>Subject Name</dt><dd>${escHtml(subName)}</dd>
          </dl>
        </div>
        <div class="nta-timer-box">
          <div class="nta-timer-label">Remaining Time</div>
          <div class="nta-timer-value" id="nta-timer">${remaining}</div>
        </div>
        <div class="nta-lang-box">
          <label style="font-size:.72rem;font-weight:700;display:block;margin-bottom:4px">Language</label>
          <select disabled title="English only in StudyHub mock test"><option>English</option></select>
        </div>
      </header>
      <div class="nta-exam-body">
        <div class="nta-exam-main">
          <div class="nta-q-area">
            <div class="nta-q-scroll" id="nta-q-scroll">
              <div class="nta-q-title">Question ${idx + 1}:</div>
              <div class="nta-q-text">${escHtml(q.question).replace(/\n/g, '<br>')}</div>
              ${imgHtml}
              ${optionsHtml}
            </div>
            <div class="nta-scroll-btns">
              <button type="button" class="nta-scroll-btn" onclick="examScrollTop()" title="Scroll to top">▲</button>
              <button type="button" class="nta-scroll-btn" onclick="examScrollBottom()" title="Scroll to bottom">▼</button>
            </div>
            <div class="nta-action-row">
              <button type="button" class="nta-act nta-act-save" onclick="examSaveAndNext()">Save &amp; Next</button>
              <button type="button" class="nta-act nta-act-clear" onclick="examClearResponse()">Clear</button>
              <button type="button" class="nta-act nta-act-save-mark" onclick="examSaveAndMarkReview()">Save &amp; Mark for Review</button>
              <button type="button" class="nta-act nta-act-mark-next" onclick="examMarkReviewAndNext()">Mark for Review &amp; Next</button>
            </div>
            <div class="nta-nav-row">
              <div class="nta-nav-btns">
                <button type="button" class="nta-nav-btn" onclick="examBack()" ${idx <= 0 ? 'disabled' : ''}>&lt;&lt; Back</button>
                <button type="button" class="nta-nav-btn" onclick="examNextNav()" ${idx >= total - 1 ? 'disabled' : ''}>Next &gt;&gt;</button>
              </div>
              <button type="button" class="nta-submit-btn" onclick="submitExamConfirm()">Submit</button>
            </div>
          </div>
          <button type="button" class="nta-palette-tab" id="nta-palette-tab" onclick="toggleExamPalette()">${examSession.paletteHidden ? '<' : '>'}</button>
        </div>
        <aside class="nta-palette">
          <div class="nta-palette-legend">
            <h4>Question Palette</h4>
            <div class="nta-pl-row"><span class="nta-shape not-visited"></span> Not Visited <span class="nta-pl-count">${counts['not-visited']}</span></div>
            <div class="nta-pl-row"><span class="nta-shape not-answered"></span> Not Answered <span class="nta-pl-count">${counts['not-answered']}</span></div>
            <div class="nta-pl-row"><span class="nta-shape answered"></span> Answered <span class="nta-pl-count">${counts.answered + counts['answered-marked']}</span></div>
            <div class="nta-pl-row"><span class="nta-shape marked-review"></span> Marked for Review <span class="nta-pl-count">${counts['marked-review']}</span></div>
            <div class="nta-pl-row"><span class="nta-shape answered-marked"></span> Answered &amp; Marked <span class="nta-pl-count">${counts['answered-marked']}</span></div>
          </div>
          <div class="nta-palette-grid">${paletteBtns}</div>
        </aside>
      </div>
    </div>`;
}

function renderExamResults(el) {
  const r = examSession.results || { correct: 0, attempted: 0, total: 0, accuracy: 0 };
  const counts = examStatusCounts();
  const auto = examSession.autoSubmitted ? '<p style="color:#c62828;font-weight:700">Time expired — test auto-submitted.</p>' : '';

  el.innerHTML = `
    <div class="nta-results fade-in">
      <h1>Mock Test Complete</h1>
      ${auto}
      <div class="nta-results-score">${r.correct} / ${r.total}</div>
      <p style="font-size:1.1rem;color:#555">Correct answers · ${r.accuracy}% accuracy on attempted questions</p>
      <div class="nta-results-grid">
        <div class="nta-res-stat"><div class="num">${r.total}</div><div class="lbl">Total</div></div>
        <div class="nta-res-stat"><div class="num">${r.attempted}</div><div class="lbl">Attempted</div></div>
        <div class="nta-res-stat"><div class="num">${r.correct}</div><div class="lbl">Correct</div></div>
        <div class="nta-res-stat"><div class="num">${counts['marked-review'] + counts['answered-marked']}</div><div class="lbl">Marked</div></div>
      </div>
      <div class="nta-results-actions">
        <button type="button" class="nta-btn-start" onclick="openExamPanel({source:'mistakes',subjectId:examSession.config.subjectId,topicId:examSession.config.topicId})">Retry from Mistakes</button>
        <button type="button" class="nta-btn-back" onclick="openExamPanel(examSession.config)">New Mock Test</button>
        <button type="button" class="nta-btn-back" onclick="quitExamPanel(true)">Back to StudyHub</button>
      </div>
    </div>`;
}
