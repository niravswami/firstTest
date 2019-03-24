import { eventBus } from './app'

export const StoreviewProductsMixin = {

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
    },

    props: ['id'],

    data() {
        return {

            mainImg: require('../assets/shopviewimage.jpg') ,
            dialog: false,
            count: 4,
            show: true,

            loading: false,

            apiProducts: [],
            apiServices: [],
            apiProperty: [],
            apiEducation: [],
            apiUsedItems: [],
            apiInventoryItems: [],
            apiProductsFilter: [],

            page: '',
            sellBtn: null,
            rentBtn: null,
            servicesBtn: null,
            educationBtn: null,
            professionBtn: null,
            rating: 4.5,
            sheet: false,

            getLoadingSpinner: false,
            deleteSpinner: false,

            dialog: false,
            deleteDialog: false,

            sheet: false,

            hasItems: true,

            editTitle: 'Product Edit Form',

            backupImg: require('../assets/uploadimg.png'),
            productsArr:[],
            video: '',

            whichWanto: [
                {
                    href: '/products/',
                    title: 'Products',
                    editTitle: 'Product Edit Form',
                    api: 'apiProducts',
                    get: 'getProducts',
                    prdCount: 'prd_count'
                },
                {
                    href: '/serviceandbusiness/',
                    title: 'Service / Bussiness',
                    editTitle: 'Service / Business Edit Form',
                    api: 'apiServices',
                    get: 'getService',
                    prdCount: 'snb_count'
                },
                {
                    href: '/properties/',
                    title: 'Property',
                    editTitle: 'Property Edit Form',
                    api: 'apiProperty',
                    get: 'getProperties',
                    prdCount: 'prp_count'
                },
                {
                    href: '/education/',
                    title: 'Education',
                    editTitle: 'Education Edit Form',
                    api: 'apiEducation',
                    get: 'getEducation',
                    prdCount: 'edu_count'
                },
                {
                    href: '/useditems/',
                    title: 'Used Items',
                    editTitle: 'Used Item Edit Form',
                    api: 'apiUsedItems',
                    get: 'getUsedItems',
                    prdCount: 'utm_count'
                },
            ],
            whichSeleced:  '/products',

        }
    },
    mounted () {

        // console.log(this.$vuetify.breakpoint)
         this.gotostore(this.id);
          //this.getStoreviewInfo;
          //this.getUserInfo;

     },
    methods: {

        async gotostore(id) {

            await this.$store.dispatch('disStoreviewInfo', id);

        },


        wanttoclick(id) {
            if(id == 0) {

                eventBus.$emit('cardCheckResetAll');

                this.sheet = false;

                this.bottomNav = 'Products'

                this.invComp = false;

                this.whichSeleced = '/products';

                this.editTitle = 'Product Edit Form' ;

                this.falseAllEditForm();

                this.productEdit = true;

                if(this.apiProducts.length == 0 || this.productsArr.length == 0) {

                    this.getProducts(this.id);
                } else {

                    this.apiProductsFilter = this.apiProducts;
                    this.productsArr = this.apiProducts;
                }
            }

            if(id == 1) {

                eventBus.$emit('cardCheckResetAll');

                this.sheet = false;

                this.bottomNav = 'Service / Businesses'

                this.invComp = false;

                this.whichSeleced = '/serviceandbusiness';

                this.editTitle = 'Service / Business Edit Form' ;

                this.falseAllEditForm();

                this.serviceBusinessEdit = true;

                if(this.apiServices.length == 0 || this.productsArr.length == 0) {

                    this.getService(this.id);

                } else {

                    this.apiProductsFilter = this.apiServices;
                    this.productsArr = this.apiServices;
                }
            }

            if(id == 2) {

                eventBus.$emit('cardCheckResetAll');

                this.sheet = false;

                this.bottomNav = 'Properties'

                this.invComp = false;

                this.whichSeleced = '/properties';

                this.editTitle = 'Property Edit Form' ;

                this.falseAllEditForm();

                this.propertyEdit = true;

                if(this.apiProperty.length == 0 || this.productsArr.length == 0) {

                    this.getProperties(this.id);

                } else {

                    this.apiProductsFilter = this.apiProperty;
                    this.productsArr = this.apiProperty;
                }
            }

            if(id == 3) {

                eventBus.$emit('cardCheckResetAll');

                this.sheet = false;

                this.bottomNav = 'Education'

                this.invComp = false;

                this.whichSeleced = '/education';

                this.editTitle = 'Education Edit Form' ;

                this.falseAllEditForm();

                this.educationEdit = true;

                if(this.apiEducation.length == 0 || this.productsArr.length == 0) {

                    this.getEducation(this.id);

                } else {

                    this.apiProductsFilter = this.apiEducation;
                    this.productsArr = this.apiEducation;
                }
            }

            if(id == 4) {

                eventBus.$emit('cardCheckResetAll');

                this.sheet = false;

                this.bottomNav = 'Used Items'

                this.invComp = false;

                this.whichSeleced = '/useditems';

                this.editTitle = 'Used Item Edit Form' ;

                this.falseAllEditForm();

                this.usedItemEdit = true;

                if(this.apiUsedItems.length == 0 || this.productsArr.length == 0) {

                    this.getUsedItems(this.id);

                } else {

                    this.apiProductsFilter = this.apiUsedItems;
                    this.productsArr = this.apiUsedItems;
                }
            }

            if(id == 5) {

                eventBus.$emit('cardCheckResetAll');

                this.whichSeleced = '/inventories';

                this.invComp = true;

                //this.editTitle = 'Used Item Edit Form' ;

                this.falseAllEditForm();

                //this.usedItemEdit = true;

                if(this.apiInventoryItems.length == 0 || this.productsArr.length == 0) {

                    this.getInventoryItems(this.id);

                } else {

                    this.apiProductsFilter = this.apiInventoryItems;
                    this.productsArr = this.apiInventoryItems;
                }
            }

        },
        getProducts() {
            this.loading = true;
            // eventBus.$emit('spinner', true);

            let strvew = this.$route.params.id;

            console.log(strvew+55)

            //setTimeout(() => {

                axios.get('/products/'+ strvew +'/storeviewproduct')
                //axios.get(this.selectSelected.href)
                .then((res) => {
                    console.log(res);

                    if(res) {

                        let b = res.data.data;
                        if(this.productsArr != []) {
                            eventBus.$emit('spinner', false)
                        }
                        if(b.length == 0) {
                            this.hasItems = false;

                        } else {

                            this.hasItems = true;
                        }

                        this.productsArr = b;
                        this.apiProducts = b;
                        this.apiProductsFilter = b;

                        this.loading = false;
                    }
                })
                .catch((err) => {
                    console.log(err.response)

                    if(err) {
                        this.loading = false
                    }
                })
                // .finally(this.loading = false);
           // },300);
        },
        getService() {
            // eventBus.$emit('spinner', true);

            this.loading = true;

            let strvew = this.$route.params.id;

            //setTimeout(() => {

                axios.get('/serviceandbusiness/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);

                    if(res) {

                        let b = res.data.data;

                        if(this.productsArr != []) {
                            // eventBus.$emit('spinner', false)
                        }
                        if(b.length == 0) {
                            this.hasItems = false;

                        } else {

                            this.hasItems = true;
                        }
                        console.log(b.length)
                        console.log(this.hasItems)
                        this.productsArr = b;
                        this.apiServices = b;
                        this.apiProductsFilter = b;

                        this.loading = false;
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(this.loading = false);
           // },300);
        },
        getProperties() {

            this.loading = true;
            // eventBus.$emit('spinner', true);

            let strvew = this.$route.params.id;

            //setTimeout(() => {

                axios.get('/properties/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);

                    if(res) {

                        let b = res.data.data;

                        if(this.productsArr != []) {
                            eventBus.$emit('spinner', false)
                        }
                        if(b.length == 0) {
                            this.hasItems = false;

                        } else {

                            this.hasItems = true;
                        }
                        this.productsArr = b;
                        this.apiProperty = b;
                        this.apiProductsFilter = b;

                        this.loading = false;
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(this.loading = false);
            //},300);
        },
        getEducation() {
            this.loading = true;
            // eventBus.$emit('spinner', true);

            let strvew = this.$route.params.id;

           // setTimeout(() => {

                axios.get('/education/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);

                    if(res) {

                        let b = res.data.data;

                        if(this.productsArr != []) {
                            eventBus.$emit('spinner', false)
                        }
                        if(b.length == 0) {
                            this.hasItems = false;

                        } else {

                            this.hasItems = true;
                        }
                        this.productsArr = b;
                        this.apiEducation = b;
                        this.apiProductsFilter = b;

                        this.loading = false;
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(this.loading = false);
            //},300);
        },
        getUsedItems() {
            this.loading = true;
            // eventBus.$emit('spinner', true);

            let strvew = this.$route.params.id;

            //setTimeout(() => {

                axios.get('/useditems/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);

                    if(res) {

                        let b = res.data.data;

                        if(this.productsArr != []) {
                            eventBus.$emit('spinner', false)
                        }
                        if(b.length == 0) {
                            this.hasItems = false;

                        } else {

                            this.hasItems = true;
                        }
                        this.productsArr = b;
                        this.apiUsedItems = b;
                        this.apiProductsFilter = b;

                        this.loading = false;
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(this.loading = false);
           // },300);
        },
        getInventoryItems() {
            eventBus.$emit('spinner', true);

            let strvew = this.$route.params.id;

            //setTimeout(() => {

                axios.get('/inventories/'+ strvew +'/storeviewproduct')
                .then((res) => {
                    console.log(res);

                    let b = res.data.data;

                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }

                    this.productsArr = b;
                    this.apiInventoryItems = b;
                    this.apiProductsFilter = b;
                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(eventBus.$emit('spinner', false));
           // },300);
        },

        falseAllEditForm() {

            this.productEdit = false;
            this.serviceBusinessEdit = false;
            this.propertyEdit = false;
            this.educationEdit = false;
            this.usedItemEdit = false;
        },
        changeItems() {

            if(this.getStoreviewInfo.prd_count != 0) {

                return this.getProducts();

            } else if (this.getStoreviewInfo.snb_count != 0) {

                return this.getService();

            } else if (this.getStoreviewInfo.prp_count != 0) {

                return this.getProperties();

            } else if (this.getStoreviewInfo.edu_count != 0) {

                return this.getEducation();

            } else if (this.getStoreviewInfo.utm_count != 0) {

                return this.getUsedItems();

            } else {
                this.loading = false
            }
        }


    },
    computed: {
        getStoreviewInfo() {

            return this.$store.getters.getStoreviewInfo;

        },
    },
    watch: {
        getStoreviewInfo() {
            this.changeItems();
        },
    },
};
