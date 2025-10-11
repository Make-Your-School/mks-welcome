// run with
// node fill_content.mjs

import fs from 'node:fs'
import reposData from './reposData.json' with { type: 'json' }
const reposDataFile = './reposData.json'
import path from 'path'
// import { diff } from 'node:util';

const regexToolTip =
    /\\\[simple\\_tooltip content='(?<tooltip_content>.*?)'\\\](?<tooltip_key>.*?)\\\[\/simple\\_tooltip\\\]/gmsu

function addToolTipItem(abbrList, tooltip_key, tooltip_content) {
    tooltip_content = tooltip_content.trim()
    if (abbrList[tooltip_key]) {
        // console.log(`    already available. checking content..`);
        // const diffs = diff(abbrList[tooltip_key], tooltip_content)
        // if (diffs.length > 0) {
        //     console.log(
        //         `    already available. content differs. generating new key please check yourself.....`,
        //     )
        // }
        if (abbrList[tooltip_key] != tooltip_content) {
            console.log(`    already available. content differs.`)
            let tooltip_key_new = tooltip_key
            while (Object.keys(abbrList).includes(tooltip_key_new)) {
                tooltip_key_new = tooltip_key_new + '-'
            }
            console.log(`     generated new key '${tooltip_key_new}'.`)
            console.log(`     please check content yourself.....`)
            abbrList[tooltip_key_new] = tooltip_content
        }
    } else {
        abbrList[tooltip_key] = tooltip_content
    }
}

async function extractToolTips(repoData, abbrList) {
    console.log(`extract tooltips from '${repoData.repo_name}'...`)

    repoData.content_description.replaceAll(
        regexToolTip,
        (match, p1, p2, offset, string, groups) => {
            let { tooltip_key, tooltip_content } = groups
            tooltip_key = tooltip_key.trim()
            tooltip_content = tooltip_content.trim()
            if (tooltip_key && tooltip_content) {
                console.log(`    found '${tooltip_key}'`)
                addToolTipItem(abbrList, tooltip_key, tooltip_content)
            } else {
                console.log(
                    `    extraction failed: key '${tooltip_key}', content '${tooltip_content}'`,
                )
            }
            return tooltip_key
        },
    )
    // const result = regexToolTip.exec(repoData.content_description)
    // if (result) {
    //     const { tooltip_key, tooltip_content } = result.groups
    //     if (tooltip_key && tooltip_content) {
    //         console.log(`    found '${tooltip_key}'`)
    //            addToolTipItem(abbrList, tooltip_key, tooltip_content)
    //     } else {
    //         console.log(`    extraction failed: key '${tooltip_key}', content '${tooltip_content}'`)
    //     }
    // } else {
    //     console.log(`    no tooltips found.`)
    // }
}

// async function prepareContentInfolist(repoData) {
//     repoData.content_infolist = repoData.content_infolist.replace()
// }

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)

    // const repoData = reposData[0]; {
    const abbrList = {}
    for (const repoData of reposData) {
        // await prepareContentInfolist(repoData)
        await extractToolTips(repoData, abbrList)
    }

    const abbrListJSON = JSON.stringify(abbrList, null, 4)
    fs.writeFileSync('./tools/abbrList.json', abbrListJSON)
    console.log(`'abbrList.json' saved to disk.`)
}

main()
