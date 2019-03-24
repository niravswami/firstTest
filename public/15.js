webpackJsonp([15],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(253)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-549d75aa"
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
Component.options.__file = "resources/js/components/TreeBrowser/treeBrowser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-549d75aa", Component.options)
  } else {
    hotAPI.reload("data-v-549d75aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3bf461b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-549d75aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeBrowser.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-549d75aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeBrowser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.node[data-v-549d75aa]{\n    text-align: left;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 252:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'TreeBrowser',
    props: {
        items: Object,
        depth: {
            type: Number,
            default: 0
        }
    },
    data: function data() {
        return {
            expanded: false

        };
    },

    computed: {
        hasChildren: function hasChildren() {
            if (this.items.child) {

                return this.items.child && this.items.child.length;
            }
        }
    },
    methods: {
        nodeClicked: function nodeClicked() {
            this.expanded = !this.expanded;
            if (this.expanded) {

                this.$emit('onClick', this.items);
            }
            if (!this.hasChildren) {}
        }
    }
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "node",
        style: { "margin-left": _vm.depth * 10 + "px" },
        on: { click: _vm.nodeClicked }
      },
      [
        _c("v-layout", { attrs: { wrap: "" } }, [
          _vm.hasChildren
            ? _c("span", { staticClass: "type py-1 pointer" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.expanded ? "▼" : "►") +
                    "\n                "
                )
              ])
            : _c("span", { staticClass: "py-1" }, [_vm._v("◇")]),
          _vm._v(" "),
          _c("div", { staticClass: "body-2 py-1 pointer" }, [
            _vm._v(_vm._s(_vm.items.name))
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.expanded
      ? _c(
          "div",
          _vm._l(_vm.items.child, function(child) {
            return _c("TreeBrowser", {
              key: child.name,
              attrs: { items: child, depth: _vm.depth + 1 },
              on: {
                onClick: function(item) {
                  return _vm.$emit("onClick", item)
                }
              }
            })
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-549d75aa", module.exports)
  }
}

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeBrowser_treeBrowser__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeBrowser_treeBrowser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TreeBrowser_treeBrowser__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        TreeBrowser: __WEBPACK_IMPORTED_MODULE_0__TreeBrowser_treeBrowser___default.a
    },

    mounted: function mounted() {

        this.getParentCat();
        this.getReadyMadeCategory();
        // this.getWantedCategoryProducts();
    },
    data: function data() {
        return {

            rootCat: '',
            rootText: '',
            rootArr: [],
            addRoot: false,

            levelOneCat: '',
            levelOneText: '',
            levelOneArr: [],

            levelTwoText: '',
            levelTwoCat: '',
            levelTwoArr: [],

            levelThreeText: '',
            levelThreeCat: '',
            levelThreeArr: [],

            zz: [],

            selectedCat: '',

            newCat: '',

            slug: '',

            addedCat: {},

            alert: false,

            alertCompText: '',

            children: [],
            ready: [],
            maker: [],
            makerName: [],
            makerId: [],
            inco: null,
            readyMade: []
        };
    },

    computed: {
        getCategory: function getCategory() {

            return {
                name: this.$store.getters.getCategoryParent ? this.$store.getters.getCategoryParent.name : 'Category',
                child: this.$store.getters.getCategoryChildren
            };
        }
    },
    methods: {
        getReadyMadeCategory: function getReadyMadeCategory() {
            var _this = this;

            axios.get('/readymade').then(function (res) {
                console.log(res);
                if (res) {

                    _this.readyMade = res.data;
                }
            }).catch(function (err) {
                console.log(err.response);
            });
        },

        /* --------------- */
        /* ADD CATEGORY  */
        /* ------------- */

        addCategory: function addCategory() {

            if (this.newCat == '' || this.newCat == null) {

                alert('Please Enter New Category!');

                return;
            }

            var NewCat = this.newCat;

            var addCat = new FormData();

            addCat.append('name', NewCat);

            addCat.append('slug', this.slug);

            addCat.append('parent_id', this.selectedCat.id ? this.selectedCat.id : '');

            addCat.append('description', '');

            console.log(NewCat);
            console.log(this.slug);

            //return;

            var self = this;

            axios.post('/categories', addCat).then(function (res) {
                console.log(res);
                console.log(res.data.new_category);
                self.alertCompText = res.data.success;
                self.alert = true;
                self.addedCat = res.data.new_category;

                self.getParentCat();

                self.newCat = '';
                self.children = [];
                self.getWantedCategoryProducts();
            }).catch(function (err) {
                console.log(err.response);
            });
        },
        makeSlug: function makeSlug() {
            var text = this.newCat;
            this.slug = this.slugify(text);

            //console.log(slugifyTitle)
        },
        slugify: function slugify(text) {
            return text.toString().toLowerCase().replace(/\s+/g, '-') //replace spaces with '-'
            //.replace(/[^\w\-]+/g, '')       // remove all non-words chars
            .replace(/\-\+/g, '-') //replace multiple '-' with single '-'
            .replace(/^-+/, '') //trim '-' from start of text
            .replace(/-+$/, ''); //trim '-' from end of text
        },


        /* --------------- */
        /* Parent CATEGORY  */
        /* ------------- */

        getParentCat: function getParentCat() {
            var _this2 = this;

            axios.get('/categories').then(function (res) {
                console.log(res);

                //this.parentCat = res.data.cat

                _this2.$store.commit('mutWantedCat', { parent: { name: 'Category' }, child: res.data.wthChild });

                var result = res.data.cat;

                _this2.children = [];
                _this2.ready = [];

                var newItem = {

                    child: '',
                    childArr1: result
                };

                _this2.children.push(newItem);
                _this2.ready.push(newItem);

                //this.children[0].childArr1 = res.data.cat
                _this2.parentCat = res.data.allCat;
            }).catch(function (err) {
                console.log(err.response);
            });
        },


        /* --------------- */
        /* CALL CHILD CATEGORY  */
        /* ------------- */

        callChild: function callChild(idx, e, what) {
            var _this3 = this;

            if (what == 'new') {

                this.children.splice(idx + 1);

                var prntId = this.children[idx].child.id;
                //let prntId = JSON.parse(JSON.stringify(this.children[idx].child.id));

                //this.selectedCat = JSON.parse(JSON.stringify(this.children[idx].child));
                this.selectedCat = this.children[idx].child;

                console.log(JSON.parse(JSON.stringify(this.children[idx].child)));
            } else {

                this.ready.splice(idx + 1);
                if (this.makerName.length != this.ready.length) {
                    this.maker.splice(idx);
                    this.makerId.splice(idx);
                    this.makerName.splice(idx);
                }

                this.makerName.push(this.ready[idx].child.name);

                var prntId = this.ready[idx].child.id;
                this.selectedCat = this.ready[idx].child;
                this.maker.push(this.ready[idx].child);
                this.makerId.push(this.ready[idx].child.id);
                console.log(JSON.parse(JSON.stringify(this.ready[idx].child)));
            }

            //console.log(this.children[idx].child);

            var data = new FormData();

            data.append('parent_id', prntId);

            axios.post('/categories/children', data).then(function (res) {
                //console.log(res.data.chld);

                var result = res.data.chld;

                if (result.length) {

                    var newItem = {

                        child: '',
                        childArr1: result
                    };

                    if (what == 'new') {

                        _this3.children.push(newItem);
                    } else {

                        _this3.ready.push(newItem);
                    }
                }
            }).catch(function (err) {
                console.log(err.response);
            });
        },


        /* --------------------------- */
        /* CREATE READY MADE CATEGORY  */
        /* --------------------------- */

        createReadyMadeCat: function createReadyMadeCat() {
            var _this4 = this;

            if (this.makerId.length == 0) {

                alert('please create category');
                return;
            } else {

                console.log(this.makerId);
                console.log(this.makerName);

                var form = new FormData();

                for (var i = 0; i < this.makerId.length; i++) {

                    form.append('ids[]', this.makerId[i]);
                }

                for (var _i = 0; _i < this.makerName.length; _i++) {

                    form.append('names[]', this.makerName[_i]);
                }

                axios.post('/readymade', form).then(function (res) {
                    console.log(res);

                    if (res) {

                        _this4.inco = res.data.names;

                        _this4.ready = [];

                        _this4.getParentCat();
                        _this4.getReadyMadeCategory();
                    }
                }).catch(function (err) {
                    console.log(err.response);
                });
            }
        },


        /* --------------- */
        /* ROOT CATEGORY  */
        /* ------------- */

        getRootCat: function getRootCat() {
            var _this5 = this;

            axios.get('/rootcategories').then(function (response) {
                _this5.rootArr = response.data;
                console.log(response);
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        addRootCat: function addRootCat() {
            var _this6 = this;

            axios.post('/rootcategories', { name: this.rootText }).then(function (response) {
                console.log(response);
                _this6.rootText = '';
            }).catch(function (errors) {
                console.log(errors);
            });
            console.log(this.rootCat);
        },


        /* ------------------- */
        /* LEVEL ONE CATEGORY  */
        /* ------------------- */

        addlevelOneCat: function addlevelOneCat() {

            /* axios.post('/levelonecategories', {name: this.levelOneText, rootId: this.rootCat.id})
                .then((response) => {
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                }) */
            console.log(this.rootCat.id);
            console.log(this.levelOneText);
        },
        getlevelOneCat: function getlevelOneCat() {
            var _this7 = this;

            axios.get('/levelonecategories').then(function (response) {
                _this7.levelOneArr = response.data;
                console.log(response);
            }).catch(function (errors) {
                console.log(errors);
            });
            console.log(this.levelTwoCat);
        },


        /* ------------------- */
        /* LEVEL TWO CATEGORY  */
        /* ------------------- */

        addlevelTwoCat: function addlevelTwoCat() {

            axios.post('/leveltwocategories', { name: this.levelTwoText, levelOneId: this.levelOneCat.id }).then(function (response) {
                console.log(response);
            }).catch(function (errors) {
                console.log(errors);
            });
            console.log(this.levelOneCat.id);
            console.log(this.levelTwoText);
        },
        getlevelTwoCat: function getlevelTwoCat() {
            var _this8 = this;

            axios.get('/leveltwocategories').then(function (response) {
                _this8.levelTwoArr = response.data;
                console.log(response);
            }).catch(function (errors) {
                console.log(errors);
            });

            console.log(this.levelOneCat.id);
            console.log(this.levelTwoCat);
        },


        /* --------------------- */
        /* LEVEL THREE CATEGORY  */
        /* --------------------- */

        addlevelThreeCat: function addlevelThreeCat() {

            /* axios.post('/levelonecategories', {name: this.levelTwoText, levelOneId: this.rootCat.id})
                .then((response) => {
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                }) */
            console.log(this.rootCat.id);
            console.log(this.levelOneText);
        },
        getlevelThreeCat: function getlevelThreeCat() {

            console.log(this.levelTwoCat.id);
            console.log(this.levelThreeCat);
        }
    }
});

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "mx-auto", attrs: { xs12: "", lg12: "" } },
    [
      _c(
        "v-card",
        { staticClass: "pa-3 mb-3" },
        [
          _c("v-card-title", { staticClass: "title" }, [
            _vm._v("\n            Create Categories\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { wrap: "", "justify-space-around": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs4: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3" },
                [_c("TreeBrowser", { attrs: { items: _vm.getCategory } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", lg4: "" } },
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
                        "v-card",
                        { staticClass: "pa-3 mb-3" },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "subheading font-weight-medium" },
                            [
                              _vm._v(
                                "\n                                Seleced Category\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("ID:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.rootCat.id))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("Name:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.rootCat.name))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("slug:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.rootCat.slug))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("Description:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.rootCat.description))
                                ])
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
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "pa-3" },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "subheading font-weight-medium" },
                            [
                              _vm._v(
                                "\n                                Category Added\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: { dismissible: "", type: "success" },
                              model: {
                                value: _vm.alert,
                                callback: function($$v) {
                                  _vm.alert = $$v
                                },
                                expression: "alert"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.alertCompText) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("Parent ID:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.addedCat.parent_id))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("ID:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.addedCat.id))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("Name:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.addedCat.name))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("slug:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.addedCat.slug))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", "justify-center": "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v("Description:")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs8: "" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(_vm._s(_vm.addedCat.description))
                                ])
                              ])
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
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", lg4: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3 mb-3" },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                         Categories\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.children, function(chldval, i) {
                    return _c(
                      "div",
                      { key: i },
                      [
                        _c(
                          "v-autocomplete",
                          {
                            attrs: {
                              items: chldval.childArr1,
                              label: "Enter Category",
                              box: "",
                              "item-text": "name",
                              "item-value": "id",
                              color: "orange darken-2",
                              "return-object": ""
                            },
                            on: {
                              change: function($event) {
                                _vm.callChild(i, chldval.child, "new")
                              }
                            },
                            model: {
                              value: chldval.child,
                              callback: function($$v) {
                                _vm.$set(chldval, "child", $$v)
                              },
                              expression: "chldval.child"
                            }
                          },
                          [_c("template", { slot: "no-data" })],
                          2
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { box: "", label: "Add New Category" },
                    on: { keyup: _vm.makeSlug },
                    model: {
                      value: _vm.newCat,
                      callback: function($$v) {
                        _vm.newCat = $$v
                      },
                      expression: "newCat"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    {},
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outline: "",
                            block: "",
                            color: "success",
                            dark: ""
                          },
                          on: { click: _vm.addCategory }
                        },
                        [_vm._v("Add Category")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outline: "",
                            block: "",
                            color: "error",
                            dark: ""
                          }
                        },
                        [_vm._v("cancel")]
                      )
                    ],
                    1
                  )
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
      _c(
        "v-layout",
        { attrs: { wrap: "", "justify-space-around": "" } },
        [
          _c(
            "v-flex",
            { staticClass: "mt-3 px-1", attrs: { xs12: "", lg6: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3" },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                        Ready Made Category List\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.readyMade, function(val, i) {
                    return _c("div", { key: i }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "subheading font-weight-medium text-no-wrap"
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(val.cat_names) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
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
            { staticClass: "mt-3 px-1", attrs: { xs12: "", lg6: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3 mb-3" },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                         Make Ready Made Category\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.makerId) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-layout",
                        { attrs: { wrap: "" } },
                        _vm._l(_vm.makerName, function(val, i) {
                          return _c(
                            "div",
                            { key: i },
                            [
                              _c(
                                "v-list-tile",
                                [
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v(_vm._s(val) + " "),
                                        _vm.makerName.length !== i + 1
                                          ? _c(
                                              "span",
                                              { staticClass: "pl-2" },
                                              [_vm._v(">")]
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
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
                        "v-list-tile-title",
                        { staticClass: "subheading font-weight-medium" },
                        [_c("pre", [_vm._v(" " + _vm._s(_vm.inco) + " ")])]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.ready, function(chldval, i) {
                    return _c(
                      "div",
                      { key: i },
                      [
                        _c(
                          "v-autocomplete",
                          {
                            attrs: {
                              items: chldval.childArr1,
                              label: "Enter Category",
                              box: "",
                              "item-text": "name",
                              "item-value": "id",
                              color: "orange darken-2",
                              "return-object": ""
                            },
                            on: {
                              change: function($event) {
                                _vm.callChild(i, chldval.child, "ready")
                              }
                            },
                            model: {
                              value: chldval.child,
                              callback: function($$v) {
                                _vm.$set(chldval, "child", $$v)
                              },
                              expression: "chldval.child"
                            }
                          },
                          [_c("template", { slot: "no-data" })],
                          2
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    {},
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outline: "",
                            block: "",
                            color: "success",
                            dark: ""
                          },
                          on: { click: _vm.createReadyMadeCat }
                        },
                        [_vm._v("Create Ready made ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outline: "",
                            block: "",
                            color: "error",
                            dark: ""
                          }
                        },
                        [_vm._v("cancel")]
                      )
                    ],
                    1
                  )
                ],
                2
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
    require("vue-hot-reload-api")      .rerender("data-v-3a992334", module.exports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(310)
/* template */
var __vue_template__ = __webpack_require__(311)
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
Component.options.__file = "resources/js/components/Categories/Categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a992334", Component.options)
  } else {
    hotAPI.reload("data-v-3a992334", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});