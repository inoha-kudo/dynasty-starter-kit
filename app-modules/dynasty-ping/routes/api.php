<?php

declare(strict_types=1);

use Dynasty\Ping\Http\Controllers\PingApiController;
use Illuminate\Support\Facades\Route;

Route::get('ping', PingApiController::class)->name('ping');
