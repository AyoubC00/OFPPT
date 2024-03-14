<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stagiaire>
 */
class StagiaireFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $filiere = \App\Models\Filiere::factory()->create();
        return [
            'cef' => $this->faker->unique()->regexify('[A-Z]{5}[0-9]{3}'),
            'groupe_id' => \App\Models\Groupe::factory(['filiere_id'=>$filiere->id]),
            'filiere_id' => $filiere->id,
            'user_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
        ];
    }
}
