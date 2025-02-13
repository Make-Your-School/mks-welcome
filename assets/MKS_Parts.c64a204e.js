import { l as isRuntimeSsrPreHydration, r as ref, o as onMounted, w as watch, c as computed, m as onBeforeUpdate, a as getCurrentInstance, i as inject, n as formKey, p as onBeforeUnmount, q as debounce, t as injectProp, u as stopAndPrevent, v as nextTick, x as onDeactivated, y as onActivated, h, z as prevent, Q as QIcon, B as QSpinner, C as hSlot, D as Transition, E as shouldIgnoreKey, G as createComponent, H as stop, I as client, J as isKeyCode, K as childHasFocus, L as openBlock, M as createBlock, N as withCtx, j as createVNode, O as createElementBlock, P as createBaseVNode, F as Fragment, R as renderList, S as toDisplayString, U as createCommentVNode, V as createDirective, W as withDirectives, X as QBtn } from "./index.5210e46b.js";
import { u as useDark, a as useDarkProps, b as useHistory, c as usePreventScroll } from "./use-prevent-scroll.70a740e3.js";
import { a as addFocusFn, r as removeFocusFn, u as useTransitionProps, b as useTick, c as useTransition, d as usePortal, g as getPortalProxy, e as closePortals, p as preProcessingMD } from "./preprocessMD.9a825059.js";
import { u as useModelToggleProps, a as useModelToggleEmits, b as useTimeout, c as useModelToggle } from "./selection.1d2d9eb9.js";
import { Q as QPage } from "./QPage.07e1241f.js";
import { u as useQuasar } from "./use-quasar.f46cdb9a.js";
import { _ as _sfc_main$3 } from "./MyMarkdown.b1be03ae.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
import "./index.8c4641b6.js";
let buf, bufIdx = 0;
const hexBytes = new Array(256);
for (let i = 0; i < 256; i++) {
  hexBytes[i] = (i + 256).toString(16).substring(1);
}
const randomBytes = (() => {
  const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
  if (lib !== void 0) {
    if (lib.randomBytes !== void 0) {
      return lib.randomBytes;
    }
    if (lib.getRandomValues !== void 0) {
      return (n) => {
        const bytes = new Uint8Array(n);
        lib.getRandomValues(bytes);
        return bytes;
      };
    }
  }
  return (n) => {
    const r = [];
    for (let i = n; i > 0; i--) {
      r.push(Math.floor(Math.random() * 256));
    }
    return r;
  };
})();
const BUFFER_SIZE = 4096;
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
function parseValue(val) {
  return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
  return val === void 0 || val === null ? required === true ? `f_${uid()}` : null : val;
}
function useId({ getValue, required = true } = {}) {
  if (isRuntimeSsrPreHydration.value === true) {
    const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
    if (required === true && id.value === null) {
      onMounted(() => {
        id.value = `f_${uid()}`;
      });
    }
    if (getValue !== void 0) {
      watch(getValue, (newId) => {
        id.value = getId(newId, required);
      });
    }
    return id;
  }
  return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid()}`);
}
const listenerRE = /^on[A-Z]/;
function useSplitAttrs() {
  const { attrs, vnode } = getCurrentInstance();
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };
  function update2() {
    const attributes = {};
    const listeners = {};
    for (const key in attrs) {
      if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
        attributes[key] = attrs[key];
      }
    }
    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[key] = vnode.props[key];
      }
    }
    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }
  onBeforeUpdate(update2);
  update2();
  return acc;
}
function useFormChild({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);
  if ($form !== false) {
    const { props, proxy } = getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    watch(() => props.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    onMounted(() => {
      props.disable !== true && $form.bindComponent(proxy);
    });
    onBeforeUnmount(() => {
      props.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const testPattern = {
  date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
  email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
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
const lazyRulesValues = [true, false, "ondemand"];
const useValidateProps = {
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
  useFormChild({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = computed(
    () => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0
  );
  const canDebounceValidate = computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
  const hasError = computed(
    () => props.error === true || innerError.value === true
  );
  const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
  watch(() => props.modelValue, () => {
    isDirtyModel.value = true;
    if (canDebounceValidate.value === true && props.lazyRules === false) {
      debouncedValidate();
    }
  });
  function onRulesChange() {
    if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) {
      debouncedValidate();
    }
  }
  watch(() => props.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props.rules, onRulesChange, { immediate: true, deep: true });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  watch(() => props.lazyRules, onRulesChange);
  watch(focused, (val) => {
    if (val === true) {
      isDirtyModel.value = true;
    } else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") {
      debouncedValidate();
    }
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
    if (props.disable === true || hasRules.value === false) {
      return true;
    }
    const index = ++validateIndex;
    const setDirty = innerLoading.value !== true ? () => {
      isDirtyModel.value = true;
    } : () => {
    };
    const update2 = (err, msg) => {
      err === true && setDirty();
      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };
    const promises = [];
    for (let i = 0; i < props.rules.length; i++) {
      const rule = props.rules[i];
      let res;
      if (typeof rule === "function") {
        res = rule(val, testPattern);
      } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
        res = testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update2(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update2(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update2(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update2(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update2(true);
        }
        return false;
      }
    );
  }
  const debouncedValidate = debounce(validate, 0);
  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
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
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length !== 0;
}
const useNonInputFieldProps = {
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
  for: String
};
const useFieldProps = {
  ...useNonInputFieldProps,
  maxlength: [Number, String]
};
const useFieldEmits = ["update:modelValue", "clear", "focus", "blur"];
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
    editable: computed(
      () => props.disable !== true && props.readonly !== true
    ),
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
  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value) => {
      emit("update:modelValue", value);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props.counter !== false) {
        const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
        const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = useValidate(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = computed(
    () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
  );
  const styleType = computed(() => {
    if (props.filled === true) {
      return "filled";
    }
    if (props.outlined === true) {
      return "outlined";
    }
    if (props.borderless === true) {
      return "borderless";
    }
    if (props.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = computed(
    () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
  );
  const contentClass = computed(
    () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
  );
  const hasLabel = computed(
    () => props.labelSlot === true || props.label !== void 0
  );
  const labelClass = computed(
    () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
  );
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
    if (state.targetUid.value) {
      acc.for = state.targetUid.value;
    }
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    }
    return acc;
  });
  function focusHandler() {
    const el = document.activeElement;
    let target = state.targetRef !== void 0 && state.targetRef.value;
    if (target && (el === null || el.id !== state.targetUid.value)) {
      target.hasAttribute("tabindex") === true || (target = target.querySelector("[tabindex]"));
      if (target && target !== el) {
        target.focus({ preventScroll: true });
      }
    }
  }
  function focus() {
    addFocusFn(focusHandler);
  }
  function blur() {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
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
    focusoutTimer !== null && clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      focusoutTimer = null;
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e);
      }
      then !== void 0 && then();
    });
  }
  function clearValue(e) {
    stopAndPrevent(e);
    if ($q.platform.is.mobile !== true) {
      const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      el.focus();
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    state.changeEvent === true && emit("change", null);
    emit("clear", props.modelValue);
    nextTick(() => {
      const isDirty = isDirtyModel.value;
      resetValidation();
      isDirtyModel.value = isDirty;
    });
  }
  function onClearableKeyup(evt) {
    [13, 32].includes(evt.keyCode) && clearValue(evt);
  }
  function getContent() {
    const node = [];
    slots.prepend !== void 0 && node.push(
      h("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: prevent
      }, slots.prepend())
    );
    node.push(
      h("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, getControlContainer())
    );
    hasError.value === true && props.noErrorIcon === false && node.push(
      getInnerAppendNode("error", [
        h(QIcon, { name: $q.iconSet.field.error, color: "negative" })
      ])
    );
    if (props.loading === true || state.innerLoading.value === true) {
      node.push(
        getInnerAppendNode(
          "inner-loading-append",
          slots.loading !== void 0 ? slots.loading() : [h(QSpinner, { color: props.color })]
        )
      );
    } else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(
        getInnerAppendNode("inner-clearable-append", [
          h(QIcon, {
            class: "q-field__focusable-action",
            name: props.clearIcon || $q.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": $q.lang.label.clear,
            onKeyup: onClearableKeyup,
            onClick: clearValue
          })
        ])
      );
    }
    slots.append !== void 0 && node.push(
      h("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: prevent
      }, slots.append())
    );
    state.getInnerAppend !== void 0 && node.push(
      getInnerAppendNode("inner-append", state.getInnerAppend())
    );
    state.getControlChild !== void 0 && node.push(
      state.getControlChild()
    );
    return node;
  }
  function getControlContainer() {
    const node = [];
    props.prefix !== void 0 && props.prefix !== null && node.push(
      h("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, props.prefix)
    );
    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(
        state.getShadowControl()
      );
    }
    if (state.getControl !== void 0) {
      node.push(state.getControl());
    } else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    } else if (slots.control !== void 0) {
      node.push(
        h("div", {
          ref: state.targetRef,
          class: "q-field__native row",
          tabindex: -1,
          ...state.splitAttrs.attributes.value,
          "data-autofocus": props.autofocus === true || void 0
        }, slots.control(controlSlotScope.value))
      );
    }
    hasLabel.value === true && node.push(
      h("div", {
        class: labelClass.value
      }, hSlot(slots.label, props.label))
    );
    props.suffix !== void 0 && props.suffix !== null && node.push(
      h("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, props.suffix)
    );
    return node.concat(hSlot(slots.default));
  }
  function getBottom() {
    let msg, key;
    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [h("div", { role: "alert" }, errorMessage.value)];
        key = `q--slot-error-${errorMessage.value}`;
      } else {
        msg = hSlot(slots.error);
        key = "q--slot-error";
      }
    } else if (props.hideHint !== true || state.focused.value === true) {
      if (props.hint !== void 0) {
        msg = [h("div", props.hint)];
        key = `q--slot-hint-${props.hint}`;
      } else {
        msg = hSlot(slots.hint);
        key = "q--slot-hint";
      }
    }
    const hasCounter = props.counter === true || slots.counter !== void 0;
    if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return;
    }
    const main = h("div", {
      key,
      class: "q-field__messages col"
    }, msg);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
      onClick: prevent
    }, [
      props.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main),
      hasCounter === true ? h("div", {
        class: "q-field__counter"
      }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
    ]);
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
    shouldActivate === true && props.autofocus === true && proxy.focus();
  });
  props.autofocus === true && onMounted(() => {
    proxy.focus();
  });
  onBeforeUnmount(() => {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
  });
  Object.assign(proxy, { focus, blur });
  return function renderField() {
    const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
      ...state.splitAttrs.attributes.value,
      "data-autofocus": props.autofocus === true || void 0,
      ...attributes.value
    } : attributes.value;
    return h(state.tag.value, {
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style,
      ...labelAttrs
    }, [
      slots.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", {
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1,
          ...state.controlEvents
        }, getContent()),
        shouldRenderBottom.value === true ? getBottom() : null
      ]),
      slots.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.after()) : null
    ]);
  };
}
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
  }
  watch(() => props.type + props.autogrow, updateMaskInternals);
  watch(() => props.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));
      return props.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props.modelValue;
  }
  function getPaddedMaskMarked(size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos !== -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[i] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
        const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });
    const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
    if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) {
      emitValue(val, true);
    }
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break;
        }
      }
      if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
        return moveCursor.right(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    right(inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          cursor = i;
        }
      }
      if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
        return moveCursor.left(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    },
    leftReverse(inp, cursor) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          cursor = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
        return moveCursor.rightReverse(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    rightReverse(inp, cursor) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break;
        }
      }
      if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    }
  };
  function onMaskedClick(e) {
    emit("click", e);
    selectionAnchor = void 0;
  }
  function onMaskedKeydown(e) {
    emit("keydown", e);
    if (shouldIgnoreKey(e) === true || e.altKey === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === "forward" ? start : end;
      }
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);
      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
      }
    } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, "backward");
    } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, "forward");
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  };
}
const useFormProps = {
  name: String
};
function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for);
}
function useFileFormDomProps(props, typeGuard) {
  function getFormDomProps() {
    const model = props.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
function useKeyComposition(onInput) {
  return function onComposition(e) {
    if (e.type === "compositionend" || e.type === "change") {
      if (e.target.qComposing !== true)
        return;
      e.target.qComposing = false;
      onInput(e);
    } else if (e.type === "compositionstart") {
      e.target.qComposing = true;
    }
  };
}
var QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = useMask(props, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(props, true);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState({ changeEvent: true });
    const isTextarea = computed(
      () => props.type === "textarea" || props.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        evt.onClick = onMaskedClick;
      }
      if (props.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props.autofocus === true || void 0,
        rows: props.type === "textarea" ? 6 : void 0,
        "aria-label": props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props.type;
      }
      if (props.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });
    watch(() => props.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props.autogrow === true && adjustHeight();
    }
    function onAnimationend(e) {
      emit("animationend", e);
      adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;
        if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { scrollTop } = inp;
          const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
          const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
          changeOverflow === true && (inp.style.overflowY = "hidden");
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = "1px";
          inp.style.height = inp.scrollHeight + "px";
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
          parentStyle.marginBottom = "";
          inp.scrollTop = scrollTop;
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
const handlers$1 = [];
let escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers$1[handlers$1.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);
    if (handlers$1.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers$1.indexOf(fn);
  if (index !== -1) {
    handlers$1.splice(index, 1);
    if (handlers$1.length === 0) {
      update("removeEventListener");
    }
  }
}
const handlers = [];
function trigger(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index !== -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
let maximizedModals = 0;
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const defaultTransitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
var QDialog = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useTransitionProps,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (val) => ["standard", "top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const animating = ref(false);
    let shakeTimeout = null, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
    );
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout } = useTimeout();
    const { registerTick, removeTick } = useTick();
    const { transitionProps, transitionStyle } = useTransition(
      props,
      () => defaultTransitions[props.position][0],
      () => defaultTransitions[props.position][1]
    );
    const backdropStyle = computed(() => transitionStyle.value + (props.backdropFilter !== void 0 ? `;backdrop-filter:${props.backdropFilter};-webkit-backdrop-filter:${props.backdropFilter}` : ""));
    const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(
      vm,
      innerRef,
      renderPortalContent,
      "dialog"
    );
    const { hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const classes = computed(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "")
    );
    const useBackdrop = computed(() => showing.value === true && props.seamless !== true);
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(() => props.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      addToHistory();
      refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props.maximized);
      showPortal();
      animating.value = true;
      if (props.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      } else {
        removeTick();
      }
      registerTimeout(() => {
        if (vm.proxy.$q.platform.is.ios === true) {
          if (props.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - height,
                bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      hidePortal();
      if (refocusTarget !== null) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        animating.value = false;
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function focus(selector) {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null)
          return;
        if (selector !== void 0) {
          const target = node.querySelector(selector);
          if (target !== null) {
            target.focus({ preventScroll: true });
            return;
          }
        }
        if (node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function shake(focusTarget) {
      if (focusTarget && typeof focusTarget.focus === "function") {
        focusTarget.focus({ preventScroll: true });
      } else {
        focus();
      }
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        shakeTimeout !== null && clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          shakeTimeout = null;
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props.seamless !== true) {
        if (props.persistent === true || props.noEscDismiss === true) {
          props.maximized !== true && props.noShake !== true && shake();
        } else {
          emit("escapeKey");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      if (shakeTimeout !== null) {
        clearTimeout(shakeTimeout);
        shakeTimeout = null;
      }
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        hide(e);
        emit("click", e);
      }
    }
    function onBackdropClick(e) {
      if (props.persistent !== true && props.noBackdropDismiss !== true) {
        hide(e);
      } else if (props.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(vm.proxy, {
      focus,
      shake,
      __updateRefocusTarget(target) {
        refocusTarget = target || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", {
        role: "dialog",
        "aria-modal": useBackdrop.value === true ? "true" : "false",
        ...attrs,
        class: rootClasses.value
      }, [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: backdropStyle.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: onBackdropClick
        }) : null),
        h(
          Transition,
          transitionProps.value,
          () => showing.value === true ? h("div", {
            ref: innerRef,
            class: classes.value,
            style: transitionStyle.value,
            tabindex: -1,
            ...onEvents.value
          }, hSlot(slots.default)) : null
        )
      ]);
    }
    return renderPortal;
  }
});
var QCardSection = createComponent({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-card__section q-card__section--${props.horizontal === true ? "horiz row no-wrap" : "vert"}`
    );
    return () => h(props.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var QCard = createComponent({
  name: "QCard",
  props: {
    ...useDarkProps,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props.bordered === true ? " q-card--bordered" : "") + (props.square === true ? " q-card--square no-border-radius" : "") + (props.flat === true ? " q-card--flat no-shadow" : "")
    );
    return () => h(props.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var PartOverview_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { key: 0 };
const _sfc_main$2 = {
  __name: "PartOverview",
  props: {
    fn_item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "fn-overview" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(_sfc_main$3, {
                source: __props.fn_item.readme.excerpt,
                "file-path": __props.fn_item.path_base
              }, null, 8, ["source", "file-path"]),
              __props.fn_item.parts ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Bauteile", -1)),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fn_item.parts, (part_item, part_name) => {
                    var _a;
                    return openBlock(), createElementBlock("li", { key: part_name }, toDisplayString(part_name) + " " + toDisplayString((_a = part_item.readme.data) == null ? void 0 : _a.id), 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
var PartOverview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7efe8feb"]]);
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
var PartDetails_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { key: 0 };
const _sfc_main$1 = {
  __name: "PartDetails",
  props: {
    fn_item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "fn-details" }, {
        default: withCtx(() => [
          withDirectives(createVNode(QBtn, {
            flat: "",
            class: "absolute-top-right q-mt-md q-mr-md",
            icon: "close",
            size: "xl",
            round: ""
          }, null, 512), [
            [ClosePopup]
          ]),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(_sfc_main$3, {
                source: __props.fn_item.readme.content,
                "file-path": __props.fn_item.path_base
              }, null, 8, ["source", "file-path"]),
              __props.fn_item.parts ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fn_item.parts, (part_item, part_name) => {
                  return openBlock(), createBlock(QCard, {
                    key: part_name,
                    class: "q-ma-md q-pa-md card-bauteil"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3, {
                        source: part_item.readme.content,
                        "file-path": part_item.path_base
                      }, null, 8, ["source", "file-path"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
var PartDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d35a3b4"]]);
const mksAddPartsToTags = (mksContent2) => {
  console.groupCollapsed("mksAddPartsToTags");
  const mksTags = mksContent2.tags;
  const mksParts = mksContent2.parts;
  for (const [tag_name, tag] of Object.entries(mksTags)) {
    if (tag.parts == void 0) {
      tag.parts = {};
    }
  }
  for (const [part_name, part] of Object.entries(mksParts)) {
    const part_tags = part.readme.data.tags;
    if (part_tags) {
      for (const part_tag of part_tags) {
        part_tag.toLowerCase();
        if (mksTags[part_tag]) {
          mksTags[part_tag].parts[part_name] = part;
        }
      }
    }
  }
  console.groupEnd();
};
const getTagsContent = () => {
  return { "../../public/mks/tags/Entfernung/readme.md": "---\ntitel: Entfernung\ntags: [entfernung, input]\nid: 17\n---\n\n# Entfernung\n\n![Ma\xDFband](./Yellow%20Tape%20Measure.svg)\n\n## Funktionen\n\nSensoren die Entfernungen Messen k\xF6nnen.\n\n<!-- more_details -->\n\nhier ist unter anderem Wichtig in welchem Bereich der jeweilige Sensor messen kann.\nes kann z.B. sein das der minimale Abstand durch aus 5cm betr\xE4gt.\nauch sind die Genauigkeit sehr unterschiedlich - von wenigen Millimetern Abweichungen bis zu mehreren Centimeter.\n\n## Relevante Gr\xF6\xDFen:\n\n-   Messbereich (mm, cm, m)\n-   Genauigkeit (z.B. `+- n cm`)\n\n## Siehe Auch\n\n-   ToDo\n", "../../public/mks/tags/LEDs/readme.md": "---\ntitle: LEDs\ntags: [output, led, licht, Farbe]\n---\n\n# LEDs\n\n![LED](./led-lamp-green-on.svg)\n\n## Funktionen\n\nEine LED kann verwendet werden um zust\xE4nde zu signalisieren oder auch um Licht im sinne von Beleuchtung zu erzeugen.\n\nes gibt sehr viele verschiedene formen und ausf\xFChrungen von LEDs.\n\n<!-- more_details -->\n\n## Siehe Auch\n\n-   x\n", "../../public/mks/tags/Motor/readme.md": "---\ntags: [motor, output]\n---\n\n# Motoren\n\n![Motor allgemein](./cyberscooty-motor-stepper.svg)\n\nTODO: CONTENT change image to general\n\n## Funktion\n\nDer Motortreiber \xFCbersetzt die schwachen Signale & Spannungen des micro-controllers (Arduino / RaspberryPi)\nin Starke Spannungen & Str\xF6me um die verschiedenen [Motoren](#motor) anzusteuern (zu _treiben_).\n\n<!-- more_details -->\n\n## Siehe Auch\n\n-   [Motoren](#motor)\n", "../../public/mks/tags/Motortreiber/readme.md": "---\ntitle: Motortreiber\ntags: [motor, motortreiber, output]\nid: 70\n---\n\n# Motortreiber\n\n![Motortreiber allgemein](https://makeyourschool.de/wp-content/uploads/2018/10/70_motortreiber-1024x1024.jpg)\n\nTODO: CONTENT change image to general\n\n## Funktion\n\nWandelt Elektrische Signale in Dreh-Bewegung um.\n\n<!-- more_details -->\n\nEs gibt soooo viele verschiedene Motoren...\n\n## Siehe Auch\n\n-   [Motortreiber](#motortreiber)\n", "../../public/mks/tags/Taster_Schalter/readme.md": "---\ntitle: Taster & Schalter\ntags: [input]\nid: 261\n---\n\n# Taster & Schalter\n\n![Taster allgemein](https://makeyourschool.de/wp-content/uploads/2018/10/59_taster_knopf-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image to general -->\n\n## Funktionen\n\nDer Taster / Schalter ist ein _Input_.\n\nDer Unterschied zwischen Taster und Schalter:\n\n-   Taster: nur solange _an_ wie er Bet\xE4tigt (z.B: gedr\xFCckt) wird\n-   Schalter: Bet\xE4tigung/Aktion wechselt den Zustand zwischen an und aus\n\nes gibt diese in sehr vielen verschiedenen Ausf\xFChrungen.\n\n<!-- more_details -->\n\nwenn ein Taster/Schalter **an** ist sind die Kontakte verbunden.\nwenn er **aus** ist sind die kontakte unverbunden.\ndiesen unterschied kann ein uC _messen_.\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   Mechanische Bet\xE4tigung\n\n### Ausgang\n\n-   Zwei _Pins_ werden \\*verbunden\n\n## Kurz-Datenblatt\n\nsiehe bauteile\n\n## Siehe Auch\n\n-   _-_\n\n## Weiterf\xFChrende Informationen:\n\n-   [Schalter (Elektrotechnik) \u2013 Wikipedia Artikel](<https://de.wikipedia.org/wiki/Schalter_(Elektrotechnik)>)\n-   [Positionsschalter \u2013 Wikipedia Artikel](https://de.wikipedia.org/wiki/Positionsschalter)\n-   [GPIO \u2013 Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)\n-   library f\xFCr _tasten-events_ [slight_ButtonInput](https://github.com/s-light/slight_ButtonInput/) (kann direkt in der IDE installiert werden)\n" };
};
const getPartsContent = () => {
  return { "../../public/mks/parts/mks-Endschalter/readme.md": "---\ntitle: Endschalter\ntags: [taster_schalter, schalter, taster_taster_schalter, schalter, taster, motor, input]\nid: 25\n---\n\n# Endschalter\n\n![Endschalter](./bauteil.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nDer Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe f\xFCr einen Mikrocontroller verwendet werden.\nDer Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedr\xFCckt wird.\n\n<!-- more_details -->\n\nDer Endschalter kommt vor allem bei Robotern oder anderen bewegten Maschinen zum Einsatz, um Kollisionen zu erkennen und zu vermeiden.\nSo kann dieser zum Beispiel an einem Roboter angebaut werden - wenn der Roboter dann gegen ein Hindernis f\xE4hrt,\nwird der Endschalter bet\xE4tigt bevor der Roboter das Hindernis wirklich ber\xFChrt.\nSo wird die bevorstehende Kollision erkannt und kann vermieden werden. (z.B. f\xE4hrt der Roboter dann R\xFCckw\xE4rts vom Hindernis weg.)\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   Mechanische Bet\xE4tigung\n\n### Ausgang\n\n-   3 Kontakte (NC-C-NO)\n    -   C = Common (gemeinsamer Anschluss)\n    -   NC = Normal Closed (im unged\xFCrckten zustand mit C verbunden)\n    -   NO = Normal Open (im ged\xFCrckten zustand mit C verbunden)\n\n## Kurz-Datenblatt\n\n-   Schaltleistung: 5A 125VAC\n\n[Hersteller Datenblatt](https://asset.conrad.com/media10/add/160267/c1/-/de/000707243DS01/datenblatt-707243-hartmann-mikroschalter-mbb1-01-a-01-c-09-a-250-vac-5-a-1-x-einein-tastend-1-st.pdf)\n\n## Siehe Auch\n\n-   -\n\n## library\n\nkeine library n\xF6tig.\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/Endschalter_minimal/Endschalter_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n-   schlie\xDFe den Endschalter wie folgt an:\n    -   C an GND\n    -   NO an D2\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber in neuen leeren arduino sketch\n    -   oder direkt \xFCber das Men\xFC der Arduino IDE \\*1:\n        `Datei-Beispiele-MakeYourSchool-Taster-Endschalter-Endschalter_Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   \xD6ffne den Serial-Monitor (Symbol ganz rechts oben in der IDE)\n    -   Wenn du nun den Endschalter dr\xFCckst sollte `Endschalter wurde gerade gedr\xFCckt!` angezeigt werden.\n    -   Wenn du ihn wieder los l\xE4sst sollte `Endschalter wurde wieder ge\xF6ffnet` angezeigt werden.\n\n\\*1: daf\xFCr musst du einmalig die `MakeYourSchool` library installiert haben.\ndiese bringt alle hier im system vorhandenen Beispielcodes in die IDE..\n", "../../public/mks/parts/mks-GroveKippschalter/readme.md": "---\ntitle: Kippschalter\ntags: [input, taster_schalter, schalter, lage, orientierung, position]\nid: 24\n---\n\n# Kippschalter\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/24_kippschalter-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nkurz-Beschreibung\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   I2C\n\n### Ausgang\n\n-   High Power / High Voltage\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 5-12V\n-   Ausgang Strom Max: 2A\n\n## Siehe Auch\n\n-   falls vorhanden link zu anderem Bauteil / zugeh\xF6rigem part\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: keine library ben\xF6tigt.\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/grove_kippschalter_minimal/grove_kippschalter_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-GroveMagnetschalter/readme.md": "---\ntitle: Magnetschalter\ntags: [input, taster_schalter, schalter, taster_taster_schalter, schalter, taster, magnet]\nid: 28\n---\n\n# Magnetschalter\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/28_magnetschalter-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nkurz-Beschreibung\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   I2C\n\n### Ausgang\n\n-   High Power / High Voltage\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 5-12V\n-   Ausgang Strom Max: 2A\n\n## Siehe Auch\n\n-   falls vorhanden link zu anderem Bauteil / zugeh\xF6rigem part\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName\n\n<!-- TODO: CONTENT change library name -->\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/grove_magnetschalter_minimal/grove_magnetschalter_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-GroveMotortreiberI2C/readme.md": "---\ntitle: Grove Motortreiber (I2C)\ntags: [output, aktor, motortreiber, motor, i2c]\nid: 70\n---\n\n# Grove motortreiber I2C\n\nmks Nr 70\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/70_motortreiber-1024x1024.jpg)\n\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nkurz-Beschreibung\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   I2C\n\n### Ausgang\n\n-   High Power / High Voltage\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 5-12V\n-   Ausgang Strom Max: 1A\n\n## Siehe Auch\n\n-   falls vorhanden link zu anderem Bauteil / zugeh\xF6rigem part\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName\n\n<!-- TODO: CONTENT change library name -->\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/grove_motortreiber_minimal/grove_motortreiber_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-GroveSchalter/readme.md": "---\ntitle: Grove Schalter\ntags: [input, taster_schalter, schalter, grove]\nid: 61\n---\n\n# Schalter\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/61_schalter-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nkurz-Beschreibung\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   I2C\n\n### Ausgang\n\n-   High Power / High Voltage\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 5-12V\n-   Ausgang Strom Max: 2A\n\n## Siehe Auch\n\n-   falls vorhanden link zu anderem Bauteil / zugeh\xF6rigem part\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName\n\n<!-- TODO: CONTENT change library name -->\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/grove_schalter_minimal/grove_schalter_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-GroveTaster/readme.md": "---\ntitle: Grove Taster\ntags: [input, taster_taster_schalter, schalter, taster, grove]\nid: 60\n---\n\n# Taster (Grove)\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/60_taster_knopf_platine-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nein einfacher Taster.\nauf einer Platine mit einem Grove-Buchse verl\xF6tete.\ndadurch ist der Anschluss super einfach :-)\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   Mechanische Bet\xE4tigung\n\n### Ausgang\n\n-   5V Signal (auf Grove Buchse)\n\n## Kurz-Datenblatt\n\n-   Betriebsspannung: 3.3-5V\n\n## Siehe Auch\n\n-   -\n\n## library\n\nkeine library n\xF6tig.\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/taster/taster.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-GroveUltraschall/readme.md": "---\ntitel: Grove Ultraschall Entfernungsmesser\ntags: [input, entfernung, grove]\nid: 17\n---\n\n# Grove Ultraschall Entfernungsmesser\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/17_ultraschallentfernungssensor-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nkurz-Beschreibung\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   I2C\n\n### Ausgang\n\n-   High Power / High Voltage\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 5-12V\n-   Ausgang Strom Max: 2A\n\n## Siehe Auch\n\n-   x\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName\n\n<!-- TODO: CONTENT change library name -->\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an\n\n```c++ :./examples/BauteilTemplate_minimal/BauteilTemplate_minimal.ino\n\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-Pixel-LED-Streifen/readme.md": "---\ntags: [output, leds, licht]\nid: 65\n---\n\n# Pixel LED-Streifen\n\n![LED-Streifen](https://makeyourschool.de/wp-content/uploads/2018/08/65_led-streifen-1024x1024.jpg)\n\n## Beschreibung\nLED-Streifen sind Flexible B\xE4nder auf denen in bestimmtem Abstand `Adresierbare LED's` aufgel\xF6tete sind.\n\n<!-- more_details -->\n\njeder *Pixel* beinhaltet einen kleinen controller chip (meist schwarzen - dem LED-Treiber) und den meist drei eigentlichen LEDs in den Licht-Grundfarben Rot, Gr\xFCn und Blau.\nJeder *Pixel* kann einzeln *Adressiert* werden (Entspricht einem Haus in einer Stra\xDFe).\ndabei k\xF6nnen alle drei Grundfarben einzeln in ihrere Helligkeit (255 Stufen) eingestellt werden -\ndadurch k\xF6nnen alle Regenbogen Farben + Wei\xDF erzeugt werden.\n\n\nAndere Namen:\n- Neopixel\n- WS2811\n- Dotstar\n- APA102\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   Serielle Daten\n\n### Ausgang\n\n-   Licht\n\n## Kurz-Datenblatt\n\n-   Signal Eingang: 3-5V\n-   Betriebsspannung: 3-5V\n-   ben\xF6tigter Strom: 20mA-60mA pro Pixel\n\nBeispiel:\n10 Pixel * 60mA = 600mA = 0,6A\n\n\n## Siehe Auch\n\n-   falls vorhanden link zu anderem Bauteil / zugeh\xF6rigem part\n\n## library\n\num dieses Bauteil zu benutzen verwende / installiere bitte diese Library: [fastled](https://fastled.io/)\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/pixel_minimal/pixel_minimal.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n", "../../public/mks/parts/mks-Taster/readme.md": "---\ntitle: Taster\ntags: [input, taster, taster_schalter,]\nid: 59\n---\n\n# Taster\n\n![Bauteil](https://makeyourschool.de/wp-content/uploads/2018/10/59_taster_knopf-1024x1024.jpg)\n\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n\n## Beschreibung\n\nein einfacher Taster\n\n<!-- more_details -->\n\nmehr details\n\n## Anschl\xFCsse\n\n### Eingang\n\n-   Mechanische Bet\xE4tigung\n\n### Ausgang\n\n-   ...\n\n## Kurz-Datenblatt\n\n-   Betriebsspannung: 3.3-5V\n\n## Siehe Auch\n\n-   https://makeyourschool.de/maker-ecke/material/taster-knopf/\n\n## library\n\nkeine library n\xF6tig\n\n<!-- TODO: CONTENT change library name -->\n\n## Beispiel\n\nschau dir das Minimal-Beispiel an:\n\n```c++:./examples/taster/taster.ino\n// this should be overwritten!\n```\n\n## Anleitung\n\n<!-- TODO: CONTENT change guide -->\n\n-   nimm Bauteil\n-   Schlie\xDFe an Port D2 an\n-   nehm Beispiel Code\n    -   kopiere von hier dr\xFCber\n    -   oder direkt in der Arduino IDE:\n        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`\n-   Sketch Hochladen\n-   Das Sollte nun passieren:\n    -   die LED Blinkt im 1 Sekunden Takt\n" };
};
const mksGetItems = (mksContent2, folderName, items_dir) => {
  console.groupCollapsed("mksGetItems");
  if (mksContent2[folderName] == void 0) {
    mksContent2[folderName] = {};
  }
  const mksItems = mksContent2[folderName];
  const path_regex = new RegExp(`./${folderName}/(?<item_name>.*)/readme.md`);
  for (const path in items_dir) {
    const { item_name } = path_regex.exec(path).groups;
    const item_name_lc = item_name.toLowerCase();
    mksItems[item_name_lc] = {};
    mksItems[item_name_lc].name = item_name;
    mksItems[item_name_lc].path_readme = path;
    mksItems[item_name_lc].path_base = `mks/${folderName}/${item_name}/`;
    mksItems[item_name_lc].readme = preProcessingMD(
      items_dir[path],
      mksItems[item_name_lc].path_base
    );
    console.log(`${item_name} '${mksItems[item_name_lc].path_base}'`);
  }
  console.groupEnd();
};
const mksGetContent = () => {
  console.group("mksContent");
  let mksContent2 = {
    welcome: {},
    tags: {},
    parts: {}
  };
  const path_base = "../../public/mks/";
  console.log("load welcome readme");
  let temp = { "../../public/mks/readme.md": "---\ntitel: MYS Material\ntags: [welcome, ]\n---\n\n# MYS Material\n\nhier findet ihr eine Liste aller MYS Materialien..\n:tada:\n[mks](https://makeyourschool.de/maker-ecke/material/)\n\nTODO: implement deep-linking to directly jump to Funktionen und Bauteilen\nmaybe with router-view?!\n\n# Funktionen\n" };
  mksContent2.welcome.readme = preProcessingMD(temp["../../public/mks/readme.md"]);
  mksContent2.welcome.path_base = path_base;
  console.log("welcome done.");
  mksGetItems(mksContent2, "tags", getTagsContent());
  mksGetItems(mksContent2, "parts", getPartsContent());
  mksAddPartsToTags(mksContent2);
  console.log("mksContent:", mksContent2);
  console.groupEnd();
  return mksContent2;
};
var mksContent = mksGetContent();
var MKS_Parts_vue_vue_type_style_index_0_scoped_true_lang = "";
var MKS_Parts_vue_vue_type_style_index_1_lang = "";
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Parts",
  setup(__props) {
    console.log("mksContent", mksContent);
    const mks_welcome = ref(mksContent.welcome);
    ref(mksContent.tags);
    const mks_parts = ref(mksContent.parts);
    const check_searchTextInReadme = (readme, item_name) => {
      var _a, _b;
      return (item_name == null ? void 0 : item_name.toLowerCase().includes(searchText.value.toLowerCase())) || readme.content.toLowerCase().includes(searchText.value.toLowerCase()) || ((_b = (_a = readme.data) == null ? void 0 : _a.tags) == null ? void 0 : _b.join(", ").toLowerCase().includes(searchText.value.toLowerCase()));
    };
    const getObjItemsWithSearchTextInReadme = (obj) => {
      const result = {};
      for (const [item_name, item] of Object.entries(obj)) {
        if (check_searchTextInReadme(item.readme, item_name)) {
          result[item_name] = item;
        }
      }
      return result;
    };
    const mks_items_filtered = computed(() => {
      const result = {
        ...getObjItemsWithSearchTextInReadme(mks_parts.value)
      };
      return result;
    });
    const searchText = ref("");
    useQuasar();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$3, {
            source: mks_welcome.value.readme.content,
            "file-path": mks_welcome.value.path_base
          }, null, 8, ["source", "file-path"]),
          createBaseVNode("div", null, [
            createVNode(QInput, {
              rounded: "",
              outlined: "",
              modelValue: searchText.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
              label: "Suche:"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (fn_item, fn_name) => {
              return openBlock(), createElementBlock("li", {
                key: fn_name,
                class: "my-card q-pa-md"
              }, [
                createVNode(PartOverview, {
                  fn_item,
                  mks_parts: mks_parts.value,
                  onClick: ($event) => fn_item.showDetails = true,
                  class: "clickable"
                }, null, 8, ["fn_item", "mks_parts", "onClick"]),
                createVNode(QDialog, {
                  modelValue: fn_item.showDetails,
                  "onUpdate:modelValue": ($event) => fn_item.showDetails = $event,
                  "full-height": "",
                  "full-width": ""
                }, {
                  default: withCtx(() => [
                    createVNode(PartDetails, {
                      fn_item,
                      mks_parts: mks_parts.value
                    }, null, 8, ["fn_item", "mks_parts"])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
var MKS_Parts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ef7c3a7"]]);
export { MKS_Parts as default };
