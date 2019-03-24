<template>
    <v-flex xs12 lg12 offset-lg1>
        <v-layout wrap >
            <v-flex xs12 lg5>
                <v-card>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="val in keywords" :key="val.id">
                                <th scope="row">{{ val.id }}</th>
                                <td>{{ val.name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </v-card>
            </v-flex>
            <v-flex xs12 lg5 offset-lg1>
                <v-card class="pa-4">
                    <v-flex xs12 lg12>
                        <v-text-field solo label="Add Keyword" v-model="keyword"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg12>
                        <v-btn outline block color="primary" dark @click="add">Add</v-btn>
                    </v-flex>

                </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
export default {
    mounted() {
        //console.log(JSON.parse(JSON.stringify(this.$data.keywords)))

        this.getAllKeywords();
    },
    data() {
        return {
            keywords: [],
            keyword: ''
        }
    },
    methods: {
        add() {
            let word = this.keyword.toLowerCase();
            console.log(word)

            let keyword = new FormData;

            keyword.append('name', word);

            axios.post('/keywords', keyword)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally();
        },

        getAllKeywords() {
            let This = this;

            axios.get('/keywords')
                .then((res) => {
                    let aa = res.data

                    aa.forEach(a => {
                        let b = {id: a.id, name: a.name}
                        this.keywords.push(b)
                    });

                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally();

        }
    }
}
</script>
