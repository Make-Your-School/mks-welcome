// import { escapeHtml } from "markdown-it/lib/common/utils.mjs";

export function MarkdownItPluginCodeAsMDCode(md) {
    // console.log(`MarkdownItPluginCodeAsMDCode setup..`);
    // console.log("md.renderer.rules", md.renderer.rules);
    // console.log("md.renderer.rules.fence", md.renderer.rules.fence);

    // const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
    // const defaultRender_fence = md.renderer.rules.fence || proxy;

    md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
        // console.log(`MarkdownItPluginCodeAsMDCode.fence called`);
        // console.log(`tokens: `, tokens)
        // // console.log(`env: `, env);
        const token = tokens[idx];
        // console.log(`MarkdownItPluginCodeAsMDCode token: `, token);
        token.tag = "MDCode";
        // token.attrs = [
        //     ["content", token.content],
        //     ["codeLanguage", token.info],
        //     ["includePath", token.meta?.includePath ? token.meta?.includePath : ""],
        //     ["codeFilePath", token.meta?.codeFilePath ? token.meta?.codeFilePath : ""],
        // ];
        token.attrSet("content", token.content);
        token.attrSet("codeLanguage", token.info);
        token.attrSet("includePath", token.meta?.includePath ? token.meta?.includePath : '');
        token.attrSet("codeFilePath", token.meta?.codeFilePath ? token.meta?.codeFilePath : "");
        token.attrSet("fileExists", token.meta?.fileExists ? token.meta?.fileExists : undefined);
        // console.log(`MarkdownItPluginCodeAsMDCode token: `, token);
        // console.log(`tokens[idx]: `, tokens[idx]);

        // rendering
        return `<${token.tag} ${slf.renderAttrs(token)}></${token.tag}>`;
        // return `<${token.tag} ${slf.renderAttrs(token)}>
        // ${escapeHtml(tokens[idx].content)}
        // </${token.tag}>`;
        // the default rendering does have the `code` tags hard-coded..
        // return defaultRender_fence(tokens, idx, options, env, slf);
    };
}

export default MarkdownItPluginCodeAsMDCode;
