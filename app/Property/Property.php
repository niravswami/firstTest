<?php

namespace App\Property;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Property\PropertyCategory;
use App\State;
use App\City;
use App\Storeview;
use App\Country;
use App\Keyword;
use App\Area;
use App\Keywords\Prtkey;

class Property extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'storeview_id', 'images', 'title', 'slug', 'keywords', 'highlights', 'descriptions','sell_rent', 'price', 'rent_per', 'property_cat_id','offers', 'full_address', 'country_id', 'state_id', 'city_id', 'area_id'
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

    public function propertycategory() {

        return $this->belongsTo(PropertyCategory::class, 'property_cat_id');
    }

    public function country() {

        return $this->belongsTo(Country::class, 'country_id');
    }

    public function state() {

        return $this->belongsTo(State::class, 'state_id');
    }

    public function city() {

        return $this->belongsTo(City::class, 'city_id');
    }

    public function area() {

        return $this->belongsTo(Area::class, 'area_id');
    }

    // ===============   Keywords   ==========================

    public function prtkeys()
    {
        return $this->belongsToMany(Prtkey::class);
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }
}
