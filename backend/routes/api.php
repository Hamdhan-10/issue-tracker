<?php

use App\Http\Controllers\IssueController;
use Illuminate\Support\Facades\Route;

Route::get('/issues',[IssueController::class,'index']);
Route::post('/issues', [IssueController::class, 'store']);
Route::patch('/issues/{id}/status', [IssueController::class, 'updateStatus']);