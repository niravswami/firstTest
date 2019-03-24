<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Review;
use App\Product;
use App\Http\Resources\ReviewResource;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
       // return $product;
        return ReviewResource::collection($product->reviews);
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

        $user = auth('api')->user();

        if($user)
        {
            $userfullname = $user->first_name.' '.$user->last_name ;

            $validator = Validator::make($request->all(), [

                'rating' => 'required',

                'prId' => 'required',

                'ratingHeading' => 'sometimes|required',

                'ratingDescription' => 'sometimes|required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }

            /* $review = Review::create([

                'product_id' => $request->prdId,

                'customer' => $userfullname,

                'review' => $request->ratingDescription,

                'star' => $request->rating,
            ]); */

            $review = new Review();

            $review->product_id = $request->prId;

            $review->customer = $userfullname;

            $review->star = $request->rating;

            /* if(!empty($request->ratingHeading)) {

                $review->heading = $request->ratingHeading ;
            } */

            if(!empty($request->ratingDescription)) {

                $review->review = $request->ratingDescription ;

            }

            $review->save();

            return response()->json(['review' => $request->all(), 'userId' => $user, 'rev' => $review, 'success' => 'Your Review Has Been Posted'], 200) ;
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

