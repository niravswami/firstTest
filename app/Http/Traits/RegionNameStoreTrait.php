<?php

namespace App\Http\Traits;

trait RegionNameStoreTrait {

    public function create_new_name($request, $new_region)
    {
        $user = auth('api')->user();

        if ($user) {

            // $area = new Area ;

            $new_region->name = $request->name;

            $new_region->city_id = $request->id;

            $new_region->save();

            return $new_region;

            // return response()->json(['success' => $new_region->name .' '. 'Successfully Saved'], 201);

        }
    }
}
