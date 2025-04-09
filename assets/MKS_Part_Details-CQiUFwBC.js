import { Q as QPage } from "./QPage-Dbopgmmp.js";
import { s as shallowRef, O as createBlock, m as openBlock, p as withCtx, S as resolveDynamicComponent } from "./index-CzSw4iFq.js";
import { u as useMksContentStore } from "./mksContent-Bq7sov1p.js";
import "./readme-De-mjvlM.js";
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
