webpackJsonp([5],{

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

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(188)
/* template */
var __vue_template__ = __webpack_require__(189)
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
Component.options.__file = "resources/js/components/PropertyAddressComp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1adee21a", Component.options)
  } else {
    hotAPI.reload("data-v-1adee21a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("9f6841ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9674f37c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductEditForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9674f37c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductEditForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.sticky[data-v-9674f37c] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 181:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AmountComp__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AmountComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__AmountComp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RetailRentEtc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PropertyAddressComp__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PropertyAddressComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__PropertyAddressComp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Categories_CategoryComp__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Categories_CategoryComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Categories_CategoryComp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__BrandComp__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__BrandComp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__BrandComp__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import { titleBlockMixin } from '../../titleblockmixin.js'










/* harmony default export */ __webpack_exports__["default"] = ({
    //mixins: [titleBlockMixin],
    components: {
        ImagesComp: __WEBPACK_IMPORTED_MODULE_3__ImagesComponent___default.a,
        TitleComp: __WEBPACK_IMPORTED_MODULE_4__ttl___default.a,
        AmountComp: __WEBPACK_IMPORTED_MODULE_5__AmountComp___default.a,
        RetailRentEtc: __WEBPACK_IMPORTED_MODULE_6__RetailRentEtc___default.a,
        PropertyAddressComp: __WEBPACK_IMPORTED_MODULE_7__PropertyAddressComp___default.a,
        CategoryComp: __WEBPACK_IMPORTED_MODULE_8__Categories_CategoryComp___default.a,
        BrandComp: __WEBPACK_IMPORTED_MODULE_9__BrandComp___default.a
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('editProductId', function (data) {

            //console.log(data)

        });
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('saveEdit', function (data) {
            return _this.submit();
        });
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$on('invPrcMatch', function (data) {

            console.log(data);

            _this.invMatch = data.invMatch;
            _this.prcMatch = data.prcMatch;
        });
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('retailRent', this.data.want_to);
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__myErrorsValidatorMixin_js__["a" /* MyErrorsValidatorMixin */]],
    props: ['data', 'propInvPrcMatch'],
    data: function data() {
        return {

            invMatch: this.propInvPrcMatch ? this.propInvPrcMatch.invMatch : false,
            prcMatch: this.propInvPrcMatch ? this.propInvPrcMatch.prcMatch : false,
            upBtn: this.propInvPrcMatch ? this.propInvPrcMatch.upBtn : false,
            RentRetainHide: false,

            loading: false,
            /* -------------- */
            /* RETAIL, RENT, WHOLSALE BLOCK */
            /* -------------- */

            want_to: this.data.want_to ? this.data.want_to.toString() : '1',

            /* -------------- */
            /* IMAGE BLOCK */
            /* -------------- */

            mainImg: this.data.image ? this.data.image : null,
            imgArr: this.data.images ? this.data.images : null,
            rawImgArr: null,
            rawMainImg: null,
            deleteImages: null,

            /* -------------- */
            /* CATEGORY BLOCK */
            /* -------------- */

            editCat: false,

            category: null,
            categoryArr: [],

            catp: this.data.category ? this.data.category : null,

            valuesCat: [],
            cat: '',
            subCat: '',

            /* ===   SERVICE CATEGORY   ======================== */

            serviceCat: this.data.category ? this.data.category : '',
            serviceCatArr: [],
            isLoading: false,

            /* ----------- */
            /* BRAND BLOCK */
            /* ----------- */

            brand: this.data.brand ? this.data.brand : '',
            brandArr: [],
            newBrand: '',
            newBrandDialog: false,
            newBrandSuccess: true,

            /* ----------- */
            /* TITLE BLOCK */
            /* ----------- */

            title: this.data.title ? this.data.title : null,
            slug: this.data.slug ? this.data.slug : null,
            highlights: this.data.highLights,
            descriptions: this.data.descriptions,
            keywords: this.data.keywords ? this.data.keywords : [],

            /* ----------- */
            /* PRICE BLOCK */
            /* ----------- */

            amount: this.data.totalPrice ? this.data.totalPrice : null,
            discount: this.data.discount ? this.data.discount : null,
            offers: this.data.offers ? this.data.offers : null,
            previousPrice: this.data.perviousPrice ? this.data.perviousPrice : null,
            per: this.data.per ? this.data.per : null,

            newPrice: false,

            /* ----------- */
            /* ADDRESS BLOCK */
            /* ----------- */
            fullAddress: this.data.fullAddress ? this.data.fullAddress : null,
            country: this.data.country ? this.data.country : null,
            state: this.data.state ? this.data.state : null,
            city: this.data.city ? this.data.city : null,
            area: this.data.area ? this.data.area : null
        };
    },

    methods: {
        submit: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var _this2 = this;

                var form, comp, nop, i, _i, str, n, _i2, _i3, _i4, _i5, _i6, _i7, str2, strId, image, submit, prdId;

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
                                return this.chechForTheErrors();

                            case 6:
                                if (this.errorArrPass) {
                                    _context.next = 8;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 8:

                                //eventBus.$emit('spinner', true)

                                form = new FormData();


                                form.append('_method', 'PUT');

                                /* --- singel image --- */

                                if (this.rawMainImg != null) {

                                    form.append('image', this.rawMainImg);
                                }

                                /* --- multiple images --- */

                                comp = [];
                                nop = [];


                                if (this.rawImgArr != null) {

                                    for (i = 0; i < this.rawImgArr.length; i++) {

                                        form.append('imgs[]', this.rawImgArr[i]);
                                    }

                                    if (this.imgArr != null) {

                                        for (_i = 0; _i < this.imgArr.length; _i++) {
                                            str = this.imgArr[_i];
                                            n = str.indexOf("data");
                                            ;

                                            if (n === 0) {
                                                console.log(n);

                                                comp.push(str);
                                            } else {

                                                nop.push(str);

                                                form.append('compareimgs[]', str);
                                            }
                                        }
                                    }
                                }

                                if (this.deleteImages != null) {

                                    for (_i2 = 0; _i2 < this.deleteImages.length; _i2++) {

                                        form.append('deleteImages[]', this.deleteImages[_i2]);
                                    }
                                }

                                /* --- Category --- */

                                if (this.category != null) {

                                    for (_i3 = 0; _i3 < this.category.length; _i3++) {

                                        form.append('category[]', this.category[_i3]);
                                    }
                                }

                                /* --- highlights --- */

                                if (this.highlights != null) {

                                    for (_i4 = 0; _i4 < this.highlights.length; _i4++) {

                                        form.append('highlights[]', this.highlights[_i4]);
                                    }
                                }

                                /* --- descriptions --- */

                                if (this.descriptions != null) {

                                    for (_i5 = 0; _i5 < this.descriptions.length; _i5++) {

                                        form.append('descriptions[]', JSON.stringify(this.descriptions[_i5]));
                                    }
                                }

                                /* --- keywords --- */

                                if (this.keywords != null) {

                                    for (_i6 = 0; _i6 < this.keywords.length; _i6++) {

                                        form.append('keywords[]', this.keywords[_i6]);
                                    }
                                }

                                /* --- offers --- */

                                if (this.offers != null) {

                                    for (_i7 = 0; _i7 < this.offers.length; _i7++) {

                                        form.append('offers[]', this.offers[_i7]);
                                    }
                                }

                                form.append('want_to', this.want_to);

                                if (this.brand != null) {

                                    form.append('brand', this.brand.id);
                                }

                                form.append('title', this.title);

                                form.append('slug', this.slug);

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

                                strId = this.$route.params.id;


                                form.append('str_id', strId);

                                image = form;
                                submit = {
                                    want_to: this.want_to,

                                    image: this.mainImg,
                                    imgs: this.rawImgArr,
                                    deleteImages: this.deleteImages,

                                    cop: comp,
                                    nopp: nop,

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
                                    rent: this.rent,

                                    str_id: strId

                                    //let submit = form;

                                };
                                console.log(submit);
                                prdId = this.data.id;

                                //return;

                                axios.post('/products/' + prdId, image).then(function (res) {
                                    console.log(res);
                                    if (res) {
                                        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('closeEditFormDialog', _this2.data.what);
                                        __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('infoDialog', { suc: res.data.success });
                                    }
                                    if (res) {}
                                }).catch(function (err) {
                                    console.log(err.response);
                                }).finally(function () {
                                    return __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('spinner', false);
                                });
                                return _context.abrupt('return');

                            case 36:
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
        createPrice: function createPrice() {

            // eventBus.$emit('retailRent', this.want_to);
            if (!this.newPrice) {
                // console.log(this.want_to)
                this.prcMatch = true;

                this.newPrice = true;

                return;
            }

            this.newPrice = false;
            this.prcMatch = false;
        },
        createNewprice: function createNewprice() {

            var form = new FormData();

            form.append('prd_id', this.data.id);

            form.append('str_id', this.$route.params.id);

            form.append('want_to', this.want_to);

            if (this.amount != null) {

                var str2 = this.amount.toString().replace(/\,/g, "");

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

            /* --- offers --- */

            if (this.offers != null) {

                for (var i = 0; i < this.offers.length; i++) {

                    form.append('offers[]', this.offers[i]);
                }
            }

            var submit = {
                want_to: this.want_to,

                amount: this.amount,
                discount: this.discount,
                offers: this.offers,
                previousPrice: this.previousPrice,
                per: this.per,

                str_id: this.$route.params.id

            };

            console.log(submit);
            // return;

            axios.post('/price', form).then(function (res) {

                console.log(res);
            }).catch(function (err) {

                console.log(err.response);
            });
        },

        // getLvlOneCat() {

        //     if (this.levelOneCat != null || this.levelOneCat != '') {

        //         axios.get('/levelonecategories')
        //             .then((response) => {
        //                 this.levelOneArr = response.data;
        //                 console.log(response.data);
        //             })
        //             .catch((errors) => {
        //                 console.log(errors);
        //             })
        //     }

        // },
        // getLvlTwoCat() {

        //     if (this.rootCat != null || this.rootCat != '') {

        //         axios.get('/leveltwocategories')
        //             .then((response) => {
        //                 this.levelTwoArr = response.data;
        //                 console.log(response.data);
        //             })
        //             .catch((errors) => {
        //                 console.log(errors);
        //             })
        //     }

        // },
        addBrand: function addBrand() {
            var _this3 = this;

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', { name: this.newBrand }).then(function (response) {
                _this3.newBrand = response.data.success;
                _this3.newBrandSuccess = false;
                console.log(response);
            }).catch(function (errors) {

                console.log(errors.response);
            });
        },
        openBrandDialog: function openBrandDialog() {

            //this.brand = '';
            this.newBrandDialog = true;
        },
        cancelNewBrand: function cancelNewBrand() {

            this.newBrand = '';
            this.newBrandDialog = false;
            this.brandArr = [];
            this.newBrandSuccess = true;
        },
        getBrands: function getBrands() {
            var _this4 = this;

            if (this.brandArr.length == 0) {

                axios.get('/brands').then(function (response) {
                    _this4.brandArr = response.data;

                    console.log(response);
                }).catch(function (errors) {

                    console.log(errors.response);
                });
            }
        },
        cancel: function cancel() {

            this.invMatch = false;
            this.prcMatch = false;

            this.upBtn = false;
            this.newPrice = false;

            __WEBPACK_IMPORTED_MODULE_1__app_js__["eventBus"].$emit('closeEditFormDialog');
        },

        /* ---------------------------------------------------------------------------------------- */
        /*                                   -- CATEGORIES --                                         */
        /* -------------------------------------------------------------------------------------- */
        getCategories: function getCategories() {
            var _this5 = this;

            if (this.serviceCatArr.length != 0) {
                return;
            } else {

                this.isLoading = true;

                axios.get('/servicesandbusinessescategories').then(function (response) {
                    _this5.categories = response.data;
                    console.log(response.data);
                }).catch(function (errors) {
                    console.log(errors.response);
                }).finally(function () {
                    return _this5.isLoading = false;
                });
            }
        },


        // ==========   Category   ==================
        // ==========================================

        selectCategory: function selectCategory() {
            var _this6 = this;

            this.loading = true;

            axios.get('/readymade').then(function (res) {
                console.log(res);
                if (res) {

                    _this6.categoryArr = res.data;

                    _this6.loading = false;
                }
            }).catch(function (err) {
                _this6.loading = false;
                console.log(err.response);
            });
            // .finally(this.loading = false)
        }
    },
    computed: {},
    watch: {
        // rootCat: function() {

        //     this.getLvlOneCat();
        // },
        // levelOneCat: function () {

        //     this.getLvlTwoCat();
        // },
        want_to: function want_to() {
            //  eventBus.$emit('discount', this.want_to);
            console.log(this.want_to);
        },

        /* =========================================== */
        mainImg: function mainImg() {
            console.log(this.mainImg);
        },
        /* imgArr: function () {
            console.log(this.imgArr);
        }, */
        rawImgArr: function rawImgArr() {
            console.log(this.rawImgArr);
        },
        deleteImages: function deleteImages() {
            console.log(this.deleteImages);
        },
        /* =========================================== */

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
        /* =========================================== */
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
        }
    }
});

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(185)
/* template */
var __vue_template__ = __webpack_require__(187)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17a718b2"
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
Component.options.__file = "resources/js/components/AmountComp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17a718b2", Component.options)
  } else {
    hotAPI.reload("data-v-17a718b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("06eaf395", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17a718b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AmountComp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17a718b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AmountComp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amountblockmixin_js__ = __webpack_require__(186);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__amountblockmixin_js__["a" /* AmountBlockMixin */]],
    /* created() {
        eventBus.$on('discount', (data) => {
             return this.discountField = data;
        });
    }, */
    props: ['prpAmount', 'prpDiscount', 'prpOffers', 'prpPreviousPrice', 'propPer', 'propWhat']
    /* data() {
        return {
            previousPrice: '',
            propertyCategory: ['House', 'banglow', 'Farmhouse', 'Hall', 'Party Plot', 'Apartment', 'Shop', 'Plot', 'waadi'],
            selectedProperty: '',
            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rent: '',
            rentField: false,
            amount: '',
            offers: [],
            offer: '',
            discount: '',
            discountField: 1,
         }
    }, */
    /* methods: {
        pushOffer() {
             if(this.offer !== '')
                {
                    this.offers.push(this.offer)
                     this.offer = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                console.log(this.offer);
        },
        deleteOffer(index) {
             const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.offers.splice(index, 1);
                }
                return;
        }
    }  */
});

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountBlockMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(1);


