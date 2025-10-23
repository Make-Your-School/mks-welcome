import { Q as QPage } from "./QPage-BTQveDCV.js";
import { r as ref, a2 as resolveComponent, H as createBlock, v as openBlock, a0 as withCtx, l as createBaseVNode, p as createElementBlock, F as Fragment, a4 as renderList, j as createVNode, D as createTextVNode, E as toDisplayString } from "./index-CbhmIho7.js";
import { u as useMDContentStore } from "./mdContent-DHcyvepO.js";
import "./readme-C4uGm4FI.js";
import "./about-CNQHi2_r.js";
const _hoisted_1 = { class: "" };
const _sfc_main = {
  __name: "parts-meta",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const mks_parts = ref(mdContent.mks.parts);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, { class: "" }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(mks_parts.value, (mks_item, mks_item_name) => {
              return openBlock(), createElementBlock("li", { key: mks_item_name }, [
                createVNode(_component_router_link, {
                  to: `/part/${mks_item_name}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(mks_item.name), 1)
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
export {
  _sfc_main as default
};
