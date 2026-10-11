/* 离线缓存：所有路径相对 SW 自身解析，兼容 GitHub Pages 子目录部署 */
const BASE = new URL('./', self.location).href;
const CACHE_NAME = 'wzry-q-v1';
const PRECACHE = ['', 'index.html', 'pages/landing.html', 'pages/gender.html', 'pages/quiz.html',
  'pages/report.html', 'pages/share.html', 'js/core.js', 'css/app.css', 'assets/favicon.svg',
  'assets/icon-192.png', 'assets/icon-512.png'].map((p) => BASE + p);

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(PRECACHE.map(async (url) => {
      try { await cache.add(new Request(url, { redirect: 'follow' })); } catch (e) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function putSafely(request, response) {
  try {
    if (response && response.ok && response.type !== 'opaque' && !response.redirected) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
  } catch (e) {}
}

function revalidate(request) {
  return fetch(request).then((response) => { putSafely(request, response); return response; }).catch(() => null);
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  let url;
  try { url = new URL(request.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        putSafely(request, response);
        return response;
      } catch (e) {
        const cache = await caches.open(CACHE_NAME);
        const fallback = (await cache.match(request))
          || (await cache.match(BASE + 'pages/landing.html'))
          || (await cache.match(BASE + 'index.html'));
        return fallback || Response.error();
      }
    })());
    return;
  }

  /* 静态资源 stale-while-revalidate：缓存秒开 + 后台自动更新 */
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const fresh = revalidate(request);
    if (cached) { event.waitUntil(fresh); return cached; }
    const response = await fresh;
    return response || Response.error();
  })());
});
