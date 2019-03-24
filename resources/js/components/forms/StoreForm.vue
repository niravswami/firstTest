<template>
    <v-layout row wrap ma-0>
        <v-flex xs12 >
            <v-card class="pa-4">
                <h2>Create Your Store</h2>
                <form>
                    <v-text-field
                        v-model="name"
                        label="Shop / enterpirse / company / Business Name"
                        :error-messages="errors.collect('name')"
                        v-validate="'required'"
                        data-vv-name="name"
                        required
                    ></v-text-field>

                   <!--  <v-text-field
                        v-model="address"
                        label="Shop / office / Home Address"
                        :error-messages="errors.collect('Address')"
                        v-validate="'required'"
                        data-vv-name="Address"
                        required
                    ></v-text-field> -->



                     <v-layout row wrap px-3>
                        <v-flex xs3 sm2 md2 lg2>
                            <v-text-field
                                v-validate="{ required: true,  regex: /^(\+\d{1-3})|(\d{1,4})$/ }"
                                v-model="mobile_country_code"
                                :error-messages="errors.collect('Code')"
                                label="Code"
                                data-vv-name="Code"
                                required
                            ></v-text-field>
                        </v-flex>

                        <!-- <v-flex xs9 sm6 offset-sm1 md6 offset-md1 lg6 offset-lg1>
                            <v-text-field
                                v-validate="{ required: true, numeric: true,min: 10 , max: 10 , regex: /^(\+\d{1,3}[- ]?)?\d{10}$/ }"
                                v-model="mobile"
                                :counter="10"
                                :error-messages="errors.collect('mobile')"
                                label="Mobile"
                                data-vv-name="mobile"
                                required
                            ></v-text-field>
                        </v-flex> -->
                        <v-flex xs9 sm6 offset-sm1 md6 offset-md1 lg6 offset-lg1>
                            <v-text-field
                                v-validate="{ required: true , regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }"
                                v-model="mobile"
                                :error-messages="errors.collect('contact')"
                                label="Mobile"
                                data-vv-name="contact"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>



                   <!--  <v-layout row wrap px-3>
                        <v-flex xs12 lg6 px-1>
                            <v-select
                                :items="countries"
                                v-model="country"
                                label="Country"
                                :error-messages="errors.collect('country')"
                                v-validate="'required'"
                                data-vv-name="country"
                                required
                            ></v-select>
                        </v-flex>

                        <v-flex xs12 lg6 px-1>
                            <v-text-field
                                v-model="state"
                                label="State"
                                :error-messages="errors.collect('State')"
                                v-validate="'required'"
                                data-vv-name="State"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout> -->

                   <!--  <v-layout row wrap px-3 justify-space-around>
                        <v-flex xs12 lg6 px-1>
                            <v-text-field
                                v-model="city"
                                label="City"
                                :error-messages="errors.collect('City')"
                                v-validate="'required'"
                                data-vv-name="City"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 lg6 px-1>
                            <v-text-field
                                v-model="area"
                                label="Area"
                                :error-messages="errors.collect('Area')"
                                v-validate="'required'"
                                data-vv-name="Area"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout> -->


                        <!-- <v-flex xs12 lg6>
                            <v-text-field
                                v-model="pincode"
                                    label="Pincode"
                                    :error-messages="errors.collect('pincode')"
                                    data-vv-name="pincode"
                                    v-validate="'required'"
                                    required
                            ></v-text-field>
                        </v-flex> -->

                        <v-layout column>
                            <v-flex xs12>
                                <v-checkbox
                                    label="Have an Email"
                                    v-model="emailCheckbox"
                                    hide-details
                                    class="shrink mr-2"
                                ></v-checkbox>

                                <v-text-field
                                v-if="emailCheckbox"
                                    v-model="contact_email"
                                    label="Contact Email"
                                    :error-messages="errors.collect('contact_email')"
                                    data-vv-name="contact_email"
                                    v-validate="'required|email'"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout column>
                            <v-flex xs12>
                                <v-checkbox
                                    label="Have a Website"
                                    v-model="websiteCheckbox"
                                    hide-details
                                    class="shrink mr-2"
                                ></v-checkbox>

                                <v-text-field
                                v-if="websiteCheckbox"
                                    v-model="website"
                                    label="Website"
                                    :error-messages="errors.collect('website')"
                                    data-vv-name="website"
                                    v-validate="'required'"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                    <v-checkbox
                        v-model="checkbox"
                        value="1"
                        label="Terms & conditions"
                        :error-messages="errors.collect('checkbox')"
                        v-validate="'required'"
                        data-vv-name="checkbox"
                        type="checkbox"
                        required
                    ></v-checkbox>

                    <v-btn flat @click="submit">submit</v-btn>
                    <v-btn flat @click="clear">clear</v-btn>
                </form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from './../../app.js'

export default {
    _veeValidate: {
        validator: "new"
    },

    data: () => ({
        name: '',
        email: '',
        address: '',
        area:'',
        city:'',
        state:'',
        country: '',
        pincode: '',
        countries: ["Item 1", "Item 2", "Item 3", "Item 4"],
        mobile_country_code: '+91',
        mobile: '',
        checkbox: null,
        emailCheckbox: false,
        websiteCheckbox: false,
        contact_email: '',
        website: '',
        dictionary: {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {
                name: {
                    required: () => "Name can not be empty",
                    max: "The name field may not be greater than 10 characters"
                    // custom messages
                },
                country: {
                    required: "Country field is required"
                },
                contact_email: {

                }
            }
        }
    }),

    mounted() {
        this.$validator.localize("en", this.dictionary);
    },

    methods: {
        submit() {
                this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.
                return console.log('not validate in Registration Form Component');

                } else {
                    console.log   (
                        this.email ,
                        this.password )
                        this.clear();
                }
            });
        },
        clear() {
            this.name = "";
            this.email = "";
           // this.select = null;
            //this.checkbox = null;
            this.$validator.reset();
            eventBus.$emit('storeForm', false);
        }
    }
};
</script>

<style scoped>
*{
    font-size: 14px;
}
</style>
