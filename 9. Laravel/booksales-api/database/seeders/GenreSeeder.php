<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        Genre::create([
            'name' => 'Fiksi',
            'description' => 'Cerita rekaan atau imajinasi'
        ]);

        Genre::create([
            'name' => 'Non-Fiksi',
            'description' => 'Berdasarkan fakta dan kenyataan'
        ]);

        Genre::create([
            'name' => 'Horror',
            'description' => 'Cerita seram'
        ]);

        Genre::create([
            'name' => 'Romansa',
            'description' => 'Tentang cinta'
        ]);

        Genre::create([
            'name' => 'Misteri',
            'description' => 'Penuh teka-teki'
        ]);
    }
}