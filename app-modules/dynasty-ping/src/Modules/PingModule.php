<?php

declare(strict_types=1);

namespace Dynasty\Ping\Modules;

final class PingModule
{
    private const string MODULE_DIR = 'app-modules/dynasty-ping';

    private const string ROUTES_DIR = self::MODULE_DIR.'/routes';

    public static function modulePath(): string
    {
        return base_path(self::MODULE_DIR);
    }

    public static function webRoutePath(): string
    {
        return base_path(self::ROUTES_DIR.'/web.php');
    }

    public static function apiRoutePath(): string
    {
        return base_path(self::ROUTES_DIR.'/api.php');
    }

    public static function consoleRoutePath(): string
    {
        return base_path(self::ROUTES_DIR.'/console.php');
    }
}
