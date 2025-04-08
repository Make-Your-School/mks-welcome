// import preProcessingMD from "./preprocessMD";

const mksAddPartsToTags = (mksContent) => {
    console.group("mksAddPartsToTags");
    const mksTags = mksContent.tags;
    const mksParts = mksContent.parts;
    console.log("mksTags", mksTags);
    for (const [tagname, tag] of Object.entries(mksTags)) {
        console.log(`tag '${tagname}':`, tag);
        if (tag.parts == undefined) {
            tag.parts = {};
        }
    }

    for (const [part_name, part] of Object.entries(mksParts)) {
        // console.log("part:", part);
        const part_tags = part.meta.tags;
        // console.log(`${part_name} part_tags`, part_tags);
        if (part_tags) {
            for (const part_tag of part_tags) {
                // console.log("part_tag", part_tag);
                // console.log("mksTags[part_tag]", mksTags[part_tag]);
                if (mksTags[part_tag]) {
                    mksTags[part_tag].parts[part_name] = part;
                }
            }
        }
    }
    console.groupEnd();
};

const getTagsContent = () => {
    return import.meta.glob(`../../public/mks/tags/*/readme.md`, {
        eager: true,
    });
};
const getTagsContentText = () => {
    return import.meta.glob(`../../public/mks/tags/*/readme.md`, {
        query: "?raw",
        eager: true,
    });
};
const getPartsContent = () => {
    return import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        // query: "?url&raw",
        eager: true,
    });
};
const getPartsContentText = () => {
    return import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        query: "?raw",
        eager: true,
    });
};

const extractFrontmatterImports = (item) => {
    // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6#38750895
    const exclude = ["default", "excerpt"];
    const frontmatterKeys = Object.keys(item).filter((key) => !exclude.includes(key));
    return frontmatterKeys.reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
    }, {});
}




const mksGetItems = (mksContent, folderName, items_dir, items_dir_text) => {
    console.groupCollapsed("mksGetItems");

    if (mksContent[folderName] == undefined) {
        mksContent[folderName] = {};
    }
    const mksItems = mksContent[folderName];


    // const items_dir = import.meta.glob("./parts/*/readme.md", {
    // console.log("items_dir", items_dir);
    // const path_regex = /\.\/parts\/(?<item_name>.*)\/readme\.md/;
    // const path_regex = new RegExp(`\.\/${folderName}\/(?<item_name>.*)\/readme\.md`);
    const path_regex = new RegExp(`./${folderName}/(?<item_name>.*)/readme.md`);
    for (const path in items_dir) {
        // console.log(path);
        const importedObj = items_dir[path];
        console.log("importedObj", importedObj);
        const { item_name } = path_regex.exec(path).groups;
        // console.log(`item_name: '${item_name}'`);
        const item_name_lc = item_name.toLowerCase()
        mksItems[item_name_lc] = {};
        mksItems[item_name_lc].name = item_name;
        mksItems[item_name_lc].path_readme = path;
        mksItems[item_name_lc].path_base = `mks/${folderName}/${item_name}/`;
        mksItems[item_name_lc].readme = importedObj
        mksItems[item_name_lc].content = importedObj.default;
        // console.log('items_dir_text[path].default', items_dir_text[path].default)
        mksItems[item_name_lc].content_text = items_dir_text[path].default
        // TODO: find a better way to support text-search of rendered content.
        mksItems[item_name_lc].excerpt = importedObj.excerpt;
        mksItems[item_name_lc].meta = extractFrontmatterImports(importedObj);

        console.log(`${item_name} '${mksItems[item_name_lc].path_base}'`);
    }
    console.log("mksItems", mksItems);
    console.groupEnd();
};

const mksGetContent = () => {
    console.group("mksContent");
    let mksContent = {
        welcome: {},
        tags: {},
        parts: {},
    };

    const path_base = "../../public/mks/";

    console.log("load welcome readme");
    const importedObj = import.meta.glob("../../public/mks/readme.md", {
        eager: true,
    })["../../public/mks/readme.md"];
    console.log("importedObj", importedObj);
    mksContent.welcome.path_base = path_base;
    mksContent.welcome.readme = importedObj;
    mksContent.welcome.content = importedObj.default;
    mksContent.welcome.excerpt = importedObj.excerpt;
    mksContent.welcome.meta = extractFrontmatterImports(importedObj);
    console.log("welcome done.");



    mksGetItems(mksContent, 'tags', getTagsContent(), getTagsContentText())
    mksGetItems(mksContent, 'parts', getPartsContent(), getPartsContentText())
    mksAddPartsToTags(mksContent);

    console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

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
export default mksGetContent();
