<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    // 1. READ ALL DATA (Sudah benar, dipertahankan)
    public function index()
    {
        $authors = Author::all();
        
        if ($authors->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => 'Resource data not found'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get all resources',
            'data' => $authors
        ], 200);
    }

    // 2. CREATE DATA (Ditambahkan)
    public function store(Request $request)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'bio' => 'required|string',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // Jika validasi sukses, simpan ke database
        $author = Author::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resource added successfully',
            'data' => $author
        ], 201);
    }
}