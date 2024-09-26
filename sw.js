const CACHE_NAME = 'vianney-wedding-cards-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/card1.jpg',
  '/card2.jpg',
  '/card3.jpg',
  '/card4.jpg',
  '/card5.jpg',
  '/card6.jpg',
  '/card7.jpg',
  '/card8.jpg',
  '/back.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
