<?php
namespace App\Helpers;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\File;

    class Helpers
{
    public static function removeImageFromUrl($url) : void {
        $parsedUrl = parse_url($url);
        $path = $parsedUrl['path'];
        $absolutePath = public_path($path);
        if(File::exists($absolutePath)){
            File::delete($absolutePath);
        }
    }
    public static function formatFileSize($bytes) {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');
        $i = 0;

        while ($bytes >= 1024 && $i < count($units) - 1) {
            $bytes /= 1024;
            $i++;
        }
        return round($bytes, 2) . ' ' . $units[$i];
    }
    public static function filterByDates($query, $field_name='created_at'){
        $date = request()->get('date');
        $from_date = request()->get('from_date');
        $to_date = request()->get('to_date');

        switch ($date) {
            case 'TODAY':
                $query = $query->whereDate($field_name, Carbon::today());
                break;
            case 'YESTERDAY':
                $query = $query->whereDate($field_name, Carbon::yesterday());
                break;
            case 'LAST_7':
                $query = $query->whereBetween($field_name, [Carbon::now()->subDays(6), Carbon::now()]);
                break;
            case 'LAST_30':
                $query = $query->whereBetween($field_name, [Carbon::now()->subDays(29), Carbon::now()]);
                break;
            case 'THIS_WEEK':
                $query = $query->whereBetween($field_name, [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
                break;
            case 'LAST_WEEK':
                $query = $query->whereBetween($field_name, [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->subWeek()->endOfWeek()]);
                break;
            case 'THIS_MONTH':
                $query = $query->whereMonth($field_name, Carbon::now()->month);
                break;
            case 'LAST_MONTH':
                $query = $query->whereMonth($field_name, Carbon::now()->subMonth()->month);
                break;
            case 'THIS_QUARTER':
                $query = $query->whereBetween($field_name, [Carbon::now()->startOfQuarter(), Carbon::now()->endOfQuarter()]);
                break;
            case 'LAST_QUARTER':
                $query = $query->whereBetween($field_name, [Carbon::now()->subQuarter()->startOfQuarter(), Carbon::now()->subQuarter()->endOfQuarter()]);
                break;
            case 'THIS_YEAR':
                $query = $query->whereYear($field_name, Carbon::now()->year);
                break;
            case 'LAST_YEAR':
                $query = $query->whereYear($field_name, Carbon::now()->subYear()->year);
                break;
            case 'ALL_TIME':
                // No additional filtering needed
                break;
            case 'CUSTOM':
                $query = $query->whereBetween($field_name, [$from_date, $to_date]);
                break;
        }

        return $query;
    }

        public static function fileExt($file_name)
        {
            $file_name_array = explode('.', $file_name);
            return end($file_name_array);
        }
        public static function storeFile($file, $relation_id, $relation_type, $folder_prepend='')
        {
            $file_path = $file->store($relation_type.'/'.$relation_id.'/'.$folder_prepend, 'public');
            return \App\Models\File::query()->create([
                'relation_id' => $relation_id,
                'relation_type' => $relation_type,
                'file_path' => $file_path,
                'folder_prepend' => $folder_prepend,
                'file_url' => asset('storage/'.$file_path),
                'file_size' => $file->getSize(),
                'file_name' => $file->getClientOriginalName(),
                'created_by' => auth()->id()
            ]);
        }

        public static function removeFile($relation_id, $relation_type, $folder_prepend)
        {
            $exitsFile = \App\Models\File::query()
                ->where('relation_id', $relation_id)
                ->where('folder_prepend', $folder_prepend)
                ->where('relation_type', $relation_type)->first();
            if($exitsFile){
                static::removeImageFromUrl($exitsFile->file_url);
                $exitsFile->delete();
            }
        }
        public static function deleteFile($file_id)
        {
            $exitsFile = \App\Models\File::query()->find($file_id);
            if($exitsFile){
                static::removeImageFromUrl($exitsFile->file_url);
                $exitsFile->delete();
            }
        }
        public static function uploadFile($file, $relation_id, $relation_type, $folder_prepend='', $replace= false, $fileId = 0)
        {
            if($file != null){
                if($replace){
                    if($fileId != 0){
                        static::deleteFile($fileId);
                    }else{
                        static::removeFile($relation_id, $relation_type, $folder_prepend);
                    }
                    return static::storeFile($file, $relation_id, $relation_type, $folder_prepend);
                }
                else{
                    return static::storeFile($file, $relation_id, $relation_type, $folder_prepend);
                }
            }
        }

        public static function getDurationMonths($duration)
        {
            switch ($duration){
                case 'Monthly':
                    return 1;
                case 'Quarterly':
                    return 3;
                case 'Biannually':
                    return 6;
                case 'Annually':
                    return 12;
            }
        }
        public static function translate($word, $variables = [], $defaultLang=null)
        {
            if(!$defaultLang){
                $lang = request()->header('Lang')??'eng';
            }else{
                $lang = $defaultLang;
            }

            switch ($lang) {
                case 'eng':
                    if (count($variables) > 0) {
                        $word = strtr($word, $variables);
                    }

                    return str_replace(['[', ']'], ['', ''], $word);
                default:
                    $words = LanguagesController::getLanguageWords($lang);
                    $array_key = mb_strtolower(trim(str_replace(' ', '-', $word)));
                    if (isset($words[$array_key])) {
                        $new_words = $words[$array_key];
                        if (count($variables) > 0) {
                            $new_words = strtr($new_words, $variables);
                        }

                        return str_replace(['[', ']'], ['', ''], $new_words);
                    } else {
                        if (count($variables) > 0) {
                            $word = strtr($word, $variables);
                        }

                        return str_replace(['[', ']'], ['', ''], $word);
                    }
            }
        }
}
