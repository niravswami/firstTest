<template>
    <v-card xs12 lg12 class="pa-3 " flat>
        <v-card-text class="subheading font-weight-medium">
            Brand
        </v-card-text>
        <v-combobox
            v-model="brand"
            :items="brandArr"
            label="Enter Brand Name"
            box item-text="name"
            item-value="id"
            color="orange darken-2"
            hide-details
            prepend-icon="fas fa-industry"
            :loading="isLoading"
            @focus="getBrands">
            <template slot="no-data">
                <!-- <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                        <v-list-tile-title>
                            No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                        </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list> -->
            </template>
        </v-combobox>

        <div class="subheading pa-2">Didn't find your Brand?<span class="forSpanClick" @click="openBrandDialog"> click
                here</span> to Add</div>
        <v-dialog
            v-model="newBrandDialog"
            scrollable
            persistent
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
        >
            <v-flex xs12 lg12 >
                <v-card class="pa-4" v-if="newBrandSuccess">
                    <v-card-title class="subheading font-weight-medium">
                        Add New Brand
                    </v-card-title>
                    <v-text-field box label="Enter New Brand" v-model="newBrand"></v-text-field>
                    <v-card-actions>

                        <v-btn outline color="success" @click="addBrand">Add</v-btn>
                        <v-btn outline color="error" @click="cancelNewBrand">cancel</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="pa-4" v-else>
                    <v-card-title class="subheading font-weight-medium">
                        {{ newBrand }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn outline color="success" @click="cancelNewBrand">ok</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-dialog>
    </v-card>
</template>

<script>
import { eventBus } from '../app.js'
export default {
    props:['propBrand'],
    data() {
        return {
            brand: this.propBrand ? this.propBrand : '',
            brandArr: [],
            newBrand: '',
            newBrandDialog: false,
            newBrandSuccess: true,
            isLoading: false,
        }
    },
    methods: {
        getBrands () {


            if (this.brandArr.length > 0) return

            this.isLoading = true;

            axios.get('/brands')
                .then((response) => {
                    this.brandArr = response.data;
                    console.log(response);
                })
                .catch((errors) => {

                    console.log(errors);
                })
                .finally(() => (this.isLoading = false))

        },
        addBrand () {



            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/brands', {name: this.newBrand})
                .then((response) => {
                    this.newBrand = response.data.success;
                    this.newBrandSuccess = false;
                    console.log(response);
                })
                .catch((errors) => {

                    console.log(errors);
                })

        },
        openBrandDialog () {

            this.brand = '';
            this.newBrandDialog = true;
        },
        cancelNewBrand () {

            this.newBrand = '';
            this.newBrandDialog = false;
            this.brandArr = [];
            this.newBrandSuccess = true;
        },

    },
    watch: {
        brand: function () {

            this.$emit('brand', this.brand);
        },
    }
}
</script>

