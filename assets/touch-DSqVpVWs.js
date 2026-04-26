import { A as onMounted, D as onBeforeUnmount, Q as ref, v as getCurrentInstance, w as nextTick, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { r as isRuntimeSsrPreHydration } from "./Platform-Hxr0V5Kb.js";
import { o as createComponent } from "./render-AG-3FfQy.js";
import { a as listenOpts, o as noop } from "./event-JAmtdkur.js";
//#region node_modules/quasar/src/composables/use-hydration/use-hydration.js
function useHydration() {
	const isHydrated = ref(!isRuntimeSsrPreHydration.value);
	if (isHydrated.value === false) onMounted(() => {
		isHydrated.value = true;
	});
	return { isHydrated };
}
//#endregion
//#region node_modules/quasar/src/components/resize-observer/QResizeObserver.js
var hasObserver = typeof ResizeObserver !== "undefined";
var resizeProps = hasObserver === true ? {} : {
	style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
	url: "about:blank"
};
var QResizeObserver_default = createComponent({
	name: "QResizeObserver",
	props: { debounce: {
		type: [String, Number],
		default: 100
	} },
	emits: ["resize"],
	setup(props, { emit }) {
		let timer = null, targetEl, size = {
			width: -1,
			height: -1
		};
		function trigger(immediately) {
			if (immediately === true || props.debounce === 0 || props.debounce === "0") emitEvent();
			else if (timer === null) timer = setTimeout(emitEvent, props.debounce);
		}
		function emitEvent() {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			}
			if (targetEl) {
				const { offsetWidth: width, offsetHeight: height } = targetEl;
				if (width !== size.width || height !== size.height) {
					size = {
						width,
						height
					};
					emit("resize", size);
				}
			}
		}
		const { proxy } = getCurrentInstance();
		proxy.trigger = trigger;
		if (hasObserver === true) {
			let observer;
			const init = (stop) => {
				targetEl = proxy.$el.parentNode;
				if (targetEl) {
					observer = new ResizeObserver(trigger);
					observer.observe(targetEl);
					emitEvent();
				} else if (stop !== true) nextTick(() => {
					init(true);
				});
			};
			onMounted(() => {
				init();
			});
			onBeforeUnmount(() => {
				if (timer !== null) clearTimeout(timer);
				if (observer !== void 0) {
					if (observer.disconnect !== void 0) observer.disconnect();
					else if (targetEl) observer.unobserve(targetEl);
				}
			});
			return noop;
		} else {
			const { isHydrated } = useHydration();
			let curDocView;
			function cleanup() {
				if (timer !== null) {
					clearTimeout(timer);
					timer = null;
				}
				if (curDocView !== void 0) {
					if (curDocView.removeEventListener !== void 0) curDocView.removeEventListener("resize", trigger, listenOpts.passive);
					curDocView = void 0;
				}
			}
			function onObjLoad() {
				cleanup();
				if (targetEl?.contentDocument) {
					curDocView = targetEl.contentDocument.defaultView;
					curDocView.addEventListener("resize", trigger, listenOpts.passive);
					emitEvent();
				}
			}
			onMounted(() => {
				nextTick(() => {
					targetEl = proxy.$el;
					if (targetEl) onObjLoad();
				});
			});
			onBeforeUnmount(cleanup);
			return () => {
				if (isHydrated.value === true) return h("object", {
					class: "q--avoid-card-border",
					style: resizeProps.style,
					tabindex: -1,
					type: "text/html",
					data: resizeProps.url,
					"aria-hidden": "true",
					onLoad: onObjLoad
				});
			};
		}
	}
});
//#endregion
//#region node_modules/quasar/src/utils/private.touch/touch.js
var modifiersAll = {
	left: true,
	right: true,
	up: true,
	down: true,
	horizontal: true,
	vertical: true
};
var directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
	const dir = {};
	for (const direction of directionList) if (mod[direction] === true) dir[direction] = true;
	if (Object.keys(dir).length === 0) return modifiersAll;
	if (dir.horizontal === true) dir.left = dir.right = true;
	else if (dir.left === true && dir.right === true) dir.horizontal = true;
	if (dir.vertical === true) dir.up = dir.down = true;
	else if (dir.up === true && dir.down === true) dir.vertical = true;
	if (dir.horizontal === true && dir.vertical === true) dir.all = true;
	return dir;
}
var avoidNodeNamesList = ["INPUT", "TEXTAREA"];
function shouldStart(evt, ctx) {
	return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && avoidNodeNamesList.includes(evt.target.nodeName.toUpperCase()) === false && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
//#endregion
export { shouldStart as n, QResizeObserver_default as r, getModifierDirections as t };
