<?php

declare(strict_types=1);

namespace Miraiportal\Ranking\Entities;

final readonly class RankingId
{
    private const int UINT8_MAX = 255;

    public const int MIN = 1;

    public const int MAX = self::UINT8_MAX;

    private function __construct(
        public int $value,
    ) {
        if ($value < self::MIN) {
            throw new \InvalidArgumentException(sprintf(
                'The provided value (%d) must be greater than or equal to %d.',
                $value,
                self::MIN,
            ));
        }
        if ($value > self::MAX) {
            throw new \InvalidArgumentException(sprintf(
                'The provided value (%d) must be less than or equal to %d.',
                $value,
                self::MAX,
            ));
        }
    }

    public static function of(int $value): self
    {
        return new self($value);
    }
}
