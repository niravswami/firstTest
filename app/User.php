<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Product;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\ServiceAndBusiness\ServiceAndBusiness;
use App\Property\Property;
use App\Education\Education;
use App\UsedItem\UsedItem;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'date_of_birth', 'mobile_number', 'gender','role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function serviceandbusinesses()
    {
        return $this->belongsToMany(ServiceAndBusiness::class);
    }
    public function properties()
    {
        return $this->belongsToMany(Property::class);
    }
    public function education()
    {
        return $this->belongsToMany(Education::class);
    }
    public function useditems()
    {
        return $this->belongsToMany(UsedItem::class);
    }

    public function storeviews()
    {
        return $this->hasMany(Storeview::class);
    }
}
