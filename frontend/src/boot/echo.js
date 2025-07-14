import { boot } from 'quasar/wrappers';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { urlFinder } from 'src/lib/helpers';

export default boot(({ app }) => {
    const localStore = localStorage.getItem('token');
    const useCurrentRoute = process.env.USE_CURRENT_HOST;
    let host = '';
    if (typeof useCurrentRoute !== 'undefined') {
        host = window.location.hostname;
    } else {
        host = process.env.VITE_PUSHER_HOST;
    }

    app.config.globalProperties.Pusher = Pusher;
    app.config.globalProperties.$echo = new Echo({
        auth: {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        },
        authEndpoint: `${urlFinder(true)}broadcasting/auth`,
        broadcaster: 'pusher',
        key: process.env.VITE_PUSHER_APP_KEY,
        wsHost: host,
        wsPort: process.env.VITE_PUSHER_PORT ?? 80,
        wssPort: process.env.VITE_PUSHER_PORT ?? 443,
        forceTLS: false,
        enabledTransports: ['ws', 'wss'],
        cluster: process.env.VITE_PUSHER_APP_CLUSTER,
        disableStats: true,
        encrypted: true,
    });
});
