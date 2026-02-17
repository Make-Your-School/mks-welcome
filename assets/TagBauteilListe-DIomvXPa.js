import { ac as resolveComponent, p as createElementBlock, x as createCommentVNode, v as openBlock, l as createBaseVNode, F as Fragment, ad as renderList, j as createVNode, P as withCtx, D as createTextVNode, E as toDisplayString } from "./index-XdKtUSgL.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = {
  __name: "TagBauteilListe",
  props: {
    tag: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return __props.tag.parts ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Bauteile", -1)),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tag.parts, (part_item, part_name) => {
            return openBlock(), createElementBlock("li", { key: part_name }, [
              createVNode(_component_router_link, {
                to: `/part/${part_name}`,
                class: "clickable"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(part_name) + " " + toDisplayString(part_item.meta?.id), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const TagBauteilListe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5e82f41"]]);
export {
  TagBauteilListe as T
};
