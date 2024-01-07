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
    public function destroy($id)
    {
        try {
            // Cari berita berdasarkan ID
            $news = News::findOrFail($id);

            // Simpan path foto sebelum menghapus berita
            $photoPath = $news->image;

            // Proses "delete"
            $news->delete();

            // Hapus foto dari direktori jika foto ada
            if (!empty($photoPath)) {
                $filePath = public_path($photoPath);

                if (file_exists($filePath)) {
                    // Menggunakan fungsi unlink untuk menghapus file
                    if (unlink($filePath)) {
                        // Jika berhasil dihapus
                        error_log('File deleted successfully: ' . $filePath);
                    } else {
                        // Jika gagal dihapus
                        error_log('Failed to delete file: ' . $filePath);
                    }
                } else {
                    // Jika file tidak ditemukan
                    error_log('File not found: ' . $filePath);
                }
            }

            return response()->json(['message' => 'News deleted successfully']);
        } catch (\Exception $e) {
            // Tangani error internal server atau berita tidak ditemukan
            return response()->json(['message' => 'Error deleting news', 'error' => $e->getMessage()], 500);
        }
    }

}
