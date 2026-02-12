import { r as ref, ah as useRouter, ab as watchEffect, H as createBlock, v as openBlock, P as withCtx, j as createVNode, l as createBaseVNode, D as createTextVNode, Q as QBtn, n as unref, E as toDisplayString } from "./index-Dd0mq4d2.js";
import { Q as QPage } from "./QPage-zYU87PQ4.js";
import { _ as _sfc_main$1 } from "./MyMarkdown-BvnyGcEE.js";
import { u as useMDContentStore } from "./mdContent-BenjfN4f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./readme-DgBpQiVs.js";
import "./about-BfpJR8QQ.js";
const _hoisted_1 = ["href"];
const _sfc_main = {
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
    const mdFile = ref(`../${part.path_base}/${props.pathMatch.join("/")}`);
    const mdFileContent = ref(null);
    const router = useRouter();
    async function backHandler() {
      if (navigation.canGoBack) {
        await router.back().finished;
      } else {
        router.push("/");
      }
    }
    watchEffect(async () => {
      mdFile.value = `/mks-welcome/${part.path_base}/${props.pathMatch.join("/")}`;
      console.log("mdFile.value", mdFile.value);
      const response = await fetch(mdFile.value);
      console.log(response);
      mdFileContent.value = await response.text();
      console.log("mdFileContent.value", mdFileContent.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "part-detail-page" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
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
          _cache[1] || (_cache[1] = createBaseVNode("div", null, "Ping!", -1)),
          _cache[2] || (_cache[2] = createBaseVNode("hr", null, null, -1)),
          createBaseVNode("a", { href: unref(mysLink) }, toDisplayString(props.part_name + "/" + props.pathMatch.join("/")), 9, _hoisted_1),
          _cache[3] || (_cache[3] = createTextVNode(" - (")),
          createBaseVNode("a", {
            href: urlWebSource,
            target: "_blank"
          }, "edit source"),
          _cache[4] || (_cache[4] = createTextVNode(") "))
        ]),
        _: 1
      });
    };
  }
};
const MKS_Part_SubMarkdownFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f02d439"]]);
export {
  MKS_Part_SubMarkdownFile as default
};
