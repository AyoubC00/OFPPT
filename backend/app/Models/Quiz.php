<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }

    public function questions()
    {
        return $this->belongsToMany(Question::class, 'quiz_question');
    }

    public function stagaires()
    {
        return $this->belongsToMany(Stagiaire::class, 'stagaire_quiz')->withPivot('score', 'createdAt');
    }
}
