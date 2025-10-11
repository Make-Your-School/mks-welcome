// run with
// node fill_content.mjs

import fs from 'node:fs'
import path from 'path'
import reposData from './reposData.json' with { type: 'json' }

async function copyImages(repoData) {
    console.log(`copy image '${repoData.coverImage}' to part folder '${repoData.submodule_path}'.`)
    const source = path.join('.', 'tools', 'temp', 'part_images', repoData.coverImage)
    const target = path.join('.', repoData.submodule_path, repoData.coverImage)
    if (! fs.existsSync(target)) {
        if (fs.existsSync(source)) {
            fs.renameSync(source,target)
        } else {
            console.log(` source image '${repoData.coverImage}' missing..`)

        }
    }
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[1]; {
    for (const repoData of reposData) {
        await copyImages(repoData)
    }
}

main()
