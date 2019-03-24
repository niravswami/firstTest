<?php

namespace App;

use App\User;
use App\Product;
use App\Inventory;
use App\Price;
use App\Country;
use App\State;
use App\City;
use App\Area;
use Illuminate\Database\Eloquent\Model;
use App\Education\Education;
use App\ServiceAndBusiness\ServiceAndBusiness;
use App\Property\Property;
use App\UsedItem\UsedItem;
use App\StoreviewReview;
use App\NewProduct;

class Storeview extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'user_id', 'store_name', 'unique_key','store_address','contact_number','area_id','city_id','state_id','country_id','pincode','website','about_us', 'email',

    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $hidden = [
         'password', 'created_at', 'updated_at'
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }

    public function area()
    {
        return $this->belongsTo(Area::class, 'area_id');
    }

    /**
     * The products that belong to the storeviews.
     */
    public function inventories()
    {
        return $this->hasMany(Inventory::class);
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function new_products()
    {
        return $this->belongsToMany(NewProduct::class);
    }

    public function prices()
    {
        return $this->belongsToMany(Price::class);
    }

    public function serviceandbusiness()
    {
        return $this->hasMany(ServiceAndBusiness::class);
    }
    public function properties()
    {
        return $this->hasMany(Property::class);
    }
    public function education()
    {
        return $this->hasMany(Education::class);
    }
    public function useditems()
    {
        return $this->hasMany(UsedItem::class);
    }

    public function storeview_reviews()
    {
        return $this->hasMany(StoreviewReview::class);
    }
}
