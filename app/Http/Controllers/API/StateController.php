<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Collections\StateCollection;

class StateController extends Controller
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
        $validator = Validator::make($request->all(), [

            'name' => 'required',

            'id' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $new_region = new State ;

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
    public function countrystates($countrystates)
    {
        $statesTable = DB::table('states')->where('country_id', '=', $countrystates)->get() ;
        //$cities = CityCollection::collection(City::where('state_id', '=', $countrystates)->get());
        $states = StateCollection::collection($statesTable);
        return $states;
    }
}
