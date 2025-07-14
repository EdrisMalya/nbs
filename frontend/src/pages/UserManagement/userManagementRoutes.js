export const userManagementRoutes = {
    path: '/user-management',
    meta: {
        active: 'user-management',
    },
    children: [
        {
            path: '',
            component: () => import('pages/UserManagement/UserManagementIndex.vue'),
        },
        {
            path: 'users',
            children: [
                {
                    path: '',
                    component: () => import('pages/UserManagement/Users/UserPage.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                text: 'User management',
                                link: '/user-management',
                            },
                            {
                                text: 'Users',
                                link: '/',
                            },
                        ],
                    },
                },
                {
                    path: ':id/:active',
                    component: () =>
                        import('pages/UserManagement/Users/UserDetails/UserDetailPage.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                text: 'User management',
                                link: '/user-management',
                            },
                            {
                                text: 'Users list',
                                link: '/user-management/users',
                            },
                            {
                                text: 'User details',
                                link: '/',
                            },
                        ],
                        active_section: '/user-management/users',
                    },
                },
            ],
        },
        {
            path: 'activity-log',
            component: () => import('pages/UserManagement/ActivityLog/ActivityLogPage.vue'),
            meta: {
                breadcrumb: [
                    {
                        text: 'User Management',
                        link: '/user-management',
                    },
                    {
                        text: 'Activity Log',
                        link: '',
                    },
                ],
            },
        },
        {
            path: 'login-log',
            component: () => import('pages/UserManagement/LoginLog/LoginLogPage.vue'),
            meta: {
                breadcrumb: [
                    {
                        text: 'User Management',
                        link: '/user-management',
                    },
                    {
                        text: 'Login Log',
                        link: '',
                    },
                ],
            },
        },
        {
            path: 'roles',
            children: [
                {
                    path: '',
                    component: () => import('pages/UserManagement/Roles/RolePage.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                text: 'User Management',
                                link: '/user-management',
                            },
                            {
                                text: 'Roles',
                                link: '',
                            },
                        ],
                    },
                },
                {
                    path: ':id/:name?',
                    component: () =>
                        import('pages/UserManagement/Roles/RoleDetails/RoleDetailsPage.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                text: 'User Management',
                                link: '/user-management',
                            },
                            {
                                text: 'Roles',
                                link: '/user-management/roles',
                            },
                            {
                                text: 'Roles page',
                                link: '',
                            },
                        ],
                        active_section: '/user-management/roles',
                    },
                },
            ],
        },
        {
            path: 'permissions',
            component: () => import('pages/UserManagement/Permissions/PermissionsPage.vue'),
            meta: {
                breadcrumb: [
                    {
                        text: 'User Management',
                        link: '/user-management',
                    },
                    {
                        text: 'Permissions',
                        link: '',
                    },
                ],
            },
        },
    ],
};
