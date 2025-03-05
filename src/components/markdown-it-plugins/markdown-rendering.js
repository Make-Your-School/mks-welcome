// based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle some things differently we do it manually..


// import MarkdownIt from "markdown-it-async";
import MarkdownIt from "markdown-it";

import matter from "gray-matter";

import hljs from "highlight.js";
// import "highlight.js/styles/night-owl.css";
// import 'highlight.js/styles/base16/solarized-dark.css';
// import hljs from 'highlight.js/lib/core';

import cpp from "highlight.js/lib/languages/cpp";
// Then register the languages you need
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("c++", cpp);

const mditHighlightFn = function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(str, { language: lang }).value;
        } catch (__) {
            console.log(__);
        }
    }
    return ""; // use external default escaping
};

// ------------------------------------------
// setup markdown-it
// these settings should be matched with the ones in markdown-it-config.js

const md_options = {
    eval: false,
    html: true,
    linkify: true,
    typographer: true,
    highlight: mditHighlightFn,
};

export const md = new MarkdownIt(md_options);

// ------------------------------------------
// setup plugins

import { full as mditPluginEmoji } from "markdown-it-emoji";
md.use(mditPluginEmoji);

// https://github.com/valeriangalliat/markdown-it-anchor/tree/master
import mditPluginAnchor from "markdown-it-anchor";
md.use(mditPluginAnchor, {
    //   permalink: anchor.permalink.headerLink()
});

import { alert as mdit_alert } from "@mdit/plugin-alert";
// import "@mdit/plugin-alert/style";
// css loading now in `boot/markdown-load-css.js`
md.use(mdit_alert);

// https://github.com/markdown-it/markdown-it-container
// import mditPluginContainer from "markdown-it-container";
// md.use(mditPluginContainer, "info");
// md.use(mditPluginContainer, "tip");
// md.use(mditPluginContainer, "important");
// md.use(mditPluginContainer, "caution");
// md.use(mditPluginContainer, "warning");
// md.use(mditPluginContainer, "warning", {
//     render: function (tokens, idx) {
//         console.log("tokens[idx]", tokens[idx]);
//         var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

//         if (tokens[idx].nesting === 1) {
//             // opening tag
//             return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n";
//         } else {
//             // closing tag
//             return "</details>\n";
//         }
//     },
// });

// https://github.com/nagaozen/markdown-it-toc-done-right
// import * as mdi_toc from "markdown-it-toc-done-right";
// md.use(mdi_toc);

// import markdownItPluginEmbedCode from "./markdown-it-plugin-embed-code";
import { runEmbedCode } from "./markdown-it-plugin-embed-code";

// https://mdit-plugins.github.io/include.html#syntax
// import { include, include as mdit_include } from "@mdit/plugin-include";
// md.use(mdit_include, {
//     // your options, currentPath is required
//     currentPath: (env) => env.filePath,
// });
// this currently does not work - as es tries to use process.cwd
// so we write our own.
// md.use(markdownItPluginEmbedCode);
// sadly plugins can not be async.
// so we have to do the rendering steps manually - see below.


import mditPluginImgSrcAbs from "components/markdown-it-plugins/markdown-it-plugin-img-src-abs";
md.use(mditPluginImgSrcAbs);

// not used because of non interactive rendering...
import MarkdownItPluginCodeAsMDCode from "./markdown-it-plugin-code-as-mdcode";
md.use(MarkdownItPluginCodeAsMDCode);
// eslint-disable-next-line no-unused-vars
import MDCode from "components/MDComponents/MDCode.vue";

// not used because of non interactive rendering...
import MarkdownItPluginAbbrAsMDAbbr from './markdown-it-plugin-abbr-as-mdabbr'
// import mksAbbr from "src/content_md/mksAbbr";
// eslint-disable-next-line no-unused-vars
import MDAbbr from "components/MDComponents/MDAbbr.vue";
// import mksAbbrLoad from "./markdown-it-plugin-abbr-as-mdabbr.js";
// const mksAbbrCollection = mksAbbrLoad();
// console.log("markdown-rendering.js - mksAbbrCollection", mksAbbrCollection);
// import mksAbbrCollection from "src/../markdown-it-config.js";
md.use(MarkdownItPluginAbbrAsMDAbbr, {
    // abbreviations: mksAbbrCollection,
})

// ------------------------------------------
// rendering

// const preProcessingMD = (source, path_base=undefined) => {
export const preProcessingMD = (source) => {
    // console.group("preProcessingMD");
    // console.log("source:", source);
    // console.log("path_base:", path_base);
    // gray-matter needs vite-plugin-node-polyfills setup in quasar.config.js
    const processedObj = matter(source, {
        eval: false,
        excerpt_separator: "<!-- more_details -->",
    });
    // console.log("processedObj:", processedObj);
    // console.groupEnd();
    return processedObj;
};

export const md2html = async (source, filePath=undefined) => {
    // https://github.com/markdown-it/markdown-it/issues/256#issuecomment-224700130
    // we need to do it manually to be able to do async steps in between..

    // console.log("source:", source);
    const processedObj = preProcessingMD(source);
    // console.log("processedObj:", processedObj);
    // return md.render(processedObj.content);

    const env = {
        filePath: filePath,
    };

    let tokens = md.parse(processedObj.content, env);
    // console.log("tokens", tokens);

    // call async function
    await runEmbedCode(tokens, {}, env, md);

    return md.renderer.render(tokens, md.options, env);

    // console.log("tokens", tokens);
    // console.log("content.value", toRaw(content.value));

    // md.renderer.rules.code = function (tokens, idx, options, env, self) {
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
    // contentHTML.value = md.renderer.render(
    //     tokens,
    //     md.options,
    //     env
    // );
    // return md.render(props.source, env);
    // const htmlComponent = new MyHtml({
    //     props: {
    //         source: contentHTML,
    //     },
    // });
    // htmlComponent.$mount();
};

// maybe refactor the custom vu component injects with
// dynamically created components ?!
// https://stackoverflow.com/questions/69488256/vue-3-append-component-to-the-dom-best-practice
// <!-- <VueMarkdown :source="source" :plugins="md_plugins" :options="md_options" /> -->
//         <!-- <div class="my-markdown" v-html="contentHTML"></div> -->
//         <!-- <div class="my-markdown">{{ contentHTML  }}</div> -->

export default md2html;
