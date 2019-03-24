<?php

namespace App;
use App\Inventory;
use App\Storeview;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Price extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'storeview_id','price','per','previous_price','discount','offers',
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

    public function products()
    {
        //return $this->hasMany(Product::class, 'product_id');
        return $this->hasMany(Product::class);
    }

    public function inventories()
    {
        return $this->belongsToMany(Inventory::class);
    }

    public function storeviews()
    {
        return $this->belongsToMany(Storeview::class);
    }
}
