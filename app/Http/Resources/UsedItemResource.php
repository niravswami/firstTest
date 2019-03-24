<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class UsedItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        if(isset($this->descriptions)) {

            $abcd = unserialize($this->descriptions);

            $abc = array();

            foreach ($abcd as $area)
            {
                 // this is your area from json response
               //return print_r(json_decode($area)); // this is your area from json response
               //return $qq = gettype($area);
                $abc[] = json_decode($area);
            }
        } else {

            $abc = false;
        }

        // =======          Images          ==========

        $urlImgs = array();

        $imgs = unserialize($this->images);

        if($imgs) {

            foreach ($imgs as $key => $value) {
                # code...

                $aa = URL::to(($value));

                array_push($urlImgs, $aa);

            }
        } else {

            $urlImgs = false;
        }

        if(isset($this->utmkeys)) {

            $keys = $this->utmkeys ;

            $key_name = array() ;

            foreach ($keys as $key => $value) {
                # code...

                array_push($key_name, $value->name);
            }
        }

        return [

            'what' => 'useditems',

            'id' => $this->id,

            'image' => URL::to($this->image),

            // 'images' => unserialize($this->images),
            'images' => $urlImgs,

            'storeview_id' => $this->storeview_id,

            'brand' => $this->brand,

            'cat_lvl_one' => $this->lvlOneCat,

            'cat_lvl_two' => $this->lvlTwoCat,

            'cat_lvl_three' => $this->lvlThreeCat,

            'title' => $this->title,

            'slug' => $this->slug,

            'keywords' => $key_name,

            'highLights' => unserialize($this->highlights) ,

            'descriptions' => $abc,

            'totalPrice' => $this->price,

            'store_address' => $this->storeviews['store_address'] ,

        ];
    }
}
