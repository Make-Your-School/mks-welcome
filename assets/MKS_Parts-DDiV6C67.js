import { q as isRuntimeSsrPreHydration, r as ref, o as onMounted, w as watch, c as computed, a as getCurrentInstance, t as onBeforeUpdate, b as inject, v as formKey, x as onBeforeUnmount, y as debounce, z as injectProp, B as stopAndPrevent, C as nextTick, D as onDeactivated, E as onActivated, h, G as prevent, Q as QIcon, H as QSpinner, I as hSlot, J as Transition, K as shouldIgnoreKey, L as client, M as createComponent, N as stop, O as createBlock, m as openBlock, p as withCtx, j as createVNode, P as createBaseVNode, l as createElementBlock, R as createStaticVNode, S as resolveComponent, U as createTextVNode, V as resolveDynamicComponent, F as Fragment, W as renderList } from "./index-DJGcSM7w.js";
import { u as useDarkProps, a as useDark } from "./use-dark-z_lffkF_.js";
import { a as addFocusFn, r as removeFocusFn } from "./focus-manager-TfMniKh0.js";
import { Q as QPage } from "./QPage-CrJqOd1M.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { m as md_obj } from "./readme-B402Cm0f.js";
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
  function update() {
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
  onBeforeUpdate(update);
  update();
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
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
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
    // statement unneeded but avoids future vue implementation changes
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
    const update = (err, msg) => {
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
        update(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update(true);
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
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
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
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) return;
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
    if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) return;
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
    if (shouldIgnoreKey(e) === true || e.altKey === true) return;
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
  return computed(() => {
    if (props.type !== "file") return;
    return getFormDomProps();
  });
}
const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
  return function onComposition(e) {
    if (e.type === "compositionend" || e.type === "change") {
      if (e.target.qComposing !== true) return;
      e.target.qComposing = false;
      onInput(e);
    } else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
      const isComposing = client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true;
      if (isComposing === true) {
        e.target.qComposing = true;
      }
    }
  };
}
const QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
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
    const formDomProps = useFileFormDomProps(
      props
    );
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
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
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
          if (String(v) === emitCachedValue) return;
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
      if (!e || !e.target) return;
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
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
const QCardSection = createComponent({
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
const QCard = createComponent({
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
const _hoisted_1$g = ["innerHTML"];
const _sfc_main$g = {
  __name: "PartOverview",
  props: {
    mks_item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "part-overview" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: __props.mks_item.excerpt
              }, null, 8, _hoisted_1$g)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const PartOverview = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-d46b0f1c"]]);
const _hoisted_1$f = { class: "markdown-body" };
const excerpt$e = "";
const _sfc_main$f = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, _cache[0] || (_cache[0] = [
        createStaticVNode('<hr><h2 id="titel%3A-entfernungtags%3A-%5Bentfernung%2C-input%5Did%3A-17" tabindex="-1">titel: Entfernung tags: [entfernung, input] id: 17</h2><h1 id="entfernung" tabindex="-1">Entfernung</h1><p><img src="/mks-welcome/mks/tags/Entfernung/Yellow%20Tape%20Measure.svg" alt="Maßband"></p><h2 id="funktionen" tabindex="-1">Funktionen</h2><p>Sensoren die Entfernungen Messen können.</p><p>hier ist unter anderem Wichtig in welchem Bereich der jeweilige Sensor messen kann. es kann z.B. sein das der minimale Abstand durch aus 5cm beträgt. auch sind die Genauigkeit sehr unterschiedlich - von wenigen Millimetern Abweichungen bis zu mehreren Centimeter.</p><h2 id="relevante-gr%C3%B6%C3%9Fen%3A" tabindex="-1">Relevante Größen:</h2><ul><li>Messbereich (mm, cm, m)</li><li>Genauigkeit (z.B. <code>+- n cm</code>)</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>ToDo</li></ul>', 11)
      ]));
    };
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f,
  excerpt: excerpt$e
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$e = { class: "markdown-body" };
const excerpt$d = "";
const _sfc_main$e = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, _cache[0] || (_cache[0] = [
        createStaticVNode('<hr><h2 id="title%3A-ledstags%3A-%5Boutput%2C-led%2C-licht%2C-farbe%5D" tabindex="-1">title: LEDs tags: [output, led, licht, Farbe]</h2><h1 id="leds" tabindex="-1">LEDs</h1><p><img src="/mks-welcome/mks/tags/LEDs/led-lamp-green-on.svg" alt="LED"></p><h2 id="funktionen" tabindex="-1">Funktionen</h2><p>Eine LED kann verwendet werden um zustände zu signalisieren oder auch um Licht im sinne von Beleuchtung zu erzeugen.</p><p>es gibt sehr viele verschiedene formen und ausführungen von LEDs.</p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>x</li></ul>', 9)
      ]));
    };
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e,
  excerpt: excerpt$d
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$d = { class: "markdown-body" };
const excerpt$c = "";
const _sfc_main$d = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, _cache[0] || (_cache[0] = [
        createStaticVNode('<hr><h2 id="tags%3A-%5Bmotor%2C-output%5D" tabindex="-1">tags: [motor, output]</h2><h1 id="motoren" tabindex="-1">Motoren</h1><p><img src="/mks-welcome/mks/tags/Motor/cyberscooty-motor-stepper.svg" alt="Motor allgemein"></p><p>TODO: CONTENT change image to general</p><h2 id="funktion" tabindex="-1">Funktion</h2><p>Der Motortreiber übersetzt die schwachen Signale &amp; Spannungen des micro-controllers (Arduino / RaspberryPi) in Starke Spannungen &amp; Ströme um die verschiedenen <a href="#motor">Motoren</a> anzusteuern (zu <em>treiben</em>).</p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><a href="#motor">Motoren</a></li></ul>', 9)
      ]));
    };
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d,
  excerpt: excerpt$c
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$c = { class: "markdown-body" };
const excerpt$b = "";
const _sfc_main$c = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, _cache[0] || (_cache[0] = [
        createStaticVNode('<hr><h2 id="title%3A-motortreibertags%3A-%5Bmotor%2C-motortreiber%2C-output%5Did%3A-70" tabindex="-1">title: Motortreiber tags: [motor, motortreiber, output] id: 70</h2><h1 id="motortreiber" tabindex="-1">Motortreiber</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/70_motortreiber-1024x1024.jpg" alt="Motortreiber allgemein"></p><p>TODO: CONTENT change image to general</p><h2 id="funktion" tabindex="-1">Funktion</h2><p>Wandelt Elektrische Signale in Dreh-Bewegung um.</p><p>Es gibt soooo viele verschiedene Motoren…</p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><a href="#motortreiber">Motortreiber</a></li></ul>', 10)
      ]));
    };
  }
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c,
  excerpt: excerpt$b
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$b = { class: "markdown-body" };
const excerpt$a = "";
const _sfc_main$b = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, _cache[0] || (_cache[0] = [
        createStaticVNode('<hr><h2 id="title%3A-taster-%26-schaltertags%3A-%5Binput%5Did%3A-261" tabindex="-1">title: Taster &amp; Schalter tags: [input] id: 261</h2><h1 id="taster-%26-schalter" tabindex="-1">Taster &amp; Schalter</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/59_taster_knopf-1024x1024.jpg" alt="Taster allgemein"></p><h2 id="funktionen" tabindex="-1">Funktionen</h2><p>Der Taster / Schalter ist ein <em>Input</em>.</p><p>Der Unterschied zwischen Taster und Schalter:</p><ul><li>Taster: nur solange <em>an</em> wie er Betätigt (z.B: gedrückt) wird</li><li>Schalter: Betätigung/Aktion wechselt den Zustand zwischen an und aus</li></ul><p>es gibt diese in sehr vielen verschiedenen Ausführungen.</p><p>wenn ein Taster/Schalter <strong>an</strong> ist sind die Kontakte verbunden. wenn er <strong>aus</strong> ist sind die kontakte unverbunden. diesen unterschied kann ein uC <em>messen</em>.</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3><ul><li>Mechanische Betätigung</li></ul><h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>Zwei <em>Pins</em> werden *verbunden</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><p>siehe bauteile</p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><em>-</em></li></ul><h2 id="weiterf%C3%BChrende-informationen%3A" tabindex="-1">Weiterführende Informationen:</h2><ul><li><a href="https://de.wikipedia.org/wiki/Schalter_(Elektrotechnik)">Schalter (Elektrotechnik) – Wikipedia Artikel</a></li><li><a href="https://de.wikipedia.org/wiki/Positionsschalter">Positionsschalter – Wikipedia Artikel</a></li><li><a href="https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe">GPIO – Wikipedia Artikel</a></li><li>library für <em>tasten-events</em> <a href="https://github.com/s-light/slight_ButtonInput/">slight_ButtonInput</a> (kann direkt in der IDE installiert werden)</li></ul>', 21)
      ]));
    };
  }
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b,
  excerpt: excerpt$a
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$a = { class: "markdown-body" };
const excerpt$9 = "";
const _sfc_main$a = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        _cache[2] || (_cache[2] = createStaticVNode('<hr><h2 id="title%3A-kippschaltertags%3A-%5Binput%2C-taster_schalter%2C-schalter%2C-lage%2C-orientierung%2C-position%5Did%3A-24" tabindex="-1">title: Kippschalter tags: [input, taster_schalter, schalter, lage, orientierung, position] id: 24</h2><h1 id="kippschalter" tabindex="-1">Kippschalter</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/24_kippschalter-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>kurz-Beschreibung</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3>', 9)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("I2C")
              ])),
              abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("h1", null, "I²C", -1),
                createBaseVNode("p", null, "I²C InterInterCircuit", -1),
                createBaseVNode("p", null, [
                  createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                  createBaseVNode("em", null, "Controller"),
                  createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                  createBaseVNode("em", null, "Geräte"),
                  createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                  createBaseVNode("em", null, "Hausnummer"),
                  createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
                ], -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[3] || (_cache[3] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>High Power / High Voltage</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 5-12V</li><li>Ausgang Strom Max: 2A</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>falls vorhanden link zu anderem Bauteil / zugehörigem part</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: keine library benötigt.</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 10)),
        createVNode(_component_MDCode, {
          content: "// TODO: CONTENT: füge minimal beispiel ein\n\nvoid setup() {\n    // schreibe alle aufrufe hier rein die ein einziges mal beim starten\n    // ausgeführt werden sollen.\n}\n\nvoid loop() {\n    // aller code hier wird sehr schnell und unendlich oft wiederholt.\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/grove_kippschalter_minimal/grove_kippschalter_minimal.ino",
          fileExists: "true"
        }),
        _cache[4] || (_cache[4] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a,
  excerpt: excerpt$9
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$9 = { class: "markdown-body" };
const excerpt$8 = "";
const _sfc_main$9 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        _cache[2] || (_cache[2] = createStaticVNode('<hr><h2 id="title%3A-magnetschaltertags%3A-%5Binput%2C-taster_schalter%2C-schalter%2C-taster_taster_schalter%2C-schalter%2C-taster%2C-magnet%5Did%3A-28" tabindex="-1">title: Magnetschalter tags: [input, taster_schalter, schalter, taster_taster_schalter, schalter, taster, magnet] id: 28</h2><h1 id="magnetschalter" tabindex="-1">Magnetschalter</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/28_magnetschalter-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>kurz-Beschreibung</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3>', 9)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("I2C")
              ])),
              abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("h1", null, "I²C", -1),
                createBaseVNode("p", null, "I²C InterInterCircuit", -1),
                createBaseVNode("p", null, [
                  createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                  createBaseVNode("em", null, "Controller"),
                  createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                  createBaseVNode("em", null, "Geräte"),
                  createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                  createBaseVNode("em", null, "Hausnummer"),
                  createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
                ], -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[3] || (_cache[3] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>High Power / High Voltage</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 5-12V</li><li>Ausgang Strom Max: 2A</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>falls vorhanden link zu anderem Bauteil / zugehörigem part</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 10)),
        createVNode(_component_MDCode, {
          content: "// TODO: CONTENT: füge minimal beispiel ein\n\nvoid setup() {\n    // schreibe alle aufrufe hier rein die ein einziges mal beim starten ausgeführt werden sollen.\n}\n\nvoid loop() {\n    // aller code hier wird sehr schnell und unendlich oft wiederholt.\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/grove_magnetschalter_minimal/grove_magnetschalter_minimal.ino",
          fileExists: "true"
        }),
        _cache[4] || (_cache[4] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9,
  excerpt: excerpt$8
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = { class: "markdown-body" };
const _hoisted_2$1 = {
  id: "title%3A-grove-motortreiber-()tags%3A-%5Boutput%2C-aktor%2C-motortreiber%2C-motor%2C-i2c%5Did%3A-70",
  tabindex: "-1"
};
const _hoisted_3$1 = {
  id: "grove-motortreiber",
  tabindex: "-1"
};
const excerpt$7 = "";
const _sfc_main$8 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _cache[9] || (_cache[9] = createBaseVNode("hr", null, null, -1)),
        createBaseVNode("h2", _hoisted_2$1, [
          _cache[2] || (_cache[2] = createTextVNode("title: Grove Motortreiber (")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("I2C")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("h1", null, "I²C", -1),
              createBaseVNode("p", null, "I²C InterInterCircuit", -1),
              createBaseVNode("p", null, [
                createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                createBaseVNode("em", null, "Controller"),
                createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                createBaseVNode("em", null, "Geräte"),
                createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                createBaseVNode("em", null, "Hausnummer"),
                createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
              ], -1)
            ])),
            _: 1
          }),
          _cache[3] || (_cache[3] = createTextVNode(") tags: [output, aktor, motortreiber, motor, i2c] id: 70"))
        ]),
        createBaseVNode("h1", _hoisted_3$1, [
          _cache[6] || (_cache[6] = createTextVNode("Grove motortreiber ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("I2C")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("h1", null, "I²C", -1),
              createBaseVNode("p", null, "I²C InterInterCircuit", -1),
              createBaseVNode("p", null, [
                createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                createBaseVNode("em", null, "Controller"),
                createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                createBaseVNode("em", null, "Geräte"),
                createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                createBaseVNode("em", null, "Hausnummer"),
                createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
              ], -1)
            ])),
            _: 1
          })
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("p", null, "mks Nr 70", -1)),
        _cache[11] || (_cache[11] = createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: "https://makeyourschool.de/wp-content/uploads/2018/10/70_motortreiber-1024x1024.jpg",
            alt: "Bauteil"
          })
        ], -1)),
        _cache[12] || (_cache[12] = createBaseVNode("h2", {
          id: "beschreibung",
          tabindex: "-1"
        }, "Beschreibung", -1)),
        _cache[13] || (_cache[13] = createBaseVNode("p", null, "kurz-Beschreibung", -1)),
        _cache[14] || (_cache[14] = createBaseVNode("p", null, "mehr details", -1)),
        _cache[15] || (_cache[15] = createBaseVNode("h2", {
          id: "anschl%C3%BCsse",
          tabindex: "-1"
        }, "Anschlüsse", -1)),
        _cache[16] || (_cache[16] = createBaseVNode("h3", {
          id: "eingang",
          tabindex: "-1"
        }, "Eingang", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode("I2C")
              ])),
              abbrDescription: withCtx(() => _cache[8] || (_cache[8] = [
                createBaseVNode("h1", null, "I²C", -1),
                createBaseVNode("p", null, "I²C InterInterCircuit", -1),
                createBaseVNode("p", null, [
                  createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                  createBaseVNode("em", null, "Controller"),
                  createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                  createBaseVNode("em", null, "Geräte"),
                  createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                  createBaseVNode("em", null, "Hausnummer"),
                  createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
                ], -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[17] || (_cache[17] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>High Power / High Voltage</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 5-12V</li><li>Ausgang Strom Max: 1A</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>falls vorhanden link zu anderem Bauteil / zugehörigem part</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 10)),
        createVNode(_component_MDCode, {
          content: "// this should be overwritten!\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/grove_motortreiber_minimal/grove_motortreiber_minimal.ino",
          fileExists: "undefined"
        }),
        _cache[18] || (_cache[18] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8,
  excerpt: excerpt$7
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$7 = { class: "markdown-body" };
const excerpt$6 = "";
const _sfc_main$7 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        _cache[2] || (_cache[2] = createStaticVNode('<hr><h2 id="title%3A-grove-schaltertags%3A-%5Binput%2C-taster_schalter%2C-schalter%2C-grove%5Did%3A-61" tabindex="-1">title: Grove Schalter tags: [input, taster_schalter, schalter, grove] id: 61</h2><h1 id="schalter" tabindex="-1">Schalter</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/61_schalter-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>kurz-Beschreibung</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3>', 9)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("I2C")
              ])),
              abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("h1", null, "I²C", -1),
                createBaseVNode("p", null, "I²C InterInterCircuit", -1),
                createBaseVNode("p", null, [
                  createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                  createBaseVNode("em", null, "Controller"),
                  createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                  createBaseVNode("em", null, "Geräte"),
                  createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                  createBaseVNode("em", null, "Hausnummer"),
                  createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
                ], -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[3] || (_cache[3] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>High Power / High Voltage</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 5-12V</li><li>Ausgang Strom Max: 2A</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>falls vorhanden link zu anderem Bauteil / zugehörigem part</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 10)),
        createVNode(_component_MDCode, {
          content: "// TODO: CONTENT: füge minimal beispiel ein\n\nvoid setup() {\n    // schreibe alle aufrufe hier rein die ein einziges mal beim starten ausgeführt werden sollen.\n}\n\nvoid loop() {\n    // aller code hier wird sehr schnell und unendlich oft wiederholt.\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/grove_schalter_minimal/grove_schalter_minimal.ino",
          fileExists: "true"
        }),
        _cache[4] || (_cache[4] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7,
  excerpt: excerpt$6
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$6 = { class: "markdown-body" };
const _hoisted_2 = {
  id: "title%3A-grove-%E2%80%93-serial-bluetooth-v3.0tags%3A-%5Binput%2C-output%2C-kommunikation%2C-%2C-funk%2C-bluetooth%5Did%3A-53",
  tabindex: "-1"
};
const _hoisted_3 = { href: "https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter" };
const excerpt$5 = "";
const _sfc_main$6 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _cache[14] || (_cache[14] = createBaseVNode("hr", null, null, -1)),
        createBaseVNode("h2", _hoisted_2, [
          _cache[2] || (_cache[2] = createTextVNode("title: Grove – Serial Bluetooth V3.0 tags: [input, output, kommunikation, ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("UART")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
              createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
              createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
            ])),
            _: 1
          }),
          _cache[3] || (_cache[3] = createTextVNode(", funk, bluetooth] id: 53"))
        ]),
        _cache[15] || (_cache[15] = createBaseVNode("h1", {
          id: "grove-%E2%80%93-serial-bluetooth-v3.0",
          tabindex: "-1"
        }, "Grove – Serial Bluetooth V3.0", -1)),
        _cache[16] || (_cache[16] = createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: "https://makeyourschool.de/wp-content/uploads/2018/10/53_bluetooth-modul-1024x1024.jpg",
            alt: "Seeed Studio Grove – Serial Bluetooth V3.0"
          })
        ], -1)),
        _cache[17] || (_cache[17] = createBaseVNode("h2", {
          id: "beschreibung",
          tabindex: "-1"
        }, "Beschreibung", -1)),
        _cache[18] || (_cache[18] = createBaseVNode("p", null, "Das Bluetooth-Modul ermöglicht es Informationen, Befehle und Daten kabellos zwischen mehreren Endgeräten oder Mikrocontrollern zu übertragen. So können beispielsweise zwei Arduinos untereinander oder auch ein Arduino mit einem Smartphone / Laptop kommunizieren.", -1)),
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode("Damit das funktioniert, wird auf dem Smartphone eine App benötigt, über die Befehle empfangen und gesendet werden können. Empfehlungen findet ihr weiter unten. Das Bluetooth-Modul lässt sich direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi über die serielle Schnittstelle ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("UART")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
              createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
              createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
            ])),
            _: 1
          }),
          _cache[7] || (_cache[7] = createTextVNode(" anschließen und zusätzlich über bestimmte Befehle programmieren. So kann beispielsweise eine Pin oder der angezeigte Bluetooth-Name eingestellt werden."))
        ]),
        _cache[19] || (_cache[19] = createBaseVNode("h2", {
          id: "anschl%C3%BCsse",
          tabindex: "-1"
        }, "Anschlüsse", -1)),
        _cache[20] || (_cache[20] = createBaseVNode("h3", {
          id: "eingang",
          tabindex: "-1"
        }, "Eingang", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode("UART")
              ])),
              abbrDescription: withCtx(() => _cache[9] || (_cache[9] = [
                createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
                createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
                createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[21] || (_cache[21] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>Bluetooth</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 5V</li><li>Betriebsspannung: 5V</li><li>Fully Qualified Bluetooth V2.0+EDR</li></ul><h2 id="library" tabindex="-1">library</h2><p>Um dieses Bauteil zu verwenden, wird lediglich die Bibliothek “SoftwareSerial” benötigt. (diese ist schon fest in die Arduino IDE integriert - du musst nichts installieren.)</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>Der Beispiel-Code ist (vorerst) im Ordner “examples” zu finden.</p>', 8)),
        createVNode(_component_MDCode, {
          content: `// Einfacher Test: Sende Daten des Seriellen-Ports an das Bluetooth module

#include <SoftwareSerial.h>

// auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define RxD 6
// auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)
#define TxD 7

// Bluetoothmodul an D6 auf dem Grove Shield anschließen
SoftwareSerial Bluetooth(RxD, TxD);

char command = '0';

void setup() {
    Serial.begin(9600);

    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    Bluetooth.begin(9600);

    delay(100);
    Serial.flush();
    Bluetooth.flush();

    Serial.println("Los geht's");
}

void loop() {
    // Daten vom Bluetooth-Modul empfangen und an PC weiterleiten
    if (Bluetooth.available()) {
        command = Bluetooth.read();
        Serial.write(command);
    }

    // Daten vom PC (serieller Monitor) an das Bluetooth-Modul senden
    if (Serial.available()) {
        Bluetooth.write(Serial.read());
    }
}
`,
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/GroveSerialBluetoothV3.0_minimal/GroveSerialBluetoothV3.0_minimal.ino",
          fileExists: "true"
        }),
        _cache[22] || (_cache[22] = createStaticVNode('<h2 id="anleitungen" tabindex="-1">Anleitungen</h2><p>Grundsätzlich:</p><ul><li>Bluetooth-Modul am Arduino anschließen (am besten über das Grove Shield). Den richtigen Port entnehmt ihr dem Beispiel-Code</li><li>Sobald der Arduino mit Strom versorgt wird, sollte das Bluetooth-Modul anfangen zu blinken.</li></ul><h3 id="bluetooth-modul-konfigurieren" tabindex="-1">Bluetooth-Modul konfigurieren</h3><p>Das BT-Modul kann über sogenannte AT-Befehle konfiguriert werden. Diese können händisch in der Arduino IDE über den seriellen Monitor verschickt werden. Dies muss nur einmalig gemacht werden. Das Modul speichert die Konfiguration dauerhaft. Damit das BT-Modul AT-Befehle korrekt verarbeitet müssen drei Bedingungen erfüllt sein:</p><ul><li>Der Beispiel-Code (oder ein vergleichbarer Sketch) muss auf den Arduino aufgespielt sein.</li><li>Der serielle Monitor auf dem PC muss auf “No line ending” eingestellt sein.</li><li>Es darf keine aktive Bluetoothverbindung bestehen (LED muss blinken).</li></ul><p>Wenn alles korrekt funktioniert, antwortet das Bluetooth-Modul auf jeden AT-Befehl mit “OK”.</p><p>Liste der wichtigsten AT-Befehle (Optionen sind in [ ] angegeben (keine Leerzeichen einfügen!)):</p><table><thead><tr><th>Befehl</th><th>Funktion</th></tr></thead><tbody><tr><td>AT</td><td>Verbindung testen</td></tr><tr><td>AT+DEFAULT</td><td>Auf Werkszustand zurücksetzen</td></tr><tr><td>AT+ROLE[S/M/?]</td><td>Slave oder Master aktivieren bzw. aktuelle Einstellung abfragen (Standard: Slave)</td></tr><tr><td>AT+NAME[…/?]</td><td>Name einstellen/abfragen (Standard: HMSoft)</td></tr><tr><td>AT+PIN[…/?]</td><td>Pin einstellen/abfragen (Standard: 1234)</td></tr><tr><td>AT+CLEAR</td><td>Letzte Bluetooth-Verbindung löschen</td></tr><tr><td>AT+TEMP?</td><td>Temperatur des BT-Moduls ausgeben</td></tr><tr><td>AT+AUTH[0/1/?]</td><td>Authentifizierung einstellen bzw. abfragen (Standard: 0)</td></tr><tr><td>AT+VERSION</td><td>Firmware-Version ausgeben</td></tr><tr><td>AT+RESTART</td><td>BT-Modul neu starten</td></tr></tbody></table><h3 id="zwei-bluetooth-module-miteinander-verbinden" tabindex="-1">Zwei Bluetooth-Module miteinander verbinden</h3><ul><li>Beide Module auf Werkszustand zurücksetzen (oder wie gewünscht konfigurieren. Name, Pin etc. müssen auf beiden Modulen identisch sein!)</li><li>Eines der beiden Module als Master konfigurieren</li><li>Warten. Die beiden Module verbinden sich nun automatisch</li></ul><h3 id="bluetooth-modul-und-smartphone-verbinden" tabindex="-1">Bluetooth-Modul und Smartphone verbinden</h3><ul><li>Bluetooth-Modul auf Werkszustand zurücksetzen (oder wie gewünscht konfigurieren)</li><li>Auf dem Smartphone in die Bluetooth-Einstellungen gehen und nach neuen Geräten suchen. Nach einigen Sekunden sollte das Bluetooth-Modul als “HMSoft” auftauchen.</li><li>“HMSoft” auswählen und PIN eingeben (Standard: 1234)</li><li>In vielen Fällen wird sich das Smartphone zwar koppeln aber keine Verbindung aufbauen können. Das ist nicht schlimm.</li><li>Eine der empfohlenen Bluetooth-Apps öffnen (s. Links zum Google Play Store) und innerhalb der App mit HMSoft verbinden</li></ul><h4 id="bluetooth-apps" tabindex="-1">Bluetooth-Apps</h4><ul><li><a href="https://play.google.com/store/apps/details?id=com.giristudio.hc05.bluetooth.arduino.control">Google Play Store – Bluetooth Arduino Control</a></li><li><a href="https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal&amp;hl=de">Google Play Store – Serial Bluetooth Terminal</a></li><li><a href="https://f-droid.org/en/packages/net.bluetoothviewer/">F-Droid - Bluetooth Viewer (LITE)</a></li><li><a href="https://f-droid.org/en/packages/priv.wh201906.serialtest/">F-Droid - SerialTest (kann auch Bluetooth)</a></li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><a href="http://wiki.seeedstudio.com/Grove-Serial_Bluetooth_v3.0/">Seeed Studio Wiki – Bluetooth</a></li></ul><h2 id="projektbeispiele" tabindex="-1">Projektbeispiele</h2><ul><li><a href="https://funduino.de/tutorial-hc-05-und-hc-06-bluetooth">Funduino – Bluetooth (nur ein anderes Modul)</a></li></ul><h2 id="weiterf%C3%BChrende-hintergrundinformationen" tabindex="-1">Weiterführende Hintergrundinformationen</h2>', 20)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              createVNode(_component_MDAbbr, null, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("UART")
                ])),
                abbrDescription: withCtx(() => _cache[11] || (_cache[11] = [
                  createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
                  createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
                  createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
                ])),
                _: 1
              }),
              _cache[12] || (_cache[12] = createTextVNode(" – Wikipedia Artikel"))
            ])
          ]),
          _cache[13] || (_cache[13] = createBaseVNode("li", null, [
            createBaseVNode("a", { href: "https://de.wikipedia.org/wiki/Bluetooth" }, "Bluetooth – Wikipedia Artikel")
          ], -1))
        ])
      ]);
    };
  }
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6,
  excerpt: excerpt$5
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$5 = { class: "markdown-body" };
const excerpt$4 = "";
const _sfc_main$5 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[0] || (_cache[0] = createStaticVNode('<hr><h2 id="title%3A-grove-tastertags%3A-%5Binput%2C-taster_taster_schalter%2C-schalter%2C-taster%2C-grove%5Did%3A-60" tabindex="-1">title: Grove Taster tags: [input, taster_taster_schalter, schalter, taster, grove] id: 60</h2><h1 id="taster-(grove)" tabindex="-1">Taster (Grove)</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/60_taster_knopf_platine-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>ein einfacher Taster. auf einer Platine mit einem Grove-Buchse verlötete. dadurch ist der Anschluss super einfach 😃</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3><ul><li>Mechanische Betätigung</li></ul><h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>5V Signal (auf Grove Buchse)</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Betriebsspannung: 3.3-5V</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><ul><li></li></ul></li></ul><h2 id="library" tabindex="-1">library</h2><p>keine library nötig.</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 20)),
        createVNode(_component_MDCode, {
          content: "const int tasterPin = 2;\n\nvoid setup() {\n    Serial.begin(115200);\n    pinMode(tasterPin, INPUT);\n    delay(10);\n}\n\nvoid loop() {\n    Serial.println(digitalRead(tasterPin));\n    delay(500);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/taster/taster.ino",
          fileExists: "true"
        }),
        _cache[1] || (_cache[1] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5,
  excerpt: excerpt$4
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = { class: "markdown-body" };
const excerpt$3 = "";
const _sfc_main$4 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[2] || (_cache[2] = createStaticVNode('<hr><h2 id="titel%3A-grove-ultraschall-entfernungsmessertags%3A-%5Binput%2C-entfernung%2C-grove%5Did%3A-17" tabindex="-1">titel: Grove Ultraschall Entfernungsmesser tags: [input, entfernung, grove] id: 17</h2><h1 id="grove-ultraschall-entfernungsmesser" tabindex="-1">Grove Ultraschall Entfernungsmesser</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/17_ultraschallentfernungssensor-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>kurz-Beschreibung</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3>', 9)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_MDAbbr, null, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("I2C")
              ])),
              abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("h1", null, "I²C", -1),
                createBaseVNode("p", null, "I²C InterInterCircuit", -1),
                createBaseVNode("p", null, [
                  createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                  createBaseVNode("em", null, "Controller"),
                  createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                  createBaseVNode("em", null, "Geräte"),
                  createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                  createBaseVNode("em", null, "Hausnummer"),
                  createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
                ], -1)
              ])),
              _: 1
            })
          ])
        ]),
        _cache[3] || (_cache[3] = createStaticVNode('<h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>High Power / High Voltage</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 5-12V</li><li>Ausgang Strom Max: 2A</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>x</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an</p>', 10)),
        createVNode(_component_MDCode, {
          content: "// TODO: CONTENT: füge minimal beispiel ein\n\nvoid setup() {\n    // schreibe alle aufrufe hier rein die ein einziges mal beim starten ausgeführt werden sollen.\n}\n\nvoid loop() {\n    // aller code hier wird sehr schnell und unendlich oft wiederholt.\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/BauteilTemplate_minimal/BauteilTemplate_minimal.ino",
          fileExists: "true"
        }),
        _cache[4] || (_cache[4] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4,
  excerpt: excerpt$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$3 = { class: "markdown-body" };
const excerpt$2 = "";
const _sfc_main$3 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[0] || (_cache[0] = createStaticVNode('<hr><h2 id="tags%3A-%5Boutput%2C-leds%2C-licht%5Did%3A-65" tabindex="-1">tags: [output, leds, licht] id: 65</h2><h1 id="pixel-led-streifen" tabindex="-1">Pixel LED-Streifen</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/08/65_led-streifen-1024x1024.jpg" alt="LED-Streifen"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>LED-Streifen sind Flexible Bänder auf denen in bestimmtem Abstand <code>Adresierbare LED&#39;s</code> aufgelötete sind.</p><p>jeder <em>Pixel</em> beinhaltet einen kleinen controller chip (meist schwarzen - dem LED-Treiber) und den meist drei eigentlichen LEDs in den Licht-Grundfarben Rot, Grün und Blau. Jeder <em>Pixel</em> kann einzeln <em>Adressiert</em> werden (Entspricht einem Haus in einer Straße). dabei können alle drei Grundfarben einzeln in ihrere Helligkeit (255 Stufen) eingestellt werden - dadurch können alle Regenbogen Farben + Weiß erzeugt werden.</p><p>Andere Namen:</p><ul><li>Neopixel</li><li>WS2811</li><li>Dotstar</li><li>APA102</li></ul><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3><ul><li>Serielle Daten</li></ul><h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>Licht</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Signal Eingang: 3-5V</li><li>Betriebsspannung: 3-5V</li><li>benötigter Strom: 20mA-60mA pro Pixel</li></ul><p>Beispiel: 10 Pixel * 60mA = 600mA = 0,6A</p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li>falls vorhanden link zu anderem Bauteil / zugehörigem part</li></ul><h2 id="library" tabindex="-1">library</h2><p>um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: <a href="https://fastled.io/">fastled</a></p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 23)),
        createVNode(_component_MDCode, {
          content: "// TODO: CONTENT: füge minimal beispiel ein\n\nvoid setup() {\n    // schreibe alle aufrufe hier rein die ein einziges mal beim starten ausgeführt werden sollen.\n}\n\nvoid loop() {\n    // aller code hier wird sehr schnell und unendlich oft wiederholt.\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/pixel_minimal/pixel_minimal.ino",
          fileExists: "true"
        }),
        _cache[1] || (_cache[1] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3,
  excerpt: excerpt$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = { class: "markdown-body" };
const excerpt$1 = "";
const _sfc_main$2 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[0] || (_cache[0] = createStaticVNode('<hr><h2 id="title%3A-tastertags%3A-%5Binput%2C-taster%2C-taster_schalter%2C%5Did%3A-59" tabindex="-1">title: Taster tags: [input, taster, taster_schalter,] id: 59</h2><h1 id="taster" tabindex="-1">Taster</h1><p><img src="https://makeyourschool.de/wp-content/uploads/2018/10/59_taster_knopf-1024x1024.jpg" alt="Bauteil"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>ein einfacher Taster</p><p>mehr details</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3><ul><li>Mechanische Betätigung</li></ul><h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>…</li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Betriebsspannung: 3.3-5V</li></ul><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><a href="https://makeyourschool.de/maker-ecke/material/taster-knopf/">https://makeyourschool.de/maker-ecke/material/taster-knopf/</a></li></ul><h2 id="library" tabindex="-1">library</h2><p>keine library nötig</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 20)),
        createVNode(_component_MDCode, {
          content: "const int tasterPin = 2;\n\nvoid setup() {\n    Serial.begin(115200);\n    pinMode(tasterPin, INPUT_PULLUP);\n    delay(10);\n}\n\nvoid loop() {\n    Serial.println(digitalRead(tasterPin));\n    delay(500);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/taster/taster.ino",
          fileExists: "true"
        }),
        _cache[1] || (_cache[1] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>nimm Bauteil</li><li>Schließe an Port D2 an</li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber</li><li>oder direkt in der Arduino IDE: <code>Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>die LED Blinkt im 1 Sekunden Takt</li></ul></li></ul>', 2))
      ]);
    };
  }
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  excerpt: excerpt$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = { class: "markdown-body" };
const excerpt = "";
const _sfc_main$1 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
        createBaseVNode("hr", null, null, -1),
        createBaseVNode("h2", {
          id: "titel%3A-mys-materialtags%3A-%5Bwelcome%2C-%5D",
          tabindex: "-1"
        }, "titel: MYS Material tags: [welcome, ]", -1),
        createBaseVNode("h1", {
          id: "mys-material",
          tabindex: "-1"
        }, "MYS Material", -1),
        createBaseVNode("p", null, [
          createTextVNode("hier findet ihr eine Liste aller MYS Materialien… 🎉 "),
          createBaseVNode("a", { href: "https://makeyourschool.de/maker-ecke/material/" }, "mks")
        ], -1),
        createBaseVNode("p", null, "TODO: implement deep-linking to directly jump to Funktionen und Bauteilen maybe with router-view?!", -1),
        createBaseVNode("h1", {
          id: "funktionen",
          tabindex: "-1"
        }, "Funktionen", -1)
      ]));
    };
  }
};
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt
}, Symbol.toStringTag, { value: "Module" }));
const mksAddPartsToTags = (mksContent2) => {
  console.group("mksAddPartsToTags");
  const mksTags = mksContent2.tags;
  const mksParts = mksContent2.parts;
  console.log("mksTags", mksTags);
  for (const [tagname, tag] of Object.entries(mksTags)) {
    console.log(`tag '${tagname}':`, tag);
    if (tag.parts == void 0) {
      tag.parts = {};
    }
  }
  for (const [part_name, part] of Object.entries(mksParts)) {
    const part_tags = part.meta.tags;
    if (part_tags) {
      for (const part_tag of part_tags) {
        if (mksTags[part_tag]) {
          mksTags[part_tag].parts[part_name] = part;
        }
      }
    }
  }
  console.groupEnd();
};
const getTagsContent = () => {
  return /* @__PURE__ */ Object.assign({
    "../../public/mks/tags/Entfernung/readme.md": __vite_glob_0_0,
    "../../public/mks/tags/LEDs/readme.md": __vite_glob_0_1,
    "../../public/mks/tags/Motor/readme.md": __vite_glob_0_2,
    "../../public/mks/tags/Motortreiber/readme.md": __vite_glob_0_3,
    "../../public/mks/tags/Taster_Schalter/readme.md": __vite_glob_0_4
  });
};
const getPartsContent = () => {
  return /* @__PURE__ */ Object.assign({
    "../../public/mks/parts/mks-Endschalter/readme.md": md_obj,
    "../../public/mks/parts/mks-GroveKippschalter/readme.md": __vite_glob_1_1,
    "../../public/mks/parts/mks-GroveMagnetschalter/readme.md": __vite_glob_1_2,
    "../../public/mks/parts/mks-GroveMotortreiberI2C/readme.md": __vite_glob_1_3,
    "../../public/mks/parts/mks-GroveSchalter/readme.md": __vite_glob_1_4,
    "../../public/mks/parts/mks-GroveSerialBluetoothV3.0/readme.md": __vite_glob_1_5,
    "../../public/mks/parts/mks-GroveTaster/readme.md": __vite_glob_1_6,
    "../../public/mks/parts/mks-GroveUltraschall/readme.md": __vite_glob_1_7,
    "../../public/mks/parts/mks-Pixel-LED-Streifen/readme.md": __vite_glob_1_8,
    "../../public/mks/parts/mks-Taster/readme.md": __vite_glob_1_9
  });
};
const extractFrontmatterImports = (item) => {
  const exclude = ["default", "excerpt"];
  const frontmatterKeys = Object.keys(item).filter((key) => !exclude.includes(key));
  return frontmatterKeys.reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
  }, {});
};
const mksGetItems = (mksContent2, folderName, items_dir) => {
  console.groupCollapsed("mksGetItems");
  if (mksContent2[folderName] == void 0) {
    mksContent2[folderName] = {};
  }
  const mksItems = mksContent2[folderName];
  const path_regex = new RegExp(`./${folderName}/(?<item_name>.*)/readme.md`);
  for (const path in items_dir) {
    const importedObj = items_dir[path];
    console.log("importedObj", importedObj);
    const { item_name } = path_regex.exec(path).groups;
    const item_name_lc = item_name.toLowerCase();
    mksItems[item_name_lc] = {};
    mksItems[item_name_lc].name = item_name;
    mksItems[item_name_lc].path_readme = path;
    mksItems[item_name_lc].path_base = `mks/${folderName}/${item_name}/`;
    mksItems[item_name_lc].readme = importedObj;
    mksItems[item_name_lc].content = importedObj.default;
    mksItems[item_name_lc].excerpt = importedObj.excerpt;
    mksItems[item_name_lc].meta = extractFrontmatterImports(importedObj);
    console.log(`${item_name} '${mksItems[item_name_lc].path_base}'`);
  }
  console.log("mksItems", mksItems);
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
  const importedObj = Object.assign({
    "../../public/mks/readme.md": __vite_glob_2_0
  })["../../public/mks/readme.md"];
  console.log("importedObj", importedObj);
  mksContent2.welcome.path_base = path_base;
  mksContent2.welcome.readme = importedObj;
  mksContent2.welcome.content = importedObj.default;
  mksContent2.welcome.excerpt = importedObj.excerpt;
  mksContent2.welcome.meta = extractFrontmatterImports(importedObj);
  console.log("welcome done.");
  mksGetItems(mksContent2, "tags", getTagsContent());
  mksGetItems(mksContent2, "parts", getPartsContent());
  mksAddPartsToTags(mksContent2);
  console.log("mksContent:", mksContent2);
  console.groupEnd();
  return mksContent2;
};
const mksContent = mksGetContent();
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Parts",
  setup(__props) {
    console.log("mksContent", mksContent);
    const mks_welcome = ref(mksContent.welcome);
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
        // ...getObjItemsWithSearchTextInReadme(mks_tags.value),
        ...getObjItemsWithSearchTextInReadme(mks_parts.value)
      };
      return result;
    });
    const searchText = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(mks_welcome.value.readme.default))),
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (mks_item, mks_item_name) => {
              return openBlock(), createElementBlock("li", {
                key: mks_item_name,
                class: "my-card q-pa-md"
              }, [
                createVNode(PartOverview, {
                  mks_item,
                  mks_parts: mks_parts.value,
                  onClick: ($event) => mks_item.showDetails = true,
                  class: "clickable"
                }, null, 8, ["mks_item", "mks_parts", "onClick"])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
const MKS_Parts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14000118"]]);
export {
  MKS_Parts as default
};
