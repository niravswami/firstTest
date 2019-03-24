<?php

use Faker\Generator as Faker;
use App\User;

$factory->define(App\Storeview::class, function (Faker $faker) {

    $arr = array(5, 65, 75, 409);


    return [
        'store_name' => $faker->name,
        'user_id' => function() {
            return User::all()->random();
        },
        'store_address' => $faker->address ,
        'contact_number' => $faker->e164PhoneNumber,

        'image' => $faker->imageUrl($width = 800, $height = 600, 'business', true, 'Faker'),

        'country_id' => 101,
        'state_id' => 12,
        'city_id' => 1041,
        // 'area_id' => $arr[array_rand($arr,1)],
        'area_id' => 1,
        'unique_key' => $faker->unique()->word,
        'pincode' =>$faker->postcode ,
        'email' => $faker->companyEmail,
        'website' => $faker->domainName,
        'about_us' => $faker->realText(200, 2),
    ];
});
