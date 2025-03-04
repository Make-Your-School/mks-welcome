// source / based on
// https://github.com/markdown-it/markdown-it-abbr/blob/master/index.mjs

// Enclose abbreviations in <MDAbbr> component

// import { mksAbbrCollection } from "src/content_md/mksAbbr";

// export const mksAbbrCollection = {}

import md2html from "src/components/markdown-it-plugins/markdown-rendering.js";

// import { glob } from 'node:fs/promises'
import fs from "node:fs";
import path from "node:path";

export const mksAbbrLoadNodeJS = () => {
    // console.group('mksAbbrLoadNodeJS')
    let mksAbbrList = {};

    // https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options
    // console.log('process.cwd()', process.cwd())
    // const items_dir = globSync(`../../md_content/abbr/*.md`)
    // const files = fs.globSync(`src/md_content/abbr/*.md`);
    const files = fs.globSync(`public/mks/abbr/*.md`);
    // console.log('files', files)
    for (const filePath of files) {
        // console.log('filePath', filePath)
        const data = fs.readFileSync(filePath, "utf8");
        // console.log('data', data)
        const item_name = path.basename(filePath, path.extname(filePath));
        // console.log(`item_name: '${item_name}'`)
        const abbrDescription = md2html(data);
        mksAbbrList[item_name] = abbrDescription;
        // mksAbbrList[item_name] = {}
        // mksAbbrList[item_name].name = item_name
        // mksAbbrList[item_name].path_readme = filePath
        // mksAbbrList[item_name].content =
        // console.log('mksAbbrList[item_name].content', mksAbbrList[item_name].content)
    }
    // console.log('mksAbbrList:', mksAbbrList)
    console.log("mksAbbrList:", Object.keys(mksAbbrList));
    console.groupEnd();
    return mksAbbrList;
};

export const mksAbbrLoad = () => {
    console.group("mksAbbrLoad");

    let mksAbbrList = {};
    const items_dir = import.meta.glob(`../../../public/mks/abbr/*.md`, {
        // query: "?url&raw",
        // query: "?raw",
        eager: true,
    });
    console.log("items_dir", items_dir);
    // const path_regex = new RegExp(`\.\.\/\.\.\/public\/mks\/abbr\/(?<item_name>.*)\.md`);
    const path_regex = new RegExp(`../../../public/mks/abbr/(?<item_name>.*).md`);
    // /src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr.js
    // /public/mks/abbr/HTML.md

    // console.log("path_regex", path_regex);
    for (const path in items_dir) {
        console.log("path", path);
        console.log("items_dir[path]", items_dir[path]);
        const { item_name } = path_regex.exec(path).groups;
        console.log(`item_name: '${item_name}'`);
        mksAbbrList[item_name] = {};
        mksAbbrList[item_name].name = item_name;
        mksAbbrList[item_name].path_readme = path;
        mksAbbrList[item_name].path_base = `mks/abbr/`;
        mksAbbrList[item_name].content = items_dir[path].default;
        // const content = preProcessingMD(
        //     items_dir[path].default,
        //     mksAbbrList[item_name].path_base
        // );
        // console.log(`mksAbbrList['${item_name}'] content:`, content);
        // mksAbbrList[item_name].content = content;
        // console.log(`${item_name} '${mksAbbrList[item_name].path_base}'`);
    }
    console.log("mksAbbrList:", mksAbbrList);
    // console.log("mksAbbrList:", Object.keys(mksAbbrList));
    console.groupEnd();
    return mksAbbrList;
};

