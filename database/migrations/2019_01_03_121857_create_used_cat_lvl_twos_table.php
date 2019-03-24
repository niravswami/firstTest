<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsedCatLvlTwosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('used_cat_lvl_twos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('cat_lvl_one_id')->unsigned()->index()->nullable();
            $table->foreign('cat_lvl_one_id')->references('id')->on('used_cat_lvl_ones')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('used_cat_lvl_twos');
    }
}
