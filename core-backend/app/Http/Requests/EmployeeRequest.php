<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
        $rules = [
            'company_id' => ['required'],
            'full_name' => ['required', 'string'],
            'father_full_name' => ['required', 'string'],
            'degree_id' => ['required', 'exists:degrees,id'],
            'degree_title' => ['required', 'string'],
            'phone_number' => ['required', 'string'],
            'national_id' => ['required', 'string'],
            'passport_number' => ['required', 'string'],
        ];

        if ($this->isMethod('post')) {
            $rules['profile'] = ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'];
        } else {
            $rules['profile'] = ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'];
        }

        return $rules;
    }
}
