<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('options')->insert([
            [
                'content' => 'Paris',
                'isCorrect' => true,
                'question_id' => Question::first()->id, // Assuming the module id
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'London',
                'isCorrect' => false,
                'question_id' => Question::first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'Rabat',
                'isCorrect' => true,
                'question_id' => Question::skip(1)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'London',
                'isCorrect' => false,
                'question_id' => Question::skip(1)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'London',
                'isCorrect' => false,
                'question_id' => Question::skip(2)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'algeria',
                'isCorrect' => true,
                'question_id' => Question::skip(2)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'library',
                'isCorrect' => true,
                'question_id' => Question::skip(3)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'language',
                'isCorrect' => false,
                'question_id' => Question::skip(3)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'madrid',
                'isCorrect' => true,
                'question_id' => Question::skip(4)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => 'casa',
                'isCorrect' => false,
                'question_id' => Question::skip(4)->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more options as needed
        ]);
    }
}
