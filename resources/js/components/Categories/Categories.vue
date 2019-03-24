<template>
    <v-flex xs12 lg12 class="mx-auto">
        <v-card class="pa-3 mb-3">
            <v-card-title class="title" >
                Create Categories
            </v-card-title>
        </v-card>
            <v-layout  wrap justify-space-around>
                <v-flex xs4>
                    <v-card class="pa-3">
                        <TreeBrowser  :items="getCategory"></TreeBrowser>
                    </v-card>
                </v-flex>
                <v-flex xs12 lg4 >
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-card class="pa-3 mb-3">
                                <v-card-text class="subheading font-weight-medium">
                                    Seleced Category
                                </v-card-text>

                                <v-layout  wrap justify-center>
                                    <v-flex xs3 >
                                    <div class="subheading">ID:</div>
                                    </v-flex>
                                    <v-flex xs8 >
                                        <div class="subheading">{{ rootCat.id }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">Name:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ rootCat.name }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">slug:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ rootCat.slug }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">Description:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ rootCat.description }}</div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>

                        <v-flex xs12>
                            <v-card class="pa-3">
                                <v-card-text class="subheading font-weight-medium">
                                    Category Added
                                </v-card-text>

                                <v-alert
                                    v-model="alert"
                                    dismissible
                                    type="success"
                                    >
                                    {{alertCompText}}
                                </v-alert>

                                <v-layout  wrap justify-center>
                                    <v-flex xs3 >
                                    <div class="subheading">Parent ID:</div>
                                    </v-flex>
                                    <v-flex xs8 >
                                        <div class="subheading">{{ addedCat.parent_id }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3 >
                                    <div class="subheading">ID:</div>
                                    </v-flex>
                                    <v-flex xs8 >
                                        <div class="subheading">{{ addedCat.id }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">Name:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ addedCat.name }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">slug:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ addedCat.slug }}</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout  wrap justify-center>
                                    <v-flex xs3>
                                        <div class="subheading">Description:</div>
                                    </v-flex>
                                    <v-flex xs8>
                                        <div class="subheading">{{ addedCat.description }}</div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 lg4>
                    <v-card class="pa-3 mb-3">
                        <v-card-text class="subheading font-weight-medium">
                             Categories
                        </v-card-text>
                        <div v-for="(chldval , i) in children" :key="i">
                            <v-autocomplete
                                 v-model="chldval.child"
                                :items="chldval.childArr1"
                                label="Enter Category"
                                box
                                item-text="name"
                                item-value="id"
                                color="orange darken-2"
                                return-object
                                @change="callChild(i, chldval.child, 'new')"
                            >
                                <template slot="no-data">
                                    <!-- <v-list>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                            <v-list-tile-title>
                                                No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                            </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list> -->
                                </template>
                            </v-autocomplete>
                        </div>

                        <v-text-field box label="Add New Category" v-model="newCat" @keyup="makeSlug"></v-text-field>

                        <v-card-actions class="">
                            <v-btn outline block color="success" dark @click="addCategory">Add Category</v-btn>
                            <v-btn outline block color="error" dark>cancel</v-btn>
                        </v-card-actions>

                    </v-card>

                </v-flex>
            </v-layout>

            <!-- =================   READY MADE CATEGORY   =========================================== -->

            <v-layout  wrap justify-space-around>

                <v-flex xs12 lg6 class="mt-3 px-1">
                    <v-card class="pa-3">
                        <v-card-text class="subheading font-weight-medium">
                            Ready Made Category List
                        </v-card-text>
                            <div  v-for="(val, i) in readyMade" :key="i" >
                                <div class="subheading font-weight-medium text-no-wrap">
                                    <!-- <pre> {{ val.cat_names }} </pre> -->
                                    {{ val.cat_names }}
                                </div>
                            </div>
                    </v-card>
                </v-flex>

                <!-- ======   Make Ready Made Category   ======= -->

                <v-flex xs12 lg6 class="mt-3 px-1" >
                    <v-card class="pa-3 mb-3">
                        <v-card-text class="subheading font-weight-medium">
                             Make Ready Made Category
                        </v-card-text>
                        <v-card-text>
                            {{ makerId }}
                        </v-card-text>
                        <v-list>
                            <v-layout  wrap >
                                <div  v-for="(val, i) in makerName" :key="i" >
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title >{{ val }} <span class="pl-2" v-if="makerName.length !== i+1">></span></v-list-tile-title>

                                        </v-list-tile-content>
                                    </v-list-tile>
                                </div>
                            </v-layout>
                        </v-list>
                        <v-list>
                            <v-list-tile-title class="subheading font-weight-medium"> <pre> {{ inco }} </pre> </v-list-tile-title>
                        </v-list>
                        <!-- <v-list>
                            <v-layout  wrap v-if="inco != null">
                                <div  v-for="(val, i) in inco" :key="i" >
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title ><pre>{{ val }}</pre>   <span class="pl-2" v-if="inco.length !== i+1">></span></v-list-tile-title>

                                        </v-list-tile-content>
                                    </v-list-tile>
                                </div>
                            </v-layout>
                        </v-list> -->

                        <div v-for="(chldval , i) in ready" :key="i">
                            <v-autocomplete
                                 v-model="chldval.child"
                                :items="chldval.childArr1"
                                label="Enter Category"
                                box
                                item-text="name"
                                item-value="id"
                                color="orange darken-2"
                                return-object
                                @change="callChild(i, chldval.child, 'ready')"
                            >
                                <template slot="no-data">
                                    <!-- <v-list>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                            <v-list-tile-title>
                                                No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                            </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list> -->
                                </template>
                            </v-autocomplete>
                        </div>

                        <v-card-actions class="">
                            <v-btn outline block color="success" dark @click="createReadyMadeCat">Create Ready made </v-btn>
                            <v-btn outline block color="error" dark>cancel</v-btn>
                        </v-card-actions>

                    </v-card>

                </v-flex>

            </v-layout>


            <!-- <v-card class="pa-3 mb-3" >
                <v-card-text class="subheading font-weight-medium">
                    Level One Categories
                </v-card-text>
                <v-combobox
                    v-model="levelOneCat"
                    :items="levelOneArr"
                    label="Find Level One Category"
                    box
                    item-text="name"
                    item-value="id"
                    color="orange darken-2"
                    @focus="getlevelOneCat"
                >
                    <template slot="no-data">
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>
                                <v-list-tile-title>
                                    No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </template>
                </v-combobox>
                <v-text-field box label="Add New Level One Category" v-model="levelOneText"></v-text-field>
                <v-card-actions class="">
                    <v-btn outline block color="success" dark @click="addlevelOneCat">Add Level One Category</v-btn>
                    <v-btn outline block color="error" dark>cancel</v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="pa-3 mb-3">
                <v-card-text class="subheading font-weight-medium">
                    Level Two Categories
                </v-card-text>
                <v-combobox
                    v-model="levelTwoCat"
                    :items="levelTwoArr"
                    label="Enter Root Category"
                    box
                    item-text="name"
                    item-value="id"
                    color="orange darken-2"
                    @focus="getlevelTwoCat"
                >
                    <template slot="no-data">
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>
                                <v-list-tile-title>
                                    No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </template>
                </v-combobox>
                <v-text-field box label="Add New Level One Category" v-model="levelTwoText"></v-text-field>
                <v-card-actions class="">
                    <v-btn outline block color="success" dark @click="addlevelTwoCat">Add Level Two Category</v-btn>
                    <v-btn outline block color="error" dark>cancel</v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="pa-3 mb-3">
                <v-card-text class="subheading font-weight-medium">
                    Level Three Categories
                </v-card-text>
                <v-combobox
                    v-model="levelThreeCat"
                    :items="levelThreeArr"
                    label="Enter Root Category"
                    box
                    item-text="name"
                    item-value="id"
                    color="orange darken-2"
                    @focus="getlevelThreeCat"
                >
                    <template slot="no-data">
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>
                                <v-list-tile-title>
                                    No results matching "<strong>{{ searchArea }}</strong>". Press <kbd>enter</kbd> to create a new one
                                </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </template>
                </v-combobox>
                <v-text-field box label="label" v-model="levelThreeText"></v-text-field>
                <v-card-actions class="">
                    <v-btn outline block color="success" dark>Add Level Three Category</v-btn>
                    <v-btn outline block color="error" dark>cancel</v-btn>
                </v-card-actions>
            </v-card> -->

    </v-flex>
