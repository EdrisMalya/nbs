<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'profile' => $this->whenLoaded('profile_image', fn() => new FileResource($this->profile_image)),
            'degree' => $this->whenLoaded('degree', fn() => new DegreeResource($this->degree)),
            'position' => $this->whenLoaded('position', fn() => new PositionResource($this->position)),
            'full_name' => $this->full_name,
            'father_name' => $this->father_full_name,
            'degree_title' => $this->degree_title,
            'phone_number' => $this->phone_number,
            'national_id' => $this->national_id,
            'passport_number' => $this->passport_number,
            'degree_id' => $this->degree_id,
            'position_id' => $this->position_id,
        ];
    }
}
