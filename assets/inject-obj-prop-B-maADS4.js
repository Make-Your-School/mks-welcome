//#region node_modules/quasar/src/utils/private.inject-obj-prop/inject-obj-prop.js
function injectProp(target, propName, get, set) {
	Object.defineProperty(target, propName, {
		get,
		set,
		enumerable: true
	});
	return target;
}
function injectMultipleProps(target, props) {
	for (const key in props) injectProp(target, key, props[key]);
	return target;
}
//#endregion
export { injectProp as n, injectMultipleProps as t };
