<template>
        <v-flex xs12 lg12 >


            <v-card class="px-3" flat>

            <v-layout  wrap justify-space-between>
                <v-flex xs12 lg6 class="">


                        <v-autocomplete

                            class="px-1 py-1"
                            box
                            :items='countryArr'
                            v-model="country"
                            :error-messages="errors.collect('country')"
                            v-validate="{ required: true }"
                            data-vv-name="country"
                            data-vv-as="Country"
                            flat hide-no-data
                            hide-details
                            item-text="name"
                            item-value="id"
                            label="Country"
                            @focus="countryFn"
                            return-object
                            color="orange darken-2">
                        </v-autocomplete>

                </v-flex>

                <v-flex xs12 lg6>
                    <v-autocomplete class="px-1 py-1"
                        box
                        :items="stateArr"
                        v-model="state"
                        :error-messages="errors.collect('state')"
                        v-validate="{ required: true }"
                        data-vv-name="state"
                        data-vv-as="State"
                        flat
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="State"
                        return-object
                        :disabled="!country"
                        @focus="getState"
                        color="orange darken-2">
                    </v-autocomplete>

                    <div v-if="country" class="subheading pa-2">
                        Didn't find your State?<span class="forSpanClick" @click="openAreaDialog('country', 'states', country.id)"> click here</span> to Add
                    </div>

                </v-flex>
            </v-layout>

            <v-layout  wrap justify-space-around>
                <v-flex xs12 lg6>
                    <v-autocomplete
                        class="px-1 py-1"
                        box
                        :items="cityArr"
                        v-model="city"
                        :error-messages="errors.collect('city')"
                        v-validate="{ required: true }"
                        data-vv-name="city"
                        data-vv-as="City"
                        flat
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="City"
                        return-object
                        @focus="getCity"
                        :disabled="!state"
                        color="orange darken-2">

                    </v-autocomplete>

                    <div v-if="state" class="subheading pa-2">
                        Didn't find your City?<span class="forSpanClick" @click="openAreaDialog('states', 'cities', state.id)"> click here</span> to Add
                    </div>

                </v-flex>

                <v-flex xs12 lg6>
                    <v-autocomplete
                        class="px-1 py-1"
                        box
                        :items="areaArr"
                        v-model="area"
                        :error-messages="errors.collect('area')"
                        v-validate="{ required: true }"
                        data-vv-name="area"
                        data-vv-as="Area"
                        flat
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="Area"
                        return-object
                        @focus="getArea"
                        :disabled="!city"
                        color="orange darken-2">
                    </v-autocomplete>

                    <div v-if="city" class="subheading pa-2">
                        Didn't find your Area?<span class="forSpanClick" @click="openAreaDialog('cities', 'areas', city.id)"> click here</span> to Add
                    </div>

                </v-flex>
            </v-layout>
    </v-card>
    <!-- =============================================================
            Area DIALOG
        ============================================================== -->
        <div v-if="newAreaDialog">
            <v-dialog
                v-model="newAreaDialog"
                scrollable
                persistent
                :overlay="false"
                max-width="500px"
                transition="dialog-transition"
            >
                <v-flex xs12 lg12 >
                    <v-card class="pa-4" v-if="newAreaSuccess">
                        <v-card-title class="subheading font-weight-medium">
                            Add New {{ regionName }}
                        </v-card-title>
                        <v-card-text class="subheading font-weight-medium">
                            {{ regionArea }}
                        </v-card-text>
                        <v-text-field box label="Enter Name" v-model="newArea.trim"></v-text-field>
                        <v-card-actions>

                            <v-btn outline color="success" @click="addArea">Add</v-btn>
                            <v-btn outline color="error" @click="cancelNewArea">cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card class="pa-4" v-else>
                        <v-card-title class="subheading font-weight-medium">
                            {{ newArea }}
                        </v-card-title>
                        <v-card-actions>
                            <v-btn outline color="success" @click="cancelNewArea">ok</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>

            </v-dialog>

        </div>
        </v-flex>
</template>

