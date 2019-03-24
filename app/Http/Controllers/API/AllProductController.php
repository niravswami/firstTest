<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\AllProduct;
use App\Http\Resources\Collections\AllProductCollection;
use App\Education\Education;
use App\Http\Resources\Collections\EducationCollection;
use App\Product;
use App\Http\Resources\ProductCollection;
use App\Inventory;
use App\Property\Property;
use App\Http\Resources\Collections\PropertyCollection;
use App\ServiceAndBusiness\ServiceAndBusiness;
use App\Http\Resources\Collections\ServiceAndBusinessCollection;
use App\UsedItem\UsedItem;
use App\Http\Resources\Collections\UsedItemCollection;
use Illuminate\Support\Facades\DB;
use App\Keyword;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\Category\Category;
use App\Country;
use App\Http\Resources\Collections\CountryCollection;
use App\State;
use App\Http\Resources\Collections\StateCollection;
use App\Http\Resources\Collections\CityCollection;
use App\City;
use App\Keywords\Srvkey;
use App\Keywords\Utmkey;
use App\Keywords\Prtkey;
use App\Keywords\Edukey;
use App\Keywords\Invkey;


class AllProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $products)
    {
        //return AllProductCollection::collection(AllProduct::all());

        //return response()->json(['req' => request()->all()]);

        //$id = $request->id;


        // $prd =  $prd->appends($queries);

        if(request()->has('elc')) {

            $catId = request()->elc;

            $prd = $this->region(request(), $catId, $products);

            $prd = $prd->latest()->paginate(4);

            if(!empty($prd)) {

                $elc_prd = ProductCollection::collection($prd);

            } else {

                $elc_prd = null;
            }

            // $parent = Category::find($elc);

            // if(!$parent) {

            //     $parent = null;

            //     $elc_prd = null;

            // } else {

            //     $elc_child = Category::parent($elc)->renderAsArray();

            //     $inv = $parent->inventories()
            //         ->wherePivot('category_id', '=', $elc)
            //         ->get();


            //     $bb = array() ;

            //     foreach ($inv as $key => $value) {
            //         # code...

            //         array_push($bb, $value->id);
            //     }

            //     $rr = Product::whereIn('inventory_id',  $bb) ;


            //     $elc_prd = ProductCollection::collection($rr->get()) ;
            // }


        }

        if(request()->has('men')) {

            $catId = request()->men;

            $prd = $this->region(request(), $catId, $products);

            $prd = $prd->latest()->paginate(4);

            if(!empty($prd)) {

                $men_prd = ProductCollection::collection($prd);

            } else {

                $men_prd = null;
            }

            // $parent = Category::find($men);

            // if(!$parent) {

            //     $parent = null;

            //     $men_prd = null;

            // } else {

            //     $men_child = Category::parent($men)->renderAsArray();

            //     $inv = $parent->inventories()
            //             ->wherePivot('category_id', '=', $men)
            //             ->get();

            //     $bb = array() ;

            //     foreach ($inv as $key => $value) {
            //         # code...

            //         array_push($bb, $value->id);
            //     }

            //     $rr = Product::whereIn('inventory_id',  $bb) ;

            //     $men_prd = ProductCollection::collection($rr->get()) ;
            // }


        }

        if(request()->has('wom')) {

            $catId = request()->wom;

            $prd = $this->region(request(), $catId, $products);

            $prd = $prd->latest()->paginate(4);

            if(!empty($prd)) {

                $wom_prd = ProductCollection::collection($prd);

            } else {

                $wom_prd = null;
            }

            // $parent = Category::find($wom);

            // if(!$parent) {

            //     $parent = null;

            //     $wom_prd = null;

            // } else {

            //     $wom_child = Category::parent($wom)->renderAsArray();

            //     $inv = $parent->inventories()
            //     ->wherePivot('category_id', '=', $wom)
            //     ->get();

            //     $bb = array() ;

            //     foreach ($inv as $key => $value) {
            //         # code...

            //         array_push($bb, $value->id);
            //     }

            //     $rr = Product::whereIn('inventory_id',  $bb) ;

            //     $wom_prd = ProductCollection::collection($rr->get()) ;
            // }


        }

        return response()->json(['request' => request()->all(), 'Electrinics' => $elc_prd, 'Women' => $wom_prd, 'Men' => $men_prd ]);
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

    public function region($rqst, $catId, $products)
    {
        $queries = [];

        //return $rqst->cnt;

        /* =============================================================
                    CATEGORY
        ============================================================== */

            $id = $catId;

            $parent = Category::find($id);

            $inv = $parent->inventories()->get();
                    // ->wherePivot('category_id', '=', $id)
                    // ->get();

                    // return $inv;

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

            /* ==================================================== */



        /* ==========================================================
                    Country
        ========================================================== */

        if($rqst->cnt) {

            $cnt = $rqst->cnt;

            $prd = $prd->where(function ($query) use ($cnt) {
                $query->whereHas('storeviews', function ($query) use ($cnt) {
                    $query->where('country_id', $cnt);
                });
            }) ;



            $queries['cnt'] = request()->cnt;

            //return $prd->get();
        }
        /* ==========================================================
                    State
        ========================================================== */

        if($rqst->st) {

            $st = $rqst->st;

            $prd = $prd->where(function ($query) use ($st) {
                $query->whereHas('storeviews', function ($query) use ($st) {
                    $query->where('state_id', $st);
                });
            }) ;


            $queries['st'] = request()->st;

            //return $prd->get();
        }
        /* ==========================================================
        City
        ========================================================== */

        if($rqst->ct) {

            $ct = $rqst->ct;

            $prd = $prd->where(function ($query) use ($ct) {
                $query->whereHas('storeviews', function ($query) use ($ct) {
                    $query->where('city_id', $ct);
                });
            }) ;

            $queries['ct'] = request()->ct;

            //return $prd->get();
        }
        return $prd;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     /**
      * ----------------------------------------------------
      *     EDUCATION SEARCH
      * ---------------------------------------------------
      *
      */
      public function searchEducation(){

        if ($search = \Request::get('q')) {

            $searchValues = preg_split('/\s+/', $search, -1, PREG_SPLIT_NO_EMPTY);

            $products= Edukey::where(function ($query) use ($searchValues) {
                foreach ($searchValues as $value) {
                    $query->orWhere('name', 'like', "%{$value}%");
                  }

                })->get();
        }else{
            $products = Education::latest()->paginate(5);
        }
        return response()->json(['data' => $products]);

        // return $this->searchProducts();

        // if ($search = \Request::get('q')) {
        //     $users = Education::where(function($query) use ($search){
        //         $query->where('keywords','LIKE',"%$search%")
        //         ->orWhere('title','LIKE',"%$search%");
        //     })->paginate(20);
        // }else{
        //     $users = Education::latest()->paginate(5);
        // }
        // //return $users;
        // return EducationCollection::collection($users);
    }

    /**
     * ----------------------------------------------------
     *     PROPERTY SEARCH
     * ---------------------------------------------------
     *
      */
      public function searchProperties(){

        if ($search = \Request::get('q')) {

            $searchValues = preg_split('/\s+/', $search, -1, PREG_SPLIT_NO_EMPTY);

            $products= Prtkey::where(function ($query) use ($searchValues) {
                foreach ($searchValues as $value) {
                    $query->orWhere('name', 'like', "%{$value}%");
                  }

                })->get();
        }else{
            $products = Property::latest()->paginate(5);
        }
        return response()->json(['data' => $products]);

        // return $this->searchProducts();

        //   if ($search = \Request::get('q')) {
        //       $users = Property::where(function($query) use ($search){
        //           $query->where('keywords','LIKE',"%$search%")
        //           ->orWhere('title','LIKE',"%$search%");
        //         })->paginate(20);
        //     }else{
        //         $users = Property::latest()->paginate(5);
        //     }
        //     //return $users;
        //     return PropertyCollection::collection($users);
        }

    /**
     * ----------------------------------------------------
     *     SERVICE AND BUSINESS SEARCH
     * ---------------------------------------------------
     *
     */
    public function searchServieAndBusiness(){

        if ($search = \Request::get('q')) {

            $searchValues = preg_split('/\s+/', $search, -1, PREG_SPLIT_NO_EMPTY);

            $products= Srvkey::where(function ($query) use ($searchValues) {
                foreach ($searchValues as $value) {
                    $query->orWhere('name', 'like', "%{$value}%");
                  }

                })->get();
        }else{
            $products = ServiceAndBusiness::latest()->paginate(5);
        }
        return response()->json(['data' => $products]);





        // return $this->searchProducts();

        // if ($search = \Request::get('q')) {
        //     $users = ServiceAndBusiness::where(function($query) use ($search){
        //         $query->where('keywords','LIKE',"%$search%")
        //         ->orWhere('title','LIKE',"%$search%");
        //     })->paginate(20);
        // }else{
        //     $users = ServiceAndBusiness::latest()->paginate(5);
        // }
        // //return $users;
        // return ServiceAndBusinessCollection::collection($users);
    }

    /**
     * ----------------------------------------------------
     *     USED ITEM SEARCH
     * ---------------------------------------------------
     *
     */
    public function searchUsedItem(){

        if ($search = \Request::get('q')) {

            $searchValues = preg_split('/\s+/', $search, -1, PREG_SPLIT_NO_EMPTY);

            $products= Utmkey::where(function ($query) use ($searchValues) {
                foreach ($searchValues as $value) {
                    $query->orWhere('name', 'like', "%{$value}%");
                  }

                })->get();
        }else{
            $products = UsedItem::latest()->paginate(5);
        }
        return response()->json(['data' => $products]);

        // return $this->searchProducts();

        // if ($search = \Request::get('q')) {
        //     $users = UsedItem::where(function($query) use ($search){
        //         $query->where('keywords','LIKE',"%$search%")
        //         ->orWhere('title','LIKE',"%$search%");
        //     })->paginate(20);
        // }else{
        //     $users = UsedItem::latest()->paginate(5);
        // }
        // //return $users;
        // return UsedItemCollection::collection($users);
    }

    /**
     * ----------------------------------------------------
     *     PRODUCTS SEARCH
     * ---------------------------------------------------
     *
     */

    /* public function searchProducts(Request $request){

        if ($search = \Request::get('q')) {
            return response()->json(['ss' => $request->all()]);
            $products = Product::whereHas('inventories', function ($query) use ($search) {


                $query->where('keywords', 'like', '%' . $search . '%')
                    ->orWhere('title','LIKE','%' . $search . '%');
            })->get();
        }else{
            $products = Product::latest()->paginate(5);
        }
        //return $products;
        return ProductCollection::collection($products);
    } */
    public function searchProducts(){

        /* if ($search = \Request::get('q')) {
            $products = Product::whereHas('inventories', function ($query) use ($search) {
                $query->where('keywords', 'like', '%' . $search . '%')
                    ->orWhere('title','LIKE','%' . $search . '%');
            })->get();
        }else{
            $products = Product::latest()->paginate(5);
        }
        //return $products;
        return ProductCollection::collection($products); */

        //return request()->q ;

        // if ($search = \Request::get('q')) {
        //     $products= Keyword::where(function ($query) use ($search) {
        //         $query->where('name', 'LIKE', '%' . $search . '%');

        //         })->get();
        // }else{
        //     $products = Product::latest()->paginate(5);
        // }
        // return response()->json(['data' => $products]); ;
        // return ProductCollection::collection($products);

        if ($search = \Request::get('q')) {

            // $terms = explode(" ", $search);

            // $products = Keyword::query()
                // ->whereHas('user', function ($query) use ($terms) {
                //     foreach ($terms as $term) {
                //         // Loop over the terms and do a search for each.
                //         $query->where('name', 'like', '%' . $term . '%');
                //     }
                // })
                // ->orWhere(function ($query) use ($terms) {
                //     foreach ($terms as $term) {
                //         $query->where('tags', 'like', '%' . $term . '%');
                //     }
                // })
                // ->get();

            $searchValues = preg_split('/\s+/', $search, -1, PREG_SPLIT_NO_EMPTY);

            $products= Invkey::where(function ($query) use ($searchValues) {
                foreach ($searchValues as $value) {
                    $query->orWhere('name', 'like', "%{$value}%");
                  }
                // foreach(array_wrap($terms) as $value){
                //     $query->orWhere('name', 'like', "%{$value}%");
                //   }

                })->get();
        }else{
            $products = Product::latest()->paginate(5);
        }
        return response()->json(['data' => $products]);
        return ProductCollection::collection($products);
    }

    public function testIp(Request $request)
    {
        \Log::info($request->all());

        $country = $request['countryName'];

        $state = $request['regionName'];

        $city = $request['cityName'];

        /* ===================================
                Country
        =================================== */

        $country_array = CountryCollection::collection(Country::all()) ;

        $country = $country_array->where('name', '=', $country)->first() ;

        /* ===================================
                State
        =================================== */

        $state_array = StateCollection::collection(State::where('country_id', '=', $country['id'])->get()) ;

        $state = $state_array->where('name', '=', $state)->first() ;

        /* ===================================
                City
        =================================== */

        $city_array = CityCollection::collection(City::where('state_id', '=', $state['id'])->get()) ;

        $city = $city_array->where('name', '=', $city)->first() ;

        return response(['countryArray' => $country_array, 'country' => $country, 'stateArray' => $state_array, 'state' => $state, 'cityArray' => $city_array, 'city' => $city]);
        //return $request;
    }

    public function getGeoLocationFromIp()
	{
        $client = new \GuzzleHttp\Client();

        // Create a request
        //$request = $client->get('https://api.ipinfodb.com/v3/ip-city/?key=1af67c00a0ae23eecad8852b4b175c3b8ba3dda5e5a8ce703257f496fedb57cc&format=json&callback=?');
        $request = $client->get('https://api.ipinfodb.com/v3/ip-city/?key=1af67c00a0ae23eecad8852b4b175c3b8ba3dda5e5a8ce703257f496fedb57cc&format=json');

        $request =  json_decode((string)$request->getBody(),true);

        $country = $request['countryName'];

        $state = $request['regionName'];

        $city = $request['cityName'];

        /* ===================================
                Country
        =================================== */

        $country_array = CountryCollection::collection(Country::all()) ;

        $country = $country_array->where('name', '=', $country)->first() ;

        /* ===================================
                State
        =================================== */

        $state_array = StateCollection::collection(State::where('country_id', '=', $country['id'])->get()) ;

        $state = $state_array->where('name', '=', $state)->first() ;

        /* ===================================
                City
        =================================== */

        $city_array = CityCollection::collection(City::where('state_id', '=', $state['id'])->get()) ;

        $city = $city_array->where('name', '=', $city)->first() ;

        return response(['countryArray' => $country_array, 'country' => $country, 'stateArray' => $state_array, 'state' => $state, 'cityArray' => $city_array, 'city' => $city]);

        //dd($country);
        //dd($request['regionName']);

        //$request = $client->request('GET', 'http://api.petabyet.com/geoip/'); # real one
        //$request = $client->request('GET', 'https://geoip-db.com/json'); # onther but not accurate one

        //$request = $client->request('GET', 'http://api.petabyet.com/geoipp/'); # test for ERROR purpose

        // Get the actual response without headers


    }

    public function productfromstoreview()
    {
        $prd = ProductCollection::collection(Product::where('storeview_id', '=', request()->str_id)->get()) ;

        return response()->json(['prdFrmStr' => $prd]);
    }
}
