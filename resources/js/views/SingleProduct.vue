<template>
    <v-layout  wrap>
        <v-flex xs12 sm12 md12 lg12 class="mx-auto width">

            <v-card v-if="loading" flat class="text-xs-center pa-4" >
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="gray"
                    indeterminate
                    class="v-progress-circular"
                ></v-progress-circular>
            </v-card>

            <v-layout v-else  wrap justify-space-around>

                    <!-- *************** -->
                    <!-- Images Block -->
                    <!-- *************** -->

                <v-flex xs12 sm5 md5 lg5  >
                    <v-flex xs12 class="post mb-3">
                        <v-card class="background-shadow  mb-3" flat >
                            <v-img v-if="img != null"  :src="img" aspect-ratio="1" contain class="mb-2 pointer"  @click.native="dialogImage = true"></v-img>
                            <v-img v-else-if="product.image != null"  :src="product.image" aspect-ratio="1" contain class="mb-2 pointer" @click.native="dialogImage = true"></v-img>
                            <!-- <v-img v-else-if="product.images != null"  :src="product.images[0]" aspect-ratio="1" contain class="mb-2"></v-img> -->
                            <v-img v-else :src="backupImg" class="brd" contain aspect-ratio="1"></v-img>

                            <v-divider></v-divider>
                            <v-layout  wrap align-content-space-between justify-center pb-3>
                                    <v-flex xs2 lg2 class="mx-1" v-if="product.image != null" >
                                        <div  id="0">
                                            <div @mouseover="mouseover">
                                                <v-img   :src="product.image" :ref="'img'+0" aspect-ratio="1" contain></v-img>
                                            </div>
                                        </div>
                                    </v-flex>
                                <template v-for="(thumbimg, i) in this.product.images">
                                    <v-flex xs2 lg2 class="mx-1" :key="thumbimg.img" >
                                        <div  :id="`${i+1}`">
                                            <div @mouseover="mouseover">
                                                <v-img  :src="thumbimg"  aspect-ratio="1" :ref="`img${i+1}`" contain></v-img>
                                            </div>
                                        </div>
                                    </v-flex>
                                </template>
                            </v-layout>
                        </v-card>

                        <!-- ==================================   DIALOG IMAGE   ============================================ -->

                        <v-flex xs12 v-if="dialogImage">
                            <v-layout justify-center>
                                <v-dialog v-model="dialogImage" max-width="960px">
                                    <v-card>
                                        <v-img  :src="img != null ? img : product.image"  contain></v-img>
                                    </v-card>
                                </v-dialog>
                            </v-layout>
                        </v-flex>

                        <!-- ========================================   SAVE & REMOVE BUTTON   ============================================== -->

                        <v-card class="background-shadow mb-3" flat>
                            <v-card-actions>
                                <v-btn :disabled="saveBtnLoader" large depressed :class="{ saveBtn: !saveButton, removeBtn: saveButton }"  block  dark @click.native="saveRemove">{{!saveButton ? 'save' : 'remove'}}</v-btn>
                                <!-- <v-btn  v-if="saveButton == false" depressed style="background: linear-gradient(to right,#f12711,#f5af19);"   block color="orange darken-1" dark @click.native="saveProduct">save</v-btn>
                                <v-btn  v-if="saveButton == true" depressed style="background: linear-gradient(to right,#870000,#190A05);"  block color="#C62828" dark @click.native="removeSavedProduct">remove</v-btn> -->
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                </v-flex>

                     <!-- *************** -->
                    <!-- Title / Price Block -->
                    <!-- *************** -->

                <v-flex xs12 sm6 md6 lg6>
                    <v-card flat class="background-shadow">
                        <v-card-title primary-title class="pb-0">
                            <div>

                                <!-- ======   title   ====== -->

                                <div class="mb-2 mainTitle"> {{ product.title }}</div>

                                <!-- ======   rating   ====== -->

                                <div class="" v-if="reviewBlock">
                                    <span class="rating">{{product.rating ? product.rating : 0}} ★</span>
                                    <span class="pl-3 reviewSpan">reviews({{product.totalReviews ? product.totalReviews : 0}})</span>
                                </div>

                            </div>
                        </v-card-title>

                        <!-- ======================   Product Category    ================================= -->

                        <v-layout  wrap >
                            <v-flex xs12 lg12 class="pt-3 pl-3">
                                <span class="body-2"  v-for="(val, i) in product.category" :key="i">
                                   {{ val.name }} <span class="px-2" v-if="product.category.length !== i+1">></span>
                                </span>

                            </v-flex>
                            <!-- <v-card-title >
                            </v-card-title> -->
                        </v-layout>

                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <span v-if="product.totalPrice == null" > ₹ Contact For Price Details</span>
                                        <span v-else class="priceDiv"> ₹ {{product.totalPrice}}</span>


                                        <span  v-if="product.per" >/ {{ product.per }}</span>

                                        <span v-if="product.sell_rent == 1 && product.sell_rent " class="ml-1"> / <span>{{product.rent_per}}</span></span>

                                        <span v-if="product.feesper" class="ml-1"> / <span>{{product.feesper.name}}</span></span>

                                        <span v-if="product.perviousPrice" class="previousPrice ml-3">₹ {{ product.perviousPrice }}</span>
                                        <span v-if="product.discount" class="discount ml-3">{{product.discount}}% off</span>
                                    </v-list-tile-title>
                                    <!-- <v-list-tile-sub-title class="subtitle">(Inclusive Of All Taxes)</v-list-tile-sub-title> -->
                                </v-list-tile-content>
                            </v-list-tile>

                                <v-flex xs12 v-if="product.want_to">
                                    <v-card flat class="px-3" >
                                        <v-card-text class="py-1">
                                            <v-icon color="#ef6c3c" class="priceDiv pr-2" style="opacity: 0.8;" >fas fa-caret-right</v-icon>
                                                <span v-if="product.want_to == 1" title="Rent">Retail</span>
                                                <span v-if="product.want_to == 2" title="Rent">Rent</span>
                                                <span v-if="product.want_to == 3" title="Rent">Wholesale</span>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <v-flex xs12 v-if="product.offers">
                                    <v-flex xs12 lg12>
                                        <v-card-text ><b class="pl-3">Offers</b></v-card-text>
                                    </v-flex>
                                    <v-card flat class="px-3" >
                                        <v-card-text class="py-1" v-for="(val, i) in product.offers" :key="i">
                                            <v-icon color="#ef6c3c" class="pr-3" title="offer">fas fa-tag</v-icon>
                                                <span :title="val">{{ val }}</span>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                            <v-card flat class="px-3">

                                <!--
                                /***************************************************************************************
                                /*** Highlights Points
                                /***************************************************************************************
                                 -->
                                <v-layout  wrap>
                                    <v-flex d-flex xs4 sm4 md3 lg3  class="wordBreak">
                                        <v-card-text><b>Highlights</b></v-card-text>
                                    </v-flex>
                                    <v-flex d-flex xs8 sm8 md8 lg9 class="wordBreak">
                                        <ul>
                                            <v-layout wrap>
                                                <v-flex xs12 lg6 class="pt-3 pr-3"  v-for="(high, i) in product.highLights"  :key="i">
                                                    <li  >
                                                        {{ high }}
                                                    </li>
                                                </v-flex>
                                            </v-layout>
                                        </ul>
                                    </v-flex>
                                </v-layout>

                                <!-- =================================================================
                                            Descriptions
                                =====================================================================-->
                                <v-layout  wrap v-if="product.descriptions">
                                    <v-flex xs12>
                                        <v-card-text><b>Descriptions</b></v-card-text>
                                    </v-flex>
                                    <v-flex xs12>
                                       <v-card flat>
                                            <v-card-text  v-for="(des, i) in product.descriptions" :key="i">

                                                <v-layout  wrap >
                                                    <v-flex d-flex xs4 sm4 md3 lg3 class="wordBreak">
                                                        {{des.heading}}:
                                                    </v-flex>

                                                    <v-flex d-flex xs8 sm8 lg9 class="wordBreak">
                                                                <div >{{ des.description }}</div>

                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>

                                <!--
                                /***************************************************************************************
                                /*** Keywords Points
                                /***************************************************************************************
                                 -->

                                <v-layout  wrap>
                                    <v-flex d-flex xs4 sm4 md3 lg3  class="wordBreak">
                                        <v-card-text><b>Keywords</b></v-card-text>
                                    </v-flex>
                                    <v-flex d-flex xs8 sm8 md8 lg9 class="wordBreak">
                                        <ul>
                                            <v-layout wrap>
                                                <v-flex xs6 lg6 class="pt-3 pr-3"  v-for="(key, i) in product.keywords"  :key="i">
                                                    <li  >
                                                        {{ key }}
                                                    </li>
                                                </v-flex>
                                            </v-layout>
                                        </ul>
                                    </v-flex>
                                </v-layout>

                                <!-- ========   EDUCATION CATEGORY   ==================== -->

                                <v-flex xs12 lg12 v-if="product.eduCategory">
                                        <v-card flat>
                                            <div class="pb-1">
                                            <v-icon color="#ef6c3c" class="priceDiv pr-2" style="opacity: 0.8;" >school</v-icon>
                                                {{product.eduCategory.name }}
                                            </div>
                                        </v-card>
                                </v-flex>

                                <!-- ========   SERVICE AND BUSINESS CATEGORY   ==================== -->

                                <v-flex xs12 lg12 v-if="product.serviceCat">
                                        <v-card flat>
                                            <div class="pb-1">
                                            <v-icon color="#ef6c3c" class="priceDiv pr-2" style="opacity: 0.8;" >business_center</v-icon>
                                                {{product.serviceCat.name }}
                                            </div>
                                        </v-card>
                                </v-flex>

                                <!--
                                /***************************************************************************************
                                /*** PROPERTY REGION
                                /***************************************************************************************
                                 -->
                                <v-flex xs12 lg12 class="" v-if="product.state && product.what == 'properties'">
                                        <div class="mb-2"><b>Property Region</b></div>

                                        <v-card flat>

                                                <v-layout  wrap >
                                                    <v-flex d-flex xs4 sm4 md3 lg3 class="wordBreak pb-1">
                                                        <span>
                                                            <v-icon color="#ef6c3c" class="priceDiv pr-1" style="opacity: 0.8;" >home</v-icon>
                                                        </span>
                                                    </v-flex>

                                                    <v-flex d-flex xs8 sm8 lg9 class="wordBreak">
                                                        {{ product.propertyCategory.name }}
                                                    </v-flex>
                                                </v-layout>

                                                <v-layout  wrap >
                                                    <v-flex d-flex xs4 sm4 md3 lg3 class="wordBreak pb-1">
                                                        <span>
                                                            <v-icon color="#ef6c3c" class="priceDiv pr-1" style="opacity: 0.8;" >location_on</v-icon>
                                                        </span>
                                                    </v-flex>

                                                    <v-flex d-flex xs8 sm8 lg9 class="wordBreak">
                                                        <v-layout  wrap>
                                                            <v-flex xs12 >
                                                                {{ product.fullAddress }}
                                                                <span v-if="!product.fullAddress" >Contact For Details</span>
                                                            </v-flex>
                                                            <v-flex xs12 >
                                                                {{ product.city.name }}, {{ product.state.name }}, {{ product.country.name }}
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-flex>
                                                </v-layout>
                                        </v-card>

                                </v-flex>

                                <!-- <v-card flat class="px-3">
                                <template v-for="detail in details"  >

                                    <v-layout row wrap :key="detail.heading">
                                        <v-flex d-flex xs4 sm4 md3 lg3  class="wordBreak">
                                            <v-card-text >{{ detail.heading }}</v-card-text>
                                        </v-flex>
                                        <v-flex d-flex xs8 sm8 lg9 class="wordBreak">
                                        <v-layout column>
                                            <v-flex class="py-3 pr-3"  >
                                                <div>
                                                    <div>{{ detail.description }}</div>
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                        </v-flex>
                                    </v-layout>

                                </template>-->
                            </v-card>
                        </v-list>
                    </v-card>

                    <!-- =========================================================-->
                    <!-- Reviews Block -->
                    <!-- =========================================================-->

                    <v-flex xs12 v-if="reviewBlock">
                        <v-card flat class="mt-3 background-shadow">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-card-title class="py-3">
                                        <span class="py-3"><strong>Reviews</strong></span>
                                        <v-spacer></v-spacer>
                                        <v-btn depressed outline small flat color="primary" @click.native="openRatingDialog">Rate This</v-btn>
                                    </v-card-title>
                                        <div class="cardScroll">
                                            <template v-for="(review, i) in reviews" >
                                                <v-card :key="review.customer" flat class="py-1">
                                                    <v-card-text class="py-2 align-center">
                                                        <v-icon class="mr-3">fas fa-user</v-icon>
                                                        <span>{{ review.customer }}</span>
                                                        <span class="ml-3 red--text">{{ review.star }}★</span>
                                                    </v-card-text>
                                                    <v-card-text class="py-2">

                                                        {{ review.review }}
                                                    </v-card-text>
                                                    <v-divider v-if="reviews != null && reviews.length > i+1" ></v-divider>
                                                </v-card>
                                            </template>
                                        </div>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card v-if="reviews == 0" flat>
                                        <v-card-text >
                                            No Reviews Yet!
                                        </v-card-text>
                                    </v-card>

                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>

                    <!-- ================================================= -->
                    <!-- ===   RATING FORM DIALOG   === -->
                    <!-- ================================================= -->

                    <v-layout justify-center>
                        <v-dialog v-model="ratingDialog" persistent max-width="500">
                            <ReviewComp
                                @rating="rating =$event"
                                @ratingHeading="ratingHeading =$event"
                                @ratingDescription="ratingDescription =$event"
                            ></ReviewComp>
                            <!-- <v-card class="pa-3">
                                <div class="subheading font-weight-medium">
                                    Rate Product
                                </div>
                                <v-rating
                                    v-model="rating"
                                    class="mb-3"
                                    color="yellow darken-3"
                                    background-color="grey darken-1"
                                    empty-icon="$vuetify.icons.ratingFull"
                                    half-increments
                                    hover
                                ></v-rating>

                                <div class="subheading font-weight-medium" >
                                    Write Review
                                </div>
                                <v-text-field
                                    v-model="ratingHeading"
                                    label="Heading"
                                    color="orange darken-2"
                                ></v-text-field>
                                <v-textarea
                                    v-model="ratingDescription"
                                    label="Description"
                                    color="orange darken-2"
                                ></v-textarea>
                                <v-card-actions>
                                    <v-btn color="success" block flat @click.native="submitRating">submit</v-btn>
                                    <v-btn color="error" block flat @click.native="cancelRating">cancel</v-btn>
                                </v-card-actions>
                            </v-card> -->
                        </v-dialog>
                    </v-layout>

                    <!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->

                    <!-- ================================ -->
                    <!-- Storeview Address Block -->
                    <!-- ================================ -->

                    <v-flex xs12 class="my-3">
                        <v-card flat class="background-shadow">
                            <v-card-title class="py-1">
                                <strong>Address</strong>
                                <router-link class="pl-5 vStore" :to="{name: 'storeview', params: {id: product.storeview_id, u_name: product.u_name,}, props: {id: product.storeview_id}}">
                                    Visit Storeview</router-link>
                            </v-card-title>
                            <v-card-text class="pb-3 addr">
                                {{ product.store_address }}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-flex>

                    <!-- ********************************** -->
                    <!-- Products from this Storeview Block -->
                    <!-- ********************************** -->

                <v-layout  wrap >
                    <v-flex xs12 class="background-shadow">
                        <v-card flat>
                                <v-card-text class="py-3">
                                    <strong> Products from this Storeview</strong>
                                </v-card-text>

                            <v-card flat >
                                <AppCard :info="ProductsFromThisStoreview"></AppCard>
                            </v-card>
                        </v-card>
                    </v-flex>
                        <!-- <v-flex xs12 sm12 md12 lg12 >
                        </v-flex> -->
                </v-layout>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import AppCard from './../components/AppCard'
import ReviewComp from './../components/Review/ReviewComp'

export default {
    components: {
        AppCard,
        ReviewComp,
    },
    mixins:[selectSearchRoute],
    created() {
        eventBus.$on('savedProduct', (data) => {

                if(this.$route.query.prid == data) {
                    this.saveButton = false
                }
        });
        eventBus.$on('submitRating', (data) => {

            this.submitRating();
        });
        eventBus.$on('cancelRating', (data) => {

            this.cancelRating();
        });

        // this.getSingleProductAndReviews(this.id)


        /* axios.get('http://localhost:8000/api/products')
        .then((response) => {
            let aa = response.data.data;
            let b = []
            aa.filter(a => {
                if(a.storeview_id == this.product.storeview_id && a.id !== this.product.storeview_id) {
                    if(b.length <= 3) {

                        b.push(a);

                    } else {
                        return;
                    }
                }
            })
            this.ProductsFromThisStoreview = b;
            //console.log(response.data.data)
            //console.log(b)
        })
        .catch((errors) => {
            console.log(errors)
        }) */
    },
    beforeMount() {
        this.getSingleProductAndReviews(this.getID)

    },
    mounted() {
        //this.routeSelected();
        //this.getSaveProducts();
    },
     beforeRouteUpdate (to, from, next) {
    // react to route changes...
    //this.id = to.params.prd_id;
    this.getID;
    //this.getSingleProductAndReviews(this.getID);
    //this.getSaveProducts();
    // don't forget to call next()
    next();
  },
    props: ['propID'],
    data() {
        return {
            loading: false,
            saveButton: false,
            saveBtnLoader: false,
            ratingDialog: false,
            foundUrl: '',

            dialogImage: false,

            /* =============   review   ==================== */
            rating: 0,
            ratingHeading: '',
            ratingDescription: '',
            reviewBlock: false,

            what: '',
            img: null,

            product: {},
            reviews: [],
            ProductsFromThisStoreview: [],
            backupImg: require('../../assets/uploadimg.png'),
            thumbImgs: [
                {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2pu5p3r48.jpeg?q=70'},
                {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2rnzjfugg.jpeg?q=70'},
                {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2zfgb3rey.jpeg?q=70'},
                {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/ethnic-set/r/c/m/l-k95119-511-deyann-original-imaf5gx27jrgrtkk.jpeg?q=70'},
            ],
            details: [
                {
                    heading: 'Size',
                    description: 'S, M, L, XL, XXL, 3XL'
                },
                {
                    heading: 'Highlights',
                    description: 'Pure Cotton Fabric, Full Sleeve, Solid Pattern, Color: Black,For Men\'s'
                },
                {
                    heading: 'Description',
                    description: 'This Stylish Kurta come with pure cotton Pykama.Kurta Febric was Pure cotton with Regular Fit.Kurta Sleeve was Full and it also can wear with simple casual pant or jeans.This slunting kurta can be used for party as well regular basis also'
                },
            ],
            storeAddress: 'b\\24 Jivkor nagar, near swami vivekanad garden, bhatar road, surat.'
        }
    },
     methods: {

         async getSingleProductAndReviews(id) {

             this.loading = true;

             console.log(this.$route.query.ref);

             //axios.get('http://localhost:8000/api/products/' + id)
             axios.get(this.$route.query.ref)
                .then((response) => {
                    console.log(response)

                    if(response) {

                        let data = response.data.data;

                        this.product = data;

                         this.findSavedItemUrl(data.what);
                         this.what = data.what;
                         this.routeSelected();

                         this.getSaveProducts();

                         this.productsFromStr(data.storeview_id);

                         this.getReviewRating(data.reviews_link);

                         this.loading = false;
                    }
                })
                .catch((errors) => {
                    console.log(errors.response)
                    console.log(errors)

                    this.loading = false;

                    if(errors){
                        console.log(errors.response.status)

                        if(errors.response.status == 404) {

                            this.$router.replace('/404');
                        }
                    }
                })
         },
         getReviewRating(link) {

             if(link) {

                 this.reviewBlock = true;

                 let a = link;// ? link : 'http://localhost:8000/api/products/' + this.$route.query.prid + '/reviews';

                  console.log(a)
              axios.get(a)
                     .then((response) => {
                         console.log(response)
                         this.reviews = response.data.data;
                     })
                     .catch((errors) => {
                         console.log(errors.response)
                     })
             }


         },
         getProductsFromStr() {

             axios.get('/products')
                        .then((response) => {

                            let aa = response.data.data;
                            let b = []

                            aa.forEach(a => {
                                if(a.storeview_id == this.$route.query.svid && this.ProductsFromThisStoreview.length <= 3 ) {
                                    if( a.id != this.getID) {

                                        console.log(a.id);

                                        this.ProductsFromThisStoreview.push(a);
                                    } else {
                                        console.log(a.id);
                                    }
                                }
                            });
                            console.log(this.ProductsFromThisStoreview)
                        })
                        .catch((errors) => {
                            console.log(errors)
                        })
         },
         productsFromStr(str_id) {
             axios.get('/productsfromstoreview', {params: {str_id: str_id}})
                .then((res) => {
                    console.log(res);

                    let data = res.data.prdFrmStr;

                    this.ProductsFromThisStoreview = data.splice(0, 4)

                })
                .catch((err) => {
                    console.log(err.response);
                })
         },

         /* ================   Rating Review   ==================================== */

         openRatingDialog() {

             if(localStorage.getItem('token')) {

                this.ratingDialog = true;

             } else {

                eventBus.$emit('signinDialog', true);
             }
         },
         submitRating() {

            if(localStorage.getItem('token')) {

                if(this.rating == 0) {

                    alert('Please Rate This Product');
                    return;
                }

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                let rating =new FormData();

                let prdId = this.$route.query.prid;

                rating.append('prId', prdId)

                rating.append('rating', this.rating);

                if(this.ratingHeading != null || this.ratingHeading != '') {

                    rating.append('ratingHeading', this.ratingHeading);
                }

                if(this.ratingDescription != null || this.ratingDescription != '') {

                    rating.append('ratingDescription', this.ratingDescription);
                }

                axios.post('/products/' + prdId + '/reviews', rating)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err.response);
                    });

            } else {

                eventBus.$emit('signinDialog', true);
            }


        },
        cancelRating() {

            this.rating = null;

            this.ratingHeading = null;

            this.ratingDescription = null;

            this.ratingDialog = false;

        },
        mouseover($event) {

            //console.log($event);
            // console.log(this.$refs);
            //return;
                const id = $event.target.parentElement.parentElement.parentElement.id;

            if (id == 0) {
                //console.log(this.$refs.img01[0].currentSrc);
                //this.img = this.images[0].src;
                // this.$refs.img01[0].$vnode.currentSrc
                return this.img = this.$refs.img0.currentSrc;

            } else if (id == '1') {

                return this.img = this.$refs.img1[0].currentSrc;

            } else if (id == '2') {

                this.img = this.$refs.img2[0].currentSrc;

            } else if (id == '3') {

                this.img = this.$refs.img3[0].currentSrc;

            } else if (id == '4') {

                this.img = this.$refs.img4[0].currentSrc;

            }
        },
        findSavedItemUrl(kk) {

            console.log(kk);

            let url = kk;

            switch (url) {

                case 'products':
                    this.foundUrl = 'saveproducts'
                    break;

                case 'serviceandbusiness':
                    this.foundUrl = 'saveservice'
                    break;

                case 'education':
                    this.foundUrl = 'saveeducation'
                    break;

                case 'properties':
                    this.foundUrl = 'saveproperty'
                    break;

                case 'useditems':
                    this.foundUrl = 'saveuseditem'
                    break;

                default:

                    return;
            }
        },
        getSaveProducts() {

            if(localStorage.getItem('token')) {

                console.log(this.foundUrl)

                axios.get('/'+this.foundUrl+'/'+this.$route.query.prid)
                    .then((res) => {
                        console.log(res.data);

                            this.saveButton = res.data.exists;

                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
                    .finally();
            } else {
                return;
            }


        },

        // ===============================   Save Remove   ====================================

        saveRemove() {

            if(!this.saveButton) {

                this.saveProduct();
                return;

            } else {
                this.removeSavedProduct();
                return;

            }
        },
        saveProduct() {

            if(localStorage.getItem('token')) {

                this.saveBtnLoader = true;

                let form = new FormData();

                form.append('prd_id', this.$route.query.prid)

                axios.post(`/${this.foundUrl}`, form)
                    .then((res) => {
                        console.log(res.data);

                        if(res) {

                            this.saveButton = res.data.exists;

                            eventBus.$emit('savedProduct');

                            this.$store.dispatch('disTotalCountOfSavedProducts');
                            this.saveBtnLoader = false

                        }

                    })
                    .catch((err) => {
                        console.log(err.response);
                        this.saveBtnLoader = false
                    })
            } else {

                eventBus.$emit('signinDialog', true);
            }

        },
        removeSavedProduct() {

            /* let form = new FormData();

            form.append('prd_id', this.$route.query.prid) */

            if(localStorage.getItem('token')) {

                this.saveBtnLoader = true;

                let form = this.$route.query.prid;

                axios.delete(`/${this.foundUrl}/${form}`)
                    .then((res) => {
                        console.log(res.data);

                        if(res) {

                            this.saveButton =  res.data.removed;

                            eventBus.$emit('savedProduct');

                            this.$store.dispatch('disTotalCountOfSavedProducts');

                            this.saveBtnLoader = false;
                        }

                    })
                    .catch((err) => {
                        console.log(err.response);
                        this.saveBtnLoader = false;
                    })
            } else {

                console.log('Login');
            }

        },
     },
     computed: {
         getID() {
             return this.propID;
         }
     },
     /* =========================   WATCHER   ================================================== */
     watch: {
         '$route'(to, from){
             //this.id = to.params.id;
             //this.id = to.params.prd_id;
             this.getSingleProductAndReviews(this.getID);
             this.img = null;
             //this.getSaveProducts();
         }
     }
}
</script>

<style scoped>
* {
    font-size: 14px;
}
.cardScroll {
    max-height: 350px;
    overflow-y: auto;
}

.vStore{
    font-size: 12px;
    color: blue;
}
.saveBtn {
    /* background: linear-gradient(to right,#f12711,#f5af19); */
    background: linear-gradient(to right,#56ab2f,#a8e063);

}
.removeBtn {
    background: linear-gradient(to right,#ED213A,#93291E);
}

.post {
    position: sticky;
    top: 70px;
}
.mainTitle {
    font-size: 16px;
}
.priceDiv {
  font-size: 20px;
}
.reviewSpan {
    color: #878787;
    font-size: 13px;
}
.subtitle {
    font-size: 13px;
}
.width {
    max-width: 1400px;
}
/*  Small phones: from 0 to 480px */
@media only screen and (max-width: 480px) {
    * {
        font-size: 14px;
    }
    .mainTitle {
        font-size: 14px;
    }
    .priceDiv  {
        font-size: 16px;
    }
    .rating {
        font-size: 11px;
        padding: 0px 4px 2px 6px;
    }
    .previousPrice, .discount {
      font-size: 12px;
    }
}
</style>
