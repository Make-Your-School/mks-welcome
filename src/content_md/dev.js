
const dev = () => {
    console.group("mksContent");
    let content = {};

    const path_base = "../../public/dev/";
    console.log("load demo/dev.md");
    let temp = import.meta.glob("../../public/demo/dev.md", {
        query: "?raw",
        eager: true,
    });
    console.log("temp", temp);
    content.readme = preProcessingMD(temp["../../public/demo/dev.md"].default, path_base);
    content.path_base = path_base;
    console.log("dev done.");
    console.log("content:", content);
    console.groupEnd();
    return content;
};

export default dev();
