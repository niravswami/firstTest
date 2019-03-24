<template>
    <div>
        <v-card v-if="loading" flat class="text-xs-center pa-4" >
            <v-progress-circular
                :size="70"
                :width="7"
                color="gray"
                indeterminate
                class="v-progress-circular"
            ></v-progress-circular>
        </v-card>
        <v-card flat class="pa-3" v-else>
            <v-layout wrap justify-center>
                <v-flex xs12 lg3 class="pa-1">
                    <v-container fluid grid-list-sm>
                        <v-layout row wrap fill-height>
                            <v-flex xs6 lg6 >
                                <v-img :src="selected.image" aspect-ratio="1" contain></v-img>
                            </v-flex>
                            <v-flex xs6 lg6 v-for="(val,i) in selected.images" :key="i">
                                <v-img :src="val" aspect-ratio="1" contain></v-img>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex xs12 lg4 class="pa-1">

                    <v-flex xs12 lg12 class="py-2">
                        <span class="title headFontColor"> {{ selected.title }} </span>
                        <!-- <span class="headline headFontColor">This is My First Inventory Product</span> -->
                    </v-flex>
                    <v-flex xs12 class="py-2">
                        <v-layout wrap>
                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                Brand
                            </v-flex>
                            <v-flex xs9 class="subheading font-weight-medium fontColor">
                                {{ selected.brand != null ? selected.brand.name : 'no brand' }}
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex xs12 class="py-2">
                        <v-layout wrap>
                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                Category
                            </v-flex>

                            <v-flex xs9 class="body-2 font-weight-medium fontColor">
                                <!-- ======================   Product Category    ================================= -->

                                <v-layout  wrap >
                                    <v-flex xs12 lg12 class="pt-3 pl-3">
                                        <span class="body-2"  v-for="(val, i) in selected.category" :key="i">
                                        {{ val.name }} <span class="px-2" v-if="selected.category.length !== i+1">></span>
                                        </span>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>


                    <v-flex xs12 class="py-2">
                        <div class="subheading pb-2 font-weight-medium headFontColor">
                            Highlights
                        </div>

                        <v-layout wrap>
                            <v-flex xs6 lg6 tag="li" class="pt-2 pr-3 subheading fontColor" v-for="(high, i) in selected.highLights"
                                :key="i">
                                {{ high }}
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex xs12 lg12 class="py-2">
                        <div class="subheading pb-2 font-weight-medium headFontColor">
                            Description
                        </div>

                        <v-flex xs12 class="pb-2" v-for="(val, i) in selected.descriptions" :key="i">
                            <v-layout wrap>
                                <v-flex xs3 class="subheading font-weight-medium fontColor">
                                    {{ val.heading }}
                                </v-flex>
                                <v-flex xs9 class="subheading fontColor">
                                    {{ val.description }}

                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>

                </v-flex>

                    <!-- ======================================================
                                Price Block
                    ======================================================== -->


                <v-flex xs12 lg5 class="pa-1">
                <v-flex xs12 lg12 class="pa-1">
                    <div class="subheading pb-2 font-weight-medium headFontColor">
                        Price Details
                    </div>
                    <v-layout wrap>
                        <v-flex xs12 lg12>
                            <v-flex xs12>
                                <v-layout wrap>
                                    <v-flex xs3>
                                        <div class="subheading pb-2 font-weight-medium headFontColor">
                                            price:
                                        </div>
                                    </v-flex>
                                    <v-flex xs9>
                                        <div class="subheading pb-2 font-weight-medium fontColor">
                                            {{ selected.totalPrice }} <span v-if="selected.per">/ {{ selected.per }} </span>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 v-if="selected.perviousPrice">
                                <v-layout wrap>
                                    <v-flex xs3>
                                        <div class="subheading pb-2 font-weight-medium headFontColor">
                                            Previous Price:
                                        </div>
                                    </v-flex>
                                    <v-flex xs9>
                                        <div class="subheading pb-2 font-weight-medium fontColor">
                                            {{ selected.perviousPrice }}
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 v-if="selected.discount">
                                <v-layout wrap>
                                    <v-flex xs3>
                                        <div class="subheading pb-2 font-weight-medium headFontColor">
                                            discount:
                                        </div>
                                    </v-flex>
                                    <v-flex xs9 class="subheading pb-2 font-weight-medium fontColor">
                                        <div>
                                            {{ selected.discount }} %
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12>
                                <v-layout wrap>
                                    <v-flex xs3>
                                        <div class="subheading pb-2 font-weight-medium headFontColor">
                                            offers:
                                        </div>
                                    </v-flex>
                                    <v-flex xs9>
                                        <div >
                                            <ul>
                                                <v-layout wrap >
                                                    <v-flex xs12   v-for="val in selected.offers" :key="val">
                                                        <li class="subheading font-weight-medium fontColor">
                                                            <span class=""></span>{{ val }}
                                                        </li>
                                                    </v-flex>
                                                </v-layout>
                                            </ul>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-checkbox v-model="editPrice" color="#0277BD" style="color: #0277BD;" label="Enter Your Price Details"></v-checkbox>

                <div v-if="editPrice">

                    <RetailRentEtc
                        @radios="want_to = $event"
                    ></RetailRentEtc>

                    <amount-comp
                        @amount="amount = $event"
                        @discount="discount = $event"
                        @offers="offers = $event"
                        @previousPrice="previousPrice = $event"
                        @per="per = $event"
                    ></amount-comp>
                    <!-- <amount-comp
                        @amount="amount = $event"
                        :prpAmount="selected.totalPrice"
                        @discount="discount = $event"
                        :prpDiscount="selected.discount"
                        @offers="offers = $event"
                        :prpOffers="selected.offers"
                        @wholesale="wholesale = $event"
                        @previousPrice="previousPrice = $event"
                        :prpPreviousPricet="selected.perviousPrice"
                        @per="per = $event"
                        :propPer="selected.per"
                    ></amount-comp> -->
                    <v-spacer></v-spacer>
                </div>
                    <v-card-actions>
                        <v-btn outline small block color="warning" dark @click="submit">Upload</v-btn>
                        <v-btn outline small block color="error" dark @click="cancel">cancel</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
