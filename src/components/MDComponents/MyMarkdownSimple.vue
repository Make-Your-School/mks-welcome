<template>
    <div class="my-markdown-wrapper">
        <!-- <mdrender></mdrender> -->
        <div class="my-markdown" v-html="contentHTML"></div>
    </div>
</template>

<script setup>
// import { isProxy, toRaw } from "vue";
// import { toRaw, h } from "vue";
import { toRaw} from "vue";
// import { computed, h, shallowRef, ref, unref, watch, watchEffect } from "vue";
import {  shallowRef, ref, watchEffect } from "vue";
// import { useQuasar } from "quasar";

// import VueMarkdown from "vue-markdown-render";
// this component is based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle relative image urls i have to create it here myself..
import MarkdownIt from "markdown-it";

// import hljs from "highlight.js";
// // import "highlight.js/styles/night-owl.css";
// // import 'highlight.js/styles/base16/solarized-dark.css';
// // import hljs from 'highlight.js/lib/core';
// import cpp from "highlight.js/lib/languages/cpp";
// // Then register the languages you need
// hljs.registerLanguage("cpp", cpp);
// hljs.registerLanguage("c++", cpp);

import MarkdownItPluginCodeAsMDCode from "components/markdown-it-plugins/markdown-it-plugin-code-as-mdcode";

const props = defineProps({
    source: String,
    filePath: String,
});

// ------------------------------------------
// setup markdown-it

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    // breaks:       false,
    // highlight: function (str, lang) {
    //     if (lang && hljs.getLanguage(lang)) {
    //         try {
    //             return hljs.highlight(str, { language: lang }).value;
    //         } catch (__) {console.log(__);}
    //     }
    //     return ""; // use external default escaping
    // },
    eval: false,
};

const md = shallowRef(new MarkdownIt(md_options));


md.value.use(MarkdownItPluginCodeAsMDCode);

// ------------------------------------------
// prepare content

const contentHTML = ref("");

watchEffect(async () => {
    // const env = {
    //     filePath: props.filePath,
    // };

    // let tokens = md.value.parse(props.source, env);
    // console.log("tokens", tokens);

    // contentHTML.value = md.value.renderer.render(
    //     tokens,
    //     md.value.options,
    //     env
    // );

    contentHTML.value = md.value.render(props.source)
    console.log("contentHTML.value", toRaw(contentHTML.value));
});

// const mdrender = () => {
//     return h('div', contentHTML.value);
// };
</script>
./markdown-it-plugins/markdown-it-plugin-code-as-mdcode
