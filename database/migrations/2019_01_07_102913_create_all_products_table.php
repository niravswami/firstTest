<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('all_products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('product_id')->unsigned()->index()->nullable();
            $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('serviceandbusiness_id')->unsigned()->index()->nullable();
            $table->foreign('serviceandbusiness_id')->references('id')->on('service_and_businesses')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('property_id')->unsigned()->index()->nullable();
            $table->foreign('property_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('education_id')->unsigned()->index()->nullable();
            $table->foreign('education_id')->references('id')->on('education')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('useditem_id')->unsigned()->index()->nullable();
            $table->foreign('useditem_id')->references('id')->on('used_items')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('all_products');
    }
}
