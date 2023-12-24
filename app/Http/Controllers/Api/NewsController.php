<?php

namespace App\Http\Controllers\Api;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validasi request
            $request->validate([
                'title' => 'required|string',
                'description' => 'required|string',
                'category' => 'required|string',
                'author' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // Simpan data berita
            $news = News::create([
                'title' => $request->title,
                'description' => $request->description,
                'category' => $request->category,
                'author' => $request->author,
                'image' => $request->file('image')->move('uploads', $request->file('image')->getClientOriginalName()),
            ]);

            return response()->json(['message' => 'News created successfully', 'data' => $news], 201);
        } catch (\Exception $e) {
            // Tangani error internal server
            return response()->json(['message' => 'Internal Server Error', 'error' => $e->getMessage()], 500);
        }
    }

}
