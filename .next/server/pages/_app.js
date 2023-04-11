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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children  })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addItemToCart = (item)=>{\n        const existingItemIndex = cart.findIndex((cartItem)=>cartItem.id === item.id);\n        if (existingItemIndex >= 0) {\n            const updatedCart = [\n                ...cart\n            ];\n            const existingItem = updatedCart[existingItemIndex];\n            const updatedItem = {\n                ...existingItem,\n                quantity: existingItem.quantity + 1\n            };\n            updatedCart[existingItemIndex] = updatedItem;\n            setCart(updatedCart);\n        } else {\n            setCart([\n                ...cart,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ]);\n        }\n    };\n    const removeItemFromCart = (id)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== id));\n    };\n    const decreaseQuantity = (id)=>{\n        const updatedCart = [\n            ...cart\n        ];\n        const existingItemIndex = updatedCart.findIndex((item)=>item.id === id);\n        const existingItem = updatedCart[existingItemIndex];\n        if (existingItem.quantity === 1) {\n            removeItemFromCart(id);\n        } else {\n            const updatedItem = {\n                ...existingItem,\n                quantity: existingItem.quantity - 1\n            };\n            updatedCart[existingItemIndex] = updatedItem;\n            setCart(updatedCart);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addItemToCart,\n            removeItemFromCart,\n            decreaseQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\CartContext.js\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FydENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUV6QyxNQUFNRSw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFcEMsTUFBTUcsZUFBZSxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQzdDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU1NLGdCQUFnQixDQUFDQyxPQUFTO1FBQy9CLE1BQU1DLG9CQUFvQkosS0FBS0ssU0FBUyxDQUN2QyxDQUFDQyxXQUFhQSxTQUFTQyxFQUFFLEtBQUtKLEtBQUtJLEVBQUU7UUFFdEMsSUFBSUgscUJBQXFCLEdBQUc7WUFDM0IsTUFBTUksY0FBYzttQkFBSVI7YUFBSztZQUM3QixNQUFNUyxlQUFlRCxXQUFXLENBQUNKLGtCQUFrQjtZQUNuRCxNQUFNTSxjQUFjO2dCQUNuQixHQUFHRCxZQUFZO2dCQUNmRSxVQUFVRixhQUFhRSxRQUFRLEdBQUc7WUFDbkM7WUFDQUgsV0FBVyxDQUFDSixrQkFBa0IsR0FBR007WUFDakNULFFBQVFPO1FBQ1QsT0FBTztZQUNOUCxRQUFRO21CQUFJRDtnQkFBTTtvQkFBRSxHQUFHRyxJQUFJO29CQUFFUSxVQUFVO2dCQUFFO2FBQUU7UUFDNUMsQ0FBQztJQUNGO0lBRUEsTUFBTUMscUJBQXFCLENBQUNMLEtBQU87UUFDbENOLFFBQVEsQ0FBQ1ksV0FBYUEsU0FBU0MsTUFBTSxDQUFDLENBQUNYLE9BQVNBLEtBQUtJLEVBQUUsS0FBS0E7SUFDN0Q7SUFFQSxNQUFNUSxtQkFBbUIsQ0FBQ1IsS0FBTztRQUNoQyxNQUFNQyxjQUFjO2VBQUlSO1NBQUs7UUFDN0IsTUFBTUksb0JBQW9CSSxZQUFZSCxTQUFTLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS0ksRUFBRSxLQUFLQTtRQUN0RSxNQUFNRSxlQUFlRCxXQUFXLENBQUNKLGtCQUFrQjtRQUVuRCxJQUFJSyxhQUFhRSxRQUFRLEtBQUssR0FBRztZQUNoQ0MsbUJBQW1CTDtRQUNwQixPQUFPO1lBQ04sTUFBTUcsY0FBYztnQkFDbkIsR0FBR0QsWUFBWTtnQkFDZkUsVUFBVUYsYUFBYUUsUUFBUSxHQUFHO1lBQ25DO1lBQ0FILFdBQVcsQ0FBQ0osa0JBQWtCLEdBQUdNO1lBQ2pDVCxRQUFRTztRQUNULENBQUM7SUFDRjtJQUVBLHFCQUNDLDhEQUFDWCxZQUFZbUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVqQjtZQUFNRTtZQUFlVTtZQUFvQkc7UUFBaUI7a0JBQ3ZGaEI7Ozs7OztBQUdKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG92ZXItY29mZmVlLy4vc3JjL0NhcnRDb250ZXh0LmpzP2ZlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBhZGRJdGVtVG9DYXJ0ID0gKGl0ZW0pID0+IHtcclxuXHRcdGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gY2FydC5maW5kSW5kZXgoXHJcblx0XHRcdChjYXJ0SXRlbSkgPT4gY2FydEl0ZW0uaWQgPT09IGl0ZW0uaWRcclxuXHRcdCk7XHJcblx0XHRpZiAoZXhpc3RpbmdJdGVtSW5kZXggPj0gMCkge1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XTtcclxuXHRcdFx0Y29uc3QgZXhpc3RpbmdJdGVtID0gdXBkYXRlZENhcnRbZXhpc3RpbmdJdGVtSW5kZXhdO1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkSXRlbSA9IHtcclxuXHRcdFx0XHQuLi5leGlzdGluZ0l0ZW0sXHJcblx0XHRcdFx0cXVhbnRpdHk6IGV4aXN0aW5nSXRlbS5xdWFudGl0eSArIDEsXHJcblx0XHRcdH07XHJcblx0XHRcdHVwZGF0ZWRDYXJ0W2V4aXN0aW5nSXRlbUluZGV4XSA9IHVwZGF0ZWRJdGVtO1xyXG5cdFx0XHRzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldENhcnQoWy4uLmNhcnQsIHsgLi4uaXRlbSwgcXVhbnRpdHk6IDEgfV0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQ2FydCA9IChpZCkgPT4ge1xyXG5cdFx0c2V0Q2FydCgocHJldkNhcnQpID0+IHByZXZDYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNyZWFzZVF1YW50aXR5ID0gKGlkKSA9PiB7XHJcblx0XHRjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XTtcclxuXHRcdGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gdXBkYXRlZENhcnQuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcblx0XHRjb25zdCBleGlzdGluZ0l0ZW0gPSB1cGRhdGVkQ2FydFtleGlzdGluZ0l0ZW1JbmRleF07XHJcblxyXG5cdFx0aWYgKGV4aXN0aW5nSXRlbS5xdWFudGl0eSA9PT0gMSkge1xyXG5cdFx0XHRyZW1vdmVJdGVtRnJvbUNhcnQoaWQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdXBkYXRlZEl0ZW0gPSB7XHJcblx0XHRcdFx0Li4uZXhpc3RpbmdJdGVtLFxyXG5cdFx0XHRcdHF1YW50aXR5OiBleGlzdGluZ0l0ZW0ucXVhbnRpdHkgLSAxLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR1cGRhdGVkQ2FydFtleGlzdGluZ0l0ZW1JbmRleF0gPSB1cGRhdGVkSXRlbTtcclxuXHRcdFx0c2V0Q2FydCh1cGRhdGVkQ2FydCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBhZGRJdGVtVG9DYXJ0LCByZW1vdmVJdGVtRnJvbUNhcnQsIGRlY3JlYXNlUXVhbnRpdHkgfX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImFkZEl0ZW1Ub0NhcnQiLCJpdGVtIiwiZXhpc3RpbmdJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJjYXJ0SXRlbSIsImlkIiwidXBkYXRlZENhcnQiLCJleGlzdGluZ0l0ZW0iLCJ1cGRhdGVkSXRlbSIsInF1YW50aXR5IiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwicHJldkNhcnQiLCJmaWx0ZXIiLCJkZWNyZWFzZVF1YW50aXR5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CartContext.js\n");

/***/ }),

