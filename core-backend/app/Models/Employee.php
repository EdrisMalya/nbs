<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Symfony\Component\HttpKernel\Profiler\Profile;

class Employee extends Model
{
    use HasFactory, LogsActivity, CausesActivity;

    protected $guarded = [];

    protected $casts = [
        'position_id' => 'int',
        'degree_id' => 'int',
    ];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
                        ->logOnlyDirty()
                        ->logOnly(['*'])
                        ->useLogName('Employee')
                        ->dontSubmitEmptyLogs()
                        ->dontLogIfAttributesChangedOnly(['updated_at'])
                        ;
    }

    public function getCreatedAtAttribute($value){
        $ss = cache()->get('software-settings');
        if(!$ss) return $value;
        return Carbon::parse($value)->format(cache()->get('software-settings')->date_format.' h:i:s A');
    }

    public function profile_image() : BelongsTo
    {
        return $this->belongsTo(File::class, 'profile');
    }
    public function degree() : BelongsTo
    {
        return $this->belongsTo(Degree::class);
    }
    public function position() : BelongsTo
    {
        return $this->belongsTo(Position::class);
    }
}
