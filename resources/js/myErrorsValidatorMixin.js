import { eventBus } from './app'

export const MyErrorsValidatorMixin = {

    mounted() {
    },
    created() {

        eventBus.$on('errorArrPassReply', (data) => {

            this.errorArrPass = data;
        });
    },
    //props:['prpAmount','prpDiscount','prpOffers','prpPreviousPricet'],
    data() {
        return {

            errorArrPass: false,
        }
    },
    methods: {

        chechForTheErrors() {

            eventBus.$emit('errorArrPassCheck');
            return;
        },

        titleBlockValidateHere() {

            if(this.mainImg == null) {

                // this.errorArr.push('Main Image Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Main Image Can Not Be Empty.');
            }
            if(this.title == null || this.title == '') {

                // this.errorArr.push('Title Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Title Field Can Not Be Empty.');

            }

            if(this.highlights == null || this.highlights.length == 0) {

                // this.errorArr.push('Highlights Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Highlights Field Can Not Be Empty.');
            }
            if(this.keywords == null || this.keywords.length == 0) {

                // this.errorArr.push('Keywords Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Keywords Field Can Not Be Empty.');

            }

            return;
        },

        amountValidateHere() {

            if(this.amount == null || this.amount == '') {

                // this.errorArr.push('Amount Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Amount Field Can Not Be Empty.');
            }
            return;

        },

        categoryValidateHere() {

            eventBus.$emit('errorArr', 'Category Field Can Not Be Empty.');
            return;

        },

        rentPerValidateHere() {

            eventBus.$emit('errorArr', 'Rent Per Field Can Not Be Empty.');
            return;

        },

        // ================================   PRODUCT   ============================================

        productFormCategoryValidateHere() {

            if(this.category == null) {

                // this.errorArr.push('Category Field Can Not Be Empty.');

                // eventBus.$emit('errorArr', 'Category Field Can Not Be Empty.');

                this.categoryValidateHere();

            }

            return;
        },

        productFormValidatHere() {

            this.amountValidateHere();

            if(this.want_to == 2) {

                if(this.per == null) {

                    // this.errorArr.push('Rent Per Field Can Not Be Empty.');

                    // eventBus.$emit('errorArr', 'Rent Per Field Can Not Be Empty.');

                    this.rentPerValidateHere();
                }
            }
            if(this.want_to == 3) {

                if(this.per == null) {

                    // this.errorArr.push('Per Field Can Not Be Empty.');

                    eventBus.$emit('errorArr', 'Per Field Can Not Be Empty.');
                }
            }

            return;
        },

        // ========================   SEARVICE AND BUSINESS   ===================================

        searviceFormAmountValidateHere() {

            if(this.showPriceOrNot == 1 && this.amount == null || this.amount == '') {

                // this.errorArr.push('Per Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Amount Field Can Not Be Empty.');

            }

            return;

        },

        serviceFormCategoryValidateHere() {

            if(this.category == null) {

                // this.errorArr.push('Category Field Can Not Be Empty.');

                eventBus.$emit('errorArr', 'Service / Business Category Field Can Not Be Empty.');

            }

            return;
        },

        // ========================   PROPERTY  ===================================

        propertyRentValidateHere() {

            if(this.sellRent == 1) {

                if(this.rentPer == null) {

                    // this.errorArr.push('Rent Per Field Can Not Be Empty.');

                    // eventBus.$emit('errorArr', 'Rent Per Field Can Not Be Empty.');

                    this.rentPerValidateHere();
                }
            }
            return;
        },
        propertyFullAddressValidateHere() {

            if(!this.addressNotShow) {

                if(this.fullAddress == null  || this.fullAddress == '') {

                    eventBus.$emit('errorArr', 'Full Address Field Can Not Be Empty.');
                }

            }
            return;
        },
        propertyRegionValidateHere() {

            if(this.country == null) {

                eventBus.$emit('errorArr', 'Country Field Can Not Be Empty.');

            }
            if(this.state == null) {

                eventBus.$emit('errorArr', 'State Field Can Not Be Empty.');

            }
            if(this.city == null) {

                eventBus.$emit('errorArr', 'City Field Can Not Be Empty.');

            }
            return;
        },

        // ========================   PROPERTY  ===================================

        educationFeesValidateHere() {

            if(this.showPriceOrNot == 1 && this.fees == null || this.fees == '') {

                eventBus.$emit('errorArr', 'Fees Field Can Not Be Empty.');

            }
            if(this.showPriceOrNot == 1 && this.feesper == null) {

                eventBus.$emit('errorArr', 'Fees Per Field Can Not Be Empty.');

            }
        },

        // ========================   USED ITEM  ===================================

        useditemCategoryValidateHere() {

            if(this.fused == null || this.sused == null) {

                // eventBus.$emit('errorArr', 'Category Field Can Not Be Empty.');

                this.categoryValidateHere();

            }
            return;
        },

        useditemEditCategoryValidateHere() {

            if(this.editCat) {

                this.useditemCategoryValidateHere();

            }
            return;
        },
    },
    watch: {
    }
};
