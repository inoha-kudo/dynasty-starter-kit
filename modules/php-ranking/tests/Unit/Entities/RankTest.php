<?php

declare(strict_types=1);

namespace Miraiportal\Ranking\Tests\Unit\Entities;

use Miraiportal\Ranking\Entities\Rank;
use PHPUnit\Framework\TestCase;

final class RankTest extends TestCase
{
    public function test_of_with_value_at_min(): void
    {
        $this->assertInstanceOf(
            Rank::class,
            Rank::of(Rank::MIN),
        );
    }

    public function test_of_with_value_at_max(): void
    {
        $this->assertInstanceOf(
            Rank::class,
            Rank::of(Rank::MAX),
        );
    }

    public function test_of_with_value_less_than_min(): void
    {
        $value = Rank::MIN - 1;

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage(sprintf(
            'The provided value (%d) must be greater than or equal to %d.',
            $value,
            Rank::MIN,
        ));

        Rank::of($value);
    }

    public function test_of_with_value_greater_than_max(): void
    {
        $value = Rank::MAX + 1;

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage(sprintf(
            'The provided value (%d) must be less than or equal to %d.',
            $value,
            Rank::MAX,
        ));

        Rank::of($value);
    }

    public function test_value(): void
    {
        $value = Rank::MIN;

        $this->assertSame(
            $value,
            Rank::of($value)->value,
        );
    }
}
