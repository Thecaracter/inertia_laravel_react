<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Example user data
        $users = [
            [
                'name' => 'Rizqi',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('1'),
            ],
            [
                'name' => 'Jane Doe',
                'email' => 'jane@example.com',
                'password' => Hash::make('1'),
            ],
            // Add more users as needed
        ];

        // Insert users into the 'users' table
        foreach ($users as $user) {
            DB::table('users')->insert($user);
        }
    }
}
