<template>
    <v-flex class="mx-auto width1400" >
        <v-layout wrap justify-space-around>
            <!-- <v-flex xs12>
                <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
                    <div class="headline">Used Item Upload Form</div>
                </v-card>
            </v-flex> -->

            <v-flex xs12 lg4 >

                <div class="sticky mb-3">
                    <ImagesComp
                        @mainImg="rawMainImg = $event"
                        :propMainImg="mainImg"
                        @imgArr="rawImgArr= $event"
                        :propimgArr="data.images "
                        @deleteImages="deleteImages = $event"
                    ></ImagesComp>
                </div>
            </v-flex>

            <v-flex xs12 lg7 class="background-shadow ">

                <v-card xs12 lg12 class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                        Categories
                    </v-card-text>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title >
                                        {{ parentCat ? parentCat.name : ''}} <span class="px-2" >></span> {{ childCat ? childCat.name : '' }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>

                        <v-flex xs12 lg12>
                            <v-checkbox
                                v-model="editCat"
                                label="Edit Category"
                                class="pl-2"
                            ></v-checkbox>

                            <div v-if="editCat">
                                <v-card-text class="subheading font-weight-medium">
                                    Select Categories
                                </v-card-text>

                                <v-layout  wrap justify-space-around>
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

                            </div>

                        </v-flex>
                </v-card>

                <!--
                    *******************************************************************************
                    *                 *** BRAND ***
                    *******************************************************************************
                -->
                 <hr>
                    <brand-comp
                        @brand="brand = $event"
                        :propBrand="brand"
                    ></brand-comp>

                <hr>
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
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'

import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../amt'
import BrandComp from '../BrandComp'

export default {
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
    mixins:[MyErrorsValidatorMixin],
    props:['data'],
    data() {
        return {
            editCat: false,

            amount: this.data.totalPrice ? this.data.totalPrice : null,
            isLoading: false,
            brand: this.data.brand ? this.data.brand : null,

            /* ----------- */
            /* CATEGORY BLOCK */
           /* ----------- */
            fusedCat: [],
            fused: null,
            susedCat: [],
            sused: null,
            tusedCat: [],
            editedFused: '',
            editedSused: '',



            parentCat: this.data.cat_lvl_one ? this.data.cat_lvl_one : null,

            childCat: this.data.cat_lvl_two ? this.data.cat_lvl_two : null,

            /* ----------- */
            /* IMAGES BLOCK */
           /* ----------- */
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
        async submit() {

            await this.useditemEditCategoryValidateHere();
            await this.titleBlockValidateHere();
            await this.amountValidateHere();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

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

                if(this.brand != null) {

                    form.append('brand', this.brand.id);
                }

                if(this.amount != null) {

                    var str2 = this.amount.toString().replace(/\,/g,"");

                    form.append('amount', str2);
                }

                let strId = this.$route.params.id;

                form.append('str_id', strId);

            let image = form;

            let prdId = this.data.id;

             let submit = {

                imgs: this.rawImgArr,

                image: this.rawMainImg,

                brand: this.brand != null ? this.brand.id : null,

                fused: this.fused != null ? this.fused.id : null,
                sused: this.sused != null ? this.sused.id : null,

                title: this.title,
                slug: this.slug,
                highlights: JSON.parse(JSON.stringify(this.highlights)),
                descriptions: JSON.parse(JSON.stringify(this.descriptions)),
                keywords: JSON.parse(JSON.stringify(this.keywords)),

                amount: this.amount,

                comp: comp,
                nop: nop,

                deleteImages: JSON.parse(JSON.stringify(this.deleteImages))

            }

            //let submit = form;

                    console.log(submit);

                    //return;
            axios.post('/useditems/' + prdId,  image)
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

                eventBus.$emit('closeEditFormDialog');
            },
    },
    watch: {
        fused: function() {

            console.log(this.fused);

            if(this.fused != null) {

                 axios.get('/useditemlvltwocat', {params: {p_id: this.fused.id}})
                        .then((response) => {
                            this.susedCat = response.data;
                            this.sused = null;
                            console.log(response.data);
                        })
                        .catch((errors) => {
                            console.log(errors.response);
                        })
            }

        },
        editCat() {
            this.fused = null;
            this.sused = null;
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
