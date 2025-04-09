import { Q as QPage } from "./QPage-BxzcIzVY.js";
import { H as createBlock, v as openBlock, a0 as withCtx, l as createBaseVNode, D as createTextVNode, E as toDisplayString } from "./index-CG0pRGuw.js";
const _sfc_main = {
  __name: "MKS_Tag_Details",
  props: {
    tag_name: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h1", null, "MKS_Tag_Details.vue", -1)),
          createTextVNode(" " + toDisplayString(__props.tag_name), 1)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
