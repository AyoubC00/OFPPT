<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Filiere;
use App\Models\Groupe;
use App\Models\User;
use App\Models\Stagiaire;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stagiaire>
 */
class StagiaireFactory extends Factory
{
    protected $model = Stagiaire::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $filiere = Filiere::factory()->create();
        return [
            'cef' => $this->faker->unique()->regexify('[A-Z]{5}[0-9]{3}'),
            'groupe_id' => Groupe::factory()->create(['filiere_id' => $filiere->id])->id,
            'filiere_id' => $filiere->id,
            'user_id' => User::factory()->create(['role' => 'stagiaire'])->id,
        ];
    }
}
