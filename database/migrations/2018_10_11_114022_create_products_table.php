<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {

            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onDelete('cascade');
            $table->integer('inventory_id')->unsigned()->index();
            $table->foreign('inventory_id')->references('id')->on('inventories')->onDelete('cascade');
            $table->integer('price_id')->unsigned()->index();
            $table->foreign('price_id')->references('id')->on('prices')->onDelete('cascade');
            $table->string('want_to')->nullable();
            // $table->string('categoryInWant_to')->nullable();
            // $table->string('main_category')->nullable();
            // $table->string('category')->nullable();
            // $table->string('sub_category')->nullable();
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
        Schema::dropIfExists('products');
    }
}
