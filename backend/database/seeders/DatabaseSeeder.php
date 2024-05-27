<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Demande;
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
        User::factory(20)->create();

        User::factory()->create(
            [
                "prenom" => "john",
                "nom" => "doe",
                "email" => "johndoe@gmail.com",
                "password" => "123456",
                "role" => "administrateur",
                "cin" => "JA12345",
            ]
        );
        User::factory()->create(
            [
                "prenom" => "jane",
                "nom" => "doe",
                "email" => "janedoe@gmail.com",
                "password" => "123456",
                "role" => "administrateur",
                "cin" => "JA67890",
            ],
        );

        $stagiaires = User::where('role', 'stagiaire')->get();
        foreach ($stagiaires as $stagiaire) {
            \App\Models\Stagiaire::factory()->create();
        }

        $formateurs = User::where('role', 'formateur')->get();
        foreach ($formateurs as $formateur) {
            \App\Models\Formateur::factory()->create();
        }

        $administrateurs = User::where('role', 'administrateur')->get();
        foreach ($administrateurs as $administrateur) {
            \App\Models\Administrateur::factory()->create();
        }

        $groupes = Groupe::all();
        $formateurs = \App\Models\Formateur::all();
        foreach($groupes as $index => $groupe){
            \App\Models\Module::factory()->create();
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

        // Seed demandes
        Demande::factory()->create(20);
    }
}
