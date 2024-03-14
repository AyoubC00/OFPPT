<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Administrateur extends Model
{
    use HasFactory;

    public function announcements () : HasMany {
        return $this->hasMany(Announcement::class, "posted_by");
    }

    public function user () : BelongsTo {
        return $this->belongsTo(User::class,"user_id");
    }
}
