webpackJsonp([23],{

/***/ 350:
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
//
//
//
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
    mounted: function mounted() {
        //console.log(JSON.parse(JSON.stringify(this.$data.keywords)))

        this.getAllKeywords();
    },
    data: function data() {
        return {
            keywords: [],
            keyword: ''
        };
    },

    methods: {
        add: function add() {
            var word = this.keyword.toLowerCase();
            console.log(word);

            var keyword = new FormData();

            keyword.append('name', word);

            axios.post('/keywords', keyword).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            }).finally();
        },
        getAllKeywords: function getAllKeywords() {
            var _this = this;

            var This = this;

            axios.get('/keywords').then(function (res) {
                var aa = res.data;

                aa.forEach(function (a) {
                    var b = { id: a.id, name: a.name };
                    _this.keywords.push(b);
                });

                console.log(res);
            }).catch(function (err) {
                console.log(err);
            }).finally();
        }
    }
});

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "", lg12: "", "offset-lg1": "" } },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", lg5: "" } },
            [
              _c("v-card", [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.keywords, function(val) {
                      return _c("tr", { key: val.id }, [
                        _c("th", { attrs: { scope: "row" } }, [
                          _vm._v(_vm._s(val.id))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(val.name))])
                      ])
                    })
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", lg5: "", "offset-lg1": "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4" },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg12: "" } },
                    [
                      _c("v-text-field", {
                        attrs: { solo: "", label: "Add Keyword" },
                        model: {
                          value: _vm.keyword,
                          callback: function($$v) {
                            _vm.keyword = $$v
                          },
                          expression: "keyword"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg12: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outline: "",
                            block: "",
                            color: "primary",
                            dark: ""
                          },
                          on: { click: _vm.add }
                        },
                        [_vm._v("Add")]
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
    require("vue-hot-reload-api")      .rerender("data-v-25db6254", module.exports)
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(350)
/* template */
var __vue_template__ = __webpack_require__(351)
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
Component.options.__file = "resources/js/components/keywords/Keywords.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25db6254", Component.options)
  } else {
    hotAPI.reload("data-v-25db6254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});