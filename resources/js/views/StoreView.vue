<template>
        <v-layout wrap ma-0>

            <!--
            *****************************************************************
            *                                                               *
            *           ADD SPINNER FIRST IN NEWLY CREATE PROJECT           *
            *                                                               *
            *****************************************************************
            *
            *
            *
            -->
            <!-- ===   Spinner   === -->

            <v-flex xs12 sm12 md12 lg12   class="mx-auto width" >
                 <v-card class="mb-3 background-shadow">
                     <div>
                        <div class="shopShutter">
                            <v-img
                                v-if="editImg"
                                :src="editImg"
                                aspect-ratio="2.75"
                            ></v-img>
                            <v-img
                                v-else-if="getStoreviewInfo.str_img"
                                :src="getStoreviewInfo.str_img"
                                aspect-ratio="2.75"
                                @click.native="dialogImage = true"
                                class="pointer"
                            ></v-img>
                            <v-img
                                v-else
                                :src="mainImg"
                                aspect-ratio="2.75"
                            ></v-img>
                        <input type="file" accept="image/*" class="d-none"  @change="changeShoplookImg" id="imgFile">
                        <v-btn
                            v-if="owner && changeImg == false"
                            small
                            color="primary"
                            class="imgBtn"
                            dark
                            @click="btnForChangeShoplookImg"
                        ><v-icon class="ml-0 mr-2" small right dark>photo_camera</v-icon>Edit</v-btn>
                            <div class="imgBtn" v-if="owner && changeImg == true">
                                <v-btn

                                    small
                                    color="success"
                                    dark
                                    @click="doneChangeShoplookImg"
                                    >ok</v-btn>
                                <v-btn
                                    small
                                    color="error"
                                    dark
                                    @click="cancelChangeShoplookImg"
                                    >cancel</v-btn>

                            </div>
                        </div>
                     </div>

                     <!-- ==================================   DIALOG IMAGE   ============================================ -->

                        <v-flex xs12 v-if="dialogImage">
                            <v-layout justify-center>
                                <v-dialog v-model="dialogImage" max-width="960px">
                                    <v-card>
                                        <v-img  :src="getStoreviewInfo.str_img != null ? getStoreviewInfo.str_img : ''"  contain></v-img>
                                    </v-card>
                                </v-dialog>
                            </v-layout>
                        </v-flex>

                    <v-card-title primary-title>
                    <div>
                        <div class="title mb-0  wordBreak">{{ getStoreviewInfo.store_name }}</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-rating
                            v-model="getStoreviewInfo.rating"
                            color="yellow darken-3"
                            background-color="grey darken-1"
                            empty-icon="$vuetify.icons.ratingFull"
                            half-increments
                            hover
                            small
                            readonly
                            ></v-rating>
                            <span>({{ getStoreviewInfo.totalReviews }})</span>

                        <v-spacer></v-spacer>
                        <v-btn  @click="show = !show" flat color="primary" small >
                            {{ show ? 'Hide Info' : 'Show Info' }}
                        </v-btn>
                        <!-- <v-btn icon @click="show = !show" color="orange" dark small >
                            <v-icon>{{ show ? 'fas fa-angle-up' : 'fas fa-angle-down' }}</v-icon>
                        </v-btn> -->
                    </v-card-actions>
                 </v-card>

                    <v-slide-y-transition>
                    <div  v-show="show">
                        <!-- <v-container grid-list-md fluid> -->
                            <v-layout wrap>
                                <v-flex xs12 lg6 class="px-1">
                                    <v-card flat class="pa-3 background-shadow">
                                            <v-card flat class="">
                                                <v-layout  wrap align-center>
                                                    <v-flex xs12 d-flex v-if="owner">
                                                            <v-spacer></v-spacer>
                                                            <v-flex xs4 lg2>
                                                                <v-list-tile-sub-title
                                                                    class="forSpanClick"
                                                                >
                                                                    <v-menu bottom left :close-on-content-click="false">
                                                                        <!-- <v-btn slot="activator" icon>
                                                                            <v-icon>settings</v-icon>
                                                                        </v-btn> -->
                                                                            <!-- <v-icon slot="activator">settings</v-icon> -->
                                                                        <div class="brdBtm" slot="activator" >
                                                                            Storeview Setting
                                                                        </div>

                                                                        <v-list>
                                                                            <v-list-tile  @click="editStoreview">
                                                                                <v-list-tile-title>Edit Storeview</v-list-tile-title>
                                                                            </v-list-tile>
                                                                            <v-list-tile  @click="deletStoreview">
                                                                                <v-list-tile-title>Delete Storeview</v-list-tile-title>
                                                                            </v-list-tile>

                                                                        </v-list>
                                                                    </v-menu>
                                                                </v-list-tile-sub-title>

                                                            </v-flex>
                                                    </v-flex>
                                                    <v-flex xs2 sm1 md1 lg1>
                                                        <v-icon >fas fa-store-alt</v-icon>
                                                    </v-flex>

                                                    <v-flex xs10 sm11 md11 lg11>
                                                        <v-card-text class="py-2 ftz-16">
                                                            {{ getStoreviewInfo.store_address }}
                                                        </v-card-text>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>

                                            <v-card flat class="">
                                                <v-layout  wrap align-center>
                                                    <v-flex xs2 sm1 md1 lg1>
                                                        <v-icon >fas fa-city</v-icon>
                                                    </v-flex>

                                                    <v-flex xs10 sm11 md11 lg11>
                                                        <v-card-text class="py-2 ftz-16" >
                                                            <span>{{ getStoreviewInfo.area ? getStoreviewInfo.area.name : '' }}</span>
                                                            <v-list-tile-sub-title>{{ getStoreviewInfo.city ? getStoreviewInfo.city.name : '' }}</v-list-tile-sub-title>
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
                                                            <span>{{ getStoreviewInfo.state ? getStoreviewInfo.state.name : '' }}</span>
                                                            <v-list-tile-sub-title>{{ getStoreviewInfo.country ? getStoreviewInfo.country.name : '' }}</v-list-tile-sub-title>
                                                        </v-card-text>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>

                                            <v-card flat class="">
                                                <v-layout  wrap align-center>
                                                    <v-flex xs2 sm1 md1 lg1>
                                                        <v-icon >fas fa-phone</v-icon>
                                                    </v-flex>

                                                    <v-flex xs10 sm11 md11 lg11>
                                                        <v-card-text class="py-2 ftz-16">
                                                            <span>{{ getStoreviewInfo.contact_number ? getStoreviewInfo.contact_number : 'Add Contact Number' }}</span>
                                                        </v-card-text>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>

                                            <v-card flat class="">
                                                <v-layout  wrap align-center>
                                                    <v-flex xs2 sm1 md1 lg1>
                                                        <v-icon >fas fa-envelope</v-icon>
                                                    </v-flex>

                                                    <v-flex xs10 sm11 md11 lg11>
                                                        <v-card-text class="py-2 ftz-16">
                                                            <span>{{ getStoreviewInfo.contact_email ? getStoreviewInfo.contact_email : 'Add Contact Email Address' }}</span>
                                                        </v-card-text>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>

                                            <v-card flat class="">
                                                <v-layout  wrap align-center>
                                                    <v-flex xs2 sm1 md1 lg1>
                                                        <v-icon >fas fa-server</v-icon>
                                                    </v-flex>

                                                    <v-flex xs10 sm11 md11 lg11>
                                                        <v-card-text class="py-2 ftz-16">
                                                            <span>{{ getStoreviewInfo.website ? getStoreviewInfo.website : 'Add Website'}}</span>
                                                        </v-card-text>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>
                                    </v-card>

                                </v-flex>

                                <!-- =========================================================-->
                                <!-- Reviews Block -->
                                <!-- =========================================================-->

                                <v-flex xs12 lg6 class="px-1">
                                    <v-card  class="background-shadow">
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <v-card-title class="py-3 brd">
                                                    <span class="py-3"><strong>Reviews</strong></span>
                                                    <v-spacer></v-spacer>
                                                    <v-btn v-if="owner == false" depressed small flat color="primary" @click.native="openRatingDialog">Rate This Storeview</v-btn>
                                                </v-card-title>

                                                    <div class="cardScroll">
                                                        <template v-for="(review, i) in reviews" >
                                                            <v-card :key="review.id" flat class="py-1">
                                                                <v-card-text class="py-2 align-center">
                                                                    <v-icon class="mr-3">fas fa-user</v-icon>
                                                                    <span>{{ review.customer }}</span>
                                                                    <span class="ml-3 red--text">{{ review.star }}★</span>
                                                                </v-card-text>
                                                                <v-card-text class="py-2">

                                                                    {{ review.review }}
                                                                </v-card-text>
                                                                <v-divider v-if="reviews != null && reviews.length > i+1" ></v-divider>
                                                            </v-card>
                                                        </template>
                                                    </div>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-card v-if="reviews == 0" flat>
                                                    <v-card-text >
                                                        No Reviews Yet!
                                                    </v-card-text>
                                                </v-card>

                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        <!-- </v-container> -->

                        <!-- ================================================= -->
                            <!-- ===   RATING FORM DIALOG   === -->
                            <!-- ================================================= -->

                            <v-layout justify-center v-if="ratingDialog">
                                <v-dialog v-model="ratingDialog" persistent max-width="500">
                                    <ReviewComp
                                        @rating="rating =$event"
                                        @ratingHeading="ratingHeading =$event"
                                        @ratingDescription="ratingDescription =$event"
                                    ></ReviewComp>
                                </v-dialog>
                            </v-layout>

                        <!-- =-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-==-=-=-=-=-=-=-=-=-=-=-= -->

                        <!-- <v-divider></v-divider> -->
                        <v-flex xs12 lg12 >
                            <v-card flat class="my-3 background-shadow">
                                <v-card-text>
                                    <h3>About</h3>
                                    <p class="ftz-16">
                                    {{ getStoreviewInfo.about_us }}
                                    </p>
                                </v-card-text>
                            </v-card>

                        </v-flex>
                    </div>
                    </v-slide-y-transition>
                <!-- </v-card > -->

                <!-- ********************************************* -->
                <!-- ** All, SELL ETC... ** -->
                <!-- ********************************************* -->

               <!--  <v-card class="mb-4 pa-0  background-shadow" >

                  <v-layout  wrap  >

                    <v-flex pa-0 xs4 sm2 md2 lg2  >

                            <v-card-actions >
                                <v-btn
                                     id="0"
                                    flat color="orange"
                                    class="btnFroCarSelect "
                                     @click.prevent="wanttoclick($event)"
                                >
                                        All
                                    </v-btn>
                            </v-card-actions>

                    </v-flex>
                  </v-layout>
                </v-card> -->

                <v-card class=" background-shadow hidden-md-and-down mb-3">

                  <v-layout  wrap  justify-start>


                    <!-- <v-flex xs6 sm2 md2 lg2 v-if="getStoreviewInfo.prd_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(0)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Products</span>  <span> ({{ getStoreviewInfo.prd_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2 v-if="getStoreviewInfo.snb_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(1)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Service / Bussiness</span>  <span> ({{ getStoreviewInfo.snb_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs6 sm2 md2 lg2 v-if="getStoreviewInfo.prp_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(2)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Property</span>  <span> ({{ getStoreviewInfo.prp_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex  xs6 sm2 md2 lg2 v-if="getStoreviewInfo.edu_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(3)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Education</span>  <span> ({{ getStoreviewInfo.edu_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2 v-if="getStoreviewInfo.utm_count != 0">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(4)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Used Items</span>  <span> ({{ getStoreviewInfo.utm_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2 v-if="getStoreviewInfo.inv_count != 0  && getStoreviewInfo.inv_count != null">
                        <v-card-actions >
                            <v-btn
                                flat color="orange"
                                class="btnFroCarSelect "
                                @click.native="wanttoclick(5)"
                                active-class
                                block
                            >
                                    <span class="pr-1">Inventory Items</span>  <span> ({{ getStoreviewInfo.inv_count }})</span>
                                </v-btn>
                        </v-card-actions>
                    </v-flex> -->
                    <template v-for="(tile, i) in catBtns" >
                        <v-flex xs6 sm2 md2 lg2  v-if="tile.count != 0" :key="tile.id">
                            <v-card-actions >
                                <v-btn
                                    flat color="orange"
                                    class="btnFroCarSelect "
                                    @click.native="wanttoclick(i)"
                                    active-class
                                    block
                                >
                                        <span class="pr-1">{{ tile.text }}</span>  <span> ({{ tile.count }})</span>
                                    </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </template>
                        <v-spacer></v-spacer>
                            <v-card-actions v-if="owner">
                                <v-list-tile-sub-title class="forSpanClick" @click="addProduct">Upload New Product</v-list-tile-sub-title>
                            </v-card-actions>
                  </v-layout>
                </v-card>

                <!-- ********************************************* -->
                <!-- ** Products ** -->
                <!-- ********************************************* -->
                <!-- <v-container fluid grid-list-md> -->
                    <v-layout wrap >
                        <v-flex xs12 lg12>
                            <v-card flat class="text-xs-center pa-4 my-3" v-if="apiProductsFilter.length == 0 && loading">
                                <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="gray"
                                    indeterminate
                                    class="v-progress-circular"
                                ></v-progress-circular>
                            </v-card>

                            <v-card v-else-if="apiProductsFilter.length == 0 && !loading" class="background-shadow mb-4" >
                                <v-card-title primary-title >
                                    <h1 class="mx-auto">No Items Here...! </h1>
                                </v-card-title>
                            </v-card>

                            <v-card v-else  class="background-shadow mb-4" >
                                <InvCard v-if="invComp" :info="apiProductsFilter"></InvCard>
                                <app-card-1 v-else :info="apiProductsFilter" :propStr_id="id" :propOwner="owner" :propStoreviewInfo="getStoreviewInfo"></app-card-1>
                            </v-card>

                        </v-flex>
                        <!-- <v-flex xs12 lg2 class="px-1" v-if="owner">
                            <v-card flat class="background-shadow post">
                                <v-list>
                                    <div v-for="tile in tiles" :key="tile.title">
                                        <v-list-tile
                                        @click="tile.clk"
                                        >

                                        <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                                        </v-list-tile>
                                        <v-divider v-if="tile.divider == true"></v-divider>
                                    </div>
                                </v-list>
                            </v-card>
                        </v-flex> -->
                    </v-layout>

                        <v-bottom-nav
                            :active.sync="bottomNav"
                            :value="true"
                            fixed
                            height="46"
                            class="hidden-md-and-up"
                            >
                            <v-btn
                                color="orange"
                                flat
                                block
                                @click="sheet = true"
                                small
                                ref="btmNav"
                                :value="bottomNav"
                            >
                                <span>{{ bottomNav }}</span>
                                <!-- <v-icon>history</v-icon> -->
                            </v-btn>

                            <!-- <v-btn
                                color="teal"
                                flat
                                value="favorites"
                            >
                                <span>Favorites</span>
                                <v-icon>favorite</v-icon>
                            </v-btn>

                            <v-btn
                                color="teal"
                                flat
                                value="nearby"
                            >
                                <span>Nearby</span>
                                <v-icon>place</v-icon>
                            </v-btn> -->
                            </v-bottom-nav>

                    <!-- ============================   Sheet   ======================================== -->

                    <v-layout  justify-center >
                        <v-dialog v-model="sheet"  max-width="500">
                            <!-- <v-btn

                                    bottom
                                    fab
                                    right
                                    color="pink"
                                    dark
                                    fixed
                                    slot="activator"
                                    style="background: linear-gradient(to right,#f12711,#f5af19)"
                                    class="hidden-md-and-up"
                                    >
                                    <v-icon>list</v-icon>
                                </v-btn> -->
                            <!-- <v-btn

                                    bottom
                                    right
                                    color="pink"
                                    dark
                                    fixed
                                    slot="activator"
                                    style="background: linear-gradient(to right,#f12711,#f5af19)"
                                    class="glow hidden-md-and-down"
                                    >
                                    <v-icon left>list</v-icon>
                                    <v-spacer></v-spacer>
                                    option
                                </v-btn> -->
                                <v-card >
                                    <v-card>

                                        <v-flex xs12 d-flex v-if="owner">
                                            <v-spacer></v-spacer>
                                            <v-flex xs5 lg2>

                                                <v-card-actions>

                                                    <v-list-tile-sub-title class="forSpanClick" @click="addProduct">Upload New Product</v-list-tile-sub-title>
                                                </v-card-actions>

                                            </v-flex>
                                        </v-flex>

                                        <template v-for="(tile, i) in catBtns" >
                                            <v-flex xs12 sm2 md2 lg2 v-if="tile.count != 0" :key="tile.id">
                                                <v-card-actions >
                                                    <v-btn
                                                        flat color="orange"
                                                        class="btnFroCarSelect "
                                                        @click.native="wanttoclick(i)"
                                                        active-class
                                                        block
                                                    >
                                                            <span class="pr-1">{{ tile.text }}</span>  <span> ({{ tile.count }})</span>
                                                        </v-btn>
                                                </v-card-actions>
                                            </v-flex>
                                        </template>
                                        <!-- <template v-for="(tile, i) in catButtons" >
                                            <v-flex xs12 sm2 md2 lg2 v-if="crtFro[i] != 0" :key="tile.id">
                                                <v-card-actions >
                                                    <v-btn
                                                        flat color="orange"
                                                        class="btnFroCarSelect "
                                                        @click.native="wanttoclick(i)"
                                                        active-class
                                                        block
                                                    >
                                                            <span class="pr-1">{{ tile.text }}</span>  <span> ({{ crtFro[i] }})</span>
                                                        </v-btn>
                                                </v-card-actions>
                                            </v-flex>
                                        </template> -->

                                        <!-- <v-list>
                                                <v-list-tile
                                                v-if="owner"
                                                @click.native="addProduct"
                                                >

                                                <v-list-tile-title class="forSpanClick" >Upload New Product </v-list-tile-title>
                                                </v-list-tile>
                                            <div v-for="(tile, i) in catButtons" :key="tile.id">

                                                <v-list-tile
                                                @click.native="wanttoclick(i)"
                                                v-if="crtFro[i] > 0"
                                                >

                                                <v-list-tile-title > {{ tile.text }} ({{ crtFro[i] }})</v-list-tile-title>
                                                </v-list-tile>
                                            </div>
                                        </v-list> -->
                                    </v-card>
                                </v-card>
                        </v-dialog>
                    </v-layout>
                    <!-- <v-layout  justify-center v-if="owner">
                        <v-dialog v-model="sheet"  max-width="500">
                            <v-btn
                                    fab
                                    bottom
                                    right
                                    color="pink"
                                    dark
                                    fixed
                                    slot="activator"
                                    style=" background: linear-gradient(to right,#fc00ff,#00dbde);"
                                    >
                                    <v-icon>list</v-icon>
                                </v-btn>
                                <v-card class="pa-1">
                                    <v-card>
                                        <v-list>
                                            <div v-for="tile in tiles" :key="tile.title">
                                                <v-list-tile
                                                @click="tile.clk"
                                                >
                                                <v-list-tile-avatar>
                                                    <v-avatar size="32px" tile>
                                                    <img
                                                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                                        :alt="tile.title"
                                                    >
                                                    <v-icon>{{ tile.icon }}</v-icon>
                                                    </v-avatar>
                                                </v-list-tile-avatar>
                                                <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                                                </v-list-tile>
                                                <v-divider v-if="tile.divider == true"></v-divider>
                                            </div>
                                        </v-list>
                                    </v-card>
                                </v-card>
                        </v-dialog>
                    </v-layout> -->

                <!-- </v-container> -->


                <!-- ===================  Item From Other Storeview, Edit Dialog   ======================= -->

        <v-layout justify-center>
            <v-dialog v-if="dialog" v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-card>
                    <v-toolbar dark fixed color="primary" class="text-xs-center mb-3">
                        <v-flex xs12 lg8 class="mx-auto ">
                        <v-card-actions>
                            <v-toolbar-title>{{ editTitle }}</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon @click.native="dialog = false" dark>
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-card-actions>

                        </v-flex>
                    </v-toolbar>

                    <!-- ===   Spinner   === -->

                    <v-card flat class="text-xs-center pa-5 mt-5" v-if="getLoadingSpinner">
                        <v-progress-circular :size="70" :width="7" color="gray" indeterminate class="v-progress-circular"></v-progress-circular>
                    </v-card>
                    <!-- ===   Product Edit Form   === -->

                    <v-flex v-else xs12 lg8 class="mx-auto pt-5 mt-5">
                        <div v-if="productEdit">
                            <ProductEditForm :data="data" :propWhichSeleced="whichSeleced" :propInvPrcMatch="invPrcMatch"></ProductEditForm>
                        </div>
                        <div v-if="serviceBusinessEdit">
                            <ServiceUpdateForm :data="data" :propWhichSeleced="whichSeleced"></ServiceUpdateForm>
                        </div>
                        <div v-if="propertyEdit">
                            <PropertyUpdateForm :data="data" :propWhichSeleced="whichSeleced"></PropertyUpdateForm>
                        </div>

                        <div v-if="educationEdit">
                            <EducationUpdateForm :data="data" :propWhichSeleced="whichSeleced"></EducationUpdateForm>
                        </div>

                        <div v-if="usedItemEdit">
                            <UsedItemUpdateForm :data="data" :propWhichSeleced="whichSeleced"></UsedItemUpdateForm>
                        </div>
                    </v-flex>
                </v-card>
            </v-dialog>
        </v-layout>

            <!-- ==============   Delete Dialog   ========================= -->

            <v-layout justify-center>
                <v-dialog v-model="deleteDialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                    <v-card>
                        <v-toolbar dark fixed color="error" class="text-xs-center mb-3">
                            <!-- <v-btn icon @click.native="dialog = false" dark>
                                <v-icon>close</v-icon>
                            </v-btn> -->
                            <v-flex xs12 lg8 class="mx-auto ">
                            <v-card-actions>
                                <v-toolbar-title>Delete</v-toolbar-title>

                                <v-spacer></v-spacer>

                                <!-- <v-btn icon @click.native="dialog = false" dark>
                                    <v-icon>close</v-icon>
                                </v-btn> -->
                            </v-card-actions>

                            </v-flex>
                        </v-toolbar>
                        <v-card flat class="text-xs-center pa-4" v-if="deleteSpinner">
                            <v-progress-circular :size="70" :width="7" color="gray" indeterminate class="v-progress-circular"></v-progress-circular>
                        </v-card>
                        <v-flex v-else xs12 lg8 class="mx-auto ">
                            <DeleteProductComp :data="data" :propWhichSeleced="whichSeleced"></DeleteProductComp>
                        </v-flex>
                    </v-card>
                </v-dialog>
            </v-layout>

                <!-- ==============   Edit Storeview Dialog   ========================= -->

                <v-layout  justify-center v-if="storeviewEditDealog">
                    <v-dialog v-model="storeviewEditDealog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                        <v-card>
                            <v-toolbar light >
                                <!-- <v-btn icon @click.native="dialog = false" dark>
                                    <v-icon>close</v-icon>
                                </v-btn> -->
                                <v-toolbar-title class=" mx-auto">Edit Storeview</v-toolbar-title>
                                <!-- <v-spacer></v-spacer> -->
                            </v-toolbar>
                            <v-card flat class="text-xs-center pa-4" v-if="deleteSpinner">
                                    <v-progress-circular
                                        :size="70"
                                        :width="7"
                                        color="gray"
                                        indeterminate
                                        class="v-progress-circular"
                                    ></v-progress-circular>
                                </v-card>
                            <v-flex v-else xs12 lg8 class="mx-auto ">
                                <EditStoreviewForm
                                :propData="getStoreviewInfo"
                            ></EditStoreviewForm>
                            </v-flex>
                        </v-card>
                    </v-dialog>
                </v-layout>

                    <!-- ===================   DELETE STOREVIEW DIALOG   ============================= -->

                    <v-layout  justify-center v-if="deletDialog">
                        <v-dialog v-model="deletDialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                            <v-card>
                                <v-toolbar dark color="error">
                                    <!-- <v-btn icon @click.native="deletDialog = false" dark>
                                        <v-icon>close</v-icon>
                                    </v-btn> -->
                                    <v-toolbar-title>Delete Storeview</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <!-- <v-toolbar-items>
                                        <v-btn dark flat @click.native="deletDialog = false">cancel</v-btn>
                                    </v-toolbar-items> -->
                                </v-toolbar>

                                <v-layout mt-4>
                                    <v-flex xs12 sm6 offset-sm3>
                                    <v-card >
                                            <v-card-title class="mb-3">
                                                <v-flex xs12 align-end flexbox>
                                                    <span class="subheading">Are you Sure To Delete Storeview ?</span><br>
                                                </v-flex>
                                            </v-card-title>
                                            <v-img
                                                v-if="getStoreviewInfo.str_img"
                                                :src="getStoreviewInfo.str_img"
                                                aspect-ratio="2.75"
                                            ></v-img>
                                            <v-img
                                                v-else
                                                class="white--text"
                                                aspect-ratio="2.75"
                                                :src="mainImg"
                                            ></v-img>

                                            <v-card-title >
                                                <v-flex xs12 align-end flexbox>
                                                    <span class="subheading">{{ getStoreviewInfo.store_name }}</span><br>
                                                </v-flex>
                                                <div>
                                                    <span class="body-2">{{getStoreviewInfo.area.name}}, {{getStoreviewInfo.city.name}}</span><br>
                                                    <span class="body-2">{{getStoreviewInfo.state.name}}, {{getStoreviewInfo.country.name}}</span>
                                                </div>
                                            </v-card-title>
                                        <v-card-actions>
                                        <v-btn block small flat color="orange" @click.native="confirmDeleteStoreview">Delete</v-btn>
                                        <v-btn block small flat outline color="error" @click.native="deletDialog = false">cancel</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-dialog>
                    </v-layout>

                    <!-- =========================   Info Dialog   ======================== -->

                    <v-layout justify-center >
                        <v-dialog v-if="infoDialog" v-model="infoDialog" persistent max-width="500">
                            <v-card class="pa-1">
                                <!-- <v-card-title class="headline">headline</v-card-title> -->
                                <v-alert
                                    v-if="infoDialogText != null"
                                    :value="true"
                                    type="success"
                                    >
                                        {{ infoDialogText }}
                                    </v-alert>
                                        <v-alert
                                            v-if="infoAllreadyIn != null"
                                            :value="true"
                                            type="info"
                                        >
                                            {{ infoAllreadyIn }}
                                        </v-alert>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" flat @click.native="infoDialog = false">Ok</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-layout>

            </v-flex>

        </v-layout>
</template>

<script>
import {eventBus} from '../app.js'
import { selectSearchRoute } from '../selectproductmixin.js'
import { StoreviewProductsMixin } from '../storeviewproductsmixin.js'
import { ItemEditDeleteMixin } from '../itemEditDeleteMixin.js'
import AppCard from './../components/AppCard'
import AppCard1 from './../components/AppCard.1'
import EditStoreviewForm from './StoreviewChildren/StoreviewEditForm'
import ReviewComp from '../components/Review/ReviewComp'
import InvCard from '../components/InvCard'

import ProductEditForm from '../components/forms/ProductEditForm'
import DeleteProductComp from '../components/DeleteProductComp'
import ServiceUpdateForm from '../components/forms/ServiceEditForm'
import EducationUpdateForm from '../components/forms/EducationEditForm'
import UsedItemUpdateForm from '../components/forms/UsedItemEditForm'
import PropertyUpdateForm from '../components/forms/PropertyEditForm'

export default {
    components: {
        AppCard,
        AppCard1,
        EditStoreviewForm,
        ReviewComp,
        InvCard,
        ProductEditForm,
        DeleteProductComp,
        ServiceUpdateForm,
        EducationUpdateForm,
        UsedItemUpdateForm,
        PropertyUpdateForm
    },
    mixins:[selectSearchRoute, StoreviewProductsMixin, ItemEditDeleteMixin],
    props: ['id'],
    created() {
         //this.loadProducts();
         eventBus.$on('storeviewId', (data) => {
             //return this.signinDialog = data;
             return this.gotostore(data)
        });

        eventBus.$on('submitRating', (data) => {

            this.submitRating();
        });
        eventBus.$on('cancelRating', (data) => {

            this.cancelRating();
        });
        eventBus.$on('noStore', (data) => {

            if(data == 404) {

                this.$router.push('/404');
            }
        });

    },
    mounted () {

           // console.log(this.$vuetify.breakpoint)
            // this.gotostore(this.id);
             //this.getStoreviewInfo;
             //this.getUserInfo;

        },
    data() {
        return {
            owner: false,
            storeviewEditDealog: false,
            otherStrItemDialog: false,
            deletDialog: false,
            ratingDialog: false,
            invComp: false,
            dataForEdit: {},
            storeView: {},

            dialogImage: false,

             /* =============   review   ==================== */
            rating: 0,
            ratingHeading: '',
            ratingDescription: '',
            reviewBlock: false,
            reviews: [],

            user : null,

            editImg: null,
            editRawImg: null,
            changeImg: false,

            bottomNav: 'Products',

            /* mainImg: require('../../assets/shopviewimage.jpg') ,
            dialog: false,
            count: 4,
            show: true,
            apiProducts: [],
            apiServices: [],
            apiProperty: [],
            apiEducation: [],
            apiUsedItems: [],
            apiProductsFilter: [],
            page: '',
            sellBtn: null,
            rentBtn: null,
            servicesBtn: null,
            educationBtn: null,
            professionBtn: null,
            rating: 4.5,
            sheet: false, */
      tiles: [
        { img: 'keep.png',icon: 'cloud_upload', title: 'Upload New Product', clk: this.addProduct, divider: true },
        { img: 'inbox.png', icon: 'cloud_upload', title: 'Edit / Delete Product', clk: this.editDeleteProduct, divider: true },
        { img: 'hangouts.png', icon: 'cloud_upload', title: 'Edit Storeview', clk: this.editStoreview, divider: true },
        // { img: 'messenger.png', icon: 'cloud_upload', title: 'Messenger', clk: '' , divider: true},
        { img: 'google.png', icon: 'cloud_upload', title: 'Delete Storeview', clk: this.deletStoreview, divider: false }
      ],
            items: {
                name: 'Name of Shop / Enterprise / Person',
                address: 'Shop / office / Home Address',
                country: 'India',
                state: 'Gujarat',
                city: 'Surat',
                area: 'Bataar',
                pincode: '395007',
                email: 'test@gmail.com',
                contact: '0261-123456,  9876543210,  8974563210',
                website: 'https://www.google.co.in/',
                about: 'hello!!!',
                isSellerForm: true
            },

            nameIcon: 'fas fa-signature',
             phoneNumber: {icon:'apps',contact: ['0261-123456', '9876543210', '8974563210']},

                isSellerForm: true,
                cards: [
                        {
                          title: 'Asian Canvas Shoes For Men  (Grey)',
                          src: 'https://rukminim1.flixcart.com/image/832/832/jcm9fgw0/shoe/4/2/e/skypy-31cgrypgrn-11-asian-grey-green-original-imaexnxfhwfd2zh3.jpeg?q=70',
                          Price: '494'
                         },
                        {
                          title: 'GHPC Solid Men\'s Hooded Blue T-Shirt',
                          src: 'https://rukminim1.flixcart.com/image/832/832/j752nww0/t-shirt/h/2/6/xl-ts900905-ghpc-original-imaex2ut7dbtsbhn.jpeg?q=70',
                          Price: '396' },
                        {
                            title: 'Glance Designs Festive & Party Printed Women\'s Kurti  (Multicolor)',
                            src: 'https://rukminim1.flixcart.com/image/832/832/jk01bww0/kurti/q/3/s/m-evk098-glance-designs-original-imaf7f8sgurzdfky.jpeg?q=70',
                            Price: '299' },
                        {
                            title: 'Funku Fashion Women Peach Heels',
                            src: 'https://rukminim1.flixcart.com/image/832/832/jku1ksw0/sandal/z/7/3/ff-d-1080-37-funku-fashion-peach-original-imaf8337hrejfyeu.jpeg?q=70',
                            Price: '494' },
                        {
                            title: 'Asus ROG Core i7 8th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics) GL504GM-ES152T Gaming Laptop  (15.6 inch, Black, 2.4 kg)',
                            src: 'https://rukminim1.flixcart.com/image/832/832/jll6xzk0/computer/3/v/s/asus-na-gaming-laptop-original-imaf8zqzvef2z5gn.jpeg?q=70',
                            Price: '1,39,990' },
                        {
                            title: 'AV Toys 5 Feet teddy bear - 152 cm  (Pink)',
                            src: 'https://rukminim1.flixcart.com/image/832/832/j9it30w0/stuffed-toy/w/t/m/5-feet-teddy-bear-152-av-toys-original-imaez9nfwj5msfyh.jpeg?q=70',
                            Price: '1,547' },
                        {
                            title: 'Apple iPhone XS Max (Gold, 64 GB)',
                            src: 'https://rukminim1.flixcart.com/image/832/832/jm9hfgw0/mobile/e/8/s/apple-iphone-xs-max-mt522hn-a-original-imaf97f6vzzxdq4p.jpeg?q=70',
                            Price: '1,09,900' }
                    ],
            catButtons: [
                            {id: 0, text: 'Product', clk:'', count: 'prd_count', divider: true},
                            {id: 1, text: 'Service / Bussiness', count: 'snb_count', clk: '', divider: true},
                            {id: 2, text: 'Property', clk: '', count: 'prp_count', divider: true},
                            {id: 3, text: 'Education', clk: '', count: 'edu_count', divider: true},
                            {id: 4, text: 'Used Items', clk: '', count: 'utm_count', divider: false},
                           // {id: 4, text: 'Education'},
                           // {id: 5, text: 'profession'}
                        ],


            direction: 'top',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
        }
    },
    methods: {
        loadProducts() {
            //this.$store.dispatch('disLoadProducts');
        },

    //     async gotostore(id) {

    //         await this.$store.dispatch('disStoreviewInfo', id).then(() => {
    //             // this.getProducts(this.$route.params.id);

    //             console.log(id)
    //             console.log(this.getStoreviewInfo.prd_count)


    //             });

    //   },

      addProduct() {

          this.sheet = false;

          this.$router.push({ name: 'whattoupload', query: {str_id: this.id}});
      },
      editDeleteProduct() {

          this.sheet = false;

          this.$router.push({ name: 'productslist', params: {id: this.$route.params.id}});
      },
      btnForChangeShoplookImg() {
          const button = document.querySelector('#imgFile');
          button.click();
      },
        changeShoplookImg: function (event) {


            // Reference to the DOM input element
            var input = event.target.files;
            // Ensure that you have a file before attempting to read it
            if (input[0]) {

                this.changeImg = true;

                let filename = input[0].name ;

                if(filename.lastIndexOf('.') <= 0 ) {
                   return alert('please choose valid file');
                }
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();

                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input[0]);

                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    //this.mainImg = reader.result;
                    this.editImg = reader.result;

            }
            // Start the reader job - read file as a data url (base64 format)
            //reader.readAsDataURL(input[0]);
            this.editRawImg = input[0];
            /* if(!this.test[0]){

                this.test.push(input[0]) ;
            }
            if(this.test[0]){

                this.test.push(input[0]) ;
            } */
            return event.target.value = '';

            }
            return;



                // Reference to the DOM input element
                var input = event.target;
                /* console.log(event) */
                let id = input.parentElement.id;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {

                    this.changeImg = true;
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    //this.mainImg = e.target.result;
                    this.editImg = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
                this.editRawImg = input.files[0];
            }
        },
        doneChangeShoplookImg() {

            let form = new FormData();

            /* --- singel image --- */

            form.append('image', this.editRawImg);

            form.append('str_id', this.getStoreviewInfo.store_id);


            axios.post('storeviewimagechange',  form)
                .then((res) => {
                    console.log(res);

                    if(res) {

                        this.gotostore(this.id);
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },
        cancelChangeShoplookImg() {

            this.editImg = null;
            this.editRawImg = null;
            this.changeImg = false;

        },
        editStoreview() {

            this.storeviewEditDealog = true;

            this.sheet = false;
        },
        deletStoreview() {

            this.deletDialog = true;
        },
        confirmDeleteStoreview() {

            let self = this;

            axios.delete('/storeview/'+ self.storeView.store_id)
                .then((res) => {
                    console.log(res.response);

                    this.$store.dispatch('disUserInfo')

                    this.$router.push({name: 'home'})

                })
                .catch((err) => {
                    console.log(err);
                })
        },
        /* ================   Rating Review   ==================================== */

        getReviewRating(link) {

             if(link) {

                 this.reviewBlock = true;

                 let a = link;// ? link : 'http://localhost:8000/api/products/' + this.$route.query.prid + '/reviews';

              axios.get(a)
                     .then((response) => {
                         console.log(response)

                         if(response) {

                            this.reviews = response.data.data;

                            this.ratingDialog = false;
                         }
                     })
                     .catch((errors) => {
                         console.log(errors.response)
                     })
             }


         },

         openRatingDialog() {

             if(localStorage.getItem('token')) {

                this.ratingDialog = true;

             } else {

                eventBus.$emit('signinDialog', true);
             }
         },
         submitRating() {

            if(localStorage.getItem('token')) {

                if(this.rating == 0) {

                    alert('Please Rate This Product');
                    return;
                }

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                let rating =new FormData();

                //let prdId = this.$route.query.prid;

                rating.append('str_id', this.getStoreviewInfo.store_id)

                rating.append('star', this.rating);

                if(this.ratingHeading != null || this.ratingHeading != '') {

                    rating.append('ratingHeading', this.ratingHeading);
                }

                if(this.ratingDescription != null || this.ratingDescription != '') {

                    rating.append('ratingDescription', this.ratingDescription);
                }

                axios.post(this.getStoreviewInfo.reviews_link, rating)
                    .then((res) => {
                        console.log(res);

                        if(res) {

                            this.getReviewRating(this.getStoreviewInfo.reviews_link);

                        }
                    })
                    .catch((err) => {
                        console.log(err.response);
                    });

            } else {

                eventBus.$emit('signinDialog', true);
            }


        },
        cancelRating() {

            this.rating = 0;

            this.ratingHeading = null;

            this.ratingDescription = null;

            this.ratingDialog = false;

        },

    },

    computed: {
        getStoreviewInfo() {
            //console.log(this.$store.getters.getStoreProducts);

            let str_vew = this.$store.getters.getStoreviewInfo;

            let loggedUser = this.getUserInfo;

            this.getReviewRating(str_vew.reviews_link);

            if(loggedUser !== null) {

                if(loggedUser.id == str_vew.user_id) {

                    this.owner = true;
                } else {
                    this.owner = false;
                }
            }

            return this.$store.getters.getStoreviewInfo;

        },
        getUserInfo() {
            //console.log(this.$store.getters.getStoreProducts);

            return this.user = this.$store.getters.getUserInfo;

        },
        catBtns() {

            return  [
                        {id: 0, text: 'Product', clk:'', count: this.getStoreviewInfo.prd_count, divider: true},
                        {id: 1, text: 'Service / Bussiness', count: this.getStoreviewInfo.snb_count, clk: '', divider: true},
                        {id: 2, text: 'Property', clk: '', count: this.getStoreviewInfo.prp_count, divider: true},
                        {id: 3, text: 'Education', clk: '', count: this.getStoreviewInfo.edu_count, divider: true},
                        {id: 4, text: 'Used Items', clk: '', count: this.getStoreviewInfo.utm_count, divider: false},
                    ];

            // return [this.getStoreviewInfo.prd_count, this.getStoreviewInfo.snb_count, this.getStoreviewInfo.prp_count, this.getStoreviewInfo.edu_count, this.getStoreviewInfo.utm_count];

            // return this.catButtons.map((item) => {
            //     return  this.getStoreviewInfo.prd_count, this.getStoreviewInfo.snb_count;
            // })
        }

    },
    watch: {
         '$route'(to, from){

             this.loading = true;

            this.id = to.params.id;
            this.apiProductsFilter = [],
            this.apiProducts = [],
            this.apiServices = [],
            this.apiProperty = [],
            this.apiEducation = [],
            this.apiUsedItems = [],
            this.gotostore(this.id);
            // this.getStoreviewInfo;
         },
        //  getStoreviewInfo() {
        //     this.changeItems();
        // },

         rating() {
             console.log(this.rating)
         },

     }
}
</script>

<style scoped>
/* * {
    letter-spacing: 0.03rem;
} */
.ftz-16 {
    font-size: 16px;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
}
li {
    list-style: none;
}

.title {
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 36px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.brd {

    border-bottom: 1px solid #e0e0e0;
}

.width {
    max-width: 1400px;
}

.post {
    position: sticky;
    top: 70px;
}

.shopShutter {
  position: relative;
}

.imgBtn{
  position: absolute;
  bottom: 10px;
  right: 10px;
  /* background: rgba(85, 85, 85, 0.7);
  border: none;
  color: #fff;
  width: 10%;
  cursor: pointer; */
}

.deleteCardTitleBG {
    background-color: rgba(0, 0, 0, 0.75);
}

.cardScroll {
    max-height: 220px;
    overflow-y: auto;
}

.glow {
    -webkit-animation: glowing 1500ms infinite;
    -moz-animation: glowing 1500ms infinite;
    -o-animation: glowing 1500ms infinite;
    animation: glowing 1500ms infinite;
}

@-webkit-keyframes glowing {
  0% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; -webkit-box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }
}

@-moz-keyframes glowing {
  0% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; -moz-box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
}

@-o-keyframes glowing {
  0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
}

@keyframes glowing {
  0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
}

/*  Small phones: from 0 to 480px */
@media only screen and (max-width: 480px) {
    .wordBreak {
         word-break: break-word;
    }

    /* .overflow {
         letter-spacing: 0.03rem;
    } */
    .mx480mnwth {
        min-width: 40px;
    }
    .mx480fnt {
        font-size: 18px;
    }
    .max480 {
        font-size: 12px;
        font-weight: 500;
    }
    .btnFroCarSelect{
        font-size: 12px;
    }
}
</style>
