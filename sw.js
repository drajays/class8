const CACHE = 'studyhub-v35';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './exam-panel.css',
  './app.js',
  './exam-panel.js',
  './github-sync.js',
  './data-core.js',
  './chapters3to8.js',
  './physics-qbank.js',
  './physics-neet.js',
  './physics-mindmaps.js',
  './physics-cheatsheets.js',
  './biology.js',
  './biology-neet.js',
  './biology-mindmaps.js',
  './biology-cheatsheets.js',
  './chemistry.js',
  './chemistry-neet.js',
  './chemistry-mindmaps.js',
  './chemistry-cheatsheets.js',
  './geography.js',
  './history-civics.js',
  './manifest.webmanifest',
  './icons/icon.svg'
];

function isCriticalAsset(url) {
  return /\.(html?|js|css)(\?|$)/i.test(url.pathname);
}

function cacheAddSafe(cache, url) {
  return cache.add(url).catch(function () { /* skip missing/offline assets */ });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.allSettled(ASSETS.map(function (url) {
        return cacheAddSafe(cache, url);
      }));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; }).map(function (k) {
          return caches.delete(k);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/** Always prefer network for code & markup so bad cached JS cannot brick the app. */
function networkFirstFresh(request) {
  return fetch(request).then(function (response) {
    if (response && response.status === 200 && response.type === 'basic') {
      const copy = response.clone();
      caches.open(CACHE).then(function (cache) {
        cache.put(request, copy);
      });
    }
    return response;
  }).catch(function () {
    return caches.match(request).then(function (cached) {
      return cached || caches.match('./index.html');
    });
  });
}

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (isCriticalAsset(url)) {
    event.respondWith(networkFirstFresh(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      }).catch(function () {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
