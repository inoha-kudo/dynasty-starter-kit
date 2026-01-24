<?php

declare(strict_types=1);

namespace Dynasty\Ping\UseCases;

use Miraiportal\Ping\Services\PingService;

final class PingInteractor implements PingUseCase
{
    public function handle(): string
    {
        return PingService::ping();
    }
}
