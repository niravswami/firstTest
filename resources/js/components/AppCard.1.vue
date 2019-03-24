<template>
    <v-layout  wrap fill-height>
        <v-flex xs6  sm3  md3 lg3 pa-1 pb-3 v-for="(val, i) in info" :key="i">
            <v-card :class="{cardCheck: edit, 'px-2': edit }" flat >
                <!-- <v-layout wrap v-if="propOwner">
                    <v-flex xs12 class="text-xs-right py-3">
                    </v-flex>
                </v-layout> -->
                <v-card-actions v-if="propOwner">
                    <v-checkbox v-if="edit" v-model="cardCheck" :value="val"></v-checkbox>

                    <v-spacer></v-spacer>

                        <v-menu bottom left :close-on-content-click="false">
                            <!-- <v-btn slot="activator" icon>
                                <v-icon>settings</v-icon>
                            </v-btn> -->
                                <!-- <v-icon slot="activator">settings</v-icon> -->
                            <div class="forSpanClick" slot="activator" >
                                Options
                            </div>

                            <v-list>
                                <v-list-tile v-if="edit" @click="closeSelection">
                                    <v-list-tile-title>Close Selection</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="edit" @click="selectAll">
                                    <v-list-tile-title>Select All</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="edit && cardCheck.length > 0" @click="DeselectAll">
                                    <v-list-tile-title>Deselect All</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="!edit" @click="showSelection">
                                    <v-list-tile-title>Select</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="!edit" @click="editProduct(val.id)">
                                    <v-list-tile-title>Edit</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="edit && cardCheck.length > 0" @click="deleteAll(val.what)">
                                    <v-list-tile-title>Delete All</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile v-if="!edit" @click="deleteProduct(val.id, val.what)">
                                    <v-list-tile-title>Delete</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile @click="chooseStrsForAll" v-if="edit && val.what == 'products'  && cardCheck.length > 0 && getUserStoreviews && getUserStoreviews.length > 1">
                                    <v-list-tile-title>Add To Another Storeviews</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile @click="chooseStrs(val)" v-if="!edit && val.what == 'products' && getUserStoreviews && getUserStoreviews.length > 1">
                                    <v-list-tile-title>Add To Another Storeviews</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                </v-card-actions>
                <!-- <v-layout wrap>
                    <v-flex xs2>

                    </v-flex>
                    <v-flex xs2 lg2 v-if="propOwner">
                <v-checkbox v-if="edit" v-model="cardCheck" :value="val.id"></v-checkbox>

                    </v-flex>
                </v-layout> -->
                <v-card  v-ripple flat class="px-1 brd">

                    <!-- ======================================================================================
                                                        IMAGE
                    ======================================================================================== -->

                <!-- <a @click.prevent="viewProductDetails(val.id)" target="_blank"><v-img  :src="val.image"  contain aspect-ratio="1"></v-img></a> -->
                    <!-- <router-link tag="a" :title="val.title" :to="{ name: 'singleproduct', params: { prd_id: val.id }, props:{ propID : val.id}, query: {websrch: propWebHolder,svid: val.storeview_id, prid: val.id , ref: val.href}}"  > -->
                    <router-link tag="a" :title="val.title" :to="{ name: 'singleproduct', params: { prd_id: val.id, slug: val.slug }, props:{ propID : val.id, slug: val.slug}, query: {svid: val.storeview_id, prid: val.id , ref: val.href}}"  >

                        <v-img v-if="val.image != null"  :src="val.image" class="brd" contain aspect-ratio="1"></v-img>
                        <v-img v-else-if="val.images != null"  :src="val.images[0]" class="brd" contain aspect-ratio="1"></v-img>
                        <v-img v-else :src="backupImg" class="brd" contain aspect-ratio="1"></v-img>
                    </router-link>

                    <!-- =====================================================================================
                                                    TITLE
                    ======================================================================================= -->

                    <div class="card-body pt-1 px-2 pb-3">
                            <router-link class="card-title text-capitalize" :title="val.title" :to="{ name: 'singleproduct', params: { prd_id: val.id, slug: val.slug }, props:{ id : val.id, slug: val.slug}, query: {svid: val.storeview_id, prid: val.id , ref: val.href}}"  > {{val.title}}  </router-link>
                            <!-- <router-link class="card-title text-capitalize" :title="val.title" :to="{ name: 'singleproduct', params: { prd_id: val.id }, props:{ id : val.id}, query: {websrch: propWebHolder, svid: val.storeview_id, prid: val.id , ref: val.href}}"  > {{val.title}}  </router-link> -->
                            <!-- <h4 @click.prevent="viewProductDetails(val)" class="card-title" title="info.title"> {{val.title}} </h4> -->

                    <!-- =====================================================================================
                                                    PRICE
                    ======================================================================================= -->

                        <v-layout row wrap fill-height v-if="val.what != 'useditems' && val.what != 'properties' && val.what != 'education' && val.what != 'serviceandbusiness'">
                            <v-flex pt-1 pb-0 px-3>
                                <span class="previousPrice">₹{{ val.perviousPrice ? val.perviousPrice : 0 }}</span>
                                <span class="discount pl-1" v-if="val.discount"> {{ val.discount ? val.discount : 0 }}% off</span>

                                <!--  <span v-if="product.rentPer !== ''" class="extra">/{{product.rentPer}}</span> -->
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap >
                            <v-flex class="justify-center" pt-1 px-3>
                                <div class="priceDiv pb-1">
                                    <span>₹ </span>
                                    <span v-if="val.totalPrice == null">Contact For Details</span>
                                    <strong v-else>{{ val.totalPrice }}</strong>
                                    <span  v-if="val.per" >/ {{ val.per }}</span>
                                    <span  v-if="val.feesper" >/ {{ val.feesper.name }}</span>
                                    <span  v-if="val.rent_per" >/ {{ val.rent_per }}</span>
                                </div>

                    <!-- =====================================================================================
                                                    EDUCATION - PROPERTY = CATEGORY
                    ======================================================================================= -->

                                <!-- =========   PRODUCTS   ========= -->

                                <!-- <div class="pb-1" v-if="val.want_to">
                                <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >fas fa-caret-right</v-icon>

                                    <span v-if="val.want_to == 1" title="Rent">Retail</span>
                                    <span v-if="val.want_to == 2" title="Rent">Rent</span>
                                    <span v-if="val.want_to == 3" title="Rent">Wholesale</span>
                                </div> -->

                                <!-- =========   SERVICE AND BUSINESS CATEGORY   ========= -->

                                <div class="pb-1" v-if="val.serviceCat">
                                <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >business_center</v-icon>
                                    {{val.serviceCat.name}}
                                </div>

                                <!-- =========   EDUCATION CATEGORY   ========= -->

                                <div class="pb-1" v-if="val.eduCategory">
                                <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >school</v-icon>
                                    {{val.eduCategory.name}}
                                </div>

                                <!-- =========   PROPERTY CATEGORY   ========= -->
                                <div class="pb-1" v-if="val.propertyCategory">
                                <span>
                                        <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >home</v-icon>
                                    </span>
                                    {{val.propertyCategory.name}}
                                </div>

                    <!-- =====================================================================================
                                                    BRAND
                    ======================================================================================= -->

                                <div class="pb-1" v-if="val.what == 'useditems' && val.brand">

                                    <span>
                                        <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >business</v-icon>
                                    </span>
                                    {{val.brand ? val.brand.name : ''}}

                                </div>

                    <!-- =====================================================================================
                                                    RATING
                    ======================================================================================= -->

                                <div title="Product Rating" class="rating" v-if="val.what != 'properties' && val.what != 'useditems'">
                                    <!-- {{ product.rating }} --> <span  >{{val.rating ? val.rating : 0 }}</span> ★
                                    <!-- -->
                                </div>
                            </v-flex>
                        </v-layout>

                    <!-- =====================================================================================
                                                    REGION
                    ======================================================================================= -->

                        <v-layout  wrap  v-if="val.what == 'properties'">
                            <v-flex class="justify-center" pt-0>
                                <div class="pb-1"  v-if="val.state">
                                <span>
                                        <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >location_city</v-icon>
                                    </span> {{ val.state.name }}, {{val.city.name}}
                                </div>
                            </v-flex>
                        </v-layout>

                    <!-- =====================================================================================
                                                    OFFERS
                    ======================================================================================= -->
                        <v-layout wrap v-if="val.offers">
                            <v-flex class="justify-center" pt-0>
                                <ul>
                                    <li class="pb-1" v-if="val.offers != null">
                                        <span >
                                            <v-icon color="#ef6c3c" class="subheading pr-1" style="opacity: 0.8;" >local_offer</v-icon>
                                        </span>
                                        <strong >{{ val.offers.length }} {{ val.offers.length == 1 ? 'Offer' : 'Offers' }}
                                        </strong>

                                    </li>
                                </ul>

                            </v-flex>
                        </v-layout>

                        <v-layout wrap>
                            <v-flex xs12>

                            </v-flex>
                        </v-layout>
                    </div>
                </v-card>

            </v-card>
        </v-flex>

            <!-- ===========================   GROUP ADDING DIALOG   ============================================ -->

            <v-layout v-if="addToStrDialog" justify-center>
                <v-dialog v-model="addToStrDialog"  max-width="800" persistent :overlay="false" transition="dialog-transition">
                    <v-card>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :disabled="sending" depressed small color="error" flat @click="closeAddToStr">close</v-btn>
                        </v-card-actions>

                        <v-layout wrap>
                            <v-flex xs12 lg6 class="px-2">
                                <v-flex xs12 lg12>
                                    <v-card class="mb-2">
                                        <v-card-text>
                                            Selected Product
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <!-- ==============   For Group Adding   ============================ -->

                                <v-card flat class="mb-2 cardScroll" v-if="edit">
                                    <v-list two-line >
                                        <template v-for="(val, i) in grpPrdSelected">
                                            <v-list-tile avatar :key="i">
                                                <v-list-tile-avatar>
                                                    <img :src="val.image">
                                                </v-list-tile-avatar>
                                                <v-list-tile-content>
                                                    <v-list-tile-title :title="val.title">{{ val.title }}</v-list-tile-title>
                                                    <v-list-tile-sub-title><span>₹ </span>{{ val.totalPrice ? val.totalPrice : 'Contact For Details'}}
                                                        <span v-if="val.rent_per">/ {{ val.rent_per}}</span>
                                                        <span v-if="val.feesper">/ {{ val.feesper.name}}</span>
                                                        <span v-if="val.per">/ {{ val.per}}</span>
                                                        <span v-if="val.what == 'products'">| {{ val.discount? val.discount: 0 }}% off</span>
                                                    </v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </template>
                                    </v-list>
                                </v-card>

                                <!-- ===============   For Single Adding   ============================== -->

                                <v-card flat class="mb-2" v-else>
                                    <v-img v-if="prdSelected.image != null" :src="prdSelected.image" class="brd" aspect-ratio="1" contain></v-img>
                                    <v-img v-else-if="prdSelected.images != null" :src="prdSelected.images[0]" class="brd" aspect-ratio="1" contain></v-img>
                                    <v-img v-else :src="backupImg" class="brd" aspect-ratio="1" contain></v-img>


                                    <v-list three-line>

                                        <v-list-tile  >

                                            <v-list-tile-content>
                                                <v-list-tile-title :title="prdSelected.title">{{ prdSelected.title }}</v-list-tile-title>
                                                <v-list-tile-sub-title><span>₹ </span>{{ prdSelected.totalPrice ? prdSelected.totalPrice : 'Contact For Details'}}
                                                    <span v-if="prdSelected.rent_per">/ {{ prdSelected.rent_per}}</span>
                                                    <span v-if="prdSelected.feesper">/ {{ prdSelected.feesper.name}}</span>
                                                    <span v-if="prdSelected.per">/ {{ prdSelected.per}}</span>
                                                    <span v-if="prdSelected.what == 'products'">| {{ prdSelected.discount? prdSelected.discount: 0 }}% off</span>

                                                </v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 lg6 class="px-2">
                                <v-flex xs12 lg12>
                                    <v-card class="mb-2">
                                        <v-card-text v-if="!deleteAllOpt">
                                            Select Storeviews
                                        </v-card-text>
                                        <v-card-text  v-else>
                                            Storeview
                                        </v-card-text>

                                    </v-card>
                                </v-flex>

                                <!-- =====================   Storeviews Selection   ================================== -->

                                <v-card flat class="cardScroll" v-if="!deleteAllOpt">
                                    <v-list v-if="getUserStoreviews != null" two-line>
                                            <!-- <v-list-tile>
                                                <v-list-tile-action >
                                                <v-checkbox v-model="allStrSelect" ></v-checkbox>
                                                </v-list-tile-action>
                                                <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        Select All
                                                    </v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile> -->
                                        <template v-for="item in getUserStoreviews" v-show="getLoader == false">
                                            <!-- <v-list-tile  :key="item.str_name" @click="gotostore(item.str_id)"> -->
                                            <v-list-tile   :key="item.str_name" v-if="item.str_id != propStr_id">
                                                <v-list-tile-action >
                                                <v-checkbox  v-model="strSelected" :value="item.str_id"></v-checkbox>
                                                </v-list-tile-action>
                                                <v-list-tile-content>
                                                <v-list-tile-title>
                                                    <!-- <router-link class="card-title text-capitalize" style="text-decoration: none;" :title="item.store_name" :to="{ name: 'storeview', params: { id: item.str_id }, props:{ id : item.str_id}}"> {{ item.str_name }} </router-link> --> {{ item.str_name }}
                                                </v-list-tile-title>
                                                <v-list-tile-sub-title style="font-size: 13px;">{{item.str_state}}, {{ item.str_city }}</v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            </template>
                                    </v-list>

                                </v-card>

                                <!-- ============================   Show Current Storeview   ============================= -->

                                <v-card flat class="cardScroll" v-if="deleteAllOpt">
                                    <v-list v-if="propStoreviewInfo" two-line>
                                            <v-list-tile >
                                                <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        {{ propStoreviewInfo.store_name }}
                                                    </v-list-tile-title>
                                                    <v-list-tile-sub-title
                                                        style="font-size: 13px;"
                                                        >
                                                        {{propStoreviewInfo.state.name}}, {{ propStoreviewInfo.city.name }}

                                                    </v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                    </v-list>

                                </v-card>

                            </v-flex>
                        </v-layout>

                        <v-card-text v-if="!deleteAllOpt">
                            Note: This Will Create New Copy of This Item in Each Selected Storeviews.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn v-if="edit && !deleteAllOpt" :disabled="strSelected.length == 0 || sending" color="success" small depressed outline block @click.native="addGrpToStrs" :loading="sending">add

                            </v-btn>

                            <v-btn v-if="!edit && !deleteAllOpt" :disabled="strSelected.length == 0 || sending" color="success" small depressed outline block @click.native="addToStrs" :loading="sending">add

                            </v-btn>

                            <v-btn v-if="edit && deleteAllOpt" :disabled="sending" color="error" small depressed outline block @click.native="dltGrpInStr" :loading="sending">delete

                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
    </v-layout>
