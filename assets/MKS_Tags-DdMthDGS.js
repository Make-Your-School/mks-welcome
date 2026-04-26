import { F as renderList, L as resolveComponent, N as openBlock, Q as ref, U as withCtx, a as Fragment, d as createBlock, g as createVNode, l as computed, p as createElementBlock, u as createBaseVNode } from "./vue.esm-bundler-DdwSdRj_.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CdNuS8Yy.js";
import { t as QCard_default } from "./QCard-CpXLxroZ.js";
import { t as QPage_default } from "./QPage-BDr_fs7R.js";
import { t as QCardSection_default } from "./QCardSection-CQ6zCG9z.js";
import { t as useMDContentStore } from "./mdContent-BL71FE5Y.js";
import { t as QInput_default } from "./QInput-vomb-1gl.js";
import { t as TagBauteilListe_default } from "./TagBauteilListe-B8mk9VTL.js";
//#region src/components/TagOverview.vue
var _hoisted_1$1 = ["innerHTML"];
var TagOverview_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "TagOverview",
	props: { tag: Object },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QCard_default, { class: "tag-overview" }, {
				default: withCtx(() => [createVNode(QCardSection_default, null, {
					default: withCtx(() => [createBaseVNode("div", { innerHTML: __props.tag.excerpt }, null, 8, _hoisted_1$1), createVNode(TagBauteilListe_default, { tag: __props.tag }, null, 8, ["tag"])]),
					_: 1
				})]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-afb5b414"]]);
//#endregion
//#region src/pages/MKS_Tags.vue
var _hoisted_1 = { class: "card-wrapper row items-stretch" };
var MKS_Tags_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "MKS_Tags",
	setup(__props) {
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const mks_tags = ref(mdContent.mks.tags);
		const searchText = ref("");
		const check_searchTextInReadme = (readme, item_name) => {
			return item_name?.toLowerCase().includes(searchText.value.toLowerCase()) || readme.content_text.toLowerCase().includes(searchText.value.toLowerCase()) || readme.data?.tags?.join(", ").toLowerCase().includes(searchText.value.toLowerCase());
		};
		const getObjItemsWithSearchTextInReadme = (obj) => {
			const result = {};
			for (const [item_name, item] of Object.entries(obj)) if (check_searchTextInReadme(item, item_name)) result[item_name] = item;
			return result;
		};
		const mks_items_filtered = computed(() => {
			return { ...getObjItemsWithSearchTextInReadme(mks_tags.value) };
		});
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createBlock(QPage_default, { class: "my-page" }, {
				default: withCtx(() => [createBaseVNode("div", null, [createVNode(QInput_default, {
					rounded: "",
					outlined: "",
					modelValue: searchText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
					label: "Suche:"
				}, null, 8, ["modelValue"])]), createBaseVNode("ul", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (mks_item, mks_item_name) => {
					return openBlock(), createElementBlock("li", {
						key: mks_item_name,
						class: "my-card q-pa-md"
					}, [createVNode(_component_router_link, {
						to: `/tag/${mks_item_name}`,
						class: "clickable"
					}, {
						default: withCtx(() => [createVNode(TagOverview_default, { tag: mks_item }, null, 8, ["tag"])]),
						_: 2
					}, 1032, ["to"])]);
				}), 128))])]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-0298f64c"]]);
//#endregion
export { MKS_Tags_default as default };
