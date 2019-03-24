<template>
    <v-flex xs12 lg5 class=" mx-auto ">
        <v-card class="pa-4 background-shadow" >
                <v-card-title primary-title class="headline">
                    Create Storeview
                </v-card-title>
            <form>
                <v-text-field
                    v-model="name"
                    label="Shop / enterpirse / company / Business Name"
                    box
                    :error-messages="errors.collect('name')"
                    v-validate="'required'"
                    data-vv-name="name"
                    required
                    prepend-icon="fas fa-store-alt"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="fullAddress"
                    label="Shop / office / Home Full Address"
                    box
                    :error-messages="errors.collect('Address')"
                    v-validate="'required'"
                    data-vv-name="Address"
                    required
                    prepend-icon="fas fa-map-marker"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="unique_key"
                    label="Unique Name"
                    box
                    :error-messages="errors.collect('unique_key')"
                    v-validate="{required: true, regex: /^[a-zA-Z0-9_]+$/}"
                    data-vv-name="unique_key"
                    required
                    hint="this name must be unique, so any one can find your storeview by this Name"
                    prepend-icon="fas fa-signature"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="contactNumber"
                    label="Contact Number(s)"
                    box
                    :error-messages="errors.collect('phone')"
                    data-vv-name="phone"
                    
                    prepend-icon="fas fa-phone"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    box
                    :error-messages="errors.collect('email')"
                    v-validate="{email: true}"
                    data-vv-name="email"
                    
                    prepend-icon="fas fa-envelope"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="website"
                    label="Website"
                    box
                    :error-messages="errors.collect('website')"
                    data-vv-name="website"
                    
                    prepend-icon="fas fa-desktop"
                    color="orange darken-2"
                ></v-text-field>

                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                    <Region
                        @country="country = $event"
                        @state="state = $event"
                        @city="city = $event"
                        @area="area = $event"
                    ></Region>

                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                <v-text-field
                    v-model="pincode"
                    label="Pincode"
                    class="pt-5"
                    box
                    :error-messages="errors.collect('pincode')"
                    data-vv-name="pincode"
                    v-validate="'required'"
                    required
                    prepend-icon="fas fa-map-pin"
                    color="orange darken-2"
                ></v-text-field>

                <v-textarea
                    box
                    label="About Us"
                    v-model="aboutUs"
                    prepend-icon="fas fa-paragraph"
                    color="orange darken-2"
                ></v-textarea>

                <v-checkbox
                    v-model="checkbox"
                    value="1"
                    label="Option"
                    :error-messages="errors.collect('checkbox')"
                    v-validate="'required'"
                    data-vv-name="checkbox"
                    type="checkbox"
                    required
                    color="orange darken-2"
                ></v-checkbox>

                <v-card-actions>
                    <v-btn @click="submit" color="success" block flat>submit</v-btn>
                    <v-btn @click="cancel('home')" color="error" block flat>cancel</v-btn>
                </v-card-actions>
            </form>

    </v-card>
</v-flex>
</template>

<script>
import { eventBus } from '../../app.js'
import Region from '../RegionComponent'

export default {
    components: {
        Region,
    },
    _veeValidate: {
        validator: "new"
    },

    created() {

        eventBus.$on('errorArrPassReply', (data) => {

            this.errorArrPass = data;
        });
    },

    data: () => ({

        errorArrPass: false,

        user: null,

        name: "",
        fullAddress: "",
        unique_key: "",
        email: "",
        contactNumber: "",
        website: "",
        aboutUs: "",
        country: null,
        state: null,
        city: null,
        area: null,
        pincode: '',
        checkbox: '1',
        dictionary: {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {
                name: {
                    required: () => "Name Field Can Not Be Empty",
                    max: "The name field may not be greater than 10 characters"
                    // custom messages
                },
                select: {
                    required: "Select field is required"
                },
                phone: {
                },
                website: {

                },
                unique_key: {
                    required: () => "Unique Name Field Can Not Be Empty",
                    regex: "Space and hyphen '-' not allowed"
                },
                pincode: {
                    required: () => "Pincode Field Can Not Be Empty",
                    regex: "Space and hyphen '-' not allowed"
                }
            }
        }
    }),

    beforeMount() {

        if(!localStorage.getItem('token')) {

            this.$router.push('/');


            eventBus.$emit('signinDialog', true);
        }
    },
    mounted() {

        this.$validator.localize("en", this.dictionary);
    },

    methods: {
        async submit() {
            await this.regionCheck();
            await this.chechForTheErrors();

            if(!this.errorArrPass) {

                // this.errorDialog = true;

                return;
            }

                this.$validator.validateAll().then(result => {


                if (!result) {
                // do stuff if not valid.

                
                if(this.name.replace(/\s+/g,' ').trim() == '') {

                    eventBus.$emit('errorArr', 'Shop / enterpirse / company / Business Name Field Can Not Be Empty.');

                }

                return console.log('not validate in Registration Form Component');

                } else {

                    if(this.getUserInfo) {

                        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                        axios.post('/storeview', {
                            store_name: this.name,
                            store_address: this.fullAddress,
                            contact_number: this.contactNumber,
                            unique_key: this.unique_key,
                            email: this.email,
                            website: this.website,
                            country_id: this.country,
                            state_id: this.state,
                            city_id: this.city,
                            area_id: this.area,
                            pincode: this.pincode,
                            about_us: this.aboutUs
                       })
                        .then((res) => {

                            console.log(res)

                            if(res) {

                                eventBus.$emit('againFireUser');

                                let str_id = res.data.id;

                                this.cancel();

                                this.$router.replace({name: 'storeview', params: {id: str_id}, props: {id: str_id}});

                            }
                        })
                        .catch((errors) => {

                            console.log(errors.response)
                        })
                    }


                        //this.clear();
                }
            });
        },
        addNumber ()
        {
            console.log(this.contactNumber)
        },
        cancel(go) {
            this.name = '';
            this.fullAddress = '';
            this.contactNumber = '';
            this.email = '';
            this.website = '';
            this.country = '';
            this.state = '';
            this.city = '';
            this.area = '';
            this.pincode = '';
            this.aboutUs = '';
            this.$validator.reset();

            if(go == 'home') {

                this.$router.replace('/');

            }
        },
        regionCheck() {

            if(this.country == null) {

                eventBus.$emit('errorArr', 'Country Field Can Not Be Empty.');

            }
            if(this.state == null) {

                eventBus.$emit('errorArr', 'State Field Can Not Be Empty.');

            }
            if(this.city == null) {

                eventBus.$emit('errorArr', 'City Field Can Not Be Empty.');

            }
            if(this.area == null) {

                eventBus.$emit('errorArr', 'Area Field Can Not Be Empty.');

            }

        },
        chechForTheErrors() {

            eventBus.$emit('errorArrPassCheck');
            return;
        },

    },
    computed: {

        getUserInfo() {

            return this.user = this.$store.getters.getUserInfo;

        },
        getNotUserInfo() {

            return this.user = this.$store.getters.getNotUserInfo;

        },
    }
};
</script>


<style scoped>

</style>
