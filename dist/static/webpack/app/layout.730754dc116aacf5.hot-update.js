"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a259c54f6738\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OTY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImEyNTljNTRmNjczOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"montserrat\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/system/dist/chunk-VIKBOFDY.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ \"(app-pages-browser)/./src/app/metadata.ts\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AppLayout(param) {\n    let { children } = param;\n    _s();\n    const [originalTitle, setOriginalTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setOriginalTitle(document.title);\n        const handleVisibilityChange = ()=>{\n            if (document.hidden) {\n                document.title = \"(1) Venha aproveitar essa oportunidade!\";\n            } else {\n                document.title = originalTitle || (typeof _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title === \"string\" ? _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title : \"P\\xf3s-gradua\\xe7\\xe3o Pr\\xe1xis\");\n            }\n        };\n        document.addEventListener(\"visibilitychange\", handleVisibilityChange);\n        return ()=>{\n            document.removeEventListener(\"visibilitychange\", handleVisibilityChange);\n        };\n    }, [\n        originalTitle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"pt-br\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: typeof _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title === \"string\" ? _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title : \"P\\xf3s-gradua\\xe7\\xe3o Pr\\xe1xis\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: typeof _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.description === \"string\" ? _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.description : \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"https://www.googletagmanager.com/gtag/js?id=G-ESTDBVPXJ9\",\n                        strategy: \"afterInteractive\",\n                        async: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"google-analytics-config\",\n                        strategy: \"afterInteractive\",\n                        dangerouslySetInnerHTML: {\n                            __html: \"\\n              window.dataLayer = window.dataLayer || [];\\n              function gtag(){dataLayer.push(arguments);}\\n              gtag('js', new Date());\\n              gtag('config', 'G-ESTDBVPXJ9');\\n            \"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"fb-pixel-init\",\n                        strategy: \"afterInteractive\",\n                        dangerouslySetInnerHTML: {\n                            __html: \"\\n              !function(f,b,e,v,n,t,s)\\n              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\\n              n.callMethod.apply(n,arguments):n.queue.push(arguments)};\\n              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\\n              n.queue=[];t=b.createElement(e);t.async=!0;\\n              t.src=v;s=b.getElementsByTagName(e)[0];\\n              s.parentNode.insertBefore(t,s)}(window, document,'script',\\n              'https://connect.facebook.net/en_US/fbevents.js');\\n              fbq('init', '997382224690371');\\n              fbq('track', 'PageView');\\n            \"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            height: \"1\",\n                            width: \"1\",\n                            style: {\n                                display: \"none\"\n                            },\n                            src: \"https://www.facebook.com/tr?id=997382224690371&ev=PageView&noscript=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: \"\".concat((next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6___default().className), \" min-h-screen flex flex-col\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.NextUIProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"text-balance container flex-grow\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(AppLayout, \"nWkolbUznukjPgG/Aii2GPOsZcQ=\");\n_c = AppLayout;\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBWU1BO0FBVjZDO0FBRVA7QUFDWDtBQUVWO0FBRWU7QUFDRztBQUkxQixTQUFTTyxVQUFVLEtBSWhDO1FBSmdDLEVBQ2hDQyxRQUFRLEVBR1IsR0FKZ0M7O0lBS2hDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFxQlE7SUFFdkVULGdEQUFTQSxDQUFDO1FBQ1JRLGlCQUFpQkUsU0FBU0MsS0FBSztRQUUvQixNQUFNQyx5QkFBeUI7WUFDN0IsSUFBSUYsU0FBU0csTUFBTSxFQUFFO2dCQUNuQkgsU0FBU0MsS0FBSyxHQUFHO1lBQ25CLE9BQU87Z0JBQ0xELFNBQVNDLEtBQUssR0FBR0osaUJBQWtCLFFBQU9KLCtDQUFRQSxDQUFDUSxLQUFLLEtBQUssV0FBV1IsK0NBQVFBLENBQUNRLEtBQUssR0FBRyxrQ0FBcUI7WUFDaEg7UUFDRjtRQUVBRCxTQUFTSSxnQkFBZ0IsQ0FBQyxvQkFBb0JGO1FBRTlDLE9BQU87WUFDTEYsU0FBU0ssbUJBQW1CLENBQUMsb0JBQW9CSDtRQUNuRDtJQUNGLEdBQUc7UUFBQ0w7S0FBYztJQUVsQixxQkFDRSw4REFBQ1M7UUFBS0MsTUFBSzs7MEJBQ1QsOERBQUNDOztrQ0FDQyw4REFBQ1A7a0NBQU8sT0FBT1IsK0NBQVFBLENBQUNRLEtBQUssS0FBSyxXQUFXUiwrQ0FBUUEsQ0FBQ1EsS0FBSyxHQUFHOzs7Ozs7a0NBQzlELDhEQUFDUTt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUyxPQUFPbEIsK0NBQVFBLENBQUNtQixXQUFXLEtBQUssV0FBV25CLCtDQUFRQSxDQUFDbUIsV0FBVyxHQUFHOzs7Ozs7a0NBR3BHLDhEQUFDcEIsbURBQU1BO3dCQUNMcUIsS0FBSTt3QkFDSkMsVUFBUzt3QkFDVEMsS0FBSzs7Ozs7O2tDQUVQLDhEQUFDdkIsbURBQU1BO3dCQUNMd0IsSUFBRzt3QkFDSEYsVUFBUzt3QkFDVEcseUJBQXlCOzRCQUN2QkMsUUFBUzt3QkFNWDs7Ozs7O2tDQUlGLDhEQUFDMUIsbURBQU1BO3dCQUNMd0IsSUFBRzt3QkFDSEYsVUFBUzt3QkFDVEcseUJBQXlCOzRCQUN2QkMsUUFBUzt3QkFZWDs7Ozs7O2tDQUVGLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUlDLFFBQU87NEJBQUlDLE9BQU07NEJBQUlDLE9BQU87Z0NBQUVDLFNBQVM7NEJBQU87NEJBQ2pEWCxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ1k7Z0JBQUtDLFdBQVcsR0FBd0IsT0FBckJ0Qyx5S0FBb0IsRUFBQzswQkFDdkMsNEVBQUNDLDZEQUFjQTs7c0NBQ2IsOERBQUNzQzs0QkFBUUQsV0FBVTtzQ0FDaEI5Qjs7Ozs7O3NDQUVILDhEQUFDRiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakI7R0FyRndCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IE5leHRVSVByb3ZpZGVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vbnRzZXJyYXQgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5cclxuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgbWV0YWRhdGEgfSBmcm9tIFwiLi9tZXRhZGF0YVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBtb250c2VycmF0ID0gTW9udHNlcnJhdCh7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwTGF5b3V0KHtcclxuICBjaGlsZHJlbixcclxufTogUmVhZG9ubHk8e1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0+KSB7XHJcbiAgY29uc3QgW29yaWdpbmFsVGl0bGUsIHNldE9yaWdpbmFsVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0T3JpZ2luYWxUaXRsZShkb2N1bWVudC50aXRsZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCIoMSkgVmVuaGEgYXByb3ZlaXRhciBlc3NhIG9wb3J0dW5pZGFkZSFcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IG9yaWdpbmFsVGl0bGUgfHwgKHR5cGVvZiBtZXRhZGF0YS50aXRsZSA9PT0gJ3N0cmluZycgPyBtZXRhZGF0YS50aXRsZSA6IFwiUMOzcy1ncmFkdWHDp8OjbyBQcsOheGlzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbb3JpZ2luYWxUaXRsZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cInB0LWJyXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dHlwZW9mIG1ldGFkYXRhLnRpdGxlID09PSAnc3RyaW5nJyA/IG1ldGFkYXRhLnRpdGxlIDogXCJQw7NzLWdyYWR1YcOnw6NvIFByw6F4aXNcIn08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3R5cGVvZiBtZXRhZGF0YS5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyBtZXRhZGF0YS5kZXNjcmlwdGlvbiA6IFwiXCJ9IC8+XHJcblxyXG4gICAgICAgIHsvKiBHb29nbGUgdGFnIChndGFnLmpzKSAqL31cclxuICAgICAgICA8U2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctRVNUREJWUFhKOVwiXHJcbiAgICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICAgYXN5bmNcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTY3JpcHRcclxuICAgICAgICAgIGlkPVwiZ29vZ2xlLWFuYWx5dGljcy1jb25maWdcIlxyXG4gICAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLUVTVERCVlBYSjknKTtcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIEZhY2Vib29rIFBpeGVsICovfVxyXG4gICAgICAgIDxTY3JpcHRcclxuICAgICAgICAgIGlkPVwiZmItcGl4ZWwtaW5pdFwiXHJcbiAgICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXHJcbiAgICAgICAgICAgICAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xyXG4gICAgICAgICAgICAgIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9O1xyXG4gICAgICAgICAgICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xyXG4gICAgICAgICAgICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDtcclxuICAgICAgICAgICAgICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTtcclxuICAgICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXHJcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcclxuICAgICAgICAgICAgICBmYnEoJ2luaXQnLCAnOTk3MzgyMjI0NjkwMzcxJyk7XHJcbiAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdQYWdlVmlldycpO1xyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxub3NjcmlwdD5cclxuICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMVwiIHdpZHRoPVwiMVwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD05OTczODIyMjQ2OTAzNzEmZXY9UGFnZVZpZXcmbm9zY3JpcHQ9MVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbm9zY3JpcHQ+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHkgY2xhc3NOYW1lPXtgJHttb250c2VycmF0LmNsYXNzTmFtZX0gbWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xgfT5cclxuICAgICAgICA8TmV4dFVJUHJvdmlkZXI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWJhbGFuY2UgY29udGFpbmVyIGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9OZXh0VUlQcm92aWRlcj5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsibW9udHNlcnJhdCIsIk5leHRVSVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTY3JpcHQiLCJtZXRhZGF0YSIsIkZvb3RlciIsIkFwcExheW91dCIsImNoaWxkcmVuIiwib3JpZ2luYWxUaXRsZSIsInNldE9yaWdpbmFsVGl0bGUiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsInRpdGxlIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHRtbCIsImxhbmciLCJoZWFkIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJzcmMiLCJzdHJhdGVneSIsImFzeW5jIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm5vc2NyaXB0IiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsImRpc3BsYXkiLCJib2R5IiwiY2xhc3NOYW1lIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});