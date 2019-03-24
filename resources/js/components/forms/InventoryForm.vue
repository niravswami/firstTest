<template>
<v-flex class="pa-3 mx-auto width1400" >
    <v-card flat class="background-shadow mb-3 pa-3 text-xs-center" >

            <div class="headline">Brand / Company Product Upload Form</div>

    </v-card>
        <v-layout row wrap justify-space-around>
            <v-flex xs12 lg4>
                <div class="sticky mb-3">
                    <ImagesComp
                        @mainImg="mainImg = $event"
                        @imgArr="imgArr = $event"
                    ></ImagesComp>
                </div>
            </v-flex>
            <v-flex xs12 lg7 class="background-shadow ">
                    <v-flex xs12>
                        <categoryComp @category="category = $event"></categoryComp>
                    </v-flex>

                <hr>

                <v-card xs12 lg12 class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                        Product Model Number
                    </v-card-text>

                        <v-flex xs12>
                            <v-text-field
                                box
                                label="Enter Model Number or Name"
                                v-model="modelName"
                                color="orange darken-2"
                                hide-details
                                prepend-icon="fab fa-product-hunt"
                                >

                            </v-text-field>
                        </v-flex>
                </v-card>
                <hr>
                    <brand-comp
                        @brand="brand = $event"
                    ></brand-comp>
                <hr>
                <TitleComp
                   @title="title = $event"
                   @slug="slug = $event"
                   @highlights="highlights = $event"
                   @descriptions="descriptions = $event"
                   @keywords="keywords = $event"
                ></TitleComp>
            </v-flex>
        </v-layout>
        <v-flex xs12 lg12>
            <v-card class="pa-3 mt-3">
                <v-card-actions>
                    <v-btn block outline color="success" dark @click="submit">upload</v-btn>
                    <v-btn block outline color="error" dark>cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
</v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import { selectSearchRoute } from '../../selectproductmixin.js'
import ImagesComp from '../ImagesComponent'
import TitleComp from '../ttl'
import AmountComp from '../amt'
import BrandComp from '../BrandComp'
import categoryComp from '../Categories/CategoryComp'

export default {
    components: {
        ImagesComp,
        TitleComp,
        AmountComp,
        BrandComp,
        categoryComp
    },
    mixins:[selectSearchRoute],
    data() {
        return {
            mainImg: null,
            imgArr: null,

            modelName: null,

            /* -------------- */
           /* CATEGORY new */
          /* -------------- */

            category: null,

            rootArr: [],
            rootCat: '',

            levelOneArr: [],
            levelOneCat: '',

            levelTwoArr: [],
            levelTwoCat: '',

            brand: null,

            title: null,
            slug: null,
            highlights: null,
            descriptions: null,
            keywords: null,
        }
    },
    methods: {
        submit () {

            let form = new FormData();

            /* --- singel image --- */

            form.append('image', this.mainImg);

            /* --- multiple images --- */

            if (this.imgArr != null) {

                for (let i = 0; i < this.imgArr.length; i++) {

                    form.append('imgs[]', this.imgArr[i]);

                }
            }

            /* --- Category --- */

            if (this.category != null) {

                for (let i = 0; i < this.category.length; i++) {

                    form.append('category[]', this.category[i]);

                }
            }


            /* --- highlights --- */

            if (this.highlights != null) {

                for (let i = 0; i < this.highlights.length; i++) {

                    form.append('highlights[]', this.highlights[i]);

                }
            }


            /* --- descriptions --- */

            if (this.descriptions != null) {

                for (let i = 0; i < this.descriptions.length; i++) {

                    form.append('descriptions[]', JSON.stringify(this.descriptions[i]));

                }
            }

            /* --- keywords --- */

            if (this.keywords != null) {

                for (let i = 0; i < this.keywords.length; i++) {

                    form.append('keywords[]', this.keywords[i]);

                }
            }

            /* --- product model name --- */

            if (this.modelName != null) {

                form.append('modelName', this.modelName);
            }

            /* --- offers --- */

            /* if (this.offers != null) {

                for (let i = 0; i < this.offers.length; i++) {

                    form.append('offers[]', this.offers[i]);

                }
            } */

                form.append('brand', this.brand.id);

                form.append('title', this.title);

                form.append('slug', this.slug);

                //form.append('amount', this.amount);

                //form.append('discount', this.discount);

                //form.append('previousPrice', this.previousPrice);

                let strId = this.$route.query.str_id;

                form.append('str_id', strId);

                form.append('shareable', 1);

            let image = form;

            let submit = {

                brand: this.brand.id,

                modelName: this.modelName,

                category: this.category,

                title: this.title,
                slug: this.slug,
                highlights: this.highlights,
                descriptions: this.descriptions,
                keywords: this.keywords,
                shareable: 1

            }

            //let submit = form;
                console.log(submit);



            axios.post('/inventories',  image)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
            return;
        },
        getRootCat() {

            axios.get('/rootcategories')
                .then((response) => {
                    this.rootArr = response.data;
                    console.log(response.data);
                })
                .catch((errors) => {
                    console.log(errors);
                })
        },

    },
    watch: {
        rootCat: function() {

            axios.get('/levelonecategories')
                    .then((response) => {
                        this.levelOneArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
        },
        levelOneCat: function () {

            axios.get('/leveltwocategories')
                    .then((response) => {
                        this.levelTwoArr = response.data;
                        console.log(response.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
        },
        radios: function() {
                 eventBus.$emit('discount', this.radios);
                 console.log(this.radios)
        },
        /* ---------------------------------------------- */
        mainImg: function () {
            console.log(this.mainImg);
        },
        imgArr: function () {
            console.log(this.imgArr);
        },
        /* ---------------------------------------------- */
        brand: function () {
            console.log(this.brand)
        },
        /* ---------------------------------------------- */
        title: function () {
            console.log(this.title)
        },
        slug: function () {
            console.log(this.slug)
        },
        highlights: function () {
            console.log(this.highlights)
        },
        descriptions: function () {
            console.log(this.descriptions)
        },
        keywords: function () {
            console.log(this.keywords)
        },
    }
}
</script>

<style scoped>
.sticky {
    position: sticky;
    top: 70px;
}
</style>

