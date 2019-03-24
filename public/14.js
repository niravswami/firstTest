webpackJsonp([14],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(209)
/* template */
var __vue_template__ = __webpack_require__(210)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/components/Review/ReviewComp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d80c83a", Component.options)
  } else {
    hotAPI.reload("data-v-8d80c83a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            rating: 0,
            ratingHeading: '',
            ratingDescription: ''
        };
    },

    methods: {
        submitRating: function submitRating() {

            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('submitRating');
        },
        cancelRating: function cancelRating() {

            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('cancelRating');
        }
    },
    watch: {
        rating: function rating() {
            this.$emit('rating', this.rating);
        },
        ratingHeading: function ratingHeading() {
            this.$emit('ratingHeading', this.ratingHeading);
        },
        ratingDescription: function ratingDescription() {
            this.$emit('ratingDescription', this.ratingDescription);
        }
    }
});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-layout",
        { attrs: { "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3" },
                [
                  _c("div", { staticClass: "subheading font-weight-medium" }, [
                    _vm._v(
                      "\n                    Rate Product\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-rating", {
                    staticClass: "mb-3",
                    attrs: {
                      color: "yellow darken-3",
                      "background-color": "grey darken-1",
                      "empty-icon": "$vuetify.icons.ratingFull",
                      "half-increments": "",
                      hover: ""
                    },
                    model: {
                      value: _vm.rating,
                      callback: function($$v) {
                        _vm.rating = $$v
                      },
                      expression: "rating"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "subheading font-weight-medium" }, [
                    _vm._v(
                      "\n                    Write Review\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Heading", color: "orange darken-2" },
                    model: {
                      value: _vm.ratingHeading,
                      callback: function($$v) {
                        _vm.ratingHeading = $$v
                      },
                      expression: "ratingHeading"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: { label: "Description", color: "orange darken-2" },
                    model: {
                      value: _vm.ratingDescription,
                      callback: function($$v) {
                        _vm.ratingDescription = $$v
                      },
                      expression: "ratingDescription"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", block: "", flat: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.submitRating($event)
                            }
                          }
                        },
                        [_vm._v("submit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "error", block: "", flat: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.cancelRating($event)
                            }
                          }
                        },
                        [_vm._v("cancel")]
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
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-8d80c83a", module.exports)
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1fd933ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55d32178\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SingleProduct.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55d32178\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SingleProduct.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n*[data-v-55d32178] {\n    font-size: 14px;\n}\n.cardScroll[data-v-55d32178] {\n    max-height: 350px;\n    overflow-y: auto;\n}\n.vStore[data-v-55d32178]{\n    font-size: 12px;\n    color: blue;\n}\n.saveBtn[data-v-55d32178] {\n    /* background: linear-gradient(to right,#f12711,#f5af19); */\n    background: -webkit-gradient(linear,left top, right top,from(#56ab2f),to(#a8e063));\n    background: linear-gradient(to right,#56ab2f,#a8e063);\n}\n.removeBtn[data-v-55d32178] {\n    background: -webkit-gradient(linear,left top, right top,from(#ED213A),to(#93291E));\n    background: linear-gradient(to right,#ED213A,#93291E);\n}\n.post[data-v-55d32178] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n.mainTitle[data-v-55d32178] {\n    font-size: 16px;\n}\n.priceDiv[data-v-55d32178] {\n  font-size: 20px;\n}\n.reviewSpan[data-v-55d32178] {\n    color: #878787;\n    font-size: 13px;\n}\n.subtitle[data-v-55d32178] {\n    font-size: 13px;\n}\n.width[data-v-55d32178] {\n    max-width: 1400px;\n}\n/*  Small phones: from 0 to 480px */\n@media only screen and (max-width: 480px) {\n*[data-v-55d32178] {\n        font-size: 14px;\n}\n.mainTitle[data-v-55d32178] {\n        font-size: 14px;\n}\n.priceDiv[data-v-55d32178]  {\n        font-size: 16px;\n}\n.rating[data-v-55d32178] {\n        font-size: 11px;\n        padding: 0px 4px 2px 6px;\n}\n.previousPrice[data-v-55d32178], .discount[data-v-55d32178] {\n      font-size: 12px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppCard__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_AppCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Review_ReviewComp__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Review_ReviewComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Review_ReviewComp__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        AppCard: __WEBPACK_IMPORTED_MODULE_3__components_AppCard___default.a,
        ReviewComp: __WEBPACK_IMPORTED_MODULE_4__components_Review_ReviewComp___default.a
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__["a" /* selectSearchRoute */]],
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('savedProduct', function (data) {

            if (_this.$route.query.prid == data) {
                _this.saveButton = false;
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('submitRating', function (data) {

            _this.submitRating();
        });
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('cancelRating', function (data) {

            _this.cancelRating();
        });

        // this.getSingleProductAndReviews(this.id)


        /* axios.get('http://localhost:8000/api/products')
        .then((response) => {
            let aa = response.data.data;
            let b = []
            aa.filter(a => {
                if(a.storeview_id == this.product.storeview_id && a.id !== this.product.storeview_id) {
                    if(b.length <= 3) {
                         b.push(a);
                     } else {
                        return;
                    }
                }
            })
            this.ProductsFromThisStoreview = b;
            //console.log(response.data.data)
            //console.log(b)
        })
        .catch((errors) => {
            console.log(errors)
        }) */
    },
    beforeMount: function beforeMount() {
        this.getSingleProductAndReviews(this.getID);
    },
    mounted: function mounted() {
        //this.routeSelected();
        //this.getSaveProducts();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        // react to route changes...
        //this.id = to.params.prd_id;
        this.getID;
        //this.getSingleProductAndReviews(this.getID);
        //this.getSaveProducts();
        // don't forget to call next()
        next();
    },

    props: ['propID'],
    data: function data() {
        return {
            loading: false,
            saveButton: false,
            saveBtnLoader: false,
            ratingDialog: false,
            foundUrl: '',

            dialogImage: false,

            /* =============   review   ==================== */
            rating: 0,
            ratingHeading: '',
            ratingDescription: '',
            reviewBlock: false,

            what: '',
            img: null,

            product: {},
            reviews: [],
            ProductsFromThisStoreview: [],
            backupImg: __webpack_require__(5),
            thumbImgs: [{ img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2pu5p3r48.jpeg?q=70' }, { img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2rnzjfugg.jpeg?q=70' }, { img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2zfgb3rey.jpeg?q=70' }, { img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/ethnic-set/r/c/m/l-k95119-511-deyann-original-imaf5gx27jrgrtkk.jpeg?q=70' }],
            details: [{
                heading: 'Size',
                description: 'S, M, L, XL, XXL, 3XL'
            }, {
                heading: 'Highlights',
                description: 'Pure Cotton Fabric, Full Sleeve, Solid Pattern, Color: Black,For Men\'s'
            }, {
                heading: 'Description',
                description: 'This Stylish Kurta come with pure cotton Pykama.Kurta Febric was Pure cotton with Regular Fit.Kurta Sleeve was Full and it also can wear with simple casual pant or jeans.This slunting kurta can be used for party as well regular basis also'
            }],
            storeAddress: 'b\\24 Jivkor nagar, near swami vivekanad garden, bhatar road, surat.'
        };
    },

    methods: {
        getSingleProductAndReviews: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(id) {
                var _this2 = this;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                this.loading = true;

                                console.log(this.$route.query.ref);

                                //axios.get('http://localhost:8000/api/products/' + id)
                                axios.get(this.$route.query.ref).then(function (response) {
                                    console.log(response);

                                    if (response) {

                                        var data = response.data.data;

                                        _this2.product = data;

                                        _this2.findSavedItemUrl(data.what);
                                        _this2.what = data.what;
                                        _this2.routeSelected();

                                        _this2.getSaveProducts();

                                        _this2.productsFromStr(data.storeview_id);

                                        _this2.getReviewRating(data.reviews_link);

                                        _this2.loading = false;
                                    }
                                }).catch(function (errors) {
                                    console.log(errors.response);
                                    console.log(errors);

                                    _this2.loading = false;

                                    if (errors) {
                                        console.log(errors.response.status);

                                        if (errors.response.status == 404) {

                                            _this2.$router.replace('/404');
                                        }
                                    }
                                });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getSingleProductAndReviews(_x) {
                return _ref.apply(this, arguments);
            }

            return getSingleProductAndReviews;
        }(),
        getReviewRating: function getReviewRating(link) {
            var _this3 = this;

            if (link) {

                this.reviewBlock = true;

                var a = link; // ? link : 'http://localhost:8000/api/products/' + this.$route.query.prid + '/reviews';

                console.log(a);
                axios.get(a).then(function (response) {
                    console.log(response);
                    _this3.reviews = response.data.data;
                }).catch(function (errors) {
                    console.log(errors.response);
                });
            }
        },
        getProductsFromStr: function getProductsFromStr() {
            var _this4 = this;

            axios.get('/products').then(function (response) {

                var aa = response.data.data;
                var b = [];

                aa.forEach(function (a) {
                    if (a.storeview_id == _this4.$route.query.svid && _this4.ProductsFromThisStoreview.length <= 3) {
                        if (a.id != _this4.getID) {

                            console.log(a.id);

                            _this4.ProductsFromThisStoreview.push(a);
                        } else {
                            console.log(a.id);
                        }
                    }
                });
                console.log(_this4.ProductsFromThisStoreview);
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        productsFromStr: function productsFromStr(str_id) {
            var _this5 = this;

            axios.get('/productsfromstoreview', { params: { str_id: str_id } }).then(function (res) {
                console.log(res);

                var data = res.data.prdFrmStr;

                _this5.ProductsFromThisStoreview = data.splice(0, 4);
            }).catch(function (err) {
                console.log(err.response);
            });
        },


        /* ================   Rating Review   ==================================== */

        openRatingDialog: function openRatingDialog() {

            if (localStorage.getItem('token')) {

                this.ratingDialog = true;
            } else {

                __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('signinDialog', true);
            }
        },
        submitRating: function submitRating() {

            if (localStorage.getItem('token')) {

                if (this.rating == 0) {

                    alert('Please Rate This Product');
                    return;
                }

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                var rating = new FormData();

                var prdId = this.$route.query.prid;

                rating.append('prId', prdId);

                rating.append('rating', this.rating);

                if (this.ratingHeading != null || this.ratingHeading != '') {

                    rating.append('ratingHeading', this.ratingHeading);
                }

                if (this.ratingDescription != null || this.ratingDescription != '') {

                    rating.append('ratingDescription', this.ratingDescription);
                }

                axios.post('/products/' + prdId + '/reviews', rating).then(function (res) {
                    console.log(res);
                }).catch(function (err) {
                    console.log(err.response);
                });
            } else {

                __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('signinDialog', true);
            }
        },
        cancelRating: function cancelRating() {

            this.rating = null;

            this.ratingHeading = null;

            this.ratingDescription = null;

            this.ratingDialog = false;
        },
        mouseover: function mouseover($event) {

            //console.log($event);
            // console.log(this.$refs);
            //return;
            var id = $event.target.parentElement.parentElement.parentElement.id;

            if (id == 0) {
                //console.log(this.$refs.img01[0].currentSrc);
                //this.img = this.images[0].src;
                // this.$refs.img01[0].$vnode.currentSrc
                return this.img = this.$refs.img0.currentSrc;
            } else if (id == '1') {

                return this.img = this.$refs.img1[0].currentSrc;
            } else if (id == '2') {

                this.img = this.$refs.img2[0].currentSrc;
            } else if (id == '3') {

                this.img = this.$refs.img3[0].currentSrc;
            } else if (id == '4') {

                this.img = this.$refs.img4[0].currentSrc;
            }
        },
        findSavedItemUrl: function findSavedItemUrl(kk) {

            console.log(kk);

            var url = kk;

            switch (url) {

                case 'products':
                    this.foundUrl = 'saveproducts';
                    break;

                case 'serviceandbusiness':
                    this.foundUrl = 'saveservice';
                    break;

                case 'education':
                    this.foundUrl = 'saveeducation';
                    break;

                case 'properties':
                    this.foundUrl = 'saveproperty';
                    break;

                case 'useditems':
                    this.foundUrl = 'saveuseditem';
                    break;

                default:

                    return;
            }
        },
        getSaveProducts: function getSaveProducts() {
            var _this6 = this;

            if (localStorage.getItem('token')) {

                console.log(this.foundUrl);

                axios.get('/' + this.foundUrl + '/' + this.$route.query.prid).then(function (res) {
                    console.log(res.data);

                    _this6.saveButton = res.data.exists;
                }).catch(function (err) {
                    console.log(err.response);
                }).finally();
            } else {
                return;
            }
        },


        // ===============================   Save Remove   ====================================

        saveRemove: function saveRemove() {

            if (!this.saveButton) {

                this.saveProduct();
                return;
            } else {
                this.removeSavedProduct();
                return;
            }
        },
        saveProduct: function saveProduct() {
            var _this7 = this;

            if (localStorage.getItem('token')) {

                this.saveBtnLoader = true;

                var form = new FormData();

                form.append('prd_id', this.$route.query.prid);

                axios.post('/' + this.foundUrl, form).then(function (res) {
                    console.log(res.data);

                    if (res) {

                        _this7.saveButton = res.data.exists;

                        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('savedProduct');

                        _this7.$store.dispatch('disTotalCountOfSavedProducts');
                        _this7.saveBtnLoader = false;
                    }
                }).catch(function (err) {
                    console.log(err.response);
                    _this7.saveBtnLoader = false;
                });
            } else {

                __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('signinDialog', true);
            }
        },
        removeSavedProduct: function removeSavedProduct() {
            var _this8 = this;

            /* let form = new FormData();
             form.append('prd_id', this.$route.query.prid) */

            if (localStorage.getItem('token')) {

                this.saveBtnLoader = true;

                var form = this.$route.query.prid;

                axios.delete('/' + this.foundUrl + '/' + form).then(function (res) {
                    console.log(res.data);

                    if (res) {

                        _this8.saveButton = res.data.removed;

                        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('savedProduct');

                        _this8.$store.dispatch('disTotalCountOfSavedProducts');

                        _this8.saveBtnLoader = false;
                    }
                }).catch(function (err) {
                    console.log(err.response);
                    _this8.saveBtnLoader = false;
                });
            } else {

                console.log('Login');
            }
        }
    },
    computed: {
        getID: function getID() {
            return this.propID;
        }
    },
    /* =========================   WATCHER   ================================================== */
    watch: {
        '$route': function $route(to, from) {
            //this.id = to.params.id;
            //this.id = to.params.prd_id;
            this.getSingleProductAndReviews(this.getID);
            this.img = null;
            //this.getSaveProducts();
        }
    }
});

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { wrap: "" } },
    [
      _c(
        "v-flex",
        {
          staticClass: "mx-auto width",
          attrs: { xs12: "", sm12: "", md12: "", lg12: "" }
        },
        [
          _vm.loading
            ? _c(
                "v-card",
                { staticClass: "text-xs-center pa-4", attrs: { flat: "" } },
                [
                  _c("v-progress-circular", {
                    staticClass: "v-progress-circular",
                    attrs: {
                      size: 70,
                      width: 7,
                      color: "gray",
                      indeterminate: ""
                    }
                  })
                ],
                1
              )
            : _c(
                "v-layout",
                { attrs: { wrap: "", "justify-space-around": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm5: "", md5: "", lg5: "" } },
                    [
                      _c(
                        "v-flex",
                        { staticClass: "post mb-3", attrs: { xs12: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "background-shadow  mb-3",
                              attrs: { flat: "" }
                            },
                            [
                              _vm.img != null
                                ? _c("v-img", {
                                    staticClass: "mb-2 pointer",
                                    attrs: {
                                      src: _vm.img,
                                      "aspect-ratio": "1",
                                      contain: ""
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        _vm.dialogImage = true
                                      }
                                    }
                                  })
                                : _vm.product.image != null
                                  ? _c("v-img", {
                                      staticClass: "mb-2 pointer",
                                      attrs: {
                                        src: _vm.product.image,
                                        "aspect-ratio": "1",
                                        contain: ""
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          _vm.dialogImage = true
                                        }
                                      }
                                    })
                                  : _c("v-img", {
                                      staticClass: "brd",
                                      attrs: {
                                        src: _vm.backupImg,
                                        contain: "",
                                        "aspect-ratio": "1"
                                      }
                                    }),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    wrap: "",
                                    "align-content-space-between": "",
                                    "justify-center": "",
                                    "pb-3": ""
                                  }
                                },
                                [
                                  _vm.product.image != null
                                    ? _c(
                                        "v-flex",
                                        {
                                          staticClass: "mx-1",
                                          attrs: { xs2: "", lg2: "" }
                                        },
                                        [
                                          _c("div", { attrs: { id: "0" } }, [
                                            _c(
                                              "div",
                                              {
                                                on: { mouseover: _vm.mouseover }
                                              },
                                              [
                                                _c("v-img", {
                                                  ref: "img" + 0,
                                                  attrs: {
                                                    src: _vm.product.image,
                                                    "aspect-ratio": "1",
                                                    contain: ""
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(this.product.images, function(
                                    thumbimg,
                                    i
                                  ) {
                                    return [
                                      _c(
                                        "v-flex",
                                        {
                                          key: thumbimg.img,
                                          staticClass: "mx-1",
                                          attrs: { xs2: "", lg2: "" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { attrs: { id: "" + (i + 1) } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  on: {
                                                    mouseover: _vm.mouseover
                                                  }
                                                },
                                                [
                                                  _c("v-img", {
                                                    ref: "img" + (i + 1),
                                                    refInFor: true,
                                                    attrs: {
                                                      src: thumbimg,
                                                      "aspect-ratio": "1",
                                                      contain: ""
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.dialogImage
                            ? _c(
                                "v-flex",
                                { attrs: { xs12: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { "justify-center": "" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          attrs: { "max-width": "960px" },
                                          model: {
                                            value: _vm.dialogImage,
                                            callback: function($$v) {
                                              _vm.dialogImage = $$v
                                            },
                                            expression: "dialogImage"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-card",
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  src:
                                                    _vm.img != null
                                                      ? _vm.img
                                                      : _vm.product.image,
                                                  contain: ""
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
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticClass: "background-shadow mb-3",
                              attrs: { flat: "" }
                            },
                            [
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      class: {
                                        saveBtn: !_vm.saveButton,
                                        removeBtn: _vm.saveButton
                                      },
                                      attrs: {
                                        disabled: _vm.saveBtnLoader,
                                        large: "",
                                        depressed: "",
                                        block: "",
                                        dark: ""
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.saveRemove($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          !_vm.saveButton ? "save" : "remove"
                                        )
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", md6: "", lg6: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "background-shadow",
                          attrs: { flat: "" }
                        },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass: "pb-0",
                              attrs: { "primary-title": "" }
                            },
                            [
                              _c("div", [
                                _c("div", { staticClass: "mb-2 mainTitle" }, [
                                  _vm._v(" " + _vm._s(_vm.product.title))
                                ]),
                                _vm._v(" "),
                                _vm.reviewBlock
                                  ? _c("div", {}, [
                                      _c("span", { staticClass: "rating" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.product.rating
                                              ? _vm.product.rating
                                              : 0
                                          ) + " ★"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "pl-3 reviewSpan" },
                                        [
                                          _vm._v(
                                            "reviews(" +
                                              _vm._s(
                                                _vm.product.totalReviews
                                                  ? _vm.product.totalReviews
                                                  : 0
                                              ) +
                                              ")"
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                {
                                  staticClass: "pt-3 pl-3",
                                  attrs: { xs12: "", lg12: "" }
                                },
                                _vm._l(_vm.product.category, function(val, i) {
                                  return _c(
                                    "span",
                                    { key: i, staticClass: "body-2" },
                                    [
                                      _vm._v(
                                        "\n                               " +
                                          _vm._s(val.name) +
                                          " "
                                      ),
                                      _vm.product.category.length !== i + 1
                                        ? _c("span", { staticClass: "px-2" }, [
                                            _vm._v(">")
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                })
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _c(
                                "v-list-tile",
                                [
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", [
                                        _vm.product.totalPrice == null
                                          ? _c("span", [
                                              _vm._v(
                                                " ₹ Contact For Price Details"
                                              )
                                            ])
                                          : _c(
                                              "span",
                                              { staticClass: "priceDiv" },
                                              [
                                                _vm._v(
                                                  " ₹ " +
                                                    _vm._s(
                                                      _vm.product.totalPrice
                                                    )
                                                )
                                              ]
                                            ),
                                        _vm._v(" "),
                                        _vm.product.per
                                          ? _c("span", [
                                              _vm._v(
                                                "/ " + _vm._s(_vm.product.per)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.product.sell_rent == 1 &&
                                        _vm.product.sell_rent
                                          ? _c(
                                              "span",
                                              { staticClass: "ml-1" },
                                              [
                                                _vm._v(" / "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(_vm.product.rent_per)
                                                  )
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.product.feesper
                                          ? _c(
                                              "span",
                                              { staticClass: "ml-1" },
                                              [
                                                _vm._v(" / "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.product.feesper.name
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.product.perviousPrice
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "previousPrice ml-3"
                                              },
                                              [
                                                _vm._v(
                                                  "₹ " +
                                                    _vm._s(
                                                      _vm.product.perviousPrice
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.product.discount
                                          ? _c(
                                              "span",
                                              { staticClass: "discount ml-3" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.product.discount) +
                                                    "% off"
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.product.want_to
                                ? _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "px-3",
                                          attrs: { flat: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-text",
                                            { staticClass: "py-1" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "priceDiv pr-2",
                                                  staticStyle: {
                                                    opacity: "0.8"
                                                  },
                                                  attrs: { color: "#ef6c3c" }
                                                },
                                                [_vm._v("fas fa-caret-right")]
                                              ),
                                              _vm._v(" "),
                                              _vm.product.want_to == 1
                                                ? _c(
                                                    "span",
                                                    {
                                                      attrs: { title: "Rent" }
                                                    },
                                                    [_vm._v("Retail")]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.product.want_to == 2
                                                ? _c(
                                                    "span",
                                                    {
                                                      attrs: { title: "Rent" }
                                                    },
                                                    [_vm._v("Rent")]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.product.want_to == 3
                                                ? _c(
                                                    "span",
                                                    {
                                                      attrs: { title: "Rent" }
                                                    },
                                                    [_vm._v("Wholesale")]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.product.offers
                                ? _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg12: "" } },
                                        [
                                          _c("v-card-text", [
                                            _c("b", { staticClass: "pl-3" }, [
                                              _vm._v("Offers")
                                            ])
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "px-3",
                                          attrs: { flat: "" }
                                        },
                                        _vm._l(_vm.product.offers, function(
                                          val,
                                          i
                                        ) {
                                          return _c(
                                            "v-card-text",
                                            { key: i, staticClass: "py-1" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-3",
                                                  attrs: {
                                                    color: "#ef6c3c",
                                                    title: "offer"
                                                  }
                                                },
                                                [_vm._v("fas fa-tag")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { attrs: { title: val } },
                                                [_vm._v(_vm._s(val))]
                                              )
                                            ],
                                            1
                                          )
                                        })
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                { staticClass: "px-3", attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "wordBreak",
                                          attrs: {
                                            "d-flex": "",
                                            xs4: "",
                                            sm4: "",
                                            md3: "",
                                            lg3: ""
                                          }
                                        },
                                        [
                                          _c("v-card-text", [
                                            _c("b", [_vm._v("Highlights")])
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "wordBreak",
                                          attrs: {
                                            "d-flex": "",
                                            xs8: "",
                                            sm8: "",
                                            md8: "",
                                            lg9: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "ul",
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                _vm._l(
                                                  _vm.product.highLights,
                                                  function(high, i) {
                                                    return _c(
                                                      "v-flex",
                                                      {
                                                        key: i,
                                                        staticClass:
                                                          "pt-3 pr-3",
                                                        attrs: {
                                                          xs12: "",
                                                          lg6: ""
                                                        }
                                                      },
                                                      [
                                                        _c("li", [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(high) +
                                                              "\n                                                "
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  }
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.product.descriptions
                                    ? _c(
                                        "v-layout",
                                        { attrs: { wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c("v-card-text", [
                                                _c("b", [
                                                  _vm._v("Descriptions")
                                                ])
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c(
                                                "v-card",
                                                { attrs: { flat: "" } },
                                                _vm._l(
                                                  _vm.product.descriptions,
                                                  function(des, i) {
                                                    return _c(
                                                      "v-card-text",
                                                      { key: i },
                                                      [
                                                        _c(
                                                          "v-layout",
                                                          {
                                                            attrs: { wrap: "" }
                                                          },
                                                          [
                                                            _c(
                                                              "v-flex",
                                                              {
                                                                staticClass:
                                                                  "wordBreak",
                                                                attrs: {
                                                                  "d-flex": "",
                                                                  xs4: "",
                                                                  sm4: "",
                                                                  md3: "",
                                                                  lg3: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      des.heading
                                                                    ) +
                                                                    ":\n                                                "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-flex",
                                                              {
                                                                staticClass:
                                                                  "wordBreak",
                                                                attrs: {
                                                                  "d-flex": "",
                                                                  xs8: "",
                                                                  sm8: "",
                                                                  lg9: ""
                                                                }
                                                              },
                                                              [
                                                                _c("div", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      des.description
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  }
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    { attrs: { wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "wordBreak",
                                          attrs: {
                                            "d-flex": "",
                                            xs4: "",
                                            sm4: "",
                                            md3: "",
                                            lg3: ""
                                          }
                                        },
                                        [
                                          _c("v-card-text", [
                                            _c("b", [_vm._v("Keywords")])
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "wordBreak",
                                          attrs: {
                                            "d-flex": "",
                                            xs8: "",
                                            sm8: "",
                                            md8: "",
                                            lg9: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "ul",
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                _vm._l(
                                                  _vm.product.keywords,
                                                  function(key, i) {
                                                    return _c(
                                                      "v-flex",
                                                      {
                                                        key: i,
                                                        staticClass:
                                                          "pt-3 pr-3",
                                                        attrs: {
                                                          xs6: "",
                                                          lg6: ""
                                                        }
                                                      },
                                                      [
                                                        _c("li", [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(key) +
                                                              "\n                                                "
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  }
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.product.eduCategory
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg12: "" } },
                                        [
                                          _c(
                                            "v-card",
                                            { attrs: { flat: "" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "pb-1" },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "priceDiv pr-2",
                                                      staticStyle: {
                                                        opacity: "0.8"
                                                      },
                                                      attrs: {
                                                        color: "#ef6c3c"
                                                      }
                                                    },
                                                    [_vm._v("school")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.product.eduCategory
                                                          .name
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.product.serviceCat
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg12: "" } },
                                        [
                                          _c(
                                            "v-card",
                                            { attrs: { flat: "" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "pb-1" },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "priceDiv pr-2",
                                                      staticStyle: {
                                                        opacity: "0.8"
                                                      },
                                                      attrs: {
                                                        color: "#ef6c3c"
                                                      }
                                                    },
                                                    [_vm._v("business_center")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.product.serviceCat
                                                          .name
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.product.state &&
                                  _vm.product.what == "properties"
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg12: "" } },
                                        [
                                          _c("div", { staticClass: "mb-2" }, [
                                            _c("b", [_vm._v("Property Region")])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            { attrs: { flat: "" } },
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      staticClass:
                                                        "wordBreak pb-1",
                                                      attrs: {
                                                        "d-flex": "",
                                                        xs4: "",
                                                        sm4: "",
                                                        md3: "",
                                                        lg3: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "priceDiv pr-1",
                                                              staticStyle: {
                                                                opacity: "0.8"
                                                              },
                                                              attrs: {
                                                                color: "#ef6c3c"
                                                              }
                                                            },
                                                            [_vm._v("home")]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      staticClass: "wordBreak",
                                                      attrs: {
                                                        "d-flex": "",
                                                        xs8: "",
                                                        sm8: "",
                                                        lg9: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            _vm.product
                                                              .propertyCategory
                                                              .name
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      staticClass:
                                                        "wordBreak pb-1",
                                                      attrs: {
                                                        "d-flex": "",
                                                        xs4: "",
                                                        sm4: "",
                                                        md3: "",
                                                        lg3: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "priceDiv pr-1",
                                                              staticStyle: {
                                                                opacity: "0.8"
                                                              },
                                                              attrs: {
                                                                color: "#ef6c3c"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "location_on"
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      staticClass: "wordBreak",
                                                      attrs: {
                                                        "d-flex": "",
                                                        xs8: "",
                                                        sm8: "",
                                                        lg9: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-layout",
                                                        { attrs: { wrap: "" } },
                                                        [
                                                          _c(
                                                            "v-flex",
                                                            {
                                                              attrs: {
                                                                xs12: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.product
                                                                      .fullAddress
                                                                  ) +
                                                                  "\n                                                            "
                                                              ),
                                                              !_vm.product
                                                                .fullAddress
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "Contact For Details"
                                                                    )
                                                                  ])
                                                                : _vm._e()
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-flex",
                                                            {
                                                              attrs: {
                                                                xs12: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.product
                                                                      .city.name
                                                                  ) +
                                                                  ", " +
                                                                  _vm._s(
                                                                    _vm.product
                                                                      .state
                                                                      .name
                                                                  ) +
                                                                  ", " +
                                                                  _vm._s(
                                                                    _vm.product
                                                                      .country
                                                                      .name
                                                                  ) +
                                                                  "\n                                                        "
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
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
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
                      _vm.reviewBlock
                        ? _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "mt-3 background-shadow",
                                  attrs: { flat: "" }
                                },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c(
                                            "v-card-title",
                                            { staticClass: "py-3" },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "py-3" },
                                                [
                                                  _c("strong", [
                                                    _vm._v("Reviews")
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    depressed: "",
                                                    outline: "",
                                                    small: "",
                                                    flat: "",
                                                    color: "primary"
                                                  },
                                                  nativeOn: {
                                                    click: function($event) {
                                                      return _vm.openRatingDialog(
                                                        $event
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Rate This")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "cardScroll" },
                                            [
                                              _vm._l(_vm.reviews, function(
                                                review,
                                                i
                                              ) {
                                                return [
                                                  _c(
                                                    "v-card",
                                                    {
                                                      key: review.customer,
                                                      staticClass: "py-1",
                                                      attrs: { flat: "" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-card-text",
                                                        {
                                                          staticClass:
                                                            "py-2 align-center"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mr-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "fas fa-user"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                review.customer
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "ml-3 red--text"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  review.star
                                                                ) + "★"
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-card-text",
                                                        { staticClass: "py-2" },
                                                        [
                                                          _vm._v(
                                                            "\n\n                                                    " +
                                                              _vm._s(
                                                                review.review
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.reviews != null &&
                                                      _vm.reviews.length > i + 1
                                                        ? _c("v-divider")
                                                        : _vm._e()
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
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _vm.reviews == 0
                                            ? _c(
                                                "v-card",
                                                { attrs: { flat: "" } },
                                                [
                                                  _c("v-card-text", [
                                                    _vm._v(
                                                      "\n                                        No Reviews Yet!\n                                    "
                                                    )
                                                  ])
                                                ],
                                                1
                                              )
                                            : _vm._e()
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { "justify-center": "" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { persistent: "", "max-width": "500" },
                              model: {
                                value: _vm.ratingDialog,
                                callback: function($$v) {
                                  _vm.ratingDialog = $$v
                                },
                                expression: "ratingDialog"
                              }
                            },
                            [
                              _c("ReviewComp", {
                                on: {
                                  rating: function($event) {
                                    _vm.rating = $event
                                  },
                                  ratingHeading: function($event) {
                                    _vm.ratingHeading = $event
                                  },
                                  ratingDescription: function($event) {
                                    _vm.ratingDescription = $event
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "my-3", attrs: { xs12: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "background-shadow",
                              attrs: { flat: "" }
                            },
                            [
                              _c(
                                "v-card-title",
                                { staticClass: "py-1" },
                                [
                                  _c("strong", [_vm._v("Address")]),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "pl-5 vStore",
                                      attrs: {
                                        to: {
                                          name: "storeview",
                                          params: {
                                            id: _vm.product.storeview_id,
                                            u_name: _vm.product.u_name
                                          },
                                          props: {
                                            id: _vm.product.storeview_id
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Visit Storeview"
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-card-text", { staticClass: "pb-3 addr" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.product.store_address) +
                                    "\n                        "
                                )
                              ])
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
                    "v-layout",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          staticClass: "background-shadow",
                          attrs: { xs12: "" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c("v-card-text", { staticClass: "py-3" }, [
                                _c("strong", [
                                  _vm._v(" Products from this Storeview")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c("AppCard", {
                                    attrs: {
                                      info: _vm.ProductsFromThisStoreview
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
                ],
                1
              )
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-55d32178", module.exports)
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(265)
/* template */
var __vue_template__ = __webpack_require__(266)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55d32178"
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
Component.options.__file = "resources/js/views/SingleProduct.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55d32178", Component.options)
  } else {
    hotAPI.reload("data-v-55d32178", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});