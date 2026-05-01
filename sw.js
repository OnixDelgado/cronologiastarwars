const CACHE_NAME = 'sw-guide-v0.1.13'; // <-- Recuerda cambiar esto en cada update

// Archivos que siempre deben leerse desde la RED (nunca desde caché)
// Esto garantiza que la versión y los datos se actualicen inmediatamente
const NETWORK_FIRST = [
    './sw.js',
    './script.js',
    './datos.js'
];

// Resto de archivos: se sirven desde caché (más rápido)
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './theme.json',
    './manifest.json'
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

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const pathname = '.' + url.pathname.replace(url.origin, '');

    // Si el archivo está en la lista de "siempre desde la red", lo buscamos ahí
    const isNetworkFirst = NETWORK_FIRST.some(f => url.pathname.endsWith(f.replace('./', '/')));

    if (isNetworkFirst) {
        // Network First: intenta la red, si falla usa el caché
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    // Guardamos la versión nueva en caché para tener un fallback
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
                    return networkResponse;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache First: sirve desde caché, actualiza en segundo plano
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});