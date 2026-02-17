import { Q as QInput } from "./QInput-DrbBjvfB.js";
import { Q as QPage } from "./QPage-XTwEA3K0.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, r as ref, c as computed, ac as resolveComponent, p as createElementBlock, F as Fragment, ad as renderList } from "./index-ct3bQw8Q.js";
import { Q as QCardSection } from "./QCardSection-DEDw2lzQ.js";
import { Q as QCard } from "./QCard-BLTZ9jjl.js";
import { T as TagBauteilListe } from "./TagBauteilListe-Cd6BKj6z.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMDContentStore } from "./mdContent-BQHtq5-M.js";
import "./use-key-composition-EMdZnLbB.js";
import "./use-id-BzmBJZQh.js";
import "./use-dark-HkiXo6Yx.js";
import "./private.use-form-04tMuKup.js";
import "./readme-Du5FV-Q8.js";
import "./about-BPgM3tvU.js";
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
      return item_name?.toLowerCase().includes(searchText.value.toLowerCase()) || readme.content_text.toLowerCase().includes(searchText.value.toLowerCase()) || // TODO: find a better way to search for text in rendered output..
      readme.data?.tags?.join(", ").toLowerCase().includes(searchText.value.toLowerCase());
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
