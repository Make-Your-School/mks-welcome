import { Q as QInput } from "./QInput-B8WRRz2d.js";
import { Q as QPage } from "./QPage-t4ySStW8.js";
import { H as createBlock, v as openBlock, a0 as withCtx, j as createVNode, l as createBaseVNode, r as ref, c as computed, a1 as resolveComponent, p as createElementBlock, F as Fragment, a3 as renderList } from "./index-B_Z4aHIP.js";
import { Q as QCardSection, a as QCard } from "./QCard-BSRv0Q3N.js";
import { T as TagBauteilListe } from "./TagBauteilListe-C-1JzepK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMDContentStore } from "./mdContent-CBrUHNiu.js";
import "./use-dark-CbkZAy5l.js";
import "./focus-manager-DXzUojAp.js";
import "./readme-COZ-16b5.js";
import "./about-D1R4mase.js";
const _hoisted_1$1 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "TagOverview",
  props: {
    tag: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "tag-overview" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: __props.tag.excerpt
              }, null, 8, _hoisted_1$1),
              createVNode(TagBauteilListe, { tag: __props.tag }, null, 8, ["tag"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const TagOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-afb5b414"]]);
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Tags",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const mks_tags = ref(mdContent.mks.tags);
    const searchText = ref("");
    const check_searchTextInReadme = (readme, item_name) => {
      var _a, _b;
      return (item_name == null ? void 0 : item_name.toLowerCase().includes(searchText.value.toLowerCase())) || readme.content_text.toLowerCase().includes(searchText.value.toLowerCase()) || // TODO: find a better way to search for text in rendered output..
      ((_b = (_a = readme.data) == null ? void 0 : _a.tags) == null ? void 0 : _b.join(", ").toLowerCase().includes(searchText.value.toLowerCase()));
    };
    const getObjItemsWithSearchTextInReadme = (obj) => {
      const result = {};
      for (const [item_name, item] of Object.entries(obj)) {
        if (check_searchTextInReadme(item, item_name)) {
          result[item_name] = item;
        }
      }
      return result;
    };
    const mks_items_filtered = computed(() => {
      const result = {
        ...getObjItemsWithSearchTextInReadme(mks_tags.value)
      };
      return result;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(QInput, {
              rounded: "",
              outlined: "",
              modelValue: searchText.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
              label: "Suche:"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (mks_item, mks_item_name) => {
              return openBlock(), createElementBlock("li", {
                key: mks_item_name,
                class: "my-card q-pa-md"
              }, [
                createVNode(_component_router_link, {
                  to: `/tag/${mks_item_name}`,
                  class: "clickable"
                }, {
                  default: withCtx(() => [
                    createVNode(TagOverview, { tag: mks_item }, null, 8, ["tag"])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
const MKS_Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0298f64c"]]);
export {
  MKS_Tags as default
};
