import preProcessingMD from "./preprocessMD";

const mksAddPartsToTags = (mksContent) => {
    console.groupCollapsed("mksAddPartsToTags");
    const mksTags = mksContent.tags;
    const mksParts = mksContent.parts;

    for (const [tag_name, tag] of Object.entries(mksTags)) {
        // console.log("tag:", tag);
        if (tag.parts == undefined) {
            tag.parts = {};
        }
    }

    for (const [part_name, part] of Object.entries(mksParts)) {
        // console.log("part:", part);
        const part_tags = part.readme.data.tags;
        // console.log(`${part_name} part_tags`, part_tags);
        if (part_tags) {
            for (const part_tag of part_tags) {
                const part_tag_lc = part_tag.toLowerCase();
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
        as: "raw",
        eager: true,
    });
};
const getPartsContent = () => {
    return import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        as: "raw",
        eager: true,
    });
};

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
        const item_name_lc = item_name.toLowerCase()
        mksItems[item_name_lc] = {};
        mksItems[item_name_lc].name = item_name;
        mksItems[item_name_lc].path_readme = path;
        mksItems[item_name_lc].path_base = `mks/${folderName}/${item_name}/`;
        mksItems[item_name_lc].readme = preProcessingMD(
            items_dir[path],
            mksItems[item_name_lc].path_base
        );
        console.log(`${item_name} '${mksItems[item_name_lc].path_base}'`);
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

    const path_base = "../../public/mks/";

    console.log("load welcome readme");
    let temp = import.meta.glob("../../public/mks/readme.md", {
        as: "raw",
        eager: true,
    });
    // console.log("temp", temp);
    // console.log("call preProcessingMD...");
    mksContent.welcome.readme = preProcessingMD(temp["../../public/mks/readme.md"], path_base);
    mksContent.welcome.path_base = path_base;
    console.log("welcome done.");



    mksGetItems(mksContent, "tags", getTagsContent());
    mksGetItems(mksContent, "parts", getPartsContent());
    mksAddPartsToTags(mksContent);

    console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

// we call these functions allready and only return the content?!
export default mksGetContent();
