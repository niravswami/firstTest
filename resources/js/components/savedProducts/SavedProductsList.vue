<template>
    <v-layout wrap>
        <v-flex xs12 v-if="!getUserInfo">
            <v-card>
                <v-card-text>
                    You Are Not Logged In.
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 v-else>
            <v-card v-show="saveProductsSpinner" >
                <v-flex xs12 class="text-xs-center">
                    <v-progress-circular
                        indeterminate
                        color="amber"
                        class="v-progress-circular"
                    ></v-progress-circular>
                </v-flex>
            </v-card>

            <!-- ====   Saved Products   ==== -->
            <div v-if="!saveProductsSpinner">
                <template v-for="val in trySaved">
                    <v-card v-if="val.arr ? val.arr.length != 0 : ''" :key="val.title">
                        <v-list two-line>
                            <v-subheader>
                                {{ val.title }}
                            </v-subheader>

                            <ListComp :propSavedItems="val.arr" @removeItem="removeSavedProduct($event)"></ListComp>

                            </v-list>
                    </v-card>
                </template>

            </div>
            <div v-if="prd && srv && prt && edu && utm">
                <v-card>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>No Save Product Found.</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>

            </div>
            <!-- <v-card v-if="saveProductsSpinner == false && productsArr ? productsArr.length != 0 : ''">
                <v-list two-line>
                    <v-subheader>
                        Products
                    </v-subheader>

                    <ListComp :propSavedItems="productsArr" @removeItem="removeSavedProduct($event)"></ListComp>

                    </v-list>
            </v-card> -->

            <!-- ====   Saved Services   ==== -->

            <!-- <SavedServices v-if="servicesArr ? servicesArr.length != 0 : ''" :propSavedItems="servicesArr"></SavedServices> -->

            <!-- ====   Saved Properties   ==== -->

            <!-- <SavedProperties v-if="propertiesArr ? propertiesArr.length != 0 : ''" :propSavedItems="propertiesArr"></SavedProperties> -->

            <!-- ====   Saved Education   ==== -->

            <!-- <SavedEducation v-if="educationArr ? educationArr.length != 0 : ''" :propSavedItems="educationArr"></SavedEducation> -->

            <!-- ====   Saved Used Item   ==== -->

            <!-- <SavedUsedItem v-if="useditemsArr ? useditemsArr.length != 0 : ''" :propSavedItems="useditemsArr"></SavedUsedItem> -->

            <!-- ===   Spinner   === -->

            <!-- <v-card
                v-if="productsArr ? productsArr.length == 0 : '' &&
                servicesArr ? servicesArr.length == 0 : '' &&
                propertiesArr ? propertiesArr.length == 0 : '' &&
                educationArr ? educationArr.length == 0 : '' &&
                useditemsArr ? useditemsArr.length == 0 : ''
                && getPropSpinner == false"> -->
            <!-- <v-card
                v-else>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>No Save Product Found.</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card> -->

        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../../app.js'
