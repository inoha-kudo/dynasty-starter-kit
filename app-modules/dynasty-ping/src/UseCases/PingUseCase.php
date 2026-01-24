<?php

declare(strict_types=1);

namespace Dynasty\Ping\UseCases;

use Illuminate\Container\Attributes\Bind;

#[Bind(PingInteractor::class)]
interface PingUseCase
{
    public function handle(): string;
}
