<template>
    <div>
        <v-card flat class="pa-3">
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
                                {{ selected.rootCat != null ? selected.rootCat.name : ''}} <span v-show="selected.lvl_one != null">
                                    > </span>
                                {{ selected.lvl_one != null ? selected.lvl_one.name : ''}} <span v-show="selected.lvl_two != null ">
                                    > </span>
                                {{ selected.lvl_two != null ? selected.lvl_two.name : ''}} <span v-show="selected.lvl_three != null">
                                    > </span>
                                {{selected.lvl_three != null ? selected.lvl_three.name : ''}}
                                <!-- Clothings > Men > Top Ware > Shirt -->
                            </v-flex>
                        </v-layout>
                    </v-flex>


                    <v-flex xs12 class="py-2">
                        <div class="subheading pb-2 font-weight-medium headFontColor">
                            Highlights
                        </div>

                        <v-layout wrap>
                            <v-flex xs6 lg6 tag="li" class="pt-2 pr-3 body-2 fontColor" v-for="(high, i) in selected.highLights"
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
                                <v-flex xs3 class="body-2 font-weight-medium fontColor">
                                    {{ val.heading }}
                                </v-flex>
                                <v-flex xs9 class="body-2 fontColor">
                                    {{ val.description }}

                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>

                </v-flex>
                <v-flex xs12 lg5 class="pa-1">
                    <div class="subheading pb-2 font-weight-medium headFontColor">
                        Enter price Details
                    </div>
                    <RetailRentEtc
                        @radios="radios = $event"
                    ></RetailRentEtc>
                    <amount-comp
                        @amount="amount = $event"
                        @discount="discount = $event"
                        @offers="offers = $event"
                        @wholesale="wholesale = $event"
                        @previousPrice="previousPrice = $event"
                        @per="per = $event"
                    ></amount-comp>
                    <v-spacer></v-spacer>
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
import { eventBus } from '../app.js'
import AmountComp from './amt'
import RetailRentEtc from './RetailRentEtc'

export default {
    props: ['selected'],
    components: {
        AmountComp,
        RetailRentEtc
    },
    data() {
        return {
            radios: '1',
            amount: null,
            discount: null,
            per: null,
            previousPrice: null,
            Offers: null,
        }
    },
    methods: {
        submit () {

            if(this.amount != null) {

                let form = new FormData();

                form.append('radio', this.radios);

                if(this.selected.inv_id != '') {

                    form.append('inv_id', this.selected.inv_id);
                }

                if (this.amount != null) {

                        form.append('amount', this.amount);
                    }

                    if (this.discount != null) {

                        form.append('discount', this.discount);
                    }
                    if (this.previousPrice != null) {

                        form.append('previous_price', this.previousPrice);
                    }
                    if (this.per != null) {

                        form.append('per', this.per);
                    }

                    form.append('str_id', this.$route.query.str_id );

                    /* --- offers --- */

                if (this.offers != null) {

                    for (let i = 0; i < this.offers.length; i++) {

                        form.append('offers[]', this.offers[i]);

                    }
                }

                eventBus.$emit('spinner', true)
                axios.post('/savedinventories', form )
                    .then((response) => {
                        console.log(response)
                        if(response) {
                            eventBus.$emit('spinner', false)
                            eventBus.$emit('dialogCancel', false);
                        }
                    }).catch((err) => {
                        console.log(err)
                        if(err) {


                        }
                    })
                    .finally(() => (eventBus.$emit('dialogCancel', false)));
                console.log(this.selected.inv_id)
            } else {
                alert('Please Provide Price')
            }

        },
        cancel() {
            eventBus.$emit('priceOrcontactPrice', '1');
            eventBus.$emit('dialogCancel', false);
        }
    }
}
</script>
