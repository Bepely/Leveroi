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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pair */ \"./src/appComponents/reusable/Pair.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Fee = function(param) {\n    var subState = param.subState, setSubState = param.setSubState;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        on: false,\n        amount: 0\n    }), 2), fee = ref[0], setFee = ref[1];\n    var onClick = function(e) {\n        if (fee.on) {\n            var newAmount = e.target.getAttribute(\"p\");\n            setSubState(function(subState) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, subState), {\n                    fee: newAmount\n                });\n            });\n        } else {\n            var newAmount1 = 0;\n            setSubState(function(subState) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, subState), {\n                    fee: newAmount1\n                });\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pair__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: fee.on ? \"input\" : \"checkmark\",\n                first: \"fee\",\n                second: \"\",\n                subState: fee,\n                setSubState: setFee\n            }, 0, false, {\n                fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this),\n            fee.on ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"amountHolder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: subState.fee == 0.05 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                        id: \"amt10\",\n                        p: 0.05,\n                        onClick: onClick,\n                        children: \"0.05\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                        lineNumber: 32,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: subState.fee == 0.1 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                        id: \"amt50\",\n                        p: 0.1,\n                        onClick: onClick,\n                        children: \"0.1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                        lineNumber: 35,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: subState.fee == 0.25 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                        id: \"amt100\",\n                        p: 0.25,\n                        onClick: onClick,\n                        children: \"0.25\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                        lineNumber: 38,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: subState.fee == 0.5 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                        id: \"amt250\",\n                        p: 0.5,\n                        onClick: onClick,\n                        children: \"0.5\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: subState.fee == 1 ? \"amountBtn pickedAmountBtn\" : \"amountBtn\",\n                        id: \"amt500\",\n                        p: 1,\n                        onClick: onClick,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\leveroi\\\\src\\\\appComponents\\\\reusable\\\\Fee.js\",\n                lineNumber: 31,\n                columnNumber: 10\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true);\n};\n_s(Fee, \"jH1lQz6AbQzZ7h9jvy/HX1aHkNw=\");\n_c = Fee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fee);\nvar _c;\n$RefreshReg$(_c, \"Fee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwQ29tcG9uZW50cy9yZXVzYWJsZS9GZWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUF5QjtBQUNRO0FBRVI7QUFFekIsSUFBTUcsTUFBTSxnQkFBNkI7UUFBM0JDLGlCQUFBQSxVQUFVQyxvQkFBQUE7O0lBRXBCLElBQXNCSixNQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUM7UUFDM0JLLElBQUksS0FBSztRQUNUQyxRQUFRO0lBQ1osUUFIT0MsTUFBZVAsUUFBVlEsU0FBVVI7SUFJdEIsSUFBSVMsVUFBVSxTQUFDQyxHQUFNO1FBQ2pCLElBQUdILElBQUlGLEVBQUUsRUFBQztZQUNOLElBQUlNLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1lBQ3RDVCxZQUFZRCxTQUFBQTt1QkFBYSx3S0FBSUE7b0JBQVVJLEtBQUlJOzs7UUFDL0MsT0FBTztZQUNILElBQUlBLGFBQVk7WUFDaEJQLFlBQVlELFNBQUFBO3VCQUFhLHdLQUFJQTtvQkFBVUksS0FBSUk7OztRQUMvQyxDQUFDO0lBQ0w7SUFFRixxQkFFRTs7MEJBQ0ksOERBQUNWLDZDQUFJQTtnQkFBQ2EsTUFBTVAsSUFBSUYsRUFBRSxHQUFHLFVBQVUsV0FBVztnQkFDdEJVLE9BQU87Z0JBQU9DLFFBQU87Z0JBQzdCYixVQUFVSTtnQkFDVkgsYUFBYUk7ZUFGUjs7Ozs7WUFJaEJELElBQUlGLEVBQUUsaUJBQ04sOERBQUNZO2dCQUFJQyxJQUFHOztrQ0FDUiw4REFBQ0M7d0JBQ0FDLFdBQVdqQixTQUFTSSxHQUFHLElBQUksT0FBTyw4QkFBOEIsV0FBVzt3QkFDM0VXLElBQUc7d0JBQVFHLEdBQUc7d0JBQU1aLFNBQVNBO2tDQUFTOzs7Ozs7a0NBQ3ZDLDhEQUFDVTt3QkFDQUMsV0FBV2pCLFNBQVNJLEdBQUcsSUFBSSxNQUFNLDhCQUE4QixXQUFXO3dCQUN6RVcsSUFBRzt3QkFBUUcsR0FBRzt3QkFBS1osU0FBU0E7a0NBQVM7Ozs7OztrQ0FDdkMsOERBQUNVO3dCQUNBQyxXQUFXakIsU0FBU0ksR0FBRyxJQUFJLE9BQU8sOEJBQThCLFdBQVc7d0JBQ3pFVyxJQUFHO3dCQUFTRyxHQUFHO3dCQUFNWixTQUFTQTtrQ0FBUzs7Ozs7O2tDQUMxQyw4REFBQ1U7d0JBQ0FDLFdBQVdqQixTQUFTSSxHQUFHLElBQUksTUFBTSw4QkFBOEIsV0FBVzt3QkFDekVXLElBQUc7d0JBQVNHLEdBQUc7d0JBQUtaLFNBQVNBO2tDQUFTOzs7Ozs7a0NBQ3ZDLDhEQUFDVTt3QkFDREMsV0FBV2pCLFNBQVNJLEdBQUcsSUFBSSxJQUFJLDhCQUE4QixXQUFXO3dCQUN2RVcsSUFBRzt3QkFBU0csR0FBRzt3QkFBR1osU0FBU0E7a0NBQVM7Ozs7Ozs7Ozs7O3NDQUV2Qyw2SUFBSzs7O0FBR2I7R0E3Q01QO0tBQUFBO0FBK0NOLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHBDb21wb25lbnRzL3JldXNhYmxlL0ZlZS5qcz8yMTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUGFpciBmcm9tIFwiLi9QYWlyXCJcclxuXHJcbmNvbnN0IEZlZSA9ICh7c3ViU3RhdGUsIHNldFN1YlN0YXRlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmZWUsIHNldEZlZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb246IGZhbHNlLFxyXG4gICAgICAgIGFtb3VudDogMFxyXG4gICAgfSlcclxuICAgIGxldCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBpZihmZWUub24pe1xyXG4gICAgICAgICAgICBsZXQgbmV3QW1vdW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicFwiKTtcclxuICAgICAgICAgICAgc2V0U3ViU3RhdGUoc3ViU3RhdGUgPT4gKHsuLi5zdWJTdGF0ZSwgZmVlOm5ld0Ftb3VudH0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdBbW91bnQgPSAwO1xyXG4gICAgICAgICAgICBzZXRTdWJTdGF0ZShzdWJTdGF0ZSA9PiAoey4uLnN1YlN0YXRlLCBmZWU6bmV3QW1vdW50fSkpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgXHJcbiAgICA8PlxyXG4gICAgICAgIDxQYWlyIHR5cGU9e2ZlZS5vbiA/IFwiaW5wdXRcIiA6IFwiY2hlY2ttYXJrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXswfSBmaXJzdD17XCJmZWVcIn0gc2Vjb25kPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBzdWJTdGF0ZT17ZmVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1YlN0YXRlPXtzZXRGZWV9Lz5cclxuXHJcbiAgICAgICAge2ZlZS5vbiA/IFxyXG4gICAgICAgICA8ZGl2IGlkPSdhbW91bnRIb2xkZXInPlxyXG4gICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdWJTdGF0ZS5mZWUgPT0gMC4wNSA/IFwiYW1vdW50QnRuIHBpY2tlZEFtb3VudEJ0blwiIDogXCJhbW91bnRCdG5cIiB9IFxyXG4gICAgICAgICAgaWQ9J2FtdDEwJyBwPXswLjA1fSBvbkNsaWNrPXtvbkNsaWNrfT4wLjA1PC9idXR0b24+XHJcbiAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N1YlN0YXRlLmZlZSA9PSAwLjEgPyBcImFtb3VudEJ0biBwaWNrZWRBbW91bnRCdG5cIiA6IFwiYW1vdW50QnRuXCIgfVxyXG4gICAgICAgICAgIGlkPSdhbXQ1MCcgcD17MC4xfSBvbkNsaWNrPXtvbkNsaWNrfT4wLjE8L2J1dHRvbj5cclxuICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdWJTdGF0ZS5mZWUgPT0gMC4yNSA/IFwiYW1vdW50QnRuIHBpY2tlZEFtb3VudEJ0blwiIDogXCJhbW91bnRCdG5cIn1cclxuICAgICAgICAgICAgaWQ9J2FtdDEwMCcgcD17MC4yNX0gb25DbGljaz17b25DbGlja30+MC4yNTwvYnV0dG9uPlxyXG4gICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdWJTdGF0ZS5mZWUgPT0gMC41ID8gXCJhbW91bnRCdG4gcGlja2VkQW1vdW50QnRuXCIgOiBcImFtb3VudEJ0blwiIH1cclxuICAgICAgICAgICBpZD0nYW10MjUwJyBwPXswLjV9IG9uQ2xpY2s9e29uQ2xpY2t9PjAuNTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3ViU3RhdGUuZmVlID09IDEgPyBcImFtb3VudEJ0biBwaWNrZWRBbW91bnRCdG5cIiA6IFwiYW1vdW50QnRuXCIgfVxyXG4gICAgICAgICAgIGlkPSdhbXQ1MDAnIHA9ezF9IG9uQ2xpY2s9e29uQ2xpY2t9PjE8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICA8PjwvPn1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQYWlyIiwiRmVlIiwic3ViU3RhdGUiLCJzZXRTdWJTdGF0ZSIsIm9uIiwiYW1vdW50IiwiZmVlIiwic2V0RmVlIiwib25DbGljayIsImUiLCJuZXdBbW91bnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiZmlyc3QiLCJzZWNvbmQiLCJkaXYiLCJpZCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/appComponents/reusable/Fee.js\n"));

/***/ })

});