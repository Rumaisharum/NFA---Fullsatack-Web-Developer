<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author {
    public static function getAll() {
        
        return [
            ['id' => 1, 'name' => 'J.K. Rowling', 'bio' => 'Penulis Harry Potter'],
            ['id' => 2, 'name' => 'Tere Liye', 'bio' => 'Penulis Indonesia'],
            ['id' => 3, 'name' => 'Agatha Christie', 'bio' => 'Ratu Misteri'],
            ['id' => 4, 'name' => 'Andrea Hirata', 'bio' => 'Penulis Laskar Pelangi'],
            ['id' => 5, 'name' => 'Raditya Dika', 'bio' => 'Komika & Penulis'],
        ];
    }


    
}