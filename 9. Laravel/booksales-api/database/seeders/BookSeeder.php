<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Book::create([
            'title' => 'Harry Potter', 'description' => 'Petualangan penyihir muda', 
            'price' => 150000, 'stock' => 50, 'cover_photo' => 'harry.jpg', 'genre_id' => 1, 'author_id' => 1
        ]);
        \App\Models\Book::create([
            'title' => 'Pulang', 'description' => 'Kisah Bujang di perantauan', 
            'price' => 90000, 'stock' => 30, 'cover_photo' => 'pulang.jpg', 'genre_id' => 2, 'author_id' => 2
        ]);
        \App\Models\Book::create([
            'title' => 'Murder on the Orient Express', 'description' => 'Misteri pembunuhan di kereta', 
            'price' => 120000, 'stock' => 20, 'cover_photo' => 'murder.jpg', 'genre_id' => 3, 'author_id' => 3
        ]);
        \App\Models\Book::create([
            'title' => 'Laskar Pelangi', 'description' => 'Perjuangan anak Belitung', 
            'price' => 85000, 'stock' => 40, 'cover_photo' => 'laskar.jpg', 'genre_id' => 4, 'author_id' => 4
        ]);
        \App\Models\Book::create([
            'title' => 'Manusia Setengah Salmon', 'description' => 'Kumpulan cerita komedi', 
            'price' => 75000, 'stock' => 25, 'cover_photo' => 'salmon.jpg', 'genre_id' => 5, 'author_id' => 5
        ]);
    }
}
