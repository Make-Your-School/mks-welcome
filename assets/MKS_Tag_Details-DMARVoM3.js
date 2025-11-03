import { Q as QPage } from "./QPage-Di6RWpa4.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, ag as resolveDynamicComponent, n as unref } from "./index-Cmz5aldE.js";
import { T as TagBauteilListe } from "./TagBauteilListe-Bc4GKnRP.js";
import { u as useMDContentStore } from "./mdContent-BQ0L9t2A.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-9MyRnhah.js";
import "./about-DY-wJmcR.js";
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