</template>

<script>
import TreeBrowser from '../TreeBrowser/treeBrowser'
export default {
    components: {
        TreeBrowser,
    },

    mounted() {

        this.getParentCat();
        this.getReadyMadeCategory();
        // this.getWantedCategoryProducts();
    },

    data() {
        return {

            rootCat: '',
            rootText: '',
            rootArr: [],
            addRoot: false ,

            levelOneCat: '',
            levelOneText: '',
            levelOneArr: [],

            levelTwoText: '',
            levelTwoCat: '',
            levelTwoArr: [],

            levelThreeText: '',
            levelThreeCat: '',
            levelThreeArr: [],

            zz: [],

            selectedCat: '',

            newCat: '',

            slug: '',

            addedCat: {},

            alert: false,

            alertCompText:'',

            children: [],
            ready: [],
            maker: [],
            makerName: [],
            makerId: [],
            inco: null,
            readyMade: [],
        }
    },
    computed: {
        getCategory(){

            return {
                        name: this.$store.getters.getCategoryParent ? this.$store.getters.getCategoryParent.name : 'Category',
                        child :this.$store.getters.getCategoryChildren
                    };
        },
    },
    methods: {
        getReadyMadeCategory()
        {
            axios.get('/readymade')
                .then((res) => {
                    console.log(res);
                    if(res) {

                        this.readyMade = res.data;
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },
          /* --------------- */
         /* ADD CATEGORY  */
        /* ------------- */

        addCategory() {

            if(this.newCat == '' || this.newCat == null) {

                alert('Please Enter New Category!');

                return;
            }

            let NewCat = this.newCat;

            let addCat = new FormData();

            addCat.append('name', NewCat);

            addCat.append('slug', this.slug);

            addCat.append('parent_id', this.selectedCat.id ? this.selectedCat.id : '');

            addCat.append('description', '');

            console.log(NewCat)
            console.log(this.slug)

            //return;

            let self = this;

            axios.post('/categories', addCat)
                .then((res) => {
                    console.log(res);
                    console.log(res.data.new_category);
                    self.alertCompText = res.data.success;
                    self.alert = true;
                    self.addedCat = res.data.new_category;

                    self.getParentCat();

                    self.newCat = ''
                    self.children = [];
                    self.getWantedCategoryProducts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },

        makeSlug() {
                let text = this.newCat
               this.slug = this.slugify(text)

                //console.log(slugifyTitle)
            },
            slugify(text) {
                return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           //replace spaces with '-'
                //.replace(/[^\w\-]+/g, '')       // remove all non-words chars
                .replace(/\-\+/g, '-')          //replace multiple '-' with single '-'
                .replace(/^-+/, '')             //trim '-' from start of text
                .replace(/-+$/, '');            //trim '-' from end of text

            },

          /* --------------- */
         /* Parent CATEGORY  */
        /* ------------- */

        getParentCat() {

            axios.get('/categories')
                .then((res) => {
                    console.log(res);

                    //this.parentCat = res.data.cat

                    this.$store.commit('mutWantedCat', {parent: {name: 'Category'}, child: res.data.wthChild})

                    let result = res.data.cat;

                    this.children = [];
                    this.ready = [];

                    let newItem = {

                                child: '',
                                childArr1 : result
                            } ;

                        this.children.push(newItem);
                        this.ready.push(newItem);

                    //this.children[0].childArr1 = res.data.cat
                    this.parentCat = res.data.allCat
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },


          /* --------------- */
         /* CALL CHILD CATEGORY  */
        /* ------------- */

        callChild( idx, e, what) {

            if(what == 'new') {

                this.children.splice(idx+1);

                var prntId = this.children[idx].child.id;
                //let prntId = JSON.parse(JSON.stringify(this.children[idx].child.id));

                //this.selectedCat = JSON.parse(JSON.stringify(this.children[idx].child));
                this.selectedCat = this.children[idx].child;

                console.log(JSON.parse(JSON.stringify(this.children[idx].child)));
            } else {

                this.ready.splice(idx+1);
                if(this.makerName.length != this.ready.length) {
                    this.maker.splice(idx)
                    this.makerId.splice(idx)
                    this.makerName.splice(idx)

                }

                this.makerName.push(this.ready[idx].child.name);

                var prntId = this.ready[idx].child.id;
                this.selectedCat = this.ready[idx].child;
                this.maker.push(this.ready[idx].child)
                this.makerId.push(this.ready[idx].child.id)
                console.log(JSON.parse(JSON.stringify(this.ready[idx].child)));
            }


            //console.log(this.children[idx].child);

            let data = new FormData();

            data.append('parent_id', prntId)

            axios.post('/categories/children', data)
                .then((res) => {
                    //console.log(res.data.chld);

                    let result = res.data.chld

                    if(result.length) {

                        let newItem = {

                            child: '',
                            childArr1 : result
                        } ;

                        if(what == 'new') {

                            this.children.push(newItem);
                        } else {

                            this.ready.push(newItem);
                        }


                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
        },

        /* --------------------------- */
        /* CREATE READY MADE CATEGORY  */
        /* --------------------------- */

        createReadyMadeCat() {

            if(this.makerId.length == 0) {

                alert('please create category');
                return;

            } else {

                console.log(this.makerId)
                console.log(this.makerName);

                let form = new FormData();

                for (let i = 0; i < this.makerId.length; i++) {

                    form.append('ids[]', this.makerId[i]);

                }

                for (let i = 0; i < this.makerName.length; i++) {

                    form.append('names[]', this.makerName[i]);

                }

                axios.post('/readymade', form)
                    .then((res) => {
                        console.log(res);

                        if(res) {

                            this.inco = res.data.names;

                            this.ready = [];

                            this.getParentCat();
                            this.getReadyMadeCategory();
                        }
                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
            }

        },


          /* --------------- */
         /* ROOT CATEGORY  */
        /* ------------- */

        getRootCat () {

            axios.get('/rootcategories')
                .then((response) => {
                    this.rootArr = response.data;
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                })

        },

        addRootCat () {

            axios.post('/rootcategories', {name: this.rootText})
                .then((response) => {
                    console.log(response);
                    this.rootText = ''
                })
                .catch((errors) => {
                    console.log(errors);
                })
                    console.log(this.rootCat);
        },

          /* ------------------- */
         /* LEVEL ONE CATEGORY  */
        /* ------------------- */

        addlevelOneCat () {

            /* axios.post('/levelonecategories', {name: this.levelOneText, rootId: this.rootCat.id})
                .then((response) => {
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                }) */
            console.log(this.rootCat.id);
            console.log(this.levelOneText);
        },
        getlevelOneCat () {

            axios.get('/levelonecategories')
                .then((response) => {
                    this.levelOneArr = response.data;
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                })
            console.log(this.levelTwoCat);

        },



          /* ------------------- */
         /* LEVEL TWO CATEGORY  */
        /* ------------------- */

        addlevelTwoCat () {

            axios.post('/leveltwocategories', {name: this.levelTwoText, levelOneId: this.levelOneCat.id})
                .then((response) => {
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                })
            console.log(this.levelOneCat.id);
            console.log(this.levelTwoText);
        },

        getlevelTwoCat () {

            axios.get('/leveltwocategories')
                .then((response) => {
                    this.levelTwoArr = response.data;
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                })

            console.log(this.levelOneCat.id);
            console.log(this.levelTwoCat);

        },

          /* --------------------- */
         /* LEVEL THREE CATEGORY  */
        /* --------------------- */

        addlevelThreeCat () {

            /* axios.post('/levelonecategories', {name: this.levelTwoText, levelOneId: this.rootCat.id})
                .then((response) => {
                    console.log(response);
                })
                .catch((errors) => {
                    console.log(errors);
                }) */
            console.log(this.rootCat.id);
            console.log(this.levelOneText);
        },

        getlevelThreeCat () {

            console.log(this.levelTwoCat.id);
            console.log(this.levelThreeCat);
        },
    }
}
</script>