</template>

<script>
import { eventBus } from '../app';

  export default {
      //props: ['info'],
    props: ['info', 'propWebHolder', 'propStr_id', 'propOwner', 'propStoreviewInfo'],
    data() {
        return {
        data: [ { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Pre-fab homes thi is some long part of title', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        ],
        backupImg: require('../../assets/uploadimg.png'),

        cardCheck: [],

        edit: false,

        addToStrDialog: false,

        strSelected: [],

        prdSelected: null,

        grpPrdSelected: [],

        allStrSelect: false,

        sending: false,

        deleteAllOpt: false,

        what: ''
      }
    },
    created() {

       // console.log(this.infos);

       eventBus.$on('cardCheckResetAll', (data) => {

           this.addToStrDialog = false;

           this.closeSelection();
       });
       eventBus.$on('sending', (data) => {

           this.sending = data;
       });

    },
    computed: {
        getUserStoreviews ()
        {
            return this.$store.getters.getUserStoreviews;
        },

    },
    methods: {

        closeSelection() {

            this.edit = false;

            this.deleteAllOpt = false;

            this.cardCheck = [];

            this.strSelected = [];

            this.prdSelected = [];
        },
        selectAll() {

            this.cardCheck = [];

            this.info.forEach(elm => {

                this.cardCheck.push(elm)
            });

        },
        showSelection() {

            this.edit = true;
        },
        DeselectAll() {

            this.cardCheck = [];
        },
        chooseStrs(val) {

            console.log(val);

            this.addToStrDialog = true;

            this.prdSelected = val ;
        },
        chooseStrsForAll() {

            this.addToStrDialog = true;

            this.grpPrdSelected = this.cardCheck ;
        },
        closeAddToStr() {

            this.strSelected = [];

            this.prdSelected = [];

            this.deleteAllOpt = false;

            this.addToStrDialog = false;
        },

        // ==================   Add Single Product In Group Of Storeviews   ====================================

        addToStrs() {

            console.log(this.prdSelected.id)
            console.log(this.strSelected)

            this.sending = true;

            eventBus.$emit('grpStr', {strs: this.strSelected, prdId: this.prdSelected.id});
        },

        // ==================   Add Group Of Products In Group Of Storeviews   ====================================

        addGrpToStrs() {

            let ids = []

            this.cardCheck.forEach(crd => {
                ids.push(crd.id);
            });

            // console.log(this.strSelected)

            this.sending = true;

            eventBus.$emit('grpStr', {strs: this.strSelected, prdIds: ids});
        },

        // ==================   Edit Single Products   ====================================

        editProduct(id) {
            eventBus.$emit('editFn', id)
            // eventBus.$emit('editCheck', {str: this.propStoreviewInfo.store_id, prd_id: id})
        },

        // ==================   Delete Single Products   ====================================

        deleteProduct(id) {
            eventBus.$emit('deleteFn', id)
        },

        // ==================   Delete Products In Group   ====================================

        deleteAll(val) {
            console.log(this.propStoreviewInfo)

            this.what = val

            this.addToStrDialog = true;

            this.deleteAllOpt = true;

            this.grpPrdSelected = this.cardCheck ;

        },

        dltGrpInStr() {

            this.sending = true;

            let ids = []

            this.cardCheck.forEach(crd => {
                ids.push(crd.id);
            });

            eventBus.$emit('dltGrpPrdsInStr', {str: this.propStoreviewInfo.store_id, prdIds: ids, what: this.what});
        },

    },
    watch: {
        allStrSelect() {


        }
    }
  }
</script>

<style scoped>
  /* CARD */
* {
  font-size: 14px;
  font-weight: 400;
  /* letter-spacing: 1px; */
  text-align: left;
  text-decoration: none;
}
ul {
    list-style:  none;
    padding: 0;
    overflow: hidden;
    margin-bottom: 0px;
}
.brd {
    border-radius: 5px;
}
.brdBtm {
    border-bottom: #878787 solid 1px;
}
.card {
  overflow: hidden;
  transition: 0.2s ease;
}
.cardCheck {
  overflow: hidden;
  transition: 0.2s ease;
  background: linear-gradient(to bottom,#ebebeb, #fff);
}
p {
  margin: 0px;
}
.flx{
  display: flex;
  flex-wrap: wrap;
}
.card-body {
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
}
.previousPrice {
      font-size: 13px;

      text-decoration: line-through;
      color: #878787;
    }
.priceDiv strong{
  font-size: 17px;
  color: #333;
}
.btn-sm{
  width: 100%;
  text-align: center;
}

.card-title, .card-text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 18px;     /* fallback */
   height: 35px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   margin-bottom: 0px;
   font-size: 16px;
}

.card-title:hover {
    text-decoration: underline;
}

.rating {
  background-color: #ef6c3c;
  line-height: normal;
  display: inline-block;
  color: #fff;
  padding: 2px 6px 3px 6px;
  border-radius: 3px;
  font-weight: 400;
  font-size: 12px;
  vertical-align: middle;
  /* width: 16%; */
  opacity: 0.8;
}
h5 {
    color: #111;
}
.saveBtn {
    width: 100%;
}

.cardScroll {
    max-height: 350px;
    overflow-y: auto;
}

/*  Small phones: from 0 to 480px */
@media only screen and (max-width: 480px) {
    .card-title {
        font-size: 14px;
    }
    .priceDiv strong {
        font-size: 15px;
    }
    .rating {
        font-size: 11px;
        padding: 0px 4px 2px 6px;
    }
    .previousPrice, .discount {
      font-size: 12px;
    }
    .saveBtn {
        font-size: 11px;
        width:100%;
    }
}

</style>
