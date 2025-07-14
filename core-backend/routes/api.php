<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|lang
*/

Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/user', [\App\Http\Controllers\UserManagement\UserManagementController::class, 'user']);
    Route::post('/change-password', [\App\Http\Controllers\UserManagement\UserManagementController::class, 'changePassword']);

    Route::resource('company', \App\Http\Controllers\CompanyController::class);
    Route::put('company/{company}/validateStep/{step}', [\App\Http\Controllers\CompanyController::class, 'validateStep']);
    Route::resource('company/owner', \App\Http\Controllers\CompanyOwnerController::class);
    Route::resource('employees', \App\Http\Controllers\EmployeeController::class);

    Route::get( 'document/{relation_id}/{relation_type}', [\App\Http\Controllers\DocumentController::class, 'getDocuments']);
    Route::post( 'document/{relation_id}/{relation_type}', [\App\Http\Controllers\DocumentController::class, 'store']);
    Route::delete( 'document/{relation_id}/{relation_type}', [\App\Http\Controllers\DocumentController::class, 'destroy']);
    Route::delete( 'document/{relation_id}/{relation_type}/{document}', [\App\Http\Controllers\DocumentController::class, 'destroy']);

    Route::group(['prefix' => 'user-management'], function (){
        Route::resource('users', \App\Http\Controllers\UserManagement\UserManagementController::class);
        Route::resource('customers', \App\Http\Controllers\UserManagement\CustomersController::class);
        Route::resource('suppliers', \App\Http\Controllers\UserManagement\SupplierController::class);
        Route::resource('roles', \App\Http\Controllers\UserManagement\RoleController::class);

        Route::middleware(['isSuperAdmin'])->group(function(){
            Route::resource('permission-groups', \App\Http\Controllers\UserManagement\PermissionGroupController::class);
            Route::post('permission-groups/update-order', [\App\Http\Controllers\UserManagement\PermissionGroupController::class, 'updatePermissionSort']);
            Route::resource('permission', \App\Http\Controllers\UserManagement\PermissionController::class);
        });

        Route::group(['prefix' => 'activity-log'], function (){
            Route::get('', [\App\Http\Controllers\UserManagement\ActivityLogController::class, 'index']);
            Route::get('user-log/{user}', [\App\Http\Controllers\UserManagement\ActivityLogController::class, 'getUserLog']);
            Route::get('{log}', [\App\Http\Controllers\UserManagement\ActivityLogController::class, 'getActivityLog']);
            Route::post('restore-log/{log}', [\App\Http\Controllers\UserManagement\ActivityLogController::class, 'restoreLog']);
        });

        Route::get('login-log', [\App\Http\Controllers\UserManagement\UserManagementController::class, 'loginLog']);
    });

    Route::group(['prefix' => 'configurations'], function(){

        Route::resource('languages', \App\Http\Controllers\Configurations\LanguagesController::class);
        Route::resource('language/words', \App\Http\Controllers\Configurations\LanguageWordController::class);
        Route::get('backup/run', [\App\Http\Controllers\Configurations\BackupController::class, 'run']);
        Route::get('backup/list', [\App\Http\Controllers\Configurations\BackupController::class, 'list']);
        Route::post('backup/change', [\App\Http\Controllers\Configurations\BackupController::class, 'change']);
        Route::delete('backup/delete/{db}', [\App\Http\Controllers\Configurations\BackupController::class, 'delete']);
        Route::resource('backup', \App\Http\Controllers\Configurations\BackupController::class);
    });


    Route::group(['prefix' => 'general'], function(){
        Route::get('provinces', [\App\Http\Controllers\GeneralController::class, 'provinces']);
        Route::get('zones', [\App\Http\Controllers\GeneralController::class, 'zones']);
        Route::get('company-type', [\App\Http\Controllers\GeneralController::class, 'companyType']);
        Route::get('degrees', [\App\Http\Controllers\GeneralController::class, 'degrees']);
        Route::get('positions', [\App\Http\Controllers\GeneralController::class, 'positions']);
    });

    Route::resource('notifications', \App\Http\Controllers\NotificationController::class);

});
Route::get('language/words', [\App\Http\Controllers\Configurations\LanguagesController::class, 'languageWords']);
Route::middleware('auth:sanctum')->post('/logout', [\App\Http\Controllers\UserManagement\UserManagementController::class, 'logout']);

Route::post('/login', [\App\Http\Controllers\UserManagement\UserManagementController::class, 'login']);
Route::any('general/{what}', [\App\Http\Controllers\GeneralController::class, "what"]);

