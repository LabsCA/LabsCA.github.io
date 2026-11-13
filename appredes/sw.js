// Service worker mínimo de App redes.
// No guarda nada en caché: la app siempre se carga en línea desde Apps Script.
// Solo existe para que Android ofrezca "Instalar app".
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* pasa directo a la red */ });
