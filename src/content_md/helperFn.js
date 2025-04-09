import { markRaw } from 'vue'

export const extractFrontmatterImports = (item) => {
    // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6#38750895
    const exclude = ['default', 'excerpt']
    const frontmatterKeys = Object.keys(item).filter((key) => !exclude.includes(key))
    return frontmatterKeys.reduce((obj, key) => {
        obj[key] = item[key]
        return obj
    }, {})
}

export const importSingleFile = (
    importedObj,
    path_base,
    path_readme = undefined,
    name = undefined,
) => {
    // console.log('importedObj', importedObj)
    const result = {}
    result.name = name
    result.path_readme = path_readme
    result.path_base = path_base
    result.raw = importedObj
    result.content = markRaw(importedObj.default)
    result.excerpt = importedObj.excerpt
    result.meta = extractFrontmatterImports(importedObj)
    // TODO: find a better way to support text-search of rendered content.
    return result
}
