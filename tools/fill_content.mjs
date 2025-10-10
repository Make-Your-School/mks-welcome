// run with
// node fill_content.mjs

import fs from 'node:fs'
import path from 'path'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'

async function buildFrontmatter(repoData) {
    let output = '---\n'

    Object.entries(repoData.frontmatter).forEach(([key, value]) => {
        let outputValue
        if (Array.isArray(value)) {
            if (value.length > 0) {
                // array of one or more strings
                outputValue = value.reduce((list, item) => `${list}\n  - "${item}"`, '')
            }
        } else if (Number.isInteger(value)) {
            // output unquoted
            outputValue = value.toString()
        // } else if (value instanceof luxon.DateTime) {
        //     if (shared.config.dateFormat) {
        //         outputValue = value.toFormat(shared.config.dateFormat)
        //     } else {
        //         outputValue = shared.config.includeTime ? value.toISO() : value.toISODate()
        //     }

        //     if (shared.config.quoteDate) {
        //         outputValue = `"${outputValue}"`
        //     }
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

    output += `---\n`
    return output
}

async function buildMarkdownFileContent(repoData) {
    const content_frontmatter = await buildFrontmatter(repoData)
    const content_description = repoData.content_description
    const content_infolist = repoData.content_infolist

    const content = `
${content_frontmatter}

# ${repoData.frontmatter.title}

![${repoData.frontmatter.title}](${repoData.frontmatter.coverImage})

## Beschreibung
${content_description}

<!-- infolist -->
${content_infolist}

`
    return content
}

async function updateMarkdownFile(repoData) {
    console.log(`update '${repoData.repo_name}' Readme.md.`)
    const md = await buildMarkdownFileContent(repoData)

    const filepath = path.join(".", repoData.submodule_path, 'readme.md')
    console.log('filepath', filepath)
    fs.writeFileSync(filepath, md)
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    const repoData = reposData[0]; {
    // for (const repoData of reposData) {
        await updateMarkdownFile(repoData)
    }
}

main()
