import { N as openBlock, R as resolveDynamicComponent, U as withCtx, d as createBlock, g as createVNode, rt as unref } from "./vue.esm-bundler-DkjeOeAQ.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { t as useMDContentStore } from "./mdContent-B-c5-btF.js";
import { t as TagBauteilListe_default } from "./TagBauteilListe-3-tWFmyW.js";
//#region src/pages/MKS_Tag_Details.vue
var _sfc_main = {
	__name: "MKS_Tag_Details",
	props: { tag_name: String },
	setup(__props) {
		const props = __props;
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const tag = mdContent.mks.tags[props.tag_name];
		console.log("tag", tag);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, null, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(tag).content))), createVNode(TagBauteilListe_default, { tag: unref(tag) }, null, 8, ["tag"])]),
				_: 1
			});
		};
	}
};
//#endregion
export { _sfc_main as default };
