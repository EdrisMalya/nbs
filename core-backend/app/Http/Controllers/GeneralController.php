<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProvinceResource;
use App\Models\Province;
use App\Services\GeneralService;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function __construct(GeneralService $generalService)
    {
        $this->generalService = $generalService;
    }

    public function provinces()
    {
        return $this->generalService->activeProvinces();
    }
    public function zones()
    {
        return $this->generalService->activeZones();
    }
    public function companyType()
    {
        return $this->generalService->activeCompanyType();
    }
    public function degrees()
    {
        return $this->generalService->activeDegrees();
    }
    public function positions()
    {
        return $this->generalService->activePositions();
    }

    private function handlePost($what){

    }
    private function handlePut($what){

    }

    private function handleDelete($what){

    }

    public function what(Request $request, $what){
        switch ($request->getMethod()){
            case "GET":
//                return $this->handleGet($what);
                break;
            case 'POST':
//                return $this->handlePost($what);
                break;
            case 'PUT':
//                return $this->handlePut($what);
                break;
            case 'DELETE':
//                return $this->handleDelete($what);
                break;

        }
    }
}
