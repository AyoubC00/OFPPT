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
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->unsignedBigInteger("groupe_id");
            $table->unsignedBigInteger("module_id");
            $table->string("formateur_id");
            $table->timestamps();

            $table->foreign('groupe_id')->references('id')->on('groupes');
            $table->foreign('module_id')->references('id')->on('modules');
            $table->foreign('formateur_id')->references('matricule')->on('formateurs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};
