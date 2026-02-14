<?php

declare(strict_types=1);

namespace Miraiportal\Ranking\Repositories;

use Miraiportal\Ranking\Entities\RankedTitleList;

interface RankedTitleWriteRepository
{
    public function add(RankedTitleList $rankedTitleList): void;
}
