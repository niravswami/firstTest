<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
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
            'id' => $this->id,
            //'shortname' => $this->shortname,
            'name' => $this->name,
            'phonecode' => $this->phonecode,
            'countrystates' => route('countrystates', $this->id),
        ];
    }
}
