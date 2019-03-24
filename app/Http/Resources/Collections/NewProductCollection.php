<?php

namespace App\Http\Resources\Collections;

use Illuminate\Http\Resources\Json\Resource;
use function Opis\Closure\unserialize;
use App\Http\Resources\InventoryResource;
use App\Http\Resources\Collections\InventoryCollection;


class NewProductCollection extends Resource
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


        // $str = $this->inventories['keywords'];

        // if(is_string($str)) {

        //     $key = (explode(" ",$str));

        // } else {

        //     $key = unserialize($str);
        // }

        return [

            'what' => 'products',

            'id' => $this->id,

            'want_to' => $this->price['want_to'],

            'storeview_id' => $this->storeview_id ,

            'inv_str_id' => $this->inventories['storeview_id'],

            'inv_id' => $this->inventories['id'] ,

            'image' => $this->inventories['image'],

            'images' => unserialize($this->inventories['images']),

            'highLights' => unserialize($this->inventories['highlights']) ,

            'title' => $this->inventories['title'],

            'slug' => $this->inventories['slug'],

            'descriptions' => $abc,

            'keywords' => $this->invkeys,

            /* ================   Categories Block   ================ */

            // 'root_cat' => $this->inventories->rootlvlcat ,

            // 'lvl_one_cat' => $this->inventories->lvlonecat ,

            // 'lvl_two_cat' => $this->inventories->lvltwocat ,

            // 'lvl_three_cat' => $this->inventories->lvlthreecat ,

            /* =================   Brand Block   ======================= */

            'brand' => $this->inventories->brand,

            /* ====================   Price Block   ==================== */

            'perviousPrice' => $this->price['previous_price'] ,

            'discount' => $this->price['discount'],

            //'totalPrice' => round((1 - ($this->price->discount/100)) * $this->price->price, 2),
            'totalPrice' => $this->price['price'],

            // 'rating' => $this->reviews->count() > 0 ? round($this->reviews->sum('star')/$this->reviews->count(), 1) : 0,

            'offers' => unserialize($this->price['offers']),

            'per' => $this->price['per'] ,

             /* ===   Region Block   === */

            'country' => $this->storeviews->country ,

            // 'state' => $this->storeviews->state,

            // 'city' => $this->storeviews->city,

            // 'area' => $this->storeviews->area,

            /* ===   Radio   === */

            // 'store_address' => $this->storeviews->store_address ,

            'href' => route('products.show', $this->id),
            /* 'href' => [

            ], */
            /* 'price_id' => $this->price_id,

            'title' => $this->storeviewproduct->title,

            */
            //'inventor' => new InventoryCollection($this->inventories),
            //'inventory' => new InventoryResource($this->inventories),

            /* 'store_address' => $this->storeview->store_address ,


            'storeview_products' => route('storeviewproducts.show', $this->storeview_product_id), */

            //'wantto' => $this->want_to,

            //'categoryInWantto' => $this->categoryInWant_to ,

        ];

    }
}

