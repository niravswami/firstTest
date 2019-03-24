<template>
   <v-layout  wrap mt-3>
       <v-flex xs12 lg5 class=" mx-auto ">
        <v-card class="pa-4 background-shadow" v-if="editOk">

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
                    v-model="contactNumber"
                    label="Contact Number(s)"
                    box
                    :error-messages="errors.collect('phone')"
                    data-vv-name="phone"
                    required
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
                    required
                    prepend-icon="fas fa-envelope"
                    color="orange darken-2"
                ></v-text-field>
                <v-text-field
                    v-model="website"
                    label="Website"
                    box
                    :error-messages="errors.collect('website')"
                    data-vv-name="website"
                    required
                    prepend-icon="fas fa-desktop"
                    color="orange darken-2"
                ></v-text-field>

                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                    <v-card flat class="">
                        <v-layout  wrap align-center>
                            <v-flex xs2 sm1 md1 lg1>
                                <v-icon >fas fa-city</v-icon>
                            </v-flex>

                            <v-flex xs10 sm11 md11 lg11>
                                <v-card-text class="py-2 ftz-16" >
                                    <span>{{ area ? area.name : '' }}</span>
                                    <v-list-tile-sub-title>{{ city ? city.name : '' }}</v-list-tile-sub-title>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>

                    <v-card flat class="">
                        <v-layout  wrap align-center>
                            <v-flex xs2 sm1 md1 lg1>
                                <v-icon >fas fa-flag</v-icon>
                            </v-flex>

                            <v-flex xs10 sm11 md11 lg11>
                                <v-card-text class="py-2 ftz-16">
                                    <span>{{ state ? state.name : '' }}</span>
                                    <v-list-tile-sub-title>{{ country ? country.name : '' }}</v-list-tile-sub-title>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>

                    <v-checkbox label="Edit Region" color="orange darken-2" v-model="showRegion" ></v-checkbox>

                    <Region
                        v-if="showRegion"
                        @country="editCountry = $event"
                        @state="editState = $event"
                        @city="editCity = $event"
                        @area="editArea = $event"
                    ></Region>

                <!-- ************************************************************** -->
                <!-- ************************************************************** -->

                <v-text-field
                    v-model="pincode"
                    label="Pincode"
                    class="pt-5"
                    box
                    :error-messages="errors.collect('website')"
                    data-vv-name="website"
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

                <v-card-actions>

                    <v-btn @click="submit" color="success" block flat>submit</v-btn>
                    <v-btn @click="cancel" color="error" block flat>cancel</v-btn>
                </v-card-actions>

            </form>

    </v-card>

    <v-card v-else>
        <v-card-title class="pa-5" >
            <span class="mx-auto subheading" >{{ editMessage }}</span>
        </v-card-title>

            <v-card-actions class="py-3">
            <v-btn  flat small   block color="orange darken-1" dark @click="okGetEditedStoreview">ok</v-btn>
        </v-card-actions>
    </v-card>
</v-flex>
   </v-layout>
</template>

<script>
import {eventBus} from '../../app.js'
import Region from '../../components/RegionComponent'

export default {

    components: {
        Region,
    },
    _veeValidate: {
        validator: "new"
    },
    props: ['propData'],
    data () {
        return {
        editOk: true,
        showRegion: false,
        editMessage: '',

        strId: this.propData.store_id ? this.propData.store_id : null,
        name: this.propData.store_name ? this.propData.store_name : null,
        fullAddress: this.propData.store_address ? this.propData.store_address : null,
        email: this.propData.contact_email ? this.propData.contact_email : null,
        contactNumber: this.propData.contact_number ? this.propData.contact_number : null,
        website: this.propData.website ? this.propData.website : null,
        aboutUs: this.propData.about_us ? this.propData.about_us : null,
        country: this.propData.country ? this.propData.country : null,
        state: this.propData.state ? this.propData.state : null,
        city: this.propData.city ? this.propData.city : null,
        area: this.propData.area ? this.propData.area : null,
        pincode: this.propData.pincode ? this.propData.pincode : null,

        editCountry: null,
        editState: null,
        editCity: null,
        editArea: null,

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
                select: {
                    required: "Select field is required"
                },
                phone: {
                },
                website: {

                }
            }
        }
    }},

    mounted() {
        this.$validator.localize("en", this.dictionary);

    },
    methods: {

        submit() {
            console.log(this.strId)
                this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.
                return console.log('not validate in Registration Form Component');

                } else {
                    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    let data = new FormData();

                    data.append('_method', 'PUT');

                    data.append('str_id', this.strId);

                    data.append('store_name', this.name);

                    data.append('store_address', this.fullAddress);

                    data.append('contact_number', this.contactNumber);

                    data.append('email', this.email);

                    data.append('website', this.website);


                    if(this.editCountry != null) {

                        data.append('country_id', this.editCountry);
                    }
                    if(this.editState != null) {

                        data.append('state_id', this.editState);
                    }
                    if(this.editCity != null) {

                        data.append('city_id', this.editCity);
                    }
                    if(this.editArea != null) {

                        data.append('area_id', this.editArea);
                    }


                    data.append('pincode', this.pincode);

                    if(this.aboutUs != null) {

                        data.append('about_us', this.aboutUs);
                    }

                    let submit = {
                        srt_id: this.strId,
                        store_name: this.name,
                        store_address: this.fullAddress,
                        contact_number: this.contactNumber,
                        email: this.email,
                        website: this.website,
                        country_id: this.editCountry,
                        state_id: this.eitiState,
                        city_id: this.editCity,
                        area_id: this.editArea,
                        pincode: this.pincode,
                        about_us: this.aboutUs
                   }

                   console.log(submit);
                   //return;

                    axios.post('/storeview/' + this.strId,  data)
                    .then((res) => {

                        console.log(res)

                        if(res) {

                            this.editOk = false;

                            this.editMessage = res.data.success;
                        }
                    })
                    .catch((errors) => {

                        console.log(errors.response)

                        // this.editOk = false;

                        // this.editMessage = res.data.success;
                    })

                        //this.clear();
                }
            });
        },
        addNumber ()
        {
            console.log(this.contactNumber)
        },

        okGetEditedStoreview() {

            eventBus.$emit('storeviewId', this.strId);
            eventBus.$emit('userForceFire');
            eventBus.$emit('closeEditDialog');
        },
        cancel() {
            eventBus.$emit('closeEditDialog');
        }
    },
    computed: { // opt. 2
        recordLocal () {
            return {...this.propData} ;
        }
    },
}
</script>

<style scoped>

</style>

