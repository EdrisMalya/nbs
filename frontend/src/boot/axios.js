import axios from 'axios';
import { services, urlFinder } from 'src/lib/helpers';
import { boot } from 'quasar/wrappers';

const api = (service = services.user_management) => {
    const request = axios.create({
        baseURL: urlFinder(false, service),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    });
    request.interceptors.request.use((req) => {
        const token = localStorage.getItem('token');
        if (typeof token !== 'undefined') {
            req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            req.headers.lang = `${localStorage.getItem('lang')}`;
        }
        return req;
    });
    return request;
};

export default boot(({ app }) => {
    app.config.globalProperties.$api = api;
});

export { api };
