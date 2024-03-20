<?php

namespace App\Http\Resources;

use App\Models\User;
use App\Models\Filiere;
use App\Models\Groupe;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClubResource extends JsonResource
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
            "description" => $this->description,
            "logo" => $this->logo,
            "members" => array_map(fn ( $member ) => [
                    "cef" => $member["cef"],
                    ...User::find($member["user_id"])->toArray(),
                    "filiere" => Filiere::find($member["filiere_id"]),
                    "groupe" => Groupe::find($member["groupe_id"])
                ], $this->members->toArray()
            ),
            "leader" => $this->leader
        ];
    }
}
