<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PriceResource;
use App\Price;
use App\Http\Traits\SavePriceTrait;
use Illuminate\Support\Facades\Validator;
use App\Product;

class PriceController extends Controller
{
    use SavePriceTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PriceResource::collection(Price::all()) ;
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

        // return response()->json(['res' => $request->all()], 200);

        // $price = Price::create([

        //     'storeview_id' => $request->storeview_id ,

        //     'price' => $request->price ,

        //     'per' => $request->per ,

        //     'previous_price' => $request->previous_price,

        //     'discount' => $request->discount,

        //     'offers' => $request->offers,

        // ]);

        //  $price->save();

        $validator = Validator::make($request->all(), [


            'amount' => 'required' ,

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $prd = Product::find($request->prd_id);

        $price = new Price;

        $price =  $this->create_price($request, $price);

        $price->save();

        $prd->price_id = $price->id;

        $prd->save();

        return response()->json(['prc' => $price, 'prd' => $prd , 'success' => 'Price hs been saved'], 200);
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
