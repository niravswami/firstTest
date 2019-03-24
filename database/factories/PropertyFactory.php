<?php

use Faker\Generator as Faker;
use App\Property\PropertyCategory;
use App\Storeview;

$factory->define(App\Property\Property::class, function (Faker $faker) {
    #===================   IMAGES   ==========================

    $values = array();

        for ($i=0; $i < 4; $i++) {
        // get a random digit, but always a new one, to avoid duplicates
        $values []= $faker->imageUrl($width = 400, $height = 400, 'city', true, 'Faker');
        }

        #================   DESCRIPTION   ================================

        $ab = array();

        for ($i=0; $i < 3; $i++) {
            // get a random digit, but always a new one, to avoid duplicates

            $des = new stdClass;
            $des->heading = $faker->word;
            $des->description = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);

            $ab[] = json_encode($des) ;
        }

        #==================   HIGHLIGHT   ============================

        $highlights = $faker->words($nb = 7, $asText = false);

        #==================   TITLE   ============================

        $title = $faker->sentence($nbWords = 6, $variableNbWords = true);

        #==================   SLUG MAKER   ============================

        $string = $title;
            $string = utf8_encode($string);
            $string = iconv('UTF-8', 'ASCII//TRANSLIT', $string);
            $string = preg_replace('/[^a-z0-9- ]/i', '', $string);
            $string = str_replace(' ', '-', $string);
            $string = trim($string, '-');
            $string = strtolower($string);

            if (empty($string)) {

                $slug = 'n-a';
            } else {


                $slug = $string;
            }

            #===============    PRICE   ===========================

            # ====   SELL Or RENT   ====

            $items = array(0, 1);

            $item = $items[array_rand($items,1)];

            # ====   PRICE Or NULL PRICE   ====

            $shw_prcs = array(0, 1, 2, 3, 4);

            $shw_prc = $shw_prcs[array_rand($shw_prcs,1)];

            if($item == 0) {

                $sell_rent = $item;

                $rent_per = null;

                if($shw_prc == 2) {

                    $price =  $faker->numberBetween(100, 50000);

                    $rent_per = null;

                } else {

                    $price = null;

                    $rent_per = null;
                }

                if($shw_prc == 0 || $shw_prc == 3) {

                    $fullAddress = $faker->address;

                } else {

                    $fullAddress = null;
                }

            } else if($item == 1) {

                $sell_rent = $item;

                if($shw_prc == 2 || $shw_prc == 4) {

                    $price =  $faker->numberBetween(100, 50000);

                    $rentArr = ['Hour', 'Day', 'Week', 'Month', 'Year'];

                    $rent = $rentArr[array_rand($rentArr,1)];

                    $rent_per = $rent;

                } else {

                    $price = null;

                    $rent_per = null;
                }

                if($shw_prc == 0 || $shw_prc == 3) {

                    $fullAddress = $faker->address;

                } else {

                    $fullAddress = null;
                }

            }

            if($item == 0 && $shw_prc == 2 || $shw_prc == 4) {

                $offers = $faker->sentences($nb = 3, $asText = false);
            } else {

                $offers = null;
            }

            #===============    State   ===========================

            $lvl1s = array(12, 22, 38, 19, 32);

            $lvl1 = $lvl1s[array_rand($lvl1s,1)];

            switch ($lvl1) {
                case 12:
                    $lvl2s = array(1041, 1068);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];

                    switch ($lvl2) {
                        case 1041:
                            $lvl3s = array(1, 3, 6);

                            $lvl3 = $lvl3s[array_rand($lvl3s,1)];
                            break;

                        case 1068:
                            $lvl3s = array(15, 19, 16, 20, 17, 5, 18);

                            $lvl3 = $lvl3s[array_rand($lvl3s,1)];
                            break;

                        default:
                            # code...
                            break;
                    }

                    break;
                case 22:

                    $lvl2 = 2707;

                    $lvl3s = array(7,8,9,10,11);

                    $lvl3 = $lvl3s[array_rand($lvl3s,1)];

                    break;
                case 32:

                    $lvl2 = 3134;
                    $lvl3 = 12;

                    break;
                case 38:

                    $lvl2 = 4546;
                    $lvl3 = 13;

                    break;
                case 19:

                    $lvl2 = 2044;
                    $lvl3 = 14;
                    break;


                default:
                    $lvl2s = array(1041, 1068);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];

                    switch ($lvl2) {
                        case 1041:
                            $lvl3s = array(1, 3, 6);

                            $lvl3 = $lvl3s[array_rand($lvl3s,1)];
                            break;

                        case 1068:
                            $lvl3s = array(15, 19, 16, 20, 17, 5, 18);

                            $lvl3 = $lvl3s[array_rand($lvl3s,1)];
                            break;

                        default:
                            # code...
                            break;
                    }
            }



    return [
        'storeview_id' => function() {
            return Storeview::all()->random();
        },

        'property_cat_id' => function() {
            return PropertyCategory::all()->random();
        },

        'image' => $faker->imageUrl($width = 400, $height = 400, 'city', true, 'Faker'),
        //'image' => 'https://picsum.photos/200/200/?random',

        'images' => serialize($values) ,

        // 'title' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'title' => $title,

        'slug' => $slug,

        'highlights' => serialize($highlights), //$faker->words($nb = 7, $asText = false),

        'descriptions' => serialize($ab), //$faker->paragraphs($nb = 2, $asText = false),

        'sell_rent' => $sell_rent,

        'price' => $price,

        'rent_per' => $rent_per,

        'full_address' => $fullAddress,

        'offers' => serialize($offers),

        'country_id' =>  101,

        'state_id' => $lvl1,

        'city_id' => $lvl2,

        'area_id' => $lvl3,

    ];
});
