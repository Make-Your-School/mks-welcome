// import { readFile } from 'node:fs/promises'
import fs from 'node:fs'

export const getsubmodules = function () {
    const filePath = `.gitmodules`
    // let text = await readFile(`.gitmodules`, {
    //     encoding: 'utf-8',
    // })
    const text = fs.readFileSync(filePath, 'utf8')
    // console.log('text', text)

    const regex =
        /\[submodule "(?<submodule>.*?)"\]\n.*?path = (?<path>.*?)\n.*?url = (?<url>.*?)\n/gm

    const submodules = {}
    let m
    while ((m = regex.exec(text)) !== null) {
        // console.log('m', m)
        // console.log('m.groups', m.groups)
        // submodules.push(m.groups)
        if (m.groups) {
            submodules[m.groups.path] = m.groups
            submodules[m.groups.path]['urlWeb'] = submodules[m.groups.path]['url'].replace(
                '.git',
                '',
            )
        }
    }

    // console.log('submodules', submodules)

    return submodules
}

export default getsubmodules

// getsubmodules()
