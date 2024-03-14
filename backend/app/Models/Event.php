<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "posted_by"
    ];
    public function user () : BelongsTo {
        return $this->belongsTo(User::class, "posted_by");
    }
}
