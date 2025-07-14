<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'eng_name' => ['required', 'string', Rule::unique('companies', 'eng_name')->ignore($this->company)],
            'da_name' => ['required', 'string', Rule::unique('companies', 'da_name')->ignore($this->company)],
            'company_type_id' => ['required', 'exists:company_types,id'],
            'cash_guarantee' => ['required', 'numeric', 'min:1'],
            'license_fee' => ['required', 'numeric', 'min:1'],
            'tin_number' => ['required', 'string'],
            'office_number' => ['required', 'string'],
            'floor' => ['required', 'integer'],
            'market' => ['required', 'string'],
            'establishment_date' => ['required', 'date'],
            'gps_location' => ['nullable', 'string'],
            'province_id' => ['required', 'exists:provinces,id'],
            'zone_id' => ['required', 'exists:zones,id'],
        ];
    }
}