/***/ "./src/SearchContext.js":
/*!******************************!*\
  !*** ./src/SearchContext.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchContext\": () => (/* binding */ SearchContext),\n/* harmony export */   \"SearchProvider\": () => (/* binding */ SearchProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SearchProvider = ({ children  })=>{\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const value = {\n        query,\n        setQuery\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\SearchContext.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VhcmNoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBRXpDLE1BQU1FLDhCQUFnQkYsb0RBQWFBLEdBQUc7QUFFdEMsTUFBTUcsaUJBQWlCLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDL0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLFFBQVE7UUFDYkY7UUFDQUM7SUFDRDtJQUVBLHFCQUNDLDhEQUFDSixjQUFjTSxRQUFRO1FBQUNELE9BQU9BO2tCQUFRSDs7Ozs7O0FBRXpDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG92ZXItY29mZmVlLy4vc3JjL1NlYXJjaENvbnRleHQuanM/MjQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3QgdmFsdWUgPSB7XHJcblx0XHRxdWVyeSxcclxuXHRcdHNldFF1ZXJ5LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNlYXJjaENvbnRleHQiLCJTZWFyY2hQcm92aWRlciIsImNoaWxkcmVuIiwicXVlcnkiLCJzZXRRdWVyeSIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SearchContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/CartContext */ \"./src/CartContext.js\");\n/* harmony import */ var _SearchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/SearchContext */ \"./src/SearchContext.js\");\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Clover Coffee\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/clover-logo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchContext__WEBPACK_IMPORTED_MODULE_5__.SearchProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kevin\\\\Desktop\\\\schoolAssignments\\\\clover-coffee-fe\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDaEI7QUFDRDtBQUNnQjtBQUNJO0FBRWpELFNBQVNHLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN0QyxxQkFDQzs7MEJBQ0MsOERBQUNMLGtEQUFJQTs7a0NBQ0osOERBQUNNO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1Isc0RBQVlBOzBCQUNaLDRFQUFDQywwREFBY0E7OEJBQ2QsNEVBQUNFO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdmVyLWNvZmZlZS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcIkAvQ2FydENvbnRleHRcIjtcclxuaW1wb3J0IHsgU2VhcmNoUHJvdmlkZXIgfSBmcm9tIFwiQC9TZWFyY2hDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5DbG92ZXIgQ29mZmVlPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9jbG92ZXItbG9nby5wbmdcIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxDYXJ0UHJvdmlkZXI+XHJcblx0XHRcdFx0PFNlYXJjaFByb3ZpZGVyPlxyXG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0XHRcdDwvU2VhcmNoUHJvdmlkZXI+XHJcblx0XHRcdDwvQ2FydFByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcnRQcm92aWRlciIsIlNlYXJjaFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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