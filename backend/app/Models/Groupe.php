<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Groupe extends Model
{
    use HasFactory;

    public function stagiaire () : HasMany {
        return $this->hasMany(Stagiaire::class);
    }

    public function filiere () : BelongsTo {
        return $this->belongsTo(Filiere::class);
    }
}
