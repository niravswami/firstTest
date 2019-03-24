webpackJsonp([46],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("12a8e43c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdf0d340\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Path.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdf0d340\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Path.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n*[data-v-cdf0d340] {\n    font-size: 14px;\n}\n/*  Small phones: from 0 to 480px */\n@media only screen and (max-width: 480px) {\n.btnSize[data-v-cdf0d340] {\n        font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppCard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AppCard__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        AppCard: __WEBPACK_IMPORTED_MODULE_1__components_AppCard___default.a
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('webHolder', function (data) {
            return _this.webHolder = data;

            _this.$store.dispatch('disSpacialRoute', data);

            setTimeout(function () {});
        });

        this.products = this.getProducts.splice(0, 4);

        /* axios.get('/products')
        .then((response) => this.products = ((response.data).splice(0, 4)))
        .catch((err) => console.log(err)) */
    },
    mounted: function mounted() {
        var _this2 = this;

        setTimeout(function () {
            _this2.routeSelected();
            //this.spacialRoute();
        }, 190);
    },
    data: function data() {
        return {
            webHolder: '',
            products: [],
            cards: [{
                title: 'Glance Designs Festive & Party Printed Women\'s Kurti  (Multicolor)',
                src: 'https://rukminim1.flixcart.com/image/832/832/jk01bww0/kurti/q/3/s/m-evk098-glance-designs-original-imaf7f8sgurzdfky.jpeg?q=70',
                Price: '299' }, {
                title: 'Asus ROG Core i7 8th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics) GL504GM-ES152T Gaming Laptop  (15.6 inch, Black, 2.4 kg)',
                src: 'https://rukminim1.flixcart.com/image/832/832/jll6xzk0/computer/3/v/s/asus-na-gaming-laptop-original-imaf8zqzvef2z5gn.jpeg?q=70',
                Price: '1,39,990' }, {
                title: 'AV Toys 5 Feet teddy bear - 152 cm  (Pink)',
                src: 'https://rukminim1.flixcart.com/image/832/832/j9it30w0/stuffed-toy/w/t/m/5-feet-teddy-bear-152-av-toys-original-imaez9nfwj5msfyh.jpeg?q=70',
                Price: '1,547' }, {
                title: 'Apple iPhone XS Max (Gold, 64 GB)',
                src: 'https://rukminim1.flixcart.com/image/832/832/jm9hfgw0/mobile/e/8/s/apple-iphone-xs-max-mt522hn-a-original-imaf97f6vzzxdq4p.jpeg?q=70',
                Price: '1,09,900' }],
            categories: ['Electronics', 'Men', 'Women', 'Kids']
        };
    },

    methods: {
        changeprd: function changeprd() {

            this.products = this.getProducts.splice(0, 4);
        },
        routeSelected: function routeSelected() {

            var x = this.$route.params.webholder;
            this.webHolder = x;
            switch (x) {

                case 'products':
                    //return this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searchproducts', name: 'Products', web: 'products' });;
                    break;

                case 'serviceandbusiness':
                    //return this.searchOptionSelected = {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness' });;
                    break;

                case 'properties':
                    //return this.searchOptionSelected = {id: 'searchproperties', name: 'Propeties', web: 'properties'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searchproperties', name: 'Propeties', web: 'properties' });;
                    break;

                case 'useditems':
                    //return this.searchOptionSelected = {id: 'searchuseditems', name: 'Used Items', web: 'useditems'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searchuseditems', name: 'Used Items', web: 'useditems' });;
                    break;

                case 'education':
                    //return this.searchOptionSelected = {id: 'searcheducation', name: 'Education', web: 'education'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searcheducation', name: 'Education', web: 'education' });;
                    break;

                default:
                    //return this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                    return __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('pathWebholder', { id: 'searchproducts', name: 'Products', web: 'products' });;
            }
        }
    },
    computed: {
        getProducts: function getProducts() {
            return this.$store.getters.getSpacialRouteArr.splice(0, 4);
        }
    },
    watch: {
        webholder: function webholder() {
            this.$route.params.webholder = this.webholder;
            //this.$router.push({ name: 'home', props:{ webholder : this.webholder} })

            console.log(this.webholder + "path");
        },
        '$route': function $route(to, from) {

            this.$route.params.webholder = this.webHolder;
        }
    }
});

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "ma-0": "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "", lg12: "" } },
        [
          _vm._l(_vm.categories, function(cate) {
            return [
              _c(
                "v-flex",
                {
                  key: cate,
                  staticClass: "mx-auto mb-3  background-shadow",
                  attrs: { xs12: "", lg11: "" }
                },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-layout",
                        {
                          attrs: {
                            row: "",
                            wrap: "",
                            "align-center": "",
                            "ma-0": ""
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            {
                              attrs: {
                                xs12: "",
                                sm2: "",
                                md2: "",
                                lg2: "",
                                "px-3": ""
                              }
                            },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    row: "",
                                    wrap: "",
                                    "align-center": ""
                                  }
                                },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      attrs: {
                                        xs4: "",
                                        sm10: "",
                                        "offset-sm2": "",
                                        lg10: "",
                                        "offset-lg2": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card-actions",
                                        { staticClass: "pa-0" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "btnSize",
                                              attrs: {
                                                flat: "",
                                                small: "",
                                                color: "#ef6c3c"
                                              }
                                            },
                                            [_vm._v("View All")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    {
                                      attrs: {
                                        xs7: "",
                                        sm10: "",
                                        "offset-sm2": "",
                                        lg10: "",
                                        "offset-lg2": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card-title",
                                        { staticClass: "px-4" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "categoryTitle" },
                                            [_vm._v(_vm._s(cate))]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              attrs: { xs12: "", sm10: "", md10: "", lg10: "" }
                            },
                            [
                              _c("AppCard", {
                                attrs: {
                                  info: _vm.getProducts,
                                  propWebHolder: _vm.webHolder
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cdf0d340", module.exports)
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(235)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cdf0d340"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Path/Path.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdf0d340", Component.options)
  } else {
    hotAPI.reload("data-v-cdf0d340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});