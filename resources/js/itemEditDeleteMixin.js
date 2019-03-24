import { eventBus } from './app'

export const ItemEditDeleteMixin = {
    created() {
        eventBus.$on('dialogSpinner', (data) => {
            this.dialog = true;
            return this.getLoadingSpinner = data;

        });
        eventBus.$on('editFn', (data) => {
            return this.editProduct(data)
       });
        eventBus.$on('editCheck', (data) => {
            return this.editCheck(data)
       });
        eventBus.$on('deleteFn', (data) => {
            return this.deleteProduct(data)
       });
        eventBus.$on('closeEditDialog', (data) => {
            return this.storeviewEditDealog = false;
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
        eventBus.$on('grpStr', (data) => {
            this.addingPrdGrp(data);
            return;
        });

        eventBus.$on('dltGrpPrdsInStr', (data) => {
            this.dltGrpPrds(data);
            return;
        });

        eventBus.$on('infoDialog', (data) => {
            this.infoDialog = true;
            this.infoDialogText = data.suc;
            this.infoAllreadyIn = data.allReadyIn;
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

            getLoadingSpinner: false,

            data: {},

            invPrcMatch: null,

            productToDelete: {},

            dialog: false,

            deleteDialog: false,

            infoDialog: false,
            infoDialogText: '',
            infoDialogMsg: null,
            infoAllreadyIn: null,

            sheet: false,

            editTitle: 'Product Edit Form',
        }
    },
    methods: {

        // =============================   Item  Edit Check   ==================================

        editCheck(data) {

            let form = new FormData();

            form.append('str_id', data.str);
            form.append('prd_id', data.prd_id);

            axios.post('checkeditproduct', form)
                .then((res) => {
                    console.log(res.data);

                    if(res) {

                    }
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },
        // =============================   Item  Edit   ==================================

        editProduct(id) {
            console.log(id)
            let self = this;

            this.getLoadingSpinner = true;

            this.dialog =true;

            let strId = this.$route.params.id;

            if(this.whichSeleced == '/products') {

                //axios.get('/products/' + id)
                axios.get(this.whichSeleced+'/'+ id)
                    .then((res) => {
                        console.log(res.data.data);

                        if(res) {

                            let prd = res.data.data;
                            if(strId == prd.inv_str_id && strId == prd.prc_str_id)
                            {
                                console.log('both match');

                                // eventBus.$emit('invPrcMatch', {invMatch: true, prcMatch: true});
                                this.invPrcMatch = {invMatch: true, prcMatch: true, upBtn: true};

                                self.data = prd

                            } else if(strId == prd.inv_str_id) {

                                // eventBus.$emit('invPrcMatch', {invMatch: true, prcMatch: false});
                                this.invPrcMatch = {invMatch: true, prcMatch: false, upBtn: false};

                                console.log('inv match');
                                self.data = prd


                            } else if(strId == prd.prc_str_id) {

                                // eventBus.$emit('invPrcMatch', {invMatch: false, prcMatch: true});
                                this.invPrcMatch = {invMatch: false, prcMatch: true, upBtn: true};

                                console.log('prc match');

                                self.data = prd


                            } else {

                                // eventBus.$emit('invPrcMatch', {invMatch: false, prcMatch: false});
                                this.invPrcMatch = {invMatch: false, prcMatch: false, upBtn: false};

                                console.log('no match')


                                self.data = prd

                            }
                            this.getLoadingSpinner = false;

                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        console.log(err.response);

                        if(err) {

                            this.getLoadingSpinner = false;
                        }
                    })
                    .finally();
                    // eventBus.$emit('dialogSpinner', false))
            } else {

                console.log('else part')

                //axios.get('/products/' + id)
                axios.get(this.whichSeleced+'/'+ id)
                    .then((res) => {

                        if(res) {

                            console.log(res.data.data);

                            let prd = res.data.data;

                            this.data = prd

                            this.getLoadingSpinner = false;
                        }

                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
                    .finally(() => (this.getLoadingSpinner = false));
            }

            //console.log(id)
        },

        // =======================================   Delete item   =======================================

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

        // ================         Group Adding For Products           =====================

        addingPrdGrp(data) {

            console.log(data);

            let form = new FormData();

            for (let i = 0; i < data.strs.length; i++) {

                form.append('str_ids[]', data.strs[i]);

            }

            if(data.prdId) {

                form.append('prd_id', data.prdId);
            }

            if(data.prdIds) {

                for (let i = 0; i < data.prdIds.length; i++) {

                    form.append('prd_ids[]', data.prdIds[i]);

                }

            }

            setTimeout(() => {

                axios.post(this.whichSeleced+'groupadding', form)
                    .then((res) => {
                        console.log(res);

                        if(res) {

                            eventBus.$emit('cardCheckResetAll')
                            eventBus.$emit('infoDialog', {suc: res.data.ifAdded, allReadyIn: res.data.allReadyIn})
                            eventBus.$emit('sending', false)

                        }
                    })
                    .catch((err) => {

                        eventBus.$emit('sending', false);
                        console.log(err.response)
                    })
            }, 1000)
                //.finally(() => (eventBus.$emit('deleteSpinner', false)));

        },

        // ===============   Delete Group Of Products In Storeview  ====================================

        dltGrpPrds(data){

            console.log(data);

            let form = new FormData();

            form.append('str_id', data.str);

            if(data.prdIds) {

                for (let i = 0; i < data.prdIds.length; i++) {

                    form.append('prd_ids[]', data.prdIds[i]);

                }

            }

            axios.post(this.whichSeleced+'groupdelete', form)
                .then((res) => {
                    console.log(res);

                    if(res) {

                        eventBus.$emit('cardCheckResetAll');
                        eventBus.$emit('infoDialog', {suc: res.data.success});
                        eventBus.$emit('sending', false);
                        eventBus.$emit('deleteProductDialog', data.what);

                    }
                })
                .catch((err) => {
                    console.log(err.response);
                    eventBus.$emit('sending', false);

                })
        }


    }
};
