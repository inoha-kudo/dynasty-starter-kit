<?php

declare(strict_types=1);

namespace Miraiportal\Ping\Tests\Unit\Services;

use Miraiportal\Ping\Services\PingService;
use PHPUnit\Framework\TestCase;

final class PingServiceTest extends TestCase
{
    public function test_ping(): void
    {
        $this->assertSame(
            'pong',
            PingService::ping(),
        );
    }
}
