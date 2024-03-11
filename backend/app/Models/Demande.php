<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne; 

class Demande extends Model
{
    use HasFactory;

    public function stagiaire(): HasOne
    {
        return $this->hasOne(Stagiaire::class,'cef','cef');
    }

}
