"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app",{

/***/ "./src/appComponents/reusable/Fee.js":
/*!*******************************************!*\
  !*** ./src/appComponents/reusable/Fee.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pair */ \"./src/appComponents/reusable/Pair.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Fee = function(param) {\n    var subState = param.subState, setSubState = param.setSubState;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        on: false,\n        amount: 0\n    }), 2), fee = ref[0], setFee = ref[1];\n    var onClick = function(e) {\n        if (fee.on) {\n            var newAmount = e.target.getAttribute(\"p\");\n            setSubState(function(subState) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, subState), {\n                    fee: newAmount\n                });\n            });\n        } else {\n            var newAmount1 = 0;\n            setSubState(function(subState) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, subState), {\n                    fee: newAmount1\n                });\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: fee.on ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pair__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"input\",\n                    first: \"fee\",\n                    second: \"\",\n                    subState: subState,\n                    setSubState: setSubState\n                }, 3, false, {\n                    fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                    lineNumber: 29,\n                    columnNumber: 19\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"amountHolder\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: subState.fee == 0.05 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                            id: \"amt10\",\n                            p: 0.05,\n                            onClick: onClick,\n                            children: \"0.05\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                            lineNumber: 36,\n                            columnNumber: 10\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: subState.fee == 0.1 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                            id: \"amt50\",\n                            p: 0.1,\n                            onClick: onClick,\n                            children: \"0.1\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                            lineNumber: 39,\n                            columnNumber: 10\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: subState.fee == 0.25 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                            id: \"amt100\",\n                            p: 0.25,\n                            onClick: onClick,\n                            children: \"0.25\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                            lineNumber: 42,\n                            columnNumber: 10\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: subState.fee == 0.5 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                            id: \"amt250\",\n                            p: 0.5,\n                            onClick: onClick,\n                            children: \"0.5\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                            lineNumber: 45,\n                            columnNumber: 10\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: subState.fee == 1 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                            id: \"amt500\",\n                            p: 1,\n                            onClick: onClick,\n                            children: \"1\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                    lineNumber: 35,\n                    columnNumber: 10\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pair__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"checkmark\",\n                first: \"amount\",\n                second: \"\",\n                subState: fee,\n                setSubState: setFee\n            }, 1, false, {\n                fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false)\n    }, void 0, false);\n};\n_s(Fee, \"jH1lQz6AbQzZ7h9jvy/HX1aHkNw=\");\n_c = Fee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fee);\nvar _c;\n$RefreshReg$(_c, \"Fee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwQ29tcG9uZW50cy9yZXVzYWJsZS9GZWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUF5QjtBQUNRO0FBRVI7QUFFekIsSUFBTUcsTUFBTSxnQkFBNkI7UUFBM0JDLGlCQUFBQSxVQUFVQyxvQkFBQUE7O0lBRXBCLElBQXNCSixNQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUM7UUFDM0JLLElBQUksS0FBSztRQUNUQyxRQUFRO0lBQ1osUUFIT0MsTUFBZVAsUUFBVlEsU0FBVVI7SUFJdEIsSUFBSVMsVUFBVSxTQUFDQyxHQUFNO1FBQ2pCLElBQUdILElBQUlGLEVBQUUsRUFBQztZQUNOLElBQUlNLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1lBQ3RDVCxZQUFZRCxTQUFBQTt1QkFBYSx3S0FBSUE7b0JBQVVJLEtBQUlJOzs7UUFDL0MsT0FBTztZQUNILElBQUlBLGFBQVk7WUFDaEJQLFlBQVlELFNBQUFBO3VCQUFhLHdLQUFJQTtvQkFBVUksS0FBSUk7OztRQUMvQyxDQUFDO0lBQ0w7SUFFRixxQkFFRTtrQkFFS0osSUFBSUYsRUFBRSxpQkFDYjs7OEJBRWdCLDhEQUFDSiw2Q0FBSUE7b0JBQUNhLE1BQUs7b0JBQ0RDLE9BQU87b0JBQU9DLFFBQU87b0JBQzdCYixVQUFVQTtvQkFDVkMsYUFBYUE7bUJBRlI7Ozs7OzhCQUtoQiw4REFBQ2E7b0JBQUlDLElBQUc7O3NDQUNSLDhEQUFDQzs0QkFDQUMsV0FBV2pCLFNBQVNJLEdBQUcsSUFBSSxPQUFPLDhCQUE4QixXQUFXOzRCQUMzRVcsSUFBRzs0QkFBUUcsR0FBRzs0QkFBTVosU0FBU0E7c0NBQVM7Ozs7OztzQ0FDdkMsOERBQUNVOzRCQUNBQyxXQUFXakIsU0FBU0ksR0FBRyxJQUFJLE1BQU0sOEJBQThCLFdBQVc7NEJBQ3pFVyxJQUFHOzRCQUFRRyxHQUFHOzRCQUFLWixTQUFTQTtzQ0FBUzs7Ozs7O3NDQUN2Qyw4REFBQ1U7NEJBQ0FDLFdBQVdqQixTQUFTSSxHQUFHLElBQUksT0FBTyw4QkFBOEIsV0FBVzs0QkFDekVXLElBQUc7NEJBQVNHLEdBQUc7NEJBQU1aLFNBQVNBO3NDQUFTOzs7Ozs7c0NBQzFDLDhEQUFDVTs0QkFDQUMsV0FBV2pCLFNBQVNJLEdBQUcsSUFBSSxNQUFNLDhCQUE4QixXQUFXOzRCQUN6RVcsSUFBRzs0QkFBU0csR0FBRzs0QkFBS1osU0FBU0E7c0NBQVM7Ozs7OztzQ0FDdkMsOERBQUNVOzRCQUNEQyxXQUFXakIsU0FBU0ksR0FBRyxJQUFJLElBQUksOEJBQThCLFdBQVc7NEJBQ3ZFVyxJQUFHOzRCQUFTRyxHQUFHOzRCQUFHWixTQUFTQTtzQ0FBUzs7Ozs7Ozs7Ozs7Ozt5Q0FJdkM7c0JBQ0EsNEVBQUNSLDZDQUFJQTtnQkFBQ2EsTUFBSztnQkFDU0MsT0FBTztnQkFBVUMsUUFBTztnQkFDaENiLFVBQVVJO2dCQUNWSCxhQUFhSTtlQUZSOzs7Ozt5QkFHZDs7QUFHWDtHQXhETU47S0FBQUE7QUEwRE4sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcENvbXBvbmVudHMvcmV1c2FibGUvRmVlLmpzPzIxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQYWlyIGZyb20gXCIuL1BhaXJcIlxyXG5cclxuY29uc3QgRmVlID0gKHtzdWJTdGF0ZSwgc2V0U3ViU3RhdGV9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZlZSwgc2V0RmVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBvbjogZmFsc2UsXHJcbiAgICAgICAgYW1vdW50OiAwXHJcbiAgICB9KVxyXG4gICAgbGV0IG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGZlZS5vbil7XHJcbiAgICAgICAgICAgIGxldCBuZXdBbW91bnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwXCIpO1xyXG4gICAgICAgICAgICBzZXRTdWJTdGF0ZShzdWJTdGF0ZSA9PiAoey4uLnN1YlN0YXRlLCBmZWU6bmV3QW1vdW50fSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld0Ftb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHNldFN1YlN0YXRlKHN1YlN0YXRlID0+ICh7Li4uc3ViU3RhdGUsIGZlZTpuZXdBbW91bnR9KSlcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICBcclxuICAgIDw+XHJcblxyXG4gICAgICAgIHtmZWUub24gPyBcclxuICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBhaXIgdHlwZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9ezN9IGZpcnN0PXtcImZlZVwifSBzZWNvbmQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YlN0YXRlPXtzdWJTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJTdGF0ZT17c2V0U3ViU3RhdGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgaWQ9J2Ftb3VudEhvbGRlcic+XHJcbiAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N1YlN0YXRlLmZlZSA9PSAwLjA1ID8gXCJhbW91bnRCdG4gcGlja2VkQW1vdW50QnRuXCIgOiBcImFtb3VudEJ0blwiIH0gXHJcbiAgICAgICAgICBpZD0nYW10MTAnIHA9ezAuMDV9IG9uQ2xpY2s9e29uQ2xpY2t9PjAuMDU8L2J1dHRvbj5cclxuICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3ViU3RhdGUuZmVlID09IDAuMSA/IFwiYW1vdW50QnRuIHBpY2tlZEFtb3VudEJ0blwiIDogXCJhbW91bnRCdG5cIiB9XHJcbiAgICAgICAgICAgaWQ9J2FtdDUwJyBwPXswLjF9IG9uQ2xpY2s9e29uQ2xpY2t9PjAuMTwvYnV0dG9uPlxyXG4gICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N1YlN0YXRlLmZlZSA9PSAwLjI1ID8gXCJhbW91bnRCdG4gcGlja2VkQW1vdW50QnRuXCIgOiBcImFtb3VudEJ0blwifVxyXG4gICAgICAgICAgICBpZD0nYW10MTAwJyBwPXswLjI1fSBvbkNsaWNrPXtvbkNsaWNrfT4wLjI1PC9idXR0b24+XHJcbiAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N1YlN0YXRlLmZlZSA9PSAwLjUgPyBcImFtb3VudEJ0biBwaWNrZWRBbW91bnRCdG5cIiA6IFwiYW1vdW50QnRuXCIgfVxyXG4gICAgICAgICAgIGlkPSdhbXQyNTAnIHA9ezAuNX0gb25DbGljaz17b25DbGlja30+MC41PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdWJTdGF0ZS5mZWUgPT0gMSA/IFwiYW1vdW50QnRuIHBpY2tlZEFtb3VudEJ0blwiIDogXCJhbW91bnRCdG5cIiB9XHJcbiAgICAgICAgICAgaWQ9J2FtdDUwMCcgcD17MX0gb25DbGljaz17b25DbGlja30+MTwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgIDpcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxQYWlyIHR5cGU9XCJjaGVja21hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17MX0gZmlyc3Q9e1wiYW1vdW50XCJ9IHNlY29uZD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViU3RhdGU9e2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJTdGF0ZT17c2V0RmVlfS8+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhaXIiLCJGZWUiLCJzdWJTdGF0ZSIsInNldFN1YlN0YXRlIiwib24iLCJhbW91bnQiLCJmZWUiLCJzZXRGZWUiLCJvbkNsaWNrIiwiZSIsIm5ld0Ftb3VudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInR5cGUiLCJmaXJzdCIsInNlY29uZCIsImRpdiIsImlkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/appComponents/reusable/Fee.js\n"));

/***/ })

});