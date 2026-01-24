<?php

declare(strict_types=1);

test('ping', function () {
    $this->artisan('app:ping')
        ->expectsOutput('pong')
        ->assertOk();
});
