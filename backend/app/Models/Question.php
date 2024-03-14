<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }


    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'quiz_question');
    }
}
