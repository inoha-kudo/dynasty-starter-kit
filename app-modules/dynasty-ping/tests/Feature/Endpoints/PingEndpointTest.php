<?php

declare(strict_types=1);

use Spectator\Spectator;

test('ping', function () {
    $this->get(route('ping'))
        ->assertOk()
        ->assertSeeText('pong');
});

describe('contract', function () {
    beforeEach(function () {
        Spectator::using('api-docs.json');
    });

    test('ping', function () {
        $this->get(route('ping'))
            ->assertValidRequest()
            ->assertValidResponse();
    });
});
