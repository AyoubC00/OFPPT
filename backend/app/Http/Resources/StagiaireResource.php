<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StagiaireResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "cef" => $this->cef,
            "first_name" => $this->user->nom,
            "last_name" => $this->user->prenom,
            "email" => $this->user->email,
            "cin" => $this->user->cin,
            "group" => $this->group,
            "filiere" => $this->filiere,
            "club" => $this->club
        ];
    }
}