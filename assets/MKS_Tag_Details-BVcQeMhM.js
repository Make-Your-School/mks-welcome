import { Q as QPage } from "./QPage-CPaWQyUh.js";
import { H as createBlock, v as openBlock, a0 as withCtx, j as createVNode, a2 as resolveDynamicComponent, n as unref } from "./index-B0d0Cx_0.js";
import { T as TagBauteilListe } from "./TagBauteilListe-CK1u207A.js";
import { u as useMDContentStore } from "./mdContent-DbRcw7Pl.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-CGNVhiQ2.js";
import "./about-DfpUUyGh.js";
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
