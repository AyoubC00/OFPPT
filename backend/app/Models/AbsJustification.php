<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AbsJustification extends Model
{
    use HasFactory;

    protected $table = "AbsJustification";
    protected $fillable = ["id_absence", "justified", "description"];

    public function absence(): BelongsTo
    {
        return $this->belongsTo(Absences::class, 'id_absence', 'id');
    }
}
