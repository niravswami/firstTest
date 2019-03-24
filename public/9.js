webpackJsonp([9],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(153)
/* template */
var __vue_template__ = __webpack_require__(154)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e3ee596c"
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
Component.options.__file = "resources/js/components/ImagesComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3ee596c", Component.options)
  } else {
    hotAPI.reload("data-v-e3ee596c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(156)
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
Component.options.__file = "resources/js/components/ttl.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76e0ebf1", Component.options)
  } else {
    hotAPI.reload("data-v-76e0ebf1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyErrorsValidatorMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(1);


var MyErrorsValidatorMixin = {
    mounted: function mounted() {},
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$on('errorArrPassReply', function (data) {

            _this.errorArrPass = data;
        });
    },

    //props:['prpAmount','prpDiscount','prpOffers','prpPreviousPricet'],
    data: function data() {
        return {

            errorArrPass: false
        };
    },

    methods: {
        chechForTheErrors: function chechForTheErrors() {

            __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArrPassCheck');
            return;
        },
        titleBlockValidateHere: function titleBlockValidateHere() {

            if (this.mainImg == null) {

                // this.errorArr.push('Main Image Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Main Image Can Not Be Empty.');
            }
            if (this.title == null || this.title == '') {

                // this.errorArr.push('Title Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Title Field Can Not Be Empty.');
            }

            if (this.highlights == null || this.highlights.length == 0) {

                // this.errorArr.push('Highlights Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Highlights Field Can Not Be Empty.');
            }
            if (this.keywords == null || this.keywords.length == 0) {

                // this.errorArr.push('Keywords Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Keywords Field Can Not Be Empty.');
            }

            return;
        },
        amountValidateHere: function amountValidateHere() {

            if (this.amount == null || this.amount == '') {

                // this.errorArr.push('Amount Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Amount Field Can Not Be Empty.');
            }
            return;
        },
        categoryValidateHere: function categoryValidateHere() {

            __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Category Field Can Not Be Empty.');
            return;
        },
        rentPerValidateHere: function rentPerValidateHere() {

            __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Rent Per Field Can Not Be Empty.');
            return;
        },


        // ================================   PRODUCT   ============================================

        productFormCategoryValidateHere: function productFormCategoryValidateHere() {

            if (this.category == null) {

                // this.errorArr.push('Category Field Can Not Be Empty.');

                // eventBus.$emit('errorArr', 'Category Field Can Not Be Empty.');

                this.categoryValidateHere();
            }

            return;
        },
        productFormValidatHere: function productFormValidatHere() {

            this.amountValidateHere();

            if (this.want_to == 2) {

                if (this.per == null) {

                    // this.errorArr.push('Rent Per Field Can Not Be Empty.');

                    // eventBus.$emit('errorArr', 'Rent Per Field Can Not Be Empty.');

                    this.rentPerValidateHere();
                }
            }
            if (this.want_to == 3) {

                if (this.per == null) {

                    // this.errorArr.push('Per Field Can Not Be Empty.');

                    __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Per Field Can Not Be Empty.');
                }
            }

            return;
        },


        // ========================   SEARVICE AND BUSINESS   ===================================

        searviceFormAmountValidateHere: function searviceFormAmountValidateHere() {

            if (this.showPriceOrNot == 1 && this.amount == null || this.amount == '') {

                // this.errorArr.push('Per Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Amount Field Can Not Be Empty.');
            }

            return;
        },
        serviceFormCategoryValidateHere: function serviceFormCategoryValidateHere() {

            if (this.category == null) {

                // this.errorArr.push('Category Field Can Not Be Empty.');

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Service / Business Category Field Can Not Be Empty.');
            }

            return;
        },


        // ========================   PROPERTY  ===================================

        propertyRentValidateHere: function propertyRentValidateHere() {

            if (this.sellRent == 1) {

                if (this.rentPer == null) {

                    // this.errorArr.push('Rent Per Field Can Not Be Empty.');

                    // eventBus.$emit('errorArr', 'Rent Per Field Can Not Be Empty.');

                    this.rentPerValidateHere();
                }
            }
            return;
        },
        propertyFullAddressValidateHere: function propertyFullAddressValidateHere() {

            if (!this.addressNotShow) {

                if (this.fullAddress == null || this.fullAddress == '') {

                    __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Full Address Field Can Not Be Empty.');
                }
            }
            return;
        },
        propertyRegionValidateHere: function propertyRegionValidateHere() {

            if (this.country == null) {

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Country Field Can Not Be Empty.');
            }
            if (this.state == null) {

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'State Field Can Not Be Empty.');
            }
            if (this.city == null) {

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'City Field Can Not Be Empty.');
            }
            return;
        },


        // ========================   PROPERTY  ===================================

        educationFeesValidateHere: function educationFeesValidateHere() {

            if (this.showPriceOrNot == 1 && this.fees == null || this.fees == '') {

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Fees Field Can Not Be Empty.');
            }
            if (this.showPriceOrNot == 1 && this.feesper == null) {

                __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$emit('errorArr', 'Fees Per Field Can Not Be Empty.');
            }
        },


        // ========================   USED ITEM  ===================================

        useditemCategoryValidateHere: function useditemCategoryValidateHere() {

            if (this.fused == null || this.sused == null) {

                // eventBus.$emit('errorArr', 'Category Field Can Not Be Empty.');

                this.categoryValidateHere();
            }
            return;
        },
        useditemEditCategoryValidateHere: function useditemEditCategoryValidateHere() {

            if (this.editCat) {

                this.useditemCategoryValidateHere();
            }
            return;
        }
    },
    watch: {}
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(161)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e4955cd"
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
Component.options.__file = "resources/js/components/amt.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e4955cd", Component.options)
  } else {
    hotAPI.reload("data-v-7e4955cd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7a348b0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3ee596c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImagesComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3ee596c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImagesComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 153:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mounted: function mounted() {},

    props: ['propMainImg', 'propimgArr'],
    data: function data() {
        return {
            backupImg: __webpack_require__(5),
            prpMainImg: this.propMainImg ? this.propMainImg : null,
            mainImg: '',
            imagesUrl: this.propimgArr ? this.propimgArr : [],
            rawImages: [],
            rawMainImg: null,
            count: 0,
            deleteImages: [],
            test: []

        };
    },

    methods: {
        uploadMainImage: function uploadMainImage() {

            this.$refs.mainImg.click();
            return;
        },
        onFilePicked: function onFilePicked(event) {
            var _this = this;

            // Reference to the DOM input element
            var input = event.target.files;
            // Ensure that you have a file before attempting to read it
            if (input[0]) {

                var filename = input[0].name;

                if (filename.lastIndexOf('.') <= 0) {
                    return alert('please choose valid file');
                }
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();

                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input[0]);

                // Define a callback function to run, when FileReader finishes its job
                reader.onload = function (e) {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    //this.mainImg = reader.result;
                    _this.prpMainImg = reader.result;
                };
                // Start the reader job - read file as a data url (base64 format)
                //reader.readAsDataURL(input[0]);
                this.rawMainImg = input[0];
                /* if(!this.test[0]){
                     this.test.push(input[0]) ;
                }
                if(this.test[0]){
                     this.test.push(input[0]) ;
                } */
                return event.target.value = '';
            }
        },
        moreImgs: function moreImgs() {

            /* console.log(this.$refs.addMoreBtn);
            return; */

            if (this.prpMainImg) {
                this.$refs.pushimg.click();
                return;
            }

            if (this.rawMainImg === null || this.prpMainImg === __webpack_require__(5)) {
                alert('Upload Main Image First');
                return;
            } else {
                this.$refs.pushimg.click();
                this.count++;
            }
        },
        pushImage: function pushImage(event) {
            var _this2 = this;

            /* console.log( this.$refs.pushimg.files);
            console.log( event.target.files[0].value = '');
            console.log( this.$refs.pushimg.files[0]);
            return */
            if (this.rawMainImg == null && this.prpMainImg == __webpack_require__(5)) {
                alert('Upload Main Image First');
                return;
            } else {

                // Reference to the DOM input element
                var input = event.target.files;
                // Ensure that you have a file before attempting to read it
                // if (input[0]) {

                var filename = input[0].name;

                if (filename.lastIndexOf('.') <= 0) {
                    return alert('please choose valid file');
                }
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();

                // Define a callback function to run, when FileReader finishes its job

                /*  reader.addEventListener('load', () => {
                      this.imagesUrl.push(reader.result);
                  }); */

                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input[0]);

                reader.onload = function (e) {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    _this2.imagesUrl.push(reader.result);
                };
                this.rawImages.push(input[0]);
                return event.target.value = '';
                // return input[0].value = this.dummyFile;
                //}
            }
        },
        deletePushImg: function deletePushImg(index) {

            var a = confirm('Are You Sure You Want To Delete!!?');
            if (a) {
                var b = this.imagesUrl;

                var str = b[index];
                var n = str.indexOf("data");;

                if (n != 0) {
                    this.deleteImages.push(b[index]);

                    console.log(b[index]);
                }
                this.imagesUrl.splice(index, 1);
                this.rawImages.splice(index, 1);
                this.count--;
            }
            return;
        }
    },
    watch: {
        rawMainImg: function rawMainImg() {

            this.$emit('mainImg', this.rawMainImg);
        },
        rawImages: function rawImages() {

            this.$emit('imgArr', this.rawImages);
        },
        deleteImages: function deleteImages() {

            this.$emit('deleteImages', this.deleteImages);
        }
    }
});

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "background-shadow  mb-3", attrs: { flat: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "display-1", attrs: { "primary-title": "" } },
        [_vm._v("\n        Upload Images\n    ")]
      ),
      _vm._v(" "),
      _vm.prpMainImg !== null
        ? _c("v-img", {
            staticClass: "mb-2",
            attrs: { src: _vm.prpMainImg, "aspect-ratio": "1", contain: "" }
          })
        : _c("v-img", {
            staticClass: "mb-2",
            attrs: { src: _vm.backupImg, "aspect-ratio": "1", contain: "" }
          }),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "justify-space-between" },
        [
          _c(
            "v-btn",
            {
              attrs: {
                flat: "",
                outline: "",
                block: "",
                color: "primary",
                dark: ""
              },
              on: { click: _vm.uploadMainImage }
            },
            [_vm._v("Upload image")]
          ),
          _vm._v(" "),
          _c("input", {
            ref: "mainImg",
            staticStyle: { display: "none" },
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.onFilePicked }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-layout",
        {
          attrs: {
            wrap: "",
            "align-content-space-between": "",
            "justify-space-between": "",
            "ma-0": "",
            "px-3": "",
            "pb-3": ""
          }
        },
        _vm._l(_vm.imagesUrl, function(val, i) {
          return _c(
            "v-flex",
            { key: i, staticClass: "px-1", attrs: { xs6: "", lg6: "" } },
            [
              _c("v-img", {
                attrs: { src: val, "aspect-ratio": "1", contain: "" }
              }),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "justify-space-between" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        flat: "",
                        small: "",
                        outline: "",
                        block: "",
                        color: "error",
                        dark: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.deletePushImg(i)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  )
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
          _vm.imagesUrl.length < 4
            ? _c(
                "v-btn",
                {
                  ref: "addMoreBtn",
                  attrs: { outline: "", small: "", color: "success" },
                  on: { click: _vm.moreImgs }
                },
                [_vm._v("Upload More")]
              )
            : _c(
                "v-btn",
                {
                  ref: "addMoreBtn",
                  attrs: {
                    outline: "",
                    small: "",
                    color: "success",
                    disabled: ""
                  }
                },
                [_vm._v("MAX 5 PICS")]
              ),
          _vm._v(" "),
          _c("input", {
            ref: "pushimg",
            staticStyle: { display: "none" },
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.pushImage }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-e3ee596c", module.exports)
  }
}

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('ttt', function (data) {
            return; //console.log(data);
            _this.getInfoToParent = data;
        });
    },
    mounted: function mounted() {},

    props: ['ttl', 'propSlug', 'prpHighLights', 'prpDescriptions', 'prpKeywords'],
    data: function data() {
        var _ref;

        return _ref = {
            title: this.ttl ? this.ttl : '',
            highlights: this.prpHighLights ? this.prpHighLights : [],
            highlightFild: '',
            descriptions: this.prpDescriptions ? this.prpDescriptions : [],
            heading: '',
            description: '',
            keywords: this.prpKeywords ? this.prpKeywords : [],

            //title: '',
            slug: this.propSlug ? this.propSlug : ''
        }, _defineProperty(_ref, 'highlightFild', ''), _defineProperty(_ref, 'heading', ''), _defineProperty(_ref, 'description', ''), _defineProperty(_ref, 'activator', null), _defineProperty(_ref, 'attach', null), _defineProperty(_ref, 'editing', null), _defineProperty(_ref, 'index', -1), _defineProperty(_ref, 'items', [
            /* { header: 'Select an option or create one' },
            {
            text: 'Foo',
            //color: 'blue'
            },
            {
            text: 'Bar',
            // color: 'red'
            } */
        ]), _defineProperty(_ref, 'nonce', 1), _defineProperty(_ref, 'menu', false), _defineProperty(_ref, 'keywordText', ''), _defineProperty(_ref, 'x', 0), _defineProperty(_ref, 'search', null), _defineProperty(_ref, 'y', 0), _defineProperty(_ref, 'getInfoToParent', false), _ref;
    },

    watch: _defineProperty({
        keywords: function keywords(val, prev) {
            var _this2 = this;

            if (this.keywords.length > 7) {
                return;
            } else {

                if (val.length === prev.length) return;

                this.keywords = val.map(function (v) {
                    if (typeof v === 'string') {
                        v = {
                            text: v
                            // color: this.colors[this.nonce - 1]
                        };

                        _this2.items.push(v);

                        // this.nonce++
                    }

                    return v;
                });
            }
        },

        getInfoToParent: function getInfoToParent() {

            console.log(this.title, this.slug, this.highlights, this.descriptions);
        },
        title: function title() {
            var _this3 = this;

            this.$validator.validateAll().then(function (result) {
                if (!result) {
                    // do stuff if not valid.

                    _this3.$emit('title', null);

                    return;
                }

                _this3.$emit('title', _this3.title);
                // console.log(this.title)
            });
        },
        slug: function slug() {
            this.$emit('slug', this.slug);
        },
        highlights: function highlights() {
            this.$emit('highlights', this.highlights);
            return;
        },
        descriptions: function descriptions() {
            this.$emit('descriptions', this.descriptions);
        }
    }, 'keywords', function keywords() {
        this.$emit('keywords', this.keywords);
    }),

    methods: {
        edit: function edit(index, item) {
            if (!this.editing) {
                this.editing = item;
                this.index = index;
            } else {
                this.editing = null;
                this.index = -1;
            }
        },
        filter: function filter(item, queryText, itemText) {
            if (item.header) return false;

            var hasValue = function hasValue(val) {
                return val != null ? val : '';
            };

            var text = hasValue(itemText);
            var query = hasValue(queryText);

            return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
        },
        pushHighlight: function pushHighlight() {
            if (this.highlightFild !== '') {
                this.highlights.push(this.highlightFild);

                this.highlightFild = '';
            } else {
                alert('highlight field can\'t be left empty ');
            }
            //console.log(this.highlightFild);
        },
        deleteHighlight: function deleteHighlight(index) {
            var a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.highlights.splice(index, 1);
            }
            return;
        },
        pushDescription: function pushDescription() {

            if (this.heading == '' || this.description == '') {
                alert('Descriptions Field Can Not Be Empty');
                return;
            } else {

                this.descriptions.push({
                    heading: this.heading,
                    description: this.description
                });

                this.heading = '';
                this.description = '';
            }
            return;
        },
        deleteDescription: function deleteDescription(index) {

            var a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.descriptions.splice(index, 1);
            }
            return;
        },
        makeSlug: function makeSlug() {
            var text = this.title;
            this.slug = this.slugify(text);

            //console.log(slugifyTitle)
        },
        slugify: function slugify(text) {
            return text.toString().toLowerCase().replace(/\s+/g, '-') //replace spaces with '-'
            .replace(/[^\w\-]+/g, '') // remove all non-words chars
            .replace(/\-\+/g, '-') //replace multiple '-' with single '-'
            .replace(/^-+/, '') //trim '-' from start of text
            .replace(/-+$/, ''); //trim '-' from end of text
        },
        pushKeyword: function pushKeyword() {
            if (this.keywords.length <= 6) {

                if (this.keywordText !== '') {
                    this.keywords.push(this.keywordText);

                    this.keywordText = '';
                } else {
                    alert('keyword field can\'t be left empty ');
                }
                console.log(this.keywordText);
            } else {
                this.keywordBtn = false;
            }
        },
        deleteKeyword: function deleteKeyword(index) {
            var a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.keywords.splice(index, 1);
            }
            return;
        }
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3 ", attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                { staticClass: "subheading font-weight-medium" },
                [_vm._v("\n                    Title\n                ")]
              ),
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
                  color: "orange darken-2",
                  box: "",
                  label: "Title",
                  "prepend-icon": "fas fa-signature",
                  "error-messages": _vm.errors.collect("title"),
                  "data-vv-name": "title"
                },
                on: { keyup: _vm.makeSlug },
                model: {
                  value: _vm.title,
                  callback: function($$v) {
                    _vm.title = typeof $$v === "string" ? $$v.trim() : $$v
                  },
                  expression: "title"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                { staticClass: "subheading font-weight-medium" },
                [_vm._v("\n                Highlights\n            ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm._l(_vm.highlights, function(val, i) {
                    return [
                      _c(
                        "v-card-actions",
                        { key: i, staticClass: "pa-0" },
                        [
                          _c("span", { staticStyle: { "font-size": "6px" } }, [
                            _c("i", { staticClass: "fas fa-circle" })
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "py-0 subheading" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(val) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { flat: "", icon: "", color: "pink" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.deleteHighlight(i)
                                    }
                                  }
                                },
                                [_vm._v("close")]
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
              ),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "pb-2",
                attrs: {
                  "hide-details": "",
                  label: "Highlight",
                  box: "",
                  color: "orange darken-2",
                  "prepend-icon": "fas fa-circle"
                },
                on: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.pushHighlight($event)
                  }
                },
                model: {
                  value: _vm.highlightFild,
                  callback: function($$v) {
                    _vm.highlightFild = $$v
                  },
                  expression: "highlightFild"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", small: "", color: "success" },
                      on: { click: _vm.pushHighlight }
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
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                { staticClass: "subheading font-weight-medium" },
                [_vm._v("\n                Description\n            ")]
              ),
              _vm._v(" "),
              _vm.descriptions.length > 0
                ? _c(
                    "div",
                    _vm._l(_vm.descriptions, function(val, i) {
                      return _c(
                        "v-card",
                        { key: i, staticClass: "my-1", attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    wrap: "",
                                    "justify-space-around": ""
                                  }
                                },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs11: "", lg3: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          "hide-details": "",
                                          label: "Heading",
                                          color: "orange darken-2"
                                        },
                                        model: {
                                          value: val.heading,
                                          callback: function($$v) {
                                            _vm.$set(val, "heading", $$v)
                                          },
                                          expression: "val.heading"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs11: "", lg7: "" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          "hide-details": "",
                                          label: "Description",
                                          "auto-grow": "",
                                          rows: "1",
                                          color: "orange darken-2"
                                        },
                                        model: {
                                          value: val.description,
                                          callback: function($$v) {
                                            _vm.$set(val, "description", $$v)
                                          },
                                          expression: "val.description"
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
                                "v-btn",
                                {
                                  attrs: { flat: "", icon: "", color: "pink" }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.deleteDescription(i)
                                        }
                                      }
                                    },
                                    [_vm._v("close")]
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
                    })
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { wrap: "", "justify-space-around": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs11: "", lg4: "", "d-flex": "" } },
                    [
                      _c("v-text-field", {
                        staticClass: "py-2",
                        attrs: {
                          "hide-details": "",
                          box: "",
                          label: "Heading",
                          color: "orange darken-2",
                          "prepend-icon": "fas fa-pen-square"
                        },
                        model: {
                          value: _vm.heading,
                          callback: function($$v) {
                            _vm.heading = $$v
                          },
                          expression: "heading"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs11: "", lg7: "", "d-flex": "" } },
                    [
                      _c("v-textarea", {
                        staticClass: "py-2",
                        attrs: {
                          "hide-details": "",
                          box: "",
                          label: "Description",
                          "auto-grow": "",
                          rows: "1",
                          color: "orange darken-2",
                          "prepend-icon": "fas fa-pen-square"
                        },
                        model: {
                          value: _vm.description,
                          callback: function($$v) {
                            _vm.description = $$v
                          },
                          expression: "description"
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
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", small: "", color: "success" },
                      on: { click: _vm.pushDescription }
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
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "pa-3", attrs: { flat: "" } },
        [
          _c("v-card-text", { staticClass: "subheading font-weight-medium" }, [
            _vm._v("\n            Keywords\n        ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm._l(_vm.keywords, function(val, i) {
                return [
                  _c(
                    "v-card-actions",
                    { key: i, staticClass: "pa-0" },
                    [
                      _c("span", { staticStyle: { "font-size": "6px" } }, [
                        _c("i", { staticClass: "fas fa-circle" })
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "py-0 subheading" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(val) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { flat: "", icon: "", color: "pink" } },
                        [
                          _c(
                            "v-icon",
                            {
                              on: {
                                click: function($event) {
                                  _vm.deleteKeyword(i)
                                }
                              }
                            },
                            [_vm._v("far fa-trash-alt")]
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
          ),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "pb-2",
            attrs: {
              "hide-details": "",
              label: "Keyword",
              box: "",
              color: "orange darken-2",
              "prepend-icon": "fas fa-circle"
            },
            on: {
              keyup: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.pushKeyword($event)
              }
            },
            model: {
              value: _vm.keywordText,
              callback: function($$v) {
                _vm.keywordText = $$v
              },
              expression: "keywordText"
            }
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _vm.keywords.length <= 6
                ? _c(
                    "v-btn",
                    {
                      attrs: { outline: "", small: "", color: "success" },
                      on: { click: _vm.pushKeyword }
                    },
                    [_vm._v("Add")]
                  )
                : _c(
                    "div",
                    {
                      staticClass: "subheading",
                      staticStyle: { color: "red" }
                    },
                    [_vm._v("\n                7 Keywords Max!\n            ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-76e0ebf1", module.exports)
  }
}

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2ecd017c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e4955cd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./amt.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e4955cd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./amt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 160:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    _veeValidate: {
        validator: "new"
    },
    components: {},
    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('discount', function (data) {
            return _this.discountField = data;
        });
        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('priceOrcontactPrice', function (data) {
            console.log(data);
            return _this.radios = data;
        });
    },

    props: ['prpAmount', 'prpDiscount', 'prpOffers', 'prpPreviousPricet'],
    data: function data() {
        return {
            previousPrice: this.prpPreviousPricet ? this.prpPreviousPricet : '',
            amount: this.prpAmount ? this.prpAmount : '',
            discount: this.prpDiscount ? this.prpDiscount : '',
            discountField: 1,
            isdiscount: false,

            propertyCategory: ['House', 'banglow', 'Farmhouse', 'Hall', 'Party Plot', 'Apartment', 'Shop', 'Plot', 'waadi'],
            selectedProperty: '',

            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rent: '',

            wholesaleArr: ['Unit', 'Box', 'Pc'],
            wholesale: '',

            offers: this.prpOffers ? this.prpOffers : [],
            offer: '',

            per: this.propPer ? this.propPer : '',

            radios: '1',
            dictionary: {
                attributes: {
                    email: "E-mail Address"
                    // custom attributes
                },
                custom: {
                    amount: {
                        required: function required() {
                            return "Amount can not be empty";
                        },
                        regex: "Amount must be numeric"
                        // custom messages
                    },
                    country: {
                        required: "Country field is required"
                    },
                    contact_email: {}
                }
            }

        };
    },

    methods: {
        submit: function submit() {

            this.$validator.validateAll().then(function (result) {
                if (!result) {
                    // do stuff if not valid.
                    return console.log('not validate in Registration Form Component');
                }
            });
        },
        pushOffer: function pushOffer() {

            if (this.offer !== '') {
                this.offers.push(this.offer);

                this.offer = '';
            } else {
                alert('highlight field can\'t be left empty ');
            }
            return;
            console.log(this.offer);
        },
        deleteOffer: function deleteOffer(index) {

            var a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.offers.splice(index, 1);
            }
            return;
        }
    },
    watch: {
        amount: function amount() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (!result) {
                    // do stuff if not valid.

                    // this.$emit('errorArr', this.amount);

                    // console.log(this.$validator);

                    _this2.$emit('amount', null);

                    // console.log(this.$validator.errors.items);
                    return;
                }

                _this2.$emit('amount', _this2.amount);
            });
        },
        discount: function discount() {

            this.$emit('discount', this.discount);
        },

        offers: function offers() {

            this.$emit('offers', this.offers);
        },
        previousPrice: function previousPrice() {
            this.$emit('previousPrice', this.previousPrice);
        },
        per: function per() {
            this.$emit('per', this.per);
        }
    }
});

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "", lg12: "" } },
    [
      _c("v-card", { attrs: { flat: "" } }, [
        _vm.radios == "1"
          ? _c(
              "div",
              [
                _c(
                  "v-layout",
                  { attrs: { wrap: "", "justify-space-around": "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs10: "", lg5: "" } },
                      [
                        _c(
                          "v-card-text",
                          { staticClass: "subheading font-weight-medium" },
                          [
                            _vm._v(
                              "\n                        Price Details\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card",
                          { attrs: { flat: "" } },
                          [
                            _c("v-text-field", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: true,
                                    regex: /^\d{1,8}(?:\.\d{1,4})?$/
                                  },
                                  expression:
                                    "{required: true, regex: /^\\d{1,8}(?:\\.\\d{1,4})?$/}"
                                }
                              ],
                              attrs: {
                                box: "",
                                label: "Enter Amount",
                                "error-messages": _vm.errors.collect("amount"),
                                "data-vv-name": "amount",
                                "prepend-icon": "fas fa-rupee-sign",
                                color: "orange darken-2"
                              },
                              model: {
                                value: _vm.amount,
                                callback: function($$v) {
                                  _vm.amount =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "amount"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              {
                                attrs: { wrap: "", "justify-space-around": "" }
                              },
                              [
                                _vm.discountField == 1
                                  ? _c(
                                      "v-flex",
                                      { attrs: { xs11: "", lg5: "" } },
                                      [
                                        _c("v-text-field", {
                                          staticClass: "discountInput",
                                          attrs: {
                                            box: "",
                                            label: "Discount",
                                            color: "orange darken-2",
                                            "prepend-icon": "fas fa-percent",
                                            type: "number"
                                          },
                                          model: {
                                            value: _vm.discount,
                                            callback: function($$v) {
                                              _vm.discount = $$v
                                            },
                                            expression: "discount"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm.discountField == 2
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg7: "" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.rentArr,
                                              box: "",
                                              label: "Rent per",
                                              color: "orange darken-2",
                                              "prepend-icon": "fas fa-slash"
                                            },
                                            model: {
                                              value: _vm.per,
                                              callback: function($$v) {
                                                _vm.per = $$v
                                              },
                                              expression: "per"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _c(
                                        "v-flex",
                                        { attrs: { xs12: "", lg5: "" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.wholesaleArr,
                                              box: "",
                                              label: "per",
                                              color: "orange darken-2",
                                              "prepend-icon": "fas fa-slash"
                                            },
                                            model: {
                                              value: _vm.per,
                                              callback: function($$v) {
                                                _vm.per = $$v
                                              },
                                              expression: "per"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs11: "", lg5: "" } },
                                  [
                                    _vm.discountField != 2
                                      ? _c("v-text-field", {
                                          attrs: {
                                            box: "",
                                            label: "Previous Price If Any",
                                            title: "Previous Price If Any",
                                            color: "orange darken-2"
                                          },
                                          model: {
                                            value: _vm.previousPrice,
                                            callback: function($$v) {
                                              _vm.previousPrice = $$v
                                            },
                                            expression: "previousPrice"
                                          }
                                        })
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
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs10: "", lg5: "" } },
                      [
                        _c(
                          "v-card-text",
                          { staticClass: "subheading font-weight-medium" },
                          [
                            _vm._v(
                              "\n                        Offers\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.offers, function(val, i) {
                          return [
                            _c(
                              "v-card-actions",
                              { key: i, staticClass: "pa-0" },
                              [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-size": "14px",
                                      color: "#ef6c3c"
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-tag" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  { staticClass: "py-0 subheading" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(val) +
                                        "\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { flat: "", icon: "", color: "pink" }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.deleteOffer(i)
                                          }
                                        }
                                      },
                                      [_vm._v("close")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs12: "" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                box: "",
                                label: "Offer",
                                color: "orange darken-2",
                                "prepend-icon": "fas fa-tag"
                              },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !("button" in $event) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.pushOffer($event)
                                }
                              },
                              model: {
                                value: _vm.offer,
                                callback: function($$v) {
                                  _vm.offer = $$v
                                },
                                expression: "offer"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  outline: "",
                                  small: "",
                                  color: "success"
                                },
                                on: { click: _vm.pushOffer }
                              },
                              [_vm._v("Add More")]
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
          : _vm._e()
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-7e4955cd", module.exports)
  }
}

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(171)
/* template */
var __vue_template__ = __webpack_require__(172)
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
Component.options.__file = "resources/js/components/PriceOrContactPrice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-739f1b9a", Component.options)
  } else {
    hotAPI.reload("data-v-739f1b9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 171:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['propShowPriceOrNot'],
    data: function data() {
        return {
            radios: this.propShowPriceOrNot ? this.propShowPriceOrNot : '1'
        };
    },

    watch: {
        radios: function radios() {
            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('priceOrcontactPrice', this.radios);
            this.$emit('radio', this.radios);
        }
    }
});

/***/ }),

/***/ 172:
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
          _c("v-card-text", { staticClass: "subheading font-weight-medium" }, [
            _vm._v("\n                      Amount Block\n                 ")
          ]),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { "two-line": "", subheader: "" } },
            [
              _c(
                "v-radio-group",
                {
                  attrs: { mandatory: true, row: "" },
                  model: {
                    value: _vm.radios,
                    callback: function($$v) {
                      _vm.radios = $$v
                    },
                    expression: "radios"
                  }
                },
                [
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-radio", {
                            attrs: { value: "1", color: "orange lighten-1" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.radios = "1"
                            }
                          }
                        },
                        [_c("v-list-tile-title", [_vm._v("Price")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-radio", {
                            attrs: { value: "2", color: "orange lighten-1" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.radios = "2"
                            }
                          }
                        },
                        [
                          _c("v-list-tile-title", [
                            _vm._v("Contact For Price Details")
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
    require("vue-hot-reload-api")      .rerender("data-v-739f1b9a", module.exports)
  }
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("9ae1d5a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a2f6344\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PropertyForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a2f6344\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PropertyForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-4a2f6344] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ImagesComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amt__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__amt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ttl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RegionComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RegionComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RegionComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        ImagesComp: __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default.a,
        AmountCompo: __WEBPACK_IMPORTED_MODULE_4__amt___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_5__ttl___default.a,
        Region: __WEBPACK_IMPORTED_MODULE_6__RegionComponent___default.a,
        PriceOrContactPrice: __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice___default.a
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    props: ['data'],
    data: function data() {
        var _ref;

        return _ref = {
            mainImg: __webpack_require__(5),
            sellRent: '0',
            showPriceOrNot: '1',
            amount: null

        }, _defineProperty(_ref, 'mainImg', null), _defineProperty(_ref, 'imgArr', null), _defineProperty(_ref, 'title', null), _defineProperty(_ref, 'slug', null), _defineProperty(_ref, 'highlights', null), _defineProperty(_ref, 'descriptions', null), _defineProperty(_ref, 'keywords', null), _defineProperty(_ref, 'fullAddress', null), _defineProperty(_ref, 'country', null), _defineProperty(_ref, 'state', null), _defineProperty(_ref, 'city', null), _defineProperty(_ref, 'area', null), _defineProperty(_ref, 'offers', []), _defineProperty(_ref, 'offer', ''), _defineProperty(_ref, 'addressNotShow', false), _defineProperty(_ref, 'propertyCategory', [{
            id: 1,
            name: 'Apartment'
        }, {
            id: 2,
            name: 'Bungalow'
        }, {
            id: 3,
            name: 'Farmhouse'
        }, {
            id: 4,
            name: 'Hall'
        }, {
            id: 5,
            name: 'House'
        }, {
            id: 6,
            name: 'Party Plot'
        }, {
            id: 7,
            name: 'Plot'
        }, {
            id: 8,
            name: 'Shop'
        }, {
            id: 9,
            name: 'Waadi'
        }]), _defineProperty(_ref, 'category', null), _defineProperty(_ref, 'rentArr', ['Hour', 'Day', 'Week', 'Month', 'Year']), _defineProperty(_ref, 'rentPer', ''), _ref;
    },


    watch: {
        price: function price() {
            if (this.showPriceOrNot == 2) {
                this.rentPer = null;
                this.amount = null;
                this.offers = [];
            }
            console.log(this.showPriceOrNot);
        },
        addressNotShow: function addressNotShow() {
            if (this.addressNotShow == true) {
                this.fullAddress = '';
            }
            console.log(this.addressNotShow);
        },
        country: function country() {
            console.log(this.country);
        }
    },

    methods: {
        submit: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var form, i, _i, _i2, _i3, str2, _i4, strId, submit;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.productFormCategoryValidateHere();

                            case 2:
                                _context.next = 4;
                                return this.titleBlockValidateHere();

                            case 4:
                                _context.next = 6;
                                return this.searviceFormAmountValidateHere();

                            case 6:
                                _context.next = 8;
                                return this.propertyRentValidateHere();

                            case 8:
                                _context.next = 10;
                                return this.propertyFullAddressValidateHere();

                            case 10:
                                _context.next = 12;
                                return this.propertyRegionValidateHere();

                            case 12:
                                _context.next = 14;
                                return this.chechForTheErrors();

                            case 14:
                                if (this.errorArrPass) {
                                    _context.next = 16;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 16:
                                form = new FormData();

                                /* --- SELL RENT --- */

                                form.append('sellRent', this.sellRent);

                                if (this.rentPer != null) {

                                    form.append('rentPer', this.rentPer);
                                }

                                /* --- singel image --- */

                                form.append('image', this.mainImg);

                                /* --- multiple images --- */

                                if (this.imgArr != null) {

                                    for (i = 0; i < this.imgArr.length; i++) {

                                        form.append('imgs[]', this.imgArr[i]);
                                    }
                                }

                                /* --- Categories --- */

                                form.append('propertyCategory', this.category.id);

                                /* --- highlights --- */

                                if (this.highlights != null) {

                                    for (_i = 0; _i < this.highlights.length; _i++) {

                                        form.append('highlights[]', this.highlights[_i]);
                                    }
                                }

                                /* --- descriptions --- */

                                if (this.descriptions != null) {

                                    for (_i2 = 0; _i2 < this.descriptions.length; _i2++) {

                                        form.append('descriptions[]', JSON.stringify(this.descriptions[_i2]));
                                    }
                                }

                                /* --- keywords --- */

                                if (this.keywords != null) {

                                    for (_i3 = 0; _i3 < this.keywords.length; _i3++) {

                                        form.append('keywords[]', this.keywords[_i3]);
                                    }
                                }

                                form.append('title', this.title);

                                form.append('slug', this.slug);

                                if (this.amount != null) {
                                    str2 = this.amount.replace(/\,/g, "");


                                    form.append('amount', str2);
                                }

                                /* --- offers --- */

                                if (this.offers != []) {

                                    for (_i4 = 0; _i4 < this.offers.length; _i4++) {

                                        form.append('offers[]', this.offers[_i4]);
                                    }
                                }

                                /* --- region --- */

                                if (this.fullAddress != '') {

                                    form.append('fullAddress', this.fullAddress);
                                }
                                form.append('country_id', this.country);
                                form.append('state_id', this.state);
                                form.append('city_id', this.city);

                                if (this.area != null) {

                                    form.append('area_id', this.area);
                                }

                                strId = this.$route.query.str_id;


                                form.append('str_id', strId);

                                submit = {
                                    str_id: strId,
                                    imgs: this.imgArr,
                                    img: this.mainImg,

                                    amount: this.amount,

                                    sellRent: this.sellRent,
                                    category: this.category.id,

                                    title: this.title,
                                    slug: this.slug,
                                    highlights: this.highlights,
                                    descriptions: this.descriptions,
                                    keywords: this.keywords,

                                    fullAddress: this.fullAddress,
                                    country: this.country,
                                    state: this.state,
                                    city: this.city,
                                    area: this.area

                                    //let submit = form;

                                };
                                console.log(submit);
                                //return;


                                axios.post('/properties', form).then(function (res) {
                                    console.log(res);
                                    if (res) {}
                                }).catch(function (err) {
                                    console.log(err.response);
                                });
                                return _context.abrupt('return');

                            case 40:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function submit() {
                return _ref2.apply(this, arguments);
            }

            return submit;
        }(),
        edit: function edit(index, item) {
            if (!this.editing) {
                this.editing = item;
                this.index = index;
            } else {
                this.editing = null;
                this.index = -1;
            }
        },
        filter: function filter(item, queryText, itemText) {
            if (item.header) return false;

            var hasValue = function hasValue(val) {
                return val != null ? val : '';
            };

            var text = hasValue(itemText);
            var query = hasValue(queryText);

            return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
        },
        pushOffer: function pushOffer() {

            if (this.offer !== '') {
                this.offers.push(this.offer);

                this.offer = '';
            } else {
                alert('highlight field can\'t be left empty ');
            }
            return;
        },
        deleteOffer: function deleteOffer(index) {

            var a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.offers.splice(index, 1);
            }
            return;
        },
        cancel: function cancel() {

            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "pa-3 mx-auto width1400" },
    [
      _c(
        "v-card",
        {
          staticClass: "background-shadow mb-3 pa-3 text-xs-center",
          attrs: { flat: "" }
        },
        [
          _c("div", { staticClass: "headline" }, [
            _vm._v("Property Upload Form")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-space-around": "" } },
        [
          _c("v-flex", { attrs: { xs12: "", sm5: "", md5: "", lg4: "" } }, [
            _c(
              "div",
              { staticClass: "sticky" },
              [
                _c("ImagesComp", {
                  on: {
                    mainImg: function($event) {
                      _vm.mainImg = $event
                    },
                    imgArr: function($event) {
                      _vm.imgArr = $event
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            {
              staticClass: "background-shadow",
              attrs: { xs12: "", sm6: "", md6: "", lg7: "" }
            },
            [
              _c(
                "v-card",
                { staticClass: "pa-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-list",
                    { attrs: { "two-line": "", subheader: "" } },
                    [
                      _c(
                        "v-radio-group",
                        {
                          attrs: { mandatory: true, row: "" },
                          model: {
                            value: _vm.sellRent,
                            callback: function($$v) {
                              _vm.sellRent = $$v
                            },
                            expression: "sellRent"
                          }
                        },
                        [
                          _c(
                            "v-list-tile",
                            { on: { click: function($event) {} } },
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      value: "0",
                                      color: "orange lighten-1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.sellRent = "0"
                                    }
                                  }
                                },
                                [_c("v-list-tile-title", [_vm._v("Sell")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            { on: { click: function($event) {} } },
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      value: "1",
                                      color: "orange lighten-1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.sellRent = "1"
                                    }
                                  }
                                },
                                [_c("v-list-tile-title", [_vm._v("Rent")])],
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
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [_vm._v("\n                    Category\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      box: "",
                      items: _vm.propertyCategory,
                      size: "4",
                      label: "Category",
                      color: "orange darken-2",
                      "return-object": "",
                      "item-text": "name",
                      "item-value": "id"
                    },
                    model: {
                      value: _vm.category,
                      callback: function($$v) {
                        _vm.category = $$v
                      },
                      expression: "category"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("TitleComp", {
                on: {
                  title: function($event) {
                    _vm.title = $event
                  },
                  slug: function($event) {
                    _vm.slug = $event
                  },
                  highlights: function($event) {
                    _vm.highlights = $event
                  },
                  descriptions: function($event) {
                    _vm.descriptions = $event
                  },
                  keywords: function($event) {
                    _vm.keywords = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("PriceOrContactPrice", {
                on: {
                  radio: function($event) {
                    _vm.showPriceOrNot = $event
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "pb-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "", "justify-space-between": "" } },
                    [
                      _vm.showPriceOrNot == 1
                        ? _c(
                            "v-flex",
                            {
                              staticClass: "px-3",
                              attrs: { xs10: "", lg6: "" }
                            },
                            [
                              _c(
                                "v-card-text",
                                {
                                  staticClass: "subheading font-weight-medium"
                                },
                                [
                                  _vm._v(
                                    "\n                            Price Details\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-text-field", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: {
                                          required: true,
                                          regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/
                                        },
                                        expression:
                                          "{required: true, regex: /^(?=[^A-Za-z\\s\\-]+$).*[0-9].*$/}"
                                      }
                                    ],
                                    attrs: {
                                      box: "",
                                      label: "Enter Amount",
                                      "error-messages": _vm.errors.collect(
                                        "amount"
                                      ),
                                      "data-vv-name": "amount",
                                      "prepend-icon": "fas fa-rupee-sign",
                                      color: "orange darken-2"
                                    },
                                    model: {
                                      value: _vm.amount,
                                      callback: function($$v) {
                                        _vm.amount = $$v
                                      },
                                      expression: "amount"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    {
                                      attrs: {
                                        wrap: "",
                                        "justify-space-around": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.sellRent == 1,
                                              expression: "sellRent == 1"
                                            }
                                          ],
                                          attrs: { xs11: "", lg6: "" }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.rentArr,
                                              box: "",
                                              label: "Rent per",
                                              color: "orange darken-2",
                                              "prepend-icon": "fas fa-slash"
                                            },
                                            model: {
                                              value: _vm.rentPer,
                                              callback: function($$v) {
                                                _vm.rentPer = $$v
                                              },
                                              expression: "rentPer"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-flex", {
                                        attrs: { xs12: "", lg4: "" }
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "px-3", attrs: { xs10: "", lg6: "" } },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "subheading font-weight-medium" },
                            [
                              _vm._v(
                                "\n                            Offers\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.offers, function(val, i) {
                            return [
                              _c(
                                "v-card-actions",
                                { key: i, staticClass: "pa-0" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "14px",
                                        color: "#ef6c3c"
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-tag" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    { staticClass: "py-0 subheading" },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(val) +
                                          "\n                                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        flat: "",
                                        icon: "",
                                        color: "pink"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.deleteOffer(i)
                                            }
                                          }
                                        },
                                        [_vm._v("close")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Offer",
                                  color: "orange darken-2",
                                  "prepend-icon": "fas fa-tag"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.pushOffer($event)
                                  }
                                },
                                model: {
                                  value: _vm.offer,
                                  callback: function($$v) {
                                    _vm.offer = $$v
                                  },
                                  expression: "offer"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    outline: "",
                                    small: "",
                                    color: "success"
                                  },
                                  on: { click: _vm.pushOffer }
                                },
                                [_vm._v("Add More")]
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
              _c("hr"),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg12: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "px-2 pb-5", attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                        Address of Property\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticClass: "px-3 pb-3",
                          attrs: { xs12: "", lg12: "" }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Full Address",
                              box: "",
                              "hide-details": "",
                              color: "orange darken-2",
                              "prepend-icon": "fas fa-map-marker-alt",
                              disabled: _vm.addressNotShow == true
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
                          _c(
                            "v-checkbox",
                            {
                              attrs: {
                                color: "orange darken-2",
                                "hide-details": ""
                              },
                              model: {
                                value: _vm.addressNotShow,
                                callback: function($$v) {
                                  _vm.addressNotShow = $$v
                                },
                                expression: "addressNotShow"
                              }
                            },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "label" }, slot: "label" },
                                [
                                  _vm._v(
                                    "\n                            Don't Want to Show Full Address\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                        Region of Property\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticClass: "px-3 pb-3",
                          attrs: { xs12: "", lg12: "" }
                        },
                        [
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
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "", lg12: "" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3 mt-3" },
            [
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        outline: "",
                        color: "success",
                        dark: ""
                      },
                      on: { click: _vm.submit }
                    },
                    [_vm._v("upload")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        outline: "",
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
    require("vue-hot-reload-api")      .rerender("data-v-4a2f6344", module.exports)
  }
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(193)
/* template */
var __vue_template__ = __webpack_require__(194)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a2f6344"
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
Component.options.__file = "resources/js/components/forms/PropertyForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a2f6344", Component.options)
  } else {
    hotAPI.reload("data-v-4a2f6344", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});