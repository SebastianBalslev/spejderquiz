// Service worker: gemmer appen, så den virker uden internet.
// Skift versionsnummeret, når index.html ændres, så telefonerne henter den nye udgave.
const CACHE = "spejderquiz-v94";
const FILER = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILER)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Vis den gemte udgave med det samme, og hent en frisk kopi i baggrunden til næste gang.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const gemt = await c.match(e.request, { ignoreSearch: true });
    const frisk = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => gemt);
    return gemt || frisk;
  }));
});
