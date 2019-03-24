<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsedItemUtmkeyPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('used_item_utmkey', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('used_item_id')->unsigned();
            $table->foreign('used_item_id')->references('id')->on('used_items')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('utmkey_id')->unsigned();
            $table->foreign('utmkey_id')->references('id')->on('utmkeys')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('used_item_utmkey');
    }
}
