<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoreviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('storeviews', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('unique_key')->unique();
            $table->string('store_name')->required();
            $table->string('store_address')->required();
            $table->string('contact_number')->nullable();

            $table->string('image')->nullable();

            $table->integer('country_id')->unsigned()->index();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->integer('state_id')->unsigned()->index();
            $table->foreign('state_id')->references('id')->on('states');
            $table->integer('city_id')->unsigned()->index();
            $table->foreign('city_id')->references('id')->on('cities');
            $table->integer('area_id')->unsigned()->index();
            $table->foreign('area_id')->references('id')->on('areas');

            $table->string('pincode')->required();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->text('about_us')->nullable();
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
        Schema::dropIfExists('storeviews');
    }
}
