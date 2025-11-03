import { route } from 'quasar/wrappers'
// import { nextTick } from 'vue'
import {
    createRouter,
    createMemoryHistory,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : process.env.VUE_ROUTER_MODE === 'history'
          ? createWebHistory
          : createWebHashHistory

    const Router = createRouter({
        // scrollBehavior: () => ({ left: 0, top: 0 }),
        // https://router.vuejs.org/guide/advanced/scroll-behavior.html#Scroll-Behavior
        // scrollBehavior(to, from, savedPosition) {
        scrollBehavior(to) {
            if (to.hash) {
                // https://router.vuejs.org/guide/advanced/scroll-behavior.html#Delaying-the-scroll
                // return new Promise((resolve) => {
                //     setTimeout(() => {
                //         resolve({
                //             el: to.hash,
                //             behavior: 'smooth',
                //         })
                //     }, 500)
                // })
                // this does not really work.
                // seems the md content is not rendered fast enough...
                return {
                    el: to.hash,
                    behavior: 'smooth',
                }
            }
        },
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.VUE_ROUTER_BASE),
    })

    // https://stackoverflow.com/questions/62409643/scroll-to-anchor-on-refresh-or-on-manual-url-change?noredirect=1&lq=1
    // Router.afterEach((to, from) => {
    //     if (to.hash && to.path != from.path) {
    //         // Vue.nextTick().then(() => VueScrollTo.scrollTo(to.hash, 700))
    //         nextTick().then(() => {
    //             setTimeout(() => {
    //                 // console.log(`to.hash.replace('#', '')`, to.hash.replace('#', ''))
    //                 const target = document.getElementById(to.hash.replace("#", ''))
    //                 // console.log('target', target)
    //                 // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    //                 target.scrollIntoView({
    //                     behavior: 'smooth',
    //                 })
    //             }, 200);
    //         })
    //     }
    // })

    return Router
})
