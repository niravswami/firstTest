<?php

use Illuminate\Http\Request;
use App\Http\Resources\StoreviewCollection;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * ---------------------------------------------------------------------
 *  Auth User
 * ---------------------------------------------------------------------
 *
 **/

Route::middleware(['auth:api'])->get('/user', function (Request $request) {

    //return $request->user();

    $user = $request->user();

        $u = [

            'id' => $user->id,

            'storeviews' => StoreviewCollection::collection($user->storeviews),

            'first_name' =>  $user->first_name,

            'last_name' => $user->last_name,

        ];

        return $u;
});


/**
 * ---------------------------------------------------------------------
 *  Registration, Login & Refreshtoken
 * ---------------------------------------------------------------------
 *
 **/

Route::post('/register', 'Api\Auth\RegisterController@register');

// Route::middleware('MyCors')->post('/login', 'Api\Auth\LoginController@login');
Route::post('/login', 'Api\Auth\LoginController@login');

Route::post('/refreshtoken', 'Api\Auth\LoginController@refresh');


/**
 * ---------------------------------------------------------------------
 *  Lgout
 * ---------------------------------------------------------------------
 *
 **/
Route::group(['middleware' => ['auth:api']], function() {

    Route::post('/logout', 'Api\Auth\LoginController@logout');
});

/**
 * ---------------------------------------------------------------------
 *
 * ---------------------------------------------------------------------
 *
 **/
// Route::group(['middleware' => [ 'cors']], function(){
Route::group(['middleware' => [ 'cors']], function(){

    //Route::post('register', 'API\UserController@register');

    //Route::post('login', 'API\UserController@login');

    Route::get('mystores/{user}', 'API\StoreviewController@mystores');


    /**
    * ---------------------------------------------------------------------
    *  USER
    * ---------------------------------------------------------------------
    *
    **/
    Route::apiResources(['users' => 'API\UserController']);

     /**
     * ---------------------------------------------------------------------
     *  PRODUCTS
     * ---------------------------------------------------------------------
     *
     **/

    /* Route::get('products', 'API\ProductController@index'); */

    /**
     * ---------------------------------------------------------------------
     *  Inventory Route
     * ---------------------------------------------------------------------
     *
     **/

    Route::apiResources(['/inventories' => 'API\InventoryController']);

    Route::get('/shareableinventories' , 'Api\InventoryController@shareableinventories')->name('shareinv');

    Route::apiResources(['/savedinventories' => 'API\InvSaveController']);

    /**
     * ---------------------------------------------------------------------
     *  Storeview Image Route
     * ---------------------------------------------------------------------
     *
     **/

    Route::post('/storeviewimagechange', 'API\StoreviewController@change_image');

    Route::apiResources([

        /**
         * ---------------------------------------------------------------------
         *  STOREVIEW
         * ---------------------------------------------------------------------
         *
         **/
        'storeview' => 'API\StoreviewController',

        /**
         * ---------------------------------------------------------------------
         *  PRODUCTS
         * ---------------------------------------------------------------------
         *
         **/
        'products' => 'API\ProductController',

        /**
         * ---------------------------------------------------------------------
         *  EDUCATION
         * ---------------------------------------------------------------------
         *
         **/
        'education' => 'API\Education\EducationController',

        'educationcategory' => 'API\Education\EducationCategoryController',

        /**
         * ---------------------------------------------------------------------
         *  SERVICE AND BUSINESS
         * ---------------------------------------------------------------------
         *
         **/
        'servicesandbusinessescategories' => 'API\ServiceAndBusiness\ServiceAndBusinessCategoryController',

        'serviceandbusiness' => 'API\ServiceAndBusiness\ServiceAndBusinessController',

        //'business' => 'ServiceAndBusinessController',


        /**
         * ---------------------------------------------------------------------
         *  Brands
         * ---------------------------------------------------------------------
         *
         **/
        'brands' => 'API\BrandController',

        /**
         * ---------------------------------------------------------------------
         *  Ready made Category
         * ---------------------------------------------------------------------
         *
         **/
        'readymade' => 'API\Category\ReadyCategoryController',
        /**
         * ---------------------------------------------------------------------
         *  Save Items
         * ---------------------------------------------------------------------
         *
         **/
        'saveproducts' => 'API\SaveProductController',

        'saveservice' => 'API\SavedItems\SaveServiceAndBusinessController',

        'saveproperty' => 'API\SavedItems\SavePropertyController',

        'saveeducation' => 'API\SavedItems\SaveEducationController',

        'saveuseditem' => 'API\SavedItems\SaveUsedItemController',

        ]);

        Route::get('/mystores/{id}', 'API\StoreviewController@mystores');



        Route::prefix('products')->group(function() {

            Route::get('/{storeviewproducts}/storeviewproduct', 'API\ProductController@storeviewproducts');

            Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

            //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
        });

        /* =================   Product Reviews   ========================= */

        Route::prefix('products')->group(function() {
            Route::apiResources(['/{product}/reviews' => 'API\ReviewController']);
        });

        /* =================   Education Reviews   ========================= */

        Route::prefix('education')->group(function() {
            Route::apiResources(['/{education}/educationreviews' => 'API\Education\EducationReviewController']);
        });

        /* =================   Education Reviews   ========================= */

        Route::prefix('serviceandbusiness')->group(function() {
            Route::apiResources(['/{serviceandbusiness}/serviceandbusinessreviews' => 'API\ServiceAndBusiness\ServiceAndBusinessReviewController']);
        });

        /* =================   Storeview Reviews   ========================= */

        Route::prefix('storeview')->group(function() {
            Route::apiResources(['/{storeview}/storeviewreviews' => 'API\Storeview\StoreviewReviewController']);
        });

    });

    Route::apiResources(['/price' => 'API\PriceController']);



