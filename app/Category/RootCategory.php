<?php

namespace App\Category;

use Illuminate\Database\Eloquent\Model;
use App\Category\LevelOneCategory;
use App\Inventory;

class RootCategory extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
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
        return $this->hasMany(LevelOneCategory::class);
    }

    public function categories ()
    {
        return $this->hasMany(Category::class);
    }

    public function inventories ()
    {
        return $this->hasMany(Inventory::class);
    }
}
