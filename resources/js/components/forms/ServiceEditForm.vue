<template>
    <v-flex class=" mx-auto width1400 " >
         <!-- <div class="mb-5"></div> -->
        <!--<v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
            <div class="headline">Service / Business Edit Form</div>
        </v-card> -->
        <v-layout row wrap justify-space-around >

            <v-flex xs12 lg4 >
                <div class="sticky">
                        <ImagesComp
                            @mainImg="rawMainImg = $event"
                            :propMainImg="mainImg"
                            @imgArr="rawImgArr= $event"
                            :propimgArr="data.images "
                            @deleteImages="deleteImages = $event"
                    ></ImagesComp>
                </div>
            </v-flex>

            <v-flex xs12 lg7 class="background-shadow">

                <!--
                    *******************************************************************************
                    *                 *** CATEGORY ***
                    *******************************************************************************
                -->

                <v-card  class="pa-3" flat>
                    <v-card-text class="subheading font-weight-medium">
                        Select Service / Business
                    </v-card-text>
                        <v-combobox
                            class="py-3"
                            :items="categories"
                            v-model="category"
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
                </v-card>
                <hr>

                <!--
                    *******************************************************************************
                    *                 *** BRAND / COMPANY ***
                    *******************************************************************************
                -->
                <!-- <brand-comp
                    @brand="brand = $event"
                    :propBrand="brand"
                ></brand-comp>
                <hr> -->
                <!--
                    *******************************************************************************
                    *                 *** TITLE ***
                    *******************************************************************************
                -->
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
                <hr>
                <!--
                    *******************************************************************************
                    *                 *** PRICE OR CONTACT FOR PRICE ***
                    *******************************************************************************
                -->
                <PriceOrContactPrice
                    @radio="showPriceOrNot = $event"
                    :propShowPriceOrNot="showPriceOrNot"
                ></PriceOrContactPrice>

                <!--
                    *******************************************************************************
                    *                 *** PRICE DETAILS ***
                    *******************************************************************************
                -->

                <v-card flat class="pb-3">

                    <v-layout  wrap justify-space-between>
                        <v-flex xs12 lg6 class="px-3" v-if="showPriceOrNot == '1'">
                            <v-card-text class="subheading font-weight-medium">
                                Price Details
                            </v-card-text>
                            <v-text-field
                                box
                                label="Enter Amount"
                                :error-messages="errors.collect('amount')"
                                data-vv-name="amount"
                                v-validate="{required: true, regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/}"
                                v-model="amount"
                                prepend-icon="fas fa-rupee-sign"
                                color="orange darken-2"
                            ></v-text-field>
                                <!-- v-validate="{required: true, regex: /^[0-9]+(\.[0-9]{2})?$/}" -->
                        </v-flex>

                        <v-flex xs12 lg6 class="px-3">
                            <v-card-text class="subheading font-weight-medium">
                                Offers
                            </v-card-text>

                                <template v-for="(val, i) in offers">
                                    <v-card-actions :key="i" class="pa-0">
                                        <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                                        <span style="font-size: 14px; color: #ef6c3c"><i class="fas fa-tag"></i></span>
                                        <v-card-text class="py-0 subheading">
                                            {{ val }}
                                        </v-card-text>
                                        <v-btn flat icon color="pink">
                                            <v-icon @click="deleteOffer(i)">close</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </template>
                                <v-flex xs12>
                                    <v-text-field box v-model="offer" label="Offer" @keyup.enter="pushOffer" color="orange darken-2" prepend-icon="fas fa-tag"></v-text-field>
                                </v-flex>

                                <v-card-actions>
                                    <v-btn outline small color="success" @click="pushOffer">Add More</v-btn>
                                </v-card-actions>

                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
             <v-flex xs12 lg12>
                <v-card class="pa-3 mt-3">
                    <v-card-actions>
                        <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                        <v-btn block outline color="error" dark @click="cancel">cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'
import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../amt'
import PriceOrContactPrice from '../PriceOrContactPrice'
import BrandComp from '../BrandComp'

