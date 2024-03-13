<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quiz>
 */
class QuizFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'groupe_id' => function () {
                return \App\Models\Groupe::factory()->create()->id;
            },
            'module_id' => function () {
                return \App\Models\Module::factory()->create()->id;
            },
            'formateur_id' => function () {
                return \App\Models\Formateur::factory()->create()->matricule;
            },
        ];
    }
}
