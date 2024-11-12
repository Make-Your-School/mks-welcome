import matter from "gray-matter";

const preProcessingMD = (source, path_base) => {
    // console.group("preProcessingMD");
    const processedObj = matter(source, {
        eval: false,
        excerpt_separator: "<!-- more_details -->",
    });
    // console.log("path_base:", path_base);
    // console.log("processedObj:", processedObj);
    // console.groupEnd();
    return processedObj;
};

// const mksGetTags = (mksContent) => {
//     console.groupCollapsed("mksGetTags");
//     if (mksContent["tags"] == undefined) {
//         mksContent["tags"] = {};
//     }
//     const mksTags = mksContent["tags"];

//     const tags_dir = import.meta.glob("./tags/*/readme.md", {
//         as: "raw",
//         eager: true,
//     });
//     const path_regex = /\.\/tags\/(?<tag_name>.*)\/readme\.md/;
//     for (const path in tags_dir) {
//         // console.log(path);
//         // const mdContent = tags_dir[path];
//         // console.log("mdContent:", mdContent);
//         const { tag_name } = path_regex.exec(path).groups;
//         if (mksTags[tag_name] == undefined) {
//             mksTags[tag_name] = {};
//         }

//         mksTags[tag_name].path_readme = path;
//         mksTags[tag_name].path_base = path.replace("./", "mks/").replace("/readme.md", "/");
//         // extract / parse front matter
//         // https://github.com/jonschlinkert/gray-matter
//         mksTags[tag_name].readme = preProcessingMD(tags_dir[path], mksTags[tag_name].path_base);

//         // mksFn[tag_name].bauteile = mksGetItems(mksFn[tag_name].path_base);

//         // console.log(`${tag_name}`, mksFn[tag_name]);

//         console.log(`${tag_name} '${mksTags[tag_name].path_base}'`);
//     }
//     console.groupEnd();
// };

const getTagsContent = () => {
    return import.meta.glob(`./tags/*/readme.md`, {
        as: "raw",
        eager: true,
    });
}
const getPartsContent = () => {
    return import.meta.glob(`./parts/*/readme.md`, {
        as: "raw",
        eager: true,
    });
}

const mksGetItems = (mksContent, folderName, items_dir) => {
    console.groupCollapsed("mksGetItems");

    if (mksContent[folderName] == undefined) {
        mksContent[folderName] = {};
    }
    const mksItems = mksContent[folderName];

    // const items_dir = import.meta.glob("./parts/*/readme.md", {
    // console.log("items_dir", items_dir);
    // const path_regex = /\.\/parts\/(?<item_name>.*)\/readme\.md/;
    const path_regex = new RegExp(`\.\/${folderName}\/(?<item_name>.*)\/readme\.md`);
    for (const path in items_dir) {
        // console.log(path);
        const { item_name } = path_regex.exec(path).groups;
        // console.log(`item_name: '${item_name}'`);
        mksItems[item_name] = {};
        mksItems[item_name].path_readme = path;
        mksItems[item_name].path_base = `mks/${folderName}/${item_name}/`;
        mksItems[item_name].readme = preProcessingMD(
            items_dir[path],
            mksItems[item_name].path_base
        );
        console.log(`${item_name} '${mksItems[item_name].path_base}'`);
    }
    console.groupEnd();
};

const mksGetContent = () => {
    console.group("mksContent");
    let mksContent = {
        welcome: {},
        tags: {},
        parts: {},
    };

    let temp = import.meta.glob("./readme.md", {
        as: "raw",
        eager: true,
    });
    const path_base = "mks/";
    mksContent.welcome.readme = preProcessingMD(temp["./readme.md"], path_base);
    mksContent.welcome.path_base = path_base;

    mksGetItems(mksContent, "tags", getTagsContent());
    mksGetItems(mksContent, "parts", getPartsContent());

    console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

export default mksGetContent();
