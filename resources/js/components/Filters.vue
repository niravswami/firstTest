<template>
    <v-layout  wrap >
        <v-flex xs12>
            <v-card flat class="pa-3">
                <v-flex xs12 v-show="this.$route.params.webholder == 'products' || this.$route.query.cat_srch">
                    <!-- <v-card-text class="pl-0 pb-0 subheading">
                        Sort By
                    </v-card-text> -->
                    <!-- <v-select
                        :items="wanttoArr"
                        v-model="wantto"
                        item-text="value"
                        item-value="id"
                        return-object
                        solo
                        ></v-select> -->

                        <v-radio-group v-model="wantto">
                            <v-radio
                                v-for="val in wanttoArr"
                                :key="val.id"
                                :label="`${val.value}`"
                                :value="val"
                                return-object
                                color="orange darken-2"
                            ></v-radio>
                        </v-radio-group>

                    <!-- {{ this.$route.params.webholder }} -->
                <hr>
                </v-flex>

                <v-flex xs12>
                    <v-card-text class="pl-0 pb-0 subheading">
                         Price Range
                    </v-card-text>
                    <v-text-field
                    class="mb-2"
                        box
                        label="Min Price"
                        v-model="minPrice"
                        :error-messages="errors.collect('amount')"
                        v-validate="{regex: /^[0-9]+(\.[0-9]{2})?$/}"
                        data-vv-name="amount"
                        prepend-icon="fas fa-rupee-sign"
                        color="orange darken-2"
                        hide-details
                        clearable
                    ></v-text-field>
                </v-flex>

                <v-flex xs12>
                    <v-text-field
                    class="mb-2"
                        box
                        label="Max Price"
                        v-model="maxPrice"
                        :error-messages="errors.collect('amount')"
                        v-validate="{ regex: /^[0-9]+(\.[0-9]{2})?$/}"
                        data-vv-name="amount"
                        prepend-icon="fas fa-rupee-sign"
                        color="orange darken-2"
                        hide-details
                        clearable
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-btn small block outline color="success" dark @click="minMaxGo">Go</v-btn>
                </v-flex>

                <!-- ==============   States   =============================== -->

                <v-flex xs12 v-if="getCategoryStates != null && getCategoryStates.length > 0">
                    <hr>
                    <v-card-text class="pl-0 subheading">
                        States
                    </v-card-text>
                    <v-select
                        v-model="StatesSelected"
                        :items="getCategoryStates"
                        item-text="name"
                        item-value="id"
                        solo
                        chips
                        label="Select State"
                        multiple
                        dense
                        @focus="areasSltd"
                        attach
                        clearable
                        deletable-chips

                    ></v-select>
                </v-flex>

                <!-- ==============   Cities   =============================== -->

                <v-flex xs12 v-if="getCategoryCities != null && getCategoryCities.length > 0">
                    <hr>
                    <v-card-text class="pl-0 subheading">
                        Cities
                    </v-card-text>
                    <v-select
                        v-model="citiesSelected"
                        :items="getCategoryCities"
                        item-text="name"
                        item-value="id"
                        solo
                        chips
                        label="Select City"
                        multiple
                        dense
                        @focus="areasSltd"
                        attach
                        clearable
                        deletable-chips

                    ></v-select>
                </v-flex>

                <!-- ==============   Areas   =============================== -->

                <v-flex xs12 v-if="getCategoryAreas != null && getCategoryAreas.length > 0">
                    <hr>
                    <v-card-text class="pl-0 subheading">
                        Areas
                    </v-card-text>
                    <v-select
                        v-model="areasSelected"
                        :items="getCategoryAreas"
                        item-text="name"
                        item-value="id"
                        solo
                        chips
                        label="Select Area"
                        multiple
                        dense
                        @focus="areasSltd"
                        attach
                        clearable
                        deletable-chips

                    ></v-select>
                </v-flex>

                <v-flex xs12 v-if="getCategoryBrand != null && getCategoryBrand.length > 0">
                    <hr>

                        <v-card-text class="pl-0 pb-0 subheading">
                            Brand
                        </v-card-text>
                        <v-select
                        v-model="brandFilter"
                        :items="getCategoryBrand"
                        item-text="name"
                        item-value="id"
                        solo
                        chips
                        label="Select Brand"
                        multiple
                        dense
                        @focus="areasSltd"
                        attach
                        clearable
                        deletable-chips

                    ></v-select>
                </v-flex>

                <!-- <v-flex xs12 v-if="colorFilter == true">
                    <v-card-text class="pl-0 pb-0 subheading">
                        Color
                    </v-card-text>
                    <v-layout  wrap>
                        <v-flex xs12>
                            <v-checkbox hide-details label="Color one" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Color two" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Color three" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Color four" class="mt-0"  v-model="value" value="value"></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <hr>
                <v-flex xs12 v-if="colorFilter == true">
                    <v-card-text class="pl-0 pb-0 subheading">
                        Material
                    </v-card-text>
                    <v-layout  wrap>
                        <v-flex xs12>
                            <v-checkbox hide-details label="Material one" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Material two" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Material three" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Material four" class="mt-0"  v-model="value" value="value"></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 v-if="colorFilter == true">
                    <v-card-text class="pl-0 pb-0 subheading">
                        Size
                    </v-card-text>
                    <v-layout  wrap>
                        <v-flex xs12>
                            <v-checkbox hide-details label="Size one" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Size two" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Size three" class="mt-0"  v-model="value" value="value"></v-checkbox>
                            <v-checkbox hide-details label="Size four" class="mt-0"  v-model="value" value="value"></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-flex> -->


            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../app.js'
