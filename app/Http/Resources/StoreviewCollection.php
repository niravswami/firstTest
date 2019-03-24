<?php

namespace App\Http\Resources;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\InventoryResource;

//class StoreviewCollection extends ResourceCollection
class StoreviewCollection extends Resource
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

            'str_id' => $this->id,

            'str_addr' => $this->store_address,

            'str_img' => $this->image ,

            'unique_key' => $this->unique_key ,

            'str_name' => $this->store_name,

            'str_state' => $this->state->name,

            'str_city' => $this->city->name,

        ];
    }
}
