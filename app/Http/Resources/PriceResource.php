<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceResource extends JsonResource
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

        return [
            'id' => $this->id ,

            'storeview_id' => $this->storeview_id ,

            'price' => $this->price ,

            'previous_price' => $this->previous_price ,

            'discount' => $this->discount ,

            'offers' => $this->offers ,
        ];
    }
}
