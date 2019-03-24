<template>
<v-flex xs12 lg12>

        <!-- <v-container pa-0 grid-list-md> -->
    <v-layout wrap justify-space-around>


        <!-- <v-flex xs12 lg12>
            <h1>Product Edit Form</h1>
        </v-flex> -->
        <!-- <div class="mb-5"></div> -->
        <v-flex xs12 lg4>
            <div class="sticky mb-3" v-if="invMatch">
                <ImagesComp
                    @mainImg="rawMainImg = $event"
                    :propMainImg="mainImg"
                    @imgArr="rawImgArr= $event"
                    :propimgArr="data.images "
                    @deleteImages="deleteImages = $event"
                ></ImagesComp>
            </div>

            <div class="sticky mb-3" v-else>
                <v-card flat class="background-shadow ">
                    <v-layout wrap>
                        <v-flex xs6 lg6 class="pa-1">
                            <v-img :src="mainImg"></v-img>
                        </v-flex>
                            <template v-for="(img, i) in imgArr">
                                <v-flex xs6 lg6 class="pa-1" :key="i">
                                    <v-img :src="img"></v-img>
                                </v-flex>
                            </template>
                        <!-- <span v-if="imgArr">
                        </span> -->
                    </v-layout>
                </v-card>
            </div>
        </v-flex>
        <v-flex xs12 lg7 class="background-shadow ">


                <v-flex xs12 lg12 v-if="!invMatch && !prcMatch">
                    <v-alert type="error" :value="true">
                        Product Was Not Uploaded From This Storeview, So Can't Edit But You Can Create New Price For Your Storeview.
                    </v-alert>

                </v-flex>

                <div v-if="catp && invMatch">
                    <!-- <hr> -->
                    <v-card xs12 lg12 class="" flat>
                        <v-card-text class="subheading font-weight-medium">
                            Select Categories
                        </v-card-text>

                        <v-list>
                            <v-layout  wrap >
                                <div  v-for="(val, i) in catp" :key="i" >
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title >{{ val.name }} <span class="pl-2" v-if="catp.length !== i+1">></span></v-list-tile-title>

                                        </v-list-tile-content>
                                    </v-list-tile>
                                </div>
                            </v-layout>
                        </v-list>

                        <v-flex xs12 lg12 >
                            <v-checkbox
                                v-model="editCat"
                                label="Edit Category"
                                class="pl-2"
                            ></v-checkbox>
                            <v-flex xs12 lg12 v-if="editCat">
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
                        </v-flex>


                        <!-- <v-layout  wrap justify-space-around>
                            <v-flex xs12 lg4 class="pa-2">
                                <v-combobox
                                v-model="rootCat"
                                color="orange darken-2"
                                :items="rootArr"
                                label="Main Category"
                                box
                                item-text="name"
                                item-value="id"
                                hide-details
                                dense
                                @focus="getRootCat"
                        >
                        </v-combobox>



                            </v-flex>
                            <v-flex xs12 lg4 class="pa-2">

                                    <v-combobox
                                    v-model="levelOneCat"
                                    :items="levelOneArr"
                                    label="Category"
                                    box
                                    item-text="name"
                                    item-value="id"
                                    color="orange darken-2"
                                    hide-details
                                    dense
                                    :disabled="rootCat == ''"
                                    @focus="getLvlOneCat"
                        >
                        </v-combobox>

                            </v-flex>
                            <v-flex xs12 lg4 class="pa-2">

                                    <v-combobox
                                    v-model="levelTwoCat"
                                    :items="levelTwoArr"
                                    label="Sub Category"
                                    box
                                    item-text="name"
                                    item-value="id"
                                    color="orange darken-2"
                                    hide-details
                                    dense
                                    :disabled="levelOneCat == ''"
                                    @focus="getLvlTwoCat"
                        >
                        </v-combobox>

                            </v-flex>
                        </v-layout> -->
                    </v-card>

                </div>

                <!-- ===   SERVICE CATEGORY ======================================= -->

                <!-- <div v-if="serviceCat">
                    <hr>
                    <v-card  class="pa-3" flat>
                        <v-card-text class="subheading font-weight-medium">
                            Select Service / Business
                        </v-card-text>
                            <v-combobox
                                class="py-3"
                                :items="serviceCatArr"
                                v-model="serviceCat"
                                dense
                                box
                                hide-no-data
                                hide-details
                                item-text="name"
                                item-value="id"
                                label="Service / Business Category"
                                @focus="getCategories"
                                return-object
                                color="orange darken-2"
                                prepend-icon="fas fa-briefcase"
                                no-data-text
                                :loading="isLoading"
                            >

                        </v-combobox>
                    </v-card>
                </div> -->

            <div v-if="invMatch && brand">
                <hr>

                <BrandComp
                    @brand="brand = $event"
                    :propBrand="brand"
                ></BrandComp>
            </div>
                 <!-- ==================================================================================
                        TITLE BLOCK
                 =================================================================================== -->
                <div v-if="invMatch">
                 <hr>

                    <TitleComp

                        @title="title = $event"
                        :ttl="title"
                        @slug="slug = $event"
                        :propSlug="slug"
                        @highlights="highlights = $event"
                        :prpHighLights="highlights"
                        @descriptions="descriptions = $event"
                        :prpDescriptions="descriptions"
                        @keywords="keywords = $event"
                        :prpKeywords="keywords"
                    ></TitleComp>
                </div>

                <v-flex xs12 lg12 class="pa-1">

                    <v-card flat class="pa-3" v-if="!invMatch">
                        <v-flex xs12 lg12 class="py-2">
                            <span class="title headFontColor"> {{ title }} </span>
                            <!-- <span class="headline headFontColor">This is My First Inventory Product</span> -->
                        </v-flex>

                        <v-divider></v-divider>

                        <v-flex xs12 class="py-2">
                            <v-layout wrap>
                                <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                    Brand
                                </v-flex>
                                <v-flex xs9 class="subheading font-weight-medium fontColor">
                                    {{ brand != null ? brand.name : 'no brand' }}
                                </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                        </v-flex>

                        <v-flex xs12 class="py-2">
                            <v-layout wrap>
                                <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                    Category
                                </v-flex>

                                <v-flex xs9>
                                    <template v-for="(val, i) in catp" >
                                        <span class="subheading font-weight-medium fontColor" :key="i">{{ val.name }} <span class="pl-2" v-if="catp.length !== i+1">></span></span>
                                    </template>
                                </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                        </v-flex>


                        <v-flex xs12 class="py-2">
                            <div class="subheading pb-2 font-weight-medium headFontColor">
                                Highlights
                            </div>

                            <v-layout wrap>
                                <v-flex xs6 lg6 tag="li" class="pt-2 pr-3 subheading fontColor" v-for="(high, i) in highlights"
                                    :key="i">
                                    {{ high }}
                                </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                        </v-flex>

                        <v-flex xs12 lg12 class="py-2">
                            <div class="subheading pb-2 font-weight-medium headFontColor">
                                Description
                            </div>

                            <v-flex xs12 class="pb-2" v-for="(val, i) in descriptions" :key="i">
                                <v-layout wrap>
                                    <v-flex xs3 class="subheading font-weight-medium fontColor">
                                        {{ val.heading }}
                                    </v-flex>
                                    <v-flex xs9 class="subheading fontColor">
                                        {{ val.description }}

                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                    </v-card>


                    <v-card flat class="pa-3" v-if="!prcMatch">
                    <v-btn outline block color="success" dark @click="createPrice">Create price</v-btn>
                    <v-divider></v-divider>
                        <v-flex xs12 lg12 class="pa-1">

                            <div class="subheading pb-2 font-weight-medium headFontColor">
                                Price Details
                            </div>
                            <v-layout wrap>
                                <v-flex xs12 lg12>
                                    <v-flex xs12>
                                        <v-layout wrap>
                                            <v-flex xs3>
                                                <div class="subheading pb-2 font-weight-medium headFontColor">
                                                    price:
                                                </div>
                                            </v-flex>
                                            <v-flex xs9>
                                                <div class="subheading pb-2 font-weight-medium fontColor">
                                                    {{ amount }} <span v-if="per">/ {{ per }} </span>
                                                </div>
                                            </v-flex>
                                        </v-layout>

                                    </v-flex>
                                    <v-flex xs12 v-if="previousPrice">
                                        <v-layout wrap>
                                            <v-flex xs3>
                                                <div class="subheading pb-2 font-weight-medium headFontColor">
                                                    Previous Price:
                                                </div>
                                            </v-flex>
                                            <v-flex xs9>
                                                <div class="subheading pb-2 font-weight-medium fontColor">
                                                    {{ previousPrice }}
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 v-if="discount">
                                        <v-layout wrap>
                                            <v-flex xs3>
                                                <div class="subheading pb-2 font-weight-medium headFontColor">
                                                    discount:
                                                </div>
                                            </v-flex>
                                            <v-flex xs9 class="subheading pb-2 font-weight-medium fontColor">
                                                <div>
                                                    {{ discount }} %
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12>
                                        <v-layout wrap>
                                            <v-flex xs3>
                                                <div class="subheading pb-2 font-weight-medium headFontColor">
                                                    offers:
                                                </div>
                                            </v-flex>
                                            <v-flex xs9>
                                                <div >
                                                    <ul>
                                                        <v-layout wrap >
                                                            <v-flex xs12   v-for="val in offers" :key="val">
                                                                <li class="subheading font-weight-medium fontColor">
                                                                    <span class=""></span>{{ val }}
                                                                </li>
                                                            </v-flex>
                                                        </v-layout>
                                                    </ul>
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-card>
                </v-flex>

                <!-- ******************************** -->

                <div v-show="prcMatch">
                    <v-divider></v-divider>

                    <RetailRentEtc
                        v-show="RentRetainHide"
                        @radios="want_to = $event"
                        :propWantto="want_to"
                    ></RetailRentEtc>

                    <AmountComp
                        @amount="amount = $event"
                        :prpAmount="amount"
                        @discount="discount = $event"
                        :prpDiscount="discount"
                        @offers="offers = $event"
                        :prpOffers="offers"
                        @wholesale="wholesale = $event"
                        @previousPrice="previousPrice = $event"
                        :prpPreviousPrice="previousPrice"
                        @per="per = $event"
                        :propPer="per"
                    ></AmountComp>
                </div>


                <!-- ********************************** -->
                <div v-if="fullAddress != null">
                    <hr>
                    <PropertyAddressComp
                        :propFullAddress="fullAddress"
                        :propCountry="country"
                        :propState="state"
                        :propCity="city"
                        :propArea="area"
                    ></PropertyAddressComp>

                </div>


        </v-flex>
        <v-flex xs12 lg12>
            <v-card class="pa-3 mt-3">
                <v-card-actions>
                    <v-btn v-if="upBtn" block outline color="success" dark @click="submit">update</v-btn>
                    <v-btn v-if="newPrice" block outline color="success" dark @click="createNewprice">Create Price</v-btn>
                    <v-btn block outline color="error" dark @click="cancel">cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
        <!-- </v-container> -->
        <!-- =============================================================
            BRAND DIALOG
        ============================================================== -->
        <!-- <v-dialog
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

        </v-dialog> -->
