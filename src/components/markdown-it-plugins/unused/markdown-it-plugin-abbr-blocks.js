// MIT
// https://github.com/markdown-it/markdown-it-abbr/blob/master/index.mjs

// Enclose abbreviations in <abbr> tags
export default function abbr_plugin(md, opts) {
    const opts_defaults = {
        abbreviations: {},
    };

    opts = Object.assign({}, opts_defaults, opts);
    // console.log(opts.abbreviations);
    opts.abbreviations = Object.fromEntries(
        Object.entries(opts.abbreviations).map(([key, value]) => [`:${key}`, value])
    );
    // console.log(opts.abbreviations);

    const escapeRE = md.utils.escapeRE;
    // const arrayReplaceAt = md.utils.arrayReplaceAt;

    // ASCII characters in Cc, Sc, Sm, Sk categories we should terminate on;
    // you can check character classes here:
    // http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
    const OTHER_CHARS = " \r\n$+<=>^`|~";

    const UNICODE_PUNCT_RE = md.utils.lib.ucmicro.P.source;
    const UNICODE_SPACE_RE = md.utils.lib.ucmicro.Z.source;

    function abbr_def(state, startLine, endLine, silent) {
        let labelEnd;
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        const max = state.eMarks[startLine];

        if (pos + 2 >= max) {
            return false;
        }

        if (state.src.charCodeAt(pos++) !== 0x2a /* * */) {
            return false;
        }
        if (state.src.charCodeAt(pos++) !== 0x5b /* [ */) {
            return false;
        }

        const labelStart = pos;

        for (; pos < max; pos++) {
            const ch = state.src.charCodeAt(pos);
            if (ch === 0x5b /* [ */) {
                return false;
            } else if (ch === 0x5d /* ] */) {
                labelEnd = pos;
                break;
            } else if (ch === 0x5c /* \ */) {
                pos++;
            }
        }

        if (labelEnd < 0 || state.src.charCodeAt(labelEnd + 1) !== 0x3a /* : */) {
            return false;
        }

        if (silent) {
            return true;
        }

        const label = state.src.slice(labelStart, labelEnd).replace(/\\(.)/g, "$1");
        const title = state.src.slice(labelEnd + 2, max).trim();
        if (label.length === 0) {
            return false;
        }
        if (title.length === 0) {
            return false;
        }
        if (!opts.abbreviations) {
            opts.abbreviations = {};
        }
        // prepend ':' to avoid conflict with Object.prototype members
        if (typeof opts.abbreviations[":" + label] === "undefined") {
            opts.abbreviations[":" + label] = title;
        }

        state.line = startLine + 1;
        return true;
    }

    function abbr_replace(state) {
        const blockTokens = state.tokens;

        if (!opts.abbreviations) {
            return;
        }

        const regSimple = new RegExp(
            "(?:" +
                Object.keys(opts.abbreviations)
                    .map(function (x) {
                        return x.substr(1);
                    })
                    .sort(function (a, b) {
                        return b.length - a.length;
                    })
                    .map(escapeRE)
                    .join("|") +
                ")"
        );

        const abbrList =
            // "(?<abbr>" +
            "(" +
            Object.keys(opts.abbreviations)
                .map(function (x) {
                    return x.substr(1);
                })
                .sort(function (a, b) {
                    return b.length - a.length;
                })
                .map(escapeRE)
                .join("|") +
            ")";
        // console.log("abbrList", abbrList);

        const regText =
            "(^|" +
            UNICODE_PUNCT_RE +
            "|" +
            UNICODE_SPACE_RE +
            "|[" +
            OTHER_CHARS.split("").map(escapeRE).join("") +
            "])" +
            abbrList +
            "($|" +
            UNICODE_PUNCT_RE +
            "|" +
            UNICODE_SPACE_RE +
            "|[" +
            OTHER_CHARS.split("").map(escapeRE).join("") +
            "])";

        const reg = new RegExp(regText, "g");

        // my try to create a regex that matches all abbr and the content in between
        // `(?<pre>.*?)(?<abbr>HTML|W3C)(?<post>.*?)`;
        // const regAll = new RegExp(`(?<pre>.*?)${abbrList}(?<pre>.*?)`, "g");

        function convertTokenToInlineBlock(token) {
            // console.group("convertTokenToInlineBlock");
            const text = token.content;
            const newBlocks = [];
            if (token.type == "text") {
                // console.log("we have a text block");
                // fast regexp run to determine whether there are any abbreviated words
                // in the current token
                if (regSimple.test(text)) {
                    // console.log("it contains an abbr! we need to split it up.");
                    let pos = 0;
                    reg.lastIndex = 0;
                    let m;
                    while ((m = reg.exec(text))) {
                        // console.log("m", m);
                        if (m.index > 0 || m[1].length > 0) {
                            // console.log("handle pre abbr text");
                            // console.log("state", state);
                            const newBlock = new state.Token("inline", "", 0);
                            // console.log("newBlock", newBlock);
                            const newChild = new state.Token("text", "", 0);
                            newChild.content = text.slice(pos, m.index + m[1].length);
                            newBlock.children = [newChild];
                            newBlock.content = newChild.content;
                            newBlocks.push(newBlock);
                        }

                        // handle abbr itself
                        const token_t = new state.Token("abbr", "q-tooltip", 0);
                        token_t.content = m[2];
                        token_t.attrs = [["title", opts.abbreviations[":" + m[2]]]];
                        token_t.abbr = opts.abbreviations[":" + m[2]];
                        newBlocks.push(token_t);

                        reg.lastIndex -= m[3].length;
                        pos = reg.lastIndex;
                    }

                    if (!newBlocks.length) {
                        console.error(
                            "uh - this can/should never happen as we have already checked that there is a abbr inside the token.. "
                        );
                    }

                    // handle post abbr text
                    if (pos < text.length) {
                        const newBlock = new state.Token("inline", "", 0);
                        const newChild = new state.Token("text", "", 0);
                        newChild.content = text.slice(pos);
                        newBlock.children = [newChild];
                        newBlocks.push(newBlock);
                    }
                } else {
                    // console.log("no abbr. just copy over..");
                    const newBlock = new state.Token("inline", "", 0);
                    // console.log("newBlock", newBlock);
                    newBlock.children = [token];
                    newBlocks.push(newBlock);
                }
            } else {
                // console.log("we have a non text block - just copy it over..");
                const newBlock = new state.Token("inline", "", 0);
                // console.log("newBlock", newBlock);
                newBlock.children = [token];
                newBlocks.push(newBlock);
            }

            console.groupEnd();
            return newBlocks;
        }

        // console.log("blockTokens", blockTokens.length);
        for (let j = 0, l = blockTokens.length; j < l; j++) {
            const blockToken = blockTokens[j];
            // console.log("blockToken", blockToken);
            if (blockToken.type !== "inline") {
                continue;
            }
            if (!regSimple.test(blockToken.content)) {
                continue;
            }

            // there is at least one abbr in the content.
            const newBlocks = [];
            const childTokens = blockToken.children;
            for (let tId = 0; tId < childTokens.length; tId++) {
                // console.log("childTokens[tId]", childTokens[tId]);
                newBlocks.push(...convertTokenToInlineBlock(childTokens[tId]));
            }

            if (!newBlocks.length) {
                continue;
            }
            // console.log("newBlocks", newBlocks);
            blockTokens.splice(j, 1, ...newBlocks);
            // jump over added newBlocks.
            j += newBlocks.length - 1;
        }
        // console.log("blockTokens", blockTokens);
        // console.log("state.tokens", state.tokens);
    }

    md.block.ruler.before("reference", "abbr_def", abbr_def, { alt: ["paragraph", "reference"] });

    md.core.ruler.after("linkify", "abbr_replace", abbr_replace);
}
