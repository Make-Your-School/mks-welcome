import { D as onBeforeUnmount, k as onDeactivated, v as getCurrentInstance } from "./vue.esm-bundler-DdwSdRj_.js";
import { t as Platform } from "./Platform-Cr5ll_X8.js";
import { s as vmIsDestroyed } from "./use-router-link-sQjPpcic.js";
//#region node_modules/quasar/src/utils/private.selection/selection.js
function clearSelection() {
	if (window.getSelection !== void 0) {
		const selection = window.getSelection();
		if (selection.empty !== void 0) selection.empty();
		else if (selection.removeAllRanges !== void 0) {
			selection.removeAllRanges();
			if (Platform.is.mobile !== true) selection.addRange(document.createRange());
		}
	} else if (document.selection !== void 0) document.selection.empty();
}
//#endregion
//#region node_modules/quasar/src/composables/use-timeout/use-timeout.js
function useTimeout() {
	let timer = null;
	const vm = getCurrentInstance();
	function removeTimeout() {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}
	}
	onDeactivated(removeTimeout);
	onBeforeUnmount(removeTimeout);
	return {
		removeTimeout,
		registerTimeout(fn, delay) {
			removeTimeout();
			if (vmIsDestroyed(vm) === false) timer = setTimeout(() => {
				timer = null;
				fn();
			}, delay);
		}
	};
}
//#endregion
export { clearSelection as n, useTimeout as t };
