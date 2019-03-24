<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducationEdukeyPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_edukey', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('education_id')->unsigned();
            $table->foreign('education_id')->references('id')->on('education')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('edukey_id')->unsigned();
            $table->foreign('edukey_id')->references('id')->on('edukeys')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('education_edukey');
    }
}
