export const childrenCommon = [
    {
        // title: 'Welcome',
        // icon: 'home',
        title: "home",
        icon: "precision_manufacturing",
        path: "/",
        component: () => import("pages/MKS_Parts.vue"),
    },
    {
        title: "About",
        // icon: 'mdi-information-variant',
        icon: "info",
        path: "about",
        component: () => import("pages/AboutPage.vue"),
    },
    {
        title: "Settings",
        icon: "settings",
        path: "settings",
        component: () => import("pages/SettingsPage.vue"),
    },
    {
        title: "MD-Demo",
        icon: "brush",
        path: "md-demo",
        component: () => import("pages/MDDemo.vue"),
    },
    {
        title: "Formatting Experiments",
        icon: "brush",
        path: "formatting-experiments",
        component: () => import("pages/FormattingExperiments.vue"),
    },
];

const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            // { path: '', component: () => import('pages/Index.vue') },
            // { path: 'about', component: () => import('pages/About.vue') }
            ...childrenCommon,
            // ...childrenDebug,
            // ...childrenWizard,
            // ...childrenDev
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
