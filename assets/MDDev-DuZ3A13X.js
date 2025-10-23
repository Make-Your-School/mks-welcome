import { Q as QPage } from "./QPage-CCcXVksU.js";
import { H as createBlock, v as openBlock, a0 as withCtx, l as createBaseVNode, j as createVNode, n as unref } from "./index-CYuG1cOH.js";
import { m as md_obj, _ as _sfc_main$1 } from "./readme-B44CXGMK.js";
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _sfc_main = {
  __name: "MDDev",
  setup(__props) {
    const MDContent = _sfc_main$1;
    console.log("md_obj", md_obj);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Markdown DEV", -1)),
            createVNode(unref(MDContent))
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
