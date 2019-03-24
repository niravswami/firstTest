<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Country;
use App\Http\Resources\Collections\CountryCollection;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CountryResource;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CountryCollection::collection(Country::all()) ;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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

    public function countryfromip($ipcountry)
    {

        /* $products= Country::where(function ($query) use ($ipcountry) {
            $query->where('shortname', 'LIKE', '%' . $ipcountry . '%');

            }); */

        $products = DB::table('countries')->where('name', '=', $ipcountry) ;

        $prd =   CountryCollection::collection($products->get());

        return response()->json(['ipCountrys' => $prd]);

    }
}
