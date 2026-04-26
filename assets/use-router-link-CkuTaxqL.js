import { l as computed, rt as unref, v as getCurrentInstance } from "./vue.esm-bundler-DkjeOeAQ.js";
//#region node_modules/quasar/src/utils/dom/dom.js
function css(element, cssObject) {
	const elementStyle = element.style;
	for (const prop in cssObject) elementStyle[prop] = cssObject[prop];
}
function getElement(el) {
	if (el === void 0 || el === null) return;
	if (typeof el === "string") try {
		return document.querySelector(el) || void 0;
	} catch {
		return;
	}
	const target = unref(el);
	if (target) return target.$el || target;
}
function childHasFocus(el, focusedEl) {
	if (el === void 0 || el === null || el.contains(focusedEl) === true) return true;
	for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) if (next.contains(focusedEl)) return true;
	return false;
}
//#endregion
//#region node_modules/quasar/src/utils/private.vm/vm.js
function getParentProxy(proxy) {
	if (Object(proxy.$parent) === proxy.$parent) return proxy.$parent;
	let { parent } = proxy.$;
	while (Object(parent) === parent) {
		if (Object(parent.proxy) === parent.proxy) return parent.proxy;
		parent = parent.parent;
	}
}
function fillNormalizedVNodes(children, vnode) {
	if (typeof vnode.type === "symbol") {
		if (Array.isArray(vnode.children) === true) vnode.children.forEach((child) => {
			fillNormalizedVNodes(children, child);
		});
	} else children.add(vnode);
}
function getNormalizedVNodes(vnodes) {
	const children = /* @__PURE__ */ new Set();
	vnodes.forEach((vnode) => {
		fillNormalizedVNodes(children, vnode);
	});
	return Array.from(children);
}
function vmHasRouter(vm) {
	return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
	return vm.isUnmounted === true || vm.isDeactivated === true;
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-router-link/use-router-link.js
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key], outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
	}
	return true;
}
function isEquivalentArray(a, b) {
	return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
	return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (isSameRouteLocationParamsValue(a[key], b[key]) === false) return false;
	return true;
}
var useRouterLinkNonMatchingProps = {
	to: [String, Object],
	replace: Boolean,
	href: String,
	target: String,
	disable: Boolean
};
var useRouterLinkProps = {
	...useRouterLinkNonMatchingProps,
	exact: Boolean,
	activeClass: {
		type: String,
		default: "q-router-link--active"
	},
	exactActiveClass: {
		type: String,
		default: "q-router-link--exact-active"
	}
};
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
	const vm = getCurrentInstance();
	const { props, proxy, emit } = vm;
	const hasRouter = vmHasRouter(vm);
	const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
	const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(() => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== "") : computed(() => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== "");
	const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
	const hasRouterLink = computed(() => resolvedLink.value !== null);
	const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
	const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
	const linkAttrs = computed(() => hasHrefLink.value === true ? {
		href: props.href,
		target: props.target
	} : hasRouterLink.value === true ? {
		href: resolvedLink.value.href,
		target: props.target
	} : {});
	const linkActiveIndex = computed(() => {
		if (hasRouterLink.value === false) return -1;
		const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
		if (routeMatched === void 0) return -1;
		const currentMatched = proxy.$route.matched;
		if (currentMatched.length === 0) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index !== -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const linkIsActive = computed(() => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params));
	const linkIsExactActive = computed(() => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params));
	const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
	function getLink(to) {
		try {
			return proxy.$router.resolve(to);
		} catch {}
		return null;
	}
	/**
	* @returns Promise<RouterError | false | undefined>
	*/
	function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
		if (props.disable === true) {
			e.preventDefault();
			return Promise.resolve(false);
		}
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") return Promise.resolve(false);
		e.preventDefault();
		const promise = proxy.$router[replace === true ? "replace" : "push"](to);
		return returnRouterError === true ? promise : promise.then(() => {}).catch(() => {});
	}
	function navigateOnClick(e) {
		if (hasRouterLink.value === true) {
			const go = (opts) => navigateToRouterLink(e, opts);
			emit("click", e, go);
			if (e.defaultPrevented !== true) go();
		} else emit("click", e);
	}
	return {
		hasRouterLink,
		hasHrefLink,
		hasLink,
		linkTag,
		resolvedLink,
		linkIsActive,
		linkIsExactActive,
		linkClass,
		linkAttrs,
		getLink,
		navigateToRouterLink,
		navigateOnClick
	};
}
//#endregion
export { getParentProxy as a, childHasFocus as c, getNormalizedVNodes as i, css as l, useRouterLinkNonMatchingProps as n, vmHasRouter as o, useRouterLinkProps as r, vmIsDestroyed as s, useRouterLink as t, getElement as u };
