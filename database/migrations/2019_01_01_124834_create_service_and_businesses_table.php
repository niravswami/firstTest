<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceAndBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_and_businesses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->nullable();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('service_and_business_categories')->onUpdate('cascade')->onDelete('cascade');
            // $table->integer('brand_id')->unsigned()->index()->nullable();
            // $table->foreign('brand_id')->references('id')->on('brands')->onUpdate('cascade')->onDelete('cascade');
            $table->string('image');
            $table->text('images')->nullable();
            $table->text('title');
            $table->text('slug')->nullable();
            //$table->text('keywords');
            $table->text('highlights');
            $table->text('descriptions')->nullable();
            $table->double('price', 15, 2)->nullable();
            $table->string('st_price')->nullable();
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
        Schema::dropIfExists('service_and_businesses');
    }
}
