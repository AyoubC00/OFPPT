<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'questionBody' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'score' => $this->faker->numberBetween(1, 10),
            'module_id' => function () {
                return \App\Models\Module::factory()->create()->id;
            },
            'formateur_id' => function () {
                return \App\Models\Formateur::factory()->create()->matricule;
            },
        ];
    }
}
