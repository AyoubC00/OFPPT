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
        Schema::create('demandes', function (Blueprint $table) {
            $table->id();
            $table->enum('type',array(["type1", "type2","type3"]));
            $table->enum('status',array(["Pending", "Accepted","Declined","Waiting Return","Returned"]))->default("Pending");//return choice for Bac diploma
            $table->string('cef');
            $table->timestamps();

            $table->foreign('cef')->references('cef')->on('stagiaires')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demandes');
    }
};
