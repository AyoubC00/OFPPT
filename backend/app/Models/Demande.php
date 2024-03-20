<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;

    public function stagiaire()
    {
        return $this->belongsTo(Stagiaire::class,'cef','cef');
    }

}
