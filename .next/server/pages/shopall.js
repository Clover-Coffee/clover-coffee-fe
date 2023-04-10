(() => {
var exports = {};
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 9270:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel-container": "Carousel_carousel-container__yv_um",
	"carousel-wrapper": "Carousel_carousel-wrapper__Ebf1_",
	"carousel-content-wrapper": "Carousel_carousel-content-wrapper__iMPQO",
	"carousel-content": "Carousel_carousel-content__e4hUB",
	"left-arrow": "Carousel_left-arrow__RXcyg",
	"right-arrow": "Carousel_right-arrow__qxooo",
	"singleCoffee": "Carousel_singleCoffee__zuo9V"
};


/***/ }),

/***/ 5730:
/***/ ((module) => {

// Exports
module.exports = {
	"featured": "shopall_featured__2v_1s",
	"productsContainer": "shopall_productsContainer__X0ftr",
	"my-custom-class": "shopall_my-custom-class___HPFw"
};


/***/ }),

/***/ 9329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shopall)
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
;// CONCATENATED MODULE: ./src/components/AddModal.js



function AddModal({ addItems , onClose , setName , setDescription , setPrice , name , description , price , setBrand , brand , setImage , image  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (coffee_module_default()).overlay,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (coffee_module_default()).modalContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (coffee_module_default()).updateForm,
                    onSubmit: (event)=>{
                        event.preventDefault();
                        addItems();
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: (coffee_module_default()).updateLabel,
                            children: [
                                "Title:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
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
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "Price:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    value: price,
                                    onChange: (e)=>setPrice(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            value: brand,
                            name: "brand",
                            id: "brand-dropdown",
                            onChange: (e)=>setBrand(e.target.value),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Brand"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "",
                                    children: "Select a Brand"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "stumptown",
                                    children: "Stumptown"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "peets",
                                    children: "Peets"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "partners",
                                    children: "Partners"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "whitenoise",
                                    children: "White Noise"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "Image:",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    value: image,
                                    onChange: (e)=>setImage(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (coffee_module_default()).submitBtn,
                            type: "submit",
                            children: "Add Item"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (coffee_module_default()).closeBtn,
                    onClick: onClose,
                    children: "Close"
                })
            ]
        })
    });
}
/* harmony default export */ const components_AddModal = (AddModal);

// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(497);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/Carousel.module.css
var Carousel_module = __webpack_require__(9270);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
;// CONCATENATED MODULE: ./src/components/Carousel.js
/* eslint-disable @next/next/no-img-element */ 



const Carousel = (props)=>{
    const { coffees  } = props;
    // console.log(coffees);
    const [currentIndex, setCurrentIndex] = (0,external_react_.useState)(0);
    const [length, setLength] = (0,external_react_.useState)(coffees.length);
    const [touchPosition, setTouchPosition] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setLength(coffees.length);
    }, [
        coffees
    ]);
    const next = ()=>{
        if (currentIndex < length - 4) {
            setCurrentIndex((prevState)=>prevState + 1);
        }
    };
    const prev = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex((prevState)=>prevState - 1);
        }
    };
    const handleTouchStart = (e)=>{
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const handleTouchMove = (e)=>{
        const touchDown = touchPosition;
        if (touchDown === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) {
            next();
        }
        if (diff < -5) {
            prev();
        }
        setTouchPosition(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Carousel_module_default())["carousel-container"],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Carousel_module_default())["carousel-wrapper"],
            children: [
                currentIndex > 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: prev,
                    className: (Carousel_module_default())["left-arrow"],
                    children: "<"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Carousel_module_default())["carousel-content-wrapper"],
                    onTouchStart: handleTouchStart,
                    onTouchMove: handleTouchMove,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Carousel_module_default())["carousel-content"],
                        style: {
                            transform: `translateX(-${currentIndex * 100}%)`
                        },
                        children: coffees.map((coffee)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Carousel_module_default()).singleCoffee,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/coffee/${coffee.id}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%"
                                        },
                                        src: coffee.image,
                                        alt: "coffee-bag"
                                    })
                                })
                            }, coffee.id);
                        })
                    })
                }),
                currentIndex < length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: next,
                    className: (Carousel_module_default())["right-arrow"],
                    children: ">"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Carousel = (Carousel);

// EXTERNAL MODULE: ./src/styles/shopall.module.css
var shopall_module = __webpack_require__(5730);
var shopall_module_default = /*#__PURE__*/__webpack_require__.n(shopall_module);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4865);
;// CONCATENATED MODULE: ./src/pages/shopall.js








const ShopAll = ({ coffees  })=>{
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
        window.location.reload();
    };
    const addItems = async (event)=>{
        window.location.reload();
        console.log("clicked");
        const response = await fetch(`${config/* default */.Z}/items`, {
            method: "POST",
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
            const item = await response.json();
            console.log("Item added:", item);
        } else {
            console.error("Failed to add item:", response);
        }
    };
    const stumpsCoffee = coffees.filter((item)=>item.brand === "stumptown");
    const peetsCoffee = coffees.filter((item)=>item.brand === "peets");
    const partnersCoffee = coffees.filter((item)=>item.brand === "partners");
    const whitenoiseCoffee = coffees.filter((item)=>item.brand === "whitenoise");
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (shopall_module_default()).productsContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "products-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (shopall_module_default()).featured,
                            children: "Stumptown Coffee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Carousel, {
                            coffees: stumpsCoffee
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "products-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (shopall_module_default()).featured,
                            children: "Peets Coffee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Carousel, {
                            coffees: peetsCoffee
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "products-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (shopall_module_default()).featured,
                            children: "Partners Coffee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Carousel, {
                            coffees: partnersCoffee
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "products-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (shopall_module_default()).featured,
                            children: "White Noise Coffee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Carousel, {
                            coffees: whitenoiseCoffee
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (shopall_module_default()).customButton,
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                            onClick: handleClick,
                            variant: "dark",
                            size: "md",
                            className: (shopall_module_default())[`my-custom-class`],
                            children: "ADD NEW COFFEE"
                        })
                    ]
                }),
                showModal && /*#__PURE__*/ jsx_runtime_.jsx(components_AddModal, {
                    setName: setName,
                    setDescription: setDescription,
                    setPrice: setPrice,
                    handleClick: handleClick,
                    name: name,
                    description: description,
                    price: price,
                    brand: brand,
                    setBrand: setBrand,
                    image: image,
                    setImage: setImage,
                    onClose: onClose,
                    addItems: addItems
                })
            ]
        })
    });
};
ShopAll.getInitialProps = async ()=>{
    const res = await fetch(`${config/* default */.Z}/items`);
    const coffees = await res.json();
    return {
        coffees
    };
};
/* harmony default export */ const shopall = (ShopAll);


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,876,562], () => (__webpack_exec__(9329)));
module.exports = __webpack_exports__;

})();