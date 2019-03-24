<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('storeview_id')->unsigned()->index();
            $table->foreign('storeview_id')->references('id')->on('storeviews')->onUpdate('cascade');
            $table->string('image');
            $table->text('images')->nullable();
            $table->text('title');
            $table->text('slug')->nullable();
            //$table->text('keywords');
            $table->text('highlights');
            $table->text('descriptions')->nullable();
            $table->integer('brand_id')->unsigned()->index()->nullable();
            $table->foreign('brand_id')->references('id')->on('brands')->onUpdate('cascade');
            $table->string('model_name')->nullable();
            // $table->integer('category_id')->unsigned()->index()->nullable();
            // $table->foreign('category_id')->references('id')->on('categories');
            // $table->integer('root_category_id')->unsigned()->index()->nullable();
            // $table->foreign('root_category_id')->references('id')->on('root_categories');
            // $table->integer('level_one_category_id')->unsigned()->index()->nullable();
            // $table->foreign('level_one_category_id')->references('id')->on('level_one_categories');
            // $table->integer('level_two_category_id')->unsigned()->index()->nullable();
            // $table->foreign('level_two_category_id')->references('id')->on('level_two_categories');
            // $table->integer('level_three_category_id')->unsigned()->index()->nullable();
            // $table->foreign('level_three_category_id')->references('id')->on('level_three_categories');
            $table->boolean('shareable')->default(0);
            $table->boolean('deleted')->default(0);
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
        Schema::dropIfExists('inventories');
    }
}
