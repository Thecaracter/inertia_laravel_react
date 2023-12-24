<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Newsseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 100) as $index) {
            DB::table('news')->insert([
                'title' => $faker->sentence,
                'description' => $faker->paragraph,
                'category' => $faker->word,
                'author' => $faker->name,
                'image' => "https://picsum.photos/800/400?random=" . $index,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
