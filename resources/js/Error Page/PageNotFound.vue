<template>
    <v-layout wrap>
        <v-flex xs12>
                <v-container fluid grid-list-lg>
                    <v-layout wrap>
                        <v-flex xs12 >
                            <v-img
                                :src="image"
                                max-height="500px"
                                contain
                            ></v-img>
                        </v-flex>
                    </v-layout>
                </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {

            image: require('../../assets/ErrorPage404-04.jpg'),

            message: 'Sorry, the page you are looking for could not be found.',
        }
    }
}
</script>

<style scoped>
.center {
  position: relative;
}

.centerSpinner {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>



@extends('errors::illustrated-layout')

@section('code', '404')
@section('title', __('Page Not Found'))

@section('image')
<div style="background-image: url('/svg/404.svg');" class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
</div>
@endsection

@section('message', __('Sorry, the page you are looking for could not be found.'))
