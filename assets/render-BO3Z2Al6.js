import { W as withDirectives, Y as markRaw, Z as reactive, _ as defineComponent, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { n as injectProp } from "./inject-obj-prop-B-maADS4.js";
//#region node_modules/quasar/src/utils/private.create/create.js
function createComponent(raw) {
	return markRaw(defineComponent(raw));
}
function createDirective(raw) {
	return markRaw(raw);
}
var createReactivePlugin = (state, plugin) => {
	const reactiveState = reactive(state);
	for (const name in state) injectProp(plugin, name, () => reactiveState[name], (val) => {
		reactiveState[name] = val;
	});
	return plugin;
};
//#endregion
//#region node_modules/quasar/src/utils/private.render/render.js
function hSlot(slot, otherwise) {
	return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
	if (slot !== void 0) {
		const vnode = slot();
		if (vnode !== void 0 && vnode !== null) return vnode.slice();
	}
	return otherwise;
}
/**
* Source definitely exists,
* so it's merged with the possible slot
*/
function hMergeSlot(slot, source) {
	return slot !== void 0 ? source.concat(slot()) : source;
}
/**
* Merge with possible slot,
* even if source might not exist
*/
function hMergeSlotSafely(slot, source) {
	if (slot === void 0) return source;
	return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
	data.key = key + condition;
	const vnode = h(tag, data, children);
	return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
//#endregion
export { hUniqueSlot as a, createReactivePlugin as c, hSlot as i, hMergeSlot as n, createComponent as o, hMergeSlotSafely as r, createDirective as s, hDir as t };
