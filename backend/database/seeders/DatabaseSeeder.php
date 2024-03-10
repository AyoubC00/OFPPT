<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Groupe;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    public function run(): void
    {
        \App\Models\User::factory(20)->create();

        $stagiaires = User::where('role', 'stagiaire')->get();
        foreach($stagiaires as $stagiaire){
            \App\Models\Stagiaire::factory()->create([
                'user_id' => $stagiaire->id,
            ]);
        }

        $formateurs = User::where('role', 'stagiaire')->get();
        foreach($formateurs as $formateur){
            \App\Models\Formateur::factory()->create([
                'user_id' => $formateur->id,
            ]);
        }

        $administrateurs = User::where('role', 'stagiaire')->get();
        foreach($administrateurs as $administrateur){
            \App\Models\Administrateur::factory()->create([
                'user_id' => $administrateur->id,
            ]);
        }

        $groupes = Groupe::all();
        foreach($groupes as $groupe){
            \App\Models\Module::factory()->create([
                'groupe_id' => $groupe->id,
            ]);
        }
    }
}
