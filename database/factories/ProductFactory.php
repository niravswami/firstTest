<?php

use Faker\Generator as Faker;
use App\Storeview;
use App\Price;
use App\Inventory;

$factory->define(App\Product::class, function (Faker $faker) {
    // $values = array();
    //     for ($i=0; $i < 5; $i++) {
        // get a random digit, but always a new one, to avoid duplicates
        // $values []= $faker->imageUrl($width = 200, $height = 200, 'food', true, 'Faker');
        // }

        // $items = array('Retail','Wholesaler / Delear','Property','Old Item','Rent','Services / Business', 'Manufacturer');

        // $want = $items[array_rand($items,1)];

        // if( $want == 'Sell') {

        //     $items2 = ['Retail','Wholesale','Property','Old Item', 'Other'];

        // } else if($want == 'Rent') {

        //     $items2 = ['vehicle','cloths','Property','lights', 'Other'];

        // }


    return [
        'storeview_id' => function(){
            return Storeview::all()->random();
        } ,

        'inventory_id' => function(){
            return Inventory::all()->random();
        } ,

        'price_id' => function(){
            return Price::all()->random();
        } ,

        //'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),

        //'image' => $faker->imageUrl($width = 200, $height = 200, 'food', true, 'Faker'),
        //'image' => 'https://picsum.photos/200/200/?random',



        //'images' => serialize($values) ,

        //'want_to' => $items[array_rand($items,1)],
        // 'want_to' => $faker->numberBetween(1, 3),

        //'categoryInWant_to' => $items2[array_rand($items2,1)] ,
        // 'categoryInWant_to' => $faker->numberBetween(1, 13),

        //'details' => $faker->realText(250, 2),

        //'price' => $faker->numberBetween(100, 50000) ,

        //'discount' => $faker->numberBetween(10, 50) ,
    ];
});
