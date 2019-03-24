<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Collections\ServiceAndBusinessCollection;
use App\Http\Resources\Collections\PropertyCollection;
use App\Http\Resources\Collections\EducationCollection;
use App\Http\Resources\Collections\UsedItemCollection;

class SaveProductController extends Controller
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

            $user->products()->sync($request->prd_id, false);

            $hasProduct = $user->products()->where('product_id', $request->prd_id)->exists();

            return response()->json(['exists' => $hasProduct,'savedProduct' => $user, 'prd_id' => $request->prd_id, 'sucecss' => 'Product Has Been Saved']);
        }




                //$tagList = explode(",", $tags);

        /* ===================================================================== */
        /* ===================================================================== */
        /* ===================================================================== */
        // Loop through the tag array that we just created
        /* foreach ($key as $k) {

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
        } */
        /* ============================================================================= */
        /* ============================================================================= */
        /* ============================================================================= */
        /* ============================================================================= */
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

            $hasProduct = $user->products()->where('product_id', $id)->exists();

            return response()->json(['exists' => $hasProduct, 'user' => $user, ]);
        }

        $hasProduct = false;

        return response()->json(['exists' => $hasProduct], 200);
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
            $user->products()->detach($id);

            $hasProduct = $user->products()->where('product_id', $id)->exists();

            return response()->json(['removed' => $hasProduct, 'user' => $user , 'success' => 'Product Has Been Removed From List']);
        }

    }

    public function total_count()
    {
        $user = auth('api')->user();

        if($user)
        {

            $products =  count($user->products()->get());

            $services = count($user->serviceandbusinesses()->get());

            $property = count($user->properties()->get());

            $education = count($user->education()->get());

            $useditem = count($user->useditems()->get());

            $products = [$products, $services, $property, $education, $useditem];

            $products = array_sum($products);

            return response()->json([

                    'user' => $user,

                    'total_saved' => $products,
            ], 200);
        }
                return response()->json(['total_saved' => '0',], 200);
    }
}
