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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDropleftCircle,IoIosArrowDroprightCircle!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FloatingButton */ \"(app-pages-browser)/./src/components/FloatingButton/index.tsx\");\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ScrollToTop */ \"(app-pages-browser)/./src/components/ScrollToTop/index.tsx\");\n/* harmony import */ var _components_CoursesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CoursesSection */ \"(app-pages-browser)/./src/components/CoursesSection/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst images = [\n    {\n        desktop: \"/home01.png\",\n        mobile: \"/home01-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home02.png\",\n        mobile: \"/home02-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home03.png\",\n        mobile: \"/home03-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home04.png\",\n        mobile: \"/home04-mobile.png\",\n        link: \"/\"\n    },\n    {\n        desktop: \"/home05.png\",\n        mobile: \"/home05-mobile.png\",\n        link: \"https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE=\"\n    },\n    {\n        desktop: \"/home06.png\",\n        mobile: \"/home06-mobile.png\",\n        link: \"/\"\n    }\n];\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 800);\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const handleImageClick = (link)=>{\n        router.push(link);\n    };\n    const renderArrowPrev = (onClickHandler, hasPrev, label)=>hasPrev && !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: onClickHandler,\n            className: \"absolute top-1/2 transform -translate-y-1/2 translate-x-6 left-0 z-10 p-2\",\n            \"aria-label\": label,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosArrowDropleftCircle, {\n                color: \"#FAFAFA\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined);\n    const renderArrowNext = (onClickHandler, hasNext, label)=>hasNext && !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: onClickHandler,\n            className: \"absolute top-1/2 transform -translate-y-1/2 -translate-x-6 right-0 z-10 p-2\",\n            \"aria-label\": label,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDropleftCircle_IoIosArrowDroprightCircle_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosArrowDroprightCircle, {\n                color: \"#FAFAFA\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] \".concat(isMobile ? \"h-[500px]\" : \"h-[778px]\", \" overflow-hidden\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                    showThumbs: false,\n                    showStatus: false,\n                    infiniteLoop: true,\n                    autoPlay: true,\n                    interval: 5000,\n                    transitionTime: 500,\n                    swipeable: true,\n                    emulateTouch: true,\n                    dynamicHeight: false,\n                    renderArrowPrev: renderArrowPrev,\n                    renderArrowNext: renderArrowNext,\n                    children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: image.link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"w-full h-fit relative cursor-pointer\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                handleImageClick(image.link);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-fit relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: isMobile ? image.mobile : image.desktop,\n                                    alt: \"Image \".concat(index + 1),\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoursesSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"pqqXOEAIE6UbqleU6zHY5ziUVow=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCO0dBcEdNTTs7UUFDV1gsc0RBQVNBOzs7S0FEcEJXO0FBc0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RHJvcGxlZnRDaXJjbGUsIElvSW9zQXJyb3dEcm9wcmlnaHRDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmltcG9ydCBGbG9hdGluZ0J1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uXCI7XHJcbmltcG9ydCBTY3JvbGxUb1RvcEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL1Njcm9sbFRvVG9wXCI7XHJcbmltcG9ydCBDb3Vyc2VTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvQ291cnNlc1NlY3Rpb25cIjtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICB7IGRlc2t0b3A6IFwiL2hvbWUwMS5wbmdcIiwgbW9iaWxlOiBcIi9ob21lMDEtbW9iaWxlLnBuZ1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gIHsgZGVza3RvcDogXCIvaG9tZTAyLnBuZ1wiLCBtb2JpbGU6IFwiL2hvbWUwMi1tb2JpbGUucG5nXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgeyBkZXNrdG9wOiBcIi9ob21lMDMucG5nXCIsIG1vYmlsZTogXCIvaG9tZTAzLW1vYmlsZS5wbmdcIiwgbGluazogXCIvXCIgfSxcclxuICB7IGRlc2t0b3A6IFwiL2hvbWUwNC5wbmdcIiwgbW9iaWxlOiBcIi9ob21lMDQtbW9iaWxlLnBuZ1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gIHtcclxuICAgIGRlc2t0b3A6IFwiL2hvbWUwNS5wbmdcIiwgbW9iaWxlOiBcIi9ob21lMDUtbW9iaWxlLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2VtZWMubWVjLmdvdi5ici9lbWVjL2NvbnN1bHRhLWNhZGFzdHJvL2RldGFsaGFtZW50by9kOTY5NTdmNDU1ZjY0MDVkMTRjNjU0MjU1MmIwZjZlYi9NVGt5T0RRPS85MzkxNjMxNmFiZTIzMTQ4NTA3YmQ0YzI2MGU0Yjg3OC9OekExTURFPVwiXHJcbiAgfSxcclxuICB7IGRlc2t0b3A6IFwiL2hvbWUwNi5wbmdcIiwgbW9iaWxlOiBcIi9ob21lMDYtbW9iaWxlLnBuZ1wiLCBsaW5rOiBcIi9cIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gKGxpbms6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gobGluayk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXJyb3dQcmV2ID0gKG9uQ2xpY2tIYW5kbGVyOiAoKSA9PiB2b2lkLCBoYXNQcmV2OiBib29sZWFuLCBsYWJlbDogc3RyaW5nKSA9PlxyXG4gICAgaGFzUHJldiAmJiAhaXNNb2JpbGUgJiYgKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB0cmFuc2xhdGUteC02IGxlZnQtMCB6LTEwIHAtMlwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XHJcbiAgICAgID5cclxuICAgICAgICA8SW9Jb3NBcnJvd0Ryb3BsZWZ0Q2lyY2xlIGNvbG9yPVwiI0ZBRkFGQVwiIHNpemU9ezMwfSAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckFycm93TmV4dCA9IChvbkNsaWNrSGFuZGxlcjogKCkgPT4gdm9pZCwgaGFzTmV4dDogYm9vbGVhbiwgbGFiZWw6IHN0cmluZykgPT5cclxuICAgIGhhc05leHQgJiYgIWlzTW9iaWxlICYmIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTYgcmlnaHQtMCB6LTEwIHAtMlwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XHJcbiAgICAgID5cclxuICAgICAgICA8SW9Jb3NBcnJvd0Ryb3ByaWdodENpcmNsZSBjb2xvcj1cIiNGQUZBRkFcIiBzaXplPXszMH0gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgey8qIGhlcm8gKi99XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHJlbGF0aXZlIHctc2NyZWVuIGxlZnQtMS8yIHJpZ2h0LTEvMiAtbWwtWzUwdnddIC1tci1bNTB2d10gJHtpc01vYmlsZSA/IFwiaC1bNTAwcHhdXCIgOiBcImgtWzc3OHB4XVwifSBvdmVyZmxvdy1oaWRkZW5gfT5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBpbnRlcnZhbD17NTAwMH1cclxuICAgICAgICAgIHRyYW5zaXRpb25UaW1lPXs1MDB9XHJcbiAgICAgICAgICBzd2lwZWFibGVcclxuICAgICAgICAgIGVtdWxhdGVUb3VjaFxyXG4gICAgICAgICAgZHluYW1pY0hlaWdodD17ZmFsc2V9XHJcbiAgICAgICAgICByZW5kZXJBcnJvd1ByZXY9e3JlbmRlckFycm93UHJldn1cclxuICAgICAgICAgIHJlbmRlckFycm93TmV4dD17cmVuZGVyQXJyb3dOZXh0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGhyZWY9e2ltYWdlLmxpbmt9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1maXQgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbWFnZUNsaWNrKGltYWdlLmxpbmspO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZpdCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aXNNb2JpbGUgPyBpbWFnZS5tb2JpbGUgOiBpbWFnZS5kZXNrdG9wfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIDJhIHNlw6fDo28gKi99XHJcbiAgICAgIDxDb3Vyc2VTZWN0aW9uIC8+XHJcblxyXG4gICAgICB7LyogM2Egc2XDp8OjbyAqL31cclxuXHJcblxyXG4gICAgICB7LyogOGEgc2XDp8OjbyAqL31cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPEZsb2F0aW5nQnV0dG9uIC8+XHJcbiAgICAgICAgPFNjcm9sbFRvVG9wQnV0dG9uIC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJDYXJvdXNlbCIsIklvSW9zQXJyb3dEcm9wbGVmdENpcmNsZSIsIklvSW9zQXJyb3dEcm9wcmlnaHRDaXJjbGUiLCJGbG9hdGluZ0J1dHRvbiIsIlNjcm9sbFRvVG9wQnV0dG9uIiwiQ291cnNlU2VjdGlvbiIsImltYWdlcyIsImRlc2t0b3AiLCJtb2JpbGUiLCJsaW5rIiwiSG9tZSIsInJvdXRlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVJbWFnZUNsaWNrIiwicHVzaCIsInJlbmRlckFycm93UHJldiIsIm9uQ2xpY2tIYW5kbGVyIiwiaGFzUHJldiIsImxhYmVsIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwiY29sb3IiLCJzaXplIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsIm1haW4iLCJzZWN0aW9uIiwic2hvd1RodW1icyIsInNob3dTdGF0dXMiLCJpbmZpbml0ZUxvb3AiLCJhdXRvUGxheSIsImludGVydmFsIiwidHJhbnNpdGlvblRpbWUiLCJzd2lwZWFibGUiLCJlbXVsYXRlVG91Y2giLCJkeW5hbWljSGVpZ2h0IiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});