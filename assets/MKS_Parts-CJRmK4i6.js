import { Q as QInput } from "./QInput-wDJPIZ7r.js";
import { Q as QPage } from "./QPage-CwSBXYnx.js";
import { H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, E as toDisplayString, s as shallowRef, c as computed, r as ref, ac as resolveComponent, ag as resolveDynamicComponent, n as unref, p as createElementBlock, F as Fragment, ad as renderList } from "./index-jiQ7p-yH.js";
import { Q as QCardSection } from "./QCardSection-B2nXA_Rg.js";
import { Q as QCard } from "./QCard-CWM-8R2o.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useMDContentStore } from "./mdContent-BmLyxPYu.js";
import "./use-id-DY7cVQXJ.js";
import "./use-dark-BrTxMjp7.js";
import "./private.use-form-CYYMba_M.js";
import "./readme-CGt5Snsp.js";
import "./about-33fxEH1A.js";
const _hoisted_1$1 = ["src", "alt"];
const _hoisted_2 = { class: "material_number" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "type" };
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
              createBaseVNode("img", {
                src: __props.mks_item.path_base + `/` + __props.mks_item.meta.coverImage,
                alt: __props.mks_item.meta.title
              }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "info" }, {
            default: withCtx(() => [
              createBaseVNode("h2", _hoisted_2, toDisplayString(__props.mks_item.meta.material_number), 1),
              createBaseVNode("h1", _hoisted_3, toDisplayString(__props.mks_item.meta.title), 1),
              createBaseVNode("h2", _hoisted_4, toDisplayString(__props.mks_item.meta.material_type), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const PartOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-676f6140"]]);
const _hoisted_1 = { class: "card-wrapper row items-stretch" };
const _sfc_main = {
  __name: "MKS_Parts",
  setup(__props) {
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const mks_welcome = mdContent.mks.welcome;
    const mks_parts = shallowRef(mdContent.mks.parts);
    const sort_difficulty = (entries) => {
      let difficulty_recommend = entries.filter(([, obj]) => obj.meta.difficulty == "recommend");
      let difficulty_advanced = entries.filter(([, obj]) => obj.meta.difficulty == "advanced");
      let difficulty_expert = entries.filter(([, obj]) => obj.meta.difficulty == "expert");
      let difficulty_rest = entries.filter(
        ([, obj]) => !["recommend", "advanced", "expert"].includes(obj.meta.difficulty)
      );
      const sort_local = ([key1], [key2]) => {
        return key1.localeCompare(key2);
      };
      difficulty_recommend.sort(sort_local);
      difficulty_advanced.sort(sort_local);
      difficulty_expert.sort(sort_local);
      difficulty_rest.sort(sort_local);
      console.log("difficulty_recommend", difficulty_recommend);
      console.log("difficulty_advanced", difficulty_advanced);
      console.log("difficulty_expert", difficulty_expert);
      console.log("difficulty_rest", difficulty_rest);
      const result = {
        ...difficulty_recommend,
        ...difficulty_advanced,
        ...difficulty_expert,
        ...difficulty_rest
      };
      return result;
    };
    const mks_items_sorted = () => {
      console.log(mks_parts.value);
      const entries = Object.entries(mks_parts.value);
      let status_active = entries.filter(([, obj]) => obj.meta.status == "active");
      let status_deprecated = entries.filter(([, obj]) => obj.meta.status == "deprecated");
      let status_EOL = entries.filter(([, obj]) => obj.meta.status == "EOL");
      let status_rest = entries.filter(
        ([, obj]) => !["active", "deprecated", "EOL"].includes(obj.meta.status)
      );
      status_active = sort_difficulty(status_active);
      status_deprecated = sort_difficulty(status_deprecated);
      status_EOL = sort_difficulty(status_EOL);
      status_rest = sort_difficulty(status_rest);
      console.log("status_active", status_active);
      console.log("status_deprecated", status_deprecated);
      console.log("status_EOL", status_EOL);
      console.log("status_rest", status_rest);
      const sortedEntries = {
        // ...status_active,
        // ...status_deprecated,
        // ...status_rest,
        // ...status_EOL,
        // ...mks_parts.value,
        ...entries
      };
      const sortedEntriesObj = Object.fromEntries(sortedEntries);
      console.log("sortedEntriesObj", sortedEntriesObj);
      return sortedEntriesObj;
    };
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
        // ...getObjItemsWithSearchTextInReadme(mks_tags.value),
        // ...getObjItemsWithSearchTextInReadme(mks_parts.value),
        ...getObjItemsWithSearchTextInReadme(mks_items_sorted())
        // ...mks_items_sorted,
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
const MKS_Parts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71d2430c"]]);
export {
  MKS_Parts as default
};
