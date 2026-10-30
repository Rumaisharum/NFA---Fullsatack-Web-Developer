<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    \App\Models\Author::create(['name' => 'J.K. Rowling', 'bio' => 'Penulis seri Harry Potter']);
    \App\Models\Author::create(['name' => 'Tere Liye', 'bio' => 'Penulis novel best seller Indonesia']);
    \App\Models\Author::create(['name' => 'Agatha Christie', 'bio' => 'Dikenal sebagai Ratu Misteri']);
    \App\Models\Author::create(['name' => 'Andrea Hirata', 'bio' => 'Penulis Laskar Pelangi']);
    \App\Models\Author::create(['name' => 'Raditya Dika', 'bio' => 'Penulis dan komika Indonesia']);
    }
}
