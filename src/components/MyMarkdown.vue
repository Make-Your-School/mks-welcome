<template>
    <div class="my-markdown-wrapper">
        <!-- <VueMarkdown :source="source" :plugins="md_plugins" :options="md_options" /> -->
        <!-- <div class="my-markdown" v-html="contentHTML"></div> -->
        <!-- <div class="my-markdown">{{ contentHTML  }}</div> -->
        <div v-for="(item, index) in content" :key="index">
            <MDHtml v-if="item.type == 'html'" :item="item"></MDHtml>
            <MDCode v-if="item.type == 'code'" :item="item"></MDCode>
            <MDAbbr v-if="item.type == 'abbr'" :item="item"></MDAbbr>
        </div>
    </div>
</template>

<script setup>
import { isProxy, toRaw } from 'vue';
import { computed, h, shallowRef, ref, unref, watch, watchEffect } from "vue";
import { useQuasar } from "quasar";

// maybe refactor the custom vu component injects with
// dynamically created components ?!
// https://stackoverflow.com/questions/69488256/vue-3-append-component-to-the-dom-best-practice

import MDHtml from "src/components/MDHtml.vue";
import MDCode from "src/components/MDCode.vue";
import MDAbbr from "src/components/MDAbbr.vue";
// import MyHtml from "./MyHtml.vue";

// import VueMarkdown from "vue-markdown-render";
// this component is based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle relative image urls i have to create it here myself..
import MarkdownIt from "markdown-it";

// https://github.com/valeriangalliat/markdown-it-anchor/tree/master
import anchor from "markdown-it-anchor";
import { full } from "markdown-it-emoji";

// import plugin_abbr from "src/components/markdown-it-plugin-abbr";
import plugin_abbr from "src/components/markdown-it-plugin-abbr-blocks";
import mksAbbr from "src/content_md/mksAbbr";
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
import cpp from "highlight.js/lib/languages/cpp";
// Then register the languages you need
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("c++", cpp);

const props = defineProps({
    source: String,
    filePath: String,
});

// const emit = defineEmits(['change', 'delete'])

// ------------------------------------------
// setup markdown-it

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
    //   permalink: anchor.permalink.headerLink()
});
md.value.use(plugin_abbr, {
    abbreviations:mksAbbr,
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

md.value.use(full);
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

// ------------------------------------------
// prepare content


const contentHTML = ref("");
const content = ref([]);

const addHTMLChunk = (tokens, token_start, token_end, env) => {
    let chunk = {
        type: "html",
        content: "",
    };
    const token_slice = tokens.slice(token_start, token_end +1)
    console.log("token_slice", token_slice);
    chunk.content = md.value.renderer.render(
        token_slice,
        md.value.options,
        env
    );
    content.value.push(chunk);
};
const addCodeChunk = (token, env) => {
    // console.log("addCodeChunk token.content", token.content);
    let chunk = {
        type: "code",
        content: token.content,
        codeLanguage: token.codeLanguage,
        filePath: token.filePath,
        codeFilePath: token.codeFilePath,
    };
    content.value.push(chunk);
};
const addAbbrChunk = (token, env) => {
    console.log("addAbbrChunk token.content", token.content);
    let chunk = {
        type: "abbr",
        content: token.content,
        abbr: token.abbr,
    };
    content.value.push(chunk);
};

watchEffect(async () => {
    // https://github.com/markdown-it/markdown-it/issues/256#issuecomment-224700130
    // we need to do it manually to be able to do async steps in between..
    const env = {
        filePath: props.filePath,
    };

    let tokens = md.value.parse(props.source, env);
    // console.log("tokens", tokens);
    // call async function
    await runEmbedCode(tokens, {}, env, md.value);

    // now lets split the tokens..
    console.log("split tokens into html and special parts...");
    let chunk_start = 0;
    for (let idx = 0; idx < tokens.length; idx++) {
        const token = tokens[idx];
        console.log(`tokens[${String(idx).padStart(3, " ")}]`, token);
        // we want to extract all code blocks..
        if (token.type == "fence") {
            console.log(`fence:  chunk_start ${chunk_start}, idx - 1 ${idx - 1}`);
            addHTMLChunk(tokens, chunk_start, idx - 1, env);
            addCodeChunk(token, env);
            chunk_start = idx + 1;
        }
        if (token.type == "abbr") {
            console.log(`abbr:  chunk_start ${chunk_start}, idx - 1 ${idx - 1}`);
            addHTMLChunk(tokens, chunk_start, idx - 1, env);
            addAbbrChunk(token, env);
            chunk_start = idx + 1;
        }
    }
    console.log(`chunk_start`, chunk_start);
    // add rest
    addHTMLChunk(tokens, chunk_start, tokens.length - 1, env);

    // console.log("tokens", tokens);
    console.log("content.value", toRaw(content.value));


    // md.value.renderer.rules.code = function (tokens, idx, options, env, self) {
    //     const token = tokens[idx];
    //     const item = {
    //         content: token.content,
    //         codeLanguage: token.codeLanguage,
    //         filePath: token.filePath,
    //         codeFilePath: token.codeFilePath,
    //     };
    //     return h(MDCode, {"item":item});
    //     // Pass the token to the default renderer.
    //     return defaultRender(tokens, idx, options, env, self);
    // };

    // console.log("content", content);
    // do final rendering
    // contentHTML.value = md.value.renderer.render(
    //     tokens,
    //     md.value.options,
    //     env
    // );
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
.my-markdown-wrapper
    padding: 1rem
    border-radius: 0.5rem

.my-markdown-wrapper > div
    display: inline

.my-markdown
    display: inline
    h1
        font-size: 4.0rem
        margin-top: 0
        font-weight: bold
    h2
        font-size: 3rem
        font-weight: bold
    h3
        font-size: 2rem
        font-weight: bold
    h4
        font-size: 1rem
        font-weight: bold
    h5
        font-size: 1rem
        font-weight: bold
    h6
        font-size: 1rem
        font-weight: bold
    // p
    //     font-size: 1rem
    //     font-weight: bold
    img
        // max-width:
        max-width: min(100%,15vw)
        width: auto
        height: auto

// .my-card .my-markdown h1:nth-child(1)
//        position: sticky
//        top: 1rem
//        text-shadow: 0 0 2px black, 0 0 5px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black
//.body--light .my-card .my-markdown h1:nth-child(1)
</style>
