import { Q as QInput } from "./QInput-Dx9Rsogq.js";
import { Q as QPage } from "./QPage-BxzcIzVY.js";
import { H as createBlock, v as openBlock, a0 as withCtx, j as createVNode, l as createBaseVNode, p as createElementBlock, x as createCommentVNode, F as Fragment, a3 as renderList, E as toDisplayString, r as ref, c as computed, a1 as resolveComponent } from "./index-CG0pRGuw.js";
import { Q as QCardSection, a as QCard } from "./QCard-D7rjEqQ7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMksContentStore } from "./mksContent-BimAICja.js";
import "./use-dark-EMZrnQMq.js";
import "./focus-manager-DXzUojAp.js";
import "./readme-DUJKAgpv.js";
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2 = { key: 0 };
const _sfc_main$1 = {
  __name: "TagOverview",
  props: {
    mks_item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "tag-overview" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: __props.mks_item.excerpt
              }, null, 8, _hoisted_1$1),
              __props.mks_item.parts ? (openBlock(), createElementBlock("div", _hoisted_2, [
                _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Bauteile", -1)),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.mks_item.parts, (part_item, part_name) => {
                    var _a;
                    return openBlock(), createElementBlock("li", { key: part_name }, toDisplayString(part_name) + " " + toDisplayString((_a = part_item.meta) == null ? void 0 : _a.id), 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const TagOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d1b07cd9"]]);
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Tags",
  setup(__props) {
    const mksContent = useMksContentStore();
    console.log("mksContent", mksContent);
    const mks_tags = ref(mksContent.tags);
    const check_searchTextInReadme = (readme, item_name) => {
      var _a, _b;
      return (item_name == null ? void 0 : item_name.toLowerCase().includes(searchText.value.toLowerCase())) || readme.content_text.toLowerCase().includes(searchText.value.toLowerCase()) || // TODO: find a better way to search for text in rendered output..
      ((_b = (_a = readme.data) == null ? void 0 : _a.tags) == null ? void 0 : _b.join(", ").toLowerCase().includes(searchText.value.toLowerCase()));
    };
    const getObjItemsWithSearchTextInReadme = (obj) => {
      const result = {};
      for (const [item_name, item] of Object.entries(obj)) {
        console.log(`item_name`, item_name, `item`, item);
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
    const searchText = ref("");
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
                  to: `tag/${mks_item_name}`,
                  class: "clickable"
                }, {
                  default: withCtx(() => [
                    createVNode(TagOverview, {
                      mks_item,
                      mks_tags: mks_tags.value
                    }, null, 8, ["mks_item", "mks_tags"])
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
const MKS_Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb1e167c"]]);
export {
  MKS_Tags as default
};