/**
 * ---------------------------------------------------------------------
 *  Country Route
 * ---------------------------------------------------------------------
 *
 **/
Route::apiResource('/country', 'Api\CountryController');

Route::get('ipcountries/{ipcountry}', 'Api\CountryController@countryfromip');

/**
 * ---------------------------------------------------------------------
 *  States Route
 * ---------------------------------------------------------------------
 *
 **/
Route::prefix('country')->group(function() {

    Route::apiResources(['/{country}/states' => 'Api\StateController']);

    Route::get('/{countrystates}/countrystates' , 'Api\StateController@countrystates')->name('countrystates');
});

/**
 * ---------------------------------------------------------------------
 *  City Route
 * ---------------------------------------------------------------------
 *
 **/
Route::group(['prefix' =>'states'], function(){

    Route::apiResources(['/{states}/cities' => 'Api\CityController']);

    Route::get('/{statecities}/statecities' , 'Api\CityController@statecities')->name('statecities');
});

Route::get('allcities', 'API\CityController@cityfromip');

/**
 * ---------------------------------------------------------------------
 *  Area Route
 * ---------------------------------------------------------------------
 *
 **/
Route::group(['prefix' =>'cities'], function(){

    Route::apiResources(['/{cities}/areas' => 'Api\AreaController']);

    Route::get('/{cityareas}/cityareas', 'Api\AreaController@cityarea')->name('cityarea');

});

/**
 * ---------------------------------------------------------------------
 *  Categories Route
 * ---------------------------------------------------------------------
 *
 **/

Route::apiResources([

    'categories' => 'API\Category\CategoryController',

    'rootcategories' => 'API\Category\RootCategoryController',
    'levelonecategories' => 'API\Category\LevelOneCategoryController',
    'leveltwocategories' => 'API\Category\LevelTwoCategoryController',
    'levelthreecategories' => 'API\Category\LevelThreeCategoryController',
]);

Route::post('/categories/children', 'API\Category\CategoryController@getChildren');

/* ==========  category Products  ======================= */

Route::apiResources(['/categoryproducts' => 'API\CategoryProductController']);

/**
 * ---------------------------------------------------------------------
 *  PROPERTY Route
 * ---------------------------------------------------------------------
 *
 **/
Route::apiResources([

    'properties' => 'API\Property\PropertyController',
    'propertycategory' => 'API\Property\PropertyCategoryController',
]);
/**
 * ---------------------------------------------------------------------
 *  used items Route
 * ---------------------------------------------------------------------
 *
 **/
Route::apiResources([

    'useditems' => 'API\UsedItem\UsedItemController',
    'useditemlvlonecat' => 'API\UsedItem\UsedCatLvlOneController',
    'useditemlvltwocat' => 'API\UsedItem\UsedCatLvlTwoController',
    'useditemlvlthreecat' => 'API\UsedItem\UsedCatLvlThreeController'
]);

/* Route::get('/fused', 'Api\UsedItemsController@firstused');
Route::get('/{first}/sused', 'Api\UsedItemsController@secused');
Route::get('/{sec}/tused', 'Api\UsedItemsController@thirdused'); */

/**
 * ---------------------------------------------------------------------
 *  ALL PRODUCTS Route
 * ---------------------------------------------------------------------
 *
 **/
Route::apiResources([


    'allproducts' => 'API\AllProductController@searchproducts',
    ]);


    //Route::get('searchproducts' , 'API\ProductController@index');
    Route::get('searchproducts' , 'API\AllProductController@searchProducts');

    Route::get('searcheducation' , 'API\AllProductController@searchEducation');
    Route::get('searchproperties' , 'API\AllProductController@searchProperties');
    Route::get('searchserviceandbusiness' , 'API\AllProductController@searchServieAndBusiness');
    Route::get('searchuseditems' , 'API\AllProductController@searchUsedItem');

/**
 * ---------------------------------------------------------------------
 *  KEYWORDS Route
 * ---------------------------------------------------------------------
 *
 **/
Route::apiResources([

    'keywords' => 'API\KeywordController',

    ]);
/**
 * ---------------------------------------------------------------------
 *  GET STOREVIEWS Inventory Route
 * ---------------------------------------------------------------------
 *
 **/

