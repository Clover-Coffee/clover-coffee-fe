"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/styles/coffee.module.css
var coffee_module = __webpack_require__(5229);
var coffee_module_default = /*#__PURE__*/__webpack_require__.n(coffee_module);
;// CONCATENATED MODULE: ./src/components/UpdateItemModal.js



function UpdateItemModal({ item , onClose , handleSubmit , setName , setDescription , setPrice , name , description , price , setBrand , brand , setImage , image  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (coffee_module_default()).overlay,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (coffee_module_default()).modalContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (coffee_module_default()).updateForm,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: (coffee_module_default()).updateLabel,
                            children: [
                                "Name:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    className: (coffee_module_default()).inputContainer
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: (coffee_module_default()).descriptionLabel,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    style: {
                                        color: "black"
                                    },
                                    className: (coffee_module_default()).inputContainer
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "Price:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    value: price,
                                    onChange: (e)=>setPrice(e.target.value),
                                    className: (coffee_module_default()).inputContainer
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            value: brand,
                            name: "brand",
                            id: "category-dropdown",
                            onChange: (e)=>setBrand(e.target.value),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "",
                                    children: "Select a Brand"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "stumptown",
                                    children: "Stumptown"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "whitenoise",
                                    children: "White Noise"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "peets",
                                    children: "Peets"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "partners",
                                    children: "Partners"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "Image:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    value: image,
                                    onChange: (e)=>setImage(e.target.value),
                                    className: (coffee_module_default()).inputContainer
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: (coffee_module_default()).submitBtn,
                            children: "Update Item"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: onClose,
                    className: (coffee_module_default()).closeBtn,
                    children: "Close"
                })
            ]
        })
    });
}
/* harmony default export */ const components_UpdateItemModal = (UpdateItemModal);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(497);
// EXTERNAL MODULE: ./src/CartContext.js
var CartContext = __webpack_require__(5587);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4865);
;// CONCATENATED MODULE: ./src/pages/coffee/[id].js
/* eslint-disable @next/next/no-img-element */ 










const Coffee = ({ coffees  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { id  } = router.query;
    const coffee = coffees.find((coffee)=>coffee.id === parseInt(id));
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [name, setName] = (0,external_react_.useState)("");
    const [description, setDescription] = (0,external_react_.useState)("");
    const [price, setPrice] = (0,external_react_.useState)("");
    const [image, setImage] = (0,external_react_.useState)("");
    const [brand, setBrand] = (0,external_react_.useState)("");
    const handleClick = ()=>{
        setShowModal(!showModal);
    };
    const onClose = ()=>{
        setShowModal(false);
    };
    const { addItemToCart  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const handleAddToCart = ()=>{
        const cartItem = {
            id: coffee.id,
            name: coffee.name,
            price: coffee.price,
            image: coffee.image,
            quantity: coffee.quantity
        };
        addItemToCart(cartItem);
        external_sweetalert2_default().fire({
            position: "center",
            icon: "success",
            title: `${coffee.name} added to cart!`,
            showConfirmButton: false,
            timer: 1500
        });
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch(`${config/* default */.Z}/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                description,
                price,
                image,
                brand
            })
        });
        if (response.ok) {
            const coffee = await response.json();
            console.log("Coffee updated:", coffee);
        } else {
            console.error("Failed to update coffee:", response);
        }
    };
    const handleDelete = async (event)=>{
        window.location.reload();
        const response = await fetch(`${config/* default */.Z}/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const coffee = await response.json();
            console.log("coffee deleted:", coffee);
        } else {
            console.error("Failed to delete coffee:", response);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: coffee ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (coffee_module_default()).coffeePage,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (coffee_module_default()).singularCoffee,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (coffee_module_default()).containerLeft,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: coffee.image,
                                className: (coffee_module_default()).specificCoffeeImg,
                                alt: coffee.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (coffee_module_default()).coffeeButtons,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${(coffee_module_default()).coffeeButton} ${(coffee_module_default()).button}`,
                                        onClick: handleClick,
                                        children: "Update Item"
                                    }),
                                    showModal && /*#__PURE__*/ jsx_runtime_.jsx(components_UpdateItemModal, {
                                        item: coffee,
                                        onClose: onClose,
                                        handleSubmit: handleSubmit,
                                        setName: setName,
                                        setDescription: setDescription,
                                        setPrice: setPrice,
                                        name: name,
                                        description: description,
                                        price: price,
                                        setBrand: setBrand,
                                        brand: brand,
                                        setImage: setImage,
                                        image: image
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: handleDelete,
                                        className: `${(coffee_module_default()).coffeeButton} ${(coffee_module_default()).button}`,
                                        children: "Delete Item"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${(coffee_module_default()).coffeeButton} ${(coffee_module_default()).button}`,
                                        onClick: ()=>router.push("/shopall"),
                                        children: "Go Back"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (coffee_module_default()).productDescription,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (coffee_module_default()).productBox,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (coffee_module_default()).productTitle,
                                    children: coffee.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (coffee_module_default()).productPrice,
                                    children: [
                                        "$",
                                        coffee.price
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (coffee_module_default()).productSpecs,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            " ",
                                            coffee.description
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (coffee_module_default()).cartButtons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                            onClick: handleAddToCart,
                                            variant: "dark",
                                            size: "md",
                                            className: (coffee_module_default()).addViewBtn,
                                            children: "Add to Cart"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                variant: "dark",
                                                size: "md",
                                                className: (coffee_module_default()).addViewBtn,
                                                children: "View Cart"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (coffee_module_default()).deleted,
                    children: "Coffee Not Found"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `${(coffee_module_default()).deletedBtn}`,
                    onClick: ()=>router.push("/shopall"),
                    children: "Go Back"
                })
            ]
        })
    });
};
Coffee.getInitialProps = async ()=>{
    const res = await fetch(`${config/* default */.Z}/items`);
    const coffees = await res.json();
    return {
        coffees
    };
};
/* harmony default export */ const _id_ = (Coffee);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,876,587,562], () => (__webpack_exec__(282)));
module.exports = __webpack_exports__;

})();