var AmountBlockMixin = {

    _veeValidate: {
        validator: "new"
    },
    mounted: function mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$on('discount', function (data) {
            if (_this.propPer) {
                console.log(_this.propPer);
                _this.per = _this.propPer;
            }
            console.log(data);
            return _this.discountField = data;
        });
        __WEBPACK_IMPORTED_MODULE_0__app__["eventBus"].$on('priceOrcontactPrice', function (data) {
            console.log(data);
            return _this.radios = data;
        });
    },

    //props:['prpAmount','prpDiscount','prpOffers','prpPreviousPricet'],
    data: function data() {
        return {
            previousPrice: this.prpPreviousPrice ? this.prpPreviousPrice : '',
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

            per: '',

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
    computed: {
        whatArr: function whatArr() {

            if (this.propWhat == 'products') {

                return this.rentArr;
            }
        }
    },
    watch: {
        amount: function amount() {

            this.$emit('amount', this.amount);
        },
        discount: function discount() {

            this.$emit('discount', this.discount);
        },

        offers: function offers() {

            if (this.offer.length == 0) {

                return this.$emit('offers', null);
            }

            return this.$emit('offers', this.offers);
        },
        previousPrice: function previousPrice() {
            this.$emit('previousPrice', this.previousPrice);
        },
        per: function per() {
            this.$emit('per', this.per);
        }
    }
};

/***/ }),

