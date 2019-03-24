import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import routes from './routes'
//import VueCroppie from 'vue-croppie'

import { store } from './store'

//Vue.use(VueCroppie);
Vue.use(VeeValidate)
Vue.use(VueRouter)
Vue.use(Vuetify)


window.axios = require('axios');

/* window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",

    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}; */
//window.axios = axios;


window.token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = "Bearer " + token;
//axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['xsrfCookieName'] = 'CSRFToken';
axios.defaults.headers.post['xsrfHeaderName'] = 'X-CSRFToken';
axios.defaults.headers.post['responseType'] = 'json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//axios.defaults.headers.post['X-Mashape-Key'] = 'TAWbWfDMzqmshxm8thI0i8jdEnFXp16Hk5fjsnTLPYcTqugHrI';

export const eventBus = new Vue();

import App from './views/App.vue'

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`

  })

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    data: {
        search: '',
    }

});
