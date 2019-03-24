webpackJsonp([3,6,7,9,10,11],{

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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(166)
/* template */
var __vue_template__ = __webpack_require__(167)
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
Component.options.__file = "resources/js/components/BrandComp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1605725b", Component.options)
  } else {
    hotAPI.reload("data-v-1605725b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(169)
/* template */
var __vue_template__ = __webpack_require__(170)
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
Component.options.__file = "resources/js/components/RetailRentEtc.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21469cbd", Component.options)
  } else {
    hotAPI.reload("data-v-21469cbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(164)
/* template */
var __vue_template__ = __webpack_require__(165)
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
Component.options.__file = "resources/js/components/Categories/CategoryComp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08affdc5", Component.options)
  } else {
    hotAPI.reload("data-v-08affdc5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 164:
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
    mounted: function mounted() {
        this.getParentCat();
    },

    props: ['propCat'],
    data: function data() {
        return {

            selectedCat: '',

            newCat: '',

            slug: '',

            addedCat: {},

            alert: false,

            alertCompText: '',

            children: [],
            propC: [],

            ids: []

        };
    },

    methods: {

        /* --------------- */
        /* Parent CATEGORY  */
        /* ------------- */

        getParentCat: function getParentCat() {
            var _this = this;

            axios.get('/categories').then(function (res) {
                console.log(res);

                //this.parentCat = res.data.cat

                var result = res.data.cat;

                _this.children = [];

                var newItem = {

                    child: '',
                    childArr1: result
                };

                _this.children.push(newItem);

                //console.log(this.children)

                //this.children[0].childArr1 = res.data.cat
                _this.parentCat = res.data.allCat;
            }).catch(function (err) {
                console.log(err.response);
            });
        },


        /* --------------- */
        /* CALL CHILD CATEGORY  */
        /* ------------- */

        callChild: function callChild(idx, e) {
            var _this2 = this;

            this.children.splice(idx + 1);

            this.ids.splice(idx);

            var prntId = this.children[idx].child.id;
            //let prntId = JSON.parse(JSON.stringify(this.children[idx].child.id));

            //this.selectedCat = JSON.parse(JSON.stringify(this.children[idx].child));
            this.selectedCat = this.children[idx].child;

            //console.log(JSON.parse(JSON.stringify(this.children[idx].child)));

            this.ids.push(JSON.parse(JSON.stringify(this.children[idx].child.id)));
            //console.log(this.children[idx].child);
            //console.log(this.ids);

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

                    _this2.children.push(newItem);

                    //console.log(this.children)
                }
            }).catch(function (err) {
                console.log(err.response);
            });
        }
    },
    watch: {
        ids: function ids() {
            this.$emit('category', JSON.parse(JSON.stringify(this.ids)));
        }
    }
});

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-flex",
        { attrs: { xs12: "", lg12: "" } },
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
                    "\n                        Categories\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "v-container",
                { attrs: { "grid-list-md": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "" } },
                    _vm._l(_vm.children, function(chldval, i) {
                      return _c(
                        "v-flex",
                        { key: i, attrs: { xs12: "", lg4: "" } },
                        [
                          _c(
                            "div",
                            [
                              _c("v-autocomplete", {
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
                                    _vm.callChild(i, chldval.child)
                                  }
                                },
                                model: {
                                  value: chldval.child,
                                  callback: function($$v) {
                                    _vm.$set(chldval, "child", $$v)
                                  },
                                  expression: "chldval.child"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    })
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
    require("vue-hot-reload-api")      .rerender("data-v-08affdc5", module.exports)
  }
}

/***/ }),

/***/ 166:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['propBrand'],
    data: function data() {
        return {
            brand: this.propBrand ? this.propBrand : '',
            brandArr: [],
            newBrand: '',
            newBrandDialog: false,
            newBrandSuccess: true,
            isLoading: false
        };
    },

    methods: {
        getBrands: function getBrands() {
            var _this = this;

            if (this.brandArr.length > 0) return;

            this.isLoading = true;

            axios.get('/brands').then(function (response) {
                _this.brandArr = response.data;
                console.log(response);
            }).catch(function (errors) {

                console.log(errors);
            }).finally(function () {
                return _this.isLoading = false;
            });
        },
        addBrand: function addBrand() {
            var _this2 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', { name: this.newBrand }).then(function (response) {
                _this2.newBrand = response.data.success;
                _this2.newBrandSuccess = false;
                console.log(response);
            }).catch(function (errors) {

                console.log(errors);
            });
        },
        openBrandDialog: function openBrandDialog() {

            this.brand = '';
            this.newBrandDialog = true;
        },
        cancelNewBrand: function cancelNewBrand() {

            this.newBrand = '';
            this.newBrandDialog = false;
            this.brandArr = [];
            this.newBrandSuccess = true;
        }
    },
    watch: {
        brand: function brand() {

            this.$emit('brand', this.brand);
        }
    }
});

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "pa-3 ", attrs: { xs12: "", lg12: "", flat: "" } },
    [
      _c("v-card-text", { staticClass: "subheading font-weight-medium" }, [
        _vm._v("\n        Brand\n    ")
      ]),
      _vm._v(" "),
      _c(
        "v-combobox",
        {
          attrs: {
            items: _vm.brandArr,
            label: "Enter Brand Name",
            box: "",
            "item-text": "name",
            "item-value": "id",
            color: "orange darken-2",
            "hide-details": "",
            "prepend-icon": "fas fa-industry",
            loading: _vm.isLoading
          },
          on: { focus: _vm.getBrands },
          model: {
            value: _vm.brand,
            callback: function($$v) {
              _vm.brand = $$v
            },
            expression: "brand"
          }
        },
        [_c("template", { slot: "no-data" })],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "subheading pa-2" }, [
        _vm._v("Didn't find your Brand?"),
        _c(
          "span",
          { staticClass: "forSpanClick", on: { click: _vm.openBrandDialog } },
          [_vm._v(" click\n            here")]
        ),
        _vm._v(" to Add")
      ]),
      _vm._v(" "),
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
            value: _vm.newBrandDialog,
            callback: function($$v) {
              _vm.newBrandDialog = $$v
            },
            expression: "newBrandDialog"
          }
        },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", lg12: "" } },
            [
              _vm.newBrandSuccess
                ? _c(
                    "v-card",
                    { staticClass: "pa-4" },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                    Add New Brand\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: { box: "", label: "Enter New Brand" },
                        model: {
                          value: _vm.newBrand,
                          callback: function($$v) {
                            _vm.newBrand = $$v
                          },
                          expression: "newBrand"
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
                              on: { click: _vm.addBrand }
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { outline: "", color: "error" },
                              on: { click: _vm.cancelNewBrand }
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
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.newBrand) +
                              "\n                "
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
                              on: { click: _vm.cancelNewBrand }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1605725b", module.exports)
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

/***/ 169:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$on('retailRent', function (data) {
            if (data) {

                _this.radios = data.toString();
            }
        });
    },

    props: ['propWantto'],
    data: function data() {
        return {
            radios: '1'
        };
    },

    methods: {},
    watch: {
        radios: function radios() {
            __WEBPACK_IMPORTED_MODULE_0__app_js__["eventBus"].$emit('discount', this.radios);
            this.$emit('radios', this.radios);
            console.log(this.radios);
        }
    }
});

