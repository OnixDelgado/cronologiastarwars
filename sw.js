const CACHE_NAME = 'sw-guide-v0.1.13'; // ¡Recuerda cambiar la versión!

// Archivos que SIEMPRE buscan internet primero (para que las actualizaciones lleguen)
const NETWORK_FIRST = [
    './sw.js',
    './script.js',
    './datos.js'
];

// Archivos vitales iniciales
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './theme.json',
    './manifest.json',
    './assets/img/fondo-estrellas.avif',
    './assets/img/fondo-header.avif',
    './assets/img/profile-placeholder.jpg'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Borrando caché antigua:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// MAGIA: El interceptor de peticiones
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Evitar cachear extensiones de navegador o videos de YouTube
    if (event.request.method !== 'GET' || url.protocol.startsWith('chrome-extension') || url.hostname.includes('youtube.com')) {
        return;
    }

    const isNetworkFirst = NETWORK_FIRST.some(f => url.pathname.endsWith(f.replace('./', '/')));

    if (isNetworkFirst) {
        // Estrategia 1: NETWORK FIRST (Red primero, si no hay internet usa Caché)
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                    return networkResponse;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Estrategia 2: CACHE FIRST CON CACHÉ DINÁMICO (Para imágenes y todo lo demás)
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse; // Lo encontró guardado, lo muestra al instante (OFFLINE LISTO)
                }

                // No lo tiene guardado, lo busca en internet y LO GUARDA para la próxima vez
                return fetch(event.request).then((networkResponse) => {
                    // Validar que la respuesta sea correcta antes de guardarla
                    if (!networkResponse || (networkResponse.status !== 200 && networkResponse.status !== 0)) {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return networkResponse;
                }).catch(() => {
                    console.log("Estás offline y la imagen no estaba guardada.");
                });
            })
        );
    }
});