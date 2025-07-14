<?php

namespace App\Http\Controllers;

use App\Enums\CompanyStatus;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function checkUpdate($company)
    {
        return in_array($company->status, [CompanyStatus::NEW->value]);
    }
    public function index()
    {
        $this->allowed('company-access');
    }

    public function store(CompanyRequest $companyRequest)
    {
        $this->allowed('company-create-company');
        $data = $companyRequest->validationData();
        $company = Company::query()->create($data);
        return [
            'result' => true,
            'message' => 'Company information saved successfully.',
            'id' => $company->id
        ];
    }

    public function update(Company $company, CompanyRequest $companyRequest)
    {
        $this->allowed('company-update-company');
        if(!$this->checkUpdate($company)) return ['result' => false, 'message' => 'Update is not possible in this status'];
        $data = $companyRequest->validationData();
        $company->update($data);
        return [
            'result' => true,
            'message' => 'Updated successfully.',
            'id' => $company->id
        ];
    }

    public function show(Company $company)
    {
        return new CompanyResource($company);
    }

    public function validateStep(Company $company, $step)
    {
        switch ($step){
            case 'owners':
                if($company->owners()->sum('owner_percentage') == 100){
                    $company->update([
                        'has_owner' => true
                    ]);
                    return [
                        'result' => true,
                        'message' => 'Successfully changed step',
                    ];
                }else{
                    return [
                        'result' => false,
                        'message' => 'Company owners did not complete 100% percentage. Make sure to enter 100% percentage',
                    ];
                }
                break;
            default:
                return [
                    'result' => false,
                    'message' => 'Invalid step',
                ];
        }

    }

    /*public function store()
    {
        return [
            'id' => 1
        ];
    }*/
}
