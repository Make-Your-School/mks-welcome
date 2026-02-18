// loosly based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

export function getDirectoryName(path) {
    const parts = path.split('/')
    // Remove the last part (file name)
    parts.pop()
    return parts.join('/')
}

/**
 * make all img 'src' attribute absolute.
 * @module imgSrcAbsOnline
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports imgSrcAbsOnline
 */
export default function imgSrcAbsOnline(md) {
    const defaultRender =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options)
        }

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        // console.log(`imgSrcAbsOnline`)
        const token = tokens[idx]
        if (token.meta == undefined) {
            token.meta = {}
        }
        let srcValue = token.attrGet('src')
        if (!srcValue.startsWith('http')) {
            // we think we have a relative path to tweak..
            // console.log(`srcValue: '${srcValue}'`)
            // console.log(`check env: `, env)
            if (env?.filePath) {
                // console.log(`env.filePath found:`, env.filePath)
                // remove trailing slash as we do add it manually..
                const basePath = getDirectoryName(env.filePath)
                // const basePath = env.filePath.replace(/\/$/gm, '')
                // console.log('basePath', basePath)
                // let srcValueClean = srcValue.replace('./', '')
                const filePath = basePath + '/' + srcValue
                // console.log('filePath', filePath)
                token.meta.filePath = filePath
                // console.log(`srcValue: (moded) '${srcValue}'`)
                // write back
                token.attrSet('src', filePath)
                // console.log("check attr:", token.attrGet("src"));
            } else {
                console.log('no env information found to build path from.')
            }
        }
        return defaultRender(tokens, idx, options, env, self)
    }
}
