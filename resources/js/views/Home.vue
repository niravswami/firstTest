<template>
    <v-layout  wrap >

        <v-flex v-show="spinner" xs12 lg11 class="mx-auto mb-3  background-shadow">

            <v-dialog
                v-model="spinner"
                :overlay="false"
                max-width="1000px"
                transition="dialog-transition"
            >
                <v-card color="#104761" class="text-xs-center pa-5" >
                    <v-card flat color="#104761" class="text-xs-center ma-5 pa-5">
                        <v-card flat color="#104761" class="text-xs-center ma-5 ">
                            <v-progress-circular
                                :size="70"
                                :width="7"
                                color="orange darken-2"
                                indeterminate
                                class="v-progress-circular "
                            ></v-progress-circular>
                        </v-card>
                    </v-card>
                </v-card>

            </v-dialog>

            </v-flex>
        <v-flex xs12 lg12 v-show="!spinner">

            <template  v-for="cate in getHomePageProds">

                <v-flex xs12 lg11 class="mx-auto mb-3  background-shadow" :key="cate.cate" v-if="cate.hasPrd">
                    <v-card flat >
                        <v-layout  wrap align-center  justify-center>
                            <v-flex xs12 sm2 md2 lg2 >
                                <v-layout  wrap align-center >

                                    <v-flex xs3 sm12 lg12 class="text-lg-center">
                                        <v-btn flat small class="btnSize" color="#ef6c3c" @click.native="fromThisCat(cate.id)">View All</v-btn>
                                    </v-flex>
                                    <v-flex xs7 sm12 lg12 class="text-lg-center">
                                        <div class="categoryTitle">{{ cate.cate }}</div>

                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 sm10 md10 lg10>
                                <AppCard :info="cate.products"></AppCard>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </template>
        </v-flex>

        <v-flex xs12 lg12 v-if="menProducts == null || womenProducts == null || elcProducts == null ">
            <v-card  class="background-shadow mb-4" >
                <v-card-title primary-title >
                    <h1 class="mx-auto"> Sorry, No Items Here...!</h1>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import AppCard from './../components/AppCard'
import _ from 'lodash'


