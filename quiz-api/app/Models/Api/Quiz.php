<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $fillable = [
        'type', 'difficulty','category',
        'question', 'category_id',
        'correct_answer', 'incorrect_answers'];

    protected $casts = [
        'incorrect_answers' => 'array'
    ];
    public function toArray()
{
    $array = parent::toArray();

    // Check if incorrect_answers key exists and decode it if it's a string
    if (isset($array['incorrect_answers'])) {
        if (is_string($array['incorrect_answers'])) {
            $array['incorrect_answers'] = json_decode($array['incorrect_answers'], true);
        }
    }

    return $array;
}

}

