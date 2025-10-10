import { Q as QPage } from "./QPage-ByPmJeF_.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, R as resolveDynamicComponent, n as unref } from "./index-BzwxiQJ5.js";
import { T as TagBauteilListe } from "./TagBauteilListe-CqsQCJe2.js";
import { u as useMDContentStore } from "./mdContent-DcJFszAv.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-BRVYw2z2.js";
import "./about-Cs1RA2Od.js";
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
