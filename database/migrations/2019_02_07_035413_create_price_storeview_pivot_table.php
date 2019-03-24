<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriceStoreviewPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_storeview', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('price_id')->unsigned();;
            $table->foreign('price_id')->references('id')->on('prices')->onUpdate('cascade');
            $table->integer('storview_id')->unsigned();;
            $table->foreign('storview_id')->references('id')->on('storeviews')->onUpdate('cascade');
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
        Schema::dropIfExists('price_storeview');
    }
}
