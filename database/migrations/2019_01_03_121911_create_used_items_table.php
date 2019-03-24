<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsedItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('used_items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index();
            $table->foreign('storeview_id')->references('id')->on('storeviews');
            $table->string('image');
            $table->text('images')->nullable();
            $table->text('title');
            $table->text('slug')->nullable();
            $table->text('keywords');
            $table->text('highlights');
            $table->text('descriptions')->nullable();
            $table->integer('brand_id')->unsigned()->index()->nullable();
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->double('price', 10, 2);
            $table->string('st_price')->nullable();
            $table->integer('cat_lvl_one_id')->unsigned();
            $table->foreign('cat_lvl_one_id')->references('id')->on('used_cat_lvl_ones')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('cat_lvl_two_id')->unsigned()->index()->nullable();
            $table->foreign('cat_lvl_two_id')->references('id')->on('used_cat_lvl_twos')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('cat_lvl_three_id')->unsigned()->index()->nullable();
            $table->foreign('cat_lvl_three_id')->references('id')->on('used_cat_lvl_threes')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('used_items');
    }
}
