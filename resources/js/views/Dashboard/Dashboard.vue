<template>
    <v-layout  wrap justify-center>
        <v-flex xs12 lg2>
            <v-card class="mr-2 sticky">
                <v-list two-line>
                    <template v-for="val in items">
                        <div :key="val.title">
                            <v-list-tile @click="goTo(val.to)"  >
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ val.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </div>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
        <v-flex xs12 lg8>
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {title: 'Categories', to: 'createcategories'},
                {title: 'Keywords', to: 'keywordscomp'},
                {title: 'Materials', to: 'materialscomp'},
                {title: 'Colors', to: 'colorscomp'},
            ],
        }
    },
    methods: {

        goTo(path) {

            this.$router.push({ name: path} );
        }
    },
}
</script>