import { eventBus } from '../../app.js'
import { MyErrorsValidatorMixin } from '../../myErrorsValidatorMixin.js'

import AmountComp from '../amt'
import RetailRentEtc from '../RetailRentEtc'

export default {
    mixins:[MyErrorsValidatorMixin],
    props: ['selectedP'],
    components: {
        AmountComp,
        RetailRentEtc
    },
    mounted() {
        // eventBus.$emit('retailRent', this.selected.want_to);

        this.getItem(this.selectedP.href);
    },
    data() {
        return {
            loading: false,
            selected: null,
            // oldWant_to: this.selected.want_to ? this.selected.want_to : '1',
            // oldAmount: this.selected.totalPrice ? this.selected.totalPrice : null,
            // oldDiscount: this.selected.discount ? this.selected.discount : null,
            // oldPer: this.selected.per ? this.selected.per : null,
            // oldPreviousPrice: this.selected.perviousPrice ? this.selected.perviousPrice : null,
            // oldOffers: this.selected.offers ? this.selected.offers : null,
            // invId: this.selected.inv_id ? this.selected.inv_id : null,

            editPrice: false,

            amount: null,
            discount: null,
            per: null,
            previousPrice: null,
            offers: null,
            want_to: '1'




        }
    },
    methods: {
        async submit () {


            let form = new FormData();

            form.append('str_id', this.$route.query.str_id );


            if(this.invId != '') {

                form.append('inv_id', this.invId);
            }

            console.log(this.invId)

            /* ===============   New Values   ================== */

            if(this.editPrice == true) {

                await this.productFormValidatHere();
                await this.chechForTheErrors();

                if(!this.errorArrPass) {

                    // this.errorDialog = true;

                    return;
                }

                form.append('want_to', this.want_to);

                if (this.amount == '' || this.amount == null) {

                    alert('Please Provide Price');

                    return;

                }

                form.append('amount', this.amount);

                if (this.discount != null) {

                    form.append('discount', this.discount);
                }

                if (this.previousPrice != null) {

                    form.append('previous_price', this.previousPrice);
                }

                if (this.per != null) {

                    form.append('per', this.per);
                }

                    /* --- offers --- */

                if (this.offers != null) {

                    for (let i = 0; i < this.offers.length; i++) {

                        form.append('offers[]', this.offers[i]);

                    }
                }

            }

            /* =====================   Old Values   =========================== */

            if(this.editPrice == false) {

                form.append('want_to', this.oldWant_to);

                form.append('amount', this.oldAmount);

                if (this.oldDiscount != null) {

                    form.append('discount', this.oldDiscount);
                }
                if (this.oldPreviousPrice != null) {

                    form.append('previous_price', this.oldPreviousPrice);
                }
                if (this.oldPer != null) {

                    form.append('per', this.oldPer);
                }

                    /* --- offers --- */

                if (this.oldOffers != null) {

                    for (let i = 0; i < this.oldOffers.length; i++) {

                        form.append('offers[]', this.oldOffers[i]);

                    }
                }

            }

            eventBus.$emit('spinner', true);

            axios.post('/savedinventories', form )
                .then((response) => {
                    console.log(response)
                    if(response) {
                        eventBus.$emit('spinner', false)
                        eventBus.$emit('dialogCancel', false);
                    }
                }).catch((err) => {
                    console.log(err.response)
                    if(err) {

                        eventBus.$emit('spinner', false)
                    }
                })
                .finally(() => (eventBus.$emit('dialogCancel', false)));


        },
        cancel() {
            eventBus.$emit('priceOrcontactPrice', '1');
            eventBus.$emit('dialogCancel', false);
        },
        getItem(link) {
            console.log(link)
            this.loading = true;

            setTimeout(() => {

                axios.get(link)
                    .then((res) => {
                        console.log(res)

                        if(res) {

                            this.selected = res.data.data;

                            this.loading = false;

                        }
                    })
                    .catch((err) => {
                        console.log(err.response);
                        this.loading = false;
                    })
            }, 1000);

        },
    }
}
</script>

<style scoped>
.fontColor {
    color: #616161;
}
.headFontColor {
    color: #424242;
}
.pointer {
    cursor: pointer;
}
.v-progress-circular {

    margin: 1rem
}
</style>
