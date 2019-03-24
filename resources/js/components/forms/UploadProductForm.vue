<template>
    <v-layout row wrap ma-0>
        <v-flex xs12 sm12 md12 lg12 >
            <v-layout row wrap ma-0>
                <v-flex xs12>
                    <v-form>
                        <v-layout row wrap justify-space-around ma-0>
                    <v-flex xs12 pb-4>
                        <v-card flat class="background-shadow">
                            <v-card-title primary-title class="headline">
                                Product Upload Form
                            </v-card-title>
                        </v-card>
                    </v-flex>
                            <v-flex xs12 sm12 md5 lg5>
                                <v-card flat class=" pa-2 background-shadow">

                                    <v-card-text class="title">
                                        What Do You Want to Do?
                                    </v-card-text>

                                    <v-flex xs12 lg12>
                                        <v-radio-group
                                            v-model="radiovalue"
                                            :mandatory="false"
                                            @change="seeval"
                                        >
                                                <v-layout row wrap px-4 >
                                            <template v-for="(val) in wantArr" >
                                                <v-flex xs12 :key="val.name">
                                                    <v-layout row wrap px-4 >
                                                        <v-flex xs12 lg4 >
                                                             <v-radio :label="val.name" :value="val.id"></v-radio>
                                                        </v-flex>

                                                        <v-flex xs12 lg8 >
                                                            <span class="f">(example:- Product, Properties, Cloths, Machines etc.)</span>
                                                        </v-flex>
                                                     </v-layout>
                                                </v-flex>
                                            </template>

                                                    <!-- ******************************************** -->

                                                </v-layout>


                                        </v-radio-group>
                                         <v-flex xs12 lg12 v-if="radiovalue">
                                                       <!--  <v-select
                                                            :items="wantCatArr"
                                                            v-model="wantCat"
                                                            label="Choose"               item-text="name"
                                                            item-value="id"
                                                            @change="wantArrChange"
                                                            return-object
                                                        ></v-select> -->
                                                        <v-autocomplete
                                                            :items="wantCatArr"
                                                            v-model="wantCat"
                                                            flat
                                                            class="py-3"
                                                            hide-no-data
                                                            hide-details
                                                            item-text="name"
                                                            item-value="id"
                                                            label="Choose"
                                                            @change="wantArrChange"
                                                            return-object

                                                        ></v-autocomplete>
                                                    </v-flex>



                                                    <v-flex xs12 v-if="wantCat == 'Other'">
                                                        <v-text-field  label="Other" ></v-text-field>
                                                    </v-flex>
                                       <!--  <v-radio-group v-model="radiovalue" :mandatory="false">

                                            <template v-for="(val, key , i) in firstOptions">
                                                <v-layout row wrap px-4 :key="i">

                                                    <v-flex xs12 lg4>
                                                        <v-radio :label="key" :value="key"></v-radio>
                                                    </v-flex>

                                                    <v-flex xs12 lg8>
                                                        <span class="f">{{ val.a }}</span>
                                                    </v-flex>

                                                    <v-flex xs12>
                                                        <v-select
                                                            :items="val.b"
                                                            v-model="value"
                                                            label="label"
                                                        ></v-select>
                                                    </v-flex>

                                                    <v-flex xs12>
                                                        <v-text-field name="name" label="Other" ></v-text-field>
                                                    </v-flex>

                                                </v-layout>
                                            </template>

                                        </v-radio-group> -->
                                    </v-flex>
                                </v-card>

                                <!-- ************************************* -->
                                <!-- ** Product Images ** -->
                                <!-- ************************************* -->

                               <v-flex xs12 sm12 md12 lg12 class="my-3">

                                    <v-card class="background-shadow post" flat>
                                        <v-card-text class=" title">
                                                    Upload Product Images
                                            </v-card-text>
                                        <v-img src="https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2pu5p3r48.jpeg?q=70" aspect-ratio="1" contain class="mb-2"></v-img>
                                        <v-divider></v-divider>
                                        <v-layout row wrap align-content-space-between justify-space-around pa-1 px-3>
                                            <template v-for="thumbimg in thumbImgs">
                                                <v-flex xs2 lg2 :key="thumbimg.img" style="border: 1px solid #000;">
                                                    <v-img :src="thumbimg.img" aspect-ratio="1" contain></v-img>
                                                </v-flex>
                                            </template>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-flex>

                            <!-- ********************************************** -->
                            <!-- ** Title And Price Box ** -->
                            <!-- ********************************************** -->

                            <v-flex xs12 sm12 md6 lg6>
                                <v-card flat class="pa-3 background-shadow">
                                    <v-flex xs12>
                                        <v-text-field
                                            label="title"
                                        ></v-text-field>
                                    </v-flex>

                                    <v-layout row wrap px-3>
                                        <v-flex xs12 sm6 md6 lg6 pr-1>
                                            <v-text-field
                                                label="Price"
                                            ></v-text-field>
                                            </v-flex>

                                            <v-flex xs12 sm6 md6 lg6 pl-1 v-if="radiovalue == '2'">
                                                <v-select
                                                    :items="rentOptions"
                                                    v-model="value2"
                                                    label="Rent Options"
                                                ></v-select>
                                            </v-flex>

                                    </v-layout>

                                    <v-layout row wrap px-3>
                                            <v-flex xs12 sm6 md6 lg6 pr-1>
                                                <v-checkbox label="(Inclusive Of All Taxes)" v-model="taxes" value=""></v-checkbox>
                                            </v-flex>
                                    </v-layout>

                                    <v-layout row wrap px-3 pr-1>
                                        <v-flex xs12 lg6>
                                            <v-flex xs12 lg12>
                                                <v-checkbox
                                                    label="If You Have Privious Price"
                                                    v-model="emailCheckbox"
                                                    hide-details
                                                    class="shrink mr-2"
                                                ></v-checkbox>
                                            </v-flex>
                                            <v-flex xs12 lg12>

                                                <v-text-field
                                                v-if="emailCheckbox"
                                                    label="Previous Price"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="Previous Price"
                                                    v-validate="'required'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>
                                        </v-flex>
                                        <v-flex xs12 lg6 pl-1>
                                            <v-flex xs12 lg12>
                                                <v-checkbox
                                                    label="Discount"
                                                    v-model="discount"
                                                    hide-details
                                                    class="shrink mr-2"
                                                ></v-checkbox>
                                            </v-flex>
                                            <v-flex xs12 lg12>

                                                <v-text-field
                                                v-if="discount"
                                                    label="Discount"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>

                                    <v-flex xs12 class="pt-3">
                                                <v-combobox
                                                v-model="keyWords"
                                                label="Add Keywords"
                                                multiple
                                                small-chips
                                                hint="Maximum of 15 tags"
                                            >
                                                <!-- <template slot="no-data">
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                                </template> -->
                                            </v-combobox>
                                                <v-card-text class="hintSize pt-0 body-2">
                                                    Press enter after each keywords e.g:- write 'key word' press ENTER
                                                </v-card-text>
                                            </v-flex>
                                </v-card>

                                <!-- ***************************************************** -->
                                <!-- ** Property Block ** -->
                                <!-- ***************************************************** -->

                                <v-card flat class="pa-3 mt-3 background-shadow" v-if="value2 == 'Property'">
                                    <v-layout row wrap px-3 justify-space-around>
                                        <v-flex xs12>
                                            <v-card-text class="pl-0 title">
                                               property Location
                                            </v-card-text>
                                        </v-flex>

                                            <v-flex xs12 lg12>

                                                <v-text-field
                                                    label="Full Address"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>

                                        <v-layout row wrap px-3 xs12 lg12 >
                                            <v-flex xs12 lg6 pr-1>
                                                <v-text-field
                                                    label="Area"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>

                                            <v-flex xs12 lg6 pl-1>
                                                <v-text-field
                                                    label="City"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>

                                        <v-layout row wrap px-3 xs12 lg12 >
                                            <v-flex xs12 lg7 pr-1>
                                                <v-text-field
                                                    label="State"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>

                                            <v-flex xs12 lg5 pl-1>
                                                <v-text-field
                                                    label="Pincode"
                                                    :error-messages="errors.collect('contact_email')"
                                                    data-vv-name="contact_email"
                                                    v-validate="'required|email'"
                                                    required
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>

                                    </v-layout>
                                </v-card>

                                <!-- ***************************************************** -->
                                <!-- ** Category Block ** -->
                                <!-- ***************************************************** -->

                                <v-card v-else flat class="pa-3 mt-3 background-shadow">
                                    <v-flex xs12>
                                            <v-card-text class="pl-0 title">
                                               Category
                                            </v-card-text>
                                        </v-flex>

                                        <v-flex xs12>
                                            <v-autocomplete
                                            class="py-3"
                                                :items="mainCategories"
                                                v-model="mainCategory"
                                                cache-items
                                                flat
                                                hide-no-data
                                                hide-details
                                                item-text="name"
                                                item-value="id"
                                                label="Select First Category"
                                                @change="seeval"
                                             ></v-autocomplete>

                                        </v-flex>

                                        <v-flex xs12 v-if="categories.length > 0">
                                            <v-autocomplete
                                            class="py-3"
                                                :items="categories"
                                                v-model="category"
                                                flat
                                                hide-no-data
                                                hide-details
                                                item-text="name"
                                                item-value="id"
                                                label="Select Second Category"
                                             ></v-autocomplete>
                                        </v-flex>

                                        <v-flex xs12 v-if="subcategories.length > 0">
                                            <v-autocomplete
                                            class="py-3"
                                                :items="subcategories"
                                                v-model="subcategory"
                                                item-text="name"
                                                cache-items
                                                flat
                                                hide-no-data
                                                hide-details
                                                label="Select Third Category"
                                             ></v-autocomplete>
                                        </v-flex>
                                </v-card>



                                <!-- ***************************************************** -->
                                <!-- ** Size Block ** -->
                                <!-- ***************************************************** -->

                                <v-flex xs12 v-if="value2 !== 'Property'">
                                    <v-card flat class="pa-3 mt-3 background-shadow">

                                        <v-checkbox label="Add sizes" v-model="sizeInput" value="value"></v-checkbox>

                                        <div v-if="sizeInput">
                                            <v-combobox
                                                v-model="size"
                                                :items="sizes"
                                                label="Add some tags"
                                                multiple
                                                small-chips
                                                :search-input.sync="search"
                                            >
                                                <template slot="no-data">
                                                <v-list-tile>
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>
                                                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>
                                                </template>
                                            </v-combobox>
                                                <v-card-text class="hintSize pt-0 body-2">
                                                    Press enter after each size e.g:- write 'XL' press ENTER
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-btn @click.prevent="showSize" color="success">text</v-btn>
                                                </v-card-actions>
                                        </div>
                                    </v-card>
                                </v-flex>

                                <!-- ************************************************** -->
                                <!-- ** Description Block ** -->
                                <!-- ************************************************** -->

                                <v-flex xs12 class="mt-3">
                                    <v-card class="pa-3 background-shadow">
                                        <v-flex xs12>
                                            <v-card-text class="pl-0 title">
                                                Description Block
                                            </v-card-text>
                                        </v-flex>

                                            <v-flex xs12>
                                                <v-layout row wrap px-3>
                                                    <v-flex xs12 lg4 class="px-2">
                                                        <v-text-field
                                                            name="name"
                                                            label="label"

                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 lg8 class="px-2">
                                                         <v-textarea
                                                            auto-grow
                                                            label="Default style"
                                                            rows="1"
                                                            v-model="one"
                                                        ></v-textarea>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-layout row wrap px-3>
                                                    <v-flex xs12 lg4 class="px-2">
                                                        <v-text-field
                                                            name="name"
                                                            label="label"

                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 lg8 class="px-2">
                                                         <v-textarea
                                                            v-model="two"
                                                            auto-grow
                                                            label="Default style"
                                                            rows="1"
                                                        ></v-textarea>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                         <v-btn flat block color="orange darken-1" dark>Add More Block</v-btn>
                                    </v-card>

                                </v-flex>
                            </v-flex>
                            <v-flex xs12>
                                <v-card class="pa-3 my-4 background-shadow">
                                    <v-card-actions>
                                        <v-btn outline  block color="orange darken-1" dark>Upload Product</v-btn>
                                        <v-btn flat block color="error">Cancel</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    created() {
        /* axios.get('http://localhost:8000/api/wanto')
        .then((response) => {

            this.wantArr = response.data
            console.log(response.data)

            if(this.wantArr.length > 0) {

                this.radiovalue = 1;
            }

        })
        .catch((errors) => console.log(errors))


        axios.get('http://localhost:8000/api/maincategory')
        .then((response) => {

            this.mainCategories = response.data.data

            console.log(response.data.data)

        })
        .catch((errors) => console.log(errors)) */
    },
    data() {
        return {
            radios: 1,
            wantArr1: ['Sell','Rent','Services','Education'],
            wantArr: [],
            want: '',
            items2: ['Retail','Wholesale','Property','Old Item', 'Other'],
            wantCatArr: [],
            wantCat: '',
            rentOptions: ['Hour', 'Day', 'Week', 'Month', 'Year'],
            rentSelected: '',
            value: '',
            value2: '',
            mainCategories: [],
            mainCategory: '',
            categories: [],
            category: '',
            subcategories: [],
            subcategory: '',
            radiovalue: '',
            firstOptions: {
                Sell: {a:'(example:- Product, Properties, Cloths, Machines etc.)',
                        b: ['Retail', 'WholeSale', 'Old (secondhand item)', 'Property']},
                Rent: {a: '(example:- Product, Properties, Cloths, Machines etc.)',
                        b: ['Property', 'Cloths', 'Lights', 'Vehicals', 'Other']},
                Services: {a: '(example:- Laundry, Internet Provider, etc.)',
                            b: ['Dry Cleaning', 'Pest Control', 'Internet Provider', 'water service', 'Vehical service', 'Catring / Food', 'Other' ]},
                Education: {a: '(example:- Classes, Tution, etc.)',
                            b: ['Tution Classes', 'Computer Education', 'Music Classes', 'Other']}
                },
            emailCheckbox: false,
            discount: false,
            taxes: '',
            categoryA: ['Men\'s', 'Women', 'Baby and Kids', 'Electronics', 'Home and Furniture', 'Sports', 'Books', 'car and Bike', 'Exercise and Fitness', 'Music', 'Movies and TV shows',    'Stationary', 'Gaming', 'Grocery', 'Health and Nutrition', 'Gourmet and Specialty Foods', 'Helmet and Riding Gear'],
            catASelected: '',

            thumbImgs: [
            {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2pu5p3r48.jpeg?q=70'},
            {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2rnzjfugg.jpeg?q=70'},
            {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/kurta/h/t/g/xxl-k95120-511-deyann-original-imaf5gx2zfgb3rey.jpeg?q=70'},
            {img: 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/ethnic-set/r/c/m/l-k95119-511-deyann-original-imaf5gx27jrgrtkk.jpeg?q=70'},
                 ],
            items1: ['Category1', 'Category2', 'Category3'],
            sizes: ['XL', 'XXS', '3XS', 'XS', 'S', 'M', 'L', 'XL', '3XL', '4XL', '5XL', '6XL', '7XL', 'XXL', 'Free', '10 - 11 Years', '26', '28', '5 - 6 Years', '7 - 8 Years', '34', '39', '8XL', '36', '46', '38', '44', '42', '40'],
            size: [],
            keyWords: [],
            sizeInput: false,
            search: null,
            one:'',
            two:''

        }
    },
    methods: {
        vi() {
            console.log(this.one, this.two, this.thr);
        },
        showSize() {
            console.log(this.size)
        },
        seeval() {
            /* console.log(this.mainCategory);
            axios.get('http://localhost:8000/api/category/' + this.mainCategory)
                .then((response) => {
                    this.categories = response.data;
                    console.log(this.categories);
                })
                .catch((errors) => {
                    console.log(errors);
                }) */
                    console.log(this.radiovalue);
        },
        wantArrChange(val) {

            console.log(val.name);
            this.value2 = val.name;
        }
    },
    watch: {
      keyWords (val) {
        if (val.length > 15) {
          this.$nextTick(() => this.keyWords.pop())
        }
      },
      mainCategory(val) {
          this.category = '';
           axios.get('http://localhost:8000/api/category/' + val)
                .then((response) => {
                    this.categories = response.data;
                    console.log(this.categories);
                })
                .catch((errors) => {
                    console.log(errors);
                })
      },
      category(val) {
          this.subcategory = '';
          axios.get('http://localhost:8000/api/subcategory/' + val)
                .then((response) => {
                    this.subcategories = response.data;
                    console.log(this.subcategories);
                })
                .catch((errors) => {
                    console.log(errors);
                })
      },
      radiovalue(val) {
          this.wantCat = '';

          /*** service Select ***/

          if(val == 3) {

                  axios.get('http://localhost:8000/api/serviceslist')
                    .then((response) => {
                        this.wantCatArr = response.data;
                        console.log(this.wantCatArr);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })

            /*** Education Select ***/

          } else if(val == 4) {
              axios.get('http://localhost:8000/api/educationlist')
                    .then((response) => {
                        this.wantCatArr = response.data;
                        console.log(this.wantCatArr);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })

            /*** Profession Select ***/
          } else if(val == 6) {
              axios.get('http://localhost:8000/api/profession')
                    .then((response) => {
                        this.wantCatArr = response.data;
                        console.log(this.wantCatArr);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })

            /*** service Select ***/
          } else {

              axios.get('http://localhost:8000/api/wantocategory/' + val)
                    .then((response) => {
                        this.wantCatArr = response.data;
                        console.log(this.wantCatArr);
                    })
                    .catch((errors) => {
                        console.log(errors);
                    })
          }
      }
    }
}
</script>

<style scoped>
.f {
  color: #bebebe;
  font-size: 12px;
  margin-left: 5px;
}
.ul {
    border-bottom: 1px solid #000;

}
.pre {
  white-space: pre-wrap;       /* CSS 3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  padding:0px;
  margin:0px
}
</style>
