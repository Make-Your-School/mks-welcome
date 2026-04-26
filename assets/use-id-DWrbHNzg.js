import { A as onMounted, Q as ref, V as watch, l as computed } from "./vue.esm-bundler-DkjeOeAQ.js";
import { r as isRuntimeSsrPreHydration } from "./Platform-Hxr0V5Kb.js";
//#region node_modules/quasar/src/utils/uid/uid.js
/**
* Based on the work of https://github.com/jchook/uuid-random
*/
var buf, bufIdx = 0;
var hexBytes = new Array(256);
for (let i = 0; i < 256; i++) hexBytes[i] = (i + 256).toString(16).substring(1);
var randomBytes = (() => {
	const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
	if (lib !== void 0) {
		if (lib.randomBytes !== void 0) return lib.randomBytes;
		if (lib.getRandomValues !== void 0) return (n) => {
			const bytes = new Uint8Array(n);
			lib.getRandomValues(bytes);
			return bytes;
		};
	}
	return (n) => {
		const r = [];
		for (let i = n; i > 0; i--) r.push(Math.floor(Math.random() * 256));
		return r;
	};
})();
var BUFFER_SIZE = 4096;
function uid() {
	if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
		bufIdx = 0;
		buf = randomBytes(BUFFER_SIZE);
	}
	const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
	b[6] = b[6] & 15 | 64;
	b[8] = b[8] & 63 | 128;
	return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
//#endregion
//#region node_modules/quasar/src/composables/use-id/use-id.js
function parseValue(val) {
	return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
	return val === void 0 || val === null ? required === true ? `f_${uid()}` : null : val;
}
/**
* Returns an "id" which is a ref() that can be used as
* a unique identifier to apply to a DOM node attribute.
*
* On SSR, it takes care of generating the id on the client side (only) to
* avoid hydration errors.
*/
function useId({ getValue, required = true } = {}) {
	if (isRuntimeSsrPreHydration.value === true) {
		const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
		if (required === true && id.value === null) onMounted(() => {
			id.value = `f_${uid()}`;
		});
		if (getValue !== void 0) watch(getValue, (newId) => {
			id.value = getId(newId, required);
		});
		return id;
	}
	return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid()}`);
}
//#endregion
export { uid as n, useId as t };
