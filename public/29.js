webpackJsonp([29],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(96)
/* template */
var __vue_template__ = __webpack_require__(97)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4305abef"
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
Component.options.__file = "resources/js/components/forms/StoreviewForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4305abef", Component.options)
  } else {
    hotAPI.reload("data-v-4305abef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
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
Component.options.__file = "resources/js/components/RegionComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64d3584e", Component.options)
  } else {
    hotAPI.reload("data-v-64d3584e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    _veeValidate: {
        validator: "new"
    },
    created: function created() {},
    mounted: function mounted() {
        this.$validator.localize('en', this.dictionary);
        //console.log(this.propCountry, this.propState, this.propCity, this.propArea);
    },

    props: ['propCountry', 'propState', 'propCity', 'propArea'],
    data: function data() {
        var _ref;

        return _ref = {

            area: '',
            brandArr: [],
            newArea: '',
            newAreaDialog: false,
            newAreaSuccess: true,

            countryArr: [],
            country: this.propCountry ? this.propCountry : null,
            stateArr: [],
            state: this.propState ? this.propState : null,
            cityArr: [],
            city: this.propCity ? this.propCity : null,
            areaArr: []
        }, _defineProperty(_ref, 'area', this.propArea ? this.propArea : null), _defineProperty(_ref, 'dictionary', {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {
                country: {
                    required: function required() {
                        return "country can not be empty";
                    }
                    // custom messages
                },
                state: {
                    required: function required() {
                        return "State can not be empty";
                    },
                    regex: 'Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                },
                confirm_password: {
                    required: function required() {
                        return " password field can not be empty";
                    }
                }
            }
        }), _ref;
    },

    methods: {
        countryFn: function countryFn() {
            var _this = this;

            if (this.countryArr.length !== 0) {
                return;
            } else {

                // this.countryArr = this.countryData.countries;

                /*    console.log(this.country.id)
                console.log(this.country.states) */

                axios.get('/country').then(function (response) {
                    _this.stateArr = [];
                    _this.state = '';
                    _this.countryArr = response.data.data;
                    console.log(response.data.data);
                }).catch(function (errors) {
                    console.log(errors);
                });
            }
        },
        getState: function getState() {
            var _this2 = this;

            var self = this;

            if (self.stateArr.length != 0) {
                return;
            } else {

                axios.get('/country/' + self.country.id + '/countrystates').then(function (response) {
                    console.log(response.data.data);
                    self.stateArr = response.data.data;
                    //self.state = '';
                    _this2.cityArr = [];
                }).catch(function (error) {
                    console.log(error);
                });
                //self.$emit('country', 'hi')
            }
        },
        getCity: function getCity() {
            var _this3 = this;

            var self = this;

            console.log(this.state.id + ' ' + 's_id');
            console.log(self.state.statecities);

            axios.get('/states/' + this.state.id + '/statecities').then(function (response) {
                console.log(response.data.data);
                self.cityArr = response.data.data;

                _this3.areaArr = [];
            }).catch(function (error) {
                console.log(error);
            });

            self.$emit('state', self.state.id);
        },
        getArea: function getArea() {

            var self = this;

            axios.get('/cities/' + self.city.id + '/cityareas').then(function (response) {
                console.log(response.data.data);
                self.areaArr = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });

            self.$emit('city', self.city.id);
        },
        addArea: function addArea() {
            var _this4 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            axios.post('/cities/' + this.city.id + '/areas', { areaName: this.newArea, cityID: this.city.id }).then(function (response) {

                _this4.newArea = response.data.success;

                _this4.newAreaSuccess = false;

                _this4.getArea();

                console.log(response);
            }).catch(function (errors) {

                console.log(errors);
            });
        },
        openAreaDialog: function openAreaDialog() {

            this.area = '';
            this.newAreaDialog = true;
        },
        cancelNewArea: function cancelNewArea() {

            this.newArea = '';
            this.newAreaDialog = false;
            //this.brandArr = [];
            this.newAreaSuccess = true;
        }
    },
    watch: {
        country: function country() {

            /* let aa = this.stateData.states;
            let b = []
            aa.filter(a => {
                if(a.country_id == this.country.id) {
                b.push(a)
                }
            })
            this.stateArr = b; */
            //this.getState();
            this.$emit('country', this.country.id);
            this.stateArr = [];
            this.state = '';
        },

        state: function state() {
            /* let aa = this.cityData.cities;
            let b = []
            aa.filter(a => {
                if(a.state_id == this.state.id) {
                b.push(a)
                }
            })
            this.cityArr = b; */

            //this.getCity();
            this.$emit('state', this.state.id);
            this.cityArr = [];
            this.city = '';
        },
        city: function city() {
            /* let aa = this.areaData.areas;
            let b = []
            aa.filter(a => {
                if(a.city_id == this.city.id) {
                b.push(a)
                }
            })
            this.areaArr = b; */
            //this.getArea();
            this.$emit('city', this.city.id);
            this.areaArr = [];

            this.area = '';
        },
        area: function area() {
            var _this5 = this;

            return this.$emit('area', this.area.id);

            this.$validator.validateAll().then(function (result) {
                if (!result) {
                    // do stuff if not valid.
                    return console.log('not validate in Region Component');
                } else {

                    var region = {
                        country: _this5.country.id,
                        state: _this5.state.id,
                        city: _this5.city.id,
                        area: _this5.area.id
                        //console.log(this.area.id)
                    };_this5.$emit('region', region);
                }
            });
        }
    }
});

