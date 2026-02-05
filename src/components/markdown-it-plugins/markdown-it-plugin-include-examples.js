// based & inspired by
// https://github.com/rotorz/markdown-it-block-embed/blob/master/lib/tokenizer.js
//   Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
//   Licensed under the MIT license. See LICENSE file in the project root.
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/
// https://github.com/camelaissani/markdown-it-include
// https://github.com/tokusumi/markdown-embed-code
// https://github.com/markdown-it/markdown-it-abbr/blob/master/index.mjs

// import md2html from './markdown-rendering.js'

import fs from 'node:fs'
import path from 'node:path'

// // based on
// // https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.mjs#L121
// const HTML_ESCAPE_REPLACE_RE = /[&<>"']/g
const HTML_ESCAPE_REPLACE_RE = /[<> ]/g
const HTML_REPLACEMENTS = {
    // '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    // '"': '&quot;',
    // "'": '&apos;',
    // ' ': '&#32;', // does not work.
    // ' ': '&nbsp;',
    // ' ': ' ', // this should be an nbsp space. - does not work
    ' ': ' ', // this should be an em space. this is working.
    // https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references
}

function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch]
}

function escapeThings(str) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
}

export const loadExample = (example_path, dir_content, part_name) => {
    // find all files belonging to one example folder.
    // return object with contents..
    // console.group('loadExample')
    // console.log('example_path', example_path)
    // console.log('part_name', part_name)
    // https://github.com/Make-Your-School/part_name/tree/main/examples/Grove_125KHz_RFID_Reader_v1.0_minimal
    const part_url = `https://github.com/Make-Your-School/${part_name}`
    const example_url = `${part_url}/tree/main/examples/${path.basename(example_path)}`
    const example_path_app = example_path.replace('public', '/mks-welcome') + '/'
    // console.log('example_path_app', example_path_app)
    let example_files = {
        example_path: example_path,
        example_url: example_url,
        example_path_app: example_path_app,
        // obj: dir_content,
        files: {},
    }

    // https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options
    // const files = fs.readdirSync(examplePath, { recursive: false })
    // console.log('dir_content', dir_content)
    for (const file_dir of dir_content) {
        // console.log('file_dir', file_dir)
        const file_path = path.join(file_dir.parentPath, file_dir.name)
        // console.log('file_path', file_path)
        // the replace removes the leading dot from the extension...
        const file_ext = path.extname(file_path).replace(/^\./, '')
        // console.log(`file_ext: '${file_ext}'`)
        const file_name = path.basename(file_path)
        // console.log(`file_name: '${file_name}'`)
        const item_name = path.basename(file_path, file_ext)
        // console.log(`item_name: '${item_name}'`)
        const file_url = `${example_url}/${file_name}`
        // console.log(`file_url: '${file_url}'`)
        let data = ''
        // data = fs.readFileSync(file_path, 'utf8')
        // data = escapeThings(data)
        switch (file_ext) {
            case 'md':
                data = fs.readFileSync(file_path, 'utf8')
                break
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'avif':
            case 'svg':
                data = 'image'
                break

            default:
                data = fs.readFileSync(file_path, 'utf8')
                break
        }
        data = escapeThings(data)
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // console.group('data')
        // console.log(data)
        // console.groupEnd()
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // example_files[item_name] = data
        example_files.files[file_name] = {}
        example_files.files[file_name].file_url = file_url
        example_files.files[file_name].file_path = file_path
        example_files.files[file_name].file_path_web = file_path.replace('public', '/mks-welcome')
        example_files.files[file_name].example_path_app = example_path_app
        example_files.files[file_name].file_name = file_name
        example_files.files[file_name].name = item_name
        example_files.files[file_name].file_ext = file_ext
        example_files.files[file_name].content = data
    }
    // console.log('example_files:', example_files)
    // console.log('example_files:', Object.keys(example_files))
    // console.groupEnd()
    return example_files
}

function is_dir_example(dir_content, dir_name) {
    const dir_file_names = dir_content
        .filter((dirent) => dirent.isFile())
        .map((dirent) => path.basename(dirent.name, path.extname(dirent.name)))
    // console.log('dir_file_names', dir_file_names)
    return dir_file_names.includes(dir_name) || dir_file_names.includes('main')
}

