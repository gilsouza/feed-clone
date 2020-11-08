importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

const HTML_CACHE = 'html';
const JS_CACHE = 'javascript';
const STYLE_CACHE = 'stylesheets';
const IMAGE_CACHE = 'images';
const FONT_CACHE = 'fonts';
const FETCH_CACHE = 'fetch';

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'document',
    new workbox.strategies.NetworkFirst({
        cacheName: HTML_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'script',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: JS_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: STYLE_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: IMAGE_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'font',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: FONT_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /.*mock/,
    new workbox.strategies.NetworkFirst({
        cacheName: FETCH_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day,
            }),
        ],
    })
);
