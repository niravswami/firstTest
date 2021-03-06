<?php

namespace App\Category;

use Illuminate\Database\Eloquent\Model;
use App\Category\LevelOneCategory;
use App\Category\LevelThreeCategory;
use App\Category\Category;

class LevelTwoCategory extends Model
{
           /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'level_one_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function levelonecat ()
    {
        return $this->belongsTo(LevelOneCategory::class);
    }

    public function levelthreecat ()
    {
        return $this->hasMany(LevelThreeCategory::class);
    }

    public function categories ()
    {
        return $this->hasMany(Category::class);
    }
}
