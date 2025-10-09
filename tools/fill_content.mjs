// run with
// node fill_content.mjs

import fs from 'node:fs'
import path from 'path'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'

const submodule_pathBase = './public/mks/parts/'

async function buildMarkdownFileContent(repoData) {
    let output = '---\n'

    Object.entries(post.frontmatter).forEach(([key, value]) => {
        let outputValue
        if (Array.isArray(value)) {
            if (value.length > 0) {
                // array of one or more strings
                outputValue = value.reduce((list, item) => `${list}\n  - "${item}"`, '')
            }
        } else if (Number.isInteger(value)) {
            // output unquoted
            outputValue = value.toString()
        } else if (value instanceof luxon.DateTime) {
            if (shared.config.dateFormat) {
                outputValue = value.toFormat(shared.config.dateFormat)
            } else {
                outputValue = shared.config.includeTime ? value.toISO() : value.toISODate()
            }

            if (shared.config.quoteDate) {
                outputValue = `"${outputValue}"`
            }
        } else if (typeof value === 'boolean') {
            // output unquoted
            outputValue = value.toString()
        } else {
            // single string value
            const escapedValue = (value ?? '').replace(/"/g, '\\"')
            if (escapedValue.length > 0) {
                outputValue = `"${escapedValue}"`
            }
        }

        if (outputValue !== undefined) {
            output += `${key}: ${outputValue}\n`
        }
    })

    output += `---\n\n${post.content}\n`
    return output
}

async function updateMarkdownFile(repoData) {
    console.log(`update '${repoData.repo_name}' Readme.md.`)
    const md = await buildMarkdownFileContent(repoData)

    const filepath = path.join(repoData.submodule_path, 'readme.md')
    console.log('filepath', filepath)
    // fs.writeFileSync(filepath, md)
}

async function createExample(repoData) {
    const exampleName = repoData
    const filepath = path.join(repoData.submodule_path, '${}')
    await fs.promises.mkdir(filepath, { recursive: true })
    console.log('filepath', filepath)
    // TODO create example subdirectory
    let example_content = repoData.example_code
    if (!example_content) {
        example_content = '// Noch nicht vorhanden.'
    }
    fs.writeFileSync(filepath, example_content)
}

async function removeDefaultExample(repoData) {
    const filepath = path.join(repoData.submodule_path, 'BauteilTemplate_minimal')
    // console.log('filepath', filepath)
    fs.rm(filepath, { recursive: true, force: true })
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[0]; {
    // for (const repoData of reposData) {
        // repoData.submodule_path = path.join(submodule_pathBase, repoData.repo_name)
    //     repoData.submodule_path = submodule_pathBase + repo_name
    //     await updateMarkdownFile(repoData)
    // }
}

main()
