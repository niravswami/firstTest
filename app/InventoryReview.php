<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Inventory;

class InventoryReview extends Model
{
    //protected $table = 'inventory_storeview' ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id','heading','review','star', 'inventory_id'
    ];

    public function inventory()
    {
        return $this->belongsTo(Inventory::class, 'invetory_id');
    }
}
