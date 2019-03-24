<?php

namespace App\Http\Controllers\API\ServiceAndBusiness;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ServiceAndBusiness\ServiceAndBusiness;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Collections\ServiceAndBusinessCollection;
use App\Http\Resources\ServiceAndbusinessResource;
use App\Keyword;
use App\Storeview;
use App\Http\Traits\RegionTrait;
use App\Http\Traits\PriceRangeTrait;
use App\Keywords\Srvkey;
use App\Http\Traits\ImagesTrait;

class ServiceAndBusinessController extends Controller
{
    use RegionTrait, PriceRangeTrait, ImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return ServiceAndBusinessCollection::collection(ServiceAndBusiness::all());

        $queries = [];

        $abc = request()->q;

        /* =============================================================================
                    Query Title Keywords
        ============================================================================= */

        if(request()->has('q')) {

            // $products->where(function ($query) use ($abc) {
            //     $query->whereHas('inventories', function ($query) use ($abc) {
            //         $query->where('keywords', 'like', '%' . $abc . '%')
            //             ->orWhere('title','LIKE','%' . $abc . '%');
            //     });
            // });

            // $products = Product::whereHas('inventories', function ($query) use ($abc) {
            //     $query->where('keywords', 'like', '%' . $abc . '%')
            //         ->orWhere('title','LIKE','%' . $abc . '%');
            // });

            // $products= ServiceAndBusiness::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // });

            $searchValues = preg_split('/\s+/', $abc, -1, PREG_SPLIT_NO_EMPTY);

            $prds = $products = ServiceAndBusiness::whereHas('srvkeys', function ($query) use ($searchValues) {
                    $query->where(function ($query) use ($searchValues) {
                        foreach ($searchValues as $value) {
                            $query->where('name', 'LIKE', "%{$value}%");
                        }
                    });
                })
                ->orWhere(function ($query) use ($searchValues) {
                        foreach ($searchValues as $value) {
                            // Loop over the terms and do a search for each.
                            $query->where('title', 'like', "%{$value}%");
                        }
                    })
                ->orWhere(function ($query) use ($searchValues) {
                    $query->whereHas('keywords', function ($query) use ($searchValues) {
                        foreach ($searchValues as $value) {
                            # code...
                            $query->where('name', 'like', "%{$value}%");
                        }
                    });
                });

            // $products= ServiceAndBusiness::where('title', 'LIKE', '%' . $abc . '%')
            //         ->orWhereHas('keywords', function ($query) use ($abc) {
            //             $query->where('name', 'LIKE', '%' . $abc . '%');
            //         });

                    // $query->where('title', 'LIKE', '%' . $abc . '%')
                    //     ->orWhereHas('keywords', function ($query) use ($abc) {
                    //     $query->where('name', 'LIKE', '%' . $abc . '%');
                    //         });
                    //     })

            /* $products= Keyword::where(function ($query) use ($abc) {
                    $query->where('name', 'LIKE', '%' . $abc . '%');

                    }); */

                    /* =====================   Get Areas And Brands   ================================ */


            // $prds = ServiceAndBusiness::where('title', 'LIKE', '%' . $abc . '%')
            //         ->orWhereHas('keywords', function ($query) use ($abc) {
            //             $query->where('name', 'LIKE', '%' . $abc . '%');
            //         })->get();

            $prds = $prds->get();

            // $prds = ServiceAndBusiness::whereHas('keywords', function ($query) use ($searchValues) {
            //     $query->where(function ($query) use ($searchValues) {
            //         foreach ($searchValues as $value) {
            //             $query->where('name', 'LIKE', "%{$value}%");
            //         }
            //     });
            // })
            // ->orWhere(function ($query) use ($searchValues) {
            //         foreach ($searchValues as $value) {
            //             // Loop over the terms and do a search for each.
            //             $query->where('title', 'like', "%{$value}%");
            //         }
            //     })->get();

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

            $queries['q'] = request()->q;

        }

        $products = $this->RegionFilter($queries, $prds, $products);

        $queries = $products['quer'];

        $area = $products['area'];

        $state = $products['state'];

        $city = $products['city'];

        $products = $products['prd'];

        $products = $this->price_range($queries, $products);

        if(!$abc) {

            return ServiceAndBusinessCollection::collection(ServiceAndBusiness::paginate(8));

        } else {

            $prd = ServiceAndBusinessCollection::collection($products['prd']->latest()->paginate(8));

            $prd =  $prd->appends($products['quer']);

            return response()->json(['products' => $prd, 'area' => $area, 'state' => $state, 'city' => $city,]);
        }

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

