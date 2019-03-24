<?php

use Faker\Generator as Faker;
use App\Storeview;
use App\Brand;

$factory->define(App\Inventory::class, function (Faker $faker) {

    $values = array();
        for ($i=0; $i < 4; $i++) {
        // get a random digit, but always a new one, to avoid duplicates
        $values []= $faker->imageUrl($width = 200, $height = 200, 'technics', true, 'Faker');
        }

        $ab = array();
        for ($i=0; $i < 3; $i++) {
            // get a random digit, but always a new one, to avoid duplicates

            $des = new stdClass;
            $des->heading = $faker->word;
            $des->description = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);

            $ab[] = json_encode($des) ;
        }

        $highlights = $faker->words($nb = 7, $asText = false);

        $descriptions = $faker->paragraphs($nb = 2, $asText = false);

        $items = array(0, 1);

        $item = $items[array_rand($items,1)];

        $title = $faker->sentence($nbWords = 8, $variableNbWords = true);

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


    return [
        'storeview_id' => function() {
            return Storeview::all()->random();
        },

        'image' => $faker->imageUrl($width = 200, $height = 200, 'technics', true, 'Faker'),
        //'image' => 'https://picsum.photos/200/200/?random',

        'images' => serialize($values) ,

        // 'title' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'title' => $title,

        'slug' => $slug,

        'brand_id' => function() {

            return Brand::all()->random();
        },

        'highlights' => serialize($highlights), //$faker->words($nb = 7, $asText = false),

        'descriptions' => serialize($ab), //$faker->paragraphs($nb = 2, $asText = false),

        'model_name' => $faker->word,

        'shareable' => $item,
    ];
});

#==================   SLUG MAKER   ============================

// function slugify ($string) {
//     $string = utf8_encode($string);
//     $string = iconv('UTF-8', 'ASCII//TRANSLIT', $string);
//     $string = preg_replace('/[^a-z0-9- ]/i', '', $string);
//     $string = str_replace(' ', '-', $string);
//     $string = trim($string, '-');
//     $string = strtolower($string);

//     if (empty($string)) {
//         return 'n-a';
//     }

//     return $string;
// }
