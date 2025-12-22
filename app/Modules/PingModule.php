<?php

declare(strict_types=1);

namespace App\Modules;

final class PingModule
{
    private const string ROUTES_DIR = 'vendor/dynasty/ping/routes';

    public static function apiRoute(): string
    {
        return base_path(self::ROUTES_DIR.'/api.php');
    }

    public static function consoleRoute(): string
    {
        return base_path(self::ROUTES_DIR.'/console.php');
    }
}
