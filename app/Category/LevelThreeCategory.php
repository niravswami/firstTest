<?php

namespace App\Category;

use Illuminate\Database\Eloquent\Model;
use App\Category\LevelTwoCategory;
use App\Category\LevelFourCategory;
use App\Category\Category;

class LevelThreeCategory extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'level_two_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function leveltwocat ()
    {
        return $this->belongsTo(LevelTwoCategory::class);
    }

    public function levelfourcat ()
    {
        return $this->hasMany(LevelFourCategory::class);
    }

    public function categories ()
    {
        return $this->hasMany(Category::class);
    }
}