<script>
export default {
    components: {

        },
    _veeValidate: {
        validator: "new"
    },
    created() {

    },
    mounted() {
        this.$validator.localize('en', this.dictionary);
        //console.log(this.propCountry, this.propState, this.propCity, this.propArea);
    },
    props:['propCountry', 'propState', 'propCity', 'propArea'],
    data() {
        return {

            area: '',
            brandArr: [],

            regionName: '',
            regionArea: '',
            parentRegion: '',
            childRegion: '',
            regionID: '',

            newArea: '',
            newAreaDialog: false,
            newAreaSuccess: true,

            countryArr: [],
            country: this.propCountry ? this.propCountry : null,
            stateArr: [],
            state: this.propState ? this.propState : null,
            cityArr: [],
            city: this.propCity ? this.propCity : null,
            areaArr: [],
            area: this.propArea ? this.propArea : null,
            dictionary: {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {
                country: {
                    required: () => "country can not be empty",
                    // custom messages
                },
                state: {
                    required: () => "State can not be empty",
                    regex :   'Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                },
                confirm_password: {
                    required: () => " password field can not be empty",
                }
            }
        }
        }
    },
    methods: {
        countryFn() {
            if (this.countryArr.length !== 0) {
                return;
            } else {

                // this.countryArr = this.countryData.countries;

                /*    console.log(this.country.id)
                console.log(this.country.states) */

                axios.get('/country')
                    .then((response) => {
                        this.stateArr = [];
                        this.state = '';
                        this.countryArr = response.data.data;
                        console.log(response.data.data);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    });
            }
        },
        getState() {

            let self = this;

            if(self.stateArr.length != 0) {
                return;
            } else {

                axios.get('/country/'+self.country.id+'/countrystates')
                    .then((response) => {
                        console.log(response.data.data);
                        self.stateArr = response.data.data;
                        //self.state = '';
                        this.cityArr = [];
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                    //self.$emit('country', 'hi')

            }

        },
        getCity() {

            let self = this;

            console.log(this.state.id+' '+'s_id')
            console.log(self.state.statecities)

            axios.get('/states/'+this.state.id+'/statecities')
                .then((response) => {
                    console.log(response.data.data);
                    self.cityArr = response.data.data;

                    this.areaArr = [];
                })
                .catch((error) => {
                    console.log(error);
                });

                self.$emit('state', self.state.id)
        },
        getArea() {

            let self = this;

            axios.get('/cities/'+self.city.id+'/cityareas')
                .then((response) => {
                    console.log(response.data.data);
                    self.areaArr = response.data.data;

                })
                .catch((error) => {
                    console.log(error);
                });

                self.$emit('city', self.city.id)
        },

        // ==========           Add New Region          ==================

        addArea () {

            console.log(this.parentRegion, this.childRegion, this.regionID);
            return

            if(newArea != '') {

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                // axios.post('/cities/'+this.city.id+'/areas', {name: this.newArea, id: this.city.id})
                axios.post(`/${this.parentRegion}/${this.regionID}/${this.childRegion}`, {name: this.newArea, id: this.regionID})
                    .then((response) => {

                        this.newArea = response.data.success;

                        this.newAreaSuccess = false;

                        this.getArea();

                        console.log(response);
                    })
                    .catch((errors) => {

                        console.log(errors);
                    })
            }

        },
        openAreaDialog (p_reg, c_reg, id) {

            console.log(p_reg, c_reg, id);

            switch (p_reg) {

                case 'country':

                    this.regionName = 'State';

                    this.parentRegion = p_reg ;

                    this.childRegion = c_reg ;

                    this.regionID = id ;

                    this.state = '';

                    this.regionArea = this.country.name;

                    break;

                case 'states':

                    this.regionName = 'City';

                    this.parentRegion = p_reg ;

                    this.childRegion = c_reg ;

                    this.regionID = id ;

                    this.city = '';

                    this.regionArea = this.state.name;

                    break;

                case 'cities':

                    this.regionName = 'Area';

                    this.parentRegion = p_reg ;

                    this.childRegion = c_reg ;

                    this.regionID = id ;

                    this.area = '';

                    this.regionArea = this.city.name;

                    break;

                default:
                    break;
            }

            this.newAreaDialog = true;
        },
        cancelNewArea () {

            this.newArea = '';
            this.newAreaDialog = false;
            //this.brandArr = [];
            this.newAreaSuccess = true;
        },
    },
    watch: {
        country() {

            /* let aa = this.stateData.states;
            let b = []
            aa.filter(a => {
                if(a.country_id == this.country.id) {
                b.push(a)
                }
            })
            this.stateArr = b; */
            //this.getState();
            this.$emit('country', this.country.id)
            this.stateArr = []
            this.state = '';

        },
        state: function() {
            /* let aa = this.cityData.cities;
            let b = []
            aa.filter(a => {
                if(a.state_id == this.state.id) {
                b.push(a)
                }
            })
            this.cityArr = b; */

            //this.getCity();
            this.$emit('state', this.state.id)
            this.cityArr = [];
            this.city = '';

        },
        city: function() {
            /* let aa = this.areaData.areas;
            let b = []
            aa.filter(a => {
                if(a.city_id == this.city.id) {
                b.push(a)
                }
            })
            this.areaArr = b; */
            //this.getArea();
            this.$emit('city', this.city.id)
            this.areaArr = [];

             this.area = '';

        },
        area: function() {

            return this.$emit('area', this.area.id);

            this.$validator.validateAll().then(result => {
                if (!result) {
                // do stuff if not valid.
                return console.log('not validate in Region Component');

                } else {

                    let region = {
                        country: this.country.id,
                        state: this.state.id,
                        city:this.city.id,
                        area:this.area.id,
                    }
                 //console.log(this.area.id)
                 this.$emit('region', region)
                }
            });
        }
    }
}
</script>
