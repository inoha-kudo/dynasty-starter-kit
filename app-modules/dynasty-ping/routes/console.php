<?php

declare(strict_types=1);

use Dynasty\Ping\Console\Commands\PingCommand;
use Illuminate\Support\Facades\Artisan;

Artisan::command('app:ping', function () {
    $this->call(PingCommand::class);
})->purpose("Display 'pong'")->daily();
