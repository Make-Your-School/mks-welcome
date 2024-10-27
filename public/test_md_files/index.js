import matter from "gray-matter";

const preProcessingMD = (source, path_base) => {
    console.group("preProcessingMD");
    const processedObj = matter(source, {
        eval: false,
        excerpt_separator: "<!-- more_details -->",
    });
    console.log("path_base:", path_base);
    console.log("processedObj:", processedObj);
    console.groupEnd();
    return processedObj;
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
    const path_base = "./";
    mksContent["welcome"].readme = preProcessingMD(temp["./readme.md"], path_base);
    mksContent["welcome"].path_readme = path_base;
    mksContent["welcome"].path_base = path_base
        .replace("./", "test_md_files/")
        .replace("/readme.md", "/");
    // extract / parse front matter
    // https://github.com/jonschlinkert/gray-matter
    // mksFn[fn_name].readme = preProcessingMD(funktionen_dir[path], mksContent["welcome"].path_base);
    console.groupEnd();
    return mksContent;
};

export default mksGetContent();
