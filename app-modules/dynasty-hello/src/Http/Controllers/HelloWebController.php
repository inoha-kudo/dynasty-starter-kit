<?php

declare(strict_types=1);

namespace Dynasty\Hello\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class HelloWebController
{
    public function __invoke(): Response
    {
        return Inertia::render('hello::Index', [
            'message' => 'World',
        ]);
    }
}
