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

        User::factory()->create([
            "prenom" => "John",
            "nom" => "Doe",
            "cin" => "JA12345",
            "email" => "johndoe@gmail.com",
            "role" => "stagiaire",
            "password" => "123456",
            "remember_token" => null,
            "DateNaiss" => "1994-12-03"
        ]);
        User::factory()->create([
            "prenom" => "Jane",
            "nom" => "Doe",
            "cin" => "JA23456",
            "email" => "janedoe@gmail.com",
            "role" => "administrateur",
            "password" => "123456",
            "remember_token" => null,
            "DateNaiss" => "1994-12-03"
        ]);

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
        \App\Models\Administrateur::factory()->create(["user_id" => 22]);

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
    }
}
