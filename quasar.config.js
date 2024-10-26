/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const packageInfo = require("./package.json");

// const { viteSingleFile } = require("vite-plugin-singlefile");

const { configure } = require("quasar/wrappers");
const path = require("path");

// required for the gray-matter plugin.
// https://github.com/davidmyersdev/vite-plugin-node-polyfills
const { nodePolyfills } = require("vite-plugin-node-polyfills");

module.exports = configure(function (/* ctx */) {
    return {
        // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
        // preFetch: true,

        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://v2.quasar.dev/quasar-cli-vite/boot-files
        boot: ["i18n", "addressbar-color"],

        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
        css: ["app.scss"],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v7',
            // 'fontawesome-v6',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            "roboto-font", // optional, you are not bound to it
            "material-icons", // optional, you are not bound to it
        ],

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
        build: {
            target: {
                browser: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
                node: "node20",
            },

            vueRouterMode: "history", // available values: 'hash', 'history'
            // vueRouterBase,
            // vueDevtools,
            // vueOptionsAPI: false,

            // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

            // publicPath: '/',
            // publicPath: "/quasar_lightpaint/dist/spa/",
            publicPath: "mks-welcome-quasar",
            // analyze: true,
            env: {
                //https://forum.quasar-framework.org/topic/6853/auto-generate-a-build-number-in-spa/15?_=1653270667151
                // https://quasar.dev/quasar-cli-webpack/handling-process-env#caveats
                appinfo: {
                    name: packageInfo.name,
                    version: packageInfo.version,
                    productName: packageInfo.productName,
                    description: packageInfo.description,
                    projectUrl: packageInfo.projectUrl,
                    previewUrl: packageInfo.previewUrl,
                },
            },
            // rawDefine: {}
            // ignorePublicFolder: true,
            minify: false,
            // polyfillModulePreload: true,
            // distDir

            // extendViteConf (viteConf) {},
            // viteVuePluginOptions: {},

            vitePlugins: [
                // [
                //     "@intlify/unplugin-vue-i18n",
                //     {
                //         // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
                //         // compositionOnly: false,

                //         // if you want to use named tokens in your Vue I18n messages, such as 'Hello {name}',
                //         // you need to set `runtimeOnly: false`
                //         // runtimeOnly: false,

                //         // you need to set i18n resource including paths !
                //         include: path.resolve(__dirname, "./src/i18n/**"),
                //     },
                // ],
                [
                    "vite-plugin-checker",
                    {
                        eslint: {
                            lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"',
                        },
                    },
                    { server: false },
                ],
                // [viteSingleFile()],
                nodePolyfills(),
            ],
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
        devServer: {
            https: true,
            open: false, // opens browser window automatically
        },

        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
        framework: {
            config: {
                notify: {
                    // https://quasar.dev/quasar-plugins/notify
                },
                dark: true,
            },

            // iconSet: 'material-icons', // Quasar icon set
            // lang: 'en-US', // Quasar language pack

            // For special cases outside of where the auto-import strategy can have an impact
            // (like functional components as one of the examples),
            // you can manually specify Quasar components/directives to be available everywhere:
            //
            // components: [],
            // directives: [],

            // Quasar plugins
            plugins: [
                "AddressbarColor",
                "AppFullscreen",
                "LocalStorage",
                "SessionStorage",
                "Notify",
            ],
        },

        // animations: 'all', // --- includes all animations
        // https://v2.quasar.dev/options/animations
        animations: [],

        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#property-sourcefiles
        // sourceFiles: {
        //   rootComponent: 'src/App.vue',
        //   router: 'src/router/index',
        //   store: 'src/store/index',
        //   registerServiceWorker: 'src-pwa/register-service-worker',
        //   serviceWorker: 'src-pwa/custom-service-worker',
        //   pwaManifestFile: 'src-pwa/manifest.json',
        //   electronMain: 'src-electron/electron-main',
        //   electronPreload: 'src-electron/electron-preload'
        // },

        // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
        ssr: {
            // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
            // will mess up SSR

            // extendSSRWebserverConf (esbuildConf) {},
            // extendPackageJson (json) {},

            pwa: false,

            // manualStoreHydration: true,
            // manualPostHydrationTrigger: true,

            prodPort: 3000, // The default port that the production server should use
            // (gets superseded if process.env.PORT is specified at runtime)

            middlewares: [
                "render", // keep this as last one
            ],
        },

        // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
        pwa: {
            workboxMode: "generateSW", // or 'injectManifest'
            injectPwaMetaTags: true,
            swFilename: "sw.js",
            manifestFilename: "manifest.json",
            useCredentialsForManifestTag: false,
            // useFilenameHashes: true,
            // extendGenerateSWOptions (cfg) {}
            // extendInjectManifestOptions (cfg) {},
            // extendManifestJson (json) {}
            // extendPWACustomSWConf (esbuildConf) {}
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
        cordova: {
            // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
        capacitor: {
            hideSplashscreen: true,
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
        electron: {
            // extendElectronMainConf (esbuildConf)
            // extendElectronPreloadConf (esbuildConf)

            // specify the debugging port to use for the Electron app when running in development mode
            inspectPort: 5858,

            bundler: "packager", // 'packager' or 'builder'

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',
                // Windows only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration

                appId: "mks-welcome-quasar",
            },
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
        bex: {
            contentScripts: ["my-content-script"],

            // extendBexScriptsConf (esbuildConf) {}
            // extendBexManifestJson (json) {}
        },
    };
});
