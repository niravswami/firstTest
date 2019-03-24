<template>
    <v-flex xs12 lg12>
        <v-card class="top" flat>
            <v-flex xs12 lg12>
                <v-card class="mb-1" v-show="showMessage == false">
                    <v-card-title class="pa-2" >
                        <span class="mx-auto deleteFont" >Are You Sure You Want To Delete This Product?</span>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs8 lg4 offset-lg4 class="mx-auto">
                <v-card class="background-shadow" v-show="showMessage == false">
                    <v-img
                        :src="data.image "
                        aspect-ratio="1"
                        contain
                        v-if="data.image "
                    ></v-img>
                    <v-img
                        :src="data.images[0]"
                        aspect-ratio="1"
                        contain
                        v-else-if="data.images"
                    ></v-img>
                    <v-img
                        :src="backupImg"
                        aspect-ratio="1"
                        contain
                        v-else
                    ></v-img>

                    <!-- <v-img  :src="data.image" aspect-ratio="2.75" contain class="mb-2"></v-img> -->
                    <hr>
                    <v-card-title >
                        <div>
                            <h3 class="title mb-0">{{ data.title }}</h3>
                        <br>
                    <div class="priceDiv pb-1">
                                <span>₹ </span>
                                <strong>{{ data.totalPrice ? data.totalPrice : 0 }}</strong>
                                <!-- <span  v-if="val.rent_per" >/ {{ val.rent_per }}</span>
                                <span  v-if="val.feesper" >/ {{ val.feesper.name }}</span> -->
                                <span v-if="data.what == 'products'">| </span>
                                <span class="previousPrice" v-if="data.what == 'products'">₹{{ data.perviousPrice ? data.perviousPrice : 0 }}</span>
                                <span class="discount pl-1" v-if="data.what == 'products'"> {{ data.discount ? data.discount : 0 }}% off</span>
                                <span v-if="data.rent_per">/ {{ data.rent_per}}</span>
                                <span v-if="data.feesper">/ {{ data.feesper.name}}</span>
                                <span v-if="data.per">/ {{ data.per}}</span>

                            </div>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn  flat small   block color="orange darken-1" dark @click.stop="confirmDelete(data.id)">Delete Product</v-btn>
                        <v-btn outline small  block color="error" @click="cancelDelete">Cancel</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="background-shadow" v-show="showMessage == true">
                    <div>
                        <v-card class="mb-1 pa-5">
                            <v-card-title class="pa-2" >
                                <span class="mx-auto deleteFont" > {{ successMessege }} </span>
                            </v-card-title>
                        </v-card>

                       <v-card-actions>
                        <v-btn outline small  block color="success" @click="closeMessage">Ok</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>
import { eventBus } from '../app.js'
import AppCard from '../components/AppCard'

export default {
    components: {
        AppCard
    },
    props:['data', 'propWhichSeleced'],
    data() {
        return {
            backupImg: require('../../assets/uploadimg.png'),
            mainImg: this.data.image ? this.data.image : null,
            images: this.data.images ? this.data.images : null,
            title: this.data.title ? this.data.title : '',
            showMessage: false ,
            successMessege: '' ,

        }
    },
    methods: {
        confirmDelete(id) {

            console.log(id)

            let self = this;

            let params= {strId: this.$route.params.id}

            console.log(this.propWhichSeleced)

            // soft delete inventrory , price and product
            //axios.post('/products/'+ id +'/destroy', params)

            // soft delete product only
            axios.delete(this.propWhichSeleced+ id )
                .then((res) => {
                    if (res) {
                        console.log(res);

                        self.showMessage = true;

                        self.successMessege = res.data.success

                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                //.finally(() => (eventBus.$emit('spinner', false)));
        },
        cancelDelete() {

            eventBus.$emit('cancelDelete', false);
        },
        closeMessage() {

            eventBus.$emit('deleteProductDialog', this.data.what);

            this.showMessage = false;

            //this.$router.push({ name: "productslist", params: {id: this.$route.params.id}})

        }
    }
}
</script>

<style scoped>
.top {
    top: 70px;
}
.deleteFont {
    color: #424242;
    font-size: 17px;
}
.priceDiv strong{
  font-size: 17px;
  color: #333;
}
</style>

