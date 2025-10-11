// run with
// node fill_content.mjs

import fs from 'node:fs'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'

const regexToolTip =
    /.*?\\\[simple\\_tooltip content='(?<tooltip_content>.*?)'\\\](?<tooltip_key>.*)\\\[\/simple\\_tooltip\\\].*/gms
async function extractToolTips(repoData) {
    regexToolTip.exec(repoData.content_description)
}

// async function prepareContentInfolist(repoData) {
//     repoData.content_infolist = repoData.content_infolist.replace()
// }

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)

    // const repoData = reposData[0]; {
    for (const repoData of reposData) {
        await prepareContentInfolist(repoData)
    }
    // save modifications in reposData to disc
    const repoDataJson = JSON.stringify(reposData, null, 4)
    fs.writeFileSync(reposDataFile, repoDataJson)
    console.log('reposData saved to disk.')
}

main()
