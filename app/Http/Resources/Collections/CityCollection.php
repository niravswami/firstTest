<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;

//class CityCollection extends ResourceCollection
class CityCollection extends Resource
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

        return [
            'id' => $this->id,

            'name' => $this->name,

            'cityarea' => route('cityarea', $this->id)
        ];
    }
}
