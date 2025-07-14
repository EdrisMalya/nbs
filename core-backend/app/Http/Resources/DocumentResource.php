<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
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
            'file' => $this->whenLoaded('file', fn() => new FileResource($this->file)),
            'document_title' => $this->document_title,
            'created_by_user' => $this->whenLoaded('created_by', fn() => new UserResource($this->created_by_user))
        ];
    }
}
