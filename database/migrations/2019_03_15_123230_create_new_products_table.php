<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('new_products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('inventory_id')->unsigned()->index();
            $table->foreign('inventory_id')->references('id')->on('inventories')->onDelete('cascade');
            $table->integer('price_id')->unsigned()->index();
            $table->foreign('price_id')->references('id')->on('prices')->onDelete('cascade');
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
        Schema::dropIfExists('new_products');
    }
}
