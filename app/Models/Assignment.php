<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    protected $fillable = ['client_id', 'employee_id']; // Add other fillable fields as needed

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }
    public function user()
{
    return $this->belongsTo(User::class, 'employee_id');
}
}
