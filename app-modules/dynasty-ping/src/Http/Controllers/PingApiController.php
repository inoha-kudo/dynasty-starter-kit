<?php

declare(strict_types=1);

namespace Dynasty\Ping\Http\Controllers;

use Dynasty\Ping\UseCases\PingUseCase;
use Illuminate\Http\Response;
use OpenApi\Attributes as OA;

final readonly class PingApiController
{
    #[OA\Get(
        path: '/ping',
        summary: "Returns 'pong'",
        tags: ['Ping'],
        responses: [
            new OA\Response(
                response: 200,
                description: 'OK',
                content: new OA\MediaType(
                    mediaType: 'text/plain',
                    schema: new OA\Schema(
                        type: 'string',
                        example: 'pong',
                    ),
                ),
            ),
        ],
    )]
    public function __invoke(PingUseCase $interactor): Response
    {
        return response($interactor->handle())
            ->header('Content-Type', 'text/plain');
    }
}
