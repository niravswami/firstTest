<template>
    <v-flex class="pa-3 mx-auto width1400" >
        <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
            <div class="headline">Service / Business Upload Form</div>
        </v-card>
        <v-layout row wrap justify-space-around>

            <v-flex xs12 lg4 >
                <div class="sticky">
                    <ImagesComp
                        @mainImg="mainImg = $event"
                        @imgArr="imgArr = $event"
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

                    <div class="subheading pa-2">Didn't find your Service / Business?<span class="forSpanClick" @click="openServiceDialog"> click
                            here</span> to Add</div>
                    <v-dialog
                        v-model="newServiceDialog"
                        scrollable
                        persistent
                        :overlay="false"
                        max-width="500px"
                        transition="dialog-transition"
                    >
                        <v-flex xs12 lg12 >
                            <v-card class="pa-4" v-if="newServiceSuccess">
                                <v-card-title class="subheading font-weight-medium">
                                    Add New Service / Business
                                </v-card-title>
                                <v-text-field box label="Enter New Service / Business" v-model="newService"></v-text-field>
                                <v-card-actions>

                                    <v-btn outline color="success" @click="addService">Add</v-btn>
                                    <v-btn outline color="error" @click="cancelNewService">cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card class="pa-4" v-else>
                                <v-card-title class="subheading font-weight-medium">
                                    {{ newService }}
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn outline color="success" @click="cancelNewService">ok</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>

                    </v-dialog>
                </v-card>
                <hr>

                <!--
                    *******************************************************************************
                    *                 *** BRAND / COMPANY ***
                    *******************************************************************************
                -->
                <!-- <brand-comp
                    @brand="brand = $event"
                ></brand-comp>
                <hr> -->
                <!--
                    *******************************************************************************
                    *                 *** TITLE ***
                    *******************************************************************************
                -->
                <TitleComp
                   @title="title = $event"
                   @slug="slug = $event"
                   @highlights="highlights = $event"
                   @descriptions="descriptions = $event"
                   @keywords="keywords = $event"
                ></TitleComp>
                <hr>
                <!--
                    *******************************************************************************
                    *                 *** PRICE OR CONTACT FOR PRICE ***
                    *******************************************************************************
                -->
                <PriceOrContactPrice
                    @radio="showPriceOrNot = $event"
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
                        <v-btn block outline color="error" dark>cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { selectSearchRoute } from '../../selectproductmixin.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'
import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../amt'
import PriceOrContactPrice from '../PriceOrContactPrice'
import BrandComp from '../BrandComp'

export default {
    mixins:[selectSearchRoute, MyErrorsValidatorMixin],
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
    data() {
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

            /* --- singel image --- */

            form.append('image', this.mainImg);

            /* --- multiple images --- */

            if (this.imgArr != null) {

                for (let i = 0; i < this.imgArr.length; i++) {

                    form.append('imgs[]', this.imgArr[i]);

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

                    var str2 = this.amount.replace(/\,/g,"");

                    form.append('amount', str2);
                }

                let strId = this.$route.query.str_id;

                form.append('str_id', strId);

            let submit = {

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
                offers: JSON.parse(JSON.stringify(this.offers)),

            }

               console.log(submit);

               //return;


            axios.post('/serviceandbusiness',  form)
                .then((res) => {
                    console.log(res);
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

                 this.forceToGetCategories();

            }
        },

        forceToGetCategories() {

            this.isLoading = true

                axios.get('/servicesandbusinessescategories')
                    .then((response) => {
                        this.categories = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
                    .finally(() => (this.isLoading = false));
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
        addService () {

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            axios.post('/servicesandbusinessescategories', {name: this.newService})
                .then((response) => {
                    if(response) {

                        this.newService = response.data.success;
                        this.forceToGetCategories();
                        this.newServiceSuccess = false;
                        console.log(response);
                    }
                })
                .catch((errors) => {

                    console.log(errors.response);
                })

        },
        openServiceDialog () {

            this.Service = '';
            this.newServiceDialog = true;
        },
        cancelNewService () {

            this.newService = '';
            this.newServiceDialog = false;
            this.newServiceSuccess = true;
        },
        cancel() {

            this.$router.go(-1);
        }
    },
    watch: {
        cat: function() {
            if(this.cat != null || this.cat != '') {

                console.log(this.cat.id)
            } else {
                return
            }
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
