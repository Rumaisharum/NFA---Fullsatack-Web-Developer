<?php
namespace App\Models;
class Genre {
    public static function getAll() {
        return [
            ['id' => 1, 'name' => 'Fiksi', 'desc' => 'Cerita rekaan'],
            ['id' => 2, 'name' => 'Non-Fiksi', 'desc' => 'Berdasarkan fakta'],
            ['id' => 3, 'name' => 'Misteri', 'desc' => 'Penuh teka-teki'],
            ['id' => 4, 'name' => 'Romansa', 'desc' => 'Tentang cinta'],
            ['id' => 5, 'name' => 'Sains', 'desc' => 'Ilmu pengetahuan'],
        ];
    }
}