<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class ContactInquiry extends Model
{
     protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'property_id',
        'property_name',
        'status',
        'notes'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

}