/***/ 187:
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
                                    regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/
                                  },
                                  expression:
                                    "{required: true, regex: /^(?=[^A-Za-z\\s\\-]+$).*[0-9].*$/}"
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
                                  _vm.amount = $$v
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
                                _c(
                                  "v-flex",
                                  { attrs: { xs11: "", lg5: "" } },
                                  [
                                    _vm.discountField == 1
                                      ? _c("v-text-field", {
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
                                      : _vm.discountField == 2
                                        ? _c("v-select", {
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
                                        : _c("v-select", {
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
                                    _vm.discountField == 1
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
    require("vue-hot-reload-api")      .rerender("data-v-17a718b2", module.exports)
  }
}

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RegionComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RegionComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RegionComponent__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        Region: __WEBPACK_IMPORTED_MODULE_0__components_RegionComponent___default.a
    },
    props: ['propFullAddress', 'propCountry', 'propState', 'propCity', 'propArea'],
    data: function data() {
        return {
            /* ----------- */
            /* ADDRESS BLOCK */
            /* ----------- */
            fullAddress: this.propFullAddress ? this.propFullAddress : null,
            country: this.propCountry ? this.propCountry : null,
            state: this.propState ? this.propState : null,
            city: this.propCity ? this.propCity : null,
            area: this.propArea ? this.propArea : null,
            addressNotShow: this.propFullAddress ? false : true
        };
    },

    watch: {
        fullAddress: function fullAddress() {
            this.$emit('fullAddress', this.fullAddress);
        }
    }
});

/***/ }),

/***/ 189:
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
        { staticClass: "px-2 pb-5", attrs: { flat: "" } },
        [
          _c("v-card-text", { staticClass: "subheading font-weight-medium" }, [
            _vm._v("\n            Address of Property\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "px-3 pb-3", attrs: { xs12: "", lg12: "" } },
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
                  attrs: { color: "orange darken-2", "hide-details": "" },
                  model: {
                    value: _vm.addressNotShow,
                    callback: function($$v) {
                      _vm.addressNotShow = $$v
                    },
                    expression: "addressNotShow"
                  }
                },
                [
                  _c("div", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v(
                      "\n                Don't Want to Show Full Address\n            "
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "subheading font-weight-medium" }, [
            _vm._v("\n            Region of Property\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "px-3 pb-3", attrs: { xs12: "", lg12: "" } },
            [
              _c("Region", {
                attrs: {
                  propCountry: _vm.country,
                  propState: _vm.state,
                  propCity: _vm.city,
                  propArea: _vm.area
                },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1adee21a", module.exports)
  }
}

/***/ }),

/***/ 190:
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
        { attrs: { wrap: "", "justify-space-around": "" } },
        [
          _c("v-flex", { attrs: { xs12: "", lg4: "" } }, [
            _vm.invMatch
              ? _c(
                  "div",
                  { staticClass: "sticky mb-3" },
                  [
                    _c("ImagesComp", {
                      attrs: {
                        propMainImg: _vm.mainImg,
                        propimgArr: _vm.data.images
                      },
                      on: {
                        mainImg: function($event) {
                          _vm.rawMainImg = $event
                        },
                        imgArr: function($event) {
                          _vm.rawImgArr = $event
                        },
                        deleteImages: function($event) {
                          _vm.deleteImages = $event
                        }
                      }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "sticky mb-3" },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "background-shadow ",
                        attrs: { flat: "" }
                      },
                      [
                        _c(
                          "v-layout",
                          { attrs: { wrap: "" } },
                          [
                            _c(
                              "v-flex",
                              {
                                staticClass: "pa-1",
                                attrs: { xs6: "", lg6: "" }
                              },
                              [_c("v-img", { attrs: { src: _vm.mainImg } })],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.imgArr, function(img, i) {
                              return [
                                _c(
                                  "v-flex",
                                  {
                                    key: i,
                                    staticClass: "pa-1",
                                    attrs: { xs6: "", lg6: "" }
                                  },
                                  [_c("v-img", { attrs: { src: img } })],
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
                )
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "background-shadow ", attrs: { xs12: "", lg7: "" } },
            [
              !_vm.invMatch && !_vm.prcMatch
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "", lg12: "" } },
                    [
                      _c("v-alert", { attrs: { type: "error", value: true } }, [
                        _vm._v(
                          "\n                        Product Was Not Uploaded From This Storeview, So Can't Edit But You Can Create New Price For Your Storeview.\n                    "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.catp && _vm.invMatch
                ? _c(
                    "div",
                    [
                      _c(
                        "v-card",
                        { attrs: { xs12: "", lg12: "", flat: "" } },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "subheading font-weight-medium" },
                            [
                              _vm._v(
                                "\n                            Select Categories\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                _vm._l(_vm.catp, function(val, i) {
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
                                                _vm._v(_vm._s(val.name) + " "),
                                                _vm.catp.length !== i + 1
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
                            "v-flex",
                            { attrs: { xs12: "", lg12: "" } },
                            [
                              _c("v-checkbox", {
                                staticClass: "pl-2",
                                attrs: { label: "Edit Category" },
                                model: {
                                  value: _vm.editCat,
                                  callback: function($$v) {
                                    _vm.editCat = $$v
                                  },
                                  expression: "editCat"
                                }
                              }),
                              _vm._v(" "),
                              _vm.editCat
                                ? _c(
                                    "v-flex",
                                    { attrs: { xs12: "", lg12: "" } },
                                    [
                                      _c(
                                        "v-card",
                                        { staticClass: "pa-3" },
                                        [
                                          _c(
                                            "v-card-text",
                                            {
                                              staticClass:
                                                "subheading font-weight-medium"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Select Category\n                                    "
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
                                                return _vm.selectCategory(
                                                  $event
                                                )
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
              _vm.invMatch && _vm.brand
                ? _c(
                    "div",
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("BrandComp", {
                        attrs: { propBrand: _vm.brand },
                        on: {
                          brand: function($event) {
                            _vm.brand = $event
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.invMatch
                ? _c(
                    "div",
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("TitleComp", {
                        attrs: {
                          ttl: _vm.title,
                          propSlug: _vm.slug,
                          prpHighLights: _vm.highlights,
                          prpDescriptions: _vm.descriptions,
                          prpKeywords: _vm.keywords
                        },
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
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "pa-1", attrs: { xs12: "", lg12: "" } },
                [
                  !_vm.invMatch
                    ? _c(
                        "v-card",
                        { staticClass: "pa-3", attrs: { flat: "" } },
                        [
                          _c(
                            "v-flex",
                            {
                              staticClass: "py-2",
                              attrs: { xs12: "", lg12: "" }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "title headFontColor" },
                                [_vm._v(" " + _vm._s(_vm.title) + " ")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { staticClass: "py-2", attrs: { xs12: "" } },
                            [
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass:
                                        "subheading font-weight-medium headFontColor",
                                      attrs: { xs3: "" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Brand\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass:
                                        "subheading font-weight-medium fontColor",
                                      attrs: { xs9: "" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.brand != null
                                              ? _vm.brand.name
                                              : "no brand"
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { staticClass: "py-2", attrs: { xs12: "" } },
                            [
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass:
                                        "subheading font-weight-medium headFontColor",
                                      attrs: { xs3: "" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Category\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs9: "" } },
                                    [
                                      _vm._l(_vm.catp, function(val, i) {
                                        return [
                                          _c(
                                            "span",
                                            {
                                              key: i,
                                              staticClass:
                                                "subheading font-weight-medium fontColor"
                                            },
                                            [
                                              _vm._v(_vm._s(val.name) + " "),
                                              _vm.catp.length !== i + 1
                                                ? _c(
                                                    "span",
                                                    { staticClass: "pl-2" },
                                                    [_vm._v(">")]
                                                  )
                                                : _vm._e()
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
                              _c("v-divider")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { staticClass: "py-2", attrs: { xs12: "" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "subheading pb-2 font-weight-medium headFontColor"
                                },
                                [
                                  _vm._v(
                                    "\n                                Highlights\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                _vm._l(_vm.highlights, function(high, i) {
                                  return _c(
                                    "v-flex",
                                    {
                                      key: i,
                                      staticClass:
                                        "pt-2 pr-3 subheading fontColor",
                                      attrs: { xs6: "", lg6: "", tag: "li" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(high) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                })
                              ),
                              _vm._v(" "),
                              _c("v-divider")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "py-2",
                              attrs: { xs12: "", lg12: "" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "subheading pb-2 font-weight-medium headFontColor"
                                },
                                [
                                  _vm._v(
                                    "\n                                Description\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.descriptions, function(val, i) {
                                return _c(
                                  "v-flex",
                                  {
                                    key: i,
                                    staticClass: "pb-2",
                                    attrs: { xs12: "" }
                                  },
                                  [
                                    _c(
                                      "v-layout",
                                      { attrs: { wrap: "" } },
                                      [
                                        _c(
                                          "v-flex",
                                          {
                                            staticClass:
                                              "subheading font-weight-medium fontColor",
                                            attrs: { xs3: "" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(val.heading) +
                                                "\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-flex",
                                          {
                                            staticClass: "subheading fontColor",
                                            attrs: { xs9: "" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(val.description) +
                                                "\n\n                                    "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.prcMatch
                    ? _c(
                        "v-card",
                        { staticClass: "pa-3", attrs: { flat: "" } },
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
                              on: { click: _vm.createPrice }
                            },
                            [_vm._v("Create price")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "pa-1",
                              attrs: { xs12: "", lg12: "" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "subheading pb-2 font-weight-medium headFontColor"
                                },
                                [
                                  _vm._v(
                                    "\n                                Price Details\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "", lg12: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c(
                                            "v-layout",
                                            { attrs: { wrap: "" } },
                                            [
                                              _c(
                                                "v-flex",
                                                { attrs: { xs3: "" } },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "subheading pb-2 font-weight-medium headFontColor"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    price:\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                { attrs: { xs9: "" } },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "subheading pb-2 font-weight-medium fontColor"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(_vm.amount) +
                                                          " "
                                                      ),
                                                      _vm.per
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "/ " +
                                                                _vm._s(
                                                                  _vm.per
                                                                ) +
                                                                " "
                                                            )
                                                          ])
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.previousPrice
                                        ? _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs3: "" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "subheading pb-2 font-weight-medium headFontColor"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Previous Price:\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs9: "" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "subheading pb-2 font-weight-medium fontColor"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.previousPrice
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.discount
                                        ? _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { wrap: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs3: "" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "subheading pb-2 font-weight-medium headFontColor"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    discount:\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      staticClass:
                                                        "subheading pb-2 font-weight-medium fontColor",
                                                      attrs: { xs9: "" }
                                                    },
                                                    [
                                                      _c("div", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.discount
                                                            ) +
                                                            " %\n                                                "
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
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c(
                                            "v-layout",
                                            { attrs: { wrap: "" } },
                                            [
                                              _c(
                                                "v-flex",
                                                { attrs: { xs3: "" } },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "subheading pb-2 font-weight-medium headFontColor"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    offers:\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                { attrs: { xs9: "" } },
                                                [
                                                  _c("div", [
                                                    _c(
                                                      "ul",
                                                      [
                                                        _c(
                                                          "v-layout",
                                                          {
                                                            attrs: { wrap: "" }
                                                          },
                                                          _vm._l(
                                                            _vm.offers,
                                                            function(val) {
                                                              return _c(
                                                                "v-flex",
                                                                {
                                                                  key: val,
                                                                  attrs: {
                                                                    xs12: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "li",
                                                                    {
                                                                      staticClass:
                                                                        "subheading font-weight-medium fontColor"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {}
                                                                      ),
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          val
                                                                        ) +
                                                                          "\n                                                                "
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        )
                                                      ],
                                                      1
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
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.prcMatch,
                      expression: "prcMatch"
                    }
                  ]
                },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("RetailRentEtc", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.RentRetainHide,
                        expression: "RentRetainHide"
                      }
                    ],
                    attrs: { propWantto: _vm.want_to },
                    on: {
                      radios: function($event) {
                        _vm.want_to = $event
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("AmountComp", {
                    attrs: {
                      prpAmount: _vm.amount,
                      prpDiscount: _vm.discount,
                      prpOffers: _vm.offers,
                      prpPreviousPrice: _vm.previousPrice,
                      propPer: _vm.per
                    },
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
              _vm.fullAddress != null
                ? _c(
                    "div",
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("PropertyAddressComp", {
                        attrs: {
                          propFullAddress: _vm.fullAddress,
                          propCountry: _vm.country,
                          propState: _vm.state,
                          propCity: _vm.city,
                          propArea: _vm.area
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
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
                      _vm.upBtn
                        ? _c(
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
                            [_vm._v("update")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.newPrice
                        ? _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                outline: "",
                                color: "success",
                                dark: ""
                              },
                              on: { click: _vm.createNewprice }
                            },
                            [_vm._v("Create Price")]
                          )
                        : _vm._e(),
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
                          on: { click: _vm.cancel }
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
    require("vue-hot-reload-api")      .rerender("data-v-9674f37c", module.exports)
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(181)
/* template */
var __vue_template__ = __webpack_require__(190)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9674f37c"
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
Component.options.__file = "resources/js/components/forms/ProductEditForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9674f37c", Component.options)
  } else {
    hotAPI.reload("data-v-9674f37c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});