<template>
<v-flex xs12 lg12 >

    <v-card flat >


        <!-- <v-flex xs12 lg12>
            <v-card flat class="px-3">
                    <v-card-text class="subheading font-weight-medium">
                          Amount Block
                     </v-card-text>
                    <v-list two-line subheader>
                        <v-radio-group v-model="radios" :mandatory="true" row >
                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="1" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '1'">
                                    <v-list-tile-title>Price</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="2" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '2'">
                                    <v-list-tile-title>Contact For Price Details</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>
                </v-card>
        </v-flex> -->

        <div v-if="radios == '1'" >

            <v-layout  wrap justify-space-around >
                <v-flex xs10 lg5 >


                    <v-card-text class="subheading font-weight-medium">
                        Price Details
                    </v-card-text>
                        <v-card flat class="">
                                <v-text-field
                                    box
                                    label="Enter Amount"
                                    :error-messages="errors.collect('amount')"
                                    data-vv-name="amount"
                                    v-validate="{required: true, regex: /^\d{1,8}(?:\.\d{1,4})?$/}"
                                    v-model.trim="amount"
                                    prepend-icon="fas fa-rupee-sign"
                                    color="orange darken-2"
                                ></v-text-field>

                            <v-layout  wrap justify-space-around>
                                <v-flex xs11 lg5 v-if="discountField == 1">
                                    <v-text-field

                                        box label="Discount"
                                        class="discountInput"
                                        v-model="discount"
                                        color="orange darken-2"
                                        prepend-icon="fas fa-percent"
                                        type="number"
                                    ></v-text-field>
                                </v-flex>

                                    <v-flex xs12 lg7 v-else-if="discountField == 2">
                                        <v-select

                                            :items="rentArr"
                                            box
                                            v-model="per"
                                            label="Rent per"
                                            color="orange darken-2"
                                            prepend-icon="fas fa-slash"
                                        ></v-select>
                                    </v-flex>

                                    <v-flex xs12 lg5 v-else>
                                        <v-select

                                            :items="wholesaleArr"
                                            box
                                            v-model="per"
                                            label="per"
                                            color="orange darken-2"
                                            prepend-icon="fas fa-slash"
                                        ></v-select>

                                    </v-flex>


                                <v-flex xs11 lg5>
                                    <v-text-field
                                        v-if="discountField != 2"
                                        box
                                        label="Previous Price If Any"
                                        title="Previous Price If Any"
                                        v-model="previousPrice"
                                        color="orange darken-2"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card>

                </v-flex>

                <v-flex xs10 lg5 class="">
                    <v-card-text class="subheading font-weight-medium">
                        Offers
                    </v-card-text>


                        <template v-for="(val, i) in offers">
                            <v-card-actions :key="i" class="pa-0">
                                <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                                <span style="font-size: 14px; color: #ef6c3c"><i class="fas fa-tag"></i></span>
                                <v-card-text class="py-0 subheading">
                                    {{ val }}
                                </v-card-text>
                                <v-btn flat icon color="pink">
                                    <v-icon @click="deleteOffer(i)">close</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </template>
                        <v-flex xs12>
                            <v-text-field box v-model="offer" label="Offer" @keyup.enter="pushOffer" color="orange darken-2" prepend-icon="fas fa-tag"></v-text-field>
                        </v-flex>

                        <v-card-actions>
                            <v-btn outline small color="success" @click="pushOffer">Add More</v-btn>

                        </v-card-actions>

                </v-flex>
            </v-layout>
        </div>
    </v-card>
</v-flex>
</template>

<script>
import { eventBus } from '../app.js'

export default {
     _veeValidate: {
        validator: "new"
    },
    components: {

    },
    mounted() {
        this.$validator.localize("en", this.dictionary);
    },
    created() {
        eventBus.$on('discount', (data) => {
             return this.discountField = data;
        });
        eventBus.$on('priceOrcontactPrice', (data) => {
            console.log(data)
             return this.radios = data;
        });
    },
    props:['prpAmount','prpDiscount','prpOffers','prpPreviousPricet'],
    data() {
        return {
            previousPrice: this.prpPreviousPricet ? this.prpPreviousPricet : '',
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

            per: this.propPer ? this.propPer : '',

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
    watch: {
        amount: function () {

            this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.

                // this.$emit('errorArr', this.amount);

                // console.log(this.$validator);

                this.$emit('amount', null);

                // console.log(this.$validator.errors.items);
                return

                }

                this.$emit('amount', this.amount);
             });

        },
        discount: function () {

            this.$emit('discount', this.discount);
        },

        offers: function () {


            this.$emit('offers', this.offers);
        },
        previousPrice: function () {
            this.$emit('previousPrice', this.previousPrice);
        },
        per: function () {
            this.$emit('per', this.per);
        },
    }
}
</script>

<style scoped>

</style>
