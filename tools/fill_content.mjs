// run with
// node fill_content.mjs

import fs from 'node:fs'
import reposData from './reposData.json' with { type: 'json' }

const submodulePathBase = './public/mks/parts/'

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
    console.log(`update '${repoData.repoName}' Readme.md.`)
    const md = await buildMarkdownFileContent(repoData)
    const filepath = repoData.submodulePath + 'readme.md'
    console.log('filepath', filepath)
    // fs.writeFileSync(filepath, md)
}


async function createExample(repoData) {
    const filepath = repoData.submodulePath + 'readme.ino'
    await fs.promises.mkdir(filepath, { recursive: true })
    console.log('filepath', filepath)
    // TODO create example subdirectory
    let example_content = repoData.example_code
    if(! example_content) {
        example_content = "// Noch nicht vorhanden."
    }
    fs.writeFileSync(filepath, example_content)
}
async function removeDefaultExample(repoData) {
    //
    const filepath = repoData.submodulePath + 'BauteilTemplate_minimal'
    fs.rm(path, { recursive: true, force: true })
    console.log('filepath', filepath)
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[5]; {
    for (const repoData of reposData) {
        repoData.submodulePath = submodulePathBase + repoName
        await updateMarkdownFile(repoData)
    }
}

main()
