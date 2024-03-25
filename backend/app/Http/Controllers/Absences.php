<?php

namespace App\Http\Controllers;


use App\Repositories\AbsRepositories;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

// setting static formateur matricule and role


class Absences extends Controller
{
    public $matricule;
    public $role;
    protected $AbsRepo;

    public function __construct(AbsRepositories $AbsRepo)
    {
        $this->matricule = "FEF3";
        $this->role = 'formateur';
        $this->AbsRepo = $AbsRepo;
    }

    public function ParPerson(Request $request)
    {

        // get all students and filter them in the frontend

        try {
            $Abs = $this->AbsRepo->ParPerson($this->role, $this->matricule);
            return response()->json(['Stagiaires' => $Abs]);
        } catch (Exception $e) {
            return response()->json(["message" => "Internal Server Error"]);
        }
    }

    public function IndexPage()
    {

        /*
            For sanctum authentification
        */

        // $user = $request->user();
        // if (in_array($user->role, array('formateur', 'directeur')))

        $CurrentDate = Carbon::now();
        $today = Carbon::today();
        $Minus7Days = Carbon::today()->subDay(7);
        /*
            This can be used to select data from last September to now
            $LastSeptember = $CurrentDate->month >= 9 ? $CurrentDate->year : $CurrentDate->year - 1;    // we can use Last September to ignore last years students
        */
        try {

            // for teacher's students only
            /*
                Counting numbers of absents students last week
            */

            $Abs7DaysAgo = $this->AbsRepo->SqlAbs7DaysAgo($this->role, $this->matricule, $Minus7Days, $today);
            /*
                    Counting number of absents students non justified 
            */
            $NonJustifier7DaysAgo = $this->AbsRepo->SqlNonJustifier7DaysAgo($this->role, $this->matricule, $Minus7Days, $today);

            /*
                    Counting number of absents students justified 
            */
            $Justifier7DaysAgo = $this->AbsRepo->SqlJustifier7DaysAgo($this->role, $this->matricule, $Minus7Days, $today);

            /*
                    Count many groupes par prof
            */

            $Groupes = $this->AbsRepo->SqlGroupes($this->role, $this->matricule);

            /*
                    Scored Absents Students
            */

            $Students = $this->AbsRepo->SqlStudents($this->role, $this->matricule);

            /*
                    Count last 7 days absents
            */
            $Week = [];
            for ($i = 1; $i <= 7; $i++) {
                $day = $today->subDays(1);
                $dayName = $day->format('l');
                $CountAbs = $this->AbsRepo->CountAbs($this->role, $day, $this->matricule);
                $Week[$dayName] = $CountAbs[0]->Count;
            }

            $Data = [
                'PreviousWeekAbsence' => $Abs7DaysAgo,
                'NonJustifier' => $NonJustifier7DaysAgo,
                'Justifier' => $Justifier7DaysAgo,
                'GroupesFormateur' => [
                    'Groupes' => $Groupes,
                    'CountGroupes' => count($Groupes)
                ],
                'ScoredStudentAbs' => $Students,
                'WeekAbs' => $Week
            ];

            return response()->json(['data' => $Data]);
        } catch (Exception $e) {
            return response()->json(["message" => "Internal Server Error"]);
        }
    }

    public function GetGroupsByDate(Request $request)
    {
        /*
            Select groups that have been marked absent on this date
        */

        $date = request('date');

        // $date = "2024-03-13";
        try {
            $Groups = $this->AbsRepo->SqlGroups($this->role, $date, $this->matricule);
            return response()->json(['data' => $Groups]);
        } catch (Exception $e) {
            return response()->json(["message" => "Internal Server Error"]);
        }
    }
    public function StagiaireAbs(Request $request)
    /*
        Recherche Stagiaires par cef
    */
    {
        $cef = request('cef');
        try {
            $Data = $this->AbsRepo->StagiaireAbs($this->role, $cef, $this->matricule);
            return response()->json(['Stagiaires' => $Data]);
        } catch (Exception $e) {
            return response()->json(["message" => "Internal Server Error"]);
        }
    }
}
