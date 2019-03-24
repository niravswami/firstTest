<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Inventory;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Collections\InventoryCollection;
use App\Http\Resources\InventoryResource;
use App\Keyword;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return Inventory::all();
        return InventoryCollection::collection(Inventory::all());
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
        //return;

        //$high = json_decode('highlights[]');

        //$des =  json_decode('descriptions[]');



        $str_id = $request->str_id;



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


        $inventory->shareable = $request->shareable ;

        if ($request->hasFile('image')) {

            //$imagename = $request->image->getClientOriginalName();
            //$newname = time().str_random().$imagename ;
            //$request->image->storeAs('public', $newname);

            $imagePath = $request->image->store('public/inventory/'.$str_id);

            $imgRealPath = Storage::url($imagePath);
            //$imgRealPath = public_path() .'/'.$imagePath ;

        }

        $inventory->image = $imgRealPath ;

        if ($request->hasFile('imgs')) {

            $imgs = $request->imgs;

            $a=array();

            foreach ($imgs as $img) {
                # code...
                $imagesPath =   $img->store('public/inventory/'.$str_id);

                //$imgArrRealPath = 'storage/app/'.$path ;
                $imgArrRealPath = Storage::url($imagesPath);

                array_push($a, $imgArrRealPath);
            }
        }

        if($request->imgs) {

            $inventory->images = serialize($a) ;
        }

        // $inventory = Inventory::create([

        //         'storeview_id' => $str_id ,

        //         'image' => $imgRealPath ,

        //         'images' => serialize($a),

        //         'title' => $request->title,

        //         'slug' => $request->slug,

        //         'keywords' => serialize($key),

        //         'highlights' => serialize($high),

        //         'descriptions' => serialize($des),

        //         'brand_id' => $request->brand,

        //         'model_name' => $request->modelName,

        //         'root_category_id' => $request->root,

        //         'level_one_category_id' => $request->lvl_1,

        //         'level_two_category_id' => $request->lvl_2,

        //         'level_three_category_id' => $request->lvl_3,

        //         'shareable' => $request->shareable,

        //     ]);

        $inventory->save();

        # ===   Category   ==================================================

        if($request->category) {

            if(isset($request->category)){

                $inventory->categories()->sync($request->category);
                foreach ($request->category as $k) {

                }
            }

        }

        //$tagList = explode(",", $tags);

        if($request->keywords) {

            //$key = json_decode('keywords[]');
            $key = $request->keywords;

            // Loop through the tag array that we just created
            foreach ($key as $k) {

                // Get any existing tags
                $keyword = Keyword::where('name', '=', $k)->first();

                // If the tag exists, sync it, otherwise create it
                if ($keyword != null) {
                    $inventory->keywords()->sync($keyword->id, false);
                } else {
                    $keyword = new Keyword();

                    $keyword->name = $k;

                    $keyword->save();

                    $inventory->keywords()->sync($keyword->id, false);
                }
            }
        }


            return response()->json(['inv' => $inventory, 'success' => 'Product has been uploaded'], 200);

        //$inventory = Inventory::create($request->except('image'), [ ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        /* $inv = new InventoryResource($id);
        return $inv; */

        $inv = Inventory::findOrFail($id);

        return new InventoryResource($inv);
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
        //return;

        $inventory = Inventory::find($id) ;

        $str_id = $inventory->storeview_id;

        if ($request->hasFile('image')) {
            // Add New Photo
            $imagePath = $request->image->store('public/inventory/'.$str_id);

            $imgRealPath = Storage::url($imagePath);

            // Delete Old Photo
            $oldImg = $inventory->image;

            $productImage = str_replace('/storage', '', $oldImg);

            Storage::delete('/public' . $productImage);

            //Storage::delete($oldImg);

        }

        if ($request->deleteImages) {

            $deleteCompare = $request->deleteImages ;

            $oldImgs = $inventory->images;

            $oldImgs = unserialize($oldImgs);

            $intersect = array_intersect($oldImgs, $deleteCompare);

            $diff = array_merge(array_diff($deleteCompare, $intersect), array_diff($oldImgs, $intersect));

            foreach ($deleteCompare as $d) {

                $productImage = str_replace('/storage', '', $d);

                Storage::delete('/public' . $productImage);

            }

            $storableArray =  $diff;

            //return response()->json(['deleteCompare' => $deleteCompare, 'oldImgs' => $oldImgs, 'intersect' => $intersect, 'diff' => $diff, 'success' => 'kept imgs'], 200);
        }

        if ($request->hasFile('imgs')) {

            /* ===   Requested images   ======================================== */

            $imgs = $request->imgs;

            /* ===   images for kept and comparison   ====================================== */

            $comparision = $request->compareimgs;

            /* ===   Already saved images in database   =================================== */

            $oldImgs = $inventory->images;

            $oldImgs = unserialize($oldImgs);

            /* ===   compare old images array with incoming compare array   ============================= */

            if(!empty($comparision)) {

                /* ===   merge comparision array and old images array   ============================== */

                $mergeArray = array_merge($comparision,$oldImgs);

                /* ===   get diff from merge array and old image array   =============================  */

                $intersect = array_intersect($comparision, $oldImgs);

                $diff = array_merge(array_diff($comparision, $intersect), array_diff($oldImgs, $intersect));

                /* ===   Delete all images in $diff ============================== */

                if(!empty($diff)) {

                    foreach ($diff as $d) {

                        $productImage = str_replace('/storage', '', $d);

                        Storage::delete('/public' . $productImage);
                    }
                }

                /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

                $a=array();

                foreach ($imgs as $img) {
                    # code...
                    $imagesPath =   $img->store('public/inventory/'.$str_id);

                    $imgArrRealPath = Storage::url($imagesPath);

                    array_push($a, $imgArrRealPath);
                }

                $storableArray =  array_merge($comparision,$a);

                //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'kept imgs'], 200);

            } else {

                $result = 'all image must be replace' ;

                foreach ($oldImgs as $d) {

                    $productImage = str_replace('/storage', '', $d);

                    Storage::delete('/public' . $productImage);
                }

                /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

                $storableArray=array();

                foreach ($imgs as $img) {
                    # code...
                    $imagesPath =   $img->store('public/inventory/'.$str_id);

                    $imgArrRealPath = Storage::url($imagesPath);

                    array_push($storableArray, $imgArrRealPath);
                }

               // return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
            }

        }

        //return response()->json(['inv' => $result,'id' => $id, 'success' => 'Product has been uploaded'], 200);

        # ===   INVENTORY SECTION ========================================

        //$inv_id = $product->inventories['id'];

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

        if($request->keywordss) {

            $inventory->keywords = serialize($request->keywords);
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

            if(isset($request->category)){

                $inventory->categories()->sync($request->category);
                foreach ($request->category as $k) {

                }
            }

        }

        if($request->keywords) {

            //$key = json_decode('keywords[]');
            $key = $request->keywords;

            // Loop through the tag array that we just created
            foreach ($key as $k) {

                // Get any existing tags
                $keyword = Keyword::where('name', '=', $k)->first();

                // If the tag exists, sync it, otherwise create it
                if ($keyword != null) {
                    $inventory->keywords()->sync($keyword->id, false);
                } else {
                    $keyword = new Keyword();

                    $keyword->name = $k;

                    $keyword->save();

                    $inventory->keywords()->sync($keyword->id, false);
                }
            }
        }


            return response()->json(['inv' => $inventory, 'success' => 'Product has been uploaded'], 200);
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

    public function shareableinventories()
    {
        // $inventories = InventoryCollection::collection(Inventory::where('shareable', '=', '1')->get());
        $inventories = InventoryCollection::collection(Inventory::where([
                                                                    ['shareable', '=', 1],
                                                                    ['deleted', '=', 0],

                                                                            ])->get());

        return $inventories;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function storeviewproducts($storeviewproducts)
    {

        //return response()->json(['inv' => $storeviewproducts, 'success' => 'Product has been uploaded'], 200);
        $prd = Inventory::where('storeview_id', '=', $storeviewproducts);

        //$prd = $prd->orderBy('created_at', 'desc')->paginate(8);
        $prd = $prd->orderBy('created_at', 'desc')->get();

        return InventoryCollection::collection($prd);

    }

    public function singleImage ()
    {
        // Take Image and decode base 64
        $exploded = explode(',', $request->image);

        $decoded = base64_decode($exploded[1]) ;

        // give jpg or png extention
        if (str_contains($exploded[0], 'jpeg')) {

            $extention = 'jpg';

        } else {

            $extention = 'png';
        };

        // give file name with random string
        $fileName = str_random().'.'.$extention;

        // give the path to store this image
        $path = public_path().'/'.$fileName;

        // put the file into the path folder
        file_put_contents($path, $decoded);
    }
}
