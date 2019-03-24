<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Price;
use App\Inventory;
use App\Storeview;

class NewProduct extends Model
{
    use SoftDeletes;

    //protected $table = 'inventory_storeview' ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'inventory_id','price_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function price()
    {
        return $this->belongsTo(Price::class, 'price_id');
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

    public function storeviews()
    {
        return $this->belongsToMany(Storeview::class);
    }
}
