<template>
    <v-layout  wrap>
        <v-flex xs12 lg12 >
            <v-card>


             <!--
            /***************************************************************************************
            /*** Title
            /***************************************************************************************
            -->
            <v-card class="py-2" flat>
                <v-card-text class="subheading font-weight-medium" >
                        Title
                <v-text-field hide-details box label="Title" v-model="title"></v-text-field>
                    </v-card-text>
            </v-card>

                <hr>

            <!--
            /***************************************************************************************
            /*** Highlights Points
            /***************************************************************************************
            -->

                 <v-card class="py-2" flat>
                    <v-card-text class="subheading font-weight-medium">
                        Highlights

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

                    <v-text-field hide-details v-model="highlightFild" label="Highlight" box  @keyup.enter="pushHighlight" class="pb-2"
                       ></v-text-field>
                    <v-card-actions>
                        <v-btn outline small color="success" @click="pushHighlight">Add More</v-btn>
                    </v-card-actions>

                    </v-card-text>
                </v-card>

                <v-divider></v-divider>

                <!--
                /***************************************************************************************
                /*** Descriptions
                /***************************************************************************************
                -->

                <v-card class="py-2" flat>
                     <v-card-text class="subheading font-weight-medium">
                        Description
                    <div  v-if="descriptions.length > 0">
                        <v-card v-for="(val, i) in descriptions" :key="i" class="my-1" flat>
                            <v-card-actions>

                                <v-layout  wrap justify-space-around>
                                    <v-flex xs11 lg3 >
                                        <v-text-field hide-details v-model="val.heading" label="Heading"></v-text-field>
                                    </v-flex>
                                    <v-flex xs11 lg7>
                                        <v-textarea hide-details v-model="val.description" label="Description" auto-grow rows="1"></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-btn flat icon color="pink">
                                    <v-icon @click="deleteDescription(i)">close</v-icon>
                                </v-btn>
                            </v-card-actions>

                        </v-card>

                    </div>
                    <v-layout  wrap justify-space-around>
                        <v-flex xs11 lg3  d-flex >
                            <v-text-field hide-details box v-model="heading" label="Heading" class="py-2"></v-text-field>
                        </v-flex>
                        <v-flex xs11 lg7  d-flex>
                            <v-textarea hide-details box v-model="description" label="Description" auto-grow rows="1" class="py-2"></v-textarea>
                        </v-flex>
                    </v-layout>

                    <v-card-actions>
                        <v-btn outline small color="success" @click="pushDescription">Add More</v-btn>
                    </v-card-actions>
                     </v-card-text>
                </v-card>

                <v-divider></v-divider>

                <!--
                /***************************************************************************************
                /*** Keywords
                /***************************************************************************************
                -->

                <!-- <v-card class="py-2" flat>
                    <v-card-text class="subheading font-weight-medium">
                        Keywords
                    <v-combobox outline v-model="keywords" :filter="filter" :items="items" hide-selected hint="Write keyword then press 'Enter'. Maximum 7 Keywords"
                        persistent-hint label="Enter Keywords" counter="7" multiple small-chips class="pb-3">

                        <template v-if="item === Object(item)" slot="selection" slot-scope="{ item, parent, selected }">
                            <v-chip :selected="selected" label small>
                                <span class="pr-2">
                                    {{ item.text }}
                                </span>
                                <v-icon small @click="parent.selectItem(item)">close</v-icon>
                            </v-chip>
                        </template>
                    </v-combobox>
                    </v-card-text>
                </v-card> -->

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

                <v-divider></v-divider>

            <!-- <v-card class="pa-3" flat> -->



                <!--
                                    /***************************************************************************************
                                    /*** Keywords
                                    /***************************************************************************************
                                    -->
                <!-- <v-flex xs12 lg12 class="pa-3">
                    <v-card-text class="subheading font-weight-medium">
                        Keywords
                    </v-card-text>
                    <v-combobox v-model="keywords" :filter="filter" :items="items" hide-selected hint="Maximum 7 Keywords"
                        persistent-hint label="Enter Keywords" multiple small-chips class="pb-3 px-3">
                        <template slot="no-data">
                                        <v-list-tile>
                                            <span class="subheading">Create</span>
                                            <v-chip
                                            label
                                            small
                                            >
                                            {{ search }}
                                            </v-chip>
                                        </v-list-tile>
                                        </template>
                        <template v-if="item === Object(item)" slot="selection" slot-scope="{ item, parent, selected }">
                            <v-chip :selected="selected" label small>
                                <span class="pr-2">
                                    {{ item.text }}
                                </span>
                                <v-icon small @click="parent.selectItem(item)">close</v-icon>
                            </v-chip>
                        </template>
                        <template
                                        slot="item"
                                        slot-scope="{ index, item, parent }"
                                        >
                                        <v-list-tile-content>
                                            <v-text-field
                                            v-if="editing === item"
                                            v-model="editing.text"
                                            autofocus
                                            flat
                                            background-color="transparent"
                                            hide-details
                                            solo
                                            @keyup.enter="edit(index, item)"
                                            ></v-text-field>
                                            <v-chip
                                            v-else
                                            dark
                                            label
                                            small
                                            >
                                            {{ item.text }}
                                            </v-chip>
                                        </v-list-tile-content>
                                        <v-spacer></v-spacer>
                                        <v-list-tile-action @click.stop>
                                            <v-btn
                                            icon
                                            @click.stop.prevent="edit(index, item)"
                                            >
                                            <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                                            </v-btn>
                                        </v-list-tile-action>
                                        </template>
                    </v-combobox>
                </v-flex> -->
            <!-- </v-card> -->
             </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { eventBus } from '../app.js'

export default {
    components: {

    },
    props: ['ttl', 'prpHighLights', 'prpDescriptions', 'prpKeywords'],
    created() {
        eventBus.$on('ttlComp', data => {

        });
    },
    mounted() {
        this.chngTtl
    },
    data() {
        return {
            prpTitle: this.ttl,
            title: this.ttl ? this.ttl : '',
            highlights: this.prpHighLights ? this.prpHighLights : [],
            highlightFild: '',
            descriptions: this.prpDescriptions ? this.prpDescriptions : [],
            heading: '',
            description: '',
            keywords: this.prpKeywords ? this.prpKeywords : [],
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
            x: 0,
            search: null,
            y: 0,
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
                console.log(this.highlightFild);
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
