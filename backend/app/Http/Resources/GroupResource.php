<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "code" => $this->code,
            "year" => $this->annee,
            "created_at" => $this->created_at,
            "updated_at"=> $this->updated_at,
            "filiere" => new FiliereResource($this->filiere),
            "stagiaires" => new StagiaireCollection($this->stagiaire)
        ];
    }
}
