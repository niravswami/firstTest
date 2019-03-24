<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryInventoryPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_inventory', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();;
            $table->foreign('category_id')->references('id')->on('categories')->onUpdate('cascade');
            $table->integer('inventory_id')->unsigned();;
            $table->foreign('inventory_id')->references('id')->on('inventories')->onUpdate('cascade');
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
        Schema::dropIfExists('category_inventory');
    }
}
