<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceAndBusinessSrvkeyPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_and_business_srvkey', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('service_and_business_id')->unsigned();
            $table->foreign('service_and_business_id')->references('id')->on('service_and_businesses')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('srvkey_id')->unsigned();
            $table->foreign('srvkey_id')->references('id')->on('srvkeys')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('service_and_business_srvkey');
    }
}
