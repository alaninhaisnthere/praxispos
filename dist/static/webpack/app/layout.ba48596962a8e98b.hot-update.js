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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"abaea591b534\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OTY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImFiYWVhNTkxYjUzNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"montserrat\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/system/dist/chunk-VIKBOFDY.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer/index.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ \"(app-pages-browser)/./src/app/metadata.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [originalTitle, setOriginalTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setOriginalTitle(document.title);\n        const handleVisibilityChange = ()=>{\n            if (document.hidden) {\n                document.title = \"Volte para a p\\xe1gina!\";\n            } else {\n                document.title = originalTitle || _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title || \"P\\xf3s-gradua\\xe7\\xe3o Pr\\xe1xis\";\n            }\n        };\n        document.addEventListener(\"visibilitychange\", handleVisibilityChange);\n        return ()=>{\n            document.removeEventListener(\"visibilitychange\", handleVisibilityChange);\n        };\n    }, [\n        originalTitle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"pt-br\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.title || \"P\\xf3s-gradua\\xe7\\xe3o Pr\\xe1xis\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: _metadata__WEBPACK_IMPORTED_MODULE_4__.metadata.description || \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: \"\".concat((next_font_google_target_css_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default().className), \" min-h-screen flex flex-col\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.NextUIProvider, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"text-balance container flex-grow\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edson Neto\\\\Documents\\\\Praxis\\\\Repo\\\\praxispos\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"nWkolbUznukjPgG/Aii2GPOsZcQ=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVTUE7QUFSNkM7QUFFUDtBQUVyQjtBQUNrQjtBQUNIO0FBSXZCLFNBQVNNLE9BQU8sS0FJN0I7UUFKNkIsRUFDN0JDLFFBQVEsRUFHUixHQUo2Qjs7SUFLN0IsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQXFCTztJQUV2RVIsZ0RBQVNBLENBQUM7UUFDUk8saUJBQWlCRSxTQUFTQyxLQUFLO1FBRS9CLE1BQU1DLHlCQUF5QjtZQUM3QixJQUFJRixTQUFTRyxNQUFNLEVBQUU7Z0JBQ25CSCxTQUFTQyxLQUFLLEdBQUc7WUFDbkIsT0FBTztnQkFDTEQsU0FBU0MsS0FBSyxHQUFHSixpQkFBaUJILCtDQUFRQSxDQUFDTyxLQUFLLElBQUk7WUFDdEQ7UUFDRjtRQUVBRCxTQUFTSSxnQkFBZ0IsQ0FBQyxvQkFBb0JGO1FBRTlDLE9BQU87WUFDTEYsU0FBU0ssbUJBQW1CLENBQUMsb0JBQW9CSDtRQUNuRDtJQUNGLEdBQUc7UUFBQ0w7S0FBYztJQUVsQixxQkFDRSw4REFBQ1M7UUFBS0MsTUFBSzs7MEJBQ1QsOERBQUNDOztrQ0FDQyw4REFBQ1A7a0NBQU9QLCtDQUFRQSxDQUFDTyxLQUFLLElBQUk7Ozs7OztrQ0FDMUIsOERBQUNRO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFTakIsK0NBQVFBLENBQUNrQixXQUFXLElBQUk7Ozs7Ozs7Ozs7OzswQkFFNUQsOERBQUNDO2dCQUFLQyxXQUFXLEdBQXdCLE9BQXJCekIseUtBQW9CLEVBQUM7O2tDQUN2Qyw4REFBQ0MsNkRBQWNBO2tDQUNiLDRFQUFDeUI7NEJBQVFELFdBQVU7c0NBQ2hCbEI7Ozs7Ozs7Ozs7O2tDQUdMLDhEQUFDSCwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7R0F6Q3dCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IE5leHRVSVByb3ZpZGVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vbnRzZXJyYXQgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgbWV0YWRhdGEgfSBmcm9tIFwiLi9tZXRhZGF0YVwiO1xyXG5cclxuY29uc3QgbW9udHNlcnJhdCA9IE1vbnRzZXJyYXQoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IFJlYWRvbmx5PHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59Pikge1xyXG4gIGNvbnN0IFtvcmlnaW5hbFRpdGxlLCBzZXRPcmlnaW5hbFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE9yaWdpbmFsVGl0bGUoZG9jdW1lbnQudGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVm9sdGUgcGFyYSBhIHDDoWdpbmEhXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBvcmlnaW5hbFRpdGxlIHx8IG1ldGFkYXRhLnRpdGxlIHx8IFwiUMOzcy1ncmFkdWHDp8OjbyBQcsOheGlzXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtvcmlnaW5hbFRpdGxlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwicHQtYnJcIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnttZXRhZGF0YS50aXRsZSB8fCBcIlDDs3MtZ3JhZHVhw6fDo28gUHLDoXhpc1wifTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YWRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIn0gLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keSBjbGFzc05hbWU9e2Ake21vbnRzZXJyYXQuY2xhc3NOYW1lfSBtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbGB9PlxyXG4gICAgICAgIDxOZXh0VUlQcm92aWRlcj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtYmFsYW5jZSBjb250YWluZXIgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L05leHRVSVByb3ZpZGVyPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbnRzZXJyYXQiLCJOZXh0VUlQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9vdGVyIiwibWV0YWRhdGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm9yaWdpbmFsVGl0bGUiLCJzZXRPcmlnaW5hbFRpdGxlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJoaWRkZW4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImh0bWwiLCJsYW5nIiwiaGVhZCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiYm9keSIsImNsYXNzTmFtZSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});