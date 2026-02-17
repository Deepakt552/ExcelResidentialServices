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
        Schema::create('blog_images', function (Blueprint $table) {
              $table->id();
            $table->foreignId('blog_id')->constrained()->onDelete('cascade');
            $table->string('image_path');
            $table->string('type')->default('gallery');
            $table->string('placeholder')->nullable();
            $table->string('caption')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
     public function down()
    {
        Schema::table('blog_images', function (Blueprint $table) {
            $table->dropColumn(['type', 'placeholder']);
        });
    }
};