function walk_directories(path_start, examples, base_path, part_name) {
    // we want to have a tree that finds ous all folders
    // that contain a file that is the same as the folder name.
    // or that is main.py

    // https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options
    const dirs = fs.readdirSync(path_start, { recursive: false, withFileTypes: true })
    // console.log('')
    // console.log('dirs', dirs)
    const dirs_filtered = dirs
        .filter((dirent) => dirent.isDirectory())
        .filter((dirent) => !dirent.name.includes('dev'))
        .filter((dirent) => !dirent.name.includes('old'))

    for (const dir of dirs_filtered) {
        const current_path = path.join(dir.parentPath, dir.name)
        const example_path_rel = path.relative(base_path, current_path)
        const dir_content = fs.readdirSync(current_path, { recursive: false, withFileTypes: true })
        // console.log('dir_content', dir_content)
        if (is_dir_example(dir_content, dir.name)) {
            // console.log('******************************************')
            // console.log('  yeah! example found.')
            // console.log('******************************************')
            examples[example_path_rel] = loadExample(current_path, dir_content, part_name)
            // console.log('******************************************')
        } else {
            // recursive for subfolders...
            const sub_dirs = dir_content.filter((dirent) => dirent.isDirectory())
            for (const sub_dir of sub_dirs) {
                const sub_dir_path = path.join(sub_dir.parentPath, sub_dir.name)
                walk_directories(sub_dir_path, examples, base_path, part_name)
            }
        }
    }
}

export const loadExamplesFolder = (base_path, part_name) => {
    // console.group('loadExamplesFolder')
    let examples = {}
    // console.log('base_path', base_path)
    walk_directories(base_path, examples, base_path, part_name)
    // console.log('done. 🥳')
    // console.log('  examples:', examples)
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

    // Identify as being a potential code block.
    if (maxPos - startPos < 2) return false

    // check for SYNTAX_CHARS
    for (const code of SYNTAX_CODES) {
        if (code !== state.src.charCodeAt(pointer.pos++)) return false
    }
    // console.log(`mditPluginIncludeExamples.tokenizer: found start part.`)

    // use rest of line as path
    maxPos = state.eMarks[pointer.line]
    let pathRel = state.src.substr(pointer.pos, maxPos - pointer.pos).trim()
    if (pathRel == '') return false
    pointer.pos = maxPos
    // console.log(`pathRel:`, pathRel)

    // Block must be at end of input or the next line must be blank.
    if (endLine !== pointer.line + 1) {
        let nextLineStartPos = state.bMarks[pointer.line + 1] + state.tShift[pointer.line + 1]
        let nextLineMaxPos = state.eMarks[pointer.line + 1]
        if (nextLineMaxPos > nextLineStartPos) return false
    }

    if (pointer.line >= endLine) return false

    if (!silent) {
        // console.log(`mditPluginIncludeExamples.tokenizer found:`)
        // console.log(`  pathRel '${pathRel}'`)
        // console.log(`  markup `, state.src.slice(startPos, pointer.pos))
        const token = state.push('include_examples', 'MDExamples', 0)
        token.markup = state.src.slice(startPos, pointer.pos)
        token.block = true
        token.content = pathRel
        token.attrSet('pathRel', pathRel)
        token.meta = {
            pathRel: pathRel,
        }
        token.info = {
            pathRel: pathRel,
        }
        token.map = [startLine, pointer.line + 1]

        // console.log(`  token`, token)
        // state.push('include_examples_close', 'MDExamples', 0)

        state.line = pointer.line + 1
    }

    return true
}