/***/ }),

/***/ 93:
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
        { staticClass: "px-3", attrs: { flat: "" } },
        [
          _c(
            "v-layout",
            { attrs: { wrap: "", "justify-space-between": "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "px-1 py-1",
                    attrs: {
                      box: "",
                      items: _vm.countryArr,
                      "error-messages": _vm.errors.collect("country"),
                      "data-vv-name": "country",
                      "data-vv-as": "Country",
                      flat: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Country",
                      "return-object": "",
                      color: "orange darken-2"
                    },
                    on: { focus: _vm.countryFn },
                    model: {
                      value: _vm.country,
                      callback: function($$v) {
                        _vm.country = $$v
                      },
                      expression: "country"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "px-1 py-1",
                    attrs: {
                      box: "",
                      items: _vm.stateArr,
                      "error-messages": _vm.errors.collect("state"),
                      "data-vv-name": "state",
                      "data-vv-as": "State",
                      flat: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "State",
                      "return-object": "",
                      disabled: !_vm.country,
                      color: "orange darken-2"
                    },
                    on: { focus: _vm.getState },
                    model: {
                      value: _vm.state,
                      callback: function($$v) {
                        _vm.state = $$v
                      },
                      expression: "state"
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
            "v-layout",
            { attrs: { wrap: "", "justify-space-around": "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "px-1 py-1",
                    attrs: {
                      box: "",
                      items: _vm.cityArr,
                      "error-messages": _vm.errors.collect("city"),
                      "data-vv-name": "city",
                      "data-vv-as": "City",
                      flat: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "City",
                      "return-object": "",
                      disabled: !_vm.state,
                      color: "orange darken-2"
                    },
                    on: { focus: _vm.getCity },
                    model: {
                      value: _vm.city,
                      callback: function($$v) {
                        _vm.city = $$v
                      },
                      expression: "city"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "px-1 py-1",
                    attrs: {
                      box: "",
                      items: _vm.areaArr,
                      "error-messages": _vm.errors.collect("area"),
                      "data-vv-name": "area",
                      "data-vv-as": "Area",
                      flat: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Area",
                      "return-object": "",
                      disabled: !_vm.city,
                      color: "orange darken-2"
                    },
                    on: { focus: _vm.getArea },
                    model: {
                      value: _vm.area,
                      callback: function($$v) {
                        _vm.area = $$v
                      },
                      expression: "area"
                    }
                  }),
                  _vm._v(" "),
                  _vm.city
                    ? _c("div", { staticClass: "subheading pa-2" }, [
                        _vm._v("Didn't find your Area?"),
                        _c(
                          "span",
                          {
                            staticClass: "forSpanClick",
                            on: { click: _vm.openAreaDialog }
                          },
                          [_vm._v(" click here")]
                        ),
                        _vm._v(" to Add")
                      ])
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
      _vm.newAreaDialog
        ? _c(
            "div",
            [
              _c(
                "v-dialog",
                {
                  attrs: {
                    scrollable: "",
                    persistent: "",
                    overlay: false,
                    "max-width": "500px",
                    transition: "dialog-transition"
                  },
                  model: {
                    value: _vm.newAreaDialog,
                    callback: function($$v) {
                      _vm.newAreaDialog = $$v
                    },
                    expression: "newAreaDialog"
                  }
                },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg12: "" } },
                    [
                      _vm.newAreaSuccess
                        ? _c(
                            "v-card",
                            { staticClass: "pa-4" },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass: "subheading font-weight-medium"
                                },
                                [
                                  _vm._v(
                                    "\n                        Add New Area\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.city) +
                                    "\n                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { box: "", label: "Enter New Area" },
                                model: {
                                  value: _vm.newArea,
                                  callback: function($$v) {
                                    _vm.newArea = $$v
                                  },
                                  expression: "newArea"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { outline: "", color: "success" },
                                      on: { click: _vm.addArea }
                                    },
                                    [_vm._v("Add")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { outline: "", color: "error" },
                                      on: { click: _vm.cancelNewArea }
                                    },
                                    [_vm._v("cancel")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "v-card",
                            { staticClass: "pa-4" },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass: "subheading font-weight-medium"
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.newArea) +
                                      "\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { outline: "", color: "success" },
                                      on: { click: _vm.cancelNewArea }
                                    },
                                    [_vm._v("ok")]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64d3584e", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5f7a9628", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4305abef\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StoreviewForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4305abef\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StoreviewForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegionComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegionComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RegionComponent__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        Region: __WEBPACK_IMPORTED_MODULE_1__RegionComponent___default.a
    },
    _veeValidate: {
        validator: "new"
    },

    data: function data() {
        return {
            user: null,

            name: "",
            fullAddress: "",
            unique_key: "",
            email: "",
            contactNumber: "",
            website: "",
            aboutUs: "",
            country: '',
            state: '',
            city: '',
            area: '',
            pincode: '',
            checkbox: '1',
            dictionary: {
                attributes: {
                    email: "E-mail Address"
                    // custom attributes
                },
                custom: {
                    name: {
                        required: function required() {
                            return "Name can not be empty";
                        },
                        max: "The name field may not be greater than 10 characters"
                        // custom messages
                    },
                    select: {
                        required: "Select field is required"
                    },
                    phone: {},
                    website: {},
                    unique_key: {
                        required: function required() {
                            return "Unique Key can not be empty";
                        },
                        regex: "Space and hyphen '-' not allowed"
                    }
                }
            }
        };
    },

    beforeMount: function beforeMount() {

        if (!localStorage.getItem('token')) {

            this.$router.push('/');

            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('signinDialog', true);
        }
    },
    mounted: function mounted() {

        this.$validator.localize("en", this.dictionary);
    },


    methods: {
        submit: function submit() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (!result) {
                    // do stuff if not valid.
                    return console.log('not validate in Registration Form Component');
                } else {

                    if (_this.getUserInfo) {

                        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                        axios.post('/storeview', {
                            store_name: _this.name,
                            store_address: _this.fullAddress,
                            contact_number: _this.contactNumber,
                            unique_key: _this.unique_key,
                            email: _this.email,
                            website: _this.website,
                            country_id: _this.country,
                            state_id: _this.state,
                            city_id: _this.city,
                            area_id: _this.area,
                            pincode: _this.pincode,
                            about_us: _this.aboutUs
                        }).then(function (res) {

                            console.log(res);

                            if (res) {

                                __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('againFireUser');

                                var str_id = res.data.id;

                                _this.cancel();

                                _this.$router.replace({ name: 'storeview', params: { id: str_id }, props: { id: str_id } });
                            }
                        }).catch(function (errors) {

                            console.log(errors.response);
                        });
                    }

                    //this.clear();
                }
            });
        },
        addNumber: function addNumber() {
            console.log(this.contactNumber);
        },
        cancel: function cancel(go) {
            this.name = '';
            this.fullAddress = '';
            this.contactNumber = '';
            this.email = '';
            this.website = '';
            this.country = '';
            this.state = '';
            this.city = '';
            this.area = '';
            this.pincode = '';
            this.aboutUs = '';
            this.$validator.reset();

            if (go == 'home') {

                this.$router.replace('/');
            }
        }
    },
    computed: {
        getUserInfo: function getUserInfo() {

            return this.user = this.$store.getters.getUserInfo;
        },
        getNotUserInfo: function getNotUserInfo() {

            return this.user = this.$store.getters.getNotUserInfo;
        }
    }
});

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: " mx-auto ", attrs: { xs12: "", lg5: "" } },
    [
      _c(
        "v-card",
        { staticClass: "pa-4 background-shadow" },
        [
          _c(
            "v-card-title",
            { staticClass: "headline", attrs: { "primary-title": "" } },
            [_vm._v("\n                    Create Storeview\n                ")]
          ),
          _vm._v(" "),
          _c(
            "form",
            [
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  label: "Shop / enterpirse / company / Business Name",
                  box: "",
                  "error-messages": _vm.errors.collect("name"),
                  "data-vv-name": "name",
                  required: "",
                  "prepend-icon": "fas fa-store-alt",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  label: "Shop / office / Home Full Address",
                  box: "",
                  "error-messages": _vm.errors.collect("Address"),
                  "data-vv-name": "Address",
                  required: "",
                  "prepend-icon": "fas fa-map-marker",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.fullAddress,
                  callback: function($$v) {
                    _vm.fullAddress = $$v
                  },
                  expression: "fullAddress"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true, regex: /^[a-zA-Z0-9_]+$/ },
                    expression: "{required: true, regex: /^[a-zA-Z0-9_]+$/}"
                  }
                ],
                attrs: {
                  label: "Unique Key",
                  box: "",
                  "error-messages": _vm.errors.collect("unique_key"),
                  "data-vv-name": "unique_key",
                  required: "",
                  hint:
                    "this name must be unique, so any one can find your storeview by this Name",
                  "prepend-icon": "fas fa-signature",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.unique_key,
                  callback: function($$v) {
                    _vm.unique_key = $$v
                  },
                  expression: "unique_key"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Contact Number(s)",
                  box: "",
                  "error-messages": _vm.errors.collect("phone"),
                  "data-vv-name": "phone",
                  required: "",
                  "prepend-icon": "fas fa-phone",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.contactNumber,
                  callback: function($$v) {
                    _vm.contactNumber = $$v
                  },
                  expression: "contactNumber"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { email: true },
                    expression: "{email: true}"
                  }
                ],
                attrs: {
                  label: "E-mail",
                  box: "",
                  "error-messages": _vm.errors.collect("email"),
                  "data-vv-name": "email",
                  required: "",
                  "prepend-icon": "fas fa-envelope",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Website",
                  box: "",
                  "error-messages": _vm.errors.collect("website"),
                  "data-vv-name": "website",
                  required: "",
                  "prepend-icon": "fas fa-desktop",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.website,
                  callback: function($$v) {
                    _vm.website = $$v
                  },
                  expression: "website"
                }
              }),
              _vm._v(" "),
              _c("Region", {
                on: {
                  country: function($event) {
                    _vm.country = $event
                  },
                  state: function($event) {
                    _vm.state = $event
                  },
                  city: function($event) {
                    _vm.city = $event
                  },
                  area: function($event) {
                    _vm.area = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "pt-5",
                attrs: {
                  label: "Pincode",
                  box: "",
                  "error-messages": _vm.errors.collect("website"),
                  "data-vv-name": "website",
                  required: "",
                  "prepend-icon": "fas fa-map-pin",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.pincode,
                  callback: function($$v) {
                    _vm.pincode = $$v
                  },
                  expression: "pincode"
                }
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  box: "",
                  label: "About Us",
                  "prepend-icon": "fas fa-paragraph",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.aboutUs,
                  callback: function($$v) {
                    _vm.aboutUs = $$v
                  },
                  expression: "aboutUs"
                }
              }),
              _vm._v(" "),
              _c("v-checkbox", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  value: "1",
                  label: "Option",
                  "error-messages": _vm.errors.collect("checkbox"),
                  "data-vv-name": "checkbox",
                  type: "checkbox",
                  required: "",
                  color: "orange darken-2"
                },
                model: {
                  value: _vm.checkbox,
                  callback: function($$v) {
                    _vm.checkbox = $$v
                  },
                  expression: "checkbox"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.submit } }, [_vm._v("submit")]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.cancel("home")
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4305abef", module.exports)
  }
}

/***/ })

});