<?php

namespace App\Http\Controllers;

use App\Helpers\DatatableBuilder;
use App\Helpers\Helpers;
use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Company;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $this->allowed('company-access');
        $query = Employee::query()->where('company_id', request()->get('company_id'))->with(['degree', 'profile_image', 'position']);
        $datatable = new DatatableBuilder($query, ['full_name','father_full_name','degree_title','phone_number','national_id']);
        return EmployeeResource::collection($datatable->build());
    }
    public function store(EmployeeRequest $request)
    {
        $this->allowed('company-access');
        $data = $request->validationData();
        $data['profile'] = Helpers::uploadFile($request->file('profile'), $data['company_id'], 'company_files', 'employee_profile')->id;
        unset($data['div']);
        Employee::query()->create($data);
        Company::query()->find($data['company_id'])->update([
            'has_employee' => true
        ]);
        return ['result' => true, 'message' => 'Successfully created'];
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee->load(['profile_image']));
    }

    public function update(Employee $employee, EmployeeRequest $request)
    {
        $data = $request->validationData();
        $data['profile'] = Helpers::uploadFile($request->file('profile'), $data['company_id'], 'company_files', 'employee_profile', true, $employee->profile)?->id??$employee->profile;
        unset($data['div']);
        $employee->update($data);
        return ['result' => true, 'message' => 'Updated created'];
    }

    public function destroy(Employee $employee)
    {
        $company = Company::query()->findOrFail($employee->company_id);
        Helpers::deleteFile($employee->profile);
        $employee->delete();
        if($company->employees->count() < 1) $company->update(['has_employee' => false]);
        return ['result' => true, 'message' => 'Successfully deleted'];
    }
}
