"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layout/Menus/ProgramMenu.tsx":
/*!******************************************!*\
  !*** ./src/layout/Menus/ProgramMenu.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgramMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ProgramMenu() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        /*************  ✨ Codeium Command ⭐  *************/ /**\n     * Handle click outside of menu.\n     *\n     * @param {MouseEvent} event The mouse event.\n     */ /******  25041520-120f-48ab-9dae-5267a5c7a325  *******/ const handleClickOutside = (event)=>{\n            if (menuRef.current && !menuRef.current.contains(event.target)) {\n                setIsOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        ref: menuRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400\",\n                onClick: toggleMenu,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Programs\"\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-4 w-4 transition-transform \".concat(isOpen ? \"rotate-180\" : \"\"),\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: 2,\n                            d: \"M19 9l-7 7-7-7\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown-menu w-64\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-1\",\n                    role: \"menu\",\n                    \"aria-orientation\": \"vertical\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/swahili-tech-women\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Swahili Tech Women\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/case-management\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Case Management\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/events\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Events\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/campus_ambassador\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Campus Ambassador\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/mombasa-tourism-innovation-lab\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Mombasa Tourism Innovation Lab\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/programs/young-business-executive-fellowship\",\n                            className: \"dropdown-item hover:text-primary dark:hover:text-blue-400\",\n                            role: \"menuitem\",\n                            children: \"Young Business Executive Fellowship\"\n                        }, void 0, false, {\n                            fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/iann/swahilipot/swahilipot-samples/project/src/layout/Menus/ProgramMenu.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(ProgramMenu, \"yIsVPXmGJnWJAXf4YKobPzEQ+oo=\");\n_c = ProgramMenu;\nvar _c;\n$RefreshReg$(_c, \"ProgramMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L01lbnVzL1Byb2dyYW1NZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDdkI7QUFFZCxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1PLFVBQVVOLDZDQUFNQSxDQUFpQjtJQUV2QyxNQUFNTyxhQUFhO1FBQ2pCRixVQUFVLENBQUNEO0lBQ2I7SUFFQUgsZ0RBQVNBLENBQUM7UUFDWixpREFBaUQsR0FDN0M7Ozs7S0FJQyxHQUNMLHFEQUFxRCxHQUNqRCxNQUFNTyxxQkFBcUIsQ0FBQ0M7WUFDMUIsSUFBSUgsUUFBUUksT0FBTyxJQUFJLENBQUNKLFFBQVFJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQVc7Z0JBQ3RFUCxVQUFVO1lBQ1o7UUFDRjtRQUVBUSxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUN2QyxPQUFPO1lBQ0xLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzVDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7UUFBV0MsS0FBS1o7OzBCQUM3Qiw4REFBQ2E7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLFNBQVNiOztrQ0FFVCw4REFBQ2M7a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0M7d0JBQ0NDLE9BQU07d0JBQ05OLFdBQVcsZ0NBQTJELE9BQTNCYixTQUFTLGVBQWU7d0JBQ25Fb0IsTUFBSzt3QkFDTEMsU0FBUTt3QkFDUkMsUUFBTztrQ0FFUCw0RUFBQ0M7NEJBQUtDLGVBQWM7NEJBQVFDLGdCQUFlOzRCQUFRQyxhQUFhOzRCQUFHQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztZQUl4RTNCLHdCQUNDLDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7b0JBQU9lLE1BQUs7b0JBQU9DLG9CQUFpQjs7c0NBQ2pELDhEQUFDL0Isa0RBQUlBOzRCQUNIZ0MsTUFBSzs0QkFDTGpCLFdBQVU7NEJBQ1ZlLE1BQUs7c0NBQ047Ozs7OztzQ0FHRCw4REFBQzlCLGtEQUFJQTs0QkFDSGdDLE1BQUs7NEJBQ0xqQixXQUFVOzRCQUNWZSxNQUFLO3NDQUNOOzs7Ozs7c0NBR0QsOERBQUM5QixrREFBSUE7NEJBQ0hnQyxNQUFLOzRCQUNMakIsV0FBVTs0QkFDVmUsTUFBSztzQ0FDTjs7Ozs7O3NDQUdELDhEQUFDOUIsa0RBQUlBOzRCQUNIZ0MsTUFBSzs0QkFDTGpCLFdBQVU7NEJBQ1ZlLE1BQUs7c0NBQ047Ozs7OztzQ0FHRCw4REFBQzlCLGtEQUFJQTs0QkFDSGdDLE1BQUs7NEJBQ0xqQixXQUFVOzRCQUNWZSxNQUFLO3NDQUNOOzs7Ozs7c0NBR0QsOERBQUM5QixrREFBSUE7NEJBQ0hnQyxNQUFLOzRCQUNMakIsV0FBVTs0QkFDVmUsTUFBSztzQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWhHd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L01lbnVzL1Byb2dyYW1NZW51LnRzeD83ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyYW1NZW51KCkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBtZW51UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuLyoqKioqKioqKioqKiogIOKcqCBDb2RlaXVtIENvbW1hbmQg4q2QICAqKioqKioqKioqKioqL1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjbGljayBvdXRzaWRlIG9mIG1lbnUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFRoZSBtb3VzZSBldmVudC5cbiAgICAgKi9cbi8qKioqKiogIDI1MDQxNTIwLTEyMGYtNDhhYi05ZGFlLTUyNjdhNWM3YTMyNSAgKioqKioqKi9cbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChtZW51UmVmLmN1cnJlbnQgJiYgIW1lbnVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgcmVmPXttZW51UmVmfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIGhvdmVyOnRleHQtcHJpbWFyeSBkYXJrOmhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5Qcm9ncmFtczwvc3Bhbj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtpc09wZW4gPyAncm90YXRlLTE4MCcgOiAnJ31gfVxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTE5IDlsLTcgNy03LTdcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHctNjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9wcm9ncmFtcy9zd2FoaWxpLXRlY2gtd29tZW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIGhvdmVyOnRleHQtcHJpbWFyeSBkYXJrOmhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTd2FoaWxpIFRlY2ggV29tZW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvcHJvZ3JhbXMvY2FzZS1tYW5hZ2VtZW50XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBob3Zlcjp0ZXh0LXByaW1hcnkgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSBNYW5hZ2VtZW50XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL3Byb2dyYW1zL2V2ZW50c1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gaG92ZXI6dGV4dC1wcmltYXJ5IGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9wcm9ncmFtcy9jYW1wdXNfYW1iYXNzYWRvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gaG92ZXI6dGV4dC1wcmltYXJ5IGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbXB1cyBBbWJhc3NhZG9yXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL3Byb2dyYW1zL21vbWJhc2EtdG91cmlzbS1pbm5vdmF0aW9uLWxhYlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gaG92ZXI6dGV4dC1wcmltYXJ5IGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1vbWJhc2EgVG91cmlzbSBJbm5vdmF0aW9uIExhYlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9wcm9ncmFtcy95b3VuZy1idXNpbmVzcy1leGVjdXRpdmUtZmVsbG93c2hpcFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gaG92ZXI6dGV4dC1wcmltYXJ5IGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFlvdW5nIEJ1c2luZXNzIEV4ZWN1dGl2ZSBGZWxsb3dzaGlwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkxpbmsiLCJQcm9ncmFtTWVudSIsImlzT3BlbiIsInNldElzT3BlbiIsIm1lbnVSZWYiLCJ0b2dnbGVNZW51IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInJvbGUiLCJhcmlhLW9yaWVudGF0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Menus/ProgramMenu.tsx\n"));

/***/ })

});