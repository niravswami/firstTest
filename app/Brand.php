<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Inventory;
use App\ServiceAndBusiness\ServiceAndBusiness;

class Brand extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function inventories()
    {
        return $this->hasMany(Inventory::class);
    }

    public function servicesandbusinesses()
    {
        return $this->hasMany(ServiceAndBusiness::class);
    }
}
