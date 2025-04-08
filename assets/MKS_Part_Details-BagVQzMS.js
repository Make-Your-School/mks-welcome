import { Q as QPage } from "./QPage-CEeEWEi9.js";
import { O as createBlock, m as openBlock, p as withCtx, P as createBaseVNode, U as createTextVNode, X as toDisplayString } from "./index-Be0Uqxpc.js";
const _sfc_main = {
  __name: "MKS_Part_Details",
  props: {
    part_name: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h1", null, "MKS_Parts_Details.vue", -1)),
          createTextVNode(" " + toDisplayString(__props.part_name), 1)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
