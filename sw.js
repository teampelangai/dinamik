self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Mendengar hantaran/pemicu notifikasi
self.addEventListener('push', (e) => {
  const data = e.data ? e.data.json() : { title: 'E-Relief', body: 'Jadual relief harian telah dikemaskini!' };
  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588640.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3588/3588640.png',
    vibrate: [200, 100, 200]
  };

  e.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});