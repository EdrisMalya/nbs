<?php

namespace App\Http\Requests;

use App\Models\Owner;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class OwnerRequest extends FormRequest
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
            'profile' => [Rule::requiredIf(fn()=>$this->method() === 'POST'), 'nullable', 'file', 'mimes:jpg,jpeg,png', 'max:2048'],
            'full_name_eng' => ['required', 'string'],
            'full_name_da' => ['required', 'string'],
            'father_full_name_eng' => ['required', 'string'],
            'father_full_name_da' => ['required', 'string'],
            'degree_id' => ['required', 'exists:degrees,id'],
            'degree_title' => ['required', 'string'],
            'owner_percentage' => ['required', 'integer', 'min:1', 'max:100', function ($attribute, $value, $fail) {
                $company_id = $this->method() === 'PUT'
                    ? $this->owner->company_id // Assuming route model binding: /owners/{owner}
                    : $this->company_id;

                $query = Owner::query()->where('company_id', $company_id);

                // On update: exclude current owner ID
                if ($this->method() === 'PUT' && $this->owner) {
                    $query->where('id', '!=', $this->owner->id);
                }

                $other_owners_total = $query->sum('owner_percentage');
                $new_total = $other_owners_total + $value;

                if ($new_total > 100) {
                    $fail('Total percentage for owners of this company cannot exceed 100%.');
                }
            }],
            'email' => ['nullable', 'email'],
            'phone_number' => ['required', 'string'],
            'national_id' => ['required', 'string'],
            'passport_number' => ['required', 'string'],
        ];
    }
}
