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
        // Seed users (including stagiaires)
        User::factory(5)->create();

        // Seed stagiaires
        $stagiaires = User::where('role', 'stagiaire')->get();
        $stagiaires->each(function ($stagiaire) {
            Stagiaire::factory()->create(['user_id' => $stagiaire->id]);
        });

        // Seed formateurs
        $formateurs = User::where('role', 'formateur')->get();
        $formateurs->each(function ($formateur) {
            Formateur::factory()->create(['user_id' => $formateur->id]);
        });

        // Seed administrateurs
        $administrateurs = User::where('role', 'administrateur')->get();
        $administrateurs->each(function ($administrateur) {
            Administrateur::factory()->create(['user_id' => $administrateur->id]);
        });

        // Seed groups with modules
        Groupe::all()->each(function ($groupe) {
            Module::factory()->create(['groupe_id' => $groupe->id]);
        });

        // Seed questions with options
        Question::factory(10)->create()->each(function ($question) {
            $question->options()->saveMany(Option::factory(4)->make());
        });

        // Seed quizzes and attach questions
        Quiz::factory(2)->create()->each(function ($quiz) {
            $questions = Question::inRandomOrder()->limit(rand(5, 10))->get();
            $quiz->questions()->attach($questions);
        });

        // Seed stagiaires' attempts on quizzes
        $stagiaires->each(function ($stagiaire) {
            $quizzes = Quiz::inRandomOrder()->limit(rand(1, 2))->get();
            $stagiaire->stagiaire->quizzes()->attach($quizzes, ['score' => rand(0, 100)]);
        });
    }
}
