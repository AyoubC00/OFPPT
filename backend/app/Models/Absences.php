<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Absences extends Model
{
    use HasFactory;

    protected $table = "absence";
    protected $fillable = ['stagiaire_id', 'abspivots_id', 'justified'];

    public $timestamps = false;

    // public function formateur(): BelongsTo
    // {
    //     return $this->belongsTo(Formateur::class, 'matricule', 'matricule');
    // }

    // public function stagiaire(): BelongsTo
    // {
    //     return $this->belongsTo(Stagiaire::class, 'cef', 'cef');
    // }
}
