<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Storeview;
use App\Http\Resources\StoreviewCollection;
use App\Product;
use App\Http\Resources\StoreviewResource;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class StoreviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        return  StoreviewCollection::collection(Storeview::all());
        //return StoreviewResource::collection($product->all);

        //return Storeview::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return response()->json(['aa' => $request->all()],200) ;

        $userID = auth('api')->user()->id;

        if($userID) {

            $validator = Validator::make($request->all(), [

                'store_name' => 'required|max:255',

                'store_address' => 'required|max:255',

                'unique_key' => 'required|max:255',

                'country_id' => 'required',

                'state_id' => 'required',

                'city_id' => 'required',

                'area_id' => 'required',

                'email' => 'email|nullable',

            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }

            $storeview = new Storeview;

            $storeview->user_id = $userID;

            $storeview->unique_key = $request->unique_key;

            $storeview->store_name = $request->store_name;

            $storeview->store_address = $request->store_address;

            $storeview->country_id = $request->country_id;

            $storeview->state_id = $request->state_id;

            $storeview->city_id = $request->city_id;

            $storeview->area_id = $request->area_id;

            if($request->pincode) {

                $storeview->pincode = $request->pincode;
            }
            if($request->contact_number) {

                $storeview->contact_number = $request->contact_number;
            }

            if($request->email) {

                $storeview->email = $request->email;
            }

            if($request->website) {

                $storeview->website = $request->website;
            }

            if($request->about_us) {

                $storeview->about_us = $request->about_us;
            }

            // $storeview = Storeview::create([

            //     'user_id' => $userID,
            //     'store_name' => $request->store_name,
            //     'store_address' => $request->store_address,
            //     'country_id' => $request->country_id,
            //     'state_id' => $request->state_id,
            //     'city_id' => $request->city_id,
            //     'area_id' => $request->area_id,
            //     'pincode' => $request->pincode,
            //     'contact_number' => $request->contact_number,
            //     'email' => $request->email,
            //     'website' => $request->website,
            //     'about_us' => $request->about_us,
            // ]);

            $storeview->save();

                return response()->json($storeview, 201);
        } else {

            return response()->json(['message'=> 'Please Login To Create Storeview'], 511);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Storeview $storeview)
    {
        $storeview = new StoreviewResource($storeview);
        return $storeview;
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
        \Log::info($request->all());

        //return;

        $userID = auth('api')->user()->id;

        if($userID) {

            $validator = Validator::make($request->all(), [

                'str_id' => 'required',

                'store_name' => 'required|max:255',

                'store_address' => 'required|max:255',

                'country_id' => 'required',

                'state_id' => 'required',

                'city_id' => 'required',

                'area_id' => 'required',

                'email' => 'email|nullable',

            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }

            $storeview = Storeview::findOrFail($id);

            $storeview->store_name = $request->store_name;

            $storeview->store_address = $request->store_address;

            if($request->unique_key) {

                $storeview->unique_key = $request->unique_key;
            }

            if($request->contact_number) {

                $storeview->contact_number = $request->contact_number;
            }

            if ($request->pincode) {

                $storeview->pincode = $request->pincode;
            }

            if($request->email) {

                $storeview->email = $request->email;
            }


            if($request->website) {

                $storeview->website = $request->website;
            }

            if($request->about_us) {

                $storeview->about_us = $request->about_us;
            }

            if($request->country_id) {

                $storeview->country_id = $request->country_id;
            }

            if($request->state_id) {

                $storeview->state_id = $request->state_id;
            }

            if($request->city_id) {

                $storeview->city_id = $request->city_id;
            }

            if($request->area_id) {

                $storeview->area_id = $request->area_id;
            }

            $storeview->save();

            return response()->json(['str' => $storeview,  'success' => 'Information Has Been Updated'], 200);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        //return response()->json(['success' => 'Your Storeview is Deleted'], 200);
        $userID = auth('api')->user()->id;

        if($userID) {

            DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            $storeview = Storeview::findOrFail($id);

            $storeview->products()->delete();

            $storeview->inventories()->delete();

            $storeview->prices()->delete();

            $storeview->serviceandbusiness()->delete();

            $storeview->properties()->delete();

            $storeview->education()->delete();

            $storeview->useditems()->delete();

            $storeview->storeview_reviews()->delete();

            $storeview->delete();

            return response()->json(['str_id' => $id ,'success' => 'Your Storeview is Deleted'], 200);
        }

    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function mystores( $id)
    {
        $user = User::find($id);

        return StoreviewCollection::collection(Storeview::where("user_id", "=", $user->id)->get());

    }

    public function change_image(Request $request)
    {
        //return response()->json(['str_id' => $request->all() ,'success' => 'Your Storeview is Deleted'], 200);

        $str_id = $request->str_id;

        $storeview = Storeview::findOrFail($str_id);

        if ($request->hasFile('image')) {
            // Add New Photo
            $imagePath = $request->image->store('public/storeview/'.$str_id);

            $imgRealPath = Storage::url($imagePath);

            // Delete Old Photo
            $oldImg = $storeview->image;

            if($oldImg) {

                $productImage = str_replace('/storage', '', $oldImg);

                Storage::delete('/public' . $productImage);
            }

            //Storage::delete($oldImg);

        }

        $storeview->image = $imgRealPath;

        $storeview->save();

        return response()->json(['str_id' => $storeview ,'success' => 'Your Storeview Image Has Been Updated'], 200);

    }

    public function get_storeviews()
    {
        return  StoreviewCollection::collection(Storeview::where('user_id', '!=', request()->userId)->get());
    }
}
