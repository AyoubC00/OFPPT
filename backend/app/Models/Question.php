<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Question extends Model
{
    use HasFactory;
    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }

    public function formateur(): BelongsTo
    {
        return $this->belongsTo(Formateur::class);
    }

    public function options(): HasMany
    {
        return $this->hasMany(Option::class);
    }


    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'quiz_question');
    }
}
