import { ah as useRouter, a$ as onBeforeRouteLeave, b0 as onBeforeRouteUpdate, H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, D as createTextVNode, Q as QBtn, E as toDisplayString, n as unref, aj as resolveDynamicComponent } from "./index-BMTLdRIA.js";
import { Q as QPage } from "./QPage-B_rFYzrh.js";
import { u as useMDContentStore } from "./mdContent-CM8iACcv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-BMJXePaj.js";
import "./about-Bo15JNWo.js";
const _hoisted_1 = { class: "info" };
const _hoisted_2 = { class: "material_number" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = ["alt"];
const _hoisted_5 = ["href"];
const _hoisted_6 = ["href"];
const _sfc_main = {
  __name: "MKS_Part_Details",
  props: {
    part_name: String
  },
  setup(__props) {
    const props = __props;
    console.log("props.part_name", props.part_name);
    const mdContent = useMDContentStore();
    console.log("mdContent", mdContent);
    const part = mdContent.mks.parts[props.part_name];
    console.log("part", part);
    const mysLink = location.href;
    const publicPath = "/mks-welcome/";
    const coverImage = `${publicPath}${part.path_base}/${part.meta.coverImage}`;
    const router = useRouter();
    async function backHandler() {
      if (navigation.canGoBack) {
        console.log("canGoBack");
        await router.back();
      } else {
        router.push("/");
      }
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
      return openBlock(), createBlock(QPage, { class: "part-detail-page" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            flat: "",
            dense: "",
            round: "",
            icon: "arrow_back",
            "aria-label": "zurück zur Übersicht",
            class: "fixed-top-left q-ma-sm back",
            onClick: _cache[0] || (_cache[0] = ($event) => backHandler())
          }),
          createBaseVNode("header", null, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("h2", _hoisted_2, toDisplayString(unref(part).meta.material_number), 1),
              createBaseVNode("h1", _hoisted_3, toDisplayString(unref(part).meta.title), 1)
            ]),
            createBaseVNode("img", {
              src: coverImage,
              alt: unref(part).meta.title
            }, null, 8, _hoisted_4)
          ]),
          (openBlock(), createBlock(resolveDynamicComponent(unref(part).content), { class: "part-content" })),
          _cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1)),
          createBaseVNode("a", { href: unref(mysLink) }, toDisplayString(props.part_name), 9, _hoisted_5),
          _cache[2] || (_cache[2] = createTextVNode(" - (")),
          createBaseVNode("a", {
            href: unref(part).submodule.urlWeb,
            target: "_blank"
          }, "edit source", 8, _hoisted_6),
          _cache[3] || (_cache[3] = createTextVNode(") "))
        ]),
        _: 1
      });
    };
  }
};
const MKS_Part_Details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca9d09f2"]]);
export {
  MKS_Part_Details as default
};
