<?php

use Illuminate\Support\Facades\Blade;

it('compiles @moduleVite directive correctly', function () {
    $expression = '$page';
    $compiled = Blade::compileString("@moduleVite($expression)");

    $expected = "<?php
                if (str_contains({$expression}['component'], '::')) {
                    [\$module, \$path] = explode('::', {$expression}['component']);
                    echo \Illuminate\Support\Facades\Vite::useHotFile(public_path('hot'))(['resources/js/app.ts', \"app-modules/{\$module}/resources/js/pages/{\$path}.vue\", 'webfonts.css']);
                } else {
                    echo \Illuminate\Support\Facades\Vite::useHotFile(public_path('hot'))(['resources/js/app.ts', \"resources/js/pages/{{$expression}['component']}.vue\", 'webfonts.css']);
                }
            ?>";

    expect($compiled)->toBe($expected);
});
