/* Service worker de UnovaDex: la app funciona sin conexión una vez cargada */
const SHELL='unovadex-shell-v1',DATA='unovadex-data-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>![SHELL,DATA].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  const external=['pokeapi.co','raw.githubusercontent.com','fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname);
  if(url.origin===location.origin){
    // Archivos de la app: primero red (para recibir actualizaciones), si falla, caché
    e.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(SHELL).then(c=>c.put(req,copy));return r}).catch(()=>caches.match(req).then(m=>m||caches.match('./index.html'))));
  }else if(external){
    // Datos y sprites: primero caché, y se actualiza en segundo plano
    e.respondWith(caches.open(DATA).then(async c=>{const hit=await c.match(req);const net=fetch(req).then(r=>{if(r.ok||r.type==='opaque')c.put(req,r.clone());return r}).catch(()=>hit);return hit||net}));
  }
});
