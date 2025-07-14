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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('profile');
            $table->string('full_name');
            $table->string('father_full_name');
            $table->unsignedBigInteger('degree_id');
            $table->unsignedBigInteger('position_id');
            $table->string('degree_title');
            $table->string('phone_number');
            $table->string('national_id');
            $table->string('passport_number');
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
