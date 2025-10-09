// run with
// node fill_content.mjs

import fs from 'node:fs'
import path from 'path'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'

const submodule_pathBase = './public/mks/parts/'

async function createExample(repoData) {
    const exampleName = `${repoData.frontmatter.repo_part}_minimal`
    const filepath = path.join('..', repoData.submodule_path, 'examples', exampleName)
    fs.mkdirSync(filepath, { recursive: true })

    const file = path.join(filepath, `${exampleName}.ino`)
    console.log('file', file)

    const example_filepath_relative = path.join('examples', exampleName, `${exampleName}.ino`)
    repoData.frontmatter.embedded_example_file = example_filepath_relative

    let example_content = repoData.example_code
    if (!example_content) {
        example_content = '// Noch nicht vorhanden.'
    }
    fs.writeFileSync(file, example_content)
}

async function removeDefaultExample(repoData) {
    const filepath = path.join('..', repoData.submodule_path, 'examples', 'BauteilTemplate_minimal')
    console.log(`removing '${filepath}'`)
    fs.rmSync(filepath, { recursive: true, force: true })
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[0]
    // {
    for (const repoData of reposData) {
        await removeDefaultExample(repoData)
        await createExample(repoData)
    }

    // save modifications in reposData to disc
    const repoDataJson = JSON.stringify(reposData, null, 4)
    fs.writeFileSync(reposDataFile, repoDataJson)
    console.log('reposData saved to disk.')
}

main()
