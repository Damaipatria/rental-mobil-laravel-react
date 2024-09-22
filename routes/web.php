<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// GET
// Client Route
Route::get('/', function () {
  return Inertia::render('pages/Home');
});

// Login
Route::get('/login', [LoginController::class, 'index'])->name('login');

// Admin Route
Route::get('/mobil-data', function () {
  return Inertia::render('admin/pages/Mobil');
})->middleware('auth');

// POST
// Login
Route::post('/login', [LoginController::class, 'authenticate']);
