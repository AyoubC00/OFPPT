<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupCollection;
use App\Http\Resources\GroupResource;
use App\Models\Groupe;
use App\Http\Requests\StoreGroupeRequest;
use App\Http\Requests\UpdateGroupeRequest;

class GroupeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new GroupCollection(Groupe::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGroupeRequest $request, Groupe $groupe)
    {
        $groupe->update($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Groupe $groupe)
    {
        return new GroupResource($groupe);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Groupe $groupe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGroupeRequest $request, Groupe $groupe)
    {
        $groupe->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Groupe $groupe)
    {
        $groupe->delete();
    }
}