function getCurrentBasePath(pathRel, env) {
    if (env?.id) {
        // console.log(`env.id found:`, env.id);
        // srcValue = srcValue.replace("./", env.public);
        // console.log(`__dirname`, __dirname);
        // console.log(`process.cwd()`, process.cwd());
        const projectAbsPathReadme = env.id
        // console.log('projectAbsPathReadme', projectAbsPathReadme)
        const projectRelPath = path.dirname(path.relative(process.cwd(), projectAbsPathReadme))
        // console.log('projectRelPath', projectRelPath)

        const basePath = path.join(projectRelPath, pathRel)
        // const basePath = path.resolve(path.dirname(projectRelPath))
        // const basePath = path.dirname(projectRelPath).replace('public', '/mks-welcome')
        // console.log('basePath', basePath)
        // const filePath = srcValue.replace('./', basePath + path.sep)
        // console.log("filePath", filePath);
        return basePath
    } else {
        console.log('no env information found to build path from.')
    }
}

// function renderer(tokens, idx, options, env, self, plugin_options) {
function renderer(tokens, idx, options, env, self) {
    // console.log(`mditPluginIncludeExamples.renderer called`)
    const token = tokens[idx]
    // console.log(`token: `, token)
    // console.log(`plugin_options: `, plugin_options)
    const basePath = getCurrentBasePath(token.info.pathRel, env)
    token.meta.basePath = basePath
    const part_name = path.basename(path.dirname(env.id))
    // console.log('part_name', part_name)
    token.meta.part_name = part_name
    // token.attrSet('basePath', basePath)

    const examples = loadExamplesFolder(basePath, part_name)
    // console.log('  examples:', examples)
    // const examples = {
    //     'Grove_125KHz_RFID_Reader_v1.0_minimal': {
    //         example_path:
    //             'public/mks/parts/mks-SeeedStudio-Grove_125KHz_RFID_Reader_v1.0/examples/Grove_125KHz_RFID_Reader_v1.0_minimal',
    //         example_url:
    //             'https://github.com/Make-Your-School/mks-SeeedStudio-Grove_125KHz_RFID_Reader_v1.0/tree/main/examples/Grove_125KHz_RFID_Reader_v1.0_minimal',
    //         files: {
    //             'Grove_125KHz_RFID_Reader_v1.0_minimal.ino': {
    //                 file_url:
    //                     'https://github.com/Make-Your-School/mks-SeeedStudio-Grove_125KHz_RFID_Reader_v1.0/tree/main/examples/Grove_125KHz_RFID_Reader_v1.0_minimal/Grove_125KHz_RFID_Reader_v1.0_minimal.ino',
    //                 file_path:
    //                     'public/mks/parts/mks-SeeedStudio-Grove_125KHz_RFID_Reader_v1.0/examples/Grove_125KHz_RFID_Reader_v1.0_minimal/Grove_125KHz_RFID_Reader_v1.0_minimal.ino',
    //                 file_name: 'Grove_125KHz_RFID_Reader_v1.0_minimal.ino',
    //                 name: 'Grove_125KHz_RFID_Reader_v1.0_minimal',
    //                 file_ext: '.ino',
    //                 content:
    //                     '// D2 & D3\n\n#include &lt;SoftwareSerial.h&gt;\n\nSoftwareSerial RFID(2, 3);\nunsigned char buffer[64];\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("RFID Reader - Los geht&apos;s");\n}\n',
    //             },
    //         },
    //     },
    // }

    // // const examples_JSON = JSON.stringify(examples)
    const examples_JSON = JSON.stringify(examples, null, 4)
    // console.log('  examples_JSON:', examples_JSON)
    // the default rendering does escape html... we want it raw!
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#embedding_data_in_html
    // <template #abbrDescription>${token.meta?.abbrDescription}</template>
    const resultHTML = `<${token.tag} ${self.renderAttrs(token)} basePath="${basePath}">
        <template #contentJSON>${examples_JSON}</template>
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
    // console.log(`mditPluginIncludeExamples`)
    // console.log(`md`, md);
    const plugin_options_defaults = {
        ignore: ['old', 'dev'],
        // sort: 'minimal',
    }
    plugin_options = Object.assign({}, plugin_options_defaults, plugin_options)
    // console.log(`plugin_options`, plugin_options)

    md.block.ruler.before('fence', 'include_examples', tokenizer, {
        alt: ['paragraph', 'reference', 'blockquote', 'list'],
    })
    md.renderer.rules['include_examples'] = (tokens, idx, options, env, self) => {
        return renderer(tokens, idx, options, env, self, plugin_options)
    }
}
