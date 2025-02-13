import "./index.5210e46b.js";
import { p as preProcessingMD } from "./preprocessMD.9a825059.js";
const demo = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/demo/";
  console.log("load demo readme");
  let temp = { "../../public/demo/readme.md": "---\ntitel: MD Test\ntags: [test, mock]\n---\n\n# Test MD features\n\ndemo Text..\n\n:tada:\n\nlink:\n[mks](https://makeyourschool.de/maker-ecke/material/)\n\n\n\nthis code block should be filled with a good example.ino code..\n```c++ :./example.ino\n//this should be replaced..\n\n```\n\ninclude an image:\n![test](./test_image.png)\n\n## heading2\n\n-   list element\n-   list element\n-   list element\n-   list element\n" };
  content.readme = preProcessingMD(temp["../../public/demo/readme.md"]);
  content.path_base = path_base;
  console.log("demo done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
var demo$1 = demo();
export { demo$1 as d };
