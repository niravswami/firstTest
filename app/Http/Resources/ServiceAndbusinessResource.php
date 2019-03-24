<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class ServiceAndbusinessResource extends JsonResource
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

        // =======          Images          ==========

        $urlImgs = array();

        $imgs = unserialize($this->images);

        if($imgs) {

            foreach ($imgs as $key => $value) {
                # code...

                $aa = URL::to(($value));

                array_push($urlImgs, $aa);

            }
        } else {

            $urlImgs = false;
        }

        if(isset($this->srvkeys)) {

            $keys = $this->srvkeys ;

            $key_name = array() ;

            foreach ($keys as $key => $value) {
                # code...

                array_push($key_name, $value->name);
            }
        }

        return [

            'what' => 'serviceandbusiness',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id ,

            'image' => URL::to($this->image),

            // 'images' => unserialize($this->images),
            'images' => $urlImgs,

            'title' => $this->title,

            'slug' => $this->slug,

            // 'category' => $this->servicesandbusinessescategory,
            'serviceCat' => $this->servicesandbusinessescategory,

            //'brand' => $this->brand->name,

            //'keywords' => unserialize($this->keywords),
            'keywords' => $key_name,

            'highLights' => unserialize($this->highlights) ,

            'descriptions' => $abc,

            'totalPrice' => $this->price ,

            'offers' => unserialize($this->offers),

            /* =================   Review   ============================ */

            'rating' => $this->serviceandbusiness_reviews->count() > 0 ? round($this->serviceandbusiness_reviews->sum('star')/$this->serviceandbusiness_reviews->count(), 1) : 0,

            'totalReviews' => $this->serviceandbusiness_reviews->count() ,

            'reviews_link' => route('serviceandbusinessreviews.index', $this->id),

            'store_address' => $this->storeviews['store_address'] ,
       ];
    }
}
