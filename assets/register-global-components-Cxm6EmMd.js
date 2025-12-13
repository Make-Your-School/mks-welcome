const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D99HcMpZ.js","assets/index-B58MO-m-.js","assets/index-D-T13fjZ.css","assets/use-quasar-lnvt1htp.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/use-checkbox-CRDMuIcC.js","assets/use-timeout-mbAOQ1bv.js","assets/private.use-form-CuqoFYNk.js","assets/scroll-B_UZQTma.js","assets/use-dark-ohhhhM1M.js","assets/use-id-VYVhOyBZ.js","assets/QResizeObserver-EJh_7Y5U.js","assets/QSeparator-BMKidyBs.js","assets/QCard-DSEPViTj.js","assets/QExpansionItem-D1wxNd4A.js","assets/export-file-C6EpPVrv.js"])))=>i.map(i=>d[i]);
import { l as createBaseVNode, d as defineComponent, m as mergeDefaults, u as useSlots, b as inject, r as ref, t as toRefs, c as computed, n as unref, p as createElementBlock, w as watch, q as onBeforeMount, o as onMounted, v as openBlock, x as createCommentVNode, y as normalizeStyle, z as renderSlot, B as normalizeProps, C as mergeProps, F as Fragment, D as createTextVNode, E as toDisplayString, G as normalizeClass, H as createBlock, _ as __vitePreload, j as createVNode, Q as QBtn, I as createComponent, a as getCurrentInstance, J as onBeforeUnmount, K as cleanEvt, L as addEvt, h as h$1, M as Transition, N as stopAndPrevent, O as hSlot, P as withCtx, R as emptyRenderFn, S as tabsKey, U as withDirectives, V as Ripple, W as QIcon, X as hMergeSlot, Y as isKeyCode, Z as shouldIgnoreKey, $ as onDeactivated, a0 as onActivated, a1 as provide, a2 as createDirective, a3 as client, a4 as preventDraggable, a5 as noop, a6 as position, a7 as leftClick, a8 as getNormalizedVNodes, a9 as KeepAlive, aa as hDir, ab as watchEffect, ac as resolveComponent, ad as renderList, ae as useTemplateRef, s as shallowRef, af as defineStore } from "./index-B58MO-m-.js";
import { u as useQuasar } from "./use-quasar-lnvt1htp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useTransitionProps, v as validateOffset, a as validatePosition, b as useAnchorStaticProps, p as parsePosition, c as useTick, d as useTransition, e as useScrollTarget, f as useAnchor, g as usePortal, h as addClickOutside, r as removeClickOutside, s as setPosition, i as rtlHasScrollBug } from "./use-checkbox-CRDMuIcC.js";
import { u as useModelToggleEmits, s as scrollTargetProp, a as useModelToggleProps, b as useModelToggle, g as getScrollTarget } from "./scroll-B_UZQTma.js";
import { u as useTimeout, c as clearSelection } from "./use-timeout-mbAOQ1bv.js";
import "./use-id-VYVhOyBZ.js";
import { Q as QResizeObserver, g as getModifierDirections, s as shouldStart } from "./QResizeObserver-EJh_7Y5U.js";
import { Q as QSeparator } from "./QSeparator-BMKidyBs.js";
import { u as useDarkProps, a as useDark } from "./use-dark-ohhhhM1M.js";
import { Q as QCard } from "./QCard-DSEPViTj.js";
import { Q as QExpansionItem } from "./QExpansionItem-D1wxNd4A.js";
import { e as exportFile, Q as QCheckbox } from "./export-file-C6EpPVrv.js";
const wrapper = (callback) => callback;
const defineBoot = wrapper;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var uaParser$1 = { exports: {} };
var uaParser = uaParser$1.exports;
var hasRequiredUaParser;
function requireUaParser() {
  if (hasRequiredUaParser) return uaParser$1.exports;
  hasRequiredUaParser = 1;
  (function(module, exports) {
    (function(window2, undefined$1) {
      var LIBVERSION = "1.0.40", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i2 in regexes2) {
          if (extensions[i2] && extensions[i2].length % 2 === 0) {
            mergedRegexes[i2] = extensions[i2].concat(regexes2[i2]);
          } else {
            mergedRegexes[i2] = regexes2[i2];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i2 = 0; i2 < arr.length; i2++) {
          enums[arr[i2].toUpperCase()] = arr[i2];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i2 = 0, j, k, p2, q, matches, match;
        while (i2 < arrays.length && !matches) {
          var regex = arrays[i2], props = arrays[i2 + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p2 = 0; p2 < props.length; p2++) {
                match = matches[++k];
                q = props[p2];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                  }
                } else {
                  this[q] = match ? match : undefined$1;
                }
              }
            }
          }
          i2 += 2;
        }
      }, strMapper = function(str, map) {
        for (var i2 in map) {
          if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
            for (var j = 0; j < map[i2].length; j++) {
              if (has(map[i2][j], str)) {
                return i2 === UNKNOWN ? undefined$1 : i2;
              }
            }
          } else if (has(map[i2], str)) {
            return i2 === UNKNOWN ? undefined$1 : i2;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [VERSION, [NAME, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115)browser\/([\d\.]+)/i,
            // HeyTap/Ovi/115
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [VERSION, [NAME, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [NAME, VERSION],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [VERSION, NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [NAME, VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Honor
            /(?:honor)([-\w ]+)[;\)]/i
          ],
          [MODEL, [VENDOR, "Honor"], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
            /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
            // IMO
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(imo) (tab \w+)/i,
            // IMO
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [NAME, VERSION],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME, VERSION],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS/OpenHarmony
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined$1;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined$1;
          _browser[VERSION] = undefined$1;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined$1;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined$1;
          _device[MODEL] = undefined$1;
          _device[TYPE] = undefined$1;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined$1;
          _engine[VERSION] = undefined$1;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined$1;
          _os[VERSION] = undefined$1;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
      {
        if (module.exports) {
          exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : uaParser);
  })(uaParser$1, uaParser$1.exports);
  return uaParser$1.exports;
}
var uaParserExports = requireUaParser();
const Wn = /* @__PURE__ */ getDefaultExportFromCjs(uaParserExports);
/**
 * @name @wdns/vue-code-block
 * @version 2.3.5
 * @description Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vue-code-block/
 * @repository https://github.com/webdevnerdstuff/vue-code-block
 * @license MIT License
 */
const u$1 = "v-code-block";
function jn(r2) {
  return r2 === "" || r2 === "prism" ? "default" : r2;
}
function cn(r2) {
  return r2 ? "highlightjs" : "prism";
}
const W = (r2) => {
  const { str: t2, unit: b2 = "px" } = r2;
  if (t2 != null && t2 !== "" && t2 !== void 0) return +t2 ? `${Number(t2)}${b2}` : String(t2);
}, En = [createBaseVNode("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1)], Ln = [createBaseVNode("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1)], An = [createBaseVNode("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1)], pn = defineComponent({ __name: "StatusIcons", props: { icon: { type: String, required: true } }, setup: (r2) => (t2, b2) => r2.icon === "copy" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 0 }, t2.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), En, 16)) : r2.icon === "success" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 1 }, t2.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), Ln, 16)) : r2.icon === "failed" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 2 }, t2.$attrs, { viewBox: "0 0 320 512", xmlns: "http://www.w3.org/2000/svg" }), An, 16)) : createCommentVNode("", true) });
function Fn(r2) {
  return { name: "Plain text", aliases: ["text", "txt"], disableAutodetect: true };
}
const In = { class: "v-code-block--button-copy" }, Gn = { class: "v-code-block--button-run" }, Jn = { class: "v-code-block--code" }, On = ["textContent"], Rn = ["innerHTML"], Un = ((r2, t2) => {
  const b2 = r2.__vccOpts || r2;
  for (const [f2, q] of t2) b2[f2] = q;
  return b2;
})(defineComponent({ __name: "VCodeBlock", props: mergeDefaults({ browserWindow: { type: Boolean }, cssPath: {}, code: {}, codeBlockRadius: {}, copyButton: { type: Boolean }, copyIcons: { type: Boolean }, copyTab: { type: Boolean }, copyFailedText: {}, copyText: {}, copySuccessText: {}, floatingTabs: { type: Boolean }, globalOptions: { type: Boolean }, height: {}, highlightjs: { type: Boolean }, indent: {}, label: {}, lang: {}, languages: {}, maxHeight: {}, persistentCopyButton: { type: Boolean }, prismjs: { type: Boolean }, prismPlugin: { type: Boolean }, runTab: { type: Boolean }, runText: {}, tabGap: {}, tabs: { type: Boolean }, theme: { type: [String, Boolean] } }, { browserWindow: false, cssPath: void 0, code: "", codeBlockRadius: "0.5rem", copyButton: true, copyIcons: true, copyTab: true, copyFailedText: "Copy failed!", copyText: "Copy Code", copySuccessText: "Copied!", floatingTabs: true, height: "auto", highlightjs: false, indent: 2, label: "", lang: "javascript", maxHeight: "auto", persistentCopyButton: false, prismjs: false, prismPlugin: false, runTab: false, runText: "Run", tabGap: "0.25rem", tabs: false, theme: "neon-bunny" }), emits: ["run", "update:copy-status"], setup(r2, { emit: t2 }) {
  const b2 = t2, f2 = useSlots(), q = inject(vn, {}), E = r2, e2 = ref({ ...E, ...q });
  let L, A2;
  const _ = ref(null), h2 = ref("copy"), T = ref(""), F = ref(false), I2 = ref(false), C = ref(false), mn = ref("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles"), Y = ref("https://cdn.jsdelivr.net/gh/PrismJS/prism@1.29.0/themes"), dn = ref("https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@1.9.0/themes"), M = ref(""), G = ref(""), j = ref(""), { copyButton: kn, copyIcons: fn, copyTab: K, label: Q, runTab: X, tabs: N2 } = toRefs(e2.value), _n = computed(() => {
    let a2 = "";
    return e2.value.highlightjs && (a2 = M.value), e2.value.prismjs && e2.value.prismPlugin && (a2 = _.value), a2;
  }), wn = computed(() => ((a2) => {
    const { isMobile: l2, isPrism: o2 } = a2;
    return { [`${u$1}`]: true, [`${u$1}-mb-5`]: true, [`${u$1}--mobile`]: unref(l2), [`${u$1}--prismjs`]: unref(o2), [`${u$1}--highlightjs`]: !unref(o2) };
  })({ isMobile: C, isPrism: e2.value.prismjs })), xn = computed(() => ((a2) => {
    const { copyStatus: l2, isMobile: o2, persistentCopyButton: s2 } = a2;
    return { [`${u$1}--code-copy-button`]: true, [`${u$1}--code-copy-button-mobile`]: unref(o2), [`${u$1}--code-copy-button-persist`]: unref(s2), [`${u$1}--code-copy-button-status-${unref(l2)}`]: true };
  })({ copyStatus: h2, isMobile: C, persistentCopyButton: e2.value.persistentCopyButton })), Z = computed(() => ((a2) => {
    const { copyStatus: l2, highlightjs: o2, useTheme: s2 } = a2, y2 = cn(unref(o2)), v2 = jn(unref(s2));
    return { [`${u$1}--button-copy-icon-status-${unref(l2)}`]: true, [`${u$1}--me-1`]: true, [`${u$1}--tab-${y2}-${v2}-icon-status-${unref(l2)}`]: true, [`${u$1}--tab-${y2}-${v2}-icon`]: true };
  })({ copyStatus: h2, highlightjs: e2.value.highlightjs, useTheme: j })), Tn = computed(() => ((a2) => {
    const { isMobile: l2 } = a2;
    return { [`${u$1}--label`]: true, [`${u$1}--label-mobile`]: unref(l2) };
  })({ isMobile: C })), nn = computed(() => ((a2) => {
    const { highlightjs: l2, useTheme: o2 } = a2, s2 = cn(unref(l2)), y2 = jn(unref(o2));
    return { [`${u$1}--tab-${y2}`]: true, [`${u$1}--tab-${s2}-${y2}`]: true };
  })({ highlightjs: e2.value.highlightjs, useTheme: j })), en = computed(() => ((a2) => {
    const { isLoading: l2, useTheme: o2 } = a2, s2 = { width: unref(o2) === "coy" && unref(l2) === false ? "100%" : "" };
    return unref(o2) === "coy" && (s2.padding = "1em"), s2;
  })({ isLoading: I2, useTheme: j })), $n = computed(() => ((a2) => {
    const { floatingTabs: l2, tabGap: o2 } = a2;
    return { bottom: l2 ? "1px" : "0", gap: W({ str: unref(o2) }) || "0px" };
  })({ floatingTabs: e2.value.floatingTabs, tabGap: e2.value.tabGap })), Cn = computed(() => ((a2) => {
    const { copyTab: l2, height: o2, maxHeight: s2, radius: y2, runTab: v2, tabs: z, useTheme: S2 } = a2, p2 = unref(y2);
    let w2 = `${p2} 0 ${p2} ${p2} !important`;
    return unref(z) && (unref(l2) || unref(v2)) || (w2 = p2), { borderRadius: w2, display: unref(S2) !== "funky" ? "flex" : "block", height: W({ str: unref(o2) }), maxHeight: W({ str: unref(s2) }), overflow: "auto" };
  })({ copyTab: K.value, height: e2.value.height, maxHeight: e2.value.maxHeight, radius: e2.value.codeBlockRadius, runTab: X.value, tabs: N2.value, useTheme: j })), zn = computed(() => ((a2) => {
    const { tabGap: l2 } = a2;
    return { gap: W({ str: unref(l2) }) || "0px" };
  })({ tabGap: e2.value.tabGap }));
  function an() {
    if (!e2.value.prismjs && !e2.value.highlightjs) throw new Error("[vue-code-block]: You must set either the prismjs or highlightjs props.");
    if (e2.value.prismjs && e2.value.highlightjs) throw new Error("[vue-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");
    if (e2.value.highlightjs && e2.value.prismPlugin) throw new Error("[vue-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue-code-block component.");
  }
  function Sn() {
    if (e2.value.lang === "json") {
      const a2 = e2.value.code.toString();
      return function(l2) {
        try {
          return JSON.parse(l2), true;
        } catch {
          return false;
        }
      }(a2) ? void (_.value = JSON.stringify(JSON.parse(a2), null, e2.value.indent)) : (e2.value.lang = "text", void (_.value = a2));
    }
    _.value = e2.value.code;
  }
  function P() {
    F.value || (F.value = true, navigator.clipboard.writeText(_.value).then(() => {
      T.value = e2.value.copySuccessText, h2.value = "success", b2("update:copy-status", h2.value);
    }, (a2) => {
      T.value = e2.value.copyFailedText, h2.value = "failed", b2("update:copy-status", h2.value), console.error("Copy to clipboard failed: ", a2);
    }), setTimeout(() => {
      T.value = e2.value.copyText, h2.value = "copy", b2("update:copy-status", h2.value), F.value = false;
    }, 3e3));
  }
  function ln() {
    let a2 = "";
    const l2 = e2.value.highlightjs ? "highlightjs" : "prism", o2 = document.getElementsByTagName("head")[0], s2 = document.createElement("style"), y2 = document.body.getAttribute("data-v-code-block-theme");
    let v2 = `v-code-block--theme-${j.value}-${l2}`, z = true, S2 = true, p2 = "", w2 = "";
    if (v2 = on(l2, v2), y2 === j.value || y2 === v2 || typeof j.value == "boolean") return;
    switch (document.body.setAttribute("data-v-code-block-theme", v2), s2.setAttribute("type", "text/css"), s2.setAttribute("data-theme-id", v2), s2.setAttribute("data-theme", "v-code-block--theme-sheet"), j.value) {
      case "neon-bunny":
        a2 = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, S2 = false, z = false, l2 === "highlightjs" && (a2 = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-green);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
        break;
      case "neon-bunny-carrot":
        a2 = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, S2 = false, z = false, l2 === "highlightjs" && (a2 = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
    }
    if (!S2 && !z) return rn(), s2.appendChild(document.createTextNode(a2)), void o2.appendChild(s2);
    const un = on(l2, j.value);
    if (e2.value.cssPath !== void 0) w2 = e2.value.cssPath;
    else switch (l2) {
      case "highlightjs":
        p2 = `${un}.min.css`, w2 = `${mn.value}/${p2}`;
        break;
      case "prism":
        p2 = `${un}.css`, w2 = j.value === "default" ? `${Y.value}/prism.css` : j.value.includes("themes-") ? `${dn.value}/${p2}` : `${Y.value}/prism-${p2}`;
        break;
      default:
        p2 = "";
    }
    I2.value = true, fetch(w2).then((B2) => B2.text()).then((B2) => {
      rn(), s2.appendChild(document.createTextNode(B2)), o2.appendChild(s2), I2.value = false;
    }).catch((B2) => {
      const Bn = e2.value.highlightjs ? "Highlight.js" : "PrismJS";
      console.error(`${Bn} CDN Error:`, B2);
    });
  }
  function sn() {
    const a2 = Wn().device;
    C.value = a2.type === "mobile";
  }
  function on(a2, l2, o2 = false) {
    let s2 = l2;
    return a2 === "prism" && (s2 = s2.replace("themes-", "prism-"), s2 = s2.replace("prism-prism-", "prism-"), s2 = s2.replace("theme-prism-", "theme-"), o2 && (s2 = s2.replace("prism-prism-", ""), s2 = s2.replace("prism-", ""))), a2 === "highlightjs" && (s2 = s2.replace("base16-", "base16/")), s2;
  }
  function rn() {
    const a2 = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');
    a2.length > 0 && a2.forEach((l2) => {
      l2.remove();
    });
  }
  function tn() {
    Sn(), e2.value.highlightjs && __vitePreload(() => import("./index-D99HcMpZ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) : void 0).then((a2) => {
      L = a2.default, L.registerLanguage("plain", Fn), M.value = L.highlight(_.value, { language: e2.value.lang }).value;
    }).catch((a2) => {
      console.error("Highlight.js import:", { err: a2 });
    }), e2.value.prismjs && __vitePreload(() => import("./prism-DzMjcjGe.js").then((n2) => n2.p), true ? [] : void 0).then((a2) => {
      A2 = a2.default, M.value = A2.highlight(_.value, A2.languages[e2.value.lang], e2.value.lang);
    }).catch((a2) => {
      console.error("PrismJS import:", { err: a2 });
    });
  }
  function J() {
    b2("run");
  }
  return watch(E, () => {
    e2.value = { ...E, ...q }, e2.value.code && tn(), (e2.value.theme || e2.value.prismjs || e2.value.highlightjs) && (an(), j.value = e2.value.theme, ln()), e2.value.copyText && (T.value = e2.value.copyText), e2.value.runText && (G.value = e2.value.runText);
  }), onBeforeMount(() => {
    T.value = e2.value.copyText, G.value = e2.value.runText, an();
  }), onMounted(() => {
    j.value = e2.value.theme, ln(), sn(), tn();
  }), window.addEventListener("orientationchange", () => {
    sn();
  }), (a2, l2) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(wn)) }, [unref(Q) || unref(N2) || unref(f2).label || unref(f2).tabs ? (openBlock(), createElementBlock("div", { key: 0, class: "v-code-block--header", style: normalizeStyle(unref($n)) }, [createBaseVNode("div", { class: normalizeClass(["v-code-block--label v-code-block--pb-1", unref(Tn)]) }, [unref(f2).label ? renderSlot(a2.$slots, "label", normalizeProps(mergeProps({ key: 0 }, { copyCode: P, copyStatus: unref(h2), runCode: J })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(Q)), 1)], 64))], 2), createBaseVNode("div", { class: "v-code-block--tabs", style: normalizeStyle(unref(zn)) }, [unref(f2).tabs ? renderSlot(a2.$slots, "tabs", normalizeProps(mergeProps({ key: 0 }, { copyCode: P, copyStatus: unref(h2), runCode: J })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(K) && unref(N2) ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["v-code-block--tab", unref(nn)]), onClick: P }, [createBaseVNode("div", In, [unref(fn) ? (openBlock(), createBlock(pn, { key: 0, class: normalizeClass(["v-code-block--button-copy-icon", unref(Z)]), icon: unref(h2) }, null, 8, ["class", "icon"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(T)), 1)])], 2)) : createCommentVNode("", true), unref(X) && unref(N2) && !unref(C) ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(["v-code-block--tab v-code-block--tab-run", unref(nn)]), onClick: J }, [createBaseVNode("div", Gn, toDisplayString(unref(G)), 1)], 2)) : createCommentVNode("", true)], 64))], 4)], 4)) : createCommentVNode("", true), createBaseVNode("div", Jn, [createBaseVNode("div", { class: normalizeClass(["v-code-block--code-copy-button", unref(xn)]), onClick: P }, [unref(f2).copyButton ? renderSlot(a2.$slots, "copyButton", normalizeProps(mergeProps({ key: 0 }, { copyStatus: unref(h2) })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(kn) ? (openBlock(), createBlock(pn, { key: 0, class: normalizeClass(["v-code-block--button-copy-icon", unref(Z)]), icon: unref(h2) }, null, 8, ["class", "icon"])) : createCommentVNode("", true)], 64))], 2), createBaseVNode("pre", mergeProps(a2.$attrs, { class: `language-${unref(e2).lang}`, style: unref(Cn) }), [createTextVNode("		"), a2.prismPlugin ? (openBlock(), createElementBlock("code", { key: 0, class: normalizeClass(`language-${unref(e2).lang} ${unref(e2).browserWindow ? "v-code-block--code-browser" : ""} ${unref(e2).highlightjs ? "hljs" : ""}`), style: normalizeStyle(unref(en)), textContent: toDisplayString(unref(_n)) }, null, 14, On)) : (openBlock(), createElementBlock("code", { key: 1, class: normalizeClass(`language-${unref(e2).lang} ${unref(e2).browserWindow ? "v-code-block--code-browser" : ""} ${unref(e2).highlightjs ? "hljs" : ""}`), style: normalizeStyle(unref(en)), innerHTML: unref(M) }, null, 14, Rn)), createTextVNode(`
	`)], 16)])], 2));
} }), [["__scopeId", "data-v-51ec5829"]]);
Object.freeze(Object.defineProperty({ __proto__: null, default: Un }, Symbol.toStringTag, { value: "Module" }));
const vn = Symbol();
(function() {
  try {
    if (typeof document < "u") {
      var i2 = document.createElement("style");
      i2.appendChild(document.createTextNode(`:root{--v-cb-blue: 206 80% 39%;--v-cb-blue-hex: #146eb4;--v-cb-blue-rgb: 20, 110, 180;--v-cb-primary: var(--v-cb-blue);--v-cb-primary-hex: var(--v-cb-blue-hex);--v-cb-primary-rgb: var(--v-cb-blue-rgb);--v-cb-green: 120 61% 34%;--v-cb-green-hex: #228b22;--v-cb-green-rgb: 34, 139, 34;--v-cb-success: var(--v-cb-green);--v-cb-success-hex: var(--v-cb-green-hex);--v-cb-success-rgb: var(--v-cb-green-rgb);--v-cb-red: 0 68% 42%;--v-cb-red-hex: #b22222;--v-cb-red-rgb: 178, 34, 34;--v-cb-danger: var(--v-cb-red);--v-cb-danger-hex: var(--v-cb-red-hex);--v-cb-danger-rgb: var(--v-cb-red-rgb);--v-cb-tab-neon-bunny-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-text: 0 0% 100%;--v-cb-tab-neon-bunny-icon: 207 100% 52%;--v-cb-tab-neon-bunny-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-icon-failed: 3 100% 58%;--v-cb-tab-neon-bunny-carrot-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-carrot-text: 0 0% 100%;--v-cb-tab-neon-bunny-carrot-icon: 292 100% 50%;--v-cb-tab-neon-bunny-carrot-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-carrot-icon-failed: 3 100% 58%;--v-cb-tab-prism-coy-bkg: 205 59% 50%;--v-cb-tab-prism-coy-text: 0 0% 0%;--v-cb-tab-prism-coy-icon: 195 76% 41%;--v-cb-tab-prism-coy-icon-success: 80 100% 30%;--v-cb-tab-prism-coy-icon-failed: 0 64% 48%;--v-cb-tab-prism-dark-bkg: 30 20% 25%;--v-cb-tab-prism-dark-text: 0 0% 100%;--v-cb-tab-prism-dark-border: 30 20% 40%;--v-cb-tab-prism-dark-icon: 40 90% 60%;--v-cb-tab-prism-dark-icon-success: 75 70% 60%;--v-cb-tab-prism-dark-icon-failed: 0 100% 50%;--v-cb-tab-prism-default-bkg: 24 20% 95%;--v-cb-tab-prism-default-text: 0 0% 0%;--v-cb-tab-prism-default-icon: 198 100% 33%;--v-cb-tab-prism-default-icon-success: 80 100% 30%;--v-cb-tab-prism-default-icon-failed: 348 68% 58%;--v-cb-tab-prism-funky-bkg: 0 0% 80%;--v-cb-tab-prism-funky-text: 0 0% 100%;--v-cb-tab-prism-funky-dark: 0 0% 0%;--v-cb-tab-prism-funky-icon: 328 100% 54%;--v-cb-tab-prism-funky-icon-success: 80 61% 50%;--v-cb-tab-prism-funky-icon-failed: 0 100% 50%;--v-cb-tab-prism-okaidia-bkg: 70 8% 15%;--v-cb-tab-prism-okaidia-text: 0 0% 100%;--v-cb-tab-prism-okaidia-icon: 190 81% 67%;--v-cb-tab-prism-okaidia-icon-success: 80 76% 53%;--v-cb-tab-prism-okaidia-icon-failed: 338 95% 56%;--v-cb-tab-prism-solarizedlight-bkg: 44 87% 94%;--v-cb-tab-prism-solarizedlight-text: 196 13% 45%;--v-cb-tab-prism-solarizedlight-icon: 175 59% 40%;--v-cb-tab-prism-solarizedlight-icon-success: 68 100% 30%;--v-cb-tab-prism-solarizedlight-icon-failed: 18 80% 44%;--v-cb-tab-prism-tomorrow-bkg: 0 0% 18%;--v-cb-tab-prism-tomorrow-text: 0 0% 80%;--v-cb-tab-prism-tomorrow-icon: 299 34% 70%;--v-cb-tab-prism-tomorrow-icon-success: 143 39% 64%;--v-cb-tab-prism-tomorrow-icon-failed: 358 65% 68%;--v-cb-tab-prism-twilight-bkg: 0 0% 8%;--v-cb-tab-prism-twilight-text: 0 0% 80%;--v-cb-tab-prism-twilight-border: 0 0% 33%;--v-cb-tab-prism-twilight-icon: 53 89% 79%;--v-cb-tab-prism-twilight-icon-success: 76 21% 52%;--v-cb-tab-prism-twilight-icon-failed: 14 58% 55%;--v-cb-tab-prism-themes-night-owl: 207 95% 8%;--v-cb-tab-prism-themes-night-owl-text: 217 34% 88%;--v-cb-tab-prism-themes-night-owl-icon: 169 56% 68%;--v-cb-tab-prism-themes-night-owl-icon-success: 84 62% 63%;--v-cb-tab-prism-themes-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-a11y-dark-bkg: 0 0% 17%;--v-cb-tab-highlightjs-a11y-dark-text: 60 30% 96%;--v-cb-tab-highlightjs-a11y-dark-icon: 180 100% 44%;--v-cb-tab-highlightjs-a11y-dark-icon-success: 80 75% 55%;--v-cb-tab-highlightjs-a11y-dark-icon-failed: 17 100% 74%;--v-cb-tab-highlightjs-a11y-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-a11y-light-text: 0 0% 33%;--v-cb-tab-highlightjs-a11y-light-icon: 280 60% 39%;--v-cb-tab-highlightjs-a11y-light-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-a11y-light-icon-failed: 2 80% 47%;--v-cb-tab-highlightjs-agate-bkg: 0 0% 20%;--v-cb-tab-highlightjs-agate-text: 0 0% 100%;--v-cb-tab-highlightjs-agate-icon: 197 93% 83%;--v-cb-tab-highlightjs-agate-icon-success: 136 53% 66%;--v-cb-tab-highlightjs-agate-icon-failed: 0 56% 61%;--v-cb-tab-highlightjs-an-old-hope-bkg: 228 8% 12%;--v-cb-tab-highlightjs-an-old-hope-text: 219 13% 78%;--v-cb-tab-highlightjs-an-old-hope-icon: 195 63% 58%;--v-cb-tab-highlightjs-an-old-hope-icon-success: 116 75% 62%;--v-cb-tab-highlightjs-an-old-hope-icon-failed: 352 81% 58%;--v-cb-tab-highlightjs-androidstudio-bkg: 210 7% 17%;--v-cb-tab-highlightjs-androidstudio-text: 211 20% 72%;--v-cb-tab-highlightjs-androidstudio-icon: 206 38% 57%;--v-cb-tab-highlightjs-androidstudio-icon-success: 108 28% 46%;--v-cb-tab-highlightjs-androidstudio-icon-failed: 27 61% 50%;--v-cb-tab-highlightjs-arduino-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-arduino-light-text: 198 11% 30%;--v-cb-tab-highlightjs-arduino-light-icon: 182 100% 31%;--v-cb-tab-highlightjs-arduino-light-icon-success: 182 100% 19%;--v-cb-tab-highlightjs-arduino-light-icon-failed: 24 100% 41%;--v-cb-tab-highlightjs-arta-bkg: 0 0% 13%;--v-cb-tab-highlightjs-arta-text: 0 0% 67%;--v-cb-tab-highlightjs-arta-icon: 202 85% 56%;--v-cb-tab-highlightjs-arta-icon-success: 150 100% 40%;--v-cb-tab-highlightjs-arta-icon-failed: 330 83% 40%;--v-cb-tab-highlightjs-ascetic-bkg: 0 0% 100%;--v-cb-tab-highlightjs-ascetic-text: 0 0% 0%;--v-cb-tab-highlightjs-ascetic-icon: 0 0% 53%;--v-cb-tab-highlightjs-ascetic-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-ascetic-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-atom-one-dark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-atom-one-dark-icon-failed: 355 65% 65%;--v-cb-tab-highlightjs-atom-one-light-bkg: 0 0% 98%;--v-cb-tab-highlightjs-atom-one-light-text: 228 8% 24%;--v-cb-tab-highlightjs-atom-one-light-icon: 41 99% 30%;--v-cb-tab-highlightjs-atom-one-light-icon-success: 119 34% 47%;--v-cb-tab-highlightjs-atom-one-light-icon-failed: 5 74% 59%;--v-cb-tab-highlightjs-base16-onedark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-base16-onedark-text: 219 14% 71%;--v-cb-tab-highlightjs-base16-onedark-icon: 207 82% 66%;--v-cb-tab-highlightjs-base16-onedark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-base16-onedark-icon-failed: 5 48% 51%;--v-cb-tab-highlightjs-brown-paper-bkg: 35 22% 64%;--v-cb-tab-highlightjs-brown-paper-bkg-img: url(brown-papersq.png);--v-cb-tab-highlightjs-brown-paper-text: 233 32% 31%;--v-cb-tab-highlightjs-brown-paper-icon: 207 100% 30%;--v-cb-tab-highlightjs-brown-paper-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-brown-paper-icon-failed: 359 60% 31%;--v-cb-tab-highlightjs-codepen-embed-bkg: 0 0% 13%;--v-cb-tab-highlightjs-codepen-embed-text: 0 0% 100%;--v-cb-tab-highlightjs-codepen-embed-icon: 300 10% 57%;--v-cb-tab-highlightjs-codepen-embed-icon-success: 76 20% 52%;--v-cb-tab-highlightjs-codepen-embed-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-color-brewer-bkg: 0 0% 100%;--v-cb-tab-highlightjs-color-brewer-text: 0 0% 0%;--v-cb-tab-highlightjs-color-brewer-icon: 205 59% 47%;--v-cb-tab-highlightjs-color-brewer-icon-success: 138 54% 42%;--v-cb-tab-highlightjs-color-brewer-icon-failed: 20 89% 48%;--v-cb-tab-highlightjs-dark-bkg: 0 0% 19%;--v-cb-tab-highlightjs-dark-text: 0 0% 87%;--v-cb-tab-highlightjs-dark-icon: 0 56% 70%;--v-cb-tab-highlightjs-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-dark-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-default-bkg: 0 0% 95%;--v-cb-tab-highlightjs-default-text: 0 0% 27%;--v-cb-tab-highlightjs-default-icon: 0 0% 27%;--v-cb-tab-highlightjs-default-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-default-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-devibeans-bkg: 0 0% 0%;--v-cb-tab-highlightjs-devibeans-text: 23 4% 62%;--v-cb-tab-highlightjs-devibeans-icon: 207 89% 68%;--v-cb-tab-highlightjs-devibeans-icon-success: 95 49% 36%;--v-cb-tab-highlightjs-devibeans-icon-failed: 1 83% 63%;--v-cb-tab-highlightjs-docco-bkg: 240 100% 99%;--v-cb-tab-highlightjs-docco-text: 0 0% 0%;--v-cb-tab-highlightjs-docco-icon: 195 100% 35%;--v-cb-tab-highlightjs-docco-icon-success: 150 43% 44%;--v-cb-tab-highlightjs-docco-icon-failed: 17 64% 36%;--v-cb-tab-highlightjs-far-bkg: 240 100% 25%;--v-cb-tab-highlightjs-far-text: 180 100% 50%;--v-cb-tab-highlightjs-far-icon: 60 100% 50%;--v-cb-tab-highlightjs-far-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-far-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-felipec-bkg: 240 6% 13%;--v-cb-tab-highlightjs-felipec-text: 240 6% 87%;--v-cb-tab-highlightjs-felipec-icon: 210 75% 75%;--v-cb-tab-highlightjs-felipec-icon-success: 120 75% 75%;--v-cb-tab-highlightjs-felipec-icon-failed: 0 75% 75%;--v-cb-tab-highlightjs-foundation-bkg: 0 0% 93%;--v-cb-tab-highlightjs-foundation-text: 0 0% 0%;--v-cb-tab-highlightjs-foundation-icon: 180 100% 30%;--v-cb-tab-highlightjs-foundation-icon-success: 345 86% 47%;--v-cb-tab-highlightjs-foundation-icon-failed: 120 100% 23%;--v-cb-tab-highlightjs-github-dark-dimmed-bkg: 215 15% 16%;--v-cb-tab-highlightjs-github-dark-dimmed-text: 210 19% 73%;--v-cb-tab-highlightjs-github-dark-dimmed-icon: 207 100% 79%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-success: 119 52% 70%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed: 359 66% 28%;--v-cb-tab-highlightjs-github-dark-bkg: 216 28% 7%;--v-cb-tab-highlightjs-github-dark-text: 210 17% 82%;--v-cb-tab-highlightjs-github-dark-icon: 208 100% 74%;--v-cb-tab-highlightjs-github-dark-icon-success: 125 69% 70%;--v-cb-tab-highlightjs-github-dark-icon-failed: 4 100% 72%;--v-cb-tab-highlightjs-github-bkg: 0 0% 100%;--v-cb-tab-highlightjs-github-text: 210 12% 16%;--v-cb-tab-highlightjs-github-icon: 212 100% 39%;--v-cb-tab-highlightjs-github-icon-success: 134 60% 33%;--v-cb-tab-highlightjs-github-icon-failed: 354 66% 54%;--v-cb-tab-highlightjs-gml-bkg: 0 0% 13%;--v-cb-tab-highlightjs-gml-text: 0 0% 75%;--v-cb-tab-highlightjs-gml-icon: 60 100% 50%;--v-cb-tab-highlightjs-gml-icon-success: 121 73% 62%;--v-cb-tab-highlightjs-gml-icon-failed: 0 100% 75%;--v-cb-tab-highlightjs-googlecode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-googlecode-text: 0 0% 0%;--v-cb-tab-highlightjs-googlecode-icon: 180 100% 20%;--v-cb-tab-highlightjs-googlecode-icon-success: 120 100% 27%;--v-cb-tab-highlightjs-googlecode-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-gradient-dark-bkg: 279 58% 34%;--v-cb-tab-highlightjs-gradient-dark-bkg-gradient: linear-gradient(160deg, #652487 0, #443ac3 35%, #0174b7 68%, #04988e 100%);--v-cb-tab-highlightjs-gradient-dark-text: 266 15% 91%;--v-cb-tab-highlightjs-gradient-dark-icon: 199 100% 61%;--v-cb-tab-highlightjs-gradient-dark-icon-success: 75 100% 81%;--v-cb-tab-highlightjs-gradient-dark-icon-failed: 29 100% 63%;--v-cb-tab-highlightjs-gradient-light-bkg: 293 100% 90%;--v-cb-tab-highlightjs-gradient-light-bkg-gradient: linear-gradient(295deg, #f9ccff 0, #e6bbf9 11%, #9ec6f9 32%, #55e6ee 60%, #91f5d1 74%, #f9ffbf 98%);--v-cb-tab-highlightjs-gradient-light-text: 256 94% 26%;--v-cb-tab-highlightjs-gradient-light-icon: 199 64% 41%;--v-cb-tab-highlightjs-gradient-light-icon-success: 149 93% 38%;--v-cb-tab-highlightjs-gradient-light-icon-failed: 19 98% 25%;--v-cb-tab-highlightjs-grayscale-bkg: 0 0% 100%;--v-cb-tab-highlightjs-grayscale-text: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-success: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-failed: 0 0% 20%;--v-cb-tab-highlightjs-hybrid-bkg: 210 6% 12%;--v-cb-tab-highlightjs-hybrid-text: 140 3% 78%;--v-cb-tab-highlightjs-hybrid-icon: 208 32% 63%;--v-cb-tab-highlightjs-hybrid-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-hybrid-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-idea-bkg: 0 0% 100%;--v-cb-tab-highlightjs-idea-text: 0 0% 0%;--v-cb-tab-highlightjs-idea-icon: 240 100% 25%;--v-cb-tab-highlightjs-idea-icon-success: 120 60% 83%;--v-cb-tab-highlightjs-idea-icon-failed: 10 100% 87%;--v-cb-tab-highlightjs-intellij-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-intellij-light-text: 223 100% 35%;--v-cb-tab-highlightjs-intellij-light-icon: 294 80% 32%;--v-cb-tab-highlightjs-intellij-light-icon-success: 129 91% 26%;--v-cb-tab-highlightjs-intellij-light-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-ir-black-bkg: 0 0% 0%;--v-cb-tab-highlightjs-ir-black-text: 0 0% 97%;--v-cb-tab-highlightjs-ir-black-icon: 209 98% 79%;--v-cb-tab-highlightjs-ir-black-icon-success: 93 100% 69%;--v-cb-tab-highlightjs-ir-black-icon-failed: 301 100% 73%;--v-cb-tab-highlightjs-isbl-editor-dark-bkg: 0 0% 25%;--v-cb-tab-highlightjs-isbl-editor-dark-text: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed: 13 76% 50%;--v-cb-tab-highlightjs-isbl-editor-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-isbl-editor-light-text: 0 0% 0%;--v-cb-tab-highlightjs-isbl-editor-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-isbl-editor-light-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-light-icon-failed: 11 100% 49%;--v-cb-tab-highlightjs-kimbie-dark-bkg: 35 39% 10%;--v-cb-tab-highlightjs-kimbie-dark-text: 32 47% 68%;--v-cb-tab-highlightjs-kimbie-dark-icon: 356 19% 50%;--v-cb-tab-highlightjs-kimbie-dark-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-dark-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-kimbie-light-bkg: 35 83% 91%;--v-cb-tab-highlightjs-kimbie-light-text: 30 37% 38%;--v-cb-tab-highlightjs-kimbie-light-icon: 32 92% 58%;--v-cb-tab-highlightjs-kimbie-light-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-light-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-lightfair-bkg: 0 0% 100%;--v-cb-tab-highlightjs-lightfair-text: 0 0% 27%;--v-cb-tab-highlightjs-lightfair-icon: 217 89% 61%;--v-cb-tab-highlightjs-lightfair-icon-success: 180 69% 46%;--v-cb-tab-highlightjs-lightfair-icon-failed: 0 41% 56%;--v-cb-tab-highlightjs-lioshi-bkg: 0 0% 19%;--v-cb-tab-highlightjs-lioshi-text: 140 3% 78%;--v-cb-tab-highlightjs-lioshi-icon: 304 24% 66%;--v-cb-tab-highlightjs-lioshi-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-lioshi-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-magula-bkg: 0 0% 96%;--v-cb-tab-highlightjs-magula-text: 0 0% 0%;--v-cb-tab-highlightjs-magula-icon: 240 100% 25%;--v-cb-tab-highlightjs-magula-icon-success: 120 100% 17%;--v-cb-tab-highlightjs-magula-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-mono-blue-bkg: 213 27% 94%;--v-cb-tab-highlightjs-mono-blue-text: 214 100% 11%;--v-cb-tab-highlightjs-mono-blue-icon: 215 100% 34%;--v-cb-tab-highlightjs-mono-blue-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-mono-blue-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-monokai-sublime-bkg: 72 7% 13%;--v-cb-tab-highlightjs-monokai-sublime-text: 60 30% 96%;--v-cb-tab-highlightjs-monokai-sublime-icon: 54 70% 68%;--v-cb-tab-highlightjs-monokai-sublime-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-sublime-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-monokai-bkg: 70 8% 15%;--v-cb-tab-highlightjs-monokai-text: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-night-owl-bkg: 207 95% 8%;--v-cb-tab-highlightjs-night-owl-text: 217 34% 88%;--v-cb-tab-highlightjs-night-owl-icon: 276 68% 75%;--v-cb-tab-highlightjs-night-owl-icon-success: 84 62% 63%;--v-cb-tab-highlightjs-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-nnfx-dark-bkg: 0 0% 20%;--v-cb-tab-highlightjs-nnfx-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-dark-icon: 270 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-success: 90 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-failed: 18 100% 43%;--v-cb-tab-highlightjs-nnfx-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-light-text: 0 0% 0%;--v-cb-tab-highlightjs-nnfx-light-icon: 240 100% 50%;--v-cb-tab-highlightjs-nnfx-light-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-nnfx-light-icon-failed: 120 100% 48%;--v-cb-tab-highlightjs-nord-bkg: 220 16% 22%;--v-cb-tab-highlightjs-nord-text: 210 34% 63%;--v-cb-tab-highlightjs-nord-icon: 179 25% 65%;--v-cb-tab-highlightjs-nord-icon-success: 92 28% 65%;--v-cb-tab-highlightjs-nord-icon-failed: 14 51% 63%;--v-cb-tab-highlightjs-obsidian-bkg: 210 7% 17%;--v-cb-tab-highlightjs-obsidian-text: 210 7% 89%;--v-cb-tab-highlightjs-obsidian-icon: 210 32% 55%;--v-cb-tab-highlightjs-obsidian-icon-success: 162 26% 64%;--v-cb-tab-highlightjs-obsidian-icon-failed: 30 100% 46%;--v-cb-tab-highlightjs-panda-syntax-dark-bkg: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-dark-text: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-dark-icon: 207 94% 62%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-success: 171 95% 54%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed: 342 100% 65%;--v-cb-tab-highlightjs-panda-syntax-light-bkg: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-light-text: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-light-icon: 207 57% 50%;--v-cb-tab-highlightjs-panda-syntax-light-icon-success: 171 81% 27%;--v-cb-tab-highlightjs-panda-syntax-light-icon-failed: 324 70% 50%;--v-cb-tab-highlightjs-paraiso-dark-bkg: 304 22% 15%;--v-cb-tab-highlightjs-paraiso-dark-text: 23 4% 62%;--v-cb-tab-highlightjs-paraiso-dark-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-dark-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-dark-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-paraiso-light-bkg: 69 24% 89%;--v-cb-tab-highlightjs-paraiso-light-text: 314 9% 28%;--v-cb-tab-highlightjs-paraiso-light-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-light-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-light-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-pojoaque-bkg: 72 11% 9%;--v-cb-tab-highlightjs-pojoaque-bkg-img: url(pojoaque.jpg) left top;--v-cb-tab-highlightjs-pojoaque-text: 50 52% 71%;--v-cb-tab-highlightjs-pojoaque-icon: 36 100% 62%;--v-cb-tab-highlightjs-pojoaque-icon-success: 149 32% 41%;--v-cb-tab-highlightjs-pojoaque-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-purebasic-bkg: 60 100% 94%;--v-cb-tab-highlightjs-purebasic-text: 0 0% 0%;--v-cb-tab-highlightjs-purebasic-icon: 210 100% 50%;--v-cb-tab-highlightjs-purebasic-icon-success: 180 100% 33%;--v-cb-tab-highlightjs-purebasic-icon-failed: 327 32% 43%;--v-cb-tab-highlightjs-qtcreator-dark-bkg: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-dark-text: 0 0% 67%;--v-cb-tab-highlightjs-qtcreator-dark-icon: 240 100% 77%;--v-cb-tab-highlightjs-qtcreator-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-qtcreator-dark-icon-failed: 0 100% 67%;--v-cb-tab-highlightjs-qtcreator-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-qtcreator-light-text: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-success: 60 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-failed: 0 100% 25%;--v-cb-tab-highlightjs-rainbow-bkg: 180 1% 28%;--v-cb-tab-highlightjs-rainbow-text: 210 21% 85%;--v-cb-tab-highlightjs-rainbow-icon: 208 32% 63%;--v-cb-tab-highlightjs-rainbow-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-rainbow-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-routeros-bkg: 0 0% 94%;--v-cb-tab-highlightjs-routeros-text: 0 0% 27%;--v-cb-tab-highlightjs-routeros-icon: 200 66% 36%;--v-cb-tab-highlightjs-routeros-icon-success: 115 100% 30%;--v-cb-tab-highlightjs-routeros-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-school-book-bkg: 59 79% 83%;--v-cb-tab-highlightjs-school-book-text: 84 62% 22%;--v-cb-tab-highlightjs-school-book-icon: 207 100% 30%;--v-cb-tab-highlightjs-school-book-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-school-book-icon-failed: 355 97% 46%;--v-cb-tab-highlightjs-shades-of-purple-bkg: 243 34% 25%;--v-cb-tab-highlightjs-shades-of-purple-text: 248 100% 94%;--v-cb-tab-highlightjs-shades-of-purple-icon: 38 100% 49%;--v-cb-tab-highlightjs-shades-of-purple-icon-success: 102 83% 45%;--v-cb-tab-highlightjs-shades-of-purple-icon-failed: 344 94% 69%;--v-cb-tab-highlightjs-srcery-bkg: 40 6% 10%;--v-cb-tab-highlightjs-srcery-text: 39 90% 88%;--v-cb-tab-highlightjs-srcery-icon: 41 96% 57%;--v-cb-tab-highlightjs-srcery-icon-success: 76 55% 48%;--v-cb-tab-highlightjs-srcery-icon-failed: 2 86% 55%;--v-cb-tab-highlightjs-stackoverflow-dark-bkg: 0 2% 11%;--v-cb-tab-highlightjs-stackoverflow-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-stackoverflow-dark-icon: 207 42% 67%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed: 357 62% 66%;--v-cb-tab-highlightjs-stackoverflow-light-bkg: 0 0% 96%;--v-cb-tab-highlightjs-stackoverflow-light-text: 210 8% 20%;--v-cb-tab-highlightjs-stackoverflow-light-icon: 205 99% 29%;--v-cb-tab-highlightjs-stackoverflow-light-icon-success: 140 41% 31%;--v-cb-tab-highlightjs-stackoverflow-light-icon-failed: 360 62% 46%;--v-cb-tab-highlightjs-sunburst-bkg: 0 0% 0%;--v-cb-tab-highlightjs-sunburst-text: 0 0% 97%;--v-cb-tab-highlightjs-sunburst-icon: 214 100% 77%;--v-cb-tab-highlightjs-sunburst-icon-success: 101 45% 47%;--v-cb-tab-highlightjs-sunburst-icon-failed: 18 68% 64%;--v-cb-tab-highlightjs-tokyo-night-dark-bkg: 235 19% 13%;--v-cb-tab-highlightjs-tokyo-night-dark-text: 227 35% 71%;--v-cb-tab-highlightjs-tokyo-night-dark-icon: 261 85% 79%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-success: 89 51% 61%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed: 349 89% 72%;--v-cb-tab-highlightjs-tokyo-night-light-bkg: 230 8% 85%;--v-cb-tab-highlightjs-tokyo-night-light-text: 230 12% 38%;--v-cb-tab-highlightjs-tokyo-night-light-icon: 218 45% 37%;--v-cb-tab-highlightjs-tokyo-night-light-icon-success: 89 32% 28%;--v-cb-tab-highlightjs-tokyo-night-light-icon-failed: 348 35% 41%;--v-cb-tab-highlightjs-tomorrow-night-blue-bkg: 213 100% 16%;--v-cb-tab-highlightjs-tomorrow-night-blue-text: 0 0% 100%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon: 282 100% 87%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success: 87 72% 80%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed: 356 100% 81%;--v-cb-tab-highlightjs-tomorrow-night-bright-bkg: 0 0% 0%;--v-cb-tab-highlightjs-tomorrow-night-bright-text: 0 0% 92%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon: 281 45% 72%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success: 68 55% 54%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed: 358 62% 57%;--v-cb-tab-highlightjs-vs-bkg: 0 0% 100%;--v-cb-tab-highlightjs-vs-text: 0 0% 0%;--v-cb-tab-highlightjs-vs-icon: 240 100% 50%;--v-cb-tab-highlightjs-vs-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-vs-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-vs2015-bkg: 0 0% 12%;--v-cb-tab-highlightjs-vs2015-text: 0 0% 86%;--v-cb-tab-highlightjs-vs2015-icon: 207 61% 59%;--v-cb-tab-highlightjs-vs2015-icon-success: 112 38% 47%;--v-cb-tab-highlightjs-vs2015-icon-failed: 0 0% 0%;--v-cb-tab-highlightjs-xcode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-xcode-text: 0 0% 0%;--v-cb-tab-highlightjs-xcode-icon: 240 100% 53%;--v-cb-tab-highlightjs-xcode-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-xcode-icon-failed: 1 80% 43%;--v-cb-tab-highlightjs-xt256-bkg: 0 0% 0%;--v-cb-tab-highlightjs-xt256-text: 0 0% 92%;--v-cb-tab-highlightjs-xt256-icon: 240 100% 50%;--v-cb-tab-highlightjs-xt256-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-xt256-icon-failed: 0 100% 50%}.v-code-block{display:block;max-width:100%}.v-code-block--header{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label{overflow:auto}.v-code-block--tabs{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg{height:.85rem;width:.85rem}.v-code-block--code{position:relative;z-index:1}.v-code-block--code pre,.v-code-block--code pre[class*=language-]{margin-top:0}.v-code-block--code pre[class*=language-]:before,.v-code-block--code pre[class*=language-]:after{bottom:.95em}.v-code-block--code pre code{width:100%}.v-code-block--code-browser:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button{opacity:1}.v-code-block--code-copy-button{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button:hover{opacity:1}.v-code-block--code-copy-button-persist{opacity:.5}.v-code-block--code-copy-button svg{height:1rem;width:1rem}.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block--tab-prism-neon-bunny,.v-code-block--tab-highlightjs-neon-bunny{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-text))!important}.v-code-block--tab-prism-neon-bunny:hover,.v-code-block--tab-highlightjs-neon-bunny:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-icon,.v-code-block--tab-highlightjs-neon-bunny-icon{color:hsl(var(--v-cb-tab-neon-bunny-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon))!important}.v-code-block--tab-prism-neon-bunny-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important}.v-code-block--tab-prism-neon-bunny-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important}.v-code-block--tab-prism-neon-bunny>div,.v-code-block--tab-highlightjs-neon-bunny>div{color:hsl(var(--v-cb-tab-neon-bunny-text))}.v-code-block--tab-prism-neon-bunny-carrot,.v-code-block--tab-highlightjs-neon-bunny-carrot{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))!important}.v-code-block--tab-prism-neon-bunny-carrot:hover,.v-code-block--tab-highlightjs-neon-bunny-carrot:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-carrot-icon,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important}.v-code-block--tab-prism-neon-bunny-carrot>div,.v-code-block--tab-highlightjs-neon-bunny-carrot>div{color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))}.v-code-block--tab-prism-coy{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/10%)!important;border-left:5px solid hsl(var(--v-cb-tab-prism-coy-bkg));border-radius:0}.v-code-block--tab-prism-coy:hover{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/20%)!important}.v-code-block--tab-prism-coy-icon{color:hsl(var(--v-cb-tab-prism-coy-icon))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon))!important}.v-code-block--tab-prism-coy-icon-status-success{color:hsl(var(--v-cb-tab-prism-coy-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-success))!important}.v-code-block--tab-prism-coy-icon-status-failed{color:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important}.v-code-block--tab-prism-coy>div{color:hsl(var(--v-cb-tab-prism-coy-text))}.v-code-block--tab-prism-dark{background-color:hsl(var(--v-cb-tab-prism-dark-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-dark-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-dark:hover{background-color:hsl(var(--v-cb-tab-prism-dark-border)/50%)!important}.v-code-block--tab-prism-dark-icon{color:hsl(var(--v-cb-tab-prism-dark-icon))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon))!important}.v-code-block--tab-prism-dark-icon-status-success{color:hsl(var(--v-cb-tab-prism-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-success))!important}.v-code-block--tab-prism-dark-icon-status-failed{color:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important}.v-code-block--tab-prism-dark>div{color:hsl(var(--v-cb-tab-prism-dark-text))}.v-code-block--tab-prism-default{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/100%)!important}.v-code-block--tab-prism-default:hover{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/50%)!important}.v-code-block--tab-prism-default-icon{color:hsl(var(--v-cb-tab-prism-default-icon))!important;fill:hsl(var(--v-cb-tab-prism-default-icon))!important}.v-code-block--tab-prism-default-icon-status-success{color:hsl(var(--v-cb-tab-prism-default-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-success))!important}.v-code-block--tab-prism-default-icon-status-failed{color:hsl(var(--v-cb-tab-prism-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-failed))!important}.v-code-block--tab-prism-default>div{color:hsl(var(--v-cb-tab-prism-default-text))}.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block--tab-prism-funky:hover{background-color:hsl(var(--v-cb-tab-prism-funky-bkg))!important}.v-code-block--tab-prism-funky-icon{color:hsl(var(--v-cb-tab-prism-funky-icon))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon))!important}.v-code-block--tab-prism-funky-icon-status-success{color:hsl(var(--v-cb-tab-prism-funky-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-success))!important}.v-code-block--tab-prism-funky-icon-status-failed{color:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important}.v-code-block--tab-prism-funky>div{background-color:hsl(var(--v-cb-tab-prism-funky-dark))!important;color:hsl(var(--v-cb-tab-prism-funky-text))}.v-code-block--tab-prism-okaidia{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/100%)!important}.v-code-block--tab-prism-okaidia:hover{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/50%)!important}.v-code-block--tab-prism-okaidia-icon{color:hsl(var(--v-cb-tab-prism-okaidia-icon))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon))!important}.v-code-block--tab-prism-okaidia-icon-status-success{color:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important}.v-code-block--tab-prism-okaidia-icon-status-failed{color:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important}.v-code-block--tab-prism-okaidia>div{color:hsl(var(--v-cb-tab-prism-okaidia-text))}.v-code-block--tab-prism-solarizedlight{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/100%)!important}.v-code-block--tab-prism-solarizedlight:hover{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/50%)!important}.v-code-block--tab-prism-solarizedlight-icon{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important}.v-code-block--tab-prism-solarizedlight-icon-status-success{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important}.v-code-block--tab-prism-solarizedlight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important}.v-code-block--tab-prism-solarizedlight>div{color:hsl(var(--v-cb-tab-prism-solarizedlight-text))}.v-code-block--tab-prism-tomorrow{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/100%)!important}.v-code-block--tab-prism-tomorrow:hover{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/50%)!important}.v-code-block--tab-prism-tomorrow-icon{color:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important}.v-code-block--tab-prism-tomorrow-icon-status-success{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important}.v-code-block--tab-prism-tomorrow-icon-status-failed{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important}.v-code-block--tab-prism-tomorrow>div{color:hsl(var(--v-cb-tab-prism-tomorrow-text))}.v-code-block--tab-prism-twilight{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-twilight-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-twilight:hover{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/50%)!important}.v-code-block--tab-prism-twilight-icon{color:hsl(var(--v-cb-tab-prism-twilight-icon))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon))!important}.v-code-block--tab-prism-twilight-icon-status-success{color:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important}.v-code-block--tab-prism-twilight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important}.v-code-block--tab-prism-twilight>div{color:hsl(var(--v-cb-tab-prism-twilight-text))}.v-code-block--tab-prism-themes-night-owl{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/100%)!important}.v-code-block--tab-prism-themes-night-owl:hover{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/50%)!important}.v-code-block--tab-prism-themes-night-owl-icon{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important}.v-code-block--tab-prism-themes-night-owl>div{color:hsl(var(--v-cb-tab-prism-themes-night-owl-text))}.v-code-block--tab-highlightjs-brown-paper{background-color:var(--v-cb-tab-highlightjs-brown-paper-bkg);background-image:var(--v-cb-tab-highlightjs-brown-paper-bkg-img)}.v-code-block--tab-highlightjs-brown-paper:hover{background-color:hsl(var(--v-cb-tab-highlightjs-brown-paper-bkg))!important}.v-code-block--tab-highlightjs-brown-paper-icon{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important}.v-code-block--tab-highlightjs-brown-paper>div{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-text))}.v-code-block--tab-highlightjs-gradient-dark{background:var(--v-cb-tab-highlightjs-gradient-dark-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-dark-bkg)}.v-code-block--tab-highlightjs-gradient-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-bkg))!important}.v-code-block--tab-highlightjs-gradient-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-dark>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-text))}.v-code-block--tab-highlightjs-gradient-light{background:var(--v-cb-tab-highlightjs-gradient-light-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-light-bkg)}.v-code-block--tab-highlightjs-gradient-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-light-bkg))!important}.v-code-block--tab-highlightjs-gradient-light-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-light>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-text))}.v-code-block--tab-highlightjs-pojoaque{background:var(--v-cb-tab-highlightjs-pojoaque-bkg-img);background-color:var(--v-cb-tab-highlightjs-pojoaque-bkg)}.v-code-block--tab-highlightjs-pojoaque:hover{background-color:hsl(var(--v-cb-tab-highlightjs-pojoaque-bkg))!important}.v-code-block--tab-highlightjs-pojoaque-icon{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-v-icon-success))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important}.v-code-block--tab-highlightjs-pojoaque>div{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-text))}.v-code-block--tab-highlightjs-default{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/100%)!important}.v-code-block--tab-highlightjs-default:hover{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/50%)!important}.v-code-block--tab-highlightjs-default-icon{color:hsl(var(--v-cb-tab-highlightjs-default-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon))!important}.v-code-block--tab-highlightjs-default-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important}.v-code-block--tab-highlightjs-default-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important}.v-code-block--tab-highlightjs-default>div{color:hsl(var(--v-cb-tab-highlightjs-default-text))}.v-code-block--tab-highlightjs-a11y-dark{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-dark>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-text))}.v-code-block--tab-highlightjs-a11y-light{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-light-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-light>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-text))}.v-code-block--tab-highlightjs-agate{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/100%)!important}.v-code-block--tab-highlightjs-agate:hover{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/50%)!important}.v-code-block--tab-highlightjs-agate-icon{color:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important}.v-code-block--tab-highlightjs-agate-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important}.v-code-block--tab-highlightjs-agate-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important}.v-code-block--tab-highlightjs-agate>div{color:hsl(var(--v-cb-tab-highlightjs-agate-text))}.v-code-block--tab-highlightjs-an-old-hope{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/100%)!important}.v-code-block--tab-highlightjs-an-old-hope:hover{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/50%)!important}.v-code-block--tab-highlightjs-an-old-hope-icon{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important}.v-code-block--tab-highlightjs-an-old-hope>div{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-text))}.v-code-block--tab-highlightjs-androidstudio{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/100%)!important}.v-code-block--tab-highlightjs-androidstudio:hover{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/50%)!important}.v-code-block--tab-highlightjs-androidstudio-icon{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important}.v-code-block--tab-highlightjs-androidstudio>div{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-text))}.v-code-block--tab-highlightjs-arduino-light{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-arduino-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-arduino-light-icon{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important}.v-code-block--tab-highlightjs-arduino-light>div{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-text))}.v-code-block--tab-highlightjs-arta{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/100%)!important}.v-code-block--tab-highlightjs-arta:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/50%)!important}.v-code-block--tab-highlightjs-arta-icon{color:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important}.v-code-block--tab-highlightjs-arta-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important}.v-code-block--tab-highlightjs-arta-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important}.v-code-block--tab-highlightjs-arta>div{color:hsl(var(--v-cb-tab-highlightjs-arta-text))}.v-code-block--tab-highlightjs-ascetic{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/100%)!important}.v-code-block--tab-highlightjs-ascetic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/50%)!important}.v-code-block--tab-highlightjs-ascetic-icon{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important}.v-code-block--tab-highlightjs-ascetic>div{color:hsl(var(--v-cb-tab-highlightjs-ascetic-text))}.v-code-block--tab-highlightjs-atom-one-dark-reasonable{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-text))}.v-code-block--tab-highlightjs-atom-one-dark{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-text))}.v-code-block--tab-highlightjs-atom-one-light{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-light-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-light>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-text))}.v-code-block--tab-highlightjs-codepen-embed{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/100%)!important}.v-code-block--tab-highlightjs-codepen-embed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/50%)!important}.v-code-block--tab-highlightjs-codepen-embed-icon{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important}.v-code-block--tab-highlightjs-codepen-embed>div{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-text))}.v-code-block--tab-highlightjs-color-brewer{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/100%)!important}.v-code-block--tab-highlightjs-color-brewer:hover{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/50%)!important}.v-code-block--tab-highlightjs-color-brewer-icon{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important}.v-code-block--tab-highlightjs-color-brewer>div{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-text))}.v-code-block--tab-highlightjs-dark{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important}.v-code-block--tab-highlightjs-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important}.v-code-block--tab-highlightjs-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important}.v-code-block--tab-highlightjs-dark>div{color:hsl(var(--v-cb-tab-highlightjs-dark-text))}.v-code-block--tab-highlightjs-devibeans{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/100%)!important}.v-code-block--tab-highlightjs-devibeans:hover{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/50%)!important}.v-code-block--tab-highlightjs-devibeans-icon{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important}.v-code-block--tab-highlightjs-devibeans>div{color:hsl(var(--v-cb-tab-highlightjs-devibeans-text))}.v-code-block--tab-highlightjs-docco{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/100%)!important}.v-code-block--tab-highlightjs-docco:hover{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/50%)!important}.v-code-block--tab-highlightjs-docco-icon{color:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important}.v-code-block--tab-highlightjs-docco-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important}.v-code-block--tab-highlightjs-docco-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important}.v-code-block--tab-highlightjs-docco>div{color:hsl(var(--v-cb-tab-highlightjs-docco-text))}.v-code-block--tab-highlightjs-far{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/100%)!important}.v-code-block--tab-highlightjs-far:hover{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/50%)!important}.v-code-block--tab-highlightjs-far-icon{color:hsl(var(--v-cb-tab-highlightjs-far-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon))!important}.v-code-block--tab-highlightjs-far-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important}.v-code-block--tab-highlightjs-far-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important}.v-code-block--tab-highlightjs-far>div{color:hsl(var(--v-cb-tab-highlightjs-far-text))}.v-code-block--tab-highlightjs-felipec{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/100%)!important}.v-code-block--tab-highlightjs-felipec:hover{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/50%)!important}.v-code-block--tab-highlightjs-felipec-icon{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important}.v-code-block--tab-highlightjs-felipec-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important}.v-code-block--tab-highlightjs-felipec-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important}.v-code-block--tab-highlightjs-felipec>div{color:hsl(var(--v-cb-tab-highlightjs-felipec-text))}.v-code-block--tab-highlightjs-foundation{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/100%)!important}.v-code-block--tab-highlightjs-foundation:hover{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/50%)!important}.v-code-block--tab-highlightjs-foundation-icon{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important}.v-code-block--tab-highlightjs-foundation-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important}.v-code-block--tab-highlightjs-foundation-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important}.v-code-block--tab-highlightjs-foundation>div{color:hsl(var(--v-cb-tab-highlightjs-foundation-text))}.v-code-block--tab-highlightjs-github-dark-dimmed{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark-dimmed>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-text))}.v-code-block--tab-highlightjs-github-dark{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-text))}.v-code-block--tab-highlightjs-github{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/100%)!important}.v-code-block--tab-highlightjs-github:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-icon{color:hsl(var(--v-cb-tab-highlightjs-github-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon))!important}.v-code-block--tab-highlightjs-github-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important}.v-code-block--tab-highlightjs-github-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important}.v-code-block--tab-highlightjs-github>div{color:hsl(var(--v-cb-tab-highlightjs-github-text))}.v-code-block--tab-highlightjs-gml{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/100%)!important}.v-code-block--tab-highlightjs-gml:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/50%)!important}.v-code-block--tab-highlightjs-gml-icon{color:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important}.v-code-block--tab-highlightjs-gml-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important}.v-code-block--tab-highlightjs-gml-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important}.v-code-block--tab-highlightjs-gml>div{color:hsl(var(--v-cb-tab-highlightjs-gml-text))}.v-code-block--tab-highlightjs-googlecode{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/100%)!important}.v-code-block--tab-highlightjs-googlecode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/50%)!important}.v-code-block--tab-highlightjs-googlecode-icon{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important}.v-code-block--tab-highlightjs-googlecode>div{color:hsl(var(--v-cb-tab-highlightjs-googlecode-text))}.v-code-block--tab-highlightjs-grayscale{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/100%)!important}.v-code-block--tab-highlightjs-grayscale:hover{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/50%)!important}.v-code-block--tab-highlightjs-grayscale-icon{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important}.v-code-block--tab-highlightjs-grayscale>div{color:hsl(var(--v-cb-tab-highlightjs-grayscale-text))}.v-code-block--tab-highlightjs-hybrid{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/100%)!important}.v-code-block--tab-highlightjs-hybrid:hover{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/50%)!important}.v-code-block--tab-highlightjs-hybrid-icon{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important}.v-code-block--tab-highlightjs-hybrid>div{color:hsl(var(--v-cb-tab-highlightjs-hybrid-text))}.v-code-block--tab-highlightjs-idea{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/100%)!important}.v-code-block--tab-highlightjs-idea:hover{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/50%)!important}.v-code-block--tab-highlightjs-idea-icon{color:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important}.v-code-block--tab-highlightjs-idea-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important}.v-code-block--tab-highlightjs-idea-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important}.v-code-block--tab-highlightjs-idea>div{color:hsl(var(--v-cb-tab-highlightjs-idea-text))}.v-code-block--tab-highlightjs-intellij-light{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-intellij-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-intellij-light-icon{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important}.v-code-block--tab-highlightjs-intellij-light>div{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-text))}.v-code-block--tab-highlightjs-ir-black{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/100%)!important}.v-code-block--tab-highlightjs-ir-black:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/50%)!important}.v-code-block--tab-highlightjs-ir-black-icon{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important}.v-code-block--tab-highlightjs-ir-black>div{color:hsl(var(--v-cb-tab-highlightjs-ir-black-text))}.v-code-block--tab-highlightjs-isbl-editor-dark{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-dark>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-text))}.v-code-block--tab-highlightjs-isbl-editor-light{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-light>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-text))}.v-code-block--tab-highlightjs-kimbie-dark{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-dark>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-text))}.v-code-block--tab-highlightjs-kimbie-light{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-light-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-light>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-text))}.v-code-block--tab-highlightjs-lightfair{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/100%)!important}.v-code-block--tab-highlightjs-lightfair:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/50%)!important}.v-code-block--tab-highlightjs-lightfair-icon{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important}.v-code-block--tab-highlightjs-lightfair>div{color:hsl(var(--v-cb-tab-highlightjs-lightfair-text))}.v-code-block--tab-highlightjs-lioshi{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/100%)!important}.v-code-block--tab-highlightjs-lioshi:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/50%)!important}.v-code-block--tab-highlightjs-lioshi-icon{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important}.v-code-block--tab-highlightjs-lioshi>div{color:hsl(var(--v-cb-tab-highlightjs-lioshi-text))}.v-code-block--tab-highlightjs-magula{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/100%)!important}.v-code-block--tab-highlightjs-magula:hover{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/50%)!important}.v-code-block--tab-highlightjs-magula-icon{color:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important}.v-code-block--tab-highlightjs-magula-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important}.v-code-block--tab-highlightjs-magula-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important}.v-code-block--tab-highlightjs-magula>div{color:hsl(var(--v-cb-tab-highlightjs-magula-text))}.v-code-block--tab-highlightjs-mono-blue{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-mono-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-mono-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important}.v-code-block--tab-highlightjs-mono-blue>div{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-text))}.v-code-block--tab-highlightjs-monokai-sublime{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai-sublime:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-sublime-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important}.v-code-block--tab-highlightjs-monokai-sublime>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-text))}.v-code-block--tab-highlightjs-monokai{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important}.v-code-block--tab-highlightjs-monokai-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important}.v-code-block--tab-highlightjs-monokai-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important}.v-code-block--tab-highlightjs-monokai>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-text))}.v-code-block--tab-highlightjs-night-owl{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/100%)!important}.v-code-block--tab-highlightjs-night-owl:hover{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/50%)!important}.v-code-block--tab-highlightjs-night-owl-icon{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important}.v-code-block--tab-highlightjs-night-owl>div{color:hsl(var(--v-cb-tab-highlightjs-night-owl-text))}.v-code-block--tab-highlightjs-nnfx-dark{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-dark>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-text))}.v-code-block--tab-highlightjs-nnfx-light{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-light-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-light>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-text))}.v-code-block--tab-highlightjs-nord{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/100%)!important}.v-code-block--tab-highlightjs-nord:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/50%)!important}.v-code-block--tab-highlightjs-nord-icon{color:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important}.v-code-block--tab-highlightjs-nord-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important}.v-code-block--tab-highlightjs-nord-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important}.v-code-block--tab-highlightjs-nord>div{color:hsl(var(--v-cb-tab-highlightjs-nord-text))}.v-code-block--tab-highlightjs-obsidian{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/100%)!important}.v-code-block--tab-highlightjs-obsidian:hover{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/50%)!important}.v-code-block--tab-highlightjs-obsidian-icon{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important}.v-code-block--tab-highlightjs-obsidian>div{color:hsl(var(--v-cb-tab-highlightjs-obsidian-text))}.v-code-block--tab-highlightjs-panda-syntax-dark{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-dark>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-text))}.v-code-block--tab-highlightjs-panda-syntax-light{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-light>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-text))}.v-code-block--tab-highlightjs-paraiso-dark{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-dark>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-text))}.v-code-block--tab-highlightjs-paraiso-light{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-light-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-light>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-text))}.v-code-block--tab-highlightjs-purebasic{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/100%)!important}.v-code-block--tab-highlightjs-purebasic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/50%)!important}.v-code-block--tab-highlightjs-purebasic-icon{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important}.v-code-block--tab-highlightjs-purebasic>div{color:hsl(var(--v-cb-tab-highlightjs-purebasic-text))}.v-code-block--tab-highlightjs-qtcreator-dark{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-dark>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-text))}.v-code-block--tab-highlightjs-qtcreator-light{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-light-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-light>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-text))}.v-code-block--tab-highlightjs-rainbow{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/100%)!important}.v-code-block--tab-highlightjs-rainbow:hover{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/50%)!important}.v-code-block--tab-highlightjs-rainbow-icon{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important}.v-code-block--tab-highlightjs-rainbow>div{color:hsl(var(--v-cb-tab-highlightjs-rainbow-text))}.v-code-block--tab-highlightjs-routeros{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/100%)!important}.v-code-block--tab-highlightjs-routeros:hover{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/50%)!important}.v-code-block--tab-highlightjs-routeros-icon{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important}.v-code-block--tab-highlightjs-routeros-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important}.v-code-block--tab-highlightjs-routeros-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important}.v-code-block--tab-highlightjs-routeros>div{color:hsl(var(--v-cb-tab-highlightjs-routeros-text))}.v-code-block--tab-highlightjs-school-book{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/100%)!important}.v-code-block--tab-highlightjs-school-book:hover{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/50%)!important}.v-code-block--tab-highlightjs-school-book-icon{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important}.v-code-block--tab-highlightjs-school-book-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important}.v-code-block--tab-highlightjs-school-book-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important}.v-code-block--tab-highlightjs-school-book>div{color:hsl(var(--v-cb-tab-highlightjs-school-book-text))}.v-code-block--tab-highlightjs-shades-of-purple{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/100%)!important}.v-code-block--tab-highlightjs-shades-of-purple:hover{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/50%)!important}.v-code-block--tab-highlightjs-shades-of-purple-icon{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important}.v-code-block--tab-highlightjs-shades-of-purple>div{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-text))}.v-code-block--tab-highlightjs-srcery{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/100%)!important}.v-code-block--tab-highlightjs-srcery:hover{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/50%)!important}.v-code-block--tab-highlightjs-srcery-icon{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important}.v-code-block--tab-highlightjs-srcery-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important}.v-code-block--tab-highlightjs-srcery-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important}.v-code-block--tab-highlightjs-srcery>div{color:hsl(var(--v-cb-tab-highlightjs-srcery-text))}.v-code-block--tab-highlightjs-stackoverflow-dark{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-dark>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-text))}.v-code-block--tab-highlightjs-stackoverflow-light{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-light>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-text))}.v-code-block--tab-highlightjs-sunburst{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/100%)!important}.v-code-block--tab-highlightjs-sunburst:hover{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/50%)!important}.v-code-block--tab-highlightjs-sunburst-icon{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important}.v-code-block--tab-highlightjs-sunburst>div{color:hsl(var(--v-cb-tab-highlightjs-sunburst-text))}.v-code-block--tab-highlightjs-tokyo-night-dark{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-dark>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-text))}.v-code-block--tab-highlightjs-tokyo-night-light{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-light>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-text))}.v-code-block--tab-highlightjs-tomorrow-night-blue{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-text))}.v-code-block--tab-highlightjs-tomorrow-night-bright{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-text))}.v-code-block--tab-highlightjs-vs{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs-icon{color:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important}.v-code-block--tab-highlightjs-vs-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important}.v-code-block--tab-highlightjs-vs-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important}.v-code-block--tab-highlightjs-vs>div{color:hsl(var(--v-cb-tab-highlightjs-vs-text))}.v-code-block--tab-highlightjs-vs2015{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs2015:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs2015-icon{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important}.v-code-block--tab-highlightjs-vs2015>div{color:hsl(var(--v-cb-tab-highlightjs-vs2015-text))}.v-code-block--tab-highlightjs-xcode{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/100%)!important}.v-code-block--tab-highlightjs-xcode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/50%)!important}.v-code-block--tab-highlightjs-xcode-icon{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important}.v-code-block--tab-highlightjs-xcode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important}.v-code-block--tab-highlightjs-xcode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important}.v-code-block--tab-highlightjs-xcode>div{color:hsl(var(--v-cb-tab-highlightjs-xcode-text))}.v-code-block--tab-highlightjs-xt256{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/100%)!important}.v-code-block--tab-highlightjs-xt256:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/50%)!important}.v-code-block--tab-highlightjs-xt256-icon{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important}.v-code-block--tab-highlightjs-xt256-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important}.v-code-block--tab-highlightjs-xt256-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important}.v-code-block--tab-highlightjs-xt256>div{color:hsl(var(--v-cb-tab-highlightjs-xt256-text))}.v-code-block--tab-highlightjs-base16-onedark{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/100%)!important}.v-code-block--tab-highlightjs-base16-onedark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/50%)!important}.v-code-block--tab-highlightjs-base16-onedark-icon{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important}.v-code-block--tab-highlightjs-base16-onedark>div{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-text))}.v-code-block--mt-1{margin-top:.25rem!important}.v-code-block--me-1{margin-right:.25rem!important}.v-code-block--mb-1{margin-bottom:.25rem!important}.v-code-block--ms-1{margin-left:.25rem!important}.v-code-block--pt-1{padding-top:.25rem!important}.v-code-block--pe-1{padding-right:.25rem!important}.v-code-block--pb-1{padding-bottom:.25rem!important}.v-code-block--ps-1{padding-left:.25rem!important}.v-code-block--mt-2{margin-top:.5rem!important}.v-code-block--me-2{margin-right:.5rem!important}.v-code-block--mb-2{margin-bottom:.5rem!important}.v-code-block--ms-2{margin-left:.5rem!important}.v-code-block--pt-2{padding-top:.5rem!important}.v-code-block--pe-2{padding-right:.5rem!important}.v-code-block--pb-2{padding-bottom:.5rem!important}.v-code-block--ps-2{padding-left:.5rem!important}.v-code-block--mt-3{margin-top:.75rem!important}.v-code-block--me-3{margin-right:.75rem!important}.v-code-block--mb-3{margin-bottom:.75rem!important}.v-code-block--ms-3{margin-left:.75rem!important}.v-code-block--pt-3{padding-top:.75rem!important}.v-code-block--pe-3{padding-right:.75rem!important}.v-code-block--pb-3{padding-bottom:.75rem!important}.v-code-block--ps-3{padding-left:.75rem!important}.v-code-block--mt-4{margin-top:1rem!important}.v-code-block--me-4{margin-right:1rem!important}.v-code-block--mb-4{margin-bottom:1rem!important}.v-code-block--ms-4{margin-left:1rem!important}.v-code-block--pt-4{padding-top:1rem!important}.v-code-block--pe-4{padding-right:1rem!important}.v-code-block--pb-4{padding-bottom:1rem!important}.v-code-block--ps-4{padding-left:1rem!important}.v-code-block--mt-5{margin-top:1.25rem!important}.v-code-block--me-5{margin-right:1.25rem!important}.v-code-block--mb-5{margin-bottom:1.25rem!important}.v-code-block--ms-5{margin-left:1.25rem!important}.v-code-block--pt-5{padding-top:1.25rem!important}.v-code-block--pe-5{padding-right:1.25rem!important}.v-code-block--pb-5{padding-bottom:1.25rem!important}.v-code-block--ps-5{padding-left:1.25rem!important}.v-code-block---label-mobile input,.v-code-block---label-mobile select,.v-code-block---label-mobile textarea{display:none}.v-code-block[data-v-51ec5829]{display:block;max-width:100%}.v-code-block--header[data-v-51ec5829]{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label[data-v-51ec5829]{overflow:auto}.v-code-block--tabs[data-v-51ec5829]{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab[data-v-51ec5829]{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg[data-v-51ec5829]{height:.85rem;width:.85rem}.v-code-block--code[data-v-51ec5829]{position:relative;z-index:1}.v-code-block--code pre[data-v-51ec5829],.v-code-block--code pre[class*=language-][data-v-51ec5829]{margin-top:0}.v-code-block--code pre[class*=language-][data-v-51ec5829]:before,.v-code-block--code pre[class*=language-][data-v-51ec5829]:after{bottom:.95em}.v-code-block--code pre code[data-v-51ec5829]{width:100%}.v-code-block--code-browser[data-v-51ec5829]:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button[data-v-51ec5829]{opacity:1}.v-code-block--code-copy-button[data-v-51ec5829]{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button[data-v-51ec5829]:hover{opacity:1}.v-code-block--code-copy-button-persist[data-v-51ec5829]{opacity:.5}.v-code-block--code-copy-button svg[data-v-51ec5829]{height:1rem;width:1rem}`)), document.head.appendChild(i2);
    }
  } catch (t2) {
    console.error("vite-plugin-css-injected-by-js", t2);
  }
})();
var core;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const prop = obj[name];
      const type = typeof prop;
      if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
        deepFreeze(prop);
      }
    });
    return obj;
  }
  class Response2 {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0) mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node) => {
    return !!node.scope;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.startsWith("language:")) {
      return name.replace("language:", "language-");
    }
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x, i2) => `${x}${"_".repeat(i2 + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text) {
      this.buffer += escapeHTML(text);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node) {
      if (!emitsWrappingTags(node)) return;
      const className = scopeToCSSClass(
        node.scope,
        { prefix: this.classPrefix }
      );
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node) {
      if (!emitsWrappingTags(node)) return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result = { children: [] };
    Object.assign(result, opts);
    return result;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node) {
      this.top.children.push(node);
    }
    /** @param {string} scope */
    openNode(scope) {
      const node = newNode({ scope });
      this.add(node);
      this.stack.push(node);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode()) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node) {
      if (typeof node === "string") {
        builder.addText(node);
      } else if (node.children) {
        builder.openNode(node);
        node.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node) {
      if (typeof node === "string") return;
      if (!node.children) return;
      if (node.children.every((el) => typeof el === "string")) {
        node.children = [node.children.join("")];
      } else {
        node.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     */
    addText(text) {
      if (text === "") {
        return;
      }
      this.add(text);
    }
    /** @param {string} scope */
    startScope(scope) {
      this.openNode(scope);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(emitter, name) {
      const node = emitter.root;
      if (name) node.scope = `language:${name}`;
      this.add(node);
    }
    toHTML() {
      const renderer = new HTMLRenderer(this, this.options);
      return renderer.value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
  }
  function lookahead(re) {
    return concat("(?=", re, ")");
  }
  function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
  }
  function optional(re) {
    return concat("(?:", re, ")?");
  }
  function concat(...args) {
    const joined = args.map((x) => source(x)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
  }
  function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex) => {
      numCaptures += 1;
      const offset = numCaptures;
      let re = source(regex);
      let out = "";
      while (re.length > 0) {
        const match = BACKREF_RE.exec(re);
        if (!match) {
          out += re;
          break;
        }
        out += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re) => `(${re})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m, resp) => {
        if (m.index !== 0) resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          resp.data._beginMatch = m[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m, resp) => {
          if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
      }
    );
  };
  var MODES2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE,
    BACKSLASH_ESCAPE,
    BINARY_NUMBER_MODE,
    BINARY_NUMBER_RE,
    COMMENT,
    C_BLOCK_COMMENT_MODE,
    C_LINE_COMMENT_MODE,
    C_NUMBER_MODE,
    C_NUMBER_RE,
    END_SAME_AS_BEGIN,
    HASH_COMMENT_MODE,
    IDENT_RE,
    MATCH_NOTHING_RE,
    METHOD_GUARD,
    NUMBER_MODE,
    NUMBER_RE,
    PHRASAL_WORDS_MODE,
    QUOTE_STRING_MODE,
    REGEXP_MODE,
    RE_STARTERS_RE,
    SHEBANG,
    TITLE_MODE,
    UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0) mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0) mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch) return;
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x) => x.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`]) return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i2 = 1; i2 <= regexes.length; i2++) {
      positions[i2 + offset] = scopeNames[i2];
      emit[i2 + offset] = true;
      offset += countMatchGroups(regexes[i2 - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global2) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re]);
        this.matchAt += countMatchGroups(re) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el) => el[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s2) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s2);
        if (!match) {
          return null;
        }
        const i2 = match.findIndex((el, i3) => i3 > 0 && el !== void 0);
        const matchData = this.matchIndexes[i2];
        match.splice(0, i2);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index]) return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        this.rules.push([re, opts]);
        if (opts.type === "begin") this.count++;
      }
      /** @param {string} s */
      exec(s2) {
        const m = this.getMatcher(this.regexIndex);
        m.lastIndex = this.lastIndex;
        let result = m.exec(s2);
        if (this.resumingScanAtSamePosition()) {
          if (result && result.index === this.lastIndex) ;
          else {
            const m2 = this.getMatcher(0);
            m2.lastIndex = this.lastIndex + 1;
            result = m2.exec(s2);
          }
        }
        if (result) {
          this.regexIndex += result.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled) return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin) mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal) cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
      if (!mode.contains) mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c) {
        return expandOrCloneMode(c === "self" ? mode : c);
      }));
      mode.contains.forEach(function(c) {
        compileMode(
          /** @type Mode */
          c,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.11.1";
  class HTMLInjectionError extends Error {
    constructor(reason, html) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html;
    }
  }
  const escape = escapeHTML;
  const inherit = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block) {
      let classes = block.className + " ";
      classes += block.parentNode ? block.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context = {
        code,
        language: languageName
      };
      fire("before:highlight", context);
      const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
      result.code = context.code;
      fire("after:highlight", result);
      return result;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top.keywordPatternRe.lastIndex = 0;
        let match = top.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top.keywordPatternRe.lastIndex;
          match = top.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "") return;
        let result2 = null;
        if (typeof top.subLanguage === "string") {
          if (!languages[top.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
          continuations[top.subLanguage] = /** @type {CompiledMode} */
          result2._top;
        } else {
          result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
        }
        if (top.relevance > 0) {
          relevance += result2.relevance;
        }
        emitter.__addSublanguage(result2._emitter, result2.language);
      }
      function processBuffer() {
        if (top.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitKeyword(keyword, scope) {
        if (keyword === "") return;
        emitter.startScope(scope);
        emitter.addText(keyword);
        emitter.endScope();
      }
      function emitMultiClass(scope, match) {
        let i2 = 1;
        const max = match.length - 1;
        while (i2 <= max) {
          if (!scope._emit[i2]) {
            i2++;
            continue;
          }
          const klass = language.classNameAliases[scope[i2]] || scope[i2];
          const text = match[i2];
          if (klass) {
            emitKeyword(text, klass);
          } else {
            modeBuffer = text;
            processKeywords();
            modeBuffer = "";
          }
          i2++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top = Object.create(mode, { parent: { value: top } });
        return top;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response2(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored) matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response2(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb) continue;
          cb(match, resp);
          if (resp.isMatchIgnored) return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top;
        if (top.endScope && top.endScope._wrap) {
          processBuffer();
          emitKeyword(lexeme, top.endScope._wrap);
        } else if (top.endScope && top.endScope._multi) {
          processBuffer();
          emitMultiClass(top.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top.scope) {
            emitter.closeNode();
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list = [];
        for (let current = top; current !== language; current = current.parent) {
          if (current.scope) {
            list.unshift(current.scope);
          }
        }
        list.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
          err.mode = top;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          modeBuffer += "\n";
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result = "";
      let top = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        if (!language.__emitTokens) {
          top.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top.matcher.considerAll();
            }
            top.matcher.lastIndex = index;
            const match = top.matcher.exec(codeToHighlight);
            if (!match) break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.__emitTokens(codeToHighlight, emitter);
        }
        emitter.finalize();
        result = emitter.toHTML();
        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code) {
      const result = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result._emitter.addText(code);
      return result;
    }
    function highlightAuto(code, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a2, b2) => {
        if (a2.relevance !== b2.relevance) return b2.relevance - a2.relevance;
        if (a2.language && b2.language) {
          if (getLanguage(a2.language).supersetOf === b2.language) {
            return 1;
          } else if (getLanguage(b2.language).supersetOf === a2.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result = best;
      result.secondBest = secondBest;
      return result;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language)) return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
        return;
      }
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node = element;
      const text = node.textContent;
      const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
      element.innerHTML = result.value;
      element.dataset.highlighted = "yes";
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result, text });
    }
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      function boot() {
        highlightAll();
      }
      if (document.readyState === "loading") {
        if (!wantsHighlight) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang = null;
      try {
        lang = languageDefinition(hljs);
      } catch (error$1) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        lang = PLAINTEXT_LANGUAGE;
      }
      if (!lang.name) lang.name = languageName;
      languages[languageName] = lang;
      lang.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang.aliases) {
        registerAliases(lang.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin,
      removePlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES2) {
      if (typeof MODES2[key] === "object") {
        deepFreeze(MODES2[key]);
      }
    }
    Object.assign(hljs, MODES2);
    return hljs;
  };
  const highlight = HLJS({});
  highlight.newInstance = () => HLJS({});
  core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  return core;
}
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
function cpp(hljs) {
  const regex = hljs.regex;
  const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
  const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
  const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
  const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
  const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
  const CPP_PRIMITIVE_TYPES = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  };
  const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
  const STRINGS = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
        end: "'",
        illegal: "."
      },
      hljs.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };
  const NUMBERS = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  };
  const PREPROCESSOR = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs.inherit(STRINGS, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
  const TITLE_MODE = {
    className: "title",
    begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
    relevance: 0
  };
  const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
  const RESERVED_KEYWORDS = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ];
  const RESERVED_TYPES = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ];
  const TYPE_HINTS = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ];
  const FUNCTION_HINTS = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ];
  const LITERALS = [
    "NULL",
    "false",
    "nullopt",
    "nullptr",
    "true"
  ];
  const BUILT_IN = ["_Pragma"];
  const CPP_KEYWORDS = {
    type: RESERVED_TYPES,
    keyword: RESERVED_KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_IN,
    _type_hints: TYPE_HINTS
  };
  const FUNCTION_DISPATCH = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: FUNCTION_HINTS
    },
    begin: regex.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      hljs.IDENT_RE,
      regex.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  };
  const EXPRESSION_CONTAINS = [
    FUNCTION_DISPATCH,
    PREPROCESSOR,
    CPP_PRIMITIVE_TYPES,
    C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];
  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: CPP_KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  };
  const FUNCTION_DECLARATION = {
    className: "function",
    begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: CPP_KEYWORDS,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [TITLE_MODE],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: true,
        contains: [
          STRINGS,
          NUMBERS
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          CPP_PRIMITIVE_TYPES,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              "self",
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES
            ]
          }
        ]
      },
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: CPP_KEYWORDS,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      FUNCTION_DISPATCH,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: CPP_KEYWORDS,
          contains: [
            "self",
            CPP_PRIMITIVE_TYPES
          ]
        },
        {
          begin: hljs.IDENT_RE + "::",
          keywords: CPP_KEYWORDS
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u");
  const RESERVED_WORDS = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ];
  const BUILT_INS = [
    "__import__",
    "abs",
    "all",
    "any",
    "ascii",
    "bin",
    "bool",
    "breakpoint",
    "bytearray",
    "bytes",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "exec",
    "filter",
    "float",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip"
  ];
  const LITERALS = [
    "__debug__",
    "Ellipsis",
    "False",
    "None",
    "NotImplemented",
    "True"
  ];
  const TYPES = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];
  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
    type: TYPES
  };
  const PROMPT = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  };
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  const STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  const digitpart = "[0-9](_?[0-9])*";
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          "self",
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];
  return {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: true,
    keywords: KEYWORDS,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          IDENT_RE
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [PARAMS]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE,
              /\s*/,
              /\(\s*/,
              IDENT_RE,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}
const MODES = (hljs) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
const HTML_TAGS = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
];
const SVG_TAGS = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
];
const TAGS = [
  ...HTML_TAGS,
  ...SVG_TAGS
];
const MEDIA_FEATURES = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse();
const PSEUDO_CLASSES = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse();
const PSEUDO_ELEMENTS = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse();
const ATTRIBUTES = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function css(hljs) {
  const regex = hljs.regex;
  const modes = MODES(hljs);
  const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
  const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
          { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...STRINGS,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS.join("|") + ")\\b"
      }
    ]
  };
}
const _hoisted_1$4 = { class: "MDCode" };
const _sfc_main$4 = {
  __name: "MDCode",
  props: {
    content: String,
    codeLanguage: String,
    codeFilePath: String,
    codeWebPath: String
    // includePath: String,
    // fileExists: String,
  },
  setup(__props) {
    HighlightJS.registerLanguage("cpp", cpp);
    HighlightJS.registerLanguage("c++", cpp);
    HighlightJS.registerLanguage("ino", cpp);
    HighlightJS.registerLanguage("py", python);
    HighlightJS.registerLanguage("css", css);
    const theme = ref("base16/solarized-dark");
    const $q = useQuasar();
    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
          theme.value = "base16/solarized-dark";
        } else {
          theme.value = "base16/solarized-light";
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(unref(Un), {
          code: __props.content,
          highlightjs: "",
          lang: __props.codeLanguage,
          theme: theme.value,
          label: __props.codeFilePath != "undefined" ? __props.codeFilePath : "",
          persistentCopyButton: "",
          style: { "margin-bottom": "0" }
        }, null, 8, ["code", "lang", "theme", "label"]),
        __props.codeWebPath ? (openBlock(), createBlock(QBtn, {
          key: 0,
          flat: "",
          dense: "",
          round: "",
          icon: "open_in_browser",
          "aria-label": "öffne Datei im web",
          href: __props.codeWebPath,
          target: "_blank",
          class: "codeWeb"
        }, null, 8, ["href"])) : createCommentVNode("", true)
      ]);
    };
  }
};
const MDCode = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a88cb049"]]);
const QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorStaticProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      ...useTransitionProps.transitionShow,
      default: "jump-down"
    },
    transitionHide: {
      ...useTransitionProps.transitionHide,
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: scrollTargetProp,
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e2) {
          hide(e2);
          if (e2.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e2);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => (
          // it doesn't has external model
          // (null is the default value)
          props.modelValue === null && props.persistent !== true && showing.value === true
        )
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e2) => [target, e2, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null) return;
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h$1("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h$1(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
const _hoisted_1$3 = { class: "MDAbbr" };
const _sfc_main$3 = {
  __name: "MDAbbr",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createVNode(QTooltip, {
          anchor: "top middle",
          self: "bottom middle",
          class: "MDAbbrDescription bg-amber text-black shadow-4",
          "max-width": "40em"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "abbrDescription", {}, void 0, true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
const MDAbbr = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fa8e34f6"]]);
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e2, keyboard) {
    if (keyboard !== true && e2?.qAvoidFocus !== true) {
      blurTargetRef.value?.focus();
    }
    if (props.disable === true) {
      return;
    }
    {
      $tabs.updateModel({ name: props.name });
      emit("click", e2);
      return;
    }
  }
  function onKeydown(e2) {
    if (isKeyCode(e2, [13, 32])) {
      onClick(e2, true);
    } else if (shouldIgnoreKey(e2) !== true && e2.keyCode >= 35 && e2.keyCode <= 40 && e2.altKey !== true && e2.metaKey !== true) {
      $tabs.onKbdNavigate(e2.keyCode, proxy.$el) === true && stopAndPrevent(e2);
    }
    emit("keydown", e2);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h$1("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h$1(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h$1("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h$1(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h$1("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h$1("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h$1("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h$1(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
const QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
const QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v2) => alignValues.includes(v2)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i2 = 0; i2 < len; i2++) {
        if (tabDataList[i2].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value === name) return;
      if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", name);
      }
      if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
        animate(currentModel.value, name);
        currentModel.value = name;
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        rootRef.value && updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (hadActivated === true) {
        hadActivated = false;
      } else if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null) return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData?.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        hadActivated = false;
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e2) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e2.target && typeof e2.target.closest === "function") {
        const tab = e2.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
      // false | string (uid)
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute?.();
    }
    let hadRouteWatcher, hadActivated;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      if (hadRouteWatcher === true) {
        watchRoute();
        hadActivated = true;
        verifyRouteModel();
      }
      recalculateScroll();
    });
    return () => {
      return h$1("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h$1(QResizeObserver, { onResize: updateContainer }),
        h$1("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h$1(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h$1(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    const space = h$1("div", { class: "q-space" });
    return () => space;
  }
});
const QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h$1("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
  }
});
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v2 = parseFloat(val);
      v2 && (data[index] = v2);
    });
  }
  return data;
}
const TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) return;
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) return;
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) return;
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            ctx.end(evt);
            return;
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) return;
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup?.(true);
          if (evt !== void 0 && ctx.event.dir !== false) stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup?.();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return Object.hasOwnProperty.call(cache, key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = /* @__PURE__ */ Object.create(null);
      }
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h$1("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCache } = useRenderCache();
  const { registerTimeout } = useTimeout();
  let panels, forcedPanelTransition;
  const panelTransition = ref(null);
  const panelIndex = { value: null };
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      registerTimeout(() => {
        emit("transition", newVal, oldVal);
      }, props.transitionDuration);
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index !== -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h$1(KeepAlive, keepAliveProps.value, [
        h$1(
          needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h$1("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) return;
    return props.animated === true ? [h$1(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
const QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h$1("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
const QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
"stream" in Blob.prototype || Object.defineProperty(Blob.prototype, "stream", { value() {
  return new Response(this).body;
} }), "setBigUint64" in DataView.prototype || Object.defineProperty(DataView.prototype, "setBigUint64", { value(e2, n2, t2) {
  const i2 = Number(0xffffffffn & n2), r2 = Number(n2 >> 32n);
  this.setUint32(e2 + (t2 ? 0 : 4), i2, t2), this.setUint32(e2 + (t2 ? 4 : 0), r2, t2);
} });
var e = (e2) => new DataView(new ArrayBuffer(e2)), n = (e2) => new Uint8Array(e2.buffer || e2), t = (e2) => new TextEncoder().encode(String(e2)), i = (e2) => Math.min(4294967295, Number(e2)), r = (e2) => Math.min(65535, Number(e2));
function o(e2, i2, r2) {
  void 0 === i2 || i2 instanceof Date || (i2 = new Date(i2));
  const o2 = void 0 !== e2;
  if (r2 || (r2 = o2 ? 436 : 509), e2 instanceof File) return { isFile: o2, t: i2 || new Date(e2.lastModified), bytes: e2.stream(), mode: r2 };
  if (e2 instanceof Response) return { isFile: o2, t: i2 || new Date(e2.headers.get("Last-Modified") || Date.now()), bytes: e2.body, mode: r2 };
  if (void 0 === i2) i2 = /* @__PURE__ */ new Date();
  else if (isNaN(i2)) throw new Error("Invalid modification date.");
  if (!o2) return { isFile: o2, t: i2, mode: r2 };
  if ("string" == typeof e2) return { isFile: o2, t: i2, bytes: t(e2), mode: r2 };
  if (e2 instanceof Blob) return { isFile: o2, t: i2, bytes: e2.stream(), mode: r2 };
  if (e2 instanceof Uint8Array || e2 instanceof ReadableStream) return { isFile: o2, t: i2, bytes: e2, mode: r2 };
  if (e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2)) return { isFile: o2, t: i2, bytes: n(e2), mode: r2 };
  if (Symbol.asyncIterator in e2) return { isFile: o2, t: i2, bytes: f(e2[Symbol.asyncIterator]()), mode: r2 };
  throw new TypeError("Unsupported input format.");
}
function f(e2, n2 = e2) {
  return new ReadableStream({ async pull(n3) {
    let t2 = 0;
    for (; n3.desiredSize > t2; ) {
      const i2 = await e2.next();
      if (!i2.value) {
        n3.close();
        break;
      }
      {
        const e3 = a(i2.value);
        n3.enqueue(e3), t2 += e3.byteLength;
      }
    }
  }, cancel(e3) {
    n2.throw?.(e3);
  } });
}
function a(e2) {
  return "string" == typeof e2 ? t(e2) : e2 instanceof Uint8Array ? e2 : n(e2);
}
function s(e2, i2, r2) {
  let [o2, f2] = function(e3) {
    return e3 ? e3 instanceof Uint8Array ? [e3, 1] : ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer ? [n(e3), 1] : [t(e3), 0] : [void 0, 0];
  }(i2);
  if (e2 instanceof File) return { i: d(o2 || t(e2.name)), o: BigInt(e2.size), u: f2 };
  if (e2 instanceof Response) {
    const n2 = e2.headers.get("content-disposition"), i3 = n2 && n2.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i), a2 = i3 && i3[1] || e2.url && new URL(e2.url).pathname.split("/").findLast(Boolean), s2 = a2 && decodeURIComponent(a2), u2 = r2 || +e2.headers.get("content-length");
    return { i: d(o2 || t(s2)), o: BigInt(u2), u: f2 };
  }
  return o2 = d(o2, void 0 !== e2 || void 0 !== r2), "string" == typeof e2 ? { i: o2, o: BigInt(t(e2).length), u: f2 } : e2 instanceof Blob ? { i: o2, o: BigInt(e2.size), u: f2 } : e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2) ? { i: o2, o: BigInt(e2.byteLength), u: f2 } : { i: o2, o: u(e2, r2), u: f2 };
}
function u(e2, n2) {
  return n2 > -1 ? BigInt(n2) : e2 ? void 0 : 0n;
}
function d(e2, n2 = 1) {
  if (!e2 || e2.every((c) => 47 === c)) throw new Error("The file must have a name.");
  if (n2) for (; 47 === e2[e2.length - 1]; ) e2 = e2.subarray(0, -1);
  else 47 !== e2[e2.length - 1] && (e2 = new Uint8Array([...e2, 47]));
  return e2;
}
var l = new Uint32Array(256);
for (let e2 = 0; e2 < 256; ++e2) {
  let n2 = e2;
  for (let e3 = 0; e3 < 8; ++e3) n2 = n2 >>> 1 ^ (1 & n2 && 3988292384);
  l[e2] = n2;
}
function y(e2, n2 = 0) {
  n2 = ~n2;
  for (var t2 = 0, i2 = e2.length; t2 < i2; t2++) n2 = n2 >>> 8 ^ l[255 & n2 ^ e2[t2]];
  return ~n2 >>> 0;
}
function w(e2, n2, t2 = 0) {
  const i2 = e2.getSeconds() >> 1 | e2.getMinutes() << 5 | e2.getHours() << 11, r2 = e2.getDate() | e2.getMonth() + 1 << 5 | e2.getFullYear() - 1980 << 9;
  n2.setUint16(t2, i2, 1), n2.setUint16(t2 + 2, r2, 1);
}
function B({ i: e2, u: n2 }, t2) {
  return 8 * (!n2 || (t2 ?? function(e3) {
    try {
      b.decode(e3);
    } catch {
      return 0;
    }
    return 1;
  }(e2)));
}
var b = new TextDecoder("utf8", { fatal: 1 });
function p(t2, i2 = 0) {
  const r2 = e(30);
  return r2.setUint32(0, 1347093252), r2.setUint32(4, 754976768 | i2), w(t2.t, r2, 10), r2.setUint16(26, t2.i.length, 1), n(r2);
}
async function* g(e2) {
  let { bytes: n2 } = e2;
  if ("then" in n2 && (n2 = await n2), n2 instanceof Uint8Array) yield n2, e2.l = y(n2, 0), e2.o = BigInt(n2.length);
  else {
    e2.o = 0n;
    const t2 = n2.getReader();
    for (; ; ) {
      const { value: n3, done: i2 } = await t2.read();
      if (i2) break;
      e2.l = y(n3, e2.l), e2.o += BigInt(n3.length), yield n3;
    }
  }
}
function I(t2, r2) {
  const o2 = e(16 + (r2 ? 8 : 0));
  return o2.setUint32(0, 1347094280), o2.setUint32(4, t2.isFile ? t2.l : 0, 1), r2 ? (o2.setBigUint64(8, t2.o, 1), o2.setBigUint64(16, t2.o, 1)) : (o2.setUint32(8, i(t2.o), 1), o2.setUint32(12, i(t2.o), 1)), n(o2);
}
function v(t2, r2, o2 = 0, f2 = 0) {
  const a2 = e(46);
  return a2.setUint32(0, 1347092738), a2.setUint32(4, 755182848), a2.setUint16(8, 2048 | o2), w(t2.t, a2, 12), a2.setUint32(16, t2.isFile ? t2.l : 0, 1), a2.setUint32(20, i(t2.o), 1), a2.setUint32(24, i(t2.o), 1), a2.setUint16(28, t2.i.length, 1), a2.setUint16(30, f2, 1), a2.setUint16(40, t2.mode | (t2.isFile ? 32768 : 16384), 1), a2.setUint32(42, i(r2), 1), n(a2);
}
function h(t2, i2, r2) {
  const o2 = e(r2);
  return o2.setUint16(0, 1, 1), o2.setUint16(2, r2 - 4, 1), 16 & r2 && (o2.setBigUint64(4, t2.o, 1), o2.setBigUint64(12, t2.o, 1)), o2.setBigUint64(r2 - 8, i2, 1), n(o2);
}
function D(e2) {
  return e2 instanceof File || e2 instanceof Response ? [[e2], [e2]] : [[e2.input, e2.name, e2.size], [e2.input, e2.lastModified, e2.mode]];
}
var S = (e2) => function(e3) {
  let n2 = BigInt(22), t2 = 0n, i2 = 0;
  for (const r2 of e3) {
    if (!r2.i) throw new Error("Every file must have a non-empty name.");
    if (void 0 === r2.o) throw new Error(`Missing size for file "${new TextDecoder().decode(r2.i)}".`);
    const e4 = r2.o >= 0xffffffffn, o2 = t2 >= 0xffffffffn;
    t2 += BigInt(46 + r2.i.length + (e4 && 8)) + r2.o, n2 += BigInt(r2.i.length + 46 + (12 * o2 | 28 * e4)), i2 || (i2 = e4);
  }
  return (i2 || t2 >= 0xffffffffn) && (n2 += BigInt(76)), n2 + t2;
}(function* (e3) {
  for (const n2 of e3) yield s(...D(n2)[0]);
}(e2));
function A(e2, n2 = {}) {
  const t2 = { "Content-Type": "application/zip", "Content-Disposition": "attachment" };
  return ("bigint" == typeof n2.length || Number.isInteger(n2.length)) && n2.length > 0 && (t2["Content-Length"] = String(n2.length)), n2.metadata && (t2["Content-Length"] = String(S(n2.metadata))), new Response(N(e2, n2), { headers: t2 });
}
function N(t2, a2 = {}) {
  const u2 = function(e2) {
    const n2 = e2[Symbol.iterator in e2 ? Symbol.iterator : Symbol.asyncIterator]();
    return { async next() {
      const e3 = await n2.next();
      if (e3.done) return e3;
      const [t3, i2] = D(e3.value);
      return { done: 0, value: Object.assign(o(...i2), s(...t3)) };
    }, throw: n2.throw?.bind(n2), [Symbol.asyncIterator]() {
      return this;
    } };
  }(t2);
  return f(async function* (t3, o2) {
    const f2 = [];
    let a3 = 0n, s2 = 0n, u3 = 0;
    for await (const e2 of t3) {
      const n2 = B(e2, o2.buffersAreUTF8);
      yield p(e2, n2), yield new Uint8Array(e2.i), e2.isFile && (yield* g(e2));
      const t4 = e2.o >= 0xffffffffn, i2 = 12 * (a3 >= 0xffffffffn) | 28 * t4;
      yield I(e2, t4), f2.push(v(e2, a3, n2, i2)), f2.push(e2.i), i2 && f2.push(h(e2, a3, i2)), t4 && (a3 += 8n), s2++, a3 += BigInt(46 + e2.i.length) + e2.o, u3 || (u3 = t4);
    }
    let d2 = 0n;
    for (const e2 of f2) yield e2, d2 += BigInt(e2.length);
    if (u3 || a3 >= 0xffffffffn) {
      const t4 = e(76);
      t4.setUint32(0, 1347094022), t4.setBigUint64(4, BigInt(44), 1), t4.setUint32(12, 755182848), t4.setBigUint64(24, s2, 1), t4.setBigUint64(32, s2, 1), t4.setBigUint64(40, d2, 1), t4.setBigUint64(48, a3, 1), t4.setUint32(56, 1347094023), t4.setBigUint64(64, a3 + d2, 1), t4.setUint32(72, 1, 1), yield n(t4);
    }
    const l2 = e(22);
    l2.setUint32(0, 1347093766), l2.setUint16(8, r(s2), 1), l2.setUint16(10, r(s2), 1), l2.setUint32(12, i(d2), 1), l2.setUint32(16, i(a3), 1), yield n(l2);
  }(u2, a2), u2);
}
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = {
  __name: "MDExample",
  props: {
    example_name: String,
    content_obj: Object,
    expanded: Boolean
  },
  setup(__props) {
    const props = __props;
    const tab = ref("");
    const files = ref([]);
    watchEffect(() => {
      tab.value = Object.keys(files.value)[0];
    });
    watchEffect(() => {
      const checkKey = (key) => key.includes("ino") || key.includes("main");
      const entries = Object.entries(props.content_obj.files);
      const firstEntries = entries.filter(([key]) => checkKey(key));
      const otherEntries = entries.filter(([key]) => !checkKey(key));
      otherEntries.sort(([a2], [b2]) => a2.localeCompare(b2));
      const sortedEntries = [...firstEntries, ...otherEntries];
      files.value = Object.fromEntries(sortedEntries);
    });
    async function handleDownload() {
      const zip_files = [];
      for (const [file_name, file_obj] of Object.entries(files.value)) {
        console.log("file_name", file_name);
        console.log("file_obj", file_obj);
        const file = {
          name: `${props.example_name}/${file_name}`,
          lastModified: /* @__PURE__ */ new Date(),
          input: file_obj.content
        };
        zip_files.push(file);
      }
      const blob = await A(zip_files).blob();
      const status = exportFile(`${props.example_name}.zip`, blob);
      console.log("exportFile status:", status);
    }
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createBlock(QCard, { class: "md-example" }, {
        default: withCtx(() => [
          createVNode(QExpansionItem, {
            "expand-separator": "",
            "switch-toggle-side": "",
            label: __props.example_name,
            modelValue: __props.expanded
          }, {
            default: withCtx(() => [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QToolbar, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(QTabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
                        dense: "",
                        align: "left",
                        "narrow-indicator": "",
                        shrink: "",
                        stretch: ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(files.value, (file_obj, file_name) => {
                            return openBlock(), createBlock(QTab, {
                              key: file_name,
                              name: file_name,
                              label: file_name
                            }, null, 8, ["name", "label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(QSpace),
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        icon: "archive",
                        "aria-label": "download Beispiel",
                        onClick: handleDownload
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QTabPanels, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tab.value = $event),
                    animated: "",
                    "transition-prev": "fade",
                    "transition-next": "fade"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(files.value, (file_obj, file_name) => {
                        return openBlock(), createBlock(QTabPanel, {
                          key: file_name,
                          name: file_name,
                          label: file_name,
                          class: "q-pa-none"
                        }, {
                          default: withCtx(() => [
                            file_obj.content != "image" ? (openBlock(), createBlock(_component_MDCode, {
                              key: 0,
                              content: file_obj.content,
                              codeLanguage: file_obj.file_ext.replace(".", ""),
                              codeWebPath: file_obj.file_url
                            }, null, 8, ["content", "codeLanguage", "codeWebPath"])) : file_obj.content == "image" ? (openBlock(), createElementBlock("img", {
                              key: 1,
                              src: file_obj.file_path_web
                            }, null, 8, _hoisted_1$2)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["name", "label"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["label", "modelValue"])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$1 = {
  class: "jsondata",
  ref: "content-json-ref"
};
const _sfc_main$1 = {
  __name: "MDExamples",
  props: {
    basePath: String
  },
  setup(__props) {
    const contentJSONRef = useTemplateRef("content-json-ref");
    const content = shallowRef({});
    function fixWhitespace(obj) {
      for (const [item_name, item] of Object.entries(obj)) {
        if (item instanceof Object) {
          fixWhitespace(item);
        } else if (item_name == "content") {
          obj.content = obj.content.replaceAll(" ", " ");
        }
      }
    }
    onMounted(() => {
      try {
        const raw = contentJSONRef.value.textContent;
        const parsed = JSON.parse(raw);
        fixWhitespace(parsed);
        content.value = parsed;
      } catch (error) {
        console.log(error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "contentJSON", {}, void 0, true)
        ], 512),
        (openBlock(true), createElementBlock(Fragment, null, renderList(content.value, (content_obj, example_name) => {
          return openBlock(), createBlock(_sfc_main$2, {
            key: example_name,
            example_name,
            content_obj
          }, null, 8, ["example_name", "content_obj"]);
        }), 128))
      ]);
    };
  }
};
const MDExamples = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82bca1eb"]]);
const useConsentStore = defineStore("consent", {
  state: () => ({
    videoLoaded: {},
    videoService: {}
  }),
  getters: {},
  actions: {}
});
const _hoisted_1 = { class: "video-embed" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  class: "question"
};
const _sfc_main = {
  __name: "YTEmbed",
  props: {
    service: String,
    videoid: String,
    src: String,
    options: String
  },
  setup(__props) {
    const consent = useConsentStore();
    const allowServiceAll = ref(false);
    const props = __props;
    function handleAllow() {
      consent.videoLoaded[props.videoid] = true;
      console.log(`allow '${props.service}' globally? `, allowServiceAll.value);
      consent.videoService[props.service] = allowServiceAll.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(consent).videoService[__props.service] || unref(consent).videoLoaded[__props.videoid] ? (openBlock(), createElementBlock("iframe", {
          key: 0,
          type: "text/html",
          width: "560",
          height: "315",
          title: "YouTube video player",
          src: __props.src,
          frameborder: "0",
          allow: "web-share",
          referrerpolicy: "strict-origin-when-cross-origin",
          allowfullscreen: ""
        }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("p", null, [
            createTextVNode(" Diesen " + toDisplayString(__props.service) + " content musst du erst erlauben. ", 1),
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createTextVNode(" Durch das Erlauben gelten die Bedienungen des " + toDisplayString(__props.service) + ". ", 1),
            _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
            _cache[3] || (_cache[3] = createTextVNode(" Dadurch erlangt dieser Service zugriff auf dein Browser-Verhalten / Nutzer-Daten. "))
          ]),
          createVNode(QCheckbox, {
            modelValue: allowServiceAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowServiceAll.value = $event),
            label: `${__props.service} für diese Session erlauben?`,
            "checked-icon": "task_alt",
            "unchecked-icon": "highlight_off"
          }, null, 8, ["modelValue", "label"]),
          _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
          createVNode(QBtn, {
            label: `Lade ${__props.service} content`,
            onClick: handleAllow
          }, null, 8, ["label"])
        ]))
      ]);
    };
  }
};
const YTEmbed = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b13e3db"]]);
const registerGlobalComponents = defineBoot(async ({ app }) => {
  app.component("MDCode", MDCode);
  app.component("MDAbbr", MDAbbr);
  app.component("MDExamples", MDExamples);
  app.component("YTEmbed", YTEmbed);
});
const registerGlobalComponents$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: registerGlobalComponents
}, Symbol.toStringTag, { value: "Module" }));
export {
  registerGlobalComponents$1 as a,
  commonjsGlobal as c,
  getDefaultExportFromCjs as g,
  requireCore as r
};
