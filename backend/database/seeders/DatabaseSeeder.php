<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Groupe;
use App\Models\Administrateur;
use App\Models\Module;
use App\Models\Stagiaire;
use App\Models\Formateur;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Seed users (including stagiaires)
        User::factory(10)->create();

        // Seed administrateurs
        $administrateurs = User::where('role', 'administrateur')->get();
        $administrateurs->each(function ($administrateur) {
            Administrateur::factory()->create(['user_id' => $administrateur->id]);
        });
        // Seed stagiaires
        $stagiaires = User::where('role', 'stagiaire')->get();
        $stagiaires->each(function ($stagiaire) {
            Stagiaire::factory()->create(['user_id' => $stagiaire->id]);
        });

        // Seed formateurs
        $formateurs = User::where('role', 'formateur')->get();
        $formateurs->each(function ($formateur) {
            Formateur::factory()->create(['user_id' => $formateur->id]);
        });


        // Seed groups with modules
        Groupe::all()->each(function ($groupe) {
            Module::factory()->create(['groupe_id' => $groupe->id]);
        });

        $this->call(QuestionSeeder::class);
        $this->call(OptionSeeder::class);
        $this->call(QuizSeeder::class);
    }
}
