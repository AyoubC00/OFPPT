<?php

use App\Http\Controllers\Absences;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\GroupeController;
use App\Http\Controllers\StagiaireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("filieres", FiliereController::class);
Route::apiResource("groupes", GroupeController::class);
Route::apiResource("stagiaires", StagiaireController::class);
Route::apiResource("clubs", ClubController::class);
Route::apiResource("announcements", AnnouncementController::class);
Route::apiResource("events", EventController::class);


/*
    Absence Api
*/

// getting all students 
Route::get('/abs/all-stagiaires', [Absences::class, "ParPerson"])
    ->name('absences.all_stagiaires');

// this request is for the first page(contains all states that we need)
Route::get('/abs/index', [Absences::class, "IndexPage"])
    ->name('absences.ManyStudentWeek');

// searching group's absents by date Y-M-D
Route::get('/abs/groups-date', [Absences::class, 'GetGroupsByDate'])
    ->name('absences.GetGroupsByDate');

// searching for student's absence
Route::get('/abs/StagiaireAbs', [Absences::class, 'StagiaireAbs'])
    ->name('absences.StagiaireAbs');
