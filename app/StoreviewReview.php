<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Storeview;
use App\User;

class StoreviewReview extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id','heading','review','star', 'storeview_id'
    ];

    public function storeview()
    {
        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
