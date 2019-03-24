<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Product;
use App\Storeview;
use App\Inventory;
use App\Education\Education;
use App\ServiceAndBusiness\ServiceAndBusiness;
use App\Property\Property;
use App\UsedItem\UsedItem;

class AllProduct extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'storeview_id',
        'product_id',
        'serviceandbusiness_id',
        'property_id',
        'education_id',
        'useditem_id',
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

    public function storeview() {

        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function education() {

        return $this->belongsTo(Education::class, 'education_id');
    }

    public function product() {

        return $this->belongsTo(Product::class, 'product_id');
    }

    public function serviceandbusiness() {

        return $this->belongsTo(ServiceAndBusiness::class, 'serviceandbusiness_id');
    }

    public function property() {

        return $this->belongsTo(Property::class, 'property_id');
    }

    public function useditem() {

        return $this->belongsTo(UsedItem::class, 'useditem_id');
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($q)
    {
        if (request('price_from')) {
            $q->where('price', '>', request('price_from'));
            dd($q);
        }
        if (request('color')) {
            $q->where('color', '>', request('color'));
        }

        return $q;
    }
    /* if ($search = \Request::get('q')) {
        $products = Product::whereHas('inventories', function ($query) use ($search) {
            $query->where('keywords', 'like', '%' . $search . '%')
                ->orWhere('title','LIKE','%' . $search . '%');
        })->get();
    }else{
        $products = Product::latest()->paginate(5);
    } */
}
