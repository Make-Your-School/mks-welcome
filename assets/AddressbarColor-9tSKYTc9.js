import { n as client } from "./Platform-Cr5ll_X8.js";
import { o as noop } from "./event-JAmtdkur.js";
//#region node_modules/quasar/wrappers/index.js
/*******************************************************
* Warning!
* All these are deprecated starting with
*    @quasar/app-vite v2
*    @quasar/app-webpack v4
*
* Use the new wrappers from #q-app/wrappers
*******************************************************/
function boot(callback) {
	return callback;
}
function route(callback) {
	return callback;
}
function store(callback) {
	return callback;
}
//#endregion
//#region node_modules/quasar/src/utils/css-var/get-css-var.js
function getCssVar(propName, element = document.body) {
	if (typeof propName !== "string") throw new TypeError("Expected a string as propName");
	if (!(element instanceof Element)) throw new TypeError("Expected a DOM element");
	return getComputedStyle(element).getPropertyValue(`--q-${propName}`).trim() || null;
}
//#endregion
//#region node_modules/quasar/src/plugins/addressbar/AddressbarColor.js
var metaValue;
function getProp() {
	return client.is.winphone ? "msapplication-navbutton-color" : "theme-color";
}
function getMetaTag(v) {
	const els = document.getElementsByTagName("META");
	for (const i in els) if (els[i].name === v) return els[i];
}
function setColor(hexColor) {
	if (metaValue === void 0) metaValue = getProp();
	let metaTag = getMetaTag(metaValue);
	const newTag = metaTag === void 0;
	if (newTag) {
		metaTag = document.createElement("meta");
		metaTag.setAttribute("name", metaValue);
	}
	metaTag.setAttribute("content", hexColor);
	if (newTag) document.head.appendChild(metaTag);
}
var AddressbarColor_default = {
	set: client.is.mobile === true && (client.is.nativeMobile === true || client.is.winphone === true || client.is.safari === true || client.is.webkit === true || client.is.vivaldi === true) ? (hexColor) => {
		const val = hexColor || getCssVar("primary");
		if (client.is.nativeMobile === true && window.StatusBar) window.StatusBar.backgroundColorByHexString(val);
		else setColor(val);
	} : noop,
	install({ $q }) {
		$q.addressbarColor = this;
		if ($q.config.addressbarColor) this.set($q.config.addressbarColor);
	}
};
//#endregion
export { store as i, boot as n, route as r, AddressbarColor_default as t };
