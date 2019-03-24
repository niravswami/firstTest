<template>
    <v-flex xs12 lg12>
            <v-container grid-list-sm fluid>
        <v-layout  wrap>
            <v-flex xs12 lg6>
                <v-text-field
                        flat
                        v-model="searchByName"
                        solo-inverted
                        hide-details
                        prepend-inner-icon="search"
                        label="Search by Storeview Name"
                        ref="searchFilter"
                    ></v-text-field>
                    <!-- class="hidden-sm-and-down" -->
        </v-flex>
            <v-flex xs12 lg6>
                <v-text-field
                        flat
                        v-model="searchByUniqueKey"
                        solo-inverted
                        hide-details
                        prepend-inner-icon="search"
                        label="Search by Unique Key"
                        ref="searchFilter"
                    ></v-text-field>
                    <!-- class="hidden-sm-and-down" -->
        </v-flex>

        </v-layout>
                <v-layout wrap mt-3>
                    <v-flex xs12 lg4 v-for="val in filterInv" :key="val.str_id">
                        <div @click="invSelected(val.str_id)" >

                            <v-card class="pointer" ripple>
                                <v-img
                                v-if="val.str_img"
                                :src="val.str_img"
                                aspect-ratio="2.75"
                                ></v-img>
                                <v-img
                                v-else
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="2.75"
                                ></v-img>

                                <v-card-title primary-title>
                                <div>
                                    <v-list-tile two-line>
                                        <h3 class="title " :title="val.str_name">{{ val.str_name }}</h3>
                                    </v-list-tile>
                                    <v-list-tile two-line>
                                        <div class="subheading " :title="val.str_addr">{{ val.str_addr }}</div>
                                    </v-list-tile>
                                </div>
                                </v-card-title>

                            </v-card>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>

            <!-- ================================================================================================== -->

            <v-layout  justify-center v-if="storeviewDialog">
                <v-dialog v-model="storeviewDialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                    <v-card>
                        <v-toolbar dark color="#FF6E40">
                            <!-- <v-btn icon @click.native="storeviewDialog = false" dark>
                                <v-icon>close</v-icon>
                            </v-btn> -->
                            <v-toolbar-title></v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn dark flat @click.native="storeviewDialog = false">close</v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <StoreviewDialog :info="storeviewSelected"></StoreviewDialog>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-flex>
</template>

<script>
import StoreviewDialog from './SelectedDialog'

export default {

    components: {
        StoreviewDialog,
    },

    created() {
        this.getStoreviews()
    },

    data() {
        return {
            storeviewDialog: false,
            fltrByNme: true,
            fltrByUnq: false,
            searchByName: '',
            searchByUniqueKey: '',
            storeviewList: [],
            storeviewProducts:[],
            storeviewSelected: {}
        }
    },
    methods: {
        getStoreviews() {
            axios.get('/searchbystoreview', { params: {userId: this.getUserInfo.id}})
                .then((res) => {
                    console.log(res);

                    this.storeviewList = res.data.data
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },

        invSelected(id) {

            let obj = this.storeviewList.find(obj => obj.str_id == id);
            this.storeviewDialog = true;
            this.storeviewSelected = obj;
            console.log(id);

        }
    },
    computed: {

        filterInv() {

            if(this.fltrByNme) {

                return this.storeviewList.filter((prd) => {
                    return prd.str_name.toLowerCase().match(this.searchByName);
                });
            }

            if(this.fltrByUnq) {

                return this.storeviewList.filter((prd) => {
                    return prd.unique_key.toLowerCase().match(this.searchByUniqueKey);
                });
            }

        },
        getUserInfo() {

            return this.user = this.$store.getters.getUserInfo;

        },

    },
    watch: {

        searchByName() {

            this.fltrByNme = true;
            this.fltrByUnq = false;
        },
        searchByUniqueKey() {

            this.fltrByNme = false;
            this.fltrByUnq = true;
        }
    }
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

