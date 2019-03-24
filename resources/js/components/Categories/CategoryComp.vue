<template>
    <div>
            <v-flex xs12 lg12>
                <v-card class="pa-3 mb-3">
                    <v-card-text class="subheading font-weight-medium">
                            Categories
                    </v-card-text>
                    <v-container grid-list-md>
                    <v-layout  wrap>
                        <v-flex xs12 lg4 v-for="(chldval , i) in children" :key="i">

                            <div  >
                                <v-autocomplete
                                        v-model="chldval.child"
                                    :items="chldval.childArr1"
                                    label="Enter Category"
                                    box
                                    item-text="name"
                                    item-value="id"
                                    color="orange darken-2"
                                    return-object
                                    @change="callChild(i, chldval.child)"
                                >
                                </v-autocomplete>
                            </div>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getParentCat();
    },
    props: ['propCat'],
    data() {
        return {

            selectedCat: '',

            newCat: '',

            slug: '',

            addedCat: {},

            alert: false,

            alertCompText:'',

            children: [],
            propC: [],

            ids: []

        }
    },
    methods: {


        /* --------------- */
         /* Parent CATEGORY  */
        /* ------------- */

        getParentCat() {

            axios.get('/categories')
                .then((res) => {
                    console.log(res);

                    //this.parentCat = res.data.cat

                    let result = res.data.cat;

                    this.children = [];

                    let newItem = {

                                child: '',
                                childArr1 : result
                            } ;

                        this.children.push(newItem);

                        //console.log(this.children)

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

        callChild( idx, e) {

            this.children.splice(idx+1);

            this.ids.splice(idx);

            let prntId = this.children[idx].child.id;
            //let prntId = JSON.parse(JSON.stringify(this.children[idx].child.id));

            //this.selectedCat = JSON.parse(JSON.stringify(this.children[idx].child));
            this.selectedCat = this.children[idx].child;

            //console.log(JSON.parse(JSON.stringify(this.children[idx].child)));

            this.ids.push(JSON.parse(JSON.stringify(this.children[idx].child.id)));
            //console.log(this.children[idx].child);
            //console.log(this.ids);

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

                        this.children.push(newItem);

                        //console.log(this.children)
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
    },
    watch: {
        ids() {
            this.$emit('category', JSON.parse(JSON.stringify(this.ids)));
        }
    }
}
</script>
