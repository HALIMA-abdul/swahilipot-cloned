"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./src/components/blog/Articles.tsx":
/*!******************************************!*\
  !*** ./src/components/blog/Articles.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ArticleCard(param) {\n    let { title, excerpt, author, date, image, slug, category } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-48 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: title,\n                    className: \"w-full h-full object-cover transition-transform hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm text-primary font-medium\",\n                                children: date\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs bg-light px-2 py-1 rounded-full\",\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-3\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 mb-4\",\n                        children: excerpt\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-8 h-8 rounded-full bg-gray-200 mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm text-gray-600\",\n                                        children: [\n                                            \"By \",\n                                            author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://medium.com/@swahilipotengineering\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"text-primary font-medium hover:underline\",\n                                children: \"Read more →\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ArticleCard;\nfunction Articles() {\n    // This would typically come from your data file or CMS\n    const articles = [\n        {\n            title: \"How Technology is Transforming East African Communities\",\n            excerpt: \"Exploring the impact of digital innovation on local communities and economies in East Africa.\",\n            author: \"John Doe\",\n            date: \"March 15, 2025\",\n            image: \"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"technology-transforming-east-africa\",\n            category: \"Technology\"\n        },\n        {\n            title: \"The Rise of Women in Tech: SwahiliPot's Impact\",\n            excerpt: \"How our Swahili Tech Women program is helping bridge the gender gap in technology fields.\",\n            author: \"Jane Smith\",\n            date: \"March 10, 2025\",\n            image: \"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"women-in-tech-swahilipot-impact\",\n            category: \"Women in Tech\"\n        },\n        {\n            title: \"Preserving Cultural Heritage Through Digital Means\",\n            excerpt: \"How technology is being used to document and preserve traditional Swahili culture for future generations.\",\n            author: \"Mary Johnson\",\n            date: \"March 5, 2025\",\n            image: \"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"preserving-culture-through-digital\",\n            category: \"Arts & Culture\"\n        },\n        {\n            title: \"Youth Innovation: Success Stories from Our Hub\",\n            excerpt: \"Highlighting the achievements of young entrepreneurs who started their journey at SwahiliPot Hub.\",\n            author: \"David Mwangi\",\n            date: \"February 28, 2025\",\n            image: \"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"youth-innovation-success-stories\",\n            category: \"Success Stories\"\n        },\n        {\n            title: \"The Future of Education in East Africa\",\n            excerpt: \"How digital learning and skills development are reshaping educational opportunities for youth.\",\n            author: \"Sarah Ochieng\",\n            date: \"February 20, 2025\",\n            image: \"https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"future-education-east-africa\",\n            category: \"Education\"\n        },\n        {\n            title: \"Building Sustainable Tech Communities\",\n            excerpt: \"Lessons learned from creating and nurturing a thriving technology ecosystem in Mombasa.\",\n            author: \"Robert Kimani\",\n            date: \"February 15, 2025\",\n            image: \"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"building-sustainable-tech-communities\",\n            category: \"Community\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16 bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-custom mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\",\n                    children: articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArticleCard, {\n                            title: article.title,\n                            excerpt: article.excerpt,\n                            author: article.author,\n                            date: article.date,\n                            image: article.image,\n                            slug: article.slug,\n                            category: article.category\n                        }, index, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-12 flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"inline-flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-primary text-white\",\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Articles;\nvar _c, _c1;\n$RefreshReg$(_c, \"ArticleCard\");\n$RefreshReg$(_c1, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9nL0FydGljbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBWUEsU0FBU0EsWUFBWSxLQUFxRTtRQUFyRSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQWdCLEdBQXJFO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUNDQyxLQUFLTjtvQkFDTE8sS0FBS1g7b0JBQ0xRLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQW9DTDs7Ozs7OzBDQUNwRCw4REFBQ1M7Z0NBQUtKLFdBQVU7MENBQTJDRjs7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ087d0JBQUdMLFdBQVU7a0NBQThCUjs7Ozs7O2tDQUM1Qyw4REFBQ2M7d0JBQUVOLFdBQVU7a0NBQXNCUDs7Ozs7O2tDQUNuQyw4REFBQ007d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzs7Ozs7a0RBQ2YsOERBQUNJO3dDQUFLSixXQUFVOzs0Q0FBd0I7NENBQUlOOzs7Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQ2E7Z0NBQ0FDLE1BQUs7Z0NBQ0hDLFFBQU87Z0NBQ05DLEtBQUk7Z0NBQ0hWLFdBQVU7MENBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRRDtLQW5DU1Q7QUFxQ00sU0FBU29CO0lBQ3RCLHVEQUF1RDtJQUN2RCxNQUFNQyxXQUFXO1FBQ2Y7WUFDRXBCLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0lBRUQscUJBQ0UsOERBQUNlO1FBQVFiLFdBQVU7a0JBQ2pCLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pZLFNBQVNFLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUN6Qjs0QkFFQ0MsT0FBT3VCLFFBQVF2QixLQUFLOzRCQUNwQkMsU0FBU3NCLFFBQVF0QixPQUFPOzRCQUN4QkMsUUFBUXFCLFFBQVFyQixNQUFNOzRCQUN0QkMsTUFBTW9CLFFBQVFwQixJQUFJOzRCQUNsQkMsT0FBT21CLFFBQVFuQixLQUFLOzRCQUNwQkMsTUFBTWtCLFFBQVFsQixJQUFJOzRCQUNsQkMsVUFBVWlCLFFBQVFqQixRQUFROzJCQVByQmtCOzs7Ozs7Ozs7OzhCQVlYLDhEQUFDakI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNpQjt3QkFBSWpCLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVIsV0FBVTswQ0FBMkY7Ozs7OzswQ0FHakgsOERBQUNPO2dDQUFFQyxNQUFLO2dDQUFJUixXQUFVOzBDQUFrRDs7Ozs7OzBDQUd4RSw4REFBQ087Z0NBQUVDLE1BQUs7Z0NBQUlSLFdBQVU7MENBQTJGOzs7Ozs7MENBR2pILDhEQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVIsV0FBVTswQ0FBMkY7Ozs7OzswQ0FHakgsOERBQUNPO2dDQUFFQyxNQUFLO2dDQUFJUixXQUFVOzBDQUEyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3SDtNQW5Hd0JXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jsb2cvQXJ0aWNsZXMudHN4P2RiYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW50ZXJmYWNlIEFydGljbGVQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBBcnRpY2xlQ2FyZCh7IHRpdGxlLCBleGNlcnB0LCBhdXRob3IsIGRhdGUsIGltYWdlLCBzbHVnLCBjYXRlZ29yeSB9OiBBcnRpY2xlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBzcmM9e2ltYWdlfSBcbiAgICAgICAgICBhbHQ9e3RpdGxlfSBcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW1cIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBiZy1saWdodCBweC0yIHB5LTEgcm91bmRlZC1mdWxsXCI+e2NhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItM1wiPnt0aXRsZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTIwMCBtci0yXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5CeSB7YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0Bzd2FoaWxpcG90ZW5naW5lZXJpbmdcIlxuICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtIGhvdmVyOnVuZGVybGluZVwiXG4+XG4gIFJlYWQgbW9yZSDihpJcbjwvYT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpIHtcbiAgLy8gVGhpcyB3b3VsZCB0eXBpY2FsbHkgY29tZSBmcm9tIHlvdXIgZGF0YSBmaWxlIG9yIENNU1xuICBjb25zdCBhcnRpY2xlcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJIb3cgVGVjaG5vbG9neSBpcyBUcmFuc2Zvcm1pbmcgRWFzdCBBZnJpY2FuIENvbW11bml0aWVzXCIsXG4gICAgICBleGNlcnB0OiBcIkV4cGxvcmluZyB0aGUgaW1wYWN0IG9mIGRpZ2l0YWwgaW5ub3ZhdGlvbiBvbiBsb2NhbCBjb21tdW5pdGllcyBhbmQgZWNvbm9taWVzIGluIEVhc3QgQWZyaWNhLlwiLFxuICAgICAgYXV0aG9yOiBcIkpvaG4gRG9lXCIsXG4gICAgICBkYXRlOiBcIk1hcmNoIDE1LCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTQ4MjYxNTcxMy0yYWZkNjkwOTc5OTg/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJ0ZWNobm9sb2d5LXRyYW5zZm9ybWluZy1lYXN0LWFmcmljYVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiVGVjaG5vbG9neVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUaGUgUmlzZSBvZiBXb21lbiBpbiBUZWNoOiBTd2FoaWxpUG90J3MgSW1wYWN0XCIsXG4gICAgICBleGNlcnB0OiBcIkhvdyBvdXIgU3dhaGlsaSBUZWNoIFdvbWVuIHByb2dyYW0gaXMgaGVscGluZyBicmlkZ2UgdGhlIGdlbmRlciBnYXAgaW4gdGVjaG5vbG9neSBmaWVsZHMuXCIsXG4gICAgICBhdXRob3I6IFwiSmFuZSBTbWl0aFwiLFxuICAgICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyNVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzMxNjQ3MTM5ODgtODY2NWZjOTYzMDk1P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODBcIixcbiAgICAgIHNsdWc6IFwid29tZW4taW4tdGVjaC1zd2FoaWxpcG90LWltcGFjdFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiV29tZW4gaW4gVGVjaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQcmVzZXJ2aW5nIEN1bHR1cmFsIEhlcml0YWdlIFRocm91Z2ggRGlnaXRhbCBNZWFuc1wiLFxuICAgICAgZXhjZXJwdDogXCJIb3cgdGVjaG5vbG9neSBpcyBiZWluZyB1c2VkIHRvIGRvY3VtZW50IGFuZCBwcmVzZXJ2ZSB0cmFkaXRpb25hbCBTd2FoaWxpIGN1bHR1cmUgZm9yIGZ1dHVyZSBnZW5lcmF0aW9ucy5cIixcbiAgICAgIGF1dGhvcjogXCJNYXJ5IEpvaG5zb25cIixcbiAgICAgIGRhdGU6IFwiTWFyY2ggNSwgMjAyNVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjA2NjE0MTkyMDEtZmQ0Y2VjZGY4YThiP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODBcIixcbiAgICAgIHNsdWc6IFwicHJlc2VydmluZy1jdWx0dXJlLXRocm91Z2gtZGlnaXRhbFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQXJ0cyAmIEN1bHR1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiWW91dGggSW5ub3ZhdGlvbjogU3VjY2VzcyBTdG9yaWVzIGZyb20gT3VyIEh1YlwiLFxuICAgICAgZXhjZXJwdDogXCJIaWdobGlnaHRpbmcgdGhlIGFjaGlldmVtZW50cyBvZiB5b3VuZyBlbnRyZXByZW5ldXJzIHdobyBzdGFydGVkIHRoZWlyIGpvdXJuZXkgYXQgU3dhaGlsaVBvdCBIdWIuXCIsXG4gICAgICBhdXRob3I6IFwiRGF2aWQgTXdhbmdpXCIsXG4gICAgICBkYXRlOiBcIkZlYnJ1YXJ5IDI4LCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMzI0MDc5NTYxMi05YTA1NGIwZGI2NDQ/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJ5b3V0aC1pbm5vdmF0aW9uLXN1Y2Nlc3Mtc3Rvcmllc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiU3VjY2VzcyBTdG9yaWVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRoZSBGdXR1cmUgb2YgRWR1Y2F0aW9uIGluIEVhc3QgQWZyaWNhXCIsXG4gICAgICBleGNlcnB0OiBcIkhvdyBkaWdpdGFsIGxlYXJuaW5nIGFuZCBza2lsbHMgZGV2ZWxvcG1lbnQgYXJlIHJlc2hhcGluZyBlZHVjYXRpb25hbCBvcHBvcnR1bml0aWVzIGZvciB5b3V0aC5cIixcbiAgICAgIGF1dGhvcjogXCJTYXJhaCBPY2hpZW5nXCIsXG4gICAgICBkYXRlOiBcIkZlYnJ1YXJ5IDIwLCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwOTA2MjUyMjI0Ni0zNzU1OTc3OTI3ZDc/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJmdXR1cmUtZWR1Y2F0aW9uLWVhc3QtYWZyaWNhXCIsXG4gICAgICBjYXRlZ29yeTogXCJFZHVjYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQnVpbGRpbmcgU3VzdGFpbmFibGUgVGVjaCBDb21tdW5pdGllc1wiLFxuICAgICAgZXhjZXJwdDogXCJMZXNzb25zIGxlYXJuZWQgZnJvbSBjcmVhdGluZyBhbmQgbnVydHVyaW5nIGEgdGhyaXZpbmcgdGVjaG5vbG9neSBlY29zeXN0ZW0gaW4gTW9tYmFzYS5cIixcbiAgICAgIGF1dGhvcjogXCJSb2JlcnQgS2ltYW5pXCIsXG4gICAgICBkYXRlOiBcIkZlYnJ1YXJ5IDE1LCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzI0NTM4NjgwNy1iYjQzZjgyYzMzYzQ/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJidWlsZGluZy1zdXN0YWluYWJsZS10ZWNoLWNvbW11bml0aWVzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDb21tdW5pdHlcIlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWxpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b20gbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEFydGljbGVDYXJkIFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgZXhjZXJwdD17YXJ0aWNsZS5leGNlcnB0fVxuICAgICAgICAgICAgICBhdXRob3I9e2FydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICBkYXRlPXthcnRpY2xlLmRhdGV9XG4gICAgICAgICAgICAgIGltYWdlPXthcnRpY2xlLmltYWdlfVxuICAgICAgICAgICAgICBzbHVnPXthcnRpY2xlLnNsdWd9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXthcnRpY2xlLmNhdGVnb3J5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInB4LTMgcHktMiBteC0xIHJvdW5kZWQtbWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHgtMyBweS0yIG14LTEgcm91bmRlZC1tZCBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJweC0zIHB5LTIgbXgtMSByb3VuZGVkLW1kIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHgtMyBweS0yIG14LTEgcm91bmRlZC1tZCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInB4LTMgcHktMiBteC0xIHJvdW5kZWQtbWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQXJ0aWNsZUNhcmQiLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3IiLCJkYXRlIiwiaW1hZ2UiLCJzbHVnIiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiaDMiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJBcnRpY2xlcyIsImFydGljbGVzIiwic2VjdGlvbiIsIm1hcCIsImFydGljbGUiLCJpbmRleCIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/blog/Articles.tsx\n"));

/***/ })

});