<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Collections\ServiceAndBusinessCollection;

//class AllProductCollection extends ResourceCollection
class AllProductCollection extends Resource
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

        return [

            'str_id' => $this->storeview_id,

            'prd' =>  new ProductResource($this->product),

            'srv' =>  new ServiceAndBusinessCollection($this->serviceandbusiness),
            /* 'prd' =>  new ProductResource($this->product),
            'prd' =>  new ProductResource($this->product), */
        ];
    }
}
