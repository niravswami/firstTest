<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Education\Education;
use App\User;

class EducationReview extends Model
{
    //protected $table = 'inventory_storeview' ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id','heading','review','star', 'education_id'
    ];

    public function education()
    {
        return $this->belongsTo(Education::class, 'education_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
