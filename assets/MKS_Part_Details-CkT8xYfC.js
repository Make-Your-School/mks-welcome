import { Q as QPage } from "./QPage-t4ySStW8.js";
import { H as createBlock, v as openBlock, a0 as withCtx, l as createBaseVNode, a2 as resolveDynamicComponent, n as unref } from "./index-B_Z4aHIP.js";
import { u as useMDContentStore } from "./mdContent-CBrUHNiu.js";
import "./readme-COZ-16b5.js";
import "./about-D1R4mase.js";
const _hoisted_1 = ["href"];
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
          (openBlock(), createBlock(resolveDynamicComponent(unref(part).content))),
          _cache[0] || (_cache[0] = createBaseVNode("hr", null, null, -1)),
          createBaseVNode("a", {
            href: unref(part).submodule.urlWeb,
            target: "_blank"
          }, "edit source", 8, _hoisted_1)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
