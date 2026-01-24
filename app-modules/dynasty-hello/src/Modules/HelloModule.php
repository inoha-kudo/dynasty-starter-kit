<?php

declare(strict_types=1);

namespace Dynasty\Hello\Modules;

final class HelloModule
{
    private const string MODULE_DIR = 'app-modules/dynasty-hello';

    private const string ROUTES_DIR = self::MODULE_DIR.'/routes';

    public static function modulePath(): string
    {
        return base_path(self::MODULE_DIR);
    }

    public static function webRoutePath(): string
    {
        return base_path(self::ROUTES_DIR.'/web.php');
    }
}
