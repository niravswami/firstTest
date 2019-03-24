<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\URL;

//class ServiceAndBusinessCollection extends ResourceCollection
class ServiceAndBusinessCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        // if(isset($this->descriptions)) {

        //     $abcd = unserialize($this->descriptions);

        //     $abc = array();

        //     foreach ($abcd as $area)
        //     {
        //          // this is your area from json response
        //        //return print_r(json_decode($area)); // this is your area from json response
        //        //return $qq = gettype($area);
        //         $abc[] = json_decode($area);
        //     }
        // } else {

        //     $abc = null;
        // }



        return [

            'what' => 'serviceandbusiness',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id ,

            'image' => URL::to($this->image),

            // 'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            // 'category' => $this->servicesandbusinessescategory->name,
            'serviceCat' => $this->servicesandbusinessescategory,

            //'brand' => $this->brand,

            'keywords' => $this->keywords,

            'highLights' => unserialize($this->highlights) ,

            //'descriptions' => $abc,

            'totalPrice' => $this->price ,

            'offers' => unserialize($this->offers),

            'href' => route('serviceandbusiness.show', $this->id),

        ];
    }
}
