<?php

declare(strict_types=1);

use Dynasty\Ping\Http\Controllers\PingWebController;
use Illuminate\Support\Facades\Route;

Route::get('page', PingWebController::class)->name('page');
