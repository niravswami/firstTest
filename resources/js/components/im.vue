<template>
    <v-card class=" mb-3 background-shadow ">
        <v-card-title primary-title class="display-1">
            Upload Images
        </v-card-title>
        <!-- <v-img :src="mainImg" aspect-ratio="1" contain class="mb-2"></v-img>
        <v-divider></v-divider>
        <v-layout row wrap align-content-space-between justify-space-around ma-0 px-3 pb-3>

            <v-flex xs2 lg2>
                <v-img :src="mainImg" aspect-ratio="1" style="border: 1px solid black;" contain></v-img>
            </v-flex>
            <v-flex xs2 lg2>
                <v-img :src="mainImg" aspect-ratio="1" style="border: 1px solid black;"  contain></v-img>
            </v-flex>
            <v-flex xs2 lg2>
                <v-img :src="mainImg" aspect-ratio="1" style="border: 1px solid black;"  contain></v-img>
            </v-flex>
            <v-flex xs2 lg2>
                <v-img :src="mainImg" aspect-ratio="1" style="border: 1px solid black;"  contain></v-img>
            </v-flex>
            <v-flex xs2 lg2>
                <v-img :src="mainImg" aspect-ratio="1" style="border: 1px solid black;"  contain></v-img>
            </v-flex>

        </v-layout> -->
            <v-layout row wrap align-content-space-between justify-space-around ma-0 px-3 pb-3>

            <v-flex xs6 lg6 class="px-1" v-for="(val, i) in imagesUrl" :key="i">
                <v-img :src="val" aspect-ratio="1" contain ></v-img>
                <v-card-actions class="justify-space-between">

                    <v-btn flat small outline block color="error" @click="deletePushImg(i)" dark>Delete</v-btn>

                </v-card-actions>
            </v-flex>

        </v-layout>

            <v-card-actions>
                <v-btn v-if="imagesUrl.length < 5" outline block small color="success" ref="addMoreBtn" @click="moreImgs">Upload Image</v-btn>
                <v-btn v-else outline small color="success" ref="addMoreBtn" disabled>MAX 5 PICS</v-btn>
                <input type="file" ref="pushimg" accept="image/*"  style="display:none;" @change="pushImage">
            </v-card-actions>

    </v-card>
</template>

<script>
export default {
    components: {

    },
    created() {

    },
    props:['propImgArr'],
    data() {
        return {
            mainImg: require('../../assets/uploadimg.png'),
            images: [],
            imagesUrl: this.propImgArr ? this.propImgArr : [],
            rawImages: [],
            count: 0,
            deleteImages:[]
        }
    },
    methods: {
        moreImgs () {

            /* console.log(this.$refs.addMoreBtn);
            return; */

            this.$refs.pushimg.click();
            this.count++;

        },
        pushImage (event) {

            /* console.log( this.$refs.pushimg.files);
            console.log( event.target.files[0].value = '');
            console.log( this.$refs.pushimg.files[0]);
            return */

                    // Reference to the DOM input element
                    var input = event.target.files;
                    // Ensure that you have a file before attempting to read it
                    // if (input[0]) {

                        let filename = input[0].name ;

                        if(filename.lastIndexOf('.') <= 0 ) {
                                return alert('please choose valid file');
                        }
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();

                    // Define a callback function to run, when FileReader finishes its job

                    /*  reader.addEventListener('load', () => {

                        this.imagesUrl.push(reader.result);

                    }); */

                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input[0]);

                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.imagesUrl.push(reader.result);
                    }
                    this.rawImages.push(input[0]) ;
                    return event.target.value = ''
                    // return input[0].value = this.dummyFile;
                    //}


        },
        deletePushImg (index) {

            const a = confirm('Are You Sure You Want To Delete!!?');
                if (a) {

                    let b = this.imagesUrl;

                    var str = b[index];
                    var n = str.indexOf("data");;

                    if(n != 0) {
                        this.deleteImages.push(b[index]);

                        console.log(b[index])
                    }

                    this.imagesUrl.splice(index, 1);
                    this.rawImages.splice(index, 1);
                    this.count--;
                }
                return;
        },
    },
    watch: {
        rawImages: function () {

            this.$emit('rawImgArr', this.rawImages);
        },
        imagesUrl: function () {

            this.$emit('imgArr', this.imagesUrl);
        },
        deleteImages: function () {

            this.$emit('deleteImages', this.deleteImages);
        },
    }
}
</script>

<style scoped>

</style>