            if(!$abc) {
                return ServiceAndBusinessCollection::collection(ServiceAndBusiness::paginate(8));
            } else {


                $prd = ServiceAndBusinessCollection::collection($products->latest()->paginate(8));

                $prd =  $prd->appends($queries);

                return response()->json(['products' => $prd, 'area' => $areas, 'state' => $states, 'city' => $cities,]);
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
        \Log::info($request->all());

        // return response()->json(['res' => $request->all(), 'storeMethod' => 'store method'], 200);

        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            'image' => 'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',


        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $item = 'service';

        $service = new ServiceAndBusiness;

        $service->storeview_id = $str_id;

        $service->category_id = $request->category;

        if($request->brand) {

            $service->brand_id = $request->brand;
        }

        $service->title = $request->title;

        $service->slug = $request->slug;

        //$service->keywords = serialize($request->keywords);

        $service->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $service->descriptions = serialize($request->descriptions);
        }

        if($request->amount) {

            $service->price = $request->amount;
        }

        if($request->offers) {

            $service->offers = serialize($request->offers);
        }

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath =  $request->image->store('public/'.$item.'/'.$str_id);

            $imgRealPath =  Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $service->image = $imgRealPath;

        if ($request->hasFile('imgs')) {

            // $imgs = $request->imgs;

            // $a=array();

            // foreach ($imgs as $img) {
            //     # code...
            //     $imagesPath =   $img->store('public/business/'.$str_id);

            //     //$imgArrRealPath = 'storage/app/'.$path ;
            //     $imgArrRealPath = Storage::url($imagesPath);

            //     array_push($a, $imgArrRealPath);
            // }

            $a = $this->save_imgs($request, $item) ;

        }

        if($request->imgs) {

            $service->images = serialize($a);
        }

        $service->save();


