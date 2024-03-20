<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     */
    public function up(): void
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('competence_id');
            $table->string('title');
            $table->string('content')->nullable();
            $table->string('content_type')->nullable();
            $table->string('file_name')->nullable();
            $table->string('video_url')->nullable();
            $table->string('poster_url')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('level')->nullable();
            // $table->foreign('competence_id')->references('code')->on('competences')->onDelete('cascade')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
