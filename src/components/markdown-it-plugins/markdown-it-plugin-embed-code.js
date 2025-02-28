// based & inspired by
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js
// https://github.com/camelaissani/markdown-it-include
// https://github.com/tokusumi/markdown-embed-code

// check with https://regex101.com/
// c++ :./relative/file/to/your/code.cpp
// const RE_INFO = /(?<codeLang>.*?)\s?\:(?<codeFilePath>.*)/;
const RE_INFO = /(?<codeLang>.*?)\s?:(?<codeFilePath>.*)/;

// const embedCode = async (tokens, idx, options, env, self) => {
const embedCode = async (tokens, idx, options, env) => {
    const token = tokens[idx];
    console.log(`token: `, token);
    const reResult = RE_INFO.exec(token.info);
    console.log(`reResult: `, reResult);
    if (reResult) {
        const { codeLang, codeFilePath } = reResult.groups;
        // console.log(`codeLang: `, codeLang);
        // console.log(`codeFilePath: `, codeFilePath);
        if (codeFilePath) {
            // found code file to include.
            // let us first try to change relative path to absolut:
            const filePath = codeFilePath.replace("./", env.filePath);
            // console.log(`filePath: `, filePath);
            let codeContent = undefined;
            try {
                codeContent = await fetch(filePath).then(async (response) => {
                    console.log(`response: `, response);
                    if (response.status == 200) {
                        return await response.text();
                    } else if (response.status == 404) {
                        throw new Error(`embed failed: file '${filePath}' not found.`, response);
                    } else {
                        throw new Error(`embed failed.`, response);
                    }
                });
                // console.log(`codeContent: `, codeContent);
            } catch (error) {
                console.log(error);
            }
            if (codeContent) {
                // console.log("overwrite token.content.");
                token.content = codeContent;
                token.codeLanguage = codeLang;
                token.codeFilePath = codeFilePath;
                token.filePath = filePath;
                // console.log("token", token);
            }
        }
    }
};

/**
 * embed code from relative file paths
 * example:
 * ```md
 * ```c++ :./relative/file/to/your/code.cpp
 *  // this code here is overwritten..
 *  // this way you can embed a info here for renderer that do not understand the embedding..
 *  //something like:
 *
 *  // please look at ./relative/file/to/your/code.cpp
 * ```
 * @module runEmbedCode
 * @param {MarkdownItTokens} tokens - MarkdownIt instance
 * @param {MarkdownItOptions} options - options Object
 * @param {Object} env - environment options Object
 * @param {MarkdownIt} self - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports runEmbedCode
 */
export const runEmbedCode = async (tokens, options, env, self) => {
    for (let idx = 0; idx < tokens.length; idx++) {
        const token = tokens[idx];
        if (token.type == "fence") {
            console.log("ping", token);
            await embedCode(tokens, idx, options, env, self);
        }
    }
};

// this sadly does not work... as we need async to load the file..
export function pluginEmbedCode(md) {
    const defaultRender =
        md.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

    md.renderer.rules.fence = async function (tokens, idx, options, env, self) {
        // console.log(`tokens: `, tokens);
        // console.log(`env: `, env);
        const token = tokens[idx];
        console.log(`token: `, token);
        const reResult = RE_INFO.exec(token.info);
        // console.log(`reResult: `, reResult);
        if (reResult) {
            const { codeLang, codeFilePath } = reResult.groups;
            // console.log(`codeLang: `, codeLang);
            // console.log(`codeFilePath: `, codeFilePath);
            if (codeFilePath) {
                // found code file to include.
                // let us first try to change relative path to absolut:
                const filePath = codeFilePath.replace("./", env.filePath);
                // console.log(`filePath: `, filePath);
                let codeContent = undefined;
                try {
                    codeContent = await fetch(filePath).then(async (response) => {
                        return await response.text();
                    });
                    console.log(`codeContent: `, codeContent);
                } catch (error) {
                    console.log(error);
                }
                if (codeContent) {
                    token.content = codeContent;
                    token.meta = {};
                    token.meta.codeLang = codeLang;
                }
            }
        }
        // let srcValue = token.attrGet("src");
        // if (!srcValue.startsWith("http")) {
        //     // console.log(`srcValue: '${srcValue}'`);
        //     // console.log(`env: `, env);
        //     // we think we have a relative path to tweak..
        //     srcValue = srcValue.replace("./", env.filePath);
        //     // console.log(`srcValue: (moded) '${srcValue}'`);
        //     // write back
        //     token.attrSet("src", srcValue);
        //     // console.log("check attr:", token.attrGet("src"));
        // }
        return defaultRender(tokens, idx, options, env, self);
    };
}

export default runEmbedCode;
