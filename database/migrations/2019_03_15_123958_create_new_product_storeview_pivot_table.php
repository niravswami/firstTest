<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewProductStoreviewPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('new_product_storeview', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('new_product_id')->unsigned();
            $table->foreign('new_product_id')->references('id')->on('new_products');
            $table->integer('storeview_id')->unsigned();
            $table->foreign('storeview_id')->references('id')->on('storeviews');
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
        Schema::dropIfExists('newproduct_storeview');
    }
}
