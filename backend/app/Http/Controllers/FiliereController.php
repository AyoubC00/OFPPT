<?php

namespace App\Http\Controllers;

use App\Http\Resources\FiliereCollection;
use App\Http\Resources\FiliereResource;
use App\Models\Filiere;
use App\Http\Requests\StoreFiliereRequest;
use App\Http\Requests\UpdateFiliereRequest;

class FiliereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new FiliereCollection(Filiere::all());
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
    public function store(StoreFiliereRequest $request)
    {
        Filiere::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Filiere $filiere)
    {
        return new FiliereResource($filiere);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Filiere $filiere)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFiliereRequest $request, Filiere $filiere)
    {
        $filiere->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Filiere $filiere)
    {
        $filiere->delete();
    }
}
