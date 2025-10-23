// based on
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js

const ytRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
function youtubeParser(url) {
    const match = url.match(ytRegex)
    return match && match[7].length === 11 ? match[7] : url
}

const EMBED_REGEX = /@\[([a-zA-Z].+)]\([\s]*(.*?)[\s]*[)]/im

function videoEmbed(md, options) {
    function videoReturn(state, silent) {
        var serviceEnd
        var serviceStart
        var token
        var videoID
        var theState = state
        const oldPos = state.pos

        if (
            state.src.charCodeAt(oldPos) !== 0x40 /* @ */ ||
            state.src.charCodeAt(oldPos + 1) !== 0x5b /* [ */
        ) {
            return false
        }

        const match = EMBED_REGEX.exec(state.src.slice(state.pos, state.src.length))

        if (!match || match.length < 3) {
            return false
        }

        const service = match[1]
        videoID = match[2]
        const serviceLower = service.toLowerCase()

        if (serviceLower === 'youtube') {
            videoID = youtubeParser(videoID)
        } else if (!options[serviceLower]) {
            return false
        }

        // If the videoID field is empty, regex currently make it the close parenthesis.
        if (videoID === ')') {
            videoID = ''
        }

        serviceStart = oldPos + 2
        serviceEnd = md.helpers.parseLinkLabel(state, oldPos + 1, false)

        //
        // We found the end of the link, and know for a fact it's a valid link;
        // so all that's left to do is to call tokenizer.
        //
        if (!silent) {
            theState.pos = serviceStart
            theState.service = theState.src.slice(serviceStart, serviceEnd)
            const newState = new theState.md.inline.State(service, theState.md, theState.env, [])
            newState.md.inline.tokenize(newState)

            token = theState.push('video', '')
            token.videoID = videoID
            token.service = service
            token.url = match[2]
            token.level = theState.level
        }

        theState.pos += theState.src.indexOf(')', theState.pos)
        return true
    }

    return videoReturn
}

function extractVideoParameters(url) {
    const parameterMap = new Map()
    const params = url.replace(/&amp;/gi, '&').split(/[#?&]/)

    if (params.length > 1) {
        for (let i = 1; i < params.length; i += 1) {
            const keyValue = params[i].split('=')
            if (keyValue.length > 1) parameterMap.set(keyValue[0], keyValue[1])
        }
    }

    return parameterMap
}

function videoUrl(service, videoID, url, options) {
    switch (service) {
        case 'youtube': {
            const parameters = extractVideoParameters(url)
            if (options.youtube.parameters) {
                Object.keys(options.youtube.parameters).forEach((key) => {
                    parameters.set(key, options.youtube.parameters[key])
                })
            }

            // Start time parameter can have the format t=0m10s or t=<time_in_seconds> in share URLs,
            // but in embed URLs the parameter must be called 'start' and time must be in seconds
            const timeParameter = parameters.get('t')
            if (timeParameter !== undefined) {
                let startTime = 0
                const timeParts = timeParameter.match(/[0-9]+/g)
                let j = 0

                while (timeParts.length > 0) {
                    startTime += Number(timeParts.pop()) * Math.pow(60, j)
                    j += 1
                }
                parameters.set('start', startTime)
                parameters.delete('t')
            }

            parameters.delete('v')
            parameters.delete('feature')
            parameters.delete('origin')

            const parameterArray = Array.from(parameters, (p) => p.join('='))
            const parameterPos = videoID.indexOf('?')

            let finalUrl = 'https://www.youtube'
            if (options.youtube.nocookie || url.indexOf('youtube-nocookie.com') > -1)
                finalUrl += '-nocookie'
            finalUrl +=
                '.com/embed/' + (parameterPos > -1 ? videoID.substr(0, parameterPos) : videoID)
            if (parameterArray.length > 0) finalUrl += '?' + parameterArray.join('&')
            return finalUrl
        }
        default:
            return service
    }
}

function tokenizeVideo(md, options) {
    function tokenizeReturn(tokens, idx) {
        const videoID = md.utils.escapeHtml(tokens[idx].videoID)
        const service = md.utils.escapeHtml(tokens[idx].service).toLowerCase()

        return videoID === ''
            ? ''
            : '<YTEmbed ' +
                  '" videoID="' +
                  videoID +
                  '" src="' +
                  options.url(service, videoID, tokens[idx].url, options) +
                  '" ></YTEmbed>'
    }

    return tokenizeReturn
}

const options_defaults = {
    url: videoUrl,
    youtube: { width: 640, height: 390, nocookie: true },
}

/**
 * convert inline embed syntax to VUE YTembed component
 * @module MarkdownItPluginYoutubeAsYTEmbed
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports MarkdownItPluginYoutubeAsYTEmbed
 */
export default function MarkdownItPluginYoutubeAsYTEmbed(md, options) {
    options = Object.assign({}, options_defaults, options)

    md.renderer.rules.video = tokenizeVideo(md, options)

    md.inline.ruler.before('emphasis', 'video', videoEmbed(md, options))

    // const defaultRender =
    //     md.renderer.rules.link ||
    //     function (tokens, idx, options, env, self) {
    //         return self.renderToken(tokens, idx, options);
    //     };

    // md.renderer.rules.link = function (tokens, idx, options, env, self) {
    //     const token = tokens[idx];
    //     if (token.meta == undefined) {
    //         token.meta = {};
    //     }
    //     let srcValue = token.attrGet("href");
    //     if (srcValue.includes("youtube")) {
    //         // we think we have a youtube link
    //         // https://www.youtube-nocookie.com/embed/
    //         // token.attrSet('href', )
    //     }
    //     return defaultRender(tokens, idx, options, env, self);
    // };
}
