// based & inspired by
// https://github.com/rotorz/markdown-it-block-embed/blob/master/lib/tokenizer.js
//   Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
//   Licensed under the MIT license. See LICENSE file in the project root.
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/
// https://github.com/camelaissani/markdown-it-include
// https://github.com/tokusumi/markdown-embed-code
// https://github.com/markdown-it/markdown-it-abbr/blob/master/index.mjs

import md2html from './markdown-rendering.js'

import fs from 'node:fs'
import path from 'node:path'

export const loadExample = (examplePath) => {
    // find all files belonging to one example folder.
    // return object with contents..
    console.group('loadExample')
    let exampleFiles = {}

    // https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options
    const files = fs.readdirSync(examplePath, { recursive: false })
    console.log('files', files)
    for (const filePath of files) {
        console.log('filePath', filePath)
        const filePathExt = path.extname(filePath)
        console.log(`filePathExt: '${filePathExt}'`)
        const itemName = path.basename(filePath, filePathExt)
        console.log(`itemName: '${itemName}'`)
        let data = fs.readFileSync(filePath, 'utf8')
        if (filePathExt == 'md') {
            data = md2html(data)
        }
        console.log('data', data)
        // exampleFiles[itemName] = data
        exampleFiles[itemName] = {}
        exampleFiles[itemName].name = itemName
        exampleFiles[itemName].filePath = filePath
        exampleFiles[itemName].fileExt = filePathExt
        exampleFiles[itemName].content = data
    }
    // console.log('exampleFiles:', exampleFiles)
    console.log('exampleFiles:', Object.keys(exampleFiles))
    console.groupEnd()
    return exampleFiles
}

const getDirectories = (source) =>
    fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

export const loadExamplesFolder = (basePath) => {
    console.group('loadExamplesFolder')
    let examples = {}

    // https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options
    // console.log('process.cwd()', process.cwd())
    console.log('basePath', basePath)
    const dirs = fs.readdirSync(basePath, { recursive: true })
    console.log('dirs', dirs)
    const dirs1 = fs.readdirSync(basePath, { recursive: true, withFileTypes: true })
    console.log('dirs1', dirs1)
    console.log(
        'dirs1 filtered',
        dirs1.filter((dirent) => dirent.isDirectory()),
    )

    const dirs2 = getDirectories(basePath)
    console.log('dirs2', dirs2)

    // for (const filePath of files) {
    //     // console.log('filePath', filePath)
    //     const data = fs.readFileSync(filePath, "utf8");
    //     // console.log('data', data)
    //     const itemName = path.basename(filePath, path.extname(filePath));
    //     // console.log(`itemName: '${itemName}'`)
    //     const abbrDescription = md2html(data);
    //     examples[itemName] = abbrDescription;

    //     loadExample()
    // }
    // // console.log('examples:', examples)
    // console.log("examples:", Object.keys(examples));
    console.groupEnd()
    return examples
}


// @show-examples:./path-to-folder/
const SYNTAX_CHARS = '!!!show-examples:'.split('')
const SYNTAX_CODES = SYNTAX_CHARS.map((char) => char.charCodeAt(0))

function tokenizer(state, startLine, endLine, silent) {
    let startPos = state.bMarks[startLine] + state.tShift[startLine]
    let maxPos = state.eMarks[startLine]

    let pointer = { line: startLine, pos: startPos }

    // Block must be at start of input or the previous line must be blank.
    if (startLine !== 0) {
        let prevLineStartPos = state.bMarks[startLine - 1] + state.tShift[startLine - 1]
        let prevLineMaxPos = state.eMarks[startLine - 1]
        if (prevLineMaxPos > prevLineStartPos) return false
    }

    // Identify as being a potential block.
    if (maxPos - startPos < 2) return false

    // check for SYNTAX_CHARS
    for (const code of SYNTAX_CODES) {
        if (code !== state.src.charCodeAt(pointer.pos++)) return false
    }
    // console.log(`mditPluginIncludeExamples.tokenizer: found start part.`)

    // use rest of line as path
    maxPos = state.eMarks[pointer.line]
    let basePath = state.src.substr(pointer.pos, maxPos - pointer.pos).trim()
    if (basePath == '') return false
    pointer.pos = maxPos
    // console.log(`basePath:`, basePath)

    // Block must be at end of input or the next line must be blank.
    if (endLine !== pointer.line + 1) {
        let nextLineStartPos = state.bMarks[pointer.line + 1] + state.tShift[pointer.line + 1]
        let nextLineMaxPos = state.eMarks[pointer.line + 1]
        if (nextLineMaxPos > nextLineStartPos) return false
    }

    if (pointer.line >= endLine) return false

    if (!silent) {
        console.log(`mditPluginIncludeExamples.tokenizer found:`)
        console.log(`  basePath '${basePath}'`)
        console.log(`  markup `, state.src.slice(startPos, pointer.pos))
        let token = state.push('include-examples', 'MDExamples', 0)
        token.markup = state.src.slice(startPos, pointer.pos)
        token.block = true
        token.content = basePath
        token.meta = {
            basePath: basePath,
        }
        token.info = {
            basePath: basePath,
        }
        token.map = [startLine, pointer.line + 1]

        console.log(`  token`, token)

        state.line = pointer.line + 1
    }

    return true
}

function renderer(tokens, idx, options, env, self, plugin_options) {
    console.log(`mditPluginIncludeExamples.renderer called`)
    const token = tokens[idx]
    console.log(`token: `, token)
    console.log(`plugin_options: `, plugin_options)
    const basePath = token.info.basePath

    loadExamplesFolder(basePath)

    // the default rendering does escape html... we want it raw!
    // <template #default>${token.content}</template>
    // <template #abbrDescription>${token.meta?.abbrDescription}</template>
    const resultHTML = `<${token.tag} ${self.renderAttrs(token)} basePath="${basePath}">
        </${token.tag}>`
    // console.log(`resultHTML: `, resultHTML)
    return resultHTML
}

/**
 * include all examples from folder as MDExamples component
 * syntax:
 * @show-examples:./path-to-folder/
 * @show-examples:./examples/
 * @module mditPluginIncludeExamples
 * @param {MarkdownItOptions} options - options Object
 * @param {Object} env - environment options Object
 * @param {MarkdownIt} self - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports mditPluginIncludeExamples
 */
export default function mditPluginIncludeExamples(md, plugin_options) {
    console.log(`mditPluginIncludeExamples`);
    // console.log(`md`, md);
    const plugin_options_defaults = {
        ignore: ['old', 'dev'],
        // sort: 'minimal',
    }
    plugin_options = Object.assign({}, plugin_options_defaults, plugin_options)
    console.log(`plugin_options`, plugin_options);

    md.block.ruler.before('fence', 'embed-example', tokenizer, {
        alt: ['paragraph', 'reference', 'blockquote', 'list'],
    })
    md.renderer.rules['embed-example'] = (tokens, idx, options, env, self) => {
        return renderer(tokens, idx, options, env, self, plugin_options)
    }
}
