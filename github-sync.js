// ============================================================
// StudyHub — GitHub Cloud Sync
// Push / pull user edits via data/studyhub_sync.json in the repo.
// Requires a GitHub Personal Access Token with repo write access.
// ============================================================

const SYNC_DEFAULTS = {
  owner: 'drajays',
  repo: 'class8',
  branch: 'main',
  path: 'data/studyhub_sync.json'
};

const SYNC_META_KEY = 'studyhub_sync_meta';
const SYNC_CFG_KEY = 'studyhub_sync_config';
const GITHUB_CONTENT_MAX_BYTES = 950000;

function loadSyncConfig() {
  try {
    const raw = localStorage.getItem(SYNC_CFG_KEY);
    const cfg = raw ? JSON.parse(raw) : {};
    return Object.assign({}, SYNC_DEFAULTS, cfg);
  } catch (e) {
    return Object.assign({}, SYNC_DEFAULTS);
  }
}

function saveSyncConfig(cfg) {
  const merged = Object.assign({}, SYNC_DEFAULTS, cfg);
  try { localStorage.setItem(SYNC_CFG_KEY, JSON.stringify(merged)); } catch (e) {}
  return merged;
}

function loadSyncMeta() {
  try {
    return JSON.parse(localStorage.getItem(SYNC_META_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

function saveSyncMeta(patch) {
  const meta = Object.assign({}, loadSyncMeta(), patch);
  try { localStorage.setItem(SYNC_META_KEY, JSON.stringify(meta)); } catch (e) {}
  return meta;
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(function (b) { bin += String.fromCharCode(b); });
  return btoa(bin);
}

function base64ToUtf8(b64) {
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, function (c) { return c.charCodeAt(0); });
  return new TextDecoder().decode(bytes);
}

function parseSyncJson(jsonText, sourceLabel) {
  const trimmed = (jsonText || '').trim();
  if (!trimmed) {
    throw new Error('GitHub sync file is empty. Push from a device first, or reset the file in the repo.');
  }
  try {
    const data = JSON.parse(trimmed);
    if (!data || typeof data !== 'object') {
      throw new Error('Sync file is not a valid JSON object.');
    }
    if (data._syncMode === 'delta') {
      if (!Array.isArray(data.content)) data.content = [];
      if (!Array.isArray(data.classes)) data.classes = [];
      if (!Array.isArray(data.subjects)) data.subjects = [];
      if (!Array.isArray(data.topics)) data.topics = [];
    } else if (!Array.isArray(data.content)) {
      throw new Error('Sync file missing "content" array.');
    }
    return data;
  } catch (err) {
    if (err.message && err.message.indexOf('Sync file') === 0) throw err;
    throw new Error((sourceLabel || 'Sync file') + ' is not valid JSON. It may be truncated — try Push again with the new compact sync format.');
  }
}

function formatSyncTime(iso) {
  if (!iso) return 'Never';
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  } catch (e) {
    return iso;
  }
}

function syncStatusSummary() {
  const meta = loadSyncMeta();
  const cfg = loadSyncConfig();
  const parts = [];
  if (meta.dirty) parts.push('Unsaved local changes');
  if (meta.remoteNewer) parts.push('GitHub has newer data');
  if (!cfg.token) parts.push('Token not configured');
  return parts.length ? parts.join(' · ') : 'In sync';
}

function updateSyncStatusUI() {
  const dot = document.getElementById('sync-dot');
  const btn = document.getElementById('btn-sync');
  const statusEl = document.getElementById('sync-status-line');
  const meta = loadSyncMeta();
  const needsAttention = !!(meta.dirty || meta.remoteNewer);
  if (dot) dot.hidden = !needsAttention;
  if (btn) btn.classList.toggle('sync-attention', needsAttention);
  if (statusEl) statusEl.textContent = syncStatusSummary();
  const pullBtn = document.getElementById('sync-btn-pull');
  const pushBtn = document.getElementById('sync-btn-push');
  if (pullBtn) pullBtn.disabled = !loadSyncConfig().token;
  if (pushBtn) pushBtn.disabled = !loadSyncConfig().token;
}

function githubHeaders(token) {
  return {
    Accept: 'application/vnd.github+json',
    Authorization: 'Bearer ' + token,
    'X-GitHub-Api-Version': '2022-11-28'
  };
}

async function fetchSyncFileText(cfg, body) {
  if (body.content && body.encoding === 'base64') {
    return base64ToUtf8(body.content.replace(/\n/g, ''));
  }
  const downloadUrl = body.download_url;
  if (!downloadUrl) {
    throw new Error('GitHub returned no file content. The sync file may be missing or inaccessible.');
  }
  const raw = await fetch(downloadUrl, {
    headers: githubHeaders(cfg.token),
    cache: 'no-store'
  });
  if (!raw.ok) {
    throw new Error('Could not download sync file (' + raw.status + '). Check token permissions.');
  }
  return raw.text();
}

async function githubFetchRemote() {
  const cfg = loadSyncConfig();
  if (!cfg.token) throw new Error('Add a GitHub token in Cloud Sync settings first.');
  const path = encodeURIComponent(cfg.path).replace(/%2F/g, '/');
  const url = 'https://api.github.com/repos/' + cfg.owner + '/' + cfg.repo +
    '/contents/' + path + '?ref=' + encodeURIComponent(cfg.branch);
  const res = await fetch(url, { headers: githubHeaders(cfg.token) });
  if (res.status === 404) {
    return { exists: false, data: null, sha: null, exportedAt: null };
  }
  if (!res.ok) {
    const err = await res.json().catch(function () { return {}; });
    throw new Error(err.message || ('GitHub error ' + res.status));
  }
  const body = await res.json();
  const jsonText = await fetchSyncFileText(cfg, body);
  const data = parseSyncJson(jsonText, 'GitHub sync file');
  return {
    exists: true,
    data: data,
    sha: body.sha,
    exportedAt: data._exportedAt || null,
    syncMode: data._syncMode || 'full'
  };
}

async function githubPushRemote(payload, sha) {
  const cfg = loadSyncConfig();
  if (!cfg.token) throw new Error('Add a GitHub token in Cloud Sync settings first.');
  const path = encodeURIComponent(cfg.path).replace(/%2F/g, '/');
  const url = 'https://api.github.com/repos/' + cfg.owner + '/' + cfg.repo +
    '/contents/' + path;
  const json = JSON.stringify(payload);
  if (json.length > GITHUB_CONTENT_MAX_BYTES) {
    throw new Error('Sync payload still too large (' + Math.round(json.length / 1024) + ' KB). Remove old full backup from GitHub and push again.');
  }
  const body = {
    message: 'StudyHub sync: update ' + cfg.path,
    content: utf8ToBase64(json),
    branch: cfg.branch
  };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: Object.assign({ 'Content-Type': 'application/json' }, githubHeaders(cfg.token)),
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(function () { return {}; });
    if (res.status === 409) {
      throw new Error('CONFLICT: Someone else updated GitHub first. Pull, then push again.');
    }
    throw new Error(err.message || ('GitHub push failed (' + res.status + ')'));
  }
  const result = await res.json();
  return {
    sha: result.content && result.content.sha,
    exportedAt: payload._exportedAt
  };
}

function populateSyncModal() {
  const cfg = loadSyncConfig();
  const meta = loadSyncMeta();
  const ownerEl = document.getElementById('sync-owner');
  const repoEl = document.getElementById('sync-repo');
  const branchEl = document.getElementById('sync-branch');
  const pathEl = document.getElementById('sync-path');
  const tokenEl = document.getElementById('sync-token');
  const autoPullEl = document.getElementById('sync-auto-pull');
  if (ownerEl) ownerEl.value = cfg.owner || SYNC_DEFAULTS.owner;
  if (repoEl) repoEl.value = cfg.repo || SYNC_DEFAULTS.repo;
  if (branchEl) branchEl.value = cfg.branch || SYNC_DEFAULTS.branch;
  if (pathEl) pathEl.value = cfg.path || SYNC_DEFAULTS.path;
  if (tokenEl) tokenEl.value = cfg.token || '';
  if (autoPullEl) autoPullEl.checked = !!cfg.autoPull;
  const lastPush = document.getElementById('sync-last-push');
  const lastPull = document.getElementById('sync-last-pull');
  const lastRemote = document.getElementById('sync-last-remote');
  if (lastPush) lastPush.textContent = formatSyncTime(meta.lastPushAt);
  if (lastPull) lastPull.textContent = formatSyncTime(meta.lastPullAt);
  if (lastRemote) lastRemote.textContent = formatSyncTime(meta.lastRemoteAt);
  updateSyncStatusUI();
}

function openSyncModal() {
  populateSyncModal();
  openModal('modal-sync');
}

function saveSyncSettings() {
  const cfg = saveSyncConfig({
    owner: (document.getElementById('sync-owner').value || SYNC_DEFAULTS.owner).trim(),
    repo: (document.getElementById('sync-repo').value || SYNC_DEFAULTS.repo).trim(),
    branch: (document.getElementById('sync-branch').value || SYNC_DEFAULTS.branch).trim(),
    path: (document.getElementById('sync-path').value || SYNC_DEFAULTS.path).trim(),
    token: (document.getElementById('sync-token').value || '').trim(),
    autoPull: !!document.getElementById('sync-auto-pull').checked
  });
  if (!cfg.token) {
    showToast('info', 'Settings saved. Add a token to enable push/pull.');
    updateSyncStatusUI();
    return;
  }
  showToast('success', '☁️ Sync settings saved.');
  updateSyncStatusUI();
}

async function checkRemoteSyncStatus() {
  const cfg = loadSyncConfig();
  if (!cfg.token) return;
  try {
    const remote = await githubFetchRemote();
    const meta = loadSyncMeta();
    const localAt = meta.lastLocalSave || '';
    const remoteAt = remote.exportedAt || '';
    const remoteNewer = remote.exists && remoteAt && (!localAt || remoteAt > localAt);
    saveSyncMeta({
      lastRemoteAt: remoteAt || meta.lastRemoteAt,
      remoteSha: remote.sha || meta.remoteSha,
      remoteNewer: remoteNewer && !meta.dirty
    });
    updateSyncStatusUI();
    if (remoteNewer && cfg.autoPull && !meta.dirty) {
      await pullFromGithub({ silent: true, mode: 'merge', mergeUpdates: true });
    } else if (remoteNewer && meta.dirty) {
      showToast('info', '☁️ GitHub has newer edits — open Sync to pull or push.');
    }
  } catch (err) {
    console.warn('[StudyHub] Remote sync check failed:', err.message);
  }
}

async function pullFromGithub(opts) {
  opts = opts || {};
  saveSyncSettings();
  const pullBtn = document.getElementById('sync-btn-pull');
  if (pullBtn) { pullBtn.disabled = true; pullBtn.textContent = '⏳ Pulling…'; }
  try {
    const remote = await githubFetchRemote();
    if (!remote.exists || !remote.data) {
      showToast('info', '☁️ No sync file on GitHub yet — push from this device first.');
      return;
    }
    const mode = remote.syncMode === 'delta' || remote.data._syncMode === 'delta' ? 'merge' : (opts.mode || 'merge');
    applyImportedData(remote.data, mode, {
      silent: !!opts.silent,
      mergeUpdates: opts.mergeUpdates !== false
    });
    saveSyncMeta({
      lastPullAt: new Date().toISOString(),
      lastRemoteAt: remote.exportedAt,
      remoteSha: remote.sha,
      remoteNewer: false
    });
    clearSyncDirty({ sha: remote.sha, exportedAt: remote.exportedAt });
    const ratingCount = remote.data.questionRatings ? Object.keys(remote.data.questionRatings).length : 0;
    const itemCount = remote.data.content ? remote.data.content.length : 0;
    if (!opts.silent) {
      showToast('success', '⬇️ Pulled from GitHub (' + itemCount + ' edits, ' + ratingCount + ' rated questions).');
    }
    render();
    populateSyncModal();
  } catch (err) {
    showToast('error', '❌ Pull failed: ' + err.message);
  } finally {
    if (pullBtn) { pullBtn.disabled = false; pullBtn.textContent = '⬇️ Pull from GitHub'; }
    updateSyncStatusUI();
  }
}

async function pushToGithub() {
  saveSyncSettings();
  const cfg = loadSyncConfig();
  if (!cfg.token) {
    showToast('error', 'Add a GitHub token first.');
    return;
  }
  const pushBtn = document.getElementById('sync-btn-push');
  if (pushBtn) { pushBtn.disabled = true; pushBtn.textContent = '⏳ Pushing…'; }
  try {
    let remoteSha = loadSyncMeta().remoteSha || null;
    try {
      const remote = await githubFetchRemote();
      if (remote.exists) {
        remoteSha = remote.sha;
        const meta = loadSyncMeta();
        if (remote.exportedAt && meta.lastPushAt && remote.exportedAt > meta.lastPushAt && meta.dirty) {
          const ok = confirm(
            'GitHub was updated from another device after your last push.\n\n' +
            'Pull first to merge, or OK to overwrite GitHub with this device.'
          );
          if (!ok) {
            showToast('info', 'Push cancelled — pull first to merge safely.');
            return;
          }
        }
      }
    } catch (e) {
      /* file may not exist yet, or old oversized file — next push replaces it */
    }
    const payload = typeof buildCloudSyncPayload === 'function'
      ? buildCloudSyncPayload()
      : buildSyncPayload();
    const result = await githubPushRemote(payload, remoteSha);
    const now = new Date().toISOString();
    saveSyncMeta({
      lastPushAt: now,
      lastRemoteAt: payload._exportedAt,
      remoteSha: result.sha,
      dirty: false,
      remoteNewer: false,
      lastLocalSave: now
    });
    clearSyncDirty({ sha: result.sha, exportedAt: payload._exportedAt });
    showToast('success', '⬆️ Pushed to GitHub — ratings & edits will sync to other devices.');
    populateSyncModal();
  } catch (err) {
    showToast('error', '❌ Push failed: ' + err.message);
  } finally {
    if (pushBtn) { pushBtn.disabled = false; pushBtn.textContent = '⬆️ Push to GitHub'; }
    updateSyncStatusUI();
  }
}

function setupGithubSync() {
  updateSyncStatusUI();
  setTimeout(checkRemoteSyncStatus, 1200);
}

initApp();
