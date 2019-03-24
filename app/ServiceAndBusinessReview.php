<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ServiceAndBusiness\ServiceAndBusiness;
use App\User;

class ServiceAndBusinessReview extends Model
{
    //protected $table = 'inventory_storeview' ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id','heading','review','star', 'service_and_business_id'
    ];

    public function serviceandbusiness()
    {
        return $this->belongsTo(ServiceAndBusiness::class, 'service_and_business_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
