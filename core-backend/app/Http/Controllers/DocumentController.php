<?php

namespace App\Http\Controllers;

use App\Helpers\DatatableBuilder;
use App\Helpers\Helpers;
use App\Http\Resources\DocumentResource;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DocumentController extends Controller
{
    public function getDocuments($relation_id, $relation_type)
    {
        $query = Document::query()->where([
            ['relation_id', '=', $relation_id],
            ['relation_name', '=', $relation_type],
        ])->with(['file']);
        $datatable = new DatatableBuilder($query, ['document_title']);
        return DocumentResource::collection($datatable->build());
    }

    public function store($relation_id, $relation_type)
    {
        \request()->validate([
           'document' => ['sometimes', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:10240'],
           'document_title' => ['required', 'string', 'min:1', 'max:255', function ($attribute, $value, $fail) use($relation_id, $relation_type) {
               if(Document::query()->where([
                   ['relation_id', '=', $relation_id],
                   ['relation_name', '=', $relation_type],
                   ['document_title', '=', $value],
               ])->exists()) $fail('Document with this title already exists');
           }],
        ]);
        Document::query()->create([
            'file_id' => Helpers::uploadFile(
                \request()->file('document'),
                $relation_id,
                $relation_type,
            )->id,
            'relation_id' => $relation_id,
            'relation_name' => $relation_type,
            'document_title' => \request()->document_title,
            'created_by' => auth()->id()
        ]);
        return [
            'result' => true,
            'message' => 'Document created successfully'
        ];
    }

    public function destroy($relation_id, $relation_type, Document $document)
    {
        Helpers::deleteFile($document->file_id);
        $document->delete();
        return [
            'result' => true,
            'message' => 'Document deleted successfully'
        ];
    }
}
