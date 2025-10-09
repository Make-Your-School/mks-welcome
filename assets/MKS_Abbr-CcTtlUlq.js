import { a as QCard, Q as QCardSection } from "./QCard-0w6HqAR7.js";
import { I as createComponent, J as onBeforeUnmount, h, M as Transition, U as useRouterLinkProps, a as getCurrentInstance, r as ref, c as computed, w as watch, V as shallowReactive, W as withDirectives, X as vShow, O as hSlot, Y as QIcon, N as stopAndPrevent, p as createElementBlock, v as openBlock, l as createBaseVNode, D as createTextVNode, Q as resolveComponent, j as createVNode, P as withCtx, Z as watchEffect, $ as useRoute, a0 as useRouter, H as createBlock, F as Fragment, S as renderList, n as unref, R as resolveDynamicComponent } from "./index-Cgg7Px54.js";
import { Q as QItem, a as QItemLabel, b as QItemSection, c as QList } from "./QList-DlMlnRuF.js";
import { Q as QSeparator } from "./QSeparator-CkU0h1Au.js";
import { u as useDarkProps, a as useDark } from "./use-dark-vwiYO3q5.js";
import { u as useId, a as uid } from "./use-id-DNXTGU95.js";
import { u as useModelToggleEmits, a as useModelToggleProps, b as useModelToggle, c as scroll } from "./scroll-Bt9rNqx_.js";
import { Q as QPage } from "./QPage-BrquczHg.js";
const QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
const itemGroups = shallowReactive({});
const LINK_PROPS = Object.keys(useRouterLinkProps);
const QExpansionItem = createComponent({
  name: "QExpansionItem",
  props: {
    ...useRouterLinkProps,
    ...useModelToggleProps,
    ...useDarkProps,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: {},
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "afterShow",
    "afterHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const showing = ref(
      props.modelValue !== null ? props.modelValue : props.defaultOpened
    );
    const blurTargetRef = ref(null);
    const targetUid = useId();
    const { show, hide, toggle } = useModelToggle({ showing });
    let uniqueId, exitGroup;
    const classes = computed(
      () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props.popup === true ? "popup" : "standard"}`
    );
    const contentStyle = computed(() => {
      if (props.contentInsetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: props.contentInsetLevel * 56 + "px"
      };
    });
    const hasLink = computed(
      () => props.disable !== true && (props.href !== void 0 || props.to !== void 0 && props.to !== null && props.to !== "")
    );
    const linkProps = computed(() => {
      const acc = {};
      LINK_PROPS.forEach((key) => {
        acc[key] = props[key];
      });
      return acc;
    });
    const isClickable = computed(
      () => hasLink.value === true || props.expandIconToggle !== true
    );
    const expansionIcon = computed(() => props.expandedIcon !== void 0 && showing.value === true ? props.expandedIcon : props.expandIcon || $q.iconSet.expansionItem[props.denseToggle === true ? "denseIcon" : "icon"]);
    const activeToggleIcon = computed(
      () => props.disable !== true && (hasLink.value === true || props.expandIconToggle === true)
    );
    const headerSlotScope = computed(() => ({
      expanded: showing.value === true,
      detailsId: targetUid.value,
      toggle,
      show,
      hide
    }));
    const toggleAriaAttrs = computed(() => {
      const toggleAriaLabel = props.toggleAriaLabel !== void 0 ? props.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props.label);
      return {
        role: "button",
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-controls": targetUid.value,
        "aria-label": toggleAriaLabel
      };
    });
    watch(() => props.group, (name) => {
      exitGroup !== void 0 && exitGroup();
      name !== void 0 && enterGroup();
    });
    function onHeaderClick(e) {
      hasLink.value !== true && toggle(e);
      emit("click", e);
    }
    function toggleIconKeyboard(e) {
      e.keyCode === 13 && toggleIcon(e, true);
    }
    function toggleIcon(e, keyboard) {
      keyboard !== true && blurTargetRef.value !== null && blurTargetRef.value.focus();
      toggle(e);
      stopAndPrevent(e);
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid();
      }
      if (showing.value === true) {
        itemGroups[props.group] = uniqueId;
      }
      const show2 = watch(showing, (val) => {
        if (val === true) {
          itemGroups[props.group] = uniqueId;
        } else if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
      });
      const group = watch(
        () => itemGroups[props.group],
        (val, oldVal) => {
          if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
            hide();
          }
        }
      );
      exitGroup = () => {
        show2();
        group();
        if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
        exitGroup = void 0;
      };
    }
    function getToggleIcon() {
      const data = {
        class: [
          `q-focusable relative-position cursor-pointer${props.denseToggle === true && props.switchToggleSide === true ? " items-end" : ""}`,
          props.expandIconClass
        ],
        side: props.switchToggleSide !== true,
        avatar: props.switchToggleSide
      };
      const child = [
        h(QIcon, {
          class: "q-expansion-item__toggle-icon" + (props.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: expansionIcon.value
        })
      ];
      if (activeToggleIcon.value === true) {
        Object.assign(data, {
          tabindex: 0,
          ...toggleAriaAttrs.value,
          onClick: toggleIcon,
          onKeyup: toggleIconKeyboard
        });
        child.unshift(
          h("div", {
            ref: blurTargetRef,
            class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
            tabindex: -1
          })
        );
      }
      return h(QItemSection, data, () => child);
    }
    function getHeaderChild() {
      let child;
      if (slots.header !== void 0) {
        child = [].concat(slots.header(headerSlotScope.value));
      } else {
        child = [
          h(QItemSection, () => [
            h(QItemLabel, { lines: props.labelLines }, () => props.label || ""),
            props.caption ? h(QItemLabel, { lines: props.captionLines, caption: true }, () => props.caption) : null
          ])
        ];
        props.icon && child[props.switchToggleSide === true ? "push" : "unshift"](
          h(QItemSection, {
            side: props.switchToggleSide === true,
            avatar: props.switchToggleSide !== true
          }, () => h(QIcon, { name: props.icon }))
        );
      }
      if (props.disable !== true && props.hideExpandIcon !== true) {
        child[props.switchToggleSide === true ? "unshift" : "push"](
          getToggleIcon()
        );
      }
      return child;
    }
    function getHeader() {
      const data = {
        ref: "item",
        style: props.headerStyle,
        class: props.headerClass,
        dark: isDark.value,
        disable: props.disable,
        dense: props.dense,
        insetLevel: props.headerInsetLevel
      };
      if (isClickable.value === true) {
        data.clickable = true;
        data.onClick = onHeaderClick;
        Object.assign(
          data,
          hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
        );
      }
      return h(QItem, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value,
          id: targetUid.value
        }, hSlot(slots.default)),
        [[
          vShow,
          showing.value
        ]]
      );
    }
    function getContent() {
      const node = [
        getHeader(),
        h(QSlideTransition, {
          duration: props.duration,
          onShow,
          onHide
        }, getTransitionChild)
      ];
      if (props.expandSeparator === true) {
        node.push(
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
            dark: isDark.value
          }),
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
            dark: isDark.value
          })
        );
      }
      return node;
    }
    props.group !== void 0 && enterGroup();
    onBeforeUnmount(() => {
      exitGroup !== void 0 && exitGroup();
    });
    return () => h("div", { class: classes.value }, [
      h("div", { class: "q-expansion-item__container relative-position" }, getContent())
    ]);
  }
});
const _hoisted_1$3 = { class: "markdown-body" };
const excerpt$3 = "";
const _sfc_main$4 = {
  __name: "HTML",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "Hyper Text Markup Language", -1)
      ]));
    };
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4,
  excerpt: excerpt$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = { class: "markdown-body" };
const excerpt$2 = "";
const _sfc_main$3 = {
  __name: "I2C",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, _cache[0] || (_cache[0] = [
        createBaseVNode("h1", {
          id: "i%C2%B2c",
          tabindex: "-1"
        }, "I²C", -1),
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
      ]));
    };
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3,
  excerpt: excerpt$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = { class: "markdown-body" };
const excerpt$1 = "";
const _sfc_main$2 = {
  __name: "UART",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[3] || (_cache[3] = createBaseVNode("h1", {
          id: "serielle-schnittstelle",
          tabindex: "-1"
        }, "Serielle Schnittstelle", -1)),
        createBaseVNode("p", null, [
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
          _cache[2] || (_cache[2] = createTextVNode(" = Universal Asynchronous Receiver Transmitter"))
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1))
      ]);
    };
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  excerpt: excerpt$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { class: "markdown-body" };
const excerpt = "";
const _sfc_main$1 = {
  __name: "W3C",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "World Wide Web Consortium", -1)
      ]));
    };
  }
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt
}, Symbol.toStringTag, { value: "Module" }));
const mksAbbrLoad = () => {
  console.groupCollapsed("mksAbbrLoad");
  let mksAbbrList = {};
  const items_dir = /* @__PURE__ */ Object.assign({
    "../../public/mks/abbr/HTML.md": __vite_glob_0_0,
    "../../public/mks/abbr/I2C.md": __vite_glob_0_1,
    "../../public/mks/abbr/UART.md": __vite_glob_0_2,
    "../../public/mks/abbr/W3C.md": __vite_glob_0_3
  });
  console.log("items_dir", items_dir);
  const path_regex = new RegExp(`../../public/mks/abbr/(?<item_name>.*).md`);
  for (const path in items_dir) {
    console.log("path", path);
    console.log("items_dir[path]", items_dir[path]);
    const { item_name } = path_regex.exec(path).groups;
    console.log(`item_name: '${item_name}'`);
    mksAbbrList[item_name] = {};
    mksAbbrList[item_name].name = item_name;
    mksAbbrList[item_name].path_readme = path;
    mksAbbrList[item_name].path_base = `mks/abbr/`;
    mksAbbrList[item_name].content = items_dir[path].default;
  }
  console.log("mksAbbrList:", mksAbbrList);
  console.groupEnd();
  return mksAbbrList;
};
const _sfc_main = {
  __name: "MKS_Abbr",
  props: {
    abbr_name: String
  },
  setup(__props) {
    const props = __props;
    const mks_abbr = mksAbbrLoad();
    console.log("mks_abbr", mks_abbr);
    const expanded = ref({});
    for (const abbr_name of Object.keys(mks_abbr)) {
      expanded.value[abbr_name] = false;
    }
    function focusAbbrDescription(abbr_name) {
      if (abbr_name.startsWith("#")) {
        abbr_name = abbr_name.replace("#", "");
      }
      const selector = `#${abbr_name}`;
      const abbr_el = document.querySelector(selector);
      scrollToElement(abbr_el);
    }
    const { getScrollTarget, setVerticalScrollPosition } = scroll;
    function scrollToElement(el) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 1e3;
      setVerticalScrollPosition(target, offset, duration);
    }
    watchEffect(() => {
      console.log("props.abbr_name changed..", props.abbr_name);
      if (props.abbr_name) {
        focusAbbrDescription(props.abbr_name);
      }
    });
    const route = useRoute();
    watch(
      () => route.hash,
      (newValue, oldValue) => {
        console.log("route hash changed..", oldValue, newValue);
        focusAbbrDescription(newValue);
      }
    );
    const router = useRouter();
    function setHashTo(hash) {
      if (!hash.startsWith("#")) {
        hash = "#" + hash;
      }
      router.push({ hash });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          createVNode(QList, {
            bordered: "",
            class: "rounded-borders"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mks_abbr), (mks_item, mks_item_name) => {
                return openBlock(), createBlock(QExpansionItem, {
                  key: mks_item_name,
                  class: "",
                  "expand-separator": "",
                  modelValue: expanded.value[mks_item_name],
                  "onUpdate:modelValue": ($event) => expanded.value[mks_item_name] = $event,
                  label: mks_item_name,
                  id: mks_item_name,
                  onAfterShow: ($event) => setHashTo(mks_item_name)
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(mks_item.content)))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "label", "id", "onAfterShow"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
