<template>
    <v-layout row wrap ma-0>
        <v-flex xs12 lg12 >
            <template  v-for="cate in categories">

                <v-flex xs12 lg11 class="mx-auto mb-3  background-shadow" :key="cate">
                    <v-card flat >
                        <v-layout row wrap align-center ma-0>
                            <v-flex xs12 sm2 md2 lg2 px-3>
                                <v-layout row wrap align-center >

                                    <v-flex xs4 sm10 offset-sm2 lg10 offset-lg2>
                                        <v-card-actions class="pa-0">
                                            <v-btn flat small class="btnSize" color="#ef6c3c">View All</v-btn>
                                        </v-card-actions>
                                    </v-flex>
                                    <v-flex xs7 sm10 offset-sm2 lg10 offset-lg2 >
                                        <v-card-title class="px-4">
                                            <div class="categoryTitle">{{ cate }}</div>
                                        </v-card-title>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 sm10 md10 lg10>
                                <AppCard :info="getProducts" :propWebHolder="webHolder"></AppCard>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </template>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../../app.js'
import AppCard from './../../components/AppCard'

export default {
    components: {
        AppCard
    },
    created() {
        eventBus.$on('webHolder', (data) => {
             return this.webHolder = data;

                this.$store.dispatch('disSpacialRoute', data)

                setTimeout(() => {

                })

        });

        this.products = this.getProducts.splice(0, 4)

        /* axios.get('/products')
        .then((response) => this.products = ((response.data).splice(0, 4)))
        .catch((err) => console.log(err)) */
    },
    mounted() {
        setTimeout(() => {
            this.routeSelected();
            //this.spacialRoute();
            }, 190)
    },
    data() {
        return {
            webHolder: '',
            products: [],
            cards: [
              {
                  title: 'Glance Designs Festive & Party Printed Women\'s Kurti  (Multicolor)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jk01bww0/kurti/q/3/s/m-evk098-glance-designs-original-imaf7f8sgurzdfky.jpeg?q=70',
                  Price: '299' },
              {
                  title: 'Asus ROG Core i7 8th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics) GL504GM-ES152T Gaming Laptop  (15.6 inch, Black, 2.4 kg)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jll6xzk0/computer/3/v/s/asus-na-gaming-laptop-original-imaf8zqzvef2z5gn.jpeg?q=70',
                  Price: '1,39,990' },
              {
                  title: 'AV Toys 5 Feet teddy bear - 152 cm  (Pink)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/j9it30w0/stuffed-toy/w/t/m/5-feet-teddy-bear-152-av-toys-original-imaez9nfwj5msfyh.jpeg?q=70',
                  Price: '1,547' },
              {
                  title: 'Apple iPhone XS Max (Gold, 64 GB)',
                  src: 'https://rukminim1.flixcart.com/image/832/832/jm9hfgw0/mobile/e/8/s/apple-iphone-xs-max-mt522hn-a-original-imaf97f6vzzxdq4p.jpeg?q=70',
                  Price: '1,09,900' }
              ],
              categories:['Electronics', 'Men', 'Women', 'Kids'],
        }
    },
    methods: {

        changeprd() {

            this.products = this.getProducts.splice(0, 4)
        },
        routeSelected() {

          var x = this.$route.params.webholder;
          this.webHolder = x;
            switch (x) {

            case 'products':
                //return this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                return  eventBus.$emit('pathWebholder', {id: 'searchproducts', name: 'Products', web: 'products'});;
                break;

            case 'serviceandbusiness':
                //return this.searchOptionSelected = {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'};
                return  eventBus.$emit('pathWebholder', {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'});;
                break;

            case 'properties':
                //return this.searchOptionSelected = {id: 'searchproperties', name: 'Propeties', web: 'properties'};
                return  eventBus.$emit('pathWebholder', {id: 'searchproperties', name: 'Propeties', web: 'properties'});;
                break;

            case 'useditems':
                //return this.searchOptionSelected = {id: 'searchuseditems', name: 'Used Items', web: 'useditems'};
                return  eventBus.$emit('pathWebholder', {id: 'searchuseditems', name: 'Used Items', web: 'useditems'});;
                break;

            case 'education':
                //return this.searchOptionSelected = {id: 'searcheducation', name: 'Education', web: 'education'};
                return  eventBus.$emit('pathWebholder', {id: 'searcheducation', name: 'Education', web: 'education'});;
                break;

            default:
                //return this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                return  eventBus.$emit('pathWebholder', {id: 'searchproducts', name: 'Products', web: 'products'});;
            }
      }
    },
    computed: {

        getProducts() {
            return this.$store.getters.getSpacialRouteArr.splice(0, 4)
        }
    },
    watch: {
        webholder () {
            this.$route.params.webholder = this.webholder
            //this.$router.push({ name: 'home', props:{ webholder : this.webholder} })

             console.log(this.webholder + "path")
        },
        '$route'(to, from) {

             this.$route.params.webholder = this.webHolder
        }
    }
}
</script>

<style scoped>
* {
    font-size: 14px;
}
/*  Small phones: from 0 to 480px */
@media only screen and (max-width: 480px) {
    .btnSize {
        font-size: 13px;
    }
}
</style>
