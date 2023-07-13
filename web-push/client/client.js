const publicVapidKey = "BENIK-Qe4hwFHG5HfdpzOPXZaGzyN6qHNfnPBwum48eWAjfbykMQ_auCojl8qItBYPnyjOVaZMmmBz1ZkAjJWB4"

// check for service worker

// navigator is the api for the web browser
if('serviceWorker' in navigator) {
    send().catch(err => console.error(err));
};
// The function registers service worker, register push, send push

async function send() {
    //register serviceWorker
    console.log('Registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('service worker registered...');

    //register Push
    console.log('registering push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly : true,
        applicationServerKey: base64UrlToUint8Array(publicVapidKey)
    });
    console.log('push registered...');

    //send push notification
    console.log('Sending Push...');
    await fetch ('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type' : 'application/json'
        }
    });
    console.log('push sent...');



};

function base64UrlToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = Window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i=0; i<rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    };
}
    return outputArray;
