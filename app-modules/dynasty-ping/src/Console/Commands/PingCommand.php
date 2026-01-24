<?php

declare(strict_types=1);

namespace Dynasty\Ping\Console\Commands;

use Dynasty\Ping\UseCases\PingUseCase;
use Illuminate\Console\Command;

final class PingCommand extends Command
{
    protected $signature = 'app:ping';

    protected $description = "Display 'pong'";

    public function handle(PingUseCase $interactor): void
    {
        $this->info($interactor->handle());
    }
}