export default {
    components: {

    },
    created() {
        this.filterProductsArr

        eventBus.$on('filterReset', (data) => {

            this.filterReset();
        });
    },
    mounted() {

    },
    props:['propWantto', 'propBrand', 'propMinPrice', 'propMaxPrice', 'propPriceSort', 'propAreas'],
    data() {
        return {
            filters: {},
            priceSort: '0',
            value: '',
            StatesSelected:  [],
            citiesSelected:  [],
            areasSelected:  [],
            areasArr: [],
            wanttoArr: [
                {
                    id: 0,
                    value: 'All'
                },
                {
                    id: 1,
                    value: 'Retail'
                },
                {
                    id: 2,
                    value: 'Rent'
                },
                {
                    id: 3,
                    value: 'Wholesale'
                },
            ],
            wantto: this.propWantto ? this.propWantto : {id:0 , value: 'All'},
            // wantto: 0,

            /* ======== PRICE FILTER ======== */

            minPrice: this.propMinPrice ? this.propMinPrice : null,
            maxPrice: this.propMaxPrice ? this.propMaxPrice : null,

            /* ======== BRAND FILTER ======== */

            brandArr:[
                {brd_id: 1, name: 'Adidas'},
                {brd_id: 2, name: 'Samsung'},
                {brd_id: 3, name: 'Sony'},
                {brd_id: 4, name: 'Apple'},
                {brd_id: 5, name: 'Philips'},
                {brd_id: 6, name: 'Amul'},
                {brd_id: 7, name: 'Nestlé'},
                {brd_id: 8, name: 'BMW'},
                {brd_id: 9, name: 'Huawei'},
                {brd_id: 10, name: 'Levi\'s'},
            ],
            brandFilter: [],

            /* ======== COLOR FILTER ======== */
            colorFilter: true,
        }
    },
    methods: {

        areasSltd() {
            let arr = this.getOriginalSearchResultArr;

            let sltAre = []

           arr.filter((prd) => {
                if(prd.area) {
                    sltAre.push(prd.area.name)
                }
            })

            this.areasArr = sltAre
        },

        /* for Arrange price */
        /* priceSort() {

            if(this.minMax == 'min') {

              return this.getFilteredSearchResultArr.sort(function(a, b){return a.totalPrice - b.totalPrice})

            }
            if(this.minMax == 'max') {
               return this.getFilteredSearchResultArr.sort(function(a, b){return b.totalPrice - a.totalPrice})

            }
            if(this.minMax == 'rating') {
               return this.getFilteredSearchResultArr.sort(function(a, b){return b.rating - a.rating})

            }

        }, */
        updateNav(query) {
            let data = this.$route.query;
            Object.assign({}, this.$route.query);
            Object.assign(data, query);
            this.$router.push({name: 'searchresult', query : data });
        },

        minMaxGo() {
            eventBus.$emit('minMaxGo')
        },

        regionChange() {

            this.StatesSelected = [];
            this.citiesSelected = [];
            this.areasSelected = [];

        },
        filterReset() {

            this.wantto = {id:0 , value: 'All'};

            this.brandFilter = [];

            this.minPrice =  null,

            this.maxPrice =  null,

            this.regionChange();
        },
    },
    computed: {
        getOriginalSearchResultArr() {

           return this.$store.getters.getOriginalSearchResultArr
        },
        getFilteredSearchResultArr() {
            return this.$store.getters.getFilteredSearchResultArr;
        },
        getCategoryStates() {

            return this.$store.getters.getCategoryStates;
        },
        getCategoryCities() {
            return this.$store.getters.getCategoryCities;
        },
        getCategoryAreas() {
            return this.$store.getters.getCategoryAreas;
        },
        getCategoryBrand() {

            return this.$store.getters.getCategoryBrand;
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
        getWantto() {
            return this.propWantto;
        }

    },
    watch: {
        '$route'(to, from) {

        },
        areasSelected() {
            this.$store.commit('mutAreaArr', JSON.parse(JSON.stringify(this.areasSelected)))
        },
        minMax() {
            this.$emit('emitMinMax', this.minMax);
        },
        getCity() {

            this.regionChange();
        },
        getState() {

            this.regionChange();
        },
        getCountry() {

            this.regionChange();
        },
        StatesSelected() {
            this.$store.commit('mutSearchReultArr', []);
            this.$emit('states', this.StatesSelected);
            eventBus.$emit('minMaxGo')
        },
        citiesSelected() {
            this.$store.commit('mutSearchReultArr', []);
            this.$emit('cities', this.citiesSelected);
            eventBus.$emit('minMaxGo')
        },
        areasSelected() {
            this.$store.commit('mutSearchReultArr', []);
            this.$emit('areas', this.areasSelected);
            eventBus.$emit('minMaxGo')
        },
        brandFilter() {
            this.$store.commit('mutSearchReultArr', []);
            console.log(JSON.parse(JSON.stringify(this.brandFilter)))
            /* let brd = {brd : this.brandFilter}
            this.updateNav(brd); */

            this.$emit('brandFilter', JSON.parse(JSON.stringify(this.brandFilter)));
            return  //eventBus.$emit('minMaxGo');

            let a = this.brandFilter.toString();;
            if(a.length != 0) {

            } else {

                this.$emit('brandFilter', null);
            }
        },
        minPrice() {
            this.$store.commit('mutSearchReultArr', []);

            if(this.minPrice != '') {

                this.$emit('minPrice', this.minPrice);

            } else {

                this.$emit('minPrice', null);
            }

        },
        maxPrice() {
            this.$store.commit('mutSearchReultArr', []);

            if(this.maxPrice != '') {

                this.$emit('maxPrice', this.maxPrice);
            } else {

                this.$emit('maxPrice', null);
            }
        },
        priceSort() {

            if(this.priceSort == 'revalence') {

                this.$emit('priceSort', null);

                } else {

                this.$emit('priceSort', this.priceSort);

            }
        },
        wantto() {

            this.$store.commit('mutSearchReultArr', []);

            // sessionStorage.setItem('wanttofltr', JSON.stringify(this.wantto));

            this.$emit('wantto',  this.wantto);
        }
    }
}
</script>

<style scoped>

</style>
