<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenreController;   // <-- Ditambahkan
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;

// ================= ROUTE GENRE =================
Route::get('/genres', [GenreController::class, 'index']);   // Read
Route::post('/genres', [GenreController::class, 'store']);  // Create

// ================= ROUTE AUTHOR =================
Route::get('/authors', [AuthorController::class, 'index']);   // Read
Route::post('/authors', [AuthorController::class, 'store']);  // Create

// ================= ROUTE BOOK (Opsional, jika masih dipakai) =================
Route::get('/books', [BookController::class, 'index']);