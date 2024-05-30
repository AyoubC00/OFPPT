<?php

namespace Database\Factories;

use App\Models\Formateur;
use App\Models\Groupe;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Abspivot>
 */
class AbspivotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $debut_times = ['08:00', '10:00', '13:00', '16:00'];
        $fin_times = ['10:00', '13:00', '16:00', '18:00'];

        $heure_debut = Arr::random($debut_times);
        $heure_fin_options = array_filter($fin_times, function ($time) use ($heure_debut) {
            return strtotime($time) > strtotime($heure_debut);
        });
        $heure_fin = Arr::random($heure_fin_options);

        return [
            'date' => $this->faker->date(),
            'heure_debut' => $heure_debut,
            'heure_fin' => $heure_fin,
            'groupe_id' => Groupe::inRandomOrder()->first()->id,
            'matricule' => Formateur::inRandomOrder()->first()->matricule
        ];
    }
}
