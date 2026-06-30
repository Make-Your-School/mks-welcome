import { N as openBlock, R as resolveDynamicComponent, U as withCtx, d as createBlock, g as createVNode, h as createTextVNode, l as computed, rt as unref, st as toDisplayString, u as createBaseVNode } from "./vue.esm-bundler-DkjeOeAQ.js";
import { i as onBeforeRouteUpdate, o as useRouter, r as onBeforeRouteLeave } from "./vue-router-C1WeEvMh.js";
import { t as QBtn_default } from "./QBtn-DZW7z61w.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Dl-_tC7C.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { t as useMDContentStore } from "./mdContent-B-c5-btF.js";
//#region src/pages/MKS_Part_Details.vue
var _hoisted_1 = { class: "info" };
var _hoisted_2 = { class: "material_number" };
var _hoisted_3 = { class: "title" };
var _hoisted_4 = { class: "part_description" };
var _hoisted_5 = ["alt"];
var _hoisted_6 = ["href"];
var _hoisted_7 = ["href"];
var MKS_Part_Details_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "MKS_Part_Details",
	props: { part_name: String },
	setup(__props) {
		const props = __props;
		console.log("props.part_name", props.part_name);
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const part = mdContent.mks.parts[props.part_name];
		console.log("part", part);
		const mysLink = location.href;
		const coverImage = `/${part.path_base}/${part.meta.coverImage}`;
		const part_description = computed(() => {
			return `${part?.meta?.repo_manufacture?.replace(/([A-Z])/g, " $1")} - ${part?.meta?.repo_part?.replaceAll("_", " ")}`;
		});
		const router = useRouter();
		async function backHandler() {
			if (navigation.canGoBack) {
				console.log("canGoBack");
				await router.back();
			} else router.push("/");
		}
		onBeforeRouteLeave((to, from) => {
			console.log("onBeforeRouteLeave");
			console.log("to", to);
			console.log("from", from);
		});
		onBeforeRouteUpdate(async (to, from) => {
			console.log("onBeforeRouteUpdate");
			console.log("to", to);
			console.log("from", from);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, { class: "part-detail-page" }, {
				default: withCtx(() => [
					createVNode(QBtn_default, {
						flat: "",
						dense: "",
						round: "",
						icon: "arrow_back",
						"aria-label": "zurück zur Übersicht",
						class: "fixed-top-left q-ma-sm back",
						onClick: _cache[0] || (_cache[0] = ($event) => backHandler())
					}),
					createBaseVNode("header", null, [createBaseVNode("div", _hoisted_1, [
						createBaseVNode("h2", _hoisted_2, toDisplayString(unref(part).meta.material_number), 1),
						createBaseVNode("h1", _hoisted_3, toDisplayString(unref(part).meta.title), 1),
						createBaseVNode("h4", _hoisted_4, toDisplayString(part_description.value), 1)
					]), createBaseVNode("img", {
						src: coverImage,
						alt: unref(part).meta.title
					}, null, 8, _hoisted_5)]),
					(openBlock(), createBlock(resolveDynamicComponent(unref(part).content), { class: "part-content" })),
					_cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1)),
					createBaseVNode("a", { href: unref(mysLink) }, toDisplayString(props.part_name), 9, _hoisted_6),
					_cache[2] || (_cache[2] = createTextVNode(" - (")),
					createBaseVNode("a", {
						href: unref(part).submodule.urlWeb,
						target: "_blank"
					}, "edit source", 8, _hoisted_7),
					_cache[3] || (_cache[3] = createTextVNode(") "))
				]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-8180d0eb"]]);
//#endregion
export { MKS_Part_Details_default as default };
