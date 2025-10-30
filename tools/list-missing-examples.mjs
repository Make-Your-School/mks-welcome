// run with
// mks-welcome $ node md-update_examples.mjs

import fs from 'node:fs'
import path from 'path'

import { getsubmodules } from '../getsubmodules.js'

async function checkMissingExample(submodule_name, submodule) {
    const dirs = fs.readdirSync(path.join(submodule.path, 'examples'), {
        recursive: true,
        withFileTypes: true,
    })
    // console.log('dirs', dirs)
    let dirs_filtered = dirs
        .filter((dirent) => dirent.isFile())
        .filter((dirent) => !dirent.name.includes('dev'))
        .filter((dirent) => !dirent.name.includes('old'))
        .filter((dirent) => dirent.name.includes('.ino'))
    if (dirs_filtered.length > 1) {
        dirs_filtered = dirs_filtered.filter((dirent) => dirent.name.includes('minimal'))
    }
    // console.log('dirs_filtered', dirs_filtered)

    const filepath = path.join(dirs_filtered[0].parentPath, dirs_filtered[0].name)
    let exampleContent = fs.readFileSync(filepath, 'utf8')

    const checkRegEx = /^\/\/ Noch nicht vorhanden\.$/gm
    if (checkRegEx.test(exampleContent)) {
        console.log(`- ${submodule.urlWeb}`)
    }
}

export async function main() {
    const submodules = getsubmodules()
    // console.log('submodules', submodules)
    const submodules_sorted = Object.entries(submodules).sort(([key1], [key2]) => {
        return path.basename(key1).localeCompare(path.basename(key2))
    })
    console.log('Example File Missing:')

    for (const [submodule_name, submodule] of submodules_sorted) {
        const filepath = path.join(submodule.path, 'readme.md')
        let readmeContent = fs.readFileSync(filepath, 'utf8')
        if (readmeContent.includes(/active/)) {
            await checkMissingExample(submodule_name, submodule)
        }
    }
}

main()
