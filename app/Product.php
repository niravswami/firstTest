<?php

namespace App;

use App\Review;
use App\Storeview;
use App\Price;
use App\Inventory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Category\RootCategory;
use App\Keyword;
use App\User;

class Product extends Model
{

    use SoftDeletes;

    //protected $table = 'inventory_storeview' ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'storeview_id','inventory_id','price_id','want_to'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

     /**
     * The storeviews that belong to the product.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function storeviews()
    {
        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function price()
    {
        return $this->belongsTo(Price::class);
        //return $this->belongsTo(Price::class, 'price_id');
    }

    /* public function inventories()
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    } */
    public function inventories()
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }
}


