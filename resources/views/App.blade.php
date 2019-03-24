<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>trysix</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        {{-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8FWEvZ1UdzMQhIqap5m6rTWF3-gXX7Zg&libraries=places"></script> --}}
        {{-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyA8FWEvZ1UdzMQhIqap5m6rTWF3-gXX7Zg&libraries=places"></script> --}}

    </head>
    <body>

            <div id="app">
               <app></app>
            </div>

        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
