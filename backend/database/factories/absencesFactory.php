<?php

namespace Database\Factories;

use App\Models\Absences;
use App\Models\Abspivot;
use App\Models\Stagiaire;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\absences>
 */
class absencesFactory extends Factory
{
    protected $model = Absences::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $Pivot = fake()->randomElement(Abspivot::all())->first();
        // $student = Stagiaire::where('groupe_id', $Pivot->groupe_id)->inRandomOrder()->first();
        $student = fake()->randomElement(Stagiaire::all())->first();

        // $stagiaire_id = $student ? $student->cef : 'ADVAI544';
        return [
            'stagiaire_id' => $student->cef,
            'abspivots_id' => $Pivot->id
        ];
    }
}
