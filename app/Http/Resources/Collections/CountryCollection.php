<?php

namespace App\Http\Resources\Collections;

use Illuminate\Http\Resources\Json\Resource;
//use Illuminate\Http\Resources\Json\ResourceCollection;

//class CountryCollection extends ResourceCollection
class CountryCollection extends Resource
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
            //'shortname' => $this->shortname,
            'name' => $this->name,
            'phonecode' => $this->phonecode,
            'countrystates' => route('countrystates', $this->id),
        ];
    }
}
