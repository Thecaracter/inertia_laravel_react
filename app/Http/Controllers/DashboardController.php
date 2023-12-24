<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $news = News::all();
        return Inertia::render('Dashboard', [
            'title' => 'Homepage Rizqi',
            'description' => 'Ini adalah halaman homepage rizqi',
            'news' => $news,

        ]);
    }
}
