import { eventBus } from './app'

export const AmountBlockMixin = {

     _veeValidate: {
        validator: "new"
    },
    mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    created() {
        eventBus.$on('discount', (data) => {
            if(this.propPer){
                console.log(this.propPer);
                this.per = this.propPer
            }
            console.log(data)
             return this.discountField = data;
        });
        eventBus.$on('priceOrcontactPrice', (data) => {
            console.log(data)
             return this.radios = data;
        });
    },
    //props:['prpAmount','prpDiscount','prpOffers','prpPreviousPricet'],
    data() {
        return {
            previousPrice: this.prpPreviousPrice ? this.prpPreviousPrice : '',
            amount: this.prpAmount ? this.prpAmount : '',
            discount: this.prpDiscount ? this.prpDiscount : '',
            discountField: 1,
            isdiscount: false,

            propertyCategory: ['House', 'banglow', 'Farmhouse', 'Hall', 'Party Plot', 'Apartment', 'Shop', 'Plot', 'waadi'],
            selectedProperty: '',

            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rent: '',

            wholesaleArr: ['Unit', 'Box', 'Pc'],
            wholesale: '',

            offers: this.prpOffers ? this.prpOffers : [],
            offer: '',

            per: '',

            radios: '1',
            dictionary: {
                attributes: {
                    email: "E-mail Address"
                    // custom attributes
                },
                custom: {
                    amount: {
                        required: () => "Amount can not be empty",
                        regex: "Amount must be numeric"
                        // custom messages
                    },
                    country: {
                        required: "Country field is required"
                    },
                    contact_email: {

                    }
                }
            }

        }
    },
    methods: {
        submit() {

              this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.
                return console.log('not validate in Registration Form Component');

                }

             });

        },
        pushOffer() {

            if(this.offer !== '')
                {
                    this.offers.push(this.offer)

                    this.offer = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                return;
                console.log(this.offer);
        },
        deleteOffer(index) {

            const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.offers.splice(index, 1);
                }
                return;
        },
    },
    computed: {
        whatArr() {

            if(this.propWhat == 'products') {

                return this.rentArr;
            }
        }
    },
    watch: {
        amount: function () {

            this.$emit('amount', this.amount);
        },
        discount: function () {

            this.$emit('discount', this.discount);
        },

        offers: function () {

            if (this.offer.length == 0) {

                return this.$emit('offers', null);
            }

            return this.$emit('offers', this.offers);
        },
        previousPrice: function () {
            this.$emit('previousPrice', this.previousPrice);
        },
        per: function () {
            this.$emit('per', this.per);
        },
    }
};
