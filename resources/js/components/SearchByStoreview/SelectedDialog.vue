<template>
        <v-layout wrap justify-center mt-3>
            <v-flex xs12 lg8>
                <v-flex xs12>
                    <v-card>
                        <v-img
                        v-if="info.str_img"
                        :src="info.str_img"
                        aspect-ratio="2.75"
                        ></v-img>

                        <v-img
                        v-else
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        aspect-ratio="2.75"
                        >
                        </v-img>

                        <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ info.str_name }}</div>
                            <div class="subheading">{{ info.str_addr }}</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                        <v-btn flat>Share</v-btn>
                        <v-btn flat color="purple">Explore</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-slide-y-transition>
                        <v-card-text v-show="show">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <SelectedProductCard v-if="productsArr != null" :selectedCard="productsArr"></SelectedProductCard>
                    <v-card v-else class="text-xs-center mt-3 pa-3">
                        <h2 >No Products here...</h2>
                    </v-card>
                </v-flex>
            </v-flex>
        </v-layout>
</template>

<script>
import { eventBus } from '../../app.js'
import SelectedProductCard from './SelectedProductCard'

  export default {

      components: {
          SelectedProductCard,
      },
      props:['info'],
      created(){
          },
      mounted() {
          this.getProducts();
      },
    data() {
        return {
            show: false,
            productsArr: '',
            route: ''

        }
    },
    methods: {

        getProducts() {
            console.log(this.info)
            eventBus.$emit('spinner', true);

            let strvew = this.info.str_id;

            //setTimeout(() => {

                axios.get('/products/'+ strvew +'/storeviewproduct')
                //axios.get(this.selectSelected.href)
                .then((res) => {
                    console.log(res);
                    let b = res.data.data;
                    if(this.productsArr != []) {
                        eventBus.$emit('spinner', false)
                    }
                    if(b.length) {

                        this.productsArr = b;
                    } else {

                        this.productsArr = null;
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(eventBus.$emit('spinner', false));
           // },300);
        },
    },
  }
</script>
