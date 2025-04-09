import { Q as QPage } from "./QPage-Dbopgmmp.js";
import { O as createBlock, m as openBlock, p as withCtx, P as createBaseVNode, W as createTextVNode, V as toDisplayString } from "./index-CzSw4iFq.js";
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
