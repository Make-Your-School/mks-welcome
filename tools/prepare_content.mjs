// run with
// node fill_content.mjs

import fs from 'node:fs'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'
import path from 'path'
// import { diff } from 'node:util';

function writeAbbrFile(key, content) {
    const filepath = path.join('.', 'public', 'mks', 'abbr', `${key}.md`)
    fs.writeFileSync(filepath, content)
    console.log('reposData saved to disk.')
}

const regexToolTip =
    /.*?\\\[simple\\_tooltip content='(?<tooltip_content>.*?)'\\\](?<tooltip_key>.*)\\\[\/simple\\_tooltip\\\].*/gms
async function extractToolTips(repoData, tooltipList) {
    console.log(`extract tooltips from '${repoData.repo_name}'...`)
    const result = regexToolTip.exec(repoData.content_description)
    if (result) {
        const { tooltip_key, tooltip_content } = result.groups
        if (tooltip_key && tooltip_content) {
            console.log(`    found '${tooltip_key}'`)
            if (tooltipList[tooltip_key]) {
                // console.log(`    already available. checking content..`);
                // const diffs = diff(tooltipList[tooltip_key], tooltip_content)
                // if (diffs.length > 0) {
                //     console.log(
                //         `    already available. content differs. generating new key please check yourself.....`,
                //     )
                // }
                if (tooltipList[tooltip_key] != tooltip_content) {
                    console.log(`    already available. content differs.`)
                    let tooltip_key_new = tooltip_key
                    while (Object.keys(tooltipList).includes(tooltip_key_new)) {
                        tooltip_key_new = tooltip_key_new + '-'
                    }
                    console.log(`     generated new key '${tooltip_key_new}'.`)
                    console.log(`     please check content yourself.....`)
                    tooltipList[tooltip_key_new] = tooltip_content
                }
            } else {
                tooltipList[tooltip_key] = tooltip_content
            }
        } else {
            console.log(`    extraction failed: key '${tooltip_key}', content '${tooltip_content}'`)
        }
    } else {
        console.log(`    no tooltips found.`)
    }
}

// async function prepareContentInfolist(repoData) {
//     repoData.content_infolist = repoData.content_infolist.replace()
// }

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)

    // const repoData = reposData[0]; {
    const tooltipList = {}
    for (const repoData of reposData) {
        // await prepareContentInfolist(repoData)
        await extractToolTips(repoData, tooltipList)
    }

    const tooltipListJSON = JSON.stringify(tooltipList, null, 4)
    fs.writeFileSync('tooltipList.json', tooltipListJSON)
    console.log(`'tooltipList.json' saved to disk.`)
    for (const {key, content} of Object.entries(tooltipList)) {
        writeAbbrFile(key, content)
    }
}

main()
