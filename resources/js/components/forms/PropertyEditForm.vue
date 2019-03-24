<template>
    <v-flex class="mx-auto width1400">
        <!-- <div class="mb-5"></div>
        <div class="mb-1"></div> -->
        <!-- <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
            <div class="headline">Property Upload Form</div>
        </v-card> -->

        <v-layout row wrap justify-space-around>
            <!-- *************** -->
            <!-- Images Block -->
            <!-- *************** -->

            <v-flex xs12 sm5 md5 lg4>
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

            <v-flex xs12 sm6 md6 lg7 class="background-shadow">
                <!--
                            /***************************************************************************************
                            /*** Category Block
                            /***************************************************************************************
                            -->
                <v-card flat class="pa-3">
                    <v-card-text class="subheading font-weight-medium">
                        Category
                    </v-card-text>
                    <v-list two-line subheader>
                        <v-radio-group v-model="sellRent" :mandatory="true" row >
                            <v-list-tile @click="sellRent = '0'">
                                <v-list-tile-action>
                                    <v-radio value="0" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="">
                                    <v-list-tile-title>Sell</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="sellRent = '1'">
                                <v-list-tile-action>
                                    <v-radio value="1" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="">
                                    <v-list-tile-title>Rent</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>

                    <v-select
                        box
                        :items="propertyCategory"
                        v-model="category"
                        size="4"
                        label="Category"
                        color="orange darken-2"
                        return-object
                        item-text="name"
                        item-value="id"
                    ></v-select>

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
                <!-- <AmountCompo></AmountCompo> -->
                <v-card flat class="pb-3" v-if="showPriceOrNot == 1">
                    <div >
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
                                                <!-- v-validate="{required: true, regex: /^[0-9]+(\.[0-9]{2})?$/}" -->

                                        <v-layout row wrap justify-space-around>
                                            <v-flex xs11 lg6 v-show="sellRent == 1">
                                                <v-select
                                                    :items="rentArr"
                                                    box
                                                    v-model="rentPer"
                                                    label="Rent per"
                                                    color="orange darken-2"
                                                    prepend-icon="fas fa-slash"
                                                ></v-select>
                                            </v-flex>

                                            <v-flex xs12 lg4>

                                            </v-flex>

                                        </v-layout>
                                    </v-card>

                            </v-flex>

                            <v-flex xs10 lg5 class="">
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

                    </div>
                </v-card>
                <hr>
                <v-flex xs12 lg12>
                    <v-card class="px-2 pb-5"  flat >

                        <!-- <PropertyAddressComp
                            :propFullAddress="fullAddress"
                            @fullAddress="fullAddress = $event"
                            :propCountry="country"
                            @country="country = $event"
                            :propState="state"
                            @state="state = $event"
                            :propCity="city"
                            @city="city = $event"
                            :propArea="area"
                            @area="area = $event"
                        ></PropertyAddressComp> -->



                        <v-card-text class="subheading font-weight-medium">
                            Address of Property
                        </v-card-text>
                        <v-flex xs12 lg12 class="px-3 pb-3">
                             <v-text-field
                             v-model="fullAddress"
                                label="Full Address"
                                box
                                hide-details
                                color="orange darken-2"
                                prepend-icon="fas fa-map-marker-alt"
                                :disabled="addressNotShow"
                            ></v-text-field>
                            <v-checkbox
                                v-model="addressNotShow"
                                color="orange darken-2"
                                hide-details
                            >
                            <div slot="label">
                                Don't Want to Show Full Address
                            </div>
                            </v-checkbox>
                        </v-flex>

                        <v-card-text class="subheading font-weight-medium">
                            Region of Property
                        </v-card-text>
                        <v-flex xs12 lg12 class="px-3 pb-3">
                                <!-- :propCountry="country"
                                :propState="state"
                                :propCity="city"
                                :propArea="area" -->
                                <v-card flat class="">
                                    <v-layout  wrap align-center>
                                        <v-flex xs2 sm1 md1 lg1>
                                            <v-icon >fas fa-city</v-icon>
                                        </v-flex>

                                        <v-flex xs10 sm11 md11 lg11>
                                            <v-card-text class="py-2 subheading ftz-16" >
                                                <span>{{ area ? area.name : 'Add Area'}}</span>
                                                <v-list-tile-sub-title>{{ city ? city.name : 'Add City' }}</v-list-tile-sub-title>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-card>

                                <v-card flat class="">
                                    <v-layout  wrap align-center>
                                        <v-flex xs2 sm1 md1 lg1>
                                            <v-icon >fas fa-flag</v-icon>
                                        </v-flex>

                                        <v-flex xs10 sm11 md11 lg11>
                                            <v-card-text class="py-2 ftz-16 subheading">
                                                <span>{{ state ? state.name : 'Add State'}}</span>
                                                <v-list-tile-sub-title>{{ country ? country.name : 'Add Country'}}</v-list-tile-sub-title>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-card>

                                <v-checkbox label="Edit Region" v-model="editRegion" color="orange darken-2"></v-checkbox>
                             <Region
                                v-if="editRegion"
                                @country="editCountry = $event"
                                @state="editState = $event"
                                @city="editCity = $event"
                                @area="editArea = $event"
                             ></Region>
                        </v-flex>

                    </v-card>
                </v-flex>
            </v-flex>
        </v-layout>
        <v-flex xs12 lg12>
            <v-card class="pa-3 mt-3">
                <v-card-actions>
                    <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                    <v-btn block outline color="error" dark @click="cancel">cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'

import ImagesComp from '../ImagesComponent'
import AmountCompo from '../amt'
import TitleComp from '../ttl'
import Region from '../RegionComponent'
import PriceOrContactPrice from '../PriceOrContactPrice'
import PropertyAddressComp from '../PropertyAddressComp'

export default {
    components: {
        ImagesComp,
        AmountCompo,
        TitleComp,
        Region,
        PriceOrContactPrice,
        PropertyAddressComp
    },
    mixins:[MyErrorsValidatorMixin],
    props:['data'],
    data() {
        return {
            mainImg: require('../../../assets/uploadimg.png'),
            sellRent: this.data.sell_rent == true ? '1' : '0' ,
            price: '1',

            showPriceOrNot: this.data.totalPrice != null ? '1' : '2',

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

            /* ----------- */
            /* ADDRESS BLOCK */
           /* ----------- */
           editRegion: false,
           fullAddress: this.data.fullAddress ? this.data.fullAddress : null,
           country: this.data.country ? this.data.country : null,
           state:  this.data.state ? this.data.state :null,
           city:  this.data.city ? this.data.city :null,
           area:  this.data.area ? this.data.area :null,

           editCountry: null,
           editState: null,
           editCity: null,
           editArea: null,

            addressNotShow: this.data.fullAddress == null ? true : false,

            propertyCategory: [
                                {id: 1, name: 'Apartment'},
                                {id: 2, name: 'Bungalow'},
                                {id: 3, name: 'Farmhouse'},
                                {id: 4, name: 'Hall'},
                                {id: 5, name: 'House'},
                                {id: 6, name: 'Party Plot'},
                                {id: 7, name: 'Plot'},
                                {id: 8, name: 'Shop'},
                                {id: 9, name: 'Waadi'},
                ],
            category: this.data.propertyCategory ? this.data.propertyCategory : null,
            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rentPer: this.data.rent_per ? this.data.rent_per : null,
            }},

            watch: {
                price: function() {
                    if(this.showPriceOrNot == 2) {
                        this.rentPer = null
                        this.amount = null;
                        this.offers = [];
                    }
                console.log(this.price)
                },
                editCountry() {
                    console.log(this.editCountry)
                },
                editState() {
                    console.log(this.editState)
                },
                editCity() {
                    console.log(this.editCity)
                },
                editArea() {
                    console.log(this.editArea)
                },

                // addressNotShow: function() {
                //     if(this.addressNotShow == true) {
                //         this.fullAddress = ''
                //     }
                //     console.log(this.addressNotShow);
                // }
            },

            methods: {
                    async submit() {

                await this.productFormCategoryValidateHere();
                await this.titleBlockValidateHere();
                await this.searviceFormAmountValidateHere();
                await this.propertyRentValidateHere();
                await this.propertyFullAddressValidateHere();
                await this.propertyRegionValidateHere();
                await this.chechForTheErrors();

                if (!this.errorArrPass) {

                    // this.errorDialog = true;

                    return;
                }

                let form = new FormData();

                form.append('_method', 'PUT');

                /* --- SELL RENT --- */
                if(this.sellRent != null) {

                    form.append('sellRent', this.sellRent);
                }

                if(this.rentPer != null) {

                    form.append('rentPer', this.rentPer);
                }

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

                if(this.deleteImages !=null) {

                    for (let i = 0; i < this.deleteImages.length; i++) {

                        form.append('deleteImages[]', this.deleteImages[i]);

                    }
                }

                /* --- Categories --- */

                    form.append('propertyCategory', this.category.id);


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

                    /* ===   Price   ==== */


                    form.append('showPriceOrNot', this.showPriceOrNot);

                    if(this.amount != null) {

                        var str2 = this.amount.toString().replace(/\,/g,"");

                        form.append('amount', str2);
                    }

                    /* --- offers --- */

                if (this.offers != []) {

                    for (let i = 0; i < this.offers.length; i++) {

                        form.append('offers[]', this.offers[i]);

                    }
                }

                    /* --- region --- */

                if (this.fullAddress != null) {

                    form.append('fullAddress', this.fullAddress);
                }

                form.append('addressNotShow', this.addressNotShow);

                if(this.editCountry != null) {

                    form.append('country_id', this.editCountry);
                }
                if(this.editState != null) {

                    form.append('state_id', this.editState);
                }
                if(this.editCity != null) {

                    form.append('city_id', this.editCity);
                }
                if(this.editArea != null) {

                    form.append('area_id', this.editArea);
                }

                 let strId = this.$route.params.id;

                form.append('str_id', strId);

                let prdId = this.data.id;

                let submit = {

                    sellRent: this.sellRent,
                    category: this.category.id,

                    addressNotShow: this.addressNotShow,

                    imgs: this.rawImgArr,

                    title: this.title,
                    slug: this.slug,
                    highlights: JSON.parse(JSON.stringify(this.highlights)),
                    descriptions: JSON.parse(JSON.stringify(this.descriptions)),
                    keywords: JSON.parse(JSON.stringify(this.keywords)),

                    amount: this.amount,
                    offers: JSON.parse(JSON.stringify(this.offers)),

                    comp: comp,
                    nop: nop,

                    deleteImages: JSON.parse(JSON.stringify(this.deleteImages)),

                    fullAddress: this.fullAddress,
                    country: this.editCountry,
                    state: this.editState,
                    city: this.editCity,
                    area: this.editArea,

                }

                //let submit = form;

                        console.log(submit);
                    //return;


                axios.post('/properties/' + prdId, form)
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
                edit (index, item) {
                    if (!this.editing) {
                    this.editing = item
                    this.index = index
                    } else {
                    this.editing = null
                    this.index = -1
                    }
                },
                filter (item, queryText, itemText) {
                    if (item.header) return false

                    const hasValue = val => val != null ? val : ''

                    const text = hasValue(itemText)
                    const query = hasValue(queryText)

                    return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
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
     }

</script>

<style scoped>
.sticky {
    position: sticky;
    top: 70px;
}
</style>
