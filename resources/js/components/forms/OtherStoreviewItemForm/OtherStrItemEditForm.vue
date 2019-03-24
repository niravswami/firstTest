<template>
    <div>
       <v-layout wrap>
           <v-flex xs12 lg12>
               <v-card>
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
                                        {{ selected.root_cat != null ? selected.root_cat.name : ''}} <span v-show="selected.lvl_one_cat != null">
                                            > </span>
                                        {{ selected.lvl_one_cat != null ? selected.lvl_one_cat.name : ''}} <span v-show="selected.lvl_two_cat != null ">
                                            > </span>
                                        {{ selected.lvl_two_cat != null ? selected.lvl_two_cat.name : ''}} <span v-show="selected.lvl_three_cat != null">
                                            > </span>
                                        {{selected.lvl_three_cat != null ? selected.lvl_three_cat.name : ''}}
                                        <!-- Clothings > Men > Top Ware > Shirt -->
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

                                <v-flex xs12 class="pb-2" v-for="(val, i) in selected.description" :key="i">
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

                   </v-layout>
               </v-card>
           </v-flex>
       </v-layout>
    </div>
</template>

<script>

export default {

    props: ['selected'],
    data() {
        return {

        }
    }
}
</script>

