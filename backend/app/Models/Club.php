<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Stagiaire;
class Club extends Model
{
    use HasFactory;

    public function members () {
        return $this->hasMany(Stagiaire::class);
    }

    public function leader () {
        return $this->hasOne(Stagiaire::class);
    }
}
