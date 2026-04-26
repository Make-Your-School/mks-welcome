import { A as onMounted, D as onBeforeUnmount, F as renderList, L as resolveComponent, N as openBlock, P as provide, Q as ref, U as withCtx, V as watch, W as withDirectives, Z as reactive, a as Fragment, d as createBlock, g as createVNode, h as createTextVNode, j as onUnmounted, l as computed, p as createElementBlock, rt as unref, st as toDisplayString, u as createBaseVNode, v as getCurrentInstance, w as nextTick, x as inject, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { n as client, r as isRuntimeSsrPreHydration } from "./Platform-Hxr0V5Kb.js";
import { i as hSlot, n as hMergeSlot, o as createComponent, s as createDirective, t as hDir } from "./render-AG-3FfQy.js";
import { a as listenOpts, c as prevent, d as stopAndPrevent, i as leftClick, l as preventDraggable, n as cleanEvt, o as noop, s as position, t as addEvt, u as stop } from "./event-JAmtdkur.js";
import { t as QIcon_default } from "./QIcon-BIe_yU5L.js";
import { i as pageContainerKey, r as layoutKey, t as emptyRenderFn } from "./symbols-CTfU4lpL.js";
import { t as childrenCommon } from "./routes-sRIX3Obv.js";
import { t as QBtn_default } from "./QBtn-DZW7z61w.js";
import { t as useQuasar } from "./use-quasar-DjkpUp09.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Dl-_tC7C.js";
import { n as clearSelection, t as useTimeout } from "./use-timeout-B36y8WMi.js";
import { a as getScrollTarget, d as useModelToggle, f as useModelToggleEmits, i as getHorizontalScrollPosition, l as scrollTargetProp, n as QItemSection_default, o as getScrollbarWidth, p as useModelToggleProps, r as QItem_default, s as getVerticalScrollPosition, t as QItemLabel_default } from "./QItemLabel-D9M7YRL7.js";
import { n as shouldStart, r as QResizeObserver_default, t as getModifierDirections } from "./touch-DSqVpVWs.js";
import { n as useDarkProps, t as useDark } from "./use-dark-D7HPSSY-.js";
import { t as QList_default } from "./QList-DdZIs395.js";
import { i as useHistory, r as usePreventScroll, t as between } from "./format-DLB5G-Pz.js";
//#region node_modules/quasar/src/directives/touch-pan/TouchPan.js
function getChanges(evt, ctx, isFinal) {
	const pos = position(evt);
	let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
	const direction = ctx.direction;
	if (direction.horizontal === true && direction.vertical !== true) dir = distX < 0 ? "left" : "right";
	else if (direction.horizontal !== true && direction.vertical === true) dir = distY < 0 ? "up" : "down";
	else if (direction.up === true && distY < 0) {
		dir = "up";
		if (absX > absY) {
			if (direction.left === true && distX < 0) dir = "left";
			else if (direction.right === true && distX > 0) dir = "right";
		}
	} else if (direction.down === true && distY > 0) {
		dir = "down";
		if (absX > absY) {
			if (direction.left === true && distX < 0) dir = "left";
			else if (direction.right === true && distX > 0) dir = "right";
		}
	} else if (direction.left === true && distX < 0) {
		dir = "left";
		if (absX < absY) {
			if (direction.up === true && distY < 0) dir = "up";
			else if (direction.down === true && distY > 0) dir = "down";
		}
	} else if (direction.right === true && distX > 0) {
		dir = "right";
		if (absX < absY) {
			if (direction.up === true && distY < 0) dir = "up";
			else if (direction.down === true && distY > 0) dir = "down";
		}
	}
	let synthetic = false;
	if (dir === void 0 && isFinal === false) {
		if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) return {};
		dir = ctx.event.lastDir;
		synthetic = true;
		if (dir === "left" || dir === "right") {
			pos.left -= distX;
			absX = 0;
			distX = 0;
		} else {
			pos.top -= distY;
			absY = 0;
			distY = 0;
		}
	}
	return {
		synthetic,
		payload: {
			evt,
			touch: ctx.event.mouse !== true,
			mouse: ctx.event.mouse === true,
			position: pos,
			direction: dir,
			isFirst: ctx.event.isFirst,
			isFinal: isFinal === true,
			duration: Date.now() - ctx.event.time,
			distance: {
				x: absX,
				y: absY
			},
			offset: {
				x: distX,
				y: distY
			},
			delta: {
				x: pos.left - ctx.event.lastX,
				y: pos.top - ctx.event.lastY
			}
		}
	};
}
var uid = 0;
var TouchPan_default = createDirective({
	name: "touch-pan",
	beforeMount(el, { value, modifiers }) {
		if (modifiers.mouse !== true && client.has.touch !== true) return;
		function handleEvent(evt, mouseEvent) {
			if (modifiers.mouse === true && mouseEvent === true) stopAndPrevent(evt);
			else {
				if (modifiers.stop === true) stop(evt);
				if (modifiers.prevent === true) prevent(evt);
			}
		}
		const ctx = {
			uid: "qvtp_" + uid++,
			handler: value,
			modifiers,
			direction: getModifierDirections(modifiers),
			noop,
			mouseStart(evt) {
				if (shouldStart(evt, ctx) && leftClick(evt)) {
					addEvt(ctx, "temp", [[
						document,
						"mousemove",
						"move",
						"notPassiveCapture"
					], [
						document,
						"mouseup",
						"end",
						"passiveCapture"
					]]);
					ctx.start(evt, true);
				}
			},
			touchStart(evt) {
				if (shouldStart(evt, ctx)) {
					const target = evt.target;
					addEvt(ctx, "temp", [
						[
							target,
							"touchmove",
							"move",
							"notPassiveCapture"
						],
						[
							target,
							"touchcancel",
							"end",
							"passiveCapture"
						],
						[
							target,
							"touchend",
							"end",
							"passiveCapture"
						]
					]);
					ctx.start(evt);
				}
			},
			start(evt, mouseEvent) {
				if (client.is.firefox === true) preventDraggable(el, true);
				ctx.lastEvt = evt;
				if (mouseEvent === true || modifiers.stop === true) {
					if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
						const clone = evt.type.indexOf("mouse") !== -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
						if (evt.defaultPrevented === true) prevent(clone);
						if (evt.cancelBubble === true) stop(clone);
						Object.assign(clone, {
							qKeyEvent: evt.qKeyEvent,
							qClickOutside: evt.qClickOutside,
							qAnchorHandled: evt.qAnchorHandled,
							qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
						});
						ctx.initialEvent = {
							target: evt.target,
							event: clone
						};
					}
					stop(evt);
				}
				const { left, top } = position(evt);
				ctx.event = {
					x: left,
					y: top,
					time: Date.now(),
					mouse: mouseEvent === true,
					detected: false,
					isFirst: true,
					isFinal: false,
					lastX: left,
					lastY: top
				};
			},
			move(evt) {
				if (ctx.event === void 0) return;
				const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
				if (distX === 0 && distY === 0) return;
				ctx.lastEvt = evt;
				const isMouseEvt = ctx.event.mouse === true;
				const start = () => {
					handleEvent(evt, isMouseEvt);
					let cursor;
					if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
						cursor = document.documentElement.style.cursor || "";
						document.documentElement.style.cursor = "grabbing";
					}
					if (isMouseEvt === true) document.body.classList.add("no-pointer-events--children");
					document.body.classList.add("non-selectable");
					clearSelection();
					ctx.styleCleanup = (withDelayedFn) => {
						ctx.styleCleanup = void 0;
						if (cursor !== void 0) document.documentElement.style.cursor = cursor;
						document.body.classList.remove("non-selectable");
						if (isMouseEvt === true) {
							const remove = () => {
								document.body.classList.remove("no-pointer-events--children");
							};
							if (withDelayedFn !== void 0) setTimeout(() => {
								remove();
								withDelayedFn();
							}, 50);
							else remove();
						} else if (withDelayedFn !== void 0) withDelayedFn();
					};
				};
				if (ctx.event.detected === true) {
					if (ctx.event.isFirst !== true) handleEvent(evt, ctx.event.mouse);
					const { payload, synthetic } = getChanges(evt, ctx, false);
					if (payload !== void 0) if (ctx.handler(payload) === false) ctx.end(evt);
					else {
						if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) start();
						ctx.event.lastX = payload.position.left;
						ctx.event.lastY = payload.position.top;
						ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
						ctx.event.isFirst = false;
					}
					return;
				}
				if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
					start();
					ctx.event.detected = true;
					ctx.move(evt);
					return;
				}
				const absX = Math.abs(distX), absY = Math.abs(distY);
				if (absX !== absY) if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
					ctx.event.detected = true;
					ctx.move(evt);
				} else ctx.end(evt, true);
			},
			end(evt, abort) {
				if (ctx.event === void 0) return;
				cleanEvt(ctx, "temp");
				if (client.is.firefox === true) preventDraggable(el, false);
				if (abort === true) {
					ctx.styleCleanup?.();
					if (ctx.event.detected !== true && ctx.initialEvent !== void 0) ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
				} else if (ctx.event.detected === true) {
					if (ctx.event.isFirst === true) ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
					const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
					const fn = () => {
						ctx.handler(payload);
					};
					if (ctx.styleCleanup !== void 0) ctx.styleCleanup(fn);
					else fn();
				}
				ctx.event = void 0;
				ctx.initialEvent = void 0;
				ctx.lastEvt = void 0;
			}
		};
		el.__qtouchpan = ctx;
		if (modifiers.mouse === true) addEvt(ctx, "main", [[
			el,
			"mousedown",
			"mouseStart",
			`passive${modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : ""}`
		]]);
		if (client.has.touch === true) addEvt(ctx, "main", [[
			el,
			"touchstart",
			"touchStart",
			`passive${modifiers.capture === true ? "Capture" : ""}`
		], [
			el,
			"touchmove",
			"noop",
			"notPassiveCapture"
		]]);
	},
	updated(el, bindings) {
		const ctx = el.__qtouchpan;
		if (ctx !== void 0) {
			if (bindings.oldValue !== bindings.value) {
				if (typeof value !== "function") ctx.end();
				ctx.handler = bindings.value;
			}
			ctx.direction = getModifierDirections(bindings.modifiers);
		}
	},
	beforeUnmount(el) {
		const ctx = el.__qtouchpan;
		if (ctx !== void 0) {
			if (ctx.event !== void 0) ctx.end();
			cleanEvt(ctx, "main");
			cleanEvt(ctx, "temp");
			if (client.is.firefox === true) preventDraggable(el, false);
			ctx.styleCleanup?.();
			delete el.__qtouchpan;
		}
	}
});
//#endregion
//#region node_modules/quasar/src/components/drawer/QDrawer.js
var duration = 150;
var QDrawer_default = createComponent({
	name: "QDrawer",
	inheritAttrs: false,
	props: {
		...useModelToggleProps,
		...useDarkProps,
		side: {
			type: String,
			default: "left",
			validator: (v) => ["left", "right"].includes(v)
		},
		width: {
			type: Number,
			default: 300
		},
		mini: Boolean,
		miniToOverlay: Boolean,
		miniWidth: {
			type: Number,
			default: 57
		},
		noMiniAnimation: Boolean,
		breakpoint: {
			type: Number,
			default: 1023
		},
		showIfAbove: Boolean,
		behavior: {
			type: String,
			validator: (v) => [
				"default",
				"desktop",
				"mobile"
			].includes(v),
			default: "default"
		},
		bordered: Boolean,
		elevated: Boolean,
		overlay: Boolean,
		persistent: Boolean,
		noSwipeOpen: Boolean,
		noSwipeClose: Boolean,
		noSwipeBackdrop: Boolean
	},
	emits: [
		...useModelToggleEmits,
		"onLayout",
		"miniState"
	],
	setup(props, { slots, emit, attrs }) {
		const vm = getCurrentInstance();
		const { proxy: { $q } } = vm;
		const isDark = useDark(props, $q);
		const { preventBodyScroll } = usePreventScroll();
		const { registerTimeout, removeTimeout } = useTimeout();
		const $layout = inject(layoutKey, emptyRenderFn);
		if ($layout === emptyRenderFn) {
			console.error("QDrawer needs to be child of QLayout");
			return emptyRenderFn;
		}
		let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;
		const belowBreakpoint = ref(props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
		const isMini = computed(() => props.mini === true && belowBreakpoint.value !== true);
		const size = computed(() => isMini.value === true ? props.miniWidth : props.width);
		const showing = ref(props.showIfAbove === true && belowBreakpoint.value === false ? true : props.modelValue === true);
		const hideOnRouteChange = computed(() => props.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true));
		function handleShow(evt, noEvent) {
			addToHistory();
			if (evt !== false) $layout.animate();
			applyPosition(0);
			if (belowBreakpoint.value === true) {
				const otherInstance = $layout.instances[otherSide.value];
				if (otherInstance?.belowBreakpoint === true) otherInstance.hide(false);
				applyBackdrop(1);
				if ($layout.isContainer.value !== true) preventBodyScroll(true);
			} else {
				applyBackdrop(0);
				if (evt !== false) setScrollable(false);
			}
			registerTimeout(() => {
				if (evt !== false) setScrollable(true);
				if (noEvent !== true) emit("show", evt);
			}, duration);
		}
		function handleHide(evt, noEvent) {
			removeFromHistory();
			if (evt !== false) $layout.animate();
			applyBackdrop(0);
			applyPosition(stateDirection.value * size.value);
			cleanup();
			if (noEvent !== true) registerTimeout(() => {
				emit("hide", evt);
			}, duration);
			else removeTimeout();
		}
		const { show, hide } = useModelToggle({
			showing,
			hideOnRouteChange,
			handleShow,
			handleHide
		});
		const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
		const instance = {
			belowBreakpoint,
			hide
		};
		const rightSide = computed(() => props.side === "right");
		const stateDirection = computed(() => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1));
		const flagBackdropBg = ref(0);
		const flagPanning = ref(false);
		const flagMiniAnimate = ref(false);
		const flagContentPosition = ref(size.value * stateDirection.value);
		const otherSide = computed(() => rightSide.value === true ? "left" : "right");
		const offset = computed(() => showing.value === true && belowBreakpoint.value === false && props.overlay === false ? props.miniToOverlay === true ? props.miniWidth : size.value : 0);
		const fixed = computed(() => props.overlay === true || props.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") !== -1 || $q.platform.is.ios === true && $layout.isContainer.value === true);
		const onLayout = computed(() => props.overlay === false && showing.value === true && belowBreakpoint.value === false);
		const onScreenOverlay = computed(() => props.overlay === true && showing.value === true && belowBreakpoint.value === false);
		const backdropClass = computed(() => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : ""));
		const backdropStyle = computed(() => ({ backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * .4})` }));
		const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
		const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
		const aboveStyle = computed(() => {
			const css = {};
			if ($layout.header.space === true && headerSlot.value === false) {
				if (fixed.value === true) css.top = `${$layout.header.offset}px`;
				else if ($layout.header.space === true) css.top = `${$layout.header.size}px`;
			}
			if ($layout.footer.space === true && footerSlot.value === false) {
				if (fixed.value === true) css.bottom = `${$layout.footer.offset}px`;
				else if ($layout.footer.space === true) css.bottom = `${$layout.footer.size}px`;
			}
			return css;
		});
		const style = computed(() => {
			const acc = {
				width: `${size.value}px`,
				transform: `translateX(${flagContentPosition.value}px)`
			};
			return belowBreakpoint.value === true ? acc : Object.assign(acc, aboveStyle.value);
		});
		const contentClass = computed(() => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto"));
		const classes = computed(() => `q-drawer q-drawer--${props.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props.overlay === true || props.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : "")));
		const openDirective = computed(() => {
			return [[
				TouchPan_default,
				onOpenPan,
				void 0,
				{
					[$q.lang.rtl === true ? props.side : otherSide.value]: true,
					mouse: true
				}
			]];
		});
		const contentCloseDirective = computed(() => {
			return [[
				TouchPan_default,
				onClosePan,
				void 0,
				{
					[$q.lang.rtl === true ? otherSide.value : props.side]: true,
					mouse: true
				}
			]];
		});
		const backdropCloseDirective = computed(() => {
			return [[
				TouchPan_default,
				onClosePan,
				void 0,
				{
					[$q.lang.rtl === true ? otherSide.value : props.side]: true,
					mouse: true,
					mouseAllDir: true
				}
			]];
		});
		function updateBelowBreakpoint() {
			updateLocal(belowBreakpoint, props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
		}
		watch(belowBreakpoint, (val) => {
			if (val === true) {
				lastDesktopState = showing.value;
				if (showing.value === true) hide(false);
			} else if (props.overlay === false && props.behavior !== "mobile" && lastDesktopState !== false) if (showing.value === true) {
				applyPosition(0);
				applyBackdrop(0);
				cleanup();
			} else show(false);
		});
		watch(() => props.side, (newSide, oldSide) => {
			if ($layout.instances[oldSide] === instance) {
				$layout.instances[oldSide] = void 0;
				$layout[oldSide].space = false;
				$layout[oldSide].offset = 0;
			}
			$layout.instances[newSide] = instance;
			$layout[newSide].size = size.value;
			$layout[newSide].space = onLayout.value;
			$layout[newSide].offset = offset.value;
		});
		watch($layout.totalWidth, () => {
			if ($layout.isContainer.value === true || document.qScrollPrevented !== true) updateBelowBreakpoint();
		});
		watch(() => props.behavior + props.breakpoint, updateBelowBreakpoint);
		watch($layout.isContainer, (val) => {
			if (showing.value === true) preventBodyScroll(val !== true);
			if (val === true) updateBelowBreakpoint();
		});
		watch($layout.scrollbarWidth, () => {
			applyPosition(showing.value === true ? 0 : void 0);
		});
		watch(offset, (val) => {
			updateLayout("offset", val);
		});
		watch(onLayout, (val) => {
			emit("onLayout", val);
			updateLayout("space", val);
		});
		watch(rightSide, () => {
			applyPosition();
		});
		watch(size, (val) => {
			applyPosition();
			updateSizeOnLayout(props.miniToOverlay, val);
		});
		watch(() => props.miniToOverlay, (val) => {
			updateSizeOnLayout(val, size.value);
		});
		watch(() => $q.lang.rtl, () => {
			applyPosition();
		});
		watch(() => props.mini, () => {
			if (props.noMiniAnimation) return;
			if (props.modelValue === true) {
				animateMini();
				$layout.animate();
			}
		});
		watch(isMini, (val) => {
			emit("miniState", val);
		});
		function applyPosition(position) {
			if (position === void 0) nextTick(() => {
				position = showing.value === true ? 0 : size.value;
				applyPosition(stateDirection.value * position);
			});
			else {
				if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position) === size.value)) position += stateDirection.value * $layout.scrollbarWidth.value;
				flagContentPosition.value = position;
			}
		}
		function applyBackdrop(x) {
			flagBackdropBg.value = x;
		}
		function setScrollable(v) {
			const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
			if (action !== "") document.body.classList[action]("q-body--drawer-toggle");
		}
		function animateMini() {
			if (timerMini !== null) clearTimeout(timerMini);
			if (vm.proxy && vm.proxy.$el) vm.proxy.$el.classList.add("q-drawer--mini-animate");
			flagMiniAnimate.value = true;
			timerMini = setTimeout(() => {
				timerMini = null;
				flagMiniAnimate.value = false;
				vm?.proxy?.$el?.classList.remove("q-drawer--mini-animate");
			}, 150);
		}
		function onOpenPan(evt) {
			if (showing.value !== false) return;
			const width = size.value, position = between(evt.distance.x, 0, width);
			if (evt.isFinal === true) {
				if (position >= Math.min(75, width) === true) show();
				else {
					$layout.animate();
					applyBackdrop(0);
					applyPosition(stateDirection.value * width);
				}
				flagPanning.value = false;
				return;
			}
			applyPosition(($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width - position, 0) : Math.min(0, position - width));
			applyBackdrop(between(position / width, 0, 1));
			if (evt.isFirst === true) flagPanning.value = true;
		}
		function onClosePan(evt) {
			if (showing.value !== true) return;
			const width = size.value, dir = evt.direction === props.side, position = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width) : 0;
			if (evt.isFinal === true) {
				if (Math.abs(position) < Math.min(75, width) === true) {
					$layout.animate();
					applyBackdrop(1);
					applyPosition(0);
				} else hide();
				flagPanning.value = false;
				return;
			}
			applyPosition(stateDirection.value * position);
			applyBackdrop(between(1 - position / width, 0, 1));
			if (evt.isFirst === true) flagPanning.value = true;
		}
		function cleanup() {
			preventBodyScroll(false);
			setScrollable(true);
		}
		function updateLayout(prop, val) {
			$layout.update(props.side, prop, val);
		}
		function updateLocal(prop, val) {
			if (prop.value !== val) prop.value = val;
		}
		function updateSizeOnLayout(miniToOverlay, newSize) {
			updateLayout("size", miniToOverlay === true ? props.miniWidth : newSize);
		}
		$layout.instances[props.side] = instance;
		updateSizeOnLayout(props.miniToOverlay, size.value);
		updateLayout("space", onLayout.value);
		updateLayout("offset", offset.value);
		if (props.showIfAbove === true && props.modelValue !== true && showing.value === true && props["onUpdate:modelValue"] !== void 0) emit("update:modelValue", true);
		onMounted(() => {
			emit("onLayout", onLayout.value);
			emit("miniState", isMini.value);
			lastDesktopState = props.showIfAbove === true;
			const fn = () => {
				(showing.value === true ? handleShow : handleHide)(false, true);
			};
			if ($layout.totalWidth.value !== 0) {
				nextTick(fn);
				return;
			}
			layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
				layoutTotalWidthWatcher();
				layoutTotalWidthWatcher = void 0;
				if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) show(false);
				else fn();
			});
		});
		onBeforeUnmount(() => {
			layoutTotalWidthWatcher?.();
			if (timerMini !== null) {
				clearTimeout(timerMini);
				timerMini = null;
			}
			if (showing.value === true) cleanup();
			if ($layout.instances[props.side] === instance) {
				$layout.instances[props.side] = void 0;
				updateLayout("size", 0);
				updateLayout("offset", 0);
				updateLayout("space", false);
			}
		});
		return () => {
			const child = [];
			if (belowBreakpoint.value === true) {
				if (props.noSwipeOpen === false) child.push(withDirectives(h("div", {
					key: "open",
					class: `q-drawer__opener fixed-${props.side}`,
					"aria-hidden": "true"
				}), openDirective.value));
				child.push(hDir("div", {
					ref: "backdrop",
					class: backdropClass.value,
					style: backdropStyle.value,
					"aria-hidden": "true",
					onClick: hide
				}, void 0, "backdrop", props.noSwipeBackdrop !== true && showing.value === true, () => backdropCloseDirective.value));
			}
			const mini = isMini.value === true && slots.mini !== void 0;
			const content = [h("div", {
				...attrs,
				key: String(mini),
				class: [contentClass.value, attrs.class]
			}, mini === true ? slots.mini() : hSlot(slots.default))];
			if (props.elevated === true && showing.value === true) content.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" }));
			child.push(hDir("aside", {
				ref: "content",
				class: classes.value,
				style: style.value
			}, content, "contentclose", props.noSwipeClose !== true && belowBreakpoint.value === true, () => contentCloseDirective.value));
			return h("div", { class: "q-drawer-container" }, child);
		};
	}
});
//#endregion
//#region node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer_default = createComponent({
	name: "QPageContainer",
	setup(_, { slots }) {
		const { proxy: { $q } } = getCurrentInstance();
		const $layout = inject(layoutKey, emptyRenderFn);
		if ($layout === emptyRenderFn) {
			console.error("QPageContainer needs to be child of QLayout");
			return emptyRenderFn;
		}
		provide(pageContainerKey, true);
		const style = computed(() => {
			const css = {};
			if ($layout.header.space === true) css.paddingTop = `${$layout.header.size}px`;
			if ($layout.right.space === true) css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
			if ($layout.footer.space === true) css.paddingBottom = `${$layout.footer.size}px`;
			if ($layout.left.space === true) css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
			return css;
		});
		return () => h("div", {
			class: "q-page-container",
			style: style.value
		}, hSlot(slots.default));
	}
});
//#endregion
//#region node_modules/quasar/src/components/scroll-observer/QScrollObserver.js
var { passive } = listenOpts;
var axisValues = [
	"both",
	"horizontal",
	"vertical"
];
var QScrollObserver_default = createComponent({
	name: "QScrollObserver",
	props: {
		axis: {
			type: String,
			validator: (v) => axisValues.includes(v),
			default: "vertical"
		},
		debounce: [String, Number],
		scrollTarget: scrollTargetProp
	},
	emits: ["scroll"],
	setup(props, { emit }) {
		const scroll = {
			position: {
				top: 0,
				left: 0
			},
			direction: "down",
			directionChanged: false,
			delta: {
				top: 0,
				left: 0
			},
			inflectionPoint: {
				top: 0,
				left: 0
			}
		};
		let clearTimer = null, localScrollTarget, parentEl;
		watch(() => props.scrollTarget, () => {
			unconfigureScrollTarget();
			configureScrollTarget();
		});
		function emitEvent() {
			clearTimer?.();
			const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
			const left = getHorizontalScrollPosition(localScrollTarget);
			const delta = {
				top: top - scroll.position.top,
				left: left - scroll.position.left
			};
			if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) return;
			const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
			scroll.position = {
				top,
				left
			};
			scroll.directionChanged = scroll.direction !== curDir;
			scroll.delta = delta;
			if (scroll.directionChanged === true) {
				scroll.direction = curDir;
				scroll.inflectionPoint = scroll.position;
			}
			emit("scroll", { ...scroll });
		}
		function configureScrollTarget() {
			localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
			localScrollTarget.addEventListener("scroll", trigger, passive);
			trigger(true);
		}
		function unconfigureScrollTarget() {
			if (localScrollTarget !== void 0) {
				localScrollTarget.removeEventListener("scroll", trigger, passive);
				localScrollTarget = void 0;
			}
		}
		function trigger(immediately) {
			if (immediately === true || props.debounce === 0 || props.debounce === "0") emitEvent();
			else if (clearTimer === null) {
				const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
				clearTimer = () => {
					fn(timer);
					clearTimer = null;
				};
			}
		}
		const { proxy } = getCurrentInstance();
		watch(() => proxy.$q.lang.rtl, emitEvent);
		onMounted(() => {
			parentEl = proxy.$el.parentNode;
			configureScrollTarget();
		});
		onBeforeUnmount(() => {
			clearTimer?.();
			unconfigureScrollTarget();
		});
		Object.assign(proxy, {
			trigger,
			getPosition: () => scroll
		});
		return noop;
	}
});
//#endregion
//#region node_modules/quasar/src/components/layout/QLayout.js
var QLayout_default = createComponent({
	name: "QLayout",
	props: {
		container: Boolean,
		view: {
			type: String,
			default: "hhh lpr fff",
			validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
		},
		onScroll: Function,
		onScrollHeight: Function,
		onResize: Function
	},
	setup(props, { slots, emit }) {
		const { proxy: { $q } } = getCurrentInstance();
		const rootRef = ref(null);
		const height = ref($q.screen.height);
		const width = ref(props.container === true ? 0 : $q.screen.width);
		const scroll = ref({
			position: 0,
			direction: "down",
			inflectionPoint: 0
		});
		const containerHeight = ref(0);
		const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
		const classes = computed(() => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard"));
		const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
		const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
		const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
			[$q.lang.rtl === true ? "right" : "left"]: 0,
			[$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
			width: `calc(100% + ${scrollbarWidth.value}px)`
		} : null);
		function onPageScroll(data) {
			if (props.container === true || document.qScrollPrevented !== true) {
				const info = {
					position: data.position.top,
					direction: data.direction,
					directionChanged: data.directionChanged,
					inflectionPoint: data.inflectionPoint.top,
					delta: data.delta.top
				};
				scroll.value = info;
				if (props.onScroll !== void 0) emit("scroll", info);
			}
		}
		function onPageResize(data) {
			const { height: newHeight, width: newWidth } = data;
			let resized = false;
			if (height.value !== newHeight) {
				resized = true;
				height.value = newHeight;
				if (props.onScrollHeight !== void 0) emit("scrollHeight", newHeight);
				updateScrollbarWidth();
			}
			if (width.value !== newWidth) {
				resized = true;
				width.value = newWidth;
			}
			if (resized === true && props.onResize !== void 0) emit("resize", data);
		}
		function onContainerResize({ height: newHeight }) {
			if (containerHeight.value !== newHeight) {
				containerHeight.value = newHeight;
				updateScrollbarWidth();
			}
		}
		function updateScrollbarWidth() {
			if (props.container === true) {
				const newWidth = height.value > containerHeight.value ? getScrollbarWidth() : 0;
				if (scrollbarWidth.value !== newWidth) scrollbarWidth.value = newWidth;
			}
		}
		let animateTimer = null;
		const $layout = {
			instances: {},
			view: computed(() => props.view),
			isContainer: computed(() => props.container),
			rootRef,
			height,
			containerHeight,
			scrollbarWidth,
			totalWidth: computed(() => width.value + scrollbarWidth.value),
			rows: computed(() => {
				const rows = props.view.toLowerCase().split(" ");
				return {
					top: rows[0].split(""),
					middle: rows[1].split(""),
					bottom: rows[2].split("")
				};
			}),
			header: reactive({
				size: 0,
				offset: 0,
				space: false
			}),
			right: reactive({
				size: 300,
				offset: 0,
				space: false
			}),
			footer: reactive({
				size: 0,
				offset: 0,
				space: false
			}),
			left: reactive({
				size: 300,
				offset: 0,
				space: false
			}),
			scroll,
			animate() {
				if (animateTimer !== null) clearTimeout(animateTimer);
				else document.body.classList.add("q-body--layout-animate");
				animateTimer = setTimeout(() => {
					animateTimer = null;
					document.body.classList.remove("q-body--layout-animate");
				}, 155);
			},
			update(part, prop, val) {
				$layout[part][prop] = val;
			}
		};
		provide(layoutKey, $layout);
		if (getScrollbarWidth() > 0) {
			let timer = null;
			const el = document.body;
			function restoreScrollbar() {
				timer = null;
				el.classList.remove("hide-scrollbar");
			}
			function hideScrollbar() {
				if (timer === null) {
					if (el.scrollHeight > $q.screen.height) return;
					el.classList.add("hide-scrollbar");
				} else clearTimeout(timer);
				timer = setTimeout(restoreScrollbar, 300);
			}
			function updateScrollEvent(action) {
				if (timer !== null && action === "remove") {
					clearTimeout(timer);
					restoreScrollbar();
				}
				window[`${action}EventListener`]("resize", hideScrollbar);
			}
			watch(() => props.container !== true ? "add" : "remove", updateScrollEvent);
			if (props.container !== true) updateScrollEvent("add");
			onUnmounted(() => {
				updateScrollEvent("remove");
			});
		}
		return () => {
			const content = hMergeSlot(slots.default, [h(QScrollObserver_default, { onScroll: onPageScroll }), h(QResizeObserver_default, { onResize: onPageResize })]);
			const layout = h("div", {
				class: classes.value,
				style: style.value,
				ref: props.container === true ? void 0 : rootRef,
				tabindex: -1
			}, content);
			if (props.container === true) return h("div", {
				class: "q-layout-container overflow-hidden",
				ref: rootRef
			}, [h(QResizeObserver_default, { onResize: onContainerResize }), h("div", {
				class: "absolute-full",
				style: targetStyle.value
			}, [h("div", {
				class: "scroll",
				style: targetChildStyle.value
			}, [layout])])]);
			return layout;
		};
	}
});
//#endregion
//#region node_modules/quasar/src/directives/touch-hold/TouchHold.js
var TouchHold_default = createDirective({
	name: "touch-hold",
	beforeMount(el, binding) {
		const { modifiers } = binding;
		if (modifiers.mouse !== true && client.has.touch !== true) return;
		const ctx = {
			handler: binding.value,
			noop,
			mouseStart(evt) {
				if (typeof ctx.handler === "function" && leftClick(evt) === true) {
					addEvt(ctx, "temp", [[
						document,
						"mousemove",
						"move",
						"passiveCapture"
					], [
						document,
						"click",
						"end",
						"notPassiveCapture"
					]]);
					ctx.start(evt, true);
				}
			},
			touchStart(evt) {
				if (evt.target !== void 0 && typeof ctx.handler === "function") {
					const target = evt.target;
					addEvt(ctx, "temp", [
						[
							target,
							"touchmove",
							"move",
							"passiveCapture"
						],
						[
							target,
							"touchcancel",
							"end",
							"notPassiveCapture"
						],
						[
							target,
							"touchend",
							"end",
							"notPassiveCapture"
						]
					]);
					ctx.start(evt);
				}
			},
			start(evt, mouseEvent) {
				ctx.origin = position(evt);
				const startTime = Date.now();
				if (client.is.mobile === true) {
					document.body.classList.add("non-selectable");
					clearSelection();
					ctx.styleCleanup = (withDelay) => {
						ctx.styleCleanup = void 0;
						const remove = () => {
							document.body.classList.remove("non-selectable");
						};
						if (withDelay === true) {
							clearSelection();
							setTimeout(remove, 10);
						} else remove();
					};
				}
				ctx.triggered = false;
				ctx.sensitivity = mouseEvent === true ? ctx.mouseSensitivity : ctx.touchSensitivity;
				ctx.timer = setTimeout(() => {
					ctx.timer = void 0;
					clearSelection();
					ctx.triggered = true;
					ctx.handler({
						evt,
						touch: mouseEvent !== true,
						mouse: mouseEvent === true,
						position: ctx.origin,
						duration: Date.now() - startTime
					});
				}, ctx.duration);
			},
			move(evt) {
				const { top, left } = position(evt);
				if (ctx.timer !== void 0 && (Math.abs(left - ctx.origin.left) >= ctx.sensitivity || Math.abs(top - ctx.origin.top) >= ctx.sensitivity)) {
					clearTimeout(ctx.timer);
					ctx.timer = void 0;
				}
			},
			end(evt) {
				cleanEvt(ctx, "temp");
				ctx.styleCleanup?.(ctx.triggered);
				if (ctx.triggered === true) {
					if (evt !== void 0) stopAndPrevent(evt);
				} else if (ctx.timer !== void 0) {
					clearTimeout(ctx.timer);
					ctx.timer = void 0;
				}
			}
		};
		const data = [
			600,
			5,
			7
		];
		if (typeof binding.arg === "string" && binding.arg.length !== 0) binding.arg.split(":").forEach((val, index) => {
			const v = parseInt(val, 10);
			if (v) data[index] = v;
		});
		[ctx.duration, ctx.touchSensitivity, ctx.mouseSensitivity] = data;
		el.__qtouchhold = ctx;
		if (modifiers.mouse === true) addEvt(ctx, "main", [[
			el,
			"mousedown",
			"mouseStart",
			`passive${modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : ""}`
		]]);
		if (client.has.touch === true) addEvt(ctx, "main", [[
			el,
			"touchstart",
			"touchStart",
			`passive${modifiers.capture === true ? "Capture" : ""}`
		], [
			el,
			"touchend",
			"noop",
			"notPassiveCapture"
		]]);
	},
	updated(el, binding) {
		const ctx = el.__qtouchhold;
		if (ctx !== void 0 && binding.oldValue !== binding.value) {
			if (typeof binding.value !== "function") ctx.end();
			ctx.handler = binding.value;
		}
	},
	beforeUnmount(el) {
		const ctx = el.__qtouchhold;
		if (ctx !== void 0) {
			cleanEvt(ctx, "main");
			cleanEvt(ctx, "temp");
			if (ctx.timer !== void 0) clearTimeout(ctx.timer);
			ctx.styleCleanup?.();
			delete el.__qtouchhold;
		}
	}
});
//#endregion
//#region src/components/EssentialNavigation.vue
var _sfc_main$1 = {
	__name: "EssentialNavigation",
	props: { showInvisible: {
		type: Boolean,
		required: false,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const itemsFiltered = computed(() => {
			console.log("childrenCommon", childrenCommon);
			if (props.showInvisible) return childrenCommon;
			else return childrenCommon.filter((item) => {
				if (item.visible == void 0) return true;
				else if (item.visible) return item.visible;
			});
		});
		return (_ctx, _cache) => {
			return openBlock(true), createElementBlock(Fragment, null, renderList(itemsFiltered.value, (item) => {
				return openBlock(), createBlock(QItem_default, {
					key: item.title,
					to: item.path,
					exact: ""
				}, {
					default: withCtx(() => [createVNode(QItemSection_default, { avatar: "" }, {
						default: withCtx(() => [createVNode(QIcon_default, { name: item.icon }, null, 8, ["name"])]),
						_: 2
					}, 1024), createVNode(QItemSection_default, null, {
						default: withCtx(() => [createVNode(QItemLabel_default, null, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
							_: 2
						}, 1024), createVNode(QItemLabel_default, { caption: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.caption), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, ["to"]);
			}), 128);
		};
	}
};
var MainLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ Object.assign({ name: "MainLayout" }, {
	__name: "MainLayout",
	setup(__props) {
		const leftDrawerOpen = ref(false);
		function toggleLeftDrawer() {
			leftDrawerOpen.value = !leftDrawerOpen.value;
		}
		const showInvisible = ref(false);
		function handleMagicClick() {
			showInvisible.value = !showInvisible.value;
		}
		const appinfo = {
			"name": "mks-welcome",
			"version": "0.1.1",
			"productName": "MYS MKS",
			"description": "evolution of the material-website",
			"projectUrl": "https://github.com/Make-Your-School/mks-welcome/",
			"previewUrl": "https://materialkoffer.makeyourschool.de/"
		};
		const $q = useQuasar();
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(QLayout_default, { view: "lHh Lpr lFf" }, {
				default: withCtx(() => [
					createVNode(QBtn_default, {
						flat: "",
						dense: "",
						round: "",
						icon: "menu",
						"aria-label": "Menu",
						onClick: toggleLeftDrawer,
						class: "fixed-bottom-left q-ma-sm",
						style: { "z-index": "10000" }
					}),
					createVNode(QBtn_default, {
						class: "fixed-top-right q-ma-sm",
						flat: "",
						round: "",
						onClick: _cache[0] || (_cache[0] = ($event) => unref($q).dark.toggle()),
						icon: unref($q).dark.isActive ? "brightness_2" : "brightness_5",
						style: { "z-index": "10000" }
					}, null, 8, ["icon"]),
					createVNode(QDrawer_default, {
						modelValue: leftDrawerOpen.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => leftDrawerOpen.value = $event),
						bordered: "",
						elevated: "",
						overlay: ""
					}, {
						default: withCtx(() => [createVNode(QList_default, { class: "q-pt-xl q-pb-xl" }, {
							default: withCtx(() => [
								createVNode(_sfc_main$1, { "show-invisible": showInvisible.value }, null, 8, ["show-invisible"]),
								createVNode(QItem_default, null, {
									default: withCtx(() => [createVNode(QItemSection_default, null, {
										default: withCtx(() => [createVNode(QBtn_default, {
											flat: "",
											round: "",
											onClick: _cache[1] || (_cache[1] = ($event) => unref($q).dark.toggle()),
											icon: unref($q).dark.isActive ? "brightness_2" : "brightness_5"
										}, null, 8, ["icon"])]),
										_: 1
									})]),
									_: 1
								}),
								createVNode(QItem_default, null, {
									default: withCtx(() => [createVNode(QItemSection_default)]),
									_: 1
								}),
								withDirectives((openBlock(), createBlock(QItemLabel_default, {
									header: "",
									class: "fixed-bottom appinfo"
								}, {
									default: withCtx(() => [
										createTextVNode(toDisplayString(unref(appinfo).productName) + " v" + toDisplayString(unref(appinfo).version) + " ", 1),
										_cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
										createTextVNode(" Quasar v" + toDisplayString(unref($q).version), 1)
									]),
									_: 1
								})), [[
									TouchHold_default,
									handleMagicClick,
									"1000",
									{ mouse: true }
								]])
							]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(QPageContainer_default, { class: "fit" }, {
						default: withCtx(() => [createVNode(_component_router_view)]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-b1395422"]]);
//#endregion
export { MainLayout_default as default };
