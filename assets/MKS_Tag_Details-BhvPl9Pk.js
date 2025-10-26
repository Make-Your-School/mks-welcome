import { Q as QPage } from "./QPage-XUzYuW55.js";
import { H as createBlock, v as openBlock, a1 as withCtx, j as createVNode, ar as resolveDynamicComponent, n as unref } from "./index-BwgzNY_6.js";
import { T as TagBauteilListe } from "./TagBauteilListe-C26vqwCA.js";
import { u as useMDContentStore } from "./mdContent-BNwGmQFK.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-ub9HO53p.js";
import "./about-CbDQx5yy.js";
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