Route::prefix('inventories')->group(function() {

    Route::get('/{storeviewproducts}/storeviewproduct', 'API\InventoryController@storeviewproducts');

    //Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

    //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
});
/**
 * ---------------------------------------------------------------------
 *  GET STOREVIEWS SERVICE AND BUSINESS Route
 * ---------------------------------------------------------------------
 *
 **/

Route::prefix('serviceandbusiness')->group(function() {

    Route::get('/{storeviewproducts}/storeviewproduct', 'API\ServiceAndBusiness\ServiceAndBusinessController@storeviewproducts');

    //Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

    //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
});
/**
 * ---------------------------------------------------------------------
 *  GET STOREVIEWS PROPERY Route
 * ---------------------------------------------------------------------
 *
 **/

Route::prefix('properties')->group(function() {

    Route::get('/{storeviewproducts}/storeviewproduct', 'API\Property\PropertyController@storeviewproducts');

    //Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

    //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
});

/**
 * ---------------------------------------------------------------------
 *  GET STOREVIEWS Education Route
 * ---------------------------------------------------------------------
 *
 **/

Route::prefix('education')->group(function() {

    Route::get('/{storeviewproducts}/storeviewproduct', 'API\Education\EducationController@storeviewproducts');

    //Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

    //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
});

/**
 * ---------------------------------------------------------------------
 *  GET STOREVIEWS USED ITEM Route
 * ---------------------------------------------------------------------
 *
 **/

Route::prefix('useditems')->group(function() {

    Route::get('/{storeviewproducts}/storeviewproduct', 'API\UsedItem\UsedItemController@storeviewproducts');

    //Route::post('/{id}/destroy', 'API\ProductController@deleteproduct');

    //Route::apiResources(['/{storeviewproducts}/storeviewproduct' => 'API\ProductController@storeviewproducts']);
});

/**
 * ---------------------------------------------------------------------
 *  GET IP Route
 * ---------------------------------------------------------------------
 *
 **/

Route::get('getip', 'API\AllProductController@getGeoLocationFromIp');
Route::post('postip', 'API\AllProductController@testIp');

/**
 * ---------------------------------------------------------------------
 *  SAVE PRODUCT ROUTE
 * ---------------------------------------------------------------------
 *
 **/

Route::apiResources([

    // 'saveproducts' => 'API\SaveProductController',

    // 'saveservice' => 'API\SavedItems\SaveServiceAndBusinessController',

    // 'saveproperty' => 'API\SavedItems\SavePropertyController',

    // 'saveeducation' => 'API\SavedItems\SaveEducationController',

    // 'saveuseditem' => 'API\SavedItems\SaveUsedItemController',

    ]);

Route::get('totalsaveditems', 'API\SaveProductController@total_count');

/**
 * ---------------------------------------------------------------------
 *  HOME PAGE PRODUCTS ROUTE
 * ---------------------------------------------------------------------
 *
 **/
Route::get('homeproducts', 'API\AllProductController@index');

/**
 * ---------------------------------------------------------------------
 *  PRODUCTS FROM PERTICULER STOREVIEW ROUTE
 * ---------------------------------------------------------------------
 *
 **/

Route::get('productsfromstoreview', 'API\AllProductController@productfromstoreview');

/**
 * ---------------------------------------------------------------------
 *   Search by STOREVIEW ROUTE
 * ---------------------------------------------------------------------
 *
 **/

Route::get('searchbystoreview', 'API\StoreviewController@get_storeviews');

/**
 * ---------------------------------------------------------------------
 *   ADD PRODUCTS IN GROUP
 * ---------------------------------------------------------------------
 *
 **/

//  =============           PRODUCTS            =================
Route::post('productsgroupadding', 'API\ProductController@add_product_in_group');

//  =============           SERVICE            =================
Route::post('serviceandbusinessgroupadding', 'API\ServiceAndBusiness\ServiceAndBusinessController@add_product_in_group');
/**
 * ---------------------------------------------------------------------
 *   Delete PRODUCTS IN GROUP
 * ---------------------------------------------------------------------
 *
 **/

//  =============           PRODUCTS            =================

Route::post('productsgroupdelete', 'API\ProductController@delete_products_in_group');

//  =============           SERVICE            =================

Route::post('serviceandbusinessgroupdelete', 'API\ServiceAndBusiness\ServiceAndBusinessController@delete_products_in_group');

//  =============           PROPERTY            =================

Route::post('propertiesgroupdelete', 'API\Property\PropertyController@delete_products_in_group');

//  =============           EDUCATION            =================

Route::post('educationgroupdelete', 'API\Education\EducationController@delete_products_in_group');

//  =============           USED ITEM            =================

Route::post('useditemsgroupdelete', 'API\UsedItem\UsedItemController@delete_products_in_group');


/**
 * ---------------------------------------------------------------------
 *   Check Edit PRODUCT
 * ---------------------------------------------------------------------
 *
 **/

Route::post('checkeditproduct', 'API\ProductController@check_for_product_edit');


