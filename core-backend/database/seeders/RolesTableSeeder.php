<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'created_at' => '2024-11-16 03:03:15',
                'created_by' => 1,
                'id' => 1,
                'name' => 'Admin',
                'updated_at' => '2024-11-16 03:03:15',
                'updated_by' => 1,
            ),
        ));
        
        
    }
}