<?php

namespace App\Http\Traits;

trait PriceRangeTrait {

    public function price_range($queries, $products)
    {

        /* ===========================================
                Price Range Filter
        =========================================== */

        if (request()->has('prc_abv')) {

            $prc_abv = request()->prc_abv;

            $products = $products->where(function ($query) use ($prc_abv) {
                $query->where('price', '>=', $prc_abv);
            });

            $queries['prc_abv'] = request()->prc_abv;
        }

        if (request()->has('prc_blw')) {

            $prc_blw =  request()->prc_blw;

            $products = $products->where(function ($query) use ($prc_blw) {
                $query->where('price', '<=', $prc_blw);
            });

            $queries['prc_blw'] = request()->prc_blw;
        }

        return ['prd' => $products, 'quer' => $queries];
    }
}
