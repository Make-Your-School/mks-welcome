import { Q as QPage } from "./QPage-WNflYAs7.js";
import { p as preProcessingMD, _ as _sfc_main$1 } from "./MyMarkdown-CqkzsKJB.js";
import { r as ref, L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, j as createVNode } from "./index-BeRvWUUD.js";
import "./_plugin-vue_export-helper-BU-rLAaV.js";
import "./QTooltip-DTDg5YEK.js";
import "./selection-CoNXnmd1.js";
import "./index-Dd8cLqlk.js";
const dev$2 = "The Page!\nsun! the HTML specification is\nmaintained by the W3C.\n";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dev$2
}, Symbol.toStringTag, { value: "Module" }));
const dev = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/dev/";
  console.log("load demo/dev.md");
  let temp = /* @__PURE__ */ Object.assign({
    "../../public/demo/dev.md": __vite_glob_0_0
  });
  console.log("temp", temp);
  content.readme = preProcessingMD(temp["../../public/demo/dev.md"].default);
  content.path_base = path_base;
  console.log("dev done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
const dev$1 = dev();
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _sfc_main = {
  __name: "MDDev",
  setup(__props) {
    console.log("dev", dev$1);
    const dev_content = ref(dev$1);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Markdown DEV", -1)),
            createVNode(_sfc_main$1, {
              source: dev_content.value.readme.content,
              "file-path": dev_content.value.path_base
            }, null, 8, ["source", "file-path"])
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
