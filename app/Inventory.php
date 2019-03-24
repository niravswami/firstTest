<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Product;
use App\Storeview;
use App\Brand;
use App\Price;
use App\Category\Category;
use App\Category\RootCategory;
use App\Category\LevelOneCategory;
use App\Category\LevelTwoCategory;
use App\Category\LevelThreeCategory;
use App\Keyword;
use App\InventoryReview;
use App\Keywords\Invkey;

class Inventory extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'image', 'images', 'storeview_id', 'title', 'keywords', 'highlights', 'descriptions', 'shareable', 'brand_id', 'model_name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function prices()
    {
        return $this->belongsToMany(Price::class);
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    // public function rootlvlcat ()
    // {
    //     return $this->belongsTo(RootCategory::class, 'root_category_id');
    // }

    // public function lvlonecat ()
    // {
    //     return $this->belongsTo(LevelOneCategory::class, 'level_one_category_id');
    // }

    // public function lvltwocat ()
    // {
    //     return $this->belongsTo(LevelTwoCategory::class, 'level_two_category_id');
    // }

    // public function lvlthreecat ()
    // {
    //     return $this->belongsTo(LevelThreeCategory::class, 'level_three_category_id');
    // }


    public function invkeys()
    {
        return $this->belongsToMany(Invkey::class);
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }

    public function storeviews()
    {
        return $this->belongsToMany(Storeview::class)->withPivot('price_id');
    }

    public function inventory_reviews()
    {
        return $this->hasMany(InventoryReview::class);
    }
}
