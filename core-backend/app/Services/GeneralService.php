<?php

namespace App\Services;

use App\Http\Resources\DegreeResource;
use App\Http\Resources\GeneralResource\ProvinceResource;
use App\Http\Resources\GeneralResource\ZoneResource;
use App\Http\Resources\PositionResource;
use App\Models\CompanyType;
use App\Models\Degree;
use App\Models\Position;
use App\Models\Province;
use App\Models\Zone;

class GeneralService
{
    public function activeProvinces()
    {
        return ProvinceResource::collection(Province::query()->where('active', true)->get());
    }
    public function activeZones()
    {
        return ZoneResource::collection(Zone::query()->where('is_active', true)->get());
    }
    public function activeCompanyType()
    {
        return ZoneResource::collection(CompanyType::query()->where('is_active', true)->get());
    }
    public function activeDegrees()
    {
        return DegreeResource::collection(Degree::query()->where('is_active', true)->get());
    }
    public function activePositions()
    {
        return PositionResource::collection(Position::query()->where('is_active', true)->get());
    }
}
