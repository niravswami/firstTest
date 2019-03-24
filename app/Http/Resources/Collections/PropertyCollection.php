<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\URL;

//class PropertyCollection extends ResourceCollection
class PropertyCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       // return parent::toArray($request);

        // $abcd = unserialize($this->descriptions);

        // $abc = array();

        // foreach ($abcd as $area)
        // {
        //      // this is your area from json response
        //    //return print_r(json_decode($area)); // this is your area from json response
        //    //return $qq = gettype($area);
        //     $abc[] = json_decode($area);
        // }

        return [

            'what' => 'properties',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id ,

            'image' => URL::to($this->image),

            // 'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            //'keywords' => unserialize($this->keywords),

            //'highLights' => unserialize($this->highlights) ,

            //'descriptions' => $abc,

            'sell_rent' =>  $this->sell_rent,

            'totalPrice' => $this->price ,

            'rent_per' => $this->rent_per ,

            'propertyCategory' => $this->propertycategory ,

            //'fullAddress' =>  $this->full_address,

            'state' =>  $this->state,

            'city' =>  $this->city,

            'offers' => unserialize($this->offers),

            'href' => route('properties.show', $this->id),

        ];
    }
}
