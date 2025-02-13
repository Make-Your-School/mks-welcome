import "./index.bd970e15.js";
import { p as preProcessingMD } from "./preprocessMD.c807aab7.js";
const demo = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/demo/";
  console.log("load demo readme");
  let temp = { "../../public/demo/readme.md": "0 ping\n\n```c++ :./example.ino\n//this should be replaced..\n```\n\n1 something\n\n2 here\n\n3 is\n\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\n\nThe HTML specification\nis maintained by the W3C.\n" };
  content.readme = preProcessingMD(temp["../../public/demo/readme.md"]);
  content.path_base = path_base;
  console.log("demo done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
var demo$1 = demo();
export { demo$1 as d };
