<template>
    <v-flex class="pa-3 mx-auto width1400">
        <v-card flat class="background-shadow mb-3 pa-3 text-xs-center">
            <div class="headline">Property Upload Form</div>
        </v-card>

        <v-layout row wrap justify-space-around>
            <!-- *************** -->
            <!-- Images Block -->
            <!-- *************** -->

            <v-flex xs12 sm5 md5 lg4>
                <!-- <v-flex xs12 class=" mb-3">
                        <v-card class="background-shadow  mb-3" flat>
                            <v-card-title primary-title class="display-1">
                                Upload Images
                            </v-card-title>
                            <v-img :src="mainImg" aspect-ratio="1" contain class="mb-2"></v-img>
                            <v-divider></v-divider>
                            <v-layout row wrap align-content-space-between justify-space-between ma-0 px-3 pb-3>

                                    <v-flex xs2 lg2 >
                                        <v-img :src="mainImg" aspect-ratio="1" contain></v-img>
                                    </v-flex>
                                    <v-flex xs2 lg2 >
                                        <v-img :src="mainImg" aspect-ratio="1" contain></v-img>
                                    </v-flex>
                                    <v-flex xs2 lg2 >
                                        <v-img :src="mainImg" aspect-ratio="1" contain></v-img>
                                    </v-flex>
                                    <v-flex xs2 lg2 >
                                        <v-img :src="mainImg" aspect-ratio="1" contain></v-img>
                                    </v-flex>
                                    <v-flex xs2 lg2 >
                                        <v-img :src="mainImg" aspect-ratio="1" contain></v-img>
                                    </v-flex>

                            </v-layout>
                        </v-card> -->
                <!-- <v-card class="background-shadow mb-3" flat>
                            <v-card-actions>
                                <v-btn outline  block color="orange darken-1" dark>Button</v-btn>
                            </v-card-actions>
                        </v-card> -->
                <!-- </v-flex> -->
                <div class="sticky">
                    <ImagesComp
                        @mainImg="mainImg = $event"
                        @imgArr="imgArr = $event"
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
                    <v-list two-line subheader>
                        <v-radio-group v-model="sellRent" :mandatory="true" row >
                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="0" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="sellRent = '0'">
                                    <v-list-tile-title>Sell</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="1" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="sellRent = '1'">
                                    <v-list-tile-title>Rent</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>

                    <v-card-text class="subheading font-weight-medium">
                        Category
                    </v-card-text>
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
                   @slug="slug = $event"
                   @highlights="highlights = $event"
                   @descriptions="descriptions = $event"
                   @keywords="keywords = $event"
                ></TitleComp>
                <hr>

                <!-- =======================   PRICE   ===================================== -->

                <PriceOrContactPrice
                    @radio="showPriceOrNot = $event"
                ></PriceOrContactPrice>
                <!-- <AmountCompo></AmountCompo> -->
                <v-card flat class="pb-3" >
                    <v-layout  wrap justify-space-between >
                        <v-flex xs10 lg6 class="px-3" v-if="showPriceOrNot == 1">


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

                                    <v-layout  wrap justify-space-around>
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

                        <v-flex xs10 lg6 class="px-3">
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
                <hr>

                <!-- ===   Address   ====================================== -->

                <v-flex xs12 lg12>
                    <v-card class="px-2 pb-5"  flat >

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
                                :disabled="addressNotShow == true"
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
                             <Region
                                @country="country = $event"
                                @state="state = $event"
                                @city="city = $event"
                                @area="area = $event"
                             ></Region>
                        </v-flex>

                    </v-card>
                </v-flex>






                <!-- <v-card class=" mt-3 background-shadow" flat> -->

                <!--
                            /***************************************************************************************
                            /*** Title
                            /***************************************************************************************
                            -->
                <!--  <v-flex xs12 lg12 class="px-3 pt-3">
                                 <v-text-field class="px-3"  label="Title" v-model="title"></v-text-field>
                             </v-flex>

                             <v-divider class="py-0"></v-divider> -->

                <!--
                            /***************************************************************************************
                            /*** Highlights Points
                            /***************************************************************************************
                            -->

                <!-- <v-flex xs12 lg12 class="px-3">
                                <v-card-text class="subheading font-weight-medium">
                                    Highlights
                                </v-card-text>

                                <div class="pl-4"> -->
                <!--  <v-layout row wrap>
                                            <template v-for="(val, i) in highlights"  >
                                        <v-flex xs12 :key="i">
                                                <v-card >
                                                    <v-card-text>
                                                        {{ val }}
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-btn flat icon color="pink">
                                                            <v-icon>favorite</v-icon>
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                        </v-flex>
                                            </template>
                                    </v-layout> -->
                <!-- <template v-for="(val, i) in highlights">
                                            <v-card-actions :key="i" class="pa-0"> -->
                <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                <!-- <span  style="font-size: 6px"><i class="fas fa-circle"></i></span>
                                                <v-card-text class="py-0 subheading">
                                                    {{ val }}
                                                </v-card-text>
                                                <v-btn flat icon color="pink">
                                                    <v-icon  @click="deleteHighlight(i)">close</v-icon>
                                                </v-btn>
                                            </v-card-actions>

                                    </template>
                                </div>

                                <v-text-field
                                    v-model="highlightFild"
                                    name="highlight"
                                    label="Highlight"
                                    id="id"
                                    @keyup.enter="pushHighlight"
                                    class="px-3"
                                ></v-text-field>
                                <v-card-actions>
                                    <v-btn outline  small color="success"  @click="pushHighlight">Add More</v-btn>
                                </v-card-actions>
                            </v-flex> -->


                <!-- <div class="pl-4">
                                    <ul>
                                        <li class="subheading pb-2"  v-for="(val, i) in highlights"  :key="i">
                                            {{ val }} <span class="pa-4" style="color: red;" @click="deleteHighlight(i)"><i class="fas fa-times"></i></span>
                                        </li>
                                    </ul>
                                </div> -->

                <!-- <v-divider></v-divider> -->
                <!--
                                    /***************************************************************************************
                                    /*** Descriptions
                                    /***************************************************************************************
                                    -->

                <!-- <v-flex xs12 lg12 class="pa-3">
                                        <v-card-text class="subheading font-weight-medium">
                                            Description
                                        </v-card-text> -->

                <!-- <div v-if="descriptions.length > 0"  v-for="(val, i) in descriptions" :key="i" class=""> -->
                <!-- <v-card  v-if="descriptions.length > 0"  v-for="(val, i) in descriptions" :key="i" class="my-1">
                                                <v-card-actions>

                                                    <v-layout row wrap class="px-3">
                                                            <v-flex xs12 lg4 class="px-2" >
                                                                <v-text-field
                                                                v-model="val.heading"
                                                                    label="Heading"
                                                                ></v-text-field>
                                                            </v-flex>
                                                            <v-flex xs12 lg8 class="px-2">
                                                                <v-textarea
                                                                    v-model="val.description"
                                                                    label="Description"
                                                                    auto-grow
                                                                    rows="1"
                                                                    ></v-textarea>
                                                            </v-flex>
                                                    </v-layout>
                                                    <v-btn flat icon color="pink">
                                                    <v-icon  @click="deleteDescription(i)">close</v-icon>
                                                </v-btn>
                                                </v-card-actions>

                                            </v-card> -->
                <!-- </div> -->
                <!--  <v-layout row wrap class="px-3">
                                                        <v-flex xs12 lg4 class="px-2" >
                                                            <v-text-field
                                                            v-model="heading"
                                                                label="Heading"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex xs12 lg8 class="px-2">
                                                            <v-textarea
                                                                v-model="description"
                                                                label="Description"
                                                                auto-grow
                                                                rows="1"
                                                                ></v-textarea>
                                                        </v-flex>
                                                </v-layout>

                                            <v-card-actions >
                                                <v-btn  outline small color="success" @click="pushDescription">Add More</v-btn>
                                            </v-card-actions>
                                    </v-flex>

                                    <v-divider></v-divider> -->

                <!--
                                    /***************************************************************************************
                                    /*** Keywords
                                    /***************************************************************************************
                                    -->
                <!-- <v-flex xs12 lg12  class="pa-3">
                                    <v-card-text class="subheading font-weight-medium">
                                        Keywords
                                    </v-card-text>
                                    <v-combobox
                                        v-model="keywords"
                                        :filter="filter"
                                        :items="items"
                                        hide-selected
                                        hint="Maximum 7 Keywords"
                                        persistent-hint
                                        label="Enter Keywords"
                                        multiple
                                        small-chips
                                        class="pb-3 px-3"

                                    > -->
                <!-- <template slot="no-data">
                                        <v-list-tile>
                                            <span class="subheading">Create</span>
                                            <v-chip
                                            label
                                            small
                                            >
                                            {{ search }}
                                            </v-chip>
                                        </v-list-tile>
                                        </template> -->
                <!-- <template
                                        v-if="item === Object(item)"
                                        slot="selection"
                                        slot-scope="{ item, parent, selected }"
                                        >
                                        <v-chip
                                            :selected="selected"
                                            label
                                            small
                                        >
                                            <span class="pr-2">
                                            {{ item.text }}
                                            </span>
                                            <v-icon
                                            small
                                            @click="parent.selectItem(item)"
                                            >close</v-icon>
                                        </v-chip>
                                        </template> -->
                <!-- <template
                                        slot="item"
                                        slot-scope="{ index, item, parent }"
                                        >
                                        <v-list-tile-content>
                                            <v-text-field
                                            v-if="editing === item"
                                            v-model="editing.text"
                                            autofocus
                                            flat
                                            background-color="transparent"
                                            hide-details
                                            solo
                                            @keyup.enter="edit(index, item)"
                                            ></v-text-field>
                                            <v-chip
                                            v-else
                                            dark
                                            label
                                            small
                                            >
                                            {{ item.text }}
                                            </v-chip>
                                        </v-list-tile-content>
                                        <v-spacer></v-spacer>
                                        <v-list-tile-action @click.stop>
                                            <v-btn
                                            icon
                                            @click.stop.prevent="edit(index, item)"
                                            >
                                            <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                                            </v-btn>
                                        </v-list-tile-action>
                                        </template> -->
                <!--    </v-combobox>
                            </v-flex>
                         </v-card> -->
                <!--
                            /***************************************************************************************
                            /*** Price Block
                            /***************************************************************************************
                            -->
                <!-- <v-flex xs12 lg12 class="pt-3 mb-3">
                    <v-card flat class="px-3">
                                    <v-card-text class="subheading font-weight-medium">
                                        Amount Block
                                    </v-card-text>

                                    <v-layout row wrap class="px-3">
                                        <v-flex xs12 lg8  class="px-1">
                                            <v-text-field
                                                label="Enter Amount"
                                                v-model="amount"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 lg4  class="px-1">
                                            <v-select
                                                :items="rentArr"
                                                v-model="rent"
                                                label="Rent per"
                                            ></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                </v-flex> -->
            </v-flex>
        </v-layout>
        <v-flex xs12 lg12>
            <v-card class="pa-3 mt-3">
                <v-card-actions>
                    <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                    <v-btn block outline color="error" dark>cancel</v-btn>
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

export default {
    components: {
            ImagesComp,
            AmountCompo,
            TitleComp,
            Region,
            PriceOrContactPrice,
        },
        mixins:[MyErrorsValidatorMixin],
        props: ['data'],
        data() {
            return {
                mainImg: require('../../../assets/uploadimg.png'),
                sellRent: '0',
                showPriceOrNot: '1',
                amount: null,

                /* -------------- */
                /* IMAGE BLOCK */
                /* -------------- */

                mainImg: null,
                imgArr: null,

                /* ----------- */
                /* TITLE BLOCK */
                /* ----------- */
                title: null,
                slug: null,
                highlights: null,
                descriptions: null,
                keywords: null,
                /* ----------- */
                /* ADDRESS BLOCK */
                /* ----------- */
                fullAddress: null,
                country: null,
                state: null,
                city: null,
                area: null,

                offers: [],
                offer: '',
                addressNotShow: false,
                propertyCategory: [{
                        id: 1,
                        name: 'Apartment'
                    },
                    {
                        id: 2,
                        name: 'Bungalow'
                    },
                    {
                        id: 3,
                        name: 'Farmhouse'
                    },
                    {
                        id: 4,
                        name: 'Hall'
                    },
                    {
                        id: 5,
                        name: 'House'
                    },
                    {
                        id: 6,
                        name: 'Party Plot'
                    },
                    {
                        id: 7,
                        name: 'Plot'
                    },
                    {
                        id: 8,
                        name: 'Shop'
                    },
                    {
                        id: 9,
                        name: 'Waadi'
                    },
                ],
                category: null,
                rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
                rentPer: '',
            }
        },

        watch: {
            price: function () {
                if (this.showPriceOrNot == 2) {
                    this.rentPer = null
                    this.amount = null;
                    this.offers = [];
                }
                console.log(this.showPriceOrNot)
            },
            addressNotShow: function () {
                if (this.addressNotShow == true) {
                    this.fullAddress = ''
                }
                console.log(this.addressNotShow);
            },
            country() {
                console.log(this.country)
            }
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

                /* --- SELL RENT --- */
                form.append('sellRent', this.sellRent);

                if(this.rentPer != null) {

                    form.append('rentPer', this.rentPer);
                }


                /* --- singel image --- */

                form.append('image', this.mainImg);

                /* --- multiple images --- */

                if (this.imgArr != null) {

                    for (let i = 0; i < this.imgArr.length; i++) {

                        form.append('imgs[]', this.imgArr[i]);

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

                if (this.amount != null) {

                    var str2 = this.amount.replace(/\,/g, "");

                    form.append('amount', str2);
                }


                /* --- offers --- */

                if (this.offers != []) {

                    for (let i = 0; i < this.offers.length; i++) {

                        form.append('offers[]', this.offers[i]);

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

                let strId = this.$route.query.str_id;

                form.append('str_id', strId);

                let submit = {
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
                    area: this.area,

                }

                //let submit = form;

                console.log(submit);
                //return;


                axios.post('/properties', form)
                    .then((res) => {
                        console.log(res);
                        if(res) {

                        }
                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
                return;
            },
            edit(index, item) {
                if (!this.editing) {
                    this.editing = item
                    this.index = index
                } else {
                    this.editing = null
                    this.index = -1
                }
            },
            filter(item, queryText, itemText) {
                if (item.header) return false

                const hasValue = val => val != null ? val : ''

                const text = hasValue(itemText)
                const query = hasValue(queryText)

                return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            },
            pushOffer() {

                if (this.offer !== '') {
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

                this.$router.go(-1);
            }
        },
    }

</script>

<style scoped>
.sticky {
    position: sticky;
    top: 70px;
}
</style>
