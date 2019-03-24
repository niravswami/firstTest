<template>
    <div>
       <v-layout wrap justify-center>
           <v-flex xs12 lg12>
               <v-layout wrap justify-space-around>

                   <!-- ==========   Images   ======================= -->
                   <v-flex xs12 sm5 md5 lg4>
                        <div class="sticky">
                            <ImagesComp
                                    @mainImg="rawMainImg = $event"
                                    :propMainImg="mainImg"
                                    @imgArr="rawImgArr= $event"
                                    :propimgArr="data.images "
                                    @deleteImages="deleteImages = $event"
                            ></ImagesComp>
                        </div>
                    </v-flex>

                    <v-flex xs12 lg7 class="background-shadow ">

                        <!-- =================   Category For Product   =================================== -->

                        <div v-if="catp">
                            <!-- <hr> -->
                            <v-card xs12 lg12 class="" flat>
                                <v-card-text class="subheading font-weight-medium">
                                    Select Categories
                                </v-card-text>

                                <v-list>
                                    <v-layout  wrap >
                                        <div  v-for="(val, i) in catp" :key="i" >
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title >{{ val.name }} <span class="pl-2" v-if="catp.length !== i+1">></span></v-list-tile-title>

                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </div>
                                    </v-layout>
                                </v-list>

                                <v-flex xs12 lg12>
                                    <v-checkbox
                                        v-model="editCat"
                                        label="Edit Category"
                                        class="pl-2"
                                    ></v-checkbox>
                                    <v-flex xs12 lg12 v-if="editCat">
                                        <v-card class="pa-3">
                                            <v-card-text class="subheading font-weight-medium">
                                                Select Category
                                            </v-card-text>

                                            <v-autocomplete
                                                :items="categoryArr"
                                                v-model="category"
                                                clearable
                                                hide-no-data
                                                hide-details
                                                item-text="cat_names"
                                                item-value="id"
                                                label="Choose Category"
                                                color="orange darken-2"
                                                light
                                                @click.native="selectCategory"
                                                :loading="loading"
                                                box
                                            ></v-autocomplete>
                                        </v-card>
                                    </v-flex>
                                </v-flex>
                            </v-card>
                        </div> <!-- ======================          End Of Product Category         ===================== -->

                        <!-- =================   Category For Service And Business   =================================== -->

                        <v-card  class="pa-3" flat>
                            <v-card-text class="subheading font-weight-medium">
                                Select Service / Business
                            </v-card-text>
                                <v-combobox
                                    class="py-3"
                                    :items="categories"
                                    v-model="category"
                                    dense
                                    box
                                    hide-no-data
                                    hide-details
                                    item-text="name"
                                    item-value="id"
                                    label="Service / Business Category"
                                    @focus="getCategories"
                                    return-object
                                    color="orange darken-2"
                                    prepend-icon="fas fa-briefcase"
                                    no-data-text
                                    :loading="isLoading"
                                >
                            </v-combobox>
                        </v-card> <!-- ======================          End Of Service And Business Category         ===================== -->

                        <!-- =================   Category For Property   =================================== -->

                        <v-card flat class="pa-3">
                            <v-card-text class="subheading font-weight-medium">
                                Category
                            </v-card-text>

                            <v-select
                                box
                                :items="propertyCategory"
                                v-model="category"
                                size="4"
                                label="Category"
                                color="orange darken-2"
                                return-object
                                item-text="name"
                                item-value="id"
                            ></v-select>
                        </v-card> <!-- ======================          End Of Property Category         ===================== -->

                        <!-- =================   Category For Education   =================================== -->

                        <v-card  class="pa-3" flat>
                            <v-card-text class="subheading font-weight-medium">
                                Select
                            </v-card-text>
                                <v-combobox
                                class="py-3"
                                :items="catArr"
                                v-model="category"
                                :loading="isLoading"
                                box
                                hide-no-data
                                hide-details
                                item-text="name"
                                item-value="id"
                                label="School / Classes / Collage..."
                                return-object
                                color="orange darken-2"
                                prepend-icon="fas fa-chalkboard"
                                @focus="getEduCat"
                                dense
                            >
                            </v-combobox>
                        </v-card> <!-- ======================          End Of Education Category         ===================== -->

                        <!-- =================   Category For Education   =================================== -->

                        <v-card xs12 lg12 class="pa-3 " flat>
                            <v-card-text class="subheading font-weight-medium">
                                Categories
                            </v-card-text>
                            <v-list>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title >
                                            {{ parentCat ? parentCat.name : ''}} <span class="px-2" >></span> {{ childCat ? childCat.name : '' }}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>

                            <v-flex xs12 lg12>
                                <v-checkbox
                                    v-model="editCat"
                                    label="Edit Category"
                                    class="pl-2"
                                ></v-checkbox>

                                <div v-if="editCat">
                                    <v-card-text class="subheading font-weight-medium">
                                        Select Categories
                                    </v-card-text>

                                    <v-layout  wrap justify-space-around>
                                        <v-flex xs12 lg6 class="pa-2">
                                            <v-combobox
                                                v-model="fused"
                                                color="orange darken-2"
                                                :items="fusedCat"
                                                label="Main Category"
                                                box
                                                item-text="name"
                                                item-value="id"
                                                hide-details
                                                return-object
                                                :loading="isLoading"
                                                @focus="getFused"
                                            >
                                            </v-combobox>
                                        </v-flex>

                                        <v-flex xs12 lg6 class="pa-2">
                                            <v-combobox
                                                v-model="sused"
                                                :items="susedCat"
                                                label="Category"
                                                box
                                                item-text="name"
                                                item-value="id"
                                                color="orange darken-2"
                                                hide-details
                                                :disabled="fused == null"
                                            >
                                            </v-combobox>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </v-flex>
                        </v-card> <!-- ======================          End Of Used Item Category         ===================== -->

                        <!-- =================   Brand   =================================== -->

                        <div>
                            <brand-comp
                                @brand="brand = $event"
                                :propBrand="brand"
                            ></brand-comp>
                            <hr>
                        </div> <!-- ======================          End Of Used Item Category         ===================== -->

                        <!-- =================   Title   =================================== -->

                        <TitleComp
                            @title="title = $event"
                            :ttl="title"
                            @slug="slug = $event"
                            :propSlug="slug"
                            @highlights="highlights = $event"
                            :prpHighLights="highlights"
                            @descriptions="descriptions = $event"
                            :prpDescriptions="descriptions"
                            @keywords="keywords = $event"
                            :prpKeywords="keywords"
                        ></TitleComp> <!-- ======================          End Of Title         ===================== -->

                        <!-- =================   Show Price Or Cantact    =================================== -->

                        <PriceOrContactPrice
                            @radio="showPriceOrNot = $event"
                            :propShowPriceOrNot="showPriceOrNot"
                        ></PriceOrContactPrice>

                        <!-- =================   Amount For Product   =================================== -->

                        <!-- <AmountComp
                            @amount="amount = $event"
                            :prpAmount="amount"
                            @discount="discount = $event"
                            :prpDiscount="discount"
                            @offers="offers = $event"
                            :prpOffers="offers"
                            @previousPrice="previousPrice = $event"
                            :prpPreviousPrice="previousPrice"
                            @per="per = $event"
                            :propPer="per"
                        ></AmountComp> ======================          End Of Product Amount         ===================== -->

                        <!-- =================   Offers   =================================== -->

                        <v-card flat >

                            <div v-if="radios == '1'" >

                                <v-layout  wrap justify-space-around >
                                    <v-flex xs10 lg5 >


                                        <v-card-text class="subheading font-weight-medium">
                                            Price Details
                                        </v-card-text>
                                            <v-card flat class="">
                                                    <v-text-field
                                                        box
                                                        label="Enter Amount"
                                                        :error-messages="errors.collect('amount')"
                                                        data-vv-name="amount"
                                                        v-validate="{required: true, regex: /^(?=[^A-Za-z\s\-]+$).*[0-9].*$/}"
                                                        v-model="amount"
                                                        prepend-icon="fas fa-rupee-sign"
                                                        color="orange darken-2"
                                                    ></v-text-field>
                                                        <!-- v-validate="{required: true, regex: /^\d{1,8}(?:\.\d{1,4})?$/}" -->

                                                <v-layout  wrap justify-space-around>
                                                    <v-flex xs11 lg5>
                                                        <v-text-field
                                                            v-if="discountField == 1"
                                                            box label="Discount"
                                                            class="discountInput"
                                                            v-model="discount"
                                                            color="orange darken-2"
                                                            prepend-icon="fas fa-percent"
                                                            type="number"
                                                        ></v-text-field>

                                                        <v-select
                                                            v-else-if="discountField == 2"
                                                            :items="rentArr"
                                                            box
                                                            v-model="per"
                                                            label="Rent per"
                                                            color="orange darken-2"
                                                            prepend-icon="fas fa-slash"
                                                        ></v-select>

                                                        <v-select
                                                            v-else
                                                            :items="wholesaleArr"
                                                            box
                                                            v-model="per"
                                                            label="per"
                                                            color="orange darken-2"
                                                            prepend-icon="fas fa-slash"
                                                        ></v-select>

                                                    </v-flex>

                                                    <v-flex xs11 lg5>
                                                        <v-text-field
                                                            v-if="discountField == 1"
                                                            box
                                                            label="Previous Price If Any"
                                                            title="Previous Price If Any"
                                                            v-model="previousPrice"
                                                            color="orange darken-2"
                                                        ></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card>

                                    </v-flex>

                                    <v-flex xs10 lg5 class="">
                                        <v-card-text class="subheading font-weight-medium">
                                            Offers
                                        </v-card-text>


                                            <template v-for="(val, i) in offers">
                                                <v-card-actions :key="i" class="pa-0">
                                                    <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                                                    <span style="font-size: 14px; color: #ef6c3c"><i class="fas fa-tag"></i></span>
                                                    <v-card-text class="py-0 subheading">
                                                        {{ val }}
                                                    </v-card-text>
                                                    <v-btn flat icon color="pink">
                                                        <v-icon @click="deleteOffer(i)">close</v-icon>
                                                    </v-btn>
                                                </v-card-actions>
                                            </template>
                                            <v-flex xs12>
                                                <v-text-field box v-model="offer" label="Offer" @keyup.enter="pushOffer" color="orange darken-2" prepend-icon="fas fa-tag"></v-text-field>
                                            </v-flex>

                                            <v-card-actions>
                                                <v-btn outline small color="success" @click="pushOffer">Add More</v-btn>

                                            </v-card-actions>

                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card>

                    </v-flex>
               </v-layout>
           </v-flex>
       </v-layout>
    </div>
</template>
