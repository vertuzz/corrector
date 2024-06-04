self.addEventListener('install', function(event) {
    // Skip waiting to activate the new service worker immediately
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    // Claim clients immediately so the new service worker starts controlling the page
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    // Just fetch the request without caching
    event.respondWith(fetch(event.request));
});