<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        // $this->call(UsersTableSeeder::class);

        # ================   USER   ==========================

       //factory(App\User::class, 5)->create();

       # ================   STOREVIEW   ==========================

       //    \App\Storeview::truncate();

       //     factory(App\Storeview::class, 30)->create();

       //factory(App\Wantto::class, 4)->create();

       # ================   INVENTORY   ==========================

    //    DB::table('category_inventory')->truncate();

    //    \App\Inventory::truncate();

    //    factory(App\Inventory::class, 20)->create()->each(function($u) {

        //                     $category = App\Category\ReadyCategory::all()->random() ;

        //                     $ids = $category->cat_ids;

        //                     $ids = unserialize($ids);

        //                     $u->categories()->sync($ids);
        //                });

        # ================   PRICE   ==========================

        // \App\Price::truncate();

        // factory(App\Price::class, 115)->create();

        # ================   PRODUCT   ==========================

        //    \App\Product::truncate();

        // factory(App\Product::class, 100)->create();

        //factory(App\Review::class, 400)->create();

        # ================   NEW PRODUCT   ==========================

        //    \App\Product::truncate();

        // factory(App\NewProduct::class, 3)->create();

       # ================   SERVICE AND BUSINESS   ==========================

    //    \App\ServiceAndBusiness\ServiceAndBusiness::truncate();

        // factory(App\ServiceAndBusiness\ServiceAndBusiness::class, 50)->create();

        // factory(App\Review::class, 400)->create();

        # ================   EDUCATION   ==========================

        // \App\Education\Education::truncate();

        // factory(App\Education\Education::class, 50)->create();

        // factory(App\Review::class, 400)->create();

        # ================   USED ITEM   ==========================

        // \App\UsedItem\UsedItem::truncate();

        // factory(App\UsedItem\UsedItem::class, 50)->create();

        // factory(App\Review::class, 400)->create();

        # ================   PROPERTY   ==========================

        // \App\Property\Property::truncate();

        // factory(App\Property\Property::class, 30)->create();

        // factory(App\Review::class, 400)->create();

        /* ================================================================================
                Category Delete Table
        ================================================================================== */

        //DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        //\App\Category\Category::truncate();

        //factory(App\Category\Category::class)->create();
    }
}
