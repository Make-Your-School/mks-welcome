import "./index.2b129d83.js";
import { p as preProcessingMD } from "./preprocessMD.45659a69.js";
const demo = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/demo/";
  console.log("load demo readme");
  let temp = { "../../public/demo/readme.md": "The HTML specification\nis maintained by the W3C.\n\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\n" };
  content.readme = preProcessingMD(temp["../../public/demo/readme.md"]);
  content.path_base = path_base;
  console.log("demo done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
var demo$1 = demo();
export { demo$1 as d };
