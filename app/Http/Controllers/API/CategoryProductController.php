<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category\Category;
use App\Product;
use App\Http\Resources\ProductCollection;
use App\Storeview;
use App\Inventory;

class CategoryProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $products)
    {
        \Log::info(request()->all());

        //return response()->json(['abc' => request()->all()]) ;

        $queries = [];

        /* =============================================================
                    CATEGORY
        ============================================================== */

        if(request()->has('cat_srch')) {

            $id = request()->cat_srch;

            $all_cat = Category::nested()->get() ;

            $child = Category::parent($id)->renderAsArray();

            $parent = Category::find($id);

            $inv = $parent->inventories()
                    ->wherePivot('category_id', '=', $id)
                    ->get();

            $bb = array() ;

            foreach ($inv as $key => $value) {
                # code...

                array_push($bb, $value->id);
                array_unique($bb);
            }

            $prd = $products->whereHas('inventories',  function ($query) use ($bb) {
                $query->whereIn('id', $bb);
            });


            /* =====================   Get Areas   ================================ */


            $prds = $products->whereHas('inventories',  function ($query) use ($bb) {
                $query->whereIn('id', $bb);
            })->get();

            // $state = array();

            // if(request()->has('cnt')) {

            //     foreach ($prds as $key => $value) {
            //         # code...
            //         $qq = Storeview::find($value->storeview_id);

            //         if($qq->state->country_id == request()->cnt) {

            //             array_push($state, $qq->state);
            //         }

            //     }

            // }

            // $city = array();

            // if(request()->has('st')) {

            //     foreach ($prds as $key => $value) {
            //         # code...
            //         $qq = Storeview::find($value->storeview_id);

            //         if($qq->city->state_id == request()->st) {

            //             array_push($city, $qq->city);
            //         }

            //     }

            // }

            // $areas = array();

            // if(request()->has('ct')) {

            //     foreach ($prds as $key => $value) {
            //         # code...
            //         $qq = Storeview::find($value->storeview_id);

            //         if($qq->area->city_id == request()->ct) {

            //             array_push($areas, $qq->area);
            //         }

            //     }

            // }

            /* ===================  Brands    =============================== */

            $brds = array();

            foreach ($inv as $key => $value) {
                # code...

                if($value->brand) {

                    array_push($brds, $value->brand);
                }

            }

            $brands = $brds;

            /* ==================================================== */

            $queries['cat_srch'] = request()->cat_srch;

        }

        /* ===========================================
                Retail, Rent, Wholesale Filter
        =========================================== */
        if(request()->has('wantto')){

            $wantto =  request()->wantto;

            if($wantto != '0') {

                $prd = $prd->where(function ($query) use ($wantto) {
                    $query->whereHas('price', function ($query) use ($wantto) {
                        $query->where('want_to', $wantto);
                    });
                }) ;

            }

            $queries['wantto'] = request()->wantto;


        }

        /* ==========================================================
                    Brand
        ========================================================== */

        if(request()->has('brd')) {

            $brd = request()->brd;

            $prd = $prd->where(function ($query) use ($brd) {
                $query->whereHas('inventories', function ($query) use ($brd) {
                    $query->whereIn('brand_id', $brd);
                });
            }) ;

            $queries['brd'] = request()->brd;

            //return $prd->get();
        }
        /* ==========================================================
                    Country
        ========================================================== */

        if(request()->has('cnt')) {

            $cnt = request()->cnt;

            $prd = $prd->where(function ($query) use ($cnt) {
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

            $prd = $prd->where(function ($query) use ($st) {
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

            $prd = $prd->where(function ($query) use ($ct) {
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

            $prd = $prd->where(function ($query) use ($get_states) {
                $query->whereHas('storeviews', function ($query) use ($get_states) {
                    $query->whereIn('state_id', $get_states);
                });
            });
        }
        /* ==============================================
                Cities Filter
        ============================================== */

        if(request()->has('cities')) {

            $get_cities = request()->cities;

            $prd = $prd->where(function ($query) use ($get_cities) {
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

            $prd = $prd->where(function ($query) use ($get_areas) {
                $query->whereHas('storeviews', function ($query) use ($get_areas) {
                    $query->whereIn('area_id', $get_areas);
                });
            });
        }

        /* ===========================================
                    Price Range
            =========================================== */

            if (request()->has('prc_abv')) {

                $abv = request()->prc_abv;

                $prd = $prd->where(function ($query) use ($abv) {
                    $query->whereHas('price', function ($query) use ($abv) {
                        $query->where('price', '>=', $abv);
                    });
                });

                $queries['prc_abv'] = request()->prc_abv;
            }

            if (request()->has('prc_blw')) {

                $blw = request()->prc_blw;

                $prd = $prd->where(function ($query) use ($blw) {
                    $query->whereHas('price', function ($query) use ($blw) {
                        $query->where('price', '<=', $blw);
                    });
                });

                $queries['prc_blw'] = request()->prc_blw;
            }

            /* ===================================================== */

        $prd = ProductCollection::collection($prd->latest()->paginate(8));

        $prd =  $prd->appends($queries);

        return response()->json(['children' => request()->all(), 'allCat' => $all_cat , 'child' => $child,  'parent' => $parent, 'products' => $prd , 'state' => $states, 'city' => $cities, 'area' => $areas, 'brands' => $brands ]);


        if($id != 0) {



            $products = Product::whereIn('inventory_id',  $bb) ;


            /* $abc = 'quam';

            $rr->where(function ($query) use ($abc) {
                $query->whereHas('inventories', function ($query) use ($abc) {
                    $query->where('keywords', 'like', '%' . $abc . '%')
                        ->orWhere('title','LIKE','%' . $abc . '%');
                });
            });

            $rr = $rr->where(function ($query) use ($abc) {
                $query->whereHas('price', function ($query) use ($abc) {
                    $query->where('price', '>=', 14000);
                });
            }); */

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function cmp($a, $b) {
        if ($a == $b) {
            return 0;
        }
        return ($a < $b) ? -1 : 1;
    }
}
