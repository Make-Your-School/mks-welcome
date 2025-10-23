// loosly based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

// export const stripContentHeader = (content) => {
//     console.log(content)
//     const regex_header = /^.*(?:## Beschreibung)/gs
//     return content.replace(regex_header, '')
// }

/**
 * remove first h1 heading and the following coverImage.
 * @module mditPluginRemoveTitleAndCoverImage
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports mditPluginRemoveTitleAndCoverImage
 */
export default function mditPluginRemoveTitleAndCoverImage(md) {

    function header_remove(state) {
        console.log(`mditPluginRemoveTitleAndCoverImage.header_remove`)
        const blockTokens = state.tokens

        for (let j = 0, l = blockTokens.length; j < l; j++) {
            console.log(blockTokens[j].type)
            // if (blockTokens[j].type !== 'inline') {
            //     continue
            // }
            // let tokens = blockTokens[j].children

            // We scan from the end, to keep position when new tags added.
            // for (let i = tokens.length - 1; i >= 0; i--) {
            //     const currentToken = tokens[i]
            //     if (currentToken.type !== 'text') {
            //         continue
            //     }

            //     // let pos = 0
            //     // const text = currentToken.content
            //     // reg.lastIndex = 0
            //     // const nodes = []
            //     // replace current node
            //     // blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes)
            // }
        }
    }


    md.core.ruler.after('block', 'header_remove', header_remove)


    // const defaultRender =
    //     md.renderer.rules.image ||
    //     function (tokens, idx, options, env, self) {
    //         return self.renderToken(tokens, idx, options);
    //     };

    // md.renderer.rules.image = function (tokens, idx, options, env, self) {
    //     const token = tokens[idx];
    //     if (token.meta == undefined) {
    //         token.meta = {};
    //     }
    //     let srcValue = token.attrGet("src");
    //     if (!srcValue.startsWith("http")) {
    //         // we think we have a relative path to tweak..
    //         // console.log(`srcValue: '${srcValue}'`);
    //         // console.log(`check env: `, env);
    //         if (env?.id) {
    //             // console.log(`env.id found:`, env.id);
    //             // srcValue = srcValue.replace("./", env.public);
    //             // console.log(`__dirname`, __dirname);
    //             // console.log(`process.cwd()`, process.cwd());
    //             const fullPath = env.id;
    //             const projectRelPath = path.relative(process.cwd(), fullPath);
    //             const basePath = path.dirname(projectRelPath).replace("public", "/mks-welcome");
    //             // console.log("basePath", basePath);
    //             const filePath = srcValue.replace("./", basePath + path.sep);
    //             // console.log("filePath", filePath);

    //             token.meta.filePath = filePath;
    //             // console.log(`srcValue: (moded) '${srcValue}'`);
    //             // write back
    //             token.attrSet("src", filePath);
    //             // console.log("check attr:", token.attrGet("src"));
    //         } else {
    //             console.log("no env information found to build path from.");
    //         }
    //     }
    //     return defaultRender(tokens, idx, options, env, self);
    // };
}
