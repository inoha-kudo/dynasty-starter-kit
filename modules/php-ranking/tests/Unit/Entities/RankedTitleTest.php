<?php

declare(strict_types=1);

namespace Miraiportal\Ranking\Tests\Unit\Entities;

use Carbon\CarbonImmutable;
use Miraiportal\Ranking\Entities\Rank;
use Miraiportal\Ranking\Entities\RankedTitle;
use Miraiportal\Ranking\Entities\RankingId;
use PHPUnit\Framework\TestCase;

final class RankedTitleTest extends TestCase
{
    private int $id;

    private int $rankingId;

    private CarbonImmutable $storedAt;

    private int $rank;

    private string $title;

    private array $metadata;

    private array $rankedTitle;

    protected function setUp(): void
    {
        parent::setUp();

        $this->id = 1;
        $this->rankingId = 1;
        $this->storedAt = CarbonImmutable::parse('2025-11-23T09:00:00+00:00');
        $this->rank = Rank::MIN;
        $this->title = 'title';
        $this->metadata = [
            'description' => 'description',
            'thumbnail' => 'thumbnail',
            'genre' => 'genre',
            'link' => 'link',
        ];

        $this->rankedTitle = [
            'id' => $this->id,
            'rankingId' => $this->rankingId,
            'storedAt' => $this->storedAt,
            'rank' => $this->rank,
            'title' => $this->title,
            'metadata' => $this->metadata,
        ];
    }

    public function test_create(): void
    {
        $this->assertInstanceOf(
            RankedTitle::class,
            RankedTitle::create(...$this->rankedTitle),
        );
    }

    public function test_values(): void
    {
        $rankedTitle = RankedTitle::create(...$this->rankedTitle);

        $this->assertSame(
            $this->id,
            $rankedTitle->id,
        );

        $this->assertEquals(
            RankingId::of($this->rankingId),
            $rankedTitle->rankingId,
        );

        $this->assertEquals(
            CarbonImmutable::parse($this->storedAt),
            $rankedTitle->storedAt,
        );

        $this->assertEquals(
            Rank::of($this->rank),
            $rankedTitle->rank,
        );

        $this->assertSame(
            $this->title,
            $rankedTitle->title,
        );

        $this->assertSame(
            $this->metadata,
            $rankedTitle->metadata,
        );
    }

    public function test_to_array(): void
    {
        $this->assertSame(
            [
                'id' => $this->id,
                'ranking_id' => $this->rankingId,
                'stored_at' => $this->storedAt->toIso8601String(),
                'rank' => $this->rank,
                'title' => $this->title,
                'metadata' => $this->metadata,
            ],
            RankedTitle::create(...$this->rankedTitle)->toArray(),
        );
    }
}
