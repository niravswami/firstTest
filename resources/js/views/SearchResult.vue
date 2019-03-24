<template>
    <v-flex xs12 lg12>
        <v-layout  wrap justify-space-around fill-height>
            <v-flex xs12 lg2 class="px-2 hidden-sm-and-down">
                <v-card app flat class="background-shadow ">
                    <filters
                        @wantto="wantto = $event"
                        @propWantto="wantto"
                        @emitMinMax="minMax = $event"
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
                    <v-flex xs12 lg10>
                        <v-card class="background-shadow">
                            <AppCard :info="getSearchResultArr" :propWebHolder="webHolder"></AppCard>
                            <!-- <AppCard :info="products" :propWebHolder="webHolder"></AppCard> -->
                            <v-card-text v-if="getSearchResultArr.length == 0 && !getLoadingSpinner" class="text-xs-center">
                                <h2>Sorry... No Item Found!!!</h2>
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
    </v-flex>
</template>

<script>
import { eventBus } from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import AppCard from './../components/AppCard'
import Filters from './../components/Filters'
import _ from 'lodash'

export default {
    components: {
        AppCard,
        Filters
    },
    created() {
        eventBus.$on('minMaxGo', (data) => {
            this.setQuery();
            return this.getSearch();
        });
        eventBus.$on('query', (data) => {
            return this.q = data;
        });
        eventBus.$on('srchBtnOnPth', (data) => {
            console.log('srchBtnOnP')
            this.setQuery();
            return this.getSearch();
        });
        /* eventBus.$on('searchArr', (data) => {
            return this.products = data;
        }); */
        /* axios.get('/products')
        .then((response) => {
            this.products = response.data;

            console.log(response)
            //console.log(response)
        })
        .catch((errors) => {
            console.log(errors)
        }) */
    },
    mounted() {
        window.addEventListener('scroll', () => {
        this.bottom = this.bottomVisible()
        });
        //this.addBeer();

        // this.getSearch(this.$route.query.srh, this.$route.query.pth);

       //this.$store.dispatch('disSearchArr', {pth: this.$route.query.pth, srch: this.$route.query.srch})
       /* setTimeout(() => {

           this.products = this.getSearchArr
       }, 200) */
       //this.$router.push({ name: 'searchresult', params: {webholder: this.$route.params.webholder },  query: {pth: this.$route.query.pth , srch: this.$route.query.srch} })
            //this.routeSelected();

            // this.IsJsonString();

            this.setQuery();

           this.getSearch(this.$route.query.pth, this.$route.query.q);
           //this.getSearch();

        },
       /*  beforeRouteLeave(to, from, next){

            this.$store.commit('mutClearSearchResult');

            next();
        }, */
        mixins: [selectSearchRoute],

    data() {
        return {
            pagination: {
                current_page: 1,

            },
            webHolder: '',
            minMax: '',
            products: [],
            filtersDialog: false,
            bottom: false,
            loadingSpinner: false,
                q: this.$route.query.q ? this.$route.query.q  : null,
                brand: null,
                minPrice: this.$route.query.prc_abv ? this.$route.query.prc_abv : null,
                maxPrice: this.$route.query.prc_blw ? this.$route.query.prc_blw : null,
                priceSort: null,
                catSearch: this.$route.query.cat_srch ? this.$route.query.cat_srch  : null,
                states:  null,
                cities:  null,
                areas:  null,
                wantto:  {id:0, value: 'all'},

        }
    },
    methods: {
        IsJsonString() {

            let a = sessionStorage.getItem('wanttofltr');

            if(a) {

                var json = JSON.parse(a);

                this.wantto = json;
            }

        },

        getSearch: _.debounce(function(pth, q) {

            //this.$store.dispatch('disSearchResult',{pth: pth, srch: route})
            //console.log(JSON.parse(JSON.stringify(this.searchOptionSelected)));

            let srchRoute= this.getSearchOptionSelected.web;

            //console.log(srchRoute)
            //console.log(JSON.parse(JSON.stringify(this.getSearchOptionSelected)));


            let nir = {
                    q: this.q,
                    wantto: this.wantto.id,
                    brd: this.brand,
                    states: this.states,
                    cities: this.cities,
                    areas: this.areas,
                    prc_abv: this.minPrice,
                    prc_blw: this.maxPrice,
                    prc_srt: this.priceSort,
                    cat_srch: this.catSearch,
                    cnt: this.getCountry ? this.getCountry.id : null,
                    st: this.getState ? this.getState.id : null,
                    ct: this.getCity ? this.getCity.id : null,
                }



            this.$store.dispatch('disSearchResult',{pth: srchRoute, query: {...nir}});

            // this.setQuery();

            //axios.get('/'+ pth +'?q=' + route)
            /* axios.get(`/${srchRoute}`, {

                params : nir

            })
                .then((response) => {
                    this.products = response.data.data;
                    // this.searchVisible = true;
                    console.log(response);
                })
                .catch((err) => {

                    console.log(err)
                }) */
            if(this.products == []) {

            } else {

               // this.$store.dispatch('disSearchArr', {pth: pth, srch: route})


            }

        }, 1000),

        bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
        },
        addBeer: _.debounce(function() {
            console.log(this.getSearchResultNextPageUrl);

                this.$store.dispatch('disSearchNextResult',this.getSearchResultNextPageUrl)
            return;
            axios.get(this.getSearchResultNextPageUrl)
                .then(response => {

                    console.log(response);

                    /* if (this.bottomVisible()) {
                        this.addBeer()
                    } */
                })
                .catch((err) => {
                    console.log(err.response);
                });
        },1000),
        setQuery() {

            this.$router.replace({ query: Object.assign({}, this.$route.query,
                                                                    {
                                                                        brd: this.brand || undefined,
                                                                        wantto: this.wantto.value.toLowerCase() || undefined,
                                                                        prc_abv: this.minPrice || undefined,
                                                                        prc_blw: this.maxPrice || undefined,
                                                                        prc_srt: this.priceSort || undefined,
                                                                        //cat_srch: this.catQ || undefined,
                                                                        states: this.states || undefined,
                                                                        cities: this.cities || undefined,
                                                                        areas: this.areas || undefined,
                                                                        cnt: this.getCountry ? this.getCountry.id : undefined  || undefined,
                                                                        st: this.getState ? this.getState.id : undefined  || undefined,
                                                                        ct: this.getCity ? this.getCity.id : undefined || undefined,
                                                                    }
                                                                ) });
        }
    },
    computed: {
        getSearchResultArr() {

            return this.$store.getters.getOriginalSearchResultArr;
            // return this.$store.getters.getFilteredSearchResultArr;

            // let x = this.priceSort;

            // switch (x) {

            //     case 'p_asc':
            //       return this.$store.getters.getFilteredSearchResultArr.sort(function(a, b){return a.totalPrice - b.totalPrice});
            //       break;

            //   case 'p_desc':
            //       return this.$store.getters.getFilteredSearchResultArr.sort(function(a, b){return b.totalPrice - a.totalPrice});
            //       break;

            //   default:
            //     return this.$store.getters.getFilteredSearchResultArr;
            //   }
        },
        getSearchResultNextPageUrl() {

            return this.$store.getters.getSearchResultNextPageUrl;
        },
        getLoadingSpinner(){
            return this.$store.getters.loadingSpinner
        },
        getSearchOptionSelected() {
            return this.$store.getters.getSearchOptionSelected;
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
    },
     watch: {
         '$route'(to, from){
             this.$store.commit('mutSearchReultArr', []);
             this.$store.commit('mutLoadingSpinner', true)
             this.q = this.$route.query.q;

             this.cat_srch = this.$route.query.cat_srch;

             //console.log(this.$route.query.cat_srch)

             this.setQuery();

             this.getSearch(this.$route.query.pth, this.$route.query.q);



           //this.$store.dispatch('disSearchResult',{pth: this.$route.query.pth, srch: this.$route.query.srh})
         },
         bottom(bottom) {
            if (bottom) {

                if(this.getSearchResultNextPageUrl) {

                    this.addBeer()
                }
            }
        },
        q() {
            console.log( this.q);
        },
        wantto() {
            console.log( this.wantto);
            this.setQuery();
        },
        minMax() {
            console.log( this.minMax);
        },
        brand() {
            console.log( this.brand);
            this.setQuery();
        },
        priceSort() {
            console.log( this.priceSort);
            this.setQuery();
        },
        areas() {
            console.log( JSON.parse(JSON.stringify(this.areas)));
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
.post {
    position: sticky;
    top: 70px;
}
.v-progress-circular {

    margin: 1rem
}
</style>
