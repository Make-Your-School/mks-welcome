// based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle some things differently we do it manually..

// import MarkdownIt from "markdown-it-async";
import MarkdownIt from 'markdown-it'

import matter from 'gray-matter'

import hljs from 'highlight.js'
// import "highlight.js/styles/night-owl.css";
// import 'highlight.js/styles/base16/solarized-dark.css';
// import hljs from 'highlight.js/lib/core';

import cpp from 'highlight.js/lib/languages/cpp'
// Then register the languages you need
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('c++', cpp)
import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('css', css)

const mditHighlightFn = function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(str, { language: lang }).value
        } catch (__) {
            console.log(__)
        }
    }
    return '' // use external default escaping
}

// ------------------------------------------
// setup markdown-it
// these settings should be matched with the ones in markdown-it-config.js

const md_online_options = {
    eval: false,
    html: true,
    linkify: true,
    typographer: true,
    highlight: mditHighlightFn,
}

export const mdo = new MarkdownIt(md_online_options)

// ------------------------------------------
// setup plugins

// import { full as mditPluginEmoji } from "markdown-it-emoji";
// mdo.use(mditPluginEmoji);

import { alert as mdit_alert } from '@mdit/plugin-alert'
mdo.use(mdit_alert, {
    alertNames: [
        'important',
        'note',
        'tip',
        'warning',
        'caution',
        'wichtig',
        'achtung',
        'warnung',
        'notiz',
        'info',
    ],
})

import mditPluginImgSrcAbsOnline from './markdown-it-plugin-img-src-abs-online'
mdo.use(mditPluginImgSrcAbsOnline)

// https://github.com/valeriangalliat/markdown-it-anchor/tree/master
// import mditPluginAnchor from "markdown-it-anchor";
// mdo.use(mditPluginAnchor, {
//     //   permalink: anchor.permalink.headerLink()
// });

// import { alert as mdit_alert } from "@mdit/plugin-alert";
// // import "@mdit/plugin-alert/style";
// // css loading now in `boot/markdown-load-css.js`
// mdo.use(mdit_alert);

// https://github.com/markdown-it/markdown-it-container
// import mditPluginContainer from "markdown-it-container";
// mdo.use(mditPluginContainer, "info");
// mdo.use(mditPluginContainer, "tip");
// mdo.use(mditPluginContainer, "important");
// mdo.use(mditPluginContainer, "caution");
// mdo.use(mditPluginContainer, "warning");
// mdo.use(mditPluginContainer, "warning", {
//     render: function (tokens, idx) {
//         console.log("tokens[idx]", tokens[idx]);
//         var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

//         if (tokens[idx].nesting === 1) {
//             // opening tag
//             return "<details><summary>" + mdo.utils.escapeHtml(m[1]) + "</summary>\n";
//         } else {
//             // closing tag
//             return "</details>\n";
//         }
//     },
// });

// https://github.com/nagaozen/markdown-it-toc-done-right
// import * as mdi_toc from "markdown-it-toc-done-right";
// mdo.use(mdi_toc);

// import markdownItPluginEmbedCode from "./markdown-it-plugin-embed-code";
// import { runEmbedCode } from "./markdown-it-plugin-embed-code";

// https://mdit-plugins.github.io/include.html#syntax
// import { include, include as mdit_include } from "@mdit/plugin-include";
// mdo.use(mdit_include, {
//     // your options, currentPath is required
//     currentPath: (env) => env.filePath,
// });
// this currently does not work - as es tries to use process.cwd
// so we write our own.
// mdo.use(markdownItPluginEmbedCode);
// sadly plugins can not be async.
// so we have to do the rendering steps manually - see below.

// import mditPluginImgSrcAbs from "components/markdown-it-plugins/markdown-it-plugin-img-src-abs";
// mdo.use(mditPluginImgSrcAbs);

// // not used because of non interactive rendering...
// import MarkdownItPluginCodeAsMDCode from "./markdown-it-plugin-code-as-mdcode";
// mdo.use(MarkdownItPluginCodeAsMDCode);
// // eslint-disable-next-line no-unused-vars
// import MDCode from "components/MDComponents/MDCode.vue";

// // not used because of non interactive rendering...
// import MarkdownItPluginAbbrAsMDAbbr from './markdown-it-plugin-abbr-as-mdabbr'
// // import mksAbbr from "src/content_md/mksAbbr";
// // eslint-disable-next-line no-unused-vars
// import MDAbbr from "components/MDComponents/MDAbbr.vue";
// // import mksAbbrLoad from "./markdown-it-plugin-abbr-as-mdabbr.js";
// // const mksAbbrCollection = mksAbbrLoad();
// // console.log("markdown-rendering.js - mksAbbrCollection", mksAbbrCollection);
// // import mksAbbrCollection from "src/../markdown-it-config.js";
// mdo.use(MarkdownItPluginAbbrAsMDAbbr, {
//     // abbreviations: mksAbbrCollection,
// })

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
        excerpt_separator: '<!-- more_details -->',
    })
    // console.log("processedObj:", processedObj);
    // console.groupEnd();
    return processedObj
}

export const md2html = (source, filePath = undefined) => {
    // https://github.com/markdown-it/markdown-it/issues/256#issuecomment-224700130
    // we need to do it manually to be able to do async steps in between..
    // console.log('md2html', filePath)

    // console.log("source:", source);
    const processedObj = preProcessingMD(source)
    // console.log("processedObj:", processedObj);
    // return mdo.render(processedObj.content);

    const env = {
        filePath: filePath,
    }

    // console.log('env', env)
    let tokens = mdo.parse(processedObj.content, env)
    // console.log("tokens", tokens);

    // call async function
    // await runEmbedCode(tokens, {}, env, md);

    return mdo.renderer.render(tokens, mdo.options, env)

    // console.log("tokens", tokens);
    // console.log("content.value", toRaw(content.value));

    // mdo.renderer.rules.code = function (tokens, idx, options, env, self) {
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
    // contentHTML.value = mdo.renderer.render(
    //     tokens,
    //     mdo.options,
    //     env
    // );
    // return mdo.render(props.source, env);
    // const htmlComponent = new MyHtml({
    //     props: {
    //         source: contentHTML,
    //     },
    // });
    // htmlComponent.$mount();
}

// maybe refactor the custom vu component injects with
// dynamically created components ?!
// https://stackoverflow.com/questions/69488256/vue-3-append-component-to-the-dom-best-practice
// <!-- <VueMarkdown :source="source" :plugins="md_plugins" :options="md_options" /> -->
//         <!-- <div class="my-markdown" v-html="contentHTML"></div> -->
//         <!-- <div class="my-markdown">{{ contentHTML  }}</div> -->

export default md2html
