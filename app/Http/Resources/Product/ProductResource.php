<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\StoreviewProductsResource;
use Illuminate\Support\Facades\URL;

class ProductResource extends JsonResource
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

        if(isset($this->inventories->descriptions)) {

            $abcd = unserialize($this->inventories->descriptions);

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

        $imgs = unserialize($this->inventories['images']);

        // return $imgs;

        if($imgs) {

            foreach ($imgs as $key => $value) {
                # code...

                $aa = URL::to(($value));

                array_push($urlImgs, $aa);

            }
        } else {

            $urlImgs = false;
        }



        if(isset($this->inventories->invkeys)) {

            $keys = $this->inventories->invkeys ;

            $key_name = array() ;

            foreach ($keys as $key => $value) {
                # code...

                array_push($key_name, $value->name);
            }
        }
        //$key = (json_decode($key));


        return [

            'what' => 'products',

            'want_to' => $this->price->want_to,

            'id' => $this->id,

            'storeview_id' => $this->storeview_id,

            'inv_str_id' => $this->inventories['storeview_id'],

            'prc_str_id' => $this->price['storeview_id'],

            'inv_id' => $this->inventories['id'] ,

           // 'storeview_product_id' => $this->inventories_id,

            'title' => $this->inventories->title ,
            //'title' => $this->inventories['title'] ,

            'slug' => $this->inventories->slug,

            // 'image' => $this->inventories['image'],
            'image' => URL::to($this->inventories['image']),

            // 'images' => unserialize($this->inventories['images']),
            'images' => $urlImgs,

            'highLights' => unserialize($this->inventories['highlights']) ,

            'descriptions' => $abc,

            'keywords' => $key_name,

            /* =================   Brand Block   ======================= */

            'brand' => $this->inventories->brand,

            /* =================   Price Block   ======================= */

            'perviousPrice' => $this->price['previous_price'],

            'discount' => $this->price['discount'],

            'totalPrice' =>  $this->price['price'] ,//round((1 - ($this->price->discount/100)) * $this->price->price, 2),

            'offers' => unserialize( $this->price['offers']),

            'per' => $this->price['per'] ,

            /* =================   Review   ============================ */

            'rating' => $this->reviews->count() > 0 ? round($this->reviews->sum('star')/$this->reviews->count(), 1) : 0,

            'totalReviews' => $this->reviews->count() ,

            'reviews_link' => route('reviews.index', $this->id),

            /* ===   Categories Block   === */

            'category' => $this->inventories->categories ,

            // 'root_cat' => $this->inventories->rootlvlcat ,

            // 'lvl_one_cat' => $this->inventories->lvlonecat ,

            // 'lvl_two_cat' => $this->inventories->lvltwocat ,

            // 'lvl_three_cat' => $this->inventories->lvlthreecat ,

            /* ===   Region Block   === */

            //'country' => $this->storeviews->country ,

            'state' => $this->storeviews->state,

            'city' => $this->storeviews->city,

            'area' => $this->storeviews->area,

            /* ===   Radio   === */

            'store_address' => $this->storeviews->store_address ,

            'u_name' => $this->storeviews->unique_key ,

            'href' => [
                //'reviews' => route('reviews.index', $this->id),

                //'storeview_link' => route('storeview.show', $this->id),
               // 'storeview_link' => route('storeview.show', $this->storeview_id),

                //'storeview_products' => route('storeviewproducts.show', $this->storeview_product_id),

                //'product_price' => route('price.show', $this->price_id),
            ]
        ];
        /* return [
            'title' => $this->title,

            'image' => $this->image,

            'images' => unserialize($this->images),

            'description' => $this->details,

            'price' => $this->price,

            'discount' => $this->discount,

            'totalPrice' => round((1 - ($this->discount/100)) * $this->price, 2),

            'rating' => $this->reviews->count() > 0 ? round($this->reviews->sum('star')/$this->reviews->count(), 1) : 0,

            'totalReviews' => $this->reviews->count() ,

            'store_address' => $this->storeview->store_address,

            'storeview_id' =>  $this->storeview->id,

            'href' => [
                'reviews' => route('reviews.index', $this->id),

                'storeview_link' => route('storeview.show', $this->id)
            ]
        ]; */
    }
}

