import { A as onMounted, D as onBeforeUnmount, O as onBeforeUpdate, Q as ref, T as onActivated, V as watch, k as onDeactivated, l as computed, t as Transition, v as getCurrentInstance, w as nextTick, x as inject, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { n as injectProp } from "./inject-obj-prop-B-maADS4.js";
import { n as client } from "./Platform-Hxr0V5Kb.js";
import { i as hSlot } from "./render-AG-3FfQy.js";
import { c as prevent, d as stopAndPrevent } from "./event-JAmtdkur.js";
import { t as debounce } from "./debounce-xC9d6Tps.js";
import { t as QIcon_default } from "./QIcon-BIe_yU5L.js";
import { n as formKey } from "./symbols-CTfU4lpL.js";
import { t as QSpinner_default } from "./QSpinner-C9TaWt0d.js";
import { i as addFocusFn, o as removeFocusFn } from "./private.use-form-DoNiTCW_.js";
import { t as useId } from "./use-id-DWrbHNzg.js";
import { n as useDarkProps, t as useDark } from "./use-dark-D7HPSSY-.js";
//#region node_modules/quasar/src/composables/use-split-attrs/use-split-attrs.js
var listenerRE = /^on[A-Z]/;
function useSplitAttrs() {
	const { attrs, vnode } = getCurrentInstance();
	const acc = {
		listeners: ref({}),
		attributes: ref({})
	};
	function update() {
		const attributes = {};
		const listeners = {};
		for (const key in attrs) if (key !== "class" && key !== "style" && listenerRE.test(key) === false) attributes[key] = attrs[key];
		for (const key in vnode.props) if (listenerRE.test(key) === true) listeners[key] = vnode.props[key];
		acc.attributes.value = attributes;
		acc.listeners.value = listeners;
	}
	onBeforeUpdate(update);
	update();
	return acc;
}
//#endregion
//#region node_modules/quasar/src/composables/use-form/use-form-child.js
function useFormChild({ validate, resetValidation, requiresQForm }) {
	const $form = inject(formKey, false);
	if ($form !== false) {
		const { props, proxy } = getCurrentInstance();
		Object.assign(proxy, {
			validate,
			resetValidation
		});
		watch(() => props.disable, (val) => {
			if (val === true) {
				if (typeof resetValidation === "function") resetValidation();
				$form.unbindComponent(proxy);
			} else $form.bindComponent(proxy);
		});
		onMounted(() => {
			if (props.disable !== true) $form.bindComponent(proxy);
		});
		onBeforeUnmount(() => {
			if (props.disable !== true) $form.unbindComponent(proxy);
		});
	} else if (requiresQForm === true) console.error("Parent QForm not found on useFormChild()!");
}
//#endregion
//#region node_modules/quasar/src/utils/patterns/patterns.js
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = {
	date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
	time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
	fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
	timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
	email: (v) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
	hexColor: (v) => hex.test(v),
	hexaColor: (v) => hexa.test(v),
	hexOrHexaColor: (v) => hexOrHexa.test(v),
	rgbColor: (v) => rgb.test(v),
	rgbaColor: (v) => rgba.test(v),
	rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
	hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
	hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
	anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
//#endregion
//#region node_modules/quasar/src/composables/private.use-validate/use-validate.js
var lazyRulesValues = [
	true,
	false,
	"ondemand"
];
var useValidateProps = {
	modelValue: {},
	error: {
		type: Boolean,
		default: null
	},
	errorMessage: String,
	noErrorIcon: Boolean,
	rules: Array,
	reactiveRules: Boolean,
	lazyRules: {
		type: [Boolean, String],
		default: false,
		validator: (v) => lazyRulesValues.includes(v)
	}
};
function useValidate(focused, innerLoading) {
	const { props, proxy } = getCurrentInstance();
	const innerError = ref(false);
	const innerErrorMessage = ref(null);
	const isDirtyModel = ref(false);
	useFormChild({
		validate,
		resetValidation
	});
	let validateIndex = 0, unwatchRules;
	const hasRules = computed(() => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0);
	const canDebounceValidate = computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
	const hasError = computed(() => props.error === true || innerError.value === true);
	const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
	watch(() => props.modelValue, () => {
		isDirtyModel.value = true;
		if (canDebounceValidate.value === true && props.lazyRules === false) debouncedValidate();
	});
	function onRulesChange() {
		if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) debouncedValidate();
	}
	watch(() => props.reactiveRules, (val) => {
		if (val === true) {
			if (unwatchRules === void 0) unwatchRules = watch(() => props.rules, onRulesChange, {
				immediate: true,
				deep: true
			});
		} else if (unwatchRules !== void 0) {
			unwatchRules();
			unwatchRules = void 0;
		}
	}, { immediate: true });
	watch(() => props.lazyRules, onRulesChange);
	watch(focused, (val) => {
		if (val === true) isDirtyModel.value = true;
		else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") debouncedValidate();
	});
	function resetValidation() {
		validateIndex++;
		innerLoading.value = false;
		isDirtyModel.value = false;
		innerError.value = false;
		innerErrorMessage.value = null;
		debouncedValidate.cancel();
	}
	function validate(val = props.modelValue) {
		if (props.disable === true || hasRules.value === false) return true;
		const index = ++validateIndex;
		const setDirty = innerLoading.value !== true ? () => {
			isDirtyModel.value = true;
		} : () => {};
		const update = (err, msg) => {
			if (err === true) setDirty();
			innerError.value = err;
			innerErrorMessage.value = msg || null;
			innerLoading.value = false;
		};
		const promises = [];
		for (let i = 0; i < props.rules.length; i++) {
			const rule = props.rules[i];
			let res;
			if (typeof rule === "function") res = rule(val, testPattern);
			else if (typeof rule === "string" && testPattern[rule] !== void 0) res = testPattern[rule](val);
			if (res === false || typeof res === "string") {
				update(true, res);
				return false;
			} else if (res !== true && res !== void 0) promises.push(res);
		}
		if (promises.length === 0) {
			update(false);
			return true;
		}
		innerLoading.value = true;
		return Promise.all(promises).then((res) => {
			if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
				if (index === validateIndex) update(false);
				return true;
			}
			const msg = res.find((r) => r === false || typeof r === "string");
			if (index === validateIndex) update(msg !== void 0, msg);
			return msg === void 0;
		}, (e) => {
			if (index === validateIndex) {
				console.error(e);
				update(true);
			}
			return false;
		});
	}
	const debouncedValidate = debounce(validate, 0);
	onBeforeUnmount(() => {
		unwatchRules?.();
		debouncedValidate.cancel();
	});
	Object.assign(proxy, {
		resetValidation,
		validate
	});
	injectProp(proxy, "hasError", () => hasError.value);
	return {
		isDirtyModel,
		hasRules,
		hasError,
		errorMessage,
		validate,
		resetValidation
	};
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-field/use-field.js
function fieldValueIsFilled(val) {
	return val !== void 0 && val !== null && String(val).length !== 0;
}
var useFieldProps = {
	...useDarkProps,
	...useValidateProps,
	label: String,
	stackLabel: Boolean,
	hint: String,
	hideHint: Boolean,
	prefix: String,
	suffix: String,
	labelColor: String,
	color: String,
	bgColor: String,
	filled: Boolean,
	outlined: Boolean,
	borderless: Boolean,
	standout: [Boolean, String],
	square: Boolean,
	loading: Boolean,
	labelSlot: Boolean,
	bottomSlots: Boolean,
	hideBottomSpace: Boolean,
	rounded: Boolean,
	dense: Boolean,
	itemAligned: Boolean,
	counter: Boolean,
	clearable: Boolean,
	clearIcon: String,
	disable: Boolean,
	readonly: Boolean,
	autofocus: Boolean,
	for: String,
	maxlength: [Number, String]
};
var useFieldEmits = [
	"update:modelValue",
	"clear",
	"focus",
	"blur"
];
function useFieldState({ requiredForAttr = true, tagProp, changeEvent = false } = {}) {
	const { props, proxy } = getCurrentInstance();
	const isDark = useDark(props, proxy.$q);
	const targetUid = useId({
		required: requiredForAttr,
		getValue: () => props.for
	});
	return {
		requiredForAttr,
		changeEvent,
		tag: tagProp === true ? computed(() => props.tag) : { value: "label" },
		isDark,
		editable: computed(() => props.disable !== true && props.readonly !== true),
		innerLoading: ref(false),
		focused: ref(false),
		hasPopupOpen: false,
		splitAttrs: useSplitAttrs(),
		targetUid,
		rootRef: ref(null),
		targetRef: ref(null),
		controlRef: ref(null)
	};
}
function useField(state) {
	const { props, emit, slots, attrs, proxy } = getCurrentInstance();
	const { $q } = proxy;
	let focusoutTimer = null;
	if (state.hasValue === void 0) state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
	if (state.emitValue === void 0) state.emitValue = (value) => {
		emit("update:modelValue", value);
	};
	if (state.controlEvents === void 0) state.controlEvents = {
		onFocusin: onControlFocusin,
		onFocusout: onControlFocusout
	};
	Object.assign(state, {
		clearValue,
		onControlFocusin,
		onControlFocusout,
		focus
	});
	if (state.computedCounter === void 0) state.computedCounter = computed(() => {
		if (props.counter !== false) {
			const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? String(props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
			const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
			return len + (max !== void 0 ? " / " + max : "");
		}
	});
	const { isDirtyModel, hasRules, hasError, errorMessage, resetValidation } = useValidate(state.focused, state.innerLoading);
	const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
	const shouldRenderBottom = computed(() => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null);
	const styleType = computed(() => {
		if (props.filled === true) return "filled";
		if (props.outlined === true) return "outlined";
		if (props.borderless === true) return "borderless";
		if (props.standout) return "standout";
		return "standard";
	});
	const classes = computed(() => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : ""));
	const contentClass = computed(() => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : ""));
	const hasLabel = computed(() => props.labelSlot === true || props.label !== void 0);
	const labelClass = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : ""));
	const controlSlotScope = computed(() => ({
		id: state.targetUid.value,
		editable: state.editable.value,
		focused: state.focused.value,
		floatingLabel: floatingLabel.value,
		modelValue: props.modelValue,
		emitValue: state.emitValue
	}));
	const attributes = computed(() => {
		const acc = {};
		if (state.targetUid.value) acc.for = state.targetUid.value;
		if (props.disable === true) acc["aria-disabled"] = "true";
		return acc;
	});
	function focusHandler() {
		const el = document.activeElement;
		let target = state.targetRef?.value;
		if (target && (el === null || el.id !== state.targetUid.value)) {
			if (target.hasAttribute("tabindex") !== true) target = target.querySelector("[tabindex]");
			if (target !== el) target?.focus({ preventScroll: true });
		}
	}
	function focus() {
		addFocusFn(focusHandler);
	}
	function blur() {
		removeFocusFn(focusHandler);
		const el = document.activeElement;
		if (el !== null && state.rootRef.value.contains(el)) el.blur();
	}
	function onControlFocusin(e) {
		if (focusoutTimer !== null) {
			clearTimeout(focusoutTimer);
			focusoutTimer = null;
		}
		if (state.editable.value === true && state.focused.value === false) {
			state.focused.value = true;
			emit("focus", e);
		}
	}
	function onControlFocusout(e, then) {
		if (focusoutTimer !== null) clearTimeout(focusoutTimer);
		focusoutTimer = setTimeout(() => {
			focusoutTimer = null;
			if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) return;
			if (state.focused.value === true) {
				state.focused.value = false;
				emit("blur", e);
			}
			then?.();
		});
	}
	function clearValue(e) {
		stopAndPrevent(e);
		if ($q.platform.is.mobile !== true) (state.targetRef?.value || state.rootRef.value).focus();
		else if (state.rootRef.value.contains(document.activeElement) === true) document.activeElement.blur();
		if (props.type === "file") state.inputRef.value.value = null;
		emit("update:modelValue", null);
		if (state.changeEvent === true) emit("change", null);
		emit("clear", props.modelValue);
		nextTick(() => {
			const isDirty = isDirtyModel.value;
			resetValidation();
			isDirtyModel.value = isDirty;
		});
	}
	function onClearableKeyup(evt) {
		if ([13, 32].includes(evt.keyCode)) clearValue(evt);
	}
	function getContent() {
		const node = [];
		if (slots.prepend !== void 0) node.push(h("div", {
			class: "q-field__prepend q-field__marginal row no-wrap items-center",
			key: "prepend",
			onClick: prevent
		}, slots.prepend()));
		node.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, getControlContainer()));
		if (hasError.value === true && props.noErrorIcon === false) node.push(getInnerAppendNode("error", [h(QIcon_default, {
			name: $q.iconSet.field.error,
			color: "negative"
		})]));
		if (props.loading === true || state.innerLoading.value === true) node.push(getInnerAppendNode("inner-loading-append", slots.loading !== void 0 ? slots.loading() : [h(QSpinner_default, { color: props.color })]));
		else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) node.push(getInnerAppendNode("inner-clearable-append", [h(QIcon_default, {
			class: "q-field__focusable-action",
			name: props.clearIcon || $q.iconSet.field.clear,
			tabindex: 0,
			role: "button",
			"aria-hidden": "false",
			"aria-label": $q.lang.label.clear,
			onKeyup: onClearableKeyup,
			onClick: clearValue
		})]));
		if (slots.append !== void 0) node.push(h("div", {
			class: "q-field__append q-field__marginal row no-wrap items-center",
			key: "append",
			onClick: prevent
		}, slots.append()));
		if (state.getInnerAppend !== void 0) node.push(getInnerAppendNode("inner-append", state.getInnerAppend()));
		if (state.getControlChild !== void 0) node.push(state.getControlChild());
		return node;
	}
	function getControlContainer() {
		const node = [];
		if (props.prefix !== void 0 && props.prefix !== null) node.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, props.prefix));
		if (state.getShadowControl !== void 0 && state.hasShadow.value === true) node.push(state.getShadowControl());
		if (hasLabel.value === true) node.push(h("div", { class: labelClass.value }, hSlot(slots.label, props.label)));
		if (state.getControl !== void 0) node.push(state.getControl());
		else if (slots.rawControl !== void 0) node.push(slots.rawControl());
		else if (slots.control !== void 0) node.push(h("div", {
			ref: state.targetRef,
			class: "q-field__native row",
			tabindex: -1,
			...state.splitAttrs.attributes.value,
			"data-autofocus": props.autofocus === true || void 0
		}, slots.control(controlSlotScope.value)));
		if (props.suffix !== void 0 && props.suffix !== null) node.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, props.suffix));
		return node.concat(hSlot(slots.default));
	}
	function getBottom() {
		let msg, key;
		if (hasError.value === true) if (errorMessage.value !== null) {
			msg = [h("div", { role: "alert" }, errorMessage.value)];
			key = `q--slot-error-${errorMessage.value}`;
		} else {
			msg = hSlot(slots.error);
			key = "q--slot-error";
		}
		else if (props.hideHint !== true || state.focused.value === true) if (props.hint !== void 0) {
			msg = [h("div", props.hint)];
			key = `q--slot-hint-${props.hint}`;
		} else {
			msg = hSlot(slots.hint);
			key = "q--slot-hint";
		}
		const hasCounter = props.counter === true || slots.counter !== void 0;
		if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) return;
		const main = h("div", {
			key,
			class: "q-field__messages col"
		}, msg);
		return h("div", {
			class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
			onClick: prevent
		}, [props.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main), hasCounter === true ? h("div", { class: "q-field__counter" }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null]);
	}
	function getInnerAppendNode(key, content) {
		return content === null ? null : h("div", {
			key,
			class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
		}, content);
	}
	let shouldActivate = false;
	onDeactivated(() => {
		shouldActivate = true;
	});
	onActivated(() => {
		if (shouldActivate === true && props.autofocus === true) proxy.focus();
	});
	if (props.autofocus === true) onMounted(() => {
		proxy.focus();
	});
	onBeforeUnmount(() => {
		if (focusoutTimer !== null) clearTimeout(focusoutTimer);
	});
	Object.assign(proxy, {
		focus,
		blur
	});
	return function renderField() {
		const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
			...state.splitAttrs.attributes.value,
			"data-autofocus": props.autofocus === true || void 0,
			...attributes.value
		} : attributes.value;
		return h(state.tag.value, {
			ref: state.rootRef,
			class: [classes.value, attrs.class],
			style: attrs.style,
			...labelAttrs
		}, [
			slots.before !== void 0 ? h("div", {
				class: "q-field__before q-field__marginal row no-wrap items-center",
				onClick: prevent
			}, slots.before()) : null,
			h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", {
				ref: state.controlRef,
				class: contentClass.value,
				tabindex: -1,
				...state.controlEvents
			}, getContent()), shouldRenderBottom.value === true ? getBottom() : null]),
			slots.after !== void 0 ? h("div", {
				class: "q-field__after q-field__marginal row no-wrap items-center",
				onClick: prevent
			}, slots.after()) : null
		]);
	};
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-key-composition/use-key-composition.js
var isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
var isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
var isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
var isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
	return function onComposition(e) {
		if (e.type === "compositionend" || e.type === "change") {
			if (e.target.qComposing !== true) return;
			e.target.qComposing = false;
			onInput(e);
		} else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
			if ((client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true) === true) e.target.qComposing = true;
		}
	};
}
//#endregion
export { useFieldProps as a, useFieldEmits as i, fieldValueIsFilled as n, useFieldState as o, useField as r, useKeyComposition as t };
