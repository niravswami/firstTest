<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Storeview;

class Country extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'shortname', 'phonecode'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function storeviews()
    {
        return  $this->hasMany(Storeview::class);
    }
}
