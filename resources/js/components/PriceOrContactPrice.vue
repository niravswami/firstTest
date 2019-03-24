<template>
    <v-flex xs12 lg12>
            <v-card flat class="px-3">
                    <v-card-text class="subheading font-weight-medium">
                          Amount Block
                     </v-card-text>
                    <v-list two-line subheader>
                        <v-radio-group v-model="radios" :mandatory="true" row >
                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="1" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '1'">
                                    <v-list-tile-title>Price</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="2" color="orange lighten-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = '2'">
                                    <v-list-tile-title>Contact For Price Details</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>
                </v-card>
        </v-flex>
</template>

<script>
import { eventBus } from '../app.js'

export default {
    props:['propShowPriceOrNot'],
    data() {
        return {
             radios: this.propShowPriceOrNot ? this.propShowPriceOrNot : '1',
        }
    },
    watch:{
        radios: function() {
            eventBus.$emit('priceOrcontactPrice', this.radios)
            this.$emit('radio', this.radios)
        }
    }
}
</script>
