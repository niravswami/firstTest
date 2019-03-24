<template>
<v-layout wrap >
    <v-flex xs12 v-if="ifLogin">
        <LoginForm></LoginForm>
    </v-flex>
    <v-flex xs12 v-else>
        <RegistrationForm></RegistrationForm>
    </v-flex>
</v-layout>
</template>

<script>
import { eventBus } from './../../../app.js'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

export default {
    components: {
        RegistrationForm,
        LoginForm
    },
    created() {
        eventBus.$on('ifLogin', (data) => {
             return this.ifLogin = data;
        });
    },
    data() {
        return {
            ifLogin: true
        }
    }

}
</script>

<style scoped>

</style>
