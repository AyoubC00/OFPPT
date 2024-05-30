<?php

namespace Database\Seeders;

use App\Models\Abspivot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbspivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Abspivot::factory(20)->create();
    }
}