export default {
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
        PriceOrContactPrice,
        BrandComp,
    },
     beforeCreate() {
        eventBus.$emit('discountfield', false);
    },
    created() {
    },
    mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    mixins:[ MyErrorsValidatorMixin],
    props:['data'],
    data() {
        return {

            showPriceOrNot: this.data.totalPrice != null ? '1' : '2' ,

            /* -------------- */
            /* -- CATEGORY -- */
            /* ------------ */
            categories: [],
            valuesCat: [],
            category: this.data.serviceCat ? this.data.serviceCat : null,
            isLoading: false,

            /* -------------- */
            /* -- IMAGES -- */
            /* ------------ */
            mainImg: this.data.image ? this.data.image : null,
            imgArr: this.data.images ? this.data.images : null,
            rawImgArr: null,
            rawMainImg: null,
            deleteImages: null,

            /* ----------- */
            /* TITLE BLOCK */
           /* ----------- */

            title: this.data.title ? this.data.title : null,
            slug: this.data.slug ? this.data.slug : null,
            highlights: this.data.highLights ? this.data.highLights : null,
            descriptions: this.data.description ? this.data.description : null,
            keywords: this.data.keywords ? this.data.keywords : null,

            /* -------------- */
            /* -- AMOUNT -- */
            /* ------------ */
            amount: this.data.totalPrice ? this.data.totalPrice : null,
            offer: '',
            offers: this.data.offers ? this.data.offers : [],

            /* -------------- */
            /* -- Company -- */
            /* ------------ */
            brand: this.data.brand ? this.data.brand : null,

            dictionary: {
                attributes: {
                    email: "E-mail Address"
                    // custom attributes
                },
                custom: {
                    name: {
                        required: () => "Name can not be empty",
                        max: "The name field may not be greater than 10 characters"
                        // custom messages
                    },
                    amount: {
                        required: "Amount field is required",

                        regex: 'Hint: "10.00"'
                    },
                    contact_email: {

                        }
                    }
                }
        }
    },
    methods: {
        async submit () {

            await this.titleBlockValidateHere();
            await this.searviceFormAmountValidateHere();
            await this.serviceFormCategoryValidateHere();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

            //let submit = form;

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

                form.append('showPriceOrNot', this.showPriceOrNot);

                form.append('category', this.category.id);

                //form.append('brand', this.brand.id);

                form.append('title', this.title);

                form.append('slug', this.slug);

                if(this.amount != null) {

                    var str2 = this.amount.toString().replace(/\,/g,"");

                    form.append('amount', str2);
                }

                let strId = this.$route.params.id;

                form.append('str_id', strId);

            let image = form;

            let prdId = this.data.id;

            let submit = {
                showPriceOrNot: this.showPriceOrNot,

                image: this.rawMainImg,
                imgs: this.rawImgArr,

                category: this.category,

                //brand: this.brand.id,

                title: this.title,
                slug: this.slug,
                highlights: JSON.parse(JSON.stringify(this.highlights)),
                descriptions: JSON.parse(JSON.stringify(this.descriptions)),
                keywords: JSON.parse(JSON.stringify(this.keywords)),

                amount: this.amount,
                offers: JSON.parse(JSON.stringify(this.offers)),

                comp: comp,
                nop: nop,

                deleteImages: JSON.parse(JSON.stringify(this.deleteImages))

            }

                    console.log(submit);
                    //return ;


            axios.post('/serviceandbusiness/' + prdId,  image)
                .then((res) => {
                    console.log(res);

                    if (res) {

                        eventBus.$emit('closeEditFormDialog', this.data.what);
                        eventBus.$emit('infoDialog', {suc: res.data.success});
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                })
            return;
        },
            /* ---------------------------------------------------------------------------------------- */
            /*                                   -- CATEGORIES --                                         */
            /* -------------------------------------------------------------------------------------- */
        getCategories() {
            if(this.categories.length != 0) {
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
            /* ---------------------------------------------------------------------------------------- */
            /*                                   -- OFFERS --                                         */
            /* -------------------------------------------------------------------------------------- */
        pushOffer() {

            if(this.offer !== '')
                {
                    this.offers.push(this.offer)

                    this.offer = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                return;
                console.log(this.offer);
        },
        deleteOffer(index) {

            const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.offers.splice(index, 1);
                }
                return;
        },
        cancel() {

            eventBus.$emit('closeEditFormDialog');
        },
    },
    watch: {
        cat: function() {
            if(this.cat != null || this.cat != '') {

                console.log(this.cat.id)
            } else {
                return
            }
        },

        rawImgArr() {
            console.log(this.rawImgArr);
        }
    }
}
</script>

<style scoped>

.sticky {
    position: sticky;
    top: 70px;
}
</style>
