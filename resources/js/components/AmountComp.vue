<template>
<v-flex xs12 lg12 >

    <v-card flat >

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
                                    v-validate="{required: true, regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/}"
                                    v-model="amount"
                                    prepend-icon="fas fa-rupee-sign"
                                    color="orange darken-2"
                                ></v-text-field>
                                    <!-- v-validate="{required: true, regex: /^\d{1,8}(?:\.\d{1,4})?$/}" -->

                            <v-layout  wrap justify-space-around>
                                <v-flex xs11 lg5>
                                    <v-text-field
                                        v-if="discountField == 1"
                                        box label="Discount"
                                        class="discountInput"
                                        v-model="discount"
                                        color="orange darken-2"
                                        prepend-icon="fas fa-percent"
                                        type="number"
                                    ></v-text-field>

                                    <v-select
                                        v-else-if="discountField == 2"
                                        :items="rentArr"
                                        box
                                        v-model="per"
                                        label="Rent per"
                                        color="orange darken-2"
                                        prepend-icon="fas fa-slash"
                                    ></v-select>

                                    <v-select
                                        v-else
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
                                        v-if="discountField == 1"
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
import { AmountBlockMixin } from '../amountblockmixin.js'

export default {
    mixins:[AmountBlockMixin],
    /* created() {
        eventBus.$on('discount', (data) => {
             return this.discountField = data;
        });
    }, */
    props:['prpAmount','prpDiscount','prpOffers','prpPreviousPrice', 'propPer', 'propWhat'],
    /* data() {
        return {
            previousPrice: '',
            propertyCategory: ['House', 'banglow', 'Farmhouse', 'Hall', 'Party Plot', 'Apartment', 'Shop', 'Plot', 'waadi'],
            selectedProperty: '',
            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rent: '',
            rentField: false,
            amount: '',
            offers: [],
            offer: '',
            discount: '',
            discountField: 1,

        }
    }, */
    /* methods: {
        pushOffer() {

            if(this.offer !== '')
                {
                    this.offers.push(this.offer)

                    this.offer = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                console.log(this.offer);
        },
        deleteOffer(index) {

            const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.offers.splice(index, 1);
                }
                return;
        }
    }  */
}
</script>

<style scoped>

</style>
