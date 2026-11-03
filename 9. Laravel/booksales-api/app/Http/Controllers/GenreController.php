<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    // 1. READ ALL (Sudah ada)
    public function index()
    {
        $genres = Genre::all();
        if ($genres->isEmpty()) {
            return response()->json(['success' => true, 'message' => 'Resource data not found'], 200);
        }
        return response()->json(['success' => true, 'message' => 'Get all resources', 'data' => $genres], 200);
    }

    // 2. CREATE (Sudah ada)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 422);
        }

        $genre = Genre::create($request->all());
        return response()->json(['success' => true, 'message' => 'Resource added successfully', 'data' => $genre], 201);
    }

    // 3. SHOW (TAMBAHAN BARU)
    public function show($id)
    {
        $genre = Genre::find($id);
        
        if (!$genre) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get resource detail',
            'data' => $genre
        ], 200);
    }

    // 4. UPDATE (TAMBAHAN BARU)
    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);
        
        if (!$genre) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 422);
        }

        $genre->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resource updated successfully',
            'data' => $genre
        ], 200);
    }

    // 5. DESTROY (TAMBAHAN BARU)
    public function destroy($id)
    {
        $genre = Genre::find($id);
        
        if (!$genre) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        $genre->delete();

        return response()->json([
            'success' => true,
            'message' => 'Resource deleted successfully'
        ], 200);
    }
}