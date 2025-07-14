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
        Schema::create('owners', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            $table->string('profile')->nullable();
            $table->string('full_name_eng');
            $table->string('full_name_da');
            $table->string('father_full_name_eng');
            $table->string('father_full_name_da');
            $table->unsignedBigInteger('degree_id');
            $table->string('degree_title');
            $table->integer('owner_percentage');
            $table->string('email')->nullable();
            $table->string('phone_number');
            $table->string('national_id');
            $table->string('passport_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('owners');
    }
};
