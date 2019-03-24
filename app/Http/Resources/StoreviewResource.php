<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StoreviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [

            'store_id' => $this->id,

            'user_id' => $this->user_id ,

            'str_img' => $this->image ,

            'unique_key' => $this->unique_key ,

            'store_name' => $this->store_name,

            'store_address' => $this->store_address,

            'contact_number' => $this->contact_number,

            'area' => $this->area,

            'city' => $this->city,

            'state' => $this->state,

            'country' => $this->country,

            'pincode' => $this->pincode,

            'contact_email' => $this->email,

            'website' => $this->website,

            'about_us' => $this->about_us,

            'prd_count' => $this->products->count(),

            'snb_count' => $this->serviceandbusiness->count(),

            'prp_count' => $this->properties->count(),

            'edu_count' => $this->education->count(),

            'utm_count' => $this->useditems->count(),

            //'inv_count' => $this->inventories->count(),

            /* =================   Review   ============================ */

            'rating' => $this->storeview_reviews->count() > 0 ? round($this->storeview_reviews->sum('star')/$this->storeview_reviews->count(), 1) : 0,

            'totalReviews' => $this->storeview_reviews->count() ,

            'reviews_link' => route('storeviewreviews.index', $this->id),

            'reviews_store_link' => route('storeviewreviews.store', $this->id),

        ];
    }
}
