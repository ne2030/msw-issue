const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'sw.js',
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');


        fetch('https://image1.marpple.co/files/u_2120550/2022/8/original/b64170a94f283fb2d45e9cc8c3b5a170e922b1611.jpeg?w=750&f=webp', {
          referrerPolicy: 'no-referrer-when-downgrade'
        })
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();
