import preProcessingMD from "./preprocessMD";

const demo = () => {
    console.group("mksContent");
    let content = {};

    const path_base = "../../public/demo/";
    console.log("load demo readme");
    let temp = import.meta.glob("../../public/demo/readme.md", {
        as: "raw",
        eager: true,
    });
    content.readme = preProcessingMD(temp["../../public/demo/readme.md"], path_base);
    content.path_base = path_base;
    console.log("demo done.");
    console.log("content:", content);
    console.groupEnd();
    return content;
};

export default demo();
