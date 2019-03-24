<template>
    <v-card>
        <v-card-title>
            <span class="headline">Registration</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>
                        <v-flex xs12>
                            <form>

                                <!-- ===========   Name   ================ -->

                                <v-text-field
                                    v-model="firstName"
                                    box
                                    label="First Name"
                                    :error-messages="errors.collect('firstName')"
                                    v-validate="'required|max:255'"
                                    data-vv-name="firstName"
                                    required
                                    color="orange darken-2"
                                ></v-text-field>

                                <v-text-field
                                    v-model="lastName"
                                    box
                                    label="Last Name"
                                    :error-messages="errors.collect('lastName')"
                                    v-validate="'required|max:255'"
                                    data-vv-name="lastName"
                                    required
                                    color="orange darken-2"
                                ></v-text-field>

                                <!-- ===========   Gender   ================ -->

                                <v-radio-group
                                    v-model="gender"
                                    row
                                    :error-messages="errors.collect('gender')"
                                    v-validate="'required'"
                                    data-vv-name="gender"
                                    required>
                                    <v-radio label="Male" value="1" color="orange darken-2"></v-radio>
                                    <v-radio label="Female" value="2" color="orange darken-2"></v-radio>
                                    <v-radio label="Other" value="3" color="orange darken-2"></v-radio>
                                </v-radio-group>

                                <!-- ===========   Email   ================ -->

                                <v-text-field
                                    v-model="email"
                                    box
                                    label="E-mail"
                                    :error-messages="errors.collect('email')"
                                    v-validate="'required|email'"
                                    data-vv-name="email"
                                    required
                                    color="orange darken-2"
                                ></v-text-field>

                                <!-- ===========   Date of birth   ================ -->

                                <v-flex xs12 sm6 md6 lg12>
                                    <v-dialog
                                        ref="birthDialog"
                                        v-model="birthModal"
                                        :return-value.sync="birthDate"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px"
                                    >
                                        <v-text-field
                                            slot="activator"
                                            v-model="birthDate"
                                            label="Date of Birth"
                                            readonly
                                            box
                                            :error-messages="errors.collect('birthday')"
                                            v-validate="'required'"
                                            data-vv-name="birthday"

                                            hint="MM/DD/YYYY format"
                                            persistent-hint
                                            color="orange darken-2"
                                        ></v-text-field>
                                        <v-date-picker color="orange darken-2" v-model="birthDate" scrollable >
                                            <v-spacer></v-spacer>
                                            <v-btn flat color="red darken-2" @click="birthModal = false">Cancel</v-btn>
                                            <v-btn flat color="orange darken-2" @click="$refs.birthDialog.save(birthDate)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-flex>

                                <!-- ===========   Mobile   ================ -->

                                <v-layout row wrap>
                                    <v-flex xs3 lg2>
                                        <v-text-field
                                            v-validate="{  regex: /^(\+\d{1-3})|(\d{1,4})$/ }"
                                            box
                                            v-model="mobile_country_code"
                                            :error-messages="errors.collect('Code')"
                                            label="Code"
                                            data-vv-name="Code"
                                            color="orange darken-2"

                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex xs9 lg6 offset-lg1>
                                        <v-text-field
                                            v-validate="{  numeric: true,min: 10 , max: 10 , regex: /^(\+\d{1,3}[- ]?)?\d{10}$/ }"
                                            box
                                            v-model="mobile"
                                            :counter="10"
                                            :error-messages="errors.collect('mobile')"
                                            label="Mobile"
                                            data-vv-name="mobile"
                                            color="orange darken-2"

                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- ===========   Password   ================ -->

                                <v-text-field
                                    v-model="password"
                                    name="password"
                                    box
                                    label="Enter your password"
                                    :counter="6"
                                    :error-messages="errors.collect('password')"
                                    v-validate="{required: true, regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,}"
                                    data-vv-name="password"
                                    data-vv-as="Password"
                                    :type="'password'"
                                     ref="password"
                                     color="orange darken-2"
                                ></v-text-field>

                                <v-text-field
                                    v-model="c_password"
                                    label="Confirm password"
                                    box
                                    :counter="6"
                                    v-validate="{ confirmed:'password'}"
                                    :error-messages="errors.collect('confirm_password')"
                                    data-vv-name="confirm_password"
                                    data-vv-as="Confirm Password"
                                    :type="'password'"
                                    color="orange darken-2"

                                ></v-text-field>
                                <!-- <v-layout row wrap>
                                    <v-flex xs3 lg2>
                                        <v-text-field
                                            v-validate="{ required: true,  regex: /^(\+\d{1-3})|(\d{1,4})$/ }"
                                            v-model="mobile_country_code"
                                            :error-messages="errors.collect('Code')"
                                            label="Code"
                                            data-vv-name="Code"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex xs9 lg6>
                                        <v-text-field
                                            v-validate="{ required: true, numeric: true,min: 10 , max: 10 , regex: /^(\+\d{1,3}[- ]?)?\d{10}$/ }"
                                            v-model="mobile"
                                            :counter="10"
                                            :error-messages="errors.collect('mobile')"
                                            label="Mobile"
                                            data-vv-name="mobile"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout> -->

                                <!-- <v-layout row wrap>
                                        <v-flex xs12 lg6>
                                            <v-combobox
                                        class="py-3"
                                        :items='countryArr'
                                        v-model="country"

                                        flat
                                        hide-no-data
                                        hide-details
                                        item-text="name"
                                        item-value="id"
                                        label="Country"
                                        @focus="countryFn"

                                        return-object
                                    >
                                        <template slot="no-data">
                                            <v-list>
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                            </v-list>
                                        </template>
                                    </v-combobox>
                                        </v-flex>
                                        <v-flex xs12 lg6>
                                                 <v-combobox
                                        class="py-3"
                                        :items="stateArr"
                                        v-model="state"

                                        flat
                                        hide-no-data
                                        hide-details
                                        item-text="name"
                                        item-value="id"
                                        label="State"

                                        return-object
                                    >
                                        <template slot="no-data">
                                            <v-list>
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                            </v-list>
                                        </template>
                                    </v-combobox>
                                        </v-flex>
                                </v-layout>

                                    <v-layout row wrap>
                                        <v-flex xs12 lg6>
                                            <v-combobox
                                        class="py-3"
                                        :items="cityArr"
                                        v-model="city"

                                        flat
                                        hide-no-data
                                        hide-details
                                        item-text="name"
                                        item-value="id"
                                        label="City"

                                        return-object
                                    >
                                        <template slot="no-data">
                                            <v-list>
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                            </v-list>
                                        </template>
                                    </v-combobox>
                                        </v-flex>
                                        <v-flex xs12 lg6>
                                                 <v-combobox
                                        class="py-3"
                                        :items="areaArr"
                                        v-model="area"

                                        flat
                                        hide-no-data
                                        hide-details
                                        item-text="name"
                                        item-value="id"
                                        label="Area"

                                        return-object
                                    >
                                        <template slot="no-data">
                                            <v-list>
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                            </v-list>
                                        </template>
                                    </v-combobox>
                                        </v-flex>
                                </v-layout> -->


                                <!-- <v-checkbox v-model="checkbox" value="1" label="Option" :error-messages="errors.collect('checkbox')"
                                    v-validate="'required'" data-vv-name="checkbox" type="checkbox" required></v-checkbox> -->

                            </form>
                        </v-flex>


                    <div  class="subheading">Allready have an Account..!!! <span class="forSpanClick" @click="openLoginForm">Click here</span> to Login </div>
                </v-layout>
            </v-container>
        </v-card-text>
        <!-- ===============    For Email or Password Required Message   =================== -->

            <v-card-text class="pb-0" v-if="alertError != null">
                <v-flex xs12>
                    <v-flex xs12 v-if="alertError != null && alertError.firstName">
                        <div v-for="(err, i) in alertError.firstName" :key="i">
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>
                    <v-flex xs12 v-if="alertError != null && alertError.lastName">
                        <div v-for="(err, i) in alertError.lastName" :key="i">
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>

                    <v-flex xs12 v-if="alertError != null && alertError.email">
                        <div v-for="(err, i) in alertError.email" :key="i" >
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>

                    <v-flex xs12 v-if="alertError != null && alertError.password">
                        <div v-for="(err, i) in alertError.password" :key="i" >
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>

                    <v-flex xs12 v-if="alertError != null && alertError.confirm_password">
                        <div v-for="(err, i) in alertError.confirm_password" :key="i" >
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>
                </v-flex>
            </v-card-text>
        <v-card-actions class="pb-3">
            <v-btn color="blue darken-1" small block flat @click.native.prevent="submit">submit</v-btn>
            <v-btn color="red darken-1" small block flat @click.native="closeSigninDialog">Cancel</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'
