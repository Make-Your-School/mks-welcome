// loosly based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

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
        let srcValue = token.attrGet("src");
        if (!srcValue.startsWith("http")) {
            // console.log(`srcValue: '${srcValue}'`);
            // console.log(`env: `, env);
            // we think we have a relative path to tweak..
            srcValue = srcValue.replace("./", env.filePath);
            // console.log(`srcValue: (moded) '${srcValue}'`);
            // write back
            token.attrSet("src", srcValue);
            // console.log("check attr:", token.attrGet("src"));
        }
        return defaultRender(tokens, idx, options, env, self);
    };
}

