import { importSingleFile } from './helperFn'

const about = () => {
    console.groupCollapsed('about.js - import about.md')
    let mdObj = {}

    const path_base = '../../public/'
    console.log('load about readme')
    const importedObj = import.meta.glob('../../public/about.md', {
        eager: true,
    })['../../public/about.md']
    // console.log('importedObj', importedObj)
    mdObj = importSingleFile(importedObj, path_base)
    console.log('about done.', mdObj)
    console.groupEnd()
    return mdObj
}

export default about()
