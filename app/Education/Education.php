<?php

namespace App\Education;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
// use App\Education\Education;
use App\Education\FeesPerValue;
use App\Storeview;
use App\EducationReview;
use App\Keyword;
use App\User;
use App\Keywords\Edukey;

class Education extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'storeview_id', 'category_id', 'images','title','slug', 'keywords', 'highlights', 'descriptions', 'fees', 'per_id', 'offers'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function storeviews() {

        return $this->belongsTo(Storeview::class, 'storeview_id');
    }

    public function category() {

        return $this->belongsTo(EducationCategory::class, 'category_id');
    }

    public function feesper() {

        return $this->belongsTo(FeesPerValue::class, 'per_id');
    }

    public function education_reviews()
    {
        return $this->hasMany(EducationReview::class);
    }

    // ===============   Keywords   ==========================

    public function edukeys()
    {
        return $this->belongsToMany(Edukey::class);
    }

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class);
    }
}
