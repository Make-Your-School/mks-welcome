// import * as matter from "gray-matter";
import matter from "gray-matter";
// import * as matter from "gray-matter-browser";

// // console.log(file_list);
// for (const item of Object.keys(file_list).sort()) {
//     console.log(item);
// }
// const file_tree = () => {
//     let file_tree = {};
//     const dir_funktionen = import.meta.glob("./*/*.md", {
//         query: "?raw",
//         // import: "default",
//     });
//     console.log(dir_funktionen);
//     dir_funktionen.en;
//     return file_tree;
// }

// export default file_tree();

const preProcessingMD = (source, path_base) => {
    console.group("preProcessingMD");
    const processedObj = matter(source, { eval: false });
    console.log("path_base:", path_base);
    console.log("processedObj:", processedObj);
    console.groupEnd();
    return processedObj;
};

const mksGetFunktionen = (mksContent) => {
    console.group("mksGetFunktionen");
    if (mksContent["funktionen"] == undefined) {
        mksContent["funktionen"] = {};
    }
    const mksFn = mksContent["funktionen"];

    const funktionen_dir = import.meta.glob("./funktionen/*/readme.md", {
        as: "raw",
        eager: true,
    });
    for (const path in funktionen_dir) {
        // console.log(path);
        // const mdContent = funktionen_dir[path];
        // console.log("mdContent:", mdContent);
        const fn_name = path.replace("./funktionen/", "").replace("/readme.md", "");
        if (mksFn[fn_name] == undefined) {
            mksFn[fn_name] = {};
        }

        mksFn[fn_name].path_readme = path;
        mksFn[fn_name].path_base = path.replace("./", "mks/").replace("/readme.md", "/");
        // extract / parse front matter
        // https://github.com/jonschlinkert/gray-matter
        mksFn[fn_name].readme = preProcessingMD(funktionen_dir[path], mksFn[fn_name].path_base);

        // mksFn[fn_name].bauteile = mksGetFnBauteile(mksFn[fn_name]["path_base"]);

        // console.log(`${fn_name}`, mksFn[fn_name]);
    }
    console.groupEnd();
};

const mksGetFnBauteile = (mksContent) => {
    console.group("mksGetFnBauteile");

    const mksFn = mksContent["funktionen"];

    const bauteile_dir = import.meta.glob("./funktionen/*/bauteile/*/readme.md", {
        as: "raw",
        eager: true,
    });
    // console.log("bauteile_dir", bauteile_dir);
    const path_regex = /\.\/funktionen\/(?<fn_name>.*)\/bauteile\/(?<part_name>.*)\/readme\.md/;
    for (const path in bauteile_dir) {
        // console.log(path);
        const { fn_name, part_name } = path_regex.exec(path).groups;
        // console.log(`fn_name: '${fn_name}'`);
        // console.log(`part_name: '${part_name}'`);

        if (mksFn[fn_name] == undefined) {
            mksFn[fn_name] = {};
        }
        if (mksFn[fn_name].bauteile == undefined) {
            mksFn[fn_name].bauteile = {};
        }
        const bauteile = mksFn[fn_name].bauteile;
        bauteile[part_name] = {};
        bauteile[part_name]["path_readme"] = path;
        bauteile[part_name]["path_base"] = path.replace("./", "mks/").replace("/readme.md", "/");
        // extract / parse front matter
        // https://github.com/jonschlinkert/gray-matter
        bauteile[part_name].readme = matter(bauteile_dir[path], { eval: false });

        // bauteile[part_name].bauteile = mksGetFnBauteile(bauteile[part_name]["path_base"]);

        console.log(`${fn_name} - ${part_name}`, bauteile[part_name]);
    }
    console.groupEnd();
};

const mksGetContent = () => {
    console.group("mksContent");
    let mksContent = {
        welcome: {},
        funktionen: {},
    };

    let temp = import.meta.glob("./readme.md", {
        as: "raw",
        eager: true,
    });
    const path_base = "mks/";
    mksContent["welcome"].readme = preProcessingMD(temp["./readme.md"], path_base);
    mksContent["welcome"]["path_base"] = path_base;

    mksGetFunktionen(mksContent);
    mksGetFnBauteile(mksContent);

    // console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

export default mksGetContent();
