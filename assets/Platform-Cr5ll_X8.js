import { Q as ref, Z as reactive } from "./vue.esm-bundler-DdwSdRj_.js";
import { n as injectProp } from "./inject-obj-prop-B-maADS4.js";
//#region node_modules/quasar/src/plugins/platform/Platform.js
/**
* __ QUASAR_SSR __            -> runs on SSR on client or server
* __ QUASAR_SSR_SERVER __     -> runs on SSR on server
* __ QUASAR_SSR_CLIENT __     -> runs on SSR on client
* __ QUASAR_SSR_PWA __        -> built with SSR+PWA; may run on SSR on client or on PWA client
*                              (needs runtime detection)
*/
var isRuntimeSsrPreHydration = ref(false);
var preHydrationBrowser;
function getMatch(userAgent, platformMatch) {
	const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent) || /(opr)[\/]([\w.]+)/.exec(userAgent) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+)/.exec(userAgent) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) || [];
	return {
		browser: match[5] || match[3] || match[1] || "",
		version: match[4] || match[2] || "0",
		platform: platformMatch[0] || ""
	};
}
function getPlatformMatch(userAgent) {
	return /(ipad)/.exec(userAgent) || /(ipod)/.exec(userAgent) || /(windows phone)/.exec(userAgent) || /(iphone)/.exec(userAgent) || /(kindle)/.exec(userAgent) || /(silk)/.exec(userAgent) || /(android)/.exec(userAgent) || /(win)/.exec(userAgent) || /(mac)/.exec(userAgent) || /(linux)/.exec(userAgent) || /(cros)/.exec(userAgent) || /(playbook)/.exec(userAgent) || /(bb)/.exec(userAgent) || /(blackberry)/.exec(userAgent) || [];
}
var hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function getPlatform(UA) {
	const userAgent = UA.toLowerCase();
	const matched = getMatch(userAgent, getPlatformMatch(userAgent));
	const browser = {
		mobile: false,
		desktop: false,
		cordova: false,
		capacitor: false,
		nativeMobile: false,
		electron: false,
		bex: false,
		linux: false,
		mac: false,
		win: false,
		cros: false,
		chrome: false,
		firefox: false,
		opera: false,
		safari: false,
		vivaldi: false,
		edge: false,
		edgeChromium: false,
		ie: false,
		webkit: false,
		android: false,
		ios: false,
		ipad: false,
		iphone: false,
		ipod: false,
		kindle: false,
		winphone: false,
		blackberry: false,
		playbook: false,
		silk: false
	};
	if (matched.browser) {
		browser[matched.browser] = true;
		browser.version = matched.version;
		browser.versionNumber = parseInt(matched.version, 10);
	}
	if (matched.platform) browser[matched.platform] = true;
	const knownMobiles = browser.android || browser.ios || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"];
	if (knownMobiles === true || userAgent.indexOf("mobile") !== -1) browser.mobile = true;
	else browser.desktop = true;
	if (browser["windows phone"]) {
		browser.winphone = true;
		delete browser["windows phone"];
	}
	if (browser.edga || browser.edgios || browser.edg) {
		browser.edge = true;
		matched.browser = "edge";
	} else if (browser.crios) {
		browser.chrome = true;
		matched.browser = "chrome";
	} else if (browser.fxios) {
		browser.firefox = true;
		matched.browser = "firefox";
	}
	if (browser.ipod || browser.ipad || browser.iphone) browser.ios = true;
	if (browser.vivaldi) {
		matched.browser = "vivaldi";
		browser.vivaldi = true;
	}
	if (browser.chrome || browser.opr || browser.safari || browser.vivaldi || browser.mobile === true && browser.ios !== true && knownMobiles !== true) browser.webkit = true;
	if (browser.opr) {
		matched.browser = "opera";
		browser.opera = true;
	}
	if (browser.safari) {
		if (browser.blackberry || browser.bb) {
			matched.browser = "blackberry";
			browser.blackberry = true;
		} else if (browser.playbook) {
			matched.browser = "playbook";
			browser.playbook = true;
		} else if (browser.android) {
			matched.browser = "android";
			browser.android = true;
		} else if (browser.kindle) {
			matched.browser = "kindle";
			browser.kindle = true;
		} else if (browser.silk) {
			matched.browser = "silk";
			browser.silk = true;
		}
	}
	browser.name = matched.browser;
	browser.platform = matched.platform;
	if (userAgent.indexOf("electron") !== -1) browser.electron = true;
	else if (document.location.href.indexOf("-extension://") !== -1) browser.bex = true;
	else {
		if (window.Capacitor !== void 0) {
			browser.capacitor = true;
			browser.nativeMobile = true;
			browser.nativeMobileWrapper = "capacitor";
		} else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
			browser.cordova = true;
			browser.nativeMobile = true;
			browser.nativeMobileWrapper = "cordova";
		}
		if (isRuntimeSsrPreHydration.value === true) preHydrationBrowser = { is: { ...browser } };
		if (hasTouch === true && browser.mac === true && (browser.desktop === true && browser.safari === true || browser.nativeMobile === true && browser.android !== true && browser.ios !== true && browser.ipad !== true)) {
			delete browser.mac;
			delete browser.desktop;
			const platform = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
			Object.assign(browser, {
				mobile: true,
				ios: true,
				platform,
				[platform]: true
			});
		}
		if (browser.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile) {
			delete browser.desktop;
			browser.mobile = true;
		}
	}
	return browser;
}
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var ssrClient = {
	has: {
		touch: false,
		webStorage: false
	},
	within: { iframe: false }
};
var client = {
	userAgent,
	is: getPlatform(userAgent),
	has: { touch: hasTouch },
	within: { iframe: window.self !== window.top }
};
var Platform = { install(opts) {
	const { $q } = opts;
	if (isRuntimeSsrPreHydration.value === true) {
		opts.onSSRHydrated.push(() => {
			Object.assign($q.platform, client);
			isRuntimeSsrPreHydration.value = false;
		});
		$q.platform = reactive(this);
	} else $q.platform = this;
} };
{
	let hasWebStorage;
	injectProp(client.has, "webStorage", () => {
		if (hasWebStorage !== void 0) return hasWebStorage;
		try {
			if (window.localStorage) {
				hasWebStorage = true;
				return true;
			}
		} catch {}
		hasWebStorage = false;
		return false;
	});
	Object.assign(Platform, client);
	if (isRuntimeSsrPreHydration.value === true) {
		Object.assign(Platform, preHydrationBrowser, ssrClient);
		preHydrationBrowser = null;
	}
}
//#endregion
export { client as n, isRuntimeSsrPreHydration as r, Platform as t };
