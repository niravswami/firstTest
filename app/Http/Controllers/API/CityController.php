<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Collections\CityCollection;
use App\City;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return City::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [

            'name' => 'required',

            'id' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $new_region = new City ;

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
    public function statecities($statecities)
    {
        //dd($name);
        //die(print_r($request->id));
        $citiesTable = DB::table('cities')->where('state_id', '=', $statecities)->get() ;
        $cities = CityCollection::collection($citiesTable);
        return $cities;
    }

    public function cityfromip()
    {
        return City::all();
    }
}
