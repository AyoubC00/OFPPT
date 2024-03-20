<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module>
 */
class ModuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'code' => fake()->regexify('[A-Z]{2}[0-9]{3}'),
            'masse_horaire' => fake()->numberBetween(20, 120),
            'groupe_id' => function () {
                return \App\Models\Groupe::factory()->create()->id;
            },
            'formateur_id' => function () {
                return \App\Models\Formateur::factory()->create()->matricule;
            },
        ];
    }
}
