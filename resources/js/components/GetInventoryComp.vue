<template>
    <v-flex xs12 lg12>
        <v-flex xs12 lg12>
           <v-text-field
                flat
                v-model="search"
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
                class="hidden-sm-and-down"
                ref="searchFilter"
            ></v-text-field>
       </v-flex>

       <InvCard :info="info" ></InvCard>
       <!-- <v-layout  wrap>

           <v-flex xs12 lg4 mb-3 pa-2 v-for="(val, i) in info" :key="i">
               <v-card color="" class="pointer" ripple >
                   <v-flex xs12 @click="invSelected(val.inv_id)">
                        <v-container fluid grid-list-sm>
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

                                            <v-flex xs9  class="body-2 font-weight-medium fontColor">
                                                <v-layout wrap>

                                                    <div v-for="(cat, i) in  val.categories" :key="i" class="pl-2">
                                                        {{ cat.name }} <span class="pl-2" v-if="val.categories.length !== i+1">></span>
                                                    </div>
                                                </v-layout>
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

                                        <v-flex xs12 lg12 class="mb-2">
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
                                        </v-flex>

                                </v-flex>
                            </v-layout>
                        </v-container>

                   </v-flex>
               </v-card>
           </v-flex>
       </v-layout> -->

       <!-- ============================================================================================================ -->

       <v-dialog
            v-if="selected != null"
                v-model="dialog"
                scrollable
                persistent
                max-width="100%"
                transition="dialog-transition"
            >
            <v-flex xs12 lg12>
                <get-inventory-dialog :selected="selected"></get-inventory-dialog>
            </v-flex>
       </v-dialog>
    </v-flex>
</template>

<script>
import { eventBus } from '../app.js'
import GetInventoryDialog from './GetInventoryDialog'
import InvCard from './InvCard'

export default {
    props: ['info'],
    components: {
        GetInventoryDialog,
        InvCard,
    },
    created() {
        eventBus.$on('dialogCancel', data => {
            this.dialog = data;
            this.selected = null
        });
        eventBus.$on('cardSelected', data => {
            this.invSelected(data)
        });
    },
    data() {
        return {
            search: '',
            dialog: false,
            selected: null,
            images: [
                {
                    img: require('../../assets/assembly line.svg')
                },
                {
                    img: require('../../assets/box bottle.svg')
                },
                {
                    img: require('../../assets/company.svg')
                },
                {
                    img: require('../../assets/shop.svg')
                },
                {
                    img: require('../../assets/Education.svg')
                },
            ],
            highLights: [
                'high lights one',
                'high lights one',
                'high lights one',
                'high lights one',
                'high lights one',
                'high lights one',
            ],
            descriptions: [
                {
                    heading: 'heading one',
                    description: 'this is my description one of heading one.',
                },
                {
                    heading: 'heading two',
                    description: 'this is my description two of heading two which is few words longer than the heading one description',
                },
            ],
        }
    },
    methods: {
        invSelected(id) {

            let obj = this.info.find(obj => obj.inv_id == id);
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
