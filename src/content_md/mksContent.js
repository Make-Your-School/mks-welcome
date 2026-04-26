// import preProcessingMD from "./preprocessMD";

import { importSingleFile } from './helperFn'

// import { getsubmodules } from '/getsubmodules.js'

const mksAddPartsToTags = (mksContent) => {
    console.groupCollapsed('mksAddPartsToTags')
    const mksTags = mksContent.tags
    const mksParts = mksContent.parts
    // console.log("mksTags", mksTags);
    for (const [tagname, tag] of Object.entries(mksTags)) {
        console.log(`tag '${tagname}':`, tag)
        if (tag.parts == undefined) {
            tag.parts = {}
        }
    }

    for (const [part_name, part] of Object.entries(mksParts)) {
        // console.log("part:", part);
        const part_tags = part.meta.tags
        // console.log(`${part_name} part_tags`, part_tags);
        if (part_tags) {
            for (const part_tag of part_tags) {
                // console.log("part_tag", part_tag);
                // console.log("mksTags[part_tag]", mksTags[part_tag]);
                if (mksTags[part_tag]) {
                    mksTags[part_tag].parts[part_name] = part
                }
            }
        }
    }
    console.groupEnd()
}

const mksAddURLToParts = (mksContent) => {
    console.groupCollapsed('mksAddURLToParts')
    console.log('process.env.publicPath', process.env.publicPath)
    console.log('process.env.submodules', process.env.submodules)
    const mksParts = mksContent.parts
    // const submodules = getsubmodules()
    const submodules = JSON.parse(process.env.submodules)
    // const submodules = {}
    console.log(submodules)
    for (const [part_name, part] of Object.entries(mksParts)) {
        // console.log(`part '${part_name}':`, part.path_base)
        const path = `public/${part.path_base}`.replace(/\/$/, '')
        // console.log(path)
        const submodule = submodules[path]
        if (submodule) {
            console.log(`part '${part_name}':`, submodule)
            part.submodule = submodule
        }
    }
    console.groupEnd()
}

const getTagsContent = () => {
    return import.meta.glob(`../../public/mks/tags/*/readme.md`, {
        eager: true,
    })
}
const getTagsContentText = () => {
    return import.meta.glob(`../../public/mks/tags/*/readme.md`, {
        query: '?raw',
        eager: true,
    })
}
const getPartsContent = () => {
    return import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        // query: "?url&raw",
        eager: true,
    })
}
const getPartsContentText = () => {
    return import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        query: '?raw',
        eager: true,
    })
}

const mksGetItems = (mksContent, folderName, items_dir, items_dir_text) => {
    console.groupCollapsed('mksGetItems')

    if (mksContent[folderName] == undefined) {
        mksContent[folderName] = {}
    }
    const mksItems = mksContent[folderName]

    // const items_dir = import.meta.glob("./parts/*/readme.md", {
    // console.log("items_dir", items_dir);
    // const path_regex = /\.\/parts\/(?<item_name>.*)\/readme\.md/;
    // const path_regex = new RegExp(`\.\/${folderName}\/(?<item_name>.*)\/readme\.md`);
    const path_regex = new RegExp(`./${folderName}/(?<item_name>.*)/readme.md`)
    for (const path in items_dir) {
        // console.log(path);
        const importedObj = items_dir[path]
        console.log('importedObj', importedObj)
        const { item_name } = path_regex.exec(path).groups
        // console.log(`item_name: '${item_name}'`);
        // const item_name_lc = item_name.toLowerCase()
        mksItems[item_name] = importSingleFile(
            importedObj,
            `mks/${folderName}/${item_name}/`,
            path,
            item_name,
        )
        // TODO: find a better way to support text-search of rendered content.
        mksItems[item_name].content_text = items_dir_text[path].default

        console.log(`${item_name} '${mksItems[item_name].path_base}'`)
    }
    console.log('mksItems', mksItems)
    console.groupEnd()
}

const mksGetContent = () => {
    console.groupCollapsed('mksContent')
    let mksContent = {
        welcome: {},
        tags: {},
        parts: {},
    }

    const path_base = '../../public/mks/'

    console.log('load welcome readme')
    const importedObj = import.meta.glob('../../public/mks/readme.md', {
        eager: true,
    })['../../public/mks/readme.md']
    console.log('importedObj', importedObj)
    mksContent.welcome = importSingleFile(importedObj, path_base)
    console.log('welcome done.')

    mksGetItems(mksContent, 'tags', getTagsContent(), getTagsContentText())
    mksGetItems(mksContent, 'parts', getPartsContent(), getPartsContentText())
    mksAddURLToParts(mksContent)
    mksAddPartsToTags(mksContent)

    console.log('mksContent:', mksContent)
    console.groupEnd()
    return mksContent
}

// const mksGetContentRaw = () => {
//     console.group("mksContent");
//     let mksContent = {
//         welcome: {},
//         tags: {},
//         parts: {},
//     };

//     const path_base = "../../public/mks/";

//     console.log("load welcome readme");
//     let temp = import.meta.glob("../../public/mks/readme.md", {
//         query: "?url&raw",
//         eager: true,
//     });
//     // console.log("temp", temp);
//     // console.log("call preProcessingMD...");
//     mksContent.welcome.readme = preProcessingMD(temp["../../public/mks/readme.md"].default, path_base);
//     mksContent.welcome.path_base = path_base;
//     console.log("welcome done.");

//     mksGetItems(mksContent, "tags", getTagsContent());
//     mksGetItems(mksContent, "parts", getPartsContent());
//     mksAddPartsToTags(mksContent);

//     console.log("mksContent:", mksContent);
//     console.groupEnd();
//     return mksContent;
// };

// we call these functions allready and only return the content?!
export default mksGetContent()