import SavedServices from './savedServiceAndBusiness'
import SavedProperties from './savedProperties'
import SavedEducation from './savedEducation'
import SavedUsedItem from './savedUsedItems'
import ListComp from './ListComp'
export default {
    components: {
        SavedServices,
        SavedProperties,
        SavedEducation,
        SavedUsedItem,
        ListComp
    },
    props:['propSavedProducts', 'propWebHolder', 'propSpinner'],
    data() {
        return {
            backupImg: require('../../../assets/uploadimg.png'),
            savedProducts: [],
            saveProductsSpinner: false,
            prd: false,
            srv: false,
            prt: false,
            edu: false,
            utm: false,

        }
    },
    created() {
        eventBus.$on('getSaveItems', (data) => {

            this.getSaveProducts();
        });
        eventBus.$on('savedProduct', (data) => {

            this.forcedGetSavedProducts();
        });
    },
    computed: {
        getTotalOfSavedProducts(){
            return this.$store.getters.getTotalCountOfSavedProducts;
        },
        productsArr() {

            return this.savedProducts.savedProducts;

            // if(this.propSavedProducts.savedProducts && Array.isArray(this.propSavedProducts.savedProducts)) {
            //     return this.propSavedProducts.savedProducts;
            // }
        },
        servicesArr() {

            return this.savedProducts.savedServices;

            // if(this.propSavedProducts.savedServices && Array.isArray(this.propSavedProducts.savedServices)) {

            //     return this.propSavedProducts.savedServices;
            // }
        },
        propertiesArr() {

            return this.savedProducts.property;

            // if(this.propSavedProducts.property && Array.isArray(this.propSavedProducts.property)) {

            //     return this.propSavedProducts;
            // }
        },
        educationArr() {

            return this.savedProducts.education;

            // if(this.propSavedProducts.education && Array.isArray(this.propSavedProducts.education)) {

            //     return this.propSavedProducts.education;
            // }
        },
        useditemsArr() {

            // return console.log(this.savedProducts.useditems);
            return this.savedProducts.useditems;

            // if(this.propSavedProducts.useditems && Array.isArray(this.propSavedProducts.useditems)) {

            //     return this.propSavedProducts.useditems;
            // }
        },
        trySaved() {

            this.savedProducts.savedProducts && this.savedProducts.savedProducts.length > 0 ? this.prd = false : this.prd = true;
            this.savedProducts.savedServices && this.savedProducts.savedServices.length > 0  ? this.srv = false : this.srv = true;
            this.savedProducts.property && this.savedProducts.property.length > 0 ? this.prt = false : this.prt = true;
            this.savedProducts.education && this.savedProducts.education.length > 0 ? this.edu = false : this.edu = true;
            this.savedProducts.useditems && this.savedProducts.useditems.length > 0 ? this.utm = false : this.utm = true;

            return [

                {
                    title: 'Products',
                    arr: this.savedProducts.savedProducts,
                },
                {
                    title: 'Service / Business',
                    arr: this.savedProducts.savedServices,
                },
                {
                    title: 'Properties',
                    arr: this.savedProducts.property,
                },
                {
                    title: 'Education',
                    arr: this.savedProducts.education,
                },
                {
                    title: 'used Items',
                    arr: this.savedProducts.useditems,
                },
            ]
        },
        getPropSpinner() {

            return this.propSpinner;
        },
        getUserInfo ()
        {
            return this.$store.getters.getUserInfo;
        },
    },

    methods: {
        // goToPtoduct(itemID, StrID, Href) {

        //     this.$router.push({ name: 'singleproduct', params: { prd_id: itemID }, props:{ propID : itemID}, query: {websrch: this.propWebHolder, svid: StrID, prid: itemID , ref: Href}});
        // },
        removeSavedProduct(itemID) {

            /* let form = new FormData();

            form.append('prd_id', this.$route.query.prid) */
            //let form = this.$route.query.prid;
            //return;

            var r = confirm("Are you sure you want to remove from saved list");

                if (r == true) {
                    axios.delete('/saveproducts/'+itemID)
                        .then((res) => {
                            console.log(res.data);

                            if(res) {

                                eventBus.$emit('savedProduct',itemID);
                                this.$store.dispatch('disTotalCountOfSavedProducts');
                            }

                        })
                        .catch((err) => {
                            console.log(err.response);
                        })
                } else {

                    return;
                }
        },

        getSaveProducts() {

        if(localStorage.getItem('token')) {

            this.saveProductsSpinner = true;


            if(this.savedProducts.length == 0) {

                this.prd = false;
                this.srv = false;
                this.prt = false;
                this.edu = false;
                this.utm = false;

                setTimeout(() => {

                    this.forcedGetSavedProducts();
                }, 3000)


                } else {

                    this.saveProductsSpinner = false;
                    return;
                }
            }

        },
        forcedGetSavedProducts() {

            this.saveProductsSpinner = true;

            axios.get('/saveproducts')
                .then((res) => {
                    console.log(res.data);

                        this.savedProducts = res.data.savedProducts;
                        this.savedProducts = res.data;

                })
                .catch((err) => {
                    console.log(err.response);
                })
                .finally(this.saveProductsSpinner = false);

        },

    }
}
</script>

<style scoped>
.v-progress-circular {

    margin: 1rem
}
</style>
