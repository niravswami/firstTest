<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index()->nullable();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onDelete('cascade');
            $table->double('price', 10, 2);
            $table->string('str_price')->nullable();
            $table->string('per')->nullable();
            $table->string('str_previous_price')->nullable();
            $table->double('previous_price', 10, 2)->nullable();
            $table->integer('discount')->nullable();
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
        Schema::dropIfExists('prices');
    }
}
