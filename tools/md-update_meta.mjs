// run with
// mks-welcome $ node md-update_examples.mjs

import fs from 'node:fs'
import path from 'path'

import meta from './meta.json' with { type: 'json' }

import { getsubmodules } from '../getsubmodules.js'


function replaceMeta(content, meta_obj, key) {
    // console.log('key', key)
    const meta_value = meta_obj.meta[key]
    // console.log('    meta_value', meta_value)
    if (meta_value) {
        // console.log('content', content)
        var keyRegex = new RegExp(`^${key}: ['"].*?['"]$`, 'gm')
        // console.log('keyRegex', keyRegex)
        if (keyRegex.test(content)) {
            // console.log('    update')
            content = content.replace(keyRegex, `${key}: '${meta_value}'`)
        } else {
            // console.log('    add')
            content = content.replace(/(?<meta>^---.+?)---/s, `$1${key}: '${meta_value}'\n---`)
        }
    }
    return content
}

async function updateMeta(submodule_name, submodule) {
    // console.log('submodule', submodule)
    // console.log('submodule', submodule)
    const part_name = path.basename(submodule_name).toLowerCase()
    console.log(`part_name '${part_name}'`)
    const meta_obj = meta[part_name]
    // console.log('meta_obj', meta_obj)

    if (!meta_obj) {
        console.log('    skipping. no meta found..')
        return
    }

    const filepath = path.join(submodule.path, 'readme.md')
    let readmeContent = fs.readFileSync(filepath, 'utf8')
    // console.log('readmeContent', readmeContent)

    let tweaked = readmeContent
    tweaked = replaceMeta(tweaked, meta_obj, 'title')
    tweaked = replaceMeta(tweaked, meta_obj, 'status')
    tweaked = replaceMeta(tweaked, meta_obj, 'difficulty')

    // tweaked = replaceMeta(tweaked, meta_obj, 'coverImage')
    // tweaked = replaceMeta(tweaked, meta_obj, 'material_number')
    // tweaked = replaceMeta(tweaked, meta_obj, 'material_type')
    // tweaked = replaceMeta(tweaked, meta_obj, 'material_short_descr')
    // tweaked = replaceMeta(tweaked, meta_obj, 'manufacture')
    // tweaked = replaceMeta(tweaked, meta_obj, 'manufacture_url')
    // tweaked = replaceMeta(tweaked, meta_obj, 'product_url')
    // tweaked = replaceMeta(tweaked, meta_obj, 'clone_url')
    // tweaked = replaceMeta(tweaked, meta_obj, 'embedded_example_file')

    // do not change these!!
    // these are based on the repo name and otherwise break!!
    // tweaked = replaceMeta(tweaked, meta_obj, 'repo_name')
    // tweaked = replaceMeta(tweaked, meta_obj, 'repo_prefix')
    // tweaked = replaceMeta(tweaked, meta_obj, 'repo_manufacture')
    // tweaked = replaceMeta(tweaked, meta_obj, 'repo_part')
    // console.log('\n')
    // console.log('tweaked:')
    // console.log(tweaked)
    // console.log('')
    if (tweaked === readmeContent) {
        console.log('    no changes')
    } else {
        fs.writeFileSync(filepath, tweaked)
        console.log('    readme saved to disk.')
    }
}

export async function main() {
    const submodules = getsubmodules()
    // console.log('submodules', submodules)
    console.log('meta', Object.keys(meta))

    // testrun
    // const [submodule_name, submodule] = Object.entries(submodules)[0]
    // await updateMeta(submodule_name, submodule)

    for (const [submodule_name, submodule] of Object.entries(submodules)) {
        await updateMeta(submodule_name, submodule)
    }
}

main()
