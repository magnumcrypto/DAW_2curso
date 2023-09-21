<?php

declare(strict_types=1);

namespace App\Core;

class RouteCollection
{
    private array $routes;

    public function __construct()
    {
        $this->routes = json_decode(file_get_contents(__DIR__ . '/../../config/routes.json'), true);
    }

    public function getRoutes(): array
    {
        return $this->routes;
    }
}
