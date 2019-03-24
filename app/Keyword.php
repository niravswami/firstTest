<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\Inventory;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\ServiceAndBusiness\ServiceAndBusiness;

class Keyword extends Model
{
    use SoftDeletes;

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
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function Products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function service_and_business()
    {
        return $this->belongsToMany(ServiceAndBusiness::class);
    }

    public function Inventories()
    {
        return $this->belongsToMany(Inventory::class);
    }
}
