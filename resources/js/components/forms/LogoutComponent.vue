<template>
            <v-card >
            <v-card-title class="pa-5" >
                <span class="mx-auto deleteFont" >Are You Sure You Want To Logout?</span>
            </v-card-title>

             <v-card-actions class="py-3">
                <v-btn  flat small   block color="orange darken-1" dark @click="logout">Logout</v-btn>
                <v-btn outline small  block color="error" @click="cancel">Cancel</v-btn>
            </v-card-actions>
         </v-card>
</template>

<script>
import { eventBus } from '../../app.js'
export default {
    data() {
        return {

        }
    },

    methods: {
        logout () {
            this.cancel();
            this.$store.dispatch('disLogout')
            .then(() => this.$router.replace({ path: '/' }))
    },
        lllogout() {
            eventBus.$emit('nullUser', null);
            this.cancel();
            /* axios.post('/logout')
            .then((response) => {
                console.log(response)

                localStorage.removeItem('id');
                localStorage.removeItem('token');
                localStorage.removeItem('user');

                this.removeUserInVueX()
            })
            .catch((errors) => {
                console.log(errors)
            }) */
        },
        cancel () {
            eventBus.$emit('forLogout', false);
        },
        removeUserInVueX ()
        {
            this.$store.commit('mutRemoveUser')
        },
    }
}
</script>

<style scoped>
.deleteFont {
    color: #424242;
    font-size: 17px;
}
</style>

