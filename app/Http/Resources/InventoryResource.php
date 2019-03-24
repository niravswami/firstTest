<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InventoryResource extends JsonResource
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

        /* $abcd = unserialize($this->descriptions);

        $abc = array();

        foreach ($abcd as $area)
        {
             // this is your area from json response
           //return print_r(json_decode($area)); // this is your area from json response
           //return $qq = gettype($area);
            $abc[] = json_decode($area);
        } */

        $strID = 9;

        return [

            'inv_id' => $this->id,

            'srt_id' => $this->storeview_id,

            'image' => $this->image,

            'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            'brand' => $this->brand,

            'rootCat' => $this->rootlvlcat ,

            'lvl_one' => $this->lvlonecat,

            'lvl_two' => $this->lvltwocat,

            'lvl_three' => $this->lvlthreecat,

            'keywords' => $this->keywords,

            'highLights' => unserialize($this->highlights),

           // 'descriptions' => $abc,
        ];
    }
}
