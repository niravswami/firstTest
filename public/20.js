webpackJsonp([20],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4dcaa83c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01b0e1b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserUpdateForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01b0e1b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserUpdateForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RegionComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RegionComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RegionComponent__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Region: __WEBPACK_IMPORTED_MODULE_2__RegionComponent___default.a
    },
    _veeValidate: {
        validator: "new"
    },

    beforeMount: function beforeMount() {

        if (!localStorage.getItem('token')) {

            this.$router.push('/');

            __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('signinDialog', true);
        }
    },


    data: function data() {
        return {
            /*------------------------
             * NAME SECTION
             *----------------------
             */
            firstName: "",
            lastName: "",
            newName: false,

            /*------------------------
             * EMAIL SECTION
             *----------------------
             *
             */
            email: "",
            newEmail: false,

            /*------------------------
             * GENDER SECTION
             *----------------------
             *
             */
            gender: null,
            newGender: false,

            /*------------------------
             * BIRTH DATE SECTION
             *----------------------
             *
             */

            birthDate: new Date().toISOString().substr(0, 10),
            //birthDate:  new Date().toJSON(),
            birthModal: false,
            newBirthDate: false,

            /*------------------------
             * MOBILE NUMBER SECTION
             *----------------------
             *
             */

            mobile_country_code: '+91',
            mobile: '',
            newMobile: false,

            /*------------------------
             * PASSWORD SECTION
             *----------------------
             *
             */
            password: '',
            c_password: '',
            newPassword: false,
            items: ["Item 1", "Item 2", "Item 3", "Item 4"],
            checkbox: null,
            dictionary: {
                attributes: {
                    email: "E-mail Address"
                    // custom attributes
                },
                custom: {
                    firstName: {
                        required: function required() {
                            return "Name can not be empty";
                        },
                        max: "The name field may not be greater than 10 characters"
                        // custom messages
                    },
                    select: {
                        required: "Select field is required"
                    }
                }
            }
        };
    },

    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);

        this.getUser();
    },


    methods: {
        getUser: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var _this = this;

                var userID, token;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.getUserInfo) {
                                    _context.next = 11;
                                    break;
                                }

                                _context.next = 3;
                                return this.getUserInfo;

                            case 3:
                                userID = this.getUserInfo.id;
                                token = localStorage.getItem('token');

                                if (!token) {
                                    _context.next = 10;
                                    break;
                                }

                                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                                axios.get('/users/' + userID).then(function (res) {

                                    console.log(res);

                                    if (res) {

                                        _this.firstName = res.data.first_name;

                                        _this.lastName = res.data.last_name;

                                        _this.birthDate = res.data.date_of_birth;

                                        _this.mobile = res.data.mobile_number;

                                        _this.email = res.data.email;

                                        _this.gender = res.data.gender.toString();
                                    }
                                }).catch(function (errors) {

                                    console.log(errors);
                                });
                                _context.next = 11;
                                break;

                            case 10:
                                return _context.abrupt('return');

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUser() {
                return _ref.apply(this, arguments);
            }

            return getUser;
        }(),
        saveEmail: function saveEmail() {
            var _this2 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            var id = this.getUserInfo.id;

            axios.put('/users/' + id, {
                ifNum: 3,
                email: this.email

            }).then(function (res) {

                console.log(res);
                if (res) {

                    _this2.getUser(); //allison.fisher@example.org

                    _this2.newEmail = false;
                }
            }).catch(function (errors) {

                console.log(errors);
            });
        },
        saveName: function saveName() {
            var _this3 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            var id = this.getUserInfo.id;

            axios.put('/users/' + id, {
                ifNum: 1,
                firstName: this.firstName,
                lastName: this.lastName

            }).then(function (res) {

                console.log(res);
                if (res) {

                    _this3.fireUserInfo();

                    _this3.newName = false;
                }
            }).catch(function (errors) {

                console.log(errors);
            });

            //     this.$validator.validateAll().then(result => {
            //     if (!result) {
            //     // do stuff if not valid.
            //     return console.log('not validate in Registration Form Component');

            //     } else {

            //         window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            //         let id = this.getUserInfo.id

            //         axios.put('/users/'+ id, {
            //             firstName: this.firstName,

            //        })
            //         .then((res) => {

            //             console.log(res)
            //             if(res) {
            //                 this.$store.dispatch('disUserInfo')
            //             }

            //         })
            //         .catch((errors) => {

            //             console.log(errors)
            //         })

            //     }
            // });
        },
        saveGender: function saveGender() {
            var _this4 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            var id = this.getUserInfo.id;

            axios.put('/users/' + id, {
                ifNum: 2,
                gender: this.gender

            }).then(function (res) {

                console.log(res);
                if (res) {

                    _this4.fireUserInfo();

                    _this4.newGender = false;
                }
            }).catch(function (errors) {

                console.log(errors);
            });
        },
        clear: function clear() {
            this.name = "";
            this.email = "";
            this.select = null;
            this.checkbox = null;
            this.validator.reset();
        },
        fireUserInfo: function fireUserInfo() {

            return this.$store.dispatch('disUserInfo');
        }
    },
    computed: {
        getUserInfo: function getUserInfo() {
            return this.$store.getters.getUserInfo;
        }
    },
    watch: {
        birthDate: function birthDate() {
            console.log(this.birthDate);
        }
    }
});

