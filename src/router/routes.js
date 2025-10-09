export const childrenCommon = [
    {
        // title: 'Welcome',
        // icon: 'home',
        title: 'Parts',
        icon: 'precision_manufacturing',
        path: '/',
        component: () => import('pages/MKS_Parts.vue'),
    },
    {
        title: 'Tags',
        icon: 'precision_manufacturing',
        path: '/tags',
        component: () => import('pages/MKS_Tags.vue'),
    },
    {
        title: 'Glossar',
        icon: 'precision_manufacturing',
        path: '/abbr/:id?',
        component: () => import('pages/MKS_Abbr.vue'),
        props: true,
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // app orga
    {
        title: 'About',
        // icon: 'mdi-information-variant',
        icon: 'info',
        path: 'about',
        component: () => import('pages/AboutPage.vue'),
    },
    {
        title: 'Settings',
        icon: 'settings',
        path: 'settings',
        component: () => import('pages/SettingsPage.vue'),
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // dev
    {
        title: 'MD-Demo',
        icon: 'brush',
        path: 'md-demo',
        component: () => import('pages/dev/MDDemo.vue'),
    },
    {
        title: 'MD-Dev',
        icon: 'brush',
        path: 'md-dev',
        component: () => import('pages/dev/MDDev.vue'),
    },

    {
        title: 'Convert `posts.json` to `reposData.json`',
        icon: 'brush',
        path: 'tools-convert-posts-to-reposData',
        component: () => import('pages/tools/convert-posts-to-repos.vue'),
    },
    {
        title: 'edit `reposData.json`',
        icon: 'brush',
        path: 'tools-edit-data',
        component: () => import('pages/tools/edit_data.vue'),
    },
    // {
    //     title: "MDGlob",
    //     icon: "precision_manufacturing",
    //     path: "md-glob",
    //     component: () => import("pages/dev/MDGlob.vue"),
    // },
    // {
    //     title: "MD-Dev-Imported",
    //     icon: "brush",
    //     path: "md-dev-imported",
    //     component: () => import("pages/dev/MDDevImported.vue"),
    // },
    // {
    //     title: "MD-ManualRendering",
    //     icon: "brush",
    //     path: "md-manual-rendering",
    //     component: () => import("pages/dev/MDManualRendering.vue"),
    // },
    // {
    //     title: "MD-DevTooltip",
    //     icon: "brush",
    //     path: "md-dev-tooltip",
    //     component: () => import("pages/dev/MDDevTooltip.vue"),
    // },
    // {
    //     title: "Formatting Experiments",
    //     icon: "brush",
    //     path: "formatting-experiments",
    //     component: () => import("pages/dev/FormattingExperiments.vue"),
    // },
]

const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            // {
            //     path: 'part',
            //     component: () => import('pages/MKS_Part_Details.vue')
            // },
            // { path: '', component: () => import('pages/Index.vue') },
            // { path: 'about', component: () => import('pages/About.vue') }
            // routes wihtout menu entries
            {
                path: 'part/:part_name',
                component: () => import('pages/MKS_Part_Details.vue'),
                props: true,
            },
            {
                path: 'tag/:tag_name?',
                component: () => import('pages/MKS_Tag_Details.vue'),
                props: true,
            },
            // add children that with menu-entries
            ...childrenCommon,
            // ...childrenDebug,
            // ...childrenWizard,
            // ...childrenDev
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes;
