<?php

namespace App\Repositories;

use App\Models\Absences;
use App\Models\AbsJustification;
use App\Models\Groupe;
use App\Models\Stagiaire;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\select;

interface AbsRepositoriesInterface
{
    // define it latter
}

class AbsRepositories
{
    // Teacher's functions
    public function SqlAbs7DaysAgo($role, $matricule, $Minus7Days, $today)
    {
        if ($role == 'formateur') {
            return Absences::select(DB::raw('count(cef) AS Count'))
                ->where('matricule', $matricule)
                ->whereBetween('dateAbsences', [$Minus7Days, $today])
                ->get();
        } elseif ($role == 'directeur') {
            return Absences::select(DB::raw('count(cef) AS Count'))
                ->whereBetween('dateAbsences', [$Minus7Days, $today])
                ->get();
        }
    }
    // ------------------------------
    public function SqlNonJustifier7DaysAgo($role, $matricule, $Minus7Days, $today)
    {
        if ($role == 'formateur') {
            $abs =  AbsJustification::select('id')->where('justified', false)
                ->whereHas('absence', function ($query) use ($matricule, $Minus7Days, $today) {
                    $query->where('matricule', $matricule)
                        ->whereBetween('dateAbsences', [$Minus7Days, $today]);
                })
                ->count();
            return $abs;
        } elseif ($role == 'directeur') {
            $abs =  AbsJustification::select('id')->where('justified', false)
                ->whereHas('absence', function ($query) use ($Minus7Days, $today) {
                    $query->whereBetween('dateAbsences', [$Minus7Days, $today]);
                })
                ->count();
            return $abs;
        }
    }
    // ------------------------------
    public function SqlJustifier7DaysAgo($role, $matricule, $Minus7Days, $today)
    {
        if ($role == 'formateur') {
            $abs =  AbsJustification::select('id')->where('justified', true)
                ->whereHas('absence', function ($query) use ($matricule, $Minus7Days, $today) {
                    $query->where('matricule', $matricule)
                        ->whereBetween('dateAbsences', [$Minus7Days, $today]);
                })
                ->count();
            return $abs;
        } elseif ($role == 'directeur') {
            $abs =  AbsJustification::select('id')->where('justified', true)
                ->whereHas('absence', function ($query) use ($Minus7Days, $today) {
                    $query->whereBetween('dateAbsences', [$Minus7Days, $today]);
                })
                ->count();
            return $abs;
        }
    }
    // ---------------
    public function SqlGroupes($role, $matricule)
    {
        if ($role == 'formateur') {
            $Data = Groupe::select('groupes.name', 'groupes.IdGr')
                ->join('modules', 'modules.groupe_id', '=', 'IdGr')
                ->where('modules.formateur_id', $matricule)
                ->groupBy('modules.groupe_id')
                ->get();
            return $Data;
        } elseif ($role == 'directeur') {
            $Data = Groupe::select('groupes.name', 'groupes.IdGr')
                ->join('modules', 'modules.groupe_id', '=', 'IdGr')
                ->groupBy('modules.groupe_id')
                ->get();
            return $Data;
        }
    }
    // ------------------
    public function SqlStudents($role, $matricule)
    {
        if ($role == 'formateur') {
            $Data = Absences::select(
                "absences.cef",
                "users.nom",
                "users.prenom",
                "users.email",
                DB::raw('SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND,absences.heureDebut,absences.heureFin))) AS SumHourAbsent')
            )
                ->join("stagiaires", "absences.cef", "=", "stagiaires.cef")
                ->join('users', 'stagiaires.user_id', '=', 'users.id')
                ->where('matricule', $matricule)
                ->groupBy('absences.cef')
                ->orderByDesc('SumHourAbsent')
                ->get();
            return $Data;
        } elseif ($role == 'directeur') {
            $Data = Absences::select(
                "absences.cef",
                "users.nom",
                "users.prenom",
                "users.email",
                DB::raw('SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND,absences.heureDebut,absences.heureFin))) AS SumHourAbsent')
            )
                ->join("stagiaires", "absences.cef", "=", "stagiaires.cef")
                ->join('users', 'stagiaires.user_id', '=', 'users.id')
                ->groupBy('absences.cef')
                ->orderByDesc('SumHourAbsent')
                ->get();
            return $Data;
        }
    }

    // Director's Functions 






