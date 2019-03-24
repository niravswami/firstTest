<template>
<v-layout row wrap>
    <v-flex xs12 lg12>

        <v-stepper v-model="e1" class="px-0">
            <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" editable>Select Category</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" editable>Images</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3"  step="3" editable>Amount</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="4" editable>Amount</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1" class="px-0"  >

                <v-flex xs12 lg6 offset-lg3>
                    <v-list two-line subheader>
                        <v-radio-group v-model="radios" :mandatory="true" >
                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="radio-1"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = 'radio-1'">
                                    <v-list-tile-title>Sell</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile @click="">
                                <v-list-tile-action>
                                    <v-radio value="radio-2"></v-radio>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="radios = 'radio-2'">
                                    <v-list-tile-title>Rent</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-radio-group>
                    </v-list>

                        <v-select
                            class="px-2"
                            box
                            :items="propertyCategory"
                            v-model="selectedProperty"
                            label="Category"
                        ></v-select>
                </v-flex>

                <v-btn
                color="primary"
                @click="e1 = 2"
                >
                Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2" class="px-0"  >

                <v-flex xs12 lg6 offset-lg3>
                    <TitleComp></TitleComp>
                </v-flex>

                <v-btn
                color="primary"
                @click="e1 = 3"
                >
                Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3" class="px-0">
                <v-flex xs12 lg4 offset-lg4>
                    <ImagesComp></ImagesComp>
                </v-flex>

                <v-btn
                color="primary"
                @click="e1 = 4"
                >
                Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4" class="px-0">

                <v-flex xs12 lg6 offset-lg3>
                    <AmountComp></AmountComp>
                </v-flex>

                <v-btn
                color="primary"
                @click="e1 = 1"
                >
                Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-flex>
</v-layout>
</template>

<script>
import ImagesComp from '../components/ImagesComponent'
import TitleComp from '../components/TitleComponent'
import AmountComp from '../components/AmountComp'

export default {
    components: {
        ImagesComp,
        TitleComp,
        AmountComp
    },
    created() {

    },
    data() {
        return {
            e1: 0,
            radios: 'radio-1',
            propertyCategory: ['House', 'banglow', 'Farmhouse', 'Hall', 'Party Plot', 'Apartment', 'Shop', 'Plot', 'waadi'],
            selectedProperty: '',
            rentArr: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            amount: '',
        }
    },
    methods: {

    }
}
</script>
