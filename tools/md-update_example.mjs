// run with
// mks-welcome $ node md-update_examples.mjs

import fs from 'node:fs'
import path from 'path'

import { getsubmodules } from '../getsubmodules.js'

let exampleSectionContent = '\n'
exampleSectionContent += '## Beispiele\n'
exampleSectionContent += '\n'
exampleSectionContent += '!!!show-examples:./examples/\n'
exampleSectionContent += '\n'

async function updateExampleSection(submodule) {
    // console.log('submodule', submodule)
    const filepath = path.join(submodule.path, 'readme.md')
    let readmeContent = fs.readFileSync(filepath, 'utf8')

    const readmeContentTweaked = readmeContent.replace(
        /^## Beispiel.*?```c\+\+.*?```$/gms,
        exampleSectionContent,
    )
    if (readmeContentTweaked === readmeContent) {
        console.log('   skipping. no changes in readme.')
    } else {
        fs.writeFileSync(filepath, readmeContentTweaked)
        console.log('    readme saved to disk.')
    }
}

async function updateNoValidExampleSection(submodule) {
    // console.log('submodule', submodule)
    const filepath = path.join(submodule.path, 'readme.md')
    let readmeContent = fs.readFileSync(filepath, 'utf8')

    const readmeContentTweaked = readmeContent.replace(
        /<!-- currently no valid example available.*?## Beispiel.*?-->/gims,
        exampleSectionContent,
    )
    if (readmeContentTweaked === readmeContent) {
        console.log('   skipping. no changes in readme.')
    } else {
        fs.writeFileSync(filepath, readmeContentTweaked)
        console.log('    readme saved to disk.')
    }
}

async function checkMissingExampleSections(submodules) {
    console.log('Example Section Missing:')
    for (const [submodule_name, submodule] of Object.entries(submodules)) {
        const filepath = path.join(submodule.path, 'readme.md')
        let readmeContent = fs.readFileSync(filepath, 'utf8')

        const checkRegEx = /^## Beispiel.*?$/gm
        if (checkRegEx.test(readmeContent)) {
            // console.log('   fine')
        } else {
            console.log(`    '${submodule_name}'`)
        }
    }
}

export async function main() {
    const submodules = getsubmodules()
    // console.log('submodules', submodules)
    // console.log(`found '${reposData.length}' repos to process..`)
    // console.log(`found '${reposData.length}' repos to process..`)
    // // const repoData = reposData[5]; {
    // for (const [submodule_name, submodule] of Object.entries(submodules)) {
    //     console.log(`submodule_name '${submodule_name}'`)
    // await updateExampleSection(submodule)
    //     // await updateNoValidExampleSection(submodule)
    // }
    checkMissingExampleSections(submodules)
}

main()
