import { Q as QInput } from "./QInput-DB26ycns.js";
import { Q as QPage } from "./QPage-ByPmJeF_.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, r as ref, c as computed, Q as resolveComponent, R as resolveDynamicComponent, n as unref, p as createElementBlock, F as Fragment, S as renderList } from "./index-BzwxiQJ5.js";
import { Q as QCardSection, a as QCard } from "./QCard-CLeYbY3Y.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMDContentStore } from "./mdContent-DcJFszAv.js";
import "./use-id-CMqL3gzx.js";
import "./use-dark-DOpwK9rP.js";
import "./focus-manager-B-vefqia.js";
import "./readme-BRVYw2z2.js";
import "./about-Cs1RA2Od.js";
const _hoisted_1$1 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "PartOverview",
  props: {
    mks_item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "part-overview" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: __props.mks_item.excerpt
              }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const PartOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d46b0f1c"]]);
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Parts",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const mks_welcome = mdContent.mks.welcome;
    const mks_parts = ref(mdContent.mks.parts);
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
        // ...getObjItemsWithSearchTextInReadme(mks_tags.value),
        ...getObjItemsWithSearchTextInReadme(mks_parts.value)
      };
      return result;
    });
    const searchText = ref("");
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, { class: "my-page" }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(mks_welcome).content))),
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
                  to: `/part/${mks_item_name}`,
                  class: "clickable"
                }, {
                  default: withCtx(() => [
                    createVNode(PartOverview, {
                      mks_item,
                      mks_parts: mks_parts.value
                    }, null, 8, ["mks_item", "mks_parts"])
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
const MKS_Parts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66ba7463"]]);
export {
  MKS_Parts as default
};
