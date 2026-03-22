<?php

test('basic example', function () {
    $page = visit(route('home'));

    $page->assertSee('Laravel');
});
