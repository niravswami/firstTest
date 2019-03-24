<?php

namespace App\Http\Controllers\API\Property;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Property\Property;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Collections\PropertyCollection;
use App\Http\Resources\PropertyResource;
use App\Keyword;
use App\Storeview;
use App\Keywords\Prtkey;
use App\Http\Traits\ImagesTrait;

class PropertyController extends Controller
{
    use ImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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

            // $products= Property::whereHas('keywords', function ($query) use ($abc) {
            //     $query->where('name', 'LIKE', '%' . $abc . '%');

            //         });
            // $products= Property::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // });

            $searchValues = preg_split('/\s+/', $abc, -1, PREG_SPLIT_NO_EMPTY);

            $prds = $products = Property::whereHas('prtkeys', function ($query) use ($searchValues) {
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
                    });

            /* $products= Keyword::where(function ($query) use ($abc) {
                    $query->where('name', 'LIKE', '%' . $abc . '%');

                    }); */

                    /* =====================   Get Areas And Brands   ================================ */


            // $prds = Property::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // })->get();

            $prds = $prds->get();

            $areas = array();


            if(request()->has('ct')) {

                foreach ($prds as $key => $value) {
                    # code...

                    if($value->city->id == request()->ct) {

                        array_push($areas, $value->area);
                    }

                }

            }

            $queries['q'] = request()->q;

