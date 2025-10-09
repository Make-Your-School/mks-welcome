// run with
// node fill_content.mjs

import fs from 'node:fs'
import path from 'path'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'

const submodule_pathBase = './public/mks/parts/'

const regex_repo_name = /^(?<prefix>.*?)-(?<manufacture>.*?)-(?<part>.*?)$/



async function extractPartName(repoData) {
        const result = regex_repo_name.exec(repoData.repo_name)
        if (result) {
            const groups = result.groups
            repoData.repo_prefix = groups.prefix
            repoData.repo_part = groups.part
        } else {
            // console.log('result', result)
            console.log(`regex did not match on '${repoData.repo_name}'`)
        }
}

async function prepareFrontmatter(repoData) {
    repoData.frontmatter.manufacture = repoData.manufacture
    repoData.frontmatter.manufacture_url = repoData.manufacture_url
    repoData.frontmatter.product_url = repoData.product_url
    repoData.frontmatter.clone_url = repoData.clone_url
    repoData.frontmatter.repo_name = repoData.repo_name
    repoData.frontmatter.repo_prefix = repoData.repo_prefix
    repoData.frontmatter.repo_manufacture = repoData.repo_manufacture
    repoData.frontmatter.repo_part = repoData.repo_part
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)

    const repoNameList = reposData.map(repo => repo.repo_name)
    console.log(repoNameList)

    // const repoData = reposData[0]; {
    for (const repoData of reposData) {
        // repoData.submodule_path = path.join(submodule_pathBase, repoData.repo_name)
        await extractPartName(repoData)
        await prepareFrontmatter(repoData)
    }
    // save modifications in reposData to disc
    const repoDataJson = JSON.stringify(reposData, null, 4)
    fs.writeFileSync(reposDataFile, repoDataJson)
    console.log('reposData saved to disk.')
}

main()
