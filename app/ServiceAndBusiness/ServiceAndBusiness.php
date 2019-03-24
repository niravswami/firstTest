<?php

namespace App\ServiceAndBusiness;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Brand;
use App\ServiceAndBusiness\ServiceAndBusinessCategory;
use App\Storeview;
use App\ServiceAndBusinessReview;
use App\Keyword;
use App\Keywords\Srvkey;

class ServiceAndBusiness extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'storeview_id', 'category_id', 'brand_id','images','title','slug', 'keywords', 'highlights', 'descriptions', 'price', 'offers'
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

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function storeviews() {

        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function brand() {

        return $this->belongsTo(Brand::class);
    }

    public function servicesandbusinessescategory() {

        return $this->belongsTo(ServiceAndBusinessCategory::class, 'category_id');
    }

    public function serviceandbusiness_reviews()
    {
        return $this->hasMany(ServiceAndBusinessReview::class);
    }

    // ===============   Keywords   ==========================

    public function srvkeys()
    {
        return $this->belongsToMany(Srvkey::class);
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }

}
