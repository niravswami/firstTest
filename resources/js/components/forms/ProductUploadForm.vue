<template>

    <!-- <v-layout  wrap>-->
        <v-flex xs12 lg12 >
            <v-flex class="mx-auto width1400  mb-3">
                 <router-view></router-view>
            </v-flex>
        </v-flex>
    <!-- </v-layout> -->

</template>

<script>
import { eventBus } from '../../app.js';
import PropertyForm from '../forms/PropertyForm'
import ServiceForm from '../forms/ServiceForm'
import ProductForm from '../forms/ProductForm'
import EducationForm from '../forms/EducationForm'
import UsedItemForm from '../forms/UsedItemForm'

  export default {
      components: {
          PropertyForm,
          ServiceForm,
          ProductForm,
          UsedItemForm,
          EducationForm,
      },
    data () {
      return {

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
