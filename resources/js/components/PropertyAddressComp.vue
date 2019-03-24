<template>
    <v-flex xs12 lg12>
        <v-card class="px-2 pb-5"  flat >

            <v-card-text class="subheading font-weight-medium">
                Address of Property
            </v-card-text>
            <v-flex xs12 lg12 class="px-3 pb-3">
                    <v-text-field
                    v-model="fullAddress"
                    label="Full Address"
                    box
                    hide-details
                    color="orange darken-2"
                    prepend-icon="fas fa-map-marker-alt"
                    :disabled="addressNotShow == true"
                ></v-text-field>
                <v-checkbox
                    v-model="addressNotShow"
                    color="orange darken-2"
                    hide-details
                >
                <div slot="label">
                    Don't Want to Show Full Address
                </div>
                </v-checkbox>
            </v-flex>

            <v-card-text class="subheading font-weight-medium">
                Region of Property
            </v-card-text>
            <v-flex xs12 lg12 class="px-3 pb-3">
                    <Region
                    @country="country = $event"
                    :propCountry="country"
                    @state="state = $event"
                    :propState="state"
                    @city="city = $event"
                    :propCity="city"
                    @area="area = $event"
                    :propArea="area"
                    ></Region>
            </v-flex>

        </v-card>
    </v-flex>
</template>

<script>
import Region from '../components/RegionComponent'

export default {
    components: {
        Region
    },
    props:['propFullAddress', 'propCountry', 'propState', 'propCity', 'propArea'],
    data() {
        return {
            /* ----------- */
            /* ADDRESS BLOCK */
           /* ----------- */
           fullAddress: this.propFullAddress ? this.propFullAddress : null,
           country: this.propCountry ? this.propCountry : null,
           state: this.propState ? this.propState : null,
           city: this.propCity ? this.propCity : null,
           area: this.propArea ? this.propArea : null,
           addressNotShow: this.propFullAddress ? false : true,
        }
    },
    watch: {
        fullAddress: function () {
            this.$emit('fullAddress', this.fullAddress);
        },
    }
}
</script>
