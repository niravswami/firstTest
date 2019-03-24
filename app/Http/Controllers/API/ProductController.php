<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\ProductCollection;
use App\Storeview;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Inventory;
use App\Price;
use App\Keyword;
use Illuminate\Support\Facades\DB;
use App\Category\Category;
use App\Http\Resources\InventoryResource;
use App\Http\Resources\Collections\InventoryCollection;
use App\Http\Traits\RegionTrait;
use App\Category\ReadyCategory;
use App\Keywords\Invkey;
use App\Http\Traits\SavePriceTrait;
use App\Http\Traits\ImagesTrait;

class ProductController extends Controller
{
    use RegionTrait, SavePriceTrait, ImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $products)
    {
        //return Product::all() ;
        //return ProductCollection::collection(Product::all());

       //return response()->json(['aa' => request()->all()], 200);

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

                /* ==== */
            // $products= Product::whereHas('inventories', function ($query) use ($abc) {
            //     $query->whereHas('keywords', function ($query) use ($abc) {
            //         $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            //         });

            // $products= Product::whereHas('inventories', function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //             $query->where('name', 'LIKE', '%' . $abc . '%');
            //                 });
            //             });

            // $searchValues = preg_split('/\s+/', $abc, -1, PREG_SPLIT_NO_EMPTY);
            $searchValues = explode(' ', $abc);

            $prds = $products = Product::whereHas('inventories', function ($query) use ($searchValues) {
                    $query->where(function ($query) use ($searchValues) {
                        $query->whereHas('invkeys', function ($query) use ($searchValues) {
                            foreach ($searchValues as $value) {
                                $query->where('name', 'LIKE', "%{$value}%");
                            }
                        });
                    });
                })
                ->orWhereHas('inventories', function ($query) use ($searchValues) {
                        foreach ($searchValues as $value) {
                            // Loop over the terms and do a search for each.
                            $query->where('title', 'like', "%{$value}%");
                        }
                    });


            /* $products= Keyword::where(function ($query) use ($abc) {
                    $query->where('name', 'LIKE', '%' . $abc . '%');

                    }); */

                    /* =====================   Get Areas And Brands   ================================ */


            // $prds = Product::whereHas('inventories', function ($query) use ($abc) {
            //     $query->whereHas('keywords', function ($query) use ($abc) {
            //         $query->where('name', 'LIKE', '%' . $abc . '%');
            //             });
            //         })->get();
            // $prds = Product::whereHas('inventories', function ($query) use ($abc) {
            //     $query->where('title', 'LIKE', '%' . $abc . '%')
            //             ->orWhereHas('keywords', function ($query) use ($abc) {
            //             $query->where('name', 'LIKE', '%' . $abc . '%');
            //                 });
            //             })->get();

            // $prds = Product::whereHas('inventories', function ($query) use ($searchValues) {
            //     $query->where(function ($query) use ($searchValues) {
            //         $query->whereHas('keywords', function ($query) use ($searchValues) {
            //             foreach ($searchValues as $value) {
            //                 $query->where('name', 'LIKE', "%{$value}%");
            //             }
            //         });
            //     });
            // })
            //     ->orWhereHas('inventories', function ($query) use ($searchValues) {
            //             foreach ($searchValues as $value) {
            //                 // Loop over the terms and do a search for each.
            //                 $query->where('title', 'like', "%{$value}%");
            //             }
            //         })
            //     ->get();

            $prds = $prds->get();

            $brds = array();

            if(request()->has('ct')) {

                foreach ($prds as $key => $value) {
                    # code...
                    $qq = Storeview::find($value->storeview_id);

                    $ww = Inventory::find($value->inventory_id);

                    if($qq->area->city_id == request()->ct) {

                        if($ww->brand) {

                            array_push($brds, $ww->brand);
                            $brds = array_unique($brds);
                        }

                    }

                }

            }

            /* ===================  Brands    =============================== */
            //dump($prds);



            // foreach ($prds as $key => $value) {
            //     # code...

            //     if($value->brand) {

            //         array_push($brds, $value->brand);
            //     }

            // }

            // $brands = $brds;

            $queries['q'] = request()->q;

        }

        /* ===========================================
                Retail, Rent, Wholesale Filter
        =========================================== */
        if(request()->has('wantto')){

            $wantto =  request()->wantto;

            if($wantto != '0') {

                $products = $products->where(function ($query) use ($wantto) {
                    $query->whereHas('price', function ($query) use ($wantto) {
                        $query->where('want_to', $wantto);
                    });
                }) ;

            }

            $queries['wantto'] = request()->wantto;


        }
        /* ===========================================
                Brand Filter
        =========================================== */
        if(request()->has('brd')){


            // $products = $products->where(function ($query) use ($abc) {
            //     $query->whereHas('inventories', function ($query) use ($abc) {
            //         $query->whereHas('brand', function ($query) use ($abc) {
            //             $typeArray = explode(",", request()->brd);
            //             $query->whereIn('id', $typeArray );
            //             //$query->where('name', '=', request()->brd);
            //             });
            //      });
            //  });

            $brd = request()->brd;

            $products = $products->where(function ($query) use ($brd) {
                $query->whereHas('inventories', function ($query) use ($brd) {
                    $query->whereIn('brand_id', $brd);
                });
            }) ;


            $queries['brd'] = request()->brd;
        }

        /* ===========================================
                Price Range Filter
        =========================================== */
        if (request()->has('prc_abv')) {

            $products = $products->where(function ($query) use ($abc) {
                $query->whereHas('price', function ($query) use ($abc) {
                    $query->where('price', '>=', request()->prc_abv);
                });
            });

            $queries['prc_abv'] = request()->prc_abv;
        }

        if (request()->has('prc_blw')) {

            $products = $products->where(function ($query) use ($abc) {
                $query->whereHas('price', function ($query) use ($abc) {
                    $query->where('price', '<=', request()->prc_blw);
                });
            });

            $queries['prc_blw'] = request()->prc_blw;
        }

        $products = $this->RegionFilter($queries, $prds, $products);

        // return $products;

        if(!$abc) {

            return ProductCollection::collection(Product::paginate(8));

        } else {

            $prd = ProductCollection::collection($products['prd']->latest()->paginate(8));

            $prd =  $prd->appends($products['quer']);

            return response()->json(['products' => $prd, 'brands' => $brds,'state' => $products['state'], 'city' => $products['city'], 'area' => $products['area']]);
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




            /* ===========================================
                    Discount Filter
            =========================================== */
            /* if(request()->has('dscnt')) {

                $products->where(function ($query) use ($abc) {
                    $query->whereHas('price', function ($query) use ($abc) {
                        $query->where('discount', '>=', '45');
                    });
                });

                $queries['dscnt'] = request()->dscnt;
            } */




            /* ===========================================
            Storeview Area Filter
            =========================================== */
            /* $products->where(function ($query) use ($abc) {
                $query->whereHas('storeviews', function ($query) use ($abc) {
                    $query->where('area_id', '>=', '409');
                });
            }); */


            if(!$abc) {
                return ProductCollection::collection(Product::paginate(8));
            } else {


                $prd = ProductCollection::collection($products->latest()->paginate(8));

                $prd =  $prd->appends($queries);

                //$prd =   $products->paginate(8);

              /* $prd =  $prd->appends(array(
                    'q' => request()->q,
                )); */

                //return $prd ;
                return response()->json(['products' => $prd, 'brands' => $brds,'state' => $states, 'city' => $cities, 'area' => $areas]);
            }

        return response()->json(['aa' => $prd], 200);
        if($queries != []) {

            $qre = $queries;
            return response()->json(['aa' => $prd, 'bb' => $qre], 200);
        } else {

        }




        if ($search = \Request::get('q')) {
            $products = Product::whereHas('inventories', function ($query) use ($search) {
                $query->where('keywords', 'like', '%' . $search . '%')
                    ->orWhere('title','LIKE','%' . $search . '%');
            })->latest()->get();
        }else{
            $products = Product::latest()->paginate(5);
        }
        //return $products;
        return ProductCollection::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Product $product, Request $request)
    {
        \Log::info($request->all());



        // return response()->json(['test'=>$request->all()], 200);

        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            //'image' => 'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',

            //'shareable' => 'required',

            'amount' => 'required' ,

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $item = 'product';

        $inventory = new Inventory;

        $inventory->storeview_id = $str_id ;

        $inventory->title = $request->title ;

        $inventory->slug = $request->slug ;

        //$inventory->keywords = serialize($key) ;

        $inventory->highlights = serialize($request->highlights) ;

        if($request->descriptions) {

            $inventory->descriptions = serialize($request->descriptions) ;
        }

        $inventory->brand_id = $request->brand ;

        if($request->modelName ) {

            $inventory->model_name = $request->modelName ;
        }

        $inventory->shareable =  $request->shareable ;

        // $inventory = Inventory::create([

        //     'storeview_id' => $str_id ,

        //     'image' =>  $imgRealPath ,

        //     'images' => serialize($a),

        //     'title' => $request->title,

        //     'slug' => $request->slug,

        //     'keywords' => serialize($key),

        //     'highlights' => serialize($high),

        //     'descriptions' => serialize($des),

        //     'brand_id' => $request->brand,

        //     'root_category_id' => $request->root,

        //     'level_one_category_id' => $request->lvl_1,

        //     'level_two_category_id' => $request->lvl_2,

        //     'level_three_category_id' => $request->lvl_3,

        //     'shareable' => '0',

        // ]);

        //return response()->json(['inv' => 'ok to not saved inv' , 'success' => 'Product has been uploaded'], 200);

        #===   CREATE PRICE   ======================================

        $price = new Price;

        $price = $this->create_price($request, $price);

        // $price->storeview_id = $str_id;

        // $price->want_to = $request->want_to;

        // if($request->amount) {

        //     $price->price = $request->amount;
        // }

        // if($request->per) {

        //     $price->per = $request->per;
        // }

        // if($request->previous_price) {

        //     $price->previous_price = $request->previous_price;
        // }
        // if($request->discount) {

        //     $price->discount = $request->discount;
        // }
        // if($request->offers) {

        //     $price->offers = serialize($request->offers);
        // }

        # ===   SAVE IMAGES   ===============================

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath =  $request->image->store('public/product/'.$str_id);

            $imgRealPath =  Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $inventory->image = $imgRealPath ;

        if ($request->hasFile('imgs')) {

            // $imgs = $request->imgs;

            // $a=array();

            // foreach ($imgs as $img) {
            //     # code...
            //     $imagesPath =   $img->store('public/product/'.$str_id);

            //     //$imgArrRealPath = 'storage/app/'.$path ;
            //     $imgArrRealPath =   Storage::url($imagesPath);

            //     array_push($a, $imgArrRealPath);
            // }

            $a = $this->save_imgs($request, $item) ;
        }

        if($request->imgs) {

            $inventory->images = serialize($a) ;
        }

        #===   SAVE INVENTORY  ========================

        $inventory->save();

        $inv_id = $inventory->id;

        #===   SAVE PRICE   ========================

        $price->save();

        $prc_id = $price->id;

        #===   SAVE PRODUCT   =============================

        $product = Product::create([

            'storeview_id' => $str_id ,

            'inventory_id' => $inv_id,

            'price_id' => $prc_id ,

            // 'want_to' => $request->radio,

        ]);

        $product->save();

                //$tagList = explode(",", $tags);


        /* ===================================================================== */
        /* =======================       Category    =========================== */
        /* ===================================================================== */

        // Loop through the tag array that we just created
        if($request->category) {

            $cat = ReadyCategory::find($request->category) ;

            $cat = unserialize($cat->cat_ids);

            $inventory->categories()->sync($cat);

            foreach ($cat as $k) {

                // $inventory->categories()->sync($k, false);
            }
        }
        /* ============================================================================= */
        /* ============================================================================= */


        /* ===================================================================== */
        /* ===================================================================== */
        // Loop through the tag array that we just created

        // if($request->keywords) {

        //     //$key = json_decode('keywords[]');
        //     $key = $request->keywords;
        //     //$key = implode(" ",$request->keywords);

        //     foreach ($key as $k) {

        //         // Get any existing tags
        //         $keyword = Keyword::where('name', '=', $k)->first();

        //         // If the tag exists, sync it, otherwise create it
        //         if ($keyword != null) {
        //             $inventory->keywords()->sync($keyword->id, false);
        //         } else {
        //             $keyword = new Keyword();

        //             $keyword->name = $k;

        //             $keyword->save();

        //             $inventory->keywords()->sync($keyword->id, false);
        //         }
        //     }
        // }

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $inventory);

            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $invkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();
            //     $invkey = Invkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$inventory->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($invkeys_to_sync, $invkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $invkey = new Invkey();
            //         $invkey->name = $k;
            //         $invkey->save();
            //         array_push($invkeys_to_sync, $invkey->id);
            //     }

            // }
            // //return $keys_to_sync ;
            // $inventory->keywords()->sync($keys_to_sync);
            // $inventory->invkeys()->sync($invkeys_to_sync);
        }
        /* ============================================================================= */
        /* ============================================================================= */
        /* ============================================================================= */
        /* ============================================================================= */



        return response()->json(['inv' => $inventory,'prc' => $price,'prd' => $product, 'success' => 'Product has been uploaded'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //return $product;
        return new ProductResource($product);
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


        // return response()->json(['inv' => $request->all(),'id' => $id, 'success' => 'Product has been uploaded'], 200);


        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            // 'image' => 'required' ,

            'title' => 'required',

            'keywords' => 'required',

            'highlights' => 'required',

            //'shareable' => 'required',

            'amount' => 'required' ,

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $str_id = $request->str_id;

        $item = 'product';

        $product = Product::find($id) ;

        if ($request->hasFile('image')) {

            $oldImg = $product->inventories['image'];

            // // Add New Photo
            // $imagePath = $request->image->store('public/product/'.$str_id);

            // $imgRealPath = Storage::url($imagePath);

            // // Delete Old Photo
            // $productImage = str_replace('/storage', '', $oldImg);

            // Storage::delete('/public' . $productImage);

            //Storage::delete($oldImg);

            $imgRealPath = $this->update_image($request, $oldImg, $item);

        }

        if ($request->deleteImages) {

            $oldImgs = $product->inventories['images'];

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

        if ($request->hasFile('imgs')) {

            /* ===   Already saved images in database   =================================== */

            $oldImgs = $product->inventories['images'];

            $storableArray = $this->update_imgs($request, $oldImgs, $item);

            /* ===   Requested images   ======================================== */

            // $imgs = $request->imgs;

            // /* ===   images for kept and comparison   ====================================== */

            // $comparision = $request->compareimgs;

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
            //         $imagesPath =   $img->store('public/product/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($a, $imgArrRealPath);
            //     }

            //     $storableArray =  array_merge($comparision,$a);

            //     //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'kept imgs'], 200);

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
            //         $imagesPath =   $img->store('public/product/'.$str_id);

            //         $imgArrRealPath = Storage::url($imagesPath);

            //         array_push($storableArray, $imgArrRealPath);
            //     }

            //    // return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            // }

        }

        //return response()->json(['inv' => $result,'id' => $id, 'success' => 'Product has been uploaded'], 200);

        # ===   INVENTORY SECTION ========================================

        //$inv_id = $product->inventories['id'];

        $inv_id = $product->inventory_id;

        $inventory = Inventory::find($inv_id) ;

        if($request->image) {

            $inventory->image = $imgRealPath;
        }

        if($request->imgs || $request->deleteImages ) {

            $inventory->images = serialize($storableArray);
        }

        if($request->title) {

            $inventory->title = $request->title;
        }

        if($request->slug) {

            $inventory->slug = $request->slug;
        }

        if($request->highlights) {

            $inventory->highlights = serialize($request->highlights);
        }

        if($request->descriptions) {

            $inventory->descriptions = serialize($request->descriptions);
        }
        if($request->brand) {

            $inventory->brand_id = $request->brand;
        }

        if($request->modelName ) {

            $inventory->model_name = $request->modelName ;
        }


        $inventory->save();

        # ===   Category   ==================================================

        if($request->category) {

            $cat = ReadyCategory::find($request->category) ;

            $cat = unserialize($cat->cat_ids);

            $inventory->categories()->sync($cat);

        }

        // if($request->category) {

        //     if(isset($request->category)){

        //         $inventory->categories()->sync($request->category);
        //         foreach ($request->category as $k) {

        //         }
        //     }

        // }

        # ===   Keywords   =====================================================

        /* ===================================================================== */
        /* ===================================================================== */
        // Loop through the tag array that we just created

        if($request->keywords) {

            //$key = json_decode('keywords[]');

            $this->keywords($request, $inventory);
            // $key = $request->keywords;
            // //$key = implode(" ",$request->keywords);

            // $keys_to_sync = array() ;
            // $invkeys_to_sync = array() ;

            // foreach ($key as $k) {

            //     // Get any existing tags
            //     $keyword = Keyword::where('name', '=', $k)->first();
            //     $invkey = Invkey::where('name', '=', $k)->first();

            //     // If the tag exists, sync it, otherwise create it
            //     if ($keyword != null) {

            //         //$inventory->keywords()->sync($keyword->id);

            //         array_push($keys_to_sync, $keyword->id);
            //         array_push($invkeys_to_sync, $invkey->id);

            //     } else {
            //         $keyword = new Keyword();
            //         $keyword->name = $k;
            //         $keyword->save();
            //         array_push($keys_to_sync, $keyword->id);

            //         $invkey = new Invkey();
            //         $invkey->name = $k;
            //         $invkey->save();
            //         array_push($keys_to_sync, $invkey->id);
            //     }

            // }
            // //return $keys_to_sync ;
            // $inventory->keywords()->sync($keys_to_sync);
            // $inventory->invkeys()->sync($invkeys_to_sync);
        }
        /* ============================================================================= */
        /* ============================================================================= */

        # ===   PRICE SECTION   =====================================================

        $prc_id = $product->price['id'];

        $price = Price::find($prc_id);

        $price = $this->create_price($request, $price);

        // $price->price = $request->amount ;

        // if ($request->per) {

        //     $price->per = $request->per ;
        // }

        // if ($request->previous_price) {

        //     $price->previous_price = $request->previous_price;
        // }

        // if ($request->discount) {

        //     $price->discount = $request->discount;
        // }

        // if ($request->offers) {

        //     $price->offers = serialize($request->offers);
        // }

        $price->save();

        return response()->json(['inv' => $inventory,'id' => $id, 'success' => 'Product has been Updated'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id) ;

        # ===   if you want to delete inventory, price, images , uncomment below lines   =========================

        // $inv_id = $product->inventory_id;

        // $inventory = Inventory::find($inv_id);

        // $inv_str_id = $inventory['storeview_id'] ;

        // $str_id = $product->storeview_id;

        // if($inv_str_id  === $str_id ) {

        //     return $this->deleteproduct($inv_str_id,$id);

        // }

        $product->delete();

        return response()->json([ 'success' => 'Product Has Been Deleted'], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {
        //dd($storeviewproducts);
        /* $prd = Product::whereHas('storeviews', function ($query) use ($storeviewproducts) {
            $query->where('id', '>=', $storeviewproducts);
        }); */

        $prd = Product::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return ProductCollection::collection($prd);

        /* $prd = Storeview::findOrFail($storeviewproducts);

        //$prd = $prd->products->chunk(4);
        $prd = $prd->products;

        $prd = ProductCollection::collection($prd);

        return $prd; */
    }

    /* ============================================================
    /* ============================================================
    /*      Below method currently not in used
    /*=============================================================
    /*
    /*
     */
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteproduct($str_id, $id)
    {
        //\Log::info($request->all());

        //return response()->json(['inv' => $str_id, 'id' => $id, 'success' => 'Product has been Deleted'], 200);

        # ===   compare storeview id of request and inventory storeview id

        //$strId = $request->strId ;
        $strId = $str_id ;

        $product = Product::find($id) ;

        $inv_id = $product->inventory_id;

        $inventory = Inventory::find($inv_id) ;

        $inv_str_id = $inventory->storeview_id ;

        # ===========================================================

        if($strId == $inv_str_id)
        {
            # ===   same storeview id in product table and inventory table

            // ===   delete single image / main image

            $mainImage = $product->inventories['image'];
           // return response()->json(['inv' => $mainImage, 'id' => $id, 'success' => 'Product has been Deleted'], 200);

            $productImage = str_replace('/storage', '', $mainImage);

            Storage::delete('/public' . $productImage);

            // ===  delete multiple image from inventory and storege

            $images = $product->inventories['images'];

            $images = unserialize($images);

            foreach ($images as $d) {

                $productImage = str_replace('/storage', '', $d);

                Storage::delete('/public' . $productImage);

            }

            # ===   detach category

            $inventory->categories()->detach();

            # ===   delete inventory product from database

            $inventory->delete();

            # ===   delete price from database

            $prc_id = $product->price['id'];

            if ($prc_id != null)
            {
                $price = Price::find($prc_id);

                $price->delete();

            }

            $product->delete();

            return response()->json(['strId' => $strId, 'inv_str_id' => $inv_str_id, 'success' => 'Product Has been Deleted'], 200);

        }
            # ============================================================================
            else
        {

            # ===   delete price from database

            $prc_id = $product->price['id'];

            if ($prc_id != null)
            {
                $price = Price::find($prc_id);

                $price->delete();

            }

            $product->delete();

            return response()->json(['strId' => $strId, 'inv_str_id' => $inv_str_id, 'success' => 'Product Has Been Deleted'], 200);

        }


        $prc_id = $product->price['id'];

        $price = Price::find($prc_id);

        return response()->json(['inv' => $inventory,'id' => $id, 'price' => $price, 'success' => 'Product has been Deleted'], 200);
    }

    public function getProducts(Request $request)
    {
        \Log::info($request->all());

        $queries = [];

        $id = $request->cat_srch;

        $child = Category::parent($id)->renderAsArray();

        $prid = Category::where('id', '=', $id)->first() ;

        if($prid->parent_id !== 0) {

            $nid = $prid->parent_id ;

            $newid = Category::where('id', '=', $id)->first() ;
        } else {

            $nid = 'nu';
        }


        if($id != 0) {

            $parent = Category::findOrFail($id);

            $inv = $parent->inventories()
                    ->wherePivot('category_id', '=', $id)
                    ->get();

            $bb = array() ;

            foreach ($inv as $key => $value) {
                # code...

                array_push($bb, $value->id);
            }

            $products = Product::whereIn('inventory_id',  $bb) ;

            $queries['cat_srch'] = $request->cat_srch;

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

            /* ===========================================
                        Price Order by Filter
                =========================================== */

                if($request->has('prc_srt')) {

                    $prc = $request->prc_srt;

                    $products->where(function ($query) use ($prc) {
                        $query->whereHas('price', function ($query) use ($prc) {
                            $query->orderBy('price', $prc == 'p_asc' ? 'asc' : 'desc');
                        });
                    });

                $queries['prc_asc'] = $request->prc_asc;
            }

                if($request->has('prc_srt')) {

                    $prd = ProductCollection::collection($products->paginate(4));

                }

                if(!$request->has('prc_srt')) {

                    $prd = ProductCollection::collection($products->latest()->paginate(4));
                }

                $prd =  $prd->appends($queries);

                //$prd =   $products->paginate(8);

              /* $prd =  $prd->appends(array(
                    'q' => request()->q,
                )); */
                //return $prd;

            //$rr = ProductCollection::collection($rr->paginate(4)) ;

            return response()->json(['children' => $request->all(), 'child' => $child, 'prid' => $prid, 'nid' => $nid, 'parent' => $parent, 'products' => $prd ]);
        }

        /* if($id == 0) {

            $parent = ['name' => 'Categories'];

            return response()->json(['children' => $request->all(), 'child' => $child, 'parent' => $parent, ]);
        } */

    }

    public function keywords($request, $inventory)
    {
        $key = $request->keywords;
        //$key = implode(" ",$request->keywords);

        $invkeys_to_sync = array() ;

        foreach ($key as $k) {

            // Get any existing tags
            $invkey = Invkey::where('name', '=', $k)->first();

            // If the tag exists, sync it, otherwise create it
            if ($invkey != null) {

                //$inventory->keywords()->sync($keyword->id);

                array_push($invkeys_to_sync, $invkey->id);

            } else {

                $invkey = new Invkey();
                $invkey->name = $k;
                $invkey->save();
                array_push($invkeys_to_sync, $invkey->id);
            }

        }
        //return $keys_to_sync ;
        return $inventory->invkeys()->sync($invkeys_to_sync);

    }

    public function add_product_in_group(Request $request)
    {
        \Log::info($request->all());

        $user = auth('api')->user();

        if($user) {

            $str_ids = $request->str_ids;

            if($request->prd_id) {

                $prod = $request->prd_id;

                $added_prds = array();

                $allready_added_prds = array();

                foreach ($str_ids as $key => $str) {
                    # code...

                    $gtPrd =  $this->new_product_check($str, $prod) ;

                    if(isset($gtPrd)) {

                        array_push($allready_added_prds, $gtPrd);

                    } else {

                        // $new_prd = $this->new_product_creator($str, $prod);

                        // array_push($added_prds, $new_prd);

                        array_push($added_prds, 'no');

                    }

                }

                $allready_added_prds = count($allready_added_prds);

                $ifAdded = count($added_prds);

                $ifAdded = $ifAdded > 0 ? $ifAdded.' '.'Item(s) Added To The Storeview' : null;

                $allready_added_prds = $allready_added_prds > 0 ? $allready_added_prds.' '.'Item(s) Allready In The Storeview, So Not Added' : null;

                return response()->json(['res' => $request->all(), 'newPrds' => $added_prds, 'allReadyIn' => $allready_added_prds,'ifAdded' => $ifAdded]);
            }


            if($request->prd_ids) {

                $added_prds = array();

                $allready_added_prds = array();

                foreach ($str_ids as $key => $str) {
                    # code...

                    foreach ($request->prd_ids as $key => $prod) {

                        # code...
                        $gtPrd =  $this->new_product_check($str, $prod) ;

                        if(isset($gtPrd)) {

                            array_push($allready_added_prds, $gtPrd);

                        } else {

                            // $new_prd = $this->new_product_creator($str, $prod);

                            // array_push($added_prds, $new_prd);

                            array_push($added_prds, 'no');

                        }

                    }


                }

                $allready_added_prds = count($allready_added_prds);

                $ifAdded = count($added_prds);

                $ifAdded = $ifAdded > 0 ? $ifAdded.' '.'Item(s) Added To The Storeview' : null;

                $allready_added_prds = $allready_added_prds > 0 ? $allready_added_prds.' '.'Item(s) Allready In The Storeview, So Not Added' : null;

                return response()->json(['res' => $request->all(), 'newPrds' => $added_prds, 'allReadyIn' => $allready_added_prds, 'ifAdded' => $ifAdded]);
            }

        }

    }

    public function new_product_check($str, $prod)
    {
        $prd = Product::find($prod);

        $prd_inv = $prd->inventory_id;

        $prd_prc = $prd->price_id;

        return Product::where('storeview_id', $str)->where('inventory_id', $prd_inv)->where('price_id', $prd_prc)->first() ;
    }

    public function new_product_creator($str, $prod)
    {
        // =======   Get Product   ==========

        $prd = Product::find($prod);

        $prd_inv = $prd->inventory_id;

        $prd_prc = $prd->price_id;

        // ========   Make New Copy Of That Ptoduct   ======================

        $new_prd = new Product();

        $new_prd->storeview_id = $str;

        $new_prd->inventory_id = $prd_inv;

        $new_prd->price_id = $prd_prc;

        return $new_prd->save();
    }

    public function delete_products_in_group(Request $request)
    {
        \Log::info($request->all());

        foreach ($request->prd_ids as $key => $id) {
            # code...

            $product = Product::find($id) ;

            $product->delete();
        }

        return response()->json(['req' => $request->all(), 'success' => 'Product Successfully Deleted.']);
    }

    // public function check_for_product_edit(Request $request)
    // {
    //     \Log::info($request->all());

    //     $prd = Product::find($request->prd_id);

    //     $inv = Inventory::find($prd->inventory_id);

    //     $prc = Price::find($prd->price_id);

    //     if($inv->storeview_id == $request->str_id) {

    //         $inv_check = 'match';

    //     } else {

    //         $inv_check = null;
    //     }

    //     if($prc->storeview_id == $request->str_id) {

    //         $prc_check = 'match';

    //     } else {

    //         $prc_check = null;
    //     }

    //     return response()->json(['res' => $request->all(), 'invCheck' => $inv_check, 'prcCheck' => $prc_check]);
    // }

    /* public function index(Request $request)
    {
        $users = EloquentBuilder::to(
                    User::class,
                    $request->all()
                 );
        return $users->get();
    } */
}
