<?php

use Faker\Generator as Faker;
use App\Brand;
use App\Storeview;

$factory->define(App\UsedItem\UsedItem::class, function (Faker $faker) {
    #===================   IMAGES   ==========================

    $values = array();

        for ($i=0; $i < 4; $i++) {
        // get a random digit, but always a new one, to avoid duplicates
        $values []= $faker->imageUrl($width = 400, $height = 400, 'transport', true, 'Faker');
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

            #===============    CATEFORY   ===========================

            $lvl1s = array(1, 2, 3, 4, 5, 6, 7, 8);

            $lvl1 = $lvl1s[array_rand($lvl1s,1)];

            switch ($lvl1) {
                case 1:
                    $lvl2s = array(1, 2, 3, 4);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 2:
                    $lvl2s = array( 5, 6, 7, 8,9,10,11,12,13,14);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 3:
                    $lvl2s = array(15, 16, 17, 18, 19);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 4:
                    $lvl2s = array(20,21,22);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 5:
                    $lvl2s = array(23, 24, 25, 26);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 6:
                    $lvl2s = array(27, 28,29,30,31);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 7:
                    $lvl2s = array(32, 33, 34);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;
                case 8:
                    $lvl2s = array(35, 36);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
                    break;


                default:
                    $lvl2s = array(1, 2, 3, 4);

                    $lvl2 = $lvl2s[array_rand($lvl2s,1)];
            }



    return [
        'storeview_id' => function() {
            return Storeview::all()->random();
        },

        'brand_id' => function() {
            return Brand::all()->random();
        },

        'image' => $faker->imageUrl($width = 400, $height = 400, 'transport', true, 'Faker'),
        //'image' => 'https://picsum.photos/200/200/?random',

        'images' => serialize($values) ,

        // 'title' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'title' => $title,

        'slug' => $slug,

        // 'brand_id' => function() {

        //     return Brand::all()->random();
        // },

        'highlights' => serialize($highlights), //$faker->words($nb = 7, $asText = false),

        'descriptions' => serialize($ab), //$faker->paragraphs($nb = 2, $asText = false),

        'price' => $faker->numberBetween(100, 50000),

        'cat_lvl_one_id' =>  $lvl1,

        'cat_lvl_two_id' => $lvl2,

    ];
});