/***/ }),

/***/ 170:
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
                        [_c("v-list-tile-title", [_vm._v("Retail")])],
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
                        [_c("v-list-tile-title", [_vm._v("Rent a Product")])],
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
                            attrs: { value: "3", color: "orange lighten-1" }
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
                              _vm.radios = "3"
                            }
                          }
                        },
                        [_c("v-list-tile-title", [_vm._v("wholesale")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-21469cbd", module.exports)
  }
}

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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("9218f636", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b39c7d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b39c7d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-7b39c7d0] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ImagesComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ttl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ttl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ttl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amt__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__amt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RetailRentEtc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Categories_CategoryComp__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Categories_CategoryComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Categories_CategoryComp__);


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









/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ImagesComp: __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_4__ttl___default.a,
        AmountComp: __WEBPACK_IMPORTED_MODULE_5__amt___default.a,
        RetailRentEtc: __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc___default.a,
        categoryComp: __WEBPACK_IMPORTED_MODULE_7__Categories_CategoryComp___default.a
    },
    created: function created() {

        // eventBus.$on('errorArrPassReply', (data) => {

        //     this.errorArrPass = data;
        // });

    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    data: function data() {
        return {

            edit: false,

            loading: false,

            modelName: null,

            /* ---------------------------- */
            /* ERROR DIALOG */
            /* ---------------------------- */

            errorDialog: false,

            errorArr: [],

            // errorArrPass: false,

            /* ---------------------------- */
            /* RETAIL, RENT, WHOLSALE BLOCK */
            /* ---------------------------- */

            want_to: '1',

            /* -------------- */
            /* IMAGE BLOCK */
            /* -------------- */

            mainImg: null,
            imgArr: null,

            /* -------------- */
            /* CATEGORY new */
            /* -------------- */

            categoryDialog: false,

            category: null,

            categoryArr: [],

            /* -------------- */
            /* CATEGORY BLOCK */
            /* -------------- */

            valuesCat: [],
            cat: '',
            subCat: '',

            /* ----------- */
            /* BRAND BLOCK */
            /* ----------- */

            brand: '',
            brandArr: [],
            newBrand: '',
            newBrandDialog: false,
            newBrandSuccess: true,

            /* ----------- */
            /* TITLE BLOCK */
            /* ----------- */

            title: '',
            slug: '',
            highlights: null,
            descriptions: null,
            keywords: null,

            /* ----------- */
            /* PRICE BLOCK */
            /* ----------- */

            amount: null,
            discount: null,
            offers: null,
            previousPrice: '',
            per: null
        };
    },

    methods: {
        submit: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var form, i, _i, _i2, _i3, _i4, str2, strId, submit;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.titleBlockValidateHere();

                            case 2:
                                _context.next = 4;
                                return this.productFormValidatHere();

                            case 4:
                                _context.next = 6;
                                return this.productFormCategoryValidateHere();

                            case 6:
                                _context.next = 8;
                                return this.chechForTheErrors();

                            case 8:
                                if (this.errorArrPass) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 10:
                                form = new FormData();


                                form.append('want_to', this.want_to);

                                /* --- singel image --- */

                                form.append('image', this.mainImg);

                                /* --- multiple images --- */

                                if (this.imgArr != null) {

                                    for (i = 0; i < this.imgArr.length; i++) {

                                        form.append('imgs[]', this.imgArr[i]);
                                    }
                                }

                                /* --- Category --- */

                                if (this.category != null) {

                                    form.append('category', this.category);

                                    // for (let i = 0; i < this.category.length; i++) {

                                    //     form.append('category[]', this.category[i]);

                                    // }
                                }

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

                                /* --- product model name --- */

                                if (this.modelName != null) {

                                    form.append('modelName', this.modelName);
                                }

                                /* --- offers --- */

                                if (this.offers != null) {

                                    for (_i4 = 0; _i4 < this.offers.length; _i4++) {

                                        form.append('offers[]', this.offers[_i4]);
                                    }
                                }

                                // form.append('root', this.rootCat.id);

                                // form.append('lvl_1', this.levelOneCat.id);

                                // form.append('lvl_2', this.levelTwoCat.id);

                                if (this.brand != null) {

                                    form.append('brand', this.brand.id);
                                }

                                form.append('title', this.title);

                                form.append('slug', this.slug);

                                /* ===   Price   === */

                                if (this.amount != null) {
                                    str2 = this.amount.toString().replace(/\,/g, "");


                                    form.append('amount', str2);
                                }

                                if (this.discount != null) {

                                    form.append('discount', this.discount);
                                }
                                if (this.previousPrice != null) {

                                    form.append('previous_price', this.previousPrice);
                                }
                                if (this.per != null) {

                                    form.append('per', this.per);
                                }

                                strId = this.$route.query.str_id;


                                form.append('str_id', strId);

                                form.append('shareable', 0);

                                submit = {
                                    want_to: this.want_to,

                                    category: this.category,

                                    brand: this.brand.id,

                                    title: this.title,
                                    slug: this.slug,
                                    highlights: this.highlights,
                                    descriptions: this.descriptions,
                                    keywords: this.keywords,

                                    amount: this.amount,
                                    discount: this.discount,
                                    offers: this.offers,
                                    wholesale: this.wholesale,
                                    previousPrice: this.previousPrice,
                                    rent: this.rent

                                    //let submit = form;

                                };
                                console.log(submit);
                                //return;

                                axios.post('/products', form).then(function (res) {
                                    if (res) {}
                                    console.log(res);
                                }).catch(function (err) {
                                    console.log(err.response);
                                });
                                return _context.abrupt('return');

                            case 34:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function submit() {
                return _ref.apply(this, arguments);
            }

            return submit;
        }(),
        getRootCat: function getRootCat() {
            var _this = this;

            axios.get('/rootcategories').then(function (response) {
                _this.rootArr = response.data;
                console.log(response.data);
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        addBrand: function addBrand() {
            var _this2 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', { name: this.newBrand }).then(function (response) {
                _this2.newBrand = response.data.success;
                _this2.newBrandSuccess = false;
                console.log(response);
            }).catch(function (errors) {

                console.log(errors);
            });
        },
        openBrandDialog: function openBrandDialog() {

            this.brand = '';
            this.newBrandDialog = true;
        },
        cancelNewBrand: function cancelNewBrand() {

            this.newBrand = '';
            this.newBrandDialog = false;
            this.brandArr = [];
            this.newBrandSuccess = true;
        },
        getBrands: function getBrands() {
            var _this3 = this;

            if (this.brandArr.length == 0) {

                axios.get('/brands').then(function (response) {
                    _this3.brandArr = response.data;
                    console.log(response);
                }).catch(function (errors) {

                    console.log(errors.response);
                });
            }
        },
        cancel: function cancel() {

            this.$router.go(-1);
        },


        // ==========   Category   ==================
        // ==========================================

        selectCategory: function selectCategory() {
            var _this4 = this;

            this.loading = true;

            axios.get('/readymade').then(function (res) {
                console.log(res);
                if (res) {

                    _this4.categoryArr = res.data;

                    _this4.loading = false;
                }
            }).catch(function (err) {
                console.log(err.response);
            }).finally(this.loading = false);
        }
    },
    watch: {
        rootCat: function rootCat() {
            var _this5 = this;

            axios.get('/levelonecategories').then(function (response) {
                _this5.levelOneArr = response.data;
                console.log(response.data);
            }).catch(function (errors) {
                console.log(errors.response);
            });
        },
        levelOneCat: function levelOneCat() {
            var _this6 = this;

            axios.get('/leveltwocategories').then(function (response) {
                _this6.levelTwoArr = response.data;
                console.log(response.data);
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        radios: function radios() {
            __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('discount', this.radios);
            console.log(this.radios);
        },
        /* ---------------------------------------------- */
        mainImg: function mainImg() {
            console.log(this.mainImg);
        },
        imgArr: function imgArr() {
            console.log(this.imgArr);
        },
        /* ---------------------------------------------- */
        title: function title() {
            console.log(this.title);
        },
        slug: function slug() {
            console.log(this.slug);
        },
        highlights: function highlights() {
            console.log(this.highlights);
        },
        descriptions: function descriptions() {
            console.log(this.descriptions);
        },
        keywords: function keywords() {
            console.log(this.keywords);
        },
        /* ---------------------------------------------- */
        amount: function amount() {
            console.log(this.amount);
        },
        discount: function discount() {
            console.log(this.discount);
        },
        offers: function offers() {
            console.log(this.offers);
        },
        wholesale: function wholesale() {
            console.log(this.wholesale);
        },
        previousPrice: function previousPrice() {
            console.log(this.previousPrice);
        },
        per: function per() {
            console.log(this.per);
        },
        category: function category() {
            console.log(this.category);
        }
    }
});

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: " mx-auto width1400" },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "", "justify-space-around": "" } },
        [
          _c("v-flex", { attrs: { xs12: "", lg4: "" } }, [
            _c(
              "div",
              { staticClass: "sticky mb-3" },
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
            { staticClass: "background-shadow ", attrs: { xs12: "", lg7: "" } },
            [
              _c("RetailRentEtc", {
                on: {
                  radios: function($event) {
                    _vm.want_to = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg12: "" } },
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
                            "\n                            Select Category\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.categoryArr,
                          clearable: "",
                          "hide-no-data": "",
                          "hide-details": "",
                          "item-text": "cat_names",
                          "item-value": "id",
                          label: "Choose Category",
                          color: "orange darken-2",
                          light: "",
                          loading: _vm.loading,
                          box: ""
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.selectCategory($event)
                          }
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "pa-3 ",
                  attrs: { xs12: "", lg12: "", flat: "" }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                    Product Model Number\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          box: "",
                          label: "Enter Model Number or Name",
                          color: "orange darken-2",
                          "hide-details": "",
                          "prepend-icon": "fab fa-product-hunt"
                        },
                        model: {
                          value: _vm.modelName,
                          callback: function($$v) {
                            _vm.modelName = $$v
                          },
                          expression: "modelName"
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
                "v-card",
                {
                  staticClass: "pa-3 ",
                  attrs: { xs12: "", lg12: "", flat: "" }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [_vm._v("\n                      Brand\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-combobox", {
                    attrs: {
                      items: _vm.brandArr,
                      label: "Enter Brand Name",
                      box: "",
                      "item-text": "name",
                      "item-value": "id",
                      color: "orange darken-2",
                      "hide-details": ""
                    },
                    on: { focus: _vm.getBrands },
                    model: {
                      value: _vm.brand,
                      callback: function($$v) {
                        _vm.brand = $$v
                      },
                      expression: "brand"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "subheading pa-2" }, [
                    _vm._v("Didn't find your Brand?"),
                    _c(
                      "span",
                      {
                        staticClass: "forSpanClick",
                        on: { click: _vm.openBrandDialog }
                      },
                      [_vm._v(" click here")]
                    ),
                    _vm._v(" to Add")
                  ])
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
              _c("AmountComp", {
                on: {
                  amount: function($event) {
                    _vm.amount = $event
                  },
                  discount: function($event) {
                    _vm.discount = $event
                  },
                  offers: function($event) {
                    _vm.offers = $event
                  },
                  wholesale: function($event) {
                    _vm.wholesale = $event
                  },
                  previousPrice: function($event) {
                    _vm.previousPrice = $event
                  },
                  per: function($event) {
                    _vm.per = $event
                  }
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
      ),
      _vm._v(" "),
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
            value: _vm.newBrandDialog,
            callback: function($$v) {
              _vm.newBrandDialog = $$v
            },
            expression: "newBrandDialog"
          }
        },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", lg12: "" } },
            [
              _vm.newBrandSuccess
                ? _c(
                    "v-card",
                    { staticClass: "pa-4" },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                    Add New Brand\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: { box: "", label: "Enter New Brand" },
                        model: {
                          value: _vm.newBrand,
                          callback: function($$v) {
                            _vm.newBrand = $$v
                          },
                          expression: "newBrand"
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
                              on: { click: _vm.addBrand }
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { outline: "", color: "error" },
                              on: { click: _vm.cancelNewBrand }
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
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.newBrand) +
                              "\n                "
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
                              on: { click: _vm.cancelNewBrand }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b39c7d0", module.exports)
  }
}

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "/images/shop.svg?44b7dd1510259de7ef17b7380e510ebf";

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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("617b63a2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fdefde\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ServiceForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fdefde\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ServiceForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-02fdefde] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myErrorsValidatorMixin_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImagesComponent__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImagesComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ImagesComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ttl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__amt__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__amt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__amt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BrandComp__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BrandComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__BrandComp__);


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










/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__["a" /* selectSearchRoute */], __WEBPACK_IMPORTED_MODULE_3__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    components: {
        ImagesComp: __WEBPACK_IMPORTED_MODULE_4__ImagesComponent___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_5__ttl___default.a,
        AmountComp: __WEBPACK_IMPORTED_MODULE_6__amt___default.a,
        PriceOrContactPrice: __WEBPACK_IMPORTED_MODULE_7__PriceOrContactPrice___default.a,
        BrandComp: __WEBPACK_IMPORTED_MODULE_8__BrandComp___default.a
    },
    beforeCreate: function beforeCreate() {
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('discountfield', false);
    },
    created: function created() {},
    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    data: function data() {
        return {

            showPriceOrNot: '1',

            /* -------------- */
            /* -- CATEGORY -- */
            /* ------------ */
            categories: [],
            newService: '',
            newServiceDialog: false,
            newServiceSuccess: true,
            valuesCat: [],
            category: null,
            isLoading: false,

            /* -------------- */
            /* IMAGE BLOCK */
            /* -------------- */

            mainImg: null,
            imgArr: null,

            /* ----------- */
            /* TITLE BLOCK */
            /* ----------- */

            title: '',
            slug: '',
            highlights: null,
            descriptions: null,
            keywords: null,

            /* -------------- */
            /* -- AMOUNT -- */
            /* ------------ */
            amount: null,
            offer: '',
            offers: [],

            /* -------------- */
            /* -- Company -- */
            /* ------------ */
            brand: null,
            brandArr: [],

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
                    amount: {
                        required: "Amount field is required",

                        regex: 'Hint: "10.00"'
                    },
                    contact_email: {}
                }
            }
        };
    },

    methods: {
        submit: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var form, i, _i, _i2, _i3, _i4, str2, strId, submit;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.titleBlockValidateHere();

                            case 2:
                                _context.next = 4;
                                return this.searviceFormAmountValidateHere();

                            case 4:
                                _context.next = 6;
                                return this.serviceFormCategoryValidateHere();

                            case 6:
                                _context.next = 8;
                                return this.chechForTheErrors();

                            case 8:
                                if (this.errorArrPass) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 10:

                                //let submit = form;


                                form = new FormData();

                                /* --- singel image --- */

                                form.append('image', this.mainImg);

                                /* --- multiple images --- */

                                if (this.imgArr != null) {

                                    for (i = 0; i < this.imgArr.length; i++) {

                                        form.append('imgs[]', this.imgArr[i]);
                                    }
                                }

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

                                /* --- offers --- */

                                if (this.offers != null) {

                                    for (_i4 = 0; _i4 < this.offers.length; _i4++) {

                                        form.append('offers[]', this.offers[_i4]);
                                    }
                                }

                                form.append('showPriceOrNot', this.showPriceOrNot);

                                form.append('category', this.category.id);

                                //form.append('brand', this.brand.id);

                                form.append('title', this.title);

                                form.append('slug', this.slug);

                                if (this.amount != null) {
                                    str2 = this.amount.replace(/\,/g, "");


                                    form.append('amount', str2);
                                }

                                strId = this.$route.query.str_id;


                                form.append('str_id', strId);

                                submit = {

                                    showPriceOrNot: this.showPriceOrNot,

                                    //brand: this.brand.id,

                                    imgs: this.imgArr,
                                    img: this.mainImg,

                                    title: this.title,
                                    slug: this.slug,
                                    highlights: JSON.parse(JSON.stringify(this.highlights)),
                                    descriptions: JSON.parse(JSON.stringify(this.descriptions)),
                                    keywords: JSON.parse(JSON.stringify(this.keywords)),

                                    amount: this.amount,
                                    offers: JSON.parse(JSON.stringify(this.offers))

                                };


                                console.log(submit);

                                //return;


                                axios.post('/serviceandbusiness', form).then(function (res) {
                                    console.log(res);
                                }).catch(function (err) {
                                    console.log(err.response);
                                });
                                return _context.abrupt('return');

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function submit() {
                return _ref.apply(this, arguments);
            }

            return submit;
        }(),

        /* ---------------------------------------------------------------------------------------- */
        /*                                   -- CATEGORIES --                                         */
        /* -------------------------------------------------------------------------------------- */
        getCategories: function getCategories() {
            if (this.categories.length != 0) {
                return;
            } else {

                this.forceToGetCategories();
            }
        },
        forceToGetCategories: function forceToGetCategories() {
            var _this = this;

            this.isLoading = true;

            axios.get('/servicesandbusinessescategories').then(function (response) {
                _this.categories = response.data;
                console.log(response.data);
            }).catch(function (errors) {
                console.log(errors);
            }).finally(function () {
                return _this.isLoading = false;
            });
        },

        /* ---------------------------------------------------------------------------------------- */
        /*                                   -- OFFERS --                                         */
        /* -------------------------------------------------------------------------------------- */
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
        },
        addService: function addService() {
            var _this2 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            axios.post('/servicesandbusinessescategories', { name: this.newService }).then(function (response) {
                if (response) {

                    _this2.newService = response.data.success;
                    _this2.forceToGetCategories();
                    _this2.newServiceSuccess = false;
                    console.log(response);
                }
            }).catch(function (errors) {

                console.log(errors.response);
            });
        },
        openServiceDialog: function openServiceDialog() {

            this.Service = '';
            this.newServiceDialog = true;
        },
        cancelNewService: function cancelNewService() {

            this.newService = '';
            this.newServiceDialog = false;
            this.newServiceSuccess = true;
        },
        cancel: function cancel() {

            this.$router.go(-1);
        }
    },
    watch: {
        cat: function cat() {
            if (this.cat != null || this.cat != '') {

                console.log(this.cat.id);
            } else {
                return;
            }
        }
    }
});

/***/ }),

/***/ 198:
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
            _vm._v("Service / Business Upload Form")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-space-around": "" } },
        [
          _c("v-flex", { attrs: { xs12: "", lg4: "" } }, [
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
            { staticClass: "background-shadow", attrs: { xs12: "", lg7: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                    Select Service / Business\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-combobox", {
                    staticClass: "py-3",
                    attrs: {
                      items: _vm.categories,
                      dense: "",
                      box: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Service / Business Category",
                      "return-object": "",
                      color: "orange darken-2",
                      "prepend-icon": "fas fa-briefcase",
                      "no-data-text": "",
                      loading: _vm.isLoading
                    },
                    on: { focus: _vm.getCategories },
                    model: {
                      value: _vm.category,
                      callback: function($$v) {
                        _vm.category = $$v
                      },
                      expression: "category"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "subheading pa-2" }, [
                    _vm._v("Didn't find your Service / Business?"),
                    _c(
                      "span",
                      {
                        staticClass: "forSpanClick",
                        on: { click: _vm.openServiceDialog }
                      },
                      [_vm._v(" click\n                        here")]
                    ),
                    _vm._v(" to Add")
                  ]),
                  _vm._v(" "),
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
                        value: _vm.newServiceDialog,
                        callback: function($$v) {
                          _vm.newServiceDialog = $$v
                        },
                        expression: "newServiceDialog"
                      }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", lg12: "" } },
                        [
                          _vm.newServiceSuccess
                            ? _c(
                                "v-card",
                                { staticClass: "pa-4" },
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass:
                                        "subheading font-weight-medium"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Add New Service / Business\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      box: "",
                                      label: "Enter New Service / Business"
                                    },
                                    model: {
                                      value: _vm.newService,
                                      callback: function($$v) {
                                        _vm.newService = $$v
                                      },
                                      expression: "newService"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            outline: "",
                                            color: "success"
                                          },
                                          on: { click: _vm.addService }
                                        },
                                        [_vm._v("Add")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            outline: "",
                                            color: "error"
                                          },
                                          on: { click: _vm.cancelNewService }
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
                                      staticClass:
                                        "subheading font-weight-medium"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.newService) +
                                          "\n                            "
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
                                          attrs: {
                                            outline: "",
                                            color: "success"
                                          },
                                          on: { click: _vm.cancelNewService }
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
                      _vm.showPriceOrNot == "1"
                        ? _c(
                            "v-flex",
                            {
                              staticClass: "px-3",
                              attrs: { xs12: "", lg6: "" }
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
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "px-3", attrs: { xs12: "", lg6: "" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-02fdefde", module.exports)
  }
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1ef250ea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aca7691\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EducationForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aca7691\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EducationForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-2aca7691] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ImagesComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ttl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ttl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ttl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amt__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__amt__);


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








/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ImagesComp: __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_4__ttl___default.a,
        AmountComp: __WEBPACK_IMPORTED_MODULE_5__amt___default.a
    },
    created: function created() {},
    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    data: function data() {
        return {
            showPriceOrNot: '1',
            isLoading: false,

            /* ----------- */
            /* CATEGORY BLOCK */
            /* ----------- */
            catArr: [],
            category: null,

            /* ----------- */
            /* IMAGES BLOCK */
            /* ----------- */
            mainImg: null,
            imgArr: null,

            /* ----------- */
            /* TITLE BLOCK */
            /* ----------- */
            title: '',
            slug: '',
            highlights: null,
            descriptions: null,
            keywords: null,

            /* ----------- */
            /* FEES BLOCK */
            /* ----------- */
            fees: null,
            feesper: null,

            keyCat: ['School', 'Collage', 'Tution Classes', 'Computer Classes', 'Private Tutor', 'Music Classes', 'Classical Singing', 'Classical Dance'],
            feesArr: [{ id: 1, name: 'Year' }, { id: 2, name: 'Semester' }, { id: 3, name: 'Month' }],
            //feesArr: ['Year','semester', 'Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month', '7 Month', '8 Month', '9 Month', '10 Month', '11 Month'],
            offers: [],
            offer: '',

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
                    fees: {
                        required: "Fees field is required",

                        regex: 'Hint: "12000.00"'
                    }
                }
            }
        };
    },

    methods: {
        submit: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var form, i, _i, _i2, _i3, _i4, str2, strId, submit;

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
                                return this.educationFeesValidateHere();

                            case 6:
                                _context.next = 8;
                                return this.chechForTheErrors();

                            case 8:
                                if (this.errorArrPass) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 10:
                                form = new FormData();

                                /* --- singel image --- */

                                form.append('image', this.mainImg);

                                /* --- multiple images --- */

                                if (this.imgArr != null) {

                                    for (i = 0; i < this.imgArr.length; i++) {

                                        form.append('imgs[]', this.imgArr[i]);
                                    }
                                }

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

                                /* --- offers --- */

                                if (this.offers != null) {

                                    for (_i4 = 0; _i4 < this.offers.length; _i4++) {

                                        form.append('offers[]', this.offers[_i4]);
                                    }
                                }

                                form.append('contactForPrice', this.showPriceOrNot);

                                form.append('category', this.category.id);

                                form.append('title', this.title);

                                form.append('slug', this.slug);

                                if (this.fees != null || this.fees != '') {
                                    str2 = this.fees.replace(/\,/g, "");


                                    form.append('fees', str2);

                                    form.append('feesPer', this.feesper.id);
                                }

                                strId = this.$route.query.str_id;


                                form.append('str_id', strId);

                                submit = {
                                    showPriceOrNot: this.showPriceOrNot,

                                    imgs: this.imgArr,
                                    img: this.mainImg,

                                    fees: this.fees,
                                    feesPer: this.feesper.id,

                                    category: this.category.id,

                                    title: this.title,
                                    slug: this.slug,
                                    highlights: this.highlights,
                                    descriptions: this.descriptions,
                                    keywords: this.keywords,

                                    offers: this.offers

                                    //let submit = form;

                                };
                                console.log(submit);

                                axios.post('/education', form).then(function (res) {
                                    console.log(res);
                                }).catch(function (err) {
                                    console.log(err.response);
                                });
                                return _context.abrupt('return');

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function submit() {
                return _ref.apply(this, arguments);
            }

            return submit;
        }(),
        getEduCat: function getEduCat() {
            var _this = this;

            if (this.catArr.length != 0) {
                return;
            } else {

                this.isLoading = true;

                axios.get('/educationcategory').then(function (response) {
                    _this.catArr = response.data;
                    console.log(response.data);
                }).catch(function (errors) {
                    console.log(errors);
                }).finally(function () {
                    return _this.isLoading = false;
                });
            }
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
    },
    watch: {
        showPriceOrNot: function showPriceOrNot() {
            if (this.showPriceOrNot == 2) {
                this.feesper = null;
                this.fees = null;
            }
            console.log(this.showPriceOrNot);
        }
    }
});

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "mx-auto width1400" },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "", "justify-space-around": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "background-shadow mb-3 pa-3 text-xs-center",
                  attrs: { flat: "" }
                },
                [
                  _c("div", { staticClass: "headline" }, [
                    _vm._v("Education Form")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs12: "", lg4: "" } }, [
            _c(
              "div",
              { staticClass: "sticky mb-3" },
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
            { staticClass: "background-shadow ", attrs: { xs12: "", lg7: "" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [_vm._v("\n                    Select\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-combobox", {
                    staticClass: "py-3",
                    attrs: {
                      items: _vm.catArr,
                      loading: _vm.isLoading,
                      box: "",
                      "hide-no-data": "",
                      "hide-details": "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "School / Classes / Collage...",
                      "return-object": "",
                      color: "orange darken-2",
                      "prepend-icon": "fas fa-chalkboard",
                      dense: ""
                    },
                    on: { focus: _vm.getEduCat },
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
              _c(
                "v-flex",
                { attrs: { xs12: "", lg12: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "px-3", attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "subheading font-weight-medium" },
                        [
                          _vm._v(
                            "\n                            Fees Block\n                        "
                          )
                        ]
                      ),
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
                                value: _vm.showPriceOrNot,
                                callback: function($$v) {
                                  _vm.showPriceOrNot = $$v
                                },
                                expression: "showPriceOrNot"
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
                                          _vm.showPriceOrNot = "1"
                                        }
                                      }
                                    },
                                    [_c("v-list-tile-title", [_vm._v("Fees")])],
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
                                          value: "2",
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
                                          _vm.showPriceOrNot = "2"
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Contact For Fees Details")
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
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "pa-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "", "justify-start": "" } },
                    [
                      _vm.showPriceOrNot == 1
                        ? _c(
                            "v-flex",
                            {
                              staticClass: "pr-3",
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
                                    "\n                            Fees Details\n                        "
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
                                      label: "Enter Fees",
                                      "error-messages": _vm.errors.collect(
                                        "fees"
                                      ),
                                      "data-vv-name": "fees",
                                      "prepend-icon": "fas fa-rupee-sign",
                                      color: "orange darken-2"
                                    },
                                    model: {
                                      value: _vm.fees,
                                      callback: function($$v) {
                                        _vm.fees = $$v
                                      },
                                      expression: "fees"
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
                                        { attrs: { xs11: "", lg5: "" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.feesArr,
                                              box: "",
                                              label: "Fees per",
                                              color: "orange darken-2",
                                              "prepend-icon": "fas fa-slash",
                                              "return-object": "",
                                              "item-text": "name",
                                              "item-value": "id"
                                            },
                                            model: {
                                              value: _vm.feesper,
                                              callback: function($$v) {
                                                _vm.feesper = $$v
                                              },
                                              expression: "feesper"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-flex", {
                                        attrs: { xs12: "", lg5: "" }
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
                        { attrs: { xs10: "", lg6: "" } },
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
                          },
                          nativeOn: {
                            click: function($event) {
                              return _vm.cancel($event)
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
    require("vue-hot-reload-api")      .rerender("data-v-2aca7691", module.exports)
  }
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("572a66a9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19ee6edf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UsedItemForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19ee6edf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UsedItemForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-19ee6edf] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myErrorsValidatorMixin_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImagesComponent__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImagesComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ImagesComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ttl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ttl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__amt__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__amt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__amt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BrandComp__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BrandComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__BrandComp__);


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










/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_2__selectproductmixin_js__["a" /* selectSearchRoute */], __WEBPACK_IMPORTED_MODULE_3__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    components: {
        ImagesComp: __WEBPACK_IMPORTED_MODULE_4__ImagesComponent___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_5__ttl___default.a,
        AmountComp: __WEBPACK_IMPORTED_MODULE_6__amt___default.a,
        BrandComp: __WEBPACK_IMPORTED_MODULE_7__BrandComp___default.a
    },
    created: function created() {},
    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    data: function data() {
        return {
            amount: '',
            isLoading: false,
            brand: null,

            /* ----------- */
            /* CATEGORY BLOCK */
            /* ----------- */
            fusedCat: [],
            fused: null,
            susedCat: [],
            sused: null,
            tusedCat: [],
            tused: '',

            /* -------------- */
            /* IMAGE BLOCK */
            /* -------------- */

            mainImg: null,
            imgArr: null,

            /* ----------- */
            /* TITLE BLOCK */
            /* ----------- */
            title: '',
            slug: '',
            highlights: null,
            descriptions: null,
            keywords: null,

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
                    amount: {
                        required: "Amount field is required",

                        regex: 'Hint: "12000.00"'
                    }
                }
            }
        };
    },

    methods: {
        submit: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var form, i, _i, _i2, _i3, str2, strId, submit;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.useditemCategoryValidateHere();

                            case 2:
                                _context.next = 4;
                                return this.titleBlockValidateHere();

                            case 4:
                                _context.next = 6;
                                return this.amountValidateHere();

                            case 6:
                                _context.next = 8;
                                return this.chechForTheErrors();

                            case 8:
                                if (this.errorArrPass) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 10:
                                form = new FormData();

                                /* --- singel image --- */

                                form.append('image', this.mainImg);

                                /* --- multiple images --- */

                                if (this.imgArr != null) {

                                    for (i = 0; i < this.imgArr.length; i++) {

                                        form.append('imgs[]', this.imgArr[i]);
                                    }
                                }

                                /* --- Categories --- */

                                if (this.fused != null) {

                                    form.append('firstCat', this.fused.id);
                                }
                                if (this.sused != null) {

                                    form.append('secondCat', this.sused.id);
                                }

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

                                if (this.brand != null) {

                                    form.append('brand', this.brand.id);
                                }

                                if (this.amount != null) {
                                    str2 = this.amount.replace(/\,/g, "");


                                    form.append('amount', str2);
                                }

                                strId = this.$route.query.str_id;


                                form.append('str_id', strId);

                                submit = {
                                    strId: strId,

                                    imgs: this.imgArr,
                                    img: this.mainImg,

                                    amount: this.amount,

                                    brand: this.brand != null ? this.brand.id : null,

                                    fused: this.fused.id,
                                    sused: this.sused.id,

                                    title: this.title,
                                    slug: this.slug,
                                    highlights: this.highlights,
                                    descriptions: this.descriptions,
                                    keywords: this.keywords

                                    //let submit = form;

                                };
                                console.log(submit);
                                //return;


                                axios.post('/useditems', form).then(function (res) {
                                    console.log(res);
                                }).catch(function (err) {
                                    console.log(err.response);
                                });
                                return _context.abrupt('return');

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function submit() {
                return _ref.apply(this, arguments);
            }

            return submit;
        }(),
        getFused: function getFused() {
            var _this = this;

            if (this.fusedCat.length != 0) {
                return;
            } else {

                this.isLoading = true;
                axios.get('/useditemlvlonecat').then(function (response) {
                    _this.fusedCat = response.data;
                    _this.sused = null;
                    console.log(response);
                }).catch(function (errors) {
                    console.log(errors.response);
                }).finally(function () {
                    return _this.isLoading = false;
                });
            }
        },
        cancel: function cancel() {

            this.$router.go(-1);
        }
    },
    watch: {
        fused: function fused() {
            var _this2 = this;

            console.log(this.fused);

            axios.get('/useditemlvltwocat', { params: { p_id: this.fused.id } }).then(function (response) {
                _this2.susedCat = response.data;
                _this2.sused = null;
                console.log(response.data);
            }).catch(function (errors) {
                console.log(errors.response);
            });
        }
        /* sused: function() {
             axios.get('/useditemlvlthreecat')
                    .then((response) => {
                        this.tusedCat = response.data;
                         if(this.tusedCat != '') {
                             this.tused = ''
                        }
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
        } */
    }
});

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "mx-auto width1400" },
    [
      _c(
        "v-card",
        {
          staticClass: "background-shadow mb-3 pa-3 text-xs-center",
          attrs: { flat: "" }
        },
        [
          _c("div", { staticClass: "headline" }, [
            _vm._v("Used Item Upload Form")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-space-around": "" } },
        [
          _c("v-flex", { attrs: { xs12: "", lg4: "" } }, [
            _c(
              "div",
              { staticClass: "sticky mb-3" },
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
            { staticClass: "background-shadow ", attrs: { xs12: "", lg7: "" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-3 ",
                  attrs: { xs12: "", lg12: "", flat: "" }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "subheading font-weight-medium" },
                    [
                      _vm._v(
                        "\n                      Select Categories\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-around": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { staticClass: "pa-2", attrs: { xs12: "", lg6: "" } },
                        [
                          _c("v-combobox", {
                            attrs: {
                              color: "orange darken-2",
                              items: _vm.fusedCat,
                              label: "Main Category",
                              box: "",
                              "item-text": "name",
                              "item-value": "id",
                              "hide-details": "",
                              "return-object": "",
                              loading: _vm.isLoading
                            },
                            on: { focus: _vm.getFused },
                            model: {
                              value: _vm.fused,
                              callback: function($$v) {
                                _vm.fused = $$v
                              },
                              expression: "fused"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "pa-2", attrs: { xs12: "", lg6: "" } },
                        [
                          _c("v-combobox", {
                            attrs: {
                              items: _vm.susedCat,
                              label: "Category",
                              box: "",
                              "item-text": "name",
                              "item-value": "id",
                              color: "orange darken-2",
                              "hide-details": "",
                              disabled: _vm.fused == null
                            },
                            model: {
                              value: _vm.sused,
                              callback: function($$v) {
                                _vm.sused = $$v
                              },
                              expression: "sused"
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
              _c("hr"),
              _vm._v(" "),
              _c("brand-comp", {
                on: {
                  brand: function($event) {
                    _vm.brand = $event
                  }
                }
              }),
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
              _c(
                "v-card",
                { staticClass: "pb-3", attrs: { flat: "" } },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-around": "" }
                    },
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
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs10: "", lg5: "" } })
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
                          },
                          nativeOn: {
                            click: function($event) {
                              return _vm.cancel($event)
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
    require("vue-hot-reload-api")      .rerender("data-v-19ee6edf", module.exports)
  }
}

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "/images/box bottle.svg?e3eb02a72b019237eb24e357638b5647";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(176)
/* template */
var __vue_template__ = __webpack_require__(177)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b39c7d0"
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
Component.options.__file = "resources/js/components/forms/ProductForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b39c7d0", Component.options)
  } else {
    hotAPI.reload("data-v-7b39c7d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "/images/Flat Grocery Shoping.svg?b695a6830a6b73e0c512741a642cc7d6";

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


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(197)
/* template */
var __vue_template__ = __webpack_require__(198)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02fdefde"
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
Component.options.__file = "resources/js/components/forms/ServiceForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02fdefde", Component.options)
  } else {
    hotAPI.reload("data-v-02fdefde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(201)
/* template */
var __vue_template__ = __webpack_require__(202)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2aca7691"
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
Component.options.__file = "resources/js/components/forms/EducationForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aca7691", Component.options)
  } else {
    hotAPI.reload("data-v-2aca7691", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("288515c0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d8abb26a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WhatToUpload.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d8abb26a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WhatToUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_PropertyForm__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_PropertyForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__forms_PropertyForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_ServiceForm__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_ServiceForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__forms_ServiceForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_ProductForm__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_ProductForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__forms_ProductForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_EducationForm__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_EducationForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__forms_EducationForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_UsedItemForm__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_UsedItemForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__forms_UsedItemForm__);
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









/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
    mixins: [__WEBPACK_IMPORTED_MODULE_1__selectproductmixin_js__["a" /* selectSearchRoute */]],
    components: {
        PropertyForm: __WEBPACK_IMPORTED_MODULE_2__forms_PropertyForm___default.a,
        ServiceForm: __WEBPACK_IMPORTED_MODULE_3__forms_ServiceForm___default.a,
        ProductForm: __WEBPACK_IMPORTED_MODULE_4__forms_ProductForm___default.a,
        UsedItemForm: __WEBPACK_IMPORTED_MODULE_6__forms_UsedItemForm___default.a,
        EducationForm: __WEBPACK_IMPORTED_MODULE_5__forms_EducationForm___default.a
    },
    data: function data() {
        return {
            e6: '',
            radios: '3',
            product: __webpack_require__(254),
            shop: __webpack_require__(178),
            items: [{
                title: 'Products',
                text: 'Product listing',
                src: __webpack_require__(254),
                to: { name: 'whereselected', query: { str_id: this.$route.query.str_id } }
            },
            //  {
            //      title: 'Products',
            //      text: 'Product listing',
            //      src: require('../../../assets/Flat Grocery Shoping.svg'),
            //      to: { name: 'choosetouploade', query: {str_id: this.$route.query.str_id}}
            //  },
            {
                title: 'Service / Business',
                text: 'Business or Service Listing',
                src: __webpack_require__(294),
                to: { name: 'serviceandbusinessform', query: { str_id: this.$route.query.str_id } }
            }, {
                title: 'Property',
                text: 'Sell or Rent',
                src: __webpack_require__(295),
                to: { name: 'propertyform', query: { str_id: this.$route.query.str_id } }
            }, {
                title: 'Education',
                text: 'Tution class, Drawing class, computer traing, Driving traing, ETC.',
                src: __webpack_require__(296),
                to: { name: 'educationform', query: { str_id: this.$route.query.str_id } }
            }, {
                title: 'Used Item',
                text: 'Used Item Listing',
                src: __webpack_require__(243),
                to: { name: 'useditemform', query: { str_id: this.$route.query.str_id } }
            }]
        };
    },

    methods: {},
    watch: {
        /* '$route'(to, from) {
             this.name= to.params.name;
        }, */

        radios: function radios() {

            console.log(this.radios);
        }
    }

}, 'methods', {}));

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "/images/business.svg?e9989701eabd610f2245c91238a02ef9";

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "/images/Flat Cityscape Sunset with gradient background vector illustration-01.svg?170154de94c3542ed5989520456f5f84";

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "/images/Edu.svg?4495d97d806b5bea77cebbfe36e74978";

/***/ }),

/***/ 297:
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
        "v-flex",
        { staticClass: "mx-auto width1400  mb-3" },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.items, function(val) {
              return _c(
                "v-flex",
                {
                  key: val.title,
                  attrs: { xs12: "", lg6: "", "pa-1": "", "offset-lg3": "" }
                },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "", to: val.to, ripple: "" } },
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "", "grid-list-lg": "" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "" } },
                            [
                              _c("v-flex", { attrs: { xs7: "" } }, [
                                _c("div", [
                                  _c("div", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(val.title))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [_vm._v(_vm._s(val.text))])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: val.src,
                                      height: "100px",
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
                ],
                1
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
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
    require("vue-hot-reload-api")      .rerender("data-v-d8abb26a", module.exports)
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(205)
/* template */
var __vue_template__ = __webpack_require__(206)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19ee6edf"
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
Component.options.__file = "resources/js/components/forms/UsedItemForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19ee6edf", Component.options)
  } else {
    hotAPI.reload("data-v-19ee6edf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(291)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(293)
/* template */
var __vue_template__ = __webpack_require__(297)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d8abb26a"
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
Component.options.__file = "resources/js/components/forms/WhatToUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8abb26a", Component.options)
  } else {
    hotAPI.reload("data-v-d8abb26a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});