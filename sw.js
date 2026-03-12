self.addEventListener('push', e => {
  e.waitUntil(
    self.registration.showNotification('Push Test', {
      body: e.data?.text() ?? 'no payload'
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
