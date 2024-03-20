<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Filiere extends Model
{
    use HasFactory;

    public function stagiaire () : HasMany {
        return $this->hasMany(Stagiaire::class);
    }

    public function groupes () : HasMany {
        return $this->hasMany(Groupe::class);
    }
}
