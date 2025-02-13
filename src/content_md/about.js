import preProcessingMD from "./preprocessMD";

const about = () => {
    console.group("mksContent");
    let content = {};

    const path_base = "../../public/";
    console.log("load about readme");
    let temp = import.meta.glob("../../public/about.md", {
        as: "raw",
        eager: true,
    });
    content.readme = preProcessingMD(temp["../../public/about.md"], path_base);
    content.path_base = path_base;
    console.log("about done.");
    console.log("content:", content);
    console.groupEnd();
    return content;
};

export default about();
