// loosly based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

// import fs from "node:fs";
import path from "node:path";

/**
 * make all img 'src' attribute absolute.
 * @module imgSrcAbs
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports imgSrcAbs
 */
export default function imgSrcAbs(md) {
    const defaultRender =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        if (token.meta == undefined) {
            token.meta = {};
        }
        let srcValue = token.attrGet("src");
        if (!srcValue.startsWith("http")) {
            // we think we have a relative path to tweak..
            // console.log(`srcValue: '${srcValue}'`);
            // console.log(`check env: `, env);
            if (env?.id) {
                console.log(`env.id found:`, env.id);
                // srcValue = srcValue.replace("./", env.public);
                // console.log(`__dirname`, __dirname);
                // console.log(`process.cwd()`, process.cwd());
                const fullPath = env.id;
                const projectRelPath = path.relative(process.cwd(), fullPath);
                const basePath = path.dirname(projectRelPath).replace("public", "/mks-welcome");
                console.log("basePath", basePath);
                const filePath = srcValue.replace("./", basePath + path.sep);
                console.log("filePath", filePath);

                token.meta.filePath = filePath;
                // console.log(`srcValue: (moded) '${srcValue}'`);
                // write back
                token.attrSet("src", filePath);
                // console.log("check attr:", token.attrGet("src"));
            } else {
                console.log("no env information found to build path from.");
            }
        }
        return defaultRender(tokens, idx, options, env, self);
    };
}
