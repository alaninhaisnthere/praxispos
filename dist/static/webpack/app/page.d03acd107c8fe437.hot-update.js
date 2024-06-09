"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/CoursesSection/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/CoursesSection/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst CoursesSection = (param)=>{\n    let { isMobile } = param;\n    const courses = [\n        {\n            name: \"Enfermagem\",\n            image: \"/Enfermagem.png\"\n        },\n        {\n            name: \"Biomedicina\",\n            image: \"/Biomedicina.png\"\n        },\n        {\n            name: \"Farm\\xe1cia\",\n            image: \"/Farm\\xe1cia.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-4 \".concat(isMobile ? \"items-center\" : \"items-center\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-extrabold uppercase text-2xl text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text \".concat(isMobile ? \"text-2xl\" : \"text-5xl\"),\n                children: \"A Pr\\xe1xis tem o curso certo para alavancar a sua carreira! Confira:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex \".concat(isMobile ? \"flex-col items-center gap-4\" : \"py-5 justify-center gap-8 pb-8\"),\n                children: [\n                    courses.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(isMobile ? \"flex flex-col items-center\" : \"flex flex-col items-center\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: course.image,\n                                            alt: course.name,\n                                            width: isMobile ? 500 : 1000,\n                                            height: isMobile ? 500 : 1000\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center mt-2 \".concat(isMobile ? \"text-lg font-bold\" : \"text-lg font-bold\"),\n                                            children: course.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined),\n                                !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    size: \"lg\",\n                                    variant: \"default\",\n                                    className: \"mt-2\",\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"Saiba Mais\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)),\n                    isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        size: \"lg\",\n                        variant: \"default\",\n                        className: \"mt-4\",\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Saiba Mais\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CoursesSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursesSection);\nvar _c;\n$RefreshReg$(_c, \"CoursesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvdXJzZXNTZWN0aW9uL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTBCO0FBQ0s7QUFDVTtBQUV6QyxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQXlCO0lBQ3pELE1BQU1DLFVBQVU7UUFDZDtZQUFFQyxNQUFNO1lBQWNDLE9BQU87UUFBa0I7UUFDL0M7WUFBRUQsTUFBTTtZQUFlQyxPQUFPO1FBQW1CO1FBQ2pEO1lBQUVELE1BQU07WUFBWUMsT0FBTztRQUFnQjtLQUM1QztJQUVELHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXLFFBQW1ELE9BQTNDTCxXQUFXLGlCQUFpQjs7MEJBQ3RELDhEQUFDTTtnQkFBR0QsV0FBVyx3SUFBMkssT0FBbkNMLFdBQVcsYUFBYTswQkFBYzs7Ozs7OzBCQUc3TCw4REFBQ087Z0JBQUlGLFdBQVcsUUFBb0YsT0FBNUVMLFdBQVcsZ0NBQWdDOztvQkFDaEVDLFFBQVFPLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNIOzRCQUFnQkYsV0FBVyxHQUEwRSxPQUF2RUwsV0FBVywrQkFBK0I7OzhDQUN2RSw4REFBQ087b0NBQUlGLFdBQVU7O3NEQUNiLDhEQUFDUixrREFBS0E7NENBQ0pjLEtBQUtGLE9BQU9OLEtBQUs7NENBQ2pCUyxLQUFLSCxPQUFPUCxJQUFJOzRDQUNoQlcsT0FBT2IsV0FBVyxNQUFNOzRDQUN4QmMsUUFBUWQsV0FBVyxNQUFNOzs7Ozs7c0RBRTNCLDhEQUFDZTs0Q0FBRVYsV0FBVyxvQkFBeUUsT0FBckRMLFdBQVcsc0JBQXNCO3NEQUF3QlMsT0FBT1AsSUFBSTs7Ozs7Ozs7Ozs7O2dDQUV2RyxDQUFDRiwwQkFDQSw4REFBQ0YsMERBQU1BO29DQUFDa0IsTUFBSztvQ0FBS0MsU0FBUTtvQ0FBVVosV0FBVTtvQ0FBT2EsT0FBTzs4Q0FDMUQsNEVBQUNDO3dDQUFFQyxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7MkJBWlJWOzs7OztvQkFpQlhWLDBCQUNDLDhEQUFDRiwwREFBTUE7d0JBQUNrQixNQUFLO3dCQUFLQyxTQUFRO3dCQUFVWixXQUFVO3dCQUFPYSxPQUFPO2tDQUMxRCw0RUFBQ0M7NEJBQUVDLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0tBdkNNckI7QUF5Q04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291cnNlc1NlY3Rpb24vaW5kZXgudHN4PzliZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBDb3Vyc2VzU2VjdGlvbiA9ICh7IGlzTW9iaWxlIH06IHsgaXNNb2JpbGU6IGJvb2xlYW4gfSkgPT4ge1xyXG4gIGNvbnN0IGNvdXJzZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRW5mZXJtYWdlbVwiLCBpbWFnZTogXCIvRW5mZXJtYWdlbS5wbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJpb21lZGljaW5hXCIsIGltYWdlOiBcIi9CaW9tZWRpY2luYS5wbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm3DoWNpYVwiLCBpbWFnZTogXCIvRmFybcOhY2lhLnBuZ1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHB5LTQgJHtpc01vYmlsZSA/IFwiaXRlbXMtY2VudGVyXCIgOiBcIml0ZW1zLWNlbnRlclwifWB9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtgZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRleHQtMnhsIHRleHQtY2VudGVyIHRleHQtcHJldHR5IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciB0by1bIzE5NjE5M10gZnJvbS1bI0FBOEU0Ql0gYmctY2xpcC10ZXh0ICR7aXNNb2JpbGUgPyBcInRleHQtMnhsXCIgOiBcInRleHQtNXhsXCJ9YH0+XHJcbiAgICAgICAgQSBQcsOheGlzIHRlbSBvIGN1cnNvIGNlcnRvIHBhcmEgYWxhdmFuY2FyIGEgc3VhIGNhcnJlaXJhISBDb25maXJhOlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggJHtpc01vYmlsZSA/IFwiZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCIgOiBcInB5LTUganVzdGlmeS1jZW50ZXIgZ2FwLTggcGItOFwifWB9PlxyXG4gICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2Ake2lzTW9iaWxlID8gXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIDogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvdXJzZS5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17Y291cnNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17aXNNb2JpbGUgPyA1MDAgOiAxMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtpc01vYmlsZSA/IDUwMCA6IDEwMDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBtdC0yICR7aXNNb2JpbGUgPyBcInRleHQtbGcgZm9udC1ib2xkXCIgOiBcInRleHQtbGcgZm9udC1ib2xkXCJ9YH0+e2NvdXJzZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cImRlZmF1bHRcIiBjbGFzc05hbWU9XCJtdC0yXCIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2FpYmEgTWFpczwvYT5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwibXQtNFwiIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2FpYmEgTWFpczwvYT5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkJ1dHRvbiIsIkNvdXJzZXNTZWN0aW9uIiwiaXNNb2JpbGUiLCJjb3Vyc2VzIiwibmFtZSIsImltYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwibWFwIiwiY291cnNlIiwiaW5kZXgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJzaXplIiwidmFyaWFudCIsImFzQ2hpbGQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CoursesSection/index.tsx\n"));

/***/ })

});