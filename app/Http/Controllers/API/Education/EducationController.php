<?php

namespace App\Http\Controllers\API\Education;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Education\Education;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Collections\EducationCollection;
use App\Http\Resources\EducationResource;
use App\Keyword;
use App\Storeview;
use App\Http\Traits\RegionTrait;
use App\Http\Traits\PriceRangeTrait;
use App\Keywords\Edukey;

class EducationController extends Controller
{
    use RegionTrait, PriceRangeTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return EducationCollection::collection(Education::all());

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

            // $products= Education::whereHas('keywords', function ($query) use ($abc) {
            //     $query->where('name', 'LIKE', '%' . $abc . '%');

            //         });

            // $products= Education::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // });

            $searchValues = preg_split('/\s+/', $abc, -1, PREG_SPLIT_NO_EMPTY);

            $prds = $products = Education::whereHas('edukeys', function ($query) use ($searchValues) {
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


            // $prds = Education::where(function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //                 $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            // })->get();

                    // return $prds;

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

        /* ===========================================
                Price Range Filter
        =========================================== */

        if (request()->has('prc_abv')) {

            $prc_abv = request()->prc_abv;

            $products = $products->where(function ($query) use ($prc_abv) {
                $query->where('fees', '>=', $prc_abv);
            });

            $queries['prc_abv'] = request()->prc_abv;
        }

        if (request()->has('prc_blw')) {

            $prc_blw =  request()->prc_blw;

            $products = $products->where(function ($query) use ($prc_blw) {
                $query->where('fees', '<=', $prc_blw);
            });

            $queries['prc_blw'] = request()->prc_blw;
        }

        /* ======================================================
                Region Filter
        ====================================================== */

        $products = $this->RegionFilter($queries, $prds, $products);

        if(!$abc) {

            return EducationCollection::collection(Education::paginate(8));

        } else {

            $prd = EducationCollection::collection($products['prd']->latest()->paginate(8));

            $prd =  $prd->appends($products['quer']);

            return response()->json(['products' => $prd, 'area' => $products['area'], 'state' => $products['state'], 'city' => $products['city']]);
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

                // return $products->get();
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

                // return $products->get();
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

                // return $products->get();
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
                return EducationCollection::collection(Education::paginate(8));
            } else {

                /* ===========================================
                        Price Order by Filter
                =========================================== */

                 if(request()->has('prc_srt')) {

                    $products->where(function ($query) use ($abc) {
                        $query->whereHas('price', function ($query) use ($abc) {
                            $query->orderBy('price', request()->prc_srt == 'p_asc' ? 'asc' : 'desc');
                            //sort($numbers);
                        });
                    });

                $queries['prc_asc'] = request()->prc_asc;
            }

                if(request()->has('prc_srt')) {

                    $prd = EducationCollection::collection($products->paginate(8));

                }

                if(!request()->has('prc_srt')) {

                    $prd = EducationCollection::collection($products->latest()->paginate(8));
                }

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

        // return response()->json(['edu' => $request->all(), 'success' => 'Education Has Been Listed']);

        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            'image' => 'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',

            'category' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $item = 'education';

        $education = new Education;

        $education->storeview_id = $str_id;

        $education->category_id = $request->category;

        $education->title = $request->title;

        $education->slug = $request->slug;

        //$education->keywords = serialize($request->keywords);

        $education->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $education->descriptions = serialize($request->descriptions);
        }


        if($request->contactForPrice == 1) {

            $education->fees = $request->fees;

            $education->per_id = $request->feesPer;

        }

        if($request->offers) {

            $education->offers = serialize($request->offers);
        }

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath =  $request->image->store('public/'.$item.'/'.$str_id);

            $imgRealPath =  Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $education->image = $imgRealPath;

        if ($request->hasFile('imgs')) {

            // $imgs = $request->imgs;

            // $a=array();

            // foreach ($imgs as $img) {
            //     # code...
            //     $imagesPath =   $img->store('public/education/'.$str_id);

            //     //$imgArrRealPath = 'storage/app/'.$path ;
            //     $imgArrRealPath = Storage::url($imagesPath);

            //     array_push($a, $imgArrRealPath);
            // }

            $a = $this->save_imgs($request, $item) ;

        }

        if($request->imgs) {

            $education->images = serialize($a);
        }

        $education->save();

        # ===   Keywords   ========================================

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $education);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $edukeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $edukey = Edukey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);

            //         array_push($edukeys_to_sync, $edukey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $edukey = new Edukey();
            //         $edukey->name = $k;
            //         $edukey->save();
            //         array_push($edukeys_to_sync, $edukey->id);

