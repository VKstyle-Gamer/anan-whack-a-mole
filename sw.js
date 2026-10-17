const CACHE="anan-whack-official-v4-3";
const ASSETS=["./","./index.html","./manifest.webmanifest",
"./assets/card_wan_front.jpg","./assets/card_wan_back.jpg","./assets/card_salon_front.jpg","./assets/card_salon_back.jpg","./assets/card_knee_front.jpg","./assets/card_knee_back.jpg","./assets/card_gold_front.jpg","./assets/card_gold_back.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))).then(()=>self.skipWaiting()));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request))));
