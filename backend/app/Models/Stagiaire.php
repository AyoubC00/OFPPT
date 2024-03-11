<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Stagiaire extends Model
{
    use HasFactory;
    public function groupe(): HasOne
    {
        return $this->hasOne(Groupe::class,'id','groupe_id');
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','user_id');
    }

    public function filiere(): HasOne
    {
        return $this->hasOne(Filiere::class,'id','filiere_id');
    }
}
