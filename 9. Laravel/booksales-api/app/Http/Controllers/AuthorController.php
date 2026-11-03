<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    // 1. READ ALL (Sudah ada)
    public function index()
    {
        $authors = Author::all();
        if ($authors->isEmpty()) {
            return response()->json(['success' => true, 'message' => 'Resource data not found'], 200);
        }
        return response()->json(['success' => true, 'message' => 'Get all resources', 'data' => $authors], 200);
    }

    // 2. CREATE (Sudah ada)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 422);
        }

        $author = Author::create($request->all());
        return response()->json(['success' => true, 'message' => 'Resource added successfully', 'data' => $author], 201);
    }

    // 3. SHOW (TAMBAHAN BARU)
    public function show($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['success' => false, 'message' => 'Resource not found'], 404);
        }
        return response()->json(['success' => true, 'message' => 'Get resource detail', 'data' => $author], 200);
    }

    // 4. UPDATE (TAMBAHAN BARU)
    public function update(Request $request, $id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['success' => false, 'message' => 'Resource not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 422);
        }

        $author->update($request->all());
        return response()->json(['success' => true, 'message' => 'Resource updated successfully', 'data' => $author], 200);
    }

    // 5. DESTROY (TAMBAHAN BARU)
    public function destroy($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['success' => false, 'message' => 'Resource not found'], 404);
        }

        $author->delete();
        return response()->json(['success' => true, 'message' => 'Resource deleted successfully'], 200);
    }
}