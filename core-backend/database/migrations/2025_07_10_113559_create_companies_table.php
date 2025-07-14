<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('eng_name');
            $table->string('da_name');
            $table->unsignedInteger('company_type_id');
            $table->decimal('cash_guarantee', 15, 2)->default(0);
            $table->decimal('license_fee', 15, 2)->default(0);
            $table->string('tin_number');
            $table->string('office_number');
            $table->integer('floor')->default(1);
            $table->string('market');
            $table->string('gps_location')->nullable();
            $table->unsignedInteger('province_id');
            $table->unsignedInteger('zone_id');

            $table->boolean('has_owner')->default(false);
            $table->boolean('has_employee')->default(false);
            $table->boolean('has_grantee')->default(false);
            $table->string('status')->default(\App\Enums\CompanyStatus::NEW->value);
            $table->unsignedInteger('created_by');
            $table->date('establishment_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