export default {
    components: {
        AppCard,
    },
    mixins:[selectSearchRoute],
    created() {
        /* axios.get('/products')
        .then((response) => this.products = ((response.data.data).splice(0, 4)))
        .catch((err) => console.log(err)) */

        eventBus.$on('homePageData', (data) => {
            eventBus.$emit('spinner', true);
            this.homeProducts()
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.commit('mutHomePageProds', this.categories)
        next()
    },
    mounted() {
        eventBus.$emit('spinner', true);
        //this.homeProducts()
    },
    data() {
        return {
            spinner: false,
            products: [],

            elc:  1,
            men:  6,
            wom: 12,

            menProducts: [],
            womenProducts: [],
            elcProducts: [],

            cards: [
              {
                  title: 'Glance Designs Festive & Party Printed Women\'s Kurti  (Multicolor)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jk01bww0/kurti/q/3/s/m-evk098-glance-designs-original-imaf7f8sgurzdfky.jpeg?q=70',
                  Price: '299' },
              {
                  title: 'Asus ROG Core i7 8th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics) GL504GM-ES152T Gaming Laptop  (15.6 inch, Black, 2.4 kg)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jll6xzk0/computer/3/v/s/asus-na-gaming-laptop-original-imaf8zqzvef2z5gn.jpeg?q=70',
                  Price: '1,39,990' },
              {
                  title: 'AV Toys 5 Feet teddy bear - 152 cm  (Pink)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/j9it30w0/stuffed-toy/w/t/m/5-feet-teddy-bear-152-av-toys-original-imaez9nfwj5msfyh.jpeg?q=70',
                  Price: '1,547' },
              {
                  title: 'Apple iPhone XS Max (Gold, 64 GB)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jm9hfgw0/mobile/e/8/s/apple-iphone-xs-max-mt522hn-a-original-imaf97f6vzzxdq4p.jpeg?q=70',
                  Price: '1,09,900' }
              ],
            //   categories:[{id: 35, hasPrd: false, cate: 'Electronics', products: []}, {id: 9, hasPrd: false, cate: 'Men', products: []}, {id: 12, hasPrd: false, cate:'Women', products: []}],
              categories:[],
        }
    },
    methods: {

        homeProducts: _.debounce(function() {

            // this.spinner = true;

            let getPrd = {
                            elc: this.elc ,
                            men: this.men ,
                            wom: this.wom,
                            cnt: this.getCountry ? this.getCountry.id : null,
                            st: this.getState ? this.getState.id : null,
                            ct: this.getCity ? this.getCity.id : null,
                    }

            this.$store.dispatch('disHomePageProds', { getPrd: {...getPrd} });

                // axios.get('/homeproducts', {params: {...getPrd}})
                //     .then((res) => {
                //         console.log(res);


                //         if(res) {

                //             let incomingCats = [
                //                     {id: '1', v: 'Electrinics'},
                //                     {id: '6', v: 'Men'},
                //                     {id: '12', v: 'Women'}
                //                 ];


                //             let object = res.data;

                //                 this.categories = [];

                //                     incomingCats.forEach((cat, i) => {
                //                 for (const key in object) {

                //                     if (object.hasOwnProperty(key)) {
                //                         //const element = object[key];
                //                         const element = key;

                //                         console.log(element)


                //                             if(key == cat.v) {

                //                                 if(object[key] != null && object[key].length > 0) {

                //                                     let obj = {

                //                                         id: cat.id,

                //                                         hasPrd: true,

                //                                         cate: key,

                //                                         products: object[key]

                //                                     }

                //                                     console.log(obj)

                //                                     this.categories.push(obj);

                //                                 }

                //                                 if(res.data.ele.length > 0) {

                //                                     this.categories[i].products = ele.splice(0,4);

                //                                     this.categories[i].hasPrd = true;

                //                                 } else {

                //                                     this.categories[i].products = null;

                //                                     this.categories[i].hasPrd = false;
                //                                 }

                //                             }




                //                     }
                //                 }
                //                         });




                //             if(res.data.elc_prd) {

                //                 if(res.data.elc_prd.length > 0) {

                //                     this.categories[0].products = res.data.elc_prd.splice(0,4);

                //                     this.categories[0].hasPrd = true;

                //                 } else {

                //                     this.categories[0].products = null;

                //                     this.categories[0].hasPrd = false;
                //                 }

                //             }

                //             if(res.data.men_prd) {

                //                 if(res.data.men_prd.length > 0) {

                //                     this.categories[1].products = res.data.men_prd.splice(0,4);

                //                     this.categories[1].hasPrd = true;
                //                 } else {

                //                     this.categories[0].products = null;

                //                     this.categories[0].hasPrd = false;
                //                 }

                //             }

                //             if(res.data.wom_prd) {

                //                 if(res.data.wom_prd.length > 0) {

                //                     this.categories[2].products = res.data.wom_prd.splice(0,4);

                //                     this.categories[2].hasPrd = true;

                //                 }
                //             }
                //         }



                //     })
                //     .catch((err) => {
                //         console.log(err.response);
                //     })
                //     .finally(this.spinner = false);
        },1000),
        fromThisCat(id) {

            //this.$store.dispatch('disWantedCategory', {cat_srch: id,});

            this.$router.push({name:'categorysearch',query: {cat_srch : id}});
        }

    },
    computed: {
        getCountry() {

            return this.$store.getters.getCountry;
        },
        getState() {

            return this.$store.getters.getState;
        },
        getCity() {

            if(this.$store.getters.getCity) {

                this.homeProducts();

            } else if (this.getState) {

                this.homeProducts();

            } else if (this.getCountry) {

                this.homeProducts();
            }

            return this.$store.getters.getCity;
        },
        getHomePageProds() {

            eventBus.$emit('spinner', false);

            return this.$store.getters.getHomePageProds;
        }
    },
    watch: {
        getCountry() {
            // this.homeProducts();
        },
        getState() {

            // this.homeProducts();
        },
        getCity() {

            if(this.getCity) {

                this.homeProducts();

            } else if (this.getState) {

                this.homeProducts();

            } else if (this.getCountry) {

                this.homeProducts();
            }

        },
    }
}
</script>

<style scoped>
* {
    font-size: 14px;
}

.v-progress-circular {

    margin: 1rem
}
.center {
  position: relative;
}

.centerSpinner {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/*  Small phones: from 0 to 480px */
@media only screen and (max-width: 480px) {
    .btnSize {
        font-size: 13px;
    }
}
</style>
