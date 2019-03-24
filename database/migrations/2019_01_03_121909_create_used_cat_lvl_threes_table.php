<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsedCatLvlThreesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('used_cat_lvl_threes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('cat_lvl_two_id')->unsigned()->index()->nullable();
            $table->foreign('cat_lvl_two_id')->references('id')->on('used_cat_lvl_twos')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('used_cat_lvl_threes');
    }
}
