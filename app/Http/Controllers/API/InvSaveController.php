<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Price;
use App\Product;
use App\Http\Traits\SavePriceTrait;

class InvSaveController extends Controller
{
    use SavePriceTrait;
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
        \Log::info($request->all());

        // return response()->json(['hi'=>$request->all()], 200);
        $validator = Validator::make($request->all(), [

            'str_id' => 'required' ,

            'amount' => 'required' ,

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        /* $price = Price::create([

            'storeview_id' => $request->str_id ,

            'price' => $request->amount ,

            'per' => $request->per ,

            'previous_price' => $request->previous_price,

            'discount' => $request->discount,

            'offers' => serialize($request->offers),

        ]); */

        // $price = new Price;

        // $price->storeview_id = $request->str_id;

        // $price->want_to = $request->want_to;

        // $price->price = $request->amount;

        // if($request->per) {

        //     $price->per = $request->per;
        // }

        // if($request->previous_price) {

        //     $price->previous_price = $request->previous_price;
        // }

        // if($request->discount) {

        //     $price->discount = $request->discount;
        // }

        // if($request->offers) {

        //     $price->offers = serialize($request->offers);
        // }

        $price = new Price;

        $price = $this->create_price($request, $price);

        $price->save();

        $prc_id = $price->id;

        $product = Product::create([

            'storeview_id' => $request->str_id ,

            'inventory_id' => $request->inv_id,

            'price_id' => $prc_id ,

            // 'want_to' => $request->want_to,

        ]);

        $product->save();

        return response()->json(['prd' => $product, 'success' => 'Product has been uploaded'], 201);

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
