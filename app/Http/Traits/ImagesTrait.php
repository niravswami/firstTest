<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Storage;


trait ImagesTrait {

    # ==================   Save Multiple Images   =====================================

    public function save_imgs($request, $item)
    {
        $imgs = $request->imgs;

        $a=array();

        foreach ($imgs as $img) {
            # code...
            // $imagesPath =   $img->store('public/product/'.$str_id);
            $imagesPath =   $img->store('public/'.$item.'/'.$request->str_id);

            //$imgArrRealPath = 'storage/app/'.$path ;
            $imgArrRealPath =   Storage::url($imagesPath);

            array_push($a, $imgArrRealPath);
        }

        return $a;
    }

    // ==================           Update Single Image         ============================

    public function update_image($request, $oldImg, $item)
    {
        // Add New Photo
        $imagePath = $request->image->store('public/'.$item.'/'.$request->str_id);

        $imgRealPath = Storage::url($imagePath);

        // Delete Old Photo
        $productImage = str_replace('/storage', '', $oldImg);

        Storage::delete('/public' . $productImage);

        return $imgRealPath;
    }

    public function delete_imgs($request, $oldImgs)
    {
        $deleteCompare = $request->deleteImages ;

        $oldImgs = unserialize($oldImgs);

        $intersect = array_intersect($oldImgs, $deleteCompare);

        $diff = array_merge(array_diff($deleteCompare, $intersect), array_diff($oldImgs, $intersect));

        foreach ($deleteCompare as $d) {

            $productImage = str_replace('/storage', '', $d);

            Storage::delete('/public' . $productImage);

        }

        return $diff;
    }

    public function update_imgs($request, $oldImgs, $item)
    {
        $imgs = $request->imgs;

        /* ===   images for kept and comparison   ====================================== */

        $comparision = $request->compareimgs;

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
                $imagesPath =   $img->store('public/'.$item.'/'.$request->str_id);

                $imgArrRealPath = Storage::url($imagesPath);

                array_push($a, $imgArrRealPath);
            }

            $storableArray =  array_merge($comparision,$a);

            return $storableArray;

            //return response()->json(['mergeArray' => $mergeArray, 'comparision' => $comparision, 'oldImgs' => $oldImgs, 'diff' => $diff, 'success' => 'kept imgs'], 200);

        } else {

            $result = 'all image must be replace' ;

            if(!empty($oldImgs)) {

                foreach ($oldImgs as $d) {

                    $productImage = str_replace('/storage', '', $d);

                    Storage::delete('/public' . $productImage);
                }
            }


            /* ===   Add images into database and then merge new databse array wiyh comparision array   ================= */

            $storableArray=array();

            foreach ($imgs as $img) {
                # code...
                $imagesPath =   $img->store('public/'.$item.'/'.$request->str_id);

                $imgArrRealPath = Storage::url($imagesPath);

                array_push($storableArray, $imgArrRealPath);
            }

            return $storableArray;

            // return response()->json(['inv' => $result,'id' => $id, 'old' => $oldImgs , 'success' => 'Product has been uploaded'], 200);
        }
    }
}
