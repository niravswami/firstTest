webpackJsonp([48],{

/***/ 175:
/***/ (function(module, exports) {

module.exports = "/images/shop.svg?44b7dd1510259de7ef17b7380e510ebf";

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "/images/assembly line.svg?e5673db0e2849c575cbb77a1297f38e7";

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__["a" /* selectSearchRoute */]],
    data: function data() {
        return {

            company: __webpack_require__(193),
            shop: __webpack_require__(175),
            items: [{
                headline: 'Shop Owner',
                text: 'To sell product from your shop',
                src: __webpack_require__(175),
                to: { name: 'whereselected', query: { str_id: this.$route.query.str_id } },
                show: true
            }, {
                headline: 'Brand / Company ',
                text: 'Brand / Company products listed here so retailer / wholeseller can list products in their storeviews',
                src: __webpack_require__(193),
                to: { name: 'inventoryform', query: { str_id: this.$route.query.str_id } },
                show: false
            }]
        };
    },

    methods: {
        back: function back() {
            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ 293:
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
        "v-card",
        { staticClass: "mx-auto width1400 background-shadow mb-3" },
        [
          _c("v-card-title", { attrs: { "primary-title": "" } }, [
            _c("div", [
              _c("h3", { staticClass: "headline mb-0" }, [
                _vm._v("Product Uploade")
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto width1400",
          attrs: { flat: "", color: "transparent" }
        },
        [
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            _vm._l(_vm.items, function(val) {
              return _c(
                "v-flex",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: val.show,
                      expression: "val.show"
                    }
                  ],
                  key: val.headline,
                  staticClass: "pa-3",
                  attrs: { xs12: "", lg6: "" }
                },
                [
                  _c(
                    "v-card",
                    { staticClass: "background-shadow", attrs: { to: val.to } },
                    [
                      _c("v-img", {
                        attrs: { src: val.src, "max-height": "400px" }
                      }),
                      _vm._v(" "),
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _c("div", [
                          _c("h3", { staticClass: "headline mb-0" }, [
                            _vm._v(_vm._s(val.headline))
                          ]),
                          _vm._v(" "),
                          _c("div", [_vm._v(_vm._s(val.text))])
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            })
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "primary" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.back($event)
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "", dark: "" } }, [
                    _vm._v("arrow_back")
                  ]),
                  _vm._v(
                    "\n                            Back\n                        "
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
    require("vue-hot-reload-api")      .rerender("data-v-74522df0", module.exports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
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
Component.options.__file = "resources/js/components/WhereUploade.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74522df0", Component.options)
  } else {
    hotAPI.reload("data-v-74522df0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});