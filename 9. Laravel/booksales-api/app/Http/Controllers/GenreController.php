<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    // 1. READ ALL DATA
    public function index()
    {
        $genres = Genre::all();
        
        if ($genres->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => 'Resource data not found'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get all resources',
            'data' => $genres
        ], 200);
    }

    // 2. CREATE DATA
    public function store(Request $request)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'description' => 'required|string',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // Jika validasi sukses, simpan ke database
        $genre = Genre::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resource added successfully',
            'data' => $genre
        ], 201); // 201 = Created
    }
}