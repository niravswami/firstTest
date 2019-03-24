<template>
    <v-card flat>


        <!--
            /***************************************************************************************
            /*** Title
            /***************************************************************************************
            -->
            <v-flex xs12>

                <v-card class="pa-3 " flat>
                    <v-card-text class="subheading font-weight-medium">
                        Title
                    </v-card-text>
                        <v-text-field
                            @keyup="makeSlug"
                            color="orange darken-2"

                            box
                            label="Title"
                            v-model.trim="title"
                            prepend-icon="fas fa-signature"
                            :error-messages="errors.collect('title')"
                            data-vv-name="title"
                            v-validate="'required'"
                        ></v-text-field>
                </v-card>
            </v-flex>

        <hr>

        <!--
            /***************************************************************************************
            /*** Highlights Points
            /***************************************************************************************
            -->
        <v-flex xs12>

            <v-card class="pa-3" flat>
                <v-card-text class="subheading font-weight-medium">
                    Highlights
                </v-card-text>

                    <div>
                        <template v-for="(val, i) in highlights">
                            <v-card-actions :key="i" class="pa-0">
                                <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                                <span style="font-size: 6px"><i class="fas fa-circle"></i></span>
                                <v-card-text class="py-0 subheading">
                                    {{ val }}
                                </v-card-text>
                                <v-btn flat icon color="pink">
                                    <v-icon @click="deleteHighlight(i)">close</v-icon>
                                </v-btn>
                            </v-card-actions>

                        </template>
                    </div>

                    <v-text-field hide-details v-model="highlightFild" label="Highlight" box @keyup.enter="pushHighlight"
                        class="pb-2" color="orange darken-2" prepend-icon="fas fa-circle"> </v-text-field>
                    <v-card-actions>
                        <v-btn outline small color="success" @click="pushHighlight">Add</v-btn>
                    </v-card-actions>
            </v-card>
        </v-flex>

        <v-divider></v-divider>

        <!--
                /***************************************************************************************
                /*** Descriptions
                /***************************************************************************************
                -->
        <v-flex xs12>

            <v-card class="pa-3" flat>
                <v-card-text class="subheading font-weight-medium">
                    Description
                </v-card-text>
                    <div v-if="descriptions.length > 0" >
                        <v-card v-for="(val, i) in descriptions" :key="i" class="my-1" flat>
                            <v-card-actions>

                                <v-layout  wrap justify-space-around>
                                    <v-flex xs11 lg3>
                                        <v-text-field hide-details v-model="val.heading" label="Heading" color="orange darken-2"></v-text-field>
                                    </v-flex>
                                    <v-flex xs11 lg7>
                                        <v-textarea hide-details v-model="val.description" label="Description" auto-grow rows="1" color="orange darken-2"></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-btn flat icon color="pink">
                                    <v-icon @click="deleteDescription(i)">close</v-icon>
                                </v-btn>
                            </v-card-actions>

                        </v-card>

                    </div>
                    <v-layout  wrap justify-space-around>
                        <v-flex xs11 lg4 d-flex>
                            <v-text-field hide-details box v-model="heading" label="Heading" class="py-2" color="orange darken-2" prepend-icon="fas fa-pen-square"></v-text-field>
                        </v-flex>
                        <v-flex xs11 lg7 d-flex>
                            <v-textarea hide-details box v-model="description" label="Description" auto-grow rows="1" class="py-2" color="orange darken-2" prepend-icon="fas fa-pen-square"></v-textarea>
                        </v-flex>
                    </v-layout>

                    <v-card-actions>
                        <v-btn outline small color="success" @click="pushDescription">Add</v-btn>
                    </v-card-actions>
            </v-card>
        </v-flex>

        <v-divider></v-divider>

        <!--
                /***************************************************************************************
                /*** Keywords
                /***************************************************************************************
                -->

        <v-card class="pa-3" flat>
            <v-card-text class="subheading font-weight-medium">
                Keywords
            </v-card-text>
            <div>
                <template v-for="(val, i) in keywords">
                    <v-card-actions :key="i" class="pa-0">
                        <!-- <v-icon small  color="black">fas fa-circle</v-icon> -->
                        <span style="font-size: 6px"><i class="fas fa-circle"></i></span>
                        <v-card-text class="py-0 subheading">
                            {{ val }}
                        </v-card-text>
                        <v-btn flat icon color="pink">
                            <v-icon @click="deleteKeyword(i)">far fa-trash-alt</v-icon>
                        </v-btn>
                    </v-card-actions>

                </template>
            </div>

            <v-text-field hide-details v-model="keywordText" label="Keyword" box @keyup.enter="pushKeyword"
                class="pb-2" color="orange darken-2" prepend-icon="fas fa-circle"> </v-text-field>
            <v-card-actions>
                <v-btn outline small color="success" @click="pushKeyword" v-if="keywords.length <= 6">Add</v-btn>
                <div v-else class="subheading" style="color: red;">
                    7 Keywords Max!
                </div>
            </v-card-actions>
        </v-card>

    </v-card>
</template>

<script>
    import { eventBus } from '../app.js';

export default {
    components: {

    },
    created () {

        eventBus.$on('ttt', data => {
            return //console.log(data);
            this.getInfoToParent = data;
        })
    },
    mounted() {
    },
    props: ['ttl', 'propSlug', 'prpHighLights', 'prpDescriptions', 'prpKeywords'],
    data() {
        return {
            title: this.ttl ? this.ttl : '',
            highlights: this.prpHighLights ? this.prpHighLights : [],
            highlightFild: '',
            descriptions: this.prpDescriptions ? this.prpDescriptions : [],
            heading: '',
            description: '',
            keywords: this.prpKeywords ? this.prpKeywords : [],

            //title: '',
            slug: this.propSlug ? this.propSlug :'',
            //highlights: [],
            highlightFild: '',
            //descriptions: [],
            heading: '',
            description: '',
            //keywords: [],

            activator: null,
            attach: null,
            //colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            index: -1,
            items: [
                /* { header: 'Select an option or create one' },
                {
                text: 'Foo',
                //color: 'blue'
                },
                {
                text: 'Bar',
               // color: 'red'
                } */
            ],
            nonce: 1,
            menu: false,
            keywordText: '',
            x: 0,
            search: null,
            y: 0,
            getInfoToParent: false,
        }
    },
    watch: {
                keywords (val, prev) {
                    if(this.keywords.length > 7) {
                        return;
                    }  else {

                        if (val.length === prev.length) return

                        this.keywords = val.map(v => {
                        if (typeof v === 'string') {
                            v = {
                            text: v,
                        // color: this.colors[this.nonce - 1]
                            }

                            this.items.push(v)

                        // this.nonce++
                        }

                        return v
                        })
                    }
                },
                getInfoToParent: function () {

                    console.log(
                    this.title,
                    this.slug,
                    this.highlights,
                    this.descriptions
                    )
                },
                title: function() {
                    this.$validator.validateAll().then(result => {
                        if (!result) {
                            // do stuff if not valid.

                            this.$emit('title', null);

                            return;

                        }

                        this.$emit('title', this.title)
                        // console.log(this.title)
                    });
                },
                slug: function () {
                    this.$emit('slug', this.slug)
                },
                highlights: function () {
                    this.$emit('highlights', this.highlights);
                    return;
                },
                descriptions: function () {
                    this.$emit('descriptions', this.descriptions)
                },
                keywords: function () {
                    this.$emit('keywords', this.keywords)
                },

            },

            methods: {
            edit (index, item) {
                if (!this.editing) {
                this.editing = item
                this.index = index
                } else {
                this.editing = null
                this.index = -1
                }
            },
            filter (item, queryText, itemText) {
                if (item.header) return false

                const hasValue = val => val != null ? val : ''

                const text = hasValue(itemText)
                const query = hasValue(queryText)

                return text.toString()
                .toLowerCase()
                .indexOf(query.toString().toLowerCase()) > -1
            },
            pushHighlight() {
                if(this.highlightFild !== '')
                {
                    this.highlights.push(this.highlightFild)

                    this.highlightFild = '';
                } else {
                    alert('highlight field can\'t be left empty ')
                }
                //console.log(this.highlightFild);
            },
            deleteHighlight(index) {
                const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.highlights.splice(index, 1);
                }
                return;
            },
            pushDescription() {

                if(this.heading =='' || this.description == '') {
                    alert('Descriptions Field Can Not Be Empty');
                    return;
                } else {

                    this.descriptions.push({
                        heading: this.heading,
                        description: this.description
                    })

                    this.heading = '';
                    this.description = '';
                }
                return;
            },
            deleteDescription(index) {

                const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.descriptions.splice(index, 1);
                }
                return;
            },
            makeSlug() {
                let text = this.title
               this.slug = this.slugify(text)

                //console.log(slugifyTitle)
            },
            slugify(text) {
                return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           //replace spaces with '-'
                .replace(/[^\w\-]+/g, '')       // remove all non-words chars
                .replace(/\-\+/g, '-')          //replace multiple '-' with single '-'
                .replace(/^-+/, '')             //trim '-' from start of text
                .replace(/-+$/, '');            //trim '-' from end of text

            },
            pushKeyword () {
                if (this.keywords.length <= 6) {

                    if(this.keywordText !== '')
                    {
                        this.keywords.push(this.keywordText)

                        this.keywordText = '';
                    } else {
                        alert('keyword field can\'t be left empty ')
                    }
                    console.log(this.keywordText);
                } else {
                    this.keywordBtn = false;
                }
            },
            deleteKeyword(index) {
                const a = confirm('Are You Sure You Want To Delete!!');
                if (a) {
                this.keywords.splice(index, 1);
                }
                return;
            },

         }
}
</script>
