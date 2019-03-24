<template>
    <v-flex xs12 lg5 class=" mx-auto ">
        <v-card class="pa-4 background-shadow" >
            <v-card-title primary-title class="headline">
                 User Profile
            </v-card-title>
            <template>
                <form>
                    <!--
                    ******************************************
                    **    USER'S NAME
                    **
                    ***-->

                    <v-checkbox
                        v-model="newName"
                        label="Edit Name"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                    <v-card flat class="px-2">
                        <v-layout row wrap justify-space-around>
                            <v-flex xs12 lg6 class="px-1">
                                <v-text-field
                                    v-model="firstName"
                                    box
                                    label="First Name"
                                    :error-messages="errors.collect('firstName')"
                                    v-validate="'required'"
                                    data-vv-name="firstName"
                                    required
                                    color="orange darken-2"
                                    :disabled="newName != true"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 lg6 class="px-1">
                                <v-text-field
                                    v-model="lastName"
                                    box
                                    label="Last Name"
                                    :error-messages="errors.collect('lastName')"
                                    v-validate="'required'"
                                    data-vv-name="lastName"
                                    required
                                    color="orange darken-2"
                                    :disabled="newName != true"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <div  class="mb-3"  v-show="newName == true">
                            <v-btn outline small color="success" dark @click="saveName">save</v-btn>
                            <hr>
                        </div>
                    </v-card>



                    <!--
                    ******************************************
                    **    GENDER
                    **
                    ***-->

                    <v-checkbox
                        v-model="newGender"
                        label="Change Gender"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                    <v-radio-group v-model="gender" row  :disabled="newGender != true" :mandatory="true">
                        <v-radio label="Male" value="1" color="orange darken-2"></v-radio>
                        <v-radio label="Female" value="2" color="orange darken-2"></v-radio>
                        <v-radio label="Other" value="3" color="orange darken-2"></v-radio>
                    </v-radio-group>

                    <div  class="mx-3 ml-3"  v-show="newGender == true">
                        <v-btn outline small color="success" dark @click="saveGender">save</v-btn>
                        <hr>
                    </div>

                    <!--
                    ******************************************
                    **    DATE OF BIRTH
                    **
                    ***-->

                    <v-checkbox
                        v-model="newBirthDate"
                        label="Edit Date of Birth"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                        <v-flex xs12 sm6 md6>
                            <v-dialog
                                ref="birthDialog"
                                v-model="birthModal"
                                :return-value.sync="birthDate"
                                persistent
                                lazy
                                full-width
                                width="290px"
                                :disabled="newBirthDate != true"
                            >
                                <v-text-field
                                slot="activator"
                                v-model="birthDate"
                                label="Date"
                                prepend-icon="event"
                                readonly
                                box
                                :disabled="newBirthDate != true"
                                ></v-text-field>
                                <v-date-picker v-model="birthDate" scrollable >
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="birthModal = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.birthDialog.save(birthDate)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-flex>
                            <div  class="mx-3 ml-3"  v-show="newBirthDate == true">
                                <v-btn outline small color="success" dark>save</v-btn>
                                <hr>
                            </div>

                    <!--
                    ******************************************
                    **    EMAIL
                    **
                    ***-->

                    <v-checkbox
                        v-model="newEmail"
                        label="Change E-mail Address"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                    <v-text-field
                        v-model="email"
                        box
                        label="E-mail"
                        :error-messages="errors.collect('email')"
                        v-validate="'required|email'"
                        data-vv-name="email"
                        required
                        prepend-icon="fas fa-envelope"
                        color="orange darken-2"
                        :disabled="newEmail != true"
                    ></v-text-field>

                        <div  class="mx-3 ml-3"  v-show="newEmail == true">
                            <v-btn outline small color="success" dark @click.native="saveEmail">save</v-btn>
                            <hr>
                        </div>
                    <!--
                    ******************************************
                    **    CONTACT NUMBER
                    **
                    ***-->

                    <v-checkbox
                        v-model="newMobile"
                        label="Change Mobile Number"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                    <v-card flat class="px-4">
                        <v-layout row wrap>
                            <v-flex xs3 lg2>
                                <v-text-field
                                    v-validate="{ required: true,  regex: /^(\+\d{1-3})|(\d{1,4})$/ }"
                                    v-model="mobile_country_code"
                                    :error-messages="errors.collect('Code')"
                                    label="Code"
                                    data-vv-name="Code"
                                    required
                                    :disabled="newMobile != true"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs9 lg6 offset-lg1>
                                <v-text-field
                                    v-validate="{ required: true, numeric: true,min: 10 , max: 10 , regex: /^(\+\d{1,3}[- ]?)?\d{10}$/ }"
                                    v-model="mobile"
                                    :counter="10"
                                    :error-messages="errors.collect('mobile')"
                                    label="Mobile"
                                    data-vv-name="mobile"
                                    required
                                    :disabled="newMobile != true"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <div  class="mb-3"  v-show="newMobile == true">
                            <v-btn outline small color="success" dark>save</v-btn>
                            <hr>
                        </div>
                    </v-card>

                    <!--
                    ******************************************
                    **    CHANGE PAASWORD
                    **
                    ***-->
                    <v-checkbox
                        v-model="newPassword"
                        label="Change Password"
                        type="checkbox"
                        required
                        color="orange darken-2"
                    ></v-checkbox>

                    <v-card flat class="px-4">
                        <v-layout row wrap justify-space-around>
                            <v-flex xs12 lg5>
                                <v-text-field
                                    v-model="password"
                                    name="password"
                                    label="Enter New Password"
                                    box
                                    :error-messages="errors.collect('password')"
                                    v-validate="{required: true, regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,}"
                                    data-vv-name="password"
                                    data-vv-as="Password"
                                    :type="'password'"
                                    ref="password"
                                    :disabled="newPassword != true"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 lg5>
                                <v-text-field
                                    v-model="c_password"
                                    label="Confirm password"
                                    box
                                    v-validate="{ confirmed:'password'}"
                                    :error-messages="errors.collect('confirm_password')"
                                    data-vv-name="confirm_password"
                                    data-vv-as="Confirm Password"
                                    :type="'password'"
                                    :disabled="newPassword != true"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <div  class="mb-3"  v-show="newPassword == true">
                            <v-btn outline small color="success" dark>save</v-btn>
                            <hr>
                        </div>
                    </v-card>
                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                    <!-- <Region
                        @country="country = $event"
                        @state="state = $event"
                        @city="city = $event"
                        @area="area = $event"
                    ></Region> -->

                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                </form>
            </template>
        </v-card>
    </v-flex>
