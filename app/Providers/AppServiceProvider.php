<?php

namespace App\Providers;

use App\Enums\Module;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Middleware\EnsureFeaturesAreActive;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    #[\Override]
    public function register(): void
    {
        self::applyConfigOverrides();

        if ($this->app->environment('local')) {
            $this->registerServiceProviders();
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        EnsureFeaturesAreActive::whenInactive(
            fn () => abort(Response::HTTP_NOT_FOUND),
        );

        $this->registerBladeDirective();
    }

    public static function moduleVite(array $page): \Illuminate\Support\HtmlString
    {
        $vite = \Illuminate\Support\Facades\Vite::useHotFile(base_path('public/hot'));

        if (str_contains($page['component'], '::')) {
            [$module, $path] = explode('::', $page['component']);

            return $vite(['resources/js/app.ts', "app-modules/{$module}/resources/js/pages/{$path}.vue", 'webfonts.css']);
        }

        return $vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue", 'webfonts.css']);
    }

    private function registerBladeDirective(): void
    {
        \Illuminate\Support\Facades\Blade::directive('moduleVite', function ($expression) {
            return "<?php echo \App\Providers\AppServiceProvider::moduleVite({$expression}); ?>";
        });
    }

    private static function applyConfigOverrides(): void
    {
        config([
            'l5-swagger.documentations.default.paths.annotations' => [
                base_path('app'),
                ...Module::apiModulePaths('/src'),
            ],
            'spectator.sources.local.base_path' => './storage/api-docs',
            'spectator.path_prefix' => 'api',
        ]);
    }

    private function registerServiceProviders(): void
    {
        if (class_exists(\Laravel\Telescope\TelescopeServiceProvider::class)) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }

        if (class_exists(\Fruitcake\TelescopeToolbar\ToolbarServiceProvider::class)) {
            $this->app->register(\Fruitcake\TelescopeToolbar\ToolbarServiceProvider::class);
        }
    }
}
