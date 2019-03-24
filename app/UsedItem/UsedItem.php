<?php

namespace App\UsedItem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Brand;
use App\UsedItem\UsedCatLvlOne ;
use App\UsedItem\UsedCatLvlTwo ;
use App\UsedItem\UsedCatLvlThree ;
use App\Storeview;
use App\Keyword;
use App\Keywords\Utmkey;

class UsedItem extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'storeview_id', 'images', 'title', 'slug', 'keywords', 'highlights', 'descriptions', 'brand_id','price', 'cat_lvl_one_id', 'cat_lvl_two_id', 'cat_lvl_three_id'
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

    public function storeviews() {

        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function brand() {

        return $this->belongsTo(Brand::class, 'brand_id') ;
    }

    public function lvlOneCat()
    {
        return $this->belongsTo(UsedCatLvlOne::class, 'cat_lvl_one_id');
    }

    public function lvlTwoCat()
    {
        return $this->belongsTo(UsedCatLvlTwo::class, 'cat_lvl_two_id');
    }

    public function lvlThreeCat()
    {
        return $this->belongsTo(UsedCatLvlThree::class, 'cat_lvl_three_id');
    }

    // ===============   Keywords   ==========================

    public function utmkeys()
    {
        return $this->belongsToMany(Utmkey::class);
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }
}
