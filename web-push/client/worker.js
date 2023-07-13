console.log('service worker loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push received');
    self.ServiceWorkerRegistration.showNotification(data.title, {
        body: 'Notified by Samuel the developer',
        icon: 'https://image.ibb.co/frYOFd/tmlogo.png'
    });
});