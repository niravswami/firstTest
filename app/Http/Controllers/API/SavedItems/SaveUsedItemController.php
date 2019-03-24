<?php

namespace App\Http\Controllers\API\SavedItems;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SaveUsedItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        \Log::info(request()->prd);

        $user = auth('api')->user();

        if($user)
        {

            $products =  ProductCollection::collection($user->products()->orderBy('updated_at', 'desc')->get());

            $services = ServiceAndBusinessCollection::collection($user->serviceandbusinesses()->orderBy('updated_at', 'desc')->get());

            $property = PropertyCollection::collection($user->properties()->orderBy('updated_at', 'desc')->get());

            $education = EducationCollection::collection($user->education()->orderBy('updated_at', 'desc')->get());

            $useditem = UsedItemCollection::collection($user->useditems()->orderBy('updated_at', 'desc')->get());

            //$products = $products->get();

            return response()->json([

                    'user' => $user,

                    'savedProducts' => $products,

                    'savedServices' => $services,

                    'property' => $property,

                    'education' => $education,

                    'useditems' => $useditem,
                ]);
        }
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

        $validator = Validator::make($request->all(), [

            'prd_id' => 'required' ,

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = auth('api')->user();

        if($user) {

            $user->useditems()->sync($request->prd_id, false);

            $hasProduct = $user->useditems()->where('used_item_id', $request->prd_id)->exists();

            return response()->json(['exists' => $hasProduct,'savedProduct' => $user, 'prd_id' => $request->prd_id, 'sucecss' => 'Product Has Been Saved']);
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
        \Log::info(request()->prd);

        $user = auth('api')->user();

        if($user)
        {

            $hasProduct = $user->useditems()->where('used_item_id', $id)->exists();

            return response()->json(['exists' => $hasProduct, 'user' => $user, ]);
        }
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
        $user = auth('api')->user();

        if($user)
        {
            $user->useditems()->detach($id);

            $hasProduct = $user->useditems()->where('used_item_id', $id)->exists();

            return response()->json(['removed' => $hasProduct, 'user' => $user , 'success' => 'Product Has Been Removed From List']);
        }
    }
}
