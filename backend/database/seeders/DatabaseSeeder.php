<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Groupe;
use \App\Models\Option;
use \App\Models\Question;
use \App\Models\Quiz;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    public function run(): void
    {
        \App\Models\User::factory(20)->create();

        $stagiaires = User::where('role', 'stagiaire')->get();
        foreach ($stagiaires as $stagiaire) {
            \App\Models\Stagiaire::factory()->create([
                'user_id' => $stagiaire->id,
            ]);
        }

        $formateurs = User::where('role', 'stagiaire')->get();
        foreach ($formateurs as $formateur) {
            \App\Models\Formateur::factory()->create([
                'user_id' => $formateur->id,
            ]);
        }

        $administrateurs = User::where('role', 'stagiaire')->get();
        foreach ($administrateurs as $administrateur) {
            \App\Models\Administrateur::factory()->create([
                'user_id' => $administrateur->id,
            ]);
        }

        $groupes = Groupe::all();
        $formateurs = \App\Models\Formateur::all();
        foreach($groupes as $index => $groupe){
            \App\Models\Module::factory()->create([
                'groupe_id' => $groupe->id,
                'formateur_id' => $formateurs[$index]->matricule,
            ]);
        }

        // Seed quizzes
        \App\Models\Quiz::factory(10)->create();

        // Seed questions
        \App\Models\Question::factory(30)->create();

        // Seed options
        \App\Models\Option::factory(50)->create();


        // Seed quiz_question pivot table
        $quizzes = Quiz::all();
        $questions = Question::all();
        foreach ($quizzes as $quiz) {
            $quiz->questions()->attach($questions->random(rand(5, 10))->pluck('id'));
        }
    }
}
