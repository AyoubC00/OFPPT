<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\User;


class Stagiaire extends Model
{
    use HasFactory;
    protected $primaryKey = "cef";
    public $incrementing = false;
    public function getKeyType() {
        return 'string';
    }

    public function group()
    {
        return $this->belongsTo(Groupe::class, 'groupe_id', 'id');
    }
    public function user () {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function filiere()
    {
        return $this->belongsTo(Filiere::class, 'filiere_id', 'id');
    }
    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'stagaire_quiz')->withPivot('score', 'createdAt');
    }
    public function club () {
        return $this->belongsTo(Club::class);
    }
}
