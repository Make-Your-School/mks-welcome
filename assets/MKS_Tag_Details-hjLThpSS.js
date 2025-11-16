import { Q as QPage } from "./QPage-D8msG783.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, ah as resolveDynamicComponent, n as unref } from "./index-Ct1v7woI.js";
import { T as TagBauteilListe } from "./TagBauteilListe-Cy0uM9q3.js";
import { u as useMDContentStore } from "./mdContent-BqdXIqVL.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-x_2BQu4h.js";
import "./about-7ln2fBIf.js";
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
