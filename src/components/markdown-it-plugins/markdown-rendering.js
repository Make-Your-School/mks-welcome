import MarkdownIt from 'markdown-it-async'

// import MarkdownItPluginCodeAsMDCode from './markdown-it-plugin-code-as-mdcode'
// import MarkdownItPluginAbbrAsMDAbbr from './markdown-it-plugin-abbr-as-mdabbr'

import matter from "gray-matter";

// const preProcessingMD = (source, path_base=undefined) => {
export const preProcessingMD = (source) => {
    // console.group("preProcessingMD");
    // console.log("source:", source);
    // console.log("path_base:", path_base);
    // gray-matter needs vite-plugin-node-polyfills setup in quasar.config.js
    const processedObj = matter(source, {
        eval: false,
        excerpt_separator: '<!-- more_details -->',
    })
    // console.log("processedObj:", processedObj);
    // console.groupEnd();
    return processedObj
};



// ------------------------------------------
// setup markdown-it
// these settings should be matched with the ones in markdown-it-config.js

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    eval: false,
}

export const md = new MarkdownIt(md_options)

// both not used because of non interactive rendering...
// md.use(MarkdownItPluginCodeAsMDCode)
// md.use(MarkdownItPluginAbbrAsMDAbbr)

export const md2html = (source) => {
    // console.log("source:", source);
    const processedObj = preProcessingMD(source)
    // console.log("processedObj:", processedObj);
    return md.render(processedObj.content)
}

export default md2html
