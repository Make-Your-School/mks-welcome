import { r as ref, w as watch, l as createElementBlock, j as createVNode, u as unref, m as openBlock, n as renderSlot, p as withCtx } from "./index-BKTvw04u.js";
import { u as useQuasar } from "./use-quasar-DOYYlyir.js";
import { U as Un } from "./vue-code-block.es-BRSfQfeP.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CcAunmGO.js";
import { r as requireCore } from "./core-CUVoAmL3.js";
import { c as cpp, a as css } from "./css-CBCnwQ5t.js";
import { Q as QTooltip } from "./QTooltip-BBQ60Smb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./scroll-034vCdQO.js";
import "./focus-manager-TfMniKh0.js";
const wrapper = (callback) => callback;
const defineBoot = wrapper;
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
const _hoisted_1$1 = { class: "MDCode" };
const _sfc_main$1 = {
  __name: "MDCode",
  props: {
    content: String,
    codeLanguage: String,
    includePath: String,
    codeFilePath: String,
    fileExists: String
  },
  setup(__props) {
    HighlightJS.registerLanguage("cpp", cpp);
    HighlightJS.registerLanguage("c++", cpp);
    HighlightJS.registerLanguage("css", css);
    const theme = ref("base16/solarized-dark");
    const $q = useQuasar();
    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
          theme.value = "base16/solarized-dark";
        } else {
          theme.value = "base16/solarized-light";
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(Un), {
          code: __props.content,
          highlightjs: "",
          lang: __props.codeLanguage,
          theme: theme.value,
          label: __props.codeFilePath != "undefined" ? __props.codeFilePath : ""
        }, null, 8, ["code", "lang", "theme", "label"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "MDAbbr" };
const _sfc_main = {
  __name: "MDAbbr",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createVNode(QTooltip, {
          anchor: "top middle",
          self: "bottom middle",
          class: "MDAbbrDescription bg-amber text-black shadow-4",
          "max-width": "40em"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "abbrDescription", {}, void 0, true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
const MDAbbr = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa8e34f6"]]);
const registerGlobalComponents = defineBoot(async ({ app }) => {
  app.component("MDCode", _sfc_main$1);
  app.component("MDAbbr", MDAbbr);
});
export {
  registerGlobalComponents as default
};
