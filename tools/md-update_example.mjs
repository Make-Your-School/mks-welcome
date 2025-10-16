// run with
// mks-welcome $ node md-update_examples.mjs

import fs from 'node:fs'
import path from 'path'

import { getsubmodules } from '../getsubmodules.js'

function getExampleFilePath(content) {
    const findPath = /^embedded_example_file:.*"(?<examplePath>.*)"$/gm
    // embedded_example_file: 'examples/Grove_IR_Distance_Interrupter_v1.2_minimal/Grove_IR_Distance_Interrupter_v1.2_minimal.ino'
    const result = findPath.exec(content)?.groups?.examplePath
    return result
}

function getRepoPart(content) {
    const findRE = /^repo_part:.*"(?<repo_part>.*)"$/gm
    // embedded_example_file: 'examples/Grove_IR_Distance_Interrupter_v1.2_minimal/Grove_IR_Distance_Interrupter_v1.2_minimal.ino'
    const result = findRE.exec(content)?.groups?.repo_part
    return result
}


async function createExample(filepath, submodule_path, repo_part) {
    const exampleName = `${repo_part}_minimal`
    const exampleDir = path.join('.', submodule_path, 'examples', exampleName)
    console.log('exampleDir', exampleDir)
    console.log('filepath  ', filepath)
    fs.mkdirSync(exampleDir, { recursive: true })
    const example_content = '// Noch nicht vorhanden.\n'
    fs.writeFileSync(filepath, example_content)
}

function checkOrAddExample(filepath, submodule_path, repo_part) {
    if (fs.existsSync(filepath)) {
        let content = fs.readFileSync(filepath, 'utf8')
        return !content.includes('// Noch nicht vorhanden.')
    } else {
        createExample(filepath, submodule_path, repo_part)
        return false
    }
}

function generateSection(examplePath, valid) {
    let content = '\n'
    if (!valid) {
        content += '<!-- currently no valid example available...\n'
    }
    content += '## Beispiel\n'
    content += '\n'
    content += 'schau dir das Minimal-Beispiel an:\n'
    content += '\n'
    content += '```' + `c++:${examplePath}\n`
    content += '// look in the linked file.\n'
    content += '```\n'
    if (!valid) {
        content += '-->\n'
    }
    return content
}

async function addExampleSection(submodule) {
    // console.log('submodule', submodule)
    const filepath = path.join(submodule.path, 'readme.md')
    let readmeContent = fs.readFileSync(filepath, 'utf8')
    // console.log('readmeContent', readmeContent)
    let examplePath = getExampleFilePath(readmeContent)
    if (examplePath) {
        const examplePathLocal = path.join('.', submodule.path, examplePath)
        // console.log('examplePathLocal', examplePathLocal)
        const repo_part = getRepoPart(readmeContent)
        const exampleValid = checkOrAddExample(examplePathLocal, submodule.path, repo_part)
        const exampleSectionContent = generateSection(examplePathLocal, exampleValid)
        const replaceContent = exampleSectionContent + '\n<!-- infolist -->\n'
        const readmeContentTweaked = readmeContent.replace('<!-- infolist -->', replaceContent)
        if (readmeContentTweaked === readmeContent) {
            console.log('   skipping. no changes in readme.')
        } else {
            fs.writeFileSync(filepath, readmeContentTweaked)
            console.log('    readme saved to disk.')
        }
    } else {
        console.log('   skipping. no valid examplePath found.')
    }
}

export async function main() {
    const submodules = getsubmodules()
    // console.log('submodules', submodules)
    // console.log(`found '${reposData.length}' repos to process..`)
    // console.log(`found '${reposData.length}' repos to process..`)
    // // const repoData = reposData[5]; {
    for (const [submodule_name, submodule] of Object.entries(submodules)) {
        console.log(`submodule_name '${submodule_name}'`)
        await addExampleSection(submodule)
    }
}

main()
