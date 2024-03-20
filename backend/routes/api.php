<?php
 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::post('/login', function (Request $request) {
    if (!Auth::attempt($request->only('email', 'password'))) {
        return response(['message' => 'Invalid credentials'], 422);
    }
    $user = $request->user();
    if ($user->role === "administrateur"){
        $user[$user->role] = $user->administrateur;
    } else if ($user->role === "formateur") {
        $user[$user->role] = $user->formateur;
    } else {
        $user[$user->role] = $user->stagiaire;
    }
    $token = $user->createToken('api-token');
    return ['token' => $token->plainTextToken,'user'=>$user];
})->name("login");

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

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->noContent();
    });
    // other routes
    Route::apiResource("demandes", DemandeController::class);
    Route::apiResource("filieres", FiliereController::class);
    Route::apiResource("groupes", GroupeController::class);
    Route::apiResource("users", UserController::class);
    Route::apiResource("stagiaires", StagiaireController::class);
    Route::apiResource("clubs", ClubController::class);
    Route::apiResource("announcements", AnnouncementController::class);
    Route::apiResource("events", EventController::class);
});
