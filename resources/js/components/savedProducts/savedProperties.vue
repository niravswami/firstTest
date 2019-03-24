<template>
    <div>
       <v-layout wrap>
           <v-flex xs12>
               <!-- ====   Saved Properties   ==== -->

                <v-card v-if="itemsArr">
                    <v-list two-line>
                        <v-subheader>
                            Properties
                        </v-subheader>
                        <ListComp :propSavedItems="itemsArr" @removeItem="removeSavedProduct($event)"></ListComp>

                        </v-list>
                </v-card>
           </v-flex>
       </v-layout>
    </div>
</template>

<script>
import { eventBus } from '../../app.js'
import ListComp from './ListComp'

export default {
    components: {
        ListComp,
    },
    props:['propSavedItems', 'propWebHolder', 'propSpinner'],
    data() {
        return {
            backupImg: require('../../../assets/uploadimg.png')

        }
    },
    computed: {
        itemsArr() {
            if(this.propSavedItems) {
                return this.propSavedItems.property;
            }
        },
        getPropSpinner() {

            return this.propSpinner;
        }
    },

    methods: {
        goToPtoduct(itemID, StrID, Href) {

            this.$router.push({ name: 'singleproduct', params: { prd_id: itemID }, props:{ propID : itemID}, query: {websrch: this.propWebHolder, svid: StrID, prid: itemID , ref: Href}});
        },
        removeSavedProduct(itemID) {

            /* let form = new FormData();

            form.append('prd_id', this.$route.query.prid) */
            //let form = this.$route.query.prid;

            console.log(itemID+'property');
            //return;

            var r = confirm("Are you sure you want to remove from saved list");

                if (r == true) {
                    axios.delete('/saveproperty/'+itemID)
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
