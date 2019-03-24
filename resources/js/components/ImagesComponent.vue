<template>

    <v-card class="background-shadow  mb-3" flat>
        <v-card-title primary-title class="display-1">
            Upload Images
        </v-card-title>
        <v-img v-if="prpMainImg !== null" :src="prpMainImg" aspect-ratio="1" contain class="mb-2"></v-img>
        <!-- <v-img v-else-if="prpMainImg == null" :src="imagesUrl[0]" aspect-ratio="1" contain class="mb-2"></v-img> -->
        <v-img v-else :src="backupImg" aspect-ratio="1" contain class="mb-2"></v-img>
        <v-card-actions class="justify-space-between">
            <v-btn @click="uploadMainImage" flat outline block color="primary" dark>Upload image</v-btn>

                <input type="file" ref="mainImg" accept="image/*"  style="display:none;" @change="onFilePicked">
        </v-card-actions>
        <v-divider></v-divider>
        <v-layout  wrap align-content-space-between justify-space-between ma-0 px-3 pb-3>

            <v-flex xs6 lg6 class="px-1" v-for="(val, i) in imagesUrl" :key="i">
                <v-img :src="val" aspect-ratio="1" contain ></v-img>
                <v-card-actions class="justify-space-between">

                    <v-btn flat small outline block color="error" @click="deletePushImg(i)" dark>Delete</v-btn>

                </v-card-actions>
            </v-flex>

        </v-layout>
        <v-card-actions>
                <v-btn v-if="imagesUrl.length < 4" outline small color="success" ref="addMoreBtn" @click="moreImgs">Upload More</v-btn>
                <v-btn v-else outline small color="success" ref="addMoreBtn" disabled>MAX 5 PICS</v-btn>
                <input type="file" ref="pushimg" accept="image/*"  style="display:none;" @change="pushImage">
            </v-card-actions>

            <!-- ****************************************
            ***
            ***              CROPPIE
            ***
            ***************************************** -->

            <!-- <v-dialog
                v-model="croppieDialog"
                scrollable
                 :overlay="false"
                max-width="1000px"
                transition="dialog-transition"
            >
            <v-flex xs12 lg12>


                <v-card class="pa-1 justify-center" >

                        <v-flex xs12 lg12 >
                            <v-card class="pa-1">

                                Note that 'ref' is important here (value can be anything). read the description about `ref` below.
                                    <vue-croppie
                                        ref="croppieRef"
                                        :enableOrientation="true"
                                        :enableResize="false"
                                        :mouseWheelZoom="true"
                                        :viewport="{ width: 300, height: 300, type: 'square' }"
                                        :boundary="{ width: 300, height: 300 }"
                                        @result="result"
                                    >
                                    </vue-croppie>
                            </v-card>
                        </v-flex>
                            Rotate angle is Number
                            <v-btn fab  small @click="rotate(-90)" color="primary"><v-icon dark>rotate_left</v-icon></v-btn>
                            <v-btn fab small @click="rotate(90)" color="primary"><v-icon dark>rotate_right</v-icon></v-btn>
                            <v-btn small @click="crop()" color="warning">Crop</v-btn>

                    <v-card-actions>
                        <v-btn block color="success" >ok</v-btn>
                        <v-btn block color="error" >cancel</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
            </v-dialog> -->
    </v-card>
</template>

<script>
export default {
    components: {

        },
    mounted () {
        },
        props: ['propMainImg', 'propimgArr'],
    data() {
        return {
            backupImg: require('../../assets/uploadimg.png') ,
            prpMainImg: this.propMainImg ? this.propMainImg : null,
            mainImg:  '',
            imagesUrl: this.propimgArr ? this.propimgArr : [],
            rawImages: [],
            rawMainImg:  null,
            count: 0,
            deleteImages: [],
            test:[],

        }
    },
    methods: {

        uploadMainImage () {

            this.$refs.mainImg.click();
                return;

        },
        onFilePicked (event) {

            // Reference to the DOM input element
            var input = event.target.files;
            // Ensure that you have a file before attempting to read it
            if (input[0]) {

                let filename = input[0].name ;

                if(filename.lastIndexOf('.') <= 0 ) {
                   return alert('please choose valid file');
                }
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();

                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input[0]);

                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    //this.mainImg = reader.result;
                    this.prpMainImg = reader.result;

            }
            // Start the reader job - read file as a data url (base64 format)
            //reader.readAsDataURL(input[0]);
            this.rawMainImg = input[0];
            /* if(!this.test[0]){

                this.test.push(input[0]) ;
            }
            if(this.test[0]){

                this.test.push(input[0]) ;
            } */
            return event.target.value = '';

            }
        },
        moreImgs () {

            /* console.log(this.$refs.addMoreBtn);
            return; */

            if(this.prpMainImg) {
                this.$refs.pushimg.click();
                return;
            }

            if (this.rawMainImg === null || this.prpMainImg === require('../../assets/uploadimg.png')) {
                alert('Upload Main Image First');
                return;
            } else {
                this.$refs.pushimg.click();
                this.count++;
            }

        },
        pushImage (event) {

            /* console.log( this.$refs.pushimg.files);
            console.log( event.target.files[0].value = '');
            console.log( this.$refs.pushimg.files[0]);
            return */
            if(this.rawMainImg == null && this.prpMainImg == require('../../assets/uploadimg.png')) {
                alert('Upload Main Image First');
                    return;
                } else {

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

                }
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
        rawMainImg: function () {

            this.$emit('mainImg', this.rawMainImg);
        },
        rawImages: function () {

            this.$emit('imgArr', this.rawImages);
        },
        deleteImages: function () {

            this.$emit('deleteImages', this.deleteImages);
        },
    }
}
</script>

<style scoped>

</style>