        /* ===================================================================== */
        /* ===================================================================== */
        // Loop through the tag array that we just created

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $service);
            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $srvkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $srvkey = Srvkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         // $service->keywords()->sync($keyword->id, false);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($srvkeys_to_sync, $srvkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $srvkey = new Srvkey();
            //         $srvkey->name = $k;
            //         $srvkey->save();
            //         array_push($srvkeys_to_sync, $srvkey->id);
            //     }
            // }
            // $service->keywords()->sync($keys_to_sync);
            // $service->srvkeys()->sync($srvkeys_to_sync);

        }
        /* ============================================================================= */
        /* ============================================================================= */

        return response()->json(['srv' => $service, 'success' => 'Service / Business Has Been Uploaded'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ServiceAndbusinessResource(ServiceAndBusiness::find($id));

        // $srv = ServiceAndBusiness::where('id', '=', $id)->first();

        // $abcd = unserialize($srv->descriptions);

        // $abc = array();

        // foreach ($abcd as $area)
        // {
        //     $abc[] = json_decode($area);
        // }

        // $obj = [

        //     'what' => 'serviceandbusiness',

        //     'id' => $srv->id,

        //     'storeview_id' => $srv->storeview_id ,

        //     'images' => unserialize($srv->images),

        //     'title' => $srv->title,

        //     'slug' => $srv->slug,

        //     'category' => $srv->servicesandbusinessescategory,

        //     'brand' => $srv->brand,

        //     'keywords' => unserialize($srv->keywords),

        //     'highLights' => unserialize($srv->highlights) ,

        //     'description' => $abc,

        //     'totalPrice' => $srv->price ,

        //     'offers' => unserialize($srv->offers),

        //     'store_address' => $srv->storeview->store_address ,

        // ];

        // return $obj;
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
        \Log::info($request->all());

        // return response()->json(['res' => $request->all(), 'id' => $id, 'success' => 'update method'], 200);

        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            //'imgs' => 'required' ,

            'title' => 'required',

            //'keywords' => 'required',

            'highlights' => 'required',


        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $service = ServiceAndBusiness::find($id);

        $item = 'service';

        if($request->category) {

            $service->category_id = $request->category;
        }

        //$service->brand_id = $request->brand;

        if($request->title) {

            $service->title = $request->title;
        }

        if($request->slug) {

            $service->slug = $request->slug;
        }

        //$service->keywords = serialize($request->keywords);

        $service->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $service->descriptions = serialize($request->descriptions);
        }

        if($request->amount) {

            $service->price = $request->amount;
        }
        if($request->showPriceOrNot == 2) {

            $service->price = null;
        }

        if($request->offers) {

            $service->offers = serialize($request->offers);
        }

        // ###   Single Image   ========================

        if ($request->hasFile('image')) {

            $oldImg = $service->image;

            // Add New Photo
            // $imagePath = $request->image->store('public/business/'.$str_id);

            // $imgRealPath = Storage::url($imagePath);

            // // Delete Old Photo

            // $productImage = str_replace('/storage', '', $oldImg);

            // Storage::delete('/public' . $productImage);

            // //Storage::delete($oldImg);

            $imgRealPath = $this->update_image($request, $oldImg, $item);

        }

        if($request->image ) {

            $service->image = $imgRealPath;
        }

        // ###   Delete Images   ========================

        if ($request->deleteImages) {

            $oldImgs = $service->images;

            // $deleteCompare = $request->deleteImages ;

            // $oldImgs = unserialize($oldImgs);

            // $intersect = array_intersect($oldImgs, $deleteCompare);

            // $diff = array_merge(array_diff($deleteCompare, $intersect), array_diff($oldImgs, $intersect));

            // foreach ($deleteCompare as $d) {

            //     $productImage = str_replace('/storage', '', $d);

            //     Storage::delete('/public' . $productImage);

            // }

            // $storableArray =  $diff;

            $storableArray = $this->delete_imgs($request, $oldImgs);

            //return response()->json(['deleteCompare' => $deleteCompare, 'oldImgs' => $oldImgs, 'intersect' => $intersect, 'diff' => $diff, 'success' => 'kept imgs'], 200);
        }

        // ###   Multiple Images   ###   ========================

        if ($request->hasFile('imgs')) {

            $oldImgs = $service->images;

            $storableArray = $this->update_imgs($request, $oldImgs, $item);

            /* ===   Requested images   ======================================== */

            // $imgs = $request->imgs;

            // /* ===   images for kept and comparison   ====================================== */

            // $comparision = $request->compareimgs;

            // /* ===   Already saved images in database   =================================== */


            // $oldImgs = unserialize($oldImgs);

            // /* ===   compare old images array with incoming compare array   ============================= */

            // if(!empty($comparision)) {

            //     /* ===   merge comparision array and old images array   ============================== */

            //     $mergeArray = array_merge($comparision,$oldImgs);

            //     /* ===   get diff from merge array and old image array   =============================  */

            //     $intersect = array_intersect($comparision, $oldImgs);

            //     $diff = array_merge(array_diff($comparision, $intersect), array_diff($oldImgs, $intersect));

            //     /* ===   Delete all images in $diff ============================== */

            //     if(!empty($diff)) {

            //         foreach ($diff as $d) {

            //             $productImage = str_replace('/storage', '', $d);

            //             Storage::delete('/public' . $productImage);
            //         }
            //     }

            //     /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

            //     $a=array();

            //     foreach ($imgs as $img) {
            //         # code...
            //         $imagesPath =  $img->store('public/business/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($a, $imgArrRealPath);
            //     }

            //     $storableArray =  array_merge($comparision,$a);

            //     //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'sto' =>  $storableArray, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'if imgs if part'], 200);

            // } else {

            //     $result = 'all image must be replace' ;

            //     if($oldImgs) {

            //         foreach ($oldImgs as $d) {

            //             $productImage = str_replace('/storage', '', $d);

            //             Storage::delete('/public' . $productImage);
            //         }
            //     }


            //     /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

            //     $storableArray=array();

            //     foreach ($imgs as $img) {
            //         # code...
            //         $imagesPath =   $img->store('public/business/'.$str_id);

            //         $imgArrRealPath =  Storage::url($imagesPath);

            //         array_push($storableArray, $imgArrRealPath);
            //     }

                //return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            // }

        }

        if($request->imgs || $request->deleteImages ) {

            $service->images = serialize($storableArray);
        }

        $service->save();

        /* ===================================================================== */
        /* ===================================================================== */
        // Loop through the tag array that we just created

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $service);
            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $srvkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();
            //     $srvkey = Srvkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($srvkeys_to_sync, $srvkey->id);

            //     } else {

            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $srvkey = new Srvkey();
            //         $srvkey->name = $k;
            //         $srvkey->save();
            //         array_push($srvkeys_to_sync, $srvkey->id);

            //     }
            // }
            // $service->keywords()->sync($keys_to_sync);
            // $service->srvkeys()->sync($srvkeys_to_sync);
        }
        /* ============================================================================= */
        /* ============================================================================= */



        return response()->json(['srv' => $service, 'id' => $id, 'success' => 'Apply Changes'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
        $service = ServiceAndBusiness::find($id) ;

        $service->delete();

        return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
    }

    public function keywords($request, $service)
    {
        $key = $request->keywords;
        //$key = implode(" ",$request->keywords);

        $keys_to_sync = array() ;

        foreach ($key as $k) {

            // Get any existing tags
            $invkey = Srvkey::where('name', '=', $k)->first();

            // If the tag exists, sync it, otherwise create it
            if ($invkey != null) {

                //$inventory->keywords()->sync($keyword->id);

                array_push($keys_to_sync, $invkey->id);

            } else {

                $invkey = new Srvkey();
                $invkey->name = $k;
                $invkey->save();
                array_push($keys_to_sync, $invkey->id);
            }

        }
        //return $keys_to_sync ;
        return $service->srvkeys()->sync($keys_to_sync);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {
        $prd = ServiceAndBusiness::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return ServiceAndBusinessCollection::collection($prd);

    }

    public function delete_products_in_group(Request $request)
    {
        \Log::info($request->all());

        foreach ($request->prd_ids as $key => $id) {
            # code...

            $product = ServiceAndBusiness::find($id) ;

            $product->delete();
        }

        return response()->json(['req' => $request->all(), 'success' => 'Items Successfully Deleted.']);
    }
}
