<template>
    <div>
       <v-layout wrap justify-space-around fill-height>
           <v-flex xs12 lg2 class="px-2 hidden-sm-and-down">
                <v-flex xs12 class="mb-3">
                    <v-card class="pa-3 background-shadow">
                        <!-- <v-flex xs12>
                            category
                        </v-flex> -->
                        <TreeBrowser @onClick="nodeWasClicked" :items="getCategory"></TreeBrowser>
                    </v-card>
                </v-flex>
                <v-flex xs12 >
                    <v-card class="background-shadow">
                        <filters
                            @wantto="wantto = $event"
                            @brandFilter="brand = $event"
                            :propBrand="brand"
                            @minPrice="minPrice = $event"
                            :propMinPrice="minPrice"
                            @maxPrice="maxPrice = $event"
                            :propMaxPrice="maxPrice"
                            @priceSort="priceSort = $event"
                            :propPriceSort="priceSort"
                            @states="states = $event"
                            @cities="cities = $event"
                            @areas="areas = $event"
                            :propAreas="areas"
                        ></filters>
                    </v-card>
                </v-flex>
           </v-flex>
           <!-- <v-flex xs12 lg9>
               <v-card class="pa-3" >
                    <AppCard :info="getProducts"></AppCard>
               </v-card>
               <v-card  class="background-shadow mb-4" >
                    <v-card-title primary-title >
                        <h1 class="mx-auto"> Sorry, No Items Here...! </h1>
                    </v-card-title>
                </v-card>
           </v-flex> -->
           <v-flex xs12 lg10>
                <v-card class="background-shadow">
                    <AppCard :info="getProducts" ></AppCard>
                    <!-- <AppCard :info="products" :propWebHolder="webHolder"></AppCard> -->
                    <v-card-text v-if="getProducts.length == 0 && !getLoadingSpinner" class="text-xs-center">
                        <h2> No Item Found!!!</h2>
                    </v-card-text>
                </v-card>
                <v-card flat class="text-xs-center pa-4" v-show="getLoadingSpinner">
                    <v-progress-circular
                        :size="70"
                        :width="7"
                        color="gray"
                        indeterminate
                        class="v-progress-circular"
                    ></v-progress-circular>
                </v-card>
            </v-flex>
       </v-layout>
       <!-- ======================================================================= -->

            <v-flex xs12 class="hidden-sm-and-up">
                <v-dialog
                    v-model="filtersDialog"
                    scrollable

                    :overlay="false"
                    max-width="500px"
                    transition="dialog-transition"
                >
                    <Filters></Filters>
                </v-dialog>
                <v-btn
                @click="filtersDialog = true"
                fab
                bottom
                right
                color="pink"
                dark
                fixed
                title="Filters"
                style="background: linear-gradient(to right,#f12711,#f5af19)"
                >
                <v-icon>fas fa-filter</v-icon>
                </v-btn>
            </v-flex>
    </div>
</template>

<script>
import { eventBus } from '../../app.js'
import { selectSearchRoute } from '../../selectproductmixin.js'
import AppCard from '../../components/AppCard'
import TreeBrowser from '../../components/TreeBrowser/treeBrowser'
import Filters from '../../components/Filters'
import _ from 'lodash'

