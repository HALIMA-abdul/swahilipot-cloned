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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ArticleCard(param) {\n    let { title, excerpt, author, date, image, slug, category } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-48 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: title,\n                    className: \"w-full h-full object-cover transition-transform hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm text-primary font-medium\",\n                                children: date\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs bg-light px-2 py-1 rounded-full\",\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-3\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 mb-4\",\n                        children: excerpt\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-8 h-8 rounded-full bg-gray-200 mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm text-gray-600\",\n                                        children: [\n                                            \"By \",\n                                            author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://medium.com/@swahilipotengineering\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"text-primary font-medium hover:underline\",\n                                children: \"Read more →\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ArticleCard;\nfunction Articles() {\n    // This would typically come from your data file or CMS\n    const articles = [\n        {\n            title: \"How Technology is Transforming East African Communities\",\n            excerpt: \"Exploring the impact of digital innovation on local communities and economies in East Africa.\",\n            author: \"John Doe\",\n            date: \"March 15, 2025\",\n            image: \"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"technology-transforming-east-africa\",\n            category: \"Technology\"\n        },\n        {\n            title: \"The Rise of Women in Tech: SwahiliPot's Impact\",\n            excerpt: \"How our Swahili Tech Women program is helping bridge the gender gap in technology fields.\",\n            author: \"Jane Smith\",\n            date: \"March 10, 2025\",\n            image: \"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"women-in-tech-swahilipot-impact\",\n            category: \"Women in Tech\"\n        },\n        {\n            title: \"Preserving Cultural Heritage Through Digital Means\",\n            excerpt: \"How technology is being used to document and preserve traditional Swahili culture for future generations.\",\n            author: \"Mary Johnson\",\n            date: \"March 5, 2025\",\n            image: \"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"preserving-culture-through-digital\",\n            category: \"Arts & Culture\"\n        },\n        {\n            title: \"Youth Innovation: Success Stories from Our Hub\",\n            excerpt: \"Highlighting the achievements of young entrepreneurs who started their journey at SwahiliPot Hub.\",\n            author: \"David Mwangi\",\n            date: \"February 28, 2025\",\n            image: \"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"youth-innovation-success-stories\",\n            category: \"Success Stories\"\n        },\n        {\n            title: \"The Future of Education in East Africa\",\n            excerpt: \"How digital learning and skills development are reshaping educational opportunities for youth.\",\n            author: \"Sarah Ochieng\",\n            date: \"February 20, 2025\",\n            image: \"https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"future-education-east-africa\",\n            category: \"Education\"\n        },\n        {\n            title: \"Building Sustainable Tech Communities\",\n            excerpt: \"Lessons learned from creating and nurturing a thriving technology ecosystem in Mombasa.\",\n            author: \"Robert Kimani\",\n            date: \"February 15, 2025\",\n            image: \"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80\",\n            slug: \"building-sustainable-tech-communities\",\n            category: \"Community\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16 bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-custom mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\",\n                    children: articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArticleCard, {\n                            title: article.title,\n                            excerpt: article.excerpt,\n                            author: article.author,\n                            date: article.date,\n                            image: article.image,\n                            slug: article.slug,\n                            category: article.category\n                        }, index, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-12 flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"inline-flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-primary text-white\",\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"px-3 py-2 mx-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/components/blog/Articles.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Articles;\nvar _c, _c1;\n$RefreshReg$(_c, \"ArticleCard\");\n$RefreshReg$(_c1, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9nL0FydGljbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBWUEsU0FBU0EsWUFBWSxLQUFxRTtRQUFyRSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQWdCLEdBQXJFO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUNDQyxLQUFLTjtvQkFDTE8sS0FBS1g7b0JBQ0xRLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQW9DTDs7Ozs7OzBDQUNwRCw4REFBQ1M7Z0NBQUtKLFdBQVU7MENBQTJDRjs7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ087d0JBQUdMLFdBQVU7a0NBQThCUjs7Ozs7O2tDQUM1Qyw4REFBQ2M7d0JBQUVOLFdBQVU7a0NBQXNCUDs7Ozs7O2tDQUNuQyw4REFBQ007d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzs7Ozs7a0RBQ2YsOERBQUNJO3dDQUFLSixXQUFVOzs0Q0FBd0I7NENBQUlOOzs7Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQ2E7Z0NBQ0FDLE1BQUs7Z0NBQ0hDLFFBQU87Z0NBQ05DLEtBQUk7Z0NBQ0hWLFdBQVU7MENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0tBbkNTVDtBQXFDTSxTQUFTb0I7SUFDdEIsdURBQXVEO0lBQ3ZELE1BQU1DLFdBQVc7UUFDZjtZQUNFcEIsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ2U7UUFBUWIsV0FBVTtrQkFDakIsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWlksU0FBU0UsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ3pCOzRCQUVDQyxPQUFPdUIsUUFBUXZCLEtBQUs7NEJBQ3BCQyxTQUFTc0IsUUFBUXRCLE9BQU87NEJBQ3hCQyxRQUFRcUIsUUFBUXJCLE1BQU07NEJBQ3RCQyxNQUFNb0IsUUFBUXBCLElBQUk7NEJBQ2xCQyxPQUFPbUIsUUFBUW5CLEtBQUs7NEJBQ3BCQyxNQUFNa0IsUUFBUWxCLElBQUk7NEJBQ2xCQyxVQUFVaUIsUUFBUWpCLFFBQVE7MkJBUHJCa0I7Ozs7Ozs7Ozs7OEJBWVgsOERBQUNqQjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2lCO3dCQUFJakIsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFFQyxNQUFLO2dDQUFJUixXQUFVOzBDQUEyRjs7Ozs7OzBDQUdqSCw4REFBQ087Z0NBQUVDLE1BQUs7Z0NBQUlSLFdBQVU7MENBQWtEOzs7Ozs7MENBR3hFLDhEQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVIsV0FBVTswQ0FBMkY7Ozs7OzswQ0FHakgsOERBQUNPO2dDQUFFQyxNQUFLO2dDQUFJUixXQUFVOzBDQUEyRjs7Ozs7OzBDQUdqSCw4REFBQ087Z0NBQUVDLE1BQUs7Z0NBQUlSLFdBQVU7MENBQTJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdIO01Bbkd3QlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy9BcnRpY2xlcy50c3g/ZGJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgQXJ0aWNsZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZXhjZXJwdDogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEFydGljbGVDYXJkKHsgdGl0bGUsIGV4Y2VycHQsIGF1dGhvciwgZGF0ZSwgaW1hZ2UsIHNsdWcsIGNhdGVnb3J5IH06IEFydGljbGVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQ4IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIHNyYz17aW1hZ2V9IFxuICAgICAgICAgIGFsdD17dGl0bGV9IFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcHJpbWFyeSBmb250LW1lZGl1bVwiPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLWxpZ2h0IHB4LTIgcHktMSByb3VuZGVkLWZ1bGxcIj57Y2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0zXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntleGNlcnB0fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIG1yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkJ5IHthdXRob3J9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQHN3YWhpbGlwb3RlbmdpbmVlcmluZ1wiXG4gICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICBSZWFkIG1vcmUg4oaSXG4gICAgPC9hPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzKCkge1xuICAvLyBUaGlzIHdvdWxkIHR5cGljYWxseSBjb21lIGZyb20geW91ciBkYXRhIGZpbGUgb3IgQ01TXG4gIGNvbnN0IGFydGljbGVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhvdyBUZWNobm9sb2d5IGlzIFRyYW5zZm9ybWluZyBFYXN0IEFmcmljYW4gQ29tbXVuaXRpZXNcIixcbiAgICAgIGV4Y2VycHQ6IFwiRXhwbG9yaW5nIHRoZSBpbXBhY3Qgb2YgZGlnaXRhbCBpbm5vdmF0aW9uIG9uIGxvY2FsIGNvbW11bml0aWVzIGFuZCBlY29ub21pZXMgaW4gRWFzdCBBZnJpY2EuXCIsXG4gICAgICBhdXRob3I6IFwiSm9obiBEb2VcIixcbiAgICAgIGRhdGU6IFwiTWFyY2ggMTUsIDIwMjVcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMxNDgyNjE1NzEzLTJhZmQ2OTA5Nzk5OD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCIsXG4gICAgICBzbHVnOiBcInRlY2hub2xvZ3ktdHJhbnNmb3JtaW5nLWVhc3QtYWZyaWNhXCIsXG4gICAgICBjYXRlZ29yeTogXCJUZWNobm9sb2d5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRoZSBSaXNlIG9mIFdvbWVuIGluIFRlY2g6IFN3YWhpbGlQb3QncyBJbXBhY3RcIixcbiAgICAgIGV4Y2VycHQ6IFwiSG93IG91ciBTd2FoaWxpIFRlY2ggV29tZW4gcHJvZ3JhbSBpcyBoZWxwaW5nIGJyaWRnZSB0aGUgZ2VuZGVyIGdhcCBpbiB0ZWNobm9sb2d5IGZpZWxkcy5cIixcbiAgICAgIGF1dGhvcjogXCJKYW5lIFNtaXRoXCIsXG4gICAgICBkYXRlOiBcIk1hcmNoIDEwLCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3MzE2NDcxMzk4OC04NjY1ZmM5NjMwOTU/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJ3b21lbi1pbi10ZWNoLXN3YWhpbGlwb3QtaW1wYWN0XCIsXG4gICAgICBjYXRlZ29yeTogXCJXb21lbiBpbiBUZWNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByZXNlcnZpbmcgQ3VsdHVyYWwgSGVyaXRhZ2UgVGhyb3VnaCBEaWdpdGFsIE1lYW5zXCIsXG4gICAgICBleGNlcnB0OiBcIkhvdyB0ZWNobm9sb2d5IGlzIGJlaW5nIHVzZWQgdG8gZG9jdW1lbnQgYW5kIHByZXNlcnZlIHRyYWRpdGlvbmFsIFN3YWhpbGkgY3VsdHVyZSBmb3IgZnV0dXJlIGdlbmVyYXRpb25zLlwiLFxuICAgICAgYXV0aG9yOiBcIk1hcnkgSm9obnNvblwiLFxuICAgICAgZGF0ZTogXCJNYXJjaCA1LCAyMDI1XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2MDY2MTQxOTIwMS1mZDRjZWNkZjhhOGI/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiLFxuICAgICAgc2x1ZzogXCJwcmVzZXJ2aW5nLWN1bHR1cmUtdGhyb3VnaC1kaWdpdGFsXCIsXG4gICAgICBjYXRlZ29yeTogXCJBcnRzICYgQ3VsdHVyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJZb3V0aCBJbm5vdmF0aW9uOiBTdWNjZXNzIFN0b3JpZXMgZnJvbSBPdXIgSHViXCIsXG4gICAgICBleGNlcnB0OiBcIkhpZ2hsaWdodGluZyB0aGUgYWNoaWV2ZW1lbnRzIG9mIHlvdW5nIGVudHJlcHJlbmV1cnMgd2hvIHN0YXJ0ZWQgdGhlaXIgam91cm5leSBhdCBTd2FoaWxpUG90IEh1Yi5cIixcbiAgICAgIGF1dGhvcjogXCJEYXZpZCBNd2FuZ2lcIixcbiAgICAgIGRhdGU6IFwiRmVicnVhcnkgMjgsIDIwMjVcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIzMjQwNzk1NjEyLTlhMDU0YjBkYjY0ND9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCIsXG4gICAgICBzbHVnOiBcInlvdXRoLWlubm92YXRpb24tc3VjY2Vzcy1zdG9yaWVzXCIsXG4gICAgICBjYXRlZ29yeTogXCJTdWNjZXNzIFN0b3JpZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVGhlIEZ1dHVyZSBvZiBFZHVjYXRpb24gaW4gRWFzdCBBZnJpY2FcIixcbiAgICAgIGV4Y2VycHQ6IFwiSG93IGRpZ2l0YWwgbGVhcm5pbmcgYW5kIHNraWxscyBkZXZlbG9wbWVudCBhcmUgcmVzaGFwaW5nIGVkdWNhdGlvbmFsIG9wcG9ydHVuaXRpZXMgZm9yIHlvdXRoLlwiLFxuICAgICAgYXV0aG9yOiBcIlNhcmFoIE9jaGllbmdcIixcbiAgICAgIGRhdGU6IFwiRmVicnVhcnkgMjAsIDIwMjVcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA5MDYyNTIyMjQ2LTM3NTU5Nzc5MjdkNz9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCIsXG4gICAgICBzbHVnOiBcImZ1dHVyZS1lZHVjYXRpb24tZWFzdC1hZnJpY2FcIixcbiAgICAgIGNhdGVnb3J5OiBcIkVkdWNhdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCdWlsZGluZyBTdXN0YWluYWJsZSBUZWNoIENvbW11bml0aWVzXCIsXG4gICAgICBleGNlcnB0OiBcIkxlc3NvbnMgbGVhcm5lZCBmcm9tIGNyZWF0aW5nIGFuZCBudXJ0dXJpbmcgYSB0aHJpdmluZyB0ZWNobm9sb2d5IGVjb3N5c3RlbSBpbiBNb21iYXNhLlwiLFxuICAgICAgYXV0aG9yOiBcIlJvYmVydCBLaW1hbmlcIixcbiAgICAgIGRhdGU6IFwiRmVicnVhcnkgMTUsIDIwMjVcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3MjQ1Mzg2ODA3LWJiNDNmODJjMzNjND9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCIsXG4gICAgICBzbHVnOiBcImJ1aWxkaW5nLXN1c3RhaW5hYmxlLXRlY2gtY29tbXVuaXRpZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNvbW11bml0eVwiXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbGlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbSBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QXJ0aWNsZUNhcmQgXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICBleGNlcnB0PXthcnRpY2xlLmV4Y2VycHR9XG4gICAgICAgICAgICAgIGF1dGhvcj17YXJ0aWNsZS5hdXRob3J9XG4gICAgICAgICAgICAgIGRhdGU9e2FydGljbGUuZGF0ZX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuaW1hZ2V9XG4gICAgICAgICAgICAgIHNsdWc9e2FydGljbGUuc2x1Z31cbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e2FydGljbGUuY2F0ZWdvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHgtMyBweS0yIG14LTEgcm91bmRlZC1tZCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJweC0zIHB5LTIgbXgtMSByb3VuZGVkLW1kIGJnLXByaW1hcnkgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInB4LTMgcHktMiBteC0xIHJvdW5kZWQtbWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJweC0zIHB5LTIgbXgtMSByb3VuZGVkLW1kIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHgtMyBweS0yIG14LTEgcm91bmRlZC1tZCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJBcnRpY2xlQ2FyZCIsInRpdGxlIiwiZXhjZXJwdCIsImF1dGhvciIsImRhdGUiLCJpbWFnZSIsInNsdWciLCJjYXRlZ29yeSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJoMyIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIkFydGljbGVzIiwiYXJ0aWNsZXMiLCJzZWN0aW9uIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4IiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/blog/Articles.tsx\n"));

/***/ })

});