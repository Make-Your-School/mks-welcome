import preProcessingMD from "./preprocessMD";

const demo = () => {
    console.group("demo.js - loading content");
    let content = {};
    const path_base = "../../public/demo/";
    const fileURL = "../../public/demo/readme.md";
    let temp = import.meta.glob("../../public/demo/readme.md", {
        // let temp = import.meta.glob("/demo/readme.md", {
        query: "?url&raw",
        eager: true,
    });
    // console.log("temp", temp);
    // console.log("temp[fileURL].default", temp[fileURL].default);
    if (temp[fileURL].default) {
        content.readme = preProcessingMD(temp[fileURL].default, path_base);
        content.path_base = path_base;
        console.log("demo done.");
        console.log("content:", content);
    } else {
        console.error(
            `something with the import failed.. \n temp `,
            temp,
            ` does not contain file '${fileURL}'`,
        );
    }
    console.groupEnd();
    return content;
};

export default demo();
