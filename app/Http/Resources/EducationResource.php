<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EducationResource extends JsonResource
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

        if(isset($this->descriptions)) {

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

        if(isset($this->keywords)) {

            $keys = $this->keywords ;

            $key_name = array() ;

            foreach ($keys as $key => $value) {
                # code...

                array_push($key_name, $value->name);
            }
        }

        return [

            'what' => 'education',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id,

            'eduCategory' => $this->category,

            'image' => $this->image,

            'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            'keywords' => $key_name,

            'highLights' => unserialize($this->highlights) ,

            'descriptions' => $abc,

            /* ================   Price   ========================= */

            'totalPrice' => $this->fees,

            'feesper' => $this->feesper,

            'offers' => unserialize($this->offers),

            /* =================   Review   ============================ */

            'rating' => $this->education_reviews->count() > 0 ? round($this->education_reviews->sum('star')/$this->education_reviews->count(), 1) : 0,

            'totalReviews' => $this->education_reviews->count() ,

            'reviews_link' => route('educationreviews.index', $this->id),

            'store_address' => $this->storeviews->store_address ,
        ];
    }
}
