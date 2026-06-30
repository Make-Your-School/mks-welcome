import { H as watchEffect, N as openBlock, Q as ref, U as withCtx, d as createBlock, g as createVNode, h as createTextVNode, rt as unref, st as toDisplayString, u as createBaseVNode } from "./vue.esm-bundler-DkjeOeAQ.js";
import { o as useRouter } from "./vue-router-C1WeEvMh.js";
import { t as QBtn_default } from "./QBtn-DZW7z61w.js";
import { t as _sfc_main$1 } from "./MyMarkdown-CI4JPIWU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Dl-_tC7C.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { t as useMDContentStore } from "./mdContent-B-c5-btF.js";
//#region src/pages/MKS_Part_SubMarkdownFile.vue
var _hoisted_1 = ["href"];
var MKS_Part_SubMarkdownFile_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "MKS_Part_SubMarkdownFile",
	props: {
		part_name: String,
		pathMatch: Array
	},
	setup(__props) {
		const props = __props;
		console.log("props.part_name", props.part_name);
		console.log("props.pathMatch", props.pathMatch);
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const part = mdContent.mks.parts[props.part_name];
		console.log("part", part);
		const mysLink = location.href;
		const urlWebSource = part.submodule.urlWeb + "/blob/main/" + props.pathMatch.join("/");
		const appPartURL = ref(`/part/${props.part_name}`);
		const mdFile = ref(`/${part.path_base}${props.pathMatch.join("/")}`);
		const mdFileContent = ref("");
		const router = useRouter();
		async function backHandler() {
			if (navigation.canGoBack) await router.back();
			else {
				console.log("appPartURL", appPartURL.value);
				router.push(appPartURL.value);
			}
		}
		watchEffect(async () => {
			mdFile.value = `/${part.path_base}${props.pathMatch.join("/")}`;
			mdFileContent.value = await (await fetch(mdFile.value)).text();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, { class: "part-detail-page" }, {
				default: withCtx(() => [
					createVNode(QBtn_default, {
						flat: "",
						dense: "",
						round: "",
						icon: "arrow_back",
						"aria-label": "zurück",
						onClick: _cache[0] || (_cache[0] = ($event) => backHandler()),
						class: "fixed-top-left q-ma-sm back"
					}),
					createVNode(_sfc_main$1, {
						source: mdFileContent.value,
						filePath: mdFile.value
					}, null, 8, ["source", "filePath"]),
					_cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1)),
					createBaseVNode("a", { href: unref(mysLink) }, toDisplayString(props.part_name + "/" + props.pathMatch.join("/")), 9, _hoisted_1),
					_cache[2] || (_cache[2] = createTextVNode(" - (")),
					createBaseVNode("a", {
						href: urlWebSource,
						target: "_blank"
					}, "edit source"),
					_cache[3] || (_cache[3] = createTextVNode(") "))
				]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-7c820366"]]);
//#endregion
export { MKS_Part_SubMarkdownFile_default as default };
