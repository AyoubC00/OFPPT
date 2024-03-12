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
        Schema::create('stagaire_quiz', function (Blueprint $table) {
            $table->string("stagaire_cef");
            $table->unsignedBigInteger("quiz_id");
            $table->integer("score");
            $table->timestamps();

            $table->foreign('stagaire_cef')->references('cef')->on('stagiaires');
            $table->foreign('quiz_id')->references('id')->on('quizzes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stagaire_quiz');
    }
};
