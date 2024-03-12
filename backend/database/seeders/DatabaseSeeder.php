<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Groupe;
use App\Models\Option;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Administrateur;
use App\Models\Module;
use App\Models\Stagiaire;
use App\Models\Formateur;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->create();

        $stagiaires = User::where('role', 'stagiaire')->get();
        foreach ($stagiaires as $stagiaire) {
            Stagiaire::factory()->create(['user_id' => $stagiaire->id]);
        }

        $formateurs = User::where('role', 'formateur')->get();
        foreach ($formateurs as $formateur) {
            Formateur::factory()->create(['user_id' => $formateur->id]);
        }

        $administrateurs = User::where('role', 'administrateur')->get();
        foreach ($administrateurs as $administrateur) {
            Administrateur::factory()->create(['user_id' => $administrateur->id]);
        }

        Groupe::all()->each(function ($groupe) {
            Module::factory()->create(['groupe_id' => $groupe->id]);
        });

        Quiz::factory(5)->create();
        Question::factory(20)->create();
        Option::factory(40)->create();

        Quiz::all()->each(function ($quiz) {
            $quiz->questions()->attach(Question::inRandomOrder()->limit(rand(5, 10))->pluck('id'));
        });
    }
}
