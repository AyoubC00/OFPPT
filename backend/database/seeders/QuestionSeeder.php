<?php

namespace Database\Seeders;

use App\Models\Formateur;
use App\Models\Module;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            [
                'questionBody' => 'What is the capital of France?',
                'description' => 'This question asks about the capital of France.',
                'score' => 10,
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule, // Assuming the formateur id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'questionBody' => 'What is the capital of Morocco?',
                'description' => 'This question asks about the capital of France.',
                'score' => 10,
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'questionBody' => 'What is the capital of Algeria?',
                'description' => 'This question asks about the capital of France.',
                'score' => 10,
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'questionBody' => 'What is react?',
                'description' => 'This question asks about react.',
                'score' => 10,
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'questionBody' => 'What is the capital of Spain?',
                'description' => 'This question asks about the capital of France.',
                'score' => 10,
                'module_id' => Module::first()->id, // Assuming the module id
                'formateur_id' => Formateur::first()->matricule,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more questions as needed
        ]);
    }
}
