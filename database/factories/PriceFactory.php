<?php

use Faker\Generator as Faker;
use App\Storeview;

$factory->define(App\Price::class, function (Faker $faker) {

    // $items = array(1, 2, 3) ;

    $want_to = $faker->randomElement([1,2,3]);

    switch ($want_to) {
        case 2:
        # code...
            // $rentArr = ['Hour', 'Day', 'Week', 'Month', 'Year'];
            $per =  $faker->randomElement(['Hour', 'Day', 'Week', 'Month', 'Year']);
            break;

            case 3:
            # code...
            // $wholesaleArr = ['Unit', 'Box', 'Pc'];
            // $per = $wholesaleArr[array_rand($wholesaleArr,1)];
            $per =  $faker->randomElement(['Unit', 'Box', 'Pc']);
            break;

            default:
            # code...
            $per = null;
            break;
    }

    // $ofr = array(0,1,2,3);

    $item = $faker->randomElement([0,1,2,3]);

    if($item == 0 || $item == 2) {

        $previous_price = $faker->numberBetween(100, 50000) ;//round((1 - ($this->price->discount/100)) * $this->price->price, 2),;

        $discount = $faker->numberBetween(10, 50);

        $price = round((1 - ($discount/100)) * $previous_price, 2);

    } else {

        if($item == 1) {

            $previous_price = $faker->numberBetween(51000, 90000) ;//round((1 - ($this->price->discount/100)) * $this->price->price, 2),;

        } else {

            $previous_price = null;

        }

        $discount = null;

        $price =  $faker->numberBetween(100, 50000);

    }

    if($item == 1 || $item == 3) {

        $offers = $faker->sentences($nb = 3, $asText = false);

    } else {

        $offers = null;
    }

    return [

        'storeview_id' => function(){
            return Storeview::all()->random();
        } ,

        'want_to' => $want_to,

        'per' => $per,

        //  'price' => $faker->numberBetween(100, 50000) ,

        //  'discount' => $faker->numberBetween(10, 50) ,

         'price' => $price ,

         'discount' => $discount,

         'previous_price' => $previous_price ,

         'offers' => serialize($offers),
    ];
});
