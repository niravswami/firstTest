<?php

namespace App\Http\Resources\Collections;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\URL;

//class EducationCollection extends ResourceCollection
class EducationCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [

            'what' => 'education',

            'id' => $this->id,

            'storeview_id' => $this->storeview_id ,

            'eduCategory' => $this->category,

            // 'image' => $this->image,
            'image' => URL::to($this->image),

            'images' => unserialize($this->images),

            'title' => $this->title,

            'slug' => $this->slug,

            //'keywords' => unserialize($this->keywords),

            //'highLights' => unserialize($this->highlights) ,

            //'descriptions' => $abc,

            'feesper' => $this->feesper ,

            'totalPrice' => $this->fees ,

            'offers' => unserialize($this->offers),

            'href' => route('education.show', $this->id),

        ];
    }
}
