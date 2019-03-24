<template>
    <div>
                        <v-container fluid grid-list-sm>
        <v-layout  wrap>

           <v-flex xs12 lg4 mb-3 pa-2 v-for="(val, i) in info" :key="i" >
               <v-card color="" class="pointer px-3 py-2" ripple >
                   <v-flex xs12 @click="invSelected(val.inv_id)">
                            <v-layout wrap >
                                <v-flex xs12 lg12>
                                    <v-layout  wrap >
                                            <v-flex xs4 lg4 d-flex >
                                                <v-img
                                                    :src="val.image"
                                                    contain
                                                ></v-img>
                                            </v-flex>
                                            <v-flex xs4 lg4 d-flex v-for="(val,i) in val.images" :key="i">
                                                <v-img
                                                    :src="val"
                                                    contain
                                                ></v-img>
                                            </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 lg12 >
                                <v-divider></v-divider>

                                    <v-flex xs12 lg12  >
                                            <span class="title headFontColor"> {{ val.title }} </span>
                                        <!-- <span class="headline headFontColor">This is My First Inventory Product</span> -->
                                    </v-flex>

                                    <v-flex xs12 class="mb-2">
                                        <v-layout  wrap>
                                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                                    Brand
                                            </v-flex>
                                            <v-flex xs9 class="body-2 font-weight-medium fontColor">
                                                {{ val.brand != null ? val.brand.name : 'no brand' }}
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 class="mb-2">
                                        <v-layout  wrap>
                                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                                    Category
                                            </v-flex>

                                            <v-flex xs9  class="body-2 font-weight-medium fontColor">
                                                <v-layout wrap>

                                                    <div v-for="(cat, i) in  val.categories" :key="i" >
                                                        {{ cat.name }} <span class="px-2" v-if="val.categories.length !== i+1">></span>
                                                    </div>
                                                </v-layout>
                                                <!-- Clothings > Men > Top Ware > Shirt -->
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 class="mb-2">
                                            <div class="subheading pb-2 font-weight-medium headFontColor">
                                                Highlights
                                            </div>

                                            <v-layout wrap>
                                                <v-flex xs6 lg6 tag="li" class="pt-2 pr-3 body-2 fontColor"  v-for="(high, i) in val.highLights"  :key="i">
                                                    {{ high }}
                                                </v-flex>
                                            </v-layout>
                                    </v-flex>

                                        <!-- <v-flex xs12 lg12 class="mb-2">
                                            <div class="subheading pb-2 font-weight-medium headFontColor">
                                                Description
                                            </div>

                                            <v-flex xs12 class="pb-2"  v-for="(val, i) in val.descriptions"  :key="i">
                                                <v-layout row wrap>
                                                    <v-flex xs3 class="body-2 font-weight-medium fontColor">
                                                        {{ val.heading }}
                                                    </v-flex>
                                                    <v-flex xs9 class="body-2 fontColor">
                                                        {{ val.description }}

                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-flex> -->

                                </v-flex>
                            </v-layout>

                   </v-flex>
               </v-card>
           </v-flex>
       </v-layout>
                        </v-container>
    </div>
</template>

<script>
import {eventBus} from '../app.js'

export default {
    props:['info'],
    methods: {
        invSelected(id) {

            eventBus.$emit('cardSelected', id);

        }
    },
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
</style>