    public function SqlGroups($role, $date, $matricule)
    {
        if ($role == 'formateur') {
            return Groupe::select('groupes.name', 'absencesInfo.DateStart', 'absencesInfo.DateFin')
                ->join('absencesInfo', 'absencesInfo.IdGr', '=', 'groupes.IdGr')
                ->where('absencesInfo.DateDMY', $date)
                ->where('absencesInfo.matricule', $matricule)
                ->get();
        } elseif ($role == 'directeur') {
            return Groupe::select('groupes.name', 'absencesInfo.DateStart', 'absencesInfo.DateFin')
                ->join('absencesInfo', 'absencesInfo.IdGr', '=', 'groupes.IdGr')
                ->where('absencesInfo.DateDMY', $date)
                ->get();
        }
    }
    public function ParPerson($role, $matricule)
    {
        if ($role == 'formateur') {
            $Data = Stagiaire::select(
                DB::raw("CONCAT(CONCAT(UPPER(SUBSTRING(users.nom,1,1))),LOWER(SUBSTRING(users.nom,2))
            ,' ',CONCAT(UPPER(SUBSTRING(users.prenom,1,1)),LOWER(SUBSTRING(users.prenom,2)))) AS nomComplete"),
                'stagiaires.cef',
                'groupes.name',
                'users.email'
            )
                ->join('modules', 'stagiaires.groupe_id', '=', 'modules.groupe_id')
                ->join('users', 'users.id', '=', 'stagiaires.user_id')
                ->join('groupes', 'groupes.IdGr', '=', 'modules.groupe_id')
                ->where('modules.formateur_id', $matricule)
                ->groupBy('stagiaires.cef')
                ->get();
            return $Data;
        } elseif ($role == 'directeur') {
            $Data = Stagiaire::select(
                DB::raw("CONCAT(CONCAT(UPPER(SUBSTRING(users.nom,1,1))),LOWER(SUBSTRING(users.nom,2))
            ,' ',CONCAT(UPPER(SUBSTRING(users.prenom,1,1)),LOWER(SUBSTRING(users.prenom,2)))) AS nomComplete"),
                'stagiaires.cef',
                'groupes.name',
                'users.email'
            )
                ->join('modules', 'stagiaires.groupe_id', '=', 'modules.groupe_id')
                ->join('users', 'users.id', '=', 'stagiaires.user_id')
                ->join('groupes', 'groupes.IdGr', '=', 'modules.groupe_id')
                ->groupBy('stagiaires.cef')
                ->get();
            return $Data;
        }
    }
    public function CountAbs($role, $day, $matricule)
    {
        if ($role == 'formateur') {
            return Absences::select(DB::raw('count(*) AS Count'))
                ->where('dateAbsences', $day)
                ->where('matricule', $matricule)
                ->get();
        } elseif ($role == 'directeur') {
            return Absences::select(DB::raw('count(*) AS Count'))
                ->where('dateAbsences', $day)
                ->get();
        }
    }
    public function StagiaireAbs($role, $cef, $matricule)
    {
        if ($role == 'formateur') {
            $result = Absences::select(
                'users_us.nom as NomFormateur',
                'users_us.prenom as PrenomFormateur',
                'users_u.nom as NomStagiaire',
                'users_u.prenom as PrenomStagiaire',
                'absences.dateAbsences',
                'absences.heureDebut',
                'absences.heureFin',
                DB::raw('CASE WHEN AbsJustification.justified = 1 THEN "true" ELSE "false" END AS justified'),
                'AbsJustification.description'
            )
                ->join('formateurs', 'absences.matricule', '=', 'formateurs.matricule')
                ->join('users as users_us', 'formateurs.user_id', '=', 'users_us.id')
                ->join('stagiaires', 'absences.cef', '=', 'stagiaires.cef')
                ->join('users as users_u', 'stagiaires.user_id', '=', 'users_u.id')
                ->join('AbsJustification', 'AbsJustification.id_absence', '=', 'absences.id')
                ->where('absences.cef', $cef)
                ->where('absences.matricule', $matricule)
                ->get();

            return $result;
        } elseif ($role == 'directeur') {
            return Absences::select(
                'users_us.nom as NomFormateur',
                'users_us.prenom as PrenomFormateur',
                'users_u.nom as NomStagiaire',
                'users_u.prenom as PrenomStagiaire',
                'absences.dateAbsences',
                'absences.heureDebut',
                'absences.heureFin',
                DB::raw('CASE WHEN AbsJustification.justified = 1 THEN "true" ELSE "false" END AS justified'),
                'AbsJustification.description'
            )
                ->join('formateurs', 'absences.matricule', '=', 'formateurs.matricule')
                ->join('users as users_us', 'formateurs.user_id', '=', 'users_us.id')
                ->join('stagiaires', 'absences.cef', '=', 'stagiaires.cef')
                ->join('users as users_u', 'stagiaires.user_id', '=', 'users_u.id')
                ->join('AbsJustification', 'AbsJustification.id_absence', '=', 'absences.id')
                ->where('absences.cef', $cef)
                ->get();
        }
    }
}
