<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Demande>
 */
class DemandeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $stagiaire = \App\Models\Stagiaire::inRandomOrder()->first();

        return [
            'type' => fake()->randomElement(['type1', 'type2', 'type3']),
            'status' => fake()->randomElement(['Pending', 'Accepted', 'Declined', 'Waiting Return', 'Returned']),
            'cef' => $stagiaire->cef
        ];
    }
}
