import preProcessingMD from "./preprocessMD";

const mksGetAbbr = () => {
    console.group("mksGetAbbr");

    let mksAbbrList = {};
    const path_base = "../../public/mks/abbr/";

    const items_dir = import.meta.glob(`../../public/mks/parts/*/readme.md`, {
        as: "raw",
        eager: true,
    });
    const path_regex = new RegExp(`\.\/${path_base}\/(?<item_name>.*)\.md`);
    for (const path in items_dir) {
        console.log(path);
        const { item_name } = path_regex.exec(path).groups;
        console.log(`item_name: '${item_name}'`);
        const item_name_lc = item_name.toLowerCase();
        mksAbbrList[item_name_lc] = {};
        mksAbbrList[item_name_lc].name = item_name;
        mksAbbrList[item_name_lc].path_readme = path;
        // mksAbbrList[item_name_lc].path_base = `mks/${folderName}/${item_name}/`;
        mksAbbrList[item_name_lc].content = preProcessingMD(
            items_dir[path],
            mksAbbrList[item_name_lc].path_base
        );
        console.log(`${item_name} '${mksAbbrList[item_name_lc].path_base}'`);
    }
    mksGetItems(mksContent, "tags", getTagsContent());

    console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksAbbrList;
};

export default mksGetAbbr();
