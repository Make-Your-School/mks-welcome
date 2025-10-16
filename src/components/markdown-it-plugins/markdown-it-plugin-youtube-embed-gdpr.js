// loosly based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

// export const stripContentHeader = (content) => {
//     console.log(content)
//     const regex_header = /^.*(?:## Beschreibung)/gs
//     return content.replace(regex_header, '')
// }

/**
 * remove first h1 heading and the following coverImage.
 * @module youtubeEmbed
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports youtubeEmbed
 */
export default function youtubeEmbed(md) {

    const defaultRender =
        md.renderer.rules.link ||
        function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

    md.renderer.rules.link = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        if (token.meta == undefined) {
            token.meta = {};
        }
        let srcValue = token.attrGet("href");
        if (srcValue.includes("youtube")) {
            // we think we have a youtube link
            // https://www.youtube-nocookie.com/embed/
            // token.attrSet('href', )
        }
        return defaultRender(tokens, idx, options, env, self);
    };
}
