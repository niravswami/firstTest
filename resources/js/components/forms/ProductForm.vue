<template>
    <v-flex class=" mx-auto width1400" >
        <v-layout  wrap justify-space-around>

            <v-flex xs12 lg4 >

                <div class="sticky mb-3">
                    <ImagesComp
                        @mainImg="mainImg = $event"
                        @imgArr="imgArr = $event"
                    ></ImagesComp>
                </div>
            </v-flex>

            <v-flex xs12 lg7 class="background-shadow ">

                <RetailRentEtc
                    @radios="want_to = $event"
                ></RetailRentEtc>
                <!-- <v-card flat class="pa-3">
                    <v-card-text class="subheading font-weight-medium">

                    </v-card-text>
                    <v-list two-line subheader>
                        <v-radio-group v-model="radios" :mandatory="true" row >
                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="1" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '1'">
                                    <v-list-tile-title>Retail</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="2" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '2'">
                                    <v-list-tile-title>Rent a Product</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="3" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '3'">
                                    <v-list-tile-title>wholesale</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>

                    <v-select box :items="propertyCategory" v-model="selectedProperty" size="4" label="Category" color="orange darken-2"></v-select>

                </v-card> -->

                <hr>

                <!-- =========================================
                            CATEGORY
                ============================================== -->

                    <!-- <categoryComp @category="category = $event"></categoryComp> -->

                    <v-flex xs12 lg12>
                        <v-card class="pa-3">
                            <v-card-text class="subheading font-weight-medium">
                                Select Category
                            </v-card-text>

                            <v-autocomplete
                                :items="categoryArr"
                                v-model="category"
                                clearable
                                hide-no-data
                                hide-details
                                item-text="cat_names"
                                item-value="id"
                                label="Choose Category"
                                color="orange darken-2"
                                light
                                @click.native="selectCategory"
                                :loading="loading"
                                box
                            ></v-autocomplete>
                        </v-card>
                    </v-flex>

                <hr>

                <v-card xs12 lg12 class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                        Product Model Number
                    </v-card-text>

                        <v-flex xs12>
                            <v-text-field
                                box
                                label="Enter Model Number or Name"
                                v-model="modelName"
                                color="orange darken-2"
                                hide-details
                                prepend-icon="fab fa-product-hunt"
                                >

                            </v-text-field>
                        </v-flex>
                </v-card>

                <hr>

                <!-- ======================================
                            Brand
                 =======================================-->
                <v-card xs12 lg12 class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                          Brand
                    </v-card-text>
                    <v-combobox
                                v-model="brand"
                                :items="brandArr"
                                label="Enter Brand Name"
                                box
                                item-text="name"
                                item-value="id"
                                color="orange darken-2"
                                hide-details
                                @focus="getBrands"
                    >
                        <!-- <template slot="no-data">
                            <v-list>
                                <v-list-tile>
                                    <v-list-tile-content>
                                    <v-list-tile-title>
                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                    </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </template> -->
                    </v-combobox>

                        <div class="subheading pa-2">Didn't find your Brand?<span class="forSpanClick" @click="openBrandDialog"> click here</span> to Add</div>

                </v-card>
                <hr>
                <!-- *******************************
                     **** TITLE BLOCK ****
                **** -->

                <TitleComp
                   @title="title = $event"
                   @slug="slug = $event"
                   @highlights="highlights = $event"
                   @descriptions="descriptions = $event"
                   @keywords="keywords = $event"
                ></TitleComp>

                <!-- ******************************** -->
                <hr>
                <AmountComp
                    @amount="amount = $event"
                    @discount="discount = $event"
                    @offers="offers = $event"
                    @wholesale="wholesale = $event"
                    @previousPrice="previousPrice = $event"
                    @per="per = $event"
                ></AmountComp>

                <!-- ********************************** -->
            </v-flex>
        <v-flex xs12 lg12>
            <v-card class="pa-3 mt-3">
                <v-card-actions>
                    <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                    <v-btn block outline color="error" dark>cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
        <!-- =============================================================
            BRAND DIALOG
        ============================================================== -->
        <v-dialog
            v-model="newBrandDialog"
            scrollable
            persistent
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
        >
            <v-flex xs12 lg12 >
                <v-card class="pa-4" v-if="newBrandSuccess">
                    <v-card-title class="subheading font-weight-medium">
                        Add New Brand
                    </v-card-title>
                    <v-text-field box label="Enter New Brand" v-model="newBrand"></v-text-field>
                    <v-card-actions>

                        <v-btn outline color="success" @click="addBrand">Add</v-btn>
                        <v-btn outline color="error" @click="cancelNewBrand">cancel</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="pa-4" v-else>
                    <v-card-title class="subheading font-weight-medium">
                        {{ newBrand }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn outline color="success" @click="cancelNewBrand">ok</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-dialog>



    </v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'
import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../amt'
import RetailRentEtc from '../RetailRentEtc'
import categoryComp from '../Categories/CategoryComp'

export default {
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
        RetailRentEtc,
        categoryComp,
    },
    created() {

        // eventBus.$on('errorArrPassReply', (data) => {

        //     this.errorArrPass = data;
        // });

    },
    mixins:[MyErrorsValidatorMixin],
    data() {
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
           per: null,
        }
    },
    methods: {

        async submit () {

            await this.titleBlockValidateHere();
            await this.productFormValidatHere();
            await this.productFormCategoryValidateHere();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

            let form = new FormData();

            form.append('want_to', this.want_to);

            /* --- singel image --- */

            form.append('image', this.mainImg);


            /* --- multiple images --- */

            if (this.imgArr != null) {

                for (let i = 0; i < this.imgArr.length; i++) {

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

                for (let i = 0; i < this.highlights.length; i++) {

                    form.append('highlights[]', this.highlights[i]);

                }
            }


            /* --- descriptions --- */

            if (this.descriptions != null) {

                for (let i = 0; i < this.descriptions.length; i++) {

                    form.append('descriptions[]', JSON.stringify(this.descriptions[i]));

                }
            }

            /* --- keywords --- */

            if (this.keywords != null) {

                for (let i = 0; i < this.keywords.length; i++) {

                    form.append('keywords[]', this.keywords[i]);

                }
            }

            /* --- product model name --- */

            if (this.modelName != null) {

                form.append('modelName', this.modelName);
            }

            /* --- offers --- */

            if (this.offers != null) {

                for (let i = 0; i < this.offers.length; i++) {

                    form.append('offers[]', this.offers[i]);

                }
            }


                // form.append('root', this.rootCat.id);

                // form.append('lvl_1', this.levelOneCat.id);

                // form.append('lvl_2', this.levelTwoCat.id);

                if(this.brand != null) {

                    form.append('brand', this.brand.id);
                }

                form.append('title', this.title);

                form.append('slug', this.slug);

                /* ===   Price   === */

                if(this.amount != null) {

                    var str2 = this.amount.toString().replace(/\,/g,"");

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

                let strId = this.$route.query.str_id;

                form.append('str_id', strId);

                form.append('shareable', 0);

            let submit = {
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
                rent: this.rent,

            }

            //let submit = form;

                    console.log(submit);
                    //return;

            axios.post('/products',  form)
                .then((res) => {
                    if(res) {

                    }
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err.response);
                })
            return;
        },
        getRootCat() {

                axios.get('/rootcategories')
                    .then((response) => {
                        this.rootArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
        },
        addBrand () {

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', {name: this.newBrand})
                .then((response) => {
                    this.newBrand = response.data.success;
                    this.newBrandSuccess = false;
                    console.log(response);
                })
                .catch((errors) => {

                    console.log(errors);
                })
        },
        openBrandDialog () {

            this.brand = '';
            this.newBrandDialog = true;
        },
        cancelNewBrand () {

            this.newBrand = '';
            this.newBrandDialog = false;
            this.brandArr = [];
            this.newBrandSuccess = true;
        },
        getBrands () {

            if (this.brandArr.length == 0) {

                axios.get('/brands')
                    .then((response) => {
                        this.brandArr = response.data;
                        console.log(response);
                    })
                    .catch((errors) => {

                        console.log(errors.response);
                    })
            }
        },
        cancel() {

            this.$router.go(-1);
        },

        // ==========   Category   ==================
        // ==========================================

        selectCategory() {


            this.loading = true;

            axios.get('/readymade')
                .then((res) => {
                    console.log(res);
                    if(res) {

                        this.categoryArr = res.data;

                        this.loading = false;
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                })
                .finally(this.loading = false)
        }
    },
    watch: {
        rootCat: function() {

            axios.get('/levelonecategories')
                    .then((response) => {
                        this.levelOneArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors.response);
                    })
        },
        levelOneCat: function () {

            axios.get('/leveltwocategories')
                    .then((response) => {
                        this.levelTwoArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
        },
        radios: function() {
                 eventBus.$emit('discount', this.radios);
                 console.log(this.radios)
        },
        /* ---------------------------------------------- */
        mainImg: function () {
            console.log(this.mainImg);
        },
        imgArr: function () {
            console.log(this.imgArr);
        },
        /* ---------------------------------------------- */
        title: function () {
            console.log(this.title)
        },
        slug: function () {
            console.log(this.slug)
        },
        highlights: function () {
            console.log(this.highlights)
        },
        descriptions: function () {
            console.log(this.descriptions)
        },
        keywords: function () {
            console.log(this.keywords)
        },
        /* ---------------------------------------------- */
        amount: function () {
            console.log(this.amount)
        },
        discount: function () {
            console.log(this.discount)
        },
        offers: function () {
            console.log(this.offers)
        },
        wholesale: function () {
            console.log(this.wholesale)
        },
        previousPrice: function () {
            console.log(this.previousPrice)
        },
        per: function () {
            console.log(this.per)
        },
        category: function () {
            console.log(this.category)
        },
    }
}
</script>

<style scoped>

.sticky {
    position: sticky;
    top: 70px;
}
</style>
