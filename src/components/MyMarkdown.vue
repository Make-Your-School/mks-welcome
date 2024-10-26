<template>
    <!-- <VueMarkdown :source="source" :plugins="md_plugins" :options="md_options" /> -->
    <!-- <div class="my-markdown" v-html="contentHTML"></div> -->
    <div class="my-markdown-wrapper">
        <div v-for="(item, index) in content" :key="index">
            <div v-if="item.type == 'html'" v-html="item.content" class="my-markdown"></div>
            <div v-if="item.type == 'code'">
                <span>{{ item.include_path }}</span>
                <VCodeBlock
                    :code="item.content"
                    highlightjs
                    label="Hello World"
                    :lang="item.codeLanguage"
                    :theme="theme"
                ></VCodeBlock>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
import { useQuasar } from "quasar";

import VCodeBlock from "@wdns/vue-code-block";

// import MyHtml from "./MyHtml.vue";

// import VueMarkdown from "vue-markdown-render";
// this component is based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle relative image urls i have to create it here myself..
import MarkdownIt from "markdown-it";

// https://github.com/valeriangalliat/markdown-it-anchor/tree/master
import anchor from "markdown-it-anchor";

// https://github.com/nagaozen/markdown-it-toc-done-right
// import * as mdi_toc from "markdown-it-toc-done-right";

// import { include, include as mdit_include } from "@mdit/plugin-include";

import markdownItPluginImgSrcAbs from "./markdown-it-plugin-img-src-abs";
// import markdownItPluginEmbedCode from "./markdown-it-plugin-embed-code";
import { runEmbedCode } from "./markdown-it-plugin-embed-code";

import hljs from "highlight.js";
// import "highlight.js/styles/night-owl.css";
// import 'highlight.js/styles/base16/solarized-dark.css';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// // Then register the languages you need
// hljs.registerLanguage('javascript', javascript);

const props = defineProps({
    source: String,
    filePath: String,
});

// const emit = defineEmits(['change', 'delete'])

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    // breaks:       false,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ""; // use external default escaping
    },
    eval: false,
};

const md = shallowRef(new MarkdownIt(md_options));

md.value.use(anchor, {
  permalink: anchor.permalink.headerLink()
});

// md.value.use(mdi_toc);

// https://mdit-plugins.github.io/include.html#syntax
// md.value.use(mdit_include, {
//     // your options, currentPath is required
//     currentPath: (env) => env.filePath,
// });
// this currently does not work - as es tries to use process.cwd
// so we write our own.
// md.value.use(markdownItPluginEmbedCode);
// sadly plugins can not be async.
// so we have to do the rendering steps manually - see below.

md.value.use(markdownItPluginImgSrcAbs);

// function setupPlugins(plugins){
//     plugins.map(item => {
//         const [plugin, plugin_options] = item;
//         return (instance) => instance.use(plugin, plugin_options)
//     });
//     return
// }

// function plugin_with_options(plugin, options) {
//     // https://github.com/cloudacy/vue-markdown-render/issues/23#issuecomment-2136004517
//     return (instance) => instance.use(plugin, options);
// }

// const md_plugins = [MarkdownItAnchor, mdit_include];
// const md_plugins = [
//     MarkdownItAnchor,
//     plugin_with_options(mdit_include, { currentPath: (env) => env.filePath }),
// ];
// const md_plugins = [MarkdownItAnchor];

// const contentHTML = ref([]);
const content = ref([]);

const addHTMLChunk = (tokens, token_start, token_end, env) => {
    let chunk = {
        type: "html",
        content: "",
    };
    chunk.content = md.value.renderer.render(
        tokens.splice(token_start, token_end),
        md.value.options,
        env
    );
    content.value.push(chunk);
};
const addCodeChunk = (token, env) => {
    let chunk = {
        type: "code",
        content: token.content,
        codeLanguage: token.codeLanguage,
        filePath: token.filePath,
        codeFilePath: token.codeFilePath,
    };
    content.value.push(chunk);
};

const theme = ref("base16/solarized-dark");
const $q = useQuasar();
watch(
    () => $q.dark.isActive,
    (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
            // dark
            theme.value = "base16/solarized-dark";
        } else {
            // light
            theme.value = "base16/solarized-light";
        }
    }
);

watchEffect(async () => {
    // https://github.com/markdown-it/markdown-it/issues/256#issuecomment-224700130
    // we need to do it manually to be able to do async steps in between..
    const env = {
        filePath: props.filePath,
    };

    let tokens = md.value.parse(props.source, env);
    // call async function
    await runEmbedCode(tokens, {}, env, md.value);

    // now lets split the tokens in parseInt.
    // we want to extract all code blocks..
    let chunk_start = 0;
    for (let idx = 0; idx < tokens.length; idx++) {
        const token = tokens[idx];
        if (token.type == "fence") {
            addHTMLChunk(tokens, chunk_start, idx - 1, env);
            addCodeChunk(token, env);

            chunk_start = idx + 1;
        }
    }
    // add rest
    addHTMLChunk(tokens, chunk_start, tokens.length - 1, env);

    // do final rendering
    // return md.value.render(props.source, env);
    // const htmlComponent = new MyHtml({
    //     props: {
    //         source: contentHTML,
    //     },
    // });
    // htmlComponent.$mount();
});
</script>

<style lang="sass">
.my-markdown
    h1
        font-size: 4rem
    h2
        font-size: 3rem
    h3
        font-size: 2rem
    h4
        font-size: 1rem
    h5
        font-size: 1rem
    h6
        font-size: 1rem
    img
        max-width: 10vw
.my-card .my-markdown h1:nth-child(1)
        position: sticky
        top: 1rem
        text-shadow: 0 0 2px black, 0 0 5px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black
        background-color: inherit
.body--light .my-card .my-markdown h1:nth-child(1)
        text-shadow: 0 0 2px white, 0 0 5px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white
</style>
, watchEffect
