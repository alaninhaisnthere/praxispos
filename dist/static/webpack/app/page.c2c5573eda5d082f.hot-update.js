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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CourseSection = ()=>{\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 800);\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto my-5 px-4 md:px-0\",\n        children: [\n            isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-extrabold uppercase text-2xl text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text\",\n                    children: [\n                        \"A Pr\\xe1xis tem o curso certo para alavancar a sua carreira!\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined),\n                        \"Confira:\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-8 pb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-extrabold uppercase text-5xl text-center text-pretty tracking-wide text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-8 py-4 bg-clip-text\",\n                    children: [\n                        \"A Pr\\xe1xis tem o curso certo para alavancar a sua carreira!\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, undefined),\n                        \"Confira:\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center bg-[#0a2e4d] py-5 rounded-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/Enfermagem.png\",\n                                    width: 300,\n                                    height: 200,\n                                    alt: \"Enfermagem\",\n                                    className: \"rounded-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold mb-2 uppercase text-white\",\n                                children: \"Enfermagem\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"text-white uppercase tracking-wide hover:scale-105 transition-transform duration-300 ease-in-out\",\n                                children: \"Saiba Mais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center bg-[#0a2e4d] py-5 rounded-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/Biomedicina.png\",\n                                    width: 300,\n                                    height: 200,\n                                    alt: \"Biomedicina\",\n                                    className: \"rounded-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold mb-2 uppercase text-white\",\n                                children: \"Biomedicina\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"text-white uppercase tracking-wide hover:scale-105 transition-transform duration-300 ease-in-out\",\n                                children: \"Saiba Mais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center bg-[#0a2e4d] py-5 rounded-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/Farm\\xe1cia.png\",\n                                    width: 300,\n                                    height: 200,\n                                    alt: \"Farm\\xe1cia\",\n                                    className: \"rounded-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold mb-2 uppercase text-white\",\n                                children: \"Farm\\xe1cia\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"text-white uppercase tracking-wide hover:scale-105 transition-transform duration-300 ease-in-out\",\n                                children: \"Saiba Mais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\components\\\\CoursesSection\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CourseSection, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n_c = CourseSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseSection);\nvar _c;\n$RefreshReg$(_c, \"CourseSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvdXJzZXNTZWN0aW9uL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNiO0FBQ1U7QUFFekMsTUFBTUksZ0JBQWdCOztJQUNsQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVU7SUFFbERELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sZUFBZTtZQUNqQkQsWUFBWUUsT0FBT0MsVUFBVSxJQUFJO1FBQ3JDO1FBRUFGO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU87WUFDSEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFHTCxxQkFDSSw4REFBQ0s7UUFBUUMsV0FBVTs7WUFDZFIseUJBQ0csOERBQUNTO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDRTtvQkFBR0YsV0FBVTs7d0JBQXVJO3NDQUVqSiw4REFBQ0c7Ozs7O3dCQUFLOzs7Ozs7Ozs7OzswQ0FJWiw4REFBQ0Y7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFVOzt3QkFBK0o7c0NBRXpLLDhEQUFDRzs7Ozs7d0JBQUs7Ozs7Ozs7Ozs7OzswQkFLbEIsOERBQUNGO2dCQUFJRCxXQUFVOztrQ0FHWCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDWCw0RUFBQ1gsa0RBQUtBO29DQUFDZSxLQUFJO29DQUFrQkMsT0FBTztvQ0FBS0MsUUFBUTtvQ0FBS0MsS0FBSTtvQ0FBYVAsV0FBVTs7Ozs7Ozs7Ozs7MENBRXJGLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBbUQ7Ozs7OzswQ0FDakUsOERBQUNWLDBEQUFNQTtnQ0FBQ1UsV0FBVTswQ0FBbUc7Ozs7Ozs7Ozs7OztrQ0FNekgsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNYLGtEQUFLQTtvQ0FBQ2UsS0FBSTtvQ0FBbUJDLE9BQU87b0NBQUtDLFFBQVE7b0NBQUtDLEtBQUk7b0NBQWNQLFdBQVU7Ozs7Ozs7Ozs7OzBDQUV2Riw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQW1EOzs7Ozs7MENBQ2pFLDhEQUFDViwwREFBTUE7Z0NBQUNVLFdBQVU7MENBQW1HOzs7Ozs7Ozs7Ozs7a0NBTXpILDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNYLDRFQUFDWCxrREFBS0E7b0NBQUNlLEtBQUk7b0NBQWdCQyxPQUFPO29DQUFLQyxRQUFRO29DQUFLQyxLQUFJO29DQUFXUCxXQUFVOzs7Ozs7Ozs7OzswQ0FFakYsOERBQUNRO2dDQUFHUixXQUFVOzBDQUFtRDs7Ozs7OzBDQUNqRSw4REFBQ1YsMERBQU1BO2dDQUFDVSxXQUFVOzBDQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pJO0dBekVNVDtLQUFBQTtBQTJFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3Vyc2VzU2VjdGlvbi9pbmRleC50c3g/OWJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IENvdXJzZVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gODAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTUgcHgtNCBtZDpweC0wXCI+XHJcbiAgICAgICAgICAgIHtpc01vYmlsZSA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRleHQtMnhsIHRleHQtY2VudGVyIHRleHQtcHJldHR5IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciB0by1bIzE5NjE5M10gZnJvbS1bI0FBOEU0Ql0gYmctY2xpcC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgUHLDoXhpcyB0ZW0gbyBjdXJzbyBjZXJ0byBwYXJhIGFsYXZhbmNhciBhIHN1YSBjYXJyZWlyYSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcmE6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggcGItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB1cHBlcmNhc2UgdGV4dC01eGwgdGV4dC1jZW50ZXIgdGV4dC1wcmV0dHkgdHJhY2tpbmctd2lkZSB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgdG8tWyMxOTYxOTNdIGZyb20tWyNBQThFNEJdIHB4LTggcHktNCBiZy1jbGlwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBQcsOheGlzIHRlbSBvIGN1cnNvIGNlcnRvIHBhcmEgYWxhdmFuY2FyIGEgc3VhIGNhcnJlaXJhIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlyYTpcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVuZmVybWFnZW0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLVsjMGEyZTRkXSBweS01IHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvRW5mZXJtYWdlbS5wbmdcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezIwMH0gYWx0PVwiRW5mZXJtYWdlbVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yIHVwcGVyY2FzZSB0ZXh0LXdoaXRlXCI+RW5mZXJtYWdlbTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2FpYmEgTWFpc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJpb21lZGljaW5hICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1bIzBhMmU0ZF0gcHktNSByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL0Jpb21lZGljaW5hLnBuZ1wiIHdpZHRoPXszMDB9IGhlaWdodD17MjAwfSBhbHQ9XCJCaW9tZWRpY2luYVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yIHVwcGVyY2FzZSB0ZXh0LXdoaXRlXCI+QmlvbWVkaWNpbmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhaWJhIE1haXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBGYXJtw6FjaWEgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLVsjMGEyZTRkXSBweS01IHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvRmFybcOhY2lhLnBuZ1wiIHdpZHRoPXszMDB9IGhlaWdodD17MjAwfSBhbHQ9XCJGYXJtw6FjaWFcIiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMiB1cHBlcmNhc2UgdGV4dC13aGl0ZVwiPkZhcm3DoWNpYTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2FpYmEgTWFpc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkJ1dHRvbiIsIkNvdXJzZVNlY3Rpb24iLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiYnIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CoursesSection/index.tsx\n"));

/***/ })

});