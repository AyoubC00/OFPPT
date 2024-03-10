<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Groupe>
 */
class GroupeFactory extends Factory
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
            'code' => fake()->regexify('[M]{1}[0-9]{3}'),
            'annee' => fake()->randomElement(["1A", "2A", "3A"]),
            'filiere_id' => \App\Models\Filiere::factory(),
        ];
    }
}
