import { companySidebarRoutes } from 'pages/Companies/companyRoutes';

export const sidebar = [
    {
        icon: 'home',
        name: 'dashboard',
        tooltip: 'Home',
        label: 'Home',
        permission_key: 'for-all',
        links: [
            [
                {
                    label: 'General Dashboard',
                    link: '/',
                    type: 'link',
                    permission_key: 'for-all',
                },
            ],
        ],
    },
    {
        ...companySidebarRoutes,
    },
    {
        icon: 'people',
        name: 'user-management',
        tooltip: 'User management',
        label: 'User management',
        permission_key: 'user-management-access',
        links: [
            [
                {
                    label: 'Users',
                    link: '/user-management/users',
                    type: 'link',
                    permission_key: 'users-access',
                },
                {
                    label: 'Activity Log',
                    link: '/user-management/activity-log',
                    type: 'link',
                    permission_key: 'activity-log-access',
                },
                {
                    label: 'Login log',
                    link: '/user-management/login-log',
                    type: 'link',
                    permission_key: 'login-log-access',
                },
                {
                    label: 'Roles',
                    link: '/user-management/roles',
                    type: 'link',
                    permission_key: 'roles-access',
                },
                {
                    label: 'Permissions',
                    link: '/user-management/permissions',
                    type: 'link',
                    permission_key: 'permissions-access',
                },
            ],
        ],
    },
    {
        icon: 'settings',
        name: 'configurations',
        tooltip: 'Configurations',
        label: 'Configurations',
        permission_key: 'configurations-access',
        links: [
            [
                {
                    label: 'Languages',
                    link: '/configurations/languages',
                    type: 'link',
                    permission_key: 'languages-access',
                    name: '',
                },
                {
                    label: 'Backups',
                    link: '/configurations/backups',
                    type: 'link',
                    permission_key: 'backup-access',
                },
            ],
        ],
    },
];
