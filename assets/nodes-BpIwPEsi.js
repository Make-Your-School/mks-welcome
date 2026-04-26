//#region node_modules/quasar/src/utils/private.config/instance-config.js
var globalConfig = {};
var globalConfigIsFrozen = false;
function freezeGlobalConfig() {
	globalConfigIsFrozen = true;
}
//#endregion
//#region node_modules/quasar/src/utils/is/is.js
function isDeepEqual(a, b) {
	if (a === b) return true;
	if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
		if (a.constructor !== b.constructor) return false;
		let length, i;
		if (a.constructor === Array) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (isDeepEqual(a[i], b[i]) !== true) return false;
			return true;
		}
		if (a.constructor === Map) {
			if (a.size !== b.size) return false;
			let iter = a.entries();
			i = iter.next();
			while (i.done !== true) {
				if (b.has(i.value[0]) !== true) return false;
				i = iter.next();
			}
			iter = a.entries();
			i = iter.next();
			while (i.done !== true) {
				if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) return false;
				i = iter.next();
			}
			return true;
		}
		if (a.constructor === Set) {
			if (a.size !== b.size) return false;
			const iter = a.entries();
			i = iter.next();
			while (i.done !== true) {
				if (b.has(i.value[0]) !== true) return false;
				i = iter.next();
			}
			return true;
		}
		if (a.buffer != null && a.buffer.constructor === ArrayBuffer) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
			return true;
		}
		if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
		if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
		if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
		const keys = Object.keys(a).filter((key) => a[key] !== void 0);
		length = keys.length;
		if (length !== Object.keys(b).filter((key) => b[key] !== void 0).length) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (isDeepEqual(a[key], b[key]) !== true) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function isObject(v) {
	return v !== null && typeof v === "object" && Array.isArray(v) !== true;
}
function isDate(v) {
	return Object.prototype.toString.call(v) === "[object Date]";
}
function isRegexp(v) {
	return Object.prototype.toString.call(v) === "[object RegExp]";
}
function isNumber(v) {
	return typeof v === "number" && isFinite(v);
}
//#endregion
//#region node_modules/quasar/src/utils/private.config/nodes.js
var nodesList = [];
var portalTypeList = [];
var portalIndex = 1;
var target = document.body;
function createGlobalNode(id, portalType) {
	const el = document.createElement("div");
	el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id;
	if (globalConfig.globalNodes !== void 0) {
		const cls = globalConfig.globalNodes.class;
		if (cls !== void 0) el.className = cls;
	}
	target.appendChild(el);
	nodesList.push(el);
	portalTypeList.push(portalType);
	return el;
}
function removeGlobalNode(el) {
	const nodeIndex = nodesList.indexOf(el);
	nodesList.splice(nodeIndex, 1);
	portalTypeList.splice(nodeIndex, 1);
	el.remove();
}
function changeGlobalNodesTarget(newTarget) {
	if (newTarget === target) return;
	target = newTarget;
	if (target === document.body || portalTypeList.reduce((acc, type) => type === "dialog" ? acc + 1 : acc, 0) < 2) {
		nodesList.forEach((node) => {
			if (node.contains(target) === false) target.appendChild(node);
		});
		return;
	}
	const lastDialogIndex = portalTypeList.lastIndexOf("dialog");
	for (let i = 0; i < nodesList.length; i++) {
		const el = nodesList[i];
		if ((i === lastDialogIndex || portalTypeList[i] !== "dialog") && el.contains(target) === false) target.appendChild(el);
	}
}
//#endregion
export { isDeepEqual as a, isRegexp as c, globalConfigIsFrozen as d, isDate as i, freezeGlobalConfig as l, createGlobalNode as n, isNumber as o, removeGlobalNode as r, isObject as s, changeGlobalNodesTarget as t, globalConfig as u };