export default {
    components: {
        AppCard,
        TreeBrowser,
        Filters,
    },
    mixins:[selectSearchRoute],
    data() {
        return {
            filtersDialog:false,
            bottom: false,
            catQ:  this.$route.query.cat_srch ? this.$route.query.cat_srch : null,
            brand:  null,
            minPrice: this.$route.query.prc_abv ? this.$route.query.prc_abv : null,
            maxPrice: this.$route.query.prc_blw ? this.$route.query.prc_blw : null,
            priceSort: this.$route.query.prc_srt ? this.$route.query.prc_srt : null,
            states:  null,
            cities:  null,
            areas:  null,
            wantto:  {id:0, value: 'all'},
            // wantto: 0,

        }
    },

    created() {
        eventBus.$on('minMaxGo', (data) => {
            return this.getcat();
        });
    },
    mounted() {
        window.addEventListener('scroll', () => {
        this.bottom = this.bottomVisible()
        });

        this.setQuery();
        this.getcat(this.$route.query.cat_srch);
    },
    computed: {
        getCategory(){

            return {
                        //name: this.$store.getters.getCategoryParent ? this.$store.getters.getCategoryParent.name : 'Category',
                        name: 'Category',
                        child :this.$store.getters.getAllCategory
                    };
        },
        getProducts() {

            return this.$store.getters.getOriginalSearchResultArr;
            //return this.$store.getters.getCategoryProducts;
        },
        // getCatQ: {

        //     get() {

        //         return this.catQ = this.$route.query.cat_srch;
        //     },
        //     set(val) {

        //         console.log(val)
        //         return this.catQ = val;

        //     }

        // },
        getLoadingSpinner(){
            return this.$store.getters.loadingSpinner
        },
        getSearchResultNextPageUrl() {

            return this.$store.getters.getSearchResultNextPageUrl;
        },
        getCountry() {

            return this.$store.getters.getCountry;
        },
        getState() {

            return this.$store.getters.getState;
        },
        getCity() {

            return this.$store.getters.getCity;
        },
        getAllCategorys() {

            return this.$store.getters.getAllCategorys;
        },
    },
    methods: {
        nodeWasClicked(item) {

            if(item.id) {

                //alert(item.name);
                this.catQ = item.id;
                this.setQuery();
            console.log(item);
            }
        },

         getcat: _.debounce(function(cat) {

            /* await this.getCountry ;
            await this.getState ;
            await this.getCity ; */

            /* let form = new FormData();

            if(this.getCatQ != null) {

                form.append('cat_srch', this.getCatQ);
            }

            if(this.priceSort != null) {

                form.append('prc_srt', this.priceSort);
            } */

                //this.setQuery();
            let nir = {
                    cat_srch: cat ? cat : this.catQ,
                    wantto: this.wantto.id,
                    brd: this.brand,
                    prc_abv: this.minPrice,
                    prc_blw: this.maxPrice,
                    prc_srt: this.priceSort,
                    states: this.states,
                    cities: this.cities,
                    areas: this.areas,
                    cnt: this.getCountry ? this.getCountry.id : null,
                    st: this.getState ? this.getState.id : null,
                    ct: this.getCity ? this.getCity.id : null,
                }

                console.log(this.catQ)

            this.$store.dispatch('disWantedCategory', { query: {...nir} });

            //this.$store.dispatch('disSearchResult',{pth: 'products', query: {...nir}})
            //this.$store.dispatch('disSearchResult', {cat_srch: cat,});
        },1000),
        setQuery(inc) {

            this.$router.replace({ query: Object.assign({}, this.$route.query,
                                                                    {
                                                                        brd: this.brand || undefined,
                                                                        wantto: this.wantto.value.toLowerCase() || undefined,
                                                                        // wantto: this.wantto || undefined,
                                                                        prc_abv: this.minPrice || undefined,
                                                                        prc_blw: this.maxPrice || undefined,
                                                                        prc_srt: this.priceSort || undefined,
                                                                        cat_srch: this.catQ || undefined,
                                                                        states: this.states || undefined,
                                                                        cities: this.cities || undefined,
                                                                        areas: this.areas || undefined,
                                                                        cnt: this.getCountry ? this.getCountry.id : undefined  || undefined,
                                                                        st: this.getState ? this.getState.id : undefined  || undefined,
                                                                        ct: this.getCity ? this.getCity.id : undefined || undefined,
                                                                    }
                                                                ) });

        },
        bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
        },
        addBeer:_.debounce(function() {
            console.log(this.getSearchResultNextPageUrl);

                this.$store.dispatch('disSearchCatNextResult',this.getSearchResultNextPageUrl)
            return;
        },1000),
    },
    watch: {
        '$route'(to, from) {
            // console.log(from)
            // console.log(to)
             this.$store.commit('mutSearchReultArr', []);
            this.$store.commit('mutLoadingSpinner', true)
             if(from.fullPath != to.fullPath) {

                 this.catQ = to.query.cat_srch;
                 this.setQuery();

                 this.getcat();

            }
            //this.getcat(this.$route.query.cat_srch)
        },
        bottom(bottom) {
            if (bottom) {


                if(this.getSearchResultNextPageUrl) {
                console.log('hi')

                    this.addBeer()
                }
            }
        },
        wantto() {
            console.log( this.wantto);
            this.setQuery();
        },
        brand() {
            console.log( this.brand);
            // this.getcat();
            this.setQuery();
        },
        priceSort() {
            console.log( this.priceSort);
            // this.getcat();
            this.setQuery();
        },
        areas() {
            console.log( JSON.parse(JSON.stringify(this.areas)));
            // this.getcat();
            this.setQuery();
        },

        getCity() {
            console.log( this.getCity);

            if(this.getCity) {

                this.setQuery();

            } else if (this.getState) {

                this.setQuery();

            } else if (this.getCountry) {

                this.setQuery();
            }
        },
        getState() {

            this.setQuery();

        },
        getCountry() {

            this.setQuery();

        }
    }
}
</script>

<style scoped>

</style>