export default function abbr_plugin(md, opts) {
    // console.log(`MarkdownItPluginAbbrAsMDAbbr.abbr_plugin`);
    const opts_defaults = {
        abbreviations: {},
    };

    opts = Object.assign({}, opts_defaults, opts);
    // console.log('mksAbbrCollection', mksAbbrCollection)
    // console.log('opts.abbreviations', opts.abbreviations)
    opts.abbreviations = Object.fromEntries(
        Object.entries(opts.abbreviations).map(([key, value]) => [`:${key}`, value]),
    );
    // console.log('opts.abbreviations', opts.abbreviations)

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
        // console.log(`MarkdownItPluginAbbrAsMDAbbr.abbr_replace`);
        const blockTokens = state.tokens;

        // const mksAbbrTemp = mksAbbrLoad()
        // console.log('mksAbbrTemp', mksAbbrTemp)
        // // console.log("mksAbbrCollection", mksAbbrCollection);

        if (!opts.abbreviations) {
            console.log("!opts.abbreviations", !opts.abbreviations);
            return;
        }
        // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
        if (Object.keys(opts.abbreviations).length == 0) {
            return;
        }
        // console.log('opts.abbreviations', opts.abbreviations)

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
                ")",
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
        // console.log('abbrList', abbrList)

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

        // console.log("regText", regText);
        const reg = new RegExp(regText, "g");

        for (let j = 0, l = blockTokens.length; j < l; j++) {
            if (blockTokens[j].type !== "inline") {
                continue;
            }
            let tokens = blockTokens[j].children;

            // We scan from the end, to keep position when new tags added.
            for (let i = tokens.length - 1; i >= 0; i--) {
                const currentToken = tokens[i];
                if (currentToken.type !== "text") {
                    continue;
                }

                let pos = 0;
                const text = currentToken.content;
                reg.lastIndex = 0;
                const nodes = [];

                // fast regexp run to determine whether there are any abbreviated words
                // in the current token
                if (!regSimple.test(text)) {
                    continue;
                }

                let m;

                while ((m = reg.exec(text))) {
                    console.log("m", m);
                    if (m.index > 0 || m[1].length > 0) {
                        const token = new state.Token("text", "", 0);
                        token.content = text.slice(pos, m.index + m[1].length);
                        nodes.push(token);
                    }

                    // const token_o = new state.Token("abbr_open", "abbr", 1);
                    // token_o.attrs = [["title", opts.abbreviations[":" + m[2]]]];
                    // nodes.push(token_o);

                    const token_t = new state.Token("abbr", "MDAbbr", 0);
                    token_t.content = m[2];
                    if (token_t.meta == undefined) {
                        token_t.meta = {
                            abbrDescription: "",
                        };
                    }
                    token_t.meta.abbrDescription = opts.abbreviations[":" + m[2]].toString();
                    // token_t.attrJoin('abbrDescription', token_t.meta.abbrDescription)
                    nodes.push(token_t);
                    // console.log("token_t", token_t);

                    // const token_c = new state.Token("abbr_close", "abbr", -1);
                    // nodes.push(token_c);

                    reg.lastIndex -= m[3].length;
                    pos = reg.lastIndex;
                }

                if (!nodes.length) {
                    continue;
                }

                if (pos < text.length) {
                    const token = new state.Token("text", "", 0);
                    token.content = text.slice(pos);
                    nodes.push(token);
                }

                // replace current node
                blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
            }
        }
    }

    md.block.ruler.before("reference", "abbr_def", abbr_def, { alt: ["paragraph", "reference"] });

    md.core.ruler.after("linkify", "abbr_replace", abbr_replace);

    md.renderer.rules.abbr = function (tokens, idx, options, env, slf) {
        // console.log(`MarkdownItPluginAbbrAsMDAbbr.abbr called`)
        // the default rendering does escape html... we want it raw!
        const token = tokens[idx];
        // console.log(`token: `, token)
        const resultHTML = `<${token.tag} ${slf.renderAttrs(token)}>
        <template #default>${token.content}</template>
        <template #abbrDescription>${token.meta?.abbrDescription}</template>
        </${token.tag}>`;
        // console.log(`resultHTML: `, resultHTML)
        return resultHTML;
    };
}
