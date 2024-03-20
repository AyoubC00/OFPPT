<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AbsencesInfo extends Model
{
    use HasFactory;

    protected $table = "AbsencesInfo";
    protected $fillable = ["DateStart", "DateFin", "IdGr", "DateDMY", "matricule"];

    public function groupes(): BelongsTo
    {
        return $this->belongsTo(Groupe::class, 'IdGr', 'IdGr');
    }

    public function formateur(): BelongsTo
    {
        return $this->belongsTo(Formateur::class, 'matricule', 'matricule');
    }
}
