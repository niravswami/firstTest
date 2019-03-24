<template>
  <v-app>
     <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      width="240"
    >
    <v-list>

      <v-list-tile v-if="getUserInfo != null"  @click="userProfile">
            <v-list-tile-action>
              <v-icon color="#1E88E5">fas fa-user</v-icon>
            </v-list-tile-action>
            <v-list-tile-content >
              <v-list-tile-title  >
                {{ getUserInfo.first_name }} {{ getUserInfo.last_name }}
              </v-list-tile-title>

            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile  v-else @click="signinDialog = true">
            <v-list-tile-action>
              <v-icon >fas fa-user</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                 Login

              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="createStoreview" >
            <v-list-tile-action>
              <v-icon :color=" storeformDialog == true ?  '#1E88E5': '' ">fas fa-warehouse</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
              Create Storeview
              </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

      <v-list v-if="getUserStoreviews != null">
        <template v-for="item in getUserStoreviews" v-show="getLoader == false">
          <!-- <v-list-tile  :key="item.str_name" @click="gotostore(item.str_id)"> -->
          <v-list-tile  :key="item.str_name" @click="gotostore(item.str_id, item.unique_key)">
            <v-list-tile-action >
              <v-icon>fas fa-store-alt</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <!-- <router-link class="card-title text-capitalize" style="text-decoration: none;" :title="item.store_name" :to="{ name: 'storeview', params: { id: item.str_id }, props:{ id : item.str_id}}"> {{ item.str_name }} </router-link> --> {{ item.str_name }}
              </v-list-tile-title>
              <v-list-tile-sub-title style="font-size: 13px;">{{item.str_state}}, {{ item.str_city }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        </v-list>
    </v-list>
      <v-list>
          <v-divider></v-divider>

    <!-- ======================   Category   ================================= -->

    <v-list >
        <template v-for="val in cats" >
            <v-list-tile :key="val.text"  @click="getWantedCategoryProducts(val.to)">
                <v-list-tile-action>
                    <v-icon>{{ val.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ val.text }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>

        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"

            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >

            <v-list-tile slot="activator" >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-divider></v-divider>

        <!--*********************************
          /*** Logout tile ***
         *************************************-->
        <v-list-tile @click="logoutDialog = true" v-if="getUserInfo">
            <v-list-tile-action>
              <v-icon :color=" logoutDialog == true ?  '#1E88E5': '' ">fas fa-power-off  </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Logout
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- ********************************************* -->
    <!-- ********************************************* -->

    <!-- ********************************************* -->
    <!-- ********************************************* -->

    <v-toolbar

    :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
     dark
     style="  background: linear-gradient(to right,#fc00ff,#00dbde); background: linear-gradient(to right,#f12711,#f5af19); background: linear-gradient(to right , #fc4a1a, #f7b733);"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-flex xs4 lg1>
          <!-- <v-toolbar-title class="pointer align-center" @click="emitHome">
            <span class="title">{{ title.title }}</span>
        </v-toolbar-title> -->
        <router-link style="text-decoration: none;" :to="title.to"  >
            <v-toolbar-title @click="emitHome"   class="mr-3" style="color: #fff; ">
                {{ title.title }}
            </v-toolbar-title>
        </router-link>
      </v-flex>


    <!--
        ********************************************************
                    SEARCH BAR
        ********************************************************
        *
        *
    -->

    <v-flex xs10 md6 lg5 mr-3 v-if="!searchDialog">

        <div class="srcrev">
            <v-text-field
                v-model="search"
                flat
                solo
                light
                hide-details
                append-icon="search"
                label="Search"
                class="hidden-sm-and-down"
                ref="autocomplete"
                @focus="searchVisible = true"
                @blur="onBlur"
                @click:append="searchIconClick"
                @keydown.up="up"
                @keydown.down="down"
                @keydown.enter="searchIconClick"
                @keyup="searchit"
            >
            </v-text-field>
           <!--  <v-text-field
                placeholder="Search..."
                single-line
                append-icon="search"
                :append-icon-cb="() => {}"
                color="white"
                hide-details
                ></v-text-field> -->

                <template >
                    <v-card class="srcabc" light v-show="searchVisible">
                            <template v-for="(val, i) in getSearchArr">
                                <v-list-tile  :key="val.id"
                                    @click="searchClick(val.id, i)"
                                    :class="{'selected': (searchSelected == i)}"
                                    @mouseenter="mouseHover(i)"
                                >
                                    <v-list-tile-title >
                                        <!-- <strong >{{ val.title }}</strong> -->
                                        <strong >{{ val.name }}</strong>
                                    </v-list-tile-title>
                                </v-list-tile>
                            </template>
                    </v-card>
                </template>
        </div>

    </v-flex>

    <!-- ===================   Search Option Select Bigger Screen   =========================== -->

      <v-flex xs12 sm4 md3 lg2 mr-3>
        <v-select
            :items="searchOption"
            v-model="searchOptionSelected"
            label="label"
            return-object
            item-text="name"
            item-value="id"
            hide-no-data
            hide-details
            class="py-3 hidden-sm-and-down"
            solo
            light
            attach
        ></v-select>
      </v-flex>

      <v-flex xs4  lg2>
        <div>
            <div v-if="getCity">
                <v-btn light block depressed class="hidden-md-and-up text-truncate" color="#fff"   @click="regiondialo">{{ this.getCity ? this.getCity.name : 'Select City' }}</v-btn>
                <v-btn light block depressed class="hidden-sm-and-down text-truncate" color="#fff"  large @click="regiondialo">{{ this.getCity ? this.getCity.name : 'Select City' }}</v-btn>
            </div>
            <div v-if="!getCity && getState">
                <v-btn light block depressed class="hidden-md-and-up text-truncate" color="#fff"   @click="regiondialo">{{ this.getState ? this.getState.name : 'Select City' }}</v-btn>
                <v-btn light block depressed class="hidden-sm-and-down text-truncate" color="#fff"  large @click="regiondialo">{{ this.getState ? this.getState.name : 'Select City' }}</v-btn>
            </div>
            <div v-if="!getCity && !getState">
                <v-btn light block depressed class="hidden-md-and-up text-truncate" color="#fff"   @click="regiondialo">{{ this.getCountry ? this.getCountry.name : 'Select City' }}</v-btn>
                <v-btn light block depressed class="hidden-sm-and-down text-truncate" color="#fff"  large @click="regiondialo">{{ this.getCountry ? this.getCountry.name : 'Select City' }}</v-btn>
            </div>
        </div>
      </v-flex>
            <v-spacer></v-spacer>

            <!-- =========================================   Search for small devices   ======================================== -->

            <v-flex xs5 lg1 class="hidden-md-and-up ml-3">
                <v-icon @click.native="searchDialog = true">fas fa-search</v-icon>
                <v-layout justify-center>
                    <v-dialog v-model="searchDialog" fullscreen transition="dialog-bottom-transition" :overlay="false" >
                        <v-card class="hidden-md-and-up">
                            <v-toolbar light color="" flat>
                                <!-- <v-toolbar-title>Search</v-toolbar-title> -->
                                <v-toolbar-items>
                                    <v-btn icon @click.native="searchDialog = false" light>
                                        <v-icon>arrow_back</v-icon>
                                    </v-btn>

                                </v-toolbar-items>
                                <v-spacer></v-spacer>
                                <v-flex xs12>
                                    <v-text-field
                                        v-model="search"
                                        flat
                                        solo
                                        light
                                        hide-details
                                        clearable
                                        append-icon="search"
                                        label="Search"
                                        class="hidden-md-and-up"
                                        ref="autocomplete"
                                        @keyup="searchit"
                                        @focus="searchVisible = true"
                                        @click:append="searchIconClick"
                                    >
                                    </v-text-field>

                                </v-flex>
                                <!-- <v-btn icon @click.native="searchDialog = false" light>
                                        <v-icon>fas fa-search-plus</v-icon>
                                    </v-btn> -->

                                    <!-- <v-dialog
                                        v-model="searchOptMobile"
                                        scrollable
                                        :overlay="false"
                                        max-width="500px"
                                        transition="dialog-transition"
                                    >

                                    </v-dialog> -->
                                        <!-- <v-menu
                                                transition="scale-transition"
                                                origin="top right"

                                                max-height="400px"
                                                min-width="300px"
                                                max-width="300px"
                                                :nudge-bottom="50"
                                                :nudge-left="260"
                                                :close-on-content-click="false"
                                                >
                                                    <v-icon

                                                        class="hidden-md-and-up"
                                                        slot="activator"
                                                    >
                                                        fas fa-search-plus
                                                    </v-icon>
                                                    <v-layout  wrap>
                                                        <v-flex xs12>

                                                            <v-card>

                                                                <v-select
                                                                    :items="searchOption"
                                                                    v-model="searchOptionSelected"
                                                                    label="label"
                                                                    return-object
                                                                    item-text="name"
                                                                    item-value="id"
                                                                    hide-no-data
                                                                    hide-details
                                                                    class="py-3 hidden-md-and-up"
                                                                    solo
                                                                    light

                                                                ></v-select>
                                                            </v-card>
                                                        </v-flex>

                                                    </v-layout>
                                                </v-menu> -->
                            </v-toolbar>
                            <v-toolbar flat>
                                    <v-flex xs12>

                                        <v-overflow-btn
                                            dense
                                            :items="searchOption"
                                            v-model="searchOptionSelected"
                                            item-text="name"
                                            item-value="id"
                                            return-object
                                            color="orange darken-2"
                                        ></v-overflow-btn>
                                    </v-flex>
                            </v-toolbar>
                            <div class="" light v-show="searchVisible">
                                <template v-for="(val, i) in getSearchArr">
                                    <v-list-tile  :key="val.id"
                                        @click="searchClick(val.id, i)"
                                        :class="{'selected': (searchSelected == i)}"
                                        @mouseenter="mouseHover(i)"
                                    >
                                        <v-list-tile-title >
                                            <strong >{{ val.name }}</strong>
                                            <!-- <strong >{{ val.title }}</strong> -->
                                        </v-list-tile-title>
                                    </v-list-tile>
                                </template>
                            </div>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </v-flex>


            <!-- ==========================================   Saved Products   ============================================================= -->

        <div title="Saved Products" class="mx-3">
            <v-badge color="white">
                <span slot="badge" class="black--text" v-if="getTotalOfSavedProducts">{{ getTotalOfSavedProducts }}</span>
                <span slot="badge" class="black--text" v-else>0</span>
                    <v-menu
                        transition="scale-transition"
                        origin="top right"
                        attach
                        max-height="400px"
                        min-width="300px"
                        max-width="300px"
                        :nudge-bottom="50"
                        :nudge-left="260"
                        :close-on-content-click="false"
                        >
                            <v-icon

                                class="hidden-md-and-up"
                                slot="activator"
                                @click.native="getSaveProducts"
                            >
                                far fa-save
                            </v-icon>
                            <v-icon
                                large
                                class="hidden-sm-and-down"
                                slot="activator"
                                @click.native="getSaveProducts"
                            >
                                far fa-save
                            </v-icon>
                                <SavedProductComp :propSavedProducts="savedProducts" :propSpinner="saveProductsSpinner"></SavedProductComp>
                        </v-menu>
            </v-badge>
        </div>
    <v-flex xs2 lg1>
    </v-flex>
     <!-- <v-btn color="warning" fab dark small :to="{name: 'home', params: {webholder: this.searchOptionSelected.web}}" >H</v-btn> -->
     <!-- <v-btn color="warning" fab dark small :to="{name: 'createcategories'}" >D</v-btn>
     <v-btn color="warning" fab dark small :to="{name: 'searchresult'}" >S</v-btn> -->
    </v-toolbar>

    <!-- ********************************************* -->
    <!-- ********************************************* -->

    <v-content>
      <v-container class="wid">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-content>

    <!-- ********************************************* -->
    <!-- *** Login & Register *** -->
    <!-- ********************************************* -->

        <v-dialog
            v-if="signinDialog"
            v-model="signinDialog"
            scrollable
            persistent
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
        >
            <Signin></Signin>
        </v-dialog>

    <!-- ********************************************* -->
    <!-- *** Create Storeview Form *** -->
    <!-- ********************************************* -->

         <v-dialog
            v-if="storeformDialog"
            v-model="storeformDialog"
            scrollable

            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
        >
            <!-- <StoreForm></StoreForm> -->
            <StoreviewForm></StoreviewForm>
        </v-dialog>

    <!-- ********************************************* -->
    <!-- *** Logout Dialog *** -->
    <!-- ********************************************* -->

    <v-dialog
        v-if="logoutDialog"
        v-model="logoutDialog"
        scrollable
        persistent
        max-width="500px"
        transition="dialog-transition"
    >
      <LogoutComponent></LogoutComponent>
    </v-dialog>

    <!-- ********************************************* -->
    <!-- ********************************************* -->
    <!-- ********************************************* -->
    <!-- *** spiner Dialog *** -->
    <!-- ********************************************* -->

    <v-layout  justify-center>
        <v-dialog v-model="spinner" class="center" fullscreen transition="dialog-transition" :overlay="false">

                <v-card color="#104761">

                    <v-progress-circular
                        :size="70"
                        :width="7"
                        color="orange darken-2"
                        indeterminate
                        class="v-progress-circular centerSpinner"
                    ></v-progress-circular>
                </v-card>

        </v-dialog>
    </v-layout>

    <v-dialog
      persistent
      transition="dialog-transition"
      full-width
    >
        <v-card
            class="pa-5"
            height="100%"
            width="100%">
        </v-card>
    </v-dialog>

    <!-- ********************************************* -->
    <!-- ********************************************* -->
    <!-- ********************************************* -->
    <!-- *** Region Dialog *** -->
    <!-- ********************************************* -->

    <v-dialog
        v-if="regionDialog"
        v-model="regionDialog"
        scrollable

        max-width="500px"
        transition="dialog-transition"
    >
    <v-flex xs12>
        <v-card  class="px-4 py-5">
                <v-card flat class="subheading font-weight-medium py-2">
                        Select Region
                </v-card>
            <v-flex xs12>
                <v-autocomplete
                        class="py-3"
                        :items="this.getCountryArr"
                        v-model="getCountry"
                        @focus ="nullCountryChange"
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="Country"
                        return-object
                        color="orange darken-2"
                        light
                    ></v-autocomplete>
            </v-flex>
            <v-flex xs12>
                <v-autocomplete
                        class="py-3"
                        :items="this.getStateArr"
                        v-model="getState"
                        clearable
                        @focus="nullStateChange"
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="State"
                        return-object
                        color="orange darken-2"
                        light
                        :disabled="!this.getCountry"
                    ></v-autocomplete>
            </v-flex>
            <v-flex xs12>
                <v-autocomplete
                        class="py-3"
                        :items="this.getCityArr"
                        v-model="getCity"
                        clearable
                        hide-no-data
                        hide-details
                        item-text="name"
                        item-value="id"
                        label="City"
                        return-object
                        color="orange darken-2"
                        light
                        :disabled="!this.getState"
                    ></v-autocomplete>
            </v-flex>

            <v-flex xs12>
                <v-layout justify-space-around wrap>
                    <v-flex xs12>
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-btn block small flat outline color="success" dark @click="saveRegion">save</v-btn>

                            </v-flex>
                            <v-flex xs6>
                                <v-btn v-if="regionSaved" block small flat outline color="error" dark @click="removeRegion">remove saved region</v-btn>

                            </v-flex>
                            <v-flex xs12>

                                <v-btn block small flat outline color="warning" dark @click="closeRegionDialog">OK</v-btn>
                            </v-flex>

                        </v-layout>
                    </v-flex>
                    <!-- <v-flex xs6>
                        <v-btn block small flat outline color="error" dark @click="closeRegionDialog">cancel</v-btn>
                    </v-flex> -->
                </v-layout>
            </v-flex>

        </v-card>

    </v-flex>
    </v-dialog>

    <!-- =============================================================
            ERRORS DIALOG
        ============================================================== -->

        <v-layout justify-center>
            <v-dialog v-model="errorDialog" persistent scrollable max-width="500">
                <v-card>
                    <v-card-text>
                        <v-card-actions>
                            <div class="subheading">Errors</div>
                            <v-spacer></v-spacer>
                            <v-btn color="error" small flat @click.native="closeErrorDialog">close</v-btn>
                        </v-card-actions>
                    </v-card-text>
                    <v-card-text>
                        <span v-for="(err, i) in errorArr" :key="i">
                            <v-alert
                                :value="true"
                                type="error"
                                >
                                {{ err }}

                            </v-alert>
                        </span>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-layout>

    <!-- ********************************************* -->
    <!-- ********************************************* -->

    <!-- <v-footer
      :fixed="fixed"
      style=" background: linear-gradient(to left,#fc00ff,#00dbde);"
    >
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { eventBus } from './../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import Signin from './../components/forms/Signin/SigninFile'
import StoreForm from './../components/forms/StoreForm'
import StoreviewForm from './../components/forms/StoreviewForm'
import LogoutComponent from '../components/forms/LogoutComponent'
import RegionComp from '../components/RegionComponent'
import SavedProductComp from '../components/savedProducts/SavedProductsList'
import _ from 'lodash'

export default {
  name: 'App',

  components: {
    Signin,
    StoreForm,
    StoreviewForm,
    LogoutComponent,
    VueGoogleAutocomplete,
    RegionComp,
    SavedProductComp,

  },
  created() {
    eventBus.$on('signinDialog', (data) => {
             return this.signinDialog = data;
        });
    eventBus.$on('userForceFire', (data) => {
             return this.userForceFire();
        });
    eventBus.$on('storeForm', (data) => {
             return this.storeformDialog = data;
        });
    eventBus.$on('forLogout', (data) => {
            return this.logoutDialog = data;
    });
    eventBus.$on('nullUser', (data) => {
             return this.userInfo = data;
        });
    eventBus.$on('spinner', (data) => {
             return this.spinner = data;
        });
    eventBus.$on('pathWebholder', (data) => {

            this.searchOptionSelected = data;
        });
    // eventBus.$on('savedProduct', (data) => {

    //         this.forcedGetSavedProducts();
    //     });
    eventBus.$on('totalCountOdSavedProducts', (data) => {

            this.getTotalCountOfSavedProducts();
        });
    eventBus.$on('againFireUser', (data) => {

            this.fireUserInfo;
        });
    eventBus.$on('errorArr', (data) => {

            this.errorArr.push(data);
        });
    eventBus.$on('errorArrPassCheck', (data) => {

            if(this.errorArr.length > 0) {

                eventBus.$emit('errorArrPassReply', false);

                this.errorDialog = true;

            } else {

                eventBus.$emit('errorArrPassReply', true);
            }

        });

        this.searchArr = this.getSearchArr


  },
    mixins:[selectSearchRoute],
  data () {
    return {

        searchOptMobile: false,

        /* ---------------------------- */
        /* ERROR DIALOG */
        /* ---------------------------- */

        errorDialog: false,

        errorArr: [],

        /* ==============================
            GEO LOCATION
        ============================== */

        error: '',
        lat:'',
        lon:'',
        regionSaved: false,

        /* ============================ */
        tst1: null,
        show: false,

        search: null,
        searchOptionForUpDownKey: '',
        searchArr: [],
        searchSelected: 0,
        searchOption: [
            {id: 'searchproducts', name: 'Products', web: 'products'},
            {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'},
            {id: 'searchproperties', name: 'Properties', web: 'properties'},
            {id: 'searchuseditems', name: 'Used Items', web: 'useditems'},
            {id: 'searcheducation', name: 'Education', web: 'education'}
        ],
        searchVisible: false ,
        selectedItem: null,
        searchOptionSelected: {},
        //searchOptionSelected: {id: 'searchproducts', name: 'Products', web: 'products'},

        address: '',
        signinDialog: false,
        storeformDialog: false,
        logoutDialog: false ,
        regionDialog: false,
        searchDialog: false,
        spinner: false,
        areaArr: [],
        area: '',
        clipped: true,
        drawer: false,
        fixed: false,
        userInfo: null,
        myStores: [],

        /* ==============   save products   =================== */

        savedProducts:[],
        saveProductsSpinner: false,

        userInfos: [
                { icon: 'fas fa-user', text: 'Login', clickvick: 'signinDialog = true' },
                { icon: 'fas fa-warehouse', text: 'Create ShopLook' },
          ],

          /* ===================   Category   ========================= */
      cats: [
        { icon: 'fas fa-box-open', text: 'Category', to: '' },
        { icon: 'fas fa-male', text: 'Men', to: '6' },
        { icon: 'fas fa-female', text: 'Women', to: '10' },
        /* { icon: 'fas fa-child', text: 'Kids', to: '4' },
        { icon: 'fas fa-palette', text: 'Arts', to: '5' }, */
        { icon: 'fas fa-microchip', text: 'Electronics', to: '1' },
        ],
      items: [

        // {
        //   icon: 'fas fa-angle-up',
        //   'icon-alt': 'fas fa-angle-down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'fas fa-plus', text: 'Create label' }
        //   ]
        // },
        // {
        //   icon: 'fas fa-angle-up',
        //   'icon-alt': 'fas fa-angle-down',
        //   text: 'More',
        //   model: false,
        //   children: [
        //     { text: 'Import' },
        //     { text: 'Export' },
        //     { text: 'Print' },
        //     { text: 'Undo changes' },
        //     { text: 'Other contacts' }
        //   ]
        // },
        // { icon: 'fas fa-cog', text: 'Settings' },
        // { icon: 'fas fa-sticky-note', text: 'Send feedback' },
        // { icon: 'fas fa-question-circle', text: 'Help' },
        // { icon: 'fas fa-download', text: 'App downloads' },
        // { icon: 'fas fa-keyboard', text: 'Go to the old version' }
      ],
      title: {title: 'Vuetify.js', to: {name: 'home'}},
    }
  },
    beforeMount() {
        //this.spinner = true
        this.fireUserInfo;
        this.getGeoLocation();
        this.getLatLong();
  },
    mounted() {
        if (window.innerWidth >= 1264) {

            this.drawer = true;
          //console.log(window.innerWidth);
        }

      const tokenPresent = localStorage.getItem('token');
      if (localStorage.getItem('token')) {

    }

        console.log('local')

        if (this.getUserInfo != null || this.getUserInfo != {} ) {
            console.log('ok')
        }
            this.getTotalCountOfSavedProducts();

    },
  methods: {

      userForceFire() {

          return this.$store.dispatch('disUserInfo');
      },


    gotostore(id, u_k) {
      //<router-link class="card-title text-capitalize" style="text-decoration: none;" :title="item.store_name" :to="{ name: 'storeview', params: { id: item.str_id }, props:{ id : item.str_id}}">
        //   eventBus.$emit('storeviewId', id);
          this.$router.push({ name: 'storeview', params: { id: id, u_name:  u_k}, props:{ id : id}});
          console.log(id)
      },

      userProfile ()
      {
          this.$router.push({ name: 'userupdateform' });
      },
      createStoreview () {

          if(localStorage.getItem('token')) {

              this.$router.push({ name: 'createstoreview'});
          } else {

              this.signinDialog = true;
          }

      },

    searchit: _.debounce(function() {

                    let self = this;

                    let newString = self.search.replace(/\s+/g,' ').trim();

                    if (newString != '') {

                            self.searchOptionForUpDownKey = '';

                            self.searchVisible = true;

                            let srch = {q : newString}

                            //this.$store.dispatch('disSearchArr', {pth: this.searchOptionSelected.id, srch:this.search})
                            self.$store.dispatch('disSearchArr', {pth: self.searchOptionSelected.id, q:srch})
                            //self.$store.dispatch('disSearchArr', {pth: self.searchOptionSelected.web, q:srch})


                                /* setTimeout(() => {

                                    axios.get('/'+ this.searchOptionSelected.id +'?q=' + query)
                                    .then((response) => {
                                        this.searchArr = response.data.data;
                                        // this.searchVisible = true;
                                        console.log(response);
                                    })
                                    .catch((err) => {

                                        console.log(err)
                                    })

                                }, 1300) */
                    }else {
                        this.$store.commit('mutSearchArr', [])
                        this.searchArr = []
                        this.searchVisible = false
                    }
    }, 1300) ,
        up() {
            if(this.searchSelected == 0) {
                return;
            }
            this.searchOptionForUpDownKey = this.getSearchArr[this.searchSelected-1].title;
            console.log(this.getSearchArr[this.searchSelected-1].title)

            this.searchSelected -= 1 ;
        },
        down() {
            if(this.searchSelected == 4) {
                return;
            }
            this.searchOptionForUpDownKey = this.getSearchArr[this.searchSelected+1].title;
            console.log(this.getSearchArr[this.searchSelected+1].title)

            this.searchSelected += 1 ;
        },
        searchClick(id, i) {
            this.$store.commit('mutSearchReultArr', []);
            this.$store.commit('mutLoadingSpinner', true)

            this.search = this.getSearchArr[i].name;

            let newString = this.search.replace(/\s+/g,' ').trim();

            //this.searchSelected = id;
            if(newString == null || newString == '') {
                return;
            }
            //let obj = this.searchArr.find(obj => obj.id == id);
            //this.search = this.getSearchArr[i].title;
            //this.searchit();
            /* setTimeout(() => {

                this.$store.dispatch('disSearchResult', { pth: this.searchOptionSelected.id , srch: this.search })
            }, 100) */
            if(this.searchDialog == true) {
                this.searchDialog = false;
            }
           // this.$router.push({ path: 'searchresult', query: {pth: this.searchOptionSelected.id , srh: this.searchArr[i].slug } })
            this.$router.push({ name: 'searchresult', params: {webholder: this.searchOptionSelected.web },  query: {pth: this.searchOptionSelected.web , q: newString  } })
            return this.searchVisible = false;

            //console.log(this.searchArr[i])
            console.log(id + ' ' + 'srchclk')
        },
        searchIconClick() {

            this.$store.commit('mutSearchReultArr', [])
            this.$store.commit('mutLoadingSpinner', true)
            console.log(this.search);


            let newString = this.search.replace(/\s+/g,' ').trim();

            if(newString == null || newString == '') {
                return;
            }

            if(this.searchDialog == true) {
                this.searchDialog = false;
            }

            if(this.searchOptionForUpDownKey  != '') {
                this.search = this.searchOptionForUpDownKey ;
            }
            let a = {q: newString};
            //this.$store.dispatch('disSearchResult', {pth: this.searchOptionSelected.web,  query: a})
            this.$router.push({ name: 'searchresult', params: {webholder: this.searchOptionSelected.web },  query: {pth: this.searchOptionSelected.web , q: newString} })
            eventBus.$emit('srchBtnOnPth')
            this.searchVisible = false;
        },
        onBlur: _.debounce(function() {

                this.searchVisible = false

        }, 130),
        mouseHover(i) {
            this.searchSelected = i
        },
        spacialRoute () {

          //let web = JSON.parse(JSON.stringify(this.searchOptionSelected.web));
          let web = this.searchOptionSelected.web;

          this.$store.dispatch('disSpacialRoute', web);

           console.log(web+ 'SpRt'+ " " + this.tst1);

      },

        //   =======================   Location Throught Ip   =============================

        testApi() {

            // Try to use this method in production

            var Url = "http://api.ipinfodb.com/v3/ip-city/?key=1af67c00a0ae23eecad8852b4b175c3b8ba3dda5e5a8ce703257f496fedb57cc&format=json";
            var xhr = new XMLHttpRequest();
            xhr.open('GET', Url, true);
            xhr.send();
            xhr.onreadystatechange = processRequest;
            let self = this;
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // alert(xhr.responseText);
                    var response1 = JSON.parse(xhr.responseText);
                    console.log(response1);

                    //  get below response

                    '{"statusCode":"OK","statusMessage":"","ipAddress":"116.74.116.206","countryCode":"IN","countryName":"India","regionName":"Gujarat","cityName":"Surat","zipCode":"395005","latitude":"21.1667","longitude":"72.8333","timeZone":"+05:30"}'

                    let cntName = response1.countryName ? response1.countryName : null;
                    let stName = response1.regionName ? response1.regionName : null;
                    let ctName = response1.cityName ? response1.cityName : null;

                    let form = new FormData();

                    form.append('countryName', cntName);
                    if(stName != null) {

                        form.append('regionName', stName);
                    }
                    if(ctName != null) {

                        form.append('cityName', ctName);
                    }

                    axios.post('postip', form)
                    .then((res) => {
                        console.log(res.data);
                        if(res) {
                            self.$store.commit('mutAllRegion', {
                                cntArr: res.data.countryArray,
                                cnt: res.data.country,

                                stArr: res.data.stateArray,
                                st: res.data.state,

                                ctArr: res.data.cityArray,
                                ct: res.data.city,
                                })
                        }
                    })
                    .catch((err) => {
                        console.log(err.response)
                        if(err) {
                            this.$store.dispatch('disCountryFromIp', {cnt: 'India'})

                            this.regionDialog = true;

                            this.spinner = false;
                        }
                    })

                }
            }


        },

      getGeoLocation() {

            // Retrieve the object from storage
            var SRegion = sessionStorage.getItem('region');
            var LRegion = localStorage.getItem('region');

            if(LRegion) {

                this.regionSaved = true;
            }

            if(SRegion) {

                console.log('region: ', JSON.parse(SRegion));

                return this.sessionLocalRegion(SRegion);

            //     var SReg = JSON.parse(SRegion)

            //    return this.$store.commit('mutAllRegion', {
            //                 cntArr: SReg.cntArr,
            //                 cnt: SReg.cnt,

            //                 stArr: SReg.stArr,
            //                 st: SReg.st,

            //                 ctArr: SReg.ctArr,
            //                 ct: SReg.ct,
            //                 });
            }

          if(LRegion) {



            console.log('region: ', JSON.parse(LRegion));

            return this.sessionLocalRegion(LRegion);

            // var LReg = JSON.parse(LRegion)

            // return this.$store.commit('mutAllRegion', {
            //               cntArr: LReg.cntArr,
            //               cnt: LReg.cnt,

            //               stArr: LReg.stArr,
            //               st: LReg.st,

            //               ctArr: LReg.ctArr,
            //               ct: LReg.ct,
            //               })


          } else {

              this.testApi();

              return;

              axios.get('/getip')
              .then((res) => {
                    console.log(res);
                      //this.$store.dispatch('disCountryFromIp', {cnt: cnt, st: st, ct: ct})
                      this.$store.commit('mutAllRegion', {
                          cntArr: res.data.countryArray,
                          cnt: JSON.parse(JSON.stringify(res.data.country)),

                          stArr: res.data.stateArray,
                          st: res.data.state,

                          ctArr: res.data.cityArray,
                          ct: res.data.city,
                          })

                  })
                  .catch((err) => {
                      console.log(err);
                      if(err) {
                      this.$store.dispatch('disCountryFromIp', {cnt: 'India'})

                          this.regionDialog = true;

                          this.spinner = false;
                      }
                      //console.log(err.response)
                  });
          }


      },
      sessionLocalRegion(reg) {

          var r = JSON.parse(reg)

            return this.$store.commit('mutAllRegion', {
                          cntArr: r.cntArr,
                          cnt: r.cnt,

                          stArr: r.stArr,
                          st: r.st,

                          ctArr: r.ctArr,
                          ct: r.ct,
                          })
      },
      sessionRegionSave() {

            var region = {
                            'cntArr': this.getCountryArr,
                            'cnt': this.getCountry,

                            'stArr': this.getStateArr,
                            'st': this.getState,

                            'ctArr': this.getCityArr,
                            'ct': this.getCity
                        };

                    // Put the object into storage
                return sessionStorage.setItem('region', JSON.stringify(region));
      },
      saveRegion() {

         this.regionSaved = true;

        var SRegion = sessionStorage.getItem('region')

        //   var region = {
        //                     'cntArr': this.getCountryArr,
        //                     'cnt': this.getCountry,

        //                     'stArr': this.getStateArr,
        //                     'st': this.getState,

        //                     'ctArr': this.getCityArr,
        //                     'ct': this.getCity
        //                 };

                    // Put the object into storage
                    // localStorage.setItem('region', JSON.stringify(region));
                    localStorage.setItem('region', SRegion);

      },
      removeRegion() {

        this.regionSaved = false;

        localStorage.removeItem('region');
      },
      getLatLong() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(this.showPosition);

        } else {
                alert("Geolocation is not supported by this browser.");
            }

    },
      showPosition:function (position) {

		this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

        console.log(this.lat, this.lon)

    },
    regiondialo() {
        this.regionDialog = true;
    },
    closeRegionDialog() {

        this.regionDialog = false;
    },
    nullCountryChange() {

        if(this.getCountryArr == null || this.getCountry == null) {

            this.$store.dispatch('disFechCountry');

            console.log('nullCountry')
        }

    },
    nullStateChange() {

        if(this.getStateArr == '' || this.getState == '') {

            //this.$store.dispatch('disChangeCountrySoChangeState');
            //this.$store.dispatch('disChangeCountrySoChangeState',  JSON.parse(JSON.stringify(this.getCountry)));
            this.$store.dispatch('disChangeCountrySoChangeState',  this.getCountry);

            console.log('nullState')
        }

    },
    /* =============================================
            Saved Products
    ============================================= */

    getTotalCountOfSavedProducts() {

        if(localStorage.getItem('token')) {

            console.log('total count saved products')

            this.$store.dispatch('disTotalCountOfSavedProducts')
        }

    },

    getSaveProducts() {

        eventBus.$emit('getSaveItems');
        return;

        if(localStorage.getItem('token')) {

            this.saveProductsSpinner = true;


            if(this.savedProducts.length == 0) {

                setTimeout(() => {

                    this.forcedGetSavedProducts();
                }, 3000)


                } else {

                    this.saveProductsSpinner = false;
                    return;
                }
            }

        },
    //     forcedGetSavedProducts() {

    //         this.saveProductsSpinner = true;

    //         axios.get('/saveproducts')
    //             .then((res) => {
    //                 console.log(res.data);

    //                     //this.savedProducts = res.data.savedProducts;
    //                     this.savedProducts = res.data;

    //             })
    //             .catch((err) => {
    //                 console.log(err.response);
    //             })
    //             .finally(this.saveProductsSpinner = false);

    //     },

        /* ======================================
                Category
        ====================================== */

        getWantedCategoryProducts(cat)
        {
            console.log(cat);

            //this.$store.dispatch('disWantedCategory', {cat_srch: cat,});

            //this.$router.push({ name: 'searchresult', params: {webholder: this.searchOptionSelected.web },  query: {pth: this.searchOptionSelected.web , cat_srch: cat  } })

            if(cat != '') {

                this.$store.commit('mutWantedCat', {prod: []});

                // eventBus.$emit('filterReset');

                this.$router.push({name:'categorysearch', query: {cat_srch : cat}});


            } else {

                //this.$router.push({name:'allcategories'});
            }
            return;

        },

        /* ======================   home   ======================== */

        emitHome() {

            //this.$router.push({name: 'home'});

            eventBus.$emit('homePageData');

        },

        /* =============================   ERRORS ARR   =============================== */

        closeErrorDialog() {

            this.errorArr = [];

            this.errorDialog = false;
        },


