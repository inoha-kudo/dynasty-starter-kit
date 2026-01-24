<?php

declare(strict_types=1);

namespace Dynasty\Ping\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class PingWebController
{
    public function __invoke(): Response
    {
        return Inertia::render('dynasty-ping::Ping');
    }
}
