<?php

namespace App\Http\Controllers\API\Storeview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\StoreviewReviewResource;
use App\Storeview;
use App\StoreviewReview;
use Illuminate\Support\Facades\Validator;

class StoreviewReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Storeview $storeview)
    {
        return StoreviewReviewResource::collection($storeview->storeview_reviews);
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

        //return response()->json(['req' => $request->all(), 'success' => 'Rating Has Been Submmited']) ;

        $userID = auth('api')->user()->id;

        if($userID) {

            $validator = Validator::make($request->all(), [

                'str_id' => 'required',

                'star' => 'required',

            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }

            $review = new StoreviewReview;

            $review->storeview_id = $request->str_id;

            $review->user_id = $userID;

            $review->star = $request->star;

            if($request->ratingHeading) {

                $review->heading = $request->ratingHeading;
            }

            if($request->ratingDescription) {

                $review->review = $request->ratingDescription;
            }

            $review->save();

            return response()->json(['req' => $review, 'user_id' => $userID , 'success' => 'Rating Has Been Submmited']) ;
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
