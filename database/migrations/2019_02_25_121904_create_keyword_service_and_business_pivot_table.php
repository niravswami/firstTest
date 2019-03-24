<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKeywordServiceAndBusinessPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('keyword_service_and_business', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('keyword_id')->unsigned();
            $table->foreign('keyword_id')->references('id')->on('keywords')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('service_and_business_id')->unsigned();
            $table->foreign('service_and_business_id')->references('id')->on('service_and_businesses')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('keyword_service_and_business');
    }
}
