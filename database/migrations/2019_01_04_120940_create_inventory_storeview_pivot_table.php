<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryStoreviewPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_storeview', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade');
            $table->integer('inventory_id')->unsigned()->index();
            $table->foreign('inventory_id')->references('id')->on('inventories')->onUpdate('cascade');
            $table->integer('price_id')->unsigned();;
            $table->foreign('price_id')->references('id')->on('prices')->onUpdate('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('inventory_storeview');
    }
}
