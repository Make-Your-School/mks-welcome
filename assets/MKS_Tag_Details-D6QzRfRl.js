import { Q as QPage } from "./QPage-XTwEA3K0.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, aj as resolveDynamicComponent, n as unref } from "./index-ct3bQw8Q.js";
import { T as TagBauteilListe } from "./TagBauteilListe-Cd6BKj6z.js";
import { u as useMDContentStore } from "./mdContent-BQHtq5-M.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-Du5FV-Q8.js";
import "./about-BPgM3tvU.js";
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
