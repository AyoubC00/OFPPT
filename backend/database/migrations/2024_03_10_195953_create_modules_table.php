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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("code");
            $table->unsignedMediumInteger("masse_horaire");
            $table->unsignedBigInteger("groupe_id");
            $table->string("formateur_id");
            $table->timestamps();

            $table->foreign('groupe_id')->references('id')->on('groupes')->onDelete('cascade');
            $table->foreign('formateur_id')->references('matricule')->on('formateurs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
