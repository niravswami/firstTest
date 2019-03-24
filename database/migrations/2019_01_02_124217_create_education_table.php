<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->nullable();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('education_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->string('image');
            $table->text('images')->nullable();
            $table->text('title');
            $table->text('slug')->nullable();
            //$table->text('keywords');
            $table->text('highlights');
            $table->text('descriptions')->nullable();
            $table->double('fees', 10, 2)->nullable();
            $table->string('st_fees')->nullable();
            $table->integer('per_id')->unsigned()->index()->nullable();
            $table->foreign('per_id')->references('id')->on('fees_per_values')->onUpdate('cascade')->onDelete('cascade');
            $table->text('offers')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
}
