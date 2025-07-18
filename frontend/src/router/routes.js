import { userManagementRoutes } from 'pages/UserManagement/userManagementRoutes';
import { configurationRoutes } from 'pages/Configurations/configurationRoutes';
import { companyRoutes } from 'pages/Companies/companyRoutes';

const routes = [
    {
        path: '/',
        component: () => import('layouts/AdminLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    active: 'dashboard',
                    collapse_sidebar: true,
                },
            },
            { ...companyRoutes },
            { ...configurationRoutes },
            { ...userManagementRoutes },
            {
                path: '/pos',
                component: () => import('pages/POSPage.vue'),
                meta: {
                    disable_layout: true,
                },
            },
        ],
    },

    {
        path: '/login',
        component: () => import('pages/LoginPage.vue'),
    },

    {
        path: '/server-error',
        component: () => import('pages/ServerErrorPage.vue'),
    },
    {
        path: '/forbidden',
        component: () => import('pages/ForbiddenPage.vue'),
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
