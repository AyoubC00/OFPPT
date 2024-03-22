<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DemandeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role=="stagiaire"){
            $demandes= Demande::where("cef",Auth::user()->stagiaire->cef)->get();
        }
        elseif(Auth::user()->role=="administrateur")
        {
            $demandes=Demande::with('stagiaire.user')->get();
        }else{
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        return response()->json($demandes);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Auth::user()->role != "stagiaire") {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $demande = new Demande;
        $demande->cef = Auth::user()->stagiaire->cef;
        $demande->status = $request->status;
        $demande->type = $request->type;
        $demande->save();
        return response()->json(['message' => 'Demande created successfully'], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Demande $demande)
    {
        if (Auth::user()->role != "administrateur") {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $demande->status = $request->status;
        $demande->save();
        return response()->json(['message' => 'Demande updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demande $demande)
    {   
        if (Auth::user()->role != "stagiaire") {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $demande=Demande::where("cef",Auth::user()->stagiaire->cef)->firstOrFail();
        $demande->delete();
        return response()->json(['message' => 'Demande deleted successfully'], 200);

    }
}
