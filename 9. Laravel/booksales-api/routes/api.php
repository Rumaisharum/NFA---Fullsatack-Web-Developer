<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;

// Route Resource otomatis membuat route untuk: index, store, show, update, destroy
Route::apiResource('genres', GenreController::class);
Route::apiResource('authors', AuthorController::class);

// (Opsional) 
Route::apiResource('books', BookController::class);