// run with
// node fill_content.mjs

import fs from 'node:fs'
import abbrList from './abbrList.json' with { type: 'json' }
import path from 'path'


export async function main() {
    console.log(`found '${abbrList.length}' abbreviations to process..`)
    // console.log('abbrList', abbrList)
    for (const [key, content ] of Object.entries(abbrList)) {
        // console.log('key', key)
        const filepath = path.join('.', 'public', 'mks', 'abbr', `${key}.md`)
        fs.writeFileSync(filepath, content)
        console.log('    abbr saved to disk.')
    }
}

main()
