import { Q as QPage } from "./QPage-BTQveDCV.js";
import { H as createBlock, v as openBlock, a0 as withCtx, j as createVNode, a3 as resolveDynamicComponent, n as unref } from "./index-CbhmIho7.js";
import { T as TagBauteilListe } from "./TagBauteilListe-XgwA6Smr.js";
import { u as useMDContentStore } from "./mdContent-DHcyvepO.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-C4uGm4FI.js";
import "./about-CNQHi2_r.js";
const _sfc_main = {
  __name: "MKS_Tag_Details",
  props: {
    tag_name: String
  },
  setup(__props) {
    const props = __props;
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const tag = mdContent.mks.tags[props.tag_name];
    console.log("tag", tag);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(tag).content))),
          createVNode(TagBauteilListe, { tag: unref(tag) }, null, 8, ["tag"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
