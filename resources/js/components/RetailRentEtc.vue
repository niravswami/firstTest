<template>
    <v-flex xs12 lg12>
        <v-card flat class="pa-3">
            <!-- <v-card-text class="subheading font-weight-medium">

            </v-card-text> -->
            <v-list two-line subheader>
                <v-radio-group v-model="radios" :mandatory="true" row>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-radio value="1" color="orange lighten-1"></v-radio>
                        </v-list-tile-action>

                        <v-list-tile-content @click.prevent="radios = '1'">
                            <v-list-tile-title>Retail</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-radio value="2" color="orange lighten-1"></v-radio>
                        </v-list-tile-action>

                        <v-list-tile-content @click.prevent="radios = '2'">
                            <v-list-tile-title>Rent a Product</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-radio value="3" color="orange lighten-1"></v-radio>
                        </v-list-tile-action>

                        <v-list-tile-content @click.prevent="radios = '3'">
                            <v-list-tile-title>wholesale</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-radio-group>
            </v-list>

            <!-- <v-select box :items="propertyCategory" v-model="selectedProperty" size="4" label="Category" color="orange darken-2"></v-select> -->

        </v-card>
    </v-flex>
</template>

<script>
import { eventBus } from '../app.js'

export default {
    components: {
    },
    created() {
        eventBus.$on('retailRent', (data) => {
            if(data) {

                this.radios = data.toString();
            }
        })
    },
    props:['propWantto'],
    data() {
        return {
            radios: '1',
        }
    },
    methods: {

    },
    watch: {

        radios() {
            eventBus.$emit('discount', this.radios);
            this.$emit('radios', this.radios);
             console.log(this.radios)
        }
    }
}
</script>
