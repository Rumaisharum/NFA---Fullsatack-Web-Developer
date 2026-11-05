<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;       // <-- TAMBAHKAN INI
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;

// Route untuk Auth (Login & Register)
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// 1. PUBLIC ROUTES (Bisa diakses siapa saja, tanpa login)
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);

// 2. ADMIN ONLY ROUTES (Wajib login DAN punya role 'admin')
Route::middleware(['auth:api', 'role:admin'])->group(function () {
    Route::apiResource('genres', GenreController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
});