<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;

// Route Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// ADMIN ONLY: Read All & Destroy
Route::middleware(['auth:api', 'role:admin'])->group(function () {
    Route::apiResource('transactions', TransactionController::class)->only(['index', 'destroy']);
});

// CUSTOMER ONLY: Create, Update, Show
Route::middleware(['auth:api', 'role:customer'])->group(function () {
    Route::apiResource('transactions', TransactionController::class)->only(['store', 'update', 'show']);
});