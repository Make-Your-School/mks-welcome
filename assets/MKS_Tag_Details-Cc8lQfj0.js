import { Q as QPage } from "./QPage-DOFVU4BT.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, R as resolveDynamicComponent, n as unref } from "./index-CsY9DVS_.js";
import { T as TagBauteilListe } from "./TagBauteilListe-CxDZp0zG.js";
import { u as useMDContentStore } from "./mdContent-CBhM1Qoz.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-uxMB1fpn.js";
import "./about-B4i0ivaq.js";
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
