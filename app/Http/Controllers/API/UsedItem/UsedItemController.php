<?php

namespace App\Http\Controllers\API\UsedItem;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\UsedItem\UsedItem;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Collections\UsedItemCollection;
use App\Http\Resources\UsedItemResource;
use App\Keyword;
use App\Storeview;
use App\Http\Traits\RegionTrait;
use App\Http\Traits\PriceRangeTrait;
use App\Keywords\Utmkey;
use App\Http\Traits\ImagesTrait;

class UsedItemController extends Controller
{
    use RegionTrait, PriceRangeTrait, ImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return UsedItemCollection::collection(UsedItem::all());

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

            // $products= UsedItem::whereHas('keywords', function ($query) use ($abc) {
            //     $query->where('name', 'LIKE', '%' . $abc . '%');

            //         });

            // $products= UsedItem::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // });

            $searchValues = preg_split('/\s+/', $abc, -1, PREG_SPLIT_NO_EMPTY);

            $prds = $products = UsedItem::whereHas('utmkeys', function ($query) use ($searchValues) {
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


            // $prds = UsedItem::where('title', 'LIKE', '%' . $abc . '%')
            //         ->orWhereHas('keywords', function ($query) use ($abc) {
            //             $query->where('name', 'LIKE', '%' . $abc . '%');
            //         })->get();

            $prds = $prds->get();

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

            return UsedItemCollection::collection(UsedItem::paginate(8));

        } else {

            $prd = UsedItemCollection::collection($products['prd']->latest()->paginate(8));

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
                });

                $queries['cnt'] = request()->cnt;

