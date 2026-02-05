import { Q as QInput } from "./QInput-BOheFB98.js";
import { I as createComponent, c as computed, h, O as hSlot, ah as getBtnDesignAttr, Q as QBtn, X as hMergeSlot, H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, E as toDisplayString, s as shallowRef, r as ref, ad as resolveComponent, ac as resolveDynamicComponent, n as unref, p as createElementBlock, F as Fragment, ae as renderList } from "./index-DDNyF-mq.js";
import { u as useFormProps, a as useFormInject } from "./private.use-form-D4pCiTzl.js";
import { Q as QPage } from "./QPage-YKvosvmY.js";
import { Q as QCardSection } from "./QCardSection-Cc30qjSt.js";
import { Q as QCard } from "./QCard-BaK1vPMg.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMDContentStore } from "./mdContent-ByDL_epF.js";
import "./use-key-composition-yHVlRWlk.js";
import "./use-id-CQdL4dLF.js";
import "./use-dark-BBFZK-Qw.js";
import "./readme-BFIu2LGq.js";
import "./about-CHN-XDZK.js";
const QBtnGroup = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          // Options that come from the button specific options first, then from general props
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
const _hoisted_1$1 = ["src", "alt"];
const _hoisted_2$1 = { class: "material_number" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "type" };
const _sfc_main$1 = {
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
              createBaseVNode("img", {
                src: __props.mks_item.path_base + `/` + __props.mks_item.meta.coverImage,
                alt: __props.mks_item.meta.title
              }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "info" }, {
            default: withCtx(() => [
              createBaseVNode("h2", _hoisted_2$1, toDisplayString(__props.mks_item.meta.material_number), 1),
              createBaseVNode("h1", _hoisted_3, toDisplayString(__props.mks_item.meta.title), 1),
              createBaseVNode("h2", _hoisted_4, toDisplayString(__props.mks_item.meta.material_type), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const PartOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ae3c618c"]]);
const _hoisted_1 = { class: "row wrap justify-start items-stretch content-start" };
const _hoisted_2 = { class: "card-wrapper row" };
const _sfc_main = {
  __name: "MKS_Parts",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const mks_welcome = mdContent.mks.welcome;
    const mks_parts = shallowRef(mdContent.mks.parts);
    const mks_parts_sorted = shallowRef(mdContent.mks.parts_sorted);
    console.log("mks_parts_sorted", mks_parts_sorted);
    const filter_by_type = ref("");
    const searchText = ref("");
    const search_in_content = ref(false);
    const mks_items_filtered = computed(() => {
      return mdContent.parts_filtered({
        by_searchText: searchText.value,
        by_material_type: filter_by_type.value,
        in_content: search_in_content.value
      });
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(mks_welcome).content))),
          createBaseVNode("div", _hoisted_1, [
            createVNode(QInput, {
              class: "col-grow",
              rounded: "",
              outlined: "",
              modelValue: searchText.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
              label: "Suche:"
            }, null, 8, ["modelValue"]),
            createVNode(QBtnToggle, {
              rounded: "",
              outlined: "",
              modelValue: filter_by_type.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filter_by_type.value = $event),
              clearable: "",
              options: [
                { label: "Controller", value: "controller" },
                { label: "input", value: "input" },
                { label: "output", value: "output" },
                { label: "shield", value: "shield" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (mks_item, mks_item_name) => {
              return openBlock(), createElementBlock("li", {
                key: mks_item_name,
                class: "my-card q-pa-md"
              }, [
                createVNode(_component_router_link, {
                  to: `/part/${mks_item_name}`,
                  class: "clickable"
                }, {
                  default: withCtx(() => [
                    createVNode(PartOverview, {
                      mks_item,
                      mks_parts: mks_parts.value
                    }, null, 8, ["mks_item", "mks_parts"])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
const MKS_Parts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f741d31e"]]);
export {
  MKS_Parts as default
};
