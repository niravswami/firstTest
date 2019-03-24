<template>
    <v-flex class="mx-auto width1400" >
        <v-layout wrap justify-space-around>
            <v-flex xs12>
                <!-- <div class="mb-5"></div> -->
                <!-- <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
                    <div class="headline">Education Form</div>
                </v-card> -->
            </v-flex>
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

                <v-card  class="pa-3" flat>
                    <v-card-text class="subheading font-weight-medium">
                        Select
                    </v-card-text>
                        <v-combobox
                        class="py-3"
                        :items="catArr"
                        v-model="category"
                        :loading="isLoading"
                        box
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="School / Classes / Collage..."
                        return-object
                        color="orange darken-2"
                        prepend-icon="fas fa-chalkboard"
                        @focus="getEduCat"
                        dense
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
                <!--
                    *******************************************************************************
                    *                 *** FEES ***
                    *******************************************************************************
                -->
                <v-flex xs12 lg12>
                    <v-card flat class="px-3">
                            <v-card-text class="subheading font-weight-medium">
                                Fees Block
                            </v-card-text>
                            <v-list two-line subheader>
                                <v-radio-group v-model="showPriceOrNot" :mandatory="true" row >
                                    <v-list-tile @click="">
                                        <v-list-tile-action>
                                            <v-radio value="1" color="orange lighten-1"></v-radio>
                                        </v-list-tile-action>

                                        <v-list-tile-content @click.prevent="showPriceOrNot = '1'">
                                            <v-list-tile-title>Fees</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>

                                    <v-list-tile @click="">
                                        <v-list-tile-action>
                                            <v-radio value="2" color="orange lighten-1"></v-radio>
                                        </v-list-tile-action>

                                        <v-list-tile-content @click.prevent="showPriceOrNot = '2'">
                                            <v-list-tile-title>Contact For Fees Details</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>

                                </v-radio-group>
                            </v-list>
                        </v-card>
                </v-flex>
                <v-card flat class="pa-3">
                    <v-layout wrap>
                        <v-flex xs10 lg6 v-if="showPriceOrNot == 1">

                            <v-card-text class="subheading font-weight-medium">
                                Fees Details
                            </v-card-text>

                                <v-card flat class="pr-3">
                                        <v-text-field
                                            box
                                            label="Enter Fees"
                                            v-model="fees"
                                            :error-messages="errors.collect('fees')"
                                            v-validate="{required: true, regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/}"
                                            data-vv-name="fees"
                                            prepend-icon="fas fa-rupee-sign"
                                            color="orange darken-2"
                                        ></v-text-field>
                                            <!-- v-validate="{required: true, regex: /^[0-9]+(\.[0-9]{2})?$/}" -->

                                    <v-layout row wrap justify-space-around>
                                        <v-flex xs11 lg5>
                                            <v-select
                                                :items="feesArr"
                                                box
                                                v-model="feesper"
                                                label="Fees per"
                                                color="orange darken-2"
                                                prepend-icon="fas fa-slash"
                                                return-object
                                                item-text="name"
                                                item-value="id"
                                            ></v-select>
                                        </v-flex>

                                        <v-flex xs12 lg5>

                                        </v-flex>

                                    </v-layout>
                                </v-card>

                        </v-flex>

                        <v-flex xs10 lg6 class="">
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

export default {
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
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
            showPriceOrNot: this.data.totalPrice != null ? '1' : '2',
            isLoading: false,

            /* ----------- */
            /* CATEGORY BLOCK */
           /* ----------- */
            catArr: [],
            category: this.data.eduCategory ? this.data.eduCategory : null,

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

            /* ----------- */
            /* FEES BLOCK */
           /* ----------- */
            fees: this.data.totalPrice ? this.data.totalPrice : null,
            feesper: this.data.feesper ? this.data.feesper : null,

            keyCat: ['School','Collage', 'Tution Classes', 'Computer Classes', 'Private Tutor', 'Music Classes', 'Classical Singing', 'Classical Dance'],
            feesArr: [

                {id: 1, name: 'Year'},
                {id: 2, name: 'Semester'},
                {id: 3, name: 'Month'},

                ],
            //feesArr: ['Year','semester', 'Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month', '7 Month', '8 Month', '9 Month', '10 Month', '11 Month'],
            offers: this.data.offers ? this.data.offers : null,
            offer: '',

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
                    fees: {
                        required: "Fees field is required",

                        regex: 'Hint: "12000.00"'
                    },
                    }
                }
        }
    },
    methods: {
        async submit () {

            await this.productFormCategoryValidateHere();
            await this.titleBlockValidateHere();
            await this.educationFeesValidateHere();
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

                form.append('title', this.title);

                form.append('slug', this.slug);

                if (this.fees != null) {

                    var str2 = this.fees.toString().replace(/\,/g,"");

                    form.append('fees', str2);

                    form.append('feesPer', this.feesper.id);
                }


                let strId = this.$route.params.id;

                form.append('str_id', strId);

            let prdId = this.data.id;

            let submit = {

                imgs: this.imgArr,

                fees: this.fees,
                feesPer: this.feesper,

                category: this.cat.id,

                showPriceOrNot: this.showPriceOrNot,

                title: this.title,
                slug: this.slug,
                highlights: JSON.parse(JSON.stringify(this.highlights)),
                descriptions: JSON.parse(JSON.stringify(this.descriptions)),
                keywords: JSON.parse(JSON.stringify(this.keywords)),

                offers: JSON.parse(JSON.stringify(this.offers)),

                comp: comp,
                nop: nop,

                deleteImages: JSON.parse(JSON.stringify(this.deleteImages))

            }

            //let submit = form;

                    console.log(submit);

                    //return;


            axios.post('/education/' + prdId,  form)
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
        getEduCat() {

            if(this.catArr.length != 0) {
                return
            } else {

                 this.isLoading = true

                axios.get('/educationcategory')
                    .then((response) => {
                        this.catArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
                    .finally(() => (this.isLoading = false))

            }
        },
        pushOffer() {

            if(this.offer !== '')
                {
                    this.offers.push(this.offer)

                    this.offer = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                return;
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

        showPriceOrNot() {
                if (this.showPriceOrNot == 2) {
                    this.feesper = null
                    this.fees = null;
                }
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
