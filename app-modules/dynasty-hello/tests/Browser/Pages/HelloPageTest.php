<?php

declare(strict_types=1);

test('hello', function () {
    $page = visit(route('hello'));

    $page->assertSee('Hello, World!');
});
