<template>
    <v-layout  wrap>

           <v-flex xs12 lg4 mb-3 pa-2 v-for="(val, i) in selectedCard" :key="i">
               <v-card color="" class="pointer" ripple >
                   <v-flex xs12 @click="invSelected(val.id)">
                        <v-container fluid grid-list-sm>
                            <v-layout wrap >
                                <v-flex xs12 lg12>
                                    <v-layout  wrap >
                                            <v-flex xs4 lg4 d-flex v-for="(val,i) in val.images" :key="i">
                                                <v-img
                                                    :src="val"
                                                    contain
                                                ></v-img>
                                            </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 lg12 >

                                    <v-flex xs12 lg12  >
                                            <span class="title headFontColor"> {{ val.title }} </span>
                                        <!-- <span class="headline headFontColor">This is My First Inventory Product</span> -->
                                    </v-flex>

                                    <v-flex xs12 class="mb-2">
                                        <v-layout  wrap>
                                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                                    Brand
                                            </v-flex>
                                            <v-flex xs9 class="subheading font-weight-medium fontColor">
                                                {{ val.brand != null ? val.brand.name : 'no brand' }}
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 class="mb-2">
                                        <v-layout  wrap>
                                            <v-flex xs3 class="subheading font-weight-medium headFontColor">
                                                    Category
                                            </v-flex>

                                            <v-flex xs9 class="body-2 font-weight-medium fontColor">
                                                {{ val.root_cat != null ? val.root_cat.name : ''}} <span v-show="val.lvl_one_cat != null"> > </span>
                                                {{ val.lvl_one_cat != null ? val.lvl_one_cat.name : ''}} <span v-show="val.lvl_two_cat != null "> > </span>
                                                {{ val.lvl_two_cat != null ? val.lvl_two_cat.name : ''}} <span v-show="val.lvl_three_cat != null"> > </span>
                                                {{val.lvl_three_cat != null ? val.lvl_three_cat.name : ''}}
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
                        </v-container>

                   </v-flex>
               </v-card>
           </v-flex>
           <!-- ====================================================================== -->
           <v-flex xs12 v-if="dialog">
                <v-dialog
                    v-if="selected != null"
                        v-model="dialog"
                        scrollable
                        persistent
                        max-width="100%"
                        transition="dialog-transition"
                    >
                    <v-flex xs12 lg12>
                        <GetProductDialog :selectedP="selected"></GetProductDialog>
                    </v-flex>
            </v-dialog>
           </v-flex>
       </v-layout>
</template>

<script>
import { eventBus } from '../../app.js'
import GetProductDialog from './GetProductDialog'

export default {
    components: {
        GetProductDialog,
    },
    created() {
        eventBus.$on('dialogCancel', data => {
            this.dialog = false;
            this.selected = {}
        });
    },
    props: ['selectedCard'],
    data() {
        return {
            dialog: false,
            selected: {},
            search:''
        }
    },
    methods: {
        invSelected(id) {
            console.log(id)

            let obj = this.selectedCard.find(obj => obj.id == id);
            this.dialog = true;
            this.selected = obj;

        }
    },
    computed: {

        filterInv() {

            return this.info.filter((prd) => {
                return prd.title.toLowerCase().match(this.search);
            })
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
