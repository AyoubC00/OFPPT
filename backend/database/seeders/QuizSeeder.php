<?php

namespace Database\Seeders;

use App\Models\Formateur;
use App\Models\Groupe;
use App\Models\Module;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Stagiaire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            [
                'title' => 'Capital Cities Quiz',
                'groupe_id' => Groupe::first()->id, // Assuming the groupe id
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule, // Assuming the formateur id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more quizzes as needed
        ]);

        DB::table('quiz_question')->insert([
            [
                'quiz_id' => Quiz::first()->id, // Assuming the quiz id
                'question_id' => Question::first()->id, // Assuming the question id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'quiz_id' => Quiz::first()->id, // Assuming the quiz id
                'question_id' => Question::skip(1)->first()->id, // Assuming the question id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'quiz_id' => Quiz::first()->id, // Assuming the quiz id
                'question_id' => Question::skip(2)->first()->id, // Assuming the question id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'quiz_id' => Quiz::first()->id, // Assuming the quiz id
                'question_id' => Question::skip(4)->first()->id, // Assuming the question id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more quiz-question relationships as needed
        ]);

        DB::table('stagaire_quiz')->insert([
            [
                'stagaire_cef' => Stagiaire::first()->cef, // Assuming the stagaire cef
                'quiz_id' => Quiz::first()->id, // Assuming the quiz id
                'score' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more stagaire-quiz relationships as needed
        ]);
    }
}
