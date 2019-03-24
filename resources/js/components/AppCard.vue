<template>
    <v-layout  wrap fill-height>
        <v-flex xs6  sm3  md3 lg3 pa-1 pb-3 v-for="(val, i) in info" :key="i">
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
                    <v-layout row wrap v-if="val.offers">
                        <v-flex class="justify-center" pt-0 px-3>
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
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

  export default {
    //props: ['info'],
    props: ['info', 'propWebHolder'],
    data() {
      return {
        data: [ { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Pre-fab homes thi is some long part of title', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        ],
        backupImg: require('../../assets/uploadimg.png'),
      }
    },
    created() {

       // console.log(this.infos);

    },
    computed: {

    },
    methods: {
        viewProductDetails(id) {

            console.log(id);
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
}
.brd {
    border-radius: 5px;
}
.card {
  overflow: hidden;
  transition: 0.2s ease;
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
