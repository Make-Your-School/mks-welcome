import MarkdownItPluginCodeAsMDCode from './src/components/markdown-it-plugins/markdown-it-plugin-code-as-mdcode'

import MarkdownItPluginAbbrAsMDAbbr from './src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr.js'
import { mksAbbrLoadNodeJS } from './src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr.js'
export const mksAbbrCollection = mksAbbrLoadNodeJS()

import { full as mditPluginEmoji } from 'markdown-it-emoji'

import mditPluginAnchor from 'markdown-it-anchor'

import { alert as mdit_alert } from '@mdit/plugin-alert'

// https://github.com/markdown-it/markdown-it-container
// import mditPluginContainer from "markdown-it-container";

import mditPluginImgSrcAbs from './src/components/markdown-it-plugins/markdown-it-plugin-img-src-abs'

import { mditPluginEmbedCodeNodejs } from './src/components/markdown-it-plugins/markdown-it-plugin-embed-code-nodejs.js'

const markdownItSetup = async (md) => {
    md.use(MarkdownItPluginCodeAsMDCode, {})

    md.use(MarkdownItPluginAbbrAsMDAbbr, {
        abbreviations: mksAbbrCollection,
    })

    md.use(mditPluginEmoji)

    md.use(mditPluginEmbedCodeNodejs)

    // https://github.com/valeriangalliat/markdown-it-anchor/tree/master
    md.use(mditPluginAnchor, {
        // https://github.com/valeriangalliat/markdown-it-anchor/tree/master?tab=readme-ov-file#link-after-header
        // permalink: mditPluginAnchor.permalink.linkAfterHeader({
        //     style: "visually-hidden",
        //     assistiveText: (title) => `Permalink to “${title}”`,
        //     visuallyHiddenClass: "visually-hidden",
        //     wrapper: ['<div class="wrapper">', "</div>"],
        // }),
    })

    // import "@mdit/plugin-alert/style";
    // css loading now in `boot/markdown-load-css.js`
    md.use(mdit_alert)

    md.use(mditPluginImgSrcAbs)

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
}

// options see
// https://github.com/unplugin/unplugin-vue-markdown/blob/main/src/types.ts
const markdownItConfig = {
    // wrapperClasses: 'prose prose-sm m-auto text-left',
    break: true,
    // linkify: true,
    // typographer: true,
    excerpt: true,
    frontmatterOptions: {
        grayMatterOptions: {
            eval: false,
            excerpt_separator: '<!-- more_details -->',
        },
    },
    transforms: {
        // before: fn,
        // after: fn,
    },
    markdownItSetup: markdownItSetup,
}

export default markdownItConfig
