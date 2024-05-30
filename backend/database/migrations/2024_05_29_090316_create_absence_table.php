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
        Schema::create('absence', function (Blueprint $table) {
            $table->id();
            $table->string('stagiaire_id');
            $table->unsignedBigInteger('abspivots_id');
            $table->boolean('justified')->default(false);

            $table->foreign('stagiaire_id')->references('cef')->on('stagiaires');
            $table->foreign('abspivots_id')->references('id')->on('abspivots');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absence');
    }
};
