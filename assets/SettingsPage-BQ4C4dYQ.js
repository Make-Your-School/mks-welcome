import { Q as QSelect } from "./QSelect-BX4hcHJI.js";
import { I as createComponent, c as computed, h, W as QIcon, H as createBlock, v as openBlock, P as withCtx, l as createBaseVNode, E as toDisplayString, n as unref, j as createVNode } from "./index-XdKtUSgL.js";
import { j as useCheckboxEmits, k as useCheckboxProps, l as useCheckbox } from "./use-checkbox-ClSTVCQW.js";
import { Q as QPage } from "./QPage-v68t6wFU.js";
import { u as useMDContentStore } from "./mdContent-fidU6IMQ.js";
import "./use-key-composition-DGXG2sFS.js";
import "./use-id-WlI5qYBX.js";
import "./use-dark-DPwpgoXC.js";
import "./private.use-form-CL53D4wL.js";
import "./scroll-CO99K4mr.js";
import "./use-timeout-CXnUzEth.js";
import "./format-CbRFlRIO.js";
import "./readme-DwNPRO51.js";
import "./about-Cl75P1jE.js";
const QToggle = createComponent({
  name: "QToggle",
  props: {
    ...useCheckboxProps,
    icon: String,
    iconColor: String
  },
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || props.icon
      );
      const color = computed(() => isTrue.value === true ? props.iconColor : null);
      return () => [
        h("div", { class: "q-toggle__track" }),
        h(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          icon.value !== void 0 ? [
            h(QIcon, {
              name: icon.value,
              color: color.value
            })
          ] : void 0
        )
      ];
    }
    return useCheckbox("toggle", getInner);
  }
});
var define_process_env_appinfo_default = { name: "mks-welcome", version: "0.1.1", productName: "MYS MKS", description: "evolution of the material-website", projectUrl: "https://github.com/Make-Your-School/mks-welcome/", previewUrl: "https://make-your-school.github.io/mks-welcome/" };
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const settings = mdContent.settings;
    const appinfo = define_process_env_appinfo_default;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h1", null, toDisplayString(unref(appinfo).productName), 1)
          ]),
          createBaseVNode("section", null, [
            _cache[6] || (_cache[6] = createBaseVNode("h2", null, "Deine App-Einstellungen:", -1)),
            createBaseVNode("div", null, [
              _cache[3] || (_cache[3] = createBaseVNode("h3", null, "Bauteil Übersicht", -1)),
              createVNode(QSelect, {
                rounded: "",
                outlined: "",
                modelValue: unref(settings).sorting,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settings).sorting = $event),
                options: ["recommend", "material_number"],
                label: "Sorting"
              }, null, 8, ["modelValue"]),
              createVNode(QToggle, {
                modelValue: unref(settings).hide_EOL,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settings).hide_EOL = $event),
                icon: "alarm",
                label: "Verberge Bauteile die Nicht mehr verfügbar sind (EOL: End Of Live)"
              }, null, 8, ["modelValue"]),
              _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
              createVNode(QToggle, {
                modelValue: unref(settings).search_in_content,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settings).search_in_content = $event),
                icon: "alarm",
                label: "suche auch in Text-Inhalt der Bauteile (anstatt nur in den Meta-Informationen)"
              }, null, 8, ["modelValue"]),
              _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
