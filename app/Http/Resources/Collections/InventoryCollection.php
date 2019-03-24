<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;

//class InventoryCollection extends ResourceCollection
class InventoryCollection extends Resource
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
        if($this->descriptions) {

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

        return [

            'inv_id' => $this->id,

            'image' => $this->image,

            'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            'brand' => $this->brand,

            'keywords' => $this->keywords,

            'highLights' => unserialize($this->highlights) ,

            'descriptions' => $abc,

            'categories' => $this->categories,

        ];
    }
}
