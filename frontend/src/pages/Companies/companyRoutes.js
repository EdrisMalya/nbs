export const companySidebarRoutes = {
    icon: 'domain',
    name: 'company',
    tooltip: 'Companies ',
    label: 'Companies',
    permission_key: 'company-access',
    links: [
        [
            {
                label: 'List of companies',
                link: '/companies',
                type: 'link',
                permission_key: 'company-access',
            },
            {
                label: 'Create new company',
                link: '/companies/form',
                type: 'link',
                permission_key: 'company-access',
            },
        ],
    ],
};

export const companyRoutes = {
    path: '/companies',
    meta: {
        active: 'company',
    },
    children: [
        {
            path: '',
            component: () => import('pages/Companies/CompaniesPage.vue'),
            meta: {
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        link: '/',
                    },
                    {
                        text: 'List of companies',
                        link: '',
                    },
                ],
            },
        },
        {
            path: 'form',
            meta: {
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        link: '/',
                    },
                    {
                        text: 'List of companies',
                        link: '/companies',
                    },
                    {
                        text: 'Company form',
                        link: '',
                    },
                ],
            },
            children: [
                {
                    path: '',
                    component: () => import('pages/Companies/CompanyFormPage.vue'),
                },
                {
                    path: ':id',
                    component: () => import('pages/Companies/CompanyFormPage.vue'),
                },
            ],
        },
    ],
};
