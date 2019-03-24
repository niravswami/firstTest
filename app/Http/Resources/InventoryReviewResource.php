<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InventoryReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [

            'id' => $this->id,

            'costomer' => $this->user->first_name.' '.$this->user->last_name ,

            'heading' => $this->heading,

            'review' => $this->review,

            'star' => $this->star
        ];
    }
}
