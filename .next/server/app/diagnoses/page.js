(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'diagnoses',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7150)), "C:\\Users\\naoya tomizawa\\OneDrive\\VScode\\共同作成ツール\\app\\diagnoses\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4515)), "C:\\Users\\naoya tomizawa\\OneDrive\\VScode\\共同作成ツール\\app\\diagnoses\\layout.tsx"],
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\naoya tomizawa\\OneDrive\\VScode\\共同作成ツール\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\naoya tomizawa\\OneDrive\\VScode\\共同作成ツール\\app\\diagnoses\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/diagnoses/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/diagnoses/page",
        pathname: "/diagnoses",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2376:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8747))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiagnosesPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function DiagnosesPage() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMounted(true);
    }, []);
    const categories = [
        {
            id: "all",
            name: "すべて",
            emoji: "\uD83C\uDF1F"
        },
        {
            id: "love",
            name: "恋愛",
            emoji: "\uD83D\uDC95"
        },
        {
            id: "personality",
            name: "性格",
            emoji: "\uD83C\uDFAD"
        },
        {
            id: "lifestyle",
            name: "ライフスタイル",
            emoji: "\uD83C\uDF08"
        },
        {
            id: "work",
            name: "仕事",
            emoji: "\uD83D\uDCBC"
        },
        {
            id: "friendship",
            name: "友情",
            emoji: "\uD83D\uDC6D"
        }
    ];
    const diagnoses = [
        {
            id: "love-communication",
            title: "恋愛コミュニケーション診断",
            description: "20問で分かる！あなたの恋愛キャラは？",
            emoji: "\uD83D\uDC95",
            color: "from-pink-400 to-purple-500",
            category: "love",
            trending: true,
            questions: 20,
            time: "5分",
            difficulty: "普通"
        },
        {
            id: "personality-color",
            title: "性格カラー診断",
            description: "あなたの内面を彩るパーソナルカラー",
            emoji: "\uD83C\uDFA8",
            color: "from-blue-400 to-cyan-500",
            category: "personality",
            trending: false,
            questions: 15,
            time: "3分",
            difficulty: "簡単"
        },
        {
            id: "lifestyle-type",
            title: "ライフスタイル診断",
            description: "あなたにぴったりの生活スタイルを発見",
            emoji: "\uD83C\uDF1F",
            color: "from-yellow-400 to-orange-500",
            category: "lifestyle",
            trending: false,
            questions: 12,
            time: "4分",
            difficulty: "簡単"
        },
        {
            id: "friendship-type",
            title: "友情タイプ診断",
            description: "あなたの友達との関係性を分析",
            emoji: "\uD83D\uDC6D",
            color: "from-green-400 to-teal-500",
            category: "friendship",
            trending: false,
            questions: 18,
            time: "5分",
            difficulty: "普通"
        },
        {
            id: "work-style",
            title: "働き方診断",
            description: "あなたに合った働き方を見つけよう",
            emoji: "\uD83D\uDCBC",
            color: "from-indigo-400 to-purple-500",
            category: "work",
            trending: false,
            questions: 16,
            time: "4分",
            difficulty: "普通"
        },
        {
            id: "love-language",
            title: "愛情表現診断",
            description: "あなたの愛情表現のタイプを知る",
            emoji: "\uD83D\uDC9D",
            color: "from-red-400 to-pink-500",
            category: "love",
            trending: false,
            questions: 10,
            time: "3分",
            difficulty: "簡単"
        },
        {
            id: "communication-style",
            title: "コミュニケーションスタイル診断",
            description: "あなたの伝え方のクセを分析",
            emoji: "\uD83D\uDCAC",
            color: "from-purple-400 to-pink-500",
            category: "personality",
            trending: false,
            questions: 14,
            time: "4分",
            difficulty: "普通"
        },
        {
            id: "stress-type",
            title: "ストレスタイプ診断",
            description: "あなたのストレス耐性と対処法",
            emoji: "\uD83D\uDE0C",
            color: "from-teal-400 to-blue-500",
            category: "lifestyle",
            trending: false,
            questions: 20,
            time: "6分",
            difficulty: "難しい"
        },
        {
            id: "career-aptitude",
            title: "適職診断",
            description: "あなたに合った職業を見つけよう",
            emoji: "\uD83C\uDFAF",
            color: "from-orange-400 to-red-500",
            category: "work",
            trending: false,
            questions: 25,
            time: "7分",
            difficulty: "難しい"
        }
    ];
    const filteredDiagnoses = selectedCategory === "all" ? diagnoses : diagnoses.filter((d)=>d.category === selectedCategory);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-2xl",
                                        children: "\uD83C\uDF1F"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl font-bold gradient-text",
                                        children: "うらないの森"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "hidden md:flex space-x-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "text-gray-600 hover:text-pink-500 transition-colors",
                                        children: "トップ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "text-gray-600 hover:text-pink-500 transition-colors",
                                        children: "診断一覧"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "text-gray-600 hover:text-pink-500 transition-colors",
                                        children: "マイページ"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-16 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-4xl md:text-5xl font-bold gradient-text mb-6",
                                    children: "診断一覧"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl text-gray-600 mb-8",
                                    children: "気になる診断で、新しい自分を発見しよう"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>setSelectedCategory(category.id),
                                    className: `group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${selectedCategory === category.id ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500 border border-pink-200"}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-lg",
                                            children: category.emoji
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-medium",
                                            children: category.name
                                        })
                                    ]
                                }, category.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "pb-20 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: filteredDiagnoses.map((diagnosis, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/diagnosis/${diagnosis.id}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                        style: {
                                            transitionDelay: `${index * 100}ms`
                                        },
                                        children: [
                                            diagnosis.trending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute top-4 right-4 z-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse",
                                                    children: "\uD83D\uDD25 人気"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `h-40 bg-gradient-to-br ${diagnosis.color} relative overflow-hidden`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute inset-0 bg-white/20 backdrop-blur-sm"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-7xl",
                                                            children: diagnosis.emoji
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute top-3 left-3 text-2xl animate-float",
                                                        children: "✨"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute bottom-3 right-3 text-xl animate-float delay-200",
                                                        children: "\uD83D\uDCAB"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors",
                                                        children: diagnosis.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-gray-600 mb-4 line-clamp-2",
                                                        children: diagnosis.description
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center justify-between text-sm text-gray-500 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        children: [
                                                                            "\uD83D\uDCDD ",
                                                                            diagnosis.questions,
                                                                            "問"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        children: [
                                                                            "⏱️ ",
                                                                            diagnosis.time
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `px-2 py-1 rounded-full text-xs ${diagnosis.difficulty === "簡単" ? "bg-green-100 text-green-600" : diagnosis.difficulty === "普通" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`,
                                                                children: diagnosis.difficulty
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: [
                                                                    categories.find((c)=>c.id === diagnosis.category)?.emoji,
                                                                    " ",
                                                                    categories.find((c)=>c.id === diagnosis.category)?.name
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-pink-500 group-hover:text-pink-600 transition-colors font-medium",
                                                                children: "はじめる →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, diagnosis.id))
                        }),
                        filteredDiagnoses.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-6xl mb-4",
                                    children: "\uD83D\uDD0D"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-2",
                                    children: "診断が見つかりません"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-600",
                                    children: "別のカテゴリーを試してみてください"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 4515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiagnosesLayout)
/* harmony export */ });
function DiagnosesLayout({ children }) {
    return children;
}


/***/ }),

/***/ 7150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\naoya tomizawa\OneDrive\VScode\共同作成ツール\app\diagnoses\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [500,440,353], () => (__webpack_exec__(805)));
module.exports = __webpack_exports__;

})();