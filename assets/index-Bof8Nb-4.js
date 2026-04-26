const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i18n-D9Cp3-92.js","assets/vue.esm-bundler-DkjeOeAQ.js","assets/chunk-C0u3WHrm.js","assets/dist-u9SxfPhV.js","assets/addressbar-color-ZRjz2fw-.js","assets/AddressbarColor-BJZcJrh9.js","assets/Platform-Hxr0V5Kb.js","assets/inject-obj-prop-B-maADS4.js","assets/event-JAmtdkur.js","assets/register-global-components-BdsDsI-d.js","assets/_plugin-vue_export-helper-Dl-_tC7C.js","assets/preload-helper-Chyirnlg.js","assets/MyMarkdown-CI4JPIWU.js","assets/es-rhvVhq1b.js","assets/pinia-BNAaAcy4.js","assets/QBtn-DZW7z61w.js","assets/QIcon-BIe_yU5L.js","assets/render-AG-3FfQy.js","assets/QSpinner-C9TaWt0d.js","assets/use-router-link-CkuTaxqL.js","assets/Ripple-cZik0Z5F.js","assets/QCard-BrwQdTtb.js","assets/use-dark-D7HPSSY-.js","assets/QCheckbox-Cngqk9Fj.js","assets/use-checkbox-CqeGl3e8.js","assets/QItemLabel-D9M7YRL7.js","assets/private.use-form-DoNiTCW_.js","assets/use-timeout-B36y8WMi.js","assets/nodes-BpIwPEsi.js","assets/QExpansionItem-CY57Wo8b.js","assets/QSeparator-Bf3NzGLA.js","assets/use-id-DWrbHNzg.js","assets/touch-DSqVpVWs.js","assets/use-quasar-DjkpUp09.js","assets/symbols-CTfU4lpL.js","assets/register-global-components-DjPDpffE.css","assets/markdown-load-css-CmS3QTyk.css"])))=>i.map(i=>d[i]);
import { L as resolveComponent, N as openBlock, Q as ref, Y as markRaw, d as createBlock, l as computed, n as TransitionGroup, r as createApp, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { n as injectProp } from "./inject-obj-prop-B-maADS4.js";
import { n as client, r as isRuntimeSsrPreHydration, t as Platform } from "./Platform-Hxr0V5Kb.js";
import { c as createReactivePlugin, o as createComponent, r as hMergeSlotSafely } from "./render-AG-3FfQy.js";
import { a as listenOpts, o as noop } from "./event-JAmtdkur.js";
import { t as debounce } from "./debounce-xC9d6Tps.js";
import { i as useSizeProps, n as useSize, o as onKeyDownComposition, t as QIcon_default } from "./QIcon-BIe_yU5L.js";
import { t as History_default } from "./History-dJyuw0sM.js";
import { c as isRegexp, d as globalConfigIsFrozen, i as isDate, l as freezeGlobalConfig, n as createGlobalNode, s as isObject, t as changeGlobalNodesTarget, u as globalConfig } from "./nodes-BpIwPEsi.js";
import { i as store, r as route, t as AddressbarColor_default } from "./AddressbarColor-BJZcJrh9.js";
import { t as createPinia } from "./pinia-BNAaAcy4.js";
import { n as createWebHistory, t as createRouter } from "./vue-router-C1WeEvMh.js";
import { t as __vitePreload } from "./preload-helper-Chyirnlg.js";
import { n as routes } from "./routes-BxaRO-ka.js";
import { t as QSpinner_default } from "./QSpinner-C9TaWt0d.js";
import { t as QBtn_default } from "./QBtn-DZW7z61w.js";
//#region node_modules/quasar/src/plugins/screen/Screen.js
var SIZE_LIST = [
	"sm",
	"md",
	"lg",
	"xl"
];
var { passive } = listenOpts;
var Screen_default = createReactivePlugin({
	width: 0,
	height: 0,
	name: "xs",
	sizes: {
		sm: 600,
		md: 1024,
		lg: 1440,
		xl: 1920
	},
	lt: {
		sm: true,
		md: true,
		lg: true,
		xl: true
	},
	gt: {
		xs: false,
		sm: false,
		md: false,
		lg: false
	},
	xs: true,
	sm: false,
	md: false,
	lg: false,
	xl: false
}, {
	setSizes: noop,
	setDebounce: noop,
	install({ $q, onSSRHydrated }) {
		$q.screen = this;
		if (this.__installed === true) {
			if ($q.config.screen !== void 0) if ($q.config.screen.bodyClasses === false) document.body.classList.remove(`screen--${this.name}`);
			else this.__update(true);
			return;
		}
		const { visualViewport } = window;
		const target = visualViewport || window;
		const scrollingElement = document.scrollingElement || document.documentElement;
		const getSize = visualViewport === void 0 || client.is.mobile === true ? () => [Math.max(window.innerWidth, scrollingElement.clientWidth), Math.max(window.innerHeight, scrollingElement.clientHeight)] : () => [visualViewport.width * visualViewport.scale + window.innerWidth - scrollingElement.clientWidth, visualViewport.height * visualViewport.scale + window.innerHeight - scrollingElement.clientHeight];
		const classes = $q.config.screen?.bodyClasses === true;
		this.__update = (force) => {
			const [w, h] = getSize();
			if (h !== this.height) this.height = h;
			if (w !== this.width) this.width = w;
			else if (force !== true) return;
			let s = this.sizes;
			this.gt.xs = w >= s.sm;
			this.gt.sm = w >= s.md;
			this.gt.md = w >= s.lg;
			this.gt.lg = w >= s.xl;
			this.lt.sm = w < s.sm;
			this.lt.md = w < s.md;
			this.lt.lg = w < s.lg;
			this.lt.xl = w < s.xl;
			this.xs = this.lt.sm;
			this.sm = this.gt.xs === true && this.lt.md === true;
			this.md = this.gt.sm === true && this.lt.lg === true;
			this.lg = this.gt.md === true && this.lt.xl === true;
			this.xl = this.gt.lg;
			s = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl";
			if (s !== this.name) {
				if (classes === true) {
					document.body.classList.remove(`screen--${this.name}`);
					document.body.classList.add(`screen--${s}`);
				}
				this.name = s;
			}
		};
		let updateEvt, updateSizes = {}, updateDebounce = 16;
		this.setSizes = (sizes) => {
			SIZE_LIST.forEach((name) => {
				if (sizes[name] !== void 0) updateSizes[name] = sizes[name];
			});
		};
		this.setDebounce = (deb) => {
			updateDebounce = deb;
		};
		const start = () => {
			const style = getComputedStyle(document.body);
			if (style.getPropertyValue("--q-size-sm")) SIZE_LIST.forEach((name) => {
				this.sizes[name] = parseInt(style.getPropertyValue(`--q-size-${name}`), 10);
			});
			this.setSizes = (sizes) => {
				SIZE_LIST.forEach((name) => {
					if (sizes[name]) this.sizes[name] = sizes[name];
				});
				this.__update(true);
			};
			this.setDebounce = (delay) => {
				if (updateEvt !== void 0) target.removeEventListener("resize", updateEvt, passive);
				updateEvt = delay > 0 ? debounce(this.__update, delay) : this.__update;
				target.addEventListener("resize", updateEvt, passive);
			};
			this.setDebounce(updateDebounce);
			if (Object.keys(updateSizes).length !== 0) {
				this.setSizes(updateSizes);
				updateSizes = void 0;
			} else this.__update();
			if (classes === true && this.name === "xs") document.body.classList.add("screen--xs");
		};
		if (isRuntimeSsrPreHydration.value === true) onSSRHydrated.push(start);
		else start();
	}
});
//#endregion
//#region node_modules/quasar/src/plugins/dark/Dark.js
var Plugin$5 = createReactivePlugin({
	isActive: false,
	mode: false
}, {
	__media: void 0,
	set(val) {
		Plugin$5.mode = val;
		if (val === "auto") {
			if (Plugin$5.__media === void 0) {
				Plugin$5.__media = window.matchMedia("(prefers-color-scheme: dark)");
				Plugin$5.__updateMedia = () => {
					Plugin$5.set("auto");
				};
				Plugin$5.__media.addListener(Plugin$5.__updateMedia);
			}
			val = Plugin$5.__media.matches;
		} else if (Plugin$5.__media !== void 0) {
			Plugin$5.__media.removeListener(Plugin$5.__updateMedia);
			Plugin$5.__media = void 0;
		}
		Plugin$5.isActive = val === true;
		document.body.classList.remove(`body--${val === true ? "light" : "dark"}`);
		document.body.classList.add(`body--${val === true ? "dark" : "light"}`);
	},
	toggle() {
		Plugin$5.set(Plugin$5.isActive === false);
	},
	install({ $q, ssrContext }) {
		const dark = $q.config.dark;
		$q.dark = this;
		if (this.__installed !== true) this.set(dark !== void 0 ? dark : false);
	}
});
//#endregion
//#region node_modules/quasar/src/utils/css-var/set-css-var.js
function setCssVar(propName, value, element = document.body) {
	if (typeof propName !== "string") throw new TypeError("Expected a string as propName");
	if (typeof value !== "string") throw new TypeError("Expected a string as value");
	if (!(element instanceof Element)) throw new TypeError("Expected a DOM element");
	element.style.setProperty(`--q-${propName}`, value);
}
//#endregion
//#region node_modules/quasar/src/plugins/private.body/Body.js
function getMobilePlatform(is) {
	if (is.ios === true) return "ios";
	if (is.android === true) return "android";
}
function getBodyClasses({ is, has, within }, cfg) {
	const cls = [is.desktop === true ? "desktop" : "mobile", `${has.touch === false ? "no-" : ""}touch`];
	if (is.mobile === true) {
		const mobile = getMobilePlatform(is);
		if (mobile !== void 0) cls.push("platform-" + mobile);
	}
	if (is.nativeMobile === true) {
		const type = is.nativeMobileWrapper;
		cls.push(type);
		cls.push("native-mobile");
		if (is.ios === true && (cfg[type] === void 0 || cfg[type].iosStatusBarPadding !== false)) cls.push("q-ios-padding");
	} else if (is.electron === true) cls.push("electron");
	else if (is.bex === true) cls.push("bex");
	if (within.iframe === true) cls.push("within-iframe");
	return cls;
}
function applyClientSsrCorrections() {
	const { is } = client;
	const classes = document.body.className;
	const classList = new Set(classes.replace(/ {2}/g, " ").split(" "));
	if (is.nativeMobile !== true && is.electron !== true && is.bex !== true) {
		if (is.desktop === true) {
			classList.delete("mobile");
			classList.delete("platform-ios");
			classList.delete("platform-android");
			classList.add("desktop");
		} else if (is.mobile === true) {
			classList.delete("desktop");
			classList.add("mobile");
			classList.delete("platform-ios");
			classList.delete("platform-android");
			const mobile = getMobilePlatform(is);
			if (mobile !== void 0) classList.add(`platform-${mobile}`);
		}
	}
	if (client.has.touch === true) {
		classList.delete("no-touch");
		classList.add("touch");
	}
	if (client.within.iframe === true) classList.add("within-iframe");
	const newCls = Array.from(classList).join(" ");
	if (classes !== newCls) document.body.className = newCls;
}
function setColors(brand) {
	for (const color in brand) setCssVar(color, brand[color]);
}
var Body_default = { install(opts) {
	if (this.__installed === true) return;
	if (isRuntimeSsrPreHydration.value === true) applyClientSsrCorrections();
	else {
		const { $q } = opts;
		if ($q.config.brand !== void 0) setColors($q.config.brand);
		const cls = getBodyClasses(client, $q.config);
		document.body.classList.add.apply(document.body.classList, cls);
	}
	if (client.is.ios === true) document.body.addEventListener("touchstart", noop);
	window.addEventListener("keydown", onKeyDownComposition, true);
} };
//#endregion
//#region node_modules/quasar/lang/en-US.js
var en_US_default = {
	isoName: "en-US",
	nativeName: "English (US)",
	label: {
		clear: "Clear",
		ok: "OK",
		cancel: "Cancel",
		close: "Close",
		set: "Set",
		select: "Select",
		reset: "Reset",
		remove: "Remove",
		update: "Update",
		create: "Create",
		search: "Search",
		filter: "Filter",
		refresh: "Refresh",
		expand: (label) => label ? `Expand "${label}"` : "Expand",
		collapse: (label) => label ? `Collapse "${label}"` : "Collapse"
	},
	date: {
		days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		firstDayOfWeek: 0,
		format24h: false,
		pluralDay: "days",
		prevMonth: "Previous month",
		nextMonth: "Next month",
		prevYear: "Previous year",
		nextYear: "Next year",
		today: "Today",
		prevRangeYears: (range) => `Previous ${range} years`,
		nextRangeYears: (range) => `Next ${range} years`
	},
	table: {
		noData: "No data available",
		noResults: "No matching records found",
		loading: "Loading...",
		selectedRecords: (rows) => rows === 1 ? "1 record selected." : (rows === 0 ? "No" : rows) + " records selected.",
		recordsPerPage: "Records per page:",
		allRows: "All",
		pagination: (start, end, total) => start + "-" + end + " of " + total,
		columns: "Columns"
	},
	pagination: {
		first: "First page",
		prev: "Previous page",
		next: "Next page",
		last: "Last page"
	},
	editor: {
		url: "URL",
		bold: "Bold",
		italic: "Italic",
		strikethrough: "Strikethrough",
		underline: "Underline",
		unorderedList: "Unordered List",
		orderedList: "Ordered List",
		subscript: "Subscript",
		superscript: "Superscript",
		hyperlink: "Hyperlink",
		toggleFullscreen: "Toggle Fullscreen",
		quote: "Quote",
		left: "Left align",
		center: "Center align",
		right: "Right align",
		justify: "Justify align",
		print: "Print",
		outdent: "Decrease indentation",
		indent: "Increase indentation",
		removeFormat: "Remove formatting",
		formatting: "Formatting",
		fontSize: "Font Size",
		align: "Align",
		hr: "Insert Horizontal Rule",
		undo: "Undo",
		redo: "Redo",
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		heading4: "Heading 4",
		heading5: "Heading 5",
		heading6: "Heading 6",
		paragraph: "Paragraph",
		code: "Code",
		size1: "Very small",
		size2: "A bit small",
		size3: "Normal",
		size4: "Medium-large",
		size5: "Big",
		size6: "Very big",
		size7: "Maximum",
		defaultFont: "Default Font",
		viewSource: "View Source"
	},
	tree: {
		noNodes: "No nodes available",
		noResults: "No matching nodes found"
	}
};
//#endregion
//#region node_modules/quasar/src/plugins/lang/Lang.js
function getLocale() {
	const val = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
	if (typeof val === "string") return val.split(/[-_]/).map((v, i) => i === 0 ? v.toLowerCase() : i > 1 || v.length < 4 ? v.toUpperCase() : v[0].toUpperCase() + v.slice(1).toLowerCase()).join("-");
}
var Plugin$4 = createReactivePlugin({ __qLang: {} }, {
	getLocale,
	set(langObject = en_US_default, ssrContext) {
		const lang = {
			...langObject,
			rtl: langObject.rtl === true,
			getLocale
		};
		lang.set = Plugin$4.set;
		if (Plugin$4.__langConfig === void 0 || Plugin$4.__langConfig.noHtmlAttrs !== true) {
			const el = document.documentElement;
			el.setAttribute("dir", lang.rtl === true ? "rtl" : "ltr");
			el.setAttribute("lang", lang.isoName);
		}
		Object.assign(Plugin$4.__qLang, lang);
	},
	install({ $q, lang, ssrContext }) {
		$q.lang = Plugin$4.__qLang;
		Plugin$4.__langConfig = $q.config.lang;
		if (this.__installed === true) {
			if (lang !== void 0) this.set(lang);
		} else {
			this.props = new Proxy(this.__qLang, {
				get() {
					return Reflect.get(...arguments);
				},
				ownKeys(target) {
					return Reflect.ownKeys(target).filter((key) => key !== "set" && key !== "getLocale");
				}
			});
			this.set(lang || en_US_default);
		}
	}
});
//#endregion
//#region node_modules/quasar/icon-set/material-icons.js
var material_icons_default = {
	name: "material-icons",
	type: {
		positive: "check_circle",
		negative: "warning",
		info: "info",
		warning: "priority_high"
	},
	arrow: {
		up: "arrow_upward",
		right: "arrow_forward",
		down: "arrow_downward",
		left: "arrow_back",
		dropdown: "arrow_drop_down"
	},
	chevron: {
		left: "chevron_left",
		right: "chevron_right"
	},
	colorPicker: {
		spectrum: "gradient",
		tune: "tune",
		palette: "style"
	},
	pullToRefresh: { icon: "refresh" },
	carousel: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down",
		navigationIcon: "lens"
	},
	chip: {
		remove: "cancel",
		selected: "check"
	},
	datetime: {
		arrowLeft: "chevron_left",
		arrowRight: "chevron_right",
		now: "access_time",
		today: "today"
	},
	editor: {
		bold: "format_bold",
		italic: "format_italic",
		strikethrough: "strikethrough_s",
		underline: "format_underlined",
		unorderedList: "format_list_bulleted",
		orderedList: "format_list_numbered",
		subscript: "vertical_align_bottom",
		superscript: "vertical_align_top",
		hyperlink: "link",
		toggleFullscreen: "fullscreen",
		quote: "format_quote",
		left: "format_align_left",
		center: "format_align_center",
		right: "format_align_right",
		justify: "format_align_justify",
		print: "print",
		outdent: "format_indent_decrease",
		indent: "format_indent_increase",
		removeFormat: "format_clear",
		formatting: "text_format",
		fontSize: "format_size",
		align: "format_align_left",
		hr: "remove",
		undo: "undo",
		redo: "redo",
		heading: "format_size",
		code: "code",
		size: "format_size",
		font: "font_download",
		viewSource: "code"
	},
	expansionItem: {
		icon: "keyboard_arrow_down",
		denseIcon: "arrow_drop_down"
	},
	fab: {
		icon: "add",
		activeIcon: "close"
	},
	field: {
		clear: "cancel",
		error: "error"
	},
	pagination: {
		first: "first_page",
		prev: "keyboard_arrow_left",
		next: "keyboard_arrow_right",
		last: "last_page"
	},
	rating: { icon: "grade" },
	stepper: {
		done: "check",
		active: "edit",
		error: "warning"
	},
	tabs: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down"
	},
	table: {
		arrowUp: "arrow_upward",
		warning: "warning",
		firstPage: "first_page",
		prevPage: "chevron_left",
		nextPage: "chevron_right",
		lastPage: "last_page"
	},
	tree: { icon: "play_arrow" },
	uploader: {
		done: "done",
		clear: "clear",
		add: "add_box",
		upload: "cloud_upload",
		removeQueue: "clear_all",
		removeUploaded: "done_all"
	}
};
//#endregion
//#region node_modules/quasar/src/plugins/icon-set/IconSet.js
var Plugin$3 = createReactivePlugin({
	iconMapFn: null,
	__qIconSet: {}
}, {
	set(setObject, ssrContext) {
		const def = { ...setObject };
		def.set = Plugin$3.set;
		Object.assign(Plugin$3.__qIconSet, def);
	},
	install({ $q, iconSet, ssrContext }) {
		if ($q.config.iconMapFn !== void 0) this.iconMapFn = $q.config.iconMapFn;
		$q.iconSet = this.__qIconSet;
		injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
			this.iconMapFn = val;
		});
		if (this.__installed === true) {
			if (iconSet !== void 0) this.set(iconSet);
		} else {
			this.props = new Proxy(this.__qIconSet, {
				get() {
					return Reflect.get(...arguments);
				},
				ownKeys(target) {
					return Reflect.ownKeys(target).filter((key) => key !== "set");
				}
			});
			this.set(iconSet || material_icons_default);
		}
	}
});
//#endregion
//#region node_modules/quasar/src/install-quasar.js
/**
* If the list below changes, make sure
* to also edit /ui/testing/specs/generators/generator.plugin.js
* on the "autoInstalledPlugins" array
*/
var autoInstalledPlugins = [
	Platform,
	Body_default,
	Plugin$5,
	Screen_default,
	History_default,
	Plugin$4,
	Plugin$3
];
function createChildApp(appCfg, parentApp) {
	const app = createApp(appCfg);
	app.config.globalProperties = parentApp.config.globalProperties;
	const { reload, ...appContext } = parentApp._context;
	Object.assign(app._context, appContext);
	return app;
}
function installPlugins(pluginOpts, pluginList) {
	pluginList.forEach((Plugin) => {
		Plugin.install(pluginOpts);
		Plugin.__installed = true;
	});
}
function prepareApp(app, uiOpts, pluginOpts) {
	app.config.globalProperties.$q = pluginOpts.$q;
	app.provide("_q_", pluginOpts.$q);
	installPlugins(pluginOpts, autoInstalledPlugins);
	if (uiOpts.components !== void 0) Object.values(uiOpts.components).forEach((c) => {
		if (isObject(c) === true && c.name !== void 0) app.component(c.name, c);
	});
	if (uiOpts.directives !== void 0) Object.values(uiOpts.directives).forEach((d) => {
		if (isObject(d) === true && d.name !== void 0) app.directive(d.name, d);
	});
	if (uiOpts.plugins !== void 0) installPlugins(pluginOpts, Object.values(uiOpts.plugins).filter((p) => typeof p.install === "function" && autoInstalledPlugins.includes(p) === false));
	if (isRuntimeSsrPreHydration.value === true) pluginOpts.$q.onSSRHydrated = () => {
		pluginOpts.onSSRHydrated.forEach((fn) => {
			fn();
		});
		pluginOpts.$q.onSSRHydrated = () => {};
	};
}
//#endregion
//#region node_modules/quasar/src/vue-plugin.js
var vue_plugin_default = {
	name: "Quasar",
	version: "2.19.3",
	install: function installQuasar(parentApp, opts = {}) {
		const $q = { version: "2.19.3" };
		if (globalConfigIsFrozen === false) {
			if (opts.config !== void 0) Object.assign(globalConfig, opts.config);
			$q.config = { ...globalConfig };
			freezeGlobalConfig();
		} else $q.config = opts.config || {};
		prepareApp(parentApp, opts, {
			parentApp,
			$q,
			lang: opts.lang,
			iconSet: opts.iconSet,
			onSSRHydrated: []
		});
	},
	lang: Plugin$4,
	iconSet: Plugin$3
};
//#endregion
//#region src/App.vue
var _sfc_main = /* @__PURE__ */ Object.assign({ name: "App" }, {
	__name: "App",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(_component_router_view);
		};
	}
});
//#endregion
//#region src/stores/index.js
var stores_default = store(() => {
	return createPinia();
});
//#endregion
//#region src/router/index.js
var router_default = route(function() {
	return createRouter({
		scrollBehavior(to) {
			if (to.hash) return {
				el: to.hash,
				behavior: "smooth"
			};
		},
		routes,
		history: createWebHistory("/")
	});
});
//#endregion
//#region .quasar/prod-spa/app.js
/**
* THIS FILE IS GENERATED AUTOMATICALLY.
* DO NOT EDIT.
*
* You are probably looking on adding startup/initialization code.
* Use "quasar new boot <name>" and add it there.
* One boot file per concern. Then reference the file(s) in quasar.config file > boot:
* boot: ['file', ...] // do not add ".js" extension to it.
*
* Boot files are your "main.js"
**/
async function app_default(createAppFn, quasarUserOptions) {
	const app = createAppFn(_sfc_main);
	app.use(vue_plugin_default, quasarUserOptions);
	const store = typeof stores_default === "function" ? await stores_default({}) : stores_default;
	app.use(store);
	const router = markRaw(typeof router_default === "function" ? await router_default({ store }) : router_default);
	store.use(({ store }) => {
		store.router = router;
	});
	return {
		app,
		store,
		router
	};
}
//#endregion
//#region node_modules/quasar/src/plugins/app-fullscreen/AppFullscreen.js
var prefixes = {};
function assignFn(fn) {
	Object.assign(Plugin$2, {
		request: fn,
		exit: fn,
		toggle: fn
	});
}
function getFullscreenElement() {
	return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function updateEl() {
	const newEl = Plugin$2.activeEl = Plugin$2.isActive === false ? null : getFullscreenElement();
	changeGlobalNodesTarget(newEl === null || newEl === document.documentElement ? document.body : newEl);
}
function togglePluginState() {
	Plugin$2.isActive = Plugin$2.isActive === false;
	updateEl();
}
function promisify(target, fn) {
	try {
		const res = target[fn]();
		return res === void 0 ? Promise.resolve() : res;
	} catch (err) {
		return Promise.reject(err);
	}
}
var Plugin$2 = createReactivePlugin({
	isActive: false,
	activeEl: null
}, {
	isCapable: false,
	install({ $q }) {
		$q.fullscreen = this;
	}
});
prefixes.request = [
	"requestFullscreen",
	"msRequestFullscreen",
	"mozRequestFullScreen",
	"webkitRequestFullscreen"
].find((request) => document.documentElement[request] !== void 0);
Plugin$2.isCapable = prefixes.request !== void 0;
if (Plugin$2.isCapable === false) assignFn(() => Promise.reject("Not capable"));
else {
	Object.assign(Plugin$2, {
		request(target) {
			const el = target || document.documentElement;
			const { activeEl } = Plugin$2;
			if (el === activeEl) return Promise.resolve();
			return (activeEl !== null && el.contains(activeEl) === true ? Plugin$2.exit() : Promise.resolve()).finally(() => promisify(el, prefixes.request));
		},
		exit() {
			return Plugin$2.isActive === true ? promisify(document, prefixes.exit) : Promise.resolve();
		},
		toggle(target) {
			return Plugin$2.isActive === true ? Plugin$2.exit() : Plugin$2.request(target);
		}
	});
	prefixes.exit = [
		"exitFullscreen",
		"msExitFullscreen",
		"mozCancelFullScreen",
		"webkitExitFullscreen"
	].find((exit) => document[exit]);
	Plugin$2.isActive = Boolean(getFullscreenElement());
	if (Plugin$2.isActive === true) updateEl();
	[
		"onfullscreenchange",
		"onmsfullscreenchange",
		"onwebkitfullscreenchange"
	].forEach((evt) => {
		document[evt] = togglePluginState;
	});
}
//#endregion
//#region node_modules/quasar/src/plugins/storage/engine/web-storage.js
function encode(value) {
	if (isDate(value) === true) return "__q_date|" + value.getTime();
	if (isRegexp(value) === true) return "__q_expr|" + value.source;
	if (typeof value === "number") return "__q_numb|" + value;
	if (typeof value === "boolean") return "__q_bool|" + (value ? "1" : "0");
	if (typeof value === "string") return "__q_strn|" + value;
	if (typeof value === "function") return "__q_strn|" + value.toString();
	if (value === Object(value)) return "__q_objt|" + JSON.stringify(value);
	return value;
}
function decode(value) {
	if (value.length < 9) return value;
	const type = value.substring(0, 8);
	const source = value.substring(9);
	switch (type) {
		case "__q_date":
			const number = Number(source);
			return new Date(Number.isNaN(number) === true ? source : number);
		case "__q_expr": return new RegExp(source);
		case "__q_numb": return Number(source);
		case "__q_bool": return Boolean(source === "1");
		case "__q_strn": return String(source);
		case "__q_objt": return JSON.parse(source);
		default: return value;
	}
}
function getEmptyStorage() {
	const getVal = () => null;
	return {
		has: () => false,
		hasItem: () => false,
		getLength: () => 0,
		getItem: getVal,
		getIndex: getVal,
		getKey: getVal,
		getAll: () => {},
		getAllKeys: () => [],
		set: noop,
		setItem: noop,
		remove: noop,
		removeItem: noop,
		clear: noop,
		isEmpty: () => true
	};
}
function getStorage(type) {
	const webStorage = window[type + "Storage"], get = (key) => {
		const item = webStorage.getItem(key);
		return item ? decode(item) : null;
	};
	const hasItem = (key) => webStorage.getItem(key) !== null;
	const setItem = (key, value) => {
		webStorage.setItem(key, encode(value));
	};
	const removeItem = (key) => {
		webStorage.removeItem(key);
	};
	return {
		has: hasItem,
		hasItem,
		getLength: () => webStorage.length,
		getItem: get,
		getIndex: (index) => index < webStorage.length ? get(webStorage.key(index)) : null,
		getKey: (index) => index < webStorage.length ? webStorage.key(index) : null,
		getAll: () => {
			let key;
			const result = {}, len = webStorage.length;
			for (let i = 0; i < len; i++) {
				key = webStorage.key(i);
				result[key] = get(key);
			}
			return result;
		},
		getAllKeys: () => {
			const result = [], len = webStorage.length;
			for (let i = 0; i < len; i++) result.push(webStorage.key(i));
			return result;
		},
		set: setItem,
		setItem,
		remove: removeItem,
		removeItem,
		clear: () => {
			webStorage.clear();
		},
		isEmpty: () => webStorage.length === 0
	};
}
//#endregion
//#region node_modules/quasar/src/plugins/storage/LocalStorage.js
var storage$1 = client.has.webStorage === false ? getEmptyStorage() : getStorage("local");
var Plugin$1 = { install({ $q }) {
	$q.localStorage = storage$1;
} };
Object.assign(Plugin$1, storage$1);
//#endregion
//#region node_modules/quasar/src/plugins/storage/SessionStorage.js
var storage = client.has.webStorage === false ? getEmptyStorage() : getStorage("session");
var Plugin = { install({ $q }) {
	$q.sessionStorage = storage;
} };
Object.assign(Plugin, storage);
//#endregion
//#region node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar_default = createComponent({
	name: "QAvatar",
	props: {
		...useSizeProps,
		fontSize: String,
		color: String,
		textColor: String,
		icon: String,
		square: Boolean,
		rounded: Boolean
	},
	setup(props, { slots }) {
		const sizeStyle = useSize(props);
		const classes = computed(() => "q-avatar" + (props.color ? ` bg-${props.color}` : "") + (props.textColor ? ` text-${props.textColor} q-chip--colored` : "") + (props.square === true ? " q-avatar--square" : props.rounded === true ? " rounded-borders" : ""));
		const contentStyle = computed(() => props.fontSize ? { fontSize: props.fontSize } : null);
		return () => {
			const icon = props.icon !== void 0 ? [h(QIcon_default, { name: props.icon })] : void 0;
			return h("div", {
				class: classes.value,
				style: sizeStyle.value
			}, [h("div", {
				class: "q-avatar__content row flex-center overflow-hidden",
				style: contentStyle.value
			}, hMergeSlotSafely(slots.default, icon))]);
		};
	}
});
//#endregion
//#region node_modules/quasar/src/plugins/notify/Notify.js
var uid = 0;
var defaults = {};
var groups = {};
var notificationsList = {};
var positionClass = {};
var emptyRE = /^\s*$/;
var notifRefs = [];
var invalidTimeoutValues = [
	void 0,
	null,
	true,
	false,
	""
];
var positionList = [
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right",
	"top",
	"bottom",
	"left",
	"right",
	"center"
];
var badgePositions = [
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
];
var notifTypes = {
	positive: {
		icon: ($q) => $q.iconSet.type.positive,
		color: "positive"
	},
	negative: {
		icon: ($q) => $q.iconSet.type.negative,
		color: "negative"
	},
	warning: {
		icon: ($q) => $q.iconSet.type.warning,
		color: "warning",
		textColor: "dark"
	},
	info: {
		icon: ($q) => $q.iconSet.type.info,
		color: "info"
	},
	ongoing: {
		group: false,
		timeout: 0,
		spinner: true,
		color: "grey-8"
	}
};
function addNotification(config, $q, originalApi) {
	if (!config) return logError("parameter required");
	let Api;
	const notif = { textColor: "white" };
	if (config.ignoreDefaults !== true) Object.assign(notif, defaults);
	if (isObject(config) === false) {
		if (notif.type) Object.assign(notif, notifTypes[notif.type]);
		config = { message: config };
	}
	Object.assign(notif, notifTypes[config.type || notif.type], config);
	if (typeof notif.icon === "function") notif.icon = notif.icon($q);
	if (!notif.spinner) notif.spinner = false;
	else {
		if (notif.spinner === true) notif.spinner = QSpinner_default;
		notif.spinner = markRaw(notif.spinner);
	}
	notif.meta = {
		hasMedia: Boolean(notif.spinner !== false || notif.icon || notif.avatar),
		hasText: hasContent(notif.message) || hasContent(notif.caption)
	};
	if (notif.position) {
		if (positionList.includes(notif.position) === false) return logError("wrong position", config);
	} else notif.position = "bottom";
	if (invalidTimeoutValues.includes(notif.timeout) === true) notif.timeout = 5e3;
	else {
		const t = Number(notif.timeout);
		if (isNaN(t) || t < 0) return logError("wrong timeout", config);
		notif.timeout = Number.isFinite(t) ? t : 0;
	}
	if (notif.timeout === 0) notif.progress = false;
	else if (notif.progress === true) {
		notif.meta.progressClass = "q-notification__progress" + (notif.progressClass ? ` ${notif.progressClass}` : "");
		notif.meta.progressStyle = { animationDuration: `${notif.timeout + 1e3}ms` };
	}
	const actions = (Array.isArray(config.actions) === true ? config.actions : []).concat(config.ignoreDefaults !== true && Array.isArray(defaults.actions) === true ? defaults.actions : []).concat(Array.isArray(notifTypes[config.type]?.actions) === true ? notifTypes[config.type].actions : []);
	const { closeBtn } = notif;
	if (closeBtn) actions.push({ label: typeof closeBtn === "string" ? closeBtn : $q.lang.label.close });
	notif.actions = actions.map(({ handler, noDismiss, ...item }) => ({
		flat: true,
		...item,
		onClick: typeof handler === "function" ? () => {
			handler();
			if (noDismiss !== true) dismiss();
		} : () => {
			dismiss();
		}
	}));
	if (notif.multiLine === void 0) notif.multiLine = notif.actions.length > 1;
	Object.assign(notif.meta, {
		class: `q-notification row items-stretch q-notification--${notif.multiLine === true ? "multi-line" : "standard"}` + (notif.color !== void 0 ? ` bg-${notif.color}` : "") + (notif.textColor !== void 0 ? ` text-${notif.textColor}` : "") + (notif.classes !== void 0 ? ` ${notif.classes}` : ""),
		wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (notif.multiLine === true ? "column no-wrap justify-center" : "row items-center"),
		contentClass: "q-notification__content row items-center" + (notif.multiLine === true ? "" : " col"),
		leftClass: notif.meta.hasText === true ? "additional" : "single",
		attrs: {
			role: "alert",
			...notif.attrs
		}
	});
	if (notif.group === false) {
		notif.group = void 0;
		notif.meta.group = void 0;
	} else {
		if (notif.group === void 0 || notif.group === true) notif.group = [
			notif.message,
			notif.caption,
			notif.multiline
		].concat(notif.actions.map((props) => `${props.label}*${props.icon}`)).join("|");
		notif.meta.group = notif.group + "|" + notif.position;
	}
	if (notif.actions.length === 0) notif.actions = void 0;
	else notif.meta.actionsClass = "q-notification__actions row items-center " + (notif.multiLine === true ? "justify-end" : "col-auto") + (notif.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
	if (originalApi !== void 0) {
		if (originalApi.notif.meta.timer) {
			clearTimeout(originalApi.notif.meta.timer);
			originalApi.notif.meta.timer = void 0;
		}
		notif.meta.uid = originalApi.notif.meta.uid;
		const index = notificationsList[notif.position].value.indexOf(originalApi.notif);
		notificationsList[notif.position].value[index] = notif;
	} else {
		const original = groups[notif.meta.group];
		if (original === void 0) {
			notif.meta.uid = uid++;
			notif.meta.badge = 1;
			if ([
				"left",
				"right",
				"center"
			].indexOf(notif.position) !== -1) notificationsList[notif.position].value.splice(Math.floor(notificationsList[notif.position].value.length / 2), 0, notif);
			else {
				const action = notif.position.indexOf("top") !== -1 ? "unshift" : "push";
				notificationsList[notif.position].value[action](notif);
			}
			if (notif.group !== void 0) groups[notif.meta.group] = notif;
		} else {
			if (original.meta.timer) {
				clearTimeout(original.meta.timer);
				original.meta.timer = void 0;
			}
			if (notif.badgePosition !== void 0) {
				if (badgePositions.includes(notif.badgePosition) === false) return logError("wrong badgePosition", config);
			} else notif.badgePosition = `top-${notif.position.indexOf("left") !== -1 ? "right" : "left"}`;
			notif.meta.uid = original.meta.uid;
			notif.meta.badge = original.meta.badge + 1;
			notif.meta.badgeClass = `q-notification__badge q-notification__badge--${notif.badgePosition}` + (notif.badgeColor !== void 0 ? ` bg-${notif.badgeColor}` : "") + (notif.badgeTextColor !== void 0 ? ` text-${notif.badgeTextColor}` : "") + (notif.badgeClass ? ` ${notif.badgeClass}` : "");
			const index = notificationsList[notif.position].value.indexOf(original);
			notificationsList[notif.position].value[index] = groups[notif.meta.group] = notif;
		}
	}
	const dismiss = () => {
		removeNotification(notif);
		Api = void 0;
	};
	if (notif.timeout > 0) notif.meta.timer = setTimeout(() => {
		notif.meta.timer = void 0;
		dismiss();
	}, notif.timeout + 1e3);
	if (notif.group !== void 0) return (props) => {
		if (props !== void 0) logError("trying to update a grouped one which is forbidden", config);
		else dismiss();
	};
	Api = {
		dismiss,
		config,
		notif
	};
	if (originalApi !== void 0) {
		Object.assign(originalApi, Api);
		return;
	}
	return (props) => {
		if (Api !== void 0) if (props === void 0) Api.dismiss();
		else addNotification(Object.assign({}, Api.config, props, {
			group: false,
			position: notif.position
		}), $q, Api);
	};
}
function removeNotification(notif) {
	if (notif.meta.timer) {
		clearTimeout(notif.meta.timer);
		notif.meta.timer = void 0;
	}
	const index = notificationsList[notif.position].value.indexOf(notif);
	if (index !== -1) {
		if (notif.group !== void 0) delete groups[notif.meta.group];
		const el = notifRefs[String(notif.meta.uid)];
		if (el) {
			const { width, height } = getComputedStyle(el);
			el.style.left = `${el.offsetLeft}px`;
			el.style.width = width;
			el.style.height = height;
		}
		notificationsList[notif.position].value.splice(index, 1);
		if (typeof notif.onDismiss === "function") notif.onDismiss();
	}
}
function hasContent(str) {
	return str !== void 0 && str !== null && emptyRE.test(str) !== true;
}
function logError(error, config) {
	console.error(`Notify: ${error}`, config);
	return false;
}
function getComponent() {
	return createComponent({
		name: "QNotifications",
		devtools: { hide: true },
		setup() {
			return () => h("div", { class: "q-notifications" }, positionList.map((pos) => h(TransitionGroup, {
				key: pos,
				class: positionClass[pos],
				tag: "div",
				name: `q-notification--${pos}`
			}, () => notificationsList[pos].value.map((notif) => {
				const meta = notif.meta;
				const mainChild = [];
				if (meta.hasMedia === true) {
					if (notif.spinner !== false) mainChild.push(h(notif.spinner, {
						class: "q-notification__spinner q-notification__spinner--" + meta.leftClass,
						color: notif.spinnerColor,
						size: notif.spinnerSize
					}));
					else if (notif.icon) mainChild.push(h(QIcon_default, {
						class: "q-notification__icon q-notification__icon--" + meta.leftClass,
						name: notif.icon,
						color: notif.iconColor,
						size: notif.iconSize,
						role: "img"
					}));
					else if (notif.avatar) mainChild.push(h(QAvatar_default, { class: "q-notification__avatar q-notification__avatar--" + meta.leftClass }, () => h("img", {
						src: notif.avatar,
						"aria-hidden": "true"
					})));
				}
				if (meta.hasText === true) {
					let msgChild;
					const msgData = { class: "q-notification__message col" };
					if (notif.html === true) msgData.innerHTML = notif.caption ? `<div>${notif.message}</div><div class="q-notification__caption">${notif.caption}</div>` : notif.message;
					else {
						const msgNode = [notif.message];
						msgChild = notif.caption ? [h("div", msgNode), h("div", { class: "q-notification__caption" }, [notif.caption])] : msgNode;
					}
					mainChild.push(h("div", msgData, msgChild));
				}
				const child = [h("div", { class: meta.contentClass }, mainChild)];
				if (notif.progress === true) child.push(h("div", {
					key: `${meta.uid}|p|${meta.badge}`,
					class: meta.progressClass,
					style: meta.progressStyle
				}));
				if (notif.actions !== void 0) child.push(h("div", { class: meta.actionsClass }, notif.actions.map((props) => h(QBtn_default, props))));
				if (meta.badge > 1) child.push(h("div", {
					key: `${meta.uid}|${meta.badge}`,
					class: notif.meta.badgeClass,
					style: notif.badgeStyle
				}, [meta.badge]));
				return h("div", {
					ref: (el) => {
						notifRefs[String(meta.uid)] = el;
					},
					key: meta.uid,
					class: meta.class,
					...meta.attrs
				}, [h("div", { class: meta.wrapperClass }, child)]);
			}))));
		}
	});
}
//#endregion
//#region .quasar/prod-spa/quasar-user-options.js
/**
* THIS FILE IS GENERATED AUTOMATICALLY.
* DO NOT EDIT.
*
* You are probably looking on adding startup/initialization code.
* Use "quasar new boot <name>" and add it there.
* One boot file per concern. Then reference the file(s) in quasar.config file > boot:
* boot: ['file', ...] // do not add ".js" extension to it.
*
* Boot files are your "main.js"
**/
var quasar_user_options_default = {
	config: {
		"notify": {},
		"dark": "auto"
	},
	plugins: {
		AddressbarColor: AddressbarColor_default,
		AppFullscreen: Plugin$2,
		LocalStorage: Plugin$1,
		SessionStorage: Plugin,
		Notify: {
			setDefaults(opts) {
				if (isObject(opts) === true) Object.assign(defaults, opts);
			},
			registerType(typeName, typeOpts) {
				if (isObject(typeOpts) === true) notifTypes[typeName] = typeOpts;
			},
			install({ $q, parentApp }) {
				$q.notify = this.create = (opts) => addNotification(opts, $q);
				$q.notify.setDefaults = this.setDefaults;
				$q.notify.registerType = this.registerType;
				if ($q.config.notify !== void 0) this.setDefaults($q.config.notify);
				if (this.__installed !== true) {
					positionList.forEach((pos) => {
						notificationsList[pos] = ref([]);
						const vert = [
							"left",
							"center",
							"right"
						].includes(pos) === true ? "center" : pos.indexOf("top") !== -1 ? "top" : "bottom", align = pos.indexOf("left") !== -1 ? "start" : pos.indexOf("right") !== -1 ? "end" : "center";
						positionClass[pos] = `q-notifications__list q-notifications__list--${vert} fixed column no-wrap ${["left", "right"].includes(pos) ? `items-${pos === "left" ? "start" : "end"} justify-center` : pos === "center" ? "flex-center" : `items-${align}`}`;
					});
					const el = createGlobalNode("q-notify");
					createChildApp(getComponent(), parentApp).mount(el);
				}
			}
		}
	}
};
//#endregion
//#region .quasar/prod-spa/client-entry.js
/**
* THIS FILE IS GENERATED AUTOMATICALLY.
* DO NOT EDIT.
*
* You are probably looking on adding startup/initialization code.
* Use "quasar new boot <name>" and add it there.
* One boot file per concern. Then reference the file(s) in quasar.config file > boot:
* boot: ['file', ...] // do not add ".js" extension to it.
*
* Boot files are your "main.js"
**/
var publicPath = `/`;
async function start({ app, router, store }, bootFiles) {
	let hasRedirected = false;
	const getRedirectUrl = (url) => {
		try {
			return router.resolve(url).href;
		} catch (err) {}
		return Object(url) === url ? null : url;
	};
	const redirect = (url) => {
		hasRedirected = true;
		if (typeof url === "string" && /^https?:\/\//.test(url)) {
			window.location.href = url;
			return;
		}
		const href = getRedirectUrl(url);
		if (href !== null) window.location.href = href;
	};
	const urlPath = window.location.href.replace(window.location.origin, "");
	for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) try {
		await bootFiles[i]({
			app,
			router,
			store,
			ssrContext: null,
			redirect,
			urlPath,
			publicPath
		});
	} catch (err) {
		if (err && err.url) {
			redirect(err.url);
			return;
		}
		console.error("[Quasar] boot error:", err);
		return;
	}
	if (hasRedirected === true) return;
	app.use(router);
	app.mount("#q-app");
}
app_default(createApp, quasar_user_options_default).then((app) => {
	const [method, mapFn] = Promise.allSettled !== void 0 ? ["allSettled", (bootFiles) => bootFiles.map((result) => {
		if (result.status === "rejected") {
			console.error("[Quasar] boot error:", result.reason);
			return;
		}
		return result.value.default;
	})] : ["all", (bootFiles) => bootFiles.map((entry) => entry.default)];
	return Promise[method]([
		__vitePreload(() => import("./i18n-D9Cp3-92.js"), __vite__mapDeps([0,1,2,3])),
		__vitePreload(() => import("./addressbar-color-ZRjz2fw-.js"), __vite__mapDeps([4,5,6,1,2,3,7,8])),
		__vitePreload(() => import("./register-global-components-BdsDsI-d.js"), __vite__mapDeps([9,10,2,11,12,1,3,13,14,15,16,17,7,18,19,20,8,21,22,23,24,25,26,27,6,28,29,30,31,32,33,34,35])),
		__vitePreload(() => Promise.resolve({}), __vite__mapDeps([36]))
	]).then((bootFiles) => {
		start(app, mapFn(bootFiles).filter((entry) => typeof entry === "function"));
	});
});
//#endregion
