webpackJsonp([13],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(247)
/* template */
var __vue_template__ = __webpack_require__(248)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b9055040"
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
Component.options.__file = "resources/js/components/Filters.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9055040", Component.options)
  } else {
    hotAPI.reload("data-v-b9055040", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("847f12ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9055040\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filters.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9055040\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filters.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
var _watch;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {},
    created: function created() {
        var _this = this;

        this.filterProductsArr;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('filterReset', function (data) {

            _this.filterReset();
        });
    },
    mounted: function mounted() {},

    props: ['propWantto', 'propBrand', 'propMinPrice', 'propMaxPrice', 'propPriceSort', 'propAreas'],
    data: function data() {
        return {
            filters: {},
            priceSort: '0',
            value: '',
            StatesSelected: [],
            citiesSelected: [],
            areasSelected: [],
            areasArr: [],
            wanttoArr: [{
                id: 0,
                value: 'All'
            }, {
                id: 1,
                value: 'Retail'
            }, {
                id: 2,
                value: 'Rent'
            }, {
                id: 3,
                value: 'Wholesale'
            }],
            wantto: this.propWantto ? this.propWantto : { id: 0, value: 'All' },
            // wantto: 0,

            /* ======== PRICE FILTER ======== */

            minPrice: this.propMinPrice ? this.propMinPrice : null,
            maxPrice: this.propMaxPrice ? this.propMaxPrice : null,

            /* ======== BRAND FILTER ======== */

            brandArr: [{ brd_id: 1, name: 'Adidas' }, { brd_id: 2, name: 'Samsung' }, { brd_id: 3, name: 'Sony' }, { brd_id: 4, name: 'Apple' }, { brd_id: 5, name: 'Philips' }, { brd_id: 6, name: 'Amul' }, { brd_id: 7, name: 'Nestlé' }, { brd_id: 8, name: 'BMW' }, { brd_id: 9, name: 'Huawei' }, { brd_id: 10, name: 'Levi\'s' }],
            brandFilter: [],

            /* ======== COLOR FILTER ======== */
            colorFilter: true
        };
    },

    methods: {
        areasSltd: function areasSltd() {
            var arr = this.getOriginalSearchResultArr;

            var sltAre = [];

            arr.filter(function (prd) {
                if (prd.area) {
                    sltAre.push(prd.area.name);
                }
            });

            this.areasArr = sltAre;
        },


        /* for Arrange price */
        /* priceSort() {
             if(this.minMax == 'min') {
               return this.getFilteredSearchResultArr.sort(function(a, b){return a.totalPrice - b.totalPrice})
             }
            if(this.minMax == 'max') {
               return this.getFilteredSearchResultArr.sort(function(a, b){return b.totalPrice - a.totalPrice})
             }
            if(this.minMax == 'rating') {
               return this.getFilteredSearchResultArr.sort(function(a, b){return b.rating - a.rating})
             }
         }, */
        updateNav: function updateNav(query) {
            var data = this.$route.query;
            Object.assign({}, this.$route.query);
            Object.assign(data, query);
            this.$router.push({ name: 'searchresult', query: data });
        },
        minMaxGo: function minMaxGo() {
            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('minMaxGo');
        },
        regionChange: function regionChange() {

            this.StatesSelected = [];
            this.citiesSelected = [];
            this.areasSelected = [];
        },
        filterReset: function filterReset() {

            this.wantto = { id: 0, value: 'All' };

            this.brandFilter = [];

            this.minPrice = null, this.maxPrice = null, this.regionChange();
        }
    },
    computed: {
        getOriginalSearchResultArr: function getOriginalSearchResultArr() {

            return this.$store.getters.getOriginalSearchResultArr;
        },
        getFilteredSearchResultArr: function getFilteredSearchResultArr() {
            return this.$store.getters.getFilteredSearchResultArr;
        },
        getCategoryStates: function getCategoryStates() {

            return this.$store.getters.getCategoryStates;
        },
        getCategoryCities: function getCategoryCities() {
            return this.$store.getters.getCategoryCities;
        },
        getCategoryAreas: function getCategoryAreas() {
            return this.$store.getters.getCategoryAreas;
        },
        getCategoryBrand: function getCategoryBrand() {

            return this.$store.getters.getCategoryBrand;
        },
        getSearchOptionSelected: function getSearchOptionSelected() {

            return this.$store.getters.getSearchOptionSelected;
        },
        getCountry: function getCountry() {

            return this.$store.getters.getCountry;
        },
        getState: function getState() {

            return this.$store.getters.getState;
        },
        getCity: function getCity() {

            return this.$store.getters.getCity;
        },
        getWantto: function getWantto() {
            return this.propWantto;
        }
    },
    watch: (_watch = {
        '$route': function $route(to, from) {},
        areasSelected: function areasSelected() {
            this.$store.commit('mutAreaArr', JSON.parse(JSON.stringify(this.areasSelected)));
        },
        minMax: function minMax() {
            this.$emit('emitMinMax', this.minMax);
        },
        getCity: function getCity() {

            this.regionChange();
        },
        getState: function getState() {

            this.regionChange();
        },
        getCountry: function getCountry() {

            this.regionChange();
        },
        StatesSelected: function StatesSelected() {
            this.$store.commit('mutSearchReultArr', []);
            this.$emit('states', this.StatesSelected);
            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('minMaxGo');
        },
        citiesSelected: function citiesSelected() {
            this.$store.commit('mutSearchReultArr', []);
            this.$emit('cities', this.citiesSelected);
            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('minMaxGo');
        }
    }, _defineProperty(_watch, 'areasSelected', function areasSelected() {
        this.$store.commit('mutSearchReultArr', []);
        this.$emit('areas', this.areasSelected);
        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('minMaxGo');
    }), _defineProperty(_watch, 'brandFilter', function brandFilter() {
        this.$store.commit('mutSearchReultArr', []);
        console.log(JSON.parse(JSON.stringify(this.brandFilter)));
        /* let brd = {brd : this.brandFilter}
        this.updateNav(brd); */

        this.$emit('brandFilter', JSON.parse(JSON.stringify(this.brandFilter)));
        return; //eventBus.$emit('minMaxGo');

        var a = this.brandFilter.toString();;
        if (a.length != 0) {} else {

            this.$emit('brandFilter', null);
        }
    }), _defineProperty(_watch, 'minPrice', function minPrice() {
        this.$store.commit('mutSearchReultArr', []);

        if (this.minPrice != '') {

            this.$emit('minPrice', this.minPrice);
        } else {

            this.$emit('minPrice', null);
        }
    }), _defineProperty(_watch, 'maxPrice', function maxPrice() {
        this.$store.commit('mutSearchReultArr', []);

        if (this.maxPrice != '') {

            this.$emit('maxPrice', this.maxPrice);
        } else {

            this.$emit('maxPrice', null);
        }
    }), _defineProperty(_watch, 'priceSort', function priceSort() {

        if (this.priceSort == 'revalence') {

            this.$emit('priceSort', null);
        } else {

            this.$emit('priceSort', this.priceSort);
        }
    }), _defineProperty(_watch, 'wantto', function wantto() {

        this.$store.commit('mutSearchReultArr', []);

        // sessionStorage.setItem('wanttofltr', JSON.stringify(this.wantto));

        this.$emit('wantto', this.wantto);
    }), _watch)
});

/***/ }),

