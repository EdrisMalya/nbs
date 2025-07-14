<?php

namespace App\Http\Resources;

use App\Helpers\Helpers;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...parent::toArray($request),
            'url' => $this->file_url,
            'ext' => Helpers::fileExt($this->file_name),
            'file_size' => Helpers::formatFileSize($this->file_size),
            'file_name' => $this->file_name,
        ];
    }
}
