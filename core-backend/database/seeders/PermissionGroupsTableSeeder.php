<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionGroupsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permission_groups')->delete();
        
        \DB::table('permission_groups')->insert(array (
            0 => 
            array (
                'created_at' => '2024-11-16 03:05:25',
                'icon' => 'people',
                'id' => 1,
                'name' => 'User management',
                'permission_group_id' => 0,
                'sort' => 0,
                'updated_at' => '2024-11-16 03:05:25',
            ),
            1 => 
            array (
                'created_at' => '2024-11-17 15:59:25',
                'icon' => 'person',
                'id' => 2,
                'name' => 'Users',
                'permission_group_id' => 1,
                'sort' => 0,
                'updated_at' => '2024-11-17 15:59:25',
            ),
            2 => 
            array (
                'created_at' => '2024-11-17 15:59:33',
                'icon' => 'lock',
                'id' => 3,
                'name' => 'Roles',
                'permission_group_id' => 1,
                'sort' => 1,
                'updated_at' => '2024-11-17 15:59:43',
            ),
            3 => 
            array (
                'created_at' => '2024-11-17 15:59:58',
                'icon' => 'directions_run',
                'id' => 4,
                'name' => 'Activity log',
                'permission_group_id' => 1,
                'sort' => 2,
                'updated_at' => '2024-11-17 15:59:58',
            ),
            4 => 
            array (
                'created_at' => '2024-11-17 16:00:12',
                'icon' => 'article',
                'id' => 5,
                'name' => 'Login log',
                'permission_group_id' => 1,
                'sort' => 3,
                'updated_at' => '2024-11-17 16:00:12',
            ),
            5 => 
            array (
                'created_at' => '2024-11-17 16:00:32',
                'icon' => NULL,
                'id' => 6,
                'name' => 'Log activity',
                'permission_group_id' => 2,
                'sort' => 0,
                'updated_at' => '2024-11-17 16:00:32',
            ),
            6 => 
            array (
                'created_at' => '2024-11-17 16:03:16',
                'icon' => 'settings',
                'id' => 7,
                'name' => 'Configurations',
                'permission_group_id' => 0,
                'sort' => 1,
                'updated_at' => '2024-11-17 16:03:16',
            ),
            7 => 
            array (
                'created_at' => '2024-11-17 16:03:49',
                'icon' => 'cloud_download',
                'id' => 8,
                'name' => 'Backup',
                'permission_group_id' => 7,
                'sort' => 0,
                'updated_at' => '2024-11-17 16:03:49',
            ),
            8 => 
            array (
                'created_at' => '2024-11-17 16:04:35',
                'icon' => 'language',
                'id' => 9,
                'name' => 'Languages',
                'permission_group_id' => 7,
                'sort' => 1,
                'updated_at' => '2024-11-17 16:04:40',
            ),
            9 => 
            array (
                'created_at' => '2024-11-17 16:06:02',
                'icon' => 'g_translate',
                'id' => 10,
                'name' => 'Language dictionary',
                'permission_group_id' => 9,
                'sort' => 0,
                'updated_at' => '2024-11-17 16:06:10',
            ),
        ));
        
        
    }
}