<?php

declare(strict_types=1);

namespace App\Enums;

use Dynasty\Hello\Modules\HelloModule;
use Dynasty\Ping\Modules\PingModule;
use Illuminate\Support\Facades\Route;
use Laravel\Pennant\Feature;
use Laravel\Pennant\Middleware\EnsureFeaturesAreActive;

enum Module: string
{
    case Hello = HelloModule::class;
    case Ping = PingModule::class;

    public static function defineFeatures(): void
    {
        foreach (self::cases() as $module) {
            Feature::define($module->value, true);
        }
    }

    public static function loadWebRoutes(): void
    {
        foreach (self::web() as $module) {
            $webRoutePath = $module::webRoutePath();
            assert(is_string($webRoutePath));

            Route::middleware([
                EnsureFeaturesAreActive::using($module),
                'web',
            ])->group($webRoutePath);
        }
    }

    public static function loadApiRoutes(): void
    {
        foreach (self::api() as $module) {
            $apiRoutePath = $module::apiRoutePath();
            assert(is_string($apiRoutePath));

            Route::middleware([
                EnsureFeaturesAreActive::using($module),
                'api',
            ])->prefix('api')->group($apiRoutePath);
        }
    }

    public static function loadConsoleRoutes(): void
    {
        foreach (self::console() as $module) {
            $consoleRoutePath = $module::consoleRoutePath();
            assert(is_string($consoleRoutePath));

            require $consoleRoutePath;
        }
    }

    /** @return string[] */
    public static function apiModulePaths(string $suffix = ''): array
    {
        return array_map(
            function (string $module) use ($suffix) {
                $modulePath = $module::modulePath();
                assert(is_string($modulePath));

                return $modulePath.$suffix;
            },
            self::api(),
        );
    }

    /** @return class-string[] */
    private static function web(): array
    {
        return self::modulesDefining('webRoutePath');
    }

    /** @return class-string[] */
    private static function api(): array
    {
        return self::modulesDefining('apiRoutePath');
    }

    /** @return class-string[] */
    private static function console(): array
    {
        return self::modulesDefining('consoleRoutePath');
    }

    /** @return class-string[] */
    private static function modulesDefining(string $method): array
    {
        return array_filter(
            array_map(fn (self $module) => $module->value, self::cases()),
            fn (string $class) => is_callable([$class, $method]),
        );
    }
}