            //     }
            // }
            // $education->keywords()->sync($keys_to_sync);
            // $education->edukeys()->sync($edukeys_to_sync);
        }

        // $education = Education::create([

        //     'storeview_id' => $str_id ,

        //     'category_id' => $request->category ,

        //     'images' => serialize($a),

        //     'title' => $request->title,

        //     'slug' => $request->slug,

        //     'keywords' => serialize($request->keywords),

        //     'highlights' => serialize($request->highlights),

        //     'descriptions' => serialize($request->descriptions),

        //     'fees' => $request->fees,

        //     'per_id' => $request->feesPer,

        //     'offers' => serialize($request->offers),

        // ]);


        return response()->json(['edu' => $education, 'success' => 'Education has been uploaded'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return new EducationResource(Education::find($id));

        // $edu = Education::where('id', '=', $id)->first();

        // $abcd = unserialize($edu->descriptions);

        // $abc = array();

        // foreach ($abcd as $area)
        // {
        //     $abc[] = json_decode($area);
        // }

        // $obj = [

        //     'what' => 'education',

        //     'id' => $edu->id,

        //     'storeview_id' => $edu->storeview_id,

        //     'eduCategory' => $edu->category,

        //     'images' => unserialize($edu->images),

        //     'title' => $edu->title,

        //     'slug' => $edu->slug,

        //     'keywords' => unserialize($edu->keywords),

        //     'highLights' => unserialize($edu->highlights) ,

        //     'description' => $abc,

        //     'totalPrice' => $edu->fees,

        //     'feesper' => $edu->feesper,

        //     'offers' => unserialize($edu->offers),

        //     'store_address' => $edu->storeview->store_address ,

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

        // return response()->json(['res' => $request->all(), 'id' => $id, 'update' => 'update method'], 200);

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

        $education = Education::find($id);

        $item = 'service';

        $education->category_id = $request->category;

        if($request->title) {

            $education->title = $request->title;
        }

        if($request->slug) {

            $education->slug = $request->slug;
        }

        //$education->keywords = serialize($request->keywords);

        $education->highlights = serialize($request->highlights);

        if($request->descriptions) {

            $education->descriptions = serialize($request->descriptions);
        }

        if($request->showPriceOrNot == 1) {

            $education->fees = $request->fees;

            if($request->feesPer) {

            $education->per_id = $request->feesPer;
        }

        } else {

            $education->fees = null;

            $education->per_id = null;

        }

        if($request->offers) {

            $education->offers = serialize($request->offers);
        }

        # ===   Single imgae   ===============================================

        if ($request->hasFile('image')) {

            $oldImg = $education->image;

            // Add New Photo
            // $imagePath = $request->image->store('public/education/'.$str_id);

            // $imgRealPath = Storage::url($imagePath);

            // // Delete Old Photo

            // $productImage = str_replace('/storage', '', $oldImg);

            // Storage::delete('/public' . $productImage);

            //Storage::delete($oldImg);

            $imgRealPath = $this->update_image($request, $oldImg, $item);

        }

        if($request->image ) {

            $education->image = $imgRealPath;
        }

        # ===   Delete images   ====================================================

        if ($request->deleteImages) {

            $oldImgs = $education->images;

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

        # ===   Multiple images   ===============================================

        if ($request->hasFile('imgs')) {

            $oldImgs = $education->images;

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
            //         $imagesPath = $img->store('public/education/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($a, $imgArrRealPath);
            //     }

            //     $storableArray =  array_merge($comparision,$a);

            //     //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'sto' =>  $storableArray, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'if imgs if part'], 200);

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
            //         $imagesPath =   $img->store('public/education/'.$str_id);

            //         $imgArrRealPath =  Storage::url($imagesPath);

            //         array_push($storableArray, $imgArrRealPath);
            //     }

            //     //return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            // }

        }

        if($request->imgs || $request->deleteImages ) {

            $education->images = serialize($storableArray);
        }

        $education->save();

        # ===   Keywords   ========================================

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $education);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $edukeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();

            //     $edukey = Edukey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$service->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);

            //         array_push($edukeys_to_sync, $edukey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $edukey = new Edukey();
            //         $edukey->name = $k;
            //         $edukey->save();
            //         array_push($edukeys_to_sync, $edukey->id);

            //     }
            // }
            // $education->keywords()->sync($keys_to_sync);
            // $education->edukeys()->sync($edukeys_to_sync);
        }

        return response()->json(['edu' => $education, 'id' => $id, 'success' => 'Apply Changes'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $education = Education::find($id) ;

        $education->delete();

        return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
    }

    public function keywords($request, $service)
    {
        $key = $request->keywords;
        //$key = implode(" ",$request->keywords);

        $keys_to_sync = array() ;

        foreach ($key as $k) {

            // Get any existing tags
            $invkey = Edukey::where('name', '=', $k)->first();

            // If the tag exists, sync it, otherwise create it
            if ($invkey != null) {

                //$inventory->keywords()->sync($keyword->id);

                array_push($keys_to_sync, $invkey->id);

            } else {

                $invkey = new Edukey();
                $invkey->name = $k;
                $invkey->save();
                array_push($keys_to_sync, $invkey->id);
            }

        }
        //return $keys_to_sync ;
        return $service->edukeys()->sync($keys_to_sync);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {
        $prd = Education::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return EducationCollection::collection($prd);

    }

    public function delete_products_in_group(Request $request)
    {
        \Log::info($request->all());

        foreach ($request->prd_ids as $key => $id) {
            # code...

            $product = Education::find($id) ;

            $product->delete();
        }

        return response()->json(['req' => $request->all(), 'success' => 'Items Successfully Deleted.']);
    }
}
