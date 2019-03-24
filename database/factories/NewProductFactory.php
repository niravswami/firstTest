<?php

use Faker\Generator as Faker;
use App\Inventory;
use App\Price;

$factory->define(App\NewProduct::class, function (Faker $faker) {
    return [
        'inventory_id' => function(){
            return Inventory::all()->random();
        } ,

        'price_id' => function(){
            return Price::all()->random();
        } ,
    ];
});
