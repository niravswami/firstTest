<?php

namespace App\Http\Controllers;

use App\ServiceAndBusiness\ServiceAndBusiness;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceAndbusinessResource;
use App\Http\Resources\Collections\ServiceAndBusinessCollection;

class ServiceAndBusinessController extends Controller
{
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceAndBusiness\ServiceAndBusiness  $serviceAndBusiness
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceAndBusiness $serviceAndBusiness)
    {
        return new ServiceAndbusinessResource($serviceAndBusiness);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceAndBusiness\ServiceAndBusiness  $serviceAndBusiness
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceAndBusiness $serviceAndBusiness)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceAndBusiness\ServiceAndBusiness  $serviceAndBusiness
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceAndBusiness $serviceAndBusiness)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceAndBusiness\ServiceAndBusiness  $serviceAndBusiness
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceAndBusiness $serviceAndBusiness)
    {
        //
    }
}
