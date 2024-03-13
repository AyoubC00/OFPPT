<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Stagiaire extends Model
{
    use HasFactory;
    public function groupe()
    {
        return $this->belongsTo(Groupe::class,'id','groupe_id');
    }

    public function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }

    public function filiere()
    {
        return $this->belongsTo(Filiere::class,'id','filiere_id');
    }
    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'stagaire_quiz')->withPivot('score', 'createdAt');
    }
}
