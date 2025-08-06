<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $roles = ['Author', 'Editor', 'Subscriber', 'Administrator'];
    
        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }
    }
}
