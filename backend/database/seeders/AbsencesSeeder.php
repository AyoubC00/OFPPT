<?php

namespace Database\Seeders;

use App\Models\Absences;
use App\Models\Filiere;
use App\Models\Groupe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbsencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Absences::factory(40)->create();
        // Filiere::factory()->create([
        //     'name' => 'DD',
        //     'specialite' => "Technicien Spécialisé"
        // ]);
        // Filiere::factory()->create([
        //     'name' => 'ID',
        //     'specialite' => "Technicien Spécialisé"
        // ]);

        // Groupe::factory()->create([
        //     'name' => "DEV101",
        //     'code' => "DEV101",
        //     'annee' => "1A",
        //     'filiere_id' => Filiere::where('name', 'DD')
        // ]);
        // Groupe::factory()->create([
        //     'name' => "DEV202",
        //     'code' => "DEV202",
        //     'annee' => "2A",
        //     'filiere_id' => Filiere::where('name', 'DD')
        // ]);
        // Groupe::factory()->create([
        //     'name' => "ID101",
        //     'code' => "ID101",
        //     'annee' => "1A",
        //     'filiere_id' => Filiere::where('name', 'ID')
        // ]);
        // Groupe::factory()->create([
        //     'name' => "ID202",
        //     'code' => "ID202",
        //     'annee' => "2A",
        //     'filiere_id' => Filiere::where('name', 'ID')
        // ]);
    }
}