</v-flex>
</template>

<script>
//import { titleBlockMixin } from '../../titleblockmixin.js'
import { eventBus } from '../../app.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'
import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../AmountComp'
import RetailRentEtc from '../RetailRentEtc'
import PropertyAddressComp from '../PropertyAddressComp'
import CategoryComp from '../Categories/CategoryComp'
import BrandComp from '../BrandComp'

export default {
    //mixins: [titleBlockMixin],
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
        RetailRentEtc,
        PropertyAddressComp,
        CategoryComp,
        BrandComp,
    },
    created() {
        eventBus.$on('editProductId', (data) => {

             //console.log(data)

        });
        eventBus.$on('saveEdit', (data) => {
            return this.submit();

        });
        eventBus.$on('invPrcMatch', (data) => {

            console.log(data)

            this.invMatch = data.invMatch;
            this.prcMatch = data.prcMatch;

        });
    },
    mounted() {
        eventBus.$emit('retailRent', this.data.want_to);

    },
    mixins:[MyErrorsValidatorMixin],
    props: ['data', 'propInvPrcMatch'],
    data() {
        return {

            invMatch : this.propInvPrcMatch ? this.propInvPrcMatch.invMatch : false,
            prcMatch : this.propInvPrcMatch ? this.propInvPrcMatch.prcMatch : false,
            upBtn : this.propInvPrcMatch ? this.propInvPrcMatch.upBtn : false,
            RentRetainHide : false,

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
            isLoading: false ,

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
           fullAddress: this.data.fullAddress ? this.data.fullAddress :  null,
           country: this.data.country ? this.data.country :  null,
           state: this.data.state ? this.data.state :  null,
           city: this.data.city ? this.data.city :  null,
           area: this.data.area ? this.data.area :  null,
        }
    },
    methods: {
        async submit () {

            await this.titleBlockValidateHere();
            await this.productFormValidatHere();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

            //eventBus.$emit('spinner', true)

            let form = new FormData();

            form.append('_method', 'PUT');

            /* --- singel image --- */

            if(this.rawMainImg != null) {

                form.append('image', this.rawMainImg);
            }

            /* --- multiple images --- */

            let comp = [];

            let nop = []

            if (this.rawImgArr != null) {

                for (let i = 0; i < this.rawImgArr.length; i++) {

                    form.append('imgs[]', this.rawImgArr[i]);

                }

                if(this.imgArr != null) {

                    for (let i = 0; i < this.imgArr.length; i++) {

                        var str = this.imgArr[i];
                        var n = str.indexOf("data");;

                        if(n === 0) {
                            console.log(n)

                            comp.push(str)
                        } else {

                            nop.push(str)

                            form.append('compareimgs[]', str);
                        }
                    }
                }

            }

            if(this.deleteImages !=null) {

                for (let i = 0; i < this.deleteImages.length; i++) {

                    form.append('deleteImages[]', this.deleteImages[i]);

                }
            }

            /* --- Category --- */

            if (this.category != null) {

                for (let i = 0; i < this.category.length; i++) {

                    form.append('category[]', this.category[i]);

                }
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

            /* --- offers --- */

            if (this.offers != null) {

                for (let i = 0; i < this.offers.length; i++) {

                    form.append('offers[]', this.offers[i]);

                }
            }

                form.append('want_to', this.want_to);

                if(this.brand != null) {

                    form.append('brand', this.brand.id);
                }

                form.append('title', this.title);

                form.append('slug', this.slug);

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

                let strId = this.$route.params.id;

                form.append('str_id', strId);


            let image = form;

            let submit = {
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

                str_id: strId,

            }

            //let submit = form;

                    console.log(submit);
                    let prdId = this.data.id;

                //return;

                axios.post('/products/'+ prdId,  image)
                    .then((res) => {
                        console.log(res);
                        if (res) {
                            eventBus.$emit('closeEditFormDialog', this.data.what);
                            eventBus.$emit('infoDialog', {suc: res.data.success});
                        }
                        if (res) {

                        }
                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
                    .finally(() => (eventBus.$emit('spinner', false)));
            return;
        },

        createPrice() {

            // eventBus.$emit('retailRent', this.want_to);
            if(!this.newPrice) {
                // console.log(this.want_to)
                this.prcMatch = true;

                this.newPrice = true;


                return;
            }

            this.newPrice = false;
            this.prcMatch = false;

        },

        createNewprice() {

            let form = new FormData();

            form.append('prd_id', this.data.id);

            form.append('str_id', this.$route.params.id);

            form.append('want_to', this.want_to);

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

            /* --- offers --- */

            if (this.offers != null) {

                for (let i = 0; i < this.offers.length; i++) {

                    form.append('offers[]', this.offers[i]);

                }
            }

            let submit = {
                want_to: this.want_to,

                amount: this.amount,
                discount: this.discount,
                offers: this.offers,
                previousPrice: this.previousPrice,
                per: this.per,

                str_id: this.$route.params.id,

            }

            console.log(submit);
            // return;

            axios.post('/price', form)
                .then((res) => {

                    console.log(res);
                })
                .catch((err) => {

                    console.log(err.response);
                })
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
        addBrand () {

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', {name: this.newBrand})
                .then((response) => {
                    this.newBrand = response.data.success;
                    this.newBrandSuccess = false;
                    console.log(response);
                })
                .catch((errors) => {

                    console.log(errors.response);
                })
        },
        openBrandDialog () {

            //this.brand = '';
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

            this.invMatch = false;
            this.prcMatch = false;

            this.upBtn = false;
            this.newPrice = false;

            eventBus.$emit('closeEditFormDialog');
        },
        /* ---------------------------------------------------------------------------------------- */
            /*                                   -- CATEGORIES --                                         */
            /* -------------------------------------------------------------------------------------- */
        getCategories() {
            if(this.serviceCatArr.length != 0) {
                return
            } else {

                 this.isLoading = true

                axios.get('/servicesandbusinessescategories')
                    .then((response) => {
                        this.categories = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors.response);
                    })
                    .finally(() => (this.isLoading = false))

            }
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
                    this.loading = false;
                    console.log(err.response);
                })
                // .finally(this.loading = false)
        }
    },
    computed:{

    },
    watch: {
        // rootCat: function() {

        //     this.getLvlOneCat();
        // },
        // levelOneCat: function () {

        //     this.getLvlTwoCat();
        // },
        want_to() {
                //  eventBus.$emit('discount', this.want_to);
                 console.log(this.want_to)
        },
        /* =========================================== */
        mainImg: function () {
            console.log(this.mainImg);
        },
        /* imgArr: function () {
            console.log(this.imgArr);
        }, */
        rawImgArr: function () {
            console.log(this.rawImgArr);
        },
        deleteImages: function () {
            console.log(this.deleteImages);
        },
        /* =========================================== */

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
        /* =========================================== */
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
    }
}
</script>

<style scoped>
.sticky {
    position: sticky;
    top: 70px;
}
</style>

