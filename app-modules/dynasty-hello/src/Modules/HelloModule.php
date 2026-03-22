<?php

declare(strict_types=1);

namespace Dynasty\Hello\Modules;

final class HelloModule
{
    private const string ROUTES_DIR = 'vendor/dynasty/hello/routes';

    public static function webRoute(): string
    {
        return base_path(self::ROUTES_DIR.'/web.php');
    }
}
