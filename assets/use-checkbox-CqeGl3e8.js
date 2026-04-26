import { A as onMounted, D as onBeforeUnmount, Q as ref, V as watch, j as onUnmounted, k as onDeactivated, l as computed, s as Teleport, tt as toRaw, v as getCurrentInstance, w as nextTick, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { n as injectProp } from "./inject-obj-prop-B-maADS4.js";
import { n as client } from "./Platform-Hxr0V5Kb.js";
import { i as hSlot, n as hMergeSlot, o as createComponent } from "./render-AG-3FfQy.js";
import { a as listenOpts, c as prevent, d as stopAndPrevent, n as cleanEvt, t as addEvt } from "./event-JAmtdkur.js";
import { a as isKeyCode, i as useSizeProps, n as useSize } from "./QIcon-BIe_yU5L.js";
import { n as createGlobalNode, r as removeGlobalNode } from "./nodes-BpIwPEsi.js";
import { a as getParentProxy, s as vmIsDestroyed } from "./use-router-link-CkuTaxqL.js";
import { n as clearSelection } from "./use-timeout-B36y8WMi.js";
import { o as getScrollbarWidth } from "./QItemLabel-D9M7YRL7.js";
import { a as addFocusWaitFlag, r as useFormProps, s as removeFocusWaitFlag, t as useFormInject } from "./private.use-form-DoNiTCW_.js";
import { n as useDarkProps, t as useDark } from "./use-dark-D7HPSSY-.js";
//#region node_modules/quasar/src/composables/private.use-anchor/use-anchor.js
var useAnchorStaticProps = {
	target: {
		type: [
			Boolean,
			String,
			Element
		],
		default: true
	},
	noParentEvent: Boolean
};
var useAnchorProps = {
	...useAnchorStaticProps,
	contextMenu: Boolean
};
function useAnchor({ showing, avoidEmit, configureAnchorEl }) {
	const { props, proxy, emit } = getCurrentInstance();
	const anchorEl = ref(null);
	let touchTimer = null;
	function canShow(evt) {
		return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
	}
	const anchorEvents = {};
	if (configureAnchorEl === void 0) {
		Object.assign(anchorEvents, {
			hide(evt) {
				proxy.hide(evt);
			},
			toggle(evt) {
				proxy.toggle(evt);
				evt.qAnchorHandled = true;
			},
			toggleKey(evt) {
				if (isKeyCode(evt, 13) === true) anchorEvents.toggle(evt);
			},
			contextClick(evt) {
				proxy.hide(evt);
				prevent(evt);
				nextTick(() => {
					proxy.show(evt);
					evt.qAnchorHandled = true;
				});
			},
			prevent,
			mobileTouch(evt) {
				anchorEvents.mobileCleanup(evt);
				if (canShow(evt) !== true) return;
				proxy.hide(evt);
				anchorEl.value.classList.add("non-selectable");
				const target = evt.target;
				addEvt(anchorEvents, "anchor", [
					[
						target,
						"touchmove",
						"mobileCleanup",
						"passive"
					],
					[
						target,
						"touchend",
						"mobileCleanup",
						"passive"
					],
					[
						target,
						"touchcancel",
						"mobileCleanup",
						"passive"
					],
					[
						anchorEl.value,
						"contextmenu",
						"prevent",
						"notPassive"
					]
				]);
				touchTimer = setTimeout(() => {
					touchTimer = null;
					proxy.show(evt);
					evt.qAnchorHandled = true;
				}, 300);
			},
			mobileCleanup(evt) {
				anchorEl.value.classList.remove("non-selectable");
				if (touchTimer !== null) {
					clearTimeout(touchTimer);
					touchTimer = null;
				}
				if (showing.value === true && evt !== void 0) clearSelection();
			}
		});
		configureAnchorEl = function configureAnchorElFn(context = props.contextMenu) {
			if (props.noParentEvent === true || anchorEl.value === null) return;
			let evts;
			if (context === true) if (proxy.$q.platform.is.mobile === true) evts = [[
				anchorEl.value,
				"touchstart",
				"mobileTouch",
				"passive"
			]];
			else evts = [[
				anchorEl.value,
				"mousedown",
				"hide",
				"passive"
			], [
				anchorEl.value,
				"contextmenu",
				"contextClick",
				"notPassive"
			]];
			else evts = [[
				anchorEl.value,
				"click",
				"toggle",
				"passive"
			], [
				anchorEl.value,
				"keyup",
				"toggleKey",
				"passive"
			]];
			addEvt(anchorEvents, "anchor", evts);
		};
	}
	function unconfigureAnchorEl() {
		cleanEvt(anchorEvents, "anchor");
	}
	function setAnchorEl(el) {
		anchorEl.value = el;
		while (anchorEl.value.classList.contains("q-anchor--skip")) anchorEl.value = anchorEl.value.parentNode;
		configureAnchorEl();
	}
	function pickAnchorEl() {
		if (props.target === false || props.target === "" || proxy.$el.parentNode === null) anchorEl.value = null;
		else if (props.target === true) setAnchorEl(proxy.$el.parentNode);
		else {
			let el = props.target;
			if (typeof props.target === "string") try {
				el = document.querySelector(props.target);
			} catch {
				el = void 0;
			}
			if (el !== void 0 && el !== null) {
				anchorEl.value = el.$el || el;
				configureAnchorEl();
			} else {
				anchorEl.value = null;
				console.error(`Anchor: target "${props.target}" not found`);
			}
		}
	}
	watch(() => props.contextMenu, (val) => {
		if (anchorEl.value !== null) {
			unconfigureAnchorEl();
			configureAnchorEl(val);
		}
	});
	watch(() => props.target, () => {
		if (anchorEl.value !== null) unconfigureAnchorEl();
		pickAnchorEl();
	});
	watch(() => props.noParentEvent, (val) => {
		if (anchorEl.value !== null) if (val === true) unconfigureAnchorEl();
		else configureAnchorEl();
	});
	onMounted(() => {
		pickAnchorEl();
		if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) emit("update:modelValue", false);
	});
	onBeforeUnmount(() => {
		if (touchTimer !== null) clearTimeout(touchTimer);
		unconfigureAnchorEl();
	});
	return {
		anchorEl,
		canShow,
		anchorEvents
	};
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-scroll-target/use-scroll-target.js
function useScrollTarget(props, configureScrollTarget) {
	const localScrollTarget = ref(null);
	let scrollFn;
	function changeScrollEvent(scrollTarget, fn) {
		const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
		const fnHandler = fn !== void 0 ? fn : scrollFn;
		if (scrollTarget !== window) scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
		window[fnProp]("scroll", fnHandler, listenOpts.passive);
		scrollFn = fn;
	}
	function unconfigureScrollTarget() {
		if (localScrollTarget.value !== null) {
			changeScrollEvent(localScrollTarget.value);
			localScrollTarget.value = null;
		}
	}
	onBeforeUnmount(watch(() => props.noParentEvent, () => {
		if (localScrollTarget.value !== null) {
			unconfigureScrollTarget();
			configureScrollTarget();
		}
	}));
	return {
		localScrollTarget,
		unconfigureScrollTarget,
		changeScrollEvent
	};
}
//#endregion
//#region node_modules/quasar/src/utils/private.portal/portal.js
var portalProxyList = [];
function closePortalMenus(proxy, evt) {
	do {
		if (proxy.$options.name === "QMenu") {
			proxy.hide(evt);
			if (proxy.$props.separateClosePopup === true) return getParentProxy(proxy);
		} else if (proxy.__qPortal === true) {
			const parent = getParentProxy(proxy);
			if (parent?.$options.name === "QPopupProxy") {
				proxy.hide(evt);
				return parent;
			} else return proxy;
		}
		proxy = getParentProxy(proxy);
	} while (proxy !== void 0 && proxy !== null);
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-portal/use-portal.js
/**
* Noop internal component to ease testing
* of the teleported content.
*
* const wrapper = mount(QDialog, { ... })
* const teleportedWrapper = wrapper.findComponent({ name: 'QPortal' })
*/
var QPortal = createComponent({
	name: "QPortal",
	setup(_, { slots }) {
		return () => slots.default();
	}
});
function isOnGlobalDialog(vm) {
	vm = vm.parent;
	while (vm !== void 0 && vm !== null) {
		if (vm.type.name === "QGlobalDialog") return true;
		if (vm.type.name === "QDialog" || vm.type.name === "QMenu") return false;
		vm = vm.parent;
	}
	return false;
}
function usePortal(vm, innerRef, renderPortalContent, type) {
	const portalIsActive = ref(false);
	const portalIsAccessible = ref(false);
	let portalEl = null;
	const focusObj = {};
	const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
	function showPortal(isReady) {
		if (isReady === true) {
			removeFocusWaitFlag(focusObj);
			portalIsAccessible.value = true;
			return;
		}
		portalIsAccessible.value = false;
		if (portalIsActive.value === false) {
			if (onGlobalDialog === false && portalEl === null) portalEl = createGlobalNode(false, type);
			portalIsActive.value = true;
			portalProxyList.push(vm.proxy);
			addFocusWaitFlag(focusObj);
		}
	}
	function hidePortal(isReady) {
		portalIsAccessible.value = false;
		if (isReady !== true) return;
		removeFocusWaitFlag(focusObj);
		portalIsActive.value = false;
		const index = portalProxyList.indexOf(vm.proxy);
		if (index !== -1) portalProxyList.splice(index, 1);
		if (portalEl !== null) {
			removeGlobalNode(portalEl);
			portalEl = null;
		}
	}
	onUnmounted(() => {
		hidePortal(true);
	});
	vm.proxy.__qPortal = true;
	injectProp(vm.proxy, "contentEl", () => innerRef.value);
	return {
		showPortal,
		hidePortal,
		portalIsActive,
		portalIsAccessible,
		renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, h(QPortal, renderPortalContent))] : void 0
	};
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-transition/use-transition.js
var useTransitionProps = {
	transitionShow: {
		type: String,
		default: "fade"
	},
	transitionHide: {
		type: String,
		default: "fade"
	},
	transitionDuration: {
		type: [String, Number],
		default: 300
	}
};
function useTransition(props, defaultShowFn = () => {}, defaultHideFn = () => {}) {
	return {
		transitionProps: computed(() => {
			const show = `q-transition--${props.transitionShow || defaultShowFn()}`;
			const hide = `q-transition--${props.transitionHide || defaultHideFn()}`;
			return {
				appear: true,
				enterFromClass: `${show}-enter-from`,
				enterActiveClass: `${show}-enter-active`,
				enterToClass: `${show}-enter-to`,
				leaveFromClass: `${hide}-leave-from`,
				leaveActiveClass: `${hide}-leave-active`,
				leaveToClass: `${hide}-leave-to`
			};
		}),
		transitionStyle: computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
	};
}
//#endregion
//#region node_modules/quasar/src/composables/use-tick/use-tick.js
function useTick() {
	let tickFn;
	const vm = getCurrentInstance();
	function removeTick() {
		tickFn = void 0;
	}
	onDeactivated(removeTick);
	onBeforeUnmount(removeTick);
	return {
		removeTick,
		registerTick(fn) {
			tickFn = fn;
			nextTick(() => {
				if (tickFn === fn) {
					if (vmIsDestroyed(vm) === false) tickFn();
					tickFn = void 0;
				}
			});
		}
	};
}
//#endregion
//#region node_modules/quasar/src/utils/private.click-outside/click-outside.js
var timer = null;
var { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
	if (timer !== null) {
		clearTimeout(timer);
		timer = null;
	}
	const target = evt.target;
	if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) return;
	let portalIndex = portalProxyList.length - 1;
	while (portalIndex >= 0) {
		const proxy = portalProxyList[portalIndex].$;
		if (proxy.type.name === "QTooltip") {
			portalIndex--;
			continue;
		}
		if (proxy.type.name !== "QDialog") break;
		if (proxy.props.seamless !== true) return;
		portalIndex--;
	}
	for (let i = registeredList.length - 1; i >= 0; i--) {
		const state = registeredList[i];
		if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
			evt.qClickOutside = true;
			state.onClickOutside(evt);
		} else return;
	}
}
function addClickOutside(clickOutsideProps) {
	registeredList.push(clickOutsideProps);
	if (registeredList.length === 1) {
		document.addEventListener("mousedown", globalHandler, notPassiveCapture);
		document.addEventListener("touchstart", globalHandler, notPassiveCapture);
	}
}
function removeClickOutside(clickOutsideProps) {
	const index = registeredList.findIndex((h) => h === clickOutsideProps);
	if (index !== -1) {
		registeredList.splice(index, 1);
		if (registeredList.length === 0) {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			}
			document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
			document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
		}
	}
}
//#endregion
//#region node_modules/quasar/src/utils/private.position-engine/position-engine.js
var vpLeft, vpTop;
function validatePosition(pos) {
	const parts = pos.split(" ");
	if (parts.length !== 2) return false;
	if ([
		"top",
		"center",
		"bottom"
	].includes(parts[0]) !== true) {
		console.error("Anchor/Self position must start with one of top/center/bottom");
		return false;
	}
	if ([
		"left",
		"middle",
		"right",
		"start",
		"end"
	].includes(parts[1]) !== true) {
		console.error("Anchor/Self position must end with one of left/middle/right/start/end");
		return false;
	}
	return true;
}
function validateOffset(val) {
	if (!val) return true;
	if (val.length !== 2) return false;
	if (typeof val[0] !== "number" || typeof val[1] !== "number") return false;
	return true;
}
var horizontalPos = {
	"start#ltr": "left",
	"start#rtl": "right",
	"end#ltr": "right",
	"end#rtl": "left"
};
[
	"left",
	"middle",
	"right"
].forEach((pos) => {
	horizontalPos[`${pos}#ltr`] = pos;
	horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
	const parts = pos.split(" ");
	return {
		vertical: parts[0],
		horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
	};
}
function getAnchorProps(el, offset) {
	let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
	if (offset !== void 0) {
		top -= offset[1];
		left -= offset[0];
		bottom += offset[1];
		right += offset[0];
		width += offset[0];
		height += offset[1];
	}
	return {
		top,
		bottom,
		height,
		left,
		right,
		width,
		middle: left + (right - left) / 2,
		center: top + (bottom - top) / 2
	};
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
	let { top, left } = el.getBoundingClientRect();
	top += absoluteOffset.top;
	left += absoluteOffset.left;
	if (offset !== void 0) {
		top += offset[1];
		left += offset[0];
	}
	return {
		top,
		bottom: top + 1,
		height: 1,
		left,
		right: left + 1,
		width: 1,
		middle: left,
		center: top
	};
}
function getTargetProps(width, height) {
	return {
		top: 0,
		center: height / 2,
		bottom: height,
		left: 0,
		middle: width / 2,
		right: width
	};
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
	return {
		top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
		left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
	};
}
function setPosition(cfg, retryNumber = 0) {
	if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) return;
	if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
		setTimeout(() => {
			setPosition(cfg, retryNumber + 1);
		}, 10);
		return;
	}
	const { targetEl, offset, anchorEl, anchorOrigin, selfOrigin, absoluteOffset, fit, cover, maxHeight, maxWidth } = cfg;
	if (client.is.ios === true && window.visualViewport !== void 0) {
		const el = document.body.style;
		const { offsetLeft: left, offsetTop: top } = window.visualViewport;
		if (left !== vpLeft) {
			el.setProperty("--q-pe-left", left + "px");
			vpLeft = left;
		}
		if (top !== vpTop) {
			el.setProperty("--q-pe-top", top + "px");
			vpTop = top;
		}
	}
	const { scrollLeft, scrollTop } = targetEl;
	const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
	/**
	* We "reset" the critical CSS properties
	* so we can take an accurate measurement.
	*
	* Ensure that targetEl has a max-width & max-height
	* set in CSS and that the value does NOT exceeds 100vw/vh.
	* All users of the position-engine (currently QMenu & QTooltip)
	* have CSS for this.
	*/
	Object.assign(targetEl.style, {
		top: 0,
		left: 0,
		minWidth: null,
		minHeight: null,
		maxWidth,
		maxHeight,
		visibility: "visible"
	});
	const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
	const { elWidth, elHeight } = fit === true || cover === true ? {
		elWidth: Math.max(anchorProps.width, origElWidth),
		elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight
	} : {
		elWidth: origElWidth,
		elHeight: origElHeight
	};
	let elStyle = {
		maxWidth,
		maxHeight
	};
	if (fit === true || cover === true) {
		elStyle.minWidth = anchorProps.width + "px";
		if (cover === true) elStyle.minHeight = anchorProps.height + "px";
	}
	Object.assign(targetEl.style, elStyle);
	const targetProps = getTargetProps(elWidth, elHeight);
	let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
	if (absoluteOffset === void 0 || offset === void 0) applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
	else {
		const { top, left } = props;
		applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
		let hasChanged = false;
		if (props.top !== top) {
			hasChanged = true;
			const offsetY = 2 * offset[1];
			anchorProps.center = anchorProps.top -= offsetY;
			anchorProps.bottom -= offsetY + 2;
		}
		if (props.left !== left) {
			hasChanged = true;
			const offsetX = 2 * offset[0];
			anchorProps.middle = anchorProps.left -= offsetX;
			anchorProps.right -= offsetX + 2;
		}
		if (hasChanged === true) {
			props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
			applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
		}
	}
	elStyle = {
		top: props.top + "px",
		left: props.left + "px"
	};
	if (props.maxHeight !== void 0) {
		elStyle.maxHeight = props.maxHeight + "px";
		if (anchorProps.height > props.maxHeight) elStyle.minHeight = elStyle.maxHeight;
	}
	if (props.maxWidth !== void 0) {
		elStyle.maxWidth = props.maxWidth + "px";
		if (anchorProps.width > props.maxWidth) elStyle.minWidth = elStyle.maxWidth;
	}
	Object.assign(targetEl.style, elStyle);
	if (targetEl.scrollTop !== scrollTop) targetEl.scrollTop = scrollTop;
	if (targetEl.scrollLeft !== scrollLeft) targetEl.scrollLeft = scrollLeft;
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
	const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
	if (props.top < 0 || props.top + currentHeight > innerHeight) if (selfOrigin.vertical === "center") {
		props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
		props.maxHeight = Math.min(currentHeight, innerHeight);
	} else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
		const anchorY = Math.min(innerHeight, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top);
		props.maxHeight = Math.min(currentHeight, anchorY);
		props.top = Math.max(0, anchorY - currentHeight);
	} else {
		props.top = Math.max(0, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom);
		props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
	}
	if (props.left < 0 || props.left + currentWidth > innerWidth) {
		props.maxWidth = Math.min(currentWidth, innerWidth);
		if (selfOrigin.horizontal === "middle") props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
		else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
			const anchorX = Math.min(innerWidth, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left);
			props.maxWidth = Math.min(currentWidth, anchorX);
			props.left = Math.max(0, anchorX - props.maxWidth);
		} else {
			props.left = Math.max(0, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right);
			props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
		}
	}
}
//#endregion
//#region node_modules/quasar/src/utils/private.rtl/rtl.js
var rtlHasScrollBug = false;
{
	const scroller = document.createElement("div");
	scroller.setAttribute("dir", "rtl");
	Object.assign(scroller.style, {
		width: "1px",
		height: "1px",
		overflow: "auto"
	});
	const spacer = document.createElement("div");
	Object.assign(spacer.style, {
		width: "1000px",
		height: "1px"
	});
	document.body.appendChild(scroller);
	scroller.appendChild(spacer);
	scroller.scrollLeft = -1e3;
	rtlHasScrollBug = scroller.scrollLeft >= 0;
	scroller.remove();
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-refocus-target/use-refocus-target.js
function useRefocusTarget(props, rootRef) {
	const refocusRef = ref(null);
	const refocusTargetEl = computed(() => {
		if (props.disable === true) return null;
		return h("span", {
			ref: refocusRef,
			class: "no-outline",
			tabindex: -1
		});
	});
	function refocusTarget(e) {
		const root = rootRef.value;
		if (e?.qAvoidFocus === true) return;
		if (e?.type.indexOf("key") === 0) {
			if (document.activeElement !== root && root?.contains(document.activeElement) === true) root.focus();
		} else if (refocusRef.value !== null && (e === void 0 || root?.contains(e.target) === true)) refocusRef.value.focus();
	}
	return {
		refocusTargetEl,
		refocusTarget
	};
}
//#endregion
//#region node_modules/quasar/src/utils/private.option-sizes/option-sizes.js
var option_sizes_default = {
	xs: 30,
	sm: 35,
	md: 40,
	lg: 50,
	xl: 60
};
//#endregion
//#region node_modules/quasar/src/components/checkbox/use-checkbox.js
var useCheckboxProps = {
	...useDarkProps,
	...useSizeProps,
	...useFormProps,
	modelValue: {
		required: true,
		default: null
	},
	val: {},
	trueValue: { default: true },
	falseValue: { default: false },
	indeterminateValue: { default: null },
	checkedIcon: String,
	uncheckedIcon: String,
	indeterminateIcon: String,
	toggleOrder: {
		type: String,
		validator: (v) => v === "tf" || v === "ft"
	},
	toggleIndeterminate: Boolean,
	label: String,
	leftLabel: Boolean,
	color: String,
	keepColor: Boolean,
	dense: Boolean,
	disable: Boolean,
	tabindex: [String, Number]
};
var useCheckboxEmits = ["update:modelValue"];
function useCheckbox(type, getInner) {
	const { props, slots, emit, proxy } = getCurrentInstance();
	const { $q } = proxy;
	const isDark = useDark(props, $q);
	const rootRef = ref(null);
	const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
	const sizeStyle = useSize(props, option_sizes_default);
	const modelIsArray = computed(() => props.val !== void 0 && Array.isArray(props.modelValue));
	const index = computed(() => {
		const val = toRaw(props.val);
		return modelIsArray.value === true ? props.modelValue.findIndex((opt) => toRaw(opt) === val) : -1;
	});
	const isTrue = computed(() => modelIsArray.value === true ? index.value !== -1 : toRaw(props.modelValue) === toRaw(props.trueValue));
	const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : toRaw(props.modelValue) === toRaw(props.falseValue));
	const isIndeterminate = computed(() => isTrue.value === false && isFalse.value === false);
	const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
	const classes = computed(() => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props.dense === true ? ` q-${type}--dense` : "") + (props.leftLabel === true ? " reverse" : ""));
	const innerClass = computed(() => {
		return `q-${type}__inner relative-position non-selectable q-${type}__inner--${isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet"}${props.color !== void 0 && (props.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props.color}` : ""}`;
	});
	const injectFormInput = useFormInject(computed(() => {
		const prop = { type: "checkbox" };
		if (props.name !== void 0) Object.assign(prop, {
			".checked": isTrue.value,
			"^checked": isTrue.value === true ? "checked" : void 0,
			name: props.name,
			value: modelIsArray.value === true ? props.val : props.trueValue
		});
		return prop;
	}));
	const attributes = computed(() => {
		const attrs = {
			tabindex: tabindex.value,
			role: type === "toggle" ? "switch" : "checkbox",
			"aria-label": props.label,
			"aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
		};
		if (props.disable === true) attrs["aria-disabled"] = "true";
		return attrs;
	});
	function onClick(e) {
		if (e !== void 0) {
			stopAndPrevent(e);
			refocusTarget(e);
		}
		if (props.disable !== true) emit("update:modelValue", getNextValue(), e);
	}
	function getNextValue() {
		if (modelIsArray.value === true) {
			if (isTrue.value === true) {
				const val = props.modelValue.slice();
				val.splice(index.value, 1);
				return val;
			}
			return props.modelValue.concat([props.val]);
		}
		if (isTrue.value === true) {
			if (props.toggleOrder !== "ft" || props.toggleIndeterminate === false) return props.falseValue;
		} else if (isFalse.value === true) {
			if (props.toggleOrder === "ft" || props.toggleIndeterminate === false) return props.trueValue;
		} else return props.toggleOrder !== "ft" ? props.trueValue : props.falseValue;
		return props.indeterminateValue;
	}
	function onKeydown(e) {
		if (e.keyCode === 13 || e.keyCode === 32) stopAndPrevent(e);
	}
	function onKeyup(e) {
		if (e.keyCode === 13 || e.keyCode === 32) onClick(e);
	}
	const getInnerContent = getInner(isTrue, isIndeterminate);
	Object.assign(proxy, { toggle: onClick });
	return () => {
		const inner = getInnerContent();
		if (props.disable !== true) injectFormInput(inner, "unshift", ` q-${type}__native absolute q-ma-none q-pa-none`);
		const child = [h("div", {
			class: innerClass.value,
			style: sizeStyle.value,
			"aria-hidden": "true"
		}, inner)];
		if (refocusTargetEl.value !== null) child.push(refocusTargetEl.value);
		const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
		if (label !== void 0) child.push(h("div", { class: `q-${type}__label q-anchor--skip` }, label));
		return h("div", {
			ref: rootRef,
			class: classes.value,
			...attributes.value,
			onClick,
			onKeydown,
			onKeyup
		}, child);
	};
}
//#endregion
export { useAnchor as _, parsePosition as a, validatePosition as c, useTick as d, useTransition as f, useScrollTarget as g, closePortalMenus as h, rtlHasScrollBug as i, addClickOutside as l, usePortal as m, useCheckboxEmits as n, setPosition as o, useTransitionProps as p, useCheckboxProps as r, validateOffset as s, useCheckbox as t, removeClickOutside as u, useAnchorProps as v, useAnchorStaticProps as y };
