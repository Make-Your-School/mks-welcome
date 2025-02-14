import { Q as QPage } from "./QPage.22ce2eb8.js";
import { _ as _sfc_main$1 } from "./MyMarkdown.ee45931f.js";
import { d as demo } from "./demo.08a29b5c.js";
import { r as ref, L as openBlock, M as createBlock, N as withCtx, P as createBaseVNode, a1 as createTextVNode, j as createVNode } from "./index.2b129d83.js";
import "./use-quasar.d2c5bfd9.js";
import "./preprocessMD.45659a69.js";
import "./selection.a9b25e8c.js";
import "./index.8c4641b6.js";
const _hoisted_1 = { style: { "overflow": "scroll" } };
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
          createBaseVNode("section", _hoisted_1, [
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
