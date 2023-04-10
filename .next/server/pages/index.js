(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8462:
/***/ ((module) => {

// Exports
module.exports = {
	"topsellerTitle": "homepage_topsellerTitle__fjZDR",
	"topsellerSection": "homepage_topsellerSection__qkBYf",
	"coffee": "homepage_coffee__tEk0B",
	"shopallButton": "homepage_shopallButton__2Zk8A",
	"randomizedImgs": "homepage_randomizedImgs__x1p4u",
	"coffeeName": "homepage_coffeeName__8Y2Fz",
	"pictureContainer": "homepage_pictureContainer__EPh2t",
	"cta": "homepage_cta__AEl_8",
	"ctaBtn": "homepage_ctaBtn__HCOgf",
	"brewGuides": "homepage_brewGuides__BLLXn",
	"brewLinks": "homepage_brewLinks__HStjF",
	"brewLink": "homepage_brewLink__xoguX"
};


/***/ }),

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_BASE_URL = "https://clover-coffee-be.onrender.com/";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_BASE_URL);


/***/ }),

/***/ 3972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/homepage.module.css
var homepage_module = __webpack_require__(8462);
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);
// EXTERNAL MODULE: ./src/components/NavBar.js
var NavBar = __webpack_require__(971);
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(5700);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4865);
;// CONCATENATED MODULE: ./src/components/HomePage.js
/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @next/next/no-img-element */ 






function HomePage({ coffees  }) {
    const [topSellers, setTopSellers] = (0,external_react_.useState)([]);
    const [coffee, setCoffee] = (0,external_react_.useState)([]);
    async function fetchTopSellers() {
        let n = 3;
        const shuffled = coffees.sort(()=>{
            return 0.5 - Math.random();
        });
        const selected = shuffled.slice(0, n);
        setTopSellers(selected);
        return selected;
    }
    (0,external_react_.useEffect)(()=>{
        fetchTopSellers();
    }, [
        coffees
    ]);
    async function specificCoffee() {
        const response = await fetch(`${config/* default */.Z}/${id}`);
        const coffeeData = await response.json();
        setCoffee(coffeeData);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (homepage_module_default()).pictureContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (homepage_module_default()).ctaBtn,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (homepage_module_default()).cta,
                            children: "Taste the difference, one cup at a time."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: (homepage_module_default()).buttonSection,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/shopall",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (homepage_module_default()).shopallButton,
                                    children: "Shop All"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (homepage_module_default()).topsellerTitle,
                children: "TOP SELLERS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (homepage_module_default()).topsellerSection,
                children: topSellers.map((coffee)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (homepage_module_default()).coffee,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `/coffee/${coffee.id}`,
                            style: {
                                textDecoration: "none"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (homepage_module_default()).randomizedImgs,
                                    src: coffee.image,
                                    alt: coffee.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (homepage_module_default()).coffeeName,
                                    children: coffee.name.substring(0, 20)
                                })
                            ]
                        })
                    }, coffee.id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (homepage_module_default()).brewGuides,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (homepage_module_default()).brewText,
                        children: "Brew Guides"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (homepage_module_default()).brewLinks,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (homepage_module_default()).brewLink,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://counterculturecoffee.com/pages/quick-easy-pour-over",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_Katilawave_edit_c49307a2-9c4b-4d11-aab9-f1e5076b4676_360x.png?v=1672775101",
                                            alt: "Pour Over"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Pour Over"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (homepage_module_default()).brewLink,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://counterculturecoffee.com/pages/quick-easy-french-press",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_french-press_edit_360x.png?v=1672774158",
                                            alt: "French Press"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "French Press"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (homepage_module_default()).brewLink,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://counterculturecoffee.com/pages/quick-easy-chemex",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Frame-2_360x.png?v=1650577682",
                                            alt: "Chemex"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Chemex"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (homepage_module_default()).brewLink,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://counterculturecoffee.com/pages/quick-easy-v60",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Live-Stroke-Individual_Hario_V60_6a8093a7-629c-4cf5-b3c2-7832668228fb_360x.png?v=1673988739",
                                            alt: "Hario V60"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Hario V60"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (homepage_module_default()).brewLink,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://counterculturecoffee.com/pages/quick-easy-aeropress",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_aeropress_edit_5a44b975-35ca-47ad-a3d2-b29343251d2e_360x.png?v=1672774227",
                                            alt: "Aeropress"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Aeropress"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/index.js




async function getStaticProps() {
    const res = await fetch(`${config/* default */.Z}/items`);
    const coffees = await res.json();
    return {
        props: {
            coffees
        }
    };
}
function Home({ coffees  }) {
    const [items, setItems] = (0,external_react_.useState)([]);
    async function fetchItems() {
        try {
            const response = await fetch(`${config/* default */.Z}/items`);
            const itemsData = await response.json();
            setItems(itemsData);
        } catch (err) {
            console.log("Oh no an error! ", err);
        }
    }
    (0,external_react_.useEffect)(()=>{
        fetchItems();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "appContainer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mainContainer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(HomePage, {
                    coffees: coffees
                })
            })
        })
    });
}


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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,876], () => (__webpack_exec__(3972)));
module.exports = __webpack_exports__;

})();