<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Http\Requests\OwnerRequest;
use App\Http\Resources\OwnerResource;
use App\Models\Company;
use App\Models\Owner;
use Illuminate\Http\Request;

class CompanyOwnerController extends Controller
{
    public function index()
    {
        $this->allowed('company-access');
    }

    public function checkCompanyOwnerStatus($company_id)
    {
        if(
            Owner::query()->where('company_id', $company_id)->sum('owner_percentage') == 100
        ){
//            Company::query()->find($company_id)->update(['has_owner' => true]);
        }else{
            Company::query()->find($company_id)->update(['has_owner' => false]);
        }
    }

    public function store(OwnerRequest $request)
    {
        $data = $request->validationData();
        unset($data['div']);
        $data['company_id'] = $request->get('company_id');
        $data['profile'] = Helpers::uploadFile($request->file('profile'), $data['company_id'], 'company_files', 'owner_files')->id;
        Owner::query()->create($data);
        $this->checkCompanyOwnerStatus($data['company_id']);

        return [
            'result' => true,
            'message' => 'Successfully created'
        ];
    }

    public function show($record_id)
    {
        $this->allowed('company-access');
        if(\request()->has('fetch_company_owner')){
            Company::query()->findOrFail($record_id);
            return OwnerResource::collection(
                Owner::query()->where('company_id', $record_id)
                    ->where(function ($query){
                        $query->where('owners.full_name_eng', 'like', '%'.\request('search').'%');
                        $query->orWhere('owners.full_name_da', 'like', '%'.\request('search').'%');
                    })
                    ->with(['file'])->get()
            );
        }
        else{
            return new OwnerResource(Owner::query()->with('file')->find($record_id));
        }
    }

    public function update(Owner $owner, OwnerRequest $request)
    {
        $data = $request->validationData();
        unset($data['div']);
        $data['profile'] = Helpers::uploadFile($request->file('profile'), $owner->company_id, 'company_files', 'owner_files', true, $owner->profile)?->id??$owner->profile;
        $owner->update($data);
        $this->checkCompanyOwnerStatus($owner->company_id);
        return [
            'result' => true,
            'message' => 'Updated created'
        ];
    }

    public function destroy(Owner $owner)
    {
        $this->allowed('company-access');
        Helpers::deleteFile($owner->profile);
        $company_id = $owner->company_id;
        $owner->delete();
        $this->checkCompanyOwnerStatus($company_id);
        return [
            'result' => true,
            'message' => 'Successfully deleted'
        ];
    }
}
