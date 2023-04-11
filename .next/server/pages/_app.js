/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/CartContext.js":
/*!****************************!*\
  !*** ./src/CartContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children  })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addItemToCart = (item)=>{\n        const existingItemIndex = cart.findIndex((cartItem)=>cartItem.id === item.id);\n        if (existingItemIndex >= 0) {\n            const updatedCart = [\n                ...cart\n            ];\n            const existingItem = updatedCart[existingItemIndex];\n            const updatedItem = {\n                ...existingItem,\n                quantity: existingItem.quantity + 1\n            };\n            updatedCart[existingItemIndex] = updatedItem;\n            setCart(updatedCart);\n        } else {\n            setCart([\n                ...cart,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ]);\n        }\n    };\n    const removeItemFromCart = (id)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== id));\n    };\n    const decreaseQuantity = (id)=>{\n        const updatedCart = [\n            ...cart\n        ];\n        const existingItemIndex = updatedCart.findIndex((item)=>item.id === id);\n        const existingItem = updatedCart[existingItemIndex];\n        if (existingItem.quantity === 1) {\n            removeItemFromCart(id);\n        } else {\n            const updatedItem = {\n                ...existingItem,\n                quantity: existingItem.quantity - 1\n            };\n            updatedCart[existingItemIndex] = updatedItem;\n            setCart(updatedCart);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addItemToCart,\n            removeItemFromCart,\n            decreaseQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/CartContext.js\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FydENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUV6QyxNQUFNRSw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFcEMsTUFBTUcsZUFBZSxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQzdDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU1NLGdCQUFnQixDQUFDQyxPQUFTO1FBQy9CLE1BQU1DLG9CQUFvQkosS0FBS0ssU0FBUyxDQUN2QyxDQUFDQyxXQUFhQSxTQUFTQyxFQUFFLEtBQUtKLEtBQUtJLEVBQUU7UUFFdEMsSUFBSUgscUJBQXFCLEdBQUc7WUFDM0IsTUFBTUksY0FBYzttQkFBSVI7YUFBSztZQUM3QixNQUFNUyxlQUFlRCxXQUFXLENBQUNKLGtCQUFrQjtZQUNuRCxNQUFNTSxjQUFjO2dCQUNuQixHQUFHRCxZQUFZO2dCQUNmRSxVQUFVRixhQUFhRSxRQUFRLEdBQUc7WUFDbkM7WUFDQUgsV0FBVyxDQUFDSixrQkFBa0IsR0FBR007WUFDakNULFFBQVFPO1FBQ1QsT0FBTztZQUNOUCxRQUFRO21CQUFJRDtnQkFBTTtvQkFBRSxHQUFHRyxJQUFJO29CQUFFUSxVQUFVO2dCQUFFO2FBQUU7UUFDNUMsQ0FBQztJQUNGO0lBRUEsTUFBTUMscUJBQXFCLENBQUNMLEtBQU87UUFDbENOLFFBQVEsQ0FBQ1ksV0FBYUEsU0FBU0MsTUFBTSxDQUFDLENBQUNYLE9BQVNBLEtBQUtJLEVBQUUsS0FBS0E7SUFDN0Q7SUFFQSxNQUFNUSxtQkFBbUIsQ0FBQ1IsS0FBTztRQUNoQyxNQUFNQyxjQUFjO2VBQUlSO1NBQUs7UUFDN0IsTUFBTUksb0JBQW9CSSxZQUFZSCxTQUFTLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS0ksRUFBRSxLQUFLQTtRQUN0RSxNQUFNRSxlQUFlRCxXQUFXLENBQUNKLGtCQUFrQjtRQUVuRCxJQUFJSyxhQUFhRSxRQUFRLEtBQUssR0FBRztZQUNoQ0MsbUJBQW1CTDtRQUNwQixPQUFPO1lBQ04sTUFBTUcsY0FBYztnQkFDbkIsR0FBR0QsWUFBWTtnQkFDZkUsVUFBVUYsYUFBYUUsUUFBUSxHQUFHO1lBQ25DO1lBQ0FILFdBQVcsQ0FBQ0osa0JBQWtCLEdBQUdNO1lBQ2pDVCxRQUFRTztRQUNULENBQUM7SUFDRjtJQUVBLHFCQUNDLDhEQUFDWCxZQUFZbUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVqQjtZQUFNRTtZQUFlVTtZQUFvQkc7UUFBaUI7a0JBQ3ZGaEI7Ozs7OztBQUdKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG92ZXItY29mZmVlLy4vc3JjL0NhcnRDb250ZXh0LmpzP2ZlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3QgYWRkSXRlbVRvQ2FydCA9IChpdGVtKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBjYXJ0LmZpbmRJbmRleChcblx0XHRcdChjYXJ0SXRlbSkgPT4gY2FydEl0ZW0uaWQgPT09IGl0ZW0uaWRcblx0XHQpO1xuXHRcdGlmIChleGlzdGluZ0l0ZW1JbmRleCA+PSAwKSB7XG5cdFx0XHRjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XTtcblx0XHRcdGNvbnN0IGV4aXN0aW5nSXRlbSA9IHVwZGF0ZWRDYXJ0W2V4aXN0aW5nSXRlbUluZGV4XTtcblx0XHRcdGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuXHRcdFx0XHQuLi5leGlzdGluZ0l0ZW0sXG5cdFx0XHRcdHF1YW50aXR5OiBleGlzdGluZ0l0ZW0ucXVhbnRpdHkgKyAxLFxuXHRcdFx0fTtcblx0XHRcdHVwZGF0ZWRDYXJ0W2V4aXN0aW5nSXRlbUluZGV4XSA9IHVwZGF0ZWRJdGVtO1xuXHRcdFx0c2V0Q2FydCh1cGRhdGVkQ2FydCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldENhcnQoWy4uLmNhcnQsIHsgLi4uaXRlbSwgcXVhbnRpdHk6IDEgfV0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAoaWQpID0+IHtcblx0XHRzZXRDYXJ0KChwcmV2Q2FydCkgPT4gcHJldkNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCkpO1xuXHR9O1xuXG5cdGNvbnN0IGRlY3JlYXNlUXVhbnRpdHkgPSAoaWQpID0+IHtcblx0XHRjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XTtcblx0XHRjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IHVwZGF0ZWRDYXJ0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IGV4aXN0aW5nSXRlbSA9IHVwZGF0ZWRDYXJ0W2V4aXN0aW5nSXRlbUluZGV4XTtcblxuXHRcdGlmIChleGlzdGluZ0l0ZW0ucXVhbnRpdHkgPT09IDEpIHtcblx0XHRcdHJlbW92ZUl0ZW1Gcm9tQ2FydChpZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuXHRcdFx0XHQuLi5leGlzdGluZ0l0ZW0sXG5cdFx0XHRcdHF1YW50aXR5OiBleGlzdGluZ0l0ZW0ucXVhbnRpdHkgLSAxLFxuXHRcdFx0fTtcblx0XHRcdHVwZGF0ZWRDYXJ0W2V4aXN0aW5nSXRlbUluZGV4XSA9IHVwZGF0ZWRJdGVtO1xuXHRcdFx0c2V0Q2FydCh1cGRhdGVkQ2FydCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnQsIGFkZEl0ZW1Ub0NhcnQsIHJlbW92ZUl0ZW1Gcm9tQ2FydCwgZGVjcmVhc2VRdWFudGl0eSB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsInNldENhcnQiLCJhZGRJdGVtVG9DYXJ0IiwiaXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiY2FydEl0ZW0iLCJpZCIsInVwZGF0ZWRDYXJ0IiwiZXhpc3RpbmdJdGVtIiwidXBkYXRlZEl0ZW0iLCJxdWFudGl0eSIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsInByZXZDYXJ0IiwiZmlsdGVyIiwiZGVjcmVhc2VRdWFudGl0eSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CartContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/CartContext */ \"./src/CartContext.js\");\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Clover Coffee\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/pages/_app.js\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/clover-logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/pages/_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sonam.tsering/multiverse/clover-coffee/clover-coffee-fe/src/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNoQjtBQUNEO0FBQ2dCO0FBRTdDLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN0QyxxQkFDQzs7MEJBQ0MsOERBQUNKLGtEQUFJQTs7a0NBQ0osOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1Asc0RBQVlBOzBCQUNaLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSTVCO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG92ZXItY29mZmVlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiQC9DYXJ0Q29udGV4dFwiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q2xvdmVyIENvZmZlZTwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Nsb3Zlci1sb2dvLnBuZ1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8Q2FydFByb3ZpZGVyPlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L0NhcnRQcm92aWRlcj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJDYXJ0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();