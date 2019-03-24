<template>
    <v-flex xs12 lg12>
        <v-container grid-list-md fluid>
        <v-layout wrap  class="mx-auto">
            <v-flex xs12 lg9 v-if="hasItems">
                <div >
                    <v-layout wrap>
                        <v-flex xs6 lg4 v-for="(item, index) in productsArr" :key="index">

                                <v-card >
                                    <v-flex xs12 class="text-xs-right hidden-md-and-up">
                                        <v-menu bottom left>
                                            <v-btn slot="activator" icon>
                                                <v-icon>more_horiz</v-icon>
                                            </v-btn>

                                            <v-list>
                                                <v-list-tile @click="editProduct(item.id)">
                                                    <v-list-tile-title>Edit</v-list-tile-title>
                                                </v-list-tile>
                                                <v-list-tile @click="deleteProduct(item.id)">
                                                    <v-list-tile-title>Delete</v-list-tile-title>
                                                </v-list-tile>
                                            </v-list>
                                        </v-menu>
                                    </v-flex>
                                    <v-img v-if="item.image != null" :src="item.image" class="brd" aspect-ratio="1" contain></v-img>
                                    <v-img v-else-if="item.images != null" :src="item.images[0]" class="brd" aspect-ratio="1" contain></v-img>
                                    <v-img v-else :src="backupImg" class="brd" aspect-ratio="1" contain></v-img>
                                    <!-- <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="2.75"
                                ></v-img> -->

                                    <v-list three-line>

                                        <v-list-tile  >
                                            <!-- <v-list-tile-action class="mr-2">

                                            </v-list-tile-action> -->
                                            <!-- <v-list-tile-avatar tile >
                                                <img :src="item.image">
                                                <v-img v-if="item.image != null"  :src="item.image" class="brd" contain></v-img>
                                                <v-img v-else-if="item.images != null"  :src="item.images[0]" class="brd" contain></v-img>
                                                <v-img v-else :src="backupImg" class="brd" contain></v-img>
                                                </v-list-tile-avatar> -->

                                            <v-list-tile-content>
                                                <v-list-tile-title :title="item.title">{{ item.title }}</v-list-tile-title>
                                                <!-- <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title> -->
                                                <v-list-tile-sub-title><span>₹ </span>{{ item.totalPrice ? item.totalPrice : 'Contact For Details'}}
                                                    <span v-if="item.rent_per">/ {{ item.rent_per}}</span>
                                                    <span v-if="item.feesper">/ {{ item.feesper.name}}</span>
                                                    <span v-if="item.per">/ {{ item.per}}</span>
                                                    <span v-if="item.what == 'products'">| {{ item.discount? item.discount: 0 }}% off</span>

                                                </v-list-tile-sub-title>
                                            </v-list-tile-content>

                                            <v-list-tile-action class="hidden-md-and-down">
                                                <v-menu bottom left>
                                                    <v-btn slot="activator" icon>
                                                        <v-icon>more_vert</v-icon>
                                                    </v-btn>

                                                    <v-list>
                                                        <v-list-tile @click="editProduct(item.id)">
                                                            <v-list-tile-title>Edit</v-list-tile-title>
                                                        </v-list-tile>
                                                        <v-list-tile @click="deleteProduct(item.id)">
                                                            <v-list-tile-title>Delete</v-list-tile-title>
                                                        </v-list-tile>
                                                    </v-list>
                                                </v-menu>
                                                <!-- <v-btn icon ripple>
                                                    <v-icon color="">more_vert</v-icon>
                                                </v-btn> -->
                                            </v-list-tile-action>
                                        </v-list-tile>
                                    </v-list>
                                </v-card>
                        </v-flex>
                    </v-layout>
                </div>

            </v-flex>
            <v-flex xs12 lg8 v-else>
                <v-card class="pa-3">

                    <h2>No Items Here...</h2>
                </v-card>
            </v-flex>
            <v-flex xs12 lg3 class="hidden-md-and-down">
                    <v-card class="sticky background-shadow">

                  <v-layout  wrap >


                    <v-flex xs6 sm2 md2 lg12 v-if="getStoreviewInfo.prd_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(0)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Products</span>  <span> ({{ getStoreviewInfo.prd_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg12 v-if="getStoreviewInfo.snb_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(1)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Service / Bussiness</span>  <span> ({{ getStoreviewInfo.snb_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs6 sm2 md2 lg12 v-if="getStoreviewInfo.prp_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(2)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Property</span>  <span> ({{ getStoreviewInfo.prp_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs6 sm2 md2 lg12 v-if="getStoreviewInfo.edu_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(3)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Education</span>  <span> ({{ getStoreviewInfo.edu_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg12 v-if="getStoreviewInfo.utm_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(4)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Used Items</span>  <span> ({{ getStoreviewInfo.utm_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg12 v-if="getStoreviewInfo.inv_count != 0  && getStoreviewInfo.inv_count != null">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(5)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Inventory Items</span>  <span> ({{ getStoreviewInfo.inv_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        </v-container>



        <!-- ===================   Edit Dialog   ======================= -->

        <v-layout justify-center>
            <v-dialog v-if="dialog" v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-card>
                    <v-toolbar dark fixed color="primary" class="text-xs-center mb-3">
                        <v-flex xs12 lg8 class="mx-auto ">
                        <v-card-actions>
                            <v-toolbar-title>{{ editTitle }}</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon @click.native="dialog = false" dark>
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-card-actions>

                        </v-flex>
                    </v-toolbar>

                    <!-- ===   Spinner   === -->

                    <v-card flat class="text-xs-center pa-5 mt-5" v-if="getLoadingSpinner">
                        <v-progress-circular :size="70" :width="7" color="gray" indeterminate class="v-progress-circular"></v-progress-circular>
                    </v-card>
                    <!-- ===   Product Edit Form   === -->

                    <v-flex v-else xs12 lg8 class="mx-auto pt-5 mt-5">
                        <div v-if="productEdit">
                            <ProductEditForm :data="data" :propWhichSeleced="whichSeleced"></ProductEditForm>
                        </div>
                        <div v-if="serviceBusinessEdit">
                            <ServiceUpdateForm :data="data" :propWhichSeleced="whichSeleced"></ServiceUpdateForm>
                        </div>
                        <div v-if="propertyEdit">
                            <PropertyUpdateForm :data="data" :propWhichSeleced="whichSeleced"></PropertyUpdateForm>
                        </div>

                        <div v-if="educationEdit">
                            <EducationUpdateForm :data="data" :propWhichSeleced="whichSeleced"></EducationUpdateForm>
                        </div>

                        <div v-if="usedItemEdit">
                            <UsedItemUpdateForm :data="data" :propWhichSeleced="whichSeleced"></UsedItemUpdateForm>
                        </div>
                    </v-flex>
                </v-card>
            </v-dialog>
        </v-layout>

        <!-- ==============   Delete Dialog   ========================= -->

        <v-layout justify-center>
            <v-dialog v-model="deleteDialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-card>
                    <v-toolbar dark fixed color="error" class="text-xs-center mb-3">
                        <!-- <v-btn icon @click.native="dialog = false" dark>
                            <v-icon>close</v-icon>
                        </v-btn> -->
                        <v-flex xs12 lg8 class="mx-auto ">
                        <v-card-actions>
                            <v-toolbar-title>Delete</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <!-- <v-btn icon @click.native="dialog = false" dark>
                                <v-icon>close</v-icon>
                            </v-btn> -->
                        </v-card-actions>

                        </v-flex>
                    </v-toolbar>
                    <v-card flat class="text-xs-center pa-4" v-if="deleteSpinner">
                        <v-progress-circular :size="70" :width="7" color="gray" indeterminate class="v-progress-circular"></v-progress-circular>
                    </v-card>
                    <v-flex v-else xs12 lg8 class="mx-auto ">
                        <DeleteProductComp :data="data" :propWhichSeleced="whichSeleced"></DeleteProductComp>
                    </v-flex>
                </v-card>
            </v-dialog>
        </v-layout>

        <!-- ======================  for mobile   ========================== -->

        <v-bottom-sheet v-model="sheet" class="hidden-md-and-up">

            <v-btn
                slot="activator"
                color="purple"
                dark
                fixed
                fab
                bottom
                right
            >
              <v-icon>list</v-icon>
            </v-btn>
            <v-card >

                  <v-layout  wrap >


                    <v-flex xs12 sm2 md2 lg12 v-if="getStoreviewInfo.prd_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(0)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Products</span>  <span> ({{ getStoreviewInfo.prd_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg12 v-if="getStoreviewInfo.snb_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(1)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Service / Bussiness</span>  <span> ({{ getStoreviewInfo.snb_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs12 sm2 md2 lg12 v-if="getStoreviewInfo.prp_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(2)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Property</span>  <span> ({{ getStoreviewInfo.prp_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs12 sm2 md2 lg12 v-if="getStoreviewInfo.edu_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(3)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Education</span>  <span> ({{ getStoreviewInfo.edu_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg12 v-if="getStoreviewInfo.utm_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(4)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Used Items</span>  <span> ({{ getStoreviewInfo.utm_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg12 v-if="getStoreviewInfo.inv_count != 0  && getStoreviewInfo.inv_count != null">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(5)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Inventory Items</span>  <span> ({{ getStoreviewInfo.inv_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
            </v-bottom-sheet>

            <!-- =========================   Info Dialog   ======================== -->

            <v-layout justify-center >
                <v-dialog v-if="infoDialog" v-model="infoDialog" persistent max-width="500">
                    <v-card class="pa-1">
                        <!-- <v-card-title class="headline">headline</v-card-title> -->
                        <v-alert
                            :value="true"
                            type="success"
                            >
                                {{ infoDialogText }}
                            </v-alert>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click.native="infoDialog = false">Ok</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>


    </v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { selectSearchRoute } from '../../selectproductmixin.js'
import { StoreviewProductsMixin } from '../../storeviewproductsmixin.js'
import ProductEditForm from '../../components/forms/ProductEditForm'
import DeleteProductComp from '../../components/DeleteProductComp'
import ServiceUpdateForm from '../../components/forms/ServiceEditForm'
import EducationUpdateForm from '../../components/forms/EducationEditForm'
import UsedItemUpdateForm from '../../components/forms/UsedItemEditForm'
import PropertyUpdateForm from '../../components/forms/PropertyEditForm'

export default {
    components: {
        ProductEditForm,
        DeleteProductComp,
        ServiceUpdateForm,
        EducationUpdateForm,
        UsedItemUpdateForm,
        PropertyUpdateForm
    },
    mixins:[selectSearchRoute, StoreviewProductsMixin],
    created() {
        eventBus.$on('dialogSpinner', (data) => {
            this.dialog = true;
            return this.getLoadingSpinner = data;

        });
        eventBus.$on('closeEditFormDialog', (data) => {

            switch (data) {
                case 'products':

                    this.getProducts();
                    break;

                case 'serviceandbusiness':

                    this.getService();
                    break;

                case 'properties':

                    this.getProperties();
                    break;

                case 'education':

                    this.getEducation();
                    break;

                case 'useditems':

                    this.getUsedItems();
                    break;

                default:
                    'k'
                    break;
            }

            this.dialog = false;
            this.data = {};
            return;
        });
        eventBus.$on('deleteProductDialog', (data) => {

            switch (data) {
                case 'products':

                    this.getProducts();
                    break;

                case 'serviceandbusiness':

                    this.getService();
                    break;

                case 'properties':

                    this.getProperties();
                    break;

                case 'education':

                    this.getEducation();
                    break;

                case 'useditems':

                    this.getUsedItems();
                    break;

                default:
                    'k'
                    break;
            }

            this.deleteDialog = false;
            return;
        });

        eventBus.$on('cancelDelete', (data) => {
            this.deleteDialog = data;
            this.data = {};
            return;
        });
        // eventBus.$on('closeEditserviceBusinessDialog', (data) => {
        //     this.dialog = data;
        //     //this.serviceBusinessEdit = data;
        //     this.data = {};
        //     return;
        // });
        // eventBus.$on('closeEditpropertyDialog', (data) => {
        //     this.dialog = data;
        //     //this.propertyEdit = data;
        //     this.data = {};
        //     return;
        // });
        // eventBus.$on('closeEditeducationDialog', (data) => {
        //     this.dialog = data;
        //     //this.educationEdit = data;
        //     this.data = {};
        //     return;
        // });
        // eventBus.$on('closeEditUsedItemDialog', (data) => {
        //     this.dialog = data;
        //     //this.usedItemEdit = data;
        //     this.data = {};
        //     return;
        // });
        // eventBus.$on('deleteProduct', (data) => {
        //     this.getProducts(this.$route.params.id);
        //     this.deleteDialog = data;
        //     return;
        // });
        eventBus.$on('infoDialog', (data) => {
            this.infoDialog = true;
            this.infoDialogText = data;
            return;
        });
    },
    data() {
        return {
            productEdit: true,
            serviceBusinessEdit: false,
            propertyEdit: false,
            educationEdit: false,
            usedItemEdit: false,

            infoDialog: false,
            infoDialogText: '',

            sheet: false,

            hasItems: true,

            editTitle: 'Product Edit Form',

            prods: [
                {
                    title: 'Products',
                },
                {
                    title: 'Service / Bussiness',
                },
                {
                    title: 'Property',
                },
                {
                    title: 'Education',
                },
                {
                    title: 'Used Items',
                },
            ],
            /* getLoadingSpinner: false,
            deleteSpinner: false,

            dialog: false,
            deleteDialog: false,

            productToDelete: {},

            route: null,

            backupImg: require('../../../assets/uploadimg.png'),
            productsArr:[],
            video: '',
            data: {}, */
        }
    },
    beforeMount() {

        if(!localStorage.getItem('token')) {

            this.$router.push('/');


            eventBus.$emit('signinDialog', true);
        }

    },
    mounted() {
        console.log(this.$route)
        this.changeItems();
        /* setTimeout(() => {
            this.route = this.$route.params.id;
            this.getProducts(this.$route.params.id)
            },300) */


            // if(this.getStoreviewInfo.prd_count != 0) {

            //     return this.getProducts();

            // } else if (this.getStoreviewInfo.snb_count != 0) {

            //     return this.getService();

            // } else if (this.getStoreviewInfo.prp_count != 0) {

            //     return this.getProperties();

            // } else if (this.getStoreviewInfo.edu_count != 0) {

            //     return this.getEducation();

            // } else if (this.getStoreviewInfo.utm_count != 0) {

            //     return this.getUsedItems();

            // }
    },
    methods: {



        /* getProducts() {
            eventBus.$emit('spinner', true);

            let strvew = this.route;

            setTimeout(() => {

                axios.get('/products/'+ strvew +'/storeviewproduct')
                //axios.get(this.selectSelected.href)
                .then((res) => {
                    console.log(res);
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    this.productsArr = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
            },300);
        },
        getService() {
            eventBus.$emit('spinner', true);

            let strvew = this.route;

            setTimeout(() => {

                axios.get('/serviceandbusiness/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    this.productsArr = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
            },300);
        },
        getProperty() {
            eventBus.$emit('spinner', true);

            let strvew = this.route;

            setTimeout(() => {

                axios.get('/properties/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    this.productsArr = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
            },300);
        },
        getEducation() {
            eventBus.$emit('spinner', true);

            let strvew = this.route;

            setTimeout(() => {

                axios.get('/education/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    this.productsArr = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
            },300);
        },
        getUsedItem() {
            eventBus.$emit('spinner', true);

            let strvew = this.route;

            setTimeout(() => {

                axios.get('/useditems/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    this.productsArr = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
            },300);
        }, */

        editProduct(id) {
            let self = this;

            this.getLoadingSpinner = true;

            this.dialog =true;

            let strId = this.$route.params.id;

            if(this.whichSeleced == '/products/') {

                //axios.get('/products/' + id)
                axios.get(this.whichSeleced + id)
                    .then((res) => {
                        console.log(res.data.data);
                        let prd = res.data.data;
                        if(strId == prd.inv_str_id)
                        {
                            console.log(prd.inv_str_id)
                            self.data = prd
                        } else {
                            self.data = prd

                            console.log('no str')
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => (eventBus.$emit('dialogSpinner', false)));
            } else {

                console.log('else part')

                //axios.get('/products/' + id)
                axios.get(this.whichSeleced + id)
                    .then((res) => {

                        if(res) {

                            console.log(res.data.data);

                            let prd = res.data.data;

                            this.data = prd

                            this.getLoadingSpinner = false;
                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => (eventBus.$emit('dialogSpinner', false)));
            }

            //console.log(id)
        },
        deleteProduct(id){

            let self = this;
            //self.deleteSpinner = true;
            console.log(id)

            let obj = this.productsArr.find(obj => obj.id == id);

                    console.log(obj);
            this.deleteDialog = true
            this.data = obj;

            /* axios.get('/products/' + id)
                .then((res) => {
                    console.log(res.data.data);
                    if(res) {
                       // eventBus.$emit('deleteSpinner', false);
                    }
                    let prd = res.data.data;
                    self.data = prd
                })
                .catch((err) => {
                })
                //.finally(() => (eventBus.$emit('deleteSpinner', false))); */

        },

         saveEdit() {

            eventBus.$emit('saveEdit');

            console.log('save edit')

        }
    },
    computed: {
        // getStoreviewInfo() {

        //     return this.$store.getters.getStoreviewInfo;

        // },
    },
    watch: {
        selectSelected() {
            console.log(this.selectSelected)
        },
        // getStoreviewInfo() {
        //     this.changeItems();
        // },
    }
}
</script>

<style scoped>
.listImg {
    max-width: 100px;
    height: 100px;
}
.v-progress-circular {

    margin: 1rem
}
.deleteFont {
    color: #424242;
    font-size: 17px;
}
.border {
    border-bottom: 1px solid #333;
}

.sticky {
    position: sticky;
    top: 70px;
}



</style>
