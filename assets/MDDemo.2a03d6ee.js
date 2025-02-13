import { Q as QPage } from "./QPage.07e1241f.js";
import { _ as _sfc_main$1 } from "./MyMarkdown.b1be03ae.js";
import { d as demo } from "./demo.fff9be3e.js";
import { r as ref, L as openBlock, M as createBlock, N as withCtx, P as createBaseVNode, a2 as createTextVNode, j as createVNode } from "./index.5210e46b.js";
import "./preprocessMD.9a825059.js";
import "./selection.1d2d9eb9.js";
import "./use-quasar.f46cdb9a.js";
import "./index.8c4641b6.js";
const _sfc_main = {
  __name: "MDDemo",
  setup(__props) {
    console.log("demo", demo);
    const demo_content = ref(demo);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            _cache[0] || (_cache[0] = createTextVNode(" Markdown Test Page ")),
            createVNode(_sfc_main$1, {
              source: demo_content.value.readme.content,
              "file-path": demo_content.value.path_base
            }, null, 8, ["source", "file-path"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