            // return $areas;
        }

        /* ==========================================================
                    Country
        ========================================================== */

            if(request()->has('cnt')) {

                $cnt = request()->cnt;

                $products = $products->where(function ($query) use ($cnt) {
                    $query->where('country_id', $cnt);
                }) ;

                $queries['cnt'] = request()->cnt;

                //return $prd->get();

                $states = array();

                foreach ($prds as $key => $value) {
                    # code...
                    if($value->country->id == request()->cnt) {

                        array_push($states, $value->state);
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
                    $query->where('state_id', $st);
                }) ;

                $queries['st'] = request()->st;

                //return $prd->get();

                $cities = array();

                foreach ($prds as $key => $value) {
                    # code...
                    if($value->state->id == request()->st) {

                        array_push($cities, $value->city);
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
                    $query->where('city_id', $ct);
                }) ;

                $queries['ct'] = request()->ct;

                //return $prd->get();

                $areas = array();

                foreach ($prds as $key => $value) {
                    # code...

                    if($value->city->id == request()->ct) {

                        array_push($areas, $value->area);
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
                    $query->whereIn('state_id', $get_states);
                });
            }
            /* ==============================================
                    Cities Filter
            ============================================== */

            if(request()->has('cities')) {

                $get_cities = request()->cities;

                $products = $products->where(function ($query) use ($get_cities) {
                    $query->whereIn('city_id', $get_cities);
                });
            }

            /* ==============================================
                Areas Filter
            ============================================== */

            if(request()->has('areas')) {

                $get_areas = request()->areas;

                $products = $products->where(function ($query) use ($get_areas) {
                    $query->whereIn('area_id', $get_areas);
                });

                $queries['areas'] = $get_areas;
            }

            /* ===========================================
                    Price Filter
            =========================================== */
            if (request()->has('prc_abv')) {

                $prc_abv = request()->prc_abv;

                $products = $products->where(function ($query) use ($prc_abv) {
                    $query->where('price', '>=', $prc_abv);
                });

                $queries['prc_abv'] = request()->prc_abv;
            }

            if (request()->has('prc_blw')) {

                $prc_blw = request()->prc_blw;

                $products = $products->where(function ($query) use ($prc_blw) {
                    $query->where('price', '<=', $prc_blw);
                });

                $queries['prc_blw'] = request()->prc_blw;
            }

            if(!$abc) {
                return PropertyCollection::collection(Property::paginate(8));
            } else {

                $prd = PropertyCollection::collection($products->latest()->paginate(8));

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

        // return response()->json(['propety' => $request->all(), 'success' => 'Property has been Listed'], 200);

        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            'image' => 'required' ,

            'propertyCategory' =>  'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',

            'country_id' => 'required',

            'state_id' => 'required',

            'city_id' => 'required',


            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }
       // return response()->json(['edu' => $request->all()]);

        $str_id = $request->str_id;

        $item = 'property';

        $property = new Property;

        $property->storeview_id = $str_id  ;

        $property->title = $request->title ;

        $property->slug = $request->slug ;

        //$property->keywords = serialize($request->keywords) ;

        $property->highlights = serialize($request->highlights) ;

        if($request->descriptions) {

            $property->descriptions = serialize($request->descriptions) ;
        }

        $property->sell_rent = $request->sellRent ;

        if($request->amount) {

            $property->price = $request->amount ;
        }

        if($request->rentPer) {

            $property->rent_per = $request->rentPer ;
        }

        $property->property_cat_id = $request->propertyCategory ;

        if($request->offers) {

            $property->offers = serialize($request->offers) ;
        }

        if($request->fullAddress) {

            $property->full_address = $request->fullAddress ;
        }

        if($request->country_id) {

            $property->country_id = $request->country_id ;
        }

        if($request->state_id) {

            $property->state_id = $request->state_id ;
        }

        if($request->city_id) {

            $property->city_id = $request->city_id ;
        }

        if($request->area_id) {

            $property->area_id = $request->area_id ;
        }

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath =  $request->image->store('public/'.$item.'/'.$str_id);

            $imgRealPath =  Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $property->image = $imgRealPath  ;

        if ($request->hasFile('imgs')) {

            // $imgs = $request->imgs;

            // $a=array();

            // foreach ($imgs as $img) {
            //     # code...
            //     $imagesPath =   $img->store('public/property/'.$str_id);

            //     //$imgArrRealPath = 'storage/app/'.$path ;
            //     $imgArrRealPath = Storage::url($imagesPath);

            //     array_push($a, $imgArrRealPath);
            // }

            $a = $this->save_imgs($request, $item) ;

        }

        if($request->imgs) {

            $property->images = serialize($a) ;
        }

        $property->save();

        if($request->keywords) {

            //$key = json_decode('keywords[]');
            $this->keywords($request, $property);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $prtkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $prtkey = Prtkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($prtkeys_to_sync, $prtkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $prtkey = new Prtkey();
            //         $prtkey->name = $k;
            //         $prtkey->save();
            //         array_push($prtkeys_to_sync, $prtkey->id);

            //     }
            // }
            // $property->keywords()->sync($keys_to_sync);
            // $property->prtkeys()->sync($prtkeys_to_sync);
        }


        // $property = Property::create([

        //     'storeview_id' => $str_id ,

        //     'images' => serialize($a),

        //     'title' => $request->title,

        //     'slug' => $request->slug,

        //     'keywords' => serialize($request->keywords),

        //     'highlights' => serialize($request->highlights),

        //     'descriptions' => serialize($request->descriptions),

        //     'sell_rent' => $request->sellRent,

        //     'price' => $request->amount,

        //     'rent_per' => $request->rentPer,

        //     'property_cat_id' => $request->propertyCategory,

        //     'offers' => serialize($request->offers),

        //     'full_address' => $request->fullAddress,

        //     'country_id' => $request->country_id,

        //     'state_id' => $request->state_id,

        //     'city_id' => $request->city_id,

        //     'area_id' => $request->area_id,


        // ]);


        return response()->json(['propety' => $property, 'success' => 'Property has been Listed'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PropertyResource(Property::find($id));

        // $property = Property::where('id', '=', $id)->first();

        // $abcd = unserialize($property->descriptions);

        // $abc = array();

        // foreach ($abcd as $area)
        // {
        //     $abc[] = json_decode($area);
        // }

        // $obj = [

        //     'what' => 'property',

        //     'id' => $property->id,

        //     'storeview_id' => $property->storeview_id ,

        //     'images' => unserialize($property->images),

        //     'title' => $property->title,

        //     'slug' => $property->slug,

        //     'keywords' => unserialize($property->keywords),

        //     'highLights' => unserialize($property->highlights) ,

        //     'description' => $abc,

        //     'sell_rent' =>  $property->sell_rent,

        //     'totalPrice' => $property->price ,

        //     'rent_per' => $property->rent_per ,

        //     'propertyCategory' => $property->propertycategory ,

        //     'fullAddress' =>  $property->full_address,

        //     'country' =>  $property->country,

        //     'state' =>  $property->state,

        //     'city' =>  $property->city,

        //     'offers' => unserialize($property->offers),

        //     'store_address' => $property->storeview->store_address ,

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

            'keywords' => 'required',

            'highlights' => 'required',


        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $item = 'property';

        $property = Property::find($id);

        if($request->title) {

            $property->title = $request->title;
        }

        if($request->slug) {

            $property->slug = $request->slug;
        }

        //$property->keywords = serialize($request->keywords);

        $property->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $property->descriptions = serialize($request->descriptions);
        }

        if($request->showPriceOrNot == 1 && $request->amount) {

            $property->price = $request->amount;

            if($request->rentPer) {

                $property->rent_per = $request->rentPer;
            }

        } else {

            $property->price = null;

            $property->rent_per = null;
        }

        if($request->sellRent) {

            $property->sell_rent = $request->sellRent;
        }


        if($request->propertyCategory) {

            $property->property_cat_id = $request->propertyCategory;
        }

        if($request->addressNotShow == false) {

            $property->full_address = null;

        } else {

            $property->full_address = $request->fullAddress;
        }

        if($request->country_id) {

            $property->country_id = $request->country_id;
        }
        if($request->state_id) {

            $property->state_id = $request->state_id;
        }
        if($request->city_id) {

            $property->city_id = $request->city_id;
        }
        if($request->area_id ) {

            $property->area_id = $request->area_id;
        }

        # ===   Single Image   ======================================================

        if ($request->hasFile('image')) {

            $oldImg = $property->image;

            $imgRealPath = $this->update_image($request, $oldImg, $item);

            // Add New Photo
            // $imagePath = $request->image->store('public/property/'.$str_id);

            // $imgRealPath = Storage::url($imagePath);

            // // Delete Old Photo

            // $productImage = str_replace('/storage', '', $oldImg);

            // Storage::delete('/public' . $productImage);

            //Storage::delete($oldImg);

        }

        if($request->image) {

            $property->image = $imgRealPath;
        }

        # ===   deelete images   =======================================================

        if ($request->deleteImages) {

            $oldImgs = $property->images;

            $storableArray = $this->delete_imgs($request, $oldImgs);

            // $deleteCompare = $request->deleteImages ;

            // $oldImgs = unserialize($oldImgs);

            // $intersect = array_intersect($oldImgs, $deleteCompare);

            // $diff = array_merge(array_diff($deleteCompare, $intersect), array_diff($oldImgs, $intersect));

            // foreach ($deleteCompare as $d) {

            //     $productImage = str_replace('/storage', '', $d);

            //     Storage::delete('/public' . $productImage);

            // }

            // $storableArray =  $diff;

            //return response()->json(['deleteCompare' => $deleteCompare, 'oldImgs' => $oldImgs, 'intersect' => $intersect, 'diff' => $diff, 'success' => 'kept imgs'], 200);
        }

        # ===   multiple images   =====================================================

        if ($request->hasFile('imgs')) {

            $oldImgs = $property->images;

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
            //         $imagesPath = $img->store('public/property/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($a, $imgArrRealPath);
            //     }

            //     $storableArray =  array_merge($comparision,$a);

                //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'sto' =>  $storableArray, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'if imgs if part'], 200);

            // } else {

            //     $result = 'all image must be replace' ;

            //     foreach ($oldImgs as $d) {

            //         $productImage = str_replace('/storage', '', $d);

            //         Storage::delete('/public' . $productImage);
            //     }

            //     /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

            //     $storableArray=array();

            //     foreach ($imgs as $img) {
            //         # code...
            //         $imagesPath =   $img->store('public/property/'.$str_id);

            //         $imgArrRealPath =  Storage::url($imagesPath);

            //         array_push($storableArray, $imgArrRealPath);
            //     }

            //     //return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            // }

        }

        if($request->imgs || $request->deleteImages ) {

            $property->images = serialize($storableArray);
        }

        $property->save();

        # ===   Keywords   ========================================

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $property);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;

            // $prtkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $prtkey = Prtkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($prtkeys_to_sync, $prtkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $prtkey = new Prtkey();
            //         $prtkey->name = $k;
            //         $prtkey->save();
            //         array_push($prtkeys_to_sync, $prtkey->id);

            //     }
            // }
            // $property->keywords()->sync($keys_to_sync);
            // $property->prtkeys()->sync($prtkeys_to_sync);
        }

        return response()->json(['edu' => $property, 'id' => $id, 'success' => 'Apply Changes'], 200);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $property = Property::find($id) ;

        $property->delete();

        return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
    }

    public function keywords($request, $service)
    {
        $key = $request->keywords;
        //$key = implode(" ",$request->keywords);

        $keys_to_sync = array() ;

        foreach ($key as $k) {

            // Get any existing tags
            $invkey = Prtkey::where('name', '=', $k)->first();

            // If the tag exists, sync it, otherwise create it
            if ($invkey != null) {

                //$inventory->keywords()->sync($keyword->id);

                array_push($keys_to_sync, $invkey->id);

            } else {

                $invkey = new Prtkey();
                $invkey->name = $k;
                $invkey->save();
                array_push($keys_to_sync, $invkey->id);
            }

        }
        //return $keys_to_sync ;
        return $service->prtkeys()->sync($keys_to_sync);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {
        $prd = Property::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return PropertyCollection::collection($prd);

    }

    public function delete_products_in_group(Request $request)
    {
        \Log::info($request->all());

        foreach ($request->prd_ids as $key => $id) {
            # code...

            $product = Property::find($id) ;

            $product->delete();
        }

        return response()->json(['req' => $request->all(), 'success' => 'Items Successfully Deleted.']);
    }
}