                //return $prd->get();
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
                return UsedItemCollection::collection(UsedItem::paginate(8));
            } else {

                /* ===========================================
                        Price Order by Filter
                =========================================== */

                $prd = UsedItemCollection::collection($products->latest()->paginate(8));

                $prd =  $prd->appends($queries);

                return response()->json(['products' => $prd, 'area' => $areas]);
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

        // return response()->json(['edu' => $request->all()]);
        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            'image' => 'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',

            'amount' => 'required'


            ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $usedItem = new UsedItem;

        $item = 'useditem' ;

        $usedItem->storeview_id = $str_id ;

        $usedItem->title = $request->title ;

        $usedItem->slug = $request->slug ;

        //$usedItem->keywords = serialize($request->keywords) ;

        $usedItem->highlights = serialize($request->highlights) ;

        if($request->descriptions) {

            $usedItem->descriptions = serialize($request->descriptions) ;
        }

        if($request->brand) {

            $usedItem->brand_id = $request->brand ;
        }

        $usedItem->price = $request->amount ;

        if($request->firstCat) {

            $usedItem->cat_lvl_one_id = $request->firstCat ;
        }

        if($request->secondCat) {

            $usedItem->cat_lvl_two_id = $request->secondCat ;
        }

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath =  $request->image->store('public/'.$item.'/'.$str_id);

            $imgRealPath =  Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $usedItem->image = $imgRealPath ;

        if ($request->hasFile('imgs')) {

            // $imgs = $request->imgs;

            // $a=array();

            // foreach ($imgs as $img) {
            //     # code...
            //     $imagesPath =   $img->store('public/useditem/'.$str_id);

            //     //$imgArrRealPath = 'storage/app/'.$path ;
            //     $imgArrRealPath = Storage::url($imagesPath);

            //     array_push($a, $imgArrRealPath);
            // }

            $a = $this->save_imgs($request, $item) ;

        }

        if($request->imgs) {

            $usedItem->images = serialize($a) ;
        }

        $usedItem->save();

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $usedItem);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $utmkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $utmkey = Utmkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($utmkeys_to_sync, $utmkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $utmkey = new Utmkey();
            //         $utmkey->name = $k;
            //         $utmkey->save();
            //         array_push($utmkeys_to_sync, $utmkey->id);

            //     }
            // }
            // $usedItem->keywords()->sync($keys_to_sync);
            // $usedItem->utmkeys()->sync($utmkeys_to_sync);
        }

        return response()->json(['useditem' => $usedItem, 'success' => 'Item has been Listed'], 200);

        // $usedItem = UsedItem::create([

        //     'storeview_id' => $str_id ,

        //     'image' =>  $imgRealPath ,

        //     'images' => serialize($a),

        //     'title' => $request->title,

        //     'slug' => $request->slug,

        //     'keywords' => serialize($request->keywords),

        //     'highlights' => serialize($request->highlights),

        //     'descriptions' => serialize($request->descriptions),

        //     'brand_id' => $request->brand ,

        //     'price' => $request->amount,

        //     'cat_lvl_one_id' => $request->firstCat,

        //     'cat_lvl_two_id' => $request->secondCat,


        // ]);



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new UsedItemResource(UsedItem::find($id));

        // $edu = UsedItem::where('id', '=', $id)->first();

        // $abcd = unserialize($edu->descriptions);

        // $abc = array();

        // foreach ($abcd as $area)
        // {
        //     $abc[] = json_decode($area);
        // }

        // $obj = [

        //     'what' => 'useditem',

        //     'id' => $edu->id,

        //     'storeview_id' => $edu->storeview_id,

        //     'brand' => $edu->brand,

        //     'cat_lvl_one' => $edu->lvlOneCat,

        //     'cat_lvl_two' => $edu->lvlTwoCat,

        //     'cat_lvl_three' => $edu->lvlThreeCat,

        //     'images' => unserialize($edu->images),

        //     'title' => $edu->title,

        //     'slug' => $edu->slug,

        //     'keywords' => unserialize($edu->keywords),

        //     'highLights' => unserialize($edu->highlights) ,

        //     'description' => $abc,

        //     'totalPrice' => $edu->price,

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

        $item = 'useditem';

        $useditem = UsedItem::find($id);

        if($request->brand) {

            $useditem->brand_id = $request->brand;
        }

        if($request->title) {

            $useditem->title = $request->title;
        }

        if($request->slug) {

            $useditem->slug = $request->slug;
        }

        //$useditem->keywords = serialize($request->keywords);

        $useditem->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $useditem->descriptions = serialize($request->descriptions);
        }

        if($request->amount) {

            $useditem->price = $request->amount;
        }

        if($request->firstCat) {

            $useditem->cat_lvl_one_id = $request->firstCat;
        }
        if($request->secondCat) {

            $useditem->cat_lvl_two_id = $request->secondCat;
        }

        # ===   Single Image   ================================================

        if ($request->hasFile('image')) {

            $oldImg = $useditem->image;

            $imgRealPath = $this->update_image($request, $oldImg, $item);

            // Add New Photo
            // $imagePath = $request->image->store('public/useditem/'.$str_id);

            // $imgRealPath = Storage::url($imagePath);

            // // Delete Old Photo

            // $productImage = str_replace('/storage', '', $oldImg);

            // Storage::delete('/public' . $productImage);

            //Storage::delete($oldImg);

        }

        if($request->image) {

            $useditem->image = $imgRealPath;
        }

        # ===   Delete Images   =======================================================

        if ($request->deleteImages) {

            $oldImgs = $useditem->images;

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

        # ===   Multiple Images   =====================================

        if ($request->hasFile('imgs')) {

            $oldImgs = $useditem->images;

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
            //         $imagesPath = $img->store('public/useditem/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($a, $imgArrRealPath);
            //     }

            //     $storableArray =  array_merge($comparision,$a);

            //     //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'sto' =>  $storableArray, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'if imgs if part'], 200);

            // } else {

            //     $result = 'all image must be replace' ;

            //     if(!empty($oldImgs)) {

            //         foreach ($oldImgs as $d) {

            //             $productImage = str_replace('/storage', '', $d);

            //             Storage::delete('/public' . $productImage);
            //         }
            //     }


            //     /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

            //     $storableArray=array();

            //     foreach ($imgs as $img) {
            //         # code...
            //         $imagesPath =   $img->store('public/useditem/'.$str_id);

            //         $imgArrRealPath =  Storage::url($imagesPath);

            //         array_push($storableArray, $imgArrRealPath);
            //     }

            //     //return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            // }

        }

        if($request->imgs || $request->deleteImages ) {

            $useditem->images = serialize($storableArray);
        }

        $useditem->save();

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $useditem);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $utmkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();
            //     $utmkey = Utmkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($utmkeys_to_sync, $utmkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $utmkey = new Utmkey();
            //         $utmkey->name = $k;
            //         $utmkey->save();
            //         array_push($utmkeys_to_sync, $utmkey->id);

            //     }
            // }
            // $useditem->keywords()->sync($keys_to_sync);
            // $useditem->utmkeys()->sync($utmkeys_to_sync);
        }

        return response()->json(['edu' => $useditem, 'id' => $id, 'success' => 'Apply Changes'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $useditem = UsedItem::find($id) ;

        $useditem->delete();

        return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
    }

    public function keywords($request, $service)
    {
        $key = $request->keywords;
        //$key = implode(" ",$request->keywords);

        $keys_to_sync = array() ;

        foreach ($key as $k) {

            // Get any existing tags
            $invkey = Utmkey::where('name', '=', $k)->first();

            // If the tag exists, sync it, otherwise create it
            if ($invkey != null) {

                //$inventory->keywords()->sync($keyword->id);

                array_push($keys_to_sync, $invkey->id);

            } else {

                $invkey = new Utmkey();
                $invkey->name = $k;
                $invkey->save();
                array_push($keys_to_sync, $invkey->id);
            }

        }
        //return $keys_to_sync ;
        return $service->utmkeys()->sync($keys_to_sync);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {
        $prd = UsedItem::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return UsedItemCollection::collection($prd);

    }

    public function delete_products_in_group(Request $request)
    {
        \Log::info($request->all());

        foreach ($request->prd_ids as $key => $id) {
            # code...

            $product = UsedItem::find($id) ;

            $product->delete();
        }

        return response()->json(['req' => $request->all(), 'success' => 'Items Successfully Deleted.']);
    }
}
