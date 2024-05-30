<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Abspivot extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['date', 'heure_debut', 'heure_fin', 'groupe_id', 'matricule'];
}