/***/ }),

/***/ 309:
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
            [_vm._v("\n             User Profile\n        ")]
          ),
          _vm._v(" "),
          [
            _c(
              "form",
              [
                _c("v-checkbox", {
                  attrs: {
                    label: "Edit Name",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newName,
                    callback: function($$v) {
                      _vm.newName = $$v
                    },
                    expression: "newName"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "px-2", attrs: { flat: "" } },
                  [
                    _c(
                      "v-layout",
                      {
                        attrs: { row: "", wrap: "", "justify-space-around": "" }
                      },
                      [
                        _c(
                          "v-flex",
                          { staticClass: "px-1", attrs: { xs12: "", lg6: "" } },
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
                                box: "",
                                label: "First Name",
                                "error-messages": _vm.errors.collect(
                                  "firstName"
                                ),
                                "data-vv-name": "firstName",
                                required: "",
                                color: "orange darken-2",
                                disabled: _vm.newName != true
                              },
                              model: {
                                value: _vm.firstName,
                                callback: function($$v) {
                                  _vm.firstName = $$v
                                },
                                expression: "firstName"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { staticClass: "px-1", attrs: { xs12: "", lg6: "" } },
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
                                box: "",
                                label: "Last Name",
                                "error-messages": _vm.errors.collect(
                                  "lastName"
                                ),
                                "data-vv-name": "lastName",
                                required: "",
                                color: "orange darken-2",
                                disabled: _vm.newName != true
                              },
                              model: {
                                value: _vm.lastName,
                                callback: function($$v) {
                                  _vm.lastName = $$v
                                },
                                expression: "lastName"
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
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.newName == true,
                            expression: "newName == true"
                          }
                        ],
                        staticClass: "mb-3"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              outline: "",
                              small: "",
                              color: "success",
                              dark: ""
                            },
                            on: { click: _vm.saveName }
                          },
                          [_vm._v("save")]
                        ),
                        _vm._v(" "),
                        _c("hr")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: {
                    label: "Change Gender",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newGender,
                    callback: function($$v) {
                      _vm.newGender = $$v
                    },
                    expression: "newGender"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-radio-group",
                  {
                    attrs: {
                      row: "",
                      disabled: _vm.newGender != true,
                      mandatory: true
                    },
                    model: {
                      value: _vm.gender,
                      callback: function($$v) {
                        _vm.gender = $$v
                      },
                      expression: "gender"
                    }
                  },
                  [
                    _c("v-radio", {
                      attrs: {
                        label: "Male",
                        value: "1",
                        color: "orange darken-2"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-radio", {
                      attrs: {
                        label: "Female",
                        value: "2",
                        color: "orange darken-2"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-radio", {
                      attrs: {
                        label: "Other",
                        value: "3",
                        color: "orange darken-2"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.newGender == true,
                        expression: "newGender == true"
                      }
                    ],
                    staticClass: "mx-3 ml-3"
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          outline: "",
                          small: "",
                          color: "success",
                          dark: ""
                        },
                        on: { click: _vm.saveGender }
                      },
                      [_vm._v("save")]
                    ),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: {
                    label: "Edit Date of Birth",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newBirthDate,
                    callback: function($$v) {
                      _vm.newBirthDate = $$v
                    },
                    expression: "newBirthDate"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "", md6: "" } },
                  [
                    _c(
                      "v-dialog",
                      {
                        ref: "birthDialog",
                        attrs: {
                          "return-value": _vm.birthDate,
                          persistent: "",
                          lazy: "",
                          "full-width": "",
                          width: "290px",
                          disabled: _vm.newBirthDate != true
                        },
                        on: {
                          "update:returnValue": function($event) {
                            _vm.birthDate = $event
                          }
                        },
                        model: {
                          value: _vm.birthModal,
                          callback: function($$v) {
                            _vm.birthModal = $$v
                          },
                          expression: "birthModal"
                        }
                      },
                      [
                        _c("v-text-field", {
                          attrs: {
                            slot: "activator",
                            label: "Date",
                            "prepend-icon": "event",
                            readonly: "",
                            box: "",
                            disabled: _vm.newBirthDate != true
                          },
                          slot: "activator",
                          model: {
                            value: _vm.birthDate,
                            callback: function($$v) {
                              _vm.birthDate = $$v
                            },
                            expression: "birthDate"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-date-picker",
                          {
                            attrs: { scrollable: "" },
                            model: {
                              value: _vm.birthDate,
                              callback: function($$v) {
                                _vm.birthDate = $$v
                              },
                              expression: "birthDate"
                            }
                          },
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { flat: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    _vm.birthModal = false
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { flat: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    _vm.$refs.birthDialog.save(_vm.birthDate)
                                  }
                                }
                              },
                              [_vm._v("OK")]
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
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.newBirthDate == true,
                        expression: "newBirthDate == true"
                      }
                    ],
                    staticClass: "mx-3 ml-3"
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          outline: "",
                          small: "",
                          color: "success",
                          dark: ""
                        }
                      },
                      [_vm._v("save")]
                    ),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: {
                    label: "Change E-mail Address",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newEmail,
                    callback: function($$v) {
                      _vm.newEmail = $$v
                    },
                    expression: "newEmail"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  attrs: {
                    box: "",
                    label: "E-mail",
                    "error-messages": _vm.errors.collect("email"),
                    "data-vv-name": "email",
                    required: "",
                    "prepend-icon": "fas fa-envelope",
                    color: "orange darken-2",
                    disabled: _vm.newEmail != true
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
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.newEmail == true,
                        expression: "newEmail == true"
                      }
                    ],
                    staticClass: "mx-3 ml-3"
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          outline: "",
                          small: "",
                          color: "success",
                          dark: ""
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.saveEmail($event)
                          }
                        }
                      },
                      [_vm._v("save")]
                    ),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: {
                    label: "Change Mobile Number",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newMobile,
                    callback: function($$v) {
                      _vm.newMobile = $$v
                    },
                    expression: "newMobile"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "px-4", attrs: { flat: "" } },
                  [
                    _c(
                      "v-layout",
                      { attrs: { row: "", wrap: "" } },
                      [
                        _c(
                          "v-flex",
                          { attrs: { xs3: "", lg2: "" } },
                          [
                            _c("v-text-field", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: true,
                                    regex: /^(\+\d{1-3})|(\d{1,4})$/
                                  },
                                  expression:
                                    "{ required: true,  regex: /^(\\+\\d{1-3})|(\\d{1,4})$/ }"
                                }
                              ],
                              attrs: {
                                "error-messages": _vm.errors.collect("Code"),
                                label: "Code",
                                "data-vv-name": "Code",
                                required: "",
                                disabled: _vm.newMobile != true
                              },
                              model: {
                                value: _vm.mobile_country_code,
                                callback: function($$v) {
                                  _vm.mobile_country_code = $$v
                                },
                                expression: "mobile_country_code"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs9: "", lg6: "", "offset-lg1": "" } },
                          [
                            _c("v-text-field", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: true,
                                    numeric: true,
                                    min: 10,
                                    max: 10,
                                    regex: /^(\+\d{1,3}[- ]?)?\d{10}$/
                                  },
                                  expression:
                                    "{ required: true, numeric: true,min: 10 , max: 10 , regex: /^(\\+\\d{1,3}[- ]?)?\\d{10}$/ }"
                                }
                              ],
                              attrs: {
                                counter: 10,
                                "error-messages": _vm.errors.collect("mobile"),
                                label: "Mobile",
                                "data-vv-name": "mobile",
                                required: "",
                                disabled: _vm.newMobile != true
                              },
                              model: {
                                value: _vm.mobile,
                                callback: function($$v) {
                                  _vm.mobile = $$v
                                },
                                expression: "mobile"
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
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.newMobile == true,
                            expression: "newMobile == true"
                          }
                        ],
                        staticClass: "mb-3"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              outline: "",
                              small: "",
                              color: "success",
                              dark: ""
                            }
                          },
                          [_vm._v("save")]
                        ),
                        _vm._v(" "),
                        _c("hr")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: {
                    label: "Change Password",
                    type: "checkbox",
                    required: "",
                    color: "orange darken-2"
                  },
                  model: {
                    value: _vm.newPassword,
                    callback: function($$v) {
                      _vm.newPassword = $$v
                    },
                    expression: "newPassword"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "px-4", attrs: { flat: "" } },
                  [
                    _c(
                      "v-layout",
                      {
                        attrs: { row: "", wrap: "", "justify-space-around": "" }
                      },
                      [
                        _c(
                          "v-flex",
                          { attrs: { xs12: "", lg5: "" } },
                          [
                            _c("v-text-field", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: true,
                                    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
                                  },
                                  expression:
                                    "{required: true, regex: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,}"
                                }
                              ],
                              ref: "password",
                              attrs: {
                                name: "password",
                                label: "Enter New Password",
                                box: "",
                                "error-messages": _vm.errors.collect(
                                  "password"
                                ),
                                "data-vv-name": "password",
                                "data-vv-as": "Password",
                                type: "password",
                                disabled: _vm.newPassword != true
                              },
                              model: {
                                value: _vm.password,
                                callback: function($$v) {
                                  _vm.password = $$v
                                },
                                expression: "password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs12: "", lg5: "" } },
                          [
                            _c("v-text-field", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: { confirmed: "password" },
                                  expression: "{ confirmed:'password'}"
                                }
                              ],
                              attrs: {
                                label: "Confirm password",
                                box: "",
                                "error-messages": _vm.errors.collect(
                                  "confirm_password"
                                ),
                                "data-vv-name": "confirm_password",
                                "data-vv-as": "Confirm Password",
                                type: "password",
                                disabled: _vm.newPassword != true
                              },
                              model: {
                                value: _vm.c_password,
                                callback: function($$v) {
                                  _vm.c_password = $$v
                                },
                                expression: "c_password"
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
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.newPassword == true,
                            expression: "newPassword == true"
                          }
                        ],
                        staticClass: "mb-3"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              outline: "",
                              small: "",
                              color: "success",
                              dark: ""
                            }
                          },
                          [_vm._v("save")]
                        ),
                        _vm._v(" "),
                        _c("hr")
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
    require("vue-hot-reload-api")      .rerender("data-v-01b0e1b4", module.exports)
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(308)
/* template */
var __vue_template__ = __webpack_require__(309)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01b0e1b4"
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
Component.options.__file = "resources/js/components/forms/userUpdateForm/UserUpdateForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01b0e1b4", Component.options)
  } else {
    hotAPI.reload("data-v-01b0e1b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});