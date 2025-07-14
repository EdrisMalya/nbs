<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LanguageWordsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('language_words')->delete();
        
        \DB::table('language_words')->insert(array (
            0 => 
            array (
                'created_at' => '2024-04-12 19:26:00',
                'id' => 5,
                'language_id' => 1,
                'translation' => 'صفحه نخست',
                'updated_at' => '2024-04-12 19:26:00',
                'word' => 'Home page',
            ),
            1 => 
            array (
                'created_at' => '2024-04-12 19:29:31',
                'id' => 6,
                'language_id' => 1,
                'translation' => 'لینک های پرکاربرد',
                'updated_at' => '2024-04-12 19:29:31',
                'word' => 'Shortcuts',
            ),
            2 => 
            array (
                'created_at' => '2024-04-12 19:32:02',
                'id' => 7,
                'language_id' => 1,
                'translation' => 'اطلاعیه ها',
                'updated_at' => '2024-04-12 19:32:02',
                'word' => 'Notifications',
            ),
            3 => 
            array (
                'created_at' => '2024-04-12 19:32:23',
                'id' => 8,
                'language_id' => 1,
                'translation' => 'زبان ها',
                'updated_at' => '2024-04-12 19:32:23',
                'word' => 'Languages',
            ),
            4 => 
            array (
                'created_at' => '2024-04-12 19:33:24',
                'id' => 9,
                'language_id' => 1,
                'translation' => 'تنظیمات',
                'updated_at' => '2024-04-12 19:33:24',
                'word' => 'Settings',
            ),
            5 => 
            array (
                'created_at' => '2024-04-12 19:33:44',
                'id' => 10,
                'language_id' => 1,
                'translation' => 'فروشات',
                'updated_at' => '2024-04-12 19:33:44',
                'word' => 'POS',
            ),
            6 => 
            array (
                'created_at' => '2024-04-12 19:34:16',
                'id' => 11,
                'language_id' => 1,
                'translation' => 'مشخصات شما',
                'updated_at' => '2024-04-12 19:34:16',
                'word' => 'Profile',
            ),
            7 => 
            array (
                'created_at' => '2024-04-12 19:35:04',
                'id' => 12,
                'language_id' => 1,
                'translation' => 'تعداد تمام اجناس',
                'updated_at' => '2024-04-12 19:35:04',
                'word' => 'Total products',
            ),
            8 => 
            array (
                'created_at' => '2024-04-12 19:35:30',
                'id' => 13,
                'language_id' => 1,
                'translation' => 'تعداد تمام خرید ها',
                'updated_at' => '2024-04-12 19:35:30',
                'word' => 'Total purchases',
            ),
            9 => 
            array (
                'created_at' => '2024-04-12 19:35:48',
                'id' => 14,
                'language_id' => 1,
                'translation' => 'تعداد تمام فروشات',
                'updated_at' => '2024-04-12 19:35:48',
                'word' => 'Total sales',
            ),
            10 => 
            array (
                'created_at' => '2024-04-12 19:36:25',
                'id' => 15,
                'language_id' => 1,
                'translation' => 'تعداد برگشتی فروشات',
                'updated_at' => '2024-04-12 19:36:25',
                'word' => 'Total sales return',
            ),
            11 => 
            array (
                'created_at' => '2024-04-12 19:48:43',
                'id' => 16,
                'language_id' => 1,
                'translation' => 'تعداد مشتری ها',
                'updated_at' => '2024-04-12 19:48:43',
                'word' => 'Total customers',
            ),
            12 => 
            array (
                'created_at' => '2024-04-12 19:50:08',
                'id' => 17,
                'language_id' => 1,
                'translation' => 'تعداد تامین کنندگان',
                'updated_at' => '2024-04-12 19:50:08',
                'word' => 'Total suppliers',
            ),
            13 => 
            array (
                'created_at' => '2024-04-12 19:51:00',
                'id' => 18,
                'language_id' => 1,
                'translation' => 'تعداد معاملات قرضداری',
                'updated_at' => '2024-04-12 19:51:00',
                'word' => 'Total borrowers',
            ),
            14 => 
            array (
                'created_at' => '2024-04-12 19:55:58',
                'id' => 19,
                'language_id' => 1,
                'translation' => 'تعداد تمام اجناس انقضا شده',
                'updated_at' => '2024-04-12 19:55:58',
                'word' => 'Total expired products',
            ),
            15 => 
            array (
                'created_at' => '2024-04-12 19:56:46',
                'id' => 20,
                'language_id' => 1,
                'translation' => 'تعداد تمام خرید ها برگشتی',
                'updated_at' => '2024-04-12 19:56:46',
                'word' => 'Total purchase return',
            ),
            16 => 
            array (
                'created_at' => '2024-04-12 19:57:21',
                'id' => 21,
                'language_id' => 1,
                'translation' => 'تعداد یوزر های سیستم',
                'updated_at' => '2024-04-12 19:57:21',
                'word' => 'Total system users',
            ),
            17 => 
            array (
                'created_at' => '2024-04-12 19:58:10',
                'id' => 22,
                'language_id' => 1,
                'translation' => 'تعداد کوتیشن ها پرنت شده',
                'updated_at' => '2024-04-12 19:58:10',
                'word' => 'Total quotations',
            ),
            18 => 
            array (
                'created_at' => '2024-04-12 19:58:52',
                'id' => 23,
                'language_id' => 1,
                'translation' => 'تعداد معملات ناتکمیل تامین کننده ها',
                'updated_at' => '2024-04-12 19:58:52',
                'word' => 'Unpaid suppliers',
            ),
            19 => 
            array (
                'created_at' => '2024-04-12 19:59:38',
                'id' => 24,
                'language_id' => 1,
                'translation' => 'خرید و فروش های این هفته',
                'updated_at' => '2024-04-12 19:59:38',
                'word' => 'This week sales & purchases',
            ),
            20 => 
            array (
                'created_at' => '2024-04-12 20:00:34',
                'id' => 25,
                'language_id' => 1,
                'translation' => 'محصولات پرفروش',
                'updated_at' => '2024-04-12 20:00:34',
                'word' => 'Top selling products',
            ),
            21 => 
            array (
                'created_at' => '2024-04-12 20:00:54',
                'id' => 26,
                'language_id' => 1,
                'translation' => '5 مشتری برتر',
                'updated_at' => '2024-04-12 20:01:13',
                'word' => 'Top 5 customer',
            ),
            22 => 
            array (
                'created_at' => '2024-04-12 20:02:04',
                'id' => 27,
                'language_id' => 1,
                'translation' => 'خرید و فروش با برگشت',
                'updated_at' => '2024-04-12 20:02:04',
                'word' => 'Sales and purchase with returns',
            ),
            23 => 
            array (
                'created_at' => '2024-04-12 20:02:32',
                'id' => 28,
                'language_id' => 1,
                'translation' => 'هشدار گدام',
                'updated_at' => '2024-04-12 20:02:32',
                'word' => 'Stock alert',
            ),
            24 => 
            array (
                'created_at' => '2024-04-12 20:04:32',
                'id' => 29,
                'language_id' => 1,
                'translation' => 'فروشات',
                'updated_at' => '2024-04-12 20:04:32',
                'word' => 'Sales',
            ),
            25 => 
            array (
                'created_at' => '2024-04-12 20:08:52',
                'id' => 30,
                'language_id' => 1,
                'translation' => 'خرید ها',
                'updated_at' => '2024-04-12 20:08:52',
                'word' => 'Purchases',
            ),
            26 => 
            array (
                'created_at' => '2024-04-12 20:09:27',
                'id' => 31,
                'language_id' => 1,
                'translation' => 'کود',
                'updated_at' => '2024-04-12 20:09:27',
                'word' => 'Code',
            ),
            27 => 
            array (
                'created_at' => '2024-04-12 20:09:39',
                'id' => 32,
                'language_id' => 1,
                'translation' => 'جنس',
                'updated_at' => '2024-04-12 20:09:39',
                'word' => 'Product',
            ),
            28 => 
            array (
                'created_at' => '2024-04-12 20:09:55',
                'id' => 33,
                'language_id' => 1,
                'translation' => 'گدام',
                'updated_at' => '2024-04-12 20:09:55',
                'word' => 'Warehouse',
            ),
            29 => 
            array (
                'created_at' => '2024-04-12 20:10:11',
                'id' => 34,
                'language_id' => 1,
                'translation' => 'مقدار',
                'updated_at' => '2024-04-12 20:10:11',
                'word' => 'Quantity',
            ),
            30 => 
            array (
                'created_at' => '2024-04-12 20:10:29',
                'id' => 35,
                'language_id' => 1,
                'translation' => 'تعداد هشدار',
                'updated_at' => '2024-04-12 20:10:29',
                'word' => 'Alert quantity',
            ),
            31 => 
            array (
                'created_at' => '2024-04-12 20:10:43',
                'id' => 36,
                'language_id' => 1,
                'translation' => 'مقدار',
                'updated_at' => '2024-04-12 20:10:43',
                'word' => 'Qty',
            ),
            32 => 
            array (
                'created_at' => '2024-04-12 20:11:44',
                'id' => 37,
                'language_id' => 1,
                'translation' => 'مقدار حصول شده',
                'updated_at' => '2024-04-12 20:11:44',
                'word' => 'Grand total',
            ),
            33 => 
            array (
                'created_at' => '2024-04-12 20:14:00',
                'id' => 38,
                'language_id' => 1,
                'translation' => 'فروشات برگشتی',
                'updated_at' => '2024-04-12 20:14:00',
                'word' => 'Sale return',
            ),
            34 => 
            array (
                'created_at' => '2024-04-12 20:14:18',
                'id' => 39,
                'language_id' => 1,
                'translation' => 'خرید',
                'updated_at' => '2024-04-12 20:14:18',
                'word' => 'Purchase',
            ),
            35 => 
            array (
                'created_at' => '2024-04-12 20:14:35',
                'id' => 40,
                'language_id' => 1,
                'translation' => 'خرید های برگشتی',
                'updated_at' => '2024-04-12 20:14:35',
                'word' => 'Purchase return',
            ),
            36 => 
            array (
                'created_at' => '2024-04-12 20:15:29',
                'id' => 41,
                'language_id' => 1,
                'translation' => 'صفحه اصلی',
                'updated_at' => '2024-04-12 20:15:29',
                'word' => 'Dashboard',
            ),
            37 => 
            array (
                'created_at' => '2024-04-12 20:15:48',
                'id' => 42,
                'language_id' => 1,
                'translation' => 'مدریت اجناس',
                'updated_at' => '2024-04-12 20:15:48',
                'word' => 'Product management',
            ),
            38 => 
            array (
                'created_at' => '2024-04-12 20:16:14',
                'id' => 43,
                'language_id' => 1,
                'translation' => 'تنظیم اجناس',
                'updated_at' => '2024-04-12 20:16:26',
                'word' => 'Adjustments',
            ),
            39 => 
            array (
                'created_at' => '2024-04-12 20:16:47',
                'id' => 44,
                'language_id' => 1,
                'translation' => 'مدریت خریداری ها',
                'updated_at' => '2024-04-12 20:16:47',
                'word' => 'Purchase management',
            ),
            40 => 
            array (
                'created_at' => '2024-04-12 20:16:59',
                'id' => 45,
                'language_id' => 1,
                'translation' => 'مدریت فروشات',
                'updated_at' => '2024-04-12 20:16:59',
                'word' => 'Sales management',
            ),
            41 => 
            array (
                'created_at' => '2024-04-12 20:17:09',
                'id' => 46,
                'language_id' => 1,
                'translation' => 'انتقالات',
                'updated_at' => '2024-04-12 20:17:09',
                'word' => 'Transfer',
            ),
            42 => 
            array (
                'created_at' => '2024-04-12 20:17:32',
                'id' => 47,
                'language_id' => 1,
                'translation' => 'مدریت مصارف',
                'updated_at' => '2024-04-12 20:17:32',
                'word' => 'Expenses management',
            ),
            43 => 
            array (
                'created_at' => '2024-04-12 20:17:57',
                'id' => 48,
                'language_id' => 1,
                'translation' => 'کوتیشن ها',
                'updated_at' => '2024-04-12 20:17:57',
                'word' => 'Quotations',
            ),
            44 => 
            array (
                'created_at' => '2024-04-12 20:18:09',
                'id' => 49,
                'language_id' => 1,
                'translation' => 'راپور ها',
                'updated_at' => '2024-04-12 20:18:09',
                'word' => 'Reporting',
            ),
            45 => 
            array (
                'created_at' => '2024-04-12 20:18:26',
                'id' => 50,
                'language_id' => 1,
                'translation' => 'مدریت یوزر ها',
                'updated_at' => '2024-04-12 20:18:26',
                'word' => 'User management',
            ),
            46 => 
            array (
                'created_at' => '2024-04-12 20:18:46',
                'id' => 51,
                'language_id' => 1,
                'translation' => 'تنظیمات',
                'updated_at' => '2024-04-12 20:18:46',
                'word' => 'Configurations',
            ),
            47 => 
            array (
                'created_at' => '2024-04-12 20:19:30',
                'id' => 52,
                'language_id' => 1,
                'translation' => 'اجناس',
                'updated_at' => '2024-04-12 20:19:30',
                'word' => 'Products',
            ),
            48 => 
            array (
                'created_at' => '2024-04-12 20:19:49',
                'id' => 53,
                'language_id' => 1,
                'translation' => 'تطبقه بندی اجناس',
                'updated_at' => '2024-04-12 20:19:49',
                'word' => 'Product categories',
            ),
            49 => 
            array (
                'created_at' => '2024-04-12 20:20:07',
                'id' => 54,
                'language_id' => 1,
                'translation' => 'برندهای محصول',
                'updated_at' => '2024-04-12 20:20:07',
                'word' => 'Product brands',
            ),
            50 => 
            array (
                'created_at' => '2024-04-12 20:20:32',
                'id' => 55,
                'language_id' => 1,
                'translation' => 'واحد های اجناس',
                'updated_at' => '2024-04-12 20:20:32',
                'word' => 'Product units',
            ),
            51 => 
            array (
                'created_at' => '2024-04-12 20:20:48',
                'id' => 56,
                'language_id' => 1,
                'translation' => 'تولید کننده بارکود',
                'updated_at' => '2024-04-12 20:20:48',
                'word' => 'Barcode generator',
            ),
            52 => 
            array (
                'created_at' => '2024-04-12 20:21:39',
                'id' => 57,
                'language_id' => 1,
                'translation' => 'لیست اجاس',
                'updated_at' => '2024-04-12 20:22:22',
                'word' => 'Products list',
            ),
            53 => 
            array (
                'created_at' => '2024-04-12 20:22:41',
                'id' => 58,
                'language_id' => 1,
                'translation' => 'آی دی',
                'updated_at' => '2024-04-12 20:22:41',
                'word' => 'ID',
            ),
            54 => 
            array (
                'created_at' => '2024-04-12 20:22:50',
                'id' => 59,
                'language_id' => 1,
                'translation' => 'عکس',
                'updated_at' => '2024-04-12 20:22:50',
                'word' => 'Image',
            ),
            55 => 
            array (
                'created_at' => '2024-04-12 20:23:02',
                'id' => 60,
                'language_id' => 1,
                'translation' => 'اسم',
                'updated_at' => '2024-04-12 20:23:02',
                'word' => 'Name',
            ),
            56 => 
            array (
                'created_at' => '2024-04-12 20:23:25',
                'id' => 61,
                'language_id' => 1,
                'translation' => 'دسته بندی',
                'updated_at' => '2024-04-12 20:23:25',
                'word' => 'Category',
            ),
            57 => 
            array (
                'created_at' => '2024-04-12 20:23:35',
                'id' => 62,
                'language_id' => 1,
                'translation' => 'برند',
                'updated_at' => '2024-04-12 20:23:46',
                'word' => 'Brand',
            ),
            58 => 
            array (
                'created_at' => '2024-04-12 20:24:13',
                'id' => 63,
                'language_id' => 1,
                'translation' => 'ایجاد شده توسط',
                'updated_at' => '2024-04-12 20:24:13',
                'word' => 'Created by',
            ),
            59 => 
            array (
                'created_at' => '2024-04-12 20:24:24',
                'id' => 64,
                'language_id' => 1,
                'translation' => 'تاریخ انقضا',
                'updated_at' => '2024-04-12 20:24:24',
                'word' => 'Expiry date',
            ),
            60 => 
            array (
                'created_at' => '2024-04-12 20:24:40',
                'id' => 65,
                'language_id' => 1,
                'translation' => 'تارخ ایجاد شده',
                'updated_at' => '2024-04-12 20:24:40',
                'word' => 'Created at',
            ),
            61 => 
            array (
                'created_at' => '2024-04-12 20:24:59',
                'id' => 66,
                'language_id' => 1,
                'translation' => 'حالت',
                'updated_at' => '2024-04-12 20:24:59',
                'word' => 'Status',
            ),
            62 => 
            array (
                'created_at' => '2024-04-12 20:25:31',
                'id' => 67,
                'language_id' => 1,
                'translation' => 'جستجو',
                'updated_at' => '2024-04-12 20:25:31',
                'word' => 'Search',
            ),
            63 => 
            array (
                'created_at' => '2024-04-12 20:26:08',
                'id' => 68,
                'language_id' => 1,
                'translation' => 'اضافه کردن جنس جدید',
                'updated_at' => '2024-04-12 20:26:08',
                'word' => 'Add new product',
            ),
            64 => 
            array (
                'created_at' => '2024-04-12 20:26:23',
                'id' => 69,
                'language_id' => 1,
                'translation' => 'در حال کار',
                'updated_at' => '2024-04-12 20:26:23',
                'word' => 'Loading',
            ),
            65 => 
            array (
                'created_at' => '2024-04-12 20:26:37',
                'id' => 70,
                'language_id' => 1,
                'translation' => 'فلتر',
                'updated_at' => '2024-04-12 20:26:37',
                'word' => 'Filter',
            ),
            66 => 
            array (
                'created_at' => '2024-04-12 20:27:00',
                'id' => 71,
                'language_id' => 1,
                'translation' => 'ستون ها',
                'updated_at' => '2024-04-12 20:27:00',
                'word' => 'Columns',
            ),
            67 => 
            array (
                'created_at' => '2024-04-12 20:27:17',
                'id' => 72,
                'language_id' => 1,
                'translation' => 'پرنت',
                'updated_at' => '2024-04-12 20:27:17',
                'word' => 'Print',
            ),
            68 => 
            array (
                'created_at' => '2024-04-12 20:27:39',
                'id' => 73,
                'language_id' => 1,
                'translation' => 'بروز ساختن',
                'updated_at' => '2024-04-12 20:27:39',
                'word' => 'Refresh',
            ),
            69 => 
            array (
                'created_at' => '2024-04-12 20:27:48',
                'id' => 74,
                'language_id' => 1,
                'translation' => 'دانلود',
                'updated_at' => '2024-04-12 20:27:48',
                'word' => 'Download',
            ),
            70 => 
            array (
                'created_at' => '2024-04-12 20:28:53',
                'id' => 75,
                'language_id' => 1,
                'translation' => 'اپدیت کردن',
                'updated_at' => '2024-04-12 20:28:53',
                'word' => 'Edit record',
            ),
            71 => 
            array (
                'created_at' => '2024-04-12 20:29:10',
                'id' => 76,
                'language_id' => 1,
                'translation' => 'حذف کردن',
                'updated_at' => '2024-04-12 20:29:10',
                'word' => 'Delete record',
            ),
            72 => 
            array (
                'created_at' => '2024-04-12 20:31:04',
                'id' => 77,
                'language_id' => 1,
                'translation' => 'فورم اضافه کردن اجناس',
                'updated_at' => '2024-04-12 20:31:04',
                'word' => 'Product form',
            ),
            73 => 
            array (
                'created_at' => '2024-04-12 20:31:12',
                'id' => 78,
                'language_id' => 1,
                'translation' => 'عکس ها',
                'updated_at' => '2024-04-12 20:31:12',
                'word' => 'Images',
            ),
            74 => 
            array (
                'created_at' => '2024-04-12 20:31:29',
                'id' => 79,
                'language_id' => 1,
                'translation' => 'دسته بندی ها',
                'updated_at' => '2024-04-12 20:31:29',
                'word' => 'Categories',
            ),
            75 => 
            array (
                'created_at' => '2024-04-12 20:31:45',
                'id' => 80,
                'language_id' => 1,
                'translation' => 'تخفیف',
                'updated_at' => '2024-04-12 20:31:45',
                'word' => 'Discount',
            ),
            76 => 
            array (
                'created_at' => '2024-04-12 20:32:27',
                'id' => 81,
                'language_id' => 1,
                'translation' => 'واحد خرید',
                'updated_at' => '2024-04-12 20:32:27',
                'word' => 'Purchase unit',
            ),
            77 => 
            array (
                'created_at' => '2024-04-12 20:32:36',
                'id' => 82,
                'language_id' => 1,
                'translation' => 'واحد فروش',
                'updated_at' => '2024-04-12 20:32:36',
                'word' => 'Sale unit',
            ),
            78 => 
            array (
                'created_at' => '2024-04-12 20:32:57',
                'id' => 83,
                'language_id' => 1,
                'translation' => 'واحد جنس',
                'updated_at' => '2024-04-12 20:32:57',
                'word' => 'Product unit',
            ),
            79 => 
            array (
                'created_at' => '2024-04-13 00:10:11',
                'id' => 85,
                'language_id' => 1,
                'translation' => 'این بخش لازم میباشد',
                'updated_at' => '2024-04-13 00:10:11',
                'word' => 'This section is required',
            ),
            80 => 
            array (
                'created_at' => '2024-04-13 00:30:44',
                'id' => 86,
                'language_id' => 1,
                'translation' => 'هزینه و قیمت تبدیل واحد',
                'updated_at' => '2024-04-13 00:30:44',
                'word' => 'Unit conversion cost and price',
            ),
            81 => 
            array (
                'created_at' => '2024-04-13 00:31:00',
                'id' => 87,
                'language_id' => 1,
                'translation' => 'اسم واحد',
                'updated_at' => '2024-04-13 00:31:00',
                'word' => 'Unit name',
            ),
            82 => 
            array (
                'created_at' => '2024-04-13 00:31:10',
                'id' => 88,
                'language_id' => 1,
                'translation' => 'قیمت تمام شد',
                'updated_at' => '2024-04-13 00:31:38',
                'word' => 'Unit cost',
            ),
            83 => 
            array (
                'created_at' => '2024-04-13 00:32:07',
                'id' => 89,
                'language_id' => 1,
                'translation' => 'نرخ فروش',
                'updated_at' => '2024-04-13 00:32:07',
                'word' => 'Unit price',
            ),
            84 => 
            array (
                'created_at' => '2024-04-13 00:32:23',
                'id' => 90,
                'language_id' => 1,
                'translation' => 'واحد ها',
                'updated_at' => '2024-04-13 00:32:23',
                'word' => 'Units',
            ),
            85 => 
            array (
                'created_at' => '2024-04-13 00:32:32',
                'id' => 91,
                'language_id' => 1,
                'translation' => 'ثبت',
                'updated_at' => '2024-04-13 00:32:32',
                'word' => 'Save',
            ),
            86 => 
            array (
                'created_at' => '2024-04-13 00:32:59',
                'id' => 92,
                'language_id' => 1,
                'translation' => 'تبدیل واحد جدید را اضافه کنید',
                'updated_at' => '2024-04-13 00:32:59',
                'word' => 'Add new unit conversion',
            ),
            87 => 
            array (
                'created_at' => '2024-04-13 00:42:32',
                'id' => 93,
                'language_id' => 1,
                'translation' => 'موفقانه اپدیت گردید',
                'updated_at' => '2024-04-13 00:42:32',
                'word' => 'Updated successfully',
            ),
            88 => 
            array (
                'created_at' => '2024-04-13 00:43:10',
                'id' => 94,
                'language_id' => 1,
                'translation' => 'آیا شما مطمین هستید',
                'updated_at' => '2024-04-13 00:43:10',
                'word' => 'Are you sure',
            ),
            89 => 
            array (
                'created_at' => '2024-04-13 00:43:43',
                'id' => 95,
                'language_id' => 1,
                'translation' => 'آیا شما واقیعت میخواهید آین دیتا ره حذف نمایید',
                'updated_at' => '2024-04-13 00:43:43',
                'word' => 'Do you really want to delete',
            ),
            90 => 
            array (
                'created_at' => '2024-04-13 00:45:23',
                'id' => 96,
                'language_id' => 1,
                'translation' => 'معلومات کلی جنس',
                'updated_at' => '2024-04-13 00:45:23',
                'word' => 'Product details',
            ),
            91 => 
            array (
                'created_at' => '2024-04-13 00:45:44',
                'id' => 97,
                'language_id' => 1,
                'translation' => 'معلومات گدام جنس',
                'updated_at' => '2024-04-13 00:45:44',
                'word' => 'Stock details',
            ),
            92 => 
            array (
                'created_at' => '2024-04-13 00:45:56',
                'id' => 98,
                'language_id' => 1,
                'translation' => 'عکس های جنس',
                'updated_at' => '2024-04-13 00:45:56',
                'word' => 'Product images',
            ),
            93 => 
            array (
                'created_at' => '2024-04-13 00:47:40',
                'id' => 99,
                'language_id' => 1,
                'translation' => 'اضافه کردن عکس جدید',
                'updated_at' => '2024-04-13 00:47:40',
                'word' => 'Upload new image',
            ),
            94 => 
            array (
                'created_at' => '2024-04-13 00:47:58',
                'id' => 100,
                'language_id' => 1,
                'translation' => 'راپور های جنس',
                'updated_at' => '2024-04-13 00:47:58',
                'word' => 'Product reports',
            ),
            95 => 
            array (
                'created_at' => '2024-04-13 00:48:06',
                'id' => 101,
                'language_id' => 1,
                'translation' => 'ادت',
                'updated_at' => '2024-04-13 00:48:06',
                'word' => 'Edit',
            ),
            96 => 
            array (
                'created_at' => '2024-04-13 00:48:25',
                'id' => 102,
                'language_id' => 1,
                'translation' => 'قیمت های جنس',
                'updated_at' => '2024-04-13 00:48:25',
                'word' => 'Product unit const and price',
            ),
            97 => 
            array (
                'created_at' => '2024-04-13 00:48:57',
                'id' => 103,
                'language_id' => 1,
                'translation' => 'معلومات گدام جنس',
                'updated_at' => '2024-04-13 00:48:57',
                'word' => 'Product stock information',
            ),
            98 => 
            array (
                'created_at' => '2024-04-13 00:49:23',
                'id' => 104,
                'language_id' => 1,
                'translation' => 'موجود است در',
                'updated_at' => '2024-04-13 00:49:23',
                'word' => 'Available in',
            ),
            99 => 
            array (
                'created_at' => '2024-04-13 00:49:52',
                'id' => 105,
                'language_id' => 1,
                'translation' => 'مقدار باقی مانده',
                'updated_at' => '2024-04-13 00:49:52',
                'word' => 'Total available qty',
            ),
            100 => 
            array (
                'created_at' => '2024-04-13 00:50:05',
                'id' => 106,
                'language_id' => 1,
                'translation' => 'معلومات گدام',
                'updated_at' => '2024-04-13 00:50:05',
                'word' => 'Stock information',
            ),
            101 => 
            array (
                'created_at' => '2024-04-13 00:50:26',
                'id' => 107,
                'language_id' => 1,
                'translation' => 'قیمت های جنس',
                'updated_at' => '2024-04-13 00:50:26',
                'word' => 'Product unit cost and price',
            ),
            102 => 
            array (
                'created_at' => '2024-04-13 00:51:36',
                'id' => 108,
                'language_id' => 1,
                'translation' => 'لیست طبقه بندی های اجناست',
                'updated_at' => '2024-04-13 00:51:36',
                'word' => 'List of product categories',
            ),
            103 => 
            array (
                'created_at' => '2024-04-13 00:51:53',
                'id' => 109,
                'language_id' => 1,
                'translation' => 'اضافه نمودن طبقه بندی',
                'updated_at' => '2024-04-13 00:51:53',
                'word' => 'Add category',
            ),
            104 => 
            array (
                'created_at' => '2024-04-13 00:52:07',
                'id' => 110,
                'language_id' => 1,
                'translation' => 'اسم طبقه بندی',
                'updated_at' => '2024-04-13 00:52:07',
                'word' => 'Category name',
            ),
            105 => 
            array (
                'created_at' => '2024-04-13 00:52:29',
                'id' => 111,
                'language_id' => 1,
                'translation' => 'فورم طبقه بندی اجناس',
                'updated_at' => '2024-04-13 00:52:29',
                'word' => 'Product category form',
            ),
            106 => 
            array (
                'created_at' => '2024-04-13 00:53:47',
                'id' => 112,
                'language_id' => 1,
                'translation' => 'اظافه کردن کمپنی ها محصولات',
                'updated_at' => '2024-04-13 00:53:47',
                'word' => 'Add new brand',
            ),
            107 => 
            array (
                'created_at' => '2024-04-13 00:53:57',
                'id' => 113,
                'language_id' => 1,
                'translation' => 'اسم کمپنی',
                'updated_at' => '2024-04-13 00:53:57',
                'word' => 'Brand name',
            ),
            108 => 
            array (
                'created_at' => '2024-04-13 00:54:27',
                'id' => 114,
                'language_id' => 1,
                'translation' => 'فورم کامپنی های اجناس',
                'updated_at' => '2024-04-13 00:54:27',
                'word' => 'Brand Form',
            ),
            109 => 
            array (
                'created_at' => '2024-04-13 00:55:05',
                'id' => 115,
                'language_id' => 1,
                'translation' => 'بستن',
                'updated_at' => '2024-04-13 00:55:05',
                'word' => 'Close',
            ),
            110 => 
            array (
                'created_at' => '2024-04-13 00:56:00',
                'id' => 116,
                'language_id' => 1,
                'translation' => 'اصل واحد جنس',
                'updated_at' => '2024-04-13 00:56:00',
                'word' => 'Base units',
            ),
            111 => 
            array (
                'created_at' => '2024-04-13 00:56:20',
                'id' => 117,
                'language_id' => 1,
                'translation' => 'بادله واحد ها',
                'updated_at' => '2024-04-13 00:56:44',
                'word' => 'Units conversions',
            ),
            112 => 
            array (
                'created_at' => '2024-04-13 00:57:20',
                'id' => 118,
                'language_id' => 1,
                'translation' => 'اضافه نمودن واحد اساسی جدید',
                'updated_at' => '2024-04-13 00:57:20',
                'word' => 'Add new base unit',
            ),
            113 => 
            array (
                'created_at' => '2024-04-13 00:57:51',
                'id' => 119,
                'language_id' => 1,
                'translation' => 'تبادله واحد ها',
                'updated_at' => '2024-04-13 00:58:14',
                'word' => 'Unit conversions',
            ),
            114 => 
            array (
                'created_at' => '2024-04-13 00:58:30',
                'id' => 120,
                'language_id' => 1,
                'translation' => 'واحد اساسی',
                'updated_at' => '2024-04-13 00:58:30',
                'word' => 'Base unit',
            ),
            115 => 
            array (
                'created_at' => '2024-04-13 00:58:45',
                'id' => 121,
                'language_id' => 1,
                'translation' => 'مقدار',
                'updated_at' => '2024-04-13 00:58:45',
                'word' => 'Amount',
            ),
            116 => 
            array (
                'created_at' => '2024-04-13 00:59:44',
                'id' => 122,
                'language_id' => 1,
                'translation' => 'اسم جنس و یا کود نمبر را وارد نمایی',
                'updated_at' => '2024-04-13 01:00:18',
                'word' => 'Enter product name or code',
            ),
            117 => 
            array (
                'created_at' => '2024-04-13 01:01:10',
                'id' => 123,
                'language_id' => 1,
                'translation' => 'هیج دیتای دریافت نشد',
                'updated_at' => '2024-04-13 01:01:10',
                'word' => 'No record found',
            ),
            118 => 
            array (
                'created_at' => '2024-04-13 01:01:24',
                'id' => 124,
                'language_id' => 1,
                'translation' => 'اندازه صفحه',
                'updated_at' => '2024-04-13 01:01:24',
                'word' => 'Page size',
            ),
            119 => 
            array (
                'created_at' => '2024-04-13 01:01:44',
                'id' => 125,
                'language_id' => 1,
                'translation' => 'نمایش اسم کامپنی',
                'updated_at' => '2024-04-13 01:01:44',
                'word' => 'Show company name',
            ),
            120 => 
            array (
                'created_at' => '2024-04-13 01:02:00',
                'id' => 126,
                'language_id' => 1,
                'translation' => 'نمایش اسم جنس',
                'updated_at' => '2024-04-13 01:02:00',
                'word' => 'Show product name',
            ),
            121 => 
            array (
                'created_at' => '2024-04-13 01:02:13',
                'id' => 127,
                'language_id' => 1,
                'translation' => 'نمایش قیمت جنس',
                'updated_at' => '2024-04-13 01:02:13',
                'word' => 'Show product price',
            ),
            122 => 
            array (
                'created_at' => '2024-04-13 01:02:21',
                'id' => 128,
                'language_id' => 1,
                'translation' => 'مشاهده',
                'updated_at' => '2024-04-13 01:02:21',
                'word' => 'Preview',
            ),
            123 => 
            array (
                'created_at' => '2024-04-13 01:03:22',
                'id' => 129,
                'language_id' => 1,
                'translation' => 'از سر گیری',
                'updated_at' => '2024-04-13 01:03:22',
                'word' => 'Reset',
            ),
            124 => 
            array (
                'created_at' => '2024-04-13 01:03:43',
                'id' => 130,
                'language_id' => 1,
                'translation' => 'بارکود',
                'updated_at' => '2024-04-13 01:03:43',
                'word' => 'Barcode',
            ),
            125 => 
            array (
                'created_at' => '2024-04-13 01:04:11',
                'id' => 131,
                'language_id' => 1,
                'translation' => 'تبادله واحد جنس',
                'updated_at' => '2024-04-13 01:04:26',
                'word' => 'Product unit conversion',
            ),
            126 => 
            array (
                'created_at' => '2024-04-13 01:05:11',
                'id' => 132,
                'language_id' => 1,
                'translation' => 'معلومات جنس',
                'updated_at' => '2024-04-13 01:05:11',
                'word' => 'Products details',
            ),
            127 => 
            array (
                'created_at' => '2024-04-13 01:05:38',
                'id' => 133,
                'language_id' => 1,
                'translation' => 'صفحه اجناس',
                'updated_at' => '2024-04-13 01:05:38',
                'word' => 'Products page',
            ),
            128 => 
            array (
                'created_at' => '2024-04-13 01:07:24',
                'id' => 134,
                'language_id' => 1,
                'translation' => 'تنظیم اجناس',
                'updated_at' => '2024-04-13 01:07:24',
                'word' => 'Create adjustments',
            ),
            129 => 
            array (
                'created_at' => '2024-04-13 01:07:53',
                'id' => 135,
                'language_id' => 1,
                'translation' => 'جنس های گنجانده شده',
                'updated_at' => '2024-04-13 01:07:53',
                'word' => 'Product items',
            ),
            130 => 
            array (
                'created_at' => '2024-04-13 01:08:18',
                'id' => 136,
                'language_id' => 1,
                'translation' => 'واحد تنظیم جنس',
                'updated_at' => '2024-04-13 01:08:54',
                'word' => 'Adjustement unit',
            ),
            131 => 
            array (
                'created_at' => '2024-04-13 01:08:24',
                'id' => 137,
                'language_id' => 1,
                'translation' => 'گدام',
                'updated_at' => '2024-04-13 01:08:24',
                'word' => 'Stock',
            ),
            132 => 
            array (
                'created_at' => '2024-04-13 01:08:35',
                'id' => 138,
                'language_id' => 1,
                'translation' => 'نویعت',
                'updated_at' => '2024-04-13 01:08:35',
                'word' => 'Type',
            ),
            133 => 
            array (
                'created_at' => '2024-04-13 01:09:14',
                'id' => 139,
                'language_id' => 1,
                'translation' => 'عملیات',
                'updated_at' => '2024-04-13 01:09:14',
                'word' => 'Action',
            ),
            134 => 
            array (
                'created_at' => '2024-04-13 01:09:24',
                'id' => 140,
                'language_id' => 1,
                'translation' => 'لغو',
                'updated_at' => '2024-04-13 01:09:24',
                'word' => 'Cancel',
            ),
            135 => 
            array (
                'created_at' => '2024-04-13 01:09:43',
                'id' => 141,
                'language_id' => 1,
                'translation' => 'هیج جنس انتخاب نشده',
                'updated_at' => '2024-04-13 01:09:43',
                'word' => 'No product selected',
            ),
            136 => 
            array (
                'created_at' => '2024-04-13 01:10:05',
                'id' => 142,
                'language_id' => 1,
                'translation' => 'اضافه کردن',
                'updated_at' => '2024-04-13 01:10:05',
                'word' => 'Addition',
            ),
            137 => 
            array (
                'created_at' => '2024-04-13 01:10:20',
                'id' => 143,
                'language_id' => 1,
                'translation' => 'کم کردن',
                'updated_at' => '2024-04-13 01:10:20',
                'word' => 'Subtraction',
            ),
            138 => 
            array (
                'created_at' => '2024-04-13 01:10:48',
                'id' => 144,
                'language_id' => 1,
                'translation' => 'تنظیمات موفقانه انجام شد',
                'updated_at' => '2024-04-13 01:10:48',
                'word' => 'Adjustment completed successfully',
            ),
            139 => 
            array (
                'created_at' => '2024-04-13 01:11:11',
                'id' => 145,
                'language_id' => 1,
                'translation' => 'تاریخ اجراآت',
                'updated_at' => '2024-04-13 01:11:11',
                'word' => 'Created on',
            ),
            140 => 
            array (
                'created_at' => '2024-04-13 01:11:37',
                'id' => 146,
                'language_id' => 1,
                'translation' => 'معلومات تظیمات اجناس',
                'updated_at' => '2024-04-13 01:11:37',
                'word' => 'Adjustments Details',
            ),
            141 => 
            array (
                'created_at' => '2024-04-13 01:11:47',
                'id' => 147,
                'language_id' => 1,
                'translation' => 'معلومات کلی',
                'updated_at' => '2024-04-13 01:11:47',
                'word' => 'Meta data',
            ),
            142 => 
            array (
                'created_at' => '2024-04-13 01:12:02',
                'id' => 148,
                'language_id' => 1,
                'translation' => 'لیست اجناس',
                'updated_at' => '2024-04-13 01:12:02',
                'word' => 'List of products',
            ),
            143 => 
            array (
                'created_at' => '2024-04-13 01:12:29',
                'id' => 149,
                'language_id' => 1,
                'translation' => 'واحد تنظیمات',
                'updated_at' => '2024-04-13 01:12:29',
                'word' => 'Adjustment unit',
            ),
            144 => 
            array (
                'created_at' => '2024-04-13 01:14:24',
                'id' => 150,
                'language_id' => 1,
                'translation' => 'لیست تمام خرید ها',
                'updated_at' => '2024-04-13 01:14:24',
                'word' => 'List of all purchases',
            ),
            145 => 
            array (
                'created_at' => '2024-04-18 16:13:31',
                'id' => 151,
                'language_id' => 1,
                'translation' => 'تنظیمات سیستم',
                'updated_at' => '2024-04-18 16:13:31',
                'word' => 'Application configurations',
            ),
        ));
        
        
    }
}