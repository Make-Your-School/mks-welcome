import matter from "gray-matter";

const preProcessingMD = (source, path_base) => {
    // console.group("preProcessingMD");
    // console.log("source:", source);
    // console.log("path_base:", path_base);
    const processedObj = matter(source, {
        eval: false,
        excerpt_separator: "<!-- more_details -->",
    });
    // console.log("processedObj:", processedObj);
    // console.groupEnd();
    return processedObj;
};

export default preProcessingMD;
