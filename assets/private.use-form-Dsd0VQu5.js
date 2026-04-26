import { l as computed, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
//#region node_modules/quasar/src/utils/private.focus/focus-manager.js
var queue = [];
var waitFlags = [];
function clearFlag(flag) {
	waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
	clearFlag(flag);
	waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
	clearFlag(flag);
	if (waitFlags.length === 0 && queue.length !== 0) {
		queue[queue.length - 1]();
		queue = [];
	}
}
function addFocusFn(fn) {
	if (waitFlags.length === 0) fn();
	else queue.push(fn);
}
function removeFocusFn(fn) {
	queue = queue.filter((entry) => entry !== fn);
}
//#endregion
//#region node_modules/quasar/src/composables/use-form/private.use-form.js
var useFormProps = { name: String };
function useFormInject(formAttrs = {}) {
	return (child, action, className) => {
		child[action](h("input", {
			class: "hidden" + (className || ""),
			...formAttrs.value
		}));
	};
}
function useFormInputNameAttr(props) {
	return computed(() => props.name || props.for);
}
//#endregion
export { addFocusWaitFlag as a, addFocusFn as i, useFormInputNameAttr as n, removeFocusFn as o, useFormProps as r, removeFocusWaitFlag as s, useFormInject as t };
