<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "pinned",
        "posted_by"
    ];

    public function administrateur () : BelongsTo {
        return $this->belongsTo(Administrateur::class, "posted_by");
    }
}
