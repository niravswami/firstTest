<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Collections\AreaCollection;
use App\Area;
use Illuminate\Support\Facades\Validator;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return response()->json(['area' => $request->all()]) ;

        $validator = Validator::make($request->all(), [

            'name' => 'required',

            'id' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $new_region = new Area ;

        $new_region = $this->create_new_name($request, $new_region);

        return response()->json(['success' => $new_region->name .' '. 'Successfully Saved'], 201);

        // $user = auth('api')->user();

        // if ($user) {

        //     $validator = Validator::make($request->all(), [

        //         'name' => 'required',

        //         'id' => 'required',

        //     ]);

        //     if ($validator->fails()) {
        //         return response()->json(['error'=>$validator->errors()], 401);
        //     }

        //     $area = new Area ;

        //     $area->name = $request->name;

        //     $area->city_id = $request->id;

        //     $area->save();

        //     return response()->json(['success' => $area->name .' '. 'Successfully Saved'], 201);

        // }
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function cityarea($cityareas)
    {
        //dd($name);
        //die(print_r($request->id));
        $areaTable = DB::table('areas')->where('city_id', '=', $cityareas)->get() ;
        $area = AreaCollection::collection($areaTable);
        return $area;
    }
}
