<template>
    <div>
       <v-layout wrap>
           <v-flex xs12>
               <template v-for="(item, index) in itemsArr">
                    <v-list-tile
                        :key="index"
                        avatar
                        @click.stop="goToPtoduct(item.id, item.storeview_id, item.href)"
                        class=""
                    >
                        <v-list-tile-action class="mr-2">
                            <v-img v-if="item.image != null"  :src="item.image" class="brd" contain></v-img>
                            <v-img v-else-if="item.images != null"  :src="item.images[0]" class="brd" contain></v-img>
                            <v-img v-else :src="backupImg" class="brd" contain></v-img>
                        </v-list-tile-action>
                        <!-- <v-list-tile-avatar tile >
                        <img :src="item.image">
                        <v-img v-if="item.image != null"  :src="item.image" class="brd" contain></v-img>
                        <v-img v-else-if="item.images != null"  :src="item.images[0]" class="brd" contain></v-img>
                        <v-img v-else :src="backupImg" class="brd" contain></v-img>
                        </v-list-tile-avatar> -->

                        <v-list-tile-content>
                        <v-list-tile-title two-line>

                            <router-link :title="item.title"
                                :to="{ name: 'singleproduct', params: { prd_id: item.id }, props:{ propID : item.id}, query: {websrch: propWebHolder,svid: item.storeview_id, prid: item.id , ref: item.href}}">{{ item.title }}</router-link>
                            </v-list-tile-title>

                        <v-list-tile-sub-title><span>₹ </span>{{ item.totalPrice ? item.totalPrice : 0}} | <span class=""> {{ item.discount? item.discount: 0  }}% off</span></v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-menu
                                bottom
                                left
                                :close-on-click="true"
                                attach
                                @click.native.stop>
                                <v-btn
                                slot="activator"

                                icon
                                >
                                <v-icon>more_vert</v-icon>
                                </v-btn>

                                <v-list>

                                    <v-list-tile @click.stop="removeSavedProduct(item.id, item.what)">
                                        <v-list-tile-title>Remove</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-list-tile-action>
                    </v-list-tile>
                    </template>
           </v-flex>
       </v-layout>
    </div>
</template>

<script>
import { eventBus } from '../../app.js'
export default {
    props:['propSavedItems', 'propWebHolder'],
    data() {
        return {
            backupImg: require('../../../assets/uploadimg.png')

        }
    },
    computed: {
        itemsArr() {
            if(this.propSavedItems) {
                return this.propSavedItems;
            }
        },
    },

    methods: {
        goToPtoduct(itemID, StrID, Href) {

            this.$router.push({ name: 'singleproduct', params: { prd_id: itemID }, props:{ propID : itemID, slug: val.slug}, query: {websrch: this.propWebHolder, svid: StrID, prid: itemID , ref: Href}});
        },
        removeSavedProduct(itemID, w) {

            /* let form = new FormData();

            form.append('prd_id', this.$route.query.prid) */
            //let form = this.$route.query.prid;

            let url = null;

            switch (w) {
                case 'products':
                    url = 'saveproducts'
                    break;
                case 'serviceandbusiness':
                    url = 'saveservice'
                    break;
                case 'properties':
                    url = 'saveproperty'
                    break;
                case 'education':
                    url = 'saveeducation'
                    break;
                case 'useditems':
                    url = 'saveuseditem'
                    break;

                default:
                    break;
            }

            console.log(w);
            console.log(url);

            // this.$emit('removeItem', itemID);
            // return;

            var r = confirm("Are you sure you want to remove from saved list");

                if (r == true) {
                    axios.delete(`/${url}/${itemID}`)
                        .then((res) => {
                            console.log(res.data);

                            if(res) {

                                eventBus.$emit('savedProduct', itemID);
                                this.$store.dispatch('disTotalCountOfSavedProducts');
                            }

                        })
                        .catch((err) => {
                            console.log(err.response);
                        })
                } else {

                    return;
                }

        },

    }
}
</script>
