<template>
    <div>
       <v-layout justify-center>
           <v-flex xs12>
                <v-card class="pa-3">
                    <div class="subheading font-weight-medium">
                        Rate Product
                    </div>
                    <v-rating
                        v-model="rating"
                        class="mb-3"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$vuetify.icons.ratingFull"
                        half-increments
                        hover
                    ></v-rating>

                    <div class="subheading font-weight-medium" >
                        Write Review
                    </div>
                    <v-text-field
                        v-model="ratingHeading"
                        label="Heading"
                        color="orange darken-2"
                    ></v-text-field>
                    <v-textarea
                        v-model="ratingDescription"
                        label="Description"
                        color="orange darken-2"
                    ></v-textarea>
                    <v-card-actions>
                        <v-btn color="success" block flat @click.native="submitRating">submit</v-btn>
                        <v-btn color="error" block flat @click.native="cancelRating">cancel</v-btn>
                    </v-card-actions>
                </v-card>
           </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { eventBus } from '../../app.js'

export default {
    data() {
        return {
            rating: 0,
            ratingHeading: '',
            ratingDescription: '',
        }
    },
    methods: {
        submitRating() {

            eventBus.$emit('submitRating');
        },
        cancelRating() {

            eventBus.$emit('cancelRating');
        }
    },
    watch: {
        rating() {
            this.$emit('rating', this.rating);
        },
        ratingHeading() {
            this.$emit('ratingHeading', this.ratingHeading);
        },
        ratingDescription() {
            this.$emit('ratingDescription', this.ratingDescription);
        },
    }
}
</script>
