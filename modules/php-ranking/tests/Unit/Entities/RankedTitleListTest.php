<?php

declare(strict_types=1);

namespace Miraiportal\Ranking\Tests\Unit\Entities;

use Carbon\CarbonImmutable;
use DomainException;
use Miraiportal\Ranking\Entities\Rank;
use Miraiportal\Ranking\Entities\RankedTitle;
use Miraiportal\Ranking\Entities\RankedTitleList;
use Miraiportal\Ranking\Entities\RankingId;
use PHPUnit\Framework\TestCase;

final class RankedTitleListTest extends TestCase
{
    private int $rank;

    private int $rankingId;

    private CarbonImmutable $storedAt;

    private array $rankedTitles;

    protected function setUp(): void
    {
        parent::setUp();

        $this->rankingId = RankingId::MIN;
        $this->storedAt = CarbonImmutable::now();
        $this->rank = Rank::MIN;

        $this->rankedTitles = [
            RankedTitle::create($this->rankingId, $this->storedAt, $this->rank, 'title_'.$this->rank),
            RankedTitle::create($this->rankingId, $this->storedAt, $this->rank + 1, 'title_'.($this->rank + 1)),
        ];
    }

    public function test_from_with_ranked_titles_at_min_count(): void
    {
        $this->assertInstanceOf(
            RankedTitleList::class,
            RankedTitleList::from(
                RankedTitle::create($this->rankingId, $this->storedAt, Rank::MIN, 'title_'.Rank::MIN),
            ),
        );
    }

    public function test_from_with_ranked_titles_at_max_count(): void
    {
        $this->assertInstanceOf(
            RankedTitleList::class,
            RankedTitleList::from(
                ...array_map(
                    fn (int $i) => RankedTitle::create($this->rankingId, $this->storedAt, $i, "title_$i"),
                    range(Rank::MIN, Rank::MAX),
                ),
            ),
        );
    }

    public function test_from_with_ranked_titles_having_non_unique_titles(): void
    {
        $this->expectException(DomainException::class);
        $this->expectExceptionMessage('The provided ranked titles must have unique titles per (ranking_id, stored_at).');

        RankedTitleList::from(
            RankedTitle::create($this->rankingId, $this->storedAt, $this->rank, 'title'),
            RankedTitle::create($this->rankingId, $this->storedAt, $this->rank + 1, 'title'),
        );
    }

    public function test_all(): void
    {
        $this->assertSame(
            $this->rankedTitles,
            RankedTitleList::from(...$this->rankedTitles)->all(),
        );
    }

    public function test_to_array(): void
    {
        $this->assertSame(
            [
                [
                    'id' => null,
                    'ranking_id' => $this->rankingId,
                    'stored_at' => $this->storedAt->toIso8601String(),
                    'rank' => $this->rank,
                    'title' => 'title_'.$this->rank,
                    'metadata' => null,
                ],
                [
                    'id' => null,
                    'ranking_id' => $this->rankingId,
                    'stored_at' => $this->storedAt->toIso8601String(),
                    'rank' => $this->rank + 1,
                    'title' => 'title_'.($this->rank + 1),
                    'metadata' => null,
                ],
            ],
            RankedTitleList::from(...$this->rankedTitles)->toArray(),
        );
    }

    public function test_add(): void
    {
        $this->assertEquals(
            RankedTitleList::from(...$this->rankedTitles),
            RankedTitleList::from()->add(RankedTitleList::from(...$this->rankedTitles)),
        );
    }
}
