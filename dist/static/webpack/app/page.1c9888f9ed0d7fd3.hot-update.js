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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDropleftCircle,IoIosArrowDroprightCircle!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FloatingButton */ \"(app-pages-browser)/./src/components/FloatingButton/index.tsx\");\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ScrollToTop */ \"(app-pages-browser)/./src/components/ScrollToTop/index.tsx\");\n/* harmony import */ var _components_CoursesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CoursesSection */ \"(app-pages-browser)/./src/components/CoursesSection/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst images = [\n    {\n        desktop: \"/home01.png\",\n        mobile: \"/home01-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home02.png\",\n        mobile: \"/home02-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home03.png\",\n        mobile: \"/home03-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home04.png\",\n        mobile: \"/home04-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home05.png\",\n        mobile: \"/home05-mobile.png\",\n        link: \"https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE=\"\n    },\n    {\n        desktop: \"/home06.png\",\n        mobile: \"/home06-mobile.png\",\n        link: \"/\"\n    }\n];\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 800);\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const handleImageClick = (link)=>{\n        router.push(link);\n    };\n    const renderArrowPrev = (onClickHandler, hasPrev, label)=>hasPrev && !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: onClickHandler,\n            className: \"absolute top-1/2 transform -translate-y-1/2 translate-x-6 left-0 z-10 p-2\",\n            \"aria-label\": label,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosArrowDropleftCircle, {\n                color: \"#FAFAFA\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined);\n    const renderArrowNext = (onClickHandler, hasNext, label)=>hasNext && !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: onClickHandler,\n            className: \"absolute top-1/2 transform -translate-y-1/2 -translate-x-6 right-0 z-10 p-2\",\n            \"aria-label\": label,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosArrowDroprightCircle, {\n                color: \"#FAFAFA\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px] overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                    showThumbs: false,\n                    showStatus: false,\n                    infiniteLoop: true,\n                    autoPlay: true,\n                    interval: 5000,\n                    transitionTime: 500,\n                    swipeable: true,\n                    emulateTouch: true,\n                    dynamicHeight: false,\n                    renderArrowPrev: renderArrowPrev,\n                    renderArrowNext: renderArrowNext,\n                    children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: image.link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"relative cursor-pointer\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                handleImageClick(image.link);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: isMobile ? image.mobile : image.desktop,\n                                    alt: \"Image \".concat(index + 1),\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoursesSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"pqqXOEAIE6UbqleU6zHY5ziUVow=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TU07O1FBQ1dYLHNEQUFTQTs7O0tBRHBCVztBQXNHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3BsZWZ0Q2lyY2xlLCBJb0lvc0Fycm93RHJvcHJpZ2h0Q2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5pbXBvcnQgRmxvYXRpbmdCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9GbG9hdGluZ0J1dHRvblwiO1xyXG5pbXBvcnQgU2Nyb2xsVG9Ub3BCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9TY3JvbGxUb1RvcFwiO1xyXG5pbXBvcnQgQ291cnNlU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0NvdXJzZXNTZWN0aW9uXCI7XHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgeyBkZXNrdG9wOiBcIi9ob21lMDEucG5nXCIsIG1vYmlsZTogXCIvaG9tZTAxLW1vYmlsZS5wbmdcIiwgbGluazogXCIvXCIgfSxcclxuICB7IGRlc2t0b3A6IFwiL2hvbWUwMi5wbmdcIiwgbW9iaWxlOiBcIi9ob21lMDItbW9iaWxlLnBuZ1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gIHsgZGVza3RvcDogXCIvaG9tZTAzLnBuZ1wiLCBtb2JpbGU6IFwiL2hvbWUwMy1tb2JpbGUucG5nXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgeyBkZXNrdG9wOiBcIi9ob21lMDQucG5nXCIsIG1vYmlsZTogXCIvaG9tZTA0LW1vYmlsZS5wbmdcIiwgbGluazogXCIvXCIgfSxcclxuICB7XHJcbiAgICBkZXNrdG9wOiBcIi9ob21lMDUucG5nXCIsIG1vYmlsZTogXCIvaG9tZTA1LW1vYmlsZS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9lbWVjLm1lYy5nb3YuYnIvZW1lYy9jb25zdWx0YS1jYWRhc3Ryby9kZXRhbGhhbWVudG8vZDk2OTU3ZjQ1NWY2NDA1ZDE0YzY1NDI1NTJiMGY2ZWIvTVRreU9EUT0vOTM5MTYzMTZhYmUyMzE0ODUwN2JkNGMyNjBlNGI4NzgvTnpBMU1ERT1cIlxyXG4gIH0sXHJcbiAgeyBkZXNrdG9wOiBcIi9ob21lMDYucG5nXCIsIG1vYmlsZTogXCIvaG9tZTA2LW1vYmlsZS5wbmdcIiwgbGluazogXCIvXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChsaW5rOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGxpbmspO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckFycm93UHJldiA9IChvbkNsaWNrSGFuZGxlcjogKCkgPT4gdm9pZCwgaGFzUHJldjogYm9vbGVhbiwgbGFiZWw6IHN0cmluZykgPT5cclxuICAgIGhhc1ByZXYgJiYgIWlzTW9iaWxlICYmIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdHJhbnNsYXRlLXgtNiBsZWZ0LTAgei0xMCBwLTJcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElvSW9zQXJyb3dEcm9wbGVmdENpcmNsZSBjb2xvcj1cIiNGQUZBRkFcIiBzaXplPXszMH0gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxuICBjb25zdCByZW5kZXJBcnJvd05leHQgPSAob25DbGlja0hhbmRsZXI6ICgpID0+IHZvaWQsIGhhc05leHQ6IGJvb2xlYW4sIGxhYmVsOiBzdHJpbmcpID0+XHJcbiAgICBoYXNOZXh0ICYmICFpc01vYmlsZSAmJiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIC10cmFuc2xhdGUteC02IHJpZ2h0LTAgei0xMCBwLTJcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElvSW9zQXJyb3dEcm9wcmlnaHRDaXJjbGUgY29sb3I9XCIjRkFGQUZBXCIgc2l6ZT17MzB9IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIHsvKiBoZXJvICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LXNjcmVlbiBsZWZ0LTEvMiByaWdodC0xLzIgLW1sLVs1MHZ3XSAtbXItWzUwdnddIGgtWzc3OHB4XSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBpbnRlcnZhbD17NTAwMH1cclxuICAgICAgICAgIHRyYW5zaXRpb25UaW1lPXs1MDB9XHJcbiAgICAgICAgICBzd2lwZWFibGVcclxuICAgICAgICAgIGVtdWxhdGVUb3VjaFxyXG4gICAgICAgICAgZHluYW1pY0hlaWdodD17ZmFsc2V9XHJcbiAgICAgICAgICByZW5kZXJBcnJvd1ByZXY9e3JlbmRlckFycm93UHJldn1cclxuICAgICAgICAgIHJlbmRlckFycm93TmV4dD17cmVuZGVyQXJyb3dOZXh0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGhyZWY9e2ltYWdlLmxpbmt9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUltYWdlQ2xpY2soaW1hZ2UubGluayk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2lzTW9iaWxlID8gaW1hZ2UubW9iaWxlIDogaW1hZ2UuZGVza3RvcH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiAyYSBzZcOnw6NvICovfVxyXG4gICAgICA8Q291cnNlU2VjdGlvbiAvPlxyXG5cclxuICAgICAgey8qIDNhIHNlw6fDo28gKi99XHJcblxyXG5cclxuICAgICAgey8qIDhhIHNlw6fDo28gKi99XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxGbG9hdGluZ0J1dHRvbiAvPlxyXG4gICAgICAgIDxTY3JvbGxUb1RvcEJ1dHRvbiAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlUm91dGVyIiwiQ2Fyb3VzZWwiLCJJb0lvc0Fycm93RHJvcGxlZnRDaXJjbGUiLCJJb0lvc0Fycm93RHJvcHJpZ2h0Q2lyY2xlIiwiRmxvYXRpbmdCdXR0b24iLCJTY3JvbGxUb1RvcEJ1dHRvbiIsIkNvdXJzZVNlY3Rpb24iLCJpbWFnZXMiLCJkZXNrdG9wIiwibW9iaWxlIiwibGluayIsIkhvbWUiLCJyb3V0ZXIiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlSW1hZ2VDbGljayIsInB1c2giLCJyZW5kZXJBcnJvd1ByZXYiLCJvbkNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCIsImNvbG9yIiwic2l6ZSIsInJlbmRlckFycm93TmV4dCIsImhhc05leHQiLCJtYWluIiwic2VjdGlvbiIsInNob3dUaHVtYnMiLCJzaG93U3RhdHVzIiwiaW5maW5pdGVMb29wIiwiYXV0b1BsYXkiLCJpbnRlcnZhbCIsInRyYW5zaXRpb25UaW1lIiwic3dpcGVhYmxlIiwiZW11bGF0ZVRvdWNoIiwiZHluYW1pY0hlaWdodCIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});