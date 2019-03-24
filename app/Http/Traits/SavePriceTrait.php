<?php

namespace App\Http\Traits;

trait SavePriceTrait {

    public function create_price($request, $price)
    {
        // $price = new Price();

        $price->storeview_id = $request->str_id;

        $price->want_to = $request->want_to;

        if($request->amount) {

            $price->price = $request->amount;
        }

        if($request->want_to == 1) {

            if($request->discount) {

                $price->discount = $request->discount;
            }

            if($request->previous_price) {

                $price->previous_price = $request->previous_price;
            }

            $price->per = null;

        } else {

            if($request->per) {

                $price->per = $request->per;
            }

            $price->previous_price = null;

            $price->discount = null;
        }


        if($request->offers) {

            $price->offers = serialize($request->offers);
        }

        return $price;
    }
}
