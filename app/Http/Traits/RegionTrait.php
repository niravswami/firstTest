<?php

namespace App\Http\Traits;

use App\Storeview;


    trait RegionTrait {
        public function RegionFilter($queries, $prds ,$products) {
            // Get all the brands from the Brands Table.
            /* ==========================================================
                    Country
            ========================================================== */

            if(request()->has('cnt')) {

                $cnt = request()->cnt;

                $products = $products->where(function ($query) use ($cnt) {
                    $query->whereHas('storeviews', function ($query) use ($cnt) {
                        $query->where('country_id', $cnt);
                    });
                }) ;

                $queries['cnt'] = request()->cnt;

                //return $prd->get();
                $states = array();

                foreach ($prds as $key => $value) {
                    # code...
                    $qq = Storeview::find($value->storeview_id);

                    if($qq->state->country_id == request()->cnt) {

                        array_push($states, $qq->state);
                        $states = array_unique($states);
                    }

                }


            } else {

                $states = null;
            }
            /* ==========================================================
                        State
            ========================================================== */

            if(request()->has('st')) {

                $st = request()->st;

                $products = $products->where(function ($query) use ($st) {
                    $query->whereHas('storeviews', function ($query) use ($st) {
                        $query->where('state_id', $st);
                    });
                }) ;

                $queries['st'] = request()->st;

                //return $prd->get();

                $cities = array();


                foreach ($prds as $key => $value) {
                    # code...
                    $qq = Storeview::find($value->storeview_id);

                    if($qq->city->state_id == request()->st) {

                        array_push($cities, $qq->city);
                        $cities = array_unique($cities);
                    }

                }

                $states = $areas = null;

            } else {

                $cities = null;
            }
            /* ==========================================================
                        City
            ========================================================== */

            if(request()->has('ct')) {

                $ct = request()->ct;

                $products = $products->where(function ($query) use ($ct) {
                    $query->whereHas('storeviews', function ($query) use ($ct) {
                        $query->where('city_id', $ct);
                    });
                }) ;

                $queries['ct'] = request()->ct;

                //return $prd->get();

                $areas = array();

                foreach ($prds as $key => $value) {
                    # code...
                    $qq = Storeview::find($value->storeview_id);

                    if($qq->area->city_id == request()->ct) {

                        array_push($areas, $qq->area);
                        $areas = array_unique($areas);
                    }

                }

                $states = $cities = null;

            } else {

                $areas = null;
            }

            /* ==============================================
                States Filter
            ============================================== */

            if(request()->has('states')) {

                $get_states = request()->states;

                $products = $products->where(function ($query) use ($get_states) {
                    $query->whereHas('storeviews', function ($query) use ($get_states) {
                        $query->whereIn('state_id', $get_states);
                    });
                });

                // return $get_states;
            }
            /* ==============================================
                    Cities Filter
            ============================================== */

            if(request()->has('cities')) {

                $get_cities = request()->cities;

                $products = $products->where(function ($query) use ($get_cities) {
                    $query->whereHas('storeviews', function ($query) use ($get_cities) {
                        $query->whereIn('city_id', $get_cities);
                    });
                });
            }

            /* ==============================================
                Areas Filter
            ============================================== */

            if(request()->has('areas')) {

                $get_areas = request()->areas;

                $products = $products->where(function ($query) use ($get_areas) {
                    $query->whereHas('storeviews', function ($query) use ($get_areas) {
                        $query->whereIn('area_id', $get_areas);
                    });
                });
            }

            return ['prd' => $products, 'quer' => $queries, 'area' => $areas, 'state' => $states, 'city' => $cities,];
        }
    }
