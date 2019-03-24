<?php

namespace App\Category;

use Illuminate\Database\Eloquent\Model;
use App\Category\RootCategory;
use App\Category\LevelOneCategory;
use App\Category\LevelTwoCategory;
use App\Category\LevelThreeCategory;
use App\Category\LevelfourCategory;
use App\Inventory;
use Nestable\NestableTrait;

class Category extends Model
{
    use NestableTrait ;

    protected $parent = 'parent_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'root_id','lvl_one_id','lvl_two_id', 'lvl_three_id','lvl_four_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function rootlvlcat ()
    {
        return $this->belongsTo(RootCategory::class, 'root_id');
    }

    public function lvlonecat ()
    {
        return $this->belongsTo(LevelOneCategory::class);
    }

    public function lvltwocat ()
    {
        return $this->belongsTo(LevelTwoCategory::class);
    }

    public function lvlthreecat ()
    {
        return $this->belongsTo(LevelThreeCategory::class);
    }

    public function lvlfourcat ()
    {
        return $this->belongsTo(LevelFourCategory::class);
    }

    public function inventories ()
    {
        return $this->belongsToMany(Inventory::class);
    }


}
