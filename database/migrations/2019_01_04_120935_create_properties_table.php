<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->nullable();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade')->onDelete('cascade');

            $table->string('image');
            $table->text('images')->nullable();
            $table->text('title');
            $table->text('slug')->nullable();
            //$table->text('keywords');
            $table->text('highlights');
            $table->text('descriptions')->nullable();

            $table->boolean('sell_rent')->default(0);
            $table->double('price', 15, 2)->nullable();
            $table->string('st_price')->nullable();
            $table->string('rent_per')->nullable();

            $table->integer('property_cat_id')->unsigned()->index();
            $table->foreign('property_cat_id')->references('id')->on('property_categories')->onUpdate('cascade')->onDelete('cascade');

            $table->text('offers')->nullable();

            $table->text('full_address')->nullable();

            $table->integer('country_id')->unsigned()->index()->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->integer('state_id')->unsigned()->index()->nullable();
            $table->foreign('state_id')->references('id')->on('states');
            $table->integer('city_id')->unsigned()->index()->nullable();
            $table->foreign('city_id')->references('id')->on('cities');
            $table->integer('area_id')->unsigned()->index()->nullable();
            $table->foreign('area_id')->references('id')->on('areas');

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
        Schema::dropIfExists('properties');
    }
}
