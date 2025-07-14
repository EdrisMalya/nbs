<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('permissions')->delete();

        \DB::table('permissions')->insert(array (
            0 =>
            array (
                'created_at' => '2024-11-16 03:05:31',
                'id' => 1,
                'key' => 'user-management-access',
                'name' => 'Access',
                'permission_group_id' => 1,
                'updated_at' => '2024-11-16 03:05:31',
            ),
            1 =>
            array (
                'created_at' => '2024-11-17 16:00:21',
                'id' => 2,
                'key' => 'users-access',
                'name' => 'Access',
                'permission_group_id' => 2,
                'updated_at' => '2024-11-17 16:00:21',
            ),
            2 =>
            array (
                'created_at' => '2024-11-17 16:00:39',
                'id' => 3,
                'key' => 'log-activity-access',
                'name' => 'Access',
                'permission_group_id' => 6,
                'updated_at' => '2024-11-17 16:00:39',
            ),
            3 =>
            array (
                'created_at' => '2024-11-17 16:00:46',
                'id' => 4,
                'key' => 'log-activity-view-details',
                'name' => 'View details',
                'permission_group_id' => 6,
                'updated_at' => '2024-11-17 16:00:46',
            ),
            4 =>
            array (
                'created_at' => '2024-11-17 16:00:57',
                'id' => 5,
                'key' => 'log-activity-recover-delete-record',
                'name' => 'Recover delete record',
                'permission_group_id' => 6,
                'updated_at' => '2024-11-17 16:00:57',
            ),
            5 =>
            array (
                'created_at' => '2024-11-17 16:01:28',
                'id' => 6,
                'key' => 'roles-access',
                'name' => 'Access',
                'permission_group_id' => 3,
                'updated_at' => '2024-11-17 16:01:28',
            ),
            6 =>
            array (
                'created_at' => '2024-11-17 16:01:30',
                'id' => 7,
                'key' => 'roles-create',
                'name' => 'Create',
                'permission_group_id' => 3,
                'updated_at' => '2024-11-17 16:01:30',
            ),
            7 =>
            array (
                'created_at' => '2024-11-17 16:01:32',
                'id' => 8,
                'key' => 'roles-edit',
                'name' => 'Edit',
                'permission_group_id' => 3,
                'updated_at' => '2024-11-17 16:01:32',
            ),
            8 =>
            array (
                'created_at' => '2024-11-17 16:01:35',
                'id' => 9,
                'key' => 'roles-delete',
                'name' => 'Delete',
                'permission_group_id' => 3,
                'updated_at' => '2024-11-17 16:01:35',
            ),
            9 =>
            array (
                'created_at' => '2024-11-17 16:01:38',
                'id' => 10,
                'key' => 'roles-view-details',
                'name' => 'View details',
                'permission_group_id' => 3,
                'updated_at' => '2024-11-17 16:01:38',
            ),
            10 =>
            array (
                'created_at' => '2024-11-17 16:02:10',
                'id' => 11,
                'key' => 'activity-log-access',
                'name' => 'Access',
                'permission_group_id' => 4,
                'updated_at' => '2024-11-17 16:02:10',
            ),
            11 =>
            array (
                'created_at' => '2024-11-17 16:02:16',
                'id' => 12,
                'key' => 'activity-log-view-details',
                'name' => 'View details',
                'permission_group_id' => 4,
                'updated_at' => '2024-11-17 16:02:16',
            ),
            12 =>
            array (
                'created_at' => '2024-11-17 16:02:29',
                'id' => 13,
                'key' => 'activity-log-recover-delete-record',
                'name' => 'Recover delete record',
                'permission_group_id' => 4,
                'updated_at' => '2024-11-17 16:02:29',
            ),
            13 =>
            array (
                'created_at' => '2024-11-17 16:02:45',
                'id' => 14,
                'key' => 'login-log-access',
                'name' => 'Access',
                'permission_group_id' => 5,
                'updated_at' => '2024-11-17 16:02:45',
            ),
            14 =>
            array (
                'created_at' => '2024-11-17 16:03:25',
                'id' => 15,
                'key' => 'configurations-access',
                'name' => 'Access',
                'permission_group_id' => 7,
                'updated_at' => '2024-11-17 16:03:25',
            ),
            15 =>
            array (
                'created_at' => '2024-11-17 16:03:55',
                'id' => 16,
                'key' => 'backup-access',
                'name' => 'Access',
                'permission_group_id' => 8,
                'updated_at' => '2024-11-17 16:03:55',
            ),
            16 =>
            array (
                'created_at' => '2024-11-17 16:04:04',
                'id' => 17,
                'key' => 'backup-run-backup',
                'name' => 'Run backup',
                'permission_group_id' => 8,
                'updated_at' => '2024-11-17 16:04:04',
            ),
            17 =>
            array (
                'created_at' => '2024-11-17 16:04:10',
                'id' => 18,
                'key' => 'backup-download-backup',
                'name' => 'Download backup',
                'permission_group_id' => 8,
                'updated_at' => '2024-11-17 16:04:10',
            ),
            18 =>
            array (
                'created_at' => '2024-11-17 16:04:15',
                'id' => 19,
                'key' => 'backup-restore-backup',
                'name' => 'Restore backup',
                'permission_group_id' => 8,
                'updated_at' => '2024-11-17 16:04:15',
            ),
            19 =>
            array (
                'created_at' => '2024-11-17 16:04:19',
                'id' => 20,
                'key' => 'backup-change-backup',
                'name' => 'Change backup',
                'permission_group_id' => 8,
                'updated_at' => '2024-11-17 16:04:19',
            ),
            20 =>
            array (
                'created_at' => '2024-11-17 16:04:46',
                'id' => 21,
                'key' => 'languages-access',
                'name' => 'Access',
                'permission_group_id' => 9,
                'updated_at' => '2024-11-17 16:04:46',
            ),
            21 =>
            array (
                'created_at' => '2024-11-17 16:04:49',
                'id' => 22,
                'key' => 'languages-create',
                'name' => 'Create',
                'permission_group_id' => 9,
                'updated_at' => '2024-11-17 16:04:49',
            ),
            22 =>
            array (
                'created_at' => '2024-11-17 16:04:56',
                'id' => 23,
                'key' => 'languages-view-details',
                'name' => 'View details',
                'permission_group_id' => 9,
                'updated_at' => '2024-11-17 16:04:56',
            ),
            23 =>
            array (
                'created_at' => '2024-11-17 16:05:00',
                'id' => 24,
                'key' => 'languages-delete',
                'name' => 'Delete',
                'permission_group_id' => 9,
                'updated_at' => '2024-11-17 16:05:00',
            ),
            24 =>
            array (
                'created_at' => '2024-11-17 16:06:15',
                'id' => 25,
                'key' => 'language-dictionary-access',
                'name' => 'Access',
                'permission_group_id' => 10,
                'updated_at' => '2024-11-17 16:06:15',
            ),
            25 =>
            array (
                'created_at' => '2024-11-17 16:06:21',
                'id' => 26,
                'key' => 'language-dictionary-add-word',
                'name' => 'Add word',
                'permission_group_id' => 10,
                'updated_at' => '2024-11-17 16:06:21',
            ),
            26 =>
            array (
                'created_at' => '2024-11-17 16:06:25',
                'id' => 27,
                'key' => 'language-dictionary-edit-word',
                'name' => 'Edit word',
                'permission_group_id' => 10,
                'updated_at' => '2024-11-17 16:06:25',
            ),
            27 =>
            array (
                'created_at' => '2024-11-17 16:06:28',
                'id' => 28,
                'key' => 'language-dictionary-delete-word',
                'name' => 'Delete word',
                'permission_group_id' => 10,
                'updated_at' => '2024-11-17 16:06:28',
            ),
        ));


    }
}
