import { Q as QPage } from "./QPage-bp1T4qdp.js";
import { H as createBlock, v as openBlock, a1 as withCtx, j as createVNode, ar as resolveDynamicComponent, n as unref } from "./index-D3RnTwX8.js";
import { T as TagBauteilListe } from "./TagBauteilListe-Beg4qJf8.js";
import { u as useMDContentStore } from "./mdContent-D8KcT6Jb.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-Djlx4SpB.js";
import "./about-CC8p0wg7.js";
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