/* =============================================   Watcher   ======================================================== */

  },
  watch: {
        getUserInfo: function () {

            if (this.getUserInfo != null)
            {
            console.log('watch');

                this.$store.dispatch('disUserStoreviews');
            }
        },
        search: function () {
        //   eventBus.$emit('query', this.search);
        //   this.searchit();
            console.log(this.search)
        },
        searchOptionSelected() {

            //this.search  = ''

            //this.$store.dispatch('disSearchArr', this.search)

            sessionStorage.setItem('srchOpt',JSON.stringify(this.searchOptionSelected))


            let web = this.searchOptionSelected.web;
            //let web = JSON.parse(JSON.stringify(this.searchOptionSelected.web))
            // this.$route.params.webholder = this.searchOptionSelected.web
            //this.$route.params.webholder = web

            //this.$router.push({ name: 'path', params:{ webholder : web} });

            this.$route.params.webholder = web;

            this.$store.commit('mutSelectRoute', this.searchOptionSelected)

            //eventBus.$emit('webHolder', web);

            //this.spacialRoute();

            // console.log(web)
        },
        getCountry() {
            this.sessionRegionSave();
        },
        getState() {

            this.sessionRegionSave();
        },
        getCity() {

            this.sessionRegionSave();
        },

        '$route'(to, from){

            if(to.name == 'home') {

                console.log(to.name)

                eventBus.$emit('homePageData');

            }
        }
  },

  /* ===============================================   Computed   =========================================================== */
  computed: {

      fireUserInfo () {
         return this.$store.dispatch('disUserInfo');
      },
      getUserInfo ()
      {
         return this.$store.getters.getUserInfo;
      },
      getUserStoreviews ()
      {
          return this.$store.getters.getUserStoreviews;
      },
      getLoader ()
      {
          return this.$store.getters.getLoader;
      },
      getSearchArr () {
          return this.$store.getters.getSearchArr
      },
      getCountryArr () {

          return this.$store.getters.getCountryArr;

      },
      getCountry: {

          get() {

              return  this.$store.getters.getCountry;
          },
          set(val) {

              console.log(val)

              //this.$store.commit('mutCountryFromIp', {obj: JSON.parse(JSON.stringify(val))});
              this.$store.commit('mutCountryFromIp', {obj: val});

              //this.$store.dispatch('disChangeCountrySoChangeState',  JSON.parse(JSON.stringify(val)));
              this.$store.dispatch('disChangeCountrySoChangeState',  val);

          }


      },
      getStateArr () {

          return this.$store.getters.getStateArr;

      },
      getState: {

          get() {

              return this.$store.getters.getState;
          },
          set (val) {

              console.log(val)

              if(val != undefined) {

                  this.$store.commit('mutStateFromIp', {obj: val});

                  this.$store.dispatch('disChangeStateSoChangeCity',  val);

              } else {

                  this.$store.commit('mutStateFromIp', {obj: ''});

                  this.$store.commit('mutCityFromIp', {obj: ''});

              }


          }


      },
      getCityArr () {

          return this.$store.getters.getCityArr;

      },
      getCity: {

          get() {

              return this.$store.getters.getCity;
          },
          set (val) {

                console.log(val)

                this.$store.commit('mutCityFromIp', {obj: val})


                //this.$store.dispatch('disChangeStateSoChangeCity',  JSON.parse(JSON.stringify(val)))
          }

      },

      getTotalOfSavedProducts(){
          return this.$store.getters.getTotalCountOfSavedProducts;
      }



  }

}
</script>

<style scoped>
.wid {
    max-width: 1670px;
}
.v-progress-circular {

    margin: 1rem
}
.center {
  position: relative;
}

.centerSpinner {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.srcrev {
    position: relative;
}
.srcabc {
    position: absolute;
    top: 49px;
    width: 100%;
    max-height: 240px;
    overflow: hidden;
}

.selected {
    background-color: #ececf1;
}

.pointer {
    cursor: pointer;
}


/* SCROLLBAR */
::-webkit-scrollbar {
    width: 7px;

}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 53.3%, .4);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #888;
}
</style>

