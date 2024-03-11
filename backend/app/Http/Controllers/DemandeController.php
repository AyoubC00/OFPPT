<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use App\Http\Requests\StoreDemandeRequest;
use App\Http\Requests\UpdateDemandeRequest;

class DemandeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $demandes = Demande::with('stagiaire.user')->get();
        return response()->json($demandes);
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
    public function store(StoreDemandeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Demande $demande)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Demande $demande)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDemandeRequest $request, Demande $demande)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demande $demande)
    {
        //
    }
}
