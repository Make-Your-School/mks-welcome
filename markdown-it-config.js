import MarkdownItPluginCodeAsMDCode from "./src/components/markdown-it-plugins/markdown-it-plugin-code-as-mdcode";
import MarkdownItPluginAbbrAsMDAbbr from "./src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr";
//
import { mksAbbrLoadNodeJS } from "./src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr";

import { full as mditPluginEmoji } from "markdown-it-emoji";

import mditPluginAnchor from "markdown-it-anchor";

import { alert as mdit_alert } from "@mdit/plugin-alert";

// https://github.com/markdown-it/markdown-it-container
// import mditPluginContainer from "markdown-it-container";


// import markdownItPluginEmbedCode from "./markdown-it-plugin-embed-code";
import { runEmbedCode } from "src/components/markdown-it-plugins/markdown-it-plugin-embed-code";

export const mksAbbrCollection = mksAbbrLoadNodeJS();

const myRenderingInside = (tokens, options, env, md) => {
// const myRenderingInside = async (tokens, options, env) => {
    // console.group("myRenderingInside");
    // console.log("tokens", tokens);
    // console.log("options", options);
    // console.log("env", env);
    // console.log("md", md);
    runEmbedCode(tokens, options, env, md);
    // console.groupEnd();
};

const markdownItSetup = async (md) => {
    md.use(MarkdownItPluginCodeAsMDCode, {});

    md.use(MarkdownItPluginAbbrAsMDAbbr, {
        abbreviations: mksAbbrCollection,
    });

    md.use(mditPluginEmoji);

    // https://github.com/valeriangalliat/markdown-it-anchor/tree/master
    md.use(mditPluginAnchor, {
        //   permalink: anchor.permalink.headerLink()
    });

    // import "@mdit/plugin-alert/style";
    // css loading now in `boot/markdown-load-css.js`
    md.use(mdit_alert);

    // do we need this?
    // import mditPluginImgSrcAbs from "components/markdown-it-plugins/markdown-it-plugin-img-src-abs";
    // md.use(mditPluginImgSrcAbs);

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

    // md.use(LinkAttributes, {
    //     matcher: (link: string) => /^https?:\/\//.test(link),
    //     attrs: {
    //         target: '_blank',
    //         rel: 'noopener',
    //     },
    // });
};

// options see
// https://github.com/unplugin/unplugin-vue-markdown/blob/main/src/types.ts
const markdownItConfig = {
    // wrapperClasses: 'prose prose-sm m-auto text-left',
    // headEnabled: true,
    exposeExcerpt: true,
    // excerpt: true,
    break: true,
    // frontmatterOptions: { grayMatterOptions: {} },
    transforms: {
        // before: fn,
        renderingInside: myRenderingInside,
        // after: fn,
    },
    // linkify: true,
    // typographer: true,
    markdownItSetup: markdownItSetup,
};

export default markdownItConfig;
