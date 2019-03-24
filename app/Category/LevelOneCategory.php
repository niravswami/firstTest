<?php

namespace App\Category;

use Illuminate\Database\Eloquent\Model;
use App\Category\RootCategory;
use App\Category\LevelTwoCategory;
use App\Category\Category;
use App\Inventory;

class LevelOneCategory extends Model
{
        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'root_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function rootcat ()
    {
        return $this->belongsTo(RootCategory::class);
    }

    public function leveltwocat ()
    {
        return $this->hasMany(LevelTwoCategory::class);
    }

    public function inventories ()
    {
        return $this->hasMany(Inventory::class);
    }

    public function categories ()
    {
        return $this->hasMany(Category::class);
    }
}
