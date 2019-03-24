webpackJsonp([22],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            items: [{ title: 'Categories', to: 'createcategories' }, { title: 'Keywords', to: 'keywordscomp' }, { title: 'Materials', to: 'materialscomp' }, { title: 'Colors', to: 'colorscomp' }]
        };
    },

    methods: {
        goTo: function goTo(path) {

            this.$router.push({ name: path });
        }
    }
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { wrap: "", "justify-center": "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "", lg2: "" } },
        [
          _c(
            "v-card",
            { staticClass: "mr-2 sticky" },
            [
              _c(
                "v-list",
                { attrs: { "two-line": "" } },
                [
                  _vm._l(_vm.items, function(val) {
                    return [
                      _c(
                        "div",
                        { key: val.title },
                        [
                          _c(
                            "v-list-tile",
                            {
                              on: {
                                click: function($event) {
                                  _vm.goTo(val.to)
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v(_vm._s(val.title))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title")
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
        ],
        1
      ),
      _vm._v(" "),
      _c("v-flex", { attrs: { xs12: "", lg8: "" } }, [_c("router-view")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-4656fa2c", module.exports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
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
Component.options.__file = "resources/js/views/Dashboard/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4656fa2c", Component.options)
  } else {
    hotAPI.reload("data-v-4656fa2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});