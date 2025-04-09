import { importSingleFile } from './helperFn'

const demo = () => {
    console.groupCollapsed('demo.js - import demo.md')
    let mdObj = {}

    const path_base = '../../public/'
    console.log('load demo readme')
    const importedObj = import.meta.glob('../../public//demo/readme.md', {
        eager: true,
    })['../../public//demo/readme.md']
    // console.log('importedObj', importedObj)
    mdObj.readme = importSingleFile(importedObj, path_base)
    const importedObj_dev = import.meta.glob('../../public//demo/readme.md', {
        eager: true,
    })['../../public//demo/readme.md']
    // console.log('importedObj', importedObj)
    mdObj.dev = importSingleFile(importedObj_dev, path_base)
    console.log('demo done.', mdObj)
    console.groupEnd()
    return mdObj
}

export default demo()
