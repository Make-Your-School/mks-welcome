// MIT
// https://github.com/markdown-it/markdown-it-abbr/blob/master/index.mjs

// Enclose abbreviations in <abbr> tags
//
export default function abbr_plugin(md) {
    const escapeRE = md.utils.escapeRE;
    const arrayReplaceAt = md.utils.arrayReplaceAt;

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
        if (!state.env.abbreviations) {
            state.env.abbreviations = {};
        }
        // prepend ':' to avoid conflict with Object.prototype members
        if (typeof state.env.abbreviations[":" + label] === "undefined") {
            state.env.abbreviations[":" + label] = title;
        }

        state.line = startLine + 1;
        return true;
    }

    // function abbr_replace_
    function abbr_replace(state) {
        const blockTokens = state.tokens;

        if (!state.env.abbreviations) {
            return;
        }

        const regSimple = new RegExp(
            "(?:" +
                Object.keys(state.env.abbreviations)
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
            Object.keys(state.env.abbreviations)
                .map(function (x) {
                    return x.substr(1);
                })
                .sort(function (a, b) {
                    return b.length - a.length;
                })
                .map(escapeRE)
                .join("|") +
            ")";
        console.log("abbrList", abbrList);

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

        console.log("blockTokens", blockTokens.length);
        for (let j = 0, l = blockTokens.length; j < l; j++) {
            const blockToken = blockTokens[j];
            console.log("blockToken", blockToken);
            if (blockToken.type !== "inline") {
                continue;
            }

            let pos = 0;
            const text = blockToken.content;
            reg.lastIndex = 0;
            const nodes = [];

            // check if there is any abbr in content at all..
            if (!regSimple.test(blockToken.content)) {
                continue;
            }

            // split content..
            let m;

            while ((m = reg.exec(text))) {
                // console.log("m", m);
                if (m.index > 0 || m[1].length > 0) {
                    const token = new state.Token("inline", "", 0);
                    token.content = text.slice(pos, m.index + m[1].length);
                    nodes.push(token);
                }

                const token_t = new state.Token("abbr", "", 0);
                token_t.content = m[2];
                token_t.abbr = state.env.abbreviations[":" + m[2]];
                nodes.push(token_t);

                reg.lastIndex -= m[3].length;
                pos = reg.lastIndex;
            }
            if (!nodes.length) {
                continue;
            }

            if (pos < text.length) {
                const token = new state.Token("inline", "", 0);
                token.content = text.slice(pos);
                nodes.push(token);
            }
            console.log("nodes", nodes);
            // blockTokens.splice(j, 1, ...nodes);
            // jump over added nodes.at.
            j += nodes.length - 1;
        }
        console.log("blockTokens", blockTokens);
        console.log("state.tokens", state.tokens);
    }

    md.block.ruler.before("reference", "abbr_def", abbr_def, { alt: ["paragraph", "reference"] });

    md.core.ruler.after("linkify", "abbr_replace", abbr_replace);
}
