import { Q as QPage } from "./QPage-BxzcIzVY.js";
import { s as shallowRef, H as createBlock, v as openBlock, a0 as withCtx, a2 as resolveDynamicComponent } from "./index-CG0pRGuw.js";
import { u as useMksContentStore } from "./mksContent-BimAICja.js";
import "./readme-DUJKAgpv.js";
const _sfc_main = {
  __name: "MKS_Part_Details",
  props: {
    part_name: String
  },
  setup(__props) {
    const props = __props;
    console.log("props.part_name", props.part_name);
    const mksContent = useMksContentStore();
    console.log("mksContent", mksContent);
    const part = shallowRef(mksContent.parts[props.part_name]);
    console.log("part", part);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(part.value.content)))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
