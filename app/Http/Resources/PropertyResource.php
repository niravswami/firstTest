<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
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

            $abc = null;
        }

        if(isset($this->prtkeys)) {

            $keys = $this->prtkeys ;

            $key_name = array() ;

            foreach ($keys as $key => $value) {
                # code...

                array_push($key_name, $value->name);
            }
        }

        return [

            'what' => 'properties',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id ,

            'image' => $this->image,

            'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            'keywords' => $key_name,

            'highLights' => unserialize($this->highlights) ,

            'descriptions' => $abc,

            'sell_rent' =>  $this->sell_rent,

            'totalPrice' => $this->price ,

            'rent_per' => $this->rent_per ,

            'propertyCategory' => $this->propertycategory ,

            'fullAddress' =>  $this->full_address,

            'country' =>  $this->country,

            'state' =>  $this->state,

            'city' =>  $this->city,

            'area' =>  $this->area,

            'offers' => unserialize($this->offers),

            'store_address' => $this->storeviews->store_address ,

        ];
    }
}
