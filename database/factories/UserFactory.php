<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {

    $arr = array(1,2);

    return [
        'first_name' => $faker->firstName($gender = 'male'|'female'),
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
        'date_of_birth' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'mobile_number' => $faker->e164PhoneNumber,
        'gender' => $arr[array_rand($arr,1)],
    ];
});
