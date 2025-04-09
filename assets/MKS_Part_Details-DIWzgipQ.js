import { Q as QPage } from "./QPage-BPE97abM.js";
import { H as createBlock, v as openBlock, a0 as withCtx, a2 as resolveDynamicComponent, n as unref } from "./index-BPaER5cP.js";
import { u as useMDContentStore } from "./mdContent-U3s0R5xq.js";
import "./readme-CkiZ_tnD.js";
import "./about-BM-OFklx.js";
const _sfc_main = {
  __name: "MKS_Part_Details",
  props: {
    part_name: String
  },
  setup(__props) {
    const props = __props;
    console.log("props.part_name", props.part_name);
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const part = mdContent.mks.parts[props.part_name];
    console.log("part", part);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(part).content)))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
