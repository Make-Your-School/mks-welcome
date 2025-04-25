// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

import packageInfo from './package.json'

import { getsubmodules } from './getsubmodules'

// const { viteSingleFile } = require("vite-plugin-singlefile");

import { defineConfig } from '#q-app/wrappers'
// import { defineBoot } from "#q-app/wrappers";
// import { definePreFetch } from "#q-app/wrappers";
// import { defineRouter } from "#q-app/wrappers";
// import { defineStore } from "#q-app/wrappers";
// import { defineSsrMiddleware } from "#q-app/wrappers";
// import { defineSsrCreate } from "#q-app/wrappers";
// import { defineSsrListen } from "#q-app/wrappers";
// import { defineSsrClose } from "#q-app/wrappers";
// import { defineSsrServeStaticContent } from "#q-app/wrappers";
// import { defineSsrRenderPreloadTag } from "#q-app/wrappers";

import path from 'path'
// console.log("__dirname", __dirname);

// required for the gray-matter plugin.
// https://github.com/davidmyersdev/vite-plugin-node-polyfills
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import Markdown from 'unplugin-vue-markdown/vite'
import markdownItConfig from './markdown-it-config'

// export default defineConfig((ctx) => {
export default defineConfig(() => {
    return {
        // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
        // preFetch: true,

        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://v2.quasar.dev/quasar-cli-vite/boot-files
        boot: ['i18n', 'addressbar-color', 'register-global-components', 'markdown-load-css'],

        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
        css: ['app.scss'],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v7',
            // 'fontawesome-v6',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // optional, you are not bound to it
            'material-icons', // optional, you are not bound to it
        ],

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
        build: {
            target: {
                browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
                node: 'node20',
            },

            vueRouterMode: 'history', // available values: 'hash', 'history'
            // vueRouterBase,
            // vueDevtools: true,
            // vueOptionsAPI: false,

            // publicPath: '/',
            // publicPath: "/quasar_lightpaint/dist/spa/",
            publicPath: '/mks-welcome/',
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
                submodules: JSON.stringify(getsubmodules()),
            },
            // rawDefine: {}
            // ignorePublicFolder: true,
            minify: false,
            // polyfillModulePreload: true,
            // distDir

            /**
             * Folder where Quasar CLI should look for .env* files.
             * Can be an absolute path or a relative path to project root directory.
             *
             * @default project root directory
             */
            // envFolder?: string;
            /**
             * Additional .env* files to be loaded.
             * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
             *
             * @example ['.env.somefile', '../.env.someotherfile']
             */
            // envFiles?: string[];

            // extendViteConf (viteConf) {},
            // https://quasar.dev/quasar-cli-vite/handling-vite/
            // extendViteConf(viteConf, { isServer, isClient }) {
            extendViteConf() {
                // We return an Object which will get deeply merged into
                // the config, instead of directly tampering with viteConf
                return {
                    // build: {
                    //     chunkSizeWarningLimit: 750,
                    // },
                    // plugins: [vue()],
                    resolve: {
                        alias: [
                            {
                                find: /^vue$/,
                                replacement: 'vue/dist/vue.esm-bundler.js',
                            },
                        ],
                    },
                }
                // equivalent of following vite.config.js/vite.config.ts:
                // export default defineConfig({
                //   build: {
                //     chunkSizeWarningLimit: 750
                //   }
                // })
            },

            // viteVuePluginOptions: {},
            viteVuePluginOptions: {
                include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
            },

            vitePlugins: [
                [
                    'vite-plugin-checker',
                    {
                        eslint: {
                            lintCommand:
                                'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
                            useFlatConfig: true,
                        },
                    },
                    { server: false },
                ],
                Markdown(markdownItConfig),
                // Markdown(),
                // [viteSingleFile()],
                nodePolyfills(),
            ],
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
        devServer: {
            open: false, // opens browser window automatically
            // https: true, // for automagically self-signed cert.
            https: {
                key: path.join(__dirname, '.certs/localhost/key.pem'),
                cert: path.join(__dirname, '.certs/localhost/cert.pem'),
            },
        },

        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
        framework: {
            config: {
                notify: {
                    // https://quasar.dev/quasar-plugins/notify
                },
                // true "auto" false
                dark: 'auto',
            },

            /**
             * Auto import - which file extensions should be interpreted as referring to Vue SFC?
             * @default [ 'vue' ]
             */
            autoImportVueExtensions: ['vue', 'md'],

            /**
             * Auto import - which file extensions should be interpreted as referring to script files?
             * @default [ 'js', 'jsx', 'ts', 'tsx' ]
             */
            // autoImportScriptExtensions: "",

            /**
             * Treeshake Quasar's UI on dev too?
             * Recommended to leave this as false for performance reasons.
             * @default false
             */
            // devTreeshaking?: boolean;
            // was previously under /quasar.conf > build

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
                'AddressbarColor',
                'AppFullscreen',
                'LocalStorage',
                'SessionStorage',
                'Notify',
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
        // pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
        // pwaServiceWorker: 'src-pwa/custom-service-worker',
        // pwaManifestFile: 'src-pwa/manifest.json',
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
                'render', // keep this as last one
            ],
        },

        // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
        pwa: {
            workboxMode: 'GenerateSW', // | "InjectManifest",
            injectPwaMetaTags: true,
            // see below for the InjectPwaMetaTagsParams interface
            swFilename: 'sw.js',
            manifestFilename: 'manifest.json',
            useCredentialsForManifestTag: false,
            // Moved to quasar.config > build > useFilenameHashes
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

            bundler: 'packager', // 'packager' or 'builder'

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

                appId: 'mks-welcome',
            },
        },

        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
        bex: {
            contentScripts: ['my-content-script'],

            // extendBexScriptsConf (esbuildConf) {}
            // extendBexManifestJson (json) {}
        },
    }
})
