<template>

        <v-card>
            <v-card-title>
                <span class="headline">Login</span>
            </v-card-title>

            <v-card-text v-if="loading">
                <div class="text-xs-center">
                    <v-progress-circular
                    indeterminate
                    color="orange darken-2"
                    ></v-progress-circular>
                </div>
            </v-card-text>

            <!-- ===============    For Email or Password Required Message   =================== -->

            <v-card-text class="pb-0" v-if="alertError != null">
                <v-flex xs12>
                    <v-flex xs12 v-if="alertError != null && alertError.username">
                        <div v-for="(err, i) in alertError.username" :key="i">
                            <v-alert
                                v-model="usernameAlert"
                                dismissible
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>

                    <v-flex xs12 v-if="alertError != null && alertError.password">
                        <div v-for="(err, i) in alertError.password" :key="i" >
                            <v-alert
                                v-model="passwordAlert"
                                dismissible
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </div>
                    </v-flex>
                </v-flex>

                <v-flex xs12 v-if="wrongEmailOrPassword != null">
                    <v-alert
                        :value="true"

                        type="error"
                        >
                        {{ wrongEmailOrPassword.message }}

                    </v-alert>

                </v-flex>
            </v-card-text>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                       <template>
                      <v-flex xs12>
                           <v-form>
                               <v-text-field
                                   v-model="email"
                                   label="E-mail"
                                   :error-messages="errors.collect('email')"
                                   v-validate="'required|email'"
                                   data-vv-name="email"
                                   data-vv-as="E-mail"
                                   required
                                   :type="'email'"
                                   color="orange darken-2"
                                   @keydown.enter="submit"
                               ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  name="password"
                                  label="Enter your password"
                                  :error-messages="errors.collect('password')"
                                  v-validate="'required'"
                                  data-vv-name="password"
                                  data-vv-as="Password"
                                  :type="'password'"
                                  required
                                  color="orange darken-2"
                                  @keydown.enter="submit"
                              ></v-text-field>
                               <!-- <v-checkbox
                                   v-model="checkbox"
                                   value="1"
                                   label="Option"
                                   :error-messages="errors.collect('checkbox')"
                                   v-validate="'required'"
                                   data-vv-name="checkbox"
                                   type="checkbox"
                                   required
                                   color="orange darken-2"
                               ></v-checkbox> -->
                           </v-form>

                           </v-flex>
                       </template>
                    </v-layout>
                </v-container>
                    <div class="subheading">Don't hane an Account <span class="forSpanClick" @click="openRegistrationtForm">Click here</span> to Register </div>
                <!-- <div class="subheading">Forgot password...?<span class="forSpanClick"> Click here..</span></div> -->
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-1" :disabled="loading" block  flat @click.native="submit">Login</v-btn>
                <v-btn color="red darken-1"  block flat @click.native="closeSigninDialog">Cancel</v-btn>
            </v-card-actions>
        </v-card>
</template>

 <script>
 import { eventBus } from './../../../app.js'
export default {
    _veeValidate: {
        validator: "new"
    },

    data: () => ({

        usernameAlert: true,
        passwordAlert: true,
        alertError: null,
        wrongEmailOrPassword: null,

        loading: false,

        email: "",
        password: '',
        checkbox: '1',
        dictionary: {
            attributes: {
                email: "E-mail Address"
                // custom attributes
            },
            custom: {

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

            this.loading = true;

            this.alertError = null;

            this.wrongEmailOrPassword = null;

            axios.post('/login', {username: this.email, password: this.password })
                        .then((response) => {


                            console.log(response);

                            if (response.data.status == 'error') {

                                console.log(response.data.message);

                                this.loading = false;

                                this.alertError = true;

                                this.wrongEmailOrPassword = response.data;

                                return;
                            }

                            if(response.data) {

                                let accessToken = response.data.access_token;

                                window.localStorage.setItem('token', response.data.access_token);

                                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                                this.loading = false;

                                this.fireUserInfo();

                                eventBus.$emit('totalCountOdSavedProducts');

                                this.closeSigninDialog();
                            }

                        })
                        .catch((err) => {

                            console.log(err.response);

                            console.log(err.response.data.error)

                            this.loading = false;

                            if(err.response.data.error) {

                                this.alertError = err.response.data.error;

                            }

                        });

                console.log   (this.email , this.password )
        }
      });

         /*   this.$validator.validateAll().then(result => {
        if (!result) {
          // do stuff if not valid.
          return console.log('not validate in Registration Form Component');

        } else {
            console.log   (
                this.email ,
                this.password )
                this.closeSigninDialog();
        }
      }); */

        },
        clear() {
            this.loading = false;
            this.alertErrors = null;
            this.email = "";
            this.password = "";
            this.$validator.reset();
        },
        closeSigninDialog() {
            this.clear();
            eventBus.$emit('signinDialog', false);
        },
        openRegistrationtForm () {
            this.clear();
            eventBus.$emit('ifLogin', false);
        },
        fireUserInfo () {

         return this.$store.dispatch('disUserInfo');
      },
    }
};
</script>
