<?php

namespace App\Http\Controllers;

use App\Http\Resources\StagiaireCollection;
use App\Http\Resources\StagiaireResource;
use App\Models\Stagiaire;
use App\Http\Requests\StoreStagiaireRequest;
use App\Http\Requests\UpdateStagiaireRequest;

class StagiaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new StagiaireCollection(Stagiaire::all());        
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
    public function store(StoreStagiaireRequest $request)
    {
        Stagiaire::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Stagiaire $stagiaire)
    {
        return new StagiaireResource($stagiaire);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stagiaire $stagiaire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStagiaireRequest $request, Stagiaire $stagiaire)
    {
        $stagiaire->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stagiaire $stagiaire)
    {
        $stagiaire->delete();
    }
}
