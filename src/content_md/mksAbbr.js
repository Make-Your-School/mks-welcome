// import preProcessingMD from "./preprocessMD";

export const mksAbbrCollection = {};

export const mksAbbrLoad = () => {
    console.groupCollapsed("mksAbbrLoad");

    let mksAbbrList = {};
    const items_dir = import.meta.glob(`../../public/mks/abbr/*.md`, {
        // query: "?url&raw",
        // query: "?raw",
        eager: true,
    });
    console.log("items_dir", items_dir);
    // const path_regex = new RegExp(`\.\.\/\.\.\/public\/mks\/abbr\/(?<item_name>.*)\.md`);
    const path_regex = new RegExp(`../../public/mks/abbr/(?<item_name>.*).md`);
    // console.log("path_regex", path_regex);
    for (const path in items_dir) {
        console.log("path", path);
        console.log("items_dir[path]", items_dir[path]);
        const { item_name } = path_regex.exec(path).groups;
        console.log(`item_name: '${item_name}'`);
        mksAbbrList[item_name] = {};
        mksAbbrList[item_name].name = item_name;
        mksAbbrList[item_name].path_readme = path;
        mksAbbrList[item_name].path_base = `mks/abbr/`;
        mksAbbrList[item_name].content = items_dir[path].default;
    }
    console.log("mksAbbrList:", mksAbbrList);
    // console.log("mksAbbrList:", Object.keys(mksAbbrList));
    console.groupEnd();
    return mksAbbrList;
};

export default mksAbbrCollection;
