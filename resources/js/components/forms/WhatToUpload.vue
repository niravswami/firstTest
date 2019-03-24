<template>

    <!-- <v-layout  wrap>-->
        <v-flex xs12 lg12 >
            <v-flex class="mx-auto width1400  mb-3">

                    <v-layout row wrap>
                        <v-flex xs12 lg6 pa-1 offset-lg3  v-for="val in items" :key="val.title">
                            <v-card color="" :to="val.to" ripple class="">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">{{ val.title }}</div>
                                                <div>{{ val.text }}</div>
                                            </div>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-img
                                                :src="val.src"
                                                height="100px"
                                                contain
                                            ></v-img>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
            </v-flex>
            <router-view></router-view>
           <!-- <v-card flat class="mx-auto width1400 background-shadow px-3">
                <v-list three-line subheader>
                    <v-radio-group v-model="radios" :mandatory="false" class="">
                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-radio value="1" color="orange lighten-1"></v-radio>
                            </v-list-tile-action>

                            <v-list-tile-content @click.prevent="radios = '1'">
                                <v-list-tile-title>Products</v-list-tile-title>
                                <v-list-tile-sub-title>Product Listing</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-radio value="2" color="orange lighten-1"></v-radio>
                            </v-list-tile-action>

                            <v-list-tile-content @click.prevent="radios = '2'">
                                <v-list-tile-title>Service / Business</v-list-tile-title>
                                <v-list-tile-sub-title>Business or Service Listing</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-radio value="3" color="orange lighten-1"></v-radio>
                            </v-list-tile-action>

                            <v-list-tile-content @click.prevent="radios = '3'">
                                <v-list-tile-title>Property</v-list-tile-title>
                                <v-list-tile-sub-title>Sell Or Rent</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-radio value="4" color="orange lighten-1"></v-radio>
                            </v-list-tile-action>

                            <v-list-tile-content @click.prevent="radios = '4'">
                                <v-list-tile-title>Education</v-list-tile-title>
                                <v-list-tile-sub-title>Tution class, Drawing class, computer traing, Driving traing, ETC.</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-radio value="5" color="orange lighten-1"></v-radio>
                            </v-list-tile-action>

                            <v-list-tile-content @click.prevent="radios = '5'">
                                <v-list-tile-title>Used Item</v-list-tile-title>
                                <v-list-tile-sub-title>Used Item Listing</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-radio-group>
                </v-list>

           </v-card> -->
                <!-- <v-flex xs12 lg12   class="">
                    <div class="my-3 mx-auto" v-if="radios == '1'">
                         <ProductForm></ProductForm>
                    </div>
                    <div class="my-3 mx-auto" v-if="radios == '2'">
                         <ServiceForm></ServiceForm>

                    </div>
                    <div class="my-3 mx-auto" v-if="radios == '3'">
                         <PropertyForm></PropertyForm>
                    </div>

                    <div class="my-3 mx-auto" v-if="radios == '4'">
                         <EducationForm></EducationForm>
                    </div>
                    <div class="my-3 mx-auto" v-if="radios == '5'">
                         <UsedItemForm></UsedItemForm>
                    </div>
                </v-flex> -->
        </v-flex>
    <!-- </v-layout> -->

</template>

<script>
import { eventBus } from '../../app.js';
import { selectSearchRoute } from '../../selectproductmixin.js'
import PropertyForm from '../forms/PropertyForm'
import ServiceForm from '../forms/ServiceForm'
import ProductForm from '../forms/ProductForm'
import EducationForm from '../forms/EducationForm'
import UsedItemForm from '../forms/UsedItemForm'

  export default {
      mixins:[selectSearchRoute],
      components: {
          PropertyForm,
          ServiceForm,
          ProductForm,
          UsedItemForm,
          EducationForm,
      },
    data () {
      return {
          e6: '',
         radios: '3',
         product: require('../../../assets/Flat Grocery Shoping.svg') ,
         shop: require('../../../assets/shop.svg') ,
         items: [
             {
                 title: 'Products',
                 text: 'Product listing',
                 src: require('../../../assets/Flat Grocery Shoping.svg'),
                 to: { name: 'whereselected', query: {str_id: this.$route.query.str_id}}
             },
            //  {
            //      title: 'Products',
            //      text: 'Product listing',
            //      src: require('../../../assets/Flat Grocery Shoping.svg'),
            //      to: { name: 'choosetouploade', query: {str_id: this.$route.query.str_id}}
            //  },
             {
                 title: 'Service / Business',
                 text: 'Business or Service Listing',
                 src: require('../../../assets/business.svg'),
                 to:  { name: 'serviceandbusinessform', query: {str_id: this.$route.query.str_id} }
             },
             {
                 title: 'Property',
                 text: 'Sell or Rent',
                 src: require('../../../assets/Flat Cityscape Sunset with gradient background vector illustration-01.svg'),
                 to: { name: 'propertyform', query: {str_id: this.$route.query.str_id} },
             },
             {
                 title: 'Education',
                 text: 'Tution class, Drawing class, computer traing, Driving traing, ETC.',
                 src: require('../../../assets/Edu.svg'),
                 to: { name: 'educationform', query: {str_id: this.$route.query.str_id} }
             },
             {
                 title: 'Used Item',
                 text: 'Used Item Listing',
                 src: require('../../../assets/box bottle.svg'),
                 to: { name: 'useditemform', query: {str_id: this.$route.query.str_id} },
             },
         ],
      }
    },
    methods: {
    },
    watch: {
        /* '$route'(to, from) {

            this.name= to.params.name;
        }, */

        radios: function() {

                console.log(this.radios)

        }
    },

    methods: {
    }
  }
</script>

<style scoped>

</style>
