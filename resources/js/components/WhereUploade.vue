<template>
<v-flex xs12 lg12>
    <v-card class="mx-auto width1400 background-shadow mb-3">
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Product Uploade</h3>
            </div>
        </v-card-title>
    </v-card>
    <v-card class="mx-auto width1400" flat color="transparent">
                <v-layout wrap>
                    <v-flex xs12 lg6 class="pa-3" v-for="val in items" :key="val.headline" v-show="val.show">
                        <v-card :to="val.to" class="background-shadow">
                            <v-img
                                :src="val.src"
                                max-height="400px"

                            ></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ val.headline }}</h3>
                                    <div>{{ val.text }}</div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
                <!-- <v-card> -->
                    <v-card-actions>
                        <v-btn
                            @click.native="back"
                            flat
                            color="primary"
                        >
                            <v-icon left dark>arrow_back</v-icon>
                            Back
                        </v-btn>

                    </v-card-actions>

                <!-- </v-card> -->
            </v-card>
</v-flex>
</template>

<script>
import { eventBus } from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
export default {
    mixins:[selectSearchRoute],
    data() {
        return {

         company: require('../../assets/assembly line.svg') ,
         shop: require('../../assets/shop.svg') ,
         items: [
             {
                headline: 'Shop Owner',
                text: 'To sell product from your shop',
                src: require('../../assets/shop.svg') ,
                to: {name: 'whereselected', query: {str_id: this.$route.query.str_id}} ,
                show: true,
             },
             {
                headline: 'Brand / Company ',
                text: 'Brand / Company products listed here so retailer / wholeseller can list products in their storeviews',
                src: require('../../assets/assembly line.svg') ,
                to: {name: 'inventoryform', query: {str_id: this.$route.query.str_id}} ,
                show: false,
             },
         ]
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>
