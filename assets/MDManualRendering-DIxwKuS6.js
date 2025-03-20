import { Q as QPage } from "./QPage-CrJqOd1M.js";
import { r as ref, O as createBlock, m as openBlock, p as withCtx, P as createBaseVNode, U as createTextVNode, j as createVNode } from "./index-DJGcSM7w.js";
import { _ as _sfc_main$1 } from "./MyMarkdown-DiUVk8GS.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DXipyAWe.js";
import "./core-CUVoAmL3.js";
import "./cpp-DxF16jcj.js";
const dev = '\n```c++ :./example.ino\nthis does fail.. so we can check a 404 is handled smoothly.\n```\n\n\n```c++\nconst hello = "world";\nlet ping = 42;\n```\n\n```c++ :./example.ino\nthis does fail.. so we can check a 404 is handled smoothly.\n```\n';
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dev
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { style: { "overflow": "scroll" } };
const path_base = "../../../public/demo/dev.md";
const _sfc_main = {
  __name: "MDManualRendering",
  setup(__props) {
    let contentRaw = Object.assign({
      "../../../public/demo/dev.md": __vite_glob_0_0
    })[path_base].default;
    const md_content = ref(contentRaw);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[0] || (_cache[0] = createTextVNode(" Dev ")),
            _cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1)),
            createVNode(_sfc_main$1, {
              source: md_content.value,
              "file-path": path_base
            }, null, 8, ["source"])
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
