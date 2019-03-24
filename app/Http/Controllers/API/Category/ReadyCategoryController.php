<?php

namespace App\Http\Controllers\API\Category;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category\ReadyCategory;

class ReadyCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ReadyCategory::all() ;
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

        $count = count($request->names);

        $i= 0;

        $ar = array();

        foreach ($request->names as $key => $value) {
            # code...

            if($count != $i+1) {

                $w = $value." ".">"."  ";

                array_push($ar, $w);

            } else {

                array_push($ar, $value);
            }

            $i++;
        }

        $ready_category = implode(" ",$ar);

        $ids = serialize($request->ids);

        $readyCat = new ReadyCategory;

        $readyCat->cat_ids = $ids;

        $readyCat->cat_names = $ready_category;

        $readyCat->save();


        return response()->json(['readyMade' => $request->all(), 'names' => $ready_category, 'save' => $readyCat, 'ids' => $ids]) ;
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
}