</template>

<script>
import { eventBus } from '../../../app.js'
import Region from '../../RegionComponent'

export default {
    components: {
        Region
    },
    _veeValidate: {
        validator: "new"
    },

        beforeMount() {

        if(!localStorage.getItem('token')) {

            this.$router.push('/');

            eventBus.$emit('signinDialog', true);
        }
    },

    data: () => ({
        /*------------------------
         * NAME SECTION
         *----------------------
         */
        firstName:  "",
        lastName: "",
        newName: false,

        /*------------------------
         * EMAIL SECTION
         *----------------------
         *
         */
        email: "",
        newEmail: false,

        /*------------------------
         * GENDER SECTION
         *----------------------
         *
         */
        gender: null,
        newGender: false,

        /*------------------------
         * BIRTH DATE SECTION
         *----------------------
         *
         */

        birthDate:  new Date().toISOString().substr(0, 10),
        //birthDate:  new Date().toJSON(),
        birthModal: false,
        newBirthDate: false,

        /*------------------------
         * MOBILE NUMBER SECTION
         *----------------------
         *
         */

        mobile_country_code: '+91',
        mobile: '',
        newMobile: false,

        /*------------------------
         * PASSWORD SECTION
         *----------------------
         *
         */
        password: '',
        c_password: '',
        newPassword: false ,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: null,
        dictionary: {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {
                firstName: {
                    required: () => "Name can not be empty",
                    max: "The name field may not be greater than 10 characters"
                    // custom messages
                },
                select: {
                    required: "Select field is required"
                }
            }
        }
    }),

    mounted() {
        this.$validator.localize("en", this.dictionary);

        this.getUser();

    },

    methods: {
        async getUser() {

            if(this.getUserInfo) {

                await this.getUserInfo;

                let userID = this.getUserInfo.id;

                const token = localStorage.getItem('token');

                if (token)
                {

                    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    axios.get('/users/'+userID)
                    .then((res) => {

                        console.log(res);

                        if(res) {

                            this.firstName = res.data.first_name;

                            this.lastName = res.data.last_name;

                            this.birthDate = res.data.date_of_birth;

                            this.mobile = res.data.mobile_number;

                            this.email = res.data.email;

                            this.gender = res.data.gender.toString();
                        }

                    })

                    .catch((errors) => {

                        console.log(errors);
                    })
                } else {

                    return;
                }
            }


        },
        saveEmail ()
        {
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    let id = this.getUserInfo.id

                    axios.put('/users/'+ id, {
                        ifNum : 3,
                        email: this.email,


                   })
                    .then((res) => {

                        console.log(res)
                        if (res) {

                            this.getUser(); //allison.fisher@example.org

                            this.newEmail = false;
                        }
                    })
                    .catch((errors) => {

                        console.log(errors)
                    });

        },
        saveName() {

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    let id = this.getUserInfo.id

                    axios.put('/users/'+ id, {
                        ifNum : 1,
                        firstName: this.firstName,
                        lastName: this.lastName,


                   })
                    .then((res) => {

                        console.log(res)
                        if (res) {

                            this.fireUserInfo();

                            this.newName = false;
                        }
                    })
                    .catch((errors) => {

                        console.log(errors)
                    })


            //     this.$validator.validateAll().then(result => {
            //     if (!result) {
            //     // do stuff if not valid.
            //     return console.log('not validate in Registration Form Component');

            //     } else {

            //         window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

            //         let id = this.getUserInfo.id

            //         axios.put('/users/'+ id, {
            //             firstName: this.firstName,

            //        })
            //         .then((res) => {

            //             console.log(res)
            //             if(res) {
            //                 this.$store.dispatch('disUserInfo')
            //             }

            //         })
            //         .catch((errors) => {

            //             console.log(errors)
            //         })

            //     }
            // });
        },
        saveGender ()
        {
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    let id = this.getUserInfo.id

                    axios.put('/users/'+ id, {
                        ifNum : 2,
                        gender: this.gender,


                   })
                    .then((res) => {

                        console.log(res)
                        if (res) {

                            this.fireUserInfo();

                            this.newGender = false;
                        }
                    })
                    .catch((errors) => {

                        console.log(errors)
                    });
        },
        clear() {
            this.name = "";
            this.email = "";
            this.select = null;
            this.checkbox = null;
            this.validator.reset();
        },
        fireUserInfo () {

            return this.$store.dispatch('disUserInfo');
        },
    },
    computed: {


        getUserInfo ()
        {
            return this.$store.getters.getUserInfo;
        }
    },
    watch: {
        birthDate() {
            console.log(this.birthDate);
        }
    }
};
</script>

<style scoped>

</style>
