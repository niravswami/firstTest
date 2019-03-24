<template>
   <div class="mx-auto width1400  mb-3">
       <v-layout row wrap mb-3>
           <v-flex xs12>
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
           </v-flex>
           <v-flex xs12 lg6 pa-1 v-for="(val, i) in whereCards" :key="val.title" @click="abc(i)">
               <v-card ripple color="" :class="{active: aa == val.val}" style="cursor: pointer;" v-model="aa" :value="val.val" class="" exact-active-class>
                   <v-container fluid grid-list-lg>
                       <v-layout row>
                           <v-flex xs7>
                               <div>
                                   <div class="headline">{{ val.title }}</div>
                                   <div>{{ val.text }}</div>
                               </div>
                           </v-flex>
                           <v-flex xs5>
                               <v-img
                                   :src="val.src"
                                   height="125px"
                                   contain
                               ></v-img>
                           </v-flex>
                       </v-layout>
                   </v-container>
               </v-card>
           </v-flex>
       </v-layout>

       <!-- <v-flex xs12 lg12>
           <v-text-field
                flat
                v-model="search"
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
                class="hidden-sm-and-down"
                ref="autocomplete"
            ></v-text-field>
       </v-flex> -->
       <v-flex xs12 lg12 v-if="aa == 2">
           <GetInventoryComp :info="products"></GetInventoryComp>
       </v-flex>
       <v-flex xs12 lg12 v-else-if="aa === 0 ">
           <productForm></productForm>
       </v-flex>
       <v-flex xs12 lg12 v-else-if="aa === 1 ">
           <SearchForStoreview></SearchForStoreview>
       </v-flex>
   </div>
</template>

<script>
import { eventBus } from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import GetInventoryComp from '../components/GetInventoryComp'
import productForm from '../components/forms/ProductForm'
import SearchForStoreview from '../components/SearchByStoreview/SearchByStoreview'

export default {
    mixins:[selectSearchRoute],
    components: {
        GetInventoryComp,
        productForm,
        SearchForStoreview
    },
    created() {
        if(this.aa == '1') {


        }
    },

    data() {
        return {
            aa: '',
            search: '',
            whereCards: [
                {
                    title: 'Upload Your Own Product',
                    text: '',
                    src: require('../../assets/Tradesman Handyman Holding Lots Of Tools.svg'),
                    to: '1',
                    val: '0',
                },
                {
                    title: 'Search For Storeview To Upload Product',
                    text: '',
                    src: require('../../assets/corridor.jpg'),
                    to: '2',
                    val: '1',
                },
                /* {
                    title: 'Upload From Inventroy',
                    text: '',
                    src: '',
                    to: '3',
                    val: '2',
                }, */
            ],
            products: [],
        }
    },
    methods: {
        abc(i) {
            this.aa = i;

            if(i == 2) {
                this.getInventoryItems();
            }

            console.log(i)
        },
        getInventoryItems() {
            eventBus.$emit('spinner', true)
            axios.get('/shareableinventories')
                .then((response) => {
                    console.log(response.data.data);
                    if(response) {

                        this.products = response.data.data;
                        eventBus.$emit('spinner', false)
                    }
                })
                .catch((errors) => {
                    console.log(errors);
                })
        },
        back() {
            this.$router.go(-1);
        }
    },

    watch: {
    }
}
</script>

<style scoped>
.active {
    /* box-shadow: 1px 1px 10px #fc4a1a; */
    box-shadow: 1px 1px 10px #1ba532;
}
</style>