import { eventBus } from './../../../app.js'
import RegionComponent from '../../RegionComponent'
export default {
    _veeValidate: {
        validator: "new"
    },
    components: {
        RegionComponent,
    },
    data: () => ({

        alertError: null,

        loading: false,


        firstName: '',
        lastName: '',
        gender: '1',
        email: '',
        birthModal : false,
        // birthDate: new Date().toISOString().substr(0, 10),
        birthDate: null,
        mobile_country_code: '+91',
        mobile: null,
        password: '',
        c_password: '',
        checkbox: true,
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
                password: {
                    required: () => "Password can not be empty",
                    regex :   'Password Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters'
                },
                confirm_password: {
                    required: () => " password field can not be empty",
                }
            }
        }
    }),

    mounted() {
        this.$validator.localize('en', this.dictionary);
    },

    methods: {
        submit() {

           this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.
                return console.log('not validate in Registration Form Component');

                } else {

                    eventBus.$emit('spinner', true);

                    this.alertError = null;

                    let form = new FormData();

                    form.append('firstName', this.firstName);

                    form.append('lastName', this.lastName);

                    form.append('gender', this.gender);

                    form.append('email', this.email);

                    form.append('password', this.password);

                    form.append('confirm_password', this.c_password);

                    if(this.birthDate != null) {

                        form.append('date_of_birth', this.birthDate);
                    }

                    if(this.mobile != null) {

                        var mobileNumber = this.mobile_country_code + this.mobile;

                        form.append('mobile_number', mobileNumber);
                    }

                    axios.post('/register', form )
                        .then((response) => {

                            console.log(response);
                            console.log(response.data.access_token);


                        if (response.data) {

                            let accessToken = response.data.access_token;

                            window.localStorage.setItem('token', response.data.access_token);

                            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                            this.fireUserInfo();

                            this.closeSigninDialog();

                            eventBus.$emit('spinner', false);
                        }

                    })
                    .catch((err) => {
                        console.log(err.response);

                        eventBus.$emit('spinner', false);

                        if(err.response.data.error) {

                            this.alertError = err.response.data.error;

                        }
                    });

                }
            });

        },
        clear() {
            this.firstName = '';
            this.lastName = '';
            this.mobile = '';
            this.email = '';
            this.password = '';
            this.c_password = '';
            // this.birthDate = new Date().toISOString().substr(0, 10);
            this.birthDate = null;
            this.gender = '';
            this.$validator.reset();

        },
        closeSigninDialog() {
            this.clear();
            eventBus.$emit('signinDialog', false);
            eventBus.$emit('ifLogin', true);
        },
        openLoginForm() {
            this.clear();
            eventBus.$emit('ifLogin', true);
        },
        fireUserInfo () {

            return this.$store.dispatch('disUserInfo');
        },
    },
    watch: {
        birthDate() {
            console.log(this.birthDate)
        }
    }
};
</script>