/***/ 248:
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
        { attrs: { xs12: "" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", attrs: { flat: "" } },
            [
              _c(
                "v-flex",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        this.$route.params.webholder == "products" ||
                        this.$route.query.cat_srch,
                      expression:
                        "this.$route.params.webholder == 'products' || this.$route.query.cat_srch"
                    }
                  ],
                  attrs: { xs12: "" }
                },
                [
                  _c(
                    "v-radio-group",
                    {
                      model: {
                        value: _vm.wantto,
                        callback: function($$v) {
                          _vm.wantto = $$v
                        },
                        expression: "wantto"
                      }
                    },
                    _vm._l(_vm.wanttoArr, function(val) {
                      return _c("v-radio", {
                        key: val.id,
                        attrs: {
                          label: "" + val.value,
                          value: val,
                          "return-object": "",
                          color: "orange darken-2"
                        }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _c("hr")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-card-text", { staticClass: "pl-0 pb-0 subheading" }, [
                    _vm._v(
                      "\n                     Price Range\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { regex: /^[0-9]+(\.[0-9]{2})?$/ },
                        expression: "{regex: /^[0-9]+(\\.[0-9]{2})?$/}"
                      }
                    ],
                    staticClass: "mb-2",
                    attrs: {
                      box: "",
                      label: "Min Price",
                      "error-messages": _vm.errors.collect("amount"),
                      "data-vv-name": "amount",
                      "prepend-icon": "fas fa-rupee-sign",
                      color: "orange darken-2",
                      "hide-details": "",
                      clearable: ""
                    },
                    model: {
                      value: _vm.minPrice,
                      callback: function($$v) {
                        _vm.minPrice = $$v
                      },
                      expression: "minPrice"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { regex: /^[0-9]+(\.[0-9]{2})?$/ },
                        expression: "{ regex: /^[0-9]+(\\.[0-9]{2})?$/}"
                      }
                    ],
                    staticClass: "mb-2",
                    attrs: {
                      box: "",
                      label: "Max Price",
                      "error-messages": _vm.errors.collect("amount"),
                      "data-vv-name": "amount",
                      "prepend-icon": "fas fa-rupee-sign",
                      color: "orange darken-2",
                      "hide-details": "",
                      clearable: ""
                    },
                    model: {
                      value: _vm.maxPrice,
                      callback: function($$v) {
                        _vm.maxPrice = $$v
                      },
                      expression: "maxPrice"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        small: "",
                        block: "",
                        outline: "",
                        color: "success",
                        dark: ""
                      },
                      on: { click: _vm.minMaxGo }
                    },
                    [_vm._v("Go")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.getCategoryStates != null && _vm.getCategoryStates.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "pl-0 subheading" }, [
                        _vm._v("\n                    States\n                ")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.getCategoryStates,
                          "item-text": "name",
                          "item-value": "id",
                          solo: "",
                          chips: "",
                          label: "Select State",
                          multiple: "",
                          dense: "",
                          attach: "",
                          clearable: "",
                          "deletable-chips": ""
                        },
                        on: { focus: _vm.areasSltd },
                        model: {
                          value: _vm.StatesSelected,
                          callback: function($$v) {
                            _vm.StatesSelected = $$v
                          },
                          expression: "StatesSelected"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.getCategoryCities != null && _vm.getCategoryCities.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "pl-0 subheading" }, [
                        _vm._v("\n                    Cities\n                ")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.getCategoryCities,
                          "item-text": "name",
                          "item-value": "id",
                          solo: "",
                          chips: "",
                          label: "Select City",
                          multiple: "",
                          dense: "",
                          attach: "",
                          clearable: "",
                          "deletable-chips": ""
                        },
                        on: { focus: _vm.areasSltd },
                        model: {
                          value: _vm.citiesSelected,
                          callback: function($$v) {
                            _vm.citiesSelected = $$v
                          },
                          expression: "citiesSelected"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.getCategoryAreas != null && _vm.getCategoryAreas.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "pl-0 subheading" }, [
                        _vm._v("\n                    Areas\n                ")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.getCategoryAreas,
                          "item-text": "name",
                          "item-value": "id",
                          solo: "",
                          chips: "",
                          label: "Select Area",
                          multiple: "",
                          dense: "",
                          attach: "",
                          clearable: "",
                          "deletable-chips": ""
                        },
                        on: { focus: _vm.areasSltd },
                        model: {
                          value: _vm.areasSelected,
                          callback: function($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.getCategoryBrand != null && _vm.getCategoryBrand.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "pl-0 pb-0 subheading" },
                        [
                          _vm._v(
                            "\n                        Brand\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.getCategoryBrand,
                          "item-text": "name",
                          "item-value": "id",
                          solo: "",
                          chips: "",
                          label: "Select Brand",
                          multiple: "",
                          dense: "",
                          attach: "",
                          clearable: "",
                          "deletable-chips": ""
                        },
                        on: { focus: _vm.areasSltd },
                        model: {
                          value: _vm.brandFilter,
                          callback: function($$v) {
                            _vm.brandFilter = $$v
                          },
                          expression: "brandFilter"
                        }
                      })
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9055040", module.exports)
  }
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0b7f7918", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a47aa04\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchResult.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a47aa04\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchResult.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.post[data-v-6a47aa04] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n.v-progress-circular[data-v-6a47aa04] {\n\n    margin: 1rem\n}\n", ""]);

// exports


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppCard__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AppCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Filters__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        AppCard: __WEBPACK_IMPORTED_MODULE_2__components_AppCard___default.a,
        Filters: __WEBPACK_IMPORTED_MODULE_3__components_Filters___default.a
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('minMaxGo', function (data) {
            _this.setQuery();
            return _this.getSearch();
        });
        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('query', function (data) {
            return _this.q = data;
        });
        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('srchBtnOnPth', function (data) {
            console.log('srchBtnOnP');
            _this.setQuery();
            return _this.getSearch();
        });
        /* eventBus.$on('searchArr', (data) => {
            return this.products = data;
        }); */
        /* axios.get('/products')
        .then((response) => {
            this.products = response.data;
             console.log(response)
            //console.log(response)
        })
        .catch((errors) => {
            console.log(errors)
        }) */
    },
    mounted: function mounted() {
        var _this2 = this;

        window.addEventListener('scroll', function () {
            _this2.bottom = _this2.bottomVisible();
        });
        //this.addBeer();

        // this.getSearch(this.$route.query.srh, this.$route.query.pth);

        //this.$store.dispatch('disSearchArr', {pth: this.$route.query.pth, srch: this.$route.query.srch})
        /* setTimeout(() => {
             this.products = this.getSearchArr
        }, 200) */
        //this.$router.push({ name: 'searchresult', params: {webholder: this.$route.params.webholder },  query: {pth: this.$route.query.pth , srch: this.$route.query.srch} })
        //this.routeSelected();

        // this.IsJsonString();

        this.setQuery();

        this.getSearch(this.$route.query.pth, this.$route.query.q);
        //this.getSearch();
    },

    /*  beforeRouteLeave(to, from, next){
          this.$store.commit('mutClearSearchResult');
          next();
     }, */
    mixins: [__WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__["a" /* selectSearchRoute */]],

    data: function data() {
        return {
            pagination: {
                current_page: 1

            },
            webHolder: '',
            minMax: '',
            products: [],
            filtersDialog: false,
            bottom: false,
            loadingSpinner: false,
            q: this.$route.query.q ? this.$route.query.q : null,
            brand: null,
            minPrice: this.$route.query.prc_abv ? this.$route.query.prc_abv : null,
            maxPrice: this.$route.query.prc_blw ? this.$route.query.prc_blw : null,
            priceSort: null,
            catSearch: this.$route.query.cat_srch ? this.$route.query.cat_srch : null,
            states: null,
            cities: null,
            areas: null,
            wantto: { id: 0, value: 'all' }

        };
    },

    methods: {
        IsJsonString: function IsJsonString() {

            var a = sessionStorage.getItem('wanttofltr');

            if (a) {

                var json = JSON.parse(a);

                this.wantto = json;
            }
        },


        getSearch: __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.debounce(function (pth, q) {

            //this.$store.dispatch('disSearchResult',{pth: pth, srch: route})
            //console.log(JSON.parse(JSON.stringify(this.searchOptionSelected)));

            var srchRoute = this.getSearchOptionSelected.web;

            //console.log(srchRoute)
            //console.log(JSON.parse(JSON.stringify(this.getSearchOptionSelected)));


            var nir = {
                q: this.q,
                wantto: this.wantto.id,
                brd: this.brand,
                states: this.states,
                cities: this.cities,
                areas: this.areas,
                prc_abv: this.minPrice,
                prc_blw: this.maxPrice,
                prc_srt: this.priceSort,
                cat_srch: this.catSearch,
                cnt: this.getCountry ? this.getCountry.id : null,
                st: this.getState ? this.getState.id : null,
                ct: this.getCity ? this.getCity.id : null
            };

            this.$store.dispatch('disSearchResult', { pth: srchRoute, query: _extends({}, nir) });

            // this.setQuery();

            //axios.get('/'+ pth +'?q=' + route)
            /* axios.get(`/${srchRoute}`, {
                 params : nir
             })
                .then((response) => {
                    this.products = response.data.data;
                    // this.searchVisible = true;
                    console.log(response);
                })
                .catch((err) => {
                     console.log(err)
                }) */
            if (this.products == []) {} else {

                // this.$store.dispatch('disSearchArr', {pth: pth, srch: route})


            }
        }, 1000),

        bottomVisible: function bottomVisible() {
            var scrollY = window.scrollY;
            var visible = document.documentElement.clientHeight;
            var pageHeight = document.documentElement.scrollHeight;
            var bottomOfPage = visible + scrollY >= pageHeight;
            return bottomOfPage || pageHeight < visible;
        },

        addBeer: __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.debounce(function () {
            console.log(this.getSearchResultNextPageUrl);

            this.$store.dispatch('disSearchNextResult', this.getSearchResultNextPageUrl);
            return;
            axios.get(this.getSearchResultNextPageUrl).then(function (response) {

                console.log(response);

                /* if (this.bottomVisible()) {
                    this.addBeer()
                } */
            }).catch(function (err) {
                console.log(err.response);
            });
        }, 1000),
        setQuery: function setQuery() {

            this.$router.replace({ query: Object.assign({}, this.$route.query, {
                    brd: this.brand || undefined,
                    wantto: this.wantto.value.toLowerCase() || undefined,
                    prc_abv: this.minPrice || undefined,
                    prc_blw: this.maxPrice || undefined,
                    prc_srt: this.priceSort || undefined,
                    //cat_srch: this.catQ || undefined,
                    states: this.states || undefined,
                    cities: this.cities || undefined,
                    areas: this.areas || undefined,
                    cnt: this.getCountry ? this.getCountry.id : undefined || undefined,
                    st: this.getState ? this.getState.id : undefined || undefined,
                    ct: this.getCity ? this.getCity.id : undefined || undefined
                }) });
        }
    },
    computed: {
        getSearchResultArr: function getSearchResultArr() {

            return this.$store.getters.getOriginalSearchResultArr;
            // return this.$store.getters.getFilteredSearchResultArr;

            // let x = this.priceSort;

            // switch (x) {

            //     case 'p_asc':
            //       return this.$store.getters.getFilteredSearchResultArr.sort(function(a, b){return a.totalPrice - b.totalPrice});
            //       break;

            //   case 'p_desc':
            //       return this.$store.getters.getFilteredSearchResultArr.sort(function(a, b){return b.totalPrice - a.totalPrice});
            //       break;

            //   default:
            //     return this.$store.getters.getFilteredSearchResultArr;
            //   }
        },
        getSearchResultNextPageUrl: function getSearchResultNextPageUrl() {

            return this.$store.getters.getSearchResultNextPageUrl;
        },
        getLoadingSpinner: function getLoadingSpinner() {
            return this.$store.getters.loadingSpinner;
        },
        getSearchOptionSelected: function getSearchOptionSelected() {
            return this.$store.getters.getSearchOptionSelected;
        },
        getCountry: function getCountry() {

            return this.$store.getters.getCountry;
        },
        getState: function getState() {

            return this.$store.getters.getState;
        },
        getCity: function getCity() {

            return this.$store.getters.getCity;
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.$store.commit('mutSearchReultArr', []);
            this.$store.commit('mutLoadingSpinner', true);
            this.q = this.$route.query.q;

            this.cat_srch = this.$route.query.cat_srch;

            //console.log(this.$route.query.cat_srch)

            this.setQuery();

            this.getSearch(this.$route.query.pth, this.$route.query.q);

            //this.$store.dispatch('disSearchResult',{pth: this.$route.query.pth, srch: this.$route.query.srh})
        },
        bottom: function bottom(_bottom) {
            if (_bottom) {

                if (this.getSearchResultNextPageUrl) {

                    this.addBeer();
                }
            }
        },
        q: function q() {
            console.log(this.q);
        },
        wantto: function wantto() {
            console.log(this.wantto);
            this.setQuery();
        },
        minMax: function minMax() {
            console.log(this.minMax);
        },
        brand: function brand() {
            console.log(this.brand);
            this.setQuery();
        },
        priceSort: function priceSort() {
            console.log(this.priceSort);
            this.setQuery();
        },
        areas: function areas() {
            console.log(JSON.parse(JSON.stringify(this.areas)));
            this.setQuery();
        },
        getCity: function getCity() {
            console.log(this.getCity);

            if (this.getCity) {

                this.setQuery();
            } else if (this.getState) {

                this.setQuery();
            } else if (this.getCountry) {

                this.setQuery();
            }
        },
        getState: function getState() {

            this.setQuery();
        },
        getCountry: function getCountry() {

            this.setQuery();
        }
    }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "", lg12: "" } },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "", "justify-space-around": "", "fill-height": "" } },
        [
          _c(
            "v-flex",
            {
              staticClass: "px-2 hidden-sm-and-down",
              attrs: { xs12: "", lg2: "" }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "background-shadow ",
                  attrs: { app: "", flat: "" }
                },
                [
                  _c("filters", {
                    attrs: {
                      propBrand: _vm.brand,
                      propMinPrice: _vm.minPrice,
                      propMaxPrice: _vm.maxPrice,
                      propPriceSort: _vm.priceSort,
                      propAreas: _vm.areas
                    },
                    on: {
                      wantto: function($event) {
                        _vm.wantto = $event
                      },
                      propWantto: _vm.wantto,
                      emitMinMax: function($event) {
                        _vm.minMax = $event
                      },
                      brandFilter: function($event) {
                        _vm.brand = $event
                      },
                      minPrice: function($event) {
                        _vm.minPrice = $event
                      },
                      maxPrice: function($event) {
                        _vm.maxPrice = $event
                      },
                      priceSort: function($event) {
                        _vm.priceSort = $event
                      },
                      states: function($event) {
                        _vm.states = $event
                      },
                      cities: function($event) {
                        _vm.cities = $event
                      },
                      areas: function($event) {
                        _vm.areas = $event
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
            { attrs: { xs12: "", lg10: "" } },
            [
              _c(
                "v-card",
                { staticClass: "background-shadow" },
                [
                  _c("AppCard", {
                    attrs: {
                      info: _vm.getSearchResultArr,
                      propWebHolder: _vm.webHolder
                    }
                  }),
                  _vm._v(" "),
                  _vm.getSearchResultArr.length == 0 && !_vm.getLoadingSpinner
                    ? _c("v-card-text", { staticClass: "text-xs-center" }, [
                        _c("h2", [_vm._v("Sorry... No Item Found!!!")])
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getLoadingSpinner,
                      expression: "getLoadingSpinner"
                    }
                  ],
                  staticClass: "text-xs-center pa-4",
                  attrs: { flat: "" }
                },
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticClass: "hidden-sm-and-up", attrs: { xs12: "" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                scrollable: "",
                overlay: false,
                "max-width": "500px",
                transition: "dialog-transition"
              },
              model: {
                value: _vm.filtersDialog,
                callback: function($$v) {
                  _vm.filtersDialog = $$v
                },
                expression: "filtersDialog"
              }
            },
            [_c("Filters")],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticStyle: {
                background: "linear-gradient(to right,#f12711,#f5af19)"
              },
              attrs: {
                fab: "",
                bottom: "",
                right: "",
                color: "pink",
                dark: "",
                fixed: "",
                title: "Filters"
              },
              on: {
                click: function($event) {
                  _vm.filtersDialog = true
                }
              }
            },
            [_c("v-icon", [_vm._v("fas fa-filter")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-6a47aa04", module.exports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a47aa04"
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
Component.options.__file = "resources/js/views/SearchResult.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a47aa04", Component.options)
  } else {
    hotAPI.reload("data-v-6a47aa04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});