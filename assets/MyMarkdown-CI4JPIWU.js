import { a as __toESM, i as __toCommonJS, n as __esmMin, r as __exportAll, t as __commonJSMin } from "./chunk-C0u3WHrm.js";
import { H as watchEffect, N as openBlock, Q as ref, R as resolveDynamicComponent, d as createBlock, f as createCommentVNode, p as createElementBlock } from "./vue.esm-bundler-DkjeOeAQ.js";
import { t as es_default } from "./es-rhvVhq1b.js";
//#region node_modules/highlight.js/es/languages/cpp.js
/** @type LanguageFn */
function cpp(hljs) {
	const regex = hljs.regex;
	const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
	const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
	const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
	const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional("<[^<>]+>") + ")";
	const CPP_PRIMITIVE_TYPES = {
		className: "type",
		begin: "\\b[a-z\\d_]*_t\\b"
	};
	const STRINGS = {
		className: "string",
		variants: [
			{
				begin: "(u8?|U|L)?\"",
				end: "\"",
				illegal: "\\n",
				contains: [hljs.BACKSLASH_ESCAPE]
			},
			{
				begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
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
		variants: [{ begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)" }, { begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)" }],
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
	const CPP_KEYWORDS = {
		type: RESERVED_TYPES,
		keyword: RESERVED_KEYWORDS,
		literal: [
			"NULL",
			"false",
			"nullopt",
			"nullptr",
			"true"
		],
		built_in: ["_Pragma"],
		_type_hints: TYPE_HINTS
	};
	const FUNCTION_DISPATCH = {
		className: "function.dispatch",
		relevance: 0,
		keywords: { _hint: FUNCTION_HINTS },
		begin: regex.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, hljs.IDENT_RE, regex.lookahead(/(<[^<>]+>|)\s*\(/))
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
		contains: EXPRESSION_CONTAINS.concat([{
			begin: /\(/,
			end: /\)/,
			keywords: CPP_KEYWORDS,
			contains: EXPRESSION_CONTAINS.concat(["self"]),
			relevance: 0
		}]),
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
			{
				begin: /::/,
				relevance: 0
			},
			{
				begin: /:/,
				endsWithParent: true,
				contains: [STRINGS, NUMBERS]
			},
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
		contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
			PREPROCESSOR,
			{
				begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
				end: ">",
				keywords: CPP_KEYWORDS,
				contains: ["self", CPP_PRIMITIVE_TYPES]
			},
			{
				begin: hljs.IDENT_RE + "::",
				keywords: CPP_KEYWORDS
			},
			{
				match: [
					/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
					/\s+/,
					/\w+/
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			}
		])
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/css.js
var MODES = (hljs) => {
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
			contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
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
var HTML_TAGS = [
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
var SVG_TAGS = [
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
var TAGS = [...HTML_TAGS, ...SVG_TAGS];
var MEDIA_FEATURES = [
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
	"min-width",
	"max-width",
	"min-height",
	"max-height"
].sort().reverse();
var PSEUDO_CLASSES = [
	"active",
	"any-link",
	"blank",
	"checked",
	"current",
	"default",
	"defined",
	"dir",
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
	"host",
	"host-context",
	"hover",
	"indeterminate",
	"in-range",
	"invalid",
	"is",
	"lang",
	"last-child",
	"last-of-type",
	"left",
	"link",
	"local-link",
	"not",
	"nth-child",
	"nth-col",
	"nth-last-child",
	"nth-last-col",
	"nth-last-of-type",
	"nth-of-type",
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
].sort().reverse();
var PSEUDO_ELEMENTS = [
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
var ATTRIBUTES = [
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
/** @type LanguageFn */
function css(hljs) {
	const regex = hljs.regex;
	const modes = MODES(hljs);
	const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
	const AT_MODIFIERS = "and or not only";
	const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
	const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
	const STRINGS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE];
	return {
		name: "CSS",
		case_insensitive: true,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: "from to" },
		classNameAliases: { keyframePosition: "selector-tag" },
		contains: [
			modes.BLOCK_COMMENT,
			VENDOR_PREFIX,
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
				variants: [{ begin: ":(" + PSEUDO_CLASSES.join("|") + ")" }, { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }]
			},
			modes.CSS_VARIABLE,
			{
				className: "attribute",
				begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
			},
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					modes.BLOCK_COMMENT,
					modes.HEXCOLOR,
					modes.IMPORTANT,
					modes.CSS_NUMBER_MODE,
					...STRINGS,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: "url data-uri" },
						contains: [...STRINGS, {
							className: "string",
							begin: /[^)]/,
							endsWithParent: true,
							excludeEnd: true
						}]
					},
					modes.FUNCTION_DISPATCH
				]
			},
			{
				begin: regex.lookahead(/@/),
				end: "[{;]",
				relevance: 0,
				illegal: /:/,
				contains: [{
					className: "keyword",
					begin: AT_PROPERTY_RE
				}, {
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
				}]
			},
			{
				className: "selector-tag",
				begin: "\\b(" + TAGS.join("|") + ")\\b"
			}
		]
	};
}
//#endregion
//#region node_modules/mdurl/lib/decode.mjs
var decodeCache = {};
function getDecodeCache(exclude) {
	let cache = decodeCache[exclude];
	if (cache) return cache;
	cache = decodeCache[exclude] = [];
	for (let i = 0; i < 128; i++) {
		const ch = String.fromCharCode(i);
		cache.push(ch);
	}
	for (let i = 0; i < exclude.length; i++) {
		const ch = exclude.charCodeAt(i);
		cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
	}
	return cache;
}
function decode$1(string, exclude) {
	if (typeof exclude !== "string") exclude = decode$1.defaultChars;
	const cache = getDecodeCache(exclude);
	return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
		let result = "";
		for (let i = 0, l = seq.length; i < l; i += 3) {
			const b1 = parseInt(seq.slice(i + 1, i + 3), 16);
			if (b1 < 128) {
				result += cache[b1];
				continue;
			}
			if ((b1 & 224) === 192 && i + 3 < l) {
				const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
				if ((b2 & 192) === 128) {
					const chr = b1 << 6 & 1984 | b2 & 63;
					if (chr < 128) result += "��";
					else result += String.fromCharCode(chr);
					i += 3;
					continue;
				}
			}
			if ((b1 & 240) === 224 && i + 6 < l) {
				const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
				const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
				if ((b2 & 192) === 128 && (b3 & 192) === 128) {
					const chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
					if (chr < 2048 || chr >= 55296 && chr <= 57343) result += "���";
					else result += String.fromCharCode(chr);
					i += 6;
					continue;
				}
			}
			if ((b1 & 248) === 240 && i + 9 < l) {
				const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
				const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
				const b4 = parseInt(seq.slice(i + 10, i + 12), 16);
				if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
					let chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
					if (chr < 65536 || chr > 1114111) result += "����";
					else {
						chr -= 65536;
						result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
					}
					i += 9;
					continue;
				}
			}
			result += "�";
		}
		return result;
	});
}
decode$1.defaultChars = ";/?:@&=+$,#";
decode$1.componentChars = "";
//#endregion
//#region node_modules/mdurl/lib/encode.mjs
var encodeCache = {};
function getEncodeCache(exclude) {
	let cache = encodeCache[exclude];
	if (cache) return cache;
	cache = encodeCache[exclude] = [];
	for (let i = 0; i < 128; i++) {
		const ch = String.fromCharCode(i);
		if (/^[0-9a-z]$/i.test(ch)) cache.push(ch);
		else cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
	}
	for (let i = 0; i < exclude.length; i++) cache[exclude.charCodeAt(i)] = exclude[i];
	return cache;
}
function encode$1(string, exclude, keepEscaped) {
	if (typeof exclude !== "string") {
		keepEscaped = exclude;
		exclude = encode$1.defaultChars;
	}
	if (typeof keepEscaped === "undefined") keepEscaped = true;
	const cache = getEncodeCache(exclude);
	let result = "";
	for (let i = 0, l = string.length; i < l; i++) {
		const code = string.charCodeAt(i);
		if (keepEscaped && code === 37 && i + 2 < l) {
			if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
				result += string.slice(i, i + 3);
				i += 2;
				continue;
			}
		}
		if (code < 128) {
			result += cache[code];
			continue;
		}
		if (code >= 55296 && code <= 57343) {
			if (code >= 55296 && code <= 56319 && i + 1 < l) {
				const nextCode = string.charCodeAt(i + 1);
				if (nextCode >= 56320 && nextCode <= 57343) {
					result += encodeURIComponent(string[i] + string[i + 1]);
					i++;
					continue;
				}
			}
			result += "%EF%BF%BD";
			continue;
		}
		result += encodeURIComponent(string[i]);
	}
	return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
//#endregion
//#region node_modules/mdurl/lib/format.mjs
function format(url) {
	let result = "";
	result += url.protocol || "";
	result += url.slashes ? "//" : "";
	result += url.auth ? url.auth + "@" : "";
	if (url.hostname && url.hostname.indexOf(":") !== -1) result += "[" + url.hostname + "]";
	else result += url.hostname || "";
	result += url.port ? ":" + url.port : "";
	result += url.pathname || "";
	result += url.search || "";
	result += url.hash || "";
	return result;
}
//#endregion
//#region node_modules/mdurl/lib/parse.mjs
function Url() {
	this.protocol = null;
	this.slashes = null;
	this.auth = null;
	this.port = null;
	this.hostname = null;
	this.hash = null;
	this.search = null;
	this.pathname = null;
}
var protocolPattern = /^([a-z0-9.+-]+:)/i;
var portPattern = /:[0-9]*$/;
var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var unwise = [
	"{",
	"}",
	"|",
	"\\",
	"^",
	"`"
].concat([
	"<",
	">",
	"\"",
	"`",
	" ",
	"\r",
	"\n",
	"	"
]);
var autoEscape = ["'"].concat(unwise);
var nonHostChars = [
	"%",
	"/",
	"?",
	";",
	"#"
].concat(autoEscape);
var hostEndingChars = [
	"/",
	"?",
	"#"
];
var hostnameMaxLen = 255;
var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var hostlessProtocol = {
	javascript: true,
	"javascript:": true
};
var slashedProtocol = {
	http: true,
	https: true,
	ftp: true,
	gopher: true,
	file: true,
	"http:": true,
	"https:": true,
	"ftp:": true,
	"gopher:": true,
	"file:": true
};
function urlParse(url, slashesDenoteHost) {
	if (url && url instanceof Url) return url;
	const u = new Url();
	u.parse(url, slashesDenoteHost);
	return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
	let lowerProto, hec, slashes;
	let rest = url;
	rest = rest.trim();
	if (!slashesDenoteHost && url.split("#").length === 1) {
		const simplePath = simplePathPattern.exec(rest);
		if (simplePath) {
			this.pathname = simplePath[1];
			if (simplePath[2]) this.search = simplePath[2];
			return this;
		}
	}
	let proto = protocolPattern.exec(rest);
	if (proto) {
		proto = proto[0];
		lowerProto = proto.toLowerCase();
		this.protocol = proto;
		rest = rest.substr(proto.length);
	}
	if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
		slashes = rest.substr(0, 2) === "//";
		if (slashes && !(proto && hostlessProtocol[proto])) {
			rest = rest.substr(2);
			this.slashes = true;
		}
	}
	if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
		let hostEnd = -1;
		for (let i = 0; i < hostEndingChars.length; i++) {
			hec = rest.indexOf(hostEndingChars[i]);
			if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
		}
		let auth, atSign;
		if (hostEnd === -1) atSign = rest.lastIndexOf("@");
		else atSign = rest.lastIndexOf("@", hostEnd);
		if (atSign !== -1) {
			auth = rest.slice(0, atSign);
			rest = rest.slice(atSign + 1);
			this.auth = auth;
		}
		hostEnd = -1;
		for (let i = 0; i < nonHostChars.length; i++) {
			hec = rest.indexOf(nonHostChars[i]);
			if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
		}
		if (hostEnd === -1) hostEnd = rest.length;
		if (rest[hostEnd - 1] === ":") hostEnd--;
		const host = rest.slice(0, hostEnd);
		rest = rest.slice(hostEnd);
		this.parseHost(host);
		this.hostname = this.hostname || "";
		const ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
		if (!ipv6Hostname) {
			const hostparts = this.hostname.split(/\./);
			for (let i = 0, l = hostparts.length; i < l; i++) {
				const part = hostparts[i];
				if (!part) continue;
				if (!part.match(hostnamePartPattern)) {
					let newpart = "";
					for (let j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x";
					else newpart += part[j];
					if (!newpart.match(hostnamePartPattern)) {
						const validParts = hostparts.slice(0, i);
						const notHost = hostparts.slice(i + 1);
						const bit = part.match(hostnamePartStart);
						if (bit) {
							validParts.push(bit[1]);
							notHost.unshift(bit[2]);
						}
						if (notHost.length) rest = notHost.join(".") + rest;
						this.hostname = validParts.join(".");
						break;
					}
				}
			}
		}
		if (this.hostname.length > hostnameMaxLen) this.hostname = "";
		if (ipv6Hostname) this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	}
	const hash = rest.indexOf("#");
	if (hash !== -1) {
		this.hash = rest.substr(hash);
		rest = rest.slice(0, hash);
	}
	const qm = rest.indexOf("?");
	if (qm !== -1) {
		this.search = rest.substr(qm);
		rest = rest.slice(0, qm);
	}
	if (rest) this.pathname = rest;
	if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "";
	return this;
};
Url.prototype.parseHost = function(host) {
	let port = portPattern.exec(host);
	if (port) {
		port = port[0];
		if (port !== ":") this.port = port.substr(1);
		host = host.substr(0, host.length - port.length);
	}
	if (host) this.hostname = host;
};
//#endregion
//#region node_modules/mdurl/index.mjs
var mdurl_exports = /* @__PURE__ */ __exportAll({
	decode: () => decode$1,
	encode: () => encode$1,
	format: () => format,
	parse: () => urlParse
});
//#endregion
//#region node_modules/uc.micro/properties/Any/regex.mjs
var regex_default$5 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
//#endregion
//#region node_modules/uc.micro/categories/Cc/regex.mjs
var regex_default$4 = /[\0-\x1F\x7F-\x9F]/;
//#endregion
//#region node_modules/uc.micro/categories/Cf/regex.mjs
var regex_default$3 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
//#endregion
//#region node_modules/uc.micro/categories/P/regex.mjs
var regex_default$2 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
//#endregion
//#region node_modules/uc.micro/categories/S/regex.mjs
var regex_default$1 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;
//#endregion
//#region node_modules/uc.micro/categories/Z/regex.mjs
var regex_default = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
//#endregion
//#region node_modules/uc.micro/index.mjs
var uc_micro_exports = /* @__PURE__ */ __exportAll({
	Any: () => regex_default$5,
	Cc: () => regex_default$4,
	Cf: () => regex_default$3,
	P: () => regex_default$2,
	S: () => regex_default$1,
	Z: () => regex_default
});
//#endregion
//#region node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default = new Uint16Array("ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((c) => c.charCodeAt(0)));
//#endregion
//#region node_modules/entities/lib/esm/generated/decode-data-xml.js
var decode_data_xml_default = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c) => c.charCodeAt(0)));
//#endregion
//#region node_modules/entities/lib/esm/decode_codepoint.js
var _a;
var decodeMap = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
/**
* Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
*/
var fromCodePoint$1 = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
	let output = "";
	if (codePoint > 65535) {
		codePoint -= 65536;
		output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
		codePoint = 56320 | codePoint & 1023;
	}
	output += String.fromCharCode(codePoint);
	return output;
};
/**
* Replace the given code point with a replacement character if it is a
* surrogate or is outside the valid range. Otherwise return the code
* point unchanged.
*/
function replaceCodePoint(codePoint) {
	var _a;
	if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return 65533;
	return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
//#endregion
//#region node_modules/entities/lib/esm/decode.js
var CharCodes;
(function(CharCodes) {
	CharCodes[CharCodes["NUM"] = 35] = "NUM";
	CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
	CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
	CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
	CharCodes[CharCodes["NINE"] = 57] = "NINE";
	CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
	CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
	CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
	CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
	CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
	CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
	CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags) {
	BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
	BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
	return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
	return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
	return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
* Checks if the given character is a valid end character for an entity in an attribute.
*
* Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
* See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
*/
function isEntityInAttributeInvalidEnd(code) {
	return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState) {
	EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
	EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
	EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
	EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
	EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode) {
	/** Entities in text nodes that can end with any character. */
	DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
	/** Only allow entities terminated with a semicolon. */
	DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
	/** Entities in attributes have limitations on ending characters. */
	DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
* Token decoder with support of writing partial entities.
*/
var EntityDecoder = class {
	constructor(decodeTree, emitCodePoint, errors) {
		this.decodeTree = decodeTree;
		this.emitCodePoint = emitCodePoint;
		this.errors = errors;
		/** The current state of the decoder. */
		this.state = EntityDecoderState.EntityStart;
		/** Characters that were consumed while parsing an entity. */
		this.consumed = 1;
		/**
		* The result of the entity.
		*
		* Either the result index of a numeric entity, or the codepoint of a
		* numeric entity.
		*/
		this.result = 0;
		/** The current index in the decode tree. */
		this.treeIndex = 0;
		/** The number of characters that were consumed in excess. */
		this.excess = 1;
		/** The mode in which the decoder is operating. */
		this.decodeMode = DecodingMode.Strict;
	}
	/** Resets the instance to make it reusable. */
	startEntity(decodeMode) {
		this.decodeMode = decodeMode;
		this.state = EntityDecoderState.EntityStart;
		this.result = 0;
		this.treeIndex = 0;
		this.excess = 1;
		this.consumed = 1;
	}
	/**
	* Write an entity to the decoder. This can be called multiple times with partial entities.
	* If the entity is incomplete, the decoder will return -1.
	*
	* Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
	* entity is incomplete, and resume when the next string is written.
	*
	* @param string The string containing the entity (or a continuation of the entity).
	* @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	write(str, offset) {
		switch (this.state) {
			case EntityDecoderState.EntityStart:
				if (str.charCodeAt(offset) === CharCodes.NUM) {
					this.state = EntityDecoderState.NumericStart;
					this.consumed += 1;
					return this.stateNumericStart(str, offset + 1);
				}
				this.state = EntityDecoderState.NamedEntity;
				return this.stateNamedEntity(str, offset);
			case EntityDecoderState.NumericStart: return this.stateNumericStart(str, offset);
			case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(str, offset);
			case EntityDecoderState.NumericHex: return this.stateNumericHex(str, offset);
			case EntityDecoderState.NamedEntity: return this.stateNamedEntity(str, offset);
		}
	}
	/**
	* Switches between the numeric decimal and hexadecimal states.
	*
	* Equivalent to the `Numeric character reference state` in the HTML spec.
	*
	* @param str The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericStart(str, offset) {
		if (offset >= str.length) return -1;
		if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
			this.state = EntityDecoderState.NumericHex;
			this.consumed += 1;
			return this.stateNumericHex(str, offset + 1);
		}
		this.state = EntityDecoderState.NumericDecimal;
		return this.stateNumericDecimal(str, offset);
	}
	addToNumericResult(str, start, end, base) {
		if (start !== end) {
			const digitCount = end - start;
			this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
			this.consumed += digitCount;
		}
	}
	/**
	* Parses a hexadecimal numeric entity.
	*
	* Equivalent to the `Hexademical character reference state` in the HTML spec.
	*
	* @param str The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericHex(str, offset) {
		const startIdx = offset;
		while (offset < str.length) {
			const char = str.charCodeAt(offset);
			if (isNumber(char) || isHexadecimalCharacter(char)) offset += 1;
			else {
				this.addToNumericResult(str, startIdx, offset, 16);
				return this.emitNumericEntity(char, 3);
			}
		}
		this.addToNumericResult(str, startIdx, offset, 16);
		return -1;
	}
	/**
	* Parses a decimal numeric entity.
	*
	* Equivalent to the `Decimal character reference state` in the HTML spec.
	*
	* @param str The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericDecimal(str, offset) {
		const startIdx = offset;
		while (offset < str.length) {
			const char = str.charCodeAt(offset);
			if (isNumber(char)) offset += 1;
			else {
				this.addToNumericResult(str, startIdx, offset, 10);
				return this.emitNumericEntity(char, 2);
			}
		}
		this.addToNumericResult(str, startIdx, offset, 10);
		return -1;
	}
	/**
	* Validate and emit a numeric entity.
	*
	* Implements the logic from the `Hexademical character reference start
	* state` and `Numeric character reference end state` in the HTML spec.
	*
	* @param lastCp The last code point of the entity. Used to see if the
	*               entity was terminated with a semicolon.
	* @param expectedLength The minimum number of characters that should be
	*                       consumed. Used to validate that at least one digit
	*                       was consumed.
	* @returns The number of characters that were consumed.
	*/
	emitNumericEntity(lastCp, expectedLength) {
		var _a;
		if (this.consumed <= expectedLength) {
			(_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
			return 0;
		}
		if (lastCp === CharCodes.SEMI) this.consumed += 1;
		else if (this.decodeMode === DecodingMode.Strict) return 0;
		this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
		if (this.errors) {
			if (lastCp !== CharCodes.SEMI) this.errors.missingSemicolonAfterCharacterReference();
			this.errors.validateNumericCharacterReference(this.result);
		}
		return this.consumed;
	}
	/**
	* Parses a named entity.
	*
	* Equivalent to the `Named character reference state` in the HTML spec.
	*
	* @param str The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNamedEntity(str, offset) {
		const { decodeTree } = this;
		let current = decodeTree[this.treeIndex];
		let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		for (; offset < str.length; offset++, this.excess++) {
			const char = str.charCodeAt(offset);
			this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
			if (this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
			current = decodeTree[this.treeIndex];
			valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
			if (valueLength !== 0) {
				if (char === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
				if (this.decodeMode !== DecodingMode.Strict) {
					this.result = this.treeIndex;
					this.consumed += this.excess;
					this.excess = 0;
				}
			}
		}
		return -1;
	}
	/**
	* Emit a named entity that was not terminated with a semicolon.
	*
	* @returns The number of characters consumed.
	*/
	emitNotTerminatedNamedEntity() {
		var _a;
		const { result, decodeTree } = this;
		const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
		this.emitNamedEntityData(result, valueLength, this.consumed);
		(_a = this.errors) === null || _a === void 0 || _a.missingSemicolonAfterCharacterReference();
		return this.consumed;
	}
	/**
	* Emit a named entity.
	*
	* @param result The index of the entity in the decode tree.
	* @param valueLength The number of bytes in the entity.
	* @param consumed The number of characters consumed.
	*
	* @returns The number of characters consumed.
	*/
	emitNamedEntityData(result, valueLength, consumed) {
		const { decodeTree } = this;
		this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
		if (valueLength === 3) this.emitCodePoint(decodeTree[result + 2], consumed);
		return consumed;
	}
	/**
	* Signal to the parser that the end of the input was reached.
	*
	* Remaining data will be emitted and relevant errors will be produced.
	*
	* @returns The number of characters consumed.
	*/
	end() {
		var _a;
		switch (this.state) {
			case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
			case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
			case EntityDecoderState.NumericStart:
				(_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
				return 0;
			case EntityDecoderState.EntityStart: return 0;
		}
	}
};
/**
* Creates a function that decodes entities in a string.
*
* @param decodeTree The decode tree.
* @returns A function that decodes entities in a string.
*/
function getDecoder(decodeTree) {
	let ret = "";
	const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint$1(str));
	return function decodeWithTrie(str, decodeMode) {
		let lastIndex = 0;
		let offset = 0;
		while ((offset = str.indexOf("&", offset)) >= 0) {
			ret += str.slice(lastIndex, offset);
			decoder.startEntity(decodeMode);
			const len = decoder.write(str, offset + 1);
			if (len < 0) {
				lastIndex = offset + decoder.end();
				break;
			}
			lastIndex = offset + len;
			offset = len === 0 ? lastIndex + 1 : lastIndex;
		}
		const result = ret + str.slice(lastIndex);
		ret = "";
		return result;
	};
}
/**
* Determines the branch of the current node that is taken given the current
* character. This function is used to traverse the trie.
*
* @param decodeTree The trie.
* @param current The current node.
* @param nodeIdx The index right after the current node and its value.
* @param char The current character.
* @returns The index of the next node, or -1 if no branch is taken.
*/
function determineBranch(decodeTree, current, nodeIdx, char) {
	const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
	if (jumpOffset) {
		const value = char - jumpOffset;
		return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
	}
	let lo = nodeIdx;
	let hi = lo + branchCount - 1;
	while (lo <= hi) {
		const mid = lo + hi >>> 1;
		const midVal = decodeTree[mid];
		if (midVal < char) lo = mid + 1;
		else if (midVal > char) hi = mid - 1;
		else return decodeTree[mid + branchCount];
	}
	return -1;
}
var htmlDecoder = getDecoder(decode_data_html_default);
var xmlDecoder = getDecoder(decode_data_xml_default);
/**
* Decodes an HTML string.
*
* @param str The string to decode.
* @param mode The decoding mode.
* @returns The decoded string.
*/
function decodeHTML(str, mode = DecodingMode.Legacy) {
	return htmlDecoder(str, mode);
}
//#endregion
//#region node_modules/markdown-it/lib/common/utils.mjs
var utils_exports = /* @__PURE__ */ __exportAll({
	arrayReplaceAt: () => arrayReplaceAt,
	assign: () => assign$1,
	escapeHtml: () => escapeHtml,
	escapeRE: () => escapeRE$1,
	fromCodePoint: () => fromCodePoint,
	has: () => has,
	isMdAsciiPunct: () => isMdAsciiPunct,
	isPunctChar: () => isPunctChar,
	isSpace: () => isSpace,
	isString: () => isString$1,
	isValidEntityCode: () => isValidEntityCode,
	isWhiteSpace: () => isWhiteSpace,
	lib: () => lib,
	normalizeReference: () => normalizeReference,
	unescapeAll: () => unescapeAll,
	unescapeMd: () => unescapeMd
});
function _class$1(obj) {
	return Object.prototype.toString.call(obj);
}
function isString$1(obj) {
	return _class$1(obj) === "[object String]";
}
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function has(object, key) {
	return _hasOwnProperty.call(object, key);
}
function assign$1(obj) {
	Array.prototype.slice.call(arguments, 1).forEach(function(source) {
		if (!source) return;
		if (typeof source !== "object") throw new TypeError(source + "must be object");
		Object.keys(source).forEach(function(key) {
			obj[key] = source[key];
		});
	});
	return obj;
}
function arrayReplaceAt(src, pos, newElements) {
	return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}
function isValidEntityCode(c) {
	if (c >= 55296 && c <= 57343) return false;
	if (c >= 64976 && c <= 65007) return false;
	if ((c & 65535) === 65535 || (c & 65535) === 65534) return false;
	if (c >= 0 && c <= 8) return false;
	if (c === 11) return false;
	if (c >= 14 && c <= 31) return false;
	if (c >= 127 && c <= 159) return false;
	if (c > 1114111) return false;
	return true;
}
function fromCodePoint(c) {
	if (c > 65535) {
		c -= 65536;
		const surrogate1 = 55296 + (c >> 10);
		const surrogate2 = 56320 + (c & 1023);
		return String.fromCharCode(surrogate1, surrogate2);
	}
	return String.fromCharCode(c);
}
var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi");
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function replaceEntityPattern(match, name) {
	if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
		const code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
		if (isValidEntityCode(code)) return fromCodePoint(code);
		return match;
	}
	const decoded = decodeHTML(match);
	if (decoded !== match) return decoded;
	return match;
}
function unescapeMd(str) {
	if (str.indexOf("\\") < 0) return str;
	return str.replace(UNESCAPE_MD_RE, "$1");
}
function unescapeAll(str) {
	if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) return str;
	return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
		if (escaped) return escaped;
		return replaceEntityPattern(match, entity);
	});
}
var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;"
};
function replaceUnsafeChar(ch) {
	return HTML_REPLACEMENTS[ch];
}
function escapeHtml(str) {
	if (HTML_ESCAPE_TEST_RE.test(str)) return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	return str;
}
var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
function escapeRE$1(str) {
	return str.replace(REGEXP_ESCAPE_RE, "\\$&");
}
function isSpace(code) {
	switch (code) {
		case 9:
		case 32: return true;
	}
	return false;
}
function isWhiteSpace(code) {
	if (code >= 8192 && code <= 8202) return true;
	switch (code) {
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 32:
		case 160:
		case 5760:
		case 8239:
		case 8287:
		case 12288: return true;
	}
	return false;
}
function isPunctChar(ch) {
	return regex_default$2.test(ch) || regex_default$1.test(ch);
}
function isMdAsciiPunct(ch) {
	switch (ch) {
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 58:
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123:
		case 124:
		case 125:
		case 126: return true;
		default: return false;
	}
}
function normalizeReference(str) {
	str = str.trim().replace(/\s+/g, " ");
	if ("ẞ".toLowerCase() === "Ṿ") str = str.replace(/ẞ/g, "ß");
	return str.toLowerCase().toUpperCase();
}
var lib = {
	mdurl: mdurl_exports,
	ucmicro: uc_micro_exports
};
//#endregion
//#region node_modules/markdown-it/lib/helpers/parse_link_label.mjs
function parseLinkLabel(state, start, disableNested) {
	let level, found, marker, prevPos;
	const max = state.posMax;
	const oldPos = state.pos;
	state.pos = start + 1;
	level = 1;
	while (state.pos < max) {
		marker = state.src.charCodeAt(state.pos);
		if (marker === 93) {
			level--;
			if (level === 0) {
				found = true;
				break;
			}
		}
		prevPos = state.pos;
		state.md.inline.skipToken(state);
		if (marker === 91) {
			if (prevPos === state.pos - 1) level++;
			else if (disableNested) {
				state.pos = oldPos;
				return -1;
			}
		}
	}
	let labelEnd = -1;
	if (found) labelEnd = state.pos;
	state.pos = oldPos;
	return labelEnd;
}
//#endregion
//#region node_modules/markdown-it/lib/helpers/parse_link_destination.mjs
function parseLinkDestination(str, start, max) {
	let code;
	let pos = start;
	const result = {
		ok: false,
		pos: 0,
		str: ""
	};
	if (str.charCodeAt(pos) === 60) {
		pos++;
		while (pos < max) {
			code = str.charCodeAt(pos);
			if (code === 10) return result;
			if (code === 60) return result;
			if (code === 62) {
				result.pos = pos + 1;
				result.str = unescapeAll(str.slice(start + 1, pos));
				result.ok = true;
				return result;
			}
			if (code === 92 && pos + 1 < max) {
				pos += 2;
				continue;
			}
			pos++;
		}
		return result;
	}
	let level = 0;
	while (pos < max) {
		code = str.charCodeAt(pos);
		if (code === 32) break;
		if (code < 32 || code === 127) break;
		if (code === 92 && pos + 1 < max) {
			if (str.charCodeAt(pos + 1) === 32) break;
			pos += 2;
			continue;
		}
		if (code === 40) {
			level++;
			if (level > 32) return result;
		}
		if (code === 41) {
			if (level === 0) break;
			level--;
		}
		pos++;
	}
	if (start === pos) return result;
	if (level !== 0) return result;
	result.str = unescapeAll(str.slice(start, pos));
	result.pos = pos;
	result.ok = true;
	return result;
}
//#endregion
//#region node_modules/markdown-it/lib/helpers/parse_link_title.mjs
function parseLinkTitle(str, start, max, prev_state) {
	let code;
	let pos = start;
	const state = {
		ok: false,
		can_continue: false,
		pos: 0,
		str: "",
		marker: 0
	};
	if (prev_state) {
		state.str = prev_state.str;
		state.marker = prev_state.marker;
	} else {
		if (pos >= max) return state;
		let marker = str.charCodeAt(pos);
		if (marker !== 34 && marker !== 39 && marker !== 40) return state;
		start++;
		pos++;
		if (marker === 40) marker = 41;
		state.marker = marker;
	}
	while (pos < max) {
		code = str.charCodeAt(pos);
		if (code === state.marker) {
			state.pos = pos + 1;
			state.str += unescapeAll(str.slice(start, pos));
			state.ok = true;
			return state;
		} else if (code === 40 && state.marker === 41) return state;
		else if (code === 92 && pos + 1 < max) pos++;
		pos++;
	}
	state.can_continue = true;
	state.str += unescapeAll(str.slice(start, pos));
	return state;
}
//#endregion
//#region node_modules/markdown-it/lib/helpers/index.mjs
var helpers_exports = /* @__PURE__ */ __exportAll({
	parseLinkDestination: () => parseLinkDestination,
	parseLinkLabel: () => parseLinkLabel,
	parseLinkTitle: () => parseLinkTitle
});
//#endregion
//#region node_modules/markdown-it/lib/renderer.mjs
/**
* class Renderer
*
* Generates HTML from parsed token stream. Each instance has independent
* copy of rules. Those can be rewritten with ease. Also, you can add new
* rules if you create plugin and adds new token types.
**/
var default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(token.content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	const info = token.info ? unescapeAll(token.info).trim() : "";
	let langName = "";
	let langAttrs = "";
	if (info) {
		const arr = info.split(/(\s+)/g);
		langName = arr[0];
		langAttrs = arr.slice(2).join("");
	}
	let highlighted;
	if (options.highlight) highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
	else highlighted = escapeHtml(token.content);
	if (highlighted.indexOf("<pre") === 0) return highlighted + "\n";
	if (info) {
		const i = token.attrIndex("class");
		const tmpAttrs = token.attrs ? token.attrs.slice() : [];
		if (i < 0) tmpAttrs.push(["class", options.langPrefix + langName]);
		else {
			tmpAttrs[i] = tmpAttrs[i].slice();
			tmpAttrs[i][1] += " " + options.langPrefix + langName;
		}
		const tmpToken = { attrs: tmpAttrs };
		return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>\n`;
	}
	return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>\n`;
};
default_rules.image = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
	return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
	return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
	return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
	return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
	return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
	return tokens[idx].content;
};
/**
* new Renderer()
*
* Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
**/
function Renderer() {
	/**
	* Renderer#rules -> Object
	*
	* Contains render rules for tokens. Can be updated and extended.
	*
	* ##### Example
	*
	* ```javascript
	* var md = require('markdown-it')();
	*
	* md.renderer.rules.strong_open  = function () { return '<b>'; };
	* md.renderer.rules.strong_close = function () { return '</b>'; };
	*
	* var result = md.renderInline(...);
	* ```
	*
	* Each rule is called as independent static function with fixed signature:
	*
	* ```javascript
	* function my_token_render(tokens, idx, options, env, renderer) {
	*   // ...
	*   return renderedHTML;
	* }
	* ```
	*
	* See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs)
	* for more details and examples.
	**/
	this.rules = assign$1({}, default_rules);
}
/**
* Renderer.renderAttrs(token) -> String
*
* Render token attributes to string.
**/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
	let i, l, result;
	if (!token.attrs) return "";
	result = "";
	for (i = 0, l = token.attrs.length; i < l; i++) result += " " + escapeHtml(token.attrs[i][0]) + "=\"" + escapeHtml(token.attrs[i][1]) + "\"";
	return result;
};
/**
* Renderer.renderToken(tokens, idx, options) -> String
* - tokens (Array): list of tokens
* - idx (Numbed): token index to render
* - options (Object): params of parser instance
*
* Default token renderer. Can be overriden by custom function
* in [[Renderer#rules]].
**/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
	const token = tokens[idx];
	let result = "";
	if (token.hidden) return "";
	if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) result += "\n";
	result += (token.nesting === -1 ? "</" : "<") + token.tag;
	result += this.renderAttrs(token);
	if (token.nesting === 0 && options.xhtmlOut) result += " /";
	let needLf = false;
	if (token.block) {
		needLf = true;
		if (token.nesting === 1) {
			if (idx + 1 < tokens.length) {
				const nextToken = tokens[idx + 1];
				if (nextToken.type === "inline" || nextToken.hidden) needLf = false;
				else if (nextToken.nesting === -1 && nextToken.tag === token.tag) needLf = false;
			}
		}
	}
	result += needLf ? ">\n" : ">";
	return result;
};
/**
* Renderer.renderInline(tokens, options, env) -> String
* - tokens (Array): list on block tokens to render
* - options (Object): params of parser instance
* - env (Object): additional data from parsed input (references, for example)
*
* The same as [[Renderer.render]], but for single token of `inline` type.
**/
Renderer.prototype.renderInline = function(tokens, options, env) {
	let result = "";
	const rules = this.rules;
	for (let i = 0, len = tokens.length; i < len; i++) {
		const type = tokens[i].type;
		if (typeof rules[type] !== "undefined") result += rules[type](tokens, i, options, env, this);
		else result += this.renderToken(tokens, i, options);
	}
	return result;
};
/** internal
* Renderer.renderInlineAsText(tokens, options, env) -> String
* - tokens (Array): list on block tokens to render
* - options (Object): params of parser instance
* - env (Object): additional data from parsed input (references, for example)
*
* Special kludge for image `alt` attributes to conform CommonMark spec.
* Don't try to use it! Spec requires to show `alt` content with stripped markup,
* instead of simple escaping.
**/
Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
	let result = "";
	for (let i = 0, len = tokens.length; i < len; i++) switch (tokens[i].type) {
		case "text":
			result += tokens[i].content;
			break;
		case "image":
			result += this.renderInlineAsText(tokens[i].children, options, env);
			break;
		case "html_inline":
		case "html_block":
			result += tokens[i].content;
			break;
		case "softbreak":
		case "hardbreak":
			result += "\n";
			break;
		default:
	}
	return result;
};
/**
* Renderer.render(tokens, options, env) -> String
* - tokens (Array): list on block tokens to render
* - options (Object): params of parser instance
* - env (Object): additional data from parsed input (references, for example)
*
* Takes token stream and generates HTML. Probably, you will never need to call
* this method directly.
**/
Renderer.prototype.render = function(tokens, options, env) {
	let result = "";
	const rules = this.rules;
	for (let i = 0, len = tokens.length; i < len; i++) {
		const type = tokens[i].type;
		if (type === "inline") result += this.renderInline(tokens[i].children, options, env);
		else if (typeof rules[type] !== "undefined") result += rules[type](tokens, i, options, env, this);
		else result += this.renderToken(tokens, i, options, env);
	}
	return result;
};
//#endregion
//#region node_modules/markdown-it/lib/ruler.mjs
/**
* class Ruler
*
* Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
* [[MarkdownIt#inline]] to manage sequences of functions (rules):
*
* - keep rules in defined order
* - assign the name to each rule
* - enable/disable rules
* - add/replace rules
* - allow assign rules to additional named chains (in the same)
* - cacheing lists of active rules
*
* You will not need use this class directly until write plugins. For simple
* rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
* [[MarkdownIt.use]].
**/
/**
* new Ruler()
**/
function Ruler() {
	this.__rules__ = [];
	this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
	for (let i = 0; i < this.__rules__.length; i++) if (this.__rules__[i].name === name) return i;
	return -1;
};
Ruler.prototype.__compile__ = function() {
	const self = this;
	const chains = [""];
	self.__rules__.forEach(function(rule) {
		if (!rule.enabled) return;
		rule.alt.forEach(function(altName) {
			if (chains.indexOf(altName) < 0) chains.push(altName);
		});
	});
	self.__cache__ = {};
	chains.forEach(function(chain) {
		self.__cache__[chain] = [];
		self.__rules__.forEach(function(rule) {
			if (!rule.enabled) return;
			if (chain && rule.alt.indexOf(chain) < 0) return;
			self.__cache__[chain].push(rule.fn);
		});
	});
};
/**
* Ruler.at(name, fn [, options])
* - name (String): rule name to replace.
* - fn (Function): new rule function.
* - options (Object): new rule options (not mandatory).
*
* Replace rule by name with new function & options. Throws error if name not
* found.
*
* ##### Options:
*
* - __alt__ - array with names of "alternate" chains.
*
* ##### Example
*
* Replace existing typographer replacement rule with new one:
*
* ```javascript
* var md = require('markdown-it')();
*
* md.core.ruler.at('replacements', function replace(state) {
*   //...
* });
* ```
**/
Ruler.prototype.at = function(name, fn, options) {
	const index = this.__find__(name);
	const opt = options || {};
	if (index === -1) throw new Error("Parser rule not found: " + name);
	this.__rules__[index].fn = fn;
	this.__rules__[index].alt = opt.alt || [];
	this.__cache__ = null;
};
/**
* Ruler.before(beforeName, ruleName, fn [, options])
* - beforeName (String): new rule will be added before this one.
* - ruleName (String): name of added rule.
* - fn (Function): rule function.
* - options (Object): rule options (not mandatory).
*
* Add new rule to chain before one with given name. See also
* [[Ruler.after]], [[Ruler.push]].
*
* ##### Options:
*
* - __alt__ - array with names of "alternate" chains.
*
* ##### Example
*
* ```javascript
* var md = require('markdown-it')();
*
* md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
*   //...
* });
* ```
**/
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
	const index = this.__find__(beforeName);
	const opt = options || {};
	if (index === -1) throw new Error("Parser rule not found: " + beforeName);
	this.__rules__.splice(index, 0, {
		name: ruleName,
		enabled: true,
		fn,
		alt: opt.alt || []
	});
	this.__cache__ = null;
};
/**
* Ruler.after(afterName, ruleName, fn [, options])
* - afterName (String): new rule will be added after this one.
* - ruleName (String): name of added rule.
* - fn (Function): rule function.
* - options (Object): rule options (not mandatory).
*
* Add new rule to chain after one with given name. See also
* [[Ruler.before]], [[Ruler.push]].
*
* ##### Options:
*
* - __alt__ - array with names of "alternate" chains.
*
* ##### Example
*
* ```javascript
* var md = require('markdown-it')();
*
* md.inline.ruler.after('text', 'my_rule', function replace(state) {
*   //...
* });
* ```
**/
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
	const index = this.__find__(afterName);
	const opt = options || {};
	if (index === -1) throw new Error("Parser rule not found: " + afterName);
	this.__rules__.splice(index + 1, 0, {
		name: ruleName,
		enabled: true,
		fn,
		alt: opt.alt || []
	});
	this.__cache__ = null;
};
/**
* Ruler.push(ruleName, fn [, options])
* - ruleName (String): name of added rule.
* - fn (Function): rule function.
* - options (Object): rule options (not mandatory).
*
* Push new rule to the end of chain. See also
* [[Ruler.before]], [[Ruler.after]].
*
* ##### Options:
*
* - __alt__ - array with names of "alternate" chains.
*
* ##### Example
*
* ```javascript
* var md = require('markdown-it')();
*
* md.core.ruler.push('my_rule', function replace(state) {
*   //...
* });
* ```
**/
Ruler.prototype.push = function(ruleName, fn, options) {
	const opt = options || {};
	this.__rules__.push({
		name: ruleName,
		enabled: true,
		fn,
		alt: opt.alt || []
	});
	this.__cache__ = null;
};
/**
* Ruler.enable(list [, ignoreInvalid]) -> Array
* - list (String|Array): list of rule names to enable.
* - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
*
* Enable rules with given names. If any rule name not found - throw Error.
* Errors can be disabled by second param.
*
* Returns list of found rule names (if no exception happened).
*
* See also [[Ruler.disable]], [[Ruler.enableOnly]].
**/
Ruler.prototype.enable = function(list, ignoreInvalid) {
	if (!Array.isArray(list)) list = [list];
	const result = [];
	list.forEach(function(name) {
		const idx = this.__find__(name);
		if (idx < 0) {
			if (ignoreInvalid) return;
			throw new Error("Rules manager: invalid rule name " + name);
		}
		this.__rules__[idx].enabled = true;
		result.push(name);
	}, this);
	this.__cache__ = null;
	return result;
};
/**
* Ruler.enableOnly(list [, ignoreInvalid])
* - list (String|Array): list of rule names to enable (whitelist).
* - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
*
* Enable rules with given names, and disable everything else. If any rule name
* not found - throw Error. Errors can be disabled by second param.
*
* See also [[Ruler.disable]], [[Ruler.enable]].
**/
Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
	if (!Array.isArray(list)) list = [list];
	this.__rules__.forEach(function(rule) {
		rule.enabled = false;
	});
	this.enable(list, ignoreInvalid);
};
/**
* Ruler.disable(list [, ignoreInvalid]) -> Array
* - list (String|Array): list of rule names to disable.
* - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
*
* Disable rules with given names. If any rule name not found - throw Error.
* Errors can be disabled by second param.
*
* Returns list of found rule names (if no exception happened).
*
* See also [[Ruler.enable]], [[Ruler.enableOnly]].
**/
Ruler.prototype.disable = function(list, ignoreInvalid) {
	if (!Array.isArray(list)) list = [list];
	const result = [];
	list.forEach(function(name) {
		const idx = this.__find__(name);
		if (idx < 0) {
			if (ignoreInvalid) return;
			throw new Error("Rules manager: invalid rule name " + name);
		}
		this.__rules__[idx].enabled = false;
		result.push(name);
	}, this);
	this.__cache__ = null;
	return result;
};
/**
* Ruler.getRules(chainName) -> Array
*
* Return array of active functions (rules) for given chain name. It analyzes
* rules configuration, compiles caches if not exists and returns result.
*
* Default chain name is `''` (empty string). It can't be skipped. That's
* done intentionally, to keep signature monomorphic for high speed.
**/
Ruler.prototype.getRules = function(chainName) {
	if (this.__cache__ === null) this.__compile__();
	return this.__cache__[chainName] || [];
};
//#endregion
//#region node_modules/markdown-it/lib/token.mjs
/**
* class Token
**/
/**
* new Token(type, tag, nesting)
*
* Create new token and fill passed properties.
**/
function Token(type, tag, nesting) {
	/**
	* Token#type -> String
	*
	* Type of the token (string, e.g. "paragraph_open")
	**/
	this.type = type;
	/**
	* Token#tag -> String
	*
	* html tag name, e.g. "p"
	**/
	this.tag = tag;
	/**
	* Token#attrs -> Array
	*
	* Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
	**/
	this.attrs = null;
	/**
	* Token#map -> Array
	*
	* Source map info. Format: `[ line_begin, line_end ]`
	**/
	this.map = null;
	/**
	* Token#nesting -> Number
	*
	* Level change (number in {-1, 0, 1} set), where:
	*
	* -  `1` means the tag is opening
	* -  `0` means the tag is self-closing
	* - `-1` means the tag is closing
	**/
	this.nesting = nesting;
	/**
	* Token#level -> Number
	*
	* nesting level, the same as `state.level`
	**/
	this.level = 0;
	/**
	* Token#children -> Array
	*
	* An array of child nodes (inline and img tokens)
	**/
	this.children = null;
	/**
	* Token#content -> String
	*
	* In a case of self-closing tag (code, html, fence, etc.),
	* it has contents of this tag.
	**/
	this.content = "";
	/**
	* Token#markup -> String
	*
	* '*' or '_' for emphasis, fence string for fence, etc.
	**/
	this.markup = "";
	/**
	* Token#info -> String
	*
	* Additional information:
	*
	* - Info string for "fence" tokens
	* - The value "auto" for autolink "link_open" and "link_close" tokens
	* - The string value of the item marker for ordered-list "list_item_open" tokens
	**/
	this.info = "";
	/**
	* Token#meta -> Object
	*
	* A place for plugins to store an arbitrary data
	**/
	this.meta = null;
	/**
	* Token#block -> Boolean
	*
	* True for block-level tokens, false for inline tokens.
	* Used in renderer to calculate line breaks
	**/
	this.block = false;
	/**
	* Token#hidden -> Boolean
	*
	* If it's true, ignore this element when rendering. Used for tight lists
	* to hide paragraphs.
	**/
	this.hidden = false;
}
/**
* Token.attrIndex(name) -> Number
*
* Search attribute index by name.
**/
Token.prototype.attrIndex = function attrIndex(name) {
	if (!this.attrs) return -1;
	const attrs = this.attrs;
	for (let i = 0, len = attrs.length; i < len; i++) if (attrs[i][0] === name) return i;
	return -1;
};
/**
* Token.attrPush(attrData)
*
* Add `[ name, value ]` attribute to list. Init attrs if necessary
**/
Token.prototype.attrPush = function attrPush(attrData) {
	if (this.attrs) this.attrs.push(attrData);
	else this.attrs = [attrData];
};
/**
* Token.attrSet(name, value)
*
* Set `name` attribute to `value`. Override old value if exists.
**/
Token.prototype.attrSet = function attrSet(name, value) {
	const idx = this.attrIndex(name);
	const attrData = [name, value];
	if (idx < 0) this.attrPush(attrData);
	else this.attrs[idx] = attrData;
};
/**
* Token.attrGet(name)
*
* Get the value of attribute `name`, or null if it does not exist.
**/
Token.prototype.attrGet = function attrGet(name) {
	const idx = this.attrIndex(name);
	let value = null;
	if (idx >= 0) value = this.attrs[idx][1];
	return value;
};
/**
* Token.attrJoin(name, value)
*
* Join value to existing attribute via space. Or create new attribute if not
* exists. Useful to operate with token classes.
**/
Token.prototype.attrJoin = function attrJoin(name, value) {
	const idx = this.attrIndex(name);
	if (idx < 0) this.attrPush([name, value]);
	else this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
};
//#endregion
//#region node_modules/markdown-it/lib/rules_core/state_core.mjs
function StateCore(src, md, env) {
	this.src = src;
	this.env = env;
	this.tokens = [];
	this.inlineMode = false;
	this.md = md;
}
StateCore.prototype.Token = Token;
//#endregion
//#region node_modules/markdown-it/lib/rules_core/normalize.mjs
var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;
function normalize(state) {
	let str;
	str = state.src.replace(NEWLINES_RE, "\n");
	str = str.replace(NULL_RE, "�");
	state.src = str;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/block.mjs
function block(state) {
	let token;
	if (state.inlineMode) {
		token = new state.Token("inline", "", 0);
		token.content = state.src;
		token.map = [0, 1];
		token.children = [];
		state.tokens.push(token);
	} else state.md.block.parse(state.src, state.md, state.env, state.tokens);
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/inline.mjs
function inline(state) {
	const tokens = state.tokens;
	for (let i = 0, l = tokens.length; i < l; i++) {
		const tok = tokens[i];
		if (tok.type === "inline") state.md.inline.parse(tok.content, state.md, state.env, tok.children);
	}
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/linkify.mjs
function isLinkOpen$1(str) {
	return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
	return /^<\/a\s*>/i.test(str);
}
function linkify$1(state) {
	const blockTokens = state.tokens;
	if (!state.md.options.linkify) return;
	for (let j = 0, l = blockTokens.length; j < l; j++) {
		if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) continue;
		let tokens = blockTokens[j].children;
		let htmlLinkLevel = 0;
		for (let i = tokens.length - 1; i >= 0; i--) {
			const currentToken = tokens[i];
			if (currentToken.type === "link_close") {
				i--;
				while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") i--;
				continue;
			}
			if (currentToken.type === "html_inline") {
				if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) htmlLinkLevel--;
				if (isLinkClose$1(currentToken.content)) htmlLinkLevel++;
			}
			if (htmlLinkLevel > 0) continue;
			if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
				const text = currentToken.content;
				let links = state.md.linkify.match(text);
				const nodes = [];
				let level = currentToken.level;
				let lastPos = 0;
				if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") links = links.slice(1);
				for (let ln = 0; ln < links.length; ln++) {
					const url = links[ln].url;
					const fullUrl = state.md.normalizeLink(url);
					if (!state.md.validateLink(fullUrl)) continue;
					let urlText = links[ln].text;
					if (!links[ln].schema) urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
					else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
					else urlText = state.md.normalizeLinkText(urlText);
					const pos = links[ln].index;
					if (pos > lastPos) {
						const token = new state.Token("text", "", 0);
						token.content = text.slice(lastPos, pos);
						token.level = level;
						nodes.push(token);
					}
					const token_o = new state.Token("link_open", "a", 1);
					token_o.attrs = [["href", fullUrl]];
					token_o.level = level++;
					token_o.markup = "linkify";
					token_o.info = "auto";
					nodes.push(token_o);
					const token_t = new state.Token("text", "", 0);
					token_t.content = urlText;
					token_t.level = level;
					nodes.push(token_t);
					const token_c = new state.Token("link_close", "a", -1);
					token_c.level = --level;
					token_c.markup = "linkify";
					token_c.info = "auto";
					nodes.push(token_c);
					lastPos = links[ln].lastIndex;
				}
				if (lastPos < text.length) {
					const token = new state.Token("text", "", 0);
					token.content = text.slice(lastPos);
					token.level = level;
					nodes.push(token);
				}
				blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
			}
		}
	}
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/replacements.mjs
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r)\)/gi;
var SCOPED_ABBR = {
	c: "©",
	r: "®",
	tm: "™"
};
function replaceFn(match, name) {
	return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
	let inside_autolink = 0;
	for (let i = inlineTokens.length - 1; i >= 0; i--) {
		const token = inlineTokens[i];
		if (token.type === "text" && !inside_autolink) token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
		if (token.type === "link_open" && token.info === "auto") inside_autolink--;
		if (token.type === "link_close" && token.info === "auto") inside_autolink++;
	}
}
function replace_rare(inlineTokens) {
	let inside_autolink = 0;
	for (let i = inlineTokens.length - 1; i >= 0; i--) {
		const token = inlineTokens[i];
		if (token.type === "text" && !inside_autolink) {
			if (RARE_RE.test(token.content)) token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–");
		}
		if (token.type === "link_open" && token.info === "auto") inside_autolink--;
		if (token.type === "link_close" && token.info === "auto") inside_autolink++;
	}
}
function replace(state) {
	let blkIdx;
	if (!state.md.options.typographer) return;
	for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
		if (state.tokens[blkIdx].type !== "inline") continue;
		if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) replace_scoped(state.tokens[blkIdx].children);
		if (RARE_RE.test(state.tokens[blkIdx].content)) replace_rare(state.tokens[blkIdx].children);
	}
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/smartquotes.mjs
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "’";
function replaceAt(str, index, ch) {
	return str.slice(0, index) + ch + str.slice(index + 1);
}
function process_inlines(tokens, state) {
	let j;
	const stack = [];
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		const thisLevel = tokens[i].level;
		for (j = stack.length - 1; j >= 0; j--) if (stack[j].level <= thisLevel) break;
		stack.length = j + 1;
		if (token.type !== "text") continue;
		let text = token.content;
		let pos = 0;
		let max = text.length;
		OUTER: while (pos < max) {
			QUOTE_RE.lastIndex = pos;
			const t = QUOTE_RE.exec(text);
			if (!t) break;
			let canOpen = true;
			let canClose = true;
			pos = t.index + 1;
			const isSingle = t[0] === "'";
			let lastChar = 32;
			if (t.index - 1 >= 0) lastChar = text.charCodeAt(t.index - 1);
			else for (j = i - 1; j >= 0; j--) {
				if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
				if (!tokens[j].content) continue;
				lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
				break;
			}
			let nextChar = 32;
			if (pos < max) nextChar = text.charCodeAt(pos);
			else for (j = i + 1; j < tokens.length; j++) {
				if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
				if (!tokens[j].content) continue;
				nextChar = tokens[j].content.charCodeAt(0);
				break;
			}
			const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
			const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
			const isLastWhiteSpace = isWhiteSpace(lastChar);
			const isNextWhiteSpace = isWhiteSpace(nextChar);
			if (isNextWhiteSpace) canOpen = false;
			else if (isNextPunctChar) {
				if (!(isLastWhiteSpace || isLastPunctChar)) canOpen = false;
			}
			if (isLastWhiteSpace) canClose = false;
			else if (isLastPunctChar) {
				if (!(isNextWhiteSpace || isNextPunctChar)) canClose = false;
			}
			if (nextChar === 34 && t[0] === "\"") {
				if (lastChar >= 48 && lastChar <= 57) canClose = canOpen = false;
			}
			if (canOpen && canClose) {
				canOpen = isLastPunctChar;
				canClose = isNextPunctChar;
			}
			if (!canOpen && !canClose) {
				if (isSingle) token.content = replaceAt(token.content, t.index, APOSTROPHE);
				continue;
			}
			if (canClose) for (j = stack.length - 1; j >= 0; j--) {
				let item = stack[j];
				if (stack[j].level < thisLevel) break;
				if (item.single === isSingle && stack[j].level === thisLevel) {
					item = stack[j];
					let openQuote;
					let closeQuote;
					if (isSingle) {
						openQuote = state.md.options.quotes[2];
						closeQuote = state.md.options.quotes[3];
					} else {
						openQuote = state.md.options.quotes[0];
						closeQuote = state.md.options.quotes[1];
					}
					token.content = replaceAt(token.content, t.index, closeQuote);
					tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
					pos += closeQuote.length - 1;
					if (item.token === i) pos += openQuote.length - 1;
					text = token.content;
					max = text.length;
					stack.length = j;
					continue OUTER;
				}
			}
			if (canOpen) stack.push({
				token: i,
				pos: t.index,
				single: isSingle,
				level: thisLevel
			});
			else if (canClose && isSingle) token.content = replaceAt(token.content, t.index, APOSTROPHE);
		}
	}
}
function smartquotes(state) {
	if (!state.md.options.typographer) return;
	for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
		if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) continue;
		process_inlines(state.tokens[blkIdx].children, state);
	}
}
//#endregion
//#region node_modules/markdown-it/lib/rules_core/text_join.mjs
function text_join(state) {
	let curr, last;
	const blockTokens = state.tokens;
	const l = blockTokens.length;
	for (let j = 0; j < l; j++) {
		if (blockTokens[j].type !== "inline") continue;
		const tokens = blockTokens[j].children;
		const max = tokens.length;
		for (curr = 0; curr < max; curr++) if (tokens[curr].type === "text_special") tokens[curr].type = "text";
		for (curr = last = 0; curr < max; curr++) if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
		else {
			if (curr !== last) tokens[last] = tokens[curr];
			last++;
		}
		if (curr !== last) tokens.length = last;
	}
}
//#endregion
//#region node_modules/markdown-it/lib/parser_core.mjs
/** internal
* class Core
*
* Top-level rules executor. Glues block/inline parsers and does intermediate
* transformations.
**/
var _rules$2 = [
	["normalize", normalize],
	["block", block],
	["inline", inline],
	["linkify", linkify$1],
	["replacements", replace],
	["smartquotes", smartquotes],
	["text_join", text_join]
];
/**
* new Core()
**/
function Core() {
	/**
	* Core#ruler -> Ruler
	*
	* [[Ruler]] instance. Keep configuration of core rules.
	**/
	this.ruler = new Ruler();
	for (let i = 0; i < _rules$2.length; i++) this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
}
/**
* Core.process(state)
*
* Executes core chain rules.
**/
Core.prototype.process = function(state) {
	const rules = this.ruler.getRules("");
	for (let i = 0, l = rules.length; i < l; i++) rules[i](state);
};
Core.prototype.State = StateCore;
//#endregion
//#region node_modules/markdown-it/lib/rules_block/state_block.mjs
function StateBlock(src, md, env, tokens) {
	this.src = src;
	this.md = md;
	this.env = env;
	this.tokens = tokens;
	this.bMarks = [];
	this.eMarks = [];
	this.tShift = [];
	this.sCount = [];
	this.bsCount = [];
	this.blkIndent = 0;
	this.line = 0;
	this.lineMax = 0;
	this.tight = false;
	this.ddIndent = -1;
	this.listIndent = -1;
	this.parentType = "root";
	this.level = 0;
	const s = this.src;
	for (let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++) {
		const ch = s.charCodeAt(pos);
		if (!indent_found) if (isSpace(ch)) {
			indent++;
			if (ch === 9) offset += 4 - offset % 4;
			else offset++;
			continue;
		} else indent_found = true;
		if (ch === 10 || pos === len - 1) {
			if (ch !== 10) pos++;
			this.bMarks.push(start);
			this.eMarks.push(pos);
			this.tShift.push(indent);
			this.sCount.push(offset);
			this.bsCount.push(0);
			indent_found = false;
			indent = 0;
			offset = 0;
			start = pos + 1;
		}
	}
	this.bMarks.push(s.length);
	this.eMarks.push(s.length);
	this.tShift.push(0);
	this.sCount.push(0);
	this.bsCount.push(0);
	this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type, tag, nesting) {
	const token = new Token(type, tag, nesting);
	token.block = true;
	if (nesting < 0) this.level--;
	token.level = this.level;
	if (nesting > 0) this.level++;
	this.tokens.push(token);
	return token;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
	return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	for (let max = this.lineMax; from < max; from++) if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) break;
	return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	for (let max = this.src.length; pos < max; pos++) if (!isSpace(this.src.charCodeAt(pos))) break;
	return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
	if (pos <= min) return pos;
	while (pos > min) if (!isSpace(this.src.charCodeAt(--pos))) return pos + 1;
	return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code) {
	for (let max = this.src.length; pos < max; pos++) if (this.src.charCodeAt(pos) !== code) break;
	return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	if (pos <= min) return pos;
	while (pos > min) if (code !== this.src.charCodeAt(--pos)) return pos + 1;
	return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	if (begin >= end) return "";
	const queue = new Array(end - begin);
	for (let i = 0, line = begin; line < end; line++, i++) {
		let lineIndent = 0;
		const lineStart = this.bMarks[line];
		let first = lineStart;
		let last;
		if (line + 1 < end || keepLastLF) last = this.eMarks[line] + 1;
		else last = this.eMarks[line];
		while (first < last && lineIndent < indent) {
			const ch = this.src.charCodeAt(first);
			if (isSpace(ch)) if (ch === 9) lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
			else lineIndent++;
			else if (first - lineStart < this.tShift[line]) lineIndent++;
			else break;
			first++;
		}
		if (lineIndent > indent) queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
		else queue[i] = this.src.slice(first, last);
	}
	return queue.join("");
};
StateBlock.prototype.Token = Token;
//#endregion
//#region node_modules/markdown-it/lib/rules_block/table.mjs
var MAX_AUTOCOMPLETED_CELLS = 65536;
function getLine(state, line) {
	const pos = state.bMarks[line] + state.tShift[line];
	const max = state.eMarks[line];
	return state.src.slice(pos, max);
}
function escapedSplit(str) {
	const result = [];
	const max = str.length;
	let pos = 0;
	let ch = str.charCodeAt(pos);
	let isEscaped = false;
	let lastPos = 0;
	let current = "";
	while (pos < max) {
		if (ch === 124) if (!isEscaped) {
			result.push(current + str.substring(lastPos, pos));
			current = "";
			lastPos = pos + 1;
		} else {
			current += str.substring(lastPos, pos - 1);
			lastPos = pos;
		}
		isEscaped = ch === 92;
		pos++;
		ch = str.charCodeAt(pos);
	}
	result.push(current + str.substring(lastPos));
	return result;
}
function table(state, startLine, endLine, silent) {
	if (startLine + 2 > endLine) return false;
	let nextLine = startLine + 1;
	if (state.sCount[nextLine] < state.blkIndent) return false;
	if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
	let pos = state.bMarks[nextLine] + state.tShift[nextLine];
	if (pos >= state.eMarks[nextLine]) return false;
	const firstCh = state.src.charCodeAt(pos++);
	if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) return false;
	if (pos >= state.eMarks[nextLine]) return false;
	const secondCh = state.src.charCodeAt(pos++);
	if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) return false;
	if (firstCh === 45 && isSpace(secondCh)) return false;
	while (pos < state.eMarks[nextLine]) {
		const ch = state.src.charCodeAt(pos);
		if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) return false;
		pos++;
	}
	let lineText = getLine(state, startLine + 1);
	let columns = lineText.split("|");
	const aligns = [];
	for (let i = 0; i < columns.length; i++) {
		const t = columns[i].trim();
		if (!t) if (i === 0 || i === columns.length - 1) continue;
		else return false;
		if (!/^:?-+:?$/.test(t)) return false;
		if (t.charCodeAt(t.length - 1) === 58) aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
		else if (t.charCodeAt(0) === 58) aligns.push("left");
		else aligns.push("");
	}
	lineText = getLine(state, startLine).trim();
	if (lineText.indexOf("|") === -1) return false;
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	columns = escapedSplit(lineText);
	if (columns.length && columns[0] === "") columns.shift();
	if (columns.length && columns[columns.length - 1] === "") columns.pop();
	const columnCount = columns.length;
	if (columnCount === 0 || columnCount !== aligns.length) return false;
	if (silent) return true;
	const oldParentType = state.parentType;
	state.parentType = "table";
	const terminatorRules = state.md.block.ruler.getRules("blockquote");
	const token_to = state.push("table_open", "table", 1);
	const tableLines = [startLine, 0];
	token_to.map = tableLines;
	const token_tho = state.push("thead_open", "thead", 1);
	token_tho.map = [startLine, startLine + 1];
	const token_htro = state.push("tr_open", "tr", 1);
	token_htro.map = [startLine, startLine + 1];
	for (let i = 0; i < columns.length; i++) {
		const token_ho = state.push("th_open", "th", 1);
		if (aligns[i]) token_ho.attrs = [["style", "text-align:" + aligns[i]]];
		const token_il = state.push("inline", "", 0);
		token_il.content = columns[i].trim();
		token_il.children = [];
		state.push("th_close", "th", -1);
	}
	state.push("tr_close", "tr", -1);
	state.push("thead_close", "thead", -1);
	let tbodyLines;
	let autocompletedCells = 0;
	for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
		if (state.sCount[nextLine] < state.blkIndent) break;
		let terminate = false;
		for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
			terminate = true;
			break;
		}
		if (terminate) break;
		lineText = getLine(state, nextLine).trim();
		if (!lineText) break;
		if (state.sCount[nextLine] - state.blkIndent >= 4) break;
		columns = escapedSplit(lineText);
		if (columns.length && columns[0] === "") columns.shift();
		if (columns.length && columns[columns.length - 1] === "") columns.pop();
		autocompletedCells += columnCount - columns.length;
		if (autocompletedCells > MAX_AUTOCOMPLETED_CELLS) break;
		if (nextLine === startLine + 2) {
			const token_tbo = state.push("tbody_open", "tbody", 1);
			token_tbo.map = tbodyLines = [startLine + 2, 0];
		}
		const token_tro = state.push("tr_open", "tr", 1);
		token_tro.map = [nextLine, nextLine + 1];
		for (let i = 0; i < columnCount; i++) {
			const token_tdo = state.push("td_open", "td", 1);
			if (aligns[i]) token_tdo.attrs = [["style", "text-align:" + aligns[i]]];
			const token_il = state.push("inline", "", 0);
			token_il.content = columns[i] ? columns[i].trim() : "";
			token_il.children = [];
			state.push("td_close", "td", -1);
		}
		state.push("tr_close", "tr", -1);
	}
	if (tbodyLines) {
		state.push("tbody_close", "tbody", -1);
		tbodyLines[1] = nextLine;
	}
	state.push("table_close", "table", -1);
	tableLines[1] = nextLine;
	state.parentType = oldParentType;
	state.line = nextLine;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/code.mjs
function code$1(state, startLine, endLine) {
	if (state.sCount[startLine] - state.blkIndent < 4) return false;
	let nextLine = startLine + 1;
	let last = nextLine;
	while (nextLine < endLine) {
		if (state.isEmpty(nextLine)) {
			nextLine++;
			continue;
		}
		if (state.sCount[nextLine] - state.blkIndent >= 4) {
			nextLine++;
			last = nextLine;
			continue;
		}
		break;
	}
	state.line = last;
	const token = state.push("code_block", "code", 0);
	token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
	token.map = [startLine, state.line];
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/fence.mjs
function fence(state, startLine, endLine, silent) {
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	if (pos + 3 > max) return false;
	const marker = state.src.charCodeAt(pos);
	if (marker !== 126 && marker !== 96) return false;
	let mem = pos;
	pos = state.skipChars(pos, marker);
	let len = pos - mem;
	if (len < 3) return false;
	const markup = state.src.slice(mem, pos);
	const params = state.src.slice(pos, max);
	if (marker === 96) {
		if (params.indexOf(String.fromCharCode(marker)) >= 0) return false;
	}
	if (silent) return true;
	let nextLine = startLine;
	let haveEndMarker = false;
	for (;;) {
		nextLine++;
		if (nextLine >= endLine) break;
		pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (pos < max && state.sCount[nextLine] < state.blkIndent) break;
		if (state.src.charCodeAt(pos) !== marker) continue;
		if (state.sCount[nextLine] - state.blkIndent >= 4) continue;
		pos = state.skipChars(pos, marker);
		if (pos - mem < len) continue;
		pos = state.skipSpaces(pos);
		if (pos < max) continue;
		haveEndMarker = true;
		break;
	}
	len = state.sCount[startLine];
	state.line = nextLine + (haveEndMarker ? 1 : 0);
	const token = state.push("fence", "code", 0);
	token.info = params;
	token.content = state.getLines(startLine + 1, nextLine, len, true);
	token.markup = markup;
	token.map = [startLine, state.line];
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/blockquote.mjs
function blockquote(state, startLine, endLine, silent) {
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	const oldLineMax = state.lineMax;
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	if (state.src.charCodeAt(pos) !== 62) return false;
	if (silent) return true;
	const oldBMarks = [];
	const oldBSCount = [];
	const oldSCount = [];
	const oldTShift = [];
	const terminatorRules = state.md.block.ruler.getRules("blockquote");
	const oldParentType = state.parentType;
	state.parentType = "blockquote";
	let lastLineEmpty = false;
	let nextLine;
	for (nextLine = startLine; nextLine < endLine; nextLine++) {
		const isOutdented = state.sCount[nextLine] < state.blkIndent;
		pos = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (pos >= max) break;
		if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
			let initial = state.sCount[nextLine] + 1;
			let spaceAfterMarker;
			let adjustTab;
			if (state.src.charCodeAt(pos) === 32) {
				pos++;
				initial++;
				adjustTab = false;
				spaceAfterMarker = true;
			} else if (state.src.charCodeAt(pos) === 9) {
				spaceAfterMarker = true;
				if ((state.bsCount[nextLine] + initial) % 4 === 3) {
					pos++;
					initial++;
					adjustTab = false;
				} else adjustTab = true;
			} else spaceAfterMarker = false;
			let offset = initial;
			oldBMarks.push(state.bMarks[nextLine]);
			state.bMarks[nextLine] = pos;
			while (pos < max) {
				const ch = state.src.charCodeAt(pos);
				if (isSpace(ch)) if (ch === 9) offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
				else offset++;
				else break;
				pos++;
			}
			lastLineEmpty = pos >= max;
			oldBSCount.push(state.bsCount[nextLine]);
			state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
			oldSCount.push(state.sCount[nextLine]);
			state.sCount[nextLine] = offset - initial;
			oldTShift.push(state.tShift[nextLine]);
			state.tShift[nextLine] = pos - state.bMarks[nextLine];
			continue;
		}
		if (lastLineEmpty) break;
		let terminate = false;
		for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
			terminate = true;
			break;
		}
		if (terminate) {
			state.lineMax = nextLine;
			if (state.blkIndent !== 0) {
				oldBMarks.push(state.bMarks[nextLine]);
				oldBSCount.push(state.bsCount[nextLine]);
				oldTShift.push(state.tShift[nextLine]);
				oldSCount.push(state.sCount[nextLine]);
				state.sCount[nextLine] -= state.blkIndent;
			}
			break;
		}
		oldBMarks.push(state.bMarks[nextLine]);
		oldBSCount.push(state.bsCount[nextLine]);
		oldTShift.push(state.tShift[nextLine]);
		oldSCount.push(state.sCount[nextLine]);
		state.sCount[nextLine] = -1;
	}
	const oldIndent = state.blkIndent;
	state.blkIndent = 0;
	const token_o = state.push("blockquote_open", "blockquote", 1);
	token_o.markup = ">";
	const lines = [startLine, 0];
	token_o.map = lines;
	state.md.block.tokenize(state, startLine, nextLine);
	const token_c = state.push("blockquote_close", "blockquote", -1);
	token_c.markup = ">";
	state.lineMax = oldLineMax;
	state.parentType = oldParentType;
	lines[1] = state.line;
	for (let i = 0; i < oldTShift.length; i++) {
		state.bMarks[i + startLine] = oldBMarks[i];
		state.tShift[i + startLine] = oldTShift[i];
		state.sCount[i + startLine] = oldSCount[i];
		state.bsCount[i + startLine] = oldBSCount[i];
	}
	state.blkIndent = oldIndent;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/hr.mjs
function hr(state, startLine, endLine, silent) {
	const max = state.eMarks[startLine];
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	const marker = state.src.charCodeAt(pos++);
	if (marker !== 42 && marker !== 45 && marker !== 95) return false;
	let cnt = 1;
	while (pos < max) {
		const ch = state.src.charCodeAt(pos++);
		if (ch !== marker && !isSpace(ch)) return false;
		if (ch === marker) cnt++;
	}
	if (cnt < 3) return false;
	if (silent) return true;
	state.line = startLine + 1;
	const token = state.push("hr", "hr", 0);
	token.map = [startLine, state.line];
	token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/list.mjs
function skipBulletListMarker(state, startLine) {
	const max = state.eMarks[startLine];
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	const marker = state.src.charCodeAt(pos++);
	if (marker !== 42 && marker !== 45 && marker !== 43) return -1;
	if (pos < max) {
		if (!isSpace(state.src.charCodeAt(pos))) return -1;
	}
	return pos;
}
function skipOrderedListMarker(state, startLine) {
	const start = state.bMarks[startLine] + state.tShift[startLine];
	const max = state.eMarks[startLine];
	let pos = start;
	if (pos + 1 >= max) return -1;
	let ch = state.src.charCodeAt(pos++);
	if (ch < 48 || ch > 57) return -1;
	for (;;) {
		if (pos >= max) return -1;
		ch = state.src.charCodeAt(pos++);
		if (ch >= 48 && ch <= 57) {
			if (pos - start >= 10) return -1;
			continue;
		}
		if (ch === 41 || ch === 46) break;
		return -1;
	}
	if (pos < max) {
		ch = state.src.charCodeAt(pos);
		if (!isSpace(ch)) return -1;
	}
	return pos;
}
function markTightParagraphs(state, idx) {
	const level = state.level + 2;
	for (let i = idx + 2, l = state.tokens.length - 2; i < l; i++) if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
		state.tokens[i + 2].hidden = true;
		state.tokens[i].hidden = true;
		i += 2;
	}
}
function list(state, startLine, endLine, silent) {
	let max, pos, start, token;
	let nextLine = startLine;
	let tight = true;
	if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
	if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) return false;
	let isTerminatingParagraph = false;
	if (silent && state.parentType === "paragraph") {
		if (state.sCount[nextLine] >= state.blkIndent) isTerminatingParagraph = true;
	}
	let isOrdered;
	let markerValue;
	let posAfterMarker;
	if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
		isOrdered = true;
		start = state.bMarks[nextLine] + state.tShift[nextLine];
		markerValue = Number(state.src.slice(start, posAfterMarker - 1));
		if (isTerminatingParagraph && markerValue !== 1) return false;
	} else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) isOrdered = false;
	else return false;
	if (isTerminatingParagraph) {
		if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
	}
	if (silent) return true;
	const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
	const listTokIdx = state.tokens.length;
	if (isOrdered) {
		token = state.push("ordered_list_open", "ol", 1);
		if (markerValue !== 1) token.attrs = [["start", markerValue]];
	} else token = state.push("bullet_list_open", "ul", 1);
	const listLines = [nextLine, 0];
	token.map = listLines;
	token.markup = String.fromCharCode(markerCharCode);
	let prevEmptyEnd = false;
	const terminatorRules = state.md.block.ruler.getRules("list");
	const oldParentType = state.parentType;
	state.parentType = "list";
	while (nextLine < endLine) {
		pos = posAfterMarker;
		max = state.eMarks[nextLine];
		const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
		let offset = initial;
		while (pos < max) {
			const ch = state.src.charCodeAt(pos);
			if (ch === 9) offset += 4 - (offset + state.bsCount[nextLine]) % 4;
			else if (ch === 32) offset++;
			else break;
			pos++;
		}
		const contentStart = pos;
		let indentAfterMarker;
		if (contentStart >= max) indentAfterMarker = 1;
		else indentAfterMarker = offset - initial;
		if (indentAfterMarker > 4) indentAfterMarker = 1;
		const indent = initial + indentAfterMarker;
		token = state.push("list_item_open", "li", 1);
		token.markup = String.fromCharCode(markerCharCode);
		const itemLines = [nextLine, 0];
		token.map = itemLines;
		if (isOrdered) token.info = state.src.slice(start, posAfterMarker - 1);
		const oldTight = state.tight;
		const oldTShift = state.tShift[nextLine];
		const oldSCount = state.sCount[nextLine];
		const oldListIndent = state.listIndent;
		state.listIndent = state.blkIndent;
		state.blkIndent = indent;
		state.tight = true;
		state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
		state.sCount[nextLine] = offset;
		if (contentStart >= max && state.isEmpty(nextLine + 1)) state.line = Math.min(state.line + 2, endLine);
		else state.md.block.tokenize(state, nextLine, endLine, true);
		if (!state.tight || prevEmptyEnd) tight = false;
		prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
		state.blkIndent = state.listIndent;
		state.listIndent = oldListIndent;
		state.tShift[nextLine] = oldTShift;
		state.sCount[nextLine] = oldSCount;
		state.tight = oldTight;
		token = state.push("list_item_close", "li", -1);
		token.markup = String.fromCharCode(markerCharCode);
		nextLine = state.line;
		itemLines[1] = nextLine;
		if (nextLine >= endLine) break;
		if (state.sCount[nextLine] < state.blkIndent) break;
		if (state.sCount[nextLine] - state.blkIndent >= 4) break;
		let terminate = false;
		for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
			terminate = true;
			break;
		}
		if (terminate) break;
		if (isOrdered) {
			posAfterMarker = skipOrderedListMarker(state, nextLine);
			if (posAfterMarker < 0) break;
			start = state.bMarks[nextLine] + state.tShift[nextLine];
		} else {
			posAfterMarker = skipBulletListMarker(state, nextLine);
			if (posAfterMarker < 0) break;
		}
		if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) break;
	}
	if (isOrdered) token = state.push("ordered_list_close", "ol", -1);
	else token = state.push("bullet_list_close", "ul", -1);
	token.markup = String.fromCharCode(markerCharCode);
	listLines[1] = nextLine;
	state.line = nextLine;
	state.parentType = oldParentType;
	if (tight) markTightParagraphs(state, listTokIdx);
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/reference.mjs
function reference(state, startLine, _endLine, silent) {
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	let nextLine = startLine + 1;
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	if (state.src.charCodeAt(pos) !== 91) return false;
	function getNextLine(nextLine) {
		const endLine = state.lineMax;
		if (nextLine >= endLine || state.isEmpty(nextLine)) return null;
		let isContinuation = false;
		if (state.sCount[nextLine] - state.blkIndent > 3) isContinuation = true;
		if (state.sCount[nextLine] < 0) isContinuation = true;
		if (!isContinuation) {
			const terminatorRules = state.md.block.ruler.getRules("reference");
			const oldParentType = state.parentType;
			state.parentType = "reference";
			let terminate = false;
			for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
				terminate = true;
				break;
			}
			state.parentType = oldParentType;
			if (terminate) return null;
		}
		const pos = state.bMarks[nextLine] + state.tShift[nextLine];
		const max = state.eMarks[nextLine];
		return state.src.slice(pos, max + 1);
	}
	let str = state.src.slice(pos, max + 1);
	max = str.length;
	let labelEnd = -1;
	for (pos = 1; pos < max; pos++) {
		const ch = str.charCodeAt(pos);
		if (ch === 91) return false;
		else if (ch === 93) {
			labelEnd = pos;
			break;
		} else if (ch === 10) {
			const lineContent = getNextLine(nextLine);
			if (lineContent !== null) {
				str += lineContent;
				max = str.length;
				nextLine++;
			}
		} else if (ch === 92) {
			pos++;
			if (pos < max && str.charCodeAt(pos) === 10) {
				const lineContent = getNextLine(nextLine);
				if (lineContent !== null) {
					str += lineContent;
					max = str.length;
					nextLine++;
				}
			}
		}
	}
	if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) return false;
	for (pos = labelEnd + 2; pos < max; pos++) {
		const ch = str.charCodeAt(pos);
		if (ch === 10) {
			const lineContent = getNextLine(nextLine);
			if (lineContent !== null) {
				str += lineContent;
				max = str.length;
				nextLine++;
			}
		} else if (isSpace(ch)) {} else break;
	}
	const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
	if (!destRes.ok) return false;
	const href = state.md.normalizeLink(destRes.str);
	if (!state.md.validateLink(href)) return false;
	pos = destRes.pos;
	const destEndPos = pos;
	const destEndLineNo = nextLine;
	const start = pos;
	for (; pos < max; pos++) {
		const ch = str.charCodeAt(pos);
		if (ch === 10) {
			const lineContent = getNextLine(nextLine);
			if (lineContent !== null) {
				str += lineContent;
				max = str.length;
				nextLine++;
			}
		} else if (isSpace(ch)) {} else break;
	}
	let titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
	while (titleRes.can_continue) {
		const lineContent = getNextLine(nextLine);
		if (lineContent === null) break;
		str += lineContent;
		pos = max;
		max = str.length;
		nextLine++;
		titleRes = state.md.helpers.parseLinkTitle(str, pos, max, titleRes);
	}
	let title;
	if (pos < max && start !== pos && titleRes.ok) {
		title = titleRes.str;
		pos = titleRes.pos;
	} else {
		title = "";
		pos = destEndPos;
		nextLine = destEndLineNo;
	}
	while (pos < max) {
		if (!isSpace(str.charCodeAt(pos))) break;
		pos++;
	}
	if (pos < max && str.charCodeAt(pos) !== 10) {
		if (title) {
			title = "";
			pos = destEndPos;
			nextLine = destEndLineNo;
			while (pos < max) {
				if (!isSpace(str.charCodeAt(pos))) break;
				pos++;
			}
		}
	}
	if (pos < max && str.charCodeAt(pos) !== 10) return false;
	const label = normalizeReference(str.slice(1, labelEnd));
	if (!label) return false;
	/* istanbul ignore if */
	if (silent) return true;
	if (typeof state.env.references === "undefined") state.env.references = {};
	if (typeof state.env.references[label] === "undefined") state.env.references[label] = {
		title,
		href
	};
	state.line = nextLine;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/common/html_blocks.mjs
var html_blocks_default = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
];
//#endregion
//#region node_modules/markdown-it/lib/common/html_re.mjs
var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>";
var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)");
var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)");
//#endregion
//#region node_modules/markdown-it/lib/rules_block/html_block.mjs
var HTML_SEQUENCES = [
	[
		/^<(script|pre|style|textarea)(?=(\s|>|$))/i,
		/<\/(script|pre|style|textarea)>/i,
		true
	],
	[
		/^<!--/,
		/-->/,
		true
	],
	[
		/^<\?/,
		/\?>/,
		true
	],
	[
		/^<![A-Z]/,
		/>/,
		true
	],
	[
		/^<!\[CDATA\[/,
		/\]\]>/,
		true
	],
	[
		new RegExp("^</?(" + html_blocks_default.join("|") + ")(?=(\\s|/?>|$))", "i"),
		/^$/,
		true
	],
	[
		new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"),
		/^$/,
		false
	]
];
function html_block(state, startLine, endLine, silent) {
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	if (!state.md.options.html) return false;
	if (state.src.charCodeAt(pos) !== 60) return false;
	let lineText = state.src.slice(pos, max);
	let i = 0;
	for (; i < HTML_SEQUENCES.length; i++) if (HTML_SEQUENCES[i][0].test(lineText)) break;
	if (i === HTML_SEQUENCES.length) return false;
	if (silent) return HTML_SEQUENCES[i][2];
	let nextLine = startLine + 1;
	if (!HTML_SEQUENCES[i][1].test(lineText)) for (; nextLine < endLine; nextLine++) {
		if (state.sCount[nextLine] < state.blkIndent) break;
		pos = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		lineText = state.src.slice(pos, max);
		if (HTML_SEQUENCES[i][1].test(lineText)) {
			if (lineText.length !== 0) nextLine++;
			break;
		}
	}
	state.line = nextLine;
	const token = state.push("html_block", "", 0);
	token.map = [startLine, nextLine];
	token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/heading.mjs
function heading(state, startLine, endLine, silent) {
	let pos = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	let ch = state.src.charCodeAt(pos);
	if (ch !== 35 || pos >= max) return false;
	let level = 1;
	ch = state.src.charCodeAt(++pos);
	while (ch === 35 && pos < max && level <= 6) {
		level++;
		ch = state.src.charCodeAt(++pos);
	}
	if (level > 6 || pos < max && !isSpace(ch)) return false;
	if (silent) return true;
	max = state.skipSpacesBack(max, pos);
	const tmp = state.skipCharsBack(max, 35, pos);
	if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) max = tmp;
	state.line = startLine + 1;
	const token_o = state.push("heading_open", "h" + String(level), 1);
	token_o.markup = "########".slice(0, level);
	token_o.map = [startLine, state.line];
	const token_i = state.push("inline", "", 0);
	token_i.content = state.src.slice(pos, max).trim();
	token_i.map = [startLine, state.line];
	token_i.children = [];
	const token_c = state.push("heading_close", "h" + String(level), -1);
	token_c.markup = "########".slice(0, level);
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/lheading.mjs
function lheading(state, startLine, endLine) {
	const terminatorRules = state.md.block.ruler.getRules("paragraph");
	if (state.sCount[startLine] - state.blkIndent >= 4) return false;
	const oldParentType = state.parentType;
	state.parentType = "paragraph";
	let level = 0;
	let marker;
	let nextLine = startLine + 1;
	for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
		if (state.sCount[nextLine] - state.blkIndent > 3) continue;
		if (state.sCount[nextLine] >= state.blkIndent) {
			let pos = state.bMarks[nextLine] + state.tShift[nextLine];
			const max = state.eMarks[nextLine];
			if (pos < max) {
				marker = state.src.charCodeAt(pos);
				if (marker === 45 || marker === 61) {
					pos = state.skipChars(pos, marker);
					pos = state.skipSpaces(pos);
					if (pos >= max) {
						level = marker === 61 ? 1 : 2;
						break;
					}
				}
			}
		}
		if (state.sCount[nextLine] < 0) continue;
		let terminate = false;
		for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
			terminate = true;
			break;
		}
		if (terminate) break;
	}
	if (!level) return false;
	const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	state.line = nextLine + 1;
	const token_o = state.push("heading_open", "h" + String(level), 1);
	token_o.markup = String.fromCharCode(marker);
	token_o.map = [startLine, state.line];
	const token_i = state.push("inline", "", 0);
	token_i.content = content;
	token_i.map = [startLine, state.line - 1];
	token_i.children = [];
	const token_c = state.push("heading_close", "h" + String(level), -1);
	token_c.markup = String.fromCharCode(marker);
	state.parentType = oldParentType;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_block/paragraph.mjs
function paragraph(state, startLine, endLine) {
	const terminatorRules = state.md.block.ruler.getRules("paragraph");
	const oldParentType = state.parentType;
	let nextLine = startLine + 1;
	state.parentType = "paragraph";
	for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
		if (state.sCount[nextLine] - state.blkIndent > 3) continue;
		if (state.sCount[nextLine] < 0) continue;
		let terminate = false;
		for (let i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, true)) {
			terminate = true;
			break;
		}
		if (terminate) break;
	}
	const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	state.line = nextLine;
	const token_o = state.push("paragraph_open", "p", 1);
	token_o.map = [startLine, state.line];
	const token_i = state.push("inline", "", 0);
	token_i.content = content;
	token_i.map = [startLine, state.line];
	token_i.children = [];
	state.push("paragraph_close", "p", -1);
	state.parentType = oldParentType;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/parser_block.mjs
/** internal
* class ParserBlock
*
* Block-level tokenizer.
**/
var _rules$1 = [
	[
		"table",
		table,
		["paragraph", "reference"]
	],
	["code", code$1],
	[
		"fence",
		fence,
		[
			"paragraph",
			"reference",
			"blockquote",
			"list"
		]
	],
	[
		"blockquote",
		blockquote,
		[
			"paragraph",
			"reference",
			"blockquote",
			"list"
		]
	],
	[
		"hr",
		hr,
		[
			"paragraph",
			"reference",
			"blockquote",
			"list"
		]
	],
	[
		"list",
		list,
		[
			"paragraph",
			"reference",
			"blockquote"
		]
	],
	["reference", reference],
	[
		"html_block",
		html_block,
		[
			"paragraph",
			"reference",
			"blockquote"
		]
	],
	[
		"heading",
		heading,
		[
			"paragraph",
			"reference",
			"blockquote"
		]
	],
	["lheading", lheading],
	["paragraph", paragraph]
];
/**
* new ParserBlock()
**/
function ParserBlock() {
	/**
	* ParserBlock#ruler -> Ruler
	*
	* [[Ruler]] instance. Keep configuration of block rules.
	**/
	this.ruler = new Ruler();
	for (let i = 0; i < _rules$1.length; i++) this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
	const rules = this.ruler.getRules("");
	const len = rules.length;
	const maxNesting = state.md.options.maxNesting;
	let line = startLine;
	let hasEmptyLines = false;
	while (line < endLine) {
		state.line = line = state.skipEmptyLines(line);
		if (line >= endLine) break;
		if (state.sCount[line] < state.blkIndent) break;
		if (state.level >= maxNesting) {
			state.line = endLine;
			break;
		}
		const prevLine = state.line;
		let ok = false;
		for (let i = 0; i < len; i++) {
			ok = rules[i](state, line, endLine, false);
			if (ok) {
				if (prevLine >= state.line) throw new Error("block rule didn't increment state.line");
				break;
			}
		}
		if (!ok) throw new Error("none of the block rules matched");
		state.tight = !hasEmptyLines;
		if (state.isEmpty(state.line - 1)) hasEmptyLines = true;
		line = state.line;
		if (line < endLine && state.isEmpty(line)) {
			hasEmptyLines = true;
			line++;
			state.line = line;
		}
	}
};
/**
* ParserBlock.parse(str, md, env, outTokens)
*
* Process input string and push block tokens into `outTokens`
**/
ParserBlock.prototype.parse = function(src, md, env, outTokens) {
	if (!src) return;
	const state = new this.State(src, md, env, outTokens);
	this.tokenize(state, state.line, state.lineMax);
};
ParserBlock.prototype.State = StateBlock;
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/state_inline.mjs
function StateInline(src, md, env, outTokens) {
	this.src = src;
	this.env = env;
	this.md = md;
	this.tokens = outTokens;
	this.tokens_meta = Array(outTokens.length);
	this.pos = 0;
	this.posMax = this.src.length;
	this.level = 0;
	this.pending = "";
	this.pendingLevel = 0;
	this.cache = {};
	this.delimiters = [];
	this._prev_delimiters = [];
	this.backticks = {};
	this.backticksScanned = false;
	this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
	const token = new Token("text", "", 0);
	token.content = this.pending;
	token.level = this.pendingLevel;
	this.tokens.push(token);
	this.pending = "";
	return token;
};
StateInline.prototype.push = function(type, tag, nesting) {
	if (this.pending) this.pushPending();
	const token = new Token(type, tag, nesting);
	let token_meta = null;
	if (nesting < 0) {
		this.level--;
		this.delimiters = this._prev_delimiters.pop();
	}
	token.level = this.level;
	if (nesting > 0) {
		this.level++;
		this._prev_delimiters.push(this.delimiters);
		this.delimiters = [];
		token_meta = { delimiters: this.delimiters };
	}
	this.pendingLevel = this.level;
	this.tokens.push(token);
	this.tokens_meta.push(token_meta);
	return token;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
	const max = this.posMax;
	const marker = this.src.charCodeAt(start);
	const lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
	let pos = start;
	while (pos < max && this.src.charCodeAt(pos) === marker) pos++;
	const count = pos - start;
	const nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
	const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
	const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
	const isLastWhiteSpace = isWhiteSpace(lastChar);
	const isNextWhiteSpace = isWhiteSpace(nextChar);
	const left_flanking = !isNextWhiteSpace && (!isNextPunctChar || isLastWhiteSpace || isLastPunctChar);
	const right_flanking = !isLastWhiteSpace && (!isLastPunctChar || isNextWhiteSpace || isNextPunctChar);
	return {
		can_open: left_flanking && (canSplitWord || !right_flanking || isLastPunctChar),
		can_close: right_flanking && (canSplitWord || !left_flanking || isNextPunctChar),
		length: count
	};
};
StateInline.prototype.Token = Token;
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/text.mjs
function isTerminatorChar(ch) {
	switch (ch) {
		case 10:
		case 33:
		case 35:
		case 36:
		case 37:
		case 38:
		case 42:
		case 43:
		case 45:
		case 58:
		case 60:
		case 61:
		case 62:
		case 64:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123:
		case 125:
		case 126: return true;
		default: return false;
	}
}
function text(state, silent) {
	let pos = state.pos;
	while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) pos++;
	if (pos === state.pos) return false;
	if (!silent) state.pending += state.src.slice(state.pos, pos);
	state.pos = pos;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/linkify.mjs
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function linkify(state, silent) {
	if (!state.md.options.linkify) return false;
	if (state.linkLevel > 0) return false;
	const pos = state.pos;
	const max = state.posMax;
	if (pos + 3 > max) return false;
	if (state.src.charCodeAt(pos) !== 58) return false;
	if (state.src.charCodeAt(pos + 1) !== 47) return false;
	if (state.src.charCodeAt(pos + 2) !== 47) return false;
	const match = state.pending.match(SCHEME_RE);
	if (!match) return false;
	const proto = match[1];
	const link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
	if (!link) return false;
	let url = link.url;
	if (url.length <= proto.length) return false;
	url = url.replace(/\*+$/, "");
	const fullUrl = state.md.normalizeLink(url);
	if (!state.md.validateLink(fullUrl)) return false;
	if (!silent) {
		state.pending = state.pending.slice(0, -proto.length);
		const token_o = state.push("link_open", "a", 1);
		token_o.attrs = [["href", fullUrl]];
		token_o.markup = "linkify";
		token_o.info = "auto";
		const token_t = state.push("text", "", 0);
		token_t.content = state.md.normalizeLinkText(url);
		const token_c = state.push("link_close", "a", -1);
		token_c.markup = "linkify";
		token_c.info = "auto";
	}
	state.pos += url.length - proto.length;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/newline.mjs
function newline(state, silent) {
	let pos = state.pos;
	if (state.src.charCodeAt(pos) !== 10) return false;
	const pmax = state.pending.length - 1;
	const max = state.posMax;
	if (!silent) if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
		let ws = pmax - 1;
		while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32) ws--;
		state.pending = state.pending.slice(0, ws);
		state.push("hardbreak", "br", 0);
	} else {
		state.pending = state.pending.slice(0, -1);
		state.push("softbreak", "br", 0);
	}
	else state.push("softbreak", "br", 0);
	pos++;
	while (pos < max && isSpace(state.src.charCodeAt(pos))) pos++;
	state.pos = pos;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/escape.mjs
var ESCAPED = [];
for (let i = 0; i < 256; i++) ESCAPED.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
	ESCAPED[ch.charCodeAt(0)] = 1;
});
function escape(state, silent) {
	let pos = state.pos;
	const max = state.posMax;
	if (state.src.charCodeAt(pos) !== 92) return false;
	pos++;
	if (pos >= max) return false;
	let ch1 = state.src.charCodeAt(pos);
	if (ch1 === 10) {
		if (!silent) state.push("hardbreak", "br", 0);
		pos++;
		while (pos < max) {
			ch1 = state.src.charCodeAt(pos);
			if (!isSpace(ch1)) break;
			pos++;
		}
		state.pos = pos;
		return true;
	}
	let escapedStr = state.src[pos];
	if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
		const ch2 = state.src.charCodeAt(pos + 1);
		if (ch2 >= 56320 && ch2 <= 57343) {
			escapedStr += state.src[pos + 1];
			pos++;
		}
	}
	const origStr = "\\" + escapedStr;
	if (!silent) {
		const token = state.push("text_special", "", 0);
		if (ch1 < 256 && ESCAPED[ch1] !== 0) token.content = escapedStr;
		else token.content = origStr;
		token.markup = origStr;
		token.info = "escape";
	}
	state.pos = pos + 1;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/backticks.mjs
function backtick(state, silent) {
	let pos = state.pos;
	if (state.src.charCodeAt(pos) !== 96) return false;
	const start = pos;
	pos++;
	const max = state.posMax;
	while (pos < max && state.src.charCodeAt(pos) === 96) pos++;
	const marker = state.src.slice(start, pos);
	const openerLength = marker.length;
	if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
		if (!silent) state.pending += marker;
		state.pos += openerLength;
		return true;
	}
	let matchEnd = pos;
	let matchStart;
	while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
		matchEnd = matchStart + 1;
		while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) matchEnd++;
		const closerLength = matchEnd - matchStart;
		if (closerLength === openerLength) {
			if (!silent) {
				const token = state.push("code_inline", "code", 0);
				token.markup = marker;
				token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
			}
			state.pos = matchEnd;
			return true;
		}
		state.backticks[closerLength] = matchStart;
	}
	state.backticksScanned = true;
	if (!silent) state.pending += marker;
	state.pos += openerLength;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/strikethrough.mjs
function strikethrough_tokenize(state, silent) {
	const start = state.pos;
	const marker = state.src.charCodeAt(start);
	if (silent) return false;
	if (marker !== 126) return false;
	const scanned = state.scanDelims(state.pos, true);
	let len = scanned.length;
	const ch = String.fromCharCode(marker);
	if (len < 2) return false;
	let token;
	if (len % 2) {
		token = state.push("text", "", 0);
		token.content = ch;
		len--;
	}
	for (let i = 0; i < len; i += 2) {
		token = state.push("text", "", 0);
		token.content = ch + ch;
		state.delimiters.push({
			marker,
			length: 0,
			token: state.tokens.length - 1,
			end: -1,
			open: scanned.can_open,
			close: scanned.can_close
		});
	}
	state.pos += scanned.length;
	return true;
}
function postProcess$1(state, delimiters) {
	let token;
	const loneMarkers = [];
	const max = delimiters.length;
	for (let i = 0; i < max; i++) {
		const startDelim = delimiters[i];
		if (startDelim.marker !== 126) continue;
		if (startDelim.end === -1) continue;
		const endDelim = delimiters[startDelim.end];
		token = state.tokens[startDelim.token];
		token.type = "s_open";
		token.tag = "s";
		token.nesting = 1;
		token.markup = "~~";
		token.content = "";
		token = state.tokens[endDelim.token];
		token.type = "s_close";
		token.tag = "s";
		token.nesting = -1;
		token.markup = "~~";
		token.content = "";
		if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") loneMarkers.push(endDelim.token - 1);
	}
	while (loneMarkers.length) {
		const i = loneMarkers.pop();
		let j = i + 1;
		while (j < state.tokens.length && state.tokens[j].type === "s_close") j++;
		j--;
		if (i !== j) {
			token = state.tokens[j];
			state.tokens[j] = state.tokens[i];
			state.tokens[i] = token;
		}
	}
}
function strikethrough_postProcess(state) {
	const tokens_meta = state.tokens_meta;
	const max = state.tokens_meta.length;
	postProcess$1(state, state.delimiters);
	for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess$1(state, tokens_meta[curr].delimiters);
}
var strikethrough_default = {
	tokenize: strikethrough_tokenize,
	postProcess: strikethrough_postProcess
};
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/emphasis.mjs
function emphasis_tokenize(state, silent) {
	const start = state.pos;
	const marker = state.src.charCodeAt(start);
	if (silent) return false;
	if (marker !== 95 && marker !== 42) return false;
	const scanned = state.scanDelims(state.pos, marker === 42);
	for (let i = 0; i < scanned.length; i++) {
		const token = state.push("text", "", 0);
		token.content = String.fromCharCode(marker);
		state.delimiters.push({
			marker,
			length: scanned.length,
			token: state.tokens.length - 1,
			end: -1,
			open: scanned.can_open,
			close: scanned.can_close
		});
	}
	state.pos += scanned.length;
	return true;
}
function postProcess(state, delimiters) {
	const max = delimiters.length;
	for (let i = max - 1; i >= 0; i--) {
		const startDelim = delimiters[i];
		if (startDelim.marker !== 95 && startDelim.marker !== 42) continue;
		if (startDelim.end === -1) continue;
		const endDelim = delimiters[startDelim.end];
		const isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
		const ch = String.fromCharCode(startDelim.marker);
		const token_o = state.tokens[startDelim.token];
		token_o.type = isStrong ? "strong_open" : "em_open";
		token_o.tag = isStrong ? "strong" : "em";
		token_o.nesting = 1;
		token_o.markup = isStrong ? ch + ch : ch;
		token_o.content = "";
		const token_c = state.tokens[endDelim.token];
		token_c.type = isStrong ? "strong_close" : "em_close";
		token_c.tag = isStrong ? "strong" : "em";
		token_c.nesting = -1;
		token_c.markup = isStrong ? ch + ch : ch;
		token_c.content = "";
		if (isStrong) {
			state.tokens[delimiters[i - 1].token].content = "";
			state.tokens[delimiters[startDelim.end + 1].token].content = "";
			i--;
		}
	}
}
function emphasis_post_process(state) {
	const tokens_meta = state.tokens_meta;
	const max = state.tokens_meta.length;
	postProcess(state, state.delimiters);
	for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess(state, tokens_meta[curr].delimiters);
}
var emphasis_default = {
	tokenize: emphasis_tokenize,
	postProcess: emphasis_post_process
};
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/link.mjs
function link(state, silent) {
	let code, label, res, ref;
	let href = "";
	let title = "";
	let start = state.pos;
	let parseReference = true;
	if (state.src.charCodeAt(state.pos) !== 91) return false;
	const oldPos = state.pos;
	const max = state.posMax;
	const labelStart = state.pos + 1;
	const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
	if (labelEnd < 0) return false;
	let pos = labelEnd + 1;
	if (pos < max && state.src.charCodeAt(pos) === 40) {
		parseReference = false;
		pos++;
		for (; pos < max; pos++) {
			code = state.src.charCodeAt(pos);
			if (!isSpace(code) && code !== 10) break;
		}
		if (pos >= max) return false;
		start = pos;
		res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
		if (res.ok) {
			href = state.md.normalizeLink(res.str);
			if (state.md.validateLink(href)) pos = res.pos;
			else href = "";
			start = pos;
			for (; pos < max; pos++) {
				code = state.src.charCodeAt(pos);
				if (!isSpace(code) && code !== 10) break;
			}
			res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
			if (pos < max && start !== pos && res.ok) {
				title = res.str;
				pos = res.pos;
				for (; pos < max; pos++) {
					code = state.src.charCodeAt(pos);
					if (!isSpace(code) && code !== 10) break;
				}
			}
		}
		if (pos >= max || state.src.charCodeAt(pos) !== 41) parseReference = true;
		pos++;
	}
	if (parseReference) {
		if (typeof state.env.references === "undefined") return false;
		if (pos < max && state.src.charCodeAt(pos) === 91) {
			start = pos + 1;
			pos = state.md.helpers.parseLinkLabel(state, pos);
			if (pos >= 0) label = state.src.slice(start, pos++);
			else pos = labelEnd + 1;
		} else pos = labelEnd + 1;
		if (!label) label = state.src.slice(labelStart, labelEnd);
		ref = state.env.references[normalizeReference(label)];
		if (!ref) {
			state.pos = oldPos;
			return false;
		}
		href = ref.href;
		title = ref.title;
	}
	if (!silent) {
		state.pos = labelStart;
		state.posMax = labelEnd;
		const token_o = state.push("link_open", "a", 1);
		const attrs = [["href", href]];
		token_o.attrs = attrs;
		if (title) attrs.push(["title", title]);
		state.linkLevel++;
		state.md.inline.tokenize(state);
		state.linkLevel--;
		state.push("link_close", "a", -1);
	}
	state.pos = pos;
	state.posMax = max;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/image.mjs
function image(state, silent) {
	let code, content, label, pos, ref, res, title, start;
	let href = "";
	const oldPos = state.pos;
	const max = state.posMax;
	if (state.src.charCodeAt(state.pos) !== 33) return false;
	if (state.src.charCodeAt(state.pos + 1) !== 91) return false;
	const labelStart = state.pos + 2;
	const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
	if (labelEnd < 0) return false;
	pos = labelEnd + 1;
	if (pos < max && state.src.charCodeAt(pos) === 40) {
		pos++;
		for (; pos < max; pos++) {
			code = state.src.charCodeAt(pos);
			if (!isSpace(code) && code !== 10) break;
		}
		if (pos >= max) return false;
		start = pos;
		res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
		if (res.ok) {
			href = state.md.normalizeLink(res.str);
			if (state.md.validateLink(href)) pos = res.pos;
			else href = "";
		}
		start = pos;
		for (; pos < max; pos++) {
			code = state.src.charCodeAt(pos);
			if (!isSpace(code) && code !== 10) break;
		}
		res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
		if (pos < max && start !== pos && res.ok) {
			title = res.str;
			pos = res.pos;
			for (; pos < max; pos++) {
				code = state.src.charCodeAt(pos);
				if (!isSpace(code) && code !== 10) break;
			}
		} else title = "";
		if (pos >= max || state.src.charCodeAt(pos) !== 41) {
			state.pos = oldPos;
			return false;
		}
		pos++;
	} else {
		if (typeof state.env.references === "undefined") return false;
		if (pos < max && state.src.charCodeAt(pos) === 91) {
			start = pos + 1;
			pos = state.md.helpers.parseLinkLabel(state, pos);
			if (pos >= 0) label = state.src.slice(start, pos++);
			else pos = labelEnd + 1;
		} else pos = labelEnd + 1;
		if (!label) label = state.src.slice(labelStart, labelEnd);
		ref = state.env.references[normalizeReference(label)];
		if (!ref) {
			state.pos = oldPos;
			return false;
		}
		href = ref.href;
		title = ref.title;
	}
	if (!silent) {
		content = state.src.slice(labelStart, labelEnd);
		const tokens = [];
		state.md.inline.parse(content, state.md, state.env, tokens);
		const token = state.push("image", "img", 0);
		const attrs = [["src", href], ["alt", ""]];
		token.attrs = attrs;
		token.children = tokens;
		token.content = content;
		if (title) attrs.push(["title", title]);
	}
	state.pos = pos;
	state.posMax = max;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/autolink.mjs
var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function autolink(state, silent) {
	let pos = state.pos;
	if (state.src.charCodeAt(pos) !== 60) return false;
	const start = state.pos;
	const max = state.posMax;
	for (;;) {
		if (++pos >= max) return false;
		const ch = state.src.charCodeAt(pos);
		if (ch === 60) return false;
		if (ch === 62) break;
	}
	const url = state.src.slice(start + 1, pos);
	if (AUTOLINK_RE.test(url)) {
		const fullUrl = state.md.normalizeLink(url);
		if (!state.md.validateLink(fullUrl)) return false;
		if (!silent) {
			const token_o = state.push("link_open", "a", 1);
			token_o.attrs = [["href", fullUrl]];
			token_o.markup = "autolink";
			token_o.info = "auto";
			const token_t = state.push("text", "", 0);
			token_t.content = state.md.normalizeLinkText(url);
			const token_c = state.push("link_close", "a", -1);
			token_c.markup = "autolink";
			token_c.info = "auto";
		}
		state.pos += url.length + 2;
		return true;
	}
	if (EMAIL_RE.test(url)) {
		const fullUrl = state.md.normalizeLink("mailto:" + url);
		if (!state.md.validateLink(fullUrl)) return false;
		if (!silent) {
			const token_o = state.push("link_open", "a", 1);
			token_o.attrs = [["href", fullUrl]];
			token_o.markup = "autolink";
			token_o.info = "auto";
			const token_t = state.push("text", "", 0);
			token_t.content = state.md.normalizeLinkText(url);
			const token_c = state.push("link_close", "a", -1);
			token_c.markup = "autolink";
			token_c.info = "auto";
		}
		state.pos += url.length + 2;
		return true;
	}
	return false;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/html_inline.mjs
function isLinkOpen(str) {
	return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
	return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
	const lc = ch | 32;
	return lc >= 97 && lc <= 122;
}
function html_inline(state, silent) {
	if (!state.md.options.html) return false;
	const max = state.posMax;
	const pos = state.pos;
	if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) return false;
	const ch = state.src.charCodeAt(pos + 1);
	if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) return false;
	const match = state.src.slice(pos).match(HTML_TAG_RE);
	if (!match) return false;
	if (!silent) {
		const token = state.push("html_inline", "", 0);
		token.content = match[0];
		if (isLinkOpen(token.content)) state.linkLevel++;
		if (isLinkClose(token.content)) state.linkLevel--;
	}
	state.pos += match[0].length;
	return true;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/entity.mjs
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
function entity(state, silent) {
	const pos = state.pos;
	const max = state.posMax;
	if (state.src.charCodeAt(pos) !== 38) return false;
	if (pos + 1 >= max) return false;
	if (state.src.charCodeAt(pos + 1) === 35) {
		const match = state.src.slice(pos).match(DIGITAL_RE);
		if (match) {
			if (!silent) {
				const code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
				const token = state.push("text_special", "", 0);
				token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
				token.markup = match[0];
				token.info = "entity";
			}
			state.pos += match[0].length;
			return true;
		}
	} else {
		const match = state.src.slice(pos).match(NAMED_RE);
		if (match) {
			const decoded = decodeHTML(match[0]);
			if (decoded !== match[0]) {
				if (!silent) {
					const token = state.push("text_special", "", 0);
					token.content = decoded;
					token.markup = match[0];
					token.info = "entity";
				}
				state.pos += match[0].length;
				return true;
			}
		}
	}
	return false;
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/balance_pairs.mjs
function processDelimiters(delimiters) {
	const openersBottom = {};
	const max = delimiters.length;
	if (!max) return;
	let headerIdx = 0;
	let lastTokenIdx = -2;
	const jumps = [];
	for (let closerIdx = 0; closerIdx < max; closerIdx++) {
		const closer = delimiters[closerIdx];
		jumps.push(0);
		if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) headerIdx = closerIdx;
		lastTokenIdx = closer.token;
		closer.length = closer.length || 0;
		if (!closer.close) continue;
		if (!openersBottom.hasOwnProperty(closer.marker)) openersBottom[closer.marker] = [
			-1,
			-1,
			-1,
			-1,
			-1,
			-1
		];
		const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
		let openerIdx = headerIdx - jumps[headerIdx] - 1;
		let newMinOpenerIdx = openerIdx;
		for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
			const opener = delimiters[openerIdx];
			if (opener.marker !== closer.marker) continue;
			if (opener.open && opener.end < 0) {
				let isOddMatch = false;
				if (opener.close || closer.open) {
					if ((opener.length + closer.length) % 3 === 0) {
						if (opener.length % 3 !== 0 || closer.length % 3 !== 0) isOddMatch = true;
					}
				}
				if (!isOddMatch) {
					const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
					jumps[closerIdx] = closerIdx - openerIdx + lastJump;
					jumps[openerIdx] = lastJump;
					closer.open = false;
					opener.end = closerIdx;
					opener.close = false;
					newMinOpenerIdx = -1;
					lastTokenIdx = -2;
					break;
				}
			}
		}
		if (newMinOpenerIdx !== -1) openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
	}
}
function link_pairs(state) {
	const tokens_meta = state.tokens_meta;
	const max = state.tokens_meta.length;
	processDelimiters(state.delimiters);
	for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) processDelimiters(tokens_meta[curr].delimiters);
}
//#endregion
//#region node_modules/markdown-it/lib/rules_inline/fragments_join.mjs
function fragments_join(state) {
	let curr, last;
	let level = 0;
	const tokens = state.tokens;
	const max = state.tokens.length;
	for (curr = last = 0; curr < max; curr++) {
		if (tokens[curr].nesting < 0) level--;
		tokens[curr].level = level;
		if (tokens[curr].nesting > 0) level++;
		if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
		else {
			if (curr !== last) tokens[last] = tokens[curr];
			last++;
		}
	}
	if (curr !== last) tokens.length = last;
}
//#endregion
//#region node_modules/markdown-it/lib/parser_inline.mjs
/** internal
* class ParserInline
*
* Tokenizes paragraph content.
**/
var _rules = [
	["text", text],
	["linkify", linkify],
	["newline", newline],
	["escape", escape],
	["backticks", backtick],
	["strikethrough", strikethrough_default.tokenize],
	["emphasis", emphasis_default.tokenize],
	["link", link],
	["image", image],
	["autolink", autolink],
	["html_inline", html_inline],
	["entity", entity]
];
var _rules2 = [
	["balance_pairs", link_pairs],
	["strikethrough", strikethrough_default.postProcess],
	["emphasis", emphasis_default.postProcess],
	["fragments_join", fragments_join]
];
/**
* new ParserInline()
**/
function ParserInline() {
	/**
	* ParserInline#ruler -> Ruler
	*
	* [[Ruler]] instance. Keep configuration of inline rules.
	**/
	this.ruler = new Ruler();
	for (let i = 0; i < _rules.length; i++) this.ruler.push(_rules[i][0], _rules[i][1]);
	/**
	* ParserInline#ruler2 -> Ruler
	*
	* [[Ruler]] instance. Second ruler used for post-processing
	* (e.g. in emphasis-like rules).
	**/
	this.ruler2 = new Ruler();
	for (let i = 0; i < _rules2.length; i++) this.ruler2.push(_rules2[i][0], _rules2[i][1]);
}
ParserInline.prototype.skipToken = function(state) {
	const pos = state.pos;
	const rules = this.ruler.getRules("");
	const len = rules.length;
	const maxNesting = state.md.options.maxNesting;
	const cache = state.cache;
	if (typeof cache[pos] !== "undefined") {
		state.pos = cache[pos];
		return;
	}
	let ok = false;
	if (state.level < maxNesting) for (let i = 0; i < len; i++) {
		state.level++;
		ok = rules[i](state, true);
		state.level--;
		if (ok) {
			if (pos >= state.pos) throw new Error("inline rule didn't increment state.pos");
			break;
		}
	}
	else state.pos = state.posMax;
	if (!ok) state.pos++;
	cache[pos] = state.pos;
};
ParserInline.prototype.tokenize = function(state) {
	const rules = this.ruler.getRules("");
	const len = rules.length;
	const end = state.posMax;
	const maxNesting = state.md.options.maxNesting;
	while (state.pos < end) {
		const prevPos = state.pos;
		let ok = false;
		if (state.level < maxNesting) for (let i = 0; i < len; i++) {
			ok = rules[i](state, false);
			if (ok) {
				if (prevPos >= state.pos) throw new Error("inline rule didn't increment state.pos");
				break;
			}
		}
		if (ok) {
			if (state.pos >= end) break;
			continue;
		}
		state.pending += state.src[state.pos++];
	}
	if (state.pending) state.pushPending();
};
/**
* ParserInline.parse(str, md, env, outTokens)
*
* Process input string and push inline tokens into `outTokens`
**/
ParserInline.prototype.parse = function(str, md, env, outTokens) {
	const state = new this.State(str, md, env, outTokens);
	this.tokenize(state);
	const rules = this.ruler2.getRules("");
	const len = rules.length;
	for (let i = 0; i < len; i++) rules[i](state);
};
ParserInline.prototype.State = StateInline;
//#endregion
//#region node_modules/linkify-it/lib/re.mjs
function re_default(opts) {
	const re = {};
	opts = opts || {};
	re.src_Any = regex_default$5.source;
	re.src_Cc = regex_default$4.source;
	re.src_Z = regex_default.source;
	re.src_P = regex_default$2.source;
	re.src_ZPCc = [
		re.src_Z,
		re.src_P,
		re.src_Cc
	].join("|");
	re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
	const text_separators = "[><｜]";
	re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
	re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
	re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
	re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
	re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
	re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + "|[}]).)*\\}|\\\"(?:(?!" + re.src_ZCc + "|[\"]).)+\\\"|\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
	re.src_email_name = "[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\\"\\.a-zA-Z0-9_]*";
	re.src_xn = "xn--[a-z0-9\\-]{1,59}";
	re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
	re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
	re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
	re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
	re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
	re.src_host_strict = re.src_host + re.src_host_terminator;
	re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
	re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
	re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
	re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
	re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
	re.tpl_email_fuzzy = "(^|" + text_separators + "|\"|\\(|" + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
	re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
	re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
	return re;
}
//#endregion
//#region node_modules/linkify-it/index.mjs
function assign(obj) {
	Array.prototype.slice.call(arguments, 1).forEach(function(source) {
		if (!source) return;
		Object.keys(source).forEach(function(key) {
			obj[key] = source[key];
		});
	});
	return obj;
}
function _class(obj) {
	return Object.prototype.toString.call(obj);
}
function isString(obj) {
	return _class(obj) === "[object String]";
}
function isObject(obj) {
	return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
	return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
	return _class(obj) === "[object Function]";
}
function escapeRE(str) {
	return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions = {
	fuzzyLink: true,
	fuzzyEmail: true,
	fuzzyIP: false
};
function isOptionsObj(obj) {
	return Object.keys(obj || {}).reduce(function(acc, k) {
		return acc || defaultOptions.hasOwnProperty(k);
	}, false);
}
var defaultSchemas = {
	"http:": { validate: function(text, pos, self) {
		const tail = text.slice(pos);
		if (!self.re.http) self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
		if (self.re.http.test(tail)) return tail.match(self.re.http)[0].length;
		return 0;
	} },
	"https:": "http:",
	"ftp:": "http:",
	"//": { validate: function(text, pos, self) {
		const tail = text.slice(pos);
		if (!self.re.no_http) self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
		if (self.re.no_http.test(tail)) {
			if (pos >= 3 && text[pos - 3] === ":") return 0;
			if (pos >= 3 && text[pos - 3] === "/") return 0;
			return tail.match(self.re.no_http)[0].length;
		}
		return 0;
	} },
	"mailto:": { validate: function(text, pos, self) {
		const tail = text.slice(pos);
		if (!self.re.mailto) self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
		if (self.re.mailto.test(tail)) return tail.match(self.re.mailto)[0].length;
		return 0;
	} }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self) {
	self.__index__ = -1;
	self.__text_cache__ = "";
}
function createValidator(re) {
	return function(text, pos) {
		const tail = text.slice(pos);
		if (re.test(tail)) return tail.match(re)[0].length;
		return 0;
	};
}
function createNormalizer() {
	return function(match, self) {
		self.normalize(match);
	};
}
function compile(self) {
	const re = self.re = re_default(self.__opts__);
	const tlds = self.__tlds__.slice();
	self.onCompile();
	if (!self.__tlds_replaced__) tlds.push(tlds_2ch_src_re);
	tlds.push(re.src_xn);
	re.src_tlds = tlds.join("|");
	function untpl(tpl) {
		return tpl.replace("%TLDS%", re.src_tlds);
	}
	re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
	re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
	re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
	re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
	const aliases = [];
	self.__compiled__ = {};
	function schemaError(name, val) {
		throw new Error("(LinkifyIt) Invalid schema \"" + name + "\": " + val);
	}
	Object.keys(self.__schemas__).forEach(function(name) {
		const val = self.__schemas__[name];
		if (val === null) return;
		const compiled = {
			validate: null,
			link: null
		};
		self.__compiled__[name] = compiled;
		if (isObject(val)) {
			if (isRegExp(val.validate)) compiled.validate = createValidator(val.validate);
			else if (isFunction(val.validate)) compiled.validate = val.validate;
			else schemaError(name, val);
			if (isFunction(val.normalize)) compiled.normalize = val.normalize;
			else if (!val.normalize) compiled.normalize = createNormalizer();
			else schemaError(name, val);
			return;
		}
		if (isString(val)) {
			aliases.push(name);
			return;
		}
		schemaError(name, val);
	});
	aliases.forEach(function(alias) {
		if (!self.__compiled__[self.__schemas__[alias]]) return;
		self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
		self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
	});
	self.__compiled__[""] = {
		validate: null,
		normalize: createNormalizer()
	};
	const slist = Object.keys(self.__compiled__).filter(function(name) {
		return name.length > 0 && self.__compiled__[name];
	}).map(escapeRE).join("|");
	self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "i");
	self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
	self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
	self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
	resetScanCache(self);
}
/**
* class Match
*
* Match result. Single element of array, returned by [[LinkifyIt#match]]
**/
function Match(self, shift) {
	const start = self.__index__;
	const end = self.__last_index__;
	const text = self.__text_cache__.slice(start, end);
	/**
	* Match#schema -> String
	*
	* Prefix (protocol) for matched string.
	**/
	this.schema = self.__schema__.toLowerCase();
	/**
	* Match#index -> Number
	*
	* First position of matched string.
	**/
	this.index = start + shift;
	/**
	* Match#lastIndex -> Number
	*
	* Next position after matched string.
	**/
	this.lastIndex = end + shift;
	/**
	* Match#raw -> String
	*
	* Matched string.
	**/
	this.raw = text;
	/**
	* Match#text -> String
	*
	* Notmalized text of matched string.
	**/
	this.text = text;
	/**
	* Match#url -> String
	*
	* Normalized url of matched string.
	**/
	this.url = text;
}
function createMatch(self, shift) {
	const match = new Match(self, shift);
	self.__compiled__[match.schema].normalize(match, self);
	return match;
}
/**
* class LinkifyIt
**/
/**
* new LinkifyIt(schemas, options)
* - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
* - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
*
* Creates new linkifier instance with optional additional schemas.
* Can be called without `new` keyword for convenience.
*
* By default understands:
*
* - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
* - "fuzzy" links and emails (example.com, foo@bar.com).
*
* `schemas` is an object, where each key/value describes protocol/rule:
*
* - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
*   for example). `linkify-it` makes shure that prefix is not preceeded with
*   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
* - __value__ - rule to check tail after link prefix
*   - _String_ - just alias to existing rule
*   - _Object_
*     - _validate_ - validator function (should return matched length on success),
*       or `RegExp`.
*     - _normalize_ - optional function to normalize text & url of matched result
*       (for example, for @twitter mentions).
*
* `options`:
*
* - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
* - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
*   like version numbers. Default `false`.
* - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
*
**/
function LinkifyIt(schemas, options) {
	if (!(this instanceof LinkifyIt)) return new LinkifyIt(schemas, options);
	if (!options) {
		if (isOptionsObj(schemas)) {
			options = schemas;
			schemas = {};
		}
	}
	this.__opts__ = assign({}, defaultOptions, options);
	this.__index__ = -1;
	this.__last_index__ = -1;
	this.__schema__ = "";
	this.__text_cache__ = "";
	this.__schemas__ = assign({}, defaultSchemas, schemas);
	this.__compiled__ = {};
	this.__tlds__ = tlds_default;
	this.__tlds_replaced__ = false;
	this.re = {};
	compile(this);
}
/** chainable
* LinkifyIt#add(schema, definition)
* - schema (String): rule name (fixed pattern prefix)
* - definition (String|RegExp|Object): schema definition
*
* Add new rule definition. See constructor description for details.
**/
LinkifyIt.prototype.add = function add(schema, definition) {
	this.__schemas__[schema] = definition;
	compile(this);
	return this;
};
/** chainable
* LinkifyIt#set(options)
* - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
*
* Set recognition options for links without schema.
**/
LinkifyIt.prototype.set = function set(options) {
	this.__opts__ = assign(this.__opts__, options);
	return this;
};
/**
* LinkifyIt#test(text) -> Boolean
*
* Searches linkifiable pattern and returns `true` on success or `false` on fail.
**/
LinkifyIt.prototype.test = function test(text) {
	this.__text_cache__ = text;
	this.__index__ = -1;
	if (!text.length) return false;
	let m, ml, me, len, shift, next, re, tld_pos, at_pos;
	if (this.re.schema_test.test(text)) {
		re = this.re.schema_search;
		re.lastIndex = 0;
		while ((m = re.exec(text)) !== null) {
			len = this.testSchemaAt(text, m[2], re.lastIndex);
			if (len) {
				this.__schema__ = m[2];
				this.__index__ = m.index + m[1].length;
				this.__last_index__ = m.index + m[0].length + len;
				break;
			}
		}
	}
	if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
		tld_pos = text.search(this.re.host_fuzzy_test);
		if (tld_pos >= 0) {
			if (this.__index__ < 0 || tld_pos < this.__index__) {
				if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
					shift = ml.index + ml[1].length;
					if (this.__index__ < 0 || shift < this.__index__) {
						this.__schema__ = "";
						this.__index__ = shift;
						this.__last_index__ = ml.index + ml[0].length;
					}
				}
			}
		}
	}
	if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
		at_pos = text.indexOf("@");
		if (at_pos >= 0) {
			if ((me = text.match(this.re.email_fuzzy)) !== null) {
				shift = me.index + me[1].length;
				next = me.index + me[0].length;
				if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
					this.__schema__ = "mailto:";
					this.__index__ = shift;
					this.__last_index__ = next;
				}
			}
		}
	}
	return this.__index__ >= 0;
};
/**
* LinkifyIt#pretest(text) -> Boolean
*
* Very quick check, that can give false positives. Returns true if link MAY BE
* can exists. Can be used for speed optimization, when you need to check that
* link NOT exists.
**/
LinkifyIt.prototype.pretest = function pretest(text) {
	return this.re.pretest.test(text);
};
/**
* LinkifyIt#testSchemaAt(text, name, position) -> Number
* - text (String): text to scan
* - name (String): rule (schema) name
* - position (Number): text offset to check from
*
* Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
* at given position. Returns length of found pattern (0 on fail).
**/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
	if (!this.__compiled__[schema.toLowerCase()]) return 0;
	return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};
/**
* LinkifyIt#match(text) -> Array|null
*
* Returns array of found link descriptions or `null` on fail. We strongly
* recommend to use [[LinkifyIt#test]] first, for best speed.
*
* ##### Result match description
*
* - __schema__ - link schema, can be empty for fuzzy links, or `//` for
*   protocol-neutral  links.
* - __index__ - offset of matched text
* - __lastIndex__ - index of next char after mathch end
* - __raw__ - matched text
* - __text__ - normalized text
* - __url__ - link, generated from matched text
**/
LinkifyIt.prototype.match = function match(text) {
	const result = [];
	let shift = 0;
	if (this.__index__ >= 0 && this.__text_cache__ === text) {
		result.push(createMatch(this, shift));
		shift = this.__last_index__;
	}
	let tail = shift ? text.slice(shift) : text;
	while (this.test(tail)) {
		result.push(createMatch(this, shift));
		tail = tail.slice(this.__last_index__);
		shift += this.__last_index__;
	}
	if (result.length) return result;
	return null;
};
/**
* LinkifyIt#matchAtStart(text) -> Match|null
*
* Returns fully-formed (not fuzzy) link if it starts at the beginning
* of the string, and null otherwise.
**/
LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
	this.__text_cache__ = text;
	this.__index__ = -1;
	if (!text.length) return null;
	const m = this.re.schema_at_start.exec(text);
	if (!m) return null;
	const len = this.testSchemaAt(text, m[2], m[0].length);
	if (!len) return null;
	this.__schema__ = m[2];
	this.__index__ = m.index + m[1].length;
	this.__last_index__ = m.index + m[0].length + len;
	return createMatch(this, 0);
};
/** chainable
* LinkifyIt#tlds(list [, keepOld]) -> this
* - list (Array): list of tlds
* - keepOld (Boolean): merge with current list if `true` (`false` by default)
*
* Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
* to avoid false positives. By default this algorythm used:
*
* - hostname with any 2-letter root zones are ok.
* - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
*   are ok.
* - encoded (`xn--...`) root zones are ok.
*
* If list is replaced, then exact match for 2-chars root zones will be checked.
**/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
	list = Array.isArray(list) ? list : [list];
	if (!keepOld) {
		this.__tlds__ = list.slice();
		this.__tlds_replaced__ = true;
		compile(this);
		return this;
	}
	this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
		return el !== arr[idx - 1];
	}).reverse();
	compile(this);
	return this;
};
/**
* LinkifyIt#normalize(match)
*
* Default normalizer (if schema does not define it's own).
**/
LinkifyIt.prototype.normalize = function normalize(match) {
	if (!match.schema) match.url = "http://" + match.url;
	if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) match.url = "mailto:" + match.url;
};
/**
* LinkifyIt#onCompile()
*
* Override to modify basic RegExp-s.
**/
LinkifyIt.prototype.onCompile = function onCompile() {};
//#endregion
//#region node_modules/punycode.js/punycode.es6.js
/** Highest positive signed 32-bit float value */
var maxInt = 2147483647;
/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128;
var delimiter = "-";
/** Regular expressions */
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\0-\x7F]/;
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
/** Error messages */
var errors = {
	"overflow": "Overflow: input needs wider integers to process",
	"not-basic": "Illegal input >= 0x80 (not a basic code point)",
	"invalid-input": "Invalid input"
};
/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
/**
* A generic error utility function.
* @private
* @param {String} type The error type.
* @returns {Error} Throws a `RangeError` with the applicable error message.
*/
function error(type) {
	throw new RangeError(errors[type]);
}
/**
* A generic `Array#map` utility function.
* @private
* @param {Array} array The array to iterate over.
* @param {Function} callback The function that gets called for every array
* item.
* @returns {Array} A new array of values returned by the callback function.
*/
function map(array, callback) {
	const result = [];
	let length = array.length;
	while (length--) result[length] = callback(array[length]);
	return result;
}
/**
* A simple `Array#map`-like wrapper to work with domain name strings or email
* addresses.
* @private
* @param {String} domain The domain name or email address.
* @param {Function} callback The function that gets called for every
* character.
* @returns {String} A new string of characters returned by the callback
* function.
*/
function mapDomain(domain, callback) {
	const parts = domain.split("@");
	let result = "";
	if (parts.length > 1) {
		result = parts[0] + "@";
		domain = parts[1];
	}
	domain = domain.replace(regexSeparators, ".");
	const encoded = map(domain.split("."), callback).join(".");
	return result + encoded;
}
/**
* Creates an array containing the numeric code points of each Unicode
* character in the string. While JavaScript uses UCS-2 internally,
* this function will convert a pair of surrogate halves (each of which
* UCS-2 exposes as separate characters) into a single code point,
* matching UTF-16.
* @see `punycode.ucs2.encode`
* @see <https://mathiasbynens.be/notes/javascript-encoding>
* @memberOf punycode.ucs2
* @name decode
* @param {String} string The Unicode input string (UCS-2).
* @returns {Array} The new array of code points.
*/
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 55296 && value <= 56319 && counter < length) {
			const extra = string.charCodeAt(counter++);
			if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
			else {
				output.push(value);
				counter--;
			}
		} else output.push(value);
	}
	return output;
}
/**
* Creates a string based on an array of numeric code points.
* @see `punycode.ucs2.decode`
* @memberOf punycode.ucs2
* @name encode
* @param {Array} codePoints The array of numeric code points.
* @returns {String} The new Unicode string (UCS-2).
*/
var ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
/**
* Converts a basic code point into a digit/integer.
* @see `digitToBasic()`
* @private
* @param {Number} codePoint The basic numeric code point value.
* @returns {Number} The numeric value of a basic code point (for use in
* representing integers) in the range `0` to `base - 1`, or `base` if
* the code point does not represent a value.
*/
var basicToDigit = function(codePoint) {
	if (codePoint >= 48 && codePoint < 58) return 26 + (codePoint - 48);
	if (codePoint >= 65 && codePoint < 91) return codePoint - 65;
	if (codePoint >= 97 && codePoint < 123) return codePoint - 97;
	return base;
};
/**
* Converts a digit/integer into a basic code point.
* @see `basicToDigit()`
* @private
* @param {Number} digit The numeric value of a basic code point.
* @returns {Number} The basic code point whose value (when used for
* representing integers) is `digit`, which needs to be in the range
* `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
* used; else, the lowercase form is used. The behavior is undefined
* if `flag` is non-zero and `digit` has no uppercase form.
*/
var digitToBasic = function(digit, flag) {
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
/**
* Bias adaptation function as per section 3.4 of RFC 3492.
* https://tools.ietf.org/html/rfc3492#section-3.4
* @private
*/
var adapt = function(delta, numPoints, firstTime) {
	let k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (; delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
* Converts a Punycode string of ASCII-only symbols to a string of Unicode
* symbols.
* @memberOf punycode
* @param {String} input The Punycode string of ASCII-only symbols.
* @returns {String} The resulting string of Unicode symbols.
*/
var decode = function(input) {
	const output = [];
	const inputLength = input.length;
	let i = 0;
	let n = initialN;
	let bias = initialBias;
	let basic = input.lastIndexOf(delimiter);
	if (basic < 0) basic = 0;
	for (let j = 0; j < basic; ++j) {
		if (input.charCodeAt(j) >= 128) error("not-basic");
		output.push(input.charCodeAt(j));
	}
	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
		const oldi = i;
		for (let w = 1, k = base;; k += base) {
			if (index >= inputLength) error("invalid-input");
			const digit = basicToDigit(input.charCodeAt(index++));
			if (digit >= base) error("invalid-input");
			if (digit > floor((maxInt - i) / w)) error("overflow");
			i += digit * w;
			const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
			if (digit < t) break;
			const baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) error("overflow");
			w *= baseMinusT;
		}
		const out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);
		if (floor(i / out) > maxInt - n) error("overflow");
		n += floor(i / out);
		i %= out;
		output.splice(i++, 0, n);
	}
	return String.fromCodePoint(...output);
};
/**
* Converts a string of Unicode symbols (e.g. a domain name label) to a
* Punycode string of ASCII-only symbols.
* @memberOf punycode
* @param {String} input The string of Unicode symbols.
* @returns {String} The resulting Punycode string of ASCII-only symbols.
*/
var encode = function(input) {
	const output = [];
	input = ucs2decode(input);
	const inputLength = input.length;
	let n = initialN;
	let delta = 0;
	let bias = initialBias;
	for (const currentValue of input) if (currentValue < 128) output.push(stringFromCharCode(currentValue));
	const basicLength = output.length;
	let handledCPCount = basicLength;
	if (basicLength) output.push(delimiter);
	while (handledCPCount < inputLength) {
		let m = maxInt;
		for (const currentValue of input) if (currentValue >= n && currentValue < m) m = currentValue;
		const handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
		delta += (m - n) * handledCPCountPlusOne;
		n = m;
		for (const currentValue of input) {
			if (currentValue < n && ++delta > maxInt) error("overflow");
			if (currentValue === n) {
				let q = delta;
				for (let k = base;; k += base) {
					const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
					if (q < t) break;
					const qMinusT = q - t;
					const baseMinusT = base - t;
					output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
					q = floor(qMinusT / baseMinusT);
				}
				output.push(stringFromCharCode(digitToBasic(q, 0)));
				bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
				delta = 0;
				++handledCPCount;
			}
		}
		++delta;
		++n;
	}
	return output.join("");
};
/**
* Converts a Punycode string representing a domain name or an email address
* to Unicode. Only the Punycoded parts of the input will be converted, i.e.
* it doesn't matter if you call it on a string that has already been
* converted to Unicode.
* @memberOf punycode
* @param {String} input The Punycoded domain name or email address to
* convert to Unicode.
* @returns {String} The Unicode representation of the given Punycode
* string.
*/
var toUnicode = function(input) {
	return mapDomain(input, function(string) {
		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
	});
};
/**
* Converts a Unicode string representing a domain name or an email address to
* Punycode. Only the non-ASCII parts of the domain name will be converted,
* i.e. it doesn't matter if you call it with a domain that's already in
* ASCII.
* @memberOf punycode
* @param {String} input The domain name or email address to convert, as a
* Unicode string.
* @returns {String} The Punycode representation of the given domain name or
* email address.
*/
var toASCII = function(input) {
	return mapDomain(input, function(string) {
		return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
	});
};
/** Define the public API */
var punycode = {
	"version": "2.3.1",
	"ucs2": {
		"decode": ucs2decode,
		"encode": ucs2encode
	},
	"decode": decode,
	"encode": encode,
	"toASCII": toASCII,
	"toUnicode": toUnicode
};
//#endregion
//#region node_modules/markdown-it/lib/presets/default.mjs
var default_default = {
	options: {
		html: false,
		xhtmlOut: false,
		breaks: false,
		langPrefix: "language-",
		linkify: false,
		typographer: false,
		quotes: "“”‘’",
		highlight: null,
		maxNesting: 100
	},
	components: {
		core: {},
		block: {},
		inline: {}
	}
};
//#endregion
//#region node_modules/markdown-it/lib/presets/zero.mjs
var zero_default = {
	options: {
		html: false,
		xhtmlOut: false,
		breaks: false,
		langPrefix: "language-",
		linkify: false,
		typographer: false,
		quotes: "“”‘’",
		highlight: null,
		maxNesting: 20
	},
	components: {
		core: { rules: [
			"normalize",
			"block",
			"inline",
			"text_join"
		] },
		block: { rules: ["paragraph"] },
		inline: {
			rules: ["text"],
			rules2: ["balance_pairs", "fragments_join"]
		}
	}
};
//#endregion
//#region node_modules/markdown-it/lib/presets/commonmark.mjs
var commonmark_default = {
	options: {
		html: true,
		xhtmlOut: true,
		breaks: false,
		langPrefix: "language-",
		linkify: false,
		typographer: false,
		quotes: "“”‘’",
		highlight: null,
		maxNesting: 20
	},
	components: {
		core: { rules: [
			"normalize",
			"block",
			"inline",
			"text_join"
		] },
		block: { rules: [
			"blockquote",
			"code",
			"fence",
			"heading",
			"hr",
			"html_block",
			"lheading",
			"list",
			"reference",
			"paragraph"
		] },
		inline: {
			rules: [
				"autolink",
				"backticks",
				"emphasis",
				"entity",
				"escape",
				"html_inline",
				"image",
				"link",
				"newline",
				"text"
			],
			rules2: [
				"balance_pairs",
				"emphasis",
				"fragments_join"
			]
		}
	}
};
//#endregion
//#region node_modules/markdown-it/lib/index.mjs
var config = {
	default: default_default,
	zero: zero_default,
	commonmark: commonmark_default
};
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
	const str = url.trim().toLowerCase();
	return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) : true;
}
var RECODE_HOSTNAME_FOR = [
	"http:",
	"https:",
	"mailto:"
];
function normalizeLink(url) {
	const parsed = urlParse(url, true);
	if (parsed.hostname) {
		if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) try {
			parsed.hostname = punycode.toASCII(parsed.hostname);
		} catch (er) {}
	}
	return encode$1(format(parsed));
}
function normalizeLinkText(url) {
	const parsed = urlParse(url, true);
	if (parsed.hostname) {
		if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) try {
			parsed.hostname = punycode.toUnicode(parsed.hostname);
		} catch (er) {}
	}
	return decode$1(format(parsed), decode$1.defaultChars + "%");
}
/**
* class MarkdownIt
*
* Main parser/renderer class.
*
* ##### Usage
*
* ```javascript
* // node.js, "classic" way:
* var MarkdownIt = require('markdown-it'),
*     md = new MarkdownIt();
* var result = md.render('# markdown-it rulezz!');
*
* // node.js, the same, but with sugar:
* var md = require('markdown-it')();
* var result = md.render('# markdown-it rulezz!');
*
* // browser without AMD, added to "window" on script load
* // Note, there are no dash.
* var md = window.markdownit();
* var result = md.render('# markdown-it rulezz!');
* ```
*
* Single line rendering, without paragraph wrap:
*
* ```javascript
* var md = require('markdown-it')();
* var result = md.renderInline('__markdown-it__ rulezz!');
* ```
**/
/**
* new MarkdownIt([presetName, options])
* - presetName (String): optional, `commonmark` / `zero`
* - options (Object)
*
* Creates parser instanse with given config. Can be called without `new`.
*
* ##### presetName
*
* MarkdownIt provides named presets as a convenience to quickly
* enable/disable active syntax rules and options for common use cases.
*
* - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.mjs) -
*   configures parser to strict [CommonMark](http://commonmark.org/) mode.
* - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.mjs) -
*   similar to GFM, used when no preset name given. Enables all available rules,
*   but still without html, typographer & autolinker.
* - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.mjs) -
*   all rules disabled. Useful to quickly setup your config via `.enable()`.
*   For example, when you need only `bold` and `italic` markup and nothing else.
*
* ##### options:
*
* - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
*   That's not safe! You may need external sanitizer to protect output from XSS.
*   It's better to extend features via plugins, instead of enabling HTML.
* - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
*   (`<br />`). This is needed only for full CommonMark compatibility. In real
*   world you will need HTML output.
* - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
* - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
*   Can be useful for external highlighters.
* - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
* - __typographer__  - `false`. Set `true` to enable [some language-neutral
*   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs) +
*   quotes beautification (smartquotes).
* - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
*   pairs, when typographer enabled and smartquotes on. For example, you can
*   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
*   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
* - __highlight__ - `null`. Highlighter function for fenced code blocks.
*   Highlighter `function (str, lang)` should return escaped HTML. It can also
*   return empty string if the source was not changed and should be escaped
*   externaly. If result starts with <pre... internal wrapper is skipped.
*
* ##### Example
*
* ```javascript
* // commonmark mode
* var md = require('markdown-it')('commonmark');
*
* // default mode
* var md = require('markdown-it')();
*
* // enable everything
* var md = require('markdown-it')({
*   html: true,
*   linkify: true,
*   typographer: true
* });
* ```
*
* ##### Syntax highlighting
*
* ```js
* var hljs = require('highlight.js') // https://highlightjs.org/
*
* var md = require('markdown-it')({
*   highlight: function (str, lang) {
*     if (lang && hljs.getLanguage(lang)) {
*       try {
*         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
*       } catch (__) {}
*     }
*
*     return ''; // use external default escaping
*   }
* });
* ```
*
* Or with full wrapper override (if you need assign class to `<pre>` or `<code>`):
*
* ```javascript
* var hljs = require('highlight.js') // https://highlightjs.org/
*
* // Actual default values
* var md = require('markdown-it')({
*   highlight: function (str, lang) {
*     if (lang && hljs.getLanguage(lang)) {
*       try {
*         return '<pre><code class="hljs">' +
*                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
*                '</code></pre>';
*       } catch (__) {}
*     }
*
*     return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
*   }
* });
* ```
*
**/
function MarkdownIt(presetName, options) {
	if (!(this instanceof MarkdownIt)) return new MarkdownIt(presetName, options);
	if (!options) {
		if (!isString$1(presetName)) {
			options = presetName || {};
			presetName = "default";
		}
	}
	/**
	* MarkdownIt#inline -> ParserInline
	*
	* Instance of [[ParserInline]]. You may need it to add new rules when
	* writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	* [[MarkdownIt.enable]].
	**/
	this.inline = new ParserInline();
	/**
	* MarkdownIt#block -> ParserBlock
	*
	* Instance of [[ParserBlock]]. You may need it to add new rules when
	* writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	* [[MarkdownIt.enable]].
	**/
	this.block = new ParserBlock();
	/**
	* MarkdownIt#core -> Core
	*
	* Instance of [[Core]] chain executor. You may need it to add new rules when
	* writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	* [[MarkdownIt.enable]].
	**/
	this.core = new Core();
	/**
	* MarkdownIt#renderer -> Renderer
	*
	* Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
	* rules for new token types, generated by plugins.
	*
	* ##### Example
	*
	* ```javascript
	* var md = require('markdown-it')();
	*
	* function myToken(tokens, idx, options, env, self) {
	*   //...
	*   return result;
	* };
	*
	* md.renderer.rules['my_token'] = myToken
	* ```
	*
	* See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs).
	**/
	this.renderer = new Renderer();
	/**
	* MarkdownIt#linkify -> LinkifyIt
	*
	* [linkify-it](https://github.com/markdown-it/linkify-it) instance.
	* Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.mjs)
	* rule.
	**/
	this.linkify = new LinkifyIt();
	/**
	* MarkdownIt#validateLink(url) -> Boolean
	*
	* Link validation function. CommonMark allows too much in links. By default
	* we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
	* except some embedded image types.
	*
	* You can change this behaviour:
	*
	* ```javascript
	* var md = require('markdown-it')();
	* // enable everything
	* md.validateLink = function () { return true; }
	* ```
	**/
	this.validateLink = validateLink;
	/**
	* MarkdownIt#normalizeLink(url) -> String
	*
	* Function used to encode link url to a machine-readable format,
	* which includes url-encoding, punycode, etc.
	**/
	this.normalizeLink = normalizeLink;
	/**
	* MarkdownIt#normalizeLinkText(url) -> String
	*
	* Function used to decode link url to a human-readable format`
	**/
	this.normalizeLinkText = normalizeLinkText;
	/**
	* MarkdownIt#utils -> utils
	*
	* Assorted utility functions, useful to write plugins. See details
	* [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.mjs).
	**/
	this.utils = utils_exports;
	/**
	* MarkdownIt#helpers -> helpers
	*
	* Link components parser functions, useful to write plugins. See details
	* [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
	**/
	this.helpers = assign$1({}, helpers_exports);
	this.options = {};
	this.configure(presetName);
	if (options) this.set(options);
}
/** chainable
* MarkdownIt.set(options)
*
* Set parser options (in the same format as in constructor). Probably, you
* will never need it, but you can change options after constructor call.
*
* ##### Example
*
* ```javascript
* var md = require('markdown-it')()
*             .set({ html: true, breaks: true })
*             .set({ typographer, true });
* ```
*
* __Note:__ To achieve the best possible performance, don't modify a
* `markdown-it` instance options on the fly. If you need multiple configurations
* it's best to create multiple instances and initialize each with separate
* config.
**/
MarkdownIt.prototype.set = function(options) {
	assign$1(this.options, options);
	return this;
};
/** chainable, internal
* MarkdownIt.configure(presets)
*
* Batch load of all options and compenent settings. This is internal method,
* and you probably will not need it. But if you will - see available presets
* and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
*
* We strongly recommend to use presets instead of direct config loads. That
* will give better compatibility with next versions.
**/
MarkdownIt.prototype.configure = function(presets) {
	const self = this;
	if (isString$1(presets)) {
		const presetName = presets;
		presets = config[presetName];
		if (!presets) throw new Error("Wrong `markdown-it` preset \"" + presetName + "\", check name");
	}
	if (!presets) throw new Error("Wrong `markdown-it` preset, can't be empty");
	if (presets.options) self.set(presets.options);
	if (presets.components) Object.keys(presets.components).forEach(function(name) {
		if (presets.components[name].rules) self[name].ruler.enableOnly(presets.components[name].rules);
		if (presets.components[name].rules2) self[name].ruler2.enableOnly(presets.components[name].rules2);
	});
	return this;
};
/** chainable
* MarkdownIt.enable(list, ignoreInvalid)
* - list (String|Array): rule name or list of rule names to enable
* - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
*
* Enable list or rules. It will automatically find appropriate components,
* containing rules with given names. If rule not found, and `ignoreInvalid`
* not set - throws exception.
*
* ##### Example
*
* ```javascript
* var md = require('markdown-it')()
*             .enable(['sub', 'sup'])
*             .disable('smartquotes');
* ```
**/
MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
	let result = [];
	if (!Array.isArray(list)) list = [list];
	[
		"core",
		"block",
		"inline"
	].forEach(function(chain) {
		result = result.concat(this[chain].ruler.enable(list, true));
	}, this);
	result = result.concat(this.inline.ruler2.enable(list, true));
	const missed = list.filter(function(name) {
		return result.indexOf(name) < 0;
	});
	if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
	return this;
};
/** chainable
* MarkdownIt.disable(list, ignoreInvalid)
* - list (String|Array): rule name or list of rule names to disable.
* - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
*
* The same as [[MarkdownIt.enable]], but turn specified rules off.
**/
MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
	let result = [];
	if (!Array.isArray(list)) list = [list];
	[
		"core",
		"block",
		"inline"
	].forEach(function(chain) {
		result = result.concat(this[chain].ruler.disable(list, true));
	}, this);
	result = result.concat(this.inline.ruler2.disable(list, true));
	const missed = list.filter(function(name) {
		return result.indexOf(name) < 0;
	});
	if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
	return this;
};
/** chainable
* MarkdownIt.use(plugin, params)
*
* Load specified plugin with given params into current parser instance.
* It's just a sugar to call `plugin(md, params)` with curring.
*
* ##### Example
*
* ```javascript
* var iterator = require('markdown-it-for-inline');
* var md = require('markdown-it')()
*             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
*               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
*             });
* ```
**/
MarkdownIt.prototype.use = function(plugin) {
	const args = [this].concat(Array.prototype.slice.call(arguments, 1));
	plugin.apply(plugin, args);
	return this;
};
/** internal
* MarkdownIt.parse(src, env) -> Array
* - src (String): source string
* - env (Object): environment sandbox
*
* Parse input string and return list of block tokens (special token type
* "inline" will contain list of inline tokens). You should not call this
* method directly, until you write custom renderer (for example, to produce
* AST).
*
* `env` is used to pass data between "distributed" rules and return additional
* metadata like reference info, needed for the renderer. It also can be used to
* inject data in specific cases. Usually, you will be ok to pass `{}`,
* and then pass updated object to renderer.
**/
MarkdownIt.prototype.parse = function(src, env) {
	if (typeof src !== "string") throw new Error("Input data should be a String");
	const state = new this.core.State(src, this, env);
	this.core.process(state);
	return state.tokens;
};
/**
* MarkdownIt.render(src [, env]) -> String
* - src (String): source string
* - env (Object): environment sandbox
*
* Render markdown string into html. It does all magic for you :).
*
* `env` can be used to inject additional metadata (`{}` by default).
* But you will not need it with high probability. See also comment
* in [[MarkdownIt.parse]].
**/
MarkdownIt.prototype.render = function(src, env) {
	env = env || {};
	return this.renderer.render(this.parse(src, env), this.options, env);
};
/** internal
* MarkdownIt.parseInline(src, env) -> Array
* - src (String): source string
* - env (Object): environment sandbox
*
* The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
* block tokens list with the single `inline` element, containing parsed inline
* tokens in `children` property. Also updates `env` object.
**/
MarkdownIt.prototype.parseInline = function(src, env) {
	const state = new this.core.State(src, this, env);
	state.inlineMode = true;
	this.core.process(state);
	return state.tokens;
};
/**
* MarkdownIt.renderInline(src [, env]) -> String
* - src (String): source string
* - env (Object): environment sandbox
*
* Similar to [[MarkdownIt.render]] but for single paragraph content. Result
* will NOT be wrapped into `<p>` tags.
**/
MarkdownIt.prototype.renderInline = function(src, env) {
	env = env || {};
	return this.renderer.render(this.parseInline(src, env), this.options, env);
};
//#endregion
//#region node_modules/node-stdlib-browser/esm/mock/empty.js
var empty_exports = /* @__PURE__ */ __exportAll({ default: () => null });
var empty;
var init_empty = __esmMin((() => {}));
//#endregion
//#region node_modules/kind-of/index.js
var require_kind_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toString = Object.prototype.toString;
	module.exports = function kindOf(val) {
		if (val === void 0) return "undefined";
		if (val === null) return "null";
		var type = typeof val;
		if (type === "boolean") return "boolean";
		if (type === "string") return "string";
		if (type === "number") return "number";
		if (type === "symbol") return "symbol";
		if (type === "function") return isGeneratorFn(val) ? "generatorfunction" : "function";
		if (isArray(val)) return "array";
		if (isBuffer(val)) return "buffer";
		if (isArguments(val)) return "arguments";
		if (isDate(val)) return "date";
		if (isError(val)) return "error";
		if (isRegexp(val)) return "regexp";
		switch (ctorName(val)) {
			case "Symbol": return "symbol";
			case "Promise": return "promise";
			case "WeakMap": return "weakmap";
			case "WeakSet": return "weakset";
			case "Map": return "map";
			case "Set": return "set";
			case "Int8Array": return "int8array";
			case "Uint8Array": return "uint8array";
			case "Uint8ClampedArray": return "uint8clampedarray";
			case "Int16Array": return "int16array";
			case "Uint16Array": return "uint16array";
			case "Int32Array": return "int32array";
			case "Uint32Array": return "uint32array";
			case "Float32Array": return "float32array";
			case "Float64Array": return "float64array";
		}
		if (isGeneratorObj(val)) return "generator";
		type = toString.call(val);
		switch (type) {
			case "[object Object]": return "object";
			case "[object Map Iterator]": return "mapiterator";
			case "[object Set Iterator]": return "setiterator";
			case "[object String Iterator]": return "stringiterator";
			case "[object Array Iterator]": return "arrayiterator";
		}
		return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
	};
	function ctorName(val) {
		return typeof val.constructor === "function" ? val.constructor.name : null;
	}
	function isArray(val) {
		if (Array.isArray) return Array.isArray(val);
		return val instanceof Array;
	}
	function isError(val) {
		return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
	}
	function isDate(val) {
		if (val instanceof Date) return true;
		return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
	}
	function isRegexp(val) {
		if (val instanceof RegExp) return true;
		return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
	}
	function isGeneratorFn(name, val) {
		return ctorName(name) === "GeneratorFunction";
	}
	function isGeneratorObj(val) {
		return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
	}
	function isArguments(val) {
		try {
			if (typeof val.length === "number" && typeof val.callee === "function") return true;
		} catch (err) {
			if (err.message.indexOf("callee") !== -1) return true;
		}
		return false;
	}
	/**
	* If you need to support Safari 5-7 (8-10 yr-old browser),
	* take a look at https://github.com/feross/is-buffer
	*/
	function isBuffer(val) {
		if (val.constructor && typeof val.constructor.isBuffer === "function") return val.constructor.isBuffer(val);
		return false;
	}
}));
//#endregion
//#region node_modules/is-extendable/index.js
/*!
* is-extendable <https://github.com/jonschlinkert/is-extendable>
*
* Copyright (c) 2015, Jon Schlinkert.
* Licensed under the MIT License.
*/
var require_is_extendable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function isExtendable(val) {
		return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
	};
}));
//#endregion
//#region node_modules/extend-shallow/index.js
var require_extend_shallow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_is_extendable();
	module.exports = function extend(o) {
		if (!isObject(o)) o = {};
		var len = arguments.length;
		for (var i = 1; i < len; i++) {
			var obj = arguments[i];
			if (isObject(obj)) assign(o, obj);
		}
		return o;
	};
	function assign(a, b) {
		for (var key in b) if (hasOwn(b, key)) a[key] = b[key];
	}
	/**
	* Returns true if the given `key` is an own property of `obj`.
	*/
	function hasOwn(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key);
	}
}));
//#endregion
//#region node_modules/section-matter/index.js
var require_section_matter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var typeOf = require_kind_of();
	var extend = require_extend_shallow();
	/**
	* Parse sections in `input` with the given `options`.
	*
	* ```js
	* var sections = require('{%= name %}');
	* var result = sections(input, options);
	* // { content: 'Content before sections', sections: [] }
	* ```
	* @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
	* @param {Object} options
	* @return {Object} Returns an object with a `content` string and an array of `sections` objects.
	* @api public
	*/
	module.exports = function(input, options) {
		if (typeof options === "function") options = { parse: options };
		var file = toObject(input);
		var opts = extend({}, {
			section_delimiter: "---",
			parse: identity
		}, options);
		var delim = opts.section_delimiter;
		var lines = file.content.split(/\r?\n/);
		var sections = null;
		var section = createSection();
		var content = [];
		var stack = [];
		function initSections(val) {
			file.content = val;
			sections = [];
			content = [];
		}
		function closeSection(val) {
			if (stack.length) {
				section.key = getKey(stack[0], delim);
				section.content = val;
				opts.parse(section, sections);
				sections.push(section);
				section = createSection();
				content = [];
				stack = [];
			}
		}
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var len = stack.length;
			var ln = line.trim();
			if (isDelimiter(ln, delim)) {
				if (ln.length === 3 && i !== 0) {
					if (len === 0 || len === 2) {
						content.push(line);
						continue;
					}
					stack.push(ln);
					section.data = content.join("\n");
					content = [];
					continue;
				}
				if (sections === null) initSections(content.join("\n"));
				if (len === 2) closeSection(content.join("\n"));
				stack.push(ln);
				continue;
			}
			content.push(line);
		}
		if (sections === null) initSections(content.join("\n"));
		else closeSection(content.join("\n"));
		file.sections = sections;
		return file;
	};
	function isDelimiter(line, delim) {
		if (line.slice(0, delim.length) !== delim) return false;
		if (line.charAt(delim.length + 1) === delim.slice(-1)) return false;
		return true;
	}
	function toObject(input) {
		if (typeOf(input) !== "object") input = { content: input };
		if (typeof input.content !== "string" && !isBuffer(input.content)) throw new TypeError("expected a buffer or string");
		input.content = input.content.toString();
		input.sections = [];
		return input;
	}
	function getKey(val, delim) {
		return val ? val.slice(delim.length).trim() : "";
	}
	function createSection() {
		return {
			key: "",
			data: "",
			content: ""
		};
	}
	function identity(val) {
		return val;
	}
	function isBuffer(val) {
		if (val && val.constructor && typeof val.constructor.isBuffer === "function") return val.constructor.isBuffer(val);
		return false;
	}
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/common.js
var require_common = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isNothing(subject) {
		return typeof subject === "undefined" || subject === null;
	}
	function isObject(subject) {
		return typeof subject === "object" && subject !== null;
	}
	function toArray(sequence) {
		if (Array.isArray(sequence)) return sequence;
		else if (isNothing(sequence)) return [];
		return [sequence];
	}
	function extend(target, source) {
		var index, length, key, sourceKeys;
		if (source) {
			sourceKeys = Object.keys(source);
			for (index = 0, length = sourceKeys.length; index < length; index += 1) {
				key = sourceKeys[index];
				target[key] = source[key];
			}
		}
		return target;
	}
	function repeat(string, count) {
		var result = "", cycle;
		for (cycle = 0; cycle < count; cycle += 1) result += string;
		return result;
	}
	function isNegativeZero(number) {
		return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
	}
	module.exports.isNothing = isNothing;
	module.exports.isObject = isObject;
	module.exports.toArray = toArray;
	module.exports.repeat = repeat;
	module.exports.isNegativeZero = isNegativeZero;
	module.exports.extend = extend;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function YAMLException(reason, mark) {
		Error.call(this);
		this.name = "YAMLException";
		this.reason = reason;
		this.mark = mark;
		this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
		if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
		else this.stack = (/* @__PURE__ */ new Error()).stack || "";
	}
	YAMLException.prototype = Object.create(Error.prototype);
	YAMLException.prototype.constructor = YAMLException;
	YAMLException.prototype.toString = function toString(compact) {
		var result = this.name + ": ";
		result += this.reason || "(unknown reason)";
		if (!compact && this.mark) result += " " + this.mark.toString();
		return result;
	};
	module.exports = YAMLException;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	function Mark(name, buffer, position, line, column) {
		this.name = name;
		this.buffer = buffer;
		this.position = position;
		this.line = line;
		this.column = column;
	}
	Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
		var head, start, tail, end, snippet;
		if (!this.buffer) return null;
		indent = indent || 4;
		maxLength = maxLength || 75;
		head = "";
		start = this.position;
		while (start > 0 && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
			start -= 1;
			if (this.position - start > maxLength / 2 - 1) {
				head = " ... ";
				start += 5;
				break;
			}
		}
		tail = "";
		end = this.position;
		while (end < this.buffer.length && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
			end += 1;
			if (end - this.position > maxLength / 2 - 1) {
				tail = " ... ";
				end -= 5;
				break;
			}
		}
		snippet = this.buffer.slice(start, end);
		return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
	};
	Mark.prototype.toString = function toString(compact) {
		var snippet, where = "";
		if (this.name) where += "in \"" + this.name + "\" ";
		where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
		if (!compact) {
			snippet = this.getSnippet();
			if (snippet) where += ":\n" + snippet;
		}
		return where;
	};
	module.exports = Mark;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type.js
var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var YAMLException = require_exception();
	var TYPE_CONSTRUCTOR_OPTIONS = [
		"kind",
		"resolve",
		"construct",
		"instanceOf",
		"predicate",
		"represent",
		"defaultStyle",
		"styleAliases"
	];
	var YAML_NODE_KINDS = [
		"scalar",
		"sequence",
		"mapping"
	];
	function compileStyleAliases(map) {
		var result = {};
		if (map !== null) Object.keys(map).forEach(function(style) {
			map[style].forEach(function(alias) {
				result[String(alias)] = style;
			});
		});
		return result;
	}
	function Type(tag, options) {
		options = options || {};
		Object.keys(options).forEach(function(name) {
			if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) throw new YAMLException("Unknown option \"" + name + "\" is met in definition of \"" + tag + "\" YAML type.");
		});
		this.tag = tag;
		this.kind = options["kind"] || null;
		this.resolve = options["resolve"] || function() {
			return true;
		};
		this.construct = options["construct"] || function(data) {
			return data;
		};
		this.instanceOf = options["instanceOf"] || null;
		this.predicate = options["predicate"] || null;
		this.represent = options["represent"] || null;
		this.defaultStyle = options["defaultStyle"] || null;
		this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
		if (YAML_NODE_KINDS.indexOf(this.kind) === -1) throw new YAMLException("Unknown kind \"" + this.kind + "\" is specified for \"" + tag + "\" YAML type.");
	}
	module.exports = Type;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	var YAMLException = require_exception();
	var Type = require_type();
	function compileList(schema, name, result) {
		var exclude = [];
		schema.include.forEach(function(includedSchema) {
			result = compileList(includedSchema, name, result);
		});
		schema[name].forEach(function(currentType) {
			result.forEach(function(previousType, previousIndex) {
				if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) exclude.push(previousIndex);
			});
			result.push(currentType);
		});
		return result.filter(function(type, index) {
			return exclude.indexOf(index) === -1;
		});
	}
	function compileMap() {
		var result = {
			scalar: {},
			sequence: {},
			mapping: {},
			fallback: {}
		}, index, length;
		function collectType(type) {
			result[type.kind][type.tag] = result["fallback"][type.tag] = type;
		}
		for (index = 0, length = arguments.length; index < length; index += 1) arguments[index].forEach(collectType);
		return result;
	}
	function Schema(definition) {
		this.include = definition.include || [];
		this.implicit = definition.implicit || [];
		this.explicit = definition.explicit || [];
		this.implicit.forEach(function(type) {
			if (type.loadKind && type.loadKind !== "scalar") throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
		});
		this.compiledImplicit = compileList(this, "implicit", []);
		this.compiledExplicit = compileList(this, "explicit", []);
		this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
	}
	Schema.DEFAULT = null;
	Schema.create = function createSchema() {
		var schemas, types;
		switch (arguments.length) {
			case 1:
				schemas = Schema.DEFAULT;
				types = arguments[0];
				break;
			case 2:
				schemas = arguments[0];
				types = arguments[1];
				break;
			default: throw new YAMLException("Wrong number of arguments for Schema.create function");
		}
		schemas = common.toArray(schemas);
		types = common.toArray(types);
		if (!schemas.every(function(schema) {
			return schema instanceof Schema;
		})) throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
		if (!types.every(function(type) {
			return type instanceof Type;
		})) throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		return new Schema({
			include: schemas,
			explicit: types
		});
	};
	module.exports = Schema;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_type())("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: function(data) {
			return data !== null ? data : "";
		}
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_type())("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: function(data) {
			return data !== null ? data : [];
		}
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_type())("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: function(data) {
			return data !== null ? data : {};
		}
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_schema())({ explicit: [
		require_str(),
		require_seq(),
		require_map()
	] });
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	function resolveYamlNull(data) {
		if (data === null) return true;
		var max = data.length;
		return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
	}
	function constructYamlNull() {
		return null;
	}
	function isNull(object) {
		return object === null;
	}
	module.exports = new Type("tag:yaml.org,2002:null", {
		kind: "scalar",
		resolve: resolveYamlNull,
		construct: constructYamlNull,
		predicate: isNull,
		represent: {
			canonical: function() {
				return "~";
			},
			lowercase: function() {
				return "null";
			},
			uppercase: function() {
				return "NULL";
			},
			camelcase: function() {
				return "Null";
			}
		},
		defaultStyle: "lowercase"
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	function resolveYamlBoolean(data) {
		if (data === null) return false;
		var max = data.length;
		return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
	}
	function constructYamlBoolean(data) {
		return data === "true" || data === "True" || data === "TRUE";
	}
	function isBoolean(object) {
		return Object.prototype.toString.call(object) === "[object Boolean]";
	}
	module.exports = new Type("tag:yaml.org,2002:bool", {
		kind: "scalar",
		resolve: resolveYamlBoolean,
		construct: constructYamlBoolean,
		predicate: isBoolean,
		represent: {
			lowercase: function(object) {
				return object ? "true" : "false";
			},
			uppercase: function(object) {
				return object ? "TRUE" : "FALSE";
			},
			camelcase: function(object) {
				return object ? "True" : "False";
			}
		},
		defaultStyle: "lowercase"
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	var Type = require_type();
	function isHexCode(c) {
		return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
	}
	function isOctCode(c) {
		return 48 <= c && c <= 55;
	}
	function isDecCode(c) {
		return 48 <= c && c <= 57;
	}
	function resolveYamlInteger(data) {
		if (data === null) return false;
		var max = data.length, index = 0, hasDigits = false, ch;
		if (!max) return false;
		ch = data[index];
		if (ch === "-" || ch === "+") ch = data[++index];
		if (ch === "0") {
			if (index + 1 === max) return true;
			ch = data[++index];
			if (ch === "b") {
				index++;
				for (; index < max; index++) {
					ch = data[index];
					if (ch === "_") continue;
					if (ch !== "0" && ch !== "1") return false;
					hasDigits = true;
				}
				return hasDigits && ch !== "_";
			}
			if (ch === "x") {
				index++;
				for (; index < max; index++) {
					ch = data[index];
					if (ch === "_") continue;
					if (!isHexCode(data.charCodeAt(index))) return false;
					hasDigits = true;
				}
				return hasDigits && ch !== "_";
			}
			for (; index < max; index++) {
				ch = data[index];
				if (ch === "_") continue;
				if (!isOctCode(data.charCodeAt(index))) return false;
				hasDigits = true;
			}
			return hasDigits && ch !== "_";
		}
		if (ch === "_") return false;
		for (; index < max; index++) {
			ch = data[index];
			if (ch === "_") continue;
			if (ch === ":") break;
			if (!isDecCode(data.charCodeAt(index))) return false;
			hasDigits = true;
		}
		if (!hasDigits || ch === "_") return false;
		if (ch !== ":") return true;
		return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
	}
	function constructYamlInteger(data) {
		var value = data, sign = 1, ch, base, digits = [];
		if (value.indexOf("_") !== -1) value = value.replace(/_/g, "");
		ch = value[0];
		if (ch === "-" || ch === "+") {
			if (ch === "-") sign = -1;
			value = value.slice(1);
			ch = value[0];
		}
		if (value === "0") return 0;
		if (ch === "0") {
			if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
			if (value[1] === "x") return sign * parseInt(value, 16);
			return sign * parseInt(value, 8);
		}
		if (value.indexOf(":") !== -1) {
			value.split(":").forEach(function(v) {
				digits.unshift(parseInt(v, 10));
			});
			value = 0;
			base = 1;
			digits.forEach(function(d) {
				value += d * base;
				base *= 60;
			});
			return sign * value;
		}
		return sign * parseInt(value, 10);
	}
	function isInteger(object) {
		return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
	}
	module.exports = new Type("tag:yaml.org,2002:int", {
		kind: "scalar",
		resolve: resolveYamlInteger,
		construct: constructYamlInteger,
		predicate: isInteger,
		represent: {
			binary: function(obj) {
				return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
			},
			octal: function(obj) {
				return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
			},
			decimal: function(obj) {
				return obj.toString(10);
			},
			hexadecimal: function(obj) {
				return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
			}
		},
		defaultStyle: "decimal",
		styleAliases: {
			binary: [2, "bin"],
			octal: [8, "oct"],
			decimal: [10, "dec"],
			hexadecimal: [16, "hex"]
		}
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	var Type = require_type();
	var YAML_FLOAT_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
	function resolveYamlFloat(data) {
		if (data === null) return false;
		if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") return false;
		return true;
	}
	function constructYamlFloat(data) {
		var value = data.replace(/_/g, "").toLowerCase(), sign = value[0] === "-" ? -1 : 1, base, digits = [];
		if ("+-".indexOf(value[0]) >= 0) value = value.slice(1);
		if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
		else if (value === ".nan") return NaN;
		else if (value.indexOf(":") >= 0) {
			value.split(":").forEach(function(v) {
				digits.unshift(parseFloat(v, 10));
			});
			value = 0;
			base = 1;
			digits.forEach(function(d) {
				value += d * base;
				base *= 60;
			});
			return sign * value;
		}
		return sign * parseFloat(value, 10);
	}
	var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
	function representYamlFloat(object, style) {
		var res;
		if (isNaN(object)) switch (style) {
			case "lowercase": return ".nan";
			case "uppercase": return ".NAN";
			case "camelcase": return ".NaN";
		}
		else if (Number.POSITIVE_INFINITY === object) switch (style) {
			case "lowercase": return ".inf";
			case "uppercase": return ".INF";
			case "camelcase": return ".Inf";
		}
		else if (Number.NEGATIVE_INFINITY === object) switch (style) {
			case "lowercase": return "-.inf";
			case "uppercase": return "-.INF";
			case "camelcase": return "-.Inf";
		}
		else if (common.isNegativeZero(object)) return "-0.0";
		res = object.toString(10);
		return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
	}
	function isFloat(object) {
		return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
	}
	module.exports = new Type("tag:yaml.org,2002:float", {
		kind: "scalar",
		resolve: resolveYamlFloat,
		construct: constructYamlFloat,
		predicate: isFloat,
		represent: representYamlFloat,
		defaultStyle: "lowercase"
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_schema())({
		include: [require_failsafe()],
		implicit: [
			require_null(),
			require_bool(),
			require_int(),
			require_float()
		]
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_schema())({ include: [require_json()] });
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	var YAML_DATE_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
	var YAML_TIMESTAMP_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
	function resolveYamlTimestamp(data) {
		if (data === null) return false;
		if (YAML_DATE_REGEXP.exec(data) !== null) return true;
		if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
		return false;
	}
	function constructYamlTimestamp(data) {
		var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
		match = YAML_DATE_REGEXP.exec(data);
		if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
		if (match === null) throw new Error("Date resolve error");
		year = +match[1];
		month = +match[2] - 1;
		day = +match[3];
		if (!match[4]) return new Date(Date.UTC(year, month, day));
		hour = +match[4];
		minute = +match[5];
		second = +match[6];
		if (match[7]) {
			fraction = match[7].slice(0, 3);
			while (fraction.length < 3) fraction += "0";
			fraction = +fraction;
		}
		if (match[9]) {
			tz_hour = +match[10];
			tz_minute = +(match[11] || 0);
			delta = (tz_hour * 60 + tz_minute) * 6e4;
			if (match[9] === "-") delta = -delta;
		}
		date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
		if (delta) date.setTime(date.getTime() - delta);
		return date;
	}
	function representYamlTimestamp(object) {
		return object.toISOString();
	}
	module.exports = new Type("tag:yaml.org,2002:timestamp", {
		kind: "scalar",
		resolve: resolveYamlTimestamp,
		construct: constructYamlTimestamp,
		instanceOf: Date,
		represent: representYamlTimestamp
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	function resolveYamlMerge(data) {
		return data === "<<" || data === null;
	}
	module.exports = new Type("tag:yaml.org,2002:merge", {
		kind: "scalar",
		resolve: resolveYamlMerge
	});
}));
//#endregion
//#region node_modules/vite-plugin-node-polyfills/shims/buffer/dist/index.cjs
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperties(exports, {
		__esModule: { value: true },
		[Symbol.toStringTag]: { value: "Module" }
	});
	var buffer = {};
	var base64Js = {};
	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
	var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (var i = 0, len = code.length; i < len; ++i) {
		lookup[i] = code[i];
		revLookup[code.charCodeAt(i)] = i;
	}
	revLookup["-".charCodeAt(0)] = 62;
	revLookup["_".charCodeAt(0)] = 63;
	function getLens(b64) {
		var len = b64.length;
		if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var validLen = b64.indexOf("=");
		if (validLen === -1) validLen = len;
		var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
		return [validLen, placeHoldersLen];
	}
	function byteLength(b64) {
		var lens = getLens(b64);
		var validLen = lens[0];
		var placeHoldersLen = lens[1];
		return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	function _byteLength(b64, validLen, placeHoldersLen) {
		return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	function toByteArray(b64) {
		var tmp;
		var lens = getLens(b64);
		var validLen = lens[0];
		var placeHoldersLen = lens[1];
		var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
		var curByte = 0;
		var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
		var i;
		for (i = 0; i < len; i += 4) {
			tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
			arr[curByte++] = tmp >> 16 & 255;
			arr[curByte++] = tmp >> 8 & 255;
			arr[curByte++] = tmp & 255;
		}
		if (placeHoldersLen === 2) {
			tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
			arr[curByte++] = tmp & 255;
		}
		if (placeHoldersLen === 1) {
			tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
			arr[curByte++] = tmp >> 8 & 255;
			arr[curByte++] = tmp & 255;
		}
		return arr;
	}
	function tripletToBase64(num) {
		return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
	}
	function encodeChunk(uint8, start, end) {
		var tmp;
		var output = [];
		for (var i = start; i < end; i += 3) {
			tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
			output.push(tripletToBase64(tmp));
		}
		return output.join("");
	}
	function fromByteArray(uint8) {
		var tmp;
		var len = uint8.length;
		var extraBytes = len % 3;
		var parts = [];
		var maxChunkLength = 16383;
		for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
		if (extraBytes === 1) {
			tmp = uint8[len - 1];
			parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
		} else if (extraBytes === 2) {
			tmp = (uint8[len - 2] << 8) + uint8[len - 1];
			parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
		}
		return parts.join("");
	}
	var ieee754 = {};
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	ieee754.read = function(buffer, offset, isLE, mLen, nBytes) {
		var e, m;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var nBits = -7;
		var i = isLE ? nBytes - 1 : 0;
		var d = isLE ? -1 : 1;
		var s = buffer[offset + i];
		i += d;
		e = s & (1 << -nBits) - 1;
		s >>= -nBits;
		nBits += eLen;
		for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
		m = e & (1 << -nBits) - 1;
		e >>= -nBits;
		nBits += mLen;
		for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
		if (e === 0) e = 1 - eBias;
		else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
		else {
			m = m + Math.pow(2, mLen);
			e = e - eBias;
		}
		return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	ieee754.write = function(buffer, value, offset, isLE, mLen, nBytes) {
		var e, m, c;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
		var i = isLE ? 0 : nBytes - 1;
		var d = isLE ? 1 : -1;
		var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		value = Math.abs(value);
		if (isNaN(value) || value === Infinity) {
			m = isNaN(value) ? 1 : 0;
			e = eMax;
		} else {
			e = Math.floor(Math.log(value) / Math.LN2);
			if (value * (c = Math.pow(2, -e)) < 1) {
				e--;
				c *= 2;
			}
			if (e + eBias >= 1) value += rt / c;
			else value += rt * Math.pow(2, 1 - eBias);
			if (value * c >= 2) {
				e++;
				c /= 2;
			}
			if (e + eBias >= eMax) {
				m = 0;
				e = eMax;
			} else if (e + eBias >= 1) {
				m = (value * c - 1) * Math.pow(2, mLen);
				e = e + eBias;
			} else {
				m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
				e = 0;
			}
		}
		for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
		e = e << mLen | m;
		eLen += mLen;
		for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
		buffer[offset + i - d] |= s * 128;
	};
	/*!
	* The buffer module from node.js, for the browser.
	*
	* @author   Feross Aboukhadijeh <https://feross.org>
	* @license  MIT
	*/
	(function(exports$17) {
		const base64 = base64Js;
		const ieee754$1 = ieee754;
		const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
		exports$17.Buffer = Buffer;
		exports$17.SlowBuffer = SlowBuffer;
		exports$17.INSPECT_MAX_BYTES = 50;
		const K_MAX_LENGTH = 2147483647;
		exports$17.kMaxLength = K_MAX_LENGTH;
		const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
		/**
		* If `Buffer.TYPED_ARRAY_SUPPORT`:
		*   === true    Use Uint8Array implementation (fastest)
		*   === false   Print warning and recommend using `buffer` v4.x which has an Object
		*               implementation (most compatible, even IE6)
		*
		* Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		* Opera 11.6+, iOS 4.2+.
		*
		* We report that the browser does not support typed arrays if the are not subclassable
		* using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
		* (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
		* for __proto__ and has a buggy typed array implementation.
		*/
		Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
		if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
		function typedArraySupport() {
			try {
				const arr = new GlobalUint8Array(1);
				const proto = { foo: function() {
					return 42;
				} };
				Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
				Object.setPrototypeOf(arr, proto);
				return arr.foo() === 42;
			} catch (e) {
				return false;
			}
		}
		Object.defineProperty(Buffer.prototype, "parent", {
			enumerable: true,
			get: function() {
				if (!Buffer.isBuffer(this)) return void 0;
				return this.buffer;
			}
		});
		Object.defineProperty(Buffer.prototype, "offset", {
			enumerable: true,
			get: function() {
				if (!Buffer.isBuffer(this)) return void 0;
				return this.byteOffset;
			}
		});
		function createBuffer(length) {
			if (length > K_MAX_LENGTH) throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
			const buf = new GlobalUint8Array(length);
			Object.setPrototypeOf(buf, Buffer.prototype);
			return buf;
		}
		/**
		* The Buffer constructor returns instances of `Uint8Array` that have their
		* prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
		* `Uint8Array`, so the returned instances will have all the node `Buffer` methods
		* and the `Uint8Array` methods. Square bracket notation works as expected -- it
		* returns a single octet.
		*
		* The `Uint8Array` prototype remains unmodified.
		*/
		function Buffer(arg, encodingOrOffset, length) {
			if (typeof arg === "number") {
				if (typeof encodingOrOffset === "string") throw new TypeError("The \"string\" argument must be of type string. Received type number");
				return allocUnsafe(arg);
			}
			return from(arg, encodingOrOffset, length);
		}
		Buffer.poolSize = 8192;
		function from(value, encodingOrOffset, length) {
			if (typeof value === "string") return fromString(value, encodingOrOffset);
			if (GlobalArrayBuffer.isView(value)) return fromArrayView(value);
			if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
			if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof value === "number") throw new TypeError("The \"value\" argument must not be of type number. Received type number");
			const valueOf = value.valueOf && value.valueOf();
			if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
			const b = fromObject(value);
			if (b) return b;
			if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
			throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
		}
		/**
		* Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
		* if value is a number.
		* Buffer.from(str[, encoding])
		* Buffer.from(array)
		* Buffer.from(buffer)
		* Buffer.from(arrayBuffer[, byteOffset[, length]])
		**/
		Buffer.from = function(value, encodingOrOffset, length) {
			return from(value, encodingOrOffset, length);
		};
		Object.setPrototypeOf(Buffer.prototype, GlobalUint8Array.prototype);
		Object.setPrototypeOf(Buffer, GlobalUint8Array);
		function assertSize(size) {
			if (typeof size !== "number") throw new TypeError("\"size\" argument must be of type number");
			else if (size < 0) throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
		}
		function alloc(size, fill, encoding) {
			assertSize(size);
			if (size <= 0) return createBuffer(size);
			if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
			return createBuffer(size);
		}
		/**
		* Creates a new filled Buffer instance.
		* alloc(size[, fill[, encoding]])
		**/
		Buffer.alloc = function(size, fill, encoding) {
			return alloc(size, fill, encoding);
		};
		function allocUnsafe(size) {
			assertSize(size);
			return createBuffer(size < 0 ? 0 : checked(size) | 0);
		}
		/**
		* Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		* */
		Buffer.allocUnsafe = function(size) {
			return allocUnsafe(size);
		};
		/**
		* Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		*/
		Buffer.allocUnsafeSlow = function(size) {
			return allocUnsafe(size);
		};
		function fromString(string, encoding) {
			if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
			if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
			const length = byteLength(string, encoding) | 0;
			let buf = createBuffer(length);
			const actual = buf.write(string, encoding);
			if (actual !== length) buf = buf.slice(0, actual);
			return buf;
		}
		function fromArrayLike(array) {
			const length = array.length < 0 ? 0 : checked(array.length) | 0;
			const buf = createBuffer(length);
			for (let i = 0; i < length; i += 1) buf[i] = array[i] & 255;
			return buf;
		}
		function fromArrayView(arrayView) {
			if (isInstance(arrayView, GlobalUint8Array)) {
				const copy = new GlobalUint8Array(arrayView);
				return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
			}
			return fromArrayLike(arrayView);
		}
		function fromArrayBuffer(array, byteOffset, length) {
			if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("\"offset\" is outside of buffer bounds");
			if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
			let buf;
			if (byteOffset === void 0 && length === void 0) buf = new GlobalUint8Array(array);
			else if (length === void 0) buf = new GlobalUint8Array(array, byteOffset);
			else buf = new GlobalUint8Array(array, byteOffset, length);
			Object.setPrototypeOf(buf, Buffer.prototype);
			return buf;
		}
		function fromObject(obj) {
			if (Buffer.isBuffer(obj)) {
				const len = checked(obj.length) | 0;
				const buf = createBuffer(len);
				if (buf.length === 0) return buf;
				obj.copy(buf, 0, 0, len);
				return buf;
			}
			if (obj.length !== void 0) {
				if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
				return fromArrayLike(obj);
			}
			if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
		}
		function checked(length) {
			if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
			return length | 0;
		}
		function SlowBuffer(length) {
			if (+length != length) length = 0;
			return Buffer.alloc(+length);
		}
		Buffer.isBuffer = function isBuffer(b) {
			return b != null && b._isBuffer === true && b !== Buffer.prototype;
		};
		Buffer.compare = function compare(a, b) {
			if (isInstance(a, GlobalUint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
			if (isInstance(b, GlobalUint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
			if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
			if (a === b) return 0;
			let x = a.length;
			let y = b.length;
			for (let i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
				x = a[i];
				y = b[i];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		Buffer.isEncoding = function isEncoding(encoding) {
			switch (String(encoding).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return true;
				default: return false;
			}
		};
		Buffer.concat = function concat(list, length) {
			if (!Array.isArray(list)) throw new TypeError("\"list\" argument must be an Array of Buffers");
			if (list.length === 0) return Buffer.alloc(0);
			let i;
			if (length === void 0) {
				length = 0;
				for (i = 0; i < list.length; ++i) length += list[i].length;
			}
			const buffer = Buffer.allocUnsafe(length);
			let pos = 0;
			for (i = 0; i < list.length; ++i) {
				let buf = list[i];
				if (isInstance(buf, GlobalUint8Array)) if (pos + buf.length > buffer.length) {
					if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
					buf.copy(buffer, pos);
				} else GlobalUint8Array.prototype.set.call(buffer, buf, pos);
				else if (!Buffer.isBuffer(buf)) throw new TypeError("\"list\" argument must be an Array of Buffers");
				else buf.copy(buffer, pos);
				pos += buf.length;
			}
			return buffer;
		};
		function byteLength(string, encoding) {
			if (Buffer.isBuffer(string)) return string.length;
			if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) return string.byteLength;
			if (typeof string !== "string") throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
			const len = string.length;
			const mustMatch = arguments.length > 2 && arguments[2] === true;
			if (!mustMatch && len === 0) return 0;
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "ascii":
				case "latin1":
				case "binary": return len;
				case "utf8":
				case "utf-8": return utf8ToBytes(string).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return len * 2;
				case "hex": return len >>> 1;
				case "base64": return base64ToBytes(string).length;
				default:
					if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		}
		Buffer.byteLength = byteLength;
		function slowToString(encoding, start, end) {
			let loweredCase = false;
			if (start === void 0 || start < 0) start = 0;
			if (start > this.length) return "";
			if (end === void 0 || end > this.length) end = this.length;
			if (end <= 0) return "";
			end >>>= 0;
			start >>>= 0;
			if (end <= start) return "";
			if (!encoding) encoding = "utf8";
			while (true) switch (encoding) {
				case "hex": return hexSlice(this, start, end);
				case "utf8":
				case "utf-8": return utf8Slice(this, start, end);
				case "ascii": return asciiSlice(this, start, end);
				case "latin1":
				case "binary": return latin1Slice(this, start, end);
				case "base64": return base64Slice(this, start, end);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return utf16leSlice(this, start, end);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = (encoding + "").toLowerCase();
					loweredCase = true;
			}
		}
		Buffer.prototype._isBuffer = true;
		function swap(b, n, m) {
			const i = b[n];
			b[n] = b[m];
			b[m] = i;
		}
		Buffer.prototype.swap16 = function swap16() {
			const len = this.length;
			if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (let i = 0; i < len; i += 2) swap(this, i, i + 1);
			return this;
		};
		Buffer.prototype.swap32 = function swap32() {
			const len = this.length;
			if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (let i = 0; i < len; i += 4) {
				swap(this, i, i + 3);
				swap(this, i + 1, i + 2);
			}
			return this;
		};
		Buffer.prototype.swap64 = function swap64() {
			const len = this.length;
			if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (let i = 0; i < len; i += 8) {
				swap(this, i, i + 7);
				swap(this, i + 1, i + 6);
				swap(this, i + 2, i + 5);
				swap(this, i + 3, i + 4);
			}
			return this;
		};
		Buffer.prototype.toString = function toString() {
			const length = this.length;
			if (length === 0) return "";
			if (arguments.length === 0) return utf8Slice(this, 0, length);
			return slowToString.apply(this, arguments);
		};
		Buffer.prototype.toLocaleString = Buffer.prototype.toString;
		Buffer.prototype.equals = function equals(b) {
			if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
			if (this === b) return true;
			return Buffer.compare(this, b) === 0;
		};
		Buffer.prototype.inspect = function inspect() {
			let str = "";
			const max = exports$17.INSPECT_MAX_BYTES;
			str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
			if (this.length > max) str += " ... ";
			return "<Buffer " + str + ">";
		};
		if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
		Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
			if (isInstance(target, GlobalUint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
			if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
			if (start === void 0) start = 0;
			if (end === void 0) end = target ? target.length : 0;
			if (thisStart === void 0) thisStart = 0;
			if (thisEnd === void 0) thisEnd = this.length;
			if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
			if (thisStart >= thisEnd && start >= end) return 0;
			if (thisStart >= thisEnd) return -1;
			if (start >= end) return 1;
			start >>>= 0;
			end >>>= 0;
			thisStart >>>= 0;
			thisEnd >>>= 0;
			if (this === target) return 0;
			let x = thisEnd - thisStart;
			let y = end - start;
			const len = Math.min(x, y);
			const thisCopy = this.slice(thisStart, thisEnd);
			const targetCopy = target.slice(start, end);
			for (let i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
				x = thisCopy[i];
				y = targetCopy[i];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
			if (buffer.length === 0) return -1;
			if (typeof byteOffset === "string") {
				encoding = byteOffset;
				byteOffset = 0;
			} else if (byteOffset > 2147483647) byteOffset = 2147483647;
			else if (byteOffset < -2147483648) byteOffset = -2147483648;
			byteOffset = +byteOffset;
			if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
			if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
			if (byteOffset >= buffer.length) if (dir) return -1;
			else byteOffset = buffer.length - 1;
			else if (byteOffset < 0) if (dir) byteOffset = 0;
			else return -1;
			if (typeof val === "string") val = Buffer.from(val, encoding);
			if (Buffer.isBuffer(val)) {
				if (val.length === 0) return -1;
				return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
			} else if (typeof val === "number") {
				val = val & 255;
				if (typeof GlobalUint8Array.prototype.indexOf === "function") if (dir) return GlobalUint8Array.prototype.indexOf.call(buffer, val, byteOffset);
				else return GlobalUint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
				return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
			}
			throw new TypeError("val must be string, number or Buffer");
		}
		function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
			let indexSize = 1;
			let arrLength = arr.length;
			let valLength = val.length;
			if (encoding !== void 0) {
				encoding = String(encoding).toLowerCase();
				if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
					if (arr.length < 2 || val.length < 2) return -1;
					indexSize = 2;
					arrLength /= 2;
					valLength /= 2;
					byteOffset /= 2;
				}
			}
			function read(buf, i) {
				if (indexSize === 1) return buf[i];
				else return buf.readUInt16BE(i * indexSize);
			}
			let i;
			if (dir) {
				let foundIndex = -1;
				for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
					if (foundIndex === -1) foundIndex = i;
					if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
				} else {
					if (foundIndex !== -1) i -= i - foundIndex;
					foundIndex = -1;
				}
			} else {
				if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
				for (i = byteOffset; i >= 0; i--) {
					let found = true;
					for (let j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
						found = false;
						break;
					}
					if (found) return i;
				}
			}
			return -1;
		}
		Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
			return this.indexOf(val, byteOffset, encoding) !== -1;
		};
		Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
		};
		Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
		};
		function hexWrite(buf, string, offset, length) {
			offset = Number(offset) || 0;
			const remaining = buf.length - offset;
			if (!length) length = remaining;
			else {
				length = Number(length);
				if (length > remaining) length = remaining;
			}
			const strLen = string.length;
			if (length > strLen / 2) length = strLen / 2;
			let i;
			for (i = 0; i < length; ++i) {
				const parsed = parseInt(string.substr(i * 2, 2), 16);
				if (numberIsNaN(parsed)) return i;
				buf[offset + i] = parsed;
			}
			return i;
		}
		function utf8Write(buf, string, offset, length) {
			return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
		}
		function asciiWrite(buf, string, offset, length) {
			return blitBuffer(asciiToBytes(string), buf, offset, length);
		}
		function base64Write(buf, string, offset, length) {
			return blitBuffer(base64ToBytes(string), buf, offset, length);
		}
		function ucs2Write(buf, string, offset, length) {
			return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
		}
		Buffer.prototype.write = function write(string, offset, length, encoding) {
			if (offset === void 0) {
				encoding = "utf8";
				length = this.length;
				offset = 0;
			} else if (length === void 0 && typeof offset === "string") {
				encoding = offset;
				length = this.length;
				offset = 0;
			} else if (isFinite(offset)) {
				offset = offset >>> 0;
				if (isFinite(length)) {
					length = length >>> 0;
					if (encoding === void 0) encoding = "utf8";
				} else {
					encoding = length;
					length = void 0;
				}
			} else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			const remaining = this.length - offset;
			if (length === void 0 || length > remaining) length = remaining;
			if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			if (!encoding) encoding = "utf8";
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "hex": return hexWrite(this, string, offset, length);
				case "utf8":
				case "utf-8": return utf8Write(this, string, offset, length);
				case "ascii":
				case "latin1":
				case "binary": return asciiWrite(this, string, offset, length);
				case "base64": return base64Write(this, string, offset, length);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return ucs2Write(this, string, offset, length);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		};
		Buffer.prototype.toJSON = function toJSON() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		function base64Slice(buf, start, end) {
			if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
			else return base64.fromByteArray(buf.slice(start, end));
		}
		function utf8Slice(buf, start, end) {
			end = Math.min(buf.length, end);
			const res = [];
			let i = start;
			while (i < end) {
				const firstByte = buf[i];
				let codePoint = null;
				let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
				if (i + bytesPerSequence <= end) {
					let secondByte, thirdByte, fourthByte, tempCodePoint;
					switch (bytesPerSequence) {
						case 1:
							if (firstByte < 128) codePoint = firstByte;
							break;
						case 2:
							secondByte = buf[i + 1];
							if ((secondByte & 192) === 128) {
								tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
								if (tempCodePoint > 127) codePoint = tempCodePoint;
							}
							break;
						case 3:
							secondByte = buf[i + 1];
							thirdByte = buf[i + 2];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
								if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
							}
							break;
						case 4:
							secondByte = buf[i + 1];
							thirdByte = buf[i + 2];
							fourthByte = buf[i + 3];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
								if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
							}
					}
				}
				if (codePoint === null) {
					codePoint = 65533;
					bytesPerSequence = 1;
				} else if (codePoint > 65535) {
					codePoint -= 65536;
					res.push(codePoint >>> 10 & 1023 | 55296);
					codePoint = 56320 | codePoint & 1023;
				}
				res.push(codePoint);
				i += bytesPerSequence;
			}
			return decodeCodePointsArray(res);
		}
		const MAX_ARGUMENTS_LENGTH = 4096;
		function decodeCodePointsArray(codePoints) {
			const len = codePoints.length;
			if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
			let res = "";
			let i = 0;
			while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
			return res;
		}
		function asciiSlice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i] & 127);
			return ret;
		}
		function latin1Slice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
			return ret;
		}
		function hexSlice(buf, start, end) {
			const len = buf.length;
			if (!start || start < 0) start = 0;
			if (!end || end < 0 || end > len) end = len;
			let out = "";
			for (let i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
			return out;
		}
		function utf16leSlice(buf, start, end) {
			const bytes = buf.slice(start, end);
			let res = "";
			for (let i = 0; i < bytes.length - 1; i += 2) res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
			return res;
		}
		Buffer.prototype.slice = function slice(start, end) {
			const len = this.length;
			start = ~~start;
			end = end === void 0 ? len : ~~end;
			if (start < 0) {
				start += len;
				if (start < 0) start = 0;
			} else if (start > len) start = len;
			if (end < 0) {
				end += len;
				if (end < 0) end = 0;
			} else if (end > len) end = len;
			if (end < start) end = start;
			const newBuf = this.subarray(start, end);
			Object.setPrototypeOf(newBuf, Buffer.prototype);
			return newBuf;
		};
		function checkOffset(offset, ext, length) {
			if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
			if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
		}
		Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset];
			let mul = 1;
			let i = 0;
			while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
			return val;
		};
		Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset + --byteLength];
			let mul = 1;
			while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
			return val;
		};
		Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			return this[offset];
		};
		Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] | this[offset + 1] << 8;
		};
		Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] << 8 | this[offset + 1];
		};
		Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
		};
		Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
		};
		Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
			const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
			return BigInt(lo) + (BigInt(hi) << BigInt(32));
		});
		Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
			return (BigInt(hi) << BigInt(32)) + BigInt(lo);
		});
		Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset];
			let mul = 1;
			let i = 0;
			while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength);
			return val;
		};
		Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let i = byteLength;
			let mul = 1;
			let val = this[offset + --i];
			while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength);
			return val;
		};
		Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			if (!(this[offset] & 128)) return this[offset];
			return (255 - this[offset] + 1) * -1;
		};
		Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset] | this[offset + 1] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset + 1] | this[offset] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
		};
		Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
		};
		Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
			return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
		});
		Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
		});
		Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, true, 23, 4);
		};
		Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, false, 23, 4);
		};
		Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, true, 52, 8);
		};
		Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, false, 52, 8);
		};
		function checkInt(buf, value, offset, ext, max, min) {
			if (!Buffer.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
			if (value > max || value < min) throw new RangeError("\"value\" argument is out of bounds");
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
		}
		Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength) - 1;
				checkInt(this, value, offset, byteLength, maxBytes, 0);
			}
			let mul = 1;
			let i = 0;
			this[offset] = value & 255;
			while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
			return offset + byteLength;
		};
		Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength) - 1;
				checkInt(this, value, offset, byteLength, maxBytes, 0);
			}
			let i = byteLength - 1;
			let mul = 1;
			this[offset + i] = value & 255;
			while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
			return offset + byteLength;
		};
		Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset + 3] = value >>> 24;
			this[offset + 2] = value >>> 16;
			this[offset + 1] = value >>> 8;
			this[offset] = value & 255;
			return offset + 4;
		};
		Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		function wrtBigUInt64LE(buf, value, offset, min, max) {
			checkIntBI(value, min, max, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			return offset;
		}
		function wrtBigUInt64BE(buf, value, offset, min, max) {
			checkIntBI(value, min, max, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset + 7] = lo;
			lo = lo >> 8;
			buf[offset + 6] = lo;
			lo = lo >> 8;
			buf[offset + 5] = lo;
			lo = lo >> 8;
			buf[offset + 4] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset + 3] = hi;
			hi = hi >> 8;
			buf[offset + 2] = hi;
			hi = hi >> 8;
			buf[offset + 1] = hi;
			hi = hi >> 8;
			buf[offset] = hi;
			return offset + 8;
		}
		Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength - 1);
				checkInt(this, value, offset, byteLength, limit - 1, -limit);
			}
			let i = 0;
			let mul = 1;
			let sub = 0;
			this[offset] = value & 255;
			while (++i < byteLength && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
				this[offset + i] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength;
		};
		Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength - 1);
				checkInt(this, value, offset, byteLength, limit - 1, -limit);
			}
			let i = byteLength - 1;
			let mul = 1;
			let sub = 0;
			this[offset + i] = value & 255;
			while (--i >= 0 && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
				this[offset + i] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength;
		};
		Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
			if (value < 0) value = 255 + value + 1;
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			this[offset + 2] = value >>> 16;
			this[offset + 3] = value >>> 24;
			return offset + 4;
		};
		Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			if (value < 0) value = 4294967295 + value + 1;
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		function checkIEEE754(buf, value, offset, ext, max, min) {
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
			if (offset < 0) throw new RangeError("Index out of range");
		}
		function writeFloat(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 4);
			ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
			return offset + 4;
		}
		Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
			return writeFloat(this, value, offset, true, noAssert);
		};
		Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
			return writeFloat(this, value, offset, false, noAssert);
		};
		function writeDouble(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 8);
			ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
			return offset + 8;
		}
		Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
			return writeDouble(this, value, offset, true, noAssert);
		};
		Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
			return writeDouble(this, value, offset, false, noAssert);
		};
		Buffer.prototype.copy = function copy(target, targetStart, start, end) {
			if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
			if (!start) start = 0;
			if (!end && end !== 0) end = this.length;
			if (targetStart >= target.length) targetStart = target.length;
			if (!targetStart) targetStart = 0;
			if (end > 0 && end < start) end = start;
			if (end === start) return 0;
			if (target.length === 0 || this.length === 0) return 0;
			if (targetStart < 0) throw new RangeError("targetStart out of bounds");
			if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
			if (end < 0) throw new RangeError("sourceEnd out of bounds");
			if (end > this.length) end = this.length;
			if (target.length - targetStart < end - start) end = target.length - targetStart + start;
			const len = end - start;
			if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end);
			else GlobalUint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
			return len;
		};
		Buffer.prototype.fill = function fill(val, start, end, encoding) {
			if (typeof val === "string") {
				if (typeof start === "string") {
					encoding = start;
					start = 0;
					end = this.length;
				} else if (typeof end === "string") {
					encoding = end;
					end = this.length;
				}
				if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
				if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
				if (val.length === 1) {
					const code = val.charCodeAt(0);
					if (encoding === "utf8" && code < 128 || encoding === "latin1") val = code;
				}
			} else if (typeof val === "number") val = val & 255;
			else if (typeof val === "boolean") val = Number(val);
			if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
			if (end <= start) return this;
			start = start >>> 0;
			end = end === void 0 ? this.length : end >>> 0;
			if (!val) val = 0;
			let i;
			if (typeof val === "number") for (i = start; i < end; ++i) this[i] = val;
			else {
				const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
				const len = bytes.length;
				if (len === 0) throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
				for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
			}
			return this;
		};
		const errors = {};
		function E(sym, getMessage, Base) {
			errors[sym] = class NodeError extends Base {
				constructor() {
					super();
					Object.defineProperty(this, "message", {
						value: getMessage.apply(this, arguments),
						writable: true,
						configurable: true
					});
					this.name = `${this.name} [${sym}]`;
					this.stack;
					delete this.name;
				}
				get code() {
					return sym;
				}
				set code(value) {
					Object.defineProperty(this, "code", {
						configurable: true,
						enumerable: true,
						value,
						writable: true
					});
				}
				toString() {
					return `${this.name} [${sym}]: ${this.message}`;
				}
			};
		}
		E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
			if (name) return `${name} is outside of buffer bounds`;
			return "Attempt to access memory outside buffer bounds";
		}, RangeError);
		E("ERR_INVALID_ARG_TYPE", function(name, actual) {
			return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
		}, TypeError);
		E("ERR_OUT_OF_RANGE", function(str, range, input) {
			let msg = `The value of "${str}" is out of range.`;
			let received = input;
			if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
			else if (typeof input === "bigint") {
				received = String(input);
				if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
				received += "n";
			}
			msg += ` It must be ${range}. Received ${received}`;
			return msg;
		}, RangeError);
		function addNumericalSeparator(val) {
			let res = "";
			let i = val.length;
			const start = val[0] === "-" ? 1 : 0;
			for (; i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
			return `${val.slice(0, i)}${res}`;
		}
		function checkBounds(buf, offset, byteLength) {
			validateNumber(offset, "offset");
			if (buf[offset] === void 0 || buf[offset + byteLength] === void 0) boundsError(offset, buf.length - (byteLength + 1));
		}
		function checkIntBI(value, min, max, buf, offset, byteLength) {
			if (value > max || value < min) {
				const n = typeof min === "bigint" ? "n" : "";
				let range;
				if (byteLength > 3) if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
				else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength + 1) * 8 - 1}${n}`;
				else range = `>= ${min}${n} and <= ${max}${n}`;
				throw new errors.ERR_OUT_OF_RANGE("value", range, value);
			}
			checkBounds(buf, offset, byteLength);
		}
		function validateNumber(value, name) {
			if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
		}
		function boundsError(value, length, type) {
			if (Math.floor(value) !== value) {
				validateNumber(value, type);
				throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
			}
			if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
			throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
		}
		const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
		function base64clean(str) {
			str = str.split("=")[0];
			str = str.trim().replace(INVALID_BASE64_RE, "");
			if (str.length < 2) return "";
			while (str.length % 4 !== 0) str = str + "=";
			return str;
		}
		function utf8ToBytes(string, units) {
			units = units || Infinity;
			let codePoint;
			const length = string.length;
			let leadSurrogate = null;
			const bytes = [];
			for (let i = 0; i < length; ++i) {
				codePoint = string.charCodeAt(i);
				if (codePoint > 55295 && codePoint < 57344) {
					if (!leadSurrogate) {
						if (codePoint > 56319) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						} else if (i + 1 === length) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						}
						leadSurrogate = codePoint;
						continue;
					}
					if (codePoint < 56320) {
						if ((units -= 3) > -1) bytes.push(239, 191, 189);
						leadSurrogate = codePoint;
						continue;
					}
					codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
				} else if (leadSurrogate) {
					if ((units -= 3) > -1) bytes.push(239, 191, 189);
				}
				leadSurrogate = null;
				if (codePoint < 128) {
					if ((units -= 1) < 0) break;
					bytes.push(codePoint);
				} else if (codePoint < 2048) {
					if ((units -= 2) < 0) break;
					bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
				} else if (codePoint < 65536) {
					if ((units -= 3) < 0) break;
					bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else if (codePoint < 1114112) {
					if ((units -= 4) < 0) break;
					bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else throw new Error("Invalid code point");
			}
			return bytes;
		}
		function asciiToBytes(str) {
			const byteArray = [];
			for (let i = 0; i < str.length; ++i) byteArray.push(str.charCodeAt(i) & 255);
			return byteArray;
		}
		function utf16leToBytes(str, units) {
			let c, hi, lo;
			const byteArray = [];
			for (let i = 0; i < str.length; ++i) {
				if ((units -= 2) < 0) break;
				c = str.charCodeAt(i);
				hi = c >> 8;
				lo = c % 256;
				byteArray.push(lo);
				byteArray.push(hi);
			}
			return byteArray;
		}
		function base64ToBytes(str) {
			return base64.toByteArray(base64clean(str));
		}
		function blitBuffer(src, dst, offset, length) {
			let i;
			for (i = 0; i < length; ++i) {
				if (i + offset >= dst.length || i >= src.length) break;
				dst[i + offset] = src[i];
			}
			return i;
		}
		function isInstance(obj, type) {
			return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
		}
		function numberIsNaN(obj) {
			return obj !== obj;
		}
		const hexSliceLookupTable = (function() {
			const alphabet = "0123456789abcdef";
			const table = new Array(256);
			for (let i = 0; i < 16; ++i) {
				const i16 = i * 16;
				for (let j = 0; j < 16; ++j) table[i16 + j] = alphabet[i] + alphabet[j];
			}
			return table;
		})();
		function defineBigIntMethod(fn) {
			return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
		}
		function BufferBigIntNotDefined() {
			throw new Error("BigInt not supported");
		}
	})(buffer);
	var Buffer = buffer.Buffer;
	exports.Blob = buffer.Blob;
	exports.BlobOptions = buffer.BlobOptions;
	exports.Buffer = buffer.Buffer;
	exports.File = buffer.File;
	exports.FileOptions = buffer.FileOptions;
	exports.INSPECT_MAX_BYTES = buffer.INSPECT_MAX_BYTES;
	exports.SlowBuffer = buffer.SlowBuffer;
	exports.TranscodeEncoding = buffer.TranscodeEncoding;
	exports.atob = buffer.atob;
	exports.btoa = buffer.btoa;
	exports.constants = buffer.constants;
	exports.default = Buffer;
	exports.isAscii = buffer.isAscii;
	exports.isUtf8 = buffer.isUtf8;
	exports.kMaxLength = buffer.kMaxLength;
	exports.kStringMaxLength = buffer.kStringMaxLength;
	exports.resolveObjectURL = buffer.resolveObjectURL;
	exports.transcode = buffer.transcode;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var NodeBuffer;
	try {
		NodeBuffer = require_dist().Buffer;
	} catch (__) {}
	var Type = require_type();
	var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
	function resolveYamlBinary(data) {
		if (data === null) return false;
		var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
		for (idx = 0; idx < max; idx++) {
			code = map.indexOf(data.charAt(idx));
			if (code > 64) continue;
			if (code < 0) return false;
			bitlen += 6;
		}
		return bitlen % 8 === 0;
	}
	function constructYamlBinary(data) {
		var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
		for (idx = 0; idx < max; idx++) {
			if (idx % 4 === 0 && idx) {
				result.push(bits >> 16 & 255);
				result.push(bits >> 8 & 255);
				result.push(bits & 255);
			}
			bits = bits << 6 | map.indexOf(input.charAt(idx));
		}
		tailbits = max % 4 * 6;
		if (tailbits === 0) {
			result.push(bits >> 16 & 255);
			result.push(bits >> 8 & 255);
			result.push(bits & 255);
		} else if (tailbits === 18) {
			result.push(bits >> 10 & 255);
			result.push(bits >> 2 & 255);
		} else if (tailbits === 12) result.push(bits >> 4 & 255);
		if (NodeBuffer) return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
		return result;
	}
	function representYamlBinary(object) {
		var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
		for (idx = 0; idx < max; idx++) {
			if (idx % 3 === 0 && idx) {
				result += map[bits >> 18 & 63];
				result += map[bits >> 12 & 63];
				result += map[bits >> 6 & 63];
				result += map[bits & 63];
			}
			bits = (bits << 8) + object[idx];
		}
		tail = max % 3;
		if (tail === 0) {
			result += map[bits >> 18 & 63];
			result += map[bits >> 12 & 63];
			result += map[bits >> 6 & 63];
			result += map[bits & 63];
		} else if (tail === 2) {
			result += map[bits >> 10 & 63];
			result += map[bits >> 4 & 63];
			result += map[bits << 2 & 63];
			result += map[64];
		} else if (tail === 1) {
			result += map[bits >> 2 & 63];
			result += map[bits << 4 & 63];
			result += map[64];
			result += map[64];
		}
		return result;
	}
	function isBinary(object) {
		return NodeBuffer && NodeBuffer.isBuffer(object);
	}
	module.exports = new Type("tag:yaml.org,2002:binary", {
		kind: "scalar",
		resolve: resolveYamlBinary,
		construct: constructYamlBinary,
		predicate: isBinary,
		represent: representYamlBinary
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	var _toString = Object.prototype.toString;
	function resolveYamlOmap(data) {
		if (data === null) return true;
		var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
		for (index = 0, length = object.length; index < length; index += 1) {
			pair = object[index];
			pairHasKey = false;
			if (_toString.call(pair) !== "[object Object]") return false;
			for (pairKey in pair) if (_hasOwnProperty.call(pair, pairKey)) if (!pairHasKey) pairHasKey = true;
			else return false;
			if (!pairHasKey) return false;
			if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
			else return false;
		}
		return true;
	}
	function constructYamlOmap(data) {
		return data !== null ? data : [];
	}
	module.exports = new Type("tag:yaml.org,2002:omap", {
		kind: "sequence",
		resolve: resolveYamlOmap,
		construct: constructYamlOmap
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	var _toString = Object.prototype.toString;
	function resolveYamlPairs(data) {
		if (data === null) return true;
		var index, length, pair, keys, result, object = data;
		result = new Array(object.length);
		for (index = 0, length = object.length; index < length; index += 1) {
			pair = object[index];
			if (_toString.call(pair) !== "[object Object]") return false;
			keys = Object.keys(pair);
			if (keys.length !== 1) return false;
			result[index] = [keys[0], pair[keys[0]]];
		}
		return true;
	}
	function constructYamlPairs(data) {
		if (data === null) return [];
		var index, length, pair, keys, result, object = data;
		result = new Array(object.length);
		for (index = 0, length = object.length; index < length; index += 1) {
			pair = object[index];
			keys = Object.keys(pair);
			result[index] = [keys[0], pair[keys[0]]];
		}
		return result;
	}
	module.exports = new Type("tag:yaml.org,2002:pairs", {
		kind: "sequence",
		resolve: resolveYamlPairs,
		construct: constructYamlPairs
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	function resolveYamlSet(data) {
		if (data === null) return true;
		var key, object = data;
		for (key in object) if (_hasOwnProperty.call(object, key)) {
			if (object[key] !== null) return false;
		}
		return true;
	}
	function constructYamlSet(data) {
		return data !== null ? data : {};
	}
	module.exports = new Type("tag:yaml.org,2002:set", {
		kind: "mapping",
		resolve: resolveYamlSet,
		construct: constructYamlSet
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = new (require_schema())({
		include: [require_core()],
		implicit: [require_timestamp(), require_merge()],
		explicit: [
			require_binary(),
			require_omap(),
			require_pairs(),
			require_set()
		]
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	function resolveJavascriptUndefined() {
		return true;
	}
	function constructJavascriptUndefined() {}
	function representJavascriptUndefined() {
		return "";
	}
	function isUndefined(object) {
		return typeof object === "undefined";
	}
	module.exports = new Type("tag:yaml.org,2002:js/undefined", {
		kind: "scalar",
		resolve: resolveJavascriptUndefined,
		construct: constructJavascriptUndefined,
		predicate: isUndefined,
		represent: representJavascriptUndefined
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Type = require_type();
	function resolveJavascriptRegExp(data) {
		if (data === null) return false;
		if (data.length === 0) return false;
		var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
		if (regexp[0] === "/") {
			if (tail) modifiers = tail[1];
			if (modifiers.length > 3) return false;
			if (regexp[regexp.length - modifiers.length - 1] !== "/") return false;
		}
		return true;
	}
	function constructJavascriptRegExp(data) {
		var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
		if (regexp[0] === "/") {
			if (tail) modifiers = tail[1];
			regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
		}
		return new RegExp(regexp, modifiers);
	}
	function representJavascriptRegExp(object) {
		var result = "/" + object.source + "/";
		if (object.global) result += "g";
		if (object.multiline) result += "m";
		if (object.ignoreCase) result += "i";
		return result;
	}
	function isRegExp(object) {
		return Object.prototype.toString.call(object) === "[object RegExp]";
	}
	module.exports = new Type("tag:yaml.org,2002:js/regexp", {
		kind: "scalar",
		resolve: resolveJavascriptRegExp,
		construct: constructJavascriptRegExp,
		predicate: isRegExp,
		represent: representJavascriptRegExp
	});
}));
//#endregion
//#region node_modules/esprima/dist/esprima.js
var require_esprima = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function webpackUniversalModuleDefinition(root, factory) {
		/* istanbul ignore next */
		if (typeof exports === "object" && typeof module === "object") module.exports = factory();
		else if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof exports === "object") exports["esprima"] = factory();
		else root["esprima"] = factory();
	})(exports, function() {
		return (function(modules) {
			var installedModules = {};
			function __webpack_require__(moduleId) {
				/* istanbul ignore if */
				if (installedModules[moduleId]) return installedModules[moduleId].exports;
				var module$1 = installedModules[moduleId] = {
					exports: {},
					id: moduleId,
					loaded: false
				};
				modules[moduleId].call(module$1.exports, module$1, module$1.exports, __webpack_require__);
				module$1.loaded = true;
				return module$1.exports;
			}
			__webpack_require__.m = modules;
			__webpack_require__.c = installedModules;
			__webpack_require__.p = "";
			return __webpack_require__(0);
		})([
			function(module$2, exports$1, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$1, "__esModule", { value: true });
				var comment_handler_1 = __webpack_require__(1);
				var jsx_parser_1 = __webpack_require__(3);
				var parser_1 = __webpack_require__(8);
				var tokenizer_1 = __webpack_require__(15);
				function parse(code, options, delegate) {
					var commentHandler = null;
					var proxyDelegate = function(node, metadata) {
						if (delegate) delegate(node, metadata);
						if (commentHandler) commentHandler.visit(node, metadata);
					};
					var parserDelegate = typeof delegate === "function" ? proxyDelegate : null;
					var collectComment = false;
					if (options) {
						collectComment = typeof options.comment === "boolean" && options.comment;
						var attachComment = typeof options.attachComment === "boolean" && options.attachComment;
						if (collectComment || attachComment) {
							commentHandler = new comment_handler_1.CommentHandler();
							commentHandler.attach = attachComment;
							options.comment = true;
							parserDelegate = proxyDelegate;
						}
					}
					var isModule = false;
					if (options && typeof options.sourceType === "string") isModule = options.sourceType === "module";
					var parser;
					if (options && typeof options.jsx === "boolean" && options.jsx) parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
					else parser = new parser_1.Parser(code, options, parserDelegate);
					var ast = isModule ? parser.parseModule() : parser.parseScript();
					if (collectComment && commentHandler) ast.comments = commentHandler.comments;
					if (parser.config.tokens) ast.tokens = parser.tokens;
					if (parser.config.tolerant) ast.errors = parser.errorHandler.errors;
					return ast;
				}
				exports$1.parse = parse;
				function parseModule(code, options, delegate) {
					var parsingOptions = options || {};
					parsingOptions.sourceType = "module";
					return parse(code, parsingOptions, delegate);
				}
				exports$1.parseModule = parseModule;
				function parseScript(code, options, delegate) {
					var parsingOptions = options || {};
					parsingOptions.sourceType = "script";
					return parse(code, parsingOptions, delegate);
				}
				exports$1.parseScript = parseScript;
				function tokenize(code, options, delegate) {
					var tokenizer = new tokenizer_1.Tokenizer(code, options);
					var tokens = [];
					try {
						while (true) {
							var token = tokenizer.getNextToken();
							if (!token) break;
							if (delegate) token = delegate(token);
							tokens.push(token);
						}
					} catch (e) {
						tokenizer.errorHandler.tolerate(e);
					}
					if (tokenizer.errorHandler.tolerant) tokens.errors = tokenizer.errors();
					return tokens;
				}
				exports$1.tokenize = tokenize;
				exports$1.Syntax = __webpack_require__(2).Syntax;
				exports$1.version = "4.0.1";
			},
			function(module$3, exports$2, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$2, "__esModule", { value: true });
				var syntax_1 = __webpack_require__(2);
				exports$2.CommentHandler = function() {
					function CommentHandler() {
						this.attach = false;
						this.comments = [];
						this.stack = [];
						this.leading = [];
						this.trailing = [];
					}
					CommentHandler.prototype.insertInnerComments = function(node, metadata) {
						if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
							var innerComments = [];
							for (var i = this.leading.length - 1; i >= 0; --i) {
								var entry = this.leading[i];
								if (metadata.end.offset >= entry.start) {
									innerComments.unshift(entry.comment);
									this.leading.splice(i, 1);
									this.trailing.splice(i, 1);
								}
							}
							if (innerComments.length) node.innerComments = innerComments;
						}
					};
					CommentHandler.prototype.findTrailingComments = function(metadata) {
						var trailingComments = [];
						if (this.trailing.length > 0) {
							for (var i = this.trailing.length - 1; i >= 0; --i) {
								var entry_1 = this.trailing[i];
								if (entry_1.start >= metadata.end.offset) trailingComments.unshift(entry_1.comment);
							}
							this.trailing.length = 0;
							return trailingComments;
						}
						var entry = this.stack[this.stack.length - 1];
						if (entry && entry.node.trailingComments) {
							var firstComment = entry.node.trailingComments[0];
							if (firstComment && firstComment.range[0] >= metadata.end.offset) {
								trailingComments = entry.node.trailingComments;
								delete entry.node.trailingComments;
							}
						}
						return trailingComments;
					};
					CommentHandler.prototype.findLeadingComments = function(metadata) {
						var leadingComments = [];
						var target;
						while (this.stack.length > 0) {
							var entry = this.stack[this.stack.length - 1];
							if (entry && entry.start >= metadata.start.offset) {
								target = entry.node;
								this.stack.pop();
							} else break;
						}
						if (target) {
							for (var i = (target.leadingComments ? target.leadingComments.length : 0) - 1; i >= 0; --i) {
								var comment = target.leadingComments[i];
								if (comment.range[1] <= metadata.start.offset) {
									leadingComments.unshift(comment);
									target.leadingComments.splice(i, 1);
								}
							}
							if (target.leadingComments && target.leadingComments.length === 0) delete target.leadingComments;
							return leadingComments;
						}
						for (var i = this.leading.length - 1; i >= 0; --i) {
							var entry = this.leading[i];
							if (entry.start <= metadata.start.offset) {
								leadingComments.unshift(entry.comment);
								this.leading.splice(i, 1);
							}
						}
						return leadingComments;
					};
					CommentHandler.prototype.visitNode = function(node, metadata) {
						if (node.type === syntax_1.Syntax.Program && node.body.length > 0) return;
						this.insertInnerComments(node, metadata);
						var trailingComments = this.findTrailingComments(metadata);
						var leadingComments = this.findLeadingComments(metadata);
						if (leadingComments.length > 0) node.leadingComments = leadingComments;
						if (trailingComments.length > 0) node.trailingComments = trailingComments;
						this.stack.push({
							node,
							start: metadata.start.offset
						});
					};
					CommentHandler.prototype.visitComment = function(node, metadata) {
						var type = node.type[0] === "L" ? "Line" : "Block";
						var comment = {
							type,
							value: node.value
						};
						if (node.range) comment.range = node.range;
						if (node.loc) comment.loc = node.loc;
						this.comments.push(comment);
						if (this.attach) {
							var entry = {
								comment: {
									type,
									value: node.value,
									range: [metadata.start.offset, metadata.end.offset]
								},
								start: metadata.start.offset
							};
							if (node.loc) entry.comment.loc = node.loc;
							node.type = type;
							this.leading.push(entry);
							this.trailing.push(entry);
						}
					};
					CommentHandler.prototype.visit = function(node, metadata) {
						if (node.type === "LineComment") this.visitComment(node, metadata);
						else if (node.type === "BlockComment") this.visitComment(node, metadata);
						else if (this.attach) this.visitNode(node, metadata);
					};
					return CommentHandler;
				}();
			},
			function(module$4, exports$3) {
				"use strict";
				Object.defineProperty(exports$3, "__esModule", { value: true });
				exports$3.Syntax = {
					AssignmentExpression: "AssignmentExpression",
					AssignmentPattern: "AssignmentPattern",
					ArrayExpression: "ArrayExpression",
					ArrayPattern: "ArrayPattern",
					ArrowFunctionExpression: "ArrowFunctionExpression",
					AwaitExpression: "AwaitExpression",
					BlockStatement: "BlockStatement",
					BinaryExpression: "BinaryExpression",
					BreakStatement: "BreakStatement",
					CallExpression: "CallExpression",
					CatchClause: "CatchClause",
					ClassBody: "ClassBody",
					ClassDeclaration: "ClassDeclaration",
					ClassExpression: "ClassExpression",
					ConditionalExpression: "ConditionalExpression",
					ContinueStatement: "ContinueStatement",
					DoWhileStatement: "DoWhileStatement",
					DebuggerStatement: "DebuggerStatement",
					EmptyStatement: "EmptyStatement",
					ExportAllDeclaration: "ExportAllDeclaration",
					ExportDefaultDeclaration: "ExportDefaultDeclaration",
					ExportNamedDeclaration: "ExportNamedDeclaration",
					ExportSpecifier: "ExportSpecifier",
					ExpressionStatement: "ExpressionStatement",
					ForStatement: "ForStatement",
					ForOfStatement: "ForOfStatement",
					ForInStatement: "ForInStatement",
					FunctionDeclaration: "FunctionDeclaration",
					FunctionExpression: "FunctionExpression",
					Identifier: "Identifier",
					IfStatement: "IfStatement",
					ImportDeclaration: "ImportDeclaration",
					ImportDefaultSpecifier: "ImportDefaultSpecifier",
					ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
					ImportSpecifier: "ImportSpecifier",
					Literal: "Literal",
					LabeledStatement: "LabeledStatement",
					LogicalExpression: "LogicalExpression",
					MemberExpression: "MemberExpression",
					MetaProperty: "MetaProperty",
					MethodDefinition: "MethodDefinition",
					NewExpression: "NewExpression",
					ObjectExpression: "ObjectExpression",
					ObjectPattern: "ObjectPattern",
					Program: "Program",
					Property: "Property",
					RestElement: "RestElement",
					ReturnStatement: "ReturnStatement",
					SequenceExpression: "SequenceExpression",
					SpreadElement: "SpreadElement",
					Super: "Super",
					SwitchCase: "SwitchCase",
					SwitchStatement: "SwitchStatement",
					TaggedTemplateExpression: "TaggedTemplateExpression",
					TemplateElement: "TemplateElement",
					TemplateLiteral: "TemplateLiteral",
					ThisExpression: "ThisExpression",
					ThrowStatement: "ThrowStatement",
					TryStatement: "TryStatement",
					UnaryExpression: "UnaryExpression",
					UpdateExpression: "UpdateExpression",
					VariableDeclaration: "VariableDeclaration",
					VariableDeclarator: "VariableDeclarator",
					WhileStatement: "WhileStatement",
					WithStatement: "WithStatement",
					YieldExpression: "YieldExpression"
				};
			},
			function(module$5, exports$4, __webpack_require__) {
				"use strict";
				/* istanbul ignore next */
				var __extends = this && this.__extends || (function() {
					var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
						d.__proto__ = b;
					} || function(d, b) {
						for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
					};
					return function(d, b) {
						extendStatics(d, b);
						function __() {
							this.constructor = d;
						}
						d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
					};
				})();
				Object.defineProperty(exports$4, "__esModule", { value: true });
				var character_1 = __webpack_require__(4);
				var JSXNode = __webpack_require__(5);
				var jsx_syntax_1 = __webpack_require__(6);
				var Node = __webpack_require__(7);
				var parser_1 = __webpack_require__(8);
				var token_1 = __webpack_require__(13);
				var xhtml_entities_1 = __webpack_require__(14);
				token_1.TokenName[100] = "JSXIdentifier";
				token_1.TokenName[101] = "JSXText";
				function getQualifiedElementName(elementName) {
					var qualifiedName;
					switch (elementName.type) {
						case jsx_syntax_1.JSXSyntax.JSXIdentifier:
							qualifiedName = elementName.name;
							break;
						case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
							var ns = elementName;
							qualifiedName = getQualifiedElementName(ns.namespace) + ":" + getQualifiedElementName(ns.name);
							break;
						case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
							var expr = elementName;
							qualifiedName = getQualifiedElementName(expr.object) + "." + getQualifiedElementName(expr.property);
							break;
						/* istanbul ignore next */
						default: break;
					}
					return qualifiedName;
				}
				exports$4.JSXParser = function(_super) {
					__extends(JSXParser, _super);
					function JSXParser(code, options, delegate) {
						return _super.call(this, code, options, delegate) || this;
					}
					JSXParser.prototype.parsePrimaryExpression = function() {
						return this.match("<") ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
					};
					JSXParser.prototype.startJSX = function() {
						this.scanner.index = this.startMarker.index;
						this.scanner.lineNumber = this.startMarker.line;
						this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
					};
					JSXParser.prototype.finishJSX = function() {
						this.nextToken();
					};
					JSXParser.prototype.reenterJSX = function() {
						this.startJSX();
						this.expectJSX("}");
						if (this.config.tokens) this.tokens.pop();
					};
					JSXParser.prototype.createJSXNode = function() {
						this.collectComments();
						return {
							index: this.scanner.index,
							line: this.scanner.lineNumber,
							column: this.scanner.index - this.scanner.lineStart
						};
					};
					JSXParser.prototype.createJSXChildNode = function() {
						return {
							index: this.scanner.index,
							line: this.scanner.lineNumber,
							column: this.scanner.index - this.scanner.lineStart
						};
					};
					JSXParser.prototype.scanXHTMLEntity = function(quote) {
						var result = "&";
						var valid = true;
						var terminated = false;
						var numeric = false;
						var hex = false;
						while (!this.scanner.eof() && valid && !terminated) {
							var ch = this.scanner.source[this.scanner.index];
							if (ch === quote) break;
							terminated = ch === ";";
							result += ch;
							++this.scanner.index;
							if (!terminated) switch (result.length) {
								case 2:
									numeric = ch === "#";
									break;
								case 3:
									if (numeric) {
										hex = ch === "x";
										valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
										numeric = numeric && !hex;
									}
									break;
								default:
									valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
									valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
									break;
							}
						}
						if (valid && terminated && result.length > 2) {
							var str = result.substr(1, result.length - 2);
							if (numeric && str.length > 1) result = String.fromCharCode(parseInt(str.substr(1), 10));
							else if (hex && str.length > 2) result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
							else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) result = xhtml_entities_1.XHTMLEntities[str];
						}
						return result;
					};
					JSXParser.prototype.lexJSX = function() {
						var cp = this.scanner.source.charCodeAt(this.scanner.index);
						if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
							var value = this.scanner.source[this.scanner.index++];
							return {
								type: 7,
								value,
								lineNumber: this.scanner.lineNumber,
								lineStart: this.scanner.lineStart,
								start: this.scanner.index - 1,
								end: this.scanner.index
							};
						}
						if (cp === 34 || cp === 39) {
							var start = this.scanner.index;
							var quote = this.scanner.source[this.scanner.index++];
							var str = "";
							while (!this.scanner.eof()) {
								var ch = this.scanner.source[this.scanner.index++];
								if (ch === quote) break;
								else if (ch === "&") str += this.scanXHTMLEntity(quote);
								else str += ch;
							}
							return {
								type: 8,
								value: str,
								lineNumber: this.scanner.lineNumber,
								lineStart: this.scanner.lineStart,
								start,
								end: this.scanner.index
							};
						}
						if (cp === 46) {
							var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
							var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
							var value = n1 === 46 && n2 === 46 ? "..." : ".";
							var start = this.scanner.index;
							this.scanner.index += value.length;
							return {
								type: 7,
								value,
								lineNumber: this.scanner.lineNumber,
								lineStart: this.scanner.lineStart,
								start,
								end: this.scanner.index
							};
						}
						if (cp === 96) return {
							type: 10,
							value: "",
							lineNumber: this.scanner.lineNumber,
							lineStart: this.scanner.lineStart,
							start: this.scanner.index,
							end: this.scanner.index
						};
						if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
							var start = this.scanner.index;
							++this.scanner.index;
							while (!this.scanner.eof()) {
								var ch = this.scanner.source.charCodeAt(this.scanner.index);
								if (character_1.Character.isIdentifierPart(ch) && ch !== 92) ++this.scanner.index;
								else if (ch === 45) ++this.scanner.index;
								else break;
							}
							return {
								type: 100,
								value: this.scanner.source.slice(start, this.scanner.index),
								lineNumber: this.scanner.lineNumber,
								lineStart: this.scanner.lineStart,
								start,
								end: this.scanner.index
							};
						}
						return this.scanner.lex();
					};
					JSXParser.prototype.nextJSXToken = function() {
						this.collectComments();
						this.startMarker.index = this.scanner.index;
						this.startMarker.line = this.scanner.lineNumber;
						this.startMarker.column = this.scanner.index - this.scanner.lineStart;
						var token = this.lexJSX();
						this.lastMarker.index = this.scanner.index;
						this.lastMarker.line = this.scanner.lineNumber;
						this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
						if (this.config.tokens) this.tokens.push(this.convertToken(token));
						return token;
					};
					JSXParser.prototype.nextJSXText = function() {
						this.startMarker.index = this.scanner.index;
						this.startMarker.line = this.scanner.lineNumber;
						this.startMarker.column = this.scanner.index - this.scanner.lineStart;
						var start = this.scanner.index;
						var text = "";
						while (!this.scanner.eof()) {
							var ch = this.scanner.source[this.scanner.index];
							if (ch === "{" || ch === "<") break;
							++this.scanner.index;
							text += ch;
							if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
								++this.scanner.lineNumber;
								if (ch === "\r" && this.scanner.source[this.scanner.index] === "\n") ++this.scanner.index;
								this.scanner.lineStart = this.scanner.index;
							}
						}
						this.lastMarker.index = this.scanner.index;
						this.lastMarker.line = this.scanner.lineNumber;
						this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
						var token = {
							type: 101,
							value: text,
							lineNumber: this.scanner.lineNumber,
							lineStart: this.scanner.lineStart,
							start,
							end: this.scanner.index
						};
						if (text.length > 0 && this.config.tokens) this.tokens.push(this.convertToken(token));
						return token;
					};
					JSXParser.prototype.peekJSXToken = function() {
						var state = this.scanner.saveState();
						this.scanner.scanComments();
						var next = this.lexJSX();
						this.scanner.restoreState(state);
						return next;
					};
					JSXParser.prototype.expectJSX = function(value) {
						var token = this.nextJSXToken();
						if (token.type !== 7 || token.value !== value) this.throwUnexpectedToken(token);
					};
					JSXParser.prototype.matchJSX = function(value) {
						var next = this.peekJSXToken();
						return next.type === 7 && next.value === value;
					};
					JSXParser.prototype.parseJSXIdentifier = function() {
						var node = this.createJSXNode();
						var token = this.nextJSXToken();
						if (token.type !== 100) this.throwUnexpectedToken(token);
						return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
					};
					JSXParser.prototype.parseJSXElementName = function() {
						var node = this.createJSXNode();
						var elementName = this.parseJSXIdentifier();
						if (this.matchJSX(":")) {
							var namespace = elementName;
							this.expectJSX(":");
							var name_1 = this.parseJSXIdentifier();
							elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
						} else if (this.matchJSX(".")) while (this.matchJSX(".")) {
							var object = elementName;
							this.expectJSX(".");
							var property = this.parseJSXIdentifier();
							elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
						}
						return elementName;
					};
					JSXParser.prototype.parseJSXAttributeName = function() {
						var node = this.createJSXNode();
						var attributeName;
						var identifier = this.parseJSXIdentifier();
						if (this.matchJSX(":")) {
							var namespace = identifier;
							this.expectJSX(":");
							var name_2 = this.parseJSXIdentifier();
							attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
						} else attributeName = identifier;
						return attributeName;
					};
					JSXParser.prototype.parseJSXStringLiteralAttribute = function() {
						var node = this.createJSXNode();
						var token = this.nextJSXToken();
						if (token.type !== 8) this.throwUnexpectedToken(token);
						var raw = this.getTokenRaw(token);
						return this.finalize(node, new Node.Literal(token.value, raw));
					};
					JSXParser.prototype.parseJSXExpressionAttribute = function() {
						var node = this.createJSXNode();
						this.expectJSX("{");
						this.finishJSX();
						if (this.match("}")) this.tolerateError("JSX attributes must only be assigned a non-empty expression");
						var expression = this.parseAssignmentExpression();
						this.reenterJSX();
						return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
					};
					JSXParser.prototype.parseJSXAttributeValue = function() {
						return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
					};
					JSXParser.prototype.parseJSXNameValueAttribute = function() {
						var node = this.createJSXNode();
						var name = this.parseJSXAttributeName();
						var value = null;
						if (this.matchJSX("=")) {
							this.expectJSX("=");
							value = this.parseJSXAttributeValue();
						}
						return this.finalize(node, new JSXNode.JSXAttribute(name, value));
					};
					JSXParser.prototype.parseJSXSpreadAttribute = function() {
						var node = this.createJSXNode();
						this.expectJSX("{");
						this.expectJSX("...");
						this.finishJSX();
						var argument = this.parseAssignmentExpression();
						this.reenterJSX();
						return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
					};
					JSXParser.prototype.parseJSXAttributes = function() {
						var attributes = [];
						while (!this.matchJSX("/") && !this.matchJSX(">")) {
							var attribute = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
							attributes.push(attribute);
						}
						return attributes;
					};
					JSXParser.prototype.parseJSXOpeningElement = function() {
						var node = this.createJSXNode();
						this.expectJSX("<");
						var name = this.parseJSXElementName();
						var attributes = this.parseJSXAttributes();
						var selfClosing = this.matchJSX("/");
						if (selfClosing) this.expectJSX("/");
						this.expectJSX(">");
						return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
					};
					JSXParser.prototype.parseJSXBoundaryElement = function() {
						var node = this.createJSXNode();
						this.expectJSX("<");
						if (this.matchJSX("/")) {
							this.expectJSX("/");
							var name_3 = this.parseJSXElementName();
							this.expectJSX(">");
							return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
						}
						var name = this.parseJSXElementName();
						var attributes = this.parseJSXAttributes();
						var selfClosing = this.matchJSX("/");
						if (selfClosing) this.expectJSX("/");
						this.expectJSX(">");
						return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
					};
					JSXParser.prototype.parseJSXEmptyExpression = function() {
						var node = this.createJSXChildNode();
						this.collectComments();
						this.lastMarker.index = this.scanner.index;
						this.lastMarker.line = this.scanner.lineNumber;
						this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
						return this.finalize(node, new JSXNode.JSXEmptyExpression());
					};
					JSXParser.prototype.parseJSXExpressionContainer = function() {
						var node = this.createJSXNode();
						this.expectJSX("{");
						var expression;
						if (this.matchJSX("}")) {
							expression = this.parseJSXEmptyExpression();
							this.expectJSX("}");
						} else {
							this.finishJSX();
							expression = this.parseAssignmentExpression();
							this.reenterJSX();
						}
						return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
					};
					JSXParser.prototype.parseJSXChildren = function() {
						var children = [];
						while (!this.scanner.eof()) {
							var node = this.createJSXChildNode();
							var token = this.nextJSXText();
							if (token.start < token.end) {
								var raw = this.getTokenRaw(token);
								var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
								children.push(child);
							}
							if (this.scanner.source[this.scanner.index] === "{") {
								var container = this.parseJSXExpressionContainer();
								children.push(container);
							} else break;
						}
						return children;
					};
					JSXParser.prototype.parseComplexJSXElement = function(el) {
						var stack = [];
						while (!this.scanner.eof()) {
							el.children = el.children.concat(this.parseJSXChildren());
							var node = this.createJSXChildNode();
							var element = this.parseJSXBoundaryElement();
							if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
								var opening = element;
								if (opening.selfClosing) {
									var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
									el.children.push(child);
								} else {
									stack.push(el);
									el = {
										node,
										opening,
										closing: null,
										children: []
									};
								}
							}
							if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
								el.closing = element;
								var open_1 = getQualifiedElementName(el.opening.name);
								if (open_1 !== getQualifiedElementName(el.closing.name)) this.tolerateError("Expected corresponding JSX closing tag for %0", open_1);
								if (stack.length > 0) {
									var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
									el = stack[stack.length - 1];
									el.children.push(child);
									stack.pop();
								} else break;
							}
						}
						return el;
					};
					JSXParser.prototype.parseJSXElement = function() {
						var node = this.createJSXNode();
						var opening = this.parseJSXOpeningElement();
						var children = [];
						var closing = null;
						if (!opening.selfClosing) {
							var el = this.parseComplexJSXElement({
								node,
								opening,
								closing,
								children
							});
							children = el.children;
							closing = el.closing;
						}
						return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
					};
					JSXParser.prototype.parseJSXRoot = function() {
						if (this.config.tokens) this.tokens.pop();
						this.startJSX();
						var element = this.parseJSXElement();
						this.finishJSX();
						return element;
					};
					JSXParser.prototype.isStartOfExpression = function() {
						return _super.prototype.isStartOfExpression.call(this) || this.match("<");
					};
					return JSXParser;
				}(parser_1.Parser);
			},
			function(module$6, exports$5) {
				"use strict";
				Object.defineProperty(exports$5, "__esModule", { value: true });
				var Regex = {
					NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
					NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
				};
				exports$5.Character = {
					fromCodePoint: function(cp) {
						return cp < 65536 ? String.fromCharCode(cp) : String.fromCharCode(55296 + (cp - 65536 >> 10)) + String.fromCharCode(56320 + (cp - 65536 & 1023));
					},
					isWhiteSpace: function(cp) {
						return cp === 32 || cp === 9 || cp === 11 || cp === 12 || cp === 160 || cp >= 5760 && [
							5760,
							8192,
							8193,
							8194,
							8195,
							8196,
							8197,
							8198,
							8199,
							8200,
							8201,
							8202,
							8239,
							8287,
							12288,
							65279
						].indexOf(cp) >= 0;
					},
					isLineTerminator: function(cp) {
						return cp === 10 || cp === 13 || cp === 8232 || cp === 8233;
					},
					isIdentifierStart: function(cp) {
						return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierStart.test(exports$5.Character.fromCodePoint(cp));
					},
					isIdentifierPart: function(cp) {
						return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 48 && cp <= 57 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierPart.test(exports$5.Character.fromCodePoint(cp));
					},
					isDecimalDigit: function(cp) {
						return cp >= 48 && cp <= 57;
					},
					isHexDigit: function(cp) {
						return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 70 || cp >= 97 && cp <= 102;
					},
					isOctalDigit: function(cp) {
						return cp >= 48 && cp <= 55;
					}
				};
			},
			function(module$7, exports$6, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$6, "__esModule", { value: true });
				var jsx_syntax_1 = __webpack_require__(6);
				exports$6.JSXClosingElement = function() {
					function JSXClosingElement(name) {
						this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
						this.name = name;
					}
					return JSXClosingElement;
				}();
				exports$6.JSXElement = function() {
					function JSXElement(openingElement, children, closingElement) {
						this.type = jsx_syntax_1.JSXSyntax.JSXElement;
						this.openingElement = openingElement;
						this.children = children;
						this.closingElement = closingElement;
					}
					return JSXElement;
				}();
				exports$6.JSXEmptyExpression = function() {
					function JSXEmptyExpression() {
						this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
					}
					return JSXEmptyExpression;
				}();
				exports$6.JSXExpressionContainer = function() {
					function JSXExpressionContainer(expression) {
						this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
						this.expression = expression;
					}
					return JSXExpressionContainer;
				}();
				exports$6.JSXIdentifier = function() {
					function JSXIdentifier(name) {
						this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
						this.name = name;
					}
					return JSXIdentifier;
				}();
				exports$6.JSXMemberExpression = function() {
					function JSXMemberExpression(object, property) {
						this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
						this.object = object;
						this.property = property;
					}
					return JSXMemberExpression;
				}();
				exports$6.JSXAttribute = function() {
					function JSXAttribute(name, value) {
						this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
						this.name = name;
						this.value = value;
					}
					return JSXAttribute;
				}();
				exports$6.JSXNamespacedName = function() {
					function JSXNamespacedName(namespace, name) {
						this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
						this.namespace = namespace;
						this.name = name;
					}
					return JSXNamespacedName;
				}();
				exports$6.JSXOpeningElement = function() {
					function JSXOpeningElement(name, selfClosing, attributes) {
						this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
						this.name = name;
						this.selfClosing = selfClosing;
						this.attributes = attributes;
					}
					return JSXOpeningElement;
				}();
				exports$6.JSXSpreadAttribute = function() {
					function JSXSpreadAttribute(argument) {
						this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
						this.argument = argument;
					}
					return JSXSpreadAttribute;
				}();
				exports$6.JSXText = function() {
					function JSXText(value, raw) {
						this.type = jsx_syntax_1.JSXSyntax.JSXText;
						this.value = value;
						this.raw = raw;
					}
					return JSXText;
				}();
			},
			function(module$8, exports$7) {
				"use strict";
				Object.defineProperty(exports$7, "__esModule", { value: true });
				exports$7.JSXSyntax = {
					JSXAttribute: "JSXAttribute",
					JSXClosingElement: "JSXClosingElement",
					JSXElement: "JSXElement",
					JSXEmptyExpression: "JSXEmptyExpression",
					JSXExpressionContainer: "JSXExpressionContainer",
					JSXIdentifier: "JSXIdentifier",
					JSXMemberExpression: "JSXMemberExpression",
					JSXNamespacedName: "JSXNamespacedName",
					JSXOpeningElement: "JSXOpeningElement",
					JSXSpreadAttribute: "JSXSpreadAttribute",
					JSXText: "JSXText"
				};
			},
			function(module$9, exports$8, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$8, "__esModule", { value: true });
				var syntax_1 = __webpack_require__(2);
				exports$8.ArrayExpression = function() {
					function ArrayExpression(elements) {
						this.type = syntax_1.Syntax.ArrayExpression;
						this.elements = elements;
					}
					return ArrayExpression;
				}();
				exports$8.ArrayPattern = function() {
					function ArrayPattern(elements) {
						this.type = syntax_1.Syntax.ArrayPattern;
						this.elements = elements;
					}
					return ArrayPattern;
				}();
				exports$8.ArrowFunctionExpression = function() {
					function ArrowFunctionExpression(params, body, expression) {
						this.type = syntax_1.Syntax.ArrowFunctionExpression;
						this.id = null;
						this.params = params;
						this.body = body;
						this.generator = false;
						this.expression = expression;
						this.async = false;
					}
					return ArrowFunctionExpression;
				}();
				exports$8.AssignmentExpression = function() {
					function AssignmentExpression(operator, left, right) {
						this.type = syntax_1.Syntax.AssignmentExpression;
						this.operator = operator;
						this.left = left;
						this.right = right;
					}
					return AssignmentExpression;
				}();
				exports$8.AssignmentPattern = function() {
					function AssignmentPattern(left, right) {
						this.type = syntax_1.Syntax.AssignmentPattern;
						this.left = left;
						this.right = right;
					}
					return AssignmentPattern;
				}();
				exports$8.AsyncArrowFunctionExpression = function() {
					function AsyncArrowFunctionExpression(params, body, expression) {
						this.type = syntax_1.Syntax.ArrowFunctionExpression;
						this.id = null;
						this.params = params;
						this.body = body;
						this.generator = false;
						this.expression = expression;
						this.async = true;
					}
					return AsyncArrowFunctionExpression;
				}();
				exports$8.AsyncFunctionDeclaration = function() {
					function AsyncFunctionDeclaration(id, params, body) {
						this.type = syntax_1.Syntax.FunctionDeclaration;
						this.id = id;
						this.params = params;
						this.body = body;
						this.generator = false;
						this.expression = false;
						this.async = true;
					}
					return AsyncFunctionDeclaration;
				}();
				exports$8.AsyncFunctionExpression = function() {
					function AsyncFunctionExpression(id, params, body) {
						this.type = syntax_1.Syntax.FunctionExpression;
						this.id = id;
						this.params = params;
						this.body = body;
						this.generator = false;
						this.expression = false;
						this.async = true;
					}
					return AsyncFunctionExpression;
				}();
				exports$8.AwaitExpression = function() {
					function AwaitExpression(argument) {
						this.type = syntax_1.Syntax.AwaitExpression;
						this.argument = argument;
					}
					return AwaitExpression;
				}();
				exports$8.BinaryExpression = function() {
					function BinaryExpression(operator, left, right) {
						this.type = operator === "||" || operator === "&&" ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
						this.operator = operator;
						this.left = left;
						this.right = right;
					}
					return BinaryExpression;
				}();
				exports$8.BlockStatement = function() {
					function BlockStatement(body) {
						this.type = syntax_1.Syntax.BlockStatement;
						this.body = body;
					}
					return BlockStatement;
				}();
				exports$8.BreakStatement = function() {
					function BreakStatement(label) {
						this.type = syntax_1.Syntax.BreakStatement;
						this.label = label;
					}
					return BreakStatement;
				}();
				exports$8.CallExpression = function() {
					function CallExpression(callee, args) {
						this.type = syntax_1.Syntax.CallExpression;
						this.callee = callee;
						this.arguments = args;
					}
					return CallExpression;
				}();
				exports$8.CatchClause = function() {
					function CatchClause(param, body) {
						this.type = syntax_1.Syntax.CatchClause;
						this.param = param;
						this.body = body;
					}
					return CatchClause;
				}();
				exports$8.ClassBody = function() {
					function ClassBody(body) {
						this.type = syntax_1.Syntax.ClassBody;
						this.body = body;
					}
					return ClassBody;
				}();
				exports$8.ClassDeclaration = function() {
					function ClassDeclaration(id, superClass, body) {
						this.type = syntax_1.Syntax.ClassDeclaration;
						this.id = id;
						this.superClass = superClass;
						this.body = body;
					}
					return ClassDeclaration;
				}();
				exports$8.ClassExpression = function() {
					function ClassExpression(id, superClass, body) {
						this.type = syntax_1.Syntax.ClassExpression;
						this.id = id;
						this.superClass = superClass;
						this.body = body;
					}
					return ClassExpression;
				}();
				exports$8.ComputedMemberExpression = function() {
					function ComputedMemberExpression(object, property) {
						this.type = syntax_1.Syntax.MemberExpression;
						this.computed = true;
						this.object = object;
						this.property = property;
					}
					return ComputedMemberExpression;
				}();
				exports$8.ConditionalExpression = function() {
					function ConditionalExpression(test, consequent, alternate) {
						this.type = syntax_1.Syntax.ConditionalExpression;
						this.test = test;
						this.consequent = consequent;
						this.alternate = alternate;
					}
					return ConditionalExpression;
				}();
				exports$8.ContinueStatement = function() {
					function ContinueStatement(label) {
						this.type = syntax_1.Syntax.ContinueStatement;
						this.label = label;
					}
					return ContinueStatement;
				}();
				exports$8.DebuggerStatement = function() {
					function DebuggerStatement() {
						this.type = syntax_1.Syntax.DebuggerStatement;
					}
					return DebuggerStatement;
				}();
				exports$8.Directive = function() {
					function Directive(expression, directive) {
						this.type = syntax_1.Syntax.ExpressionStatement;
						this.expression = expression;
						this.directive = directive;
					}
					return Directive;
				}();
				exports$8.DoWhileStatement = function() {
					function DoWhileStatement(body, test) {
						this.type = syntax_1.Syntax.DoWhileStatement;
						this.body = body;
						this.test = test;
					}
					return DoWhileStatement;
				}();
				exports$8.EmptyStatement = function() {
					function EmptyStatement() {
						this.type = syntax_1.Syntax.EmptyStatement;
					}
					return EmptyStatement;
				}();
				exports$8.ExportAllDeclaration = function() {
					function ExportAllDeclaration(source) {
						this.type = syntax_1.Syntax.ExportAllDeclaration;
						this.source = source;
					}
					return ExportAllDeclaration;
				}();
				exports$8.ExportDefaultDeclaration = function() {
					function ExportDefaultDeclaration(declaration) {
						this.type = syntax_1.Syntax.ExportDefaultDeclaration;
						this.declaration = declaration;
					}
					return ExportDefaultDeclaration;
				}();
				exports$8.ExportNamedDeclaration = function() {
					function ExportNamedDeclaration(declaration, specifiers, source) {
						this.type = syntax_1.Syntax.ExportNamedDeclaration;
						this.declaration = declaration;
						this.specifiers = specifiers;
						this.source = source;
					}
					return ExportNamedDeclaration;
				}();
				exports$8.ExportSpecifier = function() {
					function ExportSpecifier(local, exported) {
						this.type = syntax_1.Syntax.ExportSpecifier;
						this.exported = exported;
						this.local = local;
					}
					return ExportSpecifier;
				}();
				exports$8.ExpressionStatement = function() {
					function ExpressionStatement(expression) {
						this.type = syntax_1.Syntax.ExpressionStatement;
						this.expression = expression;
					}
					return ExpressionStatement;
				}();
				exports$8.ForInStatement = function() {
					function ForInStatement(left, right, body) {
						this.type = syntax_1.Syntax.ForInStatement;
						this.left = left;
						this.right = right;
						this.body = body;
						this.each = false;
					}
					return ForInStatement;
				}();
				exports$8.ForOfStatement = function() {
					function ForOfStatement(left, right, body) {
						this.type = syntax_1.Syntax.ForOfStatement;
						this.left = left;
						this.right = right;
						this.body = body;
					}
					return ForOfStatement;
				}();
				exports$8.ForStatement = function() {
					function ForStatement(init, test, update, body) {
						this.type = syntax_1.Syntax.ForStatement;
						this.init = init;
						this.test = test;
						this.update = update;
						this.body = body;
					}
					return ForStatement;
				}();
				exports$8.FunctionDeclaration = function() {
					function FunctionDeclaration(id, params, body, generator) {
						this.type = syntax_1.Syntax.FunctionDeclaration;
						this.id = id;
						this.params = params;
						this.body = body;
						this.generator = generator;
						this.expression = false;
						this.async = false;
					}
					return FunctionDeclaration;
				}();
				exports$8.FunctionExpression = function() {
					function FunctionExpression(id, params, body, generator) {
						this.type = syntax_1.Syntax.FunctionExpression;
						this.id = id;
						this.params = params;
						this.body = body;
						this.generator = generator;
						this.expression = false;
						this.async = false;
					}
					return FunctionExpression;
				}();
				exports$8.Identifier = function() {
					function Identifier(name) {
						this.type = syntax_1.Syntax.Identifier;
						this.name = name;
					}
					return Identifier;
				}();
				exports$8.IfStatement = function() {
					function IfStatement(test, consequent, alternate) {
						this.type = syntax_1.Syntax.IfStatement;
						this.test = test;
						this.consequent = consequent;
						this.alternate = alternate;
					}
					return IfStatement;
				}();
				exports$8.ImportDeclaration = function() {
					function ImportDeclaration(specifiers, source) {
						this.type = syntax_1.Syntax.ImportDeclaration;
						this.specifiers = specifiers;
						this.source = source;
					}
					return ImportDeclaration;
				}();
				exports$8.ImportDefaultSpecifier = function() {
					function ImportDefaultSpecifier(local) {
						this.type = syntax_1.Syntax.ImportDefaultSpecifier;
						this.local = local;
					}
					return ImportDefaultSpecifier;
				}();
				exports$8.ImportNamespaceSpecifier = function() {
					function ImportNamespaceSpecifier(local) {
						this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
						this.local = local;
					}
					return ImportNamespaceSpecifier;
				}();
				exports$8.ImportSpecifier = function() {
					function ImportSpecifier(local, imported) {
						this.type = syntax_1.Syntax.ImportSpecifier;
						this.local = local;
						this.imported = imported;
					}
					return ImportSpecifier;
				}();
				exports$8.LabeledStatement = function() {
					function LabeledStatement(label, body) {
						this.type = syntax_1.Syntax.LabeledStatement;
						this.label = label;
						this.body = body;
					}
					return LabeledStatement;
				}();
				exports$8.Literal = function() {
					function Literal(value, raw) {
						this.type = syntax_1.Syntax.Literal;
						this.value = value;
						this.raw = raw;
					}
					return Literal;
				}();
				exports$8.MetaProperty = function() {
					function MetaProperty(meta, property) {
						this.type = syntax_1.Syntax.MetaProperty;
						this.meta = meta;
						this.property = property;
					}
					return MetaProperty;
				}();
				exports$8.MethodDefinition = function() {
					function MethodDefinition(key, computed, value, kind, isStatic) {
						this.type = syntax_1.Syntax.MethodDefinition;
						this.key = key;
						this.computed = computed;
						this.value = value;
						this.kind = kind;
						this.static = isStatic;
					}
					return MethodDefinition;
				}();
				exports$8.Module = function() {
					function Module(body) {
						this.type = syntax_1.Syntax.Program;
						this.body = body;
						this.sourceType = "module";
					}
					return Module;
				}();
				exports$8.NewExpression = function() {
					function NewExpression(callee, args) {
						this.type = syntax_1.Syntax.NewExpression;
						this.callee = callee;
						this.arguments = args;
					}
					return NewExpression;
				}();
				exports$8.ObjectExpression = function() {
					function ObjectExpression(properties) {
						this.type = syntax_1.Syntax.ObjectExpression;
						this.properties = properties;
					}
					return ObjectExpression;
				}();
				exports$8.ObjectPattern = function() {
					function ObjectPattern(properties) {
						this.type = syntax_1.Syntax.ObjectPattern;
						this.properties = properties;
					}
					return ObjectPattern;
				}();
				exports$8.Property = function() {
					function Property(kind, key, computed, value, method, shorthand) {
						this.type = syntax_1.Syntax.Property;
						this.key = key;
						this.computed = computed;
						this.value = value;
						this.kind = kind;
						this.method = method;
						this.shorthand = shorthand;
					}
					return Property;
				}();
				exports$8.RegexLiteral = function() {
					function RegexLiteral(value, raw, pattern, flags) {
						this.type = syntax_1.Syntax.Literal;
						this.value = value;
						this.raw = raw;
						this.regex = {
							pattern,
							flags
						};
					}
					return RegexLiteral;
				}();
				exports$8.RestElement = function() {
					function RestElement(argument) {
						this.type = syntax_1.Syntax.RestElement;
						this.argument = argument;
					}
					return RestElement;
				}();
				exports$8.ReturnStatement = function() {
					function ReturnStatement(argument) {
						this.type = syntax_1.Syntax.ReturnStatement;
						this.argument = argument;
					}
					return ReturnStatement;
				}();
				exports$8.Script = function() {
					function Script(body) {
						this.type = syntax_1.Syntax.Program;
						this.body = body;
						this.sourceType = "script";
					}
					return Script;
				}();
				exports$8.SequenceExpression = function() {
					function SequenceExpression(expressions) {
						this.type = syntax_1.Syntax.SequenceExpression;
						this.expressions = expressions;
					}
					return SequenceExpression;
				}();
				exports$8.SpreadElement = function() {
					function SpreadElement(argument) {
						this.type = syntax_1.Syntax.SpreadElement;
						this.argument = argument;
					}
					return SpreadElement;
				}();
				exports$8.StaticMemberExpression = function() {
					function StaticMemberExpression(object, property) {
						this.type = syntax_1.Syntax.MemberExpression;
						this.computed = false;
						this.object = object;
						this.property = property;
					}
					return StaticMemberExpression;
				}();
				exports$8.Super = function() {
					function Super() {
						this.type = syntax_1.Syntax.Super;
					}
					return Super;
				}();
				exports$8.SwitchCase = function() {
					function SwitchCase(test, consequent) {
						this.type = syntax_1.Syntax.SwitchCase;
						this.test = test;
						this.consequent = consequent;
					}
					return SwitchCase;
				}();
				exports$8.SwitchStatement = function() {
					function SwitchStatement(discriminant, cases) {
						this.type = syntax_1.Syntax.SwitchStatement;
						this.discriminant = discriminant;
						this.cases = cases;
					}
					return SwitchStatement;
				}();
				exports$8.TaggedTemplateExpression = function() {
					function TaggedTemplateExpression(tag, quasi) {
						this.type = syntax_1.Syntax.TaggedTemplateExpression;
						this.tag = tag;
						this.quasi = quasi;
					}
					return TaggedTemplateExpression;
				}();
				exports$8.TemplateElement = function() {
					function TemplateElement(value, tail) {
						this.type = syntax_1.Syntax.TemplateElement;
						this.value = value;
						this.tail = tail;
					}
					return TemplateElement;
				}();
				exports$8.TemplateLiteral = function() {
					function TemplateLiteral(quasis, expressions) {
						this.type = syntax_1.Syntax.TemplateLiteral;
						this.quasis = quasis;
						this.expressions = expressions;
					}
					return TemplateLiteral;
				}();
				exports$8.ThisExpression = function() {
					function ThisExpression() {
						this.type = syntax_1.Syntax.ThisExpression;
					}
					return ThisExpression;
				}();
				exports$8.ThrowStatement = function() {
					function ThrowStatement(argument) {
						this.type = syntax_1.Syntax.ThrowStatement;
						this.argument = argument;
					}
					return ThrowStatement;
				}();
				exports$8.TryStatement = function() {
					function TryStatement(block, handler, finalizer) {
						this.type = syntax_1.Syntax.TryStatement;
						this.block = block;
						this.handler = handler;
						this.finalizer = finalizer;
					}
					return TryStatement;
				}();
				exports$8.UnaryExpression = function() {
					function UnaryExpression(operator, argument) {
						this.type = syntax_1.Syntax.UnaryExpression;
						this.operator = operator;
						this.argument = argument;
						this.prefix = true;
					}
					return UnaryExpression;
				}();
				exports$8.UpdateExpression = function() {
					function UpdateExpression(operator, argument, prefix) {
						this.type = syntax_1.Syntax.UpdateExpression;
						this.operator = operator;
						this.argument = argument;
						this.prefix = prefix;
					}
					return UpdateExpression;
				}();
				exports$8.VariableDeclaration = function() {
					function VariableDeclaration(declarations, kind) {
						this.type = syntax_1.Syntax.VariableDeclaration;
						this.declarations = declarations;
						this.kind = kind;
					}
					return VariableDeclaration;
				}();
				exports$8.VariableDeclarator = function() {
					function VariableDeclarator(id, init) {
						this.type = syntax_1.Syntax.VariableDeclarator;
						this.id = id;
						this.init = init;
					}
					return VariableDeclarator;
				}();
				exports$8.WhileStatement = function() {
					function WhileStatement(test, body) {
						this.type = syntax_1.Syntax.WhileStatement;
						this.test = test;
						this.body = body;
					}
					return WhileStatement;
				}();
				exports$8.WithStatement = function() {
					function WithStatement(object, body) {
						this.type = syntax_1.Syntax.WithStatement;
						this.object = object;
						this.body = body;
					}
					return WithStatement;
				}();
				exports$8.YieldExpression = function() {
					function YieldExpression(argument, delegate) {
						this.type = syntax_1.Syntax.YieldExpression;
						this.argument = argument;
						this.delegate = delegate;
					}
					return YieldExpression;
				}();
			},
			function(module$10, exports$9, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$9, "__esModule", { value: true });
				var assert_1 = __webpack_require__(9);
				var error_handler_1 = __webpack_require__(10);
				var messages_1 = __webpack_require__(11);
				var Node = __webpack_require__(7);
				var scanner_1 = __webpack_require__(12);
				var syntax_1 = __webpack_require__(2);
				var token_1 = __webpack_require__(13);
				var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
				exports$9.Parser = function() {
					function Parser(code, options, delegate) {
						if (options === void 0) options = {};
						this.config = {
							range: typeof options.range === "boolean" && options.range,
							loc: typeof options.loc === "boolean" && options.loc,
							source: null,
							tokens: typeof options.tokens === "boolean" && options.tokens,
							comment: typeof options.comment === "boolean" && options.comment,
							tolerant: typeof options.tolerant === "boolean" && options.tolerant
						};
						if (this.config.loc && options.source && options.source !== null) this.config.source = String(options.source);
						this.delegate = delegate;
						this.errorHandler = new error_handler_1.ErrorHandler();
						this.errorHandler.tolerant = this.config.tolerant;
						this.scanner = new scanner_1.Scanner(code, this.errorHandler);
						this.scanner.trackComment = this.config.comment;
						this.operatorPrecedence = {
							")": 0,
							";": 0,
							",": 0,
							"=": 0,
							"]": 0,
							"||": 1,
							"&&": 2,
							"|": 3,
							"^": 4,
							"&": 5,
							"==": 6,
							"!=": 6,
							"===": 6,
							"!==": 6,
							"<": 7,
							">": 7,
							"<=": 7,
							">=": 7,
							"<<": 8,
							">>": 8,
							">>>": 8,
							"+": 9,
							"-": 9,
							"*": 11,
							"/": 11,
							"%": 11
						};
						this.lookahead = {
							type: 2,
							value: "",
							lineNumber: this.scanner.lineNumber,
							lineStart: 0,
							start: 0,
							end: 0
						};
						this.hasLineTerminator = false;
						this.context = {
							isModule: false,
							await: false,
							allowIn: true,
							allowStrictDirective: true,
							allowYield: true,
							firstCoverInitializedNameError: null,
							isAssignmentTarget: false,
							isBindingElement: false,
							inFunctionBody: false,
							inIteration: false,
							inSwitch: false,
							labelSet: {},
							strict: false
						};
						this.tokens = [];
						this.startMarker = {
							index: 0,
							line: this.scanner.lineNumber,
							column: 0
						};
						this.lastMarker = {
							index: 0,
							line: this.scanner.lineNumber,
							column: 0
						};
						this.nextToken();
						this.lastMarker = {
							index: this.scanner.index,
							line: this.scanner.lineNumber,
							column: this.scanner.index - this.scanner.lineStart
						};
					}
					Parser.prototype.throwError = function(messageFormat) {
						var values = [];
						for (var _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
						var args = Array.prototype.slice.call(arguments, 1);
						var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
							assert_1.assert(idx < args.length, "Message reference must be in range");
							return args[idx];
						});
						var index = this.lastMarker.index;
						var line = this.lastMarker.line;
						var column = this.lastMarker.column + 1;
						throw this.errorHandler.createError(index, line, column, msg);
					};
					Parser.prototype.tolerateError = function(messageFormat) {
						var values = [];
						for (var _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
						var args = Array.prototype.slice.call(arguments, 1);
						var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
							assert_1.assert(idx < args.length, "Message reference must be in range");
							return args[idx];
						});
						var index = this.lastMarker.index;
						var line = this.scanner.lineNumber;
						var column = this.lastMarker.column + 1;
						this.errorHandler.tolerateError(index, line, column, msg);
					};
					Parser.prototype.unexpectedTokenError = function(token, message) {
						var msg = message || messages_1.Messages.UnexpectedToken;
						var value;
						if (token) {
							if (!message) {
								msg = token.type === 2 ? messages_1.Messages.UnexpectedEOS : token.type === 3 ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 ? messages_1.Messages.UnexpectedNumber : token.type === 8 ? messages_1.Messages.UnexpectedString : token.type === 10 ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
								if (token.type === 4) {
									if (this.scanner.isFutureReservedWord(token.value)) msg = messages_1.Messages.UnexpectedReserved;
									else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) msg = messages_1.Messages.StrictReservedWord;
								}
							}
							value = token.value;
						} else value = "ILLEGAL";
						msg = msg.replace("%0", value);
						if (token && typeof token.lineNumber === "number") {
							var index = token.start;
							var line = token.lineNumber;
							var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
							var column = token.start - lastMarkerLineStart + 1;
							return this.errorHandler.createError(index, line, column, msg);
						} else {
							var index = this.lastMarker.index;
							var line = this.lastMarker.line;
							var column = this.lastMarker.column + 1;
							return this.errorHandler.createError(index, line, column, msg);
						}
					};
					Parser.prototype.throwUnexpectedToken = function(token, message) {
						throw this.unexpectedTokenError(token, message);
					};
					Parser.prototype.tolerateUnexpectedToken = function(token, message) {
						this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
					};
					Parser.prototype.collectComments = function() {
						if (!this.config.comment) this.scanner.scanComments();
						else {
							var comments = this.scanner.scanComments();
							if (comments.length > 0 && this.delegate) for (var i = 0; i < comments.length; ++i) {
								var e = comments[i];
								var node = void 0;
								node = {
									type: e.multiLine ? "BlockComment" : "LineComment",
									value: this.scanner.source.slice(e.slice[0], e.slice[1])
								};
								if (this.config.range) node.range = e.range;
								if (this.config.loc) node.loc = e.loc;
								var metadata = {
									start: {
										line: e.loc.start.line,
										column: e.loc.start.column,
										offset: e.range[0]
									},
									end: {
										line: e.loc.end.line,
										column: e.loc.end.column,
										offset: e.range[1]
									}
								};
								this.delegate(node, metadata);
							}
						}
					};
					Parser.prototype.getTokenRaw = function(token) {
						return this.scanner.source.slice(token.start, token.end);
					};
					Parser.prototype.convertToken = function(token) {
						var t = {
							type: token_1.TokenName[token.type],
							value: this.getTokenRaw(token)
						};
						if (this.config.range) t.range = [token.start, token.end];
						if (this.config.loc) t.loc = {
							start: {
								line: this.startMarker.line,
								column: this.startMarker.column
							},
							end: {
								line: this.scanner.lineNumber,
								column: this.scanner.index - this.scanner.lineStart
							}
						};
						if (token.type === 9) t.regex = {
							pattern: token.pattern,
							flags: token.flags
						};
						return t;
					};
					Parser.prototype.nextToken = function() {
						var token = this.lookahead;
						this.lastMarker.index = this.scanner.index;
						this.lastMarker.line = this.scanner.lineNumber;
						this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
						this.collectComments();
						if (this.scanner.index !== this.startMarker.index) {
							this.startMarker.index = this.scanner.index;
							this.startMarker.line = this.scanner.lineNumber;
							this.startMarker.column = this.scanner.index - this.scanner.lineStart;
						}
						var next = this.scanner.lex();
						this.hasLineTerminator = token.lineNumber !== next.lineNumber;
						if (next && this.context.strict && next.type === 3) {
							if (this.scanner.isStrictModeReservedWord(next.value)) next.type = 4;
						}
						this.lookahead = next;
						if (this.config.tokens && next.type !== 2) this.tokens.push(this.convertToken(next));
						return token;
					};
					Parser.prototype.nextRegexToken = function() {
						this.collectComments();
						var token = this.scanner.scanRegExp();
						if (this.config.tokens) {
							this.tokens.pop();
							this.tokens.push(this.convertToken(token));
						}
						this.lookahead = token;
						this.nextToken();
						return token;
					};
					Parser.prototype.createNode = function() {
						return {
							index: this.startMarker.index,
							line: this.startMarker.line,
							column: this.startMarker.column
						};
					};
					Parser.prototype.startNode = function(token, lastLineStart) {
						if (lastLineStart === void 0) lastLineStart = 0;
						var column = token.start - token.lineStart;
						var line = token.lineNumber;
						if (column < 0) {
							column += lastLineStart;
							line--;
						}
						return {
							index: token.start,
							line,
							column
						};
					};
					Parser.prototype.finalize = function(marker, node) {
						if (this.config.range) node.range = [marker.index, this.lastMarker.index];
						if (this.config.loc) {
							node.loc = {
								start: {
									line: marker.line,
									column: marker.column
								},
								end: {
									line: this.lastMarker.line,
									column: this.lastMarker.column
								}
							};
							if (this.config.source) node.loc.source = this.config.source;
						}
						if (this.delegate) {
							var metadata = {
								start: {
									line: marker.line,
									column: marker.column,
									offset: marker.index
								},
								end: {
									line: this.lastMarker.line,
									column: this.lastMarker.column,
									offset: this.lastMarker.index
								}
							};
							this.delegate(node, metadata);
						}
						return node;
					};
					Parser.prototype.expect = function(value) {
						var token = this.nextToken();
						if (token.type !== 7 || token.value !== value) this.throwUnexpectedToken(token);
					};
					Parser.prototype.expectCommaSeparator = function() {
						if (this.config.tolerant) {
							var token = this.lookahead;
							if (token.type === 7 && token.value === ",") this.nextToken();
							else if (token.type === 7 && token.value === ";") {
								this.nextToken();
								this.tolerateUnexpectedToken(token);
							} else this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
						} else this.expect(",");
					};
					Parser.prototype.expectKeyword = function(keyword) {
						var token = this.nextToken();
						if (token.type !== 4 || token.value !== keyword) this.throwUnexpectedToken(token);
					};
					Parser.prototype.match = function(value) {
						return this.lookahead.type === 7 && this.lookahead.value === value;
					};
					Parser.prototype.matchKeyword = function(keyword) {
						return this.lookahead.type === 4 && this.lookahead.value === keyword;
					};
					Parser.prototype.matchContextualKeyword = function(keyword) {
						return this.lookahead.type === 3 && this.lookahead.value === keyword;
					};
					Parser.prototype.matchAssign = function() {
						if (this.lookahead.type !== 7) return false;
						var op = this.lookahead.value;
						return op === "=" || op === "*=" || op === "**=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
					};
					Parser.prototype.isolateCoverGrammar = function(parseFunction) {
						var previousIsBindingElement = this.context.isBindingElement;
						var previousIsAssignmentTarget = this.context.isAssignmentTarget;
						var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
						this.context.isBindingElement = true;
						this.context.isAssignmentTarget = true;
						this.context.firstCoverInitializedNameError = null;
						var result = parseFunction.call(this);
						if (this.context.firstCoverInitializedNameError !== null) this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
						this.context.isBindingElement = previousIsBindingElement;
						this.context.isAssignmentTarget = previousIsAssignmentTarget;
						this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
						return result;
					};
					Parser.prototype.inheritCoverGrammar = function(parseFunction) {
						var previousIsBindingElement = this.context.isBindingElement;
						var previousIsAssignmentTarget = this.context.isAssignmentTarget;
						var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
						this.context.isBindingElement = true;
						this.context.isAssignmentTarget = true;
						this.context.firstCoverInitializedNameError = null;
						var result = parseFunction.call(this);
						this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
						this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
						this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
						return result;
					};
					Parser.prototype.consumeSemicolon = function() {
						if (this.match(";")) this.nextToken();
						else if (!this.hasLineTerminator) {
							if (this.lookahead.type !== 2 && !this.match("}")) this.throwUnexpectedToken(this.lookahead);
							this.lastMarker.index = this.startMarker.index;
							this.lastMarker.line = this.startMarker.line;
							this.lastMarker.column = this.startMarker.column;
						}
					};
					Parser.prototype.parsePrimaryExpression = function() {
						var node = this.createNode();
						var expr;
						var token, raw;
						switch (this.lookahead.type) {
							case 3:
								if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") this.tolerateUnexpectedToken(this.lookahead);
								expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
								break;
							case 6:
							case 8:
								if (this.context.strict && this.lookahead.octal) this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								token = this.nextToken();
								raw = this.getTokenRaw(token);
								expr = this.finalize(node, new Node.Literal(token.value, raw));
								break;
							case 1:
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								token = this.nextToken();
								raw = this.getTokenRaw(token);
								expr = this.finalize(node, new Node.Literal(token.value === "true", raw));
								break;
							case 5:
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								token = this.nextToken();
								raw = this.getTokenRaw(token);
								expr = this.finalize(node, new Node.Literal(null, raw));
								break;
							case 10:
								expr = this.parseTemplateLiteral();
								break;
							case 7:
								switch (this.lookahead.value) {
									case "(":
										this.context.isBindingElement = false;
										expr = this.inheritCoverGrammar(this.parseGroupExpression);
										break;
									case "[":
										expr = this.inheritCoverGrammar(this.parseArrayInitializer);
										break;
									case "{":
										expr = this.inheritCoverGrammar(this.parseObjectInitializer);
										break;
									case "/":
									case "/=":
										this.context.isAssignmentTarget = false;
										this.context.isBindingElement = false;
										this.scanner.index = this.startMarker.index;
										token = this.nextRegexToken();
										raw = this.getTokenRaw(token);
										expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
										break;
									default: expr = this.throwUnexpectedToken(this.nextToken());
								}
								break;
							case 4:
								if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) expr = this.parseIdentifierName();
								else if (!this.context.strict && this.matchKeyword("let")) expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
								else {
									this.context.isAssignmentTarget = false;
									this.context.isBindingElement = false;
									if (this.matchKeyword("function")) expr = this.parseFunctionExpression();
									else if (this.matchKeyword("this")) {
										this.nextToken();
										expr = this.finalize(node, new Node.ThisExpression());
									} else if (this.matchKeyword("class")) expr = this.parseClassExpression();
									else expr = this.throwUnexpectedToken(this.nextToken());
								}
								break;
							default: expr = this.throwUnexpectedToken(this.nextToken());
						}
						return expr;
					};
					Parser.prototype.parseSpreadElement = function() {
						var node = this.createNode();
						this.expect("...");
						var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
						return this.finalize(node, new Node.SpreadElement(arg));
					};
					Parser.prototype.parseArrayInitializer = function() {
						var node = this.createNode();
						var elements = [];
						this.expect("[");
						while (!this.match("]")) if (this.match(",")) {
							this.nextToken();
							elements.push(null);
						} else if (this.match("...")) {
							var element = this.parseSpreadElement();
							if (!this.match("]")) {
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								this.expect(",");
							}
							elements.push(element);
						} else {
							elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
							if (!this.match("]")) this.expect(",");
						}
						this.expect("]");
						return this.finalize(node, new Node.ArrayExpression(elements));
					};
					Parser.prototype.parsePropertyMethod = function(params) {
						this.context.isAssignmentTarget = false;
						this.context.isBindingElement = false;
						var previousStrict = this.context.strict;
						var previousAllowStrictDirective = this.context.allowStrictDirective;
						this.context.allowStrictDirective = params.simple;
						var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
						if (this.context.strict && params.firstRestricted) this.tolerateUnexpectedToken(params.firstRestricted, params.message);
						if (this.context.strict && params.stricted) this.tolerateUnexpectedToken(params.stricted, params.message);
						this.context.strict = previousStrict;
						this.context.allowStrictDirective = previousAllowStrictDirective;
						return body;
					};
					Parser.prototype.parsePropertyMethodFunction = function() {
						var isGenerator = false;
						var node = this.createNode();
						var previousAllowYield = this.context.allowYield;
						this.context.allowYield = true;
						var params = this.parseFormalParameters();
						var method = this.parsePropertyMethod(params);
						this.context.allowYield = previousAllowYield;
						return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
					};
					Parser.prototype.parsePropertyMethodAsyncFunction = function() {
						var node = this.createNode();
						var previousAllowYield = this.context.allowYield;
						var previousAwait = this.context.await;
						this.context.allowYield = false;
						this.context.await = true;
						var params = this.parseFormalParameters();
						var method = this.parsePropertyMethod(params);
						this.context.allowYield = previousAllowYield;
						this.context.await = previousAwait;
						return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
					};
					Parser.prototype.parseObjectPropertyKey = function() {
						var node = this.createNode();
						var token = this.nextToken();
						var key;
						switch (token.type) {
							case 8:
							case 6:
								if (this.context.strict && token.octal) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
								var raw = this.getTokenRaw(token);
								key = this.finalize(node, new Node.Literal(token.value, raw));
								break;
							case 3:
							case 1:
							case 5:
							case 4:
								key = this.finalize(node, new Node.Identifier(token.value));
								break;
							case 7:
								if (token.value === "[") {
									key = this.isolateCoverGrammar(this.parseAssignmentExpression);
									this.expect("]");
								} else key = this.throwUnexpectedToken(token);
								break;
							default: key = this.throwUnexpectedToken(token);
						}
						return key;
					};
					Parser.prototype.isPropertyKey = function(key, value) {
						return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
					};
					Parser.prototype.parseObjectProperty = function(hasProto) {
						var node = this.createNode();
						var token = this.lookahead;
						var kind;
						var key = null;
						var value = null;
						var computed = false;
						var method = false;
						var shorthand = false;
						var isAsync = false;
						if (token.type === 3) {
							var id = token.value;
							this.nextToken();
							computed = this.match("[");
							isAsync = !this.hasLineTerminator && id === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
							key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
						} else if (this.match("*")) this.nextToken();
						else {
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
						}
						var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
						if (token.type === 3 && !isAsync && token.value === "get" && lookaheadPropertyKey) {
							kind = "get";
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							this.context.allowYield = false;
							value = this.parseGetterMethod();
						} else if (token.type === 3 && !isAsync && token.value === "set" && lookaheadPropertyKey) {
							kind = "set";
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							value = this.parseSetterMethod();
						} else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
							kind = "init";
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							value = this.parseGeneratorMethod();
							method = true;
						} else {
							if (!key) this.throwUnexpectedToken(this.lookahead);
							kind = "init";
							if (this.match(":") && !isAsync) {
								if (!computed && this.isPropertyKey(key, "__proto__")) {
									if (hasProto.value) this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
									hasProto.value = true;
								}
								this.nextToken();
								value = this.inheritCoverGrammar(this.parseAssignmentExpression);
							} else if (this.match("(")) {
								value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
								method = true;
							} else if (token.type === 3) {
								var id = this.finalize(node, new Node.Identifier(token.value));
								if (this.match("=")) {
									this.context.firstCoverInitializedNameError = this.lookahead;
									this.nextToken();
									shorthand = true;
									var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
									value = this.finalize(node, new Node.AssignmentPattern(id, init));
								} else {
									shorthand = true;
									value = id;
								}
							} else this.throwUnexpectedToken(this.nextToken());
						}
						return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
					};
					Parser.prototype.parseObjectInitializer = function() {
						var node = this.createNode();
						this.expect("{");
						var properties = [];
						var hasProto = { value: false };
						while (!this.match("}")) {
							properties.push(this.parseObjectProperty(hasProto));
							if (!this.match("}")) this.expectCommaSeparator();
						}
						this.expect("}");
						return this.finalize(node, new Node.ObjectExpression(properties));
					};
					Parser.prototype.parseTemplateHead = function() {
						assert_1.assert(this.lookahead.head, "Template literal must start with a template head");
						var node = this.createNode();
						var token = this.nextToken();
						var raw = token.value;
						var cooked = token.cooked;
						return this.finalize(node, new Node.TemplateElement({
							raw,
							cooked
						}, token.tail));
					};
					Parser.prototype.parseTemplateElement = function() {
						if (this.lookahead.type !== 10) this.throwUnexpectedToken();
						var node = this.createNode();
						var token = this.nextToken();
						var raw = token.value;
						var cooked = token.cooked;
						return this.finalize(node, new Node.TemplateElement({
							raw,
							cooked
						}, token.tail));
					};
					Parser.prototype.parseTemplateLiteral = function() {
						var node = this.createNode();
						var expressions = [];
						var quasis = [];
						var quasi = this.parseTemplateHead();
						quasis.push(quasi);
						while (!quasi.tail) {
							expressions.push(this.parseExpression());
							quasi = this.parseTemplateElement();
							quasis.push(quasi);
						}
						return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
					};
					Parser.prototype.reinterpretExpressionAsPattern = function(expr) {
						switch (expr.type) {
							case syntax_1.Syntax.Identifier:
							case syntax_1.Syntax.MemberExpression:
							case syntax_1.Syntax.RestElement:
							case syntax_1.Syntax.AssignmentPattern: break;
							case syntax_1.Syntax.SpreadElement:
								expr.type = syntax_1.Syntax.RestElement;
								this.reinterpretExpressionAsPattern(expr.argument);
								break;
							case syntax_1.Syntax.ArrayExpression:
								expr.type = syntax_1.Syntax.ArrayPattern;
								for (var i = 0; i < expr.elements.length; i++) if (expr.elements[i] !== null) this.reinterpretExpressionAsPattern(expr.elements[i]);
								break;
							case syntax_1.Syntax.ObjectExpression:
								expr.type = syntax_1.Syntax.ObjectPattern;
								for (var i = 0; i < expr.properties.length; i++) this.reinterpretExpressionAsPattern(expr.properties[i].value);
								break;
							case syntax_1.Syntax.AssignmentExpression:
								expr.type = syntax_1.Syntax.AssignmentPattern;
								delete expr.operator;
								this.reinterpretExpressionAsPattern(expr.left);
								break;
							default: break;
						}
					};
					Parser.prototype.parseGroupExpression = function() {
						var expr;
						this.expect("(");
						if (this.match(")")) {
							this.nextToken();
							if (!this.match("=>")) this.expect("=>");
							expr = {
								type: ArrowParameterPlaceHolder,
								params: [],
								async: false
							};
						} else {
							var startToken = this.lookahead;
							var params = [];
							if (this.match("...")) {
								expr = this.parseRestElement(params);
								this.expect(")");
								if (!this.match("=>")) this.expect("=>");
								expr = {
									type: ArrowParameterPlaceHolder,
									params: [expr],
									async: false
								};
							} else {
								var arrow = false;
								this.context.isBindingElement = true;
								expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
								if (this.match(",")) {
									var expressions = [];
									this.context.isAssignmentTarget = false;
									expressions.push(expr);
									while (this.lookahead.type !== 2) {
										if (!this.match(",")) break;
										this.nextToken();
										if (this.match(")")) {
											this.nextToken();
											for (var i = 0; i < expressions.length; i++) this.reinterpretExpressionAsPattern(expressions[i]);
											arrow = true;
											expr = {
												type: ArrowParameterPlaceHolder,
												params: expressions,
												async: false
											};
										} else if (this.match("...")) {
											if (!this.context.isBindingElement) this.throwUnexpectedToken(this.lookahead);
											expressions.push(this.parseRestElement(params));
											this.expect(")");
											if (!this.match("=>")) this.expect("=>");
											this.context.isBindingElement = false;
											for (var i = 0; i < expressions.length; i++) this.reinterpretExpressionAsPattern(expressions[i]);
											arrow = true;
											expr = {
												type: ArrowParameterPlaceHolder,
												params: expressions,
												async: false
											};
										} else expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
										if (arrow) break;
									}
									if (!arrow) expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
								}
								if (!arrow) {
									this.expect(")");
									if (this.match("=>")) {
										if (expr.type === syntax_1.Syntax.Identifier && expr.name === "yield") {
											arrow = true;
											expr = {
												type: ArrowParameterPlaceHolder,
												params: [expr],
												async: false
											};
										}
										if (!arrow) {
											if (!this.context.isBindingElement) this.throwUnexpectedToken(this.lookahead);
											if (expr.type === syntax_1.Syntax.SequenceExpression) for (var i = 0; i < expr.expressions.length; i++) this.reinterpretExpressionAsPattern(expr.expressions[i]);
											else this.reinterpretExpressionAsPattern(expr);
											expr = {
												type: ArrowParameterPlaceHolder,
												params: expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr],
												async: false
											};
										}
									}
									this.context.isBindingElement = false;
								}
							}
						}
						return expr;
					};
					Parser.prototype.parseArguments = function() {
						this.expect("(");
						var args = [];
						if (!this.match(")")) while (true) {
							var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
							args.push(expr);
							if (this.match(")")) break;
							this.expectCommaSeparator();
							if (this.match(")")) break;
						}
						this.expect(")");
						return args;
					};
					Parser.prototype.isIdentifierName = function(token) {
						return token.type === 3 || token.type === 4 || token.type === 1 || token.type === 5;
					};
					Parser.prototype.parseIdentifierName = function() {
						var node = this.createNode();
						var token = this.nextToken();
						if (!this.isIdentifierName(token)) this.throwUnexpectedToken(token);
						return this.finalize(node, new Node.Identifier(token.value));
					};
					Parser.prototype.parseNewExpression = function() {
						var node = this.createNode();
						var id = this.parseIdentifierName();
						assert_1.assert(id.name === "new", "New expression must start with `new`");
						var expr;
						if (this.match(".")) {
							this.nextToken();
							if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
								var property = this.parseIdentifierName();
								expr = new Node.MetaProperty(id, property);
							} else this.throwUnexpectedToken(this.lookahead);
						} else {
							var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
							var args = this.match("(") ? this.parseArguments() : [];
							expr = new Node.NewExpression(callee, args);
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
						}
						return this.finalize(node, expr);
					};
					Parser.prototype.parseAsyncArgument = function() {
						var arg = this.parseAssignmentExpression();
						this.context.firstCoverInitializedNameError = null;
						return arg;
					};
					Parser.prototype.parseAsyncArguments = function() {
						this.expect("(");
						var args = [];
						if (!this.match(")")) while (true) {
							var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
							args.push(expr);
							if (this.match(")")) break;
							this.expectCommaSeparator();
							if (this.match(")")) break;
						}
						this.expect(")");
						return args;
					};
					Parser.prototype.parseLeftHandSideExpressionAllowCall = function() {
						var startToken = this.lookahead;
						var maybeAsync = this.matchContextualKeyword("async");
						var previousAllowIn = this.context.allowIn;
						this.context.allowIn = true;
						var expr;
						if (this.matchKeyword("super") && this.context.inFunctionBody) {
							expr = this.createNode();
							this.nextToken();
							expr = this.finalize(expr, new Node.Super());
							if (!this.match("(") && !this.match(".") && !this.match("[")) this.throwUnexpectedToken(this.lookahead);
						} else expr = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
						while (true) if (this.match(".")) {
							this.context.isBindingElement = false;
							this.context.isAssignmentTarget = true;
							this.expect(".");
							var property = this.parseIdentifierName();
							expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
						} else if (this.match("(")) {
							var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
							this.context.isBindingElement = false;
							this.context.isAssignmentTarget = false;
							var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
							expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
							if (asyncArrow && this.match("=>")) {
								for (var i = 0; i < args.length; ++i) this.reinterpretExpressionAsPattern(args[i]);
								expr = {
									type: ArrowParameterPlaceHolder,
									params: args,
									async: true
								};
							}
						} else if (this.match("[")) {
							this.context.isBindingElement = false;
							this.context.isAssignmentTarget = true;
							this.expect("[");
							var property = this.isolateCoverGrammar(this.parseExpression);
							this.expect("]");
							expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
						} else if (this.lookahead.type === 10 && this.lookahead.head) {
							var quasi = this.parseTemplateLiteral();
							expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
						} else break;
						this.context.allowIn = previousAllowIn;
						return expr;
					};
					Parser.prototype.parseSuper = function() {
						var node = this.createNode();
						this.expectKeyword("super");
						if (!this.match("[") && !this.match(".")) this.throwUnexpectedToken(this.lookahead);
						return this.finalize(node, new Node.Super());
					};
					Parser.prototype.parseLeftHandSideExpression = function() {
						assert_1.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
						var node = this.startNode(this.lookahead);
						var expr = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
						while (true) if (this.match("[")) {
							this.context.isBindingElement = false;
							this.context.isAssignmentTarget = true;
							this.expect("[");
							var property = this.isolateCoverGrammar(this.parseExpression);
							this.expect("]");
							expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
						} else if (this.match(".")) {
							this.context.isBindingElement = false;
							this.context.isAssignmentTarget = true;
							this.expect(".");
							var property = this.parseIdentifierName();
							expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
						} else if (this.lookahead.type === 10 && this.lookahead.head) {
							var quasi = this.parseTemplateLiteral();
							expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
						} else break;
						return expr;
					};
					Parser.prototype.parseUpdateExpression = function() {
						var expr;
						var startToken = this.lookahead;
						if (this.match("++") || this.match("--")) {
							var node = this.startNode(startToken);
							var token = this.nextToken();
							expr = this.inheritCoverGrammar(this.parseUnaryExpression);
							if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) this.tolerateError(messages_1.Messages.StrictLHSPrefix);
							if (!this.context.isAssignmentTarget) this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
							var prefix = true;
							expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
						} else {
							expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
							if (!this.hasLineTerminator && this.lookahead.type === 7) {
								if (this.match("++") || this.match("--")) {
									if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) this.tolerateError(messages_1.Messages.StrictLHSPostfix);
									if (!this.context.isAssignmentTarget) this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
									this.context.isAssignmentTarget = false;
									this.context.isBindingElement = false;
									var operator = this.nextToken().value;
									var prefix = false;
									expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
								}
							}
						}
						return expr;
					};
					Parser.prototype.parseAwaitExpression = function() {
						var node = this.createNode();
						this.nextToken();
						var argument = this.parseUnaryExpression();
						return this.finalize(node, new Node.AwaitExpression(argument));
					};
					Parser.prototype.parseUnaryExpression = function() {
						var expr;
						if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
							var node = this.startNode(this.lookahead);
							var token = this.nextToken();
							expr = this.inheritCoverGrammar(this.parseUnaryExpression);
							expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
							if (this.context.strict && expr.operator === "delete" && expr.argument.type === syntax_1.Syntax.Identifier) this.tolerateError(messages_1.Messages.StrictDelete);
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
						} else if (this.context.await && this.matchContextualKeyword("await")) expr = this.parseAwaitExpression();
						else expr = this.parseUpdateExpression();
						return expr;
					};
					Parser.prototype.parseExponentiationExpression = function() {
						var startToken = this.lookahead;
						var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
						if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match("**")) {
							this.nextToken();
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
							var left = expr;
							var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
							expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression("**", left, right));
						}
						return expr;
					};
					Parser.prototype.binaryPrecedence = function(token) {
						var op = token.value;
						var precedence;
						if (token.type === 7) precedence = this.operatorPrecedence[op] || 0;
						else if (token.type === 4) precedence = op === "instanceof" || this.context.allowIn && op === "in" ? 7 : 0;
						else precedence = 0;
						return precedence;
					};
					Parser.prototype.parseBinaryExpression = function() {
						var startToken = this.lookahead;
						var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
						var token = this.lookahead;
						var prec = this.binaryPrecedence(token);
						if (prec > 0) {
							this.nextToken();
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
							var markers = [startToken, this.lookahead];
							var left = expr;
							var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
							var stack = [
								left,
								token.value,
								right
							];
							var precedences = [prec];
							while (true) {
								prec = this.binaryPrecedence(this.lookahead);
								if (prec <= 0) break;
								while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
									right = stack.pop();
									var operator = stack.pop();
									precedences.pop();
									left = stack.pop();
									markers.pop();
									var node = this.startNode(markers[markers.length - 1]);
									stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
								}
								stack.push(this.nextToken().value);
								precedences.push(prec);
								markers.push(this.lookahead);
								stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
							}
							var i = stack.length - 1;
							expr = stack[i];
							var lastMarker = markers.pop();
							while (i > 1) {
								var marker = markers.pop();
								var lastLineStart = lastMarker && lastMarker.lineStart;
								var node = this.startNode(marker, lastLineStart);
								var operator = stack[i - 1];
								expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
								i -= 2;
								lastMarker = marker;
							}
						}
						return expr;
					};
					Parser.prototype.parseConditionalExpression = function() {
						var startToken = this.lookahead;
						var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
						if (this.match("?")) {
							this.nextToken();
							var previousAllowIn = this.context.allowIn;
							this.context.allowIn = true;
							var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
							this.context.allowIn = previousAllowIn;
							this.expect(":");
							var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
							expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
						}
						return expr;
					};
					Parser.prototype.checkPatternParam = function(options, param) {
						switch (param.type) {
							case syntax_1.Syntax.Identifier:
								this.validateParam(options, param, param.name);
								break;
							case syntax_1.Syntax.RestElement:
								this.checkPatternParam(options, param.argument);
								break;
							case syntax_1.Syntax.AssignmentPattern:
								this.checkPatternParam(options, param.left);
								break;
							case syntax_1.Syntax.ArrayPattern:
								for (var i = 0; i < param.elements.length; i++) if (param.elements[i] !== null) this.checkPatternParam(options, param.elements[i]);
								break;
							case syntax_1.Syntax.ObjectPattern:
								for (var i = 0; i < param.properties.length; i++) this.checkPatternParam(options, param.properties[i].value);
								break;
							default: break;
						}
						options.simple = options.simple && param instanceof Node.Identifier;
					};
					Parser.prototype.reinterpretAsCoverFormalsList = function(expr) {
						var params = [expr];
						var options;
						var asyncArrow = false;
						switch (expr.type) {
							case syntax_1.Syntax.Identifier: break;
							case ArrowParameterPlaceHolder:
								params = expr.params;
								asyncArrow = expr.async;
								break;
							default: return null;
						}
						options = {
							simple: true,
							paramSet: {}
						};
						for (var i = 0; i < params.length; ++i) {
							var param = params[i];
							if (param.type === syntax_1.Syntax.AssignmentPattern) {
								if (param.right.type === syntax_1.Syntax.YieldExpression) {
									if (param.right.argument) this.throwUnexpectedToken(this.lookahead);
									param.right.type = syntax_1.Syntax.Identifier;
									param.right.name = "yield";
									delete param.right.argument;
									delete param.right.delegate;
								}
							} else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === "await") this.throwUnexpectedToken(this.lookahead);
							this.checkPatternParam(options, param);
							params[i] = param;
						}
						if (this.context.strict || !this.context.allowYield) for (var i = 0; i < params.length; ++i) {
							var param = params[i];
							if (param.type === syntax_1.Syntax.YieldExpression) this.throwUnexpectedToken(this.lookahead);
						}
						if (options.message === messages_1.Messages.StrictParamDupe) {
							var token = this.context.strict ? options.stricted : options.firstRestricted;
							this.throwUnexpectedToken(token, options.message);
						}
						return {
							simple: options.simple,
							params,
							stricted: options.stricted,
							firstRestricted: options.firstRestricted,
							message: options.message
						};
					};
					Parser.prototype.parseAssignmentExpression = function() {
						var expr;
						if (!this.context.allowYield && this.matchKeyword("yield")) expr = this.parseYieldExpression();
						else {
							var startToken = this.lookahead;
							var token = startToken;
							expr = this.parseConditionalExpression();
							if (token.type === 3 && token.lineNumber === this.lookahead.lineNumber && token.value === "async") {
								if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
									var arg = this.parsePrimaryExpression();
									this.reinterpretExpressionAsPattern(arg);
									expr = {
										type: ArrowParameterPlaceHolder,
										params: [arg],
										async: true
									};
								}
							}
							if (expr.type === ArrowParameterPlaceHolder || this.match("=>")) {
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								var isAsync = expr.async;
								var list = this.reinterpretAsCoverFormalsList(expr);
								if (list) {
									if (this.hasLineTerminator) this.tolerateUnexpectedToken(this.lookahead);
									this.context.firstCoverInitializedNameError = null;
									var previousStrict = this.context.strict;
									var previousAllowStrictDirective = this.context.allowStrictDirective;
									this.context.allowStrictDirective = list.simple;
									var previousAllowYield = this.context.allowYield;
									var previousAwait = this.context.await;
									this.context.allowYield = true;
									this.context.await = isAsync;
									var node = this.startNode(startToken);
									this.expect("=>");
									var body = void 0;
									if (this.match("{")) {
										var previousAllowIn = this.context.allowIn;
										this.context.allowIn = true;
										body = this.parseFunctionSourceElements();
										this.context.allowIn = previousAllowIn;
									} else body = this.isolateCoverGrammar(this.parseAssignmentExpression);
									var expression = body.type !== syntax_1.Syntax.BlockStatement;
									if (this.context.strict && list.firstRestricted) this.throwUnexpectedToken(list.firstRestricted, list.message);
									if (this.context.strict && list.stricted) this.tolerateUnexpectedToken(list.stricted, list.message);
									expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
									this.context.strict = previousStrict;
									this.context.allowStrictDirective = previousAllowStrictDirective;
									this.context.allowYield = previousAllowYield;
									this.context.await = previousAwait;
								}
							} else if (this.matchAssign()) {
								if (!this.context.isAssignmentTarget) this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
								if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
									var id = expr;
									if (this.scanner.isRestrictedWord(id.name)) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
									if (this.scanner.isStrictModeReservedWord(id.name)) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
								}
								if (!this.match("=")) {
									this.context.isAssignmentTarget = false;
									this.context.isBindingElement = false;
								} else this.reinterpretExpressionAsPattern(expr);
								token = this.nextToken();
								var operator = token.value;
								var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
								expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
								this.context.firstCoverInitializedNameError = null;
							}
						}
						return expr;
					};
					Parser.prototype.parseExpression = function() {
						var startToken = this.lookahead;
						var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
						if (this.match(",")) {
							var expressions = [];
							expressions.push(expr);
							while (this.lookahead.type !== 2) {
								if (!this.match(",")) break;
								this.nextToken();
								expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
							}
							expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
						}
						return expr;
					};
					Parser.prototype.parseStatementListItem = function() {
						var statement;
						this.context.isAssignmentTarget = true;
						this.context.isBindingElement = true;
						if (this.lookahead.type === 4) switch (this.lookahead.value) {
							case "export":
								if (!this.context.isModule) this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
								statement = this.parseExportDeclaration();
								break;
							case "import":
								if (!this.context.isModule) this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
								statement = this.parseImportDeclaration();
								break;
							case "const":
								statement = this.parseLexicalDeclaration({ inFor: false });
								break;
							case "function":
								statement = this.parseFunctionDeclaration();
								break;
							case "class":
								statement = this.parseClassDeclaration();
								break;
							case "let":
								statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
								break;
							default:
								statement = this.parseStatement();
								break;
						}
						else statement = this.parseStatement();
						return statement;
					};
					Parser.prototype.parseBlock = function() {
						var node = this.createNode();
						this.expect("{");
						var block = [];
						while (true) {
							if (this.match("}")) break;
							block.push(this.parseStatementListItem());
						}
						this.expect("}");
						return this.finalize(node, new Node.BlockStatement(block));
					};
					Parser.prototype.parseLexicalBinding = function(kind, options) {
						var node = this.createNode();
						var id = this.parsePattern([], kind);
						if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
							if (this.scanner.isRestrictedWord(id.name)) this.tolerateError(messages_1.Messages.StrictVarName);
						}
						var init = null;
						if (kind === "const") {
							if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) if (this.match("=")) {
								this.nextToken();
								init = this.isolateCoverGrammar(this.parseAssignmentExpression);
							} else this.throwError(messages_1.Messages.DeclarationMissingInitializer, "const");
						} else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match("=")) {
							this.expect("=");
							init = this.isolateCoverGrammar(this.parseAssignmentExpression);
						}
						return this.finalize(node, new Node.VariableDeclarator(id, init));
					};
					Parser.prototype.parseBindingList = function(kind, options) {
						var list = [this.parseLexicalBinding(kind, options)];
						while (this.match(",")) {
							this.nextToken();
							list.push(this.parseLexicalBinding(kind, options));
						}
						return list;
					};
					Parser.prototype.isLexicalDeclaration = function() {
						var state = this.scanner.saveState();
						this.scanner.scanComments();
						var next = this.scanner.lex();
						this.scanner.restoreState(state);
						return next.type === 3 || next.type === 7 && next.value === "[" || next.type === 7 && next.value === "{" || next.type === 4 && next.value === "let" || next.type === 4 && next.value === "yield";
					};
					Parser.prototype.parseLexicalDeclaration = function(options) {
						var node = this.createNode();
						var kind = this.nextToken().value;
						assert_1.assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
						var declarations = this.parseBindingList(kind, options);
						this.consumeSemicolon();
						return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
					};
					Parser.prototype.parseBindingRestElement = function(params, kind) {
						var node = this.createNode();
						this.expect("...");
						var arg = this.parsePattern(params, kind);
						return this.finalize(node, new Node.RestElement(arg));
					};
					Parser.prototype.parseArrayPattern = function(params, kind) {
						var node = this.createNode();
						this.expect("[");
						var elements = [];
						while (!this.match("]")) if (this.match(",")) {
							this.nextToken();
							elements.push(null);
						} else {
							if (this.match("...")) {
								elements.push(this.parseBindingRestElement(params, kind));
								break;
							} else elements.push(this.parsePatternWithDefault(params, kind));
							if (!this.match("]")) this.expect(",");
						}
						this.expect("]");
						return this.finalize(node, new Node.ArrayPattern(elements));
					};
					Parser.prototype.parsePropertyPattern = function(params, kind) {
						var node = this.createNode();
						var computed = false;
						var shorthand = false;
						var method = false;
						var key;
						var value;
						if (this.lookahead.type === 3) {
							var keyToken = this.lookahead;
							key = this.parseVariableIdentifier();
							var init = this.finalize(node, new Node.Identifier(keyToken.value));
							if (this.match("=")) {
								params.push(keyToken);
								shorthand = true;
								this.nextToken();
								var expr = this.parseAssignmentExpression();
								value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
							} else if (!this.match(":")) {
								params.push(keyToken);
								shorthand = true;
								value = init;
							} else {
								this.expect(":");
								value = this.parsePatternWithDefault(params, kind);
							}
						} else {
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							this.expect(":");
							value = this.parsePatternWithDefault(params, kind);
						}
						return this.finalize(node, new Node.Property("init", key, computed, value, method, shorthand));
					};
					Parser.prototype.parseObjectPattern = function(params, kind) {
						var node = this.createNode();
						var properties = [];
						this.expect("{");
						while (!this.match("}")) {
							properties.push(this.parsePropertyPattern(params, kind));
							if (!this.match("}")) this.expect(",");
						}
						this.expect("}");
						return this.finalize(node, new Node.ObjectPattern(properties));
					};
					Parser.prototype.parsePattern = function(params, kind) {
						var pattern;
						if (this.match("[")) pattern = this.parseArrayPattern(params, kind);
						else if (this.match("{")) pattern = this.parseObjectPattern(params, kind);
						else {
							if (this.matchKeyword("let") && (kind === "const" || kind === "let")) this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
							params.push(this.lookahead);
							pattern = this.parseVariableIdentifier(kind);
						}
						return pattern;
					};
					Parser.prototype.parsePatternWithDefault = function(params, kind) {
						var startToken = this.lookahead;
						var pattern = this.parsePattern(params, kind);
						if (this.match("=")) {
							this.nextToken();
							var previousAllowYield = this.context.allowYield;
							this.context.allowYield = true;
							var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
							this.context.allowYield = previousAllowYield;
							pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
						}
						return pattern;
					};
					Parser.prototype.parseVariableIdentifier = function(kind) {
						var node = this.createNode();
						var token = this.nextToken();
						if (token.type === 4 && token.value === "yield") {
							if (this.context.strict) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
							else if (!this.context.allowYield) this.throwUnexpectedToken(token);
						} else if (token.type !== 3) {
							if (this.context.strict && token.type === 4 && this.scanner.isStrictModeReservedWord(token.value)) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
							else if (this.context.strict || token.value !== "let" || kind !== "var") this.throwUnexpectedToken(token);
						} else if ((this.context.isModule || this.context.await) && token.type === 3 && token.value === "await") this.tolerateUnexpectedToken(token);
						return this.finalize(node, new Node.Identifier(token.value));
					};
					Parser.prototype.parseVariableDeclaration = function(options) {
						var node = this.createNode();
						var id = this.parsePattern([], "var");
						if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
							if (this.scanner.isRestrictedWord(id.name)) this.tolerateError(messages_1.Messages.StrictVarName);
						}
						var init = null;
						if (this.match("=")) {
							this.nextToken();
							init = this.isolateCoverGrammar(this.parseAssignmentExpression);
						} else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) this.expect("=");
						return this.finalize(node, new Node.VariableDeclarator(id, init));
					};
					Parser.prototype.parseVariableDeclarationList = function(options) {
						var opt = { inFor: options.inFor };
						var list = [];
						list.push(this.parseVariableDeclaration(opt));
						while (this.match(",")) {
							this.nextToken();
							list.push(this.parseVariableDeclaration(opt));
						}
						return list;
					};
					Parser.prototype.parseVariableStatement = function() {
						var node = this.createNode();
						this.expectKeyword("var");
						var declarations = this.parseVariableDeclarationList({ inFor: false });
						this.consumeSemicolon();
						return this.finalize(node, new Node.VariableDeclaration(declarations, "var"));
					};
					Parser.prototype.parseEmptyStatement = function() {
						var node = this.createNode();
						this.expect(";");
						return this.finalize(node, new Node.EmptyStatement());
					};
					Parser.prototype.parseExpressionStatement = function() {
						var node = this.createNode();
						var expr = this.parseExpression();
						this.consumeSemicolon();
						return this.finalize(node, new Node.ExpressionStatement(expr));
					};
					Parser.prototype.parseIfClause = function() {
						if (this.context.strict && this.matchKeyword("function")) this.tolerateError(messages_1.Messages.StrictFunction);
						return this.parseStatement();
					};
					Parser.prototype.parseIfStatement = function() {
						var node = this.createNode();
						var consequent;
						var alternate = null;
						this.expectKeyword("if");
						this.expect("(");
						var test = this.parseExpression();
						if (!this.match(")") && this.config.tolerant) {
							this.tolerateUnexpectedToken(this.nextToken());
							consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
						} else {
							this.expect(")");
							consequent = this.parseIfClause();
							if (this.matchKeyword("else")) {
								this.nextToken();
								alternate = this.parseIfClause();
							}
						}
						return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
					};
					Parser.prototype.parseDoWhileStatement = function() {
						var node = this.createNode();
						this.expectKeyword("do");
						var previousInIteration = this.context.inIteration;
						this.context.inIteration = true;
						var body = this.parseStatement();
						this.context.inIteration = previousInIteration;
						this.expectKeyword("while");
						this.expect("(");
						var test = this.parseExpression();
						if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken());
						else {
							this.expect(")");
							if (this.match(";")) this.nextToken();
						}
						return this.finalize(node, new Node.DoWhileStatement(body, test));
					};
					Parser.prototype.parseWhileStatement = function() {
						var node = this.createNode();
						var body;
						this.expectKeyword("while");
						this.expect("(");
						var test = this.parseExpression();
						if (!this.match(")") && this.config.tolerant) {
							this.tolerateUnexpectedToken(this.nextToken());
							body = this.finalize(this.createNode(), new Node.EmptyStatement());
						} else {
							this.expect(")");
							var previousInIteration = this.context.inIteration;
							this.context.inIteration = true;
							body = this.parseStatement();
							this.context.inIteration = previousInIteration;
						}
						return this.finalize(node, new Node.WhileStatement(test, body));
					};
					Parser.prototype.parseForStatement = function() {
						var init = null;
						var test = null;
						var update = null;
						var forIn = true;
						var left, right;
						var node = this.createNode();
						this.expectKeyword("for");
						this.expect("(");
						if (this.match(";")) this.nextToken();
						else if (this.matchKeyword("var")) {
							init = this.createNode();
							this.nextToken();
							var previousAllowIn = this.context.allowIn;
							this.context.allowIn = false;
							var declarations = this.parseVariableDeclarationList({ inFor: true });
							this.context.allowIn = previousAllowIn;
							if (declarations.length === 1 && this.matchKeyword("in")) {
								var decl = declarations[0];
								if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, "for-in");
								init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
								this.nextToken();
								left = init;
								right = this.parseExpression();
								init = null;
							} else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
								init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
								this.nextToken();
								left = init;
								right = this.parseAssignmentExpression();
								init = null;
								forIn = false;
							} else {
								init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
								this.expect(";");
							}
						} else if (this.matchKeyword("const") || this.matchKeyword("let")) {
							init = this.createNode();
							var kind = this.nextToken().value;
							if (!this.context.strict && this.lookahead.value === "in") {
								init = this.finalize(init, new Node.Identifier(kind));
								this.nextToken();
								left = init;
								right = this.parseExpression();
								init = null;
							} else {
								var previousAllowIn = this.context.allowIn;
								this.context.allowIn = false;
								var declarations = this.parseBindingList(kind, { inFor: true });
								this.context.allowIn = previousAllowIn;
								if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword("in")) {
									init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
									this.nextToken();
									left = init;
									right = this.parseExpression();
									init = null;
								} else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
									init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
									this.nextToken();
									left = init;
									right = this.parseAssignmentExpression();
									init = null;
									forIn = false;
								} else {
									this.consumeSemicolon();
									init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
								}
							}
						} else {
							var initStartToken = this.lookahead;
							var previousAllowIn = this.context.allowIn;
							this.context.allowIn = false;
							init = this.inheritCoverGrammar(this.parseAssignmentExpression);
							this.context.allowIn = previousAllowIn;
							if (this.matchKeyword("in")) {
								if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
								this.nextToken();
								this.reinterpretExpressionAsPattern(init);
								left = init;
								right = this.parseExpression();
								init = null;
							} else if (this.matchContextualKeyword("of")) {
								if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
								this.nextToken();
								this.reinterpretExpressionAsPattern(init);
								left = init;
								right = this.parseAssignmentExpression();
								init = null;
								forIn = false;
							} else {
								if (this.match(",")) {
									var initSeq = [init];
									while (this.match(",")) {
										this.nextToken();
										initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
									}
									init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
								}
								this.expect(";");
							}
						}
						if (typeof left === "undefined") {
							if (!this.match(";")) test = this.parseExpression();
							this.expect(";");
							if (!this.match(")")) update = this.parseExpression();
						}
						var body;
						if (!this.match(")") && this.config.tolerant) {
							this.tolerateUnexpectedToken(this.nextToken());
							body = this.finalize(this.createNode(), new Node.EmptyStatement());
						} else {
							this.expect(")");
							var previousInIteration = this.context.inIteration;
							this.context.inIteration = true;
							body = this.isolateCoverGrammar(this.parseStatement);
							this.context.inIteration = previousInIteration;
						}
						return typeof left === "undefined" ? this.finalize(node, new Node.ForStatement(init, test, update, body)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) : this.finalize(node, new Node.ForOfStatement(left, right, body));
					};
					Parser.prototype.parseContinueStatement = function() {
						var node = this.createNode();
						this.expectKeyword("continue");
						var label = null;
						if (this.lookahead.type === 3 && !this.hasLineTerminator) {
							var id = this.parseVariableIdentifier();
							label = id;
							var key = "$" + id.name;
							if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) this.throwError(messages_1.Messages.UnknownLabel, id.name);
						}
						this.consumeSemicolon();
						if (label === null && !this.context.inIteration) this.throwError(messages_1.Messages.IllegalContinue);
						return this.finalize(node, new Node.ContinueStatement(label));
					};
					Parser.prototype.parseBreakStatement = function() {
						var node = this.createNode();
						this.expectKeyword("break");
						var label = null;
						if (this.lookahead.type === 3 && !this.hasLineTerminator) {
							var id = this.parseVariableIdentifier();
							var key = "$" + id.name;
							if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) this.throwError(messages_1.Messages.UnknownLabel, id.name);
							label = id;
						}
						this.consumeSemicolon();
						if (label === null && !this.context.inIteration && !this.context.inSwitch) this.throwError(messages_1.Messages.IllegalBreak);
						return this.finalize(node, new Node.BreakStatement(label));
					};
					Parser.prototype.parseReturnStatement = function() {
						if (!this.context.inFunctionBody) this.tolerateError(messages_1.Messages.IllegalReturn);
						var node = this.createNode();
						this.expectKeyword("return");
						var argument = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10 ? this.parseExpression() : null;
						this.consumeSemicolon();
						return this.finalize(node, new Node.ReturnStatement(argument));
					};
					Parser.prototype.parseWithStatement = function() {
						if (this.context.strict) this.tolerateError(messages_1.Messages.StrictModeWith);
						var node = this.createNode();
						var body;
						this.expectKeyword("with");
						this.expect("(");
						var object = this.parseExpression();
						if (!this.match(")") && this.config.tolerant) {
							this.tolerateUnexpectedToken(this.nextToken());
							body = this.finalize(this.createNode(), new Node.EmptyStatement());
						} else {
							this.expect(")");
							body = this.parseStatement();
						}
						return this.finalize(node, new Node.WithStatement(object, body));
					};
					Parser.prototype.parseSwitchCase = function() {
						var node = this.createNode();
						var test;
						if (this.matchKeyword("default")) {
							this.nextToken();
							test = null;
						} else {
							this.expectKeyword("case");
							test = this.parseExpression();
						}
						this.expect(":");
						var consequent = [];
						while (true) {
							if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) break;
							consequent.push(this.parseStatementListItem());
						}
						return this.finalize(node, new Node.SwitchCase(test, consequent));
					};
					Parser.prototype.parseSwitchStatement = function() {
						var node = this.createNode();
						this.expectKeyword("switch");
						this.expect("(");
						var discriminant = this.parseExpression();
						this.expect(")");
						var previousInSwitch = this.context.inSwitch;
						this.context.inSwitch = true;
						var cases = [];
						var defaultFound = false;
						this.expect("{");
						while (true) {
							if (this.match("}")) break;
							var clause = this.parseSwitchCase();
							if (clause.test === null) {
								if (defaultFound) this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
								defaultFound = true;
							}
							cases.push(clause);
						}
						this.expect("}");
						this.context.inSwitch = previousInSwitch;
						return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
					};
					Parser.prototype.parseLabelledStatement = function() {
						var node = this.createNode();
						var expr = this.parseExpression();
						var statement;
						if (expr.type === syntax_1.Syntax.Identifier && this.match(":")) {
							this.nextToken();
							var id = expr;
							var key = "$" + id.name;
							if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) this.throwError(messages_1.Messages.Redeclaration, "Label", id.name);
							this.context.labelSet[key] = true;
							var body = void 0;
							if (this.matchKeyword("class")) {
								this.tolerateUnexpectedToken(this.lookahead);
								body = this.parseClassDeclaration();
							} else if (this.matchKeyword("function")) {
								var token = this.lookahead;
								var declaration = this.parseFunctionDeclaration();
								if (this.context.strict) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
								else if (declaration.generator) this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
								body = declaration;
							} else body = this.parseStatement();
							delete this.context.labelSet[key];
							statement = new Node.LabeledStatement(id, body);
						} else {
							this.consumeSemicolon();
							statement = new Node.ExpressionStatement(expr);
						}
						return this.finalize(node, statement);
					};
					Parser.prototype.parseThrowStatement = function() {
						var node = this.createNode();
						this.expectKeyword("throw");
						if (this.hasLineTerminator) this.throwError(messages_1.Messages.NewlineAfterThrow);
						var argument = this.parseExpression();
						this.consumeSemicolon();
						return this.finalize(node, new Node.ThrowStatement(argument));
					};
					Parser.prototype.parseCatchClause = function() {
						var node = this.createNode();
						this.expectKeyword("catch");
						this.expect("(");
						if (this.match(")")) this.throwUnexpectedToken(this.lookahead);
						var params = [];
						var param = this.parsePattern(params);
						var paramMap = {};
						for (var i = 0; i < params.length; i++) {
							var key = "$" + params[i].value;
							if (Object.prototype.hasOwnProperty.call(paramMap, key)) this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
							paramMap[key] = true;
						}
						if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
							if (this.scanner.isRestrictedWord(param.name)) this.tolerateError(messages_1.Messages.StrictCatchVariable);
						}
						this.expect(")");
						var body = this.parseBlock();
						return this.finalize(node, new Node.CatchClause(param, body));
					};
					Parser.prototype.parseFinallyClause = function() {
						this.expectKeyword("finally");
						return this.parseBlock();
					};
					Parser.prototype.parseTryStatement = function() {
						var node = this.createNode();
						this.expectKeyword("try");
						var block = this.parseBlock();
						var handler = this.matchKeyword("catch") ? this.parseCatchClause() : null;
						var finalizer = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
						if (!handler && !finalizer) this.throwError(messages_1.Messages.NoCatchOrFinally);
						return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
					};
					Parser.prototype.parseDebuggerStatement = function() {
						var node = this.createNode();
						this.expectKeyword("debugger");
						this.consumeSemicolon();
						return this.finalize(node, new Node.DebuggerStatement());
					};
					Parser.prototype.parseStatement = function() {
						var statement;
						switch (this.lookahead.type) {
							case 1:
							case 5:
							case 6:
							case 8:
							case 10:
							case 9:
								statement = this.parseExpressionStatement();
								break;
							case 7:
								var value = this.lookahead.value;
								if (value === "{") statement = this.parseBlock();
								else if (value === "(") statement = this.parseExpressionStatement();
								else if (value === ";") statement = this.parseEmptyStatement();
								else statement = this.parseExpressionStatement();
								break;
							case 3:
								statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
								break;
							case 4:
								switch (this.lookahead.value) {
									case "break":
										statement = this.parseBreakStatement();
										break;
									case "continue":
										statement = this.parseContinueStatement();
										break;
									case "debugger":
										statement = this.parseDebuggerStatement();
										break;
									case "do":
										statement = this.parseDoWhileStatement();
										break;
									case "for":
										statement = this.parseForStatement();
										break;
									case "function":
										statement = this.parseFunctionDeclaration();
										break;
									case "if":
										statement = this.parseIfStatement();
										break;
									case "return":
										statement = this.parseReturnStatement();
										break;
									case "switch":
										statement = this.parseSwitchStatement();
										break;
									case "throw":
										statement = this.parseThrowStatement();
										break;
									case "try":
										statement = this.parseTryStatement();
										break;
									case "var":
										statement = this.parseVariableStatement();
										break;
									case "while":
										statement = this.parseWhileStatement();
										break;
									case "with":
										statement = this.parseWithStatement();
										break;
									default:
										statement = this.parseExpressionStatement();
										break;
								}
								break;
							default: statement = this.throwUnexpectedToken(this.lookahead);
						}
						return statement;
					};
					Parser.prototype.parseFunctionSourceElements = function() {
						var node = this.createNode();
						this.expect("{");
						var body = this.parseDirectivePrologues();
						var previousLabelSet = this.context.labelSet;
						var previousInIteration = this.context.inIteration;
						var previousInSwitch = this.context.inSwitch;
						var previousInFunctionBody = this.context.inFunctionBody;
						this.context.labelSet = {};
						this.context.inIteration = false;
						this.context.inSwitch = false;
						this.context.inFunctionBody = true;
						while (this.lookahead.type !== 2) {
							if (this.match("}")) break;
							body.push(this.parseStatementListItem());
						}
						this.expect("}");
						this.context.labelSet = previousLabelSet;
						this.context.inIteration = previousInIteration;
						this.context.inSwitch = previousInSwitch;
						this.context.inFunctionBody = previousInFunctionBody;
						return this.finalize(node, new Node.BlockStatement(body));
					};
					Parser.prototype.validateParam = function(options, param, name) {
						var key = "$" + name;
						if (this.context.strict) {
							if (this.scanner.isRestrictedWord(name)) {
								options.stricted = param;
								options.message = messages_1.Messages.StrictParamName;
							}
							if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
								options.stricted = param;
								options.message = messages_1.Messages.StrictParamDupe;
							}
						} else if (!options.firstRestricted) {
							if (this.scanner.isRestrictedWord(name)) {
								options.firstRestricted = param;
								options.message = messages_1.Messages.StrictParamName;
							} else if (this.scanner.isStrictModeReservedWord(name)) {
								options.firstRestricted = param;
								options.message = messages_1.Messages.StrictReservedWord;
							} else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
								options.stricted = param;
								options.message = messages_1.Messages.StrictParamDupe;
							}
						}
						/* istanbul ignore next */
						if (typeof Object.defineProperty === "function") Object.defineProperty(options.paramSet, key, {
							value: true,
							enumerable: true,
							writable: true,
							configurable: true
						});
						else options.paramSet[key] = true;
					};
					Parser.prototype.parseRestElement = function(params) {
						var node = this.createNode();
						this.expect("...");
						var arg = this.parsePattern(params);
						if (this.match("=")) this.throwError(messages_1.Messages.DefaultRestParameter);
						if (!this.match(")")) this.throwError(messages_1.Messages.ParameterAfterRestParameter);
						return this.finalize(node, new Node.RestElement(arg));
					};
					Parser.prototype.parseFormalParameter = function(options) {
						var params = [];
						var param = this.match("...") ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
						for (var i = 0; i < params.length; i++) this.validateParam(options, params[i], params[i].value);
						options.simple = options.simple && param instanceof Node.Identifier;
						options.params.push(param);
					};
					Parser.prototype.parseFormalParameters = function(firstRestricted) {
						var options = {
							simple: true,
							params: [],
							firstRestricted
						};
						this.expect("(");
						if (!this.match(")")) {
							options.paramSet = {};
							while (this.lookahead.type !== 2) {
								this.parseFormalParameter(options);
								if (this.match(")")) break;
								this.expect(",");
								if (this.match(")")) break;
							}
						}
						this.expect(")");
						return {
							simple: options.simple,
							params: options.params,
							stricted: options.stricted,
							firstRestricted: options.firstRestricted,
							message: options.message
						};
					};
					Parser.prototype.matchAsyncFunction = function() {
						var match = this.matchContextualKeyword("async");
						if (match) {
							var state = this.scanner.saveState();
							this.scanner.scanComments();
							var next = this.scanner.lex();
							this.scanner.restoreState(state);
							match = state.lineNumber === next.lineNumber && next.type === 4 && next.value === "function";
						}
						return match;
					};
					Parser.prototype.parseFunctionDeclaration = function(identifierIsOptional) {
						var node = this.createNode();
						var isAsync = this.matchContextualKeyword("async");
						if (isAsync) this.nextToken();
						this.expectKeyword("function");
						var isGenerator = isAsync ? false : this.match("*");
						if (isGenerator) this.nextToken();
						var message;
						var id = null;
						var firstRestricted = null;
						if (!identifierIsOptional || !this.match("(")) {
							var token = this.lookahead;
							id = this.parseVariableIdentifier();
							if (this.context.strict) {
								if (this.scanner.isRestrictedWord(token.value)) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
							} else if (this.scanner.isRestrictedWord(token.value)) {
								firstRestricted = token;
								message = messages_1.Messages.StrictFunctionName;
							} else if (this.scanner.isStrictModeReservedWord(token.value)) {
								firstRestricted = token;
								message = messages_1.Messages.StrictReservedWord;
							}
						}
						var previousAllowAwait = this.context.await;
						var previousAllowYield = this.context.allowYield;
						this.context.await = isAsync;
						this.context.allowYield = !isGenerator;
						var formalParameters = this.parseFormalParameters(firstRestricted);
						var params = formalParameters.params;
						var stricted = formalParameters.stricted;
						firstRestricted = formalParameters.firstRestricted;
						if (formalParameters.message) message = formalParameters.message;
						var previousStrict = this.context.strict;
						var previousAllowStrictDirective = this.context.allowStrictDirective;
						this.context.allowStrictDirective = formalParameters.simple;
						var body = this.parseFunctionSourceElements();
						if (this.context.strict && firstRestricted) this.throwUnexpectedToken(firstRestricted, message);
						if (this.context.strict && stricted) this.tolerateUnexpectedToken(stricted, message);
						this.context.strict = previousStrict;
						this.context.allowStrictDirective = previousAllowStrictDirective;
						this.context.await = previousAllowAwait;
						this.context.allowYield = previousAllowYield;
						return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
					};
					Parser.prototype.parseFunctionExpression = function() {
						var node = this.createNode();
						var isAsync = this.matchContextualKeyword("async");
						if (isAsync) this.nextToken();
						this.expectKeyword("function");
						var isGenerator = isAsync ? false : this.match("*");
						if (isGenerator) this.nextToken();
						var message;
						var id = null;
						var firstRestricted;
						var previousAllowAwait = this.context.await;
						var previousAllowYield = this.context.allowYield;
						this.context.await = isAsync;
						this.context.allowYield = !isGenerator;
						if (!this.match("(")) {
							var token = this.lookahead;
							id = !this.context.strict && !isGenerator && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
							if (this.context.strict) {
								if (this.scanner.isRestrictedWord(token.value)) this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
							} else if (this.scanner.isRestrictedWord(token.value)) {
								firstRestricted = token;
								message = messages_1.Messages.StrictFunctionName;
							} else if (this.scanner.isStrictModeReservedWord(token.value)) {
								firstRestricted = token;
								message = messages_1.Messages.StrictReservedWord;
							}
						}
						var formalParameters = this.parseFormalParameters(firstRestricted);
						var params = formalParameters.params;
						var stricted = formalParameters.stricted;
						firstRestricted = formalParameters.firstRestricted;
						if (formalParameters.message) message = formalParameters.message;
						var previousStrict = this.context.strict;
						var previousAllowStrictDirective = this.context.allowStrictDirective;
						this.context.allowStrictDirective = formalParameters.simple;
						var body = this.parseFunctionSourceElements();
						if (this.context.strict && firstRestricted) this.throwUnexpectedToken(firstRestricted, message);
						if (this.context.strict && stricted) this.tolerateUnexpectedToken(stricted, message);
						this.context.strict = previousStrict;
						this.context.allowStrictDirective = previousAllowStrictDirective;
						this.context.await = previousAllowAwait;
						this.context.allowYield = previousAllowYield;
						return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
					};
					Parser.prototype.parseDirective = function() {
						var token = this.lookahead;
						var node = this.createNode();
						var expr = this.parseExpression();
						var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
						this.consumeSemicolon();
						return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
					};
					Parser.prototype.parseDirectivePrologues = function() {
						var firstRestricted = null;
						var body = [];
						while (true) {
							var token = this.lookahead;
							if (token.type !== 8) break;
							var statement = this.parseDirective();
							body.push(statement);
							var directive = statement.directive;
							if (typeof directive !== "string") break;
							if (directive === "use strict") {
								this.context.strict = true;
								if (firstRestricted) this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
								if (!this.context.allowStrictDirective) this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
							} else if (!firstRestricted && token.octal) firstRestricted = token;
						}
						return body;
					};
					Parser.prototype.qualifiedPropertyName = function(token) {
						switch (token.type) {
							case 3:
							case 8:
							case 1:
							case 5:
							case 6:
							case 4: return true;
							case 7: return token.value === "[";
							default: break;
						}
						return false;
					};
					Parser.prototype.parseGetterMethod = function() {
						var node = this.createNode();
						var isGenerator = false;
						var previousAllowYield = this.context.allowYield;
						this.context.allowYield = !isGenerator;
						var formalParameters = this.parseFormalParameters();
						if (formalParameters.params.length > 0) this.tolerateError(messages_1.Messages.BadGetterArity);
						var method = this.parsePropertyMethod(formalParameters);
						this.context.allowYield = previousAllowYield;
						return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
					};
					Parser.prototype.parseSetterMethod = function() {
						var node = this.createNode();
						var isGenerator = false;
						var previousAllowYield = this.context.allowYield;
						this.context.allowYield = !isGenerator;
						var formalParameters = this.parseFormalParameters();
						if (formalParameters.params.length !== 1) this.tolerateError(messages_1.Messages.BadSetterArity);
						else if (formalParameters.params[0] instanceof Node.RestElement) this.tolerateError(messages_1.Messages.BadSetterRestParameter);
						var method = this.parsePropertyMethod(formalParameters);
						this.context.allowYield = previousAllowYield;
						return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
					};
					Parser.prototype.parseGeneratorMethod = function() {
						var node = this.createNode();
						var isGenerator = true;
						var previousAllowYield = this.context.allowYield;
						this.context.allowYield = true;
						var params = this.parseFormalParameters();
						this.context.allowYield = false;
						var method = this.parsePropertyMethod(params);
						this.context.allowYield = previousAllowYield;
						return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
					};
					Parser.prototype.isStartOfExpression = function() {
						var start = true;
						var value = this.lookahead.value;
						switch (this.lookahead.type) {
							case 7:
								start = value === "[" || value === "(" || value === "{" || value === "+" || value === "-" || value === "!" || value === "~" || value === "++" || value === "--" || value === "/" || value === "/=";
								break;
							case 4:
								start = value === "class" || value === "delete" || value === "function" || value === "let" || value === "new" || value === "super" || value === "this" || value === "typeof" || value === "void" || value === "yield";
								break;
							default: break;
						}
						return start;
					};
					Parser.prototype.parseYieldExpression = function() {
						var node = this.createNode();
						this.expectKeyword("yield");
						var argument = null;
						var delegate = false;
						if (!this.hasLineTerminator) {
							var previousAllowYield = this.context.allowYield;
							this.context.allowYield = false;
							delegate = this.match("*");
							if (delegate) {
								this.nextToken();
								argument = this.parseAssignmentExpression();
							} else if (this.isStartOfExpression()) argument = this.parseAssignmentExpression();
							this.context.allowYield = previousAllowYield;
						}
						return this.finalize(node, new Node.YieldExpression(argument, delegate));
					};
					Parser.prototype.parseClassElement = function(hasConstructor) {
						var token = this.lookahead;
						var node = this.createNode();
						var kind = "";
						var key = null;
						var value = null;
						var computed = false;
						var method = false;
						var isStatic = false;
						var isAsync = false;
						if (this.match("*")) this.nextToken();
						else {
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							if (key.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
								token = this.lookahead;
								isStatic = true;
								computed = this.match("[");
								if (this.match("*")) this.nextToken();
								else key = this.parseObjectPropertyKey();
							}
							if (token.type === 3 && !this.hasLineTerminator && token.value === "async") {
								var punctuator = this.lookahead.value;
								if (punctuator !== ":" && punctuator !== "(" && punctuator !== "*") {
									isAsync = true;
									token = this.lookahead;
									key = this.parseObjectPropertyKey();
									if (token.type === 3 && token.value === "constructor") this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
								}
							}
						}
						var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
						if (token.type === 3) {
							if (token.value === "get" && lookaheadPropertyKey) {
								kind = "get";
								computed = this.match("[");
								key = this.parseObjectPropertyKey();
								this.context.allowYield = false;
								value = this.parseGetterMethod();
							} else if (token.value === "set" && lookaheadPropertyKey) {
								kind = "set";
								computed = this.match("[");
								key = this.parseObjectPropertyKey();
								value = this.parseSetterMethod();
							}
						} else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
							kind = "init";
							computed = this.match("[");
							key = this.parseObjectPropertyKey();
							value = this.parseGeneratorMethod();
							method = true;
						}
						if (!kind && key && this.match("(")) {
							kind = "init";
							value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
							method = true;
						}
						if (!kind) this.throwUnexpectedToken(this.lookahead);
						if (kind === "init") kind = "method";
						if (!computed) {
							if (isStatic && this.isPropertyKey(key, "prototype")) this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
							if (!isStatic && this.isPropertyKey(key, "constructor")) {
								if (kind !== "method" || !method || value && value.generator) this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
								if (hasConstructor.value) this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
								else hasConstructor.value = true;
								kind = "constructor";
							}
						}
						return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
					};
					Parser.prototype.parseClassElementList = function() {
						var body = [];
						var hasConstructor = { value: false };
						this.expect("{");
						while (!this.match("}")) if (this.match(";")) this.nextToken();
						else body.push(this.parseClassElement(hasConstructor));
						this.expect("}");
						return body;
					};
					Parser.prototype.parseClassBody = function() {
						var node = this.createNode();
						var elementList = this.parseClassElementList();
						return this.finalize(node, new Node.ClassBody(elementList));
					};
					Parser.prototype.parseClassDeclaration = function(identifierIsOptional) {
						var node = this.createNode();
						var previousStrict = this.context.strict;
						this.context.strict = true;
						this.expectKeyword("class");
						var id = identifierIsOptional && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
						var superClass = null;
						if (this.matchKeyword("extends")) {
							this.nextToken();
							superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
						}
						var classBody = this.parseClassBody();
						this.context.strict = previousStrict;
						return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
					};
					Parser.prototype.parseClassExpression = function() {
						var node = this.createNode();
						var previousStrict = this.context.strict;
						this.context.strict = true;
						this.expectKeyword("class");
						var id = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
						var superClass = null;
						if (this.matchKeyword("extends")) {
							this.nextToken();
							superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
						}
						var classBody = this.parseClassBody();
						this.context.strict = previousStrict;
						return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
					};
					Parser.prototype.parseModule = function() {
						this.context.strict = true;
						this.context.isModule = true;
						this.scanner.isModule = true;
						var node = this.createNode();
						var body = this.parseDirectivePrologues();
						while (this.lookahead.type !== 2) body.push(this.parseStatementListItem());
						return this.finalize(node, new Node.Module(body));
					};
					Parser.prototype.parseScript = function() {
						var node = this.createNode();
						var body = this.parseDirectivePrologues();
						while (this.lookahead.type !== 2) body.push(this.parseStatementListItem());
						return this.finalize(node, new Node.Script(body));
					};
					Parser.prototype.parseModuleSpecifier = function() {
						var node = this.createNode();
						if (this.lookahead.type !== 8) this.throwError(messages_1.Messages.InvalidModuleSpecifier);
						var token = this.nextToken();
						var raw = this.getTokenRaw(token);
						return this.finalize(node, new Node.Literal(token.value, raw));
					};
					Parser.prototype.parseImportSpecifier = function() {
						var node = this.createNode();
						var imported;
						var local;
						if (this.lookahead.type === 3) {
							imported = this.parseVariableIdentifier();
							local = imported;
							if (this.matchContextualKeyword("as")) {
								this.nextToken();
								local = this.parseVariableIdentifier();
							}
						} else {
							imported = this.parseIdentifierName();
							local = imported;
							if (this.matchContextualKeyword("as")) {
								this.nextToken();
								local = this.parseVariableIdentifier();
							} else this.throwUnexpectedToken(this.nextToken());
						}
						return this.finalize(node, new Node.ImportSpecifier(local, imported));
					};
					Parser.prototype.parseNamedImports = function() {
						this.expect("{");
						var specifiers = [];
						while (!this.match("}")) {
							specifiers.push(this.parseImportSpecifier());
							if (!this.match("}")) this.expect(",");
						}
						this.expect("}");
						return specifiers;
					};
					Parser.prototype.parseImportDefaultSpecifier = function() {
						var node = this.createNode();
						var local = this.parseIdentifierName();
						return this.finalize(node, new Node.ImportDefaultSpecifier(local));
					};
					Parser.prototype.parseImportNamespaceSpecifier = function() {
						var node = this.createNode();
						this.expect("*");
						if (!this.matchContextualKeyword("as")) this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
						this.nextToken();
						var local = this.parseIdentifierName();
						return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
					};
					Parser.prototype.parseImportDeclaration = function() {
						if (this.context.inFunctionBody) this.throwError(messages_1.Messages.IllegalImportDeclaration);
						var node = this.createNode();
						this.expectKeyword("import");
						var src;
						var specifiers = [];
						if (this.lookahead.type === 8) src = this.parseModuleSpecifier();
						else {
							if (this.match("{")) specifiers = specifiers.concat(this.parseNamedImports());
							else if (this.match("*")) specifiers.push(this.parseImportNamespaceSpecifier());
							else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
								specifiers.push(this.parseImportDefaultSpecifier());
								if (this.match(",")) {
									this.nextToken();
									if (this.match("*")) specifiers.push(this.parseImportNamespaceSpecifier());
									else if (this.match("{")) specifiers = specifiers.concat(this.parseNamedImports());
									else this.throwUnexpectedToken(this.lookahead);
								}
							} else this.throwUnexpectedToken(this.nextToken());
							if (!this.matchContextualKeyword("from")) {
								var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
								this.throwError(message, this.lookahead.value);
							}
							this.nextToken();
							src = this.parseModuleSpecifier();
						}
						this.consumeSemicolon();
						return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
					};
					Parser.prototype.parseExportSpecifier = function() {
						var node = this.createNode();
						var local = this.parseIdentifierName();
						var exported = local;
						if (this.matchContextualKeyword("as")) {
							this.nextToken();
							exported = this.parseIdentifierName();
						}
						return this.finalize(node, new Node.ExportSpecifier(local, exported));
					};
					Parser.prototype.parseExportDeclaration = function() {
						if (this.context.inFunctionBody) this.throwError(messages_1.Messages.IllegalExportDeclaration);
						var node = this.createNode();
						this.expectKeyword("export");
						var exportDeclaration;
						if (this.matchKeyword("default")) {
							this.nextToken();
							if (this.matchKeyword("function")) {
								var declaration = this.parseFunctionDeclaration(true);
								exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
							} else if (this.matchKeyword("class")) {
								var declaration = this.parseClassDeclaration(true);
								exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
							} else if (this.matchContextualKeyword("async")) {
								var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
								exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
							} else {
								if (this.matchContextualKeyword("from")) this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
								var declaration = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
								this.consumeSemicolon();
								exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
							}
						} else if (this.match("*")) {
							this.nextToken();
							if (!this.matchContextualKeyword("from")) {
								var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
								this.throwError(message, this.lookahead.value);
							}
							this.nextToken();
							var src = this.parseModuleSpecifier();
							this.consumeSemicolon();
							exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
						} else if (this.lookahead.type === 4) {
							var declaration = void 0;
							switch (this.lookahead.value) {
								case "let":
								case "const":
									declaration = this.parseLexicalDeclaration({ inFor: false });
									break;
								case "var":
								case "class":
								case "function":
									declaration = this.parseStatementListItem();
									break;
								default: this.throwUnexpectedToken(this.lookahead);
							}
							exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
						} else if (this.matchAsyncFunction()) {
							var declaration = this.parseFunctionDeclaration();
							exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
						} else {
							var specifiers = [];
							var source = null;
							var isExportFromIdentifier = false;
							this.expect("{");
							while (!this.match("}")) {
								isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword("default");
								specifiers.push(this.parseExportSpecifier());
								if (!this.match("}")) this.expect(",");
							}
							this.expect("}");
							if (this.matchContextualKeyword("from")) {
								this.nextToken();
								source = this.parseModuleSpecifier();
								this.consumeSemicolon();
							} else if (isExportFromIdentifier) {
								var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
								this.throwError(message, this.lookahead.value);
							} else this.consumeSemicolon();
							exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
						}
						return exportDeclaration;
					};
					return Parser;
				}();
			},
			function(module$11, exports$10) {
				"use strict";
				Object.defineProperty(exports$10, "__esModule", { value: true });
				function assert(condition, message) {
					/* istanbul ignore if */
					if (!condition) throw new Error("ASSERT: " + message);
				}
				exports$10.assert = assert;
			},
			function(module$12, exports$11) {
				"use strict";
				Object.defineProperty(exports$11, "__esModule", { value: true });
				exports$11.ErrorHandler = function() {
					function ErrorHandler() {
						this.errors = [];
						this.tolerant = false;
					}
					ErrorHandler.prototype.recordError = function(error) {
						this.errors.push(error);
					};
					ErrorHandler.prototype.tolerate = function(error) {
						if (this.tolerant) this.recordError(error);
						else throw error;
					};
					ErrorHandler.prototype.constructError = function(msg, column) {
						var error = new Error(msg);
						try {
							throw error;
						} catch (base) {
							/* istanbul ignore else */
							if (Object.create && Object.defineProperty) {
								error = Object.create(base);
								Object.defineProperty(error, "column", { value: column });
							}
						}
						/* istanbul ignore next */
						return error;
					};
					ErrorHandler.prototype.createError = function(index, line, col, description) {
						var msg = "Line " + line + ": " + description;
						var error = this.constructError(msg, col);
						error.index = index;
						error.lineNumber = line;
						error.description = description;
						return error;
					};
					ErrorHandler.prototype.throwError = function(index, line, col, description) {
						throw this.createError(index, line, col, description);
					};
					ErrorHandler.prototype.tolerateError = function(index, line, col, description) {
						var error = this.createError(index, line, col, description);
						if (this.tolerant) this.recordError(error);
						else throw error;
					};
					return ErrorHandler;
				}();
			},
			function(module$13, exports$12) {
				"use strict";
				Object.defineProperty(exports$12, "__esModule", { value: true });
				exports$12.Messages = {
					BadGetterArity: "Getter must not have any formal parameters",
					BadSetterArity: "Setter must have exactly one formal parameter",
					BadSetterRestParameter: "Setter function argument must not be a rest parameter",
					ConstructorIsAsync: "Class constructor may not be an async method",
					ConstructorSpecialMethod: "Class constructor may not be an accessor",
					DeclarationMissingInitializer: "Missing initializer in %0 declaration",
					DefaultRestParameter: "Unexpected token =",
					DuplicateBinding: "Duplicate binding %0",
					DuplicateConstructor: "A class may only have one constructor",
					DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
					ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
					GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
					IllegalBreak: "Illegal break statement",
					IllegalContinue: "Illegal continue statement",
					IllegalExportDeclaration: "Unexpected token",
					IllegalImportDeclaration: "Unexpected token",
					IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
					IllegalReturn: "Illegal return statement",
					InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
					InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
					InvalidLHSInAssignment: "Invalid left-hand side in assignment",
					InvalidLHSInForIn: "Invalid left-hand side in for-in",
					InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
					InvalidModuleSpecifier: "Unexpected token",
					InvalidRegExp: "Invalid regular expression",
					LetInLexicalBinding: "let is disallowed as a lexically bound name",
					MissingFromClause: "Unexpected token",
					MultipleDefaultsInSwitch: "More than one default clause in switch statement",
					NewlineAfterThrow: "Illegal newline after throw",
					NoAsAfterImportNamespace: "Unexpected token",
					NoCatchOrFinally: "Missing catch or finally after try",
					ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
					Redeclaration: "%0 '%1' has already been declared",
					StaticPrototype: "Classes may not have static property named prototype",
					StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
					StrictDelete: "Delete of an unqualified identifier in strict mode.",
					StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
					StrictFunctionName: "Function name may not be eval or arguments in strict mode",
					StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
					StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
					StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
					StrictModeWith: "Strict mode code may not include a with statement",
					StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
					StrictParamDupe: "Strict mode function may not have duplicate parameter names",
					StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
					StrictReservedWord: "Use of future reserved word in strict mode",
					StrictVarName: "Variable name may not be eval or arguments in strict mode",
					TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
					UnexpectedEOS: "Unexpected end of input",
					UnexpectedIdentifier: "Unexpected identifier",
					UnexpectedNumber: "Unexpected number",
					UnexpectedReserved: "Unexpected reserved word",
					UnexpectedString: "Unexpected string",
					UnexpectedTemplate: "Unexpected quasi %0",
					UnexpectedToken: "Unexpected token %0",
					UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
					UnknownLabel: "Undefined label '%0'",
					UnterminatedRegExp: "Invalid regular expression: missing /"
				};
			},
			function(module$14, exports$13, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$13, "__esModule", { value: true });
				var assert_1 = __webpack_require__(9);
				var character_1 = __webpack_require__(4);
				var messages_1 = __webpack_require__(11);
				function hexValue(ch) {
					return "0123456789abcdef".indexOf(ch.toLowerCase());
				}
				function octalValue(ch) {
					return "01234567".indexOf(ch);
				}
				exports$13.Scanner = function() {
					function Scanner(code, handler) {
						this.source = code;
						this.errorHandler = handler;
						this.trackComment = false;
						this.isModule = false;
						this.length = code.length;
						this.index = 0;
						this.lineNumber = code.length > 0 ? 1 : 0;
						this.lineStart = 0;
						this.curlyStack = [];
					}
					Scanner.prototype.saveState = function() {
						return {
							index: this.index,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart
						};
					};
					Scanner.prototype.restoreState = function(state) {
						this.index = state.index;
						this.lineNumber = state.lineNumber;
						this.lineStart = state.lineStart;
					};
					Scanner.prototype.eof = function() {
						return this.index >= this.length;
					};
					Scanner.prototype.throwUnexpectedToken = function(message) {
						if (message === void 0) message = messages_1.Messages.UnexpectedTokenIllegal;
						return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
					};
					Scanner.prototype.tolerateUnexpectedToken = function(message) {
						if (message === void 0) message = messages_1.Messages.UnexpectedTokenIllegal;
						this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
					};
					Scanner.prototype.skipSingleLineComment = function(offset) {
						var comments = [];
						var start, loc;
						if (this.trackComment) {
							comments = [];
							start = this.index - offset;
							loc = {
								start: {
									line: this.lineNumber,
									column: this.index - this.lineStart - offset
								},
								end: {}
							};
						}
						while (!this.eof()) {
							var ch = this.source.charCodeAt(this.index);
							++this.index;
							if (character_1.Character.isLineTerminator(ch)) {
								if (this.trackComment) {
									loc.end = {
										line: this.lineNumber,
										column: this.index - this.lineStart - 1
									};
									var entry = {
										multiLine: false,
										slice: [start + offset, this.index - 1],
										range: [start, this.index - 1],
										loc
									};
									comments.push(entry);
								}
								if (ch === 13 && this.source.charCodeAt(this.index) === 10) ++this.index;
								++this.lineNumber;
								this.lineStart = this.index;
								return comments;
							}
						}
						if (this.trackComment) {
							loc.end = {
								line: this.lineNumber,
								column: this.index - this.lineStart
							};
							var entry = {
								multiLine: false,
								slice: [start + offset, this.index],
								range: [start, this.index],
								loc
							};
							comments.push(entry);
						}
						return comments;
					};
					Scanner.prototype.skipMultiLineComment = function() {
						var comments = [];
						var start, loc;
						if (this.trackComment) {
							comments = [];
							start = this.index - 2;
							loc = {
								start: {
									line: this.lineNumber,
									column: this.index - this.lineStart - 2
								},
								end: {}
							};
						}
						while (!this.eof()) {
							var ch = this.source.charCodeAt(this.index);
							if (character_1.Character.isLineTerminator(ch)) {
								if (ch === 13 && this.source.charCodeAt(this.index + 1) === 10) ++this.index;
								++this.lineNumber;
								++this.index;
								this.lineStart = this.index;
							} else if (ch === 42) {
								if (this.source.charCodeAt(this.index + 1) === 47) {
									this.index += 2;
									if (this.trackComment) {
										loc.end = {
											line: this.lineNumber,
											column: this.index - this.lineStart
										};
										var entry = {
											multiLine: true,
											slice: [start + 2, this.index - 2],
											range: [start, this.index],
											loc
										};
										comments.push(entry);
									}
									return comments;
								}
								++this.index;
							} else ++this.index;
						}
						if (this.trackComment) {
							loc.end = {
								line: this.lineNumber,
								column: this.index - this.lineStart
							};
							var entry = {
								multiLine: true,
								slice: [start + 2, this.index],
								range: [start, this.index],
								loc
							};
							comments.push(entry);
						}
						this.tolerateUnexpectedToken();
						return comments;
					};
					Scanner.prototype.scanComments = function() {
						var comments;
						if (this.trackComment) comments = [];
						var start = this.index === 0;
						while (!this.eof()) {
							var ch = this.source.charCodeAt(this.index);
							if (character_1.Character.isWhiteSpace(ch)) ++this.index;
							else if (character_1.Character.isLineTerminator(ch)) {
								++this.index;
								if (ch === 13 && this.source.charCodeAt(this.index) === 10) ++this.index;
								++this.lineNumber;
								this.lineStart = this.index;
								start = true;
							} else if (ch === 47) {
								ch = this.source.charCodeAt(this.index + 1);
								if (ch === 47) {
									this.index += 2;
									var comment = this.skipSingleLineComment(2);
									if (this.trackComment) comments = comments.concat(comment);
									start = true;
								} else if (ch === 42) {
									this.index += 2;
									var comment = this.skipMultiLineComment();
									if (this.trackComment) comments = comments.concat(comment);
								} else break;
							} else if (start && ch === 45) if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
								this.index += 3;
								var comment = this.skipSingleLineComment(3);
								if (this.trackComment) comments = comments.concat(comment);
							} else break;
							else if (ch === 60 && !this.isModule) if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
								this.index += 4;
								var comment = this.skipSingleLineComment(4);
								if (this.trackComment) comments = comments.concat(comment);
							} else break;
							else break;
						}
						return comments;
					};
					Scanner.prototype.isFutureReservedWord = function(id) {
						switch (id) {
							case "enum":
							case "export":
							case "import":
							case "super": return true;
							default: return false;
						}
					};
					Scanner.prototype.isStrictModeReservedWord = function(id) {
						switch (id) {
							case "implements":
							case "interface":
							case "package":
							case "private":
							case "protected":
							case "public":
							case "static":
							case "yield":
							case "let": return true;
							default: return false;
						}
					};
					Scanner.prototype.isRestrictedWord = function(id) {
						return id === "eval" || id === "arguments";
					};
					Scanner.prototype.isKeyword = function(id) {
						switch (id.length) {
							case 2: return id === "if" || id === "in" || id === "do";
							case 3: return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
							case 4: return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
							case 5: return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
							case 6: return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
							case 7: return id === "default" || id === "finally" || id === "extends";
							case 8: return id === "function" || id === "continue" || id === "debugger";
							case 10: return id === "instanceof";
							default: return false;
						}
					};
					Scanner.prototype.codePointAt = function(i) {
						var cp = this.source.charCodeAt(i);
						if (cp >= 55296 && cp <= 56319) {
							var second = this.source.charCodeAt(i + 1);
							if (second >= 56320 && second <= 57343) cp = (cp - 55296) * 1024 + second - 56320 + 65536;
						}
						return cp;
					};
					Scanner.prototype.scanHexEscape = function(prefix) {
						var len = prefix === "u" ? 4 : 2;
						var code = 0;
						for (var i = 0; i < len; ++i) if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) code = code * 16 + hexValue(this.source[this.index++]);
						else return null;
						return String.fromCharCode(code);
					};
					Scanner.prototype.scanUnicodeCodePointEscape = function() {
						var ch = this.source[this.index];
						var code = 0;
						if (ch === "}") this.throwUnexpectedToken();
						while (!this.eof()) {
							ch = this.source[this.index++];
							if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) break;
							code = code * 16 + hexValue(ch);
						}
						if (code > 1114111 || ch !== "}") this.throwUnexpectedToken();
						return character_1.Character.fromCodePoint(code);
					};
					Scanner.prototype.getIdentifier = function() {
						var start = this.index++;
						while (!this.eof()) {
							var ch = this.source.charCodeAt(this.index);
							if (ch === 92) {
								this.index = start;
								return this.getComplexIdentifier();
							} else if (ch >= 55296 && ch < 57343) {
								this.index = start;
								return this.getComplexIdentifier();
							}
							if (character_1.Character.isIdentifierPart(ch)) ++this.index;
							else break;
						}
						return this.source.slice(start, this.index);
					};
					Scanner.prototype.getComplexIdentifier = function() {
						var cp = this.codePointAt(this.index);
						var id = character_1.Character.fromCodePoint(cp);
						this.index += id.length;
						var ch;
						if (cp === 92) {
							if (this.source.charCodeAt(this.index) !== 117) this.throwUnexpectedToken();
							++this.index;
							if (this.source[this.index] === "{") {
								++this.index;
								ch = this.scanUnicodeCodePointEscape();
							} else {
								ch = this.scanHexEscape("u");
								if (ch === null || ch === "\\" || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) this.throwUnexpectedToken();
							}
							id = ch;
						}
						while (!this.eof()) {
							cp = this.codePointAt(this.index);
							if (!character_1.Character.isIdentifierPart(cp)) break;
							ch = character_1.Character.fromCodePoint(cp);
							id += ch;
							this.index += ch.length;
							if (cp === 92) {
								id = id.substr(0, id.length - 1);
								if (this.source.charCodeAt(this.index) !== 117) this.throwUnexpectedToken();
								++this.index;
								if (this.source[this.index] === "{") {
									++this.index;
									ch = this.scanUnicodeCodePointEscape();
								} else {
									ch = this.scanHexEscape("u");
									if (ch === null || ch === "\\" || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) this.throwUnexpectedToken();
								}
								id += ch;
							}
						}
						return id;
					};
					Scanner.prototype.octalToDecimal = function(ch) {
						var octal = ch !== "0";
						var code = octalValue(ch);
						if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
							octal = true;
							code = code * 8 + octalValue(this.source[this.index++]);
							if ("0123".indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) code = code * 8 + octalValue(this.source[this.index++]);
						}
						return {
							code,
							octal
						};
					};
					Scanner.prototype.scanIdentifier = function() {
						var type;
						var start = this.index;
						var id = this.source.charCodeAt(start) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
						if (id.length === 1) type = 3;
						else if (this.isKeyword(id)) type = 4;
						else if (id === "null") type = 5;
						else if (id === "true" || id === "false") type = 1;
						else type = 3;
						if (type !== 3 && start + id.length !== this.index) {
							var restore = this.index;
							this.index = start;
							this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
							this.index = restore;
						}
						return {
							type,
							value: id,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanPunctuator = function() {
						var start = this.index;
						var str = this.source[this.index];
						switch (str) {
							case "(":
							case "{":
								if (str === "{") this.curlyStack.push("{");
								++this.index;
								break;
							case ".":
								++this.index;
								if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
									this.index += 2;
									str = "...";
								}
								break;
							case "}":
								++this.index;
								this.curlyStack.pop();
								break;
							case ")":
							case ";":
							case ",":
							case "[":
							case "]":
							case ":":
							case "?":
							case "~":
								++this.index;
								break;
							default:
								str = this.source.substr(this.index, 4);
								if (str === ">>>=") this.index += 4;
								else {
									str = str.substr(0, 3);
									if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=" || str === "**=") this.index += 3;
									else {
										str = str.substr(0, 2);
										if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>" || str === "**") this.index += 2;
										else {
											str = this.source[this.index];
											if ("<>=!+-*%&|^/".indexOf(str) >= 0) ++this.index;
										}
									}
								}
						}
						if (this.index === start) this.throwUnexpectedToken();
						return {
							type: 7,
							value: str,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanHexLiteral = function(start) {
						var num = "";
						while (!this.eof()) {
							if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) break;
							num += this.source[this.index++];
						}
						if (num.length === 0) this.throwUnexpectedToken();
						if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) this.throwUnexpectedToken();
						return {
							type: 6,
							value: parseInt("0x" + num, 16),
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanBinaryLiteral = function(start) {
						var num = "";
						var ch;
						while (!this.eof()) {
							ch = this.source[this.index];
							if (ch !== "0" && ch !== "1") break;
							num += this.source[this.index++];
						}
						if (num.length === 0) this.throwUnexpectedToken();
						if (!this.eof()) {
							ch = this.source.charCodeAt(this.index);
							/* istanbul ignore else */
							if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) this.throwUnexpectedToken();
						}
						return {
							type: 6,
							value: parseInt(num, 2),
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanOctalLiteral = function(prefix, start) {
						var num = "";
						var octal = false;
						if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
							octal = true;
							num = "0" + this.source[this.index++];
						} else ++this.index;
						while (!this.eof()) {
							if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) break;
							num += this.source[this.index++];
						}
						if (!octal && num.length === 0) this.throwUnexpectedToken();
						if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) this.throwUnexpectedToken();
						return {
							type: 6,
							value: parseInt(num, 8),
							octal,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.isImplicitOctalLiteral = function() {
						for (var i = this.index + 1; i < this.length; ++i) {
							var ch = this.source[i];
							if (ch === "8" || ch === "9") return false;
							if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) return true;
						}
						return true;
					};
					Scanner.prototype.scanNumericLiteral = function() {
						var start = this.index;
						var ch = this.source[start];
						assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
						var num = "";
						if (ch !== ".") {
							num = this.source[this.index++];
							ch = this.source[this.index];
							if (num === "0") {
								if (ch === "x" || ch === "X") {
									++this.index;
									return this.scanHexLiteral(start);
								}
								if (ch === "b" || ch === "B") {
									++this.index;
									return this.scanBinaryLiteral(start);
								}
								if (ch === "o" || ch === "O") return this.scanOctalLiteral(ch, start);
								if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
									if (this.isImplicitOctalLiteral()) return this.scanOctalLiteral(ch, start);
								}
							}
							while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) num += this.source[this.index++];
							ch = this.source[this.index];
						}
						if (ch === ".") {
							num += this.source[this.index++];
							while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) num += this.source[this.index++];
							ch = this.source[this.index];
						}
						if (ch === "e" || ch === "E") {
							num += this.source[this.index++];
							ch = this.source[this.index];
							if (ch === "+" || ch === "-") num += this.source[this.index++];
							if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) num += this.source[this.index++];
							else this.throwUnexpectedToken();
						}
						if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) this.throwUnexpectedToken();
						return {
							type: 6,
							value: parseFloat(num),
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanStringLiteral = function() {
						var start = this.index;
						var quote = this.source[start];
						assert_1.assert(quote === "'" || quote === "\"", "String literal must starts with a quote");
						++this.index;
						var octal = false;
						var str = "";
						while (!this.eof()) {
							var ch = this.source[this.index++];
							if (ch === quote) {
								quote = "";
								break;
							} else if (ch === "\\") {
								ch = this.source[this.index++];
								if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) switch (ch) {
									case "u":
										if (this.source[this.index] === "{") {
											++this.index;
											str += this.scanUnicodeCodePointEscape();
										} else {
											var unescaped_1 = this.scanHexEscape(ch);
											if (unescaped_1 === null) this.throwUnexpectedToken();
											str += unescaped_1;
										}
										break;
									case "x":
										var unescaped = this.scanHexEscape(ch);
										if (unescaped === null) this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
										str += unescaped;
										break;
									case "n":
										str += "\n";
										break;
									case "r":
										str += "\r";
										break;
									case "t":
										str += "	";
										break;
									case "b":
										str += "\b";
										break;
									case "f":
										str += "\f";
										break;
									case "v":
										str += "\v";
										break;
									case "8":
									case "9":
										str += ch;
										this.tolerateUnexpectedToken();
										break;
									default:
										if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
											var octToDec = this.octalToDecimal(ch);
											octal = octToDec.octal || octal;
											str += String.fromCharCode(octToDec.code);
										} else str += ch;
										break;
								}
								else {
									++this.lineNumber;
									if (ch === "\r" && this.source[this.index] === "\n") ++this.index;
									this.lineStart = this.index;
								}
							} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) break;
							else str += ch;
						}
						if (quote !== "") {
							this.index = start;
							this.throwUnexpectedToken();
						}
						return {
							type: 8,
							value: str,
							octal,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.scanTemplate = function() {
						var cooked = "";
						var terminated = false;
						var start = this.index;
						var head = this.source[start] === "`";
						var tail = false;
						var rawOffset = 2;
						++this.index;
						while (!this.eof()) {
							var ch = this.source[this.index++];
							if (ch === "`") {
								rawOffset = 1;
								tail = true;
								terminated = true;
								break;
							} else if (ch === "$") {
								if (this.source[this.index] === "{") {
									this.curlyStack.push("${");
									++this.index;
									terminated = true;
									break;
								}
								cooked += ch;
							} else if (ch === "\\") {
								ch = this.source[this.index++];
								if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) switch (ch) {
									case "n":
										cooked += "\n";
										break;
									case "r":
										cooked += "\r";
										break;
									case "t":
										cooked += "	";
										break;
									case "u":
										if (this.source[this.index] === "{") {
											++this.index;
											cooked += this.scanUnicodeCodePointEscape();
										} else {
											var restore = this.index;
											var unescaped_2 = this.scanHexEscape(ch);
											if (unescaped_2 !== null) cooked += unescaped_2;
											else {
												this.index = restore;
												cooked += ch;
											}
										}
										break;
									case "x":
										var unescaped = this.scanHexEscape(ch);
										if (unescaped === null) this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
										cooked += unescaped;
										break;
									case "b":
										cooked += "\b";
										break;
									case "f":
										cooked += "\f";
										break;
									case "v":
										cooked += "\v";
										break;
									default:
										if (ch === "0") {
											if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
											cooked += "\0";
										} else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
										else cooked += ch;
										break;
								}
								else {
									++this.lineNumber;
									if (ch === "\r" && this.source[this.index] === "\n") ++this.index;
									this.lineStart = this.index;
								}
							} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
								++this.lineNumber;
								if (ch === "\r" && this.source[this.index] === "\n") ++this.index;
								this.lineStart = this.index;
								cooked += "\n";
							} else cooked += ch;
						}
						if (!terminated) this.throwUnexpectedToken();
						if (!head) this.curlyStack.pop();
						return {
							type: 10,
							value: this.source.slice(start + 1, this.index - rawOffset),
							cooked,
							head,
							tail,
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.testRegExp = function(pattern, flags) {
						var astralSubstitute = "￿";
						var tmp = pattern;
						var self = this;
						if (flags.indexOf("u") >= 0) tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
							var codePoint = parseInt($1 || $2, 16);
							if (codePoint > 1114111) self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
							if (codePoint <= 65535) return String.fromCharCode(codePoint);
							return astralSubstitute;
						}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
						try {
							RegExp(tmp);
						} catch (e) {
							this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
						}
						try {
							return new RegExp(pattern, flags);
						} catch (exception) {
							/* istanbul ignore next */
							return null;
						}
					};
					Scanner.prototype.scanRegExpBody = function() {
						var ch = this.source[this.index];
						assert_1.assert(ch === "/", "Regular expression literal must start with a slash");
						var str = this.source[this.index++];
						var classMarker = false;
						var terminated = false;
						while (!this.eof()) {
							ch = this.source[this.index++];
							str += ch;
							if (ch === "\\") {
								ch = this.source[this.index++];
								if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
								str += ch;
							} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
							else if (classMarker) {
								if (ch === "]") classMarker = false;
							} else if (ch === "/") {
								terminated = true;
								break;
							} else if (ch === "[") classMarker = true;
						}
						if (!terminated) this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
						return str.substr(1, str.length - 2);
					};
					Scanner.prototype.scanRegExpFlags = function() {
						var str = "";
						var flags = "";
						while (!this.eof()) {
							var ch = this.source[this.index];
							if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) break;
							++this.index;
							if (ch === "\\" && !this.eof()) {
								ch = this.source[this.index];
								if (ch === "u") {
									++this.index;
									var restore = this.index;
									var char = this.scanHexEscape("u");
									if (char !== null) {
										flags += char;
										for (str += "\\u"; restore < this.index; ++restore) str += this.source[restore];
									} else {
										this.index = restore;
										flags += "u";
										str += "\\u";
									}
									this.tolerateUnexpectedToken();
								} else {
									str += "\\";
									this.tolerateUnexpectedToken();
								}
							} else {
								flags += ch;
								str += ch;
							}
						}
						return flags;
					};
					Scanner.prototype.scanRegExp = function() {
						var start = this.index;
						var pattern = this.scanRegExpBody();
						var flags = this.scanRegExpFlags();
						return {
							type: 9,
							value: "",
							pattern,
							flags,
							regex: this.testRegExp(pattern, flags),
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start,
							end: this.index
						};
					};
					Scanner.prototype.lex = function() {
						if (this.eof()) return {
							type: 2,
							value: "",
							lineNumber: this.lineNumber,
							lineStart: this.lineStart,
							start: this.index,
							end: this.index
						};
						var cp = this.source.charCodeAt(this.index);
						if (character_1.Character.isIdentifierStart(cp)) return this.scanIdentifier();
						if (cp === 40 || cp === 41 || cp === 59) return this.scanPunctuator();
						if (cp === 39 || cp === 34) return this.scanStringLiteral();
						if (cp === 46) {
							if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) return this.scanNumericLiteral();
							return this.scanPunctuator();
						}
						if (character_1.Character.isDecimalDigit(cp)) return this.scanNumericLiteral();
						if (cp === 96 || cp === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") return this.scanTemplate();
						if (cp >= 55296 && cp < 57343) {
							if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) return this.scanIdentifier();
						}
						return this.scanPunctuator();
					};
					return Scanner;
				}();
			},
			function(module$15, exports$14) {
				"use strict";
				Object.defineProperty(exports$14, "__esModule", { value: true });
				exports$14.TokenName = {};
				exports$14.TokenName[1] = "Boolean";
				exports$14.TokenName[2] = "<end>";
				exports$14.TokenName[3] = "Identifier";
				exports$14.TokenName[4] = "Keyword";
				exports$14.TokenName[5] = "Null";
				exports$14.TokenName[6] = "Numeric";
				exports$14.TokenName[7] = "Punctuator";
				exports$14.TokenName[8] = "String";
				exports$14.TokenName[9] = "RegularExpression";
				exports$14.TokenName[10] = "Template";
			},
			function(module$16, exports$15) {
				"use strict";
				Object.defineProperty(exports$15, "__esModule", { value: true });
				exports$15.XHTMLEntities = {
					quot: "\"",
					amp: "&",
					apos: "'",
					gt: ">",
					nbsp: "\xA0",
					iexcl: "¡",
					cent: "¢",
					pound: "£",
					curren: "¤",
					yen: "¥",
					brvbar: "¦",
					sect: "§",
					uml: "¨",
					copy: "©",
					ordf: "ª",
					laquo: "«",
					not: "¬",
					shy: "­",
					reg: "®",
					macr: "¯",
					deg: "°",
					plusmn: "±",
					sup2: "²",
					sup3: "³",
					acute: "´",
					micro: "µ",
					para: "¶",
					middot: "·",
					cedil: "¸",
					sup1: "¹",
					ordm: "º",
					raquo: "»",
					frac14: "¼",
					frac12: "½",
					frac34: "¾",
					iquest: "¿",
					Agrave: "À",
					Aacute: "Á",
					Acirc: "Â",
					Atilde: "Ã",
					Auml: "Ä",
					Aring: "Å",
					AElig: "Æ",
					Ccedil: "Ç",
					Egrave: "È",
					Eacute: "É",
					Ecirc: "Ê",
					Euml: "Ë",
					Igrave: "Ì",
					Iacute: "Í",
					Icirc: "Î",
					Iuml: "Ï",
					ETH: "Ð",
					Ntilde: "Ñ",
					Ograve: "Ò",
					Oacute: "Ó",
					Ocirc: "Ô",
					Otilde: "Õ",
					Ouml: "Ö",
					times: "×",
					Oslash: "Ø",
					Ugrave: "Ù",
					Uacute: "Ú",
					Ucirc: "Û",
					Uuml: "Ü",
					Yacute: "Ý",
					THORN: "Þ",
					szlig: "ß",
					agrave: "à",
					aacute: "á",
					acirc: "â",
					atilde: "ã",
					auml: "ä",
					aring: "å",
					aelig: "æ",
					ccedil: "ç",
					egrave: "è",
					eacute: "é",
					ecirc: "ê",
					euml: "ë",
					igrave: "ì",
					iacute: "í",
					icirc: "î",
					iuml: "ï",
					eth: "ð",
					ntilde: "ñ",
					ograve: "ò",
					oacute: "ó",
					ocirc: "ô",
					otilde: "õ",
					ouml: "ö",
					divide: "÷",
					oslash: "ø",
					ugrave: "ù",
					uacute: "ú",
					ucirc: "û",
					uuml: "ü",
					yacute: "ý",
					thorn: "þ",
					yuml: "ÿ",
					OElig: "Œ",
					oelig: "œ",
					Scaron: "Š",
					scaron: "š",
					Yuml: "Ÿ",
					fnof: "ƒ",
					circ: "ˆ",
					tilde: "˜",
					Alpha: "Α",
					Beta: "Β",
					Gamma: "Γ",
					Delta: "Δ",
					Epsilon: "Ε",
					Zeta: "Ζ",
					Eta: "Η",
					Theta: "Θ",
					Iota: "Ι",
					Kappa: "Κ",
					Lambda: "Λ",
					Mu: "Μ",
					Nu: "Ν",
					Xi: "Ξ",
					Omicron: "Ο",
					Pi: "Π",
					Rho: "Ρ",
					Sigma: "Σ",
					Tau: "Τ",
					Upsilon: "Υ",
					Phi: "Φ",
					Chi: "Χ",
					Psi: "Ψ",
					Omega: "Ω",
					alpha: "α",
					beta: "β",
					gamma: "γ",
					delta: "δ",
					epsilon: "ε",
					zeta: "ζ",
					eta: "η",
					theta: "θ",
					iota: "ι",
					kappa: "κ",
					lambda: "λ",
					mu: "μ",
					nu: "ν",
					xi: "ξ",
					omicron: "ο",
					pi: "π",
					rho: "ρ",
					sigmaf: "ς",
					sigma: "σ",
					tau: "τ",
					upsilon: "υ",
					phi: "φ",
					chi: "χ",
					psi: "ψ",
					omega: "ω",
					thetasym: "ϑ",
					upsih: "ϒ",
					piv: "ϖ",
					ensp: " ",
					emsp: " ",
					thinsp: " ",
					zwnj: "‌",
					zwj: "‍",
					lrm: "‎",
					rlm: "‏",
					ndash: "–",
					mdash: "—",
					lsquo: "‘",
					rsquo: "’",
					sbquo: "‚",
					ldquo: "“",
					rdquo: "”",
					bdquo: "„",
					dagger: "†",
					Dagger: "‡",
					bull: "•",
					hellip: "…",
					permil: "‰",
					prime: "′",
					Prime: "″",
					lsaquo: "‹",
					rsaquo: "›",
					oline: "‾",
					frasl: "⁄",
					euro: "€",
					image: "ℑ",
					weierp: "℘",
					real: "ℜ",
					trade: "™",
					alefsym: "ℵ",
					larr: "←",
					uarr: "↑",
					rarr: "→",
					darr: "↓",
					harr: "↔",
					crarr: "↵",
					lArr: "⇐",
					uArr: "⇑",
					rArr: "⇒",
					dArr: "⇓",
					hArr: "⇔",
					forall: "∀",
					part: "∂",
					exist: "∃",
					empty: "∅",
					nabla: "∇",
					isin: "∈",
					notin: "∉",
					ni: "∋",
					prod: "∏",
					sum: "∑",
					minus: "−",
					lowast: "∗",
					radic: "√",
					prop: "∝",
					infin: "∞",
					ang: "∠",
					and: "∧",
					or: "∨",
					cap: "∩",
					cup: "∪",
					int: "∫",
					there4: "∴",
					sim: "∼",
					cong: "≅",
					asymp: "≈",
					ne: "≠",
					equiv: "≡",
					le: "≤",
					ge: "≥",
					sub: "⊂",
					sup: "⊃",
					nsub: "⊄",
					sube: "⊆",
					supe: "⊇",
					oplus: "⊕",
					otimes: "⊗",
					perp: "⊥",
					sdot: "⋅",
					lceil: "⌈",
					rceil: "⌉",
					lfloor: "⌊",
					rfloor: "⌋",
					loz: "◊",
					spades: "♠",
					clubs: "♣",
					hearts: "♥",
					diams: "♦",
					lang: "⟨",
					rang: "⟩"
				};
			},
			function(module$17, exports$16, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports$16, "__esModule", { value: true });
				var error_handler_1 = __webpack_require__(10);
				var scanner_1 = __webpack_require__(12);
				var token_1 = __webpack_require__(13);
				var Reader = function() {
					function Reader() {
						this.values = [];
						this.curly = this.paren = -1;
					}
					Reader.prototype.beforeFunctionExpression = function(t) {
						return [
							"(",
							"{",
							"[",
							"in",
							"typeof",
							"instanceof",
							"new",
							"return",
							"case",
							"delete",
							"throw",
							"void",
							"=",
							"+=",
							"-=",
							"*=",
							"**=",
							"/=",
							"%=",
							"<<=",
							">>=",
							">>>=",
							"&=",
							"|=",
							"^=",
							",",
							"+",
							"-",
							"*",
							"**",
							"/",
							"%",
							"++",
							"--",
							"<<",
							">>",
							">>>",
							"&",
							"|",
							"^",
							"!",
							"~",
							"&&",
							"||",
							"?",
							":",
							"===",
							"==",
							">=",
							"<=",
							"<",
							">",
							"!=",
							"!=="
						].indexOf(t) >= 0;
					};
					Reader.prototype.isRegexStart = function() {
						var previous = this.values[this.values.length - 1];
						var regex = previous !== null;
						switch (previous) {
							case "this":
							case "]":
								regex = false;
								break;
							case ")":
								var keyword = this.values[this.paren - 1];
								regex = keyword === "if" || keyword === "while" || keyword === "for" || keyword === "with";
								break;
							case "}":
								regex = false;
								if (this.values[this.curly - 3] === "function") {
									var check = this.values[this.curly - 4];
									regex = check ? !this.beforeFunctionExpression(check) : false;
								} else if (this.values[this.curly - 4] === "function") {
									var check = this.values[this.curly - 5];
									regex = check ? !this.beforeFunctionExpression(check) : true;
								}
								break;
							default: break;
						}
						return regex;
					};
					Reader.prototype.push = function(token) {
						if (token.type === 7 || token.type === 4) {
							if (token.value === "{") this.curly = this.values.length;
							else if (token.value === "(") this.paren = this.values.length;
							this.values.push(token.value);
						} else this.values.push(null);
					};
					return Reader;
				}();
				exports$16.Tokenizer = function() {
					function Tokenizer(code, config) {
						this.errorHandler = new error_handler_1.ErrorHandler();
						this.errorHandler.tolerant = config ? typeof config.tolerant === "boolean" && config.tolerant : false;
						this.scanner = new scanner_1.Scanner(code, this.errorHandler);
						this.scanner.trackComment = config ? typeof config.comment === "boolean" && config.comment : false;
						this.trackRange = config ? typeof config.range === "boolean" && config.range : false;
						this.trackLoc = config ? typeof config.loc === "boolean" && config.loc : false;
						this.buffer = [];
						this.reader = new Reader();
					}
					Tokenizer.prototype.errors = function() {
						return this.errorHandler.errors;
					};
					Tokenizer.prototype.getNextToken = function() {
						if (this.buffer.length === 0) {
							var comments = this.scanner.scanComments();
							if (this.scanner.trackComment) for (var i = 0; i < comments.length; ++i) {
								var e = comments[i];
								var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
								var comment = {
									type: e.multiLine ? "BlockComment" : "LineComment",
									value
								};
								if (this.trackRange) comment.range = e.range;
								if (this.trackLoc) comment.loc = e.loc;
								this.buffer.push(comment);
							}
							if (!this.scanner.eof()) {
								var loc = void 0;
								if (this.trackLoc) loc = {
									start: {
										line: this.scanner.lineNumber,
										column: this.scanner.index - this.scanner.lineStart
									},
									end: {}
								};
								var token = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.lex();
								this.reader.push(token);
								var entry = {
									type: token_1.TokenName[token.type],
									value: this.scanner.source.slice(token.start, token.end)
								};
								if (this.trackRange) entry.range = [token.start, token.end];
								if (this.trackLoc) {
									loc.end = {
										line: this.scanner.lineNumber,
										column: this.scanner.index - this.scanner.lineStart
									};
									entry.loc = loc;
								}
								if (token.type === 9) entry.regex = {
									pattern: token.pattern,
									flags: token.flags
								};
								this.buffer.push(entry);
							}
						}
						return this.buffer.shift();
					};
					return Tokenizer;
				}();
			}
		]);
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var esprima;
	try {
		esprima = require_esprima();
	} catch (_) {
		if (typeof window !== "undefined") esprima = window.esprima;
	}
	var Type = require_type();
	function resolveJavascriptFunction(data) {
		if (data === null) return false;
		try {
			var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
			if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	function constructJavascriptFunction(data) {
		var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
		if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") throw new Error("Failed to resolve function");
		ast.body[0].expression.params.forEach(function(param) {
			params.push(param.name);
		});
		body = ast.body[0].expression.body.range;
		if (ast.body[0].expression.body.type === "BlockStatement") return new Function(params, source.slice(body[0] + 1, body[1] - 1));
		return new Function(params, "return " + source.slice(body[0], body[1]));
	}
	function representJavascriptFunction(object) {
		return object.toString();
	}
	function isFunction(object) {
		return Object.prototype.toString.call(object) === "[object Function]";
	}
	module.exports = new Type("tag:yaml.org,2002:js/function", {
		kind: "scalar",
		resolve: resolveJavascriptFunction,
		construct: constructJavascriptFunction,
		predicate: isFunction,
		represent: representJavascriptFunction
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Schema = require_schema();
	module.exports = Schema.DEFAULT = new Schema({
		include: [require_default_safe()],
		explicit: [
			require_undefined(),
			require_regexp(),
			require_function()
		]
	});
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	var YAMLException = require_exception();
	var Mark = require_mark();
	var DEFAULT_SAFE_SCHEMA = require_default_safe();
	var DEFAULT_FULL_SCHEMA = require_default_full();
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	var CONTEXT_FLOW_IN = 1;
	var CONTEXT_FLOW_OUT = 2;
	var CONTEXT_BLOCK_IN = 3;
	var CONTEXT_BLOCK_OUT = 4;
	var CHOMPING_CLIP = 1;
	var CHOMPING_STRIP = 2;
	var CHOMPING_KEEP = 3;
	var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
	var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
	var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
	var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
	function _class(obj) {
		return Object.prototype.toString.call(obj);
	}
	function is_EOL(c) {
		return c === 10 || c === 13;
	}
	function is_WHITE_SPACE(c) {
		return c === 9 || c === 32;
	}
	function is_WS_OR_EOL(c) {
		return c === 9 || c === 32 || c === 10 || c === 13;
	}
	function is_FLOW_INDICATOR(c) {
		return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
	}
	function fromHexCode(c) {
		var lc;
		if (48 <= c && c <= 57) return c - 48;
		lc = c | 32;
		if (97 <= lc && lc <= 102) return lc - 97 + 10;
		return -1;
	}
	function escapedHexLen(c) {
		if (c === 120) return 2;
		if (c === 117) return 4;
		if (c === 85) return 8;
		return 0;
	}
	function fromDecimalCode(c) {
		if (48 <= c && c <= 57) return c - 48;
		return -1;
	}
	function simpleEscapeSequence(c) {
		return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? "\"" : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
	}
	function charFromCodepoint(c) {
		if (c <= 65535) return String.fromCharCode(c);
		return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
	}
	var simpleEscapeCheck = new Array(256);
	var simpleEscapeMap = new Array(256);
	for (var i = 0; i < 256; i++) {
		simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
		simpleEscapeMap[i] = simpleEscapeSequence(i);
	}
	function State(input, options) {
		this.input = input;
		this.filename = options["filename"] || null;
		this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
		this.onWarning = options["onWarning"] || null;
		this.legacy = options["legacy"] || false;
		this.json = options["json"] || false;
		this.listener = options["listener"] || null;
		this.implicitTypes = this.schema.compiledImplicit;
		this.typeMap = this.schema.compiledTypeMap;
		this.length = input.length;
		this.position = 0;
		this.line = 0;
		this.lineStart = 0;
		this.lineIndent = 0;
		this.documents = [];
	}
	function generateError(state, message) {
		return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
	}
	function throwError(state, message) {
		throw generateError(state, message);
	}
	function throwWarning(state, message) {
		if (state.onWarning) state.onWarning.call(null, generateError(state, message));
	}
	var directiveHandlers = {
		YAML: function handleYamlDirective(state, name, args) {
			var match, major, minor;
			if (state.version !== null) throwError(state, "duplication of %YAML directive");
			if (args.length !== 1) throwError(state, "YAML directive accepts exactly one argument");
			match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
			if (match === null) throwError(state, "ill-formed argument of the YAML directive");
			major = parseInt(match[1], 10);
			minor = parseInt(match[2], 10);
			if (major !== 1) throwError(state, "unacceptable YAML version of the document");
			state.version = args[0];
			state.checkLineBreaks = minor < 2;
			if (minor !== 1 && minor !== 2) throwWarning(state, "unsupported YAML version of the document");
		},
		TAG: function handleTagDirective(state, name, args) {
			var handle, prefix;
			if (args.length !== 2) throwError(state, "TAG directive accepts exactly two arguments");
			handle = args[0];
			prefix = args[1];
			if (!PATTERN_TAG_HANDLE.test(handle)) throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
			if (_hasOwnProperty.call(state.tagMap, handle)) throwError(state, "there is a previously declared suffix for \"" + handle + "\" tag handle");
			if (!PATTERN_TAG_URI.test(prefix)) throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
			state.tagMap[handle] = prefix;
		}
	};
	function captureSegment(state, start, end, checkJson) {
		var _position, _length, _character, _result;
		if (start < end) {
			_result = state.input.slice(start, end);
			if (checkJson) for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
				_character = _result.charCodeAt(_position);
				if (!(_character === 9 || 32 <= _character && _character <= 1114111)) throwError(state, "expected valid JSON character");
			}
			else if (PATTERN_NON_PRINTABLE.test(_result)) throwError(state, "the stream contains non-printable characters");
			state.result += _result;
		}
	}
	function mergeMappings(state, destination, source, overridableKeys) {
		var sourceKeys, key, index, quantity;
		if (!common.isObject(source)) throwError(state, "cannot merge mappings; the provided source object is unacceptable");
		sourceKeys = Object.keys(source);
		for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
			key = sourceKeys[index];
			if (!_hasOwnProperty.call(destination, key)) {
				destination[key] = source[key];
				overridableKeys[key] = true;
			}
		}
	}
	function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
		var index, quantity;
		if (Array.isArray(keyNode)) {
			keyNode = Array.prototype.slice.call(keyNode);
			for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
				if (Array.isArray(keyNode[index])) throwError(state, "nested arrays are not supported inside keys");
				if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") keyNode[index] = "[object Object]";
			}
		}
		if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") keyNode = "[object Object]";
		keyNode = String(keyNode);
		if (_result === null) _result = {};
		if (keyTag === "tag:yaml.org,2002:merge") if (Array.isArray(valueNode)) for (index = 0, quantity = valueNode.length; index < quantity; index += 1) mergeMappings(state, _result, valueNode[index], overridableKeys);
		else mergeMappings(state, _result, valueNode, overridableKeys);
		else {
			if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
				state.line = startLine || state.line;
				state.position = startPos || state.position;
				throwError(state, "duplicated mapping key");
			}
			_result[keyNode] = valueNode;
			delete overridableKeys[keyNode];
		}
		return _result;
	}
	function readLineBreak(state) {
		var ch = state.input.charCodeAt(state.position);
		if (ch === 10) state.position++;
		else if (ch === 13) {
			state.position++;
			if (state.input.charCodeAt(state.position) === 10) state.position++;
		} else throwError(state, "a line break is expected");
		state.line += 1;
		state.lineStart = state.position;
	}
	function skipSeparationSpace(state, allowComments, checkIndent) {
		var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
		while (ch !== 0) {
			while (is_WHITE_SPACE(ch)) ch = state.input.charCodeAt(++state.position);
			if (allowComments && ch === 35) do
				ch = state.input.charCodeAt(++state.position);
			while (ch !== 10 && ch !== 13 && ch !== 0);
			if (is_EOL(ch)) {
				readLineBreak(state);
				ch = state.input.charCodeAt(state.position);
				lineBreaks++;
				state.lineIndent = 0;
				while (ch === 32) {
					state.lineIndent++;
					ch = state.input.charCodeAt(++state.position);
				}
			} else break;
		}
		if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) throwWarning(state, "deficient indentation");
		return lineBreaks;
	}
	function testDocumentSeparator(state) {
		var _position = state.position, ch = state.input.charCodeAt(_position);
		if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
			_position += 3;
			ch = state.input.charCodeAt(_position);
			if (ch === 0 || is_WS_OR_EOL(ch)) return true;
		}
		return false;
	}
	function writeFoldedLines(state, count) {
		if (count === 1) state.result += " ";
		else if (count > 1) state.result += common.repeat("\n", count - 1);
	}
	function readPlainScalar(state, nodeIndent, withinFlowCollection) {
		var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch = state.input.charCodeAt(state.position);
		if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) return false;
		if (ch === 63 || ch === 45) {
			following = state.input.charCodeAt(state.position + 1);
			if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) return false;
		}
		state.kind = "scalar";
		state.result = "";
		captureStart = captureEnd = state.position;
		hasPendingContent = false;
		while (ch !== 0) {
			if (ch === 58) {
				following = state.input.charCodeAt(state.position + 1);
				if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) break;
			} else if (ch === 35) {
				preceding = state.input.charCodeAt(state.position - 1);
				if (is_WS_OR_EOL(preceding)) break;
			} else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) break;
			else if (is_EOL(ch)) {
				_line = state.line;
				_lineStart = state.lineStart;
				_lineIndent = state.lineIndent;
				skipSeparationSpace(state, false, -1);
				if (state.lineIndent >= nodeIndent) {
					hasPendingContent = true;
					ch = state.input.charCodeAt(state.position);
					continue;
				} else {
					state.position = captureEnd;
					state.line = _line;
					state.lineStart = _lineStart;
					state.lineIndent = _lineIndent;
					break;
				}
			}
			if (hasPendingContent) {
				captureSegment(state, captureStart, captureEnd, false);
				writeFoldedLines(state, state.line - _line);
				captureStart = captureEnd = state.position;
				hasPendingContent = false;
			}
			if (!is_WHITE_SPACE(ch)) captureEnd = state.position + 1;
			ch = state.input.charCodeAt(++state.position);
		}
		captureSegment(state, captureStart, captureEnd, false);
		if (state.result) return true;
		state.kind = _kind;
		state.result = _result;
		return false;
	}
	function readSingleQuotedScalar(state, nodeIndent) {
		var ch = state.input.charCodeAt(state.position), captureStart, captureEnd;
		if (ch !== 39) return false;
		state.kind = "scalar";
		state.result = "";
		state.position++;
		captureStart = captureEnd = state.position;
		while ((ch = state.input.charCodeAt(state.position)) !== 0) if (ch === 39) {
			captureSegment(state, captureStart, state.position, true);
			ch = state.input.charCodeAt(++state.position);
			if (ch === 39) {
				captureStart = state.position;
				state.position++;
				captureEnd = state.position;
			} else return true;
		} else if (is_EOL(ch)) {
			captureSegment(state, captureStart, captureEnd, true);
			writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
			captureStart = captureEnd = state.position;
		} else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a single quoted scalar");
		else {
			state.position++;
			captureEnd = state.position;
		}
		throwError(state, "unexpected end of the stream within a single quoted scalar");
	}
	function readDoubleQuotedScalar(state, nodeIndent) {
		var captureStart, captureEnd, hexLength, hexResult, tmp, ch = state.input.charCodeAt(state.position);
		if (ch !== 34) return false;
		state.kind = "scalar";
		state.result = "";
		state.position++;
		captureStart = captureEnd = state.position;
		while ((ch = state.input.charCodeAt(state.position)) !== 0) if (ch === 34) {
			captureSegment(state, captureStart, state.position, true);
			state.position++;
			return true;
		} else if (ch === 92) {
			captureSegment(state, captureStart, state.position, true);
			ch = state.input.charCodeAt(++state.position);
			if (is_EOL(ch)) skipSeparationSpace(state, false, nodeIndent);
			else if (ch < 256 && simpleEscapeCheck[ch]) {
				state.result += simpleEscapeMap[ch];
				state.position++;
			} else if ((tmp = escapedHexLen(ch)) > 0) {
				hexLength = tmp;
				hexResult = 0;
				for (; hexLength > 0; hexLength--) {
					ch = state.input.charCodeAt(++state.position);
					if ((tmp = fromHexCode(ch)) >= 0) hexResult = (hexResult << 4) + tmp;
					else throwError(state, "expected hexadecimal character");
				}
				state.result += charFromCodepoint(hexResult);
				state.position++;
			} else throwError(state, "unknown escape sequence");
			captureStart = captureEnd = state.position;
		} else if (is_EOL(ch)) {
			captureSegment(state, captureStart, captureEnd, true);
			writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
			captureStart = captureEnd = state.position;
		} else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a double quoted scalar");
		else {
			state.position++;
			captureEnd = state.position;
		}
		throwError(state, "unexpected end of the stream within a double quoted scalar");
	}
	function readFlowCollection(state, nodeIndent) {
		var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch = state.input.charCodeAt(state.position);
		if (ch === 91) {
			terminator = 93;
			isMapping = false;
			_result = [];
		} else if (ch === 123) {
			terminator = 125;
			isMapping = true;
			_result = {};
		} else return false;
		if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
		ch = state.input.charCodeAt(++state.position);
		while (ch !== 0) {
			skipSeparationSpace(state, true, nodeIndent);
			ch = state.input.charCodeAt(state.position);
			if (ch === terminator) {
				state.position++;
				state.tag = _tag;
				state.anchor = _anchor;
				state.kind = isMapping ? "mapping" : "sequence";
				state.result = _result;
				return true;
			} else if (!readNext) throwError(state, "missed comma between flow collection entries");
			keyTag = keyNode = valueNode = null;
			isPair = isExplicitPair = false;
			if (ch === 63) {
				following = state.input.charCodeAt(state.position + 1);
				if (is_WS_OR_EOL(following)) {
					isPair = isExplicitPair = true;
					state.position++;
					skipSeparationSpace(state, true, nodeIndent);
				}
			}
			_line = state.line;
			composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
			keyTag = state.tag;
			keyNode = state.result;
			skipSeparationSpace(state, true, nodeIndent);
			ch = state.input.charCodeAt(state.position);
			if ((isExplicitPair || state.line === _line) && ch === 58) {
				isPair = true;
				ch = state.input.charCodeAt(++state.position);
				skipSeparationSpace(state, true, nodeIndent);
				composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
				valueNode = state.result;
			}
			if (isMapping) storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
			else if (isPair) _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
			else _result.push(keyNode);
			skipSeparationSpace(state, true, nodeIndent);
			ch = state.input.charCodeAt(state.position);
			if (ch === 44) {
				readNext = true;
				ch = state.input.charCodeAt(++state.position);
			} else readNext = false;
		}
		throwError(state, "unexpected end of the stream within a flow collection");
	}
	function readBlockScalar(state, nodeIndent) {
		var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch = state.input.charCodeAt(state.position);
		if (ch === 124) folding = false;
		else if (ch === 62) folding = true;
		else return false;
		state.kind = "scalar";
		state.result = "";
		while (ch !== 0) {
			ch = state.input.charCodeAt(++state.position);
			if (ch === 43 || ch === 45) if (CHOMPING_CLIP === chomping) chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
			else throwError(state, "repeat of a chomping mode identifier");
			else if ((tmp = fromDecimalCode(ch)) >= 0) if (tmp === 0) throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
			else if (!detectedIndent) {
				textIndent = nodeIndent + tmp - 1;
				detectedIndent = true;
			} else throwError(state, "repeat of an indentation width identifier");
			else break;
		}
		if (is_WHITE_SPACE(ch)) {
			do
				ch = state.input.charCodeAt(++state.position);
			while (is_WHITE_SPACE(ch));
			if (ch === 35) do
				ch = state.input.charCodeAt(++state.position);
			while (!is_EOL(ch) && ch !== 0);
		}
		while (ch !== 0) {
			readLineBreak(state);
			state.lineIndent = 0;
			ch = state.input.charCodeAt(state.position);
			while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
				state.lineIndent++;
				ch = state.input.charCodeAt(++state.position);
			}
			if (!detectedIndent && state.lineIndent > textIndent) textIndent = state.lineIndent;
			if (is_EOL(ch)) {
				emptyLines++;
				continue;
			}
			if (state.lineIndent < textIndent) {
				if (chomping === CHOMPING_KEEP) state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
				else if (chomping === CHOMPING_CLIP) {
					if (didReadContent) state.result += "\n";
				}
				break;
			}
			if (folding) if (is_WHITE_SPACE(ch)) {
				atMoreIndented = true;
				state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
			} else if (atMoreIndented) {
				atMoreIndented = false;
				state.result += common.repeat("\n", emptyLines + 1);
			} else if (emptyLines === 0) {
				if (didReadContent) state.result += " ";
			} else state.result += common.repeat("\n", emptyLines);
			else state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
			didReadContent = true;
			detectedIndent = true;
			emptyLines = 0;
			captureStart = state.position;
			while (!is_EOL(ch) && ch !== 0) ch = state.input.charCodeAt(++state.position);
			captureSegment(state, captureStart, state.position, false);
		}
		return true;
	}
	function readBlockSequence(state, nodeIndent) {
		var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
		if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
		ch = state.input.charCodeAt(state.position);
		while (ch !== 0) {
			if (ch !== 45) break;
			following = state.input.charCodeAt(state.position + 1);
			if (!is_WS_OR_EOL(following)) break;
			detected = true;
			state.position++;
			if (skipSeparationSpace(state, true, -1)) {
				if (state.lineIndent <= nodeIndent) {
					_result.push(null);
					ch = state.input.charCodeAt(state.position);
					continue;
				}
			}
			_line = state.line;
			composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
			_result.push(state.result);
			skipSeparationSpace(state, true, -1);
			ch = state.input.charCodeAt(state.position);
			if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) throwError(state, "bad indentation of a sequence entry");
			else if (state.lineIndent < nodeIndent) break;
		}
		if (detected) {
			state.tag = _tag;
			state.anchor = _anchor;
			state.kind = "sequence";
			state.result = _result;
			return true;
		}
		return false;
	}
	function readBlockMapping(state, nodeIndent, flowIndent) {
		var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
		if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
		ch = state.input.charCodeAt(state.position);
		while (ch !== 0) {
			following = state.input.charCodeAt(state.position + 1);
			_line = state.line;
			_pos = state.position;
			if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
				if (ch === 63) {
					if (atExplicitKey) {
						storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
						keyTag = keyNode = valueNode = null;
					}
					detected = true;
					atExplicitKey = true;
					allowCompact = true;
				} else if (atExplicitKey) {
					atExplicitKey = false;
					allowCompact = true;
				} else throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
				state.position += 1;
				ch = following;
			} else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) if (state.line === _line) {
				ch = state.input.charCodeAt(state.position);
				while (is_WHITE_SPACE(ch)) ch = state.input.charCodeAt(++state.position);
				if (ch === 58) {
					ch = state.input.charCodeAt(++state.position);
					if (!is_WS_OR_EOL(ch)) throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
					if (atExplicitKey) {
						storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
						keyTag = keyNode = valueNode = null;
					}
					detected = true;
					atExplicitKey = false;
					allowCompact = false;
					keyTag = state.tag;
					keyNode = state.result;
				} else if (detected) throwError(state, "can not read an implicit mapping pair; a colon is missed");
				else {
					state.tag = _tag;
					state.anchor = _anchor;
					return true;
				}
			} else if (detected) throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
			else {
				state.tag = _tag;
				state.anchor = _anchor;
				return true;
			}
			else break;
			if (state.line === _line || state.lineIndent > nodeIndent) {
				if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) if (atExplicitKey) keyNode = state.result;
				else valueNode = state.result;
				if (!atExplicitKey) {
					storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
					keyTag = keyNode = valueNode = null;
				}
				skipSeparationSpace(state, true, -1);
				ch = state.input.charCodeAt(state.position);
			}
			if (state.lineIndent > nodeIndent && ch !== 0) throwError(state, "bad indentation of a mapping entry");
			else if (state.lineIndent < nodeIndent) break;
		}
		if (atExplicitKey) storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
		if (detected) {
			state.tag = _tag;
			state.anchor = _anchor;
			state.kind = "mapping";
			state.result = _result;
		}
		return detected;
	}
	function readTagProperty(state) {
		var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch = state.input.charCodeAt(state.position);
		if (ch !== 33) return false;
		if (state.tag !== null) throwError(state, "duplication of a tag property");
		ch = state.input.charCodeAt(++state.position);
		if (ch === 60) {
			isVerbatim = true;
			ch = state.input.charCodeAt(++state.position);
		} else if (ch === 33) {
			isNamed = true;
			tagHandle = "!!";
			ch = state.input.charCodeAt(++state.position);
		} else tagHandle = "!";
		_position = state.position;
		if (isVerbatim) {
			do
				ch = state.input.charCodeAt(++state.position);
			while (ch !== 0 && ch !== 62);
			if (state.position < state.length) {
				tagName = state.input.slice(_position, state.position);
				ch = state.input.charCodeAt(++state.position);
			} else throwError(state, "unexpected end of the stream within a verbatim tag");
		} else {
			while (ch !== 0 && !is_WS_OR_EOL(ch)) {
				if (ch === 33) if (!isNamed) {
					tagHandle = state.input.slice(_position - 1, state.position + 1);
					if (!PATTERN_TAG_HANDLE.test(tagHandle)) throwError(state, "named tag handle cannot contain such characters");
					isNamed = true;
					_position = state.position + 1;
				} else throwError(state, "tag suffix cannot contain exclamation marks");
				ch = state.input.charCodeAt(++state.position);
			}
			tagName = state.input.slice(_position, state.position);
			if (PATTERN_FLOW_INDICATORS.test(tagName)) throwError(state, "tag suffix cannot contain flow indicator characters");
		}
		if (tagName && !PATTERN_TAG_URI.test(tagName)) throwError(state, "tag name cannot contain such characters: " + tagName);
		if (isVerbatim) state.tag = tagName;
		else if (_hasOwnProperty.call(state.tagMap, tagHandle)) state.tag = state.tagMap[tagHandle] + tagName;
		else if (tagHandle === "!") state.tag = "!" + tagName;
		else if (tagHandle === "!!") state.tag = "tag:yaml.org,2002:" + tagName;
		else throwError(state, "undeclared tag handle \"" + tagHandle + "\"");
		return true;
	}
	function readAnchorProperty(state) {
		var _position, ch = state.input.charCodeAt(state.position);
		if (ch !== 38) return false;
		if (state.anchor !== null) throwError(state, "duplication of an anchor property");
		ch = state.input.charCodeAt(++state.position);
		_position = state.position;
		while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) ch = state.input.charCodeAt(++state.position);
		if (state.position === _position) throwError(state, "name of an anchor node must contain at least one character");
		state.anchor = state.input.slice(_position, state.position);
		return true;
	}
	function readAlias(state) {
		var _position, alias, ch = state.input.charCodeAt(state.position);
		if (ch !== 42) return false;
		ch = state.input.charCodeAt(++state.position);
		_position = state.position;
		while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) ch = state.input.charCodeAt(++state.position);
		if (state.position === _position) throwError(state, "name of an alias node must contain at least one character");
		alias = state.input.slice(_position, state.position);
		if (!_hasOwnProperty.call(state.anchorMap, alias)) throwError(state, "unidentified alias \"" + alias + "\"");
		state.result = state.anchorMap[alias];
		skipSeparationSpace(state, true, -1);
		return true;
	}
	function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
		var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
		if (state.listener !== null) state.listener("open", state);
		state.tag = null;
		state.anchor = null;
		state.kind = null;
		state.result = null;
		allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
		if (allowToSeek) {
			if (skipSeparationSpace(state, true, -1)) {
				atNewLine = true;
				if (state.lineIndent > parentIndent) indentStatus = 1;
				else if (state.lineIndent === parentIndent) indentStatus = 0;
				else if (state.lineIndent < parentIndent) indentStatus = -1;
			}
		}
		if (indentStatus === 1) while (readTagProperty(state) || readAnchorProperty(state)) if (skipSeparationSpace(state, true, -1)) {
			atNewLine = true;
			allowBlockCollections = allowBlockStyles;
			if (state.lineIndent > parentIndent) indentStatus = 1;
			else if (state.lineIndent === parentIndent) indentStatus = 0;
			else if (state.lineIndent < parentIndent) indentStatus = -1;
		} else allowBlockCollections = false;
		if (allowBlockCollections) allowBlockCollections = atNewLine || allowCompact;
		if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
			if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) flowIndent = parentIndent;
			else flowIndent = parentIndent + 1;
			blockIndent = state.position - state.lineStart;
			if (indentStatus === 1) if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) hasContent = true;
			else {
				if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) hasContent = true;
				else if (readAlias(state)) {
					hasContent = true;
					if (state.tag !== null || state.anchor !== null) throwError(state, "alias node should not have any properties");
				} else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
					hasContent = true;
					if (state.tag === null) state.tag = "?";
				}
				if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
			}
			else if (indentStatus === 0) hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
		}
		if (state.tag !== null && state.tag !== "!") if (state.tag === "?") {
			if (state.result !== null && state.kind !== "scalar") throwError(state, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + state.kind + "\"");
			for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
				type = state.implicitTypes[typeIndex];
				if (type.resolve(state.result)) {
					state.result = type.construct(state.result);
					state.tag = type.tag;
					if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
					break;
				}
			}
		} else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
			type = state.typeMap[state.kind || "fallback"][state.tag];
			if (state.result !== null && type.kind !== state.kind) throwError(state, "unacceptable node kind for !<" + state.tag + "> tag; it should be \"" + type.kind + "\", not \"" + state.kind + "\"");
			if (!type.resolve(state.result)) throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
			else {
				state.result = type.construct(state.result);
				if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
			}
		} else throwError(state, "unknown tag !<" + state.tag + ">");
		if (state.listener !== null) state.listener("close", state);
		return state.tag !== null || state.anchor !== null || hasContent;
	}
	function readDocument(state) {
		var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
		state.version = null;
		state.checkLineBreaks = state.legacy;
		state.tagMap = {};
		state.anchorMap = {};
		while ((ch = state.input.charCodeAt(state.position)) !== 0) {
			skipSeparationSpace(state, true, -1);
			ch = state.input.charCodeAt(state.position);
			if (state.lineIndent > 0 || ch !== 37) break;
			hasDirectives = true;
			ch = state.input.charCodeAt(++state.position);
			_position = state.position;
			while (ch !== 0 && !is_WS_OR_EOL(ch)) ch = state.input.charCodeAt(++state.position);
			directiveName = state.input.slice(_position, state.position);
			directiveArgs = [];
			if (directiveName.length < 1) throwError(state, "directive name must not be less than one character in length");
			while (ch !== 0) {
				while (is_WHITE_SPACE(ch)) ch = state.input.charCodeAt(++state.position);
				if (ch === 35) {
					do
						ch = state.input.charCodeAt(++state.position);
					while (ch !== 0 && !is_EOL(ch));
					break;
				}
				if (is_EOL(ch)) break;
				_position = state.position;
				while (ch !== 0 && !is_WS_OR_EOL(ch)) ch = state.input.charCodeAt(++state.position);
				directiveArgs.push(state.input.slice(_position, state.position));
			}
			if (ch !== 0) readLineBreak(state);
			if (_hasOwnProperty.call(directiveHandlers, directiveName)) directiveHandlers[directiveName](state, directiveName, directiveArgs);
			else throwWarning(state, "unknown document directive \"" + directiveName + "\"");
		}
		skipSeparationSpace(state, true, -1);
		if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
			state.position += 3;
			skipSeparationSpace(state, true, -1);
		} else if (hasDirectives) throwError(state, "directives end mark is expected");
		composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
		skipSeparationSpace(state, true, -1);
		if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) throwWarning(state, "non-ASCII line breaks are interpreted as content");
		state.documents.push(state.result);
		if (state.position === state.lineStart && testDocumentSeparator(state)) {
			if (state.input.charCodeAt(state.position) === 46) {
				state.position += 3;
				skipSeparationSpace(state, true, -1);
			}
			return;
		}
		if (state.position < state.length - 1) throwError(state, "end of the stream or a document separator is expected");
		else return;
	}
	function loadDocuments(input, options) {
		input = String(input);
		options = options || {};
		if (input.length !== 0) {
			if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) input += "\n";
			if (input.charCodeAt(0) === 65279) input = input.slice(1);
		}
		var state = new State(input, options);
		var nullpos = input.indexOf("\0");
		if (nullpos !== -1) {
			state.position = nullpos;
			throwError(state, "null byte is not allowed in input");
		}
		state.input += "\0";
		while (state.input.charCodeAt(state.position) === 32) {
			state.lineIndent += 1;
			state.position += 1;
		}
		while (state.position < state.length - 1) readDocument(state);
		return state.documents;
	}
	function loadAll(input, iterator, options) {
		if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
			options = iterator;
			iterator = null;
		}
		var documents = loadDocuments(input, options);
		if (typeof iterator !== "function") return documents;
		for (var index = 0, length = documents.length; index < length; index += 1) iterator(documents[index]);
	}
	function load(input, options) {
		var documents = loadDocuments(input, options);
		if (documents.length === 0) return;
		else if (documents.length === 1) return documents[0];
		throw new YAMLException("expected a single document in the stream, but found more");
	}
	function safeLoadAll(input, iterator, options) {
		if (typeof iterator === "object" && iterator !== null && typeof options === "undefined") {
			options = iterator;
			iterator = null;
		}
		return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	function safeLoad(input, options) {
		return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	module.exports.loadAll = loadAll;
	module.exports.load = load;
	module.exports.safeLoadAll = safeLoadAll;
	module.exports.safeLoad = safeLoad;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var common = require_common();
	var YAMLException = require_exception();
	var DEFAULT_FULL_SCHEMA = require_default_full();
	var DEFAULT_SAFE_SCHEMA = require_default_safe();
	var _toString = Object.prototype.toString;
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	var CHAR_TAB = 9;
	var CHAR_LINE_FEED = 10;
	var CHAR_CARRIAGE_RETURN = 13;
	var CHAR_SPACE = 32;
	var CHAR_EXCLAMATION = 33;
	var CHAR_DOUBLE_QUOTE = 34;
	var CHAR_SHARP = 35;
	var CHAR_PERCENT = 37;
	var CHAR_AMPERSAND = 38;
	var CHAR_SINGLE_QUOTE = 39;
	var CHAR_ASTERISK = 42;
	var CHAR_COMMA = 44;
	var CHAR_MINUS = 45;
	var CHAR_COLON = 58;
	var CHAR_EQUALS = 61;
	var CHAR_GREATER_THAN = 62;
	var CHAR_QUESTION = 63;
	var CHAR_COMMERCIAL_AT = 64;
	var CHAR_LEFT_SQUARE_BRACKET = 91;
	var CHAR_RIGHT_SQUARE_BRACKET = 93;
	var CHAR_GRAVE_ACCENT = 96;
	var CHAR_LEFT_CURLY_BRACKET = 123;
	var CHAR_VERTICAL_LINE = 124;
	var CHAR_RIGHT_CURLY_BRACKET = 125;
	var ESCAPE_SEQUENCES = {};
	ESCAPE_SEQUENCES[0] = "\\0";
	ESCAPE_SEQUENCES[7] = "\\a";
	ESCAPE_SEQUENCES[8] = "\\b";
	ESCAPE_SEQUENCES[9] = "\\t";
	ESCAPE_SEQUENCES[10] = "\\n";
	ESCAPE_SEQUENCES[11] = "\\v";
	ESCAPE_SEQUENCES[12] = "\\f";
	ESCAPE_SEQUENCES[13] = "\\r";
	ESCAPE_SEQUENCES[27] = "\\e";
	ESCAPE_SEQUENCES[34] = "\\\"";
	ESCAPE_SEQUENCES[92] = "\\\\";
	ESCAPE_SEQUENCES[133] = "\\N";
	ESCAPE_SEQUENCES[160] = "\\_";
	ESCAPE_SEQUENCES[8232] = "\\L";
	ESCAPE_SEQUENCES[8233] = "\\P";
	var DEPRECATED_BOOLEANS_SYNTAX = [
		"y",
		"Y",
		"yes",
		"Yes",
		"YES",
		"on",
		"On",
		"ON",
		"n",
		"N",
		"no",
		"No",
		"NO",
		"off",
		"Off",
		"OFF"
	];
	function compileStyleMap(schema, map) {
		var result, keys, index, length, tag, style, type;
		if (map === null) return {};
		result = {};
		keys = Object.keys(map);
		for (index = 0, length = keys.length; index < length; index += 1) {
			tag = keys[index];
			style = String(map[tag]);
			if (tag.slice(0, 2) === "!!") tag = "tag:yaml.org,2002:" + tag.slice(2);
			type = schema.compiledTypeMap["fallback"][tag];
			if (type && _hasOwnProperty.call(type.styleAliases, style)) style = type.styleAliases[style];
			result[tag] = style;
		}
		return result;
	}
	function encodeHex(character) {
		var string = character.toString(16).toUpperCase(), handle, length;
		if (character <= 255) {
			handle = "x";
			length = 2;
		} else if (character <= 65535) {
			handle = "u";
			length = 4;
		} else if (character <= 4294967295) {
			handle = "U";
			length = 8;
		} else throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
		return "\\" + handle + common.repeat("0", length - string.length) + string;
	}
	function State(options) {
		this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
		this.indent = Math.max(1, options["indent"] || 2);
		this.noArrayIndent = options["noArrayIndent"] || false;
		this.skipInvalid = options["skipInvalid"] || false;
		this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
		this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
		this.sortKeys = options["sortKeys"] || false;
		this.lineWidth = options["lineWidth"] || 80;
		this.noRefs = options["noRefs"] || false;
		this.noCompatMode = options["noCompatMode"] || false;
		this.condenseFlow = options["condenseFlow"] || false;
		this.implicitTypes = this.schema.compiledImplicit;
		this.explicitTypes = this.schema.compiledExplicit;
		this.tag = null;
		this.result = "";
		this.duplicates = [];
		this.usedDuplicates = null;
	}
	function indentString(string, spaces) {
		var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
		while (position < length) {
			next = string.indexOf("\n", position);
			if (next === -1) {
				line = string.slice(position);
				position = length;
			} else {
				line = string.slice(position, next + 1);
				position = next + 1;
			}
			if (line.length && line !== "\n") result += ind;
			result += line;
		}
		return result;
	}
	function generateNextLine(state, level) {
		return "\n" + common.repeat(" ", state.indent * level);
	}
	function testImplicitResolving(state, str) {
		var index, length, type;
		for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
			type = state.implicitTypes[index];
			if (type.resolve(str)) return true;
		}
		return false;
	}
	function isWhitespace(c) {
		return c === CHAR_SPACE || c === CHAR_TAB;
	}
	function isPrintable(c) {
		return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
	}
	function isNsChar(c) {
		return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
	}
	function isPlainSafe(c, prev) {
		return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
	}
	function isPlainSafeFirst(c) {
		return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
	}
	function needIndentIndicator(string) {
		return /^\n* /.test(string);
	}
	var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
	function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
		var i;
		var char, prev_char;
		var hasLineBreak = false;
		var hasFoldableLine = false;
		var shouldTrackWidth = lineWidth !== -1;
		var previousLineBreak = -1;
		var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
		if (singleLineOnly) for (i = 0; i < string.length; i++) {
			char = string.charCodeAt(i);
			if (!isPrintable(char)) return STYLE_DOUBLE;
			prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
			plain = plain && isPlainSafe(char, prev_char);
		}
		else {
			for (i = 0; i < string.length; i++) {
				char = string.charCodeAt(i);
				if (char === CHAR_LINE_FEED) {
					hasLineBreak = true;
					if (shouldTrackWidth) {
						hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
						previousLineBreak = i;
					}
				} else if (!isPrintable(char)) return STYLE_DOUBLE;
				prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
				plain = plain && isPlainSafe(char, prev_char);
			}
			hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
		}
		if (!hasLineBreak && !hasFoldableLine) return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
		if (indentPerLevel > 9 && needIndentIndicator(string)) return STYLE_DOUBLE;
		return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
	}
	function writeScalar(state, string, level, iskey) {
		state.dump = function() {
			if (string.length === 0) return "''";
			if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) return "'" + string + "'";
			var indent = state.indent * Math.max(1, level);
			var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
			var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
			function testAmbiguity(string) {
				return testImplicitResolving(state, string);
			}
			switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
				case STYLE_PLAIN: return string;
				case STYLE_SINGLE: return "'" + string.replace(/'/g, "''") + "'";
				case STYLE_LITERAL: return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
				case STYLE_FOLDED: return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
				case STYLE_DOUBLE: return "\"" + escapeString(string, lineWidth) + "\"";
				default: throw new YAMLException("impossible error: invalid scalar style");
			}
		}();
	}
	function blockHeader(string, indentPerLevel) {
		var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
		var clip = string[string.length - 1] === "\n";
		return indentIndicator + (clip && (string[string.length - 2] === "\n" || string === "\n") ? "+" : clip ? "" : "-") + "\n";
	}
	function dropEndingNewline(string) {
		return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
	}
	function foldString(string, width) {
		var lineRe = /(\n+)([^\n]*)/g;
		var result = function() {
			var nextLF = string.indexOf("\n");
			nextLF = nextLF !== -1 ? nextLF : string.length;
			lineRe.lastIndex = nextLF;
			return foldLine(string.slice(0, nextLF), width);
		}();
		var prevMoreIndented = string[0] === "\n" || string[0] === " ";
		var moreIndented;
		var match;
		while (match = lineRe.exec(string)) {
			var prefix = match[1], line = match[2];
			moreIndented = line[0] === " ";
			result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
			prevMoreIndented = moreIndented;
		}
		return result;
	}
	function foldLine(line, width) {
		if (line === "" || line[0] === " ") return line;
		var breakRe = / [^ ]/g;
		var match;
		var start = 0, end, curr = 0, next = 0;
		var result = "";
		while (match = breakRe.exec(line)) {
			next = match.index;
			if (next - start > width) {
				end = curr > start ? curr : next;
				result += "\n" + line.slice(start, end);
				start = end + 1;
			}
			curr = next;
		}
		result += "\n";
		if (line.length - start > width && curr > start) result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
		else result += line.slice(start);
		return result.slice(1);
	}
	function escapeString(string) {
		var result = "";
		var char, nextChar;
		var escapeSeq;
		for (var i = 0; i < string.length; i++) {
			char = string.charCodeAt(i);
			if (char >= 55296 && char <= 56319) {
				nextChar = string.charCodeAt(i + 1);
				if (nextChar >= 56320 && nextChar <= 57343) {
					result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
					i++;
					continue;
				}
			}
			escapeSeq = ESCAPE_SEQUENCES[char];
			result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
		}
		return result;
	}
	function writeFlowSequence(state, level, object) {
		var _result = "", _tag = state.tag, index, length;
		for (index = 0, length = object.length; index < length; index += 1) if (writeNode(state, level, object[index], false, false)) {
			if (index !== 0) _result += "," + (!state.condenseFlow ? " " : "");
			_result += state.dump;
		}
		state.tag = _tag;
		state.dump = "[" + _result + "]";
	}
	function writeBlockSequence(state, level, object, compact) {
		var _result = "", _tag = state.tag, index, length;
		for (index = 0, length = object.length; index < length; index += 1) if (writeNode(state, level + 1, object[index], true, true)) {
			if (!compact || index !== 0) _result += generateNextLine(state, level);
			if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) _result += "-";
			else _result += "- ";
			_result += state.dump;
		}
		state.tag = _tag;
		state.dump = _result || "[]";
	}
	function writeFlowMapping(state, level, object) {
		var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
		for (index = 0, length = objectKeyList.length; index < length; index += 1) {
			pairBuffer = "";
			if (index !== 0) pairBuffer += ", ";
			if (state.condenseFlow) pairBuffer += "\"";
			objectKey = objectKeyList[index];
			objectValue = object[objectKey];
			if (!writeNode(state, level, objectKey, false, false)) continue;
			if (state.dump.length > 1024) pairBuffer += "? ";
			pairBuffer += state.dump + (state.condenseFlow ? "\"" : "") + ":" + (state.condenseFlow ? "" : " ");
			if (!writeNode(state, level, objectValue, false, false)) continue;
			pairBuffer += state.dump;
			_result += pairBuffer;
		}
		state.tag = _tag;
		state.dump = "{" + _result + "}";
	}
	function writeBlockMapping(state, level, object, compact) {
		var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
		if (state.sortKeys === true) objectKeyList.sort();
		else if (typeof state.sortKeys === "function") objectKeyList.sort(state.sortKeys);
		else if (state.sortKeys) throw new YAMLException("sortKeys must be a boolean or a function");
		for (index = 0, length = objectKeyList.length; index < length; index += 1) {
			pairBuffer = "";
			if (!compact || index !== 0) pairBuffer += generateNextLine(state, level);
			objectKey = objectKeyList[index];
			objectValue = object[objectKey];
			if (!writeNode(state, level + 1, objectKey, true, true, true)) continue;
			explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
			if (explicitPair) if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) pairBuffer += "?";
			else pairBuffer += "? ";
			pairBuffer += state.dump;
			if (explicitPair) pairBuffer += generateNextLine(state, level);
			if (!writeNode(state, level + 1, objectValue, true, explicitPair)) continue;
			if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) pairBuffer += ":";
			else pairBuffer += ": ";
			pairBuffer += state.dump;
			_result += pairBuffer;
		}
		state.tag = _tag;
		state.dump = _result || "{}";
	}
	function detectType(state, object, explicit) {
		var _result, typeList = explicit ? state.explicitTypes : state.implicitTypes, index, length, type, style;
		for (index = 0, length = typeList.length; index < length; index += 1) {
			type = typeList[index];
			if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
				state.tag = explicit ? type.tag : "?";
				if (type.represent) {
					style = state.styleMap[type.tag] || type.defaultStyle;
					if (_toString.call(type.represent) === "[object Function]") _result = type.represent(object, style);
					else if (_hasOwnProperty.call(type.represent, style)) _result = type.represent[style](object, style);
					else throw new YAMLException("!<" + type.tag + "> tag resolver accepts not \"" + style + "\" style");
					state.dump = _result;
				}
				return true;
			}
		}
		return false;
	}
	function writeNode(state, level, object, block, compact, iskey) {
		state.tag = null;
		state.dump = object;
		if (!detectType(state, object, false)) detectType(state, object, true);
		var type = _toString.call(state.dump);
		if (block) block = state.flowLevel < 0 || state.flowLevel > level;
		var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
		if (objectOrArray) {
			duplicateIndex = state.duplicates.indexOf(object);
			duplicate = duplicateIndex !== -1;
		}
		if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) compact = false;
		if (duplicate && state.usedDuplicates[duplicateIndex]) state.dump = "*ref_" + duplicateIndex;
		else {
			if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) state.usedDuplicates[duplicateIndex] = true;
			if (type === "[object Object]") if (block && Object.keys(state.dump).length !== 0) {
				writeBlockMapping(state, level, state.dump, compact);
				if (duplicate) state.dump = "&ref_" + duplicateIndex + state.dump;
			} else {
				writeFlowMapping(state, level, state.dump);
				if (duplicate) state.dump = "&ref_" + duplicateIndex + " " + state.dump;
			}
			else if (type === "[object Array]") {
				var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
				if (block && state.dump.length !== 0) {
					writeBlockSequence(state, arrayLevel, state.dump, compact);
					if (duplicate) state.dump = "&ref_" + duplicateIndex + state.dump;
				} else {
					writeFlowSequence(state, arrayLevel, state.dump);
					if (duplicate) state.dump = "&ref_" + duplicateIndex + " " + state.dump;
				}
			} else if (type === "[object String]") {
				if (state.tag !== "?") writeScalar(state, state.dump, level, iskey);
			} else {
				if (state.skipInvalid) return false;
				throw new YAMLException("unacceptable kind of an object to dump " + type);
			}
			if (state.tag !== null && state.tag !== "?") state.dump = "!<" + state.tag + "> " + state.dump;
		}
		return true;
	}
	function getDuplicateReferences(object, state) {
		var objects = [], duplicatesIndexes = [], index, length;
		inspectNode(object, objects, duplicatesIndexes);
		for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) state.duplicates.push(objects[duplicatesIndexes[index]]);
		state.usedDuplicates = new Array(length);
	}
	function inspectNode(object, objects, duplicatesIndexes) {
		var objectKeyList, index, length;
		if (object !== null && typeof object === "object") {
			index = objects.indexOf(object);
			if (index !== -1) {
				if (duplicatesIndexes.indexOf(index) === -1) duplicatesIndexes.push(index);
			} else {
				objects.push(object);
				if (Array.isArray(object)) for (index = 0, length = object.length; index < length; index += 1) inspectNode(object[index], objects, duplicatesIndexes);
				else {
					objectKeyList = Object.keys(object);
					for (index = 0, length = objectKeyList.length; index < length; index += 1) inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
				}
			}
		}
	}
	function dump(input, options) {
		options = options || {};
		var state = new State(options);
		if (!state.noRefs) getDuplicateReferences(input, state);
		if (writeNode(state, 0, input, true, true)) return state.dump + "\n";
		return "";
	}
	function safeDump(input, options) {
		return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	module.exports.dump = dump;
	module.exports.safeDump = safeDump;
}));
//#endregion
//#region node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var loader = require_loader();
	var dumper = require_dumper();
	function deprecated(name) {
		return function() {
			throw new Error("Function " + name + " is deprecated and cannot be used.");
		};
	}
	module.exports.Type = require_type();
	module.exports.Schema = require_schema();
	module.exports.FAILSAFE_SCHEMA = require_failsafe();
	module.exports.JSON_SCHEMA = require_json();
	module.exports.CORE_SCHEMA = require_core();
	module.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
	module.exports.DEFAULT_FULL_SCHEMA = require_default_full();
	module.exports.load = loader.load;
	module.exports.loadAll = loader.loadAll;
	module.exports.safeLoad = loader.safeLoad;
	module.exports.safeLoadAll = loader.safeLoadAll;
	module.exports.dump = dumper.dump;
	module.exports.safeDump = dumper.safeDump;
	module.exports.YAMLException = require_exception();
	module.exports.MINIMAL_SCHEMA = require_failsafe();
	module.exports.SAFE_SCHEMA = require_default_safe();
	module.exports.DEFAULT_SCHEMA = require_default_full();
	module.exports.scan = deprecated("scan");
	module.exports.parse = deprecated("parse");
	module.exports.compose = deprecated("compose");
	module.exports.addConstructor = deprecated("addConstructor");
}));
//#endregion
//#region node_modules/js-yaml/index.js
var require_js_yaml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_js_yaml$1();
}));
//#endregion
//#region node_modules/gray-matter/lib/engines.js
var require_engines = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var yaml = require_js_yaml();
	/**
	* Default engines
	*/
	var engines = exports = module.exports;
	/**
	* YAML
	*/
	engines.yaml = {
		parse: yaml.safeLoad.bind(yaml),
		stringify: yaml.safeDump.bind(yaml)
	};
	/**
	* JSON
	*/
	engines.json = {
		parse: JSON.parse.bind(JSON),
		stringify: function(obj, options) {
			const opts = Object.assign({
				replacer: null,
				space: 2
			}, options);
			return JSON.stringify(obj, opts.replacer, opts.space);
		}
	};
	/**
	* JavaScript
	*/
	engines.javascript = {
		parse: function parse(str, options, wrap) {
			try {
				if (wrap !== false) str = "(function() {\nreturn " + str.trim() + ";\n}());";
				return eval(str) || {};
			} catch (err) {
				if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) return parse(str, options, false);
				throw new SyntaxError(err);
			}
		},
		stringify: function() {
			throw new Error("stringifying JavaScript is not supported");
		}
	};
}));
//#endregion
//#region node_modules/vite-plugin-node-polyfills/shims/buffer/dist/index.js
function getLens(b64) {
	var len = b64.length;
	if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
	var validLen = b64.indexOf("=");
	if (validLen === -1) validLen = len;
	var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
	return [validLen, placeHoldersLen];
}
function byteLength(b64) {
	var lens = getLens(b64);
	var validLen = lens[0];
	var placeHoldersLen = lens[1];
	return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
	return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
	var tmp;
	var lens = getLens(b64);
	var validLen = lens[0];
	var placeHoldersLen = lens[1];
	var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
	var curByte = 0;
	var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
	var i;
	for (i = 0; i < len; i += 4) {
		tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
		arr[curByte++] = tmp >> 16 & 255;
		arr[curByte++] = tmp >> 8 & 255;
		arr[curByte++] = tmp & 255;
	}
	if (placeHoldersLen === 2) {
		tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
		arr[curByte++] = tmp & 255;
	}
	if (placeHoldersLen === 1) {
		tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
		arr[curByte++] = tmp >> 8 & 255;
		arr[curByte++] = tmp & 255;
	}
	return arr;
}
function tripletToBase64(num) {
	return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
	var tmp;
	var output = [];
	for (var i = start; i < end; i += 3) {
		tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
		output.push(tripletToBase64(tmp));
	}
	return output.join("");
}
function fromByteArray(uint8) {
	var tmp;
	var len = uint8.length;
	var extraBytes = len % 3;
	var parts = [];
	var maxChunkLength = 16383;
	for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	if (extraBytes === 1) {
		tmp = uint8[len - 1];
		parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
	} else if (extraBytes === 2) {
		tmp = (uint8[len - 2] << 8) + uint8[len - 1];
		parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
	}
	return parts.join("");
}
var buffer, base64Js, lookup, revLookup, Arr, code, i, len, ieee754, Buffer, Blob, BlobOptions, Buffer$1, File, FileOptions, INSPECT_MAX_BYTES, SlowBuffer, TranscodeEncoding, atob, btoa, constants, isAscii, isUtf8, kMaxLength, kStringMaxLength, resolveObjectURL, transcode;
var init_dist = __esmMin((() => {
	buffer = {};
	base64Js = {};
	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;
	lookup = [];
	revLookup = [];
	Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
	code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (i = 0, len = code.length; i < len; ++i) {
		lookup[i] = code[i];
		revLookup[code.charCodeAt(i)] = i;
	}
	revLookup["-".charCodeAt(0)] = 62;
	revLookup["_".charCodeAt(0)] = 63;
	ieee754 = {};
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	ieee754.read = function(buffer, offset, isLE, mLen, nBytes) {
		var e, m;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var nBits = -7;
		var i = isLE ? nBytes - 1 : 0;
		var d = isLE ? -1 : 1;
		var s = buffer[offset + i];
		i += d;
		e = s & (1 << -nBits) - 1;
		s >>= -nBits;
		nBits += eLen;
		for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
		m = e & (1 << -nBits) - 1;
		e >>= -nBits;
		nBits += mLen;
		for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
		if (e === 0) e = 1 - eBias;
		else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
		else {
			m = m + Math.pow(2, mLen);
			e = e - eBias;
		}
		return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	ieee754.write = function(buffer, value, offset, isLE, mLen, nBytes) {
		var e, m, c;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
		var i = isLE ? 0 : nBytes - 1;
		var d = isLE ? 1 : -1;
		var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		value = Math.abs(value);
		if (isNaN(value) || value === Infinity) {
			m = isNaN(value) ? 1 : 0;
			e = eMax;
		} else {
			e = Math.floor(Math.log(value) / Math.LN2);
			if (value * (c = Math.pow(2, -e)) < 1) {
				e--;
				c *= 2;
			}
			if (e + eBias >= 1) value += rt / c;
			else value += rt * Math.pow(2, 1 - eBias);
			if (value * c >= 2) {
				e++;
				c /= 2;
			}
			if (e + eBias >= eMax) {
				m = 0;
				e = eMax;
			} else if (e + eBias >= 1) {
				m = (value * c - 1) * Math.pow(2, mLen);
				e = e + eBias;
			} else {
				m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
				e = 0;
			}
		}
		for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
		e = e << mLen | m;
		eLen += mLen;
		for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
		buffer[offset + i - d] |= s * 128;
	};
	/*!
	* The buffer module from node.js, for the browser.
	*
	* @author   Feross Aboukhadijeh <https://feross.org>
	* @license  MIT
	*/
	(function(exports) {
		const base64 = base64Js;
		const ieee754$1 = ieee754;
		const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
		exports.Buffer = Buffer;
		exports.SlowBuffer = SlowBuffer;
		exports.INSPECT_MAX_BYTES = 50;
		const K_MAX_LENGTH = 2147483647;
		exports.kMaxLength = K_MAX_LENGTH;
		const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
		/**
		* If `Buffer.TYPED_ARRAY_SUPPORT`:
		*   === true    Use Uint8Array implementation (fastest)
		*   === false   Print warning and recommend using `buffer` v4.x which has an Object
		*               implementation (most compatible, even IE6)
		*
		* Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		* Opera 11.6+, iOS 4.2+.
		*
		* We report that the browser does not support typed arrays if the are not subclassable
		* using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
		* (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
		* for __proto__ and has a buggy typed array implementation.
		*/
		Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
		if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
		function typedArraySupport() {
			try {
				const arr = new GlobalUint8Array(1);
				const proto = { foo: function() {
					return 42;
				} };
				Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
				Object.setPrototypeOf(arr, proto);
				return arr.foo() === 42;
			} catch (e) {
				return false;
			}
		}
		Object.defineProperty(Buffer.prototype, "parent", {
			enumerable: true,
			get: function() {
				if (!Buffer.isBuffer(this)) return void 0;
				return this.buffer;
			}
		});
		Object.defineProperty(Buffer.prototype, "offset", {
			enumerable: true,
			get: function() {
				if (!Buffer.isBuffer(this)) return void 0;
				return this.byteOffset;
			}
		});
		function createBuffer(length) {
			if (length > K_MAX_LENGTH) throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
			const buf = new GlobalUint8Array(length);
			Object.setPrototypeOf(buf, Buffer.prototype);
			return buf;
		}
		/**
		* The Buffer constructor returns instances of `Uint8Array` that have their
		* prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
		* `Uint8Array`, so the returned instances will have all the node `Buffer` methods
		* and the `Uint8Array` methods. Square bracket notation works as expected -- it
		* returns a single octet.
		*
		* The `Uint8Array` prototype remains unmodified.
		*/
		function Buffer(arg, encodingOrOffset, length) {
			if (typeof arg === "number") {
				if (typeof encodingOrOffset === "string") throw new TypeError("The \"string\" argument must be of type string. Received type number");
				return allocUnsafe(arg);
			}
			return from(arg, encodingOrOffset, length);
		}
		Buffer.poolSize = 8192;
		function from(value, encodingOrOffset, length) {
			if (typeof value === "string") return fromString(value, encodingOrOffset);
			if (GlobalArrayBuffer.isView(value)) return fromArrayView(value);
			if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
			if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof value === "number") throw new TypeError("The \"value\" argument must not be of type number. Received type number");
			const valueOf = value.valueOf && value.valueOf();
			if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
			const b = fromObject(value);
			if (b) return b;
			if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
			throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
		}
		/**
		* Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
		* if value is a number.
		* Buffer.from(str[, encoding])
		* Buffer.from(array)
		* Buffer.from(buffer)
		* Buffer.from(arrayBuffer[, byteOffset[, length]])
		**/
		Buffer.from = function(value, encodingOrOffset, length) {
			return from(value, encodingOrOffset, length);
		};
		Object.setPrototypeOf(Buffer.prototype, GlobalUint8Array.prototype);
		Object.setPrototypeOf(Buffer, GlobalUint8Array);
		function assertSize(size) {
			if (typeof size !== "number") throw new TypeError("\"size\" argument must be of type number");
			else if (size < 0) throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
		}
		function alloc(size, fill, encoding) {
			assertSize(size);
			if (size <= 0) return createBuffer(size);
			if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
			return createBuffer(size);
		}
		/**
		* Creates a new filled Buffer instance.
		* alloc(size[, fill[, encoding]])
		**/
		Buffer.alloc = function(size, fill, encoding) {
			return alloc(size, fill, encoding);
		};
		function allocUnsafe(size) {
			assertSize(size);
			return createBuffer(size < 0 ? 0 : checked(size) | 0);
		}
		/**
		* Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		* */
		Buffer.allocUnsafe = function(size) {
			return allocUnsafe(size);
		};
		/**
		* Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		*/
		Buffer.allocUnsafeSlow = function(size) {
			return allocUnsafe(size);
		};
		function fromString(string, encoding) {
			if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
			if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
			const length = byteLength(string, encoding) | 0;
			let buf = createBuffer(length);
			const actual = buf.write(string, encoding);
			if (actual !== length) buf = buf.slice(0, actual);
			return buf;
		}
		function fromArrayLike(array) {
			const length = array.length < 0 ? 0 : checked(array.length) | 0;
			const buf = createBuffer(length);
			for (let i = 0; i < length; i += 1) buf[i] = array[i] & 255;
			return buf;
		}
		function fromArrayView(arrayView) {
			if (isInstance(arrayView, GlobalUint8Array)) {
				const copy = new GlobalUint8Array(arrayView);
				return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
			}
			return fromArrayLike(arrayView);
		}
		function fromArrayBuffer(array, byteOffset, length) {
			if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("\"offset\" is outside of buffer bounds");
			if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
			let buf;
			if (byteOffset === void 0 && length === void 0) buf = new GlobalUint8Array(array);
			else if (length === void 0) buf = new GlobalUint8Array(array, byteOffset);
			else buf = new GlobalUint8Array(array, byteOffset, length);
			Object.setPrototypeOf(buf, Buffer.prototype);
			return buf;
		}
		function fromObject(obj) {
			if (Buffer.isBuffer(obj)) {
				const len = checked(obj.length) | 0;
				const buf = createBuffer(len);
				if (buf.length === 0) return buf;
				obj.copy(buf, 0, 0, len);
				return buf;
			}
			if (obj.length !== void 0) {
				if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
				return fromArrayLike(obj);
			}
			if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
		}
		function checked(length) {
			if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
			return length | 0;
		}
		function SlowBuffer(length) {
			if (+length != length) length = 0;
			return Buffer.alloc(+length);
		}
		Buffer.isBuffer = function isBuffer(b) {
			return b != null && b._isBuffer === true && b !== Buffer.prototype;
		};
		Buffer.compare = function compare(a, b) {
			if (isInstance(a, GlobalUint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
			if (isInstance(b, GlobalUint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
			if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
			if (a === b) return 0;
			let x = a.length;
			let y = b.length;
			for (let i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
				x = a[i];
				y = b[i];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		Buffer.isEncoding = function isEncoding(encoding) {
			switch (String(encoding).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return true;
				default: return false;
			}
		};
		Buffer.concat = function concat(list, length) {
			if (!Array.isArray(list)) throw new TypeError("\"list\" argument must be an Array of Buffers");
			if (list.length === 0) return Buffer.alloc(0);
			let i;
			if (length === void 0) {
				length = 0;
				for (i = 0; i < list.length; ++i) length += list[i].length;
			}
			const buffer = Buffer.allocUnsafe(length);
			let pos = 0;
			for (i = 0; i < list.length; ++i) {
				let buf = list[i];
				if (isInstance(buf, GlobalUint8Array)) if (pos + buf.length > buffer.length) {
					if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
					buf.copy(buffer, pos);
				} else GlobalUint8Array.prototype.set.call(buffer, buf, pos);
				else if (!Buffer.isBuffer(buf)) throw new TypeError("\"list\" argument must be an Array of Buffers");
				else buf.copy(buffer, pos);
				pos += buf.length;
			}
			return buffer;
		};
		function byteLength(string, encoding) {
			if (Buffer.isBuffer(string)) return string.length;
			if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) return string.byteLength;
			if (typeof string !== "string") throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
			const len = string.length;
			const mustMatch = arguments.length > 2 && arguments[2] === true;
			if (!mustMatch && len === 0) return 0;
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "ascii":
				case "latin1":
				case "binary": return len;
				case "utf8":
				case "utf-8": return utf8ToBytes(string).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return len * 2;
				case "hex": return len >>> 1;
				case "base64": return base64ToBytes(string).length;
				default:
					if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		}
		Buffer.byteLength = byteLength;
		function slowToString(encoding, start, end) {
			let loweredCase = false;
			if (start === void 0 || start < 0) start = 0;
			if (start > this.length) return "";
			if (end === void 0 || end > this.length) end = this.length;
			if (end <= 0) return "";
			end >>>= 0;
			start >>>= 0;
			if (end <= start) return "";
			if (!encoding) encoding = "utf8";
			while (true) switch (encoding) {
				case "hex": return hexSlice(this, start, end);
				case "utf8":
				case "utf-8": return utf8Slice(this, start, end);
				case "ascii": return asciiSlice(this, start, end);
				case "latin1":
				case "binary": return latin1Slice(this, start, end);
				case "base64": return base64Slice(this, start, end);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return utf16leSlice(this, start, end);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = (encoding + "").toLowerCase();
					loweredCase = true;
			}
		}
		Buffer.prototype._isBuffer = true;
		function swap(b, n, m) {
			const i = b[n];
			b[n] = b[m];
			b[m] = i;
		}
		Buffer.prototype.swap16 = function swap16() {
			const len = this.length;
			if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (let i = 0; i < len; i += 2) swap(this, i, i + 1);
			return this;
		};
		Buffer.prototype.swap32 = function swap32() {
			const len = this.length;
			if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (let i = 0; i < len; i += 4) {
				swap(this, i, i + 3);
				swap(this, i + 1, i + 2);
			}
			return this;
		};
		Buffer.prototype.swap64 = function swap64() {
			const len = this.length;
			if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (let i = 0; i < len; i += 8) {
				swap(this, i, i + 7);
				swap(this, i + 1, i + 6);
				swap(this, i + 2, i + 5);
				swap(this, i + 3, i + 4);
			}
			return this;
		};
		Buffer.prototype.toString = function toString() {
			const length = this.length;
			if (length === 0) return "";
			if (arguments.length === 0) return utf8Slice(this, 0, length);
			return slowToString.apply(this, arguments);
		};
		Buffer.prototype.toLocaleString = Buffer.prototype.toString;
		Buffer.prototype.equals = function equals(b) {
			if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
			if (this === b) return true;
			return Buffer.compare(this, b) === 0;
		};
		Buffer.prototype.inspect = function inspect() {
			let str = "";
			const max = exports.INSPECT_MAX_BYTES;
			str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
			if (this.length > max) str += " ... ";
			return "<Buffer " + str + ">";
		};
		if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
		Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
			if (isInstance(target, GlobalUint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
			if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
			if (start === void 0) start = 0;
			if (end === void 0) end = target ? target.length : 0;
			if (thisStart === void 0) thisStart = 0;
			if (thisEnd === void 0) thisEnd = this.length;
			if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
			if (thisStart >= thisEnd && start >= end) return 0;
			if (thisStart >= thisEnd) return -1;
			if (start >= end) return 1;
			start >>>= 0;
			end >>>= 0;
			thisStart >>>= 0;
			thisEnd >>>= 0;
			if (this === target) return 0;
			let x = thisEnd - thisStart;
			let y = end - start;
			const len = Math.min(x, y);
			const thisCopy = this.slice(thisStart, thisEnd);
			const targetCopy = target.slice(start, end);
			for (let i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
				x = thisCopy[i];
				y = targetCopy[i];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
			if (buffer.length === 0) return -1;
			if (typeof byteOffset === "string") {
				encoding = byteOffset;
				byteOffset = 0;
			} else if (byteOffset > 2147483647) byteOffset = 2147483647;
			else if (byteOffset < -2147483648) byteOffset = -2147483648;
			byteOffset = +byteOffset;
			if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
			if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
			if (byteOffset >= buffer.length) if (dir) return -1;
			else byteOffset = buffer.length - 1;
			else if (byteOffset < 0) if (dir) byteOffset = 0;
			else return -1;
			if (typeof val === "string") val = Buffer.from(val, encoding);
			if (Buffer.isBuffer(val)) {
				if (val.length === 0) return -1;
				return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
			} else if (typeof val === "number") {
				val = val & 255;
				if (typeof GlobalUint8Array.prototype.indexOf === "function") if (dir) return GlobalUint8Array.prototype.indexOf.call(buffer, val, byteOffset);
				else return GlobalUint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
				return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
			}
			throw new TypeError("val must be string, number or Buffer");
		}
		function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
			let indexSize = 1;
			let arrLength = arr.length;
			let valLength = val.length;
			if (encoding !== void 0) {
				encoding = String(encoding).toLowerCase();
				if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
					if (arr.length < 2 || val.length < 2) return -1;
					indexSize = 2;
					arrLength /= 2;
					valLength /= 2;
					byteOffset /= 2;
				}
			}
			function read(buf, i) {
				if (indexSize === 1) return buf[i];
				else return buf.readUInt16BE(i * indexSize);
			}
			let i;
			if (dir) {
				let foundIndex = -1;
				for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
					if (foundIndex === -1) foundIndex = i;
					if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
				} else {
					if (foundIndex !== -1) i -= i - foundIndex;
					foundIndex = -1;
				}
			} else {
				if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
				for (i = byteOffset; i >= 0; i--) {
					let found = true;
					for (let j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
						found = false;
						break;
					}
					if (found) return i;
				}
			}
			return -1;
		}
		Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
			return this.indexOf(val, byteOffset, encoding) !== -1;
		};
		Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
		};
		Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
		};
		function hexWrite(buf, string, offset, length) {
			offset = Number(offset) || 0;
			const remaining = buf.length - offset;
			if (!length) length = remaining;
			else {
				length = Number(length);
				if (length > remaining) length = remaining;
			}
			const strLen = string.length;
			if (length > strLen / 2) length = strLen / 2;
			let i;
			for (i = 0; i < length; ++i) {
				const parsed = parseInt(string.substr(i * 2, 2), 16);
				if (numberIsNaN(parsed)) return i;
				buf[offset + i] = parsed;
			}
			return i;
		}
		function utf8Write(buf, string, offset, length) {
			return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
		}
		function asciiWrite(buf, string, offset, length) {
			return blitBuffer(asciiToBytes(string), buf, offset, length);
		}
		function base64Write(buf, string, offset, length) {
			return blitBuffer(base64ToBytes(string), buf, offset, length);
		}
		function ucs2Write(buf, string, offset, length) {
			return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
		}
		Buffer.prototype.write = function write(string, offset, length, encoding) {
			if (offset === void 0) {
				encoding = "utf8";
				length = this.length;
				offset = 0;
			} else if (length === void 0 && typeof offset === "string") {
				encoding = offset;
				length = this.length;
				offset = 0;
			} else if (isFinite(offset)) {
				offset = offset >>> 0;
				if (isFinite(length)) {
					length = length >>> 0;
					if (encoding === void 0) encoding = "utf8";
				} else {
					encoding = length;
					length = void 0;
				}
			} else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			const remaining = this.length - offset;
			if (length === void 0 || length > remaining) length = remaining;
			if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			if (!encoding) encoding = "utf8";
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "hex": return hexWrite(this, string, offset, length);
				case "utf8":
				case "utf-8": return utf8Write(this, string, offset, length);
				case "ascii":
				case "latin1":
				case "binary": return asciiWrite(this, string, offset, length);
				case "base64": return base64Write(this, string, offset, length);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return ucs2Write(this, string, offset, length);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		};
		Buffer.prototype.toJSON = function toJSON() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		function base64Slice(buf, start, end) {
			if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
			else return base64.fromByteArray(buf.slice(start, end));
		}
		function utf8Slice(buf, start, end) {
			end = Math.min(buf.length, end);
			const res = [];
			let i = start;
			while (i < end) {
				const firstByte = buf[i];
				let codePoint = null;
				let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
				if (i + bytesPerSequence <= end) {
					let secondByte, thirdByte, fourthByte, tempCodePoint;
					switch (bytesPerSequence) {
						case 1:
							if (firstByte < 128) codePoint = firstByte;
							break;
						case 2:
							secondByte = buf[i + 1];
							if ((secondByte & 192) === 128) {
								tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
								if (tempCodePoint > 127) codePoint = tempCodePoint;
							}
							break;
						case 3:
							secondByte = buf[i + 1];
							thirdByte = buf[i + 2];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
								if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
							}
							break;
						case 4:
							secondByte = buf[i + 1];
							thirdByte = buf[i + 2];
							fourthByte = buf[i + 3];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
								if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
							}
					}
				}
				if (codePoint === null) {
					codePoint = 65533;
					bytesPerSequence = 1;
				} else if (codePoint > 65535) {
					codePoint -= 65536;
					res.push(codePoint >>> 10 & 1023 | 55296);
					codePoint = 56320 | codePoint & 1023;
				}
				res.push(codePoint);
				i += bytesPerSequence;
			}
			return decodeCodePointsArray(res);
		}
		const MAX_ARGUMENTS_LENGTH = 4096;
		function decodeCodePointsArray(codePoints) {
			const len = codePoints.length;
			if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
			let res = "";
			let i = 0;
			while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
			return res;
		}
		function asciiSlice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i] & 127);
			return ret;
		}
		function latin1Slice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
			return ret;
		}
		function hexSlice(buf, start, end) {
			const len = buf.length;
			if (!start || start < 0) start = 0;
			if (!end || end < 0 || end > len) end = len;
			let out = "";
			for (let i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
			return out;
		}
		function utf16leSlice(buf, start, end) {
			const bytes = buf.slice(start, end);
			let res = "";
			for (let i = 0; i < bytes.length - 1; i += 2) res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
			return res;
		}
		Buffer.prototype.slice = function slice(start, end) {
			const len = this.length;
			start = ~~start;
			end = end === void 0 ? len : ~~end;
			if (start < 0) {
				start += len;
				if (start < 0) start = 0;
			} else if (start > len) start = len;
			if (end < 0) {
				end += len;
				if (end < 0) end = 0;
			} else if (end > len) end = len;
			if (end < start) end = start;
			const newBuf = this.subarray(start, end);
			Object.setPrototypeOf(newBuf, Buffer.prototype);
			return newBuf;
		};
		function checkOffset(offset, ext, length) {
			if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
			if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
		}
		Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset];
			let mul = 1;
			let i = 0;
			while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
			return val;
		};
		Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset + --byteLength];
			let mul = 1;
			while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
			return val;
		};
		Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			return this[offset];
		};
		Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] | this[offset + 1] << 8;
		};
		Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] << 8 | this[offset + 1];
		};
		Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
		};
		Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
		};
		Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
			const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
			return BigInt(lo) + (BigInt(hi) << BigInt(32));
		});
		Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
			return (BigInt(hi) << BigInt(32)) + BigInt(lo);
		});
		Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let val = this[offset];
			let mul = 1;
			let i = 0;
			while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength);
			return val;
		};
		Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);
			let i = byteLength;
			let mul = 1;
			let val = this[offset + --i];
			while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength);
			return val;
		};
		Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			if (!(this[offset] & 128)) return this[offset];
			return (255 - this[offset] + 1) * -1;
		};
		Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset] | this[offset + 1] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset + 1] | this[offset] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
		};
		Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
		};
		Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
			return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
		});
		Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
		});
		Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, true, 23, 4);
		};
		Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, false, 23, 4);
		};
		Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, true, 52, 8);
		};
		Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, false, 52, 8);
		};
		function checkInt(buf, value, offset, ext, max, min) {
			if (!Buffer.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
			if (value > max || value < min) throw new RangeError("\"value\" argument is out of bounds");
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
		}
		Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength) - 1;
				checkInt(this, value, offset, byteLength, maxBytes, 0);
			}
			let mul = 1;
			let i = 0;
			this[offset] = value & 255;
			while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
			return offset + byteLength;
		};
		Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength = byteLength >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength) - 1;
				checkInt(this, value, offset, byteLength, maxBytes, 0);
			}
			let i = byteLength - 1;
			let mul = 1;
			this[offset + i] = value & 255;
			while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
			return offset + byteLength;
		};
		Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset + 3] = value >>> 24;
			this[offset + 2] = value >>> 16;
			this[offset + 1] = value >>> 8;
			this[offset] = value & 255;
			return offset + 4;
		};
		Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		function wrtBigUInt64LE(buf, value, offset, min, max) {
			checkIntBI(value, min, max, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			return offset;
		}
		function wrtBigUInt64BE(buf, value, offset, min, max) {
			checkIntBI(value, min, max, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset + 7] = lo;
			lo = lo >> 8;
			buf[offset + 6] = lo;
			lo = lo >> 8;
			buf[offset + 5] = lo;
			lo = lo >> 8;
			buf[offset + 4] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset + 3] = hi;
			hi = hi >> 8;
			buf[offset + 2] = hi;
			hi = hi >> 8;
			buf[offset + 1] = hi;
			hi = hi >> 8;
			buf[offset] = hi;
			return offset + 8;
		}
		Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength - 1);
				checkInt(this, value, offset, byteLength, limit - 1, -limit);
			}
			let i = 0;
			let mul = 1;
			let sub = 0;
			this[offset] = value & 255;
			while (++i < byteLength && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
				this[offset + i] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength;
		};
		Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength - 1);
				checkInt(this, value, offset, byteLength, limit - 1, -limit);
			}
			let i = byteLength - 1;
			let mul = 1;
			let sub = 0;
			this[offset + i] = value & 255;
			while (--i >= 0 && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
				this[offset + i] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength;
		};
		Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
			if (value < 0) value = 255 + value + 1;
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			this[offset + 2] = value >>> 16;
			this[offset + 3] = value >>> 24;
			return offset + 4;
		};
		Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			if (value < 0) value = 4294967295 + value + 1;
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		function checkIEEE754(buf, value, offset, ext, max, min) {
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
			if (offset < 0) throw new RangeError("Index out of range");
		}
		function writeFloat(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 4);
			ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
			return offset + 4;
		}
		Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
			return writeFloat(this, value, offset, true, noAssert);
		};
		Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
			return writeFloat(this, value, offset, false, noAssert);
		};
		function writeDouble(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 8);
			ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
			return offset + 8;
		}
		Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
			return writeDouble(this, value, offset, true, noAssert);
		};
		Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
			return writeDouble(this, value, offset, false, noAssert);
		};
		Buffer.prototype.copy = function copy(target, targetStart, start, end) {
			if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
			if (!start) start = 0;
			if (!end && end !== 0) end = this.length;
			if (targetStart >= target.length) targetStart = target.length;
			if (!targetStart) targetStart = 0;
			if (end > 0 && end < start) end = start;
			if (end === start) return 0;
			if (target.length === 0 || this.length === 0) return 0;
			if (targetStart < 0) throw new RangeError("targetStart out of bounds");
			if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
			if (end < 0) throw new RangeError("sourceEnd out of bounds");
			if (end > this.length) end = this.length;
			if (target.length - targetStart < end - start) end = target.length - targetStart + start;
			const len = end - start;
			if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end);
			else GlobalUint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
			return len;
		};
		Buffer.prototype.fill = function fill(val, start, end, encoding) {
			if (typeof val === "string") {
				if (typeof start === "string") {
					encoding = start;
					start = 0;
					end = this.length;
				} else if (typeof end === "string") {
					encoding = end;
					end = this.length;
				}
				if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
				if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
				if (val.length === 1) {
					const code = val.charCodeAt(0);
					if (encoding === "utf8" && code < 128 || encoding === "latin1") val = code;
				}
			} else if (typeof val === "number") val = val & 255;
			else if (typeof val === "boolean") val = Number(val);
			if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
			if (end <= start) return this;
			start = start >>> 0;
			end = end === void 0 ? this.length : end >>> 0;
			if (!val) val = 0;
			let i;
			if (typeof val === "number") for (i = start; i < end; ++i) this[i] = val;
			else {
				const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
				const len = bytes.length;
				if (len === 0) throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
				for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
			}
			return this;
		};
		const errors = {};
		function E(sym, getMessage, Base) {
			errors[sym] = class NodeError extends Base {
				constructor() {
					super();
					Object.defineProperty(this, "message", {
						value: getMessage.apply(this, arguments),
						writable: true,
						configurable: true
					});
					this.name = `${this.name} [${sym}]`;
					this.stack;
					delete this.name;
				}
				get code() {
					return sym;
				}
				set code(value) {
					Object.defineProperty(this, "code", {
						configurable: true,
						enumerable: true,
						value,
						writable: true
					});
				}
				toString() {
					return `${this.name} [${sym}]: ${this.message}`;
				}
			};
		}
		E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
			if (name) return `${name} is outside of buffer bounds`;
			return "Attempt to access memory outside buffer bounds";
		}, RangeError);
		E("ERR_INVALID_ARG_TYPE", function(name, actual) {
			return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
		}, TypeError);
		E("ERR_OUT_OF_RANGE", function(str, range, input) {
			let msg = `The value of "${str}" is out of range.`;
			let received = input;
			if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
			else if (typeof input === "bigint") {
				received = String(input);
				if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
				received += "n";
			}
			msg += ` It must be ${range}. Received ${received}`;
			return msg;
		}, RangeError);
		function addNumericalSeparator(val) {
			let res = "";
			let i = val.length;
			const start = val[0] === "-" ? 1 : 0;
			for (; i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
			return `${val.slice(0, i)}${res}`;
		}
		function checkBounds(buf, offset, byteLength) {
			validateNumber(offset, "offset");
			if (buf[offset] === void 0 || buf[offset + byteLength] === void 0) boundsError(offset, buf.length - (byteLength + 1));
		}
		function checkIntBI(value, min, max, buf, offset, byteLength) {
			if (value > max || value < min) {
				const n = typeof min === "bigint" ? "n" : "";
				let range;
				if (byteLength > 3) if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
				else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength + 1) * 8 - 1}${n}`;
				else range = `>= ${min}${n} and <= ${max}${n}`;
				throw new errors.ERR_OUT_OF_RANGE("value", range, value);
			}
			checkBounds(buf, offset, byteLength);
		}
		function validateNumber(value, name) {
			if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
		}
		function boundsError(value, length, type) {
			if (Math.floor(value) !== value) {
				validateNumber(value, type);
				throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
			}
			if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
			throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
		}
		const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
		function base64clean(str) {
			str = str.split("=")[0];
			str = str.trim().replace(INVALID_BASE64_RE, "");
			if (str.length < 2) return "";
			while (str.length % 4 !== 0) str = str + "=";
			return str;
		}
		function utf8ToBytes(string, units) {
			units = units || Infinity;
			let codePoint;
			const length = string.length;
			let leadSurrogate = null;
			const bytes = [];
			for (let i = 0; i < length; ++i) {
				codePoint = string.charCodeAt(i);
				if (codePoint > 55295 && codePoint < 57344) {
					if (!leadSurrogate) {
						if (codePoint > 56319) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						} else if (i + 1 === length) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						}
						leadSurrogate = codePoint;
						continue;
					}
					if (codePoint < 56320) {
						if ((units -= 3) > -1) bytes.push(239, 191, 189);
						leadSurrogate = codePoint;
						continue;
					}
					codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
				} else if (leadSurrogate) {
					if ((units -= 3) > -1) bytes.push(239, 191, 189);
				}
				leadSurrogate = null;
				if (codePoint < 128) {
					if ((units -= 1) < 0) break;
					bytes.push(codePoint);
				} else if (codePoint < 2048) {
					if ((units -= 2) < 0) break;
					bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
				} else if (codePoint < 65536) {
					if ((units -= 3) < 0) break;
					bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else if (codePoint < 1114112) {
					if ((units -= 4) < 0) break;
					bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else throw new Error("Invalid code point");
			}
			return bytes;
		}
		function asciiToBytes(str) {
			const byteArray = [];
			for (let i = 0; i < str.length; ++i) byteArray.push(str.charCodeAt(i) & 255);
			return byteArray;
		}
		function utf16leToBytes(str, units) {
			let c, hi, lo;
			const byteArray = [];
			for (let i = 0; i < str.length; ++i) {
				if ((units -= 2) < 0) break;
				c = str.charCodeAt(i);
				hi = c >> 8;
				lo = c % 256;
				byteArray.push(lo);
				byteArray.push(hi);
			}
			return byteArray;
		}
		function base64ToBytes(str) {
			return base64.toByteArray(base64clean(str));
		}
		function blitBuffer(src, dst, offset, length) {
			let i;
			for (i = 0; i < length; ++i) {
				if (i + offset >= dst.length || i >= src.length) break;
				dst[i + offset] = src[i];
			}
			return i;
		}
		function isInstance(obj, type) {
			return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
		}
		function numberIsNaN(obj) {
			return obj !== obj;
		}
		const hexSliceLookupTable = (function() {
			const alphabet = "0123456789abcdef";
			const table = new Array(256);
			for (let i = 0; i < 16; ++i) {
				const i16 = i * 16;
				for (let j = 0; j < 16; ++j) table[i16 + j] = alphabet[i] + alphabet[j];
			}
			return table;
		})();
		function defineBigIntMethod(fn) {
			return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
		}
		function BufferBigIntNotDefined() {
			throw new Error("BigInt not supported");
		}
	})(buffer);
	Buffer = buffer.Buffer;
	buffer.Blob;
	buffer.BlobOptions;
	buffer.Buffer;
	buffer.File;
	buffer.FileOptions;
	buffer.INSPECT_MAX_BYTES;
	buffer.SlowBuffer;
	buffer.TranscodeEncoding;
	buffer.atob;
	buffer.btoa;
	buffer.constants;
	buffer.isAscii;
	buffer.isUtf8;
	buffer.kMaxLength;
	buffer.kStringMaxLength;
	buffer.resolveObjectURL;
	buffer.transcode;
}));
//#endregion
//#region node_modules/strip-bom-string/index.js
/*!
* strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
*
* Copyright (c) 2015, 2017, Jon Schlinkert.
* Released under the MIT License.
*/
var require_strip_bom_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(str) {
		if (typeof str === "string" && str.charAt(0) === "﻿") return str.slice(1);
		return str;
	};
}));
//#endregion
//#region node_modules/gray-matter/lib/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	init_dist();
	var stripBom = require_strip_bom_string();
	var typeOf = require_kind_of();
	exports.define = function(obj, key, val) {
		Reflect.defineProperty(obj, key, {
			enumerable: false,
			configurable: true,
			writable: true,
			value: val
		});
	};
	/**
	* Returns true if `val` is a buffer
	*/
	exports.isBuffer = function(val) {
		return typeOf(val) === "buffer";
	};
	/**
	* Returns true if `val` is an object
	*/
	exports.isObject = function(val) {
		return typeOf(val) === "object";
	};
	/**
	* Cast `input` to a buffer
	*/
	exports.toBuffer = function(input) {
		return typeof input === "string" ? Buffer.from(input) : input;
	};
	/**
	* Cast `val` to a string.
	*/
	exports.toString = function(input) {
		if (exports.isBuffer(input)) return stripBom(String(input));
		if (typeof input !== "string") throw new TypeError("expected input to be a string or buffer");
		return stripBom(input);
	};
	/**
	* Cast `val` to an array.
	*/
	exports.arrayify = function(val) {
		return val ? Array.isArray(val) ? val : [val] : [];
	};
	/**
	* Returns true if `str` starts with `substr`.
	*/
	exports.startsWith = function(str, substr, len) {
		if (typeof len !== "number") len = substr.length;
		return str.slice(0, len) === substr;
	};
}));
//#endregion
//#region node_modules/gray-matter/lib/defaults.js
var require_defaults = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var engines = require_engines();
	var utils = require_utils();
	module.exports = function(options) {
		const opts = Object.assign({}, options);
		opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
		if (opts.delimiters.length === 1) opts.delimiters.push(opts.delimiters[0]);
		opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
		opts.engines = Object.assign({}, engines, opts.parsers, opts.engines);
		return opts;
	};
}));
//#endregion
//#region node_modules/gray-matter/lib/engine.js
var require_engine = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(name, options) {
		let engine = options.engines[name] || options.engines[aliase(name)];
		if (typeof engine === "undefined") throw new Error("gray-matter engine \"" + name + "\" is not registered");
		if (typeof engine === "function") engine = { parse: engine };
		return engine;
	};
	function aliase(name) {
		switch (name.toLowerCase()) {
			case "js":
			case "javascript": return "javascript";
			case "coffee":
			case "coffeescript":
			case "cson": return "coffee";
			case "yaml":
			case "yml": return "yaml";
			default: return name;
		}
	}
}));
//#endregion
//#region node_modules/gray-matter/lib/stringify.js
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var typeOf = require_kind_of();
	var getEngine = require_engine();
	var defaults = require_defaults();
	module.exports = function(file, data, options) {
		if (data == null && options == null) switch (typeOf(file)) {
			case "object":
				data = file.data;
				options = {};
				break;
			case "string": return file;
			default: throw new TypeError("expected file to be a string or object");
		}
		const str = file.content;
		const opts = defaults(options);
		if (data == null) {
			if (!opts.data) return file;
			data = opts.data;
		}
		const language = file.language || opts.language;
		const engine = getEngine(language, opts);
		if (typeof engine.stringify !== "function") throw new TypeError("expected \"" + language + ".stringify\" to be a function");
		data = Object.assign({}, file.data, data);
		const open = opts.delimiters[0];
		const close = opts.delimiters[1];
		const matter = engine.stringify(data, options).trim();
		let buf = "";
		if (matter !== "{}") buf = newline(open) + newline(matter) + newline(close);
		if (typeof file.excerpt === "string" && file.excerpt !== "") {
			if (str.indexOf(file.excerpt.trim()) === -1) buf += newline(file.excerpt) + newline(close);
		}
		return buf + newline(str);
	};
	function newline(str) {
		return str.slice(-1) !== "\n" ? str + "\n" : str;
	}
}));
//#endregion
//#region node_modules/gray-matter/lib/excerpt.js
var require_excerpt = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defaults = require_defaults();
	module.exports = function(file, options) {
		const opts = defaults(options);
		if (file.data == null) file.data = {};
		if (typeof opts.excerpt === "function") return opts.excerpt(file, opts);
		const sep = file.data.excerpt_separator || opts.excerpt_separator;
		if (sep == null && (opts.excerpt === false || opts.excerpt == null)) return file;
		const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
		const idx = file.content.indexOf(delimiter);
		if (idx !== -1) file.excerpt = file.content.slice(0, idx);
		return file;
	};
}));
//#endregion
//#region node_modules/gray-matter/lib/to-file.js
var require_to_file = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var typeOf = require_kind_of();
	var stringify = require_stringify();
	var utils = require_utils();
	/**
	* Normalize the given value to ensure an object is returned
	* with the expected properties.
	*/
	module.exports = function(file) {
		if (typeOf(file) !== "object") file = { content: file };
		if (typeOf(file.data) !== "object") file.data = {};
		if (file.contents && file.content == null) file.content = file.contents;
		utils.define(file, "orig", utils.toBuffer(file.content));
		utils.define(file, "language", file.language || "");
		utils.define(file, "matter", file.matter || "");
		utils.define(file, "stringify", function(data, options) {
			if (options && options.language) file.language = options.language;
			return stringify(file, data, options);
		});
		file.content = utils.toString(file.content);
		file.isEmpty = false;
		file.excerpt = "";
		return file;
	};
}));
//#endregion
//#region node_modules/gray-matter/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getEngine = require_engine();
	var defaults = require_defaults();
	module.exports = function(language, str, options) {
		const opts = defaults(options);
		const engine = getEngine(language, opts);
		if (typeof engine.parse !== "function") throw new TypeError("expected \"" + language + ".parse\" to be a function");
		return engine.parse(str, opts);
	};
}));
//#endregion
//#region node_modules/gray-matter/index.js
var require_gray_matter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fs = (init_empty(), __toCommonJS(empty_exports));
	var sections = require_section_matter();
	var defaults = require_defaults();
	var stringify = require_stringify();
	var excerpt = require_excerpt();
	var engines = require_engines();
	var toFile = require_to_file();
	var parse = require_parse();
	var utils = require_utils();
	/**
	* Takes a string or object with `content` property, extracts
	* and parses front-matter from the string, then returns an object
	* with `data`, `content` and other [useful properties](#returned-object).
	*
	* ```js
	* const matter = require('gray-matter');
	* console.log(matter('---\ntitle: Home\n---\nOther stuff'));
	* //=> { data: { title: 'Home'}, content: 'Other stuff' }
	* ```
	* @param {Object|String} `input` String, or object with `content` string
	* @param {Object} `options`
	* @return {Object}
	* @api public
	*/
	function matter(input, options) {
		if (input === "") return {
			data: {},
			content: input,
			excerpt: "",
			orig: input
		};
		let file = toFile(input);
		const cached = matter.cache[file.content];
		if (!options) {
			if (cached) {
				file = Object.assign({}, cached);
				file.orig = cached.orig;
				return file;
			}
			matter.cache[file.content] = file;
		}
		return parseMatter(file, options);
	}
	/**
	* Parse front matter
	*/
	function parseMatter(file, options) {
		const opts = defaults(options);
		const open = opts.delimiters[0];
		const close = "\n" + opts.delimiters[1];
		let str = file.content;
		if (opts.language) file.language = opts.language;
		const openLen = open.length;
		if (!utils.startsWith(str, open, openLen)) {
			excerpt(file, opts);
			return file;
		}
		if (str.charAt(openLen) === open.slice(-1)) return file;
		str = str.slice(openLen);
		const len = str.length;
		const language = matter.language(str, opts);
		if (language.name) {
			file.language = language.name;
			str = str.slice(language.raw.length);
		}
		let closeIndex = str.indexOf(close);
		if (closeIndex === -1) closeIndex = len;
		file.matter = str.slice(0, closeIndex);
		if (file.matter.replace(/^\s*#[^\n]+/gm, "").trim() === "") {
			file.isEmpty = true;
			file.empty = file.content;
			file.data = {};
		} else file.data = parse(file.language, file.matter, opts);
		if (closeIndex === len) file.content = "";
		else {
			file.content = str.slice(closeIndex + close.length);
			if (file.content[0] === "\r") file.content = file.content.slice(1);
			if (file.content[0] === "\n") file.content = file.content.slice(1);
		}
		excerpt(file, opts);
		if (opts.sections === true || typeof opts.section === "function") sections(file, opts.section);
		return file;
	}
	/**
	* Expose engines
	*/
	matter.engines = engines;
	/**
	* Stringify an object to YAML or the specified language, and
	* append it to the given string. By default, only YAML and JSON
	* can be stringified. See the [engines](#engines) section to learn
	* how to stringify other languages.
	*
	* ```js
	* console.log(matter.stringify('foo bar baz', {title: 'Home'}));
	* // results in:
	* // ---
	* // title: Home
	* // ---
	* // foo bar baz
	* ```
	* @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
	* @param {Object} `data` Front matter to stringify.
	* @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
	* @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
	* @api public
	*/
	matter.stringify = function(file, data, options) {
		if (typeof file === "string") file = matter(file, options);
		return stringify(file, data, options);
	};
	/**
	* Synchronously read a file from the file system and parse
	* front matter. Returns the same object as the [main function](#matter).
	*
	* ```js
	* const file = matter.read('./content/blog-post.md');
	* ```
	* @param {String} `filepath` file path of the file to read.
	* @param {Object} `options` [Options](#options) to pass to gray-matter.
	* @return {Object} Returns [an object](#returned-object) with `data` and `content`
	* @api public
	*/
	matter.read = function(filepath, options) {
		const file = matter(fs.readFileSync(filepath, "utf8"), options);
		file.path = filepath;
		return file;
	};
	/**
	* Returns true if the given `string` has front matter.
	* @param  {String} `string`
	* @param  {Object} `options`
	* @return {Boolean} True if front matter exists.
	* @api public
	*/
	matter.test = function(str, options) {
		return utils.startsWith(str, defaults(options).delimiters[0]);
	};
	/**
	* Detect the language to use, if one is defined after the
	* first front-matter delimiter.
	* @param  {String} `string`
	* @param  {Object} `options`
	* @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
	*/
	matter.language = function(str, options) {
		const open = defaults(options).delimiters[0];
		if (matter.test(str)) str = str.slice(open.length);
		const language = str.slice(0, str.search(/\r?\n/));
		return {
			raw: language,
			name: language ? language.trim() : ""
		};
	};
	/**
	* Expose `matter`
	*/
	matter.cache = {};
	matter.clearCache = function() {
		matter.cache = {};
	};
	module.exports = matter;
}));
//#endregion
//#region node_modules/@mdit/plugin-alert/lib/index.js
var import_gray_matter = /* @__PURE__ */ __toESM(require_gray_matter(), 1);
var N = /^>(?:(?: {0,3})| {0,2}\t {0,1})\[!(.*)\]\s*$/i, O = (i, { alertNames: A = [
	"tip",
	"warning",
	"caution",
	"important",
	"note"
], deep: v = !1, openRender: M, closeRender: I, titleRender: y } = {}) => {
	const R = (e, s, o, T) => {
		if (e.sCount[s] - e.blkIndent >= 4 || e.level !== 0 && !v) return !1;
		const S = e.bMarks[s] + e.tShift[s], $ = e.eMarks[s];
		if (e.src.charAt(S) !== ">") return !1;
		const f = N.exec(e.src.slice(S, $));
		if (!f || !A.includes(f[1].toLowerCase())) return !1;
		if (T) return !0;
		const k = f[1].toLowerCase(), p = [], b = [], h = [], u = [], q = e.lineMax, J = e.parentType, L = e.md.block.ruler.getRules("alert");
		e.parentType = "alert";
		let t;
		for (t = s + 1; t < o; t++) {
			let r = !1, x = !1, a = e.bMarks[t] + e.tShift[t];
			const m = e.eMarks[t], E = e.sCount[t] < e.blkIndent;
			if (a >= m) break;
			if (e.src.charAt(a++) === ">" && !E) {
				let l, c = e.sCount[t] + 1;
				e.src.charAt(a) === " " ? (a++, c++, r = !1, l = !0) : e.src.charAt(a) === "	" ? (l = !0, (e.bsCount[t] + c) % 4 === 3 ? (a++, c++, r = !1) : r = !0) : l = !1;
				let d = c;
				for (p.push(e.bMarks[t]), e.bMarks[t] = a; a < m;) {
					const g = e.src.charAt(a);
					if (g === "	") d += 4 - (d + e.bsCount[t] + (r ? 1 : 0)) % 4;
					else if (g === " ") d++;
					else break;
					a++;
				}
				x = a >= m, b.push(e.bsCount[t]), e.bsCount[t] = e.sCount[t] + 1 + (l ? 1 : 0), h.push(e.sCount[t]), e.sCount[t] = d - c, u.push(e.tShift[t]), e.tShift[t] = a - e.bMarks[t];
				continue;
			}
			if (x) break;
			let _ = !1;
			for (const l of L) if (l(e, t, o, !0)) {
				_ = !0;
				break;
			}
			if (_) {
				e.lineMax = t, e.blkIndent !== 0 && (p.push(e.bMarks[t]), b.push(e.bsCount[t]), u.push(e.tShift[t]), h.push(e.sCount[t]), e.sCount[t] -= e.blkIndent);
				break;
			}
			p.push(e.bMarks[t]), b.push(e.bsCount[t]), u.push(e.tShift[t]), h.push(e.sCount[t]), e.sCount[t] = -1;
		}
		const j = e.blkIndent;
		e.blkIndent = 0;
		const z = [s, s + 1], w = [s + 1, 0], C = e.push("alert_open", "div", 1);
		C.markup = k, C.attrJoin("class", `markdown-alert markdown-alert-${k}`), C.map = w;
		const n = e.push("alert_title", "", 0);
		n.attrJoin("class", "markdown-alert-title"), n.markup = k, n.content = f[1], n.map = z, e.md.block.tokenize(e, s + 1, t);
		const B = e.push("alert_close", "div", -1);
		B.markup = k, e.lineMax = q, e.parentType = J, w[1] = e.line;
		for (let r = 0; r < u.length; r++) e.bMarks[r + s] = p[r], e.tShift[r + s] = u[r], e.sCount[r + s] = h[r], e.bsCount[r + s] = b[r];
		return e.blkIndent = j, !0;
	};
	i.block.ruler.before("blockquote", "alert", R, { alt: [
		"paragraph",
		"reference",
		"blockquote",
		"list"
	] }), M && (i.renderer.rules.alert_open = M), I && (i.renderer.rules.alert_close = I), i.renderer.rules.alert_title = y ?? ((e, s) => {
		const o = e[s];
		return `<p class="markdown-alert-title">${o.content[0].toUpperCase() + o.content.substring(1).toLowerCase()}</p>
`;
	});
};
//#endregion
//#region src/components/markdown-it-plugins/markdown-it-plugin-img-src-abs-online.js
function getDirectoryName(path) {
	const parts = path.split("/");
	parts.pop();
	return parts.join("/");
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
function imgSrcAbsOnline(md) {
	const defaultRender = md.renderer.rules.image || function(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	};
	md.renderer.rules.image = function(tokens, idx, options, env, self) {
		const token = tokens[idx];
		if (token.meta == void 0) token.meta = {};
		let srcValue = token.attrGet("src");
		if (!srcValue.startsWith("http")) if (env?.filePath) {
			const filePath = getDirectoryName(env.filePath) + "/" + srcValue;
			token.meta.filePath = filePath;
			token.attrSet("src", filePath);
		} else console.log("no env information found to build path from.");
		return defaultRender(tokens, idx, options, env, self);
	};
}
//#endregion
//#region src/components/markdown-it-plugins/markdown-rendering.js
es_default.registerLanguage("cpp", cpp);
es_default.registerLanguage("c++", cpp);
es_default.registerLanguage("css", css);
var mditHighlightFn = function(str, lang) {
	if (lang && es_default.getLanguage(lang)) try {
		return es_default.highlight(str, { language: lang }).value;
	} catch (__) {
		console.log(__);
	}
	return "";
};
var md_online_options = {
	eval: false,
	html: true,
	linkify: true,
	typographer: true,
	highlight: mditHighlightFn
};
var mdo = new MarkdownIt(md_online_options);
mdo.use(O, { alertNames: [
	"important",
	"note",
	"tip",
	"warning",
	"caution",
	"wichtig",
	"achtung",
	"warnung",
	"notiz",
	"info"
] });
mdo.use(imgSrcAbsOnline);
var preProcessingMD = (source) => {
	return (0, import_gray_matter.default)(source, {
		eval: false,
		excerpt_separator: "<!-- more_details -->"
	});
};
var md2html = (source, filePath = void 0) => {
	const processedObj = preProcessingMD(source);
	const env = { filePath };
	let tokens = mdo.parse(processedObj.content, env);
	return mdo.renderer.render(tokens, mdo.options, env);
};
//#endregion
//#region src/components/MDComponents/MyMarkdown.vue
var _hoisted_1 = { class: "my-markdown-wrapper" };
var _sfc_main = {
	__name: "MyMarkdown",
	props: {
		source: String,
		filePath: String
	},
	setup(__props) {
		const props = __props;
		const contentHTML = ref("");
		watchEffect(async () => {
			contentHTML.value = await md2html(props.source, props.filePath);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [contentHTML.value ? (openBlock(), createBlock(resolveDynamicComponent({ template: contentHTML.value }), { key: 0 })) : createCommentVNode("", true)]);
		};
	}
};
//#endregion
export { css as n, cpp as r, _sfc_main as t };
