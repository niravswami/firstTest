<?php

use Faker\Generator as Faker;
use App\Education\FeesPerValue;
use App\Education\EducationCategory;
use App\Storeview;

$factory->define(App\Education\Education::class, function (Faker $faker) {
    #===================   IMAGES   ==========================

    $values = array();

        for ($i=0; $i < 4; $i++) {
        // get a random digit, but always a new one, to avoid duplicates
        $values []= $faker->imageUrl($width = 400, $height = 400, 'sports', true, 'Faker');
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

            $items = array(0, 1, 2);

            $item = $items[array_rand($items,1)];

            $peritems = array(1, 2, 3);

            $perItem = $peritems[array_rand($peritems,1)];

            if($item == 0) {

                $price =  $faker->numberBetween(100, 50000);

                $per = $perItem;

            } else {

                $price = null;

                $per = null;

            }

            if($item == 1) {

                $offers = $faker->sentences($nb = $perItem , $asText = false);
            } else {

                $offers = null;
            }



    return [
        'storeview_id' => function() {
            return Storeview::all()->random();
        },

        'category_id' => function() {
            return EducationCategory::all()->random();
        },

        'image' => $faker->imageUrl($width = 400, $height = 400, 'sports', true, 'Faker'),
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

        'fees' => $price,

        'per_id' => $per,

        'offers' => serialize($offers)

    ];
});
