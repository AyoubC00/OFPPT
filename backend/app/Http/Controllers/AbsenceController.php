<?php

namespace App\Http\Controllers;

use App\Models\Absences;
use App\Models\Abspivot;
use App\Models\Filiere;
use App\Models\Groupe;
use App\Models\Stagiaire;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class AbsenceController extends Controller
{
    /**
     * Get all Filieres and Groupes
     */
    public function index()
    {
        try {
            $Filieres = Filiere::all();
            $Groupes = Groupe::all();

            return response()->json(compact('Filieres', 'Groupes'));
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }

    /*
        to detect time ranges
    */

    public function ListAbsence(Request $request)
    {
        try {
            $validate = $request->validate([
                'date' => 'required',
                'groupe_id' => 'required'
            ]);
            $Seances = Abspivot::where('date', $validate['date'])
                ->where('groupe_id', $validate['groupe_id'])
                ->get();
            return response()->json($Seances);
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }

    /**
     * get Absent student by privot table id
     */
    public function StudentAbs(Request $request)
    {
        try {
            $validate = $request->validate([
                // this is pivot table's id
                'id' => 'required'
                // 'groupe_id' => 'required'
            ]);
            $Group_id =  Abspivot::findOrFail(intval($validate['id']))->groupe_id;
            /*
                Get all student by group
            */
            $StagiaireByGroup = Stagiaire::select(
                'stagiaires.cef',
                DB::raw("CONCAT(CONCAT(UPPER(SUBSTRING(users.nom,1,1))),LOWER(SUBSTRING(users.nom,2))
            ,' ',CONCAT(UPPER(SUBSTRING(users.prenom,1,1)),LOWER(SUBSTRING(users.prenom,2)))) AS nomComplete"),
            )->join('users', 'stagiaire.user_id', '=', 'users.id')
                ->where('stagiaire.groupe_id', $Group_id);
            /*
                Get students were absent
            */
            $Absent_Stagiaire = Absences::where('abspivots_id', $validate['id']);
            return response()->json(compact("StagiaireByGroup", "Absent_Stagiaire", "Group_id"));
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }
    /**
     * Get Stagiaires by group id
     */
    public function Stagiaires(Request $request)
    {
        try {
            $validate = $request->validate([
                // groupe Id
                'id' => 'required'
            ]);
            $Stagiaires = Stagiaire::where('groupe_id', $validate['id']);
            return response()->json($Stagiaires);
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }
    /**
     *  Check if time range is available
     */

    public function timeAvailable(Request $request)
    {
        try {
            $validate = $request->validate([
                'heure_debut' => 'required',
                'heure_fin' => 'required',
                // groupe id
                'id' => 'required'
            ]);
            $DateNow = date('Y-m-d');
            $Registred = Abspivot::where('heure_debut', $validate['heure_debut'])
                ->where('heure_fin', $validate['heure_fin'])
                ->where('groupe_id', $validate['id'])
                ->where('date', $DateNow)
                ->get();
            if ($Registred) {
                $data = [
                    'id' => $Registred->id
                ];
                $response = Http::post(route('abs.stagiaires'), $data);
                if ($response->successful()) {
                    return $response->json();
                } else {
                    return response()->json(['message' => 'Failed to retrieve student absences']);
                }
            } else {
                $response = Http::post(route('abs.all-stagiaires'), ['id' => $validate['id']]);
                if ($response->successful()) {
                    return $response->json();
                } else {
                    return response()->json(['message' => 'Failed to retrieve students']);
                }
            }
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }

    /**
     * Enregistrer l'absence
     */
    public function RegisterAbsence(Request $request)
    {
        try {

            $validate = $request->validate([
                'groupe_id' => 'required',
                'matricule' => 'required',
                'heure_debut' => 'required',
                'heure_fin' => 'required',
            ]);
            $DateNow = date('Y-m-d');
            $Abspivot = Abspivot::create([
                'date' => $DateNow,
                'groupe_id' => $validate['groupe_id'],
                'matricule' => $validate['matricule'],
                'heure_debut' => $validate['date_debut'],
                'heure_find' => $validate['date_find']
            ]);
            if (isset($request->stagiaires)) {
                foreach ($request->stagiaires as $stagiaireId) {
                    $Absent = Absences::create([
                        'abspivots_id' => $Abspivot->id,
                        'stagiaire_id' => $stagiaireId,
                        'justified' => false
                    ]);
                }
            }
        } catch (Exception $e) {
            return response()->json(['message' => 'internal server error'], 500);
        }
    }
}
