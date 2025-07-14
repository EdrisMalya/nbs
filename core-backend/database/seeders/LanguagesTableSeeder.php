<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('languages')->delete();
        
        \DB::table('languages')->insert(array (
            0 => 
            array (
                'abbr' => 'da',
                'created_at' => '2023-09-27 17:45:49',
                'direction' => 'rtl',
                'id' => 1,
                'name' => 'دری',
                'status' => 1,
                'updated_at' => '2023-09-27 17:45:49',
            ),
        ));
        
        
    }
}