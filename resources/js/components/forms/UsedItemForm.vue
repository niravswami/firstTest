<template>
    <v-flex class="mx-auto width1400" >
        <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
            <div class="headline">Used Item Upload Form</div>
        </v-card>
        <v-layout row wrap justify-space-around>

            <v-flex xs12 lg4 >

                <div class="sticky mb-3">
                    <ImagesComp
                        @mainImg="mainImg = $event"
                        @imgArr="imgArr = $event"
                    ></ImagesComp>
                </div>
            </v-flex>

            <v-flex xs12 lg7 class="background-shadow ">

                <v-card xs12 lg12 class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                          Select Categories
                    </v-card-text>

                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 lg6 class="pa-2">
                                <v-combobox
                                 v-model="fused"
                                color="orange darken-2"
                                :items="fusedCat"
                                label="Main Category"
                                box
                                item-text="name"
                                item-value="id"
                                hide-details
                                return-object
                                :loading="isLoading"
                                @focus="getFused"
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

                        </v-flex>
                        <v-flex xs12 lg6 class="pa-2">

                                <v-combobox
                                v-model="sused"
                                :items="susedCat"
                                label="Category"
                                box
                                item-text="name"
                                item-value="id"
                                color="orange darken-2"
                                hide-details

                                :disabled="fused == null"
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

                        </v-flex>
                        <!-- <v-flex xs12 lg4 class="pa-2">

                                <v-combobox
                                v-model="tused"
                                :items="tusedCat"
                                label="Sub Category"
                                box
                                item-text="name"
                                item-value="id"
                                color="orange darken-2"
                                hide-details

                                :disabled="sused == ''"
                    >
                        <template slot="no-data">
                            <v-list>
                                <v-list-tile>
                                    <v-list-tile-content>
                                    <v-list-tile-title>
                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                    </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </template>
                    </v-combobox>

                        </v-flex> -->
                    </v-layout>
                </v-card>

                <!--
                    *******************************************************************************
                    *                 *** BRAND ***
                    *******************************************************************************
                -->
                 <hr>
                    <brand-comp
                        @brand="brand = $event"
                    ></brand-comp>

                <hr>
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
                <!-- <PriceOrContactPrice></PriceOrContactPrice>
                <AmountComp></AmountComp> -->
                <v-card flat class="pb-3">
                    <v-layout row wrap justify-space-around >
                        <v-flex xs10 lg5 >

                            <v-card-text class="subheading font-weight-medium">
                                Price Details
                            </v-card-text>
                                <v-card flat class="">
                                    <v-text-field
                                        box
                                        label="Enter Amount"
                                        v-model="amount"
                                        :error-messages="errors.collect('amount')"
                                        v-validate="{required: true, regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/}"
                                        data-vv-name="amount"
                                        prepend-icon="fas fa-rupee-sign"
                                        color="orange darken-2"
                                    ></v-text-field>
                                    <!-- ^[0-9]+(\.[0-9]{2})?$ -->
                                </v-card>
                        </v-flex>
                        <v-flex xs10 lg5 >

                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12 lg12>
                <v-card class="pa-3 mt-3">
                    <v-card-actions>
                        <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                        <v-btn block outline color="error" dark @click.native="cancel">cancel</v-btn>
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
import BrandComp from '../BrandComp'

export default {
    mixins:[selectSearchRoute, MyErrorsValidatorMixin],
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
        BrandComp,
    },
    created() {

    },
    mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    data() {
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
                        required: () => "Name can not be empty",
                        max: "The name field may not be greater than 10 characters"
                        // custom messages
                    },
                    amount: {
                        required: "Amount field is required",

                        regex: 'Hint: "12000.00"'
                    },
                    }
                }
        }
    },
    methods: {
        async submit () {

            await this.useditemCategoryValidateHere();
            await this.titleBlockValidateHere();
            await this.amountValidateHere();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

            let form = new FormData();

            /* --- singel image --- */

            form.append('image', this.mainImg);

            /* --- multiple images --- */

            if (this.imgArr != null) {

                for (let i = 0; i < this.imgArr.length; i++) {

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

                form.append('title', this.title);

                form.append('slug', this.slug);

                if (this.brand != null) {

                    form.append('brand', this.brand.id);
                }

                if(this.amount != null) {

                    var str2 = this.amount.replace(/\,/g,"");

                    form.append('amount', str2);
                }

                let strId = this.$route.query.str_id;

                form.append('str_id', strId);

            let submit = {
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
                keywords: this.keywords,

            }

            //let submit = form;

                    console.log(submit);
                    //return;


            axios.post('/useditems',  form)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err.response);
                })
            return;
        },
        getFused() {

                if(this.fusedCat.length != 0) {
                    return
                } else {

                    this.isLoading = true
                    axios.get('/useditemlvlonecat')
                        .then((response) => {
                            this.fusedCat = response.data;
                            this.sused = null;
                            console.log(response);
                        })
                        .catch((errors) => {
                            console.log(errors.response);
                        })
                        .finally(() => (this.isLoading = false))
                }
        },
        cancel() {

            this.$router.go(-1);
        }
    },
    watch: {
        fused: function() {

            console.log(this.fused);

             axios.get('/useditemlvltwocat', {params: {p_id: this.fused.id}})
                    .then((response) => {
                        this.susedCat = response.data;
                        this.sused = null;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors.response);
                    })
        },
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
}
</script>

<style scoped>

.sticky {
    position: sticky;
    top: 70px;
}
</style>
