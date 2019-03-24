<?php

namespace App\Http\Controllers\API\ServiceAndBusiness;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ServiceAndBusiness\ServiceAndBusinessCategory;
use Illuminate\Support\Facades\Validator;

class ServiceAndBusinessCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ServiceAndBusinessCategory::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = auth('api')->user();

        if ($user) {

            $validator = Validator::make($request->all(), [

                'name' => 'required|unique:service_and_business_categories'
            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }

            $service_and_business = ServiceAndBusinessCategory::create([

                'name' => ucfirst($request->name),
            ]);

            $service_and_business->save();

            return response()->json(['success' => $service_and_business->name .' '. 'Successfully Saved'], 201);

        }
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
