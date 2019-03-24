<?php

namespace App\Http\Controllers\API\Keywords;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Keywords\Invkey;
use Illuminate\Support\Facades\Validator;

class InvkeyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Invkey::all();
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

        $validator = Validator::make($request->all(),[

            'name' => 'required|max:255|unique:invkeys'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $keyword = Invkey::create([

            'name' => $request->name,

        ]);

        $keyword->save();

        return response()->json(['keyword' => $keyword, 'success' => 'Keyword has been Saved'], 200);
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